'use strict';

  const SAVE = 'dragonvein-ley-v2';

  function freshBattle() {
    return {
      xp: 0, xpMax: 0, level: 0, hp: 10, maxHp: 10, atk: 10, def: 1,
      flowers: 0, clover: 0, crit: false, weapon: 'branch', weapons: ['branch'],
      exu: new Array(25).fill(0), spawnTimer: 12, monsters: [], nextId: 1, attackAcc: 0,
      kills: 0, spawnOn: true, autoAttack: true, materials: {}, accessories: [], accessory: null, crafting: null,
      hp100Kill: false, exu42Unlocked: false
    };
  }
  function fresh() {
    return {
      v: 3,
      cells: BN.zero(),
      n: zeros(),
      bought: [0,0,0,0,0,0],
      tierX: ones(),           
      sacrifice: BN.one(),
      sacrificeAt: BN.zero(),
      cap: 0,
      ley: 0,
      flower: 0,
      renown: BN.zero(),          
      renownTotal: BN.zero(),     
      renUp: [0,0,0,0,0],
      renFreeLey: 0,
      renownUnlocked: false,
      renResets: 0,
      autoUnlocked: false,        
      autoOn: [false,false,false,false,false,false],
      autoMode: [0,0,0,0,0,0],    
      ru: [false,false,false,false,false,false,false,false,false,false],
      ruUnlocked: [true,true,true,true,true,false,false,false,false,false],
      ru34NoHigh: true,           
      ncUnlocked: false,
      ncActive: 0,
      ncDone: [false,false,false,false,false,false,false,false,false,false,false,false],
      ncAnti: BN.zero(),
      ncBuyT: 10,
      ncFail: false,
      ncRunTime: 0,
      nc7T: 0,
      ncNotified: false,
      rcActive: 0,
      rcDone: [false,false,false,false,false,false,false,false,false,false,false,false],
      rcTimes: [null,null,null,null,null,null,null,null,null,null,null,null],
      rcGameTimes: [null,null,null,null,null,null,null,null,null,null,null,null],
      rcAttempts: [0,0,0,0,0,0,0,0,0,0,0,0],
      rcMax: [null,null,null,null,null,null,null,null,null,null,null,null],
      rcSeq: 0,
      rcSeqT: 0,
      strange: BN.zero(),
      antimatter: BN.zero(),
      rcRunTime: 0,
      rcNotified: false,
      cvDisabled: [false,false,false,false,false,false],
      rcSacT: 0,
      rcAutoSacOn: false,
      rcAutoSacRatio: 0,
      lastResetChallenge: false,
      lastResetChallengeName: null,
      mundisUnlocked: false,
      mundisUnlockAt: 0,
      mundisSeen: false,
      mundisDialogActive: false,
      mundisDialogIndex: 0,
      mundisSpecialLine: null,
      mundisQuotes: [],
      mundisSacrifice: BN.zero(),
      renPassive: 0,
      nucleusIn: false,
      nucleusCrystals: BN.zero(),
      nucleusResets: 0,
      nucleusReached: false,
      vcv4Unlocked: false,
      battleUnlocked: false,
      battle: freshBattle(),
      nucleusIntroSeen: false,
      mu: new Array(15).fill(0),
      createdAt: Date.now(),
      playTime: 0,
      gameTime: BN.zero(),
      speed: BN.one(),
      ncGameTimes: [null,null,null,null,null,null,null,null,null,null,null,null],
      ncGameRun: BN.zero(),
      rcGameRun: BN.zero(),
      totalCells: BN.zero(),
      maxCells: BN.zero(),
      leyResets: 0,
      flowerResets: 0,
      leyTime: 0,
      flowerTime: 0,
      renFastest: null,
      leyFastest: null,
      flowerFastest: null,
      renBestRate: null,
      renMaxCells: BN.one(),
      leyBestRate: null,
      flowerBestRate: null,
      ncTimes: [null,null,null,null,null,null,null,null,null,null,null,null],
      ncTotal: [0,0,0,0,0,0,0,0,0,0,0,0],
      ncMax: [null,null,null,null,null,null,null,null,null,null,null,null],
      ncAttempts: [0,0,0,0,0,0,0,0,0,0,0,0],
      resetLogs: { ren: [], ley: [], flower: [] },
      autoEnvOn: false, autoEnvMax: null,
      autoLeyOn: false, autoLeyMax: null,
      autoFlowerOn: false, autoFlowerMax: null,
      autoRenOn: false, autoRenAt: null,
      autoRuOn: false,
      lang: 'zh',
      confirmRen: true, confirmFlower: true, confirmSac: true, confirmReset: true,
      crystal: BN.zero(),
      vcv: Array.from({ length: 6 }, () => BN.zero()),
      vcvBought: [0,0,0,0,0,0],
      vcvUp: 0,
      growth: 1e4,
      mode: 'log',
      time: 0,
      renTime: 0,
      renGameTime: BN.zero()
    };
  }

  let S = fresh();

  function save() {
    try { localStorage.setItem(SAVE, JSON.stringify(S)); el.saved.textContent = '已保存'; }
    catch (e) { el.saved.textContent = '保存失败'; }
  }

  function load() {
    try {
      const raw = localStorage.getItem(SAVE);
      if (!raw) return;
      const d = JSON.parse(raw);
      if (!d || (d.v !== 2 && d.v !== 3)) return;
      S = Object.assign(fresh(), d);
      S.v = 3;
      S.cells = BN.from(S.cells);
      if (!Array.isArray(S.n) || S.n.length !== 6) S.n = zeros();
      S.n = S.n.map(v => BN.from(v));
      if (!Array.isArray(S.bought) || S.bought.length !== 6) S.bought = [0,0,0,0,0,0];
      S.bought = S.bought.map(x => (isFinite(x) && x > 0 ? Math.floor(x) : 0));
      if (!Array.isArray(S.tierX) || S.tierX.length !== 6) S.tierX = ones();
      S.tierX = S.tierX.map(v => BN.max(BN.one(), BN.from(v)));
      S.sacrifice = BN.max(BN.one(), BN.from(S.sacrifice));
      S.sacrificeAt = BN.from(S.sacrificeAt);
      S.renown = BN.max(BN.zero(), BN.from(S.renown));
      S.renownTotal = BN.max(BN.zero(), BN.from(S.renownTotal));
      if (!Array.isArray(S.renUp) || S.renUp.length !== 5) S.renUp = [0,0,0,0,0];
      S.renUp = S.renUp.map(x => (isFinite(x) && x > 0 ? Math.floor(x) : 0));
      S.renFreeLey = isFinite(S.renFreeLey) && S.renFreeLey > 0 ? Math.floor(S.renFreeLey) : 0;
      if (S.renFreeLey < S.renUp[3]) S.renFreeLey = S.renUp[3];
      S.renownUnlocked = !!S.renownUnlocked || S.renownTotal.cmp(0) > 0;
      S.autoUnlocked = !!S.autoUnlocked || S.renownTotal.cmp(0) > 0;
      if (!Array.isArray(S.autoOn) || S.autoOn.length !== 6) S.autoOn = [false,false,false,false,false,false];
      S.autoOn = S.autoOn.map(Boolean);
      if (!Array.isArray(S.autoMode) || S.autoMode.length !== 6) S.autoMode = [0,0,0,0,0,0];
      S.autoMode = S.autoMode.map(x => (x ? 1 : 0));
      S.renResets = isFinite(S.renResets) && S.renResets > 0 ? Math.floor(S.renResets) : 0;
      if (S.renResets === 0 && S.renownTotal.cmp(0) > 0) S.renResets = 1;
      if (!Array.isArray(S.ru) || S.ru.length !== 10) S.ru = new Array(10).fill(false);
      S.ru = S.ru.map(Boolean);
      if (!Array.isArray(S.ruUnlocked) || S.ruUnlocked.length !== 10) S.ruUnlocked = [true,true,true,true,true,false,false,false,false,false];
      S.ruUnlocked = S.ruUnlocked.map(Boolean);
      for (let i = 0; i < 5; i++) S.ruUnlocked[i] = true;
      S.ru34NoHigh = S.ru34NoHigh === undefined ? true : !!S.ru34NoHigh;
      if (S.bought.some((x, i) => i > 0 && x > 0)) S.ru34NoHigh = false;
      S.ncUnlocked = !!S.ncUnlocked || S.renResets > 0 || S.renownTotal.cmp(0) > 0;
      if (!Array.isArray(S.ncDone) || S.ncDone.length !== 12) S.ncDone = new Array(12).fill(false);
      S.ncDone = S.ncDone.map(Boolean);
      S.ncActive = isFinite(S.ncActive) && S.ncActive >= 1 && S.ncActive <= 12 ? Math.floor(S.ncActive) : 0;
      S.ncAnti = BN.max(BN.zero(), BN.from(S.ncAnti));
      S.ncBuyT = isFinite(S.ncBuyT) && S.ncBuyT >= 0 ? S.ncBuyT : 10;
      S.ncFail = !!S.ncFail;
      S.ncRunTime = isFinite(S.ncRunTime) && S.ncRunTime > 0 ? S.ncRunTime : 0;
      S.nc7T = isFinite(S.nc7T) && S.nc7T >= 0 ? S.nc7T : 0;
      S.ncNotified = !!S.ncNotified;
      S.rcNotified = !!S.rcNotified;
      S.rcActive = isFinite(S.rcActive) && S.rcActive >= 1 && S.rcActive <= 12 ? Math.floor(S.rcActive) : 0;
      if (!Array.isArray(S.rcDone)) S.rcDone = new Array(12).fill(false);
      else if (S.rcDone.length === 2) S.rcDone = S.rcDone.concat(new Array(10).fill(false));
      else if (S.rcDone.length === 6) S.rcDone = S.rcDone.concat(new Array(6).fill(false));
      else if (S.rcDone.length !== 12) S.rcDone = new Array(12).fill(false);
      S.rcDone = S.rcDone.map(Boolean);
      if (!Array.isArray(S.rcTimes) || S.rcTimes.length !== 12) S.rcTimes = new Array(12).fill(null);
      if (!Array.isArray(S.rcGameTimes) || S.rcGameTimes.length !== 12) S.rcGameTimes = new Array(12).fill(null);
      S.rcGameTimes = S.rcGameTimes.map(x => (x === null || x === undefined ? null : BN.from(x)));
      if (!Array.isArray(S.rcAttempts) || S.rcAttempts.length !== 12) S.rcAttempts = new Array(12).fill(0);
      if (!Array.isArray(S.rcMax) || S.rcMax.length !== 12) S.rcMax = new Array(12).fill(null);
      S.rcMax = S.rcMax.map(x => (x === null || x === undefined ? null : BN.from(x)));
      S.rcSeq = isFinite(S.rcSeq) && S.rcSeq >= 0 ? Math.floor(S.rcSeq) : 0;
      S.rcSeqT = isFinite(S.rcSeqT) && S.rcSeqT >= 0 ? S.rcSeqT : 0;
      S.strange = BN.max(BN.zero(), BN.from(S.strange || 0));
      S.antimatter = BN.max(BN.zero(), BN.from(S.antimatter || 0));
      if (!Array.isArray(S.cvDisabled) || S.cvDisabled.length !== 6) S.cvDisabled = [false,false,false,false,false,false];
      S.cvDisabled = S.cvDisabled.map(Boolean);
      S.rcSacT = isFinite(S.rcSacT) && S.rcSacT >= 0 ? S.rcSacT : 0;
      S.rcAutoSacOn = !!S.rcAutoSacOn;
      S.rcAutoSacRatio = isFinite(S.rcAutoSacRatio) && S.rcAutoSacRatio >= 0 ? S.rcAutoSacRatio : 0;
      S.rcRunTime = isFinite(S.rcRunTime) && S.rcRunTime > 0 ? S.rcRunTime : 0;
      S.lastResetChallenge = !!S.lastResetChallenge;
      S.lastResetChallengeName = typeof S.lastResetChallengeName === 'string' ? S.lastResetChallengeName : null;
      S.mundisUnlocked = !!S.mundisUnlocked;
      S.mundisUnlockAt = isFinite(S.mundisUnlockAt) ? S.mundisUnlockAt : 0;
      S.mundisSeen = !!S.mundisSeen;
      S.mundisDialogActive = !!S.mundisDialogActive;
      S.mundisDialogIndex = isFinite(S.mundisDialogIndex) && S.mundisDialogIndex >= 0 ? Math.floor(S.mundisDialogIndex) : 0;
      S.mundisSpecialLine = typeof S.mundisSpecialLine === 'string' ? S.mundisSpecialLine : null;
      if (!Array.isArray(S.mundisQuotes)) S.mundisQuotes = [];
      S.mundisSacrifice = BN.max(BN.zero(), BN.from(S.mundisSacrifice));
      S.renPassive = isFinite(S.renPassive) && S.renPassive >= 0 ? S.renPassive : 0;
      S.nucleusIn = !!S.nucleusIn;
      S.nucleusCrystals = BN.max(BN.zero(), BN.from(S.nucleusCrystals || 0));
      S.nucleusResets = isFinite(S.nucleusResets) && S.nucleusResets >= 0 ? Math.floor(S.nucleusResets) : 0;
      S.nucleusReached = !!S.nucleusReached;
      S.nucleusIntroSeen = !!S.nucleusIntroSeen;
      S.vcv4Unlocked = !!S.vcv4Unlocked;
      S.battleUnlocked = !!S.battleUnlocked;
      {
        const fb = freshBattle();
        S.battle = Object.assign(fb, S.battle || {});
        if (!Array.isArray(S.battle.exu) || S.battle.exu.length !== 25) {
          const old = Array.isArray(S.battle.exu) ? S.battle.exu : [];
          S.battle.exu = new Array(25).fill(0).map((_, i) => old[i] || 0);
        }
        if (!S.battle.materials || typeof S.battle.materials !== 'object') S.battle.materials = {};
        S.battle.accessories = Array.isArray(S.battle.accessories) ? S.battle.accessories : [];
        S.battle.accessory = typeof S.battle.accessory === 'string' ? S.battle.accessory : null;
        S.battle.crafting = S.battle.crafting && typeof S.battle.crafting === 'object' ? S.battle.crafting : null;
        S.battle.hp100Kill = !!S.battle.hp100Kill;
        S.battle.exu42Unlocked = !!S.battle.exu42Unlocked;
        S.battle.kills = isFinite(S.battle.kills) ? Math.floor(S.battle.kills) : 0;
        for (const k of ['xp','xpMax','hp','maxHp','atk','def']) {
          S.battle[k] = isFinite(S.battle[k]) ? S.battle[k] : (S.battle[k] > 0 ? Number.MAX_VALUE : 0);
        }
        S.battle.spawnOn = S.battle.spawnOn !== false;
        S.battle.autoAttack = S.battle.autoAttack !== false;
        if (!Array.isArray(S.battle.monsters)) S.battle.monsters = [];
        if (!Array.isArray(S.battle.weapons)) S.battle.weapons = ['branch'];
        if (!S.battle.weapons.includes('branch')) S.battle.weapons.unshift('branch');
        if (S.battle.weapon && S.battle.weapon !== 'branch' && !S.battle.weapons.includes(S.battle.weapon)) S.battle.weapons.push(S.battle.weapon);
        if (S.battle.accessory && !S.battle.accessories.includes(S.battle.accessory)) S.battle.accessories.push(S.battle.accessory);
        if (!S.battle.weapon || !S.battle.weapons.includes(S.battle.weapon)) S.battle.weapon = 'branch';
      }
      if (!Array.isArray(S.mu) || S.mu.length !== 15) S.mu = new Array(15).fill(0);
      S.mu = S.mu.map(x => (isFinite(x) && x > 0 ? Math.floor(x) : 0));
      S.createdAt = isFinite(S.createdAt) && S.createdAt > 0 ? S.createdAt : Date.now();
      S.playTime = isFinite(S.playTime) && S.playTime > 0 ? S.playTime : 0;
      S.gameTime = BN.max(BN.zero(), BN.from(S.gameTime || 0));
      S.speed = BN.max(BN.from(1e-300), BN.from(S.speed || 1));
      if (!Array.isArray(S.ncGameTimes) || S.ncGameTimes.length !== 12) S.ncGameTimes = new Array(12).fill(null);
      S.ncGameTimes = S.ncGameTimes.map(x => (x === null || x === undefined ? null : BN.from(x)));
      S.ncGameRun = BN.max(BN.zero(), BN.from(S.ncGameRun || 0));
      S.rcGameRun = BN.max(BN.zero(), BN.from(S.rcGameRun || 0));
      S.totalCells = BN.max(BN.zero(), BN.from(S.totalCells));
      S.maxCells = BN.max(BN.zero(), BN.from(S.maxCells));
      S.leyResets = isFinite(S.leyResets) && S.leyResets > 0 ? Math.floor(S.leyResets) : 0;
      S.flowerResets = isFinite(S.flowerResets) && S.flowerResets > 0 ? Math.floor(S.flowerResets) : 0;
      S.leyTime = isFinite(S.leyTime) && S.leyTime > 0 ? S.leyTime : 0;
      S.flowerTime = isFinite(S.flowerTime) && S.flowerTime > 0 ? S.flowerTime : 0;
      S.renFastest = isFinite(S.renFastest) && S.renFastest > 0 ? S.renFastest : null;
      S.leyFastest = isFinite(S.leyFastest) && S.leyFastest > 0 ? S.leyFastest : null;
      S.flowerFastest = isFinite(S.flowerFastest) && S.flowerFastest > 0 ? S.flowerFastest : null;
      S.renBestRate = S.renBestRate ? BN.from(S.renBestRate) : null;
      S.renMaxCells = BN.max(BN.one(), BN.from(S.renMaxCells || 1));
      S.renMaxCells = BN.max(S.renMaxCells, S.cells);
      S.leyBestRate = S.leyBestRate ? BN.from(S.leyBestRate) : null;
      S.flowerBestRate = S.flowerBestRate ? BN.from(S.flowerBestRate) : null;
      if (!Array.isArray(S.ncTimes) || S.ncTimes.length !== 12) S.ncTimes = new Array(12).fill(null);
      if (!Array.isArray(S.ncTotal) || S.ncTotal.length !== 12) S.ncTotal = new Array(12).fill(0);
      if (!Array.isArray(S.ncMax) || S.ncMax.length !== 12) S.ncMax = new Array(12).fill(null);
      S.ncMax = S.ncMax.map(x => (x === null || x === undefined ? null : BN.from(x)));
      if (!Array.isArray(S.ncAttempts) || S.ncAttempts.length !== 12) S.ncAttempts = new Array(12).fill(0);
      if (!S.resetLogs || typeof S.resetLogs !== 'object') S.resetLogs = { ren: [], ley: [], flower: [] };
      for (const kk of ['ren','ley','flower']) if (!Array.isArray(S.resetLogs[kk])) S.resetLogs[kk] = [];
      S.resetLogs.ren = S.resetLogs.ren.slice(0, 10);
      S.resetLogs.ley = S.resetLogs.ley.slice(0, 10);
      S.resetLogs.flower = S.resetLogs.flower.slice(0, 10);
      S.autoEnvOn = !!S.autoEnvOn; S.autoLeyOn = !!S.autoLeyOn; S.autoFlowerOn = !!S.autoFlowerOn;
      const numOrNull = v => (v === null || v === undefined || v === '') ? null : (isFinite(v) && v >= 0 ? Number(v) : null);
      S.autoEnvMax = numOrNull(S.autoEnvMax);
      S.autoLeyMax = numOrNull(S.autoLeyMax);
      S.autoFlowerMax = numOrNull(S.autoFlowerMax);
      S.autoRenOn = !!S.autoRenOn;
      S.autoRuOn = !!S.autoRuOn;
      S.autoRenAt = numOrNull(S.autoRenAt);
      S.lang = S.lang === 'en' ? 'en' : 'zh';
      S.confirmRen = S.confirmRen !== false;
      S.confirmFlower = S.confirmFlower !== false;
      S.confirmSac = S.confirmSac !== false;
      S.confirmReset = S.confirmReset !== false;
      S.crystal = BN.max(BN.zero(), BN.from(S.crystal));
      if (!Array.isArray(S.vcv) || S.vcv.length !== 6) S.vcv = Array.from({ length: 6 }, () => BN.zero());
      S.vcv = S.vcv.map(x => BN.max(BN.zero(), BN.from(x)));
      if (!Array.isArray(S.vcvBought) || S.vcvBought.length !== 6) S.vcvBought = S.vcv.map(x => Math.floor(x.toNumber()));
      S.vcvBought = S.vcvBought.map(x => (isFinite(x) && x > 0 ? Math.floor(x) : 0));
      S.vcvUp = isFinite(S.vcvUp) && S.vcvUp > 0 ? Math.floor(S.vcvUp) : 0;
      S.cap = isFinite(S.cap) && S.cap > 0 ? Math.floor(S.cap) : 0;
      S.ley = isFinite(S.ley) && S.ley > 0 ? Math.floor(S.ley) : 0;
      if (S.ley < S.renFreeLey) S.ley = S.renFreeLey;
      S.flower = isFinite(S.flower) && S.flower > 0 ? Math.floor(S.flower) : 0;
      S.time = isFinite(S.time) && S.time > 0 ? S.time : 0;
      S.renTime = isFinite(S.renTime) && S.renTime > 0 ? S.renTime : 0;
      S.renGameTime = BN.max(BN.zero(), BN.from(S.renGameTime || 0));
      if (S.growth !== 1e4 && S.growth !== 3000 && S.growth !== 1000 && S.growth !== 300) S.growth = 1e4;
      if (S.mode !== 'k') S.mode = 'log';
      ensureMundisQuotes();
    } catch (e) { }
  }

  function startCells() { return S.rcDone[2] ? 100 : 1; }
