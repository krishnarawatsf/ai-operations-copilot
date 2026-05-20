```mermaid
sequenceDiagram
  participant User
  participant API as FastAPI
  participant AI as AI Provider
  participant DB as PostgreSQL
  participant N8N as n8n

  User->>API: Submit meeting transcript
  API->>AI: Summarize + extract actions
  AI-->>API: Structured summary
  API->>DB: Save meeting and tasks
  API->>N8N: Trigger follow-up automation
  N8N-->>API: Confirmation / failure event
  API-->>User: Summary and next steps
```
