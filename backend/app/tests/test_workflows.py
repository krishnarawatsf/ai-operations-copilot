import pytest


@pytest.mark.asyncio
async def test_generate_workflow_has_steps(client):
    response = await client.post(
        '/api/v1/workflows/generate',
        json={'source': 'meeting_summary', 'context': {}, 'objective': 'turn meeting notes into tasks'},
    )

    assert response.status_code == 200
    body = response.json()
    assert body['workflow_name'] == 'meeting_summary-automation'
    assert len(body['steps']) >= 3
