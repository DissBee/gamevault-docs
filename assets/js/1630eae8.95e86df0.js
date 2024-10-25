"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[1105],{943:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=t(2676),a=t(8358);const s={title:"Using TrueNAS Scale",sidebar_position:4},r=void 0,i={id:"server-docs/setup/truenas-scale",title:"Using TrueNAS Scale",description:"TrueNAS Scale is an open-source, hyper-converged storage platform that combines the reliability of TrueNAS with the versatility of Linux, providing a unified solution for storage, virtualization, and containerization in a single, easy-to-manage system.",source:"@site/docs/server-docs/setup/truenas-scale.md",sourceDirName:"server-docs/setup",slug:"/server-docs/setup/truenas-scale",permalink:"/docs/server-docs/setup/truenas-scale",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/setup/truenas-scale.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1729842129e3,sidebarPosition:4,frontMatter:{title:"Using TrueNAS Scale",sidebar_position:4},sidebar:"docs",previous:{title:"Using CapRover",permalink:"/docs/server-docs/setup/caprover"},next:{title:"Using UNRAID",permalink:"/docs/server-docs/setup/unraid"}},c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Log in to your TrueNAS Scale Dashboard",id:"step-1-log-in-to-your-truenas-scale-dashboard",level:2},{value:"Step 2: Navigate to the catalog Page in TrueNas Scale",id:"step-2-navigate-to-the-catalog-page-in-truenas-scale",level:2},{value:"Step 3: Navigate to Apps and Disover Page",id:"step-3-navigate-to-apps-and-disover-page",level:2},{value:"Step 4: Configure and Install gamevault-backend",id:"step-4-configure-and-install-gamevault-backend",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Info",id:"additional-info",level:2},{value:"Stopping the Server",id:"stopping-the-server",level:3},{value:"Reading the Logs",id:"reading-the-logs",level:3}];function l(A){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://www.truenas.com/truenas-scale/",children:"TrueNAS Scale"})," is an open-source, hyper-converged storage platform that combines the reliability of TrueNAS with the versatility of Linux, providing a unified solution for storage, virtualization, and containerization in a single, easy-to-manage system."]}),"\n",(0,n.jsxs)(e.p,{children:["Setting up a GameVault Server on TrueNAS Scale is just a click away by using our template from the ",(0,n.jsx)(e.a,{href:"https://truecharts.org/manual/SCALE/guides/getting-started",children:"Truecharts Catalog"}),",\na community based catalog for TrueNAS Scale."]}),"\n",(0,n.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"a running TrueNAS Scale Server!"}),"\n",(0,n.jsxs)(e.li,{children:["add the TrueCharts",(0,n.jsx)(e.a,{href:"https://truecharts.org/manual/SCALE/guides/getting-started",children:"Catalog"})]}),"\n",(0,n.jsxs)(e.li,{children:["Install the following ",(0,n.jsx)(e.a,{href:"https://truecharts.org/manual/FAQ#operators",children:"operators"})," from TrueCharts; ",(0,n.jsx)(e.strong,{children:"prometheus-operator"})," and ",(0,n.jsx)(e.strong,{children:"cloudnative-pg"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"step-1-log-in-to-your-truenas-scale-dashboard",children:"Step 1: Log in to your TrueNAS Scale Dashboard"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Step 1",src:t(3346).Z+"",width:"1919",height:"943"})}),"\n",(0,n.jsx)(e.h2,{id:"step-2-navigate-to-the-catalog-page-in-truenas-scale",children:"Step 2: Navigate to the catalog Page in TrueNas Scale"}),"\n",(0,n.jsxs)(e.p,{children:["Go to ",(0,n.jsx)(e.strong,{children:"apps"})," -> ",(0,n.jsx)(e.strong,{children:"discover"})," -> ",(0,n.jsx)(e.strong,{children:"catalogs"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Step 2",src:t(1947).Z+"",width:"1918",height:"592"})}),"\n",(0,n.jsx)(e.p,{children:"Validate that TrueCharts catalog was added to the server, if not refer back to the Prerequisites section."}),"\n",(0,n.jsx)(e.h2,{id:"step-3-navigate-to-apps-and-disover-page",children:"Step 3: Navigate to Apps and Disover Page"}),"\n",(0,n.jsxs)(e.p,{children:["Go to ",(0,n.jsx)(e.strong,{children:"apps"})," -> ",(0,n.jsx)(e.strong,{children:"discover"})," and search for ",(0,n.jsx)(e.strong,{children:"gamevault-backend"})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Step 3",src:t(7664).Z+"",width:"1919",height:"587"})}),"\n",(0,n.jsx)(e.h2,{id:"step-4-configure-and-install-gamevault-backend",children:"Step 4: Configure and Install gamevault-backend"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Step 4",src:t(1759).Z+"",width:"1919",height:"374"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Step 4a",src:t(1465).Z+"",width:"1488",height:"752"})}),"\n",(0,n.jsxs)(e.p,{children:["Scroll down to ",(0,n.jsx)(e.strong,{children:"App Configuration"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Set your ",(0,n.jsx)(e.code,{children:"Admin User"})," and ",(0,n.jsx)(e.code,{children:"Admin Password"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Step 4b",src:t(3099).Z+"",width:"1485",height:"874"})}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsx)(e.p,{children:"Leave the Logs and Images storage options as PVC."})}),"\n",(0,n.jsxs)(e.p,{children:["Games storage option can be safely set hostpath if not using using any shares or switch to NFS otherwise; please follow the ",(0,n.jsx)(e.a,{href:"https://truecharts.org/manual/SCALE/guides/dataset",children:"Dataset and Share Setup"})," guide."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Step 4c",src:t(3099).Z+"",width:"1485",height:"874"})}),"\n",(0,n.jsxs)(e.p,{children:["Scroll down to ",(0,n.jsx)(e.strong,{children:"Documentation"})," and click install, wait a few minutes and the app should deploy!"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Installed",src:t(1679).Z+"",width:"1919",height:"949"})}),"\n",(0,n.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(e.p,{children:"You have now successfully set up your GameVault Server using TrueNAS Scale."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/server-docs/setup/#what-next",children:"Click here to continue."})}),"\n",(0,n.jsx)(e.h2,{id:"additional-info",children:"Additional Info"}),"\n",(0,n.jsx)(e.h3,{id:"stopping-the-server",children:"Stopping the Server"}),"\n",(0,n.jsxs)(e.p,{children:["To stop the server in TrueNAS Scale, you can click on the gamevault-backend app and then edit the app; set the replicas to 0 or use the ",(0,n.jsx)(e.a,{href:"https://truecharts.org/news/stop-all/",children:'"stop-all"'}),' feature. When editing an application, checking the "stop-all" box and saving the changes accomplishes this. If you\'re working with applications based on CNPG (cloudnative-postgres), the same methods apply, ensuring a safe shutdown.']}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"stop-all",src:t(3757).Z+"",width:"394",height:"423"})}),"\n",(0,n.jsxs)(e.p,{children:["If you prefer using ",(0,n.jsx)(e.a,{href:"https://github.com/Heavybullets8/heavy_script",children:"Heavyscript"}),", a specialized script for TrueNAS Scale, it offers a secure way to stop apps, including those utilizing CNPG. By default, Heavyscript employs the ",(0,n.jsx)(e.a,{href:"https://truecharts.org/news/stop-all/",children:'"stop-all"'})," function to ensure a graceful shutdown."]}),"\n",(0,n.jsx)(e.p,{children:"Simple commands for heavyscript:"}),"\n",(0,n.jsxs)(e.p,{children:["stop: ",(0,n.jsx)(e.code,{children:"heavyscript app -x gamevault-backend"})]}),"\n",(0,n.jsxs)(e.p,{children:["start: ",(0,n.jsx)(e.code,{children:"heavyscript app -s gamevault-backend"})]}),"\n",(0,n.jsx)(e.p,{children:'Keep in mind that TrueNAS Scale does not support third-party operators. Consequently, relying on the stop button within the TrueNAS Scale GUI, often considered an IX (iXsystems) hack in the Kubernetes space, is not recommended. For a dependable and supported approach, opt for the replica settings, "stop-all" checkbox, or leverage Heavyscript.'}),"\n",(0,n.jsx)(e.h3,{id:"reading-the-logs",children:"Reading the Logs"}),"\n",(0,n.jsx)(e.p,{children:'Navigate to "Apps" and choose the GameVault-backend App you have created.'}),"\n",(0,n.jsx)(e.p,{children:"In workloads, select any of the white boxes with lines icon; thats the logs button."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"gamevault-workloads-logs-1",src:t(8611).Z+"",width:"422",height:"809"})}),"\n",(0,n.jsx)(e.p,{children:"You have to select the correct main pod and container"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"gamevault-workloads-logs-2",src:t(2248).Z+"",width:"598",height:"352"})}),"\n",(0,n.jsx)(e.p,{children:"Once you selected the main pod and container pod; you should see the logs for the app"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"gamevault-workloads-logs-3",src:t(2856).Z+"",width:"1881",height:"235"})}),"\n",(0,n.jsx)(e.p,{children:"You can then download the logs, but you might have to reselect the correct pods again when downloading the logs."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"gamevault-workloads-logs-4",src:t(8017).Z+"",width:"588",height:"421"})})]})}function g(A={}){const{wrapper:e}={...(0,a.a)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(l,{...A})}):l(A)}},3757:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/gamevault-stop-all-1f3a1e720ade3ecba89c0d63e6ee9bc1.png"},8611:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/gamevault-workloads-logs-1-0a2a9337c9356c4acd287492e815ee01.png"},2248:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},2856:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/gamevault-workloads-logs-3-1baf7d54cd87481af3685e08c77f9d0d.png"},8017:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},1947:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/scale-add-truecharts-catalog-201abb147a45192270d8978f1d560324.png"},1465:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/scale-configure-gamevault-app-install-1-f77e819fe4925ed18904f80e6f0d613e.png"},3099:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/scale-configure-gamevault-app-install-3-ac408b5dfd46341a7f7c77f6196fd506.png"},1679:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/scale-configured-gamevault-app-installed-db255883caaf34572f6403034d11f56a.png"},1759:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/scale-discover-gamevault-app-install-203a397bf7abfccc33be4462ec225bb5.png"},7664:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/scale-discover-gamevault-app-search-042a9ac7bc7a5ce195b085144c4a3e60.png"},3346:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/scale-login-248c8e0a2719f7dc7db7893a7d97dc3b.png"},8358:(A,e,t)=>{t.d(e,{Z:()=>i,a:()=>r});var n=t(5271);const a={},s=n.createContext(a);function r(A){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function i(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(a):A.components||a:r(A.components),n.createElement(s.Provider,{value:e},A.children)}}}]);