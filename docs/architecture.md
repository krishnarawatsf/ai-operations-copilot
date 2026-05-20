# Architecture Overview

AI Operations Copilot is organized as a modular monorepo with a strict boundary between presentation, API, automation, and persistence concerns.

## Backend
FastAPI exposes domain routes for meetings, workflows, dashboard metrics, recommendations, and notifications. The backend is split into:
- `api/` for transport concerns
- `schemas/` for typed contracts
- `services/` for business logic and AI orchestration
- `models/` and `db/` for persistence
- `core/` for settings, logging, and security

## Frontend
The frontend is a React + TypeScript + Tailwind dashboard with reusable product UI primitives. It consumes a dedicated API client so the backend can evolve independently.

## AI Layer
The AI service is provider-aware and can swap between OpenAI and Claude without changing route contracts. The implementation expects:
- summarization
- action extraction
- classification
- workflow generation
- recommendation generation

## Automation
n8n sits beside the API rather than inside it. The backend emits clean event payloads that can be consumed by webhooks or message brokers.

## Persistence
PostgreSQL stores meetings, workflows, tasks, recommendations, and notifications. The schema is structured for auditing and product analytics rather than just CRUD.

## Operational Discipline
- Logging is centralized through structured JSON logs.
- API authentication is prepared through bearer-token dependencies.
- Failure handling uses retries and fallback plans in the AI/workflow layers.
- The frontend can run against mock APIs for demos or against the live backend for integration.
