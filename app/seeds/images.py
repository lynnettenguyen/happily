from app.models import db, Image


def seed_images():
    images = [
    Image(
        user_id=1, product_id=1, url='https://knotsy.s3.us-west-1.amazonaws.com/p1.1.webp'),
    Image(
        user_id=1, product_id=1, url='https://knotsy.s3.us-west-1.amazonaws.com/p1.2.webp'),
    Image(
        user_id=1, product_id=1, url='https://knotsy.s3.us-west-1.amazonaws.com/p1.3.webp'),
    Image(
        user_id=1, product_id=2, url='https://knotsy.s3.us-west-1.amazonaws.com/p2.1.webp'),
    Image(
        user_id=1, product_id=2, url='https://knotsy.s3.us-west-1.amazonaws.com/p2.2.webp'),
    Image(
        user_id=2, product_id=3, url='https://knotsy.s3.us-west-1.amazonaws.com/p3.1.webp'),
    Image(
        user_id=2, product_id=3, url='https://knotsy.s3.us-west-1.amazonaws.com/p3.2.webp'),
    Image(
        user_id=2, product_id=3, url='https://knotsy.s3.us-west-1.amazonaws.com/p3.3.webp'),
    Image(
        user_id=1, product_id=4, url='https://knotsy.s3.us-west-1.amazonaws.com/p4.1.webp'),
    Image(
        user_id=1, product_id=4, url='https://knotsy.s3.us-west-1.amazonaws.com/p4.2.webp'),
    Image(
        user_id=1, product_id=4, url='https://knotsy.s3.us-west-1.amazonaws.com/p4.3.webp'),
    Image(
        user_id=2, product_id=5, url='https://knotsy.s3.us-west-1.amazonaws.com/p5.1.webp'),
    Image(
        user_id=2, product_id=6, url='https://knotsy.s3.us-west-1.amazonaws.com/p6.1.webp'),
    Image(
        user_id=1, product_id=7, url='https://knotsy.s3.us-west-1.amazonaws.com/p7.1.webp'),
    Image(
        user_id=1, product_id=7, url='https://knotsy.s3.us-west-1.amazonaws.com/p7.2.webp'),
    Image(
        user_id=3, product_id=8, url='https://knotsy.s3.us-west-1.amazonaws.com/p8.1.webp'),
    Image(
        user_id=3, product_id=8, url='https://knotsy.s3.us-west-1.amazonaws.com/p8.2.webp'),
    Image(
        user_id=3, product_id=8, url='https://knotsy.s3.us-west-1.amazonaws.com/p8.3.webp'),
    Image(
        user_id=2, product_id=9, url='https://knotsy.s3.us-west-1.amazonaws.com/p9.1.webp'),
    Image(
        user_id=2, product_id=9, url='https://knotsy.s3.us-west-1.amazonaws.com/p9.2.webp'),
    Image(
        user_id=1, product_id=10, url='https://knotsy.s3.us-west-1.amazonaws.com/p10.1.webp'),
    Image(
        user_id=3, product_id=11, url='https://knotsy.s3.us-west-1.amazonaws.com/p11.1.webp'),
    Image(
        user_id=1, product_id=12, url='https://knotsy.s3.us-west-1.amazonaws.com/p12.1.webp'),
    Image(
        user_id=3, product_id=13, url='https://knotsy.s3.us-west-1.amazonaws.com/p13.1.webp'),
    Image(
        user_id=3, product_id=13, url='https://knotsy.s3.us-west-1.amazonaws.com/p13.2.webp'),
    Image(
        user_id=2, product_id=14, url='https://knotsy.s3.us-west-1.amazonaws.com/p14.1.webp'),
    Image(
        user_id=2, product_id=14, url='https://knotsy.s3.us-west-1.amazonaws.com/p14.2.webp'),
    Image(
        user_id=2, product_id=15, url='https://knotsy.s3.us-west-1.amazonaws.com/p15.1.webp'),
    Image(
        user_id=2, product_id=15, url='https://knotsy.s3.us-west-1.amazonaws.com/p15.2.webp'),
    Image(
        user_id=2, product_id=15, url='https://knotsy.s3.us-west-1.amazonaws.com/p15.3.webp'),
    Image(
        user_id=4, product_id=16, url='https://knotsy.s3.us-west-1.amazonaws.com/p16.1.webp'),
    Image(
        user_id=4, product_id=16, url='https://knotsy.s3.us-west-1.amazonaws.com/p16.2.webp'),
    Image(
        user_id=4, product_id=17, url='https://knotsy.s3.us-west-1.amazonaws.com/p17.1.webp'),
    Image(
        user_id=4, product_id=17, url='https://knotsy.s3.us-west-1.amazonaws.com/p17.2.webp'),
    Image(
        user_id=2, product_id=18, url='https://knotsy.s3.us-west-1.amazonaws.com/p18.1.webp'),
    Image(
        user_id=2, product_id=18, url='https://knotsy.s3.us-west-1.amazonaws.com/p18.2.webp'),
    Image(
        user_id=1, product_id=19, url='https://knotsy.s3.us-west-1.amazonaws.com/p19.1.webp'),
    Image(
        user_id=1, product_id=19, url='https://knotsy.s3.us-west-1.amazonaws.com/p19.2.webp'),
    Image(
        user_id=3, product_id=20, url='https://knotsy.s3.us-west-1.amazonaws.com/p20.1.webp'),
    Image(
        user_id=3, product_id=20, url='https://knotsy.s3.us-west-1.amazonaws.com/p20.2.webp'),
    Image(
        user_id=3, product_id=20, url='https://knotsy.s3.us-west-1.amazonaws.com/p20.3.webp'),
    Image(
        user_id=1, product_id=21, url='https://knotsy.s3.us-west-1.amazonaws.com/p21.1.webp'),
    Image(
        user_id=4, product_id=22, url='https://knotsy.s3.us-west-1.amazonaws.com/p22.1.webp'),
    Image(
        user_id=3, product_id=23, url='https://knotsy.s3.us-west-1.amazonaws.com/p23.1.webp'),
    Image(
        user_id=3, product_id=23, url='https://knotsy.s3.us-west-1.amazonaws.com/p23.2.webp'),
    Image(
        user_id=4, product_id=24, url='https://knotsy.s3.us-west-1.amazonaws.com/p24.1.webp'),
    Image(
        user_id=4, product_id=24, url='https://knotsy.s3.us-west-1.amazonaws.com/p24.2.webp'),
    Image(
        user_id=4, product_id=24, url='https://knotsy.s3.us-west-1.amazonaws.com/p24.3.webp'),
    Image(
        user_id=3, product_id=25, url='https://knotsy.s3.us-west-1.amazonaws.com/p25.1.webp'),
    Image(
        user_id=3, product_id=25, url='https://knotsy.s3.us-west-1.amazonaws.com/p25.2.webp'),
    Image(
        user_id=3, product_id=25, url='https://knotsy.s3.us-west-1.amazonaws.com/p25.3.webp'),
    Image(
        user_id=1, product_id=26, url='https://knotsy.s3.us-west-1.amazonaws.com/p26.1.webp'),
    Image(
        user_id=1, product_id=26, url='https://knotsy.s3.us-west-1.amazonaws.com/p26.2.webp'),
    Image(
        user_id=2, product_id=27, url='https://knotsy.s3.us-west-1.amazonaws.com/p27.1.webp'),
    Image(
        user_id=2, product_id=27, url='https://knotsy.s3.us-west-1.amazonaws.com/p27.2.webp'),
    Image(
        user_id=1, product_id=28, url='https://knotsy.s3.us-west-1.amazonaws.com/p28.1.webp'),
    Image(
        user_id=1, product_id=28, url='https://knotsy.s3.us-west-1.amazonaws.com/p28.2.webp'),
    Image(
        user_id=4, product_id=29, url='https://knotsy.s3.us-west-1.amazonaws.com/p29.1.webp'),
    Image(
        user_id=4, product_id=29, url='https://knotsy.s3.us-west-1.amazonaws.com/p29.2.webp'),
    Image(
        user_id=3, product_id=30, url='https://knotsy.s3.us-west-1.amazonaws.com/p30.1.webp'),
    Image(
        user_id=3, product_id=30, url='https://knotsy.s3.us-west-1.amazonaws.com/p30.2.webp'),
    Image(
        user_id=3, product_id=30, url='https://knotsy.s3.us-west-1.amazonaws.com/p30.3.webp'),
    Image(
        user_id=2, product_id=31, url='https://knotsy.s3.us-west-1.amazonaws.com/p31.1.webp'),
    Image(
        user_id=2, product_id=31, url='https://knotsy.s3.us-west-1.amazonaws.com/p31.2.webp'),
    Image(
        user_id=1, product_id=32, url='https://knotsy.s3.us-west-1.amazonaws.com/p32.1.webp'),
    Image(
        user_id=1, product_id=32, url='https://knotsy.s3.us-west-1.amazonaws.com/p32.2.webp'),
    Image(
        user_id=1, product_id=32, url='https://knotsy.s3.us-west-1.amazonaws.com/p32.3.webp'),
    Image(
        user_id=3, product_id=33, url='https://knotsy.s3.us-west-1.amazonaws.com/p33.1.webp'),
    Image(
        user_id=3, product_id=33, url='https://knotsy.s3.us-west-1.amazonaws.com/p33.2.webp'),
    Image(
        user_id=3, product_id=33, url='https://knotsy.s3.us-west-1.amazonaws.com/p33.3.webp'),
    Image(
        user_id=3, product_id=33, url='https://knotsy.s3.us-west-1.amazonaws.com/p33.4.webp'),
    Image(
        user_id=3, product_id=34, url='https://knotsy.s3.us-west-1.amazonaws.com/p34.1.webp'),
    Image(
        user_id=3, product_id=34, url='https://knotsy.s3.us-west-1.amazonaws.com/p34.2.webp'),
    Image(
        user_id=4, product_id=35, url='https://knotsy.s3.us-west-1.amazonaws.com/p35.1.webp'),
    Image(
        user_id=4, product_id=35, url='https://knotsy.s3.us-west-1.amazonaws.com/p35.2.webp'),
    Image(
        user_id=4, product_id=35, url='https://knotsy.s3.us-west-1.amazonaws.com/p35.3.webp'),
    Image(
        user_id=4, product_id=36, url='https://knotsy.s3.us-west-1.amazonaws.com/p36.1.webp'),
    Image(
        user_id=4, product_id=36, url='https://knotsy.s3.us-west-1.amazonaws.com/p36.2.webp'),
    Image(
        user_id=4, product_id=37, url='https://knotsy.s3.us-west-1.amazonaws.com/p37.1.webp'),
    Image(
        user_id=4, product_id=37, url='https://knotsy.s3.us-west-1.amazonaws.com/p37.2.webp'),
    Image(
        user_id=1, product_id=38, url='https://knotsy.s3.us-west-1.amazonaws.com/p38.1.webp'),
    Image(
        user_id=1, product_id=38, url='https://knotsy.s3.us-west-1.amazonaws.com/p38.2.webp'),
    Image(
        user_id=1, product_id=38, url='https://knotsy.s3.us-west-1.amazonaws.com/p38.3.webp'),
    Image(
        user_id=3, product_id=39, url='https://knotsy.s3.us-west-1.amazonaws.com/p39.1.webp'),
    Image(
        user_id=3, product_id=39, url='https://knotsy.s3.us-west-1.amazonaws.com/p39.2.webp'),
    Image(
        user_id=3, product_id=40, url='https://knotsy.s3.us-west-1.amazonaws.com/p40.1.webp'),
    Image(
        user_id=3, product_id=40, url='https://knotsy.s3.us-west-1.amazonaws.com/p40.2.webp'),
    Image(
        user_id=3, product_id=40, url='https://knotsy.s3.us-west-1.amazonaws.com/p40.3.webp'),
    Image(
        user_id=4, product_id=41, url='https://knotsy.s3.us-west-1.amazonaws.com/p41.1.webp'),
    Image(
        user_id=4, product_id=41, url='https://knotsy.s3.us-west-1.amazonaws.com/p41.2.webp'),
    Image(
        user_id=4, product_id=41, url='https://knotsy.s3.us-west-1.amazonaws.com/p41.3.webp'),
    Image(
        user_id=5, product_id=42, url='https://knotsy.s3.us-west-1.amazonaws.com/p42.1.webp'),
    Image(
        user_id=5, product_id=42, url='https://knotsy.s3.us-west-1.amazonaws.com/p42.2.webp'),
    Image(
        user_id=5, product_id=42, url='https://knotsy.s3.us-west-1.amazonaws.com/p42.3.webp'),
    Image(
        user_id=5, product_id=43, url='https://knotsy.s3.us-west-1.amazonaws.com/p43.1.webp'),
    Image(
        user_id=5, product_id=43, url='https://knotsy.s3.us-west-1.amazonaws.com/p43.2.webp'),
    Image(
        user_id=4, product_id=44, url='https://knotsy.s3.us-west-1.amazonaws.com/p44.1.webp'),
    Image(
        user_id=4, product_id=44, url='https://knotsy.s3.us-west-1.amazonaws.com/p44.2.webp'),
    Image(
        user_id=5, product_id=45, url='https://knotsy.s3.us-west-1.amazonaws.com/p45.1.webp'),
    Image(
        user_id=5, product_id=45, url='https://knotsy.s3.us-west-1.amazonaws.com/p45.2.webp'),
    Image(
        user_id=5, product_id=45, url='https://knotsy.s3.us-west-1.amazonaws.com/p45.3.webp'),
    Image(
        user_id=5, product_id=46, url='https://knotsy.s3.us-west-1.amazonaws.com/p46.1.webp'),
    Image(
        user_id=5, product_id=46, url='https://knotsy.s3.us-west-1.amazonaws.com/p46.2.webp'),
    Image(
        user_id=5, product_id=46, url='https://knotsy.s3.us-west-1.amazonaws.com/p46.3.webp'),
    Image(
        user_id=3, product_id=47, url='https://knotsy.s3.us-west-1.amazonaws.com/p47.1.webp'),
    Image(
        user_id=3, product_id=47, url='https://knotsy.s3.us-west-1.amazonaws.com/p47.2.webp'),
    Image(
        user_id=3, product_id=47, url='https://knotsy.s3.us-west-1.amazonaws.com/p47.3.webp'),
    Image(
        user_id=3, product_id=48, url='https://knotsy.s3.us-west-1.amazonaws.com/p48.1.webp'),
    Image(
        user_id=3, product_id=48, url='https://knotsy.s3.us-west-1.amazonaws.com/p48.2.webp'),
    Image(
        user_id=3, product_id=48, url='https://knotsy.s3.us-west-1.amazonaws.com/p48.3.webp'),
    Image(
        user_id=2, product_id=49, url='https://knotsy.s3.us-west-1.amazonaws.com/p49.1.webp'),
    Image(
        user_id=2, product_id=49, url='https://knotsy.s3.us-west-1.amazonaws.com/p49.2.webp'),
    Image(
        user_id=2, product_id=49, url='https://knotsy.s3.us-west-1.amazonaws.com/p49.3.webp'),
    Image(
        user_id=4, product_id=50, url='https://knotsy.s3.us-west-1.amazonaws.com/p50.1.webp'),
    Image(
        user_id=4, product_id=50, url='https://knotsy.s3.us-west-1.amazonaws.com/p50.2.webp'),
    Image(
        user_id=4, product_id=50, url='https://knotsy.s3.us-west-1.amazonaws.com/p50.3.webp'),
    Image(
        user_id=5, product_id=51, url='https://knotsy.s3.us-west-1.amazonaws.com/p51.1.webp'),
    Image(
        user_id=5, product_id=51, url='https://knotsy.s3.us-west-1.amazonaws.com/p51.2.webp'),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    Image(
        user_id=1, product_id=1, url=''),
    ]

    for image in images:
        db.session.add(image)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
