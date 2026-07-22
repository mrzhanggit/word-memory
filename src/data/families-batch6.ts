import type { StorySegment, WordFamily } from '../types';

type WordSeed = [word: string, cn: string, onset?: string];
type FamilySeed = {
  id: string;
  rime: string;
  title: string;
  story: string;
  links: [text: string, word: string][];
  words: WordSeed[];
};

const colors = ['#4A6FA5', '#E15A3B', '#D9A441', '#2F6F5E', '#C25E7E', '#7A5C9E', '#B0762A', '#3E7CA6'];

function segmentStory(text: string, links: FamilySeed['links']): StorySegment[] {
  const segments: StorySegment[] = [];
  let cursor = 0;
  for (const [label, word] of links) {
    const index = text.indexOf(label, cursor);
    if (index < 0) continue;
    if (index > cursor) segments.push({ text: text.slice(cursor, index) });
    segments.push({ text: label, word });
    cursor = index + label.length;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor) });
  return segments;
}

function deriveOnset(word: string, rime: string): string {
  const lowerRime = rime.toLowerCase();
  if (word.endsWith(lowerRime)) return word.slice(0, -lowerRime.length) || 'ø';
  if (word.startsWith(lowerRime)) return `ø+${word.slice(lowerRime.length)}`;
  return word.toUpperCase();
}

