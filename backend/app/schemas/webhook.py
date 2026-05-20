from pydantic import BaseModel, Field


class WebhookEvent(BaseModel):
    event_type: str = Field(..., examples=["meeting.completed", "task.overdue", "crm.lead_updated"])
    source: str = Field(..., examples=["n8n", "slack", "crm"])
    payload: dict[str, object] = Field(default_factory=dict)
