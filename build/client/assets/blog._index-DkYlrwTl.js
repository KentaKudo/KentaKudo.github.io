import{j as t}from"./jsx-runtime-BlSqMCxk.js";import{P as a,m as i}from"./index-EyOTXY4c.js";import{e as n,L as r}from"./components-CJGhtbNW.js";import"./utils-7bPorvLa.js";import"./index-DEVGeT0Z.js";const x=()=>Object.entries(i).map(([l,[,e]])=>({slug:l,frontmatter:e}));function u(){const l=n();return t.jsx("ul",{className:"flex flex-col gap-2",children:l.sort((e,s)=>new Date(e.frontmatter.published)<new Date(s.frontmatter.published)?1:-1).map(({slug:e,frontmatter:s})=>t.jsx("li",{children:t.jsxs(r,{to:`/blog/${e}`,className:"p-2 rounded-md hover:underline",children:[t.jsx("h2",{className:"font-bold text-xl",children:s.title}),t.jsx(a,{at:s.published,className:"text-sm"}),s.description?t.jsx("p",{className:"mt-2 line-clamp-3",children:s.description}):null]})},e))})}export{x as clientLoader,u as default};