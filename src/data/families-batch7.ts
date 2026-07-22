import type { StorySegment, WordFamily } from '../types';

type WordSeed = [word: string, meaning: string, added: string];

interface FamilySeed {
  id: string;
  rime: string;
  rimePosition?: 'start' | 'end';
  title: string;
  story: string;
  links: [text: string, word: string][];
  words: WordSeed[];
}

function segmentStory(story: string, links: FamilySeed['links']): StorySegment[] {
  const segments: StorySegment[] = [];
  let cursor = 0;

  for (const [text, word] of links) {
    const index = story.indexOf(text, cursor);
    if (index < 0) continue;
    if (index > cursor) segments.push({ text: story.slice(cursor, index) });
    segments.push({ text, word });
    cursor = index + text.length;
  }

  if (cursor < story.length) segments.push({ text: story.slice(cursor) });
  return segments;
}

const seeds: FamilySeed[] = [
  {
    id: 'thin',
    rime: 'THIN',
    rimePosition: 'start',
    title: '让物体变薄的奇怪方法',
    story: '某人这样想：“让物体变薄、变细。除了使用稀释剂外，用相对论也可以。”',
    links: [['某人', 'thingamy'], ['想', 'think'], ['物体', 'thing'], ['变薄', 'thin'], ['稀释剂', 'thinner']],
    words: [
      ['thingamy', '某人', 'gamy'], ['think', '想', 'k'], ['thing', '物、东西', 'g'], ['thin', '薄、细', 'ø'], ['thinner', '稀释剂', 'ner'],
    ],
  },
  {
    id: 'et2',
    rime: 'ET',
    title: '用水枪寻找黑玉宝藏',
    story: '要获得黑玉还是土方比较好，用水枪喷水将土弄潮湿，加上一点运气迟早能遇到宝。',
    links: [['获得', 'get'], ['黑玉', 'jet'], ['潮湿', 'wet'], ['迟早', 'yet'], ['遇到', 'met']],
    words: [
      ['get', '获得', 'g'], ['jet', '黑玉、喷射', 'j'], ['yet', '还（没）、尚（未）、迟早', 'y'], ['wet', '潮湿的', 'w'], ['met', '遇到（meet 的过去式）', 'm'],
    ],
  },
  {
    id: 'ade',
    rime: 'ADE',
    title: '沼泽里的高级翡翠贸易',
    story: '涉水到沼泽地区采高级翡翠固然是好贸易，但令湿地植物的叶片枯萎就不好了。',
    links: [['涉水', 'wade'], ['高级', 'grade'], ['翡翠', 'jade'], ['贸易', 'trade'], ['湿地', 'glade'], ['叶片', 'blade'], ['枯萎', 'fade']],
    words: [
      ['grade', '级、年级', 'gr'], ['wade', '涉水', 'w'], ['glade', '湿地、沼泽', 'gl'], ['jade', '翡翠、玉', 'j'], ['trade', '贸易', 'tr'], ['blade', '叶片、刀片', 'bl'], ['fade', '枯萎', 'f'],
    ],
  },
  {
    id: 'mar',
    rime: 'MAR',
    rimePosition: 'start',
    title: '马克思骑母马到火星购物',
    story: '马克思骑母马到火星的商业中心，用马克买一杯泥灰榨渣和一枚圣母玛利亚的标志。',
    links: [['马克思', 'marx'], ['母马', 'mare'], ['火星', 'mars'], ['商业中心', 'mart'], ['马克', 'mark'], ['泥灰', 'marl'], ['榨渣', 'marc'], ['圣母玛利亚', 'mary'], ['标志', 'mark']],
    words: [
      ['marx', '马克思', 'x'], ['mare', '母马', 'e'], ['mars', '火星', 's'], ['mart', '商业中心', 't'], ['marl', '泥灰', 'l'], ['marc', '榨渣', 'c'], ['mary', '圣母玛利亚', 'y'], ['mark', '标志、马克', 'k'],
    ],
  },
  {
    id: 'mar2',
    rime: 'MAR',
    rimePosition: 'start',
    title: '土拨鼠三月逛沼泽市场',
    story: '土拨鼠三月份到沼泽边缘的市场买西洋栗和马林鱼。',
    links: [['土拨鼠', 'marmot'], ['三月份', 'march'], ['沼泽', 'marsh'], ['边缘', 'margin'], ['市场', 'market'], ['西洋栗', 'marron'], ['马林鱼', 'marlin']],
    words: [
      ['marmot', '土拨鼠', 'mot'], ['march', '三月', 'ch'], ['marsh', '沼泽', 'sh'], ['margin', '边缘', 'gin'], ['market', '市场', 'ket'], ['marron', '西洋栗', 'ron'], ['marlin', '马林鱼', 'lin'],
    ],
  },
  {
    id: 'ack',
    rime: 'ACK',
    title: '被粗麻袋捆住的杰克',
    story: '男人杰克缺少硬背脊，他像一只被粗麻袋捆住的大头钉，因无法砍掉自己的束缚而痛苦不堪。',
    links: [['杰克', 'jack'], ['缺少', 'lack'], ['背脊', 'back'], ['粗麻袋', 'sack'], ['捆住', 'pack'], ['大头钉', 'tack'], ['砍掉', 'hack'], ['痛苦不堪', 'rack']],
    words: [
      ['jack', '杰克、男人', 'j'], ['lack', '缺少', 'l'], ['back', '背脊', 'b'], ['sack', '粗麻袋', 's'], ['pack', '捆、打包', 'p'], ['tack', '大头钉', 't'], ['hack', '砍、剁', 'h'], ['rack', '痛苦不堪', 'r'],
    ],
  },
  {
    id: 'ipe',
    rime: 'IPE',
    title: '鹬向烟斗抱怨',
    story: '鹬擦干它的斑纹，对烟斗抱怨说：“成熟的人不会把一只鹬看成烟蒂。”',
    links: [['鹬', 'snipe'], ['擦干', 'wipe'], ['斑纹', 'stripe'], ['烟斗', 'pipe'], ['抱怨', 'gripe'], ['成熟', 'ripe'], ['烟蒂', 'snipe']],
    words: [
      ['snipe', '鹬、烟蒂', 'sn'], ['wipe', '擦干', 'w'], ['stripe', '斑纹', 'str'], ['pipe', '烟斗', 'p'], ['gripe', '抱怨', 'gr'], ['ripe', '成熟的', 'r'],
    ],
  },
  {
    id: 'obe',
    rime: 'OBE',
    title: '穿睡袍探查地球仪',
    story: '她身穿睡袍，手持闪光灯，彻底地探查地球仪里标示的国度。',
    links: [['睡袍', 'robe'], ['闪光灯', 'strobe'], ['彻底地探查', 'probe'], ['地球仪', 'globe']],
    words: [
      ['robe', '睡袍、浴衣', 'r'], ['strobe', '闪光灯', 'str'], ['probe', '彻底地探查', 'pr'], ['globe', '地球仪', 'gl'],
    ],
  },
  {
    id: 'eal',
    rime: 'EAL',
    title: '海豹发牌寻找治愈食物',
    story: '海豹发牌卜卦，它真诚地想知道是玉米粉还是小牛肉能治愈它的病。',
    links: [['海豹', 'seal'], ['发牌', 'deal'], ['真诚地', 'real'], ['玉米粉', 'meal'], ['小牛肉', 'veal'], ['治愈', 'heal']],
    words: [
      ['seal', '海豹、印章', 's'], ['deal', '发牌', 'd'], ['real', '真的、真诚的', 'r'], ['meal', '玉米粉、一餐', 'm'], ['veal', '小牛肉', 'v'], ['heal', '治愈', 'h'],
    ],
  },
  {
    id: 'ive',
    rime: 'IVE',
    title: '从蜂巢国宅跳水潜水',
    story: '生活是靠自己争取，而不是来自别人的给予。虽然住在蜂巢国宅，但你还是可以跳水、潜水，不使自己苦恼沮丧。',
    links: [['生活', 'live'], ['给予', 'give'], ['蜂巢', 'hive'], ['跳水', 'dive'], ['潜水', 'dive'], ['苦恼沮丧', 'rive']],
    words: [
      ['live', '生活、住', 'l'], ['give', '给予', 'g'], ['hive', '蜂巢', 'h'], ['dive', '跳水、潜水', 'd'], ['rive', '撕裂、击碎、使苦恼沮丧', 'r'],
    ],
  },
];

const colors = ['#466B8A', '#B85C45', '#6D7750', '#815D86', '#3D7C73', '#A85E54', '#53718A', '#8B6A45', '#3F7A68', '#6C6291'];

export const familiesBatch7: WordFamily[] = seeds.map((seed, index) => ({
  id: seed.id,
  rime: seed.rime,
  rimePosition: seed.rimePosition,
  title: seed.title,
  subtitle: seed.story,
  scene: `/scenes/${seed.id}.png`,
  story: segmentStory(seed.story, seed.links),
  onsets: seed.words.map(([, , added]) => added),
  words: seed.words.map(([word, cn, onset]) => ({ word, display: word.toUpperCase(), cn, onset })),
  tip: seed.rimePosition === 'start'
    ? `共同部分 ${seed.rime} 放在词首，再接上不同字母，一口气记住这一组 ${seed.words.length} 个单词。`
    : `把共同部分 ${seed.rime} 放在词尾，换上不同词首，一口气记住这一组 ${seed.words.length} 个单词。`,
  color: colors[index % colors.length],
}));
