from pydantic import BaseModel


class RecommendationItem(BaseModel):
    title: str
    rationale: str
    impact: str
    effort: str
    confidence: float


class RecommendationResponse(BaseModel):
    items: list[RecommendationItem]
