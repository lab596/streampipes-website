"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),i=["components"],a={id:"org.apache.streampipes.processors.siddhi.sequence",title:"Sequence Detection",sidebar_label:"Sequence Detection"},c=void 0,p={unversionedId:"pe/org.apache.streampipes.processors.siddhi.sequence",id:"pe/org.apache.streampipes.processors.siddhi.sequence",title:"Sequence Detection",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.siddhi.sequence.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.siddhi.sequence",permalink:"/docs/next/pe/org.apache.streampipes.processors.siddhi.sequence",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.siddhi.sequence",title:"Sequence Detection",sidebar_label:"Sequence Detection"},sidebar:"documentation",previous:{title:"Sequence",permalink:"/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence"},next:{title:"Signal Edge Filter",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge"}},l={},u=[{value:"Description",id:"description",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.siddhi.sequence/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Merges events from two event streams, when the top event arrives first and then the bottom event"))}f.isMDXComponent=!0}}]);