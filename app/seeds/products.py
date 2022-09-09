from app.models import db, Product


def seed_products():
    products = [
    Product(
        seller_id=1, category='Signage', name='Wedding Welcome Sign, Wedding Sign Board, Wedding Outdoor Sign, Our Wedding Board', price=57.07, description='This WEDDING WELCOME SIGN is expertly handcrafted just for you. Free shipping included.'),
    Product(
        seller_id=1, category='Signage', name='Copper stand welcome sign, wedding bar stand, seating chart stand', price=126.00, description='Frame is made from Copper pipes. Each piece is cut to order therefore, there may be slight variations.I do try to pick the best of the stock that is available to me. Please note that the copper will have minor flaws due to its nature and copper will age gradually overtime, darkening in color to a variety of rustic tones making them unique and truly one-of-a-kind backdrop. These are hand cut to order by me! No two may be exactly alike.'),
    Product(
        seller_id=2, category='Signage', name='Frosted Acrylic Wedding Welcome Sign Wedding Signage, 3D Welcome Sign', price=87.99, description='We have always believed that “Weddings do not have to be expensive, it has to be memorable”, so in order to make it memorable we are determined to add all the love, creativity and customized touch to the Welcome Signs. Customized Welcome signs are a beautiful Wedding décor to welcome your guest.'),
    Product(
        seller_id=1, category='Signage', name='Mirror Engraved Wedding Welcome Sign, Personalized Wedding Signs, Luxury Wedding Décor', price=37.57, description='Add a glam finishing touch to your wedding day with our engraved welcome sign.'),
    Product(
        seller_id=2, category='Signage', name='Frosted Acrylic Wedding Welcome Sign - Modern Wedding Sign - Wedding Ceremony Signs', price=152.91, description='Our frosted acrylic wedding welcome sign is a great way to welcome in your guests at your wedding or any of your special events.'),
    Product(
        seller_id=2, category='Arches', name='Wood Triangle Wedding Arch | Boho Wedding Triangle Arch | Modern Wedding Arbor | A-frame Wedding Arch', price=210.00, description='Handmade bohemiam wedding ceremony a-frame backdrop.'),
    Product(
        seller_id=1, category='Signage', name='Wedding Welcome Sign, Welcome To Our Wedding Sign, Wedding Sign Board, Vertical Modern Outdoor Sign', price=57.07, description='This wedding sign is expertly handcrafted just for you.'),
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
        seller_id=4, category='Seating', name='Unique Table Seating Chart on Window Panel (Mirror, six paneled window)', price=200.00, description='If you are wanting to have a unique table seating chart and you live in Los Angeles, you can have your dream come true.'),
    Product(
        seller_id=2, category='Seating', name='Acrylic Seating Chart // Wedding Seating Chart // Acrylic Wedding Sign // Seating Chart Sign // Custom Wedding Decor // Frosted Acrylic', price=141.75, description='Add a touch of elegant detail to your wedding or special event with our beautiful, laser cut and ENGRAVED acrylic custom seating chart!p18'),
    Product(
        seller_id=1, category='Seating', name='Acrylic Seating Chart // Wedding Seating Chart // Seating Chart // Custom Wedding Decor //Laser Engraved', price=127.20, description='Add a touch of elegant detail to your wedding or special event with our beautiful, laser cut and ENGRAVED acrylic custom seating chart!'),
    Product(
        seller_id=3, category='Seating', name='Reserved Seating Chair Tag Template, Modern Wedding Reserved Seat Tag, Minimalist Wedding Reserved Seating Tag, Printable, Templett, #016', price=3.99, description='Purchase, personalize, and print within minutes! Edit using the Templett app in your computer browser,p no additional software needed! Please try demo and seek clarification before purchasing the template.'),
    Product(
        seller_id=1, category='Table Decor&Centerpieces', name='Clear Glass Look Acrylic Table Number Sign With Stands, Perspex Modern Calligraphy Table Numbers, Lucite Minimalist Number, SIG-100', price=6.49, description='We love the sleek, clean lines of these clear acrylic table number signs. This acrylic is a display material that is strong, moisture resistant & visually clearer than glass, not to mention shatterproof! These signs are sized 4"x6", however, if you need size 5"x7", let us know and we can create a custom listing for you!'),
    Product(
        seller_id=4, category='Seating', name='Wedding Seating Chart Sign, Escort Sign, Escort Board, Seating Board, Wood Wedding Signs, Wooden Wedding Signs, Wedding, Wood -cp', price=87.05, description='Seating chart to be sent in the exact order you would like them to appear. Signs are painted, not vinyl stickers, and made out of birch veneered plywood; signs are ½ inch in thickness'),
    Product(
        seller_id=3, category='Seating', name='Wedding Chair Signs, Bride and Groom Chair Signs, wedding table decoration, wedding chair decoration, bride groom signs for wedding chair', price=18.00, description='Wedding chair signs Bride and Groom for wedding table decoration - SET of Bride and Groom laser cut names from golden mirror acrylic, silver mirror acrylic, white acrylic or wood.'),
    Product(
        seller_id=4, category='Seating', name='Hubby & Wifey Wedding Chair Signs (Set of TWO) 12" x 7" Laser Cut Acrylic Wedding Chair Sign, Sweetheart Table Decor - Trendy Style', price=45.00, description='Celebrate in style with our HEE+ designed laser cut acrylic HUBBY & WIFEY wedding chair signs!'),
    Product(
        seller_id=3, category='Seating', name='Wedding Chair Sign - Mr and Mrs Wooden Chair Signs - Wooden Chair Decor - Chair Sign - Laser Cut Chair Sign - Circle Chair Sign', price=36.50, description='These wooden wedding signs will make a gorgeous addition to your wedding or any other party chair decorations. Now you can make your special day a little more personal with our fun scripted wood chair signs. Put some greenery around the top of the sign for an extra touch of elegance. Perfect to display in your home after.'),
    Product(
        seller_id=1, category='Arches', name='Double Square Wedding Arch Bridal Shower Ceremony Flower Arch Balloons Arch Background Party Stage Rustic Wedding Decoration', price=385.00, description='Double Pole Square Wedding Arch Wrought Iron Frame Background Party Stage Flower Arch Decoration'),
    Product(
        seller_id=2, category='Guestbook', name='Wedding Guest Book, Guestbook, Floral Foliage, Rustic Guest Book, Custom Wedding, Alternative, Wood Wooden PG1', price=36.30, description='Your best wishes from guests can be kept forever in this stunning wooden guest book. Made as a counterpart to our engraved wedding signs, this beautiful floral guestbook has been hand designed in our New Forest studio by our in house artist.'),
    Product(
        seller_id=1, category='Arches', name='Wedding Backdrop | Wedding Arch Alternative | Floral Stands | Ceremony Floral Accents | Decor | Custom Sizes Available', price=270.00, description='These handmade COPPER STANDS are perfect for shaping your alter with your custom wedding color florals. These pieces come polished and cleaned thoroughly however copper naturally holds onto oils so I highly recommend using TarnX to polish the copper a day or two before your event to make it the most beautiful rose gold color.'),
    Product(
        seller_id=4, category='Favors&Gifts', name='Ultimate Gift Bundle, Charcuterie Board, Wine Glasses, Gift for Newlyweds, House Warming, Personalized Cutting Board', price=60.09, description='Our Ultimate Gift Bundle!'),
    Product(
        seller_id=3, category='Arches', name='Customized Arch Extra Stable 7.87ft Metal Double Ring Round Hoop Circle Wedding Floral Wheel Bridal Door Backdrop Stand For Boho Wedding', price=215.00, description='This Handmade Customized 7 ft Metal Double Ring Round Circle Wedding Wreath Floral Arch Wheel Backdrop is stunning for your wedding vows, wedding photos, social media photo booster, and so many possibilities!'),
    Product(
        seller_id=2, category='Arches', name='Wedding Arch - Hexagon Wedding Arch - Wooden Arch Wedding - Boho Wedding Décor - Geometric Wedding Arbor - Rustic Wedding Backdrop', price=209.66, description='This wedding arch will be the centerpiece décor on your Big day. So it has to be perfect. We wanted to create something we would be proud to use at our own wedding.'),
    Product(
        seller_id=1, category='Bar & Menu', name='Signature Dog Cocktails Frosted Acrylic Wedding Bar Sign || Custom Wedding Bar Sign Personalized Bar Drinks Menu After Party', price=18.36, description='Our acrylic signs are a beautiful way to welcome your guests. Made on sturdy acrylic for a glass-like effect, they are eye-catching and stunning. Our signs are never made using vinyl or stickers, and the design is 100% permanent. It will never fade or scratch off and is 100% weatherproof. Acrylic is a a superior material for signs, it is shatterproof, rigid enough to stand on its own while being lightweight and easy to handle. Place it in an easel for a crisp, clean look, frame it, or dress up with a floral arrangement.'),
    Product(
        seller_id=3, category='Bar&Menu', name='Signature Cocktails Acrylic Sign, Signature Drink Bar Menu, Wedding Bar Menu, Wedding Bar Sign, Acrylic Bar Menu Sign', price=25.00, description='This is a perfect signature drink sign for a wedding or party.'),
    Product(
        seller_id=3, category='Bar&Menu', name='Acrylic Bar Menu | Arch bar menu | Custom drinks menu | Bar menu | Wedding menu | Wedding decor | Drinks list | Wedding | Engagement', price=18.11, description='Our personalized bar/drinks menu adds the perfect personalized touch to your wedding, engagement, or event.'),
    Product(
        seller_id=4, category='Bar&Menu', name='Signature Drinks Sign Template | Minimalist Wedding Bar Menu Poster | Signature Cocktail Sign | His + Hers Bar Sign | Editable Template | M9', price=7.79, description='This editable Signature Drink Sign features modern minimalist fonts where you have the freedom to create your personalized specialty cocktails! Easily change the fonts, font colors, and background color to match your unique style! After you place your order, you will receive an email from Templett with access to your self-editable template where you will be able to customize all your own details! '),
    Product(
        seller_id=4, category='Bar&Menu', name='Acrylic Wedding Bar Sign | Signature Drink 8x10 Frosted Bar Menu | Open Bar Sign | Modern Wedding Sign | Event Stationery | His Hers Drinks', price=60.24, description='This bar sign is perfect for your modern wedding or event.'),
    Product(
        seller_id=4, category='Bar&Menu', name='Acrylic Split Arch Wedding Bar Sign | Signature Drink 8x10 Frosted Bar Menu | Open Bar Sign | Modern Wedding Sign | His Hers Drinks', price=71.49, description='This bar sign is perfect for your modern wedding or event.'),
    Product(
        seller_id=1, category='Bar&Menu', name='Bar Menu Template, Modern Editable Drink Menu Template, Minimalist Printable Bar Menu, Signature Drinks Sign, 1,300+ Drink Images, Greenery', price=5.59, description='Print your own Signature Drink Sign with this template.'),
    Product(
        seller_id=3, category='Bar&Menu', name='Juliette Furbabies Signature Cocktails Sign, Cats and Dogs, Bar Menu, Bar Sign, Drinks Sign, Printable Editable Template #004', price=6.00, description='A wonderful way to include your furbabies on your special day. Edit the design with your words to make it your own and print!'),
    Product(
        seller_id=3, category='Bar&Menu', name='Wedding Signature Drink Dogs, Watercolor Wedding Sign Pets, Dog Bar Menu Signs, Signature Cocktail Drinks with Cats, Elegant Wedding Signs', price=59.42, description='Custom Wedding Signature Drinks Sign with Dogs and Cats create from photos. MAKE YOUR BELOVED FURRY BABIES A PART OF YOUR SPECIAL DAY!p40.'),
    Product(
        seller_id=4, category='Signage', name='Wedding Order of Events Sign Printable, Dogs Wedding Timeline Sign, Wedding Welcome Sign with Pets, Personalized Wedding Signs, Boho Wedding', price=36.29, description='Personalized Wedding Order of Events Sign with Multiple Icon Options to create your own personalized Wedding Sign. You can also include your dear furry friends into the sign, which is an adorable way to honor your pets to your wedding day! 300 dpi high resolution ready-to-print PDF & JPG files for you to print.'),
    Product(
        seller_id=5, category='Guestbook', name='Guestbook Sign | Acrylic Wedding Sign | Acrylic Guestbook Sign | Wedding Decor Sign | Custom Wedding Sign | Hand Lettered Wedding Sign', price=25.00, description='This is the perfect acrylic sign to add to your wedding day, or any special event. This acrylic sign is completely customizable and is hand lettered. I would love to work with you to create the perfect piece for your special day!p4'),
    Product(
        seller_id=5, category='Bar&Menu', name='Bar Menu Signature Cocktails Custom Acrylic Wedding Sign, His Her Drinks Lucite Perspex Bar Table Sign', price=31.99, description='Bar Menu Signature Cocktails Custom Clear Glass Look Acrylic Wedding Sign With Stand, His Her Drinks Lucite Perspex Bar Table Sign'),
    Product(
        seller_id=4, category='Bar & Menu', name='Open Bar Sign - Acrylic Wedding Sign - Wedding Open Bar Sign - Tomorrow\'s Stories are Priceless', price=15.99, description='Let your guests know the party is ready to begin with our "Open Bar" Sign!'),
    Product(
        seller_id=5, category='Guestbook', name='Personalized Wedding Guestbook Sign, Acrylic Sign, Alternative Wedding Guest Book, Custom Wedding Sign', price=40.00, description='Our guest books are made of acrylic and if you want personalization (your names and surnames), it is done with paint.'),
    Product(
        seller_id=5, category='Guestbook', name='Transparent hexagon wedding guest book alternative hearts, Clear guestbook wedding alternative sign', price=42.00, description='This transparent hexagon wedding guest book alternative will be perfect for your wedding!p'),
    Product(
        seller_id=3, category='Guestbook', name='Photo Guestbook Snap It Stick It Sign It Clear Glass Look Acrylic Wedding Sign, Photo Booth Station Guest Book Lucite Table Sign SIG-PG1', price=26.49, description='This acrylic is a display material that is strong, moisture resistant & visually clearer than glass, not to mention shatterproof!'),
    Product(
        seller_id=2, category='Guestbook', name='Wedding Guest book, Alternative Wedding Guestbook, Guest Book Alternatives, Custom Portrait Guestbook, Custom Wedding Keepsake, Canvas', price=148.50, description='Create a one-of-a-kind guest book with this incredible custom wedding guest book for all of your guests to sign.'),
    Product(
        seller_id=3, category='Guestbook', name='3D Square Guest Book Wedding Alternative, Custom Guest Book, Wooden Guest Book, Wedding Decor, Laser Wedding Guestbook Square', price=95.00, description='This custom 3D guest book sign makes a beautiful personalized addition to your wedding and later to your home. Raised lettering creates a rather unique 3D effect that adds depth and character to the piece.'),
    Product(
        seller_id=4, category='Guestbook', name='Wedding Guest Book Alternative - alternative guestbook ideas wedding venue art, wedding venue illustration digital painting watercolor art', price=43.86, description='A beautiful and timeless keepsake to preserve that special memory of yours.'),
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
        seller_id=6, category='Groom&Groomsmen', name='Groomsman Rocks Glass, Custom Groomsman Gifts, Engraved Glass, Wedding Party Whiskey Glass, Whiskey glasses, Wedding Favors, Groomsmen Gifts', price=11.92, description='Personalize our engraved whiskey glasses with your choice deign from our design menu. Engraved glasses are an essential gift for your entire wedding party. Our restaurant quality glassware is laser engraved for a permanent, dishwasher safe, design that will never peel or fade.'),
    Product(
        seller_id=6, category='Groom&Groomsmen', name='Groomsmen Gift, Bottle opener, Groomsmen Gifts Personalized bottle opener, Groomsmen Proposal Best Man Gift Custom Groomsman gift', price=10.35, description='This Personalized Bottle opener is the perfect gift for your groomsmen or any favorite beer drinker in your life. Perfect for a Bar or gift for your favorite bartender.'),
    Product(
        seller_id=6, category='Groom&Groomsmen', name='Personalized Throwing Axe Hatchet Gift for Groomsmen Proposal', price=14.98, description='Look no further! You have found the perfect gift to give your groomsmen, your dad, your boyfriend, your husband, or any special person in your life. This throwing axe comes engraved with the name/initials of your choice. An optional engraved gift box can be added.'),
    Product(
        seller_id=6, category='Groom&Groomsmen', name='Metal Cufflinks - Engraved Square Gift Box Optional, Custom Wedding Day Cuff links Gift Groom Dad Groomsmen Father of Bride Groom', price=36.99, description='Listing is for a pair of engraved metal cuff links & optional square walnut gift box (1.5 x 1.5 x 1 in.)'),
    Product(
        seller_id=6, category='Groom&Groomsmen', name='Funny Groomsman Card, Groomsman Calendar Proposal Card - Best Man, Groomsman, Ring Bearer, Bridesman, Man of Honor, Cards for Groomsmen', price=2.45, description='Your choice of Groomsman, Best Man, Ring Bearer, and more! Or custom wording (just leave a note). Includes an optional envelope in your choice of color.'),
    Product(
        seller_id=4, category='Guestbook', name='Wedding Guest Book Alternative - Acrylic Wedding Sign - Bridal Shower Guest Book Alternative - Personalized Guestbook - Wedding Gift', price=39.24, description='Say "No" to boring guest book ideas, say "yes" to this beautiful wedding guest book alternative. This one in a kind piece will surely impress everyone at your wedding party. You will treasure it as a beautiful keepsake to cherish the happy memories of your wedding day. Ask your guests to sign a heart and drop into the glass frame.'),
    Product(
        seller_id=2, category='Guestbook', name='Acrylic Wedding Guestbook, Guest Book Alternative, Modern Acrylic Guestbook, Rustic Wedding Decor', price=60.00, description='Our guest books are made of acrylic + plywood frame and personalization (your surnames and date), it is done with paint.'),
    Product(
        seller_id=2, category='Guestbook', name='Guestbook Heart, Circle, Rectangle / Guest Book Sign / Acrylic Sign / Acrylic Guestbook By Eli', price=55.00, description='Our guest books are made of acrylic + plywood frame and personalization (your surnames and date), it is done with paint.'),
    Product(
        seller_id=3, category='Seating', name='Find Your Seat Escort Card Wedding Sign, Hexagon or Circle Party & Event Seating Chart Sign Modern Boho Wedding Decor (Item - FYC220)', price=35.72, description='This find your seat escort card sign is a beautiful piece for the wedding or event decor that can be used as a sign at the wedding reception escort card display area! Choose your shape! With this beautiful sign, the special day will be unique and memorable! Choose your color from our selection of gorgeous metallic, glitter, and on-trend colors.'),
    Product(
        seller_id=7, category='Favors&Gifts', name='Painting from Photo, Wedding Portrait, Wedding Illustration, Custom Wedding Print, Watercolor Couple Portrait, Anniversary Gift Wife Husband', price=25.45, description='WATERCOLOR PORTRAIT - personalized wedding portrait'),
    Product(
        seller_id=7, category='Favors&Gifts', name='Newlywed Christmas Ornament, Mr and Mrs Ornament, Newlywed Gift, Couples Gift, First Married Christmas Ornament, Wedding Gift, Gift for Bride', price=16.99, description='This adorable personalized Christmas ornament is the perfect personalized gift for newly married couples. Be it a Christmas gift, or a gift to give them for their wedding day, this cute ornament will be cherished by the couple.'),
    Product(
        seller_id=7, category='Guestbook', name='Custom Portrait Wedding Guest Book Alternative Personalized Wedding Guest Book Portrait Sign Illustration Wedding Decor Wedding Decorations', price=19.80, description='We draw a digital illustration of your photo with a modern, contemporary oil painting style.'),
    Product(
        seller_id=7, category='Favors&Gifts', name='Engraved Home Coordinates Custom Cutting Board | Bread Board | Personalized Charcuterie | Housewarming Gift | Closing Gift | Wedding Gift', price=50.03, description='Say hello to this USA made, premium solid walnut engraved cutting board- The perfect way to celebrate a housewarming, closing, wedding, or birthday! This timeless keepsake is not only functional, but serves as a unique gift that will be cherished forever.'),
    Product(
        seller_id=2, category='Favors&Gifts', name='Mr & Mrs Tequila Board, Personalized Gift, Housewarming Gift, Wedding Gift, Wedding Favors, Engagement Gift, Gift for Couple, Tequila Board', price=59.99, description='This 2 IN 1 DUAL PURPOSE board can be used as a cutting board or a serving tray. This makes the perfect gift for any occasion!'),
    Product(
        seller_id=3, category='Favors&Gifts', name='Engagement Gift For Couple, Personalized Unique Wedding Present, Personalized Wedding Gift, Engraved Chopping Board, Hochzeitsgeschenk Holz', price=114.18, description='A stunning collaboration of art and usability. Gift your loved one this thoughtfully unique gift. Highlight the momentous occasions in their life by personalizing a gift that will last a lifetime! This stunning resin art chopping board has been handcrafted by artisans on the Sunshine Coast in Australia. Every piece we make is 100% unique and of the finest quality.'),
    Product(
        seller_id=4, category='Favors&Gifts', name='Personalized Coasters Custom Made Engraved Coasters for Wedding Gift Bridal Shower Gift Custom (1pc)', price=5.39, description='Make that perfect unique coasters for drinks by adding your own personalized information. Great for weddings, housewarming, birthdays, anniversaries, and any other special occasion.'),
    Product(
        seller_id=5, category='Favors&Gifts', name='Custom Engraved Marble Wood Coasters | Anniversary Gifts Round Coaster for Men Personalized | Groomsmen Gifts', price=13.89, description='These laser engraved high quality wood and marble coasters will make unique and one of a kind gifts for birthday, anniversary, or any occasion that needs personal touch.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='Lace Boho Wedding Dress _ AVA', price=642.67, description='AVA has elegantly captured the essence of femininity with her illusion lace detailing bodice which drapes around her body, oh so effortlessly. She dares to captivate her guests with her deep plunging V back and flowing 1 metre lace train.'),
    Product(
        seller_id=6, category='Attire&Accessories', name='Traditional Chinese Dress, White Cheongsam Dress, Modern Qipao Dress, Women\'s Vintage Dresses, Floral Lace Dress, 2022 New Design Wedding Dress', price=112.82, description='White cheongsam dress is very suitable for Chinese wedding ceremony. The dress is a very elegant white wedding qipao dress with traditional Chinese style and fresh modern lace pattern. If you are looking for a dress that makes you stunning at the wedding or other events, then this dress is very suitable for you.'),
    Product(
        seller_id=5, category='Attire&Accessories', name='Modern Cheongsam Dress, Qipao Dress, Traditional Chinese Dress, White Qipao Dress, Cheongsam, Embroidery Flower Pattern, Mandarin Collar', price=169.23, description='Looking for an elegant comfortable Cheongsam dress? Then this dress is suitable for you!'),
    Product(
        seller_id=5, category='Attire&Accessories', name='Traditional Chinese Wedding Dress, Red Qipao, Embroidered Cheongsam, Tea Ceremony and Bridal Dress, Mandarin Collar', price=127.49, description='With great material, this dress will make you feel comfortable and soft when wearing, also is a good choice for gift.'),
    Product(
        seller_id=4, category='Attire&Accessories', name='Wedding dress from Inga Ezergale design Rose Collection', price=3083.19, description='This unique wedding gown is handmade and is the only one. Each flower is designed with hand and more than 7m of fabric is used. Each lace is sewn by hand. The process includes a petticoat.'),
    Product(
        seller_id=4, category='Attire&Accessories', name='Individual size A-line silhouette Tonisha wedding dress. Modern style by DevotionDresses', price=1275.00, description='This A-line wedding dress is made out of mesh, tulle and decorated with lace.'),
    Product(
        seller_id=6, category='Attire&Accessories', name='Cheongsam Dress Women, Qipao Dress Modern, Traditional Chinese Dress, Champagne Qipao Dress, Ball gowns, Flower Pattern, Mandarin Collar', price=152.31, description='This cheongsam dress makes you look gorgeous in daily life. Chinese cheongsam dress is made of high quality material and perfect design. Therefore, you could have a comfortable fit by wearing it.'),
    Product(
        seller_id=2, category='Attire&Accessories', name='Backless Wedding Dress Long Sleeve Sheath Form Fitting Gown | ANDREATTA', price=950.00, description='This lace backless wedding dress with long sleeves is for the bride who wants a gown that is both breathtaking and timeless.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='Boho wedding Dress "KENDALL" with Fringes | Designer Luxurious dress Mermaid | Unique wedding Dress shot Sleeve | Bohemian shiny Bridal Gown', price=790.00, description='A light shimmering "KENDALL" A-line dress sparkles and shimmers with gold and platinum hues.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='Short Sleeve Lace Midi Dress / Vintage Style Slim Wedding Dress / Korean Style Luxury wear Simple Dress / Elegant Unique Bridal Dress', price=100.00, description='This is a beautiful wedding dress for wedding/engagement.'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Book Stack Decor || Wedding Table Decor || Rustic Wedding decorations || Personalized table centerpieces', price=14.50, description='Personalized farmhouse books. These make great decor accents or centerpieces for your wedding. Each book can be created using whatever saying or name you wish (less than 12 characters including spaces works best).'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Newlyweds Mr. Mrs. Custom Engraved Engaged Wine Champagne Flutes 45th Anniversary Gift for Couples Wedding Centerpiece Set of 2 Bride Groom', price=19.95, description='Bridal Party Champagne Flutes Set of 2 Glass Flute Laser Engraved & Personalized with Last Name and Date Comes with Cursive Mr. & Mrs. Design AND Your Choice of Flute: Twisty Stem, Smooth Stem, or Stemless.'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Circular Greenery Centerpiece', price=39.99, description='Beautiful circular centerpieces made to order, all handcrafted and personalized to each wedding. All come complete and no further assembly needed.'),
    Product(
        seller_id=8, category='Favors&Gifts', name='Let Love Grow Printable Wedding Sign, Wedding Favors Sign, Please Take One, Succulent Favor Sign, Modern Minimalist Wedding Table Sign', price=4.19, description='This DIY, printable WEDDING SIGN features editable text for personalization! Using Templett - a web based template editor that allows you to customize your printable in minutes - you can customize this menu to fit your special day!'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Set of 10 - 12 inch wood slices wedding centerpieces wood centerpieces wood slabs wood log slices centerpiece wood slab rustic wedding decor', price=71.99, description='Every wood slice sold on our shop has been fully dried in a specially designed, climate controlled shop. They have been dried without splits and last for years of reuse. There’s nothing you need to do to them and they are ready to use upon arrival!'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Wedding Log Slices Perfect For Centerpieces, Flowers, Candles, Wedding Cake, Rustic, Vintage, Boho Barn Wedding Flower Decorations Decor', price=27.52, description='The logs are a natural product which means they may contain bark missing, have a sap on them from being cut etc. We would recommend removing them from the box once they have arrived to allow as much air to get to them. We can not be held responsible for the way in which the logs will turn out over time.'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Rustic Wedding Decor, String Lights, Wedding Table Decor, Reception, Centerpiece, Battery, Fairy lights, 10-30 LEDs, 3ft, 6ft, 9ft', price=2.97, description='String lights on a delicate wire for a whimsical glow in any size mason jar or centerpiece! p90.DIY rustic wedding decor. Save money on centerpieces. Easy to make!'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Rustic Wedding Table Numbers - Table Centerpieces - Personalized Table Numbers for Event - Wedding Chair Sign - Place cards - Name Settings', price=11.90, description='Wedding table numbers for your wedding!'),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Photo Table Numbers, EDITABLE Minimalist Wedding Table Number, Modern Wedding 100% Editable Template, Elegant Table Numbers Printable #BW1', price=8.26, description='This listing is for a downloadable, high-resolution, EDITABLE, PRINTABLE Welcome Sign. Access your template(s) within minutes of purchase. Customize in your computer web browser. No software installations or font downloads. '),
    Product(
        seller_id=8, category='Table Decor&Centerpieces', name='Table numbers, wedding table numbers, acrylic table number, lucite table numbers, wedding signs, acrylic wedding signs, acrylic modern -nc', price=5.03, description='Acrylic signs: Made out of 1/8" acrylic, not glass; acrylic signs are sent with a protective paper on the back that should be peeled off prior to use; acrylic scratches very easily, thus minor scratches and wear should be expected. Acrylic signs should not be stacked on each other without protective paper as this can cause the paint to stick.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='Moissanite Engagement Ring Set Unique Rose Gold Pear Shaped Moissanite Halo Ring Dainty Twisted Ring Bridal Set Wedding Ring Set For Her', price=392.22, description='We are jewelry artisans and manufacturers. Every Jewelry is made from the very scratch, and made by hand and carefully polished especially for you.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='1.5ct Pear Shaped Moissanite Bridal Set Moissanite Engagement Ring Rose Gold Cluster Wedding Women Unique Marquise Moissanite Band Chevron', price=694.21, description=' Ring Material: solid 14k rose gold. Center Stone: Moissanite, D-E-F color, in Pear shaped.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='Vintage kite cut green moss agate engagement ring set 14k rose gold marquise cut moissanite ring for women unique bridal wedding ring set', price=230.32, description='Every moss agate is natural, the color will be similar but not the same. It will be randomly selected when setting this stone.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='Wedding Ring Set 3PCS 18K Rose Gold Plated Engagement Stacking Band 1.5 Carat Cubic Zircon Promise Bridal Band Set Valentine\'s Gift For Her', price=11.34, description='Delicate Design- Center stone is set with 1.25 carat round cut AAA cubic zircon. This three-piece cubic zircon wedding ring set for her will never be outdated and will make your eyes shine. Perfect couple rings bridal set are dazzling in your hand.'),
    Product(
        seller_id=7, category='Attire&Accessories', name='1.5ct Oval Natural Green Moss Agate Engagement Ring Rose Gold Cluster Aquatic Agate Promise Ring Woman Marquise Cut CZ Diamond Wedding Ring', price=97.55, description='Every moss agate is natural, no two moss agate stones are the same, making each one unique. It is normal that the finished ring won\'t be the same as our picture.'),
    Product(
        seller_id=3, category='Table Decor&Centerpieces', name='Boho Floral Wedding Cake Topper With Rustic Wreath / Mr and Mrs Cake Topper / Personalized Wedding Cake Topper / Monogram Toppers -MIM', price=16.43, description='Let us use the power of love to create an enchanting cake topper.'),
    Product(
        seller_id=3, category='Table Decor&Centerpieces', name='Gold Cake topper for Wedding, Personalized cake topper, Rustic wedding cake topper, Custom Mr Mrs cake topper, Anniversary Cake toppers', price=18.43, description='Designed and Made in USA- Wedding Decor and Wedding Decorations. Anniversary Decorations and perfect for any occasion! Make the Bride and Groom stand out on their wedding day with our beautiful and personalized cake toppers to add to their special day!'),
    Product(
        seller_id=3, category='Table Decor&Centerpieces', name='Personalized Acrylic Wedding Cake Topper | Clear | Arch |with Cake Picks | Classic | Minimal | Simple | Mr and Mrs cake topper', price=25.20, description='Our acrylic cake toppers are the perfect way to decorate that beautiful wedding cake of yours! Our toppers are made from strong and sturdy 1/8" acrylic and laser engraved to ensure no fading or peeling whatsoever to have a lifelong momento of your special day. Choose to keep it simple and minimal, or make it stand out amidst some beautiful florals! This cake topper will make the perfect addition to your cake cutting moment!'),
    Product(
        seller_id=3, category='Table Decor&Centerpieces', name='Wedding cake topper wedding bride and groom cake topper rustic wedding cake topper figurine', price=70.32, description='Looking for a unique wedding cake topper which can be a keepsake last a lifetime. Our personalized wedding cake toppers are the great wedding topper and amazing wedding keepsake. It is also special wedding gift for bride and groom. These are 100% hand made so each wedding cake topper is absolute one-and-only in this world. Let us help create the unique wedding cake topper for your wedding day.'),
    Product(
        seller_id=4, category='Table Decor&Centerpieces', name='Personalized Gold Leaf Champagne Flutes (Set of TWO) Custom Engraved Rustic Toasting Flutes, Pair Etched Glasses, Premium Gold Flutes', price=75.00, description='Our classic, personalized rustic Gold Leaf toasting flutes are the must have gift that will serve as a lasting and meaningful memento for years to come!'),
    Product(
        seller_id=4, category='Table Decor&Centerpieces', name='Lenox True Love Silver Personalized Wedding Cake Cutting Set Bundle / Includes Engraved Wedding Champagne Flutes & Cake Knife and Server Set', price=120.32, description='This elegant set includes a pair of matching Champagne Toasting Flutes and Cake Knife and Server set from the Lenox True Love Collection, all custom engraved to your specifications, to make cherished wedding keepsakes for your favorite Bride and Groom.'),
    Product(
        seller_id=5, category='Table Decor&Centerpieces', name='Rose gold wedding glasses Cake server set Plate and forks Rose gold toasting flutes Cake cutter glasses dish forks Plate', price=67.20, description='Custom champagne glasses may be created to fit your needs. Your unique wedding colors can be used for this design. Names and date may be painted to customize to your occasion.'),
    Product(
        seller_id=5, category='Table Decor&Centerpieces', name='Personalized Wedding Toasting Flutes (Set of TWO) Pair Custom Engraved Vina Champagne Glasses, Couples Wedding Glass, Engagement Gift', price=38.00, description='Personalized pair Vina wedding toasting flutes are the must have gift that will serve as a lasting and meaningful memento for years to come!'),
    Product(
        seller_id=5, category='Table Decor&Centerpieces', name='Personalized Relationship Champagne Flutes - Toasting Glasses for Couples, Romantic Gift Idea, Anniversary Glasses, Design: N6', price=15.46, description='Personalized etched champagne glasses for newlyweds, newly engaged, anniversary, or any celebrating couples! Each champagne glass is laser etched for an elegant and permanent look. Perfect for toasting glasses and wedding gifts, or even wedding favors for your guests! Husband and wife both will adore these glasses long after the big day. Prosecco or Champagne, who cares?! Bubbles make everything better.'),
    Product(
        seller_id=5, category='Table Decor&Centerpieces', name='Personalized Wedding Glasses - Toasting Flutes - Engraved Wedding Glasses - Champagne Flutes - Wedding Favours', price=19.30, description='Personalized Wedding Champagne Glasses for the biggest day of your life! Each of our Personalized Wine Glass are handmade with love just for you!'),
    Product(
        seller_id=8, category='Bar&Menu', name='Bar Menu Signature Cocktails Custom Clear Glass Look Acrylic Wedding Sign, His Her Drinks Lucite Perspex Bar Table Sign', price=32.49, description='We love the sleek, clean lines of these wedding acrylic signs! This acrylic is a display material that is strong, moisture resistant & visually clearer than glass, not to mention shatterproof!'),
    Product(
        seller_id=5, category='Attire&Accessories', name='Tennis Bracelet and Earring | Bridal Jewelry Set | Wedding Simple Bridesmaid Jewelry | 18K Rose Gold | Hundred Hearts', price=25.00, description='Make a statement on your special day with these delicate and elegant pieces. Comes in pearl earring designs too.'),
    ]

    for product in products:
        db.session.add(product)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
