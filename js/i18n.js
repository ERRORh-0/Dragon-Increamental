'use strict';

/**
 * 可扩展语言接口。
 * 新增语言：
 *   registerLanguage('ja', '日本語', { '中文原文': '日本語訳', ... });
 *   setLanguage('ja');
 * 文本表以中文原文或稳定 key 为键。
 */
const I18N = {
  fallback: 'zh',
  langs: {},
  keyPacks: {},
  register(code, name, map) {
    this.langs[code] = { name: name, map: map || {} };
    this.keyPacks[code] = Object.assign(this.keyPacks[code] || {}, map || {});
    return this;
  },
  registerKeys(code, map) {
    this.keyPacks[code] = Object.assign(this.keyPacks[code] || {}, map || {});
    return this;
  },
  has(code) { return !!this.langs[code]; },
  list() { return Object.keys(this.langs); },
  t(key, code) {
    const lang = code || (typeof S !== 'undefined' && S.lang) || this.fallback;
    const table = this.langs[lang] || this.langs[this.fallback];
    if (table && table.map && Object.prototype.hasOwnProperty.call(table.map, key)) return table.map[key];
    return key;
  },
  tk(key, code) {
    const lang = code || (typeof S !== 'undefined' && S.lang) || this.fallback;
    const pack = this.keyPacks[lang] || this.keyPacks[this.fallback] || {};
    if (Object.prototype.hasOwnProperty.call(pack, key)) return pack[key];
    const fallback = this.keyPacks[this.fallback] || {};
    return Object.prototype.hasOwnProperty.call(fallback, key) ? fallback[key] : key;
  }
};

const CORE_KEYS = {
  zh: {
    'tab.chaos': '混 沌', 'chaos.title': '混 沌', 'chaos.gems': '宝石',
    'chaos.refine': '炼化', 'chaos.upgrades': '混沌升级', 'chaos.milestones': '混沌里程碑',
    'chaos.souls.shadow': '暗影之魂', 'chaos.souls.light': '光明之魂'
  },
  en: {
    'tab.chaos': 'CHAOS', 'chaos.title': 'CHAOS', 'chaos.gems': 'Gems',
    'chaos.refine': 'Refine', 'chaos.upgrades': 'Chaos Upgrades', 'chaos.milestones': 'Chaos Milestones',
    'chaos.souls.shadow': 'Shadow Souls', 'chaos.souls.light': 'Light Souls'
  }
};

function registerLanguage(code, name, map) { return I18N.register(code, name, map); }
function registerLanguageKeys(code, map) { return I18N.registerKeys(code, map); }
function setLanguage(code) {
  if (!I18N.has(code)) return false;
  S.lang = code;
  return true;
}
function translate(key) { return I18N.t(key); }
function tKey(key) { return I18N.tk(key); }

/* ------------------------------------------------------------------ *
 * 三语助手（zh / en / la）
 * tr(zh, en) 以中文为源键，返回当前语言的文本。
 * trf(zh, en, { name: value }) 支持 {name} 占位符。
 * 拉丁语表在 js/la.js 中，以 LA_TEXT 暴露。
 * ------------------------------------------------------------------ */
function langCode() {
  return (typeof S !== 'undefined' && S.lang) || I18N.fallback;
}

function tr(zh, en) {
  const lang = langCode();
  if (lang === 'zh') return zh;
  if (lang === 'la') {
    if (typeof LA_TEXT !== 'undefined' && Object.prototype.hasOwnProperty.call(LA_TEXT, zh)) return LA_TEXT[zh];
    if (en !== undefined && en !== null) return en;
    const mapped = I18N.t(zh, 'la');
    return mapped === zh ? zh : mapped;
  }
  if (en !== undefined && en !== null) return en;
  const mapped = I18N.t(zh, lang);
  return mapped === zh ? zh : mapped;
}

function trf(zh, en, params) {
  let out = tr(zh, en);
  if (params) {
    for (const k in params) {
      if (!Object.prototype.hasOwnProperty.call(params, k)) continue;
      out = out.split('{' + k + '}').join(String(params[k]));
    }
  }
  return out;
}

function isLatin() { return langCode() === 'la'; }

I18N.registerKeys('zh', CORE_KEYS.zh);
I18N.registerKeys('en', CORE_KEYS.en);
if (typeof ZH_TEXT !== 'undefined') registerLanguage('zh', '中文', ZH_TEXT);
if (typeof EN_TEXT !== 'undefined') registerLanguage('en', 'English', EN_TEXT);

