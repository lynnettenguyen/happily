from flask import Blueprint, request
from flask_login import current_user, login_user, logout_user
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
# turns the WTForms validation errors into a list
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            field = ' '.join(field.title().split('_'))
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
#authenticates a user
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
# logs a user in
    form = LoginForm()
    # get the csrf_token from the request cookie and put it into the form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
# registers new user
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            first_name=form.data['first_name'],
            email=form.data['email'],
            password=form.data['password'],
            profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/default-user.png'
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
 # returns unauthorized JSON when flask-login authentication fails
    return {'errors': ['Unauthorized']}, 401
