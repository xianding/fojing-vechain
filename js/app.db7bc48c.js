(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function s(t){return u.p+"js/"+({info:"info",mydata:"mydata",updata:"updata"}[t]||t)+"."+{info:"e1f16b30",mydata:"a85b64cd",updata:"c9558739"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={mydata:1,updata:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({info:"info",mydata:"mydata",updata:"updata"}[t]||t)+"."+{info:"31d6cfe0",mydata:"e59fd44e",updata:"cd492c03"}[t]+".css",i=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"divAll"}},[n("div",{attrs:{id:"divPage"}},[n("div",{attrs:{id:"divMiddle"}},[n("div",{attrs:{id:"divTop"}},[n("div",{attrs:{id:"BlogTitle"}},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.title))])],1),n("div",{attrs:{id:"BlogSubTitle"}},[t._v(" 所有数据基于Vechain保存 ")])]),n("div",{attrs:{id:"divMain"}},[n("div",{attrs:{id:"path"}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),n("router-link",{attrs:{to:"/mydata"}},[t._v("我的数据")]),n("router-link",{attrs:{to:"/updata"}},[t._v("文章上链")])],1),n("div",{staticClass:"post-body"},[n("router-view")],1)])])])])])},i=[],o=n("c0d6"),s={name:"home",store:o["a"],data:function(){return{title:o["a"].state.title}}},u=s,c=(n("5c0b"),n("2877")),l=Object(c["a"])(u,a,i,!1,null,null,null),d=l.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("h2",[t._v("已上链佛经 - "),n("a",{staticClass:"BlogSubTitle",attrs:{href:t.link,target:"_blank"}},[t._v("区块地址")])]),n("div",{staticClass:"fojing"},t._l(t.list,function(e,r){return n("li",{key:r},[n("a",{attrs:{target:"_blank"},on:{click:function(e){return t.golink(t.txid[r])}}},[t._v(t._s(e.title))])])}),0)])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:n("b640")}})])}],v=n("9cae"),m=v["a"],g=Object(c["a"])(m,p,h,!1,null,"aa861458",null),y=g.exports;r["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"home",component:y,meta:{title:"佛经在线 - Vechain"}},{path:"/updata",name:"updata",component:function(){return n.e("updata").then(n.bind(null,"9551"))},meta:{title:"数据上链 - Vechain"}},{path:"/mydata",name:"mydata",component:function(){return n.e("mydata").then(n.bind(null,"d125"))},meta:{title:"我的数据 - Vechain"}},{path:"/info/:id",name:"info",component:function(){return n.e("info").then(n.bind(null,"13ac"))},meta:{title:"Info - Vechain"}}]});r["a"].config.productionTip=!1,new r["a"]({router:b,store:o["a"],render:function(t){return t(d)}}).$mount("#app"),b.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()})},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"9cae":function(t,e,n){"use strict";(function(t){n("6b54"),n("ac4d"),n("8a81"),n("ac6a");var r=n("c0d6"),a=n("f90c"),i=n.n(a);e["a"]={name:"home",store:r["a"],data:function(){return{error:null,title:r["a"].state.title,link:"https://explore.veforge.com/accounts/"+r["a"].state.sender,sender:r["a"].state.sender,recipient:r["a"].state.data1,page:0,pageSize:256,list:[],txid:[]}},created:function(){this.error=null,this.page=0,this.list=[],this.txid=[],this.reload()},watch:{page:function(t){this.reload()}},methods:{golink:function(t){this.$router.push("/info/"+t)},reload:function(){var e=this,n=this.page*this.pageSize;try{var r=connex.thor.filter("transfer");r.criteria([{sender:this.sender,recipient:this.recipient}]),r.apply(n,this.pageSize).then(function(n){var r=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var c=s.value;if(-1===e.txid.indexOf(c.meta.txID)){e.txid.push(c.meta.txID);try{var l=connex.thor.transaction(c.meta.txID);l.get().then(function(n){if(n.clauses){n=n.clauses[0].data.slice(2);var r=new t(n,"hex").toString("utf8");i.a.isJSON(r)&&(r=JSON.parse(r),r.hasOwnProperty("title")&&r.hasOwnProperty("desc")&&r.hasOwnProperty("info")&&"佛经在线"===r.info&&e.list.push(r))}})}catch(d){e.error=d}}}}catch(d){a=!0,o=d}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}n.length===e.pageSize&&e.page++})}catch(a){this.error="从主网拉取交易列表失败，请检查网络是否正常"}}}}}).call(this,n("b639").Buffer)},b640:function(t,e,n){t.exports=n.p+"img/logo.3ff79616.jpg"},c0d6:function(t,e,n){"use strict";var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{title:"佛经在线",sender:"0xF62871c5833943c8490317763bF60F3Ec1290C6A",data1:"0x7777777777777777777777777777777777777777",data2:"0x4444444444444444444444444444444444444444",signer:""},mutations:{getsigner:function(){var t=this;if(!this.state.signer){var e=connex.vendor.sign("cert"),n="授权获取您的钱包地址,来源佛经在线;";e.request({purpose:"identification",payload:{type:"text",content:n}}).then(function(e){t.state.signer=e.annex.signer})}}},actions:{}})}});
//# sourceMappingURL=app.db7bc48c.js.map