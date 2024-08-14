import{o as d,c as h,b as a,w as r,d as n,a as t,P as x,t as y,x as f,_ as m,n as $,q as A,L as p,p as k,e as g,X as _,s as S,Y as T,Z as D}from"./Da6CBPO0.js";import{u as v}from"./DnET9V3m.js";import{u as F}from"./Cii4gSGH.js";import{_ as N}from"./D3fOsdHN.js";const I={class:"navbar navbar-expand-md navbar-light bg-light"},j=t("span",{class:"navbar-toggler-icon"},null,-1),B=[j],O={class:"navbar-nav"},V={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},J={class:"navbar-nav ml-auto"};function P(e,o,c,b,i,l){const s=N;return d(),h("nav",I,[a(s,{class:"navbar-brand",to:"/"},{default:r(()=>[n("Who's Jimmy")]),_:1}),t("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:o[0]||(o[0]=u=>i.visible=!i.visible)},B),t("div",{class:x(["navbar-collapse",i.visible?"":"collapse"]),id:"navbarNavDropdown"},[t("ul",O,[a(s,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:r(()=>[n("Bio")]),_:1}),a(s,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:r(()=>[n("Portfolio ")]),_:1}),a(s,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:r(()=>[n("For Sale")]),_:1}),a(s,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:r(()=>[n("Cool Stuff")]),_:1}),a(s,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:r(()=>[n("Contact Us")]),_:1})])],2),i.isAuth?(d(),h("div",V,[t("ul",J,[a(s,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:r(()=>[n(y(e.user?e.user.email:""),1)]),_:1}),t("button",{class:"btn btn-light nav-item",tag:"li",onClick:o[1]||(o[1]=(...u)=>e.signOut&&e.signOut(...u))},"Logout")])])):f("",!0)])}const U={data(){return{visible:!1,isAuth:!1}},computed:{...$(v,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(e){this.isAuth=e}},mounted(){this.isAuth=this.isAuthenticated},methods:{...A(v,{signOut:"signOut"})}},q=m(U,[["render",P]]),z=e=>(k("data-v-063d9b19"),e=e(),g(),e),H={class:"page-footer font-small bg-light navbar-fixed-bottom"},L={class:"container"},W={class:"py-3 pt-3"},E={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},M={href:"https://www.facebook.com/whosjimmy"},X={href:"https://twitter.com/jimmyclaws"},Y={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"},Z=z(()=>t("div",{class:"footer-copyright text-center font-small"},[t("div",null,[n("© 2024 Copyright: "),t("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),t("div",null,"Disclaimer: All images are copyright to their respective owners."),t("div",null,[n("A "),t("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),n(" creation.")])],-1));function G(e,o){const c=p("font-awesome-icon");return d(),h("footer",H,[t("div",L,[t("div",W,[t("a",E,[a(c,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),t("a",M,[a(c,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),t("a",X,[a(c,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),t("a",Y,[a(c,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),Z])}const K={},Q=m(K,[["render",G],["__scopeId","data-v-063d9b19"]]),R={data(){return{isChecked:!1,isCheckedTracking:!1}},mounted(){_("consentChecked").value&&(this.isChecked=!0)},methods:{handleConsentChecked(){const e=_("consentChecked");e.value="true"},handleFunctionalCookies(e){const o=_("functionalCookies");o.value=e},handleTrackingCookies(e){const o=_("trackingCookies");o.value=e},acceptAll(){this.handleFunctionalCookies("true"),this.handleTrackingCookies("true"),this.handleConsentChecked(),this.isChecked=!0},acceptCustom(){this.handleFunctionalCookies("true"),this.isCheckedTracking&&this.handleTrackingCookies("true"),this.handleConsentChecked(),this.isChecked=!0}}},tt={key:0,class:"cookie-consent"},et=t("p",null," This website uses cookies to ensure you get the best experience on our website. ",-1),ot={class:"row"},st=t("div",{class:"col text-right"},[t("input",{type:"checkbox",id:"functionalCookies",disabled:"",checked:""}),t("label",{for:"functionalCookies"},"Functional")],-1),at={class:"col text-left"},nt=t("label",{for:"trackingCookies"},"Tracking",-1),it={class:"row"},ct={class:"col text-right"},lt={class:"col text-left"};function rt(e,o,c,b,i,l){return i.isChecked?f("",!0):(d(),h("div",tt,[et,t("div",ot,[st,t("div",at,[S(t("input",{type:"checkbox",id:"trackingCookies","onUpdate:modelValue":o[0]||(o[0]=s=>i.isCheckedTracking=s)},null,512),[[T,i.isCheckedTracking]]),nt])]),t("div",it,[t("div",ct,[t("button",{class:"btn btn-secondary",onClick:o[1]||(o[1]=(...s)=>l.acceptCustom&&l.acceptCustom(...s))}," Accept Custom ")]),t("div",lt,[t("button",{class:"btn btn-primary",onClick:o[2]||(o[2]=(...s)=>l.acceptAll&&l.acceptAll(...s))}," Accept All ")])])]))}const dt=m(R,[["render",rt]]),C=e=>(k("data-v-343018c9"),e=e(),g(),e),ht={class:"text-center my-0"},ut=C(()=>t("br",null,null,-1)),_t={class:"body"},pt=C(()=>t("br",null,null,-1)),mt={components:{appHeader:q,appFooter:Q,appCookieConsent:dt}},vt=Object.assign(mt,{__name:"default",setup(e){const o=v(),c=F();return o.initializeAuth(),c.fetchDepartments(),(b,i)=>{const l=p("app-header"),s=D,u=p("app-footer"),w=p("app-cookie-consent");return d(),h("div",ht,[a(l),ut,t("div",_t,[a(s)]),pt,a(u),a(w)])}}}),Ct=m(vt,[["__scopeId","data-v-343018c9"]]);export{Ct as default};