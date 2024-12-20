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
            },
            set: _ => {
                let dom = document.createElement("button");
                // 按鈕點按事件設置為 get 函式
                dom.onclick = app.event.get;
                app.body.append(dom);
            }
        }
    });
</script>
```