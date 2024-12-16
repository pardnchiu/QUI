## 屬性概覽

| 屬性 | 描述 |
| --- | --- |
| `{{value}}` | 將文字插入到 HTML 標籤中，並隨資料變更自動更新。 |
| `:path` | 搭配 `temp` 標籤，用於將外部文件中的 HTML 片段加載到當前頁面。 |
| `:html` | 使用文本替換元素的 `innerHTML`。 |
| `:for` | 支援 `item in items`、`(item, index) in items`、`(key, value) in object` 格式，遍歷資料集合，生成對應的 HTML 元素。 |
| `:if`<br>`:else-if`<br>`:elif`<br>`:else` | 根據條件顯示或隱藏元素，實現分支邏輯。 |
| `:model` | 將資料綁定到表單元素（如 `input`），當輸入變更時自動更新資料。 |
| `:hide` | 根據特定條件隱藏元素。 |
| `:effect` | 用於指定元素的過渡效果，如 `fade-in` 或 `expand`，以增強用戶體驗。 |
| `:mask` | 控制區塊載入時的動畫效果，支援 `true\|false\|1\|0`，提升載入動態視覺效果。 |
| `:[attr]` | 設定元素屬性，例如 `ID`、`class`、圖像來源等。<br>範例：`:id`、`:class`、`:src`、`:alt`、`:href`... |
| `:[css]` | 設定元素CSS，例如 `margin`、`padding` 等。<br>範例：`:background-color`、`:opacity`、`:margin`、`:top`、`:position`... |
| `@[event]` | 添加事件監聽器，當事件觸發時執行指定操作。<br>範例：`@click`、`@input`、`@mousedown`... |