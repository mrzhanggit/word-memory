import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ArrowRight, Check, Quote, RotateCcw, Swords, Volume2, X } from 'lucide-react';
import { families } from '../data/families';
import { speak } from '../hooks/useProgress';
import { useProgressCtx } from '../hooks/progressContext';
import SceneImage from '../components/SceneImage';

type Step = 'scene' | 'cards' | 'done';

export default function Study() {
  const [params] = useSearchParams();
  const [familyId, setFamilyId] = useState<string>(params.get('family') ?? families[0].id);
  const family = useMemo(() => families.find((f) => f.id === familyId) ?? families[0], [familyId]);
  const [step, setStep] = useState<Step>('scene');
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const { markResult, progress } = useProgressCtx();

  useEffect(() => {
    setStep('scene');
    setIdx(0);
    setFlipped(false);
    setResults({});
  }, [familyId]);

  const word = family.words[idx];

  const answer = (ok: boolean) => {
    markResult(word.word, ok);
    setResults((r) => ({ ...r, [word.word]: ok }));
    if (idx + 1 < family.words.length) {
      setIdx(idx + 1);
      setFlipped(false);
    } else {
      setStep('done');
    }
  };

  const correctCount = Object.values(results).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 词族选择 */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
        {families.map((f) => (
          <button
            key={f.id}
            onClick={() => setFamilyId(f.id)}
            className={`shrink-0 px-4 py-2 rounded-xl text-sm font-bold ink-border transition-all ${
              f.id === familyId ? 'text-white hard-shadow-sm' : 'bg-white text-[#2e2a26]/60 hover:text-[#2e2a26]'
            }`}
            style={f.id === familyId ? { backgroundColor: f.color } : undefined}
          >
            {f.rimePosition === 'start' ? `${f.rime}-` : f.rimePosition === 'mixed' ? f.rime : `-${f.rime}`} 家族
          </button>
        ))}
      </div>

      {step === 'scene' && (
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl overflow-hidden ink-border hard-shadow">
            <SceneImage src={family.scene} alt={family.title} className="w-full h-auto block" />
          </div>
          <div>
            <span className="inline-block text-xs font-black tracking-widest px-3 py-1 rounded-full text-white ink-border mb-3" style={{ backgroundColor: family.color }}>
              第一步 · 把画面装进脑子
            </span>
            <h1 className="text-2xl font-black mb-3">{family.title}</h1>
            <div className="bg-white rounded-2xl ink-border hard-shadow-sm p-5 mb-5">
              <p className="story-font text-lg leading-loose">
                {family.story.map((seg, i) =>
                  seg.word ? (
                    <span key={i} className="px-1 mx-0.5 rounded font-bold" style={{ backgroundColor: `${family.color}22`, color: family.color }}>
                      {seg.text}
                    </span>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )}
              </p>
            </div>
            <p className="text-sm text-[#2e2a26]/60 mb-5 flex items-start gap-2">
              <Quote className="w-4 h-4 mt-0.5 shrink-0" style={{ color: family.color }} />
              {family.scene
                ? '盯着插画看 10 秒，在脑中把这个荒谬画面演一遍——然后我们就开始「看中文背英文」。'
                : '这组插画还没有导入；先根据故事在脑中演一遍荒谬画面，然后开始「看中文背英文」。'}
            </p>
            <button
              onClick={() => setStep('cards')}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
              style={{ backgroundColor: family.color }}
            >
              我记住画面了，开始翻卡 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 'cards' && word && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-[#2e2a26]/60">
              第 {idx + 1} / {family.words.length} 张
            </span>
            <div className="flex-1 mx-4 h-2 rounded-full bg-[#2e2a26]/10 overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${(idx / family.words.length) * 100}%`, backgroundColor: family.color }} />
            </div>
            <button onClick={() => setStep('scene')} className="text-xs font-bold text-[#2e2a26]/50 hover:text-[#2e2a26]">
              重看画面
            </button>
          </div>

          {/* 翻转卡 */}
          <div className="flip-card max-w-xl mx-auto cursor-pointer select-none" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-inner aspect-[4/3] ${flipped ? 'flipped' : ''}`}>
              {/* 正面：中文 */}
              <div className="flip-face bg-white rounded-3xl ink-border hard-shadow flex flex-col items-center justify-center p-8">
                <span className="text-xs font-black tracking-widest text-[#2e2a26]/40 mb-4">看中文 · 回忆英文</span>
                <p className="text-4xl font-black mb-3">{word.cn}</p>
                <p className="text-sm text-[#2e2a26]/50 mb-6">
                  它在「{family.title}」里出现过 · 共同部分是 <span className="font-mono font-black">{family.rime}</span>
                </p>
                <span className="text-xs px-3 py-1.5 rounded-full bg-[#2e2a26]/6 font-bold text-[#2e2a26]/60">点卡片翻面</span>
              </div>
              {/* 背面：英文 */}
              <div className="flip-face flip-back rounded-3xl ink-border hard-shadow flex flex-col items-center justify-center p-8 text-white" style={{ backgroundColor: family.color }}>
                <p className="font-mono font-black text-5xl tracking-wide mb-2">{word.display}</p>
                <p className="text-white/80 font-bold mb-1">{word.cn}</p>
                {word.note && <p className="text-white/70 text-sm mb-4">{word.note}</p>}
                <button
                  onClick={(e) => { e.stopPropagation(); speak(word.word); }}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 font-bold text-sm"
                >
                  <Volume2 className="w-4 h-4" /> 发音
                </button>
              </div>
            </div>
          </div>

          {/* 作答 */}
          <div className="max-w-xl mx-auto grid grid-cols-2 gap-3 mt-6">
            <button
              onClick={() => answer(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all text-[#c2432f]"
            >
              <X className="w-5 h-5" /> 没想起
            </button>
            <button
              onClick={() => answer(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-[#2f6f5e] text-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
            >
              <Check className="w-5 h-5" /> 想起来了
            </button>
          </div>
          <p className="text-center text-xs text-[#2e2a26]/45 mt-3">先翻面自测，再诚实作答——书里说诚实回忆才记得牢</p>
        </div>
      )}

      {step === 'done' && (
        <div className="max-w-xl mx-auto text-center bg-white rounded-3xl ink-border hard-shadow p-8">
          <div className="text-5xl mb-3">{correctCount === family.words.length ? '🎉' : '💪'}</div>
          <h2 className="text-2xl font-black mb-2">本族翻卡完成</h2>
          <p className="text-[#2e2a26]/60 mb-5">
            {family.words.length} 张卡，一次想起 {correctCount} 张
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {family.words.map((w) => (
              <span
                key={w.word}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-black ink-border ${
                  results[w.word] ? 'bg-[#2f6f5e]/15 text-[#2f6f5e]' : 'bg-[#c2432f]/10 text-[#c2432f]'
                }`}
              >
                {w.display}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => { setStep('scene'); setIdx(0); setFlipped(false); setResults({}); }}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
            >
              <RotateCcw className="w-4 h-4" /> 再来一遍
            </button>
            <Link
              to={`/quiz?family=${family.id}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
              style={{ backgroundColor: family.color }}
            >
              <Swords className="w-4 h-4" /> 去测验
            </Link>
          </div>
          <p className="mt-4 text-xs text-[#2e2a26]/45">
            已掌握 {family.words.filter((w) => progress[w.word]?.mastered).length}/{family.words.length} · 想不起的词明天再翻一次
          </p>
        </div>
      )}
    </div>
  );
}
