"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30610],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),l=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?o.createElement(d,s(s({ref:r},c),{},{components:t})):o.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1579:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),s=["components"],i={id:"org.apache.streampipes.processors.transformation.jvm.transform-to-boolean",title:"Transform to boolean",sidebar_label:"Transform to boolean",original_id:"org.apache.streampipes.processors.transformation.jvm.transform-to-boolean"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean",id:"version-0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean",title:"Transform to boolean",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.transform-to-boolean",title:"Transform to boolean",sidebar_label:"Transform to boolean",original_id:"org.apache.streampipes.processors.transformation.jvm.transform-to-boolean"},sidebar:"documentation",previous:{title:"Tokenizer (English)",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer"},next:{title:"Trend",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.increase"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],u={toc:m},f="wrapper";function d(e){var r=e.components,t=(0,n.Z)(e,s);return(0,a.kt)(f,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This processors transforms numbers and strings to boolean values."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,'A string with the values "true", "True", "false", "False" or a number with value 1.0, 1, 0, or 0.0'),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Select fields that should be converted to boolean."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Selected properties of input events are transformed to booleans.\nWhen the value is not valid an error message is logged and the event is discarde."))}d.isMDXComponent=!0}}]);