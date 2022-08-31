from math import prod
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Product, Review
from app.forms import ProductForm
import json

product = Blueprint('products', __name__)


@product.route("")
# list all products
def all_products():
  products = [product.to_dict() for product in Product.query.all()]
  return jsonify(products) # returns an array [{},{}]


@product.route("/<int:product_id>")
# get product by id, include reviews
def product_by_id(product_id):
  product = db.session.query(Product).get(product_id)
  reviews = db.session.query(Review).filter(Review.product_id == product_id).all()

  if reviews is not None:
    num_reviews = len(reviews)
    stars = []
    sum_stars = 0

    for review in reviews:
      sum_stars += review.to_dict_stars()['stars']

    avg = sum_stars // num_reviews

  if product is not None:
    product_details = []
    product = product.to_dict()
    reviews = [review.to_dict() for review in reviews]
    product['reviews'] = reviews
    product['avg_stars'] = avg
    product_details.append(product)

    return jsonify(product_details)
  else:
    return {'errors': ['Product not found']}, 404


# @product.route("", methods=['POST'])
# @login_required
# # add new product
# def add_product():
#   form = ProductForm()
#   form['csrf_token'].data = request.cookies['csrf_token']

#   if form.validate_on_submit():

#     product = Product(
#       seller_id = current_user.id,
#       category = form.data['category'],
#       name = form.data['name'],
#       price = form.data['price'],
#       description = form.data['description']
#     )

#     db.session.add(product)
#     db.session.commit()

#     return jsonify(product.to_dict()), 201

#   else:
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @product.route("/<int:server_id>", methods=['PUT'])
# @login_required
# # edit server's name or picture by server id
# def edit_server(server_id):
#   server = Server.query.get(server_id)
#   update = request.json

#   if 'name' in update.keys():
#     server.name = update['name']
#   if 'server_pic' in update.keys():
#     server.server_pic = update['server_pic']

#   db.session.commit()
#   return jsonify(server.to_dict()), 200


# @product.route("/<int:server_id>", methods=['DELETE'])
# @login_required
# # delete server by id
# def delete_server(server_id):
#   server = Server.query.get(server_id)
#   db.session.delete(server)
#   db.session.commit()

#   return jsonify({
#     'message': 'Server successfully deleted',
#     'status_code': 200
#   }), 200


# @product.route("/<int:server_id>/channels")
# @login_required
# # get all server's channels
# def get_channels(server_id):
#   server = Server.query.get(server_id)
#   channels = [channel.to_dict() for channel in server.channels]
#   return jsonify(channels)


# @product.route("/<int:server_id>/channels", methods=['POST'])
# @login_required
# # create new channels within servers
# def create_channel(server_id):
#   form = ChannelForm()
#   form['csrf_token'].data = request.cookies['csrf_token']

#   if form.validate_on_submit():
#     # create channel
#     channel = Channel(
#       server_id = server_id,
#       name=form.data['name'],
#       topic=form.data['topic']
#     )

#     db.session.add(channel)
#     db.session.commit()

#     return jsonify(channel.to_dict()), 201

#   else:
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @product.route("/<int:server_id>/channels/<int:channel_id>", methods=['PUT'])
# @login_required
# # edit channel's name or topic by channel id
# def edit_channel(server_id, channel_id):
#   channel = Channel.query.filter(Channel.id == channel_id, Channel.server_id == server_id).first()
#   update = request.json

#   if 'name' in update.keys():
#     channel.name = update['name']
#   if 'topic' in update.keys():
#     channel.topic = update['topic']

#   db.session.commit()
#   return jsonify(channel.to_dict()), 200


# @product.route("/<int:server_id>/channels/<int:channel_id>", methods=['DELETE'])
# @login_required
# # delete channel by id
# def delete_channel(server_id, channel_id):
#   channel = Channel.query.filter(Channel.id == channel_id, Channel.server_id == server_id).first()
#   db.session.delete(channel)
#   db.session.commit()

#   return jsonify({
#     'message': 'Server successfully deleted',
#     'status_code': 200
#   }), 200
