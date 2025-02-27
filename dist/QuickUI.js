!function(){"use strict";const e=document,t=String,n=Number,i=Array,o=Object,r=Boolean,a=JSON,s=(URL,Date),l=Math,c=RegExp,d=Promise,u=Node,f=parseInt,h=isNaN,g=structuredClone,p=setTimeout,m=IntersectionObserver,y=/\{\{\s*(((CALC|LENGTH|UPPER|LOWER|DATE)\(\s*[\w\.\s\+\-\*\/\,\s\/\\:]+\s*\))|[\w\.]+)\s*\}\}/i,b=/\s+([\w\.]+)\s*$/i,k=/\s*[\!\>\<\=]+\=*\s*/,M=/([\w\.]+)\s*([\+\-\*\/\%])\s*([\d\.]+)/,w=/\.([\w_-]+)?/gi,C=/\#([\w_-]+)?/i,D=/^\w+(?=[\#\.]*)/i,A=":path",N=":for",I=":if",T=":else-if",E=":elif",x=":else",v="addEventListener",j="animation",L="appendChild",O="attributes",P="body",z="children",S="class",R="classList",Y="cloneNode",Z="createElement",q="createTextNode",H="data",B="effect",U="ELEMENT_NODE",V="error",_="event",$="from",W="getAttribute",G="head",X="hide",Q="html",F="id",J="index",K="indexOf",ee="innerHTML",te="isArray",ne="join",ie="keys",oe="lazyload",re="length",ae="toLowerCase",se="match",le="next",ce="nodeType",de="now",ue="observe",fe="parentElement",he="parentNode",ge="parse",pe="props",me="push",ye="querySelectorAll",be="remove",ke="removeAttribute",Me="render",we="replace",Ce="script",De="setAttribute",Ae="shift",Ne="slice",Ie="splice",Te="split",Ee="src",xe="startsWith",ve="stringify",je="style",Le="tag",Oe="tagName",Pe="temp",ze="test",Se="TEXT_NODE",Re="textContent",Ye="toString",Ze="toUpperCase",qe="trim",He="type",Be="unobserve",Ue="value",Ve="vdom",_e={[I]:null,[T]:null,[E]:null,[x]:null},$e={":id":"id",":src":Ee,":alt":"alt",":href":"href",tagHtml:"innerHTML"},We={":margin":"margin",":padding":"padding",":border":"border",":border-radius":"borderRadius",":outline":"outline",":box-sahdow":"boxShadow",":background-image":"backgroundImage",":background-attachment":"backgroundAttachment",":background-blend-mode":"backgroundBlendMode",":background-clip":"backgroundClip",":background-origin":"backgroundOrigin",":background-position":"backgroundPosition",":background-position-x":"backgroundPositionX",":background-position-y":"backgroundPositionY",":background-repeat":"backgroundRepeat",":background-size":"backgroundSize",":background-color":"backgroundColor",":color":"color",":bg-image":"backgroundImage",":bg-attachment":"backgroundAttachment",":bg-blend-mode":"backgroundBlendMode",":bg-clip":"backgroundClip",":bg-origin":"backgroundOrigin",":bg-position":"backgroundPosition",":bg-position-x":"backgroundPositionX",":bg-position-y":"backgroundPositionY",":bg-repeat":"backgroundRepeat",":bg-size":"backgroundSize",":bg-color":"backgroundColor",":borderRadius":"borderRadius",":boxSahdow":"boxShadow",":backgroundImage":"backgroundImage",":backgroundAttachment":"backgroundAttachment",":backgroundBlendMode":"backgroundBlendMode",":backgroundClip":"backgroundClip",":backgroundOrigin":"backgroundOrigin",":backgroundPosition":"backgroundPosition",":backgroundPositionX":"backgroundPositionX",":backgroundPositionY":"backgroundPositionY",":backgroundRepeat":"backgroundRepeat",":backgroundSize":"backgroundSize",":backgroundColor":"backgroundColor"},Ge="beforeRender",Xe="beforeUpdate",Qe="beforeDestroy",Fe="rendered",Je="updated",Ke="destroyed",et="before_render",tt="before_update",nt="before_destroy",it={create:"CREATE",append:"APPEND",replace:"REPLACE",text:"TEXT",prop:"PROP",remove:"REMOVE"},ot={domId:"ID: 未提供。",dom:"元素: 不存在。",vdomModel:"虛擬 DOM: 未初始化。",vdomTemp:"虛擬 DOM: 未創建。"};e[G][L](lt("style",'\n*[\\:effect="fade-in"],\n*[effect="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:effect="fade-in"].show,\n*[effect="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:effect="expand"],\n*[effect="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:effect="expand"].show,\n*[effect="expand"].show {\n    opacity: 1;\n}\n\n*[\\:animation="fade-in"],\n*[animation="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:animation="fade-in"].show,\n*[animation="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:animation="expand"],\n*[animation="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:animation="expand"].show,\n*[animation="expand"].show {\n    opacity: 1;\n}\n\n*[\\:mask="1=true"],\n*[mask="true"],\n*[\\:mask="1"],\n*[mask="1"] {\n    position: relative;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"]::after,\n*[mask="1"]::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(to right, #e0e0e0 25%, #f0f0f0, #e0e0e0 75%);\n    /* 使用灰色漸層 */\n    background-size: 200% 100%;\n    /* 背景尺寸兩倍寬度 */\n    animation: loading-animation 1.5s infinite alternate;\n    /* 來回移動動畫 */\n    z-index: 10;\n    transition: 0.3s;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"].show::after,\n*[mask="1"].show::after {\n    opacity: 0;\n}\n\n@keyframes loading-animation {\n    0% {\n        background-position: -100% 0;\n    }\n\n    100% {\n        background-position: 100% 0;\n    }\n}\n\nimg[lazyload]:not([lazyload=""]):[effect="circle"] {\n    animation: spin 2s ease-in-out infinite;\n    width: 1.25rem !important;\n    height: 1.25rem !important;\n}\n\nimg[lazyload]:not([lazyload=""]):not([effect="circle"]) {\n    min-width: 1.25rem !important;\n    min-height: 1.25rem !important;\n    border-radius: 0.625rem !important;\n    background: linear-gradient(90deg, #e0e0e0 15%, #f0f0f0, #e0e0e0 85%);\n    background-size: 200% 100%;\n    animation: shimmer 1.5s infinite;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes shimmer {\n    0% {\n        background-position: 200% 0;\n    }\n    100% {\n        background-position: -200% 0;\n    }\n}'));const rt="\ndata:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI1OTVfMzA1OSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDEwQzE2IDExLjc3NyAxNS4yMjc1IDEzLjM3MzYgMTQgMTQuNDcyMkMxMi45Mzg1IDE1LjQyMjMgMTEuNTM2NyAxNiAxMCAxNlYyMEMxMS40MjIyIDIwIDEyLjc3NTEgMTkuNzAzMSAxNCAxOS4xNjc5QzE3LjUzMTggMTcuNjI0OCAyMCAxNC4xMDA2IDIwIDEwQzIwIDUuODk5MzYgMTcuNTMxOCAyLjM3NTIgMTQgMC44MzIwODdDMTIuNzc1MSAwLjI5Njg5NSAxMS40MjIyIDAgMTAgMFY0QzExLjUzNjcgNCAxMi45Mzg1IDQuNTc3NzEgMTQgNS41Mjc3OUMxNS4yMjc1IDYuNjI2NDMgMTYgOC4yMjMgMTYgMTBaIiBmaWxsPSIjMzQ5OERCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCAxMEM0IDExLjc3NyA0Ljc3MjUgMTMuMzczNiA2IDE0LjQ3MjJDNy4wNjE1MSAxNS40MjIzIDguNDYzMjkgMTYgMTAgMTZWMjBDOC41Nzc3OSAyMCA3LjIyNDkyIDE5LjcwMzEgNiAxOS4xNjc5QzIuNDY4MTkgMTcuNjI0OCAwIDE0LjEwMDYgMCAxMEMwIDUuODk5MzYgMi40NjgxOSAyLjM3NTIgNiAwLjgzMjA4N0M3LjIyNDkyIDAuMjk2ODk1IDguNTc3NzkgMCAxMCAwVjRDOC40NjMyOSA0IDcuMDYxNTEgNC41Nzc3MSA2IDUuNTI3NzlDNC43NzI1IDYuNjI2NDMgNCA4LjIyMyA0IDEwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI1OTVfMzA1OSI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\n";function at(e,t,i){return e=n(e),i=n(i),h(e)||h(i)?void 0:"+"===t?e+i:"-"===t?e-i:"*"===t?e*i:"/"===t?e/i:"%"===t?e%i:e}async function st(e,t=!1){try{await fetch(e,{method:"HEAD",mode:"cors"});return await async function(e,t){return new Promise((async(n,i)=>{try{const o=await fetch(e);if(o.ok){const e=o.headers.get("Content-Type");if(e&&e.startsWith("image")){if("image/svg+xml"==e&&!t)return void n(o);const i=await o.blob(),r=new Image,a=URL.createObjectURL(i);r.src=a,r.crossOrigin="anonymous",r.onload=e=>n({src:a,img:r}),r.onerror=e=>{throw URL.revokeObjectURL(a),e}}else n(o)}else i(new Error("HTTP error"))}catch(e){i(e)}}))}(e,t)}catch(e){throw e}}function lt(n="",o,r){const a=((n[se](D)||[])[0]||"")[qe](),s=((n[se](C)||[])[1]||"")[qe](),l=(w[ze](n)&&n[se](w)||[]).map((e=>e[we](/^\./,"")));if(a[re]<1)return;let c,d,u,f=!1;"temp"===n?(f=!0,c=e.createDocumentFragment()):c=e[Z](a),s[re]&&(c[F]=s);for(let e of l)c[R].add(e);if(null==o&&null!=r&&([o,r]=[r,null]),null!=o&&null!=r)[d,u]=[o,r];else if(null==r)"string"==typeof o||"number"==typeof o||i[te](o)?u=o:d=o;else if(null==o)return c;if("object"==typeof d&&null!=d)for(const e in d){if(!d.hasOwnProperty(e))continue;const t=d[e];-1!=["value","innerText",ee,"textContent","contentEditable"][K](e)?c[e]=t:-1!=["color","backgroundColor","width","height","display","float"][K](e)?c[je][e]=t:null!=t&&c[De](e,t)}if(null!=u){const n="string"==typeof u,o="number"==typeof u,r=i[te](u);if(n||o){const t=u;"img"===a||"source"===a?c[Ee]=t:f?c[L](e[q](u)):c[ee]=t}else if(r)for(let n of u){const i=n instanceof Element;"string"==typeof n||"number"==typeof n?c[L](e[q](t(n))):i&&c[L](n)}}return c}function ct(e,t,n){return new Proxy(e,{get(e,i,o){const r=Reflect.get(e,i,o),a=t?`${t}.${i[Ye]()}`:i[Ye]();return"object"==typeof r&&null!==r?ct(r,a,n):r},set(e,i,o,r){const a=e[i],s=Reflect.set(e,i,o,r),l=t?`${t}.${i[Ye]()}`:i[Ye]();return a!==o&&n(l,o,a),s}})}function dt(e,n="yyyy/MM/DD (ddd) HH:mm:ss"){const i=new Date(1e3*e),o=t(i.getFullYear()),r=t(i.getMonth()+1),a=t(i.getDate()),s=t(i.getDay()),l=t(i.getHours()),c=t(i.getMinutes()),d=t(i.getSeconds()),u=t(i.getMilliseconds());let h={YYYY:o,yyyy:o,YY:o[Ne](-2),yy:o[Ne](-2),Y:o[Ne](-2),y:o[Ne](-2),M:r,MM:("0"+r)[Ne](-2),D:a,DD:("0"+a)[Ne](-2),d:s,dd:("0"+s)[Ne](-2),H:l,HH:("0"+l)[Ne](-2),h:t(f(l)%12||12),hh:("0"+(f(l)%12||12))[Ne](-2),m:c,mm:("0"+c)[Ne](-2),s:d,ss:("0"+d)[Ne](-2),SSS:("00"+u)[Ne](-3),a:f(l)>=12?"pm":"am",A:f(l)>=12?"PM":"AM"};const g=/zh/.test(navigator.language||"")?["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return h.ddd=g[f(s)][Ne](0,3),h.dddd=g[f(s)],n.replace(/YYYY|YY|Y|yyyy|yy|y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|a|A|ddd|dddd/g,(e=>h[e]))}let ut,ft,ht=new Map;function gt(e){return mt(pt(e[qe]()))}function pt(e){const t=[];let n=0;for(;n<e[re];){let i=yt(e,n),o=bt(e,n);const r=null==i||i&&i?.tag.length<1;if(null==o&&r)break;if(null!=o&&(o[Ue]||"")[qe]()[re]>0&&r)t[me](o[Ue]),n=o[le];else if(null!=i){n=i[le];let o={[Le]:i[Le],[F]:i[F],[S]:i[S],[O]:{}};if(!i.config){t[me](o);continue}const r=kt(e,n);o[O]=r[Ue];const a=Mt(e,n);a[Ue].length>0&&(o[z]=a[Ue]),n=a[le],t[me](o)}}return t}function mt(t){const n=lt(Pe);if(!i[te](t))return n;for(let i of t){if(null==t)continue;const o=i[Le]+(null==i[F]?"":"#"+i[F])+(null==i[S]?"":"."+i[S][we](/\s/g,".")),r="string"==typeof i?e[q](i):lt(o,i[O]||{});if(null!=r)if("string"!=typeof i)r[L](mt(i[z])),n[L](r);else{let t=e[Z]("section");t.innerHTML=i;for(let i of[...t.childNodes])if(i.nodeType===Node.TEXT_NODE){const t=String(i.nodeValue).trim(),o=e[q](t);n[L](o)}else n[L](i)}}return n}function yt(e,t){let n=t,i="",o="",r="",a=[];for(;/[\s\,]/[ze](e[n])&&n<e.length;)n++;if(null==e[n])return{[Le]:i[qe](),[F]:o||null,[S]:r||null,[le]:n,config:!1};for(;/[a-zA-Z1-6]/[ze](e[n]);)i+=e[n],n++;if("#"===e[n])for(n++;/[a-zA-Z0-9_-]/[ze](e[n]);)o+=e[n],n++;for(;"."===e[n];){n++;let t="";for(;/[a-zA-Z0-9_-]/[ze](e[n]);)t+=e[n],n++;a[me](t)}for(r=a[ne](" ");/\s/[ze](e[n]);)n++;return/[\(\[]/[ze](e[n])?{[Le]:i[qe](),[F]:o||null,[S]:r||null,[le]:n,config:!0}:{[Le]:i[qe](),[F]:o||null,[S]:r||null,[le]:n,config:!1}}function bt(e,t){let n=t,i="";for(;/\s/[ze](e[n]);)n++;if(null==e[n])return{[Ue]:i,[le]:n};for(;'"'!==e[n];)n++;for(n++;'"'!==e[n];)i+=e[n],n++;return n++,{[Ue]:i,[le]:n}}function kt(e,t){let n=t,i={},o="";if(!/\s*\(/[ze](e[n]))return{};for(;/[\s\()]/[ze](e[n]);)n++;for(;!/\)/[ze](e[n]);)if(/\s/[ze](e[n]))n++;else{if(/[A-Za-z0-9\-\_]/[ze](e[n]))o+=e[n];else if('"'===e[n]){const t=bt(e,n);i[o]=t.value,n=t[le]-1,o=""}n++}return{[Ue]:i,[le]:n}}function Mt(e,t){let n=t,i=[],o=0,r="";for(;/\s/[ze](e[n]);)n++;for(;"["!==e[n];)n++;for(n++;n<e[re];){const t=e[n];if("["===t)o++,r+=t;else if("]"===t){if(0===o){r.trim()&&(i=pt(r));break}o--,r+=t}else r+=t;n++}return{[Ue]:i,[le]:n+1}}function wt(t,...n){const i=lt(Ce,`console.${t}.apply(void 0, ${a[ve](n)});`);e[P][L](i),i[be]()}class Ct{#e;#t;#n;#i;#o;#r;#a;#s;#l;constructor(e={}){this.#e=e[et]||void 0,this.#t=e[Fe]||void 0,this.#n=e[tt]||void 0,this.#i=e[Je]||void 0,this.#o=e[nt]||void 0,this.#r=e[Ke]||void 0}async#c(e){return new d(((t,n)=>{t(!1!==e())}))}#d(e){e(!1)}async render(e){this.#a=s.now(),null!=this.#e&&!1===await this.#c(this.#e)||(await e(),this.#s=s[de]()-this.#a,wt("log","渲染耗時:",this.#s/1e3),null!=this.#t&&this.#d(this.#t))}async update(e){clearTimeout(this.#l),this.#l=p((async()=>{this.#a=s.now(),null!=this.#n&&!1===await this.#c(this.#n)||(await e(),this.#s=s[de]()-this.#a,wt("log","更新耗時:",this.#s/1e3),null!=this.#i&&this.#d(this.#i))}),300)}async destroy(e){this.#a=s.now(),null!=this.#o&&!1===await this.#c(this.#o)||(await e(),this.#s=s[de]()-this.#a,wt("log","銷毀耗時:",this.#s/1e3),null!=this.#r&&this.#d(this.#r))}}var Dt;window.QUI=class{body;data={};event={};isScheduled=!1;lazyloadObserver;#u=!0;#f=null;#h=null;#g=null;#p=null;constructor(n){const o=t(n[F]||"")[qe]();let r;if(o[re]<1){if("function"!=typeof n[Me])return void wt(V,ot.domId);{const t=n[Me]();r=e.createElement("section"),r.id=function(e){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=t[re];let o="";do{o=i[$]({length:e},(e=>t.charAt(l.floor(l.random()*n))))[ne]("")}while(ht.has(o));return ht.set(o,1),o}(64),r.className="QUIFragment",r[L](gt(t))}}else r=e.getElementById(o);if(null!=r){if(this.#f=r[Y](!0),this.#g=new At(this.#f),"function"==typeof n[Me]){const e=n[Me](),t=lt(Pe),i=r[Y](!0);t[L](gt(e)),i.replaceChildren(t),this.#f=i}this.#m(n).then((e=>{this[P]=r,this[H]=n.once?e:ct(e,"",(e=>{this.#p?.update((()=>this.#y()))})),this[_]=n[_]||{};const t=n.option||{};!1!==t.svg&&function(){ft=new m((async(e,t)=>{for(let t of e){const e=t.target;if(!t.isIntersecting)continue;const n=(e[W](Ee)||"")[qe]();if(n[re]<1)return;await st(n).then((t=>{ft[Be](e),t.text().then((t=>{const n=lt("div");n[ee]=t;const i=n[z][0];i.id=e.id,e.classList.forEach((e=>i.classList.add(e))),i.onclick=e.onclick,null!=e[fe]&&e[fe].insertBefore(i,e),e.remove()})).catch((t=>{e[ee]="☒"}))})).catch((t=>{e[ee]="☒"}))}}));for(let e of[][Ne].call(document.body.querySelectorAll("temp-svg[src]:not([src=''])")||[]))ft[ue](e)}(),!1!==t[oe]&&(!function(){ut=new m(((e,t)=>{const n=[];for(let t of e){const e=t.target;if(!t.isIntersecting)continue;ut[Be](e);const i=(e[W](oe)||"")[qe]();i[re]>0&&n.push({dom:e,src:i})}Promise.all(n.map((({dom:e,src:t})=>st(t,!0).then((t=>{e[Ee]=t[Ee]})).catch((n=>{n instanceof TypeError&&n.message.includes("Load failed")||n instanceof Event?e[Ee]=t:e[Ee]="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg"})).finally((()=>{e[ke](oe),e[ke](B)})))))}));const e=document.body.querySelectorAll("img[lazyload]:not([lazyload=''])");for(let t of i[$](e))ut[ue](t)}(),this.lazyloadObserver=ut);const o=n.when||n.lifecycle||n||{};this.#p=new Ct({before_render:o[et]||o[Ge],rendered:o[Fe],before_update:o[tt]||o[Xe],updated:o[Je],before_destroy:o[nt]||o[Qe],destroyed:o[Ke]}),this.#p.render((async()=>{await this.#y(),this.#u=!1}))}))}else wt(V,ot.dom)}async fragment(){await this.#y();let e=new DocumentFragment;for(let t of[...this[P].childNodes])if(t.nodeType===Node.TEXT_NODE){const n=String(t.nodeValue).trim();e.appendChild(document.createTextNode(n))}else e.appendChild(t.cloneNode(!0));return e}lang(e){o.hasOwn(this.data.quickui_i18n,e)&&(this.data.quickui_i18nLang=e)}async#m(e={}){let t=e[H]||{};if("object"==typeof e.i18n&&null!=e.i18n){const n=e.i18n;t.quickui_i18n={};for(const[e,i]of Object.entries(n))if("string"==typeof i&&i.trim().length>0)try{const n=await fetch(i.trim());if(!n.ok)throw new Error(`Failed to load i18n file for ${e}`);const o=await n.json();t.quickui_i18n[e]=o}catch(n){t.quickui_i18n[e]={}}else t.quickui_i18n[e]=i}else t.quickui_i18n={};return t.quickui_i18nLang=e.i18nLang||"zh",t}#y(){return new d((async e=>{null!=this.#f?(this.#h=new At(this.#f),null!=this.#h?(this.#h[H]=a[ge](a[ve](this[H])),await this.#h.updateChildren(),this.isScheduled=!0,requestAnimationFrame((()=>{this.#b(),this.isScheduled=!1,e(!0)}))):wt(V,ot.vdomTemp)):wt(V,ot.vdomModel)}))}#b(){const e=this[P];if(null==e)return void wt("error",ot.dom);const t=this.#h?.getPatches(this.#g);i[te](t)&&this.#k(e,t);for(let t of e[ye]("*[\\:if]"))t[ke](":if");e[R].add("show"),"expand"!=e[W](B)&&"expand"!=e[W](j)||(e[je].minHeight=e.scrollHeight+"px"),p((()=>{e[ke](B),e[ke](j),e[ke]("mask"),e[R][be]("fade-in"),e[R][be]("loading-block"),e[R][be]("expand"),e[R][be]("show")}),300),this.#g=this.#h,this.#h=null}#k(e,t){if(null!=e&&i[te](t)){this.#M(e,t);for(const n of t){const{index:t}=n,i=a[ge](a[ve](t||[]));let o;n.type===it.append&&(o=i?.pop());const r=i?this.#w(e,i):e;r&&(n.type===it.create&&Ve in n?this.#C(r,n):n.type===it.replace&&Ve in n&&null!=r[he]?this.#D(r,n):n.type===it.append&&Ve in n&&null!=o?this.#A(r,n,o):n.type===it.prop&&"key"in n&&Ue in n&&r instanceof Element?this.#N(r,n.key,n.value,n[Ve]):n.type===it.text&&Ue in n&&r.nodeType===u[Se]&&(r[Re]=n.value||""))}}}#M(e,t){const n=t.filter((e=>e.type===it.remove)).sort(((e,t)=>{const n=(t.index.length||0)-(e.index.length||0);if(0!==n)return n;for(let n=0;n<(e.index.length||0);n++)if((e.index[n]||0)!==(t.index[n]||0))return(t.index[n]||0)-(e.index[n]||0);return 0}));for(const t of n){const n=this.#w(e,t.index);null!=n&&null!=n[he]&&n[he].removeChild(n)}}#C(t,n){if(n.type!==it.create||!(Ve in n))return;const i="string"==typeof n[Ve]?e[q](n[Ve]):this.#I(n[Ve]);null!=t[fe]&&t[fe][L](i)}#D(t,n){if(n.type!==it.replace||!(Ve in n)||null==t[he])return;const i="string"==typeof n[Ve]?e[q](n[Ve]):this.#I(n[Ve]);if(t[he].replaceChild(i,t),!(i instanceof Text||"string"==typeof n[Ve])){for(const e in n[Ve][pe])this.#N(i,e,n[Ve][pe][e]||"",n[Ve]);this.#T(n[Ve],i)}}#A(t,n,i){if(n.type!==it.append||!(Ve in n)||null==i)return;const r="string"==typeof n[Ve]?e[q](n[Ve]):this.#I(n[Ve]);if(i+1>t[z][re]?t[L](r):t.insertBefore(r,t[z][i+1]),"string"!=typeof n[Ve]){for(const[e,r]of o.entries(n[Ve][pe]))this.#N(t.childNodes[i],e,r||"",n[Ve]);this.#T(n[Ve],t[z][i])}}#N(e,t,n,i){let o=n;if(n&&"string"==typeof n&&n.startsWith("i18n.")){const e=n.replace(/^i18n\./,""),t=this[H].quickui_i18nLang,i=this[H].quickui_i18n[t];i&&i[e]&&(o=i[e])}null==o?e[ke](t):t[xe](":@")||t[xe]("@")||t[xe]("qe-")?this.#E(e,t,o,i):t[ae]()[xe](":model")?this.#x(e,t,o):t[xe](":")||t[xe]("q-")?this.#v(e,t,o,i):null!=e&&e[De](t,o),e&&e[W]&&e[W](N)&&e[ke](N)}#E(e,t,n,i){(()=>{if(!1===t[xe]("@")&&!1===t[xe]("qe-"))return;const o=t[we](/^(\@|qe-)/,"on"),r=this.#j(n,i[H])||n,a=this[_][r];e[o]=a})(),e[ke](t)}#x(t,n,i){if(null==i||!/(input|select|textarea)/i[ze](t[Oe]))return;const o=t instanceof HTMLInputElement,r=t instanceof HTMLTextAreaElement,a=t instanceof HTMLSelectElement,s=t[W]("type");!o||"checkbox"!==s&&"radio"!==s?a?t[v]("change",(e=>{this[H][i]=e.target[Ue]||""})):(o||r)&&(t[v]("keyup",(e=>{this[H][i]=e.target[Ue]||""})),t[v]("change",(e=>{this[H][i]=e.target[Ue]||""}))):t[v]("change",(t=>{this[H][i]=[...e.body.querySelectorAll("input[name='"+t.target.name+"'][type='"+s+"']:checked")].map((e=>e.value)).join(",")})),t[ke](n)}#v(e,t,n,i){const o=t[ae](),a=null==this.#j(n,i[H])?n:this.#j(n,i[H]),s=($e[o]||"")[qe](),l=(We[o]||"")[qe](),c=t[Ye]()[we](/^\:/g,"")[we](/-+/g," ")[we](/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e[ae]():e[Ze]()}))[we](/\s+/g,"");if((o===":"+oe||o==="q-"+oe)&&n[qe]()[re]>0)if(this.#u){const t=e[W](":"+B)||e[W]("q-"+B)||"";e.src="circle"===t?rt:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px'/%3E",ut[ue](e)}else{if(null==e[W](oe))return void(e.src=a);e.src=rt,ut[ue](e)}if((o===":"+Q||o==="q-"+Q)&&n[qe]()[re]>0)e[ee]=a||n;else if(o===N||o in _e);else if(":src"===o&&"temp-svg"===i.tag[ae]()&&n[qe]()[re]>0){const t=this.#j(n,i[H])||n;e[De](Ee,t),ft[ue](e)}else o in $e?e[s]=a:o in We?e[je][l]=a:c in e[je]&&(t!==":"+j&&t!=="q-"+j||!/(fade-in|expand)/[ze](n))?e[je][c]=a:o!==":"+X&&o!=="q-"+X||!r(h(+a)?a:+a)?e[De](`${t[we](/^[\:q]\-?/,"")}`,a):e[je].display="none";e[ke](t)}#T(e,t){if("string"!=typeof e)for(const n in e.children.filter((e=>"string"!=typeof e))){if(null==t)continue;const i=e.children[+n],r=t.children[+n];if("string"!=typeof i){for(const[e,t]of o.entries(i[pe]))this.#N(r,e,t||"",i);this.#T(i,r)}}}#j(e,n){if(e[qe]()[re]<1)return;const r=y[ze](e);let a="",s="";r&&(a=e[Te](y)[0]||"",s=e[Te](y)[4]||"",e=e[se](y)[1]);const l=/^LENGTH\(.+\)/[ze](e);l&&(e=e[we](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[ze](e);let d="",u=0;if(c){const t=(e=e[we](/^CALC\(|\)$/g,""))[se](M);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[ze](e),h=/^LOWER\(.*\)$/[ze](e);(f||h)&&(e=e[we](/^(UPPER|LOWER)\(|\)$/g,""));const g=/^DATE\([\w\,\-\s\:]*\)$/[ze](e);let p="";if(g){const t=(e=e[we](/^DATE\(|\)$/g,""))[se](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[Te](/\./),b=n||this[H],k=m[0],w=b[k];for(m[Ae]();m[re]>0;)b=w||{},k=m[0],w=b[k],m[Ae]();if(null==w)for(m=e[Te](/\./),b=this[H],k=m[0],w=b[k],m[Ae]();m[re]>0;)b=w||{},k=m[0],w=b[k],m[Ae]();let C="";if(null!=w&&w instanceof Object&&!i[te](w)?C=t(o[ie](w)[re]):null!=w&&(C=w[re]),r){if(l)return a+C+s;if(c&&(w=at(w,d,u),null==w))return;return a+w+s}if(l)return C;if(c){if(w=at(w,d,u),null==w)return}else{if(f)return w[Ze]();if(h)return w[ae]();if(g)return dt(+w,p)}return w}#w(e,t){let n=e,o=i.from(n.childNodes).filter((e=>e.nodeType===u[U]||e.nodeType===u[Se]&&""!==e[Re]?.trim()))||[];for(const e of t)n=o[e],null!=n&&(o=i.from(n.childNodes).filter((e=>e.nodeType===u[U]||e.nodeType===u[Se]&&""!==e[Re]?.trim()))||[]);return n}#I(t){const n=e.createElement(t.tag);if(t[pe])for(const[e,i]of o.entries(t[pe]))e[xe](":")||e[xe]("q-")||e[xe]("@")||e[xe]("qe-")||void 0!==i&&n[De](e,i);for(const i of t[z])"string"==typeof i?n[L](e[q](i)):n[L](this.#I(i));return n}};class At{tag="";props={};children=[];data=null;constructor(t){if(t[Oe][ae]()===Ce){let n=!1;for(const i of e[G][ye](Ce)||[])if(null!=t[Ee]&&i[Ee]===t[Ee]||null!=t[Re]&&i[Re]===t[Re]){n=!0;break}n||e[G][L](t),this[Le]=Ce}this[Le]=t[Oe][ae](),this[pe]=[...t.attributes].reduce(((e,t)=>(e[t.name]=t.value.trim(),e)),{}),this[z]=function(e){return i[$](e.childNodes).filter((e=>e[ce]===u[U]||e[ce]===u[Se]&&e[Re]&&e[Re][qe]()[re]>0))}(t).map((e=>e.nodeType===Node[U]?new Dt(e):(e[Re]||"")[qe]()))}async updateChildren(){this.#L(this),this.#O(this),await this.#P(this),this.#L(this),this.#O(this),this.#z(this)}getPatches(e){return this.#S(e,this)}#L(e){let t=0;if(!("string"==typeof e||e[z][re]<1)){for(;t<e[z][re];){const n=e[z][t];if("string"==typeof n||null==n){t++;continue}if(null==n[H]&&(n[H]=e[H]),!(N in n[pe])){t++;continue}const o=n[pe][N],r=(o[se](/^\(?\s*(\w+)/)||[])[1],s=(o[se](/\,\s*(\w+)/)||[])[1],l=(o[se](b)||[])[1];let c=this.#j(l,e[H]),d=[];if(delete n[pe][N],i[te](c)){c=a[ge](a[ve](c));for(const e in c){const t=a[ge](a[ve](c[+e]));let i=g(n);i[H]=a[ge](a[ve]({[r]:t,[l]:c})),null!=s&&(i[H][s]=+e),d.push(i)}e[z][Ie](t,1,...d),t+=d[re]-2}else if(null!=c&&"object"==typeof c){c=a[ge](a[ve](c));for(const e in c){const t=a[ge](a[ve](c[e]));let i=g(n);i[H]=a[ge](a[ve]({[r]:e,[s]:t,[l]:c})),d.push(i)}e[z][Ie](t,1,...d),t+=d[re]-2}else t++}for(let t of e[z])this.#L(t)}}#O(e){let i=0;if(!("string"==typeof e||e[z][re]<1)){for(;i<e[z][re];){const o=e[z][i];if("string"==typeof o){i++;continue}if(!(I in o[pe])){delete o[pe][T],delete o[pe][E],delete o[pe][x],i++;continue}let a=i+1,s=e[z][a],l=[i],c=!1;(()=>{if(null==s||"string"==typeof s)return void(c=!0);const t=s[pe]||{};for(c=null==(t[T]||t[E]||t[x]);!c;){if(l[me](a),a+=1,s=e[z][a],null==s||"string"==typeof s){c=!0;continue}const t=s[pe]||{};c=null==(t[T]||t[E]||t[x])}})();let d=!1,u=!1;(()=>{for(let o of l){const a=e[z][o];if(null==a||"string"==typeof a)return;const s=a[pe][I]||a[pe][T]||a[pe][E],c=null!=a[pe][x];if(c&&(u=!0),d)return;if(c)e[z][Ie](i,l.length,a);else if(null!=s){const o=s[Te](k)[0],c=s[Te](k)[1],u=((s[se](k)||[])[0]||"")[qe](),f=this.#j(o,a[H]);if(null==c&&u[re]<1?d=r(f):">"===u?d=(n(f)||0)>(n(c)||0):"<"===u?d=(n(f)||0)<(n(c)||0):">="===u||">=="===u?d=(n(f)||0)>=(n(c)||0):"<="===u||"<=="===u?d=(n(f)||0)<=(n(c)||0):"=="===u||"==="===u?d="null"==c?null==f:"true"==c?r(f):"false"==c?!r(f):"empty"==c?t(f||"")[re]<1:t(f||"")==t(c):"!="!==u&&"!=="!==u||(d="null"==c?null!=f:"true"==c?!r(f):"false"==c?r(f):"empty"==c?t(f||"")[re]>0:t(f||"")!=t(c)),d)return delete a[pe][I],void e[z][Ie](i,l.length,a)}}})(),d||u?d?i+=l.length-2:i++:e[z][Ie](i,l.length)}for(let t of e[z])this.#O(t)}}async#P(e){let t=0;if(!("string"==typeof e||e[z][re]<1)){for(;t<e[z][re];){const n=e[z][t];if("string"==typeof n){t++;continue}if(!(A in n[pe])||"temp"!=n.tag){t++;continue}const i=n[pe][A],o=this.#j(i,e[H])||i;delete n[pe][A],await fetch(o).then((async n=>{const i=lt("div",await n.text()).cloneNode(!0),o=new Dt(i);e[z][Ie](t,1,...o[z]),t+=o[z][re]-2})),t++}for(let t of e[z])await this.#P(t)}}translate(e){const t=this.data.quickui_i18nLang;if(!this.data.quickui_i18n[t])return e;const n=e.split(".");let i=this.data.quickui_i18n[t];for(const e of n)if(i=i[e],void 0===i)break;return void 0!==i?i:e}#z(e){let t=0;if(!("string"==typeof e||e[z][re]<1)){for(;t<e[z][re];){let n=e[z][t];if("string"==typeof n){for(let i of n[se](new c(y,"g"))||[]){const n=e[z][t]||"",o=i[se](y)||[];if(o[re]<1)continue;const r=o[1]||"";if(!("string"!=typeof n||r.length<1)&&r[xe]("i18n.")){const i=r[we](/^i18n\./,""),o=this.translate(i);e[z][t]=n[we](new c("{{\\s*?"+r[we](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),o)}}for(let i of n[se](new c(y,"g"))||[]){const n=e[z][t]||"",o=i[se](y)||[];if(o[re]<1)continue;const r=o[1]||"",a=this.#j(r,e[H]);"string"!=typeof n||r.length<1||null==a||(e[z][t]=n[we](new c("{{\\s*?"+r[we](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),a))}}else null!=n&&null==n[H]&&(n[H]=e[H]);t++}for(let t of e[z])this.#z(t)}}#j(e,n){if(e[qe]()[re]<1)return;const r=y[ze](e);let a="",s="";r&&(a=e[Te](y)[0]||"",s=e[Te](y)[4]||"",e=e[se](y)[1]);const l=/^LENGTH\(.+\)/[ze](e);l&&(e=e[we](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[ze](e);let d="",u=0;if(c){const t=(e=e[we](/^CALC\(|\)$/g,""))[se](M);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[ze](e),h=/^LOWER\(.*\)$/[ze](e);(f||h)&&(e=e[we](/^(UPPER|LOWER)\(|\)$/g,""));const g=/^DATE\([\w\,\-\s\:]*\)$/[ze](e);let p="";if(g){const t=(e=e[we](/^DATE\(|\)$/g,""))[se](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[Te](/\./),b=n||this[H],k=m[0],w=b[k];for(m[Ae]();m[re]>0;)b=w||{},k=m[0],w=b[k],m[Ae]();if(null==w)for(m=e[Te](/\./),b=this[H],k=m[0],w=b[k],m[Ae]();m[re]>0;)b=w||{},k=m[0],w=b[k],m[Ae]();let C="";if(null!=w&&w instanceof Object&&!i[te](w)?C=t(o[ie](w)[re]):null!=w&&(C=w[re]),r){if(l)return a+C+s;if(c&&(w=at(w,d,u),null==w))return;return a+w+s}if(l)return C;if(c){if(w=at(w,d,u),null==w)return}else{if(f)return w[Ze]();if(h)return w[ae]();if(g)return dt(+w,p)}return w}#S(e,t,n=[]){if(null==e&&t)return[{[He]:it.create,[J]:n,[Ve]:t}];if(e&&!t)return[{[He]:it.remove,[J]:n}];if(!e&&!t)return[];if(e.tag!==t.tag)return[{[He]:it[we],[J]:n,[Ve]:t}];const i=[];return i[me](...this.#R(e,t,n)),i[me](...this.#Y(e,t,n)),i}#R(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const i=[],r=e[pe]||{},a=o[ie](r)[re],s=t[pe]||{},l=o[ie](s)[re];if(l>0)for(let e in s){const o=s[e];i[me]({[He]:it.prop,[Ve]:t,key:e,value:o,[J]:n})}if(a>0){if(l<1)for(let e in r)i[me]({[He]:it.prop,[Ve]:t,key:e,[Ue]:null,[J]:n});for(let e in s)l>0&&!(e in s)&&i[me]({[He]:it.prop,[Ve]:t,key:e,[Ue]:null,[J]:n})}return i}#Y(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const o=[],r=i[te](e[z])?e[z]:[],a=i[te](t[z])?t[z]:[],s=l.max(r[re],a[re]);for(let e=0;e<s;e++){const i=r[e],s=a[e],l=n.concat(e);if("string"==typeof i&&"string"==typeof s){if(i===s)continue;o[me]({[He]:it.text,[Ve]:t,[Ue]:s,[J]:l})}else null==i?o[me]({[He]:it.append,[Ve]:s,[J]:l}):null==s?o[me]({[He]:it.remove,index:l}):o[me](...this.#S(i,s,l))}return o}}Dt=At}("undefined"==typeof window?window={}:window);