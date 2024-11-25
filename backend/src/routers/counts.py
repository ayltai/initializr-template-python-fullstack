from fastapi import APIRouter
from fastapi.responses import PlainTextResponse

from ..data import engine
from ..data.models import Count
from ..data.repositories import CountRepository

router     = APIRouter()
repository = CountRepository(engine)


@router.post('/api/v1/counts/init', description='Initialize the count', tags=['Counts'], response_model=Count, responses={
    200: {
        'description': 'The count was initialized',
    },
})
async def init_count() -> Count:
    return repository.init()


@router.get('/api/v1/counts', description='Get the current count', tags=['Counts'], response_model=Count, responses={
    200: {
        'description': 'The current count',
    },
})
async def get_count() -> Count:
    return await repository.get()


@router.post('/api/v1/counts/increment', description='Increment the count', tags=['Counts'], response_model=Count, responses={
    200: {
        'description': 'The count was incremented',
    },
})
async def increment_count() -> Count:
    return await repository.increment()


@router.post('/api/v1/counts/decrement', description='Decrement the count', tags=['Counts'], response_model=Count, responses={
    200: {
        'description': 'The count was decremented',
    },
})
async def decrement_count() -> Count:
    return await repository.decrement()


@router.post('/api/v1/counts/reset', description='Reset the count', tags=['Counts'], response_model=Count, responses={
    200: {
        'description': 'The count was reset',
    },
})
async def reset_count() -> Count:
    return await repository.reset()
