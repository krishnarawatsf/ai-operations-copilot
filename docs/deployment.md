# Deployment Guide

## Frontend
Deploy the React app to Vercel.
- Set `VITE_API_BASE_URL` to the backend URL.
- Build from `frontend/`.

## Backend
Deploy FastAPI to Railway or Render.
- Set `DATABASE_URL`, `SECRET_KEY`, and AI provider keys.
- Run migrations before serving traffic.
- Expose the app on port `8000`.

## Database
Use managed PostgreSQL.
- Keep schema migrations in `database/migrations/`.
- Run the seed script only in development or demo environments.

## Automation
Host n8n separately and point webhooks to the backend routes.
- Protect webhook endpoints with a shared secret.
- Monitor workflow retries and failed executions.

## Production checklist
- HTTPS enabled
- Secrets configured
- CORS restricted to approved origins
- Rate limits enabled
- Structured logs sent to a central collector
- Error alerts wired to Slack or email
