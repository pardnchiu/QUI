# PDQuickUI (JavaScript Library)

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/size/pardnchiu/PDQuickUI/dist%2FPDQuickUI.js)<br>
[![](https://img.shields.io/github/v/release/pardnchiu/PDQuickUI)](https://github.com/pardnchiu/PDQuickUI) [![](https://img.shields.io/npm/v/pdquickui)](https://www.npmjs.com/package/pdquickui) ![](https://img.shields.io/github/license/pardnchiu/PDQuickUI)<br>
[![](https://img.shields.io/badge/read-English%20Version-ffffff)](https://github.com/pardnchiu/PDQuickUI/blob/main/README.md)

`PDQuickUI` is a front-end rendering framework derived from [PDRenderKit](https://github.com/pardnchiu/PDRenderKit), focusing on enhancing front-end framework features.<br>
By integrating a virtual DOM, it rewrites the rendering logic to improve rendering efficiency, enabling faster data observation and automatic updates.<br>

This project removes the `prototype` extensions from `PDRenderKit` to ensure compatibility and performance, making it suitable for complex applications.<br>
It provides both `module` and non-`module` versions and changes the license from `GPL-3.0` in `PDRenderKit` to `MIT`.

## Features

- **Clear Architecture**: Separates UI from data logic, making it easier to maintain.
- **Code Simplicity**: Reduces redundant code and enhances readability.
- **Automatic Rendering**: Monitors data changes and updates automatically, minimizing manual operations.
- **Lightweight**: Maintains full functionality within a file size of less than `20kb`.

## Installation

- **Install from npm**
    ```bash
    npm i pdquickui
    ```
- **Include from CDN**
    - **Directly include `PDQuickUI`**
        ```html
        <script src="https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.js"></script>
        ```
    - **Module Version**
        ```javascript
        import { QUI } from "https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.module.js";
        ```

## Features Overview
Automatic Rendering: Automatically reloads when data changes are detected.

<details>
<summary>Attributes Overview</summary>

| Attribute | Description |
| --- | --- |
| `{{value}}` | Inserts text into an HTML tag and updates automatically when data changes. |
| `:path` | Used with the `temp` tag to load an external HTML fragment into the current page. |
| `:html` | Replaces an element’s `innerHTML` with specified text. |
| `:for` | Supports formats like `item in items`, `(item, index) in items`, `(key, value) in object`. Iterates over data collections to generate corresponding HTML elements. |
| `:if`<br>`:else-if`<br>`:elif`<br>`:else` | Displays or hides elements based on specified conditions, enabling branching logic. |
| `:model` | Binds data to form elements (e.g., `input`), updating data automatically when input changes. |
| `:hide` | Hides elements based on specific conditions. |
| `:animation` | Specifies transition effects for elements, such as `fade-in` or `expand`, to enhance user experience. |
| `:mask` | Controls block loading animations, supporting `true|false|1|0`, to enhance dynamic visual effects during loading. |
| `:[attr]` | Sets element attributes, such as `ID`, `class`, image source, etc.<br>Examples: `:id`/`:class`/`:src`/`:alt`/`:href`... |
| `@[event]` | Adds event listeners that trigger specified actions upon activation.<br>Examples: `@click`/`@input`/`@mousedown`... |
| `:@[event]` | Sets event handlers for individual elements within loops, allowing different handlers for each element. |

</details>

<details>
<summary>Attribute <code>{{value}}</code></summary>

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
<summary>Attribute <code>:html</code></summary>

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
<summary>Attribute <code>:path</code></summary>

*Ensure to disable local file restrictions in your browser or use a live server when testing.*

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
        <!-- Directly insert content from PATH -->
        <h1>path heading</h1>
        <p>path content</p>
    </body>
    ```

</details>

<details>
<summary>Attribute <code>:for</code></summary>

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
<summary>Multi-layer <code>:for</code> Nesting</summary>

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
<summary>Attribute <code>:if</code>/<code>:else-if</code>/<code>:elif</code>/<code>:else</code></summary>

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
<summary>Attribute <code>:model</code></summary>

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
<summary>Attribute <code>@[event]</code></summary>

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
<summary>Quick CSS Setup</summary>

`:padding`, `:margin`, `:border`, `:border-radius`, `:outline`, `:box-shadow`, `:bg-image`, `:bg-attachment`, `:bg-blend-mode`, `:bg-clip`, `:bg-origin`, `:bg-position`, `:bg-position-x`, `:bg-position-y`, `:bg-repeat`, `:bg-size`, `:bg-color`, `:color`

</details>

<details>
<summary>Available Functions</summary>

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
<summary>Data Retrieval</summary>

```html
<body id="app">
    <input type="text" :model="test">
    <button @click="get">Test</button>
</body>
<script>
    const app = new QUI({
        id: "app",
        data: {
            // Value bound to input
            test: 123
        },
        event: {
            get: _ => {
                // Shows a notification with the value of test when clicked
                alert(app.data.test);
            }
        }
    });
</script>
```

</details>

<details>
<summary>Model Render</summary>

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
<summary>Lifecycle Hooks</summary>

```html
<body id="app"></body>
<script>
    const app = new QUI({
        id: "app",
        before_mount: function () {
            // Stops rendering
            // return false 
        },
        mounted: function () {
            console.log("Mounted");
        },
        before_update: function () {
            // Stops updating
            // return false 
        },
        updated: function () {
            console.log("Updated");
        },
    });
</script>
```

</details>

<details>
<summary>Optional Settings</summary>

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
                lazyload: true, // Image lazy loading: true|false (default: true)
                svg: true       // SVG conversion: true|false (default: true)
            }
        });
    </script>
    ```
- result
    ```html
    <body id="app">
        <!-- Directly insert SVG content -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="black" stroke-width="2" stroke-linecap="round">
            <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="2" stroke-linecap="round">
        </svg>
        <!-- Loads image when element enters viewport -->
        <img src="test.jpg">
    </body>
    ```

</details>

## Creator

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:dev@pardn.io) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## License

This project is licensed under the [MIT License](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE).

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

***

Translate by ChatGPT 4o.