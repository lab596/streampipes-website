"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48555],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=i,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=h;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},33194:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"org.apache.streampipes.processors.filters.jvm.enrich",title:"Merge By Enrich",sidebar_label:"Merge By Enrich",original_id:"org.apache.streampipes.processors.filters.jvm.enrich"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.filters.jvm.enrich",id:"version-0.91.0/pe/org.apache.streampipes.processors.filters.jvm.enrich",title:"Merge By Enrich",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.processors.filters.jvm.enrich.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.filters.jvm.enrich",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.enrich",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.filters.jvm.enrich",title:"Merge By Enrich",sidebar_label:"Merge By Enrich",original_id:"org.apache.streampipes.processors.filters.jvm.enrich"},sidebar:"documentation",previous:{title:"Measurement Unit Converter",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter"},next:{title:"Name Finder",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.namefinder"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},h="wrapper";function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(h,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.enrich/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Merges two data streams by enriching one of the streams with the properties of the other stream. The output frequency is the same as the frequency of the stream which is enriched."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"None"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the stream which should be enriched with the properties of the other stream.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The last event of the stream is hold in state and each event of the other stream is enriched by the properties the user selected")))),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"The compose processor has a configurable output that can be selected by the user at pipeline modeling time."))}d.isMDXComponent=!0}}]);