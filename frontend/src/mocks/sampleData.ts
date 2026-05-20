import type { DashboardOverview, MeetingSummary, WorkflowPlan, Recommendation } from '../types';

export const sampleDashboard: DashboardOverview = {
  metrics: [
    { label: 'Open tasks', value: '18', trend: '+3%' },
    { label: 'Automations shipped', value: '42', trend: '+8%' },
    { label: 'Avg. follow-up time', value: '3h 12m', trend: '-11%' },
    { label: 'Escalations resolved', value: '96%', trend: '+2%' },
  ],
  bottlenecks: [
    'CRM updates are lagging after sales meetings.',
    'Owner assignment is missing on lower-priority support escalations.',
  ],
  productivity_insights: [
    'Teams close action items faster when follow-up summaries are auto-drafted in minutes.',
    'Bottlenecks are most visible when workflow retries are tracked centrally.',
  ],
};

export const sampleMeetingSummary: MeetingSummary = {
  summary:
    'The team aligned on a product launch timeline, delegated owners for onboarding tasks, and flagged two risks around delayed CRM updates and stale follow-ups.',
  action_items: [
    { title: 'Publish launch checklist', owner: 'Product', deadline: 'Friday', priority: 'high' },
    { title: 'Update CRM records', owner: 'Sales Ops', deadline: 'Tomorrow', priority: 'medium' },
    { title: 'Schedule customer follow-up', owner: 'Growth', deadline: 'Monday', priority: 'high' },
  ],
  deadlines: ['Friday', 'Tomorrow', 'Monday'],
  owner_assignments: {
    'Publish launch checklist': 'Product',
    'Update CRM records': 'Sales Ops',
    'Schedule customer follow-up': 'Growth',
  },
  follow_up_summary: 'Send a concise recap with owners, deadlines, and escalation points within 30 minutes of the meeting.',
};

export const sampleWorkflowPlan: WorkflowPlan = {
  workflow_name: 'meeting-to-crm-automation',
  confidence: 0.89,
  steps: [
    { name: 'Capture transcript', action: 'ingest_meeting_artifact', owner: 'Platform', tool: 'API webhook' },
    { name: 'Extract actions', action: 'summarize_and_classify', owner: 'AI Service', tool: 'OpenAI/Claude' },
    { name: 'Create tasks', action: 'sync_to_task_manager', owner: 'Automation', tool: 'n8n' },
    { name: 'Update CRM', action: 'write_back_to_crm', owner: 'Revenue Ops', tool: 'CRM API' },
  ],
  triggers: ['meeting.completed', 'task.overdue', 'crm.lead_updated'],
  fallback_plan: 'Queue the event, retry with exponential backoff, and surface a manual review item when confidence drops below threshold.',
};

export const sampleRecommendations: Recommendation[] = [
  {
    title: 'Automate CRM updates after high-value meetings',
    rationale: 'Manual post-meeting CRM updates are repetitive and easy to miss.',
    impact: 'high',
    effort: 'medium',
    confidence: 0.93,
  },
  {
    title: 'Escalate overdue action items to Slack',
    rationale: 'Escalations keep operational work visible before deadlines slip.',
    impact: 'medium',
    effort: 'low',
    confidence: 0.9,
  },
  {
    title: 'Detect workflow loops in support handoffs',
    rationale: 'Repeated handoffs create delay and hidden coordination costs.',
    impact: 'high',
    effort: 'medium',
    confidence: 0.84,
  },
];
