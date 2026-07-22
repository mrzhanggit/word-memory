import { readFileSync, writeFileSync } from 'node:fs';

const [input, output, exportName, renameSpec = '', overridesFile = ''] = process.argv.slice(2);

if (!input || !output || !exportName) {
  throw new Error('用法：node scripts/generate-family-batch.mjs <输入.json> <输出.ts> <导出名称> [旧ID:新ID,...]');
}

const renames = new Map(
  renameSpec
    .split(',')
    .filter(Boolean)
    .map((item) => item.split(':')),
);
const overrides = overridesFile ? JSON.parse(readFileSync(overridesFile, 'utf8')) : {};

const source = JSON.parse(readFileSync(input, 'utf8'));
const seeds = source.map((family) => {
  const familyOverride = overrides[String(family.source_page)] ?? {};
  const rime = family.common_part.toLowerCase();
  const words = family.words.map((word) => {
    const lowerWord = word.word.toLowerCase();
    const position = lowerWord.startsWith(rime) ? 'start' : 'end';
    return {
      word: lowerWord,
      meaning: word.meaning,
      keyword: familyOverride.keywords?.[word.word] ?? word.story_keyword,
      added: word.prefix || 'ø',
      position,
    };
  });

  return {
    sourcePage: family.source_page,
    id: renames.get(family.id) ?? family.id,
    rime: family.common_part.toUpperCase(),
    title: family.title,
    story: familyOverride.story ?? family.story,
    words,
  };
});

const serialized = JSON.stringify(seeds, null, 2);
const outputText = `import type { StorySegment, WordFamily } from '../types';

type Position = 'start' | 'end';

interface WordSeed {
  word: string;
  meaning: string;
  keyword: string;
  added: string;
  position: Position;
}

interface FamilySeed {
  sourcePage: number;
  id: string;
  rime: string;
  title: string;
  story: string;
  words: WordSeed[];
}

function segmentStory(story: string, words: WordSeed[]): StorySegment[] {
  const occupied: Array<{ start: number; end: number }> = [];
  const matches = [...words]
    .sort((a, b) => b.keyword.length - a.keyword.length)
    .map((word) => {
      let from = 0;
      let index = story.indexOf(word.keyword, from);
      while (index >= 0 && occupied.some((range) => index < range.end && index + word.keyword.length > range.start)) {
        from = index + 1;
        index = story.indexOf(word.keyword, from);
      }
      if (index >= 0) occupied.push({ start: index, end: index + word.keyword.length });
      return { index, text: word.keyword, word: word.word };
    })
    .filter((match) => match.index >= 0)
    .sort((a, b) => a.index - b.index || b.text.length - a.text.length);

  const segments: StorySegment[] = [];
  let cursor = 0;
  for (const match of matches) {
    if (match.index < cursor) continue;
    if (match.index > cursor) segments.push({ text: story.slice(cursor, match.index) });
    segments.push({ text: match.text, word: match.word });
    cursor = match.index + match.text.length;
  }
  if (cursor < story.length) segments.push({ text: story.slice(cursor) });
  return segments;
}

const seeds: FamilySeed[] = ${serialized};

const colors = ['#466B8A', '#B85C45', '#6D7750', '#815D86', '#3D7C73', '#A85E54', '#53718A', '#8B6A45', '#3F7A68', '#6C6291'];

export const ${exportName}: WordFamily[] = seeds.map((seed, index) => {
  const positions = new Set(seed.words.map((word) => word.position));
  const rimePosition = positions.size > 1 ? 'mixed' : seed.words[0]?.position;
  const positionTip = rimePosition === 'start'
    ? \`共同部分 \${seed.rime} 放在词首，再接上不同字母\`
    : rimePosition === 'mixed'
      ? \`共同部分 \${seed.rime} 有时在词首、有时在词尾，逐行观察组合位置\`
      : \`把共同部分 \${seed.rime} 放在词尾，换上不同词首\`;

  return {
    id: seed.id,
    rime: seed.rime,
    rimePosition,
    title: seed.title,
    subtitle: seed.story,
    scene: '',
    story: segmentStory(seed.story, seed.words),
    onsets: seed.words.map((word) => word.added),
    words: seed.words.map((word) => ({
      word: word.word,
      display: word.word.toUpperCase(),
      cn: word.meaning,
      onset: word.added,
      rimePosition: word.position,
    })),
    tip: \`\${positionTip}，一口气记住这一组 \${seed.words.length} 个单词。\`,
    color: colors[index % colors.length],
  };
});
`;

writeFileSync(output, outputText);
