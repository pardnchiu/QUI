## Model Rendering

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