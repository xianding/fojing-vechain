(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mydata"],{"157a":function(t,e,i){"use strict";var n=i("2419"),r=i.n(n);r.a},2419:function(t,e,i){},6287:function(t,e,i){"use strict";(function(t){i("6b54"),i("ac4d"),i("8a81"),i("ac6a");var n=i("c0d6"),r=i("f90c"),a=i.n(r);e["a"]={name:"mydata",store:n["a"],data:function(){return{error:null,sender:n["a"].state.sender,recipient:n["a"].state.data2,page:0,pageSize:256,list:[],txid:[]}},computed:{signer:function(){return this.$store.state.signer}},mounted:function(){this.error=null,this.page=0,this.list=[],this.txid=[],n["a"].commit("getsigner"),this.read()},watch:{signer:function(t){this.error=null,this.page=0,this.list=[],this.txid=[],this.read()},page:function(t){this.reload()}},methods:{read:function(){this.signer&&this.reload()},golink:function(t){this.$router.push("/info/"+t)},reload:function(){var e=this,i=this.page*this.pageSize;try{var n=connex.thor.filter("transfer");n.criteria([{sender:this.signer,recipient:this.recipient}]),n.apply(i,this.pageSize).then(function(i){var n=!0,r=!1,s=void 0;try{for(var o,c=i[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var l=o.value;if(-1===e.txid.indexOf(l.meta.txID)){e.txid.push(l.meta.txID);try{var u=connex.thor.transaction(l.meta.txID);u.get().then(function(i){if(i.clauses){i=i.clauses[0].data.slice(2);var n=new t(i,"hex").toString("utf8");a.a.isJSON(n)&&(n=JSON.parse(n),n.hasOwnProperty("title")&&n.hasOwnProperty("desc")&&n.hasOwnProperty("info")&&"佛经在线"===n.info&&e.list.push(n))}})}catch(h){e.error=h}}}}catch(h){r=!0,s=h}finally{try{n||null==c.return||c.return()}finally{if(r)throw s}}i.length===e.pageSize&&e.page++})}catch(r){this.error="从主网拉取交易列表失败，请检查网络是否正常"}}}}}).call(this,i("b639").Buffer)},d125:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mydata"},[i("div",{staticClass:"fojing"},[i("p",{staticStyle:{"text-align":"center"}},[t._v("欢迎您："+t._s(t.signer))]),i("p",{staticStyle:{"text-align":"center"}},[t._v("下面为您的链上已确认数据；如无数据，请确定是否上传过数据或等待主网确认( < 10秒 )")]),t.signer?i("div",[t.error?i("div",[t._v("\n          "+t._s(t.error)+"\n        ")]):i("div",t._l(t.list,function(e,n){return i("li",{key:n},[i("a",{attrs:{target:"_blank"},on:{click:function(e){return t.golink(t.txid[n])}}},[t._v(t._s(e.title))])])}),0)]):i("div",[t._v("\n      请先授权地址访问权限\n    ")])])])},r=[],a=i("6287"),s=a["a"],o=(i("157a"),i("2877")),c=Object(o["a"])(s,n,r,!1,null,"1cab0b5c",null);e["default"]=c.exports}}]);
//# sourceMappingURL=mydata.a85b64cd.js.map