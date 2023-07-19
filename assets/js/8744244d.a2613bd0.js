"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"extend-tutorial-data-sinks",title:"Tutorial: Data Sinks",sidebar_label:"Tutorial: Data Sinks",original_id:"extend-tutorial-data-sinks"},p=void 0,l={unversionedId:"extend-tutorial-data-sinks",id:"version-0.90.0/extend-tutorial-data-sinks",title:"Tutorial: Data Sinks",description:"In this tutorial, we will add a new data sink using the standalone wrapper.",source:"@site/versioned_docs/version-0.90.0/06_extend-tutorial-data-sinks.md",sourceDirName:".",slug:"/extend-tutorial-data-sinks",permalink:"/docs/0.90.0/extend-tutorial-data-sinks",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688317119,formattedLastUpdatedAt:"Jul 2, 2023",sidebarPosition:6,frontMatter:{id:"extend-tutorial-data-sinks",title:"Tutorial: Data Sinks",sidebar_label:"Tutorial: Data Sinks",original_id:"extend-tutorial-data-sinks"},sidebar:"documentation",previous:{title:"Tutorial: Data Processors",permalink:"/docs/0.90.0/extend-tutorial-data-processors"},next:{title:"SDK: Functions",permalink:"/docs/0.90.0/extend-sdk-functions"}},d={},c=[{value:"Objective",id:"objective",level:2},{value:"Project setup",id:"project-setup",level:2},{value:"Adding data sink requirements",id:"adding-data-sink-requirements",level:2},{value:"Pipeline element invocation",id:"pipeline-element-invocation",level:2},{value:"Adding an implementation",id:"adding-an-implementation",level:2},{value:"Preparing the service",id:"preparing-the-service",level:2},{value:"Starting the service",id:"starting-the-service",level:2},{value:"Read more",id:"read-more",level:2}],m={toc:c},u="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we will add a new data sink using the standalone wrapper."),(0,r.kt)("p",null,"From an architectural point of view, we will create a self-contained service that includes the description of the data sink and a corresponding implementation."),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"We are going to create a new data sink that calls an external HTTP endpoint to forward data to an external service."),(0,r.kt)("p",null,"For each incoming event, an external service is invoked using an HTTP POST request. In this example, we'll call an endpoint provided by ",(0,r.kt)("a",{parentName:"p",href:"https://requestbin.com/"},"RequestBin"),".\nTo setup your own endpoint, go to ",(0,r.kt)("a",{parentName:"p",href:"https://requestbin.com/"},"https://requestbin.com/"),' and click "Create a request bin". Copy the URL of the newly created endpoint.'),(0,r.kt)("h2",{id:"project-setup"},"Project setup"),(0,r.kt)("p",null,"Instead of creating a new project from scratch, we recommend to use the Maven archetype to create a new project skeleton (streampipes-archetype-extensions-jvm).\nEnter the following command in a command line of your choice (Apache Maven needs to be installed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mvn archetype:generate -DarchetypeGroupId=org.apache.streampipes \\\n-DarchetypeArtifactId=streampipes-archetype-extensions-jvm -DarchetypeVersion=0.70.0 \\\n-DgroupId=org.streampipes.tutorial -DartifactId=sink-tutorial -DclassNamePrefix=Rest -DpackageName=mypackage\n")),(0,r.kt)("p",null,"You will see a project structure similar to the structure shown in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.90.0/extend-archetypes"},"archetypes")," section."),(0,r.kt)("div",{class:"admonition tip"},(0,r.kt)("div",{class:"admonition-title"},"Tip"),(0,r.kt)("p",null,"Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.")),(0,r.kt)("p",null,"Now you're ready to create your first data sink for StreamPipes!"),(0,r.kt)("h2",{id:"adding-data-sink-requirements"},"Adding data sink requirements"),(0,r.kt)("p",null,"First, we will add a new stream requirement.\nCreate a class ",(0,r.kt)("inlineCode",{parentName:"p"},"RestSink")," which should look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.streampipes.pe.example;\n\nimport org.apache.streampipes.commons.exceptions.SpRuntimeException;\nimport org.apache.streampipes.model.DataSinkType;\nimport org.apache.streampipes.model.graph.DataSinkDescription;\nimport org.apache.streampipes.model.runtime.Event;\nimport org.apache.streampipes.model.schema.PropertyScope;\nimport org.apache.streampipes.sdk.builder.DataSinkBuilder;\nimport org.apache.streampipes.sdk.builder.StreamRequirementsBuilder;\nimport org.apache.streampipes.sdk.helpers.EpRequirements;\nimport org.apache.streampipes.sdk.helpers.Labels;\nimport org.apache.streampipes.sdk.helpers.Locales;\nimport org.apache.streampipes.sdk.utils.Assets;\nimport org.apache.streampipes.wrapper.context.EventSinkRuntimeContext;\nimport org.apache.streampipes.wrapper.standalone.SinkParams;\nimport org.apache.streampipes.wrapper.standalone.StreamPipesDataSink;\n\npublic class RestSink extends StreamPipesDataSink {\n\n  @Override\n  public DataSinkDescription declareModel() {\n    return DataSinkBuilder.create("org.apache.streampipes.tutorial.pe.sink.rest")\n        .category(DataSinkType.NOTIFICATION)\n        .withAssets(Assets.DOCUMENTATION, Assets.ICON)\n        .withLocales(Locales.EN)\n        .requiredStream(StreamRequirementsBuilder\n                .create()\n                .requiredPropertyWithNaryMapping(EpRequirements.anyProperty(), Labels.withId(\n                        "fields-to-send"), PropertyScope.NONE)\n                .build())\n        .build();\n  }\n\n  @Override\n  public void onInvocation(SinkParams parameters, EventSinkRuntimeContext runtimeContext) throws SpRuntimeException {\n\n  }\n\n  @Override\n  public void onEvent(Event event) throws SpRuntimeException {\n\n  }\n\n  @Override\n  public void onDetach() throws SpRuntimeException {\n\n  }\n}\n\n\n')),(0,r.kt)("p",null,"In this class, we need to implement three methods: The ",(0,r.kt)("inlineCode",{parentName:"p"},"declareModel")," method is used to define abstract stream requirements such as event properties that must be present in any input stream that is later connected to the element using the StreamPipes UI.\nThe second method, ",(0,r.kt)("inlineCode",{parentName:"p"},"onInvocation")," is called once a pipeline using this sink is started. The third method, ",(0,r.kt)("inlineCode",{parentName:"p"},"onEvent"),", is called for every incoming event."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"declareModel")," method describes the properties of our data sink:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"category")," defines a category for this sink."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withAssets")," denotes that we will provide an external documentation file and an icon, which can be found in the ",(0,r.kt)("inlineCode",{parentName:"li"},"resources")," folder"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withLocales")," defines that we will provide an external language file, also available in the ",(0,r.kt)("inlineCode",{parentName:"li"},"resources")," folder"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requiredStream")," defines requirements any input stream connected to this sink must provide. In this case, we do not have any specific requirements, we just forward all incoming events to the REST sink. However, we want to let the user display a list of available fields from the connected input event, where users can select a subset. This is defined by defining a Mapping from the empty requirement. This will later on render a selection dialog in the pipeline editor.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onInvocation")," method is called when a pipeline containing the sink is started. Once a pipeline is started, we would like to extract user-defined parameters.\nIn this example, we simply extract the fields selected by users that should be forwarded to the REST sink. Finally, we return a new configured event sink containing the parameters."),(0,r.kt)("h2",{id:"pipeline-element-invocation"},"Pipeline element invocation"),(0,r.kt)("p",null,"Once users start a pipeline that uses our geofencing component, the ",(0,r.kt)("em",{parentName:"p"},"onInvocation")," method in our class is called. The class ",(0,r.kt)("inlineCode",{parentName:"p"},"SinkParams")," includes a graph that contains information on the configuration parameters a users has selected in the pipeline editor and information on the acutal streams that are connected to the pipeline element."),(0,r.kt)("h2",{id:"adding-an-implementation"},"Adding an implementation"),(0,r.kt)("p",null,"Now we'll add a proper implementation (i.e., the Rest call executed for every incoming event) to the following methods:"),(0,r.kt)("p",null,"Our final class should look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.streampipes.pe.example;\n\nimport com.google.common.base.Charsets;\nimport org.apache.http.client.fluent.Request;\nimport org.apache.http.entity.StringEntity;\nimport org.apache.streampipes.commons.exceptions.SpRuntimeException;\nimport org.apache.streampipes.dataformat.SpDataFormatDefinition;\nimport org.apache.streampipes.dataformat.json.JsonDataFormatDefinition;\nimport org.apache.streampipes.model.DataSinkType;\nimport org.apache.streampipes.model.graph.DataSinkDescription;\nimport org.apache.streampipes.model.runtime.Event;\nimport org.apache.streampipes.model.schema.PropertyScope;\nimport org.apache.streampipes.sdk.builder.DataSinkBuilder;\nimport org.apache.streampipes.sdk.builder.StreamRequirementsBuilder;\nimport org.apache.streampipes.sdk.helpers.EpRequirements;\nimport org.apache.streampipes.sdk.helpers.Labels;\nimport org.apache.streampipes.sdk.helpers.Locales;\nimport org.apache.streampipes.sdk.utils.Assets;\nimport org.apache.streampipes.wrapper.context.EventSinkRuntimeContext;\nimport org.apache.streampipes.wrapper.standalone.SinkParams;\nimport org.apache.streampipes.wrapper.standalone.StreamPipesDataSink;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport java.io.IOException;\nimport java.util.List;\nimport java.util.Map;\n\npublic class RestSink extends StreamPipesDataSink {\n\n  private static final Logger LOG = LoggerFactory.getLogger(RestSink.class);\n\n  private static final String REST_ENDPOINT_URI = YOUR_REQUEST_BIN_URL;\n  private List<String> fieldsToSend;\n  private SpDataFormatDefinition dataFormatDefinition;\n\n  @Override\n  public DataSinkDescription declareModel() {\n    ...\n  }\n\n  @Override\n  public void onInvocation(SinkParams parameters, EventSinkRuntimeContext runtimeContext) throws SpRuntimeException {\n    this.dataFormatDefinition = new JsonDataFormatDefinition();\n    this.fieldsToSend = parameters.extractor().mappingPropertyValues("fields-to-send");\n\n  }\n\n  @Override\n  public void onEvent(Event event) throws SpRuntimeException {\n    Map<String, Object> outEventMap = event.getSubset(fieldsToSend).getRaw();\n    try {\n      String json = new String(dataFormatDefinition.fromMap(outEventMap));\n      Request.Post(REST_ENDPOINT_URI).body(new StringEntity(json, Charsets.UTF_8)).execute();\n    } catch (SpRuntimeException e) {\n      LOG.error("Could not parse incoming event");\n    } catch (IOException e) {\n      LOG.error("Could not reach endpoint at {}", REST_ENDPOINT_URI);\n    }\n  }\n\n  @Override\n  public void onDetach() throws SpRuntimeException {\n\n  }\n}\n\n')),(0,r.kt)("p",null,"The only class variable you need to change right now is the REST_ENDPOINT_URL. Change this url to the URL provided by your request bin.\nIn the ",(0,r.kt)("inlineCode",{parentName:"p"},"\xf2nEvent")," method, we use a helper method to get a subset of the incoming event.\nFinally, we convert the resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," to a JSON string and call the endpoint."),(0,r.kt)("h2",{id:"preparing-the-service"},"Preparing the service"),(0,r.kt)("p",null,"The final step is to register the sink as a pipeline element."),(0,r.kt)("p",null,"Go to the class ",(0,r.kt)("inlineCode",{parentName:"p"},"Init")," and register the sink:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},".registerPipelineElement(new RestSink())\n")),(0,r.kt)("h2",{id:"starting-the-service"},"Starting the service"),(0,r.kt)("div",{class:"admonition tip"},(0,r.kt)("div",{class:"admonition-title"},"Tip"),(0,r.kt)("p",null,"Once you start the service, it will register in StreamPipes with the hostname. The hostname will be auto-discovered and should work out-of-the-box. In some cases, the detected hostname is not resolvable from within a container (where the core is running). In this case, provide a SP_HOST environment variable to override the auto-discovery.")),(0,r.kt)("div",{class:"admonition tip"},(0,r.kt)("div",{class:"admonition-title"},"Tip"),(0,r.kt)("p",null," The default port of all pipeline element services as defined in the `create` method is port 8090. If you'd like to run multiple services at the same time on your development machine, change the port here. As an alternative, you can also provide an env variable `SP_PORT` which overrides the port settings. This is useful to use different configs for dev and prod environments.")),(0,r.kt)("p",null,"Now we are ready to start our service!"),(0,r.kt)("p",null,"Configure your IDE to provide an environment variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"SP_DEBUG")," with value ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when starting the project."),(0,r.kt)("p",null,"Execute the main method in the class ",(0,r.kt)("inlineCode",{parentName:"p"},"Init")," we've just created. The service automatically registers itself in StreamPipes."),(0,r.kt)("p",null,"To install the created element, open the StreamPipes UI and follow the manual provided in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.90.0/use-install-pipeline-elements"},"user guide"),"."),(0,r.kt)("h2",{id:"read-more"},"Read more"),(0,r.kt)("p",null,"Congratulations! You've just created your first data sink for StreamPipes.\nThere are many more things to explore and data sinks can be defined in much more detail using multiple wrappers.\nFollow our ",(0,r.kt)("a",{parentName:"p",href:"../dev-guide-sdk-guide-sinks"},"SDK guide")," to see what's possible!"))}h.isMDXComponent=!0}}]);