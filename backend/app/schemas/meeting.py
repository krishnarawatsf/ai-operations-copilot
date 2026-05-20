from pydantic import BaseModel, Field


class MeetingSummaryRequest(BaseModel):
    transcript: str = Field(..., min_length=10)
    meeting_title: str | None = Field(default=None)
    attendees: list[str] = Field(default_factory=list)


class FollowUpRequest(BaseModel):
    meeting_id: str = Field(..., min_length=1)
    recap: str = Field(..., min_length=10)
    recipients: list[str] = Field(default_factory=list)


class ActionItem(BaseModel):
    title: str
    owner: str
    deadline: str | None = None
    priority: str = Field(default="medium")


class MeetingSummaryResponse(BaseModel):
    summary: str
    action_items: list[ActionItem]
    deadlines: list[str]
    owner_assignments: dict[str, str]
    follow_up_summary: str
