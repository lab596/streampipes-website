"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"org.apache.streampipes.processors.pattern-detection.flink.and",title:"And",sidebar_label:"And",original_id:"org.apache.streampipes.processors.pattern-detection.flink.and"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.pattern-detection.flink.and",id:"version-0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and",title:"And",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.pattern-detection.flink.and",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.pattern-detection.flink.and",title:"And",sidebar_label:"And",original_id:"org.apache.streampipes.processors.pattern-detection.flink.and"},sidebar:"documentation",previous:{title:"Aggregation",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation"},next:{title:"Boilerplate Removal",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"1st parameter",id:"1st-parameter",level:3},{value:"2nd parameter",id:"2nd-parameter",level:3},{value:"Output",id:"output",level:2}],u={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.pattern-detection.flink.and/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Detects whether an event co-occurs with another event within a given time."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Describe the configuration parameters here"),(0,o.kt)("h3",{id:"1st-parameter"},"1st parameter"),(0,o.kt)("h3",{id:"2nd-parameter"},"2nd parameter"),(0,o.kt)("h2",{id:"output"},"Output"))}f.isMDXComponent=!0}}]);