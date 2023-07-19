"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={id:"org.apache.streampipes.processors.textmining.flink.languagedetection",title:"Language Detection",sidebar_label:"Language Detection"},c=void 0,s={unversionedId:"pe/org.apache.streampipes.processors.textmining.flink.languagedetection",id:"pe/org.apache.streampipes.processors.textmining.flink.languagedetection",title:"Language Detection",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.textmining.flink.languagedetection.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.flink.languagedetection",permalink:"/docs/next/pe/org.apache.streampipes.processors.textmining.flink.languagedetection",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.flink.languagedetection",title:"Language Detection",sidebar_label:"Language Detection"},sidebar:"documentation",previous:{title:"Image Enricher",permalink:"/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher"},next:{title:"Language Detection",permalink:"/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"1st parameter",id:"1st-parameter",level:3},{value:"2nd parameter",id:"2nd-parameter",level:3},{value:"Output",id:"output",level:2}],g={toc:u},m="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.flink.languagedetection/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Detects the language of a written text."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Describe the configuration parameters here"),(0,i.kt)("h3",{id:"1st-parameter"},"1st parameter"),(0,i.kt)("h3",{id:"2nd-parameter"},"2nd parameter"),(0,i.kt)("h2",{id:"output"},"Output"))}d.isMDXComponent=!0}}]);