(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{288:function(e,t,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(85).default)("f658b1a6",content,!0,{sourceMap:!1})},289:function(e,t,o){var content=o(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(85).default)("18df088e",content,!0,{sourceMap:!1})},293:function(e,t,o){"use strict";o(288)},294:function(e,t,o){var n=o(84)((function(i){return i[1]}));n.push([e.i,".modal[data-v-ec7445ea]{background-color:rgba(0,0,0,.8);width:100%}.modal_content[data-v-ec7445ea]{background-color:#fff}.close[data-v-ec7445ea]{right:0;top:0}",""]),n.locals={},e.exports=n},295:function(e,t,o){"use strict";o(289)},296:function(e,t,o){var n=o(84)((function(i){return i[1]}));n.push([e.i,".fade-enter[data-v-1edcbcbd]{opacity:0}.fade-enter-active[data-v-1edcbcbd]{transition:opacity .5s}.fade-leave[data-v-1edcbcbd]{opacity:1}.fade-leave-active[data-v-1edcbcbd]{opacity:0;transition:opacity .5s}.imageGallery[data-v-1edcbcbd]{display:flex;flex-direction:column;height:100vh;max-height:100vh;max-width:100vw;min-height:100vh;width:100vw}.galleryImage[data-v-1edcbcbd]{flex-shrink:1;height:60vh;-o-object-fit:contain;object-fit:contain}.imageDescription[data-v-1edcbcbd]{height:40vh;overflow:scroll}",""]),n.locals={},e.exports=n},297:function(e,t,o){"use strict";var n={name:"Modal",props:{show:Boolean,customClass:String,closeCallback:Function}},l=(o(293),o(26)),c={name:"app",components:{Modal:Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal modal",class:e.customClass,style:{display:e.show?"block":"none"}},[t("div",{staticClass:"modal_content"},[t("div",{staticClass:"close"},[t("button",{staticClass:"btn btn-secondary",attrs:{title:"Close"},on:{click:function(t){return e.closeCallback()}}},[t("fab",{staticClass:"mr-2 ml-2 fa-2x",attrs:{height:"20px",icon:["fa","times"]}})],1)]),e._t("default")],2)])}),[],!1,null,"ec7445ea",null).exports},data:function(){return{show:!1,index:0,image:this.images[0]}},props:{images:{type:Array,default:function(){return[]}},cover:{type:String,default:function(){return this.images[0]}},info:{type:Array,default:function(){return[]}}},methods:{nextImage:function(){this.images.length-1>this.index?this.index++:this.index=0,this.image=this.images[this.index]},toggleModal:function(){this.show=!this.show}}},r=(o(295),Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"app"},[t("div",{on:{click:function(t){return e.toggleModal()}}},[t("img",{attrs:{src:o(291)("./".concat(e.cover)),width:"100%"}}),e._v("Click to view "+e._s(e.images.length)+" Images")]),t("Modal",e._b({},"Modal",{closeCallback:e.toggleModal,show:e.show,customClass:"custom_modal_class"},!1),[t("div",{staticClass:"imageGallery"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("img",{staticClass:"galleryImage",attrs:{src:o(291)("./".concat(e.image))},on:{click:e.nextImage}})]),t("div",{staticClass:"imageDescription"},[e._v(e._s(e.index+1)+" of "+e._s(e.images.length)),e.info[0]?t("h5",[e._v(e._s(e.info[0]))]):e._e(),e.info[1]?t("p",[e._v("("+e._s(e.info[1])+")"),t("br"),e._v(e._s(e.info[2]))]):e._e()])],1)])],1)}),[],!1,null,"1edcbcbd",null));t.a=r.exports},320:function(e,t,o){var content=o(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(85).default)("3b216bd8",content,!0,{sourceMap:!1})},657:function(e,t,o){"use strict";o(320)},658:function(e,t,o){var n=o(84)((function(i){return i[1]}));n.push([e.i,".hidden[data-v-a73f26c2]{visibility:hidden}.card[data-v-a73f26c2]{margin-top:20px}",""]),n.locals={},e.exports=n},677:function(e,t,o){"use strict";o.r(t);o(46);var n={data:function(){return{celebrities:[{name:"Will Smith",role:"Del Spooner",movie:"I, Robot",images:["film/i_robot/111-1102_IMG.jpg"]},{name:"Bill(William) Terezakis",role:"Makeup Department",movie:"I, Robot",images:["film/i_robot/110-1095_IMG.JPG"]},{name:"Julie Andrews",role:"Lily",movie:"Tooth Fairy",images:["film/tooth_fairy/IMG_0045-1.jpg"]},{name:"Dwayne Johnson",role:"Derek",movie:"Tooth Fairy",images:["film/tooth_fairy/IMG_2012.JPG"]},{name:"Alan Cumming",role:"Kurt Wagner / Nightcrawler",movie:"X-Men 2",images:["film/x-men_2/103-0382_IMG.jpg"]},{name:"Kelly Hu",role:"Yuriko Oyama / Lady Deathstrike",movie:"X-Men 2",images:["film/x-men_2/104-0493_IMG-1.jpg","film/x-men_2/104-0494_IMG.JPG","film/x-men_2/106-0611_IMG.JPG"]},{name:"Hugh Jackman",role:"Wolverine",movie:"X-Men 2",images:["film/x-men_2/107-0729_IMG_2.jpg"]},{name:"Bryan Singer",role:"Director",movie:"X-Men 2",images:["film/x-men_2/105-0588_IMG.JPG"]},{name:"Ashley Bell",role:"Trainee Assistant Director",movie:"X-Men 2",images:["film/x-men_2/106-0677_IMG.JPG"]}]}},components:{appGallery:o(297).a}},l=(o(657),o(26)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},e._l(e.celebrities,(function(e){return t("div",{staticClass:"col-md-4"},[t("appGallery",{attrs:{cover:e.images[0],images:e.images,info:[e.name,e.role,e.movie]}})],1)})),0),e._m(0)])}),[function(){var e=this._self._c;return e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card"},[this._v("Click on an image, to view image gallery.")])])])}],!1,null,"a73f26c2",null);t.default=component.exports}}]);