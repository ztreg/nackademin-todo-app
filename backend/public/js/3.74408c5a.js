(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1b16":function(e,t,o){"use strict";(function(e){o("e6cf");var a=o("ded3"),s=o.n(a),n=o("c973"),c=o.n(n),r=o("c1df"),d=o.n(r),i=o("346c"),l=o("2f62"),u=o("6b34");t["a"]={name:"TodoPage",data(){return{todos:[],todoTitle:null,val:null,sorted:"createdAt",page:0,direction:"desc",max:Number,maxNmrOfPosts:Number,currentUser:"",searchtext:""}},components:{LogoutComponent:u["a"]},created(){var t=this;return c()((function*(){t.token=localStorage.getItem("token"),e.env.TOKEN=t.token;const o=yield i["a"].fetchTodos(t.sorted,t.direction,t.page);t.todos=o.data,t.max=Math.ceil(o.count/5)}))()},computed:s()({},Object(l["b"])(["auth"])),methods:{directionFunction(e){var t=this;return c()((function*(){"asc"===t.direction?t.direction="desc":t.direction="asc",console.log(e);const o=yield i["a"].fetchTodos(e,t.direction,t.page);t.todos=o.data}))()},fetchTodos(e="createdAt",t=0){var o=this;return c()((function*(){if(console.log(o.page),o.max<=o.page)o.page=t;else if(o.page<0)o.page=0;else{const t=yield i["a"].fetchTodos(e,o.direction,o.page);o.sortFrom=e,o.todos=t.data}}))()},editFullTodo(e,t,o){return c()((function*(){i["a"].editFullTodo(e,t,o)}))()},addTodo(e){var t=this;return c()((function*(){console.log(t.auth),yield i["a"].addTodo(e),t.direction="asc";const o="createdAt",a=yield i["a"].fetchTodos(o,t.direction,t.page);t.todos=a.data,t.todoTitle=""}))()},deleteTodo(e){return c()((function*(){yield i["a"].deleteTodo(e);const t=document.getElementById(e);t.parentNode.removeChild(t)}))()},fetchTodosSearch(t){var o=this;return c()((function*(){yield fetch("http://localhost:8081/api/todo/"+t,{headers:{Authorization:"Bearer "+e.env.TOKEN,"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{for(let t=0;t<e.length;t++)console.log("i lop"),e[t].createdAt=Date.parse(e[t].createdAt),e[t].updatedAt=Date.parse(e[t].updatedAt),e[t].createdAt=d()(e[t].updatedAt).format("MM/DD HH:mm"),e[t].updatedAt=d()(e[t].updatedAt).format("MM/DD HH:mm");o.todos=[];for(let t=0;t<e.length;t++)o.todos.push(e[t]);console.log(o.todos)}).catch(e=>{console.error("There was a error fetching:"+e)})}))()}}}}).call(this,o("4362"))},"346c":function(e,t,o){"use strict";(function(e){o("e6cf");var a=o("c973"),s=o.n(a),n=o("c1df"),c=o.n(n);class r{static fetchTodos(t="createdAt",o="asc",a=0,n){return s()((function*(){return a<=0&&(a=0),console.log("lllllllll"),console.log(`${t} | ${o} | ${a} | ${n}`),yield fetch(`/api/todo?sortFrom=${t}&direction=${o}&page=${a}&listId=${n}`,{headers:{Authorization:"Bearer "+e.env.TOKEN,"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{for(let t=0;t<e.data.length;t++)e.data[t].createdAt=Date.parse(e.data[t].createdAt),e.data[t].updatedAt=Date.parse(e.data[t].updatedAt),e.data[t].createdAt=c()(e.data[t].updatedAt).format("MM/DD HH:mm"),e.data[t].updatedAt=c()(e.data[t].updatedAt).format("MM/DD HH:mm");return e}).catch(e=>{console.error("There was a error fetching:"+e)})}))()}static editFullTodo(t,o,a,n){return s()((function*(){return console.log("making full edit request for id "+a),yield fetch(`api/todo/${a}?listId=${n}`,{method:"PATCH",headers:{Authorization:"Bearer "+e.env.TOKEN,"Content-Type":"application/json"},body:JSON.stringify({title:t,done:o})})}))()}static addTodo(t,o,a){return s()((function*(){return console.log("add todo with title "+t+"and listId "+o),yield fetch("/api/todo/"+o,{method:"POST",headers:{Authorization:"Bearer "+e.env.TOKEN,"Content-Type":"application/json"},body:JSON.stringify({title:t,urgent:a})})}))()}static deleteTodo(t,o){return s()((function*(){return yield fetch(`/api/todo/${t}?listId=${o}`,{method:"DELETE",headers:{Authorization:"Bearer "+e.env.TOKEN,"Content-Type":"application/json"}})}))()}static fetchListName(t){return s()((function*(){return yield fetch("/api/todolist?listId="+t,{headers:{Authorization:"Bearer "+e.env.TOKEN,"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>(console.log(e),e))}))()}}t["a"]=r}).call(this,o("4362"))},4678:function(e,t,o){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return o(t)}function n(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="4678"},"6b34":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-btn",{staticClass:"float-right",attrs:{label:"Logout",color:"red"},on:{click:function(t){return e.logOut()}}})},s=[],n={name:"LogoutComponent",data(){return{}},methods:{logOut(){localStorage.removeItem("token"),localStorage.removeItem("showUsers"),localStorage.removeItem("role"),this.$router.go("/")}}},c=n,r=o("2877"),d=o("9c40"),i=o("eebe"),l=o.n(i),u=Object(r["a"])(c,a,s,!1,null,null,null);t["a"]=u.exports;l()(u,"components",{QBtn:d["a"]})},a905:function(e,t,o){},c70e:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"q-pa-md center bg-grey-9 text-white"},[o("TodoPage")],1)},s=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"q-gutter-sm "},[o("q-form",{staticClass:"row",on:{submit:function(t){return e.addTodo(e.todoTitle)}}},[o("q-input",{staticClass:"col-5 bg-white text-h5",attrs:{filled:"",label:"New todo *"},model:{value:e.todoTitle,callback:function(t){e.todoTitle=t},expression:"todoTitle"}}),o("q-btn",{attrs:{label:"Add Todo",type:"submit",color:"green"},model:{value:e.todoTitle,callback:function(t){e.todoTitle=t},expression:"todoTitle"}})],1),o("q-list",[o("q-input",{staticClass:"bg-white",staticStyle:{width:"300px"},attrs:{label:"Search here...",borderless:""},on:{input:function(t){return e.fetchTodosSearch(e.searchtext)}},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.searchtext,callback:function(t){e.searchtext=t},expression:"searchtext"}}),o("q-btn",{staticClass:"q-mr-md text-body1",attrs:{color:"accent",label:"Sort by Created at",push:""},on:{click:function(t){return e.directionFunction(e.sorted="createdAt")}}}),o("q-btn",{staticClass:"q-mr-md text-body1",attrs:{color:"cyan",label:"Sort by Updated at ",push:""},on:{click:function(t){return e.directionFunction(e.sorted="updatedAt")}}}),o("q-item",{staticClass:"text-body1 q-pa-md text-center"},["admin"===e.auth.role?o("q-item-section",[e._v("Todo Owner")]):e._e(),o("q-item-section",[e._v("Created At")]),o("q-item-section",[e._v("Updated At")]),o("q-item-section",[e._v("Delete Todo")]),o("q-item-section",[e._v("Todo Title")]),o("q-item-section",[e._v("Todo Status")]),o("q-item-section",[e._v("Todo quickDone")]),o("q-item-section",[e._v("Todo Edit")])],1),e._l(e.todos,(function(t,a){return o("div",{key:a,staticClass:"parr q-pa-md text-body1 text-center"},[o("q-item",{staticClass:"border",attrs:{id:t._id}},["admin"===e.auth.role?o("q-item-section",{staticClass:"text-body2 text-weight-thin"},[e._v(e._s(t.userid))]):e._e(),o("q-item-section",[e._v(e._s(t.createdAt))]),o("q-item-section",[e._v(e._s(t.updatedAt))]),o("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",color:"red","text-color":"white",icon:"delete"},on:{click:function(o){return e.deleteTodo(t._id)}}}),o("q-item-section",[e._v(e._s(t.title))]),o("q-item-section",[e._v(e._s(t.done))]),o("q-item-section",[o("div",{staticClass:"q-gutter-sm"},[o("q-checkbox",{on:{input:function(o){return e.editFullTodo(t.title,t.done,t._id)}},model:{value:t.done,callback:function(o){e.$set(t,"done",o)},expression:"todo.done"}})],1)]),o("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"green",icon:"edit",label:"Edit"}},[o("div",{staticClass:"row no-wrap q-pa-md"},[o("q-input",{attrs:{label:"new title *",autofocus:""},model:{value:t.title,callback:function(o){e.$set(t,"title",o)},expression:"todo.title"}}),o("q-checkbox",{attrs:{color:"white"},on:{input:function(o){return e.editFullTodo(t.title,t.done,t._id)}},model:{value:t.done,callback:function(o){e.$set(t,"done",o)},expression:"todo.done"}}),o("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),o("div",{staticClass:"column items-center"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary",label:"Send edit",push:"",size:"md"},on:{click:function(o){return e.editFullTodo(t.title,t.done,t._id)}}})],1)],1)])],1)],1)}))],2),o("div",[e._v("Page: "+e._s(this.page+1)+" / "+e._s(this.max))]),o("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-lg",attrs:{clickable:"",color:"blue","text-color":"white",icon:"arrow_left"},on:{click:function(t){return e.fetchTodos(void 0,e.page--)}}}),o("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-lg",attrs:{clickable:"",color:"blue","text-color":"white",icon:"arrow_right",text:"next page"},on:{click:function(t){return e.fetchTodos(void 0,e.page++)}}})],1)},c=[],r=o("1b16"),d=r["a"],i=(o("ee38"),o("2877")),l=o("0378"),u=o("27f9"),f=o("9c40"),b=o("1c1c"),j=o("0016"),m=o("66e5"),p=o("4074"),h=o("cb32"),g=o("8f8e"),v=o("f20b"),T=o("eb85"),k=o("714f"),y=o("7f67"),q=o("eebe"),x=o.n(q),w=Object(i["a"])(d,n,c,!1,null,"ab611154",null),_=w.exports;x()(w,"components",{QForm:l["a"],QInput:u["a"],QBtn:f["a"],QList:b["a"],QIcon:j["a"],QItem:m["a"],QItemSection:p["a"],QAvatar:h["a"],QCheckbox:g["a"],QBtnDropdown:v["a"],QSeparator:T["a"]}),x()(w,"directives",{Ripple:k["a"],ClosePopup:y["a"]});var A={name:"Todos",data(){return{}},components:{TodoPage:_}},C=A,z=Object(i["a"])(C,a,s,!1,null,null,null);t["default"]=z.exports},ee38:function(e,t,o){"use strict";var a=o("a905"),s=o.n(a);s.a}}]);