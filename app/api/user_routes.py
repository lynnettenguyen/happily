from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import db, User, Product, Image
from app.forms import ShopForm
from .auth_routes import validation_errors_to_error_messages

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_shop_name(id):
    user = db.session.query(User).get(id)

    form = ShopForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        user.shop_name = form.data['shop_name']

        db.session.commit()

        return user.to_dict(), 200

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@user_routes.route("/<int:id>/products")
# list all products owned by user
@login_required
def user_products(id):
  products = Product.query.filter(Product.seller_id == id).all()

  product_details = []

  if products is not None:
    for product in products:
      product_id = product.to_dict_product_id()['id']
      product = product.to_dict()

      main_image = db.session.query(Image).filter(Image.product_id == product_id).first()

      if main_image is not None:
        product['images'] = [main_image.to_url()]

      product_details.append(product)

    return jsonify(product_details), 200
