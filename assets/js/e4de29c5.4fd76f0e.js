"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={id:"org.apache.streampipes.processors.textmining.jvm.namefinder",title:"Name Finder",sidebar_label:"Name Finder"},s=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.textmining.jvm.namefinder",id:"pe/org.apache.streampipes.processors.textmining.jvm.namefinder",title:"Name Finder",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.textmining.jvm.namefinder.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.jvm.namefinder",permalink:"/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.namefinder",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.jvm.namefinder",title:"Name Finder",sidebar_label:"Name Finder"},sidebar:"documentation",previous:{title:"Merge Two Streams",permalink:"/docs/next/pe/org.apache.streampipes.processors.filters.jvm.enrich"},next:{title:"Number Labeler",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number"}},m={},c=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Model parameter",id:"model-parameter",level:4},{value:"Output",id:"output",level:2}],u={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.namefinder/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Loads a trained model which finds names like locations or organizations."),(0,a.kt)("p",null,"A list of trained models can be found here: ",(0,a.kt)("a",{parentName:"p",href:"http://opennlp.sourceforge.net/models-1.5/.%5C"},"http://opennlp.sourceforge.net/models-1.5/.\\"),"\nA guide on how to train a new model can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://opennlp.apache.org/docs/1.9.1/manual/opennlp.html#tools.namefind.training"},"https://opennlp.apache.org/docs/1.9.1/manual/opennlp.html#tools.namefind.training"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"A stream with a list of tokens from a text."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,'Configure the Name finder so that the tokens are assigned to the "List of Tokens" property'),(0,a.kt)("h4",{id:"model-parameter"},"Model parameter"),(0,a.kt)("p",null,"The trained model which should be used to find the names."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Appends a string list property to the stream which contains all found names."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example (with an loaded english person-name-model):")),(0,a.kt)("p",null,"Input: ",(0,a.kt)("inlineCode",{parentName:"p"},'(tokens: ["Hi", "John", "Doe", "is", "here"])')),(0,a.kt)("p",null,"Output: ",(0,a.kt)("inlineCode",{parentName:"p"},'(tokens: ["Hi", "John", "Doe", "is", "here"], foundNames: ["John Doe"])')))}f.isMDXComponent=!0}}]);