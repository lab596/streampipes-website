"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],p={id:"org.apache.streampipes.processor.geo.flink",title:"Spatial Grid Enrichment",sidebar_label:"Spatial Grid Enrichment"},l=void 0,s={unversionedId:"pe/org.apache.streampipes.processor.geo.flink",id:"pe/org.apache.streampipes.processor.geo.flink",title:"Spatial Grid Enrichment",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processor.geo.flink.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processor.geo.flink",permalink:"/docs/next/pe/org.apache.streampipes.processor.geo.flink",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processor.geo.flink",title:"Spatial Grid Enrichment",sidebar_label:"Spatial Grid Enrichment"},sidebar:"documentation",previous:{title:"Size Measure",permalink:"/docs/next/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure"},next:{title:"Speed Calculator",permalink:"/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.speed"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processor.geo.flink/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Groups spatial events into cells of a given size.\nThe result is like a chessboard pattern in which the geo coordinates are inserted. The user can define the coordinates of the first field."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"Requires a latitude and longitude in the data stream."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Latitude property"),(0,o.kt)("li",{parentName:"ul"},"Longitude property"),(0,o.kt)("li",{parentName:"ul"},"The size of the cell"),(0,o.kt)("li",{parentName:"ul"},"Latitude and longitude of the first cell")),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Appends the grid cell coordinates to the input event"))}f.isMDXComponent=!0}}]);