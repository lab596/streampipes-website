"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42634],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},45643:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={id:"org.apache.streampipes.processor.imageclassification.jvm.image-cropper",title:"Image Cropper",sidebar_label:"Image Cropper"},c=void 0,s={unversionedId:"pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",id:"pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",title:"Image Cropper",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",permalink:"/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processor.imageclassification.jvm.image-cropper",title:"Image Cropper",sidebar_label:"Image Cropper"},sidebar:"documentation",previous:{title:"Google Maps Geocoder",permalink:"/docs/next/pe/org.apache.streampipes.processor.geo.jvm.geocoding"},next:{title:"Image Enricher",permalink:"/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Output",id:"output",level:2}],u={toc:m},g="wrapper";function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(g,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.jvm.image-cropper/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Image Enrichment: Crops an  + image based on  + given bounding box coordinates"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"An image and an array with bounding boxes.\nA box consists of the x and y coordinates in the image as well as the height and width "),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"A new event for each box containing the cropped image"))}d.isMDXComponent=!0}}]);