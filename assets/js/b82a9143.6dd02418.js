"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[3472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={slug:"fake-update-drops-aurora-stealer",title:"Blocking Aurora Stealer",authors:["sysadminkz"],tags:["openbld","protection"]},s="Fake system update drops Aurora stealer via Invalid Printer loader",i={permalink:"/blog/fake-update-drops-aurora-stealer",source:"@site/blog/2023-05-15-fake-update-drops-aurora-stealer/index.md",title:"Blocking Aurora Stealer",description:"Malvertising seems to be enjoying a renaissance as of late, whether it is from ads on search engine results pages or via popular websites. Because browsers are more secure today than they were 5 or 10 years ago, the attacks that we are seeing all involve some form of social engineering.",date:"2023-05-15T00:00:00.000Z",formattedDate:"May 15, 2023",tags:[{label:"openbld",permalink:"/blog/tags/openbld"},{label:"protection",permalink:"/blog/tags/protection"}],readingTime:1.015,hasTruncateMarker:!1,authors:[{name:"Yevgeniy Goncharov",title:"Maintainer of OpenBLD.net",url:"https://github.com/m0zgen",imageURL:"https://github.com/m0zgen.png",key:"sysadminkz"}],frontMatter:{slug:"fake-update-drops-aurora-stealer",title:"Blocking Aurora Stealer",authors:["sysadminkz"],tags:["openbld","protection"]},prevItem:{title:"OpenBLD.net Growth in Q2 2023",permalink:"/blog/openbld-growth-q2-2023"},nextItem:{title:"GeoDNS Pre-release Testing",permalink:"/blog/openbld-pre-release-testing"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Malvertising seems to be enjoying a renaissance as of late, whether it is from ads on search engine results pages or via popular websites. Because browsers are more secure today than they were 5 or 10 years ago, the attacks that we are seeing all involve some form of social engineering."),(0,n.kt)("p",null,"A threat actor is using malicious ads to redirect users to what looks like a Windows security update. The scheme is very well designed as it relies on the web browser to display a full screen animation that very much resembles what you'd expect from Microsoft..."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fake system update drops Aurora stealer via Invalid Printer loader",src:r(6377).Z,width:"1919",height:"1079"})),(0,n.kt)("p",null,"A Few days ago, Malwarebytes tread intelligence team ",(0,n.kt)("a",{parentName:"p",href:"https://www.malwarebytes.com/blog/threat-intelligence/2023/05/fake-system-update-drops-new-highly-evasive-loader"},"discovered")," a new campaign that uses a fake Windows update to drop the Aurora stealer. The attack starts with a malvertising chain that redirects users to a website displaying a fake Windows update page. The page is designed to look like the real thing, with a full screen animation that very much resembles what you'd expect from Microsoft. "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"After discovering and researching the IoC from the article, all compromised domains were added to OpenBLD.net DNSBL \ud83c\udf89")),(0,n.kt)("p",null,"Part of lists you can download from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/m0zgen/cactusd"},"Cactusd")," \ud83c\udf35 repository."))}d.isMDXComponent=!0},6377:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/easset_upload_windows_file-84e3413a0b70306b4ad75fb2b672da8f.gif"}}]);