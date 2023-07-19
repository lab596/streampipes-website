"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"org.apache.streampipes.sinks.notifications.jvm.onesignal",title:"OneSignal",sidebar_label:"OneSignal"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.sinks.notifications.jvm.onesignal",id:"version-0.92.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal",title:"OneSignal",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal",permalink:"/docs/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.sinks.notifications.jvm.onesignal",title:"OneSignal",sidebar_label:"OneSignal"},sidebar:"documentation",previous:{title:"OPC-UA",permalink:"/docs/pe/org.apache.streampipes.sinks.databases.jvm.opcua"},next:{title:"PostgreSQL",permalink:"/docs/pe/org.apache.streampipes.sinks.databases.jvm.postgresql"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"App Id",id:"app-id",level:3},{value:"API Key",id:"api-key",level:3},{value:"Content",id:"content",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.notifications.jvm.onesignal/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This sink sends a push message to the OneSignal application"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Describe the configuration parameters here"),(0,a.kt)("h3",{id:"app-id"},"App Id"),(0,a.kt)("p",null,"The OneSignal application ID."),(0,a.kt)("h3",{id:"api-key"},"API Key"),(0,a.kt)("p",null,"The OneSignal API key."),(0,a.kt)("h3",{id:"content"},"Content"),(0,a.kt)("p",null,"The message that should be sent to OneSignal"),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"(not applicable for data sinks)"))}g.isMDXComponent=!0}}]);