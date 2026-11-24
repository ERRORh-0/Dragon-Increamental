# 语言扩展接口

所有语言均采用**稳定 key → 文本**的键值对，同时保留中文原文 key 的兼容表。

## 内置语言

- `zh`：中文
- `en`：English
- `la`：Latīna（拉丁语，长元音以 macron 标注：ā ē ī ō ū）

## 语言包

```js
registerLanguage('ja', '日本語', {
  'tab.renown': '名声',
  'tab.chaos': '混沌',
  'chaos.gems': '宝石'
});

registerLanguageKeys('ja', {
  'tab.renown': '名声',
  'tab.chaos': '混沌',
  'chaos.gems': '宝石'
});
```

- `registerLanguage(code, name, map)`：注册语言显示名与 key-value 文本
- `registerLanguageKeys(code, map)`：只补充/覆盖某个语言的 key-value

## 切换语言

```js
setLanguage('la');
```

设置页的语言下拉框会自动出现已注册语言（`I18N.list()`）。

## 读取翻译

```js
translate('tab.renown'); // 旧接口，兼容中文原文 key
tKey('tab.renown');      // 稳定 key
tr('购买', 'Buy');        // 中文源文本 + 英文回退；拉丁语查 LA_TEXT
trf('价格 {v}', 'Price {v}', { v: '10' }); // 带占位符
```

- `tr(zh, en)`：当前语言为中文返回 `zh`，英语返回 `en`（缺省查 `EN_TEXT`），
  拉丁语查 `js/la.js` 的 `LA_TEXT`，缺失时回退英语/中文。
- `trf(zh, en, params)`：在 `tr` 的结果上替换 `{name}` 占位符。

## 添加拉丁语文本

1. 在 `js/la.js` 的 `LA_TEXT` 中写入 `'中文源文本': '文本拉丁语'`。
2. 动态文本用 `tr()` / `trf()` 包裹，避免直接拼接中文。
3. 需要语序变化时使用 `{name}`、`{v}` 等占位符。
4. 长元音一律标注 macron：`vēna`、`fāma`、`crystallī`、`prōvocātiō`。

## 回退

1. 当前语言
2. `I18N.fallback`（默认 `zh`）
3. 原 key

## 新增语言步骤

1. 新建 `js/xx.js`
2. 在 `js/en.js`、`js/zh.js`、`js/i18n.js` 后加载
3. 调用 `registerLanguage` 或 `registerLanguageKeys`
4. 在 `index.html` 中加入 `<script src="js/xx.js"></script>`
5. 刷新后在设置中选择

拉丁语包 `js/la.js` 还包含宝石名、怪物名、挑战/升级名称等按性数格生成的显示文本，
以及从 English 切回 Latīna 所需的英文反查键。
