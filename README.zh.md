<img src="./static/image/logo.png" width=80>

# QuickUI

*(原名：PDQuickUI，自 `0.6.0` 版本起更名為 QuickUI)*

![tag](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![size](https://img.shields.io/github/size/pardnchiu/QuickUI/dist%2FQuickUI.js) 
![license](https://img.shields.io/github/license/pardnchiu/QuickUI)<br>
[![npm](https://img.shields.io/npm/v/@pardnchiu/quickui)](https://www.npmjs.com/package/@pardnchiu/quickui)
[![download](https://img.shields.io/npm/dm/@pardnchiu/quickui)](https://www.npmjs.com/package/@pardnchiu/quickui)
[![jsdeliver](https://img.shields.io/jsdelivr/npm/hm/@pardnchiu/quickui)](https://www.jsdelivr.com/package/npm/@pardnchiu/quickui)<br>
[![](https://img.shields.io/badge/read-English%20Version-ffffff)](https://github.com/pardnchiu/QuickUI/blob/main/README.en.md)

`QuickUI` 是從 [PDRenderKit](https://github.com/pardnchiu/PDRenderKit) 中獨立出來的前端渲染框架，專注於強化前端框架功能。<br>
透過引入虛擬 DOM 概念重寫渲染邏輯，提升渲染效能，並實現更高效的數據監聽和自動更新。<br>

本專案移除了 `PDRenderKit` 中針對 `prototype` 的擴展，確保兼容性與效能，適合用於複雜的應用場景。<br>
提供 `module` 和非 `module` 版本，授權從 `PDRenderKit` 的 `GPL-3.0` 更改為 `MIT`。<br>

## 特點

- **清晰的架構**：UI 和資料邏輯分離，維護方便。
- **代碼簡潔**：減少重複代碼，提升可讀性。
- **自動渲染**：監控資料變動並自動更新，減少手動操作。
- **輕量化**：使用原生 JS 和內建 API 撰寫，無任何外部依賴。

## 安裝方式

- 從 npm 安裝
    ```bash
    npm i @pardnchiu/quickui
    ```

- 從 CDN 引入
    - **引入 `QuickUI` 套件**
        ```html
        <!-- Version 0.6.0 and above -->
        <script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.js"></script>

        <!-- Version 0.5.4 and below -->
        <script src="https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.js"></script>
        ```
    - **Module 版本**
        ```javascript
        // Version 0.6.0 and above
        import { QUI } from "https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.esm.js";
        
        // Version 0.5.4 and below
        import { QUI } from "https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.module.js";
        ```
## 使用方法

- **初始化 `QUI`**
    ```Javascript
    const app = new QUI({
        id: "", // 指定渲染元素
        data: {
            // 自訂 DATA
        },
        event: {
            // 自訂 EVENT
        },
        when: {
            before_render: function () {
                // 停止渲染
            },
            rendered: function () {
                // 已渲染
            },
            before_update: function () {
                // 停止更新
            },
            updated: function () {
                // 已更新
            },
            before_destroy: function () {
                // 停止銷毀
            },
            destroyed: function () {
                // 已銷毀
            }
        }
    });
    ```

## 功能介紹
自動渲染：加載自動渲染在檢測到資料變更時自動重新渲染。

<details>
<summary>屬性概覽</summary>

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
| `:mask` | 控制區塊載入時的動畫效果，支援 `true|false|1|0`，提升載入動態視覺效果。 |
| `:[attr]` | 設定元素屬性，例如 `ID`、`class`、圖像來源等。<br>範例：`:id`、`:class`、`:src`、`:alt`、`:href`... |
| `:[css]` | 設定元素CSS，例如 `margin`、`padding` 等。<br>範例：`:background-color`、`:opacity`、`:margin`、`:top`、`:position`... |
| `@[event]` | 添加事件監聽器，當事件觸發時執行指定操作。<br>範例：`@click`、`@input`、`@mousedown`... |

</details>

<details>
<summary>文字替換</summary>

### `{{value}}`

- index.html
    ```HTML
    <h1>{{ title }}</h1>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                title: "test"
            }
        });
    </script>
    ```
- Result
    ```HTML
    <body id="app">
        <h1>test</h1>
    </body>
    ```

***

### `:html`

- index.html
    ```HTML
    <section :html="html"></section>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                html: "<b>innerHtml</b>"
            }
        });
    </script>
    ```
- Result
    ```HTML
    <body id="app">
        <section>
            <b>innerHtml</b>
        </section>
    </body>
    ```

</details>

<details>
<summary>插入區塊</summary>

> [!NOTE]
> 確保測試時已禁用瀏覽器中的本地文件限制或使用實時服務器。

### `:path`

- test.html
    ```html
    <h1>path heading</h1>
    <p>path content</p>
    ```
- index.html
    ```html
    <body id="app">
        <temp :path="./test.html"></temp>
    </body>
    <script>
        const app = new QUI({
            id: "app"
        });
    </script>
    ```
- Result
    ```html
    <body id="app">
        <!-- 直接插入 PATH 內容 -->
        <h1>path heading</h1>
        <p>path content</p>
    </body>
    ```

</details>

<details>
<summary>迴圈渲染</summary>

### `:for`

- index.html
    ```html
    <body id="app">
        <ul>
            <li :for="(item, index) in ary" :id="item" :index="index">{{ item }} {{ CALC(index + 1) }}</li>
        </ul>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                ary: ["test1", "test2", "test3"]
            }
        });
    </script>
    ```
- Result
    ```html
    <body id="app">
        <li id="test1" index="0">test1 1</li>
        <li id="test2" index="1">test2 2</li>
        <li id="test3" index="2">test3 3</li>
    </body>
    ```

***

### 巢狀迴圈

- index.html
    ```html
    <body id="app">
    <ul>
        <li :for="(key, val) in obj">
            {{ key }}: {{ val.name }}
            <ul>
                <li :for="item in val.ary">
                    {{ item.name }}
                    <ul>
                        <li :for="(item1, index1) in item.ary1">
                            {{ CALC(index1 + 1) }}. {{ item1.name }} - ${{ item1.price }}
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                obj: {
                    food: {
                        name: "Food",
                        ary: [
                            {
                                name: 'Snacks',
                                ary1: [
                                    { name: 'Potato Chips', price: 10 },
                                    { name: 'Chocolate', price: 8 }
                                ]
                            },
                            {
                                name: 'Beverages',
                                ary1: [
                                    { name: 'Juice', price: 5 },
                                    { name: 'Tea', price: 3 }
                                ]
                            }
                        ]
                    },
                    home: {
                        name: 'Home',
                        ary: [
                            {
                                name: 'Furniture',
                                ary1: [
                                    { name: 'Sofa', price: 300 },
                                    { name: 'Table', price: 150 }
                                ]
                            },
                            {
                                name: 'Decorations',
                                ary1: [
                                    { name: 'Picture Frame', price: 20 },
                                    { name: 'Vase', price: 15 }
                                ]
                            }
                        ]
                    }
                }
            }
        });
    </script>
    ```
- Result
    ```html
    <body id="app">
    <ul>
        <li>food: Food
            <ul>
                <li>Snacks
                    <ul>
                        <li>1. Potato Chips - $10</li>
                        <li>2. Chocolate - $8</li>
                    </ul>
                    </li>
                <li>Beverages
                    <ul>
                        <li>1. Juice - $5</li>
                        <li>2. Tea - $3</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>home: Home
            <ul>
                <li>Furniture
                    <ul>
                        <li>1. Sofa - $300</li>
                        <li>2. Table - $150</li>
                    </ul>
                </li>
                <li>Decorations
                    <ul>
                        <li>1. Picture Frame - $20</li>
                        <li>2. Vase - $15</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    </body>
    ```

</details>

<details>
<summary>條件渲染</summary>

- index.html
    ```html
    <body id="app">
        <h1 :if="heading == 1">{{ title }} {{ heading }}</h1>
        <h2 :else-if="isH2">{{ title }} {{ heading }}</h2>
        <h3 :else-if="heading == 3">{{ title }} {{ heading }}</h3>
        <h4 :else>{{ title }} {{ heading }}</h4>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                heading: [Number|null],
                isH2: [Boolean|null],
                title: "test"
            }
        });
    </script>
    ```
- Result: `heading = 1`
    ```html
    <body id="app">
        <h1>test 1</h1>
    </body>
    ```
- Result: `heading = null && isH2 = true`
    ```html
    <body id="app">
        <h2>test </h2>
    </body>
    ```
- Result: `heading = 3 && isH2 = null`
    ```html
    <body id="app">
        <h3>test 3</h3>
    </body>
    ```
- Result: `heading = null && isH2 = null`
    ```html
    <body id="app">
        <h4>test </h4>
    </body>
    ```

</details>

<details>
<summary>模板渲染</summary>

- index.html
    ```HTML
    <body id="app"></body>
    <script>
        const test = new QUI({
            id: "app",
            data: {
                hint: "hint 123",
                title: "test 123"
            },
            render: () => {
                return `
                    "{{ hint }}",
                    h1 {
                        style: "background: red;", 
                        children: [ 
                            "{{ title }}"
                        ]
                    }`
            }
        })
    </script>
    ```
- result
    ```HTML
    <body id="app">
        hint 123
        <h1 style="background: red;">test 123</h1>
    </body>
    ```
    
</details>

<details>
<summary>雙向綁定</summary>

```html
<body id="app">
    <input type="password" :model="password">
    <button @click="show">test</button>
</body>
<script>
    const app = new QUI({
        id: "app",
        data: {
            password: null,
        },
        event: {
            show: function(e){
                alert("Password:", app.data.password);
            }
        }
    });
</script>
```
    
</details>

<details>
<summary>事件偵測</summary>

```html
<body id="app">
    <button @click="test">test</button>
</body>
<script>
    const app = new QUI({
        id: "app",
        event: {
            test: function(e){
                alert(e.target.innerText + " clicked");
            }
        }
    });
</script>
```
    
</details>

<details>
<summary>CSS設置</summary>

> [!NOTE]
> 支援 `:[CSS屬性]` 的簡易設定方式，直接將資料綁定到樣式屬性。

- index.html
    ```html
    <body id="app">
        <button :width="width" :backdround-color="color">test</button>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                width: "100px",
                color: "red"
            }
        });
    </script>
    ```
- Result:
    ```html
    <body id="app">
        <button style="width: 100px; backdround-color: red;">test</button>
    </body>
    ```

</details>

<details>
<summary>可用函式</summary>

### `LENGTH()`

- index.html
    ```HTML
    <body id="app">
        <p>Total: {{ LENGTH(array) }}</p>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                array: [1, 2, 3, 4]
            }
        });
    </script>
    ```
- result
    ```HTML
    <body id="app">
        <p>Total: 4</p>
    </body>
    ```

***

### `CALC()`

- index.html
    ```HTML
    <body id="app">
        <p>calc: {{ CALC(num * 10) }}</p>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                num: 1
            }
        });
    </script>
    ```
- result
    ```HTML
    <body id="app">
        <p>calc: 10</p>
    </body>
    ```

***

### `UPPER()` / `LOWER()`

- index.html
    ```HTML
    <body id="app">
        <p>{{ UPPER(test1) }} {{ LOWER(test2) }}</p>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                test1: "upper",
                test2: "LOWER"
            }
        });
    </script>
    ```
- result
    ```HTML
    <body id="app">
        <p>UPPER lower</p>
    </body>
    ```

***

### `DATE(num, format)`

- index.html
    ```HTML
    <body id="app">
        <p>{{ DATE(now, YYYY-MM-DD hh:mm:ss) }}</p>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                now: Math.floor(Date.now() / 1000)
            }
        });
    </script>
    ```
- result
    ```HTML
    <body id="app">
        <p>2024-08-17 03:40:47</p>
    </body>
    ```

</details>

<details>
<summary>懶加載</summary>

### `:lazyload`

- index.html
    ```html
    <body id="app">
        <img :lazyload="image">
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                image: "test.jpg"
            },
            option: {
                lazyload: true, // 圖片延遲加載: true|false (預設: true)
            }
        });
    </script>
    ```
- result
    ```html
    <body id="app">
        <img src="test.jpg">
    </body>
    ```

***

### `SVG` 替換
- test.svg
    ```XML
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    ```
- index.html
    ```html
    <body id="app">
        <temp-svg :src="svg"></temp-svg>
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                svg: "test.svg",
            },
            option: {
                svg: true // SVG 檔案轉換: true|false (預設: true)
            }
        });
    </script>
    ```
- result
    ```html
    <body id="app">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="black" stroke-width="2" stroke-linecap="round">
            <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2" stroke-linecap="round">
        </svg>
    </body>
    ```

</details>

<details> 
<summary>多國語言</summary>

> [!NOTE]
> 若為物件格式，直接配置多語言內容。
> 若為字串格式，會透過 `fetch` 動態載入語言檔案。

- en.json
    ```JSON
    {
        "greeting": "Hello",
        "username": "Username"
    }
    ```
- index.html
    ```html
    <body id="app">
        <h1>{{ i18n.greeting }}, {{ i18n.username }}: {{ username }}</h1>
        <button @click="change" data-lang="zh">切換至中文</button>
        <button @click="change" data-lang="en">Switch to English</button>
    </body>
    <script>
    const app = new QUI({
        id: "app",
        data: {
            username: "帕登"
        },
        i18n: {
            zh: {
                greeting: "你好",
                username: "用戶名"
            },
            en: "en.json",
        },
        i18nLang: "zh | en", // 選擇顯示語言
        event: {
            change: e => {
                const _this = e.target;
                const lang = _this.dataset.lang;
                app.lang(lang);
            },
        }
    });
    </script>
    ```
- result  `i18nLang = zh`
    ```html
    <body id="app">
        <h1>你好, 用戶名: 帕登</h1>
        <button data-lang="zh">切換至中文</button>
        <button data-lang="en">Switch to English</button>
    </body>
    ```
- result  `i18nLang = en`
    ```html
    <body id="app">
        <h1>Hello, Username: 帕登</h1>
        <button data-lang="zh">切換至中文</button>
        <button data-lang="en">Switch to English</button>
    </body>
    ```

</details>

<details>
<summary>生命週期</summary>

```html
<body id="app"></body>
<script>
    const app = new QUI({
        id: "app",
        when: {
            before_render: function () {
                // 停止渲染
                // retuen false 
            },
            rendered: function () {
                // 已掛載
            },
            before_update: function () {
                // 停止更新
                // retuen false 
            },
            updated: function () {
                // 已更新
            },
            before_destroy: function () {
                // 停止銷毀
                // retuen false 
            },
            destroyed: function () {
                // 已銷毀
            }
        }
    });
</script>
```

</details>

<details>
<summary>資料獲取</summary>

```html
<body id="app">
    <input type="text" :model="test">
    <button @click="get">測試</button>
</body>
<script>
    const app = new QUI({
        id: "app",
        data: {
            // 給 input 綁定的值
            test: 123
        },
        event: {
            get: _ => {
                // 點擊時彈出內容為 test 值的通知
                alert(app.data.test);
            },
            set: _ => {
                let dom = document.createElement("button");
                // 按鈕點按事件設置為 get 函式
                dom.onclick = app.event.get;
                app.body.append(dom);
            }
        }
    });
</script>
```

</details>

## 開發者

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:dev@pardn.io) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## 授權條款

本專案依據 [MIT](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) 授權使用。

## 獲取完整原始碼

[聯絡我](mailto:dev@pardn.io) 獲取完整未混淆源碼<br>
可隨意修改、商業使用，根據需求選擇授權版本：
- 需保留 `Powered by @pardnchiu/quickui` 的版權聲明：$7,500
- 完全自主，無需添加版權聲明：$10,000

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)