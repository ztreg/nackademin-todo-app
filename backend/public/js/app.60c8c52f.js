(function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],s=0,d=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function l(e){return u.p+"js/"+({}[e]||e)+"."+{2:"ebadca28",3:"74408c5a",4:"d7df30a2",5:"9847aab4",6:"74ef6a20",7:"0c876579",8:"8e2c15b0",9:"3053a3c8",10:"c82cb1a0",11:"6fb8cb01",12:"af272aeb"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={2:1,3:1,4:1,5:1,6:1,7:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"b0070d05",3:"ad72a5ae",4:"52da19f9",5:"0a47bdb8",6:"e35e865a",7:"ee204e23",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("5319");var r=n("c973"),o=n.n(r),a=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),i=n("1f91"),l=n("42d2"),u=n("b05d");a["a"].use(u["a"],{config:{},lang:i["a"],iconSet:l["a"]});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],d={name:"App"},p=d,f=n("2877"),h=Object(f["a"])(p,c,s,!1,null,null,null),m=h.exports,g=n("2f62"),b=n("bc3a"),y=n.n(b);const v={user:{loggedIn:!1,role:"guest",isAdmin:!1,username:"Not a member",userid:""}},w={auth(e){return e.user}},P={checkIfLoggedIn({commit:e}){return o()((function*(){const t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};try{const n=yield y.a.get("/api/login/authentication/checkToken",t);e("setUser",n.data)}catch(n){console.log(n)}}))()}},k={setUser:(e,t)=>{console.log(t),e.user.loggedIn=!0,e.user.role=t.role,e.user.isAdmin="admin"===t.role,e.user.username=t.username,e.user.userid=t.userid}};var x={state:v,getters:w,actions:P,mutations:k};a["a"].use(g["a"]);var I=function(){const e=new g["a"].Store({modules:{user:x}});return e},O=n("ded3"),j=n.n(O),S=n("8c4f");n("e6cf");function A(e){return E.apply(this,arguments)}function E(){return E=o()((function*({next:e,store:t}){return yield t.dispatch("checkIfLoggedIn"),t.getters.auth.loggedIn?e():e("/")})),E.apply(this,arguments)}var _=A;function L(e){return C.apply(this,arguments)}function C(){return C=o()((function*({next:e,store:t}){return yield t.dispatch("checkIfLoggedIn"),t.getters.auth.isAdmin?e():e("/todolist")})),C.apply(this,arguments)}var T=L;function N(e){return B.apply(this,arguments)}function B(){return B=o()((function*({next:e,store:t}){return yield t.dispatch("checkIfLoggedIn"),t.getters.auth.loggedIn?e("/todolist"):e()})),B.apply(this,arguments)}var q=N;const M=[{path:"/",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"713b")),children:[{path:"/",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"8b24")),meta:{middleware:[q]}},{path:"/todos",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"c70e")),meta:{middleware:[_]}},{path:"/signup",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"3851")),meta:{middleware:[q]}},{path:"/archive",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"06bd")),meta:{middleware:[T]}},{path:"/todolist",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"f551")),meta:{middleware:[_]}},{path:"/todolist/:id",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"e89a")),meta:{middleware:[_]}},{path:"/profile",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"1a3e")),meta:{middleware:[_]}},{path:"/policy",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"9c74"))},{path:"/cookiepolicy",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"2561"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"e51e"))}];var U=M;a["a"].use(S["a"]);const V=I();var $=function(){const e=new S["a"]({scrollBehavior:()=>({x:0,y:0}),routes:U,mode:"hash",base:""});return e.beforeEach((e,t,n)=>{if(!e.meta.middleware)return n();const r=e.meta.middleware,o={to:e,from:t,next:n,store:V};return r[0](j()({},o))}),e},D=function(){return J.apply(this,arguments)};function J(){return J=o()((function*(){const e="function"===typeof I?yield I({Vue:a["a"]}):I,t="function"===typeof $?yield $({Vue:a["a"],store:e}):$;e.$router=t;const n={router:t,store:e,render:e=>e(m),el:"#q-app"};return{app:n,store:e,router:t}})),J.apply(this,arguments)}a["a"].prototype.$axios=y.a;const z="";function F(){return H.apply(this,arguments)}function H(){return H=o()((function*(){const{app:e,store:t,router:n}=yield D();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),l=[void 0];for(let c=0;!1===r&&c<l.length;c++)if("function"===typeof l[c])try{yield l[c]({app:e,router:n,store:t,Vue:a["a"],ssrContext:null,redirect:o,urlPath:i,publicPath:z})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==r&&new a["a"](e)})),H.apply(this,arguments)}F()},"31cd":function(e,t,n){}});