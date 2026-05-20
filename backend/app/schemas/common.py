from pydantic import BaseModel, Field


class ErrorResponse(BaseModel):
    detail: str = Field(..., examples=["Validation failed"])
    code: str = Field(..., examples=["validation_error"])
