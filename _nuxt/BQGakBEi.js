const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CLQ6eGGd.js","./Bio.BaV4dkSc.css","./DVtQY5nQ.js","./D2jWnhs6.js","./index.CAtFJWG6.css","./BZ2fDh2W.js","./Vy7OeHiT.js","./Gallery.BdWwPq4R.css","./BWnSy1Lv.js","./Contact.Bq_tjq4M.css","./C6xKcdR4.js","./DVSTA4N6.js","./Bp-xPZX0.js","./index.ASLudlX-.css","./D7GGVRCx.js","./index.EfND0qCY.css","./ByAfwsdn.js","./Clocks.CaZdgkmv.css","./Cxg0dD6l.js","./xTTGlwln.js","./Film.D8qa6UOd.css","./BiwnLNsp.js","./index.ByThmlNc.css","./DEBBlAav.js","./dEjRAvjN.js","./Clocks.Dmp-oUCd.css","./CQqQK9Sl.js","./CmAXF1EF.js","./f2ivbtqO.js","./Film.CyscwsSS.css","./CeIUfi9a.js","./Celebrities.BS01JuXe.css","./DXao1OxE.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var hI=Object.defineProperty;var gm=t=>{throw TypeError(t)};var dI=(t,e,n)=>e in t?hI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var rn=(t,e,n)=>dI(t,typeof e!="symbol"?e+"":e,n),pI=(t,e,n)=>e.has(t)||gm("Cannot "+n);var lo=(t,e,n)=>(pI(t,e,"read from private field"),n?n.call(t):e.get(t)),_m=(t,e,n)=>e.has(t)?gm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Uh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},li=[],Dn=()=>{},mI=()=>!1,ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bh=t=>t.startsWith("onUpdate:"),pt=Object.assign,jh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gI=Object.prototype.hasOwnProperty,xe=(t,e)=>gI.call(t,e),ue=Array.isArray,ui=t=>ji(t)==="[object Map]",Bi=t=>ji(t)==="[object Set]",ym=t=>ji(t)==="[object Date]",_I=t=>ji(t)==="[object RegExp]",pe=t=>typeof t=="function",We=t=>typeof t=="string",vn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",ov=t=>(Le(t)||pe(t))&&pe(t.then)&&pe(t.catch),av=Object.prototype.toString,ji=t=>av.call(t),yI=t=>ji(t).slice(8,-1),cv=t=>ji(t)==="[object Object]",$h=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vI=/-(\w)/g,hn=yl(t=>t.replace(vI,(e,n)=>n?n.toUpperCase():"")),EI=/\B([A-Z])/g,Us=yl(t=>t.replace(EI,"-$1").toLowerCase()),vl=yl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Su=yl(t=>t?`on${vl(t)}`:""),jr=(t,e)=>!Object.is(t,e),hi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_f=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},lv=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let vm;const El=()=>vm||(vm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?II(r):wl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Le(t))return t}const wI=/;(?![^(]*\))/g,bI=/:([^]+)/,TI=/\/\*[^]*?\*\//g;function II(t){const e={};return t.replace(TI,"").split(wI).forEach(n=>{if(n){const r=n.split(bI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function da(t){let e="";if(We(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=da(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function nF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!We(e)&&(t.class=da(e)),n&&(t.style=wl(n)),t}const AI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",RI=Uh(AI);function uv(t){return!!t||t===""}function SI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=pa(t[r],e[r]);return n}function pa(t,e){if(t===e)return!0;let n=ym(t),r=ym(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vn(t),r=vn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?SI(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!pa(t[o],e[o]))return!1}}return String(t)===String(e)}function Hh(t,e){return t.findIndex(n=>pa(n,e))}const fv=t=>!!(t&&t.__v_isRef===!0),zh=t=>We(t)?t:t==null?"":ue(t)||Le(t)&&(t.toString===av||!pe(t.toString))?fv(t)?zh(t.value):JSON.stringify(t,hv,2):String(t),hv=(t,e)=>fv(e)?hv(t,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Cu(r,i)+" =>"]=s,n),{})}:Bi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cu(n))}:vn(e)?Cu(e):Le(e)&&!ue(e)&&!cv(e)?String(e):e,Cu=(t,e="")=>{var n;return vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class dv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){++this._on===1&&(this.prevScope=Pt,Pt=this)}off(){this._on>0&&--this._on===0&&(Pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qh(t){return new dv(t)}function ma(){return Pt}function Nc(t,e=!1){Pt&&Pt.cleanups.push(t)}let Be;const Pu=new WeakSet;class pv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pu.has(this)&&(Pu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Em(this),_v(this);const e=Be,n=yn;Be=this,yn=!0;try{return this.fn()}finally{yv(this),Be=e,yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gh(e);this.deps=this.depsTail=void 0,Em(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yf(this)&&this.run()}get dirty(){return yf(this)}}let mv=0,Ao,Ro;function gv(t,e=!1){if(t.flags|=8,e){t.next=Ro,Ro=t;return}t.next=Ao,Ao=t}function Wh(){mv++}function Kh(){if(--mv>0)return;if(Ro){let e=Ro;for(Ro=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ao;){let e=Ao;for(Ao=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function _v(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gh(r),CI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function yf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zo)||(t.globalVersion=zo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yf(t))))return;t.flags|=2;const e=t.dep,n=Be,r=yn;Be=t,yn=!0;try{_v(t);const s=t.fn(t._value);(e.version===0||jr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,yn=r,yv(t),t.flags&=-3}}function Gh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function CI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yn=!0;const Ev=[];function ir(){Ev.push(yn),yn=!1}function or(){const t=Ev.pop();yn=t===void 0?!0:t}function Em(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let zo=0;class PI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Be||!yn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new PI(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,wv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,zo++,this.notify(e)}notify(e){Wh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kh()}}}function wv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Dc=new WeakMap,Ts=Symbol(""),vf=Symbol(""),qo=Symbol("");function Ot(t,e,n){if(yn&&Be){let r=Dc.get(t);r||Dc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new bl),s.map=r,s.key=n),s.track()}}function Xn(t,e,n,r,s,i){const o=Dc.get(t);if(!o){zo++;return}const a=l=>{l&&l.trigger()};if(Wh(),e==="clear")o.forEach(a);else{const l=ue(t),u=l&&$h(n);if(l&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===qo||!vn(p)&&p>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(qo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Ts)),ui(t)&&a(o.get(vf)));break;case"delete":l||(a(o.get(Ts)),ui(t)&&a(o.get(vf)));break;case"set":ui(t)&&a(o.get(Ts));break}}Kh()}function kI(t,e){const n=Dc.get(t);return n&&n.get(e)}function Xs(t){const e=Re(t);return e===t?e:(Ot(e,"iterate",qo),ln(t)?e:e.map(wt))}function Tl(t){return Ot(t=Re(t),"iterate",qo),t}const OI={__proto__:null,[Symbol.iterator](){return ku(this,Symbol.iterator,wt)},concat(...t){return Xs(this).concat(...t.map(e=>ue(e)?Xs(e):e))},entries(){return ku(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return Kn(this,"every",t,e,void 0,arguments)},filter(t,e){return Kn(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return Kn(this,"find",t,e,wt,arguments)},findIndex(t,e){return Kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Kn(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return Kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ou(this,"includes",t)},indexOf(...t){return Ou(this,"indexOf",t)},join(t){return Xs(this).join(t)},lastIndexOf(...t){return Ou(this,"lastIndexOf",t)},map(t,e){return Kn(this,"map",t,e,void 0,arguments)},pop(){return uo(this,"pop")},push(...t){return uo(this,"push",t)},reduce(t,...e){return wm(this,"reduce",t,e)},reduceRight(t,...e){return wm(this,"reduceRight",t,e)},shift(){return uo(this,"shift")},some(t,e){return Kn(this,"some",t,e,void 0,arguments)},splice(...t){return uo(this,"splice",t)},toReversed(){return Xs(this).toReversed()},toSorted(t){return Xs(this).toSorted(t)},toSpliced(...t){return Xs(this).toSpliced(...t)},unshift(...t){return uo(this,"unshift",t)},values(){return ku(this,"values",wt)}};function ku(t,e,n){const r=Tl(t),s=r[e]();return r!==t&&!ln(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xI=Array.prototype;function Kn(t,e,n,r,s,i){const o=Tl(t),a=o!==t&&!ln(t),l=o[e];if(l!==xI[e]){const h=l.apply(t,i);return a?wt(h):h}let u=n;o!==t&&(a?u=function(h,p){return n.call(this,wt(h),p,t)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,t)}));const f=l.call(o,u,r);return a&&s?s(f):f}function wm(t,e,n,r){const s=Tl(t);let i=n;return s!==t&&(ln(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,wt(a),l,t)}),s[e](i,...r)}function Ou(t,e,n){const r=Re(t);Ot(r,"iterate",qo);const s=r[e](...n);return(s===-1||s===!1)&&Xh(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function uo(t,e,n=[]){ir(),Wh();const r=Re(t)[e].apply(t,n);return Kh(),or(),r}const NI=Uh("__proto__,__v_isRef,__isVue"),bv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vn));function DI(t){vn(t)||(t=String(t));const e=Re(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class Tv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zI:Sv:i?Rv:Av).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=OI[n]))return l;if(n==="hasOwnProperty")return DI}const a=Reflect.get(e,n,Ye(e)?e:r);return(vn(n)?bv.has(n):NI(n))||(s||Ot(e,"get",n),i)?a:Ye(a)?o&&$h(n)?a:a.value:Le(a)?s?Cv(a):mr(a):a}}class Iv extends Tv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ar(i);if(!ln(r)&&!ar(r)&&(i=Re(i),r=Re(r)),!ue(e)&&Ye(i)&&!Ye(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&$h(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Ye(e)?e:s);return e===Re(s)&&(o?jr(r,i)&&Xn(e,"set",n,r):Xn(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Xn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vn(n)||!bv.has(n))&&Ot(e,"has",n),r}ownKeys(e){return Ot(e,"iterate",ue(e)?"length":Ts),Reflect.ownKeys(e)}}class LI extends Tv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const MI=new Iv,VI=new LI,FI=new Iv(!0);const Ef=t=>t,Wa=t=>Reflect.getPrototypeOf(t);function UI(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ui(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Ef:e?Lc:wt;return!e&&Ot(i,"iterate",l?vf:Ts),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Ka(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function BI(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(jr(s,a)&&Ot(o,"get",s),Ot(o,"get",a));const{has:l}=Wa(o),u=e?Ef:t?Lc:wt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ot(Re(s),"iterate",Ts),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(jr(s,a)&&Ot(o,"has",s),Ot(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Re(a),u=e?Ef:t?Lc:wt;return!t&&Ot(l,"iterate",Ts),a.forEach((f,h)=>s.call(i,u(f),u(h),o))}};return pt(n,t?{add:Ka("add"),set:Ka("set"),delete:Ka("delete"),clear:Ka("clear")}:{add(s){!e&&!ln(s)&&!ar(s)&&(s=Re(s));const i=Re(this);return Wa(i).has.call(i,s)||(i.add(s),Xn(i,"add",s,s)),this},set(s,i){!e&&!ln(i)&&!ar(i)&&(i=Re(i));const o=Re(this),{has:a,get:l}=Wa(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const f=l.call(o,s);return o.set(s,i),u?jr(i,f)&&Xn(o,"set",s,i):Xn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=Wa(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Xn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=UI(s,t,e)}),n}function Yh(t,e){const n=BI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const jI={get:Yh(!1,!1)},$I={get:Yh(!1,!0)},HI={get:Yh(!0,!1)};const Av=new WeakMap,Rv=new WeakMap,Sv=new WeakMap,zI=new WeakMap;function qI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function WI(t){return t.__v_skip||!Object.isExtensible(t)?0:qI(yI(t))}function mr(t){return ar(t)?t:Qh(t,!1,MI,jI,Av)}function kn(t){return Qh(t,!1,FI,$I,Rv)}function Cv(t){return Qh(t,!0,VI,HI,Sv)}function Qh(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=WI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function rr(t){return ar(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function Xh(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Jh(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&_f(t,"__v_skip",!0),t}const wt=t=>Le(t)?mr(t):t,Lc=t=>Le(t)?Cv(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function Gt(t){return Pv(t,!1)}function Cs(t){return Pv(t,!0)}function Pv(t,e){return Ye(t)?t:new KI(t,e)}class KI{constructor(e,n){this.dep=new bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ln(e)||ar(e);e=r?e:Re(e),jr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function rt(t){return Ye(t)?t.value:t}function GI(t){return pe(t)?t():rt(t)}const YI={get:(t,e,n)=>e==="__v_raw"?t:rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kv(t){return rr(t)?t:new Proxy(t,YI)}class QI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new bl,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function XI(t){return new QI(t)}function JI(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=Ov(t,n);return e}class ZI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kI(Re(this._object),this._key)}}class eA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function tA(t,e,n){return Ye(t)?t:pe(t)?new eA(t):Le(t)&&arguments.length>1?Ov(t,e,n):Gt(t)}function Ov(t,e,n){const r=t[e];return Ye(r)?r:new ZI(t,e,n)}class nA{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return gv(this,!0),!0}get value(){const e=this.dep.track();return vv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rA(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new nA(r,s,n)}const Ga={},Mc=new WeakMap;let ys;function sA(t,e=!1,n=ys){if(n){let r=Mc.get(n);r||Mc.set(n,r=[]),r.push(t)}}function iA(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:ln(R)||s===!1||s===0?Jn(R,1):Jn(R);let f,h,p,g,y=!1,w=!1;if(Ye(t)?(h=()=>t.value,y=ln(t)):rr(t)?(h=()=>u(t),y=!0):ue(t)?(w=!0,y=t.some(R=>rr(R)||ln(R)),h=()=>t.map(R=>{if(Ye(R))return R.value;if(rr(R))return u(R);if(pe(R))return l?l(R,2):R()})):pe(t)?e?h=l?()=>l(t,2):t:h=()=>{if(p){ir();try{p()}finally{or()}}const R=ys;ys=f;try{return l?l(t,3,[g]):t(g)}finally{ys=R}}:h=Dn,e&&s){const R=h,D=s===!0?1/0:s;h=()=>Jn(R(),D)}const P=ma(),k=()=>{f.stop(),P&&P.active&&jh(P.effects,f)};if(i&&e){const R=e;e=(...D)=>{R(...D),k()}}let S=w?new Array(t.length).fill(Ga):Ga;const _=R=>{if(!(!(f.flags&1)||!f.dirty&&!R))if(e){const D=f.run();if(s||y||(w?D.some((M,T)=>jr(M,S[T])):jr(D,S))){p&&p();const M=ys;ys=f;try{const T=[D,S===Ga?void 0:w&&S[0]===Ga?[]:S,g];S=D,l?l(e,3,T):e(...T)}finally{ys=M}}}else f.run()};return a&&a(_),f=new pv(h),f.scheduler=o?()=>o(_,!1):_,g=R=>sA(R,!1,f),p=f.onStop=()=>{const R=Mc.get(f);if(R){if(l)l(R,4);else for(const D of R)D();Mc.delete(f)}},e?r?_(!0):S=f.run():o?o(_.bind(null,!0),!0):f.run(),k.pause=f.pause.bind(f),k.resume=f.resume.bind(f),k.stop=k,k}function Jn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))Jn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Jn(t[r],e,n);else if(Bi(t)||ui(t))t.forEach(r=>{Jn(r,e,n)});else if(cv(t)){for(const r in t)Jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ga(t,e,n,r){try{return r?t(...r):t()}catch(s){$i(s,e,n)}}function En(t,e,n,r){if(pe(t)){const s=ga(t,e,n,r);return s&&ov(s)&&s.catch(i=>{$i(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function $i(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,l,u)===!1)return}a=a.parent}if(i){ir(),ga(i,null,10,[t,l,u]),or();return}}oA(t,n,s,r,o)}function oA(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Bt=[];let Rn=-1;const di=[];let Cr=null,ei=0;const xv=Promise.resolve();let Vc=null;function jn(t){const e=Vc||xv;return t?e.then(this?t.bind(this):t):e}function aA(t){let e=Rn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,s=Bt[r],i=Wo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Zh(t){if(!(t.flags&1)){const e=Wo(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=Wo(n)?Bt.push(t):Bt.splice(aA(e),0,t),t.flags|=1,Nv()}}function Nv(){Vc||(Vc=xv.then(Dv))}function wf(t){ue(t)?di.push(...t):Cr&&t.id===-1?Cr.splice(ei+1,0,t):t.flags&1||(di.push(t),t.flags|=1),Nv()}function bm(t,e,n=Rn+1){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Fc(t){if(di.length){const e=[...new Set(di)].sort((n,r)=>Wo(n)-Wo(r));if(di.length=0,Cr){Cr.push(...e);return}for(Cr=e,ei=0;ei<Cr.length;ei++){const n=Cr[ei];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cr=null,ei=0}}const Wo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Dv(t){try{for(Rn=0;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ga(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&(e.flags&=-2)}Rn=-1,Bt.length=0,Fc(),Vc=null,(Bt.length||di.length)&&Dv()}}let at=null,Lv=null;function Uc(t){const e=at;return at=t,Lv=t&&t.type.__scopeId||null,e}function Sn(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Dm(-1);const i=Uc(e);let o;try{o=t(...s)}finally{Uc(i),r._d&&Dm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function rF(t,e){if(at===null)return t;const n=Pl(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Cn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ir(),En(l,n,8,[t.el,a,t,e]),or())}}const cA=Symbol("_vte"),Mv=t=>t.__isTeleport,Pr=Symbol("_leaveCb"),Ya=Symbol("_enterCb");function lA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Al(()=>{t.isMounted=!0}),Hi(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Vv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Fv=t=>{const e=t.subTree;return e.component?Fv(e.component):e},uA={name:"BaseTransition",props:Vv,setup(t,{slots:e}){const n=Cl(),r=lA();return()=>{const s=e.default&&jv(e.default(),!0);if(!s||!s.length)return;const i=Uv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return xu(i);const l=Tm(i);if(!l)return xu(i);let u=bf(l,o,r,n,h=>u=h);l.type!==st&&Ti(l,u);let f=n.subTree&&Tm(n.subTree);if(f&&f.type!==st&&!gn(l,f)&&Fv(n).type!==st){let h=bf(f,o,r,n);if(Ti(f,h),a==="out-in"&&l.type!==st)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,f=void 0},xu(i);a==="in-out"&&l.type!==st?h.delayLeave=(p,g,y)=>{const w=Bv(r,f);w[String(f.key)]=f,p[Pr]=()=>{g(),p[Pr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Uv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==st){e=n;break}}return e}const fA=uA;function Bv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bf(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:p,onLeave:g,onAfterLeave:y,onLeaveCancelled:w,onBeforeAppear:P,onAppear:k,onAfterAppear:S,onAppearCancelled:_}=e,R=String(t.key),D=Bv(n,t),M=(v,I)=>{v&&En(v,r,9,I)},T=(v,I)=>{const x=I[1];M(v,I),ue(v)?v.every(O=>O.length<=1)&&x():v.length<=1&&x()},E={mode:o,persisted:a,beforeEnter(v){let I=l;if(!n.isMounted)if(i)I=P||l;else return;v[Pr]&&v[Pr](!0);const x=D[R];x&&gn(t,x)&&x.el[Pr]&&x.el[Pr](),M(I,[v])},enter(v){let I=u,x=f,O=h;if(!n.isMounted)if(i)I=k||u,x=S||f,O=_||h;else return;let A=!1;const ge=v[Ya]=Ee=>{A||(A=!0,Ee?M(O,[v]):M(x,[v]),E.delayedLeave&&E.delayedLeave(),v[Ya]=void 0)};I?T(I,[v,ge]):ge()},leave(v,I){const x=String(t.key);if(v[Ya]&&v[Ya](!0),n.isUnmounting)return I();M(p,[v]);let O=!1;const A=v[Pr]=ge=>{O||(O=!0,I(),ge?M(w,[v]):M(y,[v]),v[Pr]=void 0,D[x]===t&&delete D[x])};D[x]=t,g?T(g,[v,A]):A()},clone(v){const I=bf(v,e,n,r,s);return s&&s(I),I}};return E}function xu(t){if(_a(t))return t=cr(t),t.children=null,t}function Tm(t){if(!_a(t))return Mv(t.type)&&t.children?Uv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Ti(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ti(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xt?(o.patchFlag&128&&s++,r=r.concat(jv(o.children,e,a))):(e||o.type!==st)&&r.push(a!=null?cr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Tn(t,e){return pe(t)?pt({name:t.name},e,{setup:t}):t}function ed(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pi(t,e,n,r,s=!1){if(ue(t)){t.forEach((y,w)=>pi(y,e&&(ue(e)?e[w]:e),n,r,s));return}if($r(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&pi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Pl(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,f=a.refs===Ve?a.refs={}:a.refs,h=a.setupState,p=Re(h),g=h===Ve?()=>!1:y=>xe(p,y);if(u!=null&&u!==l&&(We(u)?(f[u]=null,g(u)&&(h[u]=null)):Ye(u)&&(u.value=null)),pe(l))ga(l,a,12,[o,f]);else{const y=We(l),w=Ye(l);if(y||w){const P=()=>{if(t.f){const k=y?g(l)?h[l]:f[l]:l.value;s?ue(k)&&jh(k,i):ue(k)?k.includes(i)||k.push(i):y?(f[l]=[i],g(l)&&(h[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else y?(f[l]=o,g(l)&&(h[l]=o)):w&&(l.value=o,t.k&&(f[t.k]=o))};o?(P.id=-1,vt(P,n)):P()}}}let Im=!1;const Js=()=>{Im||(console.error("Hydration completed but contains mismatches."),Im=!0)},hA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",dA=t=>t.namespaceURI.includes("MathML"),Qa=t=>{if(t.nodeType===1){if(hA(t))return"svg";if(dA(t))return"mathml"}},oi=t=>t.nodeType===8;function pA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,f=(_,R)=>{if(!R.hasChildNodes()){n(null,_,R),Fc(),R._vnode=_;return}h(R.firstChild,_,null,null,null),Fc(),R._vnode=_},h=(_,R,D,M,T,E=!1)=>{E=E||!!R.dynamicChildren;const v=oi(_)&&_.data==="[",I=()=>w(_,R,D,M,T,v),{type:x,ref:O,shapeFlag:A,patchFlag:ge}=R;let Ee=_.nodeType;R.el=_,ge===-2&&(E=!1,R.dynamicChildren=null);let Z=null;switch(x){case As:Ee!==3?R.children===""?(l(R.el=s(""),o(_),_),Z=_):Z=I():(_.data!==R.children&&(Js(),_.data=R.children),Z=i(_));break;case st:S(_)?(Z=i(_),k(R.el=_.content.firstChild,_,D)):Ee!==8||v?Z=I():Z=i(_);break;case Co:if(v&&(_=i(_),Ee=_.nodeType),Ee===1||Ee===3){Z=_;const se=!R.children.length;for(let ne=0;ne<R.staticCount;ne++)se&&(R.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===R.staticCount-1&&(R.anchor=Z),Z=i(Z);return v?i(Z):Z}else I();break;case xt:v?Z=y(_,R,D,M,T,E):Z=I();break;default:if(A&1)(Ee!==1||R.type.toLowerCase()!==_.tagName.toLowerCase())&&!S(_)?Z=I():Z=p(_,R,D,M,T,E);else if(A&6){R.slotScopeIds=T;const se=o(_);if(v?Z=P(_):oi(_)&&_.data==="teleport start"?Z=P(_,_.data,"teleport end"):Z=i(_),e(R,se,null,D,M,Qa(se),E),$r(R)&&!R.type.__asyncResolved){let ne;v?(ne=be(xt),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=_.nodeType===3?an(""):be("div"),ne.el=_,R.component.subTree=ne}}else A&64?Ee!==8?Z=I():Z=R.type.hydrate(_,R,D,M,T,E,t,g):A&128&&(Z=R.type.hydrate(_,R,D,M,Qa(o(_)),T,E,t,h))}return O!=null&&pi(O,null,M,R),Z},p=(_,R,D,M,T,E)=>{E=E||!!R.dynamicChildren;const{type:v,props:I,patchFlag:x,shapeFlag:O,dirs:A,transition:ge}=R,Ee=v==="input"||v==="option";if(Ee||x!==-1){A&&Cn(R,null,D,"created");let Z=!1;if(S(_)){Z=uE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=_.content.firstChild;if(Z){const Ue=ne.getAttribute("class");Ue&&(ne.$cls=Ue),ge.beforeEnter(ne)}k(ne,_,D),R.el=_=ne}if(O&16&&!(I&&(I.innerHTML||I.textContent))){let ne=g(_.firstChild,R,_,D,M,T,E);for(;ne;){Xa(_,1)||Js();const Ue=ne;ne=ne.nextSibling,a(Ue)}}else if(O&8){let ne=R.children;ne[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(ne=ne.slice(1)),_.textContent!==ne&&(Xa(_,0)||Js(),_.textContent=R.children)}if(I){if(Ee||!E||x&48){const ne=_.tagName.includes("-");for(const Ue in I)(Ee&&(Ue.endsWith("value")||Ue==="indeterminate")||ha(Ue)&&!fi(Ue)||Ue[0]==="."||ne)&&r(_,Ue,null,I[Ue],void 0,D)}else if(I.onClick)r(_,"onClick",null,I.onClick,void 0,D);else if(x&4&&rr(I.style))for(const ne in I.style)I.style[ne]}let se;(se=I&&I.onVnodeBeforeMount)&&zt(se,D,R),A&&Cn(R,null,D,"beforeMount"),((se=I&&I.onVnodeMounted)||A||Z)&&gE(()=>{se&&zt(se,D,R),Z&&ge.enter(_),A&&Cn(R,null,D,"mounted")},M)}return _.nextSibling},g=(_,R,D,M,T,E,v)=>{v=v||!!R.dynamicChildren;const I=R.children,x=I.length;for(let O=0;O<x;O++){const A=v?I[O]:I[O]=Qt(I[O]),ge=A.type===As;_?(ge&&!v&&O+1<x&&Qt(I[O+1]).type===As&&(l(s(_.data.slice(A.children.length)),D,i(_)),_.data=A.children),_=h(_,A,M,T,E,v)):ge&&!A.children?l(A.el=s(""),D):(Xa(D,1)||Js(),n(null,A,D,null,M,T,Qa(D),E))}return _},y=(_,R,D,M,T,E)=>{const{slotScopeIds:v}=R;v&&(T=T?T.concat(v):v);const I=o(_),x=g(i(_),R,I,D,M,T,E);return x&&oi(x)&&x.data==="]"?i(R.anchor=x):(Js(),l(R.anchor=u("]"),I,x),x)},w=(_,R,D,M,T,E)=>{if(Xa(_.parentElement,1)||Js(),R.el=null,E){const x=P(_);for(;;){const O=i(_);if(O&&O!==x)a(O);else break}}const v=i(_),I=o(_);return a(_),n(null,R,I,v,D,M,Qa(I),T),D&&(D.vnode.el=R.el,Sl(D,R.el)),v},P=(_,R="[",D="]")=>{let M=0;for(;_;)if(_=i(_),_&&oi(_)&&(_.data===R&&M++,_.data===D)){if(M===0)return i(_);M--}return _},k=(_,R,D)=>{const M=R.parentNode;M&&M.replaceChild(_,R);let T=D;for(;T;)T.vnode.el===R&&(T.vnode.el=T.subTree.el=_),T=T.parent},S=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[f,h]}const Am="data-allow-mismatch",mA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Xa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Am);)t=t.parentElement;const n=t&&t.getAttribute(Am);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(mA[e])}}El().requestIdleCallback;El().cancelIdleCallback;function gA(t,e){if(oi(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(oi(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const $r=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function _A(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,f,h=0;const p=()=>(h++,u=null,g()),g=()=>{let y;return u||(y=u=e().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),l)return new Promise((P,k)=>{l(w,()=>P(p()),()=>k(w),h+1)});throw w}).then(w=>y!==u&&u?u:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),f=w,w)))};return Tn({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(y,w,P){const k=i?()=>{const _=i(()=>{P()},R=>gA(y,R));_&&(w.bum||(w.bum=[])).push(_),(w.u||(w.u=[])).push(()=>!0)}:P;f?k():g().then(()=>!w.isUnmounted&&k())},get __asyncResolved(){return f},setup(){const y=it;if(ed(y),f)return()=>Nu(f,y);const w=_=>{u=null,$i(_,y,13,!r)};if(a&&y.suspense||Ai)return g().then(_=>()=>Nu(_,y)).catch(_=>(w(_),()=>r?be(r,{error:_}):null));const P=Gt(!1),k=Gt(),S=Gt(!!s);return s&&setTimeout(()=>{S.value=!1},s),o!=null&&setTimeout(()=>{if(!P.value&&!k.value){const _=new Error(`Async component timed out after ${o}ms.`);w(_),k.value=_}},o),g().then(()=>{P.value=!0,y.parent&&_a(y.parent.vnode)&&y.parent.update()}).catch(_=>{w(_),k.value=_}),()=>{if(P.value&&f)return Nu(f,y);if(k.value&&r)return be(r,{error:k.value});if(n&&!S.value)return be(n)}}})}function Nu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=be(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const _a=t=>t.type.__isKeepAlive,yA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Cl(),r=n.ctx;if(!r.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:f,o:{createElement:h}}}=r,p=h("div");r.activate=(S,_,R,D,M)=>{const T=S.component;u(S,_,R,0,a),l(T.vnode,S,_,R,T,a,D,S.slotScopeIds,M),vt(()=>{T.isDeactivated=!1,T.a&&hi(T.a);const E=S.props&&S.props.onVnodeMounted;E&&zt(E,T.parent,S)},a)},r.deactivate=S=>{const _=S.component;jc(_.m),jc(_.a),u(S,p,null,1,a),vt(()=>{_.da&&hi(_.da);const R=S.props&&S.props.onVnodeUnmounted;R&&zt(R,_.parent,S),_.isDeactivated=!0},a)};function g(S){Du(S),f(S,n,a,!0)}function y(S){s.forEach((_,R)=>{const D=kf(_.type);D&&!S(D)&&w(R)})}function w(S){const _=s.get(S);_&&(!o||!gn(_,o))?g(_):o&&Du(o),s.delete(S),i.delete(S)}Ln(()=>[t.include,t.exclude],([S,_])=>{S&&y(R=>go(S,R)),_&&y(R=>!go(_,R))},{flush:"post",deep:!0});let P=null;const k=()=>{P!=null&&($c(n.subTree.type)?vt(()=>{s.set(P,Ja(n.subTree))},n.subTree.suspense):s.set(P,Ja(n.subTree)))};return Al(k),qv(k),Hi(()=>{s.forEach(S=>{const{subTree:_,suspense:R}=n,D=Ja(_);if(S.type===D.type&&S.key===D.key){Du(D);const M=D.component.da;M&&vt(M,R);return}g(S)})}),()=>{if(P=null,!e.default)return o=null;const S=e.default(),_=S[0];if(S.length>1)return o=null,S;if(!Ps(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let R=Ja(_);if(R.type===st)return o=null,R;const D=R.type,M=kf($r(R)?R.type.__asyncResolved||{}:D),{include:T,exclude:E,max:v}=t;if(T&&(!M||!go(T,M))||E&&M&&go(E,M))return R.shapeFlag&=-257,o=R,_;const I=R.key==null?D:R.key,x=s.get(I);return R.el&&(R=cr(R),_.shapeFlag&128&&(_.ssContent=R)),P=I,x?(R.el=x.el,R.component=x.component,R.transition&&Ti(R,R.transition),R.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),v&&i.size>parseInt(v,10)&&w(i.values().next().value)),R.shapeFlag|=256,o=R,$c(_.type)?_:R}}},vA=yA;function go(t,e){return ue(t)?t.some(n=>go(n,e)):We(t)?t.split(",").includes(e):_I(t)?(t.lastIndex=0,t.test(e)):!1}function $v(t,e){zv(t,"a",e)}function Hv(t,e){zv(t,"da",e)}function zv(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Il(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_a(s.parent.vnode)&&EA(r,e,n,s),s=s.parent}}function EA(t,e,n,r){const s=Il(e,t,r,!0);Wv(()=>{jh(r[e],s)},n)}function Du(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ja(t){return t.shapeFlag&128?t.ssContent:t}function Il(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ir();const a=va(n),l=En(e,n,t,o);return a(),or(),l});return r?s.unshift(i):s.push(i),i}}const gr=t=>(e,n=it)=>{(!Ai||t==="sp")&&Il(t,(...r)=>e(...r),n)},wA=gr("bm"),Al=gr("m"),bA=gr("bu"),qv=gr("u"),Hi=gr("bum"),Wv=gr("um"),TA=gr("sp"),IA=gr("rtg"),AA=gr("rtc");function Kv(t,e=it){Il("ec",t,e)}const Gv="components";function Ko(t,e){return Qv(Gv,t,!0,e)||t}const Yv=Symbol.for("v-ndc");function RA(t){return We(t)?Qv(Gv,t,!1)||t:t||Yv}function Qv(t,e,n=!0,r=!1){const s=at||it;if(s){const i=s.type;{const a=kf(i,!1);if(a&&(a===e||a===hn(e)||a===vl(hn(e))))return i}const o=Rm(s[t]||i[t],e)||Rm(s.appContext[t],e);return!o&&r?i:o}}function Rm(t,e){return t&&(t[e]||t[hn(e)]||t[vl(hn(e))])}function sF(t,e,n,r){let s;const i=n,o=ue(t);if(o||We(t)){const a=o&&rr(t);let l=!1,u=!1;a&&(l=!ln(t),u=ar(t),t=Tl(t)),s=new Array(t.length);for(let f=0,h=t.length;f<h;f++)s[f]=e(l?u?Lc(wt(t[f])):wt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function iF(t,e,n={},r,s){if(at.ce||at.parent&&$r(at.parent)&&at.parent.ce)return jt(),Zn(xt,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),jt();const o=i&&Xv(i(n)),a=n.key||o&&o.key,l=Zn(xt,{key:(a&&!vn(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Xv(t){return t.some(e=>Ps(e)?!(e.type===st||e.type===xt&&!Xv(e.children)):!0)?t:null}const Tf=t=>t?wE(t)?Pl(t):Tf(t.parent):null,So=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tf(t.parent),$root:t=>Tf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zv(t),$forceUpdate:t=>t.f||(t.f=()=>{Zh(t.update)}),$nextTick:t=>t.n||(t.n=jn.bind(t.proxy)),$watch:t=>KA.bind(t)}),Lu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&xe(t,e),SA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Lu(r,e))return o[e]=1,r[e];if(s!==Ve&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==Ve&&xe(n,e))return o[e]=4,n[e];If&&(o[e]=0)}}const f=So[e];let h,p;if(f)return e==="$attrs"&&Ot(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&xe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Lu(s,e)?(s[e]=n,!0):r!==Ve&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&xe(t,o)||Lu(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(So,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sm(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let If=!0;function CA(t){const e=Zv(t),n=t.proxy,r=t.ctx;If=!1,e.beforeCreate&&Cm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:g,updated:y,activated:w,deactivated:P,beforeDestroy:k,beforeUnmount:S,destroyed:_,unmounted:R,render:D,renderTracked:M,renderTriggered:T,errorCaptured:E,serverPrefetch:v,expose:I,inheritAttrs:x,components:O,directives:A,filters:ge}=e;if(u&&PA(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Le(se)&&(t.data=mr(se))}if(If=!0,i)for(const se in i){const ne=i[se],Ue=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Dn,dn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Dn,tn=Fe({get:Ue,set:dn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const se in a)Jv(a[se],r,n,se);if(l){const se=pe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{Hr(ne,se[ne])})}f&&Cm(f,t,"c");function Z(se,ne){ue(ne)?ne.forEach(Ue=>se(Ue.bind(n))):ne&&se(ne.bind(n))}if(Z(wA,h),Z(Al,p),Z(bA,g),Z(qv,y),Z($v,w),Z(Hv,P),Z(Kv,E),Z(AA,M),Z(IA,T),Z(Hi,S),Z(Wv,R),Z(TA,v),ue(I))if(I.length){const se=t.exposed||(t.exposed={});I.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:Ue=>n[ne]=Ue})})}else t.exposed||(t.exposed={});D&&t.render===Dn&&(t.render=D),x!=null&&(t.inheritAttrs=x),O&&(t.components=O),A&&(t.directives=A),v&&ed(t)}function PA(t,e,n=Dn){ue(t)&&(t=Af(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=dt(s.from||r,s.default,!0):i=dt(s.from||r):i=dt(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Cm(t,e,n){En(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jv(t,e,n,r){let s=r.includes(".")?dE(n,r):()=>n[r];if(We(t)){const i=e[t];pe(i)&&Ln(s,i)}else if(pe(t))Ln(s,t.bind(n));else if(Le(t))if(ue(t))t.forEach(i=>Jv(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Ln(s,i,t)}}function Zv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Bc(l,u,o,!0)),Bc(l,e,o)),Le(e)&&i.set(e,l),l}function Bc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Bc(t,i,n,!0),s&&s.forEach(o=>Bc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=kA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kA={data:Pm,props:km,emits:km,methods:_o,computed:_o,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:_o,directives:_o,watch:xA,provide:Pm,inject:OA};function Pm(t,e){return e?t?function(){return pt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function OA(t,e){return _o(Af(t),Af(e))}function Af(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function _o(t,e){return t?pt(Object.create(null),t,e):e}function km(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:pt(Object.create(null),Sm(t),Sm(e??{})):e}function xA(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function eE(){return{app:null,config:{isNativeTag:mI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NA=0;function DA(t,e){return function(r,s=null){pe(r)||(r=pt({},r)),s!=null&&!Le(s)&&(s=null);const i=eE(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:NA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_1,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...h)):pe(f)&&(o.add(f),f(u,...h))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,h){return h?(i.components[f]=h,u):i.components[f]},directive(f,h){return h?(i.directives[f]=h,u):i.directives[f]},mount(f,h,p){if(!l){const g=u._ceVNode||be(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,f):t(g,f,p),l=!0,u._container=f,f.__vue_app__=u,Pl(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(En(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,h){return i.provides[f]=h,u},runWithContext(f){const h=Is;Is=u;try{return f()}finally{Is=h}}};return u}}let Is=null;function Hr(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function dt(t,e,n=!1){const r=it||at;if(r||Is){let s=Is?Is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function ya(){return!!(it||at||Is)}const tE={},nE=()=>Object.create(tE),rE=t=>Object.getPrototypeOf(t)===tE;function LA(t,e,n,r=!1){const s={},i=nE();t.propsDefaults=Object.create(null),sE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:kn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function MA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Rl(t.emitsOptions,p))continue;const g=e[p];if(l)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const y=hn(p);s[y]=Rf(l,a,y,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{sE(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!xe(e,h)&&((f=Us(h))===h||!xe(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Rf(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!xe(e,h))&&(delete i[h],u=!0)}u&&Xn(t.attrs,"set","")}function sE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fi(l))continue;const u=e[l];let f;s&&xe(s,f=hn(l))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Rl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=a||Ve;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Rf(s,l,h,u[h],t,!xe(u,h))}}return o}function Rf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=va(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Us(n))&&(r=!0))}return r}const VA=new WeakMap;function iE(t,e,n=!1){const r=n?VA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const f=h=>{l=!0;const[p,g]=iE(h,e,!0);pt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Le(t)&&r.set(t,li),li;if(ue(i))for(let f=0;f<i.length;f++){const h=hn(i[f]);Om(h)&&(o[h]=Ve)}else if(i)for(const f in i){const h=hn(f);if(Om(h)){const p=i[f],g=o[h]=ue(p)||pe(p)?{type:p}:pt({},p),y=g.type;let w=!1,P=!0;if(ue(y))for(let k=0;k<y.length;++k){const S=y[k],_=pe(S)&&S.name;if(_==="Boolean"){w=!0;break}else _==="String"&&(P=!1)}else w=pe(y)&&y.name==="Boolean";g[0]=w,g[1]=P,(w||xe(g,"default"))&&a.push(h)}}const u=[o,a];return Le(t)&&r.set(t,u),u}function Om(t){return t[0]!=="$"&&!fi(t)}const td=t=>t[0]==="_"||t==="$stable",nd=t=>ue(t)?t.map(Qt):[Qt(t)],FA=(t,e,n)=>{if(e._n)return e;const r=Sn((...s)=>nd(e(...s)),n);return r._c=!1,r},oE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(td(s))continue;const i=t[s];if(pe(i))e[s]=FA(s,i,r);else if(i!=null){const o=nd(i);e[s]=()=>o}}},aE=(t,e)=>{const n=nd(e);t.slots.default=()=>n},cE=(t,e,n)=>{for(const r in e)(n||!td(r))&&(t[r]=e[r])},UA=(t,e,n)=>{const r=t.slots=nE();if(t.vnode.shapeFlag&32){const s=e.__;s&&_f(r,"__",s,!0);const i=e._;i?(cE(r,e,n),n&&_f(r,"_",i,!0)):oE(e,r)}else e&&aE(t,e)},BA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:cE(s,e,n):(i=!e.$stable,oE(e,s)),o=e}else e&&(aE(t,e),o={default:1});if(i)for(const a in s)!td(a)&&o[a]==null&&delete s[a]},vt=gE;function jA(t){return lE(t)}function $A(t){return lE(t,pA)}function lE(t,e){const n=El();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:g=Dn,insertStaticContent:y}=t,w=(C,N,V,$=null,U=null,z=null,Q=void 0,G=null,K=!!N.dynamicChildren)=>{if(C===N)return;C&&!gn(C,N)&&($=B(C),Ke(C,U,z,!0),C=null),N.patchFlag===-2&&(K=!1,N.dynamicChildren=null);const{type:q,ref:ce,shapeFlag:X}=N;switch(q){case As:P(C,N,V,$);break;case st:k(C,N,V,$);break;case Co:C==null&&S(N,V,$,Q);break;case xt:O(C,N,V,$,U,z,Q,G,K);break;default:X&1?D(C,N,V,$,U,z,Q,G,K):X&6?A(C,N,V,$,U,z,Q,G,K):(X&64||X&128)&&q.process(C,N,V,$,U,z,Q,G,K,re)}ce!=null&&U?pi(ce,C&&C.ref,z,N||C,!N):ce==null&&C&&C.ref!=null&&pi(C.ref,null,z,C,!0)},P=(C,N,V,$)=>{if(C==null)r(N.el=a(N.children),V,$);else{const U=N.el=C.el;N.children!==C.children&&u(U,N.children)}},k=(C,N,V,$)=>{C==null?r(N.el=l(N.children||""),V,$):N.el=C.el},S=(C,N,V,$)=>{[C.el,C.anchor]=y(C.children,N,V,$,C.el,C.anchor)},_=({el:C,anchor:N},V,$)=>{let U;for(;C&&C!==N;)U=p(C),r(C,V,$),C=U;r(N,V,$)},R=({el:C,anchor:N})=>{let V;for(;C&&C!==N;)V=p(C),s(C),C=V;s(N)},D=(C,N,V,$,U,z,Q,G,K)=>{N.type==="svg"?Q="svg":N.type==="math"&&(Q="mathml"),C==null?M(N,V,$,U,z,Q,G,K):v(C,N,U,z,Q,G,K)},M=(C,N,V,$,U,z,Q,G)=>{let K,q;const{props:ce,shapeFlag:X,transition:oe,dirs:ie}=C;if(K=C.el=o(C.type,z,ce&&ce.is,ce),X&8?f(K,C.children):X&16&&E(C.children,K,null,$,U,Mu(C,z),Q,G),ie&&Cn(C,null,$,"created"),T(K,C,C.scopeId,Q,$),ce){for(const Pe in ce)Pe!=="value"&&!fi(Pe)&&i(K,Pe,null,ce[Pe],z,$);"value"in ce&&i(K,"value",null,ce.value,z),(q=ce.onVnodeBeforeMount)&&zt(q,$,C)}ie&&Cn(C,null,$,"beforeMount");const he=uE(U,oe);he&&oe.beforeEnter(K),r(K,N,V),((q=ce&&ce.onVnodeMounted)||he||ie)&&vt(()=>{q&&zt(q,$,C),he&&oe.enter(K),ie&&Cn(C,null,$,"mounted")},U)},T=(C,N,V,$,U)=>{if(V&&g(C,V),$)for(let z=0;z<$.length;z++)g(C,$[z]);if(U){let z=U.subTree;if(N===z||$c(z.type)&&(z.ssContent===N||z.ssFallback===N)){const Q=U.vnode;T(C,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},E=(C,N,V,$,U,z,Q,G,K=0)=>{for(let q=K;q<C.length;q++){const ce=C[q]=G?kr(C[q]):Qt(C[q]);w(null,ce,N,V,$,U,z,Q,G)}},v=(C,N,V,$,U,z,Q)=>{const G=N.el=C.el;let{patchFlag:K,dynamicChildren:q,dirs:ce}=N;K|=C.patchFlag&16;const X=C.props||Ve,oe=N.props||Ve;let ie;if(V&&ps(V,!1),(ie=oe.onVnodeBeforeUpdate)&&zt(ie,V,N,C),ce&&Cn(N,C,V,"beforeUpdate"),V&&ps(V,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&f(G,""),q?I(C.dynamicChildren,q,G,V,$,Mu(N,U),z):Q||ne(C,N,G,null,V,$,Mu(N,U),z,!1),K>0){if(K&16)x(G,X,oe,V,U);else if(K&2&&X.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",X.style,oe.style,U),K&8){const he=N.dynamicProps;for(let Pe=0;Pe<he.length;Pe++){const Se=he[Pe],mt=X[Se],ft=oe[Se];(ft!==mt||Se==="value")&&i(G,Se,mt,ft,U,V)}}K&1&&C.children!==N.children&&f(G,N.children)}else!Q&&q==null&&x(G,X,oe,V,U);((ie=oe.onVnodeUpdated)||ce)&&vt(()=>{ie&&zt(ie,V,N,C),ce&&Cn(N,C,V,"updated")},$)},I=(C,N,V,$,U,z,Q)=>{for(let G=0;G<N.length;G++){const K=C[G],q=N[G],ce=K.el&&(K.type===xt||!gn(K,q)||K.shapeFlag&198)?h(K.el):V;w(K,q,ce,null,$,U,z,Q,!0)}},x=(C,N,V,$,U)=>{if(N!==V){if(N!==Ve)for(const z in N)!fi(z)&&!(z in V)&&i(C,z,N[z],null,U,$);for(const z in V){if(fi(z))continue;const Q=V[z],G=N[z];Q!==G&&z!=="value"&&i(C,z,G,Q,U,$)}"value"in V&&i(C,"value",N.value,V.value,U)}},O=(C,N,V,$,U,z,Q,G,K)=>{const q=N.el=C?C.el:a(""),ce=N.anchor=C?C.anchor:a("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ie}=N;ie&&(G=G?G.concat(ie):ie),C==null?(r(q,V,$),r(ce,V,$),E(N.children||[],V,ce,U,z,Q,G,K)):X>0&&X&64&&oe&&C.dynamicChildren?(I(C.dynamicChildren,oe,V,U,z,Q,G),(N.key!=null||U&&N===U.subTree)&&fE(C,N,!0)):ne(C,N,V,ce,U,z,Q,G,K)},A=(C,N,V,$,U,z,Q,G,K)=>{N.slotScopeIds=G,C==null?N.shapeFlag&512?U.ctx.activate(N,V,$,Q,K):ge(N,V,$,U,z,Q,K):Ee(C,N,K)},ge=(C,N,V,$,U,z,Q)=>{const G=C.component=f1(C,$,U);if(_a(C)&&(G.ctx.renderer=re),h1(G,!1,Q),G.asyncDep){if(U&&U.registerDep(G,Z,Q),!C.el){const K=G.subTree=be(st);k(null,K,N,V)}}else Z(G,C,N,V,U,z,Q)},Ee=(C,N,V)=>{const $=N.component=C.component;if(ZA(C,N,V))if($.asyncDep&&!$.asyncResolved){se($,N,V);return}else $.next=N,$.update();else N.el=C.el,$.vnode=N},Z=(C,N,V,$,U,z,Q)=>{const G=()=>{if(C.isMounted){let{next:X,bu:oe,u:ie,parent:he,vnode:Pe}=C;{const At=hE(C);if(At){X&&(X.el=Pe.el,se(C,X,Q)),At.asyncDep.then(()=>{C.isUnmounted||G()});return}}let Se=X,mt;ps(C,!1),X?(X.el=Pe.el,se(C,X,Q)):X=Pe,oe&&hi(oe),(mt=X.props&&X.props.onVnodeBeforeUpdate)&&zt(mt,he,X,Pe),ps(C,!0);const ft=Vu(C),gt=C.subTree;C.subTree=ft,w(gt,ft,h(gt.el),B(gt),C,U,z),X.el=ft.el,Se===null&&Sl(C,ft.el),ie&&vt(ie,U),(mt=X.props&&X.props.onVnodeUpdated)&&vt(()=>zt(mt,he,X,Pe),U)}else{let X;const{el:oe,props:ie}=N,{bm:he,m:Pe,parent:Se,root:mt,type:ft}=C,gt=$r(N);if(ps(C,!1),he&&hi(he),!gt&&(X=ie&&ie.onVnodeBeforeMount)&&zt(X,Se,N),ps(C,!0),oe&&De){const At=()=>{C.subTree=Vu(C),De(oe,C.subTree,C,U,null)};gt&&ft.__asyncHydrate?ft.__asyncHydrate(oe,C,At):At()}else{mt.ce&&mt.ce._def.shadowRoot!==!1&&mt.ce._injectChildStyle(ft);const At=C.subTree=Vu(C);w(null,At,V,$,C,U,z),N.el=At.el}if(Pe&&vt(Pe,U),!gt&&(X=ie&&ie.onVnodeMounted)){const At=N;vt(()=>zt(X,Se,At),U)}(N.shapeFlag&256||Se&&$r(Se.vnode)&&Se.vnode.shapeFlag&256)&&C.a&&vt(C.a,U),C.isMounted=!0,N=V=$=null}};C.scope.on();const K=C.effect=new pv(G);C.scope.off();const q=C.update=K.run.bind(K),ce=C.job=K.runIfDirty.bind(K);ce.i=C,ce.id=C.uid,K.scheduler=()=>Zh(ce),ps(C,!0),q()},se=(C,N,V)=>{N.component=C;const $=C.vnode.props;C.vnode=N,C.next=null,MA(C,N.props,$,V),BA(C,N.children,V),ir(),bm(C),or()},ne=(C,N,V,$,U,z,Q,G,K=!1)=>{const q=C&&C.children,ce=C?C.shapeFlag:0,X=N.children,{patchFlag:oe,shapeFlag:ie}=N;if(oe>0){if(oe&128){dn(q,X,V,$,U,z,Q,G,K);return}else if(oe&256){Ue(q,X,V,$,U,z,Q,G,K);return}}ie&8?(ce&16&&$t(q,U,z),X!==q&&f(V,X)):ce&16?ie&16?dn(q,X,V,$,U,z,Q,G,K):$t(q,U,z,!0):(ce&8&&f(V,""),ie&16&&E(X,V,$,U,z,Q,G,K))},Ue=(C,N,V,$,U,z,Q,G,K)=>{C=C||li,N=N||li;const q=C.length,ce=N.length,X=Math.min(q,ce);let oe;for(oe=0;oe<X;oe++){const ie=N[oe]=K?kr(N[oe]):Qt(N[oe]);w(C[oe],ie,V,null,U,z,Q,G,K)}q>ce?$t(C,U,z,!0,!1,X):E(N,V,$,U,z,Q,G,K,X)},dn=(C,N,V,$,U,z,Q,G,K)=>{let q=0;const ce=N.length;let X=C.length-1,oe=ce-1;for(;q<=X&&q<=oe;){const ie=C[q],he=N[q]=K?kr(N[q]):Qt(N[q]);if(gn(ie,he))w(ie,he,V,null,U,z,Q,G,K);else break;q++}for(;q<=X&&q<=oe;){const ie=C[X],he=N[oe]=K?kr(N[oe]):Qt(N[oe]);if(gn(ie,he))w(ie,he,V,null,U,z,Q,G,K);else break;X--,oe--}if(q>X){if(q<=oe){const ie=oe+1,he=ie<ce?N[ie].el:$;for(;q<=oe;)w(null,N[q]=K?kr(N[q]):Qt(N[q]),V,he,U,z,Q,G,K),q++}}else if(q>oe)for(;q<=X;)Ke(C[q],U,z,!0),q++;else{const ie=q,he=q,Pe=new Map;for(q=he;q<=oe;q++){const Mt=N[q]=K?kr(N[q]):Qt(N[q]);Mt.key!=null&&Pe.set(Mt.key,q)}let Se,mt=0;const ft=oe-he+1;let gt=!1,At=0;const Er=new Array(ft);for(q=0;q<ft;q++)Er[q]=0;for(q=ie;q<=X;q++){const Mt=C[q];if(mt>=ft){Ke(Mt,U,z,!0);continue}let nn;if(Mt.key!=null)nn=Pe.get(Mt.key);else for(Se=he;Se<=oe;Se++)if(Er[Se-he]===0&&gn(Mt,N[Se])){nn=Se;break}nn===void 0?Ke(Mt,U,z,!0):(Er[nn-he]=q+1,nn>=At?At=nn:gt=!0,w(Mt,N[nn],V,null,U,z,Q,G,K),mt++)}const qs=gt?HA(Er):li;for(Se=qs.length-1,q=ft-1;q>=0;q--){const Mt=he+q,nn=N[Mt],Ws=Mt+1<ce?N[Mt+1].el:$;Er[q]===0?w(null,nn,V,Ws,U,z,Q,G,K):gt&&(Se<0||q!==qs[Se]?tn(nn,V,Ws,2):Se--)}}},tn=(C,N,V,$,U=null)=>{const{el:z,type:Q,transition:G,children:K,shapeFlag:q}=C;if(q&6){tn(C.component.subTree,N,V,$);return}if(q&128){C.suspense.move(N,V,$);return}if(q&64){Q.move(C,N,V,re);return}if(Q===xt){r(z,N,V);for(let X=0;X<K.length;X++)tn(K[X],N,V,$);r(C.anchor,N,V);return}if(Q===Co){_(C,N,V);return}if($!==2&&q&1&&G)if($===0)G.beforeEnter(z),r(z,N,V),vt(()=>G.enter(z),U);else{const{leave:X,delayLeave:oe,afterLeave:ie}=G,he=()=>{C.ctx.isUnmounted?s(z):r(z,N,V)},Pe=()=>{X(z,()=>{he(),ie&&ie()})};oe?oe(z,he,Pe):Pe()}else r(z,N,V)},Ke=(C,N,V,$=!1,U=!1)=>{const{type:z,props:Q,ref:G,children:K,dynamicChildren:q,shapeFlag:ce,patchFlag:X,dirs:oe,cacheIndex:ie}=C;if(X===-2&&(U=!1),G!=null&&(ir(),pi(G,null,V,C,!0),or()),ie!=null&&(N.renderCache[ie]=void 0),ce&256){N.ctx.deactivate(C);return}const he=ce&1&&oe,Pe=!$r(C);let Se;if(Pe&&(Se=Q&&Q.onVnodeBeforeUnmount)&&zt(Se,N,C),ce&6)In(C.component,V,$);else{if(ce&128){C.suspense.unmount(V,$);return}he&&Cn(C,null,N,"beforeUnmount"),ce&64?C.type.remove(C,N,V,re,$):q&&!q.hasOnce&&(z!==xt||X>0&&X&64)?$t(q,N,V,!1,!0):(z===xt&&X&384||!U&&ce&16)&&$t(K,N,V),$&&Ge(C)}(Pe&&(Se=Q&&Q.onVnodeUnmounted)||he)&&vt(()=>{Se&&zt(Se,N,C),he&&Cn(C,null,N,"unmounted")},V)},Ge=C=>{const{type:N,el:V,anchor:$,transition:U}=C;if(N===xt){vr(V,$);return}if(N===Co){R(C);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(C.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:G}=U,K=()=>Q(V,z);G?G(C.el,z,K):K()}else z()},vr=(C,N)=>{let V;for(;C!==N;)V=p(C),s(C),C=V;s(N)},In=(C,N,V)=>{const{bum:$,scope:U,job:z,subTree:Q,um:G,m:K,a:q,parent:ce,slots:{__:X}}=C;jc(K),jc(q),$&&hi($),ce&&ue(X)&&X.forEach(oe=>{ce.renderCache[oe]=void 0}),U.stop(),z&&(z.flags|=8,Ke(Q,C,N,V)),G&&vt(G,N),vt(()=>{C.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},$t=(C,N,V,$=!1,U=!1,z=0)=>{for(let Q=z;Q<C.length;Q++)Ke(C[Q],N,V,$,U)},B=C=>{if(C.shapeFlag&6)return B(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=p(C.anchor||C.el),V=N&&N[cA];return V?p(V):N};let ee=!1;const J=(C,N,V)=>{C==null?N._vnode&&Ke(N._vnode,null,null,!0):w(N._vnode||null,C,N,null,null,null,V),N._vnode=C,ee||(ee=!0,bm(),Fc(),ee=!1)},re={p:w,um:Ke,m:tn,r:Ge,mt:ge,mc:E,pc:ne,pbc:I,n:B,o:t};let Ie,De;return e&&([Ie,De]=e(re)),{render:J,hydrate:Ie,createApp:DA(J,Ie)}}function Mu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ps({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function uE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fE(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=kr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&fE(o,a)),a.type===As&&(a.el=o.el),a.type===st&&!a.el&&(a.el=o.el)}}function HA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function hE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hE(e)}function jc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zA=Symbol.for("v-scx"),qA=()=>dt(zA);function WA(t,e){return rd(t,null,e)}function Ln(t,e,n){return rd(t,e,n)}function rd(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,a=pt({},n),l=e&&r||!e&&i!=="post";let u;if(Ai){if(i==="sync"){const g=qA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Dn,g.resume=Dn,g.pause=Dn,g}}const f=it;a.call=(g,y,w)=>En(g,f,y,w);let h=!1;i==="post"?a.scheduler=g=>{vt(g,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(g,y)=>{y?g():Zh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=iA(t,e,a);return Ai&&(u?u.push(p):l&&p()),p}function KA(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?dE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=va(this),a=rd(s,i.bind(r),n);return o(),a}function dE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const GA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${Us(e)}Modifiers`];function YA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&GA(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(xc)));let a,l=r[a=Su(e)]||r[a=Su(hn(e))];!l&&i&&(l=r[a=Su(Us(e))]),l&&En(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,En(u,t,6,s)}}function pE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const f=pE(u,e,!0);f&&(a=!0,pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Le(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):pt(o,i),Le(t)&&r.set(t,o),o)}function Rl(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Us(e))||xe(t,e))}function Vu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:f,props:h,data:p,setupState:g,ctx:y,inheritAttrs:w}=t,P=Uc(t);let k,S;try{if(n.shapeFlag&4){const R=s||r,D=R;k=Qt(u.call(D,R,f,h,g,p,y)),S=a}else{const R=e;k=Qt(R.length>1?R(h,{attrs:a,slots:o,emit:l}):R(h,null)),S=e.props?a:XA(a)}}catch(R){Po.length=0,$i(R,t,1),k=be(st)}let _=k;if(S&&w!==!1){const R=Object.keys(S),{shapeFlag:D}=_;R.length&&D&7&&(i&&R.some(Bh)&&(S=JA(S,i)),_=cr(_,S,!1,!0))}return n.dirs&&(_=cr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Ti(_,n.transition),k=_,Uc(P),k}function QA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ps(s)){if(s.type!==st||s.children==="v-if"){if(n)return;n=s}}else return}return n}const XA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},JA=(t,e)=>{const n={};for(const r in t)(!Bh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ZA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xm(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Rl(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xm(r,o,u):!0:!!o;return!1}function xm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rl(n,i))return!0}return!1}function Sl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $c=t=>t.__isSuspense;let Sf=0;const e1={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)t1(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}n1(t,e,n,r,s,o,a,l,u)}},hydrate:r1,normalize:s1},sd=e1;function Go(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function t1(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:f}}=l,h=f("div"),p=t.suspense=mE(t,s,r,e,h,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,h,null,r,p,i,o),p.deps>0?(Go(t,"onPending"),Go(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),mi(p,t.ssFallback)):p.resolve(!1,!0)}function n1(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:f}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:y,pendingBranch:w,isInFallback:P,isHydrating:k}=h;if(w)h.pendingBranch=p,gn(p,w)?(l(w,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():P&&(k||(l(y,g,n,r,s,null,i,o,a),mi(h,g)))):(h.pendingId=Sf++,k?(h.isHydrating=!1,h.activeBranch=w):u(w,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),P?(l(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(y,g,n,r,s,null,i,o,a),mi(h,g))):y&&gn(p,y)?(l(y,p,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&gn(p,y))l(y,p,n,r,s,h,i,o,a),mi(h,p);else if(Go(e,"onPending"),h.pendingBranch=p,p.shapeFlag&512?h.pendingId=p.component.suspenseId:h.pendingId=Sf++,l(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:S,pendingId:_}=h;S>0?setTimeout(()=>{h.pendingId===_&&h.fallback(g)},S):S===0&&h.fallback(g)}}function mE(t,e,n,r,s,i,o,a,l,u,f=!1){const{p:h,m:p,um:g,n:y,o:{parentNode:w,remove:P}}=u;let k;const S=i1(t);S&&e&&e.pendingBranch&&(k=e.pendingId,e.deps++);const _=t.props?lv(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Sf++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(M=!1,T=!1){const{vnode:E,activeBranch:v,pendingBranch:I,pendingId:x,effects:O,parentComponent:A,container:ge}=D;let Ee=!1;D.isHydrating?D.isHydrating=!1:M||(Ee=v&&I.transition&&I.transition.mode==="out-in",Ee&&(v.transition.afterLeave=()=>{x===D.pendingId&&(p(I,ge,i===R?y(v):i,0),wf(O))}),v&&(w(v.el)===ge&&(i=y(v)),g(v,A,D,!0)),Ee||p(I,ge,i,0)),mi(D,I),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...O),se=!0;break}Z=Z.parent}!se&&!Ee&&wf(O),D.effects=[],S&&e&&e.pendingBranch&&k===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),Go(E,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:T,activeBranch:E,parentComponent:v,container:I,namespace:x}=D;Go(T,"onFallback");const O=y(E),A=()=>{D.isInFallback&&(h(null,M,I,O,v,null,x,a,l),mi(D,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(E.transition.afterLeave=A),D.isInFallback=!0,g(E,v,null,!0),ge||A()},move(M,T,E){D.activeBranch&&p(D.activeBranch,M,T,E),D.container=M},next(){return D.activeBranch&&y(D.activeBranch)},registerDep(M,T,E){const v=!!D.pendingBranch;v&&D.deps++;const I=M.vnode.el;M.asyncDep.catch(x=>{$i(x,M,0)}).then(x=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:O}=M;Pf(M,x),I&&(O.el=I);const A=!I&&M.subTree.el;T(M,O,w(I||M.subTree.el),I?null:y(M.subTree),D,o,E),A&&P(A),Sl(M,O.el),v&&--D.deps===0&&D.resolve()})},unmount(M,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,T),D.pendingBranch&&g(D.pendingBranch,n,M,T)}};return D}function r1(t,e,n,r,s,i,o,a,l){const u=e.suspense=mE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function s1(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Nm(r?n.default:n),t.ssFallback=r?Nm(n.fallback):be(st)}function Nm(t){let e;if(pe(t)){const n=Ii&&t._c;n&&(t._d=!1,jt()),t=t(),n&&(t._d=!0,e=Kt,_E())}return ue(t)&&(t=QA(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function gE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):wf(t)}function mi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Sl(r,s))}function i1(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const xt=Symbol.for("v-fgt"),As=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),Co=Symbol.for("v-stc"),Po=[];let Kt=null;function jt(t=!1){Po.push(Kt=t?null:[])}function _E(){Po.pop(),Kt=Po[Po.length-1]||null}let Ii=1;function Dm(t,e=!1){Ii+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function yE(t){return t.dynamicChildren=Ii>0?Kt||li:null,_E(),Ii>0&&Kt&&Kt.push(t),t}function Yo(t,e,n,r,s,i){return yE(ze(t,e,n,r,s,i,!0))}function Zn(t,e,n,r,s){return yE(be(t,e,n,r,s,!0))}function Ps(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const vE=({key:t})=>t??null,gc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Ye(t)||pe(t)?{i:at,r:t,k:e,f:!!n}:t:null);function ze(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vE(e),ref:e&&gc(e),scopeId:Lv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return a?(id(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),Ii>0&&!o&&Kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Kt.push(l),l}const be=o1;function o1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yv)&&(t=st),Ps(t)){const a=cr(t,e,!0);return n&&id(a,n),Ii>0&&!i&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(t)]=a:Kt.push(a)),a.patchFlag=-2,a}if(g1(t)&&(t=t.__vccOpts),e){e=a1(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=da(a)),Le(l)&&(Xh(l)&&!ue(l)&&(l=pt({},l)),e.style=wl(l))}const o=We(t)?1:$c(t)?128:Mv(t)?64:Le(t)?4:pe(t)?2:0;return ze(t,e,n,r,s,o,i,!0)}function a1(t){return t?Xh(t)||rE(t)?pt({},t):t:null}function cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?EE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&vE(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(gc(e)):[i,gc(e)]:gc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ti(f,l.clone(f)),f}function an(t=" ",e=0){return be(As,null,t,e)}function oF(t,e){const n=be(Co,null,t);return n.staticCount=e,n}function c1(t="",e=!1){return e?(jt(),Zn(st,null,t)):be(st,null,t)}function Qt(t){return t==null||typeof t=="boolean"?be(st):ue(t)?be(xt,null,t.slice()):Ps(t)?kr(t):be(As,null,String(t))}function kr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function id(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),id(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!rE(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function EE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=da([e.class,r.class]));else if(s==="style")e.style=wl([e.style,r.style]);else if(ha(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){En(t,e,7,[n,r])}const l1=eE();let u1=0;function f1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||l1,i={uid:u1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iE(r,s),emitsOptions:pE(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=YA.bind(null,i),t.ce&&t.ce(i),i}let it=null;const Cl=()=>it||at;let Hc,Cf;{const t=El(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Hc=e("__VUE_INSTANCE_SETTERS__",n=>it=n),Cf=e("__VUE_SSR_SETTERS__",n=>Ai=n)}const va=t=>{const e=it;return Hc(t),t.scope.on(),()=>{t.scope.off(),Hc(e)}},Lm=()=>{it&&it.scope.off(),Hc(null)};function wE(t){return t.vnode.shapeFlag&4}let Ai=!1;function h1(t,e=!1,n=!1){e&&Cf(e);const{props:r,children:s}=t.vnode,i=wE(t);LA(t,r,i,e),UA(t,s,n||e);const o=i?d1(t,e):void 0;return e&&Cf(!1),o}function d1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,SA);const{setup:r}=n;if(r){ir();const s=t.setupContext=r.length>1?m1(t):null,i=va(t),o=ga(r,t,0,[t.props,s]),a=ov(o);if(or(),i(),(a||t.sp)&&!$r(t)&&ed(t),a){if(o.then(Lm,Lm),e)return o.then(l=>{Pf(t,l)}).catch(l=>{$i(l,t,0)});t.asyncDep=o}else Pf(t,o)}else bE(t)}function Pf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=kv(e)),bE(t)}function bE(t,e,n){const r=t.type;t.render||(t.render=r.render||Dn);{const s=va(t);ir();try{CA(t)}finally{or(),s()}}}const p1={get(t,e){return Ot(t,"get",""),t[e]}};function m1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,p1),slots:t.slots,emit:t.emit,expose:e}}function Pl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kv(Jh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in So)return So[n](t)},has(e,n){return n in e||n in So}})):t.proxy}function kf(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function g1(t){return pe(t)&&"__vccOpts"in t}const Fe=(t,e)=>rA(t,e,Ai);function ct(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ue(e)?Ps(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ps(n)&&(n=[n]),be(t,e,n))}const _1="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Of;const Mm=typeof window<"u"&&window.trustedTypes;if(Mm)try{Of=Mm.createPolicy("vue",{createHTML:t=>t})}catch{}const TE=Of?t=>Of.createHTML(t):t=>t,y1="http://www.w3.org/2000/svg",v1="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,Vm=Qn&&Qn.createElement("template"),E1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Qn.createElementNS(y1,t):e==="mathml"?Qn.createElementNS(v1,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vm.innerHTML=TE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Vm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ir="transition",fo="animation",Qo=Symbol("_vtc"),IE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},w1=pt({},Vv,IE),b1=t=>(t.displayName="Transition",t.props=w1,t),T1=b1((t,{slots:e})=>ct(fA,I1(t),e)),ms=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fm=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function I1(t){const e={};for(const O in t)O in IE||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,y=A1(s),w=y&&y[0],P=y&&y[1],{onBeforeEnter:k,onEnter:S,onEnterCancelled:_,onLeave:R,onLeaveCancelled:D,onBeforeAppear:M=k,onAppear:T=S,onAppearCancelled:E=_}=e,v=(O,A,ge,Ee)=>{O._enterCancelled=Ee,gs(O,A?f:a),gs(O,A?u:o),ge&&ge()},I=(O,A)=>{O._isLeaving=!1,gs(O,h),gs(O,g),gs(O,p),A&&A()},x=O=>(A,ge)=>{const Ee=O?T:S,Z=()=>v(A,O,ge);ms(Ee,[A,Z]),Um(()=>{gs(A,O?l:i),Gn(A,O?f:a),Fm(Ee)||Bm(A,r,w,Z)})};return pt(e,{onBeforeEnter(O){ms(k,[O]),Gn(O,i),Gn(O,o)},onBeforeAppear(O){ms(M,[O]),Gn(O,l),Gn(O,u)},onEnter:x(!1),onAppear:x(!0),onLeave(O,A){O._isLeaving=!0;const ge=()=>I(O,A);Gn(O,h),O._enterCancelled?(Gn(O,p),Hm()):(Hm(),Gn(O,p)),Um(()=>{O._isLeaving&&(gs(O,h),Gn(O,g),Fm(R)||Bm(O,r,P,ge))}),ms(R,[O,ge])},onEnterCancelled(O){v(O,!1,void 0,!0),ms(_,[O])},onAppearCancelled(O){v(O,!0,void 0,!0),ms(E,[O])},onLeaveCancelled(O){I(O),ms(D,[O])}})}function A1(t){if(t==null)return null;if(Le(t))return[Fu(t.enter),Fu(t.leave)];{const e=Fu(t);return[e,e]}}function Fu(t){return lv(t)}function Gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Qo]||(t[Qo]=new Set)).add(e)}function gs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Qo];n&&(n.delete(e),n.size||(t[Qo]=void 0))}function Um(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let R1=0;function Bm(t,e,n,r){const s=t._endId=++R1,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=S1(t,e);if(!o)return r();const u=o+"end";let f=0;const h=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++f>=l&&h()};setTimeout(()=>{f<l&&h()},a+1),t.addEventListener(u,p)}function S1(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${Ir}Delay`),i=r(`${Ir}Duration`),o=jm(s,i),a=r(`${fo}Delay`),l=r(`${fo}Duration`),u=jm(a,l);let f=null,h=0,p=0;e===Ir?o>0&&(f=Ir,h=o,p=i.length):e===fo?u>0&&(f=fo,h=u,p=l.length):(h=Math.max(o,u),f=h>0?o>u?Ir:fo:null,p=f?f===Ir?i.length:l.length:0);const g=f===Ir&&/\b(transform|all)(,|$)/.test(r(`${Ir}Property`).toString());return{type:f,timeout:h,propCount:p,hasTransform:g}}function jm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>$m(n)+$m(t[r])))}function $m(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Hm(){return document.body.offsetHeight}function C1(t,e,n){const r=t[Qo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zm=Symbol("_vod"),P1=Symbol("_vsh"),k1=Symbol(""),O1=/(^|;)\s*display\s*:/;function x1(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&_c(r,a,"")}else for(const o in e)n[o]==null&&_c(r,o,"");for(const o in n)o==="display"&&(i=!0),_c(r,o,n[o])}else if(s){if(e!==n){const o=r[k1];o&&(n+=";"+o),r.cssText=n,i=O1.test(n)}}else e&&t.removeAttribute("style");zm in t&&(t[zm]=i?r.display:"",t[P1]&&(r.display="none"))}const qm=/\s*!important$/;function _c(t,e,n){if(ue(n))n.forEach(r=>_c(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=N1(t,e);qm.test(n)?t.setProperty(Us(r),n.replace(qm,""),"important"):t[r]=n}}const Wm=["Webkit","Moz","ms"],Uu={};function N1(t,e){const n=Uu[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return Uu[e]=r;r=vl(r);for(let s=0;s<Wm.length;s++){const i=Wm[s]+r;if(i in t)return Uu[e]=i}return e}const Km="http://www.w3.org/1999/xlink";function Gm(t,e,n,r,s,i=RI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Km,e.slice(6,e.length)):t.setAttributeNS(Km,e,n):n==null||i&&!uv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":vn(n)?String(n):n)}function Ym(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?TE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=uv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Nr(t,e,n,r){t.addEventListener(e,n,r)}function D1(t,e,n,r){t.removeEventListener(e,n,r)}const Qm=Symbol("_vei");function L1(t,e,n,r,s=null){const i=t[Qm]||(t[Qm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=M1(e);if(r){const u=i[e]=U1(r,s);Nr(t,a,u,l)}else o&&(D1(t,a,o,l),i[e]=void 0)}}const Xm=/(?:Once|Passive|Capture)$/;function M1(t){let e;if(Xm.test(t)){e={};let r;for(;r=t.match(Xm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Us(t.slice(2)),e]}let Bu=0;const V1=Promise.resolve(),F1=()=>Bu||(V1.then(()=>Bu=0),Bu=Date.now());function U1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(B1(r,n.value),e,5,[r])};return n.value=t,n.attached=F1(),n}function B1(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,j1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?C1(t,r,o):e==="style"?x1(t,n,r):ha(e)?Bh(e)||L1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$1(t,e,r,o))?(Ym(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Ym(t,hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gm(t,e,r,o))};function $1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jm(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jm(e)&&We(n)?!1:e in t}const Ri=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>hi(e,n):e};function H1(t){t.target.composing=!0}function Zm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sr=Symbol("_assign"),aF={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sr]=Ri(s);const i=r||s.props&&s.props.type==="number";Nr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=xc(a)),t[sr](a)}),n&&Nr(t,"change",()=>{t.value=t.value.trim()}),e||(Nr(t,"compositionstart",H1),Nr(t,"compositionend",Zm),Nr(t,"change",Zm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sr]=Ri(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?xc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},cF={deep:!0,created(t,e,n){t[sr]=Ri(n),Nr(t,"change",()=>{const r=t._modelValue,s=Xo(t),i=t.checked,o=t[sr];if(ue(r)){const a=Hh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Bi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(AE(t,i))})},mounted:eg,beforeUpdate(t,e,n){t[sr]=Ri(n),eg(t,e,n)}};function eg(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=Hh(e,r.props.value)>-1;else if(Bi(e))s=e.has(r.props.value);else{if(e===n)return;s=pa(e,AE(t,!0))}t.checked!==s&&(t.checked=s)}const lF={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Bi(e);Nr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xc(Xo(o)):Xo(o));t[sr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,jn(()=>{t._assigning=!1})}),t[sr]=Ri(r)},mounted(t,{value:e}){tg(t,e)},beforeUpdate(t,e,n){t[sr]=Ri(n)},updated(t,{value:e}){t._assigning||tg(t,e)}};function tg(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!Bi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Xo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Hh(e,a)>-1}else o.selected=e.has(a);else if(pa(Xo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xo(t){return"_value"in t?t._value:t.value}function AE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const z1=["ctrl","shift","alt","meta"],q1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>z1.some(n=>t[`${n}Key`]&&!e.includes(n))},uF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=q1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},RE=pt({patchProp:j1},E1);let ko,ng=!1;function W1(){return ko||(ko=jA(RE))}function K1(){return ko=ng?ko:$A(RE),ng=!0,ko}const G1=(...t)=>{const e=W1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=CE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,SE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Y1=(...t)=>{const e=K1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=CE(r);if(s)return n(s,!0,SE(s))},e};function SE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function CE(t){return We(t)?document.querySelector(t):t}const Q1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,X1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,J1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Z1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){eR(t);return}return e}function eR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Jo(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!J1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Q1.test(t)||X1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Z1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const tR=/#/g,nR=/&/g,rR=/\//g,sR=/=/g,od=/\+/g,iR=/%5e/gi,oR=/%60/gi,aR=/%7c/gi,cR=/%20/gi;function lR(t){return encodeURI(""+t).replace(aR,"|")}function xf(t){return lR(typeof t=="string"?t:JSON.stringify(t)).replace(od,"%2B").replace(cR,"+").replace(tR,"%23").replace(nR,"%26").replace(oR,"`").replace(iR,"^").replace(rR,"%2F")}function ju(t){return xf(t).replace(sR,"%3D")}function zc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function uR(t){return zc(t.replace(od," "))}function fR(t){return zc(t.replace(od," "))}function ad(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=uR(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=fR(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function hR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ju(t)}=${xf(n)}`).join("&"):`${ju(t)}=${xf(e)}`:ju(t)}function dR(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>hR(e,t[e])).filter(Boolean).join("&")}const pR=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,mR=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,gR=/^([/\\]\s*){2,}[^/\\]/,_R=/^[\s\0]*(blob|data|javascript|vbscript):$/i,yR=/\/$|\/\?|\/#/,vR=/^\.?\//;function _r(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?pR.test(t):mR.test(t)||(e.acceptRelative?gR.test(t):!1)}function ER(t){return!!t&&_R.test(t)}function Nf(t="",e){return e?yR.test(t):t.endsWith("/")}function Si(t="",e){if(!e)return(Nf(t)?t.slice(0,-1):t)||"/";if(!Nf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function PE(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Nf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function wR(t,e){if(OE(e)||_r(t))return t;const n=Si(e);return t.startsWith(n)?t:kl(n,t)}function rg(t,e){if(OE(e))return t;const n=Si(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function kE(t,e){const n=DE(t),r={...ad(n.search),...e};return n.search=dR(r),IR(n)}function OE(t){return!t||t==="/"}function bR(t){return t&&t!=="/"}function kl(t,...e){let n=t||"";for(const r of e.filter(s=>bR(s)))if(n){const s=r.replace(vR,"");n=PE(n)+s}else n=r;return n}function xE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const f of n)if(!(!f||f==="/")){for(const[h,p]of f.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&_r(r[0]))continue;r.pop(),s--;continue}if(h===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function TR(t,e){return zc(Si(t))===zc(Si(e))}const NE=Symbol.for("ufo:protocolRelative");function DE(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,p=""]=n;return{protocol:h.toLowerCase(),pathname:p,href:h+p,auth:"",host:"",search:"",hash:""}}if(!_r(t,{acceptRelative:!0}))return sg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:f}=sg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:f,[NE]:!r}}function sg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function IR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[NE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class AR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function RR(t){var l,u,f,h,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((f=t.request)==null?void 0:f.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new AR(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,y]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[y]}});return a}const SR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ig(t="GET"){return SR.has(t.toUpperCase())}function CR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const PR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),kR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function OR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return kR.test(e)?"json":PR.has(e)||e.startsWith("text/")?"text":"blob"}function xR(t,e,n,r){const s=NR((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function NR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Za(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const DR=new Set([408,409,425,429,500,502,503,504]),LR=new Set([101,204,205,304]);function LE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let f;typeof a.options.retry=="number"?f=a.options.retry:f=ig(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):DR.has(h))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:f-1})}}const u=RR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const f={request:l,options:xR(l,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await Za(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=wR(f.request,f.options.baseURL)),f.options.query&&(f.request=kE(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&ig(f.options.method)&&(CR(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let h;if(!f.options.signal&&f.options.timeout){const g=new r;h=setTimeout(()=>{const y=new Error("[TimeoutError]: The operation was aborted due to timeout");y.name="TimeoutError",y.code=23,g.abort(y)},f.options.timeout),f.options.signal=g.signal}try{f.response=await e(f.request,f.options)}catch(g){return f.error=g,f.options.onRequestError&&await Za(f,f.options.onRequestError),await s(f)}finally{h&&clearTimeout(h)}if((f.response.body||f.response._bodyInit)&&!LR.has(f.response.status)&&f.options.method!=="HEAD"){const g=(f.options.parseResponse?"json":f.options.responseType)||OR(f.response.headers.get("content-type")||"");switch(g){case"json":{const y=await f.response.text(),w=f.options.parseResponse||Jo;f.response._data=w(y);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[g]()}}return f.options.onResponse&&await Za(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await Za(f,f.options.onResponseError),await s(f)):f.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>LE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const qc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),MR=qc.fetch?(...t)=>qc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),VR=qc.Headers,FR=qc.AbortController,UR=LE({fetch:MR,Headers:VR,AbortController:FR}),BR=UR,jR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Wc=jR().app,$R=()=>Wc.baseURL,HR=()=>Wc.buildAssetsDir,cd=(...t)=>xE(ld(),HR(),...t),ld=(...t)=>{const e=Wc.cdnURL||Wc.baseURL;return t.length?xE(e,...t):e};globalThis.__buildAssetsURL=cd,globalThis.__publicAssetsURL=ld;globalThis.$fetch||(globalThis.$fetch=BR.create({baseURL:$R()}));"global"in globalThis||(globalThis.global=globalThis);function Df(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Df(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const zR={run:t=>t()},qR=()=>zR,ME=typeof console.createTask<"u"?console.createTask:qR;function WR(t,e){const n=e.shift(),r=ME(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function KR(t,e){const n=e.shift(),r=ME(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function $u(t,e){for(const n of[...t])n(e)}class GR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Df(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Df(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(WR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(KR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&$u(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&$u(this._after,s)}):(this._after&&s&&$u(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function VE(){return new GR}function YR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Lf.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{Lf.delete(u)}}}}function QR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=YR({...t,...r})),e[n]}}}const Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},og="__unctx__",XR=Kc[og]||(Kc[og]=QR()),JR=(t,e={})=>XR.get(t,e),ag="__unctx_async_handlers__",Lf=Kc[ag]||(Kc[ag]=new Set);function gi(t){const e=[];for(const s of Lf){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const cg={name:"page",mode:"out-in"},ZR=!1,eS=!1,tS={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},nS=null,rS="#__nuxt",FE="nuxt-app",lg=36e5,sS="vite:preloadError";function UE(t=FE){return JR(t,{asyncContext:!1})}const iS="__nuxt_plugin";function oS(t){var s;let e=0;const n={_id:t.id||FE||"nuxt-app",_scope:qh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.5"},get vue(){return n.vueApp.version}},payload:kn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:kn({}),state:mr({}),once:new Set,_errors:kn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!ma()?n._scope.run(()=>ug(n,i)):ug(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:kn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=VE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;ec(n,a,o),ec(n.vueApp.config.globalProperties,a,o)},ec(n.vueApp,"$nuxt",n),ec(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(sS,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=je);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function aS(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function cS(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function lS(t,e){const n=new Set,r=[],s=[],i=[];let o=0;async function a(l){var f;const u=((f=l.dependsOn)==null?void 0:f.filter(h=>e.some(p=>p._name===h)&&!n.has(h)))??[];if(u.length>0)r.push([new Set(u),l]);else{const h=cS(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(h.catch(p=>i.push(p))):await h}}for(const l of e)aS(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[iS]:!0,_name:e})}function ug(t,e,n){const r=()=>e();return UE(t._id).set(t),t.vueApp.runWithContext(r)}function BE(t){var n;let e;return ya()&&(e=(n=Cl())==null?void 0:n.appContext.app.$nuxt),e||(e=UE(t).tryUse()),e||null}function je(t){const e=BE(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Bs(t){return je().$config}function ec(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function uS(t,e){return{ctx:{table:t},matchAll:n=>$E(n,t)}}function jE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,jE(s)])):new Map(Object.entries(t[n]));return e}function fS(t){return uS(jE(t))}function $E(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of fg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of fg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...$E(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function fg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Hu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Mf(t,e,n=".",r){if(!Hu(e))return Mf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Hu(o)&&Hu(s[i])?s[i]=Mf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function hS(t){return(...e)=>e.reduce((n,r)=>Mf(n,r,"",t),{})}const HE=hS();function dS(t,e){try{return e in t}catch{return!1}}class Vf extends Error{constructor(n,r={}){super(n,r);rn(this,"statusCode",500);rn(this,"fatal",!1);rn(this,"unhandled",!1);rn(this,"statusMessage");rn(this,"data");rn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Ff(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=zE(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}rn(Vf,"__h3_error__",!0);function pS(t){if(typeof t=="string")return new Vf(t);if(mS(t))return t;const e=new Vf(t.message??t.statusMessage??"",{cause:t.cause||t});if(dS(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Ff(t.statusCode,e.statusCode):t.status&&(e.statusCode=Ff(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;zE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function mS(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const gS=/[^\u0009\u0020-\u007E]/g;function zE(t=""){return t.replace(gS,"")}function Ff(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const qE=Symbol("layout-meta"),ks=Symbol("route"),Tt=()=>{var t;return(t=je())==null?void 0:t.$router},Ol=()=>ya()?dt(ks,je()._route):je()._route;function fF(t){return t}const _S=()=>{try{if(je()._processingMiddleware)return!0}catch{return!1}return!1},yS=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Uf(t):Tt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([h,p])=>p!==void 0).map(([h,p])=>`${h.toLowerCase()}=${p}`).join(", ");return open(n,l,f),Promise.resolve()}const r=_r(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&ER(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=_S();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:f}=DE(t);return{path:l,...u&&{query:ad(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=Tt(),a=je();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Uf(t){return kE(t.path||"",t.query||{})+(t.hash||"")}const WE="__nuxt_error",xl=()=>tA(je().payload,"error"),vs=t=>{const e=Rs(t);try{const n=je(),r=xl();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},KE=async(t={})=>{const e=je(),n=xl();e.callHook("app:error:cleared",t),t.redirect&&await Tt().replace(t.redirect),n.value=nS},GE=t=>!!t&&typeof t=="object"&&WE in t,Rs=t=>{const e=pS(t);return Object.defineProperty(e,WE,{value:!0,configurable:!1,writable:!1}),e};function hg(t){const e=ES(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const vS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function ES(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=vS.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const wS=-1,bS=-2,TS=-3,IS=-4,AS=-5,RS=-6;function SS(t,e){return CS(JSON.parse(t),e)}function CS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===wS)return;if(i===TS)return NaN;if(i===IS)return 1/0;if(i===AS)return-1/0;if(i===RS)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let g=1;g<a.length;g+=1)f.add(s(a[g]));break;case"Map":const h=new Map;r[i]=h;for(let g=1;g<a.length;g+=2)h.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],y=a[1],w=hg(y),P=new g(w);r[i]=P;break}case"ArrayBuffer":{const g=a[1],y=hg(g);r[i]=y;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const f=a[u];f!==bS&&(l[u]=s(f))}}else{const l={};r[i]=l;for(const u in a){const f=a[u];l[u]=s(f)}}return r[i]}return s(0)}const PS=new Set(["link","style","script","noscript"]),kS=new Set(["title","titleTemplate","script","style","noscript"]),dg=new Set(["base","meta","link","style","script","noscript"]),OS=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),xS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),NS=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),DS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),LS=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const MS=["name","property","http-equiv"],VS=new Set(["viewport","description","keywords","robots"]);function YE(t){const e=t.split(":");return e.length?LS.has(e[1]):!1}function Bf(t){const{props:e,tag:n}=t;if(xS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of MS)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=VS.has(s),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(kS.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function pg(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Gc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Gc(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=Gc(s[o],e,o);return i}return s}function FS(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function QE(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=FS(n,r);return}if(NS.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function US(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=QE({tag:t,props:{}},n);return r.key&&PS.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function BS(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Gc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(US(s,o))}),r.flat()}const jf=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,mg={base:-10,title:10},jS={critical:-8,high:-1,low:2},gg={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},$S=/@import/,ho=t=>t===""||t===!0;function HS(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=jS[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:gg;if(e.tag in mg)n=mg[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=gg.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?ho(e.props.async)?n=s.script.async:e.props.src&&!ho(e.props.defer)&&!ho(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:ho(e.props.defer)&&e.props.src&&!ho(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&$S.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function _g(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function zS(t={}){var a;const e=VE();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=[],o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:l=>_g(o,l),push(l,u){const f={...u||{}};delete f.head;const h=f._index??o._entryCount++,p={_i:h,input:l,options:f},g={_poll(y=!1){o.dirty=!0,!y&&i.push(h),e.callHook("entries:updated",o)},dispose(){r.delete(h)&&g._poll(!0)},patch(y){(!f.mode||f.mode==="server"&&n||f.mode==="client"&&!n)&&(p.input=y,r.set(h,p),g._poll())}};return g.patch(l),g},async resolveTags(){var g;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.length;){const y=i.shift(),w=r.get(y);if(w){const P={tags:BS(w.input,t.propResolvers||[]).map(k=>Object.assign(k,w.options)),entry:w};await e.callHook("entries:normalize",P),w._tags=P.tags.map((k,S)=>(k._w=HS(o,k),k._p=(w._i<<10)+S,k._d=Bf(k),k))}}let u=!1;l.entries.flatMap(y=>(y._tags||[]).map(w=>({...w,props:{...w.props}}))).sort(jf).reduce((y,w)=>{const P=String(w._d||w._p);if(!y.has(P))return y.set(P,w);const k=y.get(P);if(((w==null?void 0:w.tagDuplicateStrategy)||(DS.has(w.tag)?"merge":null)||(w.key&&w.key===k.key?"merge":null))==="merge"){const _={...k.props};Object.entries(w.props).forEach(([R,D])=>_[R]=R==="style"?new Map([...k.props.style||new Map,...D]):R==="class"?new Set([...k.props.class||new Set,...D]):D),y.set(P,{...w,props:_})}else w._p>>10===k._p>>10&&w.tag==="meta"&&YE(P)?(y.set(P,Object.assign([...Array.isArray(k)?k:[k],w],w)),u=!0):(w._w===k._w?w._p>k._p:(w==null?void 0:w._w)<(k==null?void 0:k._w))&&y.set(P,w);return y},l.tagMap);const f=l.tagMap.get("title"),h=l.tagMap.get("titleTemplate");if(o._title=f==null?void 0:f.textContent,h){const y=h==null?void 0:h.textContent;if(o._titleTemplate=y,y){let w=typeof y=="function"?y(f==null?void 0:f.textContent):y;typeof w=="string"&&!o.plugins.has("template-params")&&(w=w.replace("%s",(f==null?void 0:f.textContent)||"")),f?w===null?l.tagMap.delete("title"):l.tagMap.set("title",{...f,textContent:w}):(h.tag="title",h.textContent=w)}}l.tags=Array.from(l.tagMap.values()),u&&(l.tags=l.tags.flat().sort(jf)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const p=[];for(const y of l.tags){const{innerHTML:w,tag:P,props:k}=y;if(OS.has(P)&&!(Object.keys(k).length===0&&!y.innerHTML&&!y.textContent)&&!(P==="meta"&&!k.content&&!k["http-equiv"]&&!k.charset)){if(P==="script"&&w){if((g=k.type)!=null&&g.endsWith("json")){const S=typeof w=="string"?w:JSON.stringify(w);y.innerHTML=S.replace(/</g,"\\u003C")}else typeof w=="string"&&(y.innerHTML=w.replace(new RegExp(`</${P}`,"g"),`<\\/${P}`));y._d=Bf(y)}p.push(y)}}return p}};return((t==null?void 0:t.plugins)||[]).forEach(l=>_g(o,l)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(l=>l&&o.push(l)),o}const Or="%separator",qS=new RegExp(`${Or}(?:\\s*${Or})*`,"g");function WS(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function tc(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Or);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Or||!i.includes(a))return a;const l=WS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Or)&&(t=t.slice(0,-Or.length)),t.startsWith(Or)&&(t=t.slice(Or.length)),t=t.replace(qS,n||"").trim()),t}const yg=t=>t.includes(":key")?t:t.split(":").join(":key:"),KS={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=yg(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=yg(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(jf))}}},GS={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function $f(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>$f(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await $f(t[r]);return n}return t}const YS={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push($f(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},QS={meta:"content",link:"href",htmlAttrs:"lang"},XS=["innerHTML","textContent"],JS=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=tc(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=QS[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=tc(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of XS)typeof o[l]=="string"&&(o[l]=tc(o[l],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=tc(n.textContent,t._templateParams,t._separator))}}}),ZS=(t,e)=>Ye(e)?GI(e):e,ud="usehead";function eC(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(ud,t)}}.install}function tC(){if(ya()){const t=dt(ud);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function nC(t,e={}){const n=e.head||tC();return n.ssr?n.push(t||{},e):rC(n,t,e)}function rC(t,e,n={}){const r=Gt(!1);let s;return WA(()=>{const o=r.value?{}:Gc(e,ZS);s?s.patch(o):s=t.push(o,n)}),Cl()&&(Hi(()=>{s.dispose()}),Hv(()=>{r.value=!0}),$v(()=>{r.value=!1})),s}function sC(t){var n;const e=t||BE();return((n=e==null?void 0:e.ssrContext)==null?void 0:n.head)||(e==null?void 0:e.runWithContext(()=>{if(ya())return dt(ud)}))}function vg(t,e={}){const n=sC(e.nuxt);if(n)return nC(t,{head:n,...e})}const iC="modulepreload",oC=function(t,e){return new URL(t,e).href},Eg={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(f=>{if(f=oC(f,r),f in Eg)return;Eg[f]=!0;const h=f.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let w=a.length-1;w>=0;w--){const P=a[w];if(P.href===f&&(!h||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${p}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":iC,h||(y.as="script"),y.crossOrigin="",y.href=f,u&&y.setAttribute("nonce",u),document.head.appendChild(y),h)return new Promise((w,P)=>{y.addEventListener("load",w),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let yc,vc;function aC(){return yc=$fetch(cd(`builds/meta/${Bs().app.buildId}.json`),{responseType:"json"}),yc.then(t=>{vc=fS(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),yc}function Nl(){return yc||aC()}async function fd(t){const e=typeof t=="string"?t:t.path;if(await Nl(),!vc)return console.error("[nuxt] Error creating app manifest matcher.",vc),{};try{return HE({},...vc.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function wg(t,e={}){if(!await JE(t))return null;const r=await lC(t,e);return await XE(r)||null}const cC="_payload.json";async function lC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||_r(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Bs(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await JE(t)?i:r.app.baseURL;return kl(o,n.pathname,cC+(s?`?${s}`:""))}async function XE(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(ZE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function JE(t=Ol().path){const e=je();return t=Si(t),(await Nl()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await fd({path:t});return!!r.prerender&&!r.redirect})}let _s=null;async function uC(){var r;if(_s)return _s;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await ZE(t.textContent||""),n=t.dataset.src?await XE(t.dataset.src):void 0;return _s={...e,...n,...window.__NUXT__},(r=_s.config)!=null&&r.public&&(_s.config.public=mr(_s.config.public)),_s}async function ZE(t){return await SS(t,je()._payloadRevivers)}function fC(t,e){je()._payloadRevivers[t]=e}const hC=[["NuxtError",t=>Rs(t)],["EmptyShallowRef",t=>Cs(t==="_"?void 0:t==="0n"?BigInt(0):Jo(t))],["EmptyRef",t=>Gt(t==="_"?void 0:t==="0n"?BigInt(0):Jo(t))],["ShallowRef",t=>Cs(t)],["ShallowReactive",t=>kn(t)],["Ref",t=>Gt(t)],["Reactive",t=>mr(t)]],dC=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of hC)fC(r,s);Object.assign(t.payload,([e,n]=gi(()=>t.runWithContext(uC)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function hd(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var g;const i=new Map,o=new Promise(y=>{t.resolveTags().then(w=>{y(w.map(P=>{const k=i.get(P._d)||0,S={tag:P,id:(k?`${P._d}:${k}`:P._d)||pg(P),shouldRender:!0};return P._d&&YE(P._d)&&i.set(P._d,k+1),S}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const y of["body","head"]){const w=(g=n[y])==null?void 0:g.children;for(const P of w){const k=P.tagName.toLowerCase();if(!dg.has(k))continue;const S=QE({tag:k,props:{}},{innerHTML:P.innerHTML,...P.getAttributeNames().reduce((_,R)=>(_[R]=P.getAttribute(R),_),{})||{}});if(S.key=P.getAttribute("data-hid")||void 0,S._d=Bf(S)||pg(S),a.elMap.has(S._d)){let _=1,R=S._d;for(;a.elMap.has(R);)R=`${S._d}:${_++}`;a.elMap.set(R,P)}else a.elMap.set(S._d,P)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(y,w,P){const k=`${y}:${w}`;a.sideEffects[k]=P,delete a.pendingSideEffects[k]}function u({id:y,$el:w,tag:P}){const k=P.tag.endsWith("Attrs");a.elMap.set(y,w),k||(P.textContent&&P.textContent!==w.textContent&&(w.textContent=P.textContent),P.innerHTML&&P.innerHTML!==w.innerHTML&&(w.innerHTML=P.innerHTML),l(y,"el",()=>{w==null||w.remove(),a.elMap.delete(y)}));for(const S in P.props){if(!Object.prototype.hasOwnProperty.call(P.props,S))continue;const _=P.props[S];if(S.startsWith("on")&&typeof _=="function"){const D=w==null?void 0:w.dataset;if(D&&D[`${S}fired`]){const M=S.slice(0,-5);_.call(w,new Event(M.substring(2)))}w.getAttribute(`data-${S}`)!==""&&((P.tag==="bodyAttrs"?n.defaultView:w).addEventListener(S.substring(2),_.bind(w)),w.setAttribute(`data-${S}`,""));continue}const R=`attr:${S}`;if(S==="class"){if(!_)continue;for(const D of _)k&&l(y,`${R}:${D}`,()=>w.classList.remove(D)),!w.classList.contains(D)&&w.classList.add(D)}else if(S==="style"){if(!_)continue;for(const[D,M]of _)l(y,`${R}:${D}`,()=>{w.style.removeProperty(D)}),w.style.setProperty(D,M)}else _!==!1&&_!==null&&(w.getAttribute(S)!==_&&w.setAttribute(S,_===!0?"":String(_)),k&&l(y,R,()=>w.removeAttribute(S)))}}const f=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const y of p){const{tag:w,shouldRender:P,id:k}=y;if(P){if(w.tag==="title"){n.title=w.textContent,l("title","",()=>n.title=a.title);continue}y.$el=y.$el||a.elMap.get(k),y.$el?u(y):dg.has(w.tag)&&f.push(y)}}for(const y of f){const w=y.tag.tagPosition||"head";y.$el=n.createElement(y.tag.tag),u(y),h[w]=h[w]||n.createDocumentFragment(),h[w].appendChild(y.$el)}for(const y of p)await t.hooks.callHook("dom:renderTag",y,n,l);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const y in a.pendingSideEffects)a.pendingSideEffects[y]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function pC(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||hd;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return zS({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function mC(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function gC(t={}){const e=pC({domOptions:{render:mC(()=>hd(e),n=>setTimeout(n,0))},...t});return e.install=eC(e),e}const _C={disableDefaults:!0,disableCapoSorting:!1,plugins:[GS,YS,JS,KS]},yC=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=gC(_C);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await hd(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ti=typeof document<"u";function ew(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ew(t.default)}const Oe=Object.assign;function zu(t,e){const n={};for(const r in e){const s=e[r];n[r]=wn(s)?s.map(t):t(s)}return n}const Oo=()=>{},wn=Array.isArray,tw=/#/g,EC=/&/g,wC=/\//g,bC=/=/g,TC=/\?/g,nw=/\+/g,IC=/%5B/g,AC=/%5D/g,rw=/%5E/g,RC=/%60/g,sw=/%7B/g,SC=/%7C/g,iw=/%7D/g,CC=/%20/g;function dd(t){return encodeURI(""+t).replace(SC,"|").replace(IC,"[").replace(AC,"]")}function PC(t){return dd(t).replace(sw,"{").replace(iw,"}").replace(rw,"^")}function Hf(t){return dd(t).replace(nw,"%2B").replace(CC,"+").replace(tw,"%23").replace(EC,"%26").replace(RC,"`").replace(sw,"{").replace(iw,"}").replace(rw,"^")}function kC(t){return Hf(t).replace(bC,"%3D")}function OC(t){return dd(t).replace(tw,"%23").replace(TC,"%3F")}function xC(t){return t==null?"":OC(t).replace(wC,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NC=/\/$/,DC=t=>t.replace(NC,"");function qu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=FC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Zo(o)}}function LC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function MC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ci(e.matched[r],n.matched[s])&&ow(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ci(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ow(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VC(t[n],e[n]))return!1;return!0}function VC(t,e){return wn(t)?Tg(t,e):wn(e)?Tg(e,t):t===e}function Tg(t,e){return wn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function FC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ea;(function(t){t.pop="pop",t.push="push"})(ea||(ea={}));var xo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xo||(xo={}));function UC(t){if(!t)if(ti){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DC(t)}const BC=/^[^#]+#/;function jC(t,e){return t.replace(BC,"#")+e}function $C(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dl=()=>({left:window.scrollX,top:window.scrollY});function HC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=$C(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ig(t,e){return(history.state?history.state.position-e:-1)+t}const zf=new Map;function zC(t,e){zf.set(t,e)}function qC(t){const e=zf.get(t);return zf.delete(t),e}let WC=()=>location.protocol+"//"+location.host;function aw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),bg(l,"")}return bg(n,t)+r+s}function KC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=aw(t,location),y=n.value,w=e.value;let P=0;if(p){if(n.value=g,e.value=p,o&&o===y){o=null;return}P=w?p.position-w.position:0}else r(g);s.forEach(k=>{k(n.value,y,{delta:P,type:ea.pop,direction:P?P>0?xo.forward:xo.back:xo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Dl()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function Ag(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dl():null}}function GC(t){const{history:e,location:n}=window,r={value:aw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:WC()+t+l;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,u){const f=Oe({},e.state,Ag(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function a(l,u){const f=Oe({},s.value,e.state,{forward:l,scroll:Dl()});i(f.current,f,!0);const h=Oe({},Ag(r.value,l,null),{position:f.position+1},u);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function YC(t){t=UC(t);const e=GC(t),n=KC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:jC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function QC(t){return typeof t=="string"||t&&typeof t=="object"}function cw(t){return typeof t=="string"||typeof t=="symbol"}const lw=Symbol("");var Rg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rg||(Rg={}));function Pi(t,e){return Oe(new Error,{type:t,[lw]:!0},e)}function Yn(t,e){return t instanceof Error&&lw in t&&(e==null||!!(t.type&e))}const Sg="[^/]+?",XC={sensitive:!1,strict:!1,start:!0,end:!0},JC=/[.+*?^${}()[\]/\\]/g;function ZC(t,e){const n=Oe({},XC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(JC,"\\$&"),g+=40;else if(p.type===1){const{value:y,repeatable:w,optional:P,regexp:k}=p;i.push({name:y,repeatable:w,optional:P});const S=k||Sg;if(S!==Sg){g+=10;try{new RegExp(`(${S})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${y}" (${S}): `+R.message)}}let _=w?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(_=P&&u.length<2?`(?:/${_})`:"/"+_),P&&(_+="?"),s+=_,g+=20,P&&(g+=-8),w&&(g+=-20),S===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",y=i[p-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function l(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:P}=g,k=y in u?u[y]:"";if(wn(k)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const S=wn(k)?k.join("/"):k;if(!S)if(P)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);f+=S}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function eP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function uw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Cg(r))return 1;if(Cg(s))return-1}return s.length-r.length}function Cg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tP={type:0,value:""},nP=/[a-zA-Z0-9_]/;function rP(t){if(!t)return[[]];if(t==="/")return[[tP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:nP.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function sP(t,e,n){const r=ZC(rP(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function iP(t,e){const n=[],r=new Map;e=xg({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,g){const y=!g,w=kg(h);w.aliasOf=g&&g.record;const P=xg(e,h),k=[w];if("alias"in h){const R=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of R)k.push(kg(Oe({},w,{components:g?g.record.components:w.components,path:D,aliasOf:g?g.record:w})))}let S,_;for(const R of k){const{path:D}=R;if(p&&D[0]!=="/"){const M=p.record.path,T=M[M.length-1]==="/"?"":"/";R.path=p.record.path+(D&&T+D)}if(S=sP(R,p,P),g?g.alias.push(S):(_=_||S,_!==S&&_.alias.push(S),y&&h.name&&!Og(S)&&o(h.name)),fw(S)&&l(S),w.children){const M=w.children;for(let T=0;T<M.length;T++)i(M[T],S,g&&g.children[T])}g=g||S}return _?()=>{o(_)}:Oo}function o(h){if(cw(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const p=cP(h,n);n.splice(p,0,h),h.record.name&&!Og(h)&&r.set(h.record.name,h)}function u(h,p){let g,y={},w,P;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw Pi(1,{location:h});P=g.record.name,y=Oe(Pg(p.params,g.keys.filter(_=>!_.optional).concat(g.parent?g.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),h.params&&Pg(h.params,g.keys.map(_=>_.name))),w=g.stringify(y)}else if(h.path!=null)w=h.path,g=n.find(_=>_.re.test(w)),g&&(y=g.parse(w),P=g.record.name);else{if(g=p.name?r.get(p.name):n.find(_=>_.re.test(p.path)),!g)throw Pi(1,{location:h,currentLocation:p});P=g.record.name,y=Oe({},p.params,h.params),w=g.stringify(y)}const k=[];let S=g;for(;S;)k.unshift(S.record),S=S.parent;return{name:P,path:w,params:y,matched:k,meta:aP(k)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Pg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:oP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function oP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Og(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function xg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;uw(t,e[i])<0?r=i:n=i+1}const s=lP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function lP(t){let e=t;for(;e=e.parent;)if(fw(e)&&uw(t,e)===0)return e}function fw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(nw," "),o=i.indexOf("="),a=Zo(o<0?i:i.slice(0,o)),l=o<0?null:Zo(i.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Ng(t){let e="";for(let n in t){const r=t[n];if(n=kC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(r)?r.map(i=>i&&Hf(i)):[r&&Hf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function fP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const hP=Symbol(""),Dg=Symbol(""),pd=Symbol(""),md=Symbol(""),qf=Symbol("");function po(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Pi(4,{from:n,to:e})):p instanceof Error?l(p):QC(p)?l(Pi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>l(p))})}function Wu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ew(l)){const f=(l.__vccOpts||l)[e];f&&i.push(xr(f,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=vC(f)?f.default:f;o.mods[a]=f,o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&xr(g,n,r,o,a,s)()}))}}return i}function Lg(t){const e=dt(pd),n=dt(md),r=Fe(()=>{const l=rt(t.to);return e.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Ci.bind(null,f));if(p>-1)return p;const g=Mg(l[u-2]);return u>1&&Mg(f)===g&&h[h.length-1].path!==g?h.findIndex(Ci.bind(null,l[u-2])):p}),i=Fe(()=>s.value>-1&&_P(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&ow(n.params,r.value.params));function a(l={}){if(gP(l)){const u=e[rt(t.replace)?"replace":"push"](rt(t.to)).catch(Oo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function dP(t){return t.length===1?t[0]:t}const pP=Tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lg,setup(t,{slots:e}){const n=mr(Lg(t)),{options:r}=dt(pd),s=Fe(()=>({[Vg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&dP(e.default(n));return t.custom?i:ct("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),mP=pP;function gP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _P(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!wn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Mg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vg=(t,e,n)=>t??e??n,yP=Tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dt(qf),s=Fe(()=>t.route||r.value),i=dt(Dg,0),o=Fe(()=>{let u=rt(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Fe(()=>s.value.matched[o.value]);Hr(Dg,Fe(()=>o.value+1)),Hr(hP,a),Hr(qf,s);const l=Gt();return Ln(()=>[l.value,a.value,t.name],([u,f,h],[p,g,y])=>{f&&(f.instances[h]=u,g&&g!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!Ci(f,g)||!p)&&(f.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return Fg(n.default,{Component:p,route:u});const g=h.props[f],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=ct(p,Oe({},y,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return Fg(n.default,{Component:P,route:u})||P}}});function Fg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hw=yP;function vP(t){const e=iP(t.routes,t),n=t.parseQuery||uP,r=t.stringifyQuery||Ng,s=t.history,i=po(),o=po(),a=po(),l=Cs(on);let u=on;ti&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=zu.bind(null,B=>""+B),h=zu.bind(null,xC),p=zu.bind(null,Zo);function g(B,ee){let J,re;return cw(B)?(J=e.getRecordMatcher(B),re=ee):re=B,e.addRoute(re,J)}function y(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function w(){return e.getRoutes().map(B=>B.record)}function P(B){return!!e.getRecordMatcher(B)}function k(B,ee){if(ee=Oe({},ee||l.value),typeof B=="string"){const N=qu(n,B,ee.path),V=e.resolve({path:N.path},ee),$=s.createHref(N.fullPath);return Oe(N,V,{params:p(V.params),hash:Zo(N.hash),redirectedFrom:void 0,href:$})}let J;if(B.path!=null)J=Oe({},B,{path:qu(n,B.path,ee.path).path});else{const N=Oe({},B.params);for(const V in N)N[V]==null&&delete N[V];J=Oe({},B,{params:h(N)}),ee.params=h(ee.params)}const re=e.resolve(J,ee),Ie=B.hash||"";re.params=f(p(re.params));const De=LC(r,Oe({},B,{hash:PC(Ie),path:re.path})),C=s.createHref(De);return Oe({fullPath:De,hash:Ie,query:r===Ng?fP(B.query):B.query||{}},re,{redirectedFrom:void 0,href:C})}function S(B){return typeof B=="string"?qu(n,B,l.value.path):Oe({},B)}function _(B,ee){if(u!==B)return Pi(8,{from:ee,to:B})}function R(B){return T(B)}function D(B){return R(Oe(S(B),{replace:!0}))}function M(B){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let re=typeof J=="function"?J(B):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=S(re):{path:re},re.params={}),Oe({query:B.query,hash:B.hash,params:re.path!=null?{}:B.params},re)}}function T(B,ee){const J=u=k(B),re=l.value,Ie=B.state,De=B.force,C=B.replace===!0,N=M(J);if(N)return T(Oe(S(N),{state:typeof N=="object"?Oe({},Ie,N.state):Ie,force:De,replace:C}),ee||J);const V=J;V.redirectedFrom=ee;let $;return!De&&MC(r,re,J)&&($=Pi(16,{to:V,from:re}),tn(re,re,!0,!1)),($?Promise.resolve($):I(V,re)).catch(U=>Yn(U)?Yn(U,2)?U:dn(U):ne(U,V,re)).then(U=>{if(U){if(Yn(U,2))return T(Oe({replace:C},S(U.to),{state:typeof U.to=="object"?Oe({},Ie,U.to.state):Ie,force:De}),ee||V)}else U=O(V,re,!0,C,Ie);return x(V,re,U),U})}function E(B,ee){const J=_(B,ee);return J?Promise.reject(J):Promise.resolve()}function v(B){const ee=vr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function I(B,ee){let J;const[re,Ie,De]=EP(B,ee);J=Wu(re.reverse(),"beforeRouteLeave",B,ee);for(const N of re)N.leaveGuards.forEach(V=>{J.push(xr(V,B,ee))});const C=E.bind(null,B,ee);return J.push(C),$t(J).then(()=>{J=[];for(const N of i.list())J.push(xr(N,B,ee));return J.push(C),$t(J)}).then(()=>{J=Wu(Ie,"beforeRouteUpdate",B,ee);for(const N of Ie)N.updateGuards.forEach(V=>{J.push(xr(V,B,ee))});return J.push(C),$t(J)}).then(()=>{J=[];for(const N of De)if(N.beforeEnter)if(wn(N.beforeEnter))for(const V of N.beforeEnter)J.push(xr(V,B,ee));else J.push(xr(N.beforeEnter,B,ee));return J.push(C),$t(J)}).then(()=>(B.matched.forEach(N=>N.enterCallbacks={}),J=Wu(De,"beforeRouteEnter",B,ee,v),J.push(C),$t(J))).then(()=>{J=[];for(const N of o.list())J.push(xr(N,B,ee));return J.push(C),$t(J)}).catch(N=>Yn(N,8)?N:Promise.reject(N))}function x(B,ee,J){a.list().forEach(re=>v(()=>re(B,ee,J)))}function O(B,ee,J,re,Ie){const De=_(B,ee);if(De)return De;const C=ee===on,N=ti?history.state:{};J&&(re||C?s.replace(B.fullPath,Oe({scroll:C&&N&&N.scroll},Ie)):s.push(B.fullPath,Ie)),l.value=B,tn(B,ee,J,C),dn()}let A;function ge(){A||(A=s.listen((B,ee,J)=>{if(!In.listening)return;const re=k(B),Ie=M(re);if(Ie){T(Oe(Ie,{replace:!0,force:!0}),re).catch(Oo);return}u=re;const De=l.value;ti&&zC(Ig(De.fullPath,J.delta),Dl()),I(re,De).catch(C=>Yn(C,12)?C:Yn(C,2)?(T(Oe(S(C.to),{force:!0}),re).then(N=>{Yn(N,20)&&!J.delta&&J.type===ea.pop&&s.go(-1,!1)}).catch(Oo),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ne(C,re,De))).then(C=>{C=C||O(re,De,!1),C&&(J.delta&&!Yn(C,8)?s.go(-J.delta,!1):J.type===ea.pop&&Yn(C,20)&&s.go(-1,!1)),x(re,De,C)}).catch(Oo)}))}let Ee=po(),Z=po(),se;function ne(B,ee,J){dn(B);const re=Z.list();return re.length?re.forEach(Ie=>Ie(B,ee,J)):console.error(B),Promise.reject(B)}function Ue(){return se&&l.value!==on?Promise.resolve():new Promise((B,ee)=>{Ee.add([B,ee])})}function dn(B){return se||(se=!B,ge(),Ee.list().forEach(([ee,J])=>B?J(B):ee()),Ee.reset()),B}function tn(B,ee,J,re){const{scrollBehavior:Ie}=t;if(!ti||!Ie)return Promise.resolve();const De=!J&&qC(Ig(B.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return jn().then(()=>Ie(B,ee,De)).then(C=>C&&HC(C)).catch(C=>ne(C,B,ee))}const Ke=B=>s.go(B);let Ge;const vr=new Set,In={currentRoute:l,listening:!0,addRoute:g,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:w,resolve:k,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:Ue,install(B){const ee=this;B.component("RouterLink",mP),B.component("RouterView",hw),B.config.globalProperties.$router=ee,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(l)}),ti&&!Ge&&l.value===on&&(Ge=!0,R(s.location).catch(Ie=>{}));const J={};for(const Ie in on)Object.defineProperty(J,Ie,{get:()=>l.value[Ie],enumerable:!0});B.provide(pd,ee),B.provide(md,kn(J)),B.provide(qf,l);const re=B.unmount;vr.add(B),B.unmount=function(){vr.delete(B),vr.size<1&&(u=on,A&&A(),A=null,l.value=on,Ge=!1,se=!1),re()}}};function $t(B){return B.reduce((ee,J)=>ee.then(()=>v(J)),Promise.resolve())}return In}function EP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ci(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Ci(u,l))||s.push(l))}return[n,r,s]}function dw(t){return dt(md)}const wP=/(:\w+)\([^)]+\)/g,bP=/(:\w+)[?+*]/g,TP=/:\w+/g,IP=(t,e)=>e.path.replace(wP,"$1").replace(bP,"$1").replace(TP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Wf=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&IP(t.route,n));return typeof r=="function"?r(t.route):r},AP=(t,e)=>({default:()=>t?ct(vA,t===!0?{}:t,e):e});function gd(t){return Array.isArray(t)?t:[t]}const Ku=[{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./CLQ6eGGd.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./DVtQY5nQ.js"),__vite__mapDeps([2,3,4]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./D1xXB8-s.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./BZ2fDh2W.js"),__vite__mapDeps([5,6,7]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./BWnSy1Lv.js"),__vite__mapDeps([8,9]),import.meta.url)},{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./gaZyjX9T.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:{middleware:"auth"},component:()=>ke(()=>import("./C6xKcdR4.js"),__vite__mapDeps([10,3,11]),import.meta.url)},{name:"Admin",path:"/Admin",meta:{middleware:"auth"},component:()=>ke(()=>import("./Bp-xPZX0.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./P3syDIzE.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./iL9jmjRJ.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./DLic-DL-.js"),[],import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./D7GGVRCx.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./D4BwumbM.js"),[],import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./ByAfwsdn.js"),__vite__mapDeps([16,6,7,17]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./Cxg0dD6l.js"),__vite__mapDeps([18,19,6,7,20]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./BiwnLNsp.js"),__vite__mapDeps([21,22]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./DEBBlAav.js"),__vite__mapDeps([23,6,7]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./dEjRAvjN.js"),__vite__mapDeps([24,6,7,25]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./DgokRALJ.js"),[],import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./CQqQK9Sl.js"),__vite__mapDeps([26,6,7]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./CmAXF1EF.js"),__vite__mapDeps([27,6,7]),import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:{middleware:"auth"},component:()=>ke(()=>import("./f2ivbtqO.js"),__vite__mapDeps([28,19,11,18,6,7,20,29]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./3M_2gcde.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./oADzXhAa.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./CeIUfi9a.js"),__vite__mapDeps([30,6,7,31]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./CqoV5lsL.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./C0RKLsz7.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./D0fta8Ev.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./CY9cUjtJ.js"),[],import.meta.url)}],pw=(t,e)=>({default:()=>{var n;return t?ct(T1,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),RP=/(:\w+)\([^)]+\)/g,SP=/(:\w+)[?+*]/g,CP=/:\w+/g;function Ug(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(RP,"$1").replace(SP,"$1").replace(CP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function PP(t,e){return t===e||e===on?!1:Ug(t)!==Ug(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const kP={scrollBehavior(t,e,n){var l;const r=je(),s=((l=Tt().options)==null?void 0:l.scrollBehaviorType)??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:mw(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;let o=n||void 0;!o&&PP(t,e)&&(o={left:0,top:0});const a=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(u=>{if(e===on){u(Bg(t,"instant",o));return}r.hooks.hookOnce(a,()=>{requestAnimationFrame(()=>u(Bg(t,"instant",o)))})})}};function mw(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Bg(t,e,n){return n||(t.hash?{el:t.hash,top:mw(t.hash),behavior:e}:{left:0,top:0,behavior:e})}const OP={hashMode:!1,scrollBehaviorType:"auto"},An={...OP,...kP},xP=async(t,e)=>{var o;let n,r;if(!((o=t.meta)!=null&&o.validate))return;const s=([n,r]=gi(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=Rs({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},NP=async t=>{let e,n;const r=([e,n]=gi(()=>fd({path:t.path})),e=await e,n(),e);if(r.redirect)return _r(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},DP=[xP,NP],No={auth:()=>ke(()=>import("./DJskRQx6.js"),[],import.meta.url)};function LP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),rg(f,"")}const a=rg(r,t),l=!n||TR(a,n)?a:n;return l+(l.includes("?")?"":s)+i}const MP=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var P;let e,n,r=Bs().app.baseURL;const s=((P=An.history)==null?void 0:P.call(An,r))??YC(r),i=An.routes?([e,n]=gi(()=>An.routes(Ku)),e=await e,n(),e??Ku):Ku;let o;const a=vP({...An,scrollBehavior:(k,S,_)=>{if(S===on){o=_;return}if(An.scrollBehavior){if(a.options.scrollBehavior=An.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return An.scrollBehavior(k,on,o||_)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Cs(a.currentRoute.value);a.afterEach((k,S)=>{l.value=S}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=LP(r,window.location,t.payload.path),f=Cs(a.currentRoute.value),h=()=>{f.value=a.currentRoute.value};t.hook("page:finish",h),a.afterEach((k,S)=>{var _,R,D,M;((R=(_=k.matched[0])==null?void 0:_.components)==null?void 0:R.default)===((M=(D=S.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&h()});const p={};for(const k in f.value)Object.defineProperty(p,k,{get:()=>f.value[k],enumerable:!0});t._route=kn(p),t._middleware||(t._middleware={global:[],named:{}});const g=xl();a.afterEach(async(k,S,_)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(KE),_&&await t.callHook("page:loading:end")});try{[e,n]=gi(()=>a.isReady()),await e,n()}catch(k){[e,n]=gi(()=>t.runWithContext(()=>vs(k))),await e,n()}const y=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;h();const w=t.payload.state._layout;return a.beforeEach(async(k,S)=>{var _;await t.callHook("page:loading:start"),k.meta=mr(k.meta),t.isHydrating&&w&&!ar(k.meta.layout)&&(k.meta.layout=w),t._processingMiddleware=!0;{const R=new Set([...DP,...t._middleware.global]);for(const D of k.matched){const M=D.meta.middleware;if(M)for(const T of gd(M))R.add(T)}{const D=await t.runWithContext(()=>fd({path:k.path}));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?R.add(M):R.delete(M)}for(const D of R){const M=typeof D=="string"?t._middleware.named[D]||await((_=No[D])==null?void 0:_.call(No).then(T=>T.default||T)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);try{const T=await t.runWithContext(()=>M(k,S));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const E=T||Rs({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>vs(E)),!1}if(T===!0)continue;if(T===!1)return T;if(T)return GE(T)&&T.fatal&&await t.runWithContext(()=>vs(T)),T}catch(T){const E=Rs(T);return E.fatal&&await t.runWithContext(()=>vs(E)),E}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(k,S)=>{k.matched.length===0&&await t.runWithContext(()=>vs(Rs({statusCode:404,fatal:!1,statusMessage:`Page not found: ${k.fullPath}`,data:{path:k.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in y&&(y.name=void 0),await a.replace({...y,force:!0}),a.options.scrollBehavior=An.scrollBehavior}catch(k){await t.runWithContext(()=>vs(k))}}),{provide:{router:a}}}}),Kf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),VP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Ll=t=>{const e=je();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Kf(()=>t())}):Kf(()=>t())},FP=Zt({name:"nuxt:payload",setup(t){const e=new Set;Tt().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await wg(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),Ll(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await wg(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Nl,1e3)})}}),UP=Zt(()=>{const t=Tt();Ll(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),BP=Zt(t=>{let e;async function n(){const r=await Nl();e&&clearTimeout(e),e=setTimeout(n,lg);try{const s=await $fetch(cd("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Ll(()=>{e=setTimeout(n,lg)})});function jP(t={}){const e=t.path||window.location.pathname;let n={};try{n=Jo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:je().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const $P=Zt({name:"nuxt:chunk-reload",setup(t){const e=Tt(),n=Bs(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:kl(n.app.baseURL,i.fullPath);jP({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),HP=Zt({name:"nuxt:global-components"}),Ur={default:_A(()=>ke(()=>import("./DXao1OxE.js"),__vite__mapDeps([32,19,3,33]),import.meta.url).then(t=>t.default||t))};function zP(t){if(t!=null&&t.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function gw(t,e=Tt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises||(e._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>gw(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const qP=Zt({name:"nuxt:prefetch",setup(t){const e=Tt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Ur[r]=="function"&&await Ur[r]()})}),t.hooks.hook("link:prefetch",n=>{if(_r(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=gd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof No[o]=="function"&&No[o]();typeof s=="string"&&s in Ur&&zP(Ur[s])})}}),WP=()=>{};var jg={};/**
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
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},KP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[f],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new GP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YP=function(t){const e=_w(t);return yw.encodeByteArray(e,!0)},Yc=function(t){return YP(t).replace(/\./g,"")},vw=function(t){try{return yw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XP=()=>QP().__FIREBASE_DEFAULTS__,JP=()=>{if(typeof process>"u"||typeof jg>"u")return;const t=jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vw(t[1]);return e&&JSON.parse(e)},Ml=()=>{try{return WP()||XP()||JP()||ZP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ew=t=>{var e,n;return(n=(e=Ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ww=t=>{const e=Ew(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bw=()=>{var t;return(t=Ml())===null||t===void 0?void 0:t.config},Tw=t=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ek{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function os(t){return t.endsWith(".cloudworkstations.dev")}async function _d(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Iw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yc(JSON.stringify(n)),Yc(JSON.stringify(o)),""].join(".")}const Do={};function tk(){const t={prod:[],emulator:[]};for(const e of Object.keys(Do))Do[e]?t.emulator.push(e):t.prod.push(e);return t}function nk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let $g=!1;function yd(t,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||Do[t]===e||Do[t]||$g)return;Do[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=tk().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{$g=!0,o()},p}function f(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function h(){const p=nk(r),g=n("text"),y=document.getElementById(g)||document.createElement("span"),w=n("learnmore"),P=document.getElementById(w)||document.createElement("a"),k=n("preprendIcon"),S=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const _=p.element;a(_),f(P,w);const R=u();l(S,k),_.append(S,y,P,R),document.body.appendChild(_)}i?(y.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function sk(){var t;const e=(t=Ml())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ik(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ok(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ak(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ck(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lk(){return!sk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uk(){try{return typeof indexedDB=="object"}catch{return!1}}function fk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const hk="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hk,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ea.prototype.create)}}class Ea{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new zn(s,a,r)}}function dk(t,e){return t.replace(pk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pk=/\{\$([^}]+)}/g;function mk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Os(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Hg(i)&&Hg(o)){if(!Os(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
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
 */function wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gk(t,e){const n=new _k(t,e);return n.subscribe.bind(n)}class _k{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gu),s.error===void 0&&(s.error=Gu),s.complete===void 0&&(s.complete=Gu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gu(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class vk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ek;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wk(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ek(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ek(t){return t===Es?void 0:t}function wk(t){return t.instantiationMode==="EAGER"}/**
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
 */class bk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Tk={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Ik=we.INFO,Ak={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ak[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vd{constructor(e){this.name=e,this._logLevel=Ik,this._logHandler=Rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Sk=(t,e)=>e.some(n=>t instanceof n);let zg,qg;function Ck(){return zg||(zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pk(){return qg||(qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aw=new WeakMap,Gf=new WeakMap,Rw=new WeakMap,Yu=new WeakMap,Ed=new WeakMap;function kk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aw.set(n,t)}).catch(()=>{}),Ed.set(e,t),e}function Ok(t){if(Gf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gf.set(t,e)}let Yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xk(t){Yf=t(Yf)}function Nk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qu(this),e,...n);return Rw.set(r,e.sort?e.sort():[e]),zr(r)}:Pk().includes(t)?function(...e){return t.apply(Qu(this),e),zr(Aw.get(this))}:function(...e){return zr(t.apply(Qu(this),e))}}function Dk(t){return typeof t=="function"?Nk(t):(t instanceof IDBTransaction&&Ok(t),Sk(t,Ck())?new Proxy(t,Yf):t)}function zr(t){if(t instanceof IDBRequest)return kk(t);if(Yu.has(t))return Yu.get(t);const e=Dk(t);return e!==t&&(Yu.set(t,e),Ed.set(e,t)),e}const Qu=t=>Ed.get(t);function Lk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zr(o.result),l.oldVersion,l.newVersion,zr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Mk=["get","getKey","getAll","getAllKeys","count"],Vk=["put","add","delete","clear"],Xu=new Map;function Wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Xu.set(e,i),i}xk(t=>({...t,get:(e,n,r)=>Wg(e,n)||t.get(e,n,r),has:(e,n)=>!!Wg(e,n)||t.has(e,n)}));/**
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
 */class Fk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Uk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qf="@firebase/app",Kg="0.13.1";/**
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
 */const lr=new vd("@firebase/app"),Bk="@firebase/app-compat",jk="@firebase/analytics-compat",$k="@firebase/analytics",Hk="@firebase/app-check-compat",zk="@firebase/app-check",qk="@firebase/auth",Wk="@firebase/auth-compat",Kk="@firebase/database",Gk="@firebase/data-connect",Yk="@firebase/database-compat",Qk="@firebase/functions",Xk="@firebase/functions-compat",Jk="@firebase/installations",Zk="@firebase/installations-compat",eO="@firebase/messaging",tO="@firebase/messaging-compat",nO="@firebase/performance",rO="@firebase/performance-compat",sO="@firebase/remote-config",iO="@firebase/remote-config-compat",oO="@firebase/storage",aO="@firebase/storage-compat",cO="@firebase/firestore",lO="@firebase/ai",uO="@firebase/firestore-compat",fO="firebase",hO="11.9.0";/**
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
 */const Xf="[DEFAULT]",dO={[Qf]:"fire-core",[Bk]:"fire-core-compat",[$k]:"fire-analytics",[jk]:"fire-analytics-compat",[zk]:"fire-app-check",[Hk]:"fire-app-check-compat",[qk]:"fire-auth",[Wk]:"fire-auth-compat",[Kk]:"fire-rtdb",[Gk]:"fire-data-connect",[Yk]:"fire-rtdb-compat",[Qk]:"fire-fn",[Xk]:"fire-fn-compat",[Jk]:"fire-iid",[Zk]:"fire-iid-compat",[eO]:"fire-fcm",[tO]:"fire-fcm-compat",[nO]:"fire-perf",[rO]:"fire-perf-compat",[sO]:"fire-rc",[iO]:"fire-rc-compat",[oO]:"fire-gcs",[aO]:"fire-gcs-compat",[cO]:"fire-fst",[uO]:"fire-fst-compat",[lO]:"fire-vertex","fire-js":"fire-js",[fO]:"fire-js-all"};/**
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
 */const Qc=new Map,pO=new Map,Jf=new Map;function Gg(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xs(t){const e=t.name;if(Jf.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;Jf.set(e,t);for(const n of Qc.values())Gg(n,t);for(const n of pO.values())Gg(n,t);return!0}function Vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const mO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new Ea("app","Firebase",mO);/**
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
 */class gO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const js=hO;function Sw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xf,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw qr.create("bad-app-name",{appName:String(s)});if(n||(n=bw()),!n)throw qr.create("no-options");const i=Qc.get(s);if(i){if(Os(n,i.options)&&Os(r,i.config))return i;throw qr.create("duplicate-app",{appName:s})}const o=new bk(s);for(const l of Jf.values())o.addComponent(l);const a=new gO(n,r,o);return Qc.set(s,a),a}function wd(t=Xf){const e=Qc.get(t);if(!e&&t===Xf&&bw())return Sw();if(!e)throw qr.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let s=(r=dO[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}xs(new Qr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _O="firebase-heartbeat-database",yO=1,ta="firebase-heartbeat-store";let Ju=null;function Cw(){return Ju||(Ju=Lk(_O,yO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Ju}async function vO(t){try{const n=(await Cw()).transaction(ta),r=await n.objectStore(ta).get(Pw(t));return await n.done,r}catch(e){if(e instanceof zn)lr.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function Yg(t,e){try{const r=(await Cw()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,Pw(t)),await r.done}catch(n){if(n instanceof zn)lr.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function Pw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const EO=1024,wO=30;class bO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>wO){const o=AO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qg(),{heartbeatsToSend:r,unsentEntries:s}=TO(this._heartbeatsCache.heartbeats),i=Yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return lr.warn(n),""}}}function Qg(){return new Date().toISOString().substring(0,10)}function TO(t,e=EO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uk()?fk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xg(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}function AO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function RO(t){xs(new Qr("platform-logger",e=>new Fk(e),"PRIVATE")),xs(new Qr("heartbeat",e=>new bO(e),"PRIVATE")),Mn(Qf,Kg,t),Mn(Qf,Kg,"esm2017"),Mn("fire-js","")}RO("");var SO="firebase",CO="11.9.1";/**
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
 */Mn(SO,CO,"app");function bd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PO=kw,Ow=new Ea("auth","Firebase",kw());/**
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
 */const Xc=new vd("@firebase/auth");function kO(t,...e){Xc.logLevel<=we.WARN&&Xc.warn(`Auth (${js}): ${t}`,...e)}function Ec(t,...e){Xc.logLevel<=we.ERROR&&Xc.error(`Auth (${js}): ${t}`,...e)}/**
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
 */function bn(t,...e){throw Td(t,...e)}function Vn(t,...e){return Td(t,...e)}function xw(t,e,n){const r=Object.assign(Object.assign({},PO()),{[e]:n});return new Ea("auth","Firebase",r).create(e,{appName:t.name})}function Wr(t){return xw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Td(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ow.create(t,...e)}function de(t,e,...n){if(!t)throw Td(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ec(e),new Error(e)}function ur(t,e){t||tr(e)}/**
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
 */function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OO(){return Jg()==="http:"||Jg()==="https:"}function Jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OO()||ok()||"connection"in navigator)?navigator.onLine:!0}function NO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=rk()||ak()}get(){return xO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Id(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Nw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MO=new ba(3e4,6e4);function $s(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function as(t,e,n,r,s={}){return Dw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=wa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return ik()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&os(t.emulatorConfig.host)&&(u.credentials="include"),Nw.fetch()(await Lw(t,t.config.apiHost,n,a),u)})}async function Dw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DO),e);try{const s=new FO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw nc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nc(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xw(t,f,u);bn(t,f)}}catch(s){if(s instanceof zn)throw s;bn(t,"network-request-failed",{message:String(s)})}}async function Fl(t,e,n,r,s={}){const i=await as(t,e,n,r,s);return"mfaPendingCredential"in i&&bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Lw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Id(t.config,s):`${t.config.apiScheme}://${s}`;return LO.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function VO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),MO.get())})}}function nc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vn(t,e,r);return s.customData._tokenResponse=n,s}function Zg(t){return t!==void 0&&t.enterprise!==void 0}class UO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function BO(t,e){return as(t,"GET","/v2/recaptchaConfig",$s(t,e))}/**
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
 */async function jO(t,e){return as(t,"POST","/v1/accounts:delete",e)}async function Jc(t,e){return as(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $O(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Ad(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lo(Zu(s.auth_time)),issuedAtTime:Lo(Zu(s.iat)),expirationTime:Lo(Zu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zu(t){return Number(t)*1e3}function Ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ec("JWT malformed, contained fewer than 3 sections"),null;try{const s=vw(n);return s?JSON.parse(s):(Ec("Failed to decode base64 JWT payload"),null)}catch(s){return Ec("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function e_(t){const e=Ad(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&HO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class eh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await na(t,Jc(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Mw(i.providerUserInfo):[],a=WO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new eh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function qO(t){const e=Je(t);await Zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Mw(t){return t.map(e=>{var{providerId:n}=e,r=bd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KO(t,e){const n=await Dw(t,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Lw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&os(t.emulatorConfig.host)&&(l.credentials="include"),Nw.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GO(t,e){return as(t,"POST","/v2/accounts:revokeToken",$s(t,e))}/**
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
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=e_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await KO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _i;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
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
 */function Ar(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new eh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $O(this,e)}reload(){return qO(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await na(this,jO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:R,isAnonymous:D,providerData:M,stsTokenManager:T}=n;de(_&&T,e,"internal-error");const E=_i.fromJSON(this.name,T);de(typeof _=="string",e,"internal-error"),Ar(h,e.name),Ar(p,e.name),de(typeof R=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),Ar(g,e.name),Ar(y,e.name),Ar(w,e.name),Ar(P,e.name),Ar(k,e.name),Ar(S,e.name);const v=new _n({uid:_,auth:e,email:p,emailVerified:R,displayName:h,isAnonymous:D,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:E,createdAt:k,lastLoginAt:S});return M&&Array.isArray(M)&&(v.providerData=M.map(I=>Object.assign({},I))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new _i;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Mw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new _i;a.updateFromIdToken(r);const l=new _n({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new eh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const t_=new Map;function nr(t){ur(t instanceof Function,"Expected a class definition");let e=t_.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,t_.set(t,e),e)}/**
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
 */class Vw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vw.type="NONE";const n_=Vw;/**
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
 */function wc(t,e,n){return`firebase:${t}:${e}:${n}`}class yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wc(this.userKey,s.apiKey,i),this.fullPersistenceKey=wc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jc(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yi(nr(n_),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nr(n_);const o=wc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const p=await Jc(e,{idToken:f}).catch(()=>{});if(!p)break;h=await _n._fromGetAccountInfoResponse(e,p,f)}else h=_n._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new yi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new yi(i,e,r))}}/**
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
 */function r_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(zw(e))return"Webos";if(Uw(e))return"Safari";if((e.includes("chrome/")||Bw(e))&&!e.includes("edge/"))return"Chrome";if($w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fw(t=Dt()){return/firefox\//i.test(t)}function Uw(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bw(t=Dt()){return/crios\//i.test(t)}function jw(t=Dt()){return/iemobile/i.test(t)}function $w(t=Dt()){return/android/i.test(t)}function Hw(t=Dt()){return/blackberry/i.test(t)}function zw(t=Dt()){return/webos/i.test(t)}function Rd(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YO(t=Dt()){var e;return Rd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QO(){return ck()&&document.documentMode===10}function qw(t=Dt()){return Rd(t)||$w(t)||zw(t)||Hw(t)||/windows phone/i.test(t)||jw(t)}/**
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
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=r_(Dt());break;case"Worker":n=`${r_(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class XO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JO(t,e={}){return as(t,"GET","/v2/passwordPolicy",$s(t,e))}/**
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
 */const ZO=6;class e2{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class t2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s_(this),this.idTokenSubscription=new s_(this),this.beforeStateQueue=new XO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ow,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jc(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Wr(this));const n=e?Je(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JO(this),n=new e2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ea("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zi(t){return Je(t)}class s_{constructor(e){this.auth=e,this.observer=null,this.addObserver=gk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n2(t){Ul=t}function Kw(t){return Ul.loadJS(t)}function r2(){return Ul.recaptchaEnterpriseScript}function s2(){return Ul.gapiScript}function i2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class o2{constructor(){this.enterprise=new a2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class a2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const c2="recaptcha-enterprise",Gw="NO_RECAPTCHA";class l2{constructor(e){this.type=c2,this.auth=zi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{BO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new UO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Zg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Gw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new o2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Zg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=r2();l.length!==0&&(l+=a),Kw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function i_(t,e,n,r=!1,s=!1){const i=new l2(t);let o;if(s)o=Gw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function o_(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await i_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await i_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function u2(t,e){const n=Vl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Os(i,e??{}))return s;bn(s,"already-initialized")}return n.initialize({options:e})}function f2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function h2(t,e,n){const r=zi(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Yw(e),{host:o,port:a}=d2(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Os(u,r.config.emulator)&&Os(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,os(o)?(_d(`${i}//${o}${l}`),yd("Auth",!0)):p2()}function Yw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function d2(t){const e=Yw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:a_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:a_(o)}}}function a_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function p2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function m2(t,e){return as(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function g2(t,e){return Fl(t,"POST","/v1/accounts:signInWithPassword",$s(t,e))}/**
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
 */async function _2(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",$s(t,e))}async function y2(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",$s(t,e))}/**
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
 */class ra extends Sd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return o_(e,n,"signInWithPassword",g2);case"emailLink":return _2(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return o_(e,r,"signUpPassword",m2);case"emailLink":return y2(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vi(t,e){return Fl(t,"POST","/v1/accounts:signInWithIdp",$s(t,e))}/**
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
 */const v2="http://localhost";class Ns extends Sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=bd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vi(e,n)}buildRequest(){const e={requestUri:v2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wa(n)}return e}}/**
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
 */function E2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w2(t){const e=yo(vo(t)).link,n=e?yo(vo(e)).deep_link_id:null,r=yo(vo(t)).deep_link_id;return(r?yo(vo(r)).link:null)||r||n||e||t}class Cd{constructor(e){var n,r,s,i,o,a;const l=yo(vo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,h=E2((s=l.mode)!==null&&s!==void 0?s:null);de(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=w2(e);try{return new Cd(n)}catch{return null}}}/**
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
 */class qi{constructor(){this.providerId=qi.PROVIDER_ID}static credential(e,n){return ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cd.parseLink(n);return de(r,"argument-error"),ra._fromEmailAndCode(e,r.code,r.tenantId)}}qi.PROVIDER_ID="password";qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ta extends Qw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dr extends Ta{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
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
 */class Lr extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
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
 */class Mr extends Ta{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class Vr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
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
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=c_(r);return new ki({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=c_(r);return new ki({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function c_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class el extends zn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new el(e,n,r,s)}}function Xw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,i,e,r):i})}async function b2(t,e,n=!1){const r=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",r)}/**
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
 */async function T2(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Wr(r));const s="reauthenticate";try{const i=await na(t,Xw(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Ad(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),ki._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),i}}/**
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
 */async function Jw(t,e,n=!1){if(cn(t.app))return Promise.reject(Wr(t));const r="signIn",s=await Xw(t,r,e),i=await ki._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function I2(t,e){return Jw(zi(t),e)}/**
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
 */async function A2(t){const e=zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function R2(t,e,n){return cn(t.app)?Promise.reject(Wr(t)):I2(Je(t),qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&A2(t),r})}function S2(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function C2(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function P2(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function k2(t){return Je(t).signOut()}const tl="__sak";/**
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
 */class Zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const O2=1e3,x2=10;class eb extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);QO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,x2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},O2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eb.type="LOCAL";const N2=eb;/**
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
 */class tb extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tb.type="SESSION";const nb=tb;/**
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
 */function D2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await D2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
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
 */function Pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class L2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Pd("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Fn(){return window}function M2(t){Fn().location.href=t}/**
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
 */function rb(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function V2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function U2(){return rb()?self:null}/**
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
 */const sb="firebaseLocalStorageDb",B2=1,nl="firebaseLocalStorage",ib="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function j2(){const t=indexedDB.deleteDatabase(sb);return new Ia(t).toPromise()}function th(){const t=indexedDB.open(sb,B2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nl,{keyPath:ib})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nl)?e(r):(r.close(),await j2(),e(await th()))})})}async function l_(t,e,n){const r=jl(t,!0).put({[ib]:e,value:n});return new Ia(r).toPromise()}async function $2(t,e){const n=jl(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function u_(t,e){const n=jl(t,!0).delete(e);return new Ia(n).toPromise()}const H2=800,z2=3;class ob{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>z2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(U2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await V2(),!this.activeServiceWorker)return;this.sender=new L2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await l_(e,tl,"1"),await u_(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jl(s,!1).getAll();return new Ia(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ob.type="LOCAL";const q2=ob;new ba(3e4,6e4);/**
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
 */function W2(t,e){return e?nr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kd extends Sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function K2(t){return Jw(t.auth,new kd(t),t.bypassAuthState)}function G2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),T2(n,new kd(t),t.bypassAuthState)}async function Y2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),b2(n,new kd(t),t.bypassAuthState)}/**
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
 */class ab{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K2;case"linkViaPopup":case"linkViaRedirect":return Y2;case"reauthViaPopup":case"reauthViaRedirect":return G2;default:bn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Q2=new ba(2e3,1e4);class ai extends ab{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q2.get())};e()}}ai.currentPopupAction=null;/**
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
 */const X2="pendingRedirect",bc=new Map;class J2 extends ab{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bc.get(this.auth._key());if(!e){try{const r=await Z2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bc.set(this.auth._key(),e)}return this.bypassAuthState||bc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z2(t,e){const n=nx(e),r=tx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ex(t,e){bc.set(t._key(),e)}function tx(t){return nr(t._redirectPersistence)}function nx(t){return wc(X2,t.config.apiKey,t.name)}async function rx(t,e,n=!1){if(cn(t.app))return Promise.reject(Wr(t));const r=zi(t),s=W2(r,e),o=await new J2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sx=10*60*1e3;class ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ox(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(f_(e))}saveEventToCache(e){this.cachedEventUids.add(f_(e)),this.lastProcessedEventTime=Date.now()}}function f_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ox(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cb(t);default:return!1}}/**
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
 */async function ax(t,e={}){return as(t,"GET","/v1/projects",e)}/**
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
 */const cx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lx=/^https?/;async function ux(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ax(t);for(const n of e)try{if(fx(n))return}catch{}bn(t,"unauthorized-domain")}function fx(t){const e=Zf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lx.test(n))return!1;if(cx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const hx=new ba(3e4,6e4);function h_(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dx(t){return new Promise((e,n)=>{var r,s,i;function o(){h_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h_(),n(Vn(t,"network-request-failed"))},timeout:hx.get()})}if(!((s=(r=Fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fn().gapi)===null||i===void 0)&&i.load)o();else{const a=i2("iframefcb");return Fn()[a]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},Kw(`${s2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tc=null,e})}let Tc=null;function px(t){return Tc=Tc||dx(t),Tc}/**
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
 */const mx=new ba(5e3,15e3),gx="__/auth/iframe",_x="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ex(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Id(e,_x):`https://${t.config.authDomain}/${gx}`,r={apiKey:e.apiKey,appName:t.name,v:js},s=vx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wa(r).slice(1)}`}async function wx(t){const e=await px(t),n=Fn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:Ex(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),a=Fn().setTimeout(()=>{i(o)},mx.get());function l(){Fn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const bx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tx=500,Ix=600,Ax="_blank",Rx="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sx(t,e,n,r=Tx,s=Ix){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bx),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=Bw(u)?Ax:n),Fw(u)&&(e=e||Rx,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(YO(u)&&a!=="_self")return Cx(e||"",a),new d_(null);const h=window.open(e||"",a,f);de(h,t,"popup-blocked");try{h.focus()}catch{}return new d_(h)}function Cx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Px="__/auth/handler",kx="emulator/auth/handler",Ox=encodeURIComponent("fac");async function p_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof Qw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Ta){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),u=l?`#${Ox}=${encodeURIComponent(l)}`:"";return`${xx(t)}?${wa(a).slice(1)}${u}`}function xx({config:t}){return t.emulator?Id(t,kx):`https://${t.authDomain}/${Px}`}/**
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
 */const ef="webStorageSupport";class Nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nb,this._completeRedirectFn=rx,this._overrideRedirectResult=ex}async _openPopup(e,n,r,s){var i;ur((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await p_(e,n,r,Zf(),s);return Sx(e,o,Pd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await p_(e,n,r,Zf(),s);return M2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ur(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wx(e),r=new ix(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ef,{type:ef},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ef];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ux(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qw()||Uw()||Rd()}}const Dx=Nx;var m_="@firebase/auth",g_="1.10.7";/**
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
 */class Lx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vx(t){xs(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},u=new t2(r,s,i,l);return f2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xs(new Qr("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new Lx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(m_,g_,Mx(t)),Mn(m_,g_,"esm2017")}/**
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
 */const Fx=5*60,Ux=Tw("authIdTokenMaxAge")||Fx;let __=null;const Bx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ux)return;const s=n==null?void 0:n.token;__!==s&&(__=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jx(t=wd()){const e=Vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=u2(t,{popupRedirectResolver:Dx,persistence:[q2,N2,nb]}),r=Tw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Bx(i.toString());C2(n,o,()=>o(n.currentUser)),S2(n,a=>o(a))}}const s=Ew("auth");return s&&h2(n,`http://${s}`),n}function $x(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}n2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$x().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vx("Browser");function y_(t){return typeof t=="string"?`'${t}'`:new Hx().serialize(t)}const Hx=function(){var e;class t{constructor(){_m(this,e,new Map)}compare(r,s){const i=typeof r,o=typeof s;return i==="string"&&o==="string"?r.localeCompare(s):i==="number"&&o==="number"?r-s:String.prototype.localeCompare.call(this.serialize(r,!0),this.serialize(s,!0))}serialize(r,s){if(r===null)return"null";switch(typeof r){case"string":return s?r:`'${r}'`;case"bigint":return`${r}n`;case"object":return this.$object(r);case"function":return this.$function(r)}return String(r)}serializeObject(r){const s=Object.prototype.toString.call(r);if(s!=="[object Object]")return this.serializeBuiltInType(s.length<10?`unknown:${s}`:s.slice(8,-1),r);const i=r.constructor,o=i===Object||i===void 0?"":i.name;if(o!==""&&globalThis[o]===i)return this.serializeBuiltInType(o,r);if(typeof r.toJSON=="function"){const a=r.toJSON();return o+(a!==null&&typeof a=="object"?this.$object(a):`(${this.serialize(a)})`)}return this.serializeObjectEntries(o,Object.entries(r))}serializeBuiltInType(r,s){const i=this["$"+r];if(i)return i.call(this,s);if(typeof(s==null?void 0:s.entries)=="function")return this.serializeObjectEntries(r,s.entries());throw new Error(`Cannot serialize ${r}`)}serializeObjectEntries(r,s){const i=Array.from(s).sort((a,l)=>this.compare(a[0],l[0]));let o=`${r}{`;for(let a=0;a<i.length;a++){const[l,u]=i[a];o+=`${this.serialize(l,!0)}:${this.serialize(u)}`,a<i.length-1&&(o+=",")}return o+"}"}$object(r){let s=lo(this,e).get(r);return s===void 0&&(lo(this,e).set(r,`#${lo(this,e).size}`),s=this.serializeObject(r),lo(this,e).set(r,s)),s}$function(r){const s=Function.prototype.toString.call(r);return s.slice(-15)==="[native code] }"?`${r.name||""}()[native]`:`${r.name}(${r.length})${s.replace(/\s*\n\s*/g,"")}`}$Array(r){let s="[";for(let i=0;i<r.length;i++)s+=this.serialize(r[i]),i<r.length-1&&(s+=",");return s+"]"}$Date(r){try{return`Date(${r.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(r){return`ArrayBuffer[${new Uint8Array(r).join(",")}]`}$Set(r){return`Set${this.$Array(Array.from(r).sort((s,i)=>this.compare(s,i)))}`}$Map(r){return this.serializeObjectEntries("Map",r.entries())}}e=new WeakMap;for(const n of["Error","RegExp","URL"])t.prototype["$"+n]=function(r){return`${n}(${r})`};for(const n of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join(",")}]`};for(const n of["BigInt64Array","BigUint64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join("n,")}${r.length>0?"n":""}]`};return t}();function zx(t,e){return t===e||y_(t)===y_(e)}function qx(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||Wx;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=Kx(u,s)}i=a+1}return n}function Wx(t){return t.includes("%")?decodeURIComponent(t):t}function Kx(t,e){try{return e(t)}catch{return t}}const rc=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function v_(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!rc.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!rc.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!rc.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!rc.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!Gx(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function Gx(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function mn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=mn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:mn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=mn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=mn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(mn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(mn(i),mn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(mn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const Yx={path:"/",watch:!0,decode:t=>Jo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},sc=window.cookieStore;function Qx(t,e){var u;const n={...Yx,...e};n.filter??(n.filter=f=>f===t);const r=E_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=mn(i?void 0:r[t]??((u=n.default)==null?void 0:u.call(n))),l=s&&!i?Zx(a,s,n.watch&&n.watch!=="shallow"):Gt(a);{let f=null;try{!sc&&typeof BroadcastChannel<"u"&&(f=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=(w=!1)=>{!w&&(n.readonly||zx(l.value,r[t]))||(Jx(t,l.value,n),r[t]=mn(l.value),f==null||f.postMessage({value:n.encode(l.value)}))},p=w=>{var k;const P=w.refresh?(k=E_(n))==null?void 0:k[t]:n.decode(w.value);g=!0,l.value=P,r[t]=mn(P),jn(()=>{g=!1})};let g=!1;const y=!!ma();if(y&&Nc(()=>{g=!0,h(),f==null||f.close()}),sc){const w=P=>{const k=P.changed.find(_=>_.name===t),S=P.deleted.find(_=>_.name===t);k&&p({value:k.value}),S&&p({value:null})};sc.addEventListener("change",w),y&&Nc(()=>sc.removeEventListener("change",w))}else f&&(f.onmessage=({data:w})=>p(w));n.watch&&Ln(l,()=>{g||h()},{deep:n.watch!=="shallow"}),o&&h(o)}return l}function E_(t={}){return qx(document.cookie,t)}function Xx(t,e,n={}){return e==null?v_(t,e,{...n,maxAge:-1}):v_(t,e,n)}function Jx(t,e,n={}){document.cookie=Xx(t,e,n)}const w_=2147483647;function Zx(t,e,n){let r,s,i=0;const o=n?Gt(t):{value:t};return ma()&&Nc(()=>{s==null||s(),clearTimeout(r)}),XI((a,l)=>{n&&(s=Ln(o,l));function u(){i=0,clearTimeout(r);const f=e-i,h=f<w_?f:w_;r=setTimeout(()=>{if(i+=h,i<e)return u();o.value=void 0,l()},h)}return{get(){return a(),o.value},set(f){u(),o.value=f,l()}}})}const eN=(...t)=>t.find(e=>e!==void 0);function tN(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const l=a??t.trailingSlash;if(!i||l!=="append"&&l!=="remove")return i;if(typeof i=="string")return ic(i,l);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:ic(u,l)}}function s(i){const o=Tt(),a=Bs(),l=Fe(()=>!!i.target&&i.target!=="_self"),u=Fe(()=>{const P=i.to||i.href||"";return typeof P=="string"&&_r(P,{acceptRelative:!0})}),f=Ko("RouterLink"),h=f&&typeof f!="string"?f.useLink:void 0,p=Fe(()=>{if(i.external)return!0;const P=i.to||i.href||"";return typeof P=="object"?!1:P===""||u.value}),g=Fe(()=>{const P=i.to||i.href||"";return p.value?P:r(P,o.resolve,i.trailingSlash)}),y=p.value||h==null?void 0:h({...i,to:g}),w=Fe(()=>{var k;const P=i.trailingSlash??t.trailingSlash;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const S=typeof g.value=="object"&&"path"in g.value?Uf(g.value):g.value,_=typeof S=="object"?o.resolve(S).href:S;return ic(_,P)}return typeof g.value=="object"?((k=o.resolve(g.value))==null?void 0:k.href)??null:ic(kl(a.app.baseURL,g.value),P)});return{to:g,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:w,isActive:(y==null?void 0:y.isActive)??Fe(()=>g.value===o.currentRoute.value.path),isExactActive:(y==null?void 0:y.isExactActive)??Fe(()=>g.value===o.currentRoute.value.path),route:(y==null?void 0:y.route)??Fe(()=>o.resolve(g.value)),async navigate(P){await yS(w.value,{replace:i.replace,external:p.value||l.value})}}}return Tn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=Tt(),{to:l,href:u,navigate:f,isExternal:h,hasTarget:p,isAbsoluteUrl:g}=s(i),y=Cs(!1),w=Gt(null),P=_=>{var R;w.value=i.custom?(R=_==null?void 0:_.$el)==null?void 0:R.nextElementSibling:_==null?void 0:_.$el};function k(_){var R,D;return!y.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===_:((R=i.prefetchOn)==null?void 0:R[_])??((D=t.prefetchOn)==null?void 0:D[_]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!iN()}async function S(_=je()){if(y.value)return;y.value=!0;const R=typeof l.value=="string"?l.value:h.value?Uf(l.value):a.resolve(l.value).fullPath,D=h.value?new URL(R,window.location.href).href:R;await Promise.all([_.hooks.callHook("link:prefetch",D).catch(()=>{}),!h.value&&!p.value&&gw(l.value,a).catch(()=>{})])}if(k("visibility")){const _=je();let R,D=null;Al(()=>{const M=rN();Ll(()=>{R=Kf(()=>{var T;(T=w==null?void 0:w.value)!=null&&T.tagName&&(D=M.observe(w.value,async()=>{D==null||D(),D=null,await S(_)}))})})}),Hi(()=>{R&&VP(R),D==null||D(),D=null})}return()=>{var D;if(!h.value&&!p.value&&!n(l.value)){const M={ref:P,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(k("interaction")&&(M.onPointerenter=S.bind(null,void 0),M.onFocus=S.bind(null,void 0)),y.value&&(M.class=i.prefetchedClass||t.prefetchedClass),M.rel=i.rel||void 0),ct(Ko("RouterLink"),M,o.default)}const _=i.target||null,R=eN(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:S,get route(){if(!u.value)return;const M=new URL(u.value,window.location.href);return{path:M.pathname,fullPath:M.pathname,get query(){return ad(M.search)},hash:M.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:R,target:_,isExternal:h.value||p.value,isActive:!1,isExactActive:!1}):null:ct("a",{ref:w,href:u.value||null,rel:R,target:_},(D=o.default)==null?void 0:D.call(o))}}})}const nN=tN(tS);function ic(t,e){const n=e==="append"?PE:Si;return _r(t)&&!t.startsWith("http")?t:n(t,!0)}function rN(){const t=je();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const sN=/2g/;function iN(){const t=navigator.connection;return!!(t&&(t.saveData||sN.test(t.effectiveType)))}var b_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,lb;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function v(){}v.prototype=E.prototype,T.D=E.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(I,x,O){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return E.prototype[x].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,E,v){v||(v=0);var I=Array(16);if(typeof E=="string")for(var x=0;16>x;++x)I[x]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(x=0;16>x;++x)I[x]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=T.g[0],v=T.g[1],x=T.g[2];var O=T.g[3],A=E+(O^v&(x^O))+I[0]+3614090360&4294967295;E=v+(A<<7&4294967295|A>>>25),A=O+(x^E&(v^x))+I[1]+3905402710&4294967295,O=E+(A<<12&4294967295|A>>>20),A=x+(v^O&(E^v))+I[2]+606105819&4294967295,x=O+(A<<17&4294967295|A>>>15),A=v+(E^x&(O^E))+I[3]+3250441966&4294967295,v=x+(A<<22&4294967295|A>>>10),A=E+(O^v&(x^O))+I[4]+4118548399&4294967295,E=v+(A<<7&4294967295|A>>>25),A=O+(x^E&(v^x))+I[5]+1200080426&4294967295,O=E+(A<<12&4294967295|A>>>20),A=x+(v^O&(E^v))+I[6]+2821735955&4294967295,x=O+(A<<17&4294967295|A>>>15),A=v+(E^x&(O^E))+I[7]+4249261313&4294967295,v=x+(A<<22&4294967295|A>>>10),A=E+(O^v&(x^O))+I[8]+1770035416&4294967295,E=v+(A<<7&4294967295|A>>>25),A=O+(x^E&(v^x))+I[9]+2336552879&4294967295,O=E+(A<<12&4294967295|A>>>20),A=x+(v^O&(E^v))+I[10]+4294925233&4294967295,x=O+(A<<17&4294967295|A>>>15),A=v+(E^x&(O^E))+I[11]+2304563134&4294967295,v=x+(A<<22&4294967295|A>>>10),A=E+(O^v&(x^O))+I[12]+1804603682&4294967295,E=v+(A<<7&4294967295|A>>>25),A=O+(x^E&(v^x))+I[13]+4254626195&4294967295,O=E+(A<<12&4294967295|A>>>20),A=x+(v^O&(E^v))+I[14]+2792965006&4294967295,x=O+(A<<17&4294967295|A>>>15),A=v+(E^x&(O^E))+I[15]+1236535329&4294967295,v=x+(A<<22&4294967295|A>>>10),A=E+(x^O&(v^x))+I[1]+4129170786&4294967295,E=v+(A<<5&4294967295|A>>>27),A=O+(v^x&(E^v))+I[6]+3225465664&4294967295,O=E+(A<<9&4294967295|A>>>23),A=x+(E^v&(O^E))+I[11]+643717713&4294967295,x=O+(A<<14&4294967295|A>>>18),A=v+(O^E&(x^O))+I[0]+3921069994&4294967295,v=x+(A<<20&4294967295|A>>>12),A=E+(x^O&(v^x))+I[5]+3593408605&4294967295,E=v+(A<<5&4294967295|A>>>27),A=O+(v^x&(E^v))+I[10]+38016083&4294967295,O=E+(A<<9&4294967295|A>>>23),A=x+(E^v&(O^E))+I[15]+3634488961&4294967295,x=O+(A<<14&4294967295|A>>>18),A=v+(O^E&(x^O))+I[4]+3889429448&4294967295,v=x+(A<<20&4294967295|A>>>12),A=E+(x^O&(v^x))+I[9]+568446438&4294967295,E=v+(A<<5&4294967295|A>>>27),A=O+(v^x&(E^v))+I[14]+3275163606&4294967295,O=E+(A<<9&4294967295|A>>>23),A=x+(E^v&(O^E))+I[3]+4107603335&4294967295,x=O+(A<<14&4294967295|A>>>18),A=v+(O^E&(x^O))+I[8]+1163531501&4294967295,v=x+(A<<20&4294967295|A>>>12),A=E+(x^O&(v^x))+I[13]+2850285829&4294967295,E=v+(A<<5&4294967295|A>>>27),A=O+(v^x&(E^v))+I[2]+4243563512&4294967295,O=E+(A<<9&4294967295|A>>>23),A=x+(E^v&(O^E))+I[7]+1735328473&4294967295,x=O+(A<<14&4294967295|A>>>18),A=v+(O^E&(x^O))+I[12]+2368359562&4294967295,v=x+(A<<20&4294967295|A>>>12),A=E+(v^x^O)+I[5]+4294588738&4294967295,E=v+(A<<4&4294967295|A>>>28),A=O+(E^v^x)+I[8]+2272392833&4294967295,O=E+(A<<11&4294967295|A>>>21),A=x+(O^E^v)+I[11]+1839030562&4294967295,x=O+(A<<16&4294967295|A>>>16),A=v+(x^O^E)+I[14]+4259657740&4294967295,v=x+(A<<23&4294967295|A>>>9),A=E+(v^x^O)+I[1]+2763975236&4294967295,E=v+(A<<4&4294967295|A>>>28),A=O+(E^v^x)+I[4]+1272893353&4294967295,O=E+(A<<11&4294967295|A>>>21),A=x+(O^E^v)+I[7]+4139469664&4294967295,x=O+(A<<16&4294967295|A>>>16),A=v+(x^O^E)+I[10]+3200236656&4294967295,v=x+(A<<23&4294967295|A>>>9),A=E+(v^x^O)+I[13]+681279174&4294967295,E=v+(A<<4&4294967295|A>>>28),A=O+(E^v^x)+I[0]+3936430074&4294967295,O=E+(A<<11&4294967295|A>>>21),A=x+(O^E^v)+I[3]+3572445317&4294967295,x=O+(A<<16&4294967295|A>>>16),A=v+(x^O^E)+I[6]+76029189&4294967295,v=x+(A<<23&4294967295|A>>>9),A=E+(v^x^O)+I[9]+3654602809&4294967295,E=v+(A<<4&4294967295|A>>>28),A=O+(E^v^x)+I[12]+3873151461&4294967295,O=E+(A<<11&4294967295|A>>>21),A=x+(O^E^v)+I[15]+530742520&4294967295,x=O+(A<<16&4294967295|A>>>16),A=v+(x^O^E)+I[2]+3299628645&4294967295,v=x+(A<<23&4294967295|A>>>9),A=E+(x^(v|~O))+I[0]+4096336452&4294967295,E=v+(A<<6&4294967295|A>>>26),A=O+(v^(E|~x))+I[7]+1126891415&4294967295,O=E+(A<<10&4294967295|A>>>22),A=x+(E^(O|~v))+I[14]+2878612391&4294967295,x=O+(A<<15&4294967295|A>>>17),A=v+(O^(x|~E))+I[5]+4237533241&4294967295,v=x+(A<<21&4294967295|A>>>11),A=E+(x^(v|~O))+I[12]+1700485571&4294967295,E=v+(A<<6&4294967295|A>>>26),A=O+(v^(E|~x))+I[3]+2399980690&4294967295,O=E+(A<<10&4294967295|A>>>22),A=x+(E^(O|~v))+I[10]+4293915773&4294967295,x=O+(A<<15&4294967295|A>>>17),A=v+(O^(x|~E))+I[1]+2240044497&4294967295,v=x+(A<<21&4294967295|A>>>11),A=E+(x^(v|~O))+I[8]+1873313359&4294967295,E=v+(A<<6&4294967295|A>>>26),A=O+(v^(E|~x))+I[15]+4264355552&4294967295,O=E+(A<<10&4294967295|A>>>22),A=x+(E^(O|~v))+I[6]+2734768916&4294967295,x=O+(A<<15&4294967295|A>>>17),A=v+(O^(x|~E))+I[13]+1309151649&4294967295,v=x+(A<<21&4294967295|A>>>11),A=E+(x^(v|~O))+I[4]+4149444226&4294967295,E=v+(A<<6&4294967295|A>>>26),A=O+(v^(E|~x))+I[11]+3174756917&4294967295,O=E+(A<<10&4294967295|A>>>22),A=x+(E^(O|~v))+I[2]+718787259&4294967295,x=O+(A<<15&4294967295|A>>>17),A=v+(O^(x|~E))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+O&4294967295}r.prototype.u=function(T,E){E===void 0&&(E=T.length);for(var v=E-this.blockSize,I=this.B,x=this.h,O=0;O<E;){if(x==0)for(;O<=v;)s(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<E;)if(I[x++]=T.charCodeAt(O++),x==this.blockSize){s(this,I),x=0;break}}else for(;O<E;)if(I[x++]=T[O++],x==this.blockSize){s(this,I),x=0;break}}this.h=x,this.o+=E},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;var v=8*this.o;for(E=T.length-8;E<T.length;++E)T[E]=v&255,v/=256;for(this.u(T),T=Array(16),E=v=0;4>E;++E)for(var I=0;32>I;I+=8)T[v++]=this.g[E]>>>I&255;return T};function i(T,E){var v=a;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=E(T)}function o(T,E){this.h=E;for(var v=[],I=!0,x=T.length-1;0<=x;x--){var O=T[x]|0;I&&O==E||(v[x]=O,I=!1)}this.g=v}var a={};function l(T){return-128<=T&&128>T?i(T,function(E){return new o([E|0],0>E?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return P(u(-T));for(var E=[],v=1,I=0;T>=v;I++)E[I]=T/v|0,v*=4294967296;return new o(E,0)}function f(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return P(f(T.substring(1),E));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(E,8)),I=h,x=0;x<T.length;x+=8){var O=Math.min(8,T.length-x),A=parseInt(T.substring(x,x+O),E);8>O?(O=u(Math.pow(E,O)),I=I.j(O).add(u(A))):(I=I.j(v),I=I.add(u(A)))}return I}var h=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(w(this))return-P(this).m();for(var T=0,E=1,v=0;v<this.g.length;v++){var I=this.i(v);T+=(0<=I?I:4294967296+I)*E,E*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(w(this))return"-"+P(this).toString(T);for(var E=u(Math.pow(T,6)),v=this,I="";;){var x=R(v,E).g;v=k(v,x.j(E));var O=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=x,y(v))return O+I;for(;6>O.length;)O="0"+O;I=O+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function w(T){return T.h==-1}t.l=function(T){return T=k(this,T),w(T)?-1:y(T)?0:1};function P(T){for(var E=T.g.length,v=[],I=0;I<E;I++)v[I]=~T.g[I];return new o(v,~T.h).add(p)}t.abs=function(){return w(this)?P(this):this},t.add=function(T){for(var E=Math.max(this.g.length,T.g.length),v=[],I=0,x=0;x<=E;x++){var O=I+(this.i(x)&65535)+(T.i(x)&65535),A=(O>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);I=A>>>16,O&=65535,A&=65535,v[x]=A<<16|O}return new o(v,v[v.length-1]&-2147483648?-1:0)};function k(T,E){return T.add(P(E))}t.j=function(T){if(y(this)||y(T))return h;if(w(this))return w(T)?P(this).j(P(T)):P(P(this).j(T));if(w(T))return P(this.j(P(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var E=this.g.length+T.g.length,v=[],I=0;I<2*E;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var x=0;x<T.g.length;x++){var O=this.i(I)>>>16,A=this.i(I)&65535,ge=T.i(x)>>>16,Ee=T.i(x)&65535;v[2*I+2*x]+=A*Ee,S(v,2*I+2*x),v[2*I+2*x+1]+=O*Ee,S(v,2*I+2*x+1),v[2*I+2*x+1]+=A*ge,S(v,2*I+2*x+1),v[2*I+2*x+2]+=O*ge,S(v,2*I+2*x+2)}for(I=0;I<E;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=E;I<2*E;I++)v[I]=0;return new o(v,0)};function S(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function _(T,E){this.g=T,this.h=E}function R(T,E){if(y(E))throw Error("division by zero");if(y(T))return new _(h,h);if(w(T))return E=R(P(T),E),new _(P(E.g),P(E.h));if(w(E))return E=R(T,P(E)),new _(P(E.g),E.h);if(30<T.g.length){if(w(T)||w(E))throw Error("slowDivide_ only works with positive integers.");for(var v=p,I=E;0>=I.l(T);)v=D(v),I=D(I);var x=M(v,1),O=M(I,1);for(I=M(I,2),v=M(v,2);!y(I);){var A=O.add(I);0>=A.l(T)&&(x=x.add(v),O=A),I=M(I,1),v=M(v,1)}return E=k(T,x.j(E)),new _(x,E)}for(x=h;0<=T.l(E);){for(v=Math.max(1,Math.floor(T.m()/E.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),O=u(v),A=O.j(E);w(A)||0<A.l(T);)v-=I,O=u(v),A=O.j(E);y(O)&&(O=p),x=x.add(O),T=k(T,A)}return new _(x,T)}t.A=function(T){return R(this,T).h},t.and=function(T){for(var E=Math.max(this.g.length,T.g.length),v=[],I=0;I<E;I++)v[I]=this.i(I)&T.i(I);return new o(v,this.h&T.h)},t.or=function(T){for(var E=Math.max(this.g.length,T.g.length),v=[],I=0;I<E;I++)v[I]=this.i(I)|T.i(I);return new o(v,this.h|T.h)},t.xor=function(T){for(var E=Math.max(this.g.length,T.g.length),v=[],I=0;I<E;I++)v[I]=this.i(I)^T.i(I);return new o(v,this.h^T.h)};function D(T){for(var E=T.g.length+1,v=[],I=0;I<E;I++)v[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(v,T.h)}function M(T,E){var v=E>>5;E%=32;for(var I=T.g.length-v,x=[],O=0;O<I;O++)x[O]=0<E?T.i(O+v)>>>E|T.i(O+v+1)<<32-E:T.i(O+v);return new o(x,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lb=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Kr=o}).apply(typeof b_<"u"?b_:typeof self<"u"?self:typeof window<"u"?window:{});var oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ub,Eo,fb,Ic,nh,hb,db,pb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,m){return c==Array.prototype||c==Object.prototype||(c[d]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof oc=="object"&&oc];for(var d=0;d<c.length;++d){var m=c[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,d){if(d)e:{var m=r;c=c.split(".");for(var b=0;b<c.length-1;b++){var L=c[b];if(!(L in m))break e;m=m[L]}c=c[c.length-1],b=m[c],d=d(b),d!=b&&d!=null&&e(m,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var m=0,b=!1,L={next:function(){if(!b&&m<c.length){var F=m++;return{value:d(F,c[F]),done:!1}}return b=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function u(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function f(c,d,m){return c.call.apply(c.bind,arguments)}function h(c,d,m){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,b),c.apply(d,L)}}return function(){return c.apply(d,arguments)}}function p(c,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,p.apply(null,arguments)}function g(c,d){var m=Array.prototype.slice.call(arguments,1);return function(){var b=m.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function y(c,d){function m(){}m.prototype=d.prototype,c.aa=d.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(b,L,F){for(var Y=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)Y[Me-2]=arguments[Me];return d.prototype[L].apply(b,Y)}}function w(c){const d=c.length;if(0<d){const m=Array(d);for(let b=0;b<d;b++)m[b]=c[b];return m}return[]}function P(c,d){for(let m=1;m<arguments.length;m++){const b=arguments[m];if(l(b)){const L=c.length||0,F=b.length||0;c.length=L+F;for(let Y=0;Y<F;Y++)c[L+Y]=b[Y]}else c.push(b)}}class k{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function S(c){return/^[\s\xa0]*$/.test(c)}function _(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function M(c,d,m){for(const b in c)d.call(m,c[b],b,c)}function T(c,d){for(const m in c)d.call(void 0,c[m],m,c)}function E(c){const d={};for(const m in c)d[m]=c[m];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,d){let m,b;for(let L=1;L<arguments.length;L++){b=arguments[L];for(m in b)c[m]=b[m];for(let F=0;F<v.length;F++)m=v[F],Object.prototype.hasOwnProperty.call(b,m)&&(c[m]=b[m])}}function x(c){var d=1;c=c.split(":");const m=[];for(;0<d&&c.length;)m.push(c.shift()),d--;return c.length&&m.push(c.join(":")),m}function O(c){a.setTimeout(()=>{throw c},0)}function A(){var c=Ue;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,m){const b=Ee.get();b.set(d,m),this.h?this.h.next=b:this.g=b,this.h=b}}var Ee=new k(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,Ue=new ge,dn=()=>{const c=a.Promise.resolve(void 0);se=()=>{c.then(tn)}};var tn=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(m){O(m)}var d=Ee;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}ne=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var vr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return c}();function In(c,d){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(D){e:{try{R(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else m=="mouseover"?d=c.fromElement:m=="mouseout"&&(d=c.toElement);this.relatedTarget=d,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:$t[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&In.aa.h.call(this)}}y(In,Ge);var $t={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(c,d,m,b,L){this.listener=c,this.proxy=null,this.src=d,this.type=m,this.capture=!!b,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ie(c){this.src=c,this.g={},this.h=0}Ie.prototype.add=function(c,d,m,b,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Y=C(c,d,b,L);return-1<Y?(d=c[Y],m||(d.fa=!1)):(d=new J(d,this.src,F,!!b,L),d.fa=m,c.push(d)),d};function De(c,d){var m=d.type;if(m in c.g){var b=c.g[m],L=Array.prototype.indexOf.call(b,d,void 0),F;(F=0<=L)&&Array.prototype.splice.call(b,L,1),F&&(re(d),c.g[m].length==0&&(delete c.g[m],c.h--))}}function C(c,d,m,b){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==b)return L}return-1}var N="closure_lm_"+(1e6*Math.random()|0),V={};function $(c,d,m,b,L){if(Array.isArray(d)){for(var F=0;F<d.length;F++)$(c,d[F],m,b,L);return null}return m=oe(m),c&&c[B]?c.K(d,m,u(b)?!!b.capture:!1,L):U(c,d,m,!1,b,L)}function U(c,d,m,b,L,F){if(!d)throw Error("Invalid event type");var Y=u(L)?!!L.capture:!!L,Me=ce(c);if(Me||(c[N]=Me=new Ie(c)),m=Me.add(d,m,b,Y,F),m.proxy)return m;if(b=z(),m.proxy=b,b.src=c,b.listener=m,c.addEventListener)vr||(L=Y),L===void 0&&(L=!1),c.addEventListener(d.toString(),b,L);else if(c.attachEvent)c.attachEvent(K(d.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return m}function z(){function c(m){return d.call(c.src,c.listener,m)}const d=q;return c}function Q(c,d,m,b,L){if(Array.isArray(d))for(var F=0;F<d.length;F++)Q(c,d[F],m,b,L);else b=u(b)?!!b.capture:!!b,m=oe(m),c&&c[B]?(c=c.i,d=String(d).toString(),d in c.g&&(F=c.g[d],m=C(F,m,b,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[d],c.h--)))):c&&(c=ce(c))&&(d=c.g[d.toString()],c=-1,d&&(c=C(d,m,b,L)),(m=-1<c?d[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[B])De(d.i,c);else{var m=c.type,b=c.proxy;d.removeEventListener?d.removeEventListener(m,b,c.capture):d.detachEvent?d.detachEvent(K(m),b):d.addListener&&d.removeListener&&d.removeListener(b),(m=ce(d))?(De(m,c),m.h==0&&(m.src=null,d[N]=null)):re(c)}}}function K(c){return c in V?V[c]:V[c]="on"+c}function q(c,d){if(c.da)c=!0;else{d=new In(d,this);var m=c.listener,b=c.ha||c.src;c.fa&&G(c),c=m.call(b,d)}return c}function ce(c){return c=c[N],c instanceof Ie?c:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[X]||(c[X]=function(d){return c.handleEvent(d)}),c[X])}function ie(){Ke.call(this),this.i=new Ie(this),this.M=this,this.F=null}y(ie,Ke),ie.prototype[B]=!0,ie.prototype.removeEventListener=function(c,d,m,b){Q(this,c,d,m,b)};function he(c,d){var m,b=c.F;if(b)for(m=[];b;b=b.F)m.push(b);if(c=c.M,b=d.type||d,typeof d=="string")d=new Ge(d,c);else if(d instanceof Ge)d.target=d.target||c;else{var L=d;d=new Ge(b,c),I(d,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Y=d.g=m[F];L=Pe(Y,b,!0,d)&&L}if(Y=d.g=c,L=Pe(Y,b,!0,d)&&L,L=Pe(Y,b,!1,d)&&L,m)for(F=0;F<m.length;F++)Y=d.g=m[F],L=Pe(Y,b,!1,d)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var m=c.g[d],b=0;b<m.length;b++)re(m[b]);delete c.g[d],c.h--}}this.F=null},ie.prototype.K=function(c,d,m,b){return this.i.add(String(c),d,!1,m,b)},ie.prototype.L=function(c,d,m,b){return this.i.add(String(c),d,!0,m,b)};function Pe(c,d,m,b){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,F=0;F<d.length;++F){var Y=d[F];if(Y&&!Y.da&&Y.capture==m){var Me=Y.listener,_t=Y.ha||Y.src;Y.fa&&De(c.i,Y),L=Me.call(_t,b)!==!1&&L}}return L&&!b.defaultPrevented}function Se(c,d,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function mt(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,mt(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class ft extends Ke{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(c){Ke.call(this),this.h=c,this.g={}}y(gt,Ke);var At=[];function Er(c){M(c.g,function(d,m){this.g.hasOwnProperty(m)&&G(d)},c),c.g={}}gt.prototype.N=function(){gt.aa.N.call(this),Er(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qs=a.JSON.stringify,Mt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Ws(){}Ws.prototype.h=null;function Ap(c){return c.h||(c.h=c.i())}function Rp(){}var Xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function du(){Ge.call(this,"d")}y(du,Ge);function pu(){Ge.call(this,"c")}y(pu,Ge);var us={},Sp=null;function Oa(){return Sp=Sp||new ie}us.La="serverreachability";function Cp(c){Ge.call(this,us.La,c)}y(Cp,Ge);function Ji(c){const d=Oa();he(d,new Cp(d))}us.STAT_EVENT="statevent";function Pp(c,d){Ge.call(this,us.STAT_EVENT,c),this.stat=d}y(Pp,Ge);function Vt(c){const d=Oa();he(d,new Pp(d,c))}us.Ma="timingevent";function kp(c,d){Ge.call(this,us.Ma,c),this.size=d}y(kp,Ge);function Zi(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function eo(){this.g=!0}eo.prototype.xa=function(){this.g=!1};function HT(c,d,m,b,L,F){c.info(function(){if(c.g)if(F)for(var Y="",Me=F.split("&"),_t=0;_t<Me.length;_t++){var Ce=Me[_t].split("=");if(1<Ce.length){var Rt=Ce[0];Ce=Ce[1];var St=Rt.split("_");Y=2<=St.length&&St[1]=="type"?Y+(Rt+"="+Ce+"&"):Y+(Rt+"=redacted&")}}else Y=null;else Y=F;return"XMLHTTP REQ ("+b+") [attempt "+L+"]: "+d+`
`+m+`
`+Y})}function zT(c,d,m,b,L,F,Y){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+L+"]: "+d+`
`+m+`
`+F+" "+Y})}function Ks(c,d,m,b){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+WT(c,m)+(b?" "+b:"")})}function qT(c,d){c.info(function(){return"TIMEOUT: "+d})}eo.prototype.info=function(){};function WT(c,d){if(!c.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var b=m[c];if(!(2>b.length)){var L=b[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return qs(m)}catch{return d}}var xa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Op={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mu;function Na(){}y(Na,Ws),Na.prototype.g=function(){return new XMLHttpRequest},Na.prototype.i=function(){return{}},mu=new Na;function wr(c,d,m,b){this.j=c,this.i=d,this.l=m,this.R=b||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xp}function xp(){this.i=null,this.g="",this.h=!1}var Np={},gu={};function _u(c,d,m){c.L=1,c.v=Va(qn(d)),c.m=m,c.P=!0,Dp(c,null)}function Dp(c,d){c.F=Date.now(),Da(c),c.A=qn(c.v);var m=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Gp(m.i,"t",b),c.C=0,m=c.j.J,c.h=new xp,c.g=hm(c.j,m?d:null,!c.m),0<c.O&&(c.M=new ft(p(c.Y,c,c.g),c.O)),d=c.U,m=c.g,b=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(At[0]=L.toString()),L=At);for(var F=0;F<L.length;F++){var Y=$(m,L[F],b||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=c.H?E(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),Ji(),HT(c.i,c.u,c.A,c.l,c.R,c.m)}wr.prototype.ca=function(c){c=c.target;const d=this.M;d&&Wn(c)==3?d.j():this.Y(c)},wr.prototype.Y=function(c){try{if(c==this.g)e:{const St=Wn(this.g);var d=this.g.Ba();const Qs=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||tm(this.g)))){this.J||St!=4||d==7||(d==8||0>=Qs?Ji(3):Ji(2)),yu(this);var m=this.g.Z();this.X=m;t:if(Lp(this)){var b=tm(this.g);c="";var L=b.length,F=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),to(this);var Y="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,c+=this.h.i.decode(b[d],{stream:!(F&&d==L-1)});b.length=0,this.h.g+=c,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,zT(this.i,this.u,this.A,this.l,this.R,St,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,_t=this.g;if((Me=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(Me)){var Ce=Me;break t}}Ce=null}if(m=Ce)Ks(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vu(this,m);else{this.o=!1,this.s=3,Vt(12),fs(this),to(this);break e}}if(this.P){m=!0;let pn;for(;!this.J&&this.C<Y.length;)if(pn=KT(this,Y),pn==gu){St==4&&(this.s=4,Vt(14),m=!1),Ks(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Np){this.s=4,Vt(15),Ks(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else Ks(this.i,this.l,pn,null),vu(this,pn);if(Lp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||Y.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)Ks(this.i,this.l,Y,"[Invalid Chunked Response]"),fs(this),to(this);else if(0<Y.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Au(Rt),Rt.M=!0,Vt(11))}}else Ks(this.i,this.l,Y,null),vu(this,Y);St==4&&fs(this),this.o&&!this.J&&(St==4?cm(this.j,this):(this.o=!1,Da(this)))}else uI(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),fs(this),to(this)}}}catch{}finally{}};function Lp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function KT(c,d){var m=c.C,b=d.indexOf(`
`,m);return b==-1?gu:(m=Number(d.substring(m,b)),isNaN(m)?Np:(b+=1,b+m>d.length?gu:(d=d.slice(b,b+m),c.C=b+m,d)))}wr.prototype.cancel=function(){this.J=!0,fs(this)};function Da(c){c.S=Date.now()+c.I,Mp(c,c.I)}function Mp(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Zi(p(c.ba,c),d)}function yu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}wr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(qT(this.i,this.A),this.L!=2&&(Ji(),Vt(17)),fs(this),this.s=2,to(this)):Mp(this,this.S-c)};function to(c){c.j.G==0||c.J||cm(c.j,c)}function fs(c){yu(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,Er(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function vu(c,d){try{var m=c.j;if(m.G!=0&&(m.g==c||Eu(m.h,c))){if(!c.K&&Eu(m.h,c)&&m.G==3){try{var b=m.Da.g.parse(d)}catch{b=null}if(Array.isArray(b)&&b.length==3){var L=b;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Ha(m),ja(m);else break e;Iu(m),Vt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Zi(p(m.Za,m),6e3));if(1>=Up(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ds(m,11)}else if((c.K||m.g==c)&&Ha(m),!S(d))for(L=m.Da.g.parse(d),d=0;d<L.length;d++){let Ce=L[d];if(m.T=Ce[0],Ce=Ce[1],m.G==2)if(Ce[0]=="c"){m.K=Ce[1],m.ia=Ce[2];const Rt=Ce[3];Rt!=null&&(m.la=Rt,m.j.info("VER="+m.la));const St=Ce[4];St!=null&&(m.Aa=St,m.j.info("SVER="+m.Aa));const Qs=Ce[5];Qs!=null&&typeof Qs=="number"&&0<Qs&&(b=1.5*Qs,m.L=b,m.j.info("backChannelRequestTimeoutMs_="+b)),b=m;const pn=c.g;if(pn){const qa=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qa){var F=b.h;F.g||qa.indexOf("spdy")==-1&&qa.indexOf("quic")==-1&&qa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(wu(F,F.h),F.h=null))}if(b.D){const Ru=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ru&&(b.ya=Ru,$e(b.I,b.D,Ru))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),b=m;var Y=c;if(b.qa=fm(b,b.J?b.ia:null,b.W),Y.K){Bp(b.h,Y);var Me=Y,_t=b.L;_t&&(Me.I=_t),Me.B&&(yu(Me),Da(Me)),b.g=Y}else om(b);0<m.i.length&&$a(m)}else Ce[0]!="stop"&&Ce[0]!="close"||ds(m,7);else m.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?ds(m,7):Tu(m):Ce[0]!="noop"&&m.l&&m.l.ta(Ce),m.v=0)}}Ji(4)}catch{}}var GT=class{constructor(c,d){this.g=c,this.map=d}};function Vp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Up(c){return c.h?1:c.g?c.g.size:0}function Eu(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function wu(c,d){c.g?c.g.add(d):c.h=d}function Bp(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Vp.prototype.cancel=function(){if(this.i=jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function jp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const m of c.g.values())d=d.concat(m.D);return d}return w(c.i)}function YT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],m=c.length,b=0;b<m;b++)d.push(c[b]);return d}d=[],m=0;for(b in c)d[m++]=c[b];return d}function QT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var m=0;m<c;m++)d.push(m);return d}d=[],m=0;for(const b in c)d[m++]=b;return d}}}function $p(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var m=QT(c),b=YT(c),L=b.length,F=0;F<L;F++)d.call(void 0,b[F],m&&m[F],c)}var Hp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XT(c,d){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var b=c[m].indexOf("="),L=null;if(0<=b){var F=c[m].substring(0,b);L=c[m].substring(b+1)}else F=c[m];d(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function hs(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof hs){this.h=c.h,La(this,c.j),this.o=c.o,this.g=c.g,Ma(this,c.s),this.l=c.l;var d=c.i,m=new so;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),zp(this,m),this.m=c.m}else c&&(d=String(c).match(Hp))?(this.h=!1,La(this,d[1]||"",!0),this.o=no(d[2]||""),this.g=no(d[3]||"",!0),Ma(this,d[4]),this.l=no(d[5]||"",!0),zp(this,d[6]||"",!0),this.m=no(d[7]||"")):(this.h=!1,this.i=new so(null,this.h))}hs.prototype.toString=function(){var c=[],d=this.j;d&&c.push(ro(d,qp,!0),":");var m=this.g;return(m||d=="file")&&(c.push("//"),(d=this.o)&&c.push(ro(d,qp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(ro(m,m.charAt(0)=="/"?eI:ZT,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",ro(m,nI)),c.join("")};function qn(c){return new hs(c)}function La(c,d,m){c.j=m?no(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Ma(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function zp(c,d,m){d instanceof so?(c.i=d,rI(c.i,c.h)):(m||(d=ro(d,tI)),c.i=new so(d,c.h))}function $e(c,d,m){c.i.set(d,m)}function Va(c){return $e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function no(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ro(c,d,m){return typeof c=="string"?(c=encodeURI(c).replace(d,JT),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function JT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var qp=/[#\/\?@]/g,ZT=/[#\?:]/g,eI=/[#\?]/g,tI=/[#\?@]/g,nI=/#/g;function so(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function br(c){c.g||(c.g=new Map,c.h=0,c.i&&XT(c.i,function(d,m){c.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=so.prototype,t.add=function(c,d){br(this),this.i=null,c=Gs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(d),this.h+=1,this};function Wp(c,d){br(c),d=Gs(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function Kp(c,d){return br(c),d=Gs(c,d),c.g.has(d)}t.forEach=function(c,d){br(this),this.g.forEach(function(m,b){m.forEach(function(L){c.call(d,L,b,this)},this)},this)},t.na=function(){br(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let b=0;b<d.length;b++){const L=c[b];for(let F=0;F<L.length;F++)m.push(d[b])}return m},t.V=function(c){br(this);let d=[];if(typeof c=="string")Kp(this,c)&&(d=d.concat(this.g.get(Gs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)d=d.concat(c[m])}return d},t.set=function(c,d){return br(this),this.i=null,c=Gs(this,c),Kp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function Gp(c,d,m){Wp(c,d),0<m.length&&(c.i=null,c.g.set(Gs(c,d),w(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var b=d[m];const F=encodeURIComponent(String(b)),Y=this.V(b);for(b=0;b<Y.length;b++){var L=F;Y[b]!==""&&(L+="="+encodeURIComponent(String(Y[b]))),c.push(L)}}return this.i=c.join("&")};function Gs(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function rI(c,d){d&&!c.j&&(br(c),c.i=null,c.g.forEach(function(m,b){var L=b.toLowerCase();b!=L&&(Wp(this,b),Gp(this,L,m))},c)),c.j=d}function sI(c,d){const m=new eo;if(a.Image){const b=new Image;b.onload=g(Tr,m,"TestLoadImage: loaded",!0,d,b),b.onerror=g(Tr,m,"TestLoadImage: error",!1,d,b),b.onabort=g(Tr,m,"TestLoadImage: abort",!1,d,b),b.ontimeout=g(Tr,m,"TestLoadImage: timeout",!1,d,b),a.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else d(!1)}function iI(c,d){const m=new eo,b=new AbortController,L=setTimeout(()=>{b.abort(),Tr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:b.signal}).then(F=>{clearTimeout(L),F.ok?Tr(m,"TestPingServer: ok",!0,d):Tr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Tr(m,"TestPingServer: error",!1,d)})}function Tr(c,d,m,b,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),b(m)}catch{}}function oI(){this.g=new nn}function aI(c,d,m){const b=m||"";try{$p(c,function(L,F){let Y=L;u(L)&&(Y=qs(L)),d.push(b+F+"="+encodeURIComponent(Y))})}catch(L){throw d.push(b+"type="+encodeURIComponent("_badmap")),L}}function Fa(c){this.l=c.Ub||null,this.j=c.eb||!1}y(Fa,Ws),Fa.prototype.g=function(){return new Ua(this.l,this.j)},Fa.prototype.i=function(c){return function(){return c}}({});function Ua(c,d){ie.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Ua,ie),t=Ua.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,oo(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,io(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,oo(this)),this.g&&(this.readyState=3,oo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?io(this):oo(this),this.readyState==3&&Yp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,io(this))},t.Qa=function(c){this.g&&(this.response=c,io(this))},t.ga=function(){this.g&&io(this)};function io(c){c.readyState=4,c.l=null,c.j=null,c.v=null,oo(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=d.next();return c.join(`\r
`)};function oo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Qp(c){let d="";return M(c,function(m,b){d+=b,d+=":",d+=m,d+=`\r
`}),d}function bu(c,d,m){e:{for(b in m){var b=!1;break e}b=!0}b||(m=Qp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):$e(c,d,m))}function Xe(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Xe,ie);var cI=/^https?$/i,lI=["POST","PUT"];t=Xe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,m,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mu.g(),this.v=this.o?Ap(this.o):Ap(mu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(F){Xp(this,F);return}if(c=m||"",m=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var L in b)m.set(L,b[L]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const F of b.keys())m.set(F,b.get(F));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(lI,d,void 0))||b||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Y]of m)this.g.setRequestHeader(F,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{em(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Xp(this,F)}};function Xp(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Jp(c),Ba(c)}function Jp(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zp(this):this.bb())},t.bb=function(){Zp(this)};function Zp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Wn(c)!=4||c.Z()!=2)){if(c.u&&Wn(c)==4)Se(c.Ea,0,c);else if(he(c,"readystatechange"),Wn(c)==4){c.h=!1;try{const Y=c.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var b;if(b=Y===0){var L=String(c.D).match(Hp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),b=!cI.test(L?L.toLowerCase():"")}m=b}if(m)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<Wn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Jp(c)}}finally{Ba(c)}}}}function Ba(c,d){if(c.g){em(c);const m=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||he(c,"ready");try{m.onreadystatechange=b}catch{}}}function em(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Wn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Mt(d)}};function tm(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function uI(c){const d={};c=(c.g&&2<=Wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(S(c[b]))continue;var m=x(c[b]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[L]||[];d[L]=F,F.push(m)}T(d,function(b){return b.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ao(c,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||d}function nm(c){this.Aa=0,this.i=[],this.j=new eo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ao("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ao("baseRetryDelayMs",5e3,c),this.cb=ao("retryDelaySeedMs",1e4,c),this.Wa=ao("forwardChannelMaxRetries",2,c),this.wa=ao("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Vp(c&&c.concurrentRequestLimit),this.Da=new oI,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nm.prototype,t.la=8,t.G=1,t.connect=function(c,d,m,b){Vt(0),this.W=c,this.H=d||{},m&&b!==void 0&&(this.H.OSID=m,this.H.OAID=b),this.F=this.X,this.I=fm(this,null,this.W),$a(this)};function Tu(c){if(rm(c),c.G==3){var d=c.U++,m=qn(c.I);if($e(m,"SID",c.K),$e(m,"RID",d),$e(m,"TYPE","terminate"),co(c,m),d=new wr(c,c.j,d),d.L=2,d.v=Va(qn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=hm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Da(d)}um(c)}function ja(c){c.g&&(Au(c),c.g.cancel(),c.g=null)}function rm(c){ja(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ha(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function $a(c){if(!Fp(c.h)&&!c.s){c.s=!0;var d=c.Ga;se||dn(),ne||(se(),ne=!0),Ue.add(d,c),c.B=0}}function fI(c,d){return Up(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Zi(p(c.Ga,c,d),lm(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new wr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=E(F),I(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var b=this.i[m];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(d+=b,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=im(this,L,d),m=qn(this.I),$e(m,"RID",c),$e(m,"CVER",22),this.D&&$e(m,"X-HTTP-Session-Id",this.D),co(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(Qp(F)))+"&"+d:this.m&&bu(m,this.m,F)),wu(this.h,L),this.Ua&&$e(m,"TYPE","init"),this.P?($e(m,"$req",d),$e(m,"SID","null"),L.T=!0,_u(L,m,null)):_u(L,m,d),this.G=2}}else this.G==3&&(c?sm(this,c):this.i.length==0||Fp(this.h)||sm(this))};function sm(c,d){var m;d?m=d.l:m=c.U++;const b=qn(c.I);$e(b,"SID",c.K),$e(b,"RID",m),$e(b,"AID",c.T),co(c,b),c.m&&c.o&&bu(b,c.m,c.o),m=new wr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),d&&(c.i=d.D.concat(c.i)),d=im(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),wu(c.h,m),_u(m,b,d)}function co(c,d){c.H&&M(c.H,function(m,b){$e(d,b,m)}),c.l&&$p({},function(m,b){$e(d,b,m)})}function im(c,d,m){m=Math.min(c.i.length,m);var b=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Y=["count="+m];F==-1?0<m?(F=L[0].g,Y.push("ofs="+F)):F=0:Y.push("ofs="+F);let Me=!0;for(let _t=0;_t<m;_t++){let Ce=L[_t].g;const Rt=L[_t].map;if(Ce-=F,0>Ce)F=Math.max(0,L[_t].g-100),Me=!1;else try{aI(Rt,Y,"req"+Ce+"_")}catch{b&&b(Rt)}}if(Me){b=Y.join("&");break e}}}return c=c.i.splice(0,m),d.D=c,b}function om(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;se||dn(),ne||(se(),ne=!0),Ue.add(d,c),c.v=0}}function Iu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Zi(p(c.Fa,c),lm(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,am(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Zi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),ja(this),am(this))};function Au(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function am(c){c.g=new wr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=qn(c.qa);$e(d,"RID","rpc"),$e(d,"SID",c.K),$e(d,"AID",c.T),$e(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&$e(d,"TO",c.ja),$e(d,"TYPE","xmlhttp"),co(c,d),c.m&&c.o&&bu(d,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Va(qn(d)),m.m=null,m.P=!0,Dp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,ja(this),Iu(this),Vt(19))};function Ha(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function cm(c,d){var m=null;if(c.g==d){Ha(c),Au(c),c.g=null;var b=2}else if(Eu(c.h,d))m=d.D,Bp(c.h,d),b=1;else return;if(c.G!=0){if(d.o)if(b==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var L=c.B;b=Oa(),he(b,new kp(b,m)),$a(c)}else om(c);else if(L=d.s,L==3||L==0&&0<d.X||!(b==1&&fI(c,d)||b==2&&Iu(c)))switch(m&&0<m.length&&(d=c.h,d.i=d.i.concat(m)),L){case 1:ds(c,5);break;case 4:ds(c,10);break;case 3:ds(c,6);break;default:ds(c,2)}}}function lm(c,d){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*d}function ds(c,d){if(c.j.info("Error code "+d),d==2){var m=p(c.fb,c),b=c.Xa;const L=!b;b=new hs(b||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||La(b,"https"),Va(b),L?sI(b.toString(),m):iI(b.toString(),m)}else Vt(2);c.G=0,c.l&&c.l.sa(d),um(c),rm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function um(c){if(c.G=0,c.ka=[],c.l){const d=jp(c.h);(d.length!=0||c.i.length!=0)&&(P(c.ka,d),P(c.ka,c.i),c.h.i.length=0,w(c.i),c.i.length=0),c.l.ra()}}function fm(c,d,m){var b=m instanceof hs?qn(m):new hs(m);if(b.g!="")d&&(b.g=d+"."+b.g),Ma(b,b.s);else{var L=a.location;b=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var F=new hs(null);b&&La(F,b),d&&(F.g=d),L&&Ma(F,L),m&&(F.l=m),b=F}return m=c.D,d=c.ya,m&&d&&$e(b,m,d),$e(b,"VER",c.la),co(c,b),b}function hm(c,d,m){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new Xe(new Fa({eb:m})):new Xe(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dm(){}t=dm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function za(){}za.prototype.g=function(c,d){return new Yt(c,d)};function Yt(c,d){ie.call(this),this.g=new nm(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!S(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!S(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Ys(this)}y(Yt,ie),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){Tu(this.g)},Yt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=qs(c),c=m);d.i.push(new GT(d.Ya++,c)),d.G==3&&$a(d)},Yt.prototype.N=function(){this.g.l=null,delete this.j,Tu(this.g),delete this.g,Yt.aa.N.call(this)};function pm(c){du.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const m in d){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}y(pm,du);function mm(){pu.call(this),this.status=1}y(mm,pu);function Ys(c){this.g=c}y(Ys,dm),Ys.prototype.ua=function(){he(this.g,"a")},Ys.prototype.ta=function(c){he(this.g,new pm(c))},Ys.prototype.sa=function(c){he(this.g,new mm)},Ys.prototype.ra=function(){he(this.g,"b")},za.prototype.createWebChannel=za.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,pb=function(){return new za},db=function(){return Oa()},hb=us,nh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xa.NO_ERROR=0,xa.TIMEOUT=8,xa.HTTP_ERROR=6,Ic=xa,Op.COMPLETE="complete",fb=Op,Rp.EventType=Xi,Xi.OPEN="a",Xi.CLOSE="b",Xi.ERROR="c",Xi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Eo=Rp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,ub=Xe}).apply(typeof oc<"u"?oc:typeof self<"u"?self:typeof window<"u"?window:{});const T_="@firebase/firestore",I_="4.7.17";/**
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
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
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
 */let Wi="11.9.0";/**
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
 */const Ds=new vd("@firebase/firestore");function ni(){return Ds.logLevel}function te(t,...e){if(Ds.logLevel<=we.DEBUG){const n=e.map(Od);Ds.debug(`Firestore (${Wi}): ${t}`,...n)}}function fr(t,...e){if(Ds.logLevel<=we.ERROR){const n=e.map(Od);Ds.error(`Firestore (${Wi}): ${t}`,...n)}}function Oi(t,...e){if(Ds.logLevel<=we.WARN){const n=e.map(Od);Ds.warn(`Firestore (${Wi}): ${t}`,...n)}}function Od(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,mb(t,r,n)}function mb(t,e,n){let r=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw fr(r),new Error(r)}function Ne(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||mb(e,s,r)}function ye(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class aN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cN{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new gb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new kt(e)}}class lN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new A_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new A_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function _b(){return new TextEncoder}/**
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
 */class yb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function rh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=_b(),o=dN(i.encode(R_(t,n)),i.encode(R_(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function R_(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function dN(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function xi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const S_=-62135596800,C_=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*C_);return new lt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<S_)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/C_}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-S_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new lt(0,0))}static max(){return new _e(new lt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const P_="__name__";class Pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=Pn.isNumericId(e),s=Pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):rh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kr.fromString(e.substring(4,e.length-2))}}class qe extends Pn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const pN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Pn{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return pN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===P_}static keyField(){return new bt([P_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new le(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new le(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new le(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(qe.fromString(e))}static fromName(e){return new fe(qe.fromString(e).popFirst(5))}static empty(){return new fe(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new qe(e.slice()))}}/**
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
 */const sa=-1;function mN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Xr(s,fe.empty(),e)}function gN(t){return new Xr(t.readTime,t.key,sa)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(_e.min(),fe.empty(),sa)}static max(){return new Xr(_e.max(),fe.empty(),sa)}}function _N(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const yN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ki(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==yN)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function EN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $l{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}$l.le=-1;/**
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
 */const xd=-1;function Hl(t){return t==null}function rl(t){return t===0&&1/t==-1/0}function wN(t){return typeof t=="number"&&Number.isInteger(t)&&!rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const vb="";function bN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=k_(e)),e=TN(t.get(n),e);return k_(e)}function TN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case vb:n+="";break;default:n+=i}}return n}function k_(t){return t+vb+""}/**
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
 */function O_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Eb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ac(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ac(this.root,e,this.comparator,!1)}getReverseIterator(){return new ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ac(this.root,e,this.comparator,!0)}}class ac{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new x_(this.data.getIterator())}getIteratorFrom(e){return new x_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class x_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ut(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class wb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wb("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const IN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(Ne(!!t,39018),typeof t=="string"){let e=0;const n=IN.exec(t);if(Ne(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */const bb="server_timestamp",Tb="__type__",Ib="__previous_value__",Ab="__local_write_time__";function Nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Tb])===null||n===void 0?void 0:n.stringValue)===bb}function zl(t){const e=t.mapValue.fields[Ib];return Nd(e)?zl(e):e}function ia(t){const e=Jr(t.mapValue.fields[Ab].timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class AN{constructor(e,n,r,s,i,o,a,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const sl="(default)";class oa{constructor(e,n){this.projectId=e,this.database=n||sl}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database===sl}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Rb="__type__",RN="__max__",cc={mapValue:{}},Sb="__vector__",il="value";function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nd(t)?4:CN(t)?9007199254740991:SN(t)?10:11:me(28295,{value:t})}function $n(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ia(t).isEqual(ia(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jr(s.timestampValue),a=Jr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zr(s.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return tt(s.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return tt(s.integerValue)===tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=tt(s.doubleValue),a=tt(i.doubleValue);return o===a?rl(o)===rl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(O_(o)!==O_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$n(o[l],a[l])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function aa(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=tt(i.integerValue||i.doubleValue),l=tt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return N_(t.timestampValue,e.timestampValue);case 4:return N_(ia(t),ia(e));case 5:return rh(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Zr(i),l=Zr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const f=ve(a[u],l[u]);if(f!==0)return f}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(tt(i.latitude),tt(o.latitude));return a!==0?a:ve(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return D_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,f;const h=i.fields||{},p=o.fields||{},g=(a=h[il])===null||a===void 0?void 0:a.arrayValue,y=(l=p[il])===null||l===void 0?void 0:l.arrayValue,w=ve(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((f=y==null?void 0:y.values)===null||f===void 0?void 0:f.length)||0);return w!==0?w:D_(g,y)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===cc.mapValue&&o===cc.mapValue)return 0;if(i===cc.mapValue)return 1;if(o===cc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let h=0;h<l.length&&h<f.length;++h){const p=rh(l[h],f[h]);if(p!==0)return p;const g=Ni(a[l[h]],u[f[h]]);if(g!==0)return g}return ve(l.length,f.length)}(t.mapValue,e.mapValue);default:throw me(23264,{Pe:n})}}function N_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Jr(t),r=Jr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function D_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ni(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Di(t){return sh(t)}function sh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sh(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function Ac(t){switch(es(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zl(t);return e?16+Ac(e):16;case 5:return 2*t.stringValue.length;case 6:return Zr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ac(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return cs(r.fields,(i,o)=>{s+=i.length+Ac(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function ih(t){return!!t&&"integerValue"in t}function Dd(t){return!!t&&"arrayValue"in t}function L_(t){return!!t&&"nullValue"in t}function M_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rc(t){return!!t&&"mapValue"in t}function SN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rb])===null||n===void 0?void 0:n.stringValue)===Sb}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RN}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=bt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Mo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Rc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(Mo(this.value))}}function Cb(t){const e=[];return cs(t.fields,(n,r)=>{const s=new bt([n]);if(Rc(r)){const i=Cb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
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
 */class Nt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,_e.min(),_e.min(),_e.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new Nt(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new Nt(e,2,n,_e.min(),_e.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,_e.min(),_e.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ol{constructor(e,n){this.position=e,this.inclusive=n}}function V_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function F_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class al{constructor(e,n="asc"){this.field=e,this.dir=n}}function PN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Pb{}class ot extends Pb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ON(e,n,r):n==="array-contains"?new DN(e,r):n==="in"?new LN(e,r):n==="not-in"?new MN(e,r):n==="array-contains-any"?new VN(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xN(e,r):new NN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ni(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends Pb{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Hn(e,n)}matches(e){return kb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function kb(t){return t.op==="and"}function Ob(t){return kN(t)&&kb(t)}function kN(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function oh(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(Ob(t))return t.filters.map(e=>oh(e)).join(",");{const e=t.filters.map(n=>oh(n)).join(",");return`${t.op}(${e})`}}function xb(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&$n(r.value,s.value)}(t,e):t instanceof Hn?function(r,s){return s instanceof Hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&xb(o,s.filters[a]),!0):!1}(t,e):void me(19439)}function Nb(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Nb).join(" ,")+"}"}(t):"Filter"}class ON extends ot{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class xN extends ot{constructor(e,n){super(e,"in",n),this.keys=Db("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NN extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Db("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Db(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class DN extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dd(n)&&aa(n.arrayValue,this.value)}}class LN extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class MN extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!aa(this.value.arrayValue,n)}}class VN extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
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
 */class FN{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Ie=null}}function U_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new FN(t,e,n,r,s,i,o)}function Ld(t){const e=ye(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>oh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.Ie=n}return e.Ie}function Md(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!F_(t.startAt,e.startAt)&&F_(t.endAt,e.endAt)}function ah(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ql{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function UN(t,e,n,r,s,i,o,a){return new ql(t,e,n,r,s,i,o,a)}function Lb(t){return new ql(t)}function B_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BN(t){return t.collectionGroup!==null}function Vo(t){const e=ye(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(bt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new al(i,r))}),n.has(bt.keyField().canonicalString())||e.Ee.push(new al(bt.keyField(),r))}return e.Ee}function Un(t){const e=ye(t);return e.de||(e.de=jN(e,Vo(t))),e.de}function jN(t,e){if(t.limitType==="F")return U_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new al(s.field,i)});const n=t.endAt?new ol(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ol(t.startAt.position,t.startAt.inclusive):null;return U_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ch(t,e,n){return new ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wl(t,e){return Md(Un(t),Un(e))&&t.limitType===e.limitType}function Mb(t){return`${Ld(Un(t))}|lt:${t.limitType}`}function ri(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Nb(s)).join(", ")}]`),Hl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Di(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Di(s)).join(",")),`Target(${r})`}(Un(t))}; limitType=${t.limitType})`}function Kl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Vo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=V_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Vo(r),s)||r.endAt&&!function(o,a,l){const u=V_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Vo(r),s))}(t,e)}function $N(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vb(t){return(e,n)=>{let r=!1;for(const s of Vo(t)){const i=HN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HN(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ni(l,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class Hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Eb(this.inner)}size(){return this.innerSize}}/**
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
 */const zN=new Qe(fe.comparator);function hr(){return zN}const Fb=new Qe(fe.comparator);function wo(...t){let e=Fb;for(const n of t)e=e.insert(n.key,n);return e}function Ub(t){let e=Fb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ws(){return Fo()}function Bb(){return Fo()}function Fo(){return new Hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qN=new Qe(fe.comparator),WN=new ut(fe.comparator);function Te(...t){let e=WN;for(const n of t)e=e.add(n);return e}const KN=new ut(ve);function GN(){return KN}/**
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
 */function Vd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rl(e)?"-0":e}}function jb(t){return{integerValue:""+t}}function YN(t,e){return wN(e)?jb(e):Vd(t,e)}/**
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
 */class Gl{constructor(){this._=void 0}}function QN(t,e,n){return t instanceof cl?function(s,i){const o={fields:{[Tb]:{stringValue:bb},[Ab]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nd(i)&&(i=zl(i)),i&&(o.fields[Ib]=i),{mapValue:o}}(n,e):t instanceof ca?Hb(t,e):t instanceof la?zb(t,e):function(s,i){const o=$b(s,i),a=j_(o)+j_(s.Re);return ih(o)&&ih(s.Re)?jb(a):Vd(s.serializer,a)}(t,e)}function XN(t,e,n){return t instanceof ca?Hb(t,e):t instanceof la?zb(t,e):n}function $b(t,e){return t instanceof ll?function(r){return ih(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class cl extends Gl{}class ca extends Gl{constructor(e){super(),this.elements=e}}function Hb(t,e){const n=qb(e);for(const r of t.elements)n.some(s=>$n(s,r))||n.push(r);return{arrayValue:{values:n}}}class la extends Gl{constructor(e){super(),this.elements=e}}function zb(t,e){let n=qb(e);for(const r of t.elements)n=n.filter(s=>!$n(s,r));return{arrayValue:{values:n}}}class ll extends Gl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function j_(t){return tt(t.integerValue||t.doubleValue)}function qb(t){return Dd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ca&&s instanceof ca||r instanceof la&&s instanceof la?xi(r.elements,s.elements,$n):r instanceof ll&&s instanceof ll?$n(r.Re,s.Re):r instanceof cl&&s instanceof cl}(t.transform,e.transform)}class ZN{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function Wb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fd(t.key,un.none()):new Aa(t.key,t.data,un.none());{const n=t.data,r=Wt.empty();let s=new ut(bt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ls(t.key,r,new Xt(s.toArray()),un.none())}}function eD(t,e,n){t instanceof Aa?function(s,i,o){const a=s.value.clone(),l=H_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(s,i,o){if(!Sc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=H_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Kb(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Uo(t,e,n,r){return t instanceof Aa?function(i,o,a,l){if(!Sc(i.precondition,o))return a;const u=i.value.clone(),f=z_(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ls?function(i,o,a,l){if(!Sc(i.precondition,o))return a;const u=z_(i.fieldTransforms,l,o),f=o.data;return f.setAll(Kb(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Sc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function tD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=$b(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function $_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xi(r,s,(i,o)=>JN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends Yl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ls extends Yl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function H_(t,e,n){const r=new Map;Ne(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,XN(o,a,n[s]))}return r}function z_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QN(i,o,e))}return r}class Fd extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nD extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Bb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Wb(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>$_(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>$_(n,r))}}class Ud{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return qN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ud(e,n,r,s)}}/**
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
 */class sD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,Ae;function oD(t){switch(t){case H.OK:return me(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function Gb(t){if(t===void 0)return fr("GRPC error has no .code"),H.UNKNOWN;switch(t){case nt.OK:return H.OK;case nt.CANCELLED:return H.CANCELLED;case nt.UNKNOWN:return H.UNKNOWN;case nt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case nt.INTERNAL:return H.INTERNAL;case nt.UNAVAILABLE:return H.UNAVAILABLE;case nt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case nt.NOT_FOUND:return H.NOT_FOUND;case nt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case nt.ABORTED:return H.ABORTED;case nt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case nt.DATA_LOSS:return H.DATA_LOSS;default:return me(39323,{code:t})}}(Ae=nt||(nt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const aD=new Kr([4294967295,4294967295],0);function q_(t){const e=_b().encode(t),n=new lb;return n.update(e),new Uint8Array(n.digest())}function W_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class Bd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bo(`Invalid padding: ${n}`);if(r<0)throw new bo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new bo(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Kr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(aD)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=q_(e),[r,s]=W_(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const n=q_(e),[r,s]=W_(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ql{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ql(_e.min(),s,new Qe(ve),hr(),Te())}}class Ra{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,Te(),Te(),Te())}}/**
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
 */class Cc{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Yb{constructor(e,n){this.targetId=e,this.Ce=n}}class Qb{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class K_{constructor(){this.Fe=0,this.Me=G_(),this.xe=It.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Te(),n=Te(),r=Te();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new Ra(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=G_()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ne(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class cD{constructor(e){this.ze=e,this.je=new Map,this.He=hr(),this.Je=lc(),this.Ye=lc(),this.Ze=new Qe(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(ah(i))if(r===0){const o=new fe(i.path);this.tt(n,o,Nt.newNoDocument(o,_e.min()))}else Ne(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const a=this.ct(e),l=a?this.lt(a,e,o):1;if(l!==0){this.st(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Zr(r).toUint8Array()}catch(l){if(l instanceof wb)return Oi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Bd(o,s,i)}catch(l){return Oi(l instanceof bo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.pe===0?null:a}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const a=this._t(o);if(a){if(i.current&&ah(a.target)){const l=new fe(a.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,Nt.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Te();this.Ye.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this._t(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Ql(e,n,this.Ze,this.He,r);return this.He=hr(),this.Je=lc(),this.Ye=lc(),this.Ze=new Qe(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new K_,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new ut(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ut(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new K_),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function lc(){return new Qe(fe.comparator)}function G_(){return new Qe(fe.comparator)}const lD={asc:"ASCENDING",desc:"DESCENDING"},uD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fD={and:"AND",or:"OR"};class hD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lh(t,e){return t.useProto3Json||Hl(e)?e:{value:e}}function ul(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dD(t,e){return ul(t,e.toTimestamp())}function Bn(t){return Ne(!!t,49232),_e.fromTimestamp(function(n){const r=Jr(n);return new lt(r.seconds,r.nanos)}(t))}function jd(t,e){return uh(t,e).canonicalString()}function uh(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Jb(t){const e=qe.fromString(t);return Ne(r0(e),10190,{key:e.toString()}),e}function fh(t,e){return jd(t.databaseId,e.path)}function tf(t,e){const n=Jb(e);if(n.get(1)!==t.databaseId.projectId)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(e0(n))}function Zb(t,e){return jd(t.databaseId,e)}function pD(t){const e=Jb(t);return e.length===4?qe.emptyPath():e0(e)}function hh(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function e0(t){return Ne(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Y_(t,e,n){return{name:fh(t,e),fields:n.value.mapValue.fields}}function mD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ne(f===void 0||typeof f=="string",58123),It.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),It.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?H.UNKNOWN:Gb(u.code);return new le(f,u.message||"")}(o);n=new Qb(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tf(t,r.document.name),i=Bn(r.document.updateTime),o=r.document.createTime?Bn(r.document.createTime):_e.min(),a=new Wt({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Cc(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tf(t,r.document),i=r.readTime?Bn(r.readTime):_e.min(),o=Nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Cc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tf(t,r.document),i=r.removedTargetIds||[];n=new Cc([],i,s,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new iD(s,i),a=r.targetId;n=new Yb(a,o)}}return n}function gD(t,e){let n;if(e instanceof Aa)n={update:Y_(t,e.key,e.value)};else if(e instanceof Fd)n={delete:fh(t,e.key)};else if(e instanceof ls)n={update:Y_(t,e.key,e.data),updateMask:AD(e.fieldMask)};else{if(!(e instanceof nD))return me(16599,{ft:e.type});n={verify:fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ca)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof la)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ll)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function _D(t,e){return t&&t.length>0?(Ne(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Bn(s.updateTime):Bn(i);return o.isEqual(_e.min())&&(o=Bn(i)),new ZN(o,s.transformResults||[])}(n,e))):[]}function yD(t,e){return{documents:[Zb(t,e.path)]}}function vD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Zb(t,s);const i=function(u){if(u.length!==0)return n0(Hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:si(p.field),direction:bD(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=lh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function ED(t){let e=pD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(h){const p=t0(h);return p instanceof Hn&&Ob(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new al(ii(y.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Hl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,g=h.values||[];return new ol(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,g=h.values||[];return new ol(g,p)}(n.endAt)),UN(e,s,o,i,a,"F",l,u)}function wD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function t0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ii(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ii(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ii(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return ot.create(ii(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>t0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function bD(t){return lD[t]}function TD(t){return uD[t]}function ID(t){return fD[t]}function si(t){return{fieldPath:t.canonicalString()}}function ii(t){return bt.fromServerFormat(t.fieldPath)}function n0(t){return t instanceof ot?function(n){if(n.op==="=="){if(M_(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(L_(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(M_(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(L_(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:TD(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(s=>n0(s));return r.length===1?r[0]:{compositeFilter:{op:ID(n.op),filters:r}}}(t):me(54877,{filter:t})}function AD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function r0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Br{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RD{constructor(e){this.wt=e}}function SD(t){const e=ED({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ch(e,e.limit,"L"):e}/**
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
 */class CD{constructor(){this.Cn=new PD}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Xr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class PD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(qe.comparator)).toArray()}}/**
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
 */const Q_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},s0=41943040;class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(s0,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
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
 */class Li{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Li(0)}static lr(){return new Li(-1)}}/**
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
 */const X_="LruGarbageCollector",kD=1048576;function J_([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class OD{constructor(e){this.Er=e,this.buffer=new ut(J_),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();J_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){te(X_,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gi(n)?te(X_,"Ignoring IndexedDB error during garbage collection: ",n):await Ki(n)}await this.mr(3e5)})}}class ND{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve($l.le);const r=new OD(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Q_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Q_):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,a,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ni()<=we.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function DD(t,e){return new ND(t,e)}/**
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
 */class LD{constructor(){this.changes=new Hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class VD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Uo(r.mutation,s,Xt.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=wo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hr();const o=Fo(),a=function(){return Fo()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ls)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Uo(f.mutation,u,f.mutation.getFieldMask(),lt.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var h;return a.set(u,new MD(f,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Fo();let s=new Qe((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Xt.empty();f=a.applyToLocalView(u,f),r.set(l,f);const h=(s.get(a.batchId)||Te()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,f=l.value,h=Bb();f.forEach(p=>{if(!i.has(p)){const g=Wb(n.get(p),r.get(p));g!==null&&h.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(ws());let a=sa,l=i;return o.next(u=>j.forEach(u,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(f=>({batchId:a,changes:Ub(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=wo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(h,p){return new ql(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Nt.newInvalidDocument(f)))});let a=wo();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Uo(f.mutation,u,Xt.empty(),lt.now()),Kl(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class FD{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return j.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Bn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:SD(s.bundledQuery),readTime:Bn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class UD{constructor(){this.overlays=new Qe(fe.comparator),this.Qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ws();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=ws(),i=n.length+1,o=new fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=ws(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=ws(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return j.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sD(n,r));let i=this.Qr.get(n);i===void 0&&(i=Te(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class BD{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class $d{constructor(){this.$r=new ut(ht.Ur),this.Kr=new ut(ht.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new ht(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new ht(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new fe(new qe([])),r=new ht(n,e),s=new ht(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new fe(new qe([])),r=new ht(n,e),s=new ht(n,e+1);let i=Te();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return fe.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||fe.comparator(e.key,n.key)}}/**
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
 */class jD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new ut(ht.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Xr=this.Xr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?xd:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const a=this.ei(o.Zr);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(ve);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],a=>{r=r.add(a.Zr)})}),j.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new ht(new fe(i),0);let a=new ut(ve);return this.Xr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Zr)),!0)},o),j.resolve(this.ni(a))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return j.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new ht(n,0),s=this.Xr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $D{constructor(e){this.ii=e,this.docs=function(){return new Qe(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Nt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hr();const o=n.path,a=new fe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_N(gN(f),r)<=0||(s.has(f.key)||Kl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}si(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HD(this)}getSize(e){return j.resolve(this.size)}}class HD extends LD{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class zD{constructor(e){this.persistence=e,this.oi=new Hs(n=>Ld(n),Md),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this._i=0,this.ai=new $d,this.targetCount=0,this.ui=Li.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),j.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Li(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Tr(n),j.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.ai.containsKey(n))}}/**
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
 */class i0{constructor(e,n){this.ci={},this.overlays={},this.li=new $l(0),this.hi=!1,this.hi=!0,this.Pi=new BD,this.referenceDelegate=e(this),this.Ti=new zD(this),this.indexManager=new CD,this.remoteDocumentCache=function(s){return new $D(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new RD(n),this.Ei=new FD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new jD(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new qD(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return j.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class qD extends vN{constructor(e){super(),this.currentSequenceNumber=e}}class Hd{constructor(e){this.persistence=e,this.Vi=new $d,this.mi=null}static fi(e){return new Hd(e)}get gi(){if(this.mi)return this.mi;throw me(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,r=>{const s=fe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return j.or([()=>j.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class fl{constructor(e,n){this.persistence=e,this.yi=new Hs(r=>bN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=DD(this,n)}static fi(e,n){return new fl(e,n)}di(){}Ai(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return j.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ac(e.data.value)),n}Dr(e,n,r){return j.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zd(e,n.fromCache,r,s)}}/**
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
 */class WD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KD{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return lk()?8:EN(Dt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new WD;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.fs)return this.Ds(e,n,o,a.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(ni()<=we.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(ni()<=we.DEBUG&&te("QueryEngine","Query:",ri(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ni()<=we.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):j.resolve())}ws(e,n){if(B_(n))return j.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ch(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ys.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.vs(n,a);return this.Cs(n,u,o,l.readTime)?this.ws(e,ch(n,null,"F")):this.Fs(e,u,n,l)}))})))}bs(e,n,r,s){return B_(n)||s.isEqual(_e.min())?j.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(ni()<=we.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ri(n)),this.Fs(e,o,n,mN(s,sa)).next(a=>a))})}vs(e,n){let r=new ut(Vb(e));return n.forEach((s,i)=>{Kl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ni()<=we.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ri(n)),this.ys.getDocumentsMatchingQuery(e,n,Xr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const qd="LocalStore",GD=3e8;class YD{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Qe(ve),this.Os=new Hs(i=>Ld(i),Md),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VD(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function QD(t,e,n,r){return new YD(t,e,n,r)}async function o0(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:a}))})})}function XD(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,f){const h=u.batch,p=h.keys();let g=j.resolve();return p.forEach(y=>{g=g.next(()=>f.getEntry(l,y)).next(w=>{const P=u.docVersions.get(y);Ne(P!==null,48541),w.version.compareTo(P)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),f.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function a0(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function JD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const a=[];e.targetChanges.forEach((f,h)=>{const p=s.get(h);if(!p)return;a.push(n.Ti.removeMatchingKeys(i,f.removedDocuments,h).next(()=>n.Ti.addMatchingKeys(i,f.addedDocuments,h)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(It.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(h,g),function(w,P,k){return w.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=GD?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,g,f)&&a.push(n.Ti.updateTargetData(i,g))});let l=hr(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(ZD(i,o,e.documentUpdates).next(f=>{l=f.qs,u=f.Qs})),!r.isEqual(_e.min())){const f=n.Ti.getLastRemoteSnapshotVersion(i).next(h=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.xs=s,i))}function ZD(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te(qd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{qs:o,Qs:s}})}function eL(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=xd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tL(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new Br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function dh(t,e,n){const r=ye(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gi(o))throw o;te(qd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Z_(t,e,n){const r=ye(t);let s=_e.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const h=ye(l),p=h.Os.get(f);return p!==void 0?j.resolve(h.xs.get(p)):h.Ti.getTargetData(u,f)}(r,o,Un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Te())).next(a=>(nL(r,$N(e),a),{documents:a,$s:i})))}function nL(t,e,n){let r=t.Ns.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class ey{constructor(){this.activeTargetIds=GN()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rL{constructor(){this.xo=new ey,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ey,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sL{No(e){}shutdown(){}}/**
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
 */const ty="ConnectivityMonitor";class ny{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){te(ty,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){te(ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uc=null;function ph(){return uc===null?uc=function(){return 268435456+Math.round(2147483648*Math.random())}():uc++,"0x"+uc.toString(16)}/**
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
 */const nf="RestConnection",iL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oL{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===sl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=ph(),a=this.jo(e,n.toUriEncodedString());te(nf,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,s,i);const{host:u}=new URL(a),f=os(u);return this.Jo(e,a,l,r,f).then(h=>(te(nf,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Oi(nf,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=iL[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class aL{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Ct="WebChannelConnection";class cL extends oL{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=ph();return new Promise((a,l)=>{const u=new ub;u.setWithCredentials(!0),u.listenOnce(fb.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ic.NO_ERROR:const h=u.getResponseJson();te(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case Ic.TIMEOUT:te(Ct,`RPC '${e}' ${o} timed out`),l(new le(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const p=u.getStatus();if(te(Ct,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const w=function(k){const S=k.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(S)>=0?S:H.UNKNOWN}(y.status);l(new le(w,y.message))}else l(new le(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new le(H.UNAVAILABLE,"Connection failed."));break;default:me(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{te(Ct,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);te(Ct,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}I_(e,n,r){const s=ph(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pb(),a=db(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");te(Ct,`Creating RPC '${e}' stream ${s}: ${f}`,l);const h=o.createWebChannel(f,l);this.E_(h);let p=!1,g=!1;const y=new aL({Zo:P=>{g?te(Ct,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(te(Ct,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),te(Ct,`RPC '${e}' stream ${s} sending:`,P),h.send(P))},Xo:()=>h.close()}),w=(P,k,S)=>{P.listen(k,_=>{try{S(_)}catch(R){setTimeout(()=>{throw R},0)}})};return w(h,Eo.EventType.OPEN,()=>{g||(te(Ct,`RPC '${e}' stream ${s} transport opened.`),y.__())}),w(h,Eo.EventType.CLOSE,()=>{g||(g=!0,te(Ct,`RPC '${e}' stream ${s} transport closed`),y.u_(),this.d_(h))}),w(h,Eo.EventType.ERROR,P=>{g||(g=!0,Oi(Ct,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),y.u_(new le(H.UNAVAILABLE,"The operation could not be completed")))}),w(h,Eo.EventType.MESSAGE,P=>{var k;if(!g){const S=P.data[0];Ne(!!S,16349);const _=S,R=(_==null?void 0:_.error)||((k=_[0])===null||k===void 0?void 0:k.error);if(R){te(Ct,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let M=function(v){const I=nt[v];if(I!==void 0)return Gb(I)}(D),T=R.message;M===void 0&&(M=H.INTERNAL,T="Unknown error status: "+D+" with message "+R.message),g=!0,y.u_(new le(M,T)),h.close()}else te(Ct,`RPC '${e}' stream ${s} received:`,S),y.c_(S)}}),w(a,hb.STAT_EVENT,P=>{P.stat===nh.PROXY?te(Ct,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===nh.NOPROXY&&te(Ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.a_()},0),y}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function rf(){return typeof document<"u"?document:null}/**
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
 */function Xl(t){return new hD(t,!0)}/**
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
 */class c0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const ry="PersistentStream";class l0{constructor(e,n,r,s,i,o,a,l){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new c0(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new le(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return te(ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(te(ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lL extends l0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=mD(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Bn(o.readTime):_e.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=hh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=ah(l)?{documents:yD(i,l)}:{query:vD(i,l).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Xb(i,o.resumeToken);const u=lh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=ul(i,o.snapshotVersion.toTimestamp());const u=lh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=wD(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=hh(this.serializer),n.removeTarget=e,this.Q_(n)}}class uL extends l0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=_D(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=hh(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gD(this.serializer,r))};this.Q_(n)}}/**
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
 */class fL{}class hL extends fL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,uh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(H.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Yo(e,uh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(H.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class dL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(fr(n),this.ua=!1):te("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Ls="RemoteStore";class pL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{zs(this)&&(te(Ls,"Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.da.add(4),await Sa(u),u.Va.set("Unknown"),u.da.delete(4),await Jl(u)}(this))})}),this.Va=new dL(r,s)}}async function Jl(t){if(zs(t))for(const e of t.Aa)await e(!0)}async function Sa(t){for(const e of t.Aa)await e(!1)}function u0(t,e){const n=ye(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Yd(n)?Gd(n):Yi(n).N_()&&Kd(n,e))}function Wd(t,e){const n=ye(t),r=Yi(n);n.Ea.delete(e),r.N_()&&f0(n,e),n.Ea.size===0&&(r.N_()?r.k_():zs(n)&&n.Va.set("Unknown"))}function Kd(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).Z_(e)}function f0(t,e){t.ma.Ke(e),Yi(t).X_(e)}function Gd(t){t.ma=new cD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.Va.ca()}function Yd(t){return zs(t)&&!Yi(t).O_()&&t.Ea.size>0}function zs(t){return ye(t).da.size===0}function h0(t){t.ma=void 0}async function mL(t){t.Va.set("Online")}async function gL(t){t.Ea.forEach((e,n)=>{Kd(t,e)})}async function _L(t,e){h0(t),Yd(t)?(t.Va.Pa(e),Gd(t)):t.Va.set("Unknown")}async function yL(t,e,n){if(t.Va.set("Online"),e instanceof Qb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ea.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ea.delete(a),s.ma.removeTarget(a))}(t,e)}catch(r){te(Ls,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hl(t,r)}else if(e instanceof Cc?t.ma.Xe(e):e instanceof Yb?t.ma.ot(e):t.ma.nt(e),!n.isEqual(_e.min()))try{const r=await a0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.ma.It(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(u);f&&i.Ea.set(u,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(It.EMPTY_BYTE_STRING,f.snapshotVersion)),f0(i,l);const h=new Br(f.target,l,u,f.sequenceNumber);Kd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(Ls,"Failed to raise snapshot:",r),await hl(t,r)}}async function hl(t,e,n){if(!Gi(e))throw e;t.da.add(1),await Sa(t),t.Va.set("Offline"),n||(n=()=>a0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Ls,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Jl(t)})}function d0(t,e){return e().catch(n=>hl(t,n,e))}async function Zl(t){const e=ye(t),n=ts(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:xd;for(;vL(e);)try{const s=await eL(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,EL(e,s)}catch(s){await hl(e,s)}p0(e)&&m0(e)}function vL(t){return zs(t)&&t.Ia.length<10}function EL(t,e){t.Ia.push(e);const n=ts(t);n.N_()&&n.ea&&n.ta(e.mutations)}function p0(t){return zs(t)&&!ts(t).O_()&&t.Ia.length>0}function m0(t){ts(t).start()}async function wL(t){ts(t).ia()}async function bL(t){const e=ts(t);for(const n of t.Ia)e.ta(n.mutations)}async function TL(t,e,n){const r=t.Ia.shift(),s=Ud.from(r,e,n);await d0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Zl(t)}async function IL(t,e){e&&ts(t).ea&&await async function(r,s){if(function(o){return oD(o)&&o!==H.ABORTED}(s.code)){const i=r.Ia.shift();ts(r).L_(),await d0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zl(r)}}(t,e),p0(t)&&m0(t)}async function sy(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te(Ls,"RemoteStore received new credentials");const r=zs(n);n.da.add(3),await Sa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Jl(n)}async function AL(t,e){const n=ye(t);e?(n.da.delete(2),await Jl(n)):e||(n.da.add(2),await Sa(n),n.Va.set("Unknown"))}function Yi(t){return t.fa||(t.fa=function(n,r,s){const i=ye(n);return i.oa(),new lL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:mL.bind(null,t),n_:gL.bind(null,t),i_:_L.bind(null,t),Y_:yL.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),Yd(t)?Gd(t):t.Va.set("Unknown")):(await t.fa.stop(),h0(t))})),t.fa}function ts(t){return t.ga||(t.ga=function(n,r,s){const i=ye(n);return i.oa(),new uL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:wL.bind(null,t),i_:IL.bind(null,t),na:bL.bind(null,t),ra:TL.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await Zl(t)):(await t.ga.stop(),t.Ia.length>0&&(te(Ls,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class Qd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Qd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xd(t,e){if(fr("AsyncQueue",`${e}: ${t}`),Gi(t))return new le(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ei{static emptySet(e){return new Ei(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class iy{constructor(){this.pa=new Qe(fe.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):me(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mi(e,n,Ei.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RL{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class SL{constructor(){this.queries=oy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=oy(),i.forEach((o,a)=>{for(const l of a.Sa)l.onError(r)})})(this,new le(H.ABORTED,"Firestore shutting down"))}}function oy(){return new Hs(t=>Mb(t),Wl)}async function CL(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new RL,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Xd(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&Jd(n)}async function PL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kL(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Ma(s)&&(r=!0);o.ba=s}}r&&Jd(n)}function OL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Jd(t){t.Ca.forEach(e=>{e.next()})}var mh,ay;(ay=mh||(mh={})).xa="default",ay.Cache="cache";class xL{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==mh.Cache}}/**
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
 */class g0{constructor(e){this.key=e}}class _0{constructor(e){this.key=e}}class NL{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Te(),this.mutatedKeys=Te(),this.Za=Vb(e),this.Xa=new Ei(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new iy,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,h)=>{const p=s.get(f),g=Kl(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?y!==w&&(r.track({type:3,doc:g}),P=!0):this.ru(p,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.Za(g,l)>0||u&&this.Za(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(l||u)&&(a=!0)),P&&(g?(o=o.add(g),i=w?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:a,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,h)=>function(g,y){const w=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:P})}};return w(g)-w(y)}(f.type,h.type)||this.Za(f.doc,h.doc)),this.iu(r),s=s!=null&&s;const a=n&&!s?this.su():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Ja;return this.Ja=l,o.length!==0||u?{snapshot:new Mi(this.query,e.Xa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:a}:{ou:a}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new iy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Te(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new _0(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new g0(r))}),n}au(e){this.Ha=e.$s,this.Ya=Te();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Mi.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Zd="SyncEngine";class DL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LL{constructor(e){this.key=e,this.cu=!1}}class ML{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Hs(a=>Mb(a),Wl),this.Pu=new Map,this.Tu=new Set,this.Iu=new Qe(fe.comparator),this.Eu=new Map,this.du=new $d,this.Au={},this.Ru=new Map,this.Vu=Li.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function VL(t,e,n=!0){const r=T0(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await y0(r,e,n,!0),s}async function FL(t,e){const n=T0(t);await y0(n,e,!0,!1)}async function y0(t,e,n,r){const s=await tL(t.localStore,Un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await UL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&u0(t.remoteStore,s),a}async function UL(t,e,n,r,s){t.fu=(h,p,g)=>async function(w,P,k,S){let _=P.view.tu(k);_.Cs&&(_=await Z_(w.localStore,P.query,!1).then(({documents:T})=>P.view.tu(T,_)));const R=S&&S.targetChanges.get(P.targetId),D=S&&S.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(_,w.isPrimaryClient,R,D);return ly(w,P.targetId,M.ou),M.snapshot}(t,h,p,g);const i=await Z_(t.localStore,e,!0),o=new NL(e,i.$s),a=o.tu(i.documents),l=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);ly(t,n,u.ou);const f=new DL(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function BL(t,e,n){const r=ye(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!Wl(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await dh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wd(r.remoteStore,s.targetId),gh(r,s.targetId)}).catch(Ki)):(gh(r,s.targetId),await dh(r.localStore,s.targetId,!0))}async function jL(t,e){const n=ye(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wd(n.remoteStore,r.targetId))}async function $L(t,e,n){const r=YL(t);try{const s=await function(o,a){const l=ye(o),u=lt.now(),f=a.reduce((g,y)=>g.add(y.key),Te());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=hr(),w=Te();return l.Bs.getEntries(g,f).next(P=>{y=P,y.forEach((k,S)=>{S.isValidDocument()||(w=w.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,y)).next(P=>{h=P;const k=[];for(const S of a){const _=tD(S,h.get(S.key).overlayedDocument);_!=null&&k.push(new ls(S.key,_,Cb(_.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,k,a)}).next(P=>{p=P;const k=P.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(g,P.batchId,k)})}).then(()=>({batchId:p.batchId,changes:Ub(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Au[o.currentUser.toKey()];u||(u=new Qe(ve)),u=u.insert(a,l),o.Au[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ca(r,s.changes),await Zl(r.remoteStore)}catch(s){const i=Xd(s,"Failed to persist write");n.reject(i)}}async function v0(t,e){const n=ye(t);try{const r=await JD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?Ne(o.cu,14607):s.removedDocuments.size>0&&(Ne(o.cu,42227),o.cu=!1))}),await Ca(n,r,e)}catch(r){await Ki(r)}}function cy(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const a=o.view.Fa(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((f,h)=>{for(const p of h.Sa)p.Fa(a)&&(u=!0)}),u&&Jd(l)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HL(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Qe(fe.comparator);o=o.insert(i,Nt.newNoDocument(i,_e.min()));const a=Te().add(i),l=new Ql(_e.min(),new Map,new Qe(ve),o,a);await v0(r,l),r.Iu=r.Iu.remove(i),r.Eu.delete(e),ep(r)}else await dh(r.localStore,e,!1).then(()=>gh(r,e,n)).catch(Ki)}async function zL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await XD(n.localStore,e);w0(n,r,null),E0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,s)}catch(s){await Ki(s)}}async function qL(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Ne(h!==null,37113),f=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);w0(r,e,n),E0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,s)}catch(s){await Ki(s)}}function E0(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function w0(t,e,n){const r=ye(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||b0(t,r)})}function b0(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(Wd(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),ep(t))}function ly(t,e,n){for(const r of n)r instanceof g0?(t.du.addReference(r.key,e),WL(t,r)):r instanceof _0?(te(Zd,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||b0(t,r.key)):me(19791,{pu:r})}function WL(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(te(Zd,"New document in limbo: "+n),t.Tu.add(r),ep(t))}function ep(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new fe(qe.fromString(e)),r=t.Vu.next();t.Eu.set(r,new LL(n)),t.Iu=t.Iu.insert(n,r),u0(t.remoteStore,new Br(Un(Lb(n.path)),r,"TargetPurposeLimboResolution",$l.le))}}async function Ca(t,e,n){const r=ye(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((a,l)=>{o.push(r.fu(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const h=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){s.push(u);const h=zd.Rs(l.targetId,u);i.push(h)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(l,u){const f=ye(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>j.forEach(u,p=>j.forEach(p.ds,g=>f.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>j.forEach(p.As,g=>f.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!Gi(h))throw h;te(qd,"Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const g=f.xs.get(p),y=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(y);f.xs=f.xs.insert(p,w)}}}(r.localStore,i))}async function KL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te(Zd,"User change. New user:",e.toKey());const r=await o0(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(a=>{a.forEach(l=>{l.reject(new le(H.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.ks)}}function GL(t,e){const n=ye(t),r=n.Eu.get(e);if(r&&r.cu)return Te().add(r.key);{let s=Te();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const a=n.hu.get(o);s=s.unionWith(a.view.eu)}return s}}function T0(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HL.bind(null,e),e.lu.Y_=kL.bind(null,e.eventManager),e.lu.gu=OL.bind(null,e.eventManager),e}function YL(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qL.bind(null,e),e}class dl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return QD(this.persistence,new KD,e.initialUser,this.serializer)}Su(e){return new i0(Hd.fi,this.serializer)}bu(e){return new rL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dl.provider={build:()=>new dl};class QL extends dl{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){Ne(this.persistence.referenceDelegate instanceof fl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xD(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new i0(r=>fl.fi(r,n),this.serializer)}}class _h{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KL.bind(null,this.syncEngine),await AL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SL}()}createDatastore(e){const n=Xl(e.databaseInfo.databaseId),r=function(i){return new cL(i)}(e.databaseInfo);return function(i,o,a,l){return new hL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new pL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>cy(this.syncEngine,n,0),function(){return ny.C()?new ny:new sL}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,f){const h=new ML(s,i,o,a,l,u);return f&&(h.mu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te(Ls,"RemoteStore shutting down."),i.da.add(5),await Sa(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_h.provider={build:()=>new _h};/**
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
 */class XL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ns="FirestoreClient";class JL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=yb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(ns,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(ns,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sf(t,e){t.asyncQueue.verifyOperationInProgress(),te(ns,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await o0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZL(t);te(ns,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>sy(e.remoteStore,s)),t._onlineComponents=e}async function ZL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(ns,"Using user provided OfflineComponentProvider");try{await sf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Oi("Error using user provided cache. Falling back to memory cache: "+n),await sf(t,new dl)}}else te(ns,"Using default OfflineComponentProvider"),await sf(t,new QL(void 0));return t._offlineComponents}async function I0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(ns,"Using user provided OnlineComponentProvider"),await uy(t,t._uninitializedComponentsProvider._online)):(te(ns,"Using default OnlineComponentProvider"),await uy(t,new _h))),t._onlineComponents}function e4(t){return I0(t).then(e=>e.syncEngine)}async function t4(t){const e=await I0(t),n=e.eventManager;return n.onListen=VL.bind(null,e.syncEngine),n.onUnlisten=BL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jL.bind(null,e.syncEngine),n}function n4(t,e,n={}){const r=new Gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const f=new XL({next:p=>{f.xu(),o.enqueueAndForget(()=>PL(i,h)),p.fromCache&&l.source==="server"?u.reject(new le(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new xL(a,f,{includeMetadataChanges:!0,Qa:!0});return CL(i,h)}(await t4(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function A0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fy=new Map;/**
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
 */function R0(t,e,n){if(!n)throw new le(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function r4(t,e,n,r){if(e===!0&&r===!0)throw new le(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hy(t){if(!fe.isDocumentKey(t))throw new le(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dy(t){if(fe.isDocumentKey(t))throw new le(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tp(t);throw new le(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const S0="firestore.googleapis.com",py=!0;class my{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=S0,this.ssl=py}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:py;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=s0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kD)throw new le(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oN;switch(r.type){case"firstParty":return new uN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fy.get(n);r&&(te("ComponentProvider","Removing Datastore"),fy.delete(n),r.terminate())}(this),Promise.resolve()}}function s4(t,e,n,r={}){var s;t=Vi(t,eu);const i=os(e),o=t._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(_d(`https://${l}`),yd("Firestore",!0)),o.host!==S0&&o.host!==l&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Os(u,a)&&(t._setSettings(u),r.mockUserToken)){let f,h;if(typeof r.mockUserToken=="string")f=r.mockUserToken,h=kt.MOCK_USER;else{f=Iw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new le(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new kt(p)}t._authCredentials=new aN(new gb(f,h))}}/**
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
 */class tu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tu(this.firestore,e,this._query)}}class fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class Yr extends tu{constructor(e,n,r){super(e,n,Lb(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new fe(e))}withConverter(e){return new Yr(this.firestore,e,this._path)}}function dF(t,e,...n){if(t=Je(t),R0("collection","path",e),t instanceof eu){const r=qe.fromString(e,...n);return dy(r),new Yr(t,null,r)}{if(!(t instanceof fn||t instanceof Yr))throw new le(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return dy(r),new Yr(t.firestore,null,r)}}function pF(t,e,...n){if(t=Je(t),arguments.length===1&&(e=yb.newId()),R0("doc","path",e),t instanceof eu){const r=qe.fromString(e,...n);return hy(r),new fn(t,null,new fe(r))}{if(!(t instanceof fn||t instanceof Yr))throw new le(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return hy(r),new fn(t.firestore,t instanceof Yr?t.converter:null,new fe(r))}}/**
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
 */const gy="AsyncQueue";class _y{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new c0(this,"async_queue_retry"),this.rc=()=>{const r=rf();r&&te(gy,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=rf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=rf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Gr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Gi(e))throw e;te(gy,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,fr("INTERNAL UNHANDLED ERROR: ",yy(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=Qd.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&me(47125,{cc:yy(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function yy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class nu extends eu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _y,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _y(e),this._firestoreClient=void 0,await e}}}function i4(t,e){const n=typeof t=="object"?t:wd(),r=typeof t=="string"?t:sl,s=Vl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ww("firestore");i&&s4(s,...i)}return s}function np(t){if(t._terminated)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||o4(t),t._firestoreClient}function o4(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,f){return new AN(a,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,A0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new JL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fi(It.fromBase64String(e))}catch(n){throw new le(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fi(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ru{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rp{constructor(e){this._methodName=e}}/**
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
 */class sp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class ip{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const a4=/^__.*__$/;class c4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class C0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ls(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function P0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ic:t})}}class op{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return pl(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(P0(this.Ic)&&a4.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class l4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xl(e)}bc(e,n,r,s=!1){return new op({Ic:e,methodName:n,wc:r,path:bt.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function k0(t){const e=t._freezeSettings(),n=Xl(t._databaseId);return new l4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O0(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);ap("Data must be an object, but it was:",o,r);const a=x0(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const h of i.mergeFields){const p=yh(e,h,n);if(!o.contains(p))throw new le(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);D0(f,p)||f.push(p)}l=new Xt(f),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new c4(new Wt(a),l,u)}class su extends rp{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof su}}function u4(t,e,n,r){const s=t.bc(1,e,n);ap("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();cs(r,(l,u)=>{const f=cp(e,l,n);u=Je(u);const h=s.mc(f);if(u instanceof su)i.push(f);else{const p=iu(u,h);p!=null&&(i.push(f),o.set(f,p))}});const a=new Xt(i);return new C0(o,a,s.fieldTransforms)}function f4(t,e,n,r,s,i){const o=t.bc(1,e,n),a=[yh(e,r,n)],l=[s];if(i.length%2!=0)throw new le(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(yh(e,i[p])),l.push(i[p+1]);const u=[],f=Wt.empty();for(let p=a.length-1;p>=0;--p)if(!D0(u,a[p])){const g=a[p];let y=l[p];y=Je(y);const w=o.mc(g);if(y instanceof su)u.push(g);else{const P=iu(y,w);P!=null&&(u.push(g),f.set(g,P))}}const h=new Xt(u);return new C0(f,h,o.fieldTransforms)}function iu(t,e){if(N0(t=Je(t)))return ap("Unsupported field value:",e,t),x0(t,e);if(t instanceof rp)return function(r,s){if(!P0(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=iu(a,s.fc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:ul(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ul(s.serializer,i)}}if(r instanceof sp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fi)return{bytesValue:Xb(s.serializer,r._byteString)};if(r instanceof fn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ip)return function(o,a){return{mapValue:{fields:{[Rb]:{stringValue:Sb},[il]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.gc("VectorValues must only contain numeric values.");return Vd(a.serializer,u)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${tp(r)}`)}(t,e)}function x0(t,e){const n={};return Eb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,s)=>{const i=iu(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function N0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof sp||t instanceof Fi||t instanceof fn||t instanceof rp||t instanceof ip)}function ap(t,e,n){if(!N0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=tp(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function yh(t,e,n){if((e=Je(e))instanceof ru)return e._internalPath;if(typeof e=="string")return cp(t,e);throw pl("Field path arguments must be of type string or ",t,!1,void 0,n)}const h4=new RegExp("[~\\*/\\[\\]]");function cp(t,e,n){if(e.search(h4)>=0)throw pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ru(...e.split("."))._internalPath}catch{throw pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new le(H.INVALID_ARGUMENT,a+t+l)}function D0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class L0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(M0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class d4 extends L0{data(){return super.data()}}function M0(t,e){return typeof e=="string"?cp(t,e):e instanceof ru?e._internalPath:e._delegate._internalPath}/**
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
 */function p4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new le(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class m4{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[il].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new ip(i)}convertGeoPoint(e){return new sp(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ia(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Ne(r0(r),9688,{name:e});const s=new oa(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||fr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function V0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class fc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class g4 extends L0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(M0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pc extends g4{data(e={}){return super.data(e)}}class _4{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fc(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pc(this._firestore,this._userDataWriter,r.key,r,new fc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Pc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new fc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Pc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new fc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:y4(a.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function y4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}class v4 extends m4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,n)}}function mF(t){t=Vi(t,tu);const e=Vi(t.firestore,nu),n=np(e),r=new v4(e);return p4(t._query),n4(n,t._query).then(s=>new _4(e,r,t,s))}function gF(t,e,n){t=Vi(t,fn);const r=Vi(t.firestore,nu),s=V0(t.converter,e,n);return F0(r,[O0(k0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function F0(t,e){return function(r,s){const i=new Gr;return r.asyncQueue.enqueueAndForget(async()=>$L(await e4(r),s,i)),i.promise}(np(t),e)}/**
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
 */class E4{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=k0(e)}set(e,n,r){this._verifyNotCommitted();const s=of(e,this._firestore),i=V0(s.converter,n,r),o=O0(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,un.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=of(e,this._firestore);let o;return o=typeof(n=Je(n))=="string"||n instanceof ru?f4(this._dataReader,"WriteBatch.update",i._key,n,r,s):u4(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,un.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=of(e,this._firestore);return this._mutations=this._mutations.concat(new Fd(n._key,un.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new le(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function of(t,e){if((t=Je(t)).firestore!==e)throw new le(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function _F(t){return np(t=Vi(t,nu)),new E4(t,e=>F0(t,e))}(function(e,n=!0){(function(s){Wi=s})(js),xs(new Qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new nu(new cN(r.getProvider("auth-internal")),new fN(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Mn(T_,I_,e),Mn(T_,I_,"esm2017")})();/**
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
 */const U0="firebasestorage.googleapis.com",B0="storageBucket",w4=2*60*1e3,b4=10*60*1e3;/**
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
 */class et extends zn{constructor(e,n,r=0){super(af(e),`Firebase Storage: ${n} (${af(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function af(t){return"storage/"+t}function lp(){const t="An unknown error occurred, please check the error payload for server response.";return new et(Ze.UNKNOWN,t)}function T4(t){return new et(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function I4(t){return new et(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function A4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(Ze.UNAUTHENTICATED,t)}function R4(){return new et(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function S4(t){return new et(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function C4(){return new et(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function P4(){return new et(Ze.CANCELED,"User canceled the upload/download.")}function k4(t){return new et(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function O4(t){return new et(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function x4(){return new et(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+B0+"' property when initializing the app?")}function N4(){return new et(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function D4(){return new et(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function L4(t){return new et(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vh(t){return new et(Ze.INVALID_ARGUMENT,t)}function j0(){return new et(Ze.APP_DELETED,"The Firebase app was deleted.")}function M4(t){return new et(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bo(t,e){return new et(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function mo(t){throw new et(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw O4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${f}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},w=n===U0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",k=new RegExp(`^https?://${w}/${s}/${P}`,"i"),_=[{regex:a,indices:l,postModify:i},{regex:g,indices:y,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<_.length;R++){const D=_[R],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let E=M[D.indices.path];E||(E=""),r=new Jt(T,E),D.postModify(r);break}}if(r==null)throw k4(e);return r}}class V4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function F4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function f(...P){u||(u=!0,e.apply(null,P))}function h(P){s=setTimeout(()=>{s=null,t(g,l())},P)}function p(){i&&clearTimeout(i)}function g(P,...k){if(u){p();return}if(P){p(),f.call(null,P,...k);return}if(l()||o){p(),f.call(null,P,...k);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let y=!1;function w(P){y||(y=!0,p(),!u&&(s!==null?(P||(a=2),clearTimeout(s),h(0)):P||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function U4(t){t(!1)}/**
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
 */function B4(t){return t!==void 0}function j4(t){return typeof t=="object"&&!Array.isArray(t)}function up(t){return typeof t=="string"||t instanceof String}function vy(t){return fp()&&t instanceof Blob}function fp(){return typeof Blob<"u"}function Ey(t,e,n,r){if(r<e)throw vh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function hp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ss;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ss||(Ss={}));/**
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
 */function $4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class H4{constructor(e,n,r,s,i,o,a,l,u,f,h,p=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=h,this.retry=p,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,w)=>{this.resolve_=y,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new hc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ss.NO_ERROR,l=i.getStatus();if(!a||$4(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ss.ABORT;r(!1,new hc(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new hc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());B4(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=lp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?j0():P4();o(l)}else{const l=C4();o(l)}};this.canceled_?n(!1,new hc(!1,null,!0)):this.backoffId_=F4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function z4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function W4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function G4(t,e,n,r,s,i,o=!0,a=!1){const l=$0(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return W4(f,e),z4(f,n),q4(f,i),K4(f,r),new H4(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function Y4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Q4(...t){const e=Y4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(fp())return new Blob(t);throw new et(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function X4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function J4(t){if(typeof atob>"u")throw L4("base-64");return atob(t)}/**
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
 */const On={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cf{constructor(e,n){this.data=e,this.contentType=n||null}}function Z4(t,e){switch(t){case On.RAW:return new cf(H0(e));case On.BASE64:case On.BASE64URL:return new cf(z0(t,e));case On.DATA_URL:return new cf(tM(e),nM(e))}throw lp()}function H0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eM(t){let e;try{e=decodeURIComponent(t)}catch{throw Bo(On.DATA_URL,"Malformed data URL.")}return H0(e)}function z0(t,e){switch(t){case On.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Bo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case On.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Bo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=J4(e)}catch(s){throw s.message.includes("polyfill")?s:Bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class q0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Bo(On.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tM(t){const e=new q0(t);return e.base64?z0(On.BASE64,e.rest):eM(e.rest)}function nM(t){return new q0(t).contentType}function rM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Fr{constructor(e,n){let r=0,s="";vy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(vy(this.data_)){const r=this.data_,s=X4(r,e,n);return s===null?null:new Fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Fr(r,!0)}}static getBlob(...e){if(fp()){const n=e.map(r=>r instanceof Fr?r.data_:r);return new Fr(Q4.apply(null,n))}else{const n=e.map(o=>up(o)?Z4(On.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Fr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function W0(t){let e;try{e=JSON.parse(t)}catch{return null}return j4(e)?e:null}/**
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
 */function sM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function K0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function oM(t,e){return e}class Ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||oM}}let dc=null;function aM(t){return!up(t)||t.length<2?t:K0(t)}function G0(){if(dc)return dc;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(i,o){return aM(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ft("size");return s.xform=r,t.push(s),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),dc=t,dc}function cM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function lM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return cM(r,t),r}function Y0(t,e,n){const r=W0(e);return r===null?null:lM(t,r,n)}function uM(t,e,n,r){const s=W0(e);if(s===null||!up(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,h=t.fullPath,p="/b/"+o(f)+"/o/"+o(h),g=hp(p,n,r),y=$0({alt:"media",token:u});return g+y})[0]}function fM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Q0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function X0(t){if(!t)throw lp()}function hM(t,e){function n(r,s){const i=Y0(t,s,e);return X0(i!==null),i}return n}function dM(t,e){function n(r,s){const i=Y0(t,s,e);return X0(i!==null),uM(i,s,t.host,t._protocol)}return n}function J0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=R4():s=A4():n.getStatus()===402?s=I4(t.bucket):n.getStatus()===403?s=S4(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pM(t){const e=J0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=T4(t.path)),i.serverResponse=s.serverResponse,i}return n}function mM(t,e,n){const r=e.fullServerUrl(),s=hp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Q0(s,i,dM(t,n),o);return a.errorHandler=pM(e),a}function gM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _M(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gM(null,e)),r}function yM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let R=0;R<2;R++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=_M(e,r,s),f=fM(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Fr.getBlob(h,r,p);if(g===null)throw N4();const y={name:u.fullPath},w=hp(i,t.host,t._protocol),P="POST",k=t.maxUploadRetryTime,S=new Q0(w,P,hM(t,n),k);return S.urlParams=y,S.headers=o,S.body=g.uploadData(),S.errorHandler=J0(e),S}class vM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw mo("cannot .send() more than once");if(os(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EM extends vM{initXhr(){this.xhr_.responseType="text"}}function Z0(){return new EM}/**
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
 */class Ms{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ms(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return K0(this._location.path)}get storage(){return this._service}get parent(){const e=sM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Ms(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw M4(e)}}function wM(t,e,n){t._throwIfRoot("uploadBytes");const r=yM(t.storage,t._location,G0(),new Fr(e,!0),n);return t.storage.makeRequestWithTokens(r,Z0).then(s=>({metadata:s,ref:t}))}function bM(t){t._throwIfRoot("getDownloadURL");const e=mM(t.storage,t._location,G0());return t.storage.makeRequestWithTokens(e,Z0).then(n=>{if(n===null)throw D4();return n})}function TM(t,e){const n=iM(t._location.path,e),r=new Jt(t._location.bucket,n);return new Ms(t.storage,r)}/**
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
 */function IM(t){return/^[A-Za-z]+:\/\//.test(t)}function AM(t,e){return new Ms(t,e)}function eT(t,e){if(t instanceof dp){const n=t;if(n._bucket==null)throw x4();const r=new Ms(n,n._bucket);return e!=null?eT(r,e):r}else return e!==void 0?TM(t,e):t}function RM(t,e){if(e&&IM(e)){if(t instanceof dp)return AM(t,e);throw vh("To use ref(service, url), the first argument must be a Storage instance.")}else return eT(t,e)}function wy(t,e){const n=e==null?void 0:e[B0];return n==null?null:Jt.makeFromBucketSpec(n,t)}function SM(t,e,n,r={}){t.host=`${e}:${n}`;const s=os(e);s&&(_d(`https://${t.host}/b`),yd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Iw(i,t.app.options.projectId))}class dp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=U0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=w4,this._maxUploadRetryTime=b4,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=wy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=wy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ey("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ey("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new V4(j0());{const o=G4(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const by="@firebase/storage",Ty="0.13.13";/**
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
 */const tT="storage";function yF(t,e,n){return t=Je(t),wM(t,e,n)}function vF(t){return t=Je(t),bM(t)}function EF(t,e){return t=Je(t),RM(t,e)}function CM(t=wd(),e){t=Je(t);const r=Vl(t,tT).getImmediate({identifier:e}),s=ww("storage");return s&&PM(r,...s),r}function PM(t,e,n,r={}){SM(t,e,n,r)}function kM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new dp(n,r,s,e,js)}function OM(){xs(new Qr(tT,kM,"PUBLIC").setMultipleInstances(!0)),Mn(by,Ty,""),Mn(by,Ty,"esm2017")}OM();const xM=Zt(t=>{const e=Bs(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Sw(n),s=jx(r),i=i4(r),o=CM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function NM(t,e,n){return(e=LM(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Iy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Iy(Object(n),!0).forEach(function(r){NM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Iy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function DM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function LM(t){var e=DM(t,"string");return typeof e=="symbol"?e:e+""}const Ay=()=>{};let pp={},nT={},rT=null,sT={mark:Ay,measure:Ay};try{typeof window<"u"&&(pp=window),typeof document<"u"&&(nT=document),typeof MutationObserver<"u"&&(rT=MutationObserver),typeof performance<"u"&&(sT=performance)}catch{}const{userAgent:Ry=""}=pp.navigator||{},rs=pp,He=nT,Sy=rT,pc=sT;rs.document;const yr=!!He.documentElement&&!!He.head&&typeof He.addEventListener=="function"&&typeof He.createElement=="function",iT=~Ry.indexOf("MSIE")||~Ry.indexOf("Trident/");var MM=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,VM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,oT={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},FM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},aT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Lt="classic",ou="duotone",UM="sharp",BM="sharp-duotone",cT=[Lt,ou,UM,BM],jM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},$M={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},HM=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),zM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},qM=["fak","fa-kit","fakd","fa-kit-duotone"],Cy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},WM=["kit"],KM={kit:{"fa-kit":"fak"}},GM=["fak","fakd"],YM={kit:{fak:"fa-kit"}},Py={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},mc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},QM=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],XM=["fak","fa-kit","fakd","fa-kit-duotone"],JM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ZM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},eV={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Eh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},tV=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],wh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...QM,...tV],nV=["solid","regular","light","thin","duotone","brands"],lT=[1,2,3,4,5,6,7,8,9,10],rV=lT.concat([11,12,13,14,15,16,17,18,19,20]),sV=[...Object.keys(eV),...nV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mc.GROUP,mc.SWAP_OPACITY,mc.PRIMARY,mc.SECONDARY].concat(lT.map(t=>"".concat(t,"x"))).concat(rV.map(t=>"w-".concat(t))),iV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const dr="___FONT_AWESOME___",bh=16,uT="fa",fT="svg-inline--fa",Vs="data-fa-i2svg",Th="data-fa-pseudo-element",oV="data-fa-pseudo-element-pending",mp="data-prefix",gp="data-icon",ky="fontawesome-i2svg",aV="async",cV=["HTML","HEAD","STYLE","SCRIPT"],hT=(()=>{try{return!0}catch{return!1}})();function Pa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Lt]}})}const dT=W({},oT);dT[Lt]=W(W(W(W({},{"fa-duotone":"duotone"}),oT[Lt]),Cy.kit),Cy["kit-duotone"]);const lV=Pa(dT),Ih=W({},zM);Ih[Lt]=W(W(W(W({},{duotone:"fad"}),Ih[Lt]),Py.kit),Py["kit-duotone"]);const Oy=Pa(Ih),Ah=W({},Eh);Ah[Lt]=W(W({},Ah[Lt]),YM.kit);const _p=Pa(Ah),Rh=W({},ZM);Rh[Lt]=W(W({},Rh[Lt]),KM.kit);Pa(Rh);const uV=MM,pT="fa-layers-text",fV=VM,hV=W({},jM);Pa(hV);const dV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lf=FM,pV=[...WM,...sV],jo=rs.FontAwesomeConfig||{};function mV(t){var e=He.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function gV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}He&&typeof He.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=gV(mV(n));s!=null&&(jo[r]=s)});const mT={styleDefault:"solid",familyDefault:Lt,cssPrefix:uT,replacementClass:fT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jo.familyPrefix&&(jo.cssPrefix=jo.familyPrefix);const Ui=W(W({},mT),jo);Ui.autoReplaceSvg||(Ui.observeMutations=!1);const ae={};Object.keys(mT).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){Ui[t]=e,$o.forEach(n=>n(ae))},get:function(){return Ui[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){Ui.cssPrefix=t,$o.forEach(e=>e(ae))},get:function(){return Ui.cssPrefix}});rs.FontAwesomeConfig=ae;const $o=[];function _V(t){return $o.push(t),()=>{$o.splice($o.indexOf(t),1)}}const Rr=bh,xn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yV(t){if(!t||!yr)return;const e=He.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=He.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return He.head.insertBefore(e,r),t}const vV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ua(){let t=12,e="";for(;t-- >0;)e+=vV[Math.random()*62|0];return e}function Qi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yp(t){return t.classList?Qi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function gT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function EV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(gT(t[n]),'" '),"").trim()}function au(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function vp(t){return t.size!==xn.size||t.x!==xn.x||t.y!==xn.y||t.rotate!==xn.rotate||t.flipX||t.flipY}function wV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function bV(t){let{transform:e,width:n=bh,height:r=bh,startCentered:s=!1}=t,i="";return s&&iT?i+="translate(".concat(e.x/Rr-n/2,"em, ").concat(e.y/Rr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Rr,"em), calc(-50% + ").concat(e.y/Rr,"em)) "):i+="translate(".concat(e.x/Rr,"em, ").concat(e.y/Rr,"em) "),i+="scale(".concat(e.size/Rr*(e.flipX?-1:1),", ").concat(e.size/Rr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var TV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
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

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
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
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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
}`;function _T(){const t=uT,e=fT,n=ae.cssPrefix,r=ae.replacementClass;let s=TV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let xy=!1;function uf(){ae.autoAddCss&&!xy&&(yV(_T()),xy=!0)}var IV={mixout(){return{dom:{css:_T,insertCss:uf}}},hooks(){return{beforeDOMElementCreation(){uf()},beforeI2svg(){uf()}}}};const pr=rs||{};pr[dr]||(pr[dr]={});pr[dr].styles||(pr[dr].styles={});pr[dr].hooks||(pr[dr].hooks={});pr[dr].shims||(pr[dr].shims=[]);var Nn=pr[dr];const yT=[],vT=function(){He.removeEventListener("DOMContentLoaded",vT),ml=1,yT.map(t=>t())};let ml=!1;yr&&(ml=(He.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(He.readyState),ml||He.addEventListener("DOMContentLoaded",vT));function AV(t){yr&&(ml?setTimeout(t,0):yT.push(t))}function ka(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?gT(t):"<".concat(e," ").concat(EV(n),">").concat(r.map(ka).join(""),"</").concat(e,">")}function Ny(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ff=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,f;for(r===void 0?(l=1,f=e[i[0]]):(l=0,f=r);l<o;l++)u=i[l],f=a(f,e[u],u,e);return f};function RV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Sh(t){const e=RV(t);return e.length===1?e[0].toString(16):null}function SV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Dy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ch(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Dy(e);typeof Nn.hooks.addPack=="function"&&!r?Nn.hooks.addPack(t,Dy(e)):Nn.styles[t]=W(W({},Nn.styles[t]||{}),s),t==="fas"&&Ch("fa",e)}const{styles:fa,shims:CV}=Nn,ET=Object.keys(_p),PV=ET.reduce((t,e)=>(t[e]=Object.keys(_p[e]),t),{});let Ep=null,wT={},bT={},TT={},IT={},AT={};function kV(t){return~pV.indexOf(t)}function OV(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!kV(s)?s:null}const RT=()=>{const t=r=>ff(fa,(s,i,o)=>(s[o]=ff(i,r,{}),s),{});wT=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),bT=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),AT=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in fa||ae.autoFetchSvg,n=ff(CV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});TT=n.names,IT=n.unicodes,Ep=cu(ae.styleDefault,{family:ae.familyDefault})};_V(t=>{Ep=cu(t.styleDefault,{family:ae.familyDefault})});RT();function wp(t,e){return(wT[t]||{})[e]}function xV(t,e){return(bT[t]||{})[e]}function bs(t,e){return(AT[t]||{})[e]}function ST(t){return TT[t]||{prefix:null,iconName:null}}function NV(t){const e=IT[t],n=wp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ss(){return Ep}const CT=()=>({prefix:null,iconName:null,rest:[]});function DV(t){let e=Lt;const n=ET.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return cT.forEach(r=>{(t.includes(n[r])||t.some(s=>PV[r].includes(s)))&&(e=r)}),e}function cu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Lt}=e,r=lV[n][t];if(n===ou&&!t)return"fad";const s=Oy[n][t]||Oy[n][r],i=t in Nn.styles?t:null;return s||i||null}function LV(t){let e=[],n=null;return t.forEach(r=>{const s=OV(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Ly(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function lu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=wh.concat(XM),i=Ly(t.filter(h=>s.includes(h))),o=Ly(t.filter(h=>!wh.includes(h))),a=i.filter(h=>(r=h,!aT.includes(h))),[l=null]=a,u=DV(i),f=W(W({},LV(o)),{},{prefix:cu(l,{family:u})});return W(W(W({},f),UV({values:t,family:u,styles:fa,config:ae,canonical:f,givenPrefix:r})),MV(n,r,f))}function MV(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?ST(s):{},o=bs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!fa.far&&fa.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const VV=cT.filter(t=>t!==Lt||t!==ou),FV=Object.keys(Eh).filter(t=>t!==Lt).map(t=>Object.keys(Eh[t])).flat();function UV(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===ou,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&VV.includes(n)&&(Object.keys(i).find(p=>FV.includes(p))||o.autoFetchSvg)){const p=HM.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=bs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ss()||"fas"),r}class BV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),Ch(i,s[i]);const o=_p[Lt][i];o&&Ch(o,s[i]),RT()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let My=[],ci={};const wi={},jV=Object.keys(wi);function $V(t,e){let{mixoutsTo:n}=e;return My=t,ci={},Object.keys(wi).forEach(r=>{jV.indexOf(r)===-1&&delete wi[r]}),My.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ci[o]||(ci[o]=[]),ci[o].push(i[o])})}r.provides&&r.provides(wi)}),n}function Ph(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ci[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Fs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ci[t]||[]).forEach(i=>{i.apply(null,n)})}function is(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return wi[t]?wi[t].apply(null,e):void 0}function kh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ss();if(e)return e=bs(n,e)||e,Ny(PT.definitions,n,e)||Ny(Nn.styles,n,e)}const PT=new BV,HV=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,Fs("noAuto")},zV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return yr?(Fs("beforeI2svg",t),is("pseudoElements2svg",t),is("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,AV(()=>{WV({autoReplaceSvgRoot:e}),Fs("watch",t)})}},qV={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=cu(t[0]);return{prefix:n,iconName:bs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(uV))){const e=lu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ss(),iconName:bs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ss();return{prefix:e,iconName:bs(e,t)||t}}}},en={noAuto:HV,config:ae,dom:zV,parse:qV,library:PT,findIconDefinition:kh,toHtml:ka},WV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=He}=t;(Object.keys(Nn.styles).length>0||ae.autoFetchSvg)&&yr&&ae.autoReplaceSvg&&en.dom.i2svg({node:e})};function uu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ka(n))}}),Object.defineProperty(t,"node",{get:function(){if(!yr)return;const n=He.createElement("div");return n.innerHTML=t.html,n.children}}),t}function KV(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(vp(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=au(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function GV(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function bp(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:f,watchable:h=!1}=t,{width:p,height:g}=n.found?n:e,y=GM.includes(r),w=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>f.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(f.classes).join(" ");let P={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const k=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};h&&(P.attributes[Vs]=""),a&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||ua())},children:[a]}),delete P.attributes.title);const S=W(W({},P),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:W(W({},k),f.styles)}),{children:_,attributes:R}=n.found&&e.found?is("generateAbstractMask",S)||{children:[],attributes:{}}:is("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=_,S.attributes=R,o?GV(S):KV(S)}function Vy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Vs]="");const u=W({},o.styles);vp(s)&&(u.transform=bV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=au(u);f.length>0&&(l.style=f);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function YV(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=au(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:hf}=Nn;function Oh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(lf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(lf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(lf.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const QV={found:!1,width:512,height:512};function XV(t,e){!hT&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function xh(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=ss()),new Promise((r,s)=>{if(n==="fa"){const i=ST(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&hf[e]&&hf[e][t]){const i=hf[e][t];return r(Oh(i))}XV(t,e),r(W(W({},QV),{},{icon:ae.showMissingIcons&&t?is("missingIconAbstract")||{}:{}}))})}const Fy=()=>{},Nh=ae.measurePerformance&&pc&&pc.mark&&pc.measure?pc:{mark:Fy,measure:Fy},To='FA "6.7.2"',JV=t=>(Nh.mark("".concat(To," ").concat(t," begins")),()=>kT(t)),kT=t=>{Nh.mark("".concat(To," ").concat(t," ends")),Nh.measure("".concat(To," ").concat(t),"".concat(To," ").concat(t," begins"),"".concat(To," ").concat(t," ends"))};var Tp={begin:JV,end:kT};const kc=()=>{};function Uy(t){return typeof(t.getAttribute?t.getAttribute(Vs):null)=="string"}function ZV(t){const e=t.getAttribute?t.getAttribute(mp):null,n=t.getAttribute?t.getAttribute(gp):null;return e&&n}function e6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function t6(){return ae.autoReplaceSvg===!0?Oc.replace:Oc[ae.autoReplaceSvg]||Oc.replace}function n6(t){return He.createElementNS("http://www.w3.org/2000/svg",t)}function r6(t){return He.createElement(t)}function OT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?n6:r6}=e;if(typeof t=="string")return He.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(OT(i,{ceFn:n}))}),r}function s6(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Oc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(OT(n),e)}),e.getAttribute(Vs)===null&&ae.keepOriginalSource){let n=He.createComment(s6(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~yp(e).indexOf(ae.replacementClass))return Oc.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ka(i)).join(`
`);e.setAttribute(Vs,""),e.innerHTML=s}};function By(t){t()}function xT(t,e){const n=typeof e=="function"?e:kc;if(t.length===0)n();else{let r=By;ae.mutateApproach===aV&&(r=rs.requestAnimationFrame||By),r(()=>{const s=t6(),i=Tp.begin("mutate");t.map(s),i(),n()})}}let Ip=!1;function NT(){Ip=!0}function Dh(){Ip=!1}let gl=null;function jy(t){if(!Sy||!ae.observeMutations)return;const{treeCallback:e=kc,nodeCallback:n=kc,pseudoElementsCallback:r=kc,observeMutationsRoot:s=He}=t;gl=new Sy(i=>{if(Ip)return;const o=ss();Qi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Uy(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Uy(a.target)&&~dV.indexOf(a.attributeName))if(a.attributeName==="class"&&ZV(a.target)){const{prefix:l,iconName:u}=lu(yp(a.target));a.target.setAttribute(mp,l||o),u&&a.target.setAttribute(gp,u)}else e6(a.target)&&n(a.target)})}),yr&&gl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function i6(){gl&&gl.disconnect()}function o6(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function a6(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=lu(yp(t));return s.prefix||(s.prefix=ss()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=xV(s.prefix,t.innerText)||wp(s.prefix,Sh(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function c6(t){const e=Qi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||ua()):(e["aria-hidden"]="true",e.focusable="false")),e}function l6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:xn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $y(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=a6(t),i=c6(t),o=Ph("parseNodeAttributes",{},t);let a=e.styleParser?o6(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:xn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:u6}=Nn;function DT(t){const e=ae.autoReplaceSvg==="nest"?$y(t,{styleParser:!1}):$y(t);return~e.extra.classes.indexOf(pT)?is("generateLayersText",t,e):is("generateSvgReplacementMutation",t,e)}function f6(){return[...qM,...wh]}function Hy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!yr)return Promise.resolve();const n=He.documentElement.classList,r=f=>n.add("".concat(ky,"-").concat(f)),s=f=>n.remove("".concat(ky,"-").concat(f)),i=ae.autoFetchSvg?f6():aT.concat(Object.keys(u6));i.includes("fa")||i.push("fa");const o=[".".concat(pT,":not([").concat(Vs,"])")].concat(i.map(f=>".".concat(f,":not([").concat(Vs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Qi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Tp.begin("onTree"),u=a.reduce((f,h)=>{try{const p=DT(h);p&&f.push(p)}catch(p){hT||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,h)=>{Promise.all(u).then(p=>{xT(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),f()})}).catch(p=>{l(),h(p)})})}function h6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;DT(t).then(n=>{n&&xT([n],e)})}function d6(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:kh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:kh(s||{})),t(r,W(W({},n),{},{mask:s}))}}const p6=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=xn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:g}=t;return uu(W({type:"icon"},t),()=>(Fs("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||ua()):(u["aria-hidden"]="true",u.focusable="false")),bp({icons:{main:Oh(g),mask:s?Oh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:W(W({},xn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:f,classes:l}})))};var m6={mixout(){return{icon:d6(p6)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Hy,t.nodeCallback=h6,t}}},provides(t){t.i2svg=function(e){const{node:n=He,callback:r=()=>{}}=e;return Hy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:f,extra:h}=n;return new Promise((p,g)=>{Promise.all([xh(r,o),u.iconName?xh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[w,P]=y;p([e,bp({icons:{main:w,mask:P},prefix:o,iconName:r,transform:a,symbol:l,maskId:f,title:s,titleId:i,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=au(o);a.length>0&&(r.style=a);let l;return vp(i)&&(l=is("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},g6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return uu({type:"layer"},()=>{Fs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},_6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return uu({type:"counter",content:t},()=>(Fs("beforeDOMElementCreation",{content:t,params:e}),YV({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},y6={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=xn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return uu({type:"text",content:t},()=>(Fs("beforeDOMElementCreation",{content:t,params:e}),Vy({content:t,transform:W(W({},xn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(iT){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Vy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const v6=new RegExp('"',"ug"),zy=[1105920,1112319],qy=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),$M),iV),JM),Lh=Object.keys(qy).reduce((t,e)=>(t[e.toLowerCase()]=qy[e],t),{}),E6=Object.keys(Lh).reduce((t,e)=>{const n=Lh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function w6(t){const e=t.replace(v6,""),n=SV(e,0),r=n>=zy[0]&&n<=zy[1],s=e.length===2?e[0]===e[1]:!1;return{value:Sh(s?e[0]:e),isSecondary:r||s}}function b6(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Lh[n]||{})[s]||E6[n]}function Wy(t,e){const n="".concat(oV).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Qi(t.children).filter(p=>p.getAttribute(Th)===e)[0],a=rs.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(fV),f=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&h!=="none"&&h!==""){const p=a.getPropertyValue("content");let g=b6(l,f);const{value:y,isSecondary:w}=w6(p),P=u[0].startsWith("FontAwesome");let k=wp(g,y),S=k;if(P){const _=NV(y);_.iconName&&_.prefix&&(k=_.iconName,g=_.prefix)}if(k&&!w&&(!o||o.getAttribute(mp)!==g||o.getAttribute(gp)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);const _=l6(),{extra:R}=_;R.attributes[Th]=e,xh(k,g).then(D=>{const M=bp(W(W({},_),{},{icons:{main:D,mask:CT()},prefix:g,iconName:S,extra:R,watchable:!0})),T=He.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=M.map(E=>ka(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function T6(t){return Promise.all([Wy(t,"::before"),Wy(t,"::after")])}function I6(t){return t.parentNode!==document.head&&!~cV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Th)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ky(t){if(yr)return new Promise((e,n)=>{const r=Qi(t.querySelectorAll("*")).filter(I6).map(T6),s=Tp.begin("searchPseudoElements");NT(),Promise.all(r).then(()=>{s(),Dh(),e()}).catch(()=>{s(),Dh(),n()})})}var A6={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ky,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=He}=e;ae.searchPseudoElements&&Ky(n)}}};let Gy=!1;var R6={mixout(){return{dom:{unwatch(){NT(),Gy=!0}}}},hooks(){return{bootstrap(){jy(Ph("mutationObserverCallbacks",{}))},noAuto(){i6()},watch(t){const{observeMutationsRoot:e}=t;Gy?Dh():jy(Ph("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Yy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var S6={mixout(){return{parse:{transform:t=>Yy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Yy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(u)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:f,path:h};return{tag:"g",attributes:W({},p.outer),children:[{tag:"g",attributes:W({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),p.path)}]}]}}}};const df={x:0,y:0,width:"100%",height:"100%"};function Qy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function C6(t){return t.tag==="g"?t.children:[t]}var P6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?lu(n.split(" ").map(s=>s.trim())):CT();return r.prefix||(r.prefix=ss()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:f,icon:h}=i,p=wV({transform:a,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:W(W({},df),{},{fill:"white"})},y=u.children?{children:u.children.map(Qy)}:{},w={tag:"g",attributes:W({},p.inner),children:[Qy(W({tag:u.tag,attributes:W(W({},u.attributes),p.path)},y))]},P={tag:"g",attributes:W({},p.outer),children:[w]},k="mask-".concat(o||ua()),S="clip-".concat(o||ua()),_={tag:"mask",attributes:W(W({},df),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,P]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:C6(h)},_]};return n.push(R,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(k,")")},df)}),{children:n,attributes:r}}}},k6={provides(t){let e=!1;rs.matchMedia&&(e=rs.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},O6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},x6=[IV,m6,g6,_6,y6,A6,R6,S6,P6,k6,O6];$V(x6,{mixoutsTo:en});en.noAuto;const N6=en.config,D6=en.library;en.dom;const Mh=en.parse;en.findIconDefinition;en.toHtml;const L6=en.icon;en.layer;en.text;en.counter;function Xy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function er(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xy(Object(n),!0).forEach(function(r){Ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function M6(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function V6(t){var e=M6(t,"string");return typeof e=="symbol"?e:e+""}function _l(t){"@babel/helpers - typeof";return _l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_l(t)}function Ht(t,e,n){return e=V6(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F6(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function U6(t,e){if(t==null)return{};var n=F6(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var B6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},LT={exports:{}};(function(t){(function(e){var n=function(k,S,_){if(!u(S)||h(S)||p(S)||g(S)||l(S))return S;var R,D=0,M=0;if(f(S))for(R=[],M=S.length;D<M;D++)R.push(n(k,S[D],_));else{R={};for(var T in S)Object.prototype.hasOwnProperty.call(S,T)&&(R[k(T,_)]=n(k,S[T],_))}return R},r=function(k,S){S=S||{};var _=S.separator||"_",R=S.split||/(?=[A-Z])/;return k.split(R).join(_)},s=function(k){return y(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(S,_){return _?_.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var S=s(k);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(k,S){return r(k,S).toLowerCase()},a=Object.prototype.toString,l=function(k){return typeof k=="function"},u=function(k){return k===Object(k)},f=function(k){return a.call(k)=="[object Array]"},h=function(k){return a.call(k)=="[object Date]"},p=function(k){return a.call(k)=="[object RegExp]"},g=function(k){return a.call(k)=="[object Boolean]"},y=function(k){return k=k-0,k===k},w=function(k,S){var _=S&&"process"in S?S.process:S;return typeof _!="function"?k:function(R,D){return _(R,k,D)}},P={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,S){return n(w(s,S),k)},decamelizeKeys:function(k,S){return n(w(o,S),k,S)},pascalizeKeys:function(k,S){return n(w(i,S),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(B6)})(LT);var j6=LT.exports,$6=["class","style"];function H6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=j6.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function z6(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function MT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return MT(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.class=z6(f);break;case"style":l.style=H6(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=U6(n,$6);return ct(t.tag,er(er(er({},e),{},{class:s.class,style:er(er({},s.style),o)},s.attrs),a),r)}var VT=!1;try{VT=!0}catch{}function q6(){if(!VT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function pf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ht({},t,e):{}}function W6(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ht(Ht(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Jy(t){if(t&&_l(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mh.icon)return Mh.icon(t);if(t===null)return null;if(_l(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var K6=Tn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return Jy(e.icon)}),i=Fe(function(){return pf("classes",W6(e))}),o=Fe(function(){return pf("transform",typeof e.transform=="string"?Mh.transform(e.transform):e.transform)}),a=Fe(function(){return pf("mask",Jy(e.mask))}),l=Fe(function(){return L6(s.value,er(er(er(er({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Ln(l,function(f){if(!f)return q6("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Fe(function(){return l.value?MT(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const G6={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Y6={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},Q6=Y6,X6={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},J6={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Z6={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};N6.autoAddCss=!1;D6.add(G6,J6,Q6,Z6,X6);const e3=Zt(t=>{t.vueApp.component("font-awesome-icon",K6)});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let FT;const fu=t=>FT=t,UT=Symbol();function Vh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ho;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ho||(Ho={}));function t3(){const t=qh(!0),e=t.run(()=>Gt({}));let n=[],r=[];const s=Jh({install(i){fu(s),s._a=i,i.provide(UT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const BT=()=>{};function Zy(t,e,n,r=BT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ma()&&Nc(s),s}function Zs(t,...e){t.slice().forEach(n=>{n(...e)})}const n3=t=>t(),ev=Symbol(),mf=Symbol();function Fh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Vh(s)&&Vh(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!rr(r)?t[n]=Fh(s,r):t[n]=r}return t}const r3=Symbol();function s3(t){return!Vh(t)||!t.hasOwnProperty(r3)}const{assign:Sr}=Object;function i3(t){return!!(Ye(t)&&t.effect)}function o3(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const f=JI(n.state.value[t]);return Sr(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Jh(Fe(()=>{fu(n);const g=n._s.get(t);return o[p].call(g,g)})),h),{}))}return l=jT(t,u,e,n,r,!0),l}function jT(t,e,n={},r,s,i){let o;const a=Sr({actions:{}},n),l={deep:!0};let u,f,h=[],p=[],g;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Gt({});let w;function P(E){let v;u=f=!1,typeof E=="function"?(E(r.state.value[t]),v={type:Ho.patchFunction,storeId:t,events:g}):(Fh(r.state.value[t],E),v={type:Ho.patchObject,payload:E,storeId:t,events:g});const I=w=Symbol();jn().then(()=>{w===I&&(u=!0)}),f=!0,Zs(h,v,r.state.value[t])}const k=i?function(){const{state:v}=n,I=v?v():{};this.$patch(x=>{Sr(x,I)})}:BT;function S(){o.stop(),h=[],p=[],r._s.delete(t)}const _=(E,v="")=>{if(ev in E)return E[mf]=v,E;const I=function(){fu(r);const x=Array.from(arguments),O=[],A=[];function ge(se){O.push(se)}function Ee(se){A.push(se)}Zs(p,{args:x,name:I[mf],store:D,after:ge,onError:Ee});let Z;try{Z=E.apply(this&&this.$id===t?this:D,x)}catch(se){throw Zs(A,se),se}return Z instanceof Promise?Z.then(se=>(Zs(O,se),se)).catch(se=>(Zs(A,se),Promise.reject(se))):(Zs(O,Z),Z)};return I[ev]=!0,I[mf]=v,I},R={_p:r,$id:t,$onAction:Zy.bind(null,p),$patch:P,$reset:k,$subscribe(E,v={}){const I=Zy(h,E,v.detached,()=>x()),x=o.run(()=>Ln(()=>r.state.value[t],O=>{(v.flush==="sync"?f:u)&&E({storeId:t,type:Ho.direct,events:g},O)},Sr({},l,v)));return I},$dispose:S},D=mr(R);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||n3)(()=>r._e.run(()=>(o=qh()).run(()=>e({action:_}))));for(const E in T){const v=T[E];if(Ye(v)&&!i3(v)||rr(v))i||(y&&s3(v)&&(Ye(v)?v.value=y[E]:Fh(v,y[E])),r.state.value[t][E]=v);else if(typeof v=="function"){const I=_(v,E);T[E]=I,a.actions[E]=v}}return Sr(D,T),Sr(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:E=>{P(v=>{Sr(v,E)})}}),r._p.forEach(E=>{Sr(D,o.run(()=>E({store:D,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(D.$state,y),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function a3(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=ya();return a=a||(u?dt(UT,null):null),a&&fu(a),a=FT,a._s.has(r)||(i?jT(r,e,s,a):o3(r,s,a)),a._s.get(r)}return o.$id=r,o}function c3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function l3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const u3=Zt(t=>{const e=t3();t.vueApp.use(e)});var tv=/^(GTM|G)-[0-9A-Z]+$/;function gf(t){if(typeof t!="string"||!tv.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${tv}).${n}`)}}function Io(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function bi(t,e){let n=document,r=n.createElement("script"),s=u=>{var f;(f=e.onReady)==null||f.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(Io(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function f3(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var h3=class{constructor(t){rn(this,"id");rn(this,"options");rn(this,"scriptElements",[]);rn(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)gf(typeof e=="string"?e:e.id);else gf(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!f3(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=bi(n,{...this.options}):r=bi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=bi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?Io(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&Io(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&Io(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&Io(window,this.options.dataLayerName).push(t)}},yt;function d3(t,e={id:""}){e={trackOnNextTick:!1,...e},yt=new h3(e),t.config.globalProperties.$gtm=yt,yt.isInBrowserContext()&&(e.vueRouter&&p3(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),yt.options.enabled&&yt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")bi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),bi(n.id,r)}}):bi(e.id,e))),t.provide("gtm",e)}function p3(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,y;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?yt!=null&&yt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(yt!=null&&yt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},h=((y=(g=e.options)==null?void 0:g.history)==null?void 0:y.base)??"";h.endsWith("/")||(h+="/"),h+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?jn(()=>{yt==null||yt.trackView(u,h,f)}):yt==null||yt.trackView(u,h,f)})}function m3(t){return{install:e=>d3(e,t)}}const g3=Zt(t=>{const e=Bs().public,n=Qx("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(m3({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:Tt(),trackOnNextTick:!1}))}),_3=[dC,yC,MP,FP,UP,BP,$P,HP,qP,xM,e3,u3,g3],$T=(t="RouteProvider")=>Tn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Hr(ks,kn(s)),()=>e.vnode?ct(e.vnode,{ref:e.vnodeRef}):e.vnode}}),y3=$T(),nv=new WeakMap,v3=Tn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=je(),i=Gt(),o=dt(ks,null);let a;r({pageRef:i});const l=dt(qE,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);Tt().beforeEach(p)}t.pageKey&&Ln(()=>t.pageKey,(p,g)=>{p!==g&&s.callHook("page:loading:start")});let h=!1;{const p=Tt().beforeResolve(()=>{h=!1});Hi(()=>{p()})}return()=>ct(hw,{name:t.name,route:t.route,...e},{default:p=>{const g=w3(o,p.route,p.Component),y=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!y)return u;f();return}if(u&&l&&!l.isCurrent(p.route))return u;if(g&&o&&(!l||l!=null&&l.isCurrent(o)))return y?u:null;const w=Wf(p,t.pageKey),P=b3(o,p.route,p.Component);!s.isHydrating&&a===w&&!P&&jn(()=>{h=!0,s.callHook("page:loading:end")}),a=w;const k=!!(t.transition??p.route.meta.pageTransition??cg),S=k&&E3([t.transition,p.route.meta.pageTransition,cg,{onBeforeLeave(){s._runningTransition=!0},onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),_=t.keepalive??p.route.meta.keepalive??eS;return u=pw(k&&S,AP(_,ct(sd,{suspensible:!0,onPending:()=>s.callHook("page:start",p.Component),onResolve:()=>{jn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!h&&!P)return h=!0,s.callHook("page:loading:end")}).finally(f))}},{default:()=>{const R={key:w||void 0,vnode:n.default?T3(n.default,p):p.Component,route:p.route,renderKey:w||void 0,trackRootNodes:k,vnodeRef:i};if(!_)return ct(y3,R);const D=p.Component.type,M=D;let T=nv.get(M);return T||(T=$T(D.name||D.__name),nv.set(M,T)),ct(T,R)}}))).default(),u}})}});function E3(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?gd(n.onAfterLeave):void 0}));return HE(...e)}function w3(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Wf({route:e,Component:n})!==Wf({route:t,Component:n})}function b3(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function T3(t,e){const n=t(e);return n.length===1?ct(n[0]):ct(xt,void 0,n)}const I3=Tn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>ct(Ur[t.name],t.layoutProps,e.slots)}}),A3={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},R3=Tn({name:"NuxtLayout",inheritAttrs:!1,props:A3,setup(t,e){const n=je(),r=dt(ks),i=!r||r===Ol()?dw():r,o=Fe(()=>{let f=rt(t.name)??(i==null?void 0:i.meta.layout)??"default";return f&&!(f in Ur)&&t.fallback&&(f=rt(t.fallback)),f}),a=Cs();e.expose({layoutRef:a});const l=n.deferHydration();if(n.isHydrating){const f=n.hooks.hookOnce("app:error",l);Tt().beforeEach(f)}let u;return()=>{const f=o.value&&o.value in Ur,h=(i==null?void 0:i.meta.layoutTransition)??ZR,p=u;return u=o.value,pw(f&&h,{default:()=>ct(sd,{suspensible:!0,onResolve:()=>{jn(l)}},{default:()=>ct(S3,{layoutProps:EE(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:g=>g!==p&&g===o.value,hasTransition:!!h},e.slots)})}).default()}}}),S3=Tn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Hr(qE,{isCurrent:i=>n===(i.meta.layout??"default")});const r=dt(ks);if(r&&r===Ol()){const i=dw(),o={};for(const a in i){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:r[l]})}Hr(ks,kn(o))}return()=>{var i,o;return!n||typeof n=="string"&&!(n in Ur)?(o=(i=e.slots).default)==null?void 0:o.call(i):ct(I3,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),hu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},C3={};function P3(t,e){const n=v3,r=R3;return jt(),Zn(r,null,{default:Sn(()=>[be(n)]),_:1})}const k3=hu(C3,[["render",P3]]),O3=ld("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),rv=a3("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=je(),r=Tt();try{const s=await R2(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=je();try{await k2(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=je();P2(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),x3={class:"navbar navbar-expand-md navbar-light bg-light"},N3={class:"navbar-nav"},D3={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},L3={class:"navbar-nav ml-auto"};function M3(t,e,n,r,s,i){const o=nN;return jt(),Yo("nav",x3,[be(o,{class:"navbar-brand",to:"/"},{default:Sn(()=>e[2]||(e[2]=[an("Who's Jimmy")])),_:1,__:[2]}),ze("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[ze("span",{class:"navbar-toggler-icon"},null,-1)])),ze("div",{class:da(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[ze("ul",N3,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Sn(()=>e[4]||(e[4]=[an("Bio")])),_:1,__:[4]}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Sn(()=>e[5]||(e[5]=[an("Portfolio ")])),_:1,__:[5]}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Sn(()=>e[6]||(e[6]=[an("For Sale")])),_:1,__:[6]}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Sn(()=>e[7]||(e[7]=[an("Cool Stuff")])),_:1,__:[7]}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Sn(()=>e[8]||(e[8]=[an("Contact Us")])),_:1,__:[8]})])],2),s.isAuth?(jt(),Yo("div",D3,[ze("ul",L3,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Sn(()=>[an(zh(t.user?t.user.email:""),1)]),_:1}),ze("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):c1("",!0)])}const V3={data(){return{visible:!1,isAuth:!1}},computed:{...c3(rv,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...l3(rv,{signOut:"signOut"})}},F3=hu(V3,[["render",M3]]),U3={class:"page-footer font-small bg-light navbar-fixed-bottom"},B3={class:"container"},j3={class:"py-3 pt-3"},$3={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},H3={href:"https://www.facebook.com/whosjimmy"},z3={href:"https://twitter.com/jimmyclaws"},q3={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function W3(t,e){const n=Ko("font-awesome-icon");return jt(),Yo("footer",U3,[ze("div",B3,[ze("div",j3,[ze("a",$3,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),ze("a",H3,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),ze("a",z3,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),ze("a",q3,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=ze("div",{class:"footer-copyright text-center font-small"},[ze("div",null,[an("© 2024 Copyright: "),ze("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),ze("div",null,"Disclaimer: All images are copyright to their respective owners."),ze("div",null,[an("A "),ze("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),an(" creation.")])],-1))])}const K3={},G3=hu(K3,[["render",W3],["__scopeId","data-v-063d9b19"]]),Y3={class:"text-center my-0 page"},Q3={class:"body"},X3={components:{appHeader:F3,appFooter:G3},head(){return{title:"Error"}}},J3=Tn({...X3,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=je();vg({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{vg({title:n.public.SITE_TITLE}),KE({redirect:"/"})};return(i,o)=>{var u;const a=Ko("app-header"),l=Ko("app-footer");return jt(),Yo("div",Y3,[be(a),ze("div",Q3,[o[0]||(o[0]=ze("img",{src:O3,alt:"Error Image"},null,-1)),ze("h2",null,"Error: "+zh((u=t.error)==null?void 0:u.statusCode),1),ze("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),be(l)])}}}),Z3=hu(J3,[["__scopeId","data-v-a467a495"]]),eF={key:0},sv={__name:"nuxt-root",setup(t){const e=()=>null,n=je(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);Tt().beforeEach(u)}const s=!1;Hr(ks,Ol()),n.hooks.callHookWith(u=>u.map(f=>f()),"vue:setup");const i=xl(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Kv((u,f,h)=>{if(n.hooks.callHook("vue:error",u,f,h).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(GE(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>vs(u)),!1});const l=!1;return(u,f)=>(jt(),Zn(sd,{onResolve:rt(r)},{default:Sn(()=>[rt(o)?(jt(),Yo("div",eF)):rt(i)?(jt(),Zn(rt(Z3),{key:1,error:rt(i)},null,8,["error"])):rt(l)?(jt(),Zn(rt(e),{key:2,context:rt(l)},null,8,["context"])):rt(s)?(jt(),Zn(RA(rt(s)),{key:3})):(jt(),Zn(rt(k3),{key:4}))]),_:1},8,["onResolve"]))}};let iv;{let t;iv=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?Y1(sv):G1(sv),s=oS({vueApp:r});async function i(l){var u;await s.callHook("app:error",l),(u=s.payload).error||(u.error=Rs(l))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await lS(s,_3)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(rS),await s.hooks.callHook("app:mounted",r),await jn()}catch(l){i(l)}return r},t=iv().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{F3 as $,Hr as A,rr as B,ar as C,jn as D,ld as E,Sn as F,nN as G,xt as H,sF as I,oF as J,lF as K,CM as L,EF as M,yF as N,vF as O,iF as P,da as Q,nF as R,a1 as S,T1 as T,ks as U,fF as V,yS as W,Qx as X,cF as Y,G3 as Z,hu as _,ze as a,v3 as a0,a3 as a1,je as a2,_F as a3,pF as a4,gF as a5,dF as a6,mF as a7,an as b,Yo as c,l3 as d,uF as e,c1 as f,Zn as g,rt as h,be as i,Cl as j,Gt as k,wA as l,c3 as m,wl as n,jt as o,Ln as p,Ye as q,Ko as r,mr as s,zh as t,rv as u,aF as v,rF as w,Hi as x,Fe as y,dt as z};
