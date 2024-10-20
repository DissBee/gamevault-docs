"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[2002],{4485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=t(2676),s=t(9246);const l={sidebar_position:9},r="Plugins",a={id:"server-docs/plugins",title:"Plugins",description:"Please note that the plugins loader is currently experimental. We advise not to use it.",source:"@site/docs/server-docs/plugins.md",sourceDirName:"server-docs",slug:"/server-docs/plugins",permalink:"/docs/server-docs/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/plugins.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1729429525e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docs",previous:{title:"WebSockets",permalink:"/docs/server-docs/websockets"},next:{title:"Parental Control",permalink:"/docs/server-docs/parental-control"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Finding Plugins",id:"finding-plugins",level:2},{value:"Writing GameVault Plugins",id:"writing-gamevault-plugins",level:2},{value:"Example Plugins",id:"example-plugins",level:3},{value:"Available Features",id:"available-features",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"plugins",children:"Plugins"})}),"\n",(0,i.jsx)(n.admonition,{title:"Work in progress",type:"caution",children:(0,i.jsx)(n.p,{children:"Please note that the plugins loader is currently experimental. We advise not to use it."})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"GameVault is designed with a high degree of modularity and features a built-in plugin system. Users have the capability to integrate their own plugins into the server."}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.p,{children:"To use plugins, you need to do the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the ",(0,i.jsx)(n.code,{children:"PLUGIN_ENABLED"})," environment variable to ",(0,i.jsx)(n.code,{children:"true"})," to enable plugins."]}),"\n",(0,i.jsxs)(n.li,{children:["Add your raw plugin paths to the comma-separated list of plugins in the ",(0,i.jsx)(n.code,{children:"PLUGIN_SOURCES"})," environment variable."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-.env",children:'PLUGIN_ENABLED=true\nPLUGIN_SOURCES="https://raw.githubusercontent.com/Phalcode/gamevault-backend-example-plugins/master/plugins/gamevault-chuck-norris-joke-fetcher-plugin.js"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"finding-plugins",children:"Finding Plugins"}),"\n",(0,i.jsx)(n.p,{children:"Coming soon."}),"\n",(0,i.jsx)(n.h2,{id:"writing-gamevault-plugins",children:"Writing GameVault Plugins"}),"\n",(0,i.jsx)(n.h3,{id:"example-plugins",children:"Example Plugins"}),"\n",(0,i.jsxs)(n.p,{children:["Phalcode has a few example plugins ",(0,i.jsx)(n.a,{href:"https://github.com/Phalcode/gamevault-backend-example-plugins",children:"here"})," that you can use to learn how to build your own plugins."]}),"\n",(0,i.jsx)(n.h3,{id:"available-features",children:"Available Features"}),"\n",(0,i.jsx)(n.p,{children:"Coming soon."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9246:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(5271);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);