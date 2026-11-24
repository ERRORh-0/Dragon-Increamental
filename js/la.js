'use strict';

/**
 * Lingua Latīna — fasciculus linguae.
 *
 * Clāvēs sunt textūs Sīnēnsēs prīmāriī (source strings); valores sunt Latīnī
 * cum vōcālibus longīs (ā ē ī ō ū ȳ) notātī.  Formae cum {n}, {v}, {x}…
 * sunt formulae quās trf() implet.
 */
const LA_TEXT = {
  /* ===================== 顶部 HUD / 标签页 ===================== */
  '龙脉 · 地脉': 'Vēna Draconis · Vēnae',
  '声 望': 'FĀMA',
  '混 沌': 'CHAOS',
  '细 胞': 'CELLULAE',
  '地 脉': 'VĒNAE',
  '挑 战': 'PRŌVOCĀTIŌNĒS',
  '天 神': 'DĪ',
  '统 计': 'STATISTICA',
  '设 置': 'OPTIŌNĒS',
  '地脉之力': 'Vīs Vēnārum',
  '地脉之花': 'Flōs Vēnārum',
  '声望重置': 'Restaurātiō Fāmae',
  '你现在在细胞宇宙中。': 'Nunc in ūniversō cellulārum es.',
  '放弃挑战': 'Dēsiste',
  '一级地脉容纳量 k': 'Capācitās Vēnae I: k',
  '环境倍率': 'Multiplicātor Ambītūs',
  '地脉倍率': 'Multiplicātor Vēnārum',
  '地脉加持': 'Auxilium Vēnārum',
  '购买乘数 x': 'Multiplicātor Emptiōnis x',
  '声望结晶': 'Crystallī Fāmae',
  '游戏以正常速度运行': 'Lūdus nōrmālī celeritāte currit.',
  '战斗': 'PUGNA',
  '+0 / 秒': '+0 / sec.',
  '等级': 'Gradus',
  '生命': 'Vīta',
  '攻击': 'Impetus',
  '防御': 'Dēfēnsiō',
  '暴击': 'Ictus criticus',
  '发起攻击': 'Impete',
  '10^(lg(细胞)/100-1)': '10^(lg(cellulae)/100-1)',
  '×lg(10+5×总数)': '×lg(10+5×tōtum)',
  '。': '.',
  '改用 ×1000': 'Ūtere ×1000',
  '购买最大 ⬆': 'Eme plūrimum ⬆',
  '从 Ⅵ 到 Ⅰ 依次购买当前细胞能买的最大数量':
    'Eme plūrimum, quod cellulae tibi sinunt, ab VI ad I.',
  '连续统将替代传统的手动和自动购买。':
    'Cōntinuum manuālem et automaticam emptiōnem substituet.',
  '自动购买': 'Emptiō Automatica',
  '首次声望重置后解锁': 'Post prīmam restaurātiōnem fāmae aperītur.',
  '升 级': 'MELIORĀTIŌNĒS',

  /* ===================== 主界面 · 升级卡 ===================== */
  '环境上限提升': 'Augmentum Capācitātis Ambītūs',
  'k ×': 'k ×',
  '全地脉 ×': 'Omnēs vēnae ×',
  '/ 次': '/ vice',
  '1.00e4 细胞': '1.00e4 cellulae',
  '自动：关': 'Autō: clausum',
  '自动：开': 'Autō: apertum',
  '不限': 'Nūllus līmes',
  '购买': 'Eme',
  '购买最大': 'Eme plūrimum',
  '地脉提升': 'Augmentum Vēnārum',
  '全部地脉 ×': 'Omnēs vēnae ×',
  '1 座 Ⅵ': '1 vēna VI',
  '将清空细胞与全部地脉': 'Cellulās et omnēs vēnās dēlēbit.',
  '指数 ×1.0000': 'Exponenta ×1.0000',
  '2 级地脉提升（现有 0）': 'Augmentum Vēnārum gradūs II (nunc 0)',
  '将清空细胞、地脉与两项升级':
    'Cellulās, vēnās et duo augmenta dēlēbit.',
  '地脉献祭': 'Oblātiō Vēnārum',
  'Ⅵ 产出 ×': 'Prōductiō VI ×',
  '需先购买 1 座 Ⅵ': 'Prīmum eme 1 vēnam VI.',
  '清空一级至五级，价格与购买次数保留':
    'Vēnās I–V dēlēbit; pretia et numerī emptiōnum servantur.',
  '自动献祭：关': 'Oblātiō automatica: clausa',
  '自动献祭：开': 'Oblātiō automatica: aperta',
  '可得/已有 ≥': 'Lucrum/habēs ≥',
  '献祭': 'Oblā',
  '环境提升增速': 'Celeritās augmentī ambītūs',
  '×1e4（原版）': '×1e4 (originale)',
  '×1000（推荐）': '×1000 (suāsus)',
  '×300（高速）': '×300 (celer)',
  '环境乘区': 'Multiplicātiō ambītūs',
  'log10(k)（原版）': 'log10(k) (originale)',
  'k（实验）': 'k (experimentāle)',
  '重置存档': 'Restaurāre servātiōnem',
  '已保存': 'Servātum',
  '保存失败': 'Servātiō dēfēcit',

  /* ===================== 地脉之力 VCV ===================== */
  '地脉结晶': 'Crystallī Vēnārum',
  'cv 加成': 'Bonus cv',
  'VCV 产量': 'Prōductiō VCV',
  '/秒': '/sec.',
  'VCV I 产地脉结晶；II 产 I、III 产 II…；都不产细胞。结晶以 (1+结晶)² 加成全部 cv。':
    'VCV I crystallōs vēnārum prōdūcit; II prōdūcit I, III prōdūcit II…; nūlla cellulās prōdūcunt. Crystallī omnia cv (1+crystallīs)² multiplicant.',
  '升级 VCV 倍率 ×10': 'Multiplicātōrem VCV ×10 augē',
  '价格 1 地脉结晶 · 已购 0': 'Pretium 1 crystallus vēnārum · emptum 0',
  '结晶/秒': 'crystallī/sec.',
  '拥有': 'Habēs',
  '倍率 ×': 'multiplicātor ×',
  '产量': 'Prōductiō',
  '买最大': 'Eme plūrimum',
  '买 1 个': 'Eme ūnum',
  '完成所有 NC': 'Perfice omnēs NC',
  '后续解锁': 'Posteā aperītur',
  '解锁条件：完成全部 12 个 NC': 'Condiciō: perfice omnēs XII NC',
  '解锁条件：所有 NC 的最快时间之和 < 8 秒':
    'Condiciō: summa temporum celerrimōrum omnium NC < 8 secundae',
  '解锁条件：在地核中达到 1e120 细胞':
    'Condiciō: in nucleō attinge 1e120 cellulās',
  '解锁条件：地核中进入 RC5 并达到 1.8e308 细胞':
    'Condiciō: in nucleō intrā RC5 et attinge 1.8e308 cellulās',
  '解锁条件：地核中不买环境/地脉提升/花，达到 1e800 细胞':
    'Condiciō: in nucleō nōn eme ambītum/augmentum vēnārum/flōrem, attinge 1e800 cellulās',
  '解锁条件：后续版本开放': 'Condiciō: in versiōne posterō',
  '已完成 · 可再次挑战': 'Perfectum · prōvocāre iterum',

  /* ===================== 挑战 NC / RC ===================== */
  '完成第一次声望重置后解锁 12 个普通挑战（NC1~NC12）。每个挑战只能完成一次，目标都是细胞达到':
    'Prōvocātiōnēs commūnēs XII (NC1–NC12) post prīmam restaurātiōnem fāmae aperiuntur. Quaeque prōvocātiō semel tantum complērī potest; fīnis est cellulās ad',
  '；到达后显示完成标识并永久获得奖励。':
    ' pervenīre; quō factō signum perfectiōnis ostenditur et praemium in perpetuum datur.',
  '同一时间只能进行一个挑战。进入挑战会重置本轮细胞/地脉/环境/花/献祭，但保留声望层、已完成的 NC 奖励与自动购买器设置。':
    'Ūnō tempore ūna tantum prōvocātiō gerī potest. Ineunte prōvocātiōne cellulae, vēnae, ambītus, flōrēs et oblātiō huius cursūs restaurantur, sed fāma, praemia NC perfecta et cōnstitutiōnēs emptōris automaticī servantur.',
  '目标：细胞 1e100': 'Fīnis: cellulae 1e100',
  '挑战：': 'Prōvocātiō: ',
  '奖励：': 'Praemium: ',
  '规则：': 'Rēgula: ',
  '未完成': 'Infectum',
  '已完成': 'Perfectum',
  '开始': 'Incipe',
  '进行中': 'In cursū',
  '可完成': 'Parātum',
  '挑战中': 'In prōvocātiōne',
  '挑战完成': 'PRŌVOCĀTIŌ PERFECTA',
  '你已完成': 'PERFĒCISTĪ',
  '再次挑战': 'Prōvocā iterum',
  '完成挑战': 'Perfice prōvocātiōnem',
  '完成RC': 'Perfice RC',
  '放弃': 'Dēsiste',
  'RC1 正在同时进行此挑战': 'RC1 hanc prōvocātiōnem simul gerit',
  'NC 进行中': 'NC in cursū',
  '不可开始': 'Inīrī nōn potest',
  '目标：': 'Fīnis: ',
  ' 细胞': ' cellulae',
  '挑战记录': 'Recorda prōvocātiōnum',
  '最快挑战': 'Prōvocātiō celerrima',
  '最短时间之和': 'Summa temporum celerrimōrum',
  ' 游戏秒': ' secundae lūdī',
  'RC 记录': 'Recorda RC',
  '状态': 'Status',
  '挑战修正': 'Modificātiō prōvocātiōnis',
  '挑战中无法重置': 'In prōvocātiōne restaurārī nōn potest.',

  /* ===================== 声望页 ===================== */
  '细胞达到': 'Cellulae ad',
  '解锁。声望重置会清空上一轮的所有进度（细胞、地脉、环境上限、普通地脉提升、花与献祭），保留声望结晶、总声望结晶、全部声望升级、免费地脉提升与自动购买器设置。':
    ' pervēnerint, aperītur. Restaurātiō fāmae omnem prōgressum prioris cursūs dēlēbit (cellulās, vēnās, capācitātem ambītūs, augmentum vēnārum commūne, flōrēs et oblātiōnem), sed crystallōs fāmae, tōtās crystallōs fāmae, omnia meliorāmenta fāmae, augmentum vēnārum grātīs et cōnstitutiōnēs emptōris automaticī servābit.',
  '获得：': 'Lucrum: ',
  '。总声望结晶提供环境上限': '. Tōtae crystallī fāmae capācitātem ambītūs praebent',
  '声望': 'FĀMA',
  '当前声望结晶': 'Crystallī fāmae praesentēs',
  '总声望结晶': 'Tōtae crystallī fāmae',
  '环境上限加成': 'Bonus capācitātis ambītūs',
  '下次获得': 'Proximum lucrum',
  '声望次数': 'Numerus fāmae',
  '细胞达到 1e100 解锁': 'Aperītur, cum cellulae 1e100 attigerint.',
  '获得': 'Lucrum',
  '不超过最大值': 'Nōn super maximum',
  '按此数量重置': 'Restaurā cum hōc numerō',
  '自动声望：关': 'Fāma automatica: clausa',
  '自动声望：开': 'Fāma automatica: aperta',
  '自动声望：': 'Fāma automatica: ',
  '结晶阈值': 'Līmes crystallōrum',
  '完成 NC12 解锁': 'Perfice NC12 ut aperiātur.',
  '自动购买 ru11-15：关': 'Emptiō automatica ru11–15: clausa',
  '自动购买 ru11-15：开': 'Emptiō automatica ru11–15: aperta',
  '自动购买 ru11-15：': 'Emptiō automatica ru11–15: ',
  '献祭值达到 1e100 解锁': 'Aperītur, cum oblātiō 1e100 attigerit.',
  '购买最大 ru11-15': 'Eme plūrimum ru11–15',
  'RC10 奖励': 'Praemium RC10',
  '第一行 · 可重复': 'Ordo I · Repetibilis',
  '一级地脉倍率': 'Multiplicātor Vēnae I',
  '当前': 'Nunc',
  '每次购买 ×': 'Quāque emptiōne ×',
  '价格': 'Pretium',
  '已购': 'Emptum',
  '全部地脉倍率': 'Multiplicātor omnium Vēnārum',
  '结晶效果': 'Effectus Crystallōrum',
  '公式 ×lg(10+5·5^已购·总数)':
    'Formula ×lg(10+5·5^emptum·tōtum)',
  '免费地脉提升': 'Augmentum Vēnārum grātīs',
  '已有': 'Habēs',
  '级': 'gradūs',
  '每次购买 +1': 'Quāque emptiōne +1',
  '双倍结晶': 'Crystallī duplicēs',
  '每次购买 ×2': 'Quāque emptiōne ×2',
  '第二行 · 一次性': 'Ordo II · Semel',
  '第三行 · 条件解锁': 'Ordo III · Condiciōne aperta',
  '细胞达到 1e100 后可重置':
    'Restaurārī potest, cum cellulae 1e100 attigerint.',
  '细胞达到 1e100 才能重置':
    'Restaurārī potest sōlum cum cellulae 1e100 attigerint.',
  '地核中请使用地核重置': 'In nucleō ūtere restaurātiōne nuclei.',
  '将获得 ': 'Accipiēs ',
  ' 声望结晶': ' crystallōs fāmae',
  '不存在可献祭的声望结晶': 'Nūllae crystallī fāmae oblāndae adsunt.',
  '当前没有可献祭的声望结晶': 'Nūllae crystallī fāmae oblāndae adsunt.',
  '将献祭 ': 'Oblābitur ',
  '自动购买器买最大间隔 0.1 秒':
    'Intervallum maximum emptōris automaticī 0.1 secundae',
  '声望公式：10^((lg(细胞)-100)/80)':
    'Formula fāmae: 10^((lg(cellulae)-100)/80)',
  '解锁购买最大环境上限提升':
    'Aperit "eme plūrimum" augmentī capācitātis ambītūs',
  '地脉提升效果 +60%': 'Effectus augmentī vēnārum +60%',
  'ru11/ru12 底数 +lg(10+12×声望次数)':
    'Basis ru11/ru12 +lg(10+12×numerus fāmae)',
  '解锁购买最大地脉提升': 'Aperit "eme plūrimum" augmentī vēnārum',
  '解锁声望挑战 RC': 'Aperit prōvocātiōnēs fāmae RC',
  '按最快声望速度的 40% 被动生产声望次数':
    'Numerum fāmae passīvē prōdūcit ad 40% celerrimae celeritātis fāmae',
  '解锁自动购买 ru11-15': 'Aperit emptiōnem automaticam ru11–15',
  '解锁 RC7-12': 'Aperit RC7–12',

  /* ===================== 地核 / MU ===================== */
  '地核': 'NUCLEUS',
  '世界核心的试炼。进入后会承受严重削弱，但可获得地核结晶与 MU。':
    'Probātiō cordis mundī. Ineuntī multae infirmātiōnēs impōnuntur, sed crystallī nuclei et MU acquīrī possunt.',
  '进入地核': 'Ingredere nucleus',
  '显示地核削弱': 'Ostende infirmātiōnēs nuclei',
  '· 所有 CV 受到环境上限约束':
    '· Omnēs CV capācitāte ambītūs coercentur.',
  '· 环境上限负面效果增强为 ^0.2':
    '· Effectus negātīvus capācitātis ambītūs ad ^0.2 auctus est.',
  '· 环境上限提升价格从第 1 次起超指数增长':
    '· Pretium augmentī capācitātis ambītūs ab emptiōne I superexponentiāliter crēscit.',
  '· 基础环境上限为 1': '· Capācitās ambītūs fundāmentālis est 1.',
  '· 清空地脉结晶（保留 VCV 升级），所有 VCV 倍率取平方根':
    '· Crystallī vēnārum dēlentur (meliorāmenta VCV servantur); omnēs multiplicātōrēs VCV rādīcem quadratam accipiunt.',
  '· 地脉结晶对 CV 的加成变为 ^0.5':
    '· Bonus crystallōrum vēnārum ad CV fit ^0.5.',
  '· 花的效果为原来的 20%': '· Effectus flōrum est 20% priōris.',
  '地核结晶': 'Crystallī Nucleī',
  '地核重置次数': 'Restaurātiōnēs Nucleī',
  '本次可获得': 'Hōc tempore acquīrendum',
  '当前细胞': 'Cellulae praesentēs',
  '地核声望重置': 'Restaurātiō fāmae Nucleī',
  '退出地核': 'Exīre ex nucleō',
  '献祭值大于 1e64 方可进入':
    'Intrārī potest sōlum cum oblātiō 1e64 superāverit.',
  '将获得 ': 'Accipiēs ',
  ' 地核结晶': ' crystallōs nuclei',
  '所有 VCV 倍率 ×2^': 'Omnēs multiplicātōrēs VCV ×2^',
  '环境上限 ×100^': 'Capācitās ambītūs ×100^',
  'CV 超指数增长 ×': 'Crēscentia superexponentiālis CV ×',
  '单级地脉提升 ×': 'Augmentum vēnārum ūnīus gradūs ×',
  '花效果 ×': 'Effectus flōris ×',
  '地核外：地核结晶以 ^2 加成 VCV':
    'Extrā nucleum: crystallī nuclei VCV ^2 augent',
  '最短 NC 游戏时间提供容纳量':
    'Tempus lūdī NC celerrimī capācitātem praebet',
  '自动花满已解锁': 'Flōrēs automaticē complētae apertī',
  '自动花满': 'Flōrēs automaticē complētae',
  'VCV I 获得花数加成': 'VCV I bonum ex numerō flōrum accipit',
  '容纳柔化 ^0.6': 'Capācitās mollīta ^0.6',
  '已达下限': 'Ad līmen īnfimum ventum',
  '已满': 'Plēnum',
  '价格 ': 'Pretium ',

  /* ===================== 统计 ===================== */
  '记录存档、重置、挑战与地脉加成的详细数据。':
    'Dētālia servātiōnis, restaurātiōnum, prōvocātiōnum et augminum vēnārum.',
  '通用': 'Generālia',
  '重置记录': 'Recorda restaurātiōnum',
  '计算详情': 'Dētālia calculī',
  '存档创建时间': 'Creāta',
  '游玩时间（现实，不计离线）': 'Tempus lūdī (reāle, sine absentiā)',
  '游戏内时间': 'Tempus in lūdō',
  ' 秒': ' sec.',
  '游玩时间（现实，计入离线）': 'Tempus lūdī (reāle, cum absentiā)',
  '最大细胞数量': 'Maximae cellulae',
  '累计生产细胞': 'Cellulae tōtae',
  '重置层': 'Stratum restaurātiōnis',
  '次数': 'Numerus',
  '最快重置（现实）': 'Restaurātiō celerrima (reāle)',
  '本轮已用（现实）': 'Tempus huius cursūs (reāle)',
  '最快资源/秒': 'Optimae rēs/sec.',
  '尚未解锁重置层。': 'Nūlla strata restaurātiōnis adhūc aperta.',
  '最快（现实）': 'Celerrima (reāle)',
  '累计（现实）': 'Tōtum (reāle)',
  '最快（游戏）': 'Celerrima (lūdus)',
  '最大细胞': 'Maximae cellulae',
  ' 用时': ' Tempus',
  '用时': 'Tempus',
  '速度': 'Celeritās',
  '备注': 'Nota',
  '普通': 'Normāle',
  '暂无记录': 'Nūlla recorda',
  '环境容纳量计算': 'Calculus capācitātis ambītūs',
  '基础值': 'Valor fundāmentālis',
  '每次环境提升倍率（花/ru32）':
    'Multiplicātor cuiusque augmentī ambītūs (flōs/ru32)',
  '已购买环境提升': 'Augmenta ambītūs empta',
  '声望总结晶倍率': 'Multiplicātor tōtārum crystallōrum fāmae',
  'NC2 奖励': 'Praemium NC2',
  '最终环境容纳量': 'Capācitātis ambītūs fīnis',
  '声望结晶 / 声望次数计算':
    'Calculus crystallōrum fāmae / numerī fāmae',
  '公式分母': 'Denōminātor formulae',
  '双倍结晶（2^ru15）': 'Crystallī duplicēs (2^ru15)',
  'NC3 奖励': 'Praemium NC3',
  '本次声望结晶': 'Crystallī fāmae hōc tempore',
  'ru11 底数': 'Basis ru11',
  'ru12 底数': 'Basis ru12',
  'ru22 底数': 'Basis ru22',
  '1e27 被动声望次数': 'Numerus fāmae passīvus 1e27',
  '未解锁': 'Clausum',
  '声望升级（总乘数）· 一级 ×':
    'Meliorāmenta fāmae (multiplicātōrēs tōtī) · I ×',
  ' · 全部 ×': ' · omnēs ×',
  '环境上限总乘数': 'Multiplicātor tōtus capācitātis ambītūs',
  '每级地脉增益（默认折叠）':
    'Augmenta cuiusque gradūs vēnae (clausa)',
  '数量': 'Numerus',
  '购买次数': 'Numerus emptiōnum',
  '单级倍率': 'Multiplicātor gradūs',
  '购买乘数 x': 'Multiplicātor Emptiōnis x',
  '环境提升加持': 'Auxilium augmentī ambītūs',
  '声望全倍率': 'Multiplicātor tōtus fāmae',
  '声望回响': 'Echō Fāmae',
  '地脉结晶加成': 'Bonus crystallōrum vēnārum',
  '献祭倍率': 'Multiplicātor oblātiōnis',
  'Ⅰ级声望': 'Fāma I',
  '已购买': 'Emptum',
  '未购买': 'Nōn emptum',
  '等级 ': 'gradus ',

  /* ===================== 设置 ===================== */
  '导入/导出存档、切换语言、关闭部分确认弹窗。':
    'Importāre/exportāre servātiōnēs, linguam mutāre, nōnnūllās cōnfirmātiōnēs claudere.',
  '存档字符串': 'Fasciculus servātiōnis',
  '导出的存档会出现在这里；粘贴存档后点导入':
    'Servātiō exportāta hīc appārēbit; servātiōnem pōne et deinde preme Importāre.',
  '导出存档': 'Exportāre servātiōnem',
  '导入存档': 'Importāre servātiōnem',
  '语言': 'Lingua',
  'Language': 'Lingua',
  'English translation covers the main interface; some long descriptions may remain Chinese.':
    'Versiō Latīna plūrimam interfaciem vertit; nōnnūllae dēscrīptiōnēs longae Latīnē redditae sunt.',
  'English and Latīna cover the main interface; Latin long vowels are marked with macrons.':
    'English et Latīna plūrimam interfaciem vertunt; in Latīnā vōcālēs longae macrōnibus notantur.',
  '确认弹窗': 'Cōnfirmātiōnēs',
  '地脉之花选项': 'Cōnfirmātiō flōris vēnārum',
  '地脉献祭选项': 'Cōnfirmātiō oblātiōnis vēnārum',
  '清空存档': 'Dēlēre servātiōnem',
  '清空存档选项': 'Cōnfirmātiō dēlētiōnis servātiōnis',
  '更新日志': 'Chronica versiōnum',
  '新增拉丁语（Latīna），全部界面与动态文本本地化，长元音以 macron 标注。':
    'Lingua Latīna addita est; omnis interfaciēs et textus dynamicī versī sunt, vōcālēs longae macrōnibus notātae.',
  '混沌卡片统一 #f26d21；语言接口改为稳定 key-value（tKey）。':
    'Cardae Chaōtis ūnō colōre #f26d21 ūtuntur; interfacēs linguārum ad clāvēs stabilēs (tKey) mūtātae sunt.',
  '新增 RC1/RC2；VCV II 解锁；第二目标改为 ru34；天神页位置调整；NC1 超指数价格与 NC7 连续统求解修复。':
    'Additae RC1/RC2; VCV II aperta; fīnis secundus in ru34 mūtātus; positio pāginae deōrum composita; pretium superexponentiāle NC1 et solūtiō Cōntinuī NC7 corrēcta.',
  '新增第三目标与天神 Mundis；地脉购买次数标题；花强度单朵显示；NC8 地脉提升 ×6.25。':
    'Additus fīnis tertius et Mundis deus; titulus numerī emptiōnum vēnārum; fortitūdō ūnīus flōris ostenditur; augmentum vēnārum NC8 ×6.25.',
  '已导出': 'Exportātum',
  '已导入': 'Importātum',
  '导入失败：字符串无效': 'Importātiō dēfēcit: fasciculus invalidus.',
  '清空全部进度？': 'Dēlēre omnem prōgressum?',

  /* ===================== 天神 / Mundis ===================== */
  '世界深处的存在。献祭声望结晶，换取超越地脉的力量。':
    'Entitātēs profundī mundī. Oblā crystallōs fāmae, ut vim ultrā vēnās accipiās.',
  '天神导航': 'Dīrectiō deōrum',
  'Mundis · 世界之神': 'Mundis · Deus Mundī',
  '已认可': 'Agnitus',
  '掌管世界根基的天神。以声望结晶为祭品，赐予地脉之外的权能。':
    'Deus quī rādīcēs mundī regit. Crystallīs fāmae oblātīs potentiam ultrā vēnās tribuit.',
  '进入 Mundis 的界面': 'Intrā in interfaciem Mundis',
  '世界之神 · God of the World': 'Deus Mundī',
  '累计献祭': 'Tōta oblātiō',
  '献祭全部声望结晶': 'Oblā omnēs crystallōs fāmae',
  '增益': 'Bona',
  '语录': 'Dicta',
  '查看语录': 'Vidē dicta',
  '暂无语录。': 'Nūlla dicta adhūc.',
  '继续': 'Perge',
  '结束对话': 'Fīnis colloquiī',
  '回顾之前的对话': 'Recole colloquium prius',
  'Mundis · 语录': 'Mundis · Dicta',
  '退出': 'Exī',
  '世界之神 Mundis': 'Mundis, deus mundī',
  'Mundis 已解锁': 'Mundis apertus est',
  '准备迎接下一个目标': 'Parā tē ad proximum fīnem',
  '解锁地核': 'Aperī nucleus',
  '解锁 RC7-12': 'Aperī RC7–12',
  '解锁混沌': 'Aperī Chaos',

  /* ===================== 进度目标 ===================== */
  '声望进度': 'Progressus fāmae',
  '细胞达到 1e100': 'Cellulae 1e100 attingendae',
  '0 / 1e100 细胞': '0 / 1e100 cellulae',
  '达到 1e100 细胞（对数进度，1e10 = 10%）':
    'Attinge 1e100 cellulās (prōgressus logarithmicus, 1e10 = 10%)',
  ' / 1e100 细胞': ' / 1e100 cellulae',
  '解锁新的地脉': 'Aperī novās vēnās',
  '完成所有 NC（每个 5%）并解锁 ru34':
    'Perfice omnēs NC (quaeque 5%) et aperī ru34',
  ' /15 声望升级 · NC12 ': ' /15 meliorāmenta fāmae · NC12 ',
  '/15 声望升级 · NC12 ': '/15 meliorāmenta fāmae · NC12 ',
  ' 地脉结晶 · 已购 ': ' crystallī vēnārum · emptum ',
  '你现在在{name}中。': 'Nunc in {name} es.',
  '朵': 'flōrēs',
  '1e500 已达成': '1e500 attinctum',
  '未达 1e500': '1e500 nōn attinctum',
  '献祭值已达到跳过第三目标的条件':
    'Oblātiō condiciōnem fīnis tertiī trānsiliendī iam implēvit',
  '向 Mundis 献祭累计 1e64 声望结晶':
    'Oblā Mundis tōtās 1e64 crystallōs fāmae',
  '向 Mundis 献祭累计 1e120 声望结晶':
    'Oblā Mundis tōtās 1e120 crystallōs fāmae',
  '解锁???': 'Aperī ???',
  '达到 1.8e308 声望结晶': 'Attinge 1.8e308 crystallōs fāmae',
  '混沌': 'Chaos',
  '混沌已解锁': 'Chaos apertum est',
  '等待混沌机制': 'Exspectā mēchanismum Chaōtis',
  '购买所有声望升级（每种 4%）并在 NC12 中达到 1e500 细胞（40%）':
    'Eme omnia meliorāmenta fāmae (quodque 4%) et in NC12 attinge 1e500 cellulās (40%)',

  /* ===================== 主渲染动态标签 ===================== */
  '座 · 有效': 'vēnae · effectīvae',
  '单倍 ×': 'singulāris ×',
  '关': 'clausum',
  '开': 'apertum',
  '购买 ×': 'Eme ×',
  '已购买': 'Emptum',
  '自由': 'Lībera',
  '（自由）': '(lībera)',
  '加持 ×': 'Auxilium ×',
  '过载 ×': 'Onus ×',
  '满额': 'Plēna',
  '封存': 'Obsignāta',
  '禁用': 'Prohibita',
  '禁用（再次购买上一级恢复）':
    'Prohibita (iterum eme gradum superiōrem ut restituātur)',
  '连续统': 'Cōntinuum',
  ' 座 ': ' vēna ',
  ' 细胞/秒': ' cellulae/sec.',
  'NC7 连续统：自动购买器与手动购买已禁用':
    'NC7 Cōntinuum: emptor automaticus et emptiō manuālis prohibentur',
  '已解锁 · 买1 20/秒 / 买最大 2/秒':
    'Apertum · eme I XX/sec. / eme plūrimum II/sec.',
  '已解锁': 'Apertum',
  '可购买': 'Praestō',
  '环境自动': 'Ambītus automaticus',
  '地脉提升自动': 'Augmentum vēnārum automaticum',
  '花自动': 'Flōs automaticus',
  ' 座 Ⅳ（现有 ': ' vēnae IV (nunc ',
  ' 座 Ⅵ（现有 ': ' vēnae VI (nunc ',
  '指数 ×': 'Exponenta ×',
  ' · 购买地脉 ×': ' · emptiō vēnae ×',
  ' · 每次 k ×': ' · quōque k ×',
  ' 级地脉提升（现有 ': ' gradūs augmentī vēnārum (nunc ',
  '一级 ≥ ': 'Gradus I ≥ ',
  '（现有 ': '(nunc ',
  '本次可得 ×': 'Hōc tempore lucrum ×',
  '自动献祭：': 'Oblātiō automatica: ',
  '效果待定': 'Effectus incertus',
  '结晶不足': 'Crystallī dēsunt',
  '待定': 'Incertum',
  '达到阈值自动重置（0 也需 1e100）':
    'Restaurat automaticē cum līmine attinctō (0 quoque 1e100 requirit)',
  '每 1 秒尝试购买一次': 'Singulīs secundīs ūnam emptiōnem temptat',
  '点击「吸收」启动': 'Preme "Absorbe" ut incipiās',
  '下一动作 ': 'Proxima actiō ',
  '（超 100 秒）': '(plūs quam 100 secundae)',
  '吸收 +1': 'Absorbe +1',
  '游戏速度：1/': 'Celeritās lūdī: 1/',
  '游戏速度：×': 'Celeritās lūdī: ×',
  ' / 秒': ' / sec.',
  ' +0 / 秒': '+0 / sec.',
  '级地脉提升': 'gradūs augmentī vēnārum',
  '已解锁 · ': 'Apertum · ',

  /* ===================== 混沌 ===================== */
  '宝石': 'GEMMAE',
  '炼化': 'REFĪNĀRE',
  '混沌升级': 'MELIORĀTIŌNĒS CHAŌTIS',
  '混沌里程碑': 'MĪLIĀRIA CHAŌTIS',
  '暗影之魂': 'Animae Umbrae',
  '光明之魂': 'Animae Lūcis',
  '· 光明之魂': '· Animae Lūcis',
  '装备宝石': 'Gemmae indūtae',
  '混沌时卸下宝石': 'Cum Chaos venit, gemmās dēpōne',
  '物品栏': 'Inventārium',
  '炼化：将宝石原石炼化为宝石。详细炼化界面接入中。':
    'Refīnātiō: gemmās rūdēs in gemmās refīnā. Interfacies refīnātiōnis dētāliāta in preparātiōne est.',
  '混沌升级：敬请期待。':
    'Meliorāmenta Chaōtis: mox venient.',
  '混沌里程碑：1 保留自动购买器；2 自动购买最大 VCV；3 保留累计献祭；4 经验加成；5 自动 EXU12-14/51；7 开局 10000 细胞；10 自动 VCV 提升；30 地脉提升不重置细胞；50 环境上限不消耗细胞；70 声望次数×15；100 自动混沌；200 被动混沌。':
    'Mīliāria Chaōtis: 1 servā emptōrem automaticum; 2 eme plūrimum VCV automaticē; 3 servā tōtam oblātiōnem; 4 bonus experientiae; 5 eme EXU12–14/51 automaticē; 7 incipe cum 10000 cellulīs; 10 augmentum VCV automaticum; 30 augmentum vēnārum cellulās nōn restaurat; 50 capācitās ambītūs cellulās nōn cōnsūmit; 70 numerus fāmae ×15; 100 Chaos automaticum; 200 Chaos passīvum.',
  '第二层大重置。混沌次数：': 'Restaurātiō magna secunda. Numerus Chaōtis: ',
  '温度 ': 'Temperātūra ',
  '共鸣 ': 'Resonantia ',
  'CV': 'CV',
  'VCV': 'VCV',
  'K</b> · 共鸣 ': 'K</b> · Resonantia ',
  ' · 总和 ': ' · Summa ',
  '水': 'Aqua',
  '牛奶': 'Lac',
  '岩浆': 'Magma',
  '蜂蜜': 'Mel',
  '液氮': 'Nitrogenium liquidum',
  '汞': 'Mercurius',
  '取出宝石': 'Extrahe gemmam',
  '原石': 'Rūdis',
  '暂无宝石原石。': 'Nūllae gemmae rūdēs.',
  '暂无宝石。': 'Nūllae gemmae.',
  '环境单次': 'Ambītus ūnus',
  '地核CV': 'CV Nucleī',
  '经验': 'Experientia',
  '双击装备': 'Bīs preme ut indūtās',
  '槽位 ': 'Loculus ',
  '空': 'Vacuum',
  ' 次': ' vice',
  '保留自动购买器': 'Servā emptōrem automaticum',
  '自动购买最大 VCV': 'Eme plūrimum VCV automaticē',
  '保留累计献祭': 'Servā tōtam oblātiōnem',
  '经验 ×(1+混沌次数×5)²': 'Experientia ×(1+numerus Chaōtis×5)²',
  '自动购买 EXU12-14/51': 'Eme EXU12–14/51 automaticē',
  '开局 10000 细胞': 'Incipe cum 10000 cellulīs',
  '自动 VCV 提升': 'Augmentum VCV automaticum',
  '地脉提升不重置细胞': 'Augmentum vēnārum cellulās nōn restaurat',
  '环境上限不消耗细胞': 'Capācitās ambītūs cellulās nōn cōnsūmit',
  '声望次数 ×15': 'Numerus fāmae ×15',
  '自动混沌': 'Chaos automaticum',
  '被动混沌': 'Chaos passīvum',

  /* ===================== 战斗 ===================== */
  '经验 ': 'Experientia ',
  '等级 ': 'Gradus ',
  '生命 ': 'Vīta ',
  '攻击 ': 'Impetus ',
  '防御 ': 'Dēfēnsiō ',
  '暴击 ': 'Ictus criticus ',
  '背包': 'Saccus',
  '自动攻击：开': 'Impetus automaticus: apertus',
  '自动攻击：关': 'Impetus automaticus: clausus',
  '自动攻击：': 'Impetus automaticus: ',
  '逃跑': 'Fuge',
  '刷新：开': 'Renovātiō: aperta',
  '刷新：关': 'Renovātiō: clausa',
  '刷新：': 'Renovātiō: ',
  '合成': 'Cōnfectiō',
  '经验升级 EXU': 'Meliorāmenta experientiae EXU',
  '经验之花 ×': 'Flōrēs experientiae ×',
  '四叶草 ×': 'Trifolia ×',
  '武器：': 'Arma: ',
  '树枝': 'Rāmus',
  '声望结晶获得 ^1.05 / 防御 ×1.1 / 无法回血':
    'Lucrum crystallōrum fāmae ^1.05 / Dēfēnsiō ×1.1 / vīta nōn reficitur',
  'VCV 产量 ×2 / 攻击 ×0.8':
    'Prōductiō VCV ×2 / Impetus ×0.8',
  '攻击 +5': 'Impetus +5',
  '攻击 +20% / 命中 3% 重置敌人攻击':
    'Impetus +20% / 3% ictuum impetum hostis renovat',
  '命中回复生命': 'Ictus vītam reficit',
  '切换武器：': 'Mūtā arma: ',
  '购买 EXU24 后可切换武器':
    'Post emptum EXU24 arma mūtāre poteris.',
  '饰品：': 'Ōrnāmenta: ',
  '无': 'Nūllum',
  '购买 EXU44 解锁饰品栏':
    'Eme EXU44 ut loculōs ōrnāmentōrum aperiās.',
  '型 · Lv.': ' generis · Grad. ',
  '暂无怪物，等待刷新…': 'Nūlla mōnstra; exspectā renovātiōnem…',
  '自动攻击最近的怪物': 'Mōnstrum proximum automaticē impetit',
  '刷新倒计时 ': 'Renovātiō post ',
  ' 秒': ' sec.',
  ' · 已购买': ' · emptum',
  '当前生命与上限的平均值':
    'Medium inter vītam praesentem et maximum',
  '生命上限 ×1.8^等级': 'Līmes vītae ×1.8^gradus',
  '攻击力 ×1.5^等级': 'Impetus ×1.5^gradus',
  '防御力 +(等级+1)(等级+2)': 'Dēfēnsiō +(gradus+1)(gradus+2)',
  '玩家与怪物等级 +1，清空 EXU11-14 并重置生命/攻击/防御':
    'Gradus lūsōris et mōnstrī +1; EXU11–14 dēlentur et vīta/impetus/dēfēnsiō restituuntur',
  '暴击 1%，暴伤 10%；四叶草提升':
    'Ictus criticus 1%, damnum criticum 10%; trifolium auget',
  '经验获得 ×lg(细胞数量)': 'Experientia ×lg(numerus cellulārum)',
  '最大经验 ^10 加成环境上限':
    'Maxima experientia ^10 capācitātem ambītūs auget',
  '解锁武器切换；默认树枝无效果':
    'Aperit mūtātiōnem armōrum; rāmus prīmus nūllum effectum habet',
  '经验之花数量 ×2': 'Numerus flōrum experientiae ×2',
  '解锁逃跑，逃跑无经验':
    'Aperit fugam; fuga experientiam nōn dat',
  '刷新时间为 1/5，可开关刷新':
    'Tempus renovātiōnis 1/5; renovātiō excitārī potest',
  '献祭声望结晶 lg 加成经验':
    'Crystallī fāmae oblātae lg experientiam augent',
  '击杀总数为 VCV 提供加成':
    'Numerus necum bonum VCV praebet',
  '怪物等级为经验提供加成':
    'Gradus mōnstrī bonum experientiae praebet',
  '等级经验 ×(等级+2)²': 'Experientia gradūs ×(gradus+2)²',
  '每次经验 ×2': 'Quaeque experientia ×2',
  '经验为 VCV VI 提供加成': 'Experientia bonum VCV VI praebet',
  '解锁饰品栏': 'Aperit loculōs ōrnāmentōrum',
  '效果未定': 'Effectus incertus',
  '每次购买经验 ×2': 'Quāque emptiōne experientia ×2',
  '击杀 HP>100 的怪物': 'Interfice mōnstrum HP>100',
  'RC1 中 0 地脉之花达到 1e6000 细胞':
    'In RC1 attinge 1e6000 cellulās cum 0 flōribus vēnārum',
  '达到 Lv.2': 'Attinge gradum 2',
  '拥有 5 种不同武器': 'Habē 5 genera arma',
  '达到 1e1000 声望结晶和 1e80000 细胞':
    'Attinge 1e1000 crystallōs fāmae et 1e80000 cellulās',
  '解锁条件：': 'Condiciō: ',
  '武器': 'Arma',
  '饰品': 'Ōrnāmentum',
  '材料': 'Māteria',
  '合成中 ': 'Cōnfectiō ',
  '开始合成': 'Incipe cōnficere',

  /* ===================== 万神殿 / 特殊台词 ===================== */
  '凡人……不，龙脉的织者。我是 Mundis，世界之神。':
    'Mortālis… immō, textor vēnārum. Ego sum Mundis, deus mundī.',
  '你的地脉已经贯穿了这片世界的根基。我认可你。':
    'Vēnae tuae rādīcēs huius mundī pervāsērunt. Tē agnōscō.',
  '将你的声望结晶献祭于我。作为回报，我会赐予你超越凡俗的力量。':
    'Oblā mihi crystallōs fāmae tuae. Prō hōc, potentiam ultrā mortālēs tibi dabō.',
  '你发展的速度比我想象的快，但仍然远不及天神。':
    'Celerius crēscis quam spērāvī, sed adhūc longē ā dīs abes.',
  '天神并不总是都会认可你。': 'Dī nōn semper tē agnōscunt.',
  '祂们中的部分会以毁灭为目标。': 'Nōnnūllī eōrum exitium petunt.',
  '躲好，不要让祂们找到你。': 'Latē, nē tē inveniant.',
  '除非你做好了万全的准备。': 'Nisi omnibus rēbus parātus eris.',
  '你还暂时配不上我准备的试炼。先给你一个简单的。':
    'Nōndum dignus es probātiōne quam parāvī. Accipe prius ūnam faciliōrem.',

  /* ===================== 战斗素材 / 武器 / 饰品 ===================== */
  '凝胶': 'Gel',
  '磷脂': 'Phospholipidum',
  '蝙蝠翅膀': 'Ālae Vespertīliōnis',
  '蛛网': 'Tēla Arāneae',
  '灵气': 'Spīritus',
  '线': 'Fīlum',
  '海胆刺': 'Spīna Echīnī',
  '凝胶大剑': 'Gladius Magnus Gel',
  '凝胶短剑': 'Gladius Brevis Gel',
  '磷气网': 'Rēte Phosphorī',
  '蝙蝠棍': 'Clāva Vespertīliōnis',
  '带电凝胶': 'Gel Ēlectricum',
  '石子': 'Lapis',
  '灵气风筝': 'Milvus Spīritūs',

  /* ===================== 怪物 ===================== */
  '可疑细胞': 'Cellula Suspecta',
  '史莱姆统帅': 'Dux Slīm',
  '巨石': 'Saxum',
  '嗜血狂蝠': 'Vespertīliō Sanguinārius',
  '海胆': 'Ēchīnus',
  '黄色史莱姆': 'Slīm Flāvus',
  '鬼魂': 'Phantasma',
  '幼年龙蜥': 'Lacerta Draconis Iuvenis',
  '蜘蛛': 'Arānea',
  '红色史莱姆': 'Slīm Ruber',
  '荒原幽魂': 'Umbra Vāstae',
  '无名灵魂': 'Anima Innōmināta',
  '绿色史莱姆': 'Slīm Viridis',
  '蓝色史莱姆': 'Slīm Caeruleus',

  /* ===================== 品质前缀 ===================== */
  '华丽的': 'Ōrnātus',
  '晶化的': 'Crystallīnus',
  '超凡的': 'Supernus',
  '精致的': 'Exquīsītus',
  '非凡的': 'Insīgnis',
  '普通的': 'Commūnis',
  '星辰的': 'Stēllāris',
  '超神的': 'Superdīvīnus',
  '深渊的': 'Abyssālis',
  '传奇的': 'Legendārius',
  '古老的': 'Antīquus',
  '罕见的': 'Rārus',
  '稀有的': 'Rārior',

  /* ===================== 宝石种类 ===================== */
  '钻石': 'Adamās',
  '黄玉': 'Topāzus',
  '玛瑙': 'Achātēs',
  '琥珀': 'Sūcinum',
  '紫晶': 'Amethystus',

  /* ===================== 确认 / 提示 ===================== */
  '进行混沌将重置绝大多数进度（宝石与混沌资源保留）。继续？':
    'Chaos omnem ferē prōgressum restaurābit (gemmae et rēs Chaōtis servantur). Pergere?',
  '地脉献祭会清空一级至五级的所有数量（价格、购买次数、加成保留）。继续？':
    'Oblātiō vēnārum omnēs numerōs I–V dēlēbit (pretia, numerī emptiōnum, augmina servantur). Pergere?',
  '声望重置会清空上一轮的所有进度：细胞、地脉、环境上限、普通地脉提升、花与献祭。\n保留：声望结晶/总声望结晶、5 个可重复升级、10 个一次性升级、免费地脉提升、自动购买器设置。\n本次获得 {gain} 声望结晶，继续？':
    'Restaurātiō fāmae omnem prōgressum prioris cursūs dēlēbit: cellulās, vēnās, capācitātem ambītūs, augmentum vēnārum commūne, flōrēs et oblātiōnem.\nServantur: crystallī fāmae/tōtae crystallī fāmae, V meliorāmenta repetibilia, X meliorāmenta semel, augmentum vēnārum grātīs, cōnstitutiōnēs emptōris automaticī.\nHōc tempore accipiēs crystallōs fāmae: {gain}. Pergere?',
  '地脉之花会清空：细胞、全部地脉、普通地脉提升、环境上限提升、献祭。\n声望免费地脉提升会保留。继续？':
    'Flōs Vēnārum dēlēbit: cellulās, omnēs vēnās, augmentum vēnārum commūne, augmentum capācitātis ambītūs, oblātiōnem.\nAugmentum vēnārum grātīs fāmae servābitur. Pergere?',
  '挑战': 'Prōvocātiō',
  ' 可以完成': ' perficī potest',
  'RC3 结束：现实时间达到 100 秒':
    'RC3 fīnīta: tempus reāle 100 secundās attigit',
  'RC12 结束：超过 10 秒':
    'RC12 fīnīta: plūs quam 10 secundae',
  '就绪': 'Parātum',
  '秒': 'sec.',
  '分': 'min.',
  '小时': 'hōr.',
  '天': 'diēs',
  '年': 'ann.',

  /* ===================== 地脉定义 ===================== */
  '皮层微脉': 'Microvēna Corticalis',
  '浅层细脉': 'Vēnula Superficiālis',
  '中层支脉': 'Vēna Rāmōsa Media',
  '深层干脉': 'Vēna Truncālis Profunda',
  '地心主脉': 'Vēna Principalis Cordis',
  '祖龙之脉': 'Vēna Draconis Antīquī',

  /* ===================== 可重复升级 ===================== */
  '六级共鸣': 'Resonantia Gradūs VI',
  'Ⅰ~Ⅳ 地脉产出 ×2^Ⅵ数量':
    'Prōductiō vēnārum I–IV ×2^(numerus VI)',
  '全部地脉 ×(1+2×声望次数)^1.5':
    'Omnēs vēnae ×(1+2×numerus fāmae)^1.5',
  '环境超载': 'Superōnus Ambītūs',
  '环境乘数 lg(k) → (lg k)^2.5（log 模式）':
    'Multiplicātor ambītūs lg(k) → (lg k)^2.5 (modus log)',
  '高起点': 'Initium Altum',
  '环境上限基础值改为 1e10':
    'Capācitās ambītūs fundāmentālis fit 1e10',
  '花之盛放': 'Flōrēscere Flōrum',
  '所有花的效果翻倍': 'Effectus omnium flōrum duplicātur.',
  '延迟爆发': 'Ēruptiō Differta',
  '解锁：达到 1e300 细胞；环境价格超指数从第 101 次起':
    'Aperītur: attinge 1e300 cellulās; pretium ambītūs superexponentiāle ab emptiōne CI',
  '十重上限': 'Capācitās Decuplex',
  '解锁：k>1e100 且细胞>k²；每次环境提升的 k 额外 ×10':
    'Aperītur: k>1e100 et cellulae>k²; quodque augmentum ambītūs k insuper ×10 auget',
  '廉价之花': 'Flōs Vīlis',
  '解锁：无献祭时买花；花价增量 5 → 4':
    'Aperītur: eme flōrem sine oblātiōne; incrēmentum pretiī flōris 5 → 4',
  '极速挑战': 'Cursus Celer',
  '解锁：不买Ⅱ+，10 秒内到 1e6；解锁「地脉之力」子标签页':
    'Aperītur: nōn eme II+; attinge 1e6 intrā X secundās; aperit pāginam "Vīs Vēnārum"',
  '血祭': 'Oblātiō Sanguinis',
  '解锁：单次献祭 >1e6；献祭 = Ⅰ数量^0.1':
    'Aperītur: ūna oblātiō >1e6; oblātiō = numerus I^0.1',

  /* ===================== 挑战定义 ===================== */
  '低价地脉': 'Vēnae Vīlēs',
  'Ⅲ~Ⅵ 不消耗细胞，改用低一级地脉购买':
    'Gradūs III–VI cellulās nōn cōnsūmunt; pretium gradūs inferiōris dant.',
  '购买地脉不再消耗细胞（仍按原价）':
    'Emptiō vēnārum cellulās nōn iam cōnsūmit (pretium tamen postulātur).',
  '生产中断': 'Prōductiō Interrupta',
  '购买地脉后全部生产停止，10 秒内恢复':
    'Post emptam vēnam omnis prōductiō cessat et intrā X secundās redit.',
  '全部地脉 ×√(1+500t)，k ×√(1+3t)（t=本轮秒数）':
    'Omnēs vēnae ×√(1+500t), k ×√(1+3t) (t = secundae huius cursūs)',
  '无声望': 'Sine Fāmā',
  '所有声望升级无效': 'Omnia meliorāmenta fāmae īnfirma sunt.',
  '声望结晶获得 ×10': 'Lucrum crystallōrum fāmae ×10',
  '封存': 'Obsignāta',
  'Ⅴ~Ⅵ 封存；地脉提升改用 Ⅳ 购买':
    'Gradūs V–VI obsignātī; augmentum vēnārum gradū IV emitur.',
  '环境乘数 lg(k) × k^0.01':
    'Multiplicātor ambītūs lg(k) × k^0.01',
  '稀释': 'Dīlūtiō',
  '全部地脉乘数 ÷lg(细胞)；Ⅰ~Ⅴ 再 ÷上一级 lg':
    'Omnēs multiplicātōrēs vēnārum ÷lg(cellulae); I–V insuper ÷lg(gradūs superiōris)',
  '全部地脉乘数 ×lg(细胞)':
    'Omnēs multiplicātōrēs vēnārum ×lg(cellulae)',
  '献祭分流': 'Oblātiō Dīvīsa',
  '献祭 ^0.8 只作用 Ⅵ；Ⅱ~Ⅴ 得 ^0.2；献祭上限 1e100':
    'Oblātiō ^0.8 sōlum in VI agit; II–V ^0.2 accipiunt; līmes oblātiōnis 1e100',
  '献祭不再清除 Ⅰ 和 Ⅴ': 'Oblātiō gradūs I et V nōn iam dēlet.',
  '连续统': 'Cōntinuum',
  '禁用 cv 自动/手动购买；每 0.5 秒按买最大方程解出的数量免费购买全部 cv':
    'Emptiō cv automatica/manuālis prohibētur; singulīs 0.5 secundīs omnia cv grātīs emuntur, quantō ex aequātiōne "eme plūrimum" solvitur.',
  '软上限指数 ^0.75 → ^0.8': 'Exponenta mollis capācitātis ^0.75 → ^0.8',
  '禁升': 'Sine Meliorāmentīs',
  '不能买环境提升与花；献祭作用于 Ⅱ+，上限 1e300':
    'Augmentum ambītūs et flōs emī nōn possunt; oblātiō in II+ agit, līmes 1e300',
  '地脉提升增强 25%': 'Prōductiō vēnārum +25%',
  '软上限': 'Mollis Capācitās',
  '软上限指数变为 ^0.6': 'Exponenta mollis capācitātis fit ^0.6',
  '解锁环境上限自动购买器':
    'Aperit emptōrem automaticum capācitātis ambītūs.',
  '初始 x': 'x Prīmum',
  'x 初始值变为 1': 'Valor prīmus x fit 1',
  '解锁地脉提升自动购买器':
    'Aperit emptōrem automaticum augmentī vēnārum.',
  '反物质': 'Antimateria',
  '买过 Ⅱ 后反物质每秒 ×5；超过细胞即失败；献祭/花重置':
    'Post emptum II, antimateria singulīs secundīs ×5; sī cellulās superat, dēficis; oblātiō/flōs restaurant.',
  '解锁地脉之花自动购买器':
    'Aperit emptōrem automaticum flōris vēnārum.',
  '生产重排': 'Prōductiō Reordināta',
  'Ⅱ产细胞(100/刻)；Ⅵ→Ⅳ、Ⅴ→Ⅲ、Ⅳ→Ⅱ、Ⅲ→Ⅰ':
    'II cellulās prōdūcit (100/tempus); VI→IV, V→III, IV→II, III→I',
  '解锁自动声望': 'Aperit fāmam automaticam.',

  /* ===================== RC 定义 ===================== */
  '万象共鸣': 'Omnēs Prōvocātiōnēs',
  '同时承受所有 NC 的修正；目标 1e400 细胞':
    'Omnēs modificātiōnēs NC simul sustinentur; fīnis 1e400 cellulae',
  '每完成一个 RC，所有 VCV 乘数 ×5':
    'Quāque RC perfectā, omnēs multiplicātōrēs VCV ×5',
  '禁晶之约': 'Pactum Sine Crystallīs',
  '地脉结晶不再加成 cv；所有花强度为 10%；目标 1e1000 细胞':
    'Crystallī vēnārum cv nōn iam augent; fortitūdō omnium flōrum 10%; fīnis 1e1000 cellulae',
  '所有花增强 10%': 'Omnēs flōrēs +10%',
  '慢速宇宙': 'Ūniversum Tardum',
  '游戏速度放慢 1000 倍；目标 1e1200 细胞':
    'Celeritās lūdī 1000× tardior; fīnis 1e1200 cellulae',
  '开始游戏时拥有 100 细胞': 'Incipe cum 100 cellulīs.',
  '地脉互斥': 'Vēnae Exclūsīvae',
  '购买高级地脉会禁用上一级；再次购买恢复；目标 1e500 细胞':
    'Emptā vēnā superiōre, gradus īnferior prohibētur; iterum eme ut restituātur; fīnis 1e500 cellulae',
  '声望结晶总数公式获得指数 t=min(1000,1+lg(结晶)/10)':
    'Formula tōtārum crystallōrum fāmae exponentem t=min(1000,1+lg(crystallī)/10) accipit',
  '万脉归细胞': 'Omnēs Vēnae ad Cellulās',
  'Ⅱ~Ⅵ 每刻直接生产细胞；目标 1e120 细胞':
    'II–VI singulīs tempōribus cellulās prōdūcunt; fīnis 1e120 cellulae',
  'Ⅰ~Ⅴ 获得 ×声望结晶²；地脉结晶加成提升为 ^5':
    'I–V ×crystallī fāmae² accipiunt; bonus crystallōrum vēnārum fit ^5',
  '无祭之约': 'Pactum Sine Oblātiōne',
  '禁用地脉献祭；拥有 CV VI 后每秒自动无奖励献祭；目标 1e1500 细胞':
    'Oblātiō vēnārum prohibētur; post habitam CV VI, singulīs secundīs oblātiō sine praemiō fit; fīnis 1e1500 cellulae',
  '献祭公式改为 I^0.11×II^0.01×III^0.08；解锁自动献祭':
    'Formula oblātiōnis fit I^0.11×II^0.01×III^0.08; aperit oblātiōnem automaticam.',
  '禁花高墙': 'Sine Flōribus, Mūrus Altior',
  '无法购买花；环境上限基础价格增长 1e4→1e5；目标 1e4000 细胞':
    'Flōrēs emī nōn possunt; pretium fundāmentāle capācitātis ambītūs crēscit 1e4→1e5; fīnis 1e4000 cellulae',
  '解锁购买最大 VCV；环境上限 ×声望次数²':
    'Aperit "eme plūrimum VCV"; capācitās ambītūs ×numerus fāmae²',
  '奇异之脉': 'Vēnae Mīrābilēs',
  'Ⅳ 不产 Ⅲ，改为生产奇异物质；奇异物质降低所有 CV 价格；目标 1e3000 细胞':
    'IV nōn prōdūcit III, sed māteriam mīram; ea omnia pretia CV minuit; fīnis 1e3000 cellulae',
  '献祭的声望结晶以 ^0.1 加成声望结晶':
    'Crystallī fāmae oblātae crystallōs fāmae ^0.1 augent',
  '禁升禁祭': 'Sine Augmentō, Sine Oblātiōne',
  '无法购买环境上限提升，也无法献祭地脉；目标 1e1500 细胞':
    'Augmentum capācitātis ambītūs emī nōn potest, neque vēnae oblārī; fīnis 1e1500 cellulae',
  '环境上限提升价格超指数阈值再延迟 50':
    'Līmen superexponentiāle pretiī augmentī capācitātis ambītūs per L amplius differtur',
  '反物质之脉': 'Vēnae Antimateriae',
  'Ⅴ~Ⅵ 生产反物质；反物质削弱 Ⅰ~Ⅳ；目标 1e1000 细胞':
    'V–VI antimateriam prōdūcunt; ea I–IV īnfirmat; fīnis 1e1000 cellulae',
  '解锁购买最大 ru11-15': 'Aperit "eme plūrimum ru11–15"',
  '轮转封脉': 'Sigillum Rotāns',
  '按 1-3-5-2-4-6 顺序每秒禁用一条 CV；目标 1e4000 细胞':
    'Singulīs secundīs ūna CV prohibētur ōrdine 1-3-5-2-4-6; fīnis 1e4000 cellulae',
  '声望重置额外获得等同地脉提升的声望次数；每秒 +1 声望次数':
    'Restaurātiō fāmae tantundem numerī fāmae accipit quantum augmentum vēnārum; +1 numerus fāmae per secundam',
  '十秒试炼': 'Probātiō Decem Secundōrum',
  '必须在 10 秒内完成；目标 1e2000 细胞':
    'Intrā X secundās perficī dēbet; fīnis 1e2000 cellulae',
  '游戏内声望时间超过 10 秒时，获得的声望次数 ×100':
    'Sī tempus fāmae in lūdō X secundās superat, numerus fāmae lucrātus ×100',

  /* ===================== MU 定义 ===================== */
  '万脉共鸣': 'Resonantia Omnium Vēnārum',
  '容纳百倍': 'Capācitās Centuplex',
  '超指缓降': 'Remissiō Superexponentiālis',
  '地脉激扬': 'Excitātiō Vēnārum',
  '花海绽放': 'Mare Flōrum',
  '结晶立方': 'Crystallī Cubicī',
  '极速容纳': 'Capācitās Celerrima',
  '自动花满': 'Flōrēs Automaticē Complētae',
  '花育一号': 'Flōris Cultus I',
  '容纳柔化': 'Capācitās Mollīta',

  /* ===================== EXU 名称 ===================== */
  '生命调和': 'Harmonia Vītae',
  '生命上限': 'Līmes Vītae',
  '攻击强化': 'Impetus Auctus',
  '防御强化': 'Dēfēnsiō Aucta',
  '等级提升': 'Gradus Auctus',
  '暴击觉醒': 'Ictus Criticus Auctus',
  '细胞经验': 'Experientia Cellulārum',
  '经验容纳': 'Capācitās Experientiae',
  '武器切换': 'Mūtātiō Armōrum',
  '双倍花': 'Flōrēs Duplicēs',
  '允许逃跑': 'Fuga Permissa',
  '快速刷新': 'Renovātiō Celeris',
  '献祭经验': 'Experientia Oblāta',
  '击杀共鸣': 'Resonantia Necum',
  '怪物等级经验': 'Experientia Gradūs Mōnstrī',
  '强敌经验': 'Experientia Hostis Fortis',
  '挑战双倍': 'Prōvocātiō Duplex',
  'VCV VI 经验': 'Experientia VCV VI',
  '饰品栏': 'Loculī Ōrnāmentōrum',
  '未知': 'Incognitum',
  '经验翻倍': 'Experientia Duplex'
};

