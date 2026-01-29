(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81257,e=>{"use strict";var r=e.i(43476),a=e.i(71645);function l({value:e,onChange:l,placeholder:t,label:s,error:o,readOnly:i=!1,rows:n=10}){let c=(0,a.useRef)(null),d=async()=>{c.current&&await navigator.clipboard.writeText(e)};return(0,r.jsxs)("div",{className:"w-full",children:[s&&(0,r.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:s}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("button",{onClick:d,className:"text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:"Copy"}),!i&&(0,r.jsx)("button",{onClick:()=>{l("")},className:"text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:"Clear"})]})]}),(0,r.jsx)("textarea",{ref:c,value:e,onChange:e=>l(e.target.value),placeholder:t,readOnly:i,rows:n,className:`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${o?"border-red-500 focus:border-red-500":"border-gray-300 dark:border-gray-600 focus:border-blue-500"}`,spellCheck:!1}),o&&(0,r.jsx)("p",{className:"mt-1 text-sm text-red-500",children:o})]})}e.s(["default",()=>l])},3280,e=>{"use strict";var r=e.i(43476),a=e.i(71645),l=e.i(81257);function t(){let[e,t]=(0,a.useState)(`# Hello World

This is a **Markdown** previewer.

## Features

- Live preview
- Supports GitHub Flavored Markdown
- Copy HTML output

## Code Example

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

## Table

| Feature | Status |
|---------|--------|
| Headers | ✓ |
| Lists | ✓ |
| Tables | ✓ |

> This is a blockquote

[Link to Google](https://google.com)
`),s=e=>{let r=e;return(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/&/g,"&")).replace(/</g,"<")).replace(/>/g,">")).replace(/^###### (.*$)/gim,"<h6>$1</h6>")).replace(/^##### (.*$)/gim,"<h5>$1</h5>")).replace(/^#### (.*$)/gim,"<h4>$1</h4>")).replace(/^### (.*$)/gim,"<h3>$1</h3>")).replace(/^## (.*$)/gim,"<h2>$1</h2>")).replace(/^# (.*$)/gim,"<h1>$1</h1>")).replace(/\*\*\*(.*?)\*\*\*/g,"<strong><em>$1</em></strong>")).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")).replace(/\*(.*?)\*/g,"<em>$1</em>")).replace(/__(.*?)__/g,"<strong>$1</strong>")).replace(/_(.*?)_/g,"<em>$1</em>")).replace(/```([\s\S]*?)```/g,"<pre><code>$1</code></pre>")).replace(/`([^`]+)`/g,"<code>$1</code>")).replace(/^> (.*$)/gim,"<blockquote>$1</blockquote>")).replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')).replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img alt="$1" src="$2" />')).replace(/^---$/gim,"<hr />")).replace(/^\* (.*$)/gim,"<li>$1</li>")).replace(/^- (.*$)/gim,"<li>$1</li>")).replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>")).replace(/<\/ul>\s*<ul>/g,"")).replace(/^\d+\. (.*$)/gim,"<li>$1</li>")).replace(/\|(.+)\|\n\|[-:\| ]+\|\n((?:\|.+\|\n?)+)/g,(e,r,a)=>{let l="<tr>"+r.split("|").map(e=>e.trim()).filter(Boolean).map(e=>`<th>${e}</th>`).join("")+"</tr>",t=a.trim().split("\n").map(e=>"<tr>"+e.split("|").map(e=>e.trim()).filter(Boolean).map(e=>`<td>${e}</td>`).join("")+"</tr>").join("");return`<table>${l}${t}</table>`})).replace(/\n/g,"<br />")};return(0,r.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Markdown Previewer"}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"Live preview Markdown with HTML output."})]}),(0,r.jsx)("div",{className:"flex gap-2 mb-6",children:(0,r.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(s(e))},className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Copy HTML"})}),(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,r.jsx)(l.default,{label:"Markdown",value:e,onChange:t,placeholder:"Enter Markdown here...",rows:20}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("div",{className:"flex items-center justify-between mb-2",children:(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Preview"})}),(0,r.jsx)("div",{className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-[500px] overflow-auto prose dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:s(e)}})]})]})]})}e.s(["default",()=>t])}]);