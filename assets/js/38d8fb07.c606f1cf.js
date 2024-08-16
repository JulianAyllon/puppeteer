/*! For license information please see 38d8fb07.c606f1cf.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16230],{27848:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=n(85893),s=n(11151);const a={sidebar_label:"Keyboard.sendCharacter"},d="Keyboard.sendCharacter() method",i={id:"api/puppeteer.keyboard.sendcharacter",title:"Keyboard.sendCharacter() method",description:"Dispatches a keypress and input event. This does not send a keydown or keyup event.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.keyboard.sendcharacter.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.sendcharacter",permalink:"/api/puppeteer.keyboard.sendcharacter",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"Keyboard.sendCharacter"},sidebar:"api",previous:{title:"Keyboard.press",permalink:"/api/puppeteer.keyboard.press"},next:{title:"Keyboard.type",permalink:"/api/puppeteer.keyboard.type"}},c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"keyboardsendcharacter-method",children:"Keyboard.sendCharacter() method"}),"\n",(0,t.jsxs)(r.p,{children:["Dispatches a ",(0,t.jsx)(r.code,{children:"keypress"})," and ",(0,t.jsx)(r.code,{children:"input"})," event. This does not send a ",(0,t.jsx)(r.code,{children:"keydown"})," or ",(0,t.jsx)(r.code,{children:"keyup"})," event."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract sendCharacter(char: string): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"char"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Character to send into the page."})})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Modifier keys DO NOT effect ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.sendcharacter",children:"Keyboard.sendCharacter"}),". Holding down ",(0,t.jsx)(r.code,{children:"Shift"})," will not type the text in upper case."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"page.keyboard.sendCharacter('\u55e8');\n"})})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,a={},o=null,p=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(p=r.ref),r)d.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:o,ref:p,props:a,_owner:i.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var t=n(67294);const s={},a=t.createContext(s);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);