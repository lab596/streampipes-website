"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={id:"org.apache.streampipes.connect.adapters.influxdb.stream",title:"InfluxDB Stream Adapter",sidebar_label:"InfluxDB Stream Adapter"},c=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.adapters.influxdb.stream",id:"pe/org.apache.streampipes.connect.adapters.influxdb.stream",title:"InfluxDB Stream Adapter",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.connect.adapters.influxdb.stream.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.influxdb.stream",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.influxdb.stream",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.influxdb.stream",title:"InfluxDB Stream Adapter",sidebar_label:"InfluxDB Stream Adapter"},sidebar:"documentation",previous:{title:"InfluxDB Set Adapter",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.influxdb.set"},next:{title:"MQTT",permalink:"/docs/next/pe/org.apache.streampipes.connect.protocol.stream.mqtt"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.influxdb.stream/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Creates a data stream for an InfluxDB measurement."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"))}f.isMDXComponent=!0}}]);