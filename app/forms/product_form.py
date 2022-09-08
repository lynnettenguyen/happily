from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, SelectField, DateTimeField
from wtforms.validators import DataRequired, Length, NumberRange

# def validate_decimal(form, field):
#    if field.data != float(field.data):
#       raise ValidationError('Input must be a decimal')

class ProductForm(FlaskForm):
   name = StringField('name', validators=[DataRequired(), Length(min=10, max=140, message='Name must be between 10 and 140 characters long')])
   category = SelectField('category', choices=[], validators=[DataRequired()])
   price = DecimalField('price', validators=[DataRequired(), NumberRange(min=0.99, max=1000000, message='Price must be between $1.00 and $1,000,000')], places=2)
   description = StringField('description', validators=[DataRequired(), Length(min=10, max=1000, message='Description must be between 10 and 1000 characters long')])
   updated_at = DateTimeField('updated_at')
