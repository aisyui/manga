(function(s){function t(t){for(var a,c,r=t[0],i=t[1],l=t[2],f=0,b=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=i[a]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var s,t=0;t<o.length;t++){for(var e=o[t],a=!0,r=1;r<e.length;r++){var i=e[r];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),s=c(c.s=e[0]))}return s}var a={},n={app:0},o=[];function c(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=s,c.c=a,c.d=function(s,t,e){c.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:e})},c.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},c.t=function(s,t){if(1&t&&(s=c(s)),8&t)return s;if(4&t&&"object"===typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var a in s)c.d(e,a,function(t){return s[t]}.bind(null,a));return e},c.n=function(s){var t=s&&s.__esModule?function(){return s["default"]}:function(){return s};return c.d(t,"a",t),t},c.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=i;o.push([0,"chunk-vendors"]),e()})({0:function(s,t,e){s.exports=e("56d7")},4678:function(s,t,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(s){var t=o(s);return e(t)}function o(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=o,s.exports=n,n.id="4678"},"48b9":function(s,t,e){},"56d7":function(s,t,e){"use strict";e.r(t);var a=e("2b0e"),n=function(){var s=this,t=s._self._c;return t("div",{attrs:{id:"app"}},[t("hooper",{attrs:{settings:s.hooperSettings}},[s._l(s.products,(function(e,a){return t("slide",{key:e},[s.loading?t("div",{staticClass:"loading"},[t("i",{staticClass:"fa-solid fa-spinner fa-spin-pulse"})]):s._e(),t("img",{attrs:{src:s.url+"manga/"+a+".webp"},on:{load:s.load}}),t("div",{staticClass:"page_n"},[t("a",{attrs:{href:"/"}},[t("span",{staticClass:"icon-ai"})]),s._v(" "+s._s(e))])])})),t("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t("hooper-progress",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2),t("div",{staticClass:"page"},[t("div",{staticClass:"page_data"},[t("table",[s._m(0),t("tbody",[t("tr",[t("th",{attrs:{scope:"row"}},[t("a",{attrs:{href:this.url+this.s_a}},[t("img",{attrs:{src:s.url+"manga/"+this.s_a+".webp"},on:{click:function(t){return s.page_run(s.s_a)}}})])]),t("td",[s._v("0.0")])])]),t("tbody",[t("tr",[t("th",{attrs:{scope:"row"}},[t("a",{attrs:{href:this.url+this.s_b}},[t("img",{attrs:{src:s.url+"manga/"+this.s_b+".webp"},on:{click:function(t){return s.page_run(s.s_a)}}})])]),t("td",[s._v("0.1")])])])])])]),0==s.comment_open?t("div",{staticClass:"bsky_comment"},[t("span",{staticClass:"comment"},[s.comment_first.text?t("p",{staticClass:"comment-body"},[s.comment_first.avatar?t("img",{staticClass:"comment",attrs:{src:"/icon/"+s.comment_first.did.replace("did:plc:","")+".jpg"}}):s._e(),s._v(" "),s.comment_first.handle?t("span",{staticClass:"comment-time"},[s._v(s._s(s.moment(s.comment_first.updated_at)))]):s._e(),s._v(" "),s.comment_first.handle?t("span",{staticClass:"comment-handle"},[t("a",{attrs:{href:s.comment_first.bsky_url}},[s._v("@"+s._s(s.comment_first.handle))])]):s._e(),t("span",{staticClass:"comment-text"},[s._v(s._s(s.comment_first.text))])]):s._e()]),t("div",{staticClass:"comment_open"},[t("button",{staticClass:"comment_open",on:{click:function(t){s.comment_open=!s.comment_open}}},[t("i",{staticClass:"fa-solid fa-chevron-down"})])])]):t("div",{staticClass:"bsky_comment"},[s._l(s.api_json.data,(function(e){return t("span",{staticClass:"comment"},[e.text?t("p",{staticClass:"comment-body"},[e.avatar?t("img",{staticClass:"comment",attrs:{src:"/icon/"+e.did.replace("did:plc:","")+".jpg"}}):s._e(),s._v(" "),e.handle?t("span",{staticClass:"comment-time"},[s._v(s._s(s.moment(e.updated_at)))]):s._e(),s._v(" "),e.handle?t("span",{staticClass:"comment-handle"},[t("a",{attrs:{href:e.bsky_url}},[s._v("@"+s._s(e.handle))])]):s._e(),t("span",{staticClass:"comment-text"},[s._v(s._s(e.text))])]):s._e()])})),t("div",{staticClass:"comment_open"},[t("button",{staticClass:"comment_open",on:{click:function(t){s.comment_open=!s.comment_open}}},[t("i",{staticClass:"fa-solid fa-chevron-up"})])])],2),t("div",{staticClass:"page_title"},[t("div",{staticClass:"page_data"},[t("table",[s._m(1),t("tbody",[t("tr",[t("th",{attrs:{scope:"row"}},[t("a",{attrs:{href:"https://yui.syui.ai"}},[t("img",{attrs:{src:"https://syui.ai/ai.png"},on:{click:function(t){return s.page_run(s.s_a)}}})])]),t("td",[s._v("yui")]),t("td",[s._v("不思議な力を持つアイのお話")]),t("td",[s._v("syui")])])])])])])],1)},o=[function(){var s=this,t=s._self._c;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[s._v("yui")]),t("th",{attrs:{scope:"col"}},[s._v("巻")])])])},function(){var s=this,t=s._self._c;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[t("span",{staticClass:"icon-ai"})]),t("th",{attrs:{scope:"col"}},[s._v("title")]),t("th",{attrs:{scope:"col"}},[s._v("body")]),t("th",{attrs:{scope:"col"}},[s._v("author")])])])}],c=e("7e04"),r=(e("955f"),e("cee4")),i=e("c1df"),l=e.n(i),d=21,f=window.location.pathname.split("/").slice(-1)[0],b={name:"App",components:{Hooper:c["a"],Slide:c["e"],HooperProgress:c["d"],HooperPagination:c["c"],HooperNavigation:c["b"]},data(){return{bsky_pds:"https://bsky.social/xrpc",bsky_handle:"yui.syui.ai",bsky_cursor:null,bsky_cid:"",bsky_json:null,api_url:null,api_json:null,comment_open:!1,comment_first:null,loading:!0,url:"/",s_a:0,s_b:2,s_c:41,s_d:51,s_e:60,products:[...Array(Number(d)).keys()],hooperSettings:{itemsToShow:1,centerMode:!0,initialSlide:f}}},methods:{moment(s){return l.a.utc(s).local().format("YYYY.MM.DD")},page_run(s){this.loc=s,this.hooperSettings.initialSlide=s},load(){this.loading=!1}},mounted(){"localhost:8080"===window.location.host||"192.168.11.12:8080"===window.location.host?this.api_url="/api/":("https:"!==location.protocol&&location.replace("https:"+location.href.substring(location.protocol.length)),this.api_url="https://api.syui.ai");let s=this.api_url+"/users/2/ma?itemsPerPage=4000";r["a"].get(s,{crossdomain:!0}).then(s=>{this.api_json=s,this.comment_first=this.api_json.data[0]})}},p=b,j=(e("f4bb"),e("2877")),u=Object(j["a"])(p,n,o,!1,null,null,null),m=u.exports;a["a"].config.productionTip=!1,new a["a"]({render:s=>s(m)}).$mount("#app")},f4bb:function(s,t,e){"use strict";e("48b9")}});
//# sourceMappingURL=app.js.map