import { viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/dist/PDMarkdownKit.module.js";

document.addEventListener("DOMContentLoaded", async _ => {
    let pre = "";

    await fetch('./README.md')
        .then(response => response.text())
        .then(data => {
            pre = data;
        })
        .catch(error => {
            console.error(error);
        });

    const app = new PD({
        id: "app",
        next: _ => {
            const dom = new viewer({
                id: "PDMDViewer",
                emptyContent: pre,
                sync: {
                    delay: 50
                }
            });

            document.body._child([
                dom.body._style({
                    maxWidth: 1024 + "px"
                })._scroll(e => {
                    const _this = e.target;
                    "nav".$.$$_class(_this.scrollTop > 0, "min");
                })
            ]);

            dom.init();
        }
    });
});
