const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C8IGIPkf.js","./Bio.BaV4dkSc.css","./CDoyDTVs.js","./DbO7Qflu.js","./index.32WehS37.css","./Cfs8QTwN.js","./BgDxab8W.js","./Login.Dn_TlE6G.css","./CzGsjYWR.js","./DgAMA72h.js","./Gallery.CL3VVAgl.css","./BZv8OBVd.js","./Contact.Bq_tjq4M.css","./HWBVlx5O.js","./irYvnCtL.js","./-OF2jAq5.js","./Bq_dFLMG.js","./index.ASLudlX-.css","./CFlHVQek.js","./Users.xD9FK16m.css","./Blwa6xGm.js","./index.EfND0qCY.css","./DndfebFh.js","./Clocks.CaZdgkmv.css","./DrZuGtCp.js","./JlgTKIHa.js","./Film.DB_E1xEQ.css","./D09o-XeU.js","./index.SWL0PKs2.css","./-ZQPpinh.js","./DFQULkBr.js","./Clocks.Dmp-oUCd.css","./c1nX7MOG.js","./Videos.D7M80Y6w.css","./WeMAeTJs.js","./Cmgt_wyW.js","./ClxmxeWW.js","./Film.CyscwsSS.css","./CG9lRFp0.js","./Celebrities.BS01JuXe.css","./BOUFlBPJ.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const je={},vi=[],Fn=()=>{},vI=()=>!1,Ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),id=t=>t.startsWith("onUpdate:"),mt=Object.assign,od=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},EI=Object.prototype.hasOwnProperty,xe=(t,e)=>EI.call(t,e),ce=Array.isArray,Ei=t=>Ji(t)==="[object Map]",Qi=t=>Ji(t)==="[object Set]",$m=t=>Ji(t)==="[object Date]",wI=t=>Ji(t)==="[object RegExp]",pe=t=>typeof t=="function",Qe=t=>typeof t=="string",Sn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",ad=t=>(Ue(t)||pe(t))&&pe(t.then)&&pe(t.catch),Fv=Object.prototype.toString,Ji=t=>Fv.call(t),bI=t=>Ji(t).slice(8,-1),Uv=t=>Ji(t)==="[object Object]",ld=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=sd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},TI=/-(\w)/g,mn=Dc(t=>t.replace(TI,(e,n)=>n?n.toUpperCase():"")),AI=/\B([A-Z])/g,Ws=Dc(t=>t.replace(AI,"-$1").toLowerCase()),Lc=Dc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ju=Dc(t=>t?`on${Lc(t)}`:""),Gr=(t,e)=>!Object.is(t,e),bi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Jl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$v=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let jm;const Mc=()=>jm||(jm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?PI(r):Vc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Ue(t))return t}const II=/;(?![^(]*\))/g,SI=/:([^]+)/,RI=/\/\*[^]*?\*\//g;function PI(t){const e={};return t.replace(RI,"").split(II).forEach(n=>{if(n){const r=n.split(SI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pa(t){let e="";if(Qe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Pa(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p9(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Qe(e)&&(t.class=Pa(e)),n&&(t.style=Vc(n)),t}const CI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kI=sd(CI);function jv(t){return!!t||t===""}function OI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ca(t[r],e[r]);return n}function Ca(t,e){if(t===e)return!0;let n=$m(t),r=$m(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Sn(t),r=Sn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?OI(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ca(t[o],e[o]))return!1}}return String(t)===String(e)}function cd(t,e){return t.findIndex(n=>Ca(n,e))}const Bv=t=>!!(t&&t.__v_isRef===!0),ud=t=>Qe(t)?t:t==null?"":ce(t)||Ue(t)&&(t.toString===Fv||!pe(t.toString))?Bv(t)?ud(t.value):JSON.stringify(t,Hv,2):String(t),Hv=(t,e)=>Bv(e)?Hv(t,e.value):Ei(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bu(r,i)+" =>"]=s,n),{})}:Qi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bu(n))}:Sn(e)?Bu(e):Ue(e)&&!ce(e)&&!Uv(e)?String(e):e,Bu=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class qv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){this._on>0&&--this._on===0&&(Nt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function fd(t){return new qv(t)}function Xi(){return Nt}function ra(t,e=!1){Nt&&Nt.cleanups.push(t)}let He;const Hu=new WeakSet;class zv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hu.has(this)&&(Hu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bm(this),Gv(this);const e=He,n=An;He=this,An=!0;try{return this.fn()}finally{Yv(this),He=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pd(e);this.deps=this.depsTail=void 0,Bm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ff(this)&&this.run()}get dirty(){return Ff(this)}}let Wv=0,Uo,$o;function Kv(t,e=!1){if(t.flags|=8,e){t.next=$o,$o=t;return}t.next=Uo,Uo=t}function hd(){Wv++}function dd(){if(--Wv>0)return;if($o){let e=$o;for($o=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Uo;){let e=Uo;for(Uo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Gv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),pd(r),NI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ff(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===sa)||(t.globalVersion=sa,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ff(t))))return;t.flags|=2;const e=t.dep,n=He,r=An;He=t,An=!0;try{Gv(t);const s=t.fn(t._value);(e.version===0||Gr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{He=n,An=r,Yv(t),t.flags&=-3}}function pd(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)pd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function NI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const Jv=[];function dr(){Jv.push(An),An=!1}function pr(){const t=Jv.pop();An=t===void 0?!0:t}function Bm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let sa=0;class xI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!An||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new xI(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,Xv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=r)}return n}trigger(e){this.version++,sa++,this.notify(e)}notify(e){hd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dd()}}}function Xv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Xv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xl=new WeakMap,ks=Symbol(""),Uf=Symbol(""),ia=Symbol("");function Dt(t,e,n){if(An&&He){let r=Xl.get(t);r||Xl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fc),s.map=r,s.key=n),s.track()}}function sr(t,e,n,r,s,i){const o=Xl.get(t);if(!o){sa++;return}const a=c=>{c&&c.trigger()};if(hd(),e==="clear")o.forEach(a);else{const c=ce(t),u=c&&ld(n);if(c&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===ia||!Sn(p)&&p>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ia)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ks)),Ei(t)&&a(o.get(Uf)));break;case"delete":c||(a(o.get(ks)),Ei(t)&&a(o.get(Uf)));break;case"set":Ei(t)&&a(o.get(ks));break}}dd()}function DI(t,e){const n=Xl.get(t);return n&&n.get(e)}function ai(t){const e=Pe(t);return e===t?e:(Dt(e,"iterate",ia),dn(t)?e:e.map(wt))}function Uc(t){return Dt(t=Pe(t),"iterate",ia),t}const LI={__proto__:null,[Symbol.iterator](){return qu(this,Symbol.iterator,wt)},concat(...t){return ai(this).concat(...t.map(e=>ce(e)?ai(e):e))},entries(){return qu(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return er(this,"every",t,e,void 0,arguments)},filter(t,e){return er(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return er(this,"find",t,e,wt,arguments)},findIndex(t,e){return er(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return er(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return er(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return er(this,"forEach",t,e,void 0,arguments)},includes(...t){return zu(this,"includes",t)},indexOf(...t){return zu(this,"indexOf",t)},join(t){return ai(this).join(t)},lastIndexOf(...t){return zu(this,"lastIndexOf",t)},map(t,e){return er(this,"map",t,e,void 0,arguments)},pop(){return To(this,"pop")},push(...t){return To(this,"push",t)},reduce(t,...e){return Hm(this,"reduce",t,e)},reduceRight(t,...e){return Hm(this,"reduceRight",t,e)},shift(){return To(this,"shift")},some(t,e){return er(this,"some",t,e,void 0,arguments)},splice(...t){return To(this,"splice",t)},toReversed(){return ai(this).toReversed()},toSorted(t){return ai(this).toSorted(t)},toSpliced(...t){return ai(this).toSpliced(...t)},unshift(...t){return To(this,"unshift",t)},values(){return qu(this,"values",wt)}};function qu(t,e,n){const r=Uc(t),s=r[e]();return r!==t&&!dn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const MI=Array.prototype;function er(t,e,n,r,s,i){const o=Uc(t),a=o!==t&&!dn(t),c=o[e];if(c!==MI[e]){const h=c.apply(t,i);return a?wt(h):h}let u=n;o!==t&&(a?u=function(h,p){return n.call(this,wt(h),p,t)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,t)}));const f=c.call(o,u,r);return a&&s?s(f):f}function Hm(t,e,n,r){const s=Uc(t);let i=n;return s!==t&&(dn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,wt(a),c,t)}),s[e](i,...r)}function zu(t,e,n){const r=Pe(t);Dt(r,"iterate",ia);const s=r[e](...n);return(s===-1||s===!1)&&yd(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function To(t,e,n=[]){dr(),hd();const r=Pe(t)[e].apply(t,n);return dd(),pr(),r}const VI=sd("__proto__,__v_isRef,__isVue"),Zv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function FI(t){Sn(t)||(t=String(t));const e=Pe(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class eE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?GI:sE:i?rE:nE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=LI[n]))return c;if(n==="hasOwnProperty")return FI}const a=Reflect.get(e,n,Ye(e)?e:r);return(Sn(n)?Zv.has(n):VI(n))||(s||Dt(e,"get",n),i)?a:Ye(a)?o&&ld(n)?a:a.value:Ue(a)?s?iE(a):br(a):a}}class tE extends eE{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=mr(i);if(!dn(r)&&!mr(r)&&(i=Pe(i),r=Pe(r)),!ce(e)&&Ye(i)&&!Ye(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&ld(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Ye(e)?e:s);return e===Pe(s)&&(o?Gr(r,i)&&sr(e,"set",n,r):sr(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&sr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sn(n)||!Zv.has(n))&&Dt(e,"has",n),r}ownKeys(e){return Dt(e,"iterate",ce(e)?"length":ks),Reflect.ownKeys(e)}}class UI extends eE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $I=new tE,jI=new UI,BI=new tE(!0);const $f=t=>t,ul=t=>Reflect.getPrototypeOf(t);function HI(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Ei(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?$f:e?Zl:wt;return!e&&Dt(i,"iterate",c?Uf:ks),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function fl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qI(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),a=Pe(s);t||(Gr(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:c}=ul(o),u=e?$f:t?Zl:wt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Dt(Pe(s),"iterate",ks),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),a=Pe(s);return t||(Gr(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Pe(a),u=e?$f:t?Zl:wt;return!t&&Dt(c,"iterate",ks),a.forEach((f,h)=>s.call(i,u(f),u(h),o))}};return mt(n,t?{add:fl("add"),set:fl("set"),delete:fl("delete"),clear:fl("clear")}:{add(s){!e&&!dn(s)&&!mr(s)&&(s=Pe(s));const i=Pe(this);return ul(i).has.call(i,s)||(i.add(s),sr(i,"add",s,s)),this},set(s,i){!e&&!dn(i)&&!mr(i)&&(i=Pe(i));const o=Pe(this),{has:a,get:c}=ul(o);let u=a.call(o,s);u||(s=Pe(s),u=a.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Gr(i,f)&&sr(o,"set",s,i):sr(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:a}=ul(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&sr(i,"delete",s,void 0),u},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&sr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=HI(s,t,e)}),n}function md(t,e){const n=qI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const zI={get:md(!1,!1)},WI={get:md(!1,!0)},KI={get:md(!0,!1)};const nE=new WeakMap,rE=new WeakMap,sE=new WeakMap,GI=new WeakMap;function YI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function QI(t){return t.__v_skip||!Object.isExtensible(t)?0:YI(bI(t))}function br(t){return mr(t)?t:gd(t,!1,$I,zI,nE)}function Ln(t){return gd(t,!1,BI,WI,rE)}function iE(t){return gd(t,!0,jI,KI,sE)}function gd(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=QI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Un(t){return mr(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function dn(t){return!!(t&&t.__v_isShallow)}function yd(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function _d(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&Vf(t,"__v_skip",!0),t}const wt=t=>Ue(t)?br(t):t,Zl=t=>Ue(t)?iE(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function Vt(t){return oE(t,!1)}function Kn(t){return oE(t,!0)}function oE(t,e){return Ye(t)?t:new JI(t,e)}class JI{constructor(e,n){this.dep=new Fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||dn(e)||mr(e);e=r?e:Pe(e),Gr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function at(t){return Ye(t)?t.value:t}function XI(t){return pe(t)?t():at(t)}const ZI={get:(t,e,n)=>e==="__v_raw"?t:at(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function aE(t){return Un(t)?t:new Proxy(t,ZI)}class e1{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Fc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function t1(t){return new e1(t)}function n1(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=cE(t,n);return e}class r1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return DI(Pe(this._object),this._key)}}class s1{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function lE(t,e,n){return Ye(t)?t:pe(t)?new s1(t):Ue(t)&&arguments.length>1?cE(t,e,n):Vt(t)}function cE(t,e,n){const r=t[e];return Ye(r)?r:new r1(t,e,n)}class i1{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return Kv(this,!0),!0}get value(){const e=this.dep.track();return Qv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function o1(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new i1(r,s,n)}const hl={},ec=new WeakMap;let As;function a1(t,e=!1,n=As){if(n){let r=ec.get(n);r||ec.set(n,r=[]),r.push(t)}}function l1(t,e,n=je){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=P=>s?P:dn(P)||s===!1||s===0?ir(P,1):ir(P);let f,h,p,m,y=!1,b=!1;if(Ye(t)?(h=()=>t.value,y=dn(t)):Un(t)?(h=()=>u(t),y=!0):ce(t)?(b=!0,y=t.some(P=>Un(P)||dn(P)),h=()=>t.map(P=>{if(Ye(P))return P.value;if(Un(P))return u(P);if(pe(P))return c?c(P,2):P()})):pe(t)?e?h=c?()=>c(t,2):t:h=()=>{if(p){dr();try{p()}finally{pr()}}const P=As;As=f;try{return c?c(t,3,[m]):t(m)}finally{As=P}}:h=Fn,e&&s){const P=h,D=s===!0?1/0:s;h=()=>ir(P(),D)}const C=Xi(),O=()=>{f.stop(),C&&C.active&&od(C.effects,f)};if(i&&e){const P=e;e=(...D)=>{P(...D),O()}}let R=b?new Array(t.length).fill(hl):hl;const v=P=>{if(!(!(f.flags&1)||!f.dirty&&!P))if(e){const D=f.run();if(s||y||(b?D.some((F,S)=>Gr(F,R[S])):Gr(D,R))){p&&p();const F=As;As=f;try{const S=[D,R===hl?void 0:b&&R[0]===hl?[]:R,m];R=D,c?c(e,3,S):e(...S)}finally{As=F}}}else f.run()};return a&&a(v),f=new zv(h),f.scheduler=o?()=>o(v,!1):v,m=P=>a1(P,!1,f),p=f.onStop=()=>{const P=ec.get(f);if(P){if(c)c(P,4);else for(const D of P)D();ec.delete(f)}},e?r?v(!0):R=f.run():o?o(v.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function ir(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))ir(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)ir(t[r],e,n);else if(Qi(t)||Ei(t))t.forEach(r=>{ir(r,e,n)});else if(Uv(t)){for(const r in t)ir(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ir(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(t,e,n,r){try{return r?t(...r):t()}catch(s){Zi(s,e,n)}}function Rn(t,e,n,r){if(pe(t)){const s=ka(t,e,n,r);return s&&ad(s)&&s.catch(i=>{Zi(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Rn(t[i],e,n,r));return s}}function Zi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||je;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,u)===!1)return}a=a.parent}if(i){dr(),ka(i,null,10,[t,c,u]),pr();return}}c1(t,n,s,r,o)}function c1(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const qt=[];let Nn=-1;const Ti=[];let Lr=null,fi=0;const uE=Promise.resolve();let tc=null;function Gn(t){const e=tc||uE;return t?e.then(this?t.bind(this):t):e}function u1(t){let e=Nn+1,n=qt.length;for(;e<n;){const r=e+n>>>1,s=qt[r],i=oa(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vd(t){if(!(t.flags&1)){const e=oa(t),n=qt[qt.length-1];!n||!(t.flags&2)&&e>=oa(n)?qt.push(t):qt.splice(u1(e),0,t),t.flags|=1,fE()}}function fE(){tc||(tc=uE.then(hE))}function jf(t){ce(t)?Ti.push(...t):Lr&&t.id===-1?Lr.splice(fi+1,0,t):t.flags&1||(Ti.push(t),t.flags|=1),fE()}function qm(t,e,n=Nn+1){for(;n<qt.length;n++){const r=qt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;qt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nc(t){if(Ti.length){const e=[...new Set(Ti)].sort((n,r)=>oa(n)-oa(r));if(Ti.length=0,Lr){Lr.push(...e);return}for(Lr=e,fi=0;fi<Lr.length;fi++){const n=Lr[fi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Lr=null,fi=0}}const oa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hE(t){try{for(Nn=0;Nn<qt.length;Nn++){const e=qt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ka(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<qt.length;Nn++){const e=qt[Nn];e&&(e.flags&=-2)}Nn=-1,qt.length=0,nc(),tc=null,(qt.length||Ti.length)&&hE()}}let At=null,dE=null;function rc(t){const e=At;return At=t,dE=t&&t.type.__scopeId||null,e}function Zt(t,e=At,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ng(-1);const i=rc(e);let o;try{o=t(...s)}finally{rc(i),r._d&&ng(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function m9(t,e){if(At===null)return t;const n=Hc(At),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=je]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&ir(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(dr(),Rn(c,n,8,[t.el,a,t,e]),pr())}}const f1=Symbol("_vte"),pE=t=>t.__isTeleport,Mr=Symbol("_leaveCb"),dl=Symbol("_enterCb");function h1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Li(()=>{t.isMounted=!0}),eo(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],mE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},gE=t=>{const e=t.subTree;return e.component?gE(e.component):e},d1={name:"BaseTransition",props:mE,setup(t,{slots:e}){const n=Ks(),r=h1();return()=>{const s=e.default&&vE(e.default(),!0);if(!s||!s.length)return;const i=yE(s),o=Pe(t),{mode:a}=o;if(r.isLeaving)return Wu(i);const c=zm(i);if(!c)return Wu(i);let u=Bf(c,o,r,n,h=>u=h);c.type!==lt&&Di(c,u);let f=n.subTree&&zm(n.subTree);if(f&&f.type!==lt&&!wn(c,f)&&gE(n).type!==lt){let h=Bf(f,o,r,n);if(Di(f,h),a==="out-in"&&c.type!==lt)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,f=void 0},Wu(i);a==="in-out"&&c.type!==lt?h.delayLeave=(p,m,y)=>{const b=_E(r,f);b[String(f.key)]=f,p[Mr]=()=>{m(),p[Mr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function yE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==lt){e=n;break}}return e}const p1=d1;function _E(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Bf(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:p,onLeave:m,onAfterLeave:y,onLeaveCancelled:b,onBeforeAppear:C,onAppear:O,onAfterAppear:R,onAppearCancelled:v}=e,P=String(t.key),D=_E(n,t),F=(_,T)=>{_&&Rn(_,r,9,T)},S=(_,T)=>{const N=T[1];F(_,T),ce(_)?_.every(k=>k.length<=1)&&N():_.length<=1&&N()},E={mode:o,persisted:a,beforeEnter(_){let T=c;if(!n.isMounted)if(i)T=C||c;else return;_[Mr]&&_[Mr](!0);const N=D[P];N&&wn(t,N)&&N.el[Mr]&&N.el[Mr](),F(T,[_])},enter(_){let T=u,N=f,k=h;if(!n.isMounted)if(i)T=O||u,N=R||f,k=v||h;else return;let A=!1;const ge=_[dl]=Ee=>{A||(A=!0,Ee?F(k,[_]):F(N,[_]),E.delayedLeave&&E.delayedLeave(),_[dl]=void 0)};T?S(T,[_,ge]):ge()},leave(_,T){const N=String(t.key);if(_[dl]&&_[dl](!0),n.isUnmounting)return T();F(p,[_]);let k=!1;const A=_[Mr]=ge=>{k||(k=!0,T(),ge?F(b,[_]):F(y,[_]),_[Mr]=void 0,D[N]===t&&delete D[N])};D[N]=t,m?S(m,[_,A]):A()},clone(_){const T=Bf(_,e,n,r,s);return s&&s(T),T}};return E}function Wu(t){if(Oa(t))return t=pn(t),t.children=null,t}function zm(t){if(!Oa(t))return pE(t.type)&&t.children?yE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Di(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Di(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vE(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Lt?(o.patchFlag&128&&s++,r=r.concat(vE(o.children,e,a))):(e||o.type!==lt)&&r.push(a!=null?pn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function yn(t,e){return pe(t)?mt({name:t.name},e,{setup:t}):t}function Ed(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ai(t,e,n,r,s=!1){if(ce(t)){t.forEach((y,b)=>Ai(y,e&&(ce(e)?e[b]:e),n,r,s));return}if(Yr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ai(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Hc(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===je?a.refs={}:a.refs,h=a.setupState,p=Pe(h),m=h===je?()=>!1:y=>xe(p,y);if(u!=null&&u!==c&&(Qe(u)?(f[u]=null,m(u)&&(h[u]=null)):Ye(u)&&(u.value=null)),pe(c))ka(c,a,12,[o,f]);else{const y=Qe(c),b=Ye(c);if(y||b){const C=()=>{if(t.f){const O=y?m(c)?h[c]:f[c]:c.value;s?ce(O)&&od(O,i):ce(O)?O.includes(i)||O.push(i):y?(f[c]=[i],m(c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else y?(f[c]=o,m(c)&&(h[c]=o)):b&&(c.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,vt(C,n)):C()}}}let Wm=!1;const li=()=>{Wm||(console.error("Hydration completed but contains mismatches."),Wm=!0)},m1=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",g1=t=>t.namespaceURI.includes("MathML"),pl=t=>{if(t.nodeType===1){if(m1(t))return"svg";if(g1(t))return"mathml"}},yi=t=>t.nodeType===8;function y1(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,f=(v,P)=>{if(!P.hasChildNodes()){n(null,v,P),nc(),P._vnode=v;return}h(P.firstChild,v,null,null,null),nc(),P._vnode=v},h=(v,P,D,F,S,E=!1)=>{E=E||!!P.dynamicChildren;const _=yi(v)&&v.data==="[",T=()=>b(v,P,D,F,S,_),{type:N,ref:k,shapeFlag:A,patchFlag:ge}=P;let Ee=v.nodeType;P.el=v,ge===-2&&(E=!1,P.dynamicChildren=null);let ee=null;switch(N){case Ns:Ee!==3?P.children===""?(c(P.el=s(""),o(v),v),ee=v):ee=T():(v.data!==P.children&&(li(),v.data=P.children),ee=i(v));break;case lt:R(v)?(ee=i(v),O(P.el=v.content.firstChild,v,D)):Ee!==8||_?ee=T():ee=i(v);break;case Bo:if(_&&(v=i(v),Ee=v.nodeType),Ee===1||Ee===3){ee=v;const ie=!P.children.length;for(let re=0;re<P.staticCount;re++)ie&&(P.children+=ee.nodeType===1?ee.outerHTML:ee.data),re===P.staticCount-1&&(P.anchor=ee),ee=i(ee);return _?i(ee):ee}else T();break;case Lt:_?ee=y(v,P,D,F,S,E):ee=T();break;default:if(A&1)(Ee!==1||P.type.toLowerCase()!==v.tagName.toLowerCase())&&!R(v)?ee=T():ee=p(v,P,D,F,S,E);else if(A&6){P.slotScopeIds=S;const ie=o(v);if(_?ee=C(v):yi(v)&&v.data==="teleport start"?ee=C(v,v.data,"teleport end"):ee=i(v),e(P,ie,null,D,F,pl(ie),E),Yr(P)&&!P.type.__asyncResolved){let re;_?(re=ve(Lt),re.anchor=ee?ee.previousSibling:ie.lastChild):re=v.nodeType===3?Yt(""):ve("div"),re.el=v,P.component.subTree=re}}else A&64?Ee!==8?ee=T():ee=P.type.hydrate(v,P,D,F,S,E,t,m):A&128&&(ee=P.type.hydrate(v,P,D,F,pl(o(v)),S,E,t,h))}return k!=null&&Ai(k,null,F,P),ee},p=(v,P,D,F,S,E)=>{E=E||!!P.dynamicChildren;const{type:_,props:T,patchFlag:N,shapeFlag:k,dirs:A,transition:ge}=P,Ee=_==="input"||_==="option";if(Ee||N!==-1){A&&xn(P,null,D,"created");let ee=!1;if(R(v)){ee=BE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const re=v.content.firstChild;if(ee){const Be=re.getAttribute("class");Be&&(re.$cls=Be),ge.beforeEnter(re)}O(re,v,D),P.el=v=re}if(k&16&&!(T&&(T.innerHTML||T.textContent))){let re=m(v.firstChild,P,v,D,F,S,E);for(;re;){ml(v,1)||li();const Be=re;re=re.nextSibling,a(Be)}}else if(k&8){let re=P.children;re[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(re=re.slice(1)),v.textContent!==re&&(ml(v,0)||li(),v.textContent=P.children)}if(T){if(Ee||!E||N&48){const re=v.tagName.includes("-");for(const Be in T)(Ee&&(Be.endsWith("value")||Be==="indeterminate")||Ra(Be)&&!wi(Be)||Be[0]==="."||re)&&r(v,Be,null,T[Be],void 0,D)}else if(T.onClick)r(v,"onClick",null,T.onClick,void 0,D);else if(N&4&&Un(T.style))for(const re in T.style)T.style[re]}let ie;(ie=T&&T.onVnodeBeforeMount)&&Kt(ie,D,P),A&&xn(P,null,D,"beforeMount"),((ie=T&&T.onVnodeMounted)||A||ee)&&GE(()=>{ie&&Kt(ie,D,P),ee&&ge.enter(v),A&&xn(P,null,D,"mounted")},F)}return v.nextSibling},m=(v,P,D,F,S,E,_)=>{_=_||!!P.dynamicChildren;const T=P.children,N=T.length;for(let k=0;k<N;k++){const A=_?T[k]:T[k]=en(T[k]),ge=A.type===Ns;v?(ge&&!_&&k+1<N&&en(T[k+1]).type===Ns&&(c(s(v.data.slice(A.children.length)),D,i(v)),v.data=A.children),v=h(v,A,F,S,E,_)):ge&&!A.children?c(A.el=s(""),D):(ml(D,1)||li(),n(null,A,D,null,F,S,pl(D),E))}return v},y=(v,P,D,F,S,E)=>{const{slotScopeIds:_}=P;_&&(S=S?S.concat(_):_);const T=o(v),N=m(i(v),P,T,D,F,S,E);return N&&yi(N)&&N.data==="]"?i(P.anchor=N):(li(),c(P.anchor=u("]"),T,N),N)},b=(v,P,D,F,S,E)=>{if(ml(v.parentElement,1)||li(),P.el=null,E){const N=C(v);for(;;){const k=i(v);if(k&&k!==N)a(k);else break}}const _=i(v),T=o(v);return a(v),n(null,P,T,_,D,F,pl(T),S),D&&(D.vnode.el=P.el,Bc(D,P.el)),_},C=(v,P="[",D="]")=>{let F=0;for(;v;)if(v=i(v),v&&yi(v)&&(v.data===P&&F++,v.data===D)){if(F===0)return i(v);F--}return v},O=(v,P,D)=>{const F=P.parentNode;F&&F.replaceChild(v,P);let S=D;for(;S;)S.vnode.el===P&&(S.vnode.el=S.subTree.el=v),S=S.parent},R=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[f,h]}const Km="data-allow-mismatch",_1={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ml(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Km);)t=t.parentElement;const n=t&&t.getAttribute(Km);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(_1[e])}}Mc().requestIdleCallback;Mc().cancelIdleCallback;function v1(t,e){if(yi(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(yi(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Yr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function E1(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,f,h=0;const p=()=>(h++,u=null,m()),m=()=>{let y;return u||(y=u=e().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),c)return new Promise((C,O)=>{c(b,()=>C(p()),()=>O(b),h+1)});throw b}).then(b=>y!==u&&u?u:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),f=b,b)))};return yn({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(y,b,C){let O=!1;(b.bu||(b.bu=[])).push(()=>O=!0);const R=()=>{O||C()},v=i?()=>{const P=i(R,D=>v1(y,D));P&&(b.bum||(b.bum=[])).push(P)}:R;f?v():m().then(()=>!b.isUnmounted&&v())},get __asyncResolved(){return f},setup(){const y=bt;if(Ed(y),f)return()=>Ku(f,y);const b=v=>{u=null,Zi(v,y,13,!r)};if(a&&y.suspense||Vi)return m().then(v=>()=>Ku(v,y)).catch(v=>(b(v),()=>r?ve(r,{error:v}):null));const C=Vt(!1),O=Vt(),R=Vt(!!s);return s&&setTimeout(()=>{R.value=!1},s),o!=null&&setTimeout(()=>{if(!C.value&&!O.value){const v=new Error(`Async component timed out after ${o}ms.`);b(v),O.value=v}},o),m().then(()=>{C.value=!0,y.parent&&Oa(y.parent.vnode)&&y.parent.update()}).catch(v=>{b(v),O.value=v}),()=>{if(C.value&&f)return Ku(f,y);if(O.value&&r)return ve(r,{error:O.value});if(n&&!R.value)return ve(n)}}})}function Ku(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=ve(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Oa=t=>t.type.__isKeepAlive,w1={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ks(),r=n.ctx;if(!r.renderer)return()=>{const R=e.default&&e.default();return R&&R.length===1?R[0]:R};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:h}}}=r,p=h("div");r.activate=(R,v,P,D,F)=>{const S=R.component;u(R,v,P,0,a),c(S.vnode,R,v,P,S,a,D,R.slotScopeIds,F),vt(()=>{S.isDeactivated=!1,S.a&&bi(S.a);const E=R.props&&R.props.onVnodeMounted;E&&Kt(E,S.parent,R)},a)},r.deactivate=R=>{const v=R.component;ic(v.m),ic(v.a),u(R,p,null,1,a),vt(()=>{v.da&&bi(v.da);const P=R.props&&R.props.onVnodeUnmounted;P&&Kt(P,v.parent,R),v.isDeactivated=!0},a)};function m(R){Gu(R),f(R,n,a,!0)}function y(R){s.forEach((v,P)=>{const D=Qf(v.type);D&&!R(D)&&b(P)})}function b(R){const v=s.get(R);v&&(!o||!wn(v,o))?m(v):o&&Gu(o),s.delete(R),i.delete(R)}$n(()=>[t.include,t.exclude],([R,v])=>{R&&y(P=>Co(R,P)),v&&y(P=>!Co(v,P))},{flush:"post",deep:!0});let C=null;const O=()=>{C!=null&&(oc(n.subTree.type)?vt(()=>{s.set(C,gl(n.subTree))},n.subTree.suspense):s.set(C,gl(n.subTree)))};return Li(O),TE(O),eo(()=>{s.forEach(R=>{const{subTree:v,suspense:P}=n,D=gl(v);if(R.type===D.type&&R.key===D.key){Gu(D);const F=D.component.da;F&&vt(F,P);return}m(R)})}),()=>{if(C=null,!e.default)return o=null;const R=e.default(),v=R[0];if(R.length>1)return o=null,R;if(!Ms(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let P=gl(v);if(P.type===lt)return o=null,P;const D=P.type,F=Qf(Yr(P)?P.type.__asyncResolved||{}:D),{include:S,exclude:E,max:_}=t;if(S&&(!F||!Co(S,F))||E&&F&&Co(E,F))return P.shapeFlag&=-257,o=P,v;const T=P.key==null?D:P.key,N=s.get(T);return P.el&&(P=pn(P),v.shapeFlag&128&&(v.ssContent=P)),C=T,N?(P.el=N.el,P.component=N.component,P.transition&&Di(P,P.transition),P.shapeFlag|=512,i.delete(T),i.add(T)):(i.add(T),_&&i.size>parseInt(_,10)&&b(i.values().next().value)),P.shapeFlag|=256,o=P,oc(v.type)?v:P}}},b1=w1;function Co(t,e){return ce(t)?t.some(n=>Co(n,e)):Qe(t)?t.split(",").includes(e):wI(t)?(t.lastIndex=0,t.test(e)):!1}function EE(t,e){bE(t,"a",e)}function wE(t,e){bE(t,"da",e)}function bE(t,e,n=bt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($c(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&T1(r,e,n,s),s=s.parent}}function T1(t,e,n,r){const s=$c(e,t,r,!0);AE(()=>{od(r[e],s)},n)}function Gu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function gl(t){return t.shapeFlag&128?t.ssContent:t}function $c(t,e,n=bt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{dr();const a=xa(n),c=Rn(e,n,t,o);return a(),pr(),c});return r?s.unshift(i):s.push(i),i}}const Tr=t=>(e,n=bt)=>{(!Vi||t==="sp")&&$c(t,(...r)=>e(...r),n)},A1=Tr("bm"),Li=Tr("m"),I1=Tr("bu"),TE=Tr("u"),eo=Tr("bum"),AE=Tr("um"),S1=Tr("sp"),R1=Tr("rtg"),P1=Tr("rtc");function IE(t,e=bt){$c("ec",t,e)}const SE="components";function aa(t,e){return PE(SE,t,!0,e)||t}const RE=Symbol.for("v-ndc");function C1(t){return Qe(t)?PE(SE,t,!1)||t:t||RE}function PE(t,e,n=!0,r=!1){const s=At||bt;if(s){const i=s.type;{const a=Qf(i,!1);if(a&&(a===e||a===mn(e)||a===Lc(mn(e))))return i}const o=Gm(s[t]||i[t],e)||Gm(s.appContext[t],e);return!o&&r?i:o}}function Gm(t,e){return t&&(t[e]||t[mn(e)]||t[Lc(mn(e))])}function g9(t,e,n,r){let s;const i=n,o=ce(t);if(o||Qe(t)){const a=o&&Un(t);let c=!1,u=!1;a&&(c=!dn(t),u=mr(t),t=Uc(t)),s=new Array(t.length);for(let f=0,h=t.length;f<h;f++)s[f]=e(c?u?Zl(wt(t[f])):wt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const f=a[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function y9(t,e,n={},r,s){if(At.ce||At.parent&&Yr(At.parent)&&At.parent.ce)return zt(),or(Lt,null,[ve("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),zt();const o=i&&CE(i(n)),a=n.key||o&&o.key,c=or(Lt,{key:(a&&!Sn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function CE(t){return t.some(e=>Ms(e)?!(e.type===lt||e.type===Lt&&!CE(e.children)):!0)?t:null}const Hf=t=>t?ZE(t)?Hc(t):Hf(t.parent):null,jo=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hf(t.parent),$root:t=>Hf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>OE(t),$forceUpdate:t=>t.f||(t.f=()=>{vd(t.update)}),$nextTick:t=>t.n||(t.n=Gn.bind(t.proxy)),$watch:t=>Q1.bind(t)}),Yu=(t,e)=>t!==je&&!t.__isScriptSetup&&xe(t,e),k1={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Yu(r,e))return o[e]=1,r[e];if(s!==je&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==je&&xe(n,e))return o[e]=4,n[e];qf&&(o[e]=0)}}const f=jo[e];let h,p;if(f)return e==="$attrs"&&Dt(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==je&&xe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Yu(s,e)?(s[e]=n,!0):r!==je&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==je&&xe(t,o)||Yu(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(jo,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ym(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qf=!0;function O1(t){const e=OE(t),n=t.proxy,r=t.ctx;qf=!1,e.beforeCreate&&Qm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:b,deactivated:C,beforeDestroy:O,beforeUnmount:R,destroyed:v,unmounted:P,render:D,renderTracked:F,renderTriggered:S,errorCaptured:E,serverPrefetch:_,expose:T,inheritAttrs:N,components:k,directives:A,filters:ge}=e;if(u&&N1(u,r,null),o)for(const ie in o){const re=o[ie];pe(re)&&(r[ie]=re.bind(n))}if(s){const ie=s.call(n,n);Ue(ie)&&(t.data=br(ie))}if(qf=!0,i)for(const ie in i){const re=i[ie],Be=pe(re)?re.bind(n,n):pe(re.get)?re.get.bind(n,n):Fn,_n=!pe(re)&&pe(re.set)?re.set.bind(n):Fn,ln=Fe({get:Be,set:_n});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Xe=>ln.value=Xe})}if(a)for(const ie in a)kE(a[ie],r,n,ie);if(c){const ie=pe(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(re=>{Qr(re,ie[re])})}f&&Qm(f,t,"c");function ee(ie,re){ce(re)?re.forEach(Be=>ie(Be.bind(n))):re&&ie(re.bind(n))}if(ee(A1,h),ee(Li,p),ee(I1,m),ee(TE,y),ee(EE,b),ee(wE,C),ee(IE,E),ee(P1,F),ee(R1,S),ee(eo,R),ee(AE,P),ee(S1,_),ce(T))if(T.length){const ie=t.exposed||(t.exposed={});T.forEach(re=>{Object.defineProperty(ie,re,{get:()=>n[re],set:Be=>n[re]=Be,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Fn&&(t.render=D),N!=null&&(t.inheritAttrs=N),k&&(t.components=k),A&&(t.directives=A),_&&Ed(t)}function N1(t,e,n=Fn){ce(t)&&(t=zf(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=pt(s.from||r,s.default,!0):i=pt(s.from||r):i=pt(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Qm(t,e,n){Rn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kE(t,e,n,r){let s=r.includes(".")?zE(n,r):()=>n[r];if(Qe(t)){const i=e[t];pe(i)&&$n(s,i)}else if(pe(t))$n(s,t.bind(n));else if(Ue(t))if(ce(t))t.forEach(i=>kE(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&$n(s,i,t)}}function OE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>sc(c,u,o,!0)),sc(c,e,o)),Ue(e)&&i.set(e,c),c}function sc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sc(t,i,n,!0),s&&s.forEach(o=>sc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=x1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const x1={data:Jm,props:Xm,emits:Xm,methods:ko,computed:ko,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:ko,directives:ko,watch:L1,provide:Jm,inject:D1};function Jm(t,e){return e?t?function(){return mt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function D1(t,e){return ko(zf(t),zf(e))}function zf(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function ko(t,e){return t?mt(Object.create(null),t,e):e}function Xm(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:mt(Object.create(null),Ym(t),Ym(e??{})):e}function L1(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const r in e)n[r]=Ht(t[r],e[r]);return n}function NE(){return{app:null,config:{isNativeTag:vI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let M1=0;function V1(t,e){return function(r,s=null){pe(r)||(r=mt({},r)),s!=null&&!Ue(s)&&(s=null);const i=NE(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:M1++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wS,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...h)):pe(f)&&(o.add(f),f(u,...h))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,h){return h?(i.components[f]=h,u):i.components[f]},directive(f,h){return h?(i.directives[f]=h,u):i.directives[f]},mount(f,h,p){if(!c){const m=u._ceVNode||ve(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(m,f):t(m,f,p),c=!0,u._container=f,f.__vue_app__=u,Hc(m.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Rn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,h){return i.provides[f]=h,u},runWithContext(f){const h=Os;Os=u;try{return f()}finally{Os=h}}};return u}}let Os=null;function Qr(t,e){if(bt){let n=bt.provides;const r=bt.parent&&bt.parent.provides;r===n&&(n=bt.provides=Object.create(r)),n[t]=e}}function pt(t,e,n=!1){const r=Ks();if(r||Os){let s=Os?Os._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Na(){return!!(Ks()||Os)}const xE={},DE=()=>Object.create(xE),LE=t=>Object.getPrototypeOf(t)===xE;function F1(t,e,n,r=!1){const s={},i=DE();t.propsDefaults=Object.create(null),ME(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ln(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function U1(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(jc(t.emitsOptions,p))continue;const m=e[p];if(c)if(xe(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const y=mn(p);s[y]=Wf(c,a,y,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{ME(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!xe(e,h)&&((f=Ws(h))===h||!xe(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Wf(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!xe(e,h))&&(delete i[h],u=!0)}u&&sr(t.attrs,"set","")}function ME(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wi(c))continue;const u=e[c];let f;s&&xe(s,f=mn(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:jc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Pe(n),u=a||je;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Wf(s,c,h,u[h],t,!xe(u,h))}}return o}function Wf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=xa(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ws(n))&&(r=!0))}return r}const $1=new WeakMap;function VE(t,e,n=!1){const r=n?$1:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const f=h=>{c=!0;const[p,m]=VE(h,e,!0);mt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ue(t)&&r.set(t,vi),vi;if(ce(i))for(let f=0;f<i.length;f++){const h=mn(i[f]);Zm(h)&&(o[h]=je)}else if(i)for(const f in i){const h=mn(f);if(Zm(h)){const p=i[f],m=o[h]=ce(p)||pe(p)?{type:p}:mt({},p),y=m.type;let b=!1,C=!0;if(ce(y))for(let O=0;O<y.length;++O){const R=y[O],v=pe(R)&&R.name;if(v==="Boolean"){b=!0;break}else v==="String"&&(C=!1)}else b=pe(y)&&y.name==="Boolean";m[0]=b,m[1]=C,(b||xe(m,"default"))&&a.push(h)}}const u=[o,a];return Ue(t)&&r.set(t,u),u}function Zm(t){return t[0]!=="$"&&!wi(t)}const wd=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",bd=t=>ce(t)?t.map(en):[en(t)],j1=(t,e,n)=>{if(e._n)return e;const r=Zt((...s)=>bd(e(...s)),n);return r._c=!1,r},FE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wd(s))continue;const i=t[s];if(pe(i))e[s]=j1(s,i,r);else if(i!=null){const o=bd(i);e[s]=()=>o}}},UE=(t,e)=>{const n=bd(e);t.slots.default=()=>n},$E=(t,e,n)=>{for(const r in e)(n||!wd(r))&&(t[r]=e[r])},B1=(t,e,n)=>{const r=t.slots=DE();if(t.vnode.shapeFlag&32){const s=e.__;s&&Vf(r,"__",s,!0);const i=e._;i?($E(r,e,n),n&&Vf(r,"_",i,!0)):FE(e,r)}else e&&UE(t,e)},H1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=je;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:$E(s,e,n):(i=!e.$stable,FE(e,s)),o=e}else e&&(UE(t,e),o={default:1});if(i)for(const a in s)!wd(a)&&o[a]==null&&delete s[a]},vt=GE;function q1(t){return jE(t)}function z1(t){return jE(t,y1)}function jE(t,e){const n=Mc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=Fn,insertStaticContent:y}=t,b=(I,x,M,H=null,$=null,q=null,Q=void 0,G=null,K=!!x.dynamicChildren)=>{if(I===x)return;I&&!wn(I,x)&&(H=j(I),Xe(I,$,q,!0),I=null),x.patchFlag===-2&&(K=!1,x.dynamicChildren=null);const{type:z,ref:le,shapeFlag:J}=x;switch(z){case Ns:C(I,x,M,H);break;case lt:O(I,x,M,H);break;case Bo:I==null&&R(x,M,H,Q);break;case Lt:k(I,x,M,H,$,q,Q,G,K);break;default:J&1?D(I,x,M,H,$,q,Q,G,K):J&6?A(I,x,M,H,$,q,Q,G,K):(J&64||J&128)&&z.process(I,x,M,H,$,q,Q,G,K,se)}le!=null&&$?Ai(le,I&&I.ref,q,x||I,!x):le==null&&I&&I.ref!=null&&Ai(I.ref,null,q,I,!0)},C=(I,x,M,H)=>{if(I==null)r(x.el=a(x.children),M,H);else{const $=x.el=I.el;x.children!==I.children&&u($,x.children)}},O=(I,x,M,H)=>{I==null?r(x.el=c(x.children||""),M,H):x.el=I.el},R=(I,x,M,H)=>{[I.el,I.anchor]=y(I.children,x,M,H,I.el,I.anchor)},v=({el:I,anchor:x},M,H)=>{let $;for(;I&&I!==x;)$=p(I),r(I,M,H),I=$;r(x,M,H)},P=({el:I,anchor:x})=>{let M;for(;I&&I!==x;)M=p(I),s(I),I=M;s(x)},D=(I,x,M,H,$,q,Q,G,K)=>{x.type==="svg"?Q="svg":x.type==="math"&&(Q="mathml"),I==null?F(x,M,H,$,q,Q,G,K):_(I,x,$,q,Q,G,K)},F=(I,x,M,H,$,q,Q,G)=>{let K,z;const{props:le,shapeFlag:J,transition:ae,dirs:oe}=I;if(K=I.el=o(I.type,q,le&&le.is,le),J&8?f(K,I.children):J&16&&E(I.children,K,null,H,$,Qu(I,q),Q,G),oe&&xn(I,null,H,"created"),S(K,I,I.scopeId,Q,H),le){for(const Oe in le)Oe!=="value"&&!wi(Oe)&&i(K,Oe,null,le[Oe],q,H);"value"in le&&i(K,"value",null,le.value,q),(z=le.onVnodeBeforeMount)&&Kt(z,H,I)}oe&&xn(I,null,H,"beforeMount");const he=BE($,ae);he&&ae.beforeEnter(K),r(K,x,M),((z=le&&le.onVnodeMounted)||he||oe)&&vt(()=>{z&&Kt(z,H,I),he&&ae.enter(K),oe&&xn(I,null,H,"mounted")},$)},S=(I,x,M,H,$)=>{if(M&&m(I,M),H)for(let q=0;q<H.length;q++)m(I,H[q]);if($){let q=$.subTree;if(x===q||oc(q.type)&&(q.ssContent===x||q.ssFallback===x)){const Q=$.vnode;S(I,Q,Q.scopeId,Q.slotScopeIds,$.parent)}}},E=(I,x,M,H,$,q,Q,G,K=0)=>{for(let z=K;z<I.length;z++){const le=I[z]=G?Vr(I[z]):en(I[z]);b(null,le,x,M,H,$,q,Q,G)}},_=(I,x,M,H,$,q,Q)=>{const G=x.el=I.el;let{patchFlag:K,dynamicChildren:z,dirs:le}=x;K|=I.patchFlag&16;const J=I.props||je,ae=x.props||je;let oe;if(M&&Es(M,!1),(oe=ae.onVnodeBeforeUpdate)&&Kt(oe,M,x,I),le&&xn(x,I,M,"beforeUpdate"),M&&Es(M,!0),(J.innerHTML&&ae.innerHTML==null||J.textContent&&ae.textContent==null)&&f(G,""),z?T(I.dynamicChildren,z,G,M,H,Qu(x,$),q):Q||re(I,x,G,null,M,H,Qu(x,$),q,!1),K>0){if(K&16)N(G,J,ae,M,$);else if(K&2&&J.class!==ae.class&&i(G,"class",null,ae.class,$),K&4&&i(G,"style",J.style,ae.style,$),K&8){const he=x.dynamicProps;for(let Oe=0;Oe<he.length;Oe++){const Ce=he[Oe],gt=J[Ce],ht=ae[Ce];(ht!==gt||Ce==="value")&&i(G,Ce,gt,ht,$,M)}}K&1&&I.children!==x.children&&f(G,x.children)}else!Q&&z==null&&N(G,J,ae,M,$);((oe=ae.onVnodeUpdated)||le)&&vt(()=>{oe&&Kt(oe,M,x,I),le&&xn(x,I,M,"updated")},H)},T=(I,x,M,H,$,q,Q)=>{for(let G=0;G<x.length;G++){const K=I[G],z=x[G],le=K.el&&(K.type===Lt||!wn(K,z)||K.shapeFlag&198)?h(K.el):M;b(K,z,le,null,H,$,q,Q,!0)}},N=(I,x,M,H,$)=>{if(x!==M){if(x!==je)for(const q in x)!wi(q)&&!(q in M)&&i(I,q,x[q],null,$,H);for(const q in M){if(wi(q))continue;const Q=M[q],G=x[q];Q!==G&&q!=="value"&&i(I,q,G,Q,$,H)}"value"in M&&i(I,"value",x.value,M.value,$)}},k=(I,x,M,H,$,q,Q,G,K)=>{const z=x.el=I?I.el:a(""),le=x.anchor=I?I.anchor:a("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:oe}=x;oe&&(G=G?G.concat(oe):oe),I==null?(r(z,M,H),r(le,M,H),E(x.children||[],M,le,$,q,Q,G,K)):J>0&&J&64&&ae&&I.dynamicChildren?(T(I.dynamicChildren,ae,M,$,q,Q,G),(x.key!=null||$&&x===$.subTree)&&HE(I,x,!0)):re(I,x,M,le,$,q,Q,G,K)},A=(I,x,M,H,$,q,Q,G,K)=>{x.slotScopeIds=G,I==null?x.shapeFlag&512?$.ctx.activate(x,M,H,Q,K):ge(x,M,H,$,q,Q,K):Ee(I,x,K)},ge=(I,x,M,H,$,q,Q)=>{const G=I.component=mS(I,H,$);if(Oa(I)&&(G.ctx.renderer=se),gS(G,!1,Q),G.asyncDep){if($&&$.registerDep(G,ee,Q),!I.el){const K=G.subTree=ve(lt);O(null,K,x,M),I.placeholder=K.el}}else ee(G,I,x,M,$,q,Q)},Ee=(I,x,M)=>{const H=x.component=I.component;if(nS(I,x,M))if(H.asyncDep&&!H.asyncResolved){ie(H,x,M);return}else H.next=x,H.update();else x.el=I.el,H.vnode=x},ee=(I,x,M,H,$,q,Q)=>{const G=()=>{if(I.isMounted){let{next:J,bu:ae,u:oe,parent:he,vnode:Oe}=I;{const Rt=qE(I);if(Rt){J&&(J.el=Oe.el,ie(I,J,Q)),Rt.asyncDep.then(()=>{I.isUnmounted||G()});return}}let Ce=J,gt;Es(I,!1),J?(J.el=Oe.el,ie(I,J,Q)):J=Oe,ae&&bi(ae),(gt=J.props&&J.props.onVnodeBeforeUpdate)&&Kt(gt,he,J,Oe),Es(I,!0);const ht=Ju(I),yt=I.subTree;I.subTree=ht,b(yt,ht,h(yt.el),j(yt),I,$,q),J.el=ht.el,Ce===null&&Bc(I,ht.el),oe&&vt(oe,$),(gt=J.props&&J.props.onVnodeUpdated)&&vt(()=>Kt(gt,he,J,Oe),$)}else{let J;const{el:ae,props:oe}=x,{bm:he,m:Oe,parent:Ce,root:gt,type:ht}=I,yt=Yr(x);if(Es(I,!1),he&&bi(he),!yt&&(J=oe&&oe.onVnodeBeforeMount)&&Kt(J,Ce,x),Es(I,!0),ae&&Me){const Rt=()=>{I.subTree=Ju(I),Me(ae,I.subTree,I,$,null)};yt&&ht.__asyncHydrate?ht.__asyncHydrate(ae,I,Rt):Rt()}else{gt.ce&&gt.ce._def.shadowRoot!==!1&&gt.ce._injectChildStyle(ht);const Rt=I.subTree=Ju(I);b(null,Rt,M,H,I,$,q),x.el=Rt.el}if(Oe&&vt(Oe,$),!yt&&(J=oe&&oe.onVnodeMounted)){const Rt=x;vt(()=>Kt(J,Ce,Rt),$)}(x.shapeFlag&256||Ce&&Yr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&I.a&&vt(I.a,$),I.isMounted=!0,x=M=H=null}};I.scope.on();const K=I.effect=new zv(G);I.scope.off();const z=I.update=K.run.bind(K),le=I.job=K.runIfDirty.bind(K);le.i=I,le.id=I.uid,K.scheduler=()=>vd(le),Es(I,!0),z()},ie=(I,x,M)=>{x.component=I;const H=I.vnode.props;I.vnode=x,I.next=null,U1(I,x.props,H,M),H1(I,x.children,M),dr(),qm(I),pr()},re=(I,x,M,H,$,q,Q,G,K=!1)=>{const z=I&&I.children,le=I?I.shapeFlag:0,J=x.children,{patchFlag:ae,shapeFlag:oe}=x;if(ae>0){if(ae&128){_n(z,J,M,H,$,q,Q,G,K);return}else if(ae&256){Be(z,J,M,H,$,q,Q,G,K);return}}oe&8?(le&16&&Wt(z,$,q),J!==z&&f(M,J)):le&16?oe&16?_n(z,J,M,H,$,q,Q,G,K):Wt(z,$,q,!0):(le&8&&f(M,""),oe&16&&E(J,M,H,$,q,Q,G,K))},Be=(I,x,M,H,$,q,Q,G,K)=>{I=I||vi,x=x||vi;const z=I.length,le=x.length,J=Math.min(z,le);let ae;for(ae=0;ae<J;ae++){const oe=x[ae]=K?Vr(x[ae]):en(x[ae]);b(I[ae],oe,M,null,$,q,Q,G,K)}z>le?Wt(I,$,q,!0,!1,J):E(x,M,H,$,q,Q,G,K,J)},_n=(I,x,M,H,$,q,Q,G,K)=>{let z=0;const le=x.length;let J=I.length-1,ae=le-1;for(;z<=J&&z<=ae;){const oe=I[z],he=x[z]=K?Vr(x[z]):en(x[z]);if(wn(oe,he))b(oe,he,M,null,$,q,Q,G,K);else break;z++}for(;z<=J&&z<=ae;){const oe=I[J],he=x[ae]=K?Vr(x[ae]):en(x[ae]);if(wn(oe,he))b(oe,he,M,null,$,q,Q,G,K);else break;J--,ae--}if(z>J){if(z<=ae){const oe=ae+1,he=oe<le?x[oe].el:H;for(;z<=ae;)b(null,x[z]=K?Vr(x[z]):en(x[z]),M,he,$,q,Q,G,K),z++}}else if(z>ae)for(;z<=J;)Xe(I[z],$,q,!0),z++;else{const oe=z,he=z,Oe=new Map;for(z=he;z<=ae;z++){const $t=x[z]=K?Vr(x[z]):en(x[z]);$t.key!=null&&Oe.set($t.key,z)}let Ce,gt=0;const ht=ae-he+1;let yt=!1,Rt=0;const Rr=new Array(ht);for(z=0;z<ht;z++)Rr[z]=0;for(z=oe;z<=J;z++){const $t=I[z];if(gt>=ht){Xe($t,$,q,!0);continue}let cn;if($t.key!=null)cn=Oe.get($t.key);else for(Ce=he;Ce<=ae;Ce++)if(Rr[Ce-he]===0&&wn($t,x[Ce])){cn=Ce;break}cn===void 0?Xe($t,$,q,!0):(Rr[cn-he]=z+1,cn>=Rt?Rt=cn:yt=!0,b($t,x[cn],M,null,$,q,Q,G,K),gt++)}const ti=yt?W1(Rr):vi;for(Ce=ti.length-1,z=ht-1;z>=0;z--){const $t=he+z,cn=x[$t],ni=x[$t+1],co=$t+1<le?ni.el||ni.placeholder:H;Rr[z]===0?b(null,cn,M,co,$,q,Q,G,K):yt&&(Ce<0||z!==ti[Ce]?ln(cn,M,co,2):Ce--)}}},ln=(I,x,M,H,$=null)=>{const{el:q,type:Q,transition:G,children:K,shapeFlag:z}=I;if(z&6){ln(I.component.subTree,x,M,H);return}if(z&128){I.suspense.move(x,M,H);return}if(z&64){Q.move(I,x,M,se);return}if(Q===Lt){r(q,x,M);for(let J=0;J<K.length;J++)ln(K[J],x,M,H);r(I.anchor,x,M);return}if(Q===Bo){v(I,x,M);return}if(H!==2&&z&1&&G)if(H===0)G.beforeEnter(q),r(q,x,M),vt(()=>G.enter(q),$);else{const{leave:J,delayLeave:ae,afterLeave:oe}=G,he=()=>{I.ctx.isUnmounted?s(q):r(q,x,M)},Oe=()=>{J(q,()=>{he(),oe&&oe()})};ae?ae(q,he,Oe):Oe()}else r(q,x,M)},Xe=(I,x,M,H=!1,$=!1)=>{const{type:q,props:Q,ref:G,children:K,dynamicChildren:z,shapeFlag:le,patchFlag:J,dirs:ae,cacheIndex:oe}=I;if(J===-2&&($=!1),G!=null&&(dr(),Ai(G,null,M,I,!0),pr()),oe!=null&&(x.renderCache[oe]=void 0),le&256){x.ctx.deactivate(I);return}const he=le&1&&ae,Oe=!Yr(I);let Ce;if(Oe&&(Ce=Q&&Q.onVnodeBeforeUnmount)&&Kt(Ce,x,I),le&6)On(I.component,M,H);else{if(le&128){I.suspense.unmount(M,H);return}he&&xn(I,null,x,"beforeUnmount"),le&64?I.type.remove(I,x,M,se,H):z&&!z.hasOnce&&(q!==Lt||J>0&&J&64)?Wt(z,x,M,!1,!0):(q===Lt&&J&384||!$&&le&16)&&Wt(K,x,M),H&&Ze(I)}(Oe&&(Ce=Q&&Q.onVnodeUnmounted)||he)&&vt(()=>{Ce&&Kt(Ce,x,I),he&&xn(I,null,x,"unmounted")},M)},Ze=I=>{const{type:x,el:M,anchor:H,transition:$}=I;if(x===Lt){Sr(M,H);return}if(x===Bo){P(I);return}const q=()=>{s(M),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(I.shapeFlag&1&&$&&!$.persisted){const{leave:Q,delayLeave:G}=$,K=()=>Q(M,q);G?G(I.el,q,K):K()}else q()},Sr=(I,x)=>{let M;for(;I!==x;)M=p(I),s(I),I=M;s(x)},On=(I,x,M)=>{const{bum:H,scope:$,job:q,subTree:Q,um:G,m:K,a:z,parent:le,slots:{__:J}}=I;ic(K),ic(z),H&&bi(H),le&&ce(J)&&J.forEach(ae=>{le.renderCache[ae]=void 0}),$.stop(),q&&(q.flags|=8,Xe(Q,I,x,M)),G&&vt(G,x),vt(()=>{I.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},Wt=(I,x,M,H=!1,$=!1,q=0)=>{for(let Q=q;Q<I.length;Q++)Xe(I[Q],x,M,H,$)},j=I=>{if(I.shapeFlag&6)return j(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const x=p(I.anchor||I.el),M=x&&x[f1];return M?p(M):x};let te=!1;const Z=(I,x,M)=>{I==null?x._vnode&&Xe(x._vnode,null,null,!0):b(x._vnode||null,I,x,null,null,null,M),x._vnode=I,te||(te=!0,qm(),nc(),te=!1)},se={p:b,um:Xe,m:ln,r:Ze,mt:ge,mc:E,pc:re,pbc:T,n:j,o:t};let Ae,Me;return e&&([Ae,Me]=e(se)),{render:Z,hydrate:Ae,createApp:V1(Z,Ae)}}function Qu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Es({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function BE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function HE(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&HE(o,a)),a.type===Ns&&(a.el=o.el),a.type===lt&&!a.el&&(a.el=o.el)}}function W1(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function qE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qE(e)}function ic(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const K1=Symbol.for("v-scx"),G1=()=>pt(K1);function Y1(t,e){return Td(t,null,e)}function $n(t,e,n){return Td(t,e,n)}function Td(t,e,n=je){const{immediate:r,deep:s,flush:i,once:o}=n,a=mt({},n),c=e&&r||!e&&i!=="post";let u;if(Vi){if(i==="sync"){const m=G1();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Fn,m.resume=Fn,m.pause=Fn,m}}const f=bt;a.call=(m,y,b)=>Rn(m,f,y,b);let h=!1;i==="post"?a.scheduler=m=>{vt(m,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(m,y)=>{y?m():vd(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const p=l1(t,e,a);return Vi&&(u?u.push(p):c&&p()),p}function Q1(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?zE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=xa(this),a=Td(s,i.bind(r),n);return o(),a}function zE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const J1=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Ws(e)}Modifiers`];function X1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||je;let s=n;const i=e.startsWith("update:"),o=i&&J1(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Qe(f)?f.trim():f)),o.number&&(s=n.map(Jl)));let a,c=r[a=ju(e)]||r[a=ju(mn(e))];!c&&i&&(c=r[a=ju(Ws(e))]),c&&Rn(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rn(u,t,6,s)}}function WE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const f=WE(u,e,!0);f&&(a=!0,mt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ue(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):mt(o,i),Ue(t)&&r.set(t,o),o)}function jc(t,e){return!t||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Ws(e))||xe(t,e))}function Ju(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:h,data:p,setupState:m,ctx:y,inheritAttrs:b}=t,C=rc(t);let O,R;try{if(n.shapeFlag&4){const P=s||r,D=P;O=en(u.call(D,P,f,h,m,p,y)),R=a}else{const P=e;O=en(P.length>1?P(h,{attrs:a,slots:o,emit:c}):P(h,null)),R=e.props?a:eS(a)}}catch(P){Ho.length=0,Zi(P,t,1),O=ve(lt)}let v=O;if(R&&b!==!1){const P=Object.keys(R),{shapeFlag:D}=v;P.length&&D&7&&(i&&P.some(id)&&(R=tS(R,i)),v=pn(v,R,!1,!0))}return n.dirs&&(v=pn(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Di(v,n.transition),O=v,rc(C),O}function Z1(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ms(s)){if(s.type!==lt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const eS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ra(n))&&((e||(e={}))[n]=t[n]);return e},tS=(t,e)=>{const n={};for(const r in t)(!id(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nS(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?eg(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!jc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?eg(r,o,u):!0:!!o;return!1}function eg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!jc(n,i))return!0}return!1}function Bc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const oc=t=>t.__isSuspense;let Kf=0;const rS={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)sS(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}iS(t,e,n,r,s,o,a,c,u)}},hydrate:oS,normalize:aS},Ad=rS;function la(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function sS(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:f}}=c,h=f("div"),p=t.suspense=KE(t,s,r,e,h,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,h,null,r,p,i,o),p.deps>0?(la(t,"onPending"),la(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Ii(p,t.ssFallback)):p.resolve(!1,!0)}function iS(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:f}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:y,pendingBranch:b,isInFallback:C,isHydrating:O}=h;if(b)h.pendingBranch=p,wn(p,b)?(c(b,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():C&&(O||(c(y,m,n,r,s,null,i,o,a),Ii(h,m)))):(h.pendingId=Kf++,O?(h.isHydrating=!1,h.activeBranch=b):u(b,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),C?(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(y,m,n,r,s,null,i,o,a),Ii(h,m))):y&&wn(p,y)?(c(y,p,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&wn(p,y))c(y,p,n,r,s,h,i,o,a),Ii(h,p);else if(la(e,"onPending"),h.pendingBranch=p,p.shapeFlag&512?h.pendingId=p.component.suspenseId:h.pendingId=Kf++,c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:R,pendingId:v}=h;R>0?setTimeout(()=>{h.pendingId===v&&h.fallback(m)},R):R===0&&h.fallback(m)}}function KE(t,e,n,r,s,i,o,a,c,u,f=!1){const{p:h,m:p,um:m,n:y,o:{parentNode:b,remove:C}}=u;let O;const R=lS(t);R&&e&&e.pendingBranch&&(O=e.pendingId,e.deps++);const v=t.props?$v(t.props.timeout):void 0,P=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Kf++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(F=!1,S=!1){const{vnode:E,activeBranch:_,pendingBranch:T,pendingId:N,effects:k,parentComponent:A,container:ge}=D;let Ee=!1;D.isHydrating?D.isHydrating=!1:F||(Ee=_&&T.transition&&T.transition.mode==="out-in",Ee&&(_.transition.afterLeave=()=>{N===D.pendingId&&(p(T,ge,i===P?y(_):i,0),jf(k))}),_&&(b(_.el)===ge&&(i=y(_)),m(_,A,D,!0)),Ee||p(T,ge,i,0)),Ii(D,T),D.pendingBranch=null,D.isInFallback=!1;let ee=D.parent,ie=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...k),ie=!0;break}ee=ee.parent}!ie&&!Ee&&jf(k),D.effects=[],R&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!S&&e.resolve()),la(E,"onResolve")},fallback(F){if(!D.pendingBranch)return;const{vnode:S,activeBranch:E,parentComponent:_,container:T,namespace:N}=D;la(S,"onFallback");const k=y(E),A=()=>{D.isInFallback&&(h(null,F,T,k,_,null,N,a,c),Ii(D,F))},ge=F.transition&&F.transition.mode==="out-in";ge&&(E.transition.afterLeave=A),D.isInFallback=!0,m(E,_,null,!0),ge||A()},move(F,S,E){D.activeBranch&&p(D.activeBranch,F,S,E),D.container=F},next(){return D.activeBranch&&y(D.activeBranch)},registerDep(F,S,E){const _=!!D.pendingBranch;_&&D.deps++;const T=F.vnode.el;F.asyncDep.catch(N=>{Zi(N,F,0)}).then(N=>{if(F.isUnmounted||D.isUnmounted||D.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:k}=F;Yf(F,N),T&&(k.el=T);const A=!T&&F.subTree.el;S(F,k,b(T||F.subTree.el),T?null:y(F.subTree),D,o,E),A&&C(A),Bc(F,k.el),_&&--D.deps===0&&D.resolve()})},unmount(F,S){D.isUnmounted=!0,D.activeBranch&&m(D.activeBranch,n,F,S),D.pendingBranch&&m(D.pendingBranch,n,F,S)}};return D}function oS(t,e,n,r,s,i,o,a,c){const u=e.suspense=KE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function aS(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=tg(r?n.default:n),t.ssFallback=r?tg(n.fallback):ve(lt)}function tg(t){let e;if(pe(t)){const n=Mi&&t._c;n&&(t._d=!1,zt()),t=t(),n&&(t._d=!0,e=Jt,YE())}return ce(t)&&(t=Z1(t)),t=en(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function GE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):jf(t)}function Ii(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Bc(r,s))}function lS(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Lt=Symbol.for("v-fgt"),Ns=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Ho=[];let Jt=null;function zt(t=!1){Ho.push(Jt=t?null:[])}function YE(){Ho.pop(),Jt=Ho[Ho.length-1]||null}let Mi=1;function ng(t,e=!1){Mi+=t,t<0&&Jt&&e&&(Jt.hasOnce=!0)}function QE(t){return t.dynamicChildren=Mi>0?Jt||vi:null,YE(),Mi>0&&Jt&&Jt.push(t),t}function ca(t,e,n,r,s,i){return QE(Ve(t,e,n,r,s,i,!0))}function or(t,e,n,r,s){return QE(ve(t,e,n,r,s,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const JE=({key:t})=>t??null,Dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Ye(t)||pe(t)?{i:At,r:t,k:e,f:!!n}:t:null);function Ve(t,e=null,n=null,r=0,s=null,i=t===Lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&JE(e),ref:e&&Dl(e),scopeId:dE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return a?(Id(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),Mi>0&&!o&&Jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Jt.push(c),c}const ve=cS;function cS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===RE)&&(t=lt),Ms(t)){const a=pn(t,e,!0);return n&&Id(a,n),Mi>0&&!i&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(t)]=a:Jt.push(a)),a.patchFlag=-2,a}if(ES(t)&&(t=t.__vccOpts),e){e=uS(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Pa(a)),Ue(c)&&(yd(c)&&!ce(c)&&(c=mt({},c)),e.style=Vc(c))}const o=Qe(t)?1:oc(t)?128:pE(t)?64:Ue(t)?4:pe(t)?2:0;return Ve(t,e,n,r,s,o,i,!0)}function uS(t){return t?yd(t)||LE(t)?mt({},t):t:null}function pn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?XE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&JE(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Dl(e)):[i,Dl(e)]:Dl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Di(f,c.clone(f)),f}function Yt(t=" ",e=0){return ve(Ns,null,t,e)}function fS(t,e){const n=ve(Bo,null,t);return n.staticCount=e,n}function hS(t="",e=!1){return e?(zt(),or(lt,null,t)):ve(lt,null,t)}function en(t){return t==null||typeof t=="boolean"?ve(lt):ce(t)?ve(Lt,null,t.slice()):Ms(t)?Vr(t):ve(Ns,null,String(t))}function Vr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pn(t)}function Id(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Id(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!LE(e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[Yt(e)]):n=8);t.children=e,t.shapeFlag|=n}function XE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pa([e.class,r.class]));else if(s==="style")e.style=Vc([e.style,r.style]);else if(Ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Rn(t,e,7,[n,r])}const dS=NE();let pS=0;function mS(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dS,i={uid:pS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:VE(r,s),emitsOptions:WE(r,s),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=X1.bind(null,i),t.ce&&t.ce(i),i}let bt=null;const Ks=()=>bt||At;let ac,Gf;{const t=Mc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ac=e("__VUE_INSTANCE_SETTERS__",n=>bt=n),Gf=e("__VUE_SSR_SETTERS__",n=>Vi=n)}const xa=t=>{const e=bt;return ac(t),t.scope.on(),()=>{t.scope.off(),ac(e)}},rg=()=>{bt&&bt.scope.off(),ac(null)};function ZE(t){return t.vnode.shapeFlag&4}let Vi=!1;function gS(t,e=!1,n=!1){e&&Gf(e);const{props:r,children:s}=t.vnode,i=ZE(t);F1(t,r,i,e),B1(t,s,n||e);const o=i?yS(t,e):void 0;return e&&Gf(!1),o}function yS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,k1);const{setup:r}=n;if(r){dr();const s=t.setupContext=r.length>1?vS(t):null,i=xa(t),o=ka(r,t,0,[t.props,s]),a=ad(o);if(pr(),i(),(a||t.sp)&&!Yr(t)&&Ed(t),a){if(o.then(rg,rg),e)return o.then(c=>{Yf(t,c)}).catch(c=>{Zi(c,t,0)});t.asyncDep=o}else Yf(t,o)}else ew(t)}function Yf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=aE(e)),ew(t)}function ew(t,e,n){const r=t.type;t.render||(t.render=r.render||Fn);{const s=xa(t);dr();try{O1(t)}finally{pr(),s()}}}const _S={get(t,e){return Dt(t,"get",""),t[e]}};function vS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_S),slots:t.slots,emit:t.emit,expose:e}}function Hc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(aE(_d(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jo)return jo[n](t)},has(e,n){return n in e||n in jo}})):t.proxy}function Qf(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function ES(t){return pe(t)&&"__vccOpts"in t}const Fe=(t,e)=>o1(t,e,Vi);function Ke(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!ce(e)?Ms(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ms(n)&&(n=[n]),ve(t,e,n))}const wS="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jf;const sg=typeof window<"u"&&window.trustedTypes;if(sg)try{Jf=sg.createPolicy("vue",{createHTML:t=>t})}catch{}const tw=Jf?t=>Jf.createHTML(t):t=>t,bS="http://www.w3.org/2000/svg",TS="http://www.w3.org/1998/Math/MathML",rr=typeof document<"u"?document:null,ig=rr&&rr.createElement("template"),AS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?rr.createElementNS(bS,t):e==="mathml"?rr.createElementNS(TS,t):n?rr.createElement(t,{is:n}):rr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rr.createTextNode(t),createComment:t=>rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ig.innerHTML=tw(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=ig.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Or="transition",Ao="animation",ua=Symbol("_vtc"),nw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},IS=mt({},mE,nw),SS=t=>(t.displayName="Transition",t.props=IS,t),RS=SS((t,{slots:e})=>Ke(p1,PS(t),e)),ws=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},og=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function PS(t){const e={};for(const k in t)k in nw||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=CS(s),b=y&&y[0],C=y&&y[1],{onBeforeEnter:O,onEnter:R,onEnterCancelled:v,onLeave:P,onLeaveCancelled:D,onBeforeAppear:F=O,onAppear:S=R,onAppearCancelled:E=v}=e,_=(k,A,ge,Ee)=>{k._enterCancelled=Ee,bs(k,A?f:a),bs(k,A?u:o),ge&&ge()},T=(k,A)=>{k._isLeaving=!1,bs(k,h),bs(k,m),bs(k,p),A&&A()},N=k=>(A,ge)=>{const Ee=k?S:R,ee=()=>_(A,k,ge);ws(Ee,[A,ee]),ag(()=>{bs(A,k?c:i),tr(A,k?f:a),og(Ee)||lg(A,r,b,ee)})};return mt(e,{onBeforeEnter(k){ws(O,[k]),tr(k,i),tr(k,o)},onBeforeAppear(k){ws(F,[k]),tr(k,c),tr(k,u)},onEnter:N(!1),onAppear:N(!0),onLeave(k,A){k._isLeaving=!0;const ge=()=>T(k,A);tr(k,h),k._enterCancelled?(tr(k,p),fg()):(fg(),tr(k,p)),ag(()=>{k._isLeaving&&(bs(k,h),tr(k,m),og(P)||lg(k,r,C,ge))}),ws(P,[k,ge])},onEnterCancelled(k){_(k,!1,void 0,!0),ws(v,[k])},onAppearCancelled(k){_(k,!0,void 0,!0),ws(E,[k])},onLeaveCancelled(k){T(k),ws(D,[k])}})}function CS(t){if(t==null)return null;if(Ue(t))return[Xu(t.enter),Xu(t.leave)];{const e=Xu(t);return[e,e]}}function Xu(t){return $v(t)}function tr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ua]||(t[ua]=new Set)).add(e)}function bs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ua];n&&(n.delete(e),n.size||(t[ua]=void 0))}function ag(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let kS=0;function lg(t,e,n,r){const s=t._endId=++kS,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=OS(t,e);if(!o)return r();const u=o+"end";let f=0;const h=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++f>=c&&h()};setTimeout(()=>{f<c&&h()},a+1),t.addEventListener(u,p)}function OS(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${Or}Delay`),i=r(`${Or}Duration`),o=cg(s,i),a=r(`${Ao}Delay`),c=r(`${Ao}Duration`),u=cg(a,c);let f=null,h=0,p=0;e===Or?o>0&&(f=Or,h=o,p=i.length):e===Ao?u>0&&(f=Ao,h=u,p=c.length):(h=Math.max(o,u),f=h>0?o>u?Or:Ao:null,p=f?f===Or?i.length:c.length:0);const m=f===Or&&/\b(transform|all)(,|$)/.test(r(`${Or}Property`).toString());return{type:f,timeout:h,propCount:p,hasTransform:m}}function cg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ug(n)+ug(t[r])))}function ug(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function fg(){return document.body.offsetHeight}function NS(t,e,n){const r=t[ua];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hg=Symbol("_vod"),xS=Symbol("_vsh"),DS=Symbol(""),LS=/(^|;)\s*display\s*:/;function MS(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ll(r,a,"")}else for(const o in e)n[o]==null&&Ll(r,o,"");for(const o in n)o==="display"&&(i=!0),Ll(r,o,n[o])}else if(s){if(e!==n){const o=r[DS];o&&(n+=";"+o),r.cssText=n,i=LS.test(n)}}else e&&t.removeAttribute("style");hg in t&&(t[hg]=i?r.display:"",t[xS]&&(r.display="none"))}const dg=/\s*!important$/;function Ll(t,e,n){if(ce(n))n.forEach(r=>Ll(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=VS(t,e);dg.test(n)?t.setProperty(Ws(r),n.replace(dg,""),"important"):t[r]=n}}const pg=["Webkit","Moz","ms"],Zu={};function VS(t,e){const n=Zu[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return Zu[e]=r;r=Lc(r);for(let s=0;s<pg.length;s++){const i=pg[s]+r;if(i in t)return Zu[e]=i}return e}const mg="http://www.w3.org/1999/xlink";function gg(t,e,n,r,s,i=kI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(mg,e.slice(6,e.length)):t.setAttributeNS(mg,e,n):n==null||i&&!jv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Sn(n)?String(n):n)}function yg(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tw(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $r(t,e,n,r){t.addEventListener(e,n,r)}function FS(t,e,n,r){t.removeEventListener(e,n,r)}const _g=Symbol("_vei");function US(t,e,n,r,s=null){const i=t[_g]||(t[_g]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=$S(e);if(r){const u=i[e]=HS(r,s);$r(t,a,u,c)}else o&&(FS(t,a,o,c),i[e]=void 0)}}const vg=/(?:Once|Passive|Capture)$/;function $S(t){let e;if(vg.test(t)){e={};let r;for(;r=t.match(vg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ws(t.slice(2)),e]}let ef=0;const jS=Promise.resolve(),BS=()=>ef||(jS.then(()=>ef=0),ef=Date.now());function HS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Rn(qS(r,n.value),e,5,[r])};return n.value=t,n.attached=BS(),n}function qS(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Eg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zS=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?NS(t,r,o):e==="style"?MS(t,n,r):Ra(e)?id(e)||US(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WS(t,e,r,o))?(yg(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gg(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?yg(t,mn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gg(t,e,r,o))};function WS(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Eg(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Eg(e)&&Qe(n)?!1:e in t}const Fi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>bi(e,n):e};function KS(t){t.target.composing=!0}function wg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fr=Symbol("_assign"),_9={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fr]=Fi(s);const i=r||s.props&&s.props.type==="number";$r(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Jl(a)),t[fr](a)}),n&&$r(t,"change",()=>{t.value=t.value.trim()}),e||($r(t,"compositionstart",KS),$r(t,"compositionend",wg),$r(t,"change",wg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[fr]=Fi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Jl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},v9={deep:!0,created(t,e,n){t[fr]=Fi(n),$r(t,"change",()=>{const r=t._modelValue,s=fa(t),i=t.checked,o=t[fr];if(ce(r)){const a=cd(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(Qi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(rw(t,i))})},mounted:bg,beforeUpdate(t,e,n){t[fr]=Fi(n),bg(t,e,n)}};function bg(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=cd(e,r.props.value)>-1;else if(Qi(e))s=e.has(r.props.value);else{if(e===n)return;s=Ca(e,rw(t,!0))}t.checked!==s&&(t.checked=s)}const E9={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qi(e);$r(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jl(fa(o)):fa(o));t[fr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Gn(()=>{t._assigning=!1})}),t[fr]=Fi(r)},mounted(t,{value:e}){Tg(t,e)},beforeUpdate(t,e,n){t[fr]=Fi(n)},updated(t,{value:e}){t._assigning||Tg(t,e)}};function Tg(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Qi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=fa(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=cd(e,a)>-1}else o.selected=e.has(a);else if(Ca(fa(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fa(t){return"_value"in t?t._value:t.value}function rw(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const GS=["ctrl","shift","alt","meta"],YS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GS.some(n=>t[`${n}Key`]&&!e.includes(n))},w9=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=YS[e[o]];if(a&&a(s,e))return}return t(s,...i)})},sw=mt({patchProp:zS},AS);let qo,Ag=!1;function QS(){return qo||(qo=q1(sw))}function JS(){return qo=Ag?qo:z1(sw),Ag=!0,qo}const XS=(...t)=>{const e=QS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ow(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,iw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},ZS=(...t)=>{const e=JS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ow(r);if(s)return n(s,!0,iw(s))},e};function iw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ow(t){return Qe(t)?document.querySelector(t):t}const eR=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,tR=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,nR=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function rR(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){sR(t);return}return e}function sR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ha(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!nR.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(eR.test(t)||tR.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,rR)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const iR=/#/g,oR=/&/g,aR=/\//g,lR=/=/g,Sd=/\+/g,cR=/%5e/gi,uR=/%60/gi,fR=/%7c/gi,hR=/%20/gi;function dR(t){return encodeURI(""+t).replace(fR,"|")}function Xf(t){return dR(typeof t=="string"?t:JSON.stringify(t)).replace(Sd,"%2B").replace(hR,"+").replace(iR,"%23").replace(oR,"%26").replace(uR,"`").replace(cR,"^").replace(aR,"%2F")}function tf(t){return Xf(t).replace(lR,"%3D")}function lc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function pR(t){return lc(t.replace(Sd," "))}function mR(t){return lc(t.replace(Sd," "))}function Rd(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=pR(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=mR(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function gR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${tf(t)}=${Xf(n)}`).join("&"):`${tf(t)}=${Xf(e)}`:tf(t)}function yR(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>gR(e,t[e])).filter(Boolean).join("&")}const _R=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,vR=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,ER=/^([/\\]\s*){2,}[^/\\]/,wR=/^[\s\0]*(blob|data|javascript|vbscript):$/i,bR=/\/$|\/\?|\/#/,TR=/^\.?\//;function Ar(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?_R.test(t):vR.test(t)||(e.acceptRelative?ER.test(t):!1)}function AR(t){return!!t&&wR.test(t)}function Zf(t="",e){return e?bR.test(t):t.endsWith("/")}function Ui(t="",e){if(!e)return(Zf(t)?t.slice(0,-1):t)||"/";if(!Zf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function aw(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Zf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function IR(t,e){if(cw(e)||Ar(t))return t;const n=Ui(e);return t.startsWith(n)?t:qc(n,t)}function Ig(t,e){if(cw(e))return t;const n=Ui(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function lw(t,e){const n=hw(t),r={...Rd(n.search),...e};return n.search=yR(r),PR(n)}function cw(t){return!t||t==="/"}function SR(t){return t&&t!=="/"}function qc(t,...e){let n=t||"";for(const r of e.filter(s=>SR(s)))if(n){const s=r.replace(TR,"");n=aw(n)+s}else n=r;return n}function uw(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const o of n)if(!(!o||o==="/")){for(const[a,c]of o.split(e).entries())if(!(!c||c===".")){if(c===".."){if(r.length===1&&Ar(r[0]))continue;r.pop(),s--;continue}if(a===1&&r[r.length-1]?.endsWith(":/")){r[r.length-1]+="/"+c;continue}r.push(c),s++}}let i=r.join("/");return s>=0?n[0]?.startsWith("/")&&!i.startsWith("/")?i="/"+i:n[0]?.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,n[n.length-1]?.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function RR(t,e){return lc(Ui(t))===lc(Ui(e))}const fw=Symbol.for("ufo:protocolRelative");function hw(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,p=""]=n;return{protocol:h.toLowerCase(),pathname:p,href:h+p,auth:"",host:"",search:"",hash:""}}if(!Ar(t,{acceptRelative:!0}))return Sg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:f}=Sg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:f,[fw]:!r}}function Sg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function PR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[fw]?(t.protocol||"")+"//":"")+s+i+e+n+r}class CR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function kR(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",r=t.request?.url||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new CR(o,t.error?{cause:t.error}:void 0);for(const c of["request","options","response"])Object.defineProperty(a,c,{get(){return t[c]}});for(const[c,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,c,{get(){return t.response&&t.response[u]}});return a}const OR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Rg(t="GET"){return OR.has(t.toUpperCase())}function NR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const xR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),DR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function LR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return DR.test(e)?"json":xR.has(e)||e.startsWith("text/")?"text":"blob"}function MR(t,e,n,r){const s=VR(e?.headers??t?.headers,n?.headers,r);let i;return(n?.query||n?.params||e?.params||e?.query)&&(i={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:i,params:i,headers:s}}function VR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function yl(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const FR=new Set([408,409,425,429,500,502,503,504]),UR=new Set([101,204,205,304]);function dw(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let f;typeof a.options.retry=="number"?f=a.options.retry:f=Rg(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):FR.has(h))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:f-1})}}const u=kR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const f={request:c,options:MR(c,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await yl(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=IR(f.request,f.options.baseURL)),f.options.query&&(f.request=lw(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&Rg(f.options.method)&&(NR(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let h;if(!f.options.signal&&f.options.timeout){const m=new r;h=setTimeout(()=>{const y=new Error("[TimeoutError]: The operation was aborted due to timeout");y.name="TimeoutError",y.code=23,m.abort(y)},f.options.timeout),f.options.signal=m.signal}try{f.response=await e(f.request,f.options)}catch(m){return f.error=m,f.options.onRequestError&&await yl(f,f.options.onRequestError),await s(f)}finally{h&&clearTimeout(h)}if((f.response.body||f.response._bodyInit)&&!UR.has(f.response.status)&&f.options.method!=="HEAD"){const m=(f.options.parseResponse?"json":f.options.responseType)||LR(f.response.headers.get("content-type")||"");switch(m){case"json":{const y=await f.response.text(),b=f.options.parseResponse||ha;f.response._data=b(y);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[m]()}}return f.options.onResponse&&await yl(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await yl(f,f.options.onResponseError),await s(f)):f.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>dw({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const cc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),$R=cc.fetch?(...t)=>cc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),jR=cc.Headers,BR=cc.AbortController,HR=dw({fetch:$R,Headers:jR,AbortController:BR}),qR=HR,zR=()=>window?.__NUXT__?.config||{},Pd=()=>zR().app,WR=()=>Pd().baseURL,KR=()=>Pd().buildAssetsDir,Cd=(...t)=>uw(zc(),KR(),...t),zc=(...t)=>{const e=Pd(),n=e.cdnURL||e.baseURL;return t.length?uw(n,...t):n};globalThis.__buildAssetsURL=Cd,globalThis.__publicAssetsURL=zc;globalThis.$fetch||(globalThis.$fetch=qR.create({baseURL:WR()}));"global"in globalThis||(globalThis.global=globalThis);function eh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?eh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const GR={run:t=>t()},YR=()=>GR,pw=typeof console.createTask<"u"?console.createTask:YR;function QR(t,e){const n=e.shift(),r=pw(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function JR(t,e){const n=e.shift(),r=pw(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function nf(t,e){for(const n of[...t])n(e)}class XR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=eh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=eh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(QR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(JR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&nf(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&nf(this._after,s)}):(this._after&&s&&nf(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function mw(){return new XR}function ZR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;th.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{th.delete(u)}}}}function eP(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=ZR({...t,...r})),e[n]}}}const uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Pg="__unctx__",tP=uc[Pg]||(uc[Pg]=eP()),nP=(t,e={})=>tP.get(t,e),Cg="__unctx_async_handlers__",th=uc[Cg]||(uc[Cg]=new Set);function Si(t){const e=[];for(const s of th){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const kg={name:"page",mode:"out-in"},rP=!1,sP=!1,iP={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},oP=null,aP="#__nuxt",gw="nuxt-app",Og=36e5,lP="vite:preloadError";function yw(t=gw){return nP(t,{asyncContext:!1})}const cP="__nuxt_plugin";function uP(t){let e=0;const n={_id:t.id||gw||"nuxt-app",_scope:fd(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.18.0"},get vue(){return n.vueApp.version}},payload:Ln({...t.ssrContext?.payload||{},data:Ln({}),state:br({}),once:new Set,_errors:Ln({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Xi()?n._scope.run(()=>Ng(n,s)):Ng(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Ln({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const i in s)switch(i){case"data":case"state":case"_errors":Object.assign(n.payload[i],s[i]);break;default:n.payload[i]=s[i]}}n.hooks=mw(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;_l(n,o,i),_l(n.vueApp.config.globalProperties,o,i)},_l(n.vueApp,"$nuxt",n),_l(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(lP,i=>{n.callHook("app:chunkError",{error:i.payload}),i.payload.message.includes("Unable to preload CSS")&&i.preventDefault()}),window.useNuxtApp||=Le;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function fP(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function hP(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function dP(t,e){const n=new Set,r=[],s=[];let i,o=0;async function a(c){const u=c.dependsOn?.filter(f=>e.some(h=>h._name===f)&&!n.has(f))??[];if(u.length>0)r.push([new Set(u),c]);else{const f=hP(t,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([h,p])=>{h.has(c._name)&&(h.delete(c._name),h.size===0&&(o++,await a(p)))})))}).catch(h=>{if(!c.parallel&&!t.payload.error)throw i;i||=h});c.parallel?s.push(f):await f}}for(const c of e)fP(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i)throw t.payload.error||i}function on(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[cP]:!0,_name:e})}function Ng(t,e,n){const r=()=>e();return yw(t._id).set(t),t.vueApp.runWithContext(r)}function _w(t){let e;return Na()&&(e=Ks()?.appContext.app.$nuxt),e||=yw(t).tryUse(),e||null}function Le(t){const e=_w(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Gs(t){return Le().$config}function _l(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function pP(t,e){return{ctx:{table:t},matchAll:n=>Ew(n,t)}}function vw(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,vw(s)])):new Map(Object.entries(t[n]));return e}function mP(t){return pP(vw(t))}function Ew(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of xg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of xg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Ew(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function xg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function rf(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function nh(t,e,n=".",r){if(!rf(e))return nh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:rf(o)&&rf(s[i])?s[i]=nh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function gP(t){return(...e)=>e.reduce((n,r)=>nh(n,r,"",t),{})}const ww=gP();function yP(t,e){try{return e in t}catch{return!1}}class Dg extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:rh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=bw(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function _P(t){if(typeof t=="string")return new Dg(t);if(vP(t))return t;const e=new Dg(t.message??t.statusMessage??"",{cause:t.cause||t});if(yP(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=rh(t.statusCode,e.statusCode):t.status&&(e.statusCode=rh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;bw(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function vP(t){return t?.constructor?.__h3_error__===!0}const EP=/[^\u0009\u0020-\u007E]/g;function bw(t=""){return t.replace(EP,"")}function rh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Tw=Symbol("layout-meta"),Vs=Symbol("route"),It=()=>Le()?.$router,Wc=()=>Na()?pt(Vs,Le()._route):Le()._route;function b9(t){return t}const wP=()=>{try{if(Le()._processingMiddleware)return!0}catch{return!1}return!1},bP=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?sh(t):It().resolve(t).href;if(e?.open){const{target:c="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([h,p])=>p!==void 0).map(([h,p])=>`${h.toLowerCase()}=${p}`).join(", ");return open(n,c,f),Promise.resolve()}const r=Ar(n,{acceptRelative:!0}),s=e?.external||r;if(s){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&AR(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=wP();if(!s&&i){if(e?.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:f}=hw(t);return{path:c,...u&&{query:Rd(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=It(),a=Le();return s?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function sh(t){return lw(t.path||"",t.query||{})+(t.hash||"")}const Aw="__nuxt_error",Kc=()=>lE(Le().payload,"error"),Is=t=>{const e=xs(t);try{const n=Le(),r=Kc();n.hooks.callHook("app:error",e),r.value||=e}catch{throw e}return e},Iw=async(t={})=>{const e=Le(),n=Kc();e.callHook("app:error:cleared",t),t.redirect&&await It().replace(t.redirect),n.value=oP},Sw=t=>!!t&&typeof t=="object"&&Aw in t,xs=t=>{const e=_P(t);return Object.defineProperty(e,Aw,{value:!0,configurable:!1,writable:!1}),e};function Lg(t){const e=AP(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const TP="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function AP(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=TP.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const IP=-1,SP=-2,RP=-3,PP=-4,CP=-5,kP=-6;function OP(t,e){return NP(JSON.parse(t),e)}function NP(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===IP)return;if(i===RP)return NaN;if(i===PP)return 1/0;if(i===CP)return-1/0;if(i===kP)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e?.[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let m=1;m<a.length;m+=1)f.add(s(a[m]));break;case"Map":const h=new Map;r[i]=h;for(let m=1;m<a.length;m+=2)h.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[c],y=a[1],b=Lg(y),C=new m(b);r[i]=C;break}case"ArrayBuffer":{const m=a[1],y=Lg(m);r[i]=y;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const f=a[u];f!==SP&&(c[u]=s(f))}}else{const c={};r[i]=c;for(const u in a){const f=a[u];c[u]=s(f)}}return r[i]}return s(0)}const xP=new Set(["link","style","script","noscript"]),DP=new Set(["title","titleTemplate","script","style","noscript"]),Mg=new Set(["base","meta","link","style","script","noscript"]),LP=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),MP=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),VP=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),FP=new Set(["templateParams","htmlAttrs","bodyAttrs"]),UP=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const $P=["name","property","http-equiv"],jP=new Set(["viewport","description","keywords","robots"]);function Rw(t){const e=t.split(":");return e.length?UP.has(e[1]):!1}function ih(t){const{props:e,tag:n}=t;if(MP.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of $P)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=jP.has(s),c=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${c}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(DP.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Vg(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function fc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>fc(i,e));if(s?.constructor===Object){const i={};for(const o of Object.keys(s))i[o]=fc(s[o],e,o);return i}return s}function BP(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function Pw(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=BP(n,r);return}if(VP.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function HP(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=Pw({tag:t,props:{}},n);return r.key&&xP.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function qP(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=fc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(HP(s,o))}),r.flat()}const oh=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Fg={base:-10,title:10},zP={critical:-8,high:-1,low:2},Ug={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},WP=/@import/,Io=t=>t===""||t===!0;function KP(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=zP[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Ug;if(e.tag in Fg)n=Fg[e.tag];else if(e.tag==="meta"){const i=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;i&&(n=Ug.meta[i])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?Io(e.props.async)?n=s.script.async:e.props.src&&!Io(e.props.defer)&&!Io(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=s.script.sync:Io(e.props.defer)&&e.props.src&&!Io(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&WP.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function $g(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function GP(t={}){const e=mw();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:a=>$g(o,a),push(a,c){const u={...c||{}};delete u.head;const f=u._index??o._entryCount++,h={_i:f,input:a,options:u},p={_poll(m=!1){o.dirty=!0,!m&&i.add(f),e.callHook("entries:updated",o)},dispose(){r.delete(f)&&o.invalidate()},patch(m){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(h.input=m,r.set(f,h),p._poll())}};return p.patch(a),p},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);i.size;){const p=i.values().next().value;i.delete(p);const m=r.get(p);if(m){const y={tags:qP(m.input,t.propResolvers||[]).map(b=>Object.assign(b,m.options)),entry:m};await e.callHook("entries:normalize",y),m._tags=y.tags.map((b,C)=>(b._w=KP(o,b),b._p=(m._i<<10)+C,b._d=ih(b),b))}}let c=!1;a.entries.flatMap(p=>(p._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(oh).reduce((p,m)=>{const y=String(m._d||m._p);if(!p.has(y))return p.set(y,m);const b=p.get(y);if((m?.tagDuplicateStrategy||(FP.has(m.tag)?"merge":null)||(m.key&&m.key===b.key?"merge":null))==="merge"){const O={...b.props};Object.entries(m.props).forEach(([R,v])=>O[R]=R==="style"?new Map([...b.props.style||new Map,...v]):R==="class"?new Set([...b.props.class||new Set,...v]):v),p.set(y,{...m,props:O})}else m._p>>10===b._p>>10&&m.tag==="meta"&&Rw(y)?(p.set(y,Object.assign([...Array.isArray(b)?b:[b],m],m)),c=!0):(m._w===b._w?m._p>b._p:m?._w<b?._w)&&p.set(y,m);return p},a.tagMap);const u=a.tagMap.get("title"),f=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,f){const p=f?.textContent;if(o._titleTemplate=p,p){let m=typeof p=="function"?p(u?.textContent):p;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",u?.textContent||"")),u?m===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:m}):(f.tag="title",f.textContent=m)}}a.tags=Array.from(a.tagMap.values()),c&&(a.tags=a.tags.flat().sort(oh)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const h=[];for(const p of a.tags){const{innerHTML:m,tag:y,props:b}=p;if(LP.has(y)&&!(Object.keys(b).length===0&&!p.innerHTML&&!p.textContent)&&!(y==="meta"&&!b.content&&!b["http-equiv"]&&!b.charset)){if(y==="script"&&m){if(b.type?.endsWith("json")){const C=typeof m=="string"?m:JSON.stringify(m);p.innerHTML=C.replace(/</g,"\\u003C")}else typeof m=="string"&&(p.innerHTML=m.replace(new RegExp(`</${y}`,"g"),`<\\/${y}`));p._d=ih(p)}h.push(p)}}return h},invalidate(){for(const a of r.values())i.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>$g(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Fr="%separator",YP=new RegExp(`${Fr}(?:\\s*${Fr})*`,"g");function QP(t,e,n=!1){let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");r=t[e.substring(0,s)]?.[e.substring(s+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function vl(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Fr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Fr||!i.includes(a))return a;const c=QP(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Fr)&&(t=t.slice(0,-Fr.length)),t.startsWith(Fr)&&(t=t.slice(Fr.length)),t=t.replace(YP,n||"").trim()),t}const jg=t=>t.includes(":key")?t:t.split(":").join(":key:"),JP={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=jg(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=jg(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(oh))}}},XP={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function ah(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>ah(n)));if(t?.constructor===Object){const n={};for(const r of Object.keys(t))n[r]=await ah(t[r]);return n}return t}const ZP={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(ah(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},eC={meta:"content",link:"href",htmlAttrs:"lang"},tC=["innerHTML","textContent"],nC=t=>({key:"template-params",hooks:{"entries:normalize":e=>{const n=e.tags.filter(r=>r.tag==="templateParams"&&r.mode==="server")?.[0]?.props||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...t._ssrPayload?.templateParams||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{const r=e.get("templateParams")?.props||{},s=r.separator||"|";delete r.separator,r.pageTitle=vl(r.pageTitle||t._title||"",r,s);for(const i of n){if(i.processTemplateParams===!1)continue;const o=eC[i.tag];if(o&&typeof i.props[o]=="string")i.props[o]=vl(i.props[o],r,s);else if(i.processTemplateParams||i.tag==="titleTemplate"||i.tag==="title")for(const a of tC)typeof i[a]=="string"&&(i[a]=vl(i[a],r,s,i.tag==="script"&&i.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=vl(n.textContent,t._templateParams,t._separator))}}}),rC=(t,e)=>Ye(e)?XI(e):e,kd="usehead";function sC(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(kd,t)}}.install}function iC(){if(Na()){const t=pt(kd);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function oC(t,e={}){const n=e.head||iC();return n.ssr?n.push(t||{},e):aC(n,t,e)}function aC(t,e,n={}){const r=Vt(!1);let s;return Y1(()=>{const o=r.value?{}:fc(e,rC);s?s.patch(o):s=t.push(o,n)}),Ks()&&(eo(()=>{s.dispose()}),wE(()=>{r.value=!0}),EE(()=>{r.value=!1})),s}function Cw(t){const e=t||_w();return e?.ssrContext?.head||e?.runWithContext(()=>{if(Na())return pt(kd)})}function Bg(t,e={}){const n=Cw(e.nuxt);if(n)return oC(t,{head:n,...e})}const lC="modulepreload",cC=function(t,e){return new URL(t,e).href},Hg={},Re=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=u(n.map(f=>{if(f=cC(f,r),f in Hg)return;Hg[f]=!0;const h=f.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let b=o.length-1;b>=0;b--){const C=o[b];if(C.href===f&&(!h||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${p}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":lC,h||(y.as="script"),y.crossOrigin="",y.href=f,c&&y.setAttribute("nonce",c),document.head.appendChild(y),h)return new Promise((b,C)=>{y.addEventListener("load",b),y.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Ml,Vl;function uC(){return Ml=$fetch(Cd(`builds/meta/${Gs().app.buildId}.json`),{responseType:"json"}),Ml.then(t=>{Vl=mP(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Ml}function Gc(){return Ml||uC()}async function Od(t){const e=typeof t=="string"?t:t.path;if(await Gc(),!Vl)return console.error("[nuxt] Error creating app manifest matcher.",Vl),{};try{return ww({},...Vl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function qg(t,e={}){if(!await Ow(t))return null;const r=await hC(t,e);return await kw(r)||null}const fC="_payload.json";async function hC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Ar(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Gs(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Ow(t)?i:r.app.baseURL;return qc(o,n.pathname,fC+(s?`?${s}`:""))}async function kw(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(Nw));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Ow(t=Wc().path){const e=Le();return t=Ui(t),(await Gc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Od({path:t});return!!r.prerender&&!r.redirect})}let Ts=null;async function dC(){if(Ts)return Ts;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Nw(t.textContent||""),n=t.dataset.src?await kw(t.dataset.src):void 0;return Ts={...e,...n,...window.__NUXT__},Ts.config?.public&&(Ts.config.public=br(Ts.config.public)),Ts}async function Nw(t){return await OP(t,Le()._payloadRevivers)}function pC(t,e){Le()._payloadRevivers[t]=e}const mC=[["NuxtError",t=>xs(t)],["EmptyShallowRef",t=>Kn(t==="_"?void 0:t==="0n"?BigInt(0):ha(t))],["EmptyRef",t=>Vt(t==="_"?void 0:t==="0n"?BigInt(0):ha(t))],["ShallowRef",t=>Kn(t)],["ShallowReactive",t=>Ln(t)],["Ref",t=>Vt(t)],["Reactive",t=>br(t)]],gC=on({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of mC)pC(r,s);Object.assign(t.payload,([e,n]=Si(()=>t.runWithContext(dC)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Nd(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{const i=new Map,o=new Promise(m=>{t.resolveTags().then(y=>{m(y.map(b=>{const C=i.get(b._d)||0,O={tag:b,id:(C?`${b._d}:${C}`:b._d)||Vg(b),shouldRender:!0};return b._d&&Rw(b._d)&&i.set(b._d,C+1),O}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const y=n[m]?.children;for(const b of y){const C=b.tagName.toLowerCase();if(!Mg.has(C))continue;const O=Pw({tag:C,props:{}},{innerHTML:b.innerHTML,...b.getAttributeNames().reduce((R,v)=>(R[v]=b.getAttribute(v),R),{})||{}});if(O.key=b.getAttribute("data-hid")||void 0,O._d=ih(O)||Vg(O),a.elMap.has(O._d)){let R=1,v=O._d;for(;a.elMap.has(v);)v=`${O._d}:${R++}`;a.elMap.set(v,b)}else a.elMap.set(O._d,b)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(m,y,b){const C=`${m}:${y}`;a.sideEffects[C]=b,delete a.pendingSideEffects[C]}function u({id:m,$el:y,tag:b}){const C=b.tag.endsWith("Attrs");a.elMap.set(m,y),C||(b.textContent&&b.textContent!==y.textContent&&(y.textContent=b.textContent),b.innerHTML&&b.innerHTML!==y.innerHTML&&(y.innerHTML=b.innerHTML),c(m,"el",()=>{y?.remove(),a.elMap.delete(m)}));for(const O in b.props){if(!Object.prototype.hasOwnProperty.call(b.props,O))continue;const R=b.props[O];if(O.startsWith("on")&&typeof R=="function"){const P=y?.dataset;if(P&&P[`${O}fired`]){const D=O.slice(0,-5);R.call(y,new Event(D.substring(2)))}y.getAttribute(`data-${O}`)!==""&&((b.tag==="bodyAttrs"?n.defaultView:y).addEventListener(O.substring(2),R.bind(y)),y.setAttribute(`data-${O}`,""));continue}const v=`attr:${O}`;if(O==="class"){if(!R)continue;for(const P of R)C&&c(m,`${v}:${P}`,()=>y.classList.remove(P)),!y.classList.contains(P)&&y.classList.add(P)}else if(O==="style"){if(!R)continue;for(const[P,D]of R)c(m,`${v}:${P}`,()=>{y.style.removeProperty(P)}),y.style.setProperty(P,D)}else R!==!1&&R!==null&&(y.getAttribute(O)!==R&&y.setAttribute(O,R===!0?"":String(R)),C&&c(m,v,()=>y.removeAttribute(O)))}}const f=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const m of p){const{tag:y,shouldRender:b,id:C}=m;if(b){if(y.tag==="title"){n.title=y.textContent,c("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(C),m.$el?u(m):Mg.has(y.tag)&&f.push(m)}}for(const m of f){const y=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),u(m),h[y]=h[y]||n.createDocumentFragment(),h[y].appendChild(m.$el)}for(const m of p)await t.hooks.callHook("dom:renderTag",m,n,c);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function yC(t={}){const e=t.domOptions?.render||Nd;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return GP({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function _C(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function vC(t={}){const e=yC({domOptions:{render:_C(()=>Nd(e),n=>setTimeout(n,0))},...t});return e.install=sC(e),e}const EC={disableDefaults:!0,disableCapoSorting:!1,plugins:[XP,ZP,nC,JP]},wC=on({name:"nuxt:head",enforce:"pre",setup(t){const e=vC(EC);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Nd(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hi=typeof document<"u";function xw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xw(t.default)}const Ne=Object.assign;function sf(t,e){const n={};for(const r in e){const s=e[r];n[r]=Pn(s)?s.map(t):t(s)}return n}const zo=()=>{},Pn=Array.isArray,Dw=/#/g,TC=/&/g,AC=/\//g,IC=/=/g,SC=/\?/g,Lw=/\+/g,RC=/%5B/g,PC=/%5D/g,Mw=/%5E/g,CC=/%60/g,Vw=/%7B/g,kC=/%7C/g,Fw=/%7D/g,OC=/%20/g;function xd(t){return encodeURI(""+t).replace(kC,"|").replace(RC,"[").replace(PC,"]")}function NC(t){return xd(t).replace(Vw,"{").replace(Fw,"}").replace(Mw,"^")}function lh(t){return xd(t).replace(Lw,"%2B").replace(OC,"+").replace(Dw,"%23").replace(TC,"%26").replace(CC,"`").replace(Vw,"{").replace(Fw,"}").replace(Mw,"^")}function xC(t){return lh(t).replace(IC,"%3D")}function DC(t){return xd(t).replace(Dw,"%23").replace(SC,"%3F")}function LC(t){return t==null?"":DC(t).replace(AC,"%2F")}function da(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const MC=/\/$/,VC=t=>t.replace(MC,"");function of(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:da(o)}}function FC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$i(e.matched[r],n.matched[s])&&Uw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $i(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Uw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$C(t[n],e[n]))return!1;return!0}function $C(t,e){return Pn(t)?Wg(t,e):Pn(e)?Wg(e,t):t===e}function Wg(t,e){return Pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var pa;(function(t){t.pop="pop",t.push="push"})(pa||(pa={}));var Wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wo||(Wo={}));function BC(t){if(!t)if(hi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VC(t)}const HC=/^[^#]+#/;function qC(t,e){return t.replace(HC,"#")+e}function zC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Yc=()=>({left:window.scrollX,top:window.scrollY});function WC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kg(t,e){return(history.state?history.state.position-e:-1)+t}const ch=new Map;function KC(t,e){ch.set(t,e)}function GC(t){const e=ch.get(t);return ch.delete(t),e}let YC=()=>location.protocol+"//"+location.host;function $w(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),zg(c,"")}return zg(n,t)+r+s}function QC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=$w(t,location),y=n.value,b=e.value;let C=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}C=b?p.position-b.position:0}else r(m);s.forEach(O=>{O(n.value,y,{delta:C,type:pa.pop,direction:C?C>0?Wo.forward:Wo.back:Wo.unknown})})};function c(){o=n.value}function u(p){s.push(p);const m=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(Ne({},p.state,{scroll:Yc()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Gg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Yc():null}}function JC(t){const{history:e,location:n}=window,r={value:$w(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:YC()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(c,u){const f=Ne({},e.state,Gg(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=Ne({},s.value,e.state,{forward:c,scroll:Yc()});i(f.current,f,!0);const h=Ne({},Gg(r.value,c,null),{position:f.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function XC(t){t=BC(t);const e=JC(t),n=QC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:qC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ZC(t){return typeof t=="string"||t&&typeof t=="object"}function jw(t){return typeof t=="string"||typeof t=="symbol"}const Bw=Symbol("");var Yg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yg||(Yg={}));function ji(t,e){return Ne(new Error,{type:t,[Bw]:!0},e)}function nr(t,e){return t instanceof Error&&Bw in t&&(e==null||!!(t.type&e))}const Qg="[^/]+?",ek={sensitive:!1,strict:!1,start:!0,end:!0},tk=/[.+*?^${}()[\]/\\]/g;function nk(t,e){const n=Ne({},ek,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(tk,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:b,optional:C,regexp:O}=p;i.push({name:y,repeatable:b,optional:C});const R=O||Qg;if(R!==Qg){m+=10;try{new RegExp(`(${R})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+P.message)}}let v=b?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(v=C&&u.length<2?`(?:/${v})`:"/"+v),C&&(v+="?"),s+=v,m+=20,C&&(m+=-8),b&&(m+=-20),R===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",y=i[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:C}=m,O=y in u?u[y]:"";if(Pn(O)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Pn(O)?O.join("/"):O;if(!R)if(C)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);f+=R}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function rk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Hw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rk(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jg(r))return 1;if(Jg(s))return-1}return s.length-r.length}function Jg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sk={type:0,value:""},ik=/[a-zA-Z0-9_]/;function ok(t){if(!t)return[[]];if(t==="/")return[[sk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:ik.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function ak(t,e,n){const r=nk(ok(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lk(t,e){const n=[],r=new Map;e=ty({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const y=!m,b=Zg(h);b.aliasOf=m&&m.record;const C=ty(e,h),O=[b];if("alias"in h){const P=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of P)O.push(Zg(Ne({},b,{components:m?m.record.components:b.components,path:D,aliasOf:m?m.record:b})))}let R,v;for(const P of O){const{path:D}=P;if(p&&D[0]!=="/"){const F=p.record.path,S=F[F.length-1]==="/"?"":"/";P.path=p.record.path+(D&&S+D)}if(R=ak(P,p,C),m?m.alias.push(R):(v=v||R,v!==R&&v.alias.push(R),y&&h.name&&!ey(R)&&o(h.name)),qw(R)&&c(R),b.children){const F=b.children;for(let S=0;S<F.length;S++)i(F[S],R,m&&m.children[S])}m=m||R}return v?()=>{o(v)}:zo}function o(h){if(jw(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){const p=fk(h,n);n.splice(p,0,h),h.record.name&&!ey(h)&&r.set(h.record.name,h)}function u(h,p){let m,y={},b,C;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw ji(1,{location:h});C=m.record.name,y=Ne(Xg(p.params,m.keys.filter(v=>!v.optional).concat(m.parent?m.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),h.params&&Xg(h.params,m.keys.map(v=>v.name))),b=m.stringify(y)}else if(h.path!=null)b=h.path,m=n.find(v=>v.re.test(b)),m&&(y=m.parse(b),C=m.record.name);else{if(m=p.name?r.get(p.name):n.find(v=>v.re.test(p.path)),!m)throw ji(1,{location:h,currentLocation:p});C=m.record.name,y=Ne({},p.params,h.params),b=m.stringify(y)}const O=[];let R=m;for(;R;)O.unshift(R.record),R=R.parent;return{name:C,path:b,params:y,matched:O,meta:uk(O)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Xg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ck(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ck(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ey(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uk(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function ty(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fk(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Hw(t,e[i])<0?r=i:n=i+1}const s=hk(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hk(t){let e=t;for(;e=e.parent;)if(qw(e)&&Hw(t,e)===0)return e}function qw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function dk(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Lw," "),o=i.indexOf("="),a=da(o<0?i:i.slice(0,o)),c=o<0?null:da(i.slice(o+1));if(a in e){let u=e[a];Pn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ny(t){let e="";for(let n in t){const r=t[n];if(n=xC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(r)?r.map(i=>i&&lh(i)):[r&&lh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pk(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mk=Symbol(""),ry=Symbol(""),Dd=Symbol(""),Ld=Symbol(""),uh=Symbol("");function So(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(ji(4,{from:n,to:e})):p instanceof Error?c(p):ZC(p)?c(ji(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>c(p))})}function af(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xw(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Ur(f,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=bC(f)?f.default:f;o.mods[a]=f,o.components[a]=h;const m=(h.__vccOpts||h)[e];return m&&Ur(m,n,r,o,a,s)()}))}}return i}function sy(t){const e=pt(Dd),n=pt(Ld),r=Fe(()=>{const c=at(t.to);return e.resolve(c)}),s=Fe(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex($i.bind(null,f));if(p>-1)return p;const m=iy(c[u-2]);return u>1&&iy(f)===m&&h[h.length-1].path!==m?h.findIndex($i.bind(null,c[u-2])):p}),i=Fe(()=>s.value>-1&&Ek(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&Uw(n.params,r.value.params));function a(c={}){if(vk(c)){const u=e[at(t.replace)?"replace":"push"](at(t.to)).catch(zo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function gk(t){return t.length===1?t[0]:t}const yk=yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:sy,setup(t,{slots:e}){const n=br(sy(t)),{options:r}=pt(Dd),s=Fe(()=>({[oy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gk(e.default(n));return t.custom?i:Ke("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_k=yk;function vk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ek(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function iy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oy=(t,e,n)=>t??e??n,wk=yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pt(uh),s=Fe(()=>t.route||r.value),i=pt(ry,0),o=Fe(()=>{let u=at(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Fe(()=>s.value.matched[o.value]);Qr(ry,Fe(()=>o.value+1)),Qr(mk,a),Qr(uh,s);const c=Vt();return $n(()=>[c.value,a.value,t.name],([u,f,h],[p,m,y])=>{f&&(f.instances[h]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!$i(f,m)||!p)&&(f.enterCallbacks[h]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return ay(n.default,{Component:p,route:u});const m=h.props[f],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,C=Ke(p,Ne({},y,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return ay(n.default,{Component:C,route:u})||C}}});function ay(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zw=wk;function bk(t){const e=lk(t.routes,t),n=t.parseQuery||dk,r=t.stringifyQuery||ny,s=t.history,i=So(),o=So(),a=So(),c=Kn(fn);let u=fn;hi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=sf.bind(null,j=>""+j),h=sf.bind(null,LC),p=sf.bind(null,da);function m(j,te){let Z,se;return jw(j)?(Z=e.getRecordMatcher(j),se=te):se=j,e.addRoute(se,Z)}function y(j){const te=e.getRecordMatcher(j);te&&e.removeRoute(te)}function b(){return e.getRoutes().map(j=>j.record)}function C(j){return!!e.getRecordMatcher(j)}function O(j,te){if(te=Ne({},te||c.value),typeof j=="string"){const x=of(n,j,te.path),M=e.resolve({path:x.path},te),H=s.createHref(x.fullPath);return Ne(x,M,{params:p(M.params),hash:da(x.hash),redirectedFrom:void 0,href:H})}let Z;if(j.path!=null)Z=Ne({},j,{path:of(n,j.path,te.path).path});else{const x=Ne({},j.params);for(const M in x)x[M]==null&&delete x[M];Z=Ne({},j,{params:h(x)}),te.params=h(te.params)}const se=e.resolve(Z,te),Ae=j.hash||"";se.params=f(p(se.params));const Me=FC(r,Ne({},j,{hash:NC(Ae),path:se.path})),I=s.createHref(Me);return Ne({fullPath:Me,hash:Ae,query:r===ny?pk(j.query):j.query||{}},se,{redirectedFrom:void 0,href:I})}function R(j){return typeof j=="string"?of(n,j,c.value.path):Ne({},j)}function v(j,te){if(u!==j)return ji(8,{from:te,to:j})}function P(j){return S(j)}function D(j){return P(Ne(R(j),{replace:!0}))}function F(j){const te=j.matched[j.matched.length-1];if(te&&te.redirect){const{redirect:Z}=te;let se=typeof Z=="function"?Z(j):Z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=R(se):{path:se},se.params={}),Ne({query:j.query,hash:j.hash,params:se.path!=null?{}:j.params},se)}}function S(j,te){const Z=u=O(j),se=c.value,Ae=j.state,Me=j.force,I=j.replace===!0,x=F(Z);if(x)return S(Ne(R(x),{state:typeof x=="object"?Ne({},Ae,x.state):Ae,force:Me,replace:I}),te||Z);const M=Z;M.redirectedFrom=te;let H;return!Me&&UC(r,se,Z)&&(H=ji(16,{to:M,from:se}),ln(se,se,!0,!1)),(H?Promise.resolve(H):T(M,se)).catch($=>nr($)?nr($,2)?$:_n($):re($,M,se)).then($=>{if($){if(nr($,2))return S(Ne({replace:I},R($.to),{state:typeof $.to=="object"?Ne({},Ae,$.to.state):Ae,force:Me}),te||M)}else $=k(M,se,!0,I,Ae);return N(M,se,$),$})}function E(j,te){const Z=v(j,te);return Z?Promise.reject(Z):Promise.resolve()}function _(j){const te=Sr.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(j):j()}function T(j,te){let Z;const[se,Ae,Me]=Tk(j,te);Z=af(se.reverse(),"beforeRouteLeave",j,te);for(const x of se)x.leaveGuards.forEach(M=>{Z.push(Ur(M,j,te))});const I=E.bind(null,j,te);return Z.push(I),Wt(Z).then(()=>{Z=[];for(const x of i.list())Z.push(Ur(x,j,te));return Z.push(I),Wt(Z)}).then(()=>{Z=af(Ae,"beforeRouteUpdate",j,te);for(const x of Ae)x.updateGuards.forEach(M=>{Z.push(Ur(M,j,te))});return Z.push(I),Wt(Z)}).then(()=>{Z=[];for(const x of Me)if(x.beforeEnter)if(Pn(x.beforeEnter))for(const M of x.beforeEnter)Z.push(Ur(M,j,te));else Z.push(Ur(x.beforeEnter,j,te));return Z.push(I),Wt(Z)}).then(()=>(j.matched.forEach(x=>x.enterCallbacks={}),Z=af(Me,"beforeRouteEnter",j,te,_),Z.push(I),Wt(Z))).then(()=>{Z=[];for(const x of o.list())Z.push(Ur(x,j,te));return Z.push(I),Wt(Z)}).catch(x=>nr(x,8)?x:Promise.reject(x))}function N(j,te,Z){a.list().forEach(se=>_(()=>se(j,te,Z)))}function k(j,te,Z,se,Ae){const Me=v(j,te);if(Me)return Me;const I=te===fn,x=hi?history.state:{};Z&&(se||I?s.replace(j.fullPath,Ne({scroll:I&&x&&x.scroll},Ae)):s.push(j.fullPath,Ae)),c.value=j,ln(j,te,Z,I),_n()}let A;function ge(){A||(A=s.listen((j,te,Z)=>{if(!On.listening)return;const se=O(j),Ae=F(se);if(Ae){S(Ne(Ae,{replace:!0,force:!0}),se).catch(zo);return}u=se;const Me=c.value;hi&&KC(Kg(Me.fullPath,Z.delta),Yc()),T(se,Me).catch(I=>nr(I,12)?I:nr(I,2)?(S(Ne(R(I.to),{force:!0}),se).then(x=>{nr(x,20)&&!Z.delta&&Z.type===pa.pop&&s.go(-1,!1)}).catch(zo),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),re(I,se,Me))).then(I=>{I=I||k(se,Me,!1),I&&(Z.delta&&!nr(I,8)?s.go(-Z.delta,!1):Z.type===pa.pop&&nr(I,20)&&s.go(-1,!1)),N(se,Me,I)}).catch(zo)}))}let Ee=So(),ee=So(),ie;function re(j,te,Z){_n(j);const se=ee.list();return se.length?se.forEach(Ae=>Ae(j,te,Z)):console.error(j),Promise.reject(j)}function Be(){return ie&&c.value!==fn?Promise.resolve():new Promise((j,te)=>{Ee.add([j,te])})}function _n(j){return ie||(ie=!j,ge(),Ee.list().forEach(([te,Z])=>j?Z(j):te()),Ee.reset()),j}function ln(j,te,Z,se){const{scrollBehavior:Ae}=t;if(!hi||!Ae)return Promise.resolve();const Me=!Z&&GC(Kg(j.fullPath,0))||(se||!Z)&&history.state&&history.state.scroll||null;return Gn().then(()=>Ae(j,te,Me)).then(I=>I&&WC(I)).catch(I=>re(I,j,te))}const Xe=j=>s.go(j);let Ze;const Sr=new Set,On={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:b,resolve:O,options:t,push:P,replace:D,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Be,install(j){const te=this;j.component("RouterLink",_k),j.component("RouterView",zw),j.config.globalProperties.$router=te,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>at(c)}),hi&&!Ze&&c.value===fn&&(Ze=!0,P(s.location).catch(Ae=>{}));const Z={};for(const Ae in fn)Object.defineProperty(Z,Ae,{get:()=>c.value[Ae],enumerable:!0});j.provide(Dd,te),j.provide(Ld,Ln(Z)),j.provide(uh,c);const se=j.unmount;Sr.add(j),j.unmount=function(){Sr.delete(j),Sr.size<1&&(u=fn,A&&A(),A=null,c.value=fn,Ze=!1,ie=!1),se()}}};function Wt(j){return j.reduce((te,Z)=>te.then(()=>_(Z)),Promise.resolve())}return On}function Tk(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>$i(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>$i(u,c))||s.push(c))}return[n,r,s]}function Ww(t){return pt(Ld)}const Ak=/(:\w+)\([^)]+\)/g,Ik=/(:\w+)[?+*]/g,Sk=/:\w+/g,Rk=(t,e)=>e.path.replace(Ak,"$1").replace(Ik,"$1").replace(Sk,n=>t.params[n.slice(1)]?.toString()||""),fh=(t,e)=>{const n=t.route.matched.find(s=>s.components?.default===t.Component.type),r=e??n?.meta.key??(n&&Rk(t.route,n));return typeof r=="function"?r(t.route):r},Pk=(t,e)=>({default:()=>t?Ke(b1,t===!0?{}:t,e):e});function Md(t){return Array.isArray(t)?t:[t]}const lf=[{name:"Bio",path:"/Bio",component:()=>Re(()=>import("./C8IGIPkf.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>Re(()=>import("./CDoyDTVs.js"),__vite__mapDeps([2,3,4]),import.meta.url)},{name:"Login",path:"/Login",component:()=>Re(()=>import("./Cfs8QTwN.js"),__vite__mapDeps([5,6,7]),import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>Re(()=>import("./CzGsjYWR.js"),__vite__mapDeps([8,9,10]),import.meta.url)},{name:"Terms",path:"/Terms",component:()=>Re(()=>import("./pmfum95w.js"),[],import.meta.url)},{name:"Contact",path:"/Contact",component:()=>Re(()=>import("./BZv8OBVd.js"),__vite__mapDeps([11,12]),import.meta.url)},{name:"Privacy",path:"/Privacy",component:()=>Re(()=>import("./DuL0koGQ.js"),[],import.meta.url)},{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Re(()=>import("./HWBVlx5O.js"),__vite__mapDeps([13,3,0,1]),import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:{middleware:"auth"},component:()=>Re(()=>import("./irYvnCtL.js"),__vite__mapDeps([14,3,15]),import.meta.url)},{name:"Admin",path:"/Admin",meta:{middleware:"auth"},component:()=>Re(()=>import("./Bq_dFLMG.js"),__vite__mapDeps([16,17]),import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Re(()=>import("./N5_RORWf.js"),[],import.meta.url)},{name:"Admin-Users",path:"/Admin/Users",component:()=>Re(()=>import("./CFlHVQek.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Re(()=>import("./BJes9iee.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Re(()=>import("./CC2cb_y8.js"),[],import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>Re(()=>import("./Blwa6xGm.js"),__vite__mapDeps([20,21]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Re(()=>import("./BLvPhDxw.js"),[],import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Re(()=>import("./DndfebFh.js"),__vite__mapDeps([22,9,10,23]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Re(()=>import("./DrZuGtCp.js"),__vite__mapDeps([24,25,9,10,26]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>Re(()=>import("./D09o-XeU.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Re(()=>import("./-ZQPpinh.js"),__vite__mapDeps([29,9,10]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Re(()=>import("./DFQULkBr.js"),__vite__mapDeps([30,9,10,31]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Re(()=>import("./c1nX7MOG.js"),__vite__mapDeps([32,6,33]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Re(()=>import("./WeMAeTJs.js"),__vite__mapDeps([34,9,10]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Re(()=>import("./Cmgt_wyW.js"),__vite__mapDeps([35,9,10]),import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:{middleware:"auth"},component:()=>Re(()=>import("./ClxmxeWW.js"),__vite__mapDeps([36,25,15,24,9,10,26,37]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Re(()=>import("./D8IJ_fSO.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Re(()=>import("./BS6IGgLa.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Re(()=>import("./CG9lRFp0.js"),__vite__mapDeps([38,9,10,39]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Re(()=>import("./CjhFlqQS.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Re(()=>import("./BMUyZIfY.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Re(()=>import("./DMissXTT.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Re(()=>import("./CZUqHL36.js"),[],import.meta.url)}],Kw=(t,e)=>({default:()=>t?Ke(RS,t===!0?{}:t,e):e.default?.()}),Ck=/(:\w+)\([^)]+\)/g,kk=/(:\w+)[?+*]/g,Ok=/:\w+/g;function ly(t){const e=t?.meta.key??t.path.replace(Ck,"$1").replace(kk,"$1").replace(Ok,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function Nk(t,e){return t===e||e===fn?!1:ly(t)!==ly(e)?!0:!t.matched.every((r,s)=>r.components&&r.components.default===e.matched[s]?.components?.default)}function xk(t,e=!1){if(t){if(t.nodeName==="#comment"&&t.nodeValue==="[")return Gw(t,[],e);if(e){const n=t.cloneNode(!0);return n.querySelectorAll("[data-island-slot]").forEach(r=>{r.innerHTML=""}),[n.outerHTML]}return[t.outerHTML]}}function Gw(t,e=[],n=!1){if(t&&t.nodeName){if(Lk(t))return e;if(!Dk(t)){const r=t.cloneNode(!0);n&&r.querySelectorAll?.("[data-island-slot]").forEach(s=>{s.innerHTML=""}),e.push(r.outerHTML)}Gw(t.nextSibling,e,n)}return e}function cf(t,e){const n=t?xk(t):[e];return n?fS(n.join(""),n.length):Ke("div")}function Dk(t){return t.nodeName==="#comment"&&t.nodeValue==="["}function Lk(t){return t.nodeName==="#comment"&&t.nodeValue==="]"}const Mk={scrollBehavior(t,e,n){const r=Le(),s=It().options?.scrollBehaviorType??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Yw(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===fn){a(cy(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(cy(t,e,n,s)))})})}};function Yw(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function cy(t,e,n,r){if(n)return n;const s=Nk(t,e);return t.hash?{el:t.hash,top:Yw(t.hash),behavior:s?r:"instant"}:{left:0,top:0}}const Vk={hashMode:!1,scrollBehaviorType:"auto"},Nr={...Vk,...Mk},Fk=async(t,e)=>{let n,r;if(!t.meta?.validate)return;const s=([n,r]=Si(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=xs({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},Uk=async t=>{let e,n;const r=([e,n]=Si(()=>Od({path:t.path})),e=await e,n(),e);if(r.redirect)return Ar(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},$k=[Fk,Uk],hh={auth:()=>Re(()=>import("./CkCKN65w.js"),[],import.meta.url)};function jk(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),Ig(f,"")}const a=Ig(r,t),c=!n||RR(a,n)?a:n;return c+(c.includes("?")?"":s)+i}const Bk=on({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,r=Gs().app.baseURL;const s=Nr.history?.(r)??XC(r),i=Nr.routes?([e,n]=Si(()=>Nr.routes(lf)),e=await e,n(),e??lf):lf;let o;const a=bk({...Nr,scrollBehavior:(C,O,R)=>{if(O===fn){o=R;return}if(Nr.scrollBehavior){if(a.options.scrollBehavior=Nr.scrollBehavior,"scrollRestoration"in window.history){const v=a.beforeEach(()=>{v(),window.history.scrollRestoration="manual"})}return Nr.scrollBehavior(C,fn,o||R)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=Kn(a.currentRoute.value);a.afterEach((C,O)=>{c.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=jk(r,window.location,t.payload.path),f=Kn(a.currentRoute.value),h=()=>{f.value=a.currentRoute.value};t.hook("page:finish",h),a.afterEach((C,O)=>{C.matched[0]?.components?.default===O.matched[0]?.components?.default&&h()});const p={};for(const C in f.value)Object.defineProperty(p,C,{get:()=>f.value[C],enumerable:!0});t._route=Ln(p),t._middleware||={global:[],named:{}};const m=Kc();a.afterEach(async(C,O,R)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(Iw),R&&await t.callHook("page:loading:end")});try{[e,n]=Si(()=>a.isReady()),await e,n()}catch(C){[e,n]=Si(()=>t.runWithContext(()=>Is(C))),await e,n()}const y=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;h();const b=t.payload.state._layout;return a.beforeEach(async(C,O)=>{await t.callHook("page:loading:start"),C.meta=br(C.meta),t.isHydrating&&b&&!mr(C.meta.layout)&&(C.meta.layout=b),t._processingMiddleware=!0;{const R=new Set([...$k,...t._middleware.global]);for(const v of C.matched){const P=v.meta.middleware;if(P)for(const D of Md(P))R.add(D)}{const v=await t.runWithContext(()=>Od({path:C.path}));if(v.appMiddleware)for(const P in v.appMiddleware)v.appMiddleware[P]?R.add(P):R.delete(P)}for(const v of R){const P=typeof v=="string"?t._middleware.named[v]||await hh[v]?.().then(D=>D.default||D):v;if(!P)throw new Error(`Unknown route middleware: '${v}'.`);try{const D=await t.runWithContext(()=>P(C,O));if(!t.payload.serverRendered&&t.isHydrating&&(D===!1||D instanceof Error)){const F=D||xs({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Is(F)),!1}if(D===!0)continue;if(D===!1)return D;if(D)return Sw(D)&&D.fatal&&await t.runWithContext(()=>Is(D)),D}catch(D){const F=xs(D);return F.fatal&&await t.runWithContext(()=>Is(F)),F}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(C,O)=>{C.matched.length===0&&await t.runWithContext(()=>Is(xs({statusCode:404,fatal:!1,statusMessage:`Page not found: ${C.fullPath}`,data:{path:C.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in y&&(y.name=void 0),await a.replace({...y,force:!0}),a.options.scrollBehavior=Nr.scrollBehavior}catch(C){await t.runWithContext(()=>Is(C))}}),{provide:{router:a}}}}),dh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Hk=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Qc=t=>{const e=Le();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{dh(()=>t())}):dh(()=>t())},qk=on({name:"nuxt:payload",setup(t){const e=new Set;It().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await qg(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),Qc(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await qg(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Gc,1e3)})}}),zk=on(()=>{const t=It();Qc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Wk=on(t=>{let e;async function n(){const r=await Gc();e&&clearTimeout(e),e=setTimeout(n,Og);try{const s=await $fetch(Cd("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Qc(()=>{e=setTimeout(n,Og)})});function Kk(t={}){const e=t.path||window.location.pathname;let n={};try{n=ha(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Le().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Gk=on({name:"nuxt:chunk-reload",setup(t){const e=It(),n=Gs(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=qc(n.app.baseURL,i.fullPath);Kk({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),Yk=on({name:"nuxt:global-components"}),Wr={default:E1(()=>Re(()=>import("./BOUFlBPJ.js"),__vite__mapDeps([40,25,3,41]),import.meta.url).then(t=>t.default||t))};function Qk(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function Qw(t,e=It()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const s=e._preloadPromises||=[];if(s.length>4)return Promise.all(s).then(()=>Qw(t,e));e._routePreloaded.add(n);const i=r.map(o=>o.components?.default).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const Jk=on({name:"nuxt:prefetch",setup(t){const e=It();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const r=n?.meta?.layout;r&&typeof Wr[r]=="function"&&await Wr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Ar(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Md(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof hh[o]=="function"&&hh[o]();typeof s=="string"&&s in Wr&&Qk(Wr[s])})}}),Xk=()=>{};var uy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),r.push(n[f],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new eO;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tO=function(t){const e=Jw(t);return Xw.encodeByteArray(e,!0)},hc=function(t){return tO(t).replace(/\./g,"")},Zw=function(t){try{return Xw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=()=>nO().__FIREBASE_DEFAULTS__,sO=()=>{if(typeof process>"u"||typeof uy>"u")return;const t=uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zw(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return Xk()||rO()||sO()||iO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eb=t=>Jc()?.emulatorHosts?.[t],tb=t=>{const e=eb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nb=()=>Jc()?.config,rb=t=>Jc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vd(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[hc(JSON.stringify(n)),hc(JSON.stringify(o)),""].join(".")}const Ko={};function aO(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ko))Ko[e]?t.emulator.push(e):t.prod.push(e);return t}function lO(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fy=!1;function Fd(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Ko[t]===e||Ko[t]||fy)return;Ko[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=aO().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{fy=!0,o()},p}function f(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function h(){const p=lO(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),C=document.getElementById(b)||document.createElement("a"),O=n("preprendIcon"),R=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const v=p.element;a(v),f(C,b);const P=u();c(R,O),v.append(R,y,C,P),document.body.appendChild(v)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function uO(){const t=Jc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pO(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mO(){return!uO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gO(){try{return typeof indexedDB=="object"}catch{return!1}}function yO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="FirebaseError";class Jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_O,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Da.prototype.create)}}class Da{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vO(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Jn(s,a,r)}}function vO(t,e){return t.replace(EO,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const EO=/\{\$([^}]+)}/g;function wO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hy(i)&&hy(o)){if(!Fs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function No(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bO(t,e){const n=new TO(t,e);return n.subscribe.bind(n)}class TO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AO(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=uf),s.error===void 0&&(s.error=uf),s.complete===void 0&&(s.complete=uf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class ns{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RO(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SO(t){return t===Ss?void 0:t}function RO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const CO={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},kO=we.INFO,OO={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},NO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ud{constructor(e){this.name=e,this._logLevel=kO,this._logHandler=NO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const xO=(t,e)=>e.some(n=>t instanceof n);let dy,py;function DO(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LO(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ib=new WeakMap,ph=new WeakMap,ob=new WeakMap,ff=new WeakMap,$d=new WeakMap;function MO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ib.set(n,t)}).catch(()=>{}),$d.set(e,t),e}function VO(t){if(ph.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ph.set(t,e)}let mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ob.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FO(t){mh=t(mh)}function UO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hf(this),e,...n);return ob.set(r,e.sort?e.sort():[e]),Jr(r)}:LO().includes(t)?function(...e){return t.apply(hf(this),e),Jr(ib.get(this))}:function(...e){return Jr(t.apply(hf(this),e))}}function $O(t){return typeof t=="function"?UO(t):(t instanceof IDBTransaction&&VO(t),xO(t,DO())?new Proxy(t,mh):t)}function Jr(t){if(t instanceof IDBRequest)return MO(t);if(ff.has(t))return ff.get(t);const e=$O(t);return e!==t&&(ff.set(t,e),$d.set(e,t)),e}const hf=t=>$d.get(t);function jO(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jr(o.result),c.oldVersion,c.newVersion,Jr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BO=["get","getKey","getAll","getAllKeys","count"],HO=["put","add","delete","clear"],df=new Map;function my(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=HO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BO.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return df.set(e,i),i}FO(t=>({...t,get:(e,n,r)=>my(e,n)||t.get(e,n,r),has:(e,n)=>!!my(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zO(t){return t.getComponent()?.type==="VERSION"}const gh="@firebase/app",gy="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Ud("@firebase/app"),WO="@firebase/app-compat",KO="@firebase/analytics-compat",GO="@firebase/analytics",YO="@firebase/app-check-compat",QO="@firebase/app-check",JO="@firebase/auth",XO="@firebase/auth-compat",ZO="@firebase/database",eN="@firebase/data-connect",tN="@firebase/database-compat",nN="@firebase/functions",rN="@firebase/functions-compat",sN="@firebase/installations",iN="@firebase/installations-compat",oN="@firebase/messaging",aN="@firebase/messaging-compat",lN="@firebase/performance",cN="@firebase/performance-compat",uN="@firebase/remote-config",fN="@firebase/remote-config-compat",hN="@firebase/storage",dN="@firebase/storage-compat",pN="@firebase/firestore",mN="@firebase/ai",gN="@firebase/firestore-compat",yN="firebase",_N="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="[DEFAULT]",vN={[gh]:"fire-core",[WO]:"fire-core-compat",[GO]:"fire-analytics",[KO]:"fire-analytics-compat",[QO]:"fire-app-check",[YO]:"fire-app-check-compat",[JO]:"fire-auth",[XO]:"fire-auth-compat",[ZO]:"fire-rtdb",[eN]:"fire-data-connect",[tN]:"fire-rtdb-compat",[nN]:"fire-fn",[rN]:"fire-fn-compat",[sN]:"fire-iid",[iN]:"fire-iid-compat",[oN]:"fire-fcm",[aN]:"fire-fcm-compat",[lN]:"fire-perf",[cN]:"fire-perf-compat",[uN]:"fire-rc",[fN]:"fire-rc-compat",[hN]:"fire-gcs",[dN]:"fire-gcs-compat",[pN]:"fire-fst",[gN]:"fire-fst-compat",[mN]:"fire-vertex","fire-js":"fire-js",[yN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map,EN=new Map,_h=new Map;function yy(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(_h.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;_h.set(e,t);for(const n of dc.values())yy(n,t);for(const n of EN.values())yy(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new Da("app","Firebase",wN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=_N;function ab(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:yh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Xr.create("bad-app-name",{appName:String(s)});if(n||(n=nb()),!n)throw Xr.create("no-options");const i=dc.get(s);if(i){if(Fs(n,i.options)&&Fs(r,i.config))return i;throw Xr.create("duplicate-app",{appName:s})}const o=new PO(s);for(const c of _h.values())o.addComponent(c);const a=new bN(n,r,o);return dc.set(s,a),a}function jd(t=yh){const e=dc.get(t);if(!e&&t===yh&&nb())return ab();if(!e)throw Xr.create("no-app",{appName:t});return e}function jn(t,e,n){let r=vN[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(o.join(" "));return}Us(new ns(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="firebase-heartbeat-database",AN=1,ma="firebase-heartbeat-store";let pf=null;function lb(){return pf||(pf=jO(TN,AN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),pf}async function IN(t){try{const n=(await lb()).transaction(ma),r=await n.objectStore(ma).get(cb(t));return await n.done,r}catch(e){if(e instanceof Jn)gr.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e?.message});gr.warn(n.message)}}}async function _y(t,e){try{const r=(await lb()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,cb(t)),await r.done}catch(n){if(n instanceof Jn)gr.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n?.message});gr.warn(r.message)}}}function cb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=1024,RN=30;class PN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vy();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>RN){const s=ON(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vy(),{heartbeatsToSend:n,unsentEntries:r}=CN(this._heartbeatsCache.heartbeats),s=hc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gr.warn(e),""}}}function vy(){return new Date().toISOString().substring(0,10)}function CN(t,e=SN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ey(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gO()?yO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IN(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _y(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _y(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ey(t){return hc(JSON.stringify({version:2,heartbeats:t})).length}function ON(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){Us(new ns("platform-logger",e=>new qO(e),"PRIVATE")),Us(new ns("heartbeat",e=>new PN(e),"PRIVATE")),jn(gh,gy,t),jn(gh,gy,"esm2020"),jn("fire-js","")}NN("");var xN="firebase",DN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(xN,DN,"app");function ub(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LN=ub,fb=new Da("auth","Firebase",ub());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Ud("@firebase/auth");function MN(t,...e){pc.logLevel<=we.WARN&&pc.warn(`Auth (${Ys}): ${t}`,...e)}function Fl(t,...e){pc.logLevel<=we.ERROR&&pc.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Hd(t,...e)}function In(t,...e){return Hd(t,...e)}function Bd(t,e,n){const r={...LN(),[e]:n};return new Da("auth","Firebase",r).create(e,{appName:t.name})}function Zr(t){return Bd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function VN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),Bd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fb.create(t,...e)}function de(t,e,...n){if(!t)throw Hd(e,...n)}function cr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fl(e),new Error(e)}function yr(t,e){t||cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){return typeof self<"u"&&self.location?.href||""}function FN(){return wy()==="http:"||wy()==="https:"}function wy(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FN()||hO()||"connection"in navigator)?navigator.onLine:!0}function $N(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,yr(n>e,"Short delay should be less than long delay!"),this.isMobile=cO()||dO()}get(){return UN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e){yr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HN=new Ma(3e4,6e4);function Qs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ds(t,e,n,r,s={}){return db(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=La({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return fO()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(u.credentials="include"),hb.fetch()(await pb(t,t.config.apiHost,n,a),u)})}async function db(t,e,n){t._canInitEmulator=!1;const r={...jN,...e};try{const s=new zN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw El(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bd(t,f,u);gn(t,f)}}catch(s){if(s instanceof Jn)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function Zc(t,e,n,r,s={}){const i=await ds(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function pb(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?qd(t.config,s):`${t.config.apiScheme}://${s}`;return BN.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function qN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),HN.get())})}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}function by(t){return t!==void 0&&t.enterprise!==void 0}class WN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KN(t,e){return ds(t,"GET","/v2/recaptchaConfig",Qs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function mc(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YN(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=zd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Go(mf(s.auth_time)),issuedAtTime:Go(mf(s.iat)),expirationTime:Go(mf(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function mf(t){return Number(t)*1e3}function zd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zw(n);return s?JSON.parse(s):(Fl("Failed to decode base64 JWT payload"),null)}catch(s){return Fl("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ty(t){const e=zd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jn&&QN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t){const e=t.auth,n=await t.getIdToken(),r=await ga(t,mc(e,{idToken:n}));de(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?mb(s.providerUserInfo):[],o=ZN(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=a?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Eh(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function XN(t){const e=Je(t);await gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mb(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e){const n=await db(t,{},async()=>{const r=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await pb(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(c.credentials="include"),hb.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tx(t,e){return ds(t,"POST","/v2/accounts:revokeToken",Qs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Ty(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ex(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ri;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new JN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Eh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ga(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YN(this,e)}reload(){return XN(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Zr(this.auth));const e=await this.getIdToken();return await ga(this,GN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:m,providerData:y,stsTokenManager:b}=n;de(h&&b,e,"internal-error");const C=Ri.fromJSON(this.name,b);de(typeof h=="string",e,"internal-error"),xr(r,e.name),xr(s,e.name),de(typeof p=="boolean",e,"internal-error"),de(typeof m=="boolean",e,"internal-error"),xr(i,e.name),xr(o,e.name),xr(a,e.name),xr(c,e.name),xr(u,e.name),xr(f,e.name);const O=new bn({uid:h,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:C,createdAt:u,lastLoginAt:f});return y&&Array.isArray(y)&&(O.providerData=y.map(R=>({...R}))),c&&(O._redirectEventId=c),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ri;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mb(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Ri;a.updateFromIdToken(r);const c=new bn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Eh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;function ur(t){yr(t instanceof Function,"Expected a class definition");let e=Ay.get(t);return e?(yr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ay.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gb.type="NONE";const Iy=gb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class Pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ul(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ul("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mc(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pi(ur(Iy),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ur(Iy);const o=Ul(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const p=await mc(e,{idToken:f}).catch(()=>{});if(!p)break;h=await bn._fromGetAccountInfoResponse(e,p,f)}else h=bn._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pi(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Pi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bb(e))return"Blackberry";if(Tb(e))return"Webos";if(_b(e))return"Safari";if((e.includes("chrome/")||vb(e))&&!e.includes("edge/"))return"Chrome";if(wb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function yb(t=Ft()){return/firefox\//i.test(t)}function _b(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vb(t=Ft()){return/crios\//i.test(t)}function Eb(t=Ft()){return/iemobile/i.test(t)}function wb(t=Ft()){return/android/i.test(t)}function bb(t=Ft()){return/blackberry/i.test(t)}function Tb(t=Ft()){return/webos/i.test(t)}function Wd(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nx(t=Ft()){return Wd(t)&&!!window.navigator?.standalone}function rx(){return pO()&&document.documentMode===10}function Ab(t=Ft()){return Wd(t)||wb(t)||Tb(t)||bb(t)||/windows phone/i.test(t)||Eb(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t,e=[]){let n;switch(t){case"Browser":n=Sy(Ft());break;case"Worker":n=`${Sy(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t,e={}){return ds(t,"GET","/v2/passwordPolicy",Qs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=6;class ax{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ox,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ry(this),this.idTokenSubscription=new Ry(this),this.beforeStateQueue=new sx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ur(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mc(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(tn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Zr(this));const n=e?Je(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ix(this),n=new ax(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Da("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tx(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ur(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[ur(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ib(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&MN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Js(t){return Je(t)}class Ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=bO(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cx(t){eu=t}function Sb(t){return eu.loadJS(t)}function ux(){return eu.recaptchaEnterpriseScript}function fx(){return eu.gapiScript}function hx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class dx{constructor(){this.enterprise=new px}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class px{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mx="recaptcha-enterprise",Rb="NO_RECAPTCHA";class gx{constructor(e){this.type=mx,this.auth=Js(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{KN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new WN(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;by(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Rb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dx().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&by(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ux();c.length!==0&&(c+=a),Sb(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Py(t,e,n,r=!1,s=!1){const i=new gx(t);let o;if(s)o=Rb;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Cy(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Py(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Py(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t,e){const n=Xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fs(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function _x(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ur);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function vx(t,e,n){const r=Js(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pb(e),{host:o,port:a}=Ex(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Fs(u,r.config.emulator)&&Fs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,hs(o)?(Vd(`${i}//${o}${c}`),Fd("Auth",!0)):wx()}function Pb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ex(t){const e=Pb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ky(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ky(o)}}}function ky(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,n){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}async function bx(t,e){return ds(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e){return Zc(t,"POST","/v1/accounts:signInWithPassword",Qs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(t,e){return Zc(t,"POST","/v1/accounts:signInWithEmailLink",Qs(t,e))}async function Ix(t,e){return Zc(t,"POST","/v1/accounts:signInWithEmailLink",Qs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Kd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,n,"signInWithPassword",Tx);case"emailLink":return Ax(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,r,"signUpPassword",bx);case"emailLink":return Ix(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return Zc(t,"POST","/v1/accounts:signInWithIdp",Qs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="http://localhost";class $s extends Kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new $s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:Sx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=La(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Px(t){const e=Oo(No(t)).link,n=e?Oo(No(e)).deep_link_id:null,r=Oo(No(t)).deep_link_id;return(r?Oo(No(r)).link:null)||r||n||e||t}class Gd{constructor(e){const n=Oo(No(e)),r=n.apiKey??null,s=n.oobCode??null,i=Rx(n.mode??null);de(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Px(e);try{return new Gd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.providerId=to.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gd.parseLink(n);return de(r,"argument-error"),ya._fromEmailAndCode(e,r.code,r.tenantId)}}to.PROVIDER_ID="password";to.EMAIL_PASSWORD_SIGN_IN_METHOD="password";to.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Va{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $s._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Va{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Va{constructor(){super("twitter.com")}static credential(e,n){return $s._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=Oy(r);return new Bi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Oy(r);return new Bi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Oy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends Jn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yc(e,n,r,s)}}function Cb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yc._fromErrorAndOperation(t,i,e,r):i})}async function Cx(t,e,n=!1){const r=await ga(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(Zr(r));const s="reauthenticate";try{const i=await ga(t,Cb(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=zd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Bi._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e,n=!1){if(tn(t.app))return Promise.reject(Zr(t));const r="signIn",s=await Cb(t,r,e),i=await Bi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ox(t,e){return kb(Js(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(t){const e=Js(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function xx(t,e,n){return tn(t.app)?Promise.reject(Zr(t)):Ox(Je(t),to.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nx(t),r})}function Dx(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function Lx(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Mx(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function Vx(t){return Je(t).signOut()}const _c="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=1e3,Ux=10;class Nb extends Ob{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ab(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ux):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nb.type="LOCAL";const $x=Nb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb extends Ob{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xb.type="SESSION";const Db=xb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await jx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Qd("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function Hx(t){Bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function qx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zx(){return navigator?.serviceWorker?.controller||null}function Wx(){return Lb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="firebaseLocalStorageDb",Kx=1,vc="firebaseLocalStorage",Vb="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([vc],e?"readwrite":"readonly").objectStore(vc)}function Gx(){const t=indexedDB.deleteDatabase(Mb);return new Fa(t).toPromise()}function wh(){const t=indexedDB.open(Mb,Kx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vc,{keyPath:Vb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vc)?e(r):(r.close(),await Gx(),e(await wh()))})})}async function Ny(t,e,n){const r=nu(t,!0).put({[Vb]:e,value:n});return new Fa(r).toPromise()}async function Yx(t,e){const n=nu(t,!1).get(e),r=await new Fa(n).toPromise();return r===void 0?null:r.value}function xy(t,e){const n=nu(t,!0).delete(e);return new Fa(n).toPromise()}const Qx=800,Jx=3;class Fb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(Wx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await qx(),!this.activeServiceWorker)return;this.sender=new Bx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wh();return await Ny(e,_c,"1"),await xy(e,_c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nu(s,!1).getAll();return new Fa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fb.type="LOCAL";const Xx=Fb;new Ma(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t,e){return e?ur(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zx(t){return kb(t.auth,new Jd(t),t.bypassAuthState)}function e2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),kx(n,new Jd(t),t.bypassAuthState)}async function t2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Cx(n,new Jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zx;case"linkViaPopup":case"linkViaRedirect":return t2;case"reauthViaPopup":case"reauthViaRedirect":return e2;default:gn(this.auth,"internal-error")}}resolve(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new Ma(2e3,1e4);async function T9(t,e,n){if(tn(t.app))return Promise.reject(In(t,"operation-not-supported-in-this-environment"));const r=Js(t);VN(t,e,Yd);const s=Ub(r,n);return new Rs(r,"signInViaPopup",e,s).executeNotNull()}class Rs extends $b{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){yr(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n2.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="pendingRedirect",$l=new Map;class s2 extends $b{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await i2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i2(t,e){const n=l2(e),r=a2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function o2(t,e){$l.set(t._key(),e)}function a2(t){return ur(t._redirectPersistence)}function l2(t){return Ul(r2,t.config.apiKey,t.name)}async function c2(t,e,n=!1){if(tn(t.app))return Promise.reject(Zr(t));const r=Js(t),s=Ub(r,e),o=await new s2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=600*1e3;class f2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!jb(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(In(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jb({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function h2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m2=/^https?/;async function g2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d2(t);for(const n of e)try{if(y2(n))return}catch{}gn(t,"unauthorized-domain")}function y2(t){const e=vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m2.test(n))return!1;if(p2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=new Ma(3e4,6e4);function Ly(){const t=Bn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v2(t){return new Promise((e,n)=>{function r(){Ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ly(),n(In(t,"network-request-failed"))},timeout:_2.get()})}if(Bn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Bn().gapi?.load)r();else{const s=hx("iframefcb");return Bn()[s]=()=>{gapi.load?r():n(In(t,"network-request-failed"))},Sb(`${fx()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw jl=null,e})}let jl=null;function E2(t){return jl=jl||v2(t),jl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=new Ma(5e3,15e3),b2="__/auth/iframe",T2="emulator/auth/iframe",A2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S2(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qd(e,T2):`https://${t.config.authDomain}/${b2}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},s=I2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${La(r).slice(1)}`}async function R2(t){const e=await E2(t),n=Bn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:S2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),a=Bn().setTimeout(()=>{i(o)},w2.get());function c(){Bn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C2=500,k2=600,O2="_blank",N2="http://localhost";class My{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x2(t,e,n,r=C2,s=k2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...P2,width:r.toString(),height:s.toString(),top:i,left:o},u=Ft().toLowerCase();n&&(a=vb(u)?O2:n),yb(u)&&(e=e||N2,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(nx(u)&&a!=="_self")return D2(e||"",a),new My(null);const h=window.open(e||"",a,f);de(h,t,"popup-blocked");try{h.focus()}catch{}return new My(h)}function D2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="__/auth/handler",M2="emulator/auth/handler",V2=encodeURIComponent("fac");async function Vy(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:s};if(e instanceof Yd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Va){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${V2}=${encodeURIComponent(c)}`:"";return`${F2(t)}?${La(a).slice(1)}${u}`}function F2({config:t}){return t.emulator?qd(t,M2):`https://${t.authDomain}/${L2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="webStorageSupport";class U2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Db,this._completeRedirectFn=c2,this._overrideRedirectResult=o2}async _openPopup(e,n,r,s){yr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Vy(e,n,r,vh(),s);return x2(e,i,Qd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Vy(e,n,r,vh(),s);return Hx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R2(e),r=new f2(e);return n.register("authEvent",s=>(de(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gf,{type:gf},s=>{const i=s?.[0]?.[gf];i!==void 0&&n(!!i),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=g2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ab()||_b()||Wd()}}const $2=U2;var Fy="@firebase/auth",Uy="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H2(t){Us(new ns("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ib(t)},u=new lx(r,s,i,c);return _x(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Us(new ns("auth-internal",e=>{const n=Js(e.getProvider("auth").getImmediate());return(r=>new j2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Fy,Uy,B2(t)),jn(Fy,Uy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=300,z2=rb("authIdTokenMaxAge")||q2;let $y=null;const W2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z2)return;const s=n?.token;$y!==s&&($y=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function K2(t=jd()){const e=Xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yx(t,{popupRedirectResolver:$2,persistence:[Xx,$x,Db]}),r=rb("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=W2(i.toString());Lx(n,o,()=>o(n.currentUser)),Dx(n,a=>o(a))}}const s=eb("auth");return s&&vx(n,`http://${s}`),n}function G2(){return document.getElementsByTagName("head")?.[0]??document}cx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",G2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H2("Browser");function jy(t){return typeof t=="string"?`'${t}'`:new Y2().serialize(t)}const Y2=function(){class t{#e=new Map;compare(n,r){const s=typeof n,i=typeof r;return s==="string"&&i==="string"?n.localeCompare(r):s==="number"&&i==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){const r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);const s=n.constructor,i=s===Object||s===void 0?"":s.name;if(i!==""&&globalThis[i]===s)return this.serializeBuiltInType(i,n);if(typeof n.toJSON=="function"){const o=n.toJSON();return i+(o!==null&&typeof o=="object"?this.$object(o):`(${this.serialize(o)})`)}return this.serializeObjectEntries(i,Object.entries(n))}serializeBuiltInType(n,r){const s=this["$"+n];if(s)return s.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw new Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){const s=Array.from(r).sort((o,a)=>this.compare(o[0],a[0]));let i=`${n}{`;for(let o=0;o<s.length;o++){const[a,c]=s[o];i+=`${this.serialize(a,!0)}:${this.serialize(c)}`,o<s.length-1&&(i+=",")}return i+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){const r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let s=0;s<n.length;s++)r+=this.serialize(n[s]),s<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,s)=>this.compare(r,s)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(const e of["Error","RegExp","URL"])t.prototype["$"+e]=function(n){return`${e}(${n})`};for(const e of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join(",")}]`};for(const e of["BigInt64Array","BigUint64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join("n,")}${n.length>0?"n":""}]`};return t}();function Q2(t,e){return t===e||jy(t)===jy(e)}const wl="<div></div>",yf=new WeakMap;function J2(t){if(yf.has(t))return yf.get(t);const e={...t};return e.render?e.render=(n,r,s,i,o,a)=>{if(i.mounted$??n.mounted$){const c=t.render?.bind(n)(n,r,s,i,o,a);return c.children===null||typeof c.children=="string"?pn(c):Ke(c)}return cf(n._.vnode.el,wl)}:e.template&&=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${wl}</template>
    `,e.setup=(n,r)=>{const s=Le(),i=Kn(s.isHydrating===!1),o=Ks();if(s.isHydrating){const c={...o.attrs},u=X2(o);for(const f in c)delete o.attrs[f];Li(()=>{Object.assign(o.attrs,c),o.vnode.dirs=u})}Li(()=>{i.value=!0});const a=t.setup?.(n,r)||{};return ad(a)?Promise.resolve(a).then(c=>typeof c!="function"?(c||={},c.mounted$=i,c):(...u)=>{if(i.value||!s.isHydrating){const f=c(...u);return f.children===null||typeof f.children=="string"?pn(f):Ke(f)}return cf(o?.vnode.el,wl)}):typeof a=="function"?(...c)=>{if(i.value){const u=a(...c),f=e.inheritAttrs!==!1?r.attrs:void 0;return u.children===null||typeof u.children=="string"?pn(u,f):Ke(u,f)}return cf(o?.vnode.el,wl)}:Object.assign(a,{mounted$:i})},yf.set(t,e),e}function X2(t){if(!t||!t.vnode.dirs)return null;const e=t.vnode.dirs;return t.vnode.dirs=null,e}function Z2(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||eD;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const c=t.slice(i,o).trim();if(r?.filter&&!r?.filter(c)){i=a+1;continue}if(n[c]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[c]=tD(u,s)}i=a+1}return n}function eD(t){return t.includes("%")?decodeURIComponent(t):t}function tD(t,e){try{return e(t)}catch{return t}}const bl=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function By(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!bl.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!bl.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!bl.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!bl.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!nD(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function nD(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function En(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=En(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:En(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=En(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=En(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(En(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(En(i),En(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(En(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const rD={path:"/",watch:!0,decode:t=>ha(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Tl=window.cookieStore;function sD(t,e){const n={...rD,...e};n.filter??=u=>u===t;const r=Hy(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=En(i?void 0:r[t]??n.default?.()),c=s&&!i?aD(a,s,n.watch&&n.watch!=="shallow"):Vt(a);{let u=null;try{!Tl&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const f=(y=!1)=>{!y&&(n.readonly||Q2(c.value,r[t]))||(oD(t,c.value,n),r[t]=En(c.value),u?.postMessage({value:n.encode(c.value)}))},h=y=>{const b=y.refresh?Hy(n)?.[t]:n.decode(y.value);p=!0,c.value=b,r[t]=En(b),Gn(()=>{p=!1})};let p=!1;const m=!!Xi();if(m&&ra(()=>{p=!0,f(),u?.close()}),Tl){const y=b=>{const C=b.changed.find(R=>R.name===t),O=b.deleted.find(R=>R.name===t);C&&h({value:C.value}),O&&h({value:null})};Tl.addEventListener("change",y),m&&ra(()=>Tl.removeEventListener("change",y))}else u&&(u.onmessage=({data:y})=>h(y));n.watch&&$n(c,()=>{p||f()},{deep:n.watch!=="shallow"}),o&&f(o)}return c}function Hy(t={}){return Z2(document.cookie,t)}function iD(t,e,n={}){return e==null?By(t,e,{...n,maxAge:-1}):By(t,e,n)}function oD(t,e,n={}){document.cookie=iD(t,e,n)}const qy=2147483647;function aD(t,e,n){let r,s,i=0;const o=n?Vt(t):{value:t};return Xi()&&ra(()=>{s?.(),clearTimeout(r)}),t1((a,c)=>{n&&(s=$n(o,c));function u(){i=0,clearTimeout(r);const f=e-i,h=f<qy?f:qy;r=setTimeout(()=>{if(i+=h,i<e)return u();o.value=void 0,c()},h)}return{get(){return a(),o.value},set(f){u(),o.value=f,c()}}})}function lD(t={}){const e=Kn(""),n=Kn(t.politeness||"polite"),r=Cw();function s(u="",f="polite"){e.value=u,n.value=f}function i(u){return s(u,"polite")}function o(u){return s(u,"assertive")}function a(){s(document?.title?.trim(),n.value)}function c(){r?.hooks?.removeHook("dom:rendered",a)}return a(),r?.hooks?.hook("dom:rendered",()=>{a()}),{_cleanup:c,message:e,politeness:n,set:s,polite:i,assertive:o}}function cD(t={}){const e=Le(),n=e._routeAnnouncer||=lD(t);return t.politeness!==n.politeness.value&&(n.politeness.value=t.politeness||"polite"),Xi()&&(e._routeAnnouncerDeps||=0,e._routeAnnouncerDeps++,ra(()=>{e._routeAnnouncerDeps--,e._routeAnnouncerDeps===0&&(n._cleanup(),delete e._routeAnnouncer)})),n}const uD=(...t)=>t.find(e=>e!==void 0);function fD(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const c=a??t.trailingSlash;if(!i||c!=="append"&&c!=="remove")return i;if(typeof i=="string")return Al(i,c);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:Al(u,c)}}function s(i){const o=It(),a=Gs(),c=Fe(()=>!!i.target&&i.target!=="_self"),u=Fe(()=>{const C=i.to||i.href||"";return typeof C=="string"&&Ar(C,{acceptRelative:!0})}),f=aa("RouterLink"),h=f&&typeof f!="string"?f.useLink:void 0,p=Fe(()=>{if(i.external)return!0;const C=i.to||i.href||"";return typeof C=="object"?!1:C===""||u.value}),m=Fe(()=>{const C=i.to||i.href||"";return p.value?C:r(C,o.resolve,i.trailingSlash)}),y=p.value?void 0:h?.({...i,to:m}),b=Fe(()=>{const C=i.trailingSlash??t.trailingSlash;if(!m.value||u.value||n(m.value))return m.value;if(p.value){const O=typeof m.value=="object"&&"path"in m.value?sh(m.value):m.value,R=typeof O=="object"?o.resolve(O).href:O;return Al(R,C)}return typeof m.value=="object"?o.resolve(m.value)?.href??null:Al(qc(a.app.baseURL,m.value),C)});return{to:m,hasTarget:c,isAbsoluteUrl:u,isExternal:p,href:b,isActive:y?.isActive??Fe(()=>m.value===o.currentRoute.value.path),isExactActive:y?.isExactActive??Fe(()=>m.value===o.currentRoute.value.path),route:y?.route??Fe(()=>o.resolve(m.value)),async navigate(C){await bP(b.value,{replace:i.replace,external:p.value||c.value})}}}return yn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=It(),{to:c,href:u,navigate:f,isExternal:h,hasTarget:p,isAbsoluteUrl:m}=s(i),y=Kn(!1),b=Vt(null),C=v=>{b.value=i.custom?v?.$el?.nextElementSibling:v?.$el};function O(v){return!y.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===v:i.prefetchOn?.[v]??t.prefetchOn?.[v])&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!pD()}async function R(v=Le()){if(y.value)return;y.value=!0;const P=typeof c.value=="string"?c.value:h.value?sh(c.value):a.resolve(c.value).fullPath,D=h.value?new URL(P,window.location.href).href:P;await Promise.all([v.hooks.callHook("link:prefetch",D).catch(()=>{}),!h.value&&!p.value&&Qw(c.value,a).catch(()=>{})])}if(O("visibility")){const v=Le();let P,D=null;Li(()=>{const F=hD();Qc(()=>{P=dh(()=>{b?.value?.tagName&&(D=F.observe(b.value,async()=>{D?.(),D=null,await R(v)}))})})}),eo(()=>{P&&Hk(P),D?.(),D=null})}return()=>{if(!h.value&&!p.value&&!n(c.value)){const D={ref:C,to:c.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(O("interaction")&&(D.onPointerenter=R.bind(null,void 0),D.onFocus=R.bind(null,void 0)),y.value&&(D.class=i.prefetchedClass||t.prefetchedClass),D.rel=i.rel||void 0),Ke(aa("RouterLink"),D,o.default)}const v=i.target||null,P=uD(i.noRel?"":i.rel,t.externalRelAttribute,m.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:R,get route(){if(!u.value)return;const D=new URL(u.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return Rd(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:P,target:v,isExternal:h.value||p.value,isActive:!1,isExactActive:!1}):null:Ke("a",{ref:b,href:u.value||null,rel:P,target:v,onClick:D=>{if(!(h.value||p.value))return D.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},o.default?.())}}})}const Bb=fD(iP);function Al(t,e){const n=e==="append"?aw:Ui;return Ar(t)&&!t.startsWith("http")?t:n(t,!0)}function hD(){const t=Le();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||=new IntersectionObserver(a=>{for(const c of a){const u=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&u&&u()}}),n.set(i,o),e.observe(i),()=>{n.delete(i),e?.unobserve(i),n.size===0&&(e?.disconnect(),e=null)});return t._observer={observe:r}}const dD=/2g/;function pD(){const t=navigator.connection;return!!(t&&(t.saveData||dD.test(t.effectiveType)))}var zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,Hb;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,E){function _(){}_.prototype=E.prototype,S.D=E.prototype,S.prototype=new _,S.prototype.constructor=S,S.C=function(T,N,k){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return E.prototype[N].apply(T,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,E,_){_||(_=0);var T=Array(16);if(typeof E=="string")for(var N=0;16>N;++N)T[N]=E.charCodeAt(_++)|E.charCodeAt(_++)<<8|E.charCodeAt(_++)<<16|E.charCodeAt(_++)<<24;else for(N=0;16>N;++N)T[N]=E[_++]|E[_++]<<8|E[_++]<<16|E[_++]<<24;E=S.g[0],_=S.g[1],N=S.g[2];var k=S.g[3],A=E+(k^_&(N^k))+T[0]+3614090360&4294967295;E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[1]+3905402710&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[2]+606105819&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[3]+3250441966&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(k^_&(N^k))+T[4]+4118548399&4294967295,E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[5]+1200080426&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[6]+2821735955&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[7]+4249261313&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(k^_&(N^k))+T[8]+1770035416&4294967295,E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[9]+2336552879&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[10]+4294925233&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[11]+2304563134&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(k^_&(N^k))+T[12]+1804603682&4294967295,E=_+(A<<7&4294967295|A>>>25),A=k+(N^E&(_^N))+T[13]+4254626195&4294967295,k=E+(A<<12&4294967295|A>>>20),A=N+(_^k&(E^_))+T[14]+2792965006&4294967295,N=k+(A<<17&4294967295|A>>>15),A=_+(E^N&(k^E))+T[15]+1236535329&4294967295,_=N+(A<<22&4294967295|A>>>10),A=E+(N^k&(_^N))+T[1]+4129170786&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[6]+3225465664&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[11]+643717713&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[0]+3921069994&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(N^k&(_^N))+T[5]+3593408605&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[10]+38016083&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[15]+3634488961&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[4]+3889429448&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(N^k&(_^N))+T[9]+568446438&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[14]+3275163606&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[3]+4107603335&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[8]+1163531501&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(N^k&(_^N))+T[13]+2850285829&4294967295,E=_+(A<<5&4294967295|A>>>27),A=k+(_^N&(E^_))+T[2]+4243563512&4294967295,k=E+(A<<9&4294967295|A>>>23),A=N+(E^_&(k^E))+T[7]+1735328473&4294967295,N=k+(A<<14&4294967295|A>>>18),A=_+(k^E&(N^k))+T[12]+2368359562&4294967295,_=N+(A<<20&4294967295|A>>>12),A=E+(_^N^k)+T[5]+4294588738&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[8]+2272392833&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[11]+1839030562&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[14]+4259657740&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(_^N^k)+T[1]+2763975236&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[4]+1272893353&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[7]+4139469664&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[10]+3200236656&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(_^N^k)+T[13]+681279174&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[0]+3936430074&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[3]+3572445317&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[6]+76029189&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(_^N^k)+T[9]+3654602809&4294967295,E=_+(A<<4&4294967295|A>>>28),A=k+(E^_^N)+T[12]+3873151461&4294967295,k=E+(A<<11&4294967295|A>>>21),A=N+(k^E^_)+T[15]+530742520&4294967295,N=k+(A<<16&4294967295|A>>>16),A=_+(N^k^E)+T[2]+3299628645&4294967295,_=N+(A<<23&4294967295|A>>>9),A=E+(N^(_|~k))+T[0]+4096336452&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[7]+1126891415&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[14]+2878612391&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[5]+4237533241&4294967295,_=N+(A<<21&4294967295|A>>>11),A=E+(N^(_|~k))+T[12]+1700485571&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[3]+2399980690&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[10]+4293915773&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[1]+2240044497&4294967295,_=N+(A<<21&4294967295|A>>>11),A=E+(N^(_|~k))+T[8]+1873313359&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[15]+4264355552&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[6]+2734768916&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[13]+1309151649&4294967295,_=N+(A<<21&4294967295|A>>>11),A=E+(N^(_|~k))+T[4]+4149444226&4294967295,E=_+(A<<6&4294967295|A>>>26),A=k+(_^(E|~N))+T[11]+3174756917&4294967295,k=E+(A<<10&4294967295|A>>>22),A=N+(E^(k|~_))+T[2]+718787259&4294967295,N=k+(A<<15&4294967295|A>>>17),A=_+(k^(N|~E))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+N&4294967295,S.g[3]=S.g[3]+k&4294967295}r.prototype.u=function(S,E){E===void 0&&(E=S.length);for(var _=E-this.blockSize,T=this.B,N=this.h,k=0;k<E;){if(N==0)for(;k<=_;)s(this,S,k),k+=this.blockSize;if(typeof S=="string"){for(;k<E;)if(T[N++]=S.charCodeAt(k++),N==this.blockSize){s(this,T),N=0;break}}else for(;k<E;)if(T[N++]=S[k++],N==this.blockSize){s(this,T),N=0;break}}this.h=N,this.o+=E},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;var _=8*this.o;for(E=S.length-8;E<S.length;++E)S[E]=_&255,_/=256;for(this.u(S),S=Array(16),E=_=0;4>E;++E)for(var T=0;32>T;T+=8)S[_++]=this.g[E]>>>T&255;return S};function i(S,E){var _=a;return Object.prototype.hasOwnProperty.call(_,S)?_[S]:_[S]=E(S)}function o(S,E){this.h=E;for(var _=[],T=!0,N=S.length-1;0<=N;N--){var k=S[N]|0;T&&k==E||(_[N]=k,T=!1)}this.g=_}var a={};function c(S){return-128<=S&&128>S?i(S,function(E){return new o([E|0],0>E?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return h;if(0>S)return C(u(-S));for(var E=[],_=1,T=0;S>=_;T++)E[T]=S/_|0,_*=4294967296;return new o(E,0)}function f(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return C(f(S.substring(1),E));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(E,8)),T=h,N=0;N<S.length;N+=8){var k=Math.min(8,S.length-N),A=parseInt(S.substring(N,N+k),E);8>k?(k=u(Math.pow(E,k)),T=T.j(k).add(u(A))):(T=T.j(_),T=T.add(u(A)))}return T}var h=c(0),p=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-C(this).m();for(var S=0,E=1,_=0;_<this.g.length;_++){var T=this.i(_);S+=(0<=T?T:4294967296+T)*E,E*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(b(this))return"-"+C(this).toString(S);for(var E=u(Math.pow(S,6)),_=this,T="";;){var N=P(_,E).g;_=O(_,N.j(E));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(S);if(_=N,y(_))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(var E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function b(S){return S.h==-1}t.l=function(S){return S=O(this,S),b(S)?-1:y(S)?0:1};function C(S){for(var E=S.g.length,_=[],T=0;T<E;T++)_[T]=~S.g[T];return new o(_,~S.h).add(p)}t.abs=function(){return b(this)?C(this):this},t.add=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0,N=0;N<=E;N++){var k=T+(this.i(N)&65535)+(S.i(N)&65535),A=(k>>>16)+(this.i(N)>>>16)+(S.i(N)>>>16);T=A>>>16,k&=65535,A&=65535,_[N]=A<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function O(S,E){return S.add(C(E))}t.j=function(S){if(y(this)||y(S))return h;if(b(this))return b(S)?C(this).j(C(S)):C(C(this).j(S));if(b(S))return C(this.j(C(S)));if(0>this.l(m)&&0>S.l(m))return u(this.m()*S.m());for(var E=this.g.length+S.g.length,_=[],T=0;T<2*E;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var N=0;N<S.g.length;N++){var k=this.i(T)>>>16,A=this.i(T)&65535,ge=S.i(N)>>>16,Ee=S.i(N)&65535;_[2*T+2*N]+=A*Ee,R(_,2*T+2*N),_[2*T+2*N+1]+=k*Ee,R(_,2*T+2*N+1),_[2*T+2*N+1]+=A*ge,R(_,2*T+2*N+1),_[2*T+2*N+2]+=k*ge,R(_,2*T+2*N+2)}for(T=0;T<E;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=E;T<2*E;T++)_[T]=0;return new o(_,0)};function R(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function v(S,E){this.g=S,this.h=E}function P(S,E){if(y(E))throw Error("division by zero");if(y(S))return new v(h,h);if(b(S))return E=P(C(S),E),new v(C(E.g),C(E.h));if(b(E))return E=P(S,C(E)),new v(C(E.g),E.h);if(30<S.g.length){if(b(S)||b(E))throw Error("slowDivide_ only works with positive integers.");for(var _=p,T=E;0>=T.l(S);)_=D(_),T=D(T);var N=F(_,1),k=F(T,1);for(T=F(T,2),_=F(_,2);!y(T);){var A=k.add(T);0>=A.l(S)&&(N=N.add(_),k=A),T=F(T,1),_=F(_,1)}return E=O(S,N.j(E)),new v(N,E)}for(N=h;0<=S.l(E);){for(_=Math.max(1,Math.floor(S.m()/E.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=u(_),A=k.j(E);b(A)||0<A.l(S);)_-=T,k=u(_),A=k.j(E);y(k)&&(k=p),N=N.add(k),S=O(S,A)}return new v(N,S)}t.A=function(S){return P(this,S).h},t.and=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)&S.i(T);return new o(_,this.h&S.h)},t.or=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)|S.i(T);return new o(_,this.h|S.h)},t.xor=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)^S.i(T);return new o(_,this.h^S.h)};function D(S){for(var E=S.g.length+1,_=[],T=0;T<E;T++)_[T]=S.i(T)<<1|S.i(T-1)>>>31;return new o(_,S.h)}function F(S,E){var _=E>>5;E%=32;for(var T=S.g.length-_,N=[],k=0;k<T;k++)N[k]=0<E?S.i(k+_)>>>E|S.i(k+_+1)<<32-E:S.i(k+_);return new o(N,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hb=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,es=o}).apply(typeof zy<"u"?zy:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qb,xo,zb,Bl,bh,Wb,Kb,Gb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],d=d(w),d!=w&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,w=!1,L={next:function(){if(!w&&g<l.length){var V=g++;return{value:d(V,l[V]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,g){return l.call.apply(l.bind,arguments)}function h(l,d,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,p.apply(null,arguments)}function m(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function y(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,L,V){for(var Y=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)Y[$e-2]=arguments[$e];return d.prototype[L].apply(w,Y)}}function b(l){const d=l.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=l[w];return g}return[]}function C(l,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(c(w)){const L=l.length||0,V=w.length||0;l.length=L+V;for(let Y=0;Y<V;Y++)l[L+Y]=w[Y]}else l.push(w)}}class O{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function R(l){return/^[\s\xa0]*$/.test(l)}function v(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function F(l,d,g){for(const w in l)d.call(g,l[w],w,l)}function S(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function E(l){const d={};for(const g in l)d[g]=l[g];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,d){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let V=0;V<_.length;V++)g=_[V],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function N(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function k(l){a.setTimeout(()=>{throw l},0)}function A(){var l=Be;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,g){const w=Ee.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Ee=new O(()=>new ee,l=>l.reset());class ee{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,re=!1,Be=new ge,_n=()=>{const l=a.Promise.resolve(void 0);ie=()=>{l.then(ln)}};var ln=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){k(g)}var d=Ee;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}re=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ze(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var Sr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function On(l,d){if(Ze.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(D){e:{try{P(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&On.aa.h.call(this)}}y(On,Ze);var Wt={2:"touch",3:"pen",4:"mouse"};On.prototype.h=function(){On.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),te=0;function Z(l,d,g,w,L){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=L,this.key=++te,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,d,g,w,L){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var Y=I(l,d,w,L);return-1<Y?(d=l[Y],g||(d.fa=!1)):(d=new Z(d,this.src,V,!!w,L),d.fa=g,l.push(d)),d};function Me(l,d){var g=d.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,d,void 0),V;(V=0<=L)&&Array.prototype.splice.call(w,L,1),V&&(se(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function I(l,d,g,w){for(var L=0;L<l.length;++L){var V=l[L];if(!V.da&&V.listener==d&&V.capture==!!g&&V.ha==w)return L}return-1}var x="closure_lm_"+(1e6*Math.random()|0),M={};function H(l,d,g,w,L){if(Array.isArray(d)){for(var V=0;V<d.length;V++)H(l,d[V],g,w,L);return null}return g=ae(g),l&&l[j]?l.K(d,g,u(w)?!!w.capture:!1,L):$(l,d,g,!1,w,L)}function $(l,d,g,w,L,V){if(!d)throw Error("Invalid event type");var Y=u(L)?!!L.capture:!!L,$e=le(l);if($e||(l[x]=$e=new Ae(l)),g=$e.add(d,g,w,Y,V),g.proxy)return g;if(w=q(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)Sr||(L=Y),L===void 0&&(L=!1),l.addEventListener(d.toString(),w,L);else if(l.attachEvent)l.attachEvent(K(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function q(){function l(g){return d.call(l.src,l.listener,g)}const d=z;return l}function Q(l,d,g,w,L){if(Array.isArray(d))for(var V=0;V<d.length;V++)Q(l,d[V],g,w,L);else w=u(w)?!!w.capture:!!w,g=ae(g),l&&l[j]?(l=l.i,d=String(d).toString(),d in l.g&&(V=l.g[d],g=I(V,g,w,L),-1<g&&(se(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete l.g[d],l.h--)))):l&&(l=le(l))&&(d=l.g[d.toString()],l=-1,d&&(l=I(d,g,w,L)),(g=-1<l?d[l]:null)&&G(g))}function G(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[j])Me(d.i,l);else{var g=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(g,w,l.capture):d.detachEvent?d.detachEvent(K(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=le(d))?(Me(g,l),g.h==0&&(g.src=null,d[x]=null)):se(l)}}}function K(l){return l in M?M[l]:M[l]="on"+l}function z(l,d){if(l.da)l=!0;else{d=new On(d,this);var g=l.listener,w=l.ha||l.src;l.fa&&G(l),l=g.call(w,d)}return l}function le(l){return l=l[x],l instanceof Ae?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[J]||(l[J]=function(d){return l.handleEvent(d)}),l[J])}function oe(){Xe.call(this),this.i=new Ae(this),this.M=this,this.F=null}y(oe,Xe),oe.prototype[j]=!0,oe.prototype.removeEventListener=function(l,d,g,w){Q(this,l,d,g,w)};function he(l,d){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new Ze(d,l);else if(d instanceof Ze)d.target=d.target||l;else{var L=d;d=new Ze(w,l),T(d,L)}if(L=!0,g)for(var V=g.length-1;0<=V;V--){var Y=d.g=g[V];L=Oe(Y,w,!0,d)&&L}if(Y=d.g=l,L=Oe(Y,w,!0,d)&&L,L=Oe(Y,w,!1,d)&&L,g)for(V=0;V<g.length;V++)Y=d.g=g[V],L=Oe(Y,w,!1,d)&&L}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],w=0;w<g.length;w++)se(g[w]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,g,w){return this.i.add(String(l),d,!1,g,w)},oe.prototype.L=function(l,d,g,w){return this.i.add(String(l),d,!0,g,w)};function Oe(l,d,g,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,V=0;V<d.length;++V){var Y=d[V];if(Y&&!Y.da&&Y.capture==g){var $e=Y.listener,_t=Y.ha||Y.src;Y.fa&&Me(l.i,Y),L=$e.call(_t,w)!==!1&&L}}return L&&!w.defaultPrevented}function Ce(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function gt(l){l.g=Ce(()=>{l.g=null,l.i&&(l.i=!1,gt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ht extends Xe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(l){Xe.call(this),this.h=l,this.g={}}y(yt,Xe);var Rt=[];function Rr(l){F(l.g,function(d,g){this.g.hasOwnProperty(g)&&G(d)},l),l.g={}}yt.prototype.N=function(){yt.aa.N.call(this),Rr(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=a.JSON.stringify,$t=a.JSON.parse,cn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ni(){}ni.prototype.h=null;function co(l){return l.h||(l.h=l.i())}function Qp(){}var uo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ru(){Ze.call(this,"d")}y(Ru,Ze);function Pu(){Ze.call(this,"c")}y(Pu,Ze);var gs={},Jp=null;function Ya(){return Jp=Jp||new oe}gs.La="serverreachability";function Xp(l){Ze.call(this,gs.La,l)}y(Xp,Ze);function fo(l){const d=Ya();he(d,new Xp(d))}gs.STAT_EVENT="statevent";function Zp(l,d){Ze.call(this,gs.STAT_EVENT,l),this.stat=d}y(Zp,Ze);function jt(l){const d=Ya();he(d,new Zp(d,l))}gs.Ma="timingevent";function em(l,d){Ze.call(this,gs.Ma,l),this.size=d}y(em,Ze);function ho(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function po(){this.g=!0}po.prototype.xa=function(){this.g=!1};function QA(l,d,g,w,L,V){l.info(function(){if(l.g)if(V)for(var Y="",$e=V.split("&"),_t=0;_t<$e.length;_t++){var ke=$e[_t].split("=");if(1<ke.length){var Pt=ke[0];ke=ke[1];var Ct=Pt.split("_");Y=2<=Ct.length&&Ct[1]=="type"?Y+(Pt+"="+ke+"&"):Y+(Pt+"=redacted&")}}else Y=null;else Y=V;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+g+`
`+Y})}function JA(l,d,g,w,L,V,Y){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+g+`
`+V+" "+Y})}function ri(l,d,g,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+ZA(l,g)+(w?" "+w:"")})}function XA(l,d){l.info(function(){return"TIMEOUT: "+d})}po.prototype.info=function(){};function ZA(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return ti(g)}catch{return d}}var Qa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cu;function Ja(){}y(Ja,ni),Ja.prototype.g=function(){return new XMLHttpRequest},Ja.prototype.i=function(){return{}},Cu=new Ja;function Pr(l,d,g,w){this.j=l,this.i=d,this.l=g,this.R=w||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nm}function nm(){this.i=null,this.g="",this.h=!1}var rm={},ku={};function Ou(l,d,g){l.L=1,l.v=tl(Xn(d)),l.m=g,l.P=!0,sm(l,null)}function sm(l,d){l.F=Date.now(),Xa(l),l.A=Xn(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),_m(g.i,"t",w),l.C=0,g=l.j.J,l.h=new nm,l.g=Mm(l.j,g?d:null,!l.m),0<l.O&&(l.M=new ht(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Rt[0]=L.toString()),L=Rt);for(var V=0;V<L.length;V++){var Y=H(g,L[V],w||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),fo(),QA(l.i,l.u,l.A,l.l,l.R,l.m)}Pr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Zn(l)==3?d.j():this.Y(l)},Pr.prototype.Y=function(l){try{if(l==this.g)e:{const Ct=Zn(this.g);var d=this.g.Ba();const oi=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Im(this.g)))){this.J||Ct!=4||d==7||(d==8||0>=oi?fo(3):fo(2)),Nu(this);var g=this.g.Z();this.X=g;t:if(im(this)){var w=Im(this.g);l="";var L=w.length,V=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),mo(this);var Y="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(V&&d==L-1)});w.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,JA(this.i,this.u,this.A,this.l,this.R,Ct,g),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,_t=this.g;if(($e=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R($e)){var ke=$e;break t}}ke=null}if(g=ke)ri(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xu(this,g);else{this.o=!1,this.s=3,jt(12),ys(this),mo(this);break e}}if(this.P){g=!0;let vn;for(;!this.J&&this.C<Y.length;)if(vn=eI(this,Y),vn==ku){Ct==4&&(this.s=4,jt(14),g=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==rm){this.s=4,jt(15),ri(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else ri(this.i,this.l,vn,null),xu(this,vn);if(im(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||Y.length!=0||this.h.h||(this.s=1,jt(16),g=!1),this.o=this.o&&g,!g)ri(this.i,this.l,Y,"[Invalid Chunked Response]"),ys(this),mo(this);else if(0<Y.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Uu(Pt),Pt.M=!0,jt(11))}}else ri(this.i,this.l,Y,null),xu(this,Y);Ct==4&&ys(this),this.o&&!this.J&&(Ct==4?Nm(this.j,this):(this.o=!1,Xa(this)))}else yI(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),ys(this),mo(this)}}}catch{}finally{}};function im(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function eI(l,d){var g=l.C,w=d.indexOf(`
`,g);return w==-1?ku:(g=Number(d.substring(g,w)),isNaN(g)?rm:(w+=1,w+g>d.length?ku:(d=d.slice(w,w+g),l.C=w+g,d)))}Pr.prototype.cancel=function(){this.J=!0,ys(this)};function Xa(l){l.S=Date.now()+l.I,om(l,l.I)}function om(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ho(p(l.ba,l),d)}function Nu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Pr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(XA(this.i,this.A),this.L!=2&&(fo(),jt(17)),ys(this),this.s=2,mo(this)):om(this,this.S-l)};function mo(l){l.j.G==0||l.J||Nm(l.j,l)}function ys(l){Nu(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Rr(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function xu(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||Du(g.h,l))){if(!l.K&&Du(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)al(g),il(g);else break e;Fu(g),jt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=ho(p(g.Za,g),6e3));if(1>=cm(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else vs(g,11)}else if((l.K||g.g==l)&&al(g),!R(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let ke=L[d];if(g.T=ke[0],ke=ke[1],g.G==2)if(ke[0]=="c"){g.K=ke[1],g.ia=ke[2];const Pt=ke[3];Pt!=null&&(g.la=Pt,g.j.info("VER="+g.la));const Ct=ke[4];Ct!=null&&(g.Aa=Ct,g.j.info("SVER="+g.Aa));const oi=ke[5];oi!=null&&typeof oi=="number"&&0<oi&&(w=1.5*oi,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const vn=l.g;if(vn){const cl=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cl){var V=w.h;V.g||cl.indexOf("spdy")==-1&&cl.indexOf("quic")==-1&&cl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Lu(V,V.h),V.h=null))}if(w.D){const $u=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;$u&&(w.ya=$u,ze(w.I,w.D,$u))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var Y=l;if(w.qa=Lm(w,w.J?w.ia:null,w.W),Y.K){um(w.h,Y);var $e=Y,_t=w.L;_t&&($e.I=_t),$e.B&&(Nu($e),Xa($e)),w.g=Y}else km(w);0<g.i.length&&ol(g)}else ke[0]!="stop"&&ke[0]!="close"||vs(g,7);else g.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?vs(g,7):Vu(g):ke[0]!="noop"&&g.l&&g.l.ta(ke),g.v=0)}}fo(4)}catch{}}var tI=class{constructor(l,d){this.g=l,this.map=d}};function am(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function cm(l){return l.h?1:l.g?l.g.size:0}function Du(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Lu(l,d){l.g?l.g.add(d):l.h=d}function um(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}am.prototype.cancel=function(){if(this.i=fm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function fm(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return b(l.i)}function nI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,w=0;w<g;w++)d.push(l[w]);return d}d=[],g=0;for(w in l)d[g++]=l[w];return d}function rI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const w in l)d[g++]=w;return d}}}function hm(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=rI(l),w=nI(l),L=w.length,V=0;V<L;V++)d.call(void 0,w[V],g&&g[V],l)}var dm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sI(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),L=null;if(0<=w){var V=l[g].substring(0,w);L=l[g].substring(w+1)}else V=l[g];d(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function _s(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof _s){this.h=l.h,Za(this,l.j),this.o=l.o,this.g=l.g,el(this,l.s),this.l=l.l;var d=l.i,g=new _o;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),pm(this,g),this.m=l.m}else l&&(d=String(l).match(dm))?(this.h=!1,Za(this,d[1]||"",!0),this.o=go(d[2]||""),this.g=go(d[3]||"",!0),el(this,d[4]),this.l=go(d[5]||"",!0),pm(this,d[6]||"",!0),this.m=go(d[7]||"")):(this.h=!1,this.i=new _o(null,this.h))}_s.prototype.toString=function(){var l=[],d=this.j;d&&l.push(yo(d,mm,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(yo(d,mm,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(yo(g,g.charAt(0)=="/"?aI:oI,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",yo(g,cI)),l.join("")};function Xn(l){return new _s(l)}function Za(l,d,g){l.j=g?go(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function el(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function pm(l,d,g){d instanceof _o?(l.i=d,uI(l.i,l.h)):(g||(d=yo(d,lI)),l.i=new _o(d,l.h))}function ze(l,d,g){l.i.set(d,g)}function tl(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function go(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function yo(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,iI),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function iI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var mm=/[#\/\?@]/g,oI=/[#\?:]/g,aI=/[#\?]/g,lI=/[#\?@]/g,cI=/#/g;function _o(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Cr(l){l.g||(l.g=new Map,l.h=0,l.i&&sI(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=_o.prototype,t.add=function(l,d){Cr(this),this.i=null,l=si(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function gm(l,d){Cr(l),d=si(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function ym(l,d){return Cr(l),d=si(l,d),l.g.has(d)}t.forEach=function(l,d){Cr(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(d,L,w,this)},this)},this)},t.na=function(){Cr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const L=l[w];for(let V=0;V<L.length;V++)g.push(d[w])}return g},t.V=function(l){Cr(this);let d=[];if(typeof l=="string")ym(this,l)&&(d=d.concat(this.g.get(si(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return Cr(this),this.i=null,l=si(this,l),ym(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function _m(l,d,g){gm(l,d),0<g.length&&(l.i=null,l.g.set(si(l,d),b(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const V=encodeURIComponent(String(w)),Y=this.V(w);for(w=0;w<Y.length;w++){var L=V;Y[w]!==""&&(L+="="+encodeURIComponent(String(Y[w]))),l.push(L)}}return this.i=l.join("&")};function si(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function uI(l,d){d&&!l.j&&(Cr(l),l.i=null,l.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(gm(this,w),_m(this,L,g))},l)),l.j=d}function fI(l,d){const g=new po;if(a.Image){const w=new Image;w.onload=m(kr,g,"TestLoadImage: loaded",!0,d,w),w.onerror=m(kr,g,"TestLoadImage: error",!1,d,w),w.onabort=m(kr,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=m(kr,g,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function hI(l,d){const g=new po,w=new AbortController,L=setTimeout(()=>{w.abort(),kr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(V=>{clearTimeout(L),V.ok?kr(g,"TestPingServer: ok",!0,d):kr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),kr(g,"TestPingServer: error",!1,d)})}function kr(l,d,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function dI(){this.g=new cn}function pI(l,d,g){const w=g||"";try{hm(l,function(L,V){let Y=L;u(L)&&(Y=ti(L)),d.push(w+V+"="+encodeURIComponent(Y))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function nl(l){this.l=l.Ub||null,this.j=l.eb||!1}y(nl,ni),nl.prototype.g=function(){return new rl(this.l,this.j)},nl.prototype.i=function(l){return function(){return l}}({});function rl(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(rl,oe),t=rl.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Eo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vm(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function vm(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?vo(this):Eo(this),this.readyState==3&&vm(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,vo(this))},t.Qa=function(l){this.g&&(this.response=l,vo(this))},t.ga=function(){this.g&&vo(this)};function vo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Eo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function Eo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(rl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Em(l){let d="";return F(l,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function Mu(l,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Em(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,d,g))}function tt(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(tt,oe);var mI=/^https?$/i,gI=["POST","PUT"];t=tt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cu.g(),this.v=this.o?co(this.o):co(Cu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(V){wm(this,V);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const V of w.keys())g.set(V,w.get(V));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gI,d,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Y]of g)this.g.setRequestHeader(V,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Am(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){wm(this,V)}};function wm(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,bm(l),sl(l)}function bm(l){l.A||(l.A=!0,he(l,"complete"),he(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,he(this,"complete"),he(this,"abort"),sl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sl(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Tm(this):this.bb())},t.bb=function(){Tm(this)};function Tm(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Zn(l)!=4||l.Z()!=2)){if(l.u&&Zn(l)==4)Ce(l.Ea,0,l);else if(he(l,"readystatechange"),Zn(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=Y===0){var L=String(l.D).match(dm)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),w=!mI.test(L?L.toLowerCase():"")}g=w}if(g)he(l,"complete"),he(l,"success");else{l.m=6;try{var V=2<Zn(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",bm(l)}}finally{sl(l)}}}}function sl(l,d){if(l.g){Am(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||he(l,"ready");try{g.onreadystatechange=w}catch{}}}function Am(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Zn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),$t(d)}};function Im(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function yI(l){const d={};l=(l.g&&2<=Zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(R(l[w]))continue;var g=N(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=d[L]||[];d[L]=V,V.push(g)}S(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wo(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Sm(l){this.Aa=0,this.i=[],this.j=new po,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wo("baseRetryDelayMs",5e3,l),this.cb=wo("retryDelaySeedMs",1e4,l),this.Wa=wo("forwardChannelMaxRetries",2,l),this.wa=wo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new am(l&&l.concurrentRequestLimit),this.Da=new dI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sm.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,w){jt(0),this.W=l,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=Lm(this,null,this.W),ol(this)};function Vu(l){if(Rm(l),l.G==3){var d=l.U++,g=Xn(l.I);if(ze(g,"SID",l.K),ze(g,"RID",d),ze(g,"TYPE","terminate"),bo(l,g),d=new Pr(l,l.j,d),d.L=2,d.v=tl(Xn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Mm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Xa(d)}Dm(l)}function il(l){l.g&&(Uu(l),l.g.cancel(),l.g=null)}function Rm(l){il(l),l.u&&(a.clearTimeout(l.u),l.u=null),al(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ol(l){if(!lm(l.h)&&!l.s){l.s=!0;var d=l.Ga;ie||_n(),re||(ie(),re=!0),Be.add(d,l),l.B=0}}function _I(l,d){return cm(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ho(p(l.Ga,l,d),xm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Pr(this,this.j,l);let V=this.o;if(this.S&&(V?(V=E(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Cm(this,L,d),g=Xn(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),bo(this,g),V&&(this.O?d="headers="+encodeURIComponent(String(Em(V)))+"&"+d:this.m&&Mu(g,this.m,V)),Lu(this.h,L),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",d),ze(g,"SID","null"),L.T=!0,Ou(L,g,null)):Ou(L,g,d),this.G=2}}else this.G==3&&(l?Pm(this,l):this.i.length==0||lm(this.h)||Pm(this))};function Pm(l,d){var g;d?g=d.l:g=l.U++;const w=Xn(l.I);ze(w,"SID",l.K),ze(w,"RID",g),ze(w,"AID",l.T),bo(l,w),l.m&&l.o&&Mu(w,l.m,l.o),g=new Pr(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Cm(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Lu(l.h,g),Ou(g,w,d)}function bo(l,d){l.H&&F(l.H,function(g,w){ze(d,w,g)}),l.l&&hm({},function(g,w){ze(d,w,g)})}function Cm(l,d,g){g=Math.min(l.i.length,g);var w=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let V=-1;for(;;){const Y=["count="+g];V==-1?0<g?(V=L[0].g,Y.push("ofs="+V)):V=0:Y.push("ofs="+V);let $e=!0;for(let _t=0;_t<g;_t++){let ke=L[_t].g;const Pt=L[_t].map;if(ke-=V,0>ke)V=Math.max(0,L[_t].g-100),$e=!1;else try{pI(Pt,Y,"req"+ke+"_")}catch{w&&w(Pt)}}if($e){w=Y.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,w}function km(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ie||_n(),re||(ie(),re=!0),Be.add(d,l),l.v=0}}function Fu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ho(p(l.Fa,l),xm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Om(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ho(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),il(this),Om(this))};function Uu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Om(l){l.g=new Pr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Xn(l.qa);ze(d,"RID","rpc"),ze(d,"SID",l.K),ze(d,"AID",l.T),ze(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(d,"TO",l.ja),ze(d,"TYPE","xmlhttp"),bo(l,d),l.m&&l.o&&Mu(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=tl(Xn(d)),g.m=null,g.P=!0,sm(g,l)}t.Za=function(){this.C!=null&&(this.C=null,il(this),Fu(this),jt(19))};function al(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Nm(l,d){var g=null;if(l.g==d){al(l),Uu(l),l.g=null;var w=2}else if(Du(l.h,d))g=d.D,um(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;w=Ya(),he(w,new em(w,g)),ol(l)}else km(l);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&_I(l,d)||w==2&&Fu(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),L){case 1:vs(l,5);break;case 4:vs(l,10);break;case 3:vs(l,6);break;default:vs(l,2)}}}function xm(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function vs(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),w=l.Xa;const L=!w;w=new _s(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Za(w,"https"),tl(w),L?fI(w.toString(),g):hI(w.toString(),g)}else jt(2);l.G=0,l.l&&l.l.sa(d),Dm(l),Rm(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Dm(l){if(l.G=0,l.ka=[],l.l){const d=fm(l.h);(d.length!=0||l.i.length!=0)&&(C(l.ka,d),C(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function Lm(l,d,g){var w=g instanceof _s?Xn(g):new _s(g);if(w.g!="")d&&(w.g=d+"."+w.g),el(w,w.s);else{var L=a.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var V=new _s(null);w&&Za(V,w),d&&(V.g=d),L&&el(V,L),g&&(V.l=g),w=V}return g=l.D,d=l.ya,g&&d&&ze(w,g,d),ze(w,"VER",l.la),bo(l,w),w}function Mm(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new tt(new nl({eb:g})):new tt(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vm(){}t=Vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ll(){}ll.prototype.g=function(l,d){return new Xt(l,d)};function Xt(l,d){oe.call(this),this.g=new Sm(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!R(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!R(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ii(this)}y(Xt,oe),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Vu(this.g)},Xt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=ti(l),l=g);d.i.push(new tI(d.Ya++,l)),d.G==3&&ol(d)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Vu(this.g),delete this.g,Xt.aa.N.call(this)};function Fm(l){Ru.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}y(Fm,Ru);function Um(){Pu.call(this),this.status=1}y(Um,Pu);function ii(l){this.g=l}y(ii,Vm),ii.prototype.ua=function(){he(this.g,"a")},ii.prototype.ta=function(l){he(this.g,new Fm(l))},ii.prototype.sa=function(l){he(this.g,new Um)},ii.prototype.ra=function(){he(this.g,"b")},ll.prototype.createWebChannel=ll.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,Gb=function(){return new ll},Kb=function(){return Ya()},Wb=gs,bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qa.NO_ERROR=0,Qa.TIMEOUT=8,Qa.HTTP_ERROR=6,Bl=Qa,tm.COMPLETE="complete",zb=tm,Qp.EventType=uo,uo.OPEN="a",uo.CLOSE="b",uo.ERROR="c",uo.MESSAGE="d",oe.prototype.listen=oe.prototype.K,xo=Qp,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,qb=tt}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const Wy="@firebase/firestore",Ky="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Ud("@firebase/firestore");function di(){return js.logLevel}function ne(t,...e){if(js.logLevel<=we.DEBUG){const n=e.map(Xd);js.debug(`Firestore (${no}): ${t}`,...n)}}function _r(t,...e){if(js.logLevel<=we.ERROR){const n=e.map(Xd);js.error(`Firestore (${no}): ${t}`,...n)}}function Hi(t,...e){if(js.logLevel<=we.WARN){const n=e.map(Xd);js.warn(`Firestore (${no}): ${t}`,...n)}}function Xd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Yb(t,r,n)}function Yb(t,e,n){let r=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _r(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Yb(e,s,r)}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class gD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yD{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new Qb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new xt(e)}}class _D{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new _D(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ED{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Gy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Th(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return _f(s)===_f(i)?be(s,i):_f(s)?1:-1}return be(t.length,e.length)}const bD=55296,TD=57343;function _f(t){const e=t.charCodeAt(0);return e>=bD&&e<=TD}function qi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="__name__";class Dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return be(e.length,n.length)}static compareSegments(e,n){const r=Dn.isNumericId(e),s=Dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Dn.extractNumericId(e).compare(Dn.extractNumericId(n)):Th(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class qe extends Dn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const AD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Dn{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return AD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yy}static keyField(){return new Tt([Yy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new X(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(qe.fromString(e))}static fromName(e){return new ue(qe.fromString(e).popFirst(5))}static empty(){return new ue(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e,n){if(!n)throw new X(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ID(t,e,n,r){if(e===!0&&r===!0)throw new X(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qy(t){if(!ue.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jy(t){if(ue.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ru(t);throw new X(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ua(t,e){if(!Xb(t))throw new X(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=-62135596800,Zy=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Zy);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xy)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zy}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ua(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:ut("string",We._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new We(0,0))}static max(){return new ye(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=-1;function SD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new rs(s,ue.empty(),e)}function RD(t){return new rs(t.readTime,t.key,_a)}class rs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rs(ye.min(),ue.empty(),_a)}static max(){return new rs(ye.max(),ue.empty(),_a)}}function PD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==CD)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function OD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}su.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=-1;function iu(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function ND(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="";function xD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=e_(e)),e=DD(t.get(n),e);return e_(e)}function DD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Zb:n+="";break;default:n+=i}}return n}function e_(t){return t+Zb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n_(this.data.getIterator())}getIteratorFrom(e){return new n_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class n_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new ft(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tT("Invalid base64 string: "+i):i}}(e);return new St(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const LD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=LD.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="server_timestamp",rT="__type__",sT="__previous_value__",iT="__local_write_time__";function tp(t){return(t?.mapValue?.fields||{})[rT]?.stringValue===nT}function ou(t){const e=t.mapValue.fields[sT];return tp(e)?ou(e):e}function va(t){const e=ss(t.mapValue.fields[iT].timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n,r,s,i,o,a,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const wc="(default)";class Ea{constructor(e,n){this.projectId=e,this.database=n||wc}static empty(){return new Ea("","")}get isDefaultDatabase(){return this.database===wc}isEqual(e){return e instanceof Ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="__type__",VD="__max__",Rl={mapValue:{}},aT="__vector__",bc="value";function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tp(t)?4:UD(t)?9007199254740991:FD(t)?10:11:me(28295,{value:t})}function Qn(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return va(t).isEqual(va(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ss(s.timestampValue),a=ss(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return is(s.bytesValue).isEqual(is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=st(s.doubleValue),a=st(i.doubleValue);return o===a?Ec(o)===Ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(t_(o)!==t_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qn(o[c],a[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function wa(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=st(i.integerValue||i.doubleValue),c=st(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return r_(t.timestampValue,e.timestampValue);case 4:return r_(va(t),va(e));case 5:return Th(t.stringValue,e.stringValue);case 6:return function(i,o){const a=is(i),c=is(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=be(a[u],c[u]);if(f!==0)return f}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(st(i.latitude),st(o.latitude));return a!==0?a:be(st(i.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return s_(t.arrayValue,e.arrayValue);case 10:return function(i,o){const a=i.fields||{},c=o.fields||{},u=a[bc]?.arrayValue,f=c[bc]?.arrayValue,h=be(u?.values?.length||0,f?.values?.length||0);return h!==0?h:s_(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Rl.mapValue&&o===Rl.mapValue)return 0;if(i===Rl.mapValue)return 1;if(o===Rl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let h=0;h<c.length&&h<f.length;++h){const p=Th(c[h],f[h]);if(p!==0)return p;const m=zi(a[c[h]],u[f[h]]);if(m!==0)return m}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function r_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=ss(t),r=ss(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function s_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=zi(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Wi(t){return Ah(t)}function Ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ss(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ah(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ah(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function Hl(t){switch(os(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ou(t);return e?16+Hl(e):16;case 5:return 2*t.stringValue.length;case 6:return is(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Hl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ps(r.fields,(i,o)=>{s+=i.length+Hl(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function i_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ih(t){return!!t&&"integerValue"in t}function np(t){return!!t&&"arrayValue"in t}function o_(t){return!!t&&"nullValue"in t}function a_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ql(t){return!!t&&"mapValue"in t}function FD(t){return(t?.mapValue?.fields||{})[oT]?.stringValue===aT}function Yo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yo(t.arrayValue.values[n]);return e}return{...t}}function UD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===VD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yo(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Yo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ql(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qt(Yo(this.value))}}function lT(t){const e=[];return ps(t.fields,(n,r)=>{const s=new Tt([n]);if(ql(r)){const i=lT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,ye.min(),ye.min(),ye.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,ye.min(),ye.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ye.min(),ye.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function l_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=zi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function c_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function $D(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{}class ct extends cT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BD(e,n,r):n==="array-contains"?new zD(e,r):n==="in"?new WD(e,r):n==="not-in"?new KD(e,r):n==="array-contains-any"?new GD(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HD(e,r):new qD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zi(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cn extends cT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Cn(e,n)}matches(e){return uT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uT(t){return t.op==="and"}function fT(t){return jD(t)&&uT(t)}function jD(t){for(const e of t.filters)if(e instanceof Cn)return!1;return!0}function Sh(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(fT(t))return t.filters.map(e=>Sh(e)).join(",");{const e=t.filters.map(n=>Sh(n)).join(",");return`${t.op}(${e})`}}function hT(t,e){return t instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Qn(r.value,s.value)}(t,e):t instanceof Cn?function(r,s){return s instanceof Cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&hT(o,s.filters[a]),!0):!1}(t,e):void me(19439)}function dT(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Wi(n.value)}`}(t):t instanceof Cn?function(n){return n.op.toString()+" {"+n.getFilters().map(dT).join(" ,")+"}"}(t):"Filter"}class BD extends ct{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class HD extends ct{constructor(e,n){super(e,"in",n),this.keys=pT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qD extends ct{constructor(e,n){super(e,"not-in",n),this.keys=pT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pT(t,e){return(e.arrayValue?.values||[]).map(n=>ue.fromName(n.referenceValue))}class zD extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return np(n)&&wa(n.arrayValue,this.value)}}class WD extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wa(this.value.arrayValue,n)}}class KD extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wa(this.value.arrayValue,n)}}class GD extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!np(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function u_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new YD(t,e,n,r,s,i,o)}function rp(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.Te=n}return e.Te}function sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$D(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!c_(t.startAt,e.startAt)&&c_(t.endAt,e.endAt)}function Rh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function QD(t,e,n,r,s,i,o,a){return new io(t,e,n,r,s,i,o,a)}function ip(t){return new io(t)}function f_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mT(t){return t.collectionGroup!==null}function Qo(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ba(i,r))}),n.has(Tt.keyField().canonicalString())||e.Ie.push(new ba(Tt.keyField(),r))}return e.Ie}function Hn(t){const e=_e(t);return e.Ee||(e.Ee=JD(e,Qo(t))),e.Ee}function JD(t,e){if(t.limitType==="F")return u_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ba(s.field,i)});const n=t.endAt?new Tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tc(t.startAt.position,t.startAt.inclusive):null;return u_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ph(t,e){const n=t.filters.concat([e]);return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ch(t,e,n){return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function au(t,e){return sp(Hn(t),Hn(e))&&t.limitType===e.limitType}function gT(t){return`${rp(Hn(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dT(s)).join(", ")}]`),iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Wi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Wi(s)).join(",")),`Target(${r})`}(Hn(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=l_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Qo(r),s)||r.endAt&&!function(o,a,c){const u=l_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Qo(r),s))}(t,e)}function XD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yT(t){return(e,n)=>{let r=!1;for(const s of Qo(t)){const i=ZD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZD(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?zi(c,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return eT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=new et(ue.comparator);function vr(){return eL}const _T=new et(ue.comparator);function Do(...t){let e=_T;for(const n of t)e=e.insert(n.key,n);return e}function vT(t){let e=_T;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ps(){return Jo()}function ET(){return Jo()}function Jo(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const tL=new et(ue.comparator),nL=new ft(ue.comparator);function Te(...t){let e=nL;for(const n of t)e=e.add(n);return e}const rL=new ft(be);function sL(){return rL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function wT(t){return{integerValue:""+t}}function iL(t,e){return ND(e)?wT(e):op(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this._=void 0}}function oL(t,e,n){return t instanceof Ta?function(s,i){const o={fields:{[rT]:{stringValue:nT},[iT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tp(i)&&(i=ou(i)),i&&(o.fields[sT]=i),{mapValue:o}}(n,e):t instanceof Aa?TT(t,e):t instanceof Ia?AT(t,e):function(s,i){const o=bT(s,i),a=h_(o)+h_(s.Ae);return Ih(o)&&Ih(s.Ae)?wT(a):op(s.serializer,a)}(t,e)}function aL(t,e,n){return t instanceof Aa?TT(t,e):t instanceof Ia?AT(t,e):n}function bT(t,e){return t instanceof Ac?function(r){return Ih(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ta extends cu{}class Aa extends cu{constructor(e){super(),this.elements=e}}function TT(t,e){const n=IT(e);for(const r of t.elements)n.some(s=>Qn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ia extends cu{constructor(e){super(),this.elements=e}}function AT(t,e){let n=IT(e);for(const r of t.elements)n=n.filter(s=>!Qn(s,r));return{arrayValue:{values:n}}}class Ac extends cu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function h_(t){return st(t.integerValue||t.doubleValue)}function IT(t){return np(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n){this.field=e,this.transform=n}}function cL(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Aa&&s instanceof Aa||r instanceof Ia&&s instanceof Ia?qi(r.elements,s.elements,Qn):r instanceof Ac&&s instanceof Ac?Qn(r.Ae,s.Ae):r instanceof Ta&&s instanceof Ta}(t.transform,e.transform)}class uL{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ap(t.key,sn.none()):new $a(t.key,t.data,sn.none());{const n=t.data,r=Qt.empty();let s=new ft(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ms(t.key,r,new nn(s.toArray()),sn.none())}}function fL(t,e,n){t instanceof $a?function(s,i,o){const a=s.value.clone(),c=p_(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(s,i,o){if(!zl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=p_(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(RT(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof $a?function(i,o,a,c){if(!zl(i.precondition,o))return a;const u=i.value.clone(),f=m_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ms?function(i,o,a,c){if(!zl(i.precondition,o))return a;const u=m_(i.fieldTransforms,c,o),f=o.data;return f.setAll(RT(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return zl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function hL(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bT(r.transform,s||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function d_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qi(r,s,(i,o)=>cL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends uu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ms extends uu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function RT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function p_(t,e,n){const r=new Map;De(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,aL(o,a,n[s]))}return r}function m_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,oL(i,o,e))}return r}class ap extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dL extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fL(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ET();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=ST(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(n,r)=>d_(n,r))&&qi(this.baseMutations,e.baseMutations,(n,r)=>d_(n,r))}}class lp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return tL}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Se;function yL(t){switch(t){case U.OK:return me(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function PT(t){if(t===void 0)return _r("GRPC error has no .code"),U.UNKNOWN;switch(t){case ot.OK:return U.OK;case ot.CANCELLED:return U.CANCELLED;case ot.UNKNOWN:return U.UNKNOWN;case ot.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ot.INTERNAL:return U.INTERNAL;case ot.UNAVAILABLE:return U.UNAVAILABLE;case ot.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ot.NOT_FOUND:return U.NOT_FOUND;case ot.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ot.ABORTED:return U.ABORTED;case ot.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ot.DATA_LOSS:return U.DATA_LOSS;default:return me(39323,{code:t})}}(Se=ot||(ot={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=new es([4294967295,4294967295],0);function g_(t){const e=_L().encode(t),n=new Hb;return n.update(e),new Uint8Array(n.digest())}function y_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Lo(`Invalid padding: ${n}`);if(r<0)throw new Lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Lo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=es.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(vL)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=g_(e),[r,s]=y_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new cp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=g_(e),[r,s]=y_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fu(ye.min(),s,new et(be),vr(),Te())}}class ja{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ja(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class CT{constructor(e,n){this.targetId=e,this.Ce=n}}class kT{constructor(e,n,r=St.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class __{constructor(){this.ve=0,this.Fe=v_(),this.Me=St.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new ja(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=v_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class EL{constructor(e){this.Ge=e,this.ze=new Map,this.je=vr(),this.Je=Pl(),this.He=Pl(),this.Ye=new et(be)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Rh(i))if(r===0){const o=new ue(i.path);this.et(n,o,Mt.newNoDocument(o,ye.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=is(r).toUint8Array()}catch(c){if(c instanceof tT)return Hi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new cp(o,s,i)}catch(c){return Hi(c instanceof Lo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Rh(a.target)){const c=new ue(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Mt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Te();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new fu(e,n,this.Ye,this.je,r);return this.je=vr(),this.Je=Pl(),this.He=Pl(),this.Ye=new et(be),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new __,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ft(be),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ft(be),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new __),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Pl(){return new et(ue.comparator)}function v_(){return new et(ue.comparator)}const wL={asc:"ASCENDING",desc:"DESCENDING"},bL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TL={and:"AND",or:"OR"};class AL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kh(t,e){return t.useProto3Json||iu(e)?e:{value:e}}function Ic(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IL(t,e){return Ic(t,e.toTimestamp())}function qn(t){return De(!!t,49232),ye.fromTimestamp(function(n){const r=ss(n);return new We(r.seconds,r.nanos)}(t))}function up(t,e){return Oh(t,e).canonicalString()}function Oh(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NT(t){const e=qe.fromString(t);return De(VT(e),10190,{key:e.toString()}),e}function Nh(t,e){return up(t.databaseId,e.path)}function vf(t,e){const n=NT(e);if(n.get(1)!==t.databaseId.projectId)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(DT(n))}function xT(t,e){return up(t.databaseId,e)}function SL(t){const e=NT(t);return e.length===4?qe.emptyPath():DT(e)}function xh(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DT(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function E_(t,e,n){return{name:Nh(t,e),fields:n.value.mapValue.fields}}function RL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),St.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),St.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?U.UNKNOWN:PT(u.code);return new X(f,u.message||"")}(o);n=new kT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vf(t,r.document.name),i=qn(r.document.updateTime),o=r.document.createTime?qn(r.document.createTime):ye.min(),a=new Qt({mapValue:{fields:r.document.fields}}),c=Mt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Wl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vf(t,r.document),i=r.readTime?qn(r.readTime):ye.min(),o=Mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Wl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vf(t,r.document),i=r.removedTargetIds||[];n=new Wl([],i,s,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gL(s,i),a=r.targetId;n=new CT(a,o)}}return n}function PL(t,e){let n;if(e instanceof $a)n={update:E_(t,e.key,e.value)};else if(e instanceof ap)n={delete:Nh(t,e.key)};else if(e instanceof ms)n={update:E_(t,e.key,e.data),updateMask:VL(e.fieldMask)};else{if(!(e instanceof dL))return me(16599,{Vt:e.type});n={verify:Nh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Aa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function CL(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?qn(s.updateTime):qn(i);return o.isEqual(ye.min())&&(o=qn(i)),new uL(o,s.transformResults||[])}(n,e))):[]}function kL(t,e){return{documents:[xT(t,e.path)]}}function OL(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xT(t,s);const i=function(u){if(u.length!==0)return MT(Cn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:mi(p.field),direction:DL(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=kh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function NL(t){let e=SL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(h){const p=LT(h);return p instanceof Cn&&fT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new ba(gi(y.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,iu(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new Tc(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,m=h.values||[];return new Tc(m,p)}(n.endAt)),QD(e,s,o,i,a,"F",c,u)}function xL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gi(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gi(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return ct.create(gi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Cn.create(n.compositeFilter.filters.map(r=>LT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function DL(t){return wL[t]}function LL(t){return bL[t]}function ML(t){return TL[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return Tt.fromServerFormat(t.fieldPath)}function MT(t){return t instanceof ct?function(n){if(n.op==="=="){if(a_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(o_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(a_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(o_(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:LL(n.op),value:n.value}}}(t):t instanceof Cn?function(n){const r=n.getFilters().map(s=>MT(s));return r.length===1?r[0]:{compositeFilter:{op:ML(n.op),filters:r}}}(t):me(54877,{filter:t})}function VL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r,s,i=ye.min(),o=ye.min(),a=St.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.yt=e}}function UL(t){const e=NL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ch(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(){this.Cn=new jL}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(rs.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class jL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},FT=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(FT,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ki(0)}static cr(){return new Ki(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="LruGarbageCollector",BL=1048576;function T_([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class HL{constructor(e){this.Ir=e,this.buffer=new ft(T_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();T_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(b_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?ne(b_,"Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.Vr(3e5)})}}class zL{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(su.ce);const r=new HL(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(w_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),w_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),di()<=we.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function WL(t,e){return new zL(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xo(r.mutation,s,nn.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Do();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=vr();const o=Jo(),a=function(){return Jo()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ms)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Xo(f.mutation,u,f.mutation.getFieldMask(),We.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>a.set(u,new GL(f,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Jo();let s=new et((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||nn.empty();f=a.applyToLocalView(u,f),r.set(c,f);const h=(s.get(a.batchId)||Te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,h=ET();f.forEach(p=>{if(!i.has(p)){const m=ST(n.get(p),r.get(p));m!==null&&h.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Ps());let a=_a,c=i;return o.next(u=>B.forEach(u,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(f=>({batchId:a,changes:vT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=Do();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Do();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,c=>{const u=function(h,p){return new io(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Mt.newInvalidDocument(f)))});let a=Do();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Xo(f.mutation,u,nn.empty(),We.now()),lu(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:qn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:UL(s.bundledQuery),readTime:qn(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(){this.overlays=new et(ue.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ps();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Ps(),i=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new et((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ps(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return B.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mL(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.Qr=new ft(dt.$r),this.Ur=new ft(dt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new dt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ue(new qe([])),r=new dt(n,e),s=new dt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ue(new qe([])),r=new dt(n,e),s=new dt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ue.comparator(e.key,n.key)||be(e.Yr,n.Yr)}static Kr(e,n){return be(e.Yr,n.Yr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ft(dt.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pL(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new dt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?ep:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(be);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new dt(new ue(i),0);let a=new ft(be);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Yr)),!0)},o),B.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new dt(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.ri=e,this.docs=function(){return new et(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=vr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vr();const o=n.path,a=new ue(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||PD(RD(f),r)<=0||(s.has(f.key)||lu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tM(this)}getSize(e){return B.resolve(this.size)}}class tM extends KL{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.persistence=e,this.si=new Xs(n=>rp(n),sp),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new fp,this.targetCount=0,this.ai=Ki.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.ui={},this.overlays={},this.ci=new su(0),this.li=!1,this.li=!0,this.hi=new XL,this.referenceDelegate=e(this),this.Pi=new nM(this),this.indexManager=new $L,this.remoteDocumentCache=function(s){return new eM(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new FL(n),this.Ii=new QL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new ZL(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new rM(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class rM extends kD{constructor(e){super(),this.currentSequenceNumber=e}}class hp{constructor(e){this.persistence=e,this.Ri=new fp,this.Vi=null}static mi(e){return new hp(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const s=ue.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Sc{constructor(e,n){this.persistence=e,this.pi=new Xs(r=>xD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=WL(this,n)}static mi(e,n){return new Sc(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ye.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Hl(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return mO()?8:OD(Ft())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sM;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(di()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(di()<=we.DEBUG&&ne("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(di()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(n))):B.resolve())}ys(e,n){if(f_(n))return B.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ch(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,a);return this.Cs(n,u,o,c.readTime)?this.ys(e,Ch(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return f_(n)||s.isEqual(ye.min())?B.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(di()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pi(n)),this.vs(e,o,n,SD(s,_a)).next(a=>a))})}Ds(e,n){let r=new ft(yT(e));return n.forEach((s,i)=>{lu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return di()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",pi(n)),this.ps.getDocumentsMatchingQuery(e,n,rs.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="LocalStore",oM=3e8;class aM{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new et(be),this.xs=new Xs(i=>rp(i),sp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YL(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function lM(t,e,n,r){return new aM(t,e,n,r)}async function $T(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function cM(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const h=u.batch,p=h.keys();let m=B.resolve();return p.forEach(y=>{m=m.next(()=>f.getEntry(c,y)).next(b=>{const C=u.docVersions.get(y);De(C!==null,48541),b.version.compareTo(C)<0&&(h.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),f.addEntry(b)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jT(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function uM(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((f,h)=>{const p=s.get(h);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,h).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,h)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(St.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):f.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(f.resumeToken,r)),s=s.insert(h,m),function(b,C,O){return b.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=oM?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,m,f)&&a.push(n.Pi.updateTargetData(i,m))});let c=vr(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(fM(i,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(ye.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(h=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function fM(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=vr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ne(pp,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function hM(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ep),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dM(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Dh(t,e,n){const r=_e(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!so(o))throw o;ne(pp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function A_(t,e,n){const r=_e(t);let s=ye.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const h=_e(c),p=h.xs.get(f);return p!==void 0?B.resolve(h.Ms.get(p)):h.Pi.getTargetData(u,f)}(r,o,Hn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:Te())).next(a=>(pM(r,XD(e),a),{documents:a,Qs:i})))}function pM(t,e,n){let r=t.Os.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class I_{constructor(){this.activeTargetIds=sL()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mM{constructor(){this.Mo=new I_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new I_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="ConnectivityMonitor";class R_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(S_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(S_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl=null;function Lh(){return Cl===null?Cl=function(){return 268435456+Math.round(2147483648*Math.random())}():Cl++,"0x"+Cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="RestConnection",yM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _M{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===wc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Lh(),a=this.zo(e,n.toUriEncodedString());ne(Ef,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(a),f=hs(u);return this.Jo(e,a,c,r,f).then(h=>(ne(Ef,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Hi(Ef,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=yM[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class EM extends _M{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Lh();return new Promise((a,c)=>{const u=new qb;u.setWithCredentials(!0),u.listenOnce(zb.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bl.NO_ERROR:const h=u.getResponseJson();ne(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case Bl.TIMEOUT:ne(kt,`RPC '${e}' ${o} timed out`),c(new X(U.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const p=u.getStatus();if(ne(kt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m?.error;if(y&&y.status&&y.message){const b=function(O){const R=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(R)>=0?R:U.UNKNOWN}(y.status);c(new X(b,y.message))}else c(new X(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new X(U.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ne(kt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ne(kt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Lh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gb(),a=Kb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ne(kt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const h=o.createWebChannel(f,c);this.I_(h);let p=!1,m=!1;const y=new vM({Yo:C=>{m?ne(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(ne(kt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),ne(kt,`RPC '${e}' stream ${s} sending:`,C),h.send(C))},Zo:()=>h.close()}),b=(C,O,R)=>{C.listen(O,v=>{try{R(v)}catch(P){setTimeout(()=>{throw P},0)}})};return b(h,xo.EventType.OPEN,()=>{m||(ne(kt,`RPC '${e}' stream ${s} transport opened.`),y.o_())}),b(h,xo.EventType.CLOSE,()=>{m||(m=!0,ne(kt,`RPC '${e}' stream ${s} transport closed`),y.a_(),this.E_(h))}),b(h,xo.EventType.ERROR,C=>{m||(m=!0,Hi(kt,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),y.a_(new X(U.UNAVAILABLE,"The operation could not be completed")))}),b(h,xo.EventType.MESSAGE,C=>{if(!m){const O=C.data[0];De(!!O,16349);const R=O,v=R?.error||R[0]?.error;if(v){ne(kt,`RPC '${e}' stream ${s} received error:`,v);const P=v.status;let D=function(E){const _=ot[E];if(_!==void 0)return PT(_)}(P),F=v.message;D===void 0&&(D=U.INTERNAL,F="Unknown error status: "+P+" with message "+v.message),m=!0,y.a_(new X(D,F)),h.close()}else ne(kt,`RPC '${e}' stream ${s} received:`,O),y.u_(O)}}),b(a,Wb.STAT_EVENT,C=>{C.stat===bh.PROXY?ne(kt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===bh.NOPROXY&&ne(kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.__()},0),y}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function wf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){return new AL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="PersistentStream";class HT{constructor(e,n,r,s,i,o,a,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new BT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new X(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ne(P_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ne(P_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wM extends HT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=RL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?qn(o.readTime):ye.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=xh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Rh(c)?{documents:kL(i,c)}:{query:OL(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=OT(i,o.resumeToken);const u=kh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){a.readTime=Ic(i,o.snapshotVersion.toTimestamp());const u=kh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=xL(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=xh(this.serializer),n.removeTarget=e,this.q_(n)}}class bM extends HT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=CL(e.writeResults,e.commitTime),r=qn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=xh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PL(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{}class AM extends TM{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Oh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,Oh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class IM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_r(n),this.aa=!1):ne("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="RemoteStore";class SM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Zs(this)&&(ne(Bs,"Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.Ea.add(4),await Ba(u),u.Ra.set("Unknown"),u.Ea.delete(4),await du(u)}(this))})}),this.Ra=new IM(r,s)}}async function du(t){if(Zs(t))for(const e of t.da)await e(!0)}async function Ba(t){for(const e of t.da)await e(!1)}function qT(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),_p(n)?yp(n):oo(n).O_()&&gp(n,e))}function mp(t,e){const n=_e(t),r=oo(n);n.Ia.delete(e),r.O_()&&zT(n,e),n.Ia.size===0&&(r.O_()?r.L_():Zs(n)&&n.Ra.set("Unknown"))}function gp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oo(t).Y_(e)}function zT(t,e){t.Va.Ue(e),oo(t).Z_(e)}function yp(t){t.Va=new EL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),oo(t).start(),t.Ra.ua()}function _p(t){return Zs(t)&&!oo(t).x_()&&t.Ia.size>0}function Zs(t){return _e(t).Ea.size===0}function WT(t){t.Va=void 0}async function RM(t){t.Ra.set("Online")}async function PM(t){t.Ia.forEach((e,n)=>{gp(t,e)})}async function CM(t,e){WT(t),_p(t)?(t.Ra.ha(e),yp(t)):t.Ra.set("Unknown")}async function kM(t,e,n){if(t.Ra.set("Online"),e instanceof kT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){ne(Bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rc(t,r)}else if(e instanceof Wl?t.Va.Ze(e):e instanceof CT?t.Va.st(e):t.Va.tt(e),!n.isEqual(ye.min()))try{const r=await jT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(St.EMPTY_BYTE_STRING,f.snapshotVersion)),zT(i,c);const h=new Kr(f.target,c,u,f.sequenceNumber);gp(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne(Bs,"Failed to raise snapshot:",r),await Rc(t,r)}}async function Rc(t,e,n){if(!so(e))throw e;t.Ea.add(1),await Ba(t),t.Ra.set("Offline"),n||(n=()=>jT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne(Bs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await du(t)})}function KT(t,e){return e().catch(n=>Rc(t,n,e))}async function pu(t){const e=_e(t),n=as(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ep;for(;OM(e);)try{const s=await hM(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,NM(e,s)}catch(s){await Rc(e,s)}GT(e)&&YT(e)}function OM(t){return Zs(t)&&t.Ta.length<10}function NM(t,e){t.Ta.push(e);const n=as(t);n.O_()&&n.X_&&n.ea(e.mutations)}function GT(t){return Zs(t)&&!as(t).x_()&&t.Ta.length>0}function YT(t){as(t).start()}async function xM(t){as(t).ra()}async function DM(t){const e=as(t);for(const n of t.Ta)e.ea(n.mutations)}async function LM(t,e,n){const r=t.Ta.shift(),s=lp.from(r,e,n);await KT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pu(t)}async function MM(t,e){e&&as(t).X_&&await async function(r,s){if(function(o){return yL(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();as(r).B_(),await KT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pu(r)}}(t,e),GT(t)&&YT(t)}async function C_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne(Bs,"RemoteStore received new credentials");const r=Zs(n);n.Ea.add(3),await Ba(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await du(n)}async function VM(t,e){const n=_e(t);e?(n.Ea.delete(2),await du(n)):e||(n.Ea.add(2),await Ba(n),n.Ra.set("Unknown"))}function oo(t){return t.ma||(t.ma=function(n,r,s){const i=_e(n);return i.sa(),new wM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:RM.bind(null,t),t_:PM.bind(null,t),r_:CM.bind(null,t),H_:kM.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),_p(t)?yp(t):t.Ra.set("Unknown")):(await t.ma.stop(),WT(t))})),t.ma}function as(t){return t.fa||(t.fa=function(n,r,s){const i=_e(n);return i.sa(),new bM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:xM.bind(null,t),r_:MM.bind(null,t),ta:DM.bind(null,t),na:LM.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await pu(t)):(await t.fa.stop(),t.Ta.length>0&&(ne(Bs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new vp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ep(t,e){if(_r("AsyncQueue",`${e}: ${t}`),so(t))return new X(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{static emptySet(e){return new ki(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=Do(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.ga=new et(ue.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gi(e,n,ki.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class UM{constructor(){this.queries=O_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=O_(),i.forEach((o,a)=>{for(const c of a.Sa)c.onError(r)})})(this,new X(U.ABORTED,"Firestore shutting down"))}}function O_(){return new Xs(t=>gT(t),au)}async function QT(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new FM,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ep(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&wp(n)}async function JT(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $M(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&wp(n)}function jM(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function wp(t){t.Ca.forEach(e=>{e.next()})}var Mh,N_;(N_=Mh||(Mh={})).Ma="default",N_.Cache="cache";class XT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.key=e}}class e0{constructor(e){this.key=e}}class BM{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=yT(e),this.tu=new ki(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new k_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,h)=>{const p=s.get(f),m=lu(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;p&&m?p.data.isEqual(m.data)?y!==b&&(r.track({type:3,doc:m}),C=!0):this.su(p,m)||(r.track({type:2,doc:m}),C=!0,(c&&this.eu(m,c)>0||u&&this.eu(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),C=!0):p&&!m&&(r.track({type:1,doc:p}),C=!0,(c||u)&&(a=!0)),C&&(m?(o=o.add(m),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,h)=>function(m,y){const b=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:C})}};return b(m)-b(y)}(f.type,h.type)||this.eu(f.doc,h.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Gi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new k_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new e0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new ZT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Gi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const bp="SyncEngine";class HM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qM{constructor(e){this.key=e,this.hu=!1}}class zM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xs(a=>gT(a),au),this.Iu=new Map,this.Eu=new Set,this.du=new et(ue.comparator),this.Au=new Map,this.Ru=new fp,this.Vu={},this.mu=new Map,this.fu=Ki.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function WM(t,e,n=!0){const r=o0(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await t0(r,e,n,!0),s}async function KM(t,e){const n=o0(t);await t0(n,e,!0,!1)}async function t0(t,e,n,r){const s=await dM(t.localStore,Hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await GM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&qT(t.remoteStore,s),a}async function GM(t,e,n,r,s){t.pu=(h,p,m)=>async function(b,C,O,R){let v=C.view.ru(O);v.Cs&&(v=await A_(b.localStore,C.query,!1).then(({documents:S})=>C.view.ru(S,v)));const P=R&&R.targetChanges.get(C.targetId),D=R&&R.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(v,b.isPrimaryClient,P,D);return D_(b,C.targetId,F.au),F.snapshot}(t,h,p,m);const i=await A_(t.localStore,e,!0),o=new BM(e,i.Qs),a=o.ru(i.documents),c=ja.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);D_(t,n,u.au);const f=new HM(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function YM(t,e,n){const r=_e(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!au(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&mp(r.remoteStore,s.targetId),Vh(r,s.targetId)}).catch(ro)):(Vh(r,s.targetId),await Dh(r.localStore,s.targetId,!0))}async function QM(t,e){const n=_e(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mp(n.remoteStore,r.targetId))}async function JM(t,e,n){const r=sV(t);try{const s=await function(o,a){const c=_e(o),u=We.now(),f=a.reduce((m,y)=>m.add(y.key),Te());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=vr(),b=Te();return c.Ns.getEntries(m,f).next(C=>{y=C,y.forEach((O,R)=>{R.isValidDocument()||(b=b.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(C=>{h=C;const O=[];for(const R of a){const v=hL(R,h.get(R.key).overlayedDocument);v!=null&&O.push(new ms(R.key,v,lT(v.value.mapValue),sn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,O,a)}).next(C=>{p=C;const O=C.applyToLocalDocumentSet(h,b);return c.documentOverlayCache.saveOverlays(m,C.batchId,O)})}).then(()=>({batchId:p.batchId,changes:vT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new et(be)),u=u.insert(a,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ha(r,s.changes),await pu(r.remoteStore)}catch(s){const i=Ep(s,"Failed to persist write");n.reject(i)}}async function n0(t,e){const n=_e(t);try{const r=await uM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?De(o.hu,14607):s.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))}),await Ha(n,r,e)}catch(r){await ro(r)}}function x_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((f,h)=>{for(const p of h.Sa)p.va(a)&&(u=!0)}),u&&wp(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XM(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new et(ue.comparator);o=o.insert(i,Mt.newNoDocument(i,ye.min()));const a=Te().add(i),c=new fu(ye.min(),new Map,new et(be),o,a);await n0(r,c),r.du=r.du.remove(i),r.Au.delete(e),Tp(r)}else await Dh(r.localStore,e,!1).then(()=>Vh(r,e,n)).catch(ro)}async function ZM(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await cM(n.localStore,e);s0(n,r,null),r0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ha(n,s)}catch(s){await ro(s)}}async function eV(t,e,n){const r=_e(t);try{const s=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(De(h!==null,37113),f=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);s0(r,e,n),r0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ha(r,s)}catch(s){await ro(s)}}function r0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function s0(t,e,n){const r=_e(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||i0(t,r)})}function i0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(mp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Tp(t))}function D_(t,e,n){for(const r of n)r instanceof ZT?(t.Ru.addReference(r.key,e),tV(t,r)):r instanceof e0?(ne(bp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||i0(t,r.key)):me(19791,{wu:r})}function tV(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ne(bp,"New document in limbo: "+n),t.Eu.add(r),Tp(t))}function Tp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ue(qe.fromString(e)),r=t.fu.next();t.Au.set(r,new qM(n)),t.du=t.du.insert(n,r),qT(t.remoteStore,new Kr(Hn(ip(n.path)),r,"TargetPurposeLimboResolution",su.ce))}}async function Ha(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,c)=>{o.push(r.pu(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=dp.As(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const f=_e(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(u,p=>B.forEach(p.Es,m=>f.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>B.forEach(p.ds,m=>f.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!so(h))throw h;ne(pp,"Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const m=f.Ms.get(p),y=m.snapshotVersion,b=m.withLastLimboFreeSnapshotVersion(y);f.Ms=f.Ms.insert(p,b)}}}(r.localStore,i))}async function nV(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne(bp,"User change. New user:",e.toKey());const r=await $T(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(c=>{c.reject(new X(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ha(n,r.Ls)}}function rV(t,e){const n=_e(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function o0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XM.bind(null,e),e.Pu.H_=$M.bind(null,e.eventManager),e.Pu.yu=jM.bind(null,e.eventManager),e}function sV(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eV.bind(null,e),e}class Pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return lM(this.persistence,new iM,e.initialUser,this.serializer)}Cu(e){return new UT(hp.mi,this.serializer)}Du(e){return new mM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pc.provider={build:()=>new Pc};class iV extends Pc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof Sc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qL(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new UT(r=>Sc.mi(r,n),this.serializer)}}class Fh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>x_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nV.bind(null,this.syncEngine),await VM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UM}()}createDatastore(e){const n=hu(e.databaseInfo.databaseId),r=function(i){return new EM(i)}(e.databaseInfo);return function(i,o,a,c){return new AM(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new SM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>x_(this.syncEngine,n,0),function(){return R_.v()?new R_:new gM}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,f){const h=new zM(s,i,o,a,c,u);return f&&(h.gu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=_e(n);ne(Bs,"RemoteStore shutting down."),r.Ea.add(5),await Ba(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Fh.provider={build:()=>new Fh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="FirestoreClient";class oV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=xt.UNAUTHENTICATED,this.clientId=Zd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne(ls,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne(ls,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bf(t,e){t.asyncQueue.verifyOperationInProgress(),ne(ls,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $T(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function L_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aV(t);ne(ls,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>C_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>C_(e.remoteStore,s)),t._onlineComponents=e}async function aV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne(ls,"Using user provided OfflineComponentProvider");try{await bf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await bf(t,new Pc)}}else ne(ls,"Using default OfflineComponentProvider"),await bf(t,new iV(void 0));return t._offlineComponents}async function l0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne(ls,"Using user provided OnlineComponentProvider"),await L_(t,t._uninitializedComponentsProvider._online)):(ne(ls,"Using default OnlineComponentProvider"),await L_(t,new Fh))),t._onlineComponents}function lV(t){return l0(t).then(e=>e.syncEngine)}async function c0(t){const e=await l0(t),n=e.eventManager;return n.onListen=WM.bind(null,e.syncEngine),n.onUnlisten=YM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QM.bind(null,e.syncEngine),n}function cV(t,e,n={}){const r=new hr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new a0({next:p=>{f.Nu(),o.enqueueAndForget(()=>JT(i,h));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new X(U.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?u.reject(new X(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new XT(ip(a.path),f,{includeMetadataChanges:!0,qa:!0});return QT(i,h)}(await c0(t),t.asyncQueue,e,n,r)),r.promise}function uV(t,e,n={}){const r=new hr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new a0({next:p=>{f.Nu(),o.enqueueAndForget(()=>JT(i,h)),p.fromCache&&c.source==="server"?u.reject(new X(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new XT(a,f,{includeMetadataChanges:!0,qa:!0});return QT(i,h)}(await c0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="firestore.googleapis.com",V_=!0;class F_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=f0,this.ssl=V_}else this.host=e.host,this.ssl=e.ssl??V_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=FT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BL)throw new X(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ID("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new F_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new F_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mD;switch(r.type){case"firstParty":return new vD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=M_.get(n);r&&(ne("ComponentProvider","Removing Datastore"),M_.delete(n),r.terminate())}(this),Promise.resolve()}}function fV(t,e,n,r={}){t=Yn(t,mu);const s=hs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Vd(`https://${a}`),Fd("Firestore",!0)),i.host!==f0&&i.host!==a&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:s,emulatorOptions:r};if(!Fs(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=xt.MOCK_USER;else{u=sb(r.mockUserToken,t._app?.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new xt(h)}t._authCredentials=new gD(new Qb(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ei(this.firestore,e,this._query)}}class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ua(n,it._jsonSchema))return new it(e,r||null,new ue(qe.fromString(n.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:ut("string",it._jsonSchemaVersion),referencePath:ut("string")};class ts extends ei{constructor(e,n,r){super(e,n,ip(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new ue(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function I9(t,e,...n){if(t=Je(t),Jb("collection","path",e),t instanceof mu){const r=qe.fromString(e,...n);return Jy(r),new ts(t,null,r)}{if(!(t instanceof it||t instanceof ts))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Jy(r),new ts(t.firestore,null,r)}}function Tf(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Zd.newId()),Jb("doc","path",e),t instanceof mu){const r=qe.fromString(e,...n);return Qy(r),new it(t,null,new ue(r))}{if(!(t instanceof it||t instanceof ts))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Qy(r),new it(t.firestore,t instanceof ts?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="AsyncQueue";class $_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new BT(this,"async_queue_retry"),this._c=()=>{const r=wf();r&&ne(U_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=wf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=wf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new hr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!so(e))throw e;ne(U_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,_r("INTERNAL UNHANDLED ERROR: ",j_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=vp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&me(47125,{Pc:j_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function j_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ao extends mu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new $_,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $_(e),this._firestoreClient=void 0,await e}}}function hV(t,e){const n=typeof t=="object"?t:jd(),r=typeof t=="string"?t:wc,s=Xc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tb("firestore");i&&fV(s,...i)}return s}function gu(t){if(t._terminated)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dV(t),t._firestoreClient}function dV(t){const e=t._freezeSettings(),n=function(s,i,o,a){return new MD(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,u0(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new oV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(St.fromBase64String(e))}catch(n){throw new X(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hn(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ua(e,hn._jsonSchema))return hn.fromBase64String(e.bytes)}}hn._jsonSchemaVersion="firestore/bytes/1.0",hn._jsonSchema={type:ut("string",hn._jsonSchemaVersion),bytes:ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(Ua(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:ut("string",zn._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ua(e,Wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wn(e.vectorValues);throw new X(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wn._jsonSchemaVersion="firestore/vectorValue/1.0",Wn._jsonSchema={type:ut("string",Wn._jsonSchemaVersion),vectorValues:ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=/^__.*__$/;class mV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new $a(e,this.data,n,this.fieldTransforms)}}class h0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ms(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function d0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:t})}}class Ap{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Cc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(d0(this.Ac)&&pV.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class gV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hu(e)}Cc(e,n,r,s=!1){return new Ap({Ac:e,methodName:n,Dc:r,path:Tt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _u(t){const e=t._freezeSettings(),n=hu(t._databaseId);return new gV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p0(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Sp("Data must be an object, but it was:",o,r);const a=y0(r,o);let c,u;if(i.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const h of i.mergeFields){const p=Uh(e,h,n);if(!o.contains(p))throw new X(U.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);v0(f,p)||f.push(p)}c=new nn(f),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new mV(new Qt(a),c,u)}class vu extends yu{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vu}}class Ip extends yu{_toFieldTransform(e){return new lL(e.path,new Ta)}isEqual(e){return e instanceof Ip}}function m0(t,e,n,r){const s=t.Cc(1,e,n);Sp("Data must be an object, but it was:",s,r);const i=[],o=Qt.empty();ps(r,(c,u)=>{const f=Rp(e,c,n);u=Je(u);const h=s.yc(f);if(u instanceof vu)i.push(f);else{const p=za(u,h);p!=null&&(i.push(f),o.set(f,p))}});const a=new nn(i);return new h0(o,a,s.fieldTransforms)}function g0(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[Uh(e,r,n)],c=[s];if(i.length%2!=0)throw new X(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Uh(e,i[p])),c.push(i[p+1]);const u=[],f=Qt.empty();for(let p=a.length-1;p>=0;--p)if(!v0(u,a[p])){const m=a[p];let y=c[p];y=Je(y);const b=o.yc(m);if(y instanceof vu)u.push(m);else{const C=za(y,b);C!=null&&(u.push(m),f.set(m,C))}}const h=new nn(u);return new h0(f,h,o.fieldTransforms)}function yV(t,e,n,r=!1){return za(n,t.Cc(r?4:3,e))}function za(t,e){if(_0(t=Je(t)))return Sp("Unsupported field value:",e,t),y0(t,e);if(t instanceof yu)return function(r,s){if(!d0(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=za(a,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iL(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Ic(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ic(s.serializer,i)}}if(r instanceof zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:OT(s.serializer,r._byteString)};if(r instanceof it){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:up(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wn)return function(o,a){return{mapValue:{fields:{[oT]:{stringValue:aT},[bc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return op(a.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ru(r)}`)}(t,e)}function y0(t,e){const n={};return eT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=za(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof zn||t instanceof hn||t instanceof it||t instanceof yu||t instanceof Wn)}function Sp(t,e,n){if(!_0(n)||!Xb(n)){const r=ru(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Uh(t,e,n){if((e=Je(e))instanceof qa)return e._internalPath;if(typeof e=="string")return Rp(t,e);throw Cc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _V=new RegExp("[~\\*/\\[\\]]");function Rp(t,e,n){if(e.search(_V)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qa(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(U.INVALID_ARGUMENT,a+t+c)}function v0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vV extends E0{data(){return super.data()}}function Pp(t,e){return typeof e=="string"?Rp(t,e):e instanceof qa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cp{}class w0 extends Cp{}function S9(t,e,...n){let r=[];e instanceof Cp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Op).length,a=i.filter(c=>c instanceof kp).length;if(o>1||o>0&&a>0)throw new X(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class kp extends w0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new kp(e,n,r)}_apply(e){const n=this._parse(e);return b0(e._query,n),new ei(e.firestore,e.converter,Ph(e._query,n))}_parse(e){const n=_u(e.firestore);return function(i,o,a,c,u,f,h){let p;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){H_(h,f);const y=[];for(const b of h)y.push(B_(c,i,b));p={arrayValue:{values:y}}}else p=B_(c,i,h)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||H_(h,f),p=yV(a,o,h,f==="in"||f==="not-in");return ct.create(u,f,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Op extends Cp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)b0(o,c),o=Ph(o,c)}(e._query,n),new ei(e.firestore,e.converter,Ph(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Np extends w0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Np(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ba(i,o)}(e._query,this._field,this._direction);return new ei(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new io(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function R9(t,e="asc"){const n=e,r=Pp("orderBy",t);return Np._create(r,n)}function B_(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new X(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mT(e)&&n.indexOf("/")!==-1)throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!ue.isDocumentKey(r))throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i_(t,new ue(r))}if(n instanceof it)return i_(t,n._key);throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ru(n)}.`)}function H_(t,e){if(!Array.isArray(t)||t.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function b0(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wV{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[bc].arrayValue?.values?.map(r=>st(r.doubleValue));return new Wn(n)}convertGeoPoint(e){return new zn(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ou(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(va(e));default:return null}}convertTimestamp(e){const n=ss(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);De(VT(r),9688,{name:e});const s=new Ea(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||_r(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ds extends E0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Kl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ds._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ds._jsonSchema={type:ut("string",Ds._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Kl extends Ds{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Mo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Kl(this._firestore,this._userDataWriter,r.key,r,new Mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Kl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Mo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Kl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Mo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:bV(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){t=Yn(t,it);const e=Yn(t.firestore,ao);return cV(gu(e),t._key).then(n=>TV(e,t,n))}Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:ut("string",Oi._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class A0 extends wV{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function P9(t){t=Yn(t,ei);const e=Yn(t.firestore,ao),n=gu(e),r=new A0(e);return EV(t._query),uV(n,t._query).then(s=>new Oi(e,r,t,s))}function z_(t,e,n){t=Yn(t,it);const r=Yn(t.firestore,ao),s=T0(t.converter,e,n);return xp(r,[p0(_u(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,sn.none())])}function W_(t,e,n,...r){t=Yn(t,it);const s=Yn(t.firestore,ao),i=_u(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof qa?g0(i,"updateDoc",t._key,e,n,r):m0(i,"updateDoc",t._key,e),xp(s,[o.toMutation(t._key,sn.exists(!0))])}function xp(t,e){return function(r,s){const i=new hr;return r.asyncQueue.enqueueAndForget(async()=>JM(await lV(r),s,i)),i.promise}(gu(t),e)}function TV(t,e,n){const r=n.docs.get(e._key),s=new A0(t);return new Ds(t,s,e._key,r,new Mo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=_u(e)}set(e,n,r){this._verifyNotCommitted();const s=Af(e,this._firestore),i=T0(s.converter,n,r),o=p0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,sn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Af(e,this._firestore);let o;return o=typeof(n=Je(n))=="string"||n instanceof qa?g0(this._dataReader,"WriteBatch.update",i._key,n,r,s):m0(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,sn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Af(e,this._firestore);return this._mutations=this._mutations.concat(new ap(n._key,sn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new X(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Af(t,e){if((t=Je(t)).firestore!==e)throw new X(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Ro(){return new Ip("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C9(t){return gu(t=Yn(t,ao)),new AV(t,e=>xp(t,e))}(function(e,n=!0){(function(s){no=s})(Ys),Us(new ns("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ao(new yD(r.getProvider("auth-internal")),new ED(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ea(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),jn(Wy,Ky,e),jn(Wy,Ky,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="firebasestorage.googleapis.com",S0="storageBucket",IV=120*1e3,SV=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Jn{constructor(e,n,r=0){super(If(e),`Firebase Storage: ${n} (${If(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return If(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function If(t){return"storage/"+t}function Dp(){const t="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,t)}function RV(t){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function PV(t){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,t)}function kV(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OV(t){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NV(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xV(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function DV(t){return new rt(nt.INVALID_URL,"Invalid URL '"+t+"'.")}function LV(t){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function MV(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+S0+"' property when initializing the app?")}function VV(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function FV(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function UV(t){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $h(t){return new rt(nt.INVALID_ARGUMENT,t)}function R0(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function $V(t){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zo(t,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Po(t){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw LV(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${f}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},b=n===I0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",O=new RegExp(`^https?://${b}/${s}/${C}`,"i"),v=[{regex:a,indices:c,postModify:i},{regex:m,indices:y,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<v.length;P++){const D=v[P],F=D.regex.exec(e);if(F){const S=F[D.indices.bucket];let E=F[D.indices.path];E||(E=""),r=new rn(S,E),D.postModify(r);break}}if(r==null)throw DV(e);return r}}class jV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function f(...C){u||(u=!0,e.apply(null,C))}function h(C){s=setTimeout(()=>{s=null,t(m,c())},C)}function p(){i&&clearTimeout(i)}function m(C,...O){if(u){p();return}if(C){p(),f.call(null,C,...O);return}if(c()||o){p(),f.call(null,C,...O);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let y=!1;function b(C){y||(y=!0,p(),!u&&(s!==null?(C||(a=2),clearTimeout(s),h(0)):C||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function HV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(t){return t!==void 0}function zV(t){return typeof t=="object"&&!Array.isArray(t)}function Lp(t){return typeof t=="string"||t instanceof String}function K_(t){return Mp()&&t instanceof Blob}function Mp(){return typeof Blob<"u"}function G_(t,e,n,r){if(r<e)throw $h(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $h(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function P0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ls||(Ls={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e,n,r,s,i,o,a,c,u,f,h,p=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=h,this.retry=p,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,b)=>{this.resolve_=y,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new kl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ls.NO_ERROR,c=i.getStatus();if(!a||WV(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ls.ABORT;r(!1,new kl(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new kl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());qV(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Dp();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?R0():xV();o(c)}else{const c=NV();o(c)}};this.canceled_?n(!1,new kl(!1,null,!0)):this.backoffId_=BV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class kl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function GV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XV(t,e,n,r,s,i,o=!0,a=!1){const c=P0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return QV(f,e),GV(f,n),YV(f,i),JV(f,r),new KV(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function e4(...t){const e=ZV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mp())return new Blob(t);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function t4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(t){if(typeof atob>"u")throw UV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sf{constructor(e,n){this.data=e,this.contentType=n||null}}function r4(t,e){switch(t){case Mn.RAW:return new Sf(C0(e));case Mn.BASE64:case Mn.BASE64URL:return new Sf(k0(t,e));case Mn.DATA_URL:return new Sf(i4(e),o4(e))}throw Dp()}function C0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function s4(t){let e;try{e=decodeURIComponent(t)}catch{throw Zo(Mn.DATA_URL,"Malformed data URL.")}return C0(e)}function k0(t,e){switch(t){case Mn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Zo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Zo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=n4(e)}catch(s){throw s.message.includes("polyfill")?s:Zo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class O0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zo(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=a4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function i4(t){const e=new O0(t);return e.base64?k0(Mn.BASE64,e.rest):s4(e.rest)}function o4(t){return new O0(t).contentType}function a4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){let r=0,s="";K_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(K_(this.data_)){const r=this.data_,s=t4(r,e,n);return s===null?null:new zr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new zr(r,!0)}}static getBlob(...e){if(Mp()){const n=e.map(r=>r instanceof zr?r.data_:r);return new zr(e4.apply(null,n))}else{const n=e.map(o=>Lp(o)?r4(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new zr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){let e;try{e=JSON.parse(t)}catch{return null}return zV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function c4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function x0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u4(t,e){return e}class Bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||u4}}let Ol=null;function f4(t){return!Lp(t)||t.length<2?t:x0(t)}function D0(){if(Ol)return Ol;const t=[];t.push(new Bt("bucket")),t.push(new Bt("generation")),t.push(new Bt("metageneration")),t.push(new Bt("name","fullPath",!0));function e(i,o){return f4(o)}const n=new Bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Bt("size");return s.xform=r,t.push(s),t.push(new Bt("timeCreated")),t.push(new Bt("updated")),t.push(new Bt("md5Hash",null,!0)),t.push(new Bt("cacheControl",null,!0)),t.push(new Bt("contentDisposition",null,!0)),t.push(new Bt("contentEncoding",null,!0)),t.push(new Bt("contentLanguage",null,!0)),t.push(new Bt("contentType",null,!0)),t.push(new Bt("metadata","customMetadata",!0)),Ol=t,Ol}function h4(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new rn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function d4(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return h4(r,t),r}function L0(t,e,n){const r=N0(e);return r===null?null:d4(t,r,n)}function p4(t,e,n,r){const s=N0(e);if(s===null||!Lp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,h=t.fullPath,p="/b/"+o(f)+"/o/"+o(h),m=Vp(p,n,r),y=P0({alt:"media",token:u});return m+y})[0]}function m4(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class M0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){if(!t)throw Dp()}function g4(t,e){function n(r,s){const i=L0(t,s,e);return V0(i!==null),i}return n}function y4(t,e){function n(r,s){const i=L0(t,s,e);return V0(i!==null),p4(i,s,t.host,t._protocol)}return n}function F0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=kV():s=CV():n.getStatus()===402?s=PV(t.bucket):n.getStatus()===403?s=OV(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function _4(t){const e=F0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=RV(t.path)),i.serverResponse=s.serverResponse,i}return n}function v4(t,e,n){const r=e.fullServerUrl(),s=Vp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new M0(s,i,y4(t,n),o);return a.errorHandler=_4(e),a}function E4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function w4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=E4(null,e)),r}function b4(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let P=0;P<2;P++)v=v+Math.random().toString().slice(2);return v}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=w4(e,r,s),f=m4(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=zr.getBlob(h,r,p);if(m===null)throw VV();const y={name:u.fullPath},b=Vp(i,t.host,t._protocol),C="POST",O=t.maxUploadRetryTime,R=new M0(b,C,g4(t,n),O);return R.urlParams=y,R.headers=o,R.body=m.uploadData(),R.errorHandler=F0(e),R}class T4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Po("cannot .send() more than once");if(hs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Po("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Po("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Po("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Po("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class A4 extends T4{initXhr(){this.xhr_.responseType="text"}}function U0(){return new A4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hs(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x0(this._location.path)}get storage(){return this._service}get parent(){const e=l4(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new Hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $V(e)}}function I4(t,e,n){t._throwIfRoot("uploadBytes");const r=b4(t.storage,t._location,D0(),new zr(e,!0),n);return t.storage.makeRequestWithTokens(r,U0).then(s=>({metadata:s,ref:t}))}function S4(t){t._throwIfRoot("getDownloadURL");const e=v4(t.storage,t._location,D0());return t.storage.makeRequestWithTokens(e,U0).then(n=>{if(n===null)throw FV();return n})}function R4(t,e){const n=c4(t._location.path,e),r=new rn(t._location.bucket,n);return new Hs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t){return/^[A-Za-z]+:\/\//.test(t)}function C4(t,e){return new Hs(t,e)}function $0(t,e){if(t instanceof Fp){const n=t;if(n._bucket==null)throw MV();const r=new Hs(n,n._bucket);return e!=null?$0(r,e):r}else return e!==void 0?R4(t,e):t}function k4(t,e){if(e&&P4(e)){if(t instanceof Fp)return C4(t,e);throw $h("To use ref(service, url), the first argument must be a Storage instance.")}else return $0(t,e)}function Y_(t,e){const n=e?.[S0];return n==null?null:rn.makeFromBucketSpec(n,t)}function O4(t,e,n,r={}){t.host=`${e}:${n}`;const s=hs(e);s&&(Vd(`https://${t.host}/b`),Fd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:sb(i,t.app.options.projectId))}class Fp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=I0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IV,this._maxUploadRetryTime=SV,this._requests=new Set,s!=null?this._bucket=rn.makeFromBucketSpec(s,this._host):this._bucket=Y_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=Y_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new jV(R0());{const o=XV(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Q_="@firebase/storage",J_="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="storage";function k9(t,e,n){return t=Je(t),I4(t,e,n)}function O9(t){return t=Je(t),S4(t)}function N9(t,e){return t=Je(t),k4(t,e)}function N4(t=jd(),e){t=Je(t);const r=Xc(t,j0).getImmediate({identifier:e}),s=tb("storage");return s&&x4(r,...s),r}function x4(t,e,n,r={}){O4(t,e,n,r)}function D4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fp(n,r,s,e,Ys)}function L4(){Us(new ns(j0,D4,"PUBLIC").setMultipleInstances(!0)),jn(Q_,J_,""),jn(Q_,J_,"esm2020")}L4();const M4=on(t=>{const e=Gs(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=ab(n),s=K2(r),i=hV(r),o=N4(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function jh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function V4(t){if(Array.isArray(t))return t}function F4(t){if(Array.isArray(t))return jh(t)}function U4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $4(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,B0(r.key),r)}}function j4(t,e,n){return e&&$4(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Gl(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Up(t))||e){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){a=!0,i=c},f:function(){try{o||n.return==null||n.return()}finally{if(a)throw i}}}}function Ie(t,e,n){return(e=B0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function H4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,o,a=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(f){u=!0,s=f}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return a}}function q4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X_(Object(n),!0).forEach(function(r){Ie(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Eu(t,e){return V4(t)||H4(t,e)||Up(t,e)||q4()}function kn(t){return F4(t)||B4(t)||Up(t)||z4()}function W4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B0(t){var e=W4(t,"string");return typeof e=="symbol"?e:e+""}function kc(t){"@babel/helpers - typeof";return kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kc(t)}function Up(t,e){if(t){if(typeof t=="string")return jh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?jh(t,e):void 0}}var Z_=function(){},$p={},H0={},q0=null,z0={mark:Z_,measure:Z_};try{typeof window<"u"&&($p=window),typeof document<"u"&&(H0=document),typeof MutationObserver<"u"&&(q0=MutationObserver),typeof performance<"u"&&(z0=performance)}catch{}var K4=$p.navigator||{},ev=K4.userAgent,tv=ev===void 0?"":ev,cs=$p,Ge=H0,nv=q0,Nl=z0;cs.document;var Ir=!!Ge.documentElement&&!!Ge.head&&typeof Ge.addEventListener=="function"&&typeof Ge.createElement=="function",W0=~tv.indexOf("MSIE")||~tv.indexOf("Trident/"),Rf,G4=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Y4=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,K0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Q4={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},G0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ut="classic",Wa="duotone",Y0="sharp",Q0="sharp-duotone",J0="chisel",X0="etch",Z0="jelly",eA="jelly-duo",tA="jelly-fill",nA="notdog",rA="notdog-duo",sA="slab",iA="slab-press",oA="thumbprint",aA="whiteboard",J4="Classic",X4="Duotone",Z4="Sharp",e6="Sharp Duotone",t6="Chisel",n6="Etch",r6="Jelly",s6="Jelly Duo",i6="Jelly Fill",o6="Notdog",a6="Notdog Duo",l6="Slab",c6="Slab Press",u6="Thumbprint",f6="Whiteboard",lA=[Ut,Wa,Y0,Q0,J0,X0,Z0,eA,tA,nA,rA,sA,iA,oA,aA];Rf={},Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Rf,Ut,J4),Wa,X4),Y0,Z4),Q0,e6),J0,t6),X0,n6),Z0,r6),eA,s6),tA,i6),nA,o6),Ie(Ie(Ie(Ie(Ie(Rf,rA,a6),sA,l6),iA,c6),oA,u6),aA,f6);var h6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},d6={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},p6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),m6={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},cA=["fak","fa-kit","fakd","fa-kit-duotone"],rv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},g6=["kit"],y6="kit",_6="kit-duotone",v6="Kit",E6="Kit Duotone";Ie(Ie({},y6,v6),_6,E6);var w6={kit:{"fa-kit":"fak"}},b6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},T6={kit:{fak:"fa-kit"}},sv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pf,xl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],I6="classic",S6="duotone",R6="sharp",P6="sharp-duotone",C6="chisel",k6="etch",O6="jelly",N6="jelly-duo",x6="jelly-fill",D6="notdog",L6="notdog-duo",M6="slab",V6="slab-press",F6="thumbprint",U6="whiteboard",$6="Classic",j6="Duotone",B6="Sharp",H6="Sharp Duotone",q6="Chisel",z6="Etch",W6="Jelly",K6="Jelly Duo",G6="Jelly Fill",Y6="Notdog",Q6="Notdog Duo",J6="Slab",X6="Slab Press",Z6="Thumbprint",eF="Whiteboard";Pf={},Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Ie(Pf,I6,$6),S6,j6),R6,B6),P6,H6),C6,q6),k6,z6),O6,W6),N6,K6),x6,G6),D6,Y6),Ie(Ie(Ie(Ie(Ie(Pf,L6,Q6),M6,J6),V6,X6),F6,Z6),U6,eF);var tF="kit",nF="kit-duotone",rF="Kit",sF="Kit Duotone";Ie(Ie({},tF,rF),nF,sF);var iF={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},oF={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Bh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},aF=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],uA=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(A6,aF),lF=["solid","regular","light","thin","duotone","brands","semibold"],fA=[1,2,3,4,5,6,7,8,9,10],cF=fA.concat([11,12,13,14,15,16,17,18,19,20]),uF=["aw","fw","pull-left","pull-right"],fF=[].concat(kn(Object.keys(oF)),lF,uF,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",xl.GROUP,xl.SWAP_OPACITY,xl.PRIMARY,xl.SECONDARY]).concat(fA.map(function(t){return"".concat(t,"x")})).concat(cF.map(function(t){return"w-".concat(t)})),hF={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Er="___FONT_AWESOME___",Hh=16,hA="fa",dA="svg-inline--fa",qs="data-fa-i2svg",qh="data-fa-pseudo-element",dF="data-fa-pseudo-element-pending",jp="data-prefix",Bp="data-icon",iv="fontawesome-i2svg",pF="async",mF=["HTML","HEAD","STYLE","SCRIPT"],pA=["::before","::after",":before",":after"],mA=function(){try{return!0}catch{return!1}}();function Ka(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ut]}})}var gA=W({},K0);gA[Ut]=W(W(W(W({},{"fa-duotone":"duotone"}),K0[Ut]),rv.kit),rv["kit-duotone"]);var gF=Ka(gA),zh=W({},m6);zh[Ut]=W(W(W(W({},{duotone:"fad"}),zh[Ut]),sv.kit),sv["kit-duotone"]);var ov=Ka(zh),Wh=W({},Bh);Wh[Ut]=W(W({},Wh[Ut]),T6.kit);var yA=Ka(Wh),Kh=W({},iF);Kh[Ut]=W(W({},Kh[Ut]),w6.kit);Ka(Kh);var yF=G4,_A="fa-layers-text",_F=Y4,vF=W({},h6);Ka(vF);var EF=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Cf=Q4,wF=[].concat(kn(g6),kn(fF)),ea=cs.FontAwesomeConfig||{};function bF(t){var e=Ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function TF(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ge&&typeof Ge.querySelector=="function"){var AF=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];AF.forEach(function(t){var e=Eu(t,2),n=e[0],r=e[1],s=TF(bF(n));s!=null&&(ea[r]=s)})}var vA={styleDefault:"solid",familyDefault:Ut,cssPrefix:hA,replacementClass:dA,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ea.familyPrefix&&(ea.cssPrefix=ea.familyPrefix);var Yi=W(W({},vA),ea);Yi.autoReplaceSvg||(Yi.observeMutations=!1);var fe={};Object.keys(vA).forEach(function(t){Object.defineProperty(fe,t,{enumerable:!0,set:function(n){Yi[t]=n,ta.forEach(function(r){return r(fe)})},get:function(){return Yi[t]}})});Object.defineProperty(fe,"familyPrefix",{enumerable:!0,set:function(e){Yi.cssPrefix=e,ta.forEach(function(n){return n(fe)})},get:function(){return Yi.cssPrefix}});cs.FontAwesomeConfig=fe;var ta=[];function IF(t){return ta.push(t),function(){ta.splice(ta.indexOf(t),1)}}var ci=Hh,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function SF(t){if(!(!t||!Ir)){var e=Ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ge.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ge.head.insertBefore(e,r),t}}var RF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function av(){for(var t=12,e="";t-- >0;)e+=RF[Math.random()*62|0];return e}function lo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Hp(t){return t.classList?lo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function EA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function PF(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(EA(t[n]),'" ')},"").trim()}function wu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function qp(t){return t.size!==Vn.size||t.x!==Vn.x||t.y!==Vn.y||t.rotate!==Vn.rotate||t.flipX||t.flipY}function CF(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function kF(t){var e=t.transform,n=t.width,r=n===void 0?Hh:n,s=t.height,i=s===void 0?Hh:s,o="";return W0?o+="translate(".concat(e.x/ci-r/2,"em, ").concat(e.y/ci-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/ci,"em), calc(-50% + ").concat(e.y/ci,"em)) "),o+="scale(".concat(e.size/ci*(e.flipX?-1:1),", ").concat(e.size/ci*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var OF=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function wA(){var t=hA,e=dA,n=fe.cssPrefix,r=fe.replacementClass,s=OF;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var lv=!1;function kf(){fe.autoAddCss&&!lv&&(SF(wA()),lv=!0)}var NF={mixout:function(){return{dom:{css:wA,insertCss:kf}}},hooks:function(){return{beforeDOMElementCreation:function(){kf()},beforeI2svg:function(){kf()}}}},wr=cs||{};wr[Er]||(wr[Er]={});wr[Er].styles||(wr[Er].styles={});wr[Er].hooks||(wr[Er].hooks={});wr[Er].shims||(wr[Er].shims=[]);var Tn=wr[Er],bA=[],TA=function(){Ge.removeEventListener("DOMContentLoaded",TA),Oc=1,bA.map(function(e){return e()})},Oc=!1;Ir&&(Oc=(Ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ge.readyState),Oc||Ge.addEventListener("DOMContentLoaded",TA));function xF(t){Ir&&(Oc?setTimeout(t,0):bA.push(t))}function Ga(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?EA(t):"<".concat(e," ").concat(PF(r),">").concat(i.map(Ga).join(""),"</").concat(e,">")}function cv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Of=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=a(f,e[u],u,e);return f};function AA(t){return kn(t).length!==1?null:t.codePointAt(0).toString(16)}function uv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function IA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=uv(e);typeof Tn.hooks.addPack=="function"&&!s?Tn.hooks.addPack(t,uv(e)):Tn.styles[t]=W(W({},Tn.styles[t]||{}),i),t==="fas"&&IA("fa",e)}var Sa=Tn.styles,DF=Tn.shims,SA=Object.keys(yA),LF=SA.reduce(function(t,e){return t[e]=Object.keys(yA[e]),t},{}),zp=null,RA={},PA={},CA={},kA={},OA={};function MF(t){return~wF.indexOf(t)}function VF(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!MF(s)?s:null}var NA=function(){var e=function(i){return Of(Sa,function(o,a,c){return o[c]=Of(a,i,{}),o},{})};RA=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),PA=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),OA=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in Sa||fe.autoFetchSvg,r=Of(DF,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});CA=r.names,kA=r.unicodes,zp=bu(fe.styleDefault,{family:fe.familyDefault})};IF(function(t){zp=bu(t.styleDefault,{family:fe.familyDefault})});NA();function Wp(t,e){return(RA[t]||{})[e]}function FF(t,e){return(PA[t]||{})[e]}function Cs(t,e){return(OA[t]||{})[e]}function xA(t){return CA[t]||{prefix:null,iconName:null}}function UF(t){var e=kA[t],n=Wp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function us(){return zp}var DA=function(){return{prefix:null,iconName:null,rest:[]}};function $F(t){var e=Ut,n=SA.reduce(function(r,s){return r[s]="".concat(fe.cssPrefix,"-").concat(s),r},{});return lA.forEach(function(r){(t.includes(n[r])||t.some(function(s){return LF[r].includes(s)}))&&(e=r)}),e}function bu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ut:n,s=gF[r][t];if(r===Wa&&!t)return"fad";var i=ov[r][t]||ov[r][s],o=t in Tn.styles?t:null,a=i||o||null;return a}function jF(t){var e=[],n=null;return t.forEach(function(r){var s=VF(fe.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function fv(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var hv=uA.concat(cA);function Tu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=null,i=fv(t.filter(function(m){return hv.includes(m)})),o=fv(t.filter(function(m){return!hv.includes(m)})),a=i.filter(function(m){return s=m,!G0.includes(m)}),c=Eu(a,1),u=c[0],f=u===void 0?null:u,h=$F(i),p=W(W({},jF(o)),{},{prefix:bu(f,{family:h})});return W(W(W({},p),zF({values:t,family:h,styles:Sa,config:fe,canonical:p,givenPrefix:s})),BF(r,s,p))}function BF(t,e,n){var r=n.prefix,s=n.iconName;if(t||!r||!s)return{prefix:r,iconName:s};var i=e==="fa"?xA(s):{},o=Cs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Sa.far&&Sa.fas&&!fe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var HF=lA.filter(function(t){return t!==Ut||t!==Wa}),qF=Object.keys(Bh).filter(function(t){return t!==Ut}).map(function(t){return Object.keys(Bh[t])}).flat();function zF(t){var e=t.values,n=t.family,r=t.canonical,s=t.givenPrefix,i=s===void 0?"":s,o=t.styles,a=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,f=n===Wa,h=e.includes("fa-duotone")||e.includes("fad"),p=u.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(h||p||m)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&HF.includes(n)){var y=Object.keys(a).find(function(C){return qF.includes(C)});if(y||u.autoFetchSvg){var b=p6.get(n).defaultShortPrefixId;r.prefix=b,r.iconName=Cs(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=us()||"fas"),r}var WF=function(){function t(){U4(this,t),this.definitions={}}return j4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=W(W({},n.definitions[a]||{}),o[a]),IA(a,o[a]),NA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}])}(),dv=[],_i={},Ni={},KF=Object.keys(Ni);function GF(t,e){var n=e.mixoutsTo;return dv=t,_i={},Object.keys(Ni).forEach(function(r){KF.indexOf(r)===-1&&delete Ni[r]}),dv.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),kc(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_i[o]||(_i[o]=[]),_i[o].push(i[o])})}r.provides&&r.provides(Ni)}),n}function Gh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=_i[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function zs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=_i[t]||[];s.forEach(function(i){i.apply(null,n)})}function fs(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ni[t]?Ni[t].apply(null,e):void 0}function Yh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||us();if(e)return e=Cs(n,e)||e,cv(LA.definitions,n,e)||cv(Tn.styles,n,e)}var LA=new WF,YF=function(){fe.autoReplaceSvg=!1,fe.observeMutations=!1,zs("noAuto")},QF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ir?(zs("beforeI2svg",e),fs("pseudoElements2svg",e),fs("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;fe.autoReplaceSvg===!1&&(fe.autoReplaceSvg=!0),fe.observeMutations=!0,xF(function(){XF({autoReplaceSvgRoot:n}),zs("watch",e)})}},JF={icon:function(e){if(e===null)return null;if(kc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Cs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=bu(e[0]);return{prefix:r,iconName:Cs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(fe.cssPrefix,"-"))>-1||e.match(yF))){var s=Tu(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||us(),iconName:Cs(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=us();return{prefix:i,iconName:Cs(i,e)||e}}}},an={noAuto:YF,config:fe,dom:QF,parse:JF,library:LA,findIconDefinition:Yh,toHtml:Ga},XF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ge:n;(Object.keys(Tn.styles).length>0||fe.autoFetchSvg)&&Ir&&fe.autoReplaceSvg&&an.dom.i2svg({node:r})};function Au(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ga(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ir){var r=Ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function ZF(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(qp(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};s.style=wu(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function e3(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(fe.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function t3(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Kp(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.maskId,u=t.extra,f=t.watchable,h=f===void 0?!1:f,p=r.found?r:n,m=p.width,y=p.height,b=[fe.replacementClass,i?"".concat(fe.cssPrefix,"-").concat(i):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),C={children:[],attributes:W(W({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(m," ").concat(y)})};!t3(u.attributes)&&!u.attributes["aria-hidden"]&&(C.attributes["aria-hidden"]="true"),h&&(C.attributes[qs]="");var O=W(W({},C),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:W({},u.styles)}),R=r.found&&n.found?fs("generateAbstractMask",O)||{children:[],attributes:{}}:fs("generateAbstractIcon",O)||{children:[],attributes:{}},v=R.children,P=R.attributes;return O.children=v,O.attributes=P,a?e3(O):ZF(O)}function pv(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.extra,o=t.watchable,a=o===void 0?!1:o,c=W(W({},i.attributes),{},{class:i.classes.join(" ")});a&&(c[qs]="");var u=W({},i.styles);qp(s)&&(u.transform=kF({transform:s,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=wu(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),h}function n3(t){var e=t.content,n=t.extra,r=W(W({},n.attributes),{},{class:n.classes.join(" ")}),s=wu(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var Nf=Tn.styles;function Qh(t){var e=t[0],n=t[1],r=t.slice(4),s=Eu(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(fe.cssPrefix,"-").concat(Cf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(Cf.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(Cf.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var r3={found:!1,width:512,height:512};function s3(t,e){!mA&&!fe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jh(t,e){var n=e;return e==="fa"&&fe.styleDefault!==null&&(e=us()),new Promise(function(r,s){if(n==="fa"){var i=xA(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Nf[e]&&Nf[e][t]){var o=Nf[e][t];return r(Qh(o))}s3(t,e),r(W(W({},r3),{},{icon:fe.showMissingIcons&&t?fs("missingIconAbstract")||{}:{}}))})}var mv=function(){},Xh=fe.measurePerformance&&Nl&&Nl.mark&&Nl.measure?Nl:{mark:mv,measure:mv},Vo='FA "7.0.0"',i3=function(e){return Xh.mark("".concat(Vo," ").concat(e," begins")),function(){return MA(e)}},MA=function(e){Xh.mark("".concat(Vo," ").concat(e," ends")),Xh.measure("".concat(Vo," ").concat(e),"".concat(Vo," ").concat(e," begins"),"".concat(Vo," ").concat(e," ends"))},Gp={begin:i3,end:MA},Yl=function(){};function gv(t){var e=t.getAttribute?t.getAttribute(qs):null;return typeof e=="string"}function o3(t){var e=t.getAttribute?t.getAttribute(jp):null,n=t.getAttribute?t.getAttribute(Bp):null;return e&&n}function a3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(fe.replacementClass)}function l3(){if(fe.autoReplaceSvg===!0)return Ql.replace;var t=Ql[fe.autoReplaceSvg];return t||Ql.replace}function c3(t){return Ge.createElementNS("http://www.w3.org/2000/svg",t)}function u3(t){return Ge.createElement(t)}function VA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?c3:u3:n;if(typeof t=="string")return Ge.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(VA(o,{ceFn:r}))}),s}function f3(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ql={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(VA(s),n)}),n.getAttribute(qs)===null&&fe.keepOriginalSource){var r=Ge.createComment(f3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Hp(n).indexOf(fe.replacementClass))return Ql.replace(e);var s=new RegExp("".concat(fe.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===fe.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Ga(a)}).join(`
`);n.setAttribute(qs,""),n.innerHTML=o}};function yv(t){t()}function FA(t,e){var n=typeof e=="function"?e:Yl;if(t.length===0)n();else{var r=yv;fe.mutateApproach===pF&&(r=cs.requestAnimationFrame||yv),r(function(){var s=l3(),i=Gp.begin("mutate");t.map(s),i(),n()})}}var Yp=!1;function UA(){Yp=!0}function Zh(){Yp=!1}var Nc=null;function _v(t){if(nv&&fe.observeMutations){var e=t.treeCallback,n=e===void 0?Yl:e,r=t.nodeCallback,s=r===void 0?Yl:r,i=t.pseudoElementsCallback,o=i===void 0?Yl:i,a=t.observeMutationsRoot,c=a===void 0?Ge:a;Nc=new nv(function(u){if(!Yp){var f=us();lo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!gv(h.addedNodes[0])&&(fe.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&fe.searchPseudoElements&&o([h.target],!0),h.type==="attributes"&&gv(h.target)&&~EF.indexOf(h.attributeName))if(h.attributeName==="class"&&o3(h.target)){var p=Tu(Hp(h.target)),m=p.prefix,y=p.iconName;h.target.setAttribute(jp,m||f),y&&h.target.setAttribute(Bp,y)}else a3(h.target)&&s(h.target)})}}),Ir&&Nc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function h3(){Nc&&Nc.disconnect()}function d3(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function p3(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=Tu(Hp(t));return s.prefix||(s.prefix=us()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=FF(s.prefix,t.innerText)||Wp(s.prefix,AA(t.innerText))),!s.iconName&&fe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function m3(t){var e=lo(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function g3(){return{iconName:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=p3(t),r=n.iconName,s=n.prefix,i=n.rest,o=m3(t),a=Gh("parseNodeAttributes",{},t),c=e.styleParser?d3(t):[];return W({iconName:r,prefix:s,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var y3=Tn.styles;function $A(t){var e=fe.autoReplaceSvg==="nest"?vv(t,{styleParser:!1}):vv(t);return~e.extra.classes.indexOf(_A)?fs("generateLayersText",t,e):fs("generateSvgReplacementMutation",t,e)}function _3(){return[].concat(kn(cA),kn(uA))}function Ev(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ir)return Promise.resolve();var n=Ge.documentElement.classList,r=function(h){return n.add("".concat(iv,"-").concat(h))},s=function(h){return n.remove("".concat(iv,"-").concat(h))},i=fe.autoFetchSvg?_3():G0.concat(Object.keys(y3));i.includes("fa")||i.push("fa");var o=[".".concat(_A,":not([").concat(qs,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(qs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=lo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=Gp.begin("onTree"),u=a.reduce(function(f,h){try{var p=$A(h);p&&f.push(p)}catch(m){mA||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,h){Promise.all(u).then(function(p){FA(p,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(p){c(),h(p)})})}function v3(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$A(t).then(function(n){n&&FA([n],e)})}function E3(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Yh(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:Yh(s||{})),t(r,W(W({},n),{},{mask:s}))}}var w3=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Vn:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,u=n.maskId,f=u===void 0?null:u,h=n.classes,p=h===void 0?[]:h,m=n.attributes,y=m===void 0?{}:m,b=n.styles,C=b===void 0?{}:b;if(e){var O=e.prefix,R=e.iconName,v=e.icon;return Au(W({type:"icon"},e),function(){return zs("beforeDOMElementCreation",{iconDefinition:e,params:n}),Kp({icons:{main:Qh(v),mask:c?Qh(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:R,transform:W(W({},Vn),s),symbol:o,maskId:f,extra:{attributes:y,styles:C,classes:p}})})}},b3={mixout:function(){return{icon:E3(w3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ev,n.nodeCallback=v3,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?Ge:r,i=n.callback,o=i===void 0?function(){}:i;return Ev(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.prefix,o=r.transform,a=r.symbol,c=r.mask,u=r.maskId,f=r.extra;return new Promise(function(h,p){Promise.all([Jh(s,i),c.iconName?Jh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var y=Eu(m,2),b=y[0],C=y[1];h([n,Kp({icons:{main:b,mask:C},prefix:i,iconName:s,transform:o,symbol:a,maskId:u,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=wu(a);c.length>0&&(s.style=c);var u;return qp(o)&&(u=fs("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:s}}}},T3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Au({type:"layer"},function(){zs("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(fe.cssPrefix,"-layers")].concat(kn(i)).join(" ")},children:o}]})}}}},A3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,i=s===void 0?[]:s,o=r.attributes,a=o===void 0?{}:o,c=r.styles,u=c===void 0?{}:c;return Au({type:"counter",content:n},function(){return zs("beforeDOMElementCreation",{content:n,params:r}),n3({content:n.toString(),extra:{attributes:a,styles:u,classes:["".concat(fe.cssPrefix,"-layers-counter")].concat(kn(i))}})})}}}},I3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Vn:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,f=r.styles,h=f===void 0?{}:f;return Au({type:"text",content:n},function(){return zs("beforeDOMElementCreation",{content:n,params:r}),pv({content:n,transform:W(W({},Vn),i),extra:{attributes:u,styles:h,classes:["".concat(fe.cssPrefix,"-layers-text")].concat(kn(a))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.transform,i=r.extra,o=null,a=null;if(W0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,a=u.height/c}return Promise.resolve([n,pv({content:n.innerHTML,width:o,height:a,transform:s,extra:i,watchable:!0})])}}},jA=new RegExp('"',"ug"),wv=[1105920,1112319],bv=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),d6),hF),b6),ed=Object.keys(bv).reduce(function(t,e){return t[e.toLowerCase()]=bv[e],t},{}),S3=Object.keys(ed).reduce(function(t,e){var n=ed[e];return t[e]=n[900]||kn(Object.entries(n))[0][1],t},{});function R3(t){var e=t.replace(jA,"");return AA(kn(e)[0]||"")}function P3(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(jA,""),s=r.codePointAt(0),i=s>=wv[0]&&s<=wv[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function C3(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(ed[n]||{})[s]||S3[n]}function Tv(t,e){var n="".concat(dF).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=lo(t.children),o=i.filter(function(F){return F.getAttribute(qh)===e})[0],a=cs.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(_F),f=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&h!=="none"&&h!==""){var p=a.getPropertyValue("content"),m=C3(c,f),y=R3(p),b=u[0].startsWith("FontAwesome"),C=P3(a),O=Wp(m,y),R=O;if(b){var v=UF(y);v.iconName&&v.prefix&&(O=v.iconName,m=v.prefix)}if(O&&!C&&(!o||o.getAttribute(jp)!==m||o.getAttribute(Bp)!==R)){t.setAttribute(n,R),o&&t.removeChild(o);var P=g3(),D=P.extra;D.attributes[qh]=e,Jh(O,m).then(function(F){var S=Kp(W(W({},P),{},{icons:{main:F,mask:DA()},prefix:m,iconName:R,extra:D,watchable:!0})),E=Ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=S.map(function(_){return Ga(_)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function k3(t){return Promise.all([Tv(t,"::before"),Tv(t,"::after")])}function O3(t){return t.parentNode!==document.head&&!~mF.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(qh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var N3=function(e){return!!e&&pA.some(function(n){return e.includes(n)})},x3=function(e){if(!e)return[];for(var n=new Set,r=[e],s=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var m=a[o];r=r.flatMap(function(y){return y.split(m).map(function(b){return b.replace(/,\s*$/,"").trim()})})},o=0,a=s;o<a.length;o++)i();r=r.flatMap(function(p){return p.includes("(")?p:p.split(",").map(function(m){return m.trim()})});var c=Gl(r),u;try{for(c.s();!(u=c.n()).done;){var f=u.value;if(N3(f)){var h=pA.reduce(function(p,m){return p.replace(m,"")},f);h!==""&&h!=="*"&&n.add(h)}}}catch(p){c.e(p)}finally{c.f()}return n};function Av(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ir){var n;if(e)n=t;else if(fe.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,s=Gl(document.styleSheets),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;try{var a=Gl(o.cssRules),c;try{for(a.s();!(c=a.n()).done;){var u=c.value,f=x3(u.selectorText),h=Gl(f),p;try{for(h.s();!(p=h.n()).done;){var m=p.value;r.add(m)}}catch(b){h.e(b)}finally{h.f()}}}catch(b){a.e(b)}finally{a.f()}}catch(b){fe.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){s.e(b)}finally{s.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{n=t.querySelectorAll(y)}catch{}}return new Promise(function(b,C){var O=lo(n).filter(O3).map(k3),R=Gp.begin("searchPseudoElements");UA(),Promise.all(O).then(function(){R(),Zh(),b()}).catch(function(){R(),Zh(),C()})})}}var D3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Av,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?Ge:r;fe.searchPseudoElements&&Av(s)}}},Iv=!1,L3={mixout:function(){return{dom:{unwatch:function(){UA(),Iv=!0}}}},hooks:function(){return{bootstrap:function(){_v(Gh("mutationObserverCallbacks",{}))},noAuto:function(){h3()},watch:function(n){var r=n.observeMutationsRoot;Iv?Zh():_v(Gh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Sv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},M3={mixout:function(){return{parse:{transform:function(n){return Sv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=Sv(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:p};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),m.path)}]}]}}}},xf={x:0,y:0,width:"100%",height:"100%"};function Rv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function V3(t){return t.tag==="g"?t.children:[t]}var F3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Tu(s.split(" ").map(function(o){return o.trim()})):DA();return i.prefix||(i.prefix=us()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,u=i.width,f=i.icon,h=o.width,p=o.icon,m=CF({transform:c,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:W(W({},xf),{},{fill:"white"})},b=f.children?{children:f.children.map(Rv)}:{},C={tag:"g",attributes:W({},m.inner),children:[Rv(W({tag:f.tag,attributes:W(W({},f.attributes),m.path)},b))]},O={tag:"g",attributes:W({},m.outer),children:[C]},R="mask-".concat(a||av()),v="clip-".concat(a||av()),P={tag:"mask",attributes:W(W({},xf),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,O]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:V3(p)},P]};return r.push(D,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(R,")")},xf)}),{children:r,attributes:s}}}},U3={provides:function(e){var n=!1;cs.matchMedia&&(n=cs.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:W(W({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:W(W({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:W(W({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},j3=[NF,b3,T3,A3,I3,D3,L3,M3,F3,U3,$3];GF(j3,{mixoutsTo:an});an.noAuto;var B3=an.config,H3=an.library;an.dom;var td=an.parse;an.findIconDefinition;an.toHtml;var q3=an.icon;an.layer;an.text;an.counter;function Ot(t,e,n){return(e=G3(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function ar(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pv(Object(n),!0).forEach(function(r){Ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function z3(t,e){if(t==null)return{};var n,r,s=W3(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function W3(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function K3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function G3(t){var e=K3(t,"string");return typeof e=="symbol"?e:e+""}function xc(t){"@babel/helpers - typeof";return xc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xc(t)}function Df(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}function Y3(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),Ot(Ot(Ot(Ot(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var Q3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},BA={exports:{}};(function(t){(function(e){var n=function(O,R,v){if(!u(R)||h(R)||p(R)||m(R)||c(R))return R;var P,D=0,F=0;if(f(R))for(P=[],F=R.length;D<F;D++)P.push(n(O,R[D],v));else{P={};for(var S in R)Object.prototype.hasOwnProperty.call(R,S)&&(P[O(S,v)]=n(O,R[S],v))}return P},r=function(O,R){R=R||{};var v=R.separator||"_",P=R.split||/(?=[A-Z])/;return O.split(P).join(v)},s=function(O){return y(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(R,v){return v?v.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var R=s(O);return R.substr(0,1).toUpperCase()+R.substr(1)},o=function(O,R){return r(O,R).toLowerCase()},a=Object.prototype.toString,c=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},f=function(O){return a.call(O)=="[object Array]"},h=function(O){return a.call(O)=="[object Date]"},p=function(O){return a.call(O)=="[object RegExp]"},m=function(O){return a.call(O)=="[object Boolean]"},y=function(O){return O=O-0,O===O},b=function(O,R){var v=R&&"process"in R?R.process:R;return typeof v!="function"?O:function(P,D){return v(P,O,D)}},C={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(O,R){return n(b(s,R),O)},decamelizeKeys:function(O,R){return n(b(o,R),O,R)},pascalizeKeys:function(O,R){return n(b(i,R),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:e.humps=C})(Q3)})(BA);var J3=BA.exports,X3=["class","style"];function Z3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=J3.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function eU(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function HA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return HA(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=eU(f);break;case"style":c.style=Z3(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=z3(n,X3);return Ke(t.tag,ar(ar(ar({},e),{},{class:s.class,style:ar(ar({},s.style),o)},s.attrs),a),r)}var qA=!1;try{qA=!0}catch{}function tU(){if(!qA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Cv(t){if(t&&xc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(td.icon)return td.icon(t);if(t===null)return null;if(xc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var nU=yn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return Cv(e.icon)}),i=Fe(function(){return Df("classes",Y3(e))}),o=Fe(function(){return Df("transform",typeof e.transform=="string"?td.transform(e.transform):e.transform)}),a=Fe(function(){return Df("mask",Cv(e.mask))}),c=Fe(function(){var f=ar(ar(ar(ar({},i.value),o.value),a.value),{},{symbol:e.symbol,maskId:e.maskId});return f.title=e.title,f.titleId=e.titleId,q3(s.value,f)});$n(c,function(f){if(!f)return tU("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Fe(function(){return c.value?HA(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const rU={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const sU={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},iU=sU,oU={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},aU={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},lU={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};B3.autoAddCss=!1;H3.add(rU,aU,iU,lU,oU);const cU=on(t=>{t.vueApp.component("font-awesome-icon",nU)});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let zA;const Iu=t=>zA=t,WA=Symbol();function nd(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var na;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(na||(na={}));function uU(){const t=fd(!0),e=t.run(()=>Vt({}));let n=[],r=[];const s=_d({install(i){Iu(s),s._a=i,i.provide(WA,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const KA=()=>{};function kv(t,e,n,r=KA){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Xi()&&ra(s),s}function ui(t,...e){t.slice().forEach(n=>{n(...e)})}const fU=t=>t(),Ov=Symbol(),Lf=Symbol();function rd(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];nd(s)&&nd(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!Un(r)?t[n]=rd(s,r):t[n]=r}return t}const hU=Symbol();function dU(t){return!nd(t)||!t.hasOwnProperty(hU)}const{assign:Dr}=Object;function pU(t){return!!(Ye(t)&&t.effect)}function mU(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const f=n1(n.state.value[t]);return Dr(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=_d(Fe(()=>{Iu(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return c=GA(t,u,e,n,r,!0),c}function GA(t,e,n={},r,s,i){let o;const a=Dr({actions:{}},n),c={deep:!0};let u,f,h=[],p=[],m;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Vt({});let b;function C(E){let _;u=f=!1,typeof E=="function"?(E(r.state.value[t]),_={type:na.patchFunction,storeId:t,events:m}):(rd(r.state.value[t],E),_={type:na.patchObject,payload:E,storeId:t,events:m});const T=b=Symbol();Gn().then(()=>{b===T&&(u=!0)}),f=!0,ui(h,_,r.state.value[t])}const O=i?function(){const{state:_}=n,T=_?_():{};this.$patch(N=>{Dr(N,T)})}:KA;function R(){o.stop(),h=[],p=[],r._s.delete(t)}const v=(E,_="")=>{if(Ov in E)return E[Lf]=_,E;const T=function(){Iu(r);const N=Array.from(arguments),k=[],A=[];function ge(ie){k.push(ie)}function Ee(ie){A.push(ie)}ui(p,{args:N,name:T[Lf],store:D,after:ge,onError:Ee});let ee;try{ee=E.apply(this&&this.$id===t?this:D,N)}catch(ie){throw ui(A,ie),ie}return ee instanceof Promise?ee.then(ie=>(ui(k,ie),ie)).catch(ie=>(ui(A,ie),Promise.reject(ie))):(ui(k,ee),ee)};return T[Ov]=!0,T[Lf]=_,T},P={_p:r,$id:t,$onAction:kv.bind(null,p),$patch:C,$reset:O,$subscribe(E,_={}){const T=kv(h,E,_.detached,()=>N()),N=o.run(()=>$n(()=>r.state.value[t],k=>{(_.flush==="sync"?f:u)&&E({storeId:t,type:na.direct,events:m},k)},Dr({},c,_)));return T},$dispose:R},D=br(P);r._s.set(t,D);const S=(r._a&&r._a.runWithContext||fU)(()=>r._e.run(()=>(o=fd()).run(()=>e({action:v}))));for(const E in S){const _=S[E];if(Ye(_)&&!pU(_)||Un(_))i||(y&&dU(_)&&(Ye(_)?_.value=y[E]:rd(_,y[E])),r.state.value[t][E]=_);else if(typeof _=="function"){const T=v(_,E);S[E]=T,a.actions[E]=_}}return Dr(D,S),Dr(Pe(D),S),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:E=>{C(_=>{Dr(_,E)})}}),r._p.forEach(E=>{Dr(D,o.run(()=>E({store:D,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(D.$state,y),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function gU(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=Na();return a=a||(u?pt(WA,null):null),a&&Iu(a),a=zA,a._s.has(r)||(i?GA(r,e,s,a):mU(r,s,a)),a._s.get(r)}return o.$id=r,o}function yU(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function _U(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}function x9(t){{const e=Pe(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=Fe({get:()=>t[r],set(i){t[r]=i}}):(Ye(s)||Un(s))&&(n[r]=lE(t,r))}return n}}const vU=on(t=>{const e=uU();t.vueApp.use(e)});var Nv=/^(GTM|G)-[0-9A-Z]+$/;function Mf(t){if(typeof t!="string"||!Nv.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Nv}).${n}`)}}function Fo(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function xi(t,e){let n=document,r=n.createElement("script"),s=u=>{e.onReady?.({id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(Fo(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let c=e.parentElement??n.body;if(typeof c?.appendChild!="function")throw new Error("parentElement must be a DOM element");return c.appendChild(r),r}function EU(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var wU=class{id;options;scriptElements=[];constructor(t){if(Array.isArray(t.id))for(let e of t.id)Mf(typeof e=="string"?e:e.id);else Mf(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}isInBrowserContext=()=>typeof window<"u";enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!EU(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=xi(n,{...this.options}):r=xi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=xi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?Fo(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&Fo(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&Fo(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&Fo(window,this.options.dataLayerName).push(t)}},lr;function bU(t,e={id:""}){e={trackOnNextTick:!1,...e},lr=new wU(e),t.config.globalProperties.$gtm=lr,lr.isInBrowserContext()&&(e.vueRouter&&TU(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),lr.options.enabled&&lr.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")xi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),xi(n.id,r)}}):xi(e.id,e))),t.provide("gtm",e)}function TU(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,c)=>{if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(c,4)?lr?.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(c,8)&&lr?.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...o.meta?.gtmAdditionalEventData},h=e.options?.history?.base??"";h.endsWith("/")||(h+="/"),h+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Gn(()=>{lr?.trackView(u,h,f)}):lr?.trackView(u,h,f)})}function AU(t){return{install:e=>bU(e,t)}}const IU=on(t=>{const e=Gs().public,n=sD("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(AU({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:It(),trackOnNextTick:!1}))}),SU=[gC,wC,Bk,qk,zk,Wk,Gk,Yk,Jk,M4,cU,vU,IU],RU=yn({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(t,{slots:e,expose:n}){const{set:r,polite:s,assertive:i,message:o,politeness:a}=cD({politeness:t.politeness});return n({set:r,polite:s,assertive:i,message:o,politeness:a}),()=>Ke("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},Ke("span",{role:"alert","aria-live":a.value,"aria-atomic":t.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},e.default?e.default({message:o.value}):o.value))}}),YA=(t="RouteProvider")=>yn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Qr(Vs,Ln(s)),()=>e.vnode?Ke(e.vnode,{ref:e.vnodeRef}):e.vnode}}),PU=YA(),xv=new WeakMap,CU=yn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Le(),i=Vt(),o=pt(Vs,null);let a;r({pageRef:i});const c=pt(Tw,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);It().beforeEach(p)}t.pageKey&&$n(()=>t.pageKey,(p,m)=>{p!==m&&s.callHook("page:loading:start")});let h=!1;{const p=It().beforeResolve(()=>{h=!1});eo(()=>{p()})}return()=>Ke(zw,{name:t.name,route:t.route,...e},{default:p=>{const m=OU(o,p.route,p.Component),y=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!y)return u;f();return}if(u&&c&&!c.isCurrent(p.route))return u;if(m&&o&&(!c||c?.isCurrent(o)))return y?u:null;const b=fh(p,t.pageKey),C=NU(o,p.route,p.Component);!s.isHydrating&&a===b&&!C&&Gn(()=>{h=!0,s.callHook("page:loading:end")}),a=b;const O=!!(t.transition??p.route.meta.pageTransition??kg),R=O&&kU([t.transition,p.route.meta.pageTransition,kg,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),v=t.keepalive??p.route.meta.keepalive??sP;return u=Kw(O&&R,Pk(v,Ke(Ad,{suspensible:!0,onPending:()=>{O&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{Gn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!h&&!C)return h=!0,s.callHook("page:loading:end")}).finally(f))}},{default:()=>{const P={key:b||void 0,vnode:n.default?xU(n.default,p):p.Component,route:p.route,renderKey:b||void 0,trackRootNodes:O,vnodeRef:i};if(!v)return Ke(PU,P);const D=p.Component.type,F=D;let S=xv.get(F);return S||(S=YA(D.name||D.__name),xv.set(F,S)),Ke(S,P)}}))).default(),u}})}});function kU(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Md(n.onAfterLeave):void 0}));return ww(...e)}function OU(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>s.components?.default===n?.type);return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>s.components?.default!==t.matched[i]?.components?.default)||n&&fh({route:e,Component:n})!==fh({route:t,Component:n})}function NU(t,e,n){return t?e.matched.findIndex(s=>s.components?.default===n?.type)<e.matched.length-1:!1}function xU(t,e){const n=t(e);return n.length===1?Ke(n[0]):Ke(Lt,void 0,n)}const DU=yn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Ke(Wr[t.name],t.layoutProps,e.slots)}}),LU={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},MU=yn({name:"NuxtLayout",inheritAttrs:!1,props:LU,setup(t,e){const n=Le(),r=pt(Vs),i=!r||r===Wc()?Ww():r,o=Fe(()=>{let f=at(t.name)??i?.meta.layout??"default";return f&&!(f in Wr)&&t.fallback&&(f=at(t.fallback)),f}),a=Kn();e.expose({layoutRef:a});const c=n.deferHydration();if(n.isHydrating){const f=n.hooks.hookOnce("app:error",c);It().beforeEach(f)}let u;return()=>{const f=o.value&&o.value in Wr,h=i?.meta.layoutTransition??rP,p=u;return u=o.value,Kw(f&&h,{default:()=>Ke(Ad,{suspensible:!0,onResolve:()=>{Gn(c)}},{default:()=>Ke(VU,{layoutProps:XE(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==p&&m===o.value,hasTransition:!!h},e.slots)})}).default()}}}),VU=yn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Qr(Tw,{isCurrent:i=>n===(i.meta.layout??"default")});const r=pt(Vs);if(r&&r===Wc()){const i=Ww(),o={};for(const a in i){const c=a;Object.defineProperty(o,c,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[c]:r[c]})}Qr(Vs,Ln(o))}return()=>!n||typeof n=="string"&&!(n in Wr)?e.slots.default?.():Ke(DU,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}),Su=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},FU=J2(RU),UU={};function $U(t,e){const n=FU,r=CU,s=MU;return zt(),or(s,null,{default:Zt(()=>[ve(n),ve(r)]),_:1})}const jU=Su(UU,[["render",$U]]),BU=zc("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Dv=()=>{const e=Le().$firestore,n=Vt(!1),r=Vt(null),s=async c=>{n.value=!0,r.value=null;try{const u=await q_(Tf(e,"users",c));if(u.exists()){const f=u.data();return{uid:u.id,email:f.email,displayName:f.displayName,isAdmin:f.isAdmin||!1,createdAt:f.createdAt?.toDate()||null,lastLoginAt:f.lastLoginAt?.toDate()||null}}return null}catch(u){const f=u;return console.error("Error getting user profile:",f),r.value=f.message,null}finally{n.value=!1}};return{loading:n,error:r,getUserProfile:s,upsertUserProfile:async(c,u=!1)=>{n.value=!0,r.value=null;try{const f=Tf(e,"users",c.uid);return u?await z_(f,{uid:c.uid,email:c.email,displayName:c.displayName,isAdmin:!1,createdAt:Ro(),lastLoginAt:Ro()}):(await q_(f)).exists()?await W_(f,{lastLoginAt:Ro(),email:c.email,displayName:c.displayName}):await z_(f,{uid:c.uid,email:c.email,displayName:c.displayName,isAdmin:!1,createdAt:Ro(),lastLoginAt:Ro()}),!0}catch(f){const h=f;return console.error("Error upserting user profile:",h),r.value=h.message,!1}finally{n.value=!1}},isUserAdmin:async c=>(await s(c))?.isAdmin||!1,setUserAdminStatus:async(c,u)=>{n.value=!0,r.value=null;try{const f=Tf(e,"users",c);return await W_(f,{isAdmin:u}),!0}catch(f){const h=f;return console.error("Error setting admin status:",h),r.value=h.message,!1}finally{n.value=!1}}}},Lv=gU("auth",{state:()=>({user:null,authError:null,loading:!0,youtubeAccessToken:null,hasYouTubeAccess:!1,isAdmin:!1}),actions:{async signIn(t,e){const{$auth:n}=Le(),r=It(),s=Dv();try{const i=await xx(n,t,e);this.user=i.user,this.authError=null,await s.upsertUserProfile(i.user,!1),this.isAdmin=await s.isUserAdmin(i.user.uid),r.push({name:"Admin"})}catch(i){const o=i;this.authError=o.message}},async signOut(){const{$auth:t}=Le();try{await Vx(t),this.user=null,this.authError=null,this.isAdmin=!1,this.clearYouTubeAccess()}catch(e){const n=e;this.authError=n.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Le(),e=Dv();Mx(t,async n=>{this.user=n||null,this.loading=!1,n?(this.checkYouTubeAccess(),this.isAdmin=await e.isUserAdmin(n.uid)):this.isAdmin=!1})},setLoading(t){this.loading=t},setYouTubeAccess(t){this.youtubeAccessToken=t,this.hasYouTubeAccess=!0,typeof window<"u"&&localStorage.setItem("youtube_access_token",t)},clearYouTubeAccess(){this.youtubeAccessToken=null,this.hasYouTubeAccess=!1,typeof window<"u"&&(localStorage.removeItem("youtube_access_token"),localStorage.removeItem("youtube_user_id"))},checkYouTubeAccess(){if(typeof window<"u"){const t=localStorage.getItem("youtube_access_token");t&&(this.youtubeAccessToken=t,this.hasYouTubeAccess=!0)}}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading,getYouTubeAccessToken:t=>t.youtubeAccessToken,hasYouTubeAuth:t=>t.hasYouTubeAccess,getIsAdmin:t=>t.isAdmin}}),HU=zc("/channels4_banner.jpg"),qU={class:"navbar navbar-expand-md navbar-light bg-light"},zU={class:"navbar-nav"},WU={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},KU={class:"navbar-nav ml-auto"};function GU(t,e,n,r,s,i){const o=Bb;return zt(),ca("nav",qU,[ve(o,{class:"navbar-brand",to:"/"},{default:Zt(()=>e[2]||(e[2]=[Yt("Who's Jimmy",-1)])),_:1,__:[2]}),Ve("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[Ve("span",{class:"navbar-toggler-icon"},null,-1)])),Ve("div",{class:Pa(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[Ve("ul",zU,[ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Zt(()=>e[4]||(e[4]=[Yt("Bio",-1)])),_:1,__:[4]}),ve(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Zt(()=>e[5]||(e[5]=[Yt("Portfolio ",-1)])),_:1,__:[5]}),ve(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Zt(()=>e[6]||(e[6]=[Yt("For Sale",-1)])),_:1,__:[6]}),ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Zt(()=>e[7]||(e[7]=[Yt("Cool Stuff",-1)])),_:1,__:[7]}),ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Zt(()=>e[8]||(e[8]=[Yt("Contact Us",-1)])),_:1,__:[8]}),ve(o,{class:"btn btn-light nav-item image-nav-item cta-button",tag:"li",activeClass:"active",to:"/Portfolio/Videos"},{default:Zt(()=>e[9]||(e[9]=[Ve("img",{class:"nav-image",src:HU,alt:"Channel Banner"},null,-1),Ve("div",{class:"cta-overlay"},[Ve("span",{class:"cta-text"},"WATCH NOW"),Ve("div",{class:"cta-pulse"})],-1)])),_:1,__:[9]})])],2),s.isAuth?(zt(),ca("div",WU,[Ve("ul",KU,[ve(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Zt(()=>[Yt(ud(t.user?t.user.email:""),1)]),_:1}),Ve("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):hS("",!0)])}const YU={data(){return{visible:!1,isAuth:!1}},computed:{...yU(Lv,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{..._U(Lv,{signOut:"signOut"})}},QU=Su(YU,[["render",GU],["__scopeId","data-v-d3ec44d7"]]),JU={class:"page-footer font-small bg-light navbar-fixed-bottom"},XU={class:"container"},ZU={class:"py-3 pt-3"},e9={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},t9={href:"https://www.facebook.com/whosjimmy"},n9={href:"https://twitter.com/jimmyclaws"},r9={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"},s9={class:"footer-copyright text-center font-small"};function i9(t,e){const n=aa("font-awesome-icon"),r=Bb;return zt(),ca("footer",JU,[Ve("div",XU,[Ve("div",ZU,[Ve("a",e9,[ve(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),Ve("a",t9,[ve(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),Ve("a",n9,[ve(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),Ve("a",r9,[ve(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),Ve("div",s9,[e[5]||(e[5]=Ve("div",null,[Yt("© 2025 Copyright: "),Ve("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")],-1)),e[6]||(e[6]=Ve("div",null,"Disclaimer: All images are copyright to their respective owners.",-1)),Ve("div",null,[ve(r,{class:"text-white",to:{name:"Terms"}},{default:Zt(()=>e[0]||(e[0]=[Yt("Terms",-1)])),_:1,__:[0]}),e[2]||(e[2]=Yt("A ",-1)),e[3]||(e[3]=Ve("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD",-1)),e[4]||(e[4]=Yt(" creation.",-1)),ve(r,{class:"text-white",to:{name:"Privacy"}},{default:Zt(()=>e[1]||(e[1]=[Yt("Privacy",-1)])),_:1,__:[1]})])])])}const o9={},a9=Su(o9,[["render",i9],["__scopeId","data-v-865b28d3"]]),l9={class:"text-center my-0 page"},c9={class:"body"},u9={components:{appHeader:QU,appFooter:a9},head(){return{title:"Error"}}},f9=yn({...u9,__name:"error",props:{error:{}},setup(t){const e=t,{$config:n}=Le();Bg({title:e?.error?.statusCode?.toString()||"Error"});const r=()=>{Bg({title:n.public.SITE_TITLE}),Iw({redirect:"/"})};return(s,i)=>{const o=aa("app-header"),a=aa("app-footer");return zt(),ca("div",l9,[ve(o),Ve("div",c9,[i[0]||(i[0]=Ve("img",{src:BU,alt:"Error Image"},null,-1)),Ve("h2",null,"Error: "+ud(s.error?.statusCode),1),Ve("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),ve(a)])}}}),h9=Su(f9,[["__scopeId","data-v-b700529b"]]),d9={key:0},Mv={__name:"nuxt-root",setup(t){const e=()=>null,n=Le(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);It().beforeEach(u)}const s=!1;Qr(Vs,Wc()),n.hooks.callHookWith(u=>u.map(f=>f()),"vue:setup");const i=Kc(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;IE((u,f,h)=>{if(n.hooks.callHook("vue:error",u,f,h).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(Sw(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Is(u)),!1});const c=!1;return(u,f)=>(zt(),or(Ad,{onResolve:at(r)},{default:Zt(()=>[at(o)?(zt(),ca("div",d9)):at(i)?(zt(),or(at(h9),{key:1,error:at(i)},null,8,["error"])):at(c)?(zt(),or(at(e),{key:2,context:at(c)},null,8,["context"])):at(s)?(zt(),or(C1(at(s)),{key:3})):(zt(),or(at(jU),{key:4}))]),_:1},8,["onResolve"]))}};let Vv;{let t;Vv=async function(){if(t)return t;const r=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?ZS(Mv):XS(Mv),s=uP({vueApp:r});async function i(o){await s.callHook("app:error",o),s.payload.error||=xs(o)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await dP(s,SU)}catch(o){i(o)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(aP),await s.hooks.callHook("app:mounted",r),await Gn()}catch(o){i(o)}return r},t=Vv().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{N4 as $,br as A,eo as B,Fe as C,pt as D,Qr as E,Un as F,mr as G,Gn as H,zc as I,_U as J,Zt as K,Bb as L,Le as M,Lt as N,g9 as O,v9 as P,Pa as Q,I9 as R,S9 as S,R9 as T,P9 as U,Gs as V,HU as W,Br as X,T9 as Y,E9 as Z,Su as _,Li as a,N9 as a0,k9 as a1,O9 as a2,y9 as a3,p9 as a4,uS as a5,RS as a6,Vs as a7,gU as a8,C9 as a9,Tf as aa,z_ as ab,sD as ac,b9 as ad,bP as ae,a9 as af,QU as ag,CU as ah,Ve as b,ca as c,yn as d,w9 as e,at as f,fS as g,Yt as h,hS as i,Dv as j,or as k,ve as l,yU as m,Vc as n,zt as o,aa as p,Ks as q,Vt as r,x9 as s,ud as t,Lv as u,_9 as v,m9 as w,A1 as x,$n as y,Ye as z};
