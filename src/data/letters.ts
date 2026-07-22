import type { LetterArt, PictoWord } from '../types';

// 字母象形：书中「每个字母还代表本身的意义」
export const letterArts: LetterArt[] = [
  { letter: 'A', shape: '屋脊', scene: '尖尖的屋顶，遮风避雨的家。' },
  { letter: 'B', shape: '两倍的 D', scene: '两个「背」叠在一起，双倍的弧度。' },
  { letter: 'C', shape: '娥眉月', scene: '一弯新月挂在夜空。' },
  { letter: 'D', shape: '背', scene: '弓起的背脊。' },
  { letter: 'I', shape: '神与人的桥', scene: '天神下凡乘坐的电梯，连接天与地。' },
  { letter: 'M', shape: '两座山峰', scene: '也像麦当劳的金色拱门。' },
  { letter: 'X', shape: '两剑交锋', scene: '争战格斗、胜负未知——所以 X 代表未知数。' },
  { letter: 'Y', shape: '祈祷的人', scene: '张开双臂，向天祈祷。' },
];

// 书中的「象形英文单词」
export const pictoWords: PictoWord[] = [
  {
    word: 'bed',
    cn: '床',
    parts: [
      { ch: 'b', mark: '床头' },
      { ch: 'e', mark: '床垫' },
      { ch: 'd', mark: '床尾' },
    ],
    desc: 'b 和 d 是两端床头板，e 是中间的床垫——整个字就是一张床。',
  },
  {
    word: 'chair',
    cn: '椅子',
    parts: [
      { ch: 'c' },
      { ch: 'h', mark: '椅子' },
      { ch: 'a' },
      { ch: 'i' },
      { ch: 'r' },
    ],
    desc: 'chair 中间藏了一把椅子——h 的椅背和椅脚一目了然。',
  },
];
