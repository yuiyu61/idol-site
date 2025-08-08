-- 与对话中一致的建表脚本（可直接粘贴到 Supabase SQL Editor 执行）
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  source_url text not null,
  title text not null,
  start_at timestamptz not null,
  end_at timestamptz,
  venue text,
  address text,
  city text,
  groups text[],
  price_min int,
  price_max int,
  ticket_methods jsonb,
  rules jsonb,
  images text[],
  status text default 'scheduled',
  raw jsonb,
  zh jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content text,
  media jsonb,
  published_at timestamptz,
  is_pinned boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists albums (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  cover_url text,
  created_at timestamptz default now()
);

create table if not exists photos (
  id uuid primary key default gen_random_uuid(),
  album_id uuid references albums(id) on delete cascade,
  url text not null,
  caption text,
  exif jsonb,
  created_at timestamptz default now()
);

create index if not exists idx_events_start_at on events(start_at);
create index if not exists idx_events_city on events(city);
