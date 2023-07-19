"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],s={id:"deploy-kubernetes",title:"Kubernetes Deployment",sidebar_label:"Kubernetes Deployment",original_id:"deploy-kubernetes"},i=void 0,p={unversionedId:"deploy-kubernetes",id:"version-0.91.0/deploy-kubernetes",title:"Kubernetes Deployment",description:"Prerequisites",source:"@site/versioned_docs/version-0.91.0/05_deploy-kubernetes.md",sourceDirName:".",slug:"/deploy-kubernetes",permalink:"/docs/0.91.0/deploy-kubernetes",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:5,frontMatter:{id:"deploy-kubernetes",title:"Kubernetes Deployment",sidebar_label:"Kubernetes Deployment",original_id:"deploy-kubernetes"},sidebar:"documentation",previous:{title:"Docker Deployment",permalink:"/docs/0.91.0/deploy-docker"},next:{title:"Use SSL",permalink:"/docs/0.91.0/deploy-use-ssl"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2}],m={toc:c},d="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Requires Helm (",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"https://helm.sh/"),") and an active connection to a kubernetes cluster with a running tiller server."),(0,a.kt)("p",null,"Tested with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"K3s v1.18.8+k3s1 (6b595318) with K8s v1.18.8"),(0,a.kt)("li",{parentName:"ul"},"Helm v3.1.2")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We provide two helm chart options to get you going:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default"),": a light-weight option with few pipeline elements, needs less memory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"full"),":  contains more pipeline elements, requires ",(0,a.kt)("strong",{parentName:"li"},">16 GB RAM")," (recommended)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starting")," the ",(0,a.kt)("strong",{parentName:"p"},"default")," helm chart option is as easy as simply running the following command from the root of this folder:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Starting might take a while since we also initially pull all Docker images from Dockerhub.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install streampipes ./\n")),(0,a.kt)("p",null,"After a while, all containers should successfully started, indicated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Running")," status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\nNAME                                           READY   STATUS    RESTARTS   AGE\nactivemq-66d58f47cf-2r2nb                      1/1     Running   0          3m27s\nbackend-76ddc486c8-nswpc                       1/1     Running   0          3m27s\nconnect-master-7b477f9b79-8dfvr                1/1     Running   0          3m26s\nconnect-worker-78d89c989c-9v8zs                1/1     Running   0          3m27s\nconsul-55965f966b-gwb7l                        1/1     Running   0          3m27s\ncouchdb-77db98cf7b-xnnvb                       1/1     Running   0          3m27s\ninfluxdb-b95b6479-r8wh8                        1/1     Running   0          3m27s\nkafka-657b5fb77-dp2d6                          1/1     Running   0          3m27s\npipeline-elements-all-jvm-79c445dbd9-m8xcs     1/1     Running   0          3m27s\nsources-watertank-simulator-6c6b8844f6-6b4d7   1/1     Running   0          3m27s\nui-b94bd9766-rm6zb                             2/2     Running   0          3m27s\nzookeeper-5d9947686f-6nzgs                     1/1     Running   0          3m26s\n")),(0,a.kt)("p",null,"After all containers are successfully started just got to your browser and visit any of the k8s cluster nodes on\n",(0,a.kt)("inlineCode",{parentName:"p"},"http://<NODE_IP>")," to finish the installation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE"),": If you're running Docker for Mac or Docker for Windows with a local k8s cluster, the above step to use your host IP might not work. Luckily, you can port-forward a service port to your localhost using the following command to be able to access the UI either via ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<HOST_IP>")," (you require sudo to run this command in order to bind to a privileged port)."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/ui --address=0.0.0.0 80:80\n"))),(0,a.kt)("p",null,"Starting the ",(0,a.kt)("strong",{parentName:"p"},"full")," helm chart option is almost the same:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install streampipes ./ --set deployment=full\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Deleting")," the current helm chart deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm del streampipes\n")))}k.isMDXComponent=!0}}]);