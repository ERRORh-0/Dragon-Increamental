'use strict';

const BATTLE_TARGET = BN.from({ msg: 308.2552725, layer: 1 });
const VCV4_TARGET = BN.from({ msg: 308.2552725, layer: 1 });
const BATTLE_MATERIAL_NAMES = {
  gel: '凝胶', phospholipid: '磷脂', wing: '蝙蝠翅膀', web: '蛛网', spirit: '灵气', thread: '线'
};
const BATTLE_WEAPON_NAMES = {
  branch: '树枝', urchin: '海胆刺', gel: '凝胶大剑', gelSword: '凝胶短剑',
  phosphorNet: '磷气网', batClub: '蝙蝠棍'
};
const BATTLE_ACCESSORY_NAMES = { charged: '带电凝胶', stone: '石子', kite: '灵气风筝' };
const BATTLE_RECIPES = [
  { id: 'gelSword', name: '凝胶短剑', type: 'weapon', time: 1, cost: { gel: 5 } },
  { id: 'phosphorNet', name: '磷气网', type: 'weapon', time: 3, cost: { phospholipid: 3, spirit: 5, web: 8 } },
  { id: 'thread', name: '线', type: 'material', time: 0.1, cost: { web: 2 } },
  { id: 'kite', name: '灵气风筝', type: 'accessory', time: 10, cost: { spirit: 5, thread: 8 } },
  { id: 'batClub', name: '蝙蝠棍', type: 'weapon', time: 1, cost: { wing: 5, phospholipid: 3 } }
];
const BATTLE_TYPES = [
  { type: 'A', name: '可疑细胞', weight: 10, drop: null },
  { type: 'A', name: '史莱姆统帅', weight: 10, drop: null },
  { type: 'A', name: '巨石', weight: 5, drop: null },
  { type: 'B', name: '嗜血狂蝠', weight: 15, drop: null },
  { type: 'B', name: '海胆', weight: 25, drop: 'urchin' },
  { type: 'B', name: '黄色史莱姆', weight: 15, drop: null },
  { type: 'B', name: '鬼魂', weight: 15, drop: null },
  { type: 'B', name: '幼年龙蜥', weight: 10, drop: null },
  { type: 'C', name: '蜘蛛', weight: 45, drop: null },
  { type: 'C', name: '红色史莱姆', weight: 15, drop: null },
  { type: 'C', name: '荒原幽魂', weight: 15, drop: null },
  { type: 'D', name: '无名灵魂', weight: 20, drop: null },
  { type: 'D', name: '绿色史莱姆', weight: 30, drop: 'gel' },
  { type: 'D', name: '蓝色史莱姆', weight: 15, drop: null }
];

function battleCheckUnlocks() {
  if (!S.battleUnlocked && S.renown.cmp(BATTLE_TARGET) >= 0) S.battleUnlocked = true;
  if (!S.vcv4Unlocked && S.nucleusIn && S.rcActive === 5 && S.cells.cmp(VCV4_TARGET) >= 0) S.vcv4Unlocked = true;
  if (!S.vcv5Unlocked && S.nucleusIn && S.cap === 0 && S.ley <= S.renFreeLey && S.flower === 0 &&
      S.cells.cmp(BN.from({ msg: 800, layer: 1 })) >= 0) S.vcv5Unlocked = true;
  if (!S.battle.exu42Unlocked && S.rcActive === 1 && S.flower === 0 &&
      S.cells.cmp(BN.from({ msg: 6000, layer: 1 })) >= 0) S.battle.exu42Unlocked = true;
  if (!S.mundis1e1000Seen && S.renown.cmp(BN.from({ msg: 1000, layer: 1 })) >= 0) {
    S.mundis1e1000Seen = true;
    S.mundisSpecialLines = [
      '你发展的速度比我想象的快，但仍然远不及天神。',
      '天神并不总是都会认可你。',
      '祂们中的部分会以毁灭为目标。',
      '躲好，不要让祂们找到你。',
      '除非你做好了万全的准备。'
    ];
    S.mundisSpecialIndex = 0;
    S.mundisSpecialLine = null;
    S.mundisDialogActive = true;
    S.mundisDialogIndex = 0;
    S.mundisSeen = true;
  }
  if (!S.chaosUnlocked && S.renown.cmp(BN.from({ msg: 1000, layer: 1 })) >= 0 &&
      S.cells.cmp(BN.from({ msg: 80000, layer: 1 })) >= 0) S.chaosUnlocked = true;
}

