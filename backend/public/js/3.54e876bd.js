(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1b16":function(t,e,o){"use strict";(function(t){o("e6cf");var a=o("ded3"),s=o.n(a),n=o("c973"),c=o.n(n),r=o("c1df"),d=o.n(r),i=o("346c"),l=o("2f62"),u=o("6b34");e["a"]={name:"TodoPage",data(){return{todos:[],todoTitle:null,val:null,sorted:"createdAt",page:0,direction:"desc",max:Number,maxNmrOfPosts:Number,currentUser:"",searchtext:""}},components:{LogoutComponent:u["a"]},created(){var e=this;return c()((function*(){e.token=localStorage.getItem("token"),t.env.TOKEN=e.token;const o=yield i["a"].fetchTodos(e.sorted,e.direction,e.page);e.todos=o.data,e.max=Math.ceil(o.count/5)}))()},computed:s()({},Object(l["b"])(["auth"])),methods:{directionFunction(t){var e=this;return c()((function*(){"asc"===e.direction?e.direction="desc":e.direction="asc",console.log(t);const o=yield i["a"].fetchTodos(t,e.direction,e.page);e.todos=o.data}))()},fetchTodos(t="createdAt",e=0){var o=this;return c()((function*(){if(console.log(o.page),o.max<=o.page)o.page=e;else if(o.page<0)o.page=0;else{const e=yield i["a"].fetchTodos(t,o.direction,o.page);o.sortFrom=t,o.todos=e.data}}))()},editFullTodo(t,e,o){return c()((function*(){i["a"].editFullTodo(t,e,o)}))()},addTodo(t){var e=this;return c()((function*(){console.log(e.auth),yield i["a"].addTodo(t),e.direction="asc";const o="createdAt",a=yield i["a"].fetchTodos(o,e.direction,e.page);e.todos=a.data,e.todoTitle=""}))()},deleteTodo(t){return c()((function*(){yield i["a"].deleteTodo(t);const e=document.getElementById(t);e.parentNode.removeChild(e)}))()},fetchTodosSearch(e){var o=this;return c()((function*(){yield fetch("http://localhost:8081/api/todo/"+e,{headers:{Authorization:"Bearer "+t.env.TOKEN,"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{for(let e=0;e<t.length;e++)console.log("i lop"),t[e].createdAt=Date.parse(t[e].createdAt),t[e].updatedAt=Date.parse(t[e].updatedAt),t[e].createdAt=d()(t[e].updatedAt).format("MM/DD HH:mm"),t[e].updatedAt=d()(t[e].updatedAt).format("MM/DD HH:mm");o.todos=[];for(let e=0;e<t.length;e++)o.todos.push(t[e]);console.log(o.todos)}).catch(t=>{console.error("There was a error fetching:"+t)})}))()}}}}).call(this,o("4362"))},"346c":function(t,e,o){"use strict";(function(t){o("e6cf");var a=o("c973"),s=o.n(a),n=o("c1df"),c=o.n(n);class r{static fetchTodos(e="createdAt",o="asc",a=0,n){return s()((function*(){return a<=0&&(a=0),console.log("lllllllll"),console.log(`${e} | ${o} | ${a} | ${n}`),yield fetch(`http://localhost:8081/todo?sortFrom=${e}&direction=${o}&page=${a}&listId=${n}`,{headers:{Authorization:"Bearer "+t.env.TOKEN,"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{for(let e=0;e<t.data.length;e++)t.data[e].createdAt=Date.parse(t.data[e].createdAt),t.data[e].updatedAt=Date.parse(t.data[e].updatedAt),t.data[e].createdAt=c()(t.data[e].updatedAt).format("MM/DD HH:mm"),t.data[e].updatedAt=c()(t.data[e].updatedAt).format("MM/DD HH:mm");return t}).catch(t=>{console.error("There was a error fetching:"+t)})}))()}static editFullTodo(e,o,a,n){return s()((function*(){return console.log("making full edit request for id "+a),yield fetch(`http://localhost:8081/todo/${a}?listId=${n}`,{method:"PATCH",headers:{Authorization:"Bearer "+t.env.TOKEN,"Content-Type":"application/json"},body:JSON.stringify({title:e,done:o})})}))()}static addTodo(e,o,a){return s()((function*(){return console.log("add todo with title "+e+"and listId "+o),yield fetch("http://localhost:8081/todo/"+o,{method:"POST",headers:{Authorization:"Bearer "+t.env.TOKEN,"Content-Type":"application/json"},body:JSON.stringify({title:e,urgent:a})})}))()}static deleteTodo(e,o){return s()((function*(){return yield fetch(`http://localhost:8081/todo/${e}?listId=${o}`,{method:"DELETE",headers:{Authorization:"Bearer "+t.env.TOKEN,"Content-Type":"application/json"}})}))()}static fetchListName(e){return s()((function*(){return yield fetch("http://localhost:8081/todolist?listId="+e,{headers:{Authorization:"Bearer "+t.env.TOKEN,"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>(console.log(t),t))}))()}}e["a"]=r}).call(this,o("4362"))},4678:function(t,e,o){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return o(e)}function n(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="4678"},"6b34":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-btn",{staticClass:"float-right",attrs:{label:"Logout",color:"red"},on:{click:function(e){return t.logOut()}}})},s=[],n={name:"LogoutComponent",data(){return{}},methods:{logOut(){localStorage.removeItem("token"),localStorage.removeItem("showUsers"),localStorage.removeItem("role"),this.$router.go("/")}}},c=n,r=o("2877"),d=o("9c40"),i=o("eebe"),l=o.n(i),u=Object(r["a"])(c,a,s,!1,null,null,null);e["a"]=u.exports;l()(u,"components",{QBtn:d["a"]})},a905:function(t,e,o){},c70e:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"q-pa-md center bg-grey-9 text-white"},[o("TodoPage")],1)},s=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"q-gutter-sm "},[o("q-form",{staticClass:"row",on:{submit:function(e){return t.addTodo(t.todoTitle)}}},[o("q-input",{staticClass:"col-5 bg-white text-h5",attrs:{filled:"",label:"New todo *"},model:{value:t.todoTitle,callback:function(e){t.todoTitle=e},expression:"todoTitle"}}),o("q-btn",{attrs:{label:"Add Todo",type:"submit",color:"green"},model:{value:t.todoTitle,callback:function(e){t.todoTitle=e},expression:"todoTitle"}})],1),o("q-list",[o("q-input",{staticClass:"bg-white",staticStyle:{width:"300px"},attrs:{label:"Search here...",borderless:""},on:{input:function(e){return t.fetchTodosSearch(t.searchtext)}},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchtext,callback:function(e){t.searchtext=e},expression:"searchtext"}}),o("q-btn",{staticClass:"q-mr-md text-body1",attrs:{color:"accent",label:"Sort by Created at",push:""},on:{click:function(e){return t.directionFunction(t.sorted="createdAt")}}}),o("q-btn",{staticClass:"q-mr-md text-body1",attrs:{color:"cyan",label:"Sort by Updated at ",push:""},on:{click:function(e){return t.directionFunction(t.sorted="updatedAt")}}}),o("q-item",{staticClass:"text-body1 q-pa-md text-center"},["admin"===t.auth.role?o("q-item-section",[t._v("Todo Owner")]):t._e(),o("q-item-section",[t._v("Created At")]),o("q-item-section",[t._v("Updated At")]),o("q-item-section",[t._v("Delete Todo")]),o("q-item-section",[t._v("Todo Title")]),o("q-item-section",[t._v("Todo Status")]),o("q-item-section",[t._v("Todo quickDone")]),o("q-item-section",[t._v("Todo Edit")])],1),t._l(t.todos,(function(e,a){return o("div",{key:a,staticClass:"parr q-pa-md text-body1 text-center"},[o("q-item",{staticClass:"border",attrs:{id:e._id}},["admin"===t.auth.role?o("q-item-section",{staticClass:"text-body2 text-weight-thin"},[t._v(t._s(e.userid))]):t._e(),o("q-item-section",[t._v(t._s(e.createdAt))]),o("q-item-section",[t._v(t._s(e.updatedAt))]),o("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",color:"red","text-color":"white",icon:"delete"},on:{click:function(o){return t.deleteTodo(e._id)}}}),o("q-item-section",[t._v(t._s(e.title))]),o("q-item-section",[t._v(t._s(e.done))]),o("q-item-section",[o("div",{staticClass:"q-gutter-sm"},[o("q-checkbox",{on:{input:function(o){return t.editFullTodo(e.title,e.done,e._id)}},model:{value:e.done,callback:function(o){t.$set(e,"done",o)},expression:"todo.done"}})],1)]),o("q-btn-dropdown",{staticClass:"glossy",attrs:{color:"green",icon:"edit",label:"Edit"}},[o("div",{staticClass:"row no-wrap q-pa-md"},[o("q-input",{attrs:{label:"new title *",autofocus:""},model:{value:e.title,callback:function(o){t.$set(e,"title",o)},expression:"todo.title"}}),o("q-checkbox",{attrs:{color:"white"},on:{input:function(o){return t.editFullTodo(e.title,e.done,e._id)}},model:{value:e.done,callback:function(o){t.$set(e,"done",o)},expression:"todo.done"}}),o("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),o("div",{staticClass:"column items-center"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary",label:"Send edit",push:"",size:"md"},on:{click:function(o){return t.editFullTodo(e.title,e.done,e._id)}}})],1)],1)])],1)],1)}))],2),o("div",[t._v("Page: "+t._s(this.page+1)+" / "+t._s(this.max))]),o("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-lg",attrs:{clickable:"",color:"blue","text-color":"white",icon:"arrow_left"},on:{click:function(e){return t.fetchTodos(void 0,t.page--)}}}),o("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-lg",attrs:{clickable:"",color:"blue","text-color":"white",icon:"arrow_right",text:"next page"},on:{click:function(e){return t.fetchTodos(void 0,t.page++)}}})],1)},c=[],r=o("1b16"),d=r["a"],i=(o("ee38"),o("2877")),l=o("0378"),u=o("27f9"),f=o("9c40"),b=o("1c1c"),j=o("0016"),m=o("66e5"),h=o("4074"),p=o("cb32"),g=o("8f8e"),v=o("f20b"),T=o("eb85"),k=o("714f"),y=o("7f67"),q=o("eebe"),x=o.n(q),w=Object(i["a"])(d,n,c,!1,null,"ab611154",null),_=w.exports;x()(w,"components",{QForm:l["a"],QInput:u["a"],QBtn:f["a"],QList:b["a"],QIcon:j["a"],QItem:m["a"],QItemSection:h["a"],QAvatar:p["a"],QCheckbox:g["a"],QBtnDropdown:v["a"],QSeparator:T["a"]}),x()(w,"directives",{Ripple:k["a"],ClosePopup:y["a"]});var A={name:"Todos",data(){return{}},components:{TodoPage:_}},C=A,z=Object(i["a"])(C,a,s,!1,null,null,null);e["default"]=z.exports},ee38:function(t,e,o){"use strict";var a=o("a905"),s=o.n(a);s.a}}]);