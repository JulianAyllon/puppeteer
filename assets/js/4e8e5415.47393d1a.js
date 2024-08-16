/*! For license information please see 4e8e5415.47393d1a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71267],{49070:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=a(85893),r=a(11151);const s={sidebar_label:"Page.evaluate"},i="Page.evaluate() method",l={id:"api/puppeteer.page.evaluate",title:"Page.evaluate() method",description:"Evaluates a function in the page's context and returns the result.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.page.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluate",permalink:"/api/puppeteer.page.evaluate",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"Page.evaluate"},sidebar:"api",previous:{title:"Page.emulateVisionDeficiency",permalink:"/api/puppeteer.page.emulatevisiondeficiency"},next:{title:"Page.evaluateHandle",permalink:"/api/puppeteer.page.evaluatehandle"}},c={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pageevaluate-method",children:"Page.evaluate() method"}),"\n",(0,t.jsx)(n.p,{children:"Evaluates a function in the page's context and returns the result."}),"\n",(0,t.jsxs)(n.p,{children:["If the function passed to ",(0,t.jsx)(n.code,{children:"page.evaluate"})," returns a Promise, the function will wait for the promise to resolve and return its value."]}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"pageFunction"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Func | string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"a function that is run within the page"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Params"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"arguments to be passed to the pageFunction"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,t.jsxs)(n.p,{children:["the return value of ",(0,t.jsx)(n.code,{children:"pageFunction"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const result = await frame.evaluate(() => {\n  return Promise.resolve(8 * 7);\n});\nconsole.log(result); // prints "56"\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const aHandle = await page.evaluate('1 + 2');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To get the best TypeScript experience, you should pass in as the generic the type of ",(0,t.jsx)(n.code,{children:"pageFunction"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const aHandle = await page.evaluate(() => 2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"})," instances (including ",(0,t.jsx)(n.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"s) can be passed as arguments to the ",(0,t.jsx)(n.code,{children:"pageFunction"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const bodyHandle = await page.$('body');\nconst html = await page.evaluate(body => body.innerHTML, bodyHandle);\nawait bodyHandle.dispose();\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,n,a)=>{var t=a(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,a){var t,s={},d=null,p=null;for(t in void 0!==a&&(d=""+a),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:d,ref:p,props:s,_owner:l.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},85893:(e,n,a)=>{e.exports=a(75251)},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);