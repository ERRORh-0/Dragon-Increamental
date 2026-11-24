'use strict';

  function mundisBuff(t) { return S.mundisSacrifice.cmp(t) >= 0; }

  function allRenUpgradesBought() {
    return S.renUp.every(x => x > 0) && S.ru.every(Boolean);
  }

  function goal3Progress() {
    if (S.mundisUnlocked) return 100;
    const bought = S.renUp.filter(x => x > 0).length + S.ru.filter(Boolean).length;
    return Math.min(100, bought * 4 + (nc12At500() ? 40 : 0));
  }

  function checkMundisUnlock() {
    if (S.mundisUnlocked) return;
    if (S.ncDone.every(Boolean) && allRenUpgradesBought() && nc12At500()) {
      S.mundisUnlocked = true;
      S.mundisUnlockAt = Date.now();
      save();
    }
  }

  function mundisLine(i) {
    if (S.mundisSpecialLines && S.mundisSpecialLines.length) return S.mundisSpecialLines[i] || '';
    if (S.mundisSpecialLine) return i === 0 ? S.mundisSpecialLine : '';
    const a = MUNDIS_LINES.map((x, j) => tr(x, MUNDIS_LINES_EN[j]));
    return a[i] || '';
  }

  function startMundisDialog() {
    if (!S.mundisUnlocked || S.mundisDialogActive) return;
    S.mundisSeen = true;
    S.mundisDialogActive = true;
    S.mundisDialogIndex = 0;
    S.mundisSpecialLine = null;
    S.mundisSpecialLines = [];
    S.mundisSpecialIndex = 0;
  }

  function ensureMundisQuotes() {
    if (S.mundisQuotes.length) return;
    if (S.mundisUnlocked || S.nucleusIn || S.nucleusResets > 0) {
      S.mundisQuotes = MUNDIS_LINES.slice();
      S.mundisSeen = true;
    }
  }
  function nextMundisDialog() {
    if (!S.mundisDialogActive) return;
    if (S.mundisSpecialLines && S.mundisSpecialLines.length) {
      if (S.mundisSpecialIndex < S.mundisSpecialLines.length - 1) {
        S.mundisSpecialIndex += 1;
        S.mundisDialogIndex = S.mundisSpecialIndex;
      } else {
        for (const line of S.mundisSpecialLines) S.mundisQuotes.push(line);
        S.mundisSpecialLines = [];
        S.mundisSpecialIndex = 0;
        S.mundisDialogActive = false;
      }
      return;
    }
    if (S.mundisSpecialLine) {
      S.mundisQuotes.push(S.mundisSpecialLine);
      S.mundisSpecialLine = null;
      S.mundisDialogActive = false;
      return;
    }
    if (S.mundisDialogIndex < MUNDIS_LINES.length - 1) {
      S.mundisDialogIndex += 1;
    } else {
      S.mundisDialogActive = false;
      S.mundisQuotes = MUNDIS_LINES.slice();
    }
  }

  function sacrificeToMundis() {
    if (!S.mundisUnlocked || S.renown.isZero()) return false;
    const amount = S.renown;
    S.mundisSacrifice = S.mundisSacrifice.add(amount);
    S.renown = BN.zero();
    return true;
  }

  function rcUnlocked() { return mundisBuff(1e25); }
  function rc7Unlocked() { return mundisBuff(1e120); }

  function nucleusUnlocked() { return mundisBuff(1e64); }

  function nucleusGain() {
    const e = S.cells.log10().sub(100).div(60);
    return e.exp10().floor();
  }

  function enterNucleus() {
    if (!nucleusUnlocked()) return false;
    S.nucleusIn = true;
    S.crystal = BN.zero();
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
    S.renMaxCells = BN.from(startCells());
    return true;
  }

  function nucleusReset() {
    if (!S.nucleusIn || !S.renownUnlocked || S.ncActive || S.rcActive) return false;
    if (S.cells.cmp(1e100) < 0) return false;
    const gain = nucleusGain();
    if (gain.cmp(S.nucleusCrystals) > 0) S.nucleusCrystals = gain;
    S.nucleusResets += 1;
    S.nucleusIn = false;
    S.crystal = BN.zero();
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
    S.renMaxCells = BN.from(startCells());
    return true;
  }

  function muCount(index) {
    if (index < 5) return S.mu[index] || 0;
    return S.mu[index] ? 1 : 0;
  }

  function buyMu(index) {
    const def = MU_DEFS[index];
    if (!nucleusUnlocked() || S.nucleusResets <= 0 || !def) return false;
    const l = muCount(index);
    if (!def.rep && l > 0) return false;
    if (index === 2 && 100 * Math.pow(0.95, l) <= 10) return false;
    const price = BN.from(def.price(l));
    if (S.nucleusCrystals.cmp(price) < 0) return false;
    S.mu[index] = l + 1;
    if (index === 7) { S.autoFlowerOn = true; S.autoFlowerMax = null; }
    return true;
  }
