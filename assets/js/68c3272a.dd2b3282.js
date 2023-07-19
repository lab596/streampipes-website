"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.geo.jvm.processor.speed",title:"Speed Calculator",sidebar_label:"Speed Calculator"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.geo.jvm.processor.speed",id:"pe/org.apache.streampipes.processors.geo.jvm.processor.speed",title:"Speed Calculator",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.geo.jvm.processor.speed.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.geo.jvm.processor.speed",permalink:"/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.speed",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688310413,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.geo.jvm.processor.speed",title:"Speed Calculator",sidebar_label:"Speed Calculator"},sidebar:"documentation",previous:{title:"Spatial Grid Enrichment",permalink:"/docs/next/pe/org.apache.streampipes.processor.geo.flink"},next:{title:"Split Array",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.split-array"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Timestamp field",id:"timestamp-field",level:3},{value:"Latitude field",id:"latitude-field",level:3},{value:"Longitude field",id:"longitude-field",level:3},{value:"Count window",id:"count-window",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Calculates the speed (in km/h) based on latitude/longitude values in a data stream. Therefore it uses the GPS and timestamps values of consecutive events.\nIt calculates the distance between two points (events) and how much time has passed. Based on those values the speed is calculated."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"Requires a data stream that provides latitude and longitude values as well as a timestamp."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"timestamp-field"},"Timestamp field"),(0,a.kt)("h3",{id:"latitude-field"},"Latitude field"),(0,a.kt)("h3",{id:"longitude-field"},"Longitude field"),(0,a.kt)("h3",{id:"count-window"},"Count window"),(0,a.kt)("p",null,"Describes the number of stored events, used for the calculation.\nE.g. a value of 5 means that thhe current event and the event (t-5) are used for the speed calculation."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Appends the calculated speed in km/h."))}f.isMDXComponent=!0}}]);