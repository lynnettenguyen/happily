from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Regexp, Length
from app.models import User


def user_exists(form, field):
    # checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use')


def shop_name_exists(form, field):
    # checking if shop_name is already in use
    shop_name = field.data
    user = User.query.filter(User.shop_name == shop_name).first()
    if user:
        raise ValidationError('Your shop\'s name is already in use')


class SignUpForm(FlaskForm):
    first_name = StringField(
        'first_name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists, Email('Email address is invalid')])
    password = StringField('password', validators=[DataRequired(), Regexp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$', message='Passwords must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number')])
    shop_name = StringField(
        'shop_name', validators=[DataRequired(), shop_name_exists, Length(min=4, message='Your shop\'s name must be at least 4 characters long')])
