"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27530],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),p=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return i.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?i.createElement(h,a(a({ref:r},c),{},{components:t})):i.createElement(h,a({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12850:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=t(87462),n=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"org.apache.streampipes.processors.siddhi.numericalfilter",title:"Numerical Filter (Siddhi)",sidebar_label:"Numerical Filter (Siddhi)",original_id:"org.apache.streampipes.processors.siddhi.numericalfilter"},s=void 0,p={unversionedId:"pe/org.apache.streampipes.processors.siddhi.numericalfilter",id:"version-0.70.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter",title:"Numerical Filter (Siddhi)",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.siddhi.numericalfilter",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.siddhi.numericalfilter",title:"Numerical Filter (Siddhi)",sidebar_label:"Numerical Filter (Siddhi)",original_id:"org.apache.streampipes.processors.siddhi.numericalfilter"},sidebar:"documentation",previous:{title:"Numerical Filter",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter"},next:{title:"Numerical Text Filter",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Field",id:"field",level:3},{value:"Operation",id:"operation",level:3},{value:"Threshold value",id:"threshold-value",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function h(e){var r=e.components,t=(0,n.Z)(e,a);return(0,o.kt)(m,(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.siddhi.numericalfilter/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The Numerical Filter processor filters numerical values based on a given threshold. Therefore, it uses the lightweight\nCEP engine Siddhi by issuing a Siddhi query, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// filter query to filter out all events not satisfying the condition\nfrom inputStreamName[numberField<10]\nselect *\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"The processor works with any input event that has one field containing a numerical value."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"field"},"Field"),(0,o.kt)("p",null,"Specifies the field name where the filter operation should be applied on."),(0,o.kt)("h3",{id:"operation"},"Operation"),(0,o.kt)("p",null,"Specifies the filter operation that should be applied on the field."),(0,o.kt)("h3",{id:"threshold-value"},"Threshold value"),(0,o.kt)("p",null,"Specifies the threshold value."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"The processor outputs the input event if it satisfies the filter expression."))}h.isMDXComponent=!0}}]);