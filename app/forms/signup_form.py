from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Regexp, Length
from app.models import User


def user_exists(form, field):
    # checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address already in use')


# def shop_name_exists(form, field):
#     # checking if shop_name is already in use
#     shop_name = field.data
#     user = User.query.filter(User.shop_name == shop_name).first()
#     if user:
#         raise ValidationError('Your shop\'s name is already in use')


class SignUpForm(FlaskForm):
    first_name = StringField(
        'first_name', validators=[DataRequired(message='First name is required'), Length(max=30, message='First name cannot exceed 30 characters')])
    email = StringField('email', validators=[DataRequired(message='Email is required'), user_exists, Email('Email address invalid'), Length(max=50, message='Email cannot exceed 40 characters')])
    password = StringField('password', validators=[DataRequired(message='Password is required'), Length(min=8, message='Password must contain at least 8 characters'), Regexp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$', message='Password must contain 1 uppercase, 1 lowercase, and 1 number')])
    # shop_name = StringField(
    #     'shop_name', validators=[DataRequired(), shop_name_exists, Length(min=4, max=20, message='Your shop\'s name must be between 4 and 20 characters'), Regexp('^[a-zA-Z]+$', message='Your shop\'s name must only include alphabetical characters')])
