import type { StorySegment, WordFamily } from '../types';

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

const seeds: FamilySeed[] = [
  {
    "sourcePage": 241,
    "id": "ta",
    "rime": "TA",
    "title": "护耳少年用焦油假装晒黑",
    "story": "戴着护耳的少年在身上轻拍焦油，让皮肤像晒成褐色的样子，给自己贴上到海滩度假的标签。",
    "words": [
      {
        "word": "tab",
        "meaning": "护耳",
        "keyword": "护耳",
        "added": "b",
        "position": "start"
      },
      {
        "word": "tad",
        "meaning": "少年",
        "keyword": "少年",
        "added": "d",
        "position": "start"
      },
      {
        "word": "tap",
        "meaning": "轻拍",
        "keyword": "轻拍",
        "added": "p",
        "position": "start"
      },
      {
        "word": "tar",
        "meaning": "焦油",
        "keyword": "焦油",
        "added": "r",
        "position": "start"
      },
      {
        "word": "tan",
        "meaning": "（晒成）褐色",
        "keyword": "褐色",
        "added": "n",
        "position": "start"
      },
      {
        "word": "tag",
        "meaning": "标签",
        "keyword": "标签",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 242,
    "id": "nat",
    "rime": "NAT",
    "title": "浮木上出生的游泳天才",
    "story": "它出生于漂浮的浮木，自然天生就具有灵巧的臀部，因而是游泳的天生好手，这是自然赋予它的生存本领。",
    "words": [
      {
        "word": "natal",
        "meaning": "出生的",
        "keyword": "出生",
        "added": "al",
        "position": "start"
      },
      {
        "word": "natant",
        "meaning": "漂浮",
        "keyword": "漂浮",
        "added": "ant",
        "position": "start"
      },
      {
        "word": "natch",
        "meaning": "自然地",
        "keyword": "自然",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "natty",
        "meaning": "灵巧",
        "keyword": "灵巧",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "nates",
        "meaning": "臀部",
        "keyword": "臀部",
        "added": "es",
        "position": "start"
      },
      {
        "word": "natation",
        "meaning": "游泳",
        "keyword": "游泳",
        "added": "ation",
        "position": "start"
      },
      {
        "word": "natural",
        "meaning": "天生好手、天生的",
        "keyword": "天生好手",
        "added": "ural",
        "position": "start"
      },
      {
        "word": "nature",
        "meaning": "本质、自然",
        "keyword": "自然",
        "added": "ure",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 243,
    "id": "are3",
    "rime": "ARE",
    "title": "野兔阻止母马剥皮付车费",
    "story": "野兔对母马说：“你胆敢想剥兔皮代替支付车费，忘了我是稀有动物，受到法律保护。”",
    "words": [
      {
        "word": "are",
        "meaning": "是（主词为复数）",
        "keyword": "我是",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "hare",
        "meaning": "野兔",
        "keyword": "野兔",
        "added": "h",
        "position": "end"
      },
      {
        "word": "mare",
        "meaning": "母马",
        "keyword": "母马",
        "added": "m",
        "position": "end"
      },
      {
        "word": "dare",
        "meaning": "胆敢",
        "keyword": "胆敢",
        "added": "d",
        "position": "end"
      },
      {
        "word": "pare",
        "meaning": "剥、削皮",
        "keyword": "剥兔皮",
        "added": "p",
        "position": "end"
      },
      {
        "word": "fare",
        "meaning": "车费",
        "keyword": "车费",
        "added": "f",
        "position": "end"
      },
      {
        "word": "rare",
        "meaning": "稀有",
        "keyword": "稀有动物",
        "added": "r",
        "position": "end"
      },
      {
        "word": "care",
        "meaning": "保护、关心",
        "keyword": "保护",
        "added": "c",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 244,
    "id": "ast",
    "rime": "AST",
    "title": "水手在疾风中投鱼枪捕鲸",
    "story": "过去的水手很苦，要在浩瀚的大海快速的疾风中爬上桅杆，投掷鱼枪捕鲸，最后遭鲸鱼反扑。",
    "words": [
      {
        "word": "past",
        "meaning": "过去",
        "keyword": "过去",
        "added": "p",
        "position": "end"
      },
      {
        "word": "vast",
        "meaning": "浩瀚",
        "keyword": "浩瀚",
        "added": "v",
        "position": "end"
      },
      {
        "word": "fast",
        "meaning": "快速",
        "keyword": "快速",
        "added": "f",
        "position": "end"
      },
      {
        "word": "blast",
        "meaning": "疾风",
        "keyword": "疾风",
        "added": "bl",
        "position": "end"
      },
      {
        "word": "mast",
        "meaning": "桅杆",
        "keyword": "桅杆",
        "added": "m",
        "position": "end"
      },
      {
        "word": "cast",
        "meaning": "投、掷",
        "keyword": "投掷",
        "added": "c",
        "position": "end"
      },
      {
        "word": "last",
        "meaning": "最后",
        "keyword": "最后",
        "added": "l",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 245,
    "id": "ant",
    "rime": "ANT",
    "title": "喘气蚂蚁承认种树能力不足",
    "story": "蚂蚁喘着气吟唱道：“我曾狂言要种植一棵树，现在我承认自己的能力显然不足。”",
    "words": [
      {
        "word": "ant",
        "meaning": "蚂蚁",
        "keyword": "蚂蚁",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "pant",
        "meaning": "喘气",
        "keyword": "喘着气",
        "added": "p",
        "position": "end"
      },
      {
        "word": "chant",
        "meaning": "吟唱",
        "keyword": "吟唱",
        "added": "ch",
        "position": "end"
      },
      {
        "word": "rant",
        "meaning": "狂言",
        "keyword": "狂言",
        "added": "r",
        "position": "end"
      },
      {
        "word": "plant",
        "meaning": "种植",
        "keyword": "种植",
        "added": "pl",
        "position": "end"
      },
      {
        "word": "grant",
        "meaning": "承认",
        "keyword": "承认",
        "added": "gr",
        "position": "end"
      },
      {
        "word": "scant",
        "meaning": "不足",
        "keyword": "不足",
        "added": "sc",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 246,
    "id": "ue",
    "rime": "UE",
    "title": "欠款不付被控告后悔恨",
    "story": "不用别人提示，也应知道事情真实的性质；欠款就应该支付，否则被控告时就会悔恨悲叹。",
    "words": [
      {
        "word": "cue",
        "meaning": "提示",
        "keyword": "提示",
        "added": "c",
        "position": "end"
      },
      {
        "word": "due",
        "meaning": "欠款、应支付的",
        "keyword": "欠款",
        "added": "d",
        "position": "end"
      },
      {
        "word": "hue",
        "meaning": "色调、性质",
        "keyword": "性质",
        "added": "h",
        "position": "end"
      },
      {
        "word": "true",
        "meaning": "真的、真实",
        "keyword": "真实",
        "added": "tr",
        "position": "end"
      },
      {
        "word": "rue",
        "meaning": "悔恨、悲叹",
        "keyword": "悔恨悲叹",
        "added": "r",
        "position": "end"
      },
      {
        "word": "sue",
        "meaning": "控告",
        "keyword": "控告",
        "added": "s",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 247,
    "id": "lue",
    "rime": "LUE",
    "title": "忧郁思路像漏气暖气管",
    "story": "忧郁会影响思路，这就像暖气管漏气时，应该用胶水粘上破洞。",
    "words": [
      {
        "word": "blue",
        "meaning": "忧郁、蓝色",
        "keyword": "忧郁",
        "added": "b",
        "position": "end"
      },
      {
        "word": "clue",
        "meaning": "线索、思路",
        "keyword": "思路",
        "added": "c",
        "position": "end"
      },
      {
        "word": "flue",
        "meaning": "暖气管",
        "keyword": "暖气管",
        "added": "f",
        "position": "end"
      },
      {
        "word": "glue",
        "meaning": "胶水、粘合",
        "keyword": "胶水",
        "added": "g",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 248,
    "id": "gra",
    "rime": "GRA",
    "title": "无人参加的毕业烤肉大餐",
    "story": "毕业生独自坐在草地上，他的心好似那灰色炉架一般地黯淡，因为全家竟然没人来参加他的毕业烤肉大餐。",
    "words": [
      {
        "word": "grad",
        "meaning": "毕业生",
        "keyword": "毕业生",
        "added": "d",
        "position": "start"
      },
      {
        "word": "grass",
        "meaning": "草",
        "keyword": "草地",
        "added": "ss",
        "position": "start"
      },
      {
        "word": "gray",
        "meaning": "灰色",
        "keyword": "灰色",
        "added": "y",
        "position": "start"
      },
      {
        "word": "grate",
        "meaning": "炉架",
        "keyword": "炉架",
        "added": "te",
        "position": "start"
      },
      {
        "word": "grave",
        "meaning": "黯淡的、墓穴",
        "keyword": "黯淡",
        "added": "ve",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 249,
    "id": "act",
    "rime": "ACT",
    "title": "会说话的契约小册讲诀窍",
    "story": "契约小册说：“设定契约的诀窍是——公证人要尊重事实、用词精确，才不会引起不良反应而冲突。”",
    "words": [
      {
        "word": "act",
        "meaning": "扮演",
        "keyword": "说",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "pact",
        "meaning": "契约",
        "keyword": "契约",
        "added": "p",
        "position": "end"
      },
      {
        "word": "tact",
        "meaning": "诀窍",
        "keyword": "诀窍",
        "added": "t",
        "position": "end"
      },
      {
        "word": "enact",
        "meaning": "设定",
        "keyword": "设定",
        "added": "en",
        "position": "end"
      },
      {
        "word": "exact",
        "meaning": "精确",
        "keyword": "精确",
        "added": "ex",
        "position": "end"
      },
      {
        "word": "fact",
        "meaning": "事实",
        "keyword": "事实",
        "added": "f",
        "position": "end"
      },
      {
        "word": "react",
        "meaning": "反应",
        "keyword": "反应",
        "added": "re",
        "position": "end"
      },
      {
        "word": "impact",
        "meaning": "冲突",
        "keyword": "冲突",
        "added": "imp",
        "position": "end"
      },
      {
        "word": "tract",
        "meaning": "小册",
        "keyword": "小册",
        "added": "tr",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 250,
    "id": "foo",
    "rime": "FOO",
    "title": "傻瓜用脚踩坏晚餐",
    "story": "只有傻瓜才会用脚去踩食物，把好好的晚餐搞砸，变成一堆渣滓。",
    "words": [
      {
        "word": "fool",
        "meaning": "傻瓜",
        "keyword": "傻瓜",
        "added": "l",
        "position": "start"
      },
      {
        "word": "foot",
        "meaning": "脚",
        "keyword": "脚",
        "added": "t",
        "position": "start"
      },
      {
        "word": "food",
        "meaning": "食物",
        "keyword": "食物",
        "added": "d",
        "position": "start"
      },
      {
        "word": "foozle",
        "meaning": "搞砸",
        "keyword": "搞砸",
        "added": "zle",
        "position": "start"
      },
      {
        "word": "foots",
        "meaning": "渣滓",
        "keyword": "渣滓",
        "added": "ts",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 251,
    "id": "ot",
    "rime": "OT",
    "title": "茅屋罐中毒品让人堕落",
    "story": "在茅屋中有人从壶罐中拿出热门的毒品，无论是只尝一点点还是很多，只要少量的毒品就会使人堕落，所以你要勇敢地说：“不要！”",
    "words": [
      {
        "word": "cot",
        "meaning": "茅屋",
        "keyword": "茅屋",
        "added": "c",
        "position": "end"
      },
      {
        "word": "pot",
        "meaning": "壶、罐",
        "keyword": "壶罐",
        "added": "p",
        "position": "end"
      },
      {
        "word": "hot",
        "meaning": "热、热门",
        "keyword": "热门",
        "added": "h",
        "position": "end"
      },
      {
        "word": "dot",
        "meaning": "一点点",
        "keyword": "一点点",
        "added": "d",
        "position": "end"
      },
      {
        "word": "jot",
        "meaning": "少量",
        "keyword": "少量",
        "added": "j",
        "position": "end"
      },
      {
        "word": "lot",
        "meaning": "很多",
        "keyword": "很多",
        "added": "l",
        "position": "end"
      },
      {
        "word": "rot",
        "meaning": "堕落",
        "keyword": "堕落",
        "added": "r",
        "position": "end"
      },
      {
        "word": "not",
        "meaning": "不",
        "keyword": "不要",
        "added": "n",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 252,
    "id": "ust",
    "rime": "UST",
    "title": "贪欲震怒后用谚语治心",
    "story": "为欲望不能满足而震怒时，正好有句谚语可以治疗：“人必须知道贪欲会毁坏我们的心，使心生锈并蒙上灰尘。”",
    "words": [
      {
        "word": "lust",
        "meaning": "贪欲",
        "keyword": "贪欲",
        "added": "l",
        "position": "end"
      },
      {
        "word": "gust",
        "meaning": "震怒",
        "keyword": "震怒",
        "added": "g",
        "position": "end"
      },
      {
        "word": "just",
        "meaning": "正好",
        "keyword": "正好",
        "added": "j",
        "position": "end"
      },
      {
        "word": "must",
        "meaning": "必须",
        "keyword": "必须",
        "added": "m",
        "position": "end"
      },
      {
        "word": "bust",
        "meaning": "毁坏",
        "keyword": "毁坏",
        "added": "b",
        "position": "end"
      },
      {
        "word": "rust",
        "meaning": "锈",
        "keyword": "生锈",
        "added": "r",
        "position": "end"
      },
      {
        "word": "dust",
        "meaning": "灰尘",
        "keyword": "灰尘",
        "added": "d",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 253,
    "id": "eek",
    "rime": "EEK",
    "title": "希腊人每周窥探韭葱",
    "story": "希腊人很温柔，每周都到溪边窥视探索他所种的韭葱到底是长得光滑还是厚脸皮。",
    "words": [
      {
        "word": "greek",
        "meaning": "希腊人",
        "keyword": "希腊人",
        "added": "gr",
        "position": "end"
      },
      {
        "word": "meek",
        "meaning": "温柔",
        "keyword": "温柔",
        "added": "m",
        "position": "end"
      },
      {
        "word": "week",
        "meaning": "一周",
        "keyword": "每周",
        "added": "w",
        "position": "end"
      },
      {
        "word": "creek",
        "meaning": "小溪",
        "keyword": "溪边",
        "added": "cr",
        "position": "end"
      },
      {
        "word": "peek",
        "meaning": "窥视",
        "keyword": "窥视",
        "added": "p",
        "position": "end"
      },
      {
        "word": "seek",
        "meaning": "探索",
        "keyword": "探索",
        "added": "s",
        "position": "end"
      },
      {
        "word": "leek",
        "meaning": "韭葱",
        "keyword": "韭葱",
        "added": "l",
        "position": "end"
      },
      {
        "word": "sleek",
        "meaning": "光滑",
        "keyword": "光滑",
        "added": "sl",
        "position": "end"
      },
      {
        "word": "cheek",
        "meaning": "厚脸皮",
        "keyword": "厚脸皮",
        "added": "ch",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 254,
    "id": "rown",
    "rime": "ROWN",
    "title": "坏消息淹没君主皱眉",
    "story": "如果你能够在听了坏消息之后，让褐色王冠滑落，淹没你的皱眉，才堪称成熟的君主。",
    "words": [
      {
        "word": "brown",
        "meaning": "褐色",
        "keyword": "褐色",
        "added": "b",
        "position": "end"
      },
      {
        "word": "crown",
        "meaning": "王冠",
        "keyword": "王冠",
        "added": "c",
        "position": "end"
      },
      {
        "word": "drown",
        "meaning": "淹没",
        "keyword": "淹没",
        "added": "d",
        "position": "end"
      },
      {
        "word": "frown",
        "meaning": "皱眉",
        "keyword": "皱眉",
        "added": "f",
        "position": "end"
      },
      {
        "word": "grown",
        "meaning": "成熟的",
        "keyword": "成熟",
        "added": "g",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 255,
    "id": "ing",
    "rime": "ING",
    "title": "小鸟歌声换耳环戒指",
    "story": "如果你能像小鸟般振翅摇摆歌唱，若歌声唱得像钟声，国王会奖赐你耳环、戒指；如果你唱得唠叨，则罚你受刺。",
    "words": [
      {
        "word": "wing",
        "meaning": "翅膀",
        "keyword": "振翅",
        "added": "w",
        "position": "end"
      },
      {
        "word": "swing",
        "meaning": "摇摆",
        "keyword": "摇摆",
        "added": "sw",
        "position": "end"
      },
      {
        "word": "sing",
        "meaning": "歌唱",
        "keyword": "歌唱",
        "added": "s",
        "position": "end"
      },
      {
        "word": "ding",
        "meaning": "钟声、唠叨",
        "keyword": "钟声",
        "added": "d",
        "position": "end"
      },
      {
        "word": "king",
        "meaning": "国王",
        "keyword": "国王",
        "added": "k",
        "position": "end"
      },
      {
        "word": "ring",
        "meaning": "戒指、耳环",
        "keyword": "耳环、戒指",
        "added": "r",
        "position": "end"
      },
      {
        "word": "sting",
        "meaning": "刺、螫、叮",
        "keyword": "受刺",
        "added": "st",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 256,
    "id": "amp",
    "rime": "AMP",
    "title": "营地湿气冠军警告抽筋",
    "story": "营地指挥官用扩音器恫吓说：“这里是湿气冠军，你们若不设法增加体内的安培，将因风湿而抽筋。”",
    "words": [
      {
        "word": "amp",
        "meaning": "安培、扩音器",
        "keyword": "扩音器",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "camp",
        "meaning": "营地",
        "keyword": "营地",
        "added": "c",
        "position": "end"
      },
      {
        "word": "ramp",
        "meaning": "恫吓",
        "keyword": "恫吓",
        "added": "r",
        "position": "end"
      },
      {
        "word": "damp",
        "meaning": "湿气",
        "keyword": "湿气",
        "added": "d",
        "position": "end"
      },
      {
        "word": "champ",
        "meaning": "冠军",
        "keyword": "冠军",
        "added": "ch",
        "position": "end"
      },
      {
        "word": "cramp",
        "meaning": "抽筋",
        "keyword": "抽筋",
        "added": "cr",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 257,
    "id": "ger",
    "rime": "GER",
    "title": "瘦虎热心打赌赢食物",
    "story": "一只瘦虎很热心地跟人家打赌，因为它渴望能赢得食物。",
    "words": [
      {
        "word": "meager",
        "meaning": "瘦、贫弱",
        "keyword": "瘦",
        "added": "mea",
        "position": "end"
      },
      {
        "word": "eager",
        "meaning": "热心",
        "keyword": "热心",
        "added": "ea",
        "position": "end"
      },
      {
        "word": "wager",
        "meaning": "打赌",
        "keyword": "打赌",
        "added": "wa",
        "position": "end"
      },
      {
        "word": "tiger",
        "meaning": "老虎",
        "keyword": "虎",
        "added": "ti",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 258,
    "id": "are2",
    "rime": "ARE",
    "title": "付车费分到广场烧陶",
    "story": "是因为目前空置不用的房子太多，只要你付一张车票的钱，就分让出正方形广场的一份，让你烧火制陶。",
    "words": [
      {
        "word": "are",
        "meaning": "是（be的复数形式）",
        "keyword": "是因为",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "fare",
        "meaning": "车费、票价",
        "keyword": "车票",
        "added": "f",
        "position": "end"
      },
      {
        "word": "spare",
        "meaning": "分让",
        "keyword": "分让",
        "added": "sp",
        "position": "end"
      },
      {
        "word": "share",
        "meaning": "合用、一份",
        "keyword": "一份",
        "added": "sh",
        "position": "end"
      },
      {
        "word": "square",
        "meaning": "正方形、广场",
        "keyword": "正方形广场",
        "added": "squ",
        "position": "end"
      },
      {
        "word": "flare",
        "meaning": "燃烧、火焰",
        "keyword": "烧火",
        "added": "fl",
        "position": "end"
      },
      {
        "word": "ware",
        "meaning": "陶器",
        "keyword": "制陶",
        "added": "w",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 259,
    "id": "obby",
    "rime": "OBBY",
    "title": "小马哥在门厅感伤站立",
    "story": "像小马哥一般感伤地站在门厅，是今天年轻人时髦的嗜好。",
    "words": [
      {
        "word": "cobby",
        "meaning": "像小马的",
        "keyword": "像小马哥",
        "added": "c",
        "position": "end"
      },
      {
        "word": "sobby",
        "meaning": "感伤的、湿透的（＝SOPPY）",
        "keyword": "感伤",
        "added": "s",
        "position": "end"
      },
      {
        "word": "lobby",
        "meaning": "门厅",
        "keyword": "门厅",
        "added": "l",
        "position": "end"
      },
      {
        "word": "nobby",
        "meaning": "时髦的、上流人物的",
        "keyword": "时髦",
        "added": "n",
        "position": "end"
      },
      {
        "word": "hobby",
        "meaning": "嗜好",
        "keyword": "嗜好",
        "added": "h",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 260,
    "id": "ind2",
    "rime": "IND",
    "title": "聪明人捆绑同类产品出售",
    "story": "智力好的人会找寻外观、种类相同的产品，捆绑起来一起卖。",
    "words": [
      {
        "word": "mind",
        "meaning": "智力",
        "keyword": "智力好",
        "added": "m",
        "position": "end"
      },
      {
        "word": "find",
        "meaning": "找寻",
        "keyword": "找寻",
        "added": "f",
        "position": "end"
      },
      {
        "word": "rind",
        "meaning": "外观、皮壳",
        "keyword": "外观",
        "added": "r",
        "position": "end"
      },
      {
        "word": "kind",
        "meaning": "种类",
        "keyword": "种类",
        "added": "k",
        "position": "end"
      },
      {
        "word": "bind",
        "meaning": "捆、绑",
        "keyword": "捆绑",
        "added": "b",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 261,
    "id": "plo",
    "rime": "PLO",
    "title": "雏鸠守护土地上的犁",
    "story": "每种鸟有不同的工作，雏鸠的职业就是在小块土地上守护着犁。",
    "words": [
      {
        "word": "ploy",
        "meaning": "工作、职业",
        "keyword": "工作",
        "added": "y",
        "position": "start"
      },
      {
        "word": "plover",
        "meaning": "雏鸠",
        "keyword": "雏鸠",
        "added": "ver",
        "position": "start"
      },
      {
        "word": "plot",
        "meaning": "阴谋、小块土地",
        "keyword": "小块土地",
        "added": "t",
        "position": "start"
      },
      {
        "word": "plow",
        "meaning": "犁",
        "keyword": "犁",
        "added": "w",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 262,
    "id": "pain",
    "rime": "PAIN",
    "title": "画家改行开油漆店",
    "story": "画家的痛苦是绘画赚不到钱，只好改行卖油漆，开油漆店。",
    "words": [
      {
        "word": "pain",
        "meaning": "痛苦",
        "keyword": "痛苦",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "painter",
        "meaning": "画家、油漆匠",
        "keyword": "画家",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "painting",
        "meaning": "绘画",
        "keyword": "绘画",
        "added": "ting",
        "position": "start"
      },
      {
        "word": "paint",
        "meaning": "颜料、油漆",
        "keyword": "油漆",
        "added": "t",
        "position": "start"
      },
      {
        "word": "painty",
        "meaning": "颜料的",
        "keyword": "油漆",
        "added": "ty",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 263,
    "id": "bul",
    "rime": "BUL",
    "title": "公牛队乔丹像子弹飞跃",
    "story": "公牛队的乔丹身躯魁梧，头像电灯泡，飞跃时像子弹，是NBA里身价暴涨的霸王。",
    "words": [
      {
        "word": "bull",
        "meaning": "公牛",
        "keyword": "公牛队",
        "added": "l",
        "position": "start"
      },
      {
        "word": "bulk",
        "meaning": "身躯",
        "keyword": "身躯魁梧",
        "added": "k",
        "position": "start"
      },
      {
        "word": "bulb",
        "meaning": "电灯泡",
        "keyword": "电灯泡",
        "added": "b",
        "position": "start"
      },
      {
        "word": "bullet",
        "meaning": "子弹",
        "keyword": "像子弹",
        "added": "let",
        "position": "start"
      },
      {
        "word": "bulge",
        "meaning": "鼓胀、暴涨",
        "keyword": "暴涨",
        "added": "ge",
        "position": "start"
      },
      {
        "word": "bully",
        "meaning": "霸王",
        "keyword": "霸王",
        "added": "ly",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 264,
    "id": "us",
    "rime": "US",
    "title": "加减车钱后决定步行",
    "story": "想搭巴士，不过加加减减口袋里的钱之后只能说：“让我们走路吧。”",
    "words": [
      {
        "word": "us",
        "meaning": "我们（宾格）",
        "keyword": "我们",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "bus",
        "meaning": "巴士",
        "keyword": "巴士",
        "added": "b",
        "position": "end"
      },
      {
        "word": "plus",
        "meaning": "加",
        "keyword": "加加",
        "added": "pl",
        "position": "end"
      },
      {
        "word": "minus",
        "meaning": "减",
        "keyword": "减减",
        "added": "min",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 265,
    "id": "mis",
    "rime": "MIS",
    "title": "雾中先生误认女主人",
    "story": "在雾中犯错误是难免的，但是先生把女主人错看成情妇，误用了言词可就不得了。",
    "words": [
      {
        "word": "mist",
        "meaning": "雾",
        "keyword": "雾中",
        "added": "t",
        "position": "start"
      },
      {
        "word": "mistake",
        "meaning": "错误",
        "keyword": "错误",
        "added": "take",
        "position": "start"
      },
      {
        "word": "mister",
        "meaning": "先生",
        "keyword": "先生",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "mistress",
        "meaning": "女主人、情妇",
        "keyword": "女主人",
        "added": "tress",
        "position": "start"
      },
      {
        "word": "misuse",
        "meaning": "误用",
        "keyword": "误用",
        "added": "use",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 266,
    "id": "fi",
    "rime": "FI",
    "title": "鱼用鳍争夺五颗无花果",
    "story": "鱼说：“我只有鳍而没有拳头，不适合划拳搏斗，最后只好决定结束争夺这五颗无花果。”",
    "words": [
      {
        "word": "fish",
        "meaning": "鱼",
        "keyword": "鱼",
        "added": "sh",
        "position": "start"
      },
      {
        "word": "fin",
        "meaning": "鳍",
        "keyword": "鳍",
        "added": "n",
        "position": "start"
      },
      {
        "word": "fist",
        "meaning": "拳头",
        "keyword": "拳头",
        "added": "st",
        "position": "start"
      },
      {
        "word": "fit",
        "meaning": "适合",
        "keyword": "不适合",
        "added": "t",
        "position": "start"
      },
      {
        "word": "fight",
        "meaning": "搏斗",
        "keyword": "搏斗",
        "added": "ght",
        "position": "start"
      },
      {
        "word": "final",
        "meaning": "最后",
        "keyword": "最后",
        "added": "nal",
        "position": "start"
      },
      {
        "word": "fix",
        "meaning": "决定",
        "keyword": "决定",
        "added": "x",
        "position": "start"
      },
      {
        "word": "finish",
        "meaning": "结束",
        "keyword": "结束",
        "added": "nish",
        "position": "start"
      },
      {
        "word": "five",
        "meaning": "五",
        "keyword": "五颗",
        "added": "ve",
        "position": "start"
      },
      {
        "word": "fig",
        "meaning": "无花果",
        "keyword": "无花果",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 267,
    "id": "ight3",
    "rime": "IGHT",
    "title": "猫头鹰白天戴紧太阳镜飞海湾",
    "story": "猫头鹰妈妈对小猫头鹰说：“白天光线太亮，若不系紧太阳眼镜调控视力，而到海湾飞翔，会吓到妈妈。”",
    "words": [
      {
        "word": "light",
        "meaning": "光、轻的",
        "keyword": "光线",
        "added": "l",
        "position": "end"
      },
      {
        "word": "bright",
        "meaning": "亮的",
        "keyword": "太亮",
        "added": "br",
        "position": "end"
      },
      {
        "word": "tight",
        "meaning": "紧的",
        "keyword": "系紧",
        "added": "t",
        "position": "end"
      },
      {
        "word": "sight",
        "meaning": "视力、视觉",
        "keyword": "视力",
        "added": "s",
        "position": "end"
      },
      {
        "word": "bight",
        "meaning": "海湾",
        "keyword": "海湾",
        "added": "b",
        "position": "end"
      },
      {
        "word": "flight",
        "meaning": "飞翔",
        "keyword": "飞翔",
        "added": "fl",
        "position": "end"
      },
      {
        "word": "fright",
        "meaning": "吓唬、恐怖",
        "keyword": "吓到",
        "added": "fr",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 268,
    "id": "fil",
    "rime": "FIL",
    "title": "偷档案过滤猥亵胶卷照片",
    "story": "她去偷窃F档案，为的是要过滤一下装满着猥亵胶卷的档案中自己的照片。",
    "words": [
      {
        "word": "filch",
        "meaning": "偷窃",
        "keyword": "偷窃",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "file",
        "meaning": "档案",
        "keyword": "档案",
        "added": "e",
        "position": "start"
      },
      {
        "word": "filter",
        "meaning": "过滤、走漏",
        "keyword": "过滤",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "fill",
        "meaning": "装满",
        "keyword": "装满",
        "added": "l",
        "position": "start"
      },
      {
        "word": "filth",
        "meaning": "猥亵、污秽",
        "keyword": "猥亵",
        "added": "th",
        "position": "start"
      },
      {
        "word": "film",
        "meaning": "胶卷",
        "keyword": "胶卷",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 269,
    "id": "co",
    "rime": "CO",
    "title": "公鸡穿外衣喝木炭咖啡看法典",
    "story": "公鸡在寒冷的夜晚穿上外衣到餐厅，花一个硬币要杯木炭烧的咖啡，边喝边看法典。",
    "words": [
      {
        "word": "cock",
        "meaning": "公鸡",
        "keyword": "公鸡",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "cold",
        "meaning": "寒冷",
        "keyword": "寒冷",
        "added": "ld",
        "position": "start"
      },
      {
        "word": "coat",
        "meaning": "外衣",
        "keyword": "外衣",
        "added": "at",
        "position": "start"
      },
      {
        "word": "coin",
        "meaning": "硬币",
        "keyword": "硬币",
        "added": "in",
        "position": "start"
      },
      {
        "word": "coal",
        "meaning": "煤、木炭",
        "keyword": "木炭",
        "added": "al",
        "position": "start"
      },
      {
        "word": "coffee",
        "meaning": "咖啡",
        "keyword": "咖啡",
        "added": "ffee",
        "position": "start"
      },
      {
        "word": "code",
        "meaning": "法典",
        "keyword": "法典",
        "added": "de",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 270,
    "id": "shee",
    "rime": "SHEE",
    "title": "床单上的透明光泽母羊图案",
    "story": "母羊说：“抱歉！我纯粹只是印在一条有光泽而透明的床单上的图案，而不是真的羊。”",
    "words": [
      {
        "word": "sheen",
        "meaning": "光泽",
        "keyword": "光泽",
        "added": "n",
        "position": "start"
      },
      {
        "word": "sheer",
        "meaning": "透明的、纯粹的",
        "keyword": "透明",
        "added": "r",
        "position": "start"
      },
      {
        "word": "sheet",
        "meaning": "床单",
        "keyword": "床单",
        "added": "t",
        "position": "start"
      },
      {
        "word": "sheep",
        "meaning": "羊",
        "keyword": "母羊",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 271,
    "id": "cho",
    "rime": "CHO",
    "title": "妈妈逼女儿在唱诗与巧克力间选择",
    "story": "妈妈对女儿说：“你可以选择唱诗班或合唱团，如果你选择巧克力，我就闷死你或劈死你。”",
    "words": [
      {
        "word": "choice",
        "meaning": "选择",
        "keyword": "选择",
        "added": "ice",
        "position": "start"
      },
      {
        "word": "choir",
        "meaning": "唱诗班",
        "keyword": "唱诗班",
        "added": "ir",
        "position": "start"
      },
      {
        "word": "chorus",
        "meaning": "合唱团",
        "keyword": "合唱团",
        "added": "rus",
        "position": "start"
      },
      {
        "word": "chocolate",
        "meaning": "巧克力",
        "keyword": "巧克力",
        "added": "colate",
        "position": "start"
      },
      {
        "word": "chop",
        "meaning": "剁、切、劈",
        "keyword": "劈死",
        "added": "p",
        "position": "start"
      },
      {
        "word": "choke",
        "meaning": "闷死、窒息",
        "keyword": "闷死",
        "added": "ke",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 272,
    "id": "bea",
    "rime": "BEA",
    "title": "美丽熊在海滩串豆念珠",
    "story": "一只美丽的熊在海滩上看到了许多豆子，于是把它们串成一串念珠。",
    "words": [
      {
        "word": "beauty",
        "meaning": "美丽",
        "keyword": "美丽",
        "added": "uty",
        "position": "start"
      },
      {
        "word": "bear",
        "meaning": "熊",
        "keyword": "熊",
        "added": "r",
        "position": "start"
      },
      {
        "word": "beach",
        "meaning": "海滩",
        "keyword": "海滩",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "bean",
        "meaning": "豆",
        "keyword": "豆子",
        "added": "n",
        "position": "start"
      },
      {
        "word": "bead",
        "meaning": "珠子、念珠",
        "keyword": "念珠",
        "added": "d",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 273,
    "id": "be",
    "rime": "BE",
    "title": "蜜蜂打赌输翅膀成为乞丐",
    "story": "从前有一只蜜蜂因为打赌而输掉了翅膀，于是成为到处乞讨的乞丐。",
    "words": [
      {
        "word": "be",
        "meaning": "成为",
        "keyword": "成为",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "before",
        "meaning": "从前",
        "keyword": "从前",
        "added": "fore",
        "position": "start"
      },
      {
        "word": "bee",
        "meaning": "蜜蜂",
        "keyword": "蜜蜂",
        "added": "e",
        "position": "start"
      },
      {
        "word": "bet",
        "meaning": "打赌",
        "keyword": "打赌",
        "added": "t",
        "position": "start"
      },
      {
        "word": "beg",
        "meaning": "乞讨、请求",
        "keyword": "乞讨",
        "added": "g",
        "position": "start"
      },
      {
        "word": "beggar",
        "meaning": "乞丐",
        "keyword": "乞丐",
        "added": "ggar",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 274,
    "id": "fir",
    "rime": "FIR",
    "title": "港湾第一结实冷杉向火认输",
    "story": "火焰对冷杉说：“你的确是港湾第一酷、第一结实的树，但不论是谁，凡是遇到了火都得服输。”",
    "words": [
      {
        "word": "fir",
        "meaning": "冷杉",
        "keyword": "冷杉",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "fire",
        "meaning": "火、火焰",
        "keyword": "火焰",
        "added": "e",
        "position": "start"
      },
      {
        "word": "firth",
        "meaning": "港湾、入海口",
        "keyword": "港湾",
        "added": "th",
        "position": "start"
      },
      {
        "word": "first",
        "meaning": "第一",
        "keyword": "第一",
        "added": "st",
        "position": "start"
      },
      {
        "word": "firm",
        "meaning": "结实",
        "keyword": "结实",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 275,
    "id": "che",
    "rime": "CHE",
    "title": "用假支票买便宜樱桃乳酪",
    "story": "樱桃、乳酪都是便宜的东西，所以别用假支票去欺骗诈取，万一被查出来不就红了脸颊吗？",
    "words": [
      {
        "word": "cherry",
        "meaning": "樱桃",
        "keyword": "樱桃",
        "added": "rry",
        "position": "start"
      },
      {
        "word": "cheese",
        "meaning": "乳酪",
        "keyword": "乳酪",
        "added": "ese",
        "position": "start"
      },
      {
        "word": "cheap",
        "meaning": "便宜",
        "keyword": "便宜",
        "added": "ap",
        "position": "start"
      },
      {
        "word": "check",
        "meaning": "支票、核对",
        "keyword": "支票",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "cheat",
        "meaning": "欺骗、诈取",
        "keyword": "欺骗诈取",
        "added": "at",
        "position": "start"
      },
      {
        "word": "cheek",
        "meaning": "脸颊",
        "keyword": "脸颊",
        "added": "ek",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 276,
    "id": "ca",
    "rime": "CA",
    "title": "加拿大餐厅保持镇静勿拍照呼叫",
    "story": "在加拿大的餐厅里用餐要保持镇静，千万不要用照相机拍照，也不要用电话呼叫别人。",
    "words": [
      {
        "word": "canada",
        "meaning": "加拿大",
        "keyword": "加拿大",
        "added": "nada",
        "position": "start"
      },
      {
        "word": "cafe",
        "meaning": "餐厅",
        "keyword": "餐厅",
        "added": "fe",
        "position": "start"
      },
      {
        "word": "calm",
        "meaning": "镇静",
        "keyword": "镇静",
        "added": "lm",
        "position": "start"
      },
      {
        "word": "camera",
        "meaning": "照相机",
        "keyword": "照相机",
        "added": "mera",
        "position": "start"
      },
      {
        "word": "call",
        "meaning": "呼、叫",
        "keyword": "呼叫",
        "added": "ll",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 277,
    "id": "cha",
    "rime": "CHA",
    "title": "闲谈从外表魅力说到纯洁慈悲",
    "story": "她们喋喋不休地闲谈，内容从追求外表的魅力到内心纯洁的布施、慈悲。",
    "words": [
      {
        "word": "chatter",
        "meaning": "喋喋不休",
        "keyword": "喋喋不休",
        "added": "tter",
        "position": "start"
      },
      {
        "word": "chat",
        "meaning": "闲谈",
        "keyword": "闲谈",
        "added": "t",
        "position": "start"
      },
      {
        "word": "chase",
        "meaning": "追求",
        "keyword": "追求",
        "added": "se",
        "position": "start"
      },
      {
        "word": "charm",
        "meaning": "魅力",
        "keyword": "魅力",
        "added": "rm",
        "position": "start"
      },
      {
        "word": "chaste",
        "meaning": "贞洁、纯洁",
        "keyword": "纯洁",
        "added": "ste",
        "position": "start"
      },
      {
        "word": "charity",
        "meaning": "布施、慈悲",
        "keyword": "布施、慈悲",
        "added": "rity",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 278,
    "id": "cha2",
    "rime": "CHA",
    "title": "警长给偷椅粉笔者改过机会",
    "story": "警长说：“你这家伙连续偷了椅子和粉笔，现在给你机会来改变这一切，你可以付费，否则你将被追捕。”",
    "words": [
      {
        "word": "chap",
        "meaning": "家伙",
        "keyword": "家伙",
        "added": "p",
        "position": "start"
      },
      {
        "word": "chain",
        "meaning": "链子、连续",
        "keyword": "连续",
        "added": "in",
        "position": "start"
      },
      {
        "word": "chair",
        "meaning": "椅子",
        "keyword": "椅子",
        "added": "ir",
        "position": "start"
      },
      {
        "word": "chalk",
        "meaning": "粉笔",
        "keyword": "粉笔",
        "added": "lk",
        "position": "start"
      },
      {
        "word": "chance",
        "meaning": "机会",
        "keyword": "机会",
        "added": "nce",
        "position": "start"
      },
      {
        "word": "change",
        "meaning": "改变",
        "keyword": "改变",
        "added": "nge",
        "position": "start"
      },
      {
        "word": "charge",
        "meaning": "费用",
        "keyword": "付费",
        "added": "rge",
        "position": "start"
      },
      {
        "word": "chase",
        "meaning": "追捕",
        "keyword": "追捕",
        "added": "se",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 279,
    "id": "chi",
    "rime": "CHI",
    "title": "芝加哥小孩打碎瓷器变寒栗鸡",
    "story": "在芝加哥千万别让小孩去摸中国瓷器，否则打成碎片时你就会变成一只寒栗的鸡。",
    "words": [
      {
        "word": "chicago",
        "meaning": "芝加哥",
        "keyword": "芝加哥",
        "added": "cago",
        "position": "start"
      },
      {
        "word": "child",
        "meaning": "小孩",
        "keyword": "小孩",
        "added": "ld",
        "position": "start"
      },
      {
        "word": "china",
        "meaning": "中国、瓷器",
        "keyword": "瓷器",
        "added": "na",
        "position": "start"
      },
      {
        "word": "chip",
        "meaning": "碎片",
        "keyword": "碎片",
        "added": "p",
        "position": "start"
      },
      {
        "word": "chill",
        "meaning": "寒栗",
        "keyword": "寒栗",
        "added": "ll",
        "position": "start"
      },
      {
        "word": "chicken",
        "meaning": "鸡",
        "keyword": "鸡",
        "added": "cken",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 280,
    "id": "lao",
    "rime": "LAO",
    "title": "老子关心住在老挝的老挝人",
    "story": "老子是个对宗教、政治不关心的人，可是他却很关心住在老挝的老挝人。",
    "words": [
      {
        "word": "laodicean",
        "meaning": "对宗教、政治不热心的人",
        "keyword": "不关心",
        "added": "dicean",
        "position": "start"
      },
      {
        "word": "laotse",
        "meaning": "老子",
        "keyword": "老子",
        "added": "tse",
        "position": "start"
      },
      {
        "word": "laos",
        "meaning": "老挝",
        "keyword": "老挝",
        "added": "s",
        "position": "start"
      },
      {
        "word": "lao",
        "meaning": "老挝人",
        "keyword": "老挝人",
        "added": "ø",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 281,
    "id": "pal",
    "rime": "PAL",
    "title": "巴利语伙伴在棕榈宫殿厌倦人生",
    "story": "我有个会巴利语的伙伴，他住在有很多棕榈树的宫殿，他有双苍白的手掌……有一天他告诉我，中风让他厌倦人生。",
    "words": [
      {
        "word": "pal",
        "meaning": "伙伴",
        "keyword": "伙伴",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "pali",
        "meaning": "巴利语",
        "keyword": "巴利语",
        "added": "i",
        "position": "start"
      },
      {
        "word": "palm",
        "meaning": "棕榈树、手掌",
        "keyword": "棕榈树",
        "added": "m",
        "position": "start"
      },
      {
        "word": "palace",
        "meaning": "宫殿",
        "keyword": "宫殿",
        "added": "ace",
        "position": "start"
      },
      {
        "word": "pale",
        "meaning": "苍白",
        "keyword": "苍白",
        "added": "e",
        "position": "start"
      },
      {
        "word": "pall",
        "meaning": "腻烦、厌倦",
        "keyword": "厌倦人生",
        "added": "l",
        "position": "start"
      },
      {
        "word": "palsy",
        "meaning": "中风",
        "keyword": "中风",
        "added": "sy",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 282,
    "id": "sea",
    "rime": "SEA",
    "title": "四季海豹寻找看海座位",
    "story": "一年四季在海边经常可以看到海豹，它好像正在寻找看海的座位。",
    "words": [
      {
        "word": "sea",
        "meaning": "海",
        "keyword": "海",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "season",
        "meaning": "四季",
        "keyword": "四季",
        "added": "son",
        "position": "start"
      },
      {
        "word": "seaside",
        "meaning": "海边",
        "keyword": "海边",
        "added": "side",
        "position": "start"
      },
      {
        "word": "seal",
        "meaning": "海豹",
        "keyword": "海豹",
        "added": "l",
        "position": "start"
      },
      {
        "word": "search",
        "meaning": "寻找",
        "keyword": "寻找",
        "added": "rch",
        "position": "start"
      },
      {
        "word": "seat",
        "meaning": "座位",
        "keyword": "座位",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 283,
    "id": "du",
    "rime": "DU",
    "title": "荷兰公爵黄昏安置野鸭",
    "story": "荷兰的公爵有义务在黄昏之时为野鸭安排适当的住所。",
    "words": [
      {
        "word": "dutch",
        "meaning": "荷兰的",
        "keyword": "荷兰",
        "added": "tch",
        "position": "start"
      },
      {
        "word": "duke",
        "meaning": "公爵",
        "keyword": "公爵",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "duty",
        "meaning": "义务",
        "keyword": "义务",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "dusk",
        "meaning": "黄昏",
        "keyword": "黄昏",
        "added": "sk",
        "position": "start"
      },
      {
        "word": "duck",
        "meaning": "野鸭",
        "keyword": "野鸭",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "due",
        "meaning": "适当的",
        "keyword": "适当",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 284,
    "id": "ang",
    "rime": "ANG",
    "title": "天使因超人抢救生意而生气",
    "story": "以天使的角度来看，超人到处抢救人的生意，难怪她发怒生气。",
    "words": [
      {
        "word": "angel",
        "meaning": "天使",
        "keyword": "天使",
        "added": "el",
        "position": "start"
      },
      {
        "word": "angle",
        "meaning": "角度",
        "keyword": "角度",
        "added": "le",
        "position": "start"
      },
      {
        "word": "anger",
        "meaning": "怒、怒气",
        "keyword": "发怒",
        "added": "er",
        "position": "start"
      },
      {
        "word": "angry",
        "meaning": "生气",
        "keyword": "生气",
        "added": "ry",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 285,
    "id": "class",
    "rime": "CLASS",
    "title": "同班同学在教室给经典作品分类",
    "story": "同班同学在教室里正为古典文学的经典作品分类。",
    "words": [
      {
        "word": "class",
        "meaning": "班级",
        "keyword": "班",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "classmate",
        "meaning": "同班同学",
        "keyword": "同学",
        "added": "mate",
        "position": "start"
      },
      {
        "word": "classroom",
        "meaning": "教室",
        "keyword": "教室",
        "added": "room",
        "position": "start"
      },
      {
        "word": "classic",
        "meaning": "古典、经典作品",
        "keyword": "经典作品",
        "added": "ic",
        "position": "start"
      },
      {
        "word": "classify",
        "meaning": "分类",
        "keyword": "分类",
        "added": "ify",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 286,
    "id": "sho",
    "rime": "SHO",
    "title": "岸边鞋店上演短短射击大战",
    "story": "岸边卖鞋子的店有时候会特别演出短短的射击大战。",
    "words": [
      {
        "word": "shore",
        "meaning": "岸",
        "keyword": "岸边",
        "added": "re",
        "position": "start"
      },
      {
        "word": "shoe",
        "meaning": "鞋",
        "keyword": "鞋子",
        "added": "e",
        "position": "start"
      },
      {
        "word": "shop",
        "meaning": "店",
        "keyword": "店",
        "added": "p",
        "position": "start"
      },
      {
        "word": "show",
        "meaning": "演出、展示",
        "keyword": "演出",
        "added": "w",
        "position": "start"
      },
      {
        "word": "short",
        "meaning": "短的",
        "keyword": "短短",
        "added": "rt",
        "position": "start"
      },
      {
        "word": "shot",
        "meaning": "射击",
        "keyword": "射击",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 287,
    "id": "or",
    "rime": "OR",
    "title": "轨道商业可向果园订橘矿石风琴",
    "story": "上轨道的商业讲究服务品质，你可以向果园订购柑橘或矿石，甚至订购风琴也成。",
    "words": [
      {
        "word": "or",
        "meaning": "或",
        "keyword": "或",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "orbit",
        "meaning": "轨道",
        "keyword": "轨道",
        "added": "bit",
        "position": "start"
      },
      {
        "word": "orchard",
        "meaning": "果园",
        "keyword": "果园",
        "added": "chard",
        "position": "start"
      },
      {
        "word": "order",
        "meaning": "订购",
        "keyword": "订购",
        "added": "der",
        "position": "start"
      },
      {
        "word": "orange",
        "meaning": "柑橘",
        "keyword": "柑橘",
        "added": "ange",
        "position": "start"
      },
      {
        "word": "ore",
        "meaning": "矿石",
        "keyword": "矿石",
        "added": "e",
        "position": "start"
      },
      {
        "word": "organ",
        "meaning": "风琴",
        "keyword": "风琴",
        "added": "gan",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 288,
    "id": "ear3",
    "rime": "EAR",
    "title": "早听见主劝伯爵别贪地球",
    "story": "伯爵的听觉很好，他很早就听到主对他说：“就算赚得整个地球，将来也只能将它留在尘世。”",
    "words": [
      {
        "word": "ear",
        "meaning": "耳、听觉",
        "keyword": "听觉",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "earl",
        "meaning": "伯爵",
        "keyword": "伯爵",
        "added": "l",
        "position": "start"
      },
      {
        "word": "early",
        "meaning": "早",
        "keyword": "很早",
        "added": "ly",
        "position": "start"
      },
      {
        "word": "earth",
        "meaning": "地球",
        "keyword": "地球",
        "added": "th",
        "position": "start"
      },
      {
        "word": "earthly",
        "meaning": "尘世",
        "keyword": "尘世",
        "added": "thly",
        "position": "start"
      },
      {
        "word": "earn",
        "meaning": "赚",
        "keyword": "赚得",
        "added": "n",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 289,
    "id": "ea2",
    "rime": "EA",
    "title": "东部老鹰复活节吃舒适大餐",
    "story": "东部的每一只老鹰都渴望能在复活节吃顿舒适的大餐。",
    "words": [
      {
        "word": "east",
        "meaning": "东部",
        "keyword": "东部",
        "added": "st",
        "position": "start"
      },
      {
        "word": "each",
        "meaning": "每一",
        "keyword": "每一只",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "eagle",
        "meaning": "鹰",
        "keyword": "老鹰",
        "added": "gle",
        "position": "start"
      },
      {
        "word": "eager",
        "meaning": "渴望",
        "keyword": "渴望",
        "added": "ger",
        "position": "start"
      },
      {
        "word": "easter",
        "meaning": "复活节",
        "keyword": "复活节",
        "added": "ster",
        "position": "start"
      },
      {
        "word": "eat",
        "meaning": "吃",
        "keyword": "吃顿",
        "added": "t",
        "position": "start"
      },
      {
        "word": "easy",
        "meaning": "容易、舒适的",
        "keyword": "舒适",
        "added": "sy",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 290,
    "id": "trad",
    "rime": "TRAD",
    "title": "传统商人因商业贸易遭毁谤",
    "story": "传统的商人常为了贸易的商业行为而遭到毁谤。",
    "words": [
      {
        "word": "trad",
        "meaning": "传统的",
        "keyword": "传统",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "trade",
        "meaning": "贸易",
        "keyword": "贸易",
        "added": "e",
        "position": "start"
      },
      {
        "word": "trader",
        "meaning": "商人",
        "keyword": "商人",
        "added": "er",
        "position": "start"
      },
      {
        "word": "tradal",
        "meaning": "商业的",
        "keyword": "商业",
        "added": "al",
        "position": "start"
      },
      {
        "word": "traduce",
        "meaning": "毁谤",
        "keyword": "毁谤",
        "added": "uce",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 291,
    "id": "miss",
    "rime": "MISS",
    "title": "小姐因传教士不见而错过导弹任务",
    "story": "因为传教士不见了，所以小姐错过了她的导弹发射任务。",
    "words": [
      {
        "word": "miss",
        "meaning": "小姐、错过",
        "keyword": "小姐",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "missionary",
        "meaning": "传教士",
        "keyword": "传教士",
        "added": "ionary",
        "position": "start"
      },
      {
        "word": "missing",
        "meaning": "欠缺、不见",
        "keyword": "不见",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "missile",
        "meaning": "导弹",
        "keyword": "导弹",
        "added": "ile",
        "position": "start"
      },
      {
        "word": "mission",
        "meaning": "派遣、任务",
        "keyword": "任务",
        "added": "ion",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 292,
    "id": "pen",
    "rime": "PEN",
    "title": "打开笔偶然长出白杨",
    "story": "打开笔，一棵白杨由笔心生长出来……这种事有时候会偶然发生。",
    "words": [
      {
        "word": "pen",
        "meaning": "笔",
        "keyword": "笔",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "open",
        "meaning": "打开",
        "keyword": "打开",
        "added": "o",
        "position": "end"
      },
      {
        "word": "aspen",
        "meaning": "白杨",
        "keyword": "白杨",
        "added": "as",
        "position": "end"
      },
      {
        "word": "happen",
        "meaning": "偶然发生、碰巧",
        "keyword": "偶然发生",
        "added": "hap",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 293,
    "id": "min",
    "rime": "MIN",
    "title": "明朝因海盗威胁减少灯塔",
    "story": "明朝时，由于海盗的威胁很猖狂，以致朝廷被迫将灯塔减至最低数量，使之成为历代中最少的。",
    "words": [
      {
        "word": "ming",
        "meaning": "明朝",
        "keyword": "明朝",
        "added": "g",
        "position": "start"
      },
      {
        "word": "minacity",
        "meaning": "威胁性",
        "keyword": "威胁",
        "added": "acity",
        "position": "start"
      },
      {
        "word": "minar",
        "meaning": "灯塔",
        "keyword": "灯塔",
        "added": "ar",
        "position": "start"
      },
      {
        "word": "minimal",
        "meaning": "最小的、最少的",
        "keyword": "最少",
        "added": "imal",
        "position": "start"
      },
      {
        "word": "minimize",
        "meaning": "减至最低数量",
        "keyword": "减至最低数量",
        "added": "imize",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 294,
    "id": "sil",
    "rime": "SIL",
    "title": "沉默蚕吐丝却没赚银币",
    "story": "蚕沉默无声地吐丝让人织成丝绸，自己没赚到银币，还因此失去生命，真愚蠢。",
    "words": [
      {
        "word": "silent",
        "meaning": "沉默",
        "keyword": "沉默无声",
        "added": "ent",
        "position": "start"
      },
      {
        "word": "silk",
        "meaning": "丝绸",
        "keyword": "丝绸",
        "added": "k",
        "position": "start"
      },
      {
        "word": "silly",
        "meaning": "愚蠢",
        "keyword": "愚蠢",
        "added": "ly",
        "position": "start"
      },
      {
        "word": "silver",
        "meaning": "银子、银币",
        "keyword": "银币",
        "added": "ver",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 295,
    "id": "fo",
    "rime": "FO",
    "title": "狐狸雾中喝四杯泡沫茶付家禽",
    "story": "狐狸喜欢在雾中喝四杯泡沫红茶，没钱付账，改付一只家禽代替。",
    "words": [
      {
        "word": "fox",
        "meaning": "狐",
        "keyword": "狐狸",
        "added": "x",
        "position": "start"
      },
      {
        "word": "fond",
        "meaning": "喜欢",
        "keyword": "喜欢",
        "added": "nd",
        "position": "start"
      },
      {
        "word": "fog",
        "meaning": "雾",
        "keyword": "雾中",
        "added": "g",
        "position": "start"
      },
      {
        "word": "four",
        "meaning": "四",
        "keyword": "四杯",
        "added": "ur",
        "position": "start"
      },
      {
        "word": "foam",
        "meaning": "泡沫",
        "keyword": "泡沫",
        "added": "am",
        "position": "start"
      },
      {
        "word": "fowl",
        "meaning": "家禽",
        "keyword": "家禽",
        "added": "wl",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 296,
    "id": "par",
    "rime": "PAR",
    "title": "牧师筛选信徒参加告别宴会",
    "story": "牧师从教区的信徒中挑选一部分信众参加告别宴会，标准不够的信徒则被挡开了。",
    "words": [
      {
        "word": "par",
        "meaning": "标准",
        "keyword": "标准",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "parson",
        "meaning": "牧师",
        "keyword": "牧师",
        "added": "son",
        "position": "start"
      },
      {
        "word": "parish",
        "meaning": "教区",
        "keyword": "教区",
        "added": "ish",
        "position": "start"
      },
      {
        "word": "part",
        "meaning": "一部分",
        "keyword": "一部分",
        "added": "t",
        "position": "start"
      },
      {
        "word": "party",
        "meaning": "参加者、宴会",
        "keyword": "宴会",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "parting",
        "meaning": "告别",
        "keyword": "告别",
        "added": "ting",
        "position": "start"
      },
      {
        "word": "parry",
        "meaning": "招架、挡开",
        "keyword": "挡开",
        "added": "ry",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 297,
    "id": "mam",
    "rime": "MAM",
    "title": "妈妈跳曼波害怕非洲毒蛇",
    "story": "妈，也就是妈妈，是哺乳动物，最爱跳的是曼波舞，最害怕的是非洲毒蛇。",
    "words": [
      {
        "word": "mam",
        "meaning": "妈",
        "keyword": "妈",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "mama",
        "meaning": "妈妈",
        "keyword": "妈妈",
        "added": "a",
        "position": "start"
      },
      {
        "word": "mammal",
        "meaning": "哺乳动物",
        "keyword": "哺乳动物",
        "added": "mal",
        "position": "start"
      },
      {
        "word": "mambo",
        "meaning": "曼波舞",
        "keyword": "曼波舞",
        "added": "bo",
        "position": "start"
      },
      {
        "word": "mamba",
        "meaning": "非洲毒蛇",
        "keyword": "非洲毒蛇",
        "added": "ba",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 298,
    "id": "rou",
    "rime": "ROU",
    "title": "放荡者数卢布改买乳酪面粉糊",
    "story": "放荡者粗略地估计了一下身上的卢布，钱不够给老婆买胭脂，只好买乳酪面粉糊。",
    "words": [
      {
        "word": "roue",
        "meaning": "放荡者",
        "keyword": "放荡者",
        "added": "e",
        "position": "start"
      },
      {
        "word": "rough",
        "meaning": "粗略",
        "keyword": "粗略",
        "added": "gh",
        "position": "start"
      },
      {
        "word": "rouble",
        "meaning": "卢布",
        "keyword": "卢布",
        "added": "ble",
        "position": "start"
      },
      {
        "word": "rouge",
        "meaning": "胭脂",
        "keyword": "胭脂",
        "added": "ge",
        "position": "start"
      },
      {
        "word": "roux",
        "meaning": "乳酪面粉糊",
        "keyword": "乳酪面粉糊",
        "added": "x",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 299,
    "id": "wor",
    "rime": "WOR",
    "title": "穿旧衣喝麦芽汁写词担心世界更坏",
    "story": "他身穿旧衣，边喝麦芽汁边做好写单词的工作，心里还担心世界变得更坏的问题。",
    "words": [
      {
        "word": "wore",
        "meaning": "穿过",
        "keyword": "身穿",
        "added": "e",
        "position": "start"
      },
      {
        "word": "worn",
        "meaning": "用旧",
        "keyword": "旧衣",
        "added": "n",
        "position": "start"
      },
      {
        "word": "wort",
        "meaning": "麦芽汁",
        "keyword": "麦芽汁",
        "added": "t",
        "position": "start"
      },
      {
        "word": "word",
        "meaning": "单词",
        "keyword": "单词",
        "added": "d",
        "position": "start"
      },
      {
        "word": "work",
        "meaning": "工作",
        "keyword": "工作",
        "added": "k",
        "position": "start"
      },
      {
        "word": "worry",
        "meaning": "担心",
        "keyword": "担心",
        "added": "ry",
        "position": "start"
      },
      {
        "word": "world",
        "meaning": "世界",
        "keyword": "世界",
        "added": "ld",
        "position": "start"
      },
      {
        "word": "worse",
        "meaning": "更坏",
        "keyword": "更坏",
        "added": "se",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 300,
    "id": "si",
    "rime": "SI",
    "title": "锡克教徒落日在暹罗山腰唱六次",
    "story": "锡克教徒在落日之时坐在暹罗山腰唱歌六次，希望湿婆神治好他的病。",
    "words": [
      {
        "word": "sikh",
        "meaning": "锡克教徒",
        "keyword": "锡克教徒",
        "added": "kh",
        "position": "start"
      },
      {
        "word": "sink",
        "meaning": "日落",
        "keyword": "落日",
        "added": "nk",
        "position": "start"
      },
      {
        "word": "sit",
        "meaning": "坐",
        "keyword": "坐",
        "added": "t",
        "position": "start"
      },
      {
        "word": "siam",
        "meaning": "暹罗",
        "keyword": "暹罗",
        "added": "am",
        "position": "start"
      },
      {
        "word": "sing",
        "meaning": "唱歌",
        "keyword": "唱歌",
        "added": "ng",
        "position": "start"
      },
      {
        "word": "six",
        "meaning": "六",
        "keyword": "六次",
        "added": "x",
        "position": "start"
      },
      {
        "word": "siva",
        "meaning": "湿婆",
        "keyword": "湿婆神",
        "added": "va",
        "position": "start"
      },
      {
        "word": "sick",
        "meaning": "病",
        "keyword": "病",
        "added": "ck",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 301,
    "id": "cas",
    "rime": "CAS",
    "title": "印度阶级城堡下偶然捡现金箱",
    "story": "古来印度世袭的阶级有四级，有钱的人很有钱，穷的人很穷；穷人走在富人的城堡下，偶然会捡到富人随意抛出的现金箱。",
    "words": [
      {
        "word": "caste",
        "meaning": "印度世袭的阶级",
        "keyword": "阶级",
        "added": "te",
        "position": "start"
      },
      {
        "word": "castle",
        "meaning": "城堡",
        "keyword": "城堡",
        "added": "tle",
        "position": "start"
      },
      {
        "word": "casual",
        "meaning": "偶然、随意",
        "keyword": "偶然",
        "added": "ual",
        "position": "start"
      },
      {
        "word": "cast",
        "meaning": "掷、抛",
        "keyword": "抛出",
        "added": "t",
        "position": "start"
      },
      {
        "word": "cash",
        "meaning": "现金",
        "keyword": "现金",
        "added": "h",
        "position": "start"
      },
      {
        "word": "case",
        "meaning": "箱、实例",
        "keyword": "箱",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 302,
    "id": "yar",
    "rime": "YAR",
    "title": "狐尾猴吹牛跳十万八码",
    "story": "狐尾猴吹牛说：“我行动敏捷，具有跳出108000码的实力。”",
    "words": [
      {
        "word": "yarke",
        "meaning": "狐尾猴",
        "keyword": "狐尾猴",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "yarn",
        "meaning": "吹牛、线",
        "keyword": "吹牛",
        "added": "n",
        "position": "start"
      },
      {
        "word": "yare",
        "meaning": "敏捷",
        "keyword": "敏捷",
        "added": "e",
        "position": "start"
      },
      {
        "word": "yard",
        "meaning": "码、院子",
        "keyword": "108000码",
        "added": "d",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 303,
    "id": "squ",
    "rime": "SQU",
    "title": "乌贼蹲方岩被爆竹吓喷墨",
    "story": "乌贼蹲在正方形岩石上，被爆竹炸得呱呱叫，并喷出墨汁。",
    "words": [
      {
        "word": "squid",
        "meaning": "乌贼",
        "keyword": "乌贼",
        "added": "id",
        "position": "start"
      },
      {
        "word": "squat",
        "meaning": "蹲",
        "keyword": "蹲",
        "added": "at",
        "position": "start"
      },
      {
        "word": "square",
        "meaning": "正方形",
        "keyword": "正方形岩石",
        "added": "are",
        "position": "start"
      },
      {
        "word": "squib",
        "meaning": "爆竹",
        "keyword": "爆竹",
        "added": "ib",
        "position": "start"
      },
      {
        "word": "squawk",
        "meaning": "呱呱叫",
        "keyword": "呱呱叫",
        "added": "awk",
        "position": "start"
      },
      {
        "word": "squirt",
        "meaning": "喷出",
        "keyword": "喷出",
        "added": "irt",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 304,
    "id": "roo",
    "rime": "ROO",
    "title": "罗斯福祖先栖鸟窝养雄鸡",
    "story": "罗斯福的祖先从前曾栖于鸟窝养雄鸡。",
    "words": [
      {
        "word": "roosevelt",
        "meaning": "罗斯福",
        "keyword": "罗斯福",
        "added": "sevelt",
        "position": "start"
      },
      {
        "word": "root",
        "meaning": "根、祖先",
        "keyword": "祖先",
        "added": "t",
        "position": "start"
      },
      {
        "word": "roost",
        "meaning": "栖于、鸟窝",
        "keyword": "鸟窝",
        "added": "st",
        "position": "start"
      },
      {
        "word": "rooster",
        "meaning": "雄鸡",
        "keyword": "雄鸡",
        "added": "ster",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 305,
    "id": "du2",
    "rime": "DU",
    "title": "蠢人打鸭又重击沙丘满身尘土",
    "story": "以为泡在水里静止不动的鸭子一打就中的是蠢人，后来又生气地重击沙丘，弄得一身都是尘土……更是双倍的蠢。",
    "words": [
      {
        "word": "duck",
        "meaning": "鸭子",
        "keyword": "鸭子",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "dunk",
        "meaning": "泡、浸",
        "keyword": "泡在水里",
        "added": "nk",
        "position": "start"
      },
      {
        "word": "dupe",
        "meaning": "蠢人、上当者",
        "keyword": "蠢人",
        "added": "pe",
        "position": "start"
      },
      {
        "word": "dunt",
        "meaning": "重击",
        "keyword": "重击",
        "added": "nt",
        "position": "start"
      },
      {
        "word": "dune",
        "meaning": "沙丘",
        "keyword": "沙丘",
        "added": "ne",
        "position": "start"
      },
      {
        "word": "dust",
        "meaning": "尘土",
        "keyword": "尘土",
        "added": "st",
        "position": "start"
      },
      {
        "word": "duple",
        "meaning": "双倍",
        "keyword": "双倍",
        "added": "ple",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 306,
    "id": "mon",
    "rime": "MON",
    "title": "修道士每月首个星期一给猴钱",
    "story": "修道士会在每个月的第一个星期一给猴子钱，叫它去买生活必需品。",
    "words": [
      {
        "word": "monk",
        "meaning": "修道士、僧侣",
        "keyword": "修道士",
        "added": "k",
        "position": "start"
      },
      {
        "word": "month",
        "meaning": "月",
        "keyword": "每个月",
        "added": "th",
        "position": "start"
      },
      {
        "word": "monday",
        "meaning": "星期一",
        "keyword": "星期一",
        "added": "day",
        "position": "start"
      },
      {
        "word": "money",
        "meaning": "钱",
        "keyword": "钱",
        "added": "ey",
        "position": "start"
      },
      {
        "word": "monkey",
        "meaning": "猴子",
        "keyword": "猴子",
        "added": "key",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 307,
    "id": "pen2",
    "rime": "PEN",
    "title": "忧虑企鹅用一便士买到铅笔",
    "story": "忧虑的企鹅拿着一便士去买笔，买到的是一支铅笔。",
    "words": [
      {
        "word": "pen",
        "meaning": "笔",
        "keyword": "笔",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "pensive",
        "meaning": "沉思的、忧虑的",
        "keyword": "忧虑",
        "added": "sive",
        "position": "start"
      },
      {
        "word": "penguin",
        "meaning": "企鹅",
        "keyword": "企鹅",
        "added": "guin",
        "position": "start"
      },
      {
        "word": "penny",
        "meaning": "便士",
        "keyword": "一便士",
        "added": "ny",
        "position": "start"
      },
      {
        "word": "pencil",
        "meaning": "铅笔",
        "keyword": "铅笔",
        "added": "cil",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 308,
    "id": "ph",
    "rime": "PH",
    "title": "误吃夹竹桃后痰多妄想脸难看",
    "story": "如果不小心吃到夹竹桃，除了痰多之外还会产生妄想，脸上的表情会很难看。",
    "words": [
      {
        "word": "phlox",
        "meaning": "夹竹桃",
        "keyword": "夹竹桃",
        "added": "lox",
        "position": "start"
      },
      {
        "word": "phlegm",
        "meaning": "痰",
        "keyword": "痰多",
        "added": "legm",
        "position": "start"
      },
      {
        "word": "phantom",
        "meaning": "妄想、幻象",
        "keyword": "妄想",
        "added": "antom",
        "position": "start"
      },
      {
        "word": "phiz",
        "meaning": "脸、表情",
        "keyword": "表情",
        "added": "iz",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 309,
    "id": "pea",
    "rime": "PEA",
    "title": "梨桃豌豆山顶发现珍珠失和平",
    "story": "有一座出产梨、桃和豌豆的山顶本来很平静，自从发现盛产珍珠之后就再也不和平了。",
    "words": [
      {
        "word": "pea",
        "meaning": "豌豆",
        "keyword": "豌豆",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "peach",
        "meaning": "桃",
        "keyword": "桃",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "pear",
        "meaning": "梨",
        "keyword": "梨",
        "added": "r",
        "position": "start"
      },
      {
        "word": "peak",
        "meaning": "山顶、尖端",
        "keyword": "山顶",
        "added": "k",
        "position": "start"
      },
      {
        "word": "peace",
        "meaning": "和平、平静",
        "keyword": "平静",
        "added": "ce",
        "position": "start"
      },
      {
        "word": "pearl",
        "meaning": "珍珠",
        "keyword": "珍珠",
        "added": "rl",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 310,
    "id": "sin",
    "rime": "SIN",
    "title": "奇异不祥歌曲让爱情沉没",
    "story": "他唱了一支奇异而不祥的歌，乃至爱情沉没，单身了一辈子。",
    "words": [
      {
        "word": "sinister",
        "meaning": "不祥的",
        "keyword": "不祥",
        "added": "ister",
        "position": "start"
      },
      {
        "word": "sing",
        "meaning": "唱、啼",
        "keyword": "唱",
        "added": "g",
        "position": "start"
      },
      {
        "word": "singular",
        "meaning": "奇异",
        "keyword": "奇异",
        "added": "gular",
        "position": "start"
      },
      {
        "word": "sink",
        "meaning": "沉没",
        "keyword": "沉没",
        "added": "k",
        "position": "start"
      },
      {
        "word": "single",
        "meaning": "单身",
        "keyword": "单身",
        "added": "gle",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 311,
    "id": "for",
    "rime": "FOR",
    "title": "人到四十外形取决于岔路或节制",
    "story": "从前有个说法：“人到40岁，他的外形就无关乎上帝，而是由于自己走岔路或是节制。”",
    "words": [
      {
        "word": "for",
        "meaning": "由于、关于",
        "keyword": "由于",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "former",
        "meaning": "从前的",
        "keyword": "从前",
        "added": "mer",
        "position": "start"
      },
      {
        "word": "forty",
        "meaning": "四十",
        "keyword": "40岁",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "form",
        "meaning": "形状、外形",
        "keyword": "外形",
        "added": "m",
        "position": "start"
      },
      {
        "word": "fork",
        "meaning": "叉、岔路",
        "keyword": "岔路",
        "added": "k",
        "position": "start"
      },
      {
        "word": "forbear",
        "meaning": "节制、忍耐",
        "keyword": "节制",
        "added": "bear",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 312,
    "id": "trac",
    "rime": "TRAC",
    "title": "追踪者循地域足迹找到古遗迹",
    "story": "追踪者能根据某一地域的少许足迹，找到古老的遗迹。",
    "words": [
      {
        "word": "tracker",
        "meaning": "追踪者",
        "keyword": "追踪者",
        "added": "ker",
        "position": "start"
      },
      {
        "word": "tract",
        "meaning": "地域",
        "keyword": "地域",
        "added": "t",
        "position": "start"
      },
      {
        "word": "track",
        "meaning": "足迹",
        "keyword": "足迹",
        "added": "k",
        "position": "start"
      },
      {
        "word": "trace",
        "meaning": "遗迹",
        "keyword": "遗迹",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 313,
    "id": "lan",
    "rime": "LAN",
    "title": "地中海隼警告陆地比天空危险",
    "story": "地中海隼说：“陆地有枪、矛、车道和阳台，比天空还危险！”请用文字记下这段老鸟的智慧语言。",
    "words": [
      {
        "word": "lanner",
        "meaning": "地中海隼",
        "keyword": "地中海隼",
        "added": "ner",
        "position": "start"
      },
      {
        "word": "land",
        "meaning": "陆地",
        "keyword": "陆地",
        "added": "d",
        "position": "start"
      },
      {
        "word": "lance",
        "meaning": "枪、矛、鱼叉",
        "keyword": "枪、矛",
        "added": "ce",
        "position": "start"
      },
      {
        "word": "lane",
        "meaning": "道、小路、车道",
        "keyword": "车道",
        "added": "e",
        "position": "start"
      },
      {
        "word": "language",
        "meaning": "语言文字",
        "keyword": "文字",
        "added": "guage",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 314,
    "id": "all",
    "rime": "ALL",
    "title": "主妇联盟禁止色情引诱进入巷弄",
    "story": "主妇联盟主张打击色情引诱：“所有的色情都不准许进入住宅区的巷弄里！”",
    "words": [
      {
        "word": "ally",
        "meaning": "联盟",
        "keyword": "联盟",
        "added": "y",
        "position": "start"
      },
      {
        "word": "allege",
        "meaning": "主张",
        "keyword": "主张",
        "added": "ege",
        "position": "start"
      },
      {
        "word": "all",
        "meaning": "所有的",
        "keyword": "所有的",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "alley",
        "meaning": "巷、弄",
        "keyword": "巷弄",
        "added": "ey",
        "position": "start"
      },
      {
        "word": "allow",
        "meaning": "准许",
        "keyword": "不准许",
        "added": "ow",
        "position": "start"
      },
      {
        "word": "allure",
        "meaning": "诱惑",
        "keyword": "引诱",
        "added": "ure",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 315,
    "id": "chea",
    "rime": "CHEA",
    "title": "贬低判断力会被便宜骗局欺骗",
    "story": "除非你自己贬低自己的判断力，否则骗子很难用便宜来诈骗你！",
    "words": [
      {
        "word": "cheapen",
        "meaning": "减价、贬低",
        "keyword": "贬低",
        "added": "pen",
        "position": "start"
      },
      {
        "word": "cheater",
        "meaning": "骗子",
        "keyword": "骗子",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "cheat",
        "meaning": "诈骗",
        "keyword": "诈骗",
        "added": "t",
        "position": "start"
      },
      {
        "word": "cheap",
        "meaning": "便宜",
        "keyword": "便宜",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 316,
    "id": "bin",
    "rime": "BIN",
    "title": "孪生兄弟箱中狂闹玩宾果",
    "story": "孪生兄弟在箱子里狂闹玩宾果！",
    "words": [
      {
        "word": "bin",
        "meaning": "箱子、仓",
        "keyword": "箱子",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "binal",
        "meaning": "孪生",
        "keyword": "孪生兄弟",
        "added": "al",
        "position": "start"
      },
      {
        "word": "binge",
        "meaning": "狂闹",
        "keyword": "狂闹",
        "added": "ge",
        "position": "start"
      },
      {
        "word": "bingo",
        "meaning": "宾果",
        "keyword": "宾果",
        "added": "go",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 317,
    "id": "qu",
    "rime": "QU",
    "title": "魁北克码头调查古怪女人身份",
    "story": "在魁北克的码头发现了古怪的女人，经过半天的调查、质问，还是分不清她是女王还是无耻的女人。",
    "words": [
      {
        "word": "quebec",
        "meaning": "魁北克",
        "keyword": "魁北克",
        "added": "ebec",
        "position": "start"
      },
      {
        "word": "quay",
        "meaning": "码头",
        "keyword": "码头",
        "added": "ay",
        "position": "start"
      },
      {
        "word": "queer",
        "meaning": "古怪的",
        "keyword": "古怪",
        "added": "eer",
        "position": "start"
      },
      {
        "word": "quest",
        "meaning": "探索、调查",
        "keyword": "调查",
        "added": "est",
        "position": "start"
      },
      {
        "word": "query",
        "meaning": "质问",
        "keyword": "质问",
        "added": "ery",
        "position": "start"
      },
      {
        "word": "queen",
        "meaning": "女王",
        "keyword": "女王",
        "added": "een",
        "position": "start"
      },
      {
        "word": "quean",
        "meaning": "无耻女人",
        "keyword": "无耻的女人",
        "added": "ean",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 318,
    "id": "butter",
    "rime": "BUTTER",
    "title": "蝴蝶被拆成奶油苍蝇",
    "story": "如果蝴蝶可以翻译成奶油苍蝇，那么金凤花就叫奶油杯子，白胡桃树就叫奶油坚果。",
    "words": [
      {
        "word": "butter",
        "meaning": "奶油",
        "keyword": "奶油",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "butterfly",
        "meaning": "蝴蝶",
        "keyword": "蝴蝶",
        "added": "fly",
        "position": "start"
      },
      {
        "word": "buttercup",
        "meaning": "金凤花",
        "keyword": "金凤花",
        "added": "cup",
        "position": "start"
      },
      {
        "word": "butternut",
        "meaning": "白胡桃树",
        "keyword": "白胡桃树",
        "added": "nut",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 319,
    "id": "rea",
    "rime": "REA",
    "title": "刻苦读书为到达哈佛",
    "story": "他刻苦地读书，背后的真实理由是预备到达哈佛。",
    "words": [
      {
        "word": "read",
        "meaning": "读",
        "keyword": "读书",
        "added": "d",
        "position": "start"
      },
      {
        "word": "rear",
        "meaning": "后面",
        "keyword": "背后",
        "added": "r",
        "position": "start"
      },
      {
        "word": "real",
        "meaning": "真实",
        "keyword": "真实",
        "added": "l",
        "position": "start"
      },
      {
        "word": "reason",
        "meaning": "理由",
        "keyword": "理由",
        "added": "son",
        "position": "start"
      },
      {
        "word": "ready",
        "meaning": "预备",
        "keyword": "预备",
        "added": "dy",
        "position": "start"
      },
      {
        "word": "reach",
        "meaning": "到达",
        "keyword": "到达",
        "added": "ch",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 320,
    "id": "on2",
    "rime": "ON",
    "title": "安大略湖牌承担国界责任",
    "story": "安大略湖分属于美国、加拿大，在湖中唯一承担国界划分责任的是湖中的一块牌。",
    "words": [
      {
        "word": "on",
        "meaning": "在……上、属于",
        "keyword": "属于",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "ontario",
        "meaning": "安大略湖",
        "keyword": "安大略湖",
        "added": "tario",
        "position": "start"
      },
      {
        "word": "onus",
        "meaning": "责任",
        "keyword": "责任",
        "added": "us",
        "position": "start"
      },
      {
        "word": "only",
        "meaning": "唯一的",
        "keyword": "唯一",
        "added": "ly",
        "position": "start"
      },
      {
        "word": "one",
        "meaning": "一",
        "keyword": "一块牌",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 321,
    "id": "bon",
    "rime": "BON",
    "title": "瘦和尚到波恩领奖金当当响",
    "story": "一个瘦和尚到波恩领取漂亮的奖金，当当响。",
    "words": [
      {
        "word": "bony",
        "meaning": "瘦削的",
        "keyword": "瘦",
        "added": "y",
        "position": "start"
      },
      {
        "word": "bonze",
        "meaning": "和尚",
        "keyword": "和尚",
        "added": "ze",
        "position": "start"
      },
      {
        "word": "bonn",
        "meaning": "波恩",
        "keyword": "波恩",
        "added": "n",
        "position": "start"
      },
      {
        "word": "bonny",
        "meaning": "漂亮的",
        "keyword": "漂亮",
        "added": "ny",
        "position": "start"
      },
      {
        "word": "bonus",
        "meaning": "奖金",
        "keyword": "奖金",
        "added": "us",
        "position": "start"
      },
      {
        "word": "bong",
        "meaning": "当当响",
        "keyword": "当当响",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 322,
    "id": "min2",
    "rime": "MIN",
    "title": "未成年轻佻女子吃薄荷想貂皮",
    "story": "未成年的轻佻女子嘴里吃着薄荷，身上穿着迷你服，头脑里还想着一件貂皮大衣。",
    "words": [
      {
        "word": "minor",
        "meaning": "未成年",
        "keyword": "未成年",
        "added": "or",
        "position": "start"
      },
      {
        "word": "minx",
        "meaning": "轻佻女子",
        "keyword": "轻佻女子",
        "added": "x",
        "position": "start"
      },
      {
        "word": "mint",
        "meaning": "薄荷",
        "keyword": "薄荷",
        "added": "t",
        "position": "start"
      },
      {
        "word": "mini",
        "meaning": "迷你",
        "keyword": "迷你服",
        "added": "i",
        "position": "start"
      },
      {
        "word": "mind",
        "meaning": "头脑、想法",
        "keyword": "头脑里",
        "added": "d",
        "position": "start"
      },
      {
        "word": "mink",
        "meaning": "貂皮",
        "keyword": "貂皮大衣",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 323,
    "id": "ba",
    "rime": "BA",
    "title": "爸爸用腌猪肉制饵换朗姆糕",
    "story": "爸爸对婴儿说：“我袋子里的腌猪肉是要烘烤制成钓鱼的饵，你乖乖别吵，我就带你去吃巴比伦的朗姆糕。”",
    "words": [
      {
        "word": "baby",
        "meaning": "婴儿",
        "keyword": "婴儿",
        "added": "by",
        "position": "start"
      },
      {
        "word": "bag",
        "meaning": "袋",
        "keyword": "袋子",
        "added": "g",
        "position": "start"
      },
      {
        "word": "bacon",
        "meaning": "腌猪肉",
        "keyword": "腌猪肉",
        "added": "con",
        "position": "start"
      },
      {
        "word": "bake",
        "meaning": "烘烤",
        "keyword": "烘烤",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "bait",
        "meaning": "饵",
        "keyword": "饵",
        "added": "it",
        "position": "start"
      },
      {
        "word": "babel",
        "meaning": "巴比伦",
        "keyword": "巴比伦",
        "added": "bel",
        "position": "start"
      },
      {
        "word": "baba",
        "meaning": "朗姆糕",
        "keyword": "朗姆糕",
        "added": "ba",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 324,
    "id": "swi",
    "rime": "SWI",
    "title": "瑞士人游泳后别立刻开摇摆电闸",
    "story": "每个瑞士人都知道，游泳后不要立刻去开摇摆中的电开关。",
    "words": [
      {
        "word": "swiss",
        "meaning": "瑞士",
        "keyword": "瑞士人",
        "added": "ss",
        "position": "start"
      },
      {
        "word": "swim",
        "meaning": "游泳",
        "keyword": "游泳",
        "added": "m",
        "position": "start"
      },
      {
        "word": "swift",
        "meaning": "立刻、迅速的",
        "keyword": "立刻",
        "added": "ft",
        "position": "start"
      },
      {
        "word": "swing",
        "meaning": "摇摆、吊",
        "keyword": "摇摆",
        "added": "ng",
        "position": "start"
      },
      {
        "word": "switch",
        "meaning": "电开关、电闸",
        "keyword": "电开关",
        "added": "tch",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 325,
    "id": "trac2",
    "rime": "TRAC",
    "title": "职业追踪者描摹猎物全部行踪",
    "story": "职业追踪者只需要循着一点痕迹，就能描摹出猎物在一定地域里的一切行踪。",
    "words": [
      {
        "word": "tracer",
        "meaning": "追踪者",
        "keyword": "追踪者",
        "added": "er",
        "position": "start"
      },
      {
        "word": "trace",
        "meaning": "痕迹",
        "keyword": "痕迹",
        "added": "e",
        "position": "start"
      },
      {
        "word": "tracing",
        "meaning": "描摹、追踪",
        "keyword": "描摹",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "tract",
        "meaning": "地域",
        "keyword": "地域",
        "added": "t",
        "position": "start"
      },
      {
        "word": "track",
        "meaning": "行踪、轨道",
        "keyword": "行踪",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 326,
    "id": "scal",
    "rime": "SCAL",
    "title": "疥癣者比较烫伤与剥头皮等级",
    "story": "疥癣者对烫伤者说：“以颜面伤残的等级而言，我们还好过被剥了头皮的人。”",
    "words": [
      {
        "word": "scall",
        "meaning": "疥癣、头皮屑",
        "keyword": "疥癣者",
        "added": "l",
        "position": "start"
      },
      {
        "word": "scald",
        "meaning": "烫伤",
        "keyword": "烫伤者",
        "added": "d",
        "position": "start"
      },
      {
        "word": "scale",
        "meaning": "等级、尺度",
        "keyword": "等级",
        "added": "e",
        "position": "start"
      },
      {
        "word": "scalp",
        "meaning": "剥头皮",
        "keyword": "剥了头皮",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 327,
    "id": "pok",
    "rime": "POK",
    "title": "冷漠夫妻用扑克探索智商",
    "story": "由于夫妻双方都冷漠得令人发闷，所以先生提议玩扑克游戏来探索对方的智商问题。",
    "words": [
      {
        "word": "pokey",
        "meaning": "冷漠",
        "keyword": "冷漠",
        "added": "ey",
        "position": "start"
      },
      {
        "word": "poky",
        "meaning": "发闷",
        "keyword": "发闷",
        "added": "y",
        "position": "start"
      },
      {
        "word": "poker",
        "meaning": "扑克",
        "keyword": "扑克",
        "added": "er",
        "position": "start"
      },
      {
        "word": "poke",
        "meaning": "探索",
        "keyword": "探索",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 328,
    "id": "soa",
    "rime": "SOA",
    "title": "肥皂剧收视猛涨成肥皂吸金利器",
    "story": "由于肥皂剧的收视率高涨，竟成为剧中广告肥皂的吸金利器。",
    "words": [
      {
        "word": "soapopera",
        "meaning": "肥皂剧",
        "keyword": "肥皂剧",
        "added": "popera",
        "position": "start"
      },
      {
        "word": "soar",
        "meaning": "猛涨",
        "keyword": "高涨",
        "added": "r",
        "position": "start"
      },
      {
        "word": "soap",
        "meaning": "肥皂",
        "keyword": "肥皂",
        "added": "p",
        "position": "start"
      },
      {
        "word": "soak",
        "meaning": "吸、浸泡",
        "keyword": "吸金",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 329,
    "id": "ci",
    "rime": "CI",
    "title": "市民引用公民权利请马戏团",
    "story": "市民有权引用公民的权利，要求城市定时邀请马戏团来表演。",
    "words": [
      {
        "word": "citizen",
        "meaning": "市民",
        "keyword": "市民",
        "added": "tizen",
        "position": "start"
      },
      {
        "word": "civil",
        "meaning": "公民的",
        "keyword": "公民的权利",
        "added": "vil",
        "position": "start"
      },
      {
        "word": "cite",
        "meaning": "引用",
        "keyword": "引用",
        "added": "te",
        "position": "start"
      },
      {
        "word": "city",
        "meaning": "城市",
        "keyword": "城市",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "circus",
        "meaning": "马戏（杂技）团",
        "keyword": "马戏团",
        "added": "rcus",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 330,
    "id": "ba2",
    "rime": "BA",
    "title": "海湾浴室洗澡提防坏蝙蝠",
    "story": "在海湾的浴室洗澡时，可千万要小心提防坏蝙蝠。",
    "words": [
      {
        "word": "bay",
        "meaning": "海湾",
        "keyword": "海湾",
        "added": "y",
        "position": "start"
      },
      {
        "word": "bath",
        "meaning": "浴室",
        "keyword": "浴室",
        "added": "th",
        "position": "start"
      },
      {
        "word": "bathe",
        "meaning": "洗澡",
        "keyword": "洗澡",
        "added": "the",
        "position": "start"
      },
      {
        "word": "bad",
        "meaning": "坏",
        "keyword": "坏",
        "added": "d",
        "position": "start"
      },
      {
        "word": "bat",
        "meaning": "蝙蝠",
        "keyword": "蝙蝠",
        "added": "t",
        "position": "start"
      }
    ]
  }
];

const colors = ['#466B8A', '#B85C45', '#6D7750', '#815D86', '#3D7C73', '#A85E54', '#53718A', '#8B6A45', '#3F7A68', '#6C6291'];
const illustratedIds = new Set([
  'ta', 'nat', 'are3', 'ast', 'ant', 'ue', 'lue', 'gra', 'act', 'foo',
  'ot', 'ust', 'eek', 'rown', 'ing', 'amp', 'ger', 'are2', 'obby', 'ind2',
]);

export const familiesBatch8: WordFamily[] = seeds.map((seed, index) => {
  const positions = new Set(seed.words.map((word) => word.position));
  const rimePosition = positions.size > 1 ? 'mixed' : seed.words[0]?.position;
  const positionTip = rimePosition === 'start'
    ? `共同部分 ${seed.rime} 放在词首，再接上不同字母`
    : rimePosition === 'mixed'
      ? `共同部分 ${seed.rime} 有时在词首、有时在词尾，逐行观察组合位置`
      : `把共同部分 ${seed.rime} 放在词尾，换上不同词首`;

  return {
    id: seed.id,
    rime: seed.rime,
    rimePosition,
    title: seed.title,
    subtitle: seed.story,
    scene: illustratedIds.has(seed.id) ? `/scenes/${seed.id}.png` : '',
    story: segmentStory(seed.story, seed.words),
    onsets: seed.words.map((word) => word.added),
    words: seed.words.map((word) => ({
      word: word.word,
      display: word.word.toUpperCase(),
      cn: word.meaning,
      onset: word.added,
      rimePosition: word.position,
    })),
    tip: `${positionTip}，一口气记住这一组 ${seed.words.length} 个单词。`,
    color: colors[index % colors.length],
  };
});
