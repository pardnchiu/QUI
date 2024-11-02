# PDQuickUI (JavaScript Library)

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/license/pardnchiu/PDQuickUI?color=44bb44) ![](https://img.shields.io/badge/creator-Pardn%20Chiu-4444bb)<br>
![](https://img.shields.io/github/v/release/pardnchiu/PDQuickUI?color=bbbb44) ![](https://img.shields.io/npm/v/pdquickui?color=44bbbb) ![](https://img.shields.io/github/size/pardnchiu/PDQuickUI/dist%2FPDQuickUI.js?color=bb44bb)<br>
[![](https://img.shields.io/badge/read-English%20Version-ffffff)](https://github.com/pardnchiu/PDQuickUI/blob/main/README.md)

`PDQuickUI` 是從  [PDRenderKit](https://github.com/pardnchiu/PDRenderKit) 中獨立出來的前端渲染框架。<br>
專注於前端框架功能的擴展。引入虛擬 DOM 概念進行重寫，提升了渲染的性能，以及更高效的數據監聽和自動更新。<br>
此專案也移除了 `PDRenderKit` 中針對 `prototype` 擴展，確保兼容性與性能，適合複雜的應用場景。<br>
提供 `module` 和非 `module` 版本，並將授權從 `PDRenderKit` 的 `GPL-3.0` 改為 `MIT`。

## 特點

- **清晰的結構**：UI 和資料邏輯分離，方便維護。
- **代碼簡潔性**：減少重複代碼，提高可讀性。
- **自動渲染**：監聽資料變更並自動更新，減少手動操作。
- **輕量化**：實現功能的同時檔案大小也保持在 `20kb` 以內。

## 使用方法

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
自動渲染：加載自動渲染並在檢測到資料變更後自動渲染。

<details>
<summary>參數概覽</summary>

| tag | description |
| --- | --- |
| {{value}} | 將文字插入到 HTML 標籤中，並根據資料變更更新值。 |
| :path | 將外部文件中的 HTML 片段加載到當前頁面。 |
| :html | 使用文字替換元素的 innerHTML。 |
| :for | 支持 item in items、(item, index) in items、(key, value) in object。<br>遍歷數據集合，為重複數據顯示生成相應的 HTML 元素。 |
| :if<br>:else-if<br>:elif<br>:else | 根據指定條件顯示或隱藏元素，為實現分支邏輯添加多種選項。 |
| :model | 將資料綁定到表單元素（如 input），當輸入更改時自動更新資料。 |
| :hide | 隱藏元素，根據特定條件顯示它們。 |
| :[attr] | 設定元素屬性，例如 ID、class、圖像來源等。<br>例如：:id/:class/:src/:alt/:href... |
| @[event] | 添加事件監聽器，當事件觸發時執行指定操作。<br>例如：@click/@input/@mousedown... |
| :@[event] | 為迴圈內的單個元素設置事件處理程序，允許為每個元素設置不同的事件處理。 |

</details>

<details>
<summary><code>{{value}}</code></summary>

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
<summary><code>:html</code></summary>

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
<summary><code>:path</code></summary>

*確保測試時已禁用瀏覽器中的本地文件限制或使用實時服務器。*

- test.html
    ```html
    <h1>path heading</h1>
    <p>path content</p>
    ```
- index.html
    ```html
    <body id="app">
        <section :path="./test.html"></section>
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
        <h1>path heading</h1>
        <p>path content</p>
    </body>
    ```

</details>

<details>
<summary><code>:for</code></summary>

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
<summary><code>:for</code>嵌套</summary>

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
<summary><code>:if</code>/<code>:else-if</code>/<code>:elif</code>/<code>:else</code></summary>

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
<summary><code>:model</code></summary>

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
<summary><code>@[event]</code></summary>

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
<summary><code>CSS 快速設置</code></summary>

`:padding`, `:margin`, `:border`, `:border-radius`, `:outline`, `:box-sahdow`, `:bg-image`, `:bg-attachment`, `:bg-blend-mode`, `:bg-clip`, `:bg-origin`, `:bg-position`, `:bg-position-x`, `:bg-position-y`, `:bg-repeat`, `:bg-size`, `:bg-color`, `:color`

</details>

<details>
<summary><code>可用函式</code></summary>

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
<summary><code>Listerner</code></summary>

```html
<body id="app"></body>
<script>
    const app = new QUI({
        id: "app",
        listener: {
            lazyload: true, // 圖片延遲加載
            svg: true       // SVG 檔案轉換
        }
    });
</script>
```

</details>

<details>
<summary><code>資料獲取</code></summary>

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
<summary><code>渲染狀態</code></summary>

```html
<body id="app"></body>
<script>
    const app = new QUI({
        id: "app",
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

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

