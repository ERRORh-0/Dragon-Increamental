'use strict';

  function maxAffordable(i) {
    if (ncOn(4) && i >= 4) return { n: 0, cost: BN.zero() };
    const cur = lowerCur(i);
    if (cur >= 0) {
      const avail = S.n[cur], b = S.bought[i];
      let n = 0, cost = BN.zero();
      for (let k = 0; k < 5000; k++) {
        const p = nc1Cost(i, b + k);
        const nc = cost.add(p);
        if (nc.cmp(avail) > 0) break;
        cost = nc; n += 1;
      }
      return { n: n, cost: cost, currency: cur };
    }
    const t = CFG.tiers[i];
    const next = tierCost(i);
    const cells = S.cells;
    if (cells.cmp(next) < 0) return { n: 0, cost: BN.zero() };

    const b = S.bought[i];
    const b0 = tierCross(i);
    if (b < b0) {
      const G = t.growth;
      const Gm1 = G - 1;
      const R = cells.mul(Gm1).div(next);

      const costFor = n => {
        if (n <= 0) return BN.zero();
        const Gn = BN.from(G).pow(n);
        return next.mul(Gn.sub(1)).div(Gm1);
      };
      const ok = n => costFor(n).cmp(cells) <= 0;

      const approx = R.add(1).log10().toNumber() / Math.log10(G);
      let hi = isFinite(approx) ? Math.floor(approx) + 1 : MAX_BULK;
      if (hi < 1) hi = 1;
      if (hi > MAX_BULK) hi = MAX_BULK;

      let lo = 0;
      if (ok(hi)) {
        lo = hi;
        while (lo < MAX_BULK) {
          const nh = Math.min(MAX_BULK, lo * 2 + 1);
          if (!ok(nh)) { hi = nh; break; }
          lo = nh;
          hi = MAX_BULK;
        }
      }
      while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (ok(mid)) lo = mid; else hi = mid - 1;
      }
      if (lo < b0 - b) return { n: lo, cost: costFor(lo) };
    }
    return maxAffordableIter(i);
  }

function maxAffordableIter(i) {
    const cells = S.cells;
    const start = S.bought[i];
    let n = 0, cost = BN.zero();
    for (let k = 0; k < 5000; k++) {
      const c = tierCostAt(i, start + k);
      const nc = cost.add(c);
      if (nc.cmp(cells) > 0) break;
      cost = nc;
      n += 1;
    }
    return { n: n, cost: cost };
  }

  function runUpgradeAutos() {
    const under = (v, max) => max === null || v < max;
    if (S.ncDone[8] && S.autoEnvOn && under(S.cap, S.autoEnvMax)) {
      if (mundisBuff(1e15)) {
        buyEnvMax(S.autoEnvMax === null ? Infinity : Math.max(0, S.autoEnvMax - S.cap));
      } else buyEnv();
    }
    if (S.ncDone[9] && S.autoLeyOn && under(S.ley, S.autoLeyMax)) {
      if (mundisBuff(1e24) && !ncOn(4)) {
        buyLeyMax(S.autoLeyMax === null ? Infinity : Math.max(0, S.autoLeyMax - S.ley));
      } else buyLey();
    }
    if ((S.ncDone[10] || S.mu[7]) && S.autoFlowerOn && under(S.flower, S.autoFlowerMax)) {
      if (S.mu[7]) buyFlowerMax(S.autoFlowerMax === null ? Infinity : Math.max(0, S.autoFlowerMax - S.flower));
      else buyFlower(true);
    }
  }

function runAutobuyers(allowMax) {
    if (!S.autoUnlocked || ncOn(7)) return;
    for (let i = 5; i >= 0; i--) {
      if (!S.autoOn[i]) continue;
      if (S.autoMode[i]) {
        if (!allowMax) continue;
        const r = maxAffordable(i);
        if (r.n > 0) {
          if (ncOn(7) && lowerCur(i) < 0) applyTierFraction(i, r.n * 0.1, r.cost.mul(0.1));
          else applyTierBulk(i, r.n, r.cost);
        }
      } else {
        if (ncOn(7)) buyTierFraction(i, 0.1);
        else buyTier(i);
      }
    }
  }

  let autoAcc = 0;

  let autoTick = 0;

  let autoRenAcc = 0;
  let autoRuAcc = 0;
