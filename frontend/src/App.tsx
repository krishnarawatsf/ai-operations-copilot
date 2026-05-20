import { useEffect, useState } from 'react';
import { Shell } from './components/Shell';
import { StatCard } from './components/StatCard';
import { Panel } from './components/Panel';
import { SectionList } from './components/SectionList';
import { Tag } from './components/Tag';
import { api } from './lib/api';
import { getRuntimeConfig } from './lib/runtimeConfig';
import type { DashboardOverview, MeetingSummary, Recommendation, WorkflowPlan } from './types';

const appName = getRuntimeConfig().appName ?? 'AI Operations Copilot';

function App() {
  const [dashboard, setDashboard] = useState<DashboardOverview | null>(null);
  const [meetingSummary, setMeetingSummary] = useState<MeetingSummary | null>(null);
  const [workflowPlan, setWorkflowPlan] = useState<WorkflowPlan | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      const [dashboardData, meetingData, workflowData, recommendationData] = await Promise.all([
        api.fetchDashboardOverview(),
        api.summarizeMeeting(),
        api.generateWorkflow(),
        api.getRecommendations(),
      ]);

      if (!mounted) {
        return;
      }

      setDashboard(dashboardData);
      setMeetingSummary(meetingData);
      setWorkflowPlan(workflowData);
      setRecommendations(recommendationData);
    }

    void loadData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Tag>Operational Intelligence</Tag>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{appName}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              An AI-native operations layer for startups that turns meetings, workflows, and coordination into structured execution.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">FastAPI backend</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">React + Tailwind frontend</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">AI orchestration via OpenAI or Claude</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">n8n automation-ready</div>
          </div>
        </div>
      </div>

      <Shell title="Startup-grade operations cockpit" eyebrow="AI command center">
        <div className="grid gap-5 xl:grid-cols-4">
          {dashboard?.metrics.map((metric) => (
            <StatCard key={metric.label} label={metric.label} value={metric.value} trend={metric.trend} />
          )) ?? null}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Panel title="Meeting Intelligence" description="Summaries, action items, deadlines, and owner assignments.">
            {meetingSummary ? (
              <div className="space-y-5">
                <p className="text-sm leading-6 text-slate-300">{meetingSummary.summary}</p>
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Action Items</h3>
                  <div className="space-y-3">
                    {meetingSummary.action_items.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="font-medium text-white">{item.title}</span>
                          <span className="rounded-full bg-aurora-400/15 px-3 py-1 text-xs font-semibold text-aurora-300">{item.priority}</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-400">
                          Owner: {item.owner} {item.deadline ? `• Deadline: ${item.deadline}` : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-400">{meetingSummary.follow_up_summary}</p>
              </div>
            ) : null}
          </Panel>

          <Panel title="Workflow Automation" description="Dynamic workflow generation with retry-aware automation design.">
            {workflowPlan ? (
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {workflowPlan.triggers.map((trigger) => (
                    <Tag key={trigger}>{trigger}</Tag>
                  ))}
                </div>
                <div className="space-y-3">
                  {workflowPlan.steps.map((step, index) => (
                    <div key={step.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-white">
                          {index + 1}. {step.name}
                        </span>
                        <span className="text-xs text-slate-400">{step.tool}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">{step.action}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-400">Fallback plan: {workflowPlan.fallback_plan}</p>
              </div>
            ) : null}
          </Panel>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Panel title="Operational Bottlenecks" description="Signals that reveal friction and coordination debt.">
            <SectionList items={dashboard?.bottlenecks ?? []} />
          </Panel>
          <Panel title="Productivity Insights" description="AI-generated observations for operational leverage.">
            <SectionList items={dashboard?.productivity_insights ?? []} />
          </Panel>
          <Panel title="AI Recommendations" description="Suggested automation opportunities ranked by product impact.">
            <div className="space-y-3">
              {recommendations.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.rationale}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="rounded-full bg-electric-400/10 px-3 py-1">Impact: {item.impact}</span>
                    <span className="rounded-full bg-electric-400/10 px-3 py-1">Effort: {item.effort}</span>
                    <span className="rounded-full bg-electric-400/10 px-3 py-1">Confidence: {Math.round(item.confidence * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </Shell>
    </main>
  );
}

export default App;