function battleExuUnlocked(i) {
  if (i === 15) return S.battle.hp100Kill;
  if (i === 16) return S.battle.exu42Unlocked;
  if (i === 17) return S.battle.level >= 2;
  if (i === 18) return S.battle.weapons.length >= 5;
  if (i === 19) return S.renown.cmp(BN.from({ msg: 1000, layer: 1 })) >= 0 &&
    S.cells.cmp(BN.from({ msg: 80000, layer: 1 })) >= 0;
  if (i === 20) return !!S.battle.exu[16];
  return true;
}

function monsterStats(type, level, rarity) {
  const L = 30 * Math.pow(2, level * level + 1);
  const D = (level + 1) * (level + 2);
  const A = 3 * Math.pow(2, level);
  let hp = L, atk = A;
  if (type === 'A') { hp = L * (level + 3); atk = A * (level + 2); }
  else if (type === 'B') { hp = L * (level + 3); atk = A; }
  else if (type === 'C') { hp = L; atk = A * (level + 2); }
  else { hp = L; atk = A; }
  const r = rarity || 0;
  return {
    hp: safeNum(Math.max(1, Math.floor(Math.pow(hp, 1 + 0.005 * r)))),
    atk: safeNum(Math.max(1, Math.floor(Math.pow(atk, 1 + 0.0002 * r)))),
    def: safeNum(Math.max(0, Math.floor(D * (1 + r / 50))))
  };
}

function monsterPrefix(r) {
  if (r >= 100) return r > 100 ? '星辰的' : '超神的';
  if (r >= 90) return '深渊的';
  if (r >= 80) return '传奇的';
  if (r >= 50) return '古老的';
  if (r >= 30) return '罕见的';
  if (r >= 20) return '稀有的';
  return '普通的';
}

/* 拉丁/英语显示名：前缀形容词与基础名性数一致；未知语言回退中文。 */
const MONSTER_GENDER = {
  '可疑细胞': 'f', '史莱姆统帅': 'm', '巨石': 'n', '嗜血狂蝠': 'm',
  '海胆': 'm', '黄色史莱姆': 'm', '鬼魂': 'n', '幼年龙蜥': 'f',
  '蜘蛛': 'f', '红色史莱姆': 'm', '荒原幽魂': 'f', '无名灵魂': 'f',
  '绿色史莱姆': 'm', '蓝色史莱姆': 'm'
};
const MONSTER_ADJ = {
  '星辰的': { m: 'Stēllāris', f: 'Stēllāris', n: 'Stēllāre' },
  '超神的': { m: 'Superdīvīnus', f: 'Superdīvīna', n: 'Superdīvīnum' },
  '深渊的': { m: 'Abyssālis', f: 'Abyssālis', n: 'Abyssāle' },
  '传奇的': { m: 'Legendārius', f: 'Legendāria', n: 'Legendārium' },
  '古老的': { m: 'Antīquus', f: 'Antīqua', n: 'Antīquum' },
  '罕见的': { m: 'Rārus', f: 'Rāra', n: 'Rārum' },
  '稀有的': { m: 'Rārior', f: 'Rārior', n: 'Rārius' },
  '普通的': { m: 'Commūnis', f: 'Commūnis', n: 'Commūne' }
};

function monsterDisplayName(m) {
  const base = m.baseName || m.name;
  if (langCode() !== 'la') return m.name;
  let prefix = m.prefix;
  if (!prefix && m.baseName && m.name && m.name !== m.baseName && m.name.endsWith(m.baseName)) {
    prefix = m.name.slice(0, m.name.length - m.baseName.length);
  }
  const adj = prefix && MONSTER_ADJ[prefix] ? MONSTER_ADJ[prefix][MONSTER_GENDER[base] || 'n'] : '';
  return tr(base) + (adj ? ' ' + adj : '');
}

function rollRarity() {
  const a = 1 + Math.floor(Math.random() * 100);
  let r;
  if (a < 80) r = a * 3 / 8;
  else {
    const b = 1 + Math.floor(Math.random() * 100);
    if (a + b > 160) r = Math.min(100, a + b / 10);
    else if (b < 70) r = Math.min(100, Math.max(50, a + 10 - b / 2));
    else r = 30 + Math.floor(Math.random() * 61);
  }
  return Math.max(0, Math.min(100, r));
}

