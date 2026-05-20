from dataclasses import dataclass
from typing import Protocol

from app.schemas.meeting import FollowUpRequest, MeetingSummaryRequest, MeetingSummaryResponse, ActionItem
from app.schemas.recommendation import RecommendationItem, RecommendationResponse
from app.schemas.workflow import WorkflowGenerationRequest, WorkflowGenerationResponse, WorkflowStep


class AIProvider(Protocol):
    async def summarize_meeting(self, payload: MeetingSummaryRequest) -> MeetingSummaryResponse: ...

    async def generate_follow_up(self, payload: FollowUpRequest) -> dict[str, object]: ...

    def generate_recommendations(self) -> RecommendationResponse: ...

    def generate_workflow(self, payload: WorkflowGenerationRequest) -> WorkflowGenerationResponse: ...


@dataclass
class MockAIProvider:
    async def summarize_meeting(self, payload: MeetingSummaryRequest) -> MeetingSummaryResponse:
        transcript_excerpt = payload.transcript[:160].strip()
        action_items = [
            ActionItem(title="Draft follow-up email", owner=payload.attendees[0] if payload.attendees else "Unassigned", deadline=None, priority="high"),
            ActionItem(title="Update project tracker", owner="Operations", deadline=None, priority="medium"),
        ]
        return MeetingSummaryResponse(
            summary=f"Meeting summary generated from: {transcript_excerpt}",
            action_items=action_items,
            deadlines=["Next Friday"],
            owner_assignments={item.title: item.owner for item in action_items},
            follow_up_summary="Follow up within 24 hours with owners and deadlines confirmed.",
        )

    async def generate_follow_up(self, payload: FollowUpRequest) -> dict[str, object]:
        return {
            "meeting_id": payload.meeting_id,
            "recipients": payload.recipients,
            "message": f"Follow-up for meeting {payload.meeting_id}: {payload.recap[:140]}",
            "status": "prepared",
        }

    def generate_recommendations(self) -> RecommendationResponse:
        return RecommendationResponse(
            items=[
                RecommendationItem(
                    title="Automate CRM updates after meetings",
                    rationale="Repeated manual updates can be converted into event-driven workflow steps.",
                    impact="high",
                    effort="medium",
                    confidence=0.91,
                ),
                RecommendationItem(
                    title="Add reminder escalation for overdue owners",
                    rationale="Escalations reduce delays on action items with missed deadlines.",
                    impact="medium",
                    effort="low",
                    confidence=0.88,
                ),
            ]
        )

    def generate_workflow(self, payload: WorkflowGenerationRequest) -> WorkflowGenerationResponse:
        steps = [
            WorkflowStep(name="Normalize input", action="validate_and_clean", owner="Backend", tool="fastapi"),
            WorkflowStep(name="Classify intent", action="classify_workflow", owner="AI Service", tool="openai_or_claude"),
            WorkflowStep(name="Trigger automation", action="dispatch_to_n8n", owner="Automation", tool="n8n"),
        ]
        return WorkflowGenerationResponse(
            workflow_name=f"{payload.source}-automation",
            confidence=0.87,
            steps=steps,
            triggers=["meeting.completed", "task.overdue", "crm.lead_updated"],
            fallback_plan="Queue event and retry with exponential backoff if external automation fails.",
        )


ai_provider = MockAIProvider()
