from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .images import seed_images, undo_images
from .reviews import seed_reviews, undo_reviews
from .categories import seed_categories, undo_categories
from .purchases import seed_purchases, undo_purchases
from .shops import seed_shops, undo_shops

# creates a seed group to hold our commands (`flask seed --help`)
seed_commands = AppGroup('seed')


# creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_products()
    seed_images()
    seed_reviews()
    seed_categories()
    seed_purchases()
    seed_shops()


# creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_images()
    undo_reviews()
    undo_categories()
    undo_purchases()
    undo_shops()
