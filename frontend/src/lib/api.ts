import type { DashboardOverview, MeetingSummary, Recommendation, WorkflowPlan } from '../types';
import { sampleDashboard, sampleMeetingSummary, sampleRecommendations, sampleWorkflowPlan } from '../mocks/sampleData';
import { getRuntimeConfig } from './runtimeConfig';

const runtimeConfig = getRuntimeConfig();
const apiBaseUrl = runtimeConfig.apiBaseUrl ?? 'http://localhost:8000';
const useMocks = runtimeConfig.useMocks ?? true;

async function requestJson<T>(path: string, fallback: T, init?: RequestInit): Promise<T> {
  if (useMocks) {
    return fallback;
  }

  try {
    const response = await fetch(`${apiBaseUrl}${path}`, init);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export const api = {
  fetchDashboardOverview: async (): Promise<DashboardOverview> => requestJson('/api/v1/dashboard/overview', sampleDashboard),
  summarizeMeeting: async (): Promise<MeetingSummary> =>
    requestJson('/api/v1/meetings/summarize', sampleMeetingSummary, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transcript: 'The team agreed to finalize the launch checklist and assign CRM updates after the meeting.',
        attendees: ['Ava', 'Mia'],
      }),
    }),
  generateWorkflow: async (): Promise<WorkflowPlan> =>
    requestJson('/api/v1/workflows/generate', sampleWorkflowPlan, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source: 'meeting_summary',
        context: {},
        objective: 'turn meeting notes into tasks',
      }),
    }),
  getRecommendations: async (): Promise<Recommendation[]> => requestJson('/api/v1/recommendations', sampleRecommendations),
};
