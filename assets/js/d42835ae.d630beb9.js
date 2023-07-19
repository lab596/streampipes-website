"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return r?i.createElement(m,a(a({ref:t},c),{},{components:r})):i.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,a[1]=o;for(var u=2;u<s;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},52635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var i=r(87462),n=r(63366),s=(r(67294),r(3905)),a=["components"],o={id:"deploy-security",title:"Security",sidebar_label:"Security",original_id:"deploy-security"},l=void 0,u={unversionedId:"deploy-security",id:"version-0.70.0/deploy-security",title:"Security",description:"Overriding default settings",source:"@site/versioned_docs/version-0.70.0/05_deploy-security.md",sourceDirName:".",slug:"/deploy-security",permalink:"/docs/0.70.0/deploy-security",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688363956,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:5,frontMatter:{id:"deploy-security",title:"Security",sidebar_label:"Security",original_id:"deploy-security"},sidebar:"documentation",previous:{title:"Use SSL",permalink:"/docs/0.70.0/deploy-use-ssl"},next:{title:"Development Setup",permalink:"/docs/0.70.0/extend-setup"}},c={},d=[{value:"Overriding default settings",id:"overriding-default-settings",level:2},{value:"Configuration",id:"configuration",level:2},{value:"User types",id:"user-types",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Roles",id:"roles",level:3},{value:"Groups",id:"groups",level:3},{value:"Changing permissions",id:"changing-permissions",level:3}],p={toc:d},h="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,s.kt)(h,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overriding-default-settings"},"Overriding default settings"),(0,s.kt)("p",null,"At installation time, StreamPipes checks for available environment variables relevant for the securing the system. If they are not set, it will use the default values."),(0,s.kt)("p",null,"The following variables are checked by the core at installation time:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SP_INITIAL_ADMIN_EMAIL The email address of the initial administrator."),(0,s.kt)("li",{parentName:"ul"},"SP_INITIAL_ADMIN_PASSWORD The password of the initial administrator."),(0,s.kt)("li",{parentName:"ul"},"SP_INITIAL_CLIENT_USER The initial client user, used by the extensions modules to make authenticated API requests to the core."),(0,s.kt)("li",{parentName:"ul"},"SP_INITIAL_CLIENT_SECRET The default password of the initial client user."),(0,s.kt)("li",{parentName:"ul"},"SP_SETUP_INSTALL_PIPELINE_ELEMENTS Indicates whether pipeline elements should be installed."),(0,s.kt)("li",{parentName:"ul"},"SP_ENCRYPTION_PASSCODE The encryption passcode, used for securely storing secrets (e.g., database connection strings)."),(0,s.kt)("li",{parentName:"ul"},"SP_JWT_SECRET The JWT secret, used for signing JWT tokens.")),(0,s.kt)("p",null,"In addition, all extensions services that perform requests to the core will need to have the following environment variables set:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SP_CLIENT_USER The client user, used by the extensions modules to make authenticated API requests to the core."),(0,s.kt)("li",{parentName:"ul"},"SP_CLIENT_SECRET The password of the client user.")),(0,s.kt)("p",null,"Note that there are default values for all environment variables that are set at installation time - make sure to change these settings when moving to production!"),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Most security-related settings can be set in the configuration section of StreamPipes. The ",(0,s.kt)("em",{parentName:"p"},"General")," section allows to set self-service registration and password recovery (both are disabled by default and require a valid email configuration).\nIn the ",(0,s.kt)("em",{parentName:"p"},"Security")," section, users, service accounts, roles and groups can be configured."),(0,s.kt)("h2",{id:"user-types"},"User types"),(0,s.kt)("p",null,"StreamPipes distinguishes between User Accounts (real users that interact with StreamPipes over the UI or an API) and Service Accounts (user-independent accounts which solely use StreamPipes over the API)."),(0,s.kt)("p",null,"User accounts are typically used by extensions service that require API access to the core (e.g., to get a list of running pipelines)."),(0,s.kt)("h2",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"StreamPipes v0.69.0 comes with more advanced mechanisms to manage permissions.\nFor each major resource (pipeline elements, pipelines, StreamPipes Connect adapters, dashboards, data explorer views), permissions can be assigned individually to users and groups."),(0,s.kt)("p",null,"To ease permission handling, StreamPipes comes with a default number of roles with pre-assigned privileges:"),(0,s.kt)("h3",{id:"roles"},"Roles"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Admin The administrator role has full access to all resources."),(0,s.kt)("li",{parentName:"ul"},"Service Admin The service administrator role has full access to all resources, but has no access to the UI."),(0,s.kt)("li",{parentName:"ul"},"Pipeline Admin has full control of pipelines (create, edit, delete, start, stop, pause, resume, etc.)."),(0,s.kt)("li",{parentName:"ul"},"Pipeline User has limited control of pipelines (read only)."),(0,s.kt)("li",{parentName:"ul"},"Dashboard Admin has full control of dashboards (create, edit, delete, etc.)."),(0,s.kt)("li",{parentName:"ul"},"Dashboard User has limited control of dashboards (read only)."),(0,s.kt)("li",{parentName:"ul"},"Data Explorer Admin has full control of data explorer views (create, edit, delete, etc.)."),(0,s.kt)("li",{parentName:"ul"},"Data Explorer User has limited control of data explorer views (read only)."),(0,s.kt)("li",{parentName:"ul"},"Connect Admin has full control of StreamPipes Connect adapters (create, edit, delete, etc.).")),(0,s.kt)("h3",{id:"groups"},"Groups"),(0,s.kt)("p",null,"Roles can be either assigned to specific users or groups. Any group can contain several members.\nThe permissions of a user are the union of the permissions of all roles assigned to the user and the groups to which the user belongs."),(0,s.kt)("h3",{id:"changing-permissions"},"Changing permissions"),(0,s.kt)("p",null,"Any resource has a resource owner, which is the authority that created the resource. Resources can be either public or private. Public resources are available to all users, while the user role determines what the user can do with the resource.\nE.g., a public pipeline created by a user of role ROLE_ADMIN can be edited by all users with role PIPELINE_ADMIN, while the same pipeline can be read by all users with role PIPELINE_USER."),(0,s.kt)("p",null,"Permissions can only be changed by admin users currently.\nIn the overview section of each resource (e.g., pipelines and dashboards), a permission dialog is available to users with role ROLE_ADMIN. The dialog allows to assign users and groups to the individual resource."))}m.isMDXComponent=!0}}]);