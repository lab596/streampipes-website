"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68698],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88637:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={id:"org.apache.streampipes.processors.transformation.flink.field-mapper",title:"Field Mapper",sidebar_label:"Field Mapper",original_id:"org.apache.streampipes.processors.transformation.flink.field-mapper"},l=void 0,s={unversionedId:"pe/org.apache.streampipes.processors.transformation.flink.field-mapper",id:"version-0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper",title:"Field Mapper",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.flink.field-mapper",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.flink.field-mapper",title:"Field Mapper",sidebar_label:"Field Mapper",original_id:"org.apache.streampipes.processors.transformation.flink.field-mapper"},sidebar:"documentation",previous:{title:"Field Hasher",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher"},next:{title:"Field Renamer",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-renamer"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2},{value:"Input  event",id:"input--event",level:3},{value:"Configuration",id:"configuration-1",level:3},{value:"Output event",id:"output-event",level:3}],f={toc:m},u="wrapper";function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.field-mapper/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Replaces one or more fields with a new field and computes a hash value of these fields"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fields: Fields that will be mapped into a property"),(0,o.kt)("li",{parentName:"ul"},"Name of the new field")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Merge two fields into a hash value"),(0,o.kt)("h3",{id:"input--event"},"Input  event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "timestamp":1586380104915,\n  "mass_flow":4.3167,\n  "temperature":40.05,\n  "sensorId":"flowrate01"\n}\n')),(0,o.kt)("h3",{id:"configuration-1"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fields: mass_flow, temperature"),(0,o.kt)("li",{parentName:"ul"},"Name of new field: demo")),(0,o.kt)("h3",{id:"output-event"},"Output event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "timestamp":1586380104915,\n  "sensorId":"flowrate01"\n  "demo":"8ae11f5c83610104408d485b73120832",\n}\n')))}d.isMDXComponent=!0}}]);