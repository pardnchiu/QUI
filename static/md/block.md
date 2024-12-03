## 插入區塊

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