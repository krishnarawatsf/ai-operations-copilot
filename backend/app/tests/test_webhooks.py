import pytest


@pytest.mark.asyncio
async def test_webhook_ingest_accepts_event(client):
    response = await client.post(
        '/api/v1/webhooks/ingest',
        json={'event_type': 'meeting.completed', 'source': 'n8n', 'payload': {'meeting_id': 'm-1'}},
    )

    assert response.status_code == 200
    body = response.json()
    assert body['status'] == 'accepted'
    assert body['routing_key'] == 'n8n.meeting.completed'
