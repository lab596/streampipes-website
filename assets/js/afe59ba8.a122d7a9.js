"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94199],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(t),d=i,h=l["".concat(p,".").concat(d)]||l[d]||m[d]||s;return t?n.createElement(h,o(o({ref:r},u),{},{components:t})):n.createElement(h,o({ref:r},u))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[l]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93921:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(87462),i=t(63366),s=(t(67294),t(3905)),o=["components"],a={id:"org.apache.streampipes.processors.enricher.jvm.sizemeasure",title:"Size Measure",sidebar_label:"Size Measure",original_id:"org.apache.streampipes.processors.enricher.jvm.sizemeasure"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure",id:"version-0.91.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure",title:"Size Measure",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.enricher.jvm.sizemeasure",title:"Size Measure",sidebar_label:"Size Measure",original_id:"org.apache.streampipes.processors.enricher.jvm.sizemeasure"},sidebar:"documentation",previous:{title:"Single Trajectory Creator",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory"},next:{title:"Spatial Grid Enrichment",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processor.geo.flink"}},u={},l=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:l},d="wrapper";function h(e){var r=e.components,t=(0,i.Z)(e,o);return(0,s.kt)(d,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.enricher.jvm.sizemeasure/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Measures the size of an incoming event and appends this number to the event by serializing it."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"required-input"},"Required input"),(0,s.kt)("p",null,"The size measure processor does not have any specific input requirements."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"You can specify if the size should be in Bytes, Kilobytes (1024 Bytes) or in Megabytes (1024 Kilobytes)."),(0,s.kt)("h2",{id:"output"},"Output"),(0,s.kt)("p",null,"The size measure processor appends the size of the event (without the field, which is getting added) as a double. The rest of the event stays the same."))}h.isMDXComponent=!0}}]);