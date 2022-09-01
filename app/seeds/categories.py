from app.models import db, Category


def seed_categories():
    categories = [
    Category(name='Arch'),
    Category(name='Attire'),
    Category(name='Bar'),
    Category(name='Gift'),
    Category(name='Jewelry'),
    Category(name='Seating'),
    Category(name='Signage'),
    Category(name='Groomsmen'),
    Category(name='Guestbook')
    ]

    for category in categories:
        db.session.add(category)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table because SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY resets the auto incrementing primary key, CASCADE deletes any dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
