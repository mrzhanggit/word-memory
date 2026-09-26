// 词典数据层。
//
// 数据来源：scripts/fetch-youdao-dict.mjs 从有道词典抓取并裁剪（词条取自 src/data）。
// 存放位置：public/dictionary.json（约 1.3MB），首屏不加载，
//           进入词族详情 / 学习页时按需拉取一次并常驻内存，避免拖慢首屏 bundle。
//
// 版权说明：只保留 IPA 音标（事实数据）、有道自有中文释义（ec 字段）与例句，
//           不抓取牛津 / 柯林斯 / 韦氏等版权词典正文。

export interface DictExample {
  en: string;
  zh?: string;
}

export interface DictAuthSentence {
  en: string;
  /** 来源媒体，如 NPR / FORBES / WSJ */
  src?: string;
}

export interface DictOrigSentence {
  en: string;
  zh?: string;
  /** 出处，如 VOA、耶鲁公开课 */
  src?: string;
  /** 可直接播放的音频地址 */
  audio?: string;
  /** 视频型原声的封面帧（视频为 FLV，浏览器不能播放） */
  cover?: string;
  /** 时长（秒） */
  dur?: number;
  type?: 'video';
}

export interface DictEntry {
  /** 美式音标 */
  us?: string;
  /** 英式音标 */
  uk?: string;
  /** 中文释义 */
  cn?: string[];
  /** 学段标签，如 ['高中', 'CET4', '考研'] */
  exam?: string[];
  /** 双语例句 */
  ex?: DictExample[];
  /** 权威例句（仅英文 + 来源） */
  auth?: DictAuthSentence[];
  /** 原声例句（真人录音） */
  orig?: DictOrigSentence[];
}

export type Dictionary = Record<string, DictEntry>;

let cache: Dictionary | null = null;
let inflight: Promise<Dictionary> | null = null;

/** 按需加载词典（同一会话内只请求一次） */
export function loadDictionary(): Promise<Dictionary> {
  if (cache) return Promise.resolve(cache);
  if (inflight) return inflight;

  const base = import.meta.env.BASE_URL || '/';
  inflight = fetch(`${base}dictionary.json`)
    .then((r) => (r.ok ? (r.json() as Promise<Dictionary>) : ({} as Dictionary)))
    .then((d) => {
      cache = d;
      return d;
    })
    .catch(() => {
      cache = {};
      return {} as Dictionary;
    });

  return inflight;
}

/** 查询词条（需词典已加载完成） */
export function lookup(dict: Dictionary | null, word: string): DictEntry | undefined {
  if (!dict || !word) return undefined;
  return dict[word.trim().toLowerCase()];
}
