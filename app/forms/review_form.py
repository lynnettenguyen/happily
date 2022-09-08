from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField
from wtforms.validators import DataRequired, Length


class ReviewForm(FlaskForm):
   product_id = IntegerField('product_id', validators=[DataRequired()])
   content = StringField('content', validators=[DataRequired(), Length(min=10, max=1000, message='Review must be between 10 and 1000 characters long')])
   stars = IntegerField('stars', validators=[DataRequired()])
   updated_at = DateTimeField('updated_at')
