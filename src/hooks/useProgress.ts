import { useCallback, useEffect, useState } from 'react';
import type { ProgressMap, WordProgress } from '../types';

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

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(() => load(KEY, {}));
  const [stories, setStories] = useState<Record<string, string>>(() => load(STORY_KEY, {}));
  const [quizCount, setQuizCount] = useState<number>(() => load('image-vocab-quiz-count', 0));
  const [lastDay, setLastDay] = useState<string>(() => load('image-vocab-last-day', ''));

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

  const markSeen = useCallback((word: string) => {
    touchDay();
    setProgress((p) => {
      const cur: WordProgress = p[word] ?? { seen: 0, correct: 0, wrong: 0, mastered: false };
      return { ...p, [word]: { ...cur, seen: cur.seen + 1, lastReview: new Date().toISOString() } };
    });
  }, [touchDay]);

  const markResult = useCallback((word: string, ok: boolean) => {
    touchDay();
    setProgress((p) => {
      const cur: WordProgress = p[word] ?? { seen: 0, correct: 0, wrong: 0, mastered: false };
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
  }, [touchDay]);

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

  return { progress, stories, quizCount, lastDay, markSeen, markResult, addQuiz, saveStory, masteredCount, seenCount };
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
