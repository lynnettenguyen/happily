from app.models import db, Purchase
import datetime as dt


def seed_purchases():
    purchases = [
      Purchase(order_number='QzUkWE73', user_id=4, product_id=94, quantity=12, product_total=60.36,purchase_total=60.36, created_at=dt.datetime.now() - dt.timedelta(days=10)),
      Purchase(order_number='aINSdA3j', user_id=4, product_id=38, quantity=2, product_total=11.18,purchase_total=51.18),
      Purchase(order_number='aINSdA3j', user_id=4, product_id=45, quantity=1, product_total=40.00,purchase_total=51.18),
    ]

    for purchase in purchases:
        db.session.add(purchase)

    db.session.commit()


def undo_purchases():
    db.session.execute('TRUNCATE purchases RESTART IDENTITY CASCADE;')
    db.session.commit()
