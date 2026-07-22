import { Link } from 'react-router';
import { ArrowRight, Axis3d, BookOpenText, Image as ImageIcon, LetterText, Lightbulb, MessagesSquare, Sparkles } from 'lucide-react';
import { families, totalWordCount } from '../data/families';
import { useProgressCtx } from '../hooks/progressContext';
import { resolveSceneUrl } from '../lib/sceneUrl';

const methods = [
  {
    icon: ImageIcon,
    title: '图像是最好的记忆体',
    color: '#e15a3b',
    body: '大脑存画面又快又牢。记单词不必背字母串，把它变成一张图——描写一个环境只要一张图片就行。',
  },
  {
    icon: Axis3d,
    title: 'X 轴 Y 轴记忆法',
    color: '#4a6fa5',
    body: '把共同词根写在 X 轴，词首写在 Y 轴，交叉组合——一口气牢记一整族单词。',
  },
  {
    icon: MessagesSquare,
    title: '荒谬故事串联',
    color: '#2f6f5e',
    body: '把一族单词编成一个荒谬的故事画面。越离谱越难忘：鬼被钩子钩进锅里煮，想忘都难。',
  },
  {
    icon: LetterText,
    title: '字母也会演戏',
    color: '#d9a441',
    body: 'A 是屋脊、C 是娥眉月、X 是两剑交锋。bed 本身就是一张床——字母形里藏着意思。',
  },
  {
    icon: Lightbulb,
    title: '以熟带新',
    color: '#c25e7e',
    body: '借最熟的 book 带走 look、cook、brook…… 认识一个词，就等于认识了一窝词。',
  },
  {
    icon: BookOpenText,
    title: '看中文背英文',
    color: '#7a5c9e',
    body: '回忆路线是：画面 → 中文意思 → 英文单词。测验顺着这条路走，单词自然脱口而出。',
  },
];

export default function Home() {
  const { masteredCount, seenCount } = useProgressCtx();
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-8 md:pt-16 md:pb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2e2a26] text-[#faf5ea] text-xs font-bold mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#d9a441]" />
            图像英文记忆法 · 互动版
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            把单词变成
            <span className="text-[#e15a3b]">画面</span>，
            <br />
            一眼就记住
          </h1>
          <p className="text-[#2e2a26]/70 text-base md:text-lg leading-relaxed mb-6">
            沿用蔡志忠《图像英文记忆法》的诀窍：词族矩阵 + 荒谬故事 + 场景插画，
            带你一口气拿下 {totalWordCount} 个单词组成的 {families.length} 个词族。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/families"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#e15a3b] text-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
            >
              进入词族广场 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/study"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white font-bold ink-border hard-shadow hard-shadow-none-hover transition-all"
            >
              直接开始学
            </Link>
          </div>
          {(seenCount > 0 || masteredCount > 0) && (
            <p className="mt-4 text-sm text-[#2e2a26]/60">
              你已接触 {seenCount} 个单词，掌握 {masteredCount} 个 · 继续加油
            </p>
          )}
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden ink-border hard-shadow rotate-1">
            <img src={resolveSceneUrl('/scenes/ark.jpg')} alt="云雀在黑暗公园的树皮上雕刻鲨鱼商标" className="w-full h-auto block" />
          </div>
          <div className="absolute -bottom-4 -left-3 bg-white rounded-2xl ink-border hard-shadow-sm px-4 py-2 -rotate-2">
            <p className="story-font text-sm font-bold">云雀·黑暗·公园·火星·树皮·鲨鱼·商标</p>
            <p className="text-xs text-[#2e2a26]/60">一个故事 = 7 个单词</p>
          </div>
        </div>
      </section>

      {/* 方法六式 */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-black mb-2">方法六式</h2>
        <p className="text-[#2e2a26]/60 mb-6">全部来自书中的记忆诀窍，做成了可以动手玩的互动。</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {methods.map((m) => (
            <div key={m.title} className="bg-white rounded-2xl ink-border hard-shadow p-5 hover:-translate-y-1 transition-transform">
              <span className="w-10 h-10 rounded-xl ink-border hard-shadow-sm flex items-center justify-center mb-3" style={{ backgroundColor: m.color }}>
                <m.icon className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-black text-lg mb-1.5">{m.title}</h3>
              <p className="text-sm text-[#2e2a26]/70 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 词族速览 */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">{families.length} 个词族，{families.length} 出好戏</h2>
            <p className="text-[#2e2a26]/60">每出戏都是一张难忘的画面。</p>
          </div>
          <Link to="/families" className="text-sm font-bold text-[#e15a3b] hover:underline shrink-0">
            全部词族 →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {families.slice(0, 6).map((f) => (
            <Link
              key={f.id}
              to={`/family/${f.id}`}
              className="group bg-white rounded-2xl ink-border hard-shadow overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-[3/2] overflow-hidden border-b-2 border-[#2e2a26]">
                <img src={resolveSceneUrl(f.scene)} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-3.5">
                <span className="inline-block text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full text-white mb-1.5" style={{ backgroundColor: f.color }}>
                  -{f.rime} 家族
                </span>
                <p className="font-bold text-sm leading-snug">{f.title}</p>
                <p className="text-xs text-[#2e2a26]/55 mt-0.5">{f.words.length} 个单词</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
