from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(30), nullable=False)
    shop_name = db.Column(db.String(30), unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_pic = db.Column(db.String(255))

    inventory = db.relationship(
        'Product', back_populates='seller', cascade='all, delete')
    purchases = db.relationship(
        'Purchase', back_populates='buyer', cascade='all, delete')
    reviews = db.relationship(
        'Review', back_populates='user', cascade='all, delete')
    shop = db.relationship('Shop', back_populates='owner', cascade='all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'shop_name': self.shop_name,
            'email': self.email,
            'profile_pic': self.profile_pic
        }
