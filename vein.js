'use strict';

  function envStepBase() {
    const raw = BN.from(CFG.capGrowth).mul(BN.from(1 + flowerEff())).mul(ruOn(6) ? 10 : 1);
    if (raw.cmp(1e12) > 0) {
      const x = raw.div(1e12).toNumber();
      const t = 1e12 * (Math.sqrt(3 + Math.log10(9 + (isFinite(x) ? x : Number.MAX_VALUE))) - 1);
      return BN.from(t);
    }
    return raw;
  }

  function envCap() {
    const start = S.nucleusIn ? BN.one() : (ruOn(3) ? BN.from(1e10) : BN.from(CFG.startCap));
    let v = start.mul(BN.from(envStepBase()).pow(S.cap)).mul(renCapMul());
    if (S.nucleusIn && S.mu[1] > 0) v = v.mul(BN.from(100).pow(S.mu[1]));
    if (S.nucleusIn && S.mu[6] > 0) {
      const t = S.ncGameTimes.filter(x => x !== null).reduce((a, b) => (a === null || b.cmp(a) < 0 ? b : a), null);
      if (t) {
        const f = Math.min(1e8, 1e6 / Math.max(1e-9, t.toNumber()));
        v = v.mul(BN.from(f));
      }
    }
    if (S.battle && S.battle.exu[7]) v = v.mul(BN.from(Math.max(1, S.battle.xpMax)).pow(10));
    if (S.ncDone[1]) v = v.mul(BN.from(1 + 3 * S.renTime).pow(0.5));
    return v;
  }

  function flowExp() { return Math.pow(0.999, -Math.min(1e6, flowerEff())); }

  function softExp() {
    if (S.nucleusIn) return 0.2;
    if (ncOn(9)) return 0.6;
    if (S.ncDone[6]) return 0.8;
    return 0.75;
  }

function flowerEff() {
    let f = (S.flower + (S.battle ? S.battle.flowers : 0)) * (ruOn(4) ? 2 : 1);
    if (S.rcActive === 2) f *= 0.1;
    if (S.rcDone[1]) f *= 1.1;
    if (S.nucleusIn) f *= 0.2 * Math.pow(1.05, Math.min(1000, S.mu[4] || 0));
    return f;
  }

function xMul()    { if (ncOn(10) && flowerEff() === 0) return 1; return 2 * Math.log10(10 + 10 * flowerEff()); }

