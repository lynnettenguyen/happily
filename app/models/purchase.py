from .db import db


class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    order_number = db.Column(db.String(20), nullable=False)
    user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(
        db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    product_total = db.Column(db.Float(precision=2, asdecimal=False), nullable=False)
    purchase_total = db.Column(db.Float(precision=2, asdecimal=False), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=db.func.now())

    buyer = db.relationship(
        'User', back_populates='purchases', foreign_keys=[user_id])
    product = db.relationship(
        'Product', back_populates='purchased', foreign_keys=[product_id])

    def to_dict(self):
        return {
            'id': self.id,
            'order_number': self.order_number,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'product_total': self.product_total,
            'purchase_total': self.purchase_total,
            'created_at': self.created_at
        }
