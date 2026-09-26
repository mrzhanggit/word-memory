import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, BookOpenText, Check, Lightbulb, PartyPopper, PenLine, Quote, Swords, Volume2 } from 'lucide-react';
import { families } from '../data/families';
import { speak } from '../hooks/useProgress';
import { useProgressCtx } from '../hooks/progressContext';
import SceneImage from '../components/SceneImage';
import WordCard from '../components/WordCard';

export default function FamilyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const family = useMemo(() => families.find((f) => f.id === id), [id]);
  const { progress, stories, saveStory, markSeen } = useProgressCtx();
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [myStory, setMyStory] = useState<string>(family ? (stories[family.id] ?? '') : '');
  const [saved, setSaved] = useState(false);

  if (!family) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="font-bold text-lg mb-4">没有找到这个词族</p>
        <Link to="/families" className="text-[#e15a3b] font-bold hover:underline">回词族广场</Link>
      </div>
    );
  }

  const wordMap = new Map(family.words.map((w) => [w.word, w]));
  const masteredCount = family.words.filter((w) => progress[w.word]?.mastered).length;
  const thisDone = family.words.every((w) => progress[w.word]?.mastered);

  // 词族间导航：下一个未完成的词族（从当前往后找，绕回开头），上一族按顺序取
  const idx = families.findIndex((f) => f.id === family.id);
  const nextUnfinished = families
    .slice(idx + 1)
    .concat(families.slice(0, idx + 1))
    .find((f) => !f.words.every((w) => progress[w.word]?.mastered));
  const prevFamily = families[(idx - 1 + families.length) % families.length];
  const hasNext = nextUnfinished && nextUnfinished.id !== family.id;

  const clickSegment = (word?: string) => {
    if (!word) return;
    setActiveWord(word === activeWord ? null : word);
    speak(word);
    markSeen(word);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2e2a26]/60 hover:text-[#2e2a26] mb-5">
        <ArrowLeft className="w-4 h-4" /> 返回
      </button>

      {/* 头部：场景 + 标题 */}
      <div className="grid md:grid-cols-5 gap-6 items-start mb-10">
        <div className="md:col-span-3 rounded-3xl overflow-hidden ink-border hard-shadow">
          <SceneImage src={family.scene} alt={family.title} className="w-full h-auto block" />
        </div>
        <div className="md:col-span-2">
          <span className="inline-block text-xs font-black tracking-widest px-3 py-1 rounded-full text-white ink-border mb-3" style={{ backgroundColor: family.color }}>
            {family.rimePosition === 'start' ? `${family.rime}-` : family.rimePosition === 'mixed' ? family.rime : `-${family.rime}`} 家族 · {family.words.length} 词
          </span>
          <h1 className="text-3xl font-black mb-2">{family.title}</h1>
          <p className="text-[#2e2a26]/60 mb-5">{family.subtitle}</p>
          <div className="bg-white rounded-2xl ink-border hard-shadow-sm p-4 mb-5">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-[#d9a441]" />
              <span className="font-black text-sm">记忆诀窍</span>
            </div>
            <p className="text-sm text-[#2e2a26]/75 leading-relaxed">{family.tip}</p>
          </div>
          <div className="flex gap-3">
            <Link
              to={`/study?family=${family.id}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
              style={{ backgroundColor: family.color }}
            >
              <BookOpenText className="w-4 h-4" /> 学这族
            </Link>
            <Link
              to={`/quiz?family=${family.id}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
            >
              <Swords className="w-4 h-4" /> 测这族
            </Link>
          </div>
          <p className="mt-3 text-xs text-[#2e2a26]/50 text-center">已掌握 {masteredCount}/{family.words.length} 个单词</p>
        </div>
      </div>

      {/* 故事串联 */}
      <section className="mb-10">
        <h2 className="text-xl font-black mb-1 flex items-center gap-2">
          <Quote className="w-5 h-5" style={{ color: family.color }} />
          荒谬故事串联
        </h2>
        <p className="text-sm text-[#2e2a26]/55 mb-4">点一点高亮的剧情词，听听它的发音、看看它的拼写。</p>
        <div className="bg-white rounded-3xl ink-border hard-shadow p-6 md:p-8">
          <p className="story-font text-xl md:text-2xl leading-loose">
            {family.story.map((seg, i) =>
              seg.word ? (
                <button
                  key={i}
                  onClick={() => clickSegment(seg.word)}
                  className={`px-1.5 mx-0.5 rounded-lg font-bold transition-all border-b-2 ${
                    activeWord === seg.word ? 'text-white word-glow border-transparent' : 'border-current hover:opacity-75'
                  }`}
                  style={activeWord === seg.word ? { backgroundColor: family.color } : { color: family.color }}
                >
                  {seg.text}
                </button>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </p>
          {activeWord && wordMap.get(activeWord) && (
            <div className="mt-5">
              <div className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 ink-border hard-shadow-sm" style={{ backgroundColor: '#fff8ef' }}>
                <span className="font-mono font-black text-2xl tracking-wide">{wordMap.get(activeWord)!.display}</span>
                <span className="text-[#2e2a26]/60 font-bold">{wordMap.get(activeWord)!.cn}</span>
                <button onClick={() => speak(activeWord)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5" aria-label="播放发音">
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-3">
                <WordCard word={activeWord} color={family.color} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* X 轴 Y 轴矩阵 */}
      <section className="mb-10">
        <h2 className="text-xl font-black mb-1">X 轴 Y 轴记忆法</h2>
        <p className="text-sm text-[#2e2a26]/55 mb-4">共同部分「{family.rime}」与附加字母组合成一个单词。点任意一行听发音。</p>
        <div className="bg-white rounded-3xl ink-border hard-shadow p-6 md:p-8 overflow-x-auto">
          <div className="min-w-[520px]">
            {/* X 轴标识 */}
            <div className="flex items-center gap-2 mb-4 pl-[92px]">
              <div className="h-0.5 flex-1 bg-[#2e2a26]/20 relative">
                <span className="absolute right-0 -top-1 w-2 h-2 rotate-45 border-t-2 border-r-2 border-[#2e2a26]/40" />
              </div>
              <span className="text-xs font-black text-[#2e2a26]/50 tracking-widest">X 轴 · {family.rime}</span>
            </div>
            <div className="space-y-2 relative">
              {/* Y 轴竖线 */}
              <div className="absolute left-[52px] top-0 bottom-0 w-0.5 bg-[#2e2a26]/20" />
              {family.words.map((w) => {
                const mastered = progress[w.word]?.mastered;
                const rimeAtStart = (w.rimePosition ?? family.rimePosition) === 'start';
                return (
                  <button
                    key={w.word}
                    onClick={() => { speak(w.word); markSeen(w.word); setActiveWord(w.word); }}
                    className={`relative flex items-center gap-3 w-full text-left rounded-2xl px-3 py-2 transition-all hover:bg-[#2e2a26]/4 ${activeWord === w.word ? 'bg-[#2e2a26]/6' : ''}`}
                  >
                    {/* 附加字母与共同部分；少数词族的共同部分位于词首 */}
                    <span className="w-[80px] text-right font-mono font-black text-lg shrink-0" style={{ color: family.color }}>
                      {rimeAtStart
                        ? family.rime
                        : (w.onset === 'ø' || w.onset.endsWith('+ø') ? '—' : w.onset.toUpperCase())}
                    </span>
                    <span className="text-[#2e2a26]/40 font-black">+</span>
                    <span className="font-mono font-black text-lg text-[#2e2a26]/85 tracking-wide">
                      {rimeAtStart
                        ? (w.onset === 'ø' ? '—' : w.onset.toUpperCase())
                        : family.rime}
                    </span>
                    <span className="text-[#2e2a26]/40 font-black">=</span>
                    {/* 单词 */}
                    <span className="flex-1 flex items-center gap-2 flex-wrap">
                      <span className="font-mono font-black text-lg px-2 py-0.5 rounded-lg ink-border hard-shadow-sm bg-white">{w.display}</span>
                      <span className="text-sm font-bold text-[#2e2a26]/65">{w.cn}</span>
                      {mastered && <Check className="w-4 h-4 text-[#2f6f5e]" />}
                    </span>
                    <Volume2 className="w-4 h-4 text-[#2e2a26]/30 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 自编故事 */}
      <section className="mb-4">
        <h2 className="text-xl font-black mb-1 flex items-center gap-2">
          <PenLine className="w-5 h-5" style={{ color: family.color }} />
          编一个你自己的故事
        </h2>
        <p className="text-sm text-[#2e2a26]/55 mb-4">书里说：自己另编一个故事，可能会记得更牢。试着把这族词串进你的画面里。</p>
        <div className="bg-white rounded-3xl ink-border hard-shadow p-5">
          <textarea
            value={myStory}
            onChange={(e) => { setMyStory(e.target.value); setSaved(false); }}
            placeholder={`用 ${family.words.map((w) => w.cn).join('、')} 编一个越荒谬越好的故事……`}
            className="w-full min-h-[110px] rounded-2xl border-2 border-[#2e2a26]/15 p-4 story-font text-lg leading-relaxed focus:outline-none focus:border-[#2e2a26]/50 bg-[#fffdf8]"
          />
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-[#2e2a26]/45">只保存在这台设备的浏览器里</p>
            <button
              onClick={() => { saveStory(family.id, myStory); setSaved(true); }}
              className="px-5 py-2 rounded-xl text-white text-sm font-bold ink-border hard-shadow-sm hard-shadow-none-hover transition-all"
              style={{ backgroundColor: family.color }}
            >
              {saved ? '已保存 ✓' : '保存我的故事'}
            </button>
          </div>
        </div>
      </section>

      {/* 词族间导航 */}
      <section className="mt-10">
        <div className="bg-white rounded-3xl ink-border hard-shadow p-5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <Link
              to={`/family/${prevFamily.id}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white ink-border hard-shadow-sm hard-shadow-none-hover transition-all hover:bg-[#2e2a26]/4 min-w-0"
            >
              <ArrowLeft className="w-4 h-4 shrink-0 text-[#2e2a26]/50" />
              <span className="min-w-0">
                <span className="block text-[10px] font-black tracking-widest text-[#2e2a26]/45">上一族</span>
                <span className="block text-sm font-bold truncate max-w-[140px]">{prevFamily.title}</span>
              </span>
            </Link>

            <div className="text-center shrink-0">
              {thisDone ? (
                <span className="inline-flex items-center gap-1.5 text-sm font-black text-[#2f6f5e]">
                  <PartyPopper className="w-4 h-4" /> 本族已学完
                </span>
              ) : (
                <span className="text-sm font-black text-[#2e2a26]/70">
                  本族 {masteredCount}/{family.words.length} 词
                </span>
              )}
            </div>

            {hasNext ? (
              <Link
                to={`/family/${nextUnfinished!.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-white ink-border hard-shadow-sm hard-shadow-none-hover transition-all min-w-0"
                style={{ backgroundColor: nextUnfinished!.color }}
              >
                <span className="min-w-0">
                  <span className="block text-[10px] font-black tracking-widest text-white/75">下一族未学</span>
                  <span className="block text-sm font-bold truncate max-w-[140px]">{nextUnfinished!.title}</span>
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#2e2a26]/6 text-sm font-black text-[#2e2a26]/60">
                <PartyPopper className="w-4 h-4" /> 全部学完啦
              </span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
