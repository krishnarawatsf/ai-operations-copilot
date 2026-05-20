from pydantic import BaseModel, Field


class NotificationRequest(BaseModel):
    channel: str = Field(..., examples=["slack", "email"])
    recipient: str = Field(..., min_length=1)
    message: str = Field(..., min_length=5)
    severity: str = Field(default="info")
