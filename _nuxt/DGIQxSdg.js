import{m as i,a as l,c as m,b as o,w as c,v as d,o as p}from"./DBwfpXl7.js";import{u as r}from"./DtK9rYMb.js";import{u as g}from"./b_BOGTgr.js";const u={class:"container"},h={class:"row"},_=o("div",{class:"col-md-12"},[o("h1",null,"Admin")],-1),v={class:"col-md-12"},f={class:"col-md-12"},b=["src"],w={data(){return{image:"https://picsum.photos/200/300"}},computed:{...i(r,["general"])},methods:{...l(r,["saveGeneralItem"]),async onPhotoFileChange(n,t){const e=n.target.files[0];if(e)try{const s=await g(e,`general/${t}/${e.name}`);this.saveGeneralItem("test")}catch(s){console.error("Error uploading photo:",s)}}},mounted(){console.log("Mounted Home page"),this.image=this.general[0].cover||"https://firebasestorage.googleapis.com/v0/b/who-s-jimmy.appspot.com/o/general%2Fcover%2FJIMMY_CLAWS.jpg?alt=media&token=95eb5710-bb73-4de5-b635-d0e5a4937889"}},I=Object.assign(w,{__name:"Home",setup(n){return(t,e)=>{var s;return p(),m("div",u,[o("div",h,[_,o("div",v,[c(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>t.image=a)},null,512),[[d,t.image]])]),o("div",f,[o("img",{src:(s=t.general[0])==null?void 0:s.cover},null,8,b),o("input",{type:"file",onChange:e[1]||(e[1]=a=>t.onPhotoFileChange(a,"cover"))},null,32)])])])}}});export{I as default};
