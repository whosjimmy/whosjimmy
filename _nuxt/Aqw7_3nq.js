import{W as r,u as o,X as a}from"./DbrMG13n.js";const n=r((t,u)=>{const e=o();if(!e.user&&t.path!=="/login")return a("/login");if(e.user&&t.path==="/login")return a("/admin")});export{n as default};
