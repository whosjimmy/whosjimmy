import{_ as C,o as r,c as d,b as a,k as m,d as o,e as n,g as i,Q as T,U as g,f as F,m as h,u as k,a as _,X as b,w as P,Y as w,Z as L,$ as N,O as B,L as v,a0 as V}from"./CSEihjz1.js";import{u as D}from"./NFWHnx46.js";import{u as A}from"./EzZ34dbq.js";const H={props:{loading:{type:Boolean,required:!0}}},U={key:0,class:"loader-overlay"};function O(s,t,u,p,l,c){return u.loading?(r(),d("div",U,t[0]||(t[0]=[a("div",{class:"loader"},null,-1)]))):m("",!0)}const E=C(H,[["render",O],["__scopeId","data-v-ce3f0995"]]),M={class:"navbar navbar-expand-md navbar-light bg-light"},W={class:"navbar-nav"},z={key:0,class:"navbar navbar-expand-md navbar-light bg-light"},G={key:1,class:"navbar navbar-expand-md navbar-light bg-light"};function j(s,t,u,p,l,c){const e=F;return r(),d("div",null,[a("nav",M,[o(e,{class:"navbar-brand",to:"/Admin/Home"},{default:n(()=>t[1]||(t[1]=[i("Home")])),_:1}),a("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[0]||(t[0]=f=>l.visible=!l.visible)},t[2]||(t[2]=[a("span",{class:"navbar-toggler-icon"},null,-1)])),a("div",{class:T(["navbar-collapse",l.visible?"":"collapse"]),id:"navbarNavDropdown"},[a("ul",W,[o(e,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:"/Admin/Bio"},{default:n(()=>t[3]||(t[3]=[i("Bio")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/Portfolio"},{default:n(()=>t[4]||(t[4]=[i("Portfolio ")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/ForSale"},{default:n(()=>t[5]||(t[5]=[i("For Sale")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:"/Admin/Stuff"},{default:n(()=>t[6]||(t[6]=[i("Cool Stuff")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:"/Admin/Contact"},{default:n(()=>t[7]||(t[7]=[i("Contact Us")])),_:1})])],2)]),(s._.provides[g]||s.$route).path.startsWith("/Admin/Portfolio")?(r(),d("nav",z,[o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/Portfolio/Clocks"},{default:n(()=>t[8]||(t[8]=[i("Clocks")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/Portfolio/Machinery"},{default:n(()=>t[9]||(t[9]=[i("Machinery")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/Portfolio/Celebs"},{default:n(()=>t[10]||(t[10]=[i("Celebs")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/Portfolio/Truck"},{default:n(()=>t[11]||(t[11]=[i("Truck")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/Portfolio/Film"},{default:n(()=>t[12]||(t[12]=[i("Film")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/Portfolio/Videos"},{default:n(()=>t[13]||(t[13]=[i("Videos")])),_:1})])):m("",!0),(s._.provides[g]||s.$route).path.startsWith("/Admin/ForSale")?(r(),d("nav",G,[o(e,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:"/Admin/ForSale"},{default:n(()=>t[14]||(t[14]=[i("For Sale")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:"/Admin/Stuff"},{default:n(()=>t[15]||(t[15]=[i("Cool Stuff")])),_:1}),o(e,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:"/Admin/Contact"},{default:n(()=>t[16]||(t[16]=[i("Contact Us")])),_:1})])):m("",!0)])}const q={data(){return{visible:!1,isAuth:!1}},computed:{...h(k,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(s){this.isAuth=s}},mounted(){this.isAuth=this.isAuthenticated},methods:{..._(k,{signOut:"signOut"})}},I=C(q,[["render",j]]),Q={data(){return{isChecked:!1,isCheckedTracking:!1}},mounted(){b("consentChecked").value&&(this.isChecked=!0)},methods:{..._(A,["setTrackingCookiesEnabled"]),handleConsentChecked(){const s=b("consentChecked");s.value="true"},handleFunctionalCookies(s){const t=b("functionalCookies");t.value=s},handleTrackingCookies(s){const t=b("trackingCookies");t.value=s,this.setTrackingCookiesEnabled(s)},acceptAll(){this.handleFunctionalCookies("true"),this.handleTrackingCookies("true"),this.handleConsentChecked(),this.isChecked=!0},acceptCustom(){this.handleFunctionalCookies("true"),this.isCheckedTracking&&this.handleTrackingCookies("true"),this.handleConsentChecked(),this.isChecked=!0}}},R={key:0,class:"cookie-consent"},X={class:"row"},Y={class:"col text-left"},Z={class:"row"},J={class:"col text-right"},K={class:"col text-left"};function tt(s,t,u,p,l,c){return l.isChecked?m("",!0):(r(),d("div",R,[t[5]||(t[5]=a("p",null," This website uses cookies to ensure you get the best experience on our website. ",-1)),a("div",X,[t[4]||(t[4]=a("div",{class:"col text-right"},[a("input",{type:"checkbox",id:"functionalCookies",disabled:"",checked:""}),a("label",{for:"functionalCookies"},"Functional")],-1)),a("div",Y,[P(a("input",{type:"checkbox",id:"trackingCookies","onUpdate:modelValue":t[0]||(t[0]=e=>l.isCheckedTracking=e)},null,512),[[w,l.isCheckedTracking]]),t[3]||(t[3]=a("label",{for:"trackingCookies"},"Tracking",-1))])]),a("div",Z,[a("div",J,[a("button",{class:"btn btn-secondary",onClick:t[1]||(t[1]=(...e)=>c.acceptCustom&&c.acceptCustom(...e))}," Accept Custom ")]),a("div",K,[a("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>c.acceptAll&&c.acceptAll(...e))}," Accept All ")])])]))}const et=C(Q,[["render",tt]]),ot={class:"text-center my-0 page"},at={key:1,class:"body mt-3"},st={key:2,class:"body"},nt={components:{appHeader:L,appAdminHeader:I,appFooter:N,appCookieConsent:et,appLoader:E},computed:{...h(k,{getLoading:"getLoading"})},mounted(){console.log((this._.provides[g]||this.$route).path)}},dt=Object.assign(nt,{__name:"default",setup(s){const t=k(),u=D(),p=A();return Promise.all([u.fetchDepartments(),p.fetchGeneral(),p.fetchTrackingCookie(),t.initializeAuth()]).then(()=>{t.setLoading(!1)}),(l,c)=>{const e=v("app-header"),f=v("app-admin-header"),y=V,$=v("app-loader"),x=v("app-footer"),S=v("app-cookie-consent");return r(),d("div",ot,[o(e),(l._.provides[g]||l.$route).path.startsWith("/Admin")?(r(),B(f,{key:0,class:"pt-1"})):m("",!0),l.getLoading?(r(),d("div",st,[o($,{loading:l.getLoading},null,8,["loading"])])):(r(),d("div",at,[o(y)])),o(x),o(S)])}}});export{dt as default};
