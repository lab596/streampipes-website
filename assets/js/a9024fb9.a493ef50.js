"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},73719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Running StreamPipes the Kubernetes-Way using k3s",author:"Patrick Wiener",authorURL:"https://twitter.com/patrickwiener",authorImageURL:"/img/wiener.png"},p=void 0,c={permalink:"/blog/2020/05/27/streampipes_on_k3s",source:"@site/blog/2020-05-27-streampipes_on_k3s.md",title:"Running StreamPipes the Kubernetes-Way using k3s",description:"15 minutes to read",date:"2020-05-27T00:00:00.000Z",formattedDate:"May 27, 2020",tags:[],readingTime:11.89,hasTruncateMarker:!0,authors:[{name:"Patrick Wiener",url:"https://twitter.com/patrickwiener",imageURL:"/img/wiener.png"}],frontMatter:{title:"Running StreamPipes the Kubernetes-Way using k3s",author:"Patrick Wiener",authorURL:"https://twitter.com/patrickwiener",authorImageURL:"/img/wiener.png"},prevItem:{title:"Apache StreamPipes release 0.68.0",permalink:"/blog/2021/07/22/_release-0680"},nextItem:{title:"Apache StreamPipes release 0.66.0",permalink:"/blog/2020/05/19/release-0660"}},l={authorsImageUrls:[void 0]},u=[],m={toc:u},g="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(g,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{class:"blog-image",style:{maxWidth:"100%"},src:"/img/blog/2020-05-27/streampipes_k3s.png",alt:"StreamPipes on k3s"}),"**",(0,o.kt)("div",{style:{float:"left",paddingRight:"40px"}},"15 minutes to read"),"**",(0,o.kt)("br",null),(0,o.kt)("p",null,"This blog post is the second part of a series on how we want to bring StreamPipes closer to the edge. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/blog/2020/01/23/streampipes_on_rpi"},"first part")," describes how we managed to build and deploy StreamPipes on one Raspberry Pi (Model 4), while the ",(0,o.kt)("a",{parentName:"p",href:"/docs/blog/2020/05/27/streampipes_on_k3s"},"second part")," further covers how to deploy StreamPipes over a Kubernetes cluster of two Raspberry Pi's via k3s using our StreamPipes helm chart."))}f.isMDXComponent=!0}}]);