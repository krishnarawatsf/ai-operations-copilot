from fastapi import APIRouter

from app.services.metrics_service import metrics_service

router = APIRouter()


@router.get("/overview")
async def dashboard_overview() -> dict[str, object]:
    return metrics_service.get_dashboard_overview()
