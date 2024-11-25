from configparser import ConfigParser
from os import path

from sqlalchemy import create_engine
from sqlmodel import SQLModel

config = ConfigParser()
config.read(path.join(path.dirname(__file__), '..', 'config.ini'))

# pylint: disable=invalid-name
database_url = None
# pylint: disable=invalid-name
engine       = None

if path.exists(config['storage']['path']):
    database_url = f"sqlite:///{config['storage']['path']}/database.db"
else:
    database_url = 'sqlite:///./database.db'

engine = create_engine(database_url, connect_args={
    'check_same_thread': False,
})


def init_db():
    SQLModel.metadata.create_all(engine)
