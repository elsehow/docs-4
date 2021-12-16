"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[420],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:1},c="What's a DAO?",l={unversionedId:"quickstart/what-is-dao",id:"quickstart/what-is-dao",title:"What's a DAO?",description:"Decentralized autonomous organizations (DAOs) are collectively owned governance",source:"@site/docs/quickstart/what-is-dao.md",sourceDirName:"quickstart",slug:"/quickstart/what-is-dao",permalink:"/docs/quickstart/what-is-dao",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/quickstart/what-is-dao.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Create your first DAO",permalink:"/docs/quickstart/create-a-dao"}},p=[{value:"Proposals",id:"proposals",children:[],level:3},{value:"Governance tokens",id:"governance-tokens",children:[],level:3},{value:"What does DAO DAO do?",id:"what-does-dao-dao-do",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whats-a-dao"},"What's a DAO?"),(0,r.kt)("p",null,"Decentralized autonomous organizations (DAOs) are collectively owned governance\nsystems whose governing software is cryptographically bound to obey the\ndemocratic wishes of token holders."),(0,r.kt)("h3",{id:"proposals"},"Proposals"),(0,r.kt)("p",null,"At its simplest, a DAO is an organization where you can vote on proposals.\nProposals are updated to a ledger---their text, whether they passed or failed,\nand who voted on them. Proposals can be natural language rules or laws (for\nexample, you could run a legislature with them), or they can be software.\nWhen a proposal passes the DAO's voting period, that proposal becomes canonical; it will be shown to have passed in the ledger, and any ",(0,r.kt)("em",{parentName:"p"},"proposal messages")," (effectively, bits of code) will be executed on the chain."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even the software of the DAO itself can be updated by governance proposals. For\nexample, the voting rules of the DAO themselves (e.g., how long voting periods\nlast, what proportion of people need to vote on something for it to pass, etc)\ncan be modified by governance proposals."))),(0,r.kt)("h3",{id:"governance-tokens"},"Governance tokens"),(0,r.kt)("p",null,"DAOs manage voting through ",(0,r.kt)("em",{parentName:"p"},"governance tokens"),". Like shares in a corporation, governance token determines your voting power.\nA person with 80% of a DAO's tokens will be able to pass things autocratically. Distributing tokens evenly will give everyone an even vote, assuming no one trades their tokens."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In practice, tokens are programmable. You can prevent transfer, prevent transfer for a certain amount of time, and more."))),(0,r.kt)("h2",{id:"what-does-dao-dao-do"},"What does DAO DAO do?"),(0,r.kt)("p",null,"DAO DAO is a tool for building DAOs in the Cosmoverse.\nIt allows you to build IBC-enable DAOs---that is, DAOs whose treasuries can hold any token on any blockchain, so long as the chain supports IBC."),(0,r.kt)("p",null,"DAO DAO\nlets you write safe, testable smart\ncontracts in Rust\nusing\n",(0,r.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm"),".\nBy default, it deploys DAOs to the ",(0,r.kt)("a",{parentName:"p",href:"https://junochain.com/"},"Juno chain"),".\nFor power users,\nit lets you make self-sovereign chain for your DAO as well."),(0,r.kt)("p",null,"Best of all, governance tokens are IBC enabled (cw20-gov) tokens. You can trade\nand swap your governance tokens wherever IBC allows."))}u.isMDXComponent=!0}}]);