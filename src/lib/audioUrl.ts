// 统一解析发音音频 URL。
//
// 背景：此前发音走浏览器 Web Speech API（speechSynthesis），音质由各设备本地的
// TTS 引擎决定 —— 同一单词在 iPhone 上清晰，在某些 Android / 微信内置浏览器上
// 会被本地共振峰合成或中文语音回退读得含糊到听不出。
// 现在统一改为播放「音频文件」，音源固定，跨设备听到的发音完全一致。
//
// 优先级：
//   1. VITE_AUDIO_BASE 指向的自持音频（如 Supabase Storage，走 CDN、可缓存）
//   2. 回退有道词典发音接口（同源音质，实测 200 + audio/mpeg，媒体元素可跨域播放）

const YOUDAO_VOICE = 'https://dict.youdao.com/dictvoice';

export type Accent = 'us' | 'uk';

/** 生成音频文件名；规则必须与 scripts/fetch-youdao-audio.mjs 保持一致 */
export function audioFileName(text: string, accent: Accent = 'us'): string {
  const safe = text.trim().toLowerCase().replace(/[^a-z0-9-]/g, '_');
  return accent === 'uk' ? `${safe}_uk.mp3` : `${safe}.mp3`;
}

/** 仅英文可发音（有道发音接口对中文返回 500） */
export function isSpeakable(text: string): boolean {
  return /^[a-zA-Z][a-zA-Z\s'’,.!?-]*$/.test(text.trim());
}

/** 解析发音音频 URL；返回 null 表示该文本无法发音 */
export function resolveAudioUrl(text: string, accent: Accent = 'us'): string | null {
  const t = text.trim();
  if (!t || !isSpeakable(t)) return null;

  const base = (import.meta.env.VITE_AUDIO_BASE as string | undefined)?.replace(/\/+$/, '');
  if (base) return `${base}/${audioFileName(t, accent)}`;

  return `${YOUDAO_VOICE}?audio=${encodeURIComponent(t)}&type=${accent === 'uk' ? 1 : 2}`;
}
