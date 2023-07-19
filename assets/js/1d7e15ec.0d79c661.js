"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer",title:"State Buffer Labeler",sidebar_label:"State Buffer Labeler"},l=void 0,p={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer",id:"pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer",title:"State Buffer Labeler",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer",title:"State Buffer Labeler",sidebar_label:"State Buffer Labeler"},sidebar:"documentation",previous:{title:"State Buffer",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer"},next:{title:"Static Distance Calculator",permalink:"/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Sensor values",id:"sensor-values",level:3},{value:"State field",id:"state-field",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Select a specific state",id:"select-a-specific-state",level:3},{value:"Operation",id:"operation",level:3},{value:"Condition",id:"condition",level:3},{value:"Output",id:"output",level:2}],d={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Apply a rule to a time-series recorded during a state of a machine. (E.g. when minimum value is lower then 10, add label ",(0,o.kt)("inlineCode",{parentName:"p"},"not ok")," else add label ",(0,o.kt)("inlineCode",{parentName:"p"},"ok"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"Requires a list with sensor values and a field defining the state"),(0,o.kt)("h3",{id:"sensor-values"},"Sensor values"),(0,o.kt)("p",null,"An array representing sensor values recorded during the state."),(0,o.kt)("h3",{id:"state-field"},"State field"),(0,o.kt)("p",null,"A field representing the state when the sensor values where recorded."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"select-a-specific-state"},"Select a specific state"),(0,o.kt)("p",null,"When you are interested in the values of a specific state add it here. All other states will be ignored. To get results of all states enter ",(0,o.kt)("inlineCode",{parentName:"p"},"*")),(0,o.kt)("h3",{id:"operation"},"Operation"),(0,o.kt)("p",null,"Operation that will be performed on the sensor values (calculate ",(0,o.kt)("inlineCode",{parentName:"p"},"maximim"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"average"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"minimum"),") "),(0,o.kt)("h3",{id:"condition"},"Condition"),(0,o.kt)("p",null,"Define a rule which label to add. Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"<;5;nok")," means when the calculated value is smaller then 5 add label ok.\nThe default label can be defined with ",(0,o.kt)("inlineCode",{parentName:"p"},"*;nok"),".\nThe first rule that is true defines the label. Rules are applied in the same order as defined here."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Appends a new field  with the label defined in the Condition Configuration"))}m.isMDXComponent=!0}}]);