function spawnBattleMonster() {
  let r = Math.random(), type;
  if (r < 0.56) type = 'D';
  else if (r < 0.62) type = 'A';
  else if (r < 0.80) type = 'B';
  else type = 'C';
  const pool = BATTLE_TYPES.filter(x => x.type === type);
  let total = pool.reduce((a, b) => a + b.weight, 0), pick = Math.random() * total, chosen = pool[0];
  for (const p of pool) { pick -= p.weight; if (pick <= 0) { chosen = p; break; } }
  const rarity = rollRarity();
  const st = monsterStats(type, S.battle.level, rarity);
  const prefix = monsterPrefix(rarity);
  const m = {
    id: S.battle.nextId++, type, name: prefix + chosen.name, baseName: chosen.name, prefix: prefix, level: S.battle.level,
    hp: st.hp, maxHp: st.hp, atk: st.atk, def: st.def, atkTimer: 0, drop: chosen.drop, rarity: rarity
  };
  S.battle.monsters.push(m);
  return m;
}

function battleWeaponAtkMul() {
  if (S.battle.weapon === 'gel') return 0.8;
  if (S.battle.weapon === 'phosphorNet') return 1.2;
  return 1;
}
function battleWeaponDefMul() {
  return S.battle.weapon === 'urchin' ? 1.1 : 1;
}
function battleMaxHp() {
  return safeNum(Math.floor(S.battle.maxHp * (S.battle.accessory === 'charged' ? 1.1 : 1)));
}

function battleDamageToMonster(m) {
  let atk = S.battle.atk * battleWeaponAtkMul() * (S.battle.accessory === 'stone' ? 1.1 : 1);
  if (S.battle.weapon === 'gelSword') atk += 5;
  if ((m.rarity || 0) >= 20) atk *= Math.max(0.8, 1.06 - m.rarity * 0.003);
  let dmg = Math.max(1, atk - m.def / 2);
  if (S.battle.crit) {
    const raw = 1 + S.battle.clover * 5;
    const critChance = Math.min(80, raw);
    if (Math.random() * 100 < critChance) {
      const overflow = Math.max(0, raw - 80);
      let critBonus = 10 + (overflow > 0 ? Math.log10(10 + overflow) * 10 : 0);
      if (S.battle.accessory === 'kite') critBonus += 70;
      dmg *= 1 + critBonus / 100;
    }
  }
  if (S.battle.weapon === 'phosphorNet' && Math.random() < 0.03) m.atkTimer = 1;
  if (S.battle.weapon === 'batClub') {
    const heal = Math.max(1, Math.floor(battleMaxHp() / 10000));
    S.battle.hp = Math.min(battleMaxHp(), S.battle.hp + heal);
  }
  return safeNum(dmg);
}

function battleKill(m) {
  const xp = Math.floor(1 + (m.level + 1) * (m.maxHp + 1) / 2);
  let gain = Math.floor(xp * (1 + 0.09 * (m.rarity || 0)));
  if (S.battle.exu[6]) {
    gain = Math.floor(gain * Math.max(1, S.cells.log10().toNumber()));
  }
  if (S.battle.exu[12] && S.mundisSacrifice.cmp(1) > 0) {
    gain = Math.floor(gain * Math.max(1, S.mundisSacrifice.log10().toNumber()));
  }
  if (S.battle.exu[14]) gain = Math.floor(gain * (m.level + 1));
  if (S.battle.exu[15]) gain = Math.floor(gain * Math.pow(S.battle.level + 2, 2));
  if (S.battle.exu[16]) gain *= Math.pow(2, S.battle.exu[16]);
  if (S.battle.exu[20]) gain *= Math.pow(2, S.battle.exu[20]);
  if (typeof gemBonuses === 'function') gain *= gemBonuses().xp;
  S.battle.kills += 1;
  if (m.maxHp > 100) S.battle.hp100Kill = true;
  S.battle.xp = safeNum(S.battle.xp + gain);
  S.battle.xpMax = safeNum(Math.max(S.battle.xpMax, S.battle.xp));
  updateBattleFlowers();
  if (S.battle.crit && Math.random() < 0.4) S.battle.clover += 1;
  battleDropLoot(m);
}

function updateBattleFlowers() {
  const f = Math.floor(Math.log10(Math.max(1, S.battle.xpMax)));
  S.battle.flowers = (S.battle.exu[9] ? 2 : 1) * f;
}

