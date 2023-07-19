"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"org.apache.streampipes.connect.adapters.opcua",title:"OPC UA",sidebar_label:"OPC UA",original_id:"org.apache.streampipes.connect.adapters.opcua"},l=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.adapters.opcua",id:"version-0.70.0/pe/org.apache.streampipes.connect.adapters.opcua",title:"OPC UA",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.connect.adapters.opcua.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.adapters.opcua",permalink:"/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.opcua",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.connect.adapters.opcua",title:"OPC UA",sidebar_label:"OPC UA",original_id:"org.apache.streampipes.connect.adapters.opcua"},sidebar:"documentation",previous:{title:"NSW Traffic Cameras",permalink:"/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera"},next:{title:"PLC4X MODBUS",permalink:"/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.plc4x.modbus"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required Input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Polling Interval",id:"polling-interval",level:3},{value:"Anonymous vs. Username/Password",id:"anonymous-vs-usernamepassword",level:3},{value:"OPC UA Server",id:"opc-ua-server",level:3},{value:"Namespace Index",id:"namespace-index",level:3},{value:"Node ID",id:"node-id",level:3},{value:"Available Nodes",id:"available-nodes",level:3}],d={toc:u},m="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.adapters.opcua/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Reads values from an OPC-UA server repeatedly"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required Input"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"polling-interval"},"Polling Interval"),(0,o.kt)("p",null,"Duration of the polling interval in seconds"),(0,o.kt)("h3",{id:"anonymous-vs-usernamepassword"},"Anonymous vs. Username/Password"),(0,o.kt)("p",null,"Choose whether you want to connect anonymously or authenticate using your credentials."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0"," ",(0,o.kt)("strong",{parentName:"p"},"Anonymous"),": No further information required ",(0,o.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,o.kt)("strong",{parentName:"p"},"Username/Password"),": Insert your ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," to access the OPC UA server"),(0,o.kt)("h3",{id:"opc-ua-server"},"OPC UA Server"),(0,o.kt)("p",null,"Where can the OPC UA server be found?"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0"," ",(0,o.kt)("strong",{parentName:"p"},"URL"),": Specify the server's full ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," (including port), can be with our without leading ",(0,o.kt)("inlineCode",{parentName:"p"},"opc.tcp://"),(0,o.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,o.kt)("strong",{parentName:"p"},"Host/Port"),": Insert the ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," address (with or without leading ",(0,o.kt)("inlineCode",{parentName:"p"},"opc.tcp://"),") and the ",(0,o.kt)("inlineCode",{parentName:"p"},"port"),(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"namespace-index"},"Namespace Index"),(0,o.kt)("p",null,"Requires the index of the namespace you want to connect to."),(0,o.kt)("h3",{id:"node-id"},"Node ID"),(0,o.kt)("p",null,"The identifier of the node you want to read from, numbers and strings are both valid."),(0,o.kt)("h3",{id:"available-nodes"},"Available Nodes"),(0,o.kt)("p",null,"Shows all available nodes once namespace index and node ID are given.\nSelect as much as you like to query."),(0,o.kt)("hr",null))}v.isMDXComponent=!0}}]);