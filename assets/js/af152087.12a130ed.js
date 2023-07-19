"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={id:"org.apache.streampipes.processors.siddhi.frequency",title:"Frequency Calculation",sidebar_label:"Frequency Calculation"},p=void 0,s={unversionedId:"pe/org.apache.streampipes.processors.siddhi.frequency",id:"version-0.92.0/pe/org.apache.streampipes.processors.siddhi.frequency",title:"Frequency Calculation",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.processors.siddhi.frequency.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.siddhi.frequency",permalink:"/docs/pe/org.apache.streampipes.processors.siddhi.frequency",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688317119,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.siddhi.frequency",title:"Frequency Calculation",sidebar_label:"Frequency Calculation"},sidebar:"documentation",previous:{title:"Field Renamer",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.flink.field-renamer"},next:{title:"Frequency Change",permalink:"/docs/pe/org.apache.streampipes.processors.siddhi.frequencychange"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Time Unit",id:"time-unit",level:3},{value:"Time window length",id:"time-window-length",level:3},{value:"Output",id:"output",level:2}],d={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Frequency calculation with Siddhi CEP engine."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Calculates the frequency of the event stream."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"Does not have any specific input requirements."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"time-unit"},"Time Unit"),(0,o.kt)("p",null,"The time unit of the window. e.g, hrs, min and sec"),(0,o.kt)("h3",{id:"time-window-length"},"Time window length"),(0,o.kt)("p",null,"The time duration of the window in seconds."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Outputs the events according to the frequency specified."))}m.isMDXComponent=!0}}]);