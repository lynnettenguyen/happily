from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Review
from app.forms import ReviewForm
from datetime import date

review = Blueprint('reviews', __name__)


@review.route("")
@login_required
# load all reviews by user
def all_reviews():

  reviews = Review.query.filter(Review.user_id == current_user.id).all()

  if reviews is not None:
    return jsonify([review.to_dict() for review in reviews])


@review.route("/<int:product_id>")
# load all reviews by product_id
def reviews_per_products(product_id):

  reviews = Review.query.filter(Review.product_id == product_id).all()

  if reviews is not None:
    return jsonify([review.to_dict() for review in reviews]), 200


@review.route("", methods=['POST'])
@login_required
# create new review
def create_purchase():
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    review = Review(
      user_id = current_user.id,
      content = form.data['content'],
      product_id = form.data['product_id'],
      stars = form.data['stars']
    )

    db.session.add(review)
    db.session.commit()

    return jsonify(review.to_dict()), 201

  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@review.route("/<int:review_id>", methods=['PUT'])
@login_required
# edit review by id
def edit_review(review_id):
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  review = Review.query.filter(Review.id == review_id).first()

  if review.user_id == current_user.id:

    if form.validate_on_submit():

        review.content = form.data['content']
        review.product_id = form.data['product_id']
        review.stars = form.data['stars']
        review.updated_at = date.today()

        db.session.commit()

        return jsonify(review.to_dict()), 201
    else:
      return {'errors': validation_errors_to_error_messages(form.errors)}, 400
  else:
    return {'errors': ['Unauthorized']}, 403



@review.route("/<int:review_id>", methods=['DELETE'])
@login_required
# delete review
def delete_review(review_id):
  review = Review.query.filter(Review.id == review_id).first()

  if review.user_id == current_user.id:
    db.session.delete(review)
    db.session.commit()

    return jsonify({
    'message': 'Review successfully cancelled',
    'status_code': 200
  }), 200

  else:
    return {'errors': ['Unauthorized']}, 403
