from app.schemas.auth import LoginRequest, TokenResponse


class AuthService:
    def login(self, payload: LoginRequest) -> TokenResponse:
        token = f"demo-token-for-{payload.email}"
        return TokenResponse(access_token=token)

    def refresh(self, token: str) -> TokenResponse:
        return TokenResponse(access_token=f"refreshed-{token}")


auth_service = AuthService()
