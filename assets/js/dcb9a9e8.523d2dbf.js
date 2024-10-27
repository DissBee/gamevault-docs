"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[4758],{2160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(2676),s=t(8358);const a={},l="Running the Client on Linux",o={id:"advanced-usage/linux-client",title:"Running the Client on Linux",description:"This page serves as a community-driven guide to assist you in setting up the GameVault client on Linux.",source:"@site/docs/advanced-usage/linux-client.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/linux-client",permalink:"/docs/advanced-usage/linux-client",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/advanced-usage/linux-client.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1730071561e3,frontMatter:{},sidebar:"docs",previous:{title:"Configuring Fail2Ban for GameVault",permalink:"/docs/advanced-usage/fail2ban-gamevault-guide"},next:{title:"Running the Client on Steamdeck",permalink:"/docs/advanced-usage/steamdeck"}},d={},c=[{value:"Getting the application",id:"getting-the-application",level:2},{value:"Setting up with Wine",id:"setting-up-with-wine",level:2},{value:"Setting up with Bottles",id:"setting-up-with-bottles",level:2},{value:"Updating the Client",id:"updating-the-client",level:2},{value:"Known issues",id:"known-issues",level:2}];function r(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"running-the-client-on-linux",children:"Running the Client on Linux"})}),"\n",(0,i.jsx)(n.p,{children:"This page serves as a community-driven guide to assist you in setting up the GameVault client on Linux."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Please note that running GameVault on Linux using this method is considered ",(0,i.jsx)(n.strong,{children:"unsupported"})," and ",(0,i.jsx)(n.strong,{children:"unrecommended"}),". It should only be utilized as a last resort when no other options are available."]})}),"\n",(0,i.jsx)(n.h2,{id:"getting-the-application",children:"Getting the application"}),"\n",(0,i.jsxs)(n.p,{children:["To start, you need the Application files. The simplest way to get them is explained ",(0,i.jsx)(n.a,{href:"/docs/client-docs/setup#option-1-obtain-pre-built-artifacts-from-github",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-with-wine",children:"Setting up with Wine"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install Wine and winetricks"}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"winetricks dotnetdesktop6"})," in a terminal"]}),"\n",(0,i.jsxs)(n.li,{children:["Launch ",(0,i.jsx)(n.code,{children:"gamevault.exe"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-with-bottles",children:"Setting up with Bottles"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"When using Bottles under flatpak, your data will be in the following directory:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"~/.var/app/com.usebottles.bottles/data/bottles/[YOUR BOTTLE NAME]"})}),(0,i.jsx)(n.p,{children:"Keep that in mind when unpacking games to install them."})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.a,{href:"https://usebottles.com/",children:"Bottles"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create a new bottle",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Creating a new Bottle",src:t(9299).Z+"",width:"672",height:"559"})]}),"\n",(0,i.jsxs)(n.li,{children:["Inside your bottle click ",(0,i.jsx)(n.code,{children:"Dependencies"})," and install ",(0,i.jsx)(n.code,{children:"dotnetcoredesktop6"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Configuring the .NET Core Dependency",src:t(3211).Z+"",width:"1920",height:"1042"})]}),"\n",(0,i.jsxs)(n.li,{children:["Go back to the main page for your bottle and press ",(0,i.jsx)(n.code,{children:"Run Executable..."})," and select ",(0,i.jsx)(n.code,{children:"gamevault.exe"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-client",children:"Updating the Client"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Since there is currently no auto-update functionality available (as mentioned in ",(0,i.jsx)(n.a,{href:"/docs/client-docs/updating-client#other-sources",children:"this link"}),"), it is your responsibility to manually update your GameVault client. To update your client, you will need to repeat the procedure in this documentation."]})}),"\n",(0,i.jsx)(n.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Text can look very broken if certain fonts are not installed on your system.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you're on Arch Linux, ",(0,i.jsx)(n.a,{href:"https://aur.archlinux.org/packages/ttf-ms-win11-auto",children:"this"})," AUR package fixes the issue."]}),"\n",(0,i.jsxs)(n.li,{children:["If you're on Debian, you could try to use ",(0,i.jsx)(n.a,{href:"https://packages.debian.org/ttf-mscorefonts-installer",children:"this"})," package. (untested)"]}),"\n",(0,i.jsxs)(n.li,{children:["Additionally - you can also try ",(0,i.jsx)(n.a,{href:"https://archive.org/details/windows-11-21h2-complete-font-collection",children:"this"})," and install it to your wine prefix's fonts folder ~/.wine/drive_c/windows/Fonts ; This works on the steamdeck"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},3211:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dotnet-394a9ce8159950d1b64fc6831db7a59c.png"},9299:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/make_bottle-0aa58e120e66831b38d8c7cc6584b087.png"},8358:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(5271);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);