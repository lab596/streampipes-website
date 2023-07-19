"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),a=["components"],i={id:"org.apache.streampipes.processors.textmining.jvm.chunker",title:"Chunker (English)",sidebar_label:"Chunker (English)"},s=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.textmining.jvm.chunker",id:"version-0.92.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker",title:"Chunker (English)",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.jvm.chunker",permalink:"/docs/pe/org.apache.streampipes.processors.textmining.jvm.chunker",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.jvm.chunker",title:"Chunker (English)",sidebar_label:"Chunker (English)"},sidebar:"documentation",previous:{title:"Calculate Duration",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.jvm.duration-value"},next:{title:"Compose",permalink:"/docs/pe/org.apache.streampipes.processors.filters.jvm.compose"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",{align:"center"},(0,p.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.chunker/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"description"},"Description"),(0,p.kt)("p",null,"Segments given tokens into chunks (e.g. noun groups, verb groups, ...) and appends the found chunks to the stream."),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"required-input"},"Required input"),(0,p.kt)("p",null,"Needs a stream with two string list properties:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"A list of tokens "),(0,p.kt)("li",{parentName:"ol"},"A list of part-of-speech tags (the Part-of-Speech processing element can be used for that)")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"configuration"},"Configuration"),(0,p.kt)("p",null,"Assign the tokens and the part of speech tags to the corresponding stream property.\nTo use this component you have to download or train an openNLP model:\n",(0,p.kt)("a",{parentName:"p",href:"https://opennlp.apache.org/models.html"},"https://opennlp.apache.org/models.html")),(0,p.kt)("h2",{id:"output"},"Output"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example:")),(0,p.kt)("p",null,"Input:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'tokens: ["John", "is", "a", "Person"]\ntags: ["NNP", "VBZ", "DT", "NN"]\n')),(0,p.kt)("p",null,"Output:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'tokens: ["John", "is", "a", "Person"]\ntags: ["NNP", "VBZ", "DT", "NN"]\nchunks: ["John", "is", "a Person"]\nchunkType: ["NP", "VP", "NP"])\n')))}h.isMDXComponent=!0}}]);