(function(t){function n(n){for(var a,l,o=n[0],r=n[1],c=n[2],f=0,m=[];f<o.length;f++)l=o[f],s[l]&&m.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(n);while(m.length)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,o=1;o<e.length;o++){var r=e[o];0!==s[r]&&(a=!1)}a&&(i.splice(n--,1),t=l(l.s=e[0]))}return t}var a={},s={app:0},i=[];function l(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=a,l.d=function(t,n,e){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)l.d(e,a,function(n){return t[n]}.bind(null,a));return e},l.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="/init-tracker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var u=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("c21b"),s=e.n(a);s.a},"24f7":function(t,n,e){"use strict";var a=e("ab84"),s=e.n(a);s.a},"2c84":function(t,n,e){"use strict";var a=e("72db"),s=e.n(a);s.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),s=e("d437"),i=e.n(s),l=e("d421"),o=e.n(l),r=e("5d92"),c=e.n(r),u=e("6a6f"),f=e.n(u),m=e("d553"),v=e.n(m),d=e("12d0"),b=e.n(d),h=e("2330"),p=e.n(h),C=e("db3b"),w=e.n(C),L=e("c713"),_=e.n(L),g=e("3702"),k=e.n(g),O=e("10a1"),S=e.n(O),P=e("98b7"),F=e.n(P);e("da64");a["default"].use(i.a,{components:{VApp:o.a,VBtn:c.a,VIcon:f.a,VGrid:v.a,VToolbar:b.a,transitions:p.a,VTextField:w.a,VCard:_.a,VAlert:k.a,VCheckbox:S.a,VBadge:F.a},iconfont:"md"});var T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("div",[e("v-container",{staticClass:"ma-0 pa-0 mb-0",staticStyle:{"max-width":"100%"}},[e("v-layout",{attrs:{row:"","align-center":""}},[e("v-flex",{staticClass:"orange white--text toolbar-icon",attrs:{xs4:""},on:{click:function(n){t.decrementTurn()}}},[e("v-icon",{attrs:{dark:""}},[t._v(" fast_rewind ")])],1),e("v-flex",{staticClass:"blue white--text toolbar-icon",staticStyle:{height:"27px"},attrs:{xs4:""},on:{click:function(n){t.showForm=!t.showForm}}},[e("v-icon",{attrs:{dark:""}},[t._v(" add ")])],1),e("v-flex",{staticClass:"green white--text toolbar-icon",attrs:{xs4:""},on:{click:function(n){t.incrementTurn()}}},[e("v-icon",{attrs:{dark:""}},[t._v("fast_forward")])],1)],1)],1)],1),e("lineup",{attrs:{"full-list":t.fullList,turn:t.turn}}),e("add-form",{attrs:{"show-form":t.showForm},on:{clearForm:function(n){t.clearCombatantForm()},addCombatant:t.addCombatant}}),e("combatant-list",{attrs:{"full-list":t.fullList,turn:t.turn},on:{sort:function(n){t.sortList()},removeCombatant:t.removeCombatant,moveCombatantDown:t.moveCombatantDown,moveCombatantUp:t.moveCombatantUp}}),t.fullList.length<1?e("v-card",{staticClass:"blue lighten-1 pa-3 white--text ma-2"},[e("v-layout",[e("h1",[t._v(" Please Add a Combatant Using the + button ")])])],1):t._e()],1)},$=[],j=(e("ac6a"),e("7f7f"),e("55dd"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.fullList.length>0?e("v-card",{staticClass:"mt-2"},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-1 yellow darken-2 white--text title",attrs:{xs6:""}},[t._v("\n        On Deck:\n      ")]),e("v-flex",{staticClass:"green white--text pa-1 title",attrs:{xs6:""}},[t._v("\n        Up:\n      ")]),t.fullList.length>1?e("v-flex",{staticClass:"pa-1 yellow darken-2 white--text title",attrs:{xs6:""}},[t._v("\n        "+t._s(t.getNext())+"\n      ")]):e("v-flex",{staticClass:"pa-1 yellow darken-2 white--text title",attrs:{xs6:""}},[t._v("\n        Add another combatant\n      ")]),e("v-flex",{staticClass:"green white--text pa-1 title",attrs:{xs6:""}},[t._v("\n        "+t._s(t.fullList[t.turn].name)+"\n      ")])],1)],1):t._e()}),A=[],E=(e("c5f6"),{data:function(){return{}},props:{fullList:{type:Array},turn:{type:Number}},methods:{getNext:function(){return this.turn==this.fullList.length-1?this.fullList[0].name:this.fullList[this.turn+1].name}}}),V=E,I=(e("2c84"),e("2877")),N=Object(I["a"])(V,j,A,!1,null,null,null);N.options.__file="Lineup.vue";var U=N.exports,D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showForm?e("v-card",{staticClass:"mb-2 mt-1 ml-2 mr-2 elevation-5"},[e("v-card-text",{staticClass:"body"},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"mr-3",attrs:{xs5:""}},[e("v-text-field",{attrs:{autofocus:"",label:"Name"},model:{value:t.newCombatant.name,callback:function(n){t.$set(t.newCombatant,"name",n)},expression:"newCombatant.name"}})],1),e("v-flex",{staticClass:"mr-3",attrs:{xs3:""}},[e("v-text-field",{attrs:{type:"number",min:"0",label:"Initiative"},model:{value:t.newCombatant.int,callback:function(n){t.$set(t.newCombatant,"int",n)},expression:"newCombatant.int"}})],1),e("v-flex",{attrs:{xs3:""}},[e("v-text-field",{attrs:{type:"number",min:"0",label:"AC"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.addCombatant()}},model:{value:t.newCombatant.ac,callback:function(n){t.$set(t.newCombatant,"ac",n)},expression:"newCombatant.ac"}})],1),e("v-flex",{attrs:{x12:""}},[e("v-checkbox",{attrs:{label:"Player Character? (Will Be Saved)"},on:{keydown:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.newCombatant.isPlayer=!t.newCombatant.isPlayer}},model:{value:t.newCombatant.isPlayer,callback:function(n){t.$set(t.newCombatant,"isPlayer",n)},expression:"newCombatant.isPlayer"}})],1)],1)],1),e("v-card-actions",{staticClass:"mt-0 pt-0"},[e("v-btn",{staticClass:"green white--text",attrs:{small:"",icon:""},on:{click:function(n){t.addCombatant()}}},[e("v-icon",[t._v(" add ")])],1),e("v-spacer"),e("v-btn",{staticClass:"red white--text",attrs:{small:"",icon:""},on:{click:function(n){t.clearCombatantForm()}}},[e("v-icon",[t._v(" clear ")])],1)],1)],1):t._e()},B=[],J={data:function(){return{newCombatant:{}}},props:{showForm:{type:Boolean}},methods:{addCombatant:function(){this.$emit("addCombatant",this.newCombatant),this.clearCombatantForm()},clearCombatantForm:function(){this.newCombatant={name:"",int:null,isPlayer:!1},this.$emit("clearForm")}}},M=J,G=(e("b1f3"),Object(I["a"])(M,D,B,!1,null,null,null));G.options.__file="AddForm.vue";var W=G.exports,q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.fullList.length>0?e("v-layout",{staticClass:"pt-2 mt-2 mr-2 ml-2",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},t._l(t.fullList,function(n){return e("v-card",{key:n.name,staticClass:"mb-3 mt-2"},[e("v-toolbar",{class:t.calculateToolbarClass(n)?"green white--text":"grey lighten-2",attrs:{dense:"",card:"",height:"25px"}},[n.isPlayer?e("v-badge",{attrs:{left:""}},[e("span",{attrs:{slot:"badge"},slot:"badge"},[e("strong",[t._v("PC")])]),t._v("\n        "+t._s(n.name)+"\n        ")]):e("span",[t._v("\n          "+t._s(n.name)+"\n        ")]),e("v-spacer"),-1!=t.isEdgeOfList(n)?e("v-btn",{class:t.calculateToolbarClass(n)?"white--text":"black--text",attrs:{icon:"",small:""},on:{click:function(e){t.moveCombatantUp(n)}}},[e("v-icon",[t._v("vertical_align_top")])],1):t._e(),1!=t.isEdgeOfList(n)?e("v-btn",{class:t.calculateToolbarClass(n)?"white--text":"black--text",attrs:{small:"",icon:""},on:{click:function(e){t.moveCombatantDown(n)}}},[e("v-icon",[t._v("vertical_align_bottom")])],1):t._e()],1),e("v-card-text",{staticClass:"pb-0 pt-0"},[e("v-layout",{staticClass:"pt-0 mt-0 pb-0 mb-0",attrs:{"align-center":"",row:""}},[e("v-flex",{staticClass:"mr-3",attrs:{xs2:""}},[e("v-text-field",{attrs:{min:"0",type:"number",label:"Initiative"},on:{click:function(n){t.sortList()}},model:{value:n.int,callback:function(e){t.$set(n,"int",e)},expression:"combatant.int"}})],1),e("v-flex",{attrs:{xs2:""}},[e("v-text-field",{attrs:{min:"0",type:"number",label:"AC"},on:{click:function(n){t.sortList()}},model:{value:n.ac,callback:function(e){t.$set(n,"ac",e)},expression:"combatant.ac"}})],1),e("v-flex",{attrs:{xs8:""}}),e("v-flex",{attrs:{xs1:""}},[e("v-btn",{staticClass:"red white--text",attrs:{icon:"",small:""},on:{click:function(e){t.removeCombatant(n)}}},[e("v-icon",[t._v("delete")])],1)],1)],1)],1)],1)}))],1):t._e()},z=[],H={data:function(){return{}},props:{fullList:{type:Array},turn:{type:Number}},methods:{calculateToolbarClass:function(t){return this.turn==this.fullList.indexOf(t)},sortList:function(){this.$emit("sort")},removeCombatant:function(t){this.$emit("removeCombatant",t)},isEdgeOfList:function(t){return 0==this.fullList.indexOf(t)?-1:this.fullList.indexOf(t)==this.fullList.length-1?1:0},moveCombatantDown:function(t){this.$emit("moveCombatantDown",t)},moveCombatantUp:function(t){this.$emit("moveCombatantUp",t)}}},K=H,Q=(e("24f7"),Object(I["a"])(K,q,z,!1,null,null,null));Q.options.__file="CombatantList.vue";var R=Q.exports,X={data:function(){return{name:"app",fullList:[],showForm:!1,turn:0,needsSort:!0}},watch:{turn:function(){},fullList:function(){this.savePlayers()}},components:{Lineup:U,AddForm:W,CombatantList:R},methods:{calculateToolbarClass:function(t){return this.turn==this.fullList.indexOf(t)},incrementTurn:function(){this.turn==this.fullList.length-1?this.turn=0:this.turn++},decrementTurn:function(){0==this.turn?this.turn=this.fullList.length-1:this.turn--},sortList:function(){this.fullList.sort(function(t,n){return n.int-t.int}),this.needsSort=!1},setupSort:function(){this.needsSort&&(this.sortList(),this.needsSort=!1)},addCombatant:function(t){this.fullList.push(t),this.sortList()},clearCombatantForm:function(){this.showForm=!1},removeCombatant:function(t){this.fullList.splice(this.fullList.indexOf(t),1),this.sortList()},getNext:function(){return this.turn==this.fullList.length-1?this.fullList[0].name:this.fullList[this.turn+1].name},savePlayers:function(){var t=[];this.fullList.forEach(function(n){n.isPlayer&&t.push(n)}),window.localStorage.setItem("InitTrackerSave",JSON.stringify(t))},moveCombatantDown:function(t){var n=this.fullList.indexOf(t),e=this.fullList[n];this.fullList[n]=this.fullList[n+1],this.fullList[n+1]=e,this.fullList.unshift()},moveCombatantUp:function(t){var n=this.fullList.indexOf(t),e=this.fullList[n];this.fullList[n]=this.fullList[n-1],this.fullList[n-1]=e,this.fullList.unshift()},move:function(){var t=list[y];list[y]=list[x],list[x]=t}},created:function(){window.localStorage.getItem("InitTrackerSave")&&(this.fullList=JSON.parse(window.localStorage.getItem("InitTrackerSave")))},mounted:function(){this.sortList()}},Y=X,Z=(e("034f"),Object(I["a"])(Y,T,$,!1,null,null,null));Z.options.__file="App.vue";var tt=Z.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(tt)}}).$mount("#app")},"72db":function(t,n,e){},a034:function(t,n,e){},ab84:function(t,n,e){},b1f3:function(t,n,e){"use strict";var a=e("a034"),s=e.n(a);s.a},c21b:function(t,n,e){}});
//# sourceMappingURL=app.e1c4c20b.js.map