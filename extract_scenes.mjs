import { build } from 'esbuild';
const entry = './src/data/families.ts';
const result = await build({ entryPoints: [entry], bundle: true, format: 'esm', write: false, platform: 'node' });
const code = result.outputFiles[0].text;
const mod = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
const all = mod.families || [];
const out = [];
for (const f of all) { if (f && f.id && f.scene) out.push({ id: f.id, scene: f.scene }); }
console.log(JSON.stringify(out));
