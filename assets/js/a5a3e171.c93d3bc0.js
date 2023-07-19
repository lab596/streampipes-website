"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20226],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(h,a(a({ref:r},c),{},{components:t})):n.createElement(h,a({ref:r},c))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32972:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"org.apache.streampipes.processors.transformation.flink.fieldhasher",title:"Field Hasher",sidebar_label:"Field Hasher"},l=void 0,p={unversionedId:"pe/org.apache.streampipes.processors.transformation.flink.fieldhasher",id:"version-0.92.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher",title:"Field Hasher",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.flink.fieldhasher",title:"Field Hasher",sidebar_label:"Field Hasher"},sidebar:"documentation",previous:{title:"Field Converter",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.flink.field-converter"},next:{title:"Field Mapper",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.flink.field-mapper"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Field",id:"field",level:3},{value:"Hash Algorithm",id:"hash-algorithm",level:3},{value:"Output",id:"output",level:2}],u={toc:d},f="wrapper";function h(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(f,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.fieldhasher/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The Field Hasher uses an algorithm to encode values in a field. The Field Hasher can use MD5, SHA1 or SHA2 to hash field values."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"This processor requires at least one field of type string."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"field"},"Field"),(0,o.kt)("p",null,"Specifies the string field that will be encoded."),(0,o.kt)("h3",{id:"hash-algorithm"},"Hash Algorithm"),(0,o.kt)("p",null,"Specifies the algorithm used to encode the string field. The following algorithms\nare available: SHA2, MD5 or SHA1."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"The encoded string field."))}h.isMDXComponent=!0}}]);