from fastapi import APIRouter

from app.schemas.auth import LoginRequest, TokenResponse
from app.services.auth_service import auth_service

router = APIRouter()


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest) -> TokenResponse:
    return auth_service.login(payload)


@router.post("/refresh", response_model=TokenResponse)
async def refresh(payload: dict[str, str]) -> TokenResponse:
    return auth_service.refresh(payload.get("token", ""))
