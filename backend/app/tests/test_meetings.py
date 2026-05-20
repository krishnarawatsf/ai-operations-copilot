import pytest


@pytest.mark.asyncio
async def test_meeting_summary_returns_action_items(client):
    response = await client.post(
        '/api/v1/meetings/summarize',
        json={
            'transcript': 'The team agreed to finalize the launch plan and assign CRM updates after the meeting.',
            'attendees': ['Ava', 'Mia'],
        },
    )

    assert response.status_code == 200
    body = response.json()
    assert body['summary']
    assert body['action_items']
    assert body['owner_assignments']
