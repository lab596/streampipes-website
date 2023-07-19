"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.filters.jvm.merge",title:"Synchronize Two Streams",sidebar_label:"Synchronize Two Streams",original_id:"org.apache.streampipes.processors.filters.jvm.merge"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.filters.jvm.merge",id:"version-0.90.0/pe/org.apache.streampipes.processors.filters.jvm.merge",title:"Synchronize Two Streams",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.filters.jvm.merge.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.filters.jvm.merge",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.merge",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.filters.jvm.merge",title:"Synchronize Two Streams",sidebar_label:"Synchronize Two Streams",original_id:"org.apache.streampipes.processors.filters.jvm.merge"},sidebar:"documentation",previous:{title:"String To State",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state"},next:{title:"Task Duration",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.taskduration"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.merge/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Merges two event streams by their timestamp.\nTwo events of the different streams are merged when they occure to the same time"),(0,a.kt)("p",null,"The following figure shows how the events of the two data streams will be mergrged:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300px;",src:"/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.merge/merge_description.png",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"Each of the data streams needs a timestamp."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For each stream a the timestamp property on which the merger is performed has to be selected"),(0,a.kt)("li",{parentName:"ul"},"The Time Interval describes the maximum value between two events to decide whether they are a match. To be a valid match the following function must be true: | timestamp_stream_1 - timestamp_stream_2 | < interval")),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"The Compose processor has a configurable output that can be selected by the user at pipeline modeling time."))}f.isMDXComponent=!0}}]);