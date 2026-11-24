'use strict';

const EN_TEXT = {};
const ZH_TEXT = {};

  const CFG = {
    tick: 20,                 
startCap: 100,            
capGrowth: 100,           
    tiers: [
      { name: '皮层微脉', base: 1,    growth: 100  },
      { name: '浅层细脉', base: 100,  growth: 1e3  },
      { name: '中层支脉', base: 1e4,  growth: 1e5  },
      { name: '深层干脉', base: 1e7,  growth: 1e9  },
      { name: '地心主脉', base: 1e12, growth: 1e12 },
      { name: '祖龙之脉', base: 1e20, growth: 1e15 }
    ],
    env:    { base: 1e4, boost: 1.25 },
    ley:    { add: 2, mult: 5 },
    flower: { base: 2, growth: 5 }
  };

  const ROMAN = ['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ'];

  const COLOR = ['#5fe0b0','#6aa8ff','#b18cff','#f5a35b','#f87171','#e8c47a'];

  const REN_BASE = [1, 1, 3, 3, 10];

  const REN_INC  = [50, 70, 100, 300, 1000];

  const REN_NAME = ['一级地脉倍率', '全部地脉倍率', '结晶效果', '免费地脉提升', '双倍结晶'];

  const RU_DEFS = [
    { key: 'ru21', name: '六级共鸣', enName: 'Tier-VI Resonance', desc: 'Ⅰ~Ⅳ 地脉产出 ×2^Ⅵ数量', enDesc: 'Tier I–IV output ×2^(Tier VI count)', price: 5 },
    { key: 'ru22', name: '声望回响', enName: 'Renown Echo', desc: '全部地脉 ×(1+2×声望次数)^1.5', enDesc: 'All leylines ×(1+2×reset count)^1.5', price: 15 },
    { key: 'ru23', name: '环境超载', enName: 'Env Overload', desc: '环境乘数 lg(k) → (lg k)^2.5（log 模式）', enDesc: 'Env multiplier lg(k) → (lg k)^2.5 (log mode)', price: 20 },
    { key: 'ru24', name: '高起点', enName: 'High Start', desc: '环境上限基础值改为 1e10', enDesc: 'Env cap base becomes 1e10', price: 100 },
    { key: 'ru25', name: '花之盛放', enName: 'Flower Bloom', desc: '所有花的效果翻倍', enDesc: 'All flower effects doubled', price: 300 },
    { key: 'ru31', name: '延迟爆发', enName: 'Delayed Burst', desc: '解锁：达到 1e300 细胞；环境价格超指数从第 101 次起', enDesc: 'Unlock: 1e300 cells; env price becomes super-exponential from purchase 101', price: 500 },
    { key: 'ru32', name: '十重上限', enName: 'Tenfold Cap', desc: '解锁：k>1e100 且细胞>k²；每次环境提升的 k 额外 ×10', enDesc: 'Unlock: k>1e100 and cells>k²; each cap upgrade also ×10 k', price: 1000 },
    { key: 'ru33', name: '廉价之花', enName: 'Cheap Flower', desc: '解锁：无献祭时买花；花价增量 5 → 4', enDesc: 'Unlock: buy flower with no sacrifice; flower price increment 5 → 4', price: 10000 },
    { key: 'ru34', name: '极速挑战', enName: 'Speedrun', desc: '解锁：不买Ⅱ+，10 秒内到 1e6；解锁「地脉之力」子标签页', enDesc: 'Unlock: no Tier II+, reach 1e6 in 10s; unlocks Leyline Power tab', price: 1e6 },
    { key: 'ru35', name: '血祭', enName: 'Blood Sacrifice', desc: '解锁：单次献祭 >1e6；献祭 = Ⅰ数量^0.1', enDesc: 'Unlock: single sacrifice >1e6; sacrifice = Tier I count^0.1', price: 1e8 }
  ];

  const NC_DEFS = [
    { key: 'NC1', name: '低价地脉', enName: 'Low-price Leylines', mod: 'Ⅲ~Ⅵ 不消耗细胞，改用低一级地脉购买', enMod: 'Tier III–VI cost the previous tier instead of cells', reward: '购买地脉不再消耗细胞（仍按原价）', enReward: 'Leyline purchases no longer consume cells (price still required)' },
    { key: 'NC2', name: '生产中断', enName: 'Production Halt', mod: '购买地脉后全部生产停止，10 秒内恢复', enMod: 'Buying a leyline halts all production; recovers over 10s', reward: '全部地脉 ×√(1+500t)，k ×√(1+3t)（t=本轮秒数）', enReward: 'All leylines ×√(1+500t), k ×√(1+3t) (t=renown seconds)' },
    { key: 'NC3', name: '无声望', enName: 'No Renown', mod: '所有声望升级无效', enMod: 'All renown upgrades are disabled', reward: '声望结晶获得 ×10', enReward: 'Renown crystal gain ×10' },
    { key: 'NC4', name: '封存', enName: 'Sealed', mod: 'Ⅴ~Ⅵ 封存；地脉提升改用 Ⅳ 购买', enMod: 'Tier V–VI sealed; Leyline Boost costs Tier IV', reward: '环境乘数 lg(k) × k^0.01', enReward: 'Env multiplier lg(k) × k^0.01' },
    { key: 'NC5', name: '稀释', enName: 'Dilution', mod: '全部地脉乘数 ÷lg(细胞)；Ⅰ~Ⅴ 再 ÷上一级 lg', enMod: 'All leyline multipliers ÷lg(cells); I–V also ÷lg(previous tier)', reward: '全部地脉乘数 ×lg(细胞)', enReward: 'All leyline multipliers ×lg(cells)' },
    { key: 'NC6', name: '献祭分流', enName: 'Sacrifice Split', mod: '献祭 ^0.8 只作用 Ⅵ；Ⅱ~Ⅴ 得 ^0.2；献祭上限 1e100', enMod: 'Sacrifice^0.8 only on VI; II–V get ^0.2; sacrifice cap 1e100', reward: '献祭不再清除 Ⅰ 和 Ⅴ', enReward: 'Sacrifice no longer clears Tier I and V' },
    { key: 'NC7', name: '连续统', enName: 'Continuum', mod: '禁用 cv 自动/手动购买；每 0.5 秒按买最大方程解出的数量免费购买全部 cv', enMod: 'Disables cv auto/manual buying; every 0.5s solves buy-max and buys all cv free', reward: '软上限指数 ^0.75 → ^0.8', enReward: 'Soft cap exponent ^0.75 → ^0.8' },
    { key: 'NC8', name: '禁升', enName: 'No Upgrades', mod: '不能买环境提升与花；献祭作用于 Ⅱ+，上限 1e300', enMod: 'Cannot buy Env Cap or Flower; sacrifice applies to II+, cap 1e300', reward: '地脉提升增强 25%', enReward: 'Leyline output +25%' },
    { key: 'NC9', name: '软上限', enName: 'Soft Cap', mod: '软上限指数变为 ^0.6', enMod: 'Soft cap exponent becomes ^0.6', reward: '解锁环境上限自动购买器', enReward: 'Unlocks Env Cap auto-buyer' },
    { key: 'NC10', name: '初始 x', enName: 'Initial x', mod: 'x 初始值变为 1', enMod: 'Initial x becomes 1', reward: '解锁地脉提升自动购买器', enReward: 'Unlocks Leyline Boost auto-buyer' },
    { key: 'NC11', name: '反物质', enName: 'Antimatter', mod: '买过 Ⅱ 后反物质每秒 ×5；超过细胞即失败；献祭/花重置', enMod: 'After buying II, antimatter ×5/s; if it exceeds cells, fail; sacrifice/flower resets', reward: '解锁地脉之花自动购买器', enReward: 'Unlocks Flower auto-buyer' },
    { key: 'NC12', name: '生产重排', enName: 'Production Rework', mod: 'Ⅱ产细胞(100/刻)；Ⅵ→Ⅳ、Ⅴ→Ⅲ、Ⅳ→Ⅱ、Ⅲ→Ⅰ', enMod: 'II makes cells (100/tick); VI→IV, V→III, IV→II, III→I', reward: '解锁自动声望', enReward: 'Unlocks auto renown' }
  ];

  const NC1_START = [0, 0, 1000, 1e4, 1e6, 1e10];

  const NC1_INC   = [0, 0, 1e3, 1e5, 1e8, 1e12];

  const TARGET_500 = BN.from({ msg: 500, layer: 1 });

  const RC5_RATE = [0, 1000, 1e6, 1e9, 1e15, 1e20];

  const RC_TARGET = [BN.from({ msg: 400, layer: 1 }), BN.from({ msg: 1000, layer: 1 }), BN.from({ msg: 1200, layer: 1 }), BN.from({ msg: 500, layer: 1 }), BN.from({ msg: 120, layer: 1 }), BN.from({ msg: 1500, layer: 1 }), BN.from({ msg: 4000, layer: 1 }), BN.from({ msg: 3000, layer: 1 }), BN.from({ msg: 1500, layer: 1 }), BN.from({ msg: 1000, layer: 1 }), BN.from({ msg: 4000, layer: 1 }), BN.from({ msg: 2000, layer: 1 })];

  const RC_DEFS = [
    { key: 'RC1', name: '万象共鸣', enName: 'All Challenges', mod: '同时承受所有 NC 的修正；目标 1e400 细胞', enMod: 'All NC modifiers at once; reach 1e400 cells', reward: '每完成一个 RC，所有 VCV 乘数 ×5', enReward: 'Each completed RC multiplies all VCV by ×5' },
    { key: 'RC2', name: '禁晶之约', enName: 'Crystalless Pact', mod: '地脉结晶不再加成 cv；所有花强度为 10%；目标 1e1000 细胞', enMod: 'Leyline crystals no longer boost cv; all flowers at 10% strength; reach 1e1000 cells', reward: '所有花增强 10%', enReward: 'All flowers +10%' },
    { key: 'RC3', name: '慢速宇宙', enName: 'Slow Universe', mod: '游戏速度放慢 1000 倍；目标 1e1200 细胞', enMod: 'Game speed is 1000× slower; reach 1e1200 cells', reward: '开始游戏时拥有 100 细胞', enReward: 'Start every run with 100 cells' },
    { key: 'RC4', name: '地脉互斥', enName: 'Exclusive Veins', mod: '购买高级地脉会禁用上一级；再次购买恢复；目标 1e500 细胞', enMod: 'Buying a higher tier disables the one below; buy again to restore; reach 1e500 cells', reward: '声望结晶总数公式获得指数 t=min(1000,1+lg(结晶)/10)', enReward: 'Renown total formula gains exponent t=min(1000,1+lg(crystals)/10)' },
    { key: 'RC5', name: '万脉归细胞', enName: 'All Veins to Cells', mod: 'Ⅱ~Ⅵ 每刻直接生产细胞；目标 1e120 细胞', enMod: 'Tier II–VI directly produce cells each tick; reach 1e120 cells', reward: 'Ⅰ~Ⅴ 获得 ×声望结晶²；地脉结晶加成提升为 ^5', enReward: 'Tier I–V gain ×crystals²; crystal boost becomes ^5' },
    { key: 'RC6', name: '无祭之约', enName: 'Sacrificeless Pact', mod: '禁用地脉献祭；拥有 CV VI 后每秒自动无奖励献祭；目标 1e1500 细胞', enMod: 'Sacrifice disabled; with CV VI, auto-sacrifice every second without reward; reach 1e1500 cells', reward: '献祭公式改为 I^0.11×II^0.01×III^0.08；解锁自动献祭', enReward: 'Sacrifice formula becomes I^0.11×II^0.01×III^0.08; unlocks auto sacrifice' },
    { key: 'RC7', name: '禁花高墙', enName: 'No Flowers, Higher Wall', mod: '无法购买花；环境上限基础价格增长 1e4→1e5；目标 1e4000 细胞', enMod: 'Cannot buy flowers; env cap base growth 1e4→1e5; reach 1e4000 cells', reward: '解锁购买最大 VCV；环境上限 ×声望次数²', enReward: 'Unlock Buy Max VCV; env cap ×renown resets²' },
    { key: 'RC8', name: '奇异之脉', enName: 'Strange Veins', mod: 'Ⅳ 不产 Ⅲ，改为生产奇异物质；奇异物质降低所有 CV 价格；目标 1e3000 细胞', enMod: 'IV produces Strange Matter instead of III; it reduces all CV prices; reach 1e3000 cells', reward: '献祭的声望结晶以 ^0.1 加成声望结晶', enReward: 'Offered renown crystals boost renown crystals by ^0.1' },
    { key: 'RC9', name: '禁升禁祭', enName: 'No Cap, No Offering', mod: '无法购买环境上限提升，也无法献祭地脉；目标 1e1500 细胞', enMod: 'Cannot buy Env Cap or sacrifice; reach 1e1500 cells', reward: '环境上限提升价格超指数阈值再延迟 50', enReward: 'Env Cap super-exponential threshold delayed by another 50' },
    { key: 'RC10', name: '反物质之脉', enName: 'Antimatter Veins', mod: 'Ⅴ~Ⅵ 生产反物质；反物质削弱 Ⅰ~Ⅳ；目标 1e1000 细胞', enMod: 'V–VI produce Antimatter; it weakens I–IV; reach 1e1000 cells', reward: '解锁购买最大 ru11-15', enReward: 'Unlock Buy Max ru11-15' },
    { key: 'RC11', name: '轮转封脉', enName: 'Rotating Seal', mod: '按 1-3-5-2-4-6 顺序每秒禁用一条 CV；目标 1e4000 细胞', enMod: 'Disable one CV each second in 1-3-5-2-4-6 order; reach 1e4000 cells', reward: '声望重置额外获得等同地脉提升的声望次数；每秒 +1 声望次数', enReward: 'Renown reset gains extra resets equal to Leyline Boost; +1 reset/s' },
    { key: 'RC12', name: '十秒试炼', enName: 'Ten-Second Trial', mod: '必须在 10 秒内完成；目标 1e2000 细胞', enMod: 'Must complete within 10 seconds; reach 1e2000 cells', reward: '游戏内声望时间超过 10 秒时，获得的声望次数 ×100', enReward: 'If game renown time >10s, renown count gain ×100' }
  ];

  const VCV_BASE = [20, 15, 10, 8, 6, 5];

  const VCV_START_E = [8, 20, 40, 100, 300, 800];

  const VCV_GROWTH_E = [3, 5, 10, 50, 60, 200];

  const MUNDIS_LINES = [
    '凡人……不，龙脉的织者。我是 Mundis，世界之神。',
    '你的地脉已经贯穿了这片世界的根基。我认可你。',
    '将你的声望结晶献祭于我。作为回报，我会赐予你超越凡俗的力量。'
  ];

  const MUNDIS_LINES_EN = [
    'Mortal… no, weaver of leylines. I am Mundis, God of the World.',
    'Your leylines have reached the roots of this world. You have my acknowledgment.',
    'Offer your renown crystals to me. In return, I shall grant you power beyond mortals.'
  ];

  const MU_DEFS = [
    { key: 'MU11', name: '万脉共鸣', rep: true, price: l => 10 ** l },
    { key: 'MU12', name: '容纳百倍', rep: true, price: l => 10 ** (2 + 4 * l) },
    { key: 'MU13', name: '超指缓降', rep: true, price: l => 10 ** (3 + 5 * l) },
    { key: 'MU14', name: '地脉激扬', rep: true, price: l => 10 ** ((l + 2) ** 2) },
    { key: 'MU15', name: '花海绽放', rep: true, price: l => 10 ** (6 + l * (l + 1) * (l + 4) / 2) },
    { key: 'MU21', name: '结晶立方', rep: false, price: () => 1e1 },
    { key: 'MU22', name: '极速容纳', rep: false, price: () => 1e2 },
    { key: 'MU23', name: '自动花满', rep: false, price: () => 1e3 },
    { key: 'MU24', name: '花育一号', rep: false, price: () => 1e6 },
    { key: 'MU25', name: '容纳柔化', rep: false, price: () => 1e8 }
  ];
