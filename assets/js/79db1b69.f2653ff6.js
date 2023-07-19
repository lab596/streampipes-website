"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59082],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"extend-cli",title:"StreamPipes CLI",sidebar_label:"StreamPipes CLI",original_id:"extend-cli"},p=void 0,s={unversionedId:"extend-cli",id:"version-0.90.0/extend-cli",title:"StreamPipes CLI",description:"The StreamPipes command-line interface (CLI) is focused on developers in order to provide an easy entrypoint to set up a suitable dev environment, either planning on developing",source:"@site/versioned_docs/version-0.90.0/06_extend-cli.md",sourceDirName:".",slug:"/extend-cli",permalink:"/docs/0.90.0/extend-cli",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688317119,formattedLastUpdatedAt:"Jul 2, 2023",sidebarPosition:6,frontMatter:{id:"extend-cli",title:"StreamPipes CLI",sidebar_label:"StreamPipes CLI",original_id:"extend-cli"},sidebar:"documentation",previous:{title:"Development Setup",permalink:"/docs/0.90.0/extend-setup"},next:{title:"Maven Archetypes",permalink:"/docs/0.90.0/extend-archetypes"}},m={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"CLI commands overview",id:"cli-commands-overview",level:2},{value:"Usage: Along dev life-cycle",id:"usage-along-dev-life-cycle",level:2},{value:"Additionally, useful commands",id:"additionally-useful-commands",level:2},{value:"Modify/Create an environment template",id:"modifycreate-an-environment-template",level:2},{value:"Run <code>streampipes</code> from anywhere? No problem",id:"run-streampipes-from-anywhere-no-problem",level:2},{value:"Upgrade to new version",id:"upgrade-to-new-version",level:2}],c={toc:d},u="wrapper";function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The StreamPipes command-line interface (CLI) is focused on developers in order to provide an easy entrypoint to set up a suitable dev environment, either planning on developing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"new extensions such as ",(0,o.kt)("strong",{parentName:"li"},"connect adapters, processors, sinks")," or,"),(0,o.kt)("li",{parentName:"ul"},"new core features for ",(0,o.kt)("strong",{parentName:"li"},"backend")," and ",(0,o.kt)("strong",{parentName:"li"},"ui"),".")),(0,o.kt)("p",null,"The main difference between the standard Docker/K8s installation is an improved communication between services running as containers and services running locally for development."),(0,o.kt)("p",null,"The CLI can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/streampipes/tree/master/installer/cli"},"main repository")," or in the ",(0,o.kt)("inlineCode",{parentName:"p"},"installer/cli")," folder of the downloaded source code."),(0,o.kt)("h2",{id:"tldr"},"TL;DR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes env --list\n[INFO] Available StreamPipes environment templates:\npipeline-element\n...\nstreampipes env --set pipeline-element\nstreampipes up -d\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": use ",(0,o.kt)("inlineCode",{parentName:"p"},"./streampipes")," if you haven't add it to the PATH and sourced it (see section \"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"streampipes"),' from anywhere?").')),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The CLI is basically a wrapper around multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," commands plus some additional sugar."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker >= 17.06.0"),(0,o.kt)("li",{parentName:"ul"},"Docker-Compose >= 1.26.0 (Compose file format: 3.4)"),(0,o.kt)("li",{parentName:"ul"},"Google Chrome (recommended), Mozilla Firefox, Microsoft Edge"),(0,o.kt)("li",{parentName:"ul"},"For Windows Developer: GitBash only")),(0,o.kt)("p",null,"Tested on: ",(0,o.kt)("strong",{parentName:"p"},"macOS"),", ",(0,o.kt)("strong",{parentName:"p"},"Linux"),", ",(0,o.kt)("strong",{parentName:"p"},"Windows*"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": *) If you're using Windows the CLI only works in combination with GitBash - CMD, PowerShell won't work.")),(0,o.kt)("h2",{id:"cli-commands-overview"},"CLI commands overview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"StreamPipes CLI - Manage your StreamPipes environment with ease\n\nUsage: streampipes COMMAND [OPTIONS]\n\nOptions:\n  --help, -h      show help\n  --version, -v   show version\n\nCommands:\n  clean       Remove StreamPipes data volumes, dangling images and network\n  down        Stop and remove StreamPipes containers\n  env         Inspect and select StreamPipes environments\n  info        Get information\n  logs        Get container logs for specific container\n  ps          List all StreamPipes container for running environment\n  pull        Download latest images from Dockerhub\n  restart     Restart StreamPipes environment\n  up          Create and start StreamPipes container environment\n\nRun 'streampipes COMMAND --help' for more info on a command.\n")),(0,o.kt)("h2",{id:"usage-along-dev-life-cycle"},"Usage: Along dev life-cycle"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List")," available environment templates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes env --list\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Inspect")," services in an available environment to know what kind of services it is composed of."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes env --inspect pipeline-element\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Set")," environment, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline-element"),", if you want to write a new pipeline element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes env --set pipeline-element\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start")," environment ( default: ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," mode). Here the service definition in the selected environment is used to start the multi-container landscape."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," mode is enabled by default since we rely on open ports to core service such as ",(0,o.kt)("inlineCode",{parentName:"p"},"consul"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"couchdb"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka")," etc. to reach from the IDE when developing. If you don't want to map ports (except the UI port), then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-ports")," flag.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes up -d\n# start in production mode with unmapped ports\n# streampipes up -d --no-ports\n")),(0,o.kt)("p",null,"Now you're good to go to write your new pipeline element \ud83c\udf89 \ud83c\udf89 \ud83c\udf89"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"HINT for extensions"),": Use our ",(0,o.kt)("a",{parentName:"p",href:"https://streampipes.apache.org/docs/docs/dev-guide-archetype/"},"Maven archetypes")," to setup a project skeleton and use your IDE of choice for development. However, we do recommend using IntelliJ.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"HINT for core"),": To work on ",(0,o.kt)("inlineCode",{parentName:"p"},"backend")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," features you need to set the template to ",(0,o.kt)("inlineCode",{parentName:"p"},"backend")," and clone the core repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/streampipes"},"streampipes")," - check the prerequisites there for more information.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stop")," environment and remove docker container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes down\n# want to also clean docker data volumes when stopping the environment?\n# streampipes down -v\n")),(0,o.kt)("h2",{id:"additionally-useful-commands"},"Additionally, useful commands"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start individual services only?")," We got you! You chose a template that suits your needs and now you only want to start individual services from it, e.g. only Kafka and Consul."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": the service names need to be present and match your current ",(0,o.kt)("inlineCode",{parentName:"p"},".spenv")," environment.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes up -d kafka consul\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Get current environment")," (if previously set using ",(0,o.kt)("inlineCode",{parentName:"p"},"streampipes env --set <environment>"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes env\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Get logs")," of specific service and use optional ",(0,o.kt)("inlineCode",{parentName:"p"},"--follow")," flag to stay attached to the logs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes logs --follow backend\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Update")," all services of current environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes pull\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Restart")," all services of current environment or specific services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes restart\n# restart backend & consul\n# streampipes restart backend consul\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clean")," your system and remove created StreamPipes Docker volumes, StreamPipes docker network and dangling StreamPipes images of old image layers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"streampipes clean\n# remove volumes, network and dangling images\n# streampipes clean --volumes\n")),(0,o.kt)("h2",{id:"modifycreate-an-environment-template"},"Modify/Create an environment template"),(0,o.kt)("p",null,"As of now, this step has to be done ",(0,o.kt)("strong",{parentName:"p"},"manually"),". All environments are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 adapter               # developing a new connect adapter\n\u251c\u2500\u2500 backend               # developing core backend features\n\u251c\u2500\u2500 basic                 # wanna run core, UI, connect etc from the IDE?\n\u251c\u2500\u2500 full                  # full version containing more pipeline elements\n\u251c\u2500\u2500 lite                  # few pipeline elements, less memory  \n\u251c\u2500\u2500 pipeline-element      # developing new pipeline-elements\n\u2514\u2500\u2500 ui                    # developing UI features\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modifying an existing environment template"),". To modify an existing template, you can simply add a ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR_NEW_SERVICE>")," to the template."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": You need to make sure, that the service your are adding exists in ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy/standalone/service/<YOUR_NEW_SERVICE>"),". If your're adding a completely new service take a look at existing ones, create a new service directory and include a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[environment:backend]\nactivemq\nkafka\n...\n<YOUR_NEW_SERVICE>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Creating a new")," environment template. To create a new environment template, place a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/<YOUR_NEW_ENVIRONMENT>")," in the template directory. Open the file and use the following schema."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT"),": Please make sure to have ",(0,o.kt)("inlineCode",{parentName:"p"},"[environment:<YOUR_NEW_ENVIRONMENT>]")," header in the first line of your new template matching the name of the file. Make sure to use small caps letters (lowercase) only.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[environment:<YOUR_NEW_ENVIRONMENT>]\n<SERVICE_1>\n<SERVICE_2>\n...\n")),(0,o.kt)("h2",{id:"run-streampipes-from-anywhere-no-problem"},"Run ",(0,o.kt)("inlineCode",{parentName:"h2"},"streampipes")," from anywhere? No problem"),(0,o.kt)("p",null,"Simply add the path to this cli directory to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," (on macOS, Linux) variable, e.g. in your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"%PATH%")," (on Windows)."),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"macOS"),", or ",(0,o.kt)("strong",{parentName:"p"},"Linux"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="/path/to/streampipes-installer/installer/cli:$PATH"\n')),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"Windows 10"),", e.g. check this ",(0,o.kt)("a",{parentName:"p",href:"https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/"},"documentation"),"."),(0,o.kt)("h2",{id:"upgrade-to-new-version"},"Upgrade to new version"),(0,o.kt)("p",null,"To upgrade to a new version, simply edit the version tag ",(0,o.kt)("inlineCode",{parentName:"p"},"SP_VERSION")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."))}k.isMDXComponent=!0}}]);