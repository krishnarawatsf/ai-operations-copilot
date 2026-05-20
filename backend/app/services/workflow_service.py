from app.schemas.workflow import WorkflowGenerationRequest, WorkflowGenerationResponse, WorkflowStep


class WorkflowService:
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

    def create_crm_update(self, payload: dict[str, object]) -> dict[str, object]:
        return {
            "status": "queued",
            "target_system": "crm",
            "payload": payload,
        }


workflow_service = WorkflowService()
