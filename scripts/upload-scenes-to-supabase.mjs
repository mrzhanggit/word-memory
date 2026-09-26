// 批量上传 public/scenes 下的词族插画到 Supabase Storage（public bucket），
// 供前端通过 VITE_SCENE_BASE 直接加载，加速 CDN 分发、减小应用包体积。
// 用法（一次性，需 service role key）：
//   SUPABASE_URL=https://xxx.supabase.co \
//   SUPABASE_SERVICE_KEY=eyJ... \
//   node scripts/upload-scenes-to-supabase.mjs
import { createClient } from '@supabase/supabase-js';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;
const scenesDir = process.env.SCENES_DIR || path.join(projectRoot, 'public', 'scenes');
const bucket = process.env.BUCKET || 'scenes';
const CONCURRENCY = Number(process.env.CONCURRENCY || 10);

if (!url || !serviceKey) {
  console.error('缺少环境变量：SUPABASE_URL 与 SUPABASE_SERVICE_KEY 必填');
  process.exit(1);
}
if (!existsSync(scenesDir)) {
  console.error(`图片目录不存在：${scenesDir}`);
  process.exit(1);
}

const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });

// 1) 确保 bucket 存在且公开（已存在时忽略报错）
const { error: bucketErr } = await supabase.storage.createBucket(bucket, {
  public: true,
  fileSizeLimit: 30 * 1024 * 1024,
  allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
});
if (bucketErr && !/already exists/i.test(bucketErr.message)) {
  console.error('创建 bucket 失败：', bucketErr.message);
  process.exit(1);
}
console.log(`bucket「${bucket}」就绪（public）`);

// 2) 收集图片文件
const files = readdirSync(scenesDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
console.log(`待上传 ${files.length} 张图片（${scenesDir}）`);

// 3) 并发上传（upsert，长缓存）
let ok = 0;
const fail = [];
const worker = async (file) => {
  const data = readFileSync(path.join(scenesDir, file));
  const ext = path.extname(file).toLowerCase();
  const contentType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
  const { error } = await supabase.storage.from(bucket).upload(file, data, {
    upsert: true,
    contentType,
    cacheControl: '31536000',
  });
  if (error) {
    fail.push(`${file}: ${error.message}`);
  } else {
    ok++;
    process.stdout.write(ok % 50 === 0 ? `\n[${ok}/${files.length}]\n` : '.');
  }
};

for (let i = 0; i < files.length; i += CONCURRENCY) {
  await Promise.all(files.slice(i, i + CONCURRENCY).map(worker));
}

console.log(`\n完成：成功 ${ok} / 共 ${files.length}`);
if (fail.length) {
  console.error(`失败 ${fail.length} 个：`);
  fail.slice(0, 10).forEach((f) => console.error('  ✗', f));
} else {
  console.log('全部上传成功 🎉');
  console.log('示例公开 URL：', `${url.replace(/\/$/, '')}/storage/v1/object/public/${bucket}/${files[0]}`);
}
