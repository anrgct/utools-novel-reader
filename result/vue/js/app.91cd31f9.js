(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],h=0,l=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-5c36170c":"30c7544e","chunk-5018c03a":"0ae675b0","chunk-6396ec54":"7bf4bbc3","chunk-6bd59520":"ad4d52cf","chunk-a963e7cc":"65225e97","chunk-afef9dc2":"b0c8920c","chunk-6380e53f":"3caba686","chunk-74b60650":"5cbed5cc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-5c36170c":1,"chunk-6bd59520":1,"chunk-a963e7cc":1,"chunk-afef9dc2":1,"chunk-74b60650":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5c36170c":"ab22a66b","chunk-5018c03a":"31d6cfe0","chunk-6396ec54":"31d6cfe0","chunk-6bd59520":"87eee49f","chunk-a963e7cc":"8e2a1aca","chunk-afef9dc2":"2ed59f5e","chunk-6380e53f":"31d6cfe0","chunk-74b60650":"bfd81674"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],h=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(h===r||h===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],h=s.getAttribute("data-href");if(h===r||h===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,h=document.createElement("script");h.charset="utf-8",h.timeout=120,u.nc&&h.setAttribute("nonce",u.nc),h.src=i(e);var l=new Error;s=function(t){h.onerror=h.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:h})}),12e4);h.onerror=h.onload=s,document.head.appendChild(h)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=h;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},8049:function(e,t,n){},afbc:function(e,t,n){"use strict";n("b0c0"),n("d3b7");var r=n("2b0e"),c=n("8c4f");r["default"].use(c["a"]);var a=[{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-5c36170c"),n.e("chunk-5018c03a"),n.e("chunk-6396ec54")]).then(n.bind(null,"ff9b"))}},{path:"/search",name:"search",component:function(){return Promise.all([n.e("chunk-5c36170c"),n.e("chunk-5018c03a"),n.e("chunk-afef9dc2")]).then(n.bind(null,"4e22"))}},{path:"/novel/:nid",name:"novel",component:function(){return Promise.all([n.e("chunk-5c36170c"),n.e("chunk-5018c03a"),n.e("chunk-6bd59520")]).then(n.bind(null,"c3f4"))}},{path:"/content/:nid/:cid",name:"content",component:function(){return Promise.all([n.e("chunk-5c36170c"),n.e("chunk-5018c03a"),n.e("chunk-a963e7cc")]).then(n.bind(null,"1efa"))}},{path:"/bookshelf",name:"bookshelf",component:function(){return Promise.all([n.e("chunk-5c36170c"),n.e("chunk-6380e53f")]).then(n.bind(null,"793e"))}},{path:"/read_file",name:"read_file",component:function(){return Promise.all([n.e("chunk-5c36170c"),n.e("chunk-74b60650")]).then(n.bind(null,"1d79"))}}],o=new c["a"]({routes:a});o.beforeEach((function(e,t,n){"search"===e.name&&void 0===e.query.type?n({name:"search",query:{type:"1"}}):n()})),t["a"]=o},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=n("5c96"),a=n.n(c);n("0fae");r["default"].use(a.a);n("8049"),n("fb6a"),n("ac1f"),n("5319");var o=n("d4ec"),i=n("bee2"),u=n("afbc"),s=function(){function e(){Object(o["a"])(this,e),this.history_list=[],this.head_item=-1}return Object(i["a"])(e,[{key:"addNewItem",value:function(e){this.history_list=this.history_list.slice(0,this.head_item+1),this.history_list.push(e),this.head_item++,u["a"].push(e).then()}},{key:"replaceHeadItem",value:function(e){this.history_list=this.history_list.slice(0,this.head_item+1),this.history_list[this.head_item]=e,u["a"].replace(e).then()}},{key:"goBackItem",value:function(){this.head_item-1>=0?(this.head_item--,u["a"].push(this.history_list[this.head_item]).then()):Object(c["Message"])({showClose:!0,message:"没有上一个页面了",type:"error"})}},{key:"goNextItem",value:function(){this.head_item<this.history_list.length-1?(this.head_item++,u["a"].push(this.history_list[this.head_item]).then()):Object(c["Message"])({showClose:!0,message:"没有下一个页面了",type:"error"})}},{key:"getAllItem",value:function(){return this.history_list}}]),e}(),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"router",attrs:{id:"app"}},[n("router-view")],1)},l=[],f=r["default"].extend({name:"App"}),d=f,p=n("2877"),m=Object(p["a"])(d,h,l,!1,null,"7b647fb0",null),b=m.exports,y=new s;r["default"].prototype.myHistory=y,r["default"].config.productionTip=!1,window.utools.onPluginReady((function(){window.set_initialization(),new r["default"]({router:u["a"],render:function(e){return e(b)}}).$mount("#app")})),utools.onPluginEnter((function(e){var t=e.code,n=e.payload;"search"===t?y.addNewItem({name:"search",query:{type:"1"}}):"bookshelf"===t?y.addNewItem({name:"bookshelf"}):"read_novel"===t&&n.length>=1?y.addNewItem({name:"read_file",query:{path:String(n[0].path)}}):Object(c["Notification"])({title:"错误",message:"似乎出现了bug",type:"error",duration:3e3})}))}});