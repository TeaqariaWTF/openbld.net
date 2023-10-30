"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[8870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={slug:"openbld-growth-q2-2023",title:"OpenBLD.net Growth in Q2 2023",authors:["sysadminkz"],tags:["openbld","dns","news","report"]},i=void 0,l={permalink:"/blog/openbld-growth-q2-2023",source:"@site/blog/2023-05-16-openbld-growth-q2-2023.md",title:"OpenBLD.net Growth in Q2 2023",description:"Introduction",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[{label:"openbld",permalink:"/blog/tags/openbld"},{label:"dns",permalink:"/blog/tags/dns"},{label:"news",permalink:"/blog/tags/news"},{label:"report",permalink:"/blog/tags/report"}],readingTime:1.525,hasTruncateMarker:!1,authors:[{name:"Yevgeniy Goncharov",title:"Maintainer of OpenBLD.net",url:"https://github.com/m0zgen",imageURL:"https://github.com/m0zgen.png",key:"sysadminkz"}],frontMatter:{slug:"openbld-growth-q2-2023",title:"OpenBLD.net Growth in Q2 2023",authors:["sysadminkz"],tags:["openbld","dns","news","report"]},prevItem:{title:"Blocking Google Ads Spreads",permalink:"/blog/openbld-prevent-google-ads-malware"},nextItem:{title:"Blocking Aurora Stealer",permalink:"/blog/fake-update-drops-aurora-stealer"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"New Features",id:"new-features",level:2},{value:"Testing Phase",id:"testing-phase",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2},{value:"Join Us",id:"join-us",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the ever-evolving OpenBLD ecosystem, the second quarter of 2023 has witnessed remarkable growth and some exciting changes. OpenBLD.net, the service committed to minimizing the internet noise caused by advertising and tracking, has evolved to introduce cutting-edge features like Anycast/GeoDNS, DNSSEC, DNS-over-HTTPS, and DNS-over-TLS."),(0,o.kt)("h2",{id:"new-features"},"New Features"),(0,o.kt)("p",null,"This evolution has brought forth two new services: Adaptive (ADA) and Strict (RIC), which are set to replace A-BLD and BLD. But what sets them apart? It's time to find out."),(0,o.kt)("h2",{id:"testing-phase"},"Testing Phase"),(0,o.kt)("p",null,"I've been testing these new services for over two weeks now, and I must say, they are impressive. For all OpenBLD users, I encourage you to give them a try. Here's how you can make the switch:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For DNS-over-HTTPS (DoH), replace ",(0,o.kt)("inlineCode",{parentName:"p"},"https://a-bld.sys-adm.in/dns-query")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://ada.openbld.net/dns-query"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For DNS-over-TLS (DoT), switch from ",(0,o.kt)("inlineCode",{parentName:"p"},"a-bld.sys-adm.in")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ada.openbld.net"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For DNS-over-HTTPS (DoH), replace ",(0,o.kt)("inlineCode",{parentName:"p"},"https://bld.sys-adm.in/dns-query")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://ric.openbld.net/dns-query"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For DNS-over-TLS (DoT), switch from ",(0,o.kt)("inlineCode",{parentName:"p"},"bld.sys-adm.in")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ric.openbld.net")))),(0,o.kt)("p",null,"In a week or two, A-BLD will be fully merged with ADA, ceasing to exist as we know it. One server (109.234.39.72) will be replaced by another (46.151.29.15) for faster and more efficient service. Don't wait; start your testing today!"),(0,o.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,o.kt)("p",null,"All of this growth and development would not have been possible without the incredible support we've received this year. OpenBLD is grateful for the backing from the following organizations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Providers:")," ",(0,o.kt)("a",{parentName:"li",href:"https://www.cloudns.net/aff/id/751533/"},"ClouDNS"),", ",(0,o.kt)("a",{parentName:"li",href:"https://gcorelabs.com/"},"Gcore"),", ",(0,o.kt)("a",{parentName:"li",href:"https://jb.gg/OpenSourceSupport"},"JetBrains"),", ",(0,o.kt)("a",{parentName:"li",href:"https://uptimerobot.com/?rid=78534763f4713b_"},"UptimeRobot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Information Partners:")," ",(0,o.kt)("a",{parentName:"li",href:"https://astlab.kz/"},"AST Cyber Lab"),", ",(0,o.kt)("a",{parentName:"li",href:"https://core247.io/"},"Core24/7"),", ",(0,o.kt)("a",{parentName:"li",href:"https://qcloudy.io/"},"qCloudy"))),(0,o.kt)("p",null,"Special thanks to the Kazakhstan-based hosting providers ",(0,o.kt)("a",{parentName:"p",href:"https://unihost.kz/"},"Unihost.kz")," and ",(0,o.kt)("a",{parentName:"p",href:"https://gohost.kz/"},"GOhost.kz")," for their support and collaboration \ud83e\udd1c\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f\ud83e\udd1b\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f"),(0,o.kt)("h2",{id:"join-us"},"Join Us"),(0,o.kt)("p",null,"You, too, can contribute to this open service aimed at filtering malicious content. Reach out to us with ",(0,o.kt)("a",{parentName:"p",href:"/docs/contacts"},"Contacts")," page to be part of our mission."),(0,o.kt)("p",null,"OpenBLD.net is growing, evolving, and making the Internet a better place for everyone. Join us in this exciting journey! \ud83d\ude80"))}d.isMDXComponent=!0}}]);