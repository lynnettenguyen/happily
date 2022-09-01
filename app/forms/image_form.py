from sqlite3 import IntegrityError
from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, IntegerField, SelectField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError


class ImageForm(FlaskForm):
   user_id = IntegerField('user_id', validators=[DataRequired()])
   product_id = IntegerField('product_id', validators=[DataRequired()])