/* ===================== 页脚说明 ===================== */
Object.assign(LA_TEXT, {
  '· 价格按「已购买次数」计 · 花只提高该级购买倍率，不影响价格 · 含地脉献祭 · 支持 Ⅵ→Ⅰ 购买最大 · 声望层 15 个升级 + 自动购买器 + 挑战 NC1~NC12 + RC1~RC12 + 地核 + 战斗 + 混沌 + 地脉之力 VCV + 统计 + 设置 + 天神 · 多文件':
    '· Pretium secundum numerum emptiōnum computātur · Flōs sōlum multiplicātōrem emptiōnis illīus gradūs auget, pretium nōn afficit · Oblātiō vēnārum inclūsa · Eme plūrimum ab VI ad I · Fāma: 15 meliorāmenta + emptor automaticus + prōvocātiōnēs NC1–NC12 + RC1–RC12 + nucleus + pugna + Chaos + vīs vēnārum VCV + statistica + optiōnēs + dī · plūra fīla',
  '每一级地脉每秒产出 20 个下级（Ⅰ 产细胞）· 软上限只作用于一级：有效 = k×(n/k)':
    'Quaeque vēna XX subunitātēs per secundam prōdūcit (I cellulās prōdūcit) · Mollis capācitās sōlum in gradum I agit: effectīva = k×(n/k)',
  '，二级以上按原数量': '; gradūs II et suprā numerum prīstinum servant.',
  '每次环境提升额外给全部地脉 ×1.25':
    'Quodque augmentum ambītūs omnibus vēnīs ×1.25 dat',
  '(1+0.5×花)': '(1+0.5×flōs)',
  '· 每买一座地脉，该级自己的倍率 ×2×log10(10+10×花)（价格不变） · 花的价格 = 2+5×花 级地脉提升':
    '· Quāque vēnā emptā, multiplicātor illīus gradūs ×2×log10(10+10×flōs) fit (pretium immūtātum) · Pretium flōris = augmentum vēnārum gradūs 2+5×flōs',
  '数值用 {msg, layer} 表示：1e2000 = {msg:2000, layer:1}，不再有 1e308 上限 · 地脉献祭：清空一至五级，把一级数量换成 Ⅵ 的 ×(lg n)':
    'Numerī per {msg, layer} exprimuntur: 1e2000 = {msg:2000, layer:1}; nūllus līmes 1e308 iam est · Oblātiō vēnārum: gradūs I–V dēlentur, numerus gradūs I in VI ×(lg n) convertitur',
  '（价格、购买次数保留）': '(pretia et numerī emptiōnum servantur)'
});

