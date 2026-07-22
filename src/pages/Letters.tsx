import { letterArts, pictoWords } from '../data/letters';
import { LetterText, Moon, Mountain, Swords, HandMetal, Home as HomeIcon, BedDouble, Armchair } from 'lucide-react';

const letterIcons: Record<string, typeof Moon> = {
  A: HomeIcon,
  B: LetterText,
  C: Moon,
  D: LetterText,
  I: LetterText,
  M: Mountain,
  X: Swords,
  Y: HandMetal,
};

const letterColors = ['#e15a3b', '#4a6fa5', '#d9a441', '#2f6f5e', '#c25e7e', '#7a5c9e', '#b0762a', '#3e7ca6'];

export default function Letters() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">字母象形馆</h1>
        <p className="text-[#2e2a26]/60 max-w-2xl">
          书里说：英文字母虽然只用来拼音，但每个字母还代表本身的意义。把字母看成图画，单词就有了画面感。
        </p>
      </div>

      {/* 字母卡片 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {letterArts.map((l, i) => {
          const Icon = letterIcons[l.letter] ?? LetterText;
          const color = letterColors[i % letterColors.length];
          return (
            <div key={l.letter} className="bg-white rounded-3xl ink-border hard-shadow p-5 text-center hover:-translate-y-1 transition-transform">
              <div className="mx-auto w-16 h-16 rounded-2xl ink-border hard-shadow-sm flex items-center justify-center mb-3 floaty" style={{ backgroundColor: color, animationDelay: `${i * 0.2}s` }}>
                <span className="text-3xl font-black text-white font-mono">{l.letter}</span>
              </div>
              <p className="font-black">{l.shape}</p>
              <p className="text-xs text-[#2e2a26]/55 mt-1 leading-relaxed">{l.scene}</p>
              <Icon className="w-4 h-4 mx-auto mt-2 text-[#2e2a26]/30" />
            </div>
          );
        })}
      </div>

      {/* 象形单词 */}
      <h2 className="text-2xl font-black mb-2">单词本身就是一幅画</h2>
      <p className="text-[#2e2a26]/60 mb-6">书中的两个经典例子——盯着字形看三秒，你就再也忘不掉。</p>
      <div className="grid md:grid-cols-2 gap-5">
        {pictoWords.map((p) => (
          <div key={p.word} className="bg-white rounded-3xl ink-border hard-shadow p-6 md:p-8">
            <div className="flex items-center justify-center gap-1 mb-5">
              {p.parts.map((pt, i) => (
                <div key={i} className="text-center">
                  <span
                    className={`inline-block font-mono font-black text-6xl md:text-7xl px-1 rounded-xl ${
                      pt.mark ? 'text-[#e15a3b] bg-[#e15a3b]/10 border-b-4 border-[#e15a3b]' : 'text-[#2e2a26]'
                    }`}
                  >
                    {pt.ch}
                  </span>
                  {pt.mark && <p className="text-[11px] font-black text-[#e15a3b] mt-1">{pt.mark}</p>}
                </div>
              ))}
            </div>
            {p.word === 'bed' && <BedDouble className="w-8 h-8 mx-auto mb-3 text-[#2e2a26]/40" />}
            {p.word === 'chair' && <Armchair className="w-8 h-8 mx-auto mb-3 text-[#2e2a26]/40" />}
            <p className="text-center font-black text-lg mb-1">
              {p.word.toUpperCase()} · {p.cn}
            </p>
            <p className="text-center text-sm text-[#2e2a26]/65 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#2e2a26] text-[#faf5ea] rounded-3xl ink-border hard-shadow p-6 md:p-8 text-center">
        <p className="story-font text-lg md:text-xl leading-relaxed">
          「一棵木是木，两棵木是林，三棵木是森。」——中文靠象形堆叠，英文靠字母拼音，
          <br className="hidden md:block" />
          但记住画面永远比记住符号容易。
        </p>
      </div>
    </div>
  );
}
