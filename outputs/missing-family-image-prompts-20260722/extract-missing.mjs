import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const familiesModule = require(process.argv[2]);
const families = familiesModule.families ?? familiesModule.default?.families;

const sources = process.argv.slice(3, 6).flatMap((path) =>
  JSON.parse(fs.readFileSync(path, 'utf8')),
);

const renamedIds = new Map(Object.entries({
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
}));

const promptById = new Map();
for (const item of sources) {
  const appId = renamedIds.get(item.id) ?? item.id;
  promptById.set(appId, item.image_prompt_cn);
}

const supplementalPrompts = {
  fi: '横向3:2构图，目标尺寸1200×800，复古中国儿童故事书水彩插画，黑色墨线，旧纸张颗粒，夸张幽默表情。所有内容必须发生在同一个连续场景中，不得做成多个格子、卡片或无关物品拼贴。河边的一张小圆桌上正好摆着五颗无花果，一条拟人化的鱼跳出水面，用两侧鱼鳍代替拳头，想与对手划拳搏斗却显得完全不合适；鱼露出无奈而坚定的神情，主动叫停并结束这场争夺。画面必须清楚呈现鱼、鳍、拳头般的搏斗姿势、不合适的窘态、最后决定结束、五颗无花果这些故事要素。禁止出现任何英文单词、字母、中文文字、数字、字幕、水印、标签或分镜边框。',
  ca: '横向3:2构图，目标尺寸1200×800，复古中国儿童故事书水彩插画，黑色墨线，旧纸张颗粒，夸张幽默表情。所有内容必须发生在同一个连续场景中，不得做成多个格子、卡片或无关物品拼贴。场景设在带有枫叶装饰、能让人联想到加拿大的温馨餐厅里，一位客人端坐餐桌旁努力保持镇静；服务员神情严肃地伸手阻止另一人举起照相机拍照，同时按住桌上的老式电话，不让他呼叫别人。通过人物动作自然串联加拿大、餐厅、镇静、照相机、呼叫五个核心意象。禁止出现任何英文单词、字母、中文文字、数字、字幕、水印、标签或分镜边框。',
  par: '横向3:2构图，目标尺寸1200×800，复古中国儿童故事书水彩插画，黑色墨线，旧纸张颗粒，夸张幽默表情。所有内容必须发生在同一个连续场景中，不得做成多个格子、卡片或无关物品拼贴。教区教堂门口正在举行告别宴会，一位牧师手持象征标准的量尺，从排队的信徒中挑选一部分进入宴会；被选中的人含泪挥手告别并走向摆满食物的长桌，未达到标准的人则被牧师用一面小盾牌夸张地挡开。画面必须清楚呈现牧师、教区、一部分人、告别、宴会、标准和挡开这些连续情节。禁止出现任何英文单词、字母、中文文字、数字、字幕、水印、标签或分镜边框。',
  all: '横向3:2构图，目标尺寸1200×800，复古中国儿童故事书水彩插画，黑色墨线，旧纸张颗粒，夸张幽默表情。所有内容必须发生在同一个连续场景中，不得做成多个格子、卡片或无关物品拼贴。住宅区的一条狭窄巷弄入口，一群主妇组成联盟并排站立，领头者坚定地发表主张；她们合力拉起一道禁止通行的绳索，阻挡一名打扮妖艳、用夸张姿态引诱路人的人物进入巷子，周围所有主妇一致摇头表示不准许。画面自然呈现联盟、主张、所有人、巷弄、不准许和引诱这些故事要素，表现为反对不良诱惑的幽默寓言，不要露骨内容。禁止出现任何英文单词、字母、中文文字、数字、字幕、水印、标签或分镜边框。',
  rea: '横向3:2构图，目标尺寸1200×800，复古中国儿童故事书水彩插画，黑色墨线，旧纸张颗粒，夸张幽默表情。所有内容必须发生在同一个连续场景中，不得做成多个格子、卡片或无关物品拼贴。一名学生在书桌前刻苦读书，背后藏着一张真实清晰的哈佛校园照片式画面和已经收拾好的行李，揭示他努力的理由；他神情认真、整装待发，伸手朝远处象征哈佛大学的红砖校门前进，表现已经预备好并即将到达目标。画面必须自然串联读书、背后、真实、理由、预备和到达六个意象。禁止出现任何英文单词、字母、中文文字、数字、字幕、水印、标签或分镜边框。',
};
for (const [id, prompt] of Object.entries(supplementalPrompts)) {
  if (!promptById.has(id)) promptById.set(id, prompt);
}

const missingFamilies = families.filter((family) => !family.scene);
const rows = missingFamilies.map((family) => ({
  id: family.id,
  image_prompt_cn: promptById.get(family.id) ?? '',
}));

const missingPrompts = rows.filter((row) => !row.image_prompt_cn).map((row) => row.id);
const duplicateIds = rows
  .map((row) => row.id)
  .filter((id, index, all) => all.indexOf(id) !== index);

fs.writeFileSync(process.argv[6], JSON.stringify(rows, null, 2));
console.log(JSON.stringify({
  totalFamilies: families.length,
  illustratedFamilies: families.length - missingFamilies.length,
  missingFamilies: rows.length,
  promptCoverage: rows.length - missingPrompts.length,
  missingPrompts,
  duplicateIds,
  firstIds: rows.slice(0, 10).map((row) => row.id),
  lastIds: rows.slice(-10).map((row) => row.id),
}, null, 2));
