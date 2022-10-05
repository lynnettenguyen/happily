from email import message
from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
from wtforms.validators import Length


class ShopForm(FlaskForm):
    title = StringField('title', validators=[Length(max=100, message='Title must be less than 200 characters')])
    location = StringField('location', validators=[Length(max=60, message='Location must be less than 100 characters')])
    icon = StringField('icon', validators=[Length(max=255)])
    updated_at = DateTimeField('updated_at')
