"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[9671],{4816:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=n(2676),i=n(8358);const t={sidebar_position:1},a="Introduction",o={id:"intro",title:"Introduction",description:"What is GameVault?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1730071561e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Setting up a GameVault Server",permalink:"/docs/server-docs/setup/"}},l={},c=[{value:"What is GameVault?",id:"what-is-gamevault",level:2},{value:"Who Can Enjoy GameVault?",id:"who-can-enjoy-gamevault",level:3},{value:"What GameVault is not",id:"what-gamevault-is-not",level:3},{value:"Features",id:"features",level:2},{value:"Client Features",id:"client-features",level:3},{value:"Server Features",id:"server-features",level:3},{value:"Support",id:"support",level:2},{value:"License",id:"license",level:2},{value:"Legal Disclaimer",id:"legal-disclaimer",level:2}];function d(e){const r={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsx)(r.h2,{id:"what-is-gamevault",children:"What is GameVault?"}),"\n",(0,s.jsxs)(r.p,{children:["GameVault is an innovative gaming platform providing a self-hosted, ",(0,s.jsx)(r.a,{href:"https://wikipedia.org/wiki/Source-available_software",children:"source-available"})," alternative to popular gaming platforms. It lets you and your friends enjoy DRM-free games stored ",(0,s.jsx)(r.strong,{children:"on your file server"})," in an organized way."]}),"\n",(0,s.jsx)(r.p,{children:"Think of it as your personal Steam or Plex server, but for your personal video game collection (and without streaming). It lets you and your friends enjoy your games from anywhere."}),"\n",(0,s.jsx)(r.p,{children:"You put your game files (installers, binaries, etc.) from wherever you have them into a folder and the platform detects them, enriches them with metadata and offers a user-friendly interface to easily organize, download, install, and play your games. It even tracks your playtimes and progress."}),"\n",(0,s.jsx)(r.p,{children:"GameVault consists of two components:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"A self-hosted backend server served with Docker"}),"\n",(0,s.jsx)(r.li,{children:"A client application to use this server"}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{title:"Try it out!",type:"tip",children:(0,s.jsxs)(r.p,{children:["If you don't have a server yet, but want to try it out, you can connect your GameVault Client to our demo server get a feel for how it works.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"client-docs/setup#option-2-using-the-demo-server",children:"Click here to learn more."})]})}),"\n",(0,s.jsx)(r.h3,{id:"who-can-enjoy-gamevault",children:"Who Can Enjoy GameVault?"}),"\n",(0,s.jsx)(r.p,{children:"Whether you're into the classics or the cutting-edge, GameVault is the perfect companion for:"}),"\n",(0,s.jsxs)(r.p,{children:["\ud83c\udfae ",(0,s.jsx)(r.strong,{children:"DRM-free Gamers:"})," Enjoy your games from anywhere.",(0,s.jsx)(r.br,{}),"\n","\ud83c\udfe0 ",(0,s.jsx)(r.strong,{children:"Self Hosters:"})," Keep your game collection on your own server.",(0,s.jsx)(r.br,{}),"\n","\ud83d\udcda ",(0,s.jsx)(r.strong,{children:"Game Collectors:"})," Organize and cherish your growing library.",(0,s.jsx)(r.br,{}),"\n","\ud83d\udcbe ",(0,s.jsx)(r.strong,{children:"Data Hoarders:"})," Archive every gigabyte of gaming history.",(0,s.jsx)(r.br,{}),"\n","\ud83d\udc7e ",(0,s.jsx)(r.strong,{children:"Indie Gamers:"})," Keep track of your independent gems.",(0,s.jsx)(r.br,{}),"\n","\ud83d\udd79\ufe0f ",(0,s.jsx)(r.strong,{children:"Retro Gamers:"})," Relive the golden era of gaming.",(0,s.jsx)(r.br,{}),"\n","\ud83d\udee0\ufe0f ",(0,s.jsx)(r.strong,{children:"Game Developers:"})," Test and distribute your creations.",(0,s.jsx)(r.br,{}),"\n","\ud83d\udc6a ",(0,s.jsx)(r.strong,{children:"And their Friends & Family:"})," Share the joy of gaming with loved ones."]}),"\n",(0,s.jsx)(r.h3,{id:"what-gamevault-is-not",children:"What GameVault is not"}),"\n",(0,s.jsx)(r.p,{children:"Listed below are some examples of what GameVault is not:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Game Pirating Application"}),"\n",(0,s.jsx)(r.li,{children:"Game Streaming Application (e.g. Geforce NOW, Sunshine)"}),"\n",(0,s.jsx)(r.li,{children:"Game Server Management Application (e.g. Pterodactyl)"}),"\n",(0,s.jsx)(r.li,{children:"Local Game Library / Library Merging Application (e.g Playnite, Heroic, Launchbox) - although you might just run the server on your local machine, then it basically is."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(r.p,{children:"Let's take a look at all the main functions of GameVault:"}),"\n",(0,s.jsx)(r.h3,{id:"client-features",children:"Client Features"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\ud83d\udd0e ",(0,s.jsx)(r.a,{href:"./client-docs/gui#library",children:"Browse your server's game collection"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udce5 ",(0,s.jsx)(r.a,{href:"./client-docs/how-to-use#downloading-games",children:"Securely download your games from your server"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u2699\ufe0f ",(0,s.jsx)(r.a,{href:"./client-docs/how-to-use#1-extracting-the-game",children:"Automatically extract and install games"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83c\udfae ",(0,s.jsx)(r.a,{href:"./client-docs/how-to-use#playing-a-game",children:"Launch and play the games on your PC"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u23f1\ufe0f ",(0,s.jsx)(r.a,{href:"./client-docs/how-to-use#tracking-your-game-progress",children:"Track playtimes and progress (even when the server is offline)"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udc65 ",(0,s.jsx)(r.a,{href:"./client-docs/gui#community",children:"Compare game progress with other users on the server"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u270f\ufe0f ",(0,s.jsx)(r.a,{href:"./client-docs/gui#metadata",children:"Edit any game metadata"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udd12 ",(0,s.jsx)(r.a,{href:"./client-docs/gui#administration",children:"Manage your users and games with a powerful Admin UI"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"server-features",children:"Server Features"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u267b\ufe0f ",(0,s.jsx)(r.a,{href:"/docs/server-docs/indexing",children:"Automatically indexes games from the file system into a database"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udcda ",(0,s.jsx)(r.a,{href:"/docs/server-docs/metadata-enrichment/metadata",children:"Automatically enriches games with metadata like box arts, tags, genres, description and more using various APIs"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udc65 ",(0,s.jsx)(r.a,{href:"/docs/server-docs/user-management",children:"Supports Multi-User Authentication"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udd12 ",(0,s.jsx)(r.a,{href:"./server-docs/user-management#user-roles",children:"Supports Role-Based Access Control"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 ",(0,s.jsx)(r.a,{href:"./server-docs/parental-control",children:"Supports Parental Control Features"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u23f1\ufe0f ",(0,s.jsx)(r.a,{href:"./client-docs/how-to-use#tracking-your-game-progress",children:"Keeps track of your users' game progress and state"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udea8 ",(0,s.jsx)(r.a,{href:"./advanced-usage/rest-api",children:"Health Monitoring and Logging"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udd0e ",(0,s.jsx)(r.a,{href:"./advanced-usage/rest-api",children:"Full-Text Search, Filters, Sorting, Pagination"})]}),"\n",(0,s.jsxs)(r.li,{children:["\ud83d\udd0c ",(0,s.jsx)(r.a,{href:"./advanced-usage/rest-api",children:"Fully Documented API"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u2699\ufe0f ",(0,s.jsx)(r.a,{href:"./server-docs/configuration",children:"Highly Configurable"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u2699\ufe0f ",(0,s.jsx)(r.a,{href:"/docs/server-docs/plugins",children:"Modular Plugin Framework"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"support",children:"Support"}),"\n",(0,s.jsxs)(r.p,{children:["We're working hard in our free time to provide you, your friends, and families with the best self-hosted gaming experience. It would mean a lot to us if you could support us developers by ",(0,s.jsx)(r.a,{href:"/docs/gamevault-plus/introduction",children:"getting GameVault+"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Alternatively you can support us by donating us some spare dollars on any of these platforms:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://ko-fi.com/phalcode",children:"Ko-Fi"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://liberapay.com/Phalcode",children:"Liberapay"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/sponsors/Phalcode",children:"GitHub Sponsors"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://paypal.me/phalcode",children:"PayPal"})}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{title:"Tip for donators",type:"tip",children:(0,s.jsxs)(r.p,{children:["If you connect your ",(0,s.jsx)(r.a,{href:"https://discord.gg/NEdNen2dSu",children:"Discord"}),' account to Ko-Fi, you\'ll automatically receive the "@Supporters"-Role and permanently stand out in our ',(0,s.jsx)(r.a,{href:"https://discord.gg/NEdNen2dSu",children:"Discord"})," members list. If you donate through a different platform and want to obtain the role, simply send us a message with your receipt as proof that you're truly a Supporter."]})}),"\n",(0,s.jsx)(r.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:(0,s.jsx)(r.img,{src:"https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg",alt:"CC BY-NC-SA 4.0"})})}),"\n",(0,s.jsxs)(r.p,{children:["This work is licensed under a\n",(0,s.jsx)(r.a,{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:(0,s.jsx)(r.img,{src:"https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png",alt:"CC BY-NC-SA 4.0"})})}),"\n",(0,s.jsx)(r.h2,{id:"legal-disclaimer",children:"Legal Disclaimer"}),"\n",(0,s.jsxs)(r.admonition,{title:"Legal Disclaimer",type:"warning",children:[(0,s.jsx)(r.p,{children:"GameVault manages DRM-free games and is solely a tool to address this need. We are not responsible for the content or files users store or share."}),(0,s.jsxs)(r.p,{children:["When we say DRM-free games, we only mean games obtained legally. While GameVault ",(0,s.jsx)(r.em,{children:"can"})," theoretically be used with illegally obtained games, we do not endorse or support piracy."]}),(0,s.jsx)(r.p,{children:"Users must be aware of and comply with copyright laws in their respective jurisdictions. We encourage responsible and legal use of GameVault. Unlawful use is strictly improper and unauthorized."})]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8358:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var s=n(5271);const i={},t=s.createContext(i);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);