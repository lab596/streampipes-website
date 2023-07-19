"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91639],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24963:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.changed-value",title:"Value Changed",sidebar_label:"Value Changed",original_id:"org.apache.streampipes.processors.transformation.jvm.changed-value"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.changed-value",id:"version-0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value",title:"Value Changed",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.changed-value",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.changed-value",title:"Value Changed",sidebar_label:"Value Changed",original_id:"org.apache.streampipes.processors.transformation.jvm.changed-value"},sidebar:"documentation",previous:{title:"URL Dereferencing",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing"},next:{title:"Word Count",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.flink.wordcount"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.changed-value/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This processor sends out an event everytime a specific object changes. It also adds a timestamp in ms from the system time."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Select property to monitor for changes"),(0,o.kt)("p",null,"Describe the configuration parameters here"),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Emit an event on change and append a timestamp when the change occured"))}f.isMDXComponent=!0}}]);