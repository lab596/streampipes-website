"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61439],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},l=void 0,c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is StreamPipes?",source:"@site/../docs/02_introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/next/introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1689755066,formattedLastUpdatedAt:"Jul 19, 2023",sidebarPosition:2,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"documentation",previous:{title:"Installation",permalink:"/docs/next/try-installation"},next:{title:"Overview",permalink:"/docs/next/concepts-overview"}},d={},p=[{value:"What is StreamPipes?",id:"what-is-streampipes",level:2},{value:"Where does StreamPipes help?",id:"where-does-streampipes-help",level:2},{value:"How does StreamPipes technically work in a nutshell?",id:"how-does-streampipes-technically-work-in-a-nutshell",level:2}],u={toc:p},m="wrapper";function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-streampipes"},"What is StreamPipes?"),(0,r.kt)("p",null,"Apache StreamPipes is a self-service Industrial IoT toolbox to enable non-technical users to connect, analyze and\nexplore IoT data streams. The main goal of StreamPipes is to help users bridging the gap between operational\ntechnology (OT) and information technology (IT). This is achieved by providing a set of tools which help to make\nindustrial data accessible for downstream tasks such as data analytics and condition monitoring.\nWhen working with industrial data and especially when building upon an open source stack for such tasks, users are often\nfaced with the management and integration of a variety of different tools for data connectivity, messaging &\nintegration, data enrichment, data storage, visualization and analytics. This results in an increasing operational\ncomplexity and hardly manageable software stacks."),(0,r.kt)("p",null,"Apache StreamPipes addresses this problem: It provides a complete toolbox with a variety of different tools to easily\ngather data from OT systems such as Programmatic Logic Controllers (PLCs), industrial protocols (e.g., OPC-UA or\nModbus), IT protocols (e.g., MQTT) and others. Data is integrated in the form of live data streams. Based on connected\ndata, StreamPipes provides another module called the pipeline editor, which can be used to apply real-time analytics\nalgorithms on connected data stream. To this end, a library of pre-defined algorithms can be used. Out of the box,\nStreamPipes provides more than 100 pipeline elements tailored at manufacturing data analytics. This includes simple\nrule-based algorithms (e.g., flank detection, peak detection, boolean timers), as well as the possibility to integrate\nmore sophisticated ML-based algorithms. Finally, the pipeline editor allows to integrate with third-party systems by\nusing a variety of data sinks (e.g., to forward data to messaging brokers such as Apache Kafka, MQTT or RocketMQ, to\nstore data in databases such as PostgreSQL or Redis or to trigger notifications). Besides pipelines, an included data\nexplorer allows to visually analyze industrial IoT data. For this purpose, a number of visualizations are integrated\nthat allow non-technical users to quickly get first insights. Examples are correlations between several sensor values,\nvalue heatmaps, distributions or time-series visualizations. Further tools include a dashboard used for real-time\nmonitoring, e.g., for visualizing live KPIs at shopfloor level."),(0,r.kt)("p",null,"But StreamPipes is much more than just the user interface and an orchestration system for pipelines: It can be used as a\nwhole developer platform for Industrial IoT application. Apache StreamPipes is made for extensibility - it provides\nseveral extension points, which allow the definition of custom algorithms, additional interfaces to third-party tools\nand proprietary data sources."),(0,r.kt)("p",null,"StreamPipes includes developer support for Java and Python, making it easy to integrate custom-trained machine learning\nmodels into the data processing environment. With the built-in Python support, it is also possible to run online machine\nlearning methods directly on data streams gathered by StreamPipes."),(0,r.kt)("h2",{id:"where-does-streampipes-help"},"Where does StreamPipes help?"),(0,r.kt)("p",null,"Being positioned in the industrial IoT domain, the overall goal of StreamPipes is to help manufacturing companies to\nquickly build up an industrial IoT infrastructure and to analyse IIoT data without the need for manual programming.\nOftentimes, StreamPipes is compared to other tools in this area such as Node-RED for visually wiring of pipelines, which\nis often used together with Grafana for data visualization and InfluxDB for time-series storage. The disadvantage of\nsuch architectures is the system complexity beyond the first prototype, especially when it comes to production\ndeployments. Maintaining and securing multiple software instances is often a hard task requiring for substantial\ndevelopment effort. In addition, implementing single-sign-on and providing a unified user experience is another hurdle.\nThis is where StreamPipes, as a single integrated tool with production-critical features such as access and role\nmanagement, provides many advantages.\nStreamPipes has already a wide user range from the manufacturing domain. It helps users to quickly do the first steps\nrelated to industrial analytics but can also be used for monitoring whole production facilities, analysing data streams\nfrom multiple plants and sensors in real time using the integrated algorithm toolbox. Customization to individual use\ncases is easy due to several extension points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Software development kit for adapters, data processors and sinks: The functionality of StreamPipes can be extending by\nusing the integrated SDK. For instance, it is possible to integrate custom-tailored algorithms for proprietary sensors\nor models into the toolbox. Additional algorithms and data sinks can be installed at runtime."),(0,r.kt)("li",{parentName:"ul"},"Additional user interface plugins: StreamPipes allows to extend the default installation with additional UI views,\nmaking use of a micro frontend approach. For instance, users can extend the system with custom-tailored views for a\nspecific machine or plant. Developers can use a platform API to communicate with the core StreamPipes instance."),(0,r.kt)("li",{parentName:"ul"},"UI customization: To ensure a consistent look and feel, StreamPipes can be customized to the company\u2019s corporate\nidentity.")),(0,r.kt)("h2",{id:"how-does-streampipes-technically-work-in-a-nutshell"},"How does StreamPipes technically work in a nutshell?"),(0,r.kt)("img",{className:"docs-image docs-image-no-shadow",src:"/img/architecture/streampipes-architecture-components.png",alt:"Overview StreamPipes Architecture"}),(0,r.kt)("p",null,"To foster extensibility, Apache StreamPipes is based on a microservice architecture as illustrated above. The main\nservices provided or used by StreamPipes are the a) user interface, b) the core, c) a time-series storage, d) a\npublish/subscribe messaging layer and e) extensions services. Adapters are created over the user interface using an\nintuitive configuration wizard and connect to the underlying source systems. Raw events coming from adapters can be\npre-processed (e.g., measurement unit conversions or datatype conversions). Afterwards, events are sent to the message\nbroker, which is the central backbone to provide IIoT data to internal and external applications. "),(0,r.kt)("p",null,"Besides adapters, extensions microservices can also integrate additional business logic in form of data processors and\ndata sinks. StreamPipes comes with over 100 built-in processors and sinks, covering basic use cases out-of-the-box. The StreamPipes core cares about orchestration of these pipeline elements and communicates with the user\ninterface. In addition, a time-series storage ensures persistence and can be used by any extensions service to write\ndata into the internal storage. The StreamPipes core provides a query interface to access historical data, which is, for\ninstance, used by the data explorer UI component. The user interface itself provides several built-in modules but can\nalso be extended with additional micro frontends."))}h.isMDXComponent=!0}}]);