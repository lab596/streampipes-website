"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"org.apache.streampipes.connect.adapters.influxdb.set",title:"InfluxDB Set Adapter",sidebar_label:"InfluxDB Set Adapter"},c=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.adapters.influxdb.set",id:"version-0.92.0/pe/org.apache.streampipes.connect.adapters.influxdb.set",title:"InfluxDB Set Adapter",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.connect.adapters.influxdb.set.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.influxdb.set",permalink:"/docs/pe/org.apache.streampipes.connect.adapters.influxdb.set",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.influxdb.set",title:"InfluxDB Set Adapter",sidebar_label:"InfluxDB Set Adapter"},sidebar:"documentation",previous:{title:"Image Upload (Stream)",permalink:"/docs/pe/org.apache.streampipes.connect.adapters.image.stream"},next:{title:"InfluxDB Stream Adapter",permalink:"/docs/pe/org.apache.streampipes.connect.adapters.influxdb.stream"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.influxdb.set/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Creates a data set for an InfluxDB measurement."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"))}m.isMDXComponent=!0}}]);