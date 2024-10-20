"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[9360],{5465:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(2676),i=r(9246);const o={sidebar_position:99},t="Troubleshooting",a={id:"troubleshooting",title:"Troubleshooting",description:"Below, we will gradually list some common issues and corresponding solutions to help you maximize the potential of your app. If you can't find a solution to your problem here, feel free to open a ticket on our Github board or seek assistance via Discord. Alternatively, you may also directly email our company address if the issue is confidential.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1729429525e3,sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"docs",previous:{title:"Licensing and Contributions",permalink:"/docs/license-contribute"}},l={},d=[{value:"All-Rounder Solutions that Fix Most Problems",id:"all-rounder-solutions-that-fix-most-problems",level:2},{value:"Common Problems and Solutions",id:"common-problems-and-solutions",level:2},{value:"Incorrect Game Mapping",id:"incorrect-game-mapping",level:3},{value:"Server fails to save media / create SQLITE Database / index games / throws a Permissions Denied / No Permission / EACCES error",id:"server-fails-to-save-media--create-sqlite-database--index-games--throws-a-permissions-denied--no-permission--eacces-error",level:3},{value:"Unable to Connect to Server / 500 Internal Server Error",id:"unable-to-connect-to-server--500-internal-server-error",level:3},{value:"Initial Admin User is not working",id:"initial-admin-user-is-not-working",level:3},{value:"Games Not Appearing in the Installations / Servers List",id:"games-not-appearing-in-the-installations--servers-list",level:3},{value:"Missing Box Arts",id:"missing-box-arts",level:3},{value:"Lack of Metadata in Games",id:"lack-of-metadata-in-games",level:3},{value:"Lost my Admin Role",id:"lost-my-admin-role",level:3},{value:"Forgot my Admin Password",id:"forgot-my-admin-password",level:3},{value:"Game Downloads are slow",id:"game-downloads-are-slow",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,n.jsxs)(s.p,{children:["Below, we will gradually list some common issues and corresponding solutions to help you maximize the potential of your app. If you can't find a solution to your problem here, feel free to open a ticket on our Github board or seek assistance via ",(0,n.jsx)(s.a,{href:"https://discord.gg/NEdNen2dSu",children:"Discord"}),". Alternatively, you may also directly ",(0,n.jsx)(s.a,{href:"mailto:contact@phalco.de",children:"email our company address"})," if the issue is confidential."]}),"\n",(0,n.jsx)(s.admonition,{title:"How to report an issue",type:"tip",children:(0,n.jsxs)(s.p,{children:["Always provide as much information as possible so that we can reproduce the problem, and ",(0,n.jsx)(s.strong,{children:"always"})," attach a full (from the start of the server to when the problem occurs) log file with the ",(0,n.jsx)(s.code,{children:"SERVER_LOG_LEVEL"})," env-var set to ",(0,n.jsx)(s.code,{children:"debug"}),". You ",(0,n.jsx)(s.strong,{children:"must not"})," shorten log files. It just makes it harder for us to understand what went wrong. We know they get big, but we know how to read them."]})}),"\n",(0,n.jsx)(s.h2,{id:"all-rounder-solutions-that-fix-most-problems",children:"All-Rounder Solutions that Fix Most Problems"}),"\n",(0,n.jsx)(s.p,{children:"I can't mention these in every single Section below, so before you try to solve anything, try these:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Check if the server is running healthy and is reachable from your client."}),"\n",(0,n.jsx)(s.li,{children:"Restart GameVault Client and Server."}),"\n",(0,n.jsxs)(s.li,{children:["Examine Client and Server Logs for error details. (Set ",(0,n.jsx)(s.code,{children:"SERVER_LOG_LEVEL"})," to ",(0,n.jsx)(s.code,{children:"debug"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Check ",(0,n.jsx)(s.a,{href:"/docs/server-docs/configuration",children:"Server for any issues with Configuration"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"common-problems-and-solutions",children:"Common Problems and Solutions"}),"\n",(0,n.jsx)(s.h3,{id:"incorrect-game-mapping",children:"Incorrect Game Mapping"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Refer to ",(0,n.jsx)(s.a,{href:"/docs/client-docs/how-to-use#modifying-games",children:"this"})," for instructions on how to remap your games."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"server-fails-to-save-media--create-sqlite-database--index-games--throws-a-permissions-denied--no-permission--eacces-error",children:"Server fails to save media / create SQLITE Database / index games / throws a Permissions Denied / No Permission / EACCES error"}),"\n",(0,n.jsx)(s.p,{children:"This is most probably a permissions issue due to the fact that gamevault runs as a non-root user (1000:1000) by default for security purposes."}),"\n",(0,n.jsxs)(s.p,{children:["Either make sure this user has permissions to read/write to the folders you map in as volumes, or run GameVault with a user that has the permissions to do so. You can do this by using the ",(0,n.jsx)(s.code,{children:"PUID"})," & ",(0,n.jsx)(s.code,{children:"PGID"})," environment variables."]}),"\n",(0,n.jsx)(s.h3,{id:"unable-to-connect-to-server--500-internal-server-error",children:"Unable to Connect to Server / 500 Internal Server Error"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Ensure that you use the correct protocol (http or https) in the connection string, particularly if your server doesn't support SSL."}),"\n",(0,n.jsxs)(s.li,{children:["If you have disabled authentication in your server configuration, make sure to include the authentication header for user-specific requests. ",(0,n.jsx)(s.a,{href:"/docs/server-docs/configuration",children:"See here"})," for more information."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"initial-admin-user-is-not-working",children:"Initial Admin User is not working"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"You need to register the first user. It is automatically activated and granted admin permissions."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"games-not-appearing-in-the-installations--servers-list",children:"Games Not Appearing in the Installations / Servers List"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/server-docs/adding-games",children:"Add Games to your server"})}),"\n",(0,n.jsx)(s.li,{children:"Clear the Searchbox"}),"\n",(0,n.jsx)(s.li,{children:"Clear all active Filters"}),"\n",(0,n.jsx)(s.li,{children:"Press F5 to trigger a new search"}),"\n",(0,n.jsxs)(s.li,{children:["For installations, verify your correct root folder is set ",(0,n.jsx)(s.a,{href:"/docs/client-docs/gui#data",children:"in the settings"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Verify your server's game id does not differ from the one in your installation folder (The game's server id can be found in the lower left corner of ",(0,n.jsx)(s.a,{href:"/docs/client-docs/gui#game-settings",children:"the game's settings"}),")."]}),"\n",(0,n.jsxs)(s.li,{children:["Verify ",(0,n.jsx)(s.a,{href:"/docs/server-docs/structure",children:"your file names are correct"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Check the Filesystem Permissions. See ",(0,n.jsx)(s.a,{href:"#server-fails-to-save-media--create-sqlite-database--index-games--throws-a-permissions-denied--no-permission--eacces-error",children:"here"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"missing-box-arts",children:"Missing Box Arts"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/server-docs/metadata-enrichment/metadata",children:"Set up a Metadata Provider"})," that provides box art for your games."]}),"\n",(0,n.jsxs)(s.li,{children:["Clear media caches ",(0,n.jsx)(s.a,{href:"/docs/client-docs/gui#data",children:"in the settings."})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"lack-of-metadata-in-games",children:"Lack of Metadata in Games"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/server-docs/metadata-enrichment/metadata",children:"Set up a Metadata Provider"})," that provides metadata for your games."]}),"\n",(0,n.jsxs)(s.li,{children:["Verify if ",(0,n.jsx)(s.a,{href:"/docs/server-docs/configuration",children:"your Metadata Provider is disabled in your server configuration"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Verify if ",(0,n.jsx)(s.a,{href:"/docs/server-docs/structure",children:"your file names are correct"})]}),"\n",(0,n.jsxs)(s.li,{children:["Verify if you accidently marked your game as ",(0,n.jsx)(s.code,{children:"(NC)"})," (No Cache Flag)"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"lost-my-admin-role",children:"Lost my Admin Role"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Refer to ",(0,n.jsx)(s.a,{href:"./server-docs/user-management#admin-role-recovery",children:"this"})," for instructions on how to regain admin privileges for your user."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"forgot-my-admin-password",children:"Forgot my Admin Password"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Refer to ",(0,n.jsx)(s.a,{href:"./server-docs/user-management#admin-password-recovery",children:"this"})," for instructions on how to reset the password of your admin user."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"game-downloads-are-slow",children:"Game Downloads are slow"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Make sure the Clients Bandwidth Speed Limit is unset under ",(0,n.jsx)(s.code,{children:"Settings -> Application"})]}),"\n",(0,n.jsxs)(s.li,{children:["Make sure the Servers Bandwidth Speed Limit is unset (",(0,n.jsx)(s.code,{children:"SERVER_MAX_DOWNLOAD_BANDWIDTH_IN_KBPS"})," environment variable unset or 0)"]}),"\n",(0,n.jsx)(s.li,{children:"Restart your Client and Server"}),"\n",(0,n.jsx)(s.li,{children:"If your server is in your LAN, make sure you don't mistakenly access it from WAN"}),"\n",(0,n.jsx)(s.li,{children:"Check your middle-mans: Proxies, VPNs and older Network Hardware could all affect the download speeds."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9246:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>t});var n=r(5271);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);