"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27445:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"extend-tutorial-data-sources",title:"Tutorial: Data Sources",sidebar_label:"Tutorial: Data Sources",original_id:"extend-tutorial-data-sources"},l=void 0,p={unversionedId:"extend-tutorial-data-sources",id:"version-0.70.0/extend-tutorial-data-sources",title:"Tutorial: Data Sources",description:"In this tutorial, we will add a new data source consisting of a single data stream. The source will be provided as a standalone component (i.e., the description will be accessible through an integrated web server).",source:"@site/versioned_docs/version-0.70.0/06_extend-tutorial-data-sources.md",sourceDirName:".",slug:"/extend-tutorial-data-sources",permalink:"/docs/0.70.0/extend-tutorial-data-sources",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",sidebarPosition:6,frontMatter:{id:"extend-tutorial-data-sources",title:"Tutorial: Data Sources",sidebar_label:"Tutorial: Data Sources",original_id:"extend-tutorial-data-sources"},sidebar:"documentation",previous:{title:"Your first data processor",permalink:"/docs/0.70.0/extend-first-processor"},next:{title:"Tutorial: Data Processors",permalink:"/docs/0.70.0/extend-tutorial-data-processors"}},c={},d=[{value:"Objective",id:"objective",level:2},{value:"Project setup",id:"project-setup",level:2},{value:"Adding a data stream description",id:"adding-a-data-stream-description",level:2},{value:"Creating some dummy data",id:"creating-some-dummy-data",level:2},{value:"Registering the data stream",id:"registering-the-data-stream",level:2},{value:"Starting the service",id:"starting-the-service",level:2},{value:"Read more",id:"read-more",level:2}],u={toc:d},m="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will add a new data source consisting of a single data stream. The source will be provided as a standalone component (i.e., the description will be accessible through an integrated web server)."),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"We are going to create a new data stream that is produced by a GPS sensor installed in a delivery vehicle.\nThe sensor produces a continuous stream of events that contain the current timestamp, the current lat/lng position of the vehicle and the plate number of the vehicle.\nEvents are published in a JSON format as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp" : 145838399,\n  "latitude" : 37.04,\n  "longitude" : 17.04,\n  "plateNumber" : "KA-AB 123"\n}\n')),(0,o.kt)("p",null,"These events are published to a Kafka broker using the topic ",(0,o.kt)("inlineCode",{parentName:"p"},"org.streampipes.tutorial.vehicle"),"."),(0,o.kt)("p",null,"In the following section, we show how to describe this stream in a form that allows you to import and use it in StreamPipes."),(0,o.kt)("h2",{id:"project-setup"},"Project setup"),(0,o.kt)("p",null,"Instead of creating a new project from scratch, we recommend to use the Maven archetype to create a new project skeleton (streampipes-archetype-extensions-jvm).\nEnter the following command in a command line of your choice (Apache Maven needs to be installed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn archetype:generate \\\n-DarchetypeGroupId=org.apache.streampipes -DarchetypeArtifactId=streampipes-archetype-extensions-jvm \\\n-DarchetypeVersion=0.69.0 -DgroupId=my.groupId \\\n-DartifactId=my-source -DclassNamePrefix=MySource -DpackageName=mypackagename\n")),(0,o.kt)("p",null,"You will see a project structure similar to the structure shown in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.70.0/extend-archetypes"},"archetypes")," section."),(0,o.kt)("div",{class:"admonition tip"},(0,o.kt)("div",{class:"admonition-title"},"Tip"),(0,o.kt)("p",null,"Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.")),(0,o.kt)("h2",{id:"adding-a-data-stream-description"},"Adding a data stream description"),(0,o.kt)("p",null,"Now we will add a new data stream definition.\nFirst, create a new class ",(0,o.kt)("inlineCode",{parentName:"p"},"MyVehicleStream")," which should look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npackage org.apache.streampipes.pe.example;\n\nimport org.apache.streampipes.model.SpDataStream;\nimport org.apache.streampipes.sources.AbstractAdapterIncludedStream;\n\npublic class MyVehicleStream extends AbstractAdapterIncludedStream {\n\n  @Override\n  public SpDataStream declareModel() {\n    return null;\n  }\n\n  @Override\n  public void executeStream() {\n\n  }\n}\n")),(0,o.kt)("p",null,"This class extends the class ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractAdapterIncludedStream"),", which indicates that this source continuously produces data (configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeStream()")," method.\nIn contrast, the class ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractAlreadyExistingStream")," indicates that we only want to describe an already existing stream (e.g., a stream that already sends data to an existing Kafka broker)."),(0,o.kt)("p",null,"Next, we will add the definition of the data stream. Add the following code inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"declareModel")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'return DataStreamBuilder.create("org.streampipes.tutorial.vehicle.position", "Vehicle Position", "An event stream " +\n          "that produces current vehicle positions")\n')),(0,o.kt)("p",null,"This line creates a new instance of the SDK's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataStreamBuilder")," by providing three basic parameters:\nThe first parameter must be a unique identifier of your data stream.\nThe second and third parameters indicate a label and a description of your stream.\nThese values will later be used in the StreamPipes UI to display stream details in a human-readable manner."),(0,o.kt)("p",null,"Next, we will add the properties as stated above to the stream definition by adding the following lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'.property(EpProperties.timestampProperty("timestamp"))\n.property(EpProperties.stringEp(Labels.from("plate-number", "Plate Number", "Denotes the plate number of the vehicle"), "plateNumber", "http://my.company/plateNumber"))\n.property(EpProperties.doubleEp(Labels.from("latitude", "Latitude", "Denotes the latitude value of the vehicle\'s position"), "latitude", Geo.lat))\n.property(EpProperties.doubleEp(Labels.from("longitude", "Longitude", "Denotes the longitude value of the vehicle\'s position"), "longitude", Geo.lng))\n')),(0,o.kt)("p",null,"These four ",(0,o.kt)("em",{parentName:"p"},"event properties")," compose our ",(0,o.kt)("em",{parentName:"p"},"event schema"),". An event property must, at least, provide the following attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Runtime Name"),". The runtime name indicates the key of the property at runtime, e.g., if our JSON message contains a structure such as ",(0,o.kt)("inlineCode",{parentName:"li"},'{"plateNumber" : "KA-F 123"}'),", the runtime name must be ",(0,o.kt)("inlineCode",{parentName:"li"},"plateNumber"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Runtime Type"),". An event property must have a primitive type (we will later see how to model more complex properties such as lists and nested properties).\nThe type must be an instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"XMLSchema")," primitives, however, the SDK provides convenience methods to provide the property type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Domain Property"),". The domain property indicates the semantics of the event property. For instance, the ",(0,o.kt)("inlineCode",{parentName:"li"},"latitude")," property is linked to the ",(0,o.kt)("inlineCode",{parentName:"li"},"http://www.w3.org/2003/01/geo/wgs84_pos#lat")," property of the WGS84 vocabulary.\nThe domain property should be an URI as part of an existing or domain-specific vocabulary. The SDK provides convenience methods for popuplar vocabularies (e.g., Schema.org, Dolce or WGS84).")),(0,o.kt)("p",null,"In order to complete the minimum required specification of an event stream, we need to provide information on the transport format and protocol of the data stream at runtime."),(0,o.kt)("p",null,"This can be achieved by extending the builder with the respective properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'.format(Formats.jsonFormat())\n.protocol(Protocols.kafka("localhost", 9094, "TOPIC_SHOULD_BE_CHANGED"))\n.build();\n')),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"org.streampipes.tutorial.vehicle")," as your new topic by replacing the term `",(0,o.kt)("inlineCode",{parentName:"p"},"TOPIC_SHOULD_BE_CHANGED"),"."),(0,o.kt)("p",null,"In this example, we defined that the data stream consists of events in a JSON format and that Kafka is used as a message broker to transmit events.\nThe last build() method call triggers the construction of the data stream definition."),(0,o.kt)("p",null,"That's it! In the next section, we will connect the data stream to a source and inspect the generated RDF description."),(0,o.kt)("h2",{id:"creating-some-dummy-data"},"Creating some dummy data"),(0,o.kt)("p",null,"Let's assume our stream should produce some random values that are sent to StreamPipes. We'll add a very simple data simulator to the ",(0,o.kt)("inlineCode",{parentName:"p"},"executeStream")," method as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n  public void executeStream() {\n\n    SpKafkaProducer producer = new SpKafkaProducer("localhost:9094", "my-topic", Collections.emptyList());\n    Random random = new Random();\n    Runnable runnable = () -> {\n      for (;;) {\n        JsonObject jsonObject = new JsonObject();\n        jsonObject.addProperty("timestamp", System.currentTimeMillis());\n        jsonObject.addProperty("plateNumber", "KA-FZ 1");\n        jsonObject.addProperty("latitude", random.nextDouble());\n        jsonObject.addProperty("longitude", random.nextDouble());\n    \n        producer.publish(jsonObject.toString());\n    \n        try {\n        TimeUnit.SECONDS.sleep(1);\n        } catch (InterruptedException e) {\n        e.printStackTrace();\n        }\n  \n      }\n    };\n\n    new Thread(runnable).start();\n  }\n')),(0,o.kt)("p",null,"Change the topic and the URL of your Kafka broker (as stated in the controller)."),(0,o.kt)("h2",{id:"registering-the-data-stream"},"Registering the data stream"),(0,o.kt)("p",null,"You need to register the stream in the service definition. Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Init")," class and register the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyVehicleStream"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n  @Override\n  public SpServiceDefinition provideServiceDefinition() {\n    return SpServiceDefinitionBuilder.create("org.apache.streampipes",\n                    "human-readable service name",\n                    "human-readable service description", 8090)\n            .registerPipelineElement(new ExampleDataProcessor())\n            .registerPipelineElement(new ExampleDataSink())\n            .registerPipelineElement(new MyVehicleStream())\n            .registerMessagingFormats(\n                    new JsonDataFormatFactory(),\n                    new CborDataFormatFactory(),\n                    new SmileDataFormatFactory(),\n                    new FstDataFormatFactory())\n            .registerMessagingProtocols(\n                    new SpKafkaProtocolFactory(),\n                    new SpJmsProtocolFactory(),\n                    new SpMqttProtocolFactory())\n            .build();\n  }\n\n')),(0,o.kt)("p",null,"You can remove the other two example classes if you want."),(0,o.kt)("h2",{id:"starting-the-service"},"Starting the service"),(0,o.kt)("div",{class:"admonition tip"},(0,o.kt)("div",{class:"admonition-title"},"Tip"),(0,o.kt)("p",null,"Once you start the service, it will register in StreamPipes with the hostname. The hostname will be auto-discovered and should work out-of-the-box. In some cases, the detected hostname is not resolvable from within a container (where the core is running). In this case, provide a SP_HOST environment variable to override the auto-discovery.")),(0,o.kt)("p",null,"Now we are ready to start our first container!"),(0,o.kt)("p",null,"Execute the main method in the class ",(0,o.kt)("inlineCode",{parentName:"p"},"Init"),", open a web browser and navigate to http://localhost:8090, or change the port according to the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SP_PORT")," variable in the env file."),(0,o.kt)("p",null,"Configure your IDE to provide an environment variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"SP_DEBUG")," with value ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when starting the project."),(0,o.kt)("p",null,"You should see something as follows:"),(0,o.kt)("img",{src:"/img/tutorial-sources/pe-overview.PNG",alt:"Pipeline Element Container Overview"}),(0,o.kt)("p",null,"Click on the link of the data source to see the generated description of the pipeline element."),(0,o.kt)("img",{src:"/img/tutorial-sources/pe-rdf.PNG",alt:"Pipeline Element description"}),(0,o.kt)("p",null,"The container automatically registers itself in StreamPipes."),(0,o.kt)("p",null,"To install the just created element, open the StreamPipes UI and install the source over the ",(0,o.kt)("inlineCode",{parentName:"p"},"Install Pipeline Elements")," section."),(0,o.kt)("h2",{id:"read-more"},"Read more"),(0,o.kt)("p",null,"Congratulations! You've just created your first pipeline element for StreamPipes.\nThere are many more things to explore and data sources can be defined in much more detail."))}h.isMDXComponent=!0}}]);