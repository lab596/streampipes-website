"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],c={id:"org.apache.streampipes.connect.adapters.simulator.machine",title:"Machine Data Simulator",sidebar_label:"Machine Data Simulator"},p=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.adapters.simulator.machine",id:"version-0.92.0/pe/org.apache.streampipes.connect.adapters.simulator.machine",title:"Machine Data Simulator",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.connect.adapters.simulator.machine.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.simulator.machine",permalink:"/docs/pe/org.apache.streampipes.connect.adapters.simulator.machine",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.simulator.machine",title:"Machine Data Simulator",sidebar_label:"Machine Data Simulator"},sidebar:"documentation",previous:{title:"MQTT",permalink:"/docs/pe/org.apache.streampipes.connect.protocol.stream.mqtt"},next:{title:"MySQL Set Adapter",permalink:"/docs/pe/org.apache.streampipes.connect.adapters.mysql.set"}},l={},m=[{value:"Description",id:"description",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.simulator.machine/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Publishes various simulated machine sensor data in a configurable time interval (in milliseconds).\nSensors are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"flowrate"),(0,i.kt)("li",{parentName:"ul"},"pressure"),(0,i.kt)("li",{parentName:"ul"},"waterlevel")),(0,i.kt)("hr",null))}f.isMDXComponent=!0}}]);