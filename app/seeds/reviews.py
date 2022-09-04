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
        user_id=4, product_id=3, content='The poster looks great from a distance but up close you can see it’s a little blurry but the sellers did mention that it is up to you to make what you want look great and that they don’t do any editing to it.', stars=3),
    Review(
        user_id=5, product_id=3, content='These signs look fantastic, exactly what we were looking for for our farm style wedding. The seller was extremely quick to respond and helped us through some carrier problems we experienced.', stars=5),
    Review(
        user_id=6, product_id=3, content='My decal wouldn’t unstick from the backing so when trying to apply the sticker to my window the letters were all wrinkled and crooked. I wouldn’t recommend nor will I order anything else. Shipping was slow also.', stars=1),
    Review(
        user_id=2, product_id=4, content='If looks exactly like the sample photos online and it is good quality for a great price!', stars=5),
    Review(
        user_id=3, product_id=4, content='This came out beautiful and am excited to use it at our wedding! Thank you!', stars=5),
    Review(
        user_id=4, product_id=4, content='The design and quality of the paper is great! The date is very close to the bottom of the paper, with the numbers sitting on the edge of the paper.', stars=4),
    Review(
        user_id=5, product_id=5, content='The sign turned out even better than the picture. Absolutely love it!!!', stars=5),
    Review(
        user_id=6, product_id=5, content='The sign was well made and came out beautiful! Shipping was fast too!', stars=5),
    Review(
        user_id=6, product_id=6, content='The item shipped so fast and was packaged SO good to the point it took me longer than I wanted to open it! I am so in love with everything about it. It’s going to be perfect as my welcome sign to the wedding! Thank you so much!', stars=5),
    Review(
        user_id=6, product_id=7, content='Fast and quick delivery! They showed us the product before they sent it to us to make sure it was correct. Simple and perfect without breaking your pockets. Thank you!!', stars=5),
    Review(
        user_id=8, product_id=8, content='We were able to include custom copy and the sign looks beautiful - it came quick and was packaged well. Can\'t wait to use this at our upcoming wedding!', stars=5),
    Review(
        user_id=6, product_id=9, content='SO BEAUTIFUL. Perfect for my wedding', stars=5),
    Review(
        user_id=7, product_id=10, content='Definitely a 10000/10000, it came on time and fast with shipping. The sign is definitely huge but that\'s how we would the sign to be', stars=5),
    Review(
        user_id=6, product_id=11, content='Absolutely gorgeous sign, and the turn-around time was fast! This will be a terrific addition to my daughter\'s wedding! <3', stars=4),
    Review(
        user_id=5, product_id=12, content='I absolutely love the seating chart, my fiancé was very excited for it too! It matches all of my other signs perfectly. Everything came out perfectly, plus it was shipped and delivered within a week!', stars=4),
    Review(
        user_id=4, product_id=13, content='This seller is hands down the best on Etsy! They are so patient, and understanding! I had a few corrections to my seating chart, and without hesitation they fixed it. I absolutely love my seating chart!!!', stars=4),
    Review(
        user_id=8, product_id=14, content='If I could give this 10/5 stars, I would. The sign was quality, beautiful, and PERFECT. ', stars=5),
    Review(
        user_id=1, product_id=15, content='Got so many compliments on how beautiful the chart was! It was perfect for our wedding. When there was an issue with shipping the vendor was extremely responsive and helpful. 10/10 would recommend.', stars=5),
    Review(
        user_id=3, product_id=16, content='I cannot stress enough how wonderful this shop is. Communication was wonderful and they were so fast making and shipping my seating chart.', stars=5),
    Review(
        user_id=8, product_id=17, content='I am blown away!! This seating chart is absolutely beautiful! Every single detail that the seller puts into it shows.', stars=5),
    Review(
        user_id=6, product_id=18, content='Wow. Absolutely perfect! 100% worth the money! It arrived two weeks early so we didn’t have to sweat if it would be here in time! Highly recommend.', stars=5),
    Review(
        user_id=7, product_id=19, content='The quality, the beauty, the value and overall look of this gorgeous seating chart sign is beyond my hopes or expectations.', stars=5),
    Review(
        user_id=5, product_id=20, content='This is perfect!! More than five stars!! So special and so beautiful! It’s amazing! Customer Service was great. It shipped quick! Everything was A+!! Thank you!', stars=5)
    ]

    for review in reviews:
        db.session.add(review)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
