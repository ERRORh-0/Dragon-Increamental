'use strict';

  function renEnabled() { return !ncOn(3); }

  function ruOn(i)   { return !!S.ru[i] && renEnabled(); }

  function ru22Mul() {
    if (!ruOn(1)) return BN.one();
    return BN.from(1 + 2 * S.renResets).pow(1.5);
  }

function ru21Mul() {
    if (!ruOn(0)) return BN.one();
    return S.n[5].mul(Math.log10(2)).exp10();
  }

  function renBaseAdd() {
    return mundisBuff(1e20) ? Math.log10(10 + 12 * S.renResets) : 0;
  }

  function renTier1Mul() {
    if (!renEnabled()) return BN.one();
    return BN.from(3 + renBaseAdd()).pow(S.renUp[0]);
  }

  function renAllMul() {
    if (!renEnabled()) return BN.one();
    return BN.from(2 + renBaseAdd()).pow(S.renUp[1]);
  }

  function renCapMul() {
    let r;
    if (!renEnabled()) {
      r = BN.max(BN.one(), S.renownTotal.mul(5).add(10).log10());
    } else {
      const coeff = BN.from(5).pow(S.renUp[2]);
      const inner = coeff.mul(S.renownTotal).mul(5).add(10);
      if (S.rcDone[3]) {
        const t = Math.min(1000, 1 + Math.max(0, S.renown.log10().toNumber()) / 10);
        r = BN.max(BN.one(), inner.log10().pow(t));
      } else {
        r = BN.max(BN.one(), inner.log10());
      }
    }
    if (S.rcDone[6]) r = r.mul(BN.from(Math.max(1, S.renResets)).pow(2));
    return r;
  }

  function renownGain() {
    const denom = mundisBuff(1e12) ? 80 : 100;
    const e = S.renMaxCells.log10().sub(100).div(denom);
    const double = renEnabled() ? BN.from(2).pow(S.renUp[4]) : BN.one();
    let g = e.exp10().mul(double).mul(S.ncDone[2] ? 10 : 1);
    if (S.rcDone[7]) g = g.mul(BN.max(BN.one(), S.mundisSacrifice).pow(0.1));
    if (S.battle && S.battle.weapon === 'urchin') g = g.pow(1.05);
    return g.floor();
  }

  function pushResetLog(layer, t, gainText, rateText, challenge) {
    const a = S.resetLogs[layer];
    if (a.length >= 10) return;
    a.push({ t: t, gain: gainText, rate: rateText, challenge: !!challenge });
  }

  const renCrossCache = [];
  function renCross(i) {
    if (renCrossCache[i] !== undefined) return renCrossCache[i];
    const limit = BN.from(1e100);
    let p = BN.from(REN_BASE[i]), b = 0;
    while (p.cmp(limit) <= 0 && b < 10000) { b += 1; p = p.mul(REN_INC[i]); }
    renCrossCache[i] = b;
    return b;
  }
  function renCost(i) {
    const b = S.renUp[i];
    let c = BN.from(REN_BASE[i]).mul(BN.from(REN_INC[i]).pow(b));
    const b0 = renCross(i);
    if (b > b0) {
      const d = b - b0;
      c = c.mul(BN.from(100).pow(d * (d + 1) / 2));
    }
    return c;
  }

  function updateRuUnlocks() {
    if (!S.ruUnlocked[5] && S.cells.cmp(1e300) >= 0) {
      S.ruUnlocked[5] = true;
      say('');
    }
    const k = envCap();
    if (!S.ruUnlocked[6] && k.cmp(1e100) > 0 && S.cells.cmp(k.pow(2)) > 0) {
      S.ruUnlocked[6] = true;
      say('');
    }
    if (!S.ruUnlocked[8] && S.ru34NoHigh && S.time <= 10 && S.cells.cmp(1e6) >= 0) {
      S.ruUnlocked[8] = true;
      say('');
    }
  }

  function buyRu(i) {
    if (i < 0 || i >= RU_DEFS.length) return false;
    if (!S.ruUnlocked[i] || S.ru[i] || RU_DEFS[i].pending) return false;
    const cost = BN.from(RU_DEFS[i].price);
    if (S.renown.cmp(cost) < 0) return false;
    S.renown = S.renown.sub(cost);
    S.ru[i] = true;
    say('');
    return true;
  }

  function checkRenownUnlock() {
    if (!S.renownUnlocked && S.cells.cmp(1e100) >= 0) {
      S.renownUnlocked = true;
      say('');
      save();
    }
  }

  function buyRenUpgrade(i) {
    if (!S.renownUnlocked) return false;
    const c = renCost(i);
    if (S.renown.cmp(c) < 0) return false;
    S.renown = S.renown.sub(c);
    S.renUp[i] += 1;
    if (i === 3) {
      
      S.renFreeLey += 1;
      S.ley += 1;
    }
    say('');
    return true;
  }
  function buyRuMax() {
    if (!S.rcDone[9]) return 0;
    let n = 0;
    for (let k = 0; k < 10000; k++) {
      let any = false;
      for (let i = 0; i < 5; i++) if (buyRenUpgrade(i)) { n += 1; any = true; }
      if (!any) break;
    }
    return n;
  }

  function doRenownPrestige(silent, forcedGain) {
    if (!S.renownUnlocked || S.ncActive || S.rcActive || S.nucleusIn) return false;
    if (S.cells.cmp(1e100) < 0) return false;
    const maxGain = renownGain();
    let gain = maxGain;
    if (forcedGain !== undefined && forcedGain !== null && forcedGain !== '') {
      const v = Math.max(1, parseFloat(forcedGain) || 1);
      const g = BN.from(v).floor();
      gain = g.cmp(maxGain) > 0 ? maxGain : g;
    }
    const challengeReset = !!S.lastResetChallenge;
    const challengeName = S.lastResetChallengeName;
    S.lastResetChallenge = false;
    S.lastResetChallengeName = null;
    const rt = S.renTime;
    if (rt > 0) {
      if (S.renFastest === null || rt < S.renFastest) S.renFastest = rt;
      const rate = fmt(gain.div(rt));
      if (S.renBestRate === null || gain.div(rt).cmp(S.renBestRate) > 0) S.renBestRate = gain.div(rt);
      pushResetLog('ren', rt, fmt(gain), rate, challengeName || (challengeReset ? '挑战' : null));
    }
    if (!silent && !ask(S.confirmRen, '声望重置会清空上一轮的所有进度：细胞、地脉、环境上限、普通地脉提升、花与献祭。\n' +
      '保留：声望结晶/总声望结晶、5 个可重复升级、10 个一次性升级、免费地脉提升、自动购买器设置。\n' +
      '本次获得 ' + fmt(gain) + ' 声望结晶，继续？')) return false;

    S.renown = S.renown.add(gain);
    S.renownTotal = S.renownTotal.add(gain);
    S.renResets += 1;
    if (S.rcDone[10]) S.renResets += Math.max(0, S.ley);
    if (S.rcDone[11] && S.renGameTime.cmp(10) >= 0) S.renResets += 100;
    S.autoUnlocked = true;      
S.ncUnlocked = true;        
S.cells = BN.from(startCells());         
S.n = zeros();
    S.bought = [0,0,0,0,0,0];
    S.tierX = ones();
    S.cap = 0;
    S.ley = S.renFreeLey;       
    S.flower = 0;
    S.sacrifice = BN.one();
    S.sacrificeAt = BN.zero();
    S.time = 0;
    S.renTime = 0;
    S.renGameTime = BN.zero();
    S.renMaxCells = BN.one();
    S.cvDisabled = [false,false,false,false,false,false];
    S.leyTime = 0;
    S.flowerTime = 0;
    S.ru34NoHigh = true;
    S.ncRunTime = 0;
    S.nc7T = 0;
    say('');
    return true;
  }
