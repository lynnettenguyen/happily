from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Product, Review, Image, Category, User, Purchase
from app.forms import PurchaseForm
from datetime import date

purchase = Blueprint('purchases', __name__)

@purchase.route("/<order_number>", methods=['DELETE'])
@login_required
# cancel purchase
def cancel_purchase(order_number):
  purchases = Purchase.query.filter(Purchase.order_number == order_number).all()

  for purchase in purchases:
    if purchase.user_id == current_user.id:
      db.session.delete(purchase)
      db.session.commit()

    else:
      return {'errors': ['Unauthorized']}, 403

  return jsonify({
    'message': 'Purchase successfully cancelled',
    'status_code': 200
  }), 200
