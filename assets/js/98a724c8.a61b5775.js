"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"extend-setup",title:"Development Setup",sidebar_label:"Development Setup",original_id:"extend-setup"},l=void 0,p={unversionedId:"extend-setup",id:"version-0.70.0/extend-setup",title:"Development Setup",description:"Pipeline elements in StreamPipes are provided as standalone microservices. New pipeline elements can be easily developed using the provided Maven archetypes and can be installed in StreamPipes at runtime.",source:"@site/versioned_docs/version-0.70.0/06_extend-setup.md",sourceDirName:".",slug:"/extend-setup",permalink:"/docs/0.70.0/extend-setup",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688317119,formattedLastUpdatedAt:"Jul 2, 2023",sidebarPosition:6,frontMatter:{id:"extend-setup",title:"Development Setup",sidebar_label:"Development Setup",original_id:"extend-setup"},sidebar:"documentation",previous:{title:"Security",permalink:"/docs/0.70.0/deploy-security"},next:{title:"StreamPipes CLI",permalink:"/docs/0.70.0/extend-cli"}},d={},c=[{value:"IDE &amp; required dev tools",id:"ide--required-dev-tools",level:2},{value:"StreamPipes CLI: Docker-based local StreamPipes instance",id:"streampipes-cli-docker-based-local-streampipes-instance",level:2},{value:"Override the SP_HOST variable",id:"override-the-sp_host-variable",level:2},{value:"Starter projects",id:"starter-projects",level:2},{value:"Maven archetypes",id:"maven-archetypes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c},m="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pipeline elements in StreamPipes are provided as standalone microservices. New pipeline elements can be easily developed using the provided Maven archetypes and can be installed in StreamPipes at runtime."),(0,o.kt)("p",null,"In this section, we describe our recommended minimum setup for locally setting up a development instance of StreamPipes needed to develop, run and test new pipeline elements."),(0,o.kt)("h2",{id:"ide--required-dev-tools"},"IDE & required dev tools"),(0,o.kt)("p",null,"StreamPipes does not have specific requirements on the IDE - so feel free to choose the IDE of your choice.\nThe only requirements in terms of development tools are that you have Java 8 and Maven installed."),(0,o.kt)("h2",{id:"streampipes-cli-docker-based-local-streampipes-instance"},"StreamPipes CLI: Docker-based local StreamPipes instance"),(0,o.kt)("p",null,"In order to quickly test developed pipeline elements without needing to install all services required by StreamPipes, we provide a CLI tool that allows you to selectively start StreamPipes components.\nThe CLI tool allows to switch to several templates (based on docker-compose) depending on the role. "),(0,o.kt)("p",null,"The documentation on the usage of the CLI tool is available ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.70.0/extend-cli"},"here"),"."),(0,o.kt)("h2",{id:"override-the-sp_host-variable"},"Override the SP_HOST variable"),(0,o.kt)("p",null,"By default, the backend/core of StreamPipes registers itself within StreamPipes' service discovery mechanism using an auto-discovered hostname.\nUsually, this will be an IP address from the Docker network, which is not resolvable from outside. Therefore, for local development you need to override the hostname with an IP address which is accessible from your local host where you develop extensions.\nWhen using the CLI, open the CLI folder ",(0,o.kt)("inlineCode",{parentName:"p"},"installer/cli"),", navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy/standalone/backend"),", open the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," file and add the SP_HOST env variable, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'version: "3.4"\nservices:\n  backend:\n    ports:\n      - "8030:8030"\n    environment:\n      - SP_HOST=host.docker.internal\n')),(0,o.kt)("p",null,"Note that host.docker.internal will work as an alias under Docker for Desktop on Windows and Mac, but not on Linux or M1. In this case, provide a resolvable hostname or IP address manually."),(0,o.kt)("h2",{id:"starter-projects"},"Starter projects"),(0,o.kt)("p",null,"Now, once you've started the development instance, you are ready to develop your very first pipeline element.\nInstead of starting from scratch, we recommend using our provided maven archetypes:"),(0,o.kt)("h3",{id:"maven-archetypes"},"Maven archetypes"),(0,o.kt)("p",null,"Create the Maven archetype as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.70.0/extend-archetypes"},"Maven Archetypes")," guide."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"We provide several examples that explain the usage of some concepts in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampipes-examples"},"Github repo"),"."))}v.isMDXComponent=!0}}]);