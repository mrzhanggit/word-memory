#!/usr/bin/env node
/**
 * 从有道词典抓取词条数据，裁剪后输出 JSON。
 *
 * 字段来源（均为实测确认）：
 *   simple.word[0].usphone / ukphone   -> 音标
 *   ec.word[0].trs[].tr[0].l.i[]       -> 中文释义（有道自有，避开 oxford/collins/webster 版权内容）
 *   ec.exam_type                       -> 学段标签（初中/高中/CET4/CET6/考研）
 *   blng_sents_part.sentence-pair[]    -> 双语例句（含中文翻译）
 *   auth_sents_part.sent[]             -> 权威例句（仅英文 + 来源，无中文）
 *   media_sents_part.sent[]            -> 原声例句（真人录音，streamUrl 可直接播放）
 *
 * 用法:
 *   node scripts/fetch-youdao-dict.mjs --limit=20 --out=scripts/out/sample.json
 *   node scripts/fetch-youdao-dict.mjs                    # 全量 765 词
 *
 * 注意: 有道 jsonapi 对带 Origin 头的请求返回 403（防盗链），
 *       本脚本在 Node 环境直连（不带 Origin），实测 80-135ms/词。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src/data');

const args = process.argv.slice(2);
const getArg = (name, def) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : def;
};

const LIMIT = Number(getArg('limit', '0')) || 0;
const CONCURRENCY = Number(getArg('concurrency', '6')) || 6;
const OUT = path.resolve(ROOT, getArg('out', 'src/data/dictionary.json'));

// ---------- 1. 从数据源提取全部单词 ----------
function extractWords() {
  const words = new Set();
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (!f.endsWith('.ts')) continue;
    const src = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
    for (const m of src.matchAll(/word:\s*'([^']+)'/g)) {
      const w = m[1].trim().toLowerCase();
      if (w) words.add(w);
    }
  }
  return [...words].sort();
}

// ---------- 工具 ----------
const strip = (s) =>
  (s || '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const uniq = (arr) => [...new Set(arr)];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- 2. 抓取并裁剪单个词 ----------
async function fetchWord(word) {
  const url = `https://dict.youdao.com/jsonapi?q=${encodeURIComponent(word)}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const d = await res.json();

  const out = {};
  const sw = d?.simple?.word?.[0];
  const ew = d?.ec?.word?.[0];

  // 音标
  const us = sw?.usphone || ew?.usphone;
  const uk = sw?.ukphone || ew?.ukphone;
  if (us) out.us = strip(us);
  if (uk) out.uk = strip(uk);

  // 中文释义（只取 ec，避开版权词典）
  const cn = [];
  for (const t of ew?.trs || []) {
    const line = (t?.tr?.[0]?.l?.i || []).join('; ');
    if (line) cn.push(strip(line));
  }
  if (cn.length) out.cn = uniq(cn).slice(0, 4);

  // 学段标签
  if (Array.isArray(d?.ec?.exam_type) && d.ec.exam_type.length) {
    out.exam = d.ec.exam_type;
  }

  // 双语例句
  const ex = [];
  for (const p of d?.blng_sents_part?.['sentence-pair'] || []) {
    const en = strip(p.sentence);
    const zh = strip(p['sentence-translation']);
    if (en && zh) ex.push({ en, zh });
  }
  if (ex.length) out.ex = ex.slice(0, 3);

  // 权威例句（仅英文 + 来源）
  const auth = [];
  for (const s of d?.auth_sents_part?.sent || []) {
    const en = strip(s.foreign);
    if (!en) continue;
    const src = strip(s.source).split(':')[0].split('：')[0].trim();
    auth.push(src ? { en, src } : { en });
  }
  if (auth.length) out.auth = auth.slice(0, 3);

  // 原声例句（真人录音）
  const orig = [];
  for (const s of d?.media_sents_part?.sent || []) {
    const sn = s?.snippets?.snippet?.[0];
    const en = strip(s.eng);
    if (!en || !sn) continue;
    const isVideo = s['@mediatype'] === 'video';
    const item = { en };
    const zh = strip(s.chn);
    if (zh) item.zh = zh;
    if (sn.source) item.src = strip(sn.source);
    if (sn.duration) item.dur = Math.round(Number(sn.duration) / 1000);
    if (isVideo) {
      // 视频为 FLV 格式，浏览器不能播放 —— 只保留封面帧
      item.type = 'video';
      if (sn.imageUrl) item.cover = sn.imageUrl;
    } else if (sn.streamUrl) {
      item.audio = sn.streamUrl;
    }
    orig.push(item);
  }
  if (orig.length) out.orig = orig.slice(0, 3);

  return out;
}

// ---------- 3. 并发池 ----------
async function pool(items, worker, concurrency) {
  let cursor = 0;
  let done = 0;
  const step = async () => {
    while (cursor < items.length) {
      const idx = cursor++;
      await worker(items[idx]);
      done++;
      if (done % 25 === 0 || done === items.length) {
        process.stdout.write(`\r  抓取进度 ${done}/${items.length}`);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, step));
  process.stdout.write('\n');
}

// ---------- 主流程 ----------
const allWords = extractWords();
const target = LIMIT ? allWords.slice(0, LIMIT) : allWords;

console.log(`词库共 ${allWords.length} 个单词，本次抓取 ${target.length} 个（并发 ${CONCURRENCY}）`);

const dict = {};
const missing = [];
const started = Date.now();

await pool(
  target,
  async (word) => {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const entry = await fetchWord(word);
        if (entry.us || entry.cn?.length || entry.ex?.length || entry.orig?.length) {
          dict[word] = entry;
        } else {
          missing.push(word);
        }
        return;
      } catch (e) {
        if (attempt === 3) {
          missing.push(word);
          console.error(`\n  × ${word}: ${e.message}`);
          return;
        }
        await sleep(400 * attempt);
      }
    }
  },
  CONCURRENCY,
);

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(dict), 'utf8');

const bytes = fs.statSync(OUT).size;
const secs = ((Date.now() - started) / 1000).toFixed(1);

console.log('');
console.log(`✓ 写入 ${path.relative(ROOT, OUT)}`);
console.log(`  成功 ${Object.keys(dict).length} / 缺失 ${missing.length} / ${(bytes / 1024).toFixed(0)} KB / 耗时 ${secs}s`);
if (missing.length) console.log(`  缺失词: ${missing.slice(0, 20).join(', ')}${missing.length > 20 ? ' …' : ''}`);
