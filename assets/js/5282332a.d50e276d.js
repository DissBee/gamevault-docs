"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[2914],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(1163),r=(a(9496),a(9613));const i={sidebar_position:4},o="API Usage",s={unversionedId:"advanced-usage/api-usage",id:"advanced-usage/api-usage",title:"API Usage",description:"The Crackpipe API is fully documented and available for use to everyone. With the API, you can build your own Crackpipe clients, integrate the data into progress tracking sites, and manage your libraries automatically.",source:"@site/docs/advanced-usage/api-usage.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/api-usage",permalink:"/docs/advanced-usage/api-usage",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/advanced-usage/api-usage.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/client-docs/troubleshooting"},next:{title:"Contribute",permalink:"/docs/contribute"}},l={},c=[{value:"Register a Separate User",id:"register-a-separate-user",level:2},{value:"API Documentation",id:"api-documentation",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Authentication",id:"authentication",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-usage"},"API Usage"),(0,r.kt)("p",null,"The Crackpipe API is fully documented and available for use to everyone. With the API, you can build your own Crackpipe clients, integrate the data into progress tracking sites, and manage your libraries automatically."),(0,r.kt)("h2",{id:"register-a-separate-user"},"Register a Separate User"),(0,r.kt)("p",null,"To use the Crackpipe API, it is recommended to register a separate user. This user will be used to authenticate your API requests. You can do this by using the Register Form in the settings tab of the Crackpipe App."),(0,r.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,r.kt)("p",null,"Once you have registered your account, you can check out the API documentation at ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com/api/v1/docs"),". The API documentation provides a complete guide on how to use the API, including authentication, endpoints, and parameters."),(0,r.kt)("p",null,"You can also download the OpenAPI Specification using ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com/api/v1/docs-json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com/api/v1/docs-yaml"),". This is useful for importing the Calls into a tool like Postman or generate the client code using the openapi-generator."),(0,r.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,r.kt)("p",null,"Some of the available API endpoints include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Games API"),": APIs for searching and downloading games"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Progress API"),": APIs for tracking and managing user progress for games"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tags API"),": API for retrieving a list of tags"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Genres API"),": API for retrieving a list of genres"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User API"),": APIs for managing user profiles and authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Utility API"),": Miscellaneous APIs for manual indexing, caching, and updating"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rawg API"),": APIs for interacting with the Rawg game database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Images API"),": API for retrieving images by UUID.")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Almost all requests to the API require basic-auth authentication. You will need to include it in the Authentication header of each request."))}d.isMDXComponent=!0}}]);