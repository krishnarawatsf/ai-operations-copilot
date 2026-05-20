from functools import lru_cache

from pydantic import Field, AnyHttpUrl
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = Field(default="AI Operations Copilot")
    environment: str = Field(default="development")
    debug: bool = Field(default=True)
    api_v1_prefix: str = Field(default="/api/v1")
    cors_origins_raw: str = Field(default="http://localhost:5173")
    database_url: str = Field(default="postgresql+asyncpg://postgres:postgres@localhost:5432/aiops")
    redis_url: str = Field(default="redis://localhost:6379/0")
    secret_key: str = Field(default="replace-me")
    access_token_expire_minutes: int = Field(default=60)
    openai_api_key: str = Field(default="")
    openai_model: str = Field(default="gpt-4o-mini")
    anthropic_api_key: str = Field(default="")
    anthropic_model: str = Field(default="claude-3-5-sonnet-latest")
    n8n_webhook_secret: str = Field(default="replace-me")

    @property
    def cors_origins(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins_raw.split(",") if origin.strip()]


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
