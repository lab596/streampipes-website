"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return r?a.createElement(g,l(l({ref:t},m),{},{components:r})):a.createElement(g,l({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"extend-sdk-static-properties",title:"SDK Guide: Static Properties",sidebar_label:"SDK: Static Properties"},p=void 0,s={unversionedId:"extend-sdk-static-properties",id:"extend-sdk-static-properties",title:"SDK Guide: Static Properties",description:"Introduction",source:"@site/../docs/06_extend-sdk-static-properties.md",sourceDirName:".",slug:"/extend-sdk-static-properties",permalink:"/docs/next/extend-sdk-static-properties",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1689164473,formattedLastUpdatedAt:"Jul 12, 2023",sidebarPosition:6,frontMatter:{id:"extend-sdk-static-properties",title:"SDK Guide: Static Properties",sidebar_label:"SDK: Static Properties"},sidebar:"documentation",previous:{title:"SDK: Stream Requirements",permalink:"/docs/next/extend-sdk-stream-requirements"},next:{title:"SDK: Output Strategies",permalink:"/docs/next/extend-sdk-output-strategies"}},m={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Reference",id:"reference",level:2},{value:"Mapping property",id:"mapping-property",level:3},{value:"Unary mapping property",id:"unary-mapping-property",level:3},{value:"N-ary mapping property",id:"n-ary-mapping-property",level:3},{value:"Free-Text Parameters",id:"free-text-parameters",level:3},{value:"Text Parameters",id:"text-parameters",level:4},{value:"Number parameters",id:"number-parameters",level:4},{value:"Numbers with value specification",id:"numbers-with-value-specification",level:4},{value:"Free-text parameters linked to an event property",id:"free-text-parameters-linked-to-an-event-property",level:4},{value:"Single-Value Selections",id:"single-value-selections",level:3},{value:"Multi-Value Selections",id:"multi-value-selections",level:3},{value:"Domain Concepts",id:"domain-concepts",level:3},{value:"Collections",id:"collections",level:3},{value:"Runtime-resolvable selections",id:"runtime-resolvable-selections",level:3}],u={toc:c},d="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Static properties represent user-faced parameters that are provided by pipeline developers.\nProcessing elements can specify required static properties, which will render different UI views in the pipeline editor."),(0,i.kt)("p",null,"The following reference describes how static properties can be defined using the SDK."),(0,i.kt)("admonition",{title:"Code on Github",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For all examples, the code can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/streampipes-examples/tree/dev/streampipes-pipeline-elements-examples-processors-jvm/src/main/java/org/apache/streampipes/pe/examples/jvm/staticproperty"},"Github"),".")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"The methods described below to create static properties are available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessingElementBuilder")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSinkBuilder")," classes and are usually used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"declareModel")," method of the controller class."),(0,i.kt)("h3",{id:"mapping-property"},"Mapping property"),(0,i.kt)("p",null,"In StreamPipes, processing elements usually operate on fields of an event stream. For instance, a filter processor operates on a specific field from an input stream (e.g., a field measuring the temperature).\nTypically, pipeline developers should select the exact field where the operations is applied upon by themselves.\nAs this field is not yet known at pipeline element development time (as it is defined by the pipeline developer in the pipeline editor), mapping properties serve to map a stream requirement to a specific field from the actual input event stream."),(0,i.kt)("h3",{id:"unary-mapping-property"},"Unary mapping property"),(0,i.kt)("p",null,"A unary mapping property maps a stream requirement to an actual field of an event stream. Therefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamRequirementsBuilder")," provides the opportunity to directly add a mapping property based along with a property requirement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'.requiredStream(StreamRequirementsBuilder.\n    create()\n    .requiredPropertyWithUnaryMapping(EpRequirements.numberReq(),\n            Labels.from("mp-key", "My Mapping", ""),\n            PropertyScope.NONE)\n    .build())\n')),(0,i.kt)("p",null,"This leads to a selection dialog in the pipeline element customization which provides the user with a selection of all event properties (fields) from the input stream that match the specified property requirement:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-mapping-unary.png",width:"80%",alt:"Text"}),(0,i.kt)("p",null,"At invocation time, the value can be extracted in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onInvocation")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Extract the mapping property value\nString mappingPropertySelector = extractor.mappingPropertyValue("mp-key");\n')),(0,i.kt)("p",null,"Note that this method returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertySelector"),", which can be used by the event model to extract the actual value of this field."),(0,i.kt)("h3",{id:"n-ary-mapping-property"},"N-ary mapping property"),(0,i.kt)("p",null,"N-ary mapping properties work similar to unary mapping properties, but allow the mapping of one requirement to multiple event properties matching the requirement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'.requiredStream(StreamRequirementsBuilder.\n    create()\n    .requiredPropertyWithNaryMapping(EpRequirements.numberReq(),\n            Labels.from("mp-key", "My Mapping", ""),\n            PropertyScope.NONE)\n    .build())\n')),(0,i.kt)("p",null,"This renders the following selection, where users can select more than one matching event property:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-mapping-nary.png",width:"80%",alt:"Text"}),(0,i.kt)("p",null,"The following snippet returns a list containing the property selectors of all event properties that have been selected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Extract the mapping property value\nList<String> mappingPropertySelectors = extractor.mappingPropertyValues("mp-key");\n')),(0,i.kt)("h3",{id:"free-text-parameters"},"Free-Text Parameters"),(0,i.kt)("p",null,"A free-text parameter requires the pipeline developer to enter a single value - which can be a string or another primitive data type.\nThe input of free-text parameters can be restricted to specific value ranges or can be linked to the value set of a connected input data stream."),(0,i.kt)("h4",{id:"text-parameters"},"Text Parameters"),(0,i.kt)("p",null,"A text parameter lets the user enter a string value. The following code line in the controller class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'.requiredTextParameter(Labels.from(SP_KEY, "Example Name", "Example Description"))\n')),(0,i.kt)("p",null,"leads to the following input dialog in the pipeline editor:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-text-parameter.png",width:"80%",alt:"Text"}),(0,i.kt)("p",null,"Users can enter any value that will be converted to a string datatype. To receive the entered value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onInvocation")," method, use the following method from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ParameterExtractor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"String textParameter = extractor.singleValueParameter(SP_KEY, String.class);\n")),(0,i.kt)("h4",{id:"number-parameters"},"Number parameters"),(0,i.kt)("p",null,"A number parameter lets the user enter a number value, either a floating-point number or an integer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// create an integer parameter\n.requiredIntegerParameter(Labels.from(SP_KEY, "Integer Parameter", "Example Description"))\n\n// create a float parameter\n.requiredFloatParameter(Labels.from("float-key", "Float Parameter", "Example Description"))\n\n')),(0,i.kt)("p",null,"leads to the following input dialog in the pipeline editor only accepting integer values:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-number-parameter.png",width:"80%",alt:"Number Parameter"}),(0,i.kt)("p",null,"The pipeline editor performs type validation and ensures that only numbers can be added by the user. To receive the entered value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onInvocation")," method, use the following method from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ParameterExtractor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Extract the integer parameter value\nInteger integerParameter = extractor.singleValueParameter(SP_KEY, Integer.class);\n\n// Extract the float parameter value\nFloat floatParameter = extractor.singleValueParameter("float-key", Float.class);\n\n')),(0,i.kt)("h4",{id:"numbers-with-value-specification"},"Numbers with value specification"),(0,i.kt)("p",null,"You can also specify the value range of a number-based free text parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// create an integer parameter with value range\n.requiredIntegerParameter(Labels.from(SP_KEY, "Integer Parameter", "Example Description"), 0, 100, 1)\n\n')),(0,i.kt)("p",null,"which renders the following input field:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-number-parameter-with-range.png",width:"80%",alt:"Number Parameter"}),(0,i.kt)("p",null,"Receive the entered value in the same way as a standard number parameter."),(0,i.kt)("h4",{id:"free-text-parameters-linked-to-an-event-property"},"Free-text parameters linked to an event property"),(0,i.kt)("h3",{id:"single-value-selections"},"Single-Value Selections"),(0,i.kt)("p",null,"Single-value selections let the user select from a pre-defined list of options.\nA single-value selection requires to select exactly one option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'.requiredSingleValueSelection(Labels.from("id", "Example Name", "Example Description"),\n    Options.from("Option A", "Option B", "Option C"))\n\n')),(0,i.kt)("p",null,"Single-value selections will be rendered as a set of radio buttons in the pipeline editor:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-single-selection.png",width:"80%",alt:"Number Parameter"}),(0,i.kt)("p",null,"To extract the selected value, use the following method from the parameter extractor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Extract the selected value\nString selectedSingleValue = extractor.selectedSingleValue("id", String.class);\n')),(0,i.kt)("admonition",{title:"Declaring options",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Sometimes, you may want to use an internal name that differs from the display name of an option.\nFor that, you can use the method Options.from(Tuple2{'<'}String, String{'>'}) and the extractor method selectedSingleValueInternalName.")),(0,i.kt)("h3",{id:"multi-value-selections"},"Multi-Value Selections"),(0,i.kt)("p",null,"Multi-value selections let the user select from a pre-defined list of options, where multiple or no option might be selected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'.requiredMultiValueSelection(Labels.from("id", "Example Name", "Example Description"),\n    Options.from("Option A", "Option B", "Option C"))\n\n')),(0,i.kt)("p",null,"Multi-value selections will be rendered as a set of checkboxes in the pipeline editor:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-multi-selection.png",width:"80%",alt:"Number Parameter"}),(0,i.kt)("p",null,"To extract the selected value, use the following method from the parameter extractor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Extract the selected value\nList<String> selectedMultiValue = extractor.selectedMultiValues("id", String.class);\n')),(0,i.kt)("h3",{id:"domain-concepts"},"Domain Concepts"),(0,i.kt)("p",null,"(coming soon...)"),(0,i.kt)("h3",{id:"collections"},"Collections"),(0,i.kt)("p",null,"You can also define collections based on other static properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// create a collection parameter\n.requiredParameterAsCollection(Labels.from("collection", "Example Name", "Example " +\n        "Description"), StaticProperties.stringFreeTextProperty(Labels\n        .from("text-property","Text","")))\n')),(0,i.kt)("p",null,"While the items of the collection can be provided in the same way as the underlying static property, the UI provides buttons to add and remove items to the collections."),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-collection.png",width:"80%",alt:"Number Parameter"}),(0,i.kt)("p",null,"To extract the selected values from the collection, use the following method from the parameter extractor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Extract the text parameter value\nList<String> textParameters = extractor.singleValueParameterFromCollection("collection", String.class);\n')),(0,i.kt)("h3",{id:"runtime-resolvable-selections"},"Runtime-resolvable selections"),(0,i.kt)("p",null,"In some cases, the options of selection parameters are not static, but depend on other values or might change at runtime. In this case, you can use runtime-resolvable selections."),(0,i.kt)("p",null,"First, let your controller class implement ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvesContainerProvidedOptions"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class RuntimeResolvableSingleValue extends\n     StandaloneEventProcessingDeclarer<DummyParameters> implements ResolvesContainerProvidedOptions { ... }\n")),(0,i.kt)("p",null,"Next, define the parameter in the ",(0,i.kt)("inlineCode",{parentName:"p"},"declareModel")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// create a single value selection parameter that is resolved at runtime\n    .requiredSingleValueSelectionFromContainer(Labels.from("id", "Example Name", "Example " +\n            "Description"))\n')),(0,i.kt)("p",null,"Finally, implement the method ",(0,i.kt)("inlineCode",{parentName:"p"},"resolveOptions"),", which will be called at runtime once the processor is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'  @Override\n  public List<RuntimeOptions> resolveOptions(String requestId, EventProperty linkedEventProperty) {\n    return Arrays.asList(new RuntimeOptions("I was defined at runtime", ""));\n  }\n')),(0,i.kt)("p",null,"The UI will render a single-value parameter based on the options provided at runtime:"),(0,i.kt)("img",{src:"/img/dev-guide-static-properties/sp-single-selection-remote.png",width:"80%",alt:"Number Parameter"}),(0,i.kt)("p",null,"The parameter extraction does not differ from the extraction of static single-value parameters."),(0,i.kt)("admonition",{title:"Multi-value selections",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Although this example shows the usage of runtime-resolvable selections using single value selections, the same also works for multi-value selections!")))}g.isMDXComponent=!0}}]);