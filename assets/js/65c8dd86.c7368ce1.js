"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge",title:"Signal Edge Filter",sidebar_label:"Signal Edge Filter"},l=void 0,p={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge",id:"pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge",title:"Signal Edge Filter",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge",title:"Signal Edge Filter",sidebar_label:"Signal Edge Filter"},sidebar:"documentation",previous:{title:"Sequence Detection",permalink:"/docs/next/pe/org.apache.streampipes.processors.siddhi.sequence"},next:{title:"Single Trajectory Creator",permalink:"/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Boolean Field",id:"boolean-field",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Kind of edge",id:"kind-of-edge",level:3},{value:"Delay",id:"delay",level:3},{value:"Output",id:"output",level:2}],u={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Observes a boolean value and forwards the event when a signal edge is detected"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("h3",{id:"boolean-field"},"Boolean Field"),(0,a.kt)("p",null,"Boolean field that is observed"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"kind-of-edge"},"Kind of edge"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Detect rising edges "),(0,a.kt)("li",{parentName:"ul"},"Detect falling edges "),(0,a.kt)("li",{parentName:"ul"},"Detect both\n")),(0,a.kt)("h3",{id:"delay"},"Delay"),(0,a.kt)("p",null,"Defines for how many events the signal must be stable before result is emitted.\n(E.g. if set to 2, the result is not emitted if value toggles between true and false, it fires when two consecutive events are detected after the flank)"),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Emits input event, when the signal edge is detected"))}f.isMDXComponent=!0}}]);