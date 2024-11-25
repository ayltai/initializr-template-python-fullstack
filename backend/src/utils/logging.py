from logging import getLogger
from sys import argv

from sentry_sdk import capture_exception


def log_exception(exception: Exception):
    if argv[1] == 'dev':
        logger = getLogger('uvicorn.error')
        logger.setLevel('DEBUG')
        logger.exception(exception)
    else:
        capture_exception(exception)
