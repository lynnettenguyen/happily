from flask import Blueprint, jsonify
from app.models import db, Product, Review, Image, Category, User


category = Blueprint('categories', __name__)


@category.route("")
# list all categories
def all_products():
  categories = [category.to_dict() for category in Category.query.all()]
  return jsonify(categories), 200

@category.route("/<category_name>")
# list filtered products by category
def products_by_category(category_name):
  products = db.session.query(Product).filter(Product.category == category_name.title()).all()

  product_details = []

  if products is not None:
    for product in products:
      product_id = product.to_dict_product_id()['id']
      product = product.to_dict()

      main_image = db.session.query(Image).filter(Image.product_id == product_id).first()

      reviews_for_product = db.session.query(Review).filter(Review.product_id == product_id).all()
      # reviews = [review.to_dict() for review in reviews_for_product]

      seller = db.session.query(User).filter(User.id == product['seller_id']).first()

      sum_stars = 0
      if len(reviews_for_product) > 0 :
        for review in reviews_for_product:
          sum_stars += review.to_dict_stars()['stars']

        avg = sum_stars // len(reviews_for_product)
        product['avg_stars'] = avg

      product['images'] = [main_image.to_url()]
      # product['reviews'] = reviews
      product['num_reviews'] = len(reviews_for_product)
      product['shop_name'] = seller.shop_name

      product_details.append(product)

    return jsonify(product_details), 200
