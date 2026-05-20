from app.core.providers import ai_provider
from app.schemas.meeting import FollowUpRequest, MeetingSummaryRequest, MeetingSummaryResponse
from app.schemas.recommendation import RecommendationResponse
from app.schemas.workflow import WorkflowGenerationRequest, WorkflowGenerationResponse


class AIService:
    async def summarize_meeting(self, payload: MeetingSummaryRequest) -> MeetingSummaryResponse:
        return await ai_provider.summarize_meeting(payload)

    async def generate_follow_up(self, payload: FollowUpRequest) -> dict[str, object]:
        return await ai_provider.generate_follow_up(payload)

    def generate_recommendations(self) -> RecommendationResponse:
        return ai_provider.generate_recommendations()

    def generate_workflow(self, payload: WorkflowGenerationRequest) -> WorkflowGenerationResponse:
        return ai_provider.generate_workflow(payload)


ai_service = AIService()
