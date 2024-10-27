"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[1420],{7547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(2676),a=t(8358);const r={title:"Using Synology Container Manager",sidebar_position:6},s=void 0,i={id:"server-docs/setup/synology-container-manager",title:"Using Synology Container Manager",description:"Synology Container Manager is a software application developed by Synology Inc. for their network-attached storage (NAS) devices. It provides users with a graphical user interface for managing Docker containers, allowing them to deploy, manage, and monitor containerized applications on their Synology NAS.",source:"@site/docs/server-docs/setup/synology-container-manager.md",sourceDirName:"server-docs/setup",slug:"/server-docs/setup/synology-container-manager",permalink:"/docs/server-docs/setup/synology-container-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/setup/synology-container-manager.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1730071561e3,sidebarPosition:6,frontMatter:{title:"Using Synology Container Manager",sidebar_position:6},sidebar:"docs",previous:{title:"Using UNRAID",permalink:"/docs/server-docs/setup/unraid"},next:{title:"Using Native Approach",permalink:"/docs/server-docs/setup/native"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Create Necessary Folders",id:"step-1-create-necessary-folders",level:2},{value:"Step 2: Set Up a Project in Container Manager",id:"step-2-set-up-a-project-in-container-manager",level:2},{value:"Step 3: Create Docker Compose File",id:"step-3-create-docker-compose-file",level:2},{value:"Alternative Step 3: Running without a PostgreSQL Database",id:"alternative-step-3-running-without-a-postgresql-database",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Info",id:"additional-info",level:2},{value:"Stopping the Server",id:"stopping-the-server",level:3},{value:"Reading the Logs",id:"reading-the-logs",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Synology Container Manager is a software application developed by Synology Inc. for their network-attached storage (NAS) devices. It provides users with a graphical user interface for managing Docker containers, allowing them to deploy, manage, and monitor containerized applications on their Synology NAS."}),"\n",(0,o.jsx)(n.p,{children:"In this guide, you will learn how to set up GameVault on such a system using Docker Compose."}),"\n",(0,o.jsx)(n.admonition,{title:"Contribute to this page!",type:"note",children:(0,o.jsx)(n.p,{children:"Unfortunately, none of our team members uses Synology Hardware and this guide was written blindly. The GameVault Docs live from contributions. If you use a Synology system kindly contribute some screenshots to this page. Thanks!"})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Access to a Synology NAS with ",(0,o.jsx)(n.a,{href:"https://www.synology.com/dsm/packages/ContainerManager",children:"Container Manager"})," installed. See supported devices ",(0,o.jsx)(n.a,{href:"https://www.synology.com/dsm/packages/ContainerManager",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-1-create-necessary-folders",children:"Step 1: Create Necessary Folders"}),"\n",(0,o.jsxs)(n.p,{children:["Begin by creating directories for the containers to utilize.",(0,o.jsx)(n.br,{}),"\n","Open ",(0,o.jsx)(n.code,{children:"File Station"})," and create the following folders:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/docker/projects/gamevault-compose"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/docker/gamevault"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/docker/gamevault/files"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/docker/gamevault/media"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/docker/gamevault/database"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-2-set-up-a-project-in-container-manager",children:"Step 2: Set Up a Project in Container Manager"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open ",(0,o.jsx)(n.code,{children:"Container Manager"})," from your Synology NAS."]}),"\n",(0,o.jsx)(n.li,{children:"Click on 'Project' and then 'Create'"}),"\n",(0,o.jsxs)(n.li,{children:["Fill in the following details:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Project Name: ",(0,o.jsx)(n.code,{children:"gamevault"})]}),"\n",(0,o.jsxs)(n.li,{children:["Path: ",(0,o.jsx)(n.code,{children:"/docker/projects/gamevault-compose"})]}),"\n",(0,o.jsx)(n.li,{children:"Source: Select 'Create docker-compose.yml'"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-3-create-docker-compose-file",children:"Step 3: Create Docker Compose File"}),"\n",(0,o.jsx)(n.p,{children:"Copy and paste the following code into the editor:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"services:\r\n  gamevault-backend:\r\n    image: phalcode/gamevault-backend:latest\r\n    restart: unless-stopped\r\n    environment:\r\n      DB_HOST: db\r\n      DB_USERNAME: gamevault\r\n      DB_PASSWORD: YOURPASSWORDHERE\r\n    volumes:\r\n      - /volume1/docker/gamevault/files:/files\r\n      - /volume1/docker/gamevault/media:/media\r\n    ports:\r\n      - 8080:8080/tcp\r\n  db:\r\n    image: postgres:16\r\n    restart: unless-stopped\r\n    environment:\r\n      POSTGRES_USER: gamevault\r\n      POSTGRES_PASSWORD: YOURPASSWORDHERE\r\n      POSTGRES_DB: gamevault\r\n    volumes:\r\n      - /volume1/docker/gamevault/database:/var/lib/postgresql/data\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Replace the variables (",(0,o.jsx)(n.code,{children:"YOURPASSWORDHERE"}),", ",(0,o.jsx)(n.code,{children:"etc."}),"), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell."]})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Password (YOURPASSWORDHERE) can't be empty! else the database will not work. If you don't want a password, consider running without a PostgreSQL Database (Not recommended)"})}),"\n",(0,o.jsx)(n.h3,{id:"alternative-step-3-running-without-a-postgresql-database",children:"Alternative Step 3: Running without a PostgreSQL Database"}),"\n",(0,o.jsx)(n.p,{children:"We don't recommend it, but you can run GameVault without a PostgreSQL Database too using the following configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'services:\r\n  gamevault-backend:\r\n    image: phalcode/gamevault-backend:latest\r\n    restart: unless-stopped\r\n    environment:\r\n      DB_SYSTEM: "SQLITE"\r\n    ports:\r\n      - 8080:8080/tcp #Change the left one if you want\r\n    volumes:\r\n      - /volume1/docker/gamevault/files:/files\r\n      - /volume1/docker/gamevault/media:/media\r\n      - /volume1/docker/gamevault/database:/db\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Replace the variables (",(0,o.jsx)(n.code,{children:"YOURPASSWORDHERE"}),", ",(0,o.jsx)(n.code,{children:"etc."}),"), as well as the folder paths with what suits you, of course. You can change the port on the left side of the colon aswell."]})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"You've successfully set up GameVault Server using Synology Container Manager. You should now be able to access the web interface via your NAS's IP address followed by port 8080. If you encounter any issues or have feedback, please let us know."}),"\n",(0,o.jsx)(n.h2,{id:"additional-info",children:"Additional Info"}),"\n",(0,o.jsx)(n.h3,{id:"stopping-the-server",children:"Stopping the Server"}),"\n",(0,o.jsx)(n.p,{children:"To stop the GameVault Server, follow these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.code,{children:"Container Manager"})," on your Synology NAS."]}),"\n",(0,o.jsx)(n.li,{children:"Select the GameVault container from the list of running containers."}),"\n",(0,o.jsx)(n.li,{children:'Click on "Stop" to halt the container\'s operation.'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"reading-the-logs",children:"Reading the Logs"}),"\n",(0,o.jsx)(n.p,{children:"To view the logs for the GameVault Server, do the following:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.code,{children:"Container Manager"})," on your Synology NAS."]}),"\n",(0,o.jsx)(n.li,{children:"Select the GameVault container from the list of containers."}),"\n",(0,o.jsx)(n.li,{children:'Click on "Details" to expand the container\'s information.'}),"\n",(0,o.jsx)(n.li,{children:'Select the "Log" tab to view the container\'s logs in real-time.'}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8358:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(5271);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);