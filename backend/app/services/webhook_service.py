from app.schemas.webhook import WebhookEvent


class WebhookService:
    def ingest(self, payload: WebhookEvent) -> dict[str, object]:
        return {
            "status": "accepted",
            "event_type": payload.event_type,
            "source": payload.source,
            "routing_key": f"{payload.source}.{payload.event_type}",
        }


webhook_service = WebhookService()
