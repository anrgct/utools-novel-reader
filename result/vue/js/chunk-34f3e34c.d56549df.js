(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34f3e34c"],{"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"1dde":function(e,t,n){var a=n("d039"),r=n("b622"),i=n("2d00"),s=r("species");e.exports=function(e){return i>=51||!a((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25f0":function(e,t,n){"use strict";var a=n("6eeb"),r=n("825a"),i=n("d039"),s=n("ad6d"),o="toString",l=RegExp.prototype,c=l[o],d=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=o;(d||u)&&a(RegExp.prototype,o,(function(){var e=r(this),t=String(e.source),n=e.flags,a=String(void 0===n&&e instanceof RegExp&&!("flags"in l)?s.call(e):n);return"/"+t+"/"+a}),{unsafe:!0})},"44e7":function(e,t,n){var a=n("861d"),r=n("c6b6"),i=n("b622"),s=i("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==r(e))}},"466d":function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),i=n("50c4"),s=n("1d80"),o=n("8aa5"),l=n("14c3");a("match",1,(function(e,t,n){return[function(t){var n=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var s=r(e),c=String(this);if(!s.global)return l(s,c);var d=s.unicode;s.lastIndex=0;var u,_=[],g=0;while(null!==(u=l(s,c))){var f=String(u[0]);_[g]=f,""===f&&(s.lastIndex=o(c,i(s.lastIndex),d)),g++}return 0===g?null:_}]}))},"4d63":function(e,t,n){var a=n("83ab"),r=n("da84"),i=n("94ca"),s=n("7156"),o=n("9bf2").f,l=n("241c").f,c=n("44e7"),d=n("ad6d"),u=n("9f7f"),_=n("6eeb"),g=n("d039"),f=n("69f3").set,p=n("2626"),m=n("b622"),v=m("match"),y=r.RegExp,b=y.prototype,k=/a/g,x=/a/g,h=new y(k)!==k,w=u.UNSUPPORTED_Y,E=a&&i("RegExp",!h||w||g((function(){return x[v]=!1,y(k)!=k||y(x)==x||"/a/i"!=y(k,"i")})));if(E){var S=function(e,t){var n,a=this instanceof S,r=c(e),i=void 0===t;if(!a&&r&&e.constructor===S&&i)return e;h?r&&!i&&(e=e.source):e instanceof S&&(i&&(t=d.call(e)),e=e.source),w&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var o=s(h?new y(e,t):y(e,t),a?this:b,S);return w&&n&&f(o,{sticky:n}),o},R=function(e){e in S||o(S,e,{configurable:!0,get:function(){return y[e]},set:function(t){y[e]=t}})},$=l(y),A=0;while($.length>A)R($[A++]);b.constructor=S,S.prototype=b,_(r,"RegExp",S)}p("RegExp")},6547:function(e,t,n){var a=n("a691"),r=n("1d80"),i=function(e){return function(t,n){var i,s,o=String(r(t)),l=a(n),c=o.length;return l<0||l>=c?e?"":void 0:(i=o.charCodeAt(l),i<55296||i>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?e?o.charAt(l):i:e?o.slice(l,l+2):s-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(e,t,n){var a=n("861d"),r=n("e8b5"),i=n("b622"),s=i("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},7156:function(e,t,n){var a=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var i,s;return r&&"function"==typeof(i=t.constructor)&&i!==n&&a(s=i.prototype)&&s!==n.prototype&&r(e,s),e}},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=l||d||c;u&&(o=function(e){var t,n,r,o,u=this,_=c&&u.sticky,g=a.call(u),f=u.source,p=0,m=e;return _&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(f="(?: "+f+")",m=" "+m,p++),n=new RegExp("^(?:"+f+")",g)),d&&(n=new RegExp("^"+f+"$(?!\\s)",g)),l&&(t=u.lastIndex),r=i.call(_?n:u,m),_?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:l&&r&&(u.lastIndex=u.global?r.index+r[0].length:t),d&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=o},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,n){var a=n("83ab"),r=n("d039"),i=n("5135"),s=Object.defineProperty,o={},l=function(e){throw e};e.exports=function(e,t){if(i(o,e))return o[e];t||(t={});var n=[][e],c=!!i(t,"ACCESSORS")&&t.ACCESSORS,d=i(t,0)?t[0]:l,u=i(t,1)?t[1]:void 0;return o[e]=!!n&&!r((function(){if(c&&!a)return!0;var e={length:-1};c?s(e,1,{enumerable:!0,get:l}):e[1]=1,n.call(e,d,u)}))}},b727:function(e,t,n){var a=n("0366"),r=n("44ad"),i=n("7b0b"),s=n("50c4"),o=n("65f0"),l=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,d=4==e,u=6==e,_=5==e||u;return function(g,f,p,m){for(var v,y,b=i(g),k=r(b),x=a(f,p,3),h=s(k.length),w=0,E=m||o,S=t?E(g,h):n?E(g,0):void 0;h>w;w++)if((_||w in k)&&(v=k[w],y=x(v,w,b),e))if(t)S[w]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return w;case 2:l.call(S,v)}else if(d)return!1;return u?-1:c||d?d:S}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),s=n("9263"),o=n("9112"),l=i("species"),c=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=i("replace"),_=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),g=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,u){var f=i(e),p=!r((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),m=p&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!m||"replace"===e&&(!c||!d||_)||"split"===e&&!g){var v=/./[f],y=n(f,""[e],(function(e,t,n,a,r){return t.exec===s?p&&!r?{done:!0,value:v.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:_}),b=y[0],k=y[1];a(String.prototype,e,b),a(RegExp.prototype,f,2==t?function(e,t){return k.call(e,this,t)}:function(e){return k.call(e,this)})}u&&o(RegExp.prototype[f],"sham",!0)}},e83c:function(e,t,n){},e8b5:function(e,t,n){var a=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},f49f:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"setting"}},[n("el-dialog",{attrs:{title:"设置",visible:e.dialogVisible,width:"70%","before-close":e.dialog_close},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"快捷键",name:"first"}},[n("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[n("el-form-item",[n("el-switch",{attrs:{"inactive-text":"使用快捷键打开上下章"},model:{value:e.setting_data.keyborad.using_keyboard,callback:function(t){e.$set(e.setting_data.keyborad,"using_keyboard",t)},expression:"setting_data.keyborad.using_keyboard"}})],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{span:5}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[n("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 上章快捷键"),n("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),n("el-col",{attrs:{span:17}},[n("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_previous_chapter},model:{value:e.setting_data.keyborad.pre_key,callback:function(t){e.$set(e.setting_data.keyborad,"pre_key",t)},expression:"setting_data.keyborad.pre_key"}})],1)],1)],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{span:5}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[n("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 下章快捷键"),n("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),n("el-col",{attrs:{span:17}},[n("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_next_chapter},model:{value:e.setting_data.keyborad.next_key,callback:function(t){e.$set(e.setting_data.keyborad,"next_key",t)},expression:"setting_data.keyborad.next_key"}})],1)],1)],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{span:5}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[n("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动快捷键"),n("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),n("el-col",{attrs:{span:17}},[n("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_scroll},model:{value:e.setting_data.keyborad.scroll_key,callback:function(t){e.$set(e.setting_data.keyborad,"scroll_key",t)},expression:"setting_data.keyborad.scroll_key"}})],1)],1)],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{span:5}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"设置滚动长度，数字越大滚动远，最大1000"}},[n("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动长度"),n("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),n("el-col",{attrs:{span:17}},[n("el-input-number",{attrs:{min:1,max:1e3},model:{value:e.setting_data.keyborad.scroll_distance,callback:function(t){e.$set(e.setting_data.keyborad,"scroll_distance",t)},expression:"setting_data.keyborad.scroll_distance"}})],1)],1)],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{span:5}},[n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"设置滚动速度，数字越大滚动越慢，为0时立即滚动，最大20"}},[n("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动速度"),n("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),n("el-col",{attrs:{span:17}},[n("el-input-number",{attrs:{min:1,max:20},model:{value:e.setting_data.keyborad.scroll_speed,callback:function(t){e.$set(e.setting_data.keyborad,"scroll_speed",t)},expression:"setting_data.keyborad.scroll_speed"}})],1)],1)],1)],1)],1),n("el-tab-pane",{attrs:{label:"提醒",name:"second"}},[n("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[n("el-form-item",{attrs:{label:"收藏提醒 "}},[n("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("都不提醒")]),n("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("只有失败提醒")]),n("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("都提醒")])],1),n("el-form-item",{attrs:{label:"章节更新提醒 "}},[n("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("都不提醒")]),n("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("只有失败提醒")]),n("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("都提醒")])],1),n("el-form-item",{attrs:{label:"设置保存提醒 "}},[n("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("都不提醒")]),n("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("只有失败提醒")]),n("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("都提醒")])],1)],1)],1),n("el-tab-pane",{attrs:{label:"阅读外观",name:"third"}},[n("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[n("el-form-item",{attrs:{label:"主题"}},[n("el-select",{attrs:{placeholder:"主题"},model:{value:e.setting_data.style.theme,callback:function(t){e.$set(e.setting_data.style,"theme",t)},expression:"setting_data.style.theme"}},[n("el-option",{attrs:{label:"基础",value:"base-theme"}}),n("el-option",{attrs:{label:"护眼",value:"yellow-theme"}}),n("el-option",{attrs:{label:"暗色",value:"gray-theme"}})],1)],1),n("el-form-item",{attrs:{label:"字体大小"}},[n("el-input-number",{attrs:{min:1,max:40},model:{value:e.setting_data.style.fort_size,callback:function(t){e.$set(e.setting_data.style,"fort_size",t)},expression:"setting_data.style.fort_size"}})],1),n("el-form-item",{attrs:{label:"间隔大小"}},[n("el-input-number",{attrs:{min:1,max:40},model:{value:e.setting_data.style.line_height,callback:function(t){e.$set(e.setting_data.style,"line_height",t)},expression:"setting_data.style.line_height"}})],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.save_settings}},[e._v("保存")]),n("el-button",{attrs:{type:"danger"},on:{click:e.restore_settings}},[e._v("取消")])],1)],1)],1)},r=[],i={name:"setting",data:function(){return{setting_data:{_id:"setting",keyborad:{using_keyboard:!1,pre_key:"ArrowLeft",next_key:"ArrowRight",scroll_key:" ",scroll_distance:150,scroll_speed:5},remind:{collect_remind:3,update_reading_section:3,settings_saved_remind:3},style:{theme:"base-theme",fort_size:18,line_height:25},version:"0.1.2"},activeName:"first"}},props:{dialogVisible:Boolean},methods:{dialog_close:function(e){this.$emit("close-dialog")},listen_previous_chapter:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyborad.scroll_key&&t.key!==e.setting_data.keyborad.next_key?e.setting_data.keyborad.pre_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},listen_next_chapter:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyborad.pre_key&&t.key!==e.setting_data.keyborad.scroll_key?e.setting_data.keyborad.next_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},listen_scroll:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyborad.pre_key&&t.key!==e.setting_data.keyborad.next_key?e.setting_data.keyborad.scroll_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},cleared_to_monitor:function(){document.onkeydown=void 0},save_settings:function(){var e=window.utools.db.put(this.setting_data);e.hasOwnProperty("error")&&e["error"]?(this.setting_data.remind.settings_saved_remind>=2&&this.$notify({title:"错误",message:"保存设置失败",duration:0,type:"error"}),this.setting_data=window.utools.db.get("setting")):(this.setting_data=window.utools.db.get("setting"),this.setting_data.remind.settings_saved_remind>=3&&this.$notify({title:"成功",message:"保存设置成功",type:"success"})),this.$emit("after-save")},restore_settings:function(){this.setting_data=window.utools.db.get("setting")}},created:function(){this.setting_data=window.utools.db.get("setting")}},s=i,o=(n("fe1d"),n("2877")),l=Object(o["a"])(s,a,r,!1,null,"090342e0",null);t["a"]=l.exports},fe1d:function(e,t,n){"use strict";var a=n("e83c"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-34f3e34c.d56549df.js.map