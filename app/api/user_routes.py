from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User
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

@user_routes.route('/<int:id>')
@login_required
def edit_shop_name(id):
    user = User.query.get(id).to_dict()

    update = request.json

    if 'first_name' in update.keys():
        user['first_name'] = update['first_name']
    if 'shop_name' in update.keys():
        user['shop_name'] = update['shop_name']

    db.session.commit()
    return jsonify(user)
