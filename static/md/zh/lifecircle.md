## 生命週期

```html
<body id="app"></body>
<script>
    const app = new QUI({
        id: "app",
        when: {
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
            before_destroy: function () {
                // 停止銷毀
                // retuen false 
            },
            destroyed: function () {
                console.log("已銷毀");
            }
        }
    });
</script>
```