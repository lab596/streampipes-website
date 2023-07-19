"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(r),d=o,f=l["".concat(p,".").concat(d)]||l[d]||u[d]||i;return r?a.createElement(f,n(n({ref:t},m),{},{components:r})):a.createElement(f,n({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(87462),o=r(63366),i=(r(67294),r(3905)),n=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor",title:"Timestamp Extractor",sidebar_label:"Timestamp Extractor",original_id:"org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor",id:"version-0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor",title:"Timestamp Extractor",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor",title:"Timestamp Extractor",sidebar_label:"Timestamp Extractor",original_id:"org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor"},sidebar:"documentation",previous:{title:"Timestamp Enricher",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.timestamp"},next:{title:"Tokenizer (English)",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer"}},m={},l=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Timestamp Field",id:"timestamp-field",level:3},{value:"Extract Fields",id:"extract-fields",level:3},{value:"Output",id:"output",level:2}],u={toc:l},d="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,n);return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This processor extracts a timestamp into the individual time fields (e.g. day field, hour field, ....)"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"This processor requires an event that provides a timestamp value (a field that is marked to be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"http://schema\n.org/DateTime"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"timestamp-field"},"Timestamp Field"),(0,i.kt)("p",null,"The field of the event containing the timestamp to parse."),(0,i.kt)("h3",{id:"extract-fields"},"Extract Fields"),(0,i.kt)("p",null,"Select the individual parts of the timestamp that should be extracted, e.g., Year, Minute and Day."),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"The output of this processor is a new event that contains the fields selected by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Extract Fields")," parameter."))}f.isMDXComponent=!0}}]);