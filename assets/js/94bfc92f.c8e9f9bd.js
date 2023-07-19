"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75524],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(i),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return i?n.createElement(h,o(o({ref:t},d),{},{components:i})):n.createElement(h,o({ref:t},d))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},13335:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(87462),r=i(63366),a=(i(67294),i(3905)),o=["components"],s={id:"org.apache.streampipes.sinks.databases.ditto",title:"Eclipse Ditto",sidebar_label:"Eclipse Ditto",original_id:"org.apache.streampipes.sinks.databases.ditto"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.sinks.databases.ditto",id:"version-0.70.0/pe/org.apache.streampipes.sinks.databases.ditto",title:"Eclipse Ditto",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.sinks.databases.ditto.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.databases.ditto",permalink:"/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.ditto",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.sinks.databases.ditto",title:"Eclipse Ditto",sidebar_label:"Eclipse Ditto",original_id:"org.apache.streampipes.sinks.databases.ditto"},sidebar:"documentation",previous:{title:"Data Lake",permalink:"/docs/0.70.0/pe/org.apache.streampipes.sinks.internal.jvm.datalake"},next:{title:"Elasticsearch",permalink:"/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Fields to send",id:"fields-to-send",level:3},{value:"Ditto API endpoint",id:"ditto-api-endpoint",level:3},{value:"Username",id:"username",level:3},{value:"Password",id:"password",level:3},{value:"Thing ID",id:"thing-id",level:3},{value:"Feature ID",id:"feature-id",level:4},{value:"Output",id:"output",level:2}],u={toc:c},m="wrapper";function h(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.databases.ditto/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Forwards events to the Eclipse Ditto API."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"fields-to-send"},"Fields to send"),(0,a.kt)("p",null,"The fields that should be stored as a property to Ditto endpoint."),(0,a.kt)("h3",{id:"ditto-api-endpoint"},"Ditto API endpoint"),(0,a.kt)("p",null,"The endpoint URL of the Ditto instance."),(0,a.kt)("h3",{id:"username"},"Username"),(0,a.kt)("p",null,"The username to authenticate the Ditto endpoint. "),(0,a.kt)("h3",{id:"password"},"Password"),(0,a.kt)("p",null,"The password to authenticate the Ditto endpoint. "),(0,a.kt)("h3",{id:"thing-id"},"Thing ID"),(0,a.kt)("p",null,"The Ditto thing ID."),(0,a.kt)("h4",{id:"feature-id"},"Feature ID"),(0,a.kt)("p",null,"The Ditto feature ID"),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"(not applicable for data sinks)"))}h.isMDXComponent=!0}}]);