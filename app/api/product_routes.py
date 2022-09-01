from math import prod
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Product, Review, Image, Category
from app.forms import ProductForm
from datetime import date

product = Blueprint('products', __name__)


@product.route("")
# list all products on homepage, include first image
def all_products():
  products = Product.query.all()

  product_details = []

  if products is not None:
    for product in products:
      product_id = product.to_dict_product_id()['id']
      product = product.to_dict()

      main_image = db.session.query(Image).filter(Image.product_id == product_id).first()

      product['image'] = main_image.to_url()

      product_details.append(product)

    return jsonify(product_details)


@product.route("/category/<category_name>")
# list filtered products by category
def filter_products_by_category(category_name):
  products = db.session.query(Product).filter(Product.category == category_name.title()).all()

  product_details = []

  if products is not None:
    for product in products:
      product_id = product.to_dict_product_id()['id']
      product = product.to_dict()

      main_image = db.session.query(Image).filter(Image.product_id == product_id).first()

      reviews_for_product = db.session.query(Review).filter(Review.product_id == product_id).all()
      reviews = [review.to_dict() for review in reviews_for_product]

      sum_stars = 0
      if len(reviews_for_product) > 0 :
        for review in reviews_for_product:
          sum_stars += review.to_dict_stars()['stars']

        avg = sum_stars // len(reviews_for_product)
        product['avg_stars'] = avg

      product['image'] = main_image.to_url()
      product['reviews'] = reviews
      product['num_reviews'] = len(reviews_for_product)

      product_details.append(product)

    return jsonify(product_details)



@product.route("/<int:product_id>")
# get product by id, include reviews, images
def product_by_id(product_id):
  product = db.session.query(Product).get(product_id)
  reviews = db.session.query(Review).filter(Review.product_id == product_id).all()
  images = db.session.query(Image).filter(Image.product_id == product_id).all()

  avg = None
  if reviews is not None:
    num_reviews = len(reviews)

    if num_reviews > 0:
      sum_stars = 0

      for review in reviews:
        sum_stars += review.to_dict_stars()['stars']

      avg = sum_stars // num_reviews

  if product is not None:
    product_details = []
    product = product.to_dict()
    product['reviews'] = [review.to_dict() for review in reviews]
    product['images'] = [image.to_url() for image in images]
    product['avg_stars'] = avg
    product_details.append(product)

    return jsonify(product_details)
  else:
    return {'errors': ['Product not found']}, 404


@product.route("", methods=['POST'])
@login_required
# add new product
def add_product():
  form = ProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  categories = Category.query.all()

  form.category.choices=[(category.to_name(), category.to_display_name() )for category in categories]

  if form.validate_on_submit():

    product = Product(
      seller_id = current_user.id,
      category = form.data['category'],
      name = form.data['name'],
      price = form.data['price'],
      description = form.data['description']
    )

    db.session.add(product)
    db.session.commit()

    return jsonify(product.to_dict()), 201

  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@product.route("/<int:product_id>", methods=['PUT'])
@login_required
# edit product by id
def edit_product(product_id):
  product = Product.query.get(product_id).to_dict()

  if product['seller_id'] == current_user.id:

    update = request.json

    if 'category' in update.keys():
      product['category'] = update['category']
    if 'name' in update.keys():
      product['name'] = update['name']
    if 'price' in update.keys():
      product['price'] = update['price']
    if 'description' in update.keys():
      product['description'] = update['description']

    product['updated_at'] = date.today()

    db.session.commit()
    return jsonify(product), 201

  else:
    return {'errors': ['Unauthorized']}, 403


@product.route("/<int:product_id>", methods=['DELETE'])
@login_required
# delete product by id
def delete_product(product_id):
  product = Product.query.get(product_id).to_dict()

  if product['seller_id'] == current_user.id:
    db.session.delete(product)
    db.session.commit()

    return jsonify({
      'message': 'Product successfully deleted',
      'status_code': 200
    }), 200

  else:
    return {'errors': ['Unauthorized']}, 403
