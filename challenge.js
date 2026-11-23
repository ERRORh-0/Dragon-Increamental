'use strict';

  function ncOn(n)   { return S.ncActive === n || S.rcActive === 1; }

  function nc12At500() { return !!(S.ncMax[11] && S.ncMax[11].cmp(TARGET_500) >= 0); }

  function lowerCur(i) { return i >= 2 && ncOn(1) ? i - 2 : -1; }

  function noDeductTier() { return !!S.ncDone[0] && !ncOn(1); }

  function nc1Cross(i) {
    if (nc1CrossCache[i] !== undefined) return nc1CrossCache[i];
    const limit = BN.from(1e300);
    let p = BN.from(NC1_START[i]), b = 0;
    while (p.cmp(limit) <= 0 && b < 10000) { b += 1; p = p.mul(NC1_INC[i]); }
    nc1CrossCache[i] = b;
    return b;
  }

  const nc1CrossCache = [];

  function nc1Cost(i, b) {
    let c = BN.from(NC1_START[i]).mul(BN.from(NC1_INC[i]).pow(b));
    const b0 = nc1Cross(i);
    if (b > b0) {
      const d = b - b0;
      c = c.mul(BN.from(100).pow(d * (d + 1) / 2));
    }
    return c;
  }

  function buyTier(i) {
    if (ncOn(7)) return false;
    if (ncOn(4) && i >= 4) return false;
    if (S.cvDisabled[i]) return false;
    const c = tierCost(i);
    const noDeduct = noDeductTier();
    const cur = lowerCur(i);
    if (cur >= 0) {
      if (S.n[cur].cmp(c) < 0) return false;
      S.n[cur] = S.n[cur].sub(c);
    } else {
      if (S.cells.cmp(c) < 0) return false;
      if (!noDeduct) S.cells = S.cells.sub(c);
    }
    S.n[i] = S.n[i].add(1);
    S.bought[i] += 1;
    if (i >= 1) S.ru34NoHigh = false;
    if (ncOn(2)) S.ncBuyT = 0;
    if (ncOn(11) && i === 1 && S.ncAnti.isZero()) S.ncAnti = BN.one();
    S.tierX[i] = S.tierX[i].mul(xMul());
    toggleCvDisabled(i);
    return true;
  }

  const MAX_BULK = Number.MAX_SAFE_INTEGER;

