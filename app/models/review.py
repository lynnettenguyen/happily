from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(
        db.Integer, db.ForeignKey('products.id'), nullable=False)
    content = db.Column(db.String(1000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True))

    user = db.relationship(
        'User', back_populates='reviews', foreign_keys=[user_id])
    product = db.relationship(
        'Product', back_populates='reviews', foreign_keys=[product_id])

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'content': self.content,
            'stars': self.stars,
            'created_at': self.created_at
        }

    def to_dict_stars(self):
        return {
            'stars' : int(self.stars)
        }
