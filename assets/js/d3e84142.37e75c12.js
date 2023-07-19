"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94331],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),l=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(f,i(i({ref:r},c),{},{components:t})):o.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55164:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timer",title:"Boolean Timer",sidebar_label:"Boolean Timer",original_id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timer"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer",id:"version-0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer",title:"Boolean Timer",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timer",title:"Boolean Timer",sidebar_label:"Boolean Timer",original_id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timer"},sidebar:"documentation",previous:{title:"Boolean Inverter",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter"},next:{title:"Boolean To State",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Field",id:"field",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Timer value",id:"timer-value",level:3},{value:"Output",id:"output",level:2}],u={toc:m},d="wrapper";function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)(d,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.timer/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This processor measures how long a boolean value does not change. Once the value is changes the event with the measured time is emitted."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"A boolean value is required in the data stream."),(0,a.kt)("h3",{id:"field"},"Field"),(0,a.kt)("p",null,"The boolean field which is monitored for state changes."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"timer-value"},"Timer value"),(0,a.kt)("p",null,"Define whether it should be measured how long the value is true or how long the value is false."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Appends a field with the time how long the value did not change. Is emitted on the change of the boolean value. Runtime name: measured_time"))}f.isMDXComponent=!0}}]);