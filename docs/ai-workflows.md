# AI Workflow Design

## 1. Summarization
Input: meeting transcript, attendees, metadata.
Output: concise summary, action items, deadlines, owners, follow-up summary.

Prompt strategy:
- Use a fixed output schema.
- Ask for explicit owners and dates.
- Reject unsupported claims by instructing the model to use only transcript-grounded statements.

Mitigation:
- Force structured JSON output.
- Validate against Pydantic schemas.
- Retry with a stricter prompt if fields are missing.

## 2. Task Extraction
Input: summaries, CRM notes, support notes.
Output: normalized tasks with priority and owner.

Strategy:
- Extract only actionable items.
- Separate decision statements from to-dos.
- Deduplicate repeated tasks before persistence.

## 3. Classification
Input: event payloads or operational events.
Output: workflow category, urgency, routing target.

Strategy:
- Use low-temperature classification prompts.
- Keep a small label set.
- Map model output to allowed enums.

## 4. Prioritization
Input: tasks and workflow events.
Output: ranked items with rationale.

Strategy:
- Weight deadlines, owner load, and customer impact.
- Store scores for explainability.

## 5. Recommendation Generation
Input: metrics, workflow history, bottleneck signals.
Output: automation opportunities and expected operational impact.

Strategy:
- Combine heuristics with LLM reasoning.
- Highlight confidence and effort.
- Escalate uncertain outputs to human review.

## Hallucination Controls
- Ground every prompt on concrete input data.
- Validate field types and required keys.
- Reject outputs that mention unknown owners, dates, or systems.
- Use deterministic fallback summaries when the model fails.

## Token Optimization
- Pre-summarize long transcripts.
- Chunk large inputs by meeting section or topic.
- Cache repeated derived summaries.
- Send only the minimal context required for each downstream task.
