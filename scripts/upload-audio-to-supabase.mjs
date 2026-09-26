// 批量上传 public/audio 下的单词发音音频到 Supabase Storage（public bucket），
// 供前端通过 VITE_AUDIO_BASE 直接加载。
//
// 为什么要自持：发音此前走有道接口，虽已比设备 TTS 一致，但仍依赖外部服务；
// 自持后音频走 Supabase CDN（Cloudflare），可长期缓存、可离线，且彻底不依赖第三方。
//
// 用法（一次性，需 service role / secret key）：
//   SUPABASE_URL=https://xxx.supabase.co \
//   SUPABASE_SERVICE_KEY=sb_secret_xxx \
//   node scripts/upload-audio-to-supabase.mjs
import { createClient } from '@supabase/supabase-js';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;
const audioDir = process.env.AUDIO_DIR || path.join(projectRoot, 'public', 'audio');
const bucket = process.env.BUCKET || 'audio';
const CONCURRENCY = Number(process.env.CONCURRENCY || 12);

if (!url || !serviceKey) {
  console.error('缺少环境变量：SUPABASE_URL 与 SUPABASE_SERVICE_KEY 必填');
  process.exit(1);
}
if (!existsSync(audioDir)) {
  console.error(`音频目录不存在：${audioDir}`);
  process.exit(1);
}

const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });

// 1) 确保 bucket 存在且公开（已存在时报 already exists，忽略）
const { error: bucketErr } = await supabase.storage.createBucket(bucket, {
  public: true,
  fileSizeLimit: 10 * 1024 * 1024,
  allowedMimeTypes: ['audio/mpeg', 'audio/mp4', 'audio/wav', 'audio/ogg'],
});
if (bucketErr && !/already exists/i.test(bucketErr.message)) {
  console.error('创建 bucket 失败：', bucketErr.message);
  process.exit(1);
}
console.log(`bucket「${bucket}」就绪（public）`);

// 2) 收集音频文件
const files = readdirSync(audioDir).filter((f) => /\.(mp3|m4a|wav|ogg)$/i.test(f));
console.log(`待上传 ${files.length} 个音频（${audioDir}）`);

// 3) 并发上传（upsert，一年长缓存）
let ok = 0;
const fail = [];
const worker = async (file) => {
  const data = readFileSync(path.join(audioDir, file));
  const ext = path.extname(file).toLowerCase();
  const contentType =
    ext === '.m4a' ? 'audio/mp4' : ext === '.wav' ? 'audio/wav' : ext === '.ogg' ? 'audio/ogg' : 'audio/mpeg';
  const { error } = await supabase.storage.from(bucket).upload(file, data, {
    upsert: true,
    contentType,
    cacheControl: '31536000',
  });
  if (error) {
    fail.push(`${file}: ${error.message}`);
  } else {
    ok++;
    process.stdout.write(ok % 100 === 0 ? `\n[${ok}/${files.length}]\n` : '.');
  }
};

for (let i = 0; i < files.length; i += CONCURRENCY) {
  await Promise.all(files.slice(i, i + CONCURRENCY).map(worker));
}

console.log(`\n完成：成功 ${ok} / 共 ${files.length}`);
if (fail.length) {
  console.error(`失败 ${fail.length} 个：`);
  fail.slice(0, 10).forEach((f) => console.error('  ✗', f));
  process.exit(1);
} else {
  console.log('全部上传成功 🎉');
  console.log('示例公开 URL：', `${url.replace(/\/$/, '')}/storage/v1/object/public/${bucket}/${files[0]}`);
}
