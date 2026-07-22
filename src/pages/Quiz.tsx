import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Check, Keyboard, ListChecks, Quote, RotateCcw, Swords, Volume2, X } from 'lucide-react';
import { allWords, families } from '../data/families';
import { speak } from '../hooks/useProgress';
import { useProgressCtx } from '../hooks/progressContext';

type Mode = 'choice' | 'spell' | 'story';
type Q = {
  prompt: string;      // 题干（中文 / 故事句）
  hint?: string;
  answer: string;      // 正确单词
  options?: string[];  // 选择模式
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestions(mode: Mode, familyId: string): Q[] {
  const pool = familyId === 'all' ? allWords : allWords.filter((w) => w.familyId === familyId);
  if (mode === 'story') {
    // 故事填空：选一个具体词族，把剧情词挖空
    const fam = families.find((f) => f.id === (familyId === 'all' ? families[Math.floor(Math.random() * families.length)].id : familyId))!;
    return fam.story
      .filter((s) => s.word)
      .map((s) => ({
        prompt: `「${fam.title}」：${s.text} 对应的英文是？`,
        hint: `共同部分 ${fam.rime}`,
        answer: s.word!,
        options: shuffle([s.word!, ...shuffle(fam.words.map((w) => w.word).filter((w) => w !== s.word)).slice(0, 3)]),
      }));
  }
  const picked = shuffle(pool).slice(0, Math.min(10, pool.length));
  if (mode === 'choice') {
    return picked.map((w) => {
      // 干扰项去重（不同词族可能含相同单词）
      const seen = new Set<string>([w.word]);
      const siblings: string[] = [];
      for (const x of shuffle(pool)) {
        if (!seen.has(x.word)) {
          seen.add(x.word);
          siblings.push(x.word);
        }
        if (siblings.length === 3) break;
      }
      return { prompt: w.cn, hint: `来自 -${w.rime} 家族`, answer: w.word, options: shuffle([w.word, ...siblings]) };
    });
  }
  // spell
  return picked.map((w) => ({ prompt: w.cn, hint: `共同部分 ${w.rime} · 共 ${w.word.length} 个字母`, answer: w.word }));
}

export default function Quiz() {
  const [params] = useSearchParams();
  const [mode, setMode] = useState<Mode>('choice');
  const [familyId, setFamilyId] = useState<string>(params.get('family') ?? 'all');
  const [qs, setQs] = useState<Q[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [typed, setTyped] = useState('');
  const [score, setScore] = useState(0);
  const [wrongWords, setWrongWords] = useState<string[]>([]);
  const { markResult, addQuiz } = useProgressCtx();

  const start = () => {
    setQs(buildQuestions(mode, familyId));
    setIdx(0);
    setPicked(null);
    setTyped('');
    setScore(0);
    setWrongWords([]);
    addQuiz();
  };

  const q = qs?.[idx];

  const judge = (ok: boolean, answer: string) => {
    markResult(answer, ok);
    if (ok) setScore((s) => s + 1);
    else setWrongWords((w) => [...w, answer]);
  };

  const next = () => {
    setPicked(null);
    setTyped('');
    setIdx((i) => i + 1);
  };

  const modeMeta: { id: Mode; name: string; desc: string; icon: typeof ListChecks }[] = [
    { id: 'choice', name: '看中文选英文', desc: '书中的核心回忆路径', icon: ListChecks },
    { id: 'spell', name: '拼写挑战', desc: '顺着词根把词拼出来', icon: Keyboard },
    { id: 'story', name: '故事填空', desc: '在荒谬剧情里挖空回忆', icon: Quote },
  ];

  /* ---------- 配置页 ---------- */
  if (!qs) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black mb-2 flex items-center gap-2">
          <Swords className="w-7 h-7 text-[#e15a3b]" /> 测验场
        </h1>
        <p className="text-[#2e2a26]/60 mb-8">三种玩法，都沿着「画面 → 中文 → 英文」的回忆路线。</p>

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {modeMeta.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`text-left rounded-2xl p-4 ink-border transition-all ${
                mode === m.id ? 'bg-[#2e2a26] text-[#faf5ea] hard-shadow' : 'bg-white hover:-translate-y-0.5 hard-shadow-sm'
              }`}
            >
              <m.icon className="w-5 h-5 mb-2" />
              <p className="font-black">{m.name}</p>
              <p className={`text-xs mt-1 ${mode === m.id ? 'text-[#faf5ea]/70' : 'text-[#2e2a26]/55'}`}>{m.desc}</p>
            </button>
          ))}
        </div>

        <h2 className="font-black mb-3">测验范围</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFamilyId('all')}
            className={`px-4 py-2 rounded-xl text-sm font-bold ink-border transition-all ${familyId === 'all' ? 'bg-[#e15a3b] text-white hard-shadow-sm' : 'bg-white'}`}
          >
            全部词族混合
          </button>
          {families.map((f) => (
            <button
              key={f.id}
              onClick={() => setFamilyId(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold ink-border transition-all ${familyId === f.id ? 'text-white hard-shadow-sm' : 'bg-white'}`}
              style={familyId === f.id ? { backgroundColor: f.color } : undefined}
            >
              -{f.rime} 家族
            </button>
          ))}
        </div>

        <button
          onClick={start}
          className="w-full py-4 rounded-2xl bg-[#e15a3b] text-white text-lg font-black ink-border hard-shadow hard-shadow-none-hover transition-all"
        >
          开始测验
        </button>
      </div>
    );
  }

  /* ---------- 结果页 ---------- */
  if (idx >= qs.length) {
    const pct = Math.round((score / qs.length) * 100);
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-3xl ink-border hard-shadow p-8">
          <div className="text-5xl mb-3">{pct >= 90 ? '🏆' : pct >= 60 ? '🎉' : '🧠'}</div>
          <h2 className="text-2xl font-black mb-1">本轮得分 {score}/{qs.length}</h2>
          <p className="text-[#2e2a26]/60 mb-6">
            {pct >= 90 ? '画面已经刻进脑子里了！' : pct >= 60 ? '不错，再巩固一下更牢。' : '回到故事里再看一遍画面吧。'}
          </p>
          {wrongWords.length > 0 && (
            <div className="mb-6 text-left bg-[#c2432f]/5 rounded-2xl p-4 border-2 border-[#c2432f]/20">
              <p className="font-black text-sm text-[#c2432f] mb-2">需要复习的词</p>
              <div className="flex flex-wrap gap-2">
                {[...new Set(wrongWords)].map((w) => (
                  <button key={w} onClick={() => speak(w)} className="px-2.5 py-1 rounded-lg bg-white ink-border font-mono font-black text-sm hard-shadow-sm">
                    {w.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setQs(null)} className="py-3 rounded-2xl bg-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all">
              换个玩法
            </button>
            <button onClick={start} className="py-3 rounded-2xl bg-[#e15a3b] text-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all inline-flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" /> 再来一轮
            </button>
          </div>
          <Link to="/study" className="block mt-4 text-sm font-bold text-[#2e2a26]/55 hover:text-[#2e2a26]">
            回去翻卡复习 →
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- 答题页 ---------- */
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm font-black text-[#2e2a26]/60 shrink-0">
          {idx + 1}/{qs.length}
        </span>
        <div className="flex-1 h-2.5 rounded-full bg-[#2e2a26]/10 overflow-hidden">
          <div className="h-full bg-[#e15a3b] rounded-full transition-all" style={{ width: `${(idx / qs.length) * 100}%` }} />
        </div>
        <span className="text-sm font-black text-[#2f6f5e] shrink-0">✓ {score}</span>
      </div>

      <div className="bg-white rounded-3xl ink-border hard-shadow p-6 md:p-8 mb-5">
        <p className="text-xs font-black tracking-widest text-[#2e2a26]/40 mb-3">
          {mode === 'choice' ? '看中文选英文' : mode === 'spell' ? '拼写挑战' : '故事填空'}
        </p>
        <p className="text-2xl md:text-3xl font-black mb-2">{q!.prompt}</p>
        {q!.hint && <p className="text-sm text-[#2e2a26]/50">提示：{q!.hint}</p>}
      </div>

      {mode !== 'spell' ? (
        <div className="grid grid-cols-2 gap-3">
          {q!.options!.map((op) => {
            const isAns = op === q!.answer;
            const isPicked = op === picked;
            let cls = 'bg-white hover:-translate-y-0.5';
            if (picked) {
              if (isAns) cls = 'bg-[#2f6f5e] text-white';
              else if (isPicked) cls = 'bg-[#c2432f] text-white';
              else cls = 'bg-white opacity-50';
            }
            return (
              <button
                key={op}
                disabled={picked !== null}
                onClick={() => { setPicked(op); judge(isAns, q!.answer); if (isAns) speak(op); }}
                className={`py-4 px-3 rounded-2xl font-mono font-black text-lg ink-border hard-shadow-sm transition-all ${cls}`}
              >
                {op.toUpperCase()}
              </button>
            );
          })}
        </div>
      ) : (
        <SpellBox
          key={idx}
          answer={q!.answer}
          typed={typed}
          setTyped={setTyped}
          onSubmit={() => judge(typed.trim().toLowerCase() === q!.answer, q!.answer)}
          onNext={next}
        />
      )}

      {picked !== null && (
        <div
          className={`mt-5 rounded-2xl p-4 ink-border flex items-center justify-between ${
            picked === q!.answer ? 'bg-[#2f6f5e]/10 border-[#2f6f5e]' : 'bg-[#c2432f]/10 border-[#c2432f]'
          }`}
        >
          <div className="flex items-center gap-2 font-bold">
            {picked === q!.answer ? (
              <>
                <Check className="w-5 h-5 text-[#2f6f5e]" /> 答对了，就是 {q!.answer.toUpperCase()}
              </>
            ) : (
              <>
                <X className="w-5 h-5 text-[#c2432f]" /> 正确答案是 <span className="font-mono font-black">{q!.answer.toUpperCase()}</span>
              </>
            )}
            <button onClick={() => speak(q!.answer)} className="ml-1 w-7 h-7 rounded-full hover:bg-black/5 flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <button onClick={next} className="px-4 py-2 rounded-xl bg-[#2e2a26] text-white text-sm font-bold">
            {idx + 1 === qs.length ? '看结果' : '下一题'}
          </button>
        </div>
      )}
    </div>
  );
}

/* 拼写组件：自己管理提交/反馈态 */
function SpellBox({
  answer,
  typed,
  setTyped,
  onSubmit,
  onNext,
}: {
  answer: string;
  typed: string;
  setTyped: (v: string) => void;
  onSubmit: () => void;
  onNext: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const ok = typed.trim().toLowerCase() === answer;
  useEffect(() => {
    if (submitted) speak(answer);
  }, [submitted, answer]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!submitted && typed.trim()) {
            setSubmitted(true);
            onSubmit();
          }
        }}
        className="flex gap-3"
      >
        <input
          value={typed}
          onChange={(e) => setTyped(e.target.value.replace(/[^a-zA-Z-]/g, ''))}
          disabled={submitted}
          placeholder="输入英文单词……"
          autoFocus
          className={`flex-1 rounded-2xl border-2 px-5 py-4 font-mono font-black text-xl tracking-widest focus:outline-none bg-white ${
            submitted ? (ok ? 'border-[#2f6f5e] text-[#2f6f5e]' : 'border-[#c2432f] text-[#c2432f]') : 'border-[#2e2a26]/25 focus:border-[#2e2a26]'
          }`}
        />
        {!submitted ? (
          <button type="submit" className="px-6 rounded-2xl bg-[#2e2a26] text-white font-bold ink-border hard-shadow-sm">
            提交
          </button>
        ) : (
          <button type="button" onClick={onNext} className="px-6 rounded-2xl bg-[#e15a3b] text-white font-bold ink-border hard-shadow-sm">
            继续
          </button>
        )}
      </form>
      {submitted && !ok && (
        <p className="mt-3 font-bold text-[#c2432f]">
          正确拼写：<span className="font-mono font-black text-lg">{answer.toUpperCase()}</span>
        </p>
      )}
      {submitted && ok && <p className="mt-3 font-bold text-[#2f6f5e]">拼写正确！</p>}
      {/* 字母条提示 */}
      {!submitted && (
        <div className="mt-4 flex gap-1.5">
          {answer.split('').map((_, i) => (
            <span key={i} className="w-8 h-9 rounded-lg border-2 border-dashed border-[#2e2a26]/25 flex items-center justify-center font-mono font-black text-[#2e2a26]/30 text-sm">
              {typed[i] ? typed[i].toUpperCase() : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
