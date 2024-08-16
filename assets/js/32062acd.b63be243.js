/*! For license information please see 32062acd.b63be243.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45802],{74272:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var t=s(85893),n=s(11151);const i={sidebar_label:"BrowserContext"},o="BrowserContext class",p={id:"api/puppeteer.browsercontext",title:"BrowserContext class",description:"BrowserContext represents individual user contexts within a browser.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.browsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext",permalink:"/api/puppeteer.browsercontext",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"BrowserContext"},sidebar:"api",previous:{title:"Browser.wsEndpoint",permalink:"/api/puppeteer.browser.wsendpoint"},next:{title:"BrowserContext.browser",permalink:"/api/puppeteer.browsercontext.browser"}},c={},a=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"browsercontext-class",children:"BrowserContext class"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"})," represents individual user contexts within a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["When a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"})," is launched, it has at least one default ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),". Others can be created using ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.createbrowsercontext",children:"Browser.createBrowserContext()"}),". Each context has isolated storage (cookies/localStorage/etc.)"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"})," ",(0,t.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"emits"})," various events which are documented in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontextevent",children:"BrowserContextEvent"})," enum."]}),"\n",(0,t.jsxs)(r.p,{children:["If a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"})," opens another ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"}),", e.g. using ",(0,t.jsx)(r.code,{children:"window.open"}),", the popup will belong to the parent ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.browsercontext",children:"page's browser context"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class BrowserContext extends EventEmitter<BrowserContextEvents>\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Extends:"})," ",(0,t.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontextevents",children:"BrowserContextEvents"}),">"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["In Chrome all non-default contexts are incognito, and ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"})," might be incognito if you provide the ",(0,t.jsx)(r.code,{children:"--incognito"})," argument when launching the browser."]}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"BrowserContext"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["Creating a new ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"// Create a new browser context\nconst context = await browser.createBrowserContext();\n// Create a new page inside context.\nconst page = await context.newPage();\n// ... do stuff with page ...\nawait page.goto('https://example.com');\n// Dispose context once it's no longer needed.\nawait context.close();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"closed",children:"closed"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Whether this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," is closed."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"id",children:"id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string | undefined"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Identifier for this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"browser",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.browser",children:"browser()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Gets the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"})," associated with this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"clearpermissionoverrides",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.clearpermissionoverrides",children:"clearPermissionOverrides()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Clears all permission overrides for this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"close",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.close",children:"close()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Closes this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," and all associated ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"})," cannot be closed."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"newpage",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.newpage",children:"newPage()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Creates a new ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"})," in this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"overridepermissions",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.overridepermissions",children:"overridePermissions(origin, permissions)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Grants this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," the given ",(0,t.jsx)(r.code,{children:"permissions"})," within the given ",(0,t.jsx)(r.code,{children:"origin"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"pages",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.pages",children:"pages()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets a list of all open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," inside this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["Non-visible ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),", such as ",(0,t.jsx)(r.code,{children:'"background_page"'}),", will not be listed here. You can find them using ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"Target.page()"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"targets",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.targets",children:"targets()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Gets all active ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"targets"})," inside this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"waitfortarget",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext.waitfortarget",children:"waitForTarget(predicate, options)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Waits until a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"target"})," matching the given ",(0,t.jsx)(r.code,{children:"predicate"})," appears and returns it."]}),(0,t.jsxs)(r.p,{children:["This will look all open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},75251:(e,r,s)=>{var t=s(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var t,i={},a=null,d=null;for(t in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:a,ref:d,props:i,_owner:p.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>p,a:()=>o});var t=s(67294);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);