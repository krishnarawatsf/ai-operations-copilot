from fastapi import APIRouter

from app.schemas.webhook import WebhookEvent
from app.services.webhook_service import webhook_service

router = APIRouter()


@router.post("/ingest")
async def ingest_event(payload: WebhookEvent) -> dict[str, object]:
    return webhook_service.ingest(payload)