function battleAddMat(k, n) {
  S.battle.materials[k] = (S.battle.materials[k] || 0) + n;
}
function battleAddWeapon(k) {
  if (!S.battle.weapons.includes(k)) S.battle.weapons.push(k);
}
function battleAddAccessory(k) {
  if (!S.battle.accessories.includes(k)) S.battle.accessories.push(k);
}
function battleDropLoot(m) {
  const name = m.baseName || m.name;
  const r = Math.random();
  if (name === '可疑细胞' && r < 0.70) battleAddMat('phospholipid', 1 + Math.floor(Math.random() * 2));
  else if (name === '史莱姆统帅' && r < 0.01) battleAddAccessory('charged');
  else if (name === '巨石' && r < 0.10) battleAddAccessory('stone');
  else if (name === '嗜血狂蝠' && r < 0.60) battleAddMat('wing', 1);
  else if (name === '海胆' && r < 0.30) battleAddWeapon('urchin');
  else if (name === '黄色史莱姆' && r < 0.60) battleAddMat('gel', 2 + Math.floor(Math.random() * 4));
  else if (name === '蜘蛛' && r < 0.30) battleAddMat('web', 1 + Math.floor(Math.random() * 5));
  else if (name === '红色史莱姆' && r < 0.30) battleAddMat('gel', 2 + Math.floor(Math.random() * 2));
  else if (name === '荒原幽魂' && r < 0.80) battleAddMat('spirit', 1 + Math.floor(Math.random() * 2));
  else if (name === '绿色史莱姆') {
    if (r < 0.20) battleAddMat('gel', 1 + Math.floor(Math.random() * 2));
    else if (r < 0.30) battleAddWeapon('gel');
  } else if (name === '蓝色史莱姆' && r < 0.20) battleAddMat('gel', 1 + Math.floor(Math.random() * 2));
}

function canCraft(rec) {
  if (!rec) return false;
  for (const k in rec.cost) if ((S.battle.materials[k] || 0) < rec.cost[k]) return false;
  return true;
}
function startCraft(id) {
  if (S.battle.crafting) return false;
  const rec = BATTLE_RECIPES.find(r => r.id === id);
  if (!rec || !canCraft(rec)) return false;
  for (const k in rec.cost) S.battle.materials[k] -= rec.cost[k];
  S.battle.crafting = { id: id, t: 0 };
  return true;
}
function battleCraftTick(dt) {
  const c = S.battle.crafting;
  if (!c) return;
  c.t += dt;
  const rec = BATTLE_RECIPES.find(r => r.id === c.id);
  if (!rec) { S.battle.crafting = null; return; }
  if (c.t >= rec.time) {
    if (rec.type === 'weapon') battleAddWeapon(rec.id);
    else if (rec.type === 'accessory') battleAddAccessory(rec.id);
    else battleAddMat(rec.id, 1);
    S.battle.crafting = null;
  }
}

function battleDeath() {
  if (S.battle.weapon === 'urchin') {
    // 无法回复生命值：只清空怪物，不回复
  } else {
    S.battle.hp = battleMaxHp();
  }
  if (S.battle.level > 0) S.battle.level -= 1;
  S.battle.xp = Math.floor(S.battle.xp / 2);
  S.battle.monsters = [];
}

function battlePlayerHurt(dmg) {
  S.battle.hp -= dmg;
  if (S.battle.hp <= 0) battleDeath();
}

function battleAttackTick(extra) {
  if (!S.battleUnlocked) return;
  let idx = 0;
  if (extra) idx = 0;
  else {
    idx = S.battle.monsters.findIndex(m => (m.rarity || 0) < 80);
    if (idx < 0) return;
  }
  const m = S.battle.monsters[idx];
  if (!m) return;
  const d1 = battleDamageToMonster(m);
  m.hp -= d1;
  if (extra) {
    const d2 = battleDamageToMonster(m);
    m.hp -= d2;
    if ((m.rarity || 0) >= 100) battlePlayerHurt(Math.min(1, (d1 + d2) / 100));
  } else if ((m.rarity || 0) >= 100) {
    battlePlayerHurt(Math.min(1, d1 / 100));
  }
  if (m.hp <= 0) {
    battleKill(m);
    S.battle.monsters.splice(idx, 1);
  }
}

