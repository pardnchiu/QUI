!function(){"use strict";const e=document,t=String,n=Number,i=Array,o=Object,r=Boolean,a=JSON,s=URL,l=Date,c=Math,d=RegExp,u=Promise,f=Node,g=parseInt,h=isNaN,p=structuredClone,m=setTimeout,y=IntersectionObserver,b=/\{\{\s*(((CALC|LENGTH|UPPER|LOWER|DATE)\(\s*[\w\.\s\+\-\*\/\,\s\/\\:]+\s*\))|[\w\.]+)\s*\}\}/i,k=/\s+([\w\.]+)\s*$/i,M=/\s*[\!\>\<\=]+\=*\s*/,w=/([\w\.]+)\s*([\+\-\*\/\%])\s*([\d\.]+)/,C=/\.([\w_-]+)?/gi,D=/\#([\w_-]+)?/i,A=/^\w+(?=[\#\.]*)/i,I=":path",N=":for",x=":if",T=":else-if",v=":elif",E=":else",j="add",P="addEventListener",L="animation",O="anonymous",z="appendChild",S="attributes",R="body",Y="children",Z="class",B="classList",$="cloneNode",H="createDocumentFragment",_="createElement",U="createTextNode",V="crossOrigin",W="data",G="effect",q="ELEMENT_NODE",Q="error",X="event",F="from",J="get",K="getAttribute",ee="head",te="headers",ne="id",ie="includes",oe="index",re="indexOf",ae="innerHTML",se="isArray",le="join",ce="key",de="keys",ue="lazyload",fe="length",ge="toLowerCase",he="map",pe="match",me="next",ye="nodeType",be="now",ke="observe",Me="parentElement",we="parentNode",Ce="parse",De="props",Ae="push",Ie="querySelectorAll",Ne="remove",xe="removeAttribute",Te="render",ve="replace",Ee="script",je="setAttribute",Pe="shift",Le="slice",Oe="splice",ze="split",Se="src",Re="startsWith",Ye="stringify",Ze="style",Be="tag",$e="tagName",He="temp",_e="test",Ue="TEXT_NODE",Ve="textContent",We="toString",Ge="toUpperCase",qe="trim",Qe="type",Xe="unobserve",Fe="value",Je="vdom",Ke={[x]:null,[T]:null,[v]:null,[E]:null},et={":id":"id",":src":Se,":alt":"alt",":href":"href",tagHtml:"innerHTML"},tt={":margin":"margin",":padding":"padding",":border":"border",":border-radius":"borderRadius",":outline":"outline",":box-sahdow":"boxShadow",":background-image":"backgroundImage",":background-attachment":"backgroundAttachment",":background-blend-mode":"backgroundBlendMode",":background-clip":"backgroundClip",":background-origin":"backgroundOrigin",":background-position":"backgroundPosition",":background-position-x":"backgroundPositionX",":background-position-y":"backgroundPositionY",":background-repeat":"backgroundRepeat",":background-size":"backgroundSize",":background-color":"backgroundColor",":color":"color",":bg-image":"backgroundImage",":bg-attachment":"backgroundAttachment",":bg-blend-mode":"backgroundBlendMode",":bg-clip":"backgroundClip",":bg-origin":"backgroundOrigin",":bg-position":"backgroundPosition",":bg-position-x":"backgroundPositionX",":bg-position-y":"backgroundPositionY",":bg-repeat":"backgroundRepeat",":bg-size":"backgroundSize",":bg-color":"backgroundColor",":borderRadius":"borderRadius",":boxSahdow":"boxShadow",":backgroundImage":"backgroundImage",":backgroundAttachment":"backgroundAttachment",":backgroundBlendMode":"backgroundBlendMode",":backgroundClip":"backgroundClip",":backgroundOrigin":"backgroundOrigin",":backgroundPosition":"backgroundPosition",":backgroundPositionX":"backgroundPositionX",":backgroundPositionY":"backgroundPositionY",":backgroundRepeat":"backgroundRepeat",":backgroundSize":"backgroundSize",":backgroundColor":"backgroundColor"},nt="beforeRender",it="beforeUpdate",ot="beforeDestroy",rt="rendered",at="updated",st="destroyed",lt="before_render",ct="before_update",dt="before_destroy",ut={create:"CREATE",append:"APPEND",replace:"REPLACE",text:"TEXT",prop:"PROP",remove:"REMOVE"},ft={domId:"ID: 未提供。",dom:"元素: 不存在。",vdomModel:"虛擬 DOM: 未初始化。",vdomTemp:"虛擬 DOM: 未創建。"};e[ee][z](mt("style",'\n*[\\:effect="fade-in"],\n*[effect="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:effect="fade-in"].show,\n*[effect="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:effect="expand"],\n*[effect="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:effect="expand"].show,\n*[effect="expand"].show {\n    opacity: 1;\n}\n\n*[\\:animation="fade-in"],\n*[animation="fade-in"] {\n    opacity: 0;\n    transition: opacity 0.3s ease-in 0s;\n}\n\n*[\\:animation="fade-in"].show,\n*[animation="fade-in"].show {\n    opacity: 1;\n}\n\n*[\\:animation="expand"],\n*[animation="expand"] {\n    min-height: 0;\n    height: 0;\n    overflow: hidden;\n    transition: min-height 0.3s ease-in 0s;\n}\n\n*[\\:animation="expand"].show,\n*[animation="expand"].show {\n    opacity: 1;\n}\n\n*[\\:mask="1=true"],\n*[mask="true"],\n*[\\:mask="1"],\n*[mask="1"] {\n    position: relative;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"]::after,\n*[mask="1"]::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(to right, #e0e0e0 25%, #f0f0f0, #e0e0e0 75%);\n    /* 使用灰色漸層 */\n    background-size: 200% 100%;\n    /* 背景尺寸兩倍寬度 */\n    animation: loading-animation 1.5s infinite alternate;\n    /* 來回移動動畫 */\n    z-index: 10;\n    transition: 0.3s;\n}\n\n*[\\:mask="1=true"]::after,\n*[mask="true"]::after,\n*[\\:mask="1"].show::after,\n*[mask="1"].show::after {\n    opacity: 0;\n}\n\n@keyframes loading-animation {\n    0% {\n        background-position: -100% 0;\n    }\n\n    100% {\n        background-position: 100% 0;\n    }\n}\n\nimg[lazyload]:not([lazyload=""]):[effect="circle"] {\n    animation: spin 2s ease-in-out infinite;\n    width: 1.25rem !important;\n    height: 1.25rem !important;\n}\n\nimg[lazyload]:not([lazyload=""]):not([effect="circle"]) {\n    min-width: 1.25rem !important;\n    min-height: 1.25rem !important;\n    border-radius: 0.625rem !important;\n    background: linear-gradient(90deg, #e0e0e0 15%, #f0f0f0, #e0e0e0 85%);\n    background-size: 200% 100%;\n    animation: shimmer 1.5s infinite;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes shimmer {\n    0% {\n        background-position: 200% 0;\n    }\n    100% {\n        background-position: -200% 0;\n    }\n}'));const gt="\ndata:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI1OTVfMzA1OSkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDEwQzE2IDExLjc3NyAxNS4yMjc1IDEzLjM3MzYgMTQgMTQuNDcyMkMxMi45Mzg1IDE1LjQyMjMgMTEuNTM2NyAxNiAxMCAxNlYyMEMxMS40MjIyIDIwIDEyLjc3NTEgMTkuNzAzMSAxNCAxOS4xNjc5QzE3LjUzMTggMTcuNjI0OCAyMCAxNC4xMDA2IDIwIDEwQzIwIDUuODk5MzYgMTcuNTMxOCAyLjM3NTIgMTQgMC44MzIwODdDMTIuNzc1MSAwLjI5Njg5NSAxMS40MjIyIDAgMTAgMFY0QzExLjUzNjcgNCAxMi45Mzg1IDQuNTc3NzEgMTQgNS41Mjc3OUMxNS4yMjc1IDYuNjI2NDMgMTYgOC4yMjMgMTYgMTBaIiBmaWxsPSIjMzQ5OERCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCAxMEM0IDExLjc3NyA0Ljc3MjUgMTMuMzczNiA2IDE0LjQ3MjJDNy4wNjE1MSAxNS40MjIzIDguNDYzMjkgMTYgMTAgMTZWMjBDOC41Nzc3OSAyMCA3LjIyNDkyIDE5LjcwMzEgNiAxOS4xNjc5QzIuNDY4MTkgMTcuNjI0OCAwIDE0LjEwMDYgMCAxMEMwIDUuODk5MzYgMi40NjgxOSAyLjM3NTIgNiAwLjgzMjA4N0M3LjIyNDkyIDAuMjk2ODk1IDguNTc3NzkgMCAxMCAwVjRDOC40NjMyOSA0IDcuMDYxNTEgNC41Nzc3MSA2IDUuNTI3NzlDNC43NzI1IDYuNjI2NDMgNCA4LjIyMyA0IDEwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI1OTVfMzA1OSI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\n";function ht(e,t,i){return e=n(e),i=n(i),h(e)||h(i)?void 0:"+"===t?e+i:"-"===t?e-i:"*"===t?e*i:"/"===t?e/i:"%"===t?e%i:e}async function pt(e,t=!1){return new u((async(n,i)=>{try{const o=await fetch(e);if(o.ok){const e=o[te][J]("Content-Type");if(e&&e[Re]("image")){if("image/svg+xml"==e&&!t)return void n(o);const r=await o.blob(),a=new Image,l=s.createObjectURL(r);a[Se]=l,a[V]=O,a.onload=e=>n({[Se]:l,img:a}),a.onerror=e=>{s.revokeObjectURL(l),i(e)}}else n(o)}else i(new Error(`HTTP error! status: ${o.status}`))}catch(e){i(e)}}))}function mt(n="",o,r){const a=((n[pe](A)||[])[0]||"")[qe](),s=((n[pe](D)||[])[1]||"")[qe](),l=(C[_e](n)&&n[pe](C)||[])[he]((e=>e[ve](/^\./,"")));if(a[fe]<1)return;let c,d,u,f=!1;"temp"===n?(f=!0,c=e[H]()):c=e[_](a),s[fe]&&(c[ne]=s);for(let e of l)c[B][j](e);if(null==o&&null!=r&&([o,r]=[r,null]),null!=o&&null!=r)[d,u]=[o,r];else if(null==r)"string"==typeof o||"number"==typeof o||i[se](o)?u=o:d=o;else if(null==o)return c;if("object"==typeof d&&null!=d)for(const e in d){if(!d.hasOwnProperty(e))continue;const t=d[e];-1!=["value","innerText",ae,"textContent","contentEditable"][re](e)?c[e]=t:-1!=["color","backgroundColor","width","height","display","float"][re](e)?c[Ze][e]=t:null!=t&&c[je](e,t)}if(null!=u){const n="string"==typeof u,o="number"==typeof u,r=i[se](u);if(n||o){const t=u;"img"===a||"source"===a?c[Se]=t:f?c[z](e[U](u)):c[ae]=t}else if(r)for(let n of u){const i=n instanceof Element;"string"==typeof n||"number"==typeof n?c[z](e[U](t(n))):i&&c[z](n)}}return c}function yt(e,t,n){return new Proxy(e,{get(e,i,o){const r=Reflect[J](e,i,o),a=t?`${t}.${i[We]()}`:i[We]();return"object"==typeof r&&null!==r?yt(r,a,n):r},set(e,i,o,r){const a=e[i],s=Reflect.set(e,i,o,r),l=t?`${t}.${i[We]()}`:i[We]();return a!==o&&n(l,o,a),s}})}function bt(e,n="yyyy/MM/DD (ddd) HH:mm:ss"){const i=new Date(1e3*e),o=t(i.getFullYear()),r=t(i.getMonth()+1),a=t(i.getDate()),s=t(i.getDay()),l=t(i.getHours()),c=t(i.getMinutes()),d=t(i.getSeconds()),u=t(i.getMilliseconds());let f={YYYY:o,yyyy:o,YY:o[Le](-2),yy:o[Le](-2),Y:o[Le](-2),y:o[Le](-2),M:r,MM:("0"+r)[Le](-2),D:a,DD:("0"+a)[Le](-2),d:s,dd:("0"+s)[Le](-2),H:l,HH:("0"+l)[Le](-2),h:t(g(l)%12||12),hh:("0"+(g(l)%12||12))[Le](-2),m:c,mm:("0"+c)[Le](-2),s:d,ss:("0"+d)[Le](-2),SSS:("00"+u)[Le](-3),a:g(l)>=12?"pm":"am",A:g(l)>=12?"PM":"AM"};const h=/zh/.test(navigator.language||"")?["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return f.ddd=h[g(s)][Le](0,3),f.dddd=h[g(s)],n.replace(/YYYY|YY|Y|yyyy|yy|y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|a|A|ddd|dddd/g,(e=>f[e]))}let kt,Mt;new Map;function wt(e){return Dt(Ct(e[qe]()[ve](/\s*([\{\}\[\]\:,])\s*/g,"$1")))}function Ct(e){const t=[];let n=0;for(;n<e[fe];){let i=At(e,n),o=It(e,n);if(null==o&&null==i)break;if(null!=o&&null==i)t[Ae](o[Fe]),n=o[me];else if(null!=i){let o={[Be]:i[Be],[ne]:i[ne],[Z]:i[Z],[S]:{}};for(;"}"!==e[n];){if(e[Le](n,n+9)===Y+":"){n+=9;const t=xt(e,n);o[Y]=t[Fe],n=t[me]}const t=Nt(e,n,[ne,Z,Y]);t?(o[S][t[ce]]=t[Fe],n=t[me]):n++}n++,t[Ae](o)}}return t}function Dt(t){const n=mt(He);if(!i[se](t))return n;for(let i of t){if(null==t)continue;const o=i[Be]+(null==i[ne]?"":"#"+i[ne])+(null==i[Z]?"":"."+i[Z][ve](/\s/g,".")),r="string"==typeof i?e[U](i):mt(o,i[S]||{});null!=r&&("string"!=typeof i&&r[z](Dt(i[Y])),n[z](r))}return n}function At(e,t){let n=t,i="",o="",r=[];for(;/[\s\,]/[_e](e[n]);)n++;for(;/[a-zA-Z]/[_e](e[n]);)i+=e[n],n++;if("#"===e[n])for(n++;/[a-zA-Z0-9_-]/[_e](e[n]);)o+=e[n],n++;for(;"."===e[n];){n++;let t="";for(;/[a-zA-Z0-9_-]/[_e](e[n]);)t+=e[n],n++;r[Ae](t)}const a=r[le](" ");for(;/\s/[_e](e[n]);)n++;return"{"===e[n]?(n++,{[Be]:i[qe](),[ne]:o||null,[Z]:a||null,[me]:n}):null}function It(e,t){let n=t,i="";for(;/\s/[_e](e[n]);)n++;for(;'"'!==e[n];)n++;for(n++;'"'!==e[n];)i+=e[n],n++;return n++,{[Fe]:i,[me]:n}}function Nt(e,t,n=[]){let i=t,o="",r="";for(;/\s/[_e](e[i]);)i++;for(;/[a-zA-Z_-]/[_e](e[i]);)o+=e[i],i++;if(n[ie](o[qe]()))return null;if(":"===e[i]){i++;const t=It(e,i);return r=t[Fe],i=t[me],{[ce]:o[qe](),[Fe]:r,[me]:i}}return null}function xt(e,t){let n=t,i=[],o=0,r="";for(;/\s/[_e](e[n]);)n++;for(;"["!==e[n];)n++;for(n++;n<e[fe];){const t=e[n];if("{"===t)o++,r+=t;else if("}"===t)o--,r+=t;else{if("]"===t&&0===o){i=Ct(r);break}r+=t}n++}return{[Fe]:i,[me]:n}}function Tt(t,...n){const i=mt(Ee,`console.${t}.apply(void 0, ${a[Ye](n)});`);e[R][z](i),i[Ne]()}class vt{#e;#t;#n;#i;#o;#r;#a;#s;#l;constructor(e={}){this.#e=e[lt]||void 0,this.#t=e[rt]||void 0,this.#n=e[ct]||void 0,this.#i=e[at]||void 0,this.#o=e[dt]||void 0,this.#r=e[st]||void 0}async#c(e){return new u(((t,n)=>{t(!1!==e())}))}#d(e){e(!1)}async render(e){this.#a=l.now(),null!=this.#e&&!1===await this.#c(this.#e)||(await e(),this.#s=l[be]()-this.#a,Tt("log","渲染耗時:",this.#s/1e3),null!=this.#t&&this.#d(this.#t))}async update(e){clearTimeout(this.#l),this.#l=m((async()=>{this.#a=l.now(),null!=this.#n&&!1===await this.#c(this.#n)||(await e(),this.#s=l[be]()-this.#a,Tt("log","更新耗時:",this.#s/1e3),null!=this.#i&&this.#d(this.#i))}),300)}async destroy(e){this.#a=l.now(),null!=this.#o&&!1===await this.#c(this.#o)||(await e(),this.#s=l[be]()-this.#a,Tt("log","銷毀耗時:",this.#s/1e3),null!=this.#r&&this.#d(this.#r))}}window.QUI=class{body;data={};event={};isScheduled=!1;#u=!0;#f=null;#g=null;#h=null;#p=null;constructor(n){const i=t(n[ne]||"")[qe]();if(i[fe]<1)return void Tt(Q,ft.domId);const o=e.getElementById(i);if(null!=o){if(this.#f=o[$](!0),this.#h=new Et(this.#f),"function"==typeof n[Te]){const e=n[Te](),t=mt(He),i=o[$](!0);t[z](wt(e)),i.replaceChildren(t),this.#f=i}this.#m(n).then((e=>{this[R]=o,this[W]=yt(e,"",(e=>{this.#p?.update((()=>this.#y()))})),this[X]=n[X]||{};const t=n.option||{};!1!==t.svg&&function(){Mt=new y((async(e,t)=>{for(let t of e){const e=t.target;if(!t.isIntersecting)continue;const n=(e[K](Se)||"")[qe]();if(n[fe]<1)return;await pt(n).then((t=>{Mt[Xe](e),t.text().then((t=>{const n=mt("div");n[ae]=t;const i=n[Y][0];i.id=e.id,e.classList.forEach((e=>i.classList.add(e))),i.onclick=e.onclick,null!=e[Me]&&e[Me].insertBefore(i,e),e.remove()})).catch((t=>{e[ae]="☒"}))})).catch((t=>{e[ae]="☒"}))}}));for(let e of[][Le].call(document.body.querySelectorAll("temp-svg[src]:not([src=''])")||[]))Mt[ke](e)}(),!1!==t[ue]&&function(){kt=new y(((e,t)=>{const n=[];for(let t of e){const e=t.target;if(!t.isIntersecting)continue;kt[Xe](e);const i=(e[K](ue)||"")[qe]();i[fe]>0&&n.push({dom:e,src:i})}Promise.all(n.map((({dom:e,src:t})=>pt(t,!0).then((t=>{e[Se]=t[Se]})).catch((()=>{e[Se]="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg"})).finally((()=>{e[xe](ue),e[xe](G)})))))}));const e=document.body.querySelectorAll("img[lazyload]:not([lazyload=''])");for(let t of Array.from(e))kt[ke](t)}();const i=n.when||n.lifecycle||n||{};this.#p=new vt({before_render:i[lt]||i[nt],rendered:i[rt],before_update:i[ct]||i[it],updated:i[at],before_destroy:i[dt]||i[ot],destroyed:i[st]}),this.#p.render((async()=>{await this.#y(),this.#u=!1}))}))}else Tt(Q,ft.dom)}lang(e){o.hasOwn(this.data.quickui_i18n,e)&&(this.data.quickui_i18nLang=e)}async#m(e={}){let t=e[W]||{};if("object"==typeof e.i18n&&null!=e.i18n){const n=e.i18n;t.quickui_i18n={};for(const[e,i]of Object.entries(n))if("string"==typeof i&&i.trim().length>0)try{const n=await fetch(i.trim());if(!n.ok)throw new Error(`Failed to load i18n file for ${e}`);const o=await n.json();t.quickui_i18n[e]=o}catch(n){t.quickui_i18n[e]={}}else t.quickui_i18n[e]=i}else t.quickui_i18n={};return t.quickui_i18nLang=e.i18nLang||"zh",t}#y(){return new u((async e=>{null!=this.#f?(this.#g=new Et(this.#f),null!=this.#g?(this.#g[W]=a[Ce](a[Ye](this[W])),await this.#g.updateChildren(),this.isScheduled=!0,requestAnimationFrame((()=>{this.#b(),this.isScheduled=!1,e(!0)}))):Tt(Q,ft.vdomTemp)):Tt(Q,ft.vdomModel)}))}#b(){const e=this[R];if(null==e)return void Tt("error",ft.dom);const t=this.#g?.getPatches(this.#h);i[se](t)&&this.#k(e,t);for(let t of e[Ie]("*[\\:if]"))t[xe](":if");e[B][j]("show"),"expand"!=e[K](G)&&"expand"!=e[K](L)||(e[Ze].minHeight=e.scrollHeight+"px"),m((()=>{e[xe](G),e[xe](L),e[xe]("mask"),e[B][Ne]("fade-in"),e[B][Ne]("loading-block"),e[B][Ne]("expand"),e[B][Ne]("show")}),300),this.#h=this.#g,this.#g=null}#k(e,t){if(null!=e&&i[se](t)){this.#M(e,t);for(const n of t){const{index:t}=n,i=a[Ce](a[Ye](t||[]));let o;n.type===ut.append&&(o=i?.pop());const r=i?this.#w(e,i):e;r&&(n.type===ut.create&&Je in n?this.#C(r,n):n.type===ut.replace&&Je in n&&null!=r[we]?this.#D(r,n):n.type===ut.append&&Je in n&&null!=o?this.#A(r,n,o):n.type===ut.prop&&ce in n&&Fe in n&&r instanceof Element?this.#I(r,n.key,n.value||"",n[Je]):n.type===ut.text&&Fe in n&&r.nodeType===f[Ue]&&(r[Ve]=n.value||""))}}}#M(e,t){const n=t.filter((e=>e.type===ut.remove)).sort(((e,t)=>{const n=(t.index.length||0)-(e.index.length||0);if(0!==n)return n;for(let n=0;n<(e.index.length||0);n++)if((e.index[n]||0)!==(t.index[n]||0))return(t.index[n]||0)-(e.index[n]||0);return 0}));for(const t of n){const n=this.#w(e,t.index);null!=n&&null!=n[we]&&n[we].removeChild(n)}}#C(t,n){if(n.type!==ut.create||!(Je in n))return;const i="string"==typeof n[Je]?e[U](n[Je]):this.#N(n[Je]);null!=t[Me]&&t[Me][z](i)}#D(t,n){if(n.type!==ut.replace||!(Je in n)||null==t[we])return;const i="string"==typeof n[Je]?e[U](n[Je]):this.#N(n[Je]);if(t[we].replaceChild(i,t),!(i instanceof Text||"string"==typeof n[Je])){for(const e in n[Je][De])this.#I(i,e,n[Je][De][e]||"",n[Je]);this.#x(n[Je],i)}}#A(t,n,i){if(n.type!==ut.append||!(Je in n)||null==i)return;const r="string"==typeof n[Je]?e[U](n[Je]):this.#N(n[Je]);if(i+1>t[Y][fe]?t[z](r):t.insertBefore(r,t[Y][i+1]),"string"!=typeof n[Je]){for(const[e,r]of o.entries(n[Je][De]))this.#I(t[Y][i],e,r||"",n[Je]);this.#x(n[Je],t[Y][i])}}#I(e,t,n,i){let o=n;if(n&&"string"==typeof n&&n.startsWith("i18n.")){const e=n.replace(/^i18n\./,""),t=this[W].quickui_i18nLang,i=this[W].quickui_i18n[t];i&&i[e]&&(o=i[e])}null==o?e[xe](t):t[Re](":@")||t[Re]("@")?this.#T(e,t,o,i):t[ge]()[Re](":model")?this.#v(e,t,o):t[Re](":")?this.#E(e,t,o,i):null!=e&&e[je](t,o)}#T(e,t,n,i){(()=>{if(!1===t[Re]("@"))return;const o=t[ve](/^\@/,"on"),r=this.#j(n,i[W])||n,a=this[X][r];e[o]=a})(),e[xe](t)}#v(t,n,i){if(null==i||!/(input|select|textarea)/i[_e](t[$e]))return;const o=t instanceof HTMLInputElement,r=t instanceof HTMLTextAreaElement,a=t instanceof HTMLSelectElement,s=t[K]("type");!o||"checkbox"!==s&&"radio"!==s?a?t[P]("change",(e=>{this[W][i]=e.target[Fe]||""})):(o||r)&&(t[P]("keyup",(e=>{this[W][i]=e.target[Fe]||""})),t[P]("change",(e=>{this[W][i]=e.target[Fe]||""}))):t[P]("change",(t=>{this[W][i]=[...e.body.querySelectorAll("input[name='"+t.target.name+"'][type='"+s+"']:checked")].map((e=>e.value)).join(",")})),t[xe](n)}#E(e,t,n,i){const o=t[ge](),a=null==this.#j(n,i[W])?n:this.#j(n,i[W]),s=(et[o]||"")[qe](),l=(tt[o]||"")[qe](),c=t[We]()[ve](/^\:/g,"")[ve](/-+/g," ")[ve](/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e[ge]():e[Ge]()}))[ve](/\s+/g,"");if(o===":"+ue&&n[qe]()[fe]>0)if(this.#u){const t=e[K](":"+G)||"";e.src="circle"===t?gt:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px'/%3E",kt[ke](e)}else{if(null==e[K](ue))return void(e.src=a);e.src=gt,kt[ke](e)}if(":html"===o&&n[qe]()[fe]>0)e[ae]=a||n;else if(o===N||o in Ke);else if(":src"===o&&"temp-svg"===i.tag[ge]()&&n[qe]()[fe]>0){const t=this.#j(n,i[W])||n;e[je](Se,t),Mt[ke](e)}else o in et?e[s]=a:o in tt?e[Ze][l]=a:!(c in e[Ze])||t===":"+L&&/(fade-in|expand)/[_e](n)?":hide"===o&&r(h(+a)?a:+a)?e[Ze].display="none":e[je](`${t[ve](/^:/,"")}`,a):e[Ze][c]=a;e[xe](t)}#x(e,t){if("string"!=typeof e)for(const n in e.children.filter((e=>"string"!=typeof e))){if(null==t)continue;const i=e.children[+n],r=t.children[+n];if("string"!=typeof i){for(const[e,t]of o.entries(i[De]))this.#I(r,e,t||"",i);this.#x(i,r)}}}#j(e,n){if(e[qe]()[fe]<1)return;const r=b[_e](e);let a="",s="";r&&(a=e[ze](b)[0]||"",s=e[ze](b)[4]||"",e=e[pe](b)[1]);const l=/^LENGTH\(.+\)/[_e](e);l&&(e=e[ve](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[_e](e);let d="",u=0;if(c){const t=(e=e[ve](/^CALC\(|\)$/g,""))[pe](w);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[_e](e),g=/^LOWER\(.*\)$/[_e](e);(f||g)&&(e=e[ve](/^(UPPER|LOWER)\(|\)$/g,""));const h=/^DATE\([\w\,\-\s\:]*\)$/[_e](e);let p="";if(h){const t=(e=e[ve](/^DATE\(|\)$/g,""))[pe](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[ze](/\./),y=n||this[W],k=m[0],M=y[k];for(m[Pe]();m[fe]>0;)y=M||{},k=m[0],M=y[k],m[Pe]();if(null==M)for(m=e[ze](/\./),y=this[W],k=m[0],M=y[k],m[Pe]();m[fe]>0;)y=M||{},k=m[0],M=y[k],m[Pe]();let C="";if(null!=M&&M instanceof Object&&!i[se](M)?C=t(o[de](M)[fe]):null!=M&&(C=M[fe]),r){if(l)return a+C+s;if(c&&(M=ht(M,d,u),null==M))return;return a+M+s}if(l)return C;if(c){if(M=ht(M,d,u),null==M)return}else{if(f)return M[Ge]();if(g)return M[ge]();if(h)return bt(+M,p)}return M}#w(e,t){let n=e,o=i.from(n.childNodes).filter((e=>e.nodeType===f[q]||e.nodeType===f[Ue]&&""!==e[Ve]?.trim()))||[];for(const e of t)n=o[e],null!=n&&(o=i.from(n.childNodes).filter((e=>e.nodeType===f[q]||e.nodeType===f[Ue]&&""!==e[Ve]?.trim()))||[]);return n}#N(t){const n=e.createElement(t.tag);if(t[De])for(const[e,i]of o.entries(t[De]))e[Re](":")||e[Re]("@")||void 0!==i&&n[je](e,i);for(const i of t[Y])"string"==typeof i?n[z](e[U](i)):n[z](this.#N(i));return n}};class Et{tag="";props={};children=[];data=null;constructor(t){if(t[$e][ge]()===Ee){let n=!1;for(const i of e[ee][Ie](Ee)||[])if(null!=t[Se]&&i[Se]===t[Se]||null!=t[Ve]&&i[Ve]===t[Ve]){n=!0;break}n||e[ee][z](t),this[Be]=Ee}this[Be]=t[$e][ge](),this[De]=[...t.attributes].reduce(((e,t)=>(e[t.name]=t.value.trim(),e)),{}),this[Y]=function(e){return i[F](e.childNodes).filter((e=>e[ye]===f[q]||e[ye]===f[Ue]&&e[Ve]&&e[Ve][qe]()[fe]>0))}(t)[he]((e=>e.nodeType===Node[q]?new Et(e):(e[Ve]||"")[qe]()))}async updateChildren(){this.#P(this),this.#L(this),await this.#O(this),this.#P(this),this.#L(this),this.#z(this)}getPatches(e){return this.#S(e,this)}#P(e){let t=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;t<e[Y][fe];){const n=e[Y][t];if("string"==typeof n||null==n){t++;continue}if(null==n[W]&&(n[W]=e[W]),!(N in n[De])){t++;continue}const o=n[De][N],r=(o[pe](/^\(?\s*(\w+)/)||[])[1],s=(o[pe](/\,\s*(\w+)/)||[])[1],l=(o[pe](k)||[])[1];let c=this.#j(l,e[W]),d=[];if(delete n[De][N],i[se](c)){c=a[Ce](a[Ye](c));for(const e in c){const t=a[Ce](a[Ye](c[+e]));let i=p(n);i[W]=a[Ce](a[Ye]({[r]:t,[l]:c})),null!=s&&(i[W][s]=+e),d.push(i)}e[Y][Oe](t,1,...d),t+=d[fe]-2}else if(null!=c&&"object"==typeof c){c=a[Ce](a[Ye](c));for(const e in c){const t=a[Ce](a[Ye](c[e]));let i=p(n);i[W]=a[Ce](a[Ye]({[r]:e,[s]:t,[l]:c})),d.push(i)}e[Y][Oe](t,1,...d),t+=d[fe]-2}else t++}for(let t of e[Y])this.#P(t)}}#L(e){let i=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;i<e[Y][fe];){const o=e[Y][i];if("string"==typeof o){i++;continue}if(!(x in o[De])){delete o[De][T],delete o[De][v],delete o[De][E],i++;continue}let a=i+1,s=e[Y][a],l=[i],c=!1;(()=>{for(;!c;){if(l[Ae](a),a+=1,s=e[Y][a],null==s||"string"==typeof s){c=!0;continue}const t=s[De]||{};c=null==(t[T]||t[v]||t[E])}})();let d=!1,u=!1;for(let o of l){const a=e[Y][o];if(null==a||"string"==typeof a)return;const s=a[De][x]||a[De][T]||a[De][v],c=null!=a[De][E];if(c&&(u=!0),d)return;if(c)e[Y][Oe](i,l.length,a);else if(null!=s){const o=s[ze](M)[0],c=s[ze](M)[1],u=((s[pe](M)||[])[0]||"")[qe](),f=this.#j(o,a[W]);if(null==c&&u[fe]<1?d=r(f):">"===u?d=(n(f)||0)>(n(c)||0):"<"===u?d=(n(f)||0)<(n(c)||0):">="===u||">=="===u?d=(n(f)||0)>=(n(c)||0):"<="===u||"<=="===u?d=(n(f)||0)<=(n(c)||0):"=="===u||"==="===u?d="null"==c?null==f:"true"==c?r(f):"false"==c?!r(f):"empty"==c?t(f||"")[fe]<1:t(f||"")==t(c):"!="!==u&&"!=="!==u||(d="null"==c?null!=f:"true"==c?!r(f):"false"==c?r(f):"empty"==c?t(f||"")[fe]>0:t(f||"")!=t(c)),d)return delete a[De][x],void e[Y][Oe](i,l.length,a)}}d||u?d?i+=l.length-2:i++:e[Y][Oe](i,l.length)}for(let t of e[Y])this.#L(t)}}async#O(e){let t=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;t<e[Y][fe];){const n=e[Y][t];if("string"==typeof n){t++;continue}if(!(I in n[De])||"temp"!=n.tag){t++;continue}const i=n[De][I],o=this.#j(i,e[W])||i;delete n[De][I],await fetch(o).then((async n=>{const i=mt("div",await n.text()).cloneNode(!0),o=new Et(i);e[Y][Oe](t,1,...o[Y]),t+=o[Y][fe]-2})),t++}for(let t of e[Y])await this.#O(t)}}translate(e){const t=this.data.quickui_i18nLang;if(!this.data.quickui_i18n[t])return e;const n=e.split(".");let i=this.data.quickui_i18n[t];for(const e of n)if(i=i[e],void 0===i)break;return void 0!==i?i:e}#z(e){let t=0;if(!("string"==typeof e||e[Y][fe]<1)){for(;t<e[Y][fe];){let n=e[Y][t];if("string"==typeof n){for(let i of n[pe](new d(b,"g"))||[]){const n=e[Y][t]||"",o=i[pe](b)||[];if(o[fe]<1)continue;const r=o[1]||"";if(!("string"!=typeof n||r.length<1)&&r[Re]("i18n.")){const i=r[ve](/^i18n\./,""),o=this.translate(i);e[Y][t]=n[ve](new d("{{\\s*?"+r[ve](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),o)}}for(let i of n[pe](new d(b,"g"))||[]){const n=e[Y][t]||"",o=i[pe](b)||[];if(o[fe]<1)continue;const r=o[1]||"",a=this.#j(r,e[W]);"string"!=typeof n||r.length<1||null==a||(e[Y][t]=n[ve](new d("{{\\s*?"+r[ve](/(\?|\.|\+|\*|\\|\%|\-|\(|\))/g,"\\$1")+"\\s*?}}","i"),a))}}else null!=n&&null==n[W]&&(n[W]=e[W]);t++}for(let t of e[Y])this.#z(t)}}#j(e,n){if(e[qe]()[fe]<1)return;const r=b[_e](e);let a="",s="";r&&(a=e[ze](b)[0]||"",s=e[ze](b)[4]||"",e=e[pe](b)[1]);const l=/^LENGTH\(.+\)/[_e](e);l&&(e=e[ve](/^LENGTH\(|\)$/g,""));const c=/^CALC\(.*\)$/[_e](e);let d="",u=0;if(c){const t=(e=e[ve](/^CALC\(|\)$/g,""))[pe](w);e=t[1],d=t[2],u=+t[3]||0}const f=/^UPPER\(.*\)$/[_e](e),g=/^LOWER\(.*\)$/[_e](e);(f||g)&&(e=e[ve](/^(UPPER|LOWER)\(|\)$/g,""));const h=/^DATE\([\w\,\-\s\:]*\)$/[_e](e);let p="";if(h){const t=(e=e[ve](/^DATE\(|\)$/g,""))[pe](/(\w+),\s*([^\n]+)/);e=t[1],p=t[2]}let m=e[ze](/\./),y=n||this[W],k=m[0],M=y[k];for(m[Pe]();m[fe]>0;)y=M||{},k=m[0],M=y[k],m[Pe]();if(null==M)for(m=e[ze](/\./),y=this[W],k=m[0],M=y[k],m[Pe]();m[fe]>0;)y=M||{},k=m[0],M=y[k],m[Pe]();let C="";if(null!=M&&M instanceof Object&&!i[se](M)?C=t(o[de](M)[fe]):null!=M&&(C=M[fe]),r){if(l)return a+C+s;if(c&&(M=ht(M,d,u),null==M))return;return a+M+s}if(l)return C;if(c){if(M=ht(M,d,u),null==M)return}else{if(f)return M[Ge]();if(g)return M[ge]();if(h)return bt(+M,p)}return M}#S(e,t,n=[]){if(null==e&&t)return[{[Qe]:ut.create,[oe]:n,[Je]:t}];if(e&&!t)return[{[Qe]:ut.remove,[oe]:n}];if(!e&&!t)return[];if(e.tag!==t.tag)return[{[Qe]:ut[ve],[oe]:n,[Je]:t}];const i=[];return i[Ae](...this.#R(e,t,n)),i[Ae](...this.#Y(e,t,n)),i}#R(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const i=[],r=e[De]||{},a=o[de](r)[fe],s=t[De]||{},l=o[de](s)[fe];if(l>0)for(let e in s){const o=s[e];i[Ae]({[Qe]:ut.prop,[Je]:t,key:e,value:o,[oe]:n})}if(a>0){if(l<1)for(let e in r)i[Ae]({[Qe]:ut.prop,[Je]:t,key:e,[Fe]:null,[oe]:n});for(let e in s)l>0&&!(e in s)&&i[Ae]({[Qe]:ut.prop,[Je]:t,key:e,[Fe]:null,[oe]:n})}return i}#Y(e,t,n=[]){if(null==e||"string"==typeof e||null==t||"string"==typeof t)return[];const o=[],r=i[se](e[Y])?e[Y]:[],a=i[se](t[Y])?t[Y]:[],s=c.max(r[fe],a[fe]);for(let e=0;e<s;e++){const i=r[e],s=a[e],l=n.concat(e);if("string"==typeof i&&"string"==typeof s){if(i===s)continue;o[Ae]({[Qe]:ut.text,[Je]:t,[Fe]:s,[oe]:l})}else null==i?o[Ae]({[Qe]:ut.append,[Je]:s,[oe]:l}):null==s?o[Ae]({[Qe]:ut.remove,index:l}):o[Ae](...this.#S(i,s,l))}return o}}}("undefined"==typeof window?window={}:window);export const QUI = window.QUI;
