"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state",title:"Boolean To State",sidebar_label:"Boolean To State"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state",id:"pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state",title:"Boolean To State",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state",title:"Boolean To State",sidebar_label:"Boolean To State"},sidebar:"documentation",previous:{title:"Boolean Timer",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer"},next:{title:"CSV Metadata Enricher",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Boolean Fields",id:"boolean-fields",level:3},{value:"Default State",id:"default-state",level:3},{value:"Mapping Configuration",id:"mapping-configuration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)(d,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Converts boolean fields to a state string representing the current state of the system.\nThis processor requires one or multiple boolean values in the data stream.\nFor the selected value which is true, the runtime name is added as the state field."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"required-input"},"Required input"),(0,n.kt)("h3",{id:"boolean-fields"},"Boolean Fields"),(0,n.kt)("p",null,"Boolean fields that are converted to the state when true"),(0,n.kt)("h3",{id:"default-state"},"Default State"),(0,n.kt)("p",null,"When all boolean values are false, a default  state can be defined"),(0,n.kt)("h3",{id:"mapping-configuration"},"Mapping Configuration"),(0,n.kt)("p",null,'Configuration to provide a string mapping for each possible value.\nOn the left ist the value of the runtime name and on the right the new value (e.g. {"runtimeName": "newValue"}).'),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"No further configuration required"),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("p",null,"The output contains a new value with the string values of the state"))}f.isMDXComponent=!0}}]);