import{X as n,Y as i,a6 as u,Z as o,$ as h,a0 as c}from"./BGjpVWDf.js";const g=n("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{setUser(s){this.user=s},clearUser(){this.user=null},setAuthError(s){this.authError=s},async signIn({email:s,password:t}){const{$auth:a}=i(),r=u();try{const e=await o(a,s,t);this.setUser(e.user),this.setAuthError(null),r.push("/admin")}catch(e){console.error("Error signing in:",e),this.setAuthError(e.message)}},async signOut(){const{$auth:s}=i();try{await h(s),this.clearUser()}catch(t){console.error("Error signing out:",t)}},async fetchUser(s){this.setUser(s)},async fetchUserData(){const{$firestore:s}=i();if(!this.user)return;(await s.collection("users").doc(this.user.uid).get()).exists},async initializeAuth(){const{$auth:s}=i();return new Promise((t,a)=>{c(s,r=>{r?(this.fetchUser(r),t(r),this.loading=!1):(this.signOut(),t(null),this.loading=!1)})})}},getters:{getUser:s=>s.user,getAuthError:s=>s.authError,isAuthenticated:s=>!!s.user}});export{g as u};
