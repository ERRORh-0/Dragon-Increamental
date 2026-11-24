'use strict';

  function step(dt) {
    const realDt = dt;
    autoAcc += realDt;
    let autoTicks = 0;
    while (autoAcc >= 0.05 && autoTicks < 20) {
      autoAcc -= 0.05;
      autoTicks += 1;
      runAutobuyers(autoTick % (mundisBuff(1e9) ? 2 : 10) === 0);
      runUpgradeAutos();
      autoTick += 1;
    }
    if (autoTicks >= 20) autoAcc = 0;

    const m = prodMul();
    const scale = S.speed.mul(S.rcActive === 3 ? 0.001 : 1);
    const d = BN.from(realDt).mul(scale);
    S.gameTime = S.gameTime.add(d);
    S.playTime += realDt;
    S.leyTime += realDt;
    S.flowerTime += realDt;
    const cellsBefore = S.cells.clone();
    if (ncOn(12)) {
      const cr = outRate(0, m).add(outRate(1, m).mul(5));
      S.cells = S.cells.add(cr.mul(d));
      S.n[0] = S.n[0].add(outRate(2, m).mul(d));
      S.n[1] = S.n[1].add(outRate(3, m).mul(d));
      S.n[2] = S.n[2].add(outRate(4, m).mul(d));
      S.n[3] = S.n[3].add(outRate(5, m).mul(d));
    } else if (S.rcActive === 5) {
      S.cells = S.cells.add(cellRate().mul(d));
    } else if (S.rcActive === 10) {
      const cr = S.nucleusIn ? outRate(0, m).pow(0.8) : outRate(0, m);
      S.n[0] = S.n[0].add(outRate(1, m).mul(d));
      S.n[1] = S.n[1].add(outRate(2, m).mul(d));
      S.n[2] = S.n[2].add(outRate(3, m).mul(d));
      S.antimatter = S.antimatter.add(outRate(4, m).add(outRate(5, m)).mul(d));
      S.cells = S.cells.add(cr.mul(d));
    } else if (S.rcActive === 8) {
      const cr = S.nucleusIn ? outRate(0, m).pow(0.8) : outRate(0, m);
      S.n[0] = S.n[0].add(outRate(1, m).mul(d));
      S.n[1] = S.n[1].add(outRate(2, m).mul(d));
      S.strange = S.strange.add(outRate(3, m).mul(d));
      S.n[3] = S.n[3].add(outRate(4, m).mul(d));
      S.n[4] = S.n[4].add(outRate(5, m).mul(d));
      S.cells = S.cells.add(cr.mul(d));
    } else {
      const rates = [];
      for (let i = 1; i < 6; i++) rates[i - 1] = outRate(i, m);
      const cr = S.nucleusIn ? outRate(0, m).pow(0.8) : outRate(0, m);
      for (let i = 0; i < 5; i++) S.n[i] = S.n[i].add(rates[i].mul(d));
      S.cells = S.cells.add(cr.mul(d));
    }
    S.time += realDt;
    S.renTime += realDt;
    S.renGameTime = S.renGameTime.add(d);
    if (S.rcActive === 6) {
      S.rcSacT += dt;
      if (S.rcSacT >= 1) {
        S.rcSacT = 0;
        if (S.n[5].cmp(1) >= 0) {
          for (let i = 0; i < 5; i++) S.n[i] = BN.zero();
        }
      }
    }
    if (S.rcDone[5] && S.rcAutoSacOn && !S.rcActive && S.n[5].cmp(1) >= 0) {
      const gain = sacrificeValue(S.n[0]);
      const cur = S.sacrifice;
      const ratio = cur.isZero() ? Infinity : gain.div(cur).toNumber();
      if (ratio >= (S.rcAutoSacRatio || 0)) doSacrifice();
    }
    if (mundisBuff(1e27) && S.renFastest && S.renFastest > 0) {
      S.renPassive += (0.4 / S.renFastest) * dt;
      if (S.renPassive >= 1) {
        const n = Math.floor(S.renPassive);
        S.renResets += n;
        S.renPassive -= n;
      }
    }
    if (ncOn(7)) {
      S.nc7T += dt;
      let steps = 0;
      while (S.nc7T >= 0.5 && steps < 10) {
        S.nc7T -= 0.5;
        continuumStep();
        steps += 1;
      }
    }
    const cellGain = S.cells.sub(cellsBefore);
    S.totalCells = S.totalCells.add(cellGain);
    S.maxCells = BN.max(S.maxCells, S.cells);
    S.renMaxCells = BN.max(S.renMaxCells, S.cells);
    if (S.nucleusIn && S.cells.cmp(1e120) >= 0) S.nucleusReached = true;
    if (S.vcv.some(x => !x.isZero())) {
      for (let i = 5; i >= 1; i--) S.vcv[i - 1] = S.vcv[i - 1].add(vcvRateAt(i).mul(dt));
      S.crystal = S.crystal.add(vcvRateAt(0).mul(dt));
    }
    if (ncOn(2)) S.ncBuyT += dt;
    if (ncOn(11) && !S.ncAnti.isZero()) {
      S.ncAnti = S.ncAnti.mul(BN.from(5).pow(dt));
    }
    autoRenAcc += dt;
    if (autoRenAcc >= 1) {
      autoRenAcc = 0;
      if (S.rcDone[10]) S.renResets += 1;
      if (S.ncDone[11] && S.autoRenOn && S.autoRenAt !== null && !S.ncActive && !S.rcActive && !S.nucleusIn &&
          S.cells.cmp(1e100) >= 0 && renownGain().cmp(S.autoRenAt) >= 0) {
        doRenownPrestige(true);
      }
    }
    autoRuAcc += realDt;
    if (autoRuAcc >= 1) {
      autoRuAcc = 0;
      if (mundisBuff(1e100) && S.autoRuOn) {
        for (let i = 0; i < 5; i++) buyRenUpgrade(i);
      }
    }
    if (S.rcActive) {
      S.rcRunTime += realDt;
      S.rcGameRun = S.rcGameRun.add(d);
      S.rcMax[S.rcActive - 1] = S.rcMax[S.rcActive - 1] === null ? S.cells.clone() : BN.max(S.rcMax[S.rcActive - 1], S.cells);
      if (!S.rcNotified && S.cells.cmp(RC_TARGET[S.rcActive - 1]) >= 0) {
        S.rcNotified = true;
        notice(RC_DEFS[S.rcActive - 1].key + tr(' 可以完成'));
      }
      if (S.rcActive === 3 && S.rcRunTime >= 100 && S.cells.cmp(RC_TARGET[2]) < 0) {
        exitRC();
        say(tr('RC3 结束：现实时间达到 100 秒'));
      }
      if (S.rcActive === 11) {
        S.rcSeqT += realDt;
        while (S.rcSeqT >= 1) {
          S.rcSeqT -= 1;
          S.rcSeq = (S.rcSeq + 1) % 6;
        }
      }
      if (S.rcActive === 12 && S.rcRunTime > 10 && S.cells.cmp(RC_TARGET[11]) < 0) {
        exitRC();
        say(tr('RC12 结束：超过 10 秒'));
      }
    }
    if (S.ncActive) {
      S.ncRunTime += realDt;
      S.ncGameRun = S.ncGameRun.add(d);
      const ci = S.ncActive - 1;
      S.ncMax[ci] = S.ncMax[ci] === null ? S.cells.clone() : BN.max(S.ncMax[ci], S.cells);
      if (!S.ncNotified && S.cells.cmp(1e100) >= 0) {
        S.ncNotified = true;
        notice(NC_DEFS[ci].key + tr(' 可以完成'));
      }
      if (S.cells.cmp(1e100) < 0 && ncOn(11) && S.ncAnti.cmp(S.cells) > 0) {
        failNC();
      }
    }
    battleCheckUnlocks();
    battleTick(realDt, d.toNumber());
  }

  function actionEtas() {
    const inc = cellRate();
    const list = [];
    const need = c => {
      if (S.cells.cmp(c) >= 0) return 0;
      if (inc.isZero()) return Infinity;
      const t = c.sub(S.cells).div(inc).toNumber();
      return isFinite(t) ? t : Infinity;
    };
    for (let i = 0; i < 6; i++) {
      if (lowerCur(i) >= 0 || (ncOn(4) && i >= 4)) continue;
      list.push(need(tierCost(i)));
    }
    if (!ncOn(8)) list.push(need(envCost()));
    if (!ncOn(4)) {
      const want = leyNeed();
      if (S.n[5].cmp(want) < 0) {
        let cost = BN.zero();
        for (let j = S.bought[5]; j < want; j++) {
          cost = cost.add(BN.from(CFG.tiers[5].base).mul(BN.from(CFG.tiers[5].growth).pow(j)));
        }
        list.push(need(cost));
      }
    }
    return list;
  }

  let saveAt = 0;

  load();
  buildRows();
  buildAutos();
  buildRu();
  buildNc();
  buildRc();
  buildMu();
  buildBattleUI();
  buildVcv();
  bind();
  el.growth.value = String(S.growth);
  el.mode.value = S.mode;
  render();

  let last = performance.now();

  function frame(now) {
    let dt = (now - last) / 1000;
    last = now;
    if (dt > 0.25) dt = 0.25;
    if (dt < 0) dt = 0;
    step(dt);
    render();
    saveAt += dt;
    if (saveAt > 5) { saveAt = 0; save(); }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
