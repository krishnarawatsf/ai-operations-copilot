from app.schemas.notification import NotificationRequest


class NotificationService:
    def prepare_notification(self, payload: NotificationRequest) -> dict[str, object]:
        return {
            "channel": payload.channel,
            "recipient": payload.recipient,
            "message": payload.message,
            "severity": payload.severity,
            "status": "prepared",
        }


notification_service = NotificationService()
