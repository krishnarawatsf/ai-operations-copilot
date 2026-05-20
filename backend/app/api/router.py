from fastapi import APIRouter

from app.api.routes.auth import router as auth_router
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.health import router as health_router
from app.api.routes.meetings import router as meetings_router
from app.api.routes.notifications import router as notifications_router
from app.api.routes.recommendations import router as recommendations_router
from app.api.routes.webhooks import router as webhooks_router
from app.api.routes.workflows import router as workflows_router

api_router = APIRouter()
api_router.include_router(health_router, tags=["health"])
api_router.include_router(auth_router, prefix="/auth", tags=["auth"])
api_router.include_router(meetings_router, prefix="/meetings", tags=["meetings"])
api_router.include_router(workflows_router, prefix="/workflows", tags=["workflows"])
api_router.include_router(dashboard_router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(recommendations_router, prefix="/recommendations", tags=["recommendations"])
api_router.include_router(notifications_router, prefix="/notifications", tags=["notifications"])
api_router.include_router(webhooks_router, prefix="/webhooks", tags=["webhooks"])
