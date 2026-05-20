create table if not exists meetings (
  id bigserial primary key,
  title varchar(255) not null,
  transcript text not null,
  summary text,
  created_at timestamptz default now()
);

create table if not exists workflows (
  id bigserial primary key,
  name varchar(255) not null,
  source varchar(100) not null,
  payload jsonb not null,
  created_at timestamptz default now()
);

create table if not exists tasks (
  id bigserial primary key,
  title varchar(255) not null,
  owner varchar(120) not null,
  status varchar(50) not null default 'open',
  priority varchar(20) not null default 'medium',
  due_date date,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists recommendations (
  id bigserial primary key,
  title varchar(255) not null,
  rationale text not null,
  impact varchar(20) not null,
  effort varchar(20) not null,
  confidence numeric(4,2) not null,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id bigserial primary key,
  channel varchar(50) not null,
  recipient varchar(255) not null,
  message text not null,
  severity varchar(20) not null default 'info',
  status varchar(50) not null default 'queued',
  created_at timestamptz default now()
);
