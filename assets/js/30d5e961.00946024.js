"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,f=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},49783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"org.apache.streampipes.processors.aggregation.flink.count",title:"Count Aggregation",sidebar_label:"Count Aggregation",original_id:"org.apache.streampipes.processors.aggregation.flink.count"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.aggregation.flink.count",id:"version-0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.count",title:"Count Aggregation",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.count.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.aggregation.flink.count",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.count",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.aggregation.flink.count",title:"Count Aggregation",sidebar_label:"Count Aggregation",original_id:"org.apache.streampipes.processors.aggregation.flink.count"},sidebar:"documentation",previous:{title:"Compose",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.compose"},next:{title:"Count Array",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.count-array"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FieldToCount",id:"fieldtocount",level:3},{value:"TimeWindowSize",id:"timewindowsize",level:3},{value:"Time Window Scale",id:"time-window-scale",level:3},{value:"Output",id:"output",level:2}],d={toc:u},g="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.aggregation.flink.count/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Performs an aggregation based on a given field and outputs the number of occurrences.\nExample: Count the number of vehicle positions per vehicleId.\nThe Count aggregation requires a time window, used to perform the count aggregation and a field used to aggregate\nvalues."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"There is no specific input required."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"fieldtocount"},"FieldToCount"),(0,i.kt)("p",null,"Specifies the field containing the values that should be counted."),(0,i.kt)("h3",{id:"timewindowsize"},"TimeWindowSize"),(0,i.kt)("p",null,"Specifies the size of the time window and consequently the number of values that are aggregated each time. "),(0,i.kt)("h3",{id:"time-window-scale"},"Time Window Scale"),(0,i.kt)("p",null,"Specifies the scale/unit of the time window. There are three different time scales to choose from: seconds, minutes or hours."),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,'The output event is composed of two fields. The field "value" specifies the value to count.\nThe second field "count" returns the number of occurrences.\nExample:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  'value': 'vehicleId', \n  'count': 12\n}\n")))}f.isMDXComponent=!0}}]);