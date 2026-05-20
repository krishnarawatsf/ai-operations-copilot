import pytest


@pytest.mark.asyncio
async def test_dashboard_overview_has_metrics(client):
    response = await client.get('/api/v1/dashboard/overview')

    assert response.status_code == 200
    body = response.json()
    assert len(body['metrics']) >= 3
    assert body['bottlenecks']
