var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data/families.ts
var families_exports = {};
__export(families_exports, {
  allWords: () => allWords,
  families: () => families,
  totalWordCount: () => totalWordCount
});
module.exports = __toCommonJS(families_exports);

// src/data/families-batch1.ts
var familiesBatch1 = [
  {
    id: "eer",
    rime: "EER",
    title: "\u5148\u77E5\u5632\u7B11\u9E7F",
    subtitle: "\u4E0D\u4F1A\u559D\u5564\u9152\u6709\u4EC0\u4E48\u597D\u7B11\u7684",
    scene: "/scenes/eer.jpg",
    onsets: ["s", "p", "d", "j", "b"],
    color: "#4A6FA5",
    story: [
      { text: "\u5148\u77E5", word: "seer" },
      { text: "\u51DD\u89C6", word: "peer" },
      { text: "\u7740" },
      { text: "\u9E7F", word: "deer" },
      { text: "\uFF0C" },
      { text: "\u8BA5\u7B11", word: "jeer" },
      { text: "\u5B83\u4E0D\u4F1A\u559D" },
      { text: "\u5564\u9152", word: "beer" },
      { text: "\u3002" }
    ],
    words: [
      { word: "seer", display: "SEER", cn: "\u5148\u77E5", onset: "s" },
      { word: "peer", display: "PEER", cn: "\u51DD\u89C6", onset: "p" },
      { word: "deer", display: "DEER", cn: "\u9E7F", onset: "d" },
      { word: "jeer", display: "JEER", cn: "\u8BA5\u7B11", onset: "j" },
      { word: "beer", display: "BEER", cn: "\u5564\u9152", onset: "b" }
    ],
    tip: "\u501F\u6700\u719F\u7684 BEER\uFF08\u5564\u9152\uFF09\u8BB0\u4F4F\u540C\u65CF\u7684\u51DD\u89C6\u3001\u9E7F\u3001\u8BA5\u7B11\u3001\u5148\u77E5\u3002"
  },
  {
    id: "et",
    rime: "ET",
    title: "\u517D\u533B\u4E0E\u5916\u661F\u4EBA\u7684\u8D4C\u5C40",
    subtitle: "\u7528\u7F51\u7F51\u4F4F\u7684\u5BA0\u7269\u51FA\u79DF\u8BB0",
    scene: "/scenes/et.jpg",
    onsets: ["n", "p", "l", "v", "b", "s"],
    color: "#E15A3B",
    story: [
      { text: "\u517D\u533B", word: "vet" },
      { text: "\u6253\u8D4C", word: "bet" },
      { text: "\u8BF4\uFF0C\u4ED6\u80FD\u5C06" },
      { text: "\u4E00\u5957", word: "set" },
      { text: "\u7528" },
      { text: "\u7F51", word: "net" },
      { text: "\u7F51\u4F4F\u7684" },
      { text: "\u5BA0\u7269", word: "pet" },
      { text: "\u51FA\u79DF", word: "let" },
      { text: "\u51FA\u53BB\u3002" }
    ],
    words: [
      { word: "vet", display: "VET", cn: "\u517D\u533B", onset: "v" },
      { word: "bet", display: "BET", cn: "\u6253\u8D4C", onset: "b" },
      { word: "set", display: "SET", cn: "\u4E00\u5957", onset: "s" },
      { word: "net", display: "NET", cn: "\u7F51", onset: "n" },
      { word: "pet", display: "PET", cn: "\u5BA0\u7269", onset: "p" },
      { word: "let", display: "LET", cn: "\u51FA\u79DF", onset: "l" }
    ],
    tip: "\u7528\u5916\u661F\u4EBA ET \u8BB0\u517D\u533B\u3001\u6253\u8D4C\u3001\u4E00\u5957\u3001\u5BA0\u7269\u3001\u51FA\u79DF\u3002"
  },
  {
    id: "ion",
    rime: "ION",
    title: "\u72EE\u5B50\u5BF9\u6D0B\u8471\u6709\u610F\u89C1",
    subtitle: "\u4E0D\u662F\u4EC0\u4E48\u90FD\u5403\u7684\u72EE\u5B50",
    scene: "/scenes/ion.jpg",
    onsets: ["l", "on", "opin"],
    color: "#D9A441",
    story: [
      { text: "\u72EE\u5B50", word: "lion" },
      { text: "\u4E0D\u662F\u4EC0\u4E48\u90FD\u5403\uFF0C\u5B83\u5BF9" },
      { text: "\u6D0B\u8471", word: "onion" },
      { text: "\u5C31\u6709" },
      { text: "\u610F\u89C1", word: "opinion" },
      { text: "\u3002" }
    ],
    words: [
      { word: "lion", display: "LION", cn: "\u72EE\u5B50", onset: "l" },
      { word: "onion", display: "ONION", cn: "\u6D0B\u8471", onset: "on" },
      { word: "opinion", display: "OPINION", cn: "\u610F\u89C1", onset: "opin" }
    ],
    tip: "LION \u91CC\u85CF ION\uFF0CONION \u548C OPINION \u987A\u7740\u72EE\u5B50\u4E00\u8D77\u8BB0\u3002"
  },
  {
    id: "are",
    rime: "ARE",
    title: "\u8D64\u88F8\u91CE\u5154\u7684\u62F3\u51FB\u8D5B",
    subtitle: "\u6311\u6218\u4E00\u76F4\u5173\u7167\u5B83\u7684\u6BCD\u9A74",
    scene: "/scenes/are.jpg",
    onsets: ["b", "h", "r", "d", "c", "m"],
    color: "#2F6F5E",
    story: [
      { text: "\u4E00\u53EA" },
      { text: "\u8D64\u88F8", word: "bare" },
      { text: "\u7684" },
      { text: "\u91CE\u5154", word: "hare" },
      { text: "\u5F88\u96BE", word: "rare" },
      { text: "\u5411\u4E00\u76F4" },
      { text: "\u5173\u7167", word: "care" },
      { text: "\u5B83\u7684" },
      { text: "\u6BCD\u9A74", word: "mare" },
      { text: "\u6311\u6218", word: "dare" },
      { text: "\u3002" }
    ],
    words: [
      { word: "bare", display: "BARE", cn: "\u8D64\u88F8", onset: "b" },
      { word: "hare", display: "HARE", cn: "\u91CE\u5154", onset: "h" },
      { word: "rare", display: "RARE", cn: "\u5F88\u96BE", onset: "r" },
      { word: "care", display: "CARE", cn: "\u5173\u7167", onset: "c" },
      { word: "mare", display: "MARE", cn: "\u6BCD\u9A74", onset: "m" },
      { word: "dare", display: "DARE", cn: "\u6562\u4E8E\u3001\u6311\u6218", onset: "d" }
    ],
    tip: "\u300C\u6CA1\u7A7F\u88E4\u5B50\u4E5F\u6562\u6311\u6218\u6211\uFF1F\u300D\u2014\u2014\u753B\u9762\u8D8A\u5C34\u5C2C\uFF0C\u8BB0\u5F97\u8D8A\u7262\u3002"
  },
  {
    id: "ower",
    rime: "OWER",
    title: "\u9AD8\u5854\u6DCB\u6D74\u65F6\u88AB\u9001\u82B1",
    subtitle: "\u51C9\u4EAD\u6765\u5F97\u4E0D\u662F\u65F6\u5019",
    scene: "/scenes/ower.jpg",
    onsets: ["p", "t", "gl", "c", "b", "sh", "fl"],
    color: "#C25E7E",
    story: [
      { text: "\u6743\u5A01", word: "power" },
      { text: "\u7684" },
      { text: "\u9AD8\u5854", word: "tower" },
      { text: "\u5BF9" },
      { text: "\u754F\u7F29", word: "cower" },
      { text: "\u7684" },
      { text: "\u51C9\u4EAD", word: "bower" },
      { text: "\u6012\u76EE", word: "glower" },
      { text: "\u800C\u89C6\uFF0C\u8D23\u9A82\u5B83\u5728" },
      { text: "\u6DCB\u6D74", word: "shower" },
      { text: "\u7684\u65F6\u5019\u6765\u9001" },
      { text: "\u82B1", word: "flower" },
      { text: "\u3002" }
    ],
    words: [
      { word: "power", display: "POWER", cn: "\u6743\u5A01", onset: "p" },
      { word: "tower", display: "TOWER", cn: "\u9AD8\u5854", onset: "t" },
      { word: "cower", display: "COWER", cn: "\u754F\u7F29", onset: "c" },
      { word: "bower", display: "BOWER", cn: "\u51C9\u4EAD", onset: "b" },
      { word: "glower", display: "GLOWER", cn: "\u6012\u76EE", onset: "gl" },
      { word: "shower", display: "SHOWER", cn: "\u6DCB\u6D74", onset: "sh" },
      { word: "flower", display: "FLOWER", cn: "\u82B1", onset: "fl" }
    ],
    tip: "OWER \u5BB6\u65CF\u4E00\u6B21 7 \u4E2A\u8BCD\uFF1A\u6743\u5A01\u3001\u9AD8\u5854\u3001\u6012\u76EE\u3001\u754F\u7F29\u3001\u51C9\u4EAD\u3001\u6DCB\u6D74\u3001\u82B1\u3002"
  },
  {
    id: "eason",
    rime: "EASON",
    title: "\u661F\u671F\u4E94\u6253\u9C81\u5BBE\u900A",
    subtitle: "\u5B63\u8282\u662F\u53DB\u9006\u7684\u539F\u56E0",
    scene: "/scenes/eason.jpg",
    onsets: ["s", "tr", "r"],
    color: "#5B8C5A",
    story: [
      { text: "\u5B63\u8282", word: "season" },
      { text: "\u662F" },
      { text: "\u53DB\u9006", word: "treason" },
      { text: "\u7684" },
      { text: "\u539F\u56E0", word: "reason" },
      { text: "\uFF01" }
    ],
    words: [
      { word: "season", display: "SEASON", cn: "\u5B63\u8282", onset: "s" },
      { word: "treason", display: "TREASON", cn: "\u53DB\u9006", onset: "tr" },
      { word: "reason", display: "REASON", cn: "\u539F\u56E0", onset: "r" }
    ],
    tip: "\u5B9E\u5728\u592A\u51B7\u6CA1\u529E\u6CD5\u2014\u2014\u7528\u9C81\u5BBE\u900A\u548C\u661F\u671F\u4E94\u7684\u753B\u9762\u4E32\u8D77\u4E09\u4E2A\u8BCD\u3002"
  },
  {
    id: "ath",
    rime: "ATH",
    title: "\u6668\u8DD1\u56DE\u6765\u7684\u6012\u6C14\u6FA1",
    subtitle: "\u6211\u8BA8\u538C\u8DD1\u5C0F\u8DEF",
    scene: "/scenes/ath.jpg",
    onsets: ["b", "o", "p", "l", "wr"],
    color: "#7A5C9E",
    story: [
      { text: "\u6709\u4E2A\u4EBA\u6668\u8DD1\u56DE\u6765" },
      { text: "\u6D17\u6FA1", word: "bath" },
      { text: "\uFF0C\u4ED6" },
      { text: "\u6124\u6012", word: "wrath" },
      { text: "\u5730" },
      { text: "\u5492\u9A82", word: "oath" },
      { text: "\u8BF4\uFF1A\u201C\u6211" },
      { text: "\u8BA8\u538C", word: "loath" },
      { text: "\u8DD1" },
      { text: "\u5C0F\u8DEF", word: "path" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "bath", display: "BATH", cn: "\u6D17\u6FA1", onset: "b" },
      { word: "wrath", display: "WRATH", cn: "\u6124\u6012", onset: "wr" },
      { word: "oath", display: "OATH", cn: "\u5492\u9A82", onset: "o" },
      { word: "loath", display: "LOATH", cn: "\u538C\u6076", onset: "l" },
      { word: "path", display: "PATH", cn: "\u5C0F\u8DEF", onset: "p" }
    ],
    tip: "\u6D17\u6FA1\u3001\u5492\u9A82\u3001\u5C0F\u8DEF\u3001\u538C\u6076\u3001\u6124\u6012\u2014\u2014\u4E00\u4E2A\u6CE1\u6FA1\u7684\u6012\u6C14\u753B\u9762\u5168\u88C5\u4E0B\u3002"
  },
  {
    id: "ame",
    rime: "AME",
    title: "\u8D35\u5987\u4E0E\u4E5E\u4E10\u540C\u540D",
    subtitle: "\u73CD\u59AE\u738B\u9047\u4E0A\u73CD\u59AE\u738B",
    scene: "/scenes/ame.jpg",
    onsets: ["d", "f", "g", "l", "n", "s", "sh"],
    color: "#B0762A",
    story: [
      { text: "\u5728\u4E00\u573A" },
      { text: "\u6E38\u620F", word: "game" },
      { text: "\u4E2D\uFF0C\u4E00\u4F4D\u6709" },
      { text: "\u540D\u671B", word: "fame" },
      { text: "\u7684" },
      { text: "\u8D35\u5987", word: "dame" },
      { text: "\u803B", word: "shame" },
      { text: "\u4E8E\u4E0E" },
      { text: "\u8DDB\u8DB3", word: "lame" },
      { text: "\u7684\u4E5E\u4E10\u6709" },
      { text: "\u76F8\u540C", word: "same" },
      { text: "\u7684" },
      { text: "\u540D\u5B57", word: "name" },
      { text: "\u3002" }
    ],
    words: [
      { word: "game", display: "GAME", cn: "\u6E38\u620F", onset: "g" },
      { word: "fame", display: "FAME", cn: "\u540D\u671B", onset: "f" },
      { word: "dame", display: "DAME", cn: "\u8D35\u5987", onset: "d" },
      { word: "shame", display: "SHAME", cn: "\u7F9E\u803B", onset: "sh" },
      { word: "lame", display: "LAME", cn: "\u8DDB\u8DB3", onset: "l" },
      { word: "same", display: "SAME", cn: "\u76F8\u540C", onset: "s" },
      { word: "name", display: "NAME", cn: "\u540D\u5B57", onset: "n" }
    ],
    tip: "\u300C\u521A\u597D\u6211\u4E5F\u53EB\u73CD\u59AE\u738B\u300D\u2014\u2014\u540C\u540D\u7684\u5C34\u5C2C\u5E2E\u4F60\u8BB0\u4F4F 7 \u4E2A AME\u3002"
  },
  {
    id: "ain",
    rime: "AIN",
    title: "\u96E8\u4E91\u8BA8\u6C34\u8D39",
    subtitle: "\u5F92\u52B3\u65E0\u529F\u7684\u96E8",
    scene: "/scenes/ain.jpg",
    onsets: ["r", "m", "p", "g", "v"],
    color: "#3E7CA6",
    story: [
      { text: "\u96E8", word: "rain" },
      { text: "\u6700\u4E3B\u8981", word: "main" },
      { text: "\u7684" },
      { text: "\u75DB\u82E6", word: "pain" },
      { text: "\u662F\u81EA\u5DF1" },
      { text: "\u5F92\u52B3\u65E0\u529F", word: "vain" },
      { text: "\uFF0C\u65E0\u6CD5" },
      { text: "\u8D5A\u53D6", word: "gain" },
      { text: "\u81EA\u5DF1\u8F9B\u82E6\u5DE5\u4F5C\u7684\u5229\u6DA6\u3002" }
    ],
    words: [
      { word: "rain", display: "RAIN", cn: "\u96E8", onset: "r" },
      { word: "main", display: "MAIN", cn: "\u4E3B\u8981\u7684", onset: "m" },
      { word: "pain", display: "PAIN", cn: "\u75DB\u82E6", onset: "p" },
      { word: "vain", display: "VAIN", cn: "\u5F92\u52B3\u65E0\u529F", onset: "v" },
      { word: "gain", display: "GAIN", cn: "\u8D5A\u53D6", onset: "g" }
    ],
    tip: "\u300C\u8C01\u4ED8\u6211\u6C34\u8D39\u5440\uFF1F\u300D\u300C\u4E0D\u4ED8\uFF01\u300D\u2014\u2014IN VAIN \u5C31\u662F\u767D\u5FD9\u6D3B\u3002"
  },
  {
    id: "ouse",
    rime: "OUSE",
    title: "\u8001\u9F20\u8DF3\u6C34\u6DF9\u8671\u5B50",
    subtitle: "\u522B\u628A\u6211\u7684\u8EAB\u4F53\u5F53\u623F\u5B50\u4F4F",
    scene: "/scenes/ouse.jpg",
    onsets: ["m", "gr", "l", "h", "r", "s"],
    color: "#4A6FA5",
    story: [
      { text: "\u8001\u9F20", word: "mouse" },
      { text: "\u57CB\u6028", word: "grouse" },
      { text: "\u8671\u5B50", word: "louse" },
      { text: "\u628A\u5B83\u7684\u8EAB\u4F53\u5F53" },
      { text: "\u623F\u5B50", word: "house" },
      { text: "\u4F4F\uFF0C\u5B83" },
      { text: "\u594B\u8D77", word: "rouse" },
      { text: "\u6295\u5165\u6C34\u4E2D", word: "souse" },
      { text: "\uFF0C\u60F3\u628A\u8671\u5B50\u6DF9\u6B7B\u3002" }
    ],
    words: [
      { word: "mouse", display: "MOUSE", cn: "\u8001\u9F20", onset: "m" },
      { word: "grouse", display: "GROUSE", cn: "\u57CB\u6028", onset: "gr" },
      { word: "louse", display: "LOUSE", cn: "\u8671\u5B50", onset: "l" },
      { word: "house", display: "HOUSE", cn: "\u623F\u5B50", onset: "h" },
      { word: "rouse", display: "ROUSE", cn: "\u6FC0\u6012\u3001\u594B\u8D77", onset: "r" },
      { word: "souse", display: "SOUSE", cn: "\u6295\u5165\u6C34\u4E2D", onset: "s" }
    ],
    tip: "\u4ECE\u719F\u8BCD HOUSE \u51FA\u53D1\uFF0C\u524D\u540E\u5404\u6302\u4E00\u4E32 OUSE\u3002"
  },
  {
    id: "eep",
    rime: "EEP",
    title: "\u7EF5\u7F8A\u8EB2\u4E0A\u9661\u5CF0\u7761\u89C9",
    subtitle: "\u5409\u666E\u8F66\u592A\u5435\u4E86",
    scene: "/scenes/eep.jpg",
    onsets: ["sh", "sl", "k", "cr", "st", "j", "ch"],
    color: "#E15A3B",
    story: [
      { text: "\u7EF5\u7F8A", word: "sheep" },
      { text: "\u4E3A\u4E86" },
      { text: "\u4FDD\u6301", word: "keep" },
      { text: "\u826F\u597D\u7684" },
      { text: "\u7761\u7720", word: "sleep" },
      { text: "\uFF0C" },
      { text: "\u722C", word: "creep" },
      { text: "\u5230" },
      { text: "\u9661\u5CED", word: "steep" },
      { text: "\u7684\u5C71\u9876\uFF0C\u4EE5\u8EB2\u5F00" },
      { text: "\u5409\u666E", word: "jeep" },
      { text: "\u8F66" },
      { text: "\u5431\u5431\u55B3\u55B3\u7684\u53EB\u58F0", word: "cheep" },
      { text: "\u3002" }
    ],
    words: [
      { word: "sheep", display: "SHEEP", cn: "\u7EF5\u7F8A", onset: "sh" },
      { word: "keep", display: "KEEP", cn: "\u4FDD\u6301", onset: "k" },
      { word: "sleep", display: "SLEEP", cn: "\u7761\u7720", onset: "sl" },
      { word: "creep", display: "CREEP", cn: "\u722C\u884C", onset: "cr" },
      { word: "steep", display: "STEEP", cn: "\u9661\u5CED", onset: "st" },
      { word: "jeep", display: "JEEP", cn: "\u5409\u666E", onset: "j" },
      { word: "cheep", display: "CHEEP", cn: "\u5431\u55B3\u7684\u53EB\u58F0", onset: "ch" }
    ],
    tip: "SHEEP \u60F3 SLEEP\u2014\u2014\u4E00\u4E2A\u97F5\u811A 7 \u4E2A\u8BCD\uFF0C\u4E00\u53E3\u6C14\u5E26\u8D70\u3002"
  },
  {
    id: "ear",
    rime: "EAR",
    title: "\u718A\u592A\u592A\u8865\u8863\u670D",
    subtitle: "\u540E\u9762\u7F1D\u4E86\u4E00\u9897\u68A8\u5B50",
    scene: "/scenes/ear.jpg",
    onsets: ["\xF8", "b", "t", "d", "h", "r", "p", "w"],
    color: "#D9A441",
    story: [
      { text: "\u718A", word: "bear" },
      { text: "\u592A\u592A\u5728\u718A\u5148\u751F\u7684" },
      { text: "\u8033", word: "ear" },
      { text: "\u65C1\u8BF4\uFF1A\u201C\u522B\u6D41" },
      { text: "\u6CEA", word: "tear" },
      { text: "\uFF0C" },
      { text: "\u4EB2\u7231\u7684", word: "dear" },
      { text: "\uFF0C\u4F60" },
      { text: "\u542C\u89C1", word: "hear" },
      { text: "\u4E86\u5417\uFF1F\u88AB\u4F60\u6495\u88C2\u7684\u8863\u670D\u5DF2\u7ECF\u8865\u597D\u4E86\uFF0C\u8FD8\u5728" },
      { text: "\u540E\u9762", word: "rear" },
      { text: "\u7F1D\u4E0A\u4E00\u9897" },
      { text: "\u68A8\u5B50", word: "pear" },
      { text: "\u7684\u56FE\u6848\uFF0C" },
      { text: "\u7A7F", word: "wear" },
      { text: "\u4E0A\u5F88\u597D\u770B\u3002\u201D" }
    ],
    words: [
      { word: "bear", display: "BEAR", cn: "\u718A", onset: "b" },
      { word: "ear", display: "EAR", cn: "\u8033\u6735", onset: "\xF8" },
      { word: "tear", display: "TEAR", cn: "\u6CEA\u3001\u6495\u88C2", onset: "t" },
      { word: "dear", display: "DEAR", cn: "\u4EB2\u7231\u7684", onset: "d" },
      { word: "hear", display: "HEAR", cn: "\u542C\u89C1", onset: "h" },
      { word: "rear", display: "REAR", cn: "\u540E\u90E8", onset: "r" },
      { word: "pear", display: "PEAR", cn: "\u68A8\u5B50", onset: "p" },
      { word: "wear", display: "WEAR", cn: "\u7A7F\u7740", onset: "w" }
    ],
    tip: "TEAR \u4E00\u8BCD\u4E24\u7528\uFF1A\u6D41\u6CEA\u548C\u6495\u88C2\uFF0C\u5728\u540C\u4E00\u4E2A\u53E5\u5B50\u91CC\u540C\u65F6\u51FA\u73B0\u3002"
  },
  {
    id: "ear2",
    rime: "EAR",
    title: "\u9C7C\u53C9\u9A8C\u89C6\u529B",
    subtitle: "\u6709\u65F6\u6726\u80E7\uFF0C\u6709\u65F6\u6E05\u695A",
    scene: "/scenes/ear2.jpg",
    onsets: ["\xF8", "sp", "sw", "ap", "bl", "cl"],
    color: "#2F6F5E",
    story: [
      { text: "\u9C7C\u53C9", word: "spear" },
      { text: "\u53D1\u8A93", word: "swear" },
      { text: "\u5B83\u7684" },
      { text: "\u542C\u529B", word: "ear" },
      { text: "\u4E0D\u9519\uFF0C\u4F46\u89C6\u529B\u4E0D\u884C\uFF0C\u6709\u65F6" },
      { text: "\u6726\u6726\u80E7\u80E7", word: "blear" },
      { text: "\uFF0C\u6709\u65F6" },
      { text: "\u770B\u8D77\u6765", word: "appear" },
      { text: "\u53C8\u5F88" },
      { text: "\u6E05\u695A", word: "clear" },
      { text: "\u3002" }
    ],
    words: [
      { word: "spear", display: "SPEAR", cn: "\u9C7C\u53C9", onset: "sp" },
      { word: "swear", display: "SWEAR", cn: "\u53D1\u8A93", onset: "sw" },
      { word: "ear", display: "EAR", cn: "\u8033\u3001\u542C\u529B", onset: "\xF8" },
      { word: "blear", display: "BLEAR", cn: "\u6726\u80E7\u7684", onset: "bl" },
      { word: "appear", display: "APPEAR", cn: "\u770B\u8D77\u6765", onset: "ap" },
      { word: "clear", display: "CLEAR", cn: "\u6E05\u695A", onset: "cl" }
    ],
    tip: "\u540C\u4E00\u4E2A EAR\uFF0C\u53E6\u4E00\u7EC4\u8BCD\uFF1A\u9C7C\u53C9\u3001\u53D1\u8A93\u3001\u6726\u80E7\u3001\u770B\u8D77\u6765\u3001\u6E05\u695A\u3002"
  },
  {
    id: "lay",
    rime: "LAY",
    title: "\u63A5\u529B\u8D5B\u7684\u6740\u6C14",
    subtitle: "\u5EF6\u8BEF\u5FC5\u88AB\u201C\u6740\u5BB3\u201D",
    scene: "/scenes/lay.jpg",
    onsets: ["pl", "re", "de", "sl"],
    color: "#C25E7E",
    story: [
      { text: "\u73A9", word: "play" },
      { text: "\u63A5\u529B", word: "relay" },
      { text: "\u6E38\u620F\u4E0D\u80FD" },
      { text: "\u5EF6\u8BEF", word: "delay" },
      { text: "\uFF0C\u5426\u5219\u5FC5\u88AB" },
      { text: "\u6740\u5BB3", word: "slay" },
      { text: "\u65E0\u7591\u3002" }
    ],
    words: [
      { word: "play", display: "PLAY", cn: "\u73A9", onset: "pl" },
      { word: "relay", display: "RELAY", cn: "\u63A5\u529B", onset: "re" },
      { word: "delay", display: "DELAY", cn: "\u5EF6\u8BEF", onset: "de" },
      { word: "slay", display: "SLAY", cn: "\u6740\u5BB3", onset: "sl" }
    ],
    tip: "PLAY \u524D\u9762\u52A0\u5B57\u6BCD\uFF0C\u63A5\u529B\u3001\u5EF6\u8BEF\u3001\u6740\u5BB3\u5168\u51FA\u6765\u4E86\u3002"
  },
  {
    id: "over",
    rime: "OVER",
    title: "\u98DE\u5230\u4E91\u4E0A\u7684\u8BB0\u8005",
    subtitle: "\u62A5\u9053\u6D41\u6D6A\u8005\u4E2D\u7684\u604B\u4EBA",
    scene: "/scenes/over.jpg",
    onsets: ["m", "c", "h", "\xF8", "r", "l"],
    color: "#5B8C5A",
    story: [
      { text: "\u63D0\u6848\u4EBA", word: "mover" },
      { text: "\u5EFA\u8BAE" },
      { text: "\u62A5\u9053", word: "cover" },
      { text: "\u7FF1\u7FD4", word: "hover" },
      { text: "\u5230" },
      { text: "\u53E6\u4E00\u8FB9", word: "over" },
      { text: "\u7684" },
      { text: "\u6D41\u6D6A\u8005", word: "rover" },
      { text: "\u4E2D\u7684" },
      { text: "\u604B\u4EBA", word: "lover" },
      { text: "\u3002" }
    ],
    words: [
      { word: "mover", display: "MOVER", cn: "\u63D0\u6848\u4EBA", onset: "m" },
      { word: "cover", display: "COVER", cn: "\u62A5\u9053", onset: "c" },
      { word: "hover", display: "HOVER", cn: "\u7FF1\u7FD4", onset: "h" },
      { word: "over", display: "OVER", cn: "\u5230\u53E6\u4E00\u8FB9", onset: "\xF8" },
      { word: "rover", display: "ROVER", cn: "\u6D41\u6D6A\u8005", onset: "r" },
      { word: "lover", display: "LOVER", cn: "\u604B\u4EBA", onset: "l" }
    ],
    tip: "OVER \u672C\u8EAB\u4E5F\u662F\u6210\u5458\uFF1A\u8BCD\u6839\u5373\u662F\u5355\u8BCD\uFF0C\u524D\u540E\u90FD\u80FD\u6302\u3002"
  },
  {
    id: "eel",
    rime: "EEL",
    title: "\u9CD7\u9C7C\u9047\u5265\u76AE\u624B",
    subtitle: "\u5377\u5C3E\u5DF4\u5DF2\u7ECF\u6765\u4E0D\u53CA\u4E86",
    scene: "/scenes/eel.jpg",
    onsets: ["\xF8", "f", "h", "p", "r"],
    color: "#7A5C9E",
    story: [
      { text: "\u9CD7", word: "eel" },
      { text: "\u611F\u89C9", word: "feel" },
      { text: "\u6709\u4EBA\u8BD5\u56FE\u4ECE\u5B83\u7684" },
      { text: "\u811A\u540E\u8DDF", word: "heel" },
      { text: "\u5265", word: "peel" },
      { text: "\u5B83\u7684\u76AE\uFF0C\u5B83" },
      { text: "\u6447\u6446", word: "reel" },
      { text: "\u5377\u8D77\u5C3E\u5DF4\u4F46\u5DF2\u6765\u4E0D\u53CA\u3002" }
    ],
    words: [
      { word: "eel", display: "EEL", cn: "\u9CD7", onset: "\xF8" },
      { word: "feel", display: "FEEL", cn: "\u611F\u89C9", onset: "f" },
      { word: "heel", display: "HEEL", cn: "\u811A\u540E\u8DDF", onset: "h" },
      { word: "peel", display: "PEEL", cn: "\u5265\u76AE", onset: "p" },
      { word: "reel", display: "REEL", cn: "\u6447\u6446", onset: "r" }
    ],
    tip: "EEL \u52A0\u8BCD\u9996\uFF1A\u611F\u89C9\u3001\u811A\u540E\u8DDF\u3001\u5265\u76AE\u3001\u6447\u6446\u3002"
  },
  {
    id: "our",
    rime: "OUR",
    title: "\u5EF6\u8BEF\u56DB\u5C0F\u65F6\u7684\u6012\u706B",
    subtitle: "\u5929\u6C14\u8F6C\u9634\uFF0C\u813E\u6C14\u66F4\u9634",
    scene: "/scenes/our.jpg",
    onsets: ["l", "f", "h", "s", "t", "y", "d"],
    color: "#B0762A",
    story: [
      { text: "\u7531\u4E8E" },
      { text: "\u5929\u6C14\u8F6C\u9634", word: "lour" },
      { text: "\uFF0C" },
      { text: "\u65C5\u884C", word: "tour" },
      { text: "\u73ED\u673A\u5EF6\u8BEF\u4E86" },
      { text: "\u56DB", word: "four" },
      { text: "\u4E2A" },
      { text: "\u5C0F\u65F6", word: "hour" },
      { text: "\uFF0C\u5979" },
      { text: "\u9634\u90C1\u4E56\u623E", word: "sour" },
      { text: "\u5730\u53D1\u813E\u6C14\u8BF4\uFF1A\u201C\u4E0D\u5BF9" },
      { text: "\u4F60\u7684", word: "your" },
      { text: "\u4EBA" },
      { text: "\u4E25\u5389", word: "dour" },
      { text: "\u4E00\u70B9\u4E0D\u884C\u3002\u201D" }
    ],
    words: [
      { word: "lour", display: "LOUR", cn: "\u5929\u6C14\u8F6C\u9634", onset: "l" },
      { word: "tour", display: "TOUR", cn: "\u65C5\u884C", onset: "t" },
      { word: "four", display: "FOUR", cn: "\u56DB", onset: "f" },
      { word: "hour", display: "HOUR", cn: "\u5C0F\u65F6", onset: "h" },
      { word: "sour", display: "SOUR", cn: "\u9634\u90C1\u3001\u4E56\u623E", onset: "s" },
      { word: "your", display: "YOUR", cn: "\u4F60\u7684", onset: "y" },
      { word: "dour", display: "DOUR", cn: "\u4E25\u5389", onset: "d" }
    ],
    tip: "FOUR HOURS\uFF01\u7528\u4E00\u53E5\u62B1\u6028\u8BB0\u4F4F OUR \u5BB6\u65CF 7 \u4E2A\u8BCD\u3002"
  },
  {
    id: "oyal",
    rime: "OYAL",
    title: "\u5403\u725B\u6392\u7684\u7687\u5BB6\u536B\u5175",
    subtitle: "\u5FE0\u4E8E\u7687\u5BB6\u7684\u5403\u8D27",
    scene: "/scenes/oyal.jpg",
    onsets: ["r", "l"],
    color: "#3E7CA6",
    story: [
      { text: "\u4ED6\u5BF9" },
      { text: "\u7687\u5BB6", word: "royal" },
      { text: "\u5F88" },
      { text: "\u5FE0\u8D1E", word: "loyal" },
      { text: "\uFF0C\u56E0\u4E3A\u4ED6\u662F\u4E2A\u5403\u725B\u6392\u7684\u4EBA\u3002" }
    ],
    words: [
      { word: "royal", display: "ROYAL", cn: "\u7687\u5BB6", onset: "r" },
      { word: "loyal", display: "LOYAL", cn: "\u5FE0\u8D1E", onset: "l" }
    ],
    tip: "BEEFEATER\uFF08\u5403\u725B\u6392\u7684\u4EBA\uFF09\u662F\u82F1\u56FD\u7687\u5BB6\u536B\u5175\u7684\u901A\u79F0\u2014\u2014\u60F3\u7740\u725B\u6392\uFF0C\u5FE0\u4E8E\u7687\u5BB6\u3002"
  },
  {
    id: "lock",
    rime: "LOCK",
    title: "\u4E0A\u9501\u7684\u5854\u697C\u6C42\u7231\u8BB0",
    subtitle: "\u9501\u9020\u6210\u4E86\u969C\u788D",
    scene: "/scenes/lock.jpg",
    onsets: ["l", "bl"],
    color: "#4A6FA5",
    story: [
      { text: "\u9501", word: "lock" },
      { text: "\u9020\u6210\u4E86" },
      { text: "\u969C\u788D", word: "block" },
      { text: "\u3002" }
    ],
    words: [
      { word: "lock", display: "LOCK", cn: "\u9501", onset: "l" },
      { word: "block", display: "BLOCK", cn: "\u969C\u788D", onset: "bl" }
    ],
    tip: "LOCK \u52A0 B \u5C31\u662F BLOCK\u2014\u2014\u5FC3\u4E0A\u4EBA\u5728\u5854\u4E0A\uFF0C\u95E8\u9501\u82B1\u5728\u697C\u4E0B\u3002"
  },
  {
    id: "lot",
    rime: "LOT",
    title: "\u6295\u5E01\u5B54\u7684\u9634\u8C0B",
    subtitle: "\u53EF\u6076\uFF01\u94B1\u53C8\u88AB\u5403\u4E86",
    scene: "/scenes/lot.jpg",
    onsets: ["l", "sl", "pl"],
    color: "#E15A3B",
    story: [
      { text: "\u6295\u5E01\u5B54", word: "slot" },
      { text: "\u7ECF\u5E38\u800D" },
      { text: "\u8BB8\u591A", word: "lot" },
      { text: "\u9634\u8C0B", word: "plot" },
      { text: "\u3002" }
    ],
    words: [
      { word: "slot", display: "SLOT", cn: "\u6295\u5E01\u5B54", onset: "sl" },
      { word: "lot", display: "LOT", cn: "\u8BB8\u591A\u3001\u571F\u5730", onset: "l" },
      { word: "plot", display: "PLOT", cn: "\u9634\u8C0B", onset: "pl" }
    ],
    tip: "\u7535\u8BDD\u4EAD\u541E\u94B1\u5C31\u662F\u4E00\u573A PLOT\u2014\u2014LOT \u5BB6\u65CF\u4E09\u4E2A\u8BCD\u3002"
  },
  {
    id: "ate",
    rime: "ATE",
    title: "\u8BEF\u4E86\u73ED\u673A\u7684\u65C5\u5BA2",
    subtitle: "\u522B\u602A\u547D\u8FD0\u618E\u6068\u4F60",
    scene: "/scenes/ate.jpg",
    onsets: ["d", "l", "g", "f", "h"],
    color: "#D9A441",
    story: [
      { text: "\u7531\u4E8E\u5FD8\u4E86" },
      { text: "\u65E5\u671F", word: "date" },
      { text: "\uFF0C\u8D76\u5230" },
      { text: "\u767B\u673A\u95E8", word: "gate" },
      { text: "\u65F6\u5DF2" },
      { text: "\u592A\u8FDF", word: "late" },
      { text: "\u4E86\u2026\u2026\u522B\u602A" },
      { text: "\u547D\u8FD0", word: "fate" },
      { text: "\u618E\u6068", word: "hate" },
      { text: "\u4F60\u3002" }
    ],
    words: [
      { word: "date", display: "DATE", cn: "\u65E5\u671F", onset: "d" },
      { word: "gate", display: "GATE", cn: "\u767B\u673A\u95E8\u3001\u5927\u95E8", onset: "g" },
      { word: "late", display: "LATE", cn: "\u592A\u8FDF", onset: "l" },
      { word: "fate", display: "FATE", cn: "\u547D\u8FD0", onset: "f" },
      { word: "hate", display: "HATE", cn: "\u618E\u6068", onset: "h" }
    ],
    tip: "\u300C\u592A\u8FDF\u4E86\uFF01\u300D\u2014\u2014\u8BEF\u673A\u7684\u61CA\u607C\u753B\u9762\u8BB0\u4F4F 5 \u4E2A ATE\u3002"
  },
  {
    id: "ate2",
    rime: "ATE",
    title: "\u77F3\u677F\u74E6\u4E0A\u629B\u76D8\u5B50",
    subtitle: "\u5931\u8D25\u7684\u6BD4\u7387\u592A\u5927",
    scene: "/scenes/ate2.jpg",
    onsets: ["m", "sk", "sl", "pl", "r"],
    color: "#2F6F5E",
    story: [
      { text: "\u201C" },
      { text: "\u8001\u5144", word: "mate" },
      { text: "\uFF01\u7A7F" },
      { text: "\u6E9C\u51B0\u978B", word: "skate" },
      { text: "\u5728" },
      { text: "\u77F3\u677F\u74E6", word: "slate" },
      { text: "\u4E0A\u629B" },
      { text: "\u76D8\u5B50", word: "plate" },
      { text: "\uFF0C\u5931\u8D25\u7684" },
      { text: "\u6BD4\u7387", word: "rate" },
      { text: "\u592A\u5927\u3002\u201D" }
    ],
    words: [
      { word: "mate", display: "MATE", cn: "\u8001\u5144", onset: "m" },
      { word: "skate", display: "SKATE", cn: "\u6E9C\u51B0\u978B", onset: "sk" },
      { word: "slate", display: "SLATE", cn: "\u77F3\u677F\u74E6", onset: "sl" },
      { word: "plate", display: "PLATE", cn: "\u76D8\u5B50", onset: "pl" },
      { word: "rate", display: "RATE", cn: "\u6BD4\u7387", onset: "r" }
    ],
    tip: "\u7A7F\u6E9C\u51B0\u978B\u5728\u5C4B\u9876\u629B\u76D8\u5B50\u2014\u2014\u5371\u9669\u753B\u9762\u672C\u8EAB\u5C31\u662F\u8BB0\u5FC6\u94A9\u5B50\u3002"
  },
  {
    id: "ply",
    rime: "PLY",
    title: "\u540D\u53EB\u52E4\u594B\u7684\u5973\u5B69",
    subtitle: "\u6211\u7EE7\u7EED\u8865\u5145\u7ED9\u4F60\u7231",
    scene: "/scenes/ply.jpg",
    onsets: ["\xF8", "ap", "im", "re", "sup"],
    color: "#C25E7E",
    story: [
      { text: "\u4E00\u4F4D\u540D\u53EB" },
      { text: "\u52E4\u594B", word: "ply" },
      { text: "\u7684\u5973\u5B69" },
      { text: "\u542B", word: "imply" },
      { text: "\u7B11\u5730" },
      { text: "\u7B54\u590D", word: "reply" },
      { text: "\u8BF4\uFF1A\u201C\u6211\u6279\u51C6\u4F60\u7684" },
      { text: "\u7533\u8BF7", word: "apply" },
      { text: "\uFF0C\u7EE7\u7EED" },
      { text: "\u4F9B\u7ED9", word: "supply" },
      { text: "\u6211\u7684\u7231\u3002\u201D" }
    ],
    words: [
      { word: "ply", display: "PLY", cn: "\u52E4\u594B", onset: "\xF8" },
      { word: "imply", display: "IMPLY", cn: "\u542B", onset: "im" },
      { word: "reply", display: "REPLY", cn: "\u7B54\u590D", onset: "re" },
      { word: "apply", display: "APPLY", cn: "\u7533\u8BF7", onset: "ap" },
      { word: "supply", display: "SUPPLY", cn: "\u4F9B\u7ED9", onset: "sup" }
    ],
    tip: "PLY \u52A0\u524D\u7F00\u6210\u8BCD\uFF1AAPPLY\u3001IMPLY\u3001REPLY\u3001SUPPLY\u3002"
  },
  {
    id: "otion",
    rime: "OTION",
    title: "\u957F\u6905\u4E0A\u7684\u60C5\u7EEA\u8F6C\u79FB",
    subtitle: "\u89C2\u5FF5\u52A8\u4E86\uFF0C\u60C5\u611F\u5C31\u53D8\u4E86",
    scene: "/scenes/otion.jpg",
    onsets: ["n", "m", "e"],
    color: "#5B8C5A",
    story: [
      { text: "\u89C2\u5FF5", word: "notion" },
      { text: "\u8F6C\u79FB", word: "motion" },
      { text: "\u4E86\u4EBA\u7684" },
      { text: "\u60C5\u611F", word: "emotion" },
      { text: "\u3002" }
    ],
    words: [
      { word: "notion", display: "NOTION", cn: "\u89C2\u5FF5", onset: "n" },
      { word: "motion", display: "MOTION", cn: "\u79FB\u52A8", onset: "m" },
      { word: "emotion", display: "EMOTION", cn: "\u60C5\u611F", onset: "e" }
    ],
    tip: "NOTION\u2192MOTION\u2192EMOTION\uFF0C\u8BCD\u9996 n\u3001m\u3001e \u4E00\u6362\u610F\u601D\u5C31\u8F6C\u3002"
  },
  {
    id: "ake",
    rime: "AKE",
    title: "\u6E56\u8FB9\u9A97\u5B50\u70E4\u86CB\u7CD5",
    subtitle: "\u53D6\u4E86\u8584\u8584\u4E00\u7247\u5403\u4E86",
    scene: "/scenes/ake.jpg",
    onsets: ["f", "l", "m", "c", "b", "t", "w", "aw", "fl"],
    color: "#7A5C9E",
    story: [
      { text: "\u4E00\u4E2A" },
      { text: "\u9A97\u5B50", word: "fake" },
      { text: "\u5728" },
      { text: "\u6E56", word: "lake" },
      { text: "\u8FB9" },
      { text: "\u9192", word: "wake" },
      { text: "\u6765\uFF0C\u4ED6" },
      { text: "\u6E05\u9192", word: "awake" },
      { text: "\u5730" },
      { text: "\u505A", word: "make" },
      { text: "\u4E86" },
      { text: "\u86CB\u7CD5", word: "cake" },
      { text: "\u5E76\u628A\u5B83" },
      { text: "\u70E4", word: "bake" },
      { text: "\u597D\uFF0C" },
      { text: "\u53D6", word: "take" },
      { text: "\u4E86" },
      { text: "\u8584\u8584\u4E00\u7247", word: "flake" },
      { text: "\u5403\u4E86\uFF01" }
    ],
    words: [
      { word: "fake", display: "FAKE", cn: "\u9A97\u5B50", onset: "f" },
      { word: "lake", display: "LAKE", cn: "\u6E56", onset: "l" },
      { word: "wake", display: "WAKE", cn: "\u9192", onset: "w" },
      { word: "awake", display: "AWAKE", cn: "\u6E05\u9192\u7684", onset: "aw" },
      { word: "make", display: "MAKE", cn: "\u505A", onset: "m" },
      { word: "cake", display: "CAKE", cn: "\u86CB\u7CD5", onset: "c" },
      { word: "bake", display: "BAKE", cn: "\u70D8\u70E4", onset: "b" },
      { word: "take", display: "TAKE", cn: "\u53D6", onset: "t" },
      { word: "flake", display: "FLAKE", cn: "\u8584\u7247", onset: "fl" }
    ],
    tip: "AKE \u5BB6\u65CF 9 \u4E2A\u8BCD\uFF0C\u4E00\u4E2A\u6E56\u8FB9\u70D8\u7119\u6545\u4E8B\u5168\u90E8\u4E32\u8D77\u3002"
  },
  {
    id: "oy",
    rime: "OY",
    title: "\u9171\u6CB9\u73A9\u5177\u5386\u9669\u8BB0",
    subtitle: "\u6211\u771F\u559C\u6B22\u628A\u9171\u6CB9\u5F53\u73A9\u5177\u73A9",
    scene: "/scenes/oy.jpg",
    onsets: ["b", "c", "j", "s", "t"],
    color: "#B0762A",
    story: [
      { text: "\u7537\u5B69", word: "boy" },
      { text: "\u7F9E\u602F", word: "coy" },
      { text: "\u5730\u627F\u8BA4\uFF1A\u201C\u6211\u771F" },
      { text: "\u559C\u6B22", word: "joy" },
      { text: "\u628A" },
      { text: "\u9171\u6CB9", word: "soy" },
      { text: "\u5F53" },
      { text: "\u73A9\u5177", word: "toy" },
      { text: "\u73A9\u3002\u201D" }
    ],
    words: [
      { word: "boy", display: "BOY", cn: "\u7537\u5B69", onset: "b" },
      { word: "coy", display: "COY", cn: "\u7F9E\u602F", onset: "c" },
      { word: "joy", display: "JOY", cn: "\u6B22\u4E50", onset: "j" },
      { word: "soy", display: "SOY", cn: "\u9171\u6CB9", onset: "s" },
      { word: "toy", display: "TOY", cn: "\u73A9\u5177", onset: "t" }
    ],
    tip: "BOY\u3001COY\u3001JOY\u3001SOY\u3001TOY\u2014\u2014\u4E94\u4E2A OY \u4E00\u53E5\u8BDD\u3002"
  },
  {
    id: "ake2",
    rime: "AKE",
    title: "\u724C\u684C\u4E0A\u7684\u86C7\u9A97\u5B50",
    subtitle: "\u8D5D\u54C1\u9A97\u8D4C\u91D1",
    scene: "/scenes/ake2.jpg",
    onsets: ["sn", "f", "s", "st"],
    color: "#3E7CA6",
    story: [
      { text: "\u9634\u9669\u7684\u4EBA", word: "snake" },
      { text: "\u5E38\u7528" },
      { text: "\u8D5D\u54C1", word: "fake" },
      { text: "\u9A97\u4EBA\uFF0C\u4ED6\u7684" },
      { text: "\u76EE\u7684", word: "sake" },
      { text: "\u5F53\u7136\u662F\u4E3A\u4E86\u8D62\u5F97" },
      { text: "\u8D4C\u91D1", word: "stake" },
      { text: "\u3002" }
    ],
    words: [
      { word: "snake", display: "SNAKE", cn: "\u86C7\u3001\u9634\u9669\u7684\u4EBA", onset: "sn" },
      { word: "fake", display: "FAKE", cn: "\u8D5D\u54C1", onset: "f" },
      { word: "sake", display: "SAKE", cn: "\u76EE\u7684", onset: "s" },
      { word: "stake", display: "STAKE", cn: "\u8D4C\u91D1", onset: "st" }
    ],
    tip: "SNAKE \u7528 FAKE \u9A97 STAKE\u2014\u2014AKE \u7684\u53E6\u4E00\u7EC4\u724C\u642D\u5B50\u3002"
  }
];

// src/data/families-batch2.ts
var familiesBatch2 = [
  {
    id: "at",
    rime: "AT",
    title: "\u80A5\u732B\u627E\u8759\u8760\u7B97\u8D26",
    subtitle: "\u6211\u662F\u8759\u8760\u4E0D\u662F\u8001\u9F20\u5440",
    scene: "/scenes/at.jpg",
    onsets: ["\xF8", "e", "f", "c", "h", "b", "g", "v"],
    color: "#4A6FA5",
    story: [
      { text: "\u4E00\u53EA" },
      { text: "\u5403", word: "eat" },
      { text: "\u5F97\u5F88" },
      { text: "\u80A5", word: "fat" },
      { text: "\u7684" },
      { text: "\u732B", word: "cat" },
      { text: "\uFF0C\u6234\u4E0A\u5BBD\u8FB9" },
      { text: "\u5E3D", word: "hat" },
      { text: "\uFF0C\u4E00\u624B\u62FF" },
      { text: "\u67AA", word: "gat" },
      { text: "\uFF0C\u4E00\u624B\u62FF" },
      { text: "\u7403\u68D2", word: "bat" },
      { text: "\uFF0C" },
      { text: "\u671D\u7740", word: "at" },
      { text: "\u6728\u6876", word: "vat" },
      { text: "\u53EB\u56B7\uFF0C\u8981\u627E" },
      { text: "\u8759\u8760", word: "bat" },
      { text: "\u7B97\u8D26\u3002" }
    ],
    words: [
      { word: "at", display: "AT", cn: "\u671D\u5411\u3001\u5728\u2026\u2026\u5730\u70B9", onset: "\xF8" },
      { word: "eat", display: "EAT", cn: "\u5403", onset: "e" },
      { word: "fat", display: "FAT", cn: "\u80A5", onset: "f" },
      { word: "cat", display: "CAT", cn: "\u732B", onset: "c" },
      { word: "hat", display: "HAT", cn: "\u5E3D", onset: "h" },
      { word: "bat", display: "BAT", cn: "\u7403\u68D2\u3001\u8759\u8760", onset: "b" },
      { word: "gat", display: "GAT", cn: "\u624B\u67AA", onset: "g" },
      { word: "vat", display: "VAT", cn: "\u5927\u6876", onset: "v" }
    ],
    tip: "BAT \u4E00\u8BCD\u4E24\u7528\uFF1A\u65E2\u662F\u7403\u68D2\u53C8\u662F\u8759\u8760\u2014\u2014\u4E00\u8BCD\u591A\u4E49\u6B63\u597D\u7701\u4E00\u4EFD\u529B\u6C14\u3002"
  },
  {
    id: "rai",
    rime: "RAI",
    title: "\u7279\u653B\u961F\u96E8\u4E2D\u7A81\u88AD",
    subtitle: "\u8D8A\u8FC7\u56F4\u680F\u65F6\u4E0B\u8D77\u5927\u96E8",
    scene: "/scenes/rai.jpg",
    onsets: ["\xF8+d", "\xF8+der", "\xF8+l", "\xF8+n"],
    color: "#E15A3B",
    story: [
      { text: "\u7279\u653B\u961F", word: "raider" },
      { text: "\u7A81\u88AD", word: "raid" },
      { text: "\u94C1\u8DEF\uFF0C\u5F53\u4ED6\u4EEC\u8D8A\u8FC7" },
      { text: "\u56F4\u680F", word: "rail" },
      { text: "\u65F6\uFF0C\u7A81\u7136\u4E0B\u8D77\u4E86\u5927" },
      { text: "\u96E8", word: "rain" },
      { text: "\u3002" }
    ],
    words: [
      { word: "raider", display: "RAIDER", cn: "\u7279\u653B\u961F", onset: "\xF8+der" },
      { word: "raid", display: "RAID", cn: "\u7A81\u88AD", onset: "\xF8+d" },
      { word: "rail", display: "RAIL", cn: "\u56F4\u680F\u3001\u94C1\u8F68", onset: "\xF8+l" },
      { word: "rain", display: "RAIN", cn: "\u96E8", onset: "\xF8+n" }
    ],
    tip: "RAI \u540E\u9762\u6302\u4EC0\u4E48\u5B57\u6BCD\uFF0C\u5C31\u662F\u4EC0\u4E48\u89D2\u8272\uFF1A\u7A81\u88AD\u3001\u56F4\u680F\u3001\u5927\u96E8\u3001\u7279\u653B\u961F\u3002"
  },
  {
    id: "ail",
    rime: "AIL",
    title: "\u8717\u725B\u9001\u4FE1\u88AB\u5224\u5211",
    subtitle: "\u522B\u628A\u6211\u5173\u8FDB\u76D1\u7262",
    scene: "/scenes/ail.jpg",
    onsets: ["\xF8", "sn", "m", "s", "t", "f", "w", "j"],
    color: "#D9A441",
    story: [
      { text: "\u8717\u725B", word: "snail" },
      { text: "\u60F3\u628A" },
      { text: "\u90AE\u4EF6", word: "mail" },
      { text: "\u9001\u5230" },
      { text: "\u5E06", word: "sail" },
      { text: "\u7684" },
      { text: "\u5C3E\u7AEF", word: "tail" },
      { text: "\uFF0C\u4F46" },
      { text: "\u5931\u8D25", word: "fail" },
      { text: "\u4E86\uFF0C\u5B83" },
      { text: "\u82E6\u607C", word: "ail" },
      { text: "\u5730" },
      { text: "\u5927\u54ED", word: "wail" },
      { text: "\u8BF4\uFF1A\u201C\u522B\u628A\u6211\u5173\u8FDB" },
      { text: "\u76D1\u7262", word: "jail" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "ail", display: "AIL", cn: "\u82E6\u607C", onset: "\xF8" },
      { word: "snail", display: "SNAIL", cn: "\u8717\u725B", onset: "sn" },
      { word: "mail", display: "MAIL", cn: "\u90AE\u4EF6", onset: "m" },
      { word: "sail", display: "SAIL", cn: "\u5E06", onset: "s" },
      { word: "tail", display: "TAIL", cn: "\u5C3E\u7AEF", onset: "t" },
      { word: "fail", display: "FAIL", cn: "\u5931\u8D25", onset: "f" },
      { word: "wail", display: "WAIL", cn: "\u5927\u54ED", onset: "w" },
      { word: "jail", display: "JAIL", cn: "\u76D1\u7262", onset: "j" }
    ],
    tip: "\u4E00\u53EA\u8717\u725B\u7684\u60B2\u60E8\u906D\u9047\uFF0C\u4E32\u8D77 8 \u4E2A AIL\u3002"
  },
  {
    id: "est",
    rime: "EST",
    title: "\u8003\u8BD5\u5F00\u73A9\u7B11\u7684\u4E0B\u573A",
    subtitle: "\u8BA8\u538C\u7684\u4EBA\u627E\u4E0A\u7A9D\u5DE2",
    scene: "/scenes/est.jpg",
    onsets: ["z", "t", "j", "l", "p", "n"],
    color: "#2F6F5E",
    story: [
      { text: "\u4E0D\u8981\u4E3A\u4E86" },
      { text: "\u98CE\u8DA3", word: "zest" },
      { text: "\u800C\u5F00" },
      { text: "\u8003\u8BD5", word: "test" },
      { text: "\u7684" },
      { text: "\u73A9\u7B11", word: "jest" },
      { text: "\uFF0C" },
      { text: "\u4EE5\u514D", word: "lest" },
      { text: "\u6709" },
      { text: "\u8BA8\u538C\u7684\u4EBA", word: "pest" },
      { text: "\u5230\u4F60\u7684" },
      { text: "\u7A9D\u5DE2", word: "nest" },
      { text: "\u6765\u627E\u9EBB\u70E6\u3002" }
    ],
    words: [
      { word: "zest", display: "ZEST", cn: "\u98CE\u8DA3", onset: "z" },
      { word: "test", display: "TEST", cn: "\u8003\u8BD5", onset: "t" },
      { word: "jest", display: "JEST", cn: "\u73A9\u7B11", onset: "j" },
      { word: "lest", display: "LEST", cn: "\u4EE5\u514D", onset: "l" },
      { word: "pest", display: "PEST", cn: "\u8BA8\u538C\u7684\u4EBA", onset: "p" },
      { word: "nest", display: "NEST", cn: "\u7A9D\u3001\u5DE2", onset: "n" }
    ],
    tip: "\u8003\u5377\u7B54\u4E0D\u51FA\u5C31\u753B\u4E2A\u9B3C\u8138\u2014\u2014\u753B\u9762\u8D8A\u76AE\uFF0CEST \u8BB0\u5F97\u8D8A\u7262\u3002"
  },
  {
    id: "fee",
    rime: "FEE",
    title: "\u4E70\u9774\u4E0D\u5582\u5BA0\u7269",
    subtitle: "\u53CC\u811A\u7684\u611F\u89C9\u6700\u91CD\u8981",
    scene: "/scenes/fee.jpg",
    onsets: ["\xF8", "\xF8+t", "\xF8+l", "\xF8+d"],
    color: "#C25E7E",
    story: [
      { text: "\u4E3A\u4E86" },
      { text: "\u53CC\u811A", word: "feet" },
      { text: "\u7684" },
      { text: "\u611F\u89C9", word: "feel" },
      { text: "\u597D\uFF0C\u82B1\u70B9" },
      { text: "\u8D39\u7528", word: "fee" },
      { text: "\u800C\u5C11\u8BA9\u5BA0\u7269\u5403" },
      { text: "\u4E00\u9910", word: "feed" },
      { text: "\u4E5F\u6CA1\u4EC0\u4E48\u5927\u4E0D\u4E86\u3002" }
    ],
    words: [
      { word: "fee", display: "FEE", cn: "\u8D39\u7528", onset: "\xF8" },
      { word: "feet", display: "FEET", cn: "\u53CC\u811A\uFF08FOOT \u7684\u590D\u6570\uFF09", onset: "\xF8+t" },
      { word: "feel", display: "FEEL", cn: "\u611F\u89C9", onset: "\xF8+l" },
      { word: "feed", display: "FEED", cn: "\u4E00\u9910\u3001\u9972\u6599", onset: "\xF8+d" }
    ],
    tip: "FEE \u5C3E\u5DF4\u6362\u5B57\u6BCD\uFF1A\u8D39\u7528\u3001\u53CC\u811A\u3001\u611F\u89C9\u3001\u9972\u6599\u3002"
  },
  {
    id: "eet",
    rime: "EET",
    title: "\u751C\u83DC\u9047\u4E0A\u8230\u961F",
    subtitle: "\u6253\u62DB\u547C\u65F6\u4E0B\u8D77\u96E8\u5939\u96F9",
    scene: "/scenes/eet.jpg",
    onsets: ["b", "str", "sh", "m", "fl", "gr", "sl"],
    color: "#5B8C5A",
    story: [
      { text: "\u751C\u83DC", word: "beet" },
      { text: "\u53BB" },
      { text: "\u8857", word: "street" },
      { text: "\u4E0A\u4E70" },
      { text: "\u5E8A\u5355", word: "sheet" },
      { text: "\u65F6" },
      { text: "\u9047\u4E0A", word: "meet" },
      { text: "\u4E86" },
      { text: "\u8230\u961F", word: "fleet" },
      { text: "\uFF0C\u5B83\u6B63\u60F3" },
      { text: "\u6253\u62DB\u547C", word: "greet" },
      { text: "\u65F6\u5929\u4E0A\u4E0B\u8D77\u4E86" },
      { text: "\u96E8\u5939\u96F9", word: "sleet" },
      { text: "\u3002" }
    ],
    words: [
      { word: "beet", display: "BEET", cn: "\u751C\u83DC", onset: "b" },
      { word: "street", display: "STREET", cn: "\u8857\u9053", onset: "str" },
      { word: "sheet", display: "SHEET", cn: "\u5E8A\u5355", onset: "sh" },
      { word: "meet", display: "MEET", cn: "\u9047\u4E0A", onset: "m" },
      { word: "fleet", display: "FLEET", cn: "\u8230\u961F", onset: "fl" },
      { word: "greet", display: "GREET", cn: "\u95EE\u5019\u3001\u6253\u62DB\u547C", onset: "gr" },
      { word: "sleet", display: "SLEET", cn: "\u96E8\u5939\u96EA\u3001\u96F9", onset: "sl" }
    ],
    tip: "\u751C\u83DC\u6491\u5E8A\u5355\u5F53\u4F1E\u6321\u51B0\u96F9\u2014\u2014EET \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u753B\u6253\u5C3D\u3002"
  },
  {
    id: "mote",
    rime: "MOTE",
    title: "\u516C\u53F8\u5C18\u57C3\u7684\u664B\u5347",
    subtitle: "\u606D\u559C\u4F60\u5347\u4E3A\u5317\u6781\u5730\u533A\u7ECF\u7406",
    scene: "/scenes/mote.jpg",
    onsets: ["\xF8", "re", "pro"],
    color: "#7A5C9E",
    story: [
      { text: "\u5982\u679C\u4F60\u53EA\u662F\u516C\u53F8\u91CC\u7684" },
      { text: "\u5C18\u57C3", word: "mote" },
      { text: "\uFF0C\u552F\u6709\u8C03\u5230" },
      { text: "\u9065\u8FDC", word: "remote" },
      { text: "\u7684\u5929\u8FB9\uFF0C\u624D\u80FD\u88AB" },
      { text: "\u63D0\u5347", word: "promote" },
      { text: "\u3002" }
    ],
    words: [
      { word: "mote", display: "MOTE", cn: "\u7070\u5C18", onset: "\xF8" },
      { word: "remote", display: "REMOTE", cn: "\u9065\u8FDC", onset: "re" },
      { word: "promote", display: "PROMOTE", cn: "\u63D0\u5347", onset: "pro" }
    ],
    tip: "RE- \u8FDC\u3001PRO- \u5411\u524D\uFF1A\u524D\u7F00\u4E00\u6302\uFF0CMOTE \u610F\u4E49\u5927\u4E0D\u540C\u3002"
  },
  {
    id: "ay",
    rime: "AY",
    title: "\u4ED9\u5973\u4E0E\u7537\u5B50\u7684\u5E72\u8349\u7EA6\u4F1A",
    subtitle: "\u4E00\u5207\u5F00\u652F\u6211\u4ED8\u8D26",
    scene: "/scenes/ay.jpg",
    onsets: ["\xF8", "b", "c", "d", "f", "g", "h", "l", "p"],
    color: "#B0762A",
    story: [
      { text: "\u4ED9\u5973", word: "fay" },
      { text: "\u8BF4\uFF1A\u201C\u54EA\u4E00" },
      { text: "\u5929", word: "day" },
      { text: "\u6211\u4EEC\u53BB" },
      { text: "\u73CA\u745A\u7901", word: "cay" },
      { text: "\u6E7E", word: "bay" },
      { text: "\uFF0C" },
      { text: "\u8EBA", word: "lay" },
      { text: "\u5728" },
      { text: "\u5E72\u8349", word: "hay" },
      { text: "\u4E0A\uFF0C\u4E00\u5207\u5F00\u652F\u6211" },
      { text: "\u4ED8\u8D26", word: "pay" },
      { text: "\u3002\u201D\u7537\u5B50\u8BF4\uFF1A\u201C" },
      { text: "\u884C", word: "ay" },
      { text: "\uFF01\u4F46\u6211\u4E0D\u4F1A\u548C\u4F60\u8C08\u60C5\u8BF4\u7231\uFF0C\u56E0\u4E3A\u6211\u662F\u4E2A" },
      { text: "\u7537\u540C\u6027\u604B", word: "gay" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "ay", display: "AY", cn: "\u884C", onset: "\xF8" },
      { word: "fay", display: "FAY", cn: "\u4ED9\u5973", onset: "f" },
      { word: "day", display: "DAY", cn: "\u65E5", onset: "d" },
      { word: "cay", display: "CAY", cn: "\u73CA\u745A\u7901", onset: "c" },
      { word: "bay", display: "BAY", cn: "\u6E7E", onset: "b" },
      { word: "lay", display: "LAY", cn: "\u8EBA", onset: "l" },
      { word: "hay", display: "HAY", cn: "\u5E72\u8349", onset: "h" },
      { word: "pay", display: "PAY", cn: "\u4ED8\u6B3E", onset: "p" },
      { word: "gay", display: "GAY", cn: "\u7537\u540C\u6027\u604B", onset: "g" }
    ],
    tip: "AY \u5BB6\u65CF 9 \u4E2A\u8BCD\uFF0C\u4E00\u6BB5\u6D77\u6EE9\u5BF9\u8BDD\u5168\u4E32\u8D77\u3002"
  },
  {
    id: "mple",
    rime: "MPLE",
    title: "\u4E70\u6BD4\u57FA\u5C3C\u9001\u5973\u53CB",
    subtitle: "\u7B80\u5355\u7684\u6837\u54C1\u662F\u4E2A\u597D\u4F8B\u5B50",
    scene: "/scenes/mple.jpg",
    onsets: ["si", "sa", "exa"],
    color: "#3E7CA6",
    story: [
      { text: "\u7B80\u5355", word: "simple" },
      { text: "\u7684" },
      { text: "\u6837\u54C1", word: "sample" },
      { text: "\u662F\u4E2A\u597D" },
      { text: "\u4F8B\u5B50", word: "example" },
      { text: "\u3002" }
    ],
    words: [
      { word: "simple", display: "SIMPLE", cn: "\u7B80\u5355", onset: "si" },
      { word: "sample", display: "SAMPLE", cn: "\u6837\u54C1", onset: "sa" },
      { word: "example", display: "EXAMPLE", cn: "\u4F8B\u5B50", onset: "exa" }
    ],
    tip: "SIMPLE\u3001SAMPLE\u3001EXAMPLE \u4E09\u5144\u5F1F\uFF1A\u7B80\u5355\u2192\u6837\u54C1\u2192\u4F8B\u5B50\u3002"
  },
  {
    id: "og",
    rime: "OG",
    title: "\u8D2A\u5A6A\u72D7\u9677\u5165\u6CBC\u6CFD",
    subtitle: "\u53EA\u602A\u4ECE\u524D\u4E0D\u8BFB\u4E66\u4E0D\u8BC6\u5B57",
    scene: "/scenes/og.jpg",
    onsets: ["b", "c", "d", "f", "h", "j", "l", "m", "n", "t"],
    color: "#4A6FA5",
    story: [
      { text: "\u4E00\u53EA\u540D\u53EB" },
      { text: "\u8F6E\u9F7F", word: "cog" },
      { text: "\u7684" },
      { text: "\u8D2A\u5A6A", word: "hog" },
      { text: "\u4E4B" },
      { text: "\u72D7", word: "dog" },
      { text: "\uFF0C" },
      { text: "\u6253\u626E", word: "tog" },
      { text: "\u5165\u65F6\uFF0C\u5728" },
      { text: "\u96FE", word: "fog" },
      { text: "\u4E2D" },
      { text: "\u4E0D\u505C\u5730", word: "mog" },
      { text: "\u5411\u524D" },
      { text: "\u7F13\u884C", word: "jog" },
      { text: "\uFF0C\u4E0D\u5E78\u9677\u5165" },
      { text: "\u6CBC\u6CFD", word: "bog" },
      { text: "\uFF0C\u53EA\u602A\u5B83\u4E0D\u8BC6" },
      { text: "\u5706\u6728", word: "log" },
      { text: "\u6813", word: "nog" },
      { text: "\u4E0A\u7684\u5B57\u3002" }
    ],
    words: [
      { word: "cog", display: "COG", cn: "\u8F6E\u9F7F", onset: "c" },
      { word: "hog", display: "HOG", cn: "\u8D2A\u5A6A", onset: "h" },
      { word: "dog", display: "DOG", cn: "\u72D7", onset: "d" },
      { word: "tog", display: "TOG", cn: "\u6253\u626E", onset: "t" },
      { word: "fog", display: "FOG", cn: "\u96FE", onset: "f" },
      { word: "mog", display: "MOG", cn: "\u4E0D\u505C\u5730\u7F13\u7F13\u524D\u8FDB", onset: "m" },
      { word: "jog", display: "JOG", cn: "\u6F2B\u6B65\u3001\u7F13\u884C", onset: "j" },
      { word: "bog", display: "BOG", cn: "\u6CBC\u6CFD", onset: "b" },
      { word: "log", display: "LOG", cn: "\u5706\u6728", onset: "l" },
      { word: "nog", display: "NOG", cn: "\u6728\u6813", onset: "n" }
    ],
    tip: "\u4E00\u4E2A OG \u5341\u4E2A\u8BCD\u9996\u2014\u2014\u8BCD\u65CF\u91CC\u6700\u58EE\u89C2\u7684\u4E00\u4E32\u3002"
  },
  {
    id: "ig",
    rime: "IG",
    title: "\u5927\u732A\u6811\u4E0B\u5BFB\u5B9D",
    subtitle: "\u6398\u51FA\u9C7C\u53C9\u3001\u9493\u94A9\u548C\u5E06\u8239",
    scene: "/scenes/ig.jpg",
    onsets: ["tr", "b", "p", "d", "f", "g", "j", "r", "br"],
    color: "#E15A3B",
    story: [
      { text: "\u4E00\u53EA" },
      { text: "\u6F02\u4EAE\u7684", word: "trig" },
      { text: "\u5927", word: "big" },
      { text: "\u732A", word: "pig" },
      { text: "\uFF0C\u5230" },
      { text: "\u65E0\u82B1\u679C\u6811", word: "fig" },
      { text: "\u4E0B" },
      { text: "\u6398", word: "dig" },
      { text: "\u51FA" },
      { text: "\u9C7C\u53C9", word: "gig" },
      { text: "\u3001" },
      { text: "\u9493\u94A9", word: "jig" },
      { text: "\u3001" },
      { text: "\u88C5\u5907", word: "rig" },
      { text: "\u548C\u4E00\u8258" },
      { text: "\u53CC\u6845\u5E06\u8239", word: "brig" },
      { text: "\u3002" }
    ],
    words: [
      { word: "trig", display: "TRIG", cn: "\u6574\u6D01\u7684\u3001\u6F02\u4EAE\u7684", onset: "tr" },
      { word: "big", display: "BIG", cn: "\u5927", onset: "b" },
      { word: "pig", display: "PIG", cn: "\u732A", onset: "p" },
      { word: "fig", display: "FIG", cn: "\u65E0\u82B1\u679C\u6811", onset: "f" },
      { word: "dig", display: "DIG", cn: "\u6316\u3001\u6398", onset: "d" },
      { word: "gig", display: "GIG", cn: "\u9C7C\u53C9", onset: "g" },
      { word: "jig", display: "JIG", cn: "\u9493\u94A9", onset: "j" },
      { word: "rig", display: "RIG", cn: "\u88C5\u5907", onset: "r" },
      { word: "brig", display: "BRIG", cn: "\u53CC\u6845\u5E06\u8239", onset: "br" }
    ],
    tip: "PIG \u662F\u719F\u8BCD\uFF0C\u501F\u5B83\u628A IG \u5BB6\u65CF 9 \u4E2A\u8BCD\u5168\u5E26\u8D70\u3002"
  },
  {
    id: "lip",
    rime: "LIP",
    title: "\u90C1\u91D1\u9999\u8FD8\u662F\u56DE\u5F62\u9488",
    subtitle: "\u4E24\u6837\u793C\u7269\u4EFB\u4F60\u9009\u4E00\u79CD",
    scene: "/scenes/lip.jpg",
    onsets: ["\xF8", "c", "f", "tu"],
    color: "#D9A441",
    story: [
      { text: "\u4ED6\u7528\u624B\u6307" },
      { text: "\u5F39\u6389", word: "flip" },
      { text: "\u5634\u5507", word: "lip" },
      { text: "\u4E0A\u7684\u70DF\u7070\uFF0C\u7136\u540E\u5BF9\u5979\u8BF4\uFF1A\u201C\u5982\u679C\u4F60\u4E0D\u63A5\u53D7" },
      { text: "\u90C1\u91D1\u9999", word: "tulip" },
      { text: "\uFF0C\u6211\u5C31\u6539\u9001\u4F60" },
      { text: "\u56DE\u5F62\u9488", word: "clip" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "flip", display: "FLIP", cn: "\u5F39\u6389", onset: "f" },
      { word: "lip", display: "LIP", cn: "\u5634\u5507", onset: "\xF8" },
      { word: "tulip", display: "TULIP", cn: "\u90C1\u91D1\u9999", onset: "tu" },
      { word: "clip", display: "CLIP", cn: "\u56DE\u5F62\u9488", onset: "c" }
    ],
    tip: "\u5F53\u7136\u9009\u90C1\u91D1\u9999\uFF01LIP \u5BB6\u65CF\u56DB\u4E2A\u8BCD\u4E00\u6B21\u6536\u3002"
  },
  {
    id: "ew",
    rime: "EW",
    title: "\u780D\u7D2B\u6749\u7684\u957F\u677F\u51F3",
    subtitle: "\u597D\u8BA9\u5987\u5973\u7F1D\u8863\u670D",
    scene: "/scenes/ew.jpg",
    onsets: ["f", "j", "d", "h", "y", "p", "n", "m", "s"],
    color: "#2F6F5E",
    story: [
      { text: "\u5C11\u6570", word: "few" },
      { text: "\u72B9\u592A\u4EBA", word: "jew" },
      { text: "\u4F1A\u5728\u6709" },
      { text: "\u9732\u6C34", word: "dew" },
      { text: "\u7684\u6E05\u6668\uFF0C" },
      { text: "\u780D", word: "hew" },
      { text: "\u7D2B\u6749", word: "yew" },
      { text: "\u5236\u6210" },
      { text: "\u957F\u677F\u51F3", word: "pew" },
      { text: "\uFF0C\u7F6E\u4E8E" },
      { text: "\u65B0", word: "new" },
      { text: "\u76D6\u7684" },
      { text: "\u5BC6\u5BA4", word: "mew" },
      { text: "\uFF0C\u597D\u8BA9\u5987\u5973" },
      { text: "\u7F1D", word: "sew" },
      { text: "\u8863\u670D\u3002" }
    ],
    words: [
      { word: "few", display: "FEW", cn: "\u5C11\u6570", onset: "f" },
      { word: "jew", display: "JEW", cn: "\u72B9\u592A\u4EBA", onset: "j" },
      { word: "dew", display: "DEW", cn: "\u9732\u6C34", onset: "d" },
      { word: "hew", display: "HEW", cn: "\u780D", onset: "h" },
      { word: "yew", display: "YEW", cn: "\u7D2B\u6749", onset: "y" },
      { word: "pew", display: "PEW", cn: "\u957F\u677F\u51F3", onset: "p" },
      { word: "new", display: "NEW", cn: "\u65B0", onset: "n" },
      { word: "mew", display: "MEW", cn: "\u5BC6\u5BA4", onset: "m", note: "\u6D77\u9E25\u4EA6\u53EF\u79F0 MEW" },
      { word: "sew", display: "SEW", cn: "\u7F1D", onset: "s" }
    ],
    tip: "NEW \u6700\u719F\uFF0C\u5411\u4E24\u8FB9\u6392\u961F\uFF0CEW \u5BB6\u65CF 9 \u4E2A\u8BCD\u5168\u6536\u3002"
  },
  {
    id: "hit",
    rime: "HIT",
    title: "\u6253\u51FB\u6559\u80B2\u7684\u8352\u8C2C",
    subtitle: "\u8FD9\u662F\u80E1\u8BF4\u516B\u9053",
    scene: "/scenes/hit.jpg",
    onsets: ["h", "wh", "c", "sh"],
    color: "#C25E7E",
    story: [
      { text: "\u4E00\u70B9\u513F", word: "whit" },
      { text: "\u6253\u51FB", word: "hit" },
      { text: "\u80FD\u4EE4" },
      { text: "\u5E7C\u513F", word: "chit" },
      { text: "\u53D8\u5F97\u575A\u5F3A\u8D77\u6765\uFF0C\u8FD9\u662F" },
      { text: "\u80E1\u8BF4\u516B\u9053", word: "shit" },
      { text: "\uFF01" }
    ],
    words: [
      { word: "whit", display: "WHIT", cn: "\u4E00\u70B9\u513F", onset: "wh" },
      { word: "hit", display: "HIT", cn: "\u6253\u51FB", onset: "h" },
      { word: "chit", display: "CHIT", cn: "\u5E7C\u513F", onset: "c" },
      { word: "shit", display: "SHIT", cn: "\u80E1\u8A00\u3001\u5927\u4FBF", onset: "sh" }
    ],
    tip: "\u89C2\u70B9\u8D8A\u9C9C\u660E\u8D8A\u597D\u8BB0\uFF1A\u6253\u51FB\u6559\u80B2\uFF1FSHIT\uFF01"
  },
  {
    id: "van",
    rime: "VAN",
    title: "\u5F00\u5F80\u6E29\u54E5\u534E\u7684\u884C\u674E\u8F66",
    subtitle: "\u534A\u8DEF\u53EA\u5269\u7A7A\u865A\u548C\u56F0\u60D1",
    scene: "/scenes/van.jpg",
    onsets: ["\xF8", "\xF8+e", "\xF8+illa", "\xF8+couver", "\xF8+ity"],
    color: "#5B8C5A",
    story: [
      { text: "\u4ED6\u5F00\u7740" },
      { text: "\u884C\u674E\u8F66", word: "van" },
      { text: "\uFF0C\u8F7D\u7740" },
      { text: "\u9999\u8349", word: "vanilla" },
      { text: "\u548C" },
      { text: "\u98CE\u4FE1\u6807", word: "vane" },
      { text: "\uFF0C\u8981\u5230" },
      { text: "\u6E29\u54E5\u534E", word: "vancouver" },
      { text: "\u3002\u8D70\u5230\u534A\u8DEF\u65F6\uFF0C\u7A81\u7136\u6240\u6709\u7684\u4E1C\u897F\u90FD\u6D88\u5931\u4E0D\u89C1\uFF0C\u53EA\u5269\u4E0B\u4ED6\u7684" },
      { text: "\u7A7A\u865A", word: "vanity" },
      { text: "\u548C\u56F0\u60D1\u3002" }
    ],
    words: [
      { word: "van", display: "VAN", cn: "\u884C\u674E\u8F66", onset: "\xF8" },
      { word: "vanilla", display: "VANILLA", cn: "\u9999\u8349", onset: "\xF8+illa" },
      { word: "vane", display: "VANE", cn: "\u98CE\u4FE1\u6807", onset: "\xF8+e" },
      { word: "vancouver", display: "VANCOUVER", cn: "\u6E29\u54E5\u534E", onset: "\xF8+couver" },
      { word: "vanity", display: "VANITY", cn: "\u7A7A\u865A", onset: "\xF8+ity" }
    ],
    tip: "VAN \u8D8A\u6302\u8D8A\u957F\uFF1A\u884C\u674E\u8F66\u3001\u98CE\u4FE1\u6807\u3001\u9999\u8349\u3001\u6E29\u54E5\u534E\u3001\u7A7A\u865A\u3002"
  },
  {
    id: "base",
    rime: "BASE",
    title: "\u5B88\u5792\u5458\u5077\u5792\u5305",
    subtitle: "\u5E26\u56DE\u5BB6\u85CF\u8FDB\u5730\u4E0B\u5BA4",
    scene: "/scenes/base.jpg",
    onsets: ["\xF8", "\xF8+ball", "\xF8+man", "\xF8+ment", "\xF8+ness"],
    color: "#7A5C9E",
    story: [
      { text: "\u68D2\u7403", word: "baseball" },
      { text: "\u5B88\u5792\u5458", word: "baseman" },
      { text: "\u5C3D\u8D23\u5730\u5B88\u7740\u4ED6\u7684" },
      { text: "\u5792", word: "base" },
      { text: "\uFF0C\u5F53\u4ED6\u53D1\u73B0\u5B88\u4E0D\u4F4F\u65F6\uFF0C\u4ED6" },
      { text: "\u5351\u52A3", word: "baseness" },
      { text: "\u5730\u5C06\u5792\u5305\u5E26\u56DE\u5230\u5BB6\u4E2D\u7684" },
      { text: "\u5730\u4E0B\u5BA4", word: "basement" },
      { text: "\u3002" }
    ],
    words: [
      { word: "baseball", display: "BASEBALL", cn: "\u68D2\u7403", onset: "\xF8+ball" },
      { word: "baseman", display: "BASEMAN", cn: "\u5B88\u5792\u5458", onset: "\xF8+man" },
      { word: "base", display: "BASE", cn: "\u5730\u57FA\u3001\u57FA\u7840\u3001\u5792", onset: "\xF8" },
      { word: "baseness", display: "BASENESS", cn: "\u5351\u52A3", onset: "\xF8+ness" },
      { word: "basement", display: "BASEMENT", cn: "\u5730\u4E0B\u5BA4", onset: "\xF8+ment" }
    ],
    tip: "BASE \u662F\u8BCD\u6839\uFF1A\u540E\u7F00\u4E00\u53D8\uFF0C\u68D2\u7403\u3001\u5B88\u5792\u5458\u3001\u5730\u4E0B\u5BA4\u3001\u5351\u52A3\u5168\u51FA\u6765\u3002"
  },
  {
    id: "ban",
    rime: "BAN",
    title: "\u66FC\u8C37\u6995\u6811\u4E0B",
    subtitle: "\u5F39\u7434\u53C8\u5356\u9999\u8549\u9999\u80A0",
    scene: "/scenes/ban.jpg",
    onsets: ["\xF8", "\xF8+gkok", "\xF8+al", "\xF8+yan", "\xF8+dore", "\xF8+jo", "\xF8+ana", "\xF8+ger"],
    color: "#B0762A",
    story: [
      { text: "\u66FC\u8C37", word: "bangkok" },
      { text: "\u662F\u4E2A" },
      { text: "\u7981\u4EE4", word: "ban" },
      { text: "\u5F88\u5C11\u7684\u4E0D" },
      { text: "\u5E73\u51E1", word: "banal" },
      { text: "\u5730\u65B9\uFF0C\u4F60\u65E2\u53EF\u4EE5\u5728" },
      { text: "\u6995\u6811", word: "banyan" },
      { text: "\u4E0B\u5F39" },
      { text: "\u4E09\u5F26\u7434", word: "bandore" },
      { text: "\u3001" },
      { text: "\u4E94\u5F26\u7434", word: "banjo" },
      { text: "\uFF0C\u4E5F\u53EF\u4EE5\u5728\u6995\u6811\u4E0B\u5356" },
      { text: "\u9999\u8549", word: "banana" },
      { text: "\u3001" },
      { text: "\u9999\u80A0", word: "banger" },
      { text: "\u3002" }
    ],
    words: [
      { word: "ban", display: "BAN", cn: "\u7981\u4EE4", onset: "\xF8" },
      { word: "bangkok", display: "BANGKOK", cn: "\u66FC\u8C37", onset: "\xF8+gkok" },
      { word: "banal", display: "BANAL", cn: "\u5E73\u51E1\u7684", onset: "\xF8+al" },
      { word: "banyan", display: "BANYAN", cn: "\u6995\u6811", onset: "\xF8+yan" },
      { word: "bandore", display: "BANDORE", cn: "\u4E09\u5F26\u7434", onset: "\xF8+dore" },
      { word: "banjo", display: "BANJO", cn: "\u4E94\u5F26\u7434", onset: "\xF8+jo" },
      { word: "banana", display: "BANANA", cn: "\u9999\u8549", onset: "\xF8+ana" },
      { word: "banger", display: "BANGER", cn: "\u9999\u80A0", onset: "\xF8+ger" }
    ],
    tip: "BAN \u5F00\u5934\u7684\u8BCD\u4E00\u4E32 8 \u4E2A\uFF0C\u8FDE\u66FC\u8C37\u90FD\u5728\u91CC\u9762\u3002"
  },
  {
    id: "ix",
    rime: "IX",
    title: "\u5723\u4F53\u676F\u524D\u7684\u53EE\u5631",
    subtitle: "\u6C34\u5996\u6DF7\u5165\uFF0C\u51E4\u51F0\u9664\u5916",
    scene: "/scenes/ix.jpg",
    onsets: ["phoen", "s", "f", "m", "n", "p"],
    color: "#3E7CA6",
    story: [
      { text: "\u201C\u4F60\u4EEC" },
      { text: "\u516D", word: "six" },
      { text: "\u4E2A\u4ED4\u7EC6" },
      { text: "\u8BB0\u7262", word: "fix" },
      { text: "\uFF0C\u7EDD\u4E0D\u80FD\u8BA9" },
      { text: "\u6C34\u5996", word: "nix" },
      { text: "\u6DF7", word: "mix" },
      { text: "\u5165" },
      { text: "\u5723\u4F53\u676F", word: "pix" },
      { text: "\uFF0C" },
      { text: "\u51E4\u51F0", word: "phoenix" },
      { text: "\u9664\u5916\u3002\u201D" }
    ],
    words: [
      { word: "six", display: "SIX", cn: "\u516D", onset: "s" },
      { word: "fix", display: "FIX", cn: "\u7262\u8BB0", onset: "f" },
      { word: "nix", display: "NIX", cn: "\u6C34\u5996", onset: "n" },
      { word: "mix", display: "MIX", cn: "\u6DF7\u5408", onset: "m" },
      { word: "pix", display: "PIX", cn: "\u5723\u4F53\u676F", onset: "p" },
      { word: "phoenix", display: "PHOENIX", cn: "\u51E4\u51F0", onset: "phoen" }
    ],
    tip: "IX \u5BB6\u65CF\u5E26\u4E00\u53EA\u51E4\u51F0\u2014\u2014\u957F\u77ED\u8BCD\u6DF7\u642D\u4E5F\u80FD\u540C\u65CF\u8BB0\u3002"
  },
  {
    id: "ppy",
    rime: "PPY",
    title: "\u5B09\u76AE\u58EB\u5976\u7238",
    subtitle: "\u65B0\u5F0F\u597D\u7537\u4EBA\u7684\u7279\u5F81",
    scene: "/scenes/ppy.jpg",
    onsets: ["ha", "hi", "na", "pa", "sa"],
    color: "#4A6FA5",
    story: [
      { text: "\u5B09\u76AE\u58EB", word: "hippy" },
      { text: "\u8BF4\uFF1A\u201C\u6211" },
      { text: "\u5FEB\u4E50", word: "happy" },
      { text: "\u5730\u66FF\u5A74\u513F\u6362" },
      { text: "\u5C3F\u5E03", word: "nappy" },
      { text: "\u3001\u5582" },
      { text: "\u534A\u6D41\u98DF", word: "pappy" },
      { text: "\uFF0C\u8FD9\u4E0D\u662F" },
      { text: "\u6CA1\u7537\u5B50\u6C14\u6982", word: "sappy" },
      { text: "\uFF0C\u800C\u662F\u65B0\u5F0F\u597D\u7537\u4EBA\u7684\u7279\u5F81\u3002\u201D" }
    ],
    words: [
      { word: "hippy", display: "HIPPY", cn: "\u5B09\u76AE\u58EB", onset: "hi" },
      { word: "happy", display: "HAPPY", cn: "\u5FEB\u4E50", onset: "ha" },
      { word: "nappy", display: "NAPPY", cn: "\u5C3F\u5E03", onset: "na" },
      { word: "pappy", display: "PAPPY", cn: "\u534A\u6D41\u8D28\u7684", onset: "pa" },
      { word: "sappy", display: "SAPPY", cn: "\u6CA1\u7537\u5B50\u6C14\u6982\u7684", onset: "sa" }
    ],
    tip: "HAPPY \u6700\u719F\uFF0CPPY \u5BB6\u65CF 5 \u4E2A\u8BCD\u987A\u7740\u5976\u7238\u5168\u8BB0\u4F4F\u3002"
  },
  {
    id: "use",
    rime: "USE",
    title: "\u7535\u5DE5\u4E0E\u4FDD\u9669\u4E1D",
    subtitle: "\u522B\u800D\u82B1\u62DB\u8BEF\u7528\u4E86\u65B9\u6CD5",
    scene: "/scenes/use.jpg",
    onsets: ["\xF8", "f", "m", "r", "ca", "mis"],
    color: "#E15A3B",
    story: [
      { text: "\u4F7F\u7528", word: "use" },
      { text: "\u4FDD\u9669\u4E1D", word: "fuse" },
      { text: "\u8981\u5C0F\u5FC3\uFF0C\u5982\u679C\u574F\u4E86\u5E94" },
      { text: "\u6C89\u601D", word: "muse" },
      { text: "\u539F\u56E0", word: "cause" },
      { text: "\uFF0C\u522B\u800D" },
      { text: "\u82B1\u62DB", word: "ruse" },
      { text: "\u8BEF\u7528", word: "misuse" },
      { text: "\u4E86\u65B9\u6CD5\u3002" }
    ],
    words: [
      { word: "use", display: "USE", cn: "\u4F7F\u7528", onset: "\xF8" },
      { word: "fuse", display: "FUSE", cn: "\u4FDD\u9669\u4E1D", onset: "f" },
      { word: "muse", display: "MUSE", cn: "\u6C89\u601D", onset: "m" },
      { word: "cause", display: "CAUSE", cn: "\u539F\u56E0", onset: "ca" },
      { word: "ruse", display: "RUSE", cn: "\u82B1\u62DB", onset: "r" },
      { word: "misuse", display: "MISUSE", cn: "\u8BEF\u7528", onset: "mis" }
    ],
    tip: "USE \u52A0\u8BCD\u9996\uFF1A\u4FDD\u9669\u4E1D\u3001\u6C89\u601D\u3001\u82B1\u62DB\u3001\u539F\u56E0\u3001\u8BEF\u7528\u3002"
  },
  {
    id: "own",
    rime: "OWN",
    title: "\u5C0F\u4E11\u7684\u7F6E\u4E1A\u7ECF",
    subtitle: "\u8D5A\u94B1\u5546\u4E1A\u533A\uFF0C\u5C45\u4F4F\u4F4F\u5B85\u533A",
    scene: "/scenes/own.jpg",
    onsets: ["d", "t", "d+t", "up+t", "cl", "kn", "shanty+t"],
    color: "#D9A441",
    story: [
      { text: "\u5C0F\u4E11", word: "clown" },
      { text: "\u5E76\u4E0D\u7B28\uFF0C\u4ED6\u77E5\u9053\u8D5A\u94B1\u8981\u5728" },
      { text: "\u4E0B", word: "down" },
      { text: "\u57CE" },
      { text: "\u77E5\u540D", word: "known" },
      { text: "\u5546\u4E1A\u533A", word: "downtown" },
      { text: "\uFF0C\u5C45\u4F4F\u8981\u5728" },
      { text: "\u4F4F\u5B85\u533A", word: "uptown" },
      { text: "\u800C\u975E" },
      { text: "\u8D2B\u6C11\u533A", word: "shantytown" },
      { text: "\u3002" }
    ],
    words: [
      { word: "clown", display: "CLOWN", cn: "\u5C0F\u4E11", onset: "cl" },
      { word: "down", display: "DOWN", cn: "\u5411\u4E0B", onset: "d" },
      { word: "known", display: "KNOWN", cn: "\u77E5\u540D", onset: "kn" },
      { word: "town", display: "TOWN", cn: "\u5E02\u533A", onset: "t" },
      { word: "downtown", display: "DOWNTOWN", cn: "\u5546\u4E1A\u533A", onset: "d+t" },
      { word: "uptown", display: "UPTOWN", cn: "\u4F4F\u5B85\u533A", onset: "up+t" },
      { word: "shantytown", display: "SHANTYTOWN", cn: "\u8D2B\u6C11\u533A", onset: "shanty+t" }
    ],
    tip: "DOWN+TOWN\u3001UP+TOWN\u3001SHANTY+TOWN\u2014\u2014\u8BCD\u5757\u53E0\u8BCD\u5757\u3002"
  },
  {
    id: "woo",
    rime: "WOO",
    title: "\u6728\u5934\u4E0A\u7684\u6C42\u5A5A",
    subtitle: "\u518D\u4E0D\u7B54\u5E94\u6211\u53EF\u8981\u8D70\u4E86",
    scene: "/scenes/woo.jpg",
    onsets: ["\xF8", "\xF8+l", "\xF8+f", "\xF8+d"],
    color: "#2F6F5E",
    story: [
      { text: "\u8EAB\u7A7F" },
      { text: "\u7F8A\u6BDB", word: "wool" },
      { text: "\u7EC7\u54C1", word: "woof" },
      { text: "\u7684\u5C11\u5E74\uFF0C\u8DEA\u5728" },
      { text: "\u68EE\u6797", word: "wood" },
      { text: "\u4E2D\u7684\u6728\u5934\u4E0A\u5411\u5C11\u5973" },
      { text: "\u6C42\u5A5A", word: "woo" },
      { text: "\u3002" }
    ],
    words: [
      { word: "woo", display: "WOO", cn: "\u6C42\u5A5A", onset: "\xF8" },
      { word: "wool", display: "WOOL", cn: "\u7F8A\u6BDB", onset: "\xF8+l" },
      { word: "woof", display: "WOOF", cn: "\u7EC7\u54C1", onset: "\xF8+f" },
      { word: "wood", display: "WOOD", cn: "\u6728\u6750\u3001\u68EE\u6797", onset: "\xF8+d" }
    ],
    tip: "WOO \u5C3E\u5DF4\u6362\u5B57\u6BCD\uFF1A\u6C42\u5A5A\u3001\u7F8A\u6BDB\u3001\u7EC7\u54C1\u3001\u68EE\u6797\u3002"
  },
  {
    id: "able",
    rime: "ABLE",
    title: "\u9ED1\u8C82\u5BD3\u8A00\u60CA\u9B42\u591C",
    subtitle: "\u5267\u60C5\u5413\u574F\u80C6\u5C0F\u7684\u4EBA",
    scene: "/scenes/able.jpg",
    onsets: ["\xF8", "c", "f", "g", "t", "s"],
    color: "#C25E7E",
    story: [
      { text: "\u5C71\u5899", word: "gable" },
      { text: "\u8FB9" },
      { text: "\u684C", word: "table" },
      { text: "\u4E0A\u7684" },
      { text: "\u6709\u7EBF\u7535\u89C6", word: "cable" },
      { text: "\u6B63\u64AD\u51FA" },
      { text: "\u9ED1\u8C82", word: "sable" },
      { text: "\u7684" },
      { text: "\u5BD3\u8A00\u4F20\u8BF4", word: "fable" },
      { text: "\uFF0C\u5267\u60C5" },
      { text: "\u4F1A", word: "able" },
      { text: "\u5413\u574F\u80C6\u5C0F\u7684\u4EBA\u3002" }
    ],
    words: [
      { word: "able", display: "ABLE", cn: "\u4F1A\u3001\u80FD", onset: "\xF8" },
      { word: "gable", display: "GABLE", cn: "\u5C71\u5899", onset: "g" },
      { word: "table", display: "TABLE", cn: "\u684C\u5B50", onset: "t" },
      { word: "cable", display: "CABLE", cn: "\u6709\u7EBF\u7535\u89C6", onset: "c" },
      { word: "sable", display: "SABLE", cn: "\u9ED1\u8C82", onset: "s" },
      { word: "fable", display: "FABLE", cn: "\u5BD3\u8A00\u3001\u4F20\u8BF4", onset: "f" }
    ],
    tip: "TABLE \u662F\u719F\u8BCD\uFF0CABLE \u5BB6\u65CF\u56F4\u7740\u5B83\u6392\u5F00\u3002"
  },
  {
    id: "ick",
    rime: "ICK",
    title: "\u7816\u7A91\u91CC\u7684\u8BE1\u8BA1",
    subtitle: "\u706B\u820C\u8214\u3001\u7A91\u4EBA\u8E22\u3001\u523A\u75DB\u751F\u75C5",
    scene: "/scenes/ick.jpg",
    onsets: ["p", "s", "l", "n", "k", "sl", "br", "tr", "pr"],
    color: "#5B8C5A",
    story: [
      { text: "\u4ED6\u5230\u7816\u7A91\u91CC" },
      { text: "\u6311\u9009", word: "pick" },
      { text: "\u5149\u6ED1", word: "slick" },
      { text: "\u65E0" },
      { text: "\u7F3A\u53E3", word: "nick" },
      { text: "\u7684" },
      { text: "\u7816", word: "brick" },
      { text: "\u5757\u65F6\uFF0C\u4E0D\u5E78\u4E2D\u4E86" },
      { text: "\u8BE1\u8BA1", word: "trick" },
      { text: "\uFF0C\u906D\u5230\u706B\u820C\u7684" },
      { text: "\u8214", word: "lick" },
      { text: "\u5403\u548C\u70E7\u7A91\u4EBA\u7684" },
      { text: "\u8E22", word: "kick" },
      { text: "\u6253\uFF0C" },
      { text: "\u523A\u75DB", word: "prick" },
      { text: "\u751F\u75C5", word: "sick" },
      { text: "\u3002" }
    ],
    words: [
      { word: "pick", display: "PICK", cn: "\u6311\u9009", onset: "p" },
      { word: "slick", display: "SLICK", cn: "\u5149\u6ED1\u7684", onset: "sl" },
      { word: "nick", display: "NICK", cn: "\u7F3A\u53E3", onset: "n" },
      { word: "brick", display: "BRICK", cn: "\u7816", onset: "br" },
      { word: "trick", display: "TRICK", cn: "\u8BE1\u8BA1", onset: "tr" },
      { word: "lick", display: "LICK", cn: "\u8214\u3001\u8513\u5EF6", onset: "l" },
      { word: "kick", display: "KICK", cn: "\u8E22", onset: "k" },
      { word: "prick", display: "PRICK", cn: "\u523A\u75DB", onset: "pr" },
      { word: "sick", display: "SICK", cn: "\u751F\u75C5", onset: "s" }
    ],
    tip: "ICK \u5BB6\u65CF 9 \u4E2A\u8BCD\uFF0C\u4E00\u4E2A\u5012\u6963\u7684\u7816\u7A91\u6545\u4E8B\u5168\u88C5\u4E0B\u3002"
  },
  {
    id: "ie",
    rime: "IE",
    title: "\u6D3E\u5E97\u8001\u677F\u4E0B\u6218\u4E66",
    subtitle: "\u8981\u6218\u4E89\u6216\u8981\u548C\u5E73\u90FD\u884C",
    scene: "/scenes/ie.jpg",
    onsets: ["p", "t", "l", "d", "f", "v", "h"],
    color: "#7A5C9E",
    story: [
      { text: "\u5356" },
      { text: "\u6D3E", word: "pie" },
      { text: "\u7684\u8001\u677F\u5BF9\u6C49\u5821\u5E97\u4E3B\u8BF4\uFF1A\u201C" },
      { text: "\u5478", word: "fie" },
      { text: "\uFF01\u6211\u9001\u4F60\u6761" },
      { text: "\u9886\u5E26", word: "tie" },
      { text: "\uFF0C\u4EE5\u540E\u522B\u4E3A\u4E86" },
      { text: "\u7ADE\u4E89", word: "vie" },
      { text: "\u800C" },
      { text: "\u8BF4\u8C0E", word: "lie" },
      { text: "\uFF0C\u903C\u6211\u8D70" },
      { text: "\u6B7B\u4EA1", word: "die" },
      { text: "\u4E4B\u8DEF\u3001" },
      { text: "\u50AC\u4FC3", word: "hie" },
      { text: "\u6211\u5173\u95E8\u3002\u201D" }
    ],
    words: [
      { word: "pie", display: "PIE", cn: "\u6D3E", onset: "p" },
      { word: "fie", display: "FIE", cn: "\u5478\uFF01", onset: "f" },
      { word: "tie", display: "TIE", cn: "\u9886\u5E26", onset: "t" },
      { word: "vie", display: "VIE", cn: "\u7ADE\u4E89", onset: "v" },
      { word: "lie", display: "LIE", cn: "\u8BF4\u8C0E", onset: "l" },
      { word: "die", display: "DIE", cn: "\u6B7B\u4EA1", onset: "d" },
      { word: "hie", display: "HIE", cn: "\u50AC\u4FC3\uFF08\u8BD7\u8BED\uFF09", onset: "h" }
    ],
    tip: "\u4E24\u5BB6\u5E97\u6253\u64C2\u53F0\uFF0CIE \u5BB6\u65CF 7 \u4E2A\u8BCD\u5168\u4E0A\u573A\u3002"
  },
  {
    id: "in",
    rime: "IN",
    title: "\u8718\u86DB\u7EC7\u7F51\u53D7\u4F24\u8BB0",
    subtitle: "\u6700\u540E\u8FD8\u662F\u8D62\u5F97\u4E86\u80DC\u5229",
    scene: "/scenes/in.jpg",
    onsets: ["\xF8", "w", "sp", "sk", "th", "ch", "sh"],
    color: "#B0762A",
    story: [
      { text: "\u5B83" },
      { text: "\u5728", word: "in" },
      { text: "\u679D\u4E0A\u5410\u4E1D" },
      { text: "\u7EC7\u7F51", word: "spin" },
      { text: "\u65F6\uFF0C" },
      { text: "\u8584\u8584\u7684", word: "thin" },
      { text: "\u76AE\u80A4", word: "skin" },
      { text: "\u3001\u5C16\u7626\u7684" },
      { text: "\u4E0B\u5DF4", word: "chin" },
      { text: "\u548C" },
      { text: "\u80EB\u9AA8", word: "shin" },
      { text: "\u90FD\u53D7\u4E86\u4F24\uFF0C\u4F46\u6700\u540E\u8FD8\u662F" },
      { text: "\u8D62", word: "win" },
      { text: "\u5F97\u4E86\u80DC\u5229\u3002" }
    ],
    words: [
      { word: "in", display: "IN", cn: "\u5728\u2026\u2026\u4E0A", onset: "\xF8" },
      { word: "spin", display: "SPIN", cn: "\u7EBA\u3001\u7EC7\u7F51", onset: "sp" },
      { word: "thin", display: "THIN", cn: "\u8584\u7684\u3001\u7626\u7684", onset: "th" },
      { word: "skin", display: "SKIN", cn: "\u76AE\u80A4", onset: "sk" },
      { word: "chin", display: "CHIN", cn: "\u4E0B\u5DF4", onset: "ch" },
      { word: "shin", display: "SHIN", cn: "\u80EB\u9AA8", onset: "sh" },
      { word: "win", display: "WIN", cn: "\u8D62", onset: "w" }
    ],
    tip: "I WIN\uFF01\u8718\u86DB\u7684\u80DC\u5229\u5BA3\u8A00\u5E2E\u4F60\u8BB0\u4F4F IN \u5BB6\u65CF\u3002"
  },
  {
    id: "ard",
    rime: "ARD",
    title: "\u8BD7\u4EBA\u7684\u732A\u6CB9\u7EB8\u724C\u5899",
    subtitle: "\u6392\u6210\u4E94\u7801\u957F\u4EE5\u4E3A\u9632\u62A4",
    scene: "/scenes/ard.jpg",
    onsets: ["b", "w", "h", "c", "l", "y"],
    color: "#3E7CA6",
    story: [
      { text: "\u8BD7\u4EBA", word: "bard" },
      { text: "\u5C06" },
      { text: "\u786C", word: "hard" },
      { text: "\u7EB8\u724C", word: "card" },
      { text: "\u6D82\u4E0A" },
      { text: "\u732A\u6CB9", word: "lard" },
      { text: "\u6392\u6210 5 " },
      { text: "\u7801", word: "yard" },
      { text: "\u957F\uFF0C\u4EE5\u4E3A" },
      { text: "\u9632\u62A4", word: "ward" },
      { text: "\uFF0C\u771F\u591F" },
      { text: "\u8F9B\u82E6", word: "hard" },
      { text: "\u7684\u3002" }
    ],
    words: [
      { word: "bard", display: "BARD", cn: "\u8BD7\u4EBA", onset: "b" },
      { word: "hard", display: "HARD", cn: "\u8F9B\u82E6\u7684\u3001\u786C\u7684", onset: "h" },
      { word: "card", display: "CARD", cn: "\u7EB8\u724C", onset: "c" },
      { word: "lard", display: "LARD", cn: "\u732A\u6CB9", onset: "l" },
      { word: "yard", display: "YARD", cn: "\u7801", onset: "y" },
      { word: "ward", display: "WARD", cn: "\u9632\u62A4", onset: "w" }
    ],
    tip: "HARD \u4E5F\u662F\u4E00\u8BCD\u4E24\u7528\uFF1A\u53C8\u786C\u53C8\u8F9B\u82E6\u3002"
  },
  {
    id: "itch",
    rime: "ITCH",
    title: "\u5DEB\u5A46\u642D\u8F66\u8BB0",
    subtitle: "\u62D2\u8F7D\uFF1F\u6254\u51FA\u6CD5\u5B9D",
    scene: "/scenes/itch.jpg",
    onsets: ["b", "d", "h", "w", "p"],
    color: "#4A6FA5",
    story: [
      { text: "\u5DEB\u5A46", word: "witch" },
      { text: "\u5728" },
      { text: "\u6C9F\u6E20", word: "ditch" },
      { text: "\u8FB9" },
      { text: "\u642D\u4FBF\u8F66", word: "hitch" },
      { text: "\u4E0D\u6210\uFF0C\u5927\u9A82\u4E00\u58F0\uFF1A\u201C" },
      { text: "\u6BCD\u72D7", word: "bitch" },
      { text: "\uFF01\u201D" },
      { text: "\u6254", word: "pitch" },
      { text: "\u51FA\u4E86\u5979\u7684\u6CD5\u5B9D\u3002" }
    ],
    words: [
      { word: "witch", display: "WITCH", cn: "\u5DEB\u5A46", onset: "w" },
      { word: "ditch", display: "DITCH", cn: "\u6C9F\u6E20", onset: "d" },
      { word: "hitch", display: "HITCH", cn: "\u642D\u4FBF\u8F66", onset: "h" },
      { word: "bitch", display: "BITCH", cn: "\u6BCD\u72D7\u3001\u6CFC\u5987", onset: "b" },
      { word: "pitch", display: "PITCH", cn: "\u6295\u3001\u6254", onset: "p" }
    ],
    tip: "WITCH \u53D1\u813E\u6C14\uFF0CITCH \u5BB6\u65CF 5 \u4E2A\u8BCD\u5168\u88AB\u6254\u51FA\u6765\u3002"
  },
  {
    id: "other",
    rime: "OTHER",
    title: "\u522B\u5435\u5988\u5988\u7761\u89C9",
    subtitle: "\u8FDE\u5435\u5F97\u6211\u4E09\u5E74\u6CA1\u7761\u597D",
    scene: "/scenes/other.jpg",
    onsets: ["b", "m", "sm"],
    color: "#E15A3B",
    story: [
      { text: "\u5FCD\u4F4F", word: "smother" },
      { text: "\uFF0C\u5343\u4E07\u522B\u55A7\u54D7\uFF0C" },
      { text: "\u6253\u6270", word: "bother" },
      { text: "\u4E86" },
      { text: "\u6BCD\u4EB2", word: "mother" },
      { text: "\u7684\u7761\u89C9\uFF0C\u53EF\u4E0D\u597D\uFF01" }
    ],
    words: [
      { word: "smother", display: "SMOTHER", cn: "\u95F7\u4F4F\u706B\u3001\u5FCD\u4F4F", onset: "sm" },
      { word: "bother", display: "BOTHER", cn: "\u6253\u6270", onset: "b" },
      { word: "mother", display: "MOTHER", cn: "\u6BCD\u4EB2", onset: "m" }
    ],
    tip: "MOTHER \u6700\u719F\uFF0CBOTHER \u548C SMOTHER \u6302\u5728\u5988\u5988\u8EAB\u8FB9\u8BB0\u3002"
  },
  {
    id: "ance",
    rime: "ANCE",
    title: "\u6CD5\u56FD\u821E\u4F1A\u957F\u77DB\u60CA\u9B42",
    subtitle: "\u4F60\u6402\u62B1\u7740\u7684\u7F8E\u5973\u6B63\u662F\u6211\u8001\u5A46",
    scene: "/scenes/ance.jpg",
    onsets: ["d", "l", "gl", "fr", "tr"],
    color: "#D9A441",
    story: [
      { text: "\u60C5\u5723\u5728" },
      { text: "\u6CD5\u56FD", word: "france" },
      { text: "\u8DF3\u821E", word: "dance" },
      { text: "\u65F6\uFF0C" },
      { text: "\u604D\u60DA", word: "trance" },
      { text: "\u4E2D" },
      { text: "\u77A5\u89C1", word: "glance" },
      { text: "\u4E86\u4E00\u6839\u957F" },
      { text: "\u77DB", word: "lance" },
      { text: "\u6B63\u89E6\u7740\u4ED6\u7684\u8EAB\u4F53\u3002" }
    ],
    words: [
      { word: "france", display: "FRANCE", cn: "\u6CD5\u56FD", onset: "fr" },
      { word: "dance", display: "DANCE", cn: "\u8DF3\u821E", onset: "d" },
      { word: "trance", display: "TRANCE", cn: "\u604D\u60DA", onset: "tr" },
      { word: "glance", display: "GLANCE", cn: "\u77A5\u89C1", onset: "gl" },
      { word: "lance", display: "LANCE", cn: "\u77DB", onset: "l" }
    ],
    tip: "DANCE \u662F\u719F\u8BCD\uFF0C\u4E00\u652F\u957F\u77DB\u628A ANCE \u5BB6\u65CF 5 \u4E2A\u8BCD\u4E32\u8D77\u6765\u3002"
  }
];

// src/data/families-batch3.ts
var familiesBatch3 = [
  {
    id: "each",
    rime: "EACH",
    title: "\u6D77\u6EE8\u5E03\u9053\u8005",
    subtitle: "\u8FDB\u98DF\u524D\u8FC7\u6EE4\uFF0C\u624D\u4E0D\u8FDD\u80CC\u7D20\u98DF",
    scene: "/scenes/each.jpg",
    onsets: ["p", "t", "b", "l", "br", "pr"],
    color: "#4A6FA5",
    story: [
      { text: "\u4ED6\u5E26\u7740" },
      { text: "\u6843\u5B50", word: "peach" },
      { text: "\u5230" },
      { text: "\u6D77\u6EE8", word: "beach" },
      { text: "\u5E03\u9053", word: "preach" },
      { text: "\uFF0C" },
      { text: "\u6559\u5BFC", word: "teach" },
      { text: "\u6C34\u65CF\u9C7C\u7C7B\uFF0C\u8FDB\u98DF\u524D" },
      { text: "\u8FC7\u6EE4", word: "leach" },
      { text: "\u6389\u8089\u7C7B\u98DF\u7269\uFF0C\u624D\u80FD\u4E0D" },
      { text: "\u8FDD\u80CC", word: "breach" },
      { text: "\u7D20\u98DF\u3002" }
    ],
    words: [
      { word: "peach", display: "PEACH", cn: "\u6843\u5B50", onset: "p" },
      { word: "beach", display: "BEACH", cn: "\u6D77\u6EE8", onset: "b" },
      { word: "preach", display: "PREACH", cn: "\u5E03\u9053\u3001\u9F13\u5439", onset: "pr" },
      { word: "teach", display: "TEACH", cn: "\u6559\u5BFC", onset: "t" },
      { word: "leach", display: "LEACH", cn: "\u8FC7\u6EE4", onset: "l" },
      { word: "breach", display: "BREACH", cn: "\u8FDD\u80CC", onset: "br" }
    ],
    tip: "TEACH \u662F\u719F\u8BCD\uFF0CEACH \u5BB6\u65CF\u56F4\u7740\u8BFE\u5802\u6392\u5F00\u3002"
  },
  {
    id: "ank",
    rime: "ANK",
    title: "\u7626\u5C06\u519B\u4E70\u5766\u514B",
    subtitle: "\u8C22\u8C22\u94F6\u884C\u63D0\u4F9B\u8D44\u91D1",
    scene: "/scenes/ank.jpg",
    onsets: ["b", "l", "r", "t", "th"],
    color: "#E15A3B",
    story: [
      { text: "\u7626", word: "lank" },
      { text: "\u5C06\u519B\u5230" },
      { text: "\u94F6\u884C", word: "bank" },
      { text: "\u8868\u660E" },
      { text: "\u8EAB\u4EFD", word: "rank" },
      { text: "\uFF0C" },
      { text: "\u8C22\u8C22", word: "thank" },
      { text: "\u94F6\u884C\u63D0\u4F9B\u8D44\u91D1\u4E70" },
      { text: "\u5766\u514B", word: "tank" },
      { text: "\u3002" }
    ],
    words: [
      { word: "bank", display: "BANK", cn: "\u94F6\u884C", onset: "b" },
      { word: "lank", display: "LANK", cn: "\u7626\u7684\u3001\u67D4\u8F6F\u7684", onset: "l" },
      { word: "rank", display: "RANK", cn: "\u8EAB\u4EFD", onset: "r" },
      { word: "thank", display: "THANK", cn: "\u8C22\u8C22", onset: "th" },
      { word: "tank", display: "TANK", cn: "\u5766\u514B\u3001\u6C34\u69FD", onset: "t" }
    ],
    tip: "BANK \u662F\u719F\u8BCD\uFF0C\u519B\u8425\u3001\u5766\u514B\u3001\u8C22\u8C22\u5168\u6302\u5728\u94F6\u884C\u4E0A\u3002"
  },
  {
    id: "ope",
    rime: "OPE",
    title: "\u6559\u7687\u6162\u8DD1\u627E\u5999\u65B9",
    subtitle: "\u6478\u7D22\u5BF9\u4ED8\u9EBB\u836F\u7684\u529E\u6CD5",
    scene: "/scenes/ope.jpg",
    onsets: ["h", "c", "d", "l", "m", "p", "r", "sc", "gr"],
    color: "#D9A441",
    story: [
      { text: "\u6559\u7687", word: "pope" },
      { text: "\u95F7\u95F7\u4E0D\u4E50", word: "mope" },
      { text: "\u5730\u5728" },
      { text: "\u7C97\u7EF3", word: "rope" },
      { text: "\u56F4\u7ED5\u7684" },
      { text: "\u8303\u56F4", word: "scope" },
      { text: "\u5185" },
      { text: "\u6162\u8DD1", word: "lope" },
      { text: "\uFF0C" },
      { text: "\u5E0C\u671B", word: "hope" },
      { text: "\u6478\u7D22", word: "grope" },
      { text: "\u5230" },
      { text: "\u5BF9\u4ED8", word: "cope" },
      { text: "\u9EBB\u836F", word: "dope" },
      { text: "\u7684\u5999\u65B9\u3002" }
    ],
    words: [
      { word: "pope", display: "POPE", cn: "\u6559\u7687", onset: "p" },
      { word: "mope", display: "MOPE", cn: "\u95F7\u95F7\u4E0D\u4E50", onset: "m" },
      { word: "rope", display: "ROPE", cn: "\u7C97\u7EF3", onset: "r" },
      { word: "scope", display: "SCOPE", cn: "\u9886\u57DF\u3001\u8303\u56F4", onset: "sc" },
      { word: "lope", display: "LOPE", cn: "\u6162\u8DD1", onset: "l" },
      { word: "hope", display: "HOPE", cn: "\u5E0C\u671B", onset: "h" },
      { word: "grope", display: "GROPE", cn: "\u6478\u7D22", onset: "gr" },
      { word: "cope", display: "COPE", cn: "\u5BF9\u4ED8", onset: "c" },
      { word: "dope", display: "DOPE", cn: "\u9EBB\u836F", onset: "d" }
    ],
    tip: "HOPE \u662F\u719F\u8BCD\uFF0C\u4E00\u5708 OPE \u4E5D\u4E2A\u8BCD\u3002"
  },
  {
    id: "llion",
    rime: "LLION",
    title: "\u91D1\u5757\u6570\u96F6",
    subtitle: "\u767E\u4E07\u3001\u5341\u4EBF\u3001\u4E00\u5146",
    scene: "/scenes/llion.jpg",
    onsets: ["bu", "mi", "bi", "tri"],
    color: "#2F6F5E",
    story: [
      { text: "\u91D1\u5757", word: "bullion" },
      { text: "\u8BF4\uFF1A\u201C" },
      { text: "\u767E\u4E07", word: "million" },
      { text: "\u662F\u516D\u4E2A\u96F6\uFF0C" },
      { text: "\u5341\u4EBF", word: "billion" },
      { text: "\u662F\u4E5D\u4E2A\u96F6\uFF0C" },
      { text: "\u4E00\u5146", word: "trillion" },
      { text: "\u662F\u5341\u4E8C\u4E2A\u96F6\u3002\u201D" }
    ],
    words: [
      { word: "bullion", display: "BULLION", cn: "\u91D1\u5757", onset: "bu" },
      { word: "million", display: "MILLION", cn: "\u767E\u4E07", onset: "mi" },
      { word: "billion", display: "BILLION", cn: "\u5341\u4EBF", onset: "bi" },
      { word: "trillion", display: "TRILLION", cn: "\u4E00\u5146", onset: "tri" }
    ],
    tip: "MILLION \u4E24\u4E2A\u96F6\u7EC4 6 \u4E2A\uFF0CBILLION 9 \u4E2A\uFF0CTRILLION 12 \u4E2A\u2014\u2014\u6570\u96F6\u8BB0\u6570\u7EA7\u3002"
  },
  {
    id: "ean",
    rime: "EAN",
    title: "\u9738\u9053\u7CFB\u4E3B\u4EFB\u88C5\u9177",
    subtitle: "\u659C\u9760\u6D88\u9632\u6813\u5403\u8C46\u5B50",
    scene: "/scenes/ean.jpg",
    onsets: ["m", "w", "b", "d", "l", "cl", "j"],
    color: "#C25E7E",
    story: [
      { text: "\u9738\u9053", word: "mean" },
      { text: "\u7684" },
      { text: "\u7CFB\u4E3B\u4EFB", word: "dean" },
      { text: "\u6212\u6389", word: "wean" },
      { text: "\u4E86\u4ED6\u7231\u7A7F\u7740" },
      { text: "\u5E72\u51C0", word: "clean" },
      { text: "\u7684" },
      { text: "\u725B\u4ED4\u88E4", word: "jeans" },
      { text: "\uFF0C" },
      { text: "\u659C\u9760", word: "lean" },
      { text: "\u7740\u6D88\u9632\u6813\u5403" },
      { text: "\u8C46\u5B50", word: "bean" },
      { text: "\u88C5\u9177\u7684\u4E60\u60EF\u3002" }
    ],
    words: [
      { word: "mean", display: "MEAN", cn: "\u9738\u9053", onset: "m" },
      { word: "dean", display: "DEAN", cn: "\u7CFB\u4E3B\u4EFB", onset: "d" },
      { word: "wean", display: "WEAN", cn: "\u6212\u6389", onset: "w" },
      { word: "clean", display: "CLEAN", cn: "\u5E72\u51C0", onset: "cl" },
      { word: "jeans", display: "JEANS", cn: "\u725B\u4ED4\u88E4", onset: "j" },
      { word: "lean", display: "LEAN", cn: "\u659C\u9760", onset: "l" },
      { word: "bean", display: "BEAN", cn: "\u8C46\u5B50", onset: "b" }
    ],
    tip: "BEAN \u662F\u719F\u8BCD\uFF0C\u7CFB\u4E3B\u4EFB\u7684\u9177\u59FF\u52BF\u4E32\u8D77 7 \u4E2A EAN\u3002"
  },
  {
    id: "hea",
    rime: "HEA",
    title: "\u987D\u56FA\u8111\u888B\u9001\u4E0A\u5929\u56FD",
    subtitle: "\u88C5\u6EE1\u542C\u6765\u7684\u523A\u6FC0\u89C2\u5FF5",
    scene: "/scenes/hea.jpg",
    onsets: ["\xF8", "\xF8+dy", "\xF8+l", "\xF8+p", "\xF8+r", "\xF8+t", "\xF8+ve", "\xF8+ven", "\xF8+ver"],
    color: "#5B8C5A",
    story: [
      { text: "\u6311\u592B", word: "heaver" },
      { text: "\u987D\u56FA", word: "heady" },
      { text: "\u7684" },
      { text: "\u8111\u888B", word: "head" },
      { text: "\u88C5" },
      { text: "\u6EE1", word: "heap" },
      { text: "\u4E00\u5806" },
      { text: "\u542C", word: "hear" },
      { text: "\u6765\u7684" },
      { text: "\u523A\u6FC0", word: "heat" },
      { text: "\u89C2\u5FF5\uFF0C\u5F88\u96BE\u5C06\u4ED6" },
      { text: "\u6CBB\u6108", word: "heal" },
      { text: "\uFF0C\u628A\u4ED6" },
      { text: "\u4E3E\u8D77", word: "heave" },
      { text: "\u9001\u4E0A" },
      { text: "\u5929\u56FD", word: "heaven" },
      { text: "\u5427\u3002" }
    ],
    words: [
      { word: "heaver", display: "HEAVER", cn: "\u6311\u592B", onset: "\xF8+ver" },
      { word: "heady", display: "HEADY", cn: "\u987D\u56FA", onset: "\xF8+dy" },
      { word: "head", display: "HEAD", cn: "\u5934", onset: "\xF8" },
      { word: "heap", display: "HEAP", cn: "\u5806\u3001\u88C5\u6EE1", onset: "\xF8+p" },
      { word: "hear", display: "HEAR", cn: "\u542C\u89C1", onset: "\xF8+r" },
      { word: "heat", display: "HEAT", cn: "\u52A0\u70ED\u3001\u523A\u6FC0", onset: "\xF8+t" },
      { word: "heal", display: "HEAL", cn: "\u6CBB\u6108", onset: "\xF8+l" },
      { word: "heave", display: "HEAVE", cn: "\u4E3E\u8D77", onset: "\xF8+ve" },
      { word: "heaven", display: "HEAVEN", cn: "\u5929\u56FD", onset: "\xF8+ven" }
    ],
    tip: "HEA \u540E\u6302\u5B57\u6BCD\uFF1A\u5934\u3001\u987D\u56FA\u3001\u6CBB\u6108\u3001\u4E3E\u8D77\u3001\u5929\u56FD\u2026\u2026\u4E00\u4E32 9 \u4E2A\u3002"
  },
  {
    id: "ute",
    rime: "UTE",
    title: "\u91CE\u517D\u7A7F\u9EBB\u8863\u5F39\u7435\u7436",
    subtitle: "\u53D8\u5F97\u53EF\u7231\u53C8\u654F\u9510",
    scene: "/scenes/ute.jpg",
    onsets: ["fl", "c", "ac", "sc", "j", "br", "absol"],
    color: "#7A5C9E",
    story: [
      { text: "\u5982\u679C\u8BA9" },
      { text: "\u9CDE\u7532", word: "scute" },
      { text: "\u7C7B" },
      { text: "\u91CE\u517D", word: "brute" },
      { text: "\u7A7F\u4E0A" },
      { text: "\u9EC4\u9EBB", word: "jute" },
      { text: "\u7EA4\u7EF4\u8863\uFF0C\u5F39\u594F\u7435\u7436\u4E0E" },
      { text: "\u957F\u7B1B", word: "flute" },
      { text: "\uFF0C\u5B83\u4EEC\u5C06\u53D8\u5F97" },
      { text: "\u5B8C\u5168\u7684", word: "absolute" },
      { text: "\u53EF\u7231", word: "cute" },
      { text: "\u4E0E" },
      { text: "\u654F\u9510", word: "acute" },
      { text: "\u3002" }
    ],
    words: [
      { word: "scute", display: "SCUTE", cn: "\u9CDE\u7532", onset: "sc" },
      { word: "brute", display: "BRUTE", cn: "\u91CE\u517D", onset: "br" },
      { word: "jute", display: "JUTE", cn: "\u9EC4\u9EBB", onset: "j" },
      { word: "flute", display: "FLUTE", cn: "\u957F\u7B1B", onset: "fl" },
      { word: "absolute", display: "ABSOLUTE", cn: "\u5B8C\u5168\u7684", onset: "absol" },
      { word: "cute", display: "CUTE", cn: "\u53EF\u7231", onset: "c" },
      { word: "acute", display: "ACUTE", cn: "\u654F\u9510", onset: "ac" }
    ],
    tip: "CUTE \u662F\u719F\u8BCD\uFF0C\u91CE\u517D\u53D8\u53EF\u7231\u7684\u753B\u9762\u8BB0\u4F4F 7 \u4E2A UTE\u3002"
  },
  {
    id: "ead",
    rime: "EAD",
    title: "\u628A\u94C5\u5F53\u9762\u5305\u5403",
    subtitle: "\u5C0F\u5FC3\u522B\u8E29\u4E0A\u6B7B\u4EA1\u7EBF",
    scene: "/scenes/ead.jpg",
    onsets: ["l", "r", "d", "br", "tr", "dr", "thr"],
    color: "#B0762A",
    story: [
      { text: "\u5982\u679C\u4F60\u5E38" },
      { text: "\u9605\u8BFB", word: "read" },
      { text: "\uFF0C\u5C31\u4F1A\u77E5\u9053\u628A" },
      { text: "\u94C5", word: "lead" },
      { text: "\u5F53" },
      { text: "\u9762\u5305", word: "bread" },
      { text: "\u5403\u4E86\u4F1A" },
      { text: "\u6B7B", word: "dead" },
      { text: "\uFF01\u5C0F\u5FC3\u522B" },
      { text: "\u8E29", word: "tread" },
      { text: "\u4E0A\u4EE4\u4EBA" },
      { text: "\u6050\u60E7", word: "dread" },
      { text: "\u7684\u6B7B\u4EA1" },
      { text: "\u7EBF", word: "thread" },
      { text: "\u3002" }
    ],
    words: [
      { word: "read", display: "READ", cn: "\u9605\u8BFB", onset: "r" },
      { word: "lead", display: "LEAD", cn: "\u94C5", onset: "l" },
      { word: "bread", display: "BREAD", cn: "\u9762\u5305", onset: "br" },
      { word: "dead", display: "DEAD", cn: "\u6B7B", onset: "d" },
      { word: "tread", display: "TREAD", cn: "\u8E29", onset: "tr" },
      { word: "dread", display: "DREAD", cn: "\u6050\u60E7", onset: "dr" },
      { word: "thread", display: "THREAD", cn: "\u7EBF", onset: "thr" }
    ],
    tip: "READ \u662F\u719F\u8BCD\uFF0CEAD \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u5B57\u6392\u5F00\u3002"
  },
  {
    id: "tru",
    rime: "TRU",
    title: "\u675C\u9C81\u95E8\u7684\u738B\u724C",
    subtitle: "\u4FE1\u4EFB\u771F\u7406\u5C31\u662F\u505C\u6218\u738B\u724C",
    scene: "/scenes/tru.jpg",
    onsets: ["\xF8+e", "\xF8+ce", "\xF8+ck", "\xF8+man", "\xF8+mp", "\xF8+nk", "\xF8+st", "\xF8+th"],
    color: "#3E7CA6",
    story: [
      { text: "\u7F8E\u56FD\u7B2C\u5341\u4E09\u4EFB\u603B\u7EDF" },
      { text: "\u675C\u9C81\u95E8", word: "truman" },
      { text: "\u7AD9\u5728" },
      { text: "\u6811\u5E72", word: "trunk" },
      { text: "\u4E0A\u8BF4\uFF1A\u201C\u6211\u6709" },
      { text: "\u505C\u6218", word: "truce" },
      { text: "\u4EA4\u6613", word: "truck" },
      { text: "\u7684" },
      { text: "\u738B\u724C", word: "trump" },
      { text: "\uFF0C\u5C31\u662F" },
      { text: "\u4FE1\u4EFB", word: "trust" },
      { text: "\u771F\u7406" },
      { text: "\u3001" },
      { text: "\u771F\u5B9E", word: "true" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "truman", display: "TRUMAN", cn: "\u675C\u9C81\u95E8", onset: "\xF8+man" },
      { word: "trunk", display: "TRUNK", cn: "\u6811\u5E72", onset: "\xF8+nk" },
      { word: "truce", display: "TRUCE", cn: "\u505C\u6218", onset: "\xF8+ce" },
      { word: "truck", display: "TRUCK", cn: "\u4EA4\u6613\u3001\u5361\u8F66", onset: "\xF8+ck" },
      { word: "trump", display: "TRUMP", cn: "\u738B\u724C", onset: "\xF8+mp" },
      { word: "trust", display: "TRUST", cn: "\u4FE1\u4EFB", onset: "\xF8+st" },
      { word: "truth", display: "TRUTH", cn: "\u771F\u7406", onset: "\xF8+th" },
      { word: "true", display: "TRUE", cn: "\u771F\u5B9E", onset: "\xF8+e" }
    ],
    tip: "TRU \u5F00\u5934\u4E00\u4E32 8 \u4E2A\u8BCD\uFF0C\u603B\u7EDF\u7AD9\u5728\u6811\u5E72\u4E0A\u5168\u80CC\u51FA\u6765\u3002"
  },
  {
    id: "ink",
    rime: "INK",
    title: "\u6E9C\u51B0\u573A\u8FB9\u7684\u6253\u626E\u7ECF",
    subtitle: "\u7C89\u7EA2\u8C82\u76AE\u8FD8\u662F\u73AF\u5F62\u9879\u94FE",
    scene: "/scenes/ink.jpg",
    onsets: ["r", "dr", "pr", "th", "p", "m", "l"],
    color: "#4A6FA5",
    story: [
      { text: "\u5979\u5728" },
      { text: "\u6E9C\u51B0\u573A", word: "rink" },
      { text: "\u8FB9" },
      { text: "\u559D", word: "drink" },
      { text: "\u996E\u6599\u8FB9" },
      { text: "\u60F3", word: "think" },
      { text: "\u5982\u4F55" },
      { text: "\u6253\u626E", word: "prink" },
      { text: "\u81EA\u5DF1\uFF1A\u201C\u7A7F" },
      { text: "\u7C89\u7EA2", word: "pink" },
      { text: "\u8C82\u76AE", word: "mink" },
      { text: "\u5927\u8863\uFF0C\u8FD8\u662F\u6234" },
      { text: "\u73AF", word: "link" },
      { text: "\u5F62\u9879\u94FE\u2026\u2026\u201D" }
    ],
    words: [
      { word: "rink", display: "RINK", cn: "\u6E9C\u51B0\u573A", onset: "r" },
      { word: "drink", display: "DRINK", cn: "\u996E", onset: "dr" },
      { word: "think", display: "THINK", cn: "\u601D\u8003", onset: "th" },
      { word: "prink", display: "PRINK", cn: "\u6253\u626E\u6F02\u4EAE", onset: "pr" },
      { word: "pink", display: "PINK", cn: "\u7C89\u7EA2", onset: "p" },
      { word: "mink", display: "MINK", cn: "\u8C82\u76AE", onset: "m" },
      { word: "link", display: "LINK", cn: "\u8054\u7CFB\u3001\u73AF", onset: "l" }
    ],
    tip: "THINK\u3001DRINK \u90FD\u662F\u719F\u8BCD\uFF0CINK \u5BB6\u65CF 7 \u4E2A\u8BCD\u6E9C\u4E00\u5708\u5168\u8BB0\u4F4F\u3002"
  },
  {
    id: "can",
    rime: "CAN",
    title: "\u519B\u4E2D\u9ED1\u8BDD\u8BCD\u5178",
    subtitle: "\u62D0\u6756\u662F\u52A0\u519C\u70AE\uFF0C\u6E83\u75A1\u662F\u7CD6\u679C",
    scene: "/scenes/can.jpg",
    onsets: ["\xF8+t", "\xF8+e", "\xF8+dy", "\xF8+na", "\xF8+ker", "\xF8+non", "\xF8+ny"],
    color: "#E15A3B",
    story: [
      { text: "\u6218\u4E89\u65F6\uFF0C\u519B\u4E2D\u90FD\u7528" },
      { text: "\u7CBE\u660E", word: "canny" },
      { text: "\u7684" },
      { text: "\u672F\u8BED", word: "cant" },
      { text: "\u901A\u4FE1\uFF0C\u79F0" },
      { text: "\u62D0\u6756", word: "cane" },
      { text: "\u5C31\u662F\u6307" },
      { text: "\u52A0\u519C\u70AE", word: "cannon" },
      { text: "\uFF0C\u8BF4" },
      { text: "\u53E3\u8154\u6E83\u75A1", word: "canker" },
      { text: "\u662F\u6307" },
      { text: "\u7CD6\u679C", word: "candy" },
      { text: "\u6216" },
      { text: "\u7F8E\u4EBA\u8549", word: "canna" },
      { text: "\u3002" }
    ],
    words: [
      { word: "canny", display: "CANNY", cn: "\u7CBE\u660E\u7684", onset: "\xF8+ny" },
      { word: "cant", display: "CANT", cn: "\u672F\u8BED", onset: "\xF8+t" },
      { word: "cane", display: "CANE", cn: "\u62D0\u6756", onset: "\xF8+e" },
      { word: "cannon", display: "CANNON", cn: "\u52A0\u519C\u70AE", onset: "\xF8+non" },
      { word: "canker", display: "CANKER", cn: "\u53E3\u8154\u6E83\u75A1\u3001\u5F0A\u75C5", onset: "\xF8+ker" },
      { word: "candy", display: "CANDY", cn: "\u7CD6\u679C", onset: "\xF8+dy" },
      { word: "canna", display: "CANNA", cn: "\u7F8E\u4EBA\u8549", onset: "\xF8+na" }
    ],
    tip: "CAN \u540E\u6302\u5C3E\u5DF4\uFF1A\u62D0\u6756\u3001\u7CD6\u679C\u3001\u52A0\u519C\u70AE\u3001\u672F\u8BED\u2026\u2026\u519B\u4E2D\u9ED1\u8BDD\u4E00\u4E32 7 \u4E2A\u3002"
  },
  {
    id: "ile",
    rime: "ILE",
    title: "\u51E0\u82F1\u91CC\u957F\u7684\u9ED1\u51FD",
    subtitle: "\u80C6\u6C41\u8D28\u7684\u74F7\u7816\u88AB\u60F9\u607C",
    scene: "/scenes/ile.jpg",
    onsets: ["m", "t", "b", "f", "v", "p", "r"],
    color: "#D9A441",
    story: [
      { text: "\u6587\u4EF6\u5939", word: "file" },
      { text: "\u91CC" },
      { text: "\u5806\u79EF", word: "pile" },
      { text: "\u4E0D\u5C11" },
      { text: "\u5351\u9119", word: "vile" },
      { text: "\u627E\u78B4\u513F", word: "rile" },
      { text: "\u7684\u9ED1\u51FD\uFF0C\u6709\u51E0" },
      { text: "\u82F1\u91CC", word: "mile" },
      { text: "\u957F\uFF0C" },
      { text: "\u80C6\u6C41", word: "bile" },
      { text: "\u8D28\u7684" },
      { text: "\u74F7\u7816", word: "tile" },
      { text: "\u88AB\u60F9\u607C\u4E86\u3002" }
    ],
    words: [
      { word: "file", display: "FILE", cn: "\u6587\u4EF6\u5939", onset: "f" },
      { word: "pile", display: "PILE", cn: "\u5806\u79EF", onset: "p" },
      { word: "vile", display: "VILE", cn: "\u5351\u9119\u7684", onset: "v" },
      { word: "rile", display: "RILE", cn: "\u627E\u78B4\u513F\u3001\u60F9\u607C", onset: "r" },
      { word: "mile", display: "MILE", cn: "\u82F1\u91CC", onset: "m" },
      { word: "bile", display: "BILE", cn: "\u80C6\u6C41\u3001\u6124\u6012", onset: "b" },
      { word: "tile", display: "TILE", cn: "\u74F7\u7816", onset: "t" }
    ],
    tip: "MILE \u662F\u719F\u8BCD\uFF0CILE \u5BB6\u65CF 7 \u4E2A\u8BCD\u5806\u6210\u9ED1\u51FD\u5C71\u3002"
  },
  {
    id: "and",
    rime: "AND",
    title: "\u6C99\u6EE9\u6D77\u6D6A\u4E50\u56E2",
    subtitle: "\u7EDD\u975E\u5E73\u6DE1\u4E4F\u5473\u7684\u4E50\u7AE0",
    scene: "/scenes/and.jpg",
    onsets: ["\xF8", "b", "h", "l", "s", "w", "st", "bl"],
    color: "#2F6F5E",
    story: [
      { text: "\u4ED6" },
      { text: "\u7AD9", word: "stand" },
      { text: "\u5728" },
      { text: "\u6C99", word: "sand" },
      { text: "\u5730\u4E0A\uFF0C" },
      { text: "\u624B", word: "hand" },
      { text: "\u62FF\u7740\u6307\u6325" },
      { text: "\u68D2", word: "wand" },
      { text: "\uFF0C" },
      { text: "\u548C", word: "and" },
      { text: "\u6D77\u6D6A" },
      { text: "\u4E50\u56E2", word: "band" },
      { text: "\u6F14\u594F\u51FA\u4E00\u66F2\u7EDD\u975E" },
      { text: "\u5E73\u6DE1\u65E0\u5473", word: "bland" },
      { text: "\u7684\u4E50\u7AE0\u3002" }
    ],
    words: [
      { word: "stand", display: "STAND", cn: "\u7AD9\u7ACB", onset: "st" },
      { word: "sand", display: "SAND", cn: "\u6C99", onset: "s" },
      { word: "hand", display: "HAND", cn: "\u624B", onset: "h" },
      { word: "wand", display: "WAND", cn: "\u6743\u6756\u3001\u6307\u6325\u68D2", onset: "w" },
      { word: "and", display: "AND", cn: "\u548C", onset: "\xF8" },
      { word: "band", display: "BAND", cn: "\u4E50\u56E2", onset: "b" },
      { word: "bland", display: "BLAND", cn: "\u5E73\u6DE1\u65E0\u5473", onset: "bl" },
      { word: "land", display: "LAND", cn: "\u9646\u5730", onset: "l" }
    ],
    tip: "HAND\u3001STAND \u90FD\u662F\u719F\u8BCD\uFF0CAND \u5BB6\u65CF\u5728\u6C99\u6EE9\u4E0A\u5F00\u97F3\u4E50\u4F1A\u3002"
  },
  {
    id: "ale",
    rime: "ALE",
    title: "\u5C71\u8C37\u53E3\u5356\u9CB8\u9C7C\u4E38",
    subtitle: "\u65E0\u529B\u7684\u7537\u4EBA\u5403\u4E86\u53D8\u5065\u58EE",
    scene: "/scenes/ale.jpg",
    onsets: ["s", "g", "p", "v", "wh", "h", "m"],
    color: "#C25E7E",
    story: [
      { text: "\u5728" },
      { text: "\u5F3A\u98CE", word: "gale" },
      { text: "\u547C\u5578\u7684" },
      { text: "\u5C71\u8C37", word: "vale" },
      { text: "\u53E3\uFF0C\u6709\u4EBA\u5728" },
      { text: "\u8D29\u5356", word: "sale" },
      { text: "\u80FD\u4F7F" },
      { text: "\u65E0\u529B", word: "pale" },
      { text: "\u7684" },
      { text: "\u7537\u4EBA", word: "male" },
      { text: "\u53D8\u5F97" },
      { text: "\u5065\u58EE", word: "hale" },
      { text: "\u8D77\u6765\u7684" },
      { text: "\u9CB8\u9C7C", word: "whale" },
      { text: "\u4E38\u3002" }
    ],
    words: [
      { word: "gale", display: "GALE", cn: "\u5F3A\u98CE", onset: "g" },
      { word: "vale", display: "VALE", cn: "\u5C71\u8C37", onset: "v" },
      { word: "sale", display: "SALE", cn: "\u8D29\u5356", onset: "s" },
      { word: "pale", display: "PALE", cn: "\u82CD\u767D\u3001\u65E0\u529B", onset: "p" },
      { word: "male", display: "MALE", cn: "\u96C4\u6027\u3001\u7537\u4EBA", onset: "m" },
      { word: "hale", display: "HALE", cn: "\u5065\u58EE\u3001\u77CD\u94C4", onset: "h" },
      { word: "whale", display: "WHALE", cn: "\u9CB8\u9C7C", onset: "wh" }
    ],
    tip: "SALE \u662F\u719F\u8BCD\uFF0CALE \u5BB6\u65CF\u5728\u5C71\u8C37\u53E3\u6446\u644A\u3002"
  },
  {
    id: "ove",
    rime: "OVE",
    title: "\u7089\u8FB9\u4E92\u8D60\u793C\u7269",
    subtitle: "\u4E01\u9999\u82B1\u6362\u4E00\u53EA\u624B\u5957",
    scene: "/scenes/ove.jpg",
    onsets: ["d", "l", "r", "m", "c", "g", "st", "sh"],
    color: "#5B8C5A",
    story: [
      { text: "\u4ED6\u4FE9" },
      { text: "\u7231", word: "love" },
      { text: "\u5F97\u50CF\u4E00\u5BF9" },
      { text: "\u6D41\u6D6A", word: "rove" },
      { text: "\u5F52\u6765\u7684" },
      { text: "\u9E3D\u5B50", word: "dove" },
      { text: "\uFF0C" },
      { text: "\u79FB", word: "move" },
      { text: "\u5230" },
      { text: "\u7089\u5B50", word: "stove" },
      { text: "\u8FB9\u4E92\u8D60\u793C\u7269\u3002\u4ED6\u9001" },
      { text: "\u4E01\u9999\u82B1", word: "clove" },
      { text: "\uFF0C\u5979\u628A" },
      { text: "\u624B\u5957", word: "glove" },
      { text: "\u786C\u63A8", word: "shove" },
      { text: "\u7ED9\u4ED6\u3002" }
    ],
    words: [
      { word: "love", display: "LOVE", cn: "\u7231", onset: "l" },
      { word: "rove", display: "ROVE", cn: "\u6D41\u6D6A", onset: "r" },
      { word: "dove", display: "DOVE", cn: "\u9E3D", onset: "d" },
      { word: "move", display: "MOVE", cn: "\u79FB\u52A8", onset: "m" },
      { word: "stove", display: "STOVE", cn: "\u7089\u5B50", onset: "st" },
      { word: "clove", display: "CLOVE", cn: "\u4E01\u9999", onset: "c" },
      { word: "glove", display: "GLOVE", cn: "\u624B\u5957", onset: "g" },
      { word: "shove", display: "SHOVE", cn: "\u786C\u63A8", onset: "sh" }
    ],
    tip: "LOVE \u662F\u719F\u8BCD\uFF0COVE \u5BB6\u65CF 8 \u4E2A\u8BCD\u7089\u8FB9\u56E2\u5706\u3002"
  },
  {
    id: "ice",
    rime: "ICE",
    title: "\u63B7\u9AB0\u5B50\u716E\u7C73\u996D",
    subtitle: "\u4EFB\u6027\u7684\u6076\u4E60\u4E0E\u6700\u4F73\u505A\u6CD5",
    scene: "/scenes/ice.jpg",
    onsets: ["n", "r", "d", "v", "sp", "sl", "capr"],
    color: "#7A5C9E",
    story: [
      { text: "\u63B7" },
      { text: "\u9AB0\u5B50", word: "dice" },
      { text: "\u51B3\u5B9A\u5982\u4F55\u70F9\u996A" },
      { text: "\u7C73", word: "rice" },
      { text: "\u98DF\uFF0C\u7B80\u76F4\u662F\u4E00\u79CD" },
      { text: "\u4EFB\u6027", word: "caprice" },
      { text: "\u7684" },
      { text: "\u6076\u4E60", word: "vice" },
      { text: "\uFF0C\u6700" },
      { text: "\u4F73", word: "nice" },
      { text: "\u7684\u505A\u6CD5\u662F\u52A0" },
      { text: "\u9999\u6599", word: "spice" },
      { text: "\u716E\u597D\uFF0C\u518D\u5207\u6210" },
      { text: "\u8584\u7247", word: "slice" },
      { text: "\u5403\u3002" }
    ],
    words: [
      { word: "dice", display: "DICE", cn: "\u9AB0\u5B50", onset: "d" },
      { word: "rice", display: "RICE", cn: "\u7C73", onset: "r" },
      { word: "caprice", display: "CAPRICE", cn: "\u4EFB\u6027", onset: "capr" },
      { word: "vice", display: "VICE", cn: "\u90AA\u6076\u7684\u884C\u4E3A\u3001\u6076\u4E60", onset: "v" },
      { word: "nice", display: "NICE", cn: "\u4F73\u3001\u7F8E\u597D", onset: "n" },
      { word: "spice", display: "SPICE", cn: "\u9999\u6599", onset: "sp" },
      { word: "slice", display: "SLICE", cn: "\u8584\u7247", onset: "sl" }
    ],
    tip: "NICE\u3001RICE \u90FD\u662F\u719F\u8BCD\uFF0CICE \u5BB6\u65CF\u4E00\u9505\u716E\u3002"
  },
  {
    id: "ry",
    rime: "RY",
    title: "\u6B6A\u5934\u7AA5\u63A2\u6CB9\u9505",
    subtitle: "\u54ED\u5E72\u4E86\u773C\u6CEA\u7684\u4E0B\u573A",
    scene: "/scenes/ry.jpg",
    onsets: ["f", "t", "p", "w", "d", "c"],
    color: "#B0762A",
    story: [
      { text: "\u6CB9\u70B8", word: "fry" },
      { text: "\u98DF\u7269\u65F6\uFF0C\u522B" },
      { text: "\u8BD5\u56FE", word: "try" },
      { text: "\u6B6A", word: "wry" },
      { text: "\u7740\u5934" },
      { text: "\u7AA5\u63A2", word: "pry" },
      { text: "\uFF0C\u5426\u5219\u4F60\u5C06" },
      { text: "\u54ED", word: "cry" },
      { text: "\u5E72", word: "dry" },
      { text: "\u4E86\u773C\u6CEA\u2026\u2026" }
    ],
    words: [
      { word: "fry", display: "FRY", cn: "\u6CB9\u70B8", onset: "f" },
      { word: "try", display: "TRY", cn: "\u8BD5\u56FE", onset: "t" },
      { word: "wry", display: "WRY", cn: "\u626D\u6B6A\u3001\u6B6A\u659C", onset: "w" },
      { word: "pry", display: "PRY", cn: "\u7AA5\u63A2", onset: "p" },
      { word: "cry", display: "CRY", cn: "\u54ED", onset: "c" },
      { word: "dry", display: "DRY", cn: "\u5E72\u7684", onset: "d" }
    ],
    tip: "CRY\u3001DRY\u3001TRY \u90FD\u719F\uFF0CRY \u5BB6\u65CF 6 \u4E2A\u8BCD\u56F4\u7740\u6CB9\u9505\u8F6C\u3002"
  },
  {
    id: "uck",
    rime: "UCK",
    title: "\u4E09\u4E2A\u90FD\u53EB BUCK",
    subtitle: "\u5E78\u8FD0\u9E2D\u6765\u8BC4\u7406",
    scene: "/scenes/uck.jpg",
    onsets: ["b", "l", "d", "m"],
    color: "#3E7CA6",
    story: [
      { text: "\u96C4\u9E7F\u3001\u96C4\u5154\u3001\u516C\u7F8A\u90FD\u4E89\u76F8\u53D6\u4E86 BUCK \u8FD9\u4E2A\u82F1\u6587\u540D\u5B57\uFF0C" },
      { text: "\u5E78\u8FD0", word: "luck" },
      { text: "\u9E2D", word: "duck" },
      { text: "\u8BC4\u7406\u8BF4\uFF1A\u201C\u4F60\u4EEC\u771F\u662F\u4E09\u4E2A" },
      { text: "\u5E9F\u7269", word: "muck" },
      { text: "\uFF0C\u6539\u53EB\u4E2D\u6587\u540D\u5B57\u963F\u9E7F\u3001\u963F\u5154\u3001\u963F\u7F8A\u4E0D\u5C31\u6210\u4E86\u3002\u201D" }
    ],
    words: [
      { word: "buck", display: "BUCK", cn: "\u96C4\u9E7F\u3001\u96C4\u5154\u3001\u516C\u7F8A", onset: "b" },
      { word: "luck", display: "LUCK", cn: "\u5E78\u8FD0", onset: "l" },
      { word: "duck", display: "DUCK", cn: "\u9E2D\u5B50", onset: "d" },
      { word: "muck", display: "MUCK", cn: "\u7CAA\u80A5\u3001\u5E9F\u7269", onset: "m" }
    ],
    tip: "BUCK \u4E00\u8BCD\u4E09\u4E49\uFF1A\u96C4\u9E7F\u3001\u96C4\u5154\u3001\u516C\u7F8A\u90FD\u662F\u5B83\u3002"
  },
  {
    id: "ban2",
    rime: "BAN",
    title: "\u77EE\u811A\u9E21\u5F15\u53D1\u7684\u8FFD\u6253",
    subtitle: "\u94F6\u884C\u5BB4\u4F1A\u91CC\u620F\u8C11\u7684\u7978\u6839",
    scene: "/scenes/ban2.jpg",
    onsets: ["\xF8+d", "\xF8+e", "\xF8+tam", "\xF8+ter", "\xF8+ner", "\xF8+k", "\xF8+quet"],
    color: "#4A6FA5",
    story: [
      { text: "\u4ED6\u88AB\u4E00" },
      { text: "\u4F19", word: "band" },
      { text: "\u4EBA\u7528" },
      { text: "\u65D7\u5B50", word: "banner" },
      { text: "\u8FFD\u6253\uFF0C" },
      { text: "\u7978\u6839", word: "bane" },
      { text: "\u7531\u4E8E\u4ED6\u5728" },
      { text: "\u94F6\u884C", word: "bank" },
      { text: "\u7684" },
      { text: "\u5BB4\u4F1A", word: "banquet" },
      { text: "\u4E2D" },
      { text: "\u620F\u8C11", word: "banter" },
      { text: "\u522B\u4EBA\u662F" },
      { text: "\u77EE\u811A\u9E21", word: "bantam" },
      { text: "\u3002" }
    ],
    words: [
      { word: "band", display: "BAND", cn: "\u4E00\u4F19", onset: "\xF8+d" },
      { word: "banner", display: "BANNER", cn: "\u65D7\u5E1C", onset: "\xF8+ner" },
      { word: "bane", display: "BANE", cn: "\u7978\u6839", onset: "\xF8+e" },
      { word: "bank", display: "BANK", cn: "\u94F6\u884C", onset: "\xF8+k" },
      { word: "banquet", display: "BANQUET", cn: "\u5BB4\u4F1A", onset: "\xF8+quet" },
      { word: "banter", display: "BANTER", cn: "\u620F\u8C11", onset: "\xF8+ter" },
      { word: "bantam", display: "BANTAM", cn: "\u77EE\u811A\u9E21", onset: "\xF8+tam" }
    ],
    tip: "BAN \u5BB6\u65CF\u53E6\u4E00\u4E32\uFF1A\u7978\u6839\u3001\u65D7\u5E1C\u3001\u620F\u8C11\u3001\u77EE\u811A\u9E21\u3001\u5BB4\u4F1A\u3002"
  },
  {
    id: "in2",
    rime: "IN",
    title: "\u9521\u9488\u624E\u4E86\u624B",
    subtitle: "\u675C\u677E\u5B50\u9152\u914D\u9C7C\u7FC5\u8865\u4E00\u8865",
    scene: "/scenes/in2.jpg",
    onsets: ["\xF8", "b", "g", "f", "p", "t", "k", "sk"],
    color: "#E15A3B",
    story: [
      { text: "\u4ED6\u88AB" },
      { text: "\u9521", word: "tin" },
      { text: "\u9488", word: "pin" },
      { text: "\u523A\u5230" },
      { text: "\u76AE\u80A4", word: "skin" },
      { text: "\uFF0C" },
      { text: "\u4EB2\u65CF", word: "kin" },
      { text: "\u4EEC\u8D76\u7D27\u4ECE" },
      { text: "\u50A8\u85CF\u7BB1", word: "bin" },
      { text: "\u5185\u53D6\u51FA" },
      { text: "\u675C\u677E\u5B50\u9152", word: "gin" },
      { text: "\u3001" },
      { text: "\u9C7C\u7FC5", word: "fin" },
      { text: "\u7ED9\u4ED6\u8865\u3002" }
    ],
    words: [
      { word: "tin", display: "TIN", cn: "\u9521", onset: "t" },
      { word: "pin", display: "PIN", cn: "\u9488", onset: "p" },
      { word: "skin", display: "SKIN", cn: "\u76AE\u80A4", onset: "sk" },
      { word: "kin", display: "KIN", cn: "\u4EB2\u65CF", onset: "k" },
      { word: "bin", display: "BIN", cn: "\u50A8\u85CF\u7BB1", onset: "b" },
      { word: "gin", display: "GIN", cn: "\u675C\u677E\u5B50\u9152", onset: "g" },
      { word: "fin", display: "FIN", cn: "\u9C7C\u7FC5", onset: "f" },
      { word: "in", display: "IN", cn: "\u5728\u2026\u2026\u4E4B\u5185", onset: "\xF8" }
    ],
    tip: "PIN\u3001TIN\u3001BIN\u3001KIN\u2014\u2014IN \u5BB6\u65CF\u53E6\u4E00\u684C\u8865\u54C1\u3002"
  },
  {
    id: "un",
    rime: "UN",
    title: "\u4FEE\u5973\u5E26\u67AA\u8BB0",
    subtitle: "\u5413\u5446\u72EE\u5B50\u518D\u8BF7\u5403\u9762\u5305",
    scene: "/scenes/un.jpg",
    onsets: ["n", "g", "f", "b", "s", "st", "sh"],
    color: "#D9A441",
    story: [
      { text: "\u592A\u9633", word: "sun" },
      { text: "\u5E95\u4E0B\u65B0\u9C9C\u4E8B\uFF1A" },
      { text: "\u4FEE\u5973", word: "nun" },
      { text: "\u4E0D" },
      { text: "\u56DE\u907F", word: "shun" },
      { text: "\u6301" },
      { text: "\u67AA", word: "gun" },
      { text: "\uFF0C\u8FD8\u4EE5\u4E3A" },
      { text: "\u4E50\u4E8B", word: "fun" },
      { text: "\u3002\u56E0\u4E3A\u82E5\u9047\u5230\u72EE\u5B50\u53EF\u7528\u67AA\u628A\u5B83" },
      { text: "\u5413\u5446", word: "stun" },
      { text: "\uFF0C\u518D\u8BF7\u5B83\u5403\u5C0F\u5706" },
      { text: "\u9762\u5305", word: "bun" },
      { text: "\u3002" }
    ],
    words: [
      { word: "sun", display: "SUN", cn: "\u592A\u9633", onset: "s" },
      { word: "nun", display: "NUN", cn: "\u4FEE\u5973\u3001\u5C3C\u59D1", onset: "n" },
      { word: "shun", display: "SHUN", cn: "\u56DE\u907F", onset: "sh" },
      { word: "gun", display: "GUN", cn: "\u67AA", onset: "g" },
      { word: "fun", display: "FUN", cn: "\u597D\u73A9\u7684", onset: "f" },
      { word: "stun", display: "STUN", cn: "\u5413\u5446", onset: "st" },
      { word: "bun", display: "BUN", cn: "\u5706\u5F62\u5C0F\u9762\u5305", onset: "b" }
    ],
    tip: "SUN\u3001FUN\u3001GUN \u90FD\u719F\uFF0CUN \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u51FA\u597D\u620F\u3002"
  },
  {
    id: "ine",
    rime: "INE",
    title: "\u8461\u8404\u6811\u4E0E\u677E\u6811",
    subtitle: "\u4E5D\u74F6\u9152\u4E0E\u4E00\u6392\u6392\u5730\u96F7\u679C",
    scene: "/scenes/ine.jpg",
    onsets: ["v", "w", "n", "d", "p", "l", "m"],
    color: "#2F6F5E",
    story: [
      { text: "\u4E00\u68F5" },
      { text: "\u8461\u8404\u6811", word: "vine" },
      { text: "\u5E74\u4EA7" },
      { text: "\u4E5D", word: "nine" },
      { text: "\u74F6" },
      { text: "\u7528\u9910", word: "dine" },
      { text: "\u7684" },
      { text: "\u8461\u8404\u9152", word: "wine" },
      { text: "\uFF0C\u4E00\u68F5" },
      { text: "\u677E\u6811", word: "pine" },
      { text: "\u53EA\u4F1A\u7ED3\u51FA\u4E00" },
      { text: "\u6392\u6392", word: "line" },
      { text: "\u50CF" },
      { text: "\u5730\u96F7", word: "mine" },
      { text: "\u7684\u677E\u679C\u3002" }
    ],
    words: [
      { word: "vine", display: "VINE", cn: "\u8461\u8404\u6811", onset: "v" },
      { word: "nine", display: "NINE", cn: "\u4E5D", onset: "n" },
      { word: "dine", display: "DINE", cn: "\u7528\u9910", onset: "d" },
      { word: "wine", display: "WINE", cn: "\u8461\u8404\u9152", onset: "w" },
      { word: "pine", display: "PINE", cn: "\u677E\u6811", onset: "p" },
      { word: "line", display: "LINE", cn: "\u6392", onset: "l" },
      { word: "mine", display: "MINE", cn: "\u5730\u96F7", onset: "m" }
    ],
    tip: "NINE\u3001WINE \u90FD\u719F\uFF0CINE \u5BB6\u65CF 7 \u4E2A\u8BCD\u56ED\u91CC\u6458\u3002"
  },
  {
    id: "can2",
    rime: "CAN",
    title: "\u5766\u767D\u533B\u751F\u7684\u5FE0\u544A",
    subtitle: "\u53D6\u6D88\u52A0\u62FF\u5927\u7684\u8721\u70DB\u751F\u610F",
    scene: "/scenes/can2.jpg",
    onsets: ["\xF8", "\xF8+ada", "\xF8+did", "\xF8+cer", "\xF8+cel", "\xF8+al", "\xF8+dle"],
    color: "#C25E7E",
    story: [
      { text: "\u533B\u751F" },
      { text: "\u5766\u767D", word: "candid" },
      { text: "\u5730\u5BF9\u75C5\u4EBA\u8BF4\uFF1A\u201C\u7531\u4E8E\u4F60\u60A3\u4E86" },
      { text: "\u764C\u75C7", word: "cancer" },
      { text: "\uFF0C\u6700\u597D" },
      { text: "\u53D6\u6D88", word: "cancel" },
      { text: "\u5230" },
      { text: "\u52A0\u62FF\u5927", word: "canada" },
      { text: "\u5356" },
      { text: "\u8FD0\u6CB3", word: "canal" },
      { text: "\u724C" },
      { text: "\u7F50", word: "can" },
      { text: "\u88C5" },
      { text: "\u8721\u70DB", word: "candle" },
      { text: "\u7684\u751F\u610F\u3002\u201D" }
    ],
    words: [
      { word: "candid", display: "CANDID", cn: "\u5766\u767D", onset: "\xF8+did" },
      { word: "cancer", display: "CANCER", cn: "\u764C\u75C7", onset: "\xF8+cer" },
      { word: "cancel", display: "CANCEL", cn: "\u53D6\u6D88", onset: "\xF8+cel" },
      { word: "canada", display: "CANADA", cn: "\u52A0\u62FF\u5927", onset: "\xF8+ada" },
      { word: "canal", display: "CANAL", cn: "\u8FD0\u6CB3", onset: "\xF8+al" },
      { word: "can", display: "CAN", cn: "\u80FD\u3001\u7F50\u5B50", onset: "\xF8" },
      { word: "candle", display: "CANDLE", cn: "\u8721\u70DB", onset: "\xF8+dle" }
    ],
    tip: "CAN \u5F00\u5934\u7684\u957F\u8BCD\u4E00\u4E32\uFF1A\u52A0\u62FF\u5927\u3001\u8FD0\u6CB3\u3001\u8721\u70DB\u3001\u53D6\u6D88\u3001\u764C\u75C7\u3001\u5766\u767D\u3002"
  },
  {
    id: "boo",
    rime: "BOO",
    title: "\u4E66\u7684\u63F4\u52A9",
    subtitle: "\u4ED6\u5F97\u4EE5\u7545\u5FEB\u75DB\u996E",
    scene: "/scenes/boo.jpg",
    onsets: ["\xF8+k", "\xF8+st", "\xF8+ze"],
    color: "#5B8C5A",
    story: [
      { text: "\u4ED6\u4E4B\u6240\u4EE5\u80FD\u591F\u7545\u5FEB" },
      { text: "\u75DB\u996E", word: "booze" },
      { text: "\uFF0C\u5B8C\u5168\u662F\u7531\u4E8E" },
      { text: "\u4E66", word: "book" },
      { text: "\u7684" },
      { text: "\u63F4\u52A9", word: "boost" },
      { text: "\u3002" }
    ],
    words: [
      { word: "booze", display: "BOOZE", cn: "\u75DB\u996E", onset: "\xF8+ze" },
      { word: "book", display: "BOOK", cn: "\u4E66", onset: "\xF8+k" },
      { word: "boost", display: "BOOST", cn: "\u63F4\u52A9\u3001\u5347\u9AD8", onset: "\xF8+st" }
    ],
    tip: "BOOK \u662F\u719F\u8BCD\uFF0CBOOST\u3001BOOZE \u6302\u5728\u4E66\u4E0A\u8BB0\u3002"
  },
  {
    id: "awn",
    rime: "AWN",
    title: "\u8292\u523A\u5728\u80CC\u7684\u6D41\u6D6A\u6C49",
    subtitle: "\u9ECE\u660E\u6253\u54C8\u6B20\u53BB\u5178\u5F53\u884C",
    scene: "/scenes/awn.jpg",
    onsets: ["\xF8", "d", "f", "p", "y"],
    color: "#7A5C9E",
    story: [
      { text: "\u8292", word: "awn" },
      { text: "\u523A\u5728\u80CC\u7684\u6D41\u6D6A\u6C49\u5728" },
      { text: "\u9ECE\u660E", word: "dawn" },
      { text: "\u65F6\u6253\u7740" },
      { text: "\u54C8\u6B20", word: "yawn" },
      { text: "\u53BB" },
      { text: "\u5DF4\u7ED3", word: "fawn" },
      { text: "\u5178\u5F53\u884C", word: "pawn" },
      { text: "\u3002" }
    ],
    words: [
      { word: "awn", display: "AWN", cn: "\u8292", onset: "\xF8" },
      { word: "dawn", display: "DAWN", cn: "\u9ECE\u660E", onset: "d" },
      { word: "yawn", display: "YAWN", cn: "\u6253\u54C8\u6B20", onset: "y" },
      { word: "fawn", display: "FAWN", cn: "\u5DF4\u7ED3", onset: "f" },
      { word: "pawn", display: "PAWN", cn: "\u5178\u5F53", onset: "p" }
    ],
    tip: "DAWN \u662F\u719F\u8BCD\uFF0CAWN \u5BB6\u65CF 5 \u4E2A\u8BCD\u8D76\u65E9\u5E02\u3002"
  },
  {
    id: "ridge",
    rime: "RIDGE",
    title: "\u5C71\u810A\u4E0A\u76D6\u6865",
    subtitle: "\u5929\u7A7A\u7684\u81EA\u7531\u53D7\u4E86\u9650\u5236",
    scene: "/scenes/ridge.jpg",
    onsets: ["\xF8", "b", "a"],
    color: "#B0762A",
    story: [
      { text: "\u5982\u679C\u5728" },
      { text: "\u5C71\u810A", word: "ridge" },
      { text: "\u4E0A\u591A\u76D6\u4E00\u5EA7" },
      { text: "\u6865", word: "bridge" },
      { text: "\uFF0C\u5929\u7A7A\u7684\u81EA\u7531\u4F1A\u56E0\u6B64\u800C\u53D7" },
      { text: "\u9650\u5236", word: "abridge" },
      { text: "\u3002" }
    ],
    words: [
      { word: "ridge", display: "RIDGE", cn: "\u5C71\u810A", onset: "\xF8" },
      { word: "bridge", display: "BRIDGE", cn: "\u6865", onset: "b" },
      { word: "abridge", display: "ABRIDGE", cn: "\u9650\u5236\u3001\u7F29\u77ED", onset: "a" }
    ],
    tip: "BRIDGE \u662F\u719F\u8BCD\uFF1ARIDGE \u5C71\u810A\u3001A-BRIDGE \u9650\u5236\u3002"
  },
  {
    id: "ceive",
    rime: "CEIVE",
    title: "\u79CD\u74DC\u5F97\u74DC\u7684\u89C9\u609F",
    subtitle: "\u4ED8\u51FA\u7684\u7231\u53EA\u6536\u5230\u6B3A\u9A97",
    scene: "/scenes/ceive.jpg",
    onsets: ["de", "re", "per", "con"],
    color: "#3E7CA6",
    story: [
      { text: "\u867D\u7136\u4ED6" },
      { text: "\u8BBE\u60F3", word: "conceive" },
      { text: "\u201C\u79CD\u74DC\u5F97\u74DC\uFF0C\u79CD\u8C46\u5F97\u8C46\u201D\uFF0C\u4F46\u4E5F" },
      { text: "\u610F\u8BC6\u5230", word: "perceive" },
      { text: "\u4ED6\u867D\u7136\u4ED8\u51FA\u4E86\u7231\uFF0C" },
      { text: "\u6536\u5230", word: "receive" },
      { text: "\u7684\u53EA\u662F" },
      { text: "\u6B3A\u9A97", word: "deceive" },
      { text: "\u3002" }
    ],
    words: [
      { word: "conceive", display: "CONCEIVE", cn: "\u8BBE\u60F3", onset: "con" },
      { word: "perceive", display: "PERCEIVE", cn: "\u610F\u8BC6\u5230", onset: "per" },
      { word: "receive", display: "RECEIVE", cn: "\u6536\u5230", onset: "re" },
      { word: "deceive", display: "DECEIVE", cn: "\u6B3A\u9A97", onset: "de" }
    ],
    tip: "CON-\u3001PER-\u3001RE-\u3001DE- \u56DB\u4E2A\u524D\u7F00\u6302 CEIVE\u2014\u2014\u524D\u7F00\u4E00\u53D8\u610F\u601D\u5168\u53D8\u3002"
  },
  {
    id: "cket",
    rime: "CKET",
    title: "\u5B87\u5B99\u5165\u573A\u5238",
    subtitle: "\u4E58\u706B\u7BAD\u5230\u592A\u7A7A\u65C5\u884C",
    scene: "/scenes/cket.jpg",
    onsets: ["ti", "ja", "pa", "po", "ro"],
    color: "#4A6FA5",
    story: [
      { text: "\u628A\u5B87\u5B99\u7684" },
      { text: "\u5165\u573A\u5238", word: "ticket" },
      { text: "\u653E\u5165" },
      { text: "\u5939\u514B", word: "jacket" },
      { text: "\u7684" },
      { text: "\u53E3\u888B", word: "pocket" },
      { text: "\uFF0C\u80CC\u4E0A" },
      { text: "\u5C0F\u5305", word: "packet" },
      { text: "\u4E58" },
      { text: "\u706B\u7BAD", word: "rocket" },
      { text: "\u5230\u592A\u7A7A\u53BB\u65C5\u884C\u3002" }
    ],
    words: [
      { word: "ticket", display: "TICKET", cn: "\u5165\u573A\u5238", onset: "ti" },
      { word: "jacket", display: "JACKET", cn: "\u5939\u514B", onset: "ja" },
      { word: "pocket", display: "POCKET", cn: "\u53E3\u888B", onset: "po" },
      { word: "packet", display: "PACKET", cn: "\u5C0F\u5305", onset: "pa" },
      { word: "rocket", display: "ROCKET", cn: "\u706B\u7BAD", onset: "ro" }
    ],
    tip: "CKET \u4E94\u5144\u5F1F\uFF1A\u7968\u3001\u5939\u514B\u3001\u53E3\u888B\u3001\u5C0F\u5305\u3001\u706B\u7BAD\u2014\u2014\u4E00\u8D9F\u592A\u7A7A\u6E38\u5168\u5E26\u8D70\u3002"
  },
  {
    id: "oil",
    rime: "OIL",
    title: "\u70ED\u571F\u4E0A\u7684\u77F3\u6CB9\u5DE5",
    subtitle: "\u571F\u5730\u70ED\u5F97\u8981\u5F00\u9505",
    scene: "/scenes/oil.jpg",
    onsets: ["\xF8", "b", "s", "t"],
    color: "#E15A3B",
    story: [
      { text: "\u5982\u679C\u4E0D\u662F\u4E3A\u4E86" },
      { text: "\u77F3\u6CB9", word: "oil" },
      { text: "\uFF0C\u8C01\u613F\u610F\u5F85\u5728\u70ED\u5F97\u8981" },
      { text: "\u5F00\u9505", word: "boil" },
      { text: "\u7684" },
      { text: "\u571F\u5730", word: "soil" },
      { text: "\u4E0A" },
      { text: "\u8F9B\u82E6\u5DE5\u4F5C", word: "toil" },
      { text: "\uFF1F" }
    ],
    words: [
      { word: "oil", display: "OIL", cn: "\u77F3\u6CB9", onset: "\xF8" },
      { word: "boil", display: "BOIL", cn: "\u6CB8\u817E", onset: "b" },
      { word: "soil", display: "SOIL", cn: "\u5730\u57DF\u3001\u571F\u58E4", onset: "s" },
      { word: "toil", display: "TOIL", cn: "\u8F9B\u82E6\u5DE5\u4F5C", onset: "t" }
    ],
    tip: "OIL \u662F\u719F\u8BCD\uFF0C\u6CB8\u817E\u7684\u571F\u5730\u4E0A\u7684\u8F9B\u82E6\u5DE5\u4F5C\u3002"
  },
  {
    id: "ight",
    rime: "IGHT",
    title: "\u591C\u665A\u70B9\u4EAE\u706F\u518D\u6218\u6597",
    subtitle: "\u4E3A\u4E86\u89C6\u529B\u80FD\u529B\u575A\u5B9E",
    scene: "/scenes/ight.jpg",
    onsets: ["f", "l", "m", "n", "r", "s", "t", "fl"],
    color: "#D9A441",
    story: [
      { text: "\u5BF9", word: "right" },
      { text: "\uFF01\u4E3A\u4E86" },
      { text: "\u89C6\u529B", word: "sight" },
      { text: "\u7684" },
      { text: "\u80FD\u529B", word: "might" },
      { text: "\u575A\u5B9E", word: "tight" },
      { text: "\u8D77\u89C1\uFF0C" },
      { text: "\u591C\u665A", word: "night" },
      { text: "\u5373\u4FBF\u5149\u9634" },
      { text: "\u98DE\u9A70", word: "flight" },
      { text: "\uFF0C\u4E5F\u5F97\u70B9" },
      { text: "\u4EAE", word: "light" },
      { text: "\u706F\u518D" },
      { text: "\u6218\u6597", word: "fight" },
      { text: "\u3002" }
    ],
    words: [
      { word: "right", display: "RIGHT", cn: "\u5BF9", onset: "r" },
      { word: "sight", display: "SIGHT", cn: "\u89C6\u529B", onset: "s" },
      { word: "might", display: "MIGHT", cn: "\u80FD\u529B", onset: "m" },
      { word: "tight", display: "TIGHT", cn: "\u575A\u5B9E", onset: "t" },
      { word: "night", display: "NIGHT", cn: "\u591C\u665A", onset: "n" },
      { word: "flight", display: "FLIGHT", cn: "\u75BE\u9A70\u3001\u98DE\u7FD4", onset: "fl" },
      { word: "light", display: "LIGHT", cn: "\u706F\u3001\u5149\u3001\u70B9\u4EAE", onset: "l" },
      { word: "fight", display: "FIGHT", cn: "\u6253\u4ED7\u3001\u6218\u6597", onset: "f" }
    ],
    tip: "IGHT \u5BB6\u65CF 8 \u4E2A\u8BCD\u5168\u662F\u9AD8\u9891\u8BCD\u2014\u2014\u4E00\u65CF\u62FF\u4E0B\u4E00\u5927\u628A\u3002"
  },
  {
    id: "on",
    rime: "ON",
    title: "\u6559\u6388\u7814\u8BFB\u513F\u5B50",
    subtitle: "\u4E00\u5428\u91CD\u6BD4\u8F83\u6709\u770B\u5934",
    scene: "/scenes/on.jpg",
    onsets: ["d", "s", "c", "t"],
    color: "#2F6F5E",
    story: [
      { text: "\u5927\u5B66\u6559\u6388", word: "don" },
      { text: "\u4E0D\u8BFB\u4E66\uFF0C\u5374" },
      { text: "\u7814\u8BFB", word: "con" },
      { text: "\u4ED6\u7684" },
      { text: "\u513F\u5B50", word: "son" },
      { text: "\u3002\u4ED6\u8BF4\uFF1A\u201C\u56E0\u4E3A\u6211\u7684\u513F\u5B50 1 " },
      { text: "\u5428", word: "ton" },
      { text: "\u91CD\uFF0C\u6BD4\u8F83\u6709\u770B\u5934\u3002\u201D" }
    ],
    words: [
      { word: "don", display: "DON", cn: "\u5927\u5B66\u6559\u6388", onset: "d" },
      { word: "con", display: "CON", cn: "\u7CBE\u8BFB", onset: "c" },
      { word: "son", display: "SON", cn: "\u513F\u5B50", onset: "s" },
      { word: "ton", display: "TON", cn: "\u5428", onset: "t" }
    ],
    tip: "SON \u662F\u719F\u8BCD\uFF0CON \u5BB6\u65CF\u56DB\u4E2A\u8BCD\u4E00\u51FA\u5BB6\u5EAD\u559C\u5267\u3002"
  },
  {
    id: "hoo",
    rime: "HOO",
    title: "\u6BDB\u9A74\u5F27\u7EBF\u7403",
    subtitle: "\u6B63\u4E2D\u7BEE\u6846\u5F97\u5934\u5DFE\u5927\u5956",
    scene: "/scenes/hoo.jpg",
    onsets: ["\xF8+d", "\xF8+f", "\xF8+k", "\xF8+p", "\xF8+t"],
    color: "#C25E7E",
    story: [
      { text: "\u6BDB\u9A74\u7528" },
      { text: "\u8E44", word: "hoof" },
      { text: "\u8E22\u51FA\u4E00\u4E2A" },
      { text: "\u5F27\u7EBF\u7403", word: "hook" },
      { text: "\u6B63\u4E2D" },
      { text: "\u7BEE\u6846", word: "hoop" },
      { text: "\u7A7A\u5FC3\uFF0C\u5F97\u5230\u4E00\u4E2A" },
      { text: "\u5934\u5DFE", word: "hood" },
      { text: "\u5927\u5956\uFF0C\u5B83\u4E50\u5F97\u5927\u58F0" },
      { text: "\u67AD\u53EB", word: "hoot" },
      { text: "\u3002" }
    ],
    words: [
      { word: "hoof", display: "HOOF", cn: "\u8E44\u3001\u8E22", onset: "\xF8+f" },
      { word: "hook", display: "HOOK", cn: "\u6302\u94A9\u3001\u5F27\u7EBF\u7403", onset: "\xF8+k" },
      { word: "hoop", display: "HOOP", cn: "\u7B8D\u3001\u7BEE\u6846", onset: "\xF8+p" },
      { word: "hood", display: "HOOD", cn: "\u5934\u5DFE\u3001\u8F66\u76D6", onset: "\xF8+d" },
      { word: "hoot", display: "HOOT", cn: "\u67AD\u53EB", onset: "\xF8+t" }
    ],
    tip: "HOO \u5C3E\u5DF4\u6362\u5B57\u6BCD\uFF1A\u8E44\u3001\u94A9\u3001\u6846\u3001\u5DFE\u3001\u53EB\u3002"
  },
  {
    id: "oot",
    rime: "OOT",
    title: "\u767E\u5E74\u53E4\u8463\u9774",
    subtitle: "\u6839\u90E8\u5168\u662F\u9897\u7C92\u7164\u7070",
    scene: "/scenes/oot.jpg",
    onsets: ["b", "f", "h", "r", "s"],
    color: "#5B8C5A",
    story: [
      { text: "\u5F53\u4ED6\u628A" },
      { text: "\u811A", word: "foot" },
      { text: "\u7A7F\u8FDB" },
      { text: "\u7956\u5148", word: "root" },
      { text: "\u7559\u4E0B\u6765\u7684" },
      { text: "\u957F\u7B52\u9774", word: "boot" },
      { text: "\u65F6\uFF0C\u75DB\u5F97" },
      { text: "\u5927\u53EB", word: "hoot" },
      { text: "\uFF01\u56E0\u4E3A\u9774\u7684\u6839\u90E8\u90FD\u662F\u9897\u7C92\u72B6\u7684" },
      { text: "\u7164\u7070", word: "soot" },
      { text: "\u3002" }
    ],
    words: [
      { word: "foot", display: "FOOT", cn: "\u811A", onset: "f" },
      { word: "root", display: "ROOT", cn: "\u6839\u3001\u7956\u5148", onset: "r" },
      { word: "boot", display: "BOOT", cn: "\u957F\u7B52\u9774", onset: "b" },
      { word: "hoot", display: "HOOT", cn: "\u5927\u53EB", onset: "h" },
      { word: "soot", display: "SOOT", cn: "\u7164\u7070", onset: "s" }
    ],
    tip: "FOOT\u3001BOOT \u90FD\u719F\uFF0COOT \u5BB6\u65CF\u4E94\u4E2A\u8BCD\u4E00\u811A\u8E6C\u3002"
  },
  {
    id: "atch",
    rime: "ATCH",
    title: "\u4FA6\u63A2\u95E8\u540E\u76D1\u89C6",
    subtitle: "\u7B56\u5212\u6293\u4E00\u6279\u5192\u724C\u8868\u6848\u72AF",
    scene: "/scenes/atch.jpg",
    onsets: ["b", "c", "h", "l", "m", "n", "p", "w"],
    color: "#7A5C9E",
    story: [
      { text: "\u8EAB\u7A7F" },
      { text: "\u706B\u67F4", word: "match" },
      { text: "\u56FE\u6848" },
      { text: "\u8865\u4E01", word: "patch" },
      { text: "\u8863\u670D\u7684\u4FA6\u63A2\u5728" },
      { text: "\u95E8\u95E9", word: "latch" },
      { text: "\u5B54\u540E" },
      { text: "\u76D1\u89C6", word: "watch" },
      { text: "\uFF0C" },
      { text: "\u81EA\u7136", word: "natch" },
      { text: "\u662F\u5728" },
      { text: "\u7B56\u5212", word: "hatch" },
      { text: "\u6293", word: "catch" },
      { text: "\u4E00\u6279", word: "batch" },
      { text: "\u8D29\u5356\u5192\u724C" },
      { text: "\u624B\u8868", word: "watch" },
      { text: "\u7684\u6848\u72AF\u3002" }
    ],
    words: [
      { word: "match", display: "MATCH", cn: "\u706B\u67F4", onset: "m" },
      { word: "patch", display: "PATCH", cn: "\u8865\u4E01", onset: "p" },
      { word: "latch", display: "LATCH", cn: "\u95E8\u95E9", onset: "l" },
      { word: "watch", display: "WATCH", cn: "\u770B\u3001\u624B\u8868\u3001\u76D1\u89C6", onset: "w" },
      { word: "natch", display: "NATCH", cn: "\u81EA\u7136\u5730", onset: "n" },
      { word: "hatch", display: "HATCH", cn: "\u7B56\u5212", onset: "h" },
      { word: "catch", display: "CATCH", cn: "\u6293", onset: "c" },
      { word: "batch", display: "BATCH", cn: "\u4E00\u6279", onset: "b" }
    ],
    tip: "WATCH \u4E00\u8BCD\u4E09\u4E49\uFF1A\u770B\u3001\u624B\u8868\u3001\u76D1\u89C6\u3002"
  },
  {
    id: "atch2",
    rime: "ATCH",
    title: "\u5E3D\u5B50\u732B\u8759\u8760\u52A0 CH",
    subtitle: "\u4F60\u8BF4\u5DE7\u4E0D\u5DE7",
    scene: "/scenes/atch2.jpg",
    onsets: ["h", "c", "b", "w"],
    color: "#B0762A",
    story: [
      { text: "\u5E3D\u5B50\u3001\u732B\u3001\u8759\u8760\u3001\u50E7\u5BFA\u8BF4\uFF1A\u201C\u6211\u4EEC\u7684\u82F1\u6587\u540D\u5B57\u540E\u9762\u52A0\u4E0A CH \u65F6\uFF0C\u5C31\u53D8\u6210" },
      { text: "\u7B56\u5212", word: "hatch" },
      { text: "\u3001" },
      { text: "\u6293", word: "catch" },
      { text: "\u3001" },
      { text: "\u4E00\u6279", word: "batch" },
      { text: "\u3001" },
      { text: "\u8868", word: "watch" },
      { text: "\uFF0C\u4F60\u8BF4\u5DE7\u4E0D\u5DE7\uFF1F\u201D" }
    ],
    words: [
      { word: "hatch", display: "HATCH", cn: "\u7B56\u5212\uFF08HAT+CH\uFF09", onset: "h" },
      { word: "catch", display: "CATCH", cn: "\u6293\uFF08CAT+CH\uFF09", onset: "c" },
      { word: "batch", display: "BATCH", cn: "\u4E00\u6279\uFF08BAT+CH\uFF09", onset: "b" },
      { word: "watch", display: "WATCH", cn: "\u8868\uFF08WAT+CH\uFF09", onset: "w" }
    ],
    tip: "HAT+CH\u3001CAT+CH\u3001BAT+CH\u3001WAT+CH\u2014\u2014\u719F\u8BCD\u52A0 CH \u53D8\u65B0\u8BCD\u3002"
  },
  {
    id: "ief",
    rime: "IEF",
    title: "\u6D6E\u96D5\u5931\u7A83\u4E4B\u540E",
    subtitle: "\u4FE1\u5FF5\u8BA9\u5B83\u5728\u6751\u843D\u91CD\u73B0",
    scene: "/scenes/ief.jpg",
    onsets: ["ch", "rel", "th", "gr", "bel", "br"],
    color: "#3E7CA6",
    story: [
      { text: "\u914B\u957F", word: "chief" },
      { text: "\u8BF4\uFF1A\u201C" },
      { text: "\u6D6E\u96D5", word: "relief" },
      { text: "\u88AB" },
      { text: "\u5C0F\u5077", word: "thief" },
      { text: "\u5077\u8D70\u4F55\u987B" },
      { text: "\u60B2\u75DB", word: "grief" },
      { text: "\uFF1F\u6211\u6709" },
      { text: "\u4FE1\u5FF5", word: "belief" },
      { text: "\u80FD\u5728" },
      { text: "\u77ED\u6682", word: "brief" },
      { text: "\u7684\u65F6\u95F4\u5185\u8BA9\u6D6E\u96D5\u5728\u54B1\u4EEC\u7684\u6751\u843D\u91CD\u73B0\u3002\u201D" }
    ],
    words: [
      { word: "chief", display: "CHIEF", cn: "\u914B\u957F", onset: "ch" },
      { word: "relief", display: "RELIEF", cn: "\u6D6E\u96D5", onset: "rel" },
      { word: "thief", display: "THIEF", cn: "\u5C0F\u5077", onset: "th" },
      { word: "grief", display: "GRIEF", cn: "\u60B2\u75DB", onset: "gr" },
      { word: "belief", display: "BELIEF", cn: "\u4FE1\u5FF5", onset: "bel" },
      { word: "brief", display: "BRIEF", cn: "\u77ED\u6682", onset: "br" }
    ],
    tip: "CHIEF \u53D1\u8BDD\uFF0CIEF \u5BB6\u65CF 6 \u4E2A\u8BCD\u5168\u542C\u4EE4\u3002"
  },
  {
    id: "ite",
    rime: "ITE",
    title: "\u5C0F\u866B\u62A2\u7BEE\u677F",
    subtitle: "\u7B2C 10000 \u4E2A\u8FDB\u653B\u7BEE\u677F",
    scene: "/scenes/ite.jpg",
    onsets: ["b", "k", "m", "r", "s"],
    color: "#4A6FA5",
    story: [
      { text: "\u5728\u654C\u65B9\u53C8" },
      { text: "\u54AC", word: "bite" },
      { text: "\u53C8\u5543\u53C8\u53EE\u53C8\u87AB\u7684\u56F4\u653B\u4E0B\uFF0C" },
      { text: "\u5C0F\u866B", word: "mite" },
      { text: "\u4F9D" },
      { text: "\u60EF\u4F8B", word: "rite" },
      { text: "\u9009\u5B9A\u6709\u5229\u7684" },
      { text: "\u4F4D\u7F6E", word: "site" },
      { text: "\uFF0C\u5982" },
      { text: "\u9E22", word: "kite" },
      { text: "\u822C\u8DC3\u8D77\u62A2\u5F97\u4E86\u7B2C 10000 \u4E2A\u8FDB\u653B\u7BEE\u677F\u3002" }
    ],
    words: [
      { word: "bite", display: "BITE", cn: "\u54AC\u3001\u5543\u3001\u53EE\u3001\u87AB", onset: "b" },
      { word: "mite", display: "MITE", cn: "\u5C0F\u866B", onset: "m" },
      { word: "rite", display: "RITE", cn: "\u60EF\u4F8B\u3001\u4EEA\u5F0F", onset: "r" },
      { word: "site", display: "SITE", cn: "\u9009\u5B9A\u4F4D\u7F6E", onset: "s" },
      { word: "kite", display: "KITE", cn: "\u9E22\u3001\u98CE\u7B5D", onset: "k" }
    ],
    tip: "KITE \u662F\u719F\u8BCD\uFF0CITE \u5BB6\u65CF\u5728\u7BEE\u7403\u573A\u4E0A\u8D77\u98DE\u3002"
  },
  {
    id: "ay2",
    rime: "AY",
    title: "\u8FF7\u8DEF\u7070\u9E1F\u6C42\u52A9",
    subtitle: "\u4E24\u6761\u8DEF\u6761\u6761\u53EF\u901A",
    scene: "/scenes/ay2.jpg",
    onsets: ["\xF8", "j", "r", "s", "w", "gr", "tr", "str"],
    color: "#E15A3B",
    story: [
      { text: "\u7070\u8272", word: "gray" },
      { text: "\u6A2B\u9E1F" },
      { text: "\u8FF7\u8DEF", word: "stray" },
      { text: "\u4E86\uFF0C\u4ED6\u5411\u84DD" },
      { text: "\u6A2B\u9E1F", word: "jay" },
      { text: "\u6C42\u52A9\uFF0C\u84DD\u6A2B\u9E1F" },
      { text: "\u8BF4", word: "say" },
      { text: "\uFF1A\u201C" },
      { text: "\u884C", word: "ay" },
      { text: "\uFF01\u6709\u4E24\u4E2A\u529E" },
      { text: "\u6CD5", word: "way" },
      { text: "\uFF0C\u4E00\u662F\u8DDF\u968F" },
      { text: "\u5149\u7EBF", word: "ray" },
      { text: "\u7684\u8DEF\u7EBF\u98DE\u56DE\u53BB\uFF0C\u4E00\u662F\u5750\u4E0A" },
      { text: "\u6258\u76D8", word: "tray" },
      { text: "\u6211\u9001\u4F60\u4E00\u7A0B\u3002\u201D" }
    ],
    words: [
      { word: "gray", display: "GRAY", cn: "\u7070\u8272", onset: "gr" },
      { word: "stray", display: "STRAY", cn: "\u8FF7\u8DEF", onset: "str" },
      { word: "jay", display: "JAY", cn: "\u6A2B\u9E1F", onset: "j" },
      { word: "say", display: "SAY", cn: "\u8BF4", onset: "s" },
      { word: "ay", display: "AY", cn: "\u884C", onset: "\xF8" },
      { word: "way", display: "WAY", cn: "\u8DEF\u3001\u529E\u6CD5", onset: "w" },
      { word: "ray", display: "RAY", cn: "\u5149\u7EBF", onset: "r" },
      { word: "tray", display: "TRAY", cn: "\u6258\u76D8", onset: "tr" }
    ],
    tip: "WAY\u3001SAY \u90FD\u719F\uFF0CAY \u5BB6\u65CF\u53E6\u4E00\u4E32 8 \u4E2A\u8BCD\u3002"
  },
  {
    id: "am",
    rime: "AM",
    title: "\u6C34\u575D\u4E0A\u7684\u91CE\u9910\u8B66\u544A",
    subtitle: "\u706B\u817F\u65CF\u65E0\u7EBF\u7535\u547C\u53EB\u516C\u7F8A",
    scene: "/scenes/am.jpg",
    onsets: ["h", "j", "r", "y", "d"],
    color: "#D9A441",
    story: [
      { text: "\u706B\u817F\u65CF", word: "ham" },
      { text: "\u7528\u65E0\u7EBF\u7535\u8B66\u544A" },
      { text: "\u516C\u7F8A", word: "ram" },
      { text: "\u4E0D\u5F97\u5728" },
      { text: "\u6C34\u575D", word: "dam" },
      { text: "\u4E0A\u5403" },
      { text: "\u5C71\u836F", word: "yam" },
      { text: "\u3001\u706B\u817F\u3001" },
      { text: "\u679C\u9171", word: "jam" },
      { text: "\u3002" }
    ],
    words: [
      { word: "ham", display: "HAM", cn: "\u706B\u817F\u3001\u706B\u817F\u65CF", onset: "h" },
      { word: "ram", display: "RAM", cn: "\u516C\u7F8A", onset: "r" },
      { word: "dam", display: "DAM", cn: "\u6C34\u575D", onset: "d" },
      { word: "yam", display: "YAM", cn: "\u5C71\u836F\u3001\u85AF\u84E3", onset: "y" },
      { word: "jam", display: "JAM", cn: "\u679C\u9171", onset: "j" }
    ],
    tip: "HAM\u3001JAM \u90FD\u719F\uFF0CAM \u5BB6\u65CF\u5728\u6C34\u575D\u4E0A\u5F00\u91CE\u9910\u4F1A\u3002"
  },
  {
    id: "ore",
    rime: "ORE",
    title: "\u88AB\u725B\u89D2\u9876\u4F24\u4E4B\u540E",
    subtitle: "\u51DD\u8840\u5E72\u4E86\u5C31\u4F1A\u597D",
    scene: "/scenes/ore.jpg",
    onsets: ["b", "c", "f", "g", "l", "m", "p", "s"],
    color: "#2F6F5E",
    story: [
      { text: "\u5148\u524D", word: "fore" },
      { text: "\u4F60\u5982" },
      { text: "\u94BB\u7814", word: "pore" },
      { text: "\u66F4\u591A\u7684", word: "more" },
      { text: "\u77E5\u8BC6" },
      { text: "\u7CBE\u9AD3", word: "core" },
      { text: "\uFF0C" },
      { text: "\u75DB", word: "sore" },
      { text: "\u5904\u7684" },
      { text: "\u51DD\u8840", word: "gore" },
      { text: "\u5C31\u4E0D\u4F1A\u4F7F\u4F60" },
      { text: "\u538C\u70E6", word: "bore" },
      { text: "\u3002" }
    ],
    words: [
      { word: "fore", display: "FORE", cn: "\u5148\u524D", onset: "f" },
      { word: "pore", display: "PORE", cn: "\u94BB\u7814", onset: "p" },
      { word: "more", display: "MORE", cn: "\u66F4\u591A\u7684", onset: "m" },
      { word: "lore", display: "LORE", cn: "\u77E5\u8BC6", onset: "l" },
      { word: "core", display: "CORE", cn: "\u7CBE\u9AD3\u3001\u6838\u5FC3", onset: "c" },
      { word: "sore", display: "SORE", cn: "\u75DB\u7684", onset: "s" },
      { word: "gore", display: "GORE", cn: "\u51DD\u8840", onset: "g" },
      { word: "bore", display: "BORE", cn: "\u4F7F\u538C\u70E6", onset: "b" }
    ],
    tip: "MORE \u662F\u719F\u8BCD\uFF0CORE \u5BB6\u65CF 8 \u4E2A\u8BCD\u4E00\u573A\u6597\u725B\u620F\u3002"
  }
];

// src/data/families-batch4.ts
var familiesBatch4 = [
  {
    id: "low",
    rime: "LOW",
    title: "\u5B54\u5B50\u8BF4\u4EBA\u751F\u5982\u6CB3",
    subtitle: "\u53D1\u5149\u53D1\u70ED\u540E\u8D70\u5B8C\u8FD9\u8F88\u5B50",
    scene: "/scenes/low.jpg",
    onsets: ["\xF8", "b", "f", "g", "s"],
    color: "#4A6FA5",
    story: [
      { text: "\u5B54\u5B50\u8BF4\uFF1A\u4EBA\u751F\u6709\u5982\u6CB3\u6C34\u65E5\u591C\u4E0D\u505C\u5730" },
      { text: "\u6D41\u52A8", word: "flow" },
      { text: "\uFF0C\u5C3D\u7BA1\u6211\u4EEC\u4E00\u751F\u4E2D\u66FE" },
      { text: "\u53D1\u5149\u53D1\u70ED", word: "glow" },
      { text: "\uFF0C\u6700\u540E\u7EC8\u5C06" },
      { text: "\u6162\u6162", word: "slow" },
      { text: "\u5730\u8D70" },
      { text: "\u4F4E", word: "low" },
      { text: "\u4E0B\u5761\u8DEF\u800C\u8D70\u5B8C\u8FD9\u8F88\u5B50\uFF0C\u5982\u98CE" },
      { text: "\u5439", word: "blow" },
      { text: "\u8FC7\u3002" }
    ],
    words: [
      { word: "flow", display: "FLOW", cn: "\u6D41\u52A8", onset: "f" },
      { word: "glow", display: "GLOW", cn: "\u53D1\u5149\u53D1\u70ED", onset: "g" },
      { word: "slow", display: "SLOW", cn: "\u6162", onset: "s" },
      { word: "low", display: "LOW", cn: "\u4F4E\u3001\u5411\u4E0B", onset: "\xF8" },
      { word: "blow", display: "BLOW", cn: "\u5439\u3001\u522E\uFF08\u98CE\uFF09", onset: "b" }
    ],
    tip: "SLOW \u662F\u719F\u8BCD\uFF0C\u5B54\u5B50\u4E00\u53E5\u8BDD\u4E32\u8D77 LOW \u5BB6\u65CF\u3002"
  },
  {
    id: "ug",
    rime: "UG",
    title: "\u81ED\u866B\u642C\u5730\u6BEF",
    subtitle: "\u4E0D\u81EA\u91CF\u529B\u5730\u7528\u529B\u62C9",
    scene: "/scenes/ug.jpg",
    onsets: ["b", "h", "j", "m", "r", "t"],
    color: "#E15A3B",
    story: [
      { text: "\u81ED\u866B", word: "bug" },
      { text: "\u4E0D\u7231\u5927" },
      { text: "\u676F", word: "mug" },
      { text: "\u3001" },
      { text: "\u6C34\u58F6", word: "jug" },
      { text: "\uFF0C\u4ED6" },
      { text: "\u7D27\u62B1", word: "hug" },
      { text: "\u7740\u5C0F" },
      { text: "\u5730\u6BEF", word: "rug" },
      { text: "\uFF0C\u4E0D\u81EA\u91CF\u529B\u5730" },
      { text: "\u7528\u529B\u62C9", word: "tug" },
      { text: "\u56DE\u53BB\u3002" }
    ],
    words: [
      { word: "bug", display: "BUG", cn: "\u81ED\u866B\u3001\u7A83\u542C\u5668", onset: "b" },
      { word: "mug", display: "MUG", cn: "\u6709\u67C4\u5927\u676F", onset: "m" },
      { word: "jug", display: "JUG", cn: "\u6C34\u58F6\u3001\u5927\u7F50", onset: "j" },
      { word: "hug", display: "HUG", cn: "\u7D27\u62B1\u7740", onset: "h" },
      { word: "rug", display: "RUG", cn: "\u5C0F\u5730\u6BEF", onset: "r" },
      { word: "tug", display: "TUG", cn: "\u7528\u529B\u62C9", onset: "t" }
    ],
    tip: "BUG \u662F\u719F\u8BCD\uFF0CUG \u5BB6\u65CF 6 \u4E2A\u8BCD\u4E00\u53EA\u81ED\u866B\u5168\u62B1\u8D70\u3002"
  },
  {
    id: "ax",
    rime: "AX",
    title: "\u4F20\u771F\u673A\u6536\u7A0E",
    subtitle: "\u6CA1\u94B1\uFF1F\u7528\u9EBB\u5E03\u8721\u65A7\u5934\u62B5\u4ED8",
    scene: "/scenes/ax.jpg",
    onsets: ["\xF8", "f", "t", "w", "fl"],
    color: "#D9A441",
    story: [
      { text: "\u4F20\u771F\u673A", word: "fax" },
      { text: "\u8BF4\uFF1A\u201C\u5982\u679C\u4F60\u6CA1\u94B1\u7F34" },
      { text: "\u7A0E\u91D1", word: "tax" },
      { text: "\uFF0C\u7528" },
      { text: "\u9EBB\u5E03", word: "flax" },
      { text: "\u3001" },
      { text: "\u8721", word: "wax" },
      { text: "\u6216" },
      { text: "\u65A7\u5934", word: "ax" },
      { text: "\u62B5\u4ED8\u4E5F\u884C\u3002\u201D" }
    ],
    words: [
      { word: "fax", display: "FAX", cn: "\u4F20\u771F\u673A", onset: "f" },
      { word: "tax", display: "TAX", cn: "\u7A0E\u91D1", onset: "t" },
      { word: "flax", display: "FLAX", cn: "\u9EBB\u5E03", onset: "fl" },
      { word: "wax", display: "WAX", cn: "\u8721", onset: "w" },
      { word: "ax", display: "AX", cn: "\u65A7", onset: "\xF8" }
    ],
    tip: "TAX \u662F\u719F\u8BCD\uFF0CAX \u5BB6\u65CF\u4E94\u4E2A\u8BCD\u4E00\u53F0\u4F20\u771F\u673A\u5168\u6536\u3002"
  },
  {
    id: "ar",
    rime: "AR",
    title: "\u7126\u6CB9\u6BC1\u8F66\u8BB0",
    subtitle: "\u7EDD\u4E0D\u80FD\u5F00\u9065\u8FDC\u7684\u8DEF\u7A0B",
    scene: "/scenes/ar.jpg",
    onsets: ["b", "c", "f", "j", "m", "p", "t"],
    color: "#2F6F5E",
    story: [
      { text: "\u5E73\u4EF7", word: "par" },
      { text: "\u7684" },
      { text: "\u7126\u6CB9", word: "tar" },
      { text: "\u4F1A" },
      { text: "\u635F\u6BC1", word: "mar" },
      { text: "\u6C7D\u8F66", word: "car" },
      { text: "\u5185\u7684" },
      { text: "\u7F50", word: "jar" },
      { text: "\u3001\u74F6\u548C" },
      { text: "\u95E8\u95E9", word: "bar" },
      { text: "\uFF0C\u7EDD\u4E0D\u80FD\u5F00" },
      { text: "\u9065\u8FDC", word: "far" },
      { text: "\u7684\u8DEF\u7A0B\u3002" }
    ],
    words: [
      { word: "par", display: "PAR", cn: "\u5E73\u4EF7\u7684", onset: "p" },
      { word: "tar", display: "TAR", cn: "\u7126\u6CB9", onset: "t" },
      { word: "mar", display: "MAR", cn: "\u635F\u6BC1", onset: "m" },
      { word: "car", display: "CAR", cn: "\u6C7D\u8F66", onset: "c" },
      { word: "jar", display: "JAR", cn: "\u74F6\u3001\u7F50", onset: "j" },
      { word: "bar", display: "BAR", cn: "\u68D2\u3001\u6761\u3001\u95E8\u95E9", onset: "b" },
      { word: "far", display: "FAR", cn: "\u9065\u8FDC\u7684", onset: "f" }
    ],
    tip: "CAR \u662F\u719F\u8BCD\uFF0CAR \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u8F86\u8F66\u88C5\u4E0B\u3002"
  },
  {
    id: "useable",
    rime: "USE",
    title: "\u6D77\u5E95\u6444\u50CF\u673A\u7684\u7B2C\u4E8C\u6625",
    subtitle: "\u9646\u5730\u65E0\u7528\uFF0C\u6D77\u5E95\u53EF\u7528",
    scene: "/scenes/useable.jpg",
    onsets: ["\xF8", "\xF8+able", "\xF8+ed", "\xF8+r", "\xF8+less"],
    color: "#C25E7E",
    story: [
      { text: "\u7528\u6237", word: "user" },
      { text: "\u60EF\u4E8E", word: "used" },
      { text: "\u4F7F\u7528", word: "use" },
      { text: "\u4E13\u4E1A\u6D77\u5E95\u6444\u50CF\u673A\uFF0C\u5728\u9646\u5730\u4E0A" },
      { text: "\u65E0\u7528", word: "useless" },
      { text: "\u7684\u65E7\u673A\u5668\u5230\u4E86\u6D77\u5E95\u5C31" },
      { text: "\u53EF\u7528", word: "useable" },
      { text: "\u4E86\u3002" }
    ],
    words: [
      { word: "user", display: "USER", cn: "\u4F7F\u7528\u8005", onset: "\xF8+r" },
      { word: "used", display: "USED", cn: "\u60EF\u4E8E\u3001\u65E7\u7684", onset: "\xF8+ed" },
      { word: "use", display: "USE", cn: "\u4F7F\u7528", onset: "\xF8" },
      { word: "useless", display: "USELESS", cn: "\u65E0\u7528", onset: "\xF8+less" },
      { word: "useable", display: "USEABLE", cn: "\u53EF\u7528\u7684", onset: "\xF8+able" }
    ],
    tip: "USE \u52A0\u540E\u7F00\uFF1AER \u4EBA\u3001ED \u65E7\u3001LESS \u65E0\u3001ABLE \u53EF\u2014\u2014\u540E\u7F00\u51B3\u5B9A\u547D\u8FD0\u3002"
  },
  {
    id: "art",
    rime: "ART",
    title: "\u6811\u7624\u731C\u8C1C",
    subtitle: "\u5C11 T \u662F\u6218\u4E89\uFF0C\u53BB W \u662F\u827A\u672F",
    scene: "/scenes/art.jpg",
    onsets: ["\xF8", "w", "w+\xF8", "sm"],
    color: "#5B8C5A",
    story: [
      { text: "\u6811\u7624", word: "wart" },
      { text: "\u8BF4\uFF1A\u201C\u6211\u7684\u540D\u5B57" },
      { text: "\u65F6\u9AE6", word: "smart" },
      { text: "\u5F97\u5F88\uFF0C\u5C11\u4E86\u540E\u9762\u7684 T \u5C31\u662F" },
      { text: "\u6218\u4E89", word: "war" },
      { text: "\uFF0C\u62FF\u6389\u524D\u9762\u7684 W \u5C31\u53D8\u6210" },
      { text: "\u827A\u672F", word: "art" },
      { text: "\uFF0C\u806A\u660E\u7684\u5404\u4F4D\u731C\u4E00\u731C\uFF0C\u6211\u7684\u82F1\u6587\u540D\u53EB\u4EC0\u4E48\uFF1F\u201D" }
    ],
    words: [
      { word: "wart", display: "WART", cn: "\u6811\u7624\u3001\u75A3", onset: "w" },
      { word: "smart", display: "SMART", cn: "\u65F6\u9AE6\u3001\u806A\u660E", onset: "sm" },
      { word: "war", display: "WAR", cn: "\u6218\u4E89", onset: "w+\xF8" },
      { word: "art", display: "ART", cn: "\u827A\u672F", onset: "\xF8" }
    ],
    tip: "WART = WAR + T = W + ART\u2014\u2014\u4E00\u4E2A\u5B57\u62C6\u4E09\u4E2A\u5B57\u3002"
  },
  {
    id: "ool2",
    rime: "OOL",
    title: "\u8BFE\u5802\u4E0A\u7684\u68A6\u6E38\u8005",
    subtitle: "\u68A6\u4E2D\u6570\u7F8A\u62BD\u7F8A\u6BDB\u7EC7\u6BDB\u886B",
    scene: "/scenes/ool2.jpg",
    onsets: ["f", "sch", "dr", "w", "sp"],
    color: "#7A5C9E",
    story: [
      { text: "\u50BB\u74DC", word: "fool" },
      { text: "\u5728" },
      { text: "\u5B66\u6821", word: "school" },
      { text: "\u4E0A\u8BFE\u65F6" },
      { text: "\u6D41\u53E3\u6C34\u3001\u8BF4\u68A6\u8BDD", word: "drool" },
      { text: "\uFF0C\u4ED6\u8BF4\uFF1A\u201C\u68A6\u4E2D\u6570\u7F8A\u53EF\u5E26\u7740" },
      { text: "\u7EBF\u8F74", word: "spool" },
      { text: "\uFF0C\u987A\u4FBF\u62BD\u53D6" },
      { text: "\u7F8A\u6BDB", word: "wool" },
      { text: "\u7EC7\u7F8A\u6BDB\u886B\u3002\u201D" }
    ],
    words: [
      { word: "fool", display: "FOOL", cn: "\u50BB\u74DC", onset: "f" },
      { word: "school", display: "SCHOOL", cn: "\u5B66\u6821", onset: "sch" },
      { word: "drool", display: "DROOL", cn: "\u53E3\u6C34\u3001\u68A6\u8BDD", onset: "dr" },
      { word: "spool", display: "SPOOL", cn: "\u7EBF\u8F74", onset: "sp" },
      { word: "wool", display: "WOOL", cn: "\u7F8A\u6BDB", onset: "w" }
    ],
    tip: "SCHOOL \u662F\u719F\u8BCD\uFF0COOL \u7684\u53E6\u4E00\u4E32\uFF1A\u50BB\u74DC\u3001\u68A6\u8BDD\u3001\u7EBF\u8F74\u3001\u7F8A\u6BDB\u3002"
  },
  {
    id: "as",
    rime: "AS",
    title: "\u5BCC\u8C6A\u7684\u94B1\u5982\u6C14\u6563",
    subtitle: "\u541E\u74E6\u65AF\u53EF\u4E0D\u884C",
    scene: "/scenes/as.jpg",
    onsets: ["\xF8", "g", "h", "w"],
    color: "#B0762A",
    story: [
      { text: "\u5BF9\u4E8E" },
      { text: "\u62E5\u6709", word: "has" },
      { text: "10 \u4EBF\u7F8E\u91D1\u7684\u5BCC\u8C6A\u800C\u8A00\uFF0C\u5F53\u4ED6\u7684\u94B1\u5982" },
      { text: "\u6C14\u4F53", word: "gas" },
      { text: "\u822C\u5730\u6D88\u5931\u65F6\uFF0C" },
      { text: "\u5982\u540C", word: "as" },
      { text: "\u8981\u4E86\u4ED6\u7684\u547D\uFF0C\u5F53\u7136\u82E5\u53BB\u541E\u74E6\u65AF\u53EF\u4E0D\u884C\u3002" }
    ],
    words: [
      { word: "has", display: "HAS", cn: "\u62E5\u6709", onset: "h" },
      { word: "gas", display: "GAS", cn: "\u6C14\u4F53\u3001\u74E6\u65AF", onset: "g" },
      { word: "as", display: "AS", cn: "\u5982\u540C", onset: "\xF8" },
      { word: "was", display: "WAS", cn: "\u662F\uFF08\u8FC7\u53BB\u5F0F\uFF09", onset: "w" }
    ],
    tip: "AS\u3001HAS\u3001WAS\u3001GAS\u2014\u2014\u56DB\u4E2A\u6700\u5E38\u7528\u7684\u5C0F\u8BCD\u4E00\u65CF\u6536\u3002"
  },
  {
    id: "oss",
    rime: "OSS",
    title: "\u8001\u677F\u6254\u795E\u50CF",
    subtitle: "\u4E1D\u7EF5\u751F\u610F\u5931\u8D25\u7684\u4EE3\u4EF7",
    scene: "/scenes/oss.jpg",
    onsets: ["b", "j", "l", "m", "t", "fl", "gl"],
    color: "#3E7CA6",
    story: [
      { text: "\u8001\u677F", word: "boss" },
      { text: "\u56E0\u4E3A" },
      { text: "\u4E1D\u7EF5", word: "floss" },
      { text: "\u7684\u751F\u610F\u5931\u8D25\uFF0C\u6574\u4E2A\u4EBA" },
      { text: "\u4E27\u5931", word: "loss" },
      { text: "\u4E86" },
      { text: "\u5149\u5F69", word: "gloss" },
      { text: "\uFF0C\u4ED6\u5931\u671B\u5730\u62FF\u8D77" },
      { text: "\u795E\u50CF", word: "joss" },
      { text: "\u6254", word: "toss" },
      { text: "\u5230" },
      { text: "\u6CE5\u6CBC", word: "moss" },
      { text: "\u4E2D\u3002" }
    ],
    words: [
      { word: "boss", display: "BOSS", cn: "\u8001\u677F", onset: "b" },
      { word: "floss", display: "FLOSS", cn: "\u4E1D\u7EF5", onset: "fl" },
      { word: "loss", display: "LOSS", cn: "\u4E27\u5931", onset: "l" },
      { word: "gloss", display: "GLOSS", cn: "\u5149\u5F69", onset: "gl" },
      { word: "joss", display: "JOSS", cn: "\u795E\u50CF", onset: "j" },
      { word: "toss", display: "TOSS", cn: "\u6254", onset: "t" },
      { word: "moss", display: "MOSS", cn: "\u6CE5\u6CBC", onset: "m" }
    ],
    tip: "BOSS \u662F\u719F\u8BCD\uFF0COSS \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u573A\u5546\u6218\u60B2\u5267\u3002"
  },
  {
    id: "end",
    rime: "END",
    title: "\u6700\u65B0\u8D8B\u52BF\u5FEB\u62A5",
    subtitle: "\u4FEE\u6B63\u62B5\u6321\u6218\u672F\u624D\u80FD\u8FBE\u5230\u76EE\u6807",
    scene: "/scenes/end.jpg",
    onsets: ["\xF8", "f", "l", "m", "s", "tr"],
    color: "#4A6FA5",
    story: [
      { text: "\u63D0\u4F9B", word: "lend" },
      { text: "\u4E00\u5219\u6700\u65B0" },
      { text: "\u8D8B\u52BF", word: "trend" },
      { text: "\u5BC4\u9001", word: "send" },
      { text: "\u7ED9\u4F60\uFF1A\u201C\u653B\u51FB\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u8D62\u53D6\u80DC\u5229\uFF0C\u4F46\u53EA\u6709" },
      { text: "\u4FEE\u6B63", word: "mend" },
      { text: "\u62B5\u6321", word: "fend" },
      { text: "\u6218\u672F\u624D\u80FD\u8FBE\u5230" },
      { text: "\u76EE\u6807", word: "end" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "lend", display: "LEND", cn: "\u63D0\u4F9B", onset: "l" },
      { word: "trend", display: "TREND", cn: "\u8D8B\u52BF", onset: "tr" },
      { word: "send", display: "SEND", cn: "\u5BC4\u9001", onset: "s" },
      { word: "mend", display: "MEND", cn: "\u4FEE\u6B63", onset: "m" },
      { word: "fend", display: "FEND", cn: "\u9632\u5FA1\u3001\u62B5\u6321", onset: "f" },
      { word: "end", display: "END", cn: "\u7ED3\u5C40\u3001\u76EE\u6807\u3001\u76EE\u7684", onset: "\xF8" }
    ],
    tip: "END \u4E00\u8BCD\u4E09\u4E49\uFF1A\u7ED3\u5C40\u3001\u76EE\u6807\u3001\u76EE\u7684\u3002"
  },
  {
    id: "ain2",
    rime: "AIN",
    title: "\u897F\u73ED\u7259\u667A\u8005\u7684\u89C9\u609F",
    subtitle: "\u53EA\u5403\u8C37\u7269\u7684\u7B80\u6734\u751F\u6D3B",
    scene: "/scenes/ain2.jpg",
    onsets: ["g", "m", "p", "v", "br", "gr", "pl", "sp", "st"],
    color: "#E15A3B",
    story: [
      { text: "\u897F\u73ED\u7259", word: "spain" },
      { text: "\u6709\u4F4D\u53EA\u5403" },
      { text: "\u8C37\u7269", word: "grain" },
      { text: "\u3001\u751F\u6D3B" },
      { text: "\u7B80\u6734", word: "plain" },
      { text: "\u7684" },
      { text: "\u667A\u8005", word: "brain" },
      { text: "\uFF0C\u4ED6" },
      { text: "\u83B7\u5F97", word: "gain" },
      { text: "\u7684" },
      { text: "\u4E3B\u8981", word: "main" },
      { text: "\u89C9\u609F\u662F\uFF1A\u7EC8\u6B62\u4EBA\u4EEC\u7531\u4E8E\u592A\u8FC7" },
      { text: "\u81EA\u8D1F", word: "vain" },
      { text: "\u3001" },
      { text: "\u8D25\u574F", word: "stain" },
      { text: "\u8EAB\u5FC3\u6240\u5F15\u53D1\u7684" },
      { text: "\u75DB\u82E6", word: "pain" },
      { text: "\u3002" }
    ],
    words: [
      { word: "spain", display: "SPAIN", cn: "\u897F\u73ED\u7259", onset: "sp" },
      { word: "grain", display: "GRAIN", cn: "\u8C37\u7269", onset: "gr" },
      { word: "plain", display: "PLAIN", cn: "\u7B80\u6734", onset: "pl" },
      { word: "brain", display: "BRAIN", cn: "\u667A\u8005", onset: "br" },
      { word: "gain", display: "GAIN", cn: "\u83B7\u5F97", onset: "g" },
      { word: "main", display: "MAIN", cn: "\u4E3B\u8981\u7684", onset: "m" },
      { word: "vain", display: "VAIN", cn: "\u81EA\u8D1F", onset: "v" },
      { word: "stain", display: "STAIN", cn: "\u8D25\u574F", onset: "st" },
      { word: "pain", display: "PAIN", cn: "\u75DB\u82E6", onset: "p" }
    ],
    tip: "AIN \u5BB6\u65CF\u53E6\u4E00\u4E32 9 \u4E2A\u8BCD\uFF0C\u4E00\u4F4D\u897F\u73ED\u7259\u667A\u8005\u5168\u70B9\u5316\u3002"
  },
  {
    id: "ever",
    rime: "EVER",
    title: "\u79D1\u5B66\u5BB6\u7684\u6760\u6746",
    subtitle: "\u6C38\u4E0D\u5207\u65AD\u7684\u597D\u5947\u5FC3",
    scene: "/scenes/ever.jpg",
    onsets: ["\xF8", "f", "l", "n", "s"],
    color: "#D9A441",
    story: [
      { text: "\u79D1\u5B66\u5BB6" },
      { text: "\u6C38\u8FDC", word: "ever" },
      { text: "\u90FD\u4FDD\u6301\u7740" },
      { text: "\u72C2\u70ED", word: "fever" },
      { text: "\uFF0C" },
      { text: "\u4ECE\u4E0D", word: "never" },
      { text: "\u5207\u65AD", word: "sever" },
      { text: "\u5BF9\u4E00\u5207\u4E8B\u7269\u4EA7\u751F\u7684\u79CD\u79CD\u597D\u5947\u5FC3\u7406\uFF0C\u56E0\u800C\u80FD\u591F\u4ECE\u4E00\u6839\u6728\u68CD\u53D1\u73B0\u201C" },
      { text: "\u6760\u6746", word: "lever" },
      { text: "\u539F\u7406\u201D\u3002" }
    ],
    words: [
      { word: "ever", display: "EVER", cn: "\u6C38\u8FDC", onset: "\xF8" },
      { word: "fever", display: "FEVER", cn: "\u72C2\u70ED\u3001\u53D1\u70E7", onset: "f" },
      { word: "never", display: "NEVER", cn: "\u4ECE\u4E0D", onset: "n" },
      { word: "sever", display: "SEVER", cn: "\u5207\u65AD", onset: "s" },
      { word: "lever", display: "LEVER", cn: "\u6760\u6746", onset: "l" }
    ],
    tip: "EVER\u3001NEVER \u90FD\u719F\uFF0CEVER \u5BB6\u65CF 5 \u4E2A\u8BCD\u4E00\u6839\u6760\u6746\u64AC\u8D77\u3002"
  },
  {
    id: "ash",
    rime: "ASH",
    title: "\u62A2\u532A\u7684\u7070\u70EC",
    subtitle: "\u5F97\u624B\u624D\u53D1\u73B0\u73B0\u91D1\u5DF2\u6210\u7070",
    scene: "/scenes/ash.jpg",
    onsets: ["\xF8", "c", "d", "g", "l", "r"],
    color: "#2F6F5E",
    story: [
      { text: "\u62A2\u532A" },
      { text: "\u8F7B\u7387", word: "rash" },
      { text: "\u5730" },
      { text: "\u731B\u51B2", word: "dash" },
      { text: "\uFF0C\u4ED6\u5FCD\u53D7\u88AB" },
      { text: "\u75DB\u6253", word: "lash" },
      { text: "\uFF0C\u4E0D\u987E" },
      { text: "\u4F24\u53E3", word: "gash" },
      { text: "\u7684\u75BC\u75DB\uFF0C\u76F4\u5230\u5F97\u624B\u624D\u53D1\u73B0" },
      { text: "\u73B0\u91D1", word: "cash" },
      { text: "\u5DF2\u53D8\u6210\u4E86" },
      { text: "\u7070\u70EC", word: "ash" },
      { text: "\u3002" }
    ],
    words: [
      { word: "rash", display: "RASH", cn: "\u8F7B\u7387", onset: "r" },
      { word: "dash", display: "DASH", cn: "\u731B\u51B2", onset: "d" },
      { word: "lash", display: "LASH", cn: "\u75DB\u6253\u3001\u97AD\u6253", onset: "l" },
      { word: "gash", display: "GASH", cn: "\u5212\u3001\u780D\u7684\u4F24\u53E3", onset: "g" },
      { word: "cash", display: "CASH", cn: "\u73B0\u91D1", onset: "c" },
      { word: "ash", display: "ASH", cn: "\u7070\u70EC", onset: "\xF8" }
    ],
    tip: "CASH \u662F\u719F\u8BCD\uFF0CASH \u5BB6\u65CF 6 \u4E2A\u8BCD\u4E00\u573A\u7A7A\u6B22\u559C\u3002"
  },
  {
    id: "rench",
    rime: "RENCH",
    title: "\u6218\u58D5\u91CC\u7684\u6CD5\u56FD\u4EBA",
    subtitle: "\u5168\u8EAB\u6E7F\u900F\u4ECD\u626D\u8F6C\u6218\u5C40",
    scene: "/scenes/rench.jpg",
    onsets: ["d", "f", "t", "w"],
    color: "#C25E7E",
    story: [
      { text: "\u6CD5\u56FD\u4EBA", word: "french" },
      { text: "\u5F3A\u5FCD\u7740\u5927\u96E8\uFF0C\u5C3D\u7BA1\u4ED6\u5DF2\u5168\u8EAB" },
      { text: "\u6E7F\u900F", word: "drench" },
      { text: "\uFF0C\u4F46\u4ECD\u575A\u5B88" },
      { text: "\u6218\u58D5", word: "trench" },
      { text: "\uFF0C\u8BD5\u56FE" },
      { text: "\u626D\u8F6C", word: "wrench" },
      { text: "\u6218\u5C40\u3002" }
    ],
    words: [
      { word: "french", display: "FRENCH", cn: "\u6CD5\u56FD\u4EBA", onset: "f" },
      { word: "drench", display: "DRENCH", cn: "\u6E7F\u900F", onset: "d" },
      { word: "trench", display: "TRENCH", cn: "\u6218\u58D5", onset: "t" },
      { word: "wrench", display: "WRENCH", cn: "\u626D\u8F6C", onset: "w" }
    ],
    tip: "FRENCH \u662F\u719F\u8BCD\uFF0CRENCH \u5BB6\u65CF\u4E00\u573A\u96E8\u4E2D\u6218\u58D5\u620F\u3002"
  },
  {
    id: "we",
    rime: "WE",
    title: "\u5A01\u5C14\u65AF\u7684\u540E\u9662\u6CB9\u4E95",
    subtitle: "\u9ED1\u96E8\u90FD\u6765\u81EA\u90A3\u53E3\u5C0F\u4E95",
    scene: "/scenes/we.jpg",
    onsets: ["\xF8", "\xF8+t", "\xF8+st", "\xF8+lls", "\xF8+ll", "\xF8+e"],
    color: "#5B8C5A",
    story: [
      { text: "\u5A01\u5C14\u65AF", word: "wells" },
      { text: "\u8BF4\uFF1A\u201C" },
      { text: "\u6211\u4EEC", word: "we" },
      { text: "\u6240\u4F4F\u7684" },
      { text: "\u897F\u90E8", word: "west" },
      { text: "\u5730\u533A\u867D\u7136\u591A" },
      { text: "\u96E8", word: "wet" },
      { text: "\uFF0C\u4F46\u8FD9\u9ED1\u96E8\u90FD\u6765\u81EA\u81EA\u5BB6\u540E\u9662\u7684\u90A3\u53E3" },
      { text: "\u5C0F", word: "wee" },
      { text: "\u5C0F\u7684\u6CB9" },
      { text: "\u4E95", word: "well" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "wells", display: "WELLS", cn: "\u5A01\u5C14\u65AF", onset: "\xF8+lls" },
      { word: "we", display: "WE", cn: "\u6211\u4EEC", onset: "\xF8" },
      { word: "west", display: "WEST", cn: "\u897F\u65B9\u3001\u897F\u90E8", onset: "\xF8+st" },
      { word: "wet", display: "WET", cn: "\u6F6E\u6E7F\u3001\u591A\u96E8", onset: "\xF8+t" },
      { word: "wee", display: "WEE", cn: "\u5C0F\u7684", onset: "\xF8+e" },
      { word: "well", display: "WELL", cn: "\u4E95", onset: "\xF8+ll" }
    ],
    tip: "WE \u8D8A\u6302\u8D8A\u957F\uFF1A\u6211\u4EEC\u3001\u5C0F\u7684\u3001\u4E95\u3001\u897F\u90E8\u3001\u591A\u96E8\u3001\u5A01\u5C14\u65AF\u3002"
  },
  {
    id: "ork",
    rime: "ORK",
    title: "\u732A\u516B\u6212\u7684\u8019",
    subtitle: "\u522B\u8BA9\u5996\u602A\u770B\u6210\u8F6F\u6728",
    scene: "/scenes/ork.jpg",
    onsets: ["c", "f", "p", "w"],
    color: "#7A5C9E",
    story: [
      { text: "\u5B59\u609F\u7A7A\u5BF9\u732A\u516B\u6212\u8BF4\uFF1A\u201C\u597D\u597D\u62FF\u8D77\u4F60\u7684" },
      { text: "\u8019", word: "fork" },
      { text: "\u8BA4\u771F" },
      { text: "\u5DE5\u4F5C", word: "work" },
      { text: "\uFF0C\u522B\u8BA9\u5996\u602A\u628A\u4F60\u770B\u6210" },
      { text: "\u8F6F\u6728", word: "cork" },
      { text: "\uFF0C\u6740\u4E86\u53BB\u5356" },
      { text: "\u732A\u8089", word: "pork" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "fork", display: "FORK", cn: "\u53C9\u5B50\u3001\u8019", onset: "f" },
      { word: "work", display: "WORK", cn: "\u5DE5\u4F5C", onset: "w" },
      { word: "cork", display: "CORK", cn: "\u8F6F\u6728", onset: "c" },
      { word: "pork", display: "PORK", cn: "\u732A\u8089", onset: "p" }
    ],
    tip: "WORK \u662F\u719F\u8BCD\uFF0CORK \u5BB6\u65CF\u897F\u6E38\u56DB\u4EBA\u7EC4\u3002"
  },
  {
    id: "own2",
    rime: "OWN",
    title: "\u522B\u7A7F\u957F\u888D\u53BB\u4E0B\u57CE",
    subtitle: "\u5C0F\u5FC3\u88AB\u5272\u4E86\u81EA\u5DF1\u7684\u8349",
    scene: "/scenes/own2.jpg",
    onsets: ["\xF8", "d", "t", "g", "m"],
    color: "#B0762A",
    story: [
      { text: "\u522B\u7A7F" },
      { text: "\u7ED2\u6BDB", word: "down" },
      { text: "\u957F\u888D", word: "gown" },
      { text: "\u5230" },
      { text: "\u4E0B", word: "down" },
      { text: "\u57CE", word: "town" },
      { text: "\u53BB\uFF0C\u4EE5\u514D\u88AB\u8B66\u957F\u5272\u4E86" },
      { text: "\u81EA\u5DF1\u7684", word: "own" },
      { text: "\u8349", word: "mown" },
      { text: "\u3002" }
    ],
    words: [
      { word: "down", display: "DOWN", cn: "\u4E0B\u3001\u7ED2\u6BDB", onset: "d" },
      { word: "gown", display: "GOWN", cn: "\u957F\u888D", onset: "g" },
      { word: "town", display: "TOWN", cn: "\u5E02\u533A\u3001\u57CE\u533A", onset: "t" },
      { word: "own", display: "OWN", cn: "\u81EA\u5DF1\u7684", onset: "\xF8" },
      { word: "mown", display: "MOWN", cn: "\u5272\u8349", onset: "m" }
    ],
    tip: "DOWN \u4E00\u8BCD\u4E24\u7528\uFF1A\u5411\u4E0B\uFF0C\u4E5F\u662F\u7ED2\u6BDB\u3002"
  },
  {
    id: "owl",
    rime: "OWL",
    title: "\u732B\u5934\u9E70\u7684\u58F0\u660E",
    subtitle: "\u6211\u4E0D\u662F\u5BB6\u79BD\u4E0D\u5403\u5582\u7684\u98DF",
    scene: "/scenes/owl.jpg",
    onsets: ["\xF8", "f", "h", "j", "gr", "pr", "sc"],
    color: "#3E7CA6",
    story: [
      { text: "\u732B\u5934\u9E70", word: "owl" },
      { text: "\u76B1\u7740\u7709\u5934", word: "scowl" },
      { text: "\u4E0D\u5E73" },
      { text: "\u5730" },
      { text: "\u55E5\u53EB", word: "howl" },
      { text: "\u9053\uFF1A\u201C\u6211\u4E0D\u662F" },
      { text: "\u5BB6\u79BD", word: "fowl" },
      { text: "\uFF0C\u4E0D\u5403\u522B\u4EBA\u5582\u7684\u98DF\uFF0C\u6211\u90FD\u662F\u7528\u81EA\u5DF1\u7684" },
      { text: "\u989A", word: "jowl" },
      { text: "\u5728\u591C\u95F4\u6084\u6084\u5730" },
      { text: "\u89C5\u98DF", word: "prowl" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "owl", display: "OWL", cn: "\u732B\u5934\u9E70", onset: "\xF8" },
      { word: "scowl", display: "SCOWL", cn: "\u76B1\u7709\u5934", onset: "sc" },
      { word: "howl", display: "HOWL", cn: "\u55E5\u53EB", onset: "h" },
      { word: "fowl", display: "FOWL", cn: "\u5BB6\u79BD", onset: "f" },
      { word: "jowl", display: "JOWL", cn: "\u989A\u3001\u988A", onset: "j" },
      { word: "prowl", display: "PROWL", cn: "\u6084\u6084\u89C5\u98DF", onset: "pr" },
      { word: "growl", display: "GROWL", cn: "\u4E0D\u5E73", onset: "gr" }
    ],
    tip: "OWL \u662F\u719F\u8BCD\uFF0COWL \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u58F0\u55E5\u53EB\u5168\u51FA\u573A\u3002"
  },
  {
    id: "ost",
    rime: "OST",
    title: "\u4E3B\u6301\u4EBA\u767D\u65E5\u649E\u9B3C",
    subtitle: "\u4E22\u5931\u90AE\u4EF6\u7684\u4EE3\u4EF7",
    scene: "/scenes/ost.jpg",
    onsets: ["h", "p", "l", "m", "c", "gh"],
    color: "#4A6FA5",
    story: [
      { text: "\u8282\u76EE\u4E3B\u6301\u4EBA", word: "host" },
      { text: "\u4E22\u5931", word: "lost" },
      { text: "\u4E86" },
      { text: "\u5927\u591A\u6570", word: "most" },
      { text: "\u90AE\u4EF6", word: "post" },
      { text: "\uFF0C\u4ED6\u4E3A\u6B64\u4ED8\u51FA\u7684" },
      { text: "\u4EE3\u4EF7", word: "cost" },
      { text: "\u662F\uFF1A\u767D\u65E5\u649E\u5230" },
      { text: "\u9B3C", word: "ghost" },
      { text: "\uFF01" }
    ],
    words: [
      { word: "host", display: "HOST", cn: "\u8282\u76EE\u4E3B\u6301\u4EBA", onset: "h" },
      { word: "lost", display: "LOST", cn: "\u4E22\u5931", onset: "l" },
      { word: "most", display: "MOST", cn: "\u5927\u591A\u6570", onset: "m" },
      { word: "post", display: "POST", cn: "\u90AE\u4EF6", onset: "p" },
      { word: "cost", display: "COST", cn: "\u4EE3\u4EF7", onset: "c" },
      { word: "ghost", display: "GHOST", cn: "\u9B3C", onset: "gh" }
    ],
    tip: "MOST \u662F\u719F\u8BCD\uFF0COST \u5BB6\u65CF 6 \u4E2A\u8BCD\u4E00\u6869\u649E\u9B3C\u5947\u8C08\u3002"
  },
  {
    id: "use2",
    rime: "USE",
    title: "\u51A5\u60F3\u4E09\u91CD\u5408",
    subtitle: "\u8033\u4E0E\u58F0\u5408\uFF0C\u8EAB\u4E0E\u5FC3\u5408\uFF0C\u4EBA\u4E0E\u5883\u5408",
    scene: "/scenes/use2.jpg",
    onsets: ["\xF8", "f", "m"],
    color: "#E15A3B",
    story: [
      { text: "\u4F7F\u7528", word: "use" },
      { text: "\u878D\u5408", word: "fuse" },
      { text: "\u7684\u65B9\u6CD5\u6700\u5BB9\u6613\u8FDB\u5165" },
      { text: "\u51A5\u60F3", word: "muse" },
      { text: "\u7684\u5883\u754C\uFF1A\u8033\u4E0E\u58F0\u5408\uFF0C\u8EAB\u4E0E\u5FC3\u5408\uFF0C\u4EBA\u4E0E\u5883\u5408\u3002" }
    ],
    words: [
      { word: "use", display: "USE", cn: "\u4F7F\u7528", onset: "\xF8" },
      { word: "fuse", display: "FUSE", cn: "\u878D\u5408\u3001\u7194\u5316", onset: "f" },
      { word: "muse", display: "MUSE", cn: "\u51A5\u60F3", onset: "m" }
    ],
    tip: "USE \u5BB6\u65CF\u53E6\u4E00\u89E3\uFF1AFUSE \u878D\u5408\u3001MUSE \u51A5\u60F3\u3002"
  },
  {
    id: "it",
    rime: "IT",
    title: "\u5730\u7A96\u91CC\u7684\u5C0F\u732B",
    subtitle: "\u72EC\u5750\u6728\u6876\u7247\u523B\u4E5F\u9002\u5B9C",
    scene: "/scenes/it.jpg",
    onsets: ["f", "w", "s", "p", "k", "b", "qu"],
    color: "#D9A441",
    story: [
      { text: "\u53EA\u8981\u6211\u4EEC\u591F" },
      { text: "\u673A\u667A\u3001\u98CE\u8DA3", word: "wit" },
      { text: "\uFF0C\u8BA9" },
      { text: "\u5C0F\u732B", word: "kit" },
      { text: "\u72EC" },
      { text: "\u5750", word: "sit" },
      { text: "\u5728" },
      { text: "\u5730\u7A96", word: "pit" },
      { text: "\u7684\u5C0F\u6728\u6876\u4E0A\u800C" },
      { text: "\u79BB\u5F00", word: "quit" },
      { text: "\u7247\u523B", word: "bit" },
      { text: "\u4E5F" },
      { text: "\u9002\u5B9C", word: "fit" },
      { text: "\u3002" }
    ],
    words: [
      { word: "wit", display: "WIT", cn: "\u673A\u667A\u3001\u98CE\u8DA3", onset: "w" },
      { word: "kit", display: "KIT", cn: "\u5C0F\u732B\u3001\u6728\u6876", onset: "k" },
      { word: "sit", display: "SIT", cn: "\u5750", onset: "s" },
      { word: "pit", display: "PIT", cn: "\u5730\u7A96", onset: "p" },
      { word: "quit", display: "QUIT", cn: "\u79BB\u5F00", onset: "qu" },
      { word: "bit", display: "BIT", cn: "\u7247\u523B", onset: "b" },
      { word: "fit", display: "FIT", cn: "\u914D\u5408\u3001\u9002\u5408", onset: "f" }
    ],
    tip: "SIT \u662F\u719F\u8BCD\uFF0CIT \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u53EA\u5C0F\u732B\u4E32\u8D77\u3002"
  },
  {
    id: "we2",
    rime: "WE",
    title: "\u5C0F\u9662\u9664\u8349\u8BB0",
    subtitle: "\u4F55\u5FC5\u4E3A\u8FD9\u70B9\u6742\u8349\u4E70\u9664\u8349\u673A",
    scene: "/scenes/we2.jpg",
    onsets: ["\xF8", "\xF8+e", "\xF8+ed", "\xF8+eder", "\xF8+ed out"],
    color: "#2F6F5E",
    story: [
      { text: "\u82E5\u8981" },
      { text: "\u9664\u53BB", word: "weed out" },
      { text: "\u5C0F" },
      { text: "\u5C0F\u7684", word: "wee" },
      { text: "\u9662\u5B50\u7684" },
      { text: "\u6742\u8349", word: "weed" },
      { text: "\uFF0C" },
      { text: "\u6211\u4EEC", word: "we" },
      { text: "\u4E0D\u4E00\u5B9A\u975E\u8981\u4F7F\u7528" },
      { text: "\u9664\u8349\u673A", word: "weeder" },
      { text: "\u3002" }
    ],
    words: [
      { word: "we", display: "WE", cn: "\u6211\u4EEC", onset: "\xF8" },
      { word: "wee", display: "WEE", cn: "\u5C0F\u7684", onset: "\xF8+e" },
      { word: "weed", display: "WEED", cn: "\u6742\u8349", onset: "\xF8+ed" },
      { word: "weeder", display: "WEEDER", cn: "\u9664\u8349\u673A", onset: "\xF8+eder" },
      { word: "weed out", display: "WEED OUT", cn: "\u9664\u53BB", onset: "\xF8+ed out" }
    ],
    tip: "WEED \u52A0 ER \u662F\u9664\u8349\u673A\uFF0C\u52A0 OUT \u662F\u9664\u53BB\u2014\u2014\u8BCD\u7EC4\u4E5F\u80FD\u8FDB\u8BCD\u65CF\u3002"
  },
  {
    id: "ize",
    rime: "IZE",
    title: "\u6760\u94C3\u5C3A\u5BF8\u4E0D\u5BF9",
    subtitle: "\u8981\u5B9E\u73B0\u76EE\u6807\u5148\u4E86\u89E3\u80FD\u529B",
    scene: "/scenes/ize.jpg",
    onsets: ["s", "pr", "se", "real"],
    color: "#C25E7E",
    story: [
      { text: "\u8981" },
      { text: "\u5B9E\u73B0", word: "realize" },
      { text: "\u76EE\u6807", word: "prize" },
      { text: "\uFF0C\u5F97\u5148" },
      { text: "\u4E86\u89E3", word: "seize" },
      { text: "\u81EA\u5DF1\u80FD\u529B\u7684\u201C" },
      { text: "\u5C3A\u5BF8", word: "size" },
      { text: "\u201D\u3002" }
    ],
    words: [
      { word: "realize", display: "REALIZE", cn: "\u5B9E\u73B0", onset: "real" },
      { word: "prize", display: "PRIZE", cn: "\u76EE\u6807\u3001\u5956\u54C1", onset: "pr" },
      { word: "seize", display: "SEIZE", cn: "\u4E86\u89E3\u3001\u6293\u7D27", onset: "se" },
      { word: "size", display: "SIZE", cn: "\u5C3A\u5BF8\u3001\u5927\u5C0F", onset: "s" }
    ],
    tip: "SIZE \u662F\u719F\u8BCD\uFF1A\u5C3A\u5BF8\u3001\u5956\u54C1\u3001\u6293\u7D27\u3001\u5B9E\u73B0\u2014\u2014IZE \u56DB\u8FDE\u3002"
  },
  {
    id: "ode",
    rime: "ODE",
    title: "\u661F\u76F8\u6CD5\u5178\u7684\u9882\u6B4C",
    subtitle: "\u9690\u85CF\u7740\u6BCF\u5E74\u6D41\u884C\u7684\u5146\u5934",
    scene: "/scenes/ode.jpg",
    onsets: ["\xF8", "b", "c", "m"],
    color: "#5B8C5A",
    story: [
      { text: "\u661F\u76F8" },
      { text: "\u6CD5\u5178", word: "code" },
      { text: "\u91CC\u7684" },
      { text: "\u9882\u6B4C", word: "ode" },
      { text: "\u9690\u85CF\u7740\u6BCF\u5E74" },
      { text: "\u6D41\u884C", word: "mode" },
      { text: "\u7684" },
      { text: "\u5146\u5934", word: "bode" },
      { text: "\u3002" }
    ],
    words: [
      { word: "code", display: "CODE", cn: "\u6CD5\u5178\u3001\u5BC6\u7801", onset: "c" },
      { word: "ode", display: "ODE", cn: "\u9882\u6B4C", onset: "\xF8" },
      { word: "mode", display: "MODE", cn: "\u6D41\u884C\u3001\u65B9\u6CD5", onset: "m" },
      { word: "bode", display: "BODE", cn: "\u9884\u5146", onset: "b" }
    ],
    tip: "CODE\u3001MODE \u90FD\u719F\uFF0CODE \u5BB6\u65CF\u56DB\u4E2A\u8BCD\u4E00\u518C\u661F\u76F8\u4E66\u3002"
  },
  {
    id: "udge",
    rime: "UDGE",
    title: "\u634F\u9020\u5224\u51B3\u7684\u4E0B\u573A",
    subtitle: "\u6E05\u767D\u4E00\u751F\u6709\u4E86\u6C61\u70B9",
    scene: "/scenes/udge.jpg",
    onsets: ["b", "f", "j", "dr", "sl", "sm", "tr"],
    color: "#7A5C9E",
    story: [
      { text: "\u7531\u4E8E" },
      { text: "\u634F\u9020", word: "fudge" },
      { text: "\u4E8B\u5B9E\u7684" },
      { text: "\u5224\u51B3", word: "judge" },
      { text: "\uFF0C\u4F7F\u5F97\u6E05\u767D\u7684\u4E00\u751F\u6709\u4E86" },
      { text: "\u6C61\u70B9", word: "smudge" },
      { text: "\uFF0C\u4E8E\u662F\u4ED6\u53EA\u597D" },
      { text: "\u8BA9\u6B65", word: "budge" },
      { text: "\uFF0C\u8FC8\u7740" },
      { text: "\u6C89\u91CD\u6B65\u4F10", word: "trudge" },
      { text: "\u5230" },
      { text: "\u6CE5\u6CDE", word: "sludge" },
      { text: "\u5730\u53BB" },
      { text: "\u505A\u82E6\u5DE5", word: "drudge" },
      { text: "\u3002" }
    ],
    words: [
      { word: "fudge", display: "FUDGE", cn: "\u634F\u9020", onset: "f" },
      { word: "judge", display: "JUDGE", cn: "\u5224\u51B3", onset: "j" },
      { word: "smudge", display: "SMUDGE", cn: "\u6C61\u70B9", onset: "sm" },
      { word: "budge", display: "BUDGE", cn: "\u8BA9\u6B65", onset: "b" },
      { word: "trudge", display: "TRUDGE", cn: "\u6C89\u91CD\u6B65\u4F10", onset: "tr" },
      { word: "sludge", display: "SLUDGE", cn: "\u6CE5\u6CDE", onset: "sl" },
      { word: "drudge", display: "DRUDGE", cn: "\u505A\u82E6\u5DE5", onset: "dr" }
    ],
    tip: "JUDGE \u662F\u719F\u8BCD\uFF0CUDGE \u5BB6\u65CF 7 \u4E2A\u8BCD\u4E00\u573A\u51A4\u6848\u3002"
  },
  {
    id: "ick2",
    rime: "ICK",
    title: "\u8001\u8C79\u7684\u8BE1\u8BA1\u8BFE",
    subtitle: "\u9009\u75C5\u9E21\u7ED9\u5FEB\u901F\u4E00\u8E22",
    scene: "/scenes/ick2.jpg",
    onsets: ["k", "p", "s", "ch", "tr", "qu", "cl"],
    color: "#B0762A",
    story: [
      { text: "\u8001\u8C79\u8BF4\uFF1A\u201C" },
      { text: "\u8BE1\u8BA1", word: "trick" },
      { text: "\u5728\u4E8E\uFF0C" },
      { text: "\u9009\u62E9", word: "pick" },
      { text: "\u6709" },
      { text: "\u75C5\u7684", word: "sick" },
      { text: "\u5C0F\u9E21", word: "chick" },
      { text: "\u6765\u653B\u51FB\uFF0C\u7ED9\u4E88" },
      { text: "\u5FEB\u901F", word: "quick" },
      { text: "\u7684\u4E00" },
      { text: "\u8E22", word: "kick" },
      { text: "\u3002\u201D\u5C0F\u8C79\u4E8E\u662F" },
      { text: "\u604D\u7136\u5927\u609F", word: "click" },
      { text: "\u3002" }
    ],
    words: [
      { word: "trick", display: "TRICK", cn: "\u8BE1\u8BA1", onset: "tr" },
      { word: "pick", display: "PICK", cn: "\u9009\u62E9", onset: "p" },
      { word: "sick", display: "SICK", cn: "\u75C5\u7684", onset: "s" },
      { word: "chick", display: "CHICK", cn: "\u5C0F\u9E21", onset: "ch" },
      { word: "quick", display: "QUICK", cn: "\u5FEB\u901F", onset: "qu" },
      { word: "kick", display: "KICK", cn: "\u8E22", onset: "k" },
      { word: "click", display: "CLICK", cn: "\u604D\u7136\u5927\u609F\u3001\u70B9\u51FB", onset: "cl" }
    ],
    tip: "ICK \u5BB6\u65CF\u53E6\u4E00\u4E32\uFF1A\u8001\u8C79\u7684\u72E9\u730E\u8BE1\u8BA1\u8BFE\u3002"
  },
  {
    id: "aw",
    rime: "AW",
    title: "\u753B\u753B\u9632\u9E1F\u6307\u5357",
    subtitle: "\u614E\u9632\u5438\u7BA1\u548C\u722A\u4FB5\u8680\u753B\u9762",
    scene: "/scenes/aw.jpg",
    onsets: ["cl", "dr", "fl", "gn", "str", "th"],
    color: "#3E7CA6",
    story: [
      { text: "\u753B\u753B", word: "draw" },
      { text: "\u5176\u5B9E\u4E0D\u96BE\uFF0C\u5148\u7528\u677E\u8282\u6CB9" },
      { text: "\u6EB6\u89E3", word: "thaw" },
      { text: "\u989C\u6599\uFF0C\u5E76\u614E\u9632" },
      { text: "\u5438\u7BA1", word: "straw" },
      { text: "\u548C" },
      { text: "\u722A", word: "claw" },
      { text: "\u53BB" },
      { text: "\u4FB5\u8680", word: "gnaw" },
      { text: "\u800C\u5BFC\u81F4\u753B\u9762\u7684" },
      { text: "\u7455\u75B5", word: "flaw" },
      { text: "\u3002" }
    ],
    words: [
      { word: "draw", display: "DRAW", cn: "\u7ED8\u753B", onset: "dr" },
      { word: "thaw", display: "THAW", cn: "\u878D\u5316\u3001\u6EB6\u89E3", onset: "th" },
      { word: "straw", display: "STRAW", cn: "\u5438\u7BA1", onset: "str" },
      { word: "claw", display: "CLAW", cn: "\u722A", onset: "cl" },
      { word: "gnaw", display: "GNAW", cn: "\u4FB5\u8680", onset: "gn" },
      { word: "flaw", display: "FLAW", cn: "\u7455\u75B5", onset: "fl" }
    ],
    tip: "DRAW \u662F\u719F\u8BCD\uFF0CAW \u5BB6\u65CF 6 \u4E2A\u8BCD\u4E00\u5802\u7ED8\u753B\u8BFE\u3002"
  },
  {
    id: "oll",
    rime: "OLL",
    title: "\u6D0B\u5A03\u5A03\u53BB\u6295\u7968",
    subtitle: "\u51B3\u5B9A\u662F\u5426\u5F81\u6536\u901A\u884C\u7A0E",
    scene: "/scenes/oll.jpg",
    onsets: ["p", "t", "d", "r", "dr", "kn"],
    color: "#4A6FA5",
    story: [
      { text: "\u6D0B\u5A03\u5A03", word: "doll" },
      { text: "\u6ED1\u7A3D", word: "droll" },
      { text: "\u5730" },
      { text: "\u6EDA\u52A8", word: "roll" },
      { text: "\u5230" },
      { text: "\u5C0F\u5C71\u4E18", word: "knoll" },
      { text: "\u4E0A\u53C2\u52A0" },
      { text: "\u6295\u7968", word: "poll" },
      { text: "\uFF0C\u51B3\u5B9A\u662F\u5426\u5F81\u6536" },
      { text: "\u901A\u884C\u7A0E", word: "toll" },
      { text: "\u3002" }
    ],
    words: [
      { word: "doll", display: "DOLL", cn: "\u6D0B\u5A03\u5A03", onset: "d" },
      { word: "droll", display: "DROLL", cn: "\u6ED1\u7A3D", onset: "dr" },
      { word: "roll", display: "ROLL", cn: "\u6EDA\u52A8", onset: "r" },
      { word: "knoll", display: "KNOLL", cn: "\u5C0F\u5C71\u4E18", onset: "kn" },
      { word: "poll", display: "POLL", cn: "\u6295\u7968", onset: "p" },
      { word: "toll", display: "TOLL", cn: "\u901A\u884C\u7A0E", onset: "t" }
    ],
    tip: "DOLL \u662F\u719F\u8BCD\uFF0COLL \u5BB6\u65CF 6 \u4E2A\u8BCD\u6EDA\u4E0A\u5C0F\u5C71\u4E18\u3002"
  },
  {
    id: "ind",
    rime: "IND",
    title: "\u7ED9\u5FC3\u7075\u677E\u7ED1",
    subtitle: "\u8BA9\u98CE\u5439\u5230\u540E\u8111\u52FA",
    scene: "/scenes/ind.jpg",
    onsets: ["b", "f", "h", "k", "m", "r", "w"],
    color: "#E15A3B",
    story: [
      { text: "\u4E3A\u5FC3\u7075\u677E" },
      { text: "\u7ED1", word: "bind" },
      { text: "\uFF0C\u6253\u5F00" },
      { text: "\u5934\u8111", word: "mind" },
      { text: "\u7684" },
      { text: "\u5916\u58F3", word: "rind" },
      { text: "\u8BA9" },
      { text: "\u98CE", word: "wind" },
      { text: "\u5439\u5230" },
      { text: "\u540E\u9762", word: "hind" },
      { text: "\uFF0C\u4F60\u4F1A" },
      { text: "\u53D1\u73B0", word: "find" },
      { text: "\u5404\u79CD", word: "kind" },
      { text: "\u4F18\u826F\u7684\u5FC3\u667A\u5C55\u73B0\u3002" }
    ],
    words: [
      { word: "bind", display: "BIND", cn: "\u6346\u3001\u7ED1", onset: "b" },
      { word: "mind", display: "MIND", cn: "\u5934\u8111\u3001\u5FC3\u667A", onset: "m" },
      { word: "rind", display: "RIND", cn: "\u5916\u58F3", onset: "r" },
      { word: "wind", display: "WIND", cn: "\u98CE\u3001\u547C\u5438", onset: "w" },
      { word: "hind", display: "HIND", cn: "\u540E\u9762", onset: "h" },
      { word: "find", display: "FIND", cn: "\u53D1\u73B0", onset: "f" },
      { word: "kind", display: "KIND", cn: "\u5404\u79CD", onset: "k" }
    ],
    tip: "FIND\u3001KIND\u3001MIND\u3001WIND \u90FD\u719F\u2014\u2014IND \u5BB6\u65CF\u5168\u9AD8\u9891\u3002"
  },
  {
    id: "ell",
    rime: "ELL",
    title: "\u8D1D\u5C14\u6447\u94C3\u529D\u732B",
    subtitle: "\u63A8\u9500\u7D20\u98DF\u522B\u518D\u5403\u8001\u9F20",
    scene: "/scenes/ell.jpg",
    onsets: ["b", "f", "s", "t", "w", "y"],
    color: "#D9A441",
    story: [
      { text: "\u8D1D\u5C14\u6447\u7740" },
      { text: "\u94C3", word: "bell" },
      { text: "\u5411" },
      { text: "\u51F6\u731B", word: "fell" },
      { text: "\u7684\u732B" },
      { text: "\u5450\u558A", word: "yell" },
      { text: "\uFF0C" },
      { text: "\u8BB2\u8FF0", word: "tell" },
      { text: "\u4ED6\u7684" },
      { text: "\u6210\u529F", word: "well" },
      { text: "\u63A8\u9500", word: "sell" },
      { text: "\u672F\u3002" }
    ],
    words: [
      { word: "bell", display: "BELL", cn: "\u949F\u3001\u94C3", onset: "b" },
      { word: "fell", display: "FELL", cn: "\u51F6\u731B\u7684", onset: "f" },
      { word: "yell", display: "YELL", cn: "\u5450\u558A", onset: "y" },
      { word: "tell", display: "TELL", cn: "\u544A\u8BC9\u3001\u8BB2\u8FF0", onset: "t" },
      { word: "well", display: "WELL", cn: "\u6210\u529F\u5730", onset: "w" },
      { word: "sell", display: "SELL", cn: "\u63A8\u9500", onset: "s" }
    ],
    tip: "BELL\u3001TELL\u3001SELL \u90FD\u719F\uFF0CELL \u5BB6\u65CF\u4E00\u53EA\u94C3\u94DB\u732B\u3002"
  }
];

// src/data/families-batch5.ts
var familiesBatch5 = [
  {
    id: "ip",
    rime: "IP",
    title: "\u5927\u4EBA\u7269\u7684\u6E29\u6CC9\u7B79\u7801",
    subtitle: "\u6CE1\u7740\u6E29\u6CC9\u559D\u7F8E\u9152\uFF0C\u7528\u7EB8\u8239\u76D8\u7B97",
    scene: "/scenes/ip.jpg",
    onsets: ["v", "t", "z", "h", "d", "l", "s", "sh", "ch"],
    color: "#7A5C9E",
    story: [
      { text: "\u5927\u4EBA\u7269", word: "vip" },
      { text: "\u4FDD\u6301" },
      { text: "\u5C16\u7AEF", word: "tip" },
      { text: "\u7CBE\u529B", word: "zip" },
      { text: "\u7684\u79D8\u8BC0\u662F\uFF1A\u6BCF\u5F53\u7D2F\u7684\u65F6\u5019\uFF0C\u4ED6\u4F1A\u5C06" },
      { text: "\u5C41\u80A1", word: "hip" },
      { text: "\u6D78\u6CE1", word: "dip" },
      { text: "\u5728\u6E29\u6CC9\u91CC\uFF0C" },
      { text: "\u5634\u5507", word: "lip" },
      { text: "\u555C\u996E", word: "sip" },
      { text: "\u7740\u7F8E\u9152\uFF0C\u7528\u7EB8\u6298\u7684" },
      { text: "\u8239", word: "ship" },
      { text: "\u5F53" },
      { text: "\u7B79\u7801", word: "chip" },
      { text: "\u76D8\u7B97\u3002" }
    ],
    words: [
      { word: "vip", display: "VIP", cn: "\u5927\u4EBA\u7269", onset: "v" },
      { word: "tip", display: "TIP", cn: "\u5C16\u7AEF", onset: "t" },
      { word: "zip", display: "ZIP", cn: "\u7CBE\u529B", onset: "z" },
      { word: "hip", display: "HIP", cn: "\u5C41\u80A1", onset: "h" },
      { word: "dip", display: "DIP", cn: "\u6D78\u6CE1", onset: "d" },
      { word: "lip", display: "LIP", cn: "\u5634\u5507", onset: "l" },
      { word: "sip", display: "SIP", cn: "\u555C\u996E", onset: "s" },
      { word: "ship", display: "SHIP", cn: "\u8239", onset: "sh" },
      { word: "chip", display: "CHIP", cn: "\u7B79\u7801\u3001\u788E\u7247", onset: "ch" }
    ],
    tip: "\u5728 Y \u8F74\u5199\u4E0A V\u3001T\u3001Z\u3001H\u3001D\u3001L\u3001S\u3001SH\u3001CH\uFF0C\u5E73\u884C X \u8F74\u5199\u4E0A IP\uFF0C\u7528\u4E00\u573A\u6E29\u6CC9\u7B79\u7801\u620F\u4E00\u53E3\u6C14\u8BB0\u4F4F 9 \u4E2A\u5355\u8BCD\u3002"
  }
];

// src/data/families-batch6.ts
var colors = ["#4A6FA5", "#E15A3B", "#D9A441", "#2F6F5E", "#C25E7E", "#7A5C9E", "#B0762A", "#3E7CA6"];
function segmentStory(text, links) {
  const segments = [];
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
function deriveOnset(word, rime) {
  const lowerRime = rime.toLowerCase();
  if (word.endsWith(lowerRime)) return word.slice(0, -lowerRime.length) || "\xF8";
  if (word.startsWith(lowerRime)) return `\xF8+${word.slice(lowerRime.length)}`;
  return word.toUpperCase();
}
var seeds = [
  { id: "igh", rime: "IGH", title: "\u77ED\u817F\u8001\u9F20\u53F9\u706F\u53F0", story: "\u5C0F\u8001\u9F20\u60F3\u4E0A\u706F\u53F0\u5077\u6CB9\u5403\uFF0C\u4F46\u5728\u706F\u53F0\u9644\u8FD1\u53F9\u6C14\u9053\uFF1A\u201C\u706F\u53F0\u592A\u9AD8\uFF0C\u53EA\u602A\u81EA\u5DF1\u5927\u817F\u592A\u77ED\u3002\u201D", links: [["\u9644\u8FD1", "nigh"], ["\u53F9\u6C14", "sigh"], ["\u9AD8", "high"], ["\u5927\u817F", "thigh"]], words: [["high", "\u9AD8"], ["nigh", "\u9644\u8FD1"], ["sigh", "\u53F9\u6C14"], ["thigh", "\u5927\u817F\u3001\u5927\u817F\u9AA8"]] },
  { id: "lush", rime: "LUSH", title: "\u9189\u6C49\u9519\u8BA4\u878D\u96EA\u4E3A\u4E1D\u7ED2", story: "\u9189\u6C49\u559D\u5F97\u9189\u91BA\u91BA\u65F6\uFF0C\u4E0D\u4F46\u4F1A\u8138\u7EA2\u6FC0\u52A8\uFF0C\u66F4\u4F1A\u628A\u878D\u96EA\u9519\u770B\u6210\u4E1D\u7ED2\u3002", links: [["\u9189\u91BA\u91BA", "lush"], ["\u8138\u7EA2", "blush"], ["\u6FC0\u52A8", "flush"], ["\u878D\u96EA", "slush"], ["\u4E1D\u7ED2", "plush"]], words: [["lush", "\u9189\u91BA\u91BA"], ["blush", "\u8138\u7EA2"], ["flush", "\u6FC0\u52A8"], ["plush", "\u4E1D\u7ED2"], ["slush", "\u878D\u96EA\u3001\u6CE5\u6CDE"]] },
  { id: "ow", rime: "OW", title: "\u6BCD\u732A\u62D6\u5F69\u8679\u6536\u661F\u8FB0", story: "\u6BCD\u732A\u62D6\u66F3\u7740\u5F13\u5F62\u7684\u8679\uFF0C\u63A0\u8FC7\u4F4E\u7A7A\u53BB\u6536\u5272\u661F\u8FB0\u3002", links: [["\u6BCD\u732A", "sow"], ["\u62D6\u66F3", "tow"], ["\u5F13", "bow"], ["\u4F4E", "low"], ["\u6536\u5272", "mow"]], words: [["low", "\u4F4E"], ["mow", "\u5272\u3001\u5208"], ["sow", "\u6BCD\u732A"], ["tow", "\u62D6\u66F3"], ["bow", "\u5F13\u3001\u8679"]] },
  { id: "ab", rime: "AB", title: "\u63A2\u5458\u731B\u51FB\u9976\u820C\u6B4C\u624B", story: "\u4E4C\u9F99\u63A2\u5458\u6234\u7740\u62A4\u8033\u5230\u5B9E\u9A8C\u5BA4\u902E\u6355\u9976\u820C\u6B4C\u624B\uFF0C\u4E00\u9635\u731B\u51FB\u540E\u624D\u89C1\u8BC6\u4EC0\u4E48\u662F\u9976\u820C\u4E4B\u5544\u3002", links: [["\u62A4\u8033", "tab"], ["\u5B9E\u9A8C\u5BA4", "lab"], ["\u902E\u6355", "nab"], ["\u9976\u820C", "gab"], ["\u731B\u51FB", "jab"], ["\u5544", "dab"]], words: [["tab", "\u62A4\u8033"], ["lab", "\u5B9E\u9A8C\u5BA4\u3001\u7814\u7A76\u6240"], ["nab", "\u902E\u6355"], ["gab", "\u9976\u820C"], ["jab", "\u731B\u51FB"], ["dab", "\u5544"]] },
  { id: "unt", rime: "UNT", title: "\u5C0F\u5BB6\u755C\u641C\u5BFB\u961F", story: "\u7531\u4E8E\u7387\u76F4\uFF0C\u4ED6\u88AB\u63A8\u4E3A\u641C\u5BFB\u77EE\u5C0F\u5BB6\u755C\u7684\u4E3B\u529B\u3002\u4ED6\u53D1\u7262\u9A9A\u8BF4\uFF1A\u201C\u592A\u591A\u5DE5\u4F5C\u4F1A\u59A8\u788D\u6211\u7684\u53D1\u80B2\u3002\u201D", links: [["\u7387\u76F4", "blunt"], ["\u63A8", "bunt"], ["\u641C\u5BFB", "hunt"], ["\u77EE\u5C0F\u5BB6\u755C", "runt"], ["\u4E3B\u529B", "brunt"], ["\u53D1\u7262\u9A9A", "grunt"], ["\u59A8\u788D\u6211\u7684\u53D1\u80B2", "stunt"]], words: [["bunt", "\u63A8"], ["hunt", "\u641C\u7D22"], ["runt", "\u77EE\u5C0F\u7684\u5BB6\u755C"], ["blunt", "\u7387\u76F4"], ["brunt", "\u4E3B\u529B"], ["grunt", "\u53D1\u7262\u9A9A"], ["stunt", "\u59A8\u788D\u53D1\u80B2"]] },
  { id: "ull", rime: "ULL", title: "\u8C37\u4ED3\u91CC\u7684\u9AD8\u4E2A\u4E61\u4E0B\u4F6C", story: "\u8EAB\u9AD82.4\u7C73\u7684\u4E61\u4E0B\u4F6C\u6CA1\u53BB\u516C\u725B\u961F\u6253\u7403\uFF0C\u5374\u5728\u6666\u6697\u7684\u8C37\u4ED3\u91CC\u5B89\u9759\u5730\u62E9\u835A\u58F3\uFF0C\u771F\u662F\u6700\u5927\u7684\u66B4\u6B84\u5929\u7269\u3002", links: [["\u4E61\u4E0B\u4F6C", "gull"], ["\u6666\u6697", "dull"], ["\u5B89\u9759", "lull"], ["\u62E9", "cull"], ["\u835A\u58F3", "hull"], ["\u6700\u5927", "full"]], words: [["cull", "\u62E9"], ["dull", "\u6666\u6697"], ["full", "\u6700\u5927\u7684"], ["gull", "\u4E61\u4E0B\u4F6C"], ["hull", "\u835A\u58F3"], ["lull", "\u5B89\u9759"]] },
  { id: "ink2", rime: "INK", title: "\u76D1\u7262\u544A\u5BC6\u8005\u7684\u574F\u540D\u58F0", story: "\u76D1\u7262\u91CC\u7684\u544A\u5BC6\u8005\u7528\u58A8\u6C34\u5199\u544A\u5BC6\u51FD\uFF0C\u4ED6\u6700\u754F\u602F\u7684\u662F\uFF1A\u5F53\u602A\u7656\u6076\u884C\u88AB\u6293\u5230\u65F6\uFF0C\u574F\u540D\u58F0\u4F1A\u5728\u7728\u773C\u95F4\u50CF\u843D\u65E5\u822C\u4E0B\u6C89\u3002", links: [["\u76D1\u7262", "clink"], ["\u544A\u5BC6\u8005", "fink"], ["\u58A8\u6C34", "ink"], ["\u754F\u602F", "shrink"], ["\u602A\u7656", "kink"], ["\u574F\u540D\u58F0", "stink"], ["\u7728\u773C", "blink"], ["\u4E0B\u6C89", "sink"]], words: [["ink", "\u58A8\u6C34"], ["fink", "\u544A\u5BC6\u8005"], ["kink", "\u602A\u7656"], ["sink", "\u4E0B\u6C89"], ["stink", "\u574F\u540D\u58F0"], ["blink", "\u7728\u773C"], ["clink", "\u76D1\u7262"], ["shrink", "\u754F\u602F"]] },
  { id: "eg", rime: "EG", title: "\u65AD\u817F\u4E5E\u4E10\u7684\u767E\u4E07\u501F\u53E3", story: "\u5C11\u4E86\u4E00\u6761\u817F\u662F\u4ED6\u4E5E\u8BA8\u7684\u501F\u53E3\uFF0C\u4F46\u7528\u5C0F\u6876\u88C5\u94B1\uFF0C\u5F00\u53E3\u53C8\u662F\u767E\u4E07\u7684\u5B57\u9996\uFF0C\u80FD\u8981\u5230\u94B1\u624D\u602A\u3002", links: [["\u817F", "leg"], ["\u4E5E\u8BA8", "beg"], ["\u501F\u53E3", "peg"], ["\u5C0F\u6876", "keg"], ["\u767E\u4E07", "mega"]], words: [["beg", "\u4E5E\u8BA8\u3001\u6073\u6C42"], ["keg", "\u5C0F\u6876"], ["leg", "\u817F"], ["mega", "\u8868\u793A\u767E\u4E07\u7684\u5B57\u9996", "MEGA-"], ["peg", "\u9489\u5B50\u3001\u501F\u53E3"]] },
  { id: "ight2", rime: "IGHT", title: "\u591C\u95F4\u6218\u6597\u7684\u706F\u5149", story: "\u4E3A\u4E86\u63D0\u9AD8\u591C\u95F4\u6253\u4ED7\u7684\u80FD\u529B\uFF0C\u5B83\u5C06\u706F\u5149\u56FA\u5B9A\u5F97\u66F4\u7262\u56FA\uFF0C\u597D\u8BA9\u53F3\u773C\u7684\u89C6\u529B\u66F4\u597D\u3002", links: [["\u591C\u95F4", "night"], ["\u6253\u4ED7", "fight"], ["\u80FD\u529B", "might"], ["\u706F\u5149", "light"], ["\u7262\u56FA", "tight"], ["\u53F3", "right"], ["\u89C6\u529B", "sight"]], words: [["fight", "\u6253\u4ED7"], ["light", "\u706F\u5149"], ["might", "\u80FD\u529B"], ["night", "\u591C\u665A"], ["right", "\u53F3"], ["sight", "\u89C6\u529B"], ["tight", "\u7262\u56FA"]] },
  { id: "zzz", rime: "ZZZ", title: "\u5B57\u5178\u6700\u540E\u7684\u6253\u9F3E\u58F0", story: "\u4F60\u4EE5\u4E3A ZZZ \u53EA\u662F\u6F2B\u753B\u5BB6\u7684\u6253\u9F3E\u7B26\u53F7\uFF0C\u5176\u5B9E\u5B83\u4E5F\u662F\u725B\u6D25\u5B57\u5178\u7684\u6700\u540E\u4E00\u4E2A\u5B57\uFF0C\u548C ZIZZ\u3001DOZE \u4E00\u6837\u90FD\u5728\u6253\u778C\u7761\u3002", links: [["ZZZ", "zzz"], ["ZIZZ", "zizz"], ["DOZE", "doze"]], words: [["zzz", "\u6253\u9F3E\u58F0"], ["zizz", "\u6253\u778C\u7761", "ZI"], ["doze", "\u6253\u778C\u7761", "DOZE"]] },
  { id: "oak", rime: "OAK", title: "\u6A61\u6811\u4E0B\u7684\u6E7F\u6597\u7BF7", story: "\u4ED6\u62B1\u6028\u8BF4\uFF1A\u201C\u4E0B\u5927\u96E8\u65F6\u6211\u8EAB\u7A7F\u6597\u7BF7\u8EB2\u5728\u6A61\u6811\u4E0B\uFF0C\u5374\u9519\u8BA4\u6210\u71D5\u9EA6\u7247\u5904\uFF0C\u5168\u8EAB\u8FD8\u662F\u88AB\u6DCB\u5F97\u6E7F\u900F\u3002\u201D", links: [["\u62B1\u6028", "croak"], ["\u6597\u7BF7", "cloak"], ["\u6A61\u6811", "oak"], ["\u71D5\u9EA6\u7247", "oat"], ["\u6E7F\u900F", "soak"]], words: [["oak", "\u6A61\u6811"], ["soak", "\u6E7F\u900F\u3001\u6CE1\u6D78"], ["cloak", "\u6597\u7BF7"], ["croak", "\u62B1\u6028"], ["oat", "\u71D5\u9EA6\u7247", "OAT"]] },
  { id: "out", rime: "OUT", title: "\u75DB\u98CE\u7403\u5458\u7684\u51FA\u5C40\u501F\u53E3", story: "\u7CCA\u6D82\u4EBA\u88AB\u5224\u51FA\u5C40\uFF0C\u4ED6\u6485\u5634\u8BF4\uFF1A\u201C\u8FD9\u4E00\u56DE\u5408\u6211\u51FB\u7403\u5927\u8D25\uFF0C\u662F\u56E0\u4E3A\u75DB\u98CE\u62DB\u6765\u7684\u5931\u8D25\u3002\u201D", links: [["\u7CCA\u6D82\u4EBA", "lout"], ["\u51FA\u5C40", "out"], ["\u6485\u5634", "pout"], ["\u56DE\u5408", "bout"], ["\u5927\u8D25", "rout"], ["\u75DB\u98CE", "gout"], ["\u62DB\u6765", "tout"]], words: [["out", "\u51FA\u5C40"], ["bout", "\u4E00\u56DE\u5408"], ["gout", "\u75DB\u98CE"], ["lout", "\u7CCA\u6D82\u4EBA"], ["pout", "\u6485\u5634"], ["rout", "\u5927\u8D25"], ["tout", "\u62DB\u6765"]] },
  { id: "ation", rime: "ATION", title: "\u901A\u80C0\u4E0B\u7684\u5EB7\u4E43\u99A8\u5047\u671F", story: "\u56FD\u5BB6\u914D\u7ED9\u5173\u7CFB\u5F15\u8D77\u901A\u8D27\u81A8\u80C0\uFF0C\u4E8E\u662F\u4EBA\u4EEC\u53EA\u597D\u4F11\u5047\u5230\u8F66\u7AD9\u5356\u5EB7\u4E43\u99A8\u3002", links: [["\u56FD\u5BB6", "nation"], ["\u914D\u7ED9", "ration"], ["\u5173\u7CFB", "relation"], ["\u901A\u8D27\u81A8\u80C0", "inflation"], ["\u4F11\u5047", "vacation"], ["\u8F66\u7AD9", "station"], ["\u5EB7\u4E43\u99A8", "carnation"]], words: [["nation", "\u56FD\u5BB6"], ["ration", "\u914D\u7ED9"], ["station", "\u8F66\u7AD9"], ["vacation", "\u4F11\u5047"], ["carnation", "\u5EB7\u4E43\u99A8"], ["inflation", "\u901A\u8D27\u81A8\u80C0"], ["relation", "\u5173\u7CFB"]] },
  { id: "gle", rime: "GLE", title: "\u8001\u9E70\u8DE8\u6D0B\u5077\u6E21\u8BB0", story: "\u4ECE\u8001\u9E70\u7684\u89C2\u70B9\u6765\u770B\uFF0C\u5B9E\u5728\u5206\u4E0D\u6E05\u5B83\u4ECE\u897F\u4F2F\u5229\u4E9A\u98DE\u5230\u5317\u7F8E\u6D32\u7B97\u594B\u6597\u8FD8\u662F\u5077\u6E21\u3002", links: [["\u8001\u9E70", "eagle"], ["\u89C2\u70B9", "angle"], ["\u594B\u6597", "struggle"], ["\u5077\u6E21", "smuggle"]], words: [["angle", "\u89D2\u5EA6\u3001\u89C2\u70B9"], ["eagle", "\u8001\u9E70"], ["smuggle", "\u5077\u6E21\u3001\u8D70\u79C1"], ["struggle", "\u594B\u6597"]] },
  { id: "ose", rime: "OSE", title: "\u4E22\u4E86\u9F3B\u5B50\u7684\u73AB\u7470\u59FF\u6001", story: "\u8C01\u7684\u9F3B\u5B50\u9057\u5931\u4E86\uFF0C\u8C01\u5C31\u5931\u53BB\u4E86\u59FF\u6001\uFF0C\u7528\u4E00\u4EFD\u73AB\u7470\u4F5C\u8865\u6551\u6216\u8BB8\u80FD\u6682\u4EE3\u4E00\u65F6\u3002", links: [["\u8C01\u7684", "whose"], ["\u9F3B\u5B50", "nose"], ["\u9057\u5931", "lose"], ["\u59FF\u6001", "pose"], ["\u4E00\u4EFD", "dose"], ["\u73AB\u7470", "rose"]], words: [["nose", "\u9F3B\u5B50"], ["lose", "\u9057\u5931"], ["pose", "\u59FF\u52BF\u3001\u67B6\u52BF"], ["rose", "\u73AB\u7470"], ["dose", "\u4E00\u5E16\u3001\u4E00\u4EFD"], ["whose", "\u8C01\u7684"]] },
  { id: "art2", rime: "ART", title: "\u516C\u9E7F\u7684\u5C16\u9178\u827A\u5C55\u8BC4\u8BBA", story: "\u516C\u9E7F\u5F00\u7740\u5C0F\u73A9\u5177\u8F66\u5230\u5E02\u573A\u770B\u65F6\u9AE6\u7684\u827A\u672F\u5C55\uFF0C\u770B\u5B8C\u4E00\u90E8\u5206\u540E\u5C16\u9178\u5730\u8BF4\uFF1A\u201C\u72D7\u5C41\u827A\u672F\u5C11\u552C\u4EBA\u4E86\u3002\u201D", links: [["\u516C\u9E7F", "hart"], ["\u5C0F\u73A9\u5177\u8F66", "kart"], ["\u5E02\u573A", "mart"], ["\u65F6\u9AE6", "smart"], ["\u827A\u672F", "art"], ["\u4E00\u90E8\u5206", "part"], ["\u5C16\u9178", "tart"]], words: [["art", "\u827A\u672F"], ["hart", "\u516C\u9E7F"], ["kart", "\u5C0F\u73A9\u5177\u8F66"], ["mart", "\u5E02\u573A"], ["part", "\u4E00\u90E8\u5206"], ["tart", "\u5C16\u9178\u7684"], ["smart", "\u65F6\u9AE6\u7684"]] },
  { id: "moo", rime: "MOO", title: "\u6708\u4E0B\u6076\u60DA\u7684\u9E8B\u9E7F", story: "\u9E8B\u9E7F\u54DE\u54DE\u5730\u5BF9\u6469\u5C14\u4EBA\u8BF4\uFF1A\u201C\u662F\u6708\u4EAE\u7684\u6C14\u6C1B\u4F7F\u6211\u60C5\u7EEA\u6076\u60DA\uFF0C\u624D\u88AB\u4F60\u902E\u4F4F\u3002\u201D", links: [["\u9E8B\u9E7F", "moose"], ["\u54DE\u54DE", "moo"], ["\u6469\u5C14\u4EBA", "moor"], ["\u6708\u4EAE", "moon"], ["\u6C14\u6C1B", "mood"], ["\u6076\u60DA", "moony"]], words: [["moo", "\u725B\u53EB\u58F0"], ["moor", "\u6469\u5C14\u4EBA"], ["moon", "\u6708\u4EAE"], ["mood", "\u6C14\u6C1B\u3001\u60C5\u7EEA"], ["moose", "\u9E8B\u9E7F"], ["moony", "\u6076\u60DA"]] },
  { id: "ub", rime: "UB", title: "\u82F1\u5F0F\u9152\u5427\u7684\u6728\u76C6\u9677\u9631", story: "\u5E7C\u7A1A\u7684\u5E74\u8F7B\u4EBA\u521D\u6B21\u5230\u82F1\u5F0F\u9152\u5427\u6216\u4FF1\u4E50\u90E8\u65F6\uFF0C\u5F97\u5148\u64E6\u4EAE\u773C\u775B\uFF0C\u522B\u592A\u9760\u8FD1\u4FF1\u4E50\u90E8\u4E2D\u5FC3\u7684\u6728\u76C6\u3002", links: [["\u5E74\u8F7B\u4EBA", "cub"], ["\u82F1\u5F0F\u9152\u5427", "pub"], ["\u4FF1\u4E50\u90E8", "club"], ["\u64E6\u4EAE", "rub"], ["\u4E2D\u5FC3", "hub"], ["\u6728\u76C6", "tub"]], words: [["cub", "\u5E7C\u517D\u3001\u5E74\u8F7B\u4EBA"], ["hub", "\u4E2D\u5FC3"], ["rub", "\u64E6\u4EAE"], ["pub", "\u82F1\u5F0F\u9152\u5427"], ["tub", "\u6728\u76C6"], ["club", "\u4FF1\u4E50\u90E8"]] },
  { id: "ute2", rime: "UTE", title: "\u7011\u5E03\u964D\u843D\u4F1E\u7CBE\u51C6\u4E00\u8DC3", story: "\u4ECE\u7011\u5E03\u4E0A\u8DF3\u964D\u843D\u4F1E\u65F6\uFF0C\u8981\u6C89\u9ED8\u3001\u654F\u9510\uFF0C\u4EE5\u53EF\u7231\u7684\u59FF\u52BF\u7CBE\u786E\u5730\u8DC3\u5411\u964D\u843D\u5B9A\u70B9\u3002", links: [["\u7011\u5E03", "chute"], ["\u964D\u843D\u4F1E", "chute"], ["\u6C89\u9ED8", "mute"], ["\u654F\u9510", "acute"], ["\u53EF\u7231", "cute"]], words: [["cute", "\u53EF\u7231"], ["mute", "\u6C89\u9ED8"], ["acute", "\u654F\u9510"], ["chute", "\u964D\u843D\u4F1E\u3001\u7011\u5E03"]] },
  { id: "ad", rime: "AD", title: "\u574F\u5E7F\u544A\u8BA9\u5B69\u5B50\u75F4\u8FF7", story: "\u7238\u7238\u5750\u5728\u57AB\u5B50\u4E0A\u60B2\u54C0\u5730\u8BF4\uFF1A\u201C\u6076\u68CD\u5236\u4F5C\u4E86\u574F\u5E7F\u544A\uFF0C\u9020\u6210\u5C0F\u5B69\u5B50\u4EEC\u75F4\u8FF7\u72C2\u70ED\u4E00\u65F6\uFF0C\u8FD9\u5F88\u4E0D\u597D\u3002\u201D", links: [["\u7238\u7238", "dad"], ["\u57AB\u5B50", "pad"], ["\u60B2\u54C0", "sad"], ["\u6076\u68CD", "cad"], ["\u574F", "bad"], ["\u5E7F\u544A", "ad"], ["\u5C0F\u5B69\u5B50", "tad"], ["\u75F4\u8FF7", "mad"], ["\u72C2\u70ED\u4E00\u65F6", "fad"]], words: [["ad", "\u5E7F\u544A"], ["bad", "\u574F"], ["cad", "\u6076\u68CD"], ["dad", "\u7238\u7238"], ["fad", "\u72C2\u70ED\u4E00\u65F6"], ["mad", "\u75AF\u72C2\u3001\u75F4\u8FF7"], ["pad", "\u57AB\u5B50"], ["sad", "\u60B2\u54C0"], ["tad", "\u5C0F\u5B69\u5B50"]] },
  { id: "air", rime: "AIR", title: "\u5929\u964D\u5934\u53D1\u5F15\u51FA\u7269\u7406\u5B9A\u5F8B", story: "\u7531\u4E8E\u5929\u7A7A\u843D\u4E0B\u4E00\u6839\u6BDB\u53D1\uFF0C\u5F15\u53D1\u4ED6\u7684\u7B2C\u516D\u611F\u5230\u5E02\u96C6\u51D1\u5BF9\u6905\u5B50\uFF0C\u6765\u8BC1\u660E\u7269\u7406\u539F\u7406\uFF0C\u4F7F\u81EA\u5DF1\u7684 IQ \u53C8\u8FDB\u4E00\u7EA7\u3002", links: [["\u5929\u7A7A", "air"], ["\u6BDB\u53D1", "hair"], ["\u7B2C\u516D\u611F", "flair"], ["\u5E02\u96C6", "fair"], ["\u51D1\u5BF9", "pair"], ["\u6905\u5B50", "chair"], ["\u4E00\u7EA7", "stair"]], words: [["air", "\u5929\u7A7A"], ["hair", "\u6BDB\u53D1"], ["pair", "\u5BF9"], ["fair", "\u5E02\u96C6"], ["chair", "\u6905\u5B50"], ["flair", "\u7B2C\u516D\u611F"], ["stair", "\u7EA7"]] },
  { id: "ap", rime: "AP", title: "\u6253\u76F9\u7684\u4F10\u6728\u5DE5\u4EBA", story: "\u6234\u7740\u65E0\u8FB9\u5E3D\u7684\u4F10\u6728\u5DE5\u4EBA\uFF0C\u770B\u7740\u653E\u5728\u819D\u90E8\u7684\u5730\u56FE\u6253\u76F9\uFF0C\u519C\u5987\u8F7B\u6572\u53EB\u9192\u4ED6\u5E76\u5520\u53E8\uFF1A\u201C\u6211\u6307\u5B9A\u8981\u4F60\u5C06\u95E8\u524D\u5927\u6811\u6316\u5012\u3002\u201D", links: [["\u65E0\u8FB9\u5E3D", "cap"], ["\u819D\u90E8", "lap"], ["\u5730\u56FE", "map"], ["\u6253\u76F9", "nap"], ["\u8F7B\u6572", "rap"], ["\u5520\u53E8", "yap"], ["\u6307\u5B9A", "tap"], ["\u6316\u5012", "sap"]], words: [["cap", "\u65E0\u8FB9\u5E3D"], ["lap", "\u819D\u90E8"], ["map", "\u5730\u56FE"], ["nap", "\u5348\u7761\u3001\u6253\u76F9"], ["rap", "\u8F7B\u6572"], ["sap", "\u6316\u5012\u3001\u524A\u5F31"], ["tap", "\u6307\u5B9A"], ["yap", "\u5520\u53E8"]] },
  { id: "ire", rime: "IRE", title: "\u6124\u6012\u79CD\u9A6C\u5760\u5165\u6CE5\u6CBC", story: "\u6124\u6012\u662F\u53EF\u6015\u7684\u706B\uFF0C\u79CD\u9A6C\u6B63\u56E0\u6124\u6012\u800C\u4ECE\u9876\u5CF0\u5760\u843D\u5230\u6CE5\u6CBC\uFF0C\u906D\u9047\u60B2\u60E8\u547D\u8FD0\u3002", links: [["\u6124\u6012", "ire"], ["\u53EF\u6015", "dire"], ["\u706B", "fire"], ["\u79CD\u9A6C", "sire"], ["\u9876\u5CF0", "spire"], ["\u6CE5\u6CBC", "mire"], ["\u60B2\u60E8", "dire"]], words: [["ire", "\u6124\u6012"], ["dire", "\u53EF\u6015\u3001\u60B2\u60E8"], ["fire", "\u706B"], ["sire", "\u79CD\u9A6C\u3001\u7956\u5148"], ["mire", "\u6CE5\u6CBC"], ["spire", "\u9876\u5CF0"]] },
  { id: "ire2", rime: "IRE", title: "\u8F9E\u804C\u540E\u7A77\u5F97\u79DF\u5185\u88E4", story: "\u6124\u6012\u662F\u4E00\u6839\u80FD\u5F15\u8D77\u706B\u7684\u91D1\u5C5E\u7EBF\uFF0C\u538C\u5026\u5DE5\u4F5C\u65F6\u522B\u9A6C\u4E0A\u8F9E\u804C\uFF0C\u5426\u5219\u4F1A\u7A77\u5F97\u8FDE\u5185\u88E4\u90FD\u8981\u79DF\u3002", links: [["\u6124\u6012", "ire"], ["\u706B", "fire"], ["\u91D1\u5C5E\u7EBF", "wire"], ["\u538C\u5026", "tire"], ["\u79DF", "hire"]], words: [["ire", "\u6124\u6012"], ["fire", "\u706B"], ["tire", "\u7D2F\u3001\u538C\u5026"], ["hire", "\u96C7\u7528\u3001\u79DF\u501F"], ["wire", "\u91D1\u5C5E\u7EBF"]] },
  { id: "ape", rime: "APE", title: "\u62AB\u80A9\u7329\u7329\u770B\u6076\u884C\u5F55\u50CF", story: "\u7329\u7329\u9888\u80CC\u62AB\u7740\u62AB\u80A9\uFF0C\u8FB9\u6253\u5475\u6B20\u8FB9\u770B\u5F55\u50CF\u5E26\uFF0C\u5B83\u8BF4\uFF1A\u201C\u4EBA\u7C7B\u62A2\u593A\u3001\u5F3A\u5978\u8FD9\u7C7B\u574F\u884C\u4E3A\u53EF\u4E0D\u80FD\u6A21\u4EFF\u3002\u201D", links: [["\u7329\u7329", "ape"], ["\u9888\u80CC", "nape"], ["\u62AB\u80A9", "cape"], ["\u6253\u5475\u6B20", "gape"], ["\u5F55\u50CF\u5E26", "tape"], ["\u62A2\u593A\u3001\u5F3A\u5978", "rape"], ["\u6A21\u4EFF", "ape"]], words: [["ape", "\u7329\u7329\u3001\u6A21\u4EFF"], ["cape", "\u62AB\u80A9"], ["gape", "\u6253\u5475\u6B20\u3001\u5F20\u53E3\u51DD\u89C6"], ["nape", "\u9888\u80CC"], ["rape", "\u62A2\u593A\u3001\u5F3A\u5978"], ["tape", "\u5F55\u97F3\u5E26\u3001\u5F55\u50CF\u5E26"]] },
  { id: "alm", rime: "ALM", title: "\u68D5\u6988\u6811\u4E0B\u7684\u9547\u5B9A\u5723\u6B4C", story: "\u6655\u7729\u65F6\uFF0C\u5230\u68D5\u6988\u6811\u4E0B\u5531\u5723\u6B4C\uFF0C\u4F1A\u8BA9\u4F60\u6709\u5982\u670D\u4E0B\u9547\u5B9A\u5242\u4F3C\u7684\u5F97\u5230\u5E73\u9759\u3002", links: [["\u6655\u7729", "qualm"], ["\u68D5\u6988\u6811", "palm"], ["\u5723\u6B4C", "psalm"], ["\u9547\u5B9A\u5242", "balm"], ["\u5E73\u9759", "calm"]], words: [["balm", "\u9547\u5B9A\u5242"], ["calm", "\u5E73\u9759\u7684"], ["palm", "\u68D5\u6988\u6811\u3001\u624B\u638C"], ["psalm", "\u5723\u6B4C"], ["qualm", "\u6655\u7729"]] },
  { id: "aid", rime: "AID", title: "\u6D77\u519B\u6316\u89D2\u6C89\u7A33\u4F8D\u5973", story: "\u6D77\u519B\u5C06\u9886\u4E0B\u4EE4\u641C\u6355\u7ED3\u6709\u53D1\u8FAB\u3001\u6C89\u7740\u7A33\u91CD\u7684\u4F8D\u5973\uFF0C\u4E3A\u7684\u662F\u6316\u89D2\u6765\u652F\u63F4\u519B\u4E2D\u9910\u5385\u3002", links: [["\u6D77\u519B\u5C06\u9886", "braid"], ["\u641C\u6355", "raid"], ["\u53D1\u8FAB", "braid"], ["\u6C89\u7740\u7A33\u91CD", "staid"], ["\u4F8D\u5973", "maid"], ["\u6316\u89D2", "raid"], ["\u652F\u63F4", "aid"]], words: [["aid", "\u652F\u63F4"], ["maid", "\u4F8D\u5973"], ["raid", "\u6316\u89D2\u3001\u641C\u6355"], ["braid", "\u53D1\u8FAB\u3001\u6D77\u519B\u5C06\u9886"], ["staid", "\u6C89\u7740\u7A33\u91CD"]] },
  { id: "inge", rime: "INGE", title: "\u70E7\u7126\u5218\u6D77\u7684\u72C2\u6B22", story: "\u5979\u754F\u7F29\u4E00\u65C1\u7684\u5173\u952E\uFF0C\u662F\u72C2\u6B22\u65F6\u5218\u6D77\u513F\u88AB\u71CE\u7126\u3001\u53D8\u4E86\u8272\u6CFD\uFF0C\u56E0\u800C\u4E00\u9635\u61CA\u607C\u3002", links: [["\u754F\u7F29", "cringe"], ["\u5173\u952E", "hinge"], ["\u72C2\u6B22", "binge"], ["\u5218\u6D77\u513F", "fringe"], ["\u71CE\u7126", "singe"], ["\u8272\u6CFD", "tinge"], ["\u4E00\u9635\u61CA\u607C", "twinge"]], words: [["binge", "\u72C2\u6B22"], ["hinge", "\u5173\u952E"], ["singe", "\u71CE\u7126"], ["tinge", "\u8272\u6CFD"], ["cringe", "\u754F\u7F29"], ["fringe", "\u5218\u6D77\u513F"], ["twinge", "\u4E00\u9635\u61CA\u607C"]] },
  { id: "oom", rime: "OOM", title: "\u7EC7\u5E03\u673A\u5F39\u51FA\u5384\u8FD0\u4EA4\u54CD\u66F2", story: "\u7535\u5F71\u955C\u5934\u63A8\u8FDB\u5230\u623F\u95F4\uFF0C\u53EA\u89C1\u4E3B\u89D2\u9686\u9686\u4F5C\u54CD\u5730\u6572\u6253\u94A2\u7434\uFF0C\u50CF\u7EC7\u5E03\u673A\u4F3C\u7684\u7EC7\u51FA\u5384\u8FD0\u4EA4\u54CD\u66F2\u3002", links: [["\u955C\u5934\u63A8\u8FDB", "zoom"], ["\u623F\u95F4", "room"], ["\u9686\u9686\u4F5C\u54CD", "boom"], ["\u7EC7\u5E03\u673A", "loom"], ["\u5384\u8FD0", "doom"]], words: [["zoom", "\u955C\u5934\u63A8\u8FDB"], ["room", "\u623F\u95F4"], ["boom", "\u9686\u9686\u58F0"], ["loom", "\u7EC7\u5E03\u673A"], ["doom", "\u5384\u8FD0"]] },
  { id: "oe", rime: "OE", title: "\u6D6E\u51B0\u4E0A\u7684\u4F24\u811A\u58EB\u5175", story: "\u540D\u53EB\u4E54\u7684\u58EB\u5175\u62FF\u7740\u9504\u5934\u53BB\u91C7\u9C7C\u5375\uFF0C\u4E0D\u5E78\u88AB\u654C\u4EBA\u6BCD\u9E7F\u8E29\u4F24\u811A\u8DBE\uFF0C\u4ED6\u60B2\u54C0\u5730\u5750\u5728\u6D6E\u51B0\u4E0A\u54ED\u3002", links: [["\u4E54", "joe"], ["\u58EB\u5175", "joe"], ["\u9504\u5934", "hoe"], ["\u9C7C\u5375", "roe"], ["\u654C\u4EBA", "foe"], ["\u6BCD\u9E7F", "doe"], ["\u811A\u8DBE", "toe"], ["\u60B2\u54C0", "woe"], ["\u6D6E\u51B0", "floe"]], words: [["joe", "\u4E54\u3001\u58EB\u5175"], ["hoe", "\u9504\u5934"], ["roe", "\u9C7C\u5375"], ["foe", "\u654C\u4EBA"], ["doe", "\u6BCD\u9E7F"], ["toe", "\u811A\u8DBE"], ["woe", "\u60B2\u54C0"], ["floe", "\u6D6E\u51B0"]] },
  { id: "ob", rime: "OB", title: "\u5929\u9E45\u76EE\u7779\u66B4\u6C11\u62A2\u52AB", story: "\u96C4\u5929\u9E45\u5F88\u6EE1\u610F\u5B83\u5728\u6C34\u4E2D\u4E0A\u4E0B\u6D6E\u52A8\u6253\u9AD8\u540A\u7403\u7684\u5DE5\u4F5C\uFF0C\u76F4\u5230\u770B\u5230\u6E56\u8FB9\u66B4\u6C11\u62A2\u52AB\uFF0C\u5B83\u624D\u6CAE\u4E27\u5730\u555C\u6CE3\u3002", links: [["\u96C4\u5929\u9E45", "cob"], ["\u4E0A\u4E0B\u6D6E\u52A8", "bob"], ["\u9AD8\u540A\u7403", "lob"], ["\u5DE5\u4F5C", "job"], ["\u66B4\u6C11", "mob"], ["\u62A2\u52AB", "rob"], ["\u555C\u6CE3", "sob"]], words: [["cob", "\u96C4\u5929\u9E45"], ["bob", "\u5728\u6C34\u4E2D\u4E0A\u4E0B\u6D6E\u52A8"], ["lob", "\u9AD8\u540A\u7403"], ["job", "\u5DE5\u4F5C"], ["mob", "\u66B4\u6C11"], ["rob", "\u62A2\u52AB"], ["sob", "\u555C\u6CE3"]] },
  { id: "eed", rime: "EED", title: "\u64AD\u79CD\u524D\u5148\u9664\u82A6\u82C7\u6742\u8349", story: "\u5728\u64AD\u6492\u79CD\u5B50\u548C\u65BD\u80A5\u6599\u4EE5\u524D\uFF0C\u5FC5\u987B\u6CE8\u610F\u5148\u6E05\u9664\u82A6\u82C7\u7B49\u6742\u8349\uFF0C\u8FD9\u624D\u662F\u6B63\u786E\u7684\u884C\u4E3A\u3002", links: [["\u79CD\u5B50", "seed"], ["\u65BD\u80A5\u6599", "feed"], ["\u5FC5\u987B", "need"], ["\u6CE8\u610F", "heed"], ["\u82A6\u82C7", "reed"], ["\u6742\u8349", "weed"], ["\u884C\u4E3A", "deed"]], words: [["feed", "\u5582\u9972\u6599\u3001\u65BD\u80A5\u6599"], ["seed", "\u79CD\u5B50"], ["need", "\u5FC5\u987B"], ["heed", "\u6CE8\u610F\u3001\u7559\u5FC3"], ["reed", "\u82A6\u82C7"], ["weed", "\u6742\u8349"], ["deed", "\u884C\u4E3A"]] },
  { id: "ill", rime: "ILL", title: "\u5BD2\u4E2D\u524A\u7259\u7B7E\u53D6\u6696", story: "\u4ED6\u8EAB\u7A7F\u659C\u7EB9\u5E03\u8863\uFF0C\u5BF9\u6297\u5BD2\u51B7\u672C\u5C31\u8BAD\u7EC3\u6709\u672F\uFF0C\u4F46\u4ECD\u65E7\u88AB\u51BB\u5F97\u8981\u5455\u5410\uFF0C\u8FD8\u5F97\u4F7F\u51FA\u628A\u6728\u7247\u524A\u6210\u7259\u7B7E\u7684\u6280\u672F\u53D6\u6696\u3002", links: [["\u659C\u7EB9\u5E03", "twill"], ["\u5BD2\u51B7", "chill"], ["\u8BAD\u7EC3", "drill"], ["\u4ECD\u65E7", "still"], ["\u8981\u5455\u5410", "ill"], ["\u6728\u7247", "spill"], ["\u7259\u7B7E", "quill"], ["\u6280\u672F", "skill"]], words: [["ill", "\u8981\u5455\u5410\u7684"], ["twill", "\u659C\u7EB9\u5E03"], ["chill", "\u5BD2\u51B7"], ["drill", "\u8BAD\u7EC3"], ["still", "\u4ECD\u65E7"], ["spill", "\u6728\u7247"], ["skill", "\u6280\u672F"], ["quill", "\u7259\u7B7E"]] },
  { id: "oth", rime: "OTH", title: "\u61D2\u6C49\u559D\u4E0B\u6CE1\u6CAB\u98DE\u86FE\u6E05\u6C64", story: "\u61D2\u60F0\u7684\u4EBA\u7231\u559D\u6CE1\u6CAB\u7EA2\u8336\u6216\u6E05\u6C64\u8FD9\u79CD\u7B80\u5355\u98DF\u7269\uFF0C\u8FDE\u86FE\u4E00\u8D77\u559D\u4E0B\u809A\u4E5F\u4E0D\u5728\u4E4E\u3002", links: [["\u61D2\u60F0", "sloth"], ["\u6CE1\u6CAB", "froth"], ["\u6E05\u6C64", "broth"], ["\u86FE", "moth"]], words: [["sloth", "\u61D2\u60F0"], ["broth", "\u6E05\u6C64"], ["froth", "\u6CE1\u6CAB"], ["moth", "\u86FE"]] },
  { id: "oll2", rime: "OLL", title: "\u767D\u5929\u62D6\u9493\u665A\u4E0A\u95F2\u901B", story: "\u4ED6\u767D\u5929\u5230\u6D77\u4E0A\u62D6\u9493\u6D77\u9F9F\uFF0C\u665A\u4E0A\u5219\u6EDA\u52A8\u80A2\u4F53\u95F2\u901B\u5230\u5404\u9152\u5427\u9493\u7F8E\u4EBA\u9C7C\u3002", links: [["\u62D6\u9493", "troll"], ["\u6EDA\u52A8", "roll"], ["\u95F2\u901B", "stroll"]], words: [["roll", "\u6EDA\u52A8\u3001\u6253\u6EDA"], ["troll", "\u62D6\u9493"], ["stroll", "\u6E38\u5386\u3001\u95F2\u901B"]] },
  { id: "op", rime: "OP", title: "\u8DF3\u7740\u5077\u7206\u7C73\u82B1\u7684\u9AD8\u624B", story: "\u4ED6\u7684\u5355\u8DB3\u8DF3\u529F\u592B\u5DF2\u767B\u5CF0\u9020\u6781\uFF0C\u6240\u4EE5\u6562\u5728\u8B66\u5BDF\u9762\u524D\u626E\u9B3C\u8138\uFF0C\u5728\u96F6\u552E\u5E97\u516C\u7136\u5077\u7206\u7C73\u82B1\u3002", links: [["\u5355\u8DB3\u8DF3", "hop"], ["\u767B\u5CF0", "top"], ["\u8B66\u5BDF", "cop"], ["\u626E\u9B3C\u8138", "mop"], ["\u96F6\u552E\u5E97", "shop"], ["\u7206\u7C73\u82B1", "pop"]], words: [["cop", "\u8B66\u5BDF"], ["hop", "\u5355\u8DB3\u8DF3"], ["mop", "\u626E\u9B3C\u8138\u3001\u62D6\u628A"], ["pop", "\u7206\u7C73\u82B1"], ["top", "\u9876\u70B9\u3001\u5230\u9876"], ["shop", "\u96F6\u552E\u5E97"]] },
  { id: "eck", rime: "ECK", title: "\u7532\u677F\u5973\u90CE\u9080\u5438\u8840\u9B3C\u8F7B\u543B", story: "\u5973\u90CE\u5728\u7532\u677F\u4E0A\u5BF9\u5438\u8840\u9B3C\u62DB\u624B\u8BF4\uFF1A\u201C\u89C1\u9B3C\u4E86\uFF1F\u6B22\u8FCE\u4F60\u8F7B\u543B\u6211\u7684\u9888\uFF0C\u987A\u4FBF\u68C0\u9A8C\u6709\u6CA1\u6709\u827E\u6ECB\u75C5\u3002\u201D", links: [["\u7532\u677F", "deck"], ["\u62DB\u624B", "beck"], ["\u89C1\u9B3C", "heck"], ["\u8F7B\u543B", "peck"], ["\u9888", "neck"]], words: [["beck", "\u70B9\u5934\u3001\u62DB\u624B"], ["deck", "\u7532\u677F"], ["heck", "\u89C1\u9B3C"], ["neck", "\u9888"], ["peck", "\u5544\u3001\u8F7B\u543B"]] },
  { id: "ace", rime: "ACE", title: "\u4E00\u6D41\u9009\u624B\u7684\u6B65\u4F10\u4E0E\u9762\u5B50", story: "\u4E00\u6D41\u7684\u8FD0\u52A8\u9009\u624B\u8D5B\u8DD1\u65F6\u8981\u6CE8\u610F\u6B65\u4F10\u548C\u901F\u5EA6\uFF0C\u4E0D\u8981\u4E3A\u4E86\u4E0A\u4F53\u80B2\u7248\u7684\u82B1\u8FB9\u65B0\u95FB\uFF0C\u8F93\u4E86\u6BD4\u8D5B\u53C8\u8F93\u4E86\u9762\u5B50\u3002", links: [["\u4E00\u6D41", "ace"], ["\u8D5B\u8DD1", "race"], ["\u6B65\u4F10", "pace"], ["\u82B1\u8FB9", "lace"], ["\u9762\u5B50", "face"]], words: [["ace", "\u7EB8\u724CA\u3001\u4E00\u6D41"], ["pace", "\u6B65\u4F10\u3001\u901F\u5EA6"], ["face", "\u8138\u3001\u9762\u5B50"], ["race", "\u8D5B\u8DD1"], ["lace", "\u82B1\u8FB9\u3001\u978B\u5E26"]] },
  { id: "old", rime: "OLD", title: "\u8001\u4EBA\u7684\u516D\u79CD\u73B0\u8C61", story: "\u5E74\u8001\u7684\u4EBA\u6709\u516D\u79CD\u73B0\u8C61\uFF1A\u624B\u811A\u51B0\u51B7\u3001\u76AE\u80A4\u6298\u53E0\u3001\u9EC4\u91D1\u8D22\u5BCC\u591A\u3001\u6293\u4F4F\u6743\u529B\u3001\u5356\u5B8C\u6240\u6709\u3001\u8BF4\u8FC7\u8BE5\u8BF4\u7684\u8BDD\u3002", links: [["\u5E74\u8001", "old"], ["\u51B0\u51B7", "cold"], ["\u6298\u53E0", "fold"], ["\u9EC4\u91D1", "gold"], ["\u6293\u4F4F", "hold"], ["\u5356\u5B8C", "sold"], ["\u8BF4\u8FC7", "told"]], words: [["old", "\u8001"], ["cold", "\u51B7\u7684"], ["fold", "\u6298\u53E0\u7684"], ["gold", "\u9EC4\u91D1\u3001\u8D22\u5BCC"], ["hold", "\u6293\u4F4F"], ["sold", "\u5356\u5B8C"], ["told", "\u8BF4\u8FC7\u4E86"]] },
  { id: "oil2", rime: "OIL", title: "\u77F3\u6CB9\u7684\u516D\u79CD\u56F0\u5883", story: "\u53D6\u5F97\u4E00\u6876\u77F3\u6CB9\u8981\u7ECF\u8FC7\u6CB8\u817E\u3001\u9177\u70ED\u3001\u7CDF\u8E4B\u3001\u571F\u58E4\u3001\u8F9B\u82E6\u548C\u5F7B\u5E95\u6405\u62CC\u516D\u79CD\u56F0\u5883\u3002", links: [["\u77F3\u6CB9", "oil"], ["\u6CB8\u817E", "boil"], ["\u9177\u70ED", "broil"], ["\u7CDF\u8E4B", "spoil"], ["\u571F\u58E4", "soil"], ["\u8F9B\u82E6", "toil"], ["\u5F7B\u5E95\u6405\u62CC", "roil"]], words: [["oil", "\u77F3\u6CB9"], ["boil", "\u6CB8\u817E"], ["broil", "\u9177\u70ED"], ["soil", "\u571F\u58E4\u3001\u571F\u5730"], ["spoil", "\u7CDF\u8E4B"], ["toil", "\u8F9B\u82E6"], ["roil", "\u5F7B\u5E95\u6405\u62CC"]] },
  { id: "ane", rime: "ANE", title: "\u6BD2\u7518\u8517\u8BA9\u9E64\u5931\u53BB\u6C34\u51C6", story: "\u73CD\u5728\u5C0F\u8DEF\u4E0A\u6162\u8DD1\uFF0C\u770B\u5230\u4E00\u53EA\u9E64\u56E0\u4E3A\u5403\u4E86\u6BD2\u7518\u8517\uFF0C\u4E24\u7FFC\u5931\u7075\u53EA\u80FD\u6ED1\u7FD4\uFF0C\u56E0\u800C\u5927\u5931\u6C34\u51C6\u3002", links: [["\u73CD", "jane"], ["\u5C0F\u8DEF", "lane"], ["\u9E64", "crane"], ["\u6BD2", "bane"], ["\u7518\u8517", "cane"], ["\u7FFC", "vane"], ["\u6C34\u51C6", "plane"]], words: [["bane", "\u6BD2"], ["cane", "\u7518\u8517"], ["jane", "\u73CD"], ["lane", "\u5C0F\u8DEF\u3001\u5DF7\u5F04"], ["vane", "\u98CE\u8F66\u7684\u7FFC"], ["crane", "\u9E64\u3001\u82CD\u9E6D"], ["plane", "\u6C34\u51C6\u3001\u5E73\u9762\u3001\u6ED1\u7FD4"]] },
  { id: "eam", rime: "EAM", title: "\u84B8\u6C7D\u84B8\u5976\u6CB9\u7403\u961F", story: "\u8DB3\u7403\u961F\u957F\u68A6\u5230\u6A2A\u6881\u95EA\u7740\u5FAE\u5149\uFF0C\u4E8E\u662F\u4ED6\u8BA9\u961F\u5458\u5403\u84B8\u6C7D\u84B8\u5976\u6CB9\uFF0C\u7F1D\u5408\u4E86\u8D5B\u524D\u7D27\u5F20\u60C5\u7EEA\u3002", links: [["\u961F", "team"], ["\u68A6", "dream"], ["\u6A2A\u6881", "beam"], ["\u5FAE\u5149", "gleam"], ["\u84B8\u6C7D", "steam"], ["\u5976\u6CB9", "cream"], ["\u7F1D\u5408", "seam"]], words: [["seam", "\u7F1D\u5408"], ["beam", "\u6881"], ["team", "\u961F"], ["dream", "\u68A6"], ["cream", "\u5976\u6CB9"], ["gleam", "\u95EA\u5FAE\u5149"], ["steam", "\u84B8\u6C7D"]] },
  { id: "ile2", rime: "ILE", title: "\u5FAE\u7B11\u53CD\u6740\u7684\u6D41\u4EA1\u8005", story: "\u6D41\u4EA1\u8005\u7684\u7D20\u63CF\u662F\uFF1A\u5982\u722C\u866B\u7C7B\u822C\u79FB\u52A8\u654F\u6377\uFF0C\u4E2D\u4E86\u8BE1\u8BA1\u8FD8\u80FD\u5FAE\u7B11\u5730\u628A\u654C\u5BF9\u65B9\u6446\u5E73\u3002", links: [["\u6D41\u4EA1", "exile"], ["\u7D20\u63CF", "profile"], ["\u722C\u866B\u7C7B", "reptile"], ["\u79FB\u52A8", "mobile"], ["\u654F\u6377", "agile"], ["\u8BE1\u8BA1", "wile"], ["\u5FAE\u7B11", "smile"], ["\u654C\u5BF9", "hostile"]], words: [["wile", "\u8BE1\u8BA1"], ["exile", "\u6D41\u4EA1"], ["smile", "\u5FAE\u7B11"], ["agile", "\u654F\u6377"], ["mobile", "\u79FB\u52A8"], ["hostile", "\u654C\u5BF9\u7684"], ["profile", "\u7D20\u63CF"], ["reptile", "\u722C\u866B\u7C7B"]] },
  { id: "ring", rime: "RING", title: "\u6625\u65E5\u767E\u514B\u62C9\u6212\u6307", story: "\u6625\u5929\u4ED6\u5E26\u6765\u7528\u4E1D\u5E26\u5305\u624E\u7684\u6212\u6307\uFF0C\u5979\u611F\u52A8\u5F97\u53EF\u62E7\u51FA\u4E00\u6C34\u5E93\u773C\u6CEA\u3002", links: [["\u6625\u5929", "spring"], ["\u5E26\u6765", "bring"], ["\u4E1D\u5E26", "string"], ["\u6212\u6307", "ring"], ["\u62E7", "wring"]], words: [["ring", "\u6212\u6307"], ["bring", "\u5E26\u6765"], ["wring", "\u62E7"], ["string", "\u4E1D\u5E26"], ["spring", "\u6625\u5929"]] },
  { id: "aw2", rime: "AW", title: "\u7528\u952F\u5BF9\u4ED8\u8042\u566A\u8001\u5A46", story: "\u6740\u732A\u7684\u6709\u53E5\u683C\u8A00\uFF1A\u201C\u82E5\u4E0D\u754F\u4E8E\u6CD5\u5F8B\uFF0C\u5BF9\u4ED8\u8042\u566A\u7684\u8001\u5A46\uFF0C\u4E0E\u5176\u7528\u722A\u63D0\u5979\u54BD\u5589\uFF0C\u4E0D\u5982\u7528\u952F\u3002\u201D", links: [["\u683C\u8A00", "saw"], ["\u6CD5\u5F8B", "law"], ["\u8042\u566A", "caw"], ["\u722A", "paw"], ["\u54BD\u5589", "jaw"], ["\u952F", "saw"]], words: [["saw", "\u683C\u8A00\u3001\u952F"], ["law", "\u6CD5\u5F8B"], ["caw", "\u8042\u566A"], ["paw", "\u811A\u722A\u3001\u624B\u722A"], ["jaw", "\u54BD\u5589\u3001\u8001\u864E\u94B3"]] },
  { id: "pai", rime: "PAI", title: "\u82E6\u884C\u8005\u7528\u6CB9\u6F06\u6D82\u75DB\u811A", story: "\u82E6\u884C\u8005\u7528\u5370\u5EA6\u786C\u5E01\u4ED8\u6E05\u4E00\u6876\u6CB9\u6F06\u7684\u94B1\uFF0C\u4E3A\u7684\u662F\u8981\u6D82\u62B9\u4ED6\u7684\u4E00\u53CC\u75DB\u811A\u3002", links: [["\u5370\u5EA6\u786C\u5E01", "paisa"], ["\u4ED8\u6E05", "paid"], ["\u4E00\u6876", "pail"], ["\u6CB9\u6F06", "paint"], ["\u4E00\u53CC", "pair"], ["\u75DB", "pain"]], words: [["paid", "\u4ED8\u6E05\u7684"], ["pail", "\u6876"], ["pain", "\u75DB"], ["pair", "\u4E00\u53CC\u3001\u4E00\u5BF9"], ["paint", "\u6CB9\u6F06\u3001\u989C\u6599"], ["paisa", "\u6D3E\uFF0C\u5370\u5EA6\u786C\u5E01\u5355\u4F4D"]] },
  { id: "unk", rime: "UNK", title: "\u9189\u81ED\u9F2C\u9519\u8BA4\u6811\u5E72\u4E3A\u76AE\u7BB1", story: "\u81ED\u9F2C\u722C\u6811\u5E72\u5F53\u7136\u7B80\u5355\uFF0C\u4F46\u559D\u9189\u4E86\u7684\u81ED\u9F2C\u4F1A\u628A\u6811\u5E72\u770B\u6210\u539A\u6728\u5934\u505A\u7684\u5927\u76AE\u7BB1\uFF0C\u6700\u540E\u8003\u8BD5\u5931\u8D25\u3002", links: [["\u81ED\u9F2C", "skunk"], ["\u6811\u5E72", "trunk"], ["\u559D\u9189", "drunk"], ["\u539A\u6728\u5934", "chunk"], ["\u5931\u8D25", "flunk"]], words: [["skunk", "\u81ED\u9F2C"], ["trunk", "\u6811\u5E72\u3001\u5927\u76AE\u7BB1"], ["drunk", "\u9189\u4E86\u3001\u9189\u6C49"], ["chunk", "\u539A\u6728\u5934\u3001\u77EE\u80D6"], ["flunk", "\u5931\u8D25"]] },
  { id: "ike", rime: "IKE", title: "\u9A91\u5355\u8F66\u73AF\u7403\u7684\u68AD\u9C7C", story: "\u68AD\u9C7C\u6E38\u624B\u597D\u95F2\uFF0C\u559C\u6B22\u5F92\u6B65\u65C5\u884C\uFF0C\u5B83\u6E38\u5230\u5824\u9632\u8FC7\u4E0D\u53BB\uFF0C\u53EA\u597D\u6539\u9A91\u811A\u8E0F\u8F66\u7EE7\u7EED\u73AF\u7403\u4E4B\u65C5\u3002", links: [["\u68AD\u9C7C", "pike"], ["\u6E38\u624B\u597D\u95F2", "mike"], ["\u559C\u6B22", "like"], ["\u5F92\u6B65\u65C5\u884C", "hike"], ["\u5824\u9632", "dike"], ["\u811A\u8E0F\u8F66", "bike"]], words: [["pike", "\u68AD\u9C7C\u3001\u77DB"], ["mike", "\u6E38\u624B\u597D\u95F2"], ["like", "\u559C\u6B22\u3001\u50CF"], ["hike", "\u5F92\u6B65\u65C5\u884C"], ["dike", "\u5824\u9632"], ["bike", "\u811A\u8E0F\u8F66"]] },
  { id: "eer2", rime: "EER", title: "\u5564\u9152\u53F7\u5C0F\u516C\u725B\u6539\u822A", story: "\u201C\u5564\u9152\u53F7\u201D\u5728\u4E00\u9635\u53E4\u602A\u800C\u8F7B\u8511\u7684\u6B22\u547C\u4E2D\u6539\u53D8\u822A\u9053\uFF0C\u638C\u8235\u7684\u5C0F\u516C\u725B\u659C\u7785\u7740\u8BF4\uFF1A\u201C\u518D\u5632\u7B11\u6211\uFF0C\u6211\u5C31\u53BB\u6253\u7403\u3002\u201D", links: [["\u5564\u9152", "beer"], ["\u53E4\u602A", "queer"], ["\u8F7B\u8511", "sneer"], ["\u6B22\u547C", "cheer"], ["\u6539\u53D8\u822A\u9053", "veer"], ["\u638C\u8235", "steer"], ["\u5C0F\u516C\u725B", "steer"], ["\u659C\u7785", "leer"]], words: [["beer", "\u5564\u9152"], ["queer", "\u53E4\u602A\u7684"], ["cheer", "\u6B22\u547C"], ["sneer", "\u8F7B\u8511\u3001\u51B7\u7B11"], ["steer", "\u638C\u8235\u3001\u5C0F\u516C\u725B"], ["veer", "\u6539\u53D8\u65B9\u5411\u3001\u8DEF\u7EBF"], ["leer", "\u659C\u7785"]] },
  { id: "eed2", rime: "EED", title: "\u9519\u8BEF\u79CD\u5B50\u4E00\u9910\u95F4\u8513\u5EF6", story: "\u884C\u4E3A\u65F6\u9700\u8981\u7279\u522B\u7559\u610F\uFF01\u53EA\u8981\u4E00\u987F\u996D\u65F6\u95F4\uFF0C\u9519\u8BEF\u7684\u79CD\u5B50\u5C31\u4F1A\u50CF\u91CE\u8349\u8513\u5EF6\u5F97\u4E0D\u5F97\u4E86\u3002", links: [["\u884C\u4E3A", "deed"], ["\u9700\u8981", "need"], ["\u7559\u610F", "heed"], ["\u4E00\u987F\u996D", "feed"], ["\u79CD\u5B50", "seed"], ["\u91CE\u8349", "weed"]], words: [["deed", "\u884C\u4E3A"], ["heed", "\u6CE8\u610F\u3001\u7559\u5FC3"], ["need", "\u9700\u8981"], ["feed", "\u4E00\u9910"], ["seed", "\u79CD\u5B50"], ["weed", "\u91CE\u8349"]] },
  { id: "ed", rime: "ED", title: "\u7EA2\u5E8A\u8FB9\u7684\u6C42\u5A5A", story: "\u6559\u80B2\u90E8\u7684\u7231\u5FB7\u548C\u5973\u670B\u53CB\u9971\u9910\u540E\uFF0C\u5F15\u5BFC\u5979\u5230\u4E00\u5F20\u7EA2\u8272\u7684\u5E8A\u8FB9\uFF0C\u644A\u5F00\u5E95\u724C\u8BF4\uFF1A\u201C\u5AC1\u7ED9\u6211\u5427\uFF01\u201D", links: [["\u6559\u80B2\u90E8", "ed"], ["\u7231\u5FB7", "ed"], ["\u9971\u9910", "fed"], ["\u5F15\u5BFC", "led"], ["\u7EA2", "red"], ["\u5E8A", "bed"], ["\u644A\u5F00", "ted"], ["\u5AC1", "wed"]], words: [["ed", "\u6559\u80B2\u90E8\u3001Edward\u7B49\u7684\u7F29\u5199"], ["fed", "\u9971\u9910"], ["led", "\u5F15\u5BFC"], ["red", "\u7EA2"], ["bed", "\u5E8A"], ["ted", "\u644A\u5F00"], ["wed", "\u5AC1\u5A36"]] },
  { id: "ome", rime: "OME", title: "\u4F4F\u5728\u56FD\u4F1A\u5706\u9876\u7684\u9E3D\u5B50", story: "\u9E3D\u5B50\u8BF4\uFF1A\u201C\u6709\u7A7A\u5230\u6211\u5BB6\u6765\uFF0C\u6211\u4F4F\u7684\u5730\u65B9\u6709\u4E00\u4E9B\u7279\u522B\uFF0C\u5C31\u5728\u56FD\u4F1A\u5927\u53A6\u7684\u5706\u9876\u3002\u201D", links: [["\u6709\u7A7A", "some"], ["\u5BB6", "home"], ["\u6765", "come"], ["\u4E00\u4E9B", "some"], ["\u5706\u9876", "dome"]], words: [["home", "\u5BB6"], ["some", "\u4E00\u4E9B"], ["dome", "\u5706\u9876"], ["come", "\u6765"]] },
  { id: "eak", rime: "EAK", title: "\u9E1F\u5599\u7578\u5F62\u4EBA\u7684\u6F0F\u6D1E", story: "\u5634\u5DF4\u957F\u5F97\u50CF\u9E1F\u5599\u7684\u7578\u5F62\u4EBA\u8DD1\u4E0A\u8352\u51C9\u5C71\u9876\u53EB\u9053\uFF1A\u201C\u6211\u7684\u6F0F\u6D1E\u662F\u5634\u5DF4\u4E11\u5F97\u4E0D\u6562\u8BF4\u8BDD\uFF0C\u4E0D\u662F\u56E0\u4E3A\u8F6F\u5F31\u3002\u201D", links: [["\u9E1F\u5599", "beak"], ["\u7578\u5F62", "freak"], ["\u8352\u51C9", "bleak"], ["\u5C71\u9876", "peak"], ["\u6F0F\u6D1E", "leak"], ["\u8BF4\u8BDD", "speak"], ["\u8F6F\u5F31", "weak"]], words: [["beak", "\u9E1F\u5599"], ["peak", "\u5C71\u9876"], ["leak", "\u6F0F\u6D1E"], ["weak", "\u8F6F\u5F31"], ["bleak", "\u8352\u51C9\u7684"], ["freak", "\u7578\u5F62"], ["speak", "\u8BF4\u8BDD"]] },
  { id: "imp", rime: "IMP", title: "\u9ED1\u7329\u7329\u88C5\u626E\u7684\u8DDB\u884C\u987D\u7AE5", story: "\u5C0F\u987D\u7AE5\u7CBE\u5FC3\u6253\u626E\u6210\u9ED1\u7329\u7329\u8DDB\u884C\uFF0C\u8001\u9E28\u5374\u541D\u556C\u5730\u7ED9\u4E00\u6587\u94B1\u5F53\u8D4F\u91D1\u3002", links: [["\u5C0F\u987D\u7AE5", "imp"], ["\u7CBE\u5FC3\u6253\u626E", "primp"], ["\u9ED1\u7329\u7329", "chimp"], ["\u8DDB\u884C", "limp"], ["\u8001\u9E28", "pimp"], ["\u541D\u556C", "skimp"]], words: [["imp", "\u987D\u7AE5"], ["primp", "\u7CBE\u5FC3\u6253\u626E\u3001\u88C5\u9970"], ["chimp", "\u9ED1\u7329\u7329"], ["limp", "\u8DDB\u884C"], ["pimp", "\u8001\u9E28"], ["skimp", "\u541D\u556C\u5730\u7ED9\u4E88"]] },
  { id: "unk2", rime: "UNK", title: "\u9003\u4EA1\u751F\u624B\u6361\u5783\u573E\u5410\u53F8", story: "\u602F\u61E6\u7684\u751F\u624B\u624D\u4F1A\u5728\u6E9C\u53F7\u65F6\u6361\u98DF\u5783\u573E\u5806\u91CC\u6D78\u6CE1\u8FC7\u6C34\u7684\u539A\u7247\u5410\u53F8\u5403\u3002", links: [["\u602F\u61E6", "funk"], ["\u751F\u624B", "punk"], ["\u6E9C\u53F7", "bunk"], ["\u5783\u573E", "junk"], ["\u6D78\u6CE1", "dunk"], ["\u539A\u7247", "hunk"]], words: [["bunk", "\u6E9C\u53F7"], ["dunk", "\u6D78\u6CE1"], ["funk", "\u602F\u61E6\u3001\u6050\u60E7"], ["hunk", "\u539A\u7247\u7684"], ["junk", "\u5783\u573E\u3001\u5E9F\u7269"], ["punk", "\u7B28\u4EBA\u3001\u751F\u624B"]] },
  { id: "ave", rime: "AVE", title: "\u6D1E\u7A9F\u4E0E\u6CE2\u6D6A\u7684\u9053\u522B", story: "\u6D1E\u7A9F\u8BF4\uFF1A\u201C\u4F60\u6765\u4E86\u6211\u6B22\u8FCE\uFF0C\u4F60\u53BB\u4E86\u6211\u8BF4\u518D\u89C1\u3002\u201D\u6CE2\u6D6A\u5486\u54EE\u9053\uFF1A\u201C\u6211\u5728\u4E3A\u653F\u5E9C\u94FA\u8BBE\u89C2\u5149\u6B65\u9053\uFF0C\u7B97\u662F\u6211\u7ED9\u4F60\u7684\u793C\u7269\u3002\u201D", links: [["\u6D1E\u7A9F", "cave"], ["\u6B22\u8FCE", "ave"], ["\u518D\u89C1", "ave"], ["\u6CE2\u6D6A", "wave"], ["\u5486\u54EE", "rave"], ["\u94FA\u8BBE", "pave"], ["\u7ED9", "gave"]], words: [["ave", "\u6B22\u8FCE\u3001\u518D\u89C1"], ["cave", "\u6D1E\u7A9F"], ["wave", "\u6CE2\u6D6A"], ["rave", "\u5486\u54EE"], ["pave", "\u94FA\u8BBE"], ["gave", "\u7ED9"]] },
  { id: "en", rime: "EN", title: "\u6BCD\u9E21\u6BCD\u9A74\u90FD\u61C2\u7985", story: "\u6BCD\u9E21\u7684\u5DE2\u7A74\u5728\u5C71\u9876\uFF0C\u6BCD\u9A74\u4F4F\u6CBC\u6CFD\u533A\uFF0C\u5979\u4EEC\u77E5\u8BC6\u9762\u6709\u9650\uFF0C\u6240\u4EE5\u4E0D\u8BA4\u8BC6\u5341\u548C\u7B14\uFF0C\u5374\u4E0D\u77E5\u4ECE\u4F55\u65F6\u5F00\u59CB\u8BA4\u8BC6\u7985\u3002", links: [["\u6BCD\u9E21", "hen"], ["\u5DE2\u7A74", "den"], ["\u5C71\u9876", "ben"], ["\u6BCD\u9A74", "jen"], ["\u6CBC\u6CFD", "fen"], ["\u8BA4\u8BC6", "ken"], ["\u5341", "ten"], ["\u7B14", "pen"], ["\u4F55\u65F6", "when"], ["\u5F00\u59CB", "then"], ["\u7985", "zen"]], words: [["hen", "\u6BCD\u9E21"], ["den", "\u5DE2\u7A74"], ["ben", "\u5C71\u9876"], ["jen", "\u6BCD\u9A74"], ["fen", "\u6CBC\u6CFD"], ["ken", "\u8BA4\u8BC6"], ["ten", "\u5341"], ["pen", "\u7B14"], ["then", "\u7136\u540E\u3001\u6240\u4EE5"], ["when", "\u4F55\u65F6"], ["zen", "\u7985"]] },
  { id: "ole", rime: "OLE", title: "\u9F39\u9F20\u5BB6\u53D8\u9AD8\u5C14\u592B\u6D1E", story: "\u9F39\u9F20\u7684\u60B2\u54C0\u662F\u81EA\u5DF1\u6240\u6709\u7684\u5BB6\u90FD\u53D8\u6210\u9AD8\u5C14\u592B\u6D1E\uFF0C\u552F\u4E00\u7684\u522B\u5885\u6D1E\u7A74\u53C8\u88AB\u585E\u4E86\u5973\u5F0F\u62AB\u80A9\u3002", links: [["\u9F39\u9F20", "mole"], ["\u60B2\u54C0", "dole"], ["\u6240\u6709", "whole"], ["\u6D1E", "hole"], ["\u552F\u4E00", "sole"], ["\u5973\u5F0F\u62AB\u80A9", "stole"]], words: [["mole", "\u9F39\u9F20\u3001\u9632\u6CE2\u5824"], ["dole", "\u60B2\u54C0\u3001\u547D\u8FD0"], ["whole", "\u6240\u6709\u7684"], ["hole", "\u6D1E"], ["sole", "\u552F\u4E00"], ["stole", "\u5973\u5F0F\u62AB\u80A9"]] },
  { id: "umb", rime: "UMB", title: "\u62C7\u6307\u8B66\u544A\u9EBB\u75F9\u53D8\u54D1", story: "\u98DF\u6307\u5927\u52A8\u60F3\u5403\u767D\u6728\u85AF\uFF0C\u62C7\u6307\u8BF4\uFF1A\u201C\u53EA\u8981\u5403\u4E0B\u5C11\u8BB8\uFF0C\u5C31\u4F1A\u9020\u6210\u5589\u5934\u5B8C\u5168\u9EBB\u75F9\uFF0C\u5E76\u53D8\u54D1\u3002\u201D", links: [["\u62C7\u6307", "thumb"], ["\u5C11\u8BB8", "crumb"], ["\u5B8C\u5168", "plumb"], ["\u9EBB\u75F9", "numb"], ["\u53D8\u54D1", "dumb"]], words: [["thumb", "\u62C7\u6307"], ["crumb", "\u5C11\u8BB8"], ["plumb", "\u5B8C\u5168\u7684"], ["dumb", "\u54D1\u7684"], ["numb", "\u9EBB\u75F9"]] },
  { id: "ush", rime: "USH", title: "\u9152\u9B3C\u51B2\u7834\u5C0F\u9547\u5BC2\u9759", story: "\u9152\u9B3C\u53D1\u9152\u75AF\uFF0C\u53C8\u63A8\u53C8\u51B2\u53C8\u95EF\u5730\u7834\u574F\u4E86\u704C\u6728\u5C0F\u9547\u7684\u5BC2\u9759\u3002", links: [["\u9152\u9B3C", "lush"], ["\u63A8", "push"], ["\u51B2", "rush"], ["\u95EF", "rush"], ["\u7834\u574F", "mush"], ["\u704C\u6728", "bush"], ["\u5BC2\u9759", "hush"]], words: [["lush", "\u9152\u9B3C\u3001\u4E30\u8302\u7684"], ["push", "\u63A8"], ["rush", "\u51B2\u3001\u95EF"], ["mush", "\u7834\u574F\u3001\u7C89\u788E"], ["bush", "\u704C\u6728\u3001\u5C0F\u9547"], ["hush", "\u5BC2\u9759\u3001\u4F7F\u5BC2\u9759"]] },
  { id: "use3", rime: "USE", title: "\u7528\u539F\u8C05\u62D2\u7EDD\u63A7\u544A\u8650\u5F85", story: "\u539F\u8C05\u522B\u4EBA\u53EF\u6563\u53D1\u5927\u7231\uFF0C\u62D2\u7EDD\u4F7F\u7528\u63A7\u544A\u7684\u624B\u6BB5\u53BB\u6307\u63A7\u5148\u751F\u8650\u5F85\u3002", links: [["\u539F\u8C05", "excuse"], ["\u6563\u53D1", "effuse"], ["\u62D2\u7EDD", "refuse"], ["\u4F7F\u7528", "use"], ["\u63A7\u544A", "accuse"], ["\u8650\u5F85", "abuse"]], words: [["use", "\u4F7F\u7528"], ["excuse", "\u539F\u8C05"], ["effuse", "\u6563\u53D1"], ["refuse", "\u62D2\u7EDD"], ["accuse", "\u63A7\u544A"], ["abuse", "\u8650\u5F85"]] },
  { id: "ock", rime: "OCK", title: "\u7801\u5934\u516C\u9E21\u7684\u6447\u6EDA\u559C\u5267", story: "\u516C\u9E21\u5728\u7801\u5934\u5531\u6447\u6EDA\u6B4C\u66F2\uFF0C\u957F\u7740\u75D8\u75AE\u7684\u9996\u9886\u5632\u7B11\u9053\uFF1A\u201C\u6211\u4EE4\u4F60\u6539\u6F14\u559C\u5267\uFF0C\u5426\u5219\u75DB\u6BB4\u4F60\u4E00\u987F\u540E\u5C06\u4F60\u9501\u8FDB\u8D27\u4ED3\u3002\u201D", links: [["\u516C\u9E21", "cock"], ["\u7801\u5934", "dock"], ["\u6447\u6EDA", "rock"], ["\u75D8\u75AE", "pock"], ["\u9996\u9886", "cock"], ["\u5632\u7B11", "mock"], ["\u559C\u5267", "sock"], ["\u75DB\u6BB4", "sock"], ["\u9501", "lock"]], words: [["cock", "\u516C\u9E21\u3001\u9996\u9886"], ["dock", "\u7801\u5934"], ["rock", "\u6447\u6EDA\u3001\u5CA9\u77F3"], ["pock", "\u75D8\u75AE"], ["mock", "\u5632\u7B11"], ["sock", "\u559C\u5267\u3001\u75DB\u6BB4"], ["lock", "\u9501"]] },
  { id: "an", rime: "AN", title: "\u7C89\u4E1D\u5F00\u884C\u674E\u8F66\u53BB\u9493\u9C7C", story: "\u4E00\u4E2A\u7537\u4EBA\u5F88\u5BB9\u6613\u6210\u4E3A\u7C89\u4E1D\uFF0C\u80FD\u591F\u8FDD\u80CC\u7981\u4EE4\u5F00\u7740\u884C\u674E\u8F66\u53BB\u9493\u9C7C\uFF0C\u96BE\u602A\u8981\u5403\u4E00\u8BB0\u5E73\u5E95\u9505\u3002", links: [["\u4E00\u4E2A", "an"], ["\u7537\u4EBA", "man"], ["\u7C89\u4E1D", "fan"], ["\u80FD\u591F", "can"], ["\u884C\u674E\u8F66", "van"], ["\u5E73\u5E95\u9505", "pan"]], words: [["an", "\u4E00"], ["man", "\u7537\u4EBA"], ["can", "\u80FD\u591F"], ["fan", "\u8FF7\u3001\u7C89\u4E1D"], ["van", "\u884C\u674E\u8F66"], ["pan", "\u5E73\u5E95\u9505"]] },
  { id: "ill2", rime: "ILL", title: "\u6BD4\u5C14\u9762\u7C89\u5382\u7684\u836F\u8D39\u8D26\u5355", story: "\u6BD4\u5C14\u662F\u4E2A\u9762\u7C89\u5382\u957F\uFF0C\u4ED6\u6EE1\u816E\u88C5\u6EE1\u4E86\u836F\u4E38\uFF0C\u53E3\u888B\u91CC\u7684\u94B1\u521A\u597D\u53EA\u591F\u4ED8\u751F\u75C5\u7684\u533B\u836F\u8D26\u5355\u3002", links: [["\u6BD4\u5C14", "bill"], ["\u9762\u7C89\u5382", "mill"], ["\u816E", "gill"], ["\u88C5\u6EE1", "fill"], ["\u836F\u4E38", "pill"], ["\u751F\u75C5", "ill"], ["\u8D26\u5355", "bill"]], words: [["ill", "\u751F\u75C5\u7684"], ["bill", "\u949E\u7968\u3001\u8D26\u5355\u3001\u6BD4\u5C14"], ["mill", "\u78E8\u574A\u3001\u9762\u7C89\u5382"], ["gill", "\u816E\u3001\u5782\u8089"], ["fill", "\u88C5\u6EE1"], ["pill", "\u836F\u4E38"]] },
  { id: "ill3", rime: "ILL", title: "\u5C11\u5973\u8A93\u6B7B\u5B88\u8D1E\u6D01", story: "\u5C11\u5973\u8BF4\uFF1A\u201C\u8D1E\u6D01\u662F\u5987\u5973\u7684\u57FA\u77F3\uFF0C\u5C31\u7B97\u5C06\u6211\u6740\u4E86\uFF0C\u6211\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u5230\u5C0F\u5C71\u53BB\u5E72\u90A3\u4E0D\u4F53\u9762\u7684\u52FE\u5F53\u3002\u201D", links: [["\u5C11\u5973", "jill"], ["\u57FA\u77F3", "sill"], ["\u5C31\u7B97\u5C06", "will"], ["\u6740", "kill"], ["\u5C0F\u5C71", "hill"], ["\u4E0D\u4F53\u9762", "ill"]], words: [["ill", "\u4E0D\u4F53\u9762"], ["jill", "\u5C11\u5973\u3001\u60C5\u4EBA"], ["sill", "\u57FA\u77F3\u3001\u7A97\u53F0"], ["will", "\u5C06\u3001\u8981"], ["kill", "\u6740"], ["hill", "\u5C0F\u5C71\u3001\u4E18\u9675"]] },
  { id: "ea", rime: "EA", title: "\u6D77\u4E0A\u8DF3\u86A4\u5411\u654C\u673A\u6C42\u63F4", story: "\u6D77\u4E0A\u98DE\u6765\u654C\u673A\uFF0C\u8DF3\u86A4\u6073\u6C42\u8BF4\uFF1A\u201C\u62DC\u6258\u501F\u70B9\u8336\u53F6\u548C\u8C4C\u8C46\u5E94\u6025\uFF0C\u5426\u5219\u8FD9\u4ED7\u6253\u4E0D\u4E0B\u53BB\u4E86\u3002\u201D", links: [["\u6D77", "sea"], ["\u654C\u673A", "ea"], ["\u8DF3\u86A4", "flea"], ["\u6073\u6C42", "plea"], ["\u8336", "tea"], ["\u8C4C\u8C46", "pea"]], words: [["ea", "\u654C\u673A\u7684\u7F29\u5199"], ["sea", "\u6D77"], ["plea", "\u6073\u6C42"], ["flea", "\u8DF3\u86A4"], ["tea", "\u8336"], ["pea", "\u8C4C\u8C46"]] },
  { id: "oke", rime: "OKE", title: "\u628A\u53E4\u67EF\u78B1\u5F53\u53EF\u4E50", story: "\u201C\u9192\u9192\uFF01\u522B\u5F00\u9519\u73A9\u7B11\uFF0C\u628A\u5927\u9EBB\u5F53\u70DF\uFF0C\u628A\u53E4\u67EF\u78B1\u5F53\u53EF\u4E50\u3002\u88AB\u8B66\u5BDF\u53D1\u73B0\u540E\uFF0C\u53EA\u80FD\u5E26\u4E0A\u8F6D\u5230\u7262\u91CC\u95F2\u901B\u3002\u201D", links: [["\u9192", "woke"], ["\u73A9\u7B11", "joke"], ["\u70DF", "smoke"], ["\u53E4\u67EF\u78B1", "coke"], ["\u53EF\u4E50", "coke"], ["\u8F6D", "yoke"], ["\u95F2\u901B", "poke"]], words: [["woke", "\u9192"], ["joke", "\u73A9\u7B11"], ["smoke", "\u70DF"], ["coke", "\u53EF\u4E50\u3001\u53E4\u67EF\u78B1"], ["yoke", "\u8F6D"], ["poke", "\u95F2\u901B\u3001\u63D2\u5165"]] },
  { id: "ord", rime: "ORD", title: "\u524D\u79D1\u72AF\u7981\u5E26\u7EC6\u7EF3\u4E0E\u5200\u5251", story: "\u524D\u79D1\u72AF\u7684\u60C5\u7EEA\u53EF\u80FD\u6709\u95EE\u9898\uFF0C\u6CD5\u4EE4\u4E00\u81F4\u901A\u8FC7\uFF1A\u6709\u524D\u79D1\u8BB0\u5F55\u8005\u8EAB\u4E0A\u4E0D\u51C6\u5E26\u7EC6\u7EF3\u4E0E\u5200\u5251\u3002", links: [["\u524D\u79D1", "record"], ["\u60C5\u7EEA", "chord"], ["\u4E00\u81F4", "accord"], ["\u8BB0\u5F55", "record"], ["\u7EC6\u7EF3", "cord"], ["\u5200\u5251", "sword"]], words: [["record", "\u524D\u79D1\u3001\u8BB0\u5F55"], ["chord", "\u60C5\u7EEA"], ["accord", "\u4E00\u81F4"], ["cord", "\u7EC6\u7EF3"], ["sword", "\u5200\u3001\u5251"]] },
  { id: "een", rime: "EEN", title: "\u53EA\u7231\u7EFF\u8272\u7684\u66B4\u6012\u5973\u7687", story: "\u5973\u7687\u70ED\u8877\u4E8E\u7528\u7EFF\u8272\u6253\u626E\u81EA\u5DF1\uFF0C\u4EE5\u589E\u52A0\u5149\u6CFD\uFF0C\u5982\u679C\u5979\u770B\u89C1\u522B\u7684\u989C\u8272\u4F1A\u5927\u53D1\u813E\u6C14\u3002", links: [["\u5973\u7687", "queen"], ["\u70ED\u8877", "keen"], ["\u7EFF\u8272", "green"], ["\u6253\u626E\u81EA\u5DF1", "preen"], ["\u5149\u6CFD", "sheen"], ["\u5927\u53D1\u813E\u6C14", "spleen"]], words: [["queen", "\u5973\u7687"], ["keen", "\u70ED\u8877"], ["green", "\u7EFF"], ["preen", "\u6253\u626E\u81EA\u5DF1"], ["sheen", "\u5149\u6CFD"], ["spleen", "\u53D1\u813E\u6C14"]] }
];
var familiesBatch6 = seeds.map((seed, index) => ({
  id: seed.id,
  rime: seed.rime,
  title: seed.title,
  subtitle: seed.story.length > 24 ? `${seed.story.slice(0, 24)}\u2026` : seed.story,
  scene: `/scenes/${seed.id}.jpg`,
  story: segmentStory(seed.story, seed.links),
  onsets: seed.words.map(([word, , onset]) => onset ?? deriveOnset(word, seed.rime)),
  words: seed.words.map(([word, cn, onset]) => ({
    word,
    display: word.toUpperCase(),
    cn,
    onset: onset ?? deriveOnset(word, seed.rime)
  })),
  tip: `\u628A\u8FD9\u4E00\u9875\u7684 ${seed.words.length} \u4E2A\u8BCD\u653E\u8FDB\u540C\u4E00\u4E2A\u8352\u8C2C\u753B\u9762\uFF0C\u56F4\u7ED5\u5171\u540C\u90E8\u5206 ${seed.rime} \u4E00\u53E3\u6C14\u8BB0\u4F4F\u3002`,
  color: colors[index % colors.length]
}));

// src/data/families-batch7.ts
function segmentStory2(story, links) {
  const segments = [];
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
var seeds2 = [
  {
    id: "thin",
    rime: "THIN",
    rimePosition: "start",
    title: "\u8BA9\u7269\u4F53\u53D8\u8584\u7684\u5947\u602A\u65B9\u6CD5",
    story: "\u67D0\u4EBA\u8FD9\u6837\u60F3\uFF1A\u201C\u8BA9\u7269\u4F53\u53D8\u8584\u3001\u53D8\u7EC6\u3002\u9664\u4E86\u4F7F\u7528\u7A00\u91CA\u5242\u5916\uFF0C\u7528\u76F8\u5BF9\u8BBA\u4E5F\u53EF\u4EE5\u3002\u201D",
    links: [["\u67D0\u4EBA", "thingamy"], ["\u60F3", "think"], ["\u7269\u4F53", "thing"], ["\u53D8\u8584", "thin"], ["\u7A00\u91CA\u5242", "thinner"]],
    words: [
      ["thingamy", "\u67D0\u4EBA", "gamy"],
      ["think", "\u60F3", "k"],
      ["thing", "\u7269\u3001\u4E1C\u897F", "g"],
      ["thin", "\u8584\u3001\u7EC6", "\xF8"],
      ["thinner", "\u7A00\u91CA\u5242", "ner"]
    ]
  },
  {
    id: "et2",
    rime: "ET",
    title: "\u7528\u6C34\u67AA\u5BFB\u627E\u9ED1\u7389\u5B9D\u85CF",
    story: "\u8981\u83B7\u5F97\u9ED1\u7389\u8FD8\u662F\u571F\u65B9\u6BD4\u8F83\u597D\uFF0C\u7528\u6C34\u67AA\u55B7\u6C34\u5C06\u571F\u5F04\u6F6E\u6E7F\uFF0C\u52A0\u4E0A\u4E00\u70B9\u8FD0\u6C14\u8FDF\u65E9\u80FD\u9047\u5230\u5B9D\u3002",
    links: [["\u83B7\u5F97", "get"], ["\u9ED1\u7389", "jet"], ["\u6F6E\u6E7F", "wet"], ["\u8FDF\u65E9", "yet"], ["\u9047\u5230", "met"]],
    words: [
      ["get", "\u83B7\u5F97", "g"],
      ["jet", "\u9ED1\u7389\u3001\u55B7\u5C04", "j"],
      ["yet", "\u8FD8\uFF08\u6CA1\uFF09\u3001\u5C1A\uFF08\u672A\uFF09\u3001\u8FDF\u65E9", "y"],
      ["wet", "\u6F6E\u6E7F\u7684", "w"],
      ["met", "\u9047\u5230\uFF08meet \u7684\u8FC7\u53BB\u5F0F\uFF09", "m"]
    ]
  },
  {
    id: "ade",
    rime: "ADE",
    title: "\u6CBC\u6CFD\u91CC\u7684\u9AD8\u7EA7\u7FE1\u7FE0\u8D38\u6613",
    story: "\u6D89\u6C34\u5230\u6CBC\u6CFD\u5730\u533A\u91C7\u9AD8\u7EA7\u7FE1\u7FE0\u56FA\u7136\u662F\u597D\u8D38\u6613\uFF0C\u4F46\u4EE4\u6E7F\u5730\u690D\u7269\u7684\u53F6\u7247\u67AF\u840E\u5C31\u4E0D\u597D\u4E86\u3002",
    links: [["\u6D89\u6C34", "wade"], ["\u9AD8\u7EA7", "grade"], ["\u7FE1\u7FE0", "jade"], ["\u8D38\u6613", "trade"], ["\u6E7F\u5730", "glade"], ["\u53F6\u7247", "blade"], ["\u67AF\u840E", "fade"]],
    words: [
      ["grade", "\u7EA7\u3001\u5E74\u7EA7", "gr"],
      ["wade", "\u6D89\u6C34", "w"],
      ["glade", "\u6E7F\u5730\u3001\u6CBC\u6CFD", "gl"],
      ["jade", "\u7FE1\u7FE0\u3001\u7389", "j"],
      ["trade", "\u8D38\u6613", "tr"],
      ["blade", "\u53F6\u7247\u3001\u5200\u7247", "bl"],
      ["fade", "\u67AF\u840E", "f"]
    ]
  },
  {
    id: "mar",
    rime: "MAR",
    rimePosition: "start",
    title: "\u9A6C\u514B\u601D\u9A91\u6BCD\u9A6C\u5230\u706B\u661F\u8D2D\u7269",
    story: "\u9A6C\u514B\u601D\u9A91\u6BCD\u9A6C\u5230\u706B\u661F\u7684\u5546\u4E1A\u4E2D\u5FC3\uFF0C\u7528\u9A6C\u514B\u4E70\u4E00\u676F\u6CE5\u7070\u69A8\u6E23\u548C\u4E00\u679A\u5723\u6BCD\u739B\u5229\u4E9A\u7684\u6807\u5FD7\u3002",
    links: [["\u9A6C\u514B\u601D", "marx"], ["\u6BCD\u9A6C", "mare"], ["\u706B\u661F", "mars"], ["\u5546\u4E1A\u4E2D\u5FC3", "mart"], ["\u9A6C\u514B", "mark"], ["\u6CE5\u7070", "marl"], ["\u69A8\u6E23", "marc"], ["\u5723\u6BCD\u739B\u5229\u4E9A", "mary"], ["\u6807\u5FD7", "mark"]],
    words: [
      ["marx", "\u9A6C\u514B\u601D", "x"],
      ["mare", "\u6BCD\u9A6C", "e"],
      ["mars", "\u706B\u661F", "s"],
      ["mart", "\u5546\u4E1A\u4E2D\u5FC3", "t"],
      ["marl", "\u6CE5\u7070", "l"],
      ["marc", "\u69A8\u6E23", "c"],
      ["mary", "\u5723\u6BCD\u739B\u5229\u4E9A", "y"],
      ["mark", "\u6807\u5FD7\u3001\u9A6C\u514B", "k"]
    ]
  },
  {
    id: "mar2",
    rime: "MAR",
    rimePosition: "start",
    title: "\u571F\u62E8\u9F20\u4E09\u6708\u901B\u6CBC\u6CFD\u5E02\u573A",
    story: "\u571F\u62E8\u9F20\u4E09\u6708\u4EFD\u5230\u6CBC\u6CFD\u8FB9\u7F18\u7684\u5E02\u573A\u4E70\u897F\u6D0B\u6817\u548C\u9A6C\u6797\u9C7C\u3002",
    links: [["\u571F\u62E8\u9F20", "marmot"], ["\u4E09\u6708\u4EFD", "march"], ["\u6CBC\u6CFD", "marsh"], ["\u8FB9\u7F18", "margin"], ["\u5E02\u573A", "market"], ["\u897F\u6D0B\u6817", "marron"], ["\u9A6C\u6797\u9C7C", "marlin"]],
    words: [
      ["marmot", "\u571F\u62E8\u9F20", "mot"],
      ["march", "\u4E09\u6708", "ch"],
      ["marsh", "\u6CBC\u6CFD", "sh"],
      ["margin", "\u8FB9\u7F18", "gin"],
      ["market", "\u5E02\u573A", "ket"],
      ["marron", "\u897F\u6D0B\u6817", "ron"],
      ["marlin", "\u9A6C\u6797\u9C7C", "lin"]
    ]
  },
  {
    id: "ack",
    rime: "ACK",
    title: "\u88AB\u7C97\u9EBB\u888B\u6346\u4F4F\u7684\u6770\u514B",
    story: "\u7537\u4EBA\u6770\u514B\u7F3A\u5C11\u786C\u80CC\u810A\uFF0C\u4ED6\u50CF\u4E00\u53EA\u88AB\u7C97\u9EBB\u888B\u6346\u4F4F\u7684\u5927\u5934\u9489\uFF0C\u56E0\u65E0\u6CD5\u780D\u6389\u81EA\u5DF1\u7684\u675F\u7F1A\u800C\u75DB\u82E6\u4E0D\u582A\u3002",
    links: [["\u6770\u514B", "jack"], ["\u7F3A\u5C11", "lack"], ["\u80CC\u810A", "back"], ["\u7C97\u9EBB\u888B", "sack"], ["\u6346\u4F4F", "pack"], ["\u5927\u5934\u9489", "tack"], ["\u780D\u6389", "hack"], ["\u75DB\u82E6\u4E0D\u582A", "rack"]],
    words: [
      ["jack", "\u6770\u514B\u3001\u7537\u4EBA", "j"],
      ["lack", "\u7F3A\u5C11", "l"],
      ["back", "\u80CC\u810A", "b"],
      ["sack", "\u7C97\u9EBB\u888B", "s"],
      ["pack", "\u6346\u3001\u6253\u5305", "p"],
      ["tack", "\u5927\u5934\u9489", "t"],
      ["hack", "\u780D\u3001\u5241", "h"],
      ["rack", "\u75DB\u82E6\u4E0D\u582A", "r"]
    ]
  },
  {
    id: "ipe",
    rime: "IPE",
    title: "\u9E6C\u5411\u70DF\u6597\u62B1\u6028",
    story: "\u9E6C\u64E6\u5E72\u5B83\u7684\u6591\u7EB9\uFF0C\u5BF9\u70DF\u6597\u62B1\u6028\u8BF4\uFF1A\u201C\u6210\u719F\u7684\u4EBA\u4E0D\u4F1A\u628A\u4E00\u53EA\u9E6C\u770B\u6210\u70DF\u8482\u3002\u201D",
    links: [["\u9E6C", "snipe"], ["\u64E6\u5E72", "wipe"], ["\u6591\u7EB9", "stripe"], ["\u70DF\u6597", "pipe"], ["\u62B1\u6028", "gripe"], ["\u6210\u719F", "ripe"], ["\u70DF\u8482", "snipe"]],
    words: [
      ["snipe", "\u9E6C\u3001\u70DF\u8482", "sn"],
      ["wipe", "\u64E6\u5E72", "w"],
      ["stripe", "\u6591\u7EB9", "str"],
      ["pipe", "\u70DF\u6597", "p"],
      ["gripe", "\u62B1\u6028", "gr"],
      ["ripe", "\u6210\u719F\u7684", "r"]
    ]
  },
  {
    id: "obe",
    rime: "OBE",
    title: "\u7A7F\u7761\u888D\u63A2\u67E5\u5730\u7403\u4EEA",
    story: "\u5979\u8EAB\u7A7F\u7761\u888D\uFF0C\u624B\u6301\u95EA\u5149\u706F\uFF0C\u5F7B\u5E95\u5730\u63A2\u67E5\u5730\u7403\u4EEA\u91CC\u6807\u793A\u7684\u56FD\u5EA6\u3002",
    links: [["\u7761\u888D", "robe"], ["\u95EA\u5149\u706F", "strobe"], ["\u5F7B\u5E95\u5730\u63A2\u67E5", "probe"], ["\u5730\u7403\u4EEA", "globe"]],
    words: [
      ["robe", "\u7761\u888D\u3001\u6D74\u8863", "r"],
      ["strobe", "\u95EA\u5149\u706F", "str"],
      ["probe", "\u5F7B\u5E95\u5730\u63A2\u67E5", "pr"],
      ["globe", "\u5730\u7403\u4EEA", "gl"]
    ]
  },
  {
    id: "eal",
    rime: "EAL",
    title: "\u6D77\u8C79\u53D1\u724C\u5BFB\u627E\u6CBB\u6108\u98DF\u7269",
    story: "\u6D77\u8C79\u53D1\u724C\u535C\u5366\uFF0C\u5B83\u771F\u8BDA\u5730\u60F3\u77E5\u9053\u662F\u7389\u7C73\u7C89\u8FD8\u662F\u5C0F\u725B\u8089\u80FD\u6CBB\u6108\u5B83\u7684\u75C5\u3002",
    links: [["\u6D77\u8C79", "seal"], ["\u53D1\u724C", "deal"], ["\u771F\u8BDA\u5730", "real"], ["\u7389\u7C73\u7C89", "meal"], ["\u5C0F\u725B\u8089", "veal"], ["\u6CBB\u6108", "heal"]],
    words: [
      ["seal", "\u6D77\u8C79\u3001\u5370\u7AE0", "s"],
      ["deal", "\u53D1\u724C", "d"],
      ["real", "\u771F\u7684\u3001\u771F\u8BDA\u7684", "r"],
      ["meal", "\u7389\u7C73\u7C89\u3001\u4E00\u9910", "m"],
      ["veal", "\u5C0F\u725B\u8089", "v"],
      ["heal", "\u6CBB\u6108", "h"]
    ]
  },
  {
    id: "ive",
    rime: "IVE",
    title: "\u4ECE\u8702\u5DE2\u56FD\u5B85\u8DF3\u6C34\u6F5C\u6C34",
    story: "\u751F\u6D3B\u662F\u9760\u81EA\u5DF1\u4E89\u53D6\uFF0C\u800C\u4E0D\u662F\u6765\u81EA\u522B\u4EBA\u7684\u7ED9\u4E88\u3002\u867D\u7136\u4F4F\u5728\u8702\u5DE2\u56FD\u5B85\uFF0C\u4F46\u4F60\u8FD8\u662F\u53EF\u4EE5\u8DF3\u6C34\u3001\u6F5C\u6C34\uFF0C\u4E0D\u4F7F\u81EA\u5DF1\u82E6\u607C\u6CAE\u4E27\u3002",
    links: [["\u751F\u6D3B", "live"], ["\u7ED9\u4E88", "give"], ["\u8702\u5DE2", "hive"], ["\u8DF3\u6C34", "dive"], ["\u6F5C\u6C34", "dive"], ["\u82E6\u607C\u6CAE\u4E27", "rive"]],
    words: [
      ["live", "\u751F\u6D3B\u3001\u4F4F", "l"],
      ["give", "\u7ED9\u4E88", "g"],
      ["hive", "\u8702\u5DE2", "h"],
      ["dive", "\u8DF3\u6C34\u3001\u6F5C\u6C34", "d"],
      ["rive", "\u6495\u88C2\u3001\u51FB\u788E\u3001\u4F7F\u82E6\u607C\u6CAE\u4E27", "r"]
    ]
  }
];
var colors2 = ["#466B8A", "#B85C45", "#6D7750", "#815D86", "#3D7C73", "#A85E54", "#53718A", "#8B6A45", "#3F7A68", "#6C6291"];
var familiesBatch7 = seeds2.map((seed, index) => ({
  id: seed.id,
  rime: seed.rime,
  rimePosition: seed.rimePosition,
  title: seed.title,
  subtitle: seed.story,
  scene: `/scenes/${seed.id}.png`,
  story: segmentStory2(seed.story, seed.links),
  onsets: seed.words.map(([, , added]) => added),
  words: seed.words.map(([word, cn, onset]) => ({ word, display: word.toUpperCase(), cn, onset })),
  tip: seed.rimePosition === "start" ? `\u5171\u540C\u90E8\u5206 ${seed.rime} \u653E\u5728\u8BCD\u9996\uFF0C\u518D\u63A5\u4E0A\u4E0D\u540C\u5B57\u6BCD\uFF0C\u4E00\u53E3\u6C14\u8BB0\u4F4F\u8FD9\u4E00\u7EC4 ${seed.words.length} \u4E2A\u5355\u8BCD\u3002` : `\u628A\u5171\u540C\u90E8\u5206 ${seed.rime} \u653E\u5728\u8BCD\u5C3E\uFF0C\u6362\u4E0A\u4E0D\u540C\u8BCD\u9996\uFF0C\u4E00\u53E3\u6C14\u8BB0\u4F4F\u8FD9\u4E00\u7EC4 ${seed.words.length} \u4E2A\u5355\u8BCD\u3002`,
  color: colors2[index % colors2.length]
}));

// src/data/families-batch8.ts
function segmentStory3(story, words) {
  const occupied = [];
  const matches = [...words].sort((a, b) => b.keyword.length - a.keyword.length).map((word) => {
    let from = 0;
    let index = story.indexOf(word.keyword, from);
    while (index >= 0 && occupied.some((range) => index < range.end && index + word.keyword.length > range.start)) {
      from = index + 1;
      index = story.indexOf(word.keyword, from);
    }
    if (index >= 0) occupied.push({ start: index, end: index + word.keyword.length });
    return { index, text: word.keyword, word: word.word };
  }).filter((match) => match.index >= 0).sort((a, b) => a.index - b.index || b.text.length - a.text.length);
  const segments = [];
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
var seeds3 = [
  {
    "sourcePage": 241,
    "id": "ta",
    "rime": "TA",
    "title": "\u62A4\u8033\u5C11\u5E74\u7528\u7126\u6CB9\u5047\u88C5\u6652\u9ED1",
    "story": "\u6234\u7740\u62A4\u8033\u7684\u5C11\u5E74\u5728\u8EAB\u4E0A\u8F7B\u62CD\u7126\u6CB9\uFF0C\u8BA9\u76AE\u80A4\u50CF\u6652\u6210\u8910\u8272\u7684\u6837\u5B50\uFF0C\u7ED9\u81EA\u5DF1\u8D34\u4E0A\u5230\u6D77\u6EE9\u5EA6\u5047\u7684\u6807\u7B7E\u3002",
    "words": [
      {
        "word": "tab",
        "meaning": "\u62A4\u8033",
        "keyword": "\u62A4\u8033",
        "added": "b",
        "position": "start"
      },
      {
        "word": "tad",
        "meaning": "\u5C11\u5E74",
        "keyword": "\u5C11\u5E74",
        "added": "d",
        "position": "start"
      },
      {
        "word": "tap",
        "meaning": "\u8F7B\u62CD",
        "keyword": "\u8F7B\u62CD",
        "added": "p",
        "position": "start"
      },
      {
        "word": "tar",
        "meaning": "\u7126\u6CB9",
        "keyword": "\u7126\u6CB9",
        "added": "r",
        "position": "start"
      },
      {
        "word": "tan",
        "meaning": "\uFF08\u6652\u6210\uFF09\u8910\u8272",
        "keyword": "\u8910\u8272",
        "added": "n",
        "position": "start"
      },
      {
        "word": "tag",
        "meaning": "\u6807\u7B7E",
        "keyword": "\u6807\u7B7E",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 242,
    "id": "nat",
    "rime": "NAT",
    "title": "\u6D6E\u6728\u4E0A\u51FA\u751F\u7684\u6E38\u6CF3\u5929\u624D",
    "story": "\u5B83\u51FA\u751F\u4E8E\u6F02\u6D6E\u7684\u6D6E\u6728\uFF0C\u81EA\u7136\u5929\u751F\u5C31\u5177\u6709\u7075\u5DE7\u7684\u81C0\u90E8\uFF0C\u56E0\u800C\u662F\u6E38\u6CF3\u7684\u5929\u751F\u597D\u624B\uFF0C\u8FD9\u662F\u81EA\u7136\u8D4B\u4E88\u5B83\u7684\u751F\u5B58\u672C\u9886\u3002",
    "words": [
      {
        "word": "natal",
        "meaning": "\u51FA\u751F\u7684",
        "keyword": "\u51FA\u751F",
        "added": "al",
        "position": "start"
      },
      {
        "word": "natant",
        "meaning": "\u6F02\u6D6E",
        "keyword": "\u6F02\u6D6E",
        "added": "ant",
        "position": "start"
      },
      {
        "word": "natch",
        "meaning": "\u81EA\u7136\u5730",
        "keyword": "\u81EA\u7136",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "natty",
        "meaning": "\u7075\u5DE7",
        "keyword": "\u7075\u5DE7",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "nates",
        "meaning": "\u81C0\u90E8",
        "keyword": "\u81C0\u90E8",
        "added": "es",
        "position": "start"
      },
      {
        "word": "natation",
        "meaning": "\u6E38\u6CF3",
        "keyword": "\u6E38\u6CF3",
        "added": "ation",
        "position": "start"
      },
      {
        "word": "natural",
        "meaning": "\u5929\u751F\u597D\u624B\u3001\u5929\u751F\u7684",
        "keyword": "\u5929\u751F\u597D\u624B",
        "added": "ural",
        "position": "start"
      },
      {
        "word": "nature",
        "meaning": "\u672C\u8D28\u3001\u81EA\u7136",
        "keyword": "\u81EA\u7136",
        "added": "ure",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 243,
    "id": "are3",
    "rime": "ARE",
    "title": "\u91CE\u5154\u963B\u6B62\u6BCD\u9A6C\u5265\u76AE\u4ED8\u8F66\u8D39",
    "story": "\u91CE\u5154\u5BF9\u6BCD\u9A6C\u8BF4\uFF1A\u201C\u4F60\u80C6\u6562\u60F3\u5265\u5154\u76AE\u4EE3\u66FF\u652F\u4ED8\u8F66\u8D39\uFF0C\u5FD8\u4E86\u6211\u662F\u7A00\u6709\u52A8\u7269\uFF0C\u53D7\u5230\u6CD5\u5F8B\u4FDD\u62A4\u3002\u201D",
    "words": [
      {
        "word": "are",
        "meaning": "\u662F\uFF08\u4E3B\u8BCD\u4E3A\u590D\u6570\uFF09",
        "keyword": "\u6211\u662F",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "hare",
        "meaning": "\u91CE\u5154",
        "keyword": "\u91CE\u5154",
        "added": "h",
        "position": "end"
      },
      {
        "word": "mare",
        "meaning": "\u6BCD\u9A6C",
        "keyword": "\u6BCD\u9A6C",
        "added": "m",
        "position": "end"
      },
      {
        "word": "dare",
        "meaning": "\u80C6\u6562",
        "keyword": "\u80C6\u6562",
        "added": "d",
        "position": "end"
      },
      {
        "word": "pare",
        "meaning": "\u5265\u3001\u524A\u76AE",
        "keyword": "\u5265\u5154\u76AE",
        "added": "p",
        "position": "end"
      },
      {
        "word": "fare",
        "meaning": "\u8F66\u8D39",
        "keyword": "\u8F66\u8D39",
        "added": "f",
        "position": "end"
      },
      {
        "word": "rare",
        "meaning": "\u7A00\u6709",
        "keyword": "\u7A00\u6709\u52A8\u7269",
        "added": "r",
        "position": "end"
      },
      {
        "word": "care",
        "meaning": "\u4FDD\u62A4\u3001\u5173\u5FC3",
        "keyword": "\u4FDD\u62A4",
        "added": "c",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 244,
    "id": "ast",
    "rime": "AST",
    "title": "\u6C34\u624B\u5728\u75BE\u98CE\u4E2D\u6295\u9C7C\u67AA\u6355\u9CB8",
    "story": "\u8FC7\u53BB\u7684\u6C34\u624B\u5F88\u82E6\uFF0C\u8981\u5728\u6D69\u701A\u7684\u5927\u6D77\u5FEB\u901F\u7684\u75BE\u98CE\u4E2D\u722C\u4E0A\u6845\u6746\uFF0C\u6295\u63B7\u9C7C\u67AA\u6355\u9CB8\uFF0C\u6700\u540E\u906D\u9CB8\u9C7C\u53CD\u6251\u3002",
    "words": [
      {
        "word": "past",
        "meaning": "\u8FC7\u53BB",
        "keyword": "\u8FC7\u53BB",
        "added": "p",
        "position": "end"
      },
      {
        "word": "vast",
        "meaning": "\u6D69\u701A",
        "keyword": "\u6D69\u701A",
        "added": "v",
        "position": "end"
      },
      {
        "word": "fast",
        "meaning": "\u5FEB\u901F",
        "keyword": "\u5FEB\u901F",
        "added": "f",
        "position": "end"
      },
      {
        "word": "blast",
        "meaning": "\u75BE\u98CE",
        "keyword": "\u75BE\u98CE",
        "added": "bl",
        "position": "end"
      },
      {
        "word": "mast",
        "meaning": "\u6845\u6746",
        "keyword": "\u6845\u6746",
        "added": "m",
        "position": "end"
      },
      {
        "word": "cast",
        "meaning": "\u6295\u3001\u63B7",
        "keyword": "\u6295\u63B7",
        "added": "c",
        "position": "end"
      },
      {
        "word": "last",
        "meaning": "\u6700\u540E",
        "keyword": "\u6700\u540E",
        "added": "l",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 245,
    "id": "ant",
    "rime": "ANT",
    "title": "\u5598\u6C14\u8682\u8681\u627F\u8BA4\u79CD\u6811\u80FD\u529B\u4E0D\u8DB3",
    "story": "\u8682\u8681\u5598\u7740\u6C14\u541F\u5531\u9053\uFF1A\u201C\u6211\u66FE\u72C2\u8A00\u8981\u79CD\u690D\u4E00\u68F5\u6811\uFF0C\u73B0\u5728\u6211\u627F\u8BA4\u81EA\u5DF1\u7684\u80FD\u529B\u663E\u7136\u4E0D\u8DB3\u3002\u201D",
    "words": [
      {
        "word": "ant",
        "meaning": "\u8682\u8681",
        "keyword": "\u8682\u8681",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "pant",
        "meaning": "\u5598\u6C14",
        "keyword": "\u5598\u7740\u6C14",
        "added": "p",
        "position": "end"
      },
      {
        "word": "chant",
        "meaning": "\u541F\u5531",
        "keyword": "\u541F\u5531",
        "added": "ch",
        "position": "end"
      },
      {
        "word": "rant",
        "meaning": "\u72C2\u8A00",
        "keyword": "\u72C2\u8A00",
        "added": "r",
        "position": "end"
      },
      {
        "word": "plant",
        "meaning": "\u79CD\u690D",
        "keyword": "\u79CD\u690D",
        "added": "pl",
        "position": "end"
      },
      {
        "word": "grant",
        "meaning": "\u627F\u8BA4",
        "keyword": "\u627F\u8BA4",
        "added": "gr",
        "position": "end"
      },
      {
        "word": "scant",
        "meaning": "\u4E0D\u8DB3",
        "keyword": "\u4E0D\u8DB3",
        "added": "sc",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 246,
    "id": "ue",
    "rime": "UE",
    "title": "\u6B20\u6B3E\u4E0D\u4ED8\u88AB\u63A7\u544A\u540E\u6094\u6068",
    "story": "\u4E0D\u7528\u522B\u4EBA\u63D0\u793A\uFF0C\u4E5F\u5E94\u77E5\u9053\u4E8B\u60C5\u771F\u5B9E\u7684\u6027\u8D28\uFF1B\u6B20\u6B3E\u5C31\u5E94\u8BE5\u652F\u4ED8\uFF0C\u5426\u5219\u88AB\u63A7\u544A\u65F6\u5C31\u4F1A\u6094\u6068\u60B2\u53F9\u3002",
    "words": [
      {
        "word": "cue",
        "meaning": "\u63D0\u793A",
        "keyword": "\u63D0\u793A",
        "added": "c",
        "position": "end"
      },
      {
        "word": "due",
        "meaning": "\u6B20\u6B3E\u3001\u5E94\u652F\u4ED8\u7684",
        "keyword": "\u6B20\u6B3E",
        "added": "d",
        "position": "end"
      },
      {
        "word": "hue",
        "meaning": "\u8272\u8C03\u3001\u6027\u8D28",
        "keyword": "\u6027\u8D28",
        "added": "h",
        "position": "end"
      },
      {
        "word": "true",
        "meaning": "\u771F\u7684\u3001\u771F\u5B9E",
        "keyword": "\u771F\u5B9E",
        "added": "tr",
        "position": "end"
      },
      {
        "word": "rue",
        "meaning": "\u6094\u6068\u3001\u60B2\u53F9",
        "keyword": "\u6094\u6068\u60B2\u53F9",
        "added": "r",
        "position": "end"
      },
      {
        "word": "sue",
        "meaning": "\u63A7\u544A",
        "keyword": "\u63A7\u544A",
        "added": "s",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 247,
    "id": "lue",
    "rime": "LUE",
    "title": "\u5FE7\u90C1\u601D\u8DEF\u50CF\u6F0F\u6C14\u6696\u6C14\u7BA1",
    "story": "\u5FE7\u90C1\u4F1A\u5F71\u54CD\u601D\u8DEF\uFF0C\u8FD9\u5C31\u50CF\u6696\u6C14\u7BA1\u6F0F\u6C14\u65F6\uFF0C\u5E94\u8BE5\u7528\u80F6\u6C34\u7C98\u4E0A\u7834\u6D1E\u3002",
    "words": [
      {
        "word": "blue",
        "meaning": "\u5FE7\u90C1\u3001\u84DD\u8272",
        "keyword": "\u5FE7\u90C1",
        "added": "b",
        "position": "end"
      },
      {
        "word": "clue",
        "meaning": "\u7EBF\u7D22\u3001\u601D\u8DEF",
        "keyword": "\u601D\u8DEF",
        "added": "c",
        "position": "end"
      },
      {
        "word": "flue",
        "meaning": "\u6696\u6C14\u7BA1",
        "keyword": "\u6696\u6C14\u7BA1",
        "added": "f",
        "position": "end"
      },
      {
        "word": "glue",
        "meaning": "\u80F6\u6C34\u3001\u7C98\u5408",
        "keyword": "\u80F6\u6C34",
        "added": "g",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 248,
    "id": "gra",
    "rime": "GRA",
    "title": "\u65E0\u4EBA\u53C2\u52A0\u7684\u6BD5\u4E1A\u70E4\u8089\u5927\u9910",
    "story": "\u6BD5\u4E1A\u751F\u72EC\u81EA\u5750\u5728\u8349\u5730\u4E0A\uFF0C\u4ED6\u7684\u5FC3\u597D\u4F3C\u90A3\u7070\u8272\u7089\u67B6\u4E00\u822C\u5730\u9EEF\u6DE1\uFF0C\u56E0\u4E3A\u5168\u5BB6\u7ADF\u7136\u6CA1\u4EBA\u6765\u53C2\u52A0\u4ED6\u7684\u6BD5\u4E1A\u70E4\u8089\u5927\u9910\u3002",
    "words": [
      {
        "word": "grad",
        "meaning": "\u6BD5\u4E1A\u751F",
        "keyword": "\u6BD5\u4E1A\u751F",
        "added": "d",
        "position": "start"
      },
      {
        "word": "grass",
        "meaning": "\u8349",
        "keyword": "\u8349\u5730",
        "added": "ss",
        "position": "start"
      },
      {
        "word": "gray",
        "meaning": "\u7070\u8272",
        "keyword": "\u7070\u8272",
        "added": "y",
        "position": "start"
      },
      {
        "word": "grate",
        "meaning": "\u7089\u67B6",
        "keyword": "\u7089\u67B6",
        "added": "te",
        "position": "start"
      },
      {
        "word": "grave",
        "meaning": "\u9EEF\u6DE1\u7684\u3001\u5893\u7A74",
        "keyword": "\u9EEF\u6DE1",
        "added": "ve",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 249,
    "id": "act",
    "rime": "ACT",
    "title": "\u4F1A\u8BF4\u8BDD\u7684\u5951\u7EA6\u5C0F\u518C\u8BB2\u8BC0\u7A8D",
    "story": "\u5951\u7EA6\u5C0F\u518C\u8BF4\uFF1A\u201C\u8BBE\u5B9A\u5951\u7EA6\u7684\u8BC0\u7A8D\u662F\u2014\u2014\u516C\u8BC1\u4EBA\u8981\u5C0A\u91CD\u4E8B\u5B9E\u3001\u7528\u8BCD\u7CBE\u786E\uFF0C\u624D\u4E0D\u4F1A\u5F15\u8D77\u4E0D\u826F\u53CD\u5E94\u800C\u51B2\u7A81\u3002\u201D",
    "words": [
      {
        "word": "act",
        "meaning": "\u626E\u6F14",
        "keyword": "\u8BF4",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "pact",
        "meaning": "\u5951\u7EA6",
        "keyword": "\u5951\u7EA6",
        "added": "p",
        "position": "end"
      },
      {
        "word": "tact",
        "meaning": "\u8BC0\u7A8D",
        "keyword": "\u8BC0\u7A8D",
        "added": "t",
        "position": "end"
      },
      {
        "word": "enact",
        "meaning": "\u8BBE\u5B9A",
        "keyword": "\u8BBE\u5B9A",
        "added": "en",
        "position": "end"
      },
      {
        "word": "exact",
        "meaning": "\u7CBE\u786E",
        "keyword": "\u7CBE\u786E",
        "added": "ex",
        "position": "end"
      },
      {
        "word": "fact",
        "meaning": "\u4E8B\u5B9E",
        "keyword": "\u4E8B\u5B9E",
        "added": "f",
        "position": "end"
      },
      {
        "word": "react",
        "meaning": "\u53CD\u5E94",
        "keyword": "\u53CD\u5E94",
        "added": "re",
        "position": "end"
      },
      {
        "word": "impact",
        "meaning": "\u51B2\u7A81",
        "keyword": "\u51B2\u7A81",
        "added": "imp",
        "position": "end"
      },
      {
        "word": "tract",
        "meaning": "\u5C0F\u518C",
        "keyword": "\u5C0F\u518C",
        "added": "tr",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 250,
    "id": "foo",
    "rime": "FOO",
    "title": "\u50BB\u74DC\u7528\u811A\u8E29\u574F\u665A\u9910",
    "story": "\u53EA\u6709\u50BB\u74DC\u624D\u4F1A\u7528\u811A\u53BB\u8E29\u98DF\u7269\uFF0C\u628A\u597D\u597D\u7684\u665A\u9910\u641E\u7838\uFF0C\u53D8\u6210\u4E00\u5806\u6E23\u6ED3\u3002",
    "words": [
      {
        "word": "fool",
        "meaning": "\u50BB\u74DC",
        "keyword": "\u50BB\u74DC",
        "added": "l",
        "position": "start"
      },
      {
        "word": "foot",
        "meaning": "\u811A",
        "keyword": "\u811A",
        "added": "t",
        "position": "start"
      },
      {
        "word": "food",
        "meaning": "\u98DF\u7269",
        "keyword": "\u98DF\u7269",
        "added": "d",
        "position": "start"
      },
      {
        "word": "foozle",
        "meaning": "\u641E\u7838",
        "keyword": "\u641E\u7838",
        "added": "zle",
        "position": "start"
      },
      {
        "word": "foots",
        "meaning": "\u6E23\u6ED3",
        "keyword": "\u6E23\u6ED3",
        "added": "ts",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 251,
    "id": "ot",
    "rime": "OT",
    "title": "\u8305\u5C4B\u7F50\u4E2D\u6BD2\u54C1\u8BA9\u4EBA\u5815\u843D",
    "story": "\u5728\u8305\u5C4B\u4E2D\u6709\u4EBA\u4ECE\u58F6\u7F50\u4E2D\u62FF\u51FA\u70ED\u95E8\u7684\u6BD2\u54C1\uFF0C\u65E0\u8BBA\u662F\u53EA\u5C1D\u4E00\u70B9\u70B9\u8FD8\u662F\u5F88\u591A\uFF0C\u53EA\u8981\u5C11\u91CF\u7684\u6BD2\u54C1\u5C31\u4F1A\u4F7F\u4EBA\u5815\u843D\uFF0C\u6240\u4EE5\u4F60\u8981\u52C7\u6562\u5730\u8BF4\uFF1A\u201C\u4E0D\u8981\uFF01\u201D",
    "words": [
      {
        "word": "cot",
        "meaning": "\u8305\u5C4B",
        "keyword": "\u8305\u5C4B",
        "added": "c",
        "position": "end"
      },
      {
        "word": "pot",
        "meaning": "\u58F6\u3001\u7F50",
        "keyword": "\u58F6\u7F50",
        "added": "p",
        "position": "end"
      },
      {
        "word": "hot",
        "meaning": "\u70ED\u3001\u70ED\u95E8",
        "keyword": "\u70ED\u95E8",
        "added": "h",
        "position": "end"
      },
      {
        "word": "dot",
        "meaning": "\u4E00\u70B9\u70B9",
        "keyword": "\u4E00\u70B9\u70B9",
        "added": "d",
        "position": "end"
      },
      {
        "word": "jot",
        "meaning": "\u5C11\u91CF",
        "keyword": "\u5C11\u91CF",
        "added": "j",
        "position": "end"
      },
      {
        "word": "lot",
        "meaning": "\u5F88\u591A",
        "keyword": "\u5F88\u591A",
        "added": "l",
        "position": "end"
      },
      {
        "word": "rot",
        "meaning": "\u5815\u843D",
        "keyword": "\u5815\u843D",
        "added": "r",
        "position": "end"
      },
      {
        "word": "not",
        "meaning": "\u4E0D",
        "keyword": "\u4E0D\u8981",
        "added": "n",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 252,
    "id": "ust",
    "rime": "UST",
    "title": "\u8D2A\u6B32\u9707\u6012\u540E\u7528\u8C1A\u8BED\u6CBB\u5FC3",
    "story": "\u4E3A\u6B32\u671B\u4E0D\u80FD\u6EE1\u8DB3\u800C\u9707\u6012\u65F6\uFF0C\u6B63\u597D\u6709\u53E5\u8C1A\u8BED\u53EF\u4EE5\u6CBB\u7597\uFF1A\u201C\u4EBA\u5FC5\u987B\u77E5\u9053\u8D2A\u6B32\u4F1A\u6BC1\u574F\u6211\u4EEC\u7684\u5FC3\uFF0C\u4F7F\u5FC3\u751F\u9508\u5E76\u8499\u4E0A\u7070\u5C18\u3002\u201D",
    "words": [
      {
        "word": "lust",
        "meaning": "\u8D2A\u6B32",
        "keyword": "\u8D2A\u6B32",
        "added": "l",
        "position": "end"
      },
      {
        "word": "gust",
        "meaning": "\u9707\u6012",
        "keyword": "\u9707\u6012",
        "added": "g",
        "position": "end"
      },
      {
        "word": "just",
        "meaning": "\u6B63\u597D",
        "keyword": "\u6B63\u597D",
        "added": "j",
        "position": "end"
      },
      {
        "word": "must",
        "meaning": "\u5FC5\u987B",
        "keyword": "\u5FC5\u987B",
        "added": "m",
        "position": "end"
      },
      {
        "word": "bust",
        "meaning": "\u6BC1\u574F",
        "keyword": "\u6BC1\u574F",
        "added": "b",
        "position": "end"
      },
      {
        "word": "rust",
        "meaning": "\u9508",
        "keyword": "\u751F\u9508",
        "added": "r",
        "position": "end"
      },
      {
        "word": "dust",
        "meaning": "\u7070\u5C18",
        "keyword": "\u7070\u5C18",
        "added": "d",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 253,
    "id": "eek",
    "rime": "EEK",
    "title": "\u5E0C\u814A\u4EBA\u6BCF\u5468\u7AA5\u63A2\u97ED\u8471",
    "story": "\u5E0C\u814A\u4EBA\u5F88\u6E29\u67D4\uFF0C\u6BCF\u5468\u90FD\u5230\u6EAA\u8FB9\u7AA5\u89C6\u63A2\u7D22\u4ED6\u6240\u79CD\u7684\u97ED\u8471\u5230\u5E95\u662F\u957F\u5F97\u5149\u6ED1\u8FD8\u662F\u539A\u8138\u76AE\u3002",
    "words": [
      {
        "word": "greek",
        "meaning": "\u5E0C\u814A\u4EBA",
        "keyword": "\u5E0C\u814A\u4EBA",
        "added": "gr",
        "position": "end"
      },
      {
        "word": "meek",
        "meaning": "\u6E29\u67D4",
        "keyword": "\u6E29\u67D4",
        "added": "m",
        "position": "end"
      },
      {
        "word": "week",
        "meaning": "\u4E00\u5468",
        "keyword": "\u6BCF\u5468",
        "added": "w",
        "position": "end"
      },
      {
        "word": "creek",
        "meaning": "\u5C0F\u6EAA",
        "keyword": "\u6EAA\u8FB9",
        "added": "cr",
        "position": "end"
      },
      {
        "word": "peek",
        "meaning": "\u7AA5\u89C6",
        "keyword": "\u7AA5\u89C6",
        "added": "p",
        "position": "end"
      },
      {
        "word": "seek",
        "meaning": "\u63A2\u7D22",
        "keyword": "\u63A2\u7D22",
        "added": "s",
        "position": "end"
      },
      {
        "word": "leek",
        "meaning": "\u97ED\u8471",
        "keyword": "\u97ED\u8471",
        "added": "l",
        "position": "end"
      },
      {
        "word": "sleek",
        "meaning": "\u5149\u6ED1",
        "keyword": "\u5149\u6ED1",
        "added": "sl",
        "position": "end"
      },
      {
        "word": "cheek",
        "meaning": "\u539A\u8138\u76AE",
        "keyword": "\u539A\u8138\u76AE",
        "added": "ch",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 254,
    "id": "rown",
    "rime": "ROWN",
    "title": "\u574F\u6D88\u606F\u6DF9\u6CA1\u541B\u4E3B\u76B1\u7709",
    "story": "\u5982\u679C\u4F60\u80FD\u591F\u5728\u542C\u4E86\u574F\u6D88\u606F\u4E4B\u540E\uFF0C\u8BA9\u8910\u8272\u738B\u51A0\u6ED1\u843D\uFF0C\u6DF9\u6CA1\u4F60\u7684\u76B1\u7709\uFF0C\u624D\u582A\u79F0\u6210\u719F\u7684\u541B\u4E3B\u3002",
    "words": [
      {
        "word": "brown",
        "meaning": "\u8910\u8272",
        "keyword": "\u8910\u8272",
        "added": "b",
        "position": "end"
      },
      {
        "word": "crown",
        "meaning": "\u738B\u51A0",
        "keyword": "\u738B\u51A0",
        "added": "c",
        "position": "end"
      },
      {
        "word": "drown",
        "meaning": "\u6DF9\u6CA1",
        "keyword": "\u6DF9\u6CA1",
        "added": "d",
        "position": "end"
      },
      {
        "word": "frown",
        "meaning": "\u76B1\u7709",
        "keyword": "\u76B1\u7709",
        "added": "f",
        "position": "end"
      },
      {
        "word": "grown",
        "meaning": "\u6210\u719F\u7684",
        "keyword": "\u6210\u719F",
        "added": "g",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 255,
    "id": "ing",
    "rime": "ING",
    "title": "\u5C0F\u9E1F\u6B4C\u58F0\u6362\u8033\u73AF\u6212\u6307",
    "story": "\u5982\u679C\u4F60\u80FD\u50CF\u5C0F\u9E1F\u822C\u632F\u7FC5\u6447\u6446\u6B4C\u5531\uFF0C\u82E5\u6B4C\u58F0\u5531\u5F97\u50CF\u949F\u58F0\uFF0C\u56FD\u738B\u4F1A\u5956\u8D50\u4F60\u8033\u73AF\u3001\u6212\u6307\uFF1B\u5982\u679C\u4F60\u5531\u5F97\u5520\u53E8\uFF0C\u5219\u7F5A\u4F60\u53D7\u523A\u3002",
    "words": [
      {
        "word": "wing",
        "meaning": "\u7FC5\u8180",
        "keyword": "\u632F\u7FC5",
        "added": "w",
        "position": "end"
      },
      {
        "word": "swing",
        "meaning": "\u6447\u6446",
        "keyword": "\u6447\u6446",
        "added": "sw",
        "position": "end"
      },
      {
        "word": "sing",
        "meaning": "\u6B4C\u5531",
        "keyword": "\u6B4C\u5531",
        "added": "s",
        "position": "end"
      },
      {
        "word": "ding",
        "meaning": "\u949F\u58F0\u3001\u5520\u53E8",
        "keyword": "\u949F\u58F0",
        "added": "d",
        "position": "end"
      },
      {
        "word": "king",
        "meaning": "\u56FD\u738B",
        "keyword": "\u56FD\u738B",
        "added": "k",
        "position": "end"
      },
      {
        "word": "ring",
        "meaning": "\u6212\u6307\u3001\u8033\u73AF",
        "keyword": "\u8033\u73AF\u3001\u6212\u6307",
        "added": "r",
        "position": "end"
      },
      {
        "word": "sting",
        "meaning": "\u523A\u3001\u87AB\u3001\u53EE",
        "keyword": "\u53D7\u523A",
        "added": "st",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 256,
    "id": "amp",
    "rime": "AMP",
    "title": "\u8425\u5730\u6E7F\u6C14\u51A0\u519B\u8B66\u544A\u62BD\u7B4B",
    "story": "\u8425\u5730\u6307\u6325\u5B98\u7528\u6269\u97F3\u5668\u606B\u5413\u8BF4\uFF1A\u201C\u8FD9\u91CC\u662F\u6E7F\u6C14\u51A0\u519B\uFF0C\u4F60\u4EEC\u82E5\u4E0D\u8BBE\u6CD5\u589E\u52A0\u4F53\u5185\u7684\u5B89\u57F9\uFF0C\u5C06\u56E0\u98CE\u6E7F\u800C\u62BD\u7B4B\u3002\u201D",
    "words": [
      {
        "word": "amp",
        "meaning": "\u5B89\u57F9\u3001\u6269\u97F3\u5668",
        "keyword": "\u6269\u97F3\u5668",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "camp",
        "meaning": "\u8425\u5730",
        "keyword": "\u8425\u5730",
        "added": "c",
        "position": "end"
      },
      {
        "word": "ramp",
        "meaning": "\u606B\u5413",
        "keyword": "\u606B\u5413",
        "added": "r",
        "position": "end"
      },
      {
        "word": "damp",
        "meaning": "\u6E7F\u6C14",
        "keyword": "\u6E7F\u6C14",
        "added": "d",
        "position": "end"
      },
      {
        "word": "champ",
        "meaning": "\u51A0\u519B",
        "keyword": "\u51A0\u519B",
        "added": "ch",
        "position": "end"
      },
      {
        "word": "cramp",
        "meaning": "\u62BD\u7B4B",
        "keyword": "\u62BD\u7B4B",
        "added": "cr",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 257,
    "id": "ger",
    "rime": "GER",
    "title": "\u7626\u864E\u70ED\u5FC3\u6253\u8D4C\u8D62\u98DF\u7269",
    "story": "\u4E00\u53EA\u7626\u864E\u5F88\u70ED\u5FC3\u5730\u8DDF\u4EBA\u5BB6\u6253\u8D4C\uFF0C\u56E0\u4E3A\u5B83\u6E34\u671B\u80FD\u8D62\u5F97\u98DF\u7269\u3002",
    "words": [
      {
        "word": "meager",
        "meaning": "\u7626\u3001\u8D2B\u5F31",
        "keyword": "\u7626",
        "added": "mea",
        "position": "end"
      },
      {
        "word": "eager",
        "meaning": "\u70ED\u5FC3",
        "keyword": "\u70ED\u5FC3",
        "added": "ea",
        "position": "end"
      },
      {
        "word": "wager",
        "meaning": "\u6253\u8D4C",
        "keyword": "\u6253\u8D4C",
        "added": "wa",
        "position": "end"
      },
      {
        "word": "tiger",
        "meaning": "\u8001\u864E",
        "keyword": "\u864E",
        "added": "ti",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 258,
    "id": "are2",
    "rime": "ARE",
    "title": "\u4ED8\u8F66\u8D39\u5206\u5230\u5E7F\u573A\u70E7\u9676",
    "story": "\u662F\u56E0\u4E3A\u76EE\u524D\u7A7A\u7F6E\u4E0D\u7528\u7684\u623F\u5B50\u592A\u591A\uFF0C\u53EA\u8981\u4F60\u4ED8\u4E00\u5F20\u8F66\u7968\u7684\u94B1\uFF0C\u5C31\u5206\u8BA9\u51FA\u6B63\u65B9\u5F62\u5E7F\u573A\u7684\u4E00\u4EFD\uFF0C\u8BA9\u4F60\u70E7\u706B\u5236\u9676\u3002",
    "words": [
      {
        "word": "are",
        "meaning": "\u662F\uFF08be\u7684\u590D\u6570\u5F62\u5F0F\uFF09",
        "keyword": "\u662F\u56E0\u4E3A",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "fare",
        "meaning": "\u8F66\u8D39\u3001\u7968\u4EF7",
        "keyword": "\u8F66\u7968",
        "added": "f",
        "position": "end"
      },
      {
        "word": "spare",
        "meaning": "\u5206\u8BA9",
        "keyword": "\u5206\u8BA9",
        "added": "sp",
        "position": "end"
      },
      {
        "word": "share",
        "meaning": "\u5408\u7528\u3001\u4E00\u4EFD",
        "keyword": "\u4E00\u4EFD",
        "added": "sh",
        "position": "end"
      },
      {
        "word": "square",
        "meaning": "\u6B63\u65B9\u5F62\u3001\u5E7F\u573A",
        "keyword": "\u6B63\u65B9\u5F62\u5E7F\u573A",
        "added": "squ",
        "position": "end"
      },
      {
        "word": "flare",
        "meaning": "\u71C3\u70E7\u3001\u706B\u7130",
        "keyword": "\u70E7\u706B",
        "added": "fl",
        "position": "end"
      },
      {
        "word": "ware",
        "meaning": "\u9676\u5668",
        "keyword": "\u5236\u9676",
        "added": "w",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 259,
    "id": "obby",
    "rime": "OBBY",
    "title": "\u5C0F\u9A6C\u54E5\u5728\u95E8\u5385\u611F\u4F24\u7AD9\u7ACB",
    "story": "\u50CF\u5C0F\u9A6C\u54E5\u4E00\u822C\u611F\u4F24\u5730\u7AD9\u5728\u95E8\u5385\uFF0C\u662F\u4ECA\u5929\u5E74\u8F7B\u4EBA\u65F6\u9AE6\u7684\u55DC\u597D\u3002",
    "words": [
      {
        "word": "cobby",
        "meaning": "\u50CF\u5C0F\u9A6C\u7684",
        "keyword": "\u50CF\u5C0F\u9A6C\u54E5",
        "added": "c",
        "position": "end"
      },
      {
        "word": "sobby",
        "meaning": "\u611F\u4F24\u7684\u3001\u6E7F\u900F\u7684\uFF08\uFF1DSOPPY\uFF09",
        "keyword": "\u611F\u4F24",
        "added": "s",
        "position": "end"
      },
      {
        "word": "lobby",
        "meaning": "\u95E8\u5385",
        "keyword": "\u95E8\u5385",
        "added": "l",
        "position": "end"
      },
      {
        "word": "nobby",
        "meaning": "\u65F6\u9AE6\u7684\u3001\u4E0A\u6D41\u4EBA\u7269\u7684",
        "keyword": "\u65F6\u9AE6",
        "added": "n",
        "position": "end"
      },
      {
        "word": "hobby",
        "meaning": "\u55DC\u597D",
        "keyword": "\u55DC\u597D",
        "added": "h",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 260,
    "id": "ind2",
    "rime": "IND",
    "title": "\u806A\u660E\u4EBA\u6346\u7ED1\u540C\u7C7B\u4EA7\u54C1\u51FA\u552E",
    "story": "\u667A\u529B\u597D\u7684\u4EBA\u4F1A\u627E\u5BFB\u5916\u89C2\u3001\u79CD\u7C7B\u76F8\u540C\u7684\u4EA7\u54C1\uFF0C\u6346\u7ED1\u8D77\u6765\u4E00\u8D77\u5356\u3002",
    "words": [
      {
        "word": "mind",
        "meaning": "\u667A\u529B",
        "keyword": "\u667A\u529B\u597D",
        "added": "m",
        "position": "end"
      },
      {
        "word": "find",
        "meaning": "\u627E\u5BFB",
        "keyword": "\u627E\u5BFB",
        "added": "f",
        "position": "end"
      },
      {
        "word": "rind",
        "meaning": "\u5916\u89C2\u3001\u76AE\u58F3",
        "keyword": "\u5916\u89C2",
        "added": "r",
        "position": "end"
      },
      {
        "word": "kind",
        "meaning": "\u79CD\u7C7B",
        "keyword": "\u79CD\u7C7B",
        "added": "k",
        "position": "end"
      },
      {
        "word": "bind",
        "meaning": "\u6346\u3001\u7ED1",
        "keyword": "\u6346\u7ED1",
        "added": "b",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 261,
    "id": "plo",
    "rime": "PLO",
    "title": "\u96CF\u9E20\u5B88\u62A4\u571F\u5730\u4E0A\u7684\u7281",
    "story": "\u6BCF\u79CD\u9E1F\u6709\u4E0D\u540C\u7684\u5DE5\u4F5C\uFF0C\u96CF\u9E20\u7684\u804C\u4E1A\u5C31\u662F\u5728\u5C0F\u5757\u571F\u5730\u4E0A\u5B88\u62A4\u7740\u7281\u3002",
    "words": [
      {
        "word": "ploy",
        "meaning": "\u5DE5\u4F5C\u3001\u804C\u4E1A",
        "keyword": "\u5DE5\u4F5C",
        "added": "y",
        "position": "start"
      },
      {
        "word": "plover",
        "meaning": "\u96CF\u9E20",
        "keyword": "\u96CF\u9E20",
        "added": "ver",
        "position": "start"
      },
      {
        "word": "plot",
        "meaning": "\u9634\u8C0B\u3001\u5C0F\u5757\u571F\u5730",
        "keyword": "\u5C0F\u5757\u571F\u5730",
        "added": "t",
        "position": "start"
      },
      {
        "word": "plow",
        "meaning": "\u7281",
        "keyword": "\u7281",
        "added": "w",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 262,
    "id": "pain",
    "rime": "PAIN",
    "title": "\u753B\u5BB6\u6539\u884C\u5F00\u6CB9\u6F06\u5E97",
    "story": "\u753B\u5BB6\u7684\u75DB\u82E6\u662F\u7ED8\u753B\u8D5A\u4E0D\u5230\u94B1\uFF0C\u53EA\u597D\u6539\u884C\u5356\u6CB9\u6F06\uFF0C\u5F00\u6CB9\u6F06\u5E97\u3002",
    "words": [
      {
        "word": "pain",
        "meaning": "\u75DB\u82E6",
        "keyword": "\u75DB\u82E6",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "painter",
        "meaning": "\u753B\u5BB6\u3001\u6CB9\u6F06\u5320",
        "keyword": "\u753B\u5BB6",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "painting",
        "meaning": "\u7ED8\u753B",
        "keyword": "\u7ED8\u753B",
        "added": "ting",
        "position": "start"
      },
      {
        "word": "paint",
        "meaning": "\u989C\u6599\u3001\u6CB9\u6F06",
        "keyword": "\u6CB9\u6F06",
        "added": "t",
        "position": "start"
      },
      {
        "word": "painty",
        "meaning": "\u989C\u6599\u7684",
        "keyword": "\u6CB9\u6F06",
        "added": "ty",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 263,
    "id": "bul",
    "rime": "BUL",
    "title": "\u516C\u725B\u961F\u4E54\u4E39\u50CF\u5B50\u5F39\u98DE\u8DC3",
    "story": "\u516C\u725B\u961F\u7684\u4E54\u4E39\u8EAB\u8EAF\u9B41\u68A7\uFF0C\u5934\u50CF\u7535\u706F\u6CE1\uFF0C\u98DE\u8DC3\u65F6\u50CF\u5B50\u5F39\uFF0C\u662FNBA\u91CC\u8EAB\u4EF7\u66B4\u6DA8\u7684\u9738\u738B\u3002",
    "words": [
      {
        "word": "bull",
        "meaning": "\u516C\u725B",
        "keyword": "\u516C\u725B\u961F",
        "added": "l",
        "position": "start"
      },
      {
        "word": "bulk",
        "meaning": "\u8EAB\u8EAF",
        "keyword": "\u8EAB\u8EAF\u9B41\u68A7",
        "added": "k",
        "position": "start"
      },
      {
        "word": "bulb",
        "meaning": "\u7535\u706F\u6CE1",
        "keyword": "\u7535\u706F\u6CE1",
        "added": "b",
        "position": "start"
      },
      {
        "word": "bullet",
        "meaning": "\u5B50\u5F39",
        "keyword": "\u50CF\u5B50\u5F39",
        "added": "let",
        "position": "start"
      },
      {
        "word": "bulge",
        "meaning": "\u9F13\u80C0\u3001\u66B4\u6DA8",
        "keyword": "\u66B4\u6DA8",
        "added": "ge",
        "position": "start"
      },
      {
        "word": "bully",
        "meaning": "\u9738\u738B",
        "keyword": "\u9738\u738B",
        "added": "ly",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 264,
    "id": "us",
    "rime": "US",
    "title": "\u52A0\u51CF\u8F66\u94B1\u540E\u51B3\u5B9A\u6B65\u884C",
    "story": "\u60F3\u642D\u5DF4\u58EB\uFF0C\u4E0D\u8FC7\u52A0\u52A0\u51CF\u51CF\u53E3\u888B\u91CC\u7684\u94B1\u4E4B\u540E\u53EA\u80FD\u8BF4\uFF1A\u201C\u8BA9\u6211\u4EEC\u8D70\u8DEF\u5427\u3002\u201D",
    "words": [
      {
        "word": "us",
        "meaning": "\u6211\u4EEC\uFF08\u5BBE\u683C\uFF09",
        "keyword": "\u6211\u4EEC",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "bus",
        "meaning": "\u5DF4\u58EB",
        "keyword": "\u5DF4\u58EB",
        "added": "b",
        "position": "end"
      },
      {
        "word": "plus",
        "meaning": "\u52A0",
        "keyword": "\u52A0\u52A0",
        "added": "pl",
        "position": "end"
      },
      {
        "word": "minus",
        "meaning": "\u51CF",
        "keyword": "\u51CF\u51CF",
        "added": "min",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 265,
    "id": "mis",
    "rime": "MIS",
    "title": "\u96FE\u4E2D\u5148\u751F\u8BEF\u8BA4\u5973\u4E3B\u4EBA",
    "story": "\u5728\u96FE\u4E2D\u72AF\u9519\u8BEF\u662F\u96BE\u514D\u7684\uFF0C\u4F46\u662F\u5148\u751F\u628A\u5973\u4E3B\u4EBA\u9519\u770B\u6210\u60C5\u5987\uFF0C\u8BEF\u7528\u4E86\u8A00\u8BCD\u53EF\u5C31\u4E0D\u5F97\u4E86\u3002",
    "words": [
      {
        "word": "mist",
        "meaning": "\u96FE",
        "keyword": "\u96FE\u4E2D",
        "added": "t",
        "position": "start"
      },
      {
        "word": "mistake",
        "meaning": "\u9519\u8BEF",
        "keyword": "\u9519\u8BEF",
        "added": "take",
        "position": "start"
      },
      {
        "word": "mister",
        "meaning": "\u5148\u751F",
        "keyword": "\u5148\u751F",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "mistress",
        "meaning": "\u5973\u4E3B\u4EBA\u3001\u60C5\u5987",
        "keyword": "\u5973\u4E3B\u4EBA",
        "added": "tress",
        "position": "start"
      },
      {
        "word": "misuse",
        "meaning": "\u8BEF\u7528",
        "keyword": "\u8BEF\u7528",
        "added": "use",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 266,
    "id": "fi",
    "rime": "FI",
    "title": "\u9C7C\u7528\u9CCD\u4E89\u593A\u4E94\u9897\u65E0\u82B1\u679C",
    "story": "\u9C7C\u8BF4\uFF1A\u201C\u6211\u53EA\u6709\u9CCD\u800C\u6CA1\u6709\u62F3\u5934\uFF0C\u4E0D\u9002\u5408\u5212\u62F3\u640F\u6597\uFF0C\u6700\u540E\u53EA\u597D\u51B3\u5B9A\u7ED3\u675F\u4E89\u593A\u8FD9\u4E94\u9897\u65E0\u82B1\u679C\u3002\u201D",
    "words": [
      {
        "word": "fish",
        "meaning": "\u9C7C",
        "keyword": "\u9C7C",
        "added": "sh",
        "position": "start"
      },
      {
        "word": "fin",
        "meaning": "\u9CCD",
        "keyword": "\u9CCD",
        "added": "n",
        "position": "start"
      },
      {
        "word": "fist",
        "meaning": "\u62F3\u5934",
        "keyword": "\u62F3\u5934",
        "added": "st",
        "position": "start"
      },
      {
        "word": "fit",
        "meaning": "\u9002\u5408",
        "keyword": "\u4E0D\u9002\u5408",
        "added": "t",
        "position": "start"
      },
      {
        "word": "fight",
        "meaning": "\u640F\u6597",
        "keyword": "\u640F\u6597",
        "added": "ght",
        "position": "start"
      },
      {
        "word": "final",
        "meaning": "\u6700\u540E",
        "keyword": "\u6700\u540E",
        "added": "nal",
        "position": "start"
      },
      {
        "word": "fix",
        "meaning": "\u51B3\u5B9A",
        "keyword": "\u51B3\u5B9A",
        "added": "x",
        "position": "start"
      },
      {
        "word": "finish",
        "meaning": "\u7ED3\u675F",
        "keyword": "\u7ED3\u675F",
        "added": "nish",
        "position": "start"
      },
      {
        "word": "five",
        "meaning": "\u4E94",
        "keyword": "\u4E94\u9897",
        "added": "ve",
        "position": "start"
      },
      {
        "word": "fig",
        "meaning": "\u65E0\u82B1\u679C",
        "keyword": "\u65E0\u82B1\u679C",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 267,
    "id": "ight3",
    "rime": "IGHT",
    "title": "\u732B\u5934\u9E70\u767D\u5929\u6234\u7D27\u592A\u9633\u955C\u98DE\u6D77\u6E7E",
    "story": "\u732B\u5934\u9E70\u5988\u5988\u5BF9\u5C0F\u732B\u5934\u9E70\u8BF4\uFF1A\u201C\u767D\u5929\u5149\u7EBF\u592A\u4EAE\uFF0C\u82E5\u4E0D\u7CFB\u7D27\u592A\u9633\u773C\u955C\u8C03\u63A7\u89C6\u529B\uFF0C\u800C\u5230\u6D77\u6E7E\u98DE\u7FD4\uFF0C\u4F1A\u5413\u5230\u5988\u5988\u3002\u201D",
    "words": [
      {
        "word": "light",
        "meaning": "\u5149\u3001\u8F7B\u7684",
        "keyword": "\u5149\u7EBF",
        "added": "l",
        "position": "end"
      },
      {
        "word": "bright",
        "meaning": "\u4EAE\u7684",
        "keyword": "\u592A\u4EAE",
        "added": "br",
        "position": "end"
      },
      {
        "word": "tight",
        "meaning": "\u7D27\u7684",
        "keyword": "\u7CFB\u7D27",
        "added": "t",
        "position": "end"
      },
      {
        "word": "sight",
        "meaning": "\u89C6\u529B\u3001\u89C6\u89C9",
        "keyword": "\u89C6\u529B",
        "added": "s",
        "position": "end"
      },
      {
        "word": "bight",
        "meaning": "\u6D77\u6E7E",
        "keyword": "\u6D77\u6E7E",
        "added": "b",
        "position": "end"
      },
      {
        "word": "flight",
        "meaning": "\u98DE\u7FD4",
        "keyword": "\u98DE\u7FD4",
        "added": "fl",
        "position": "end"
      },
      {
        "word": "fright",
        "meaning": "\u5413\u552C\u3001\u6050\u6016",
        "keyword": "\u5413\u5230",
        "added": "fr",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 268,
    "id": "fil",
    "rime": "FIL",
    "title": "\u5077\u6863\u6848\u8FC7\u6EE4\u7325\u4EB5\u80F6\u5377\u7167\u7247",
    "story": "\u5979\u53BB\u5077\u7A83F\u6863\u6848\uFF0C\u4E3A\u7684\u662F\u8981\u8FC7\u6EE4\u4E00\u4E0B\u88C5\u6EE1\u7740\u7325\u4EB5\u80F6\u5377\u7684\u6863\u6848\u4E2D\u81EA\u5DF1\u7684\u7167\u7247\u3002",
    "words": [
      {
        "word": "filch",
        "meaning": "\u5077\u7A83",
        "keyword": "\u5077\u7A83",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "file",
        "meaning": "\u6863\u6848",
        "keyword": "\u6863\u6848",
        "added": "e",
        "position": "start"
      },
      {
        "word": "filter",
        "meaning": "\u8FC7\u6EE4\u3001\u8D70\u6F0F",
        "keyword": "\u8FC7\u6EE4",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "fill",
        "meaning": "\u88C5\u6EE1",
        "keyword": "\u88C5\u6EE1",
        "added": "l",
        "position": "start"
      },
      {
        "word": "filth",
        "meaning": "\u7325\u4EB5\u3001\u6C61\u79FD",
        "keyword": "\u7325\u4EB5",
        "added": "th",
        "position": "start"
      },
      {
        "word": "film",
        "meaning": "\u80F6\u5377",
        "keyword": "\u80F6\u5377",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 269,
    "id": "co",
    "rime": "CO",
    "title": "\u516C\u9E21\u7A7F\u5916\u8863\u559D\u6728\u70AD\u5496\u5561\u770B\u6CD5\u5178",
    "story": "\u516C\u9E21\u5728\u5BD2\u51B7\u7684\u591C\u665A\u7A7F\u4E0A\u5916\u8863\u5230\u9910\u5385\uFF0C\u82B1\u4E00\u4E2A\u786C\u5E01\u8981\u676F\u6728\u70AD\u70E7\u7684\u5496\u5561\uFF0C\u8FB9\u559D\u8FB9\u770B\u6CD5\u5178\u3002",
    "words": [
      {
        "word": "cock",
        "meaning": "\u516C\u9E21",
        "keyword": "\u516C\u9E21",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "cold",
        "meaning": "\u5BD2\u51B7",
        "keyword": "\u5BD2\u51B7",
        "added": "ld",
        "position": "start"
      },
      {
        "word": "coat",
        "meaning": "\u5916\u8863",
        "keyword": "\u5916\u8863",
        "added": "at",
        "position": "start"
      },
      {
        "word": "coin",
        "meaning": "\u786C\u5E01",
        "keyword": "\u786C\u5E01",
        "added": "in",
        "position": "start"
      },
      {
        "word": "coal",
        "meaning": "\u7164\u3001\u6728\u70AD",
        "keyword": "\u6728\u70AD",
        "added": "al",
        "position": "start"
      },
      {
        "word": "coffee",
        "meaning": "\u5496\u5561",
        "keyword": "\u5496\u5561",
        "added": "ffee",
        "position": "start"
      },
      {
        "word": "code",
        "meaning": "\u6CD5\u5178",
        "keyword": "\u6CD5\u5178",
        "added": "de",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 270,
    "id": "shee",
    "rime": "SHEE",
    "title": "\u5E8A\u5355\u4E0A\u7684\u900F\u660E\u5149\u6CFD\u6BCD\u7F8A\u56FE\u6848",
    "story": "\u6BCD\u7F8A\u8BF4\uFF1A\u201C\u62B1\u6B49\uFF01\u6211\u7EAF\u7CB9\u53EA\u662F\u5370\u5728\u4E00\u6761\u6709\u5149\u6CFD\u800C\u900F\u660E\u7684\u5E8A\u5355\u4E0A\u7684\u56FE\u6848\uFF0C\u800C\u4E0D\u662F\u771F\u7684\u7F8A\u3002\u201D",
    "words": [
      {
        "word": "sheen",
        "meaning": "\u5149\u6CFD",
        "keyword": "\u5149\u6CFD",
        "added": "n",
        "position": "start"
      },
      {
        "word": "sheer",
        "meaning": "\u900F\u660E\u7684\u3001\u7EAF\u7CB9\u7684",
        "keyword": "\u900F\u660E",
        "added": "r",
        "position": "start"
      },
      {
        "word": "sheet",
        "meaning": "\u5E8A\u5355",
        "keyword": "\u5E8A\u5355",
        "added": "t",
        "position": "start"
      },
      {
        "word": "sheep",
        "meaning": "\u7F8A",
        "keyword": "\u6BCD\u7F8A",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 271,
    "id": "cho",
    "rime": "CHO",
    "title": "\u5988\u5988\u903C\u5973\u513F\u5728\u5531\u8BD7\u4E0E\u5DE7\u514B\u529B\u95F4\u9009\u62E9",
    "story": "\u5988\u5988\u5BF9\u5973\u513F\u8BF4\uFF1A\u201C\u4F60\u53EF\u4EE5\u9009\u62E9\u5531\u8BD7\u73ED\u6216\u5408\u5531\u56E2\uFF0C\u5982\u679C\u4F60\u9009\u62E9\u5DE7\u514B\u529B\uFF0C\u6211\u5C31\u95F7\u6B7B\u4F60\u6216\u5288\u6B7B\u4F60\u3002\u201D",
    "words": [
      {
        "word": "choice",
        "meaning": "\u9009\u62E9",
        "keyword": "\u9009\u62E9",
        "added": "ice",
        "position": "start"
      },
      {
        "word": "choir",
        "meaning": "\u5531\u8BD7\u73ED",
        "keyword": "\u5531\u8BD7\u73ED",
        "added": "ir",
        "position": "start"
      },
      {
        "word": "chorus",
        "meaning": "\u5408\u5531\u56E2",
        "keyword": "\u5408\u5531\u56E2",
        "added": "rus",
        "position": "start"
      },
      {
        "word": "chocolate",
        "meaning": "\u5DE7\u514B\u529B",
        "keyword": "\u5DE7\u514B\u529B",
        "added": "colate",
        "position": "start"
      },
      {
        "word": "chop",
        "meaning": "\u5241\u3001\u5207\u3001\u5288",
        "keyword": "\u5288\u6B7B",
        "added": "p",
        "position": "start"
      },
      {
        "word": "choke",
        "meaning": "\u95F7\u6B7B\u3001\u7A92\u606F",
        "keyword": "\u95F7\u6B7B",
        "added": "ke",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 272,
    "id": "bea",
    "rime": "BEA",
    "title": "\u7F8E\u4E3D\u718A\u5728\u6D77\u6EE9\u4E32\u8C46\u5FF5\u73E0",
    "story": "\u4E00\u53EA\u7F8E\u4E3D\u7684\u718A\u5728\u6D77\u6EE9\u4E0A\u770B\u5230\u4E86\u8BB8\u591A\u8C46\u5B50\uFF0C\u4E8E\u662F\u628A\u5B83\u4EEC\u4E32\u6210\u4E00\u4E32\u5FF5\u73E0\u3002",
    "words": [
      {
        "word": "beauty",
        "meaning": "\u7F8E\u4E3D",
        "keyword": "\u7F8E\u4E3D",
        "added": "uty",
        "position": "start"
      },
      {
        "word": "bear",
        "meaning": "\u718A",
        "keyword": "\u718A",
        "added": "r",
        "position": "start"
      },
      {
        "word": "beach",
        "meaning": "\u6D77\u6EE9",
        "keyword": "\u6D77\u6EE9",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "bean",
        "meaning": "\u8C46",
        "keyword": "\u8C46\u5B50",
        "added": "n",
        "position": "start"
      },
      {
        "word": "bead",
        "meaning": "\u73E0\u5B50\u3001\u5FF5\u73E0",
        "keyword": "\u5FF5\u73E0",
        "added": "d",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 273,
    "id": "be",
    "rime": "BE",
    "title": "\u871C\u8702\u6253\u8D4C\u8F93\u7FC5\u8180\u6210\u4E3A\u4E5E\u4E10",
    "story": "\u4ECE\u524D\u6709\u4E00\u53EA\u871C\u8702\u56E0\u4E3A\u6253\u8D4C\u800C\u8F93\u6389\u4E86\u7FC5\u8180\uFF0C\u4E8E\u662F\u6210\u4E3A\u5230\u5904\u4E5E\u8BA8\u7684\u4E5E\u4E10\u3002",
    "words": [
      {
        "word": "be",
        "meaning": "\u6210\u4E3A",
        "keyword": "\u6210\u4E3A",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "before",
        "meaning": "\u4ECE\u524D",
        "keyword": "\u4ECE\u524D",
        "added": "fore",
        "position": "start"
      },
      {
        "word": "bee",
        "meaning": "\u871C\u8702",
        "keyword": "\u871C\u8702",
        "added": "e",
        "position": "start"
      },
      {
        "word": "bet",
        "meaning": "\u6253\u8D4C",
        "keyword": "\u6253\u8D4C",
        "added": "t",
        "position": "start"
      },
      {
        "word": "beg",
        "meaning": "\u4E5E\u8BA8\u3001\u8BF7\u6C42",
        "keyword": "\u4E5E\u8BA8",
        "added": "g",
        "position": "start"
      },
      {
        "word": "beggar",
        "meaning": "\u4E5E\u4E10",
        "keyword": "\u4E5E\u4E10",
        "added": "ggar",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 274,
    "id": "fir",
    "rime": "FIR",
    "title": "\u6E2F\u6E7E\u7B2C\u4E00\u7ED3\u5B9E\u51B7\u6749\u5411\u706B\u8BA4\u8F93",
    "story": "\u706B\u7130\u5BF9\u51B7\u6749\u8BF4\uFF1A\u201C\u4F60\u7684\u786E\u662F\u6E2F\u6E7E\u7B2C\u4E00\u9177\u3001\u7B2C\u4E00\u7ED3\u5B9E\u7684\u6811\uFF0C\u4F46\u4E0D\u8BBA\u662F\u8C01\uFF0C\u51E1\u662F\u9047\u5230\u4E86\u706B\u90FD\u5F97\u670D\u8F93\u3002\u201D",
    "words": [
      {
        "word": "fir",
        "meaning": "\u51B7\u6749",
        "keyword": "\u51B7\u6749",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "fire",
        "meaning": "\u706B\u3001\u706B\u7130",
        "keyword": "\u706B\u7130",
        "added": "e",
        "position": "start"
      },
      {
        "word": "firth",
        "meaning": "\u6E2F\u6E7E\u3001\u5165\u6D77\u53E3",
        "keyword": "\u6E2F\u6E7E",
        "added": "th",
        "position": "start"
      },
      {
        "word": "first",
        "meaning": "\u7B2C\u4E00",
        "keyword": "\u7B2C\u4E00",
        "added": "st",
        "position": "start"
      },
      {
        "word": "firm",
        "meaning": "\u7ED3\u5B9E",
        "keyword": "\u7ED3\u5B9E",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 275,
    "id": "che",
    "rime": "CHE",
    "title": "\u7528\u5047\u652F\u7968\u4E70\u4FBF\u5B9C\u6A31\u6843\u4E73\u916A",
    "story": "\u6A31\u6843\u3001\u4E73\u916A\u90FD\u662F\u4FBF\u5B9C\u7684\u4E1C\u897F\uFF0C\u6240\u4EE5\u522B\u7528\u5047\u652F\u7968\u53BB\u6B3A\u9A97\u8BC8\u53D6\uFF0C\u4E07\u4E00\u88AB\u67E5\u51FA\u6765\u4E0D\u5C31\u7EA2\u4E86\u8138\u988A\u5417\uFF1F",
    "words": [
      {
        "word": "cherry",
        "meaning": "\u6A31\u6843",
        "keyword": "\u6A31\u6843",
        "added": "rry",
        "position": "start"
      },
      {
        "word": "cheese",
        "meaning": "\u4E73\u916A",
        "keyword": "\u4E73\u916A",
        "added": "ese",
        "position": "start"
      },
      {
        "word": "cheap",
        "meaning": "\u4FBF\u5B9C",
        "keyword": "\u4FBF\u5B9C",
        "added": "ap",
        "position": "start"
      },
      {
        "word": "check",
        "meaning": "\u652F\u7968\u3001\u6838\u5BF9",
        "keyword": "\u652F\u7968",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "cheat",
        "meaning": "\u6B3A\u9A97\u3001\u8BC8\u53D6",
        "keyword": "\u6B3A\u9A97\u8BC8\u53D6",
        "added": "at",
        "position": "start"
      },
      {
        "word": "cheek",
        "meaning": "\u8138\u988A",
        "keyword": "\u8138\u988A",
        "added": "ek",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 276,
    "id": "ca",
    "rime": "CA",
    "title": "\u52A0\u62FF\u5927\u9910\u5385\u4FDD\u6301\u9547\u9759\u52FF\u62CD\u7167\u547C\u53EB",
    "story": "\u5728\u52A0\u62FF\u5927\u7684\u9910\u5385\u91CC\u7528\u9910\u8981\u4FDD\u6301\u9547\u9759\uFF0C\u5343\u4E07\u4E0D\u8981\u7528\u7167\u76F8\u673A\u62CD\u7167\uFF0C\u4E5F\u4E0D\u8981\u7528\u7535\u8BDD\u547C\u53EB\u522B\u4EBA\u3002",
    "words": [
      {
        "word": "canada",
        "meaning": "\u52A0\u62FF\u5927",
        "keyword": "\u52A0\u62FF\u5927",
        "added": "nada",
        "position": "start"
      },
      {
        "word": "cafe",
        "meaning": "\u9910\u5385",
        "keyword": "\u9910\u5385",
        "added": "fe",
        "position": "start"
      },
      {
        "word": "calm",
        "meaning": "\u9547\u9759",
        "keyword": "\u9547\u9759",
        "added": "lm",
        "position": "start"
      },
      {
        "word": "camera",
        "meaning": "\u7167\u76F8\u673A",
        "keyword": "\u7167\u76F8\u673A",
        "added": "mera",
        "position": "start"
      },
      {
        "word": "call",
        "meaning": "\u547C\u3001\u53EB",
        "keyword": "\u547C\u53EB",
        "added": "ll",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 277,
    "id": "cha",
    "rime": "CHA",
    "title": "\u95F2\u8C08\u4ECE\u5916\u8868\u9B45\u529B\u8BF4\u5230\u7EAF\u6D01\u6148\u60B2",
    "story": "\u5979\u4EEC\u558B\u558B\u4E0D\u4F11\u5730\u95F2\u8C08\uFF0C\u5185\u5BB9\u4ECE\u8FFD\u6C42\u5916\u8868\u7684\u9B45\u529B\u5230\u5185\u5FC3\u7EAF\u6D01\u7684\u5E03\u65BD\u3001\u6148\u60B2\u3002",
    "words": [
      {
        "word": "chatter",
        "meaning": "\u558B\u558B\u4E0D\u4F11",
        "keyword": "\u558B\u558B\u4E0D\u4F11",
        "added": "tter",
        "position": "start"
      },
      {
        "word": "chat",
        "meaning": "\u95F2\u8C08",
        "keyword": "\u95F2\u8C08",
        "added": "t",
        "position": "start"
      },
      {
        "word": "chase",
        "meaning": "\u8FFD\u6C42",
        "keyword": "\u8FFD\u6C42",
        "added": "se",
        "position": "start"
      },
      {
        "word": "charm",
        "meaning": "\u9B45\u529B",
        "keyword": "\u9B45\u529B",
        "added": "rm",
        "position": "start"
      },
      {
        "word": "chaste",
        "meaning": "\u8D1E\u6D01\u3001\u7EAF\u6D01",
        "keyword": "\u7EAF\u6D01",
        "added": "ste",
        "position": "start"
      },
      {
        "word": "charity",
        "meaning": "\u5E03\u65BD\u3001\u6148\u60B2",
        "keyword": "\u5E03\u65BD\u3001\u6148\u60B2",
        "added": "rity",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 278,
    "id": "cha2",
    "rime": "CHA",
    "title": "\u8B66\u957F\u7ED9\u5077\u6905\u7C89\u7B14\u8005\u6539\u8FC7\u673A\u4F1A",
    "story": "\u8B66\u957F\u8BF4\uFF1A\u201C\u4F60\u8FD9\u5BB6\u4F19\u8FDE\u7EED\u5077\u4E86\u6905\u5B50\u548C\u7C89\u7B14\uFF0C\u73B0\u5728\u7ED9\u4F60\u673A\u4F1A\u6765\u6539\u53D8\u8FD9\u4E00\u5207\uFF0C\u4F60\u53EF\u4EE5\u4ED8\u8D39\uFF0C\u5426\u5219\u4F60\u5C06\u88AB\u8FFD\u6355\u3002\u201D",
    "words": [
      {
        "word": "chap",
        "meaning": "\u5BB6\u4F19",
        "keyword": "\u5BB6\u4F19",
        "added": "p",
        "position": "start"
      },
      {
        "word": "chain",
        "meaning": "\u94FE\u5B50\u3001\u8FDE\u7EED",
        "keyword": "\u8FDE\u7EED",
        "added": "in",
        "position": "start"
      },
      {
        "word": "chair",
        "meaning": "\u6905\u5B50",
        "keyword": "\u6905\u5B50",
        "added": "ir",
        "position": "start"
      },
      {
        "word": "chalk",
        "meaning": "\u7C89\u7B14",
        "keyword": "\u7C89\u7B14",
        "added": "lk",
        "position": "start"
      },
      {
        "word": "chance",
        "meaning": "\u673A\u4F1A",
        "keyword": "\u673A\u4F1A",
        "added": "nce",
        "position": "start"
      },
      {
        "word": "change",
        "meaning": "\u6539\u53D8",
        "keyword": "\u6539\u53D8",
        "added": "nge",
        "position": "start"
      },
      {
        "word": "charge",
        "meaning": "\u8D39\u7528",
        "keyword": "\u4ED8\u8D39",
        "added": "rge",
        "position": "start"
      },
      {
        "word": "chase",
        "meaning": "\u8FFD\u6355",
        "keyword": "\u8FFD\u6355",
        "added": "se",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 279,
    "id": "chi",
    "rime": "CHI",
    "title": "\u829D\u52A0\u54E5\u5C0F\u5B69\u6253\u788E\u74F7\u5668\u53D8\u5BD2\u6817\u9E21",
    "story": "\u5728\u829D\u52A0\u54E5\u5343\u4E07\u522B\u8BA9\u5C0F\u5B69\u53BB\u6478\u4E2D\u56FD\u74F7\u5668\uFF0C\u5426\u5219\u6253\u6210\u788E\u7247\u65F6\u4F60\u5C31\u4F1A\u53D8\u6210\u4E00\u53EA\u5BD2\u6817\u7684\u9E21\u3002",
    "words": [
      {
        "word": "chicago",
        "meaning": "\u829D\u52A0\u54E5",
        "keyword": "\u829D\u52A0\u54E5",
        "added": "cago",
        "position": "start"
      },
      {
        "word": "child",
        "meaning": "\u5C0F\u5B69",
        "keyword": "\u5C0F\u5B69",
        "added": "ld",
        "position": "start"
      },
      {
        "word": "china",
        "meaning": "\u4E2D\u56FD\u3001\u74F7\u5668",
        "keyword": "\u74F7\u5668",
        "added": "na",
        "position": "start"
      },
      {
        "word": "chip",
        "meaning": "\u788E\u7247",
        "keyword": "\u788E\u7247",
        "added": "p",
        "position": "start"
      },
      {
        "word": "chill",
        "meaning": "\u5BD2\u6817",
        "keyword": "\u5BD2\u6817",
        "added": "ll",
        "position": "start"
      },
      {
        "word": "chicken",
        "meaning": "\u9E21",
        "keyword": "\u9E21",
        "added": "cken",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 280,
    "id": "lao",
    "rime": "LAO",
    "title": "\u8001\u5B50\u5173\u5FC3\u4F4F\u5728\u8001\u631D\u7684\u8001\u631D\u4EBA",
    "story": "\u8001\u5B50\u662F\u4E2A\u5BF9\u5B97\u6559\u3001\u653F\u6CBB\u4E0D\u5173\u5FC3\u7684\u4EBA\uFF0C\u53EF\u662F\u4ED6\u5374\u5F88\u5173\u5FC3\u4F4F\u5728\u8001\u631D\u7684\u8001\u631D\u4EBA\u3002",
    "words": [
      {
        "word": "laodicean",
        "meaning": "\u5BF9\u5B97\u6559\u3001\u653F\u6CBB\u4E0D\u70ED\u5FC3\u7684\u4EBA",
        "keyword": "\u4E0D\u5173\u5FC3",
        "added": "dicean",
        "position": "start"
      },
      {
        "word": "laotse",
        "meaning": "\u8001\u5B50",
        "keyword": "\u8001\u5B50",
        "added": "tse",
        "position": "start"
      },
      {
        "word": "laos",
        "meaning": "\u8001\u631D",
        "keyword": "\u8001\u631D",
        "added": "s",
        "position": "start"
      },
      {
        "word": "lao",
        "meaning": "\u8001\u631D\u4EBA",
        "keyword": "\u8001\u631D\u4EBA",
        "added": "\xF8",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 281,
    "id": "pal",
    "rime": "PAL",
    "title": "\u5DF4\u5229\u8BED\u4F19\u4F34\u5728\u68D5\u6988\u5BAB\u6BBF\u538C\u5026\u4EBA\u751F",
    "story": "\u6211\u6709\u4E2A\u4F1A\u5DF4\u5229\u8BED\u7684\u4F19\u4F34\uFF0C\u4ED6\u4F4F\u5728\u6709\u5F88\u591A\u68D5\u6988\u6811\u7684\u5BAB\u6BBF\uFF0C\u4ED6\u6709\u53CC\u82CD\u767D\u7684\u624B\u638C\u2026\u2026\u6709\u4E00\u5929\u4ED6\u544A\u8BC9\u6211\uFF0C\u4E2D\u98CE\u8BA9\u4ED6\u538C\u5026\u4EBA\u751F\u3002",
    "words": [
      {
        "word": "pal",
        "meaning": "\u4F19\u4F34",
        "keyword": "\u4F19\u4F34",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "pali",
        "meaning": "\u5DF4\u5229\u8BED",
        "keyword": "\u5DF4\u5229\u8BED",
        "added": "i",
        "position": "start"
      },
      {
        "word": "palm",
        "meaning": "\u68D5\u6988\u6811\u3001\u624B\u638C",
        "keyword": "\u68D5\u6988\u6811",
        "added": "m",
        "position": "start"
      },
      {
        "word": "palace",
        "meaning": "\u5BAB\u6BBF",
        "keyword": "\u5BAB\u6BBF",
        "added": "ace",
        "position": "start"
      },
      {
        "word": "pale",
        "meaning": "\u82CD\u767D",
        "keyword": "\u82CD\u767D",
        "added": "e",
        "position": "start"
      },
      {
        "word": "pall",
        "meaning": "\u817B\u70E6\u3001\u538C\u5026",
        "keyword": "\u538C\u5026\u4EBA\u751F",
        "added": "l",
        "position": "start"
      },
      {
        "word": "palsy",
        "meaning": "\u4E2D\u98CE",
        "keyword": "\u4E2D\u98CE",
        "added": "sy",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 282,
    "id": "sea",
    "rime": "SEA",
    "title": "\u56DB\u5B63\u6D77\u8C79\u5BFB\u627E\u770B\u6D77\u5EA7\u4F4D",
    "story": "\u4E00\u5E74\u56DB\u5B63\u5728\u6D77\u8FB9\u7ECF\u5E38\u53EF\u4EE5\u770B\u5230\u6D77\u8C79\uFF0C\u5B83\u597D\u50CF\u6B63\u5728\u5BFB\u627E\u770B\u6D77\u7684\u5EA7\u4F4D\u3002",
    "words": [
      {
        "word": "sea",
        "meaning": "\u6D77",
        "keyword": "\u6D77",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "season",
        "meaning": "\u56DB\u5B63",
        "keyword": "\u56DB\u5B63",
        "added": "son",
        "position": "start"
      },
      {
        "word": "seaside",
        "meaning": "\u6D77\u8FB9",
        "keyword": "\u6D77\u8FB9",
        "added": "side",
        "position": "start"
      },
      {
        "word": "seal",
        "meaning": "\u6D77\u8C79",
        "keyword": "\u6D77\u8C79",
        "added": "l",
        "position": "start"
      },
      {
        "word": "search",
        "meaning": "\u5BFB\u627E",
        "keyword": "\u5BFB\u627E",
        "added": "rch",
        "position": "start"
      },
      {
        "word": "seat",
        "meaning": "\u5EA7\u4F4D",
        "keyword": "\u5EA7\u4F4D",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 283,
    "id": "du",
    "rime": "DU",
    "title": "\u8377\u5170\u516C\u7235\u9EC4\u660F\u5B89\u7F6E\u91CE\u9E2D",
    "story": "\u8377\u5170\u7684\u516C\u7235\u6709\u4E49\u52A1\u5728\u9EC4\u660F\u4E4B\u65F6\u4E3A\u91CE\u9E2D\u5B89\u6392\u9002\u5F53\u7684\u4F4F\u6240\u3002",
    "words": [
      {
        "word": "dutch",
        "meaning": "\u8377\u5170\u7684",
        "keyword": "\u8377\u5170",
        "added": "tch",
        "position": "start"
      },
      {
        "word": "duke",
        "meaning": "\u516C\u7235",
        "keyword": "\u516C\u7235",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "duty",
        "meaning": "\u4E49\u52A1",
        "keyword": "\u4E49\u52A1",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "dusk",
        "meaning": "\u9EC4\u660F",
        "keyword": "\u9EC4\u660F",
        "added": "sk",
        "position": "start"
      },
      {
        "word": "duck",
        "meaning": "\u91CE\u9E2D",
        "keyword": "\u91CE\u9E2D",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "due",
        "meaning": "\u9002\u5F53\u7684",
        "keyword": "\u9002\u5F53",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 284,
    "id": "ang",
    "rime": "ANG",
    "title": "\u5929\u4F7F\u56E0\u8D85\u4EBA\u62A2\u6551\u751F\u610F\u800C\u751F\u6C14",
    "story": "\u4EE5\u5929\u4F7F\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u8D85\u4EBA\u5230\u5904\u62A2\u6551\u4EBA\u7684\u751F\u610F\uFF0C\u96BE\u602A\u5979\u53D1\u6012\u751F\u6C14\u3002",
    "words": [
      {
        "word": "angel",
        "meaning": "\u5929\u4F7F",
        "keyword": "\u5929\u4F7F",
        "added": "el",
        "position": "start"
      },
      {
        "word": "angle",
        "meaning": "\u89D2\u5EA6",
        "keyword": "\u89D2\u5EA6",
        "added": "le",
        "position": "start"
      },
      {
        "word": "anger",
        "meaning": "\u6012\u3001\u6012\u6C14",
        "keyword": "\u53D1\u6012",
        "added": "er",
        "position": "start"
      },
      {
        "word": "angry",
        "meaning": "\u751F\u6C14",
        "keyword": "\u751F\u6C14",
        "added": "ry",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 285,
    "id": "class",
    "rime": "CLASS",
    "title": "\u540C\u73ED\u540C\u5B66\u5728\u6559\u5BA4\u7ED9\u7ECF\u5178\u4F5C\u54C1\u5206\u7C7B",
    "story": "\u540C\u73ED\u540C\u5B66\u5728\u6559\u5BA4\u91CC\u6B63\u4E3A\u53E4\u5178\u6587\u5B66\u7684\u7ECF\u5178\u4F5C\u54C1\u5206\u7C7B\u3002",
    "words": [
      {
        "word": "class",
        "meaning": "\u73ED\u7EA7",
        "keyword": "\u73ED",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "classmate",
        "meaning": "\u540C\u73ED\u540C\u5B66",
        "keyword": "\u540C\u5B66",
        "added": "mate",
        "position": "start"
      },
      {
        "word": "classroom",
        "meaning": "\u6559\u5BA4",
        "keyword": "\u6559\u5BA4",
        "added": "room",
        "position": "start"
      },
      {
        "word": "classic",
        "meaning": "\u53E4\u5178\u3001\u7ECF\u5178\u4F5C\u54C1",
        "keyword": "\u7ECF\u5178\u4F5C\u54C1",
        "added": "ic",
        "position": "start"
      },
      {
        "word": "classify",
        "meaning": "\u5206\u7C7B",
        "keyword": "\u5206\u7C7B",
        "added": "ify",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 286,
    "id": "sho",
    "rime": "SHO",
    "title": "\u5CB8\u8FB9\u978B\u5E97\u4E0A\u6F14\u77ED\u77ED\u5C04\u51FB\u5927\u6218",
    "story": "\u5CB8\u8FB9\u5356\u978B\u5B50\u7684\u5E97\u6709\u65F6\u5019\u4F1A\u7279\u522B\u6F14\u51FA\u77ED\u77ED\u7684\u5C04\u51FB\u5927\u6218\u3002",
    "words": [
      {
        "word": "shore",
        "meaning": "\u5CB8",
        "keyword": "\u5CB8\u8FB9",
        "added": "re",
        "position": "start"
      },
      {
        "word": "shoe",
        "meaning": "\u978B",
        "keyword": "\u978B\u5B50",
        "added": "e",
        "position": "start"
      },
      {
        "word": "shop",
        "meaning": "\u5E97",
        "keyword": "\u5E97",
        "added": "p",
        "position": "start"
      },
      {
        "word": "show",
        "meaning": "\u6F14\u51FA\u3001\u5C55\u793A",
        "keyword": "\u6F14\u51FA",
        "added": "w",
        "position": "start"
      },
      {
        "word": "short",
        "meaning": "\u77ED\u7684",
        "keyword": "\u77ED\u77ED",
        "added": "rt",
        "position": "start"
      },
      {
        "word": "shot",
        "meaning": "\u5C04\u51FB",
        "keyword": "\u5C04\u51FB",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 287,
    "id": "or",
    "rime": "OR",
    "title": "\u8F68\u9053\u5546\u4E1A\u53EF\u5411\u679C\u56ED\u8BA2\u6A58\u77FF\u77F3\u98CE\u7434",
    "story": "\u4E0A\u8F68\u9053\u7684\u5546\u4E1A\u8BB2\u7A76\u670D\u52A1\u54C1\u8D28\uFF0C\u4F60\u53EF\u4EE5\u5411\u679C\u56ED\u8BA2\u8D2D\u67D1\u6A58\u6216\u77FF\u77F3\uFF0C\u751A\u81F3\u8BA2\u8D2D\u98CE\u7434\u4E5F\u6210\u3002",
    "words": [
      {
        "word": "or",
        "meaning": "\u6216",
        "keyword": "\u6216",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "orbit",
        "meaning": "\u8F68\u9053",
        "keyword": "\u8F68\u9053",
        "added": "bit",
        "position": "start"
      },
      {
        "word": "orchard",
        "meaning": "\u679C\u56ED",
        "keyword": "\u679C\u56ED",
        "added": "chard",
        "position": "start"
      },
      {
        "word": "order",
        "meaning": "\u8BA2\u8D2D",
        "keyword": "\u8BA2\u8D2D",
        "added": "der",
        "position": "start"
      },
      {
        "word": "orange",
        "meaning": "\u67D1\u6A58",
        "keyword": "\u67D1\u6A58",
        "added": "ange",
        "position": "start"
      },
      {
        "word": "ore",
        "meaning": "\u77FF\u77F3",
        "keyword": "\u77FF\u77F3",
        "added": "e",
        "position": "start"
      },
      {
        "word": "organ",
        "meaning": "\u98CE\u7434",
        "keyword": "\u98CE\u7434",
        "added": "gan",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 288,
    "id": "ear3",
    "rime": "EAR",
    "title": "\u65E9\u542C\u89C1\u4E3B\u529D\u4F2F\u7235\u522B\u8D2A\u5730\u7403",
    "story": "\u4F2F\u7235\u7684\u542C\u89C9\u5F88\u597D\uFF0C\u4ED6\u5F88\u65E9\u5C31\u542C\u5230\u4E3B\u5BF9\u4ED6\u8BF4\uFF1A\u201C\u5C31\u7B97\u8D5A\u5F97\u6574\u4E2A\u5730\u7403\uFF0C\u5C06\u6765\u4E5F\u53EA\u80FD\u5C06\u5B83\u7559\u5728\u5C18\u4E16\u3002\u201D",
    "words": [
      {
        "word": "ear",
        "meaning": "\u8033\u3001\u542C\u89C9",
        "keyword": "\u542C\u89C9",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "earl",
        "meaning": "\u4F2F\u7235",
        "keyword": "\u4F2F\u7235",
        "added": "l",
        "position": "start"
      },
      {
        "word": "early",
        "meaning": "\u65E9",
        "keyword": "\u5F88\u65E9",
        "added": "ly",
        "position": "start"
      },
      {
        "word": "earth",
        "meaning": "\u5730\u7403",
        "keyword": "\u5730\u7403",
        "added": "th",
        "position": "start"
      },
      {
        "word": "earthly",
        "meaning": "\u5C18\u4E16",
        "keyword": "\u5C18\u4E16",
        "added": "thly",
        "position": "start"
      },
      {
        "word": "earn",
        "meaning": "\u8D5A",
        "keyword": "\u8D5A\u5F97",
        "added": "n",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 289,
    "id": "ea2",
    "rime": "EA",
    "title": "\u4E1C\u90E8\u8001\u9E70\u590D\u6D3B\u8282\u5403\u8212\u9002\u5927\u9910",
    "story": "\u4E1C\u90E8\u7684\u6BCF\u4E00\u53EA\u8001\u9E70\u90FD\u6E34\u671B\u80FD\u5728\u590D\u6D3B\u8282\u5403\u987F\u8212\u9002\u7684\u5927\u9910\u3002",
    "words": [
      {
        "word": "east",
        "meaning": "\u4E1C\u90E8",
        "keyword": "\u4E1C\u90E8",
        "added": "st",
        "position": "start"
      },
      {
        "word": "each",
        "meaning": "\u6BCF\u4E00",
        "keyword": "\u6BCF\u4E00\u53EA",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "eagle",
        "meaning": "\u9E70",
        "keyword": "\u8001\u9E70",
        "added": "gle",
        "position": "start"
      },
      {
        "word": "eager",
        "meaning": "\u6E34\u671B",
        "keyword": "\u6E34\u671B",
        "added": "ger",
        "position": "start"
      },
      {
        "word": "easter",
        "meaning": "\u590D\u6D3B\u8282",
        "keyword": "\u590D\u6D3B\u8282",
        "added": "ster",
        "position": "start"
      },
      {
        "word": "eat",
        "meaning": "\u5403",
        "keyword": "\u5403\u987F",
        "added": "t",
        "position": "start"
      },
      {
        "word": "easy",
        "meaning": "\u5BB9\u6613\u3001\u8212\u9002\u7684",
        "keyword": "\u8212\u9002",
        "added": "sy",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 290,
    "id": "trad",
    "rime": "TRAD",
    "title": "\u4F20\u7EDF\u5546\u4EBA\u56E0\u5546\u4E1A\u8D38\u6613\u906D\u6BC1\u8C24",
    "story": "\u4F20\u7EDF\u7684\u5546\u4EBA\u5E38\u4E3A\u4E86\u8D38\u6613\u7684\u5546\u4E1A\u884C\u4E3A\u800C\u906D\u5230\u6BC1\u8C24\u3002",
    "words": [
      {
        "word": "trad",
        "meaning": "\u4F20\u7EDF\u7684",
        "keyword": "\u4F20\u7EDF",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "trade",
        "meaning": "\u8D38\u6613",
        "keyword": "\u8D38\u6613",
        "added": "e",
        "position": "start"
      },
      {
        "word": "trader",
        "meaning": "\u5546\u4EBA",
        "keyword": "\u5546\u4EBA",
        "added": "er",
        "position": "start"
      },
      {
        "word": "tradal",
        "meaning": "\u5546\u4E1A\u7684",
        "keyword": "\u5546\u4E1A",
        "added": "al",
        "position": "start"
      },
      {
        "word": "traduce",
        "meaning": "\u6BC1\u8C24",
        "keyword": "\u6BC1\u8C24",
        "added": "uce",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 291,
    "id": "miss",
    "rime": "MISS",
    "title": "\u5C0F\u59D0\u56E0\u4F20\u6559\u58EB\u4E0D\u89C1\u800C\u9519\u8FC7\u5BFC\u5F39\u4EFB\u52A1",
    "story": "\u56E0\u4E3A\u4F20\u6559\u58EB\u4E0D\u89C1\u4E86\uFF0C\u6240\u4EE5\u5C0F\u59D0\u9519\u8FC7\u4E86\u5979\u7684\u5BFC\u5F39\u53D1\u5C04\u4EFB\u52A1\u3002",
    "words": [
      {
        "word": "miss",
        "meaning": "\u5C0F\u59D0\u3001\u9519\u8FC7",
        "keyword": "\u5C0F\u59D0",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "missionary",
        "meaning": "\u4F20\u6559\u58EB",
        "keyword": "\u4F20\u6559\u58EB",
        "added": "ionary",
        "position": "start"
      },
      {
        "word": "missing",
        "meaning": "\u6B20\u7F3A\u3001\u4E0D\u89C1",
        "keyword": "\u4E0D\u89C1",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "missile",
        "meaning": "\u5BFC\u5F39",
        "keyword": "\u5BFC\u5F39",
        "added": "ile",
        "position": "start"
      },
      {
        "word": "mission",
        "meaning": "\u6D3E\u9063\u3001\u4EFB\u52A1",
        "keyword": "\u4EFB\u52A1",
        "added": "ion",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 292,
    "id": "pen",
    "rime": "PEN",
    "title": "\u6253\u5F00\u7B14\u5076\u7136\u957F\u51FA\u767D\u6768",
    "story": "\u6253\u5F00\u7B14\uFF0C\u4E00\u68F5\u767D\u6768\u7531\u7B14\u5FC3\u751F\u957F\u51FA\u6765\u2026\u2026\u8FD9\u79CD\u4E8B\u6709\u65F6\u5019\u4F1A\u5076\u7136\u53D1\u751F\u3002",
    "words": [
      {
        "word": "pen",
        "meaning": "\u7B14",
        "keyword": "\u7B14",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "open",
        "meaning": "\u6253\u5F00",
        "keyword": "\u6253\u5F00",
        "added": "o",
        "position": "end"
      },
      {
        "word": "aspen",
        "meaning": "\u767D\u6768",
        "keyword": "\u767D\u6768",
        "added": "as",
        "position": "end"
      },
      {
        "word": "happen",
        "meaning": "\u5076\u7136\u53D1\u751F\u3001\u78B0\u5DE7",
        "keyword": "\u5076\u7136\u53D1\u751F",
        "added": "hap",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 293,
    "id": "min",
    "rime": "MIN",
    "title": "\u660E\u671D\u56E0\u6D77\u76D7\u5A01\u80C1\u51CF\u5C11\u706F\u5854",
    "story": "\u660E\u671D\u65F6\uFF0C\u7531\u4E8E\u6D77\u76D7\u7684\u5A01\u80C1\u5F88\u7316\u72C2\uFF0C\u4EE5\u81F4\u671D\u5EF7\u88AB\u8FEB\u5C06\u706F\u5854\u51CF\u81F3\u6700\u4F4E\u6570\u91CF\uFF0C\u4F7F\u4E4B\u6210\u4E3A\u5386\u4EE3\u4E2D\u6700\u5C11\u7684\u3002",
    "words": [
      {
        "word": "ming",
        "meaning": "\u660E\u671D",
        "keyword": "\u660E\u671D",
        "added": "g",
        "position": "start"
      },
      {
        "word": "minacity",
        "meaning": "\u5A01\u80C1\u6027",
        "keyword": "\u5A01\u80C1",
        "added": "acity",
        "position": "start"
      },
      {
        "word": "minar",
        "meaning": "\u706F\u5854",
        "keyword": "\u706F\u5854",
        "added": "ar",
        "position": "start"
      },
      {
        "word": "minimal",
        "meaning": "\u6700\u5C0F\u7684\u3001\u6700\u5C11\u7684",
        "keyword": "\u6700\u5C11",
        "added": "imal",
        "position": "start"
      },
      {
        "word": "minimize",
        "meaning": "\u51CF\u81F3\u6700\u4F4E\u6570\u91CF",
        "keyword": "\u51CF\u81F3\u6700\u4F4E\u6570\u91CF",
        "added": "imize",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 294,
    "id": "sil",
    "rime": "SIL",
    "title": "\u6C89\u9ED8\u8695\u5410\u4E1D\u5374\u6CA1\u8D5A\u94F6\u5E01",
    "story": "\u8695\u6C89\u9ED8\u65E0\u58F0\u5730\u5410\u4E1D\u8BA9\u4EBA\u7EC7\u6210\u4E1D\u7EF8\uFF0C\u81EA\u5DF1\u6CA1\u8D5A\u5230\u94F6\u5E01\uFF0C\u8FD8\u56E0\u6B64\u5931\u53BB\u751F\u547D\uFF0C\u771F\u611A\u8822\u3002",
    "words": [
      {
        "word": "silent",
        "meaning": "\u6C89\u9ED8",
        "keyword": "\u6C89\u9ED8\u65E0\u58F0",
        "added": "ent",
        "position": "start"
      },
      {
        "word": "silk",
        "meaning": "\u4E1D\u7EF8",
        "keyword": "\u4E1D\u7EF8",
        "added": "k",
        "position": "start"
      },
      {
        "word": "silly",
        "meaning": "\u611A\u8822",
        "keyword": "\u611A\u8822",
        "added": "ly",
        "position": "start"
      },
      {
        "word": "silver",
        "meaning": "\u94F6\u5B50\u3001\u94F6\u5E01",
        "keyword": "\u94F6\u5E01",
        "added": "ver",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 295,
    "id": "fo",
    "rime": "FO",
    "title": "\u72D0\u72F8\u96FE\u4E2D\u559D\u56DB\u676F\u6CE1\u6CAB\u8336\u4ED8\u5BB6\u79BD",
    "story": "\u72D0\u72F8\u559C\u6B22\u5728\u96FE\u4E2D\u559D\u56DB\u676F\u6CE1\u6CAB\u7EA2\u8336\uFF0C\u6CA1\u94B1\u4ED8\u8D26\uFF0C\u6539\u4ED8\u4E00\u53EA\u5BB6\u79BD\u4EE3\u66FF\u3002",
    "words": [
      {
        "word": "fox",
        "meaning": "\u72D0",
        "keyword": "\u72D0\u72F8",
        "added": "x",
        "position": "start"
      },
      {
        "word": "fond",
        "meaning": "\u559C\u6B22",
        "keyword": "\u559C\u6B22",
        "added": "nd",
        "position": "start"
      },
      {
        "word": "fog",
        "meaning": "\u96FE",
        "keyword": "\u96FE\u4E2D",
        "added": "g",
        "position": "start"
      },
      {
        "word": "four",
        "meaning": "\u56DB",
        "keyword": "\u56DB\u676F",
        "added": "ur",
        "position": "start"
      },
      {
        "word": "foam",
        "meaning": "\u6CE1\u6CAB",
        "keyword": "\u6CE1\u6CAB",
        "added": "am",
        "position": "start"
      },
      {
        "word": "fowl",
        "meaning": "\u5BB6\u79BD",
        "keyword": "\u5BB6\u79BD",
        "added": "wl",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 296,
    "id": "par",
    "rime": "PAR",
    "title": "\u7267\u5E08\u7B5B\u9009\u4FE1\u5F92\u53C2\u52A0\u544A\u522B\u5BB4\u4F1A",
    "story": "\u7267\u5E08\u4ECE\u6559\u533A\u7684\u4FE1\u5F92\u4E2D\u6311\u9009\u4E00\u90E8\u5206\u4FE1\u4F17\u53C2\u52A0\u544A\u522B\u5BB4\u4F1A\uFF0C\u6807\u51C6\u4E0D\u591F\u7684\u4FE1\u5F92\u5219\u88AB\u6321\u5F00\u4E86\u3002",
    "words": [
      {
        "word": "par",
        "meaning": "\u6807\u51C6",
        "keyword": "\u6807\u51C6",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "parson",
        "meaning": "\u7267\u5E08",
        "keyword": "\u7267\u5E08",
        "added": "son",
        "position": "start"
      },
      {
        "word": "parish",
        "meaning": "\u6559\u533A",
        "keyword": "\u6559\u533A",
        "added": "ish",
        "position": "start"
      },
      {
        "word": "part",
        "meaning": "\u4E00\u90E8\u5206",
        "keyword": "\u4E00\u90E8\u5206",
        "added": "t",
        "position": "start"
      },
      {
        "word": "party",
        "meaning": "\u53C2\u52A0\u8005\u3001\u5BB4\u4F1A",
        "keyword": "\u5BB4\u4F1A",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "parting",
        "meaning": "\u544A\u522B",
        "keyword": "\u544A\u522B",
        "added": "ting",
        "position": "start"
      },
      {
        "word": "parry",
        "meaning": "\u62DB\u67B6\u3001\u6321\u5F00",
        "keyword": "\u6321\u5F00",
        "added": "ry",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 297,
    "id": "mam",
    "rime": "MAM",
    "title": "\u5988\u5988\u8DF3\u66FC\u6CE2\u5BB3\u6015\u975E\u6D32\u6BD2\u86C7",
    "story": "\u5988\uFF0C\u4E5F\u5C31\u662F\u5988\u5988\uFF0C\u662F\u54FA\u4E73\u52A8\u7269\uFF0C\u6700\u7231\u8DF3\u7684\u662F\u66FC\u6CE2\u821E\uFF0C\u6700\u5BB3\u6015\u7684\u662F\u975E\u6D32\u6BD2\u86C7\u3002",
    "words": [
      {
        "word": "mam",
        "meaning": "\u5988",
        "keyword": "\u5988",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "mama",
        "meaning": "\u5988\u5988",
        "keyword": "\u5988\u5988",
        "added": "a",
        "position": "start"
      },
      {
        "word": "mammal",
        "meaning": "\u54FA\u4E73\u52A8\u7269",
        "keyword": "\u54FA\u4E73\u52A8\u7269",
        "added": "mal",
        "position": "start"
      },
      {
        "word": "mambo",
        "meaning": "\u66FC\u6CE2\u821E",
        "keyword": "\u66FC\u6CE2\u821E",
        "added": "bo",
        "position": "start"
      },
      {
        "word": "mamba",
        "meaning": "\u975E\u6D32\u6BD2\u86C7",
        "keyword": "\u975E\u6D32\u6BD2\u86C7",
        "added": "ba",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 298,
    "id": "rou",
    "rime": "ROU",
    "title": "\u653E\u8361\u8005\u6570\u5362\u5E03\u6539\u4E70\u4E73\u916A\u9762\u7C89\u7CCA",
    "story": "\u653E\u8361\u8005\u7C97\u7565\u5730\u4F30\u8BA1\u4E86\u4E00\u4E0B\u8EAB\u4E0A\u7684\u5362\u5E03\uFF0C\u94B1\u4E0D\u591F\u7ED9\u8001\u5A46\u4E70\u80ED\u8102\uFF0C\u53EA\u597D\u4E70\u4E73\u916A\u9762\u7C89\u7CCA\u3002",
    "words": [
      {
        "word": "roue",
        "meaning": "\u653E\u8361\u8005",
        "keyword": "\u653E\u8361\u8005",
        "added": "e",
        "position": "start"
      },
      {
        "word": "rough",
        "meaning": "\u7C97\u7565",
        "keyword": "\u7C97\u7565",
        "added": "gh",
        "position": "start"
      },
      {
        "word": "rouble",
        "meaning": "\u5362\u5E03",
        "keyword": "\u5362\u5E03",
        "added": "ble",
        "position": "start"
      },
      {
        "word": "rouge",
        "meaning": "\u80ED\u8102",
        "keyword": "\u80ED\u8102",
        "added": "ge",
        "position": "start"
      },
      {
        "word": "roux",
        "meaning": "\u4E73\u916A\u9762\u7C89\u7CCA",
        "keyword": "\u4E73\u916A\u9762\u7C89\u7CCA",
        "added": "x",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 299,
    "id": "wor",
    "rime": "WOR",
    "title": "\u7A7F\u65E7\u8863\u559D\u9EA6\u82BD\u6C41\u5199\u8BCD\u62C5\u5FC3\u4E16\u754C\u66F4\u574F",
    "story": "\u4ED6\u8EAB\u7A7F\u65E7\u8863\uFF0C\u8FB9\u559D\u9EA6\u82BD\u6C41\u8FB9\u505A\u597D\u5199\u5355\u8BCD\u7684\u5DE5\u4F5C\uFF0C\u5FC3\u91CC\u8FD8\u62C5\u5FC3\u4E16\u754C\u53D8\u5F97\u66F4\u574F\u7684\u95EE\u9898\u3002",
    "words": [
      {
        "word": "wore",
        "meaning": "\u7A7F\u8FC7",
        "keyword": "\u8EAB\u7A7F",
        "added": "e",
        "position": "start"
      },
      {
        "word": "worn",
        "meaning": "\u7528\u65E7",
        "keyword": "\u65E7\u8863",
        "added": "n",
        "position": "start"
      },
      {
        "word": "wort",
        "meaning": "\u9EA6\u82BD\u6C41",
        "keyword": "\u9EA6\u82BD\u6C41",
        "added": "t",
        "position": "start"
      },
      {
        "word": "word",
        "meaning": "\u5355\u8BCD",
        "keyword": "\u5355\u8BCD",
        "added": "d",
        "position": "start"
      },
      {
        "word": "work",
        "meaning": "\u5DE5\u4F5C",
        "keyword": "\u5DE5\u4F5C",
        "added": "k",
        "position": "start"
      },
      {
        "word": "worry",
        "meaning": "\u62C5\u5FC3",
        "keyword": "\u62C5\u5FC3",
        "added": "ry",
        "position": "start"
      },
      {
        "word": "world",
        "meaning": "\u4E16\u754C",
        "keyword": "\u4E16\u754C",
        "added": "ld",
        "position": "start"
      },
      {
        "word": "worse",
        "meaning": "\u66F4\u574F",
        "keyword": "\u66F4\u574F",
        "added": "se",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 300,
    "id": "si",
    "rime": "SI",
    "title": "\u9521\u514B\u6559\u5F92\u843D\u65E5\u5728\u66B9\u7F57\u5C71\u8170\u5531\u516D\u6B21",
    "story": "\u9521\u514B\u6559\u5F92\u5728\u843D\u65E5\u4E4B\u65F6\u5750\u5728\u66B9\u7F57\u5C71\u8170\u5531\u6B4C\u516D\u6B21\uFF0C\u5E0C\u671B\u6E7F\u5A46\u795E\u6CBB\u597D\u4ED6\u7684\u75C5\u3002",
    "words": [
      {
        "word": "sikh",
        "meaning": "\u9521\u514B\u6559\u5F92",
        "keyword": "\u9521\u514B\u6559\u5F92",
        "added": "kh",
        "position": "start"
      },
      {
        "word": "sink",
        "meaning": "\u65E5\u843D",
        "keyword": "\u843D\u65E5",
        "added": "nk",
        "position": "start"
      },
      {
        "word": "sit",
        "meaning": "\u5750",
        "keyword": "\u5750",
        "added": "t",
        "position": "start"
      },
      {
        "word": "siam",
        "meaning": "\u66B9\u7F57",
        "keyword": "\u66B9\u7F57",
        "added": "am",
        "position": "start"
      },
      {
        "word": "sing",
        "meaning": "\u5531\u6B4C",
        "keyword": "\u5531\u6B4C",
        "added": "ng",
        "position": "start"
      },
      {
        "word": "six",
        "meaning": "\u516D",
        "keyword": "\u516D\u6B21",
        "added": "x",
        "position": "start"
      },
      {
        "word": "siva",
        "meaning": "\u6E7F\u5A46",
        "keyword": "\u6E7F\u5A46\u795E",
        "added": "va",
        "position": "start"
      },
      {
        "word": "sick",
        "meaning": "\u75C5",
        "keyword": "\u75C5",
        "added": "ck",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 301,
    "id": "cas",
    "rime": "CAS",
    "title": "\u5370\u5EA6\u9636\u7EA7\u57CE\u5821\u4E0B\u5076\u7136\u6361\u73B0\u91D1\u7BB1",
    "story": "\u53E4\u6765\u5370\u5EA6\u4E16\u88AD\u7684\u9636\u7EA7\u6709\u56DB\u7EA7\uFF0C\u6709\u94B1\u7684\u4EBA\u5F88\u6709\u94B1\uFF0C\u7A77\u7684\u4EBA\u5F88\u7A77\uFF1B\u7A77\u4EBA\u8D70\u5728\u5BCC\u4EBA\u7684\u57CE\u5821\u4E0B\uFF0C\u5076\u7136\u4F1A\u6361\u5230\u5BCC\u4EBA\u968F\u610F\u629B\u51FA\u7684\u73B0\u91D1\u7BB1\u3002",
    "words": [
      {
        "word": "caste",
        "meaning": "\u5370\u5EA6\u4E16\u88AD\u7684\u9636\u7EA7",
        "keyword": "\u9636\u7EA7",
        "added": "te",
        "position": "start"
      },
      {
        "word": "castle",
        "meaning": "\u57CE\u5821",
        "keyword": "\u57CE\u5821",
        "added": "tle",
        "position": "start"
      },
      {
        "word": "casual",
        "meaning": "\u5076\u7136\u3001\u968F\u610F",
        "keyword": "\u5076\u7136",
        "added": "ual",
        "position": "start"
      },
      {
        "word": "cast",
        "meaning": "\u63B7\u3001\u629B",
        "keyword": "\u629B\u51FA",
        "added": "t",
        "position": "start"
      },
      {
        "word": "cash",
        "meaning": "\u73B0\u91D1",
        "keyword": "\u73B0\u91D1",
        "added": "h",
        "position": "start"
      },
      {
        "word": "case",
        "meaning": "\u7BB1\u3001\u5B9E\u4F8B",
        "keyword": "\u7BB1",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 302,
    "id": "yar",
    "rime": "YAR",
    "title": "\u72D0\u5C3E\u7334\u5439\u725B\u8DF3\u5341\u4E07\u516B\u7801",
    "story": "\u72D0\u5C3E\u7334\u5439\u725B\u8BF4\uFF1A\u201C\u6211\u884C\u52A8\u654F\u6377\uFF0C\u5177\u6709\u8DF3\u51FA108000\u7801\u7684\u5B9E\u529B\u3002\u201D",
    "words": [
      {
        "word": "yarke",
        "meaning": "\u72D0\u5C3E\u7334",
        "keyword": "\u72D0\u5C3E\u7334",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "yarn",
        "meaning": "\u5439\u725B\u3001\u7EBF",
        "keyword": "\u5439\u725B",
        "added": "n",
        "position": "start"
      },
      {
        "word": "yare",
        "meaning": "\u654F\u6377",
        "keyword": "\u654F\u6377",
        "added": "e",
        "position": "start"
      },
      {
        "word": "yard",
        "meaning": "\u7801\u3001\u9662\u5B50",
        "keyword": "108000\u7801",
        "added": "d",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 303,
    "id": "squ",
    "rime": "SQU",
    "title": "\u4E4C\u8D3C\u8E72\u65B9\u5CA9\u88AB\u7206\u7AF9\u5413\u55B7\u58A8",
    "story": "\u4E4C\u8D3C\u8E72\u5728\u6B63\u65B9\u5F62\u5CA9\u77F3\u4E0A\uFF0C\u88AB\u7206\u7AF9\u70B8\u5F97\u5471\u5471\u53EB\uFF0C\u5E76\u55B7\u51FA\u58A8\u6C41\u3002",
    "words": [
      {
        "word": "squid",
        "meaning": "\u4E4C\u8D3C",
        "keyword": "\u4E4C\u8D3C",
        "added": "id",
        "position": "start"
      },
      {
        "word": "squat",
        "meaning": "\u8E72",
        "keyword": "\u8E72",
        "added": "at",
        "position": "start"
      },
      {
        "word": "square",
        "meaning": "\u6B63\u65B9\u5F62",
        "keyword": "\u6B63\u65B9\u5F62\u5CA9\u77F3",
        "added": "are",
        "position": "start"
      },
      {
        "word": "squib",
        "meaning": "\u7206\u7AF9",
        "keyword": "\u7206\u7AF9",
        "added": "ib",
        "position": "start"
      },
      {
        "word": "squawk",
        "meaning": "\u5471\u5471\u53EB",
        "keyword": "\u5471\u5471\u53EB",
        "added": "awk",
        "position": "start"
      },
      {
        "word": "squirt",
        "meaning": "\u55B7\u51FA",
        "keyword": "\u55B7\u51FA",
        "added": "irt",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 304,
    "id": "roo",
    "rime": "ROO",
    "title": "\u7F57\u65AF\u798F\u7956\u5148\u6816\u9E1F\u7A9D\u517B\u96C4\u9E21",
    "story": "\u7F57\u65AF\u798F\u7684\u7956\u5148\u4ECE\u524D\u66FE\u6816\u4E8E\u9E1F\u7A9D\u517B\u96C4\u9E21\u3002",
    "words": [
      {
        "word": "roosevelt",
        "meaning": "\u7F57\u65AF\u798F",
        "keyword": "\u7F57\u65AF\u798F",
        "added": "sevelt",
        "position": "start"
      },
      {
        "word": "root",
        "meaning": "\u6839\u3001\u7956\u5148",
        "keyword": "\u7956\u5148",
        "added": "t",
        "position": "start"
      },
      {
        "word": "roost",
        "meaning": "\u6816\u4E8E\u3001\u9E1F\u7A9D",
        "keyword": "\u9E1F\u7A9D",
        "added": "st",
        "position": "start"
      },
      {
        "word": "rooster",
        "meaning": "\u96C4\u9E21",
        "keyword": "\u96C4\u9E21",
        "added": "ster",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 305,
    "id": "du2",
    "rime": "DU",
    "title": "\u8822\u4EBA\u6253\u9E2D\u53C8\u91CD\u51FB\u6C99\u4E18\u6EE1\u8EAB\u5C18\u571F",
    "story": "\u4EE5\u4E3A\u6CE1\u5728\u6C34\u91CC\u9759\u6B62\u4E0D\u52A8\u7684\u9E2D\u5B50\u4E00\u6253\u5C31\u4E2D\u7684\u662F\u8822\u4EBA\uFF0C\u540E\u6765\u53C8\u751F\u6C14\u5730\u91CD\u51FB\u6C99\u4E18\uFF0C\u5F04\u5F97\u4E00\u8EAB\u90FD\u662F\u5C18\u571F\u2026\u2026\u66F4\u662F\u53CC\u500D\u7684\u8822\u3002",
    "words": [
      {
        "word": "duck",
        "meaning": "\u9E2D\u5B50",
        "keyword": "\u9E2D\u5B50",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "dunk",
        "meaning": "\u6CE1\u3001\u6D78",
        "keyword": "\u6CE1\u5728\u6C34\u91CC",
        "added": "nk",
        "position": "start"
      },
      {
        "word": "dupe",
        "meaning": "\u8822\u4EBA\u3001\u4E0A\u5F53\u8005",
        "keyword": "\u8822\u4EBA",
        "added": "pe",
        "position": "start"
      },
      {
        "word": "dunt",
        "meaning": "\u91CD\u51FB",
        "keyword": "\u91CD\u51FB",
        "added": "nt",
        "position": "start"
      },
      {
        "word": "dune",
        "meaning": "\u6C99\u4E18",
        "keyword": "\u6C99\u4E18",
        "added": "ne",
        "position": "start"
      },
      {
        "word": "dust",
        "meaning": "\u5C18\u571F",
        "keyword": "\u5C18\u571F",
        "added": "st",
        "position": "start"
      },
      {
        "word": "duple",
        "meaning": "\u53CC\u500D",
        "keyword": "\u53CC\u500D",
        "added": "ple",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 306,
    "id": "mon",
    "rime": "MON",
    "title": "\u4FEE\u9053\u58EB\u6BCF\u6708\u9996\u4E2A\u661F\u671F\u4E00\u7ED9\u7334\u94B1",
    "story": "\u4FEE\u9053\u58EB\u4F1A\u5728\u6BCF\u4E2A\u6708\u7684\u7B2C\u4E00\u4E2A\u661F\u671F\u4E00\u7ED9\u7334\u5B50\u94B1\uFF0C\u53EB\u5B83\u53BB\u4E70\u751F\u6D3B\u5FC5\u9700\u54C1\u3002",
    "words": [
      {
        "word": "monk",
        "meaning": "\u4FEE\u9053\u58EB\u3001\u50E7\u4FA3",
        "keyword": "\u4FEE\u9053\u58EB",
        "added": "k",
        "position": "start"
      },
      {
        "word": "month",
        "meaning": "\u6708",
        "keyword": "\u6BCF\u4E2A\u6708",
        "added": "th",
        "position": "start"
      },
      {
        "word": "monday",
        "meaning": "\u661F\u671F\u4E00",
        "keyword": "\u661F\u671F\u4E00",
        "added": "day",
        "position": "start"
      },
      {
        "word": "money",
        "meaning": "\u94B1",
        "keyword": "\u94B1",
        "added": "ey",
        "position": "start"
      },
      {
        "word": "monkey",
        "meaning": "\u7334\u5B50",
        "keyword": "\u7334\u5B50",
        "added": "key",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 307,
    "id": "pen2",
    "rime": "PEN",
    "title": "\u5FE7\u8651\u4F01\u9E45\u7528\u4E00\u4FBF\u58EB\u4E70\u5230\u94C5\u7B14",
    "story": "\u5FE7\u8651\u7684\u4F01\u9E45\u62FF\u7740\u4E00\u4FBF\u58EB\u53BB\u4E70\u7B14\uFF0C\u4E70\u5230\u7684\u662F\u4E00\u652F\u94C5\u7B14\u3002",
    "words": [
      {
        "word": "pen",
        "meaning": "\u7B14",
        "keyword": "\u7B14",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "pensive",
        "meaning": "\u6C89\u601D\u7684\u3001\u5FE7\u8651\u7684",
        "keyword": "\u5FE7\u8651",
        "added": "sive",
        "position": "start"
      },
      {
        "word": "penguin",
        "meaning": "\u4F01\u9E45",
        "keyword": "\u4F01\u9E45",
        "added": "guin",
        "position": "start"
      },
      {
        "word": "penny",
        "meaning": "\u4FBF\u58EB",
        "keyword": "\u4E00\u4FBF\u58EB",
        "added": "ny",
        "position": "start"
      },
      {
        "word": "pencil",
        "meaning": "\u94C5\u7B14",
        "keyword": "\u94C5\u7B14",
        "added": "cil",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 308,
    "id": "ph",
    "rime": "PH",
    "title": "\u8BEF\u5403\u5939\u7AF9\u6843\u540E\u75F0\u591A\u5984\u60F3\u8138\u96BE\u770B",
    "story": "\u5982\u679C\u4E0D\u5C0F\u5FC3\u5403\u5230\u5939\u7AF9\u6843\uFF0C\u9664\u4E86\u75F0\u591A\u4E4B\u5916\u8FD8\u4F1A\u4EA7\u751F\u5984\u60F3\uFF0C\u8138\u4E0A\u7684\u8868\u60C5\u4F1A\u5F88\u96BE\u770B\u3002",
    "words": [
      {
        "word": "phlox",
        "meaning": "\u5939\u7AF9\u6843",
        "keyword": "\u5939\u7AF9\u6843",
        "added": "lox",
        "position": "start"
      },
      {
        "word": "phlegm",
        "meaning": "\u75F0",
        "keyword": "\u75F0\u591A",
        "added": "legm",
        "position": "start"
      },
      {
        "word": "phantom",
        "meaning": "\u5984\u60F3\u3001\u5E7B\u8C61",
        "keyword": "\u5984\u60F3",
        "added": "antom",
        "position": "start"
      },
      {
        "word": "phiz",
        "meaning": "\u8138\u3001\u8868\u60C5",
        "keyword": "\u8868\u60C5",
        "added": "iz",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 309,
    "id": "pea",
    "rime": "PEA",
    "title": "\u68A8\u6843\u8C4C\u8C46\u5C71\u9876\u53D1\u73B0\u73CD\u73E0\u5931\u548C\u5E73",
    "story": "\u6709\u4E00\u5EA7\u51FA\u4EA7\u68A8\u3001\u6843\u548C\u8C4C\u8C46\u7684\u5C71\u9876\u672C\u6765\u5F88\u5E73\u9759\uFF0C\u81EA\u4ECE\u53D1\u73B0\u76DB\u4EA7\u73CD\u73E0\u4E4B\u540E\u5C31\u518D\u4E5F\u4E0D\u548C\u5E73\u4E86\u3002",
    "words": [
      {
        "word": "pea",
        "meaning": "\u8C4C\u8C46",
        "keyword": "\u8C4C\u8C46",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "peach",
        "meaning": "\u6843",
        "keyword": "\u6843",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "pear",
        "meaning": "\u68A8",
        "keyword": "\u68A8",
        "added": "r",
        "position": "start"
      },
      {
        "word": "peak",
        "meaning": "\u5C71\u9876\u3001\u5C16\u7AEF",
        "keyword": "\u5C71\u9876",
        "added": "k",
        "position": "start"
      },
      {
        "word": "peace",
        "meaning": "\u548C\u5E73\u3001\u5E73\u9759",
        "keyword": "\u5E73\u9759",
        "added": "ce",
        "position": "start"
      },
      {
        "word": "pearl",
        "meaning": "\u73CD\u73E0",
        "keyword": "\u73CD\u73E0",
        "added": "rl",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 310,
    "id": "sin",
    "rime": "SIN",
    "title": "\u5947\u5F02\u4E0D\u7965\u6B4C\u66F2\u8BA9\u7231\u60C5\u6C89\u6CA1",
    "story": "\u4ED6\u5531\u4E86\u4E00\u652F\u5947\u5F02\u800C\u4E0D\u7965\u7684\u6B4C\uFF0C\u4E43\u81F3\u7231\u60C5\u6C89\u6CA1\uFF0C\u5355\u8EAB\u4E86\u4E00\u8F88\u5B50\u3002",
    "words": [
      {
        "word": "sinister",
        "meaning": "\u4E0D\u7965\u7684",
        "keyword": "\u4E0D\u7965",
        "added": "ister",
        "position": "start"
      },
      {
        "word": "sing",
        "meaning": "\u5531\u3001\u557C",
        "keyword": "\u5531",
        "added": "g",
        "position": "start"
      },
      {
        "word": "singular",
        "meaning": "\u5947\u5F02",
        "keyword": "\u5947\u5F02",
        "added": "gular",
        "position": "start"
      },
      {
        "word": "sink",
        "meaning": "\u6C89\u6CA1",
        "keyword": "\u6C89\u6CA1",
        "added": "k",
        "position": "start"
      },
      {
        "word": "single",
        "meaning": "\u5355\u8EAB",
        "keyword": "\u5355\u8EAB",
        "added": "gle",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 311,
    "id": "for",
    "rime": "FOR",
    "title": "\u4EBA\u5230\u56DB\u5341\u5916\u5F62\u53D6\u51B3\u4E8E\u5C94\u8DEF\u6216\u8282\u5236",
    "story": "\u4ECE\u524D\u6709\u4E2A\u8BF4\u6CD5\uFF1A\u201C\u4EBA\u523040\u5C81\uFF0C\u4ED6\u7684\u5916\u5F62\u5C31\u65E0\u5173\u4E4E\u4E0A\u5E1D\uFF0C\u800C\u662F\u7531\u4E8E\u81EA\u5DF1\u8D70\u5C94\u8DEF\u6216\u662F\u8282\u5236\u3002\u201D",
    "words": [
      {
        "word": "for",
        "meaning": "\u7531\u4E8E\u3001\u5173\u4E8E",
        "keyword": "\u7531\u4E8E",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "former",
        "meaning": "\u4ECE\u524D\u7684",
        "keyword": "\u4ECE\u524D",
        "added": "mer",
        "position": "start"
      },
      {
        "word": "forty",
        "meaning": "\u56DB\u5341",
        "keyword": "40\u5C81",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "form",
        "meaning": "\u5F62\u72B6\u3001\u5916\u5F62",
        "keyword": "\u5916\u5F62",
        "added": "m",
        "position": "start"
      },
      {
        "word": "fork",
        "meaning": "\u53C9\u3001\u5C94\u8DEF",
        "keyword": "\u5C94\u8DEF",
        "added": "k",
        "position": "start"
      },
      {
        "word": "forbear",
        "meaning": "\u8282\u5236\u3001\u5FCD\u8010",
        "keyword": "\u8282\u5236",
        "added": "bear",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 312,
    "id": "trac",
    "rime": "TRAC",
    "title": "\u8FFD\u8E2A\u8005\u5FAA\u5730\u57DF\u8DB3\u8FF9\u627E\u5230\u53E4\u9057\u8FF9",
    "story": "\u8FFD\u8E2A\u8005\u80FD\u6839\u636E\u67D0\u4E00\u5730\u57DF\u7684\u5C11\u8BB8\u8DB3\u8FF9\uFF0C\u627E\u5230\u53E4\u8001\u7684\u9057\u8FF9\u3002",
    "words": [
      {
        "word": "tracker",
        "meaning": "\u8FFD\u8E2A\u8005",
        "keyword": "\u8FFD\u8E2A\u8005",
        "added": "ker",
        "position": "start"
      },
      {
        "word": "tract",
        "meaning": "\u5730\u57DF",
        "keyword": "\u5730\u57DF",
        "added": "t",
        "position": "start"
      },
      {
        "word": "track",
        "meaning": "\u8DB3\u8FF9",
        "keyword": "\u8DB3\u8FF9",
        "added": "k",
        "position": "start"
      },
      {
        "word": "trace",
        "meaning": "\u9057\u8FF9",
        "keyword": "\u9057\u8FF9",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 313,
    "id": "lan",
    "rime": "LAN",
    "title": "\u5730\u4E2D\u6D77\u96BC\u8B66\u544A\u9646\u5730\u6BD4\u5929\u7A7A\u5371\u9669",
    "story": "\u5730\u4E2D\u6D77\u96BC\u8BF4\uFF1A\u201C\u9646\u5730\u6709\u67AA\u3001\u77DB\u3001\u8F66\u9053\u548C\u9633\u53F0\uFF0C\u6BD4\u5929\u7A7A\u8FD8\u5371\u9669\uFF01\u201D\u8BF7\u7528\u6587\u5B57\u8BB0\u4E0B\u8FD9\u6BB5\u8001\u9E1F\u7684\u667A\u6167\u8BED\u8A00\u3002",
    "words": [
      {
        "word": "lanner",
        "meaning": "\u5730\u4E2D\u6D77\u96BC",
        "keyword": "\u5730\u4E2D\u6D77\u96BC",
        "added": "ner",
        "position": "start"
      },
      {
        "word": "land",
        "meaning": "\u9646\u5730",
        "keyword": "\u9646\u5730",
        "added": "d",
        "position": "start"
      },
      {
        "word": "lance",
        "meaning": "\u67AA\u3001\u77DB\u3001\u9C7C\u53C9",
        "keyword": "\u67AA\u3001\u77DB",
        "added": "ce",
        "position": "start"
      },
      {
        "word": "lane",
        "meaning": "\u9053\u3001\u5C0F\u8DEF\u3001\u8F66\u9053",
        "keyword": "\u8F66\u9053",
        "added": "e",
        "position": "start"
      },
      {
        "word": "language",
        "meaning": "\u8BED\u8A00\u6587\u5B57",
        "keyword": "\u6587\u5B57",
        "added": "guage",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 314,
    "id": "all",
    "rime": "ALL",
    "title": "\u4E3B\u5987\u8054\u76DF\u7981\u6B62\u8272\u60C5\u5F15\u8BF1\u8FDB\u5165\u5DF7\u5F04",
    "story": "\u4E3B\u5987\u8054\u76DF\u4E3B\u5F20\u6253\u51FB\u8272\u60C5\u5F15\u8BF1\uFF1A\u201C\u6240\u6709\u7684\u8272\u60C5\u90FD\u4E0D\u51C6\u8BB8\u8FDB\u5165\u4F4F\u5B85\u533A\u7684\u5DF7\u5F04\u91CC\uFF01\u201D",
    "words": [
      {
        "word": "ally",
        "meaning": "\u8054\u76DF",
        "keyword": "\u8054\u76DF",
        "added": "y",
        "position": "start"
      },
      {
        "word": "allege",
        "meaning": "\u4E3B\u5F20",
        "keyword": "\u4E3B\u5F20",
        "added": "ege",
        "position": "start"
      },
      {
        "word": "all",
        "meaning": "\u6240\u6709\u7684",
        "keyword": "\u6240\u6709\u7684",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "alley",
        "meaning": "\u5DF7\u3001\u5F04",
        "keyword": "\u5DF7\u5F04",
        "added": "ey",
        "position": "start"
      },
      {
        "word": "allow",
        "meaning": "\u51C6\u8BB8",
        "keyword": "\u4E0D\u51C6\u8BB8",
        "added": "ow",
        "position": "start"
      },
      {
        "word": "allure",
        "meaning": "\u8BF1\u60D1",
        "keyword": "\u5F15\u8BF1",
        "added": "ure",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 315,
    "id": "chea",
    "rime": "CHEA",
    "title": "\u8D2C\u4F4E\u5224\u65AD\u529B\u4F1A\u88AB\u4FBF\u5B9C\u9A97\u5C40\u6B3A\u9A97",
    "story": "\u9664\u975E\u4F60\u81EA\u5DF1\u8D2C\u4F4E\u81EA\u5DF1\u7684\u5224\u65AD\u529B\uFF0C\u5426\u5219\u9A97\u5B50\u5F88\u96BE\u7528\u4FBF\u5B9C\u6765\u8BC8\u9A97\u4F60\uFF01",
    "words": [
      {
        "word": "cheapen",
        "meaning": "\u51CF\u4EF7\u3001\u8D2C\u4F4E",
        "keyword": "\u8D2C\u4F4E",
        "added": "pen",
        "position": "start"
      },
      {
        "word": "cheater",
        "meaning": "\u9A97\u5B50",
        "keyword": "\u9A97\u5B50",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "cheat",
        "meaning": "\u8BC8\u9A97",
        "keyword": "\u8BC8\u9A97",
        "added": "t",
        "position": "start"
      },
      {
        "word": "cheap",
        "meaning": "\u4FBF\u5B9C",
        "keyword": "\u4FBF\u5B9C",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 316,
    "id": "bin",
    "rime": "BIN",
    "title": "\u5B6A\u751F\u5144\u5F1F\u7BB1\u4E2D\u72C2\u95F9\u73A9\u5BBE\u679C",
    "story": "\u5B6A\u751F\u5144\u5F1F\u5728\u7BB1\u5B50\u91CC\u72C2\u95F9\u73A9\u5BBE\u679C\uFF01",
    "words": [
      {
        "word": "bin",
        "meaning": "\u7BB1\u5B50\u3001\u4ED3",
        "keyword": "\u7BB1\u5B50",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "binal",
        "meaning": "\u5B6A\u751F",
        "keyword": "\u5B6A\u751F\u5144\u5F1F",
        "added": "al",
        "position": "start"
      },
      {
        "word": "binge",
        "meaning": "\u72C2\u95F9",
        "keyword": "\u72C2\u95F9",
        "added": "ge",
        "position": "start"
      },
      {
        "word": "bingo",
        "meaning": "\u5BBE\u679C",
        "keyword": "\u5BBE\u679C",
        "added": "go",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 317,
    "id": "qu",
    "rime": "QU",
    "title": "\u9B41\u5317\u514B\u7801\u5934\u8C03\u67E5\u53E4\u602A\u5973\u4EBA\u8EAB\u4EFD",
    "story": "\u5728\u9B41\u5317\u514B\u7684\u7801\u5934\u53D1\u73B0\u4E86\u53E4\u602A\u7684\u5973\u4EBA\uFF0C\u7ECF\u8FC7\u534A\u5929\u7684\u8C03\u67E5\u3001\u8D28\u95EE\uFF0C\u8FD8\u662F\u5206\u4E0D\u6E05\u5979\u662F\u5973\u738B\u8FD8\u662F\u65E0\u803B\u7684\u5973\u4EBA\u3002",
    "words": [
      {
        "word": "quebec",
        "meaning": "\u9B41\u5317\u514B",
        "keyword": "\u9B41\u5317\u514B",
        "added": "ebec",
        "position": "start"
      },
      {
        "word": "quay",
        "meaning": "\u7801\u5934",
        "keyword": "\u7801\u5934",
        "added": "ay",
        "position": "start"
      },
      {
        "word": "queer",
        "meaning": "\u53E4\u602A\u7684",
        "keyword": "\u53E4\u602A",
        "added": "eer",
        "position": "start"
      },
      {
        "word": "quest",
        "meaning": "\u63A2\u7D22\u3001\u8C03\u67E5",
        "keyword": "\u8C03\u67E5",
        "added": "est",
        "position": "start"
      },
      {
        "word": "query",
        "meaning": "\u8D28\u95EE",
        "keyword": "\u8D28\u95EE",
        "added": "ery",
        "position": "start"
      },
      {
        "word": "queen",
        "meaning": "\u5973\u738B",
        "keyword": "\u5973\u738B",
        "added": "een",
        "position": "start"
      },
      {
        "word": "quean",
        "meaning": "\u65E0\u803B\u5973\u4EBA",
        "keyword": "\u65E0\u803B\u7684\u5973\u4EBA",
        "added": "ean",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 318,
    "id": "butter",
    "rime": "BUTTER",
    "title": "\u8774\u8776\u88AB\u62C6\u6210\u5976\u6CB9\u82CD\u8747",
    "story": "\u5982\u679C\u8774\u8776\u53EF\u4EE5\u7FFB\u8BD1\u6210\u5976\u6CB9\u82CD\u8747\uFF0C\u90A3\u4E48\u91D1\u51E4\u82B1\u5C31\u53EB\u5976\u6CB9\u676F\u5B50\uFF0C\u767D\u80E1\u6843\u6811\u5C31\u53EB\u5976\u6CB9\u575A\u679C\u3002",
    "words": [
      {
        "word": "butter",
        "meaning": "\u5976\u6CB9",
        "keyword": "\u5976\u6CB9",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "butterfly",
        "meaning": "\u8774\u8776",
        "keyword": "\u8774\u8776",
        "added": "fly",
        "position": "start"
      },
      {
        "word": "buttercup",
        "meaning": "\u91D1\u51E4\u82B1",
        "keyword": "\u91D1\u51E4\u82B1",
        "added": "cup",
        "position": "start"
      },
      {
        "word": "butternut",
        "meaning": "\u767D\u80E1\u6843\u6811",
        "keyword": "\u767D\u80E1\u6843\u6811",
        "added": "nut",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 319,
    "id": "rea",
    "rime": "REA",
    "title": "\u523B\u82E6\u8BFB\u4E66\u4E3A\u5230\u8FBE\u54C8\u4F5B",
    "story": "\u4ED6\u523B\u82E6\u5730\u8BFB\u4E66\uFF0C\u80CC\u540E\u7684\u771F\u5B9E\u7406\u7531\u662F\u9884\u5907\u5230\u8FBE\u54C8\u4F5B\u3002",
    "words": [
      {
        "word": "read",
        "meaning": "\u8BFB",
        "keyword": "\u8BFB\u4E66",
        "added": "d",
        "position": "start"
      },
      {
        "word": "rear",
        "meaning": "\u540E\u9762",
        "keyword": "\u80CC\u540E",
        "added": "r",
        "position": "start"
      },
      {
        "word": "real",
        "meaning": "\u771F\u5B9E",
        "keyword": "\u771F\u5B9E",
        "added": "l",
        "position": "start"
      },
      {
        "word": "reason",
        "meaning": "\u7406\u7531",
        "keyword": "\u7406\u7531",
        "added": "son",
        "position": "start"
      },
      {
        "word": "ready",
        "meaning": "\u9884\u5907",
        "keyword": "\u9884\u5907",
        "added": "dy",
        "position": "start"
      },
      {
        "word": "reach",
        "meaning": "\u5230\u8FBE",
        "keyword": "\u5230\u8FBE",
        "added": "ch",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 320,
    "id": "on2",
    "rime": "ON",
    "title": "\u5B89\u5927\u7565\u6E56\u724C\u627F\u62C5\u56FD\u754C\u8D23\u4EFB",
    "story": "\u5B89\u5927\u7565\u6E56\u5206\u5C5E\u4E8E\u7F8E\u56FD\u3001\u52A0\u62FF\u5927\uFF0C\u5728\u6E56\u4E2D\u552F\u4E00\u627F\u62C5\u56FD\u754C\u5212\u5206\u8D23\u4EFB\u7684\u662F\u6E56\u4E2D\u7684\u4E00\u5757\u724C\u3002",
    "words": [
      {
        "word": "on",
        "meaning": "\u5728\u2026\u2026\u4E0A\u3001\u5C5E\u4E8E",
        "keyword": "\u5C5E\u4E8E",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "ontario",
        "meaning": "\u5B89\u5927\u7565\u6E56",
        "keyword": "\u5B89\u5927\u7565\u6E56",
        "added": "tario",
        "position": "start"
      },
      {
        "word": "onus",
        "meaning": "\u8D23\u4EFB",
        "keyword": "\u8D23\u4EFB",
        "added": "us",
        "position": "start"
      },
      {
        "word": "only",
        "meaning": "\u552F\u4E00\u7684",
        "keyword": "\u552F\u4E00",
        "added": "ly",
        "position": "start"
      },
      {
        "word": "one",
        "meaning": "\u4E00",
        "keyword": "\u4E00\u5757\u724C",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 321,
    "id": "bon",
    "rime": "BON",
    "title": "\u7626\u548C\u5C1A\u5230\u6CE2\u6069\u9886\u5956\u91D1\u5F53\u5F53\u54CD",
    "story": "\u4E00\u4E2A\u7626\u548C\u5C1A\u5230\u6CE2\u6069\u9886\u53D6\u6F02\u4EAE\u7684\u5956\u91D1\uFF0C\u5F53\u5F53\u54CD\u3002",
    "words": [
      {
        "word": "bony",
        "meaning": "\u7626\u524A\u7684",
        "keyword": "\u7626",
        "added": "y",
        "position": "start"
      },
      {
        "word": "bonze",
        "meaning": "\u548C\u5C1A",
        "keyword": "\u548C\u5C1A",
        "added": "ze",
        "position": "start"
      },
      {
        "word": "bonn",
        "meaning": "\u6CE2\u6069",
        "keyword": "\u6CE2\u6069",
        "added": "n",
        "position": "start"
      },
      {
        "word": "bonny",
        "meaning": "\u6F02\u4EAE\u7684",
        "keyword": "\u6F02\u4EAE",
        "added": "ny",
        "position": "start"
      },
      {
        "word": "bonus",
        "meaning": "\u5956\u91D1",
        "keyword": "\u5956\u91D1",
        "added": "us",
        "position": "start"
      },
      {
        "word": "bong",
        "meaning": "\u5F53\u5F53\u54CD",
        "keyword": "\u5F53\u5F53\u54CD",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 322,
    "id": "min2",
    "rime": "MIN",
    "title": "\u672A\u6210\u5E74\u8F7B\u4F7B\u5973\u5B50\u5403\u8584\u8377\u60F3\u8C82\u76AE",
    "story": "\u672A\u6210\u5E74\u7684\u8F7B\u4F7B\u5973\u5B50\u5634\u91CC\u5403\u7740\u8584\u8377\uFF0C\u8EAB\u4E0A\u7A7F\u7740\u8FF7\u4F60\u670D\uFF0C\u5934\u8111\u91CC\u8FD8\u60F3\u7740\u4E00\u4EF6\u8C82\u76AE\u5927\u8863\u3002",
    "words": [
      {
        "word": "minor",
        "meaning": "\u672A\u6210\u5E74",
        "keyword": "\u672A\u6210\u5E74",
        "added": "or",
        "position": "start"
      },
      {
        "word": "minx",
        "meaning": "\u8F7B\u4F7B\u5973\u5B50",
        "keyword": "\u8F7B\u4F7B\u5973\u5B50",
        "added": "x",
        "position": "start"
      },
      {
        "word": "mint",
        "meaning": "\u8584\u8377",
        "keyword": "\u8584\u8377",
        "added": "t",
        "position": "start"
      },
      {
        "word": "mini",
        "meaning": "\u8FF7\u4F60",
        "keyword": "\u8FF7\u4F60\u670D",
        "added": "i",
        "position": "start"
      },
      {
        "word": "mind",
        "meaning": "\u5934\u8111\u3001\u60F3\u6CD5",
        "keyword": "\u5934\u8111\u91CC",
        "added": "d",
        "position": "start"
      },
      {
        "word": "mink",
        "meaning": "\u8C82\u76AE",
        "keyword": "\u8C82\u76AE\u5927\u8863",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 323,
    "id": "ba",
    "rime": "BA",
    "title": "\u7238\u7238\u7528\u814C\u732A\u8089\u5236\u9975\u6362\u6717\u59C6\u7CD5",
    "story": "\u7238\u7238\u5BF9\u5A74\u513F\u8BF4\uFF1A\u201C\u6211\u888B\u5B50\u91CC\u7684\u814C\u732A\u8089\u662F\u8981\u70D8\u70E4\u5236\u6210\u9493\u9C7C\u7684\u9975\uFF0C\u4F60\u4E56\u4E56\u522B\u5435\uFF0C\u6211\u5C31\u5E26\u4F60\u53BB\u5403\u5DF4\u6BD4\u4F26\u7684\u6717\u59C6\u7CD5\u3002\u201D",
    "words": [
      {
        "word": "baby",
        "meaning": "\u5A74\u513F",
        "keyword": "\u5A74\u513F",
        "added": "by",
        "position": "start"
      },
      {
        "word": "bag",
        "meaning": "\u888B",
        "keyword": "\u888B\u5B50",
        "added": "g",
        "position": "start"
      },
      {
        "word": "bacon",
        "meaning": "\u814C\u732A\u8089",
        "keyword": "\u814C\u732A\u8089",
        "added": "con",
        "position": "start"
      },
      {
        "word": "bake",
        "meaning": "\u70D8\u70E4",
        "keyword": "\u70D8\u70E4",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "bait",
        "meaning": "\u9975",
        "keyword": "\u9975",
        "added": "it",
        "position": "start"
      },
      {
        "word": "babel",
        "meaning": "\u5DF4\u6BD4\u4F26",
        "keyword": "\u5DF4\u6BD4\u4F26",
        "added": "bel",
        "position": "start"
      },
      {
        "word": "baba",
        "meaning": "\u6717\u59C6\u7CD5",
        "keyword": "\u6717\u59C6\u7CD5",
        "added": "ba",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 324,
    "id": "swi",
    "rime": "SWI",
    "title": "\u745E\u58EB\u4EBA\u6E38\u6CF3\u540E\u522B\u7ACB\u523B\u5F00\u6447\u6446\u7535\u95F8",
    "story": "\u6BCF\u4E2A\u745E\u58EB\u4EBA\u90FD\u77E5\u9053\uFF0C\u6E38\u6CF3\u540E\u4E0D\u8981\u7ACB\u523B\u53BB\u5F00\u6447\u6446\u4E2D\u7684\u7535\u5F00\u5173\u3002",
    "words": [
      {
        "word": "swiss",
        "meaning": "\u745E\u58EB",
        "keyword": "\u745E\u58EB\u4EBA",
        "added": "ss",
        "position": "start"
      },
      {
        "word": "swim",
        "meaning": "\u6E38\u6CF3",
        "keyword": "\u6E38\u6CF3",
        "added": "m",
        "position": "start"
      },
      {
        "word": "swift",
        "meaning": "\u7ACB\u523B\u3001\u8FC5\u901F\u7684",
        "keyword": "\u7ACB\u523B",
        "added": "ft",
        "position": "start"
      },
      {
        "word": "swing",
        "meaning": "\u6447\u6446\u3001\u540A",
        "keyword": "\u6447\u6446",
        "added": "ng",
        "position": "start"
      },
      {
        "word": "switch",
        "meaning": "\u7535\u5F00\u5173\u3001\u7535\u95F8",
        "keyword": "\u7535\u5F00\u5173",
        "added": "tch",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 325,
    "id": "trac2",
    "rime": "TRAC",
    "title": "\u804C\u4E1A\u8FFD\u8E2A\u8005\u63CF\u6479\u730E\u7269\u5168\u90E8\u884C\u8E2A",
    "story": "\u804C\u4E1A\u8FFD\u8E2A\u8005\u53EA\u9700\u8981\u5FAA\u7740\u4E00\u70B9\u75D5\u8FF9\uFF0C\u5C31\u80FD\u63CF\u6479\u51FA\u730E\u7269\u5728\u4E00\u5B9A\u5730\u57DF\u91CC\u7684\u4E00\u5207\u884C\u8E2A\u3002",
    "words": [
      {
        "word": "tracer",
        "meaning": "\u8FFD\u8E2A\u8005",
        "keyword": "\u8FFD\u8E2A\u8005",
        "added": "er",
        "position": "start"
      },
      {
        "word": "trace",
        "meaning": "\u75D5\u8FF9",
        "keyword": "\u75D5\u8FF9",
        "added": "e",
        "position": "start"
      },
      {
        "word": "tracing",
        "meaning": "\u63CF\u6479\u3001\u8FFD\u8E2A",
        "keyword": "\u63CF\u6479",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "tract",
        "meaning": "\u5730\u57DF",
        "keyword": "\u5730\u57DF",
        "added": "t",
        "position": "start"
      },
      {
        "word": "track",
        "meaning": "\u884C\u8E2A\u3001\u8F68\u9053",
        "keyword": "\u884C\u8E2A",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 326,
    "id": "scal",
    "rime": "SCAL",
    "title": "\u75A5\u7663\u8005\u6BD4\u8F83\u70EB\u4F24\u4E0E\u5265\u5934\u76AE\u7B49\u7EA7",
    "story": "\u75A5\u7663\u8005\u5BF9\u70EB\u4F24\u8005\u8BF4\uFF1A\u201C\u4EE5\u989C\u9762\u4F24\u6B8B\u7684\u7B49\u7EA7\u800C\u8A00\uFF0C\u6211\u4EEC\u8FD8\u597D\u8FC7\u88AB\u5265\u4E86\u5934\u76AE\u7684\u4EBA\u3002\u201D",
    "words": [
      {
        "word": "scall",
        "meaning": "\u75A5\u7663\u3001\u5934\u76AE\u5C51",
        "keyword": "\u75A5\u7663\u8005",
        "added": "l",
        "position": "start"
      },
      {
        "word": "scald",
        "meaning": "\u70EB\u4F24",
        "keyword": "\u70EB\u4F24\u8005",
        "added": "d",
        "position": "start"
      },
      {
        "word": "scale",
        "meaning": "\u7B49\u7EA7\u3001\u5C3A\u5EA6",
        "keyword": "\u7B49\u7EA7",
        "added": "e",
        "position": "start"
      },
      {
        "word": "scalp",
        "meaning": "\u5265\u5934\u76AE",
        "keyword": "\u5265\u4E86\u5934\u76AE",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 327,
    "id": "pok",
    "rime": "POK",
    "title": "\u51B7\u6F20\u592B\u59BB\u7528\u6251\u514B\u63A2\u7D22\u667A\u5546",
    "story": "\u7531\u4E8E\u592B\u59BB\u53CC\u65B9\u90FD\u51B7\u6F20\u5F97\u4EE4\u4EBA\u53D1\u95F7\uFF0C\u6240\u4EE5\u5148\u751F\u63D0\u8BAE\u73A9\u6251\u514B\u6E38\u620F\u6765\u63A2\u7D22\u5BF9\u65B9\u7684\u667A\u5546\u95EE\u9898\u3002",
    "words": [
      {
        "word": "pokey",
        "meaning": "\u51B7\u6F20",
        "keyword": "\u51B7\u6F20",
        "added": "ey",
        "position": "start"
      },
      {
        "word": "poky",
        "meaning": "\u53D1\u95F7",
        "keyword": "\u53D1\u95F7",
        "added": "y",
        "position": "start"
      },
      {
        "word": "poker",
        "meaning": "\u6251\u514B",
        "keyword": "\u6251\u514B",
        "added": "er",
        "position": "start"
      },
      {
        "word": "poke",
        "meaning": "\u63A2\u7D22",
        "keyword": "\u63A2\u7D22",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 328,
    "id": "soa",
    "rime": "SOA",
    "title": "\u80A5\u7682\u5267\u6536\u89C6\u731B\u6DA8\u6210\u80A5\u7682\u5438\u91D1\u5229\u5668",
    "story": "\u7531\u4E8E\u80A5\u7682\u5267\u7684\u6536\u89C6\u7387\u9AD8\u6DA8\uFF0C\u7ADF\u6210\u4E3A\u5267\u4E2D\u5E7F\u544A\u80A5\u7682\u7684\u5438\u91D1\u5229\u5668\u3002",
    "words": [
      {
        "word": "soapopera",
        "meaning": "\u80A5\u7682\u5267",
        "keyword": "\u80A5\u7682\u5267",
        "added": "popera",
        "position": "start"
      },
      {
        "word": "soar",
        "meaning": "\u731B\u6DA8",
        "keyword": "\u9AD8\u6DA8",
        "added": "r",
        "position": "start"
      },
      {
        "word": "soap",
        "meaning": "\u80A5\u7682",
        "keyword": "\u80A5\u7682",
        "added": "p",
        "position": "start"
      },
      {
        "word": "soak",
        "meaning": "\u5438\u3001\u6D78\u6CE1",
        "keyword": "\u5438\u91D1",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 329,
    "id": "ci",
    "rime": "CI",
    "title": "\u5E02\u6C11\u5F15\u7528\u516C\u6C11\u6743\u5229\u8BF7\u9A6C\u620F\u56E2",
    "story": "\u5E02\u6C11\u6709\u6743\u5F15\u7528\u516C\u6C11\u7684\u6743\u5229\uFF0C\u8981\u6C42\u57CE\u5E02\u5B9A\u65F6\u9080\u8BF7\u9A6C\u620F\u56E2\u6765\u8868\u6F14\u3002",
    "words": [
      {
        "word": "citizen",
        "meaning": "\u5E02\u6C11",
        "keyword": "\u5E02\u6C11",
        "added": "tizen",
        "position": "start"
      },
      {
        "word": "civil",
        "meaning": "\u516C\u6C11\u7684",
        "keyword": "\u516C\u6C11\u7684\u6743\u5229",
        "added": "vil",
        "position": "start"
      },
      {
        "word": "cite",
        "meaning": "\u5F15\u7528",
        "keyword": "\u5F15\u7528",
        "added": "te",
        "position": "start"
      },
      {
        "word": "city",
        "meaning": "\u57CE\u5E02",
        "keyword": "\u57CE\u5E02",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "circus",
        "meaning": "\u9A6C\u620F\uFF08\u6742\u6280\uFF09\u56E2",
        "keyword": "\u9A6C\u620F\u56E2",
        "added": "rcus",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 330,
    "id": "ba2",
    "rime": "BA",
    "title": "\u6D77\u6E7E\u6D74\u5BA4\u6D17\u6FA1\u63D0\u9632\u574F\u8759\u8760",
    "story": "\u5728\u6D77\u6E7E\u7684\u6D74\u5BA4\u6D17\u6FA1\u65F6\uFF0C\u53EF\u5343\u4E07\u8981\u5C0F\u5FC3\u63D0\u9632\u574F\u8759\u8760\u3002",
    "words": [
      {
        "word": "bay",
        "meaning": "\u6D77\u6E7E",
        "keyword": "\u6D77\u6E7E",
        "added": "y",
        "position": "start"
      },
      {
        "word": "bath",
        "meaning": "\u6D74\u5BA4",
        "keyword": "\u6D74\u5BA4",
        "added": "th",
        "position": "start"
      },
      {
        "word": "bathe",
        "meaning": "\u6D17\u6FA1",
        "keyword": "\u6D17\u6FA1",
        "added": "the",
        "position": "start"
      },
      {
        "word": "bad",
        "meaning": "\u574F",
        "keyword": "\u574F",
        "added": "d",
        "position": "start"
      },
      {
        "word": "bat",
        "meaning": "\u8759\u8760",
        "keyword": "\u8759\u8760",
        "added": "t",
        "position": "start"
      }
    ]
  }
];
var colors3 = ["#466B8A", "#B85C45", "#6D7750", "#815D86", "#3D7C73", "#A85E54", "#53718A", "#8B6A45", "#3F7A68", "#6C6291"];
var illustratedIds = /* @__PURE__ */ new Set([
  "ta",
  "nat",
  "are3",
  "ast",
  "ant",
  "ue",
  "lue",
  "gra",
  "act",
  "foo",
  "ot",
  "ust",
  "eek",
  "rown",
  "ing",
  "amp",
  "ger",
  "are2",
  "obby",
  "ind2"
]);
var familiesBatch8 = seeds3.map((seed, index) => {
  const positions = new Set(seed.words.map((word) => word.position));
  const rimePosition = positions.size > 1 ? "mixed" : seed.words[0]?.position;
  const positionTip = rimePosition === "start" ? `\u5171\u540C\u90E8\u5206 ${seed.rime} \u653E\u5728\u8BCD\u9996\uFF0C\u518D\u63A5\u4E0A\u4E0D\u540C\u5B57\u6BCD` : rimePosition === "mixed" ? `\u5171\u540C\u90E8\u5206 ${seed.rime} \u6709\u65F6\u5728\u8BCD\u9996\u3001\u6709\u65F6\u5728\u8BCD\u5C3E\uFF0C\u9010\u884C\u89C2\u5BDF\u7EC4\u5408\u4F4D\u7F6E` : `\u628A\u5171\u540C\u90E8\u5206 ${seed.rime} \u653E\u5728\u8BCD\u5C3E\uFF0C\u6362\u4E0A\u4E0D\u540C\u8BCD\u9996`;
  return {
    id: seed.id,
    rime: seed.rime,
    rimePosition,
    title: seed.title,
    subtitle: seed.story,
    scene: illustratedIds.has(seed.id) ? `/scenes/${seed.id}.png` : "",
    story: segmentStory3(seed.story, seed.words),
    onsets: seed.words.map((word) => word.added),
    words: seed.words.map((word) => ({
      word: word.word,
      display: word.word.toUpperCase(),
      cn: word.meaning,
      onset: word.added,
      rimePosition: word.position
    })),
    tip: `${positionTip}\uFF0C\u4E00\u53E3\u6C14\u8BB0\u4F4F\u8FD9\u4E00\u7EC4 ${seed.words.length} \u4E2A\u5355\u8BCD\u3002`,
    color: colors3[index % colors3.length]
  };
});

// src/data/families-batch9.ts
function segmentStory4(story, words) {
  const occupied = [];
  const matches = [...words].sort((a, b) => b.keyword.length - a.keyword.length).map((word) => {
    let from = 0;
    let index = story.indexOf(word.keyword, from);
    while (index >= 0 && occupied.some((range) => index < range.end && index + word.keyword.length > range.start)) {
      from = index + 1;
      index = story.indexOf(word.keyword, from);
    }
    if (index >= 0) occupied.push({ start: index, end: index + word.keyword.length });
    return { index, text: word.keyword, word: word.word };
  }).filter((match) => match.index >= 0).sort((a, b) => a.index - b.index || b.text.length - a.text.length);
  const segments = [];
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
var seeds4 = [
  {
    "sourcePage": 331,
    "id": "by",
    "rime": "BY",
    "title": "\u62DC\u4F26\u95F2\u8C08\u62DC\u5360\u5EAD\u4E0E\u7535\u8111\u6570\u4F4D",
    "story": "\u62DC\u4F26\u662F\u4E2A\u8BD7\u4EBA\uFF0C\u4ED6\u7684\u526F\u4E1A\u662F\u95F2\u8C08\u62DC\u5360\u5EAD\u7684\u8C1A\u8BED\u548C\u7535\u8111\u6570\u4F4D\u3002",
    "words": [
      {
        "word": "byron",
        "meaning": "\u62DC\u4F26",
        "keyword": "\u62DC\u4F26",
        "added": "ron",
        "position": "start"
      },
      {
        "word": "bywork",
        "meaning": "\u526F\u4E1A",
        "keyword": "\u526F\u4E1A",
        "added": "work",
        "position": "start"
      },
      {
        "word": "byzantium",
        "meaning": "\u62DC\u5360\u5EAD",
        "keyword": "\u62DC\u5360\u5EAD",
        "added": "zantium",
        "position": "start"
      },
      {
        "word": "byword",
        "meaning": "\u8C1A\u8BED",
        "keyword": "\u8C1A\u8BED",
        "added": "word",
        "position": "start"
      },
      {
        "word": "bytalk",
        "meaning": "\u95F2\u8C08",
        "keyword": "\u95F2\u8C08",
        "added": "talk",
        "position": "start"
      },
      {
        "word": "byte",
        "meaning": "\u6570\u4F4D",
        "keyword": "\u6570\u4F4D",
        "added": "te",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 332,
    "id": "qua",
    "rime": "QUA",
    "title": "\u6C5F\u6E56\u533B\u751F\u529D\u56DB\u80DE\u80CE\u79BB\u5F00\u7801\u5934",
    "story": "\u6C5F\u6E56\u533B\u751F\u5BF9\u56DB\u80DE\u80CE\u4E4B\u4E00\u7684\u65E0\u6BDB\u96CF\u9E1F\u8BF4\uFF1A\u201C\u4F60\u4EEC\u5E94\u79BB\u5F00\u7801\u5934\uFF0C\u56DE\u5230\u6CBC\u6CFD\u533A\u53BB\u3002\u201D",
    "words": [
      {
        "word": "quack",
        "meaning": "\u6C5F\u6E56\u533B\u751F",
        "keyword": "\u6C5F\u6E56\u533B\u751F",
        "added": "ck",
        "position": "start"
      },
      {
        "word": "quad",
        "meaning": "\u56DB\u80DE\u80CE\u4E4B\u4E00",
        "keyword": "\u56DB\u80DE\u80CE\u4E4B\u4E00",
        "added": "d",
        "position": "start"
      },
      {
        "word": "quay",
        "meaning": "\u7801\u5934",
        "keyword": "\u7801\u5934",
        "added": "y",
        "position": "start"
      },
      {
        "word": "quag",
        "meaning": "\u6CBC\u6CFD",
        "keyword": "\u6CBC\u6CFD\u533A",
        "added": "g",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 333,
    "id": "par2",
    "rime": "PAR",
    "title": "\u4F1E\u5175\u5728\u5DF4\u9ECE\u516C\u56ED\u62A2\u6551\u5E7C\u96CF",
    "story": "\u4F1E\u5175\u7A7A\u964D\u5230\u5DF4\u9ECE\u516C\u56ED\u7684\u505C\u8F66\u573A\uFF0C\u62A2\u6551\u8C79\u53E3\u4E2D\u7684\u5E7C\u96CF\u3002",
    "words": [
      {
        "word": "para",
        "meaning": "\u4F1E\u5175",
        "keyword": "\u4F1E\u5175",
        "added": "a",
        "position": "start"
      },
      {
        "word": "paris",
        "meaning": "\u5DF4\u9ECE",
        "keyword": "\u5DF4\u9ECE",
        "added": "is",
        "position": "start"
      },
      {
        "word": "park",
        "meaning": "\u516C\u56ED",
        "keyword": "\u516C\u56ED",
        "added": "k",
        "position": "start"
      },
      {
        "word": "parking",
        "meaning": "\u505C\u8F66\u573A",
        "keyword": "\u505C\u8F66\u573A",
        "added": "king",
        "position": "start"
      },
      {
        "word": "pard",
        "meaning": "\u8C79",
        "keyword": "\u8C79\u53E3",
        "added": "d",
        "position": "start"
      },
      {
        "word": "parr",
        "meaning": "\u5E7C\u96CF",
        "keyword": "\u5E7C\u96CF",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 334,
    "id": "quar",
    "rime": "QUAR",
    "title": "\u77F3\u82F1\u56DB\u91CD\u594F\u7684\u4E00\u523B\u949F\u5956\u54C1",
    "story": "\u77F3\u82F1\u56DB\u91CD\u594F\u5728\u7687\u5BAB\u6F14\u594F\u4E86\u4E00\u523B\u949F\uFF0C\u5F97\u5230\u4E86\u56DB\u672C\u56DB\u5F00\u672C\u7684\u4E66\u548C\u56DB\u5938\u8131\u6C34\u3002",
    "words": [
      {
        "word": "quartz",
        "meaning": "\u77F3\u82F1",
        "keyword": "\u77F3\u82F1",
        "added": "tz",
        "position": "start"
      },
      {
        "word": "quartette",
        "meaning": "\u56DB\u91CD\u594F",
        "keyword": "\u56DB\u91CD\u594F",
        "added": "tette",
        "position": "start"
      },
      {
        "word": "quarter",
        "meaning": "\u4E00\u523B\u949F",
        "keyword": "\u4E00\u523B\u949F",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "quarto",
        "meaning": "\u56DB\u5F00\u672C",
        "keyword": "\u56DB\u5F00\u672C",
        "added": "to",
        "position": "start"
      },
      {
        "word": "quart",
        "meaning": "\u5938\u8131",
        "keyword": "\u56DB\u5938\u8131\u6C34",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 335,
    "id": "sca",
    "rime": "SCA",
    "title": "\u626B\u63CF\u7F42\u7C9F\u5BFB\u627E\u6D77\u6D1B\u56E0",
    "story": "\u641C\u7D22\u6D77\u6D1B\u56E0\uFF0C\u5149\u662F\u626B\u63CF\u7F42\u7C9F\u82B1\u7684\u82B1\u830E\u662F\u4E0D\u591F\u7684\uFF0C\u8FD8\u5E94\u8BE5\u626B\u63CF\u82B1\u6735\u624D\u884C\u3002",
    "words": [
      {
        "word": "scag",
        "meaning": "\u6D77\u6D1B\u56E0",
        "keyword": "\u6D77\u6D1B\u56E0",
        "added": "g",
        "position": "start"
      },
      {
        "word": "scan",
        "meaning": "\u626B\u63CF",
        "keyword": "\u626B\u63CF",
        "added": "n",
        "position": "start"
      },
      {
        "word": "scape",
        "meaning": "\u82B1\u830E",
        "keyword": "\u82B1\u830E",
        "added": "pe",
        "position": "start"
      },
      {
        "word": "scant",
        "meaning": "\u4E0D\u591F\u7684",
        "keyword": "\u4E0D\u591F\u7684",
        "added": "nt",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 336,
    "id": "scar",
    "rime": "SCAR",
    "title": "\u6709\u75A4\u5148\u751F\u62AB\u56F4\u5DFE\u5413\u4EBA",
    "story": "\u6709S\u7684CAR\u8F66\u5B50\u5C31\u662F\u75A4\uFF0C\u6709\u75A4\u7684S\u5148\u751F\u662F\u4E2A\u5413\u4EBA\u8005\uFF0C\u4ED6\u62AB\u7740\u56F4\u5DFE\u5728\u6697\u8857\u60CA\u5413\u522B\u4EBA\u3002",
    "words": [
      {
        "word": "scar",
        "meaning": "\u75A4",
        "keyword": "\u75A4",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "scarer",
        "meaning": "\u5413\u4EBA\u8005",
        "keyword": "\u5413\u4EBA\u8005",
        "added": "er",
        "position": "start"
      },
      {
        "word": "scarf",
        "meaning": "\u56F4\u5DFE\u3001\u9886\u5E26",
        "keyword": "\u56F4\u5DFE",
        "added": "f",
        "position": "start"
      },
      {
        "word": "scare",
        "meaning": "\u60CA\u5413",
        "keyword": "\u60CA\u5413",
        "added": "e",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 337,
    "id": "trans",
    "rime": "TRANS",
    "title": "\u6D77\u5173\u523A\u7A7F\u8D27\u7269\u9632\u6B62\u8C03\u5305",
    "story": "\u8FD0\u8F93\u8FC7\u5883\u65F6\uFF0C\u6D77\u5173\u4EBA\u5458\u4F1A\u523A\u7A7F\u8D27\u7269\u6765\u68C0\u9A8C\uFF0C\u4EE5\u9632\u8D27\u7269\u88AB\u8C03\u5305\u548C\u8F6C\u6362\u3002",
    "words": [
      {
        "word": "transsit",
        "meaning": "\u8FC7\u5883",
        "keyword": "\u8FC7\u5883",
        "added": "sit",
        "position": "start"
      },
      {
        "word": "transport",
        "meaning": "\u8FD0\u8F93",
        "keyword": "\u8FD0\u8F93",
        "added": "port",
        "position": "start"
      },
      {
        "word": "transfix",
        "meaning": "\u523A\u7A7F",
        "keyword": "\u523A\u7A7F",
        "added": "fix",
        "position": "start"
      },
      {
        "word": "transpose",
        "meaning": "\u8C03\u6362",
        "keyword": "\u8C03\u5305",
        "added": "pose",
        "position": "start"
      },
      {
        "word": "transfer",
        "meaning": "\u8F6C\u6362",
        "keyword": "\u8F6C\u6362",
        "added": "fer",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 338,
    "id": "car",
    "rime": "CAR",
    "title": "\u8239\u957F\u53EA\u8FD0\u6F2B\u753B\u7EB8\u677F\u7BB1",
    "story": "\u8239\u957F\u8BF4\uFF1A\u201C\u6211\u5F53\u7136\u77E5\u9053\u8FD0\u80E1\u841D\u535C\u3001\u5730\u6BEF\u7B49\u8239\u8D27\u7684\u5229\u6DA6\u6BD4\u8FD0\u4E00\u767E\u514B\u62C9\u94BB\u77F3\u8981\u5C11\uFF0C\u4F46\u6211\u8981\u8FD0\u7684\u662F\u88C5\u6F2B\u753B\u4E66\u7684\u7EB8\u677F\u7BB1\uFF0C\u800C\u4E0D\u8FD0\u8D70\u79C1\u8D27\u3002\u201D",
    "words": [
      {
        "word": "carrot",
        "meaning": "\u80E1\u841D\u535C",
        "keyword": "\u80E1\u841D\u535C",
        "added": "rot",
        "position": "start"
      },
      {
        "word": "carpet",
        "meaning": "\u5730\u6BEF",
        "keyword": "\u5730\u6BEF",
        "added": "pet",
        "position": "start"
      },
      {
        "word": "cargo",
        "meaning": "\u8239\u8D27",
        "keyword": "\u8239\u8D27",
        "added": "go",
        "position": "start"
      },
      {
        "word": "carat",
        "meaning": "\u514B\u62C9",
        "keyword": "\u4E00\u767E\u514B\u62C9\u94BB\u77F3",
        "added": "at",
        "position": "start"
      },
      {
        "word": "cartoon",
        "meaning": "\u6F2B\u753B\u3001\u5361\u901A",
        "keyword": "\u6F2B\u753B\u4E66",
        "added": "toon",
        "position": "start"
      },
      {
        "word": "carton",
        "meaning": "\u7EB8\u677F\u7BB1",
        "keyword": "\u7EB8\u677F\u7BB1",
        "added": "ton",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 339,
    "id": "ool3",
    "rime": "OOL",
    "title": "\u7956\u6BCD\u68A6\u8BDD\u63D0\u9192\u5E26\u7F8A\u6BDB\u7EBF\u8F74\u4E0A\u5B66",
    "story": "\u7956\u6BCD\u7761\u89C9\u65F6\u5E38\u8BF4\u7684\u68A6\u8BDD\u662F\uFF1A\u201C\u8BB0\u5F97\u8981\u5E26\u7F8A\u6BDB\u7EBF\u548C\u7EBF\u8F74\uFF0C\u4ECA\u5929\u5B66\u6821\u8981\u4E0A\u88C1\u7F1D\u8BFE\u3002\u201D",
    "words": [
      {
        "word": "drool",
        "meaning": "\u68A6\u8BDD",
        "keyword": "\u68A6\u8BDD",
        "added": "dr",
        "position": "end"
      },
      {
        "word": "wool",
        "meaning": "\u7F8A\u6BDB",
        "keyword": "\u7F8A\u6BDB\u7EBF",
        "added": "w",
        "position": "end"
      },
      {
        "word": "spool",
        "meaning": "\u7EBF\u8F74",
        "keyword": "\u7EBF\u8F74",
        "added": "sp",
        "position": "end"
      },
      {
        "word": "school",
        "meaning": "\u5B66\u6821",
        "keyword": "\u5B66\u6821",
        "added": "sch",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 340,
    "id": "abb",
    "rime": "ABB",
    "title": "\u65B9\u4E08\u7A7F\u7C97\u7F8A\u6BDB\u542C\u963F\u5DF4\u5408\u5531\u56E2",
    "story": "\u8EAB\u7A7F\u7C97\u7F8A\u6BDB\u886B\u7684\u65B9\u4E08\u867D\u662F\u4E2A\u50E7\u4FA3\uFF0C\u4F46\u4FEE\u884C\u4E4B\u4F59\u6700\u559C\u6B22\u963F\u5DF4\u5408\u5531\u56E2\u3002",
    "words": [
      {
        "word": "abb",
        "meaning": "\u7C97\u7F8A\u6BDB",
        "keyword": "\u7C97\u7F8A\u6BDB\u886B",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "abbot",
        "meaning": "\u65B9\u4E08\u3001\u4FEE\u9053\u9662\u957F",
        "keyword": "\u65B9\u4E08",
        "added": "ot",
        "position": "start"
      },
      {
        "word": "abbe",
        "meaning": "\u50E7\u4FA3",
        "keyword": "\u50E7\u4FA3",
        "added": "e",
        "position": "start"
      },
      {
        "word": "abba",
        "meaning": "\u963F\u5DF4\u5408\u5531\u56E2",
        "keyword": "\u963F\u5DF4\u5408\u5531\u56E2",
        "added": "a",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 341,
    "id": "clude",
    "rime": "CLUDE",
    "title": "\u592A\u592A\u79BB\u5A5A\u5206\u8D22\u4EA7\u7684\u7ED3\u8BBA",
    "story": "\u592A\u592A\u5BF9\u5148\u751F\u8BF4\uFF1A\u201C\u6211\u7684\u7ED3\u8BBA\u662F\u5A5A\u975E\u79BB\u4E0D\u53EF\uFF0C\u8FD8\u8981\u7F34\u7684\u5206\u671F\u4ED8\u6B3E\u9664\u5916\uFF0C\u5176\u4ED6\u7684\u8D22\u4EA7\u5305\u542B\u52A8\u4EA7\u548C\u4E0D\u52A8\u4EA7\u90FD\u5F52\u6211\u3002\u201D",
    "words": [
      {
        "word": "conclude",
        "meaning": "\u4E0B\u7ED3\u8BBA",
        "keyword": "\u7ED3\u8BBA",
        "added": "con",
        "position": "end"
      },
      {
        "word": "seclude",
        "meaning": "\u5206\u79BB",
        "keyword": "\u79BB\u4E0D\u53EF",
        "added": "se",
        "position": "end"
      },
      {
        "word": "exclude",
        "meaning": "\u9664\u5916",
        "keyword": "\u9664\u5916",
        "added": "ex",
        "position": "end"
      },
      {
        "word": "include",
        "meaning": "\u5305\u542B",
        "keyword": "\u5305\u542B",
        "added": "in",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 342,
    "id": "pu",
    "rime": "PU",
    "title": "\u6361\u5230\u94B1\u5305\u540E\u4E70\u7F8E\u6D32\u8C79\u53BB\u9152\u5427",
    "story": "\u6709\u7684\u4EBA\u5728\u8DEF\u4E0A\u6361\u5230\u5C0F\u732B\u3001\u5C0F\u72D7\uFF0C\u5982\u54C8\u5DF4\u72D7\uFF0C\u4F46\u6211\u5374\u6361\u5230\u94B1\u5305\uFF0C\u518D\u5230\u540D\u54C1\u5E97\u4E70\u4EF6\u201C\u7F8E\u6D32\u8C79\u201D\u53BB\u6CE1\u9152\u5427\u3002",
    "words": [
      {
        "word": "puss",
        "meaning": "\u5C0F\u732B",
        "keyword": "\u5C0F\u732B",
        "added": "ss",
        "position": "start"
      },
      {
        "word": "pup",
        "meaning": "\u5C0F\u72D7",
        "keyword": "\u5C0F\u72D7",
        "added": "p",
        "position": "start"
      },
      {
        "word": "pug",
        "meaning": "\u54C8\u5DF4\u72D7",
        "keyword": "\u54C8\u5DF4\u72D7",
        "added": "g",
        "position": "start"
      },
      {
        "word": "pub",
        "meaning": "\u9152\u5427",
        "keyword": "\u9152\u5427",
        "added": "b",
        "position": "start"
      },
      {
        "word": "purse",
        "meaning": "\u94B1\u5305",
        "keyword": "\u94B1\u5305",
        "added": "rse",
        "position": "start"
      },
      {
        "word": "puma",
        "meaning": "\u7F8E\u6D32\u8C79",
        "keyword": "\u7F8E\u6D32\u8C79",
        "added": "ma",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 343,
    "id": "smi",
    "rime": "SMI",
    "title": "\u94C1\u5320\u5FAE\u7B11\u9762\u5BF9\u725B\u5C3E\u83DC\u5F04\u810F\u5C4B\u5B50",
    "story": "\u53F2\u5BC6\u65AF\u662F\u4E2A\u94C1\u5320\uFF0C\u4ED6\u7A7F\u7740\u80AE\u810F\u7684\u5DE5\u4F5C\u670D\uFF0C\u770B\u5230\u513F\u5B50\u91C7\u725B\u5C3E\u83DC\u56DE\u6765\uFF0C\u6CBE\u6C61\u4E86\u6574\u4E2A\u5C4B\u5B50\uFF0C\u4ED6\u53EA\u662F\u5FAE\u7B11\u7740\uFF0C\u6CA1\u6709\u8D23\u6253\u7684\u610F\u601D\u3002",
    "words": [
      {
        "word": "smilax",
        "meaning": "\u725B\u5C3E\u83DC",
        "keyword": "\u725B\u5C3E\u83DC",
        "added": "lax",
        "position": "start"
      },
      {
        "word": "smile",
        "meaning": "\u5FAE\u7B11",
        "keyword": "\u5FAE\u7B11\u7740",
        "added": "le",
        "position": "start"
      },
      {
        "word": "smirch",
        "meaning": "\u6CBE\u6C61",
        "keyword": "\u6CBE\u6C61",
        "added": "rch",
        "position": "start"
      },
      {
        "word": "smite",
        "meaning": "\u8D23\u6253",
        "keyword": "\u8D23\u6253",
        "added": "te",
        "position": "start"
      },
      {
        "word": "smith",
        "meaning": "\u94C1\u5320",
        "keyword": "\u94C1\u5320",
        "added": "th",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 344,
    "id": "dea",
    "rime": "DEA",
    "title": "\u5A5A\u524D\u4EB2\u7231\u5A5A\u540E\u53C8\u804B\u53C8\u6B7B",
    "story": "\u592A\u592A\u62B1\u6028\u5148\u751F\u8BF4\uFF1A\u201C\u4F60\u5A5A\u524D\u53E3\u53E3\u58F0\u58F0\u4EB2\u7231\u7684\uFF0C\u5A5A\u540E\u5374\u50CF\u53C8\u804B\u53C8\u6B7B\u7684\u9057\u50CF\u3002\u201D",
    "words": [
      {
        "word": "dead",
        "meaning": "\u6B7B\u7684",
        "keyword": "\u6B7B\u7684",
        "added": "d",
        "position": "start"
      },
      {
        "word": "deaf",
        "meaning": "\u804B\u7684",
        "keyword": "\u804B",
        "added": "f",
        "position": "start"
      },
      {
        "word": "dear",
        "meaning": "\u53EF\u7231\u7684\u3001\u4EB2\u7231\u7684",
        "keyword": "\u4EB2\u7231\u7684",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 345,
    "id": "ali",
    "rime": "ALI",
    "title": "\u5916\u56FD\u4EBA\u7528\u5047\u540D\u7740\u9646\u6C42\u6D3B\u547D",
    "story": "\u4E00\u4E2A\u5916\u56FD\u4EBA\u7528\u5047\u540D\u7740\u9646\uFF0C\u4E3A\u7684\u662F\u8981\u6D3B\u547D\uFF0C\u5E76\u53D6\u5F97\u4E0D\u5728\u73B0\u573A\u7684\u8BC1\u660E\u3002",
    "words": [
      {
        "word": "alien",
        "meaning": "\u5916\u56FD\u4EBA",
        "keyword": "\u5916\u56FD\u4EBA",
        "added": "en",
        "position": "start"
      },
      {
        "word": "alias",
        "meaning": "\u5316\u540D\u3001\u5047\u540D\u3001\u522B\u540D",
        "keyword": "\u5047\u540D",
        "added": "as",
        "position": "start"
      },
      {
        "word": "alibi",
        "meaning": "\u4E0D\u5728\u73B0\u573A\u8BC1\u660E",
        "keyword": "\u4E0D\u5728\u73B0\u573A\u7684\u8BC1\u660E",
        "added": "bi",
        "position": "start"
      },
      {
        "word": "alight",
        "meaning": "\u7740\u9646",
        "keyword": "\u7740\u9646",
        "added": "ght",
        "position": "start"
      },
      {
        "word": "alive",
        "meaning": "\u6D3B\u7740",
        "keyword": "\u6D3B\u547D",
        "added": "ve",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 346,
    "id": "ower2",
    "rime": "OWER",
    "title": "\u5212\u624B\u62D2\u7EDD\u64AD\u79CD\u548C\u5208\u8349",
    "story": "\u5212\u624B\u8BF4\uFF1A\u201C\u5212\u8239\u624D\u662F\u6211\u5929\u8D4B\u7684\u624D\u80FD\uFF0C\u800C\u4E0D\u662F\u5F53\u4E2A\u64AD\u79CD\u8005\u3001\u5208\u8349\u673A\u3002\u201D",
    "words": [
      {
        "word": "rower",
        "meaning": "\u5212\u624B",
        "keyword": "\u5212\u624B",
        "added": "r",
        "position": "end"
      },
      {
        "word": "dower",
        "meaning": "\u5929\u8D4B\u7684\u624D\u80FD",
        "keyword": "\u5929\u8D4B\u7684\u624D\u80FD",
        "added": "d",
        "position": "end"
      },
      {
        "word": "mower",
        "meaning": "\u5208\u8349\u673A",
        "keyword": "\u5208\u8349\u673A",
        "added": "m",
        "position": "end"
      },
      {
        "word": "sower",
        "meaning": "\u64AD\u79CD\u8005",
        "keyword": "\u64AD\u79CD\u8005",
        "added": "s",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 347,
    "id": "omb",
    "rime": "OMB",
    "title": "\u70B8\u5F39\u68B3\u5B50\u8C08\u5B50\u5BAB\u4E0E\u575F\u5893",
    "story": "\u70B8\u5F39\u5BF9\u68B3\u5B50\u8BF4\uFF1A\u201C\u95EE\u6211\u4ECE\u54EA\u91CC\u6765\uFF1F\u6240\u6709\u7684\u4EBA\u90FD\u662F\u6765\u81EA\u5A18\u80CE\u5B50\u5BAB\uFF1B\u6240\u6709\u7684\u4EBA\u90FD\u5C06\u8D70\u8FDB\u575F\u5893\uFF0C\u6709\u8C01\u4E0D\u540C\uFF1F\u201D",
    "words": [
      {
        "word": "bomb",
        "meaning": "\u70B8\u5F39",
        "keyword": "\u70B8\u5F39",
        "added": "b",
        "position": "end"
      },
      {
        "word": "comb",
        "meaning": "\u68B3\u5B50",
        "keyword": "\u68B3\u5B50",
        "added": "c",
        "position": "end"
      },
      {
        "word": "womb",
        "meaning": "\u5B50\u5BAB",
        "keyword": "\u5B50\u5BAB",
        "added": "w",
        "position": "end"
      },
      {
        "word": "tomb",
        "meaning": "\u575F\u5893",
        "keyword": "\u575F\u5893",
        "added": "t",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 348,
    "id": "ya",
    "rime": "YA",
    "title": "\u8036\u9C81\u7F8E\u56FD\u4F6C\u7231\u9A86\u9A6C\u538C\u8859\u95E8\u756A\u85AF",
    "story": "\u8036\u9C81\u5927\u5B66\u6BD5\u4E1A\u7684\u7F8E\u56FD\u4F6C\u559C\u6B22\u79D8\u9C81\u9A86\u9A6C\uFF0C\u4E0D\u559C\u6B22\u5230\u4E2D\u56FD\u8859\u95E8\u542C\u5520\u53E8\u3001\u5403\u756A\u85AF\u3002",
    "words": [
      {
        "word": "yale",
        "meaning": "\u8036\u9C81",
        "keyword": "\u8036\u9C81\u5927\u5B66",
        "added": "le",
        "position": "start"
      },
      {
        "word": "yankee",
        "meaning": "\u7F8E\u56FD\u4F6C",
        "keyword": "\u7F8E\u56FD\u4F6C",
        "added": "nkee",
        "position": "start"
      },
      {
        "word": "yamma",
        "meaning": "\u9A86\u9A6C",
        "keyword": "\u9A86\u9A6C",
        "added": "mma",
        "position": "start"
      },
      {
        "word": "yamen",
        "meaning": "\u8859\u95E8",
        "keyword": "\u8859\u95E8",
        "added": "men",
        "position": "start"
      },
      {
        "word": "yap",
        "meaning": "\u5520\u53E8",
        "keyword": "\u5520\u53E8",
        "added": "p",
        "position": "start"
      },
      {
        "word": "yam",
        "meaning": "\u756A\u85AF",
        "keyword": "\u756A\u85AF",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 349,
    "id": "kit",
    "rime": "KIT",
    "title": "\u5409\u8482\u53A8\u623F\u7684\u98CE\u7B5D\u5DE5\u5177\u548C\u5C0F\u732B",
    "story": "\u5409\u8482\u7684\u53A8\u623F\u6709\u4E00\u5957\u505A\u98CE\u7B5D\u7684\u5DE5\u5177\uFF0C\u53EF\u662F\u4EB2\u670B\u597D\u53CB\u5374\u559C\u6B22\u8DDF\u5979\u5BB6\u4E2D\u7684\u5C0F\u732B\u73A9\u6E38\u620F\u3002",
    "words": [
      {
        "word": "kit",
        "meaning": "\u4E00\u5957\u5DE5\u5177",
        "keyword": "\u4E00\u5957",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "kittie",
        "meaning": "\u5409\u8482",
        "keyword": "\u5409\u8482",
        "added": "tie",
        "position": "start"
      },
      {
        "word": "kite",
        "meaning": "\u98CE\u7B5D",
        "keyword": "\u98CE\u7B5D",
        "added": "e",
        "position": "start"
      },
      {
        "word": "kith",
        "meaning": "\u4EB2\u670B\u597D\u53CB",
        "keyword": "\u4EB2\u670B\u597D\u53CB",
        "added": "h",
        "position": "start"
      },
      {
        "word": "kitty",
        "meaning": "\u5C0F\u732B",
        "keyword": "\u5C0F\u732B",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "kitchen",
        "meaning": "\u53A8\u623F",
        "keyword": "\u53A8\u623F",
        "added": "chen",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 350,
    "id": "seclu",
    "rime": "SECLU",
    "title": "\u6743\u6597\u5931\u8D25\u540E\u9690\u9000\u50FB\u9759\u4E61\u95F4",
    "story": "\u7531\u4E8E\u6743\u529B\u6597\u4E89\u5931\u8D25\uFF0C\u4ED6\u9690\u9000\u5230\u50FB\u9759\u7684\u4E61\u95F4\uFF0C\u8FC7\u7740\u4E0E\u4E16\u9694\u7EDD\u7684\u751F\u6D3B\u3002",
    "words": [
      {
        "word": "seclude",
        "meaning": "\u9690\u9000\u3001\u9694\u79BB",
        "keyword": "\u9690\u9000",
        "added": "de",
        "position": "start"
      },
      {
        "word": "secluded",
        "meaning": "\u50FB\u9759\u7684",
        "keyword": "\u50FB\u9759\u7684",
        "added": "ded",
        "position": "start"
      },
      {
        "word": "seclusion",
        "meaning": "\u4E0E\u4E16\u9694\u7EDD",
        "keyword": "\u4E0E\u4E16\u9694\u7EDD",
        "added": "sion",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 351,
    "id": "abac",
    "rime": "ABAC",
    "title": "\u7B97\u76D8\u4F7F\u7528\u8005\u4E0E\u5415\u5B8B\u5927\u9EBB",
    "story": "\u7B97\u76D8\u4F7F\u7528\u8005\u8BF4\uFF1A\u201C\u4E0D\u7528\u8BA1\u7B97\u5668\u8BA1\u7B97\u4E5F\u4F1A\u77E5\u9053\uFF0C\u79CD\u5415\u5B8B\u5927\u9EBB\u4F1A\u4F7F\u6587\u660E\u540E\u9000\uFF0C\u81EA\u7136\u6BD4\u8F83\u4E0D\u597D\u3002\u201D",
    "words": [
      {
        "word": "abacus",
        "meaning": "\u7B97\u76D8",
        "keyword": "\u7B97\u76D8",
        "added": "us",
        "position": "start"
      },
      {
        "word": "abacist",
        "meaning": "\u7B97\u76D8\u4F7F\u7528\u8005",
        "keyword": "\u4F7F\u7528\u8005",
        "added": "ist",
        "position": "start"
      },
      {
        "word": "aback",
        "meaning": "\uFF08\u8239\uFF09\u9000\u5411\u540E",
        "keyword": "\u540E\u9000",
        "added": "k",
        "position": "start"
      },
      {
        "word": "abaca",
        "meaning": "\u5415\u5B8B\u5927\u9EBB",
        "keyword": "\u5415\u5B8B\u5927\u9EBB",
        "added": "a",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 352,
    "id": "ull2",
    "rime": "ULL",
    "title": "\u6D77\u9E25\u4EAB\u53D7\u6666\u6697\u5929\u7A7A\u4E0B\u7684\u5B89\u9759",
    "story": "\u6D77\u9E25\u8BF4\uFF1A\u201C\u867D\u7136\u5929\u7A7A\u6709\u65F6\u5019\u6709\u70B9\u6666\u6697\uFF0C\u4F46\u5374\u80FD\u4EAB\u53D7\u5230\u5B8C\u5168\u7684\u5B89\u9759\u3002\u201D",
    "words": [
      {
        "word": "gull",
        "meaning": "\u9E25",
        "keyword": "\u6D77\u9E25",
        "added": "g",
        "position": "end"
      },
      {
        "word": "dull",
        "meaning": "\u6666\u6697",
        "keyword": "\u6666\u6697",
        "added": "d",
        "position": "end"
      },
      {
        "word": "full",
        "meaning": "\u5B8C\u5168\u7684",
        "keyword": "\u5B8C\u5168\u7684",
        "added": "f",
        "position": "end"
      },
      {
        "word": "lull",
        "meaning": "\u5B89\u9759",
        "keyword": "\u5B89\u9759",
        "added": "l",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 353,
    "id": "body",
    "rime": "BODY",
    "title": "\u6B7B\u540E\u4E0D\u518D\u5206\u65E0\u540D\u5C0F\u5B50\u4E0E\u91CD\u8981\u4EBA\u7269",
    "story": "\u4EBA\u751F\u800C\u4E0D\u5E73\u7B49\uFF0C\u6709\u8D2B\u5BCC\u8D31\u8D35\u4E4B\u5206\uFF1B\u4F46\u4EBA\u6B7B\u4E86\u4E4B\u540E\uFF0C\u8EAB\u8EAF\u53EA\u662F\u67D0\u4EBA\u7684\u8EAB\u8EAF\uFF0C\u518D\u4E5F\u4E0D\u5206\u65E0\u540D\u5C0F\u5B50\u6216\u91CD\u8981\u4EBA\u7269\u3002",
    "words": [
      {
        "word": "body",
        "meaning": "\u8EAB\u4F53",
        "keyword": "\u8EAB\u8EAF",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "nobody",
        "meaning": "\u65E0\u540D\u5C0F\u5B50",
        "keyword": "\u65E0\u540D\u5C0F\u5B50",
        "added": "no",
        "position": "end"
      },
      {
        "word": "somebody",
        "meaning": "\u67D0\u4EBA\u3001\u91CD\u8981\u4EBA\u7269",
        "keyword": "\u91CD\u8981\u4EBA\u7269",
        "added": "some",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 354,
    "id": "see",
    "rime": "SEE",
    "title": "\u5148\u770B\u61C2\u518D\u5BFB\u627E\u4F18\u79C0\u79CD\u5B50",
    "story": "\u7236\u4EB2\u5BF9\u521A\u7ED3\u5A5A\u7684\u5973\u513F\u8BF4\uFF1A\u201C\u770B\u6765\u4F60\u4F3C\u4E4E\u61C2\u4E86\uFF0C\u64AD\u79CD\u4E4B\u524D\u8981\u5148\u7528\u89C6\u89C9\u53BB\u5BFB\u627E\u4F18\u79C0\u7684\u79CD\u5B50\u3002\u201D",
    "words": [
      {
        "word": "see",
        "meaning": "\u770B\u3001\u4E86\u89E3\u3001\u61C2",
        "keyword": "\u61C2\u4E86",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "seem",
        "meaning": "\u4F3C\u4E4E\u3001\u770B\u6765",
        "keyword": "\u4F3C\u4E4E",
        "added": "m",
        "position": "start"
      },
      {
        "word": "seed",
        "meaning": "\u79CD\u5B50\u3001\u64AD\u79CD",
        "keyword": "\u79CD\u5B50",
        "added": "d",
        "position": "start"
      },
      {
        "word": "seeing",
        "meaning": "\u89C6\u89C9",
        "keyword": "\u89C6\u89C9",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "seek",
        "meaning": "\u5BFB\u627E",
        "keyword": "\u5BFB\u627E",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 355,
    "id": "aba",
    "rime": "ABA",
    "title": "\u9633\u5149\u4E0B\u516B\u5343\u5143\u9C8D\u9C7C\u5BB4",
    "story": "\u5728\u9633\u5149\u4E0B\u5403\u4E00\u9910\u516B\u5343\u5143\u7684\u9C8D\u9C7C\u5BB4\uFF0C\u8FD9\u79CD\u66B4\u53D1\u6237\u7684\u5FC3\u6001\u5E94\u8BE5\u629B\u5F03\uFF0C\u8FD9\u53EA\u4F1A\u51CF\u5C11\u522B\u4EBA\u5BF9\u4F60\u7684\u5C0A\u656C\u800C\u8D2C\u4F4E\u4F60\u3002",
    "words": [
      {
        "word": "abask",
        "meaning": "\u5728\u9633\u5149\u4E0B",
        "keyword": "\u9633\u5149\u4E0B",
        "added": "sk",
        "position": "start"
      },
      {
        "word": "abalone",
        "meaning": "\u9C8D\u9C7C",
        "keyword": "\u9C8D\u9C7C\u5BB4",
        "added": "lone",
        "position": "start"
      },
      {
        "word": "abandon",
        "meaning": "\u629B\u5F03",
        "keyword": "\u629B\u5F03",
        "added": "ndon",
        "position": "start"
      },
      {
        "word": "abase",
        "meaning": "\u8D2C\u6291\u3001\u5C48\u4ECE",
        "keyword": "\u8D2C\u4F4E",
        "added": "se",
        "position": "start"
      },
      {
        "word": "abate",
        "meaning": "\u51CF\u5C11",
        "keyword": "\u51CF\u5C11",
        "added": "te",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 356,
    "id": "ma",
    "rime": "MA",
    "title": "\u8BB8\u591A\u7537\u4EBA\u75AF\u72C2\u7ED3\u5A5A\u53C8\u6234\u9762\u5177",
    "story": "\u8BB8\u591A\u7537\u4EBA\u90FD\u75AF\u72C2\u5730\u53BB\u505A\u7ED3\u5A5A\u7684\u50BB\u4E8B\uFF0C\u7B49\u5230\u5BF9\u5A5A\u59FB\u5931\u671B\u540E\uFF0C\u8FD8\u662F\u6234\u9762\u5177\u793A\u4EBA\u3002",
    "words": [
      {
        "word": "man",
        "meaning": "\u7537\u4EBA",
        "keyword": "\u7537\u4EBA",
        "added": "n",
        "position": "start"
      },
      {
        "word": "mad",
        "meaning": "\u75AF\u72C2",
        "keyword": "\u75AF\u72C2\u5730",
        "added": "d",
        "position": "start"
      },
      {
        "word": "make",
        "meaning": "\u505A",
        "keyword": "\u505A",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "many",
        "meaning": "\u8BB8\u591A",
        "keyword": "\u8BB8\u591A",
        "added": "ny",
        "position": "start"
      },
      {
        "word": "marry",
        "meaning": "\u7ED3\u5A5A",
        "keyword": "\u7ED3\u5A5A",
        "added": "rry",
        "position": "start"
      },
      {
        "word": "mask",
        "meaning": "\u9762\u5177",
        "keyword": "\u9762\u5177",
        "added": "sk",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 357,
    "id": "ut",
    "rime": "UT",
    "title": "\u5C0F\u5C4B\u624B\u672F\u5200\u6709\u65F6\u5207\u575A\u679C",
    "story": "\u533B\u751F\u5BF9\u75C5\u4EBA\u8BF4\uFF1A\u201C\u5C0F\u5C4B\u91CC\u5E38\u89C4\u6446\u653E\u7684\u624B\u672F\u5200\uFF0C\u6709\u65F6\u5019\u662F\u7528\u6765\u505A\u624B\u672F\uFF0C\u6709\u65F6\u5019\u662F\u7528\u6765\u5207\u575A\u679C\u3002\u201D",
    "words": [
      {
        "word": "hut",
        "meaning": "\u5C0F\u5C4B",
        "keyword": "\u5C0F\u5C4B",
        "added": "h",
        "position": "end"
      },
      {
        "word": "rut",
        "meaning": "\u8F66\u8F99\u3001\u5E38\u89C4",
        "keyword": "\u5E38\u89C4",
        "added": "r",
        "position": "end"
      },
      {
        "word": "put",
        "meaning": "\u653E\u3001\u6446",
        "keyword": "\u6446\u653E",
        "added": "p",
        "position": "end"
      },
      {
        "word": "cut",
        "meaning": "\u5207\u3001\u5272",
        "keyword": "\u5207",
        "added": "c",
        "position": "end"
      },
      {
        "word": "nut",
        "meaning": "\u575A\u679C",
        "keyword": "\u575A\u679C",
        "added": "n",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 358,
    "id": "chee",
    "rime": "CHEE",
    "title": "\u65E0\u803B\u5546\u4EBA\u8D56\u5356\u4E0B\u7B49\u4E73\u916A",
    "story": "\u65E0\u803B\u7684\u5546\u4EBA\u800D\u8D56\u5356\u7ED9\u987E\u5BA2\u4E0B\u7B49\u7684\u4E73\u916A\uFF0C\u81EA\u5DF1\u8FD8\u5728\u80CC\u540E\u6B22\u547C\u559D\u5F69\u3002",
    "words": [
      {
        "word": "cheeky",
        "meaning": "\u65E0\u803B\u7684",
        "keyword": "\u65E0\u803B\u7684",
        "added": "ky",
        "position": "start"
      },
      {
        "word": "cheek",
        "meaning": "\u8D56\u3001\u800D\u8D56",
        "keyword": "\u800D\u8D56",
        "added": "k",
        "position": "start"
      },
      {
        "word": "cheesy",
        "meaning": "\u4E0B\u7B49\u7684",
        "keyword": "\u4E0B\u7B49\u7684",
        "added": "sy",
        "position": "start"
      },
      {
        "word": "cheese",
        "meaning": "\u4E73\u916A",
        "keyword": "\u4E73\u916A",
        "added": "se",
        "position": "start"
      },
      {
        "word": "cheer",
        "meaning": "\u6B22\u547C\u3001\u559D\u5F69",
        "keyword": "\u6B22\u547C\u559D\u5F69",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 359,
    "id": "glo",
    "rime": "GLO",
    "title": "\u5E7D\u6697\u4E2D\u5149\u8363\u5374\u4E0D\u5982\u7231",
    "story": "\u5E74\u5EA6\u6700\u4F73\u9632\u5B88\u5F97\u5956\u4EBA\u8BF4\uFF1A\u201C\u5E7D\u6697\u4E2D\u66F4\u80FD\u663E\u9732\u5149\u8363\uFF0C\u4F46\u5F97\u5230\u53D1\u5149\u7684\u91D1\u624B\u5957\uFF0C\u4E0D\u5982\u5F97\u5230\u5C11\u4E00\u4E2AG\u7684\u7231\u597D\u3002\u201D",
    "words": [
      {
        "word": "gloom",
        "meaning": "\u5E7D\u6697",
        "keyword": "\u5E7D\u6697",
        "added": "om",
        "position": "start"
      },
      {
        "word": "glory",
        "meaning": "\u5149\u8363",
        "keyword": "\u5149\u8363",
        "added": "ry",
        "position": "start"
      },
      {
        "word": "glow",
        "meaning": "\u53D1\u5149",
        "keyword": "\u53D1\u5149",
        "added": "w",
        "position": "start"
      },
      {
        "word": "glove",
        "meaning": "\u624B\u5957",
        "keyword": "\u624B\u5957",
        "added": "ve",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 360,
    "id": "ther",
    "rime": "THER",
    "title": "\u7236\u6BCD\u5144\u5F1F\u5C11\u5E9F\u8BDD\u5171\u594F\u7B5D",
    "story": "\u7236\u6BCD\u3001\u5144\u5F1F\u5BB6\u65CF\u805A\u4F1A\u540C\u4E50\u65F6\uFF0C\u4E0E\u5176\u8BB2\u4E9B\u5E9F\u8BDD\uFF0C\u4E0D\u5982\u5168\u5BB6\u4E00\u8D77\u5408\u594F\u7B5D\u3002",
    "words": [
      {
        "word": "father",
        "meaning": "\u7236",
        "keyword": "\u7236",
        "added": "fa",
        "position": "end"
      },
      {
        "word": "mother",
        "meaning": "\u6BCD",
        "keyword": "\u6BCD",
        "added": "mo",
        "position": "end"
      },
      {
        "word": "brother",
        "meaning": "\u5144\u5F1F",
        "keyword": "\u5144\u5F1F",
        "added": "bro",
        "position": "end"
      },
      {
        "word": "blather",
        "meaning": "\u5E9F\u8BDD",
        "keyword": "\u5E9F\u8BDD",
        "added": "bla",
        "position": "end"
      },
      {
        "word": "zither",
        "meaning": "\u7B5D",
        "keyword": "\u7B5D",
        "added": "zi",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 361,
    "id": "ban3",
    "rime": "BAN",
    "title": "\u8282\u98DF\u5973\u5996\u7CBE\u6447\u65D7\u558A\u4E07\u5C81",
    "story": "\u592A\u592A\u5BF9\u5148\u751F\u8BF4\uFF1A\u201C\u8282\u98DF\u51CF\u80A5\u53EF\u80FD\u662F\u5065\u5EB7\u514B\u661F\uFF0C\u4F46\u5F53\u6211\u53D8\u6210\u9B54\u9B3C\u8EAB\u6750\u7684\u5973\u5996\u7CBE\u65F6\uFF0C\u4F60\u53EF\u8981\u9AD8\u5174\u5730\u6447\u65D7\u558A\u4E07\u5C81\u4E86\uFF01\u201D",
    "words": [
      {
        "word": "bant",
        "meaning": "\u8282\u98DF\u3001\u51CF\u80A5",
        "keyword": "\u8282\u98DF\u51CF\u80A5",
        "added": "t",
        "position": "start"
      },
      {
        "word": "bane",
        "meaning": "\u514B\u661F",
        "keyword": "\u514B\u661F",
        "added": "e",
        "position": "start"
      },
      {
        "word": "banshee",
        "meaning": "\u5973\u5996\u7CBE",
        "keyword": "\u5973\u5996\u7CBE",
        "added": "shee",
        "position": "start"
      },
      {
        "word": "banner",
        "meaning": "\u65D7",
        "keyword": "\u65D7",
        "added": "ner",
        "position": "start"
      },
      {
        "word": "banzai",
        "meaning": "\u4E07\u5C81",
        "keyword": "\u4E07\u5C81",
        "added": "zai",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 362,
    "id": "ca2",
    "rime": "CA",
    "title": "\u6076\u68CD\u5728\u5F00\u7F57\u70B9\u65E0\u5496\u5561\u56E0\u5496\u5561",
    "story": "\u6709\u4E2A\u6076\u68CD\u5230\u5F00\u7F57\u7684\u5C0F\u9910\u5385\uFF0C\u53EB\u4E86\u4E00\u676F\u65E0\u5496\u5561\u56E0\u7684\u5496\u5561\u3002",
    "words": [
      {
        "word": "cad",
        "meaning": "\u6076\u68CD",
        "keyword": "\u6076\u68CD",
        "added": "d",
        "position": "start"
      },
      {
        "word": "cairo",
        "meaning": "\u5F00\u7F57",
        "keyword": "\u5F00\u7F57",
        "added": "iro",
        "position": "start"
      },
      {
        "word": "cafe",
        "meaning": "\u5C0F\u9910\u5385",
        "keyword": "\u5C0F\u9910\u5385",
        "added": "fe",
        "position": "start"
      },
      {
        "word": "caffeine",
        "meaning": "\u5496\u5561\u56E0",
        "keyword": "\u65E0\u5496\u5561\u56E0",
        "added": "ffeine",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 363,
    "id": "red",
    "rime": "RED",
    "title": "\u4F4E\u85AA\u7F16\u8F91\u91CD\u505A\u7EA2\u5E3D\u53C8\u8138\u7EA2\u5426\u8BA4",
    "story": "\u7F16\u8F91\u56E0\u4E3A\u85AA\u6C34\u592A\u4F4E\uFF0C\u800C\u91CD\u505A\u7EA2\u5E3D\u5B50\uFF1B\u88AB\u670B\u53CB\u8BA4\u51FA\u65F6\uFF0C\u8138\u7EA2\u5730\u4E00\u518D\u5426\u8BA4\u3002",
    "words": [
      {
        "word": "redact",
        "meaning": "\u7F16\u8F91",
        "keyword": "\u7F16\u8F91",
        "added": "act",
        "position": "start"
      },
      {
        "word": "redo",
        "meaning": "\u91CD\u505A",
        "keyword": "\u91CD\u505A",
        "added": "o",
        "position": "start"
      },
      {
        "word": "redcap",
        "meaning": "\u7EA2\u5E3D\u5B50\uFF08\u811A\u592B\uFF09",
        "keyword": "\u7EA2\u5E3D\u5B50",
        "added": "cap",
        "position": "start"
      },
      {
        "word": "redden",
        "meaning": "\u8138\u7EA2",
        "keyword": "\u8138\u7EA2",
        "added": "den",
        "position": "start"
      },
      {
        "word": "reddeny",
        "meaning": "\u518D\u5426\u8BA4",
        "keyword": "\u4E00\u518D\u5426\u8BA4",
        "added": "deny",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 364,
    "id": "rea3",
    "rime": "REA",
    "title": "\u9605\u8BFB\u771F\u7684\u83B7\u5F97\u4E00\u4EE4\u77E5\u8BC6",
    "story": "\u57F9\u517B\u9605\u8BFB\u7684\u4E60\u60EF\uFF0C\u771F\u7684\u4F1A\u4EE4\u4F60\u83B7\u5F97\u4E00\u4EE4\u7EB8\u7684\u77E5\u8BC6\u3002",
    "words": [
      {
        "word": "rear",
        "meaning": "\u57F9\u517B",
        "keyword": "\u57F9\u517B",
        "added": "r",
        "position": "start"
      },
      {
        "word": "read",
        "meaning": "\u9605\u8BFB",
        "keyword": "\u9605\u8BFB",
        "added": "d",
        "position": "start"
      },
      {
        "word": "real",
        "meaning": "\u771F\u7684",
        "keyword": "\u771F\u7684",
        "added": "l",
        "position": "start"
      },
      {
        "word": "reap",
        "meaning": "\u83B7\u5F97",
        "keyword": "\u83B7\u5F97",
        "added": "p",
        "position": "start"
      },
      {
        "word": "ream",
        "meaning": "\u4E00\u4EE4",
        "keyword": "\u4E00\u4EE4\u7EB8",
        "added": "m",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 365,
    "id": "sig",
    "rime": "SIG",
    "title": "\u89C2\u5149\u5BA2\u770B\u4E0D\u61C2\u6807\u5FD7\u4E0E\u4FE1\u53F7\u706F",
    "story": "\u89C2\u5149\u5BA2\u7684\u89C6\u529B\u867D\u7136\u6CA1\u95EE\u9898\uFF0C\u4F46\u770B\u4E0D\u61C2\u9053\u8DEF\u6807\u5FD7\u548C\u4FE1\u53F7\u706F\uFF0C\u6240\u4EE5\u8FD8\u662F\u5E38\u53D1\u751F\u95EE\u9898\u3002",
    "words": [
      {
        "word": "sightseer",
        "meaning": "\u89C2\u5149\u5BA2",
        "keyword": "\u89C2\u5149\u5BA2",
        "added": "htseer",
        "position": "start"
      },
      {
        "word": "sight",
        "meaning": "\u89C6\u529B",
        "keyword": "\u89C6\u529B",
        "added": "ht",
        "position": "start"
      },
      {
        "word": "signal",
        "meaning": "\u4FE1\u53F7\u706F",
        "keyword": "\u4FE1\u53F7\u706F",
        "added": "nal",
        "position": "start"
      },
      {
        "word": "sign",
        "meaning": "\u6807\u5FD7",
        "keyword": "\u6807\u5FD7",
        "added": "n",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 366,
    "id": "car2",
    "rime": "CAR",
    "title": "\u9CA4\u9C7C\u7528\u7EB8\u724C\u96D5\u523B\u624B\u63A8\u8F66",
    "story": "\u9CA4\u9C7C\u62FF\u7EB8\u724C\uFF0C\u7528\u5FC3\u5730\u96D5\u523B\u4E86\u4E00\u90E8\u624B\u63A8\u8F66\u3002",
    "words": [
      {
        "word": "carp",
        "meaning": "\u9CA4\u9C7C",
        "keyword": "\u9CA4\u9C7C",
        "added": "p",
        "position": "start"
      },
      {
        "word": "card",
        "meaning": "\u7EB8\u724C",
        "keyword": "\u7EB8\u724C",
        "added": "d",
        "position": "start"
      },
      {
        "word": "care",
        "meaning": "\u7528\u5FC3",
        "keyword": "\u7528\u5FC3\u5730",
        "added": "e",
        "position": "start"
      },
      {
        "word": "carve",
        "meaning": "\u96D5\u523B",
        "keyword": "\u96D5\u523B",
        "added": "ve",
        "position": "start"
      },
      {
        "word": "cart",
        "meaning": "\u624B\u63A8\u8F66",
        "keyword": "\u624B\u63A8\u8F66",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 367,
    "id": "jo",
    "rime": "JO",
    "title": "\u5C0F\u4E11\u6447\u809A\u76AE\u5F00\u73A9\u7B11\u5E26\u6765\u559C\u60A6",
    "story": "\u5C0F\u4E11\u7684\u5DE5\u4F5C\u5C31\u662F\u53C2\u52A0\u5BB4\u4F1A\u8868\u6F14\uFF0C\u6447\u52A8\u809A\u76AE\uFF0C\u5F00\u81EA\u5DF1\u7684\u73A9\u7B11\uFF0C\u8BA9\u522B\u4EBA\u559C\u60A6\u3002",
    "words": [
      {
        "word": "job",
        "meaning": "\u5DE5\u4F5C",
        "keyword": "\u5DE5\u4F5C",
        "added": "b",
        "position": "start"
      },
      {
        "word": "join",
        "meaning": "\u53C2\u52A0\u3001\u8054\u7EDC",
        "keyword": "\u53C2\u52A0",
        "added": "in",
        "position": "start"
      },
      {
        "word": "jolt",
        "meaning": "\u6447\u52A8",
        "keyword": "\u6447\u52A8",
        "added": "lt",
        "position": "start"
      },
      {
        "word": "joke",
        "meaning": "\u73A9\u7B11",
        "keyword": "\u73A9\u7B11",
        "added": "ke",
        "position": "start"
      },
      {
        "word": "joy",
        "meaning": "\u559C\u60A6",
        "keyword": "\u559C\u60A6",
        "added": "y",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 368,
    "id": "sw",
    "rime": "SW",
    "title": "\u745E\u5178\u4EBA\u7A7F\u6BDB\u8863\u6253\u626B\u51FA\u9999\u6C57",
    "story": "\u745E\u5178\u4EBA\u53D1\u8A93\u8BF4\uFF1A\u201C\u7A7F\u6BDB\u8863\u6253\u626B\u536B\u751F\uFF0C\u4E00\u5B9A\u4F1A\u5F04\u5F97\u4E00\u8EAB\u9999\u6C57\u3002\u201D",
    "words": [
      {
        "word": "sweden",
        "meaning": "\u745E\u5178",
        "keyword": "\u745E\u5178\u4EBA",
        "added": "eden",
        "position": "start"
      },
      {
        "word": "swear",
        "meaning": "\u53D1\u8A93",
        "keyword": "\u53D1\u8A93",
        "added": "ear",
        "position": "start"
      },
      {
        "word": "sweater",
        "meaning": "\u6BDB\u8863",
        "keyword": "\u6BDB\u8863",
        "added": "eater",
        "position": "start"
      },
      {
        "word": "sweep",
        "meaning": "\u6253\u626B",
        "keyword": "\u6253\u626B\u536B\u751F",
        "added": "eep",
        "position": "start"
      },
      {
        "word": "sweet",
        "meaning": "\u751C\u3001\u82B3\u9999",
        "keyword": "\u9999",
        "added": "eet",
        "position": "start"
      },
      {
        "word": "sweat",
        "meaning": "\u6C57",
        "keyword": "\u6C57",
        "added": "eat",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 369,
    "id": "po",
    "rime": "PO",
    "title": "\u6559\u7687\u5728\u6CE2\u6CB3\u529D\u5403\u7206\u7C73\u82B1",
    "story": "\u6559\u7687\u5728\u610F\u5927\u5229\u6CE2\u6CB3\u5BF9\u4F17\u4EBA\u8BF4\uFF1A\u201C\u5B81\u53EF\u5403\u7206\u7C73\u82B1\uFF0C\u4E5F\u4E0D\u8981\u63A5\u8FD1\u7F42\u7C9F\u7F8E\u4EBA\u513F\u3002\u201D",
    "words": [
      {
        "word": "po",
        "meaning": "\u6CE2\u6CB3",
        "keyword": "\u6CE2\u6CB3",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "pop",
        "meaning": "\u7206\u7C73\u82B1",
        "keyword": "\u7206\u7C73\u82B1",
        "added": "p",
        "position": "start"
      },
      {
        "word": "pope",
        "meaning": "\u6559\u7687",
        "keyword": "\u6559\u7687",
        "added": "pe",
        "position": "start"
      },
      {
        "word": "poppy",
        "meaning": "\u7F42\u7C9F",
        "keyword": "\u7F42\u7C9F",
        "added": "ppy",
        "position": "start"
      },
      {
        "word": "popsy",
        "meaning": "\u7F8E\u4EBA\u513F",
        "keyword": "\u7F8E\u4EBA\u513F",
        "added": "psy",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 370,
    "id": "mas",
    "rime": "MAS",
    "title": "\u5927\u5E08\u6234\u9762\u5177\u7AD9\u6845\u6746\u9001\u5409\u7965\u7269",
    "story": "\u5927\u5E08\u6234\u7740\u9762\u5177\u7AD9\u5728\u6845\u6746\u4E0A\uFF0C\u805A\u96C6\u4E86\u4E00\u7FA4\u4FE1\u5F92\uFF0C\u9001\u7ED9\u4ED6\u4EEC\u5409\u7965\u7269\u3002",
    "words": [
      {
        "word": "master",
        "meaning": "\u5927\u5E08\u3001\u4E3B\u4EBA",
        "keyword": "\u5927\u5E08",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "mask",
        "meaning": "\u9762\u5177",
        "keyword": "\u9762\u5177",
        "added": "k",
        "position": "start"
      },
      {
        "word": "mast",
        "meaning": "\u6845\u6746",
        "keyword": "\u6845\u6746",
        "added": "t",
        "position": "start"
      },
      {
        "word": "mass",
        "meaning": "\u7FA4\u3001\u56E2\u3001\u5757",
        "keyword": "\u4E00\u7FA4",
        "added": "s",
        "position": "start"
      },
      {
        "word": "mascot",
        "meaning": "\u5409\u7965\u7269",
        "keyword": "\u5409\u7965\u7269",
        "added": "cot",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 371,
    "id": "chor",
    "rime": "CHOR",
    "title": "\u4ECE\u6253\u6742\u5347\u4E3A\u5408\u5531\u961F\u5458\u4E0E\u6B4C\u821E\u53F0\u67F1",
    "story": "\u5979\u4ECE\u6253\u6742\u5F00\u59CB\u5E72\u8D77\uFF0C\u5347\u4E3A\u5531\u8D5E\u7F8E\u8BD7\u7684\u5408\u5531\u961F\u5458\uFF0C\u518D\u5347\u4EFB\u6B4C\u821E\u5973\u90CE\u7684\u53F0\u67F1\u3002",
    "words": [
      {
        "word": "chore",
        "meaning": "\u6253\u6742",
        "keyword": "\u6253\u6742",
        "added": "e",
        "position": "start"
      },
      {
        "word": "chorus",
        "meaning": "\u5408\u5531",
        "keyword": "\u5408\u5531",
        "added": "us",
        "position": "start"
      },
      {
        "word": "chorist",
        "meaning": "\u5408\u5531\u961F\u5458",
        "keyword": "\u961F\u5458",
        "added": "ist",
        "position": "start"
      },
      {
        "word": "choral",
        "meaning": "\u8D5E\u7F8E\u8BD7",
        "keyword": "\u8D5E\u7F8E\u8BD7",
        "added": "al",
        "position": "start"
      },
      {
        "word": "chorine",
        "meaning": "\u6B4C\u821E\u5973\u90CE",
        "keyword": "\u6B4C\u821E\u5973\u90CE",
        "added": "ine",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 372,
    "id": "pet",
    "rime": "PET",
    "title": "\u5F7C\u5F97\u6293\u6D77\u71D5\u5F53\u5BA0\u7269",
    "story": "\u5F7C\u5F97\u662F\u4E2A\u65E0\u7528\u7684\u7537\u4EBA\uFF0C\u4E00\u751F\u4E2D\u8FDE\u4E9B\u5FAE\u7684\u94B1\u4E5F\u4E0D\u66FE\u8D5A\u5230\u624B\uFF0C\u53EA\u4F1A\u6293\u6D77\u71D5\u5F53\u5BA0\u7269\u6765\u517B\u3002",
    "words": [
      {
        "word": "peter",
        "meaning": "\u5F7C\u5F97",
        "keyword": "\u5F7C\u5F97",
        "added": "er",
        "position": "start"
      },
      {
        "word": "petit",
        "meaning": "\u65E0\u7528\u7684",
        "keyword": "\u65E0\u7528\u7684",
        "added": "it",
        "position": "start"
      },
      {
        "word": "petty",
        "meaning": "\u4E9B\u5FAE",
        "keyword": "\u4E9B\u5FAE\u7684\u94B1",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "petrel",
        "meaning": "\u6D77\u71D5",
        "keyword": "\u6D77\u71D5",
        "added": "rel",
        "position": "start"
      },
      {
        "word": "pet",
        "meaning": "\u5BA0\u7269",
        "keyword": "\u5BA0\u7269",
        "added": "\xF8",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 373,
    "id": "but",
    "rime": "BUT",
    "title": "\u5C60\u592B\u53CD\u4E32\u8774\u8776\u592B\u4EBA\u6210\u7B11\u67C4",
    "story": "\u5C60\u592B\u53CD\u4E32\u6F14\u8774\u8776\u592B\u4EBA\uFF0C\u4F46\u662F\u7531\u4E8E\u8FC7\u4E8E\u7537\u6027\u5316\uFF0C\u53D8\u6210\u4E86\u7B11\u67C4\u3002",
    "words": [
      {
        "word": "butcher",
        "meaning": "\u5C60\u592B",
        "keyword": "\u5C60\u592B",
        "added": "cher",
        "position": "start"
      },
      {
        "word": "butterfly",
        "meaning": "\u8774\u8776",
        "keyword": "\u8774\u8776\u592B\u4EBA",
        "added": "terfly",
        "position": "start"
      },
      {
        "word": "but",
        "meaning": "\u4F46\u662F",
        "keyword": "\u4F46\u662F",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "butch",
        "meaning": "\u7537\u6027\u5316",
        "keyword": "\u7537\u6027\u5316",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "butt",
        "meaning": "\u7B11\u67C4",
        "keyword": "\u7B11\u67C4",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 374,
    "id": "cl",
    "rime": "CL",
    "title": "\u4FF1\u4E50\u90E8\u6309\u949F\u6253\u5DE5\u626E\u5C0F\u4E11\u505A\u6E05\u6D01",
    "story": "\u4ED6\u5230\u4FF1\u4E50\u90E8\u6309\u949F\u70B9\u6253\u5DE5\uFF0C\u6709\u65F6\u626E\u6F14\u5C0F\u4E11\uFF0C\u6709\u65F6\u5F53\u6E05\u6D01\u5DE5\u3002",
    "words": [
      {
        "word": "club",
        "meaning": "\u4FF1\u4E50\u90E8",
        "keyword": "\u4FF1\u4E50\u90E8",
        "added": "ub",
        "position": "start"
      },
      {
        "word": "clock",
        "meaning": "\u949F",
        "keyword": "\u949F\u70B9",
        "added": "ock",
        "position": "start"
      },
      {
        "word": "clown",
        "meaning": "\u5C0F\u4E11",
        "keyword": "\u5C0F\u4E11",
        "added": "own",
        "position": "start"
      },
      {
        "word": "clean",
        "meaning": "\u6E05\u6D01",
        "keyword": "\u6E05\u6D01\u5DE5",
        "added": "ean",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 375,
    "id": "all2",
    "rime": "ALL",
    "title": "\u7504\u9009\u6240\u6709\u9AD8\u5927\u7403\u5458\u7AD9\u5899\u8FB9",
    "story": "\u7403\u961F\u7504\u9009\u7403\u5458\uFF0C\u8981\u6240\u6709\u9AD8\u5927\u7684\u5E94\u5F81\u8005\u7AD9\u5230\u5927\u5385\u7684\u5899\u8FB9\u3002",
    "words": [
      {
        "word": "all",
        "meaning": "\u6240\u6709\u7684",
        "keyword": "\u6240\u6709",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "ball",
        "meaning": "\u7403",
        "keyword": "\u7403\u961F",
        "added": "b",
        "position": "end"
      },
      {
        "word": "tall",
        "meaning": "\u9AD8\u5927",
        "keyword": "\u9AD8\u5927\u7684",
        "added": "t",
        "position": "end"
      },
      {
        "word": "hall",
        "meaning": "\u5927\u5385",
        "keyword": "\u5927\u5385",
        "added": "h",
        "position": "end"
      },
      {
        "word": "wall",
        "meaning": "\u5899",
        "keyword": "\u5899\u8FB9",
        "added": "w",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 376,
    "id": "crow",
    "rime": "CROW",
    "title": "\u4E4C\u9E26\u5728\u4EBA\u7FA4\u91CC\u53EA\u627E\u5230\u94C1\u9539",
    "story": "\u4E4C\u9E26\u5728\u4EBA\u7FA4\u4E2D\u5BFB\u627E\u5931\u7A83\u7684\u7687\u51A0\uFF0C\u7ED3\u679C\u53EA\u627E\u5230\u4E00\u628A\u94C1\u9539\u3002",
    "words": [
      {
        "word": "crow",
        "meaning": "\u4E4C\u9E26",
        "keyword": "\u4E4C\u9E26",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "crowd",
        "meaning": "\u4EBA\u7FA4",
        "keyword": "\u4EBA\u7FA4",
        "added": "d",
        "position": "start"
      },
      {
        "word": "crown",
        "meaning": "\u7687\u51A0",
        "keyword": "\u7687\u51A0",
        "added": "n",
        "position": "start"
      },
      {
        "word": "crowbar",
        "meaning": "\u94C1\u9539",
        "keyword": "\u94C1\u9539",
        "added": "bar",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 377,
    "id": "ease",
    "rime": "EASE",
    "title": "\u796D\u5E08\u7948\u6C42\u505C\u6B62\u75BE\u75C5\u51CF\u5C11\u6B7B\u4EA1",
    "story": "\u796D\u5E08\u5411\u795E\u7948\u6C42\u8BF4\uFF1A\u201C\u8BF7\u505C\u6B62\u75BE\u75C5\uFF0C\u51CF\u5C11\u6B7B\u4EA1\u3002\u201D",
    "words": [
      {
        "word": "please",
        "meaning": "\u8BF7",
        "keyword": "\u8BF7",
        "added": "pl",
        "position": "end"
      },
      {
        "word": "cease",
        "meaning": "\u505C\u6B62",
        "keyword": "\u505C\u6B62",
        "added": "c",
        "position": "end"
      },
      {
        "word": "disease",
        "meaning": "\u75BE\u75C5",
        "keyword": "\u75BE\u75C5",
        "added": "dis",
        "position": "end"
      },
      {
        "word": "decrease",
        "meaning": "\u51CF\u5C11",
        "keyword": "\u51CF\u5C11",
        "added": "decr",
        "position": "end"
      },
      {
        "word": "decease",
        "meaning": "\u6B7B\u4EA1",
        "keyword": "\u6B7B\u4EA1",
        "added": "dec",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 378,
    "id": "ero",
    "rime": "ERO",
    "title": "\u5C3C\u6D1B\u4ECE\u98DE\u884C\u82F1\u96C4\u964D\u4E3A\u96F6",
    "story": "\u7F57\u9A6C\u66B4\u541B\u5C3C\u6D1B\u80FD\u6587\u80FD\u6B66\uFF0C\u539F\u672C\u50CF\u5929\u4E0A\u98DE\u884C\u7684\u82F1\u96C4\uFF0C\u4F46\u7531\u4E8E\u4ED6\u50CF\u75AF\u4E86\u4E00\u6837\u706B\u70E7\u7F57\u9A6C\uFF0C\u58F0\u671B\u4ECE\u82F1\u96C4\u964D\u81F3\u96F6\u3002",
    "words": [
      {
        "word": "nero",
        "meaning": "\u5C3C\u6D1B",
        "keyword": "\u5C3C\u6D1B",
        "added": "n",
        "position": "end"
      },
      {
        "word": "aero",
        "meaning": "\u98DE\u673A\u7684\u3001\u98DE\u884C\u7684",
        "keyword": "\u98DE\u884C",
        "added": "a",
        "position": "end"
      },
      {
        "word": "hero",
        "meaning": "\u82F1\u96C4",
        "keyword": "\u82F1\u96C4",
        "added": "h",
        "position": "end"
      },
      {
        "word": "zero",
        "meaning": "\u96F6",
        "keyword": "\u96F6",
        "added": "z",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 379,
    "id": "ai",
    "rime": "AI",
    "title": "\u5148\u627E\u5230\u81EA\u5DF1\u518D\u7784\u51C6\u5929\u7A7A",
    "story": "\u4EBA\u8981\u5E2E\u52A9\u81EA\u5DF1\u8FDC\u79BB\u82E6\u607C\uFF0C\u9996\u5148\u5F97\u5148\u627E\u5230\u81EA\u5DF1\uFF0C\u7136\u540E\u518D\u7784\u51C6\u81EA\u5DF1\u7684\u5929\u7A7A\u3002",
    "words": [
      {
        "word": "aid",
        "meaning": "\u5E2E\u52A9",
        "keyword": "\u5E2E\u52A9",
        "added": "d",
        "position": "start"
      },
      {
        "word": "ail",
        "meaning": "\u4F7F\u82E6\u607C",
        "keyword": "\u82E6\u607C",
        "added": "l",
        "position": "start"
      },
      {
        "word": "aim",
        "meaning": "\u7784\u51C6",
        "keyword": "\u7784\u51C6",
        "added": "m",
        "position": "start"
      },
      {
        "word": "ain",
        "meaning": "\u81EA\u5DF1\u7684",
        "keyword": "\u81EA\u5DF1",
        "added": "n",
        "position": "start"
      },
      {
        "word": "air",
        "meaning": "\u5929\u7A7A\u3001\u7A7A\u6C14",
        "keyword": "\u5929\u7A7A",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 380,
    "id": "sive",
    "rime": "SIVE",
    "title": "\u6E7F\u5A46\u6C89\u601D\u609F\u51FA\u5962\u4F88\u4E0E\u6D88\u6781",
    "story": "\u6C89\u601D\u7684\u6E7F\u5A46\u795E\u51A5\u60F3\u540E\u8BF4\uFF1A\u201C\u6211\u609F\u51FA\u4E86\u5962\u4F88\u548C\u6D88\u6781\u7684\u771F\u8C1B\u4E86\u3002\u201D",
    "words": [
      {
        "word": "pensive",
        "meaning": "\u54C0\u6101\u7684\u3001\u6C89\u601D\u7684",
        "keyword": "\u6C89\u601D",
        "added": "pen",
        "position": "end"
      },
      {
        "word": "expensive",
        "meaning": "\u5962\u4F88",
        "keyword": "\u5962\u4F88",
        "added": "expen",
        "position": "end"
      },
      {
        "word": "passive",
        "meaning": "\u6D88\u6781",
        "keyword": "\u6D88\u6781",
        "added": "pas",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 381,
    "id": "pu2",
    "rime": "PU",
    "title": "\u9152\u5427\u731C\u95E8\u63A8\u62C9\u8D62\u6CE1\u8299",
    "story": "\u9152\u5427\u7684\u5E97\u957F\u7231\u8BB2\u4FCF\u76AE\u8BDD\uFF0C\u4ED6\u8BF4\uFF1A\u201C\u522B\u56DE\u5934\uFF0C\u8C01\u80FD\u731C\u4E2D\u672C\u5E97\u7684\u5927\u95E8\u662F\u63A8\u7684\uFF0C\u8FD8\u662F\u62C9\u7684\uFF0C\u8C01\u5C31\u80FD\u514D\u8D39\u5403\u6CE1\u8299\u3002\u201D",
    "words": [
      {
        "word": "pub",
        "meaning": "\u9152\u5427",
        "keyword": "\u9152\u5427",
        "added": "b",
        "position": "start"
      },
      {
        "word": "pun",
        "meaning": "\u4FCF\u76AE\u8BDD",
        "keyword": "\u4FCF\u76AE\u8BDD",
        "added": "n",
        "position": "start"
      },
      {
        "word": "push",
        "meaning": "\u63A8",
        "keyword": "\u63A8",
        "added": "sh",
        "position": "start"
      },
      {
        "word": "pull",
        "meaning": "\u62C9",
        "keyword": "\u62C9",
        "added": "ll",
        "position": "start"
      },
      {
        "word": "puff",
        "meaning": "\u6CE1\u8299",
        "keyword": "\u6CE1\u8299",
        "added": "ff",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 382,
    "id": "rea2",
    "rime": "REA",
    "title": "\u91CC\u6839\u9886\u609F\u505A\u56FD\u5BB6\u57F9\u80B2\u8005",
    "story": "\u91CC\u6839\u9886\u609F\u5230\uFF0C\u505A\u4E00\u4E2A\u56FD\u5BB6\u680B\u6881\u7684\u57F9\u80B2\u8005\uFF0C\u786E\u5B9E\u6BD4\u505A\u4E00\u4E2A\u623F\u5730\u4EA7\u7ECF\u7EAA\u4EBA\u6709\u610F\u4E49\u3002",
    "words": [
      {
        "word": "reagan",
        "meaning": "\u91CC\u6839",
        "keyword": "\u91CC\u6839",
        "added": "gan",
        "position": "start"
      },
      {
        "word": "realize",
        "meaning": "\u9886\u609F",
        "keyword": "\u9886\u609F",
        "added": "lize",
        "position": "start"
      },
      {
        "word": "really",
        "meaning": "\u786E\u5B9E",
        "keyword": "\u786E\u5B9E",
        "added": "lly",
        "position": "start"
      },
      {
        "word": "realtor",
        "meaning": "\u623F\u5730\u4EA7\u7ECF\u7EAA",
        "keyword": "\u623F\u5730\u4EA7\u7ECF\u7EAA\u4EBA",
        "added": "ltor",
        "position": "start"
      },
      {
        "word": "rearer",
        "meaning": "\u57F9\u80B2\u8005",
        "keyword": "\u57F9\u80B2\u8005",
        "added": "rer",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 383,
    "id": "yak",
    "rime": "YAK",
    "title": "\u96C5\u5E93\u7279\u4EBA\u4E0D\u6740\u7266\u725B\u53EA\u5403\u70E4\u9E21\u4E32",
    "story": "\u524D\u82CF\u8054\u5883\u5185\u7684\u96C5\u5E93\u7279\u4EBA\u539F\u672C\u662F\u7A81\u53A5\u6C11\u65CF\uFF0C\u4ED6\u4EEC\u4E0D\u6740\u7266\u725B\u548C\u626D\u89D2\u7F9A\u7F8A\uFF0C\u800C\u72EC\u559C\u6B22\u70E4\u9E21\u8089\u4E32\u4E0B\u9152\u5403\u3002",
    "words": [
      {
        "word": "yakut",
        "meaning": "\u96C5\u5E93\u7279\u4EBA",
        "keyword": "\u96C5\u5E93\u7279\u4EBA",
        "added": "ut",
        "position": "start"
      },
      {
        "word": "yak",
        "meaning": "\u7266\u725B",
        "keyword": "\u7266\u725B",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "yakin",
        "meaning": "\u626D\u89D2\u7F9A\u7F8A",
        "keyword": "\u626D\u89D2\u7F9A\u7F8A",
        "added": "in",
        "position": "start"
      },
      {
        "word": "yakitori",
        "meaning": "\u70E4\u9E21\u8089\u4E32",
        "keyword": "\u70E4\u9E21\u8089\u4E32",
        "added": "itori",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 384,
    "id": "des",
    "rime": "DES",
    "title": "\u7279\u522B\u8BBE\u8BA1\u684C\u5B50\u5E2E\u52A9\u65AD\u5FF5\u6D88\u6B32",
    "story": "\u4FEE\u884C\u8005\u501F\u7740\u7279\u522B\u8BBE\u8BA1\u7684\u684C\u5B50\uFF0C\u4FEE\u884C\u65AD\u5FF5\u548C\u6D88\u9664\u6B32\u671B\u3002",
    "words": [
      {
        "word": "desk",
        "meaning": "\u684C\u5B50",
        "keyword": "\u684C\u5B50",
        "added": "k",
        "position": "start"
      },
      {
        "word": "design",
        "meaning": "\u8BBE\u8BA1",
        "keyword": "\u8BBE\u8BA1",
        "added": "ign",
        "position": "start"
      },
      {
        "word": "desist",
        "meaning": "\u65AD\u5FF5",
        "keyword": "\u65AD\u5FF5",
        "added": "ist",
        "position": "start"
      },
      {
        "word": "desire",
        "meaning": "\u6B32\u671B",
        "keyword": "\u6B32\u671B",
        "added": "ire",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 385,
    "id": "gree",
    "rime": "GREE",
    "title": "\u5E0C\u814A\u795D\u4F60\u7EFF\u6CB9\u6CB9\u4E00\u5E74",
    "story": "\u5E0C\u814A\u5C11\u7EFF\u6811\u591A\u5CA9\u77F3\uFF0C\u56E0\u6B64\u4EBA\u4EEC\u6253\u62DB\u547C\u7684\u795D\u8D3A\u8BCD\u90FD\u4F1A\u6E34\u671B\u5730\u8BF4\uFF1A\u201C\u795D\u4F60\u6709\u7EFF\u6CB9\u6CB9\u7684\u4E00\u5E74\u3002\u201D",
    "words": [
      {
        "word": "greece",
        "meaning": "\u5E0C\u814A",
        "keyword": "\u5E0C\u814A",
        "added": "ce",
        "position": "start"
      },
      {
        "word": "green",
        "meaning": "\u7EFF",
        "keyword": "\u7EFF\u6CB9\u6CB9",
        "added": "n",
        "position": "start"
      },
      {
        "word": "greet",
        "meaning": "\u6253\u62DB\u547C",
        "keyword": "\u6253\u62DB\u547C",
        "added": "t",
        "position": "start"
      },
      {
        "word": "greeting",
        "meaning": "\u8D3A\u8BCD",
        "keyword": "\u795D\u8D3A\u8BCD",
        "added": "ting",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 386,
    "id": "rac",
    "rime": "RAC",
    "title": "\u6D63\u718A\u62FF\u7403\u62CD\u7ADE\u8D5B\u5F88\u6709\u67B6\u52BF",
    "story": "\u6D63\u718A\u662F\u5730\u9053\u7684\u7F51\u7403\u597D\u624B\uFF0C\u5B83\u62FF\u8D77\u7403\u62CD\u7ADE\u8D5B\u65F6\u975E\u5E38\u6709\u67B6\u52BF\u3002",
    "words": [
      {
        "word": "raccoon",
        "meaning": "\u6D63\u718A",
        "keyword": "\u6D63\u718A",
        "added": "coon",
        "position": "start"
      },
      {
        "word": "racy",
        "meaning": "\u5730\u9053",
        "keyword": "\u5730\u9053",
        "added": "y",
        "position": "start"
      },
      {
        "word": "racket",
        "meaning": "\u7403\u62CD",
        "keyword": "\u7403\u62CD",
        "added": "ket",
        "position": "start"
      },
      {
        "word": "race",
        "meaning": "\u7ADE\u8D5B",
        "keyword": "\u7ADE\u8D5B",
        "added": "e",
        "position": "start"
      },
      {
        "word": "rack",
        "meaning": "\u67B6\u5B50\u3001\u6302\u7269\u67B6",
        "keyword": "\u67B6\u52BF",
        "added": "k",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 387,
    "id": "tra",
    "rime": "TRA",
    "title": "\u77FF\u8F66\u8FD0\u706B\u5C71\u5CA9\u706B\u8F66\u8FD0\u8D38\u6613\u6258\u76D8",
    "story": "\u77FF\u8F66\u548C\u706B\u8F66\u4E0D\u540C\u7684\u5730\u65B9\u662F\uFF1A\u77FF\u8F66\u8FD0\u8F93\u7684\u662F\u706B\u5C71\u5CA9\uFF0C\u706B\u8F66\u8FD0\u7684\u662F\u505A\u8D38\u6613\u7684\u6258\u76D8\u3002",
    "words": [
      {
        "word": "tram",
        "meaning": "\u77FF\u8F66",
        "keyword": "\u77FF\u8F66",
        "added": "m",
        "position": "start"
      },
      {
        "word": "train",
        "meaning": "\u706B\u8F66",
        "keyword": "\u706B\u8F66",
        "added": "in",
        "position": "start"
      },
      {
        "word": "transport",
        "meaning": "\u8FD0\u8F93",
        "keyword": "\u8FD0\u8F93",
        "added": "nsport",
        "position": "start"
      },
      {
        "word": "trap",
        "meaning": "\u706B\u5C71\u5CA9",
        "keyword": "\u706B\u5C71\u5CA9",
        "added": "p",
        "position": "start"
      },
      {
        "word": "trade",
        "meaning": "\u8D38\u6613",
        "keyword": "\u8D38\u6613",
        "added": "de",
        "position": "start"
      },
      {
        "word": "tray",
        "meaning": "\u6258\u76D8",
        "keyword": "\u6258\u76D8",
        "added": "y",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 388,
    "id": "boa",
    "rime": "BOA",
    "title": "\u5BC4\u5BBF\u751F\u5212\u8239\u5439\u5618\u6293\u87D2\u86C7\u91CE\u732A",
    "story": "\u5BC4\u5BBF\u751F\u5212\u7740\u5C0F\u8239\uFF0C\u770B\u7740\u544A\u793A\u724C\u5439\u5618\u8BF4\uFF1A\u201C\u82E5\u662F\u9047\u5230\u87D2\u86C7\u3001\u91CE\u732A\uFF0C\u6293\u6765\u70E4\u8089\u4E5F\u4E0D\u9519\u3002\u201D",
    "words": [
      {
        "word": "boarder",
        "meaning": "\u5BC4\u5BBF\u751F",
        "keyword": "\u5BC4\u5BBF\u751F",
        "added": "rder",
        "position": "start"
      },
      {
        "word": "board",
        "meaning": "\u544A\u793A\u724C",
        "keyword": "\u544A\u793A\u724C",
        "added": "rd",
        "position": "start"
      },
      {
        "word": "boat",
        "meaning": "\u5C0F\u8239",
        "keyword": "\u5C0F\u8239",
        "added": "t",
        "position": "start"
      },
      {
        "word": "boast",
        "meaning": "\u5439\u5618",
        "keyword": "\u5439\u5618",
        "added": "st",
        "position": "start"
      },
      {
        "word": "boa",
        "meaning": "\u87D2\u86C7",
        "keyword": "\u87D2\u86C7",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "boar",
        "meaning": "\u91CE\u732A",
        "keyword": "\u91CE\u732A",
        "added": "r",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 389,
    "id": "noo",
    "rime": "NOO",
    "title": "\u725B\u4ED4\u4E2D\u5348\u5728\u89D2\u843D\u5403\u9762\u7EC3\u5957\u7D22",
    "story": "\u5728\u725B\u4ED4\u7684\u5168\u76DB\u65F6\u671F\uFF0C\u6BCF\u5929\u4E2D\u5348\uFF0C\u4ED6\u4EEC\u90FD\u5750\u5728\u9A6C\u680F\u7684\u89D2\u843D\uFF0C\u8FB9\u5403\u9762\u6761\u8FB9\u7EC3\u5957\u7D22\u3002",
    "words": [
      {
        "word": "noontime",
        "meaning": "\u5168\u76DB\u65F6\u671F",
        "keyword": "\u5168\u76DB\u65F6\u671F",
        "added": "ntime",
        "position": "start"
      },
      {
        "word": "noon",
        "meaning": "\u4E2D\u5348",
        "keyword": "\u4E2D\u5348",
        "added": "n",
        "position": "start"
      },
      {
        "word": "nook",
        "meaning": "\u89D2\u843D",
        "keyword": "\u89D2\u843D",
        "added": "k",
        "position": "start"
      },
      {
        "word": "noodle",
        "meaning": "\u9762\u6761",
        "keyword": "\u9762\u6761",
        "added": "dle",
        "position": "start"
      },
      {
        "word": "noose",
        "meaning": "\u5957\u7D22",
        "keyword": "\u5957\u7D22",
        "added": "se",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 390,
    "id": "loa",
    "rime": "LOA",
    "title": "\u58E4\u571F\u501F\u7ED9\u6CE5\u9CC5\u53EA\u6536\u9762\u5305\u68D2",
    "story": "\u58E4\u571F\u51FA\u79DF\uFF0C\u5982\u679C\u501F\u7ED9\u6CE5\u9CC5\uFF0C\u5219\u53EA\u8981\u4ED8\u4E00\u6761\u9762\u5305\u68D2\u505A\u6708\u79DF\u3002",
    "words": [
      {
        "word": "loam",
        "meaning": "\u58E4\u571F",
        "keyword": "\u58E4\u571F",
        "added": "m",
        "position": "start"
      },
      {
        "word": "loan",
        "meaning": "\u501F\u7ED9",
        "keyword": "\u501F\u7ED9",
        "added": "n",
        "position": "start"
      },
      {
        "word": "loach",
        "meaning": "\u6CE5\u9CC5",
        "keyword": "\u6CE5\u9CC5",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "loaf",
        "meaning": "\u9762\u5305\u68D2",
        "keyword": "\u9762\u5305\u68D2",
        "added": "f",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 391,
    "id": "plea",
    "rime": "PLEA",
    "title": "\u72AF\u4EBA\u6073\u6C42\u8FA9\u62A4\u89E3\u5F00\u7F6A\u8BC1\u7F16\u7ED3",
    "story": "\u72AF\u4EBA\u6073\u6C42\u8BF4\uFF1A\u201C\u8BF7\u66FF\u6211\u8FA9\u62A4\uFF0C\u53EA\u8981\u89E3\u5F00\u7F6A\u8BC1\u7684\u6253\u8936\u3001\u7F16\u7ED3\u4E4B\u5904\uFF0C\u5FC5\u7136\u6709\u6109\u5FEB\u7684\u7ED3\u679C\u3002\u201D",
    "words": [
      {
        "word": "plea",
        "meaning": "\u6073\u6C42",
        "keyword": "\u6073\u6C42",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "plead",
        "meaning": "\u8FA9\u62A4\u3001\u7B54\u8FA9",
        "keyword": "\u8FA9\u62A4",
        "added": "d",
        "position": "start"
      },
      {
        "word": "please",
        "meaning": "\u8BF7",
        "keyword": "\u8BF7",
        "added": "se",
        "position": "start"
      },
      {
        "word": "pleat",
        "meaning": "\u6253\u8936",
        "keyword": "\u6253\u8936",
        "added": "t",
        "position": "start"
      },
      {
        "word": "pleach",
        "meaning": "\u7F16\u7ED3",
        "keyword": "\u7F16\u7ED3",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "pleasure",
        "meaning": "\u6109\u5FEB",
        "keyword": "\u6109\u5FEB",
        "added": "sure",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 392,
    "id": "mut",
    "rime": "MUT",
    "title": "\u7B28\u86CB\u75C5\u7F8A\u8089\u5F15\u53D1\u7A81\u53D8\u4E0E\u62B1\u6028",
    "story": "\u4ED6\u62B1\u6028\u8BF4\uFF1A\u201C\u8FD9\u7B28\u86CB\u7ED9\u6211\u5403\u7A81\u53D8\u5F02\u79CD\u7684\u75C5\u7F8A\u8089\uFF0C\u83AB\u975E\u60F3\u5BB3\u6211\u5F97\u72C2\u725B\u75C7\u53D8\u54D1\u5DF4\u4E0D\u6210\uFF1F\u201D",
    "words": [
      {
        "word": "mut",
        "meaning": "\u6742\u79CD\u72D7\u3001\u7B28\u86CB",
        "keyword": "\u7B28\u86CB",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "mutter",
        "meaning": "\u62B1\u6028\u3001\u561F\u56D4",
        "keyword": "\u62B1\u6028",
        "added": "ter",
        "position": "start"
      },
      {
        "word": "mutant",
        "meaning": "\u7A81\u53D8\u5F02\u79CD",
        "keyword": "\u5F02\u79CD",
        "added": "ant",
        "position": "start"
      },
      {
        "word": "mutton",
        "meaning": "\u7F8A\u8089",
        "keyword": "\u7F8A\u8089",
        "added": "ton",
        "position": "start"
      },
      {
        "word": "mute",
        "meaning": "\u54D1\u3001\u54D1\u5DF4",
        "keyword": "\u54D1\u5DF4",
        "added": "e",
        "position": "start"
      },
      {
        "word": "mutation",
        "meaning": "\u53D8\u5316",
        "keyword": "\u7A81\u53D8",
        "added": "ation",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 393,
    "id": "ain3",
    "rime": "AIN",
    "title": "\u8BE5\u9690\u56E0\u81EA\u8D1F\u5F97\u5230\u96E8\u822C\u75DB\u82E6",
    "story": "\u8006\u90A3\u6559\u5F92\u8BF4\uFF1A\u201C\u8BE5\u9690\u7531\u4E8E\u81EA\u5DF1\u7684\u81EA\u8D1F\uFF0C\u800C\u5F97\u5230\u5982\u96E8\u822C\u7684\u75DB\u82E6\u3002\u201D",
    "words": [
      {
        "word": "ain",
        "meaning": "\u81EA\u5DF1\u7684",
        "keyword": "\u81EA\u5DF1\u7684",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "cain",
        "meaning": "\u8BE5\u9690\uFF08\u4E9A\u5F53\u7684\u957F\u5B50\uFF09",
        "keyword": "\u8BE5\u9690",
        "added": "c",
        "position": "end"
      },
      {
        "word": "vain",
        "meaning": "\u81EA\u8D1F",
        "keyword": "\u81EA\u8D1F",
        "added": "v",
        "position": "end"
      },
      {
        "word": "gain",
        "meaning": "\u5F97\u5230",
        "keyword": "\u5F97\u5230",
        "added": "g",
        "position": "end"
      },
      {
        "word": "rain",
        "meaning": "\u96E8",
        "keyword": "\u96E8\u822C",
        "added": "r",
        "position": "end"
      },
      {
        "word": "pain",
        "meaning": "\u75DB\u82E6",
        "keyword": "\u75DB\u82E6",
        "added": "p",
        "position": "end"
      },
      {
        "word": "jain",
        "meaning": "\u8006\u90A3\u6559\u5F92",
        "keyword": "\u8006\u90A3\u6559\u5F92",
        "added": "j",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 394,
    "id": "pon",
    "rime": "PON",
    "title": "\u5E84\u5BB6\u9A91\u77EE\u9A6C\u5728\u81ED\u6C60\u5858\u601D\u91CF\u6865\u724C",
    "story": "\u6253\u6865\u724C\u65F6\uFF0C\u5E84\u5BB6\u9A91\u7740\u77EE\u79CD\u9A6C\u5230\u53D1\u81ED\u7684\u6C60\u5858\u8FB9\uFF0C\u601D\u91CF\u4E0B\u4E00\u5F20\u724C\u8981\u600E\u4E48\u6253\u3002",
    "words": [
      {
        "word": "pone",
        "meaning": "\u5E84\u5BB6",
        "keyword": "\u5E84\u5BB6",
        "added": "e",
        "position": "start"
      },
      {
        "word": "pony",
        "meaning": "\u77EE\u79CD\u9A6C",
        "keyword": "\u77EE\u79CD\u9A6C",
        "added": "y",
        "position": "start"
      },
      {
        "word": "pong",
        "meaning": "\u53D1\u81ED",
        "keyword": "\u53D1\u81ED",
        "added": "g",
        "position": "start"
      },
      {
        "word": "pond",
        "meaning": "\u6C60\u5858",
        "keyword": "\u6C60\u5858\u8FB9",
        "added": "d",
        "position": "start"
      },
      {
        "word": "ponder",
        "meaning": "\u601D\u91CF",
        "keyword": "\u601D\u91CF",
        "added": "der",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 395,
    "id": "fi2",
    "rime": "FI",
    "title": "\u65E0\u82B1\u679C\u907F\u51B7\u6749\u5374\u914D\u9C7C\u7FC5",
    "story": "\u957F\u8001\u5F00\u793A\u8BF4\uFF1A\u201C\u7262\u8BB0\u914D\u5408\u7684\u771F\u7406\uFF0C\u65E0\u82B1\u679C\u4E0D\u8981\u548C\u51B7\u6749\u79CD\u5728\u540C\u4E00\u533A\uFF0C\u65E0\u82B1\u679C\u53EF\u4E0E\u9C7C\u7FC5\u714E\u5728\u4E00\u8D77\u3002\u201D",
    "words": [
      {
        "word": "fix",
        "meaning": "\u7262\u8BB0\u3001\u56FA\u5B9A",
        "keyword": "\u7262\u8BB0",
        "added": "x",
        "position": "start"
      },
      {
        "word": "fit",
        "meaning": "\u914D\u5408",
        "keyword": "\u914D\u5408",
        "added": "t",
        "position": "start"
      },
      {
        "word": "fig",
        "meaning": "\u65E0\u82B1\u679C",
        "keyword": "\u65E0\u82B1\u679C",
        "added": "g",
        "position": "start"
      },
      {
        "word": "fir",
        "meaning": "\u51B7\u6749",
        "keyword": "\u51B7\u6749",
        "added": "r",
        "position": "start"
      },
      {
        "word": "fin",
        "meaning": "\u9C7C\u7FC5",
        "keyword": "\u9C7C\u7FC5",
        "added": "n",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 396,
    "id": "iver",
    "rime": "IVER",
    "title": "\u6CB3\u6D41\u8BF4\u5783\u573E\u4EE4\u6211\u53D1\u6296\u5E9F\u6599\u4EE4\u6211\u6218\u6817",
    "story": "\u6CB3\u6D41\u8BF4\uFF1A\u201C\u6211\u662F\u81EA\u7136\u7684\u809D\u810F\uFF0C\u5783\u573E\u4EE4\u6211\u53D1\u6296\uFF0C\u5316\u5B66\u5E9F\u6599\u4EE4\u6211\u6218\u6817\u3002\u201D",
    "words": [
      {
        "word": "river",
        "meaning": "\u6CB3",
        "keyword": "\u6CB3\u6D41",
        "added": "r",
        "position": "end"
      },
      {
        "word": "liver",
        "meaning": "\u809D",
        "keyword": "\u809D\u810F",
        "added": "l",
        "position": "end"
      },
      {
        "word": "shiver",
        "meaning": "\u53D1\u6296",
        "keyword": "\u53D1\u6296",
        "added": "sh",
        "position": "end"
      },
      {
        "word": "quiver",
        "meaning": "\u6218\u6817",
        "keyword": "\u6218\u6817",
        "added": "qu",
        "position": "end"
      }
    ]
  },
  {
    "sourcePage": 397,
    "id": "til",
    "rime": "TIL",
    "title": "\u79CD\u80E1\u9EBB\u519C\u592B\u6539\u884C\u94FA\u6B6A\u74F7\u7816",
    "story": "\u539F\u672C\u662F\u4E2A\u8015\u79CD\u80E1\u9EBB\u7684\u519C\u592B\uFF0C\u6539\u884C\u505A\u94FA\u7816\u5DE5\u4EBA\uFF0C\u5F53\u7136\u628A\u74F7\u7816\u94FA\u5F97\u503E\u659C\uFF0C\u529F\u592B\u4E0D\u5230\u5BB6\u3002",
    "words": [
      {
        "word": "til",
        "meaning": "\u80E1\u9EBB",
        "keyword": "\u80E1\u9EBB",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "till",
        "meaning": "\u8015\u79CD",
        "keyword": "\u8015\u79CD",
        "added": "l",
        "position": "start"
      },
      {
        "word": "tile",
        "meaning": "\u74F7\u7816\u3001\u74E6",
        "keyword": "\u74F7\u7816",
        "added": "e",
        "position": "start"
      },
      {
        "word": "tiler",
        "meaning": "\u94FA\u7816\u5DE5\u4EBA",
        "keyword": "\u94FA\u7816\u5DE5\u4EBA",
        "added": "er",
        "position": "start"
      },
      {
        "word": "tilt",
        "meaning": "\u503E\u659C",
        "keyword": "\u503E\u659C",
        "added": "t",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 398,
    "id": "spit",
    "rime": "SPIT",
    "title": "\u7ED2\u6BDB\u72D7\u6076\u610F\u5410\u553E\u6CAB\u53CD\u55B7\u81EA\u5DF1",
    "story": "\u7ED2\u6BDB\u72D7\u770B\u5230\u4E00\u4E2A\u75F0\u76C2\uFF0C\u5B83\u6076\u610F\u5730\u5410\u4E86\u4E00\u53E3\u553E\u6CAB\uFF0C\u7ED3\u679C\u5410\u5230\u81EA\u5DF1\u7684\u8138\u4E0A\u3002",
    "words": [
      {
        "word": "spit",
        "meaning": "\u5410",
        "keyword": "\u5410",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "spitz",
        "meaning": "\u7ED2\u6BDB\u72D7",
        "keyword": "\u7ED2\u6BDB\u72D7",
        "added": "z",
        "position": "start"
      },
      {
        "word": "spittoon",
        "meaning": "\u75F0\u76C2",
        "keyword": "\u75F0\u76C2",
        "added": "toon",
        "position": "start"
      },
      {
        "word": "spite",
        "meaning": "\u6076\u610F",
        "keyword": "\u6076\u610F\u5730",
        "added": "e",
        "position": "start"
      },
      {
        "word": "spittle",
        "meaning": "\u553E\u6CAB",
        "keyword": "\u553E\u6CAB",
        "added": "tle",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 399,
    "id": "bit",
    "rime": "BIT",
    "title": "\u6BCD\u72D7\u54AC\u7F06\u67F1\u5C1D\u5230\u7247\u65AD\u82E6\u5934",
    "story": "\u6BCD\u72D7\u7528\u5B83\u9510\u5229\u7684\u7259\u53BB\u54AC\u7F06\u67F1\uFF0C\u800C\u5C1D\u5230\u5C11\u91CF\u7247\u65AD\u7684\u82E6\u5934\u3002",
    "words": [
      {
        "word": "bit",
        "meaning": "\u6BD4\u7279\u3001\u5C11\u91CF",
        "keyword": "\u5C11\u91CF",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "bitch",
        "meaning": "\u6BCD\u72D7",
        "keyword": "\u6BCD\u72D7",
        "added": "ch",
        "position": "start"
      },
      {
        "word": "biting",
        "meaning": "\u9510\u5229\u7684",
        "keyword": "\u9510\u5229\u7684\u7259",
        "added": "ing",
        "position": "start"
      },
      {
        "word": "bite",
        "meaning": "\u54AC",
        "keyword": "\u54AC",
        "added": "e",
        "position": "start"
      },
      {
        "word": "bitt",
        "meaning": "\u7F06\u67F1",
        "keyword": "\u7F06\u67F1",
        "added": "t",
        "position": "start"
      },
      {
        "word": "bitty",
        "meaning": "\u7247\u65AD\u7684",
        "keyword": "\u7247\u65AD",
        "added": "ty",
        "position": "start"
      },
      {
        "word": "bitter",
        "meaning": "\u82E6\u7684",
        "keyword": "\u82E6\u5934",
        "added": "ter",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 400,
    "id": "war",
    "rime": "WAR",
    "title": "\u5B88\u536B\u8B66\u544A\u522B\u6B6A\u66F2\u95EE\u9898\u514D\u6218\u4E89",
    "story": "\u5B88\u536B\u8B66\u544A\u8BF4\uFF1A\u201C\u8981\u5C0F\u5FC3\u800C\u4E0D\u8981\u6B6A\u66F2\u56FD\u4E0E\u56FD\u4E4B\u95F4\u7684\u95EE\u9898\uFF0C\u4EE5\u514D\u53D1\u751F\u6218\u4E89\u3002\u201D",
    "words": [
      {
        "word": "war",
        "meaning": "\u6218\u4E89",
        "keyword": "\u6218\u4E89",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "ward",
        "meaning": "\u5B88\u536B",
        "keyword": "\u5B88\u536B",
        "added": "d",
        "position": "start"
      },
      {
        "word": "warn",
        "meaning": "\u8B66\u544A",
        "keyword": "\u8B66\u544A",
        "added": "n",
        "position": "start"
      },
      {
        "word": "wary",
        "meaning": "\u5C0F\u5FC3\u7684",
        "keyword": "\u5C0F\u5FC3",
        "added": "y",
        "position": "start"
      },
      {
        "word": "warp",
        "meaning": "\u6B6A\u66F2",
        "keyword": "\u6B6A\u66F2",
        "added": "p",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 401,
    "id": "gene",
    "rime": "GENE",
    "title": "\u57FA\u56E0\u79D1\u5B66\u5BB6\u6539\u7814\u7A76\u675C\u677E\u5B50\u9152\u8D77\u6E90",
    "story": "\u65E5\u5185\u74E6\u7684\u7269\u79CD\u57FA\u56E0\u79D1\u5B66\u5BB6\u56E0\u7814\u7A76\u9E9D\u732B\u7684\u9057\u4F20\u56E0\u5B50\u800C\u5403\u8DB3\u4E86\u82E6\u5934\uFF0C\u540E\u6765\u4E3A\u4E86\u5B89\u5168\u8D77\u89C1\uFF0C\u6539\u4E3A\u7814\u7A76\u675C\u677E\u5B50\u9152\u7684\u8D77\u6E90\u3002",
    "words": [
      {
        "word": "gene",
        "meaning": "\u57FA\u56E0\u3001\u9057\u4F20\u56E0\u5B50",
        "keyword": "\u57FA\u56E0",
        "added": "\xF8",
        "position": "start"
      },
      {
        "word": "geneva",
        "meaning": "\u65E5\u5185\u74E6\u3001\u675C\u677E\u5B50\u9152",
        "keyword": "\u65E5\u5185\u74E6",
        "added": "va",
        "position": "start"
      },
      {
        "word": "genera",
        "meaning": "\u79CD\u7C7B\u3001\u5C5E\uFF08GENUS\u7684\u590D\u6570\uFF09",
        "keyword": "\u7269\u79CD",
        "added": "ra",
        "position": "start"
      },
      {
        "word": "genet",
        "meaning": "\u9E9D\u732B",
        "keyword": "\u9E9D\u732B",
        "added": "t",
        "position": "start"
      },
      {
        "word": "genesis",
        "meaning": "\u8D77\u6E90",
        "keyword": "\u8D77\u6E90",
        "added": "sis",
        "position": "start"
      }
    ]
  },
  {
    "sourcePage": 402,
    "id": "aga",
    "rime": "AGA",
    "title": "\u963F\u52A0\u897F\u4E0D\u7231\u739B\u7459\u5374\u53CD\u590D\u5403\u743C\u8102\u8611\u83C7",
    "story": "\u963F\u52A0\u897F\u4E0D\u7231\u739B\u7459\uFF0C\u4F46\u5BF9\u77F3\u82B1\u83DC\u3001\u8611\u83C7\u7B49\u518D\u4E00\u6B21\u5730\u5403\u4E5F\u4E0D\u538C\u3002",
    "words": [
      {
        "word": "agassi",
        "meaning": "\u963F\u52A0\u897F",
        "keyword": "\u963F\u52A0\u897F",
        "added": "ssi",
        "position": "start"
      },
      {
        "word": "agate",
        "meaning": "\u739B\u7459",
        "keyword": "\u739B\u7459",
        "added": "te",
        "position": "start"
      },
      {
        "word": "agar",
        "meaning": "\u77F3\u82B1\u83DC\u3001\u743C\u8102",
        "keyword": "\u77F3\u82B1\u83DC",
        "added": "r",
        "position": "start"
      },
      {
        "word": "agaric",
        "meaning": "\u8611\u83C7\u3001\u4F1E\u83CC",
        "keyword": "\u8611\u83C7",
        "added": "ric",
        "position": "start"
      },
      {
        "word": "again",
        "meaning": "\u518D\u4E00\u6B21",
        "keyword": "\u518D\u4E00\u6B21",
        "added": "in",
        "position": "start"
      }
    ]
  }
];
var colors4 = ["#466B8A", "#B85C45", "#6D7750", "#815D86", "#3D7C73", "#A85E54", "#53718A", "#8B6A45", "#3F7A68", "#6C6291"];
var familiesBatch9 = seeds4.map((seed, index) => {
  const positions = new Set(seed.words.map((word) => word.position));
  const rimePosition = positions.size > 1 ? "mixed" : seed.words[0]?.position;
  const positionTip = rimePosition === "start" ? `\u5171\u540C\u90E8\u5206 ${seed.rime} \u653E\u5728\u8BCD\u9996\uFF0C\u518D\u63A5\u4E0A\u4E0D\u540C\u5B57\u6BCD` : rimePosition === "mixed" ? `\u5171\u540C\u90E8\u5206 ${seed.rime} \u6709\u65F6\u5728\u8BCD\u9996\u3001\u6709\u65F6\u5728\u8BCD\u5C3E\uFF0C\u9010\u884C\u89C2\u5BDF\u7EC4\u5408\u4F4D\u7F6E` : `\u628A\u5171\u540C\u90E8\u5206 ${seed.rime} \u653E\u5728\u8BCD\u5C3E\uFF0C\u6362\u4E0A\u4E0D\u540C\u8BCD\u9996`;
  return {
    id: seed.id,
    rime: seed.rime,
    rimePosition,
    title: seed.title,
    subtitle: seed.story,
    scene: "",
    story: segmentStory4(seed.story, seed.words),
    onsets: seed.words.map((word) => word.added),
    words: seed.words.map((word) => ({
      word: word.word,
      display: word.word.toUpperCase(),
      cn: word.meaning,
      onset: word.added,
      rimePosition: word.position
    })),
    tip: `${positionTip}\uFF0C\u4E00\u53E3\u6C14\u8BB0\u4F4F\u8FD9\u4E00\u7EC4 ${seed.words.length} \u4E2A\u5355\u8BCD\u3002`,
    color: colors4[index % colors4.length]
  };
});

// src/data/synced-scenes.ts
var syncedScenes = {
  "ab": "/scenes/ab.jpg",
  "able": "/scenes/able.jpg",
  "ace": "/scenes/ace.jpg",
  "ack": "/scenes/ack.png",
  "act": "/scenes/act.png",
  "ad": "/scenes/ad.jpg",
  "ade": "/scenes/ade.png",
  "aga": "/scenes/aga.jpg",
  "aid": "/scenes/aid.jpg",
  "ail": "/scenes/ail.jpg",
  "ain": "/scenes/ain.jpg",
  "ain2": "/scenes/ain2.jpg",
  "air": "/scenes/air.jpg",
  "ake": "/scenes/ake.jpg",
  "ake2": "/scenes/ake2.jpg",
  "ale": "/scenes/ale.jpg",
  "alm": "/scenes/alm.jpg",
  "am": "/scenes/am.jpg",
  "ame": "/scenes/ame.jpg",
  "amp": "/scenes/amp.png",
  "an": "/scenes/an.jpg",
  "ance": "/scenes/ance.jpg",
  "and": "/scenes/and.jpg",
  "ane": "/scenes/ane.jpg",
  "ank": "/scenes/ank.jpg",
  "anker": "/scenes/anker.jpg",
  "ant": "/scenes/ant.png",
  "ap": "/scenes/ap.jpg",
  "ape": "/scenes/ape.jpg",
  "ar": "/scenes/ar.jpg",
  "ard": "/scenes/ard.jpg",
  "are": "/scenes/are.jpg",
  "are2": "/scenes/are2.png",
  "are3": "/scenes/are3.png",
  "ark": "/scenes/ark.jpg",
  "art": "/scenes/art.jpg",
  "art2": "/scenes/art2.jpg",
  "as": "/scenes/as.jpg",
  "ash": "/scenes/ash.jpg",
  "ast": "/scenes/ast.png",
  "at": "/scenes/at.jpg",
  "atch": "/scenes/atch.jpg",
  "atch2": "/scenes/atch2.jpg",
  "ate": "/scenes/ate.jpg",
  "ate2": "/scenes/ate2.jpg",
  "ath": "/scenes/ath.jpg",
  "ation": "/scenes/ation.jpg",
  "ave": "/scenes/ave.jpg",
  "aw": "/scenes/aw.jpg",
  "aw2": "/scenes/aw2.jpg",
  "awn": "/scenes/awn.jpg",
  "ax": "/scenes/ax.jpg",
  "ay": "/scenes/ay.jpg",
  "ay2": "/scenes/ay2.jpg",
  "ban": "/scenes/ban.jpg",
  "ban2": "/scenes/ban2.jpg",
  "base": "/scenes/base.jpg",
  "bee": "/scenes/bee.jpg",
  "boo": "/scenes/boo.jpg",
  "by": "/scenes/by.jpg",
  "can": "/scenes/can.jpg",
  "can2": "/scenes/can2.jpg",
  "car": "/scenes/car.jpg",
  "ceive": "/scenes/ceive.jpg",
  "cket": "/scenes/cket.jpg",
  "ea": "/scenes/ea.jpg",
  "each": "/scenes/each.jpg",
  "ead": "/scenes/ead.jpg",
  "eak": "/scenes/eak.jpg",
  "eal": "/scenes/eal.png",
  "eam": "/scenes/eam.jpg",
  "ean": "/scenes/ean.jpg",
  "ear": "/scenes/ear.jpg",
  "ear2": "/scenes/ear2.jpg",
  "eason": "/scenes/eason.jpg",
  "eat": "/scenes/eat.jpg",
  "eck": "/scenes/eck.jpg",
  "ed": "/scenes/ed.jpg",
  "ee": "/scenes/ee.jpg",
  "eed": "/scenes/eed.jpg",
  "eed2": "/scenes/eed2.jpg",
  "eek": "/scenes/eek.png",
  "eel": "/scenes/eel.jpg",
  "een": "/scenes/een.jpg",
  "eep": "/scenes/eep.jpg",
  "eer": "/scenes/eer.jpg",
  "eer2": "/scenes/eer2.jpg",
  "eet": "/scenes/eet.jpg",
  "eg": "/scenes/eg.jpg",
  "ell": "/scenes/ell.jpg",
  "en": "/scenes/en.jpg",
  "end": "/scenes/end.jpg",
  "est": "/scenes/est.jpg",
  "et": "/scenes/et.jpg",
  "et2": "/scenes/et2.png",
  "ever": "/scenes/ever.jpg",
  "ew": "/scenes/ew.jpg",
  "fee": "/scenes/fee.jpg",
  "foo": "/scenes/foo.png",
  "ger": "/scenes/ger.png",
  "gle": "/scenes/gle.jpg",
  "gra": "/scenes/gra.png",
  "hea": "/scenes/hea.jpg",
  "hit": "/scenes/hit.jpg",
  "hoo": "/scenes/hoo.jpg",
  "ice": "/scenes/ice.jpg",
  "ick": "/scenes/ick.jpg",
  "ick2": "/scenes/ick2.jpg",
  "ie": "/scenes/ie.jpg",
  "ief": "/scenes/ief.jpg",
  "ig": "/scenes/ig.jpg",
  "igh": "/scenes/igh.jpg",
  "ight": "/scenes/ight.jpg",
  "ight2": "/scenes/ight2.jpg",
  "ike": "/scenes/ike.jpg",
  "ile": "/scenes/ile.jpg",
  "ile2": "/scenes/ile2.jpg",
  "ill": "/scenes/ill.jpg",
  "ill2": "/scenes/ill2.jpg",
  "ill3": "/scenes/ill3.jpg",
  "imp": "/scenes/imp.jpg",
  "in": "/scenes/in.jpg",
  "in2": "/scenes/in2.jpg",
  "ind": "/scenes/ind.jpg",
  "ind2": "/scenes/ind2.png",
  "ine": "/scenes/ine.jpg",
  "ing": "/scenes/ing.png",
  "inge": "/scenes/inge.jpg",
  "ink": "/scenes/ink.jpg",
  "ink2": "/scenes/ink2.jpg",
  "ion": "/scenes/ion.jpg",
  "ip": "/scenes/ip.jpg",
  "ipe": "/scenes/ipe.png",
  "ire": "/scenes/ire.jpg",
  "ire2": "/scenes/ire2.jpg",
  "it": "/scenes/it.jpg",
  "itch": "/scenes/itch.jpg",
  "ite": "/scenes/ite.jpg",
  "ive": "/scenes/ive.png",
  "ix": "/scenes/ix.jpg",
  "ize": "/scenes/ize.jpg",
  "lay": "/scenes/lay.jpg",
  "lip": "/scenes/lip.jpg",
  "llion": "/scenes/llion.jpg",
  "lock": "/scenes/lock.jpg",
  "lot": "/scenes/lot.jpg",
  "low": "/scenes/low.jpg",
  "lue": "/scenes/lue.png",
  "lush": "/scenes/lush.jpg",
  "mar": "/scenes/mar.png",
  "mar2": "/scenes/mar2.png",
  "moo": "/scenes/moo.jpg",
  "mote": "/scenes/mote.jpg",
  "mple": "/scenes/mple.jpg",
  "nat": "/scenes/nat.png",
  "oak": "/scenes/oak.jpg",
  "ob": "/scenes/ob.jpg",
  "obby": "/scenes/obby.png",
  "obe": "/scenes/obe.png",
  "ock": "/scenes/ock.jpg",
  "ode": "/scenes/ode.jpg",
  "oe": "/scenes/oe.jpg",
  "og": "/scenes/og.jpg",
  "oil": "/scenes/oil.jpg",
  "oil2": "/scenes/oil2.jpg",
  "oke": "/scenes/oke.jpg",
  "old": "/scenes/old.jpg",
  "ole": "/scenes/ole.jpg",
  "oll": "/scenes/oll.jpg",
  "oll2": "/scenes/oll2.jpg",
  "ome": "/scenes/ome.jpg",
  "on": "/scenes/on.jpg",
  "one": "/scenes/one.jpg",
  "ook": "/scenes/ook.jpg",
  "ool": "/scenes/ool.jpg",
  "ool2": "/scenes/ool2.jpg",
  "ool3": "/scenes/ool3.jpg",
  "oom": "/scenes/oom.jpg",
  "oot": "/scenes/oot.jpg",
  "op": "/scenes/op.jpg",
  "ope": "/scenes/ope.jpg",
  "ord": "/scenes/ord.jpg",
  "ore": "/scenes/ore.jpg",
  "ork": "/scenes/ork.jpg",
  "ose": "/scenes/ose.jpg",
  "oss": "/scenes/oss.jpg",
  "ost": "/scenes/ost.jpg",
  "ot": "/scenes/ot.png",
  "oth": "/scenes/oth.jpg",
  "other": "/scenes/other.jpg",
  "otion": "/scenes/otion.jpg",
  "our": "/scenes/our.jpg",
  "ouse": "/scenes/ouse.jpg",
  "out": "/scenes/out.jpg",
  "ove": "/scenes/ove.jpg",
  "over": "/scenes/over.jpg",
  "ow": "/scenes/ow.jpg",
  "ower": "/scenes/ower.jpg",
  "owl": "/scenes/owl.jpg",
  "own": "/scenes/own.jpg",
  "own2": "/scenes/own2.jpg",
  "oy": "/scenes/oy.jpg",
  "oyal": "/scenes/oyal.jpg",
  "pai": "/scenes/pai.jpg",
  "par2": "/scenes/par2.jpg",
  "ply": "/scenes/ply.jpg",
  "port": "/scenes/port.jpg",
  "ppy": "/scenes/ppy.jpg",
  "qua": "/scenes/qua.jpg",
  "quar": "/scenes/quar.jpg",
  "rai": "/scenes/rai.jpg",
  "rench": "/scenes/rench.jpg",
  "ridge": "/scenes/ridge.jpg",
  "ring": "/scenes/ring.jpg",
  "rown": "/scenes/rown.png",
  "ry": "/scenes/ry.jpg",
  "sca": "/scenes/sca.jpg",
  "scar": "/scenes/scar.jpg",
  "ta": "/scenes/ta.png",
  "thin": "/scenes/thin.png",
  "trans": "/scenes/trans.jpg",
  "tru": "/scenes/tru.jpg",
  "ub": "/scenes/ub.jpg",
  "uck": "/scenes/uck.jpg",
  "udge": "/scenes/udge.jpg",
  "ue": "/scenes/ue.png",
  "ug": "/scenes/ug.jpg",
  "ull": "/scenes/ull.jpg",
  "umb": "/scenes/umb.jpg",
  "un": "/scenes/un.jpg",
  "unk": "/scenes/unk.jpg",
  "unk2": "/scenes/unk2.jpg",
  "unt": "/scenes/unt.jpg",
  "use": "/scenes/use.jpg",
  "use2": "/scenes/use2.jpg",
  "use3": "/scenes/use3.jpg",
  "useable": "/scenes/useable.jpg",
  "ush": "/scenes/ush.jpg",
  "ust": "/scenes/ust.png",
  "ute": "/scenes/ute.jpg",
  "ute2": "/scenes/ute2.jpg",
  "van": "/scenes/van.jpg",
  "we": "/scenes/we.jpg",
  "we2": "/scenes/we2.jpg",
  "woo": "/scenes/woo.jpg",
  "zzz": "/scenes/zzz.jpg"
};

// src/data/families.ts
var baseFamilies = [
  {
    id: "ark",
    rime: "ARK",
    title: "\u591C\u516C\u56ED\u91CC\u7684\u9CA8\u9C7C\u5546\u6807",
    subtitle: "\u4E00\u53EA\u4E91\u96C0\u7684\u591C\u95F4\u96D5\u523B\u5947\u9047",
    scene: "/scenes/ark.jpg",
    onsets: ["l", "d", "p", "sp", "b", "sh", "m"],
    color: "#4A6FA5",
    story: [
      { text: "\u4E00\u53EA" },
      { text: "\u4E91\u96C0", word: "lark" },
      { text: "\u98DE\u5230\u4E00\u4E2A" },
      { text: "\u9ED1\u6697\u7684", word: "dark" },
      { text: "\u516C\u56ED", word: "park" },
      { text: "\uFF0C\u501F\u7740" },
      { text: "\u706B\u661F\u5B50", word: "spark" },
      { text: "\u7684\u4EAE\u5149\u5728" },
      { text: "\u6811\u76AE", word: "bark" },
      { text: "\u4E0A\u96D5\u523B\u4E86\u4E00\u4E2A" },
      { text: "\u9CA8\u9C7C", word: "shark" },
      { text: "\u7684" },
      { text: "\u5546\u6807", word: "mark" },
      { text: "\u3002" }
    ],
    words: [
      { word: "lark", display: "LARK", cn: "\u4E91\u96C0", onset: "l" },
      { word: "dark", display: "DARK", cn: "\u9ED1\u6697", onset: "d" },
      { word: "park", display: "PARK", cn: "\u516C\u56ED", onset: "p" },
      { word: "spark", display: "SPARK", cn: "\u706B\u661F\u5B50", onset: "sp" },
      { word: "bark", display: "BARK", cn: "\u6811\u76AE", onset: "b" },
      { word: "shark", display: "SHARK", cn: "\u9CA8\u9C7C", onset: "sh" },
      { word: "mark", display: "MARK", cn: "\u5546\u6807", onset: "m" }
    ],
    tip: "Y \u8F74\u5199\u4E0A L\u3001D\u3001P\u3001SP\u3001B\u3001SH\u3001M\uFF0C\u5E73\u884C X \u8F74\u5199\u4E0A ARK\uFF0C\u7EC4\u5408\u8D77\u6765\u4E00\u53E3\u6C14\u7262\u8BB0 7 \u4E2A\u5355\u8BCD\u3002"
  },
  {
    id: "ook",
    rime: "OOK",
    title: "\u6EAA\u8FB9\u6076\u68CD\u4E0E\u9505\u91CC\u7684\u9B3C",
    subtitle: "\u4E00\u4E2A\u8D4C\u5F92\u7684\u8BE1\u5F02\u70F9\u996A\u73B0\u573A",
    scene: "/scenes/ook.jpg",
    onsets: ["br", "cr", "r", "l", "c", "b", "h", "sp"],
    color: "#E15A3B",
    story: [
      { text: "\u5728" },
      { text: "\u6EAA", word: "brook" },
      { text: "\u8FB9\u6709\u4E00\u7FA4" },
      { text: "\u6076\u68CD", word: "crook" },
      { text: "\uFF0C\u5176\u4E2D\u4E00\u4E2A" },
      { text: "\u8D4C\u5F92", word: "rook" },
      { text: "\u8FB9" },
      { text: "\u770B", word: "look" },
      { text: "\u4E00\u672C" },
      { text: "\u70F9\u996A", word: "cook" },
      { text: "\u7684" },
      { text: "\u4E66", word: "book" },
      { text: "\uFF0C\u8FB9\u7528" },
      { text: "\u94A9\u5B50", word: "hook" },
      { text: "\u94A9\u4F4F\u4E00\u4E2A" },
      { text: "\u9B3C", word: "spook" },
      { text: "\u653E\u5728\u9505\u91CC\u716E\u3002" }
    ],
    words: [
      { word: "brook", display: "BROOK", cn: "\u6EAA", onset: "br" },
      { word: "crook", display: "CROOK", cn: "\u6076\u68CD", onset: "cr" },
      { word: "rook", display: "ROOK", cn: "\u8D4C\u5F92", onset: "r" },
      { word: "look", display: "LOOK", cn: "\u770B", onset: "l" },
      { word: "cook", display: "COOK", cn: "\u70F9\u996A", onset: "c" },
      { word: "book", display: "BOOK", cn: "\u4E66", onset: "b" },
      { word: "hook", display: "HOOK", cn: "\u94A9", onset: "h" },
      { word: "spook", display: "SPOOK", cn: "\u9B3C", onset: "sp" }
    ],
    tip: "\u5B57\u5C3E OOK \u4E0D\u5FC5\u6B7B\u8BB0\uFF0C\u501F\u7740\u6700\u719F\u7684 BOOK\uFF0C\u987A\u7740\u6545\u4E8B\u628A\u53E6\u5916 7 \u4E2A\u8BCD\u4E00\u8D77\u5E26\u8D70\u3002"
  },
  {
    id: "bee",
    rime: "BEE",
    title: "\u871C\u8702\u7684\u4E30\u6536\u91CE\u9910",
    subtitle: "\u5439\u54CD\u8B66\u7B1B\uFF0C\u62DB\u547C\u540C\u4F34\u5F00\u996D",
    scene: "/scenes/bee.jpg",
    onsets: ["b+\xF8", "b+f", "b+r", "b+t", "b+p"],
    color: "#D9A441",
    story: [
      { text: "" },
      { text: "\u871C\u8702", word: "bee" },
      { text: "\u770B\u5230" },
      { text: "\u725B\u8089", word: "beef" },
      { text: "\u3001" },
      { text: "\u5564\u9152", word: "beer" },
      { text: "\u548C" },
      { text: "\u751C\u83DC", word: "beet" },
      { text: "\uFF0C\u5B83\u5439\u54CD" },
      { text: "\u8B66\u7B1B", word: "beep" },
      { text: "\u62DB\u5F15\u540C\u4F34\u6765\u4EAB\u7528\u3002" }
    ],
    words: [
      { word: "bee", display: "BEE", cn: "\u871C\u8702", onset: "b+\xF8" },
      { word: "beef", display: "BEEF", cn: "\u725B\u8089", onset: "b+f" },
      { word: "beer", display: "BEER", cn: "\u5564\u9152", onset: "b+r" },
      { word: "beet", display: "BEET", cn: "\u751C\u83DC", onset: "b+t" },
      { word: "beep", display: "BEEP", cn: "\u8B66\u7B1B", onset: "b+p" }
    ],
    tip: "\u53EA\u8981\u8BB0\u5F97 BEE \u662F\u871C\u8702\uFF0C\u5C31\u77E5\u9053 R \u662F\u5564\u9152\u3001F \u662F\u725B\u8089\u3001T \u662F\u751C\u83DC\u3001P \u662F\u8B66\u7B1B\u3002"
  },
  {
    id: "ee",
    rime: "EE",
    title: "\u8D26\u5355\u5927\u9003\u4EA1",
    subtitle: "\u4E3A\u4E86\u81EA\u7531\uFF0C\u8EB2\u4E0A\u4E09\u68F5\u5C0F\u6811",
    scene: "/scenes/ee.jpg",
    onsets: ["b", "s", "f", "fr", "fl", "thr", "w", "tr"],
    color: "#2F6F5E",
    story: [
      { text: "" },
      { text: "\u871C\u8702", word: "bee" },
      { text: "\u5403\u5B8C\u5927\u9910\u540E\uFF0C" },
      { text: "\u770B\u89C1", word: "see" },
      { text: "\u4E86\u8D26\u5355\u4E0A\u7684" },
      { text: "\u8D39\u7528", word: "fee" },
      { text: "\uFF0C\u4E3A\u4E86" },
      { text: "\u81EA\u7531", word: "free" },
      { text: "\uFF0C\u5B83\u8D76\u7D27" },
      { text: "\u9003\u8DD1", word: "flee" },
      { text: "\u5230" },
      { text: "\u4E09", word: "three" },
      { text: "\u68F5" },
      { text: "\u6781\u5C0F", word: "wee" },
      { text: "\u7684" },
      { text: "\u6811", word: "tree" },
      { text: "\u4E0A\u8EB2\u8D77\u6765\u3002" }
    ],
    words: [
      { word: "bee", display: "BEE", cn: "\u871C\u8702", onset: "b" },
      { word: "see", display: "SEE", cn: "\u770B\u89C1", onset: "s" },
      { word: "fee", display: "FEE", cn: "\u8D39\u7528", onset: "f" },
      { word: "free", display: "FREE", cn: "\u81EA\u7531", onset: "fr" },
      { word: "flee", display: "FLEE", cn: "\u9003\u8DD1", onset: "fl" },
      { word: "three", display: "THREE", cn: "\u4E09", onset: "thr" },
      { word: "wee", display: "WEE", cn: "\u6781\u5C0F", onset: "w" },
      { word: "tree", display: "TREE", cn: "\u6811", onset: "tr" }
    ],
    tip: "\u540C\u4E00\u4E2A\u97F5\u811A EE\uFF0C\u6362 8 \u4E2A\u8BCD\u9996\u5C31\u662F 8 \u4E2A\u8BCD\uFF1B\u6545\u4E8B\u628A\u5B83\u4EEC\u7684\u753B\u9762\u4E32\u6210\u4E00\u51FA\u9003\u4EA1\u5267\u3002"
  },
  {
    id: "eat",
    rime: "EAT",
    title: "\u9A97\u5403\u8005\u7684\u51FB\u9F13\u665A\u9910",
    subtitle: "\u5E72\u51C0\u9910\u5385\u91CC\u7684\u8352\u8BDE multitasking",
    scene: "/scenes/eat.jpg",
    onsets: ["ch", "n", "s", "h", "\xF8", "m", "sw", "b"],
    color: "#C25E7E",
    story: [
      { text: "\u6709\u4E2A\u4EBA\u60F3" },
      { text: "\u9A97\u5403", word: "cheat" },
      { text: "\uFF0C\u4ED6\u8D70\u8FDB\u4E00\u95F4" },
      { text: "\u5E72\u51C0", word: "neat" },
      { text: "\u7684\u9910\u5385\uFF0C" },
      { text: "\u5750", word: "seat" },
      { text: "\u5728" },
      { text: "\u70ED", word: "heat" },
      { text: "\u706B\u7089\u65C1\uFF0C\u8FB9" },
      { text: "\u5403", word: "eat" },
      { text: "\u7740" },
      { text: "\u8089", word: "meat" },
      { text: "\u6D41\u7740" },
      { text: "\u6C57", word: "sweat" },
      { text: "\uFF0C\u8FB9" },
      { text: "\u51FB", word: "beat" },
      { text: "\u7740\u9F13\u3002" }
    ],
    words: [
      { word: "cheat", display: "CHEAT", cn: "\u8BC8\u9A97", onset: "ch" },
      { word: "neat", display: "NEAT", cn: "\u5E72\u51C0", onset: "n" },
      { word: "seat", display: "SEAT", cn: "\u5750", onset: "s" },
      { word: "heat", display: "HEAT", cn: "\u70ED", onset: "h" },
      { word: "eat", display: "EAT", cn: "\u5403", onset: "\xF8" },
      { word: "meat", display: "MEAT", cn: "\u8089", onset: "m" },
      { word: "sweat", display: "SWEAT", cn: "\u6C57", onset: "sw" },
      { word: "beat", display: "BEAT", cn: "\u6253\u51FB", onset: "b" }
    ],
    tip: "\u4E00\u4E2A EAT \u505A\u5706\u5FC3\uFF0C\u8BCD\u9996\u56F4\u4E00\u5708\u2014\u2014\u753B\u9762\u8D8A\u8352\u8C2C\uFF0C\u8BB0\u5F97\u8D8A\u7262\u3002"
  },
  {
    id: "ool",
    rime: "OOL",
    title: "\u7B28\u86CB\u7684\u51F3\u5B50\u9493\u9975",
    subtitle: "\u4E0D\u4F1A\u7528\u5DE5\u5177\uFF0C\u5C31\u62FF\u51F3\u5B50\u9493\u9C7C",
    scene: "/scenes/ool.jpg",
    onsets: ["f", "t", "c", "st", "p"],
    color: "#5B8C5A",
    story: [
      { text: "" },
      { text: "\u7B28\u86CB", word: "fool" },
      { text: "\u603B\u662F\u4E0D\u4F1A\u4F7F\u7528" },
      { text: "\u5DE5\u5177", word: "tool" },
      { text: "\uFF0C\u5E38\u5728\u5F88" },
      { text: "\u51C9", word: "cool" },
      { text: "\u7684\u5929\u6C14\u7528" },
      { text: "\u51F3\u5B50", word: "stool" },
      { text: "\u5F53\u8BF1\u9975\u5728" },
      { text: "\u6C60\u5858", word: "pool" },
      { text: "\u9493\u9C7C\u3002" }
    ],
    words: [
      { word: "fool", display: "FOOL", cn: "\u7B28\u86CB", onset: "f" },
      { word: "tool", display: "TOOL", cn: "\u5DE5\u5177", onset: "t" },
      { word: "cool", display: "COOL", cn: "\u51C9\uFF08\u9177\uFF09", onset: "c" },
      { word: "stool", display: "STOOL", cn: "\u51F3\u5B50", onset: "st" },
      { word: "pool", display: "POOL", cn: "\u6C60\u5858", onset: "p" }
    ],
    tip: "OOL \u5BB6\u65CF\u4E94\u5144\u5F1F\uFF1Af\u3001t\u3001c\u3001st\u3001p\uFF0C\u4E00\u4E2A\u8352\u5510\u9493\u9C7C\u753B\u9762\u5168\u90E8\u88C5\u4E0B\u3002"
  },
  {
    id: "one",
    rime: "ONE",
    title: "\u4E01\u9AA8\u725B\u6392\u548C\u77F3\u5934",
    subtitle: "\u4E00\u6761 X \u8F74\u4E32\u8D77 10 \u4E2A\u5355\u8BCD",
    scene: "/scenes/one.jpg",
    onsets: ["a", "b", "c", "d", "g", "t", "z", "ph", "st", "tb"],
    color: "#7A5C9E",
    story: [
      { text: "" },
      { text: "\u5934\u7B49", word: "aone" },
      { text: "\u8231\u7684\u5BA2\u4EBA\u628A" },
      { text: "\u9AA8\u5934", word: "bone" },
      { text: "\u653E\u8FDB" },
      { text: "\u5706\u9525\u4F53", word: "cone" },
      { text: "\u5E3D\u5B50\uFF0C\u4E8B\u60C5" },
      { text: "\u5B8C\u6210", word: "done" },
      { text: "\u540E\u5C31" },
      { text: "\u6D88\u5931", word: "gone" },
      { text: "\u4E86\uFF1B" },
      { text: "\u97F3\u8272", word: "tone" },
      { text: "\u4ECE" },
      { text: "\u7535\u8BDD", word: "phone" },
      { text: "\u91CC\u4F20\u51FA\uFF0C\u6574\u4E2A" },
      { text: "\u533A\u57DF", word: "zone" },
      { text: "\u7684" },
      { text: "\u77F3\u5934", word: "stone" },
      { text: "\u65C1\u8FB9\u90FD\u653E\u7740" },
      { text: "\u4E01\u9AA8\u725B\u6392", word: "tbone" },
      { text: "\u3002" }
    ],
    words: [
      { word: "aone", display: "AONE", cn: "\u5934\u7B49", onset: "a" },
      { word: "bone", display: "BONE", cn: "\u9AA8\u5934", onset: "b" },
      { word: "cone", display: "CONE", cn: "\u5706\u9525\u4F53", onset: "c" },
      { word: "done", display: "DONE", cn: "\u5B8C\u6210", onset: "d" },
      { word: "gone", display: "GONE", cn: "\u6D88\u5931", onset: "g" },
      { word: "tone", display: "TONE", cn: "\u97F3\u8272", onset: "t" },
      { word: "zone", display: "ZONE", cn: "\u533A\u57DF", onset: "z" },
      { word: "phone", display: "PHONE", cn: "\u7535\u8BDD", onset: "ph" },
      { word: "stone", display: "STONE", cn: "\u77F3\u5934", onset: "st" },
      { word: "tbone", display: "TBONE", cn: "\u4E01\u9AA8\u725B\u6392", onset: "tb" }
    ],
    tip: "\u628A A\u3001B\u3001C\u3001D\u3001G\u3001T\u3001Z\u3001PH\u3001ST\u3001TB \u5199\u5728 Y \u8F74\uFF0C\u5E73\u884C X \u8F74\u5199\u4E0A ONE\uFF0C\u4E00\u53E3\u6C14\u7262\u8BB0 10 \u4E2A\u82F1\u6587\u5355\u8BCD\u3002"
  },
  {
    id: "anker",
    rime: "ANKER",
    title: "\u94F6\u884C\u5BB6\u7684\u6CB9\u8F6E\u68A6",
    subtitle: "BANK \u52A0 ER\uFF0C\u68A6\u8D8A\u505A\u8D8A\u5927",
    scene: "/scenes/anker.jpg",
    onsets: ["b", "h", "t"],
    color: "#B0762A",
    story: [
      { text: "" },
      { text: "\u94F6\u884C\u5BB6", word: "banker" },
      { text: "" },
      { text: "\u6E34\u671B", word: "hanker" },
      { text: "\u80FD\u6709\u4E00\u8258" },
      { text: "\u6CB9\u8F6E", word: "tanker" },
      { text: "\u3002" }
    ],
    words: [
      { word: "banker", display: "BANKER", cn: "\u94F6\u884C\u5BB6", onset: "b", note: "BANK \u94F6\u884C + ER\uFF08\u4EBA\uFF09" },
      { word: "hanker", display: "HANKER", cn: "\u6E34\u671B", onset: "h", note: "HOPE \u4E5F\u662F H \u5F00\u5934\uFF0C\u7528 H \u8BB0\u6E34\u671B" },
      { word: "tanker", display: "TANKER", cn: "\u6CB9\u8F6E", onset: "t" }
    ],
    tip: "\u7528\u719F\u8BCD BANK \u8BB0\u4F4F BANKER\uFF0C\u518D\u7528\u94F6\u884C\u5BB6\u7684\u753B\u9762\u5E26\u51FA\u300C\u6E34\u671B\u300D\u548C\u300C\u6CB9\u8F6E\u300D\u3002"
  },
  {
    id: "port",
    rime: "PORT",
    title: "\u6E2F\u53E3\u5854\u53F0\u7684\u62A5\u544A",
    subtitle: "\u8BCD\u9996\u4E00\u53D8\uFF0C\u610F\u601D\u5C31\u8F6C\u5411",
    scene: "/scenes/port.jpg",
    onsets: ["\xF8", "re", "trans", "sup", "im", "ex"],
    color: "#3E7CA6",
    story: [
      { text: "" },
      { text: "\u6E2F\u53E3", word: "port" },
      { text: "" },
      { text: "\u62A5\u544A", word: "report" },
      { text: "\u8BF4\uFF1A\u201C\u901A\u8FC7" },
      { text: "\u8FD0\u8F93", word: "transport" },
      { text: "\u7684" },
      { text: "\u652F\u6301", word: "support" },
      { text: "\uFF0C\u6211\u53EF\u4EE5\u505A" },
      { text: "\u8FDB\u53E3", word: "import" },
      { text: "\u548C" },
      { text: "\u51FA\u53E3", word: "export" },
      { text: "\u3002\u201D" }
    ],
    words: [
      { word: "port", display: "PORT", cn: "\u6E2F\u53E3", onset: "\xF8" },
      { word: "report", display: "REPORT", cn: "\u62A5\u544A", onset: "re" },
      { word: "transport", display: "TRANSPORT", cn: "\u8FD0\u8F93", onset: "trans" },
      { word: "support", display: "SUPPORT", cn: "\u652F\u6301", onset: "sup" },
      { word: "import", display: "IMPORT", cn: "\u8FDB\u53E3", onset: "im", note: "IM- \u6709\u300C\u8FDB\u6765\u300D\u7684\u610F\u601D" },
      { word: "export", display: "EXPORT", cn: "\u51FA\u53E3", onset: "ex", note: "EX- \u6709\u300C\u51FA\u53BB\u300D\u7684\u610F\u601D" }
    ],
    tip: "\u8BCD\u9996 IM \u6709\u8FDB\u6765\u7684\u610F\u601D\uFF0CEX \u6709\u51FA\u53BB\u7684\u610F\u601D\u2014\u2014\u8BB0\u4F4F\u8BCD\u9996\u65B9\u5411\uFF0C\u4E00\u4E32\u8BCD\u5168\u901A\u4E86\u3002"
  }
];
var familyData = [
  ...baseFamilies,
  ...familiesBatch1,
  ...familiesBatch2,
  ...familiesBatch3,
  ...familiesBatch4,
  ...familiesBatch5,
  ...familiesBatch6,
  ...familiesBatch7,
  ...familiesBatch8,
  ...familiesBatch9
];
var families = familyData.map((family) => ({
  ...family,
  scene: syncedScenes[family.id] ?? family.scene
}));
var totalWordCount = families.reduce((s, f) => s + f.words.length, 0);
var allWords = families.flatMap(
  (f) => f.words.map((w) => ({ ...w, familyId: f.id, familyTitle: f.title, rime: f.rime, color: f.color }))
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allWords,
  families,
  totalWordCount
});
