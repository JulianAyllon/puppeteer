/*! For license information please see 6eb95b63.d8e54d57.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25379],{8783:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var t=n(85893),s=n(11151);const a={sidebar_label:"Page.screencast"},c="Page.screencast() method",p={id:"api/puppeteer.page.screencast",title:"Page.screencast() method",description:"Captures a screencast of this page.",source:"@site/../docs/api/puppeteer.page.screencast.md",sourceDirName:"api",slug:"/api/puppeteer.page.screencast",permalink:"/next/api/puppeteer.page.screencast",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.screencast"},sidebar:"api",previous:{title:"Page.removeScriptToEvaluateOnNewDocument",permalink:"/next/api/puppeteer.page.removescripttoevaluateonnewdocument"},next:{title:"Page.screenshot",permalink:"/next/api/puppeteer.page.screenshot"}},o={},i=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"pagescreencast-method",children:"Page.screencast() method"}),"\n",(0,t.jsxs)(r.p,{children:["Captures a screencast of this ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"page"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  screencast(options?: Readonly<ScreencastOptions>): Promise<ScreenRecorder>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Readonly<",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.screencastoptions",children:"ScreencastOptions"}),">"]})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Configures screencast behavior."]})})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.screenrecorder",children:"ScreenRecorder"}),">"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["All recordings will be ",(0,t.jsx)(r.a,{href:"https://www.webmproject.org/",children:"WebM"})," format using the ",(0,t.jsx)(r.a,{href:"https://www.webmproject.org/vp9/",children:"VP9"})," video codec. The FPS is 30."]}),"\n",(0,t.jsxs)(r.p,{children:["You must have ",(0,t.jsx)(r.a,{href:"https://ffmpeg.org/",children:"ffmpeg"})," installed on your system."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["Recording a ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"page"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"import puppeteer from 'puppeteer';\n\n// Launch a browser\nconst browser = await puppeteer.launch();\n\n// Create a new page\nconst page = await browser.newPage();\n\n// Go to your site.\nawait page.goto(\"https://www.example.com\");\n\n// Start recording.\nconst recorder = await page.screencast({path: 'recording.webm'});\n\n// Do something.\n\n// Stop recording.\nawait recorder.stop();\n\nbrowser.close();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,a={},i=null,l=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!o.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:i,ref:l,props:a,_owner:p.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>p,a:()=>c});var t=n(67294);const s={},a=t.createContext(s);function c(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);