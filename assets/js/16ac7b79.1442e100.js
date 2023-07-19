"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29328],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"org.apache.streampipes.connect.adapters.netio.mqtt",title:"NETIO MQTT M2M",sidebar_label:"NETIO MQTT M2M"},c=void 0,l={unversionedId:"pe/org.apache.streampipes.connect.adapters.netio.mqtt",id:"pe/org.apache.streampipes.connect.adapters.netio.mqtt",title:"NETIO MQTT M2M",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.connect.adapters.netio.mqtt.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.netio.mqtt",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.netio.mqtt",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.netio.mqtt",title:"NETIO MQTT M2M",sidebar_label:"NETIO MQTT M2M"},sidebar:"documentation",previous:{title:"MySql Stream Adapter",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.mysql.stream"},next:{title:"NETIO http JSON",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.netio.rest"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Ros Bridge",id:"ros-bridge",level:3},{value:"Port",id:"port",level:3},{value:"Topic",id:"topic",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.netio.mqtt/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Connect Robots running on ROS"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Describe the configuration parameters here"),(0,a.kt)("h3",{id:"ros-bridge"},"Ros Bridge"),(0,a.kt)("p",null,"Example: test-server.com (No protocol)"),(0,a.kt)("h3",{id:"port"},"Port"),(0,a.kt)("p",null,"The port of the ROS instance."),(0,a.kt)("h3",{id:"topic"},"Topic"),(0,a.kt)("p",null,"Example: /battery (Starts with /)"),(0,a.kt)("h2",{id:"output"},"Output"))}f.isMDXComponent=!0}}]);