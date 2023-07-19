"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94184],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,n(n({ref:r},s),{},{components:t})):a.createElement(f,n({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,n=new Array(o);n[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:i,n[1]=c;for(var p=2;p<o;p++)n[p]=t[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95093:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),n=["components"],c={id:"org.apache.streampipes.processor.imageclassification.qrcode",title:"QR Code Reader",sidebar_label:"QR Code Reader",original_id:"org.apache.streampipes.processor.imageclassification.qrcode"},l=void 0,p={unversionedId:"pe/org.apache.streampipes.processor.imageclassification.qrcode",id:"version-0.91.0/pe/org.apache.streampipes.processor.imageclassification.qrcode",title:"QR Code Reader",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.processor.imageclassification.qrcode.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processor.imageclassification.qrcode",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.qrcode",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processor.imageclassification.qrcode",title:"QR Code Reader",sidebar_label:"QR Code Reader",original_id:"org.apache.streampipes.processor.imageclassification.qrcode"},sidebar:"documentation",previous:{title:"Projection",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.project"},next:{title:"Rate Limit",permalink:"/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.limit"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Image",id:"image",level:3},{value:"Send placeholder value if no qr code is detected",id:"send-placeholder-value-if-no-qr-code-is-detected",level:3},{value:"Placeholder value",id:"placeholder-value",level:3},{value:"Output",id:"output",level:2}],u={toc:d},m="wrapper";function f(e){var r=e.components,t=(0,i.Z)(e,n);return(0,o.kt)(m,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.qrcode/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"QR Code Reader: Detects a QR Code in an image"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"Input events require to have an image field."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"image"},"Image"),(0,o.kt)("p",null,"Image of the QR code"),(0,o.kt)("h3",{id:"send-placeholder-value-if-no-qr-code-is-detected"},"Send placeholder value if no qr code is detected"),(0,o.kt)("p",null,"It is a boolean selection."),(0,o.kt)("h3",{id:"placeholder-value"},"Placeholder value"),(0,o.kt)("p",null,"Place holder value"),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Outputs a similar event like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  'qrvalue': 'http://githhub.com/',\n  'timestamp': 1621244783151  \n}\n")))}f.isMDXComponent=!0}}]);