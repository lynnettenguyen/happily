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
        user_id=2, product_id=5, url='https://knotsy.s3.us-west-1.amazonaws.com/p5.1.webp'),
    Image(
        user_id=2, product_id=6, url='https://knotsy.s3.us-west-1.amazonaws.com/p6.1.webp'),
    Image(
        user_id=2, product_id=6, url='https://knotsy.s3.us-west-1.amazonaws.com/p6.2.webp'),
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
        user_id=3, product_id=20, url='https://knotsy.s3.us-west-1.amazonaws.com/p20.1.jpg'),
    Image(
        user_id=3, product_id=20, url='https://knotsy.s3.us-west-1.amazonaws.com/p20.2.jpg'),
    Image(
        user_id=3, product_id=20, url='https://knotsy.s3.us-west-1.amazonaws.com/p20.3.jpg'),
    Image(
        user_id=1, product_id=21, url='https://knotsy.s3.us-west-1.amazonaws.com/p21.1.webp'),
    Image(
        user_id=1, product_id=21, url='https://knotsy.s3.us-west-1.amazonaws.com/p21.2.webp'),
    Image(
        user_id=4, product_id=22, url='https://knotsy.s3.us-west-1.amazonaws.com/p22.4.webp'),
    Image(
        user_id=4, product_id=22, url='https://knotsy.s3.us-west-1.amazonaws.com/p22.2.webp'),
    Image(
        user_id=4, product_id=22, url='https://knotsy.s3.us-west-1.amazonaws.com/p22.3.webp'),
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
        user_id=2, product_id=27, url='https://knotsy.s3.us-west-1.amazonaws.com/p27.3.webp'),
    Image(
        user_id=1, product_id=28, url='https://knotsy.s3.us-west-1.amazonaws.com/p28.1.webp'),
    Image(
        user_id=1, product_id=28, url='https://knotsy.s3.us-west-1.amazonaws.com/p28.2.webp'),
    Image(
        user_id=4, product_id=29, url='https://knotsy.s3.us-west-1.amazonaws.com/p29.1.webp'),
    Image(
        user_id=4, product_id=29, url='https://knotsy.s3.us-west-1.amazonaws.com/p29.2.webp'),
    Image(
        user_id=4, product_id=29, url='https://knotsy.s3.us-west-1.amazonaws.com/p29.3.webp'),
    Image(
        user_id=4, product_id=29, url='https://knotsy.s3.us-west-1.amazonaws.com/p29.4.webp'),
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
        user_id=4, product_id=50, url='https://knotsy.s3.us-west-1.amazonaws.com/p50.1.png'),
    Image(
        user_id=4, product_id=50, url='https://knotsy.s3.us-west-1.amazonaws.com/p50.2.webp'),
    Image(
        user_id=4, product_id=50, url='https://knotsy.s3.us-west-1.amazonaws.com/p50.3.webp'),
    Image(
        user_id=5, product_id=51, url='https://knotsy.s3.us-west-1.amazonaws.com/p51.1.webp'),
    Image(
        user_id=5, product_id=51, url='https://knotsy.s3.us-west-1.amazonaws.com/p51.2.webp'),
    Image(
        user_id=5, product_id=52, url='https://knotsy.s3.us-west-1.amazonaws.com/p52.1.webp'),
    Image(
        user_id=5, product_id=52, url='https://knotsy.s3.us-west-1.amazonaws.com/p52.2.webp'),
    Image(
        user_id=5, product_id=52, url='https://knotsy.s3.us-west-1.amazonaws.com/p52.3.webp'),
    Image(
        user_id=5, product_id=52, url='https://knotsy.s3.us-west-1.amazonaws.com/p52.4.webp'),
    Image(
        user_id=5, product_id=53, url='https://knotsy.s3.us-west-1.amazonaws.com/p53.1.webp'),
    Image(
        user_id=5, product_id=53, url='https://knotsy.s3.us-west-1.amazonaws.com/p53.2.webp'),
    Image(
        user_id=5, product_id=53, url='https://knotsy.s3.us-west-1.amazonaws.com/p53.3.webp'),
    Image(
        user_id=5, product_id=53, url='https://knotsy.s3.us-west-1.amazonaws.com/p53.4.webp'),
    Image(
        user_id=1, product_id=54, url='https://knotsy.s3.us-west-1.amazonaws.com/p54.1.webp'),
    Image(
        user_id=1, product_id=54, url='https://knotsy.s3.us-west-1.amazonaws.com/p54.2.webp'),
    Image(
        user_id=1, product_id=54, url='https://knotsy.s3.us-west-1.amazonaws.com/p54.3.webp'),
    Image(
        user_id=2, product_id=55, url='https://knotsy.s3.us-west-1.amazonaws.com/p55.1.webp'),
    Image(
        user_id=2, product_id=55, url='https://knotsy.s3.us-west-1.amazonaws.com/p55.2.webp'),
    Image(
        user_id=3, product_id=56, url='https://knotsy.s3.us-west-1.amazonaws.com/p56.1.webp'),
    Image(
        user_id=3, product_id=56, url='https://knotsy.s3.us-west-1.amazonaws.com/p56.2.webp'),
    Image(
        user_id=3, product_id=57, url='https://knotsy.s3.us-west-1.amazonaws.com/p57.1.webp'),
    Image(
        user_id=3, product_id=57, url='https://knotsy.s3.us-west-1.amazonaws.com/p57.2.webp'),
    Image(
        user_id=3, product_id=57, url='https://knotsy.s3.us-west-1.amazonaws.com/p57.3.webp'),
    Image(
        user_id=6, product_id=58, url='https://knotsy.s3.us-west-1.amazonaws.com/p58.1.webp'),
    Image(
        user_id=6, product_id=58, url='https://knotsy.s3.us-west-1.amazonaws.com/p58.2.webp'),
    Image(
        user_id=6, product_id=58, url='https://knotsy.s3.us-west-1.amazonaws.com/p58.3.webp'),
    Image(
        user_id=6, product_id=59, url='https://knotsy.s3.us-west-1.amazonaws.com/p59.1.webp'),
    Image(
        user_id=6, product_id=59, url='https://knotsy.s3.us-west-1.amazonaws.com/p59.2.webp'),
    Image(
        user_id=6, product_id=60, url='https://knotsy.s3.us-west-1.amazonaws.com/p60.1.webp'),
    Image(
        user_id=6, product_id=60, url='https://knotsy.s3.us-west-1.amazonaws.com/p60.2.webp'),
    Image(
        user_id=6, product_id=60, url='https://knotsy.s3.us-west-1.amazonaws.com/p60.3.webp'),
    Image(
        user_id=6, product_id=61, url='https://knotsy.s3.us-west-1.amazonaws.com/p61.1.webp'),
    Image(
        user_id=6, product_id=61, url='https://knotsy.s3.us-west-1.amazonaws.com/p61.2.webp'),
    Image(
        user_id=6, product_id=61, url='https://knotsy.s3.us-west-1.amazonaws.com/p61.3.webp'),
    Image(
        user_id=6, product_id=62, url='https://knotsy.s3.us-west-1.amazonaws.com/p62.1.webp'),
    Image(
        user_id=3, product_id=63, url='https://knotsy.s3.us-west-1.amazonaws.com/p63.1.webp'),
    Image(
        user_id=3, product_id=63, url='https://knotsy.s3.us-west-1.amazonaws.com/p63.2.webp'),
    Image(
        user_id=3, product_id=63, url='https://knotsy.s3.us-west-1.amazonaws.com/p63.3.webp'),
    Image(
        user_id=2, product_id=64, url='https://knotsy.s3.us-west-1.amazonaws.com/p64.1.webp'),
    Image(
        user_id=2, product_id=64, url='https://knotsy.s3.us-west-1.amazonaws.com/p64.2.webp'),
    Image(
        user_id=2, product_id=64, url='https://knotsy.s3.us-west-1.amazonaws.com/p64.3.webp'),
    Image(
        user_id=2, product_id=65, url='https://knotsy.s3.us-west-1.amazonaws.com/p65.1.webp'),
    Image(
        user_id=2, product_id=65, url='https://knotsy.s3.us-west-1.amazonaws.com/p65.2.webp'),
    Image(
        user_id=2, product_id=65, url='https://knotsy.s3.us-west-1.amazonaws.com/p65.3.webp'),
    Image(
        user_id=3, product_id=66, url='https://knotsy.s3.us-west-1.amazonaws.com/p66.1.webp'),
    Image(
        user_id=3, product_id=66, url='https://knotsy.s3.us-west-1.amazonaws.com/p66.2.webp'),
    Image(
        user_id=7, product_id=67, url='https://knotsy.s3.us-west-1.amazonaws.com/p67.1.webp'),
    Image(
        user_id=7, product_id=67, url='https://knotsy.s3.us-west-1.amazonaws.com/p67.2.webp'),
    Image(
        user_id=7, product_id=67, url='https://knotsy.s3.us-west-1.amazonaws.com/p67.3.webp'),
    Image(
        user_id=7, product_id=67, url='https://knotsy.s3.us-west-1.amazonaws.com/p67.4.webp'),
    Image(
        user_id=7, product_id=68, url='https://knotsy.s3.us-west-1.amazonaws.com/p68.1.webp'),
    Image(
        user_id=7, product_id=68, url='https://knotsy.s3.us-west-1.amazonaws.com/p68.2.webp'),
    Image(
        user_id=7, product_id=68, url='https://knotsy.s3.us-west-1.amazonaws.com/p68.3.webp'),
    Image(
        user_id=7, product_id=69, url='https://knotsy.s3.us-west-1.amazonaws.com/p69.1.webp'),
    Image(
        user_id=7, product_id=69, url='https://knotsy.s3.us-west-1.amazonaws.com/p69.2.webp'),
    Image(
        user_id=7, product_id=69, url='https://knotsy.s3.us-west-1.amazonaws.com/p69.3.webp'),
    Image(
        user_id=7, product_id=70, url='https://knotsy.s3.us-west-1.amazonaws.com/p70.1.webp'),
    Image(
        user_id=7, product_id=70, url='https://knotsy.s3.us-west-1.amazonaws.com/p70.2.webp'),
    Image(
        user_id=7, product_id=70, url='https://knotsy.s3.us-west-1.amazonaws.com/p70.3.webp'),
    Image(
        user_id=2, product_id=71, url='https://knotsy.s3.us-west-1.amazonaws.com/p71.1.webp'),
    Image(
        user_id=3, product_id=72, url='https://knotsy.s3.us-west-1.amazonaws.com/p72.1.webp'),
    Image(
        user_id=3, product_id=72, url='https://knotsy.s3.us-west-1.amazonaws.com/p72.2.webp'),
    Image(
        user_id=3, product_id=72, url='https://knotsy.s3.us-west-1.amazonaws.com/p72.3.webp'),
    Image(
        user_id=3, product_id=72, url='https://knotsy.s3.us-west-1.amazonaws.com/p72.4.webp'),
    Image(
        user_id=4, product_id=73, url='https://knotsy.s3.us-west-1.amazonaws.com/p73.1.webp'),
    Image(
        user_id=4, product_id=73, url='https://knotsy.s3.us-west-1.amazonaws.com/p73.2.webp'),
    Image(
        user_id=4, product_id=73, url='https://knotsy.s3.us-west-1.amazonaws.com/p73.3.webp'),
    Image(
        user_id=5, product_id=74, url='https://knotsy.s3.us-west-1.amazonaws.com/p74.1.webp'),
    Image(
        user_id=5, product_id=74, url='https://knotsy.s3.us-west-1.amazonaws.com/p74.2.webp'),
    Image(
        user_id=5, product_id=74, url='https://knotsy.s3.us-west-1.amazonaws.com/p74.3.webp'),
    Image(
        user_id=7, product_id=75, url='https://knotsy.s3.us-west-1.amazonaws.com/p75.1.webp'),
    Image(
        user_id=7, product_id=75, url='https://knotsy.s3.us-west-1.amazonaws.com/p75.2.webp'),
    Image(
        user_id=7, product_id=75, url='https://knotsy.s3.us-west-1.amazonaws.com/p75.3.webp'),
    Image(
        user_id=6, product_id=76, url='https://knotsy.s3.us-west-1.amazonaws.com/p76.1.webp'),
    Image(
        user_id=6, product_id=76, url='https://knotsy.s3.us-west-1.amazonaws.com/p76.2.webp'),
    Image(
        user_id=5, product_id=77, url='https://knotsy.s3.us-west-1.amazonaws.com/p77.1.webp'),
    Image(
        user_id=5, product_id=77, url='https://knotsy.s3.us-west-1.amazonaws.com/p77.2.webp'),
    Image(
        user_id=5, product_id=78, url='https://knotsy.s3.us-west-1.amazonaws.com/p78.1.webp'),
    Image(
        user_id=5, product_id=78, url='https://knotsy.s3.us-west-1.amazonaws.com/p78.2.webp'),
    Image(
        user_id=5, product_id=78, url='https://knotsy.s3.us-west-1.amazonaws.com/p78.3.webp'),
    Image(
        user_id=4, product_id=79, url='https://knotsy.s3.us-west-1.amazonaws.com/p79.1.webp'),
    Image(
        user_id=4, product_id=79, url='https://knotsy.s3.us-west-1.amazonaws.com/p79.2.webp'),
    Image(
        user_id=4, product_id=79, url='https://knotsy.s3.us-west-1.amazonaws.com/p79.3.webp'),
    Image(
        user_id=4, product_id=80, url='https://knotsy.s3.us-west-1.amazonaws.com/p80.1.webp'),
    Image(
        user_id=4, product_id=80, url='https://knotsy.s3.us-west-1.amazonaws.com/p80.2.webp'),
    Image(
        user_id=4, product_id=80, url='https://knotsy.s3.us-west-1.amazonaws.com/p80.3.webp'),
    Image(
        user_id=6, product_id=81, url='https://knotsy.s3.us-west-1.amazonaws.com/p81.1.webp'),
    Image(
        user_id=6, product_id=81, url='https://knotsy.s3.us-west-1.amazonaws.com/p81.2.webp'),
    Image(
        user_id=2, product_id=82, url='https://knotsy.s3.us-west-1.amazonaws.com/p82.1.webp'),
    Image(
        user_id=2, product_id=82, url='https://knotsy.s3.us-west-1.amazonaws.com/p82.2.webp'),
    Image(
        user_id=2, product_id=82, url='https://knotsy.s3.us-west-1.amazonaws.com/p82.3.webp'),
    Image(
        user_id=7, product_id=83, url='https://knotsy.s3.us-west-1.amazonaws.com/p83.1.webp'),
    Image(
        user_id=7, product_id=83, url='https://knotsy.s3.us-west-1.amazonaws.com/p83.2.webp'),
    Image(
        user_id=7, product_id=83, url='https://knotsy.s3.us-west-1.amazonaws.com/p83.3.webp'),
    Image(
        user_id=7, product_id=84, url='https://knotsy.s3.us-west-1.amazonaws.com/p84.1.webp'),
    Image(
        user_id=7, product_id=84, url='https://knotsy.s3.us-west-1.amazonaws.com/p84.2.webp'),
    Image(
        user_id=7, product_id=84, url='https://knotsy.s3.us-west-1.amazonaws.com/p84.3.webp'),
    Image(
        user_id=7, product_id=85, url='https://knotsy.s3.us-west-1.amazonaws.com/p85.1.webp'),
    Image(
        user_id=7, product_id=85, url='https://knotsy.s3.us-west-1.amazonaws.com/p85.2.webp'),
    Image(
        user_id=7, product_id=85, url='https://knotsy.s3.us-west-1.amazonaws.com/p85.3.webp'),
    Image(
        user_id=8, product_id=86, url='https://knotsy.s3.us-west-1.amazonaws.com/p86.1.webp'),
    Image(
        user_id=8, product_id=86, url='https://knotsy.s3.us-west-1.amazonaws.com/p86.2.webp'),
    Image(
        user_id=8, product_id=87, url='https://knotsy.s3.us-west-1.amazonaws.com/p87.1.webp'),
    Image(
        user_id=8, product_id=87, url='https://knotsy.s3.us-west-1.amazonaws.com/p87.2.webp'),
    Image(
        user_id=8, product_id=88, url='https://knotsy.s3.us-west-1.amazonaws.com/p88.1.webp'),
    Image(
        user_id=8, product_id=88, url='https://knotsy.s3.us-west-1.amazonaws.com/p88.2.webp'),
    Image(
        user_id=8, product_id=89, url='https://knotsy.s3.us-west-1.amazonaws.com/p89.1.webp'),
    Image(
        user_id=8, product_id=89, url='https://knotsy.s3.us-west-1.amazonaws.com/p89.2.webp'),
    Image(
        user_id=8, product_id=89, url='https://knotsy.s3.us-west-1.amazonaws.com/p89.3.webp'),
    Image(
        user_id=8, product_id=90, url='https://knotsy.s3.us-west-1.amazonaws.com/p90.1.webp'),
    Image(
        user_id=8, product_id=90, url='https://knotsy.s3.us-west-1.amazonaws.com/p90.2.webp'),
    Image(
        user_id=8, product_id=90, url='https://knotsy.s3.us-west-1.amazonaws.com/p90.3.webp'),
    Image(
        user_id=8, product_id=91, url='https://knotsy.s3.us-west-1.amazonaws.com/p91.1.webp'),
    Image(
        user_id=8, product_id=91, url='https://knotsy.s3.us-west-1.amazonaws.com/p91.2.webp'),
    Image(
        user_id=8, product_id=91, url='https://knotsy.s3.us-west-1.amazonaws.com/p91.3.webp'),
    Image(
        user_id=8, product_id=92, url='https://knotsy.s3.us-west-1.amazonaws.com/p92.1.webp'),
    Image(
        user_id=8, product_id=92, url='https://knotsy.s3.us-west-1.amazonaws.com/p92.2.webp'),
    Image(
        user_id=8, product_id=92, url='https://knotsy.s3.us-west-1.amazonaws.com/p92.3.webp'),
    Image(
        user_id=8, product_id=93, url='https://knotsy.s3.us-west-1.amazonaws.com/p93.1.webp'),
    Image(
        user_id=8, product_id=93, url='https://knotsy.s3.us-west-1.amazonaws.com/p93.2.webp'),
    Image(
        user_id=8, product_id=93, url='https://knotsy.s3.us-west-1.amazonaws.com/p93.3.webp'),
    Image(
        user_id=8, product_id=94, url='https://knotsy.s3.us-west-1.amazonaws.com/p94.1.webp'),
    Image(
        user_id=8, product_id=94, url='https://knotsy.s3.us-west-1.amazonaws.com/p94.2.webp'),
    Image(
        user_id=8, product_id=94, url='https://knotsy.s3.us-west-1.amazonaws.com/p94.3.webp'),
    Image(
        user_id=7, product_id=95, url='https://knotsy.s3.us-west-1.amazonaws.com/p95.1.webp'),
    Image(
        user_id=7, product_id=95, url='https://knotsy.s3.us-west-1.amazonaws.com/p95.2.webp'),
    Image(
        user_id=7, product_id=95, url='https://knotsy.s3.us-west-1.amazonaws.com/p95.3.webp'),
    Image(
        user_id=7, product_id=96, url='https://knotsy.s3.us-west-1.amazonaws.com/p96.1.webp'),
    Image(
        user_id=7, product_id=96, url='https://knotsy.s3.us-west-1.amazonaws.com/p96.2.webp'),
    Image(
        user_id=7, product_id=97, url='https://knotsy.s3.us-west-1.amazonaws.com/p97.1.webp'),
    Image(
        user_id=7, product_id=97, url='https://knotsy.s3.us-west-1.amazonaws.com/p97.2.webp'),
    Image(
        user_id=7, product_id=97, url='https://knotsy.s3.us-west-1.amazonaws.com/p97.1.webp'),
    Image(
        user_id=7, product_id=98, url='https://knotsy.s3.us-west-1.amazonaws.com/p98.1.webp'),
    Image(
        user_id=7, product_id=98, url='https://knotsy.s3.us-west-1.amazonaws.com/p98.2.webp'),
    Image(
        user_id=7, product_id=99, url='https://knotsy.s3.us-west-1.amazonaws.com/p99.1.webp'),
    Image(
        user_id=7, product_id=99, url='https://knotsy.s3.us-west-1.amazonaws.com/p99.2.webp'),
    Image(
        user_id=3, product_id=100, url='https://knotsy.s3.us-west-1.amazonaws.com/p100.1.webp'),
    Image(
        user_id=3, product_id=100, url='https://knotsy.s3.us-west-1.amazonaws.com/p100.2.webp'),
    Image(
        user_id=3, product_id=101, url='https://knotsy.s3.us-west-1.amazonaws.com/p101.1.webp'),
    Image(
        user_id=3, product_id=101, url='https://knotsy.s3.us-west-1.amazonaws.com/p101.2.webp'),
    Image(
        user_id=3, product_id=102, url='https://knotsy.s3.us-west-1.amazonaws.com/p102.1.webp'),
    Image(
        user_id=3, product_id=102, url='https://knotsy.s3.us-west-1.amazonaws.com/p102.2.webp'),
    Image(
        user_id=3, product_id=103, url='https://knotsy.s3.us-west-1.amazonaws.com/p103.1.webp'),
    Image(
        user_id=3, product_id=103, url='https://knotsy.s3.us-west-1.amazonaws.com/p103.2.webp'),
    Image(
        user_id=3, product_id=103, url='https://knotsy.s3.us-west-1.amazonaws.com/p103.3.webp'),
    Image(
        user_id=4, product_id=104, url='https://knotsy.s3.us-west-1.amazonaws.com/p104.1.webp'),
    Image(
        user_id=4, product_id=104, url='https://knotsy.s3.us-west-1.amazonaws.com/p104.2.webp'),
    Image(
        user_id=4, product_id=105, url='https://knotsy.s3.us-west-1.amazonaws.com/p105.1.webp'),
    Image(
        user_id=4, product_id=105, url='https://knotsy.s3.us-west-1.amazonaws.com/p105.2.webp'),
    Image(
        user_id=4, product_id=105, url='https://knotsy.s3.us-west-1.amazonaws.com/p105.3.webp'),
    Image(
        user_id=5, product_id=106, url='https://knotsy.s3.us-west-1.amazonaws.com/p106.1.webp'),
    Image(
        user_id=5, product_id=106, url='https://knotsy.s3.us-west-1.amazonaws.com/p106.2.webp'),
    Image(
        user_id=5, product_id=106, url='https://knotsy.s3.us-west-1.amazonaws.com/p106.3.webp'),
    Image(
        user_id=5, product_id=107, url='https://knotsy.s3.us-west-1.amazonaws.com/p107.1.webp'),
    Image(
        user_id=5, product_id=107, url='https://knotsy.s3.us-west-1.amazonaws.com/p107.2.webp'),
    Image(
        user_id=5, product_id=107, url='https://knotsy.s3.us-west-1.amazonaws.com/p107.3.webp'),
    Image(
        user_id=5, product_id=108, url='https://knotsy.s3.us-west-1.amazonaws.com/p108.1.webp'),
    Image(
        user_id=5, product_id=108, url='https://knotsy.s3.us-west-1.amazonaws.com/p108.2.webp'),
    Image(
        user_id=5, product_id=109, url='https://knotsy.s3.us-west-1.amazonaws.com/p109.1.webp'),
    Image(
        user_id=5, product_id=109, url='https://knotsy.s3.us-west-1.amazonaws.com/p109.2.webp'),
    Image(
        user_id=5, product_id=109, url='https://knotsy.s3.us-west-1.amazonaws.com/p109.3.webp'),
    Image(
        user_id=8, product_id=110, url='https://knotsy.s3.us-west-1.amazonaws.com/p110.1.webp'),
    Image(
        user_id=8, product_id=110, url='https://knotsy.s3.us-west-1.amazonaws.com/p110.2.webp'),
    Image(
        user_id=5, product_id=111, url='https://knotsy.s3.us-west-1.amazonaws.com/p111.1.webp'),
    Image(
        user_id=5, product_id=111, url='https://knotsy.s3.us-west-1.amazonaws.com/p111.2.webp')
    ]

    for image in images:
        db.session.add(image)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
