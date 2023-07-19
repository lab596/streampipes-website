"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"org.apache.streampipes.connect.adapters.iex.news",title:"IEX Cloud News",sidebar_label:"IEX Cloud News"},c=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.adapters.iex.news",id:"pe/org.apache.streampipes.connect.adapters.iex.news",title:"IEX Cloud News",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.connect.adapters.iex.news.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.iex.news",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.iex.news",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.iex.news",title:"IEX Cloud News",sidebar_label:"IEX Cloud News"},sidebar:"documentation",previous:{title:"HTTP Stream",permalink:"/docs/next/pe/org.apache.streampipes.connect.protocol.stream.http"},next:{title:"IEX Cloud Stock Quotes",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.iex.stocks"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Token",id:"api-token",level:3},{value:"Stock Symbol",id:"stock-symbol",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.iex.news/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This adapter provides news events from the IEXCloud news API. An API key from IEXCloud is required.\nVisit ",(0,a.kt)("a",{href:"https://iexcloud.io"},"IEX Cloud")," for more info."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"api-token"},"API Token"),(0,a.kt)("p",null,"A valid API token from the IEXCloud API."),(0,a.kt)("h3",{id:"stock-symbol"},"Stock Symbol"),(0,a.kt)("p",null,"A stock symbol that should be monitored."))}f.isMDXComponent=!0}}]);