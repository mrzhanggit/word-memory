import { Link } from 'react-router';
import { Award, BookOpenText, Brain, RefreshCw, Swords, Target } from 'lucide-react';
import { families, totalWordCount } from '../data/families';
import { useProgressCtx } from '../hooks/progressContext';

export default function Stats() {
  const { progress, quizCount, masteredCount, seenCount } = useProgressCtx();

  const entries = Object.entries(progress);
  const totalCorrect = entries.reduce((s, [, w]) => s + w.correct, 0);
  const totalWrong = entries.reduce((s, [, w]) => s + w.wrong, 0);
  const accuracy = totalCorrect + totalWrong > 0 ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) : 0;
  const needReview = entries.filter(([, w]) => w.wrong > 0 && !w.mastered).map(([w]) => w);

  const cards = [
    { icon: BookOpenText, label: '已接触单词', value: `${seenCount}/${totalWordCount}`, color: '#4a6fa5' },
    { icon: Award, label: '已掌握', value: masteredCount, color: '#2f6f5e' },
    { icon: Target, label: '答题正确率', value: `${accuracy}%`, color: '#e15a3b' },
    { icon: Swords, label: '测验轮数', value: quizCount, color: '#7a5c9e' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">学习统计</h1>
      <p className="text-[#2e2a26]/60 mb-8">数据保存在本机浏览器，随时回来看看自己的画面库攒了多少。</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-2xl ink-border hard-shadow p-4">
            <span className="w-9 h-9 rounded-xl ink-border hard-shadow-sm flex items-center justify-center mb-2" style={{ backgroundColor: c.color }}>
              <c.icon className="w-4.5 h-4.5 text-white" />
            </span>
            <p className="text-2xl font-black">{c.value}</p>
            <p className="text-xs text-[#2e2a26]/55 font-bold">{c.label}</p>
          </div>
        ))}
      </div>

      {/* 各词族进度 */}
      <h2 className="text-xl font-black mb-4">词族掌握度</h2>
      <div className="bg-white rounded-3xl ink-border hard-shadow p-5 md:p-6 mb-10 space-y-3">
        {families.map((f) => {
          const m = f.words.filter((w) => progress[w.word]?.mastered).length;
          const pct = Math.round((m / f.words.length) * 100);
          return (
            <Link key={f.id} to={`/family/${f.id}`} className="flex items-center gap-3 group">
              <span className="w-24 shrink-0 text-sm font-black group-hover:text-[#e15a3b] transition-colors">-{f.rime} 家族</span>
              <div className="flex-1 h-3.5 rounded-full bg-[#2e2a26]/8 overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: f.color }} />
              </div>
              <span className="w-14 text-right text-sm font-bold text-[#2e2a26]/60">
                {m}/{f.words.length}
              </span>
            </Link>
          );
        })}
      </div>

      {/* 待复习 */}
      <h2 className="text-xl font-black mb-4 flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-[#e15a3b]" /> 待复习单词
      </h2>
      {needReview.length > 0 ? (
        <div className="bg-white rounded-3xl ink-border hard-shadow p-5 md:p-6 mb-10">
          <p className="text-sm text-[#2e2a26]/60 mb-3">这些词之前答错过、还没掌握，回到故事里再看看它们的画面。</p>
          <div className="flex flex-wrap gap-2">
            {needReview.map((w) => (
              <span key={w} className="px-3 py-1.5 rounded-xl bg-[#c2432f]/8 border-2 border-[#c2432f]/25 font-mono font-black text-sm text-[#c2432f]">
                {w.toUpperCase()}
              </span>
            ))}
          </div>
          <Link to="/quiz" className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-[#e15a3b] text-white text-sm font-bold ink-border hard-shadow-sm hard-shadow-none-hover transition-all">
            去测验巩固
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl ink-border hard-shadow p-6 mb-10 text-center text-[#2e2a26]/55">
          <Brain className="w-8 h-8 mx-auto mb-2 text-[#2e2a26]/25" />
          {seenCount === 0 ? '还没有学习记录，先去词族广场看一出戏吧。' : '太棒了，暂时没有需要复习的单词！'}
        </div>
      )}
    </div>
  );
}
