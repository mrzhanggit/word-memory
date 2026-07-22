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
    "sourcePage": 331,
    "id": "by",
    "rime": "BY",
    "title": "拜伦闲谈拜占庭与电脑数位",
    "story": "拜伦是个诗人，他的副业是闲谈拜占庭的谚语和电脑数位。",
    "words": [
      {
        "word": "byron",
        "meaning": "拜伦",
        "keyword": "拜伦",
        "added": "ron",
        "position": "start"
      },
      {
        "word": "bywork",
        "meaning": "副业",
        "keyword": "副业",
        "added": "work",
        "position": "start"
      },
      {
        "word": "byzantium",
        "meaning": "拜占庭",
        "keyword": "拜占庭",
        "added": "zantium",
        "position": "start"
      },
      {
        "word": "byword",
        "meaning": "谚语",
        "keyword": "谚语",
        "added": "word",
        "position": "start"
      },
      {
        "word": "bytalk",
        "meaning": "闲谈",
        "keyword": "闲谈",
        "added": "talk",
        "position": "start"
      },
      {
        "word": "byte",
        "meaning": "数位",
        "keyword": "数位",
        "added": "te",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 332,
    "id": "qua",
    "rime": "QUA",
    "title": "江湖医生劝四胞胎离开码头",
    "story": "江湖医生对四胞胎之一的无毛雏鸟说：“你们应离开码头，回到沼泽区去。”",
    "words": [
      {
        "word": "quack",
        "meaning": "江湖医生",
        "keyword": "江湖医生",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "quad",
        "meaning": "四胞胎之一",
        "keyword": "四胞胎之一",
        "added": "d",
        "position": "start"
      },
      {
        "word": "quay",
        "meaning": "码头",
        "keyword": "码头",
        "added": "y",
        "position": "start"
      },
      {
        "word": "quag",
        "meaning": "沼泽",
        "keyword": "沼泽区",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 333,
    "id": "par2",
    "rime": "PAR",
    "title": "伞兵在巴黎公园抢救幼雏",
    "story": "伞兵空降到巴黎公园的停车场，抢救豹口中的幼雏。",
    "words": [
      {
        "word": "para",
        "meaning": "伞兵",
        "keyword": "伞兵",
        "added": "a",
        "position": "start"
      },
      {
        "word": "paris",
        "meaning": "巴黎",
        "keyword": "巴黎",
        "added": "is",
        "position": "start"
      },
      {
        "word": "park",
        "meaning": "公园",
        "keyword": "公园",
        "added": "k",
        "position": "start"
      },
      {
        "word": "parking",
        "meaning": "停车场",
        "keyword": "停车场",
        "added": "king",
        "position": "start"
      },
      {
        "word": "pard",
        "meaning": "豹",
        "keyword": "豹口",
        "added": "d",
        "position": "start"
      },
      {
        "word": "parr",
        "meaning": "幼雏",
        "keyword": "幼雏",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 334,
    "id": "quar",
    "rime": "QUAR",
    "title": "石英四重奏的一刻钟奖品",
    "story": "石英四重奏在皇宫演奏了一刻钟，得到了四本四开本的书和四夸脱水。",
    "words": [
      {
        "word": "quartz",
        "meaning": "石英",
        "keyword": "石英",
        "added": "tz",
        "position": "start"
      },
      {
        "word": "quartette",
        "meaning": "四重奏",
        "keyword": "四重奏",
        "added": "tette",
        "position": "start"
      },
      {
        "word": "quarter",
        "meaning": "一刻钟",
        "keyword": "一刻钟",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "quarto",
        "meaning": "四开本",
        "keyword": "四开本",
        "added": "to",
        "position": "start"
      },
      {
        "word": "quart",
        "meaning": "夸脱",
        "keyword": "四夸脱水",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 335,
    "id": "sca",
    "rime": "SCA",
    "title": "扫描罂粟寻找海洛因",
    "story": "搜索海洛因，光是扫描罂粟花的花茎是不够的，还应该扫描花朵才行。",
    "words": [
      {
        "word": "scag",
        "meaning": "海洛因",
        "keyword": "海洛因",
        "added": "g",
        "position": "start"
      },
      {
        "word": "scan",
        "meaning": "扫描",
        "keyword": "扫描",
        "added": "n",
        "position": "start"
      },
      {
        "word": "scape",
        "meaning": "花茎",
        "keyword": "花茎",
        "added": "pe",
        "position": "start"
      },
      {
        "word": "scant",
        "meaning": "不够的",
        "keyword": "不够的",
        "added": "nt",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 336,
    "id": "scar",
    "rime": "SCAR",
    "title": "有疤先生披围巾吓人",
    "story": "有S的CAR车子就是疤，有疤的S先生是个吓人者，他披着围巾在暗街惊吓别人。",
    "words": [
      {
        "word": "scar",
        "meaning": "疤",
        "keyword": "疤",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "scarer",
        "meaning": "吓人者",
        "keyword": "吓人者",
        "added": "er",
        "position": "start"
      },
      {
        "word": "scarf",
        "meaning": "围巾、领带",
        "keyword": "围巾",
        "added": "f",
        "position": "start"
      },
      {
        "word": "scare",
        "meaning": "惊吓",
        "keyword": "惊吓",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 337,
    "id": "trans",
    "rime": "TRANS",
    "title": "海关刺穿货物防止调包",
    "story": "运输过境时，海关人员会刺穿货物来检验，以防货物被调包和转换。",
    "words": [
      {
        "word": "transsit",
        "meaning": "过境",
        "keyword": "过境",
        "added": "sit",
        "position": "start"
      },
      {
        "word": "transport",
        "meaning": "运输",
        "keyword": "运输",
        "added": "port",
        "position": "start"
      },
      {
        "word": "transfix",
        "meaning": "刺穿",
        "keyword": "刺穿",
        "added": "fix",
        "position": "start"
      },
      {
        "word": "transpose",
        "meaning": "调换",
        "keyword": "调包",
        "added": "pose",
        "position": "start"
      },
      {
        "word": "transfer",
        "meaning": "转换",
        "keyword": "转换",
        "added": "fer",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 338,
    "id": "car",
    "rime": "CAR",
    "title": "船长只运漫画纸板箱",
    "story": "船长说：“我当然知道运胡萝卜、地毯等船货的利润比运一百克拉钻石要少，但我要运的是装漫画书的纸板箱，而不运走私货。”",
    "words": [
      {
        "word": "carrot",
        "meaning": "胡萝卜",
        "keyword": "胡萝卜",
        "added": "rot",
        "position": "start"
      },
      {
        "word": "carpet",
        "meaning": "地毯",
        "keyword": "地毯",
        "added": "pet",
        "position": "start"
      },
      {
        "word": "cargo",
        "meaning": "船货",
        "keyword": "船货",
        "added": "go",
        "position": "start"
      },
      {
        "word": "carat",
        "meaning": "克拉",
        "keyword": "一百克拉钻石",
        "added": "at",
        "position": "start"
      },
      {
        "word": "cartoon",
        "meaning": "漫画、卡通",
        "keyword": "漫画书",
        "added": "toon",
        "position": "start"
      },
      {
        "word": "carton",
        "meaning": "纸板箱",
        "keyword": "纸板箱",
        "added": "ton",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 339,
    "id": "ool3",
    "rime": "OOL",
    "title": "祖母梦话提醒带羊毛线轴上学",
    "story": "祖母睡觉时常说的梦话是：“记得要带羊毛线和线轴，今天学校要上裁缝课。”",
    "words": [
      {
        "word": "drool",
        "meaning": "梦话",
        "keyword": "梦话",
        "added": "dr",
        "position": "end"
      },
      {
        "word": "wool",
        "meaning": "羊毛",
        "keyword": "羊毛线",
        "added": "w",
        "position": "end"
      },
      {
        "word": "spool",
        "meaning": "线轴",
        "keyword": "线轴",
        "added": "sp",
        "position": "end"
      },
      {
        "word": "school",
        "meaning": "学校",
        "keyword": "学校",
        "added": "sch",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 340,
    "id": "abb",
    "rime": "ABB",
    "title": "方丈穿粗羊毛听阿巴合唱团",
    "story": "身穿粗羊毛衫的方丈虽是个僧侣，但修行之余最喜欢阿巴合唱团。",
    "words": [
      {
        "word": "abb",
        "meaning": "粗羊毛",
        "keyword": "粗羊毛衫",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "abbot",
        "meaning": "方丈、修道院长",
        "keyword": "方丈",
        "added": "ot",
        "position": "start"
      },
      {
        "word": "abbe",
        "meaning": "僧侣",
        "keyword": "僧侣",
        "added": "e",
        "position": "start"
      },
      {
        "word": "abba",
        "meaning": "阿巴合唱团",
        "keyword": "阿巴合唱团",
        "added": "a",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 341,
    "id": "clude",
    "rime": "CLUDE",
    "title": "太太离婚分财产的结论",
    "story": "太太对先生说：“我的结论是婚非离不可，还要缴的分期付款除外，其他的财产包含动产和不动产都归我。”",
    "words": [
      {
        "word": "conclude",
        "meaning": "下结论",
        "keyword": "结论",
        "added": "con",
        "position": "end"
      },
      {
        "word": "seclude",
        "meaning": "分离",
        "keyword": "离不可",
        "added": "se",
        "position": "end"
      },
      {
        "word": "exclude",
        "meaning": "除外",
        "keyword": "除外",
        "added": "ex",
        "position": "end"
      },
      {
        "word": "include",
        "meaning": "包含",
        "keyword": "包含",
        "added": "in",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 342,
    "id": "pu",
    "rime": "PU",
    "title": "捡到钱包后买美洲豹去酒吧",
    "story": "有的人在路上捡到小猫、小狗，如哈巴狗，但我却捡到钱包，再到名品店买件“美洲豹”去泡酒吧。",
    "words": [
      {
        "word": "puss",
        "meaning": "小猫",
        "keyword": "小猫",
        "added": "ss",
        "position": "start"
      },
      {
        "word": "pup",
        "meaning": "小狗",
        "keyword": "小狗",
        "added": "p",
        "position": "start"
      },
      {
        "word": "pug",
        "meaning": "哈巴狗",
        "keyword": "哈巴狗",
        "added": "g",
        "position": "start"
      },
      {
        "word": "pub",
        "meaning": "酒吧",
        "keyword": "酒吧",
        "added": "b",
        "position": "start"
      },
      {
        "word": "purse",
        "meaning": "钱包",
        "keyword": "钱包",
        "added": "rse",
        "position": "start"
      },
      {
        "word": "puma",
        "meaning": "美洲豹",
        "keyword": "美洲豹",
        "added": "ma",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 343,
    "id": "smi",
    "rime": "SMI",
    "title": "铁匠微笑面对牛尾菜弄脏屋子",
    "story": "史密斯是个铁匠，他穿着肮脏的工作服，看到儿子采牛尾菜回来，沾污了整个屋子，他只是微笑着，没有责打的意思。",
    "words": [
      {
        "word": "smilax",
        "meaning": "牛尾菜",
        "keyword": "牛尾菜",
        "added": "lax",
        "position": "start"
      },
      {
        "word": "smile",
        "meaning": "微笑",
        "keyword": "微笑着",
        "added": "le",
        "position": "start"
      },
      {
        "word": "smirch",
        "meaning": "沾污",
        "keyword": "沾污",
        "added": "rch",
        "position": "start"
      },
      {
        "word": "smite",
        "meaning": "责打",
        "keyword": "责打",
        "added": "te",
        "position": "start"
      },
      {
        "word": "smith",
        "meaning": "铁匠",
        "keyword": "铁匠",
        "added": "th",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 344,
    "id": "dea",
    "rime": "DEA",
    "title": "婚前亲爱婚后又聋又死",
    "story": "太太抱怨先生说：“你婚前口口声声亲爱的，婚后却像又聋又死的遗像。”",
    "words": [
      {
        "word": "dead",
        "meaning": "死的",
        "keyword": "死的",
        "added": "d",
        "position": "start"
      },
      {
        "word": "deaf",
        "meaning": "聋的",
        "keyword": "聋",
        "added": "f",
        "position": "start"
      },
      {
        "word": "dear",
        "meaning": "可爱的、亲爱的",
        "keyword": "亲爱的",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 345,
    "id": "ali",
    "rime": "ALI",
    "title": "外国人用假名着陆求活命",
    "story": "一个外国人用假名着陆，为的是要活命，并取得不在现场的证明。",
    "words": [
      {
        "word": "alien",
        "meaning": "外国人",
        "keyword": "外国人",
        "added": "en",
        "position": "start"
      },
      {
        "word": "alias",
        "meaning": "化名、假名、别名",
        "keyword": "假名",
        "added": "as",
        "position": "start"
      },
      {
        "word": "alibi",
        "meaning": "不在现场证明",
        "keyword": "不在现场的证明",
        "added": "bi",
        "position": "start"
      },
      {
        "word": "alight",
        "meaning": "着陆",
        "keyword": "着陆",
        "added": "ght",
        "position": "start"
      },
      {
        "word": "alive",
        "meaning": "活着",
        "keyword": "活命",
        "added": "ve",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 346,
    "id": "ower2",
    "rime": "OWER",
    "title": "划手拒绝播种和刈草",
    "story": "划手说：“划船才是我天赋的才能，而不是当个播种者、刈草机。”",
    "words": [
      {
        "word": "rower",
        "meaning": "划手",
        "keyword": "划手",
        "added": "r",
        "position": "end"
      },
      {
        "word": "dower",
        "meaning": "天赋的才能",
        "keyword": "天赋的才能",
        "added": "d",
        "position": "end"
      },
      {
        "word": "mower",
        "meaning": "刈草机",
        "keyword": "刈草机",
        "added": "m",
        "position": "end"
      },
      {
        "word": "sower",
        "meaning": "播种者",
        "keyword": "播种者",
        "added": "s",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 347,
    "id": "omb",
    "rime": "OMB",
    "title": "炸弹梳子谈子宫与坟墓",
    "story": "炸弹对梳子说：“问我从哪里来？所有的人都是来自娘胎子宫；所有的人都将走进坟墓，有谁不同？”",
    "words": [
      {
        "word": "bomb",
        "meaning": "炸弹",
        "keyword": "炸弹",
        "added": "b",
        "position": "end"
      },
      {
        "word": "comb",
        "meaning": "梳子",
        "keyword": "梳子",
        "added": "c",
        "position": "end"
      },
      {
        "word": "womb",
        "meaning": "子宫",
        "keyword": "子宫",
        "added": "w",
        "position": "end"
      },
      {
        "word": "tomb",
        "meaning": "坟墓",
        "keyword": "坟墓",
        "added": "t",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 348,
    "id": "ya",
    "rime": "YA",
    "title": "耶鲁美国佬爱骆马厌衙门番薯",
    "story": "耶鲁大学毕业的美国佬喜欢秘鲁骆马，不喜欢到中国衙门听唠叨、吃番薯。",
    "words": [
      {
        "word": "yale",
        "meaning": "耶鲁",
        "keyword": "耶鲁大学",
        "added": "le",
        "position": "start"
      },
      {
        "word": "yankee",
        "meaning": "美国佬",
        "keyword": "美国佬",
        "added": "nkee",
        "position": "start"
      },
      {
        "word": "yamma",
        "meaning": "骆马",
        "keyword": "骆马",
        "added": "mma",
        "position": "start"
      },
      {
        "word": "yamen",
        "meaning": "衙门",
        "keyword": "衙门",
        "added": "men",
        "position": "start"
      },
      {
        "word": "yap",
        "meaning": "唠叨",
        "keyword": "唠叨",
        "added": "p",
        "position": "start"
      },
      {
        "word": "yam",
        "meaning": "番薯",
        "keyword": "番薯",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 349,
    "id": "kit",
    "rime": "KIT",
    "title": "吉蒂厨房的风筝工具和小猫",
    "story": "吉蒂的厨房有一套做风筝的工具，可是亲朋好友却喜欢跟她家中的小猫玩游戏。",
    "words": [
      {
        "word": "kit",
        "meaning": "一套工具",
        "keyword": "一套",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "kittie",
        "meaning": "吉蒂",
        "keyword": "吉蒂",
        "added": "tie",
        "position": "start"
      },
      {
        "word": "kite",
        "meaning": "风筝",
        "keyword": "风筝",
        "added": "e",
        "position": "start"
      },
      {
        "word": "kith",
        "meaning": "亲朋好友",
        "keyword": "亲朋好友",
        "added": "h",
        "position": "start"
      },
      {
        "word": "kitty",
        "meaning": "小猫",
        "keyword": "小猫",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "kitchen",
        "meaning": "厨房",
        "keyword": "厨房",
        "added": "chen",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 350,
    "id": "seclu",
    "rime": "SECLU",
    "title": "权斗失败后隐退僻静乡间",
    "story": "由于权力斗争失败，他隐退到僻静的乡间，过着与世隔绝的生活。",
    "words": [
      {
        "word": "seclude",
        "meaning": "隐退、隔离",
        "keyword": "隐退",
        "added": "de",
        "position": "start"
      },
      {
        "word": "secluded",
        "meaning": "僻静的",
        "keyword": "僻静的",
        "added": "ded",
        "position": "start"
      },
      {
        "word": "seclusion",
        "meaning": "与世隔绝",
        "keyword": "与世隔绝",
        "added": "sion",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 351,
    "id": "abac",
    "rime": "ABAC",
    "title": "算盘使用者与吕宋大麻",
    "story": "算盘使用者说：“不用计算器计算也会知道，种吕宋大麻会使文明后退，自然比较不好。”",
    "words": [
      {
        "word": "abacus",
        "meaning": "算盘",
        "keyword": "算盘",
        "added": "us",
        "position": "start"
      },
      {
        "word": "abacist",
        "meaning": "算盘使用者",
        "keyword": "使用者",
        "added": "ist",
        "position": "start"
      },
      {
        "word": "aback",
        "meaning": "（船）退向后",
        "keyword": "后退",
        "added": "k",
        "position": "start"
      },
      {
        "word": "abaca",
        "meaning": "吕宋大麻",
        "keyword": "吕宋大麻",
        "added": "a",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 352,
    "id": "ull2",
    "rime": "ULL",
    "title": "海鸥享受晦暗天空下的安静",
    "story": "海鸥说：“虽然天空有时候有点晦暗，但却能享受到完全的安静。”",
    "words": [
      {
        "word": "gull",
        "meaning": "鸥",
        "keyword": "海鸥",
        "added": "g",
        "position": "end"
      },
      {
        "word": "dull",
        "meaning": "晦暗",
        "keyword": "晦暗",
        "added": "d",
        "position": "end"
      },
      {
        "word": "full",
        "meaning": "完全的",
        "keyword": "完全的",
        "added": "f",
        "position": "end"
      },
      {
        "word": "lull",
        "meaning": "安静",
        "keyword": "安静",
        "added": "l",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 353,
    "id": "body",
    "rime": "BODY",
    "title": "死后不再分无名小子与重要人物",
    "story": "人生而不平等，有贫富贱贵之分；但人死了之后，身躯只是某人的身躯，再也不分无名小子或重要人物。",
    "words": [
      {
        "word": "body",
        "meaning": "身体",
        "keyword": "身躯",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "nobody",
        "meaning": "无名小子",
        "keyword": "无名小子",
        "added": "no",
        "position": "end"
      },
      {
        "word": "somebody",
        "meaning": "某人、重要人物",
        "keyword": "重要人物",
        "added": "some",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 354,
    "id": "see",
    "rime": "SEE",
    "title": "先看懂再寻找优秀种子",
    "story": "父亲对刚结婚的女儿说：“看来你似乎懂了，播种之前要先用视觉去寻找优秀的种子。”",
    "words": [
      {
        "word": "see",
        "meaning": "看、了解、懂",
        "keyword": "懂了",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "seem",
        "meaning": "似乎、看来",
        "keyword": "似乎",
        "added": "m",
        "position": "start"
      },
      {
        "word": "seed",
        "meaning": "种子、播种",
        "keyword": "种子",
        "added": "d",
        "position": "start"
      },
      {
        "word": "seeing",
        "meaning": "视觉",
        "keyword": "视觉",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "seek",
        "meaning": "寻找",
        "keyword": "寻找",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 355,
    "id": "aba",
    "rime": "ABA",
    "title": "阳光下八千元鲍鱼宴",
    "story": "在阳光下吃一餐八千元的鲍鱼宴，这种暴发户的心态应该抛弃，这只会减少别人对你的尊敬而贬低你。",
    "words": [
      {
        "word": "abask",
        "meaning": "在阳光下",
        "keyword": "阳光下",
        "added": "sk",
        "position": "start"
      },
      {
        "word": "abalone",
        "meaning": "鲍鱼",
        "keyword": "鲍鱼宴",
        "added": "lone",
        "position": "start"
      },
      {
        "word": "abandon",
        "meaning": "抛弃",
        "keyword": "抛弃",
        "added": "ndon",
        "position": "start"
      },
      {
        "word": "abase",
        "meaning": "贬抑、屈从",
        "keyword": "贬低",
        "added": "se",
        "position": "start"
      },
      {
        "word": "abate",
        "meaning": "减少",
        "keyword": "减少",
        "added": "te",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 356,
    "id": "ma",
    "rime": "MA",
    "title": "许多男人疯狂结婚又戴面具",
    "story": "许多男人都疯狂地去做结婚的傻事，等到对婚姻失望后，还是戴面具示人。",
    "words": [
      {
        "word": "man",
        "meaning": "男人",
        "keyword": "男人",
        "added": "n",
        "position": "start"
      },
      {
        "word": "mad",
        "meaning": "疯狂",
        "keyword": "疯狂地",
        "added": "d",
        "position": "start"
      },
      {
        "word": "make",
        "meaning": "做",
        "keyword": "做",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "many",
        "meaning": "许多",
        "keyword": "许多",
        "added": "ny",
        "position": "start"
      },
      {
        "word": "marry",
        "meaning": "结婚",
        "keyword": "结婚",
        "added": "rry",
        "position": "start"
      },
      {
        "word": "mask",
        "meaning": "面具",
        "keyword": "面具",
        "added": "sk",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 357,
    "id": "ut",
    "rime": "UT",
    "title": "小屋手术刀有时切坚果",
    "story": "医生对病人说：“小屋里常规摆放的手术刀，有时候是用来做手术，有时候是用来切坚果。”",
    "words": [
      {
        "word": "hut",
        "meaning": "小屋",
        "keyword": "小屋",
        "added": "h",
        "position": "end"
      },
      {
        "word": "rut",
        "meaning": "车辙、常规",
        "keyword": "常规",
        "added": "r",
        "position": "end"
      },
      {
        "word": "put",
        "meaning": "放、摆",
        "keyword": "摆放",
        "added": "p",
        "position": "end"
      },
      {
        "word": "cut",
        "meaning": "切、割",
        "keyword": "切",
        "added": "c",
        "position": "end"
      },
      {
        "word": "nut",
        "meaning": "坚果",
        "keyword": "坚果",
        "added": "n",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 358,
    "id": "chee",
    "rime": "CHEE",
    "title": "无耻商人赖卖下等乳酪",
    "story": "无耻的商人耍赖卖给顾客下等的乳酪，自己还在背后欢呼喝彩。",
    "words": [
      {
        "word": "cheeky",
        "meaning": "无耻的",
        "keyword": "无耻的",
        "added": "ky",
        "position": "start"
      },
      {
        "word": "cheek",
        "meaning": "赖、耍赖",
        "keyword": "耍赖",
        "added": "k",
        "position": "start"
      },
      {
        "word": "cheesy",
        "meaning": "下等的",
        "keyword": "下等的",
        "added": "sy",
        "position": "start"
      },
      {
        "word": "cheese",
        "meaning": "乳酪",
        "keyword": "乳酪",
        "added": "se",
        "position": "start"
      },
      {
        "word": "cheer",
        "meaning": "欢呼、喝彩",
        "keyword": "欢呼喝彩",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 359,
    "id": "glo",
    "rime": "GLO",
    "title": "幽暗中光荣却不如爱",
    "story": "年度最佳防守得奖人说：“幽暗中更能显露光荣，但得到发光的金手套，不如得到少一个G的爱好。”",
    "words": [
      {
        "word": "gloom",
        "meaning": "幽暗",
        "keyword": "幽暗",
        "added": "om",
        "position": "start"
      },
      {
        "word": "glory",
        "meaning": "光荣",
        "keyword": "光荣",
        "added": "ry",
        "position": "start"
      },
      {
        "word": "glow",
        "meaning": "发光",
        "keyword": "发光",
        "added": "w",
        "position": "start"
      },
      {
        "word": "glove",
        "meaning": "手套",
        "keyword": "手套",
        "added": "ve",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 360,
    "id": "ther",
    "rime": "THER",
    "title": "父母兄弟少废话共奏筝",
    "story": "父母、兄弟家族聚会同乐时，与其讲些废话，不如全家一起合奏筝。",
    "words": [
      {
        "word": "father",
        "meaning": "父",
        "keyword": "父",
        "added": "fa",
        "position": "end"
      },
      {
        "word": "mother",
        "meaning": "母",
        "keyword": "母",
        "added": "mo",
        "position": "end"
      },
      {
        "word": "brother",
        "meaning": "兄弟",
        "keyword": "兄弟",
        "added": "bro",
        "position": "end"
      },
      {
        "word": "blather",
        "meaning": "废话",
        "keyword": "废话",
        "added": "bla",
        "position": "end"
      },
      {
        "word": "zither",
        "meaning": "筝",
        "keyword": "筝",
        "added": "zi",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 361,
    "id": "ban3",
    "rime": "BAN",
    "title": "节食女妖精摇旗喊万岁",
    "story": "太太对先生说：“节食减肥可能是健康克星，但当我变成魔鬼身材的女妖精时，你可要高兴地摇旗喊万岁了！”",
    "words": [
      {
        "word": "bant",
        "meaning": "节食、减肥",
        "keyword": "节食减肥",
        "added": "t",
        "position": "start"
      },
      {
        "word": "bane",
        "meaning": "克星",
        "keyword": "克星",
        "added": "e",
        "position": "start"
      },
      {
        "word": "banshee",
        "meaning": "女妖精",
        "keyword": "女妖精",
        "added": "shee",
        "position": "start"
      },
      {
        "word": "banner",
        "meaning": "旗",
        "keyword": "旗",
        "added": "ner",
        "position": "start"
      },
      {
        "word": "banzai",
        "meaning": "万岁",
        "keyword": "万岁",
        "added": "zai",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 362,
    "id": "ca2",
    "rime": "CA",
    "title": "恶棍在开罗点无咖啡因咖啡",
    "story": "有个恶棍到开罗的小餐厅，叫了一杯无咖啡因的咖啡。",
    "words": [
      {
        "word": "cad",
        "meaning": "恶棍",
        "keyword": "恶棍",
        "added": "d",
        "position": "start"
      },
      {
        "word": "cairo",
        "meaning": "开罗",
        "keyword": "开罗",
        "added": "iro",
        "position": "start"
      },
      {
        "word": "cafe",
        "meaning": "小餐厅",
        "keyword": "小餐厅",
        "added": "fe",
        "position": "start"
      },
      {
        "word": "caffeine",
        "meaning": "咖啡因",
        "keyword": "无咖啡因",
        "added": "ffeine",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 363,
    "id": "red",
    "rime": "RED",
    "title": "低薪编辑重做红帽又脸红否认",
    "story": "编辑因为薪水太低，而重做红帽子；被朋友认出时，脸红地一再否认。",
    "words": [
      {
        "word": "redact",
        "meaning": "编辑",
        "keyword": "编辑",
        "added": "act",
        "position": "start"
      },
      {
        "word": "redo",
        "meaning": "重做",
        "keyword": "重做",
        "added": "o",
        "position": "start"
      },
      {
        "word": "redcap",
        "meaning": "红帽子（脚夫）",
        "keyword": "红帽子",
        "added": "cap",
        "position": "start"
      },
      {
        "word": "redden",
        "meaning": "脸红",
        "keyword": "脸红",
        "added": "den",
        "position": "start"
      },
      {
        "word": "reddeny",
        "meaning": "再否认",
        "keyword": "一再否认",
        "added": "deny",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 364,
    "id": "rea3",
    "rime": "REA",
    "title": "阅读真的获得一令知识",
    "story": "培养阅读的习惯，真的会令你获得一令纸的知识。",
    "words": [
      {
        "word": "rear",
        "meaning": "培养",
        "keyword": "培养",
        "added": "r",
        "position": "start"
      },
      {
        "word": "read",
        "meaning": "阅读",
        "keyword": "阅读",
        "added": "d",
        "position": "start"
      },
      {
        "word": "real",
        "meaning": "真的",
        "keyword": "真的",
        "added": "l",
        "position": "start"
      },
      {
        "word": "reap",
        "meaning": "获得",
        "keyword": "获得",
        "added": "p",
        "position": "start"
      },
      {
        "word": "ream",
        "meaning": "一令",
        "keyword": "一令纸",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 365,
    "id": "sig",
    "rime": "SIG",
    "title": "观光客看不懂标志与信号灯",
    "story": "观光客的视力虽然没问题，但看不懂道路标志和信号灯，所以还是常发生问题。",
    "words": [
      {
        "word": "sightseer",
        "meaning": "观光客",
        "keyword": "观光客",
        "added": "htseer",
        "position": "start"
      },
      {
        "word": "sight",
        "meaning": "视力",
        "keyword": "视力",
        "added": "ht",
        "position": "start"
      },
      {
        "word": "signal",
        "meaning": "信号灯",
        "keyword": "信号灯",
        "added": "nal",
        "position": "start"
      },
      {
        "word": "sign",
        "meaning": "标志",
        "keyword": "标志",
        "added": "n",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 366,
    "id": "car2",
    "rime": "CAR",
    "title": "鲤鱼用纸牌雕刻手推车",
    "story": "鲤鱼拿纸牌，用心地雕刻了一部手推车。",
    "words": [
      {
        "word": "carp",
        "meaning": "鲤鱼",
        "keyword": "鲤鱼",
        "added": "p",
        "position": "start"
      },
      {
        "word": "card",
        "meaning": "纸牌",
        "keyword": "纸牌",
        "added": "d",
        "position": "start"
      },
      {
        "word": "care",
        "meaning": "用心",
        "keyword": "用心地",
        "added": "e",
        "position": "start"
      },
      {
        "word": "carve",
        "meaning": "雕刻",
        "keyword": "雕刻",
        "added": "ve",
        "position": "start"
      },
      {
        "word": "cart",
        "meaning": "手推车",
        "keyword": "手推车",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 367,
    "id": "jo",
    "rime": "JO",
    "title": "小丑摇肚皮开玩笑带来喜悦",
    "story": "小丑的工作就是参加宴会表演，摇动肚皮，开自己的玩笑，让别人喜悦。",
    "words": [
      {
        "word": "job",
        "meaning": "工作",
        "keyword": "工作",
        "added": "b",
        "position": "start"
      },
      {
        "word": "join",
        "meaning": "参加、联络",
        "keyword": "参加",
        "added": "in",
        "position": "start"
      },
      {
        "word": "jolt",
        "meaning": "摇动",
        "keyword": "摇动",
        "added": "lt",
        "position": "start"
      },
      {
        "word": "joke",
        "meaning": "玩笑",
        "keyword": "玩笑",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "joy",
        "meaning": "喜悦",
        "keyword": "喜悦",
        "added": "y",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 368,
    "id": "sw",
    "rime": "SW",
    "title": "瑞典人穿毛衣打扫出香汗",
    "story": "瑞典人发誓说：“穿毛衣打扫卫生，一定会弄得一身香汗。”",
    "words": [
      {
        "word": "sweden",
        "meaning": "瑞典",
        "keyword": "瑞典人",
        "added": "eden",
        "position": "start"
      },
      {
        "word": "swear",
        "meaning": "发誓",
        "keyword": "发誓",
        "added": "ear",
        "position": "start"
      },
      {
        "word": "sweater",
        "meaning": "毛衣",
        "keyword": "毛衣",
        "added": "eater",
        "position": "start"
      },
      {
        "word": "sweep",
        "meaning": "打扫",
        "keyword": "打扫卫生",
        "added": "eep",
        "position": "start"
      },
      {
        "word": "sweet",
        "meaning": "甜、芳香",
        "keyword": "香",
        "added": "eet",
        "position": "start"
      },
      {
        "word": "sweat",
        "meaning": "汗",
        "keyword": "汗",
        "added": "eat",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 369,
    "id": "po",
    "rime": "PO",
    "title": "教皇在波河劝吃爆米花",
    "story": "教皇在意大利波河对众人说：“宁可吃爆米花，也不要接近罂粟美人儿。”",
    "words": [
      {
        "word": "po",
        "meaning": "波河",
        "keyword": "波河",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "pop",
        "meaning": "爆米花",
        "keyword": "爆米花",
        "added": "p",
        "position": "start"
      },
      {
        "word": "pope",
        "meaning": "教皇",
        "keyword": "教皇",
        "added": "pe",
        "position": "start"
      },
      {
        "word": "poppy",
        "meaning": "罂粟",
        "keyword": "罂粟",
        "added": "ppy",
        "position": "start"
      },
      {
        "word": "popsy",
        "meaning": "美人儿",
        "keyword": "美人儿",
        "added": "psy",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 370,
    "id": "mas",
    "rime": "MAS",
    "title": "大师戴面具站桅杆送吉祥物",
    "story": "大师戴着面具站在桅杆上，聚集了一群信徒，送给他们吉祥物。",
    "words": [
      {
        "word": "master",
        "meaning": "大师、主人",
        "keyword": "大师",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "mask",
        "meaning": "面具",
        "keyword": "面具",
        "added": "k",
        "position": "start"
      },
      {
        "word": "mast",
        "meaning": "桅杆",
        "keyword": "桅杆",
        "added": "t",
        "position": "start"
      },
      {
        "word": "mass",
        "meaning": "群、团、块",
        "keyword": "一群",
        "added": "s",
        "position": "start"
      },
      {
        "word": "mascot",
        "meaning": "吉祥物",
        "keyword": "吉祥物",
        "added": "cot",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 371,
    "id": "chor",
    "rime": "CHOR",
    "title": "从打杂升为合唱队员与歌舞台柱",
    "story": "她从打杂开始干起，升为唱赞美诗的合唱队员，再升任歌舞女郎的台柱。",
    "words": [
      {
        "word": "chore",
        "meaning": "打杂",
        "keyword": "打杂",
        "added": "e",
        "position": "start"
      },
      {
        "word": "chorus",
        "meaning": "合唱",
        "keyword": "合唱",
        "added": "us",
        "position": "start"
      },
      {
        "word": "chorist",
        "meaning": "合唱队员",
        "keyword": "队员",
        "added": "ist",
        "position": "start"
      },
      {
        "word": "choral",
        "meaning": "赞美诗",
        "keyword": "赞美诗",
        "added": "al",
        "position": "start"
      },
      {
        "word": "chorine",
        "meaning": "歌舞女郎",
        "keyword": "歌舞女郎",
        "added": "ine",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 372,
    "id": "pet",
    "rime": "PET",
    "title": "彼得抓海燕当宠物",
    "story": "彼得是个无用的男人，一生中连些微的钱也不曾赚到手，只会抓海燕当宠物来养。",
    "words": [
      {
        "word": "peter",
        "meaning": "彼得",
        "keyword": "彼得",
        "added": "er",
        "position": "start"
      },
      {
        "word": "petit",
        "meaning": "无用的",
        "keyword": "无用的",
        "added": "it",
        "position": "start"
      },
      {
        "word": "petty",
        "meaning": "些微",
        "keyword": "些微的钱",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "petrel",
        "meaning": "海燕",
        "keyword": "海燕",
        "added": "rel",
        "position": "start"
      },
      {
        "word": "pet",
        "meaning": "宠物",
        "keyword": "宠物",
        "added": "ø",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 373,
    "id": "but",
    "rime": "BUT",
    "title": "屠夫反串蝴蝶夫人成笑柄",
    "story": "屠夫反串演蝴蝶夫人，但是由于过于男性化，变成了笑柄。",
    "words": [
      {
        "word": "butcher",
        "meaning": "屠夫",
        "keyword": "屠夫",
        "added": "cher",
        "position": "start"
      },
      {
        "word": "butterfly",
        "meaning": "蝴蝶",
        "keyword": "蝴蝶夫人",
        "added": "terfly",
        "position": "start"
      },
      {
        "word": "but",
        "meaning": "但是",
        "keyword": "但是",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "butch",
        "meaning": "男性化",
        "keyword": "男性化",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "butt",
        "meaning": "笑柄",
        "keyword": "笑柄",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 374,
    "id": "cl",
    "rime": "CL",
    "title": "俱乐部按钟打工扮小丑做清洁",
    "story": "他到俱乐部按钟点打工，有时扮演小丑，有时当清洁工。",
    "words": [
      {
        "word": "club",
        "meaning": "俱乐部",
        "keyword": "俱乐部",
        "added": "ub",
        "position": "start"
      },
      {
        "word": "clock",
        "meaning": "钟",
        "keyword": "钟点",
        "added": "ock",
        "position": "start"
      },
      {
        "word": "clown",
        "meaning": "小丑",
        "keyword": "小丑",
        "added": "own",
        "position": "start"
      },
      {
        "word": "clean",
        "meaning": "清洁",
        "keyword": "清洁工",
        "added": "ean",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 375,
    "id": "all2",
    "rime": "ALL",
    "title": "甄选所有高大球员站墙边",
    "story": "球队甄选球员，要所有高大的应征者站到大厅的墙边。",
    "words": [
      {
        "word": "all",
        "meaning": "所有的",
        "keyword": "所有",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "ball",
        "meaning": "球",
        "keyword": "球队",
        "added": "b",
        "position": "end"
      },
      {
        "word": "tall",
        "meaning": "高大",
        "keyword": "高大的",
        "added": "t",
        "position": "end"
      },
      {
        "word": "hall",
        "meaning": "大厅",
        "keyword": "大厅",
        "added": "h",
        "position": "end"
      },
      {
        "word": "wall",
        "meaning": "墙",
        "keyword": "墙边",
        "added": "w",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 376,
    "id": "crow",
    "rime": "CROW",
    "title": "乌鸦在人群里只找到铁锹",
    "story": "乌鸦在人群中寻找失窃的皇冠，结果只找到一把铁锹。",
    "words": [
      {
        "word": "crow",
        "meaning": "乌鸦",
        "keyword": "乌鸦",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "crowd",
        "meaning": "人群",
        "keyword": "人群",
        "added": "d",
        "position": "start"
      },
      {
        "word": "crown",
        "meaning": "皇冠",
        "keyword": "皇冠",
        "added": "n",
        "position": "start"
      },
      {
        "word": "crowbar",
        "meaning": "铁锹",
        "keyword": "铁锹",
        "added": "bar",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 377,
    "id": "ease",
    "rime": "EASE",
    "title": "祭师祈求停止疾病减少死亡",
    "story": "祭师向神祈求说：“请停止疾病，减少死亡。”",
    "words": [
      {
        "word": "please",
        "meaning": "请",
        "keyword": "请",
        "added": "pl",
        "position": "end"
      },
      {
        "word": "cease",
        "meaning": "停止",
        "keyword": "停止",
        "added": "c",
        "position": "end"
      },
      {
        "word": "disease",
        "meaning": "疾病",
        "keyword": "疾病",
        "added": "dis",
        "position": "end"
      },
      {
        "word": "decrease",
        "meaning": "减少",
        "keyword": "减少",
        "added": "decr",
        "position": "end"
      },
      {
        "word": "decease",
        "meaning": "死亡",
        "keyword": "死亡",
        "added": "dec",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 378,
    "id": "ero",
    "rime": "ERO",
    "title": "尼洛从飞行英雄降为零",
    "story": "罗马暴君尼洛能文能武，原本像天上飞行的英雄，但由于他像疯了一样火烧罗马，声望从英雄降至零。",
    "words": [
      {
        "word": "nero",
        "meaning": "尼洛",
        "keyword": "尼洛",
        "added": "n",
        "position": "end"
      },
      {
        "word": "aero",
        "meaning": "飞机的、飞行的",
        "keyword": "飞行",
        "added": "a",
        "position": "end"
      },
      {
        "word": "hero",
        "meaning": "英雄",
        "keyword": "英雄",
        "added": "h",
        "position": "end"
      },
      {
        "word": "zero",
        "meaning": "零",
        "keyword": "零",
        "added": "z",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 379,
    "id": "ai",
    "rime": "AI",
    "title": "先找到自己再瞄准天空",
    "story": "人要帮助自己远离苦恼，首先得先找到自己，然后再瞄准自己的天空。",
    "words": [
      {
        "word": "aid",
        "meaning": "帮助",
        "keyword": "帮助",
        "added": "d",
        "position": "start"
      },
      {
        "word": "ail",
        "meaning": "使苦恼",
        "keyword": "苦恼",
        "added": "l",
        "position": "start"
      },
      {
        "word": "aim",
        "meaning": "瞄准",
        "keyword": "瞄准",
        "added": "m",
        "position": "start"
      },
      {
        "word": "ain",
        "meaning": "自己的",
        "keyword": "自己",
        "added": "n",
        "position": "start"
      },
      {
        "word": "air",
        "meaning": "天空、空气",
        "keyword": "天空",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 380,
    "id": "sive",
    "rime": "SIVE",
    "title": "湿婆沉思悟出奢侈与消极",
    "story": "沉思的湿婆神冥想后说：“我悟出了奢侈和消极的真谛了。”",
    "words": [
      {
        "word": "pensive",
        "meaning": "哀愁的、沉思的",
        "keyword": "沉思",
        "added": "pen",
        "position": "end"
      },
      {
        "word": "expensive",
        "meaning": "奢侈",
        "keyword": "奢侈",
        "added": "expen",
        "position": "end"
      },
      {
        "word": "passive",
        "meaning": "消极",
        "keyword": "消极",
        "added": "pas",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 381,
    "id": "pu2",
    "rime": "PU",
    "title": "酒吧猜门推拉赢泡芙",
    "story": "酒吧的店长爱讲俏皮话，他说：“别回头，谁能猜中本店的大门是推的，还是拉的，谁就能免费吃泡芙。”",
    "words": [
      {
        "word": "pub",
        "meaning": "酒吧",
        "keyword": "酒吧",
        "added": "b",
        "position": "start"
      },
      {
        "word": "pun",
        "meaning": "俏皮话",
        "keyword": "俏皮话",
        "added": "n",
        "position": "start"
      },
      {
        "word": "push",
        "meaning": "推",
        "keyword": "推",
        "added": "sh",
        "position": "start"
      },
      {
        "word": "pull",
        "meaning": "拉",
        "keyword": "拉",
        "added": "ll",
        "position": "start"
      },
      {
        "word": "puff",
        "meaning": "泡芙",
        "keyword": "泡芙",
        "added": "ff",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 382,
    "id": "rea2",
    "rime": "REA",
    "title": "里根领悟做国家培育者",
    "story": "里根领悟到，做一个国家栋梁的培育者，确实比做一个房地产经纪人有意义。",
    "words": [
      {
        "word": "reagan",
        "meaning": "里根",
        "keyword": "里根",
        "added": "gan",
        "position": "start"
      },
      {
        "word": "realize",
        "meaning": "领悟",
        "keyword": "领悟",
        "added": "lize",
        "position": "start"
      },
      {
        "word": "really",
        "meaning": "确实",
        "keyword": "确实",
        "added": "lly",
        "position": "start"
      },
      {
        "word": "realtor",
        "meaning": "房地产经纪",
        "keyword": "房地产经纪人",
        "added": "ltor",
        "position": "start"
      },
      {
        "word": "rearer",
        "meaning": "培育者",
        "keyword": "培育者",
        "added": "rer",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 383,
    "id": "yak",
    "rime": "YAK",
    "title": "雅库特人不杀牦牛只吃烤鸡串",
    "story": "前苏联境内的雅库特人原本是突厥民族，他们不杀牦牛和扭角羚羊，而独喜欢烤鸡肉串下酒吃。",
    "words": [
      {
        "word": "yakut",
        "meaning": "雅库特人",
        "keyword": "雅库特人",
        "added": "ut",
        "position": "start"
      },
      {
        "word": "yak",
        "meaning": "牦牛",
        "keyword": "牦牛",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "yakin",
        "meaning": "扭角羚羊",
        "keyword": "扭角羚羊",
        "added": "in",
        "position": "start"
      },
      {
        "word": "yakitori",
        "meaning": "烤鸡肉串",
        "keyword": "烤鸡肉串",
        "added": "itori",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 384,
    "id": "des",
    "rime": "DES",
    "title": "特别设计桌子帮助断念消欲",
    "story": "修行者借着特别设计的桌子，修行断念和消除欲望。",
    "words": [
      {
        "word": "desk",
        "meaning": "桌子",
        "keyword": "桌子",
        "added": "k",
        "position": "start"
      },
      {
        "word": "design",
        "meaning": "设计",
        "keyword": "设计",
        "added": "ign",
        "position": "start"
      },
      {
        "word": "desist",
        "meaning": "断念",
        "keyword": "断念",
        "added": "ist",
        "position": "start"
      },
      {
        "word": "desire",
        "meaning": "欲望",
        "keyword": "欲望",
        "added": "ire",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 385,
    "id": "gree",
    "rime": "GREE",
    "title": "希腊祝你绿油油一年",
    "story": "希腊少绿树多岩石，因此人们打招呼的祝贺词都会渴望地说：“祝你有绿油油的一年。”",
    "words": [
      {
        "word": "greece",
        "meaning": "希腊",
        "keyword": "希腊",
        "added": "ce",
        "position": "start"
      },
      {
        "word": "green",
        "meaning": "绿",
        "keyword": "绿油油",
        "added": "n",
        "position": "start"
      },
      {
        "word": "greet",
        "meaning": "打招呼",
        "keyword": "打招呼",
        "added": "t",
        "position": "start"
      },
      {
        "word": "greeting",
        "meaning": "贺词",
        "keyword": "祝贺词",
        "added": "ting",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 386,
    "id": "rac",
    "rime": "RAC",
    "title": "浣熊拿球拍竞赛很有架势",
    "story": "浣熊是地道的网球好手，它拿起球拍竞赛时非常有架势。",
    "words": [
      {
        "word": "raccoon",
        "meaning": "浣熊",
        "keyword": "浣熊",
        "added": "coon",
        "position": "start"
      },
      {
        "word": "racy",
        "meaning": "地道",
        "keyword": "地道",
        "added": "y",
        "position": "start"
      },
      {
        "word": "racket",
        "meaning": "球拍",
        "keyword": "球拍",
        "added": "ket",
        "position": "start"
      },
      {
        "word": "race",
        "meaning": "竞赛",
        "keyword": "竞赛",
        "added": "e",
        "position": "start"
      },
      {
        "word": "rack",
        "meaning": "架子、挂物架",
        "keyword": "架势",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 387,
    "id": "tra",
    "rime": "TRA",
    "title": "矿车运火山岩火车运贸易托盘",
    "story": "矿车和火车不同的地方是：矿车运输的是火山岩，火车运的是做贸易的托盘。",
    "words": [
      {
        "word": "tram",
        "meaning": "矿车",
        "keyword": "矿车",
        "added": "m",
        "position": "start"
      },
      {
        "word": "train",
        "meaning": "火车",
        "keyword": "火车",
        "added": "in",
        "position": "start"
      },
      {
        "word": "transport",
        "meaning": "运输",
        "keyword": "运输",
        "added": "nsport",
        "position": "start"
      },
      {
        "word": "trap",
        "meaning": "火山岩",
        "keyword": "火山岩",
        "added": "p",
        "position": "start"
      },
      {
        "word": "trade",
        "meaning": "贸易",
        "keyword": "贸易",
        "added": "de",
        "position": "start"
      },
      {
        "word": "tray",
        "meaning": "托盘",
        "keyword": "托盘",
        "added": "y",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 388,
    "id": "boa",
    "rime": "BOA",
    "title": "寄宿生划船吹嘘抓蟒蛇野猪",
    "story": "寄宿生划着小船，看着告示牌吹嘘说：“若是遇到蟒蛇、野猪，抓来烤肉也不错。”",
    "words": [
      {
        "word": "boarder",
        "meaning": "寄宿生",
        "keyword": "寄宿生",
        "added": "rder",
        "position": "start"
      },
      {
        "word": "board",
        "meaning": "告示牌",
        "keyword": "告示牌",
        "added": "rd",
        "position": "start"
      },
      {
        "word": "boat",
        "meaning": "小船",
        "keyword": "小船",
        "added": "t",
        "position": "start"
      },
      {
        "word": "boast",
        "meaning": "吹嘘",
        "keyword": "吹嘘",
        "added": "st",
        "position": "start"
      },
      {
        "word": "boa",
        "meaning": "蟒蛇",
        "keyword": "蟒蛇",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "boar",
        "meaning": "野猪",
        "keyword": "野猪",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 389,
    "id": "noo",
    "rime": "NOO",
    "title": "牛仔中午在角落吃面练套索",
    "story": "在牛仔的全盛时期，每天中午，他们都坐在马栏的角落，边吃面条边练套索。",
    "words": [
      {
        "word": "noontime",
        "meaning": "全盛时期",
        "keyword": "全盛时期",
        "added": "ntime",
        "position": "start"
      },
      {
        "word": "noon",
        "meaning": "中午",
        "keyword": "中午",
        "added": "n",
        "position": "start"
      },
      {
        "word": "nook",
        "meaning": "角落",
        "keyword": "角落",
        "added": "k",
        "position": "start"
      },
      {
        "word": "noodle",
        "meaning": "面条",
        "keyword": "面条",
        "added": "dle",
        "position": "start"
      },
      {
        "word": "noose",
        "meaning": "套索",
        "keyword": "套索",
        "added": "se",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 390,
    "id": "loa",
    "rime": "LOA",
    "title": "壤土借给泥鳅只收面包棒",
    "story": "壤土出租，如果借给泥鳅，则只要付一条面包棒做月租。",
    "words": [
      {
        "word": "loam",
        "meaning": "壤土",
        "keyword": "壤土",
        "added": "m",
        "position": "start"
      },
      {
        "word": "loan",
        "meaning": "借给",
        "keyword": "借给",
        "added": "n",
        "position": "start"
      },
      {
        "word": "loach",
        "meaning": "泥鳅",
        "keyword": "泥鳅",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "loaf",
        "meaning": "面包棒",
        "keyword": "面包棒",
        "added": "f",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 391,
    "id": "plea",
    "rime": "PLEA",
    "title": "犯人恳求辩护解开罪证编结",
    "story": "犯人恳求说：“请替我辩护，只要解开罪证的打褶、编结之处，必然有愉快的结果。”",
    "words": [
      {
        "word": "plea",
        "meaning": "恳求",
        "keyword": "恳求",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "plead",
        "meaning": "辩护、答辩",
        "keyword": "辩护",
        "added": "d",
        "position": "start"
      },
      {
        "word": "please",
        "meaning": "请",
        "keyword": "请",
        "added": "se",
        "position": "start"
      },
      {
        "word": "pleat",
        "meaning": "打褶",
        "keyword": "打褶",
        "added": "t",
        "position": "start"
      },
      {
        "word": "pleach",
        "meaning": "编结",
        "keyword": "编结",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "pleasure",
        "meaning": "愉快",
        "keyword": "愉快",
        "added": "sure",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 392,
    "id": "mut",
    "rime": "MUT",
    "title": "笨蛋病羊肉引发突变与抱怨",
    "story": "他抱怨说：“这笨蛋给我吃突变异种的病羊肉，莫非想害我得狂牛症变哑巴不成？”",
    "words": [
      {
        "word": "mut",
        "meaning": "杂种狗、笨蛋",
        "keyword": "笨蛋",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "mutter",
        "meaning": "抱怨、嘟囔",
        "keyword": "抱怨",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "mutant",
        "meaning": "突变异种",
        "keyword": "异种",
        "added": "ant",
        "position": "start"
      },
      {
        "word": "mutton",
        "meaning": "羊肉",
        "keyword": "羊肉",
        "added": "ton",
        "position": "start"
      },
      {
        "word": "mute",
        "meaning": "哑、哑巴",
        "keyword": "哑巴",
        "added": "e",
        "position": "start"
      },
      {
        "word": "mutation",
        "meaning": "变化",
        "keyword": "突变",
        "added": "ation",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 393,
    "id": "ain3",
    "rime": "AIN",
    "title": "该隐因自负得到雨般痛苦",
    "story": "耆那教徒说：“该隐由于自己的自负，而得到如雨般的痛苦。”",
    "words": [
      {
        "word": "ain",
        "meaning": "自己的",
        "keyword": "自己的",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "cain",
        "meaning": "该隐（亚当的长子）",
        "keyword": "该隐",
        "added": "c",
        "position": "end"
      },
      {
        "word": "vain",
        "meaning": "自负",
        "keyword": "自负",
        "added": "v",
        "position": "end"
      },
      {
        "word": "gain",
        "meaning": "得到",
        "keyword": "得到",
        "added": "g",
        "position": "end"
      },
      {
        "word": "rain",
        "meaning": "雨",
        "keyword": "雨般",
        "added": "r",
        "position": "end"
      },
      {
        "word": "pain",
        "meaning": "痛苦",
        "keyword": "痛苦",
        "added": "p",
        "position": "end"
      },
      {
        "word": "jain",
        "meaning": "耆那教徒",
        "keyword": "耆那教徒",
        "added": "j",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 394,
    "id": "pon",
    "rime": "PON",
    "title": "庄家骑矮马在臭池塘思量桥牌",
    "story": "打桥牌时，庄家骑着矮种马到发臭的池塘边，思量下一张牌要怎么打。",
    "words": [
      {
        "word": "pone",
        "meaning": "庄家",
        "keyword": "庄家",
        "added": "e",
        "position": "start"
      },
      {
        "word": "pony",
        "meaning": "矮种马",
        "keyword": "矮种马",
        "added": "y",
        "position": "start"
      },
      {
        "word": "pong",
        "meaning": "发臭",
        "keyword": "发臭",
        "added": "g",
        "position": "start"
      },
      {
        "word": "pond",
        "meaning": "池塘",
        "keyword": "池塘边",
        "added": "d",
        "position": "start"
      },
      {
        "word": "ponder",
        "meaning": "思量",
        "keyword": "思量",
        "added": "der",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 395,
    "id": "fi2",
    "rime": "FI",
    "title": "无花果避冷杉却配鱼翅",
    "story": "长老开示说：“牢记配合的真理，无花果不要和冷杉种在同一区，无花果可与鱼翅煎在一起。”",
    "words": [
      {
        "word": "fix",
        "meaning": "牢记、固定",
        "keyword": "牢记",
        "added": "x",
        "position": "start"
      },
      {
        "word": "fit",
        "meaning": "配合",
        "keyword": "配合",
        "added": "t",
        "position": "start"
      },
      {
        "word": "fig",
        "meaning": "无花果",
        "keyword": "无花果",
        "added": "g",
        "position": "start"
      },
      {
        "word": "fir",
        "meaning": "冷杉",
        "keyword": "冷杉",
        "added": "r",
        "position": "start"
      },
      {
        "word": "fin",
        "meaning": "鱼翅",
        "keyword": "鱼翅",
        "added": "n",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 396,
    "id": "iver",
    "rime": "IVER",
    "title": "河流说垃圾令我发抖废料令我战栗",
    "story": "河流说：“我是自然的肝脏，垃圾令我发抖，化学废料令我战栗。”",
    "words": [
      {
        "word": "river",
        "meaning": "河",
        "keyword": "河流",
        "added": "r",
        "position": "end"
      },
      {
        "word": "liver",
        "meaning": "肝",
        "keyword": "肝脏",
        "added": "l",
        "position": "end"
      },
      {
        "word": "shiver",
        "meaning": "发抖",
        "keyword": "发抖",
        "added": "sh",
        "position": "end"
      },
      {
        "word": "quiver",
        "meaning": "战栗",
        "keyword": "战栗",
        "added": "qu",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 397,
    "id": "til",
    "rime": "TIL",
    "title": "种胡麻农夫改行铺歪瓷砖",
    "story": "原本是个耕种胡麻的农夫，改行做铺砖工人，当然把瓷砖铺得倾斜，功夫不到家。",
    "words": [
      {
        "word": "til",
        "meaning": "胡麻",
        "keyword": "胡麻",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "till",
        "meaning": "耕种",
        "keyword": "耕种",
        "added": "l",
        "position": "start"
      },
      {
        "word": "tile",
        "meaning": "瓷砖、瓦",
        "keyword": "瓷砖",
        "added": "e",
        "position": "start"
      },
      {
        "word": "tiler",
        "meaning": "铺砖工人",
        "keyword": "铺砖工人",
        "added": "er",
        "position": "start"
      },
      {
        "word": "tilt",
        "meaning": "倾斜",
        "keyword": "倾斜",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 398,
    "id": "spit",
    "rime": "SPIT",
    "title": "绒毛狗恶意吐唾沫反喷自己",
    "story": "绒毛狗看到一个痰盂，它恶意地吐了一口唾沫，结果吐到自己的脸上。",
    "words": [
      {
        "word": "spit",
        "meaning": "吐",
        "keyword": "吐",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "spitz",
        "meaning": "绒毛狗",
        "keyword": "绒毛狗",
        "added": "z",
        "position": "start"
      },
      {
        "word": "spittoon",
        "meaning": "痰盂",
        "keyword": "痰盂",
        "added": "toon",
        "position": "start"
      },
      {
        "word": "spite",
        "meaning": "恶意",
        "keyword": "恶意地",
        "added": "e",
        "position": "start"
      },
      {
        "word": "spittle",
        "meaning": "唾沫",
        "keyword": "唾沫",
        "added": "tle",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 399,
    "id": "bit",
    "rime": "BIT",
    "title": "母狗咬缆柱尝到片断苦头",
    "story": "母狗用它锐利的牙去咬缆柱，而尝到少量片断的苦头。",
    "words": [
      {
        "word": "bit",
        "meaning": "比特、少量",
        "keyword": "少量",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "bitch",
        "meaning": "母狗",
        "keyword": "母狗",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "biting",
        "meaning": "锐利的",
        "keyword": "锐利的牙",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "bite",
        "meaning": "咬",
        "keyword": "咬",
        "added": "e",
        "position": "start"
      },
      {
        "word": "bitt",
        "meaning": "缆柱",
        "keyword": "缆柱",
        "added": "t",
        "position": "start"
      },
      {
        "word": "bitty",
        "meaning": "片断的",
        "keyword": "片断",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "bitter",
        "meaning": "苦的",
        "keyword": "苦头",
        "added": "ter",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 400,
    "id": "war",
    "rime": "WAR",
    "title": "守卫警告别歪曲问题免战争",
    "story": "守卫警告说：“要小心而不要歪曲国与国之间的问题，以免发生战争。”",
    "words": [
      {
        "word": "war",
        "meaning": "战争",
        "keyword": "战争",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "ward",
        "meaning": "守卫",
        "keyword": "守卫",
        "added": "d",
        "position": "start"
      },
      {
        "word": "warn",
        "meaning": "警告",
        "keyword": "警告",
        "added": "n",
        "position": "start"
      },
      {
        "word": "wary",
        "meaning": "小心的",
        "keyword": "小心",
        "added": "y",
        "position": "start"
      },
      {
        "word": "warp",
        "meaning": "歪曲",
        "keyword": "歪曲",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 401,
    "id": "gene",
    "rime": "GENE",
    "title": "基因科学家改研究杜松子酒起源",
    "story": "日内瓦的物种基因科学家因研究麝猫的遗传因子而吃足了苦头，后来为了安全起见，改为研究杜松子酒的起源。",
    "words": [
      {
        "word": "gene",
        "meaning": "基因、遗传因子",
        "keyword": "基因",
        "added": "ø",
        "position": "start"
      },
      {
        "word": "geneva",
        "meaning": "日内瓦、杜松子酒",
        "keyword": "日内瓦",
        "added": "va",
        "position": "start"
      },
      {
        "word": "genera",
        "meaning": "种类、属（GENUS的复数）",
        "keyword": "物种",
        "added": "ra",
        "position": "start"
      },
      {
        "word": "genet",
        "meaning": "麝猫",
        "keyword": "麝猫",
        "added": "t",
        "position": "start"
      },
      {
        "word": "genesis",
        "meaning": "起源",
        "keyword": "起源",
        "added": "sis",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 402,
    "id": "aga",
    "rime": "AGA",
    "title": "阿加西不爱玛瑙却反复吃琼脂蘑菇",
    "story": "阿加西不爱玛瑙，但对石花菜、蘑菇等再一次地吃也不厌。",
    "words": [
      {
        "word": "agassi",
        "meaning": "阿加西",
        "keyword": "阿加西",
        "added": "ssi",
        "position": "start"
      },
      {
        "word": "agate",
        "meaning": "玛瑙",
        "keyword": "玛瑙",
        "added": "te",
        "position": "start"
      },
      {
        "word": "agar",
        "meaning": "石花菜、琼脂",
        "keyword": "石花菜",
        "added": "r",
        "position": "start"
      },
      {
        "word": "agaric",
        "meaning": "蘑菇、伞菌",
        "keyword": "蘑菇",
        "added": "ric",
        "position": "start"
      },
      {
        "word": "again",
        "meaning": "再一次",
        "keyword": "再一次",
        "added": "in",
        "position": "start"
      }
    ]
  }
];

const colors = ['#466B8A', '#B85C45', '#6D7750', '#815D86', '#3D7C73', '#A85E54', '#53718A', '#8B6A45', '#3F7A68', '#6C6291'];

export const familiesBatch9: WordFamily[] = seeds.map((seed, index) => {
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
    tip: `${positionTip}，一口气记住这一组 ${seed.words.length} 个单词。`,
    color: colors[index % colors.length],
  };
});
