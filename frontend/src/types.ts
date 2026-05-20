export type DashboardMetric = {
  label: string;
  value: string;
  trend?: string;
};

export type DashboardOverview = {
  metrics: DashboardMetric[];
  bottlenecks: string[];
  productivity_insights: string[];
};

export type MeetingSummary = {
  summary: string;
  action_items: { title: string; owner: string; deadline?: string | null; priority: string }[];
  deadlines: string[];
  owner_assignments: Record<string, string>;
  follow_up_summary: string;
};

export type WorkflowStep = {
  name: string;
  action: string;
  owner?: string | null;
  tool?: string | null;
};

export type WorkflowPlan = {
  workflow_name: string;
  confidence: number;
  steps: WorkflowStep[];
  triggers: string[];
  fallback_plan: string;
};

export type Recommendation = {
  title: string;
  rationale: string;
  impact: string;
  effort: string;
  confidence: number;
};