/* 原石：rūdis 为阴性，前缀用阴性形式 */
Object.assign(LA_TEXT, {
  '华丽的原石': 'Rūdis Ōrnāta',
  '晶化的原石': 'Rūdis Crystallīna',
  '超凡的原石': 'Rūdis Superna',
  '精致的原石': 'Rūdis Exquīsīta',
  '非凡的原石': 'Rūdis Insīgnis',
  '普通的原石': 'Rūdis Commūnis'
});

/* 宝石全名：前缀 + 种类，按性数格一致 */
const LA_GEM_TYPES = {
  '钻石': { noun: 'Adamās', g: 'm' },
  '黄玉': { noun: 'Topāzus', g: 'm' },
  '玛瑙': { noun: 'Achātēs', g: 'm' },
  '琥珀': { noun: 'Sūcinum', g: 'n' },
  '紫晶': { noun: 'Amethystus', g: 'f' }
};
const LA_GEM_PREFIX = {
  '华丽的': { m: 'Ōrnātus', f: 'Ōrnāta', n: 'Ōrnātum' },
  '晶化的': { m: 'Crystallīnus', f: 'Crystallīna', n: 'Crystallīnum' },
  '超凡的': { m: 'Supernus', f: 'Superna', n: 'Supernum' },
  '精致的': { m: 'Exquīsītus', f: 'Exquīsīta', n: 'Exquīsītum' },
  '非凡的': { m: 'Insīgnis', f: 'Insīgnis', n: 'Insīgne' },
  '普通的': { m: 'Commūnis', f: 'Commūnis', n: 'Commūne' }
};
for (const p in LA_GEM_PREFIX) {
  for (const t in LA_GEM_TYPES) {
    const info = LA_GEM_TYPES[t];
    LA_TEXT[p + t] = LA_GEM_TYPES[t].noun + ' ' + LA_GEM_PREFIX[p][info.g];
  }
}

