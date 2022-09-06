from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, IntegerField, DateTimeField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError

class PurchaseForm(FlaskForm):
   order_number = StringField('order_number', validators=[DataRequired()])
   product_id = IntegerField('product_id', validators=[DataRequired()])
   product_total = DecimalField('price', validators=[DataRequired()])
   purchase_total = DecimalField('price', validators=[DataRequired()])
   quantity = IntegerField('quantity', validators=[DataRequired()])
