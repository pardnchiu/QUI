## 模板渲染


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
            render: () => `
                "{{ hint }}",
                h1 {
                    style: "background: red;", 
                    children: [ 
                        "{{ title }}"
                    ]
                }`
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

- index.html
    ```HTML
    <body id="app"></body>
    <script>
        document.addEventListener("DOMContentLoaded", async _ => {
            const test = await new QUI({
                data: {
                    hint: "hint 123",
                    title: "test 123"
                },
                render: () => `
                    "{{ hint }}",
                    h1 {
                        style: "background: red;", 
                        children: [ 
                            "{{ title }}"
                        ]
                    }`
            }).fragment();
            document.getElementById("app").appendChild(test);
        });
    </script>
    ```
- result
    ```HTML
    <body id="app">
        hint 123
        <h1 style="background: red;">test 123</h1>
    </body>
    ```