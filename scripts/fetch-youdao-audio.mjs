#!/usr/bin/env node
/**
 * 从有道下载单词发音音频（美音 + 英音），存入 public/audio/。
 *
 * 端点: dict.youdao.com/dictvoice?audio=<word>&type=2 (美) / type=1 (英)
 *       实测 200 + audio/mpeg，约 10KB/条。
 *
 * 用法:
 *   node scripts/fetch-youdao-audio.mjs             # 全量下载（跳过已存在）
 *   node scripts/fetch-youdao-audio.mjs --force     # 强制重下
 *   node scripts/fetch-youdao-audio.mjs --accent=us # 只下美音
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public/audio');
const DICT = path.join(ROOT, 'public/dictionary.json');

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const accentArg = (() => {
  const hit = args.find((a) => a.startsWith('--accent='));
  return hit ? hit.slice(9) : 'both';
})();

const CONCURRENCY = 8;

// ---------- 词表：以已抓取的词典为准（能查到释义的才是有效词） ----------
const dict = JSON.parse(fs.readFileSync(DICT, 'utf8'));
const words = Object.keys(dict);

// ---------- 文件名安全化 ----------
const safe = (w) => w.replace(/[^a-z0-9-]/gi, '_').toLowerCase();

const tasks = [];
for (const w of words) {
  if (accentArg === 'both' || accentArg === 'us') {
    tasks.push({ word: w, type: 2, file: `${safe(w)}.mp3` });
  }
  if (accentArg === 'both' || accentArg === 'uk') {
    tasks.push({ word: w, type: 1, file: `${safe(w)}_uk.mp3` });
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const pending = FORCE ? tasks : tasks.filter((t) => !fs.existsSync(path.join(OUT_DIR, t.file)));
console.log(`单词 ${words.length} 个，任务 ${tasks.length} 条，待下载 ${pending.length} 条（并发 ${CONCURRENCY}）`);

let ok = 0;
const failed = [];
let bytes = 0;
let done = 0;

async function download(t) {
  const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(t.word)}&type=${t.type}`;
  const dest = path.join(OUT_DIR, t.file);
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 800) throw new Error(`样本过小 ${buf.length}B`);
      fs.writeFileSync(dest, buf);
      ok++;
      bytes += buf.length;
      return;
    } catch (e) {
      if (attempt === 3) {
        failed.push(`${t.file}(${e.message})`);
        return;
      }
      await new Promise((r) => setTimeout(r, 300 * attempt));
    }
  }
}

async function pool() {
  let cursor = 0;
  const step = async () => {
    while (cursor < pending.length) {
      const t = pending[cursor++];
      await download(t);
      done++;
      if (done % 50 === 0 || done === pending.length) {
        process.stdout.write(`\r  下载进度 ${done}/${pending.length}`);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, pending.length) }, step));
}

const started = Date.now();
await pool();
process.stdout.write('\n');

const secs = ((Date.now() - started) / 1000).toFixed(1);
console.log('');
console.log(`✓ 音频目录 ${path.relative(ROOT, OUT_DIR)}`);
console.log(`  成功 ${ok} / 失败 ${failed.length} / ${(bytes / 1024 / 1024).toFixed(1)} MB / 耗时 ${secs}s`);
if (failed.length) console.log(`  失败样本: ${failed.slice(0, 10).join(', ')}${failed.length > 10 ? ' …' : ''}`);
