# PDQuickUI (JavaScript Library)

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/size/pardnchiu/PDQuickUI/dist%2FPDQuickUI.js)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/PDQuickUI)](https://github.com/pardnchiu/PDQuickUI) [![](https://img.shields.io/npm/v/pdquickui)](https://www.npmjs.com/package/pdquickui) ![](https://img.shields.io/github/license/pardnchiu/PDQuickUI)<br>
[![](https://img.shields.io/badge/read-English%20Version-ffffff)](https://github.com/pardnchiu/PDQuickUI/blob/main/README.en.md)

`PDQuickUI` 是從 [PDRenderKit](https://github.com/pardnchiu/PDRenderKit) 中獨立出來的前端渲染框架，專注於強化前端框架功能。<br>
透過引入虛擬 DOM 概念重寫渲染邏輯，提升渲染效能，並實現更高效的數據監聽和自動更新。<br>

本專案移除了 `PDRenderKit` 中針對 `prototype` 的擴展，確保兼容性與效能，適合用於複雜的應用場景。<br>
提供 `module` 和非 `module` 版本，授權從 `PDRenderKit` 的 `GPL-3.0` 更改為 `MIT`。<br>

## 特點

- **清晰的架構**：UI 和資料邏輯分離，維護方便。
- **代碼簡潔**：減少重複代碼，提升可讀性。
- **自動渲染**：監控資料變動並自動更新，減少手動操作。
- **輕量化**：功能完整的同時，文件大小控制在 `20kb` 以內。

## 安裝方式

- **從 npm 安裝**
    ```bash
    npm i pdquickui
    ```
- **從 CDN 引入**
    - **引入 `PDQuickUI` 套件**
        ```html
        <script src="https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.js"></script>
        ```
    - **Module 版本**
        ```javascript
        import { QUI } from "https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.module.js";
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
| `:[attr]` | 設定元素屬性，例如 `ID`、`class`、圖像來源等。<br>範例：`:id`、`:class`、`:src`、`:alt`、`:href`... |
| `@[event]` | 添加事件監聽器，當事件觸發時執行指定操作。<br>範例：`@click`、`@input`、`@mousedown`... |

</details>

<details>
<summary>屬性 <code>{{value}}</code></summary>

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


</details>

<details>
<summary>屬性 <code>:html</code></summary>

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
<summary>屬性 <code>:path</code></summary>

*確保測試時已禁用瀏覽器中的本地文件限制或使用實時服務器。*

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
<summary>屬性 <code>:for</code></summary>

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

</details>

<details>
<summary>多層 <code>:for</code> 嵌套</summary>

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
<summary>屬性 <code>:if</code>/<code>:else-if</code>/<code>:elif</code>/<code>:else</code></summary>

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
<summary>屬性 <code>:model</code></summary>

- index.html
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
<summary>屬性 <code>@[event]</code></summary>

- index.html
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
<summary>快速設置 CSS</summary>

`:padding`, `:margin`, `:border`, `:border-radius`, `:outline`, `:box-sahdow`, `:bg-image`, `:bg-attachment`, `:bg-blend-mode`, `:bg-clip`, `:bg-origin`, `:bg-position`, `:bg-position-x`, `:bg-position-y`, `:bg-repeat`, `:bg-size`, `:bg-color`, `:color`

</details>

<details>
<summary>可用函式</summary>

- `LENGTH()`:
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
- `CALC()`:
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
- `UPPER()` / `LOWER()`
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
- `DATE(num, format)`:
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
            }
        }
    });
</script>
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
- Result
    ```HTML
    <body id="app">
        hint 123
        <h1 style="background: red;">test 123</h1>
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
            before_mount: function () {
                // 停止渲染
                // retuen false 
            },
            mounted: function () {
                console.log("已掛載");
            },
            before_update: function () {
                // 停止更新
                // retuen false 
            },
            updated: function () {
                console.log("已更新");
            },
            before_destroy: function () {
                // 停止銷毀
                // retuen false 
            },
            destroyed: function () {
                console.log("已銷毀");
            }
        }
    });
</script>
```

</details>

<details>
<summary>可選設定</summary>

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
        <temp-svg :src="test.svg"></temp-svg>
        <temp-svg src="svg"></temp-svg>
        <img :lazyload="image">
        <img lazyload="test.jpg">
    </body>
    <script>
        const app = new QUI({
            id: "app",
            data: {
                svg: "test.svg",
                image: "test.jpg"
            },
            option: {
                lazyload: true, // 圖片延遲加載: true|false (預設: true)
                svg: true       // SVG 檔案轉換: true|false (預設: true)
            }
        });
    </script>
    ```
- result
    ```html
    <body id="app">
        <!-- 直接插入 SVG 檔案 -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="black" stroke-width="2" stroke-linecap="round">
            <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2" stroke-linecap="round">
        </svg>
        <!-- 會在元素進入畫面時讀取 -->
        <img src="test.jpg">
    </body>
    ```

</details>

## 開發者

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:dev@pardn.io) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## 授權條款

本專案依據 [MIT](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) 授權使用。

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

