from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email address provided was not found')


def password_matches(form, field):
    # checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email address provided was invalid')
    if not user.check_password(password):
        raise ValidationError('Password provided was invalid')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[
                        DataRequired(), user_exists, Email('Email address is invalid')])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