// 《图像英文记忆法》02 卷第 162~230 页，每页一个词族。
const seeds: FamilySeed[] = [
  { id: 'igh', rime: 'IGH', title: '短腿老鼠叹灯台', story: '小老鼠想上灯台偷油吃，但在灯台附近叹气道：“灯台太高，只怪自己大腿太短。”', links: [['附近','nigh'],['叹气','sigh'],['高','high'],['大腿','thigh']], words: [['high','高'],['nigh','附近'],['sigh','叹气'],['thigh','大腿、大腿骨']] },
  { id: 'lush', rime: 'LUSH', title: '醉汉错认融雪为丝绒', story: '醉汉喝得醉醺醺时，不但会脸红激动，更会把融雪错看成丝绒。', links: [['醉醺醺','lush'],['脸红','blush'],['激动','flush'],['融雪','slush'],['丝绒','plush']], words: [['lush','醉醺醺'],['blush','脸红'],['flush','激动'],['plush','丝绒'],['slush','融雪、泥泞']] },
  { id: 'ow', rime: 'OW', title: '母猪拖彩虹收星辰', story: '母猪拖曳着弓形的虹，掠过低空去收割星辰。', links: [['母猪','sow'],['拖曳','tow'],['弓','bow'],['低','low'],['收割','mow']], words: [['low','低'],['mow','割、刈'],['sow','母猪'],['tow','拖曳'],['bow','弓、虹']] },
  { id: 'ab', rime: 'AB', title: '探员猛击饶舌歌手', story: '乌龙探员戴着护耳到实验室逮捕饶舌歌手，一阵猛击后才见识什么是饶舌之啄。', links: [['护耳','tab'],['实验室','lab'],['逮捕','nab'],['饶舌','gab'],['猛击','jab'],['啄','dab']], words: [['tab','护耳'],['lab','实验室、研究所'],['nab','逮捕'],['gab','饶舌'],['jab','猛击'],['dab','啄']] },
  { id: 'unt', rime: 'UNT', title: '小家畜搜寻队', story: '由于率直，他被推为搜寻矮小家畜的主力。他发牢骚说：“太多工作会妨碍我的发育。”', links: [['率直','blunt'],['推','bunt'],['搜寻','hunt'],['矮小家畜','runt'],['主力','brunt'],['发牢骚','grunt'],['妨碍我的发育','stunt']], words: [['bunt','推'],['hunt','搜索'],['runt','矮小的家畜'],['blunt','率直'],['brunt','主力'],['grunt','发牢骚'],['stunt','妨碍发育']] },
  { id: 'ull', rime: 'ULL', title: '谷仓里的高个乡下佬', story: '身高2.4米的乡下佬没去公牛队打球，却在晦暗的谷仓里安静地择荚壳，真是最大的暴殄天物。', links: [['乡下佬','gull'],['晦暗','dull'],['安静','lull'],['择','cull'],['荚壳','hull'],['最大','full']], words: [['cull','择'],['dull','晦暗'],['full','最大的'],['gull','乡下佬'],['hull','荚壳'],['lull','安静']] },
  { id: 'ink2', rime: 'INK', title: '监牢告密者的坏名声', story: '监牢里的告密者用墨水写告密函，他最畏怯的是：当怪癖恶行被抓到时，坏名声会在眨眼间像落日般下沉。', links: [['监牢','clink'],['告密者','fink'],['墨水','ink'],['畏怯','shrink'],['怪癖','kink'],['坏名声','stink'],['眨眼','blink'],['下沉','sink']], words: [['ink','墨水'],['fink','告密者'],['kink','怪癖'],['sink','下沉'],['stink','坏名声'],['blink','眨眼'],['clink','监牢'],['shrink','畏怯']] },
  { id: 'eg', rime: 'EG', title: '断腿乞丐的百万借口', story: '少了一条腿是他乞讨的借口，但用小桶装钱，开口又是百万的字首，能要到钱才怪。', links: [['腿','leg'],['乞讨','beg'],['借口','peg'],['小桶','keg'],['百万','mega']], words: [['beg','乞讨、恳求'],['keg','小桶'],['leg','腿'],['mega','表示百万的字首','MEGA-'],['peg','钉子、借口']] },
  { id: 'ight2', rime: 'IGHT', title: '夜间战斗的灯光', story: '为了提高夜间打仗的能力，它将灯光固定得更牢固，好让右眼的视力更好。', links: [['夜间','night'],['打仗','fight'],['能力','might'],['灯光','light'],['牢固','tight'],['右','right'],['视力','sight']], words: [['fight','打仗'],['light','灯光'],['might','能力'],['night','夜晚'],['right','右'],['sight','视力'],['tight','牢固']] },
  { id: 'zzz', rime: 'ZZZ', title: '字典最后的打鼾声', story: '你以为 ZZZ 只是漫画家的打鼾符号，其实它也是牛津字典的最后一个字，和 ZIZZ、DOZE 一样都在打瞌睡。', links: [['ZZZ','zzz'],['ZIZZ','zizz'],['DOZE','doze']], words: [['zzz','打鼾声'],['zizz','打瞌睡','ZI'],['doze','打瞌睡','DOZE']] },
  { id: 'oak', rime: 'OAK', title: '橡树下的湿斗篷', story: '他抱怨说：“下大雨时我身穿斗篷躲在橡树下，却错认成燕麦片处，全身还是被淋得湿透。”', links: [['抱怨','croak'],['斗篷','cloak'],['橡树','oak'],['燕麦片','oat'],['湿透','soak']], words: [['oak','橡树'],['soak','湿透、泡浸'],['cloak','斗篷'],['croak','抱怨'],['oat','燕麦片','OAT']] },
  { id: 'out', rime: 'OUT', title: '痛风球员的出局借口', story: '糊涂人被判出局，他撅嘴说：“这一回合我击球大败，是因为痛风招来的失败。”', links: [['糊涂人','lout'],['出局','out'],['撅嘴','pout'],['回合','bout'],['大败','rout'],['痛风','gout'],['招来','tout']], words: [['out','出局'],['bout','一回合'],['gout','痛风'],['lout','糊涂人'],['pout','撅嘴'],['rout','大败'],['tout','招来']] },
  { id: 'ation', rime: 'ATION', title: '通胀下的康乃馨假期', story: '国家配给关系引起通货膨胀，于是人们只好休假到车站卖康乃馨。', links: [['国家','nation'],['配给','ration'],['关系','relation'],['通货膨胀','inflation'],['休假','vacation'],['车站','station'],['康乃馨','carnation']], words: [['nation','国家'],['ration','配给'],['station','车站'],['vacation','休假'],['carnation','康乃馨'],['inflation','通货膨胀'],['relation','关系']] },
  { id: 'gle', rime: 'GLE', title: '老鹰跨洋偷渡记', story: '从老鹰的观点来看，实在分不清它从西伯利亚飞到北美洲算奋斗还是偷渡。', links: [['老鹰','eagle'],['观点','angle'],['奋斗','struggle'],['偷渡','smuggle']], words: [['angle','角度、观点'],['eagle','老鹰'],['smuggle','偷渡、走私'],['struggle','奋斗']] },
  { id: 'ose', rime: 'OSE', title: '丢了鼻子的玫瑰姿态', story: '谁的鼻子遗失了，谁就失去了姿态，用一份玫瑰作补救或许能暂代一时。', links: [['谁的','whose'],['鼻子','nose'],['遗失','lose'],['姿态','pose'],['一份','dose'],['玫瑰','rose']], words: [['nose','鼻子'],['lose','遗失'],['pose','姿势、架势'],['rose','玫瑰'],['dose','一帖、一份'],['whose','谁的']] },
  { id: 'art2', rime: 'ART', title: '公鹿的尖酸艺展评论', story: '公鹿开着小玩具车到市场看时髦的艺术展，看完一部分后尖酸地说：“狗屁艺术少唬人了。”', links: [['公鹿','hart'],['小玩具车','kart'],['市场','mart'],['时髦','smart'],['艺术','art'],['一部分','part'],['尖酸','tart']], words: [['art','艺术'],['hart','公鹿'],['kart','小玩具车'],['mart','市场'],['part','一部分'],['tart','尖酸的'],['smart','时髦的']] },
  { id: 'moo', rime: 'MOO', title: '月下恶惚的麋鹿', story: '麋鹿哞哞地对摩尔人说：“是月亮的气氛使我情绪恶惚，才被你逮住。”', links: [['麋鹿','moose'],['哞哞','moo'],['摩尔人','moor'],['月亮','moon'],['气氛','mood'],['恶惚','moony']], words: [['moo','牛叫声'],['moor','摩尔人'],['moon','月亮'],['mood','气氛、情绪'],['moose','麋鹿'],['moony','恶惚']] },
  { id: 'ub', rime: 'UB', title: '英式酒吧的木盆陷阱', story: '幼稚的年轻人初次到英式酒吧或俱乐部时，得先擦亮眼睛，别太靠近俱乐部中心的木盆。', links: [['年轻人','cub'],['英式酒吧','pub'],['俱乐部','club'],['擦亮','rub'],['中心','hub'],['木盆','tub']], words: [['cub','幼兽、年轻人'],['hub','中心'],['rub','擦亮'],['pub','英式酒吧'],['tub','木盆'],['club','俱乐部']] },
  { id: 'ute2', rime: 'UTE', title: '瀑布降落伞精准一跃', story: '从瀑布上跳降落伞时，要沉默、敏锐，以可爱的姿势精确地跃向降落定点。', links: [['瀑布','chute'],['降落伞','chute'],['沉默','mute'],['敏锐','acute'],['可爱','cute']], words: [['cute','可爱'],['mute','沉默'],['acute','敏锐'],['chute','降落伞、瀑布']] },
  { id: 'ad', rime: 'AD', title: '坏广告让孩子痴迷', story: '爸爸坐在垫子上悲哀地说：“恶棍制作了坏广告，造成小孩子们痴迷狂热一时，这很不好。”', links: [['爸爸','dad'],['垫子','pad'],['悲哀','sad'],['恶棍','cad'],['坏','bad'],['广告','ad'],['小孩子','tad'],['痴迷','mad'],['狂热一时','fad']], words: [['ad','广告'],['bad','坏'],['cad','恶棍'],['dad','爸爸'],['fad','狂热一时'],['mad','疯狂、痴迷'],['pad','垫子'],['sad','悲哀'],['tad','小孩子']] },
  { id: 'air', rime: 'AIR', title: '天降头发引出物理定律', story: '由于天空落下一根毛发，引发他的第六感到市集凑对椅子，来证明物理原理，使自己的 IQ 又进一级。', links: [['天空','air'],['毛发','hair'],['第六感','flair'],['市集','fair'],['凑对','pair'],['椅子','chair'],['一级','stair']], words: [['air','天空'],['hair','毛发'],['pair','对'],['fair','市集'],['chair','椅子'],['flair','第六感'],['stair','级']] },
  { id: 'ap', rime: 'AP', title: '打盹的伐木工人', story: '戴着无边帽的伐木工人，看着放在膝部的地图打盹，农妇轻敲叫醒他并唠叨：“我指定要你将门前大树挖倒。”', links: [['无边帽','cap'],['膝部','lap'],['地图','map'],['打盹','nap'],['轻敲','rap'],['唠叨','yap'],['指定','tap'],['挖倒','sap']], words: [['cap','无边帽'],['lap','膝部'],['map','地图'],['nap','午睡、打盹'],['rap','轻敲'],['sap','挖倒、削弱'],['tap','指定'],['yap','唠叨']] },
  { id: 'ire', rime: 'IRE', title: '愤怒种马坠入泥沼', story: '愤怒是可怕的火，种马正因愤怒而从顶峰坠落到泥沼，遭遇悲惨命运。', links: [['愤怒','ire'],['可怕','dire'],['火','fire'],['种马','sire'],['顶峰','spire'],['泥沼','mire'],['悲惨','dire']], words: [['ire','愤怒'],['dire','可怕、悲惨'],['fire','火'],['sire','种马、祖先'],['mire','泥沼'],['spire','顶峰']] },
  { id: 'ire2', rime: 'IRE', title: '辞职后穷得租内裤', story: '愤怒是一根能引起火的金属线，厌倦工作时别马上辞职，否则会穷得连内裤都要租。', links: [['愤怒','ire'],['火','fire'],['金属线','wire'],['厌倦','tire'],['租','hire']], words: [['ire','愤怒'],['fire','火'],['tire','累、厌倦'],['hire','雇用、租借'],['wire','金属线']] },
  { id: 'ape', rime: 'APE', title: '披肩猩猩看恶行录像', story: '猩猩颈背披着披肩，边打呵欠边看录像带，它说：“人类抢夺、强奸这类坏行为可不能模仿。”', links: [['猩猩','ape'],['颈背','nape'],['披肩','cape'],['打呵欠','gape'],['录像带','tape'],['抢夺、强奸','rape'],['模仿','ape']], words: [['ape','猩猩、模仿'],['cape','披肩'],['gape','打呵欠、张口凝视'],['nape','颈背'],['rape','抢夺、强奸'],['tape','录音带、录像带']] },
  { id: 'alm', rime: 'ALM', title: '棕榈树下的镇定圣歌', story: '晕眩时，到棕榈树下唱圣歌，会让你有如服下镇定剂似的得到平静。', links: [['晕眩','qualm'],['棕榈树','palm'],['圣歌','psalm'],['镇定剂','balm'],['平静','calm']], words: [['balm','镇定剂'],['calm','平静的'],['palm','棕榈树、手掌'],['psalm','圣歌'],['qualm','晕眩']] },
  { id: 'aid', rime: 'AID', title: '海军挖角沉稳侍女', story: '海军将领下令搜捕结有发辫、沉着稳重的侍女，为的是挖角来支援军中餐厅。', links: [['海军将领','braid'],['搜捕','raid'],['发辫','braid'],['沉着稳重','staid'],['侍女','maid'],['挖角','raid'],['支援','aid']], words: [['aid','支援'],['maid','侍女'],['raid','挖角、搜捕'],['braid','发辫、海军将领'],['staid','沉着稳重']] },
  { id: 'inge', rime: 'INGE', title: '烧焦刘海的狂欢', story: '她畏缩一旁的关键，是狂欢时刘海儿被燎焦、变了色泽，因而一阵懊恼。', links: [['畏缩','cringe'],['关键','hinge'],['狂欢','binge'],['刘海儿','fringe'],['燎焦','singe'],['色泽','tinge'],['一阵懊恼','twinge']], words: [['binge','狂欢'],['hinge','关键'],['singe','燎焦'],['tinge','色泽'],['cringe','畏缩'],['fringe','刘海儿'],['twinge','一阵懊恼']] },
  { id: 'oom', rime: 'OOM', title: '织布机弹出厄运交响曲', story: '电影镜头推进到房间，只见主角隆隆作响地敲打钢琴，像织布机似的织出厄运交响曲。', links: [['镜头推进','zoom'],['房间','room'],['隆隆作响','boom'],['织布机','loom'],['厄运','doom']], words: [['zoom','镜头推进'],['room','房间'],['boom','隆隆声'],['loom','织布机'],['doom','厄运']] },
  { id: 'oe', rime: 'OE', title: '浮冰上的伤脚士兵', story: '名叫乔的士兵拿着锄头去采鱼卵，不幸被敌人母鹿踩伤脚趾，他悲哀地坐在浮冰上哭。', links: [['乔','joe'],['士兵','joe'],['锄头','hoe'],['鱼卵','roe'],['敌人','foe'],['母鹿','doe'],['脚趾','toe'],['悲哀','woe'],['浮冰','floe']], words: [['joe','乔、士兵'],['hoe','锄头'],['roe','鱼卵'],['foe','敌人'],['doe','母鹿'],['toe','脚趾'],['woe','悲哀'],['floe','浮冰']] },
  { id: 'ob', rime: 'OB', title: '天鹅目睹暴民抢劫', story: '雄天鹅很满意它在水中上下浮动打高吊球的工作，直到看到湖边暴民抢劫，它才沮丧地啜泣。', links: [['雄天鹅','cob'],['上下浮动','bob'],['高吊球','lob'],['工作','job'],['暴民','mob'],['抢劫','rob'],['啜泣','sob']], words: [['cob','雄天鹅'],['bob','在水中上下浮动'],['lob','高吊球'],['job','工作'],['mob','暴民'],['rob','抢劫'],['sob','啜泣']] },
  { id: 'eed', rime: 'EED', title: '播种前先除芦苇杂草', story: '在播撒种子和施肥料以前，必须注意先清除芦苇等杂草，这才是正确的行为。', links: [['种子','seed'],['施肥料','feed'],['必须','need'],['注意','heed'],['芦苇','reed'],['杂草','weed'],['行为','deed']], words: [['feed','喂饲料、施肥料'],['seed','种子'],['need','必须'],['heed','注意、留心'],['reed','芦苇'],['weed','杂草'],['deed','行为']] },
  { id: 'ill', rime: 'ILL', title: '寒中削牙签取暖', story: '他身穿斜纹布衣，对抗寒冷本就训练有术，但仍旧被冻得要呕吐，还得使出把木片削成牙签的技术取暖。', links: [['斜纹布','twill'],['寒冷','chill'],['训练','drill'],['仍旧','still'],['要呕吐','ill'],['木片','spill'],['牙签','quill'],['技术','skill']], words: [['ill','要呕吐的'],['twill','斜纹布'],['chill','寒冷'],['drill','训练'],['still','仍旧'],['spill','木片'],['skill','技术'],['quill','牙签']] },
  { id: 'oth', rime: 'OTH', title: '懒汉喝下泡沫飞蛾清汤', story: '懒惰的人爱喝泡沫红茶或清汤这种简单食物，连蛾一起喝下肚也不在乎。', links: [['懒惰','sloth'],['泡沫','froth'],['清汤','broth'],['蛾','moth']], words: [['sloth','懒惰'],['broth','清汤'],['froth','泡沫'],['moth','蛾']] },
  { id: 'oll2', rime: 'OLL', title: '白天拖钓晚上闲逛', story: '他白天到海上拖钓海龟，晚上则滚动肢体闲逛到各酒吧钓美人鱼。', links: [['拖钓','troll'],['滚动','roll'],['闲逛','stroll']], words: [['roll','滚动、打滚'],['troll','拖钓'],['stroll','游历、闲逛']] },
  { id: 'op', rime: 'OP', title: '跳着偷爆米花的高手', story: '他的单足跳功夫已登峰造极，所以敢在警察面前扮鬼脸，在零售店公然偷爆米花。', links: [['单足跳','hop'],['登峰','top'],['警察','cop'],['扮鬼脸','mop'],['零售店','shop'],['爆米花','pop']], words: [['cop','警察'],['hop','单足跳'],['mop','扮鬼脸、拖把'],['pop','爆米花'],['top','顶点、到顶'],['shop','零售店']] },
  { id: 'eck', rime: 'ECK', title: '甲板女郎邀吸血鬼轻吻', story: '女郎在甲板上对吸血鬼招手说：“见鬼了？欢迎你轻吻我的颈，顺便检验有没有艾滋病。”', links: [['甲板','deck'],['招手','beck'],['见鬼','heck'],['轻吻','peck'],['颈','neck']], words: [['beck','点头、招手'],['deck','甲板'],['heck','见鬼'],['neck','颈'],['peck','啄、轻吻']] },
  { id: 'ace', rime: 'ACE', title: '一流选手的步伐与面子', story: '一流的运动选手赛跑时要注意步伐和速度，不要为了上体育版的花边新闻，输了比赛又输了面子。', links: [['一流','ace'],['赛跑','race'],['步伐','pace'],['花边','lace'],['面子','face']], words: [['ace','纸牌A、一流'],['pace','步伐、速度'],['face','脸、面子'],['race','赛跑'],['lace','花边、鞋带']] },
  { id: 'old', rime: 'OLD', title: '老人的六种现象', story: '年老的人有六种现象：手脚冰冷、皮肤折叠、黄金财富多、抓住权力、卖完所有、说过该说的话。', links: [['年老','old'],['冰冷','cold'],['折叠','fold'],['黄金','gold'],['抓住','hold'],['卖完','sold'],['说过','told']], words: [['old','老'],['cold','冷的'],['fold','折叠的'],['gold','黄金、财富'],['hold','抓住'],['sold','卖完'],['told','说过了']] },
  { id: 'oil2', rime: 'OIL', title: '石油的六种困境', story: '取得一桶石油要经过沸腾、酷热、糟蹋、土壤、辛苦和彻底搅拌六种困境。', links: [['石油','oil'],['沸腾','boil'],['酷热','broil'],['糟蹋','spoil'],['土壤','soil'],['辛苦','toil'],['彻底搅拌','roil']], words: [['oil','石油'],['boil','沸腾'],['broil','酷热'],['soil','土壤、土地'],['spoil','糟蹋'],['toil','辛苦'],['roil','彻底搅拌']] },
  { id: 'ane', rime: 'ANE', title: '毒甘蔗让鹤失去水准', story: '珍在小路上慢跑，看到一只鹤因为吃了毒甘蔗，两翼失灵只能滑翔，因而大失水准。', links: [['珍','jane'],['小路','lane'],['鹤','crane'],['毒','bane'],['甘蔗','cane'],['翼','vane'],['水准','plane']], words: [['bane','毒'],['cane','甘蔗'],['jane','珍'],['lane','小路、巷弄'],['vane','风车的翼'],['crane','鹤、苍鹭'],['plane','水准、平面、滑翔']] },
  { id: 'eam', rime: 'EAM', title: '蒸汽蒸奶油球队', story: '足球队长梦到横梁闪着微光，于是他让队员吃蒸汽蒸奶油，缝合了赛前紧张情绪。', links: [['队','team'],['梦','dream'],['横梁','beam'],['微光','gleam'],['蒸汽','steam'],['奶油','cream'],['缝合','seam']], words: [['seam','缝合'],['beam','梁'],['team','队'],['dream','梦'],['cream','奶油'],['gleam','闪微光'],['steam','蒸汽']] },
  { id: 'ile2', rime: 'ILE', title: '微笑反杀的流亡者', story: '流亡者的素描是：如爬虫类般移动敏捷，中了诡计还能微笑地把敌对方摆平。', links: [['流亡','exile'],['素描','profile'],['爬虫类','reptile'],['移动','mobile'],['敏捷','agile'],['诡计','wile'],['微笑','smile'],['敌对','hostile']], words: [['wile','诡计'],['exile','流亡'],['smile','微笑'],['agile','敏捷'],['mobile','移动'],['hostile','敌对的'],['profile','素描'],['reptile','爬虫类']] },
  { id: 'ring', rime: 'RING', title: '春日百克拉戒指', story: '春天他带来用丝带包扎的戒指，她感动得可拧出一水库眼泪。', links: [['春天','spring'],['带来','bring'],['丝带','string'],['戒指','ring'],['拧','wring']], words: [['ring','戒指'],['bring','带来'],['wring','拧'],['string','丝带'],['spring','春天']] },
  { id: 'aw2', rime: 'AW', title: '用锯对付聂噪老婆', story: '杀猪的有句格言：“若不畏于法律，对付聂噪的老婆，与其用爪提她咽喉，不如用锯。”', links: [['格言','saw'],['法律','law'],['聂噪','caw'],['爪','paw'],['咽喉','jaw'],['锯','saw']], words: [['saw','格言、锯'],['law','法律'],['caw','聂噪'],['paw','脚爪、手爪'],['jaw','咽喉、老虎钳']] },
  { id: 'pai', rime: 'PAI', title: '苦行者用油漆涂痛脚', story: '苦行者用印度硬币付清一桶油漆的钱，为的是要涂抹他的一双痛脚。', links: [['印度硬币','paisa'],['付清','paid'],['一桶','pail'],['油漆','paint'],['一双','pair'],['痛','pain']], words: [['paid','付清的'],['pail','桶'],['pain','痛'],['pair','一双、一对'],['paint','油漆、颜料'],['paisa','派，印度硬币单位']] },
  { id: 'unk', rime: 'UNK', title: '醉臭鼬错认树干为皮箱', story: '臭鼬爬树干当然简单，但喝醉了的臭鼬会把树干看成厚木头做的大皮箱，最后考试失败。', links: [['臭鼬','skunk'],['树干','trunk'],['喝醉','drunk'],['厚木头','chunk'],['失败','flunk']], words: [['skunk','臭鼬'],['trunk','树干、大皮箱'],['drunk','醉了、醉汉'],['chunk','厚木头、矮胖'],['flunk','失败']] },
  { id: 'ike', rime: 'IKE', title: '骑单车环球的梭鱼', story: '梭鱼游手好闲，喜欢徒步旅行，它游到堤防过不去，只好改骑脚踏车继续环球之旅。', links: [['梭鱼','pike'],['游手好闲','mike'],['喜欢','like'],['徒步旅行','hike'],['堤防','dike'],['脚踏车','bike']], words: [['pike','梭鱼、矛'],['mike','游手好闲'],['like','喜欢、像'],['hike','徒步旅行'],['dike','堤防'],['bike','脚踏车']] },
  { id: 'eer2', rime: 'EER', title: '啤酒号小公牛改航', story: '“啤酒号”在一阵古怪而轻蔑的欢呼中改变航道，掌舵的小公牛斜瞅着说：“再嘲笑我，我就去打球。”', links: [['啤酒','beer'],['古怪','queer'],['轻蔑','sneer'],['欢呼','cheer'],['改变航道','veer'],['掌舵','steer'],['小公牛','steer'],['斜瞅','leer']], words: [['beer','啤酒'],['queer','古怪的'],['cheer','欢呼'],['sneer','轻蔑、冷笑'],['steer','掌舵、小公牛'],['veer','改变方向、路线'],['leer','斜瞅']] },
  { id: 'eed2', rime: 'EED', title: '错误种子一餐间蔓延', story: '行为时需要特别留意！只要一顿饭时间，错误的种子就会像野草蔓延得不得了。', links: [['行为','deed'],['需要','need'],['留意','heed'],['一顿饭','feed'],['种子','seed'],['野草','weed']], words: [['deed','行为'],['heed','注意、留心'],['need','需要'],['feed','一餐'],['seed','种子'],['weed','野草']] },
  { id: 'ed', rime: 'ED', title: '红床边的求婚', story: '教育部的爱德和女朋友饱餐后，引导她到一张红色的床边，摊开底牌说：“嫁给我吧！”', links: [['教育部','ed'],['爱德','ed'],['饱餐','fed'],['引导','led'],['红','red'],['床','bed'],['摊开','ted'],['嫁','wed']], words: [['ed','教育部、Edward等的缩写'],['fed','饱餐'],['led','引导'],['red','红'],['bed','床'],['ted','摊开'],['wed','嫁娶']] },
  { id: 'ome', rime: 'OME', title: '住在国会圆顶的鸽子', story: '鸽子说：“有空到我家来，我住的地方有一些特别，就在国会大厦的圆顶。”', links: [['有空','some'],['家','home'],['来','come'],['一些','some'],['圆顶','dome']], words: [['home','家'],['some','一些'],['dome','圆顶'],['come','来']] },
  { id: 'eak', rime: 'EAK', title: '鸟喙畸形人的漏洞', story: '嘴巴长得像鸟喙的畸形人跑上荒凉山顶叫道：“我的漏洞是嘴巴丑得不敢说话，不是因为软弱。”', links: [['鸟喙','beak'],['畸形','freak'],['荒凉','bleak'],['山顶','peak'],['漏洞','leak'],['说话','speak'],['软弱','weak']], words: [['beak','鸟喙'],['peak','山顶'],['leak','漏洞'],['weak','软弱'],['bleak','荒凉的'],['freak','畸形'],['speak','说话']] },
  { id: 'imp', rime: 'IMP', title: '黑猩猩装扮的跛行顽童', story: '小顽童精心打扮成黑猩猩跛行，老鸨却吝啬地给一文钱当赏金。', links: [['小顽童','imp'],['精心打扮','primp'],['黑猩猩','chimp'],['跛行','limp'],['老鸨','pimp'],['吝啬','skimp']], words: [['imp','顽童'],['primp','精心打扮、装饰'],['chimp','黑猩猩'],['limp','跛行'],['pimp','老鸨'],['skimp','吝啬地给予']] },
  { id: 'unk2', rime: 'UNK', title: '逃亡生手捡垃圾吐司', story: '怯懦的生手才会在溜号时捡食垃圾堆里浸泡过水的厚片吐司吃。', links: [['怯懦','funk'],['生手','punk'],['溜号','bunk'],['垃圾','junk'],['浸泡','dunk'],['厚片','hunk']], words: [['bunk','溜号'],['dunk','浸泡'],['funk','怯懦、恐惧'],['hunk','厚片的'],['junk','垃圾、废物'],['punk','笨人、生手']] },
  { id: 'ave', rime: 'AVE', title: '洞窟与波浪的道别', story: '洞窟说：“你来了我欢迎，你去了我说再见。”波浪咆哮道：“我在为政府铺设观光步道，算是我给你的礼物。”', links: [['洞窟','cave'],['欢迎','ave'],['再见','ave'],['波浪','wave'],['咆哮','rave'],['铺设','pave'],['给','gave']], words: [['ave','欢迎、再见'],['cave','洞窟'],['wave','波浪'],['rave','咆哮'],['pave','铺设'],['gave','给']] },
  { id: 'en', rime: 'EN', title: '母鸡母驴都懂禅', story: '母鸡的巢穴在山顶，母驴住沼泽区，她们知识面有限，所以不认识十和笔，却不知从何时开始认识禅。', links: [['母鸡','hen'],['巢穴','den'],['山顶','ben'],['母驴','jen'],['沼泽','fen'],['认识','ken'],['十','ten'],['笔','pen'],['何时','when'],['开始','then'],['禅','zen']], words: [['hen','母鸡'],['den','巢穴'],['ben','山顶'],['jen','母驴'],['fen','沼泽'],['ken','认识'],['ten','十'],['pen','笔'],['then','然后、所以'],['when','何时'],['zen','禅']] },
  { id: 'ole', rime: 'OLE', title: '鼹鼠家变高尔夫洞', story: '鼹鼠的悲哀是自己所有的家都变成高尔夫洞，唯一的别墅洞穴又被塞了女式披肩。', links: [['鼹鼠','mole'],['悲哀','dole'],['所有','whole'],['洞','hole'],['唯一','sole'],['女式披肩','stole']], words: [['mole','鼹鼠、防波堤'],['dole','悲哀、命运'],['whole','所有的'],['hole','洞'],['sole','唯一'],['stole','女式披肩']] },
  { id: 'umb', rime: 'UMB', title: '拇指警告麻痹变哑', story: '食指大动想吃白木薯，拇指说：“只要吃下少许，就会造成喉头完全麻痹，并变哑。”', links: [['拇指','thumb'],['少许','crumb'],['完全','plumb'],['麻痹','numb'],['变哑','dumb']], words: [['thumb','拇指'],['crumb','少许'],['plumb','完全的'],['dumb','哑的'],['numb','麻痹']] },
  { id: 'ush', rime: 'USH', title: '酒鬼冲破小镇寂静', story: '酒鬼发酒疯，又推又冲又闯地破坏了灌木小镇的寂静。', links: [['酒鬼','lush'],['推','push'],['冲','rush'],['闯','rush'],['破坏','mush'],['灌木','bush'],['寂静','hush']], words: [['lush','酒鬼、丰茂的'],['push','推'],['rush','冲、闯'],['mush','破坏、粉碎'],['bush','灌木、小镇'],['hush','寂静、使寂静']] },
  { id: 'use3', rime: 'USE', title: '用原谅拒绝控告虐待', story: '原谅别人可散发大爱，拒绝使用控告的手段去指控先生虐待。', links: [['原谅','excuse'],['散发','effuse'],['拒绝','refuse'],['使用','use'],['控告','accuse'],['虐待','abuse']], words: [['use','使用'],['excuse','原谅'],['effuse','散发'],['refuse','拒绝'],['accuse','控告'],['abuse','虐待']] },
  { id: 'ock', rime: 'OCK', title: '码头公鸡的摇滚喜剧', story: '公鸡在码头唱摇滚歌曲，长着痘疮的首领嘲笑道：“我令你改演喜剧，否则痛殴你一顿后将你锁进货仓。”', links: [['公鸡','cock'],['码头','dock'],['摇滚','rock'],['痘疮','pock'],['首领','cock'],['嘲笑','mock'],['喜剧','sock'],['痛殴','sock'],['锁','lock']], words: [['cock','公鸡、首领'],['dock','码头'],['rock','摇滚、岩石'],['pock','痘疮'],['mock','嘲笑'],['sock','喜剧、痛殴'],['lock','锁']] },
  { id: 'an', rime: 'AN', title: '粉丝开行李车去钓鱼', story: '一个男人很容易成为粉丝，能够违背禁令开着行李车去钓鱼，难怪要吃一记平底锅。', links: [['一个','an'],['男人','man'],['粉丝','fan'],['能够','can'],['行李车','van'],['平底锅','pan']], words: [['an','一'],['man','男人'],['can','能够'],['fan','迷、粉丝'],['van','行李车'],['pan','平底锅']] },
  { id: 'ill2', rime: 'ILL', title: '比尔面粉厂的药费账单', story: '比尔是个面粉厂长，他满腮装满了药丸，口袋里的钱刚好只够付生病的医药账单。', links: [['比尔','bill'],['面粉厂','mill'],['腮','gill'],['装满','fill'],['药丸','pill'],['生病','ill'],['账单','bill']], words: [['ill','生病的'],['bill','钞票、账单、比尔'],['mill','磨坊、面粉厂'],['gill','腮、垂肉'],['fill','装满'],['pill','药丸']] },
  { id: 'ill3', rime: 'ILL', title: '少女誓死守贞洁', story: '少女说：“贞洁是妇女的基石，就算将我杀了，我也不会跟你到小山去干那不体面的勾当。”', links: [['少女','jill'],['基石','sill'],['就算将','will'],['杀','kill'],['小山','hill'],['不体面','ill']], words: [['ill','不体面'],['jill','少女、情人'],['sill','基石、窗台'],['will','将、要'],['kill','杀'],['hill','小山、丘陵']] },
  { id: 'ea', rime: 'EA', title: '海上跳蚤向敌机求援', story: '海上飞来敌机，跳蚤恳求说：“拜托借点茶叶和豌豆应急，否则这仗打不下去了。”', links: [['海','sea'],['敌机','ea'],['跳蚤','flea'],['恳求','plea'],['茶','tea'],['豌豆','pea']], words: [['ea','敌机的缩写'],['sea','海'],['plea','恳求'],['flea','跳蚤'],['tea','茶'],['pea','豌豆']] },
  { id: 'oke', rime: 'OKE', title: '把古柯碱当可乐', story: '“醒醒！别开错玩笑，把大麻当烟，把古柯碱当可乐。被警察发现后，只能带上轭到牢里闲逛。”', links: [['醒','woke'],['玩笑','joke'],['烟','smoke'],['古柯碱','coke'],['可乐','coke'],['轭','yoke'],['闲逛','poke']], words: [['woke','醒'],['joke','玩笑'],['smoke','烟'],['coke','可乐、古柯碱'],['yoke','轭'],['poke','闲逛、插入']] },
  { id: 'ord', rime: 'ORD', title: '前科犯禁带细绳与刀剑', story: '前科犯的情绪可能有问题，法令一致通过：有前科记录者身上不准带细绳与刀剑。', links: [['前科','record'],['情绪','chord'],['一致','accord'],['记录','record'],['细绳','cord'],['刀剑','sword']], words: [['record','前科、记录'],['chord','情绪'],['accord','一致'],['cord','细绳'],['sword','刀、剑']] },
  { id: 'een', rime: 'EEN', title: '只爱绿色的暴怒女皇', story: '女皇热衷于用绿色打扮自己，以增加光泽，如果她看见别的颜色会大发脾气。', links: [['女皇','queen'],['热衷','keen'],['绿色','green'],['打扮自己','preen'],['光泽','sheen'],['大发脾气','spleen']], words: [['queen','女皇'],['keen','热衷'],['green','绿'],['preen','打扮自己'],['sheen','光泽'],['spleen','发脾气']] },
];

export const familiesBatch6: WordFamily[] = seeds.map((seed, index) => ({
  id: seed.id,
  rime: seed.rime,
  title: seed.title,
  subtitle: seed.story.length > 24 ? `${seed.story.slice(0, 24)}…` : seed.story,
  scene: `/scenes/${seed.id}.jpg`,
  story: segmentStory(seed.story, seed.links),
  onsets: seed.words.map(([word, , onset]) => onset ?? deriveOnset(word, seed.rime)),
  words: seed.words.map(([word, cn, onset]) => ({
    word,
    display: word.toUpperCase(),
    cn,
    onset: onset ?? deriveOnset(word, seed.rime),
  })),
  tip: `把这一页的 ${seed.words.length} 个词放进同一个荒谬画面，围绕共同部分 ${seed.rime} 一口气记住。`,
  color: colors[index % colors.length],
}));
