"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"org.apache.streampipes.connect.adapters.flic.mqtt",title:"Flic MQTT",sidebar_label:"Flic MQTT"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.connect.adapters.flic.mqtt",id:"pe/org.apache.streampipes.connect.adapters.flic.mqtt",title:"Flic MQTT",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.connect.adapters.flic.mqtt.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.flic.mqtt",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.flic.mqtt",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.flic.mqtt",title:"Flic MQTT",sidebar_label:"Flic MQTT"},sidebar:"documentation",previous:{title:"File Set",permalink:"/docs/next/pe/org.apache.streampipes.protocol.set.file"},next:{title:"GDELT",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.gdelt"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Broker URL",id:"broker-url",level:3},{value:"Access Mode",id:"access-mode",level:3},{value:"TOPIC",id:"topic",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.flic.mqtt/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Connect Flic Smart Button over MQTT"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,'This adapter uses the MQTT protocol and requires the data in following exemplary JSON format:\n{ "timestamp": 1584973344615, "click_type": SINGLE, "button_id": button1 }.'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"broker-url"},"Broker URL"),(0,o.kt)("p",null,"Example: tcp://test-server.com:1883 (Protocol required. Port required)"),(0,o.kt)("h3",{id:"access-mode"},"Access Mode"),(0,o.kt)("p",null,"The user can choose between unauthenticated or authenticated access."),(0,o.kt)("h3",{id:"topic"},"TOPIC"),(0,o.kt)("p",null,"The topic the MQTT broker publishes to."),(0,o.kt)("h2",{id:"output"},"Output"))}f.isMDXComponent=!0}}]);