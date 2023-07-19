"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),k=r,g=s["".concat(u,".").concat(k)]||s[k]||c[k]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},31961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"org.apache.streampipes.processors.textmining.jvm.languagedetection",title:"Language Detection",sidebar_label:"Language Detection"},u=void 0,o={unversionedId:"pe/org.apache.streampipes.processors.textmining.jvm.languagedetection",id:"pe/org.apache.streampipes.processors.textmining.jvm.languagedetection",title:"Language Detection",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection",permalink:"/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.jvm.languagedetection",title:"Language Detection",sidebar_label:"Language Detection"},sidebar:"documentation",previous:{title:"Language Detection",permalink:"/docs/next/pe/org.apache.streampipes.processors.textmining.flink.languagedetection"},next:{title:"Math",permalink:"/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop"}},m={},s=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],c={toc:s},k="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(k,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.languagedetection/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Detects the language of incoming text. For a proper detection each text should contain at least 2 sentences."),(0,l.kt)("p",null,"Supported languages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Afrikaans (afr)"),(0,l.kt)("li",{parentName:"ul"},"Arabic (ara)"),(0,l.kt)("li",{parentName:"ul"},"Asturian (ast)"),(0,l.kt)("li",{parentName:"ul"},"Azerbaijani (aze)"),(0,l.kt)("li",{parentName:"ul"},"Bashkir (bak)"),(0,l.kt)("li",{parentName:"ul"},"Belarusian (bel)"),(0,l.kt)("li",{parentName:"ul"},"Bengali (ben)"),(0,l.kt)("li",{parentName:"ul"},"Bosnian (bos)"),(0,l.kt)("li",{parentName:"ul"},"Breton (bre)"),(0,l.kt)("li",{parentName:"ul"},"Bulgarian (bul)"),(0,l.kt)("li",{parentName:"ul"},"Catalan (cat)"),(0,l.kt)("li",{parentName:"ul"},"Cebuano (ceb)"),(0,l.kt)("li",{parentName:"ul"},"Czech (ces)"),(0,l.kt)("li",{parentName:"ul"},"Chechen (che)"),(0,l.kt)("li",{parentName:"ul"},"Mandarin Chinese (cmn)"),(0,l.kt)("li",{parentName:"ul"},"Welsh (cym)"),(0,l.kt)("li",{parentName:"ul"},"Danish (dan)"),(0,l.kt)("li",{parentName:"ul"},"German (deu)"),(0,l.kt)("li",{parentName:"ul"},"Standard Estonian (ekk)"),(0,l.kt)("li",{parentName:"ul"},"Greek, Modern (ell)"),(0,l.kt)("li",{parentName:"ul"},"English (eng)"),(0,l.kt)("li",{parentName:"ul"},"Esperanto (epo)"),(0,l.kt)("li",{parentName:"ul"},"Estonian (est)"),(0,l.kt)("li",{parentName:"ul"},"Basque (eus)"),(0,l.kt)("li",{parentName:"ul"},"Faroese (fao)"),(0,l.kt)("li",{parentName:"ul"},"Persian (fas)"),(0,l.kt)("li",{parentName:"ul"},"Finnish (fin)"),(0,l.kt)("li",{parentName:"ul"},"French (fra)"),(0,l.kt)("li",{parentName:"ul"},"Western Frisian (fry)"),(0,l.kt)("li",{parentName:"ul"},"Irish (gle)"),(0,l.kt)("li",{parentName:"ul"},"Galician (glg)"),(0,l.kt)("li",{parentName:"ul"},"Swiss German (gsw)"),(0,l.kt)("li",{parentName:"ul"},"Gujarati (guj)"),(0,l.kt)("li",{parentName:"ul"},"Hebrew (heb)"),(0,l.kt)("li",{parentName:"ul"},"Hindi (hin)"),(0,l.kt)("li",{parentName:"ul"},"Croatian (hrv)"),(0,l.kt)("li",{parentName:"ul"},"Hungarian (hun)"),(0,l.kt)("li",{parentName:"ul"},"Armenian (hye)"),(0,l.kt)("li",{parentName:"ul"},"Indonesian (ind)"),(0,l.kt)("li",{parentName:"ul"},"Icelandic (isl)"),(0,l.kt)("li",{parentName:"ul"},"Italian (ita)"),(0,l.kt)("li",{parentName:"ul"},"Javanese (jav)"),(0,l.kt)("li",{parentName:"ul"},"Japanese (jpn)"),(0,l.kt)("li",{parentName:"ul"},"Kannada (kan)"),(0,l.kt)("li",{parentName:"ul"},"Georgian (kat)"),(0,l.kt)("li",{parentName:"ul"},"Kazakh (kaz)"),(0,l.kt)("li",{parentName:"ul"},"Kirghiz (kir)"),(0,l.kt)("li",{parentName:"ul"},"Korean (kor)"),(0,l.kt)("li",{parentName:"ul"},"Latin (lat)"),(0,l.kt)("li",{parentName:"ul"},"Latvian (lav)"),(0,l.kt)("li",{parentName:"ul"},"Limburgan (lim)"),(0,l.kt)("li",{parentName:"ul"},"Lithuanian (lit)"),(0,l.kt)("li",{parentName:"ul"},"Luxembourgish (ltz)"),(0,l.kt)("li",{parentName:"ul"},"Standard Latvian (lvs)"),(0,l.kt)("li",{parentName:"ul"},"Malayalam (mal)"),(0,l.kt)("li",{parentName:"ul"},"Marathi (mar)"),(0,l.kt)("li",{parentName:"ul"},"Minangkabau (min)"),(0,l.kt)("li",{parentName:"ul"},"Macedonian (mkd)"),(0,l.kt)("li",{parentName:"ul"},"Maltese (mlt)"),(0,l.kt)("li",{parentName:"ul"},"Mongolian (mon)"),(0,l.kt)("li",{parentName:"ul"},"Maori (mri)"),(0,l.kt)("li",{parentName:"ul"},"Malay (msa)"),(0,l.kt)("li",{parentName:"ul"},"Min Nan Chinese (nan)"),(0,l.kt)("li",{parentName:"ul"},"Low German (nds)"),(0,l.kt)("li",{parentName:"ul"},"Nepali (nep)"),(0,l.kt)("li",{parentName:"ul"},"Dutch (nld)"),(0,l.kt)("li",{parentName:"ul"},"Norwegian Nynorsk (nno)"),(0,l.kt)("li",{parentName:"ul"},"Norwegian Bokm\xe5l (nob)"),(0,l.kt)("li",{parentName:"ul"},"Occitan (oci)"),(0,l.kt)("li",{parentName:"ul"},"Panjabi (pan)"),(0,l.kt)("li",{parentName:"ul"},"Iranian Persian (pes)"),(0,l.kt)("li",{parentName:"ul"},"Plateau Malagasy (plt)"),(0,l.kt)("li",{parentName:"ul"},"Western Panjabi (pnb)"),(0,l.kt)("li",{parentName:"ul"},"Polish (pol)"),(0,l.kt)("li",{parentName:"ul"},"Portuguese (por)"),(0,l.kt)("li",{parentName:"ul"},"Pushto (pus)"),(0,l.kt)("li",{parentName:"ul"},"Romanian (ron)"),(0,l.kt)("li",{parentName:"ul"},"Russian (rus)"),(0,l.kt)("li",{parentName:"ul"},"Sanskrit (san)"),(0,l.kt)("li",{parentName:"ul"},"Sinhala (sin)"),(0,l.kt)("li",{parentName:"ul"},"Slovak (slk)"),(0,l.kt)("li",{parentName:"ul"},"Slovenian (slv)"),(0,l.kt)("li",{parentName:"ul"},"Somali (som)"),(0,l.kt)("li",{parentName:"ul"},"Spanish (spa)"),(0,l.kt)("li",{parentName:"ul"},"Albanian (sqi)"),(0,l.kt)("li",{parentName:"ul"},"Serbian (srp)"),(0,l.kt)("li",{parentName:"ul"},"Sundanese (sun)"),(0,l.kt)("li",{parentName:"ul"},"Swahili (swa)"),(0,l.kt)("li",{parentName:"ul"},"Swedish (swe)"),(0,l.kt)("li",{parentName:"ul"},"Tamil (tam)"),(0,l.kt)("li",{parentName:"ul"},"Tatar (tat)"),(0,l.kt)("li",{parentName:"ul"},"Telugu (tel)"),(0,l.kt)("li",{parentName:"ul"},"Tajik (tgk)"),(0,l.kt)("li",{parentName:"ul"},"Tagalog (tgl)"),(0,l.kt)("li",{parentName:"ul"},"Thai (tha)"),(0,l.kt)("li",{parentName:"ul"},"Turkish (tur)"),(0,l.kt)("li",{parentName:"ul"},"Ukrainian (ukr)"),(0,l.kt)("li",{parentName:"ul"},"Urdu (urd)"),(0,l.kt)("li",{parentName:"ul"},"Uzbek (uzb)"),(0,l.kt)("li",{parentName:"ul"},"Vietnamese (vie)"),(0,l.kt)("li",{parentName:"ul"},"Volap\xfck (vol)"),(0,l.kt)("li",{parentName:"ul"},"Waray (war)"),(0,l.kt)("li",{parentName:"ul"},"Zulu (zul)")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"required-input"},"Required input"),(0,l.kt)("p",null,"A stream with a string property which contains a text.\nThe longer the text, the higher the accuracy of the language detector."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Simply assign the correct output of the previous stream to the language detector input.\nTo use this component you have to download or train an openNLP model:\n",(0,l.kt)("a",{parentName:"p",href:"https://opennlp.apache.org/models.html"},"https://opennlp.apache.org/models.html")),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("p",null,"Adds two fields to the event:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"String Property: The acronym of the detected language which can be seen above."),(0,l.kt)("li",{parentName:"ol"},"Double Property: The confidence of the detector that it found the correct language. Between 0 (not certain at all) and 1 (very certain).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("p",null,"Input: ",(0,l.kt)("inlineCode",{parentName:"p"},'(text: "Hi, how are you?")')),(0,l.kt)("p",null,"Output: ",(0,l.kt)("inlineCode",{parentName:"p"},'(text: "Hi, how are you?", language: "eng", confidenceLanguage: 0.89)')))}g.isMDXComponent=!0}}]);