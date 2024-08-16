/*! For license information please see 3d5ee312.19bd6703.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28445],{13185:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(85893),n=t(11151);const o={sidebar_label:"BrowserContext.clearPermissionOverrides"},i="BrowserContext.clearPermissionOverrides() method",a={id:"api/puppeteer.browsercontext.clearpermissionoverrides",title:"BrowserContext.clearPermissionOverrides() method",description:"Clears all permission overrides for this browser context.",source:"@site/../docs/api/puppeteer.browsercontext.clearpermissionoverrides.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.clearpermissionoverrides",permalink:"/next/api/puppeteer.browsercontext.clearpermissionoverrides",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"BrowserContext.clearPermissionOverrides"},sidebar:"api",previous:{title:"BrowserContext.browser",permalink:"/next/api/puppeteer.browsercontext.browser"},next:{title:"BrowserContext.close",permalink:"/next/api/puppeteer.browsercontext.close"}},c={},l=[{value:"Signature",id:"signature",level:3},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"browsercontextclearpermissionoverrides-method",children:"BrowserContext.clearPermissionOverrides() method"}),"\n",(0,s.jsxs)(r.p,{children:["Clears all permission overrides for this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract clearPermissionOverrides(): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["Clearing overridden permissions in the ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,o={},l=null,p=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:l,ref:p,props:o,_owner:a.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var s=t(67294);const n={},o=s.createContext(n);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);