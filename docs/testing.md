# Testing Strategy

## Backend tests
Use Pytest for:
- health checks
- meeting summarization
- workflow generation
- malformed payloads
- timeout and fallback behavior
- AI response validation

## Frontend tests
Use Jest and Testing Library for:
- app shell rendering
- dashboard metrics display
- data-loading fallback
- empty state handling

## Integration tests
Use scenario-driven tests for:
- meeting event -> summary -> task creation
- CRM update -> notification escalation
- recommendations -> dashboard surfacing

## Failure cases to cover
- malformed transcript input
- missing meeting owner data
- provider timeout
- API rate limiting
- Slack/email delivery failure
- workflow retry exhaustion

## Recommended coverage targets
- critical routes: 90%+
- service layer: 80%+
- frontend product shell: high-confidence smoke coverage
