from pydantic import BaseModel, Field


class WorkflowGenerationRequest(BaseModel):
    source: str = Field(..., examples=["meeting_summary", "crm_update", "support_escalation"])
    context: dict[str, object] = Field(default_factory=dict)
    objective: str = Field(..., min_length=5)


class WorkflowStep(BaseModel):
    name: str
    action: str
    owner: str | None = None
    tool: str | None = None


class WorkflowGenerationResponse(BaseModel):
    workflow_name: str
    confidence: float
    steps: list[WorkflowStep]
    triggers: list[str]
    fallback_plan: str
