from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class ImageForm(FlaskForm):
   user_id = IntegerField('user_id', validators=[DataRequired()])
   product_id = IntegerField('product_id', validators=[DataRequired()])
