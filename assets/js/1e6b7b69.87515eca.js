"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35665],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"StreamPipes release 0.63.0",author:"Dominik Riemer",authorURL:"https://twitter.com/dominikjriemer",authorImageURL:"/img/riemer.png"},s=void 0,p={permalink:"/blog/2019/09/05/release-0630",source:"@site/blog/2019-09-05-release-0630.md",title:"StreamPipes release 0.63.0",description:"5 minutes to read",date:"2019-09-05T00:00:00.000Z",formattedDate:"September 5, 2019",tags:[],readingTime:3.835,hasTruncateMarker:!0,authors:[{name:"Dominik Riemer",url:"https://twitter.com/dominikjriemer",imageURL:"/img/riemer.png"}],frontMatter:{title:"StreamPipes release 0.63.0",author:"Dominik Riemer",authorURL:"https://twitter.com/dominikjriemer",authorImageURL:"/img/riemer.png"},prevItem:{title:"StreamPipes release 0.64.0",permalink:"/blog/2019/09/19/release-0640"},nextItem:{title:"StreamPipes release 0.62.0",permalink:"/blog/2019/05/23/release-0620"}},d={authorsImageUrls:[void 0]},m=[{value:"Backend &amp; Data Model",id:"backend--data-model",level:2},{value:"UI and Pipeline Editor",id:"ui-and-pipeline-editor",level:2},{value:"Pipeline Elements",id:"pipeline-elements",level:2},{value:"StreamPipes Connect",id:"streampipes-connect",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Other features and improvements",id:"other-features-and-improvements",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:m},c="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("div",{style:{float:"left",paddingRight:"40px"}},"5 minutes to read"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"StreamPipes version 0.63.0 has been released! Following our release plan to alternate between user-faced and backend-oriented releases, this release contains many (more than 70) features and improvements, mainly on the backend side.\nThe new version is available on Docker Hub and can be downloaded using our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampipes-installer"},"installer"),"."),(0,i.kt)("p",null,'For this release, we focused on improving the stability and resilience of StreamPipes, adding many new features "under the hood".'),(0,i.kt)("h2",{id:"backend--data-model"},"Backend & Data Model"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, v0.63.0 brings ",(0,i.kt)("strong",{parentName:"li"},"support for binary messaging formats"),". Prior to 0.63.0, the only messaging format used at runtime was JSON. Now, several other binary formats are supported: Smile and CBOR as binary JSON representations and FST, a fast Java-based serializer."),(0,i.kt)("li",{parentName:"ul"},"Second, we improved ",(0,i.kt)("strong",{parentName:"li"},"resilience of pipelines"),". Now, when StreamPipes is stopped, all running pipelines are stopped beforehand and can be restarted later on, so that you don't end up with orphaned pipelines anymore. ")),(0,i.kt)("p",null,"We also extended the data model and SDK with new features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pipeline elements can now provide their own assets such as documentation. Simply add an icon and a markdown file containing the documentation of the pipeline element and both will be visible directly in the pipeline editor after the installation of the pipeline element."),(0,i.kt)("li",{parentName:"ul"},"We added several new static properties to define required user input: ",(0,i.kt)("strong",{parentName:"li"},"SecretStaticProperties")," can be used to define secret values (e.g., passwords). In addition, ",(0,i.kt)("strong",{parentName:"li"},"StaticPropertyAlternatives")," were introduced to let users select between multiple combinations of static properties (e.g., a time window and a count window along with window settings).")),(0,i.kt)("p",null,"In addition, we migrated all pipeline element container and the backend to Spring Boot applications. The triple store used to store pipeline element descriptions has been extracted to an own microservice. Btw, have you seen the new ",(0,i.kt)("a",{parentName:"p",href:"https://www.github.com/streampipes/streampipes-helm-chart"},"helm chart")," that simplifies running StreamPipes on Kubernetes?"),(0,i.kt)("h2",{id:"ui-and-pipeline-editor"},"UI and Pipeline Editor"),(0,i.kt)("p",null,"We improved the ",(0,i.kt)("strong",{parentName:"p"},"interactive user guide"),", so that it now depends on pipeline elements that are also available in the lite version.\nThree different interactive guides exist: One that teaches you how to create pipelines, another one that illustrates how to connect data with StreamPipes connect and a third one that shows how to create live visualizations using the built-in dashboard."),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"user feedback")," is absolutely important to help us improving StreamPipes, we added a feature that allows users to directly give feedback from the StreamPipes UI. Simply click the feedback icon in the top navigation bar and submit your anonymous feedback to us! "),(0,i.kt)("p",null,"Finally, there are also some functional improvements in the pipeline editor: ",(0,i.kt)("strong",{parentName:"p"},"Pipeline validation")," has improved and gives direct feedback. And, finally, you can now also add multiple dashboards sink to a single pipeline :-)"),(0,i.kt)("p",null,"And a nice feature you can't see but which you'll probably feel: All UI files are now ",(0,i.kt)("strong",{parentName:"p"},"Gzip compressed")," by default, so that StreamPipes will now load much faster. "),(0,i.kt)("h2",{id:"pipeline-elements"},"Pipeline Elements"),(0,i.kt)("p",null,"StreamPipes 0.63.0 includes several new pipeline elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A sink for Apache IoTDB"),(0,i.kt)("li",{parentName:"ul"},"A sink for PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"A processor to convert boolean values"),(0,i.kt)("li",{parentName:"ul"},"A processor to extract timestamps"),(0,i.kt)("li",{parentName:"ul"},"A processor to compute trigonometric functions")),(0,i.kt)("h2",{id:"streampipes-connect"},"StreamPipes Connect"),(0,i.kt)("p",null,"We added more adapters and improved some adapters to StreamPipes Connect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An improved MQTT adapter that can handle authentication"),(0,i.kt)("li",{parentName:"ul"},"A new MySQL adapter"),(0,i.kt)("li",{parentName:"ul"},"An improved OPC-UA adapter"),(0,i.kt)("li",{parentName:"ul"},"A new random data generator that eases testing of pipeline elements")),(0,i.kt)("p",null,"In addition, we completely reworked the Connect UI. The schema view now lets you edit events more conveniently and timestamp fields can be directly marked in the UI."),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"We updated and restructured the user guide, which now consists of four parts: ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-guide-introduction"},"Introduction"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-guide-tour"},"Tour"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-guide-installation"},"Installation")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-guide-first-steps"},"First Steps"),".\nWe also updated all screenshots to reflect the current look and feel of StreamPipes."),(0,i.kt)("p",null,"In addition, the developer guide was further extended (e.g., there is now a new tutorial on creating data sinks). Maven archetypes are now the recommended way to create new pipeline elements."),(0,i.kt)("h2",{id:"other-features-and-improvements"},"Other features and improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An improved installer that lets you choose between two StreamPipes versions for different hardware setups (full or lite, previously named big data and desktop)"),(0,i.kt)("li",{parentName:"ul"},"We updated some core libraries like Apache Flink and Apache Kafka to newer versions."),(0,i.kt)("li",{parentName:"ul"},"Improved support for Firefox and Edge: Besides Chrome, StreamPipes should also behave and look similar in Firefox and Edge browsers.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampipes/releases/tag/0.63.0"},"release notes")," for a complete list of new features and improvements."),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"We are absolutely open to your suggestions for further improvements! Let us know (by ",(0,i.kt)("a",{parentName:"p",href:"mailto:feedback@streampipes.org"},"mail"),", ",(0,i.kt)("a",{parentName:"p",href:"https://slack.streampipes.org"},"slack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.twitter.com/streampipes"},"twitter"),") and we'll consider your feature request in the next release!"))}h.isMDXComponent=!0}}]);