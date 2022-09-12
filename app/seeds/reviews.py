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
        user_id=4, product_id=3, content='These signs were beautiful!! Oh my gosh - They came packaged so well. I was worried because I got the largest size 34x44. It\'s really big and I was afraid it would be damaged in transit. But it was perfect. And they arrived in one week! Really amazing.', stars=5),
    Review(
        user_id=5, product_id=3, content='These signs look fantastic, exactly what we were looking for for our farm style wedding. The seller was extremely quick to respond and helped us through some carrier problems we experienced.', stars=5),
    Review(
        user_id=6, product_id=3, content='I wouldn’t recommend nor will I order anything else. Shipping was slow also.', stars=1),
    Review(
        user_id=2, product_id=4, content='If looks exactly like the sample photos online and it is good quality for a great price!', stars=5),
    Review(
        user_id=3, product_id=4, content='This came out beautiful and am excited to use it at our wedding! Thank you!', stars=5),
    Review(
        user_id=4, product_id=4, content='The design and quality is great!', stars=4),
    Review(
        user_id=5, product_id=5, content='The sign turned out even better than the picture. Absolutely love it!!!', stars=5),
    Review(
        user_id=6, product_id=5, content='The sign was well made and came out beautiful! Shipping was fast too!', stars=5),
    Review(
        user_id=6, product_id=10, content='The item shipped so fast and was packaged SO good to the point it took me longer than I wanted to open it! I am so in love with everything about it. It’s going to be perfect as my welcome sign to the wedding! Thank you so much!', stars=5),
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
        user_id=5, product_id=20, content='This is perfect!! More than five stars!! So special and so beautiful! It’s amazing! Customer Service was great. It shipped quick! Everything was A+!! Thank you!', stars=5),
    Review(
        user_id=1, product_id=30, content='Looks beautiful! Hoping it\'s going to be able to bear the weight on the wedding day but just as expected!', stars=4),
    Review(
        user_id=7, product_id=30, content='This hoop and the flowers that were ordered with it made the most beautiful alter for my wedding. If you are considering this item I highly recommend it!', stars=5),
    Review(
        user_id=2, product_id=28, content='I really wanted to love this arbor but it didn’t hold up. I was only able to use it once before it bent badly. Putting it together was extremely difficult. The shop owner was friendly and helpful, but the pieces never really went together correctly even after watching the video the owner sent. Would not recommend for a floral install for a wedding.', stars=1),
    Review(
        user_id=3, product_id=28, content='Great response time and quality of customer service! Was very helpful. Shipped everything on time and got my order on short notice.', stars=5),
    Review(
        user_id=1, product_id=78, content='I was looking for an alternative to my qun kwa to wear for anniversaries and other red cheongsam for Chinese celebrations, and this dress is exactly the kind of red I wanted, that is, not as shiny and bright as a silk brocade. The dress is beautiful and just as pictured, with smooth embroidery and a medium-heavy weight to the fabric. I\'m quite petite but it fits my body perfectly, even in the shoulders and bust, which is difficult sometimes. ', stars=5),
    Review(
        user_id=5, product_id=95, content='This ring is absolutely gorgeous. I was so worried about choosing a ring that I wasn’t able to try on in person but this is stunning and I’m so glad I went with it! It’s so dainty and fits my tiny fingers so well!', stars=5),
    Review(
        user_id=5, product_id=76, content='Beautiful dress and quality, comfortable, well made, with with excellent communication from the vendor regarding size and shipping.', stars=5),
    Review(
        user_id=1, product_id=97, content='The ring is absolutely beautiful and wonderfully made. The seller is so nice and cooperative. I got my ring weeks before the expected time and it came in a ring box. ', stars=5),
    Review(
        user_id=5, product_id=75, content='Absolutely LOVE this dress - when I tried it on for the first time it fit perfectly and was everything I was wanting for my wedding dress! ', stars=5),
    Review(
        user_id=8, product_id=33, content='Let me start by saying I was nervous I wasn’t going to get this in time however the service was EXCELLENT and the item was beyond my expectations! The quality is great! ', stars=4),
    Review(
        user_id=6, product_id=35, content='I loved this sign! It was perfect and exactly how I designed, I would say make sure to check the sizes because I was not aware my sign would be as big as it was but its fine, I still love it!', stars=4),
    Review(
        user_id=3, product_id=37, content='STUNNING, I’M OBSESSED. Literally my favorite decor piece for my wedding. Shipping was extremely fast and the seller was very responsive.', stars=5),
    Review(
        user_id=7, product_id=37, content='Bar menu is absolutely perfect! It is classy, well made, and the seller was extremely fast to send a proof and then turn around the changes I requested.', stars=5),
    Review(
        user_id=2, product_id=36, content='High quality frosted acrylic. This is a professional looking product. What I love about it is that if you add backlighting, it really stands out. A must have for any event! Extremely fast delivery too!!', stars=5),
    Review(
        user_id=3, product_id=36, content='The best sign and best customer service! It was a focal point of our party - everyone loved it. I needed it on a very quick turnaround and it was no problem! Thank you!', stars=4),
    Review(
        user_id=8, product_id=58, content='So happy with out the glasses came out! They all look so great, such good quality and loved how quickly they were delivered. 100% would recommend!', stars=4),
    Review(
        user_id=7, product_id=61, content='I just received my custom order. I am so impressed and happy with the result! Beautifully detailed and absolutely stunning box. Exactly what I wanted.', stars=5),
    Review(
        user_id=2, product_id=61, content='The cuff links are really nice, color is great and the engraving is perfect! ', stars=5),
    Review(
        user_id=1, product_id=45, content='We were so happy with how our wedding guest signed turned out. Quick shipping and great quality! We can’t wait to hang our sign up in our home! ', stars=5),
    Review(
        user_id=2, product_id=49, content='Super cute! The order got to us fast, it is much lighter than I expected but that is perfectly fine!', stars=4),
    Review(
        user_id=6, product_id=42, content='Even prettier in person! And the customer service is top notch! ', stars=5),
    Review(
        user_id=4, product_id=27, content='Exactly what I was expecting if not better! It’s beautiful and timeless and I’m so excited for everyone to see it/sign it on our big day! Will definitely be ordering again', stars=4),
    Review(
        user_id=5, product_id=27, content='WOW OK IM IN LOVE WITH MY GUESTBOOK! It looks so elegant and simply gorgeous.', stars=5),
    Review(
        user_id=8, product_id=55, content='I was very surprised by the quality of the glass. It came in a nice box and had everything I needed in there. Will purchase from this seller again.', stars=5),
    Review(
        user_id=5, product_id=94, content='The table numbers were the perfect added touch to each of the reception tables at my wedding. It went really well with the boho modern look.', stars=5),
    Review(
        user_id=2, product_id=109, content='My champagne glasses were absolutely perfect! They look exactly like the picture and the engraved names are so well done.', stars=5),
    Review(
        user_id=6, product_id=86, content='The quality and the engrave you can barely see. Looks nothing like the picture. Letters are too small and in faded white.', stars=2),
    ]

    for review in reviews:
        db.session.add(review)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
