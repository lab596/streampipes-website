"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],p={id:"org.apache.streampipes.processors.aggregation.flink.eventcount",title:"Event Counter",sidebar_label:"Event Counter"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.aggregation.flink.eventcount",id:"pe/org.apache.streampipes.processors.aggregation.flink.eventcount",title:"Event Counter",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.aggregation.flink.eventcount.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.aggregation.flink.eventcount",permalink:"/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.eventcount",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688310413,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.aggregation.flink.eventcount",title:"Event Counter",sidebar_label:"Event Counter"},sidebar:"documentation",previous:{title:"EPSG Code",permalink:"/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG"},next:{title:"Event Rate",permalink:"/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.rate"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"TimeWindowSize",id:"timewindowsize",level:3},{value:"Time Window Scale",id:"time-window-scale",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Counts the number of events arriving within a time window. An event is emitted every time the time window expires."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"There is no specific input required."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Time Window: The scale and size of the time window."),(0,o.kt)("h3",{id:"timewindowsize"},"TimeWindowSize"),(0,o.kt)("p",null,"Specifies the size of the time window."),(0,o.kt)("h3",{id:"time-window-scale"},"Time Window Scale"),(0,o.kt)("p",null,"Specifies the scale/unit of the time window. There are three different time scales to choose from: seconds, minutes or hours."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  'timestamp': 1601301980014, \n  'count': 12\n}\n")))}f.isMDXComponent=!0}}]);