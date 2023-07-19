"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(m,i(i({ref:t},l),{},{components:r})):a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop",title:"Static Math",sidebar_label:"Static Math"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop",id:"pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop",title:"Static Math",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop",permalink:"/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop",title:"Static Math",sidebar_label:"Static Math"},sidebar:"documentation",previous:{title:"Static Google Maps Geocoder",permalink:"/docs/next/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding"},next:{title:"Statistics Summary",permalink:"/docs/next/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Left operand",id:"left-operand",level:3},{value:"Right operand value",id:"right-operand-value",level:3},{value:"Operation",id:"operation",level:3},{value:"Output",id:"output",level:2}],h={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Performs calculation on an event property with a static value (+, -, *, /, %)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"The math processor works with any event that has at least one field containing a numerical value."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"left-operand"},"Left operand"),(0,o.kt)("p",null,"The field from the input event that should be used as the left operand."),(0,o.kt)("h3",{id:"right-operand-value"},"Right operand value"),(0,o.kt)("p",null,"Specify the value of the right operand."),(0,o.kt)("h3",{id:"operation"},"Operation"),(0,o.kt)("p",null,"The math operation that should be performed."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"The processor appends the calculation result to each input event."))}m.isMDXComponent=!0}}]);