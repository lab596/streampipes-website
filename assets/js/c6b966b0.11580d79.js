"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={title:"Apache StreamPipes release 0.68.0",author:"Dominik Riemer",authorURL:"https://twitter.com/dominikjriemer",authorImageURL:"/img/riemer.png"},l=void 0,s={permalink:"/blog/2021/07/22/_release-0680",source:"@site/blog/2021-07-22_release-0680.md",title:"Apache StreamPipes release 0.68.0",description:"8 minutes to read",date:"2021-07-22T00:00:00.000Z",formattedDate:"July 22, 2021",tags:[],readingTime:4.505,hasTruncateMarker:!0,authors:[{name:"Dominik Riemer",url:"https://twitter.com/dominikjriemer",imageURL:"/img/riemer.png"}],frontMatter:{title:"Apache StreamPipes release 0.68.0",author:"Dominik Riemer",authorURL:"https://twitter.com/dominikjriemer",authorImageURL:"/img/riemer.png"},prevItem:{title:"Apache StreamPipes release 0.69.0",permalink:"/blog/2022/03/21/_release-0690"},nextItem:{title:"Running StreamPipes the Kubernetes-Way using k3s",permalink:"/blog/2020/05/27/streampipes_on_k3s"}},m={authorsImageUrls:[void 0]},c=[],u={toc:c},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("div",{style:{float:"left",paddingRight:"40px"}},"8 minutes to read"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"The Apache StreamPipes (incubating) community is pleased to announce Apache StreamPipes version 0.68.0!\nThe latest release brings many improvements related to health management of pipelines and pipeline monitoring, improved user guidance such as a live preview in the pipeline editor and better handling of pipeline updates as well as several new data processors and sinks such as support for NATS.\nIn addition, the release contains several bug fixes related to K8s deployment, PLC adapters and pipeline management."))}f.isMDXComponent=!0}}]);