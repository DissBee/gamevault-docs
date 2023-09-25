"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[452],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(1163),r=(n(9496),n(9613));const i={sidebar_position:2},l="File and Folder Structure",o={unversionedId:"server-docs/structure",id:"server-docs/structure",title:"File and Folder Structure",description:"If you want to set up a GameVault Server, you need to pay attention to the file and folder structure.",source:"@site/docs/server-docs/structure.md",sourceDirName:"server-docs",slug:"/server-docs/structure",permalink:"/docs/server-docs/structure",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/server-docs/configuration"},next:{title:"Game Types",permalink:"/docs/server-docs/game-types"}},p={},m=[{value:"Supported Archive Formats",id:"supported-archive-formats",level:2},{value:"Single File Executable",id:"single-file-executable",level:3},{value:"Naming Convention for Games",id:"naming-convention-for-games",level:2},{value:"Other Examples",id:"other-examples",level:3}],d={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-and-folder-structure"},"File and Folder Structure"),(0,r.kt)("p",null,"If you want to set up a GameVault Server, you need to pay attention to the file and folder structure.\nThe volume mapped to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/files")," directory must contain your games. These games must be named correctly and should either be archived in one of the supported archive formats listed below or be a single-file executable as described below to be accurately detected by GameVault."),(0,r.kt)("h2",{id:"supported-archive-formats"},"Supported Archive Formats"),(0,r.kt)("p",null,"GameVault supports all file formats 7zip 23.01 (2023-06-20) does:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".7z")," ",(0,r.kt)("inlineCode",{parentName:"p"},".xz")," ",(0,r.kt)("inlineCode",{parentName:"p"},".bz2")," ",(0,r.kt)("inlineCode",{parentName:"p"},".gz")," ",(0,r.kt)("inlineCode",{parentName:"p"},".tar")," ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," ",(0,r.kt)("inlineCode",{parentName:"p"},".wim")," ",(0,r.kt)("inlineCode",{parentName:"p"},".ar")," ",(0,r.kt)("inlineCode",{parentName:"p"},".arj")," ",(0,r.kt)("inlineCode",{parentName:"p"},".cab")," ",(0,r.kt)("inlineCode",{parentName:"p"},".chm")," ",(0,r.kt)("inlineCode",{parentName:"p"},".cpio")," ",(0,r.kt)("inlineCode",{parentName:"p"},".cramfs")," ",(0,r.kt)("inlineCode",{parentName:"p"},".dmg")," ",(0,r.kt)("inlineCode",{parentName:"p"},".ext")," ",(0,r.kt)("inlineCode",{parentName:"p"},".fat")," ",(0,r.kt)("inlineCode",{parentName:"p"},".gpt")," ",(0,r.kt)("inlineCode",{parentName:"p"},".hfs")," ",(0,r.kt)("inlineCode",{parentName:"p"},".ihex")," ",(0,r.kt)("inlineCode",{parentName:"p"},".iso")," ",(0,r.kt)("inlineCode",{parentName:"p"},".lzh")," ",(0,r.kt)("inlineCode",{parentName:"p"},".lzma")," ",(0,r.kt)("inlineCode",{parentName:"p"},".mbr")," ",(0,r.kt)("inlineCode",{parentName:"p"},".msi")," ",(0,r.kt)("inlineCode",{parentName:"p"},".nsis")," ",(0,r.kt)("inlineCode",{parentName:"p"},".ntfs")," ",(0,r.kt)("inlineCode",{parentName:"p"},".qcow2")," ",(0,r.kt)("inlineCode",{parentName:"p"},".rar")," ",(0,r.kt)("inlineCode",{parentName:"p"},".rpm")," ",(0,r.kt)("inlineCode",{parentName:"p"},".squashfs")," ",(0,r.kt)("inlineCode",{parentName:"p"},".udf")," ",(0,r.kt)("inlineCode",{parentName:"p"},".uefi")," ",(0,r.kt)("inlineCode",{parentName:"p"},".vdi")," ",(0,r.kt)("inlineCode",{parentName:"p"},".vhd")," ",(0,r.kt)("inlineCode",{parentName:"p"},".vmdk")," ",(0,r.kt)("inlineCode",{parentName:"p"},".wim")," ",(0,r.kt)("inlineCode",{parentName:"p"},".xar")," ",(0,r.kt)("inlineCode",{parentName:"p"},".z")),(0,r.kt)("h3",{id:"single-file-executable"},"Single File Executable"),(0,r.kt)("p",null,"We recommend ",(0,r.kt)("a",{parentName:"p",href:"#supported-archive-formats"},"archiving games")," to save storage and bandwidth. However, if the game is just a single file executable, like ",(0,r.kt)("inlineCode",{parentName:"p"},"setup_game.exe")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"setup_game.sh"),", you can import it into GameVault without archiving. Just be sure to rename it as described below for compatibility with GameVault (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Minecraft (v1.12) (2011).exe"),"). By default, GameVault autodetects the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-docs/game-types"},"game type"),' of single-file executables as a setup-type game. In rare cases, games can be single portable executables without additional setup. If that\'s the case, make sure to mark the games as "Portable" using the type override.'),(0,r.kt)("p",null,"Supported Executables:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," ",(0,r.kt)("inlineCode",{parentName:"p"},".sh")),(0,r.kt)("admonition",{title:"Downloading single-file executables",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Single-file executables are packed into a ",(0,r.kt)("inlineCode",{parentName:"p"},".tar")," file (no compression) and cached in the server's ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," folder on-the-fly when users download them, to make them compatible with the GameVault Client. The cached files are reused until deleted by a Server Restart.")),(0,r.kt)("h2",{id:"naming-convention-for-games"},"Naming Convention for Games"),(0,r.kt)("p",null,"The name of each game file must follow this format:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Title (Version) (EarlyAccess) (GameType) (NoCache) (ReleaseYear).zip")),(0,r.kt)("p",null,"Note that the parentheses must be included, and the naming convention is ",(0,r.kt)("strong",{parentName:"p"},"case sensitive"),"."),(0,r.kt)("p",null,"Here's an explanation of each part of the naming convention:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Part"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Title")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the game"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Far Cry 6"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"HITMAN 3")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Version")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional version tag that must begin with a lowercase ",(0,r.kt)("inlineCode",{parentName:"td"},"v")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(v1.0)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"(v1.224)")," , N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"EarlyAccess")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional tag that indicates whether the game is in Early Access"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(EA)"),", N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GameType")),(0,r.kt)("td",{parentName:"tr",align:null},"Override for the games type. ",(0,r.kt)("a",{parentName:"td",href:"/docs/server-docs/game-types"},"See here.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(W_P)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"(W_S)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"...")," , N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"NoCache")),(0,r.kt)("td",{parentName:"tr",align:null},'An optional "NO CACHE"-flag that prevents the server searching for this game on external videogame databases like RAWG.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(NC)"),", N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ReleaseYear")),(0,r.kt)("td",{parentName:"tr",align:null},"The year of the game's release, for accurate detection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(2021)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"(2019)"),", N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Here's an example of a file that follows this convention:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Far Cry 6 (v1.5.0) (2021).zip")),(0,r.kt)("p",null,"By following this naming convention and using the common values listed in the table above, you can ensure that your games are detected correctly by GameVault."),(0,r.kt)("admonition",{title:"Illegal Filenames and Characters",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"File names must not contain the following characters: ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"li"},">"),", ",(0,r.kt)("inlineCode",{parentName:"li"},":"),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\\"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"|"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"?"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),". Replace these problematic characters with appropriate ones to ensure compatibility across all systems."),(0,r.kt)("li",{parentName:"ul"},"Avoid ending file names with spaces or dots."),(0,r.kt)("li",{parentName:"ul"},"Avoid using text within Round brackets such as ",(0,r.kt)("inlineCode",{parentName:"li"},"(GOTY)")," in your file names, as GameVault will remove them. Round brackets are reserved for the different flags mentioned above. Use square brackets instead: ",(0,r.kt)("inlineCode",{parentName:"li"},"[GOTY]")),(0,r.kt)("li",{parentName:"ul"},"Do not use reserved file names such as ",(0,r.kt)("inlineCode",{parentName:"li"},"CON"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PRN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AUX"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NUL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"COM(1-9)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LPT(1-9)"),", etc."),(0,r.kt)("li",{parentName:"ul"},"Avoid using multiple chained extensions like ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz")," or ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.bz2"),". Instead, use only the last extension like ",(0,r.kt)("inlineCode",{parentName:"li"},".gz")," or ",(0,r.kt)("inlineCode",{parentName:"li"},".bz2"),"."))),(0,r.kt)("h3",{id:"other-examples"},"Other Examples"),(0,r.kt)("p",null,"Here are some other valid examples of game names that follow the naming convention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Star Wars Jedi - Fallen Order(v1.0.10.0) (2019).zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HITMAN 3 (v3.10.1) (2021).7z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"The Wandering Village (v0.1.32) (EA) (2022).iso")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Saints Row (W_S) (2022).zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"My personal IndieGame (v1.2.9) (NC) (2018).zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stray (2022).7z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Captain of Industry (v0.4.12b) (EA) (2022).gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Minecraft (2011).exe"))))}u.isMDXComponent=!0}}]);