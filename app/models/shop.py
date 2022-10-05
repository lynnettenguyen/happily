from .db import db


class Shop(db.Model):
    __tablename__ = 'shops'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(200))
    location = db.Column(db.String(100))
    icon = db.Column(db.String(255))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True))

    owner = db.relationship(
        'User', back_populates='shop', foreign_keys=[user_id])

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'location': self.location,
            'icon': self.icon,
        }
