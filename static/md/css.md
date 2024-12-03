## CSS設置

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