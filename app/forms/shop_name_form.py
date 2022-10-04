from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, Regexp, Length
from app.models import User


def shop_name_exists(form, field):
    # checking if shop_name is already in use
    shop_name = field.data
    user = User.query.filter(User.shop_name == shop_name).first()
    if user and current_user.id != user.id:
        raise ValidationError('Your shop\'s name is already in use')

class ShopNameForm(FlaskForm):
    shop_name = StringField(
        'shop_name', validators=[DataRequired(), shop_name_exists, Length(min=4, max=30, message='Your shop\'s name must be between 4 and 30 characters'), Regexp('^[a-zA-Z]+$', message='Your shop\'s name must only include alphabetical characters')])
