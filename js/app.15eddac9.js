(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},"186c":function(t,e,a){},2393:function(t,e,a){t.exports=a.p+"img/ohno.3008d52f.jpg"},3522:function(t,e,a){},3650:function(t,e,a){t.exports=a.p+"img/clown-meme.71229fd3.jpg"},"48e4":function(t,e,a){"use strict";var r=a("186c"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navbar"),a("router-view"),a("footerend")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-toolbar",{attrs:{text:""}},[a("v-btn",{attrs:{text:"",to:"/"}},[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light display-1"},[t._v("Clownfactory")])])],1),a("v-btn",{attrs:{text:"",color:"gray",to:"/shop"}},[a("span",[t._v("Shop")])]),a("v-btn",{attrs:{text:"",color:"gray",to:"/about"}},[a("span",[t._v("About Us")])]),a("v-btn",{attrs:{text:"",color:"gray"},on:{click:function(e){t.dialog2=!0}}},[a("v-badge",{attrs:{color:"pink",content:t.cartItems.length}},[a("v-icon",[t._v("mdi-cart")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[t._v("Shopping cart")]),t.cartItems.length>0?a("v-list",{attrs:{"three-line":""}},t._l(t.cartItems,(function(e,r){return a("div",{key:r},[a("v-divider"),a("v-list-item",{staticClass:"pa-6"},[a("v-img",{staticClass:"outlined",attrs:{"max-width":"100px",src:e.image}}),a("v-list-item-content",[a("v-list-item-title",{staticClass:"ml-5",domProps:{innerHTML:t._s(e.name)}}),a("div",{staticClass:"text-right"},[t._v(" "+t._s(e.price)+" "),a("v-btn",{attrs:{icon:"",color:"pink"},on:{click:function(e){return t.removeItem(r)}}},[a("v-icon",[t._v("mdi-close-circle")])],1)],1)],1)],1)],1)})),0):a("div",{staticClass:"text-center"},[t._v("You currently have no items selected :(")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog2=!1}}},[t._v("Close")])],1)],1)],1)],1)},o=[],c={data:function(){return{dialog2:!1}},computed:{cartItems:function(){return this.$store.state.cartItems}},methods:{removeItem:function(t){this.$store.commit("removeItem",t)}}},l=c,d=(a("48e4"),a("2877")),u=a("6544"),v=a.n(u),m=a("4ca6"),p=a("8336"),f=a("b0af"),g=a("99d9"),h=a("169a"),b=a("ce7e"),_=a("132d"),w=a("adda"),y=a("8860"),C=a("da13"),x=a("5d23"),V=a("71d9"),k=a("2a7f"),I=Object(d["a"])(l,i,o,!1,null,null,null),j=I.exports;v()(I,{VBadge:m["a"],VBtn:p["a"],VCard:f["a"],VCardActions:g["a"],VCardTitle:g["d"],VDialog:h["a"],VDivider:b["a"],VIcon:_["a"],VImg:w["a"],VList:y["a"],VListItem:C["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VToolbar:V["a"],VToolbarTitle:k["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"blue justify-center"},[a("strong",{staticClass:"subheading"},[t._v("Follow us on all the popular network-thingies!")]),t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)}))],2),a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Clownfactory (We are not really a thing, sorry!)")])])],1)],1)},T=[],S={name:"footerend",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},P=S,A=a("553a"),L=Object(d["a"])(P,O,T,!1,null,null,null),R=L.exports;v()(L,{VBtn:p["a"],VCard:f["a"],VCardText:g["c"],VCardTitle:g["d"],VFooter:A["a"],VIcon:_["a"]});var $={name:"App",components:{navbar:j,footerend:R},data:function(){return{}}},E=$,M=(a("034f"),a("7496")),D=Object(d["a"])(E,n,s,!1,null,null,null),F=D.exports;v()(D,{VApp:M["a"]});var B=a("8c4f"),G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-parallax",{staticClass:"mt-2",attrs:{dark:"",src:a("a04e")}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"display-3 font-weight-black text-center"},[t._v("Clownfactory")]),r("h4",{staticClass:"subheading text-center"},[t._v("Get your everyday Clown needs!")])])],1)],1),r("sectiondesc"),r("v-carousel",{attrs:{cycle:"",interval:3e3}},t._l(t.items,(function(e,a){return r("v-carousel-item",{key:a,attrs:{src:e.src,"reverse-transition":"fade-transition",transition:"fade-transition"}},[r("v-row",{staticClass:"fill-height",attrs:{align:"end",justify:"center"}},[r("div",{staticClass:"display-2 mb-12 font-weight-medium white--text"},[t._v(t._s(e.slidemsg))])])],1)})),1)],1)},H=[],Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"fill-height mb-12",attrs:{align:"stretch",justify:"start"}},[r("v-col",{staticClass:"pl-10",attrs:{cols:"4"}},[r("v-img",{staticClass:"grey darken-4",attrs:{src:a("9b83"),height:"250"}})],1),r("v-col",{attrs:{cols:"8"}},[r("v-list",[r("v-subheader",[t._v("Tested by Professionals")]),r("v-list-item-group",{attrs:{color:"primary"}},[r("v-list-item",{attrs:{link:!1}},[r("v-list-item-icon",[r("v-icon",{attrs:{"x-large":""}},[t._v("mdi-check")])],1),r("v-list-item-content",[r("p",[t._v("Here at CLOWNFACTORY we are proud to be able to say that ALL our Products are tested by professionals.")])])],1)],1)],1)],1)],1),r("v-row",{staticClass:"fill-height",attrs:{align:"stretch",justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("v-list",[r("v-subheader",[t._v("Pay with what is available to you!")]),r("v-list-item-group",{attrs:{color:"primary"}},[r("v-list-item",{attrs:{link:!1}},[r("v-list-item-icon",[r("v-icon",{attrs:{"x-large":""}},[t._v("mdi-check")])],1),r("v-list-item-content",[r("p",[t._v("As of the 20th January 2020 we are accteping Monopoly Money!")])])],1)],1)],1)],1),r("v-col",{staticClass:"pl-10",attrs:{cols:"4"}},[r("v-img",{staticClass:"grey darken-4",attrs:{src:a("f65a"),height:"250"}})],1)],1)],1)},N=[],W={},J=W,z=(a("8726"),a("62ad")),Z=a("a523"),K=a("1baa"),U=a("34c3"),q=a("0fd9"),Q=a("e0c7"),X=Object(d["a"])(J,Y,N,!1,null,"4f6abf3a",null),tt=X.exports;v()(X,{VCol:z["a"],VContainer:Z["a"],VIcon:_["a"],VImg:w["a"],VList:y["a"],VListItem:C["a"],VListItemContent:x["a"],VListItemGroup:K["a"],VListItemIcon:U["a"],VRow:q["a"],VSubheader:Q["a"]});var et={name:"Home",components:{sectiondesc:tt},data:function(){return{items:[{src:a("a04e"),slidemsg:"Professional Clowns"},{src:a("b530"),slidemsg:"Great Deals!"},{src:a("6ad0"),slidemsg:"Clowns are awesome!"},{src:a("2393"),slidemsg:"Holup!"}]}}},at=et,rt=a("5e66"),nt=a("3e35"),st=a("8b9c"),it=Object(d["a"])(at,G,H,!1,null,null,null),ot=it.exports;v()(it,{VCarousel:rt["a"],VCarouselItem:nt["a"],VCol:z["a"],VParallax:st["a"],VRow:q["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},t._l(t.shoppingItems,(function(e,r){return a("v-card",{key:r,staticClass:"my-12 mx-5",attrs:{"max-width":"400","min-width":"400"}},[a("v-img",{attrs:{height:"250",src:e.image}}),a("v-card-title",[t._v(" "+t._s(e.name)+" "),a("v-spacer"),a("div",{staticClass:"text-right"},[t._v(t._s(e.price))])],1),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:e.rating,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ml-4"},[t._v(t._s(e.rating)+" "+t._s(e.numberOfRatings))])],1)],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",{staticClass:"font-weight-medium"},[a("div",[t._v(t._s(e.description))])]),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:function(e){return t.addItem(r)}}},[t._v("add to cart")])],1)],1)})),1)],1)},lt=[],dt={data:function(){return{}},computed:{shoppingItems:function(){return this.$store.state.shoppingItems}},methods:{addItem:function(t){this.$store.commit("addItem",t)}}},ut=dt,vt=(a("eaf3"),a("1d4d")),mt=a("2fa4"),pt=Object(d["a"])(ut,ct,lt,!1,null,"90ccf14c",null),ft=pt.exports;v()(pt,{VBtn:p["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VContainer:Z["a"],VDivider:b["a"],VImg:w["a"],VRating:vt["a"],VRow:q["a"],VSpacer:mt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{justify:"center"}},[a("h1",[t._v("Contact us!")])]),a("v-row",{attrs:{dense:"",justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-title",{staticClass:"headline"},[t._v("Email")]),a("v-card-subtitle",[t._v("Contact us by electronic mail!")]),a("v-card-text",{staticClass:"font-weight-black"},[t._v(" You can reach us by mail with the following address: "),a("hr"),a("p",{staticClass:"font-weight-black"},[t._v("Testerson667@gmail.com")])])],1)],1)],1),a("v-row",{attrs:{dense:"",justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-title",{staticClass:"headline"},[t._v("Address")]),a("v-card-subtitle",[t._v("Contact us")]),a("v-simple-table",{attrs:{dense:""}},[[a("tbody",[a("tr",[a("td",[t._v("Street")]),a("td",[t._v("90 Five Points")])]),a("tr",[a("td",[t._v("City")]),a("td",[t._v("STOCKTON")])]),a("tr",[a("td",[t._v("State")]),a("td",[t._v("IA")])]),a("tr",[a("td",[t._v("State Full")]),a("td",[t._v("Iowa")])]),a("tr",[a("td",[t._v("Zip Code")]),a("td",[t._v("52769")])]),a("tr",[a("td",[t._v("Phone Number")]),a("td",[t._v("443-290-8898")])])])]],2),a("v-card-text",{staticClass:"font-weight-black"},[t._v(" You can reach us on weekdays "),a("hr"),t._v("9am - 5pm ")])],1)],1)],1),a("v-row",{attrs:{dense:"",justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"white"}},[a("v-card-title",{staticClass:"headline"},[t._v("About us")]),a("v-card-subtitle",[t._v("Maybe not")]),a("v-card-text",{staticClass:"font-weight-black"},[t._v(" Please consider that this address is not real, please do not contact this address for real. Everything else is also not real. We are not selling clown accessories or any other item or service. Do not enter any personal information, as it will reach nothing in nowhere. "),a("hr"),t._v("Please consider visiting all the cool artists down below! Because of them we have some really good photos. "),a("br"),a("a",{attrs:{href:"http://www.freepik.com"}},[t._v("Designed by Asier_Relampagoestudio / Freepik")])])],1)],1)],1)],1)},ht=[],bt={},_t=bt,wt=(a("a200"),a("1f4f")),yt=Object(d["a"])(_t,gt,ht,!1,null,"cb5a0490",null),Ct=yt.exports;v()(yt,{VCard:f["a"],VCardSubtitle:g["b"],VCardText:g["c"],VCardTitle:g["d"],VCol:z["a"],VContainer:Z["a"],VRow:q["a"],VSimpleTable:wt["a"]}),r["a"].use(B["a"]);var xt=[{path:"/",name:"Home",component:ot},{path:"/shop",name:"Shop",component:ft},{path:"/about",name:"About",component:Ct}],Vt=new B["a"]({routes:xt}),kt=Vt,It=(a("a434"),a("2f62"));r["a"].use(It["a"]);var jt=new It["a"].Store({state:{shoppingItems:[{image:a("c71c"),name:"Clown Shoes",rating:4.5,numberOfRatings:"(413)",description:"We are experts in making clown shoes. It’s no small feat.",price:"123.49€"},{image:a("b356"),name:"Clown Nose",rating:4.2,numberOfRatings:"(201)",description:"really big red noses.",price:"4.49€"},{image:a("a87c"),name:"Clown Car",rating:4,numberOfRatings:"(143)",description:"Guaranteed to fit at least 35 clowns.",price:"not in stock"},{image:a("3650"),name:"Clown Makeup",rating:2.4,numberOfRatings:"(1337)",description:"This makeup makes sure you feel like a clown in no time!",price:"34.99€"},{image:a("ad0f"),name:"Stilts",rating:3.7,numberOfRatings:"(347)",description:"Everybody will look up to you!",price:"7.99€"}],cartItems:[]},mutations:{addItem:function(t,e){t.cartItems.push(t.shoppingItems[e])},removeItem:function(t,e){t.cartItems.splice(e,1)}},actions:{},modules:{}}),Ot=a("f309");r["a"].use(Ot["a"]);var Tt=new Ot["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:kt,store:jt,vuetify:Tt,render:function(t){return t(F)}}).$mount("#app")},"6ad0":function(t,e,a){t.exports=a.p+"img/binclown.31e49b89.jpg"},"722e":function(t,e,a){},8726:function(t,e,a){"use strict";var r=a("722e"),n=a.n(r);n.a},"8a23":function(t,e,a){},"92ce":function(t,e,a){},"9b83":function(t,e,a){t.exports=a.p+"img/clownfun.e7d7f19a.png"},a04e:function(t,e,a){t.exports=a.p+"img/OGOE8Z0.073f3df2.jpg"},a200:function(t,e,a){"use strict";var r=a("92ce"),n=a.n(r);n.a},a87c:function(t,e,a){t.exports=a.p+"img/clown-car.e0f26a3d.jpg"},ad0f:function(t,e,a){t.exports=a.p+"img/stilts.145c0e25.jpg"},b356:function(t,e,a){t.exports=a.p+"img/clown-nose.baa896b2.png"},b530:function(t,e,a){t.exports=a.p+"img/_ronald.8a9299c2.jpg"},c71c:function(t,e,a){t.exports=a.p+"img/clown-shoes.5d27a8ee.png"},eaf3:function(t,e,a){"use strict";var r=a("3522"),n=a.n(r);n.a},f65a:function(t,e,a){t.exports=a.p+"img/monopoly-money.f4c5ff5c.jpg"}});
//# sourceMappingURL=app.15eddac9.js.map