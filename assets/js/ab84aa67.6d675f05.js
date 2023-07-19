"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={id:"org.apache.streampipes.connect.adapters.coindesk",title:"Coindesk Bitcoin Price",sidebar_label:"Coindesk Bitcoin Price",original_id:"org.apache.streampipes.connect.adapters.coindesk"},p=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.adapters.coindesk",id:"version-0.91.0/pe/org.apache.streampipes.connect.adapters.coindesk",title:"Coindesk Bitcoin Price",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.connect.adapters.coindesk.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.coindesk",permalink:"/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.coindesk",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.coindesk",title:"Coindesk Bitcoin Price",sidebar_label:"Coindesk Bitcoin Price",original_id:"org.apache.streampipes.connect.adapters.coindesk"},sidebar:"documentation",previous:{title:"Apache Pulsar",permalink:"/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.pulsar"},next:{title:"File Stream",permalink:"/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.file"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Currency",id:"currency",level:3}],u={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.coindesk/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This adapter continuously provides the current bitcoin price from the Coindesk API."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"currency"},"Currency"),(0,i.kt)("p",null,"The current in which the price should be provided."),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);