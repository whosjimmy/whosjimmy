import{_ as l,m as u,a as m,c as r,b as t,d as n,e as d,u as i,f as h,o as p,g as c,p as g,h as v}from"./DBwfpXl7.js";const f=s=>(g("data-v-5e85033a"),s=s(),v(),s),S={class:"container"},x=f(()=>t("div",{class:"row"},[t("div",{class:"col-md-12"},[t("h1",null,"Admin")])],-1)),A={class:"row"},O={class:"col-md"},w={class:"col-md"},k={class:"row"},I={class:"col-md-12"},b={computed:{...u(i,{user:"getUser",isAuthenticated:"isAuthenticated"})},methods:{...m(i,["signOut"]),handleSignOut(){this.signOut(),this.$router.push("/login")}}},B=Object.assign(b,{__name:"index",setup(s){return(e,o)=>{const a=h;return p(),r("div",S,[x,t("div",A,[t("div",O,[n(a,{to:"/Admin/Home"},{default:d(()=>[c("Home")]),_:1})]),t("div",w,[n(a,{to:"/Admin/Portfolio/Film"},{default:d(()=>[c("Film")]),_:1})])]),t("div",k,[t("div",I,[t("button",{onClick:o[0]||(o[0]=(..._)=>e.handleSignOut&&e.handleSignOut(..._))},"Sign Out")])])])}}}),V=l(B,[["__scopeId","data-v-5e85033a"]]);export{V as default};
