"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"org.apache.streampipes.processors.transformation.jvm.processor.state.buffer",title:"State Buffer",sidebar_label:"State Buffer",original_id:"org.apache.streampipes.processors.transformation.jvm.processor.state.buffer"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer",id:"version-0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer",title:"State Buffer",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.processor.state.buffer",title:"State Buffer",sidebar_label:"State Buffer",original_id:"org.apache.streampipes.processors.transformation.jvm.processor.state.buffer"},sidebar:"documentation",previous:{title:"Split Array",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.split-array"},next:{title:"State Buffer Labeler",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Timestamp",id:"timestamp",level:3},{value:"State",id:"state",level:3},{value:"Sensor value to cache",id:"sensor-value-to-cache",level:3},{value:"Output",id:"output",level:2}],f={toc:u},m="wrapper";function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)(m,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Buffers values of a sensor, while state does not change.\nSelect a state field in the event. Events are buffered as long as state field does not change. When it changes result event is emitted."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"Define the state and sensor value field"),(0,o.kt)("h3",{id:"timestamp"},"Timestamp"),(0,o.kt)("p",null,"A mapping  property for a timestamp field"),(0,o.kt)("h3",{id:"state"},"State"),(0,o.kt)("p",null,"Select the field representing the state "),(0,o.kt)("h3",{id:"sensor-value-to-cache"},"Sensor value to cache"),(0,o.kt)("p",null,"Select the field with the numerical values to buffer"),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Emits a new event on state change, with the fields ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", and a list containing all ",(0,o.kt)("inlineCode",{parentName:"p"},"sensor values"),"."))}d.isMDXComponent=!0}}]);