from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import db, User
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
