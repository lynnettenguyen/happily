from app.models import db, Category


def seed_categories():
    categories = [
    Category(name='Arch'),
    Category(name='Attire'),
    Category(name='Bar'),
    Category(name='Decor'),
    Category(name='Gift'),
    Category(name='Glassware'),
    Category(name='Groomsmen'),
    Category(name='Guestbook'),
    Category(name='Jewelry'),
    Category(name='Seating'),
    Category(name='Signage')
    ]

    for category in categories:
        db.session.add(category)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
