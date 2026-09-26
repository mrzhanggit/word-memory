import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, PartyPopper, Play, Sprout } from 'lucide-react';
import { families, totalWordCount } from '../data/families';
import { useProgressCtx } from '../hooks/progressContext';
import SceneImage from '../components/SceneImage';

type FilterKey = 'all' | 'todo' | 'done';

export default function Families() {
  const { progress, masteredCount } = useProgressCtx();
  const [filter, setFilter] = useState<FilterKey>('all');

  // 为每个词族计算完成状态
  const withStatus = useMemo(
    () =>
      families.map((f) => {
        const mastered = f.words.filter((w) => progress[w.word]?.mastered).length;
        const started = f.words.some((w) => progress[w.word]);
        const done = f.words.length > 0 && mastered === f.words.length;
        return { family: f, mastered, done, started };
      }),
    [progress],
  );

  const doneCount = withStatus.filter((x) => x.done).length;
  const nextFamily = withStatus.find((x) => !x.done)?.family;
  const allDone = doneCount === families.length;
  const overallPct = totalWordCount ? Math.round((masteredCount / totalWordCount) * 100) : 0;

  // 未完成排在前（保持原序），已完成沉底；按筛选展示
  const list = useMemo(() => {
    const sorted = [...withStatus].sort((a, b) => Number(a.done) - Number(b.done));
    if (filter === 'todo') return sorted.filter((x) => !x.done);
    if (filter === 'done') return sorted.filter((x) => x.done);
    return sorted;
  }, [withStatus, filter]);

  const tabs: { key: FilterKey; label: string; count: number }[] = [
    { key: 'all', label: '全部', count: families.length },
    { key: 'todo', label: '未完成', count: families.length - doneCount },
    { key: 'done', label: '已完成', count: doneCount },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">词族广场</h1>
        <p className="text-[#2e2a26]/60">
          每条 X 轴是共同部分，再配上不同的附加字母，组合成一串单词。选一族，先看戏，再拆词。
        </p>
      </div>

      {/* 继续学习横幅 */}
      {allDone ? (
        <div className="flex items-center gap-4 bg-white rounded-3xl ink-border hard-shadow p-5 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#2f6f5e] text-white flex items-center justify-center ink-border shrink-0">
            <PartyPopper className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="font-black text-lg leading-tight">太棒了，全部词族都学完啦！</p>
            <p className="text-sm text-[#2e2a26]/55 mt-0.5">
              已掌握 {masteredCount}/{totalWordCount} 个单词，去测一测巩固一下吧。
            </p>
          </div>
          <Link
            to="/quiz"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2f6f5e] text-white text-sm font-bold ink-border hard-shadow-sm hard-shadow-none-hover transition-all"
          >
            去测试 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        nextFamily && (
          <Link
            to={`/family/${nextFamily.id}`}
            className="block bg-white rounded-3xl ink-border hard-shadow p-5 mb-8 hover:-translate-y-1 transition-transform group"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <div
                className="w-12 h-12 rounded-2xl text-white flex items-center justify-center ink-border shrink-0"
                style={{ backgroundColor: nextFamily.color }}
              >
                <Play className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1 min-w-[220px]">
                <p className="text-[11px] font-black tracking-widest text-[#2e2a26]/50 mb-0.5">
                  继续学习 · 全局已掌握 {masteredCount}/{totalWordCount} 词 · {families.length - doneCount} 族待学
                </p>
                <p className="font-black text-lg leading-tight group-hover:underline">
                  下一站：{nextFamily.title}
                  <span className="ml-2 text-sm font-bold text-[#2e2a26]/45">第 {withStatus.findIndex((x) => x.family.id === nextFamily.id) + 1} 个词族</span>
                </p>
                <div className="mt-2.5 h-2 rounded-full bg-[#2e2a26]/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${overallPct}%`, backgroundColor: nextFamily.color }}
                  />
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#2e2a26]/35 shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        )
      )}

      {/* 筛选 Tab */}
      <div className="flex gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setFilter(t.key)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all ${
              filter === t.key
                ? 'bg-[#2e2a26] text-white ink-border'
                : 'bg-white text-[#2e2a26]/65 ink-border hover:bg-[#2e2a26]/5'
            }`}
          >
            {t.label}
            <span
              className={`text-[11px] px-1.5 py-0.5 rounded-full font-black ${
                filter === t.key ? 'bg-white/20 text-white' : 'bg-[#2e2a26]/8 text-[#2e2a26]/55'
              }`}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>

      {/* 卡片网格 */}
      {list.length === 0 ? (
        <div className="bg-white rounded-3xl ink-border hard-shadow p-12 text-center">
          <Sprout className="w-10 h-10 mx-auto text-[#2e2a26]/25 mb-3" />
          <p className="font-black text-lg text-[#2e2a26]/70">这里空空如也</p>
          <p className="text-sm text-[#2e2a26]/50 mt-1">
            {filter === 'todo' ? '所有词族都已经学完，太棒了！' : '还没有已完成的词族，去开个头吧。'}
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map(({ family: f, mastered, done, started }) => {
            const pct = Math.round((mastered / f.words.length) * 100);
            return (
              <Link
                key={f.id}
                to={`/family/${f.id}`}
                className={`group bg-white rounded-3xl ink-border hard-shadow overflow-hidden hover:-translate-y-1.5 transition-transform ${
                  done ? 'opacity-75 saturate-[0.85]' : ''
                }`}
              >
                <div className="aspect-[3/2] overflow-hidden border-b-2 border-[#2e2a26] relative">
                  <SceneImage src={f.scene} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 text-[11px] font-black tracking-widest px-2.5 py-1 rounded-full text-white ink-border" style={{ backgroundColor: f.color }}>
                    {f.rimePosition === 'start' ? `${f.rime}-` : f.rimePosition === 'mixed' ? f.rime : `-${f.rime}`} 家族
                  </span>
                  {done ? (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-full bg-[#2f6f5e] text-white ink-border">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 已学完
                    </span>
                  ) : started ? (
                    <span className="absolute top-3 right-3 text-[11px] font-black px-2.5 py-1 rounded-full bg-[#d9a441] text-white ink-border">
                      学习中
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 text-[11px] font-black px-2.5 py-1 rounded-full bg-[#2e2a26]/70 text-white ink-border">
                      未学习
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-black text-lg leading-snug">{f.title}</h3>
                  <p className="text-sm text-[#2e2a26]/55 mt-0.5 mb-3">{f.subtitle}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2.5 rounded-full bg-[#2e2a26]/10 overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: f.color }} />
                    </div>
                    <span className="text-xs font-bold text-[#2e2a26]/60">
                      {mastered}/{f.words.length}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {f.words.slice(0, 5).map((w) => (
                      <span key={w.word} className="text-[11px] px-1.5 py-0.5 rounded bg-[#2e2a26]/6 font-mono font-bold text-[#2e2a26]/70">
                        {w.display}
                      </span>
                    ))}
                    {f.words.length > 5 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#2e2a26]/6 font-bold text-[#2e2a26]/50">
                        +{f.words.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
