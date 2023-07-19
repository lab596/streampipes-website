"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23929],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),c=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return o.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return t?o.createElement(g,a(a({ref:r},l),{},{components:t})):o.createElement(g,a({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76188:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=t(87462),n=t(63366),s=(t(67294),t(3905)),a=["components"],i={id:"org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",title:"EPSG Code",sidebar_label:"EPSG Code",original_id:"org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",id:"version-0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",title:"EPSG Code",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688363956,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG",title:"EPSG Code",sidebar_label:"EPSG Code",original_id:"org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG"},sidebar:"documentation",previous:{title:"Distance Calculator",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator"},next:{title:"Event Counter",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.eventcount"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Parameter",id:"parameter",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function g(e){var r=e.components,t=(0,n.Z)(e,a);return(0,s.kt)(m,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"This processor adds ab integer value to the stream. This integer value represents\nan ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EPSG_Geodetic_Parameter_Dataset"},"EPSG Code")," as an Spatial Reference System Identifier ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Spatial_reference_system#Identifier"},"(SRID)"),"."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"required-input"},"Required input"),(0,s.kt)("p",null,"None"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Integer values, representing a spatial reference system ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Spatial_reference_system#Identifier"},"(SRS)"),".  Other possible values can be looked up under ",(0,s.kt)("a",{parentName:"p",href:"https://spatialreference.org/ref/epsg/"},"https://spatialreference.org/ref/epsg/"),"."),(0,s.kt)("h3",{id:"parameter"},"Parameter"),(0,s.kt)("p",null,"4- to 5-digit key integer number. Default value is 4326 representing the World Geodetic System ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84"},"(WGS84)"),"."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"output"},"Output"),(0,s.kt)("p",null,"Adds a number to the event."))}g.isMDXComponent=!0}}]);