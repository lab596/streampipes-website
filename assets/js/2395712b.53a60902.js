"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping",title:"Measure Time Between Two Sensors",sidebar_label:"Measure Time Between Two Sensors",original_id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping",id:"version-0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping",title:"Measure Time Between Two Sensors",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping",title:"Measure Time Between Two Sensors",sidebar_label:"Measure Time Between Two Sensors",original_id:"org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping"},sidebar:"documentation",previous:{title:"Math",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop"},next:{title:"Measurement Unit Converter",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Left Field",id:"left-field",level:3},{value:"Right Field",id:"right-field",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2},{value:"Timer Field",id:"timer-field",level:3},{value:"Counter",id:"counter",level:3}],u={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This processor can be used to measure the time between two boolean sensors.\nFor example on a conveyor, where one sensor is placed on the left and one senor placed on the right.\nParts are transported on the conveyor and the sensors are boolean sensors detecting those parts.\nThe time is measured between the two sensors as well as the amount of complete transportation's is counted.",(0,i.kt)("br",{parentName:"p"}),"\n","The measurement is initialized once the left sensor is true and stopped once the right sensor is true.\nThere can also be multiple parts on the conveyor as long as the individual parts do not change."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping/time_measure_example.png",width:"300px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"Requires two boolean fields in the datastream."),(0,i.kt)("h3",{id:"left-field"},"Left Field"),(0,i.kt)("p",null,"The left field starts the timer when value is true."),(0,i.kt)("h3",{id:"right-field"},"Right Field"),(0,i.kt)("p",null,"The right field stops the timer and emits the event when its value is true."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"No furhter configuration is required."),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"Appends two fields to the input event."),(0,i.kt)("h3",{id:"timer-field"},"Timer Field"),(0,i.kt)("p",null,"The timer field is a numeric value representing the time between the two sensors. Runtime name: measured_time"),(0,i.kt)("h3",{id:"counter"},"Counter"),(0,i.kt)("p",null,"The counter indicated how many events where emitted by this component. Runtime name: counter"))}f.isMDXComponent=!0}}]);