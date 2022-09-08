from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Purchase
from app.forms import PurchaseForm


purchase = Blueprint('purchases', __name__)


@purchase.route("", methods=['POST'])
@login_required
# create new purchase
def create_purchase():
  form = PurchaseForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    purchase = Purchase(
      order_number = form.data['order_number'],
      user_id = current_user.id,
      product_id = form.data['product_id'],
      quantity = form.data['quantity'],
      product_total = form.data['product_total'],
      purchase_total = form.data['purchase_total']
    )

    db.session.add(purchase)
    db.session.commit()

    return jsonify(purchase.to_dict()), 201

  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@purchase.route("/<int:purchase_id>", methods=['DELETE'])
@login_required
# cancel purchase
def cancel_purchase(purchase_id):
  purchase = Purchase.query.filter(Purchase.id == purchase_id).first()


  if purchase.user_id == current_user.id:
    db.session.delete(purchase)
    db.session.commit()

    return jsonify({
    'message': 'Purchase successfully cancelled',
    'status_code': 200
  }), 200

  else:
    return {'errors': ['Unauthorized']}, 403
