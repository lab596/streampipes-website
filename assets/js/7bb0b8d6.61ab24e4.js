"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29347],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory",title:"Single Trajectory Creator",sidebar_label:"Single Trajectory Creator",original_id:"org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory",id:"version-0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory",title:"Single Trajectory Creator",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688363956,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory",title:"Single Trajectory Creator",sidebar_label:"Single Trajectory Creator",original_id:"org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory"},sidebar:"documentation",previous:{title:"Signal Edge Filter",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge"},next:{title:"Size Measure",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"1st parameter",id:"1st-parameter",level:3},{value:"2nd parameter",id:"2nd-parameter",level:3},{value:"3rd parameter",id:"3rd-parameter",level:3},{value:"4rd parameter",id:"4rd-parameter",level:3},{value:"5rd parameter",id:"5rd-parameter",level:3},{value:"Output",id:"output",level:2},{value:"Example",id:"example",level:3}],m={toc:u},d="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This processor creates a JTS LineString geometry from  JTS Points events, represent a trajectory. A trajectory is defined  as the path that a moving object follows through space as a function of time. Each sub-point of this LineString represents a single event. The latest sub-point represents the latest geo-event. For each Point event it is also possible to store an additional m-value representing for example actually speed, distance, duration or direction of this event. A trajectory consists of at least two sub-point and can't be infinitive, so a threshold of maximum allowed sub-points is required. When the sub-point threshold is exceeded, the oldest point is removed from the LineString."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"required-input"},"Required input"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WKT String of a JTS Point Geometry"),(0,n.kt)("li",{parentName:"ul"},"Integer value representing EPSG code"),(0,n.kt)("li",{parentName:"ul"},"Number value for M-value")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Creates a JTS Geometry LineString from a JTS Point Geometries events representing a trajectory."),(0,n.kt)("h3",{id:"1st-parameter"},"1st parameter"),(0,n.kt)("p",null,"Point WKT String"),(0,n.kt)("h3",{id:"2nd-parameter"},"2nd parameter"),(0,n.kt)("p",null,"EPSG code value"),(0,n.kt)("h3",{id:"3rd-parameter"},"3rd parameter"),(0,n.kt)("p",null,"M-value for each sub-point of the trajectory"),(0,n.kt)("h3",{id:"4rd-parameter"},"4rd parameter"),(0,n.kt)("p",null,"String for a description text for the trajectory"),(0,n.kt)("h3",{id:"5rd-parameter"},"5rd parameter"),(0,n.kt)("p",null,"Number of allowed sub-points"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("p",null,"Adds a LineString geometry in the Well Known Text to the event, representing a trajectory. Also the description text is added to the event stream. The first existing event creates an empty LineString."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"Creating a LineString with a threshold of 2 allowed sub-points:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First Event:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Point(8.12 41.23) --\x3e LineString (empty)"))),(0,n.kt)("li",{parentName:"ul"},"Second Event:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Point(8.56 41.25) --\x3e LineString(8.12 41.23, 8.56 41.25)"))),(0,n.kt)("li",{parentName:"ul"},"Second Event:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Point(8.84 40.98) --\x3e LineString(8.56 41.25, 8.84 40.98)")))),(0,n.kt)("p",null,"M-value is not represented in the LineString but will be stored for internal use!"))}g.isMDXComponent=!0}}]);