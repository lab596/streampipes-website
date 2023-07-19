"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"org.apache.streampipes.processors.textmining.jvm.sentencedetection",title:"Sentence Detection (English)",sidebar_label:"Sentence Detection (English)",original_id:"org.apache.streampipes.processors.textmining.jvm.sentencedetection"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection",id:"version-0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection",title:"Sentence Detection (English)",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.jvm.sentencedetection",title:"Sentence Detection (English)",sidebar_label:"Sentence Detection (English)",original_id:"org.apache.streampipes.processors.textmining.jvm.sentencedetection"},sidebar:"documentation",previous:{title:"Reverse Geocoder",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding"},next:{title:"Sequence",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.sentencedetection/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Detects sentences in a text and splits the text accordingly. Only works with english sentences."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"A stream with a string property which contains a text."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Simply assign the correct output of the previous stream to the tokenizer input.\nTo use this component you have to download or train an openNLP model:\n",(0,o.kt)("a",{parentName:"p",href:"https://opennlp.apache.org/models.html"},"https://opennlp.apache.org/models.html")),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Creates for each sentence in a text a new event in which it replaces the text with the sentence."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"Input: ",(0,o.kt)("inlineCode",{parentName:"p"},'(text: "Hi, how are you? I am fine!")')),(0,o.kt)("p",null,"Output: ",(0,o.kt)("inlineCode",{parentName:"p"},'(text: "Hi, how are you?")'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'(text: "I am fine!")')))}g.isMDXComponent=!0}}]);