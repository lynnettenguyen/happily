from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Product, Review, Image, Category, User, Shop
from app.forms import ShopForm
from datetime import date

shop = Blueprint('shop', __name__)


@shop.route("/<shopName>")
def products_by_shop(shopName):
  user = db.session.query(User).filter(User.shop_name == shopName).first()
  userId = user.to_dict()['id']

  shop = db.session.query(Shop).get(userId)

  return jsonify(shop.to_dict())
