from app.models import db, User


def seed_users():
    demo_users = [
    User(
        shop_name='KnotDecorsDemo', first_name='Demo', email='demo@aa.io', password='password'),
    User(
        shop_name='KnotDesigns', first_name='Robin', email='robin@aa.io', password='password'),
    User(
        shop_name='KnotReady', first_name='Nami', email='nami@aa.io', password='password'),
    User(
        shop_name='KnotBridalWeddings', first_name='Chopper', email='chopper@aa.io', password='password'),
    User(
        shop_name='KnotStudios', first_name='Luffy', email='luffy@aa.io', password='password'),
    User(
        shop_name='KnotPersonalized', first_name='Sanji', email='sanji@aa.io', password='password'),
    ]

    for user in demo_users:
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table because SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY resets the auto incrementing primary key, CASCADE deletes any dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
