(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(t,e,n){var content=n(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("7b4470b4",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n(227)},251:function(t,e,n){(e=n(22)(!1)).push([t.i,'.container[data-v-015ee0e2]{max-width:720px;margin:5rem auto}a[data-v-015ee0e2]{color:inherit}a[data-v-015ee0e2]:hover{text-decoration:none}a[data-v-015ee0e2]:before{content:"";position:absolute;width:100%;height:2px;background:currentColor;top:90%;left:0;pointer-events:none;transform-origin:100% 50%;transform:scaleX(0);transition:transform .3s}a[data-v-015ee0e2]:hover:before{transform-origin:0 50%;transform:scaleX(1)}h1[data-v-015ee0e2]{font-size:2rem}',""]),t.exports=e},291:function(t,e,n){"use strict";n.r(e);n(33);var r=n(2),o={head:function(){return{title:"Blog — Kenta Kudo"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{pages:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(n(250),n(32)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"container"},[n("h1",{staticClass:"mb-4"},[t._v("✍️")]),t._v(" "),t._l(t.pages,(function(e){return n("article",{key:e.slug,staticClass:"mb-4"},[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("h2",[n("nuxt-link",{staticClass:"position-relative",attrs:{to:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),n("time",[t._v(t._s(t.formatDate(e.createdAt)))])]),t._v(" "),n("p",[t._v(t._s(e.description))])])})),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"d-flex justify-content-between"},[n("nuxt-link",{staticClass:"position-relative",attrs:{to:"/"}},[t._v("home")])],1)],2)}),[],!1,null,"015ee0e2",null);e.default=component.exports}}]);