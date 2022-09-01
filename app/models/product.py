from .db import db


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float(precision=2, asdecimal=False), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True))

    seller = db.relationship(
        'User', back_populates='inventory', foreign_keys=[seller_id])
    images = db.relationship(
        'Image', back_populates='product', cascade='all, delete')
    reviews = db.relationship(
        'Review', back_populates='product', cascade='all, delete')
    purchased = db.relationship(
        'Purchase', back_populates='product', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'seller_id': self.seller_id,
            'category': self.category,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }

    def to_dict_with_created_at(self):
        return {
            'id': self.id,
            'seller_id': self.seller_id,
            'category': self.category,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'created_at': self.created_at,
        }

    def to_dict_product_id(self):
        return {
            'id': self.id,
        }
