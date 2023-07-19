"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"org.apache.streampipes.sinks.brokers.jvm.nats",title:"NATS Publisher",sidebar_label:"NATS Publisher"},l=void 0,p={unversionedId:"pe/org.apache.streampipes.sinks.brokers.jvm.nats",id:"pe/org.apache.streampipes.sinks.brokers.jvm.nats",title:"NATS Publisher",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.sinks.brokers.jvm.nats.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.brokers.jvm.nats",permalink:"/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.nats",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.sinks.brokers.jvm.nats",title:"NATS Publisher",sidebar_label:"NATS Publisher"},sidebar:"documentation",previous:{title:"MySQL Database",permalink:"/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.mysql"},next:{title:"Notification",permalink:"/docs/next/pe/org.apache.streampipes.sinks.internal.jvm.notification"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"NATS Subject",id:"nats-subject",level:3},{value:"NATS Broker URL",id:"nats-broker-url",level:3},{value:"Username",id:"username",level:3},{value:"NATS Broker URL",id:"nats-broker-url-1",level:3},{value:"NATS Connection Properties",id:"nats-connection-properties",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.nats/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Publishes events to NATS broker."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"nats-subject"},"NATS Subject"),(0,a.kt)("p",null,"The subject (topic) where events should be sent to."),(0,a.kt)("h3",{id:"nats-broker-url"},"NATS Broker URL"),(0,a.kt)("p",null,"The URL to connect to the NATS broker. It can be provided multiple urls separated by commas(,).\n(e.g., nats://localhost:4222,nats://localhost:4223)"),(0,a.kt)("h3",{id:"username"},"Username"),(0,a.kt)("p",null,"The username to authenticate the client with NATS broker."),(0,a.kt)("p",null,"It is an optional configuration.  "),(0,a.kt)("h3",{id:"nats-broker-url-1"},"NATS Broker URL"),(0,a.kt)("p",null,"The password to authenticate the client with NATS broker. "),(0,a.kt)("p",null,"It is an optional configuration."),(0,a.kt)("h3",{id:"nats-connection-properties"},"NATS Connection Properties"),(0,a.kt)("p",null,"All other possible connection configurations that the nats client can be created with.\nIt can be provided as key value pairs separated by colons(:) and commas(,).\n(e.g., io.nats.client.reconnect.max:1, io.nats.client.timeout:1000)"),(0,a.kt)("p",null,"It is an optional configuration."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"(not applicable for data sinks)"))}k.isMDXComponent=!0}}]);