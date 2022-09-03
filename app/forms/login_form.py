from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, StopValidation
from app.models import User


def user_exists(form, field):
    # checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email address not found or invalid')


def password_matches(form, field):
    # checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if user:
        if not user.check_password(password):
            raise ValidationError('Password is invalid')
    # if not user:
        # raise ValidationError('Email address is invalid')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[
                        DataRequired(), user_exists, Email('Email address is invalid')])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
