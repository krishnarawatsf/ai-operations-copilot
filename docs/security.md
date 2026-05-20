# Security Considerations

## Authentication
- Use bearer-token auth at the API boundary.
- Replace the demo auth service with JWT or OAuth2 for production.
- Add role-based authorization for operational roles like admin, ops, and viewer.

## API protection
- Rate limit AI endpoints and webhook ingestion.
- Verify webhook signatures for Slack, n8n, and email providers.
- Reject malformed payloads before invoking AI providers.

## Secret handling
- Store API keys in environment variables and hosted secret managers.
- Keep `.env` local only and never commit production credentials.

## AI safety
- Validate structured responses before persistence.
- Log provider failures without leaking prompt contents or secrets.
- Escalate low-confidence outputs to human review.

## Auditability
- Record request IDs, workflow IDs, and event sources.
- Keep an immutable audit trail for CRM updates and notifications.