function battleTick(dt, spawnDt) {
  if (!S.battleUnlocked) return;
  if (S.battle.spawnOn) {
    S.battle.spawnTimer -= (spawnDt === undefined ? dt : spawnDt) * (S.battle.exu[11] ? 5 : 1);
    if (S.battle.spawnTimer <= 0 && S.battle.monsters.length < 3) {
      spawnBattleMonster();
      S.battle.spawnTimer = (10 + Math.random() * 10) / (S.battle.exu[11] ? 5 : 1);
    }
  }
  if (S.battle.autoAttack) {
    S.battle.attackAcc += dt * 20;
    while (S.battle.attackAcc >= 1) {
      S.battle.attackAcc -= 1;
      if (S.battle.monsters.length) battleAttackTick(false);
    }
  }
  battleCraftTick(dt);
  for (const m of S.battle.monsters) {
    m.atkTimer += dt;
    if (m.atkTimer >= 1) {
      m.atkTimer -= 1;
      let dmg = Math.max(1, Math.floor(m.atk - S.battle.def * battleWeaponDefMul()));
      if ((m.rarity || 0) >= 50 && Math.random() < 0.10) dmg *= 2 + (m.rarity || 0) / 100;
      battlePlayerHurt(Math.floor(dmg));
      if ((m.rarity || 0) >= 50) {
        const L = 30 * Math.pow(2, m.level * m.level + 1);
        m.hp = Math.min(m.maxHp, m.hp + Math.max(1, L * (m.rarity || 0) / 10000));
      }
    }
  }
}

function battleEquipWeapon(w) {
  if (!S.battle.exu[8] || !S.battle.weapons.includes(w)) return false;
  S.battle.weapon = w;
  return true;
}
function battleEquipAccessory(a) {
  if (!S.battle.exu[18] || !S.battle.accessories.includes(a)) return false;
  S.battle.accessory = a;
  return true;
}

if (typeof window !== 'undefined') {
  window.battleEquipWeapon = battleEquipWeapon;
  window.battleEquipAccessory = battleEquipAccessory;
}

function battleFlee() {
  if (!S.battle.exu[10]) return false;
  S.battle.monsters = [];
  S.battle.spawnTimer = 10 + Math.random() * 10;
  return true;
}

function battleExuCost(i) {
  const l = S.battle.level, t = S.battle.exu[i] || 0;
  if (i === 0) return safeNum(Math.pow(10, l + t));
  if (i === 1) return safeNum(Math.pow(10, 1 + 0.4 * t));
  if (i === 2) return safeNum(Math.pow(10, 2 + 0.7 * t));
  if (i === 3) return safeNum(Math.pow(10, 3 + t));
  if (i === 4) return safeNum(Math.pow(10, l * l + 1));
  if (i < 10) return safeNum([1e4, 1e6, 1e8, 1e12, 1e16][i - 5]);
  if (i === 10) return 10;
  if (i === 11) return 100;
  if (i === 12) return 1000;
  if (i === 13) return 1e4;
  if (i === 14) return 1e4;
  if (i === 15) return 30;
  if (i === 16) return 100;
  if (i === 17) return 1e6;
  if (i === 18) return 1e12;
  if (i === 19) return 1e30;
  return safeNum(Math.pow(10, 2 * t));
}

function buyBattleExu(i) {
  if (!S.battleUnlocked) return false;
  if (i >= 5 && i !== 20 && S.battle.exu[i]) return false;
  if (!battleExuUnlocked(i)) return false;
  const c = battleExuCost(i);
  if (S.battle.xp < c) return false;
  S.battle.xp -= c;
  if (i === 0) {
    S.battle.hp = safeNum(Math.floor((S.battle.hp + S.battle.maxHp) / 2));
  } else if (i === 1) {
    S.battle.maxHp = safeNum(Math.floor(S.battle.maxHp * Math.pow(1.8, S.battle.level)));
    S.battle.hp = S.battle.maxHp;
  } else if (i === 2) {
    S.battle.atk = safeNum(Math.floor(S.battle.atk * Math.pow(1.5, S.battle.level)));
  } else if (i === 3) {
    S.battle.def = safeNum(S.battle.def + (S.battle.level + 1) * (S.battle.level + 2));
  } else if (i === 4) {
    S.battle.level += 1;
    for (let k = 0; k < 4; k++) S.battle.exu[k] = 0;
    S.battle.maxHp = 10;
    S.battle.hp = 10;
    S.battle.atk = 10;
    S.battle.def = 1;
  } else if (i === 5) {
    S.battle.crit = true;
  } else if (i === 7) {
    S.battle.def = S.battle.def;
  } else if (i === 8) {
    // EXU24 只解锁武器切换
  } else if (i === 18) {
    S.battle.accessories = S.battle.accessories || [];
  }
  S.battle.exu[i] = (S.battle.exu[i] || 0) + 1;
  return true;
}
