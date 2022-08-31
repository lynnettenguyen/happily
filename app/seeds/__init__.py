from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products

# creates a seed group to hold our commands (`flask seed --help`)
seed_commands = AppGroup('seed')


# creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_products()


# creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
