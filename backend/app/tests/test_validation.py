import pytest


@pytest.mark.asyncio
async def test_meeting_summary_rejects_short_transcript(client):
    response = await client.post(
        '/api/v1/meetings/summarize',
        json={'transcript': 'too short', 'attendees': []},
    )

    assert response.status_code == 422
