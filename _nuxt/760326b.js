(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{288:function(e,t,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(85).default)("f658b1a6",content,!0,{sourceMap:!1})},289:function(e,t,o){var content=o(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(85).default)("18df088e",content,!0,{sourceMap:!1})},293:function(e,t,o){"use strict";o(288)},294:function(e,t,o){var n=o(84)((function(i){return i[1]}));n.push([e.i,".modal[data-v-ec7445ea]{background-color:rgba(0,0,0,.8);width:100%}.modal_content[data-v-ec7445ea]{background-color:#fff}.close[data-v-ec7445ea]{right:0;top:0}",""]),n.locals={},e.exports=n},295:function(e,t,o){"use strict";o(289)},296:function(e,t,o){var n=o(84)((function(i){return i[1]}));n.push([e.i,".fade-enter[data-v-1edcbcbd]{opacity:0}.fade-enter-active[data-v-1edcbcbd]{transition:opacity .5s}.fade-leave[data-v-1edcbcbd]{opacity:1}.fade-leave-active[data-v-1edcbcbd]{opacity:0;transition:opacity .5s}.imageGallery[data-v-1edcbcbd]{display:flex;flex-direction:column;height:100vh;max-height:100vh;max-width:100vw;min-height:100vh;width:100vw}.galleryImage[data-v-1edcbcbd]{flex-shrink:1;height:60vh;-o-object-fit:contain;object-fit:contain}.imageDescription[data-v-1edcbcbd]{height:40vh;overflow:scroll}",""]),n.locals={},e.exports=n},297:function(e,t,o){"use strict";var n={name:"Modal",props:{show:Boolean,customClass:String,closeCallback:Function}},l=(o(293),o(26)),c={name:"app",components:{Modal:Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal modal",class:e.customClass,style:{display:e.show?"block":"none"}},[t("div",{staticClass:"modal_content"},[t("div",{staticClass:"close"},[t("button",{staticClass:"btn btn-secondary",attrs:{title:"Close"},on:{click:function(t){return e.closeCallback()}}},[t("fab",{staticClass:"mr-2 ml-2 fa-2x",attrs:{height:"20px",icon:["fa","times"]}})],1)]),e._t("default")],2)])}),[],!1,null,"ec7445ea",null).exports},data:function(){return{show:!1,index:0,image:this.images[0]}},props:{images:{type:Array,default:function(){return[]}},cover:{type:String,default:function(){return this.images[0]}},info:{type:Array,default:function(){return[]}}},methods:{nextImage:function(){this.images.length-1>this.index?this.index++:this.index=0,this.image=this.images[this.index]},toggleModal:function(){this.show=!this.show}}},r=(o(295),Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"app"},[t("div",{on:{click:function(t){return e.toggleModal()}}},[t("img",{attrs:{src:o(291)("./".concat(e.cover)),width:"100%"}}),e._v("Click to view "+e._s(e.images.length)+" Images")]),t("Modal",e._b({},"Modal",{closeCallback:e.toggleModal,show:e.show,customClass:"custom_modal_class"},!1),[t("div",{staticClass:"imageGallery"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("img",{staticClass:"galleryImage",attrs:{src:o(291)("./".concat(e.image))},on:{click:e.nextImage}})]),t("div",{staticClass:"imageDescription"},[e._v(e._s(e.index+1)+" of "+e._s(e.images.length)),e.info[0]?t("h5",[e._v(e._s(e.info[0]))]):e._e(),e.info[1]?t("p",[e._v("("+e._s(e.info[1])+")"),t("br"),e._v(e._s(e.info[2]))]):e._e()])],1)])],1)}),[],!1,null,"1edcbcbd",null));t.a=r.exports},319:function(e,t,o){var content=o(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(85).default)("0240749e",content,!0,{sourceMap:!1})},655:function(e,t,o){"use strict";o(319)},656:function(e,t,o){var n=o(84)((function(i){return i[1]}));n.push([e.i,".hidden[data-v-9079d2a2]{visibility:hidden}.row[data-v-9079d2a2]{margin-top:10px}",""]),n.locals={},e.exports=n},675:function(e,t,o){"use strict";o.r(t);o(39),o(64),o(46);var n={components:{appGallery:o(297).a},data:function(){return{clocks:[{name:'E1 "Angela"',info:"7 Diameter X 16H ~ inches",description:"First Edition Clock built from P3, 3 units made.",images:["clocks/e1/may07all 210-1.jpg","clocks/e1/may07all 220-1.jpg","clocks/e1/may07all 202-1.jpg","clocks/e1/may07all 057.jpg","clocks/e1/may07all 054.jpg","clocks/e1/129-2911_IMG-1.jpg"]},{name:'Prototype 7 "Robo-Retro"',info:"9L X 10D X 12H ~ inches",description:"I am building 4 beautiful re-creations of the prototype featured here called Robo-Retro. They will be set on an oiled walnut base, with a clear face and a clear acrylic cover with set and reset buttons on top. The wiring will be neat and channeled in raceways (not the birds nest on the prototype) This clock is part of my \"ode to the 20th century statement, using electro-mechanical components with technology from the 1950's or older. It's an elaborate way to tell time, buy perfectly accurate by using a syncronous motor syncronized to the line frequency. The counting relays are brand new but 40 years old and obsolete, neon lights and led's for the minutes and hours and operating on a 12 hour cycle. The cost for one of these art pieces is 25,000 us dollars and 6 month delivery, a 40% deposit will secure one in your name, there are NO modern electronics in this time piece, it operates on 120 volts 50 or 60 cycle and uses 6 watts of power. This clock is made by the same head, heart and hands that created all the work featured on this site, and movie props that I'm sure you have seen. jimmy claws",images:["clocks/p7/vancouver2013a1 1841.JPG","clocks/p7/IMG_0509.JPG","clocks/p7/IMG_0511.JPG","clocks/p7/IMG_0516.JPG","clocks/p7/IMG_0519.JPG","clocks/p7/IMG_0617.JPG"]},{name:'Prototype 4 "Little Jimmy"',info:"9L X 2D X 3H ~ inches",description:'This 12 hour clock is designed and crafted by "Jimmy Claws", 4 will be built because I only have 4 of the clock movements available, they will be numbered and signed 1 through 4. The body will be one-piece, carved in walnut, smoothed and oiled, the battery will be hidden under the base and will last a year. Accuracy of the movement is tunable by you, therefore it will keep one amused for some time! The movement will NOT be enclosed, so you can see the oscillating wheel and upon first viewing one may ask "is that a clock" The price for one of these limited time pieces is 2,500 us dollars and delivery is 100 days and counting down, a 40% deposit puts your name on one. jimmy claws',images:["clocks/p4/hiatus 411.JPG","clocks/p4/IMG_0650.JPG","clocks/p4/IMG_0668.JPG","clocks/p4/IMG_0700.JPG"]},{name:'Prototype 5 "Sidewinder"',info:"7L X 3D X 3H ~ inches",description:'This clock is open production, meaning not limited, a product I will continue to offer. What will vary mostly will be the materials and the shapes of the bodies, my "jimmy screw" and pin/gear assemblies will be fairly constant. This began as p5,( please review the pictures in the p5 file in the clock gallery) and all will use a very common quartz movement, proven to be very accurate, and easy to replace .The pin gears are an old design I borrowed from a Dutch windmill. All of the screws used in "jimmy clocks" are machined on the Jimmy Mill, a 4 axis milling machine that Jimmy built, the same machine that made Wolverine\'s claws. The clear version shown is made from laminated polycarbonate and will NOT be used, instead acrylic will be used for the clear version, it\'s as clear as glass, assorted woods will also be offered and corian. The cost for these starts at 450 us dollars made in Corian, 550 in Walnut, 750 in acrylic and 1100 dollars crafted from Cocobolo, while I can get it! 4 weeks delivery Please make ordering arrangements through our e-mail for now, thanks jimmy claws',images:["clocks/p5/IMG_9123.JPG","clocks/p5/Dec.21 2010 365.JPG","clocks/p5/Dec.21 2010 370.JPG","clocks/p5/IMG_9159.JPG","clocks/p5/IMG_9163.JPG"]}]}}},l=(o(655),o(26)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"col-md-12 row"},e._l(e.clocks,(function(e){return t("div",{staticClass:"col-md-6"},[t("appGallery",{attrs:{cover:e.images[0],images:e.images,info:[e.name,e.info,e.description]}})],1)})),0),e._m(0)])}),[function(){var e=this._self._c;return e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-lg-12"},[this._v("Click on an image, to view image gallery.")])])}],!1,null,"9079d2a2",null);t.default=component.exports}}]);