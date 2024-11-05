## 預計 `1.*.*` 移除

- 所有的生命週期方法需要移動至 `when` 值中。確保代碼一致性和可維護性。
    - `lifecycle` 對象：任何使用 `lifecycle` 對象定義生命週期方法的方式將被去除。
    - 獨立定義的生命週期方法：所有在 `QUI` 對象中直接定義的生命週期方法（例如，`before_render` 等）都將不再被支持。
    從以下寫法：
    ```JavaScript
    const app = new QUI({
        lifecycle: {
            before_render: _ => {
                console.log("準備渲染")
            },
        },
        before_render: _ => {
            console.log("準備渲染")
        }
    });
    ```
    改為：
    ```JavaScript
    const app = new QUI({
        when: {
            before_render: _ => {
                console.log("準備渲染")
            },
        }
    });
    ```