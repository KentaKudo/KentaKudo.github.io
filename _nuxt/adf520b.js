(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{214:function(t,e,n){t.exports=n.p+"img/Profile.e599280.png"},215:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:r,data:data,children:o=[]}=e,{class:c,staticClass:l,style:style,staticStyle:h,attrs:d={},...m}=data;return n("svg",{class:[c,l],style:[style,h],attrs:Object.assign({width:"56",height:"56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),...m},o.concat([n("circle",{attrs:{cx:"28",cy:"28",r:"27",stroke:"#868E96","stroke-width":"2"}}),n("path",{attrs:{d:"M23 25l5 5 5-5",stroke:"#868E96","stroke-width":"2","stroke-linecap":"round"}})]))}}},216:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:r,data:data,children:o=[]}=e,{class:c,staticClass:l,style:style,staticStyle:h,attrs:d={},...m}=data;return n("svg",{class:[c,l],style:[style,h],attrs:Object.assign({width:"56",height:"56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),...m},o.concat([n("circle",{attrs:{cx:"28",cy:"28",r:"28",fill:"#343A40"}}),n("path",{attrs:{d:"M23 25l5 5 5-5",stroke:"#fff","stroke-width":"2","stroke-linecap":"round"}})]))}}},219:function(t,e,n){var map={"./img/Profile.png":214,"./img/Profile@2x.png":220,"./img/Profile@3x.png":221,"./img/ScrollDown.svg":215,"./img/ScrollDownHover.svg":216,"./img/blog/nft-potential-and-problems/blockchain.jpg":222,"./img/blog/quantum-computer-2021/electronic-chip.jpg":223};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=219},220:function(t,e,n){t.exports=n.p+"img/Profile@2x.ea9650c.png"},221:function(t,e,n){t.exports=n.p+"img/Profile@3x.266db99.png"},222:function(t,e,n){t.exports=n.p+"img/blockchain.b2f8ab0.jpg"},223:function(t,e,n){t.exports=n.p+"img/electronic-chip.c7a4326.jpg"},225:function(t,e,n){var content=n(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("083745fe",content,!0,{sourceMap:!1})},238:function(t,e,n){"use strict";n.r(e);var r={name:"TwitterShare",props:{title:String,hashtags:Array},head:function(){return{script:[{src:"https://platform.twitter.com/widgets.js",async:!0}]}},computed:{text:function(){return"".concat(this.title," by @___________k_k_")}}},o=n(32),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-text":this.text,"data-hashtags":(this.hashtags||[]).join(","),"data-related":"___________k_k_","data-show-count":"false"}},[this._v("Tweet")])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"use strict";n(225)},250:function(t,e,n){(e=n(22)(!1)).push([t.i,".container{max-width:720px;margin:5rem auto}time{color:#868e96}nav{border-radius:.25rem}nav h6{color:#868e96}nav ul{list-style-type:none;margin-bottom:0}nav a{color:#868e96}nav a:hover{color:inherit;text-decoration:none}h1{font-size:3rem;line-height:56px}h1,h2,h3,h4,h5,h6{font-weight:700}.nuxt-content h2,.nuxt-content h3,.nuxt-content h4,.nuxt-content h5,.nuxt-content h6{margin:32px auto 16px}img{width:100%;height:auto;margin-bottom:2rem}figcaption{font-size:.75rem;color:#868e96}",""]),t.exports=e},289:function(t,e,n){"use strict";n.r(e);n(33);var r=n(2),o=n(238),c="https://kentakudo.com",l={components:{TwitterShare:o.default},head:function(){var t="".concat(c).concat(this.page.path),meta=[{hid:"description",name:"description",content:this.page.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:t},{hid:"og:title",property:"og:title",content:this.page.title},{hid:"og:description",property:"og:description",content:this.page.description},{hid:"twitter:url",name:"twitter:url",content:t},{hid:"twitter:title",name:"twitter:title",content:this.page.title},{hid:"twitter:description",name:"twitter:description",content:this.page.description},{property:"article:published_time",content:this.page.createdAt},{property:"article:modified_time",content:this.page.updatedAt},{property:"article:tag",content:this.page.tags?this.page.tags.join(","):""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:"Kenta Kudo"},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:this.page.tags?this.page.tags.join(","):""}];return{title:this.page.title,meta:this.page.image?[].concat(meta,[{hid:"og:image",property:"og:image",content:"".concat(c).concat(n(219)("./img".concat(this.page.path,"/").concat(this.page.image.src)))},{hid:"twitter:image",name:"twitter:image",content:"".concat(c).concat(n(219)("./img".concat(this.page.path,"/").concat(this.page.image.src)))}]):meta,link:[{hid:"canonical",rel:"canonical",href:t}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.error,c=r.slug||"index",e.next=4,n("blog",c).fetch().catch((function(t){return o({statusCode:404,message:"Page not found"})}));case 4:return l=e.sent,e.abrupt("return",{page:l});case 6:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},h=(n(249),n(32)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"container"},[r("h1",[t._v(t._s(t.page.title))]),t._v(" "),r("time",{staticClass:"d-block mb-4"},[t._v(t._s(t.formatDate(t.page.createdAt)))]),t._v(" "),r("figure",{staticClass:"mb-5"},[t.page.image?r("img",{staticClass:"mb-1",attrs:{src:n(219)("./img"+t.page.path+"/"+t.page.image.src),alt:t.page.image.alt}}):t._e(),t._v(" "),r("figcaption",{staticClass:"text-center",domProps:{innerHTML:t._s(t.page.image.credit)}})]),t._v(" "),r("p",[t._v(t._s(t.page.description))]),t._v(" "),r("nav",{staticClass:"bg-light p-4 my-5"},[r("h6",[t._v("Table of Contents")]),t._v(" "),r("ul",{staticClass:"pl-3"},t._l(t.page.toc,(function(link){return r("li",{key:link.id,staticClass:"py-1",class:{"pl-0":2==link.depth,"pl-3":3==link.depth}},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)]),t._v(" "),r("nuxt-content",{attrs:{document:t.page}}),t._v(" "),r("hr"),t._v(" "),r("footer",{staticClass:"d-flex justify-content-between"},[r("TwitterShare",{attrs:{title:t.page.title,hashtags:t.page.tags}}),t._v(" "),r("nuxt-link",{attrs:{to:"/blog"}},[t._v("back")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TwitterShare:n(238).default})}}]);