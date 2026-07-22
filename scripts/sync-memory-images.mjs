import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = process.env.MEMORY_IMAGE_DIR || path.join(os.homedir(), 'Downloads', '记忆图片');
const scenesDir = process.env.MEMORY_SCENES_DIR || path.join(projectRoot, 'public', 'scenes');
const manifestFile = process.env.MEMORY_SCENE_MANIFEST || path.join(projectRoot, 'src', 'data', 'synced-scenes.ts');
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

// 原书重复词族在应用内使用了新编号；另包含已人工核对的文件名笔误。
const aliases = {
  et: 'et2',
  are: 'are3',
  ind: 'ind2',
  ight: 'ight3',
  ear: 'ear3',
  ea: 'ea2',
  on: 'on2',
  par: 'par2',
  ool: 'ool3',
  ower: 'ower2',
  ull: 'ull2',
  ban: 'ban3',
  ca: 'ca2',
  rea: 'rea3',
  all: 'all2',
  ain: 'ain3',
  fi: 'fi2',
  que: 'qua',
  scan: 'sca',
};

function idFromFileName(name) {
  return name.trim().toLowerCase().replace(/_\d{12}$/, '');
}

function collectFamilyIds() {
  const ids = new Set();
  for (const file of readdirSync(path.join(projectRoot, 'src', 'data'))) {
    if (!/^families(?:-batch\d+)?\.ts$/.test(file)) continue;
    const source = readFileSync(path.join(projectRoot, 'src', 'data', file), 'utf8');
    for (const match of source.matchAll(/\bid\s*:\s*['"]([^'"]+)['"]/g)) ids.add(match[1].toLowerCase());
    for (const match of source.matchAll(/"id"\s*:\s*"([^"]+)"/g)) ids.add(match[1].toLowerCase());
  }
  return ids;
}

function existingSceneFor(id) {
  return readdirSync(scenesDir).find((file) => {
    const parsed = path.parse(file);
    return parsed.name.toLowerCase() === id && imageExtensions.has(parsed.ext.toLowerCase());
  });
}

function buildManifest(validIds) {
  const extensionPriority = new Map([['.jpg', 0], ['.jpeg', 1], ['.webp', 2], ['.png', 3]]);
  const selected = new Map();
  for (const file of readdirSync(scenesDir).sort()) {
    const parsed = path.parse(file);
    const id = parsed.name.toLowerCase();
    const ext = parsed.ext.toLowerCase();
    if (!validIds.has(id) || !imageExtensions.has(ext)) continue;
    const current = selected.get(id);
    if (!current || (extensionPriority.get(ext) ?? 99) < (extensionPriority.get(path.extname(current)) ?? 99)) {
      selected.set(id, file);
    }
  }
  return Object.fromEntries([...selected].sort(([a], [b]) => a.localeCompare(b)).map(([id, file]) => [id, `/scenes/${file}`]));
}

function writeManifest(manifest) {
  const content = `// 由 scripts/sync-memory-images.mjs 自动生成，请勿手动编辑。\nexport const syncedScenes: Record<string, string> = ${JSON.stringify(manifest, null, 2)};\n`;
  const previous = existsSync(manifestFile) ? readFileSync(manifestFile, 'utf8') : '';
  if (previous === content) return false;
  writeFileSync(manifestFile, content);
  return true;
}

export function syncMemoryImages() {
  mkdirSync(scenesDir, { recursive: true });
  const validIds = collectFamilyIds();
  const imported = [];
  const skipped = [];
  const unknown = [];

  if (existsSync(sourceDir) && statSync(sourceDir).isDirectory()) {
    for (const file of readdirSync(sourceDir).sort()) {
      const sourcePath = path.join(sourceDir, file);
      if (!statSync(sourcePath).isFile()) continue;
      const parsed = path.parse(file);
      const ext = parsed.ext.toLowerCase();
      if (!imageExtensions.has(ext)) continue;
      const sourceId = idFromFileName(parsed.name);
      // 规范文件名直接使用应用 id；旧文件名只有在不是有效 id 时才使用别名。
      const targetId = validIds.has(sourceId) ? sourceId : (aliases[sourceId] || sourceId);
      if (!validIds.has(targetId)) {
        unknown.push(file);
        continue;
      }
      const existing = existingSceneFor(targetId);
      if (existing) {
        skipped.push({ file, targetId, existing });
        continue;
      }
      const normalizedExt = ext === '.jpeg' ? '.jpg' : ext;
      const destination = `${targetId}${normalizedExt}`;
      copyFileSync(sourcePath, path.join(scenesDir, destination));
      imported.push({ file, targetId, destination });
    }
  }

  const manifestChanged = writeManifest(buildManifest(validIds));
  const result = { sourceDir, imported, skipped, unknown, manifestChanged };
  console.log(`[memory-images] imported=${imported.length} skipped=${skipped.length} unknown=${unknown.length}`);
  if (unknown.length) console.log(`[memory-images] unmatched: ${unknown.join(', ')}`);
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  syncMemoryImages();
}
