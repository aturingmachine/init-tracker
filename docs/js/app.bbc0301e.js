(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],m=0,f=[];m<r.length;m++)o=r[m],s[o]&&f.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/init-tracker/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),s=a.n(n);s.a},"24f7":function(t,e,a){"use strict";var n=a("ab84"),s=a.n(n);s.a},"2c84":function(t,e,a){"use strict";var n=a("72db"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=a("d437"),i=a.n(s),o=a("d421"),r=a.n(o),l=a("5d92"),c=a.n(l),u=a("6a6f"),m=a.n(u),f=a("d553"),d=a.n(f),v=a("12d0"),b=a.n(v),h=a("2330"),p=a.n(h),x=a("db3b"),C=a.n(x),w=a("c713"),g=a.n(w),k=a("3702"),_=a.n(k),y=a("10a1"),L=a.n(y),S=a("98b7"),O=a.n(S),P=a("3ace"),T=a.n(P),I=a("25b1"),$=a.n(I),E=a("9861"),F=a.n(E),A=a("e1f0"),N=a.n(A);a("da64");n["default"].use(i.a,{components:{VApp:r.a,VBtn:c.a,VIcon:m.a,VGrid:d.a,VToolbar:b.a,transitions:p.a,VTextField:C.a,VCard:g.a,VAlert:_.a,VCheckbox:L.a,VBadge:O.a,VSelect:T.a,VSnackbar:$.a,VMenu:F.a,VList:N.a},iconfont:"md"});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{staticClass:"header"},[a("v-container",{staticClass:"ma-0 pa-0 mb-0",staticStyle:{"max-width":"100%"}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"indigo darken-3 white--text toolbar-icon round-header",attrs:{xs11:""}},[t._v("Round: "+t._s(t.round))]),a("v-flex",{staticClass:"toolbar-icon blue-grey",attrs:{xs1:""}},[a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{staticClass:"ml-1 mt-0 mb-0 pb-0 pt-0",attrs:{slot:"activator",dark:"",icon:"",small:""},slot:"activator"},[a("v-icon",{attrs:{dark:""}},[t._v("folder")])],1),a("v-list",t._l(t.savedCombatants,function(e,n){return a("v-list-tile",{key:n,on:{click:function(a){t.deleteSaved(e)}}},[a("v-list-tile-title",[t._v("Delete: "+t._s(e.name))])],1)}))],1)],1),a("v-flex",{staticClass:"orange white--text toolbar-icon",attrs:{xs6:""},on:{click:function(e){t.decrementTurn()}}},[a("v-icon",{attrs:{dark:""}},[t._v("fast_rewind")])],1),a("v-flex",{staticClass:"green white--text toolbar-icon",attrs:{xs6:""},on:{click:function(e){t.incrementTurn()}}},[a("v-icon",{attrs:{dark:""}},[t._v("fast_forward")])],1),a("v-flex",{staticClass:"purple white--text toolbar-icon",attrs:{xs4:""},on:{click:function(e){t.sortList()}}},[a("v-icon",{attrs:{dark:""}},[t._v("sort")])],1),a("v-flex",{staticClass:"blue white--text toolbar-icon",attrs:{xs4:""},on:{click:function(e){t.showForm=!t.showForm}}},[a("v-icon",{attrs:{dark:""}},[t._v("add")])],1),t.confirmingReset?t._e():a("v-flex",{staticClass:"deep-orange lighten-1 white--text toolbar-icon",attrs:{xs4:""},on:{click:function(e){t.confirmingReset=!0}}},[a("v-icon",{attrs:{dark:""}},[t._v("refresh")])],1),t.confirmingReset?a("v-flex",{staticClass:"deep-orange lighten-1 white--text toolbar-icon",attrs:{xs2:""},on:{click:function(e){t.confirmingReset=!1}}},[a("v-icon",{attrs:{dark:""}},[t._v("cancel")])],1):t._e(),t.confirmingReset?a("v-flex",{staticClass:"green darken-4 white--text toolbar-icon",attrs:{xs2:""},on:{click:function(e){t.reset()}}},[a("v-icon",{attrs:{dark:""}},[t._v("check_circle")])],1):t._e()],1)],1),a("lineup",{attrs:{"full-list":t.fullList,turn:t.turn}}),a("add-form",{staticClass:"mt-3 elevation-15",attrs:{"show-form":t.showForm,currentNames:t.fullList.map(function(t){return t.name}),savedCombatants:t.savedCombatants},on:{clearForm:function(e){t.clearCombatantForm()},addCombatant:t.addCombatant}})],1),a("div",{class:t.showForm?"more-content":"content"},[a("combatant-list",{attrs:{"full-list":t.fullList,turn:t.turn},on:{removeCombatant:t.removeCombatant,moveCombatantDown:t.moveCombatantDown,moveCombatantUp:t.moveCombatantUp,export:t.exportCombatant}}),t.fullList.length<1?a("v-card",{staticClass:"blue lighten-1 pa-3 white--text ma-2"},[a("v-layout",[a("h1",[t._v("Please Add a Combatant Using the + button")])])],1):t._e()],1),a("v-snackbar",{attrs:{timeout:2e3,color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackBarText))])],1)},V=[],j=(a("ac6a"),a("6b54"),a("55dd"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.fullList.length>0?a("v-card",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-1 yellow darken-2 white--text title",attrs:{xs6:""}},[t._v("On Deck:")]),a("v-flex",{staticClass:"green white--text pa-1 title",attrs:{xs6:""}},[t._v("Up:")]),t.fullList.length>1?a("v-flex",{staticClass:"pa-1 yellow darken-2 white--text title",attrs:{xs6:""}},[t._v(t._s(t.getNext()))]):a("v-flex",{staticClass:"pa-1 yellow darken-2 white--text title",attrs:{xs6:""}},[t._v("Add another combatant")]),a("v-flex",{staticClass:"green white--text pa-1 title",attrs:{xs6:""}},[t._v(t._s(t.fullList[t.turn].name))])],1)],1):t._e()}),R=[],B=(a("c5f6"),{data:function(){return{}},props:{fullList:{type:Array},turn:{type:Number}},methods:{getNext:function(){return this.turn==this.fullList.length-1?this.fullList[0].name:this.fullList[this.turn+1].name}}}),M=B,U=(a("2c84"),a("2877")),J=Object(U["a"])(M,j,R,!1,null,null,null);J.options.__file="Lineup.vue";var G=J.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showForm?a("v-card",{staticClass:"mb-2 mt-1 ml-2 mr-2 elevation-5"},[a("v-card-text",{staticClass:"body"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"mr-3",attrs:{xs5:""}},[a("v-text-field",{attrs:{autofocus:"",label:"Name"},model:{value:t.newCombatant.name,callback:function(e){t.$set(t.newCombatant,"name",e)},expression:"newCombatant.name"}})],1),a("v-flex",{staticClass:"mr-3",attrs:{xs3:""}},[a("v-text-field",{attrs:{type:"number",min:"0",label:"Initiative"},model:{value:t.newCombatant.int,callback:function(e){t.$set(t.newCombatant,"int",e)},expression:"newCombatant.int"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{type:"number",min:"0",label:"AC"},model:{value:t.newCombatant.ac,callback:function(e){t.$set(t.newCombatant,"ac",e)},expression:"newCombatant.ac"}})],1),a("v-flex",{attrs:{xs9:""}}),a("v-flex",{staticClass:"mr-3",attrs:{xs5:""}},[a("v-text-field",{attrs:{type:"number",min:"0",label:"Spell Save DC"},model:{value:t.newCombatant.spellSave,callback:function(e){t.$set(t.newCombatant,"spellSave",e)},expression:"newCombatant.spellSave"}})],1),a("v-flex",{attrs:{xs5:""}},[a("v-text-field",{attrs:{type:"number",min:"0",label:"Passive Perception"},model:{value:t.newCombatant.passivePerception,callback:function(e){t.$set(t.newCombatant,"passivePerception",e)},expression:"newCombatant.passivePerception"}})],1),a("v-flex",{attrs:{x12:""}},[a("v-checkbox",{attrs:{label:"Player Character? (Will Be Saved)"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.newCombatant.isPlayer=!t.newCombatant.isPlayer}},model:{value:t.newCombatant.isPlayer,callback:function(e){t.$set(t.newCombatant,"isPlayer",e)},expression:"newCombatant.isPlayer"}})],1)],1)],1),a("v-card-actions",{staticClass:"mt-0 pt-0"},[a("v-btn",{staticClass:"green white--text",attrs:{disabled:t.shouldDisable()},on:{click:function(e){t.addCombatant()}}},[t._v("Add")]),a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{staticClass:"blue white--text ml-4",attrs:{slot:"activator"},slot:"activator"},[t._v("Load")]),a("v-list",t._l(t.savedCombatants,function(e,n){return a("v-list-tile",{key:n,on:{click:function(a){t.loadSaved(e)}}},[a("v-list-tile-title",[t._v(t._s(e.name))])],1)}))],1),a("v-spacer"),a("v-btn",{staticClass:"red white--text",on:{click:function(e){t.clearCombatantForm()}}},[t._v("Cancel")])],1)],1):t._e()},W=[],q={data:function(){return{newCombatant:{}}},props:{showForm:{type:Boolean},currentNames:{type:Array},savedCombatants:{type:Array}},methods:{shouldDisable:function(){return!(this.newCombatant.name&&this.newCombatant.name.length>0&&-1===this.currentNames.indexOf(this.newCombatant.name))},addCombatant:function(){this.$emit("addCombatant",this.newCombatant),this.clearCombatantForm()},loadSaved:function(t){this.$emit("addCombatant",t),this.clearCombatantForm()},clearCombatantForm:function(){this.newCombatant={name:"",int:null,isPlayer:!1},this.$emit("clearForm")}}},H=q,K=(a("b1f3"),Object(U["a"])(H,z,W,!1,null,null,null));K.options.__file="AddForm.vue";var Q=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.fullList.length>0?a("v-layout",{staticClass:"pt-2 mt-2 mr-2 ml-2",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},t._l(t.fullList,function(e){return a("v-card",{key:e.id,staticClass:"mb-3 mt-2",attrs:{id:"combatant-"+e.name}},[a("v-toolbar",{class:t.calculateToolbarClass(e)?"green white--text":"grey lighten-2",attrs:{dense:"",card:"",height:"25px"}},[e.isPlayer?a("v-badge",{attrs:{left:""}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[a("strong",[t._v("PC")])]),t._v("\n          "+t._s(e.name)+"\n        ")]):a("span",[t._v(t._s(e.name))]),a("v-spacer"),-1!=t.isEdgeOfList(e)?a("v-btn",{class:t.calculateToolbarClass(e)?"white--text":"black--text",attrs:{icon:"",small:""},on:{click:function(a){t.moveCombatantUp(e)}}},[a("v-icon",[t._v("vertical_align_top")])],1):t._e(),1!=t.isEdgeOfList(e)?a("v-btn",{class:t.calculateToolbarClass(e)?"white--text":"black--text",attrs:{small:"",icon:""},on:{click:function(a){t.moveCombatantDown(e)}}},[a("v-icon",[t._v("vertical_align_bottom")])],1):t._e(),a("v-btn",{class:t.calculateToolbarClass(e)?"red--text text--lighten-5":"red--text",attrs:{icon:"",small:""},on:{click:function(a){t.removeCombatant(e)}}},[a("v-icon",[t._v("delete")])],1),a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{class:t.calculateToolbarClass(e)?"white--text":"black--text",attrs:{slot:"activator",icon:"",small:""},slot:"activator"},[a("v-icon",[t._v("more_vert")])],1),a("v-list",t._l(t.menuOptions,function(n,s){return a("v-list-tile",{key:s,on:{click:function(a){t.handleMenu(n,e)}}},[a("v-list-tile-title",[t._v(t._s(n))])],1)}))],1)],1),a("v-card-text",{staticClass:"pb-0 pt-0"},[a("v-content",{attrs:{"grid-list-md":""}},[a("v-layout",{staticClass:"pt-0 mt-0 pb-0 mb-0",attrs:{"align-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"mr-3",attrs:{xs2:""}},[a("v-text-field",{attrs:{min:"0",type:"number",label:"Initiative"},model:{value:e.int,callback:function(a){t.$set(e,"int",a)},expression:"combatant.int"}})],1),a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{attrs:{min:"0",type:"number",label:"AC"},model:{value:e.ac,callback:function(a){t.$set(e,"ac",a)},expression:"combatant.ac"}})],1),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{staticClass:"mr-3",attrs:{xs2:""}},[a("v-text-field",{attrs:{min:"0",type:"number",label:"Save"},model:{value:e.spellSpave,callback:function(a){t.$set(e,"spellSpave",a)},expression:"combatant.spellSpave"}})],1),a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{attrs:{min:"0",type:"number",label:"Perception"},model:{value:e.passivePerception,callback:function(a){t.$set(e,"passivePerception",a)},expression:"combatant.passivePerception"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-checkbox",{staticClass:"mt-0 pt-0 mb-0 pb-0",attrs:{label:"Concentration"},model:{value:e.isConcentrating,callback:function(a){t.$set(e,"isConcentrating",a)},expression:"combatant.isConcentrating"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-select",{staticClass:"mt-0 pt-0",attrs:{items:t.conditions,label:"Conditions",multiple:"",chips:"",clearable:""},model:{value:e.conditions,callback:function(a){t.$set(e,"conditions",a)},expression:"combatant.conditions"}})],1)],1)],1)],1)],1)}))],1):t._e()},Y=[],Z={data:function(){return{conditions:["Blinded","Charmed","Deafened","Fatigued","Frightened","Grappled","Incapacitated","Invisible","Paralyzed","Petrified","Poisoned","Prone","Restrained","Stunned","Unconscious","Exhaustion 1","Exhaustion 2","Exhaustion 3","Exhaustion 4","Exhaustion 5","Exhaustion 6"],menuOptions:["Export"]}},props:{fullList:{type:Array},turn:{type:Number}},methods:{calculateToolbarClass:function(t){return this.turn==this.fullList.indexOf(t)},removeCombatant:function(t){this.$emit("removeCombatant",t)},isEdgeOfList:function(t){return 0==this.fullList.indexOf(t)?-1:this.fullList.indexOf(t)==this.fullList.length-1?1:0},moveCombatantDown:function(t){this.$emit("moveCombatantDown",t)},moveCombatantUp:function(t){this.$emit("moveCombatantUp",t)},handleMenu:function(t,e){switch(t.toLowerCase()){case"export":this.exportCombatant(e);break}},exportCombatant:function(t){this.$emit("export",t)}}},tt=Z,et=(a("24f7"),Object(U["a"])(tt,X,Y,!1,null,null,null));et.options.__file="CombatantList.vue";var at=et.exports,nt={data:function(){return{name:"Initiative Tracker",fullList:[],savedCombatants:[],showForm:!1,turn:0,needsSort:!0,round:0,confirmingReset:!1,snackbar:!1,snackBarText:""}},watch:{turn:function(){var t=document.getElementById("combatant-".concat(this.fullList[this.turn].name)).offsetTop-150;window.scroll({top:t,behavior:"smooth"})}},components:{Lineup:G,AddForm:Q,CombatantList:at},methods:{calculateToolbarClass:function(t){return this.turn==this.fullList.indexOf(t)},incrementTurn:function(){this.turn==this.fullList.length-1||0==this.fullList.length?(this.turn=0,this.round++):this.turn++},decrementTurn:function(){0==this.turn?(this.turn=this.fullList.length-1,0!==this.round&&this.round--):this.turn--},sortList:function(){this.fullList.sort(function(t,e){return e.int-t.int}),this.needsSort=!1},addCombatant:function(t){t["id"]=this.createId(),this.fullList.push(t),this.sortList(),this.procSnackbar("Added ".concat(t.name))},clearCombatantForm:function(){this.showForm=!1},removeCombatant:function(t){this.fullList.indexOf(t)==this.fullList.length-1&&(this.turn=this.fullList.length-2),this.fullList.splice(this.fullList.indexOf(t),1),this.sortList(),this.procSnackbar("Removed ".concat(t.name))},getNext:function(){return this.turn==this.fullList.length-1?this.fullList[0].name:this.fullList[this.turn+1].name},savePlayers:function(){var t=this.fullList.filter(function(t){return t.isPlayer});window.localStorage.setItem("InitTrackerSave",JSON.stringify(t))},autoSave:function(){this.savePlayers(),this.procSnackbar("Automaticaly Saved Data (~‾▿‾)~")},moveCombatantDown:function(t){var e=this.fullList.indexOf(t),a=this.fullList[e];this.fullList[e]=this.fullList[e+1],this.fullList[e+1]=a,this.fullList.unshift()},moveCombatantUp:function(t){var e=this.fullList.indexOf(t),a=this.fullList[e];this.fullList[e]=this.fullList[e-1],this.fullList[e-1]=a,this.fullList.unshift()},reset:function(){this.procSnackbar("Combat Rounds Reset"),this.turn=0,this.round=0,this.confirmingReset=!1},procSnackbar:function(t){this.snackBarText=t,this.snackbar=!0},exportCombatant:function(t){this.savedCombatants.push(t),window.localStorage.setItem("InitTrackerExportedCombatants",JSON.stringify(this.savedCombatants)),this.procSnackbar("Saved ".concat(t.name))},deleteSaved:function(t){this.savedCombatants.splice(this.savedCombatants.indexOf(t),1),this.procSnackbar("Deleted Saved ".concat(t.name)),window.localStorage.setItem("InitTrackerExportedCombatants",JSON.stringify(this.savedCombatants))},createId:function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}},created:function(){var t=this;if(window.localStorage.getItem("InitTrackerSave")){var e=JSON.parse(window.localStorage.getItem("InitTrackerSave"));e.filter(function(t){return!t.id}).forEach(function(e){return e["id"]=t.createId()}),this.fullList=e}window.localStorage.getItem("InitTrackerExportedCombatants")?this.savedCombatants=JSON.parse(window.localStorage.getItem("InitTrackerExportedCombatants")):window.localStorage.setItem("InitTrackerExportedCombatants",JSON.stringify([]))},mounted:function(){this.sortList(),setInterval(this.autoSave,12e4)}},st=nt,it=(a("034f"),Object(U["a"])(st,D,V,!1,null,null,null));it.options.__file="App.vue";var ot=it.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(ot)}}).$mount("#app")},"72db":function(t,e,a){},a034:function(t,e,a){},ab84:function(t,e,a){},b1f3:function(t,e,a){"use strict";var n=a("a034"),s=a.n(n);s.a},c21b:function(t,e,a){}});
//# sourceMappingURL=app.bbc0301e.js.map