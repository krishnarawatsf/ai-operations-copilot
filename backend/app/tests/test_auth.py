import pytest


@pytest.mark.asyncio
async def test_login_returns_token(client):
    response = await client.post('/api/v1/auth/login', json={'email': 'ops@example.com', 'password': 'supersecret'})

    assert response.status_code == 200
    body = response.json()
    assert body['token_type'] == 'bearer'
    assert body['access_token'].startswith('demo-token-for-')
