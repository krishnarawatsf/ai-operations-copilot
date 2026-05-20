class MetricsService:
    def get_dashboard_overview(self) -> dict[str, object]:
        return {
            "metrics": [
                {"label": "Open tasks", "value": "18", "trend": "+3%"},
                {"label": "Workflows automated", "value": "42", "trend": "+8%"},
                {"label": "Avg. follow-up time", "value": "3h 12m", "trend": "-11%"},
            ],
            "bottlenecks": [
                "CRM updates are delayed after sales meetings.",
                "Support escalations need owner assignment.",
            ],
            "productivity_insights": [
                "Teams save time when summaries are auto-drafted immediately after meetings.",
                "Escalation rules reduce forgotten follow-ups by keeping actions visible.",
            ],
        }


metrics_service = MetricsService()
