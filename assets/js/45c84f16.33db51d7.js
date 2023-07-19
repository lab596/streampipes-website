"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?a.createElement(v,o(o({ref:t},u),{},{components:r})):a.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],i={id:"org.apache.streampipes.sinks.databases.jvm.postgresql",title:"PostgreSQL",sidebar_label:"PostgreSQL"},l=void 0,p={unversionedId:"pe/org.apache.streampipes.sinks.databases.jvm.postgresql",id:"version-0.92.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql",title:"PostgreSQL",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.databases.jvm.postgresql",permalink:"/docs/pe/org.apache.streampipes.sinks.databases.jvm.postgresql",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.sinks.databases.jvm.postgresql",title:"PostgreSQL",sidebar_label:"PostgreSQL"},sidebar:"documentation",previous:{title:"OneSignal",permalink:"/docs/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal"},next:{title:"Pulsar Publisher",permalink:"/docs/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Hostname",id:"hostname",level:3},{value:"Port",id:"port",level:3},{value:"Database Name",id:"database-name",level:3},{value:"Table Name",id:"table-name",level:3},{value:"Username",id:"username",level:3},{value:"Password",id:"password",level:3},{value:"Output",id:"output",level:2}],d={toc:c},m="wrapper";function v(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.databases.jvm.postgresql/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Stores events in a Postgres database."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"required-input"},"Required input"),(0,s.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("h3",{id:"hostname"},"Hostname"),(0,s.kt)("p",null,"The hostname of the PostgreSQL instance."),(0,s.kt)("h3",{id:"port"},"Port"),(0,s.kt)("p",null,"The port of the PostgreSQL instance (default 5432)."),(0,s.kt)("h3",{id:"database-name"},"Database Name"),(0,s.kt)("p",null,"The name of the database where events will be stored"),(0,s.kt)("h3",{id:"table-name"},"Table Name"),(0,s.kt)("p",null,"The name of the table where events will be stored (will be created if it does not exist)"),(0,s.kt)("h3",{id:"username"},"Username"),(0,s.kt)("p",null,"The username for the PostgreSQL Server."),(0,s.kt)("h3",{id:"password"},"Password"),(0,s.kt)("p",null,"The password for the PostgreSQL Server."),(0,s.kt)("h2",{id:"output"},"Output"),(0,s.kt)("p",null,"(not applicable for data sinks)"))}v.isMDXComponent=!0}}]);