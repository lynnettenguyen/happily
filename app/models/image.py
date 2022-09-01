from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(
        db.Integer, db.ForeignKey('products.id'), nullable=False)
    url = db.Column(db.String(255), nullable=False)

    product = db.relationship(
        'Product', back_populates='images', foreign_keys=[product_id])

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'url': self.url,
        }

    def to_url(self):
        return self.url
