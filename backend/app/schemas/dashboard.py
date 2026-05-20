from pydantic import BaseModel


class DashboardMetric(BaseModel):
    label: str
    value: str
    trend: str | None = None


class DashboardOverviewResponse(BaseModel):
    metrics: list[DashboardMetric]
    bottlenecks: list[str]
    productivity_insights: list[str]
