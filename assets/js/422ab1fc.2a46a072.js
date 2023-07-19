"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,h=u["".concat(c,".").concat(g)]||u[g]||d[g]||n;return r?o.createElement(h,a(a({ref:t},l),{},{components:r})):o.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},72992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var o=r(87462),i=r(63366),n=(r(67294),r(3905)),a=["components"],s={id:"org.apache.streampipes.processors.geo.jvm.processor.distancecalculator",title:"Distance Calculator",sidebar_label:"Distance Calculator",original_id:"org.apache.streampipes.processors.geo.jvm.processor.distancecalculator"},c=void 0,p={unversionedId:"pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator",id:"version-0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator",title:"Distance Calculator",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.geo.jvm.processor.distancecalculator",title:"Distance Calculator",sidebar_label:"Distance Calculator",original_id:"org.apache.streampipes.processors.geo.jvm.processor.distancecalculator"},sidebar:"documentation",previous:{title:"Cusum",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.changedetection.jvm.cusum"},next:{title:"EPSG Code",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"First Longitude",id:"first-longitude",level:3},{value:"First Latitude",id:"first-latitude",level:3},{value:"Second Longitude",id:"second-longitude",level:3},{value:"Second Latitude",id:"second-latitude",level:3},{value:"Output",id:"output",level:2}],d={toc:u},g="wrapper";function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,n.kt)(g,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Calculates the distance between two latitude/longitude pairs in a single event."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"required-input"},"Required input"),(0,n.kt)("p",null,"Requires a position of point on the Earth's surface specified by the two geographic coordinates: the longitude and latitude of the point."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"first-longitude"},"First Longitude"),(0,n.kt)("p",null,"This is the first geographic coordinate that specifies the east-west position of a point on the Earth's surface."),(0,n.kt)("h3",{id:"first-latitude"},"First Latitude"),(0,n.kt)("p",null,"This is the second geographic coordinate that specifies the north-south position of a point on the Earth's surface."),(0,n.kt)("h3",{id:"second-longitude"},"Second Longitude"),(0,n.kt)("p",null,"This is the second geographic coordinate that specifies the east-west position of a point on the Earth's surface."),(0,n.kt)("h3",{id:"second-latitude"},"Second Latitude"),(0,n.kt)("p",null,"This is the second geographic coordinate that specifies the north-south position of a point on the Earth's surface."),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("p",null,"{\n'distance': 12.2\n}"))}h.isMDXComponent=!0}}]);