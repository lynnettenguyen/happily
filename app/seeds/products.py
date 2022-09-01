from app.models import db, Product


def seed_products():
    products = [
    Product(
        seller_id=1, category='Signage', name='Wedding Welcome Sign, Wedding Sign, Welcome To Our Wedding Sign, Wedding Sign Board, Wedding Signs, Wedding Outdoor Sign, Our Wedding Board', price=57.07, description='This WEDDING WELCOME SIGN is expertly handcrafted just for you. Free shipping included.'),
    Product(
        seller_id=1, category='Signage', name='Wedding Sign, Wedding Welcome Sign, Welcome Wedding Sign Wood, Wedding Decor, Wedding Signage, Welcome Sign Wedding, Welcome to our Wedding', price=55.00, description='This beautiful wood Wedding Sign is an eye-catcher for your guests to see as they enter your wedding venue! The Wedding Welcome Sign is great to use as special wedding decor and can double as home decor after the wedding festivities end. Our customers love to give these custom signs as wedding gifts, engagement gifts, and anniversary gifts as well since they make great gifts for couples. Your sign will be personalized with 3-D lettering (laser cut) to welcome your guests to your special day.'),
    Product(
        seller_id=2, category='Signage', name='Frosted Acrylic Wedding Welcome Sign ,Acrylic Welcome Sign, Wedding Signage, Acrylic Wedding Sign, 3D Welcome Sign, Custom Wedding Sign', price=87.99, description='We have always believed that “Weddings do not have to be expensive, it has to be memorable”, so in order to make it memorable we are determined to add all the love, creativity and customized touch to the Welcome Signs. Customized Welcome signs are a beautiful Wedding décor to welcome your guest.'),
    Product(
        seller_id=1, category='Signage', name='3D Wooden Welcome to our Wedding Sign, Wedding Signage, Wedding Welcome Sign, Rustic Wedding Decor, Welcome Wedding Rosefield', price=110.00, description='Our unique 3D wooden wedding welcome signs come personalized with your names and wedding date. This sign is a beautiful statement piece for your wedding ceremony and will add a perfect touch to your special day. Raised lettering creates a rather unique 3D effect that adds depth and character to the piece.'),
    Product(
        seller_id=2, category='Signage', name='Frosted Acrylic Wedding Welcome Sign - Wedding Signage - Modern Wedding Sign - Acrylic Welcome Wedding Sign - Wedding Ceremony Signs', price=152.91, description='Our frosted acrylic wedding welcome sign is a great way to welcome in your guests at your wedding or any of your special events.'),
    Product(
        seller_id=2, category='Signage', name='Acrylic Wedding Sign - Wedding Welcome Sign - Welcome to our Wedding Sign', price=18.00, description='This acrylic sign has a glass-like elegance without the risk of breakage. Enhance your event with a beautiful eye catching sign. Our designs our 100% permanent (not vinyl) and won\'t scratch or fade. Acrylic is shatterproof and lightweight to make for a crisp, clean look. These can be placed in an easel or a frame'),
    Product(
        seller_id=1, category='Signage', name='Wedding Welcome Sign, Wedding Sign, Welcome To Our Wedding Sign, Wedding Sign Board, Wedding Signs, Wedding Vertical Modern Outdoor Sign', price=57.07, description='This wedding sign is expertly handcrafted just for you.'),
    Product(
        seller_id=3, category='Signage', name='Wedding Welcome Sign Watercolor, Unique Wedding Decor from Couple Portrait, Photo Wedding Sign, Unique Wedding Decoration, Wedding Entrance', price=35.40, description='" WOW! " your loved ones with this unique wedding entrance sign, a timeless and meaningful painting. We turn your photo into stunning work of art and treasure your favorite memories for years to come! It is the perfect wedding welcome sign with a watercolor touch, that you can keep it forever to remember your wedding day. Your guests can even sign on it and that makes a unique wedding guest book alternative :)'),
    Product(
        seller_id=2, category='Signage', name='Acrylic Last Name Wedding Sign, Wedding Welcome Sign, Wooden Frame, Clear Wedding Sign, Personalized Wedding Sign', price=85.00, description='This acrylic last name wedding sign is a great way to welcome guests to your big day, and then repurpose as home decor after!'),
    Product(
        seller_id=1, category='Signage', name='3D Acrylic Wedding Welcome Sign | Frosted acrylic wedding sign | Welcome to our wedding sign | Modern wedding signage | Ceremony Sign', price=168.67, description='Modern and eye catching, this sign is the perfect way to greet your guests on the big day.'),
    Product(
        seller_id=3, category='Signage', name='Wedding welcome sign wood, Wedding Reception Sign, Rustic Wedding welcome sign, Welcome Wedding Sign, Personalized Wedding gift', price=59.67, description='Our wooden welcome signs for a wedding are a beautiful way to welcome guests as they arrive at your wedding! It adds a lovely personal touch and is a timeless keepsake. Works great as a wedding gift to the Bride & Groom as well!'),
    Product(
        seller_id=1, category='Seating', name='Personalized Wood Seating Chart, Wedding Seating Chart, Wedding Sign, Custom Wedding Decor, Alphabetical or Table Numbers', price=174.00, description='Personalized Wood Wedding Seating Chart Sign with Cutout Couple\'s Name(s) or Message. Engraved Text for Guests\'Names. Guest List is organized in Alphabetical order or organized by Table number.'),
    Product(
        seller_id=3, category='Seating', name='Personalized Seating Chart - Wood Wedding Sign', price=82.50, description='Seating Chart personalized with up to 225 names and a custom title.'),
    Product(
        seller_id=2, category='Seating', name='Acrylic Seating Chart, Wedding Seating Chart, Find Your Seat Sign with Flourish', price=125.00, description='An acrylic seating chart is the perfect way to direct your guests to their table while adding a decorative touch to your wedding venue. The wedding seating chart features a gorgeous header and then lists the guests and their table numbers'),
    Product(
        seller_id=2, category='Seating', name='Custom Wedding Table Seating Chart Sign | Modern Find Your Seating Sign Chart | Wedding Decor | Seating Chart Board | Gold Seating Chart', price=30.00, description='Our stunning, acrylic personalized wedding seating plan will add a touch of class to your wedding or other special occasions. We can personalize this Seating chart completely to ensure you are getting what you have thought off! You will be the designer of this product, have any questions? Feel free to get in touch!'),
    Product(
        seller_id=4, category='Seating', name='Framed Acrylic Custom Seating Chart with wax', price=300.00, description='Beautiful custom framed acrylic seating chart with wax seal. We can fit 15-25 tables on each 24x36'),
    Product(
        seller_id=4, category='Seating', name='Unique Table Seating Chart on Window Panel (Mirror, six paneled window)', price=200.00, description='If you are wanting to have a unique table seating chart and you live in Los Angeles, you can have your dream come true.p'),
    Product(
        seller_id=2, category='Seating', name='Acrylic Seating Chart // Wedding seating chart // acrylic wedding sign // seating chart sign // custom wedding decor // frosted acrylic', price=141.75, description='Add a touch of elegant detail to your wedding or special event with our beautiful, laser cut and ENGRAVED acrylic custom seating chart!p18'),
    Product(
        seller_id=1, category='Seating', name='Wedding Reserved Sign - Wood Reserved Sign - Reserved Sign - Wedding Signs - Wedding decor - Wedding Aisle - Social distancing - Minimalist', price=8.50, description='These custom made reserved signs are the perfect addition to your wedding tables or pews to help save room for your closest friends and family.p1'),
    Product(
        seller_id=3, category='Seating', name='Reserved Seating Chair Tag Template, Modern Wedding Reserved Seat Tag, Minimalist Wedding Reserved Seating Tag, Printable, Templett, #016', price=3.99, description='Purchase, personalize, and print within minutes! Edit using the Templett app in your computer browser,p no additional software needed! Please try demo and seek clarification before purchasing the template.'),
    Product(
        seller_id=1, category='Seating', name='Mother of The Bride In Loving Memory Wedding Sign', price=24.00, description='Looking for an in loving memory wedding sign for the father of the bride? Our in loving memory wedding reserved signs for dad are sure to add the perfect touch to your special day! These reserved signs are the perfect size making them versatile from propping on table tops to chairs. Add a tie for easy hanging to reserve a special seat for your loved one!p2'),
    Product(
        seller_id=4, category='Seating', name='Personalized Reserved In Loving Memory Of Custom Name Seat Sign for Wedding Events | Ceremony Chair Memorial Banner 1065', price=28.00, description='This banner is a truly lovely way to honor an important person you\'ve lost too soon. Hold space for them on your big day by reserving a chair in their name. Your sign will be printed in your color with the name of your loved one and your relationship.'),
    Product(
        seller_id=3, category='Seating', name='Wedding Chair Signs, Bride and Groom Chair Signs, wedding table decoration, wedding chair decoration, bride groom signs for wedding chair', price=18.00, description='Wedding chair signs Bride and Groom for wedding table decoration - SET of Bride and Groom laser cut names from golden mirror acrylic, silver mirror acrylic, white acrylic or wood.'),
    Product(
        seller_id=4, category='Seating', name='Hubby & Wifey Wedding Chair Signs (Set of TWO) 12" x 7" Laser Cut Acrylic Wedding Chair Sign, Sweetheart Table Decor - Trendy Style', price=45.00, description='Celebrate in style with our HEE+ designed laser cut acrylic HUBBY & WIFEY wedding chair signs!'),
    Product(
        seller_id=3, category='Seating', name='Wedding Chair Sign - Mr and Mrs Wooden Chair Signs - Wooden Chair Decor - Chair Sign - Laser Cut Chair Sign - Circle Chair Sign', price=36.50, description='These wooden wedding signs will make a gorgeous addition to your wedding or any other party chair decorations. Now you can make your special day a little more personal with our fun scripted wood chair signs. Put some greenery around the top of the sign for an extra touch of elegance. Perfect to display in your home after.'),
    Product(
        seller_id=1, category='Arches', name='Double Square Wedding Arch Bridal Shower Ceremony Flower Arch Balloons Arch Background Party Stage Rustic Wedding Decoration', price=385.00, description='Double Pole Square Wedding Arch Wrought Iron Frame Background Party Stage Flower Arch Decoration'),
    Product(
        seller_id=2, category='Arches', name='Handmade Macrame Wedding Backdrop, Macrame Wedding Arch Arbor, Macrame Wall Hanging,Macrame Door Hanging,Room Divider,Macrame Curtains', price=44.99, description='Create your dream boho living space with our cotton macrame wallhangings.'),
    Product(
        seller_id=1, category='Arches', name='Wedding Backdrop | Wedding Arch Alternative | Floral Stands | Ceremony Floral Accents | Decor | Custom Sizes Available', price=270.00, description='These handmade COPPER STANDS are perfect for shaping your alter with your custom wedding color florals. These pieces come polished and cleaned thoroughly however copper naturally holds onto oils so I highly recommend using TarnX to polish the copper a day or two before your event to make it the most beautiful rose gold color.'),
    Product(
        seller_id=4, category='Arches', name='Wedding Arch, Wedding Decor, Ceremony Arch, Wedding Arbor, Rustic Wedding Arch, Wedding Arch Hexagon, Beach Wedding, Boho Decor', price=188.09, description='Our Personalized Wedding Arch is the best choice for your special day, which will decorate your holiday and make your ceremony look perfect.'),
    Product(
        seller_id=3, category='Arches', name='Customized Arch Extra Stable 7.87ft Metal Double Ring Round Hoop Circle Wedding Floral Wheel Bridal Door Backdrop Stand For Boho Wedding', price=215.00, description='This Handmade Customized 7 ft Metal Double Ring Round Circle Wedding Wreath Floral Arch Wheel Backdrop is stunning for your wedding vows, wedding photos, social media photo booster, and so many possibilities!'),
    Product(
        seller_id=2, category='Arches', name='Wedding Arch - Hexagon Wedding Arch - Wooden Arch Wedding - Boho Wedding Décor - Geometric Wedding Arbor - Rustic Wedding Backdrop', price=209.66, description='This wedding arch will be the centerpiece décor on your Big day. So it has to be perfect. We wanted to create something we would be proud to use at our own wedding.'),
    Product(
        seller_id=1, category='Bar & Menu', name='Signature Dog Cocktails Frosted Acrylic Wedding Bar Sign || custom wedding bar sign personalized bar drinks menu after party 03-038-547', price=18.36, description='Our acrylic signs are a beautiful way to welcome your guests. Made on sturdy acrylic for a glass-like effect, they are eye-catching and stunning. Our signs are never made using vinyl or stickers, and the design is 100% permanent. It will never fade or scratch off and is 100% weatherproof. Acrylic is a a superior material for signs, it is shatterproof, rigid enough to stand on its own while being lightweight and easy to handle. Place it in an easel for a crisp, clean look, frame it, or dress up with a floral arrangement.'),
    Product(
        seller_id=3, category='Bar & Menu', name='Signature Cocktails Acrylic Sign, Signature Drink Bar Menu, Wedding Bar Menu, Wedding Bar Sign, Acrylic Bar Menu Sign', price=25.00, description='This is a perfect signature drink sign for a wedding or party.'),
    Product(
        seller_id=3, category='Bar & Menu', name='Acrylic Bar Menu | Arch bar menu | Custom drinks menu | Bar menu | Wedding menu | Wedding decor | Drinks list | Wedding | Engagement', price=18.11, description='Our personalized bar/drinks menu adds the perfect personalized touch to your wedding, engagement, or event.'),
    Product(
        seller_id=4, category='Bar & Menu', name='Signature Drinks Sign Template | Minimalist Wedding Bar Menu Poster | Signature Cocktail Sign | His + Hers Bar Sign | Editable Template | M9', price=7.79, description='This editable Signature Drink Sign features modern minimalist fonts where you have the freedom to create your personalized specialty cocktails! Easily change the fonts, font colors, and background color to match your unique style! After you place your order, you will receive an email from Templett with access to your self-editable template where you will be able to customize all your own details! '),
    Product(
        seller_id=4, category='Bar & Menu', name='Acrylic Wedding Bar Sign | Signature Drink 8x10 Frosted Bar Menu | Open Bar Sign | Modern Wedding Sign | Event Stationery | His Hers Drinks', price=60.24, description='This bar sign is perfect for your modern wedding or event.'),
    Product(
        seller_id=4, category='Bar & Menu', name='Acrylic Split Arch Wedding Bar Sign | Signature Drink 8x10 Frosted Bar Menu | Open Bar Sign | Modern Wedding Sign | His Hers Drinks', price=71.49, description='This bar sign is perfect for your modern wedding or event.'),
    Product(
        seller_id=1, category='Bar & Menu', name='Bar Menu Template, Modern Editable Drink Menu Template, Minimalist Printable Bar Menu, Signature Drinks Sign, 1,300+ Drink Images, Greenery', price=5.59, description='Print your own Signature Drink Sign with this template.'),
    Product(
        seller_id=3, category='Bar & Menu', name='Juliette Furbabies Signature Cocktails Sign, Cats and Dogs, Bar Menu, Bar Sign, Drinks Sign, Printable Editable Template #004', price=6.00, description='A wonderful way to include your furbabies on your special day. Edit the design with your words to make it your own and print!'),
    Product(
        seller_id=3, category='Bar & Menu', name='Wedding Signature Drink Dogs, Watercolor Wedding Sign Pets, Dog Bar Menu Signs, Signature Cocktail Drinks with Cats, Elegant Wedding Signs', price=59.42, description='Custom Wedding Signature Drinks Sign with Dogs and Cats create from photos. MAKE YOUR BELOVED FURRY BABIES A PART OF YOUR SPECIAL DAY!p40.'),
    Product(
        seller_id=4, category='Signage', name='Wedding Order of Events Sign Printable, Dogs Wedding Timeline Sign, Wedding Welcome Sign with Pets, Personalized Wedding Signs, Boho Wedding', price=36.29, description='Personalized Wedding Order of Events Sign with Multiple Icon Options to create your own personalized Wedding Sign. You can also include your dear furry friends into the sign, which is an adorable way to honor your pets to your wedding day! 300 dpi high resolution ready-to-print PDF & JPG files for you to print.'),
    Product(
        seller_id=5, category='Guestbook', name='Guestbook Sign | Acrylic Wedding Sign | Acrylic Guestbook Sign | Wedding Decor Sign | Custom Wedding Sign | Hand Lettered Wedding Sign', price=25.00, description='This is the perfect acrylic sign to add to your wedding day, or any special event. This acrylic sign is completely customizable and is hand lettered. I would love to work with you to create the perfect piece for your special day!p4'),
    Product(
        seller_id=5, category='Bar & Menu', name='Bar Menu Signature Cocktails Custom Clear Glass Look Acrylic Wedding Sign With Stand, His Her Drinks Lucite Perspex Bar Table Sign', price=31.99, description='Bar Menu Signature Cocktails Custom Clear Glass Look Acrylic Wedding Sign With Stand, His Her Drinks Lucite Perspex Bar Table Sign'),
    Product(
        seller_id=4, category='Bar & Menu', name='Open Bar Sign - Acrylic Wedding Sign - Wedding Open Bar Sign - Tomorrow\'s Stories are Priceless', price=15.99, description='Let your guests know the party is ready to begin with our "Open Bar" Sign!'),
    Product(
        seller_id=5, category='Guestbook', name='Personalized Wedding Guest Book Sign, Acrylic Sign, Acrylic Guestbook, Alternative Wedding Guest Book, Custom Wedding Sign', price=40.00, description='Our guest books are made of acrylic and if you want personalization (your names and surnames), it is done with paint.'),
    Product(
        seller_id=5, category='Guestbook', name='Transparent hexagon wedding guest book alternative hearts, Clear guestbook wedding alternative sign', price=42.00, description='This transparent hexagon wedding guest book alternative will be perfect for your wedding!p'),
    Product(
        seller_id=3, category='Guestbook', name='Classic Guestbook • Modern Wedding Guest Book • Personalized Photo Book • Gold Foil Custom Hardcover Wedding Book', price=44.62, description='These wedding guestbooks are the perfect way to remember your classic wedding. Each hardcover book is complete with a white grosgrain ribbon attached at the top of the spine. Each book is casebound and includes your choice of 50 or 100 sheets on 70 lb. opaque text-weight paper stock.'),
    Product(
        seller_id=2, category='Guestbook', name='Wedding Guest Book Wedding Guestbook Photo Booth Album Alternative Custom Wedding Guestbook Rustic Guest Book Unique Wedding Guest Book', price=40.50, description='Our wedding guest books are laser engraved with YOUR unique details, every book is one-of-a-kind! Display your custom guest book at your wedding, bridal shower, or other event for all of your friends and family to sign. These make excellent wedding and engagement party gifts- a keepsake that the couple can cherish for years to come!'),
    Product(
        seller_id=3, category='Guestbook', name='3D Square Guest Book Wedding Alternative, Custom Guest Book, Wooden Guest Book, Wedding Decor, Laser Wedding Guestbook Square', price=95.00, description='This custom 3D guest book sign makes a beautiful personalized addition to your wedding and later to your home. Raised lettering creates a rather unique 3D effect that adds depth and character to the piece.'),
    Product(
        seller_id=4, category='Guestbook', name='Personalized Wedding Guest Book With Wood / Rustic Wedding Guest Book / Unique Wedding Guest Book Polaroid / Guest Book Alternative -by TOA', price=56.24, description='Design your one-of-a-kind guest book'),
    Product(
        seller_id=5, category='Guestbook', name='Rose Gold Globe - Guest Book Alternative, Wedding Guest Travel Globe Guest Book, Hen Party Bridal Guestbook, Baby Shower Wishing Jar', price=43.99, description='This wedding guest book alternative is sure to put a smile on your guests faces, have them sign a message as you set off on this new adventure. The globe can be placed on a table for guests to sign then used as a fab keepsake decoration for years to come.'),
    Product(
        seller_id=5, category='Guestbook', name='Wishing Jar - Guest Book Alternative, Wedding Wishing Jar, Hen Party Bridal Guestbook, Baby Shower Wishing Jar, Copper Lid and Wooden Hearts', price=16.32, description='Use this simply stunning Wishing Jar as an alternative guestbook at your wedding.'),
    Product(
        seller_id=5, category='Guestbook', name='Prompt Cards & Photocorner Packages for Wedding Guestbook', price=22.65, description='Opening your wedding guestbook to discover the messages of love, memories, pearls of wisdom and wishes for your future, is truly a cherished moment.'),
    Product(
        seller_id=1, category='Signage', name='Wedding Welcome Sign - Modern Wedding Sign - Acrylic Wedding Sign - Lucite Wedding Sign - Wedding Signs - Acrylic - Acrylic Wedding WEL012-c', price=31.45, description='Custom acrylic welcome sign made out of 1/8" acrylic, not glass.'),
    Product(
        seller_id=2, category='Guestbook', name='Message in a Bottle Wedding Guest Book, Wedding Guest Book Alternative, Wedding Guestbook Sign, Rustic Wedding Decor, Wedding Keepsake', price=20.73, description='This wedding guestbook is the perfect way to keep hold of special messages to treasure forever from your loved ones. Your guests are bound to be mesmerized and will enjoy writing their message with this unique wedding guest book alternative. The bottle comes with paper scrolls for guests to write their messages on, which they can then roll up and pop in the bottle - creating a unique talking point for your wedding.'),
    Product(
        seller_id=3, category='Guestbook', name='Guest Book Alternative Wedding Family Name Sign Tropical Wedding Décor Destination Wedding Decorations Beach Wedding Guest Book Sign', price=20.95, description='This unique guestbook with voluminous names will be the perfect addition to your holiday! It will perfectly complement your wedding decor or your other event.'),
    Product(
        seller_id=3, category='Guestbook', name='Alternative Guest Book Guest Book Alternative Wedding Family Name Sign Minimalist Boho Style Wedding Decor', price=20.95, description='An alternative wedding guestbook with your personalization is a great wedding decor for your holiday.'),
    Product(
        seller_id=6, category='Groom & Groomsmen', name='Groomsman Rocks Glass, Custom Groomsman Gifts, Engraved Glass, Wedding Party Whiskey Glass, Whiskey glasses, Wedding Favors, Groomsmen Gifts', price=11.92, description='Personalize our engraved whiskey glasses with your choice deign from our design menu. Engraved glasses are an essential gift for your entire wedding party. Our restaurant quality glassware is laser engraved for a permanent, dishwasher safe, design that will never peel or fade.p'),
    Product(
        seller_id=6, category='Groom & Groomsmen', name='Groomsmen Gift, Bottle opener, Groomsmen Gifts Personalized bottle opener, Groomsmen Proposal Best Man Gift Custom Groomsman gift', price=10.35, description='This Personalized Bottle opener is the perfect gift for your groomsmen or any favorite beer drinker in your life. Perfect for a Bar or gift for your favorite bartender.'),
    Product(
        seller_id=6, category='Groom & Groomsmen', name='Personalized Throwing Axe Hatchet Gift for Groomsmen Proposal', price=14.98, description='Look no further! You have found the perfect gift to give your groomsmen, your dad, your boyfriend, your husband, or any special person in your life. This throwing axe comes engraved with the name/initials of your choice. An optional engraved gift box can be added.'),
    Product(
        seller_id=6, category='Groom & Groomsmen', name='Metal Cufflinks - Engraved Square Gift Box Optional, Custom Wedding Day Cuff links Gift Groom Dad Groomsmen Father of Bride Groom', price=36.99, description='Listing is for a pair of engraved metal cuff links & optional square walnut gift box (1.5 x 1.5 x 1 in.)'),
    Product(
        seller_id=6, category='Groom & Groomsmen', name='Funny Groomsman Card, Groomsman Calendar Proposal Card - Best Man, Groomsman, Ring Bearer, Bridesman, Man of Honor, Cards for Groomsmen', price=2.45, description='Your choice of Groomsman, Best Man, Ring Bearer, and more! Or custom wording (just leave a note). Includes an optional envelope in your choice of color.'),
    Product(
        seller_id=4, category='Guestbook', name='Wedding Guest Book Alternative - Acrylic Wedding Sign - Bridal Shower Guest Book Alternative - Personalized Guestbook - Wedding Gift', price=39.24, description='Say "No" to boring guest book ideas, say "yes" to this beautiful wedding guest book alternative. This one in a kind piece will surely impress everyone at your wedding party. You will treasure it as a beautiful keepsake to cherish the happy memories of your wedding day. Ask your guests to sign a heart and drop into the glass frame.'),
    Product(
        seller_id=2, category='Guestbook', name='Acrylic Wedding Guestbook, Guest Book Alternative, Modern Acrylic Guestbook, Rustic Wedding Decor', price=60.00, description='Our guest books are made of acrylic + plywood frame and personalization (your surnames and date), it is done with paint.'),
    Product(
        seller_id=2, category='Guestbook', name='Guestbook Heart, Circle, Rectangle / Guest Book Sign/ Acrylic sign/ Acrylic Guestbook By Eli', price=55.00, description='Our guest books are made of acrylic + plywood frame and personalization (your surnames and date), it is done with paint.'),
    Product(
        seller_id=3, category='Seating', name='Find Your Seat Escort Card Wedding Sign, Hexagon or Circle Party & Event Seating Chart Sign Modern Boho Wedding Decor (Item - FYC220)', price=35.72, description='This find your seat escort card sign is a beautiful piece for the wedding or event decor that can be used as a sign at the wedding reception escort card display area! Choose your shape! With this beautiful sign, the special day will be unique and memorable! Choose your color from our selection of gorgeous metallic, glitter, and on-trend colors.'),
    ]

    for product in products:
        db.session.add(product)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
