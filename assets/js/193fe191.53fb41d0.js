"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[7459],{3323:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(2676),t=s(9246);const i={},n="Provider: IGDB",c={id:"server-docs/metadata-enrichment/provider-igdb",title:"Provider: IGDB",description:"Overview",source:"@site/docs/server-docs/metadata-enrichment/provider-igdb.md",sourceDirName:"server-docs/metadata-enrichment",slug:"/server-docs/metadata-enrichment/provider-igdb",permalink:"/docs/server-docs/metadata-enrichment/provider-igdb",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/metadata-enrichment/provider-igdb.md",tags:[],version:"current",lastUpdatedBy:"Alper Alkan",lastUpdatedAt:1729429525e3,frontMatter:{},sidebar:"docs",previous:{title:"Enriching your Games with Metadata",permalink:"/docs/server-docs/metadata-enrichment/metadata"},next:{title:"Database Backup & Restoration",permalink:"/docs/server-docs/backup-and-restore"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Mappings",id:"mappings",level:2},{value:"Fields",id:"fields",level:3},{value:"Age Rating",id:"age-rating",level:3}];function x(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.header,{children:(0,r.jsx)(d.h1,{id:"provider-igdb",children:"Provider: IGDB"})}),"\n",(0,r.jsx)(d.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.a,{href:"https://igdb.com",children:"The Internet Games Database (IGDB)"})," is one of the most popular databases for detailed video game information run by ",(0,r.jsx)(d.a,{href:"https://twitch.tv",children:"twitch.tv"}),". By integrating IGDB with GameVault, users get accurate and up-to-date game data. We're pleased to partner with IGDB to provide the best game information to our users."]}),"\n",(0,r.jsx)(d.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(d.ol,{children:["\n",(0,r.jsxs)(d.li,{children:["Log in to your Twitch Account on ",(0,r.jsx)(d.a,{href:"https://dev.twitch.tv/login",children:(0,r.jsx)(d.strong,{children:"dev.twitch.tv"})}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:"Create a new account if you don't have one already."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(d.li,{children:["Open the ",(0,r.jsx)(d.a,{href:"https://dev.twitch.tv/console/apps",children:(0,r.jsx)(d.strong,{children:"Twitch Developer dashboard"})}),"."]}),"\n",(0,r.jsxs)(d.li,{children:["Click on ",(0,r.jsx)(d.a,{href:"https://dev.twitch.tv/console/apps/create",children:(0,r.jsx)(d.strong,{children:"Register your application"})}),"\n",(0,r.jsx)(d.img,{alt:"Register your application",src:s(6473).Z+"",width:"1254",height:"393"})]}),"\n",(0,r.jsxs)(d.li,{children:["Fill out the form as shown in the image. Make sure to solve the CAPTCHA.\n",(0,r.jsx)(d.img,{alt:"Fill in the details",src:s(4749).Z+"",width:"1258",height:"832"})]}),"\n",(0,r.jsxs)(d.li,{children:["Once your application is created, click on ",(0,r.jsx)(d.strong,{children:"Manage"}),".\n",(0,r.jsx)(d.img,{alt:"Manage",src:s(5498).Z+"",width:"1259",height:"317"})]}),"\n",(0,r.jsxs)(d.li,{children:["Click on ",(0,r.jsx)(d.strong,{children:"New Secret"}),". Make sure to solve the CAPTCHA.\n",(0,r.jsx)(d.img,{alt:"New Secret",src:s(2509).Z+"",width:"1250",height:"1053"})]}),"\n",(0,r.jsxs)(d.li,{children:["Copy your ",(0,r.jsx)(d.strong,{children:"Client ID"})," and ",(0,r.jsx)(d.strong,{children:"Client Secret"})," and configure them in GameVaults ",(0,r.jsx)(d.code,{children:"METADATA_IGDB_CLIENT_ID"})," and ",(0,r.jsx)(d.code,{children:"METADATA_IGDB_CLIENT_SECRET"})," environment variables."]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.strong,{children:"Done!"})," \ud83e\udd73 Now just restart your server and it should do it's magic. If you have lots of games, it may take a while to fetch all metadata. You can check the progress in the server logs."]}),"\n"]}),"\n",(0,r.jsx)(d.h2,{id:"configurations",children:"Configurations"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Property"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Default"}),(0,r.jsx)(d.th,{children:"Possible Values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_ENABLED"})}),(0,r.jsx)(d.td,{children:"Enables / Disables the Provider"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"true"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_PRIORITY"})}),(0,r.jsx)(d.td,{children:"Priority of the Provider"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"50"})}),(0,r.jsx)(d.td,{children:"Any Integer"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"Your developer.twitch.tv Client ID"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Your Client-ID"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"METADATA_IGDB_CLIENT_SECRET"})}),(0,r.jsx)(d.td,{children:"Your developer.twitch.tv Client Secret"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Your Client-Secret"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"mappings",children:"Mappings"}),"\n",(0,r.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"GameVault Field"}),(0,r.jsx)(d.th,{children:"IGDB API Field(s)"}),(0,r.jsx)(d.th,{children:"Notes"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"provider_slug"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"igdb"})}),(0,r.jsx)(d.td,{children:"hardcoded."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"age_rating"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"age_ratings"})}),(0,r.jsxs)(d.td,{children:["See ",(0,r.jsx)(d.a,{href:"#age-rating",children:"here"})," for details."]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"provider_data_id"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"id"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"provider_data_url"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"url"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"title"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"name"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"release_date"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"first_release_date"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"description"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"game.summary"})," and/or ",(0,r.jsx)(d.code,{children:"game.storyline"})]}),(0,r.jsx)(d.td,{children:"If both are available, both get used, else any available will be mapped"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"rating"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"total_rating"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"early_access"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"status"})}),(0,r.jsxs)(d.td,{children:["True if the Game is either in status ",(0,r.jsx)(d.code,{children:"alpha"}),", ",(0,r.jsx)(d.code,{children:"beta"})," or ",(0,r.jsx)(d.code,{children:"early_access"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"developers"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"involved_companies"})}),(0,r.jsxs)(d.td,{children:["Filtered by ",(0,r.jsx)(d.code,{children:"involved_company.developer === true"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"publishers"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"involved_companies"})}),(0,r.jsxs)(d.td,{children:["Filtered by ",(0,r.jsx)(d.code,{children:"involved_company.publisher === true"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"genres"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"genres"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"tags"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"keywords"})," and ",(0,r.jsx)(d.code,{children:"themes"})]}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"cover"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"cover"})}),(0,r.jsxs)(d.td,{children:["Using the highest possible cover resolution via ",(0,r.jsx)(d.code,{children:"t_cover_big_2x"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"background"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"artworks[0]"})," or ",(0,r.jsx)(d.code,{children:"screenshots[0]"})]}),(0,r.jsxs)(d.td,{children:["Only first artwork/screenshot is mapped. Using the highest possible 16:9 resolution via ",(0,r.jsx)(d.code,{children:"t_1080p_2x"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"url_websites"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"websites.url"})}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"url_screenshots"})}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"screenshots"})," and ",(0,r.jsx)(d.code,{children:"artworks"})]}),(0,r.jsxs)(d.td,{children:["Using the highest possible 16:9 resolution via ",(0,r.jsx)(d.code,{children:"t_1080p_2x"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"url_trailers"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"videos"})}),(0,r.jsx)(d.td,{children:'Only when video title includes the words "trailer", "teaser" or "intro"'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"url_gameplays"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"videos"})}),(0,r.jsx)(d.td,{children:'Only when video title includes the words "gameplay"'})]})]})]}),"\n",(0,r.jsx)(d.h3,{id:"age-rating",children:"Age Rating"}),"\n",(0,r.jsxs)(d.p,{children:['The table below shows how age ratings from GameVault and IGDB are matched. Ratings like "Not Yet Rated" are ignored. A game can have ratings from multiple systems. The IGDB integration calculates ',(0,r.jsx)(d.strong,{children:"the average of all ratings"}),", rounds it, and then saves it to GameVault."]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Age Rating System"}),(0,r.jsx)(d.th,{children:"Rating Name"}),(0,r.jsx)(d.th,{children:"GameVault Minimum Age (Years)"}),(0,r.jsx)(d.th,{children:"IGDB Rating Enum Value"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.strong,{children:"PEGI"})}),(0,r.jsx)(d.td,{children:"Three"}),(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Seven"}),(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Twelve"}),(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Sixteen"}),(0,r.jsx)(d.td,{children:"16"}),(0,r.jsx)(d.td,{children:"4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Eighteen"}),(0,r.jsx)(d.td,{children:"18"}),(0,r.jsx)(d.td,{children:"5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.strong,{children:"ESRB"})}),(0,r.jsx)(d.td,{children:"EC"}),(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"E"}),(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"E10"}),(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"9"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"T"}),(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"10"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"M"}),(0,r.jsx)(d.td,{children:"17"}),(0,r.jsx)(d.td,{children:"11"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"AO"}),(0,r.jsx)(d.td,{children:"18"}),(0,r.jsx)(d.td,{children:"12"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.strong,{children:"CERO"})}),(0,r.jsx)(d.td,{children:"CERO_A"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"13"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CERO_B"}),(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"14"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CERO_C"}),(0,r.jsx)(d.td,{children:"15"}),(0,r.jsx)(d.td,{children:"15"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CERO_D"}),(0,r.jsx)(d.td,{children:"17"}),(0,r.jsx)(d.td,{children:"16"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CERO_Z"}),(0,r.jsx)(d.td,{children:"18"}),(0,r.jsx)(d.td,{children:"17"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.strong,{children:"USK"})}),(0,r.jsx)(d.td,{children:"USK_0"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"18"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"USK_6"}),(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"19"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"USK_12"}),(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"20"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"USK_16"}),(0,r.jsx)(d.td,{children:"16"}),(0,r.jsx)(d.td,{children:"21"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"USK_18"}),(0,r.jsx)(d.td,{children:"18"}),(0,r.jsx)(d.td,{children:"22"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.strong,{children:"GRAC"})}),(0,r.jsx)(d.td,{children:"GRAC_ALL"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"23"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"GRAC_Twelve"}),(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"24"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"GRAC_Fifteen"}),(0,r.jsx)(d.td,{children:"15"}),(0,r.jsx)(d.td,{children:"25"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"GRAC_Eighteen"}),(0,r.jsx)(d.td,{children:"18"}),(0,r.jsx)(d.td,{children:"26"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.strong,{children:"CLASS_IND"})}),(0,r.jsx)(d.td,{children:"CLASS_IND_L"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"28"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CLASS_IND_Ten"}),(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"29"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CLASS_IND_Twelve"}),(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"30"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CLASS_IND_Fourteen"}),(0,r.jsx)(d.td,{children:"14"}),(0,r.jsx)(d.td,{children:"31"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CLASS_IND_Sixteen"}),(0,r.jsx)(d.td,{children:"16"}),(0,r.jsx)(d.td,{children:"32"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"CLASS_IND_Eighteen"}),(0,r.jsx)(d.td,{children:"18"}),(0,r.jsx)(d.td,{children:"33"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.strong,{children:"ACB"})}),(0,r.jsx)(d.td,{children:"ACB_G"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"34"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"ACB_PG"}),(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:"35"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"ACB_M"}),(0,r.jsx)(d.td,{children:"15"}),(0,r.jsx)(d.td,{children:"36"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"ACB_MA15"}),(0,r.jsx)(d.td,{children:"15"}),(0,r.jsx)(d.td,{children:"37"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"ACB_R18"}),(0,r.jsx)(d.td,{children:"18"}),(0,r.jsx)(d.td,{children:"38"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,t.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},6473:(e,d,s)=>{s.d(d,{Z:()=>r});const r=s.p+"assets/images/setup-step-1-531ca876d7d5343984b56d73b5fe2527.png"},4749:(e,d,s)=>{s.d(d,{Z:()=>r});const r=s.p+"assets/images/setup-step-2-9b26b8c4e36c9ae8b00e578737b6412d.png"},5498:(e,d,s)=>{s.d(d,{Z:()=>r});const r=s.p+"assets/images/setup-step-3-1f45dd581f8cc3ffc8071bdcc115f0b9.png"},2509:(e,d,s)=>{s.d(d,{Z:()=>r});const r=s.p+"assets/images/setup-step-4-2906d1431be260bcadd96e0ce27e8749.png"},9246:(e,d,s)=>{s.d(d,{Z:()=>c,a:()=>n});var r=s(5271);const t={},i=r.createContext(t);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);