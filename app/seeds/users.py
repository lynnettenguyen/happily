from app.models import db, User


def seed_users():
    demo_users = [
    User(
        shop_name='HappilyNamiDecors', first_name='Nami', email='nami@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/nami.png'),
    User(
        shop_name='HappilyChopperDesigns', first_name='Tony Tony Chopper', email='chopper@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/chopper.png'),
    User(
        shop_name='HappilyZoroShop', first_name='Roronoa Zoro', email='zoro@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/zoro.png'),
    User(
        shop_name='HappilyDemo', first_name='Demo User', email='demo@aa.io', password='SecurePassword0411.', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/demo.jpeg'),
    User(
        shop_name='HappilyRobinBridal', first_name='Nico Robin', email='robin@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/robin.png'),
    User(
        shop_name='HappilySanjiPersonalized', first_name='Vinsmoke Sanji', email='sanji@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/sanji.png'),
    User(
        shop_name='HappilyLuffyStudios', first_name='Monkey D. Luffy', email='luffy@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/luffy.png'),
    User(
        shop_name='HappilyUsoppHandmade', first_name='Usopp', email='usopp@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/usopp.png')
    ]

    for user in demo_users:
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table because SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY resets the auto incrementing primary key, CASCADE deletes any dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
