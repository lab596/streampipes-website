"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o=["components"],p={id:"org.apache.streampipes.connect.adapters.slack",title:"Slack",sidebar_label:"Slack"},i=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.adapters.slack",id:"pe/org.apache.streampipes.connect.adapters.slack",title:"Slack",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.connect.adapters.slack.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.slack",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.slack",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.slack",title:"Slack",sidebar_label:"Slack"},sidebar:"documentation",previous:{title:"Random Data Simulator (Stream)",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream"},next:{title:"TI Sensor Tag",permalink:"/docs/next/pe/org.apache.streampipes.connect.adapters.ti"}},l={},u=[{value:"Description",id:"description",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",{align:"center"},(0,c.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.slack/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"description"},"Description"),(0,c.kt)("p",null,"Subscribes to a Slack channel"),(0,c.kt)("hr",null))}f.isMDXComponent=!0}}]);