import { Link } from 'react-router';
import { families } from '../data/families';
import { useProgressCtx } from '../hooks/progressContext';
import SceneImage from '../components/SceneImage';

export default function Families() {
  const { progress } = useProgressCtx();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">词族广场</h1>
        <p className="text-[#2e2a26]/60">
          每条 X 轴是共同部分，再配上不同的附加字母，组合成一串单词。选一族，先看戏，再拆词。
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {families.map((f) => {
          const mastered = f.words.filter((w) => progress[w.word]?.mastered).length;
          const pct = Math.round((mastered / f.words.length) * 100);
          return (
            <Link
              key={f.id}
              to={`/family/${f.id}`}
              className="group bg-white rounded-3xl ink-border hard-shadow overflow-hidden hover:-translate-y-1.5 transition-transform"
            >
              <div className="aspect-[3/2] overflow-hidden border-b-2 border-[#2e2a26] relative">
                <SceneImage src={f.scene} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-3 left-3 text-[11px] font-black tracking-widest px-2.5 py-1 rounded-full text-white ink-border" style={{ backgroundColor: f.color }}>
                  {f.rimePosition === 'start' ? `${f.rime}-` : f.rimePosition === 'mixed' ? f.rime : `-${f.rime}`} 家族
                </span>
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
    </div>
  );
}
