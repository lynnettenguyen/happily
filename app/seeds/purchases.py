from app.models import db, Purchase


def seed_purchases():
    purchases = [
      Purchase(order_number='aINSdA3j', user_id=4, product_id=38, quantity=2, product_total=12.20,purchase_total=55.85),
      Purchase(order_number='aINSdA3j', user_id=4, product_id=45, quantity=1, product_total=43.65,purchase_total=55.85),
      Purchase(order_number='QzUkWE73', user_id=4, product_id=94, quantity=12, product_total=65.87,purchase_total=65.87)
    ]

    for purchase in purchases:
        db.session.add(purchase)

    db.session.commit()


def undo_purchases():
    db.session.execute('TRUNCATE purchases RESTART IDENTITY CASCADE;')
    db.session.commit()
