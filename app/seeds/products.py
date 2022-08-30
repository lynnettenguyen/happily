from app.models import db, Product


def seed_products():
    products = [
    Product(
        seller_id=1, category='Welcome Sign', name='Wedding Welcome Sign, Wedding Sign, Welcome To Our Wedding Sign, Wedding Sign Board, Wedding Signs, Wedding Outdoor Sign, Our Wedding Board', price=57.07, description='This WEDDING WELCOME SIGN is expertly handcrafted just for you. Free shipping included.'),
    ]

    for user in demo_users:
        db.session.add(user)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
