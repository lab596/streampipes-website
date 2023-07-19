"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"org.apache.streampipes.sinks.brokers.jvm.rabbitmq",title:"RabbitMQ Publisher",sidebar_label:"RabbitMQ Publisher",original_id:"org.apache.streampipes.sinks.brokers.jvm.rabbitmq"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq",id:"version-0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq",title:"RabbitMQ Publisher",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq",permalink:"/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.sinks.brokers.jvm.rabbitmq",title:"RabbitMQ Publisher",sidebar_label:"RabbitMQ Publisher",original_id:"org.apache.streampipes.sinks.brokers.jvm.rabbitmq"},sidebar:"documentation",previous:{title:"REST Publisher",permalink:"/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest"},next:{title:"Slack Notification",permalink:"/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.slack"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"Port",id:"port",level:3},{value:"User",id:"user",level:3},{value:"Password",id:"password",level:3},{value:"Exchange Name",id:"exchange-name",level:3},{value:"RabbitMQ Topic",id:"rabbitmq-topic",level:3},{value:"Output",id:"output",level:2}],b={toc:u},m="wrapper";function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.rabbitmq/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Forwards events to a RabbitMQ broker"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("p",null,"The hostname of the RabbitMQ broker."),(0,a.kt)("h3",{id:"port"},"Port"),(0,a.kt)("p",null,"The port of the RabbitMQ broker."),(0,a.kt)("h3",{id:"user"},"User"),(0,a.kt)("p",null,"The username used to connect to the RabbitMQ broker."),(0,a.kt)("h3",{id:"password"},"Password"),(0,a.kt)("p",null,"The password used to connect to the RabbitMQ broker."),(0,a.kt)("h3",{id:"exchange-name"},"Exchange Name"),(0,a.kt)("p",null,"The name of the exchange."),(0,a.kt)("h3",{id:"rabbitmq-topic"},"RabbitMQ Topic"),(0,a.kt)("p",null,"The topic where events should be sent to."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"(not applicable for data sinks)"))}d.isMDXComponent=!0}}]);