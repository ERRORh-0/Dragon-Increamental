'use strict';

  const $ = id => document.getElementById(id);

  const el = {
    cells: $('cells'), rate: $('rate'), speedText: $('speedText'), k: $('k'), envmul: $('envmul'),
    leymul: $('leymul'), capboost: $('capboost'), flowers: $('flowers'), xmul: $('xmul'),
    buyMaxBtn: $('buyMaxBtn'), continuumNote: $('continuumNote'),
    autos: $('autobuyers'),
    autoLock: $('autoLock'),
    envCount: $('envCount'), leyCount: $('leyCount'), flCount: $('flCount'),
    goalTitle: $('goalTitle'), goalPct: $('goalPct'), goalDesc: $('goalDesc'),
    goalFill: $('goalFill'), goalText: $('goalText'),
    tabMainBtn: $('tabMainBtn'), tabRenBtn: $('tabRenBtn'),
    tabStatBtn: $('tabStatBtn'), tabStat: $('tab-stat'),
    tabSetBtn: $('tabSetBtn'), tabSet: $('tab-set'),
    tabDeityBtn: $('tabDeityBtn'), tabDeity: $('tab-deity'),
    chaosTabBtn: $('chaosTabBtn'), chaosTab: $('tab-chaos'), chaosCount: $('chaosCount'),
    doChaosBtn: $('doChaosBtn'), shadowSouls: $('shadowSouls'), lightSouls: $('lightSouls'),
    quickChaosBtn: $('quickChaosBtn'), quickChaosGain: $('quickChaosGain'),
    chaosUnequipCheck: $('chaosUnequipCheck'),
    chaosGemBtn: $('chaosGemBtn'), chaosRefineBtn: $('chaosRefineBtn'), chaosUpBtn: $('chaosUpBtn'), chaosMsBtn: $('chaosMsBtn'),
    chaosGemPane: $('chaosGemPane'), chaosRefinePane: $('chaosRefinePane'), chaosUpPane: $('chaosUpPane'), chaosMsPane: $('chaosMsPane'),
    gemSlots: $('gemSlots'), gemBag: $('gemBag'), rawStoneList: $('rawStoneList'),
    quickRenBtn: $('quickRenBtn'), quickRenGain: $('quickRenGain'),
    challengeNow: $('challengeNow'), challengeNowText: $('challengeNowText'), challengeNowBtn: $('challengeNowBtn'), notice: $('notice'),
    stampOverlay: $('stampOverlay'), stampSeal: $('stampSeal'), stampText: $('stampText'),
    deityNavBtn: $('deityNavBtn'), deityMundisBtn: $('deityMundisBtn'),
    deityNav: $('deityNav'), deityMundis: $('deityMundis'), deityEnterBtn: $('deityEnterBtn'),
    mundisSacrifice: $('mundisSacrifice'), mundisSacBtn: $('mundisSacBtn'), mundisOfferHint: $('mundisOfferHint'),
    mundisBuffs: $('mundisBuffs'), mundisQuotes: $('mundisQuotes'),
    mundisQuotesOpen: $('mundisQuotesOpen'), mundisQuotesWrap: $('mundisQuotesWrap'), mundisQuotesBox: $('mundisQuotesBox'), mundisQuotesExit: $('mundisQuotesExit'),
    mundisDialog: $('mundisDialog'), mundisDialogLog: $('mundisDialogLog'), mundisDialogLine: $('mundisDialogLine'),
    mundisNextBtn: $('mundisNextBtn'), mundisReviewBtn: $('mundisReviewBtn'),
    saveText: $('saveText'), exportBtn: $('exportBtn'), importBtn: $('importBtn'), importStatus: $('importStatus'),
    langSel: $('langSel'), confirmRen: $('confirmRen'), confirmFlower: $('confirmFlower'), confirmSac: $('confirmSac'), confirmReset: $('confirmReset'),
    tabNcBtn: $('tabNcBtn'), tabNc: $('tab-nc'), ncTabState: $('ncTabState'),
    chNcBtn: $('chNcBtn'), chRcBtn: $('chRcBtn'), ncPane: $('ncPane'), rcPane: $('rcPane'), rcCards: $('rcCards'),
    subMainBtn: $('subMainBtn'), subVcvBtn: $('subVcvBtn'), subMain: $('subMain'), subVcv: $('subVcv'),
    crystal: $('crystal'), crystalBoost: $('crystalBoost'), vcvRate: $('vcvRate'),
    vcvUpBtn: $('vcvUpBtn'), vcvUpInfo: $('vcvUpInfo'),
    statGeneralBtn: $('statGeneralBtn'), statNcBtn: $('statNcBtn'), statResetBtn: $('statResetBtn'), statCalcBtn: $('statCalcBtn'),
    statGeneral: $('statGeneral'), statNc: $('statNc'), statReset: $('statReset'), statCalc: $('statCalc'),
    tabMain: $('tab-main'), tabRen: $('tab-ren'), renTabState: $('renTabState'),
    renCrystalsHud: $('renCrystalsHud'), renCrystals: $('renCrystals'),
    renTotal: $('renTotal'), renCapMul: $('renCapMul'), renGain: $('renGain'),
    renResets: $('renResets'), renBtn: $('renBtn'), renHint: $('renHint'),
    renManual: $('renManual'), renManualBtn: $('renManualBtn'),
    renMainBtn: $('renMainBtn'), nucleusBtn: $('nucleusBtn'), renMainPane: $('renMainPane'), nucleusPane: $('nucleusPane'),
    battleBtn: $('battleBtn'), battlePane: $('battlePane'), battleXp: $('battleXp'), battleLevel: $('battleLevel'),
    battleHp: $('battleHp'), battleAtk: $('battleAtk'), battleDef: $('battleDef'), battleCrit: $('battleCrit'),
    battleBag: $('battleBag'), battleMonsters: $('battleMonsters'), battleAttackBtn: $('battleAttackBtn'), battleMonsterHint: $('battleMonsterHint'), exuGrid: $('exuGrid'),
    battleAutoBtn: $('battleAutoBtn'), battleFleeBtn: $('battleFleeBtn'), battleSpawnBtn: $('battleSpawnBtn'), craftGrid: $('craftGrid'),
    nucleusLocked: $('nucleusLocked'), nucleusActive: $('nucleusActive'), nucleusEnterBtn: $('nucleusEnterBtn'),
    nucleusShowBtn: $('nucleusShowBtn'), nucleusDebuffs: $('nucleusDebuffs'), nucleusCrystals: $('nucleusCrystals'),
    nucleusResets: $('nucleusResets'), nucleusGain: $('nucleusGain'), nucleusCells: $('nucleusCells'),
    nucleusResetBtn: $('nucleusResetBtn'), nucleusExitBtn: $('nucleusExitBtn'), nucleusHint: $('nucleusHint'), muWrap: $('muWrap'), muGrid: $('muGrid'),
    rule: $('rule'), ruleText: $('ruleText'), ruleFix: $('ruleFix'),
    envK: $('envK'), envStep: $('envStep'), envBoost: $('envBoost'), envPrice: $('envPrice'), envEta: $('envEta'), envBtn: $('envBtn'), envMaxBtn: $('envMaxBtn'),
    leyPrice: $('leyPrice'), leyBtn: $('leyBtn'), leyMaxBtn: $('leyMaxBtn'), leyMulFx: $('leyMulFx'),
    flFx: $('flFx'), flPrice: $('flPrice'), flBtn: $('flBtn'),
    envAutoWrap: $('envAutoWrap'), envAutoBtn: $('envAutoBtn'), envAutoMax: $('envAutoMax'),
    leyAutoWrap: $('leyAutoWrap'), leyAutoBtn: $('leyAutoBtn'), leyAutoMax: $('leyAutoMax'),
    flowerAutoWrap: $('flowerAutoWrap'), flowerAutoBtn: $('flowerAutoBtn'), flowerAutoMax: $('flowerAutoMax'),
    renAutoWrap: $('renAutoWrap'), renAutoBtn: $('renAutoBtn'), renAutoAt: $('renAutoAt'), renAutoHint: $('renAutoHint'),
    ruAutoWrap: $('ruAutoWrap'), ruAutoBtn: $('ruAutoBtn'), ruAutoHint: $('ruAutoHint'),
    ruMaxWrap: $('ruMaxWrap'), ruMaxBtn: $('ruMaxBtn'),
    sacMul: $('sacMul'), sacPrice: $('sacPrice'), sacBtn: $('sacBtn'),
    sacAutoWrap: $('sacAutoWrap'), sacAutoBtn: $('sacAutoBtn'), sacAutoRatio: $('sacAutoRatio'),
    growth: $('growth'), mode: $('mode'), reset: $('reset'), saved: $('saved'),
    toast: $('toast'),
    ncBanner: $('ncBanner'), ncBannerText: $('ncBannerText')
  };
  el.renFx = [0,1,2,3,4].map(i => $('renFx' + i));
  el.ru11Base = $('ru11Base'); el.ru12Base = $('ru12Base');
  el.renPrice = [0,1,2,3,4].map(i => $('renPrice' + i));
  el.renBought = [0,1,2,3,4].map(i => $('renBought' + i));
  el.renBuy = [0,1,2,3,4].map(i => $('renBuy' + i));
  el.renTitle = [0,1,2,3,4].map(i => $('renTitle' + i));

  const rows = [];

  const autos = [];

  const ruCards = [];

  const ncCards = [];

  const rcCards = [];

  const muCards = [];
  const exuCards = [];
  const craftCards = [];
  let battleBagSig = '';

  const vcvCards = [];

  function buildRows() {
    const host = $('tiers');
    rows.length = 0;
    host.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const d = document.createElement('div');
      d.className = 'tier';
      d.style.setProperty('--c', COLOR[i]);
      d.innerHTML =
        '<div class="tid">' + ROMAN[i] + '</div>' +
        '<div class="tinfo">' +
          '<div class="tname">' + tr(CFG.tiers[i].name) + ' <span class="title-count num tier-bought">(0)</span> <span class="badge"></span></div>' +
          '<div class="tsub"><b class="cnt num">0</b> ' + tr('座 · 有效') + ' <b class="eff num">0</b> · ' +
            '<span class="rt num">+0/秒</span> · <span class="xmul num">' + tr('单倍 ×') + '1</span></div>' +
          '<div class="bar"><i></i></div>' +
        '</div>' +
        '<div class="tbuy">' +
          '<button class="buy">' + tr('购买') + '</button>' +
          '<div class="cost num">—</div>' +
        '</div>';
      host.appendChild(d);
      const row = { root: d, badge: d.querySelector('.badge'), bought: d.querySelector('.tier-bought'), cnt: d.querySelector('.cnt'), eff: d.querySelector('.eff'), rt: d.querySelector('.rt'), xmul: d.querySelector('.xmul'), bar: d.querySelector('.bar i'), btn: d.querySelector('.buy'), cost: d.querySelector('.cost') };
      row.btn.addEventListener('click', () => { if (buyTier(i)) render(); });
      rows.push(row);
    }
  }

  function buildAutos() {
    const host = $('autobuyers');
    autos.length = 0; host.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const d = document.createElement('div');
      d.className = 'auto'; d.style.setProperty('--c', COLOR[i]);
      d.innerHTML = '<div class="auto-name"><b>' + ROMAN[i] + '</b> ' + tr(CFG.tiers[i].name) + '</div>' +
        '<div class="auto-btns"><button class="auto-on">' + tr('关') + '</button><button class="auto-mode">' + tr('买 1 个') + '</button></div>';
      host.appendChild(d);
      const on = d.querySelector('.auto-on'), mode = d.querySelector('.auto-mode');
      on.addEventListener('click', () => { if (!S.autoUnlocked) return; S.autoOn[i] = !S.autoOn[i]; render(); save(); });
      mode.addEventListener('click', () => { if (!S.autoUnlocked) return; S.autoMode[i] = S.autoMode[i] ? 0 : 1; render(); save(); });
      autos.push({ root: d, on: on, mode: mode });
    }
  }

  function buildNc() {
    const host = $('ncCards');
    ncCards.length = 0; host.innerHTML = '';
    for (let i = 0; i < NC_DEFS.length; i++) {
      const def = NC_DEFS[i];
      const d = document.createElement('article');
      d.className = 'nc-card';
      const name = tr(def.name, def.enName);
      const mod = tr(def.mod, def.enMod);
      const reward = tr(def.reward, def.enReward);
      d.innerHTML = '<div class="nc-top"><h3>' + def.key + ' · ' + name + '</h3><span class="nc-badge">' + tr('未完成', 'Incomplete') + '</span></div>' +
        '<p>' + tr('挑战：', 'Challenge: ') + mod + '</p>' +
        '<p class="nc-reward">' + tr('奖励：', 'Reward: ') + reward + '</p>' +
        '<p class="nc-progress">' + tr('目标：细胞 1e100', 'Goal: 1e100 cells') + '</p>' +
        '<button class="nc-btn">' + tr('开始', 'Start') + '</button>';
      host.appendChild(d);
      const badge = d.querySelector('.nc-badge'), progress = d.querySelector('.nc-progress'), btn = d.querySelector('.nc-btn');
      btn.addEventListener('click', () => {
        if (S.ncActive === i + 1) {
          if (S.cells.cmp(1e100) >= 0) completeNC();
          else exitNC();
          render(); save(); return;
        }
        if (enterNC(i + 1)) { render(); save(); }
      });
      ncCards.push({ root: d, badge: badge, progress: progress, btn: btn });
    }
  }

  function buildRc() {
    if (!el.rcCards) return;
    el.rcCards.innerHTML = '';
    rcCards.length = 0;
    for (let i = 0; i < RC_DEFS.length; i++) {
      const def = RC_DEFS[i];
      const d = document.createElement('article');
      d.className = 'nc-card rc-card';
      d.innerHTML = '<div class="nc-top"><h3>' + def.key + ' · ' + tr(def.name, def.enName) + '</h3><span class="nc-badge">' + tr('未完成', 'Incomplete') + '</span></div>' +
        '<p>' + tr('规则：', 'Rule: ') + tr(def.mod, def.enMod) + '</p>' +
        '<p class="nc-reward">' + tr('奖励：', 'Reward: ') + tr(def.reward, def.enReward) + '</p>' +
        '<div class="goal"><div class="goal-fill"><i></i></div></div>' +
        '<div class="nc-foot"><span class="nc-progress"></span><button>' + tr('开始', 'Start') + '</button></div>';
      const btn = d.querySelector('button');
      btn.addEventListener('click', () => {
        if (S.rcActive === i + 1) {
          if (S.cells.cmp(RC_TARGET[i]) >= 0) completeRC(); else exitRC();
        } else if (!S.rcActive && !S.ncActive) enterRC(i + 1);
        render(); save();
      });
      el.rcCards.appendChild(d);
      rcCards.push({ root: d, badge: d.querySelector('.nc-badge'), fill: d.querySelector('.goal-fill i'), progress: d.querySelector('.nc-progress'), btn: btn });
    }
  }

  function buildVcv() {
    const host = $('vcvCards');
    vcvCards.length = 0; host.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const d = document.createElement('article');
      d.className = 'vcv-card locked';
      d.innerHTML = '<div class="nc-top"><h3>VCV ' + ROMAN[i] + ' <span class="title-count num vcv-title-count">(0)</span></h3><span class="vcv-state">' + tr('未解锁', 'Locked') + '</span></div>' +
        '<p class="vcv-unlock"></p>' +
        '<p>' + tr('拥有', 'Owned') + ' <b class="num vcv-count">0</b> · ' + tr('倍率 ×', 'Mult ×') + '<b class="num vcv-mult">0</b></p>' +
        '<p>' + tr('产量', 'Output') + ' <b class="num vcv-rate">0</b> <span class="vcv-unit">' + tr('结晶/秒', 'Crystals/s') + '</span></p>' +
        '<p>' + tr('价格', 'Price') + ' <b class="num vcv-cost">0</b> ' + tr('声望结晶', 'Renown Crystals') + '</p>' +
        '<button class="vcv-buy">' + tr('购买', 'Buy') + '</button><button class="vcv-max" hidden>' + tr('买最大', 'Max') + '</button>';
      host.appendChild(d);
      const state = d.querySelector('.vcv-state'), unlock = d.querySelector('.vcv-unlock');
      const count = d.querySelector('.vcv-count'), mult = d.querySelector('.vcv-mult');
      const titleCount = d.querySelector('.vcv-title-count');
      const rate = d.querySelector('.vcv-rate'), unit = d.querySelector('.vcv-unit'), cost = d.querySelector('.vcv-cost'), btn = d.querySelector('.vcv-buy'), maxBtn = d.querySelector('.vcv-max');
      btn.addEventListener('click', () => { if (buyVcv(i)) { render(); save(); } });
      maxBtn.addEventListener('click', () => { if (buyVcvMax(i) > 0) { render(); save(); } });
      vcvCards.push({ root: d, state: state, unlock: unlock, count: count, titleCount: titleCount, mult: mult, rate: rate, unit: unit, cost: cost, btn: btn, maxBtn: maxBtn });
    }
  }

  function rebuildUI() {
    translatedLang = null;
    buildRows();
    buildAutos();
    buildRu();
    buildNc();
    buildRc();
    buildMu();
    buildBattleUI();
    buildVcv();
    render();
  }

  function buildRu() {
    ruCards.length = 0;
    for (let row = 0; row < 2; row++) {
      const host = $('renRow' + (row + 2)); host.innerHTML = '';
      for (let j = 0; j < 5; j++) {
        const i = row * 5 + j, def = RU_DEFS[i];
        const d = document.createElement('article');
        d.className = 'ren-card ru-card locked';
        const name = tr(def.name, def.enName);
        const desc = tr(def.desc, def.enDesc);
        d.innerHTML = '<h3>' + def.key + ' · ' + name + '</h3>' +
          '<p class="ren-fx">' + desc + '</p>' +
          '<p class="ren-price">' + tr('价格', 'Price') + ' <span class="num ru-price">0</span></p>' +
          '<p class="ren-owned ru-state">' + tr('未解锁', 'Locked') + '</p>' +
          '<button class="ren-buy ru-buy">' + tr('购买', 'Buy') + '</button>';
        host.appendChild(d);
        const price = d.querySelector('.ru-price'), state = d.querySelector('.ru-state'), buy = d.querySelector('.ru-buy');
        const now = d.querySelector('.ru-now');
        buy.addEventListener('click', () => { if (buyRu(i)) { render(); save(); } });
        ruCards.push({ root: d, price: price, state: state, buy: buy, def: def, now: now });
      }
    }
  }

  let toastTimer = 0;

  let ncBannerTimer = 0;

  let stampTimer = 0;

  function showStamp(text) {
    el.stampText.textContent = text;
    el.stampOverlay.hidden = false;
    if (el.stampSeal.style) {
      el.stampSeal.style.animation = 'none';
      void el.stampSeal.offsetWidth;
      el.stampSeal.style.animation = '';
    }
    clearTimeout(stampTimer);
    stampTimer = setTimeout(() => { el.stampOverlay.hidden = true; }, 2200);
  }

  function showNcBanner(n, first) {
    el.ncBanner.hidden = true;
    showStamp(NC_DEFS[n - 1].key + ' · ' + tr(NC_DEFS[n - 1].name, NC_DEFS[n - 1].enName));
  }

  let noticeTimer = 0;

  function notice(text) {
    el.notice.textContent = text;
    el.notice.hidden = false;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => { el.notice.hidden = true; }, 4200);
  }

  function ask(flag, msg) { return !flag || confirm(msg); }

  function say(msg) {    el.toast.textContent = msg;
    el.toast.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('on'), 1600);
  }

  function translateTextNode(n, map) {
    if (!n || typeof n.nodeValue !== 'string') return;
    const m = n.nodeValue.match(/^(\s*)(.*?)(\s*)$/s);
    if (!m) return;
    const cur = n.nodeValue;
    /* 动态节点每帧会被重写：内容变了就把当前中文记作新的源键。 */
    if (n.__i18nOut === undefined || cur !== n.__i18nOut) n.__i18nKey = m[2];
    const key = n.__i18nKey;
    const out = Object.prototype.hasOwnProperty.call(map, key) ? map[key] : key;
    if (out !== m[2]) n.nodeValue = m[1] + out + m[3];
    n.__i18nOut = n.nodeValue;
  }

  function translateAttr(el, attr, map) {
    const cur = el.getAttribute(attr);
    if (cur === null || cur === '') return;
    if (!el.__i18nAttr) el.__i18nAttr = {};
    const rec = el.__i18nAttr[attr];
    if (!rec || rec.out !== cur) el.__i18nAttr[attr] = { key: cur, out: cur };
    const key = el.__i18nAttr[attr].key;
    const out = Object.prototype.hasOwnProperty.call(map, key) ? map[key] : key;
    if (out !== cur) el.setAttribute(attr, out);
    el.__i18nAttr[attr].out = out;
  }

  function translateDom() {
    if (!document.body || !document.createTreeWalker) return;
    const lang = (typeof S !== 'undefined' && S.lang) || 'zh';
    const table = I18N.langs[lang] || I18N.langs[I18N.fallback] || { map: ZH_TEXT };
    const map = table.map || ZH_TEXT;
    if (!document.__i18nTitleKey) document.__i18nTitleKey = document.title;
    const titleKey = document.__i18nTitleKey;
    document.title = Object.prototype.hasOwnProperty.call(map, titleKey) ? map[titleKey] : titleKey;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let n;
    while ((n = w.nextNode())) {
      const p = n.parentNode;
      if (p && (p.tagName === 'SCRIPT' || p.tagName === 'STYLE' || p.tagName === 'TEXTAREA')) continue;
      translateTextNode(n, map);
    }
    const attrs = ['placeholder', 'title'];
    for (const attr of attrs) {
      const list = document.querySelectorAll('[' + attr + ']');
      for (const node of list) translateAttr(node, attr, map);
    }
  }

  function syncLanguageUI() {
    if (!el.langSel) return;
    const opts = I18N.list();
    if (el.langSel._i18n !== opts.join(',')) {
      el.langSel._i18n = opts.join(',');
      el.langSel.innerHTML = opts.map(c => '<option value="' + c + '">' + I18N.langs[c].name + '</option>').join('');
    }
    el.langSel.value = S.lang;
  }

  let translatedLang = null;

  function setLanguage(code) {
    if (code && I18N.has(code)) S.lang = code;
    document.documentElement.lang = S.lang === 'zh' ? 'zh-CN' : (S.lang || 'zh');
    syncLanguageUI();
    translatedLang = null;
    translateDom();
    buildRows();
    buildAutos();
    buildRu();
    buildNc();
    buildRc();
    buildMu();
    buildBattleUI();
    buildVcv();
    render();
    translateDom();
    translatedLang = S.lang;
  }

  function buildBattleUI() {
    if (!el.exuGrid) return;
    el.exuGrid.innerHTML = '';
    exuCards.length = 0;
    const defs = [
      ['EXU11', '生命调和'], ['EXU12', '生命上限'], ['EXU13', '攻击强化'],
      ['EXU14', '防御强化'], ['EXU15', '等级提升'],
      ['EXU21', '暴击觉醒'], ['EXU22', '细胞经验'], ['EXU23', '经验容纳'],
      ['EXU24', '武器切换'], ['EXU25', '双倍花'],
      ['EXU31', '允许逃跑'], ['EXU32', '快速刷新'], ['EXU33', '献祭经验'],
      ['EXU34', '击杀共鸣'], ['EXU35', '怪物等级经验'],
      ['EXU41', '强敌经验'], ['EXU42', '挑战双倍'], ['EXU43', 'VCV VI 经验'],
      ['EXU44', '饰品栏'], ['EXU45', '未知'], ['EXU51', '经验翻倍']
    ];
    for (let i = 0; i < defs.length; i++) {
      const d = document.createElement('article');
      d.className = 'ren-card' + (i === 20 ? ' exu51' : '');
      d.innerHTML = '<h3>' + defs[i][0] + ' · ' + tr(defs[i][1]) + '</h3><p class="ren-fx"></p><p class="ren-price"></p><button class="ren-buy">' + tr('购买', 'Buy') + '</button>';
      const btn = d.querySelector('button');
      btn.addEventListener('click', () => { if (buyBattleExu(i)) { render(); save(); } });
      el.exuGrid.appendChild(d);
      exuCards.push({ root: d, fx: d.querySelector('.ren-fx'), price: d.querySelector('.ren-price'), btn: btn });
    }
    // EXU51 保持 DOM 在 EXU45 之后，由 grid-column:3 排到 EXU43 下方
    if (el.craftGrid) {
      el.craftGrid.innerHTML = '';
      craftCards.length = 0;
      for (const rec of BATTLE_RECIPES) {
        const d = document.createElement('article');
        d.className = 'ren-card';
        d.innerHTML = '<h3>' + tr(rec.name) + '</h3><p class="ren-fx"></p><p class="ren-price"></p><button class="ren-buy">' + tr('开始合成', 'Start crafting') + '</button>';
        const btn = d.querySelector('button');
        btn.addEventListener('click', () => { if (startCraft(rec.id)) { render(); save(); } });
        el.craftGrid.appendChild(d);
        craftCards.push({ root: d, fx: d.querySelector('.ren-fx'), price: d.querySelector('.ren-price'), btn: btn, rec: rec });
      }
    }
  }

  function renderChaos() {
    if (!el.chaosTabBtn) return;
    el.chaosTabBtn.hidden = !S.chaosUnlocked;
    if (typeof tKey === 'function') {
      el.chaosTabBtn.textContent = tKey('tab.chaos');
      el.chaosGemBtn.textContent = tKey('chaos.gems');
      el.chaosRefineBtn.textContent = tKey('chaos.refine');
      el.chaosUpBtn.textContent = tKey('chaos.upgrades');
      el.chaosMsBtn.textContent = tKey('chaos.milestones');
    }
    const ready = chaosReady();
    el.quickChaosBtn.hidden = !ready;
    el.quickChaosBtn.disabled = !ready;
    if (ready) {
      const g = chaosSoulGain();
      el.quickChaosGain.textContent = fmt(g.shadow);
    }
    el.chaosUnequipCheck.checked = !!S.chaosUnequipOnReset;
    el.chaosCount.textContent = String(S.chaosCount);
    el.shadowSouls.textContent = fmt(S.shadowSouls);
    el.lightSouls.textContent = fmt(S.lightSouls);
    if (el.rawStoneList) {
      if (S.refining) {
        const r = S.refining;
        let total = 0;
        for (let i = 1; i <= 128; i++) total += r.status[i] || 0;
        let vals = '';
        for (let i = 1; i <= 16; i++) vals += (r.status[i] || 0) + ' ';
        let h = '<p>' + tr('温度 ') + '<b>' + r.temp + 'K</b> · ' + tr('共鸣 ') + fmt(BN.from(r.resonance)) + ' · ' + tr('总和 ') + total + '</p>' +
          '<p class="set-hint">Status[1..16]: ' + vals + '…</p>' +
          '<p>' + ['water','milk','magma','honey','nitrogen','mercury'].map(k =>
            '<button class="mini" onclick="if(chaosInject(\'' + k + '\')){render();save();}">' +
            tr({water:'水',milk:'牛奶',magma:'岩浆',honey:'蜂蜜',nitrogen:'液氮',mercury:'汞'}[k]) + '</button>').join(' ') + '</p>' +
          '<button class="ren-btn" onclick="if(chaosExtract()){render();save();}">' + tr('取出宝石') + '</button>';
        el.rawStoneList.innerHTML = h;
      } else {
        let h = '';
        for (const raw of S.rawStones) {
          h += '<div class="ren-card"><h3>' + tr(gemPrefix(raw.resonance) + '原石') + '</h3><p class="ren-fx">' + tr('共鸣 ') + fmt(BN.from(raw.resonance)) + '</p><button class="ren-buy" onclick="if(chaosRefineStart(\'' + raw.id + '\')){render();save();}">' + tr('炼化') + '</button></div>';
        }
        el.rawStoneList.innerHTML = h || '<p class="set-hint">' + tr('暂无宝石原石。') + '</p>';
      }
    }
    if (el.gemBag) {
      let h = '';
      for (const g of S.gems) {
        const eff = g.effects.map(e => tr({renown:'声望',env:'环境单次',cv:'CV',vcv:'VCV',nucleus:'地核CV',xp:'经验'}[e.key]) + '×' + e.value.toPrecision(4)).join(' · ');
        h += '<div class="ren-card" ondblclick="if(gemEquip(\'' + g.id + '\')){render();save();}"><h3>' + tr(g.name) + '</h3><p class="ren-fx">' + eff + '</p><p class="set-hint">' + tr('双击装备') + '</p></div>';
      }
      el.gemBag.innerHTML = h || '<p class="set-hint">' + tr('暂无宝石。') + '</p>';
    }
    if (el.gemSlots) {
      let h = '';
      for (let i = 0; i < 2; i++) {
        const id = S.gemSlots[i], g = S.gems.find(x => x.id === id);
        h += '<div class="ren-card"><h3>' + tr('槽位 ') + (i + 1) + '</h3><p class="ren-fx">' + (g ? tr(g.name) : tr('空')) + '</p></div>';
      }
      el.gemSlots.innerHTML = h;
    }
    if (el.chaosMsPane) {
      const ms = [
        [1, '保留自动购买器'], [2, '自动购买最大 VCV'], [3, '保留累计献祭'],
        [4, '经验 ×(1+混沌次数×5)²'], [5, '自动购买 EXU12-14/51'], [7, '开局 10000 细胞'],
        [10, '自动 VCV 提升'], [30, '地脉提升不重置细胞'], [50, '环境上限不消耗细胞'],
        [70, '声望次数 ×15'], [100, '自动混沌'], [200, '被动混沌']
      ];
      let h = '';
      for (const [n, name] of ms) {
        const on = S.chaosCount >= n;
        h += '<div class="ren-card' + (on ? '' : ' locked') + '"><h3>' + n + tr(' 次') + '</h3><p class="ren-fx">' + tr(name) + '</p><p class="ren-price">' + (on ? tr('已解锁') : tr('未解锁')) + '</p></div>';
      }
      el.chaosMsPane.innerHTML = '<div class="ren-upgrades">' + h + '</div>';
    }
  }

  function renderBattle() {
    if (!el.battleBtn) return;
    el.battleBtn.hidden = !S.battleUnlocked;
    if (!S.battleUnlocked) {
      el.battlePane.hidden = true;
      return;
    }
    const b = S.battle;
    el.battleXp.textContent = fmt(safeNum(Math.floor(b.xp)));
    el.battleLevel.textContent = 'Lv.' + b.level;
    el.battleHp.textContent = fmt(safeNum(Math.floor(b.hp))) + '/' + fmt(safeNum(battleMaxHp()));
    el.battleAtk.textContent = fmt(safeNum(Math.floor(b.atk * battleWeaponAtkMul() * (b.accessory === 'stone' ? 1.1 : 1))));
    el.battleDef.textContent = fmt(safeNum(Math.floor(b.def * battleWeaponDefMul())));
    el.battleCrit.textContent = b.crit ? Math.min(80, 1 + b.clover * 5) + '%' : '—';
    el.battleAutoBtn.textContent = tr('自动攻击：') + (b.autoAttack ? tr('开') : tr('关'));
    el.battleFleeBtn.hidden = !b.exu[10];
    el.battleSpawnBtn.hidden = !b.exu[11];
    el.battleSpawnBtn.textContent = tr('刷新：') + (b.spawnOn ? tr('开') : tr('关'));
    let bag = '<p>' + tr('经验之花 ×') + b.flowers + '</p><p>' + tr('四叶草 ×') + b.clover + '</p>';
    for (const k in b.materials) if (b.materials[k] > 0) bag += '<p>' + tr(BATTLE_MATERIAL_NAMES[k] || k) + ' ×' + b.materials[k] + '</p>';
    const wname = BATTLE_WEAPON_NAMES;
    bag += '<p>' + tr('武器：') + tr(wname[b.weapon] || '树枝') + '</p>';
    if (b.weapon === 'urchin') bag += '<p>' + tr('声望结晶获得 ^1.05 / 防御 ×1.1 / 无法回血') + '</p>';
    if (b.weapon === 'gel') bag += '<p>' + tr('VCV 产量 ×2 / 攻击 ×0.8') + '</p>';
    if (b.weapon === 'gelSword') bag += '<p>' + tr('攻击 +5') + '</p>';
    if (b.weapon === 'phosphorNet') bag += '<p>' + tr('攻击 +20% / 命中 3% 重置敌人攻击') + '</p>';
    if (b.weapon === 'batClub') bag += '<p>' + tr('命中回复生命') + '</p>';
    if (b.exu[8]) {
      bag += '<p>' + tr('切换武器：') + '</p>';
      for (const w of b.weapons) bag += '<button type="button" class="mini" data-weapon="' + w + '" onpointerdown="if(window.battleEquipWeapon(\'' + w + '\')){window.render();window.save();}" onclick="if(window.battleEquipWeapon(\'' + w + '\')){window.render();window.save();}">' + tr(wname[w] || w) + '</button> ';
    } else {
      bag += '<p class="set-hint">' + tr('购买 EXU24 后可切换武器') + '</p>';
    }
    if (b.accessories.length) {
      bag += '<p>' + tr('饰品：') + (BATTLE_ACCESSORY_NAMES[b.accessory] ? tr(BATTLE_ACCESSORY_NAMES[b.accessory]) : tr('无')) + '</p>';
      if (b.exu[18]) for (const a of b.accessories) bag += '<button type="button" class="mini" data-accessory="' + a + '" onpointerdown="if(window.battleEquipAccessory(\'' + a + '\')){window.render();window.save();}" onclick="if(window.battleEquipAccessory(\'' + a + '\')){window.render();window.save();}">' + tr(BATTLE_ACCESSORY_NAMES[a] || a) + '</button> ';
      else bag += '<p class="set-hint">' + tr('购买 EXU44 解锁饰品栏') + '</p>';
    }
    if (bag !== battleBagSig) {
      battleBagSig = bag;
      el.battleBag.innerHTML = bag;
      if (typeof el.battleBag.querySelectorAll === 'function') {
        el.battleBag.querySelectorAll('[data-weapon]').forEach(btn => {
          btn.addEventListener('pointerdown', () => {
            const w = btn.dataset.weapon;
            if (w && S.battle.exu[8] && S.battle.weapons.includes(w)) {
              S.battle.weapon = w; render(); save();
            }
          });
        });
        el.battleBag.querySelectorAll('[data-accessory]').forEach(btn => {
          btn.addEventListener('pointerdown', () => {
            const a = btn.dataset.accessory;
            if (a && S.battle.exu[18] && S.battle.accessories.includes(a)) {
              S.battle.accessory = a; render(); save();
            }
          });
        });
      }
    }
    let mh = '';
    for (const m of b.monsters) {
      const pct = Math.max(0, Math.min(100, isFinite(m.hp / m.maxHp) ? m.hp / m.maxHp * 100 : 0));
      mh += '<div class="battle-monster"><b>' + monsterDisplayName(m) + '</b> · ' + m.type + tr('型 · Lv.') + m.level + ' · R' + (m.rarity || 0).toFixed(1) +
        '<br>HP ' + fmt(safeNum(Math.max(0, Math.floor(m.hp)))) + ' / ' + fmt(safeNum(m.maxHp)) + ' · ATK ' + fmt(safeNum(m.atk)) + ' · DEF ' + fmt(safeNum(m.def)) +
        '<div class="bar"><i style="width:' + pct + '%"></i></div></div>';
    }
    el.battleMonsters.innerHTML = mh || '<p class="set-hint">' + tr('暂无怪物，等待刷新…') + '</p>';
    el.battleMonsterHint.textContent = b.monsters.length ? tr('自动攻击最近的怪物') : tr('刷新倒计时 ') + Math.max(1, Math.ceil(b.spawnTimer)) + tr(' 秒');
    for (let i = 0; i < exuCards.length; i++) {
      const c = exuCards[i]; if (!c) continue;
      const cost = battleExuCost(i);
      const lv = b.exu[i] || 0;
      const unlocked = battleExuUnlocked(i);
      c.root.hidden = i === 20 && !unlocked;
      c.root.style.display = c.root.hidden ? 'none' : '';
      c.root.classList.toggle('locked', !unlocked);
      c.price.textContent = tr('经验 ') + fmt(BN.from(cost)) + (i >= 5 && lv ? tr(' · 已购买') : '');
      c.btn.textContent = i === 20 ? tr('购买 ×') + lv : (i >= 5 ? (lv ? tr('已购买') : tr('购买')) : tr('购买 ×') + lv);
      const condLock = !unlocked;
      c.btn.disabled = (i >= 5 && i !== 20 && lv > 0) || b.xp < cost || condLock;
      c.fx.textContent = tr(
        i === 0 ? '当前生命与上限的平均值' :
        i === 1 ? '生命上限 ×1.8^等级' :
        i === 2 ? '攻击力 ×1.5^等级' :
        i === 3 ? '防御力 +(等级+1)(等级+2)' :
        i === 4 ? '玩家与怪物等级 +1，清空 EXU11-14 并重置生命/攻击/防御' :
        i === 5 ? '暴击 1%，暴伤 10%；四叶草提升' :
        i === 6 ? '经验获得 ×lg(细胞数量)' :
        i === 7 ? '最大经验 ^10 加成环境上限' :
        i === 8 ? '解锁武器切换；默认树枝无效果' :
        i === 9 ? '经验之花数量 ×2' :
        i === 10 ? '解锁逃跑，逃跑无经验' :
        i === 11 ? '刷新时间为 1/5，可开关刷新' :
        i === 12 ? '献祭声望结晶 lg 加成经验' :
        i === 13 ? '击杀总数为 VCV 提供加成' :
        i === 14 ? '怪物等级为经验提供加成' :
        i === 15 ? '等级经验 ×(等级+2)²' :
        i === 16 ? '每次经验 ×2' :
        i === 17 ? '经验为 VCV VI 提供加成' :
        i === 18 ? '解锁饰品栏' :
        i === 19 ? '效果未定' : '每次购买经验 ×2'
      );
      const conds = { 15: '击杀 HP>100 的怪物', 16: 'RC1 中 0 地脉之花达到 1e6000 细胞', 17: '达到 Lv.2', 18: '拥有 5 种不同武器', 19: '达到 1e1000 声望结晶和 1e80000 细胞' };
      if (!unlocked && conds[i]) c.fx.textContent = tr('解锁条件：') + tr(conds[i]) + ' · ' + c.fx.textContent;
    }
    for (const c of craftCards) {
      const rec = c.rec;
      const costText = Object.keys(rec.cost).map(k => tr(BATTLE_MATERIAL_NAMES[k] || k) + '×' + rec.cost[k]).join(' · ');
      c.price.textContent = costText + ' · ' + rec.time + 's';
      c.fx.textContent = tr(rec.type === 'weapon' ? '武器' : rec.type === 'accessory' ? '饰品' : '材料');
      c.btn.disabled = !!b.crafting || !canCraft(rec);
      if (b.crafting && b.crafting.id === rec.id) {
        const done = Math.min(100, b.crafting.t / rec.time * 100);
        c.btn.textContent = tr('合成中 ') + done.toFixed(0) + '%';
      } else c.btn.textContent = tr('开始合成');
    }
  }

  function buildMu() {
    if (!el.muGrid) return;
    el.muGrid.innerHTML = '';
    muCards.length = 0;
    for (let i = 0; i < MU_DEFS.length; i++) {
      const def = MU_DEFS[i];
      const d = document.createElement('article');
      d.className = 'ren-card';
      d.innerHTML = '<h3>' + def.key + ' · ' + tr(def.name) + '</h3><p class="ren-fx"></p><p class="ren-price"></p><button class="ren-buy">' + tr('购买', 'Buy') + '</button>';
      const btn = d.querySelector('button');
      btn.addEventListener('click', () => { if (buyMu(i)) { render(); save(); } });
      el.muGrid.appendChild(d);
      muCards.push({ root: d, fx: d.querySelector('.ren-fx'), price: d.querySelector('.ren-price'), btn: btn });
    }
  }

  function renderNucleus() {
    if (!el.nucleusBtn) return;
    const unlocked = nucleusUnlocked();
    el.nucleusBtn.hidden = !unlocked;
    if (!unlocked) {
      el.nucleusPane.hidden = true;
      el.renMainPane.hidden = false;
      el.renMainBtn.classList.add('active');
      el.nucleusBtn.classList.remove('active');
      el.nucleusEnterBtn.disabled = true;
      el.nucleusEnterBtn.textContent = tr('献祭值大于 1e64 方可进入');
      return;
    }
    el.nucleusEnterBtn.disabled = false;
    el.nucleusEnterBtn.textContent = tr('进入地核');
    el.nucleusLocked.hidden = S.nucleusIn;
    el.nucleusActive.hidden = !(S.nucleusIn || S.nucleusResets > 0);
    el.muWrap.hidden = S.nucleusResets <= 0;
    if (!S.nucleusIn && S.nucleusResets <= 0) return;
    el.nucleusCrystals.textContent = fmt(S.nucleusCrystals);
    el.nucleusResets.textContent = String(S.nucleusResets);
    el.nucleusGain.textContent = S.nucleusIn ? fmt(nucleusGain()) : '—';
    el.nucleusCells.textContent = fmt(S.cells);
    const can = S.nucleusIn && S.cells.cmp(1e100) >= 0;
    el.nucleusResetBtn.disabled = !can;
    el.nucleusExitBtn.hidden = !S.nucleusIn;
    el.nucleusHint.textContent = can ? tr('将获得 ') + fmt(nucleusGain()) + tr(' 地核结晶') : tr('细胞达到 1e100 后可重置');
    for (let i = 0; i < MU_DEFS.length; i++) {
      const c = muCards[i]; if (!c) continue;
      const def = MU_DEFS[i], l = muCount(i);
      let name = '';
      if (i === 0) name = tr('所有 VCV 倍率 ×2^') + l;
      else if (i === 1) name = tr('环境上限 ×100^') + l;
      else if (i === 2) name = tr('CV 超指数增长 ×') + Math.max(10, 100 * Math.pow(0.95, l)).toFixed(2);
      else if (i === 3) name = tr('单级地脉提升 ×') + (10 * Math.pow(2, l));
      else if (i === 4) name = tr('花效果 ×') + Math.pow(1.05, l).toFixed(3);
      else if (i === 5) name = tr('地核外：地核结晶以 ^2 加成 VCV');
      else if (i === 6) name = tr('最短 NC 游戏时间提供容纳量');
      else if (i === 7) name = S.mu[7] ? tr('自动花满已解锁') : tr('自动花满');
      else if (i === 8) name = tr('VCV I 获得花数加成');
      else if (i === 9) name = tr('容纳柔化 ^0.6');
      c.fx.textContent = name;
      const price = BN.from(def.price(def.rep ? l : 0));
      const gone = i === 2 && 100 * Math.pow(0.95, l) <= 10;
      c.price.textContent = gone ? tr('已达下限') : tr('价格 ') + fmt(price);
      c.btn.textContent = def.rep ? (gone ? tr('已满') : tr('购买')) : (l ? tr('已购买') : tr('购买'));
      c.btn.disabled = gone || (!def.rep && l > 0) || S.nucleusCrystals.cmp(price) < 0;
    }
  }

  function renderStats() {
    const em = envMul(), lm = leyMul(), cb = capBoost();
    el.statNcBtn.hidden = S.renResets <= 0;
    el.statNcBtn.disabled = S.renResets <= 0;
    el.statNcBtn.textContent = tr('挑战记录', 'Challenge Records');
    el.statResetBtn.hidden = S.renResets <= 0;
    el.statResetBtn.disabled = S.renResets <= 0;
    if (S.renResets <= 0 && !el.statNc.hidden) {
      el.statNc.hidden = true; el.statGeneral.hidden = false;
      el.statNcBtn.classList.remove('active'); el.statGeneralBtn.classList.add('active');
    }
    const statsVisible = typeof el.tabStat.classList.contains !== 'function' || el.tabStat.classList.contains('active');
    if (!statsVisible) return;
    const wall = Math.max(0, (Date.now() - S.createdAt) / 1000);
    const layers = [];
    if (S.renownUnlocked) {
      layers.push(['声望重置', S.renResets, S.renFastest, S.renTime, S.renBestRate]);
      layers.push(['地脉提升', S.leyResets, S.leyFastest, S.leyTime, S.leyBestRate]);
      layers.push(['地脉之花', S.flowerResets, S.flowerFastest, S.flowerTime, S.flowerBestRate]);
    }
    let layerRows = '';
    for (const [name, count, fast, cur, best] of layers) {
      layerRows += '<tr><td>' + tr(name) + '</td><td class="num">' + count + '</td><td class="num">' +
        (fast === null ? '—' : fmtDur(fast)) + '</td><td class="num">' + fmtDur(cur) +
        '</td><td class="num">' + (best === null ? '—' : fmt(best)) + '</td></tr>';
    }
    el.statGeneral.innerHTML =
      '<div class="stat-cards">' +
        '<div class="stat-card"><span>' + tr('存档创建时间') + '</span><b>' + new Date(S.createdAt).toLocaleString() + '</b></div>' +
        '<div class="stat-card"><span>' + tr('游玩时间（现实，不计离线）') + '</span><b>' + fmtDur(S.playTime) + '</b></div>' +
        '<div class="stat-card"><span>' + tr('游戏内时间') + '</span><b>' + fmt(S.gameTime) + tr(' 秒') + '</b></div>' +
        '<div class="stat-card"><span>' + tr('游玩时间（现实，计入离线）') + '</span><b>' + fmtDur(wall) + '</b></div>' +
        '<div class="stat-card"><span>' + tr('最大细胞数量') + '</span><b>' + fmt(S.maxCells) + '</b></div>' +
        '<div class="stat-card"><span>' + tr('累计生产细胞') + '</span><b>' + fmt(S.totalCells) + '</b></div>' +
      '</div>' +
      (layers.length ? '<table><tr><th>' + tr('重置层') + '</th><th>' + tr('次数') + '</th><th>' + tr('最快重置（现实）') + '</th><th>' + tr('本轮已用（现实）') + '</th><th>' + tr('最快资源/秒') + '</th></tr>' + layerRows + '</table>' :
        '<p>' + tr('尚未解锁重置层。') + '</p>');

    let ncRows = '', fastest = null, totalAll = 0;
    for (let i = 0; i < 12; i++) {
      const f = S.ncTimes[i], t = S.ncTotal[i] || 0;
      if (f !== null && (fastest === null || f < fastest)) fastest = f;
      totalAll += f === null ? 0 : f;
      ncRows += '<tr><td>' + NC_DEFS[i].key + '</td><td class="num">' + S.ncAttempts[i] + '</td><td class="num">' +
        (f === null ? '—' : fmtDur(f)) + '</td><td class="num">' + fmtDur(t) + '</td><td class="num">' +
        (S.ncGameTimes[i] === null ? '—' : fmt(S.ncGameTimes[i]) + tr(' 游戏秒')) + '</td><td class="num">' +
        (S.ncMax[i] === null ? '—' : fmt(S.ncMax[i])) + '</td></tr>';
    }
    let rcRows = '';
    for (let i = 0; i < RC_DEFS.length; i++) {
      const f = S.rcTimes[i], gf = S.rcGameTimes[i];
      rcRows += '<tr><td>' + RC_DEFS[i].key + '</td><td class="num">' + S.rcAttempts[i] + '</td><td class="num">' +
        (f === null ? '—' : fmtDur(f)) + '</td><td class="num">' + (gf === null ? '—' : fmt(gf) + tr(' 游戏秒')) +
        '</td><td class="num">' + (S.rcMax[i] === null ? '—' : fmt(S.rcMax[i])) + '</td><td>' + (S.rcDone[i] ? tr('已完成') : tr('未完成')) + '</td></tr>';
    }
    el.statNc.innerHTML = '<div class="stat-cards">' +
      '<div class="stat-card"><span>' + tr('最快挑战') + '</span><b>' + (fastest === null ? '—' : fmtDur(fastest)) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('最短时间之和') + '</span><b>' + fmtDur(totalAll) + '</b></div></div>' +
      '<table><tr><th>' + tr('挑战') + '</th><th>' + tr('次数') + '</th><th>' + tr('最快（现实）') + '</th><th>' + tr('累计（现实）') + '</th><th>' + tr('最快（游戏）') + '</th><th>' + tr('最大细胞') + '</th></tr>' + ncRows + '</table>' +
      '<h3>' + tr('RC 记录') + '</h3><table><tr><th>' + tr('挑战') + '</th><th>' + tr('次数') + '</th><th>' + tr('最快（现实）') + '</th><th>' + tr('最快（游戏）') + '</th><th>' + tr('最大细胞') + '</th><th>' + tr('状态') + '</th></tr>' + rcRows + '</table>';

    const logTable = (layer, label) => {
      const a = S.resetLogs[layer] || [];
      let rows = '';
      for (const x of a) rows += '<tr><td class="num">' + fmtDur(x.t) + '</td><td class="num">' + x.gain +
        '</td><td class="num">' + x.rate + '</td><td>' + (typeof x.challenge === 'string' ? x.challenge : (x.challenge ? tr('挑战') : tr('普通'))) + '</td></tr>';
      return '<h3>' + tr(label) + '</h3><table><tr><th>' + tr('用时') + '</th><th>' + tr('获得') + '</th><th>' + tr('速度') + '</th><th>' + tr('备注') + '</th></tr>' +
        (rows || '<tr><td colspan="4">' + tr('暂无记录') + '</td></tr>') + '</table>';
    };
    el.statReset.innerHTML = logTable('ren', '声望重置');

    const k = envCap();
    const step = envStepBase(), startCap = ruOn(3) ? 1e10 : CFG.startCap;
    const rgain = renownGain(), rbase = renBaseAdd();
    const singleFlower = (ruOn(4) ? 2 : 1) * (S.rcActive === 2 ? 0.1 : 1) * (S.rcDone[1] ? 1.1 : 1);
    const passiveRate = S.renFastest && S.renFastest > 0 && mundisBuff(1e27) ? 0.4 / S.renFastest : 0;
    let tierDetails = '';
    for (let i = 0; i < 6; i++) {
      const rg = i === 0 ? fmt(renTier1Mul()) : '—';
      const ru21 = i <= 3 ? fmt(ru21Mul()) : '—';
      const sac = fmt(sacMulForTier(i));
      let ncNote = S.ncActive ? NC_DEFS[S.ncActive - 1].key : (S.rcActive ? RC_DEFS[S.rcActive - 1].key : '—');
      if (ncOn(5)) ncNote = tr('NC5 ÷lg(细胞)') + (i <= 4 ? tr(' ÷lg(上一级)') : '');
      else if (ncOn(8) && i >= 1) ncNote = tr('NC8 献祭Ⅱ+');
      tierDetails += '<details class="calc-detail" data-key="tier' + i + '"><summary>' + ROMAN[i] + ' · ' + tr(CFG.tiers[i].name) +
        ' · ' + tr('数量') + ' ' + fmt(S.n[i].floor()) + ' · ' + tr('单级倍率') + ' ×' + fmt(effTier(i)) + '</summary>' +
        '<table>' +
        '<tr><td>' + tr('数量') + '</td><td class="num">' + fmt(S.n[i].floor()) + '</td></tr>' +
        '<tr><td>' + tr('购买次数') + '</td><td class="num">' + fmt(BN.from(S.bought[i])) + '</td></tr>' +
        '<tr><td>' + tr('单级倍率') + '</td><td class="num">×' + fmt(effTier(i)) + '</td></tr>' +
        '<tr><td>' + tr('购买乘数 x') + '</td><td class="num">×' + fmt(S.tierX[i]) + '</td></tr>' +
        '<tr><td>' + tr('环境倍率') + '</td><td class="num">×' + fmt(em) + '</td></tr>' +
        '<tr><td>' + tr('地脉倍率') + '</td><td class="num">×' + fmt(lm) + '</td></tr>' +
        '<tr><td>' + tr('环境提升加持') + '</td><td class="num">×' + fmt(cb) + '</td></tr>' +
        '<tr><td>' + tr('声望全倍率') + '</td><td class="num">×' + fmt(renAllMul()) + '</td></tr>' +
        '<tr><td>' + tr('声望回响') + '</td><td class="num">×' + fmt(ru22Mul()) + '</td></tr>' +
        '<tr><td>' + tr('地脉结晶加成') + '</td><td class="num">×' + fmt(cvBoost()) + '</td></tr>' +
        '<tr><td>' + tr('献祭倍率') + '</td><td class="num">×' + sac + '</td></tr>' +
        '<tr><td>' + tr('Ⅰ级声望') + '</td><td class="num">' + rg + '</td></tr>' +
        '<tr><td>ru21</td><td class="num">' + ru21 + '</td></tr>' +
        '<tr><td>' + tr('挑战修正') + '</td><td>' + ncNote + '</td></tr>' +
        '</table></details>';
    }
    let renRows = '';
    const renNames = ['一级地脉倍率', '全部地脉倍率', '环境上限加成', '免费地脉提升', '双倍结晶'];
    const renEffs = ['×' + fmt(renTier1Mul()), '×' + fmt(renAllMul()), '×' + fmt(renCapMul()), '+' + S.renFreeLey, '×' + fmt(BN.from(2).pow(S.renUp[4]))];
    for (let i = 0; i < 5; i++) renRows += '<tr><td>' + tr(renNames[i]) + '</td><td class="num">' + tr('等级 ') + S.renUp[i] + '</td><td class="num">' + renEffs[i] + '</td></tr>';
    let ruRows = '';
    for (let i = 0; i < RU_DEFS.length; i++) ruRows += '<tr><td>' + RU_DEFS[i].key + ' · ' + tr(RU_DEFS[i].name) + '</td><td>' + (S.ru[i] ? tr('已购买') : tr('未购买')) + '</td></tr>';

    if (el.statCalc.querySelectorAll) {
      for (const d of el.statCalc.querySelectorAll('details')) {
        const key = d.dataset && d.dataset.key;
        if (!key) continue;
        if (d.open) statOpenKeys.add(key); else statOpenKeys.delete(key);
      }
    }
    el.statCalc.innerHTML = '<div class="stat-cards">' +
      '<div class="stat-card"><span>' + tr('环境容纳量 k') + '</span><b>' + fmt(k) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('环境基础值') + '</span><b>' + fmt(startCap) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('每次环境提升') + '</span><b>×' + fmt(step) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('环境容纳量增益') + '</span><b>×' + fmt(renCapMul()) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('环境倍率') + '</span><b>×' + fmt(em) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('地脉倍率') + '</span><b>×' + fmt(lm) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('环境提升加持') + '</span><b>×' + fmt(cb) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('声望全倍率') + '</span><b>×' + fmt(renAllMul()) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('声望回响') + '</span><b>×' + fmt(ru22Mul()) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('声望结晶获得') + '</span><b>+' + fmt(rgain) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('本轮最大细胞') + '</span><b>' + fmt(S.renMaxCells) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('声望次数') + '</span><b>' + S.renResets + '</b></div>' +
      '<div class="stat-card"><span>' + tr('被动声望次数') + '</span><b>' + (passiveRate > 0 ? passiveRate.toFixed(3) + tr('/秒') : '—') + '</b></div>' +
      '<div class="stat-card"><span>' + tr('花强度（单朵）') + '</span><b>' + (singleFlower * 100).toFixed(0) + '%</b></div>' +
      '<div class="stat-card"><span>' + tr('生产总倍率') + '</span><b>×' + fmt(prodMul()) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('地脉结晶加成') + '</span><b>×' + fmt(cvBoost()) + '</b></div>' +
      '<div class="stat-card"><span>' + tr('软上限指数') + '</span><b>^' + softExp().toFixed(2) + '</b></div>' +
      '</div>' +
      '<details class="calc-detail" data-key="envcap" open><summary>' + tr('环境容纳量计算') + '</summary><table>' +
      '<tr><td>' + tr('基础值') + (ruOn(3) ? ' (ru24)' : '') + '</td><td class="num">' + fmt(startCap) + '</td></tr>' +
      '<tr><td>' + tr('每次环境提升倍率（花/ru32）') + '</td><td class="num">×' + fmt(step) + '</td></tr>' +
      '<tr><td>' + tr('已购买环境提升') + '</td><td class="num">' + S.cap + '</td></tr>' +
      '<tr><td>' + tr('声望总结晶倍率') + '</td><td class="num">×' + fmt(renCapMul()) + '</td></tr>' +
      (S.ncDone[1] ? '<tr><td>' + tr('NC2 奖励') + '</td><td class="num">×√(1+3×' + S.renTime.toFixed(1) + ')</td></tr>' : '') +
      '<tr><td>' + tr('最终环境容纳量') + '</td><td class="num">' + fmt(k) + '</td></tr></table></details>' +
      '<details class="calc-detail" data-key="rencalc"><summary>' + tr('声望结晶 / 声望次数计算') + '</summary><table>' +
      '<tr><td>' + tr('本轮最大细胞') + '</td><td class="num">' + fmt(S.renMaxCells) + '</td></tr>' +
      '<tr><td>' + tr('公式分母') + '</td><td class="num">' + (mundisBuff(1e12) ? 80 : 100) + '</td></tr>' +
      '<tr><td>' + tr('双倍结晶（2^ru15）') + '</td><td class="num">×' + fmt(BN.from(2).pow(S.renUp[4])) + '</td></tr>' +
      '<tr><td>' + tr('NC3 奖励') + '</td><td class="num">×' + (S.ncDone[2] ? 10 : 1) + '</td></tr>' +
      '<tr><td>' + tr('本次声望结晶') + '</td><td class="num">+' + fmt(rgain) + '</td></tr>' +
      '<tr><td>' + tr('声望次数') + '</td><td class="num">' + S.renResets + '</td></tr>' +
      '<tr><td>' + tr('ru11 底数') + '</td><td class="num">' + (3 + rbase).toFixed(3) + '</td></tr>' +
      '<tr><td>' + tr('ru12 底数') + '</td><td class="num">' + (2 + rbase).toFixed(3) + '</td></tr>' +
      '<tr><td>' + tr('ru22 底数') + '</td><td class="num">' + (1 + 2 * S.renResets).toFixed(3) + '</td></tr>' +
      '<tr><td>' + tr('1e27 被动声望次数') + '</td><td class="num">' + (passiveRate > 0 ? passiveRate.toFixed(4) + tr('/秒') : tr('未解锁')) + '</td></tr>' +
      '</table></details>' +
      '<details class="calc-detail" data-key="renup"><summary>' + tr('声望升级（总乘数）· 一级 ×') + fmt(renTier1Mul()) + tr(' · 全部 ×') + fmt(renAllMul()) + '</summary>' +
      '<table>' + renRows +
      '<tr><td>' + tr('环境上限总乘数') + '</td><td class="num">×' + fmt(renCapMul()) + '</td></tr>' +
      '<tr><td>' + tr('免费地脉提升') + '</td><td class="num">+' + S.renFreeLey + '</td></tr>' +
      '<tr><td>' + tr('双倍结晶') + '</td><td class="num">×' + fmt(BN.from(2).pow(S.renUp[4])) + '</td></tr>' +
      '</table><table>' + ruRows + '</table></details>' +
      '<details class="calc-detail" data-key="tiers"><summary>' + tr('每级地脉增益（默认折叠）') + '</summary>' + tierDetails + '</details>';
    if (el.statCalc.querySelectorAll) {
      for (const d of el.statCalc.querySelectorAll('details')) {
        const key = d.dataset && d.dataset.key;
        if (key && statOpenKeys.has(key)) d.open = true;
      }
    }
  }

  function renderRc() {
    if (!el.chRcBtn) return;
    const unlocked = rcUnlocked();
    el.chRcBtn.hidden = !unlocked;
    if (!unlocked) {
      el.rcPane.hidden = true;
      el.ncPane.hidden = false;
      el.chRcBtn.classList.remove('active');
      el.chNcBtn.classList.add('active');
    }
    for (let i = 0; i < RC_DEFS.length; i++) {
      const c = rcCards[i]; if (!c) continue;
      c.root.hidden = i >= 6 && !rc7Unlocked();
      const done = S.rcDone[i], active = S.rcActive === i + 1;
      if (done) {
        c.badge.textContent = tr('已完成', 'Completed');
        c.fill.style.width = '100%';
        c.progress.textContent = tr('已完成 · 可再次挑战', 'Completed · challenge again');
        c.btn.textContent = tr('再次挑战', 'Challenge Again');
        c.btn.disabled = !!S.rcActive || !!S.ncActive;
        c.root.classList.add('done');
      } else {
        c.root.classList.remove('done');
        if (active) {
          c.badge.textContent = tr('进行中', 'In Progress');
          const lg = S.cells.log10().toNumber(), lt = RC_TARGET[i].log10().toNumber();
          const pct = Math.max(0, Math.min(100, lg / lt * 100));
          c.fill.style.width = pct + '%';
          c.progress.textContent = fmt(S.cells) + ' / ' + fmt(RC_TARGET[i]);
          if (S.rcActive === 8) c.progress.textContent += tr(' · 奇异物质 ') + fmt(S.strange);
          if (S.rcActive === 10) c.progress.textContent += tr(' · 反物质 ') + fmt(S.antimatter);
          if (S.rcActive === 11) c.progress.textContent += tr(' · 禁用 CV ') + ROMAN[[0,2,4,1,3,5][S.rcSeq]];
          c.btn.textContent = S.cells.cmp(RC_TARGET[i]) >= 0 ? tr('完成RC', 'Complete RC') : tr('放弃', 'Abandon');
          c.btn.disabled = false;
        } else {
          c.badge.textContent = S.ncActive ? tr('NC 进行中', 'NC in progress') : (S.rcActive ? tr('不可开始', 'Cannot start') : tr('未完成', 'Incomplete'));
          c.fill.style.width = '0%';
          c.progress.textContent = tr('目标：', 'Goal: ') + fmt(RC_TARGET[i]) + tr(' 细胞', ' cells');
          c.btn.textContent = tr('开始', 'Start');
          c.btn.disabled = !!S.rcActive || !!S.ncActive;
        }
      }
    }
  }

  function renderMundisDialog(review) {
    if (!S.mundisDialogActive) { el.mundisDialog.hidden = true; return; }
    el.mundisDialog.hidden = false;
    const lines = (S.mundisSpecialLines && S.mundisSpecialLines.length)
      ? S.mundisSpecialLines.map(x => tr(x))
      : (S.mundisSpecialLine ? [tr(S.mundisSpecialLine)] : MUNDIS_LINES.map((x, i) => tr(x, MUNDIS_LINES_EN[i])));
    const idx = Math.min(S.mundisDialogIndex, lines.length - 1);
    el.mundisDialogLine.textContent = lines[idx];
    let log = '';
    for (let i = 0; i < idx; i++) log += '<p>' + lines[i] + '</p>';
    el.mundisDialogLog.innerHTML = log || '<p>…</p>';
    el.mundisNextBtn.textContent = idx >= lines.length - 1 ? tr('结束对话', 'End') : tr('继续', 'Continue');
    el.mundisReviewBtn.textContent = tr('回顾之前的对话', 'Review previous dialogue');
    if (review) el.mundisDialogLog.scrollTop = el.mundisDialogLog.scrollHeight;
  }

  function renderDeity() {
    el.tabDeityBtn.hidden = !S.mundisUnlocked;
    if (!S.mundisUnlocked) return;
    el.mundisSacrifice.textContent = fmt(S.mundisSacrifice);
    el.mundisSacBtn.disabled = S.renown.isZero();
    el.mundisOfferHint.textContent = S.renown.isZero()
      ? tr('当前没有可献祭的声望结晶', 'No renown crystals to offer')
      : tr('将献祭 ', 'Will offer ') + fmt(S.renown) + tr(' 声望结晶', ' crystals');
    const buffs = [
      [1e9, tr('自动购买器买最大间隔 0.1 秒', 'Auto-buyer max interval 0.1s')],
      [1e12, tr('声望公式：10^((lg(细胞)-100)/80)', 'Renown formula: 10^((lg(cells)-100)/80)')],
      [1e15, tr('解锁购买最大环境上限提升', 'Unlock Buy Max Environment Cap')],
      [1e16, tr('地脉提升效果 +60%', 'Leyline Boost effect +60%')],
      [1e20, tr('ru11/ru12 底数 +lg(10+12×声望次数)', 'ru11/ru12 base +lg(10+12×resets)')],
      [1e24, tr('解锁购买最大地脉提升', 'Unlock Buy Max Leyline Boost')],
      [1e25, tr('解锁声望挑战 RC', 'Unlock Renown Challenges (RC)')],
      [1e27, tr('按最快声望速度的 40% 被动生产声望次数', 'Passively produce renown count at 40% of fastest speed')],
      [1e100, tr('解锁自动购买 ru11-15', 'Unlock auto-buy for ru11–ru15')],
      [1e120, tr('解锁 RC7-12', 'Unlock RC7–RC12')]
    ];
    let bh = '';
    for (const [t, name] of buffs) {
      const on = mundisBuff(t);
      bh += '<div class="mundis-buff' + (on ? ' on' : '') + '"><span>' + fmt(t) + '</span><span>' + name + '</span><span>' + (on ? tr('已解锁') : tr('未解锁')) + '</span></div>';
    }
    el.mundisBuffs.innerHTML = bh;
    el.mundisQuotes.innerHTML = S.mundisQuotes.length
      ? S.mundisQuotes.map(x => '<p>' + tr(x) + '</p>').join('')
      : '<p>' + tr('暂无语录。', 'No quotes yet.') + '</p>';
  }

  function render() {
    document.documentElement.lang = S.lang === 'zh' ? 'zh-CN' : (S.lang || 'zh');
    const k = envCap(), em = envMul(), lm = leyMul(), cb = capBoost();
    const pm = prodMul(), inc = cellRate();
    checkRenownUnlock();
    updateRuUnlocks();
    checkMundisUnlock();
    if (nucleusUnlocked() && !S.nucleusIntroSeen) {
      S.nucleusIntroSeen = true;
      S.mundisSpecialLine = '你还暂时配不上我准备的试炼。先给你一个简单的。';
      S.mundisSeen = true;
      S.mundisDialogActive = true;
      S.mundisDialogIndex = 0;
      save();
    }

    el.cells.textContent = fmt(S.cells);
    el.rate.textContent = '+' + fmt(inc) + tr(' / 秒');
    const effSpeed = S.speed.mul(S.rcActive === 3 ? 0.001 : 1);
    el.speedText.textContent = effSpeed.cmp(1) === 0 ? tr('游戏以正常速度运行') :
      (effSpeed.cmp(1) < 0 ? tr('游戏速度：1/') + fmt(BN.one().div(effSpeed)) : tr('游戏速度：×') + fmt(effSpeed));
    el.k.textContent = fmt(k);
    el.envmul.textContent = '×' + fmt(em);
    el.leymul.textContent = '×' + (lm.toNumber() < 1e6 ? lm.toNumber().toFixed(2) : fmt(lm));
    el.capboost.textContent = '×' + fmt(cb);
    const bf = S.battle ? S.battle.flowers : 0;
    el.flowers.textContent = bf > 0 ? S.flower + '+' + bf + '=' + (S.flower + bf) : String(S.flower);
    el.xmul.textContent = '×' + xMul().toFixed(2);
    el.envCount.textContent = '(' + S.cap + ')';
    const paidLey = Math.max(0, S.ley - S.renFreeLey);
    el.leyCount.textContent = S.renFreeLey > 0 ? '(' + paidLey + '+' + S.renFreeLey + '=' + S.ley + ')' : '(' + S.ley + ')';
    el.flCount.textContent = '(' + (bf > 0 ? S.flower + '+' + bf + '=' + (S.flower + bf) : S.flower) + ')';
    for (let i = 0; i < 5; i++) el.renTitle[i].textContent = '(' + S.renUp[i] + ')';
    el.ncTabState.textContent = S.ncUnlocked ? '' : '🔒';
    el.tabNcBtn.hidden = !S.ncUnlocked;
    el.tabRenBtn.hidden = !S.renownUnlocked;
    el.subVcvBtn.hidden = !S.ru[8];
    el.subVcvBtn.disabled = !S.ru[8];
    el.subVcvBtn.textContent = tr('地脉之力') + (S.ru[8] ? '' : ' 🔒');
    if (!S.ru[8] && !el.subVcv.hidden) {
      el.subVcv.hidden = true; el.subMain.hidden = false;
      el.subVcvBtn.classList.remove('active'); el.subMainBtn.classList.add('active');
    }
    el.crystal.textContent = fmt(S.crystal);
    el.crystalBoost.textContent = '×' + fmt(cvBoost());
    el.vcvRate.textContent = fmt(vcvRate());    const vuc = vcvUpCost();
    el.vcvUpBtn.disabled = !S.ru[8] || S.crystal.cmp(vuc) < 0;
    el.vcvUpBtn.textContent = tr('升级 VCV 倍率 ×10');
    el.vcvUpInfo.textContent = tr('价格 ') + fmt(vuc) + tr(' 地脉结晶 · 已购 ') + S.vcvUp;
    for (let i = 0; i < 6; i++) {
      const c = vcvCards[i]; if (!c) continue;
      const unlocked = vcvUnlocked(i);
      c.root.classList.toggle('locked', !unlocked);
      c.state.textContent = unlocked ? tr('已解锁') : (i === 0 ? tr('完成所有 NC') : tr('后续解锁'));
      c.state.className = 'vcv-state' + (unlocked ? ' on' : '');
      c.unlock.textContent = tr(i === 0 ? '解锁条件：完成全部 12 个 NC' :
        (i === 1 ? '解锁条件：所有 NC 的最快时间之和 < 8 秒' :
        (i === 2 ? '解锁条件：在地核中达到 1e120 细胞' : (i === 3 ? '解锁条件：地核中进入 RC5 并达到 1.8e308 细胞' : (i === 4 ? '解锁条件：地核中不买环境/地脉提升/花，达到 1e800 细胞' : '解锁条件：后续版本开放')))));
      c.titleCount.textContent = '(' + S.vcvBought[i] + ')';
      c.count.textContent = fmt(BN.from(S.vcv[i]));
      c.mult.textContent = fmt(vcvMult(i));
      c.rate.textContent = fmt(vcvRateAt(i));
      c.unit.textContent = i === 0 ? tr('结晶/秒') : 'VCV ' + ROMAN[i - 1] + tr('/秒');
      const cost = vcvCost(i);
      c.cost.textContent = fmt(cost);
      c.btn.disabled = !S.ru[8] || !unlocked || S.renown.cmp(cost) < 0;
      c.maxBtn.hidden = !S.rcDone[6];
      c.maxBtn.disabled = !S.ru[8] || !unlocked || S.renown.cmp(cost) < 0;
    }
    for (let i = 0; i < NC_DEFS.length; i++) {
      const c = ncCards[i];
      if (!c) continue;
      const done = !!S.ncDone[i], active = S.ncActive === i + 1;
      if (S.rcActive === 1 && !active) {
        c.badge.textContent = tr('挑战中');
        c.badge.className = 'nc-badge on';
        c.root.classList.add('active');
        c.root.classList.remove('done', 'ready');
        c.progress.textContent = tr('RC1 正在同时进行此挑战');
        c.btn.textContent = tr('挑战中');
        c.btn.disabled = true;
        continue;
      }
      const ready = active && S.cells.cmp(1e100) >= 0;
      c.badge.textContent = active ? (ready ? tr('可完成') : tr('进行中')) : (done ? tr('已完成') : (!S.ncUnlocked ? tr('未解锁') : tr('未完成')));
      c.badge.className = 'nc-badge' + (active ? (ready ? ' done' : ' on') : (done ? ' done' : ''));
      c.root.classList.toggle('active', active);
      c.root.classList.toggle('done', done && !active);
      c.root.classList.toggle('ready', ready);
      c.progress.textContent = active ? tr('当前 ') + fmt(S.cells) + ' / 1e100' + (i === 10 ? tr(' · 反物质 ') + fmt(S.ncAnti) : '') : tr('目标：细胞 1e100');
      c.btn.textContent = active ? (ready ? tr('完成挑战') : tr('放弃')) : (done ? tr('再次挑战') : tr('开始'));
      c.btn.disabled = !S.ncUnlocked || (!!S.ncActive && !active);
    }

    let gPct, gTitle, gDesc, gText;
    if (!S.renownUnlocked) {
      const lg = S.cells.log10().toNumber();
      gPct = Math.max(0, Math.min(100, isFinite(lg) ? lg : 0));
      gTitle = tr('声望进度');
      gDesc = tr('达到 1e100 细胞（对数进度，1e10 = 10%）');
      gText = fmt(S.cells) + tr(' / 1e100 细胞');
    } else {
      const ncCount = S.ncDone.filter(Boolean).length;
      const secondDone = ncCount === 12 && !!S.ru[8];
      const skipThird = S.mundisSacrifice.cmp(1e25) >= 0;
      if (!secondDone) {
        const ru34 = S.ru[8] ? 40 : 0;
        gPct = Math.min(100, ncCount * 5 + ru34);
        gTitle = tr('解锁新的地脉');
        gDesc = tr('完成所有 NC（每个 5%）并解锁 ru34');
        gText = ncCount + '/12 NC · ru34 ' + (S.ru[8] ? tr('已解锁') : tr('未解锁'));
      } else if (S.mundisUnlocked) {
        if (S.mundisUnlockAt && Date.now() - S.mundisUnlockAt < 4000) {
          gPct = 100;
          gTitle = tr('世界之神 Mundis');
          gDesc = tr('Mundis 已解锁');
          gText = tr('准备迎接下一个目标');
        } else if (!nucleusUnlocked()) {
          const lg = S.mundisSacrifice.log10().toNumber();
          gPct = Math.max(0, Math.min(100, isFinite(lg) ? lg / 64 * 100 : 0));
          gTitle = tr('解锁地核');
          gDesc = tr('向 Mundis 献祭累计 1e64 声望结晶');
          gText = fmt(S.mundisSacrifice) + ' / 1e64';
        } else if (!rc7Unlocked()) {
          const lg = S.mundisSacrifice.log10().toNumber();
          gPct = Math.max(0, Math.min(100, isFinite(lg) ? lg / 120 * 100 : 0));
          gTitle = tr('解锁 RC7-12');
          gDesc = tr('向 Mundis 献祭累计 1e120 声望结晶');
          gText = fmt(S.mundisSacrifice) + ' / 1e120';
        } else if (!S.battleUnlocked) {
          const lg = S.renown.log10().toNumber();
          const lt = BATTLE_TARGET.log10().toNumber();
          gPct = Math.max(0, Math.min(100, isFinite(lg) ? lg / lt * 100 : 0));
          gTitle = tr('解锁???');
          gDesc = tr('达到 1.8e308 声望结晶');
          gText = fmt(S.renown) + ' / 1.8e308';
        } else if (!S.chaosUnlocked) {
          const rOk = S.renown.cmp(BN.from({ msg: 1000, layer: 1 })) >= 0;
          const cOk = S.cells.cmp(BN.from({ msg: 80000, layer: 1 })) >= 0;
          const rLg = Math.max(0, Math.min(1, S.renown.log10().toNumber() / 1000));
          const cLg = Math.max(0, Math.min(1, S.cells.log10().toNumber() / 80000));
          gPct = (rOk ? 50 : rLg * 50) + (cOk ? 50 : cLg * 50);
          gTitle = tr('解锁混沌');
          gDesc = tr('达到 1e1000 声望结晶和 1e80000 细胞');
          gText = fmt(S.renown) + ' / 1e1000 · ' + fmt(S.cells) + ' / 1e80000';
        } else {
          gPct = 100;
          gTitle = tr('混沌');
          gDesc = tr('混沌已解锁');
          gText = tr('等待混沌机制');
        }
      } else if (!S.mundisUnlocked && !skipThird) {
        const bought = S.renUp.filter(x => x > 0).length + S.ru.filter(Boolean).length;
        gPct = goal3Progress();
        gTitle = tr('解锁???');
        gDesc = tr('购买所有声望升级（每种 4%）并在 NC12 中达到 1e500 细胞（40%）');
        gText = bought + tr('/15 声望升级 · NC12 ') + (nc12At500() ? tr('1e500 已达成') : tr('未达 1e500'));
        if (gPct >= 100) { gTitle = tr('世界之神 Mundis'); gText = tr('Mundis 已解锁'); }
      } else {
        gPct = 100;
        gTitle = tr('世界之神 Mundis');
        gDesc = tr('献祭值已达到跳过第三目标的条件');
        gText = tr('Mundis 已解锁');
      }
    }
    el.goalTitle.textContent = gTitle;
    el.goalPct.textContent = Math.floor(gPct) + '%';
    el.goalDesc.textContent = gDesc;
    el.goalFill.style.width = gPct + '%';
    el.goalText.textContent = gText;

    const contOn = ncOn(7);
    el.continuumNote.hidden = !contOn;
    el.buyMaxBtn.hidden = contOn;
    el.autos.hidden = contOn;
    for (let i = 0; i < 6; i++) {
      const r = rows[i], n = S.n[i], e = effTier(i), c = tierCost(i);
      const cur = lowerCur(i), sealed = ncOn(4) && i >= 4;
      const cont = ncOn(7);
      const disabled = !!S.cvDisabled[i];
      const can = !cont && !sealed && !disabled && (cur >= 0 ? S.n[cur].cmp(c) >= 0 : S.cells.cmp(c) >= 0);
      const ratio = n.isZero() ? 0 : e.div(n).toNumber();
      r.bought.textContent = '(' + fmt(BN.from(S.bought[i])) + ')';
      r.cnt.textContent = ncOn(7) ? (n.toNumber() < 1e9 ? n.toNumber().toFixed(2) : fmt(n)) : fmt(n.floor());
      r.eff.textContent = i === 0 ? fmt(e) : fmt(e) + tr('（自由）');
      if (S.rcActive === 5 && i >= 1) {
        r.rt.textContent = '+' + fmt(outRate(i, pm).mul(RC5_RATE[i] / CFG.tick)) + tr(' 细胞/秒');
      } else if (ncOn(12)) {
        if (i === 0) r.rt.textContent = '+' + fmt(S.nucleusIn ? outRate(0, pm).pow(0.8) : outRate(0, pm)) + tr(' 细胞/秒');
        else if (i === 1) r.rt.textContent = '+' + fmt(outRate(1, pm).mul(5)) + tr(' 细胞/秒');
        else r.rt.textContent = '+' + fmt(outRate(i, pm)) + ' ' + ROMAN[i - 2] + tr('/秒');
      } else {
        r.rt.textContent = i === 0 ? '+' + fmt(S.nucleusIn ? outRate(0, pm).pow(0.8) : outRate(0, pm)) + tr(' 细胞/秒') : '+' + fmt(outRate(i, pm)) + ' ' + ROMAN[i - 1] + tr('/秒');
      }
      if (sealed) r.rt.textContent = tr('封存');
      else if (disabled) r.rt.textContent = tr('禁用（再次购买上一级恢复）');
      r.xmul.textContent = tr('单倍 ×') + fmt(S.tierX[i]);
      r.cost.textContent = cont ? tr('连续统') : (sealed ? tr('封存') : (disabled ? tr('禁用') : (cur >= 0 ? fmt(c) + tr(' 座 ') + ROMAN[cur] : fmt(c) + tr(' 细胞'))));
      r.btn.disabled = !can;
      r.btn.hidden = cont;
      r.btn.classList.toggle('ok', can);
      const bar = cont || sealed ? 0 : (cur >= 0 ? S.n[cur].div(c).toNumber() : S.cells.div(c).toNumber());
      r.bar.style.width = Math.max(0, Math.min(100, (isFinite(bar) ? bar : 1) * 100)) + '%';
      if (n.isZero()) { r.badge.textContent = ''; r.badge.className = 'badge'; }
      else if (i > 0) { r.badge.textContent = tr('自由'); r.badge.className = 'badge'; }
      else if (ratio > 1.005) { r.badge.textContent = tr('加持 ×') + ratio.toFixed(2); r.badge.className = 'badge up'; }
      else if (ratio < 0.995) { r.badge.textContent = tr('过载 ×') + ratio.toFixed(2); r.badge.className = 'badge down'; }
      else { r.badge.textContent = tr('满额'); r.badge.className = 'badge'; }
    }

    el.buyMaxBtn.disabled = ncOn(7);
    el.autoLock.textContent = ncOn(7) ? tr('NC7 连续统：自动购买器与手动购买已禁用') : (S.autoUnlocked ? tr('已解锁 · 买1 20/秒 / 买最大 2/秒') : tr('首次声望重置后解锁'));
    for (let i = 0; i < 6; i++) {
      const a = autos[i]; if (!a) continue;
      a.on.textContent = S.autoOn[i] ? tr('开') : tr('关');
      a.on.classList.toggle('on', S.autoOn[i]);
      a.mode.textContent = S.autoMode[i] ? tr('买最大') : tr('买 1 个');
      a.mode.classList.toggle('max', !!S.autoMode[i]);
      a.on.disabled = !S.autoUnlocked || ncOn(7);
      a.mode.disabled = !S.autoUnlocked || ncOn(7);
      a.root.classList.toggle('locked', !S.autoUnlocked || ncOn(7));
    }

    const ec = envCost(), canEnv = !ncOn(8) && S.rcActive !== 9 && S.cells.cmp(ec) >= 0;
    const envStart = ruOn(3) ? BN.from(1e10) : BN.from(CFG.startCap);
    el.envK.textContent = '→ ' + fmt(envStart.mul(BN.from(envStepBase()).pow(S.cap + 1)).mul(renCapMul()));
    el.envStep.textContent = fmt(envStepBase());
    el.envBoost.textContent = Math.pow(CFG.env.boost, 1 + 0.5 * flowerEff()).toFixed(2);
    el.envPrice.textContent = fmt(ec) + tr(' 细胞');
    el.envEta.textContent = canEnv ? tr('可购买') : 'ETA ' + fmtT(ec.sub(S.cells).div(inc).toNumber());
    el.envBtn.disabled = !canEnv;
    el.envBtn.classList.toggle('ok', canEnv);
    el.envMaxBtn.hidden = !mundisBuff(1e15);
    el.envMaxBtn.disabled = !canEnv;
    const setAutoUI = (wrap, btn, input, unlocked, on, val, label) => {
      wrap.classList.toggle('locked', !unlocked);
      btn.disabled = !unlocked; input.disabled = !unlocked;
      btn.textContent = tr(label) + ': ' + (on ? tr('开') : tr('关'));
      if (document.activeElement !== input) input.value = val === null ? '' : String(val);
    };
    setAutoUI(el.envAutoWrap, el.envAutoBtn, el.envAutoMax, S.ncDone[8], S.autoEnvOn, S.autoEnvMax, '环境自动');
    setAutoUI(el.leyAutoWrap, el.leyAutoBtn, el.leyAutoMax, S.ncDone[9], S.autoLeyOn, S.autoLeyMax, '地脉提升自动');
    setAutoUI(el.flowerAutoWrap, el.flowerAutoBtn, el.flowerAutoMax, S.ncDone[10] || S.mu[7], S.autoFlowerOn, S.autoFlowerMax, '花自动');

    el.leyMulFx.textContent = String(leyBase());
    if (ncOn(4)) {
      const lc = leyCostNC4(), canLey4 = S.n[3].cmp(lc) >= 0;
      el.leyPrice.textContent = lc + tr(' 座 Ⅳ（现有 ') + fmt(S.n[3].floor()) + ')';
      el.leyBtn.disabled = !canLey4;
      el.leyBtn.classList.toggle('ok', canLey4);
      el.leyMaxBtn.hidden = !mundisBuff(1e24);
      el.leyMaxBtn.disabled = !canLey4;
    } else {
      const need = leyNeed();
      el.leyPrice.textContent = need + tr(' 座 Ⅵ（现有 ') + fmt(S.n[5].floor()) + ')';
      el.leyBtn.disabled = S.n[5].cmp(need) < 0;
      el.leyBtn.classList.toggle('ok', S.n[5].cmp(need) >= 0);
      el.leyMaxBtn.hidden = !mundisBuff(1e24);
      el.leyMaxBtn.disabled = S.n[5].cmp(need) < 0;
    }

    const fneed = flowerNeed();
    const canFl = !ncOn(8) && S.rcActive !== 7 && S.ley >= fneed;
    el.flFx.textContent = tr('指数 ×') + flowExp().toFixed(3) + tr(' · 购买地脉 ×') + xMul().toFixed(2) + tr(' · 每次 k ×') + fmt(envStepBase());
    el.flPrice.textContent = fneed + tr(' 级地脉提升（现有 ') + S.ley + ')';
    el.flBtn.disabled = !canFl;
    el.flBtn.classList.toggle('ok', canFl);

    const sacOn = S.bought[5] > 0;
    const sacNeed = BN.max(10, S.sacrificeAt);
    const sacGain = sacrificeValue(S.n[0]);
    el.sacMul.textContent = fmt(S.sacrifice);
    if (!sacOn) el.sacPrice.textContent = tr('需先购买 1 座 Ⅵ');
    else if (S.n[0].cmp(sacNeed) < 0) el.sacPrice.textContent = tr('一级 ≥ ') + fmt(sacNeed) + tr('（现有 ') + fmt(S.n[0].floor()) + ')';
    else el.sacPrice.textContent = tr('本次可得 ×') + fmt(sacGain);
    const canSac = sacOn && S.n[0].cmp(sacNeed) >= 0 && S.rcActive !== 6 && S.rcActive !== 9;
    el.sacBtn.disabled = !canSac;
    el.sacBtn.classList.toggle('ok', canSac);
    el.sacAutoWrap.hidden = !S.rcDone[5];
    el.sacAutoBtn.textContent = tr('自动献祭：') + (S.rcAutoSacOn ? tr('开') : tr('关'));
    if (document.activeElement !== el.sacAutoRatio) el.sacAutoRatio.value = String(S.rcAutoSacRatio || 0);

    el.renCrystalsHud.textContent = fmt(S.renown);
    el.renTabState.textContent = S.renownUnlocked ? '' : '🔒';
    el.renCrystals.textContent = fmt(S.renown);
    el.renTotal.textContent = fmt(S.renownTotal);
    el.renCapMul.textContent = '×' + fmt(renCapMul());
    const rgain = renownGain();
    el.renGain.textContent = fmt(rgain);
    el.renResets.textContent = String(S.renResets);
    const canRen = S.renownUnlocked && !S.ncActive && !S.rcActive && !S.nucleusIn && S.cells.cmp(1e100) >= 0;
    el.renBtn.disabled = !canRen;
    el.renManualBtn.disabled = !canRen;
    el.renManual.placeholder = '≤' + fmt(rgain);
    el.renHint.textContent = !S.renownUnlocked ? tr('细胞达到 1e100 解锁') : (S.nucleusIn ? tr('地核中请使用地核重置') : ((S.ncActive || S.rcActive) ? tr('挑战中无法重置') : (canRen ? tr('将获得 ') + fmt(rgain) + tr(' 声望结晶') : tr('细胞达到 1e100 才能重置'))));
    el.quickRenBtn.hidden = !S.renownUnlocked || !!S.ncActive || !!S.rcActive || !!S.nucleusIn;
    el.quickRenBtn.disabled = !canRen;
    el.quickRenGain.textContent = '+' + fmt(rgain);
    let qcolor = '#ffffff';
    if (S.renBestRate && !S.renBestRate.isZero() && rgain.cmp(0) > 0) {
      const curRate = rgain.div(Math.max(1, S.renTime));
      const ratio = curRate.div(S.renBestRate).toNumber();
      if (isFinite(ratio) && ratio > 0) {
        const lo = Math.log10(0.95), hi = Math.log10(1.05);
        const t = Math.max(0, Math.min(1, (Math.log10(ratio) - lo) / (hi - lo)));
        const red = [240,0,60], white = [255,255,255], green = [16,243,34];
        const mix = (a,b,k) => Math.round(a + (b-a)*k);
        if (t <= 0.5) qcolor = 'rgb(' + mix(red[0],white[0],t*2) + ',' + mix(red[1],white[1],t*2) + ',' + mix(red[2],white[2],t*2) + ')';
        else qcolor = 'rgb(' + mix(white[0],green[0],(t-0.5)*2) + ',' + mix(white[1],green[1],(t-0.5)*2) + ',' + mix(white[2],green[2],(t-0.5)*2) + ')';
      }
    }
    el.quickRenGain.style.color = qcolor;
    if (S.ncActive || S.rcActive) {
      const n = S.ncActive || S.rcActive;
      const nm = S.ncActive ? NC_DEFS[n - 1] : RC_DEFS[n - 1];
      el.challengeNowText.textContent = trf('你现在在{name}中。', 'You are in {name}.', { name: nm.key + ' · ' + tr(nm.name, nm.enName) });
      el.challengeNowBtn.hidden = false;
      const target = S.ncActive ? 1e100 : RC_TARGET[n - 1];
      const ready = S.cells.cmp(target) >= 0;
      el.challengeNowBtn.textContent = ready ? tr('完成挑战') : tr('放弃挑战');
    } else {
      el.challengeNowText.textContent = tr('你现在在细胞宇宙中。');
      el.challengeNowBtn.hidden = true;
    }
    for (let i = 0; i < 5; i++) {
      const rcost = renCost(i);
      el.renPrice[i].textContent = fmt(rcost);
      el.renBought[i].textContent = String(S.renUp[i]);
      el.renBuy[i].disabled = !S.renownUnlocked || S.renown.cmp(rcost) < 0;
    }
    el.renFx[0].textContent = '×' + fmt(renTier1Mul());
    el.renFx[1].textContent = '×' + fmt(renAllMul());
    el.renFx[2].textContent = '×' + fmt(renCapMul());
    el.renFx[3].textContent = '+' + S.renFreeLey;
    el.renFx[4].textContent = '×' + fmt(BN.from(2).pow(S.renUp[4]));
    const add = renBaseAdd();
    el.ru11Base.textContent = add ? (3 + add).toFixed(3) : '3';
    el.ru12Base.textContent = add ? (2 + add).toFixed(3) : '2';
    for (let i = 0; i < RU_DEFS.length; i++) {
      const card = ruCards[i]; if (!card) continue;
      const def = RU_DEFS[i];
      card.price.textContent = fmt(def.price);
      let state;
      if (S.ru[i]) state = tr('已购买');
      else if (!S.ruUnlocked[i]) state = tr('未解锁');
      else if (def.pending) state = tr('效果待定');
      else if (S.renown.cmp(def.price) < 0) state = tr('结晶不足');
      else state = tr('可购买');
      card.state.textContent = state;
      card.root.classList.toggle('locked', !S.ru[i] && (!S.ruUnlocked[i] || def.pending));
      card.buy.disabled = !!S.ru[i] || !S.ruUnlocked[i] || !!def.pending || S.renown.cmp(def.price) < 0;
      card.buy.textContent = S.ru[i] ? tr('已购买') : (def.pending ? tr('待定') : tr('购买'));
    }
    el.renAutoWrap.classList.toggle('locked', !S.ncDone[11]);
    el.renAutoBtn.disabled = !S.ncDone[11] || S.autoRenAt === null;
    el.renAutoBtn.textContent = tr('自动声望：') + (S.autoRenOn ? tr('开') : tr('关'));
    el.renAutoHint.textContent = S.ncDone[11] ? tr('达到阈值自动重置（0 也需 1e100）') : tr('完成 NC12 解锁');
    if (document.activeElement !== el.renAutoAt) el.renAutoAt.value = S.autoRenAt === null ? '' : String(S.autoRenAt);
    const ruAutoUnlocked = mundisBuff(1e100);
    el.ruAutoWrap.hidden = !ruAutoUnlocked;
    el.ruAutoBtn.textContent = tr('自动购买 ru11-15：') + (S.autoRuOn ? tr('开') : tr('关'));
    el.ruAutoHint.textContent = ruAutoUnlocked ? tr('每 1 秒尝试购买一次') : tr('献祭值达到 1e100 解锁');
    el.ruMaxWrap.hidden = !S.rcDone[9];
    syncLanguageUI();
    el.confirmRen.checked = !!S.confirmRen;
    el.confirmFlower.checked = !!S.confirmFlower;
    el.confirmSac.checked = !!S.confirmSac;
    el.confirmReset.checked = !!S.confirmReset;

    const best = Math.min.apply(null, actionEtas());
    el.rule.classList.remove('ok', 'warn', 'bad');
    if (inc.isZero()) { el.rule.classList.add('warn'); el.ruleText.textContent = tr('点击「吸收」启动'); el.ruleFix.hidden = true; }
    else if (best <= 100) { el.rule.classList.add('ok'); el.ruleText.textContent = tr('下一动作 ') + fmtT(best); el.ruleFix.hidden = true; }
    else { el.rule.classList.add('bad'); el.ruleText.textContent = tr('下一动作 ') + fmtT(best) + tr('（超 100 秒）'); el.ruleFix.hidden = S.growth === 1000; }
    renderStats();
    renderRc();
    renderNucleus();
    renderBattle();
    renderChaos();
    renderDeity();
    renderMundisDialog();
    if (S.lang !== 'zh' && translatedLang !== S.lang) {
      translateDom();
      translatedLang = S.lang;
    }
  }

  function bind() {
    const switchTab = tab => {
      if (S.mundisDialogActive) return;
      const main = tab === 'main', nc = tab === 'nc', ren = tab === 'ren', stat = tab === 'stat', set = tab === 'set', deity = tab === 'deity', chaos = tab === 'chaos';
      el.tabMain.classList.toggle('active', main);
      el.tabNc.classList.toggle('active', nc);
      el.tabRen.classList.toggle('active', ren);
      el.tabStat.classList.toggle('active', stat);
      el.tabSet.classList.toggle('active', set);
      el.tabDeity.classList.toggle('active', deity);
      el.chaosTab.classList.toggle('active', chaos);
      el.tabMainBtn.classList.toggle('active', main);
      el.tabNcBtn.classList.toggle('active', nc);
      el.tabRenBtn.classList.toggle('active', ren);
      el.tabStatBtn.classList.toggle('active', stat);
      el.tabSetBtn.classList.toggle('active', set);
      el.tabDeityBtn.classList.toggle('active', deity);
      el.chaosTabBtn.classList.toggle('active', chaos);
    };
    el.tabMainBtn.addEventListener('click', () => switchTab('main'));
    el.tabNcBtn.addEventListener('click', () => switchTab('nc'));
    const switchChallenge = rc => {
      if (rc && !rcUnlocked()) return;
      el.ncPane.hidden = rc;
      el.rcPane.hidden = !rc;
      el.chNcBtn.classList.toggle('active', !rc);
      el.chRcBtn.classList.toggle('active', rc);
    };
    el.chNcBtn.addEventListener('click', () => switchChallenge(false));
    el.chRcBtn.addEventListener('click', () => switchChallenge(true));
    el.tabRenBtn.addEventListener('click', () => switchTab('ren'));
    el.tabStatBtn.addEventListener('click', () => switchTab('stat'));
    el.tabSetBtn.addEventListener('click', () => switchTab('set'));
    el.tabDeityBtn.addEventListener('click', () => switchTab('deity'));
    el.chaosTabBtn.addEventListener('click', () => switchTab('chaos'));
    el.quickChaosBtn.addEventListener('click', () => {
      if (!chaosReady()) return;
      if (!ask(S.confirmReset, tr('进行混沌将重置绝大多数进度（宝石与混沌资源保留）。继续？'))) return;
      if (doChaos()) { render(); save(); }
    });
    const chaosSub = mode => {
      el.chaosGemPane.hidden = mode !== 'gem';
      el.chaosRefinePane.hidden = mode !== 'refine';
      el.chaosUpPane.hidden = mode !== 'up';
      el.chaosMsPane.hidden = mode !== 'ms';
      el.chaosGemBtn.classList.toggle('active', mode === 'gem');
      el.chaosRefineBtn.classList.toggle('active', mode === 'refine');
      el.chaosUpBtn.classList.toggle('active', mode === 'up');
      el.chaosMsBtn.classList.toggle('active', mode === 'ms');
    };
    el.chaosGemBtn.addEventListener('click', () => chaosSub('gem'));
    el.chaosRefineBtn.addEventListener('click', () => chaosSub('refine'));
    el.chaosUpBtn.addEventListener('click', () => chaosSub('up'));
    el.chaosMsBtn.addEventListener('click', () => chaosSub('ms'));
    el.chaosUnequipCheck.addEventListener('change', () => { S.chaosUnequipOnReset = !!el.chaosUnequipCheck.checked; save(); });
    el.quickRenBtn.addEventListener('click', () => { if (doRenownPrestige()) { render(); save(); } });
    el.renManualBtn.addEventListener('click', () => { if (doRenownPrestige(false, el.renManual.value)) { render(); save(); } });
    el.challengeNowBtn.addEventListener('click', () => {
      if (S.ncActive) {
        if (S.cells.cmp(1e100) >= 0) completeNC(); else exitNC();
      } else if (S.rcActive) {
        if (S.cells.cmp(RC_TARGET[S.rcActive - 1]) >= 0) completeRC(); else exitRC();
      }
      render(); save();
    });
    el.stampOverlay.addEventListener('click', () => { clearTimeout(stampTimer); el.stampOverlay.hidden = true; });
    const switchSub = vcv => {
      if (vcv && !S.ru[8]) return;
      el.subMain.hidden = vcv;
      el.subVcv.hidden = !vcv;
      el.subMainBtn.classList.toggle('active', !vcv);
      el.subVcvBtn.classList.toggle('active', vcv);
    };
    el.subMainBtn.addEventListener('click', () => switchSub(false));
    el.subVcvBtn.addEventListener('click', () => switchSub(true));
    el.vcvUpBtn.addEventListener('click', () => { if (buyVcvUp()) { render(); save(); } });
    const switchStat = key => {
      if (key === 'nc' && S.renResets <= 0) return;
      const pairs = [['general', el.statGeneralBtn, el.statGeneral], ['nc', el.statNcBtn, el.statNc],
        ['reset', el.statResetBtn, el.statReset], ['calc', el.statCalcBtn, el.statCalc]];
      for (const [k, btn, pane] of pairs) {
        btn.classList.toggle('active', k === key);
        pane.hidden = k !== key;
      }
    };
    el.statGeneralBtn.addEventListener('click', () => switchStat('general'));
    el.statNcBtn.addEventListener('click', () => switchStat('nc'));
    el.statResetBtn.addEventListener('click', () => switchStat('reset'));
    el.statCalcBtn.addEventListener('click', () => switchStat('calc'));
    const switchDeity = mundis => {
      if (S.mundisDialogActive) return;
      el.deityNav.hidden = mundis;
      el.deityMundis.hidden = !mundis;
      el.deityNavBtn.classList.toggle('active', !mundis);
      el.deityMundisBtn.classList.toggle('active', mundis);
      if (mundis && !S.mundisSeen) startMundisDialog();
      render(); save();
    };
    el.deityNavBtn.addEventListener('click', () => switchDeity(false));
    el.deityMundisBtn.addEventListener('click', () => switchDeity(true));
    el.deityEnterBtn.addEventListener('click', () => switchDeity(true));
    el.mundisNextBtn.addEventListener('click', () => { nextMundisDialog(); render(); save(); });
    el.mundisReviewBtn.addEventListener('click', () => { renderMundisDialog(true); });
    el.mundisQuotesOpen.addEventListener('click', () => { el.mundisQuotesBox.innerHTML = el.mundisQuotes.innerHTML; el.mundisQuotesWrap.hidden = false; });
    el.mundisQuotesExit.addEventListener('click', () => { el.mundisQuotesWrap.hidden = true; });
    el.mundisSacBtn.addEventListener('click', () => { if (sacrificeToMundis()) { render(); save(); } });
    el.exportBtn.addEventListener('click', () => {
      const out = JSON.parse(JSON.stringify(S));
      delete out.mundisQuotes;
      delete out.resetLogs;
      el.saveText.value = JSON.stringify(out);
      el.importStatus.textContent = tr('已导出', 'Exported');
    });
    el.importBtn.addEventListener('click', () => {
      try {
        const txt = el.saveText.value.trim();
        if (!txt) throw new Error('empty');
        const d = JSON.parse(txt);
        if (!d || (d.v !== 2 && d.v !== 3)) throw new Error('version');
        const prevQuotes = S.mundisQuotes.slice();
        const prevSeen = S.mundisSeen;
        localStorage.setItem(SAVE, txt);
        load();
        if (!d.mundisQuotes && prevQuotes.length) { S.mundisQuotes = prevQuotes; S.mundisSeen = prevSeen; }
        ensureMundisQuotes();
        rebuildUI();
        save();
        el.importStatus.textContent = tr('已导入', 'Imported');
      } catch (e) {
        el.importStatus.textContent = tr('导入失败：字符串无效', 'Import failed: invalid string');
      }
    });
    el.langSel.addEventListener('change', () => {
      setLanguage(el.langSel.value);
      save();
    });
    const bindConfirm = (input, key) => {
      input.addEventListener('change', () => { S[key] = !!input.checked; save(); });
    };
    bindConfirm(el.confirmRen, 'confirmRen');
    bindConfirm(el.confirmFlower, 'confirmFlower');
    bindConfirm(el.confirmSac, 'confirmSac');
    bindConfirm(el.confirmReset, 'confirmReset');
    el.envBtn.addEventListener('click', () => { if (buyEnv()) render(); });
    el.envMaxBtn.addEventListener('click', () => { if (buyEnvMax() > 0) { render(); save(); } });
    el.buyMaxBtn.addEventListener('click', () => { if (buyMaxTiers()) { render(); save(); } });
    el.leyBtn.addEventListener('click', () => { if (buyLey()) { render(); } });
    el.leyMaxBtn.addEventListener('click', () => { if (buyLeyMax() > 0) { render(); save(); } });
    el.flBtn.addEventListener('click', () => { if (buyFlower()) { render(); } });
    el.sacBtn.addEventListener('click', () => {
      if (el.sacBtn.disabled) return;
      if (!ask(S.confirmSac, tr('地脉献祭会清空一级至五级的所有数量（价格、购买次数、加成保留）。继续？'))) return;
      if (doSacrifice()) render();
    });
    el.sacAutoBtn.addEventListener('click', () => { if (!S.rcDone[5]) return; S.rcAutoSacOn = !S.rcAutoSacOn; render(); save(); });
    el.sacAutoRatio.addEventListener('change', () => {
      S.rcAutoSacRatio = Math.max(0, parseFloat(el.sacAutoRatio.value) || 0);
      render(); save();
    });
    const switchRenSub = mode => {
      if (mode === 'nucleus' && !nucleusUnlocked()) return;
      if (mode === 'battle' && !S.battleUnlocked) return;
      el.renMainPane.hidden = mode !== 'main';
      el.nucleusPane.hidden = mode !== 'nucleus';
      el.battlePane.hidden = mode !== 'battle';
      el.renMainBtn.classList.toggle('active', mode === 'main');
      el.nucleusBtn.classList.toggle('active', mode === 'nucleus');
      el.battleBtn.classList.toggle('active', mode === 'battle');
    };
    el.renMainBtn.addEventListener('click', () => switchRenSub('main'));
    el.nucleusBtn.addEventListener('click', () => switchRenSub('nucleus'));
    el.battleBtn.addEventListener('click', () => switchRenSub('battle'));
    el.battleAttackBtn.addEventListener('click', () => { battleAttackTick(true); render(); save(); });
    el.battleAutoBtn.addEventListener('click', () => { S.battle.autoAttack = !S.battle.autoAttack; render(); save(); });
    el.battleFleeBtn.addEventListener('click', () => { if (battleFlee()) { render(); save(); } });
    el.battleSpawnBtn.addEventListener('click', () => { S.battle.spawnOn = !S.battle.spawnOn; render(); save(); });
    if (!window.__battleSwitchBound) {
      window.__battleSwitchBound = true;
      const onSwitch = e => {
        const t = e.target;
        if (!t || !t.closest) return;
        const wb = t.closest('[data-weapon]'), ab = t.closest('[data-accessory]');
        if (wb && battleEquipWeapon(wb.dataset.weapon)) { render(); save(); }
        if (ab && battleEquipAccessory(ab.dataset.accessory)) { render(); save(); }
      };
      document.addEventListener('pointerdown', onSwitch);
      document.addEventListener('click', onSwitch);
    }
    el.battleBag.addEventListener('click', e => {
      const w = e.target && e.target.dataset ? e.target.dataset.weapon : null;
      const a = e.target && e.target.dataset ? e.target.dataset.accessory : null;
      if (w && S.battle.exu[8] && S.battle.weapons.includes(w)) { S.battle.weapon = w; render(); save(); }
      if (a && S.battle.exu[18] && S.battle.accessories.includes(a)) { S.battle.accessory = a; render(); save(); }
    });
    el.nucleusEnterBtn.addEventListener('click', () => { if (enterNucleus()) { render(); save(); } });
    el.nucleusShowBtn.addEventListener('click', () => { el.nucleusDebuffs.hidden = !el.nucleusDebuffs.hidden; });
    el.nucleusResetBtn.addEventListener('click', () => { if (nucleusReset()) { render(); save(); } });
    el.nucleusExitBtn.addEventListener('click', () => {
      if (!S.nucleusIn) return;
      S.nucleusIn = false;
      render(); save();
    });
    el.renBtn.addEventListener('click', () => { if (doRenownPrestige()) { render(); save(); } });
    const bindAuto = (btn, maxInput, keyOn, keyMax, unlock) => {
      btn.addEventListener('click', () => { if (!S.ncDone[unlock] && !(unlock === 10 && S.mu[7])) return; S[keyOn] = !S[keyOn]; render(); save(); });
      maxInput.addEventListener('change', () => {
        const v = maxInput.value.trim();
        S[keyMax] = v === '' ? null : Math.max(0, parseFloat(v) || 0);
        render(); save();
      });
    };
    bindAuto(el.envAutoBtn, el.envAutoMax, 'autoEnvOn', 'autoEnvMax', 8);
    bindAuto(el.leyAutoBtn, el.leyAutoMax, 'autoLeyOn', 'autoLeyMax', 9);
    bindAuto(el.flowerAutoBtn, el.flowerAutoMax, 'autoFlowerOn', 'autoFlowerMax', 10);
    el.renAutoBtn.addEventListener('click', () => {
      if (!S.ncDone[11] || S.autoRenAt === null) return;
      S.autoRenOn = !S.autoRenOn; render(); save();
    });
    el.ruAutoBtn.addEventListener('click', () => {
      if (!mundisBuff(1e100)) return;
      S.autoRuOn = !S.autoRuOn; render(); save();
    });
    el.ruMaxBtn.addEventListener('click', () => { if (buyRuMax() > 0) { render(); save(); } });
    el.renAutoAt.addEventListener('change', () => {
      const v = el.renAutoAt.value.trim();
      S.autoRenAt = v === '' ? null : Math.max(0, parseFloat(v) || 0);
      if (S.autoRenAt === null) S.autoRenOn = false;
      render(); save();
    });
    for (let i = 0; i < 5; i++) el.renBuy[i].addEventListener('click', () => { if (buyRenUpgrade(i)) { render(); save(); } });
    el.growth.addEventListener('change', () => { S.growth = parseFloat(el.growth.value); render(); save(); });
    el.mode.addEventListener('change', () => { S.mode = el.mode.value; render(); save(); });
    el.ruleFix.addEventListener('click', () => { S.growth = 1000; el.growth.value = '1000'; render(); save(); });
    el.reset.addEventListener('click', () => {
      if (!ask(S.confirmReset, tr('清空全部进度？'))) return;
      S = fresh(); localStorage.removeItem(SAVE); el.growth.value = '10000'; el.mode.value = 'log';
      buildRows(); render();
    });
    const tap = document.createElement('button');
    tap.className = 'tap'; tap.textContent = tr('吸收 +1');
    tap.addEventListener('click', () => { S.cells = S.cells.add(1); render(); });
    document.querySelector('.hud-in').appendChild(tap);
    window.addEventListener('pagehide', save);
    document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
  }

  const statOpenKeys = new Set(['envcap']);
