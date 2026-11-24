'use strict';

const CHAOS_REQ_RENOWN = BN.from({ msg: 1000, layer: 1 });
const CHAOS_REQ_CELLS = BN.from({ msg: 80000, layer: 1 });

function rollResonance() {
  let v = Math.floor(Math.random() * 21);
  for (let i = 0; i < 9; i++) {
    const up = Math.max(0, 50 - 9 * i);
    if (Math.random() * 100 < up) v += 10;
    else if (Math.random() * 100 < 1 + i) v -= 5;
  }
  v = Math.abs(v);
  return Math.min(100, Math.max(1, v));
}

function newRawStone() {
  return { id: Date.now() + Math.random(), resonance: rollResonance() };
}

function gemPrefix(g) {
  if (g >= 100) return g > 100 ? '华丽的' : '晶化的';
  if (g > 90) return '超凡的';
  if (g > 70) return '精致的';
  if (g > 40) return '非凡的';
  return '普通的';
}

function clampStatus(a) {
  for (let i = 1; i <= 128; i++) {
    let v = Math.floor(a[i] || 0);
    while (v > 9) v -= 10;
    while (v < 0) v += 10;
    a[i] = v;
  }
}

function chaosRefineStart(id) {
  if (S.refining) return false;
  const idx = S.rawStones.findIndex(r => String(r.id) === String(id));
  if (idx < 0) return false;
  const raw = S.rawStones.splice(idx, 1)[0];
  const status = new Array(129).fill(0);
  S.refining = { rawId: raw.id, resonance: raw.resonance, status, temp: 300, lastDelta: 0 };
  return true;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

function popcount(n) { let c = 0; while (n) { c += n & 1; n >>= 1; } return c; }

function chaosInject(kind) {
  const r = S.refining;
  if (!r) return false;
  const a = r.status, oldT = r.temp;
  if (kind === 'water') {
    if (r.temp < 280) r.temp += 10;
    else if (r.temp > 420) r.temp -= 50;
    const T = r.temp;
    if (T < 300) { for (let i = 2; i <= 128; i++) if (isPrime(i)) a[i] += i % 4; }
    else if (T < 400) { for (let i = 7; i <= 128; i += 7) a[i] -= 7; }
    else { const h = Math.floor(T / 100); a[1] = h; a[128] = h; }
  } else if (kind === 'milk') {
    if (r.temp < 200) r.temp += 20;
    else if (r.temp > 620) r.temp -= 10;
    if (r.temp < 300) { for (let i = 11; i <= 128; i += 11) a[i] += i % 12; }
    else { for (let i = 1; i <= 128; i++) if (a[i] === 0) a[i] = 1; }
  } else if (kind === 'magma') {
    r.temp = Math.min(700, r.temp + 60);
    if (r.temp < 400) { for (let i = 1; i * i <= 128; i++) a[i * i] += 4; }
    if (r.temp >= 300) { for (let i = 1; i <= 128; i++) a[i] -= 1; }
  } else if (kind === 'honey') {
    if (r.lastDelta > 0) { for (let i = 1; i ** 3 <= 128; i++) a[i ** 3] = Math.floor(a[i ** 3] / 2); }
    else if (r.lastDelta < 0) { for (let i = 1; i <= 64; i++) a[i] += 1; }
    else { for (let i = 1; i <= 128; i++) a[i] = 0; }
  } else if (kind === 'nitrogen') {
    if (r.temp > 80) r.temp = 80;
    else if (r.temp < 80) r.temp = Math.floor((r.temp + 80) / 2);
    if (r.temp < 400) { for (let i = 1; i <= 128; i++) if (popcount(i) % 2 === 0) a[i] += 3; }
    else if (r.temp < 800) { for (let i = 2; i <= 128; i++) a[i] -= 1; }
    else {
      let inc = true, dec = true;
      for (let i = 2; i <= 128; i++) { if (a[i] < a[i - 1]) inc = false; if (a[i] > a[i - 1]) dec = false; }
      if (inc || dec) {
        const b = a.slice(1).reverse();
        for (let i = 1; i <= 128; i++) a[i] = b[i - 1];
      } else {
        const b = a.slice(1).sort((x, y) => y - x);
        for (let i = 1; i <= 128; i++) a[i] = b[i - 1];
      }
    }
  } else if (kind === 'mercury') {
    r.temp = Math.floor((r.temp + 880) / 4);
    if (r.temp < 100) {
      for (let i = 1; i <= 128; i++) {
        const f = Math.log(i) - Math.floor(Math.log(i));
        a[i] += f < 0.6 ? 4 : -2;
      }
    } else if (r.temp < 400) {
      for (let i = 3; i <= 128; i += 3) a[i] -= 7;
    } else {
      const T = r.temp;
      if (!isPrime(T) && Math.floor(Math.sqrt(T)) ** 2 !== T) {
        for (let i = 2; i <= 128; i += 2) a[i] -= 1;
      } else {
        let sum = 0; for (let i = 1; i <= 128; i++) sum += a[i];
        const avg = Math.floor(sum / 128);
        for (let i = 1; i <= 128; i++) a[i] = avg;
      }
    }
  } else return false;
  clampStatus(a);
  r.lastDelta = r.temp - oldT;
  return true;
}

function gemEffects(r) {
  const G = r.resonance, a = r.status;
  const sum = new Array(129).fill(0);
  for (let i = 1; i <= 128; i++) sum[i] = sum[i - 1] + a[i];
  const total = sum[128];
  const out = [];
  let primeOk = true;
  for (let i = 2; i <= 128; i++) if (isPrime(i) && a[i] % 10 >= 9) primeOk = false;
  if (primeOk) out.push({ key: 'renown', value: 2 + sum[81] * Math.pow(1 + G, 0.3) + Math.pow(1 + sum[16], 2) });
  let hasZero = false, runZero = 0, maxZero = 0, maxSame = 1, curSame = 1;
  for (let i = 1; i <= 128; i++) {
    if (a[i] === 0) { hasZero = true; runZero++; maxZero = Math.max(maxZero, runZero); } else runZero = 0;
    if (i > 1 && a[i] === a[i - 1]) { curSame++; maxSame = Math.max(maxSame, curSame); } else curSame = 1;
  }
  if (hasZero && maxZero < 3) out.push({ key: 'env', value: 1.5 + Math.pow(1 + total - sum[100] + G * sum[3], 0.3) });
  if (maxSame >= 3) out.push({ key: 'cv', value: 1e5 + Math.pow(Math.max(0, G * total - sum[10]), 1.5) });
  if (total > 1000) out.push({ key: 'vcv', value: 1e3 + sum[10] * G * G });
  if (sum[100] > 0 && G * sum[100] + 1 > 0) {
    const lg = Math.log10(G * sum[100] + 1);
    if (lg - Math.floor(lg) > 0.7) out.push({ key: 'nucleus', value: 1 + 0.001 * G + sum[120] / Math.max(1, total) });
  }
  if (r.temp > 600 && sum[3] > 0) out.push({ key: 'xp', value: 10 + G * sum[100] / sum[3] });
  if (out.length > 4) {
    let seed = Math.floor(G) + 1;
    const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
    out.length = 4;
    out.sort((x, y) => ({ renown: 1, env: 2, cv: 3, vcv: 4, nucleus: 5, xp: 6 })[x.key] - ({ renown: 1, env: 2, cv: 3, vcv: 4, nucleus: 5, xp: 6 })[y.key]);
  }
  return out;
}

function chaosExtract() {
  const r = S.refining;
  if (!r) return false;
  let any = false, Ssum = 0;
  for (let i = 1; i <= 128; i++) { Ssum += r.status[i]; if (r.status[i] !== 0) any = true; }
  if (!any) return false;
  const rr = Ssum % 10;
  const type = (rr === 1 || rr === 6) ? '钻石' : (rr === 2 || rr === 7) ? '黄玉' : (rr === 3 || rr === 8) ? '玛瑙' : (rr === 4 || rr === 9) ? '琥珀' : '紫晶';
  const gem = {
    id: Date.now() + Math.random(),
    name: gemPrefix(r.resonance) + type,
    resonance: r.resonance,
    temp: r.temp,
    effects: gemEffects(r)
  };
  S.gems.push(gem);
  S.refining = null;
  return true;
}

function gemBonuses() {
  let renown = 1, env = 1, cv = 1, vcv = 1, nucleus = 1, xp = 1;
  for (const id of S.gemSlots) {
    if (id === null) continue;
    const g = S.gems.find(x => x.id === id);
    if (!g) continue;
    for (const e of g.effects) {
      if (e.key === 'renown') renown *= e.value;
      else if (e.key === 'env') env *= e.value;
      else if (e.key === 'cv') cv *= e.value;
      else if (e.key === 'vcv') vcv *= e.value;
      else if (e.key === 'nucleus') nucleus *= e.value;
      else if (e.key === 'xp') xp *= e.value;
    }
  }
  return { renown, env, cv, vcv, nucleus, xp };
}

function gemEquip(id, slot) {
  const g = S.gems.find(x => String(x.id) === String(id));
  if (!g) return false;
  let n = slot === 0 || slot === 1 ? slot : (S.gemSlots[0] === null ? 0 : (S.gemSlots[1] === null ? 1 : 0));
  S.gemSlots[n] = g.id;
  return true;
}

if (typeof window !== 'undefined') {
  window.doChaos = doChaos;
  window.chaosRefineStart = chaosRefineStart;
  window.chaosInject = chaosInject;
  window.chaosExtract = chaosExtract;
  window.gemEquip = gemEquip;
}


function chaosReady() {
  return S.renown.cmp(CHAOS_REQ_RENOWN) >= 0 && S.cells.cmp(CHAOS_REQ_CELLS) >= 0;
}

function chaosSoulGain() {
  const sh = S.renown.cmp(1) > 0
    ? BN.from(10).pow(S.renown.log10().div(1000).sub(1)).floor()
    : BN.zero();
  const lg = Math.max(0, S.cells.log10().toNumber());
  const li = Math.floor(Math.pow(lg / 80000, 0.75));
  return { shadow: sh, light: li };
}

function doChaos() {
  if (!chaosReady()) return false;
  const gain = chaosSoulGain();
  S.shadowSouls = S.shadowSouls.add(gain.shadow);
  S.lightSouls = BN.max(S.lightSouls, BN.from(gain.light));
  S.rawStones.push(newRawStone());
  S.chaosCount += 1;
  S.chaosUnlocked = true;
  if (S.chaosUnequipOnReset) {
    S.gemSlots = [null, null];
    S.chaosUnequipOnReset = false;
  }

  S.cells = BN.one();
  S.maxCells = BN.one();
  S.renMaxCells = BN.one();
  S.renown = BN.zero();
  S.renownTotal = BN.zero();
  S.renResets = 0;
  S.renUp = [0,0,0,0,0];
  S.ru = new Array(10).fill(false);
  S.renFreeLey = 0;
  S.cap = 0;
  S.ley = 0;
  S.flower = 0;
  S.crystal = BN.zero();
  S.nucleusCrystals = BN.zero();
  S.nucleusIn = false;
  S.nucleusResets = 0;
  S.n = zeros();
  S.bought = [0,0,0,0,0,0];
  S.tierX = ones();
  S.vcv = Array.from({ length: 6 }, () => BN.zero());
  S.vcvBought = [0,0,0,0,0,0];
  S.vcvUp = 0;
  S.sacrifice = BN.one();
  S.sacrificeAt = BN.zero();
  S.mundisSacrifice = BN.zero();
  S.ncDone = new Array(12).fill(false);
  S.rcDone = new Array(12).fill(false);
  S.battle = freshBattle();
  S.time = 0;
  S.renTime = 0;
  S.renGameTime = BN.zero();
  S.rcActive = 0;
  S.ncActive = 0;
  S.chaosUnlocked = true;
  save();
  return true;
}
