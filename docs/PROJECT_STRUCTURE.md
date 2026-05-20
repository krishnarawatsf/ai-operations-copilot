# Project Structure Guide

## Root
- `README.md`: GitHub-ready overview, setup, roadmap, and recruiter narrative.
- `.env.example`: Complete environment variable reference.
- `docker-compose.yml`: Local infrastructure for PostgreSQL, Redis, backend, and frontend.
- `package.json`: Root command shortcuts for local development.
- `requirements.txt`: Python dependency lock-in for backend and tests.

## `frontend/`
- `package.json`: React/Vite/Tailwind/Jest dependencies and scripts.
- `src/App.tsx`: Main product shell and dashboard composition.
- `src/components/`: Reusable UI primitives for product panels and stats.
- `src/lib/api.ts`: Frontend API boundary with mock fallback support.
- `src/mocks/`: Realistic sample API payloads for demos and tests.
- `src/tests/`: Jest setup and component tests.

## `backend/`
- `app/main.py`: FastAPI application entrypoint.
- `app/api/routes/`: Domain-based API endpoints.
- `app/api/routes/auth.py`: Demo auth endpoints and token issuance.
- `app/api/routes/webhooks.py`: Automation ingress boundary for n8n and external event sources.
- `app/core/`: Settings, logging, security, and dependency helpers.
- `app/core/providers.py`: AI provider abstraction with a mock implementation.
- `app/core/observability.py`: Request ID middleware for tracing.
- `app/services/`: AI, workflow, metrics, and notification logic.
- `app/schemas/`: Request and response contracts.
- `app/models/`: SQLAlchemy persistence models.
- `app/tests/`: API tests covering critical slices.

## `docs/`
- `architecture.md`: system boundaries and runtime responsibilities.
- `ai-workflows.md`: prompt strategy, validation, and retry design.
- `testing.md`: backend, frontend, and integration test strategy.
- `security.md`: auth, rate limiting, and secret handling guidance.
- `deployment.md`: production deployment notes for Vercel, Railway, and Render.

## `automation/`
- `workflows/`: n8n workflow blueprints for AI summarization, CRM writes, and reminders.
- `webhooks/`: Reserved for webhook payload examples and contracts.

## `database/`
- `schema/`: Canonical SQL schema.
- `migrations/`: Forward-only migration scripts.
- `seeds/`: Sample operational data for demos.

## `docs/`
- `diagrams/`: Mermaid architecture and AI workflow diagrams.
- `case-study/`: Recruiter-facing product story and interview talking points.

## `tests/`
- `integration/`: Cross-service test ideas and scenario specs.
- `contracts/`: Payload contract references for API and automation boundaries.
