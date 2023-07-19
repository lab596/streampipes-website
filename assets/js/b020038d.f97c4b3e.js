"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89558],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49827:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"org.apache.streampipes.sinks.brokers.jvm.rest",title:"REST Publisher",sidebar_label:"REST Publisher"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.sinks.brokers.jvm.rest",id:"version-0.92.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest",title:"REST Publisher",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.brokers.jvm.rest",permalink:"/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rest",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.sinks.brokers.jvm.rest",title:"REST Publisher",sidebar_label:"REST Publisher"},sidebar:"documentation",previous:{title:"Pulsar Publisher",permalink:"/docs/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar"},next:{title:"RabbitMQ Publisher",permalink:"/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"REST URL",id:"rest-url",level:3},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function f(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(d,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.rest/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Posts a JSON representation of an event to a REST interface."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"rest-url"},"REST URL"),(0,o.kt)("p",null,"The complete URL of the REST endpoint."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"(not applicable for data sinks)"))}f.isMDXComponent=!0}}]);