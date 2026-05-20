insert into meetings (title, transcript, summary)
values
  ('Launch planning sync', 'We need to finalize the launch checklist, assign CRM updates, and confirm follow-up owners.', 'Launch checklist finalized with CRM updates and follow-up ownership assigned.'),
  ('Weekly ops review', 'Support queue is rising and the team needs an escalation policy for overdue tickets.', 'Escalation policy drafted for overdue support tickets.');

insert into workflows (name, source, payload)
values
  ('meeting-to-crm-automation', 'meeting_summary', '{"trigger":"meeting.completed","actions":["summarize","task-create","crm-update"]}');
