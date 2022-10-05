from app.models import db, Shop

def seed_shops():
    demo_shops = [
      Shop(user_id=1, title='Personalized decors to help navigate your wedding ceremony!', location='Conomi Islands, East Blue', icon='https://knotsy.s3.us-west-1.amazonaws.com/nami_icon.png'),
      Shop(user_id=2, title='Custom wedding designs', location='Torino Kingdom, South Blue', icon='https://knotsy.s3.us-west-1.amazonaws.com/chopper_icon.png'),
      Shop(user_id=3, title='Custom gifts for your special day', location=' Shimotsuki Village, East Blue', icon='https://knotsy.s3.us-west-1.amazonaws.com/zoro_icon.png'),
      Shop(user_id=4, title='Uniquely handcrafted wedding decor', location=' San Francisco, California', icon='https://knotsy.s3.us-west-1.amazonaws.com/demo_icon.png'),
      Shop(user_id=5, location='Ohara, West Blue', icon='https://knotsy.s3.us-west-1.amazonaws.com/robin_icon.png'),
      Shop(user_id=6, location='Germa Kingdom, North Blue', icon='https://knotsy.s3.us-west-1.amazonaws.com/sanji_icon.png'),
      Shop(user_id=7, location='Foosha Village, East Blue', icon='https://knotsy.s3.us-west-1.amazonaws.com/luffy_icon.png'),
      Shop(user_id=8, title='Handmade Wedding Decor', location='Syrup Village, East Blue', icon='https://knotsy.s3.us-west-1.amazonaws.com/usopp_icon.png'),
    ]

    for shop in demo_shops:
        db.session.add(shop)

    db.session.commit()

def undo_shops():
    db.session.execute('TRUNCATE shops RESTART IDENTITY CASCADE;')
    db.session.commit()
