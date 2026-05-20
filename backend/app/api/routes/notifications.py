from fastapi import APIRouter

from app.schemas.notification import NotificationRequest
from app.services.notification_service import notification_service

router = APIRouter()


@router.post("/send")
async def send_notification(payload: NotificationRequest) -> dict[str, object]:
    return notification_service.prepare_notification(payload)
