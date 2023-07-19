"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20120],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"org.apache.streampipes.processors.transformation.jvm.csvmetadata",title:"CSV Metadata Enricher",sidebar_label:"CSV Metadata Enricher"},p=void 0,s={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata",id:"version-0.92.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata",title:"CSV Metadata Enricher",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688317119,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.csvmetadata",title:"CSV Metadata Enricher",sidebar_label:"CSV Metadata Enricher"},sidebar:"documentation",previous:{title:"Boolean To State",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state"},next:{title:"Calculate Duration",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.jvm.duration-value"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Structure of CSV file",id:"structure-of-csv-file",level:3},{value:"Example",id:"example",level:2},{value:"Input  event",id:"input--event",level:3},{value:"CSV File",id:"csv-file",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Output event",id:"output-event",level:3}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enrich a datastream with information provided in a CSV file.\nThe data of the CSV file is matched by an id column with a property value of a String in the data stream."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Upload a CSV file with static meta information that will be appended to each event.\nThe file can contain different information for different keys in the stream."),(0,o.kt)("h3",{id:"structure-of-csv-file"},"Structure of CSV file"),(0,o.kt)("p",null,"The first row containes the runtime names for the properties to insert.\nOnce the file is uploaded the user can select which column to use for the matching property and which values should be appended.\nDelimiter: ';'"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Add the location of a production line to the event"),(0,o.kt)("h3",{id:"input--event"},"Input  event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  'line_id': 'line1', \n  'timestamp': 1586378041\n}\n")),(0,o.kt)("h3",{id:"csv-file"},"CSV File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"production_line;location\nline1;germany\nline2;uk\nline3;usa\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The field that is used for the lookup (Example: line_id)"),(0,o.kt)("li",{parentName:"ul"},"The CSV file (Example: Upload the csv file)"),(0,o.kt)("li",{parentName:"ul"},"Field to match (Example: production_line)"),(0,o.kt)("li",{parentName:"ul"},"Fields to append (Example: location)")),(0,o.kt)("h3",{id:"output-event"},"Output event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  'line_id': 'line1', \n  'timestamp': 1586378041, \n  'location': 'germany'\n}\n")))}f.isMDXComponent=!0}}]);