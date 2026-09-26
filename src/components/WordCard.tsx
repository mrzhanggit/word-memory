import { useEffect, useRef, useState } from 'react';
import { Play, Square, Volume2 } from 'lucide-react';
import { speak } from '../hooks/useProgress';
import { loadDictionary, lookup, type DictEntry } from '../lib/dictionary';

interface WordCardProps {
  /** 英文单词（小写） */
  word: string;
  /** 词族主题色 */
  color: string;
}

/**
 * 词典卡片：音标、释义、例句、真人原声。
 * 数据来自 public/dictionary.json（有道抓取裁剪），按需加载一次。
 */
export default function WordCard({ word, color }: WordCardProps) {
  const [entry, setEntry] = useState<DictEntry | undefined>(undefined);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState<string | null>(null);
  const origAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let alive = true;
    setReady(false);
    loadDictionary().then((d) => {
      if (!alive) return;
      setEntry(lookup(d, word));
      setReady(true);
    });
    return () => {
      alive = false;
    };
  }, [word]);

  // 切换单词或卸载时停止原声
  useEffect(
    () => () => {
      origAudio.current?.pause();
      origAudio.current = null;
    },
    [word],
  );

  const toggleOrig = (url: string, key: string) => {
    origAudio.current?.pause();
    if (playing === key) {
      setPlaying(null);
      return;
    }
    const audio = new Audio(url);
    origAudio.current = audio;
    setPlaying(key);
    audio.onended = () => setPlaying(null);
    audio.onerror = () => setPlaying(null);
    audio.play().catch(() => setPlaying(null));
  };

  if (!ready) {
    return (
      <div className="bg-white rounded-3xl ink-border hard-shadow p-5 text-sm text-[#2e2a26]/45">
        正在加载词典…
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="bg-white rounded-3xl ink-border hard-shadow p-5 text-sm text-[#2e2a26]/45">
        词典里暂时没有「{word}」这个词条。
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl ink-border hard-shadow p-5">
      {/* 音标：点击即读 */}
      {(entry.us || entry.uk) && (
        <div className="flex items-center gap-2 flex-wrap mb-3">
          {entry.us && (
            <button
              onClick={() => speak(word, 'us')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl ink-border hard-shadow-sm bg-[#fff8ef] hover:bg-[#fff2e0] transition-colors"
            >
              <span className="text-[10px] font-black tracking-widest text-[#2e2a26]/45">美</span>
              <span className="font-mono text-sm">/{entry.us}/</span>
              <Volume2 className="w-3.5 h-3.5 text-[#2e2a26]/40" />
            </button>
          )}
          {entry.uk && (
            <button
              onClick={() => speak(word, 'uk')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl ink-border hard-shadow-sm bg-white hover:bg-[#2e2a26]/4 transition-colors"
            >
              <span className="text-[10px] font-black tracking-widest text-[#2e2a26]/45">英</span>
              <span className="font-mono text-sm">/{entry.uk}/</span>
              <Volume2 className="w-3.5 h-3.5 text-[#2e2a26]/40" />
            </button>
          )}
        </div>
      )}

      {/* 学段标签 */}
      {entry.exam && entry.exam.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap mb-3">
          {entry.exam.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#2e2a26]/6 text-[#2e2a26]/55"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* 中文释义 */}
      {entry.cn && entry.cn.length > 0 && (
        <div className="space-y-1 mb-4">
          {entry.cn.map((line, i) => (
            <p key={i} className="text-sm font-bold text-[#2e2a26]/80 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      )}

      {/* 双语例句 */}
      {entry.ex && entry.ex.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] font-black tracking-widest text-[#2e2a26]/40 mb-2">例句</p>
          <div className="space-y-2.5">
            {entry.ex.slice(0, 2).map((s, i) => (
              <div key={i} className="flex gap-2.5">
                <button
                  onClick={() => speak(s.en)}
                  className="mt-0.5 w-6 h-6 shrink-0 rounded-full flex items-center justify-center hover:bg-black/5"
                  aria-label="朗读例句"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#2e2a26]/40" />
                </button>
                <div className="min-w-0">
                  <p className="text-sm leading-snug">{s.en}</p>
                  {s.zh && <p className="text-xs text-[#2e2a26]/50 mt-0.5">{s.zh}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 真人原声 */}
      {entry.orig && entry.orig.length > 0 && (
        <div>
          <p className="text-[10px] font-black tracking-widest text-[#2e2a26]/40 mb-2">真人原声</p>
          <div className="space-y-2">
            {entry.orig.slice(0, 2).map((s, i) => {
              const key = `${word}-orig-${i}`;
              const canPlay = !!s.audio;
              return (
                <div key={i} className="flex gap-2.5 rounded-2xl p-2.5 ink-border bg-[#fffdf6]">
                  {canPlay ? (
                    <button
                      onClick={() => toggleOrig(s.audio!, key)}
                      className="mt-0.5 w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: color }}
                      aria-label={playing === key ? '停止' : '播放原声'}
                    >
                      {playing === key ? <Square className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>
                  ) : (
                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-[#2e2a26]/6 flex items-center justify-center">
                      <Volume2 className="w-3 h-3 text-[#2e2a26]/30" />
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm leading-snug">{s.en}</p>
                    {s.zh && <p className="text-xs text-[#2e2a26]/50 mt-0.5">{s.zh}</p>}
                    {(s.src || s.dur) && (
                      <p className="text-[10px] font-bold text-[#2e2a26]/40 mt-1">
                        {s.src}
                        {s.src && s.dur ? ' · ' : ''}
                        {s.dur ? `${s.dur}s` : ''}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
