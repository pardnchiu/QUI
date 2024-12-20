## 從 npm 安裝
```bash
npm i @pardnchiu/quickui
```

## 從 CDN 引入

### 引入 `QuickUI` 套件

```html
<!-- Version 0.6.0 and above -->
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.js"></script>

<!-- Version 0.5.4 and below -->
<script src="https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.js"></script>
```

### Module 版本

```javascript
// Version 0.6.0 and above
import { QUI } from "https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.esm.js";

// Version 0.5.4 and below
import { QUI } from "https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.module.js";
```

## 使用方法

### 初始化 `QUI`

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
        before_mount: function () {
            // 停止渲染
        },
        mounted: function () {
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
