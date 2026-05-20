from fastapi import APIRouter

from app.schemas.meeting import (
    FollowUpRequest,
    MeetingSummaryRequest,
    MeetingSummaryResponse,
)
from app.services.ai_service import ai_service

router = APIRouter()


@router.post("/summarize", response_model=MeetingSummaryResponse)
async def summarize_meeting(payload: MeetingSummaryRequest) -> MeetingSummaryResponse:
    return await ai_service.summarize_meeting(payload)


@router.post("/follow-up")
async def generate_follow_up(payload: FollowUpRequest) -> dict[str, object]:
    return await ai_service.generate_follow_up(payload)
