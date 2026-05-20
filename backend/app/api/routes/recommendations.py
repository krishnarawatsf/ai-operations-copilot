from fastapi import APIRouter

from app.services.ai_service import ai_service

router = APIRouter()


@router.get("")
async def get_recommendations() -> dict[str, object]:
    return ai_service.generate_recommendations()
