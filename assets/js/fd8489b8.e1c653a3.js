"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14294],{3905:(e,i,t)=>{t.d(i,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var i=n.useContext(p),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},c=function(e){var i=s(e.components);return n.createElement(p.Provider,{value:i},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},g=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return t?n.createElement(m,r(r({ref:i},c),{},{components:t})):n.createElement(m,r({ref:i},c))}));function m(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=g;var o={};for(var p in i)hasOwnProperty.call(i,p)&&(o[p]=i[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},70301:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],o={id:"use-managing-pipelines",title:"Managing Pipelines",sidebar_label:"Managing Pipelines",original_id:"use-managing-pipelines"},p=void 0,s={unversionedId:"use-managing-pipelines",id:"version-0.91.0/use-managing-pipelines",title:"Managing Pipelines",description:"The pipeline view lists all created pipelines and provides several views and actions to manage the lifecycle of pipelines.",source:"@site/versioned_docs/version-0.91.0/03_use-managing-pipelines.md",sourceDirName:".",slug:"/use-managing-pipelines",permalink:"/docs/0.91.0/use-managing-pipelines",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688367241,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:3,frontMatter:{id:"use-managing-pipelines",title:"Managing Pipelines",sidebar_label:"Managing Pipelines",original_id:"use-managing-pipelines"},sidebar:"documentation",previous:{title:"Pipeline Editor",permalink:"/docs/0.91.0/use-pipeline-editor"},next:{title:"Live Dashboard",permalink:"/docs/0.91.0/use-dashboard"}},c={},d=[{value:"Pipeline Actions",id:"pipeline-actions",level:2},{value:"Organizing Pipelines into Categories",id:"organizing-pipelines-into-categories",level:2},{value:"Pipeline Details",id:"pipeline-details",level:2},{value:"Overview",id:"overview",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Errors",id:"errors",level:3},{value:"QuickEdit",id:"quickedit",level:3}],u={toc:d},g="wrapper";function m(e){var i=e.components,t=(0,a.Z)(e,r);return(0,l.kt)(g,(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The pipeline view lists all created pipelines and provides several views and actions to manage the lifecycle of pipelines."),(0,l.kt)("p",null,"In the entry screen, an overview of all created pipelines is shown:"),(0,l.kt)("img",{className:"docs-image",src:"/img/03_use-managing-pipelines/01_pipeline-overview.png",alt:"StreamPipes Pipeline Overview"}),(0,l.kt)("h2",{id:"pipeline-actions"},"Pipeline Actions"),(0,l.kt)("p",null,"Within the pipeline overview, for each pipeline several actions are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Start/Stop pipeline")," Starts or stops the selected pipeline. Once clicked, StreamPipes will trigger the selected action for all pipeline elements and open a success or error dialog as illustrated below."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Show details")," opens the pipeline detail view (see below).  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Modify pipeline")," opens the pipeline in the pipeline editor, where the pipeline can be modified. Note that this button is only visible if the pipeline is not running."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Delete pipeline")," opens a confirm dialog, which subsequently deletes the selected pipeline.")),(0,l.kt)("p",null,"The screenshot below shows the status of a pipeline after it has been successfully started. By clicking the ",(0,l.kt)("em",{parentName:"p"},"Show details")," button, more information on the status of each corresponding pipeline element microservice becomes available. In case of failures, the failure reason will be shown for each pipeline element that has failed to start."),(0,l.kt)("img",{className:"docs-image",src:"/img/03_use-managing-pipelines/02_pipeline-start-dialog.png",alt:"StreamPipes Pipeline Start Dialog"}),(0,l.kt)("h2",{id:"organizing-pipelines-into-categories"},"Organizing Pipelines into Categories"),(0,l.kt)("p",null,"Pipelines can be organized into categories, which is a useful feature in case a larger amount of pipelines is created.\nAll categories will be shown as separate tabs in the pipeline overview. The same pipeline can be assigned to multiple categories."),(0,l.kt)("p",null,"To add a new category or to add a new pipeline to an existing category, click the ",(0,l.kt)("em",{parentName:"p"},"Manage Categories")," button and configured the category and assigned pipelines in the dialog."),(0,l.kt)("h2",{id:"pipeline-details"},"Pipeline Details"),(0,l.kt)("p",null,"The pipeline details view can be opened by clicking the ",(0,l.kt)("em",{parentName:"p"},"Show details")," button in the pipeline overview panel."),(0,l.kt)("img",{className:"docs-image",src:"/img/03_use-managing-pipelines/03_pipeline-details.png",alt:"StreamPipes Pipeline Details"}),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The overview section displays the graphical structure of the pipeline and provides some statistics about recent pipeline actions. Additionally, pipelines can be directly started, stopped, modified and deletes within this view."),(0,l.kt)("h3",{id:"monitoring"},"Monitoring"),(0,l.kt)("p",null,"Monitoring features will become available in version 0.68.0."),(0,l.kt)("h3",{id:"errors"},"Errors"),(0,l.kt)("p",null,"Monitoring of failures and logs will become available in version 0.69.0."),(0,l.kt)("h3",{id:"quickedit"},"QuickEdit"),(0,l.kt)("p",null,"The quick edit feature (only available for pipelines that are not running) is a quick and convenient way to modify some pipeline element configurations without opening the pipeline in the pipeline editor.\nTo use the quick edit feature, switch to the ",(0,l.kt)("em",{parentName:"p"},"QuickEdit")," tab, which will display the selected pipeline."),(0,l.kt)("p",null,"By clicking a pipeline element from the preview canvas, available configuration options of the selected pipeline element can be modified. Note that only modifications that do not affect the pipeline structure (e.g., different output streams) can be changed."),(0,l.kt)("img",{className:"docs-image",src:"/img/03_use-managing-pipelines/04_pipeline-quick-edit.png",alt:"StreamPipes Pipeline Quick Edit"}),(0,l.kt)("p",null,"After a configuration value was changed, make sure to click the ",(0,l.kt)("em",{parentName:"p"},"Update Pipeline")," button to save the changes."))}m.isMDXComponent=!0}}]);