from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
from wtforms.validators import Length


class ShopForm(FlaskForm):
    title = StringField('title', validators=[Length(max=200)])
    location = StringField('location', validators=[Length(max=100)])
    icon = StringField('icon', validators=[Length(max=100)])
    updated_at = DateTimeField('updated_at')