function buyMaxTiers() {
    if (ncOn(7)) return false;
    const parts = [];
    let total = 0;
    for (let i = 5; i >= 0; i--) {
      const r = maxAffordable(i);
      if (r.n <= 0) continue;
      applyTierBulk(i, r.n, r.cost);
      total += r.n;
      parts.push(ROMAN[i] + '' + fmt(r.n));
    }
    if (total <= 0) { say(''); return false; }
    say('');
    return true;
  }

  function applyTierBulk(i, n, cost) {
    if (n <= 0) return;
    if (ncOn(4) && i >= 4) return;
    if (S.cvDisabled[i]) return;
    const cur = lowerCur(i);
    if (noDeductTier()) { /* 按原价但不扣细胞 */ }
    else if (cur >= 0) S.n[cur] = S.n[cur].sub(cost);
    else S.cells = S.cells.sub(cost);
    S.n[i] = S.n[i].add(n);
    S.bought[i] += n;
    if (i >= 1) S.ru34NoHigh = false;    if (ncOn(2)) S.ncBuyT = 0;
    if (ncOn(11) && i === 1 && S.ncAnti.isZero()) S.ncAnti = BN.one();
    S.tierX[i] = S.tierX[i].mul(BN.from(xMul()).pow(n));
    toggleCvDisabled(i);
  }

  function applyTierFraction(i, frac, cost) {
    if (!(frac > 0)) return;
    if (ncOn(4) && i >= 4) return;
    if (S.cvDisabled[i]) return;
    if (lowerCur(i) >= 0) { applyTierBulk(i, frac, cost); return; }
    if (!noDeductTier()) S.cells = S.cells.sub(cost);
    S.n[i] = S.n[i].add(frac);
    S.bought[i] += frac;
    if (i >= 1) S.ru34NoHigh = false;
    if (ncOn(2)) S.ncBuyT = 0;
    if (ncOn(11) && i === 1 && S.ncAnti.isZero()) S.ncAnti = BN.one();
    S.tierX[i] = S.tierX[i].mul(BN.from(xMul()).pow(frac));
    toggleCvDisabled(i);
  }

  function buyTierFraction(i, frac) {
    if (ncOn(7)) return false;
    if (lowerCur(i) >= 0) return false;
    const c = tierCost(i).mul(frac);
    if (S.cells.cmp(c) < 0) return false;
    applyTierFraction(i, frac, c);
    return true;
  }

  function continuumCost(i, n) {
    const m = Math.floor(n), frac = n - m;
    let total = BN.zero();
    for (let k = 0; k < m; k++) total = total.add(tierCostAt(i, k));
    if (frac > 0) total = total.add(tierCostAt(i, m).mul(frac));
    return total;
  }

  function continuumTarget(i) {
    if (S.cells.cmp(1) < 0) return 0;
    const t = CFG.tiers[i], base = t.base, G = t.growth;
    const b0 = tierCross(i);
    const c0 = BN.from(base).mul(BN.from(G).pow(b0).sub(1)).div(G - 1);
    if (S.cells.cmp(c0) <= 0) {
      if (i === 0) return Math.max(0, 1 + S.cells.log10().toNumber() / 2);
      return Math.max(0, Math.log(1 + S.cells.toNumber() * (G - 1) / base) / Math.log(G));
    }
    let lo = 0, hi = 5000;
    if (continuumCost(i, hi).cmp(S.cells) <= 0) return hi;
    for (let it = 0; it < 60; it++) {
      const mid = (lo + hi) / 2;
      if (continuumCost(i, mid).cmp(S.cells) <= 0) lo = mid;
      else hi = mid;
    }
    return lo;
  }

  function continuumStep() {
    if (!ncOn(7)) return;
    for (let i = 0; i < 6; i++) {
      if (ncOn(4) && i >= 4) continue;
      const target = continuumTarget(i);
      const delta = target - S.bought[i];
      if (delta > 1e-9) applyTierFraction(i, delta, BN.zero());
    }
  }

  function enterNC(n) {
    if (!S.ncUnlocked || S.ncActive || S.rcActive || n < 1 || n > 12) return false;
    S.ncActive = n;
    S.ncFail = false;
    S.ncNotified = false;
    S.ncAnti = BN.zero();
    S.ncBuyT = 10;
    S.ncRunTime = 0;
    S.ncGameRun = BN.zero();
    S.nc7T = 0;
    S.ncAttempts[n - 1] += 1;
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
    say('');
    return true;
  }

  function exitNC() {
    if (!S.ncActive) return false;
    S.ncActive = 0;
    S.ncFail = false;
    S.ncRunTime = 0;
    S.nc7T = 0;
    say('');
    return true;
  }

  function completeNC() {
    if (!S.ncActive) return false;
    const n = S.ncActive;
    const first = !S.ncDone[n - 1];
    const t = S.ncRunTime;
    S.ncTotal[n - 1] += t;
    if (S.ncTimes[n - 1] === null || t < S.ncTimes[n - 1]) S.ncTimes[n - 1] = t;
    if (S.ncGameTimes[n - 1] === null || S.ncGameRun.cmp(S.ncGameTimes[n - 1]) < 0) S.ncGameTimes[n - 1] = S.ncGameRun.clone();
    if (first) S.ncDone[n - 1] = true;
    S.ncActive = 0;
    S.lastResetChallenge = true;
    S.lastResetChallengeName = NC_DEFS[n - 1].key;
    if (first) showNcBanner(n, first);
    const ok = doRenownPrestige(true);
    save();
    return ok;
  }

  function failNC() {
    if (!S.ncActive) return;
    const n = S.ncActive;
    S.ncActive = 0;
    S.ncFail = true;
    S.ncRunTime = 0;
    S.nc7T = 0;
    say('');
    save();
  }

  function enterRC(n) {
    if (!rcUnlocked() || S.rcActive || S.ncActive || n < 1 || n > 12) return false;
    if (n > 6 && !rc7Unlocked()) return false;
    S.rcActive = n;
    S.rcRunTime = 0;
    S.rcNotified = false;
    S.rcGameRun = BN.zero();
    S.rcAttempts[n - 1] += 1;
    S.cvDisabled = [false,false,false,false,false,false];
    S.rcSacT = 0;
    S.rcSeq = 0;
    S.rcSeqT = 0;
    S.strange = BN.zero();
    S.antimatter = BN.zero();
    S.n = zeros();
    S.bought = [0,0,0,0,0,0];
    S.tierX = ones();
    S.cap = 0;
    S.ley = S.renFreeLey;
    S.flower = 0;
    S.sacrifice = BN.one();
    S.sacrificeAt = BN.zero();
    S.time = 0;
    S.ncBuyT = 10;
    S.nc7T = 0;
    S.ncAnti = BN.zero();
    S.ru34NoHigh = true;
    S.cells = BN.from(startCells());
    return true;
  }

  function exitRC() {
    if (!S.rcActive) return;
    S.rcActive = 0;
    S.rcRunTime = 0;
    S.rcGameRun = BN.zero();
    S.cvDisabled = [false,false,false,false,false,false];
  }

  function showRcBanner(n) {
    el.ncBanner.hidden = true;
    showStamp(RC_DEFS[n - 1].key + ' · ' + (S.lang === 'en' ? RC_DEFS[n - 1].enName : RC_DEFS[n - 1].name));
  }

  function completeRC() {
    if (!S.rcActive) return false;
    const n = S.rcActive;
    const first = !S.rcDone[n - 1];
    if (S.rcTimes[n - 1] === null || S.rcRunTime < S.rcTimes[n - 1]) S.rcTimes[n - 1] = S.rcRunTime;
    if (S.rcGameTimes[n - 1] === null || S.rcGameRun.cmp(S.rcGameTimes[n - 1]) < 0) S.rcGameTimes[n - 1] = S.rcGameRun.clone();
    S.rcDone[n - 1] = true;
    S.rcActive = 0;
    S.rcRunTime = 0;
    S.rcGameRun = BN.zero();
    S.cvDisabled = [false,false,false,false,false,false];
    S.lastResetChallenge = true;
    S.lastResetChallengeName = RC_DEFS[n - 1].key;
    if (first) showRcBanner(n);
    const ok = doRenownPrestige(true);
    save();
    return ok;
  }
