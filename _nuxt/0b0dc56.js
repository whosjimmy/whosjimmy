(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{288:function(t,e,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(85).default)("43012c62",content,!0,{sourceMap:!1})},289:function(t,e,o){var content=o(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(85).default)("18df088e",content,!0,{sourceMap:!1})},293:function(t,e,o){"use strict";o(288)},294:function(t,e,o){var c=o(84)((function(i){return i[1]}));c.push([t.i,".modal[data-v-44cca8cb]{background-color:rgba(0,0,0,.8);width:100%}.modal_content[data-v-44cca8cb]{background-color:#fff}.close[data-v-44cca8cb]{right:0;top:0}",""]),c.locals={},t.exports=c},295:function(t,e,o){"use strict";o(289)},296:function(t,e,o){var c=o(84)((function(i){return i[1]}));c.push([t.i,".fade-enter[data-v-1edcbcbd]{opacity:0}.fade-enter-active[data-v-1edcbcbd]{transition:opacity .5s}.fade-leave[data-v-1edcbcbd]{opacity:1}.fade-leave-active[data-v-1edcbcbd]{opacity:0;transition:opacity .5s}.imageGallery[data-v-1edcbcbd]{display:flex;flex-direction:column;height:100vh;max-height:100vh;max-width:100vw;min-height:100vh;width:100vw}.galleryImage[data-v-1edcbcbd]{flex-shrink:1;height:60vh;-o-object-fit:contain;object-fit:contain}.imageDescription[data-v-1edcbcbd]{height:40vh;overflow:scroll}",""]),c.locals={},t.exports=c},297:function(t,e,o){"use strict";var c={name:"Modal",props:{show:Boolean,customClass:String,closeCallback:Function}},n=(o(293),o(26)),l={name:"app",components:{Modal:Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal modal",class:t.customClass,style:{display:t.show?"block":"none"}},[e("div",{staticClass:"modal_content"},[e("div",{staticClass:"close"},[e("button",{staticClass:"btn btn-secondary",attrs:{title:"Close"},on:{click:function(e){return t.closeCallback()}}},[e("fab",{staticClass:"mr-2 ml-2 fa-2x",attrs:{height:"20px",icon:["fa","times"]}})],1)]),t._t("default")],2)])}),[],!1,null,"44cca8cb",null).exports},data:function(){return{show:!1,index:0,image:this.images[0]}},props:{images:{type:Array,default:function(){return[]}},cover:{type:String,default:function(){return this.images[0]}},info:{type:Array,default:function(){return[]}}},methods:{nextImage:function(){this.images.length-1>this.index?this.index++:this.index=0,this.image=this.images[this.index]},toggleModal:function(){this.show=!this.show}}},r=(o(295),Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("div",{on:{click:function(e){return t.toggleModal()}}},[e("img",{attrs:{src:o(291)("./".concat(t.cover)),width:"100%"}}),t._v("Click to view "+t._s(t.images.length)+" Images")]),e("Modal",t._b({},"Modal",{closeCallback:t.toggleModal,show:t.show,customClass:"custom_modal_class"},!1),[e("div",{staticClass:"imageGallery"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("img",{staticClass:"galleryImage",attrs:{src:o(291)("./".concat(t.image))},on:{click:t.nextImage}})]),e("div",{staticClass:"imageDescription"},[t._v(t._s(t.index+1)+" of "+t._s(t.images.length)),t.info[0]?e("h5",[t._v(t._s(t.info[0]))]):t._e(),t.info[1]?e("p",[t._v("("+t._s(t.info[1])+")"),e("br"),t._v(t._s(t.info[2]))]):t._e()])],1)])],1)}),[],!1,null,"1edcbcbd",null));e.a=r.exports},680:function(t,e,o){"use strict";o.r(e);var c={data:function(){return{images:["machinery/may07all 106.jpg","machinery/orton1-314.jpg"],info:["Shelby Cobra","Ignition sensor mount"]}},components:{appGallery:o(297).a}},n=o(26),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid col-lg-12"},[e("div",{staticClass:"card rounded text-center"},[e("div",{staticClass:"card-header"},[t._v("Portfolio - Custom Machinery")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"col-lg-12 text-center"},[e("appGallery",{attrs:{images:t.images,info:t.info}})],1)])]),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"row text-center"},[t("div",{staticClass:"col-lg-12"},[this._v("Click on an image, to view image gallery.")])])}],!1,null,null,null);e.default=component.exports}}]);