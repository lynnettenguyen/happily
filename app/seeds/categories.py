from app.models import db, Category


def seed_categories():
    categories = [
    Category(name='Arches'),
    Category(name='Attire&Accessories'),
    Category(name='Bar&Menu'),
    Category(name='Favors&Gifts'),
    Category(name='Groom&Groomsmen'),
    Category(name='Guestbook'),
    Category(name='Seating'),
    Category(name='Signage'),
    Category(name='Table Decor & Centerpieces')
    ]

    for category in categories:
        db.session.add(category)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
