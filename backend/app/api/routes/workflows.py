from fastapi import APIRouter

from app.schemas.workflow import WorkflowGenerationRequest, WorkflowGenerationResponse
from app.services.workflow_service import workflow_service

router = APIRouter()


@router.post("/generate", response_model=WorkflowGenerationResponse)
async def generate_workflow(payload: WorkflowGenerationRequest) -> WorkflowGenerationResponse:
    return workflow_service.generate_workflow(payload)


@router.post("/crm-update")
async def create_crm_update(payload: dict[str, object]) -> dict[str, object]:
    return workflow_service.create_crm_update(payload)