function outRate(i, m) {
    if (S.cvDisabled[i]) return BN.zero();
    if (S.rcActive === 11 && [0,2,4,1,3,5][S.rcSeq] === i) return BN.zero();
    let r = BN.from(CFG.tick).mul(effTier(i)).mul(m).mul(S.tierX[i]);
    if (i === 0) r = r.mul(renTier1Mul());
    if (i <= 3) r = r.mul(ru21Mul());
    r = r.mul(sacMulForTier(i));
    if (ncOn(5)) {
      r = r.div(BN.max(BN.one(), S.cells.log10()));
      if (i <= 4) r = r.div(BN.max(BN.one(), S.n[i + 1].log10()));
    }
    if (S.ncDone[4]) r = r.mul(BN.max(BN.one(), S.cells.log10()));
    if (S.rcDone[4] && i <= 4) r = r.mul(BN.max(BN.one(), S.renown).pow(2));
    if (S.rcActive === 10 && i <= 3 && S.antimatter.cmp(1) > 0) {
      r = r.div(S.antimatter.pow(0.6));
    }
    if (S.nucleusIn) r = r.pow(0.4);
    return r;
  }

  function vcvAllNC() { return S.ncDone.every(Boolean); }

  function ncFastestTotal() {
    if (S.ncTimes.some(x => x === null)) return null;
    return S.ncTimes.reduce((a, b) => a + b, 0);
  }

  function vcvUnlocked(i) {
    if (i === 0) return vcvAllNC();
    if (i === 1) {
      const t = ncFastestTotal();
      return vcvAllNC() && t !== null && t < 8;
    }
    if (i === 2) return !!S.nucleusReached;
    if (i === 3) return !!S.vcv4Unlocked;
    return false;
  }

  function vcvMult(i) {
    const rc = S.rcDone[0] ? 5 : 1;
    const rc2 = S.rcDone[1] ? 5 : 1;
    let m = BN.from(VCV_BASE[i]).pow(S.vcvBought[i]).mul(BN.from(10).pow(S.vcvUp)).mul(rc * rc2);
    if (S.battle && S.battle.exu[13]) m = m.mul(BN.from(1 + S.battle.kills / 100));
    if (S.battle && S.battle.exu[17] && i === 5) m = m.mul(BN.from(1 + Math.sqrt(Math.max(0, S.battle.xpMax))));
    if (S.nucleusIn) {
      if (S.mu[0] > 0) m = m.mul(BN.from(2).pow(S.mu[0]));
      if (i === 0 && S.mu[8] > 0) m = m.mul(BN.one().add(BN.from(S.flower).pow(0.1)));
      m = m.pow(0.5);
    }
    if (!S.nucleusIn && S.mu[5] > 0) m = m.mul(BN.one().add(S.nucleusCrystals).pow(2));
    return m;
  }

  function vcvRateAt(i) {
    if (S.vcv[i].isZero()) return BN.zero();
    let r = vcvMult(i).mul(S.vcv[i]);
    if (S.battle && S.battle.weapon === 'gel') r = r.mul(2);
    return r;
  }

  function vcvRate() {
    return vcvRateAt(0);
  }

  function vcvCost(i) {
    return BN.from(10).pow(VCV_START_E[i] + VCV_GROWTH_E[i] * S.vcvBought[i]);
  }

  function buyVcv(i) {
    if (!S.ru[8] || !vcvUnlocked(i)) return false;
    const c = vcvCost(i);
    if (S.renown.cmp(c) < 0) return false;
    S.renown = S.renown.sub(c);
    S.vcv[i] = S.vcv[i].add(1);
    S.vcvBought[i] += 1;
    return true;
  }
  function buyVcvMax(i) {
    if (!S.ru[8] || !vcvUnlocked(i) || !S.rcDone[6]) return 0;
    let n = 0;
    for (let k = 0; k < 10000; k++) {
      const c = vcvCost(i);
      if (S.renown.cmp(c) < 0) break;
      S.renown = S.renown.sub(c);
      S.vcv[i] = S.vcv[i].add(1);
      S.vcvBought[i] += 1;
      n += 1;
    }
    return n;
  }

  function vcvUpCost() { return BN.from(10).pow(S.vcvUp * S.vcvUp); }

  function buyVcvUp() {
    if (!S.ru[8]) return false;
    const c = vcvUpCost();
    if (S.crystal.cmp(c) < 0) return false;
    S.crystal = S.crystal.sub(c);
    S.vcvUp += 1;
    return true;
  }

  function cvBoost() {
    if (S.rcActive === 2) return BN.one();
    const c = BN.one().add(S.crystal);
    if (S.nucleusIn) return c.pow(0.5);
    return c.pow(S.rcDone[4] ? 5 : 2);
  }

  function envMul() {
    const k = envCap();
    let r;
    if (S.mode === 'k') r = k.pow(flowExp());
    else {
      const exp = (ruOn(2) ? 2.5 : 1) * flowExp();
      r = BN.max(BN.one(), k.log10()).pow(exp);
    }
    if (S.ncDone[3]) r = r.mul(k.pow(0.01));
    return r;
  }

  function leyBase() {
    let base = 5;
    if (S.nucleusIn) base = 10 * Math.pow(2, Math.min(1024, S.mu[3] || 0));
    if (S.ncDone[7]) base *= 1.25;
    if (mundisBuff(1e16)) base *= 1.6;
    return base;
  }

  function leyMul() {
    const lv = renEnabled() ? S.ley : Math.max(0, S.ley - S.renFreeLey);
    return BN.from(leyBase()).pow(lv);
  }

  function capBoost() {
    let lg = (1 + 0.5 * flowerEff()) * Math.log10(1.25);
    if (!isFinite(lg)) lg = 1e300;
    if (lg > 1e300) lg = 1e300;
    if (lg > 2) lg = 2 + (S.nucleusIn && S.mu[9] ? 0.6 : 0.5) * (lg - 2);
    return BN.from(10).pow(Math.min(1e300, lg * Math.max(0, S.cap)));
  }

  function prodMul() {
    let m = envMul().mul(leyMul()).mul(capBoost()).mul(renAllMul()).mul(ru22Mul());
    if (ncOn(2)) m = m.mul(Math.min(1, S.ncBuyT / 10));
    if (S.ncDone[1]) m = m.mul(BN.from(1 + 500 * S.renTime).pow(0.5));
    m = m.mul(cvBoost());
    return m;
  }

  function effTier(i) {
    const n = S.n[i];
    if (n.isZero()) return BN.zero();
    if (i > 0) {
      if (S.nucleusIn) {
        const k = envCap();
        return n.cmp(k) > 0 ? k.clone() : n.clone();
      }
      return n.clone();
    }
    const k = envCap();
    const e = softExp();
    return k.pow(1 - e).mul(n.pow(e));
  }

  function cellRate() {
    const m = prodMul();
    if (S.rcActive === 5) {
      let r = BN.zero();
      for (let i = 1; i < 6; i++) r = r.add(outRate(i, m).mul(RC5_RATE[i] / CFG.tick));
      return r;
    }
    if (ncOn(12)) return outRate(0, m).add(outRate(1, m).mul(5));
    if (S.nucleusIn) return outRate(0, m).pow(0.8);
    return outRate(0, m);
  }

  function sacMulForTier(i) {
    if (ncOn(8) && i >= 1) {
      const cap = BN.from(1e300);
      return S.sacrifice.cmp(cap) > 0 ? cap : S.sacrifice;
    }
    if (ncOn(6)) {
      if (i === 5) return S.sacrifice.pow(0.8);
      if (i >= 1 && i <= 4) return S.sacrifice.pow(0.2);
    }
    if (i === 5) return S.sacrifice;
    return BN.one();
  }

  function tierCross(i) {
    if (tierCrossCache[i] !== undefined) return tierCrossCache[i];
    const t = CFG.tiers[i];
    const limit = BN.from(1e300);
    let p = BN.from(t.base), b = 0;
    while (p.cmp(limit) <= 0 && b < 10000) {
      b += 1;
      p = p.mul(t.growth);
    }
    tierCrossCache[i] = b;
    return b;
  }

  const tierCrossCache = [];

  function tierCostAt(i, b) {
    const t = CFG.tiers[i];
    
    let c = BN.from(t.base).mul(BN.from(t.growth).pow(b));
    
    const b0 = tierCross(i);
    if (b > b0) {
      const d = b - b0;
      let grow = 100;
      if (S.nucleusIn && S.mu[2] > 0) grow = Math.max(10, 100 * Math.pow(0.95, S.mu[2]));
      c = c.mul(BN.from(grow).pow(d * (d + 1) / 2));
    }
    if (S.rcActive === 8 && S.strange.cmp(1) > 0) {
      c = c.div(S.strange.pow(0.25));
    }
    return c;
  }

  function tierCost(i) {
    const cur = lowerCur(i);
    if (cur >= 0) return nc1Cost(i, S.bought[i]);
    return tierCostAt(i, S.bought[i]);
  }

  function envCost() {
    
    
    const threshold = (S.nucleusIn ? 1 : (ruOn(5) ? 100 : 50)) + (S.rcDone[8] ? 50 : 0);
    const baseGrowth = S.rcActive === 7 ? S.growth * 10 : S.growth;
    let c = BN.from(CFG.env.base).mul(BN.from(baseGrowth).pow(S.cap));
    if (S.cap >= threshold) {
      const d = S.cap - (threshold - 1);
      const e = d * (d + 1) / 2;
      c = c.mul(BN.from(S.nucleusIn ? 1e4 : 10).pow(e));
    }
    return c;
  }

  function leyNeed()   {
    
    const paid = Math.max(0, S.ley - S.renFreeLey);
    return 1 + CFG.ley.add * paid;
  }

  function leyCostNC4() { return 3 + 6 * Math.max(0, S.ley - S.renFreeLey); }

  function flowerCostNC4() { return 5 + 12 * S.flower; }

  function flowerNeed(){
    
    const inc = CFG.flower.growth - (ruOn(7) ? 1 : 0);
    return CFG.flower.base + inc * S.flower;
  }

  function sacrificeValue(n1) {
    const base = BN.max(BN.one(), n1);
    if (S.rcDone[5]) {
      return BN.max(BN.one(), base.pow(0.11).mul(BN.max(BN.one(), S.n[1]).pow(0.01)).mul(BN.max(BN.one(), S.n[2]).pow(0.08)));
    }
    if (ruOn(9)) return base.pow(0.1);
    const lg = base.log10();
    return BN.max(BN.one(), lg.mul(lg));
  }

  function toggleCvDisabled(i) {
    if (S.rcActive === 4 && i > 0) S.cvDisabled[i - 1] = !S.cvDisabled[i - 1];
  }

  function buyEnv() {
    if (ncOn(8) || S.rcActive === 9) return false;
    const c = envCost();
    if (S.cells.cmp(c) < 0) return false;
    S.cells = S.cells.sub(c);
    S.cap += 1;
    return true;
  }

  function buyEnvMax(limit) {
    if (ncOn(8) || S.rcActive === 9) return 0;
    const lim = isFinite(limit) ? Math.max(0, Math.floor(limit)) : 5000;
    let n = 0;
    for (let k = 0; k < 5000 && k < lim; k++) {
      const c = envCost();
      if (S.cells.cmp(c) < 0) break;
      S.cells = S.cells.sub(c);
      S.cap += 1;
      n += 1;
    }
    return n;
  }

  function buyLey() {
    if (ncOn(4)) {
      const c = leyCostNC4();
      if (S.n[3].cmp(c) < 0) return false;
      S.n[3] = S.n[3].sub(c);
    } else {
      const need = leyNeed();
      if (S.n[5].cmp(need) < 0) return false;
    }
    const lt = S.leyTime;
    S.leyResets += 1;
    if (lt > 0) {
      if (S.leyFastest === null || lt < S.leyFastest) S.leyFastest = lt;
      const rate = BN.one().div(lt);
      if (S.leyBestRate === null || rate.cmp(S.leyBestRate) > 0) S.leyBestRate = rate;
      pushResetLog('ley', lt, '+1 级', fmt(rate), false);
    }
    S.leyTime = 0;
    S.ley += 1;
    S.cells = BN.from(startCells());
    S.n = zeros();
    S.bought = [0,0,0,0,0,0];
    S.tierX = ones();
    S.sacrifice = BN.one();
    S.sacrificeAt = BN.zero();
    S.time = 0;
    S.ru34NoHigh = true;
    S.ncAnti = BN.zero();
    say('');
    return true;
  }

  function buyLeyMax(limit) {
    const lim = isFinite(limit) ? Math.max(0, Math.floor(limit)) : Number.MAX_SAFE_INTEGER;
    const lt = S.leyTime;
    const paidTarget = Math.floor((S.n[5].toNumber() + 1) / 2);
    const target = Math.max(S.ley, S.renFreeLey + paidTarget);
    const levels = Math.min(lim, target - S.ley);
    if (levels <= 0) return 0;
    S.ley += levels;
    S.leyResets += 1;
    if (lt > 0) {
      if (S.leyFastest === null || lt < S.leyFastest) S.leyFastest = lt;
      const rate = BN.from(levels).div(lt);
      if (S.leyBestRate === null || rate.cmp(S.leyBestRate) > 0) S.leyBestRate = rate;
      pushResetLog('ley', lt, '+' + levels + ' 级', fmt(rate), false);
    }
    S.leyTime = 0;
    S.cells = BN.from(startCells());
    S.n = zeros();
    S.bought = [0,0,0,0,0,0];
    S.tierX = ones();
    S.sacrifice = BN.one();
    S.sacrificeAt = BN.zero();
    S.time = 0;
    S.ru34NoHigh = true;
    S.ncAnti = BN.zero();
    return levels;
  }

  function buyFlowerMax(limit) {
    const lim = isFinite(limit) ? Math.max(0, Math.floor(limit)) : 10000;
    let n = 0;
    while (n < lim && buyFlower(true)) n += 1;
    return n;
  }

  function buyFlower(silent) {
    if (ncOn(8) || S.rcActive === 7) return false;
    const need = flowerNeed();
    if (S.ley < need) return false;
    if (!silent && !ask(S.confirmFlower, '地脉之花会清空：细胞、全部地脉、普通地脉提升、环境上限提升、献祭。\n声望免费地脉提升会保留。继续？')) return false;
    const noSac = S.sacrifice.cmp(1.0000001) < 0;
    const ft = S.flowerTime;
    S.flowerResets += 1;
    if (ft > 0) {
      if (S.flowerFastest === null || ft < S.flowerFastest) S.flowerFastest = ft;
      const rate = BN.one().div(ft);
      if (S.flowerBestRate === null || rate.cmp(S.flowerBestRate) > 0) S.flowerBestRate = rate;
      pushResetLog('flower', ft, '+1 朵', fmt(rate), false);
    }
    S.flowerTime = 0;
    S.flower += 1;
    S.cells = BN.from(startCells());
    S.n = zeros();
    S.bought = [0,0,0,0,0,0];
    S.tierX = ones();
    S.cap = 0;
    S.ley = S.renFreeLey;
    S.sacrifice = BN.one();
    S.sacrificeAt = BN.zero();
    S.time = 0;
    S.ru34NoHigh = true;
    S.ncAnti = BN.zero();
    if (noSac && !S.ruUnlocked[7]) {
      S.ruUnlocked[7] = true;
      say('');
    } else {
      say('');
    }
    return true;
  }

  function doSacrifice() {
    if (S.rcActive === 6 || S.rcActive === 9) return false;
    if (S.bought[5] < 1) return false;
    const n1 = S.n[0];
    if (n1.cmp(10) < 0 || n1.cmp(S.sacrificeAt) < 0) return false;
    S.sacrifice = sacrificeValue(n1);
    if (ncOn(6)) {
      const cap = BN.from(1e100);
      if (S.sacrifice.cmp(cap) > 0) S.sacrifice = cap;
    }
    if (ncOn(8)) {
      const cap = BN.from(1e300);
      if (S.sacrifice.cmp(cap) > 0) S.sacrifice = cap;
    }
    S.sacrificeAt = n1.clone();
    if (!S.ruUnlocked[9] && S.sacrifice.cmp(1e6) > 0) S.ruUnlocked[9] = true;
    if (S.ncDone[5]) {
      for (let i = 1; i <= 3; i++) S.n[i] = BN.zero();
    } else {
      for (let i = 0; i < 5; i++) S.n[i] = BN.zero();
    }
    say('');
    return true;
  }
