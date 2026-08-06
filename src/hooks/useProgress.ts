import { useCallback, useEffect, useRef, useState } from 'react';
import type { ProgressMap, WordProgress } from '../types';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

const KEY = 'image-vocab-progress-v1';
const STORY_KEY = 'image-vocab-stories-v1';

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

type CloudRow = {
  user_id: string;
  progress: ProgressMap;
  stories: Record<string, string>;
  quiz_count: number;
  last_day: string;
  updated_at: string;
};

function emptyWord(): WordProgress {
  return { seen: 0, correct: 0, wrong: 0, mastered: false };
}

// 逐单词合并：次数取较大值，掌握状态取“或”，最近复习时间取较新
function mergeWord(a: WordProgress | undefined, b: WordProgress | undefined): WordProgress {
  if (!a) return b ? { ...b } : emptyWord();
  if (!b) return { ...a };
  const lastReview =
    a.lastReview && b.lastReview
      ? a.lastReview > b.lastReview
        ? a.lastReview
        : b.lastReview
      : a.lastReview || b.lastReview;
  return {
    seen: Math.max(a.seen, b.seen),
    correct: Math.max(a.correct, b.correct),
    wrong: Math.max(a.wrong, b.wrong),
    mastered: a.mastered || b.mastered,
    lastReview,
  };
}

function mergeProgress(local: ProgressMap, cloud: ProgressMap): ProgressMap {
  const out: ProgressMap = { ...local };
  for (const w of Object.keys(cloud)) out[w] = mergeWord(out[w], cloud[w]);
  return out;
}

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressMap>(() => load(KEY, {}));
  const [stories, setStories] = useState<Record<string, string>>(() => load(STORY_KEY, {}));
  const [quizCount, setQuizCount] = useState<number>(() => load('image-vocab-quiz-count', 0));
  const [lastDay, setLastDay] = useState<string>(() => load('image-vocab-last-day', ''));
  const [syncing, setSyncing] = useState(false);

  // 最新值 ref，供登录合并 / 上传使用（避免闭包取到旧值）
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const storiesRef = useRef(stories);
  storiesRef.current = stories;
  const quizRef = useRef(quizCount);
  quizRef.current = quizCount;
  const dayRef = useRef(lastDay);
  dayRef.current = lastDay;
  const readyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // 1) 登录后：拉取云端进度并与本地双向合并（两端都不丢），再上传一次确保一致
  useEffect(() => {
    if (!supabase || !user) {
      readyRef.current = false;
      return;
    }
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();
      if (cancelled) return;
      if (data) {
        const cloud = data as CloudRow;
        const mergedProgress = mergeProgress(progressRef.current, cloud.progress ?? {});
        const mergedStories = { ...(cloud.stories ?? {}), ...storiesRef.current };
        const mergedQuiz = Math.max(quizRef.current, cloud.quiz_count ?? 0);
        const recency = [dayRef.current, cloud.last_day].filter(Boolean).sort();
        const mergedDay = recency[recency.length - 1] ?? '';
        setProgress(mergedProgress);
        setStories(mergedStories);
        setQuizCount(mergedQuiz);
        setLastDay(mergedDay);
      }
      readyRef.current = true;
      await supabase.from('user_progress').upsert({
        user_id: user.id,
        progress: progressRef.current,
        stories: storiesRef.current,
        quiz_count: quizRef.current,
        last_day: dayRef.current,
        updated_at: new Date().toISOString(),
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  // 2) 进度变更：登录且合并完成后，防抖 1.5s 上传到云端
  useEffect(() => {
    const sb = supabase;
    if (!sb || !user || !readyRef.current) return;
    setSyncing(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      const { error } = await sb.from('user_progress').upsert({
        user_id: user.id,
        progress: progressRef.current,
        stories: storiesRef.current,
        quiz_count: quizRef.current,
        last_day: dayRef.current,
        updated_at: new Date().toISOString(),
      });
      setSyncing(false);
      if (error) console.error('进度同步失败', error);
    }, 1500);
    return () => clearTimeout(timerRef.current);
  }, [progress, stories, quizCount, lastDay, user]);

  // 本地持久化（未登录也照常，作为离线缓存）
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(progress));
  }, [progress]);
  useEffect(() => {
    localStorage.setItem(STORY_KEY, JSON.stringify(stories));
  }, [stories]);

  const touchDay = useCallback(() => {
    const today = new Date().toISOString().slice(0, 10);
    if (today !== lastDay) {
      setLastDay(today);
      localStorage.setItem('image-vocab-last-day', today);
    }
  }, [lastDay]);

  const markSeen = useCallback(
    (word: string) => {
      touchDay();
      setProgress((p) => {
        const cur: WordProgress = p[word] ?? emptyWord();
        return { ...p, [word]: { ...cur, seen: cur.seen + 1, lastReview: new Date().toISOString() } };
      });
    },
    [touchDay],
  );

  const markResult = useCallback(
    (word: string, ok: boolean) => {
      touchDay();
      setProgress((p) => {
        const cur: WordProgress = p[word] ?? emptyWord();
        const correct = cur.correct + (ok ? 1 : 0);
        const wrong = cur.wrong + (ok ? 0 : 1);
        return {
          ...p,
          [word]: {
            ...cur,
            correct,
            wrong,
            mastered: correct >= 2 && correct > wrong * 2,
            lastReview: new Date().toISOString(),
          },
        };
      });
    },
    [touchDay],
  );

  const addQuiz = useCallback(() => {
    touchDay();
    setQuizCount((c) => {
      const n = c + 1;
      localStorage.setItem('image-vocab-quiz-count', String(n));
      return n;
    });
  }, [touchDay]);

  const saveStory = useCallback((familyId: string, text: string) => {
    setStories((s) => ({ ...s, [familyId]: text }));
  }, []);

  const masteredCount = Object.values(progress).filter((w) => w.mastered).length;
  const seenCount = Object.keys(progress).length;

  return {
    progress,
    stories,
    quizCount,
    lastDay,
    syncing,
    markSeen,
    markResult,
    addQuiz,
    saveStory,
    masteredCount,
    seenCount,
  };
}

// 发音：Web Speech API
export function speak(text: string) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch {
    /* 环境不支持时静默 */
  }
}
