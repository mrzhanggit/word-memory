-- 图像记忆单词 · 跨设备学习进度同步
-- 在 Supabase 控制台 → SQL Editor 中执行一次本脚本。
-- 前提：已在 Authentication → Providers 中开启 Email 登录。

-- 1) 进度表：每个用户一行，整体进度用 JSONB 存储（数据量很小）
create table if not exists public.user_progress (
  user_id    uuid        primary key references auth.users (id) on delete cascade,
  progress   jsonb       not null default '{}'::jsonb,
  stories    jsonb       not null default '{}'::jsonb,
  quiz_count integer     not null default 0,
  last_day   text        not null default '',
  updated_at timestamptz not null default now()
);

-- 2) 开启行级安全（RLS），这是关键：用户只能读写自己的那一行
alter table public.user_progress enable row level security;

drop policy if exists "own row read"  on public.user_progress;
drop policy if exists "own row insert" on public.user_progress;
drop policy if exists "own row update" on public.user_progress;

create policy "own row read"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "own row insert"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "own row update"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
