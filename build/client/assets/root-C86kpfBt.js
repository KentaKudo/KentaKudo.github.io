import{r as i,j as e}from"./jsx-runtime-BlSqMCxk.js";import{c as m}from"./utils-7bPorvLa.js";import{d,e as j,O as y}from"./index-DEVGeT0Z.js";import{u as w,b as S,c as k,L as n,M as _,d as b,S as N}from"./components-CJGhtbNW.js";/**
 * @remix-run/react v2.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let l="positions";function L({getKey:t,...u}){let{isSpaMode:h}=w(),o=d(),g=j();S({getKey:t,storageKey:l});let x=i.useMemo(()=>{if(!t)return null;let s=t(o,g);return s!==o.key?s:null},[]);if(h)return null;let p=((s,f)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let a=JSON.parse(sessionStorage.getItem(s)||"{}")[f||window.history.state.key];typeof a=="number"&&window.scrollTo(0,a)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",k({},u,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(l)}, ${JSON.stringify(x)})`}}))}const v="/assets/globals-BpeHYSsG.css",M=()=>{const t=d();return e.jsx("header",{className:"sticky top-0 px-4 backdrop-blur-sm",children:e.jsxs("div",{className:"h-20 mx-auto w-full max-w-screen-lg flex items-center justify-between",children:[e.jsx(n,{to:"/",className:m("font-bold font-permanent-marker text-2xl",t.pathname==="/"&&"text-primary-foreground"),children:t.pathname==="/"?"Kenta Kudo":"K"}),e.jsx("nav",{className:"font-bold text-slate-500",children:e.jsxs("ul",{className:"flex gap-4",children:[e.jsx("li",{className:"hover:text-foreground",children:e.jsx(n,{to:"/",children:"Home"})}),e.jsx("li",{className:"hover:text-foreground",children:e.jsx(n,{to:"/about",children:"About"})}),e.jsx("li",{className:"hover:text-foreground",children:e.jsx(n,{to:"/blog",children:"Blog"})})]})})]})})},K=({className:t})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:m("animate-spin",t),children:e.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),H=()=>e.jsx("footer",{}),c="G-FC2KF4RL0P",R=()=>e.jsxs(e.Fragment,{children:[e.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${c}`}),e.jsx("script",{async:!0,dangerouslySetInnerHTML:{__html:`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${c}');
              `}})]}),$=()=>[{title:"Kenta Kudo"},{name:"description",content:"Welcome my page!"},{name:"og:title",content:"Kenta Kudo"},{name:"og:description",content:"Welcome my page!"},{name:"og:image",content:"/images/river-themes.jpg"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@___________k_k_"}],C=()=>[{rel:"stylesheet",href:v},{rel:"preconnect",href:"https://fonts.gstatic.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@400;700&display=swap"}];function G({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(_,{}),e.jsx(b,{}),e.jsx(R,{})]}),e.jsxs("body",{children:[e.jsx(M,{}),t,e.jsx(H,{}),e.jsx(L,{}),e.jsx(N,{})]})]})}function W(){return e.jsx(y,{})}function A(){return e.jsx("div",{className:"-z-10 absolute top-0 right-0 bottom-0 left-0 h-screen w-full flex items-center justify-center bg-slate-500",children:e.jsx(K,{className:"text-primary-foreground"})})}export{A as HydrateFallback,G as Layout,W as default,C as links,$ as meta};
