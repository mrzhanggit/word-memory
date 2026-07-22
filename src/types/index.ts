// 词族中的一个单词
export interface FamilyWord {
  word: string;      // 英文单词（小写）
  display: string;   // 展示形式（如 T-BONE）
  cn: string;        // 中文意思
  onset: string;     // Y轴上的词首（如 sp）
  rimePosition?: 'start' | 'end'; // 共同部分在这个单词中的位置
  note?: string;     // 记忆小注
}

// 故事分段：text 为文本，word 非空时该段是“可点亮的剧情词”
export interface StorySegment {
  text: string;
  word?: string; // 对应 FamilyWord.word
}

// 一个词族（X轴Y轴记忆法单元）
export interface WordFamily {
  id: string;          // 'ark'
  rime: string;        // 'ARK' 共同部分（X轴）
  rimePosition?: 'start' | 'end' | 'mixed'; // 共同部分的位置，默认在词尾
  title: string;       // 词族标题
  subtitle: string;    // 一句话剧情简介
  scene: string;       // 场景插画路径
  story: StorySegment[]; // 串联故事（分段）
  onsets: string[];    // Y轴词首列表
  words: FamilyWord[];
  tip: string;         // 记忆诀窍（来自书中）
  color: string;       // 主题色
}

// 字母象形
export interface LetterArt {
  letter: string;
  shape: string;   // 象形含义
  scene: string;   // 书中画面描述
}

export interface PictoWord {
  word: string;
  cn: string;
  parts: { ch: string; mark?: string }[]; // 字母拆分，mark 为象形说明
  desc: string;
}

// 学习进度
export interface WordProgress {
  seen: number;
  correct: number;
  wrong: number;
  mastered: boolean;
  lastReview?: string;
}

export interface ProgressMap {
  [word: string]: WordProgress;
}
