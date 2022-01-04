(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{167:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation"},l=n(19),c=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",{staticClass:"nav justify-content-center"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#about"}},[t._v("About")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#experience"}},[t._v("Experience")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#education"}},[t._v("Education")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#skills"}},[t._v("Skills")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#interests"}},[t._v("Interests")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#awards"}},[t._v("Awards")])])])])}],!1,null,null,null).exports,o={name:"BaseSection",props:{id:{type:String,required:!0}}},m={name:"About",data:function(){return{firstName:"Kenta",lastName:"Kudo",about:"Engineering graduate with 3.5+ years of Software Engineering experience. I love problem-solving and turning complicated issues into simplified solutions. I am a logical thinker, diligent, curious, and thrive on teamwork. Now I am looking for a new challenge with an exciting and growing company.",socials:[{name:"facebook",href:"https://www.facebook.com/kentakudo.kenta",class:"fa-facebook"},{name:"twitter",href:"https://twitter.com/_______K_K_",class:"fa-twitter"},{name:"linkedin",href:"https://www.linkedin.com/in/kenta-kudo-6a4b15a8/",class:"fa-linkedin"},{name:"github",href:"https://github.com/KentaKudo",class:"fa-github"},{name:"medium",href:"https://medium.com/@_______K_K_",class:"fa-medium"},{name:"email",href:"mailto:yd37574@gmail.com",class:"fa-envelope-o"}]}},computed:{name:function(){return"".concat(this.firstName," ").concat(this.lastName)}}},d={name:"Experiences",data:function(){return{experiences:[{position:"Junior Backend Engineer",company:"Mercari UK",description:"Mercari is an e-commerce buying and selling platform. In my role, I write microservices in Golang and deploy them using GAE, GCE, Kubernetes, and Spinnaker. I also develop large userbase applications written in PHP using OOP and TDD practices. Additionally, I deal with some sysadmin tasks such as running DB migrations and executing batch commands on production.",startDate:"December 2016",endDate:"Present"},{position:"iOS Engineer",company:"Smart Tech Ventures",description:"I developed the e-commerce app using MVC architecture in Swift and Objective-C. I also wrote and created from scratch a healthcare application introducing MVVM architecture and Reactive Programming",startDate:"May 2015",endDate:"March 2017"}]}}},v={name:"Educations",data:function(){return{educations:[{id:0,faculty:"University of Tokyo",degree:"Bachelor of Engineering",major:"Aeronautical and Astronautical Engineering",startDate:"April 2011",endDate:"March 2015"}]}}},_={name:"Skills",data:function(){return{skills:[{category:"Infrastructure",topics:["MySQL","GCP","Docker","Kubernetes","Ansible","Terraform"]},{category:"Backend",topics:["PHP","Golang","Python","Object Oriented Programming","Design Pattern","SQL"]},{category:"Mobile",topics:["iOS","Swift","Objective-C","Reactive Programming","MVVM Architecture"]},{category:"Frontend",topics:["JavaScript","React","Vue","KnockoutJS"]},{category:"Others",topics:["Machine Learning","System Programming","Respberry Pi","Design","Agile"]}]}}},f={name:"Awards"},h={name:"Interests",data:function(){return{interest:"I embrace a minimalist lifestyle and keeping things in my life simple. I enjoy learning and experiencing new cultures and travelling the world is great fun. I also love developing my skills working on personal projects such as building deep learning models, designing my own website, and implementing original OS, which works on Raspberry Pi."}}},C={components:{Navigation:c,BaseSection:Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:this.id}},[this._t("default")],2)}),[],!1,null,null,null).exports,About:Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"mb-0"},[t._v(t._s(t.name))]),t._v(" "),n("p",{staticClass:"lead mb-5"},[t._v(t._s(t.about))]),t._v(" "),t._m(0),t._v(" "),n("ul",{staticClass:"list-inline list-social-icons mb-0"},t._l(t.socials,(function(e){return n("li",{key:e.name,staticClass:"list-inline-item"},[n("a",{attrs:{href:e.href,target:"_blank"}},[n("span",{staticClass:"fa-stack fa-lg"},[n("i",{staticClass:"fa fa-circle fa-stack-2x"}),t._v(" "),n("i",{staticClass:"fa fa-stack-1x fa-inverse",class:e.class})])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subheading mb-4"},[e("a",{attrs:{href:"./cv_201901.pdf",download:""}},[this._v("Download CV")])])}],!1,null,null,null).exports,Experiences:Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"mb-5"},[t._v("Experience")]),t._v(" "),t._l(t.experiences,(function(e){return n("div",{key:e.description,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[n("div",{staticClass:"resume-content mr-auto"},[n("h3",{staticClass:"mb-0"},[t._v(t._s(e.position))]),t._v(" "),n("div",{staticClass:"subheading mb-3"},[t._v(t._s(e.company))]),t._v(" "),n("p",[t._v(t._s(e.description))])]),t._v(" "),n("div",{staticClass:"resume-date text-md-right"},[n("span",{staticClass:"text-primary"},[t._v(t._s(e.startDate)+" – "+t._s(e.endDate))])])])}))],2)}),[],!1,null,null,null).exports,Educations:Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"mb-5"},[t._v("Education")]),t._v(" "),t._l(t.educations,(function(e){return n("div",{key:e.id,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[n("div",{staticClass:"resume-content mr-auto"},[n("h3",{staticClass:"mb-0"},[t._v(t._s(e.faculty))]),t._v(" "),n("div",{staticClass:"subheading mb-3"},[t._v(t._s(e.degree))]),t._v(" "),n("div",[t._v(t._s(e.major))])]),t._v(" "),n("div",{staticClass:"resume-date text-md-right"},[n("span",{staticClass:"text-primary"},[t._v(t._s(e.startDate)+" – "+t._s(e.endDate))])])])}))],2)}),[],!1,null,null,null).exports,Skills:Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"mb-5"},[t._v("Skills")]),t._v(" "),t._l(t.skills,(function(e){return n("div",{key:e.category},[n("div",{staticClass:"subheading mb-3"},[t._v(t._s(e.category))]),t._v(" "),n("ul",{staticClass:"fa-ul mb-3"},t._l(e.topics,(function(e){return n("li",{key:e},[n("i",{staticClass:"fa-li fa fa-check"}),t._v("\n        "+t._s(e)+"\n      ")])})),0)])}))],2)}),[],!1,null,null,null).exports,Awards:Object(l.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"mb-5"},[t._v("Awards & Certifications")]),t._v(" "),n("ul",{staticClass:"fa-ul mb-0"},[n("li",[n("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v("\n      Coursera: Machine Learning\n    ")]),t._v(" "),n("li",[n("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v("\n      Diploma: Project\n      "),n("a",{attrs:{href:"https://github.com/matsuolab-edu/dl4us"}},[t._v("DL4US (Deep Learning for All of Us)")])]),t._v(" "),n("li",[n("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v("\n      Design Lab:\n      "),n("a",{attrs:{href:"https://trydesignlab.com/certificates/design-101/KentaKudo/",target:"_blank"}},[t._v("Design 101")])])])])}],!1,null,null,null).exports,Interests:Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{staticClass:"mb-5"},[this._v("Interests")]),this._v(" "),e("p",[this._v(this._s(this.interest))])])}),[],!1,null,null,null).exports}},k=Object(l.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-wrapper"},[e("div",{staticClass:"container"},[e("Navigation"),this._v(" "),e("div",{staticClass:"container-fluid p-0"},[e("BaseSection",{attrs:{id:"about"}},[e("About",{staticClass:"my-auto"})],1),this._v(" "),e("BaseSection",{attrs:{id:"experience"}},[e("Experiences",{staticClass:"my-auto"})],1),this._v(" "),e("BaseSection",{attrs:{id:"education"}},[e("Educations",{staticClass:"my-auto"})],1),this._v(" "),e("BaseSection",{attrs:{id:"skills"}},[e("Skills",{staticClass:"my-auto"})],1),this._v(" "),e("BaseSection",{attrs:{id:"interests"}},[e("Interests",{staticClass:"my-auto"})],1),this._v(" "),e("BaseSection",{attrs:{id:"awards"}},[e("Awards",{staticClass:"my-auto"})],1)],1)],1)])}),[],!1,null,null,null);e.default=k.exports}}]);