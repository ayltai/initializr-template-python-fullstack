from fastapi import APIRouter, Response

router = APIRouter()


@router.get('/api/v1/health', description='Health check endpoint', tags=['System'], responses={
    200: {
        'description': 'The service is healthy',
    },
    500: {
        'description': 'The service is unhealthy',
    },
})
async def health_check() -> Response:
    return Response(status_code=200)