/* 英文键 → 拉丁，便于从 English 切到 Latina 时逆转 */
if (typeof EN_TEXT !== 'undefined') {
  for (const zh in LA_TEXT) {
    if (Object.prototype.hasOwnProperty.call(EN_TEXT, zh)) {
      LA_TEXT[EN_TEXT[zh]] = LA_TEXT[zh];
    }
  }
}
if (typeof MUNDIS_LINES_EN !== 'undefined' && typeof MUNDIS_LINES !== 'undefined') {
  for (let i = 0; i < MUNDIS_LINES.length; i++) {
    if (MUNDIS_LINES_EN[i] && LA_TEXT[MUNDIS_LINES[i]]) LA_TEXT[MUNDIS_LINES_EN[i]] = LA_TEXT[MUNDIS_LINES[i]];
  }
}

if (typeof registerLanguage === 'function') {
  registerLanguage('la', 'Latīna', LA_TEXT);
  registerLanguageKeys('la', {
    'tab.chaos': 'CHAOS',
    'chaos.title': 'CHAOS',
    'chaos.gems': 'GEMMAE',
    'chaos.refine': 'REFĪNĀRE',
    'chaos.upgrades': 'MELIORĀTIŌNĒS CHAŌTIS',
    'chaos.milestones': 'MĪLIĀRIA CHAŌTIS',
    'chaos.souls.shadow': 'Animae Umbrae',
    'chaos.souls.light': 'Animae Lūcis'
  });
}
