from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, IntegerField, SelectField
from wtforms.validators import DataRequired, Length, NumberRange


class ProductForm(FlaskForm):
   seller_id = IntegerField('seller_id', validators=[DataRequired()])
   category = SelectField('category', choices=[], validators=[DataRequired()])
   name = StringField('name', validators=[DataRequired(), Length(min=10, max=255, message='Name must be between 10 and 255 characters long')])
   price = DecimalField('price', validators=[DataRequired(), NumberRange(min=1, message='Price must be greater than $1.00')])
   description = StringField('description', validators=[DataRequired(), Length(min=10, max=2000, message='Description must be between 10 and 2000 characters long')])
