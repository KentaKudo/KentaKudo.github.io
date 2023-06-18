(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{324:function(e,t,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("6f1da55a",content,!0,{sourceMap:!1})},326:function(e,t,n){"use strict";n.r(t);n(34),n(51);var r={name:"Card",props:{title:String,subtitle:String,description:String,startDate:String,endDate:String}},o=(n(333),n(50)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("li",{staticClass:"d-flex flex-column"},[t("h3",{staticClass:"mb-1"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"mb-3 d-flex justify-content-between"},[t("h4",[e._v(e._s(e.subtitle))]),e._v(" "),t("p",{staticClass:"text-primary mb-0"},[e._v(e._s(e.startDate)+" – "+e._s(e.endDate))])]),e._v(" "),t("p",{staticClass:"mb-0"},[e._v(e._s(e.description))])])}),[],!1,null,"6a8b0e4a",null);t.default=component.exports},333:function(e,t,n){"use strict";n(324)},334:function(e,t,n){var r=n(41)((function(i){return i[1]}));r.push([e.i,'h3[data-v-6a8b0e4a],h4[data-v-6a8b0e4a]{color:#343a40;font-family:"Permanent Marker",serif;font-weight:400;text-transform:uppercase}h3[data-v-6a8b0e4a]{font-size:1.75rem;line-height:2rem}h4[data-v-6a8b0e4a]{color:#868e96;font-size:1.25rem;line-height:1.5rem;margin-bottom:0}.text-primary[data-v-6a8b0e4a]{color:#0c8ccc!important}li[data-v-6a8b0e4a]{margin-bottom:2.5rem}li[data-v-6a8b0e4a]:last-child{margin-bottom:0}div.d-flex[data-v-6a8b0e4a]{flex-direction:column}@media (min-width:768px){div.d-flex[data-v-6a8b0e4a]{align-items:center;flex-direction:row}}',""]),r.locals={},e.exports=r},341:function(e,t,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("74427577",content,!0,{sourceMap:!1})},352:function(e,t,n){"use strict";n(341)},353:function(e,t,n){var r=n(41)((function(i){return i[1]}));r.push([e.i,'h2[data-v-3855ff4f]{color:#343a40;font-family:"Permanent Marker",serif;font-size:3rem;font-weight:400;line-height:3.5rem;text-transform:uppercase}@media (min-width:768px){h2[data-v-3855ff4f]{font-size:3.5rem;line-height:4rem}}',""]),r.locals={},e.exports=r},380:function(e,t,n){"use strict";n.r(t);n(34),n(51);var r={name:"Experiences",components:{Card:n(326).default},data:function(){return{experiences:[{id:3,position:"Software Engineer",company:"Utility Warehouse",description:"As a member of the payment platform team, rewriting the legacy system to the new system which is scalable and maintainable  with a user-friendly interface using the latest tech stack such as microservices in Go and Kubernetes is my main focus. Making the system regulation compliant is also our responsibility.",startDate:"April 2019",endDate:"Present"},{id:2,position:"Junior Backend Engineer",company:"Mercari UK",description:"My main responsibility was to add features and functions to the large user-base applications communicating with PMs to make a consumer facing app that grows in the area. I made myself an expert of a PHP and Go developer using GCP platform with OOP and TDD practices.",startDate:"December 2016",endDate:"March 2019"},{id:1,position:"iOS Engineer",company:"Smart Tech Ventures",description:"I developed the e-commerce app using MVC architecture in Swift and Objective-C. I also wrote and created from scratch a healthcare application introducing MVVM architecture and Reactive Programming.",startDate:"May 2015",endDate:"March 2017"}]}}},o=(n(352),n(50)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("fragment",[t("h2",{staticClass:"mb-5"},[e._v("Experience")]),e._v(" "),t("ul",{staticClass:"pl-0 mb-0"},e._l(e.experiences,(function(e){return t("fragment",{key:e.id},[t("Card",{attrs:{title:e.position,subtitle:e.company,description:e.description,startDate:e.startDate,endDate:e.endDate}})],1)})),1)])}),[],!1,null,"3855ff4f",null);t.default=component.exports;installComponents(component,{Card:n(326).default})}}]);