"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),p=["components"],a={id:"org.apache.streampipes.processors.textmining.jvm.chunker",title:"Chunker (English)",sidebar_label:"Chunker (English)",original_id:"org.apache.streampipes.processors.textmining.jvm.chunker"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.textmining.jvm.chunker",id:"version-0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker",title:"Chunker (English)",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.jvm.chunker",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.jvm.chunker",title:"Chunker (English)",sidebar_label:"Chunker (English)",original_id:"org.apache.streampipes.processors.textmining.jvm.chunker"},sidebar:"documentation",previous:{title:"Calculate Duration",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value"},next:{title:"Compose",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.compose"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},h="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.chunker/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Segments given tokens into chunks (e.g. noun groups, verb groups, ...) and appends the found chunks to the stream."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"Needs a stream with two string list properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A list of tokens "),(0,i.kt)("li",{parentName:"ol"},"A list of part-of-speech tags (the Part-of-Speech processing element can be used for that)")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Assign the tokens and the part of speech tags to the corresponding stream property.\nTo use this component you have to download or train an openNLP model:\n",(0,i.kt)("a",{parentName:"p",href:"https://opennlp.apache.org/models.html"},"https://opennlp.apache.org/models.html")),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,"Input:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'tokens: ["John", "is", "a", "Person"]\ntags: ["NNP", "VBZ", "DT", "NN"]\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'tokens: ["John", "is", "a", "Person"]\ntags: ["NNP", "VBZ", "DT", "NN"]\nchunks: ["John", "is", "a Person"]\nchunkType: ["NP", "VP", "NP"])\n')))}d.isMDXComponent=!0}}]);