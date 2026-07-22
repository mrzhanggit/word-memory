import type { WordFamily } from '../types';

// 第五批新增词族：《图像英文记忆法》02 卷第161页起
export const familiesBatch5: WordFamily[] = [
  {
    id: 'ip',
    rime: 'IP',
    title: '大人物的温泉筹码',
    subtitle: '泡着温泉喝美酒，用纸船盘算',
    scene: '/scenes/ip.jpg',
    onsets: ['v', 't', 'z', 'h', 'd', 'l', 's', 'sh', 'ch'],
    color: '#7A5C9E',
    story: [
      { text: '大人物', word: 'vip' },
      { text: '保持' },
      { text: '尖端', word: 'tip' },
      { text: '精力', word: 'zip' },
      { text: '的秘诀是：每当累的时候，他会将' },
      { text: '屁股', word: 'hip' },
      { text: '浸泡', word: 'dip' },
      { text: '在温泉里，' },
      { text: '嘴唇', word: 'lip' },
      { text: '啜饮', word: 'sip' },
      { text: '着美酒，用纸折的' },
      { text: '船', word: 'ship' },
      { text: '当' },
      { text: '筹码', word: 'chip' },
      { text: '盘算。' },
    ],
    words: [
      { word: 'vip', display: 'VIP', cn: '大人物', onset: 'v' },
      { word: 'tip', display: 'TIP', cn: '尖端', onset: 't' },
      { word: 'zip', display: 'ZIP', cn: '精力', onset: 'z' },
      { word: 'hip', display: 'HIP', cn: '屁股', onset: 'h' },
      { word: 'dip', display: 'DIP', cn: '浸泡', onset: 'd' },
      { word: 'lip', display: 'LIP', cn: '嘴唇', onset: 'l' },
      { word: 'sip', display: 'SIP', cn: '啜饮', onset: 's' },
      { word: 'ship', display: 'SHIP', cn: '船', onset: 'sh' },
      { word: 'chip', display: 'CHIP', cn: '筹码、碎片', onset: 'ch' },
    ],
    tip: '在 Y 轴写上 V、T、Z、H、D、L、S、SH、CH，平行 X 轴写上 IP，用一场温泉筹码戏一口气记住 9 个单词。',
  },
];
