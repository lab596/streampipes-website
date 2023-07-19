"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",title:"EPSG Code",sidebar_label:"EPSG Code"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",id:"pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",title:"EPSG Code",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",permalink:"/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",title:"EPSG Code",sidebar_label:"EPSG Code"},sidebar:"documentation",previous:{title:"Distance Calculator",permalink:"/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator"},next:{title:"Event Counter",permalink:"/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.eventcount"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Parameter",id:"parameter",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This processor adds ab integer value to the stream. This integer value represents\nan ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EPSG_Geodetic_Parameter_Dataset"},"EPSG Code")," as an Spatial Reference System Identifier ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Spatial_reference_system#Identifier"},"(SRID)"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"None"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Integer values, representing a spatial reference system ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Spatial_reference_system#Identifier"},"(SRS)"),".  Other possible values can be looked up under ",(0,a.kt)("a",{parentName:"p",href:"https://spatialreference.org/ref/epsg/"},"https://spatialreference.org/ref/epsg/"),"."),(0,a.kt)("h3",{id:"parameter"},"Parameter"),(0,a.kt)("p",null,"4- to 5-digit key integer number. Default value is 4326 representing the World Geodetic System ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84"},"(WGS84)"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Adds a number to the event."))}f.isMDXComponent=!0}}]);