<img src="./dist/logo.png" width=80>

# QuickUI

(Formerly known as PDQuickUI, renamed to QuickUI starting from version `0.6.0`)

![tag](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![size](https://img.shields.io/github/size/pardnchiu/QuickUI/dist%2FQuickUI.js)<br>
[![npm](https://img.shields.io/npm/v/@pardnchiu/quickui)](https://www.npmjs.com/package/@pardnchiu/quickui)
[![download](https://img.shields.io/npm/dm/@pardnchiu/quickui)](https://www.npmjs.com/package/@pardnchiu/quickui)
[![jsdeliver](https://img.shields.io/jsdelivr/npm/hm/@pardnchiu/quickui)](https://www.jsdelivr.com/package/npm/@pardnchiu/quickui)<br>
[![](https://img.shields.io/badge/查閱-中文版本-ffffff)](https://github.com/pardnchiu/QuickUI/blob/main/README.zh.md)

`QuickUI` is a front-end rendering framework derived from [PDRenderKit](https://github.com/pardnchiu/PDRenderKit), focusing on enhancing front-end framework features.<br>
By integrating a virtual DOM, it rewrites the rendering logic to improve rendering efficiency, enabling faster data observation and automatic updates.<br>

This project removes the `prototype` extensions from `PDRenderKit` to ensure compatibility and performance, making it suitable for complex applications.<br>
It provides both `module` and non-`module` versions.

## Features

- Efficient Virtual DOM
    - Precise diffing algorithm for efficient DOM updates
    - Smart attribute patching system that updates only changed values
    - Intelligent child node comparison for minimal DOM manipulation
- Reactive Data Handling
    - Deep data monitoring system for immediate state tracking
    - Automatic UI updates on data changes, no manual operation needed
    - Smart caching system to prevent unnecessary re-renders
    - Support for nested data structures with reactive handling
- Advanced Template Features
    - Built-in internationalization (i18n) support for easy localization
    - Dynamic template loading with asynchronous processing
    - Powerful expression system supporting calculations, dates, and text processing
    - Comprehensive directive system for flexible DOM manipulation
- Performance Optimizations
    - Lazy loading for images and SVG content to improve load times
    - Minimal file size with zero external dependencies
    - Smart event delegation and resource cleanup for optimized memory usage

## Installation

- **Install from npm**
    ```bash
    npm i @pardnchiu/quickui
    ```
- **Include from CDN**
    - **Directly include `QuickUI`**
        ```html
        <!-- Version 0.6.0 and above -->
        <script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.js"></script>

        <!-- Version 0.5.4 and below -->
        <script src="https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.js"></script>
        ```
    - **Module Version**
        ```javascript
        // Version 0.6.0 and above
        import { QUI } from "https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.esm.js";
        
        // Version 0.5.4 and below
        import { QUI } from "https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.module.js";
        ```

## Usage

- Initialize `QUI`
    ```Javascript
    const app = new QUI({
        id: "", // Specify rendering element
        data: {
            // Custom DATA
        },
        event: {
            // Custom EVENT
        },
        when: {
            before_render: function () {
                // Stop rendering
            },
            rendered: function () {
                // Rendered
            },
            before_update: function () {
                // Stop updating
            },
            updated: function () {
                // Updated
            },
            before_destroy: function () {
                // Stop destruction
            },
            destroyed: function () {
                // Destroyed
            }
        }
    });
    ```

## Overview

### Text & Content
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `{{value}}` | Dynamic text content | `<p>{{ userName }}</p>` displays user's name |
| `:html` | Raw HTML insertion | `<div :html="richContent"></div>` renders formatted content |

### Template Loading
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:path` | External template loading | `<temp :path="./templates/header.html"></temp>` loads header component |

### List & Iteration
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:for` | Array/Object iteration | `<li :for="item in items">{{ item.name }}</li>` renders list items |

### Conditional Rendering
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:if` | Conditional display | `<div :if="isLoggedIn">Welcome!</div>` |
| `:else-if`/`:elif` | Secondary conditions | `<div :elif="isPending">Loading...</div>` |
| `:else` | Fallback content | `<div :else>Please log in</div>` |

### Form Binding
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:model` | Two-way data binding | `<input :model="userInput">` syncs with data |

### Styling & Animation
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:animation` | Transition effects | `<div :animation="fade-in">Content</div>` |
| `:[css]` | Dynamic styling | `<div :background-color="bgColor">Styled content</div>` |

### Dynamic Attributes
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:[attr]` | Dynamic attributes | `<img :src="imageUrl" :alt="imageDesc">` |

### Event Handling
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `@[event]` | Event listeners | `<button @click="handleClick">Click me</button>` |

## License

Similar to MIT License but provides obfuscated code only:
- Same as MIT: Free to use, modify and redistribute, including commercial use 
- Main difference: Provides obfuscated code by default, source code available for purchase
- License terms: Must retain original copyright notice (same as MIT)

For detailed terms and conditions, please see the [Software Usage Agreement](https://github.com/pardnchiu/QuickUI/blob/main/LICENSE).


## Creator

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu)

***

©️ 2024 [邱敬幃 Pardn Chiu](https://pardn.io)
