(function(e){function t(t){for(var s,a,o=t[0],u=t[1],l=t[2],h=0,_=[];h<o.length;h++)a=o[h],i[a]&&_.push(i[a][0]),i[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(_.length)_.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},r=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("c21b"),i=n.n(s);i.a},"08bf":function(e,t,n){"use strict";var s=n("ad4b"),i=n.n(s);i.a},"0c26":function(e,t,n){},"0d9f":function(e,t,n){},"0fd0":function(e,t,n){"use strict";var s=n("0d9f"),i=n.n(s);i.a},"28fb":function(e,t,n){"use strict";var s=n("694e"),i=n.n(s);i.a},"2c2d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),i=n("bc3a"),r=n.n(i),a=n("76e9"),o=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Footer")],1)},l=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("address",[n("br"),n("br"),n("br"),n("footer",[n("a",{attrs:{href:"https://github.com/biluohc/Start"}},[e._v("Start @ wspsxing")])])])}],_={name:"Footer"},d=_,g=(n("b9be"),n("2877")),p=Object(g["a"])(d,c,h,!1,null,"2a76061a",null);p.options.__file="Footer.vue";var f=p.exports,m={name:"App",components:{Footer:f}},v=m,b=(n("034f"),Object(g["a"])(v,u,l,!1,null,null,null));b.options.__file="App.vue";var w=b.exports,y=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center"}},[n("TopBar"),n("SearchBar"),n("br"),n("p"),n("SiteTable")],1)},k=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[n("span",{staticClass:"h1",attrs:{align:"center"}},[e._v(e._s(e.datetime))]),n("span",{attrs:{align:"right"}},[n("router-link",{attrs:{to:"/editor"}},[n("button",[e._v("Editor")])])],1)])])},O=[],E={data:function(){return{datetime:"Start"}},methods:{datetime_string:function(){function e(e){var t=e<13?"上午":"下午";return e="上午"===t?e:e-12,t+" "+e}function t(e){return e<10?"0"+e:""+e}var n=["日","一","二","三","四","五","六"],s=new Date;return s.getMonth()+1+"月"+s.getDate()+"日 星期"+n[s.getDay()]+" "+e(s.getHours())+":"+t(s.getMinutes())},datetime_update:function(){this.datetime=this.datetime_string()}},created:function(){setInterval(this.datetime_update,500),this.datetime_update}},j=E,q=(n("5870"),Object(g["a"])(j,S,O,!1,null,null,null));q.options.__file="TopBar.vue";var $=q.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"search_engines"}},[n("form",{attrs:{action:e.selected_search_engine.url,method:"get",target:"_self"}},[n("input",{attrs:{id:"input",name:e.selected_search_engine.query,autofocus:"autofocus",maxlength:"64",size:"86",type:"text"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected_search_engine_name,expression:"selected_search_engine_name"}],attrs:{id:"select"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected_search_engine_name=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("请选择")]),e._l(e.search_engines,function(t){return n("option",{key:t.name},[e._v(e._s(t.name))])})],2),n("input",{attrs:{id:"submit",value:"搜索",type:"submit"}})])])},z=[],C=(n("7f7f"),{data:function(){return{search_engines:this.store.search_engines,selected_search_engine_name:this.store.search_engines[0].name}},computed:{selected_search_engine:function(){for(var e=0;e<this.search_engines.length;e++)if(this.search_engines[e].name===this.selected_search_engine_name)return this.search_engines[e]}}}),T=C,D=(n("08bf"),Object(g["a"])(T,N,z,!1,null,"708c6cc5",null));D.options.__file="SearchBar.vue";var J=D.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{attrs:{id:"sites",frame:"box",rules:"all",cellspacing:"6"}},[n("tbody",e._l(e.sites_list,function(t){return n("tr",{key:t.id},e._l(t,function(t){return n("td",{key:t.name,on:{click:function(n){e.jump(t.url)}}},[n("a",{attrs:{href:t.url}},[n("span",[e._v(e._s(t.name))])])])}))}))])},A=[],B={data:function(){return{sites_raw:this.store.sites,sites_tr_length:this.store.sites_tr_length}},methods:{jump:function(e){window.location.href=e}},computed:{sites_list:function(){for(var e=this.sites_raw,t=[],n=[],s=0;s<e.length;s++)(s+1)%this.sites_tr_length===0?(n.push(e[s]),t.push(n),n=[]):(n.push(e[s]),s+1===e.length&&t.push(n));return console.log(t),t}}},I=B,F=(n("ca68"),Object(g["a"])(I,P,A,!1,null,"bc440912",null));F.options.__file="SiteTable.vue";var H=F.exports,R={name:"Home",components:{TopBar:$,SearchBar:J,SiteTable:H}},M=R,L=(n("a6c5"),Object(g["a"])(M,x,k,!1,null,null,null));L.options.__file="index.vue";var G=L.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center"}},[n("div",{staticClass:"inline"},[n("router-link",{attrs:{to:"/"}},[n("button",[e._v("Home")])])],1),n("div",{staticClass:"inline"},[n("button",{on:{click:e.download}},[e._v("导出")]),n("router-link",{attrs:{to:"/upload"}},[n("button",[e._v("导入")])]),n("button",{attrs:{disabled:e.disabled},on:{click:e.save}},[e._v("保存")])],1),n("h1",[e._v("Editor")]),n("SitesTrLength",{attrs:{sites_tr_length:e.sites_tr_length},on:{"sites-tr-length-up":e.sites_tr_length_up,"sites-tr-length-down":e.sites_tr_length_down}}),n("SearchEngines",{attrs:{search_engines:e.search_engines}}),n("Sites",{attrs:{sites:e.sites}})],1)},W=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sites_tr_length"}},[n("h2",[e._v("sites_tr_length（每行显示几个站点）")]),n("hr"),e._v("\n"+e._s(e.sites_tr_length)+"\n"),n("button",{on:{click:e.sites_tr_length_down}},[e._v("-")]),n("button",{on:{click:e.sites_tr_length_up}},[e._v("+")]),n("hr")])},X=[],Y=(n("c5f6"),{props:{sites_tr_length:Number},methods:{sites_tr_length_up:function(){this.$emit("sites-tr-length-up")},sites_tr_length_down:function(){this.$emit("sites-tr-length-down")}}}),K=Y,Q=(n("cbe6"),Object(g["a"])(K,V,X,!1,null,null,null));Q.options.__file="SitesTrLength.vue";var Z=Q.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ses"}},[n("h2",[e._v("search_engines(搜索引擎)")]),n("p",[e._v("Ps: 第一个是默认的")]),n("hr"),n("table",{attrs:{id:"ses-editor"}},[e._m(0),n("tbody",e._l(e.search_engines,function(t,s){return n("SearchEngine",{key:e.key(s),attrs:{id:s,length:e.ses_length,"se-init":t},on:{"se-name-change":e.se_name_change,"se-url-change":e.se_url_change,"se-query-change":e.se_query_change,"se-up":e.se_up,"se-down":e.se_down,"se-remove":e.se_remove}})}))]),n("p",[n("button",{on:{click:function(t){e.se_add()}}},[e._v("+")])]),n("hr")])},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("td",[e._v("下标")]),n("td",[e._v("名字")]),n("td",[e._v("链接")]),n("td",[e._v("查询参数名")]),n("td",[e._v("上移")]),n("td",[e._v("下移")]),n("td",[e._v("点击删除")])])}],ne=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v(e._s(e.id))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.se_name,expression:"se_name"}],attrs:{size:e.size_name,placeholder:"编辑名字"},domProps:{value:e.se_name},on:{input:function(t){t.target.composing||(e.se_name=t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.se_url,expression:"se_url"}],attrs:{size:e.size_url,placeholder:"编辑链接"},domProps:{value:e.se_url},on:{input:function(t){t.target.composing||(e.se_url=t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.se_query,expression:"se_query"}],attrs:{size:e.size_query,placeholder:"编辑查询参数"},domProps:{value:e.se_query},on:{input:function(t){t.target.composing||(e.se_query=t.target.value)}}})]),n("td",[n("button",{staticClass:"se-up",attrs:{disabled:e.disabled_up},on:{click:e.se_up_by_idx}},[e._v("Up")])]),n("td",[n("button",{staticClass:"se-dwon",attrs:{disabled:e.disabled_down},on:{click:e.se_down_by_idx}},[e._v("Down")])]),n("td",[n("button",{staticClass:"se-x",on:{click:e.se_remove_by_idx}},[e._v("x")])])])}),se=[],ie={props:{id:Number,length:Number,seInit:Object},data:function(){return{se_name:this.seInit.name,se_url:this.seInit.url,se_query:this.seInit.query}},computed:{size_name:function(){return this.se_name.length+1},size_url:function(){return this.se_url.length},size_query:function(){return this.se_query.length},disabled_up:function(){return this.id<=0},disabled_down:function(){return this.id+1>=this.length}},watch:{se_name:function(e){this.$emit("se-name-change",e,this.id)},se_url:function(e){this.$emit("se-url-change",e,this.id)},se_query:function(e){this.$emit("se-query-change",e,this.id)}},methods:{se_remove_by_idx:function(){this.$emit("se-remove",this.id)},se_up_by_idx:function(){this.$emit("se-up",this.id)},se_down_by_idx:function(){this.$emit("se-down",this.id)}}},re=ie,ae=(n("902e"),Object(g["a"])(re,ne,se,!1,null,"1350c438",null));ae.options.__file="SearchEngine.vue";var oe=ae.exports,ue={data:function(){return{keys:this.search_engines.map(function(e,t,n){return""+n.length+t})}},props:{search_engines:Array},components:{SearchEngine:oe},computed:{ses_length:function(){return this.search_engines.length}},methods:{key:function(e){return this.keys[e]},se_add:function(){this.search_engines.push({name:"",url:"",query:""})},se_remove:function(e){console.log("Remove",e," --\x3e ",this.search_engines[e].name),this.search_engines.splice(e,1),console.log("Remove-after",e," --\x3e ",this.search_engines[e].name)},se_name_change:function(e,t){console.log(t,"\n se-name",this.search_engines[t].name," --\x3e ",e),this.search_engines[t].name=e},se_url_change:function(e,t){console.log(t,"\n se-url",this.search_engines[t].url," --\x3e ",e),this.search_engines[t].url=e},se_query_change:function(e,t){console.log(t,"\n se-query",this.search_engines[t].query," --\x3e ",e),this.search_engines[t].query=e},se_up:function(e){if(e>0){var t=this.search_engines[e];this.search_engines.splice(e,1,this.search_engines[e-1]),this.search_engines.splice(e-1,1,t);for(var n=0;n<this.keys.length;n++)this.keys.splice(n,1,""+this.search_engines.length+n+"up"+e+(new Date).valueOf())}},se_down:function(e){if(e+1<this.search_engines.length){var t=this.search_engines[e+1];this.search_engines.splice(e+1,1,this.search_engines[e]),this.search_engines.splice(e,1,t);for(var n=0;n<this.keys.length;n++)this.keys.splice(n,1,""+this.search_engines.length+n+"down"+e+(new Date).valueOf())}}}},le=ue,ce=(n("f865"),Object(g["a"])(le,ee,te,!1,null,"19f75dc7",null));ce.options.__file="SearchEngines.vue";var he=ce.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sites"}},[n("h2",[e._v("sites(站点)")]),n("hr"),n("table",{attrs:{id:"sites-editor"}},[e._m(0),n("tbody",e._l(e.sites,function(t,s){return n("Site",{key:e.key(s),attrs:{id:s,length:e.sites_length,"site-init":t},on:{"site-remove":e.site_remove,"site-name-change":e.site_name_change,"site-url-change":e.site_url_change,"site-up":e.site_up,"site-down":e.site_down}})}))]),n("p",[n("button",{on:{click:function(t){e.site_add()}}},[e._v("+")])]),n("hr")])},de=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("td",[e._v("下标")]),n("td",[e._v("名字")]),n("td",[e._v("链接")]),n("td",[e._v("上移")]),n("td",[e._v("下移")]),n("td",[e._v("点击删除")])])}],ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v(e._s(e.id))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.site_name,expression:"site_name"}],attrs:{size:e.size_name,placeholder:"编辑名字"},domProps:{value:e.site_name},on:{input:function(t){t.target.composing||(e.site_name=t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.site_url,expression:"site_url"}],attrs:{size:e.size_url,placeholder:"编辑链接"},domProps:{value:e.site_url},on:{input:function(t){t.target.composing||(e.site_url=t.target.value)}}})]),n("td",[n("button",{staticClass:"site-up",attrs:{disabled:e.disabled_up},on:{click:e.site_up_by_idx}},[e._v("Up")])]),n("td",[n("button",{staticClass:"site-dwon",attrs:{disabled:e.disabled_down},on:{click:e.site_down_by_idx}},[e._v("Down")])]),n("td",[n("button",{staticClass:"site-x",on:{click:e.site_remove_by_idx}},[e._v("x")])])])},pe=[],fe={data:function(){return{site_name:this.siteInit.name,site_url:this.siteInit.url}},computed:{size_name:function(){return this.site_name.length+1},size_url:function(){return this.site_url.length},disabled_up:function(){return this.id<=0},disabled_down:function(){return this.id+1>=this.length}},props:{id:Number,length:Number,siteInit:Object},watch:{site_name:function(e){this.$emit("site-name-change",e,this.id)},site_url:function(e){this.$emit("site-url-change",e,this.id)}},methods:{site_remove_by_idx:function(){this.$emit("site-remove",this.id)},site_up_by_idx:function(){this.$emit("site-up",this.id)},site_down_by_idx:function(){this.$emit("site-down",this.id)}}},me=fe,ve=(n("9edb"),Object(g["a"])(me,ge,pe,!1,null,"5daf1558",null));ve.options.__file="Site.vue";var be=ve.exports,we={data:function(){return{keys:this.sites.map(function(e,t,n){return""+n.length+t})}},props:{sites:Array},components:{Site:be},computed:{sites_length:function(){return this.sites.length}},methods:{key:function(e){return this.keys[e]},site_add:function(){this.sites.push({name:"",url:""})},site_remove:function(e){console.log("Remove",e," --\x3e ",this.sites[e].name),this.sites.splice(e,1)},site_name_change:function(e,t){console.log(t,"\n site-name ",this.sites[t].name," --\x3e ",e),this.sites[t].name=e},site_url_change:function(e,t){console.log(t,"\n site-url",this.sites[t].url," --\x3e ",e),this.sites[t].url=e},site_up:function(e){if(e>0){var t=this.sites[e];this.sites.splice(e,1,this.sites[e-1]),this.sites.splice(e-1,1,t);for(var n=0;n<this.keys.length;n++)this.keys.splice(n,1,""+this.sites.length+n+"up"+e+(new Date).valueOf())}},site_down:function(e){if(e+1<this.sites.length){var t=this.sites[e+1];this.sites.splice(e+1,1,this.sites[e]),this.sites.splice(e,1,t);for(var n=0;n<this.keys.length;n++)this.keys.splice(n,1,""+this.sites.length+n+"down"+e+(new Date).valueOf())}}}},ye=we,xe=(n("0fd0"),Object(g["a"])(ye,_e,de,!1,null,"e3c172fe",null));xe.options.__file="Sites.vue";var ke=xe.exports;function Se(e){return JSON.parse(JSON.stringify(e))}function Oe(e,t){return JSON.stringify(e)===JSON.stringify(t)}var Ee={data:function(){return{sites:Se(this.store.sites),sites_tr_length:this.store.sites_tr_length,search_engines:Se(this.store.search_engines),sites_unchange:!0,sites_tr_length_unchange:!0,search_engines_unchange:!0}},components:{SitesTrLength:Z,SearchEngines:he,Sites:ke},methods:{sites_tr_length_up:function(){this.sites_tr_length++},sites_tr_length_down:function(){this.sites_tr_length--},save:function(){console.log("save()"),this.store.update(this.sites_tr_length,this.sites,this.search_engines),this.store.save_config_to_localStorage(),alert("通知：保存成功")},download:function(){var e=JSON.stringify(this.store.copy()),t=new Blob([e],{type:"application/json;charset=utf-8"}),n=new Date,s="Start-配置文件."+n.toLocaleString()+".json";this.FileSaver.saveAs(t,s)}},watch:{sites_tr_length:{handler:function(e,t){this.sites_tr_length_unchange=this.sites_tr_length===this.store.sites_tr_length,console.log("sites_tr_length_unchange",this.sites_tr_length_unchange)}},sites:{handler:function(e,t){this.sites_unchange=Oe(this.sites,this.store.sites),console.log("sites_unchange",this.sites_unchange)},deep:!0},search_engines:{handler:function(e,t){this.search_engines_unchange=Oe(this.search_engines,this.store.search_engines),console.log("search_engines_unchange",this.search_engines_unchange)},deep:!0}},computed:{disabled:function(){return this.sites_tr_length_unchange&&this.sites_unchange&&this.search_engines_unchange}}},je=Ee,qe=(n("b65a"),Object(g["a"])(je,U,W,!1,null,"10da629c",null));qe.options.__file="index.vue";var $e=qe.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center"}},[n("div",{staticClass:"inline"},[n("router-link",{attrs:{to:"/"}},[n("button",[e._v("Home")])])],1),n("div",{staticClass:"inline"},[n("button",{attrs:{id:"reset"},on:{click:e.reset}},[e._v("重置")]),n("router-link",{attrs:{to:"/editor"}},[n("button",[e._v("Editor")])])],1),n("h1",[e._v("导入配置文件")]),n("p"),n("h2",[e._v("从本地文件导入")]),n("form",{attrs:{id:"upload"}},[n("input",{attrs:{type:"file"},on:{change:e.change}}),n("input",{attrs:{type:"button",value:"保存",disabled:e.disabled},on:{click:e.load}})]),n("p"),n("p"),n("p"),n("h2",[e._v("从远程链接导入")]),e._m(0),n("form",{attrs:{id:"upload"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"text",size:e.size},domProps:{value:e.url},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.load_from_url(t):null},input:function(t){t.target.composing||(e.url=t.target.value)}}}),n("input",{attrs:{type:"button",value:"保存"},on:{click:e.load_from_url}})])])},ze=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("如果从其它服务器加载，要注意"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS"}},[e._v("跨域")])])}],Ce=null,Te={data:function(){return{disabled:!0,url:""}},computed:{size:function(){return this.url.length+1<"从远程链接导入".length?"从远程链接导入".length:this.url.length+1}},methods:{reset:function(){var e=confirm("确认重置？");console.log("确认重置？",e),!0===e?(this.store.reset(),alert("通知：重置成功")):!1===e||alert("错误：Confirm()返回的不是Bool, 请尝试使用其它浏览器导出再导入。")},change:function(e){try{1==e.target.files.length&&(this.disabled=!1),console.log(e.target.files[0]),Ce=e.target.files[0]}catch(e){this.disabled=!0,console.log("event.target.files.length: ",e)}},load:function(){console.log("load()");var e=new FileReader,t=this;e.onload=function(e){try{var n=JSON.parse(e.target.result);t.store.update(n.sites_tr_length,n.sites,n.search_engines),t.store.save_config_to_localStorage(),alert("通知：保存成功")}catch(t){console.log(e.target.result),console.log(t),alert("解析错误：配置文件不是正确的的 JSON")}},e.onerror=function(){console.log(error),alert("配置文件读取错误")},e.readAsText(Ce)},load_from_url:function(){console.log("load_from_url()");var e=this;this.http.get(this.url).then(function(t){e.store.update(t.data.sites_tr_length,t.data.sites,t.data.search_engines),e.store.save_config_to_localStorage(),alert("通知：保存成功")}).catch(function(t){alert("保存失败: ",t.message),console.log(e.url),console.log(t)})}}},De=Te,Je=(n("60b1"),Object(g["a"])(De,Ne,ze,!1,null,"2b97d18f",null));Je.options.__file="index.vue";var Pe=Je.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{align:"center"}},[n("h1",[e._v("404 Not Found")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/editor"}},[e._v("Editor")])],1)])])},Be=[],Ie={components:{}},Fe=Ie,He=(n("28fb"),Object(g["a"])(Fe,Ae,Be,!1,null,null,null));He.options.__file="NotFound.vue";var Re=He.exports;s["a"].use(y["a"]);var Me=new y["a"]({routes:[{path:"/",name:"Home",component:G,alias:"/home"},{path:"/editor",name:"Editor",component:$e},{path:"/upload",name:"Upload",component:Pe},{path:"*",name:"404",component:Re}]}),Le="Start.Config",Ge={sites:[{name:"ArchWiki",url:"https://wiki.archlinux.org/index.php/List_of_applications_%28%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%29"},{name:"维基百科",url:"https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5"},{name:"Reddit",url:"https://www.reddit.com/"},{name:"推酷",url:"https://www.tuicool.com/a/"},{name:"Ruby China",url:"https://ruby-china.org/"},{name:"W3S",url:"http://www.w3school.com.cn/index.html"},{name:"MDN",url:"https://developer.mozilla.org/zh-CN/"},{name:"Vue.js",url:"https://cn.vuejs.org/"},{name:"Go",url:"https://golang.google.cn/pkg/"},{name:"StudyGo",url:"https://studygolang.com/"},{name:"Sass",url:"https://www.sass.hk/"},{name:"Rust",url:"https://www.rust-lang.org/zh-CN/documentation.html"},{name:"crates.io",url:"https://crates.io/"},{name:"Docs.rs",url:"https://docs.rs/"},{name:"Rust.cc",url:"https://rust.cc/"},{name:"GitHub",url:"https://github.com/biluohc"},{name:"V2EX",url:"https://www.v2ex.com/"},{name:"知乎",url:"https://www.zhihu.com/"},{name:"百度贴吧",url:"http://tieba.baidu.com/home/main?id=155a7773707378696e678148&suofr=userbar"},{name:"中关村",url:"http://www.zol.com.cn/"},{name:"YouTube",url:"https://www.youtube.com/"},{name:"网易云",url:"http://music.163.com/#"},{name:"哔哩哔哩",url:"http://www.bilibili.com/"},{name:"必应翻译",url:" https://www.bing.com/translator"},{name:"搜狗翻译",url:"https://fanyi.sogou.com/"},{name:"京东商城",url:"http://www.jd.com/"},{name:"淘宝网",url:"https://www.taobao.com/"},{name:"亚马逊",url:"http://www.amazon.cn/"},{name:"谷歌图片",url:"https://www.google.com/imghp?hl=zh-CN"},{name:"百度图片",url:"http://image.baidu.com/"},{name:"TinEye",url:"https://tineye.com/"},{name:"搜狗图片",url:"http://pic.sogou.com/ "},{name:"鸠摩搜索",url:"https://www.jiumodiary.com/"},{name:"盘搜搜",url:"http://www.pansoso.com/#fromapp"},{name:"淘林网",url:"http://www.cntaolin.com/"}],sites_tr_length:5,search_engines:[{name:"百度",url:"https://www.baidu.com/s",query:"word"},{name:"必应",url:"https://cn.bing.com/search",query:"q"},{name:"谷歌",url:"https://www.google.com/search",query:"q"},{name:"Duck",url:"https://duckduckgo.com/",query:"q"},{name:"搜狗",url:"https://www.sogou.com/web",query:"query"},{name:"GitHub",url:"https://github.com/search?utf8=✓",query:"q"},{name:"openSUSE",url:"https://software.opensuse.org/search?utf8=✓",query:"q"}],copy:function(){var e={};return e.sites=this.sites,e.sites_tr_length=this.sites_tr_length,e.search_engines=this.search_engines,e},update:function(e,t,n){this.sites_tr_length=e;for(var s=0;s<t.length;s++)this.sites.splice(s,1,t[s]);this.sites.length=t.length;for(s=0;s<n.length;s++)this.search_engines.splice(s,1,n[s]);this.search_engines.length=n.length},save_config_to_localStorage:function(){var e=this.copy();e.date=new Date;try{localStorage.setItem(Le,JSON.stringify(e))}catch(e){console.log("save_config_to_localStorage_failed: ",e)}},read_config_from_localStorage:function(){var e=localStorage.getItem(Le),t=JSON.parse(e);if(void 0!==t&&null!==t&&t.date)return this.update(t.sites_tr_length,t.sites,t.search_engines),!0},bakeup:function(){this.rawJson=JSON.stringify(this.copy())},reset:function(){var e=JSON.parse(this.rawJson);this.update(e.sites_tr_length,e.sites,e.search_engines),this.save_config_to_localStorage()}};Ge.bakeup(),Ge.read_config_from_localStorage()||Ge.save_config_to_localStorage();var Ue=Ge;s["a"].config.productionTip=!1,s["a"].prototype.http=r.a,s["a"].prototype.store=Ue,s["a"].prototype.FileSaver=o.a,new s["a"]({router:Me,render:function(e){return e(w)}}).$mount("#app")},5870:function(e,t,n){"use strict";var s=n("0c26"),i=n.n(s);i.a},"60b1":function(e,t,n){"use strict";var s=n("9f09"),i=n.n(s);i.a},"62ca":function(e,t,n){},"694e":function(e,t,n){},7478:function(e,t,n){},"902e":function(e,t,n){"use strict";var s=n("2c2d"),i=n.n(s);i.a},"9be6":function(e,t,n){},"9edb":function(e,t,n){"use strict";var s=n("9be6"),i=n.n(s);i.a},"9f09":function(e,t,n){},a6c5:function(e,t,n){"use strict";var s=n("7478"),i=n.n(s);i.a},ad4b:function(e,t,n){},afb0:function(e,t,n){},b65a:function(e,t,n){"use strict";var s=n("afb0"),i=n.n(s);i.a},b9be:function(e,t,n){"use strict";var s=n("f7d1"),i=n.n(s);i.a},bcaf:function(e,t,n){},c21b:function(e,t,n){},ca68:function(e,t,n){"use strict";var s=n("e1eb"),i=n.n(s);i.a},cbe6:function(e,t,n){"use strict";var s=n("62ca"),i=n.n(s);i.a},e1eb:function(e,t,n){},f7d1:function(e,t,n){},f865:function(e,t,n){"use strict";var s=n("bcaf"),i=n.n(s);i.a}});
//# sourceMappingURL=app.00dc17d9.js.map