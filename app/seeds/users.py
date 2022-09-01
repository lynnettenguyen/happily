from app.models import db, User


def seed_users():
    demo_users = [
    User(
        shop_name='KnotNamiDecors', first_name='Nami', email='nami@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/nami.png'),
    User(
        shop_name='KnotDemo', first_name='Demo', email='demo@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/demo.png'),
    User(
        shop_name='KnotChopperDesigns', first_name='Chopper', email='chopper@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/chopper.png'),
    User(
        shop_name='KnotZoroReady', first_name='Zoro', email='zoro@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/zoro.png'),
    User(
        shop_name='KnotRobinBridal', first_name='Robin', email='robin@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/robin.png'),
    User(
        shop_name='KnotSanjiPersonalized', first_name='Sanji', email='sanji@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/sanji.png'),
    User(
        shop_name='KnotLuffyStudios', first_name='Luffy', email='luffy@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/luffy.png'),
    User(
        shop_name='KnotUsoppHandmade', first_name='Usopp', email='usopp@aa.io', password='password', profile_pic='https://knotsy.s3.us-west-1.amazonaws.com/usopp.png')
    ]

    for user in demo_users:
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table because SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY resets the auto incrementing primary key, CASCADE deletes any dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
