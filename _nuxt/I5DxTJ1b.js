import{u as d}from"./BmXJ0crG.js";import{_ as h,n as g,q as v,o as i,c as a,a as s,s as c,y as m,z as w,t as p,x as f,J as r,N as S}from"./Bs_fFaFo.js";const k={name:"Login",data(){return{email:"",password:""}},computed:{...g(d,["getAuthError"])},methods:{...v(d,["signIn"]),async handleSubmit(){await this.signIn(this.email,this.password).then(()=>{})}}},y={class:"container"},b={class:"row"},A={class:"col-md-12"},E={class:"row"},B={class:"col-md-12"},L={class:"row"},V={class:"col-md-12"},C={class:"row"},I={class:"col-md-12"},N={key:0};function U(n,t,_,l,e,u){return i(),a("div",y,[s("form",{onSubmit:t[3]||(t[3]=w((...o)=>u.handleSubmit&&u.handleSubmit(...o),["prevent"]))},[s("div",b,[s("div",A,[c(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.email=o),placeholder:"Email"},null,512),[[m,e.email]])])]),s("div",E,[s("div",B,[c(s("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.password=o),type:"password",placeholder:"Password"},null,512),[[m,e.password]])])]),s("div",L,[s("div",V,[s("button",{type:"submit",onClick:t[2]||(t[2]=(...o)=>n.login&&n.login(...o))},"Sign In")])])],32),s("div",C,[s("div",I,[n.getAuthError?(i(),a("p",N,p(n.getAuthError),1)):f("",!0)])])])}const x=h(k,[["render",U]]),D={key:1},q={__name:"Login",setup(n){const t=d();return(_,l)=>(i(),a("div",null,[r(t).isAuthenticated?(i(),a("div",D,[s("p",null,"Welcome, "+p(r(t).getUser.email),1),s("button",{onClick:l[0]||(l[0]=(...e)=>r(t).signOut&&r(t).signOut(...e))},"Logout")])):(i(),S(x,{key:0}))]))}};export{q as default};
