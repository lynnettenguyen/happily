from app.models import db, Review


def seed_reviews():
    reviews = [
    Review(
        user_id=2, product_id=1, content='This sign is so cute and I love it! We got a similar one for my bridal shower and loved that one so got another one for the wedding.', stars=5),
    Review(
        user_id=3, product_id=1, content='Quality was excellent, packaged very securely and arrived timely. This sign was gorgeous at our wedding ceremony!', stars=4),
    Review(
        user_id=4, product_id=1, content='Totally exceeded my expectations! I\'m so excited to have this up at our wedding. The shop owner was quick and we loved the preview so we could see exactly how it would look before she made it. 11/10 recommend!', stars=5),
    Review(
        user_id=3, product_id=2, content='Beautiful as it shown in pictures. Loved it.', stars=3),
    Review(
        user_id=4, product_id=2, content='Perfect!', stars=4),
    Review(
        user_id=5, product_id=2, content='Fast shipping and item just as described. Happy with the purchase!', stars=5),
    Review(
        user_id=4, product_id=3, content='The poster looks great from a distance but up close you can see it’s a little blurry but the sellers did mention that it is up to you to make what you want look great and that they don\’t do any editing to it.', stars=3),
    Review(
        user_id=5, product_id=3, content='These signs look fantastic, exactly what we were looking for for our farm style wedding. The seller was extremely quick to respond and helped us through some carrier problems we experienced.', stars=5),
    Review(
        user_id=6, product_id=3, content='My decal wouldn\’t unstick from the backing so when trying to apply the sticker to my window the letters were all wrinkled and crooked. I wouldn\’t recommend nor will I order anything else. Shipping was slow also.', stars=1),
    Review(
        user_id=2, product_id=4, content='If looks exactly like the sample photos online and it is good quality for a great price!', stars=5),
    Review(
        user_id=3, product_id=4, content='This came out beautiful and am excited to use it at our wedding! Thank you!', stars=5),
    Review(
        user_id=4, product_id=4, content='The design and quality of the paper is great! The date is very close to the bottom of the paper, with the numbers sitting on the edge of the paper.', stars=4),
    Review(
        user_id=5, product_id=5, content='The sign turned out even better than the picture. Absolutely love it!!!', stars=5),
    Review(
        user_id=6, product_id=5, content='The sign was well made and came out beautiful! Shipping was fast too!', stars=5)
    ]

    for review in reviews:
        db.session.add(review)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the reviews table because SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY resets the auto incrementing primary key, CASCADE deletes any dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
