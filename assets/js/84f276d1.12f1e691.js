"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[1060],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const o={sidebar_position:5},i="(WIP) Roles",s={unversionedId:"server-docs/roles",id:"server-docs/roles",title:"(WIP) Roles",description:"This page is a work in progress and subject to change.",source:"@site/docs/server-docs/roles.md",sourceDirName:"server-docs",slug:"/server-docs/roles",permalink:"/docs/server-docs/roles",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/server-docs/roles.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Adding Games to Crackpipe",permalink:"/docs/server-docs/adding-games"},next:{title:"Troubleshooting",permalink:"/docs/server-docs/troubleshooting"}},l={},p=[{value:"Roles",id:"roles",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wip-roles"},"(WIP) Roles"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This page is a work in progress and subject to change.")),(0,a.kt)("p",null,"Roles play a crucial role in ensuring the security and proper functioning of a software application. They determine what actions and data a user can access or manipulate based on their assigned role. In Crackpipe, we have implemented a straightforward role system to enhance security and prevent unauthorized access and manipulation of data."),(0,a.kt)("h2",{id:"roles"},"Roles"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Role"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Level"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Guest"),(0,a.kt)("td",{parentName:"tr",align:null},"This role allows users to view all content within the application."),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Users (Default)"),(0,a.kt)("td",{parentName:"tr",align:null},"This role includes permissions such as downloading games, creating progresses, and editing the user's own profile."),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Editors"),(0,a.kt)("td",{parentName:"tr",align:null},"Editors have the ability to edit and remap games within the application."),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Admins"),(0,a.kt)("td",{parentName:"tr",align:null},"Admins possess full control over user management and can edit user profiles."),(0,a.kt)("td",{parentName:"tr",align:null},"4")))),(0,a.kt)("p",null,"We believe that assigning different roles to users based on their responsibilities and privileges is essential for maintaining a secure and organized software environment. By implementing this role system in Crackpipe, we ensure that each user has appropriate access and permissions within the application, reducing the risk of unauthorized actions and maintaining data integrity."))}u.isMDXComponent=!0}}]);