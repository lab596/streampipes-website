"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18825],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var i=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),s=function(e){var r=i.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},l=function(e){var r=s(e.components);return i.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},g=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return t?i.createElement(d,n(n({ref:r},l),{},{components:t})):i.createElement(d,n({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,n=new Array(o);n[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[m]="string"==typeof e?e:a,n[1]=p;for(var s=2;s<o;s++)n[s]=t[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},57113:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),n=["components"],p={id:"org.apache.streampipes.processor.imageclassification.jvm.image-cropper",title:"Image Cropper",sidebar_label:"Image Cropper",original_id:"org.apache.streampipes.processor.imageclassification.jvm.image-cropper"},c=void 0,s={unversionedId:"pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",id:"version-0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",title:"Image Cropper",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688363956,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processor.imageclassification.jvm.image-cropper",title:"Image Cropper",sidebar_label:"Image Cropper",original_id:"org.apache.streampipes.processor.imageclassification.jvm.image-cropper"},sidebar:"documentation",previous:{title:"Google Maps Geocoder",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processor.geo.jvm.geocoding"},next:{title:"Image Enricher",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Output",id:"output",level:2}],u={toc:m},g="wrapper";function d(e){var r=e.components,t=(0,a.Z)(e,n);return(0,o.kt)(g,(0,i.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.jvm.image-cropper/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Image Enrichment: Crops an  + image based on  + given bounding box coordinates"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"An image and an array with bounding boxes.\nA box consists of the x and y coordinates in the image as well as the height and width "),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"A new event for each box containing the cropped image"))}d.isMDXComponent=!0}}]);