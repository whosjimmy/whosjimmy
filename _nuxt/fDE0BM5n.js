const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BAQ1O9Ez.js","./Bio.BaV4dkSc.css","./DaoZ52yg.js","./C-sH0VYD.js","./index.CAtFJWG6.css","./CVTIq0WY.js","./DRJ1jAQ9.js","./Gallery.BdWwPq4R.css","./-p41Y_Bl.js","./Contact.Bq_tjq4M.css","./BV5945fc.js","./C-Vo-iTo.js","./CK2BTrlX.js","./index.ASLudlX-.css","./C-fUdEyI.js","./index.EfND0qCY.css","./BL3m-Y30.js","./Clocks.CaZdgkmv.css","./C0a39WHx.js","./D_4le-mW.js","./Film.D8qa6UOd.css","./nHnvGPIn.js","./index.ByThmlNc.css","./kUH8D5T6.js","./CJPhoOQG.js","./Clocks.Dmp-oUCd.css","./DHE0tQ3z.js","./MWV8zuX8.js","./DdbGzf4u.js","./Film.CyscwsSS.css","./3tZ8vQoQ.js","./Celebrities.BS01JuXe.css","./i9OfLFQy.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var mI=Object.defineProperty;var wm=t=>{throw TypeError(t)};var gI=(t,e,n)=>e in t?mI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var on=(t,e,n)=>gI(t,typeof e!="symbol"?e+"":e,n),_I=(t,e,n)=>e.has(t)||wm("Cannot "+n);var mo=(t,e,n)=>(_I(t,e,"read from private field"),n?n.call(t):e.get(t)),bm=(t,e,n)=>e.has(t)?wm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},di=[],Mn=()=>{},yI=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wh=t=>t.startsWith("onUpdate:"),gt=Object.assign,Kh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vI=Object.prototype.hasOwnProperty,Ne=(t,e)=>vI.call(t,e),ue=Array.isArray,pi=t=>Wi(t)==="[object Map]",qi=t=>Wi(t)==="[object Set]",Tm=t=>Wi(t)==="[object Date]",EI=t=>Wi(t)==="[object RegExp]",pe=t=>typeof t=="function",Ke=t=>typeof t=="string",wn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",uv=t=>(Le(t)||pe(t))&&pe(t.then)&&pe(t.catch),fv=Object.prototype.toString,Wi=t=>fv.call(t),wI=t=>Wi(t).slice(8,-1),hv=t=>Wi(t)==="[object Object]",Gh=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mi=qh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bI=/-(\w)/g,pn=Tl(t=>t.replace(bI,(e,n)=>n?n.toUpperCase():"")),TI=/\B([A-Z])/g,Hs=Tl(t=>t.replace(TI,"-$1").toLowerCase()),Il=Tl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nu=Tl(t=>t?`on${Il(t)}`:""),qr=(t,e)=>!Object.is(t,e),gi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dv=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Im;const Al=()=>Im||(Im=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?SI(r):Rl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Le(t))return t}const II=/;(?![^(]*\))/g,AI=/:([^]+)/,RI=/\/\*[^]*?\*\//g;function SI(t){const e={};return t.replace(RI,"").split(II).forEach(n=>{if(n){const r=n.split(AI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ya(t){let e="";if(Ke(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=ya(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function iF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=ya(e)),n&&(t.style=Rl(n)),t}const CI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",PI=qh(CI);function pv(t){return!!t||t===""}function kI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=va(t[r],e[r]);return n}function va(t,e){if(t===e)return!0;let n=Tm(t),r=Tm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=wn(t),r=wn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?kI(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!va(t[o],e[o]))return!1}}return String(t)===String(e)}function Yh(t,e){return t.findIndex(n=>va(n,e))}const mv=t=>!!(t&&t.__v_isRef===!0),Qh=t=>Ke(t)?t:t==null?"":ue(t)||Le(t)&&(t.toString===fv||!pe(t.toString))?mv(t)?Qh(t.value):JSON.stringify(t,gv,2):String(t),gv=(t,e)=>mv(e)?gv(t,e.value):pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xu(r,i)+" =>"]=s,n),{})}:qi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xu(n))}:wn(e)?xu(e):Le(e)&&!ue(e)&&!hv(e)?String(e):e,xu=(t,e="")=>{var n;return wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class _v{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xh(t){return new _v(t)}function Ea(){return Ot}function Uc(t,e=!1){Ot&&Ot.cleanups.push(t)}let je;const Du=new WeakSet;class yv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Du.has(this)&&(Du.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ev(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Am(this),wv(this);const e=je,n=En;je=this,En=!0;try{return this.fn()}finally{bv(this),je=e,En=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ed(e);this.deps=this.depsTail=void 0,Am(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Du.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){If(this)&&this.run()}get dirty(){return If(this)}}let vv=0,ko,Oo;function Ev(t,e=!1){if(t.flags|=8,e){t.next=Oo,Oo=t;return}t.next=ko,ko=t}function Jh(){vv++}function Zh(){if(--vv>0)return;if(Oo){let e=Oo;for(Oo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ko;){let e=ko;for(ko=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function wv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ed(r),OI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function If(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yo)||(t.globalVersion=Yo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!If(t))))return;t.flags|=2;const e=t.dep,n=je,r=En;je=t,En=!0;try{wv(t);const s=t.fn(t._value);(e.version===0||qr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{je=n,En=r,bv(t),t.flags&=-3}}function ed(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ed(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function OI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let En=!0;const Iv=[];function lr(){Iv.push(En),En=!1}function ur(){const t=Iv.pop();En=t===void 0?!0:t}function Am(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let Yo=0;class NI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!je||!En||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new NI(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,Av(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=r)}return n}trigger(e){this.version++,Yo++,this.notify(e)}notify(e){Jh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zh()}}}function Av(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Av(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const jc=new WeakMap,Ss=Symbol(""),Af=Symbol(""),Qo=Symbol("");function xt(t,e,n){if(En&&je){let r=jc.get(t);r||jc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Sl),s.map=r,s.key=n),s.track()}}function tr(t,e,n,r,s,i){const o=jc.get(t);if(!o){Yo++;return}const a=l=>{l&&l.trigger()};if(Jh(),e==="clear")o.forEach(a);else{const l=ue(t),u=l&&Gh(n);if(l&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===Qo||!wn(p)&&p>=f)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Qo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Ss)),pi(t)&&a(o.get(Af)));break;case"delete":l||(a(o.get(Ss)),pi(t)&&a(o.get(Af)));break;case"set":pi(t)&&a(o.get(Ss));break}}Zh()}function xI(t,e){const n=jc.get(t);return n&&n.get(e)}function ti(t){const e=Re(t);return e===t?e:(xt(e,"iterate",Qo),hn(t)?e:e.map(Tt))}function Cl(t){return xt(t=Re(t),"iterate",Qo),t}const DI={__proto__:null,[Symbol.iterator](){return Lu(this,Symbol.iterator,Tt)},concat(...t){return ti(this).concat(...t.map(e=>ue(e)?ti(e):e))},entries(){return Lu(this,"entries",t=>(t[1]=Tt(t[1]),t))},every(t,e){return Xn(this,"every",t,e,void 0,arguments)},filter(t,e){return Xn(this,"filter",t,e,n=>n.map(Tt),arguments)},find(t,e){return Xn(this,"find",t,e,Tt,arguments)},findIndex(t,e){return Xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xn(this,"findLast",t,e,Tt,arguments)},findLastIndex(t,e){return Xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mu(this,"includes",t)},indexOf(...t){return Mu(this,"indexOf",t)},join(t){return ti(this).join(t)},lastIndexOf(...t){return Mu(this,"lastIndexOf",t)},map(t,e){return Xn(this,"map",t,e,void 0,arguments)},pop(){return go(this,"pop")},push(...t){return go(this,"push",t)},reduce(t,...e){return Rm(this,"reduce",t,e)},reduceRight(t,...e){return Rm(this,"reduceRight",t,e)},shift(){return go(this,"shift")},some(t,e){return Xn(this,"some",t,e,void 0,arguments)},splice(...t){return go(this,"splice",t)},toReversed(){return ti(this).toReversed()},toSorted(t){return ti(this).toSorted(t)},toSpliced(...t){return ti(this).toSpliced(...t)},unshift(...t){return go(this,"unshift",t)},values(){return Lu(this,"values",Tt)}};function Lu(t,e,n){const r=Cl(t),s=r[e]();return r!==t&&!hn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const LI=Array.prototype;function Xn(t,e,n,r,s,i){const o=Cl(t),a=o!==t&&!hn(t),l=o[e];if(l!==LI[e]){const d=l.apply(t,i);return a?Tt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,Tt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const f=l.call(o,u,r);return a&&s?s(f):f}function Rm(t,e,n,r){const s=Cl(t);let i=n;return s!==t&&(hn(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Tt(a),l,t)}),s[e](i,...r)}function Mu(t,e,n){const r=Re(t);xt(r,"iterate",Qo);const s=r[e](...n);return(s===-1||s===!1)&&rd(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function go(t,e,n=[]){lr(),Jh();const r=Re(t)[e].apply(t,n);return Zh(),ur(),r}const MI=qh("__proto__,__v_isRef,__isVue"),Rv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wn));function VI(t){wn(t)||(t=String(t));const e=Re(this);return xt(e,"has",t),e.hasOwnProperty(t)}class Sv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?KI:Ov:i?kv:Pv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=DI[n]))return l;if(n==="hasOwnProperty")return VI}const a=Reflect.get(e,n,Qe(e)?e:r);return(wn(n)?Rv.has(n):MI(n))||(s||xt(e,"get",n),i)?a:Qe(a)?o&&Gh(n)?a:a.value:Le(a)?s?Nv(a):vr(a):a}}class Cv extends Sv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=fr(i);if(!hn(r)&&!fr(r)&&(i=Re(i),r=Re(r)),!ue(e)&&Qe(i)&&!Qe(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&Gh(n)?Number(n)<e.length:Ne(e,n),a=Reflect.set(e,n,r,Qe(e)?e:s);return e===Re(s)&&(o?qr(r,i)&&tr(e,"set",n,r):tr(e,"add",n,r)),a}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wn(n)||!Rv.has(n))&&xt(e,"has",n),r}ownKeys(e){return xt(e,"iterate",ue(e)?"length":Ss),Reflect.ownKeys(e)}}class FI extends Sv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const UI=new Cv,jI=new FI,BI=new Cv(!0);const Rf=t=>t,Ja=t=>Reflect.getPrototypeOf(t);function $I(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=pi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Rf:e?Bc:Tt;return!e&&xt(i,"iterate",l?Af:Ss),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function Za(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function HI(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(qr(s,a)&&xt(o,"get",s),xt(o,"get",a));const{has:l}=Ja(o),u=e?Rf:t?Bc:Tt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&xt(Re(s),"iterate",Ss),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(qr(s,a)&&xt(o,"has",s),xt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Re(a),u=e?Rf:t?Bc:Tt;return!t&&xt(l,"iterate",Ss),a.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return gt(n,t?{add:Za("add"),set:Za("set"),delete:Za("delete"),clear:Za("clear")}:{add(s){!e&&!hn(s)&&!fr(s)&&(s=Re(s));const i=Re(this);return Ja(i).has.call(i,s)||(i.add(s),tr(i,"add",s,s)),this},set(s,i){!e&&!hn(i)&&!fr(i)&&(i=Re(i));const o=Re(this),{has:a,get:l}=Ja(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const f=l.call(o,s);return o.set(s,i),u?qr(i,f)&&tr(o,"set",s,i):tr(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=Ja(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&tr(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&tr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$I(s,t,e)}),n}function td(t,e){const n=HI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const zI={get:td(!1,!1)},qI={get:td(!1,!0)},WI={get:td(!0,!1)};const Pv=new WeakMap,kv=new WeakMap,Ov=new WeakMap,KI=new WeakMap;function GI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function YI(t){return t.__v_skip||!Object.isExtensible(t)?0:GI(wI(t))}function vr(t){return fr(t)?t:nd(t,!1,UI,zI,Pv)}function Nn(t){return nd(t,!1,BI,qI,kv)}function Nv(t){return nd(t,!0,jI,WI,Ov)}function nd(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=YI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function ar(t){return fr(t)?ar(t.__v_raw):!!(t&&t.__v_isReactive)}function fr(t){return!!(t&&t.__v_isReadonly)}function hn(t){return!!(t&&t.__v_isShallow)}function rd(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function sd(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&Tf(t,"__v_skip",!0),t}const Tt=t=>Le(t)?vr(t):t,Bc=t=>Le(t)?Nv(t):t;function Qe(t){return t?t.__v_isRef===!0:!1}function Qt(t){return xv(t,!1)}function Ns(t){return xv(t,!0)}function xv(t,e){return Qe(t)?t:new QI(t,e)}class QI{constructor(e,n){this.dep=new Sl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:Tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||hn(e)||fr(e);e=r?e:Re(e),qr(e,n)&&(this._rawValue=e,this._value=r?e:Tt(e),this.dep.trigger())}}function st(t){return Qe(t)?t.value:t}function XI(t){return pe(t)?t():st(t)}const JI={get:(t,e,n)=>e==="__v_raw"?t:st(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Qe(s)&&!Qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dv(t){return ar(t)?t:new Proxy(t,JI)}class ZI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Sl,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function eA(t){return new ZI(t)}function tA(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=Lv(t,n);return e}class nA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xI(Re(this._object),this._key)}}class rA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function sA(t,e,n){return Qe(t)?t:pe(t)?new rA(t):Le(t)&&arguments.length>1?Lv(t,e,n):Qt(t)}function Lv(t,e,n){const r=t[e];return Qe(r)?r:new nA(t,e,n)}class iA{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return Ev(this,!0),!0}get value(){const e=this.dep.track();return Tv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function oA(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new iA(r,s,n)}const ec={},$c=new WeakMap;let bs;function aA(t,e=!1,n=bs){if(n){let r=$c.get(n);r||$c.set(n,r=[]),r.push(t)}}function cA(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=S=>s?S:hn(S)||s===!1||s===0?nr(S,1):nr(S);let f,d,p,g,y=!1,w=!1;if(Qe(t)?(d=()=>t.value,y=hn(t)):ar(t)?(d=()=>u(t),y=!0):ue(t)?(w=!0,y=t.some(S=>ar(S)||hn(S)),d=()=>t.map(S=>{if(Qe(S))return S.value;if(ar(S))return u(S);if(pe(S))return l?l(S,2):S()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){lr();try{p()}finally{ur()}}const S=bs;bs=f;try{return l?l(t,3,[g]):t(g)}finally{bs=S}}:d=Mn,e&&s){const S=d,D=s===!0?1/0:s;d=()=>nr(S(),D)}const k=Ea(),P=()=>{f.stop(),k&&k.active&&Kh(k.effects,f)};if(i&&e){const S=e;e=(...D)=>{S(...D),P()}}let R=w?new Array(t.length).fill(ec):ec;const _=S=>{if(!(!(f.flags&1)||!f.dirty&&!S))if(e){const D=f.run();if(s||y||(w?D.some((M,T)=>qr(M,R[T])):qr(D,R))){p&&p();const M=bs;bs=f;try{const T=[D,R===ec?void 0:w&&R[0]===ec?[]:R,g];R=D,l?l(e,3,T):e(...T)}finally{bs=M}}}else f.run()};return a&&a(_),f=new yv(d),f.scheduler=o?()=>o(_,!1):_,g=S=>aA(S,!1,f),p=f.onStop=()=>{const S=$c.get(f);if(S){if(l)l(S,4);else for(const D of S)D();$c.delete(f)}},e?r?_(!0):R=f.run():o?o(_.bind(null,!0),!0):f.run(),P.pause=f.pause.bind(f),P.resume=f.resume.bind(f),P.stop=P,P}function nr(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Qe(t))nr(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)nr(t[r],e,n);else if(qi(t)||pi(t))t.forEach(r=>{nr(r,e,n)});else if(hv(t)){for(const r in t)nr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wa(t,e,n,r){try{return r?t(...r):t()}catch(s){Ki(s,e,n)}}function bn(t,e,n,r){if(pe(t)){const s=wa(t,e,n,r);return s&&uv(s)&&s.catch(i=>{Ki(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(bn(t[i],e,n,r));return s}}function Ki(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,l,u)===!1)return}a=a.parent}if(i){lr(),wa(i,null,10,[t,l,u]),ur();return}}lA(t,n,s,r,o)}function lA(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const $t=[];let Cn=-1;const _i=[];let Nr=null,si=0;const Mv=Promise.resolve();let Hc=null;function qn(t){const e=Hc||Mv;return t?e.then(this?t.bind(this):t):e}function uA(t){let e=Cn+1,n=$t.length;for(;e<n;){const r=e+n>>>1,s=$t[r],i=Xo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function id(t){if(!(t.flags&1)){const e=Xo(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=Xo(n)?$t.push(t):$t.splice(uA(e),0,t),t.flags|=1,Vv()}}function Vv(){Hc||(Hc=Mv.then(Fv))}function Sf(t){ue(t)?_i.push(...t):Nr&&t.id===-1?Nr.splice(si+1,0,t):t.flags&1||(_i.push(t),t.flags|=1),Vv()}function Sm(t,e,n=Cn+1){for(;n<$t.length;n++){const r=$t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;$t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zc(t){if(_i.length){const e=[...new Set(_i)].sort((n,r)=>Xo(n)-Xo(r));if(_i.length=0,Nr){Nr.push(...e);return}for(Nr=e,si=0;si<Nr.length;si++){const n=Nr[si];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nr=null,si=0}}const Xo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fv(t){try{for(Cn=0;Cn<$t.length;Cn++){const e=$t[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<$t.length;Cn++){const e=$t[Cn];e&&(e.flags&=-2)}Cn=-1,$t.length=0,zc(),Hc=null,($t.length||_i.length)&&Fv()}}let lt=null,Uv=null;function qc(t){const e=lt;return lt=t,Uv=t&&t.type.__scopeId||null,e}function Pn(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Um(-1);const i=qc(e);let o;try{o=t(...s)}finally{qc(i),r._d&&Um(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function oF(t,e){if(lt===null)return t;const n=Dl(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&nr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function kn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(lr(),bn(l,n,8,[t.el,a,t,e]),ur())}}const fA=Symbol("_vte"),jv=t=>t.__isTeleport,xr=Symbol("_leaveCb"),tc=Symbol("_enterCb");function hA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kl(()=>{t.isMounted=!0}),Gi(()=>{t.isUnmounting=!0}),t}const an=[Function,Array],Bv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:an,onEnter:an,onAfterEnter:an,onEnterCancelled:an,onBeforeLeave:an,onLeave:an,onAfterLeave:an,onLeaveCancelled:an,onBeforeAppear:an,onAppear:an,onAfterAppear:an,onAppearCancelled:an},$v=t=>{const e=t.subTree;return e.component?$v(e.component):e},dA={name:"BaseTransition",props:Bv,setup(t,{slots:e}){const n=xl(),r=hA();return()=>{const s=e.default&&qv(e.default(),!0);if(!s||!s.length)return;const i=Hv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return Vu(i);const l=Cm(i);if(!l)return Vu(i);let u=Cf(l,o,r,n,d=>u=d);l.type!==it&&Pi(l,u);let f=n.subTree&&Cm(n.subTree);if(f&&f.type!==it&&!yn(l,f)&&$v(n).type!==it){let d=Cf(f,o,r,n);if(Pi(f,d),a==="out-in"&&l.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},Vu(i);a==="in-out"&&l.type!==it?d.delayLeave=(p,g,y)=>{const w=zv(r,f);w[String(f.key)]=f,p[xr]=()=>{g(),p[xr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Hv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const pA=dA;function zv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Cf(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:y,onLeaveCancelled:w,onBeforeAppear:k,onAppear:P,onAfterAppear:R,onAppearCancelled:_}=e,S=String(t.key),D=zv(n,t),M=(E,I)=>{E&&bn(E,r,9,I)},T=(E,I)=>{const N=I[1];M(E,I),ue(E)?E.every(O=>O.length<=1)&&N():E.length<=1&&N()},v={mode:o,persisted:a,beforeEnter(E){let I=l;if(!n.isMounted)if(i)I=k||l;else return;E[xr]&&E[xr](!0);const N=D[S];N&&yn(t,N)&&N.el[xr]&&N.el[xr](),M(I,[E])},enter(E){let I=u,N=f,O=d;if(!n.isMounted)if(i)I=P||u,N=R||f,O=_||d;else return;let A=!1;const ge=E[tc]=ve=>{A||(A=!0,ve?M(O,[E]):M(N,[E]),v.delayedLeave&&v.delayedLeave(),E[tc]=void 0)};I?T(I,[E,ge]):ge()},leave(E,I){const N=String(t.key);if(E[tc]&&E[tc](!0),n.isUnmounting)return I();M(p,[E]);let O=!1;const A=E[xr]=ge=>{O||(O=!0,I(),ge?M(w,[E]):M(y,[E]),E[xr]=void 0,D[N]===t&&delete D[N])};D[N]=t,g?T(g,[E,A]):A()},clone(E){const I=Cf(E,e,n,r,s);return s&&s(I),I}};return v}function Vu(t){if(ba(t))return t=hr(t),t.children=null,t}function Cm(t){if(!ba(t))return jv(t.type)&&t.children?Hv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Pi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Pi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Dt?(o.patchFlag&128&&s++,r=r.concat(qv(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?hr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function An(t,e){return pe(t)?gt({name:t.name},e,{setup:t}):t}function od(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function yi(t,e,n,r,s=!1){if(ue(t)){t.forEach((y,w)=>yi(y,e&&(ue(e)?e[w]:e),n,r,s));return}if(Wr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Dl(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,f=a.refs===Ve?a.refs={}:a.refs,d=a.setupState,p=Re(d),g=d===Ve?()=>!1:y=>Ne(p,y);if(u!=null&&u!==l&&(Ke(u)?(f[u]=null,g(u)&&(d[u]=null)):Qe(u)&&(u.value=null)),pe(l))wa(l,a,12,[o,f]);else{const y=Ke(l),w=Qe(l);if(y||w){const k=()=>{if(t.f){const P=y?g(l)?d[l]:f[l]:l.value;s?ue(P)&&Kh(P,i):ue(P)?P.includes(i)||P.push(i):y?(f[l]=[i],g(l)&&(d[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else y?(f[l]=o,g(l)&&(d[l]=o)):w&&(l.value=o,t.k&&(f[t.k]=o))};o?(k.id=-1,wt(k,n)):k()}}}let Pm=!1;const ni=()=>{Pm||(console.error("Hydration completed but contains mismatches."),Pm=!0)},mA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",gA=t=>t.namespaceURI.includes("MathML"),nc=t=>{if(t.nodeType===1){if(mA(t))return"svg";if(gA(t))return"mathml"}},ui=t=>t.nodeType===8;function _A(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,f=(_,S)=>{if(!S.hasChildNodes()){n(null,_,S),zc(),S._vnode=_;return}d(S.firstChild,_,null,null,null),zc(),S._vnode=_},d=(_,S,D,M,T,v=!1)=>{v=v||!!S.dynamicChildren;const E=ui(_)&&_.data==="[",I=()=>w(_,S,D,M,T,E),{type:N,ref:O,shapeFlag:A,patchFlag:ge}=S;let ve=_.nodeType;S.el=_,ge===-2&&(v=!1,S.dynamicChildren=null);let Z=null;switch(N){case Ps:ve!==3?S.children===""?(l(S.el=s(""),o(_),_),Z=_):Z=I():(_.data!==S.children&&(ni(),_.data=S.children),Z=i(_));break;case it:R(_)?(Z=i(_),P(S.el=_.content.firstChild,_,D)):ve!==8||E?Z=I():Z=i(_);break;case xo:if(E&&(_=i(_),ve=_.nodeType),ve===1||ve===3){Z=_;const se=!S.children.length;for(let ne=0;ne<S.staticCount;ne++)se&&(S.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===S.staticCount-1&&(S.anchor=Z),Z=i(Z);return E?i(Z):Z}else I();break;case Dt:E?Z=y(_,S,D,M,T,v):Z=I();break;default:if(A&1)(ve!==1||S.type.toLowerCase()!==_.tagName.toLowerCase())&&!R(_)?Z=I():Z=p(_,S,D,M,T,v);else if(A&6){S.slotScopeIds=T;const se=o(_);if(E?Z=k(_):ui(_)&&_.data==="teleport start"?Z=k(_,_.data,"teleport end"):Z=i(_),e(S,se,null,D,M,nc(se),v),Wr(S)&&!S.type.__asyncResolved){let ne;E?(ne=be(Dt),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=_.nodeType===3?ln(""):be("div"),ne.el=_,S.component.subTree=ne}}else A&64?ve!==8?Z=I():Z=S.type.hydrate(_,S,D,M,T,v,t,g):A&128&&(Z=S.type.hydrate(_,S,D,M,nc(o(_)),T,v,t,d))}return O!=null&&yi(O,null,M,S),Z},p=(_,S,D,M,T,v)=>{v=v||!!S.dynamicChildren;const{type:E,props:I,patchFlag:N,shapeFlag:O,dirs:A,transition:ge}=S,ve=E==="input"||E==="option";if(ve||N!==-1){A&&kn(S,null,D,"created");let Z=!1;if(R(_)){Z=pE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=_.content.firstChild;if(Z){const Ue=ne.getAttribute("class");Ue&&(ne.$cls=Ue),ge.beforeEnter(ne)}P(ne,_,D),S.el=_=ne}if(O&16&&!(I&&(I.innerHTML||I.textContent))){let ne=g(_.firstChild,S,_,D,M,T,v);for(;ne;){rc(_,1)||ni();const Ue=ne;ne=ne.nextSibling,a(Ue)}}else if(O&8){let ne=S.children;ne[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(ne=ne.slice(1)),_.textContent!==ne&&(rc(_,0)||ni(),_.textContent=S.children)}if(I){if(ve||!v||N&48){const ne=_.tagName.includes("-");for(const Ue in I)(ve&&(Ue.endsWith("value")||Ue==="indeterminate")||_a(Ue)&&!mi(Ue)||Ue[0]==="."||ne)&&r(_,Ue,null,I[Ue],void 0,D)}else if(I.onClick)r(_,"onClick",null,I.onClick,void 0,D);else if(N&4&&ar(I.style))for(const ne in I.style)I.style[ne]}let se;(se=I&&I.onVnodeBeforeMount)&&Wt(se,D,S),A&&kn(S,null,D,"beforeMount"),((se=I&&I.onVnodeMounted)||A||Z)&&EE(()=>{se&&Wt(se,D,S),Z&&ge.enter(_),A&&kn(S,null,D,"mounted")},M)}return _.nextSibling},g=(_,S,D,M,T,v,E)=>{E=E||!!S.dynamicChildren;const I=S.children,N=I.length;for(let O=0;O<N;O++){const A=E?I[O]:I[O]=Jt(I[O]),ge=A.type===Ps;_?(ge&&!E&&O+1<N&&Jt(I[O+1]).type===Ps&&(l(s(_.data.slice(A.children.length)),D,i(_)),_.data=A.children),_=d(_,A,M,T,v,E)):ge&&!A.children?l(A.el=s(""),D):(rc(D,1)||ni(),n(null,A,D,null,M,T,nc(D),v))}return _},y=(_,S,D,M,T,v)=>{const{slotScopeIds:E}=S;E&&(T=T?T.concat(E):E);const I=o(_),N=g(i(_),S,I,D,M,T,v);return N&&ui(N)&&N.data==="]"?i(S.anchor=N):(ni(),l(S.anchor=u("]"),I,N),N)},w=(_,S,D,M,T,v)=>{if(rc(_.parentElement,1)||ni(),S.el=null,v){const N=k(_);for(;;){const O=i(_);if(O&&O!==N)a(O);else break}}const E=i(_),I=o(_);return a(_),n(null,S,I,E,D,M,nc(I),T),D&&(D.vnode.el=S.el,Nl(D,S.el)),E},k=(_,S="[",D="]")=>{let M=0;for(;_;)if(_=i(_),_&&ui(_)&&(_.data===S&&M++,_.data===D)){if(M===0)return i(_);M--}return _},P=(_,S,D)=>{const M=S.parentNode;M&&M.replaceChild(_,S);let T=D;for(;T;)T.vnode.el===S&&(T.vnode.el=T.subTree.el=_),T=T.parent},R=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[f,d]}const km="data-allow-mismatch",yA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function rc(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(km);)t=t.parentElement;const n=t&&t.getAttribute(km);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(yA[e])}}Al().requestIdleCallback;Al().cancelIdleCallback;function vA(t,e){if(ui(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ui(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Wr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function EA(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,f,d=0;const p=()=>(d++,u=null,g()),g=()=>{let y;return u||(y=u=e().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),l)return new Promise((k,P)=>{l(w,()=>k(p()),()=>P(w),d+1)});throw w}).then(w=>y!==u&&u?u:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),f=w,w)))};return An({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(y,w,k){const P=i?()=>{const _=i(()=>{k()},S=>vA(y,S));_&&(w.bum||(w.bum=[])).push(_),(w.u||(w.u=[])).push(()=>!0)}:k;f?P():g().then(()=>!w.isUnmounted&&P())},get __asyncResolved(){return f},setup(){const y=at;if(od(y),f)return()=>Fu(f,y);const w=_=>{u=null,Ki(_,y,13,!r)};if(a&&y.suspense||Oi)return g().then(_=>()=>Fu(_,y)).catch(_=>(w(_),()=>r?be(r,{error:_}):null));const k=Qt(!1),P=Qt(),R=Qt(!!s);return s&&setTimeout(()=>{R.value=!1},s),o!=null&&setTimeout(()=>{if(!k.value&&!P.value){const _=new Error(`Async component timed out after ${o}ms.`);w(_),P.value=_}},o),g().then(()=>{k.value=!0,y.parent&&ba(y.parent.vnode)&&y.parent.update()}).catch(_=>{w(_),P.value=_}),()=>{if(k.value&&f)return Fu(f,y);if(P.value&&r)return be(r,{error:P.value});if(n&&!R.value)return be(n)}}})}function Fu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=be(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ba=t=>t.type.__isKeepAlive,wA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=xl(),r=n.ctx;if(!r.renderer)return()=>{const R=e.default&&e.default();return R&&R.length===1?R[0]:R};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:f,o:{createElement:d}}}=r,p=d("div");r.activate=(R,_,S,D,M)=>{const T=R.component;u(R,_,S,0,a),l(T.vnode,R,_,S,T,a,D,R.slotScopeIds,M),wt(()=>{T.isDeactivated=!1,T.a&&gi(T.a);const v=R.props&&R.props.onVnodeMounted;v&&Wt(v,T.parent,R)},a)},r.deactivate=R=>{const _=R.component;Kc(_.m),Kc(_.a),u(R,p,null,1,a),wt(()=>{_.da&&gi(_.da);const S=R.props&&R.props.onVnodeUnmounted;S&&Wt(S,_.parent,R),_.isDeactivated=!0},a)};function g(R){Uu(R),f(R,n,a,!0)}function y(R){s.forEach((_,S)=>{const D=Mf(_.type);D&&!R(D)&&w(S)})}function w(R){const _=s.get(R);_&&(!o||!yn(_,o))?g(_):o&&Uu(o),s.delete(R),i.delete(R)}Vn(()=>[t.include,t.exclude],([R,_])=>{R&&y(S=>wo(R,S)),_&&y(S=>!wo(_,S))},{flush:"post",deep:!0});let k=null;const P=()=>{k!=null&&(Gc(n.subTree.type)?wt(()=>{s.set(k,sc(n.subTree))},n.subTree.suspense):s.set(k,sc(n.subTree)))};return kl(P),Yv(P),Gi(()=>{s.forEach(R=>{const{subTree:_,suspense:S}=n,D=sc(_);if(R.type===D.type&&R.key===D.key){Uu(D);const M=D.component.da;M&&wt(M,S);return}g(R)})}),()=>{if(k=null,!e.default)return o=null;const R=e.default(),_=R[0];if(R.length>1)return o=null,R;if(!xs(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let S=sc(_);if(S.type===it)return o=null,S;const D=S.type,M=Mf(Wr(S)?S.type.__asyncResolved||{}:D),{include:T,exclude:v,max:E}=t;if(T&&(!M||!wo(T,M))||v&&M&&wo(v,M))return S.shapeFlag&=-257,o=S,_;const I=S.key==null?D:S.key,N=s.get(I);return S.el&&(S=hr(S),_.shapeFlag&128&&(_.ssContent=S)),k=I,N?(S.el=N.el,S.component=N.component,S.transition&&Pi(S,S.transition),S.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),E&&i.size>parseInt(E,10)&&w(i.values().next().value)),S.shapeFlag|=256,o=S,Gc(_.type)?_:S}}},bA=wA;function wo(t,e){return ue(t)?t.some(n=>wo(n,e)):Ke(t)?t.split(",").includes(e):EI(t)?(t.lastIndex=0,t.test(e)):!1}function Wv(t,e){Gv(t,"a",e)}function Kv(t,e){Gv(t,"da",e)}function Gv(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&TA(r,e,n,s),s=s.parent}}function TA(t,e,n,r){const s=Pl(e,t,r,!0);Qv(()=>{Kh(r[e],s)},n)}function Uu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function sc(t){return t.shapeFlag&128?t.ssContent:t}function Pl(t,e,n=at,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lr();const a=Ia(n),l=bn(e,n,t,o);return a(),ur(),l});return r?s.unshift(i):s.push(i),i}}const Er=t=>(e,n=at)=>{(!Oi||t==="sp")&&Pl(t,(...r)=>e(...r),n)},IA=Er("bm"),kl=Er("m"),AA=Er("bu"),Yv=Er("u"),Gi=Er("bum"),Qv=Er("um"),RA=Er("sp"),SA=Er("rtg"),CA=Er("rtc");function Xv(t,e=at){Pl("ec",t,e)}const Jv="components";function Jo(t,e){return eE(Jv,t,!0,e)||t}const Zv=Symbol.for("v-ndc");function PA(t){return Ke(t)?eE(Jv,t,!1)||t:t||Zv}function eE(t,e,n=!0,r=!1){const s=lt||at;if(s){const i=s.type;{const a=Mf(i,!1);if(a&&(a===e||a===pn(e)||a===Il(pn(e))))return i}const o=Om(s[t]||i[t],e)||Om(s.appContext[t],e);return!o&&r?i:o}}function Om(t,e){return t&&(t[e]||t[pn(e)]||t[Il(pn(e))])}function aF(t,e,n,r){let s;const i=n,o=ue(t);if(o||Ke(t)){const a=o&&ar(t);let l=!1,u=!1;a&&(l=!hn(t),u=fr(t),t=Cl(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(l?u?Bc(Tt(t[f])):Tt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function cF(t,e,n={},r,s){if(lt.ce||lt.parent&&Wr(lt.parent)&&lt.parent.ce)return Ht(),rr(Dt,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ht();const o=i&&tE(i(n)),a=n.key||o&&o.key,l=rr(Dt,{key:(a&&!wn(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function tE(t){return t.some(e=>xs(e)?!(e.type===it||e.type===Dt&&!tE(e.children)):!0)?t:null}const Pf=t=>t?AE(t)?Dl(t):Pf(t.parent):null,No=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pf(t.parent),$root:t=>Pf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>rE(t),$forceUpdate:t=>t.f||(t.f=()=>{id(t.update)}),$nextTick:t=>t.n||(t.n=qn.bind(t.proxy)),$watch:t=>QA.bind(t)}),ju=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Ne(t,e),kA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ju(r,e))return o[e]=1,r[e];if(s!==Ve&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Ve&&Ne(n,e))return o[e]=4,n[e];kf&&(o[e]=0)}}const f=No[e];let d,p;if(f)return e==="$attrs"&&xt(t.attrs,"get",""),f(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&Ne(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ju(s,e)?(s[e]=n,!0):r!==Ve&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&Ne(t,o)||ju(e,o)||(a=i[0])&&Ne(a,o)||Ne(r,o)||Ne(No,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nm(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kf=!0;function OA(t){const e=rE(t),n=t.proxy,r=t.ctx;kf=!1,e.beforeCreate&&xm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:y,activated:w,deactivated:k,beforeDestroy:P,beforeUnmount:R,destroyed:_,unmounted:S,render:D,renderTracked:M,renderTriggered:T,errorCaptured:v,serverPrefetch:E,expose:I,inheritAttrs:N,components:O,directives:A,filters:ge}=e;if(u&&NA(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Le(se)&&(t.data=vr(se))}if(kf=!0,i)for(const se in i){const ne=i[se],Ue=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Mn,mn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Mn,rn=Fe({get:Ue,set:mn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Ge=>rn.value=Ge})}if(a)for(const se in a)nE(a[se],r,n,se);if(l){const se=pe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{Kr(ne,se[ne])})}f&&xm(f,t,"c");function Z(se,ne){ue(ne)?ne.forEach(Ue=>se(Ue.bind(n))):ne&&se(ne.bind(n))}if(Z(IA,d),Z(kl,p),Z(AA,g),Z(Yv,y),Z(Wv,w),Z(Kv,k),Z(Xv,v),Z(CA,M),Z(SA,T),Z(Gi,R),Z(Qv,S),Z(RA,E),ue(I))if(I.length){const se=t.exposed||(t.exposed={});I.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:Ue=>n[ne]=Ue})})}else t.exposed||(t.exposed={});D&&t.render===Mn&&(t.render=D),N!=null&&(t.inheritAttrs=N),O&&(t.components=O),A&&(t.directives=A),E&&od(t)}function NA(t,e,n=Mn){ue(t)&&(t=Of(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=mt(s.from||r,s.default,!0):i=mt(s.from||r):i=mt(s),Qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xm(t,e,n){bn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function nE(t,e,n,r){let s=r.includes(".")?_E(n,r):()=>n[r];if(Ke(t)){const i=e[t];pe(i)&&Vn(s,i)}else if(pe(t))Vn(s,t.bind(n));else if(Le(t))if(ue(t))t.forEach(i=>nE(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Vn(s,i,t)}}function rE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Wc(l,u,o,!0)),Wc(l,e,o)),Le(e)&&i.set(e,l),l}function Wc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wc(t,i,n,!0),s&&s.forEach(o=>Wc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xA={data:Dm,props:Lm,emits:Lm,methods:bo,computed:bo,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:bo,directives:bo,watch:LA,provide:Dm,inject:DA};function Dm(t,e){return e?t?function(){return gt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function DA(t,e){return bo(Of(t),Of(e))}function Of(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function bo(t,e){return t?gt(Object.create(null),t,e):e}function Lm(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:gt(Object.create(null),Nm(t),Nm(e??{})):e}function LA(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=Bt(t[r],e[r]);return n}function sE(){return{app:null,config:{isNativeTag:yI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let MA=0;function VA(t,e){return function(r,s=null){pe(r)||(r=gt({},r)),s!=null&&!Le(s)&&(s=null);const i=sE(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:MA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:E1,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...d)):pe(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,p){if(!l){const g=u._ceVNode||be(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,f):t(g,f,p),l=!0,u._container=f,f.__vue_app__=u,Dl(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(bn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Cs;Cs=u;try{return f()}finally{Cs=d}}};return u}}let Cs=null;function Kr(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function mt(t,e,n=!1){const r=at||lt;if(r||Cs){let s=Cs?Cs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Ta(){return!!(at||lt||Cs)}const iE={},oE=()=>Object.create(iE),aE=t=>Object.getPrototypeOf(t)===iE;function FA(t,e,n,r=!1){const s={},i=oE();t.propsDefaults=Object.create(null),cE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function UA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Ol(t.emitsOptions,p))continue;const g=e[p];if(l)if(Ne(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const y=pn(p);s[y]=Nf(l,a,y,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{cE(t,e,s,i)&&(u=!0);let f;for(const d in a)(!e||!Ne(e,d)&&((f=Hs(d))===d||!Ne(e,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Nf(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ne(e,d))&&(delete i[d],u=!0)}u&&tr(t.attrs,"set","")}function cE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(mi(l))continue;const u=e[l];let f;s&&Ne(s,f=pn(l))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Ol(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=a||Ve;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Nf(s,l,d,u[d],t,!Ne(u,d))}}return o}function Nf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ne(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Ia(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Hs(n))&&(r=!0))}return r}const jA=new WeakMap;function lE(t,e,n=!1){const r=n?jA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const f=d=>{l=!0;const[p,g]=lE(d,e,!0);gt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Le(t)&&r.set(t,di),di;if(ue(i))for(let f=0;f<i.length;f++){const d=pn(i[f]);Mm(d)&&(o[d]=Ve)}else if(i)for(const f in i){const d=pn(f);if(Mm(d)){const p=i[f],g=o[d]=ue(p)||pe(p)?{type:p}:gt({},p),y=g.type;let w=!1,k=!0;if(ue(y))for(let P=0;P<y.length;++P){const R=y[P],_=pe(R)&&R.name;if(_==="Boolean"){w=!0;break}else _==="String"&&(k=!1)}else w=pe(y)&&y.name==="Boolean";g[0]=w,g[1]=k,(w||Ne(g,"default"))&&a.push(d)}}const u=[o,a];return Le(t)&&r.set(t,u),u}function Mm(t){return t[0]!=="$"&&!mi(t)}const ad=t=>t[0]==="_"||t==="$stable",cd=t=>ue(t)?t.map(Jt):[Jt(t)],BA=(t,e,n)=>{if(e._n)return e;const r=Pn((...s)=>cd(e(...s)),n);return r._c=!1,r},uE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ad(s))continue;const i=t[s];if(pe(i))e[s]=BA(s,i,r);else if(i!=null){const o=cd(i);e[s]=()=>o}}},fE=(t,e)=>{const n=cd(e);t.slots.default=()=>n},hE=(t,e,n)=>{for(const r in e)(n||!ad(r))&&(t[r]=e[r])},$A=(t,e,n)=>{const r=t.slots=oE();if(t.vnode.shapeFlag&32){const s=e.__;s&&Tf(r,"__",s,!0);const i=e._;i?(hE(r,e,n),n&&Tf(r,"_",i,!0)):uE(e,r)}else e&&fE(t,e)},HA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:hE(s,e,n):(i=!e.$stable,uE(e,s)),o=e}else e&&(fE(t,e),o={default:1});if(i)for(const a in s)!ad(a)&&o[a]==null&&delete s[a]},wt=EE;function zA(t){return dE(t)}function qA(t){return dE(t,_A)}function dE(t,e){const n=Al();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Mn,insertStaticContent:y}=t,w=(C,x,V,H=null,U=null,z=null,Q=void 0,G=null,K=!!x.dynamicChildren)=>{if(C===x)return;C&&!yn(C,x)&&(H=j(C),Ge(C,U,z,!0),C=null),x.patchFlag===-2&&(K=!1,x.dynamicChildren=null);const{type:q,ref:le,shapeFlag:X}=x;switch(q){case Ps:k(C,x,V,H);break;case it:P(C,x,V,H);break;case xo:C==null&&R(x,V,H,Q);break;case Dt:O(C,x,V,H,U,z,Q,G,K);break;default:X&1?D(C,x,V,H,U,z,Q,G,K):X&6?A(C,x,V,H,U,z,Q,G,K):(X&64||X&128)&&q.process(C,x,V,H,U,z,Q,G,K,re)}le!=null&&U?yi(le,C&&C.ref,z,x||C,!x):le==null&&C&&C.ref!=null&&yi(C.ref,null,z,C,!0)},k=(C,x,V,H)=>{if(C==null)r(x.el=a(x.children),V,H);else{const U=x.el=C.el;x.children!==C.children&&u(U,x.children)}},P=(C,x,V,H)=>{C==null?r(x.el=l(x.children||""),V,H):x.el=C.el},R=(C,x,V,H)=>{[C.el,C.anchor]=y(C.children,x,V,H,C.el,C.anchor)},_=({el:C,anchor:x},V,H)=>{let U;for(;C&&C!==x;)U=p(C),r(C,V,H),C=U;r(x,V,H)},S=({el:C,anchor:x})=>{let V;for(;C&&C!==x;)V=p(C),s(C),C=V;s(x)},D=(C,x,V,H,U,z,Q,G,K)=>{x.type==="svg"?Q="svg":x.type==="math"&&(Q="mathml"),C==null?M(x,V,H,U,z,Q,G,K):E(C,x,U,z,Q,G,K)},M=(C,x,V,H,U,z,Q,G)=>{let K,q;const{props:le,shapeFlag:X,transition:ae,dirs:ie}=C;if(K=C.el=o(C.type,z,le&&le.is,le),X&8?f(K,C.children):X&16&&v(C.children,K,null,H,U,Bu(C,z),Q,G),ie&&kn(C,null,H,"created"),T(K,C,C.scopeId,Q,H),le){for(const Pe in le)Pe!=="value"&&!mi(Pe)&&i(K,Pe,null,le[Pe],z,H);"value"in le&&i(K,"value",null,le.value,z),(q=le.onVnodeBeforeMount)&&Wt(q,H,C)}ie&&kn(C,null,H,"beforeMount");const he=pE(U,ae);he&&ae.beforeEnter(K),r(K,x,V),((q=le&&le.onVnodeMounted)||he||ie)&&wt(()=>{q&&Wt(q,H,C),he&&ae.enter(K),ie&&kn(C,null,H,"mounted")},U)},T=(C,x,V,H,U)=>{if(V&&g(C,V),H)for(let z=0;z<H.length;z++)g(C,H[z]);if(U){let z=U.subTree;if(x===z||Gc(z.type)&&(z.ssContent===x||z.ssFallback===x)){const Q=U.vnode;T(C,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},v=(C,x,V,H,U,z,Q,G,K=0)=>{for(let q=K;q<C.length;q++){const le=C[q]=G?Dr(C[q]):Jt(C[q]);w(null,le,x,V,H,U,z,Q,G)}},E=(C,x,V,H,U,z,Q)=>{const G=x.el=C.el;let{patchFlag:K,dynamicChildren:q,dirs:le}=x;K|=C.patchFlag&16;const X=C.props||Ve,ae=x.props||Ve;let ie;if(V&&ys(V,!1),(ie=ae.onVnodeBeforeUpdate)&&Wt(ie,V,x,C),le&&kn(x,C,V,"beforeUpdate"),V&&ys(V,!0),(X.innerHTML&&ae.innerHTML==null||X.textContent&&ae.textContent==null)&&f(G,""),q?I(C.dynamicChildren,q,G,V,H,Bu(x,U),z):Q||ne(C,x,G,null,V,H,Bu(x,U),z,!1),K>0){if(K&16)N(G,X,ae,V,U);else if(K&2&&X.class!==ae.class&&i(G,"class",null,ae.class,U),K&4&&i(G,"style",X.style,ae.style,U),K&8){const he=x.dynamicProps;for(let Pe=0;Pe<he.length;Pe++){const Se=he[Pe],_t=X[Se],ht=ae[Se];(ht!==_t||Se==="value")&&i(G,Se,_t,ht,U,V)}}K&1&&C.children!==x.children&&f(G,x.children)}else!Q&&q==null&&N(G,X,ae,V,U);((ie=ae.onVnodeUpdated)||le)&&wt(()=>{ie&&Wt(ie,V,x,C),le&&kn(x,C,V,"updated")},H)},I=(C,x,V,H,U,z,Q)=>{for(let G=0;G<x.length;G++){const K=C[G],q=x[G],le=K.el&&(K.type===Dt||!yn(K,q)||K.shapeFlag&198)?d(K.el):V;w(K,q,le,null,H,U,z,Q,!0)}},N=(C,x,V,H,U)=>{if(x!==V){if(x!==Ve)for(const z in x)!mi(z)&&!(z in V)&&i(C,z,x[z],null,U,H);for(const z in V){if(mi(z))continue;const Q=V[z],G=x[z];Q!==G&&z!=="value"&&i(C,z,G,Q,U,H)}"value"in V&&i(C,"value",x.value,V.value,U)}},O=(C,x,V,H,U,z,Q,G,K)=>{const q=x.el=C?C.el:a(""),le=x.anchor=C?C.anchor:a("");let{patchFlag:X,dynamicChildren:ae,slotScopeIds:ie}=x;ie&&(G=G?G.concat(ie):ie),C==null?(r(q,V,H),r(le,V,H),v(x.children||[],V,le,U,z,Q,G,K)):X>0&&X&64&&ae&&C.dynamicChildren?(I(C.dynamicChildren,ae,V,U,z,Q,G),(x.key!=null||U&&x===U.subTree)&&mE(C,x,!0)):ne(C,x,V,le,U,z,Q,G,K)},A=(C,x,V,H,U,z,Q,G,K)=>{x.slotScopeIds=G,C==null?x.shapeFlag&512?U.ctx.activate(x,V,H,Q,K):ge(x,V,H,U,z,Q,K):ve(C,x,K)},ge=(C,x,V,H,U,z,Q)=>{const G=C.component=p1(C,H,U);if(ba(C)&&(G.ctx.renderer=re),m1(G,!1,Q),G.asyncDep){if(U&&U.registerDep(G,Z,Q),!C.el){const K=G.subTree=be(it);P(null,K,x,V)}}else Z(G,C,x,V,U,z,Q)},ve=(C,x,V)=>{const H=x.component=C.component;if(n1(C,x,V))if(H.asyncDep&&!H.asyncResolved){se(H,x,V);return}else H.next=x,H.update();else x.el=C.el,H.vnode=x},Z=(C,x,V,H,U,z,Q)=>{const G=()=>{if(C.isMounted){let{next:X,bu:ae,u:ie,parent:he,vnode:Pe}=C;{const St=gE(C);if(St){X&&(X.el=Pe.el,se(C,X,Q)),St.asyncDep.then(()=>{C.isUnmounted||G()});return}}let Se=X,_t;ys(C,!1),X?(X.el=Pe.el,se(C,X,Q)):X=Pe,ae&&gi(ae),(_t=X.props&&X.props.onVnodeBeforeUpdate)&&Wt(_t,he,X,Pe),ys(C,!0);const ht=$u(C),yt=C.subTree;C.subTree=ht,w(yt,ht,d(yt.el),j(yt),C,U,z),X.el=ht.el,Se===null&&Nl(C,ht.el),ie&&wt(ie,U),(_t=X.props&&X.props.onVnodeUpdated)&&wt(()=>Wt(_t,he,X,Pe),U)}else{let X;const{el:ae,props:ie}=x,{bm:he,m:Pe,parent:Se,root:_t,type:ht}=C,yt=Wr(x);if(ys(C,!1),he&&gi(he),!yt&&(X=ie&&ie.onVnodeBeforeMount)&&Wt(X,Se,x),ys(C,!0),ae&&De){const St=()=>{C.subTree=$u(C),De(ae,C.subTree,C,U,null)};yt&&ht.__asyncHydrate?ht.__asyncHydrate(ae,C,St):St()}else{_t.ce&&_t.ce._def.shadowRoot!==!1&&_t.ce._injectChildStyle(ht);const St=C.subTree=$u(C);w(null,St,V,H,C,U,z),x.el=St.el}if(Pe&&wt(Pe,U),!yt&&(X=ie&&ie.onVnodeMounted)){const St=x;wt(()=>Wt(X,Se,St),U)}(x.shapeFlag&256||Se&&Wr(Se.vnode)&&Se.vnode.shapeFlag&256)&&C.a&&wt(C.a,U),C.isMounted=!0,x=V=H=null}};C.scope.on();const K=C.effect=new yv(G);C.scope.off();const q=C.update=K.run.bind(K),le=C.job=K.runIfDirty.bind(K);le.i=C,le.id=C.uid,K.scheduler=()=>id(le),ys(C,!0),q()},se=(C,x,V)=>{x.component=C;const H=C.vnode.props;C.vnode=x,C.next=null,UA(C,x.props,H,V),HA(C,x.children,V),lr(),Sm(C),ur()},ne=(C,x,V,H,U,z,Q,G,K=!1)=>{const q=C&&C.children,le=C?C.shapeFlag:0,X=x.children,{patchFlag:ae,shapeFlag:ie}=x;if(ae>0){if(ae&128){mn(q,X,V,H,U,z,Q,G,K);return}else if(ae&256){Ue(q,X,V,H,U,z,Q,G,K);return}}ie&8?(le&16&&zt(q,U,z),X!==q&&f(V,X)):le&16?ie&16?mn(q,X,V,H,U,z,Q,G,K):zt(q,U,z,!0):(le&8&&f(V,""),ie&16&&v(X,V,H,U,z,Q,G,K))},Ue=(C,x,V,H,U,z,Q,G,K)=>{C=C||di,x=x||di;const q=C.length,le=x.length,X=Math.min(q,le);let ae;for(ae=0;ae<X;ae++){const ie=x[ae]=K?Dr(x[ae]):Jt(x[ae]);w(C[ae],ie,V,null,U,z,Q,G,K)}q>le?zt(C,U,z,!0,!1,X):v(x,V,H,U,z,Q,G,K,X)},mn=(C,x,V,H,U,z,Q,G,K)=>{let q=0;const le=x.length;let X=C.length-1,ae=le-1;for(;q<=X&&q<=ae;){const ie=C[q],he=x[q]=K?Dr(x[q]):Jt(x[q]);if(yn(ie,he))w(ie,he,V,null,U,z,Q,G,K);else break;q++}for(;q<=X&&q<=ae;){const ie=C[X],he=x[ae]=K?Dr(x[ae]):Jt(x[ae]);if(yn(ie,he))w(ie,he,V,null,U,z,Q,G,K);else break;X--,ae--}if(q>X){if(q<=ae){const ie=ae+1,he=ie<le?x[ie].el:H;for(;q<=ae;)w(null,x[q]=K?Dr(x[q]):Jt(x[q]),V,he,U,z,Q,G,K),q++}}else if(q>ae)for(;q<=X;)Ge(C[q],U,z,!0),q++;else{const ie=q,he=q,Pe=new Map;for(q=he;q<=ae;q++){const Ft=x[q]=K?Dr(x[q]):Jt(x[q]);Ft.key!=null&&Pe.set(Ft.key,q)}let Se,_t=0;const ht=ae-he+1;let yt=!1,St=0;const Ir=new Array(ht);for(q=0;q<ht;q++)Ir[q]=0;for(q=ie;q<=X;q++){const Ft=C[q];if(_t>=ht){Ge(Ft,U,z,!0);continue}let sn;if(Ft.key!=null)sn=Pe.get(Ft.key);else for(Se=he;Se<=ae;Se++)if(Ir[Se-he]===0&&yn(Ft,x[Se])){sn=Se;break}sn===void 0?Ge(Ft,U,z,!0):(Ir[sn-he]=q+1,sn>=St?St=sn:yt=!0,w(Ft,x[sn],V,null,U,z,Q,G,K),_t++)}const Ys=yt?WA(Ir):di;for(Se=Ys.length-1,q=ht-1;q>=0;q--){const Ft=he+q,sn=x[Ft],Qs=Ft+1<le?x[Ft+1].el:H;Ir[q]===0?w(null,sn,V,Qs,U,z,Q,G,K):yt&&(Se<0||q!==Ys[Se]?rn(sn,V,Qs,2):Se--)}}},rn=(C,x,V,H,U=null)=>{const{el:z,type:Q,transition:G,children:K,shapeFlag:q}=C;if(q&6){rn(C.component.subTree,x,V,H);return}if(q&128){C.suspense.move(x,V,H);return}if(q&64){Q.move(C,x,V,re);return}if(Q===Dt){r(z,x,V);for(let X=0;X<K.length;X++)rn(K[X],x,V,H);r(C.anchor,x,V);return}if(Q===xo){_(C,x,V);return}if(H!==2&&q&1&&G)if(H===0)G.beforeEnter(z),r(z,x,V),wt(()=>G.enter(z),U);else{const{leave:X,delayLeave:ae,afterLeave:ie}=G,he=()=>{C.ctx.isUnmounted?s(z):r(z,x,V)},Pe=()=>{X(z,()=>{he(),ie&&ie()})};ae?ae(z,he,Pe):Pe()}else r(z,x,V)},Ge=(C,x,V,H=!1,U=!1)=>{const{type:z,props:Q,ref:G,children:K,dynamicChildren:q,shapeFlag:le,patchFlag:X,dirs:ae,cacheIndex:ie}=C;if(X===-2&&(U=!1),G!=null&&(lr(),yi(G,null,V,C,!0),ur()),ie!=null&&(x.renderCache[ie]=void 0),le&256){x.ctx.deactivate(C);return}const he=le&1&&ae,Pe=!Wr(C);let Se;if(Pe&&(Se=Q&&Q.onVnodeBeforeUnmount)&&Wt(Se,x,C),le&6)Rn(C.component,V,H);else{if(le&128){C.suspense.unmount(V,H);return}he&&kn(C,null,x,"beforeUnmount"),le&64?C.type.remove(C,x,V,re,H):q&&!q.hasOnce&&(z!==Dt||X>0&&X&64)?zt(q,x,V,!1,!0):(z===Dt&&X&384||!U&&le&16)&&zt(K,x,V),H&&Ye(C)}(Pe&&(Se=Q&&Q.onVnodeUnmounted)||he)&&wt(()=>{Se&&Wt(Se,x,C),he&&kn(C,null,x,"unmounted")},V)},Ye=C=>{const{type:x,el:V,anchor:H,transition:U}=C;if(x===Dt){Tr(V,H);return}if(x===xo){S(C);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(C.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:G}=U,K=()=>Q(V,z);G?G(C.el,z,K):K()}else z()},Tr=(C,x)=>{let V;for(;C!==x;)V=p(C),s(C),C=V;s(x)},Rn=(C,x,V)=>{const{bum:H,scope:U,job:z,subTree:Q,um:G,m:K,a:q,parent:le,slots:{__:X}}=C;Kc(K),Kc(q),H&&gi(H),le&&ue(X)&&X.forEach(ae=>{le.renderCache[ae]=void 0}),U.stop(),z&&(z.flags|=8,Ge(Q,C,x,V)),G&&wt(G,x),wt(()=>{C.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},zt=(C,x,V,H=!1,U=!1,z=0)=>{for(let Q=z;Q<C.length;Q++)Ge(C[Q],x,V,H,U)},j=C=>{if(C.shapeFlag&6)return j(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const x=p(C.anchor||C.el),V=x&&x[fA];return V?p(V):x};let ee=!1;const J=(C,x,V)=>{C==null?x._vnode&&Ge(x._vnode,null,null,!0):w(x._vnode||null,C,x,null,null,null,V),x._vnode=C,ee||(ee=!0,Sm(),zc(),ee=!1)},re={p:w,um:Ge,m:rn,r:Ye,mt:ge,mc:v,pc:ne,pbc:I,n:j,o:t};let Ie,De;return e&&([Ie,De]=e(re)),{render:J,hydrate:Ie,createApp:VA(J,Ie)}}function Bu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ys({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mE(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Dr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&mE(o,a)),a.type===Ps&&(a.el=o.el),a.type===it&&!a.el&&(a.el=o.el)}}function WA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function gE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gE(e)}function Kc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const KA=Symbol.for("v-scx"),GA=()=>mt(KA);function YA(t,e){return ld(t,null,e)}function Vn(t,e,n){return ld(t,e,n)}function ld(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,a=gt({},n),l=e&&r||!e&&i!=="post";let u;if(Oi){if(i==="sync"){const g=GA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Mn,g.resume=Mn,g.pause=Mn,g}}const f=at;a.call=(g,y,w)=>bn(g,f,y,w);let d=!1;i==="post"?a.scheduler=g=>{wt(g,f&&f.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,y)=>{y?g():id(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=cA(t,e,a);return Oi&&(u?u.push(p):l&&p()),p}function QA(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?_E(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Ia(this),a=ld(s,i.bind(r),n);return o(),a}function _E(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const XA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${Hs(e)}Modifiers`];function JA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&XA(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ke(f)?f.trim():f)),o.number&&(s=n.map(Fc)));let a,l=r[a=Nu(e)]||r[a=Nu(pn(e))];!l&&i&&(l=r[a=Nu(Hs(e))]),l&&bn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(u,t,6,s)}}function yE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const f=yE(u,e,!0);f&&(a=!0,gt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Le(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):gt(o,i),Le(t)&&r.set(t,o),o)}function Ol(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Hs(e))||Ne(t,e))}function $u(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:f,props:d,data:p,setupState:g,ctx:y,inheritAttrs:w}=t,k=qc(t);let P,R;try{if(n.shapeFlag&4){const S=s||r,D=S;P=Jt(u.call(D,S,f,d,g,p,y)),R=a}else{const S=e;P=Jt(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),R=e.props?a:e1(a)}}catch(S){Do.length=0,Ki(S,t,1),P=be(it)}let _=P;if(R&&w!==!1){const S=Object.keys(R),{shapeFlag:D}=_;S.length&&D&7&&(i&&S.some(Wh)&&(R=t1(R,i)),_=hr(_,R,!1,!0))}return n.dirs&&(_=hr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Pi(_,n.transition),P=_,qc(k),P}function ZA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(xs(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const e1=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},t1=(t,e)=>{const n={};for(const r in t)(!Wh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function n1(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Vm(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Ol(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Vm(r,o,u):!0:!!o;return!1}function Vm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ol(n,i))return!0}return!1}function Nl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gc=t=>t.__isSuspense;let xf=0;const r1={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)s1(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}i1(t,e,n,r,s,o,a,l,u)}},hydrate:o1,normalize:a1},ud=r1;function Zo(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function s1(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:f}}=l,d=f("div"),p=t.suspense=vE(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Zo(t,"onPending"),Zo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),vi(p,t.ssFallback)):p.resolve(!1,!0)}function i1(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:f}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:y,pendingBranch:w,isInFallback:k,isHydrating:P}=d;if(w)d.pendingBranch=p,yn(p,w)?(l(w,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():k&&(P||(l(y,g,n,r,s,null,i,o,a),vi(d,g)))):(d.pendingId=xf++,P?(d.isHydrating=!1,d.activeBranch=w):u(w,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),k?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(y,g,n,r,s,null,i,o,a),vi(d,g))):y&&yn(p,y)?(l(y,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(y&&yn(p,y))l(y,p,n,r,s,d,i,o,a),vi(d,p);else if(Zo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=xf++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:R,pendingId:_}=d;R>0?setTimeout(()=>{d.pendingId===_&&d.fallback(g)},R):R===0&&d.fallback(g)}}function vE(t,e,n,r,s,i,o,a,l,u,f=!1){const{p:d,m:p,um:g,n:y,o:{parentNode:w,remove:k}}=u;let P;const R=c1(t);R&&e&&e.pendingBranch&&(P=e.pendingId,e.deps++);const _=t.props?dv(t.props.timeout):void 0,S=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:xf++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(M=!1,T=!1){const{vnode:v,activeBranch:E,pendingBranch:I,pendingId:N,effects:O,parentComponent:A,container:ge}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:M||(ve=E&&I.transition&&I.transition.mode==="out-in",ve&&(E.transition.afterLeave=()=>{N===D.pendingId&&(p(I,ge,i===S?y(E):i,0),Sf(O))}),E&&(w(E.el)===ge&&(i=y(E)),g(E,A,D,!0)),ve||p(I,ge,i,0)),vi(D,I),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...O),se=!0;break}Z=Z.parent}!se&&!ve&&Sf(O),D.effects=[],R&&e&&e.pendingBranch&&P===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),Zo(v,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:T,activeBranch:v,parentComponent:E,container:I,namespace:N}=D;Zo(T,"onFallback");const O=y(v),A=()=>{D.isInFallback&&(d(null,M,I,O,E,null,N,a,l),vi(D,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(v.transition.afterLeave=A),D.isInFallback=!0,g(v,E,null,!0),ge||A()},move(M,T,v){D.activeBranch&&p(D.activeBranch,M,T,v),D.container=M},next(){return D.activeBranch&&y(D.activeBranch)},registerDep(M,T,v){const E=!!D.pendingBranch;E&&D.deps++;const I=M.vnode.el;M.asyncDep.catch(N=>{Ki(N,M,0)}).then(N=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:O}=M;Lf(M,N),I&&(O.el=I);const A=!I&&M.subTree.el;T(M,O,w(I||M.subTree.el),I?null:y(M.subTree),D,o,v),A&&k(A),Nl(M,O.el),E&&--D.deps===0&&D.resolve()})},unmount(M,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,T),D.pendingBranch&&g(D.pendingBranch,n,M,T)}};return D}function o1(t,e,n,r,s,i,o,a,l){const u=e.suspense=vE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function a1(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Fm(r?n.default:n),t.ssFallback=r?Fm(n.fallback):be(it)}function Fm(t){let e;if(pe(t)){const n=ki&&t._c;n&&(t._d=!1,Ht()),t=t(),n&&(t._d=!0,e=Yt,wE())}return ue(t)&&(t=ZA(t)),t=Jt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function EE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Sf(t)}function vi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Nl(r,s))}function c1(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Dt=Symbol.for("v-fgt"),Ps=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),Do=[];let Yt=null;function Ht(t=!1){Do.push(Yt=t?null:[])}function wE(){Do.pop(),Yt=Do[Do.length-1]||null}let ki=1;function Um(t,e=!1){ki+=t,t<0&&Yt&&e&&(Yt.hasOnce=!0)}function bE(t){return t.dynamicChildren=ki>0?Yt||di:null,wE(),ki>0&&Yt&&Yt.push(t),t}function ea(t,e,n,r,s,i){return bE(We(t,e,n,r,s,i,!0))}function rr(t,e,n,r,s){return bE(be(t,e,n,r,s,!0))}function xs(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const TE=({key:t})=>t??null,bc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||Qe(t)||pe(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function We(t,e=null,n=null,r=0,s=null,i=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&TE(e),ref:e&&bc(e),scopeId:Uv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return a?(fd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),ki>0&&!o&&Yt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Yt.push(l),l}const be=l1;function l1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zv)&&(t=it),xs(t)){const a=hr(t,e,!0);return n&&fd(a,n),ki>0&&!i&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag=-2,a}if(v1(t)&&(t=t.__vccOpts),e){e=u1(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=ya(a)),Le(l)&&(rd(l)&&!ue(l)&&(l=gt({},l)),e.style=Rl(l))}const o=Ke(t)?1:Gc(t)?128:jv(t)?64:Le(t)?4:pe(t)?2:0;return We(t,e,n,r,s,o,i,!0)}function u1(t){return t?rd(t)||aE(t)?gt({},t):t:null}function hr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?IE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&TE(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(bc(e)):[i,bc(e)]:bc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Pi(f,l.clone(f)),f}function ln(t=" ",e=0){return be(Ps,null,t,e)}function lF(t,e){const n=be(xo,null,t);return n.staticCount=e,n}function f1(t="",e=!1){return e?(Ht(),rr(it,null,t)):be(it,null,t)}function Jt(t){return t==null||typeof t=="boolean"?be(it):ue(t)?be(Dt,null,t.slice()):xs(t)?Dr(t):be(Ps,null,String(t))}function Dr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function fd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!aE(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[ln(e)]):n=8);t.children=e,t.shapeFlag|=n}function IE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ya([e.class,r.class]));else if(s==="style")e.style=Rl([e.style,r.style]);else if(_a(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){bn(t,e,7,[n,r])}const h1=sE();let d1=0;function p1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||h1,i={uid:d1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _v(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lE(r,s),emitsOptions:yE(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=JA.bind(null,i),t.ce&&t.ce(i),i}let at=null;const xl=()=>at||lt;let Yc,Df;{const t=Al(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Yc=e("__VUE_INSTANCE_SETTERS__",n=>at=n),Df=e("__VUE_SSR_SETTERS__",n=>Oi=n)}const Ia=t=>{const e=at;return Yc(t),t.scope.on(),()=>{t.scope.off(),Yc(e)}},jm=()=>{at&&at.scope.off(),Yc(null)};function AE(t){return t.vnode.shapeFlag&4}let Oi=!1;function m1(t,e=!1,n=!1){e&&Df(e);const{props:r,children:s}=t.vnode,i=AE(t);FA(t,r,i,e),$A(t,s,n||e);const o=i?g1(t,e):void 0;return e&&Df(!1),o}function g1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kA);const{setup:r}=n;if(r){lr();const s=t.setupContext=r.length>1?y1(t):null,i=Ia(t),o=wa(r,t,0,[t.props,s]),a=uv(o);if(ur(),i(),(a||t.sp)&&!Wr(t)&&od(t),a){if(o.then(jm,jm),e)return o.then(l=>{Lf(t,l)}).catch(l=>{Ki(l,t,0)});t.asyncDep=o}else Lf(t,o)}else RE(t)}function Lf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Dv(e)),RE(t)}function RE(t,e,n){const r=t.type;t.render||(t.render=r.render||Mn);{const s=Ia(t);lr();try{OA(t)}finally{ur(),s()}}}const _1={get(t,e){return xt(t,"get",""),t[e]}};function y1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_1),slots:t.slots,emit:t.emit,expose:e}}function Dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dv(sd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in No)return No[n](t)},has(e,n){return n in e||n in No}})):t.proxy}function Mf(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function v1(t){return pe(t)&&"__vccOpts"in t}const Fe=(t,e)=>oA(t,e,Oi);function ut(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ue(e)?xs(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xs(n)&&(n=[n]),be(t,e,n))}const E1="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vf;const Bm=typeof window<"u"&&window.trustedTypes;if(Bm)try{Vf=Bm.createPolicy("vue",{createHTML:t=>t})}catch{}const SE=Vf?t=>Vf.createHTML(t):t=>t,w1="http://www.w3.org/2000/svg",b1="http://www.w3.org/1998/Math/MathML",er=typeof document<"u"?document:null,$m=er&&er.createElement("template"),T1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?er.createElementNS(w1,t):e==="mathml"?er.createElementNS(b1,t):n?er.createElement(t,{is:n}):er.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$m.innerHTML=SE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=$m.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cr="transition",_o="animation",ta=Symbol("_vtc"),CE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},I1=gt({},Bv,CE),A1=t=>(t.displayName="Transition",t.props=I1,t),R1=A1((t,{slots:e})=>ut(pA,S1(t),e)),vs=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Hm=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function S1(t){const e={};for(const O in t)O in CE||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,y=C1(s),w=y&&y[0],k=y&&y[1],{onBeforeEnter:P,onEnter:R,onEnterCancelled:_,onLeave:S,onLeaveCancelled:D,onBeforeAppear:M=P,onAppear:T=R,onAppearCancelled:v=_}=e,E=(O,A,ge,ve)=>{O._enterCancelled=ve,Es(O,A?f:a),Es(O,A?u:o),ge&&ge()},I=(O,A)=>{O._isLeaving=!1,Es(O,d),Es(O,g),Es(O,p),A&&A()},N=O=>(A,ge)=>{const ve=O?T:R,Z=()=>E(A,O,ge);vs(ve,[A,Z]),zm(()=>{Es(A,O?l:i),Jn(A,O?f:a),Hm(ve)||qm(A,r,w,Z)})};return gt(e,{onBeforeEnter(O){vs(P,[O]),Jn(O,i),Jn(O,o)},onBeforeAppear(O){vs(M,[O]),Jn(O,l),Jn(O,u)},onEnter:N(!1),onAppear:N(!0),onLeave(O,A){O._isLeaving=!0;const ge=()=>I(O,A);Jn(O,d),O._enterCancelled?(Jn(O,p),Gm()):(Gm(),Jn(O,p)),zm(()=>{O._isLeaving&&(Es(O,d),Jn(O,g),Hm(S)||qm(O,r,k,ge))}),vs(S,[O,ge])},onEnterCancelled(O){E(O,!1,void 0,!0),vs(_,[O])},onAppearCancelled(O){E(O,!0,void 0,!0),vs(v,[O])},onLeaveCancelled(O){I(O),vs(D,[O])}})}function C1(t){if(t==null)return null;if(Le(t))return[Hu(t.enter),Hu(t.leave)];{const e=Hu(t);return[e,e]}}function Hu(t){return dv(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ta]||(t[ta]=new Set)).add(e)}function Es(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ta];n&&(n.delete(e),n.size||(t[ta]=void 0))}function zm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let P1=0;function qm(t,e,n,r){const s=t._endId=++P1,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=k1(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},a+1),t.addEventListener(u,p)}function k1(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${Cr}Delay`),i=r(`${Cr}Duration`),o=Wm(s,i),a=r(`${_o}Delay`),l=r(`${_o}Duration`),u=Wm(a,l);let f=null,d=0,p=0;e===Cr?o>0&&(f=Cr,d=o,p=i.length):e===_o?u>0&&(f=_o,d=u,p=l.length):(d=Math.max(o,u),f=d>0?o>u?Cr:_o:null,p=f?f===Cr?i.length:l.length:0);const g=f===Cr&&/\b(transform|all)(,|$)/.test(r(`${Cr}Property`).toString());return{type:f,timeout:d,propCount:p,hasTransform:g}}function Wm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Km(n)+Km(t[r])))}function Km(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gm(){return document.body.offsetHeight}function O1(t,e,n){const r=t[ta];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ym=Symbol("_vod"),N1=Symbol("_vsh"),x1=Symbol(""),D1=/(^|;)\s*display\s*:/;function L1(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Tc(r,a,"")}else for(const o in e)n[o]==null&&Tc(r,o,"");for(const o in n)o==="display"&&(i=!0),Tc(r,o,n[o])}else if(s){if(e!==n){const o=r[x1];o&&(n+=";"+o),r.cssText=n,i=D1.test(n)}}else e&&t.removeAttribute("style");Ym in t&&(t[Ym]=i?r.display:"",t[N1]&&(r.display="none"))}const Qm=/\s*!important$/;function Tc(t,e,n){if(ue(n))n.forEach(r=>Tc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=M1(t,e);Qm.test(n)?t.setProperty(Hs(r),n.replace(Qm,""),"important"):t[r]=n}}const Xm=["Webkit","Moz","ms"],zu={};function M1(t,e){const n=zu[e];if(n)return n;let r=pn(e);if(r!=="filter"&&r in t)return zu[e]=r;r=Il(r);for(let s=0;s<Xm.length;s++){const i=Xm[s]+r;if(i in t)return zu[e]=i}return e}const Jm="http://www.w3.org/1999/xlink";function Zm(t,e,n,r,s,i=PI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Jm,e.slice(6,e.length)):t.setAttributeNS(Jm,e,n):n==null||i&&!pv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wn(n)?String(n):n)}function eg(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?SE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=pv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function V1(t,e,n,r){t.removeEventListener(e,n,r)}const tg=Symbol("_vei");function F1(t,e,n,r,s=null){const i=t[tg]||(t[tg]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=U1(e);if(r){const u=i[e]=$1(r,s);Vr(t,a,u,l)}else o&&(V1(t,a,o,l),i[e]=void 0)}}const ng=/(?:Once|Passive|Capture)$/;function U1(t){let e;if(ng.test(t)){e={};let r;for(;r=t.match(ng);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hs(t.slice(2)),e]}let qu=0;const j1=Promise.resolve(),B1=()=>qu||(j1.then(()=>qu=0),qu=Date.now());function $1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bn(H1(r,n.value),e,5,[r])};return n.value=t,n.attached=B1(),n}function H1(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const rg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,z1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?O1(t,r,o):e==="style"?L1(t,n,r):_a(e)?Wh(e)||F1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):q1(t,e,r,o))?(eg(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?eg(t,pn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zm(t,e,r,o))};function q1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rg(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rg(e)&&Ke(n)?!1:e in t}const Ni=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>gi(e,n):e};function W1(t){t.target.composing=!0}function sg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cr=Symbol("_assign"),uF={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cr]=Ni(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Fc(a)),t[cr](a)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",W1),Vr(t,"compositionend",sg),Vr(t,"change",sg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[cr]=Ni(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Fc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},fF={deep:!0,created(t,e,n){t[cr]=Ni(n),Vr(t,"change",()=>{const r=t._modelValue,s=na(t),i=t.checked,o=t[cr];if(ue(r)){const a=Yh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(qi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(PE(t,i))})},mounted:ig,beforeUpdate(t,e,n){t[cr]=Ni(n),ig(t,e,n)}};function ig(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=Yh(e,r.props.value)>-1;else if(qi(e))s=e.has(r.props.value);else{if(e===n)return;s=va(e,PE(t,!0))}t.checked!==s&&(t.checked=s)}const hF={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=qi(e);Vr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fc(na(o)):na(o));t[cr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,qn(()=>{t._assigning=!1})}),t[cr]=Ni(r)},mounted(t,{value:e}){og(t,e)},beforeUpdate(t,e,n){t[cr]=Ni(n)},updated(t,{value:e}){t._assigning||og(t,e)}};function og(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!qi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=na(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Yh(e,a)>-1}else o.selected=e.has(a);else if(va(na(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function na(t){return"_value"in t?t._value:t.value}function PE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const K1=["ctrl","shift","alt","meta"],G1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>K1.some(n=>t[`${n}Key`]&&!e.includes(n))},dF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=G1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},kE=gt({patchProp:z1},T1);let Lo,ag=!1;function Y1(){return Lo||(Lo=zA(kE))}function Q1(){return Lo=ag?Lo:qA(kE),ag=!0,Lo}const X1=(...t)=>{const e=Y1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=NE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,OE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},J1=(...t)=>{const e=Q1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=NE(r);if(s)return n(s,!0,OE(s))},e};function OE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function NE(t){return Ke(t)?document.querySelector(t):t}const Z1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,eR=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,tR=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function nR(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){rR(t);return}return e}function rR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ra(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!tR.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Z1.test(t)||eR.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,nR)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const sR=/#/g,iR=/&/g,oR=/\//g,aR=/=/g,hd=/\+/g,cR=/%5e/gi,lR=/%60/gi,uR=/%7c/gi,fR=/%20/gi;function hR(t){return encodeURI(""+t).replace(uR,"|")}function Ff(t){return hR(typeof t=="string"?t:JSON.stringify(t)).replace(hd,"%2B").replace(fR,"+").replace(sR,"%23").replace(iR,"%26").replace(lR,"`").replace(cR,"^").replace(oR,"%2F")}function Wu(t){return Ff(t).replace(aR,"%3D")}function Qc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function dR(t){return Qc(t.replace(hd," "))}function pR(t){return Qc(t.replace(hd," "))}function dd(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=dR(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=pR(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function mR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Wu(t)}=${Ff(n)}`).join("&"):`${Wu(t)}=${Ff(e)}`:Wu(t)}function gR(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>mR(e,t[e])).filter(Boolean).join("&")}const _R=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,yR=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,vR=/^([/\\]\s*){2,}[^/\\]/,ER=/^[\s\0]*(blob|data|javascript|vbscript):$/i,wR=/\/$|\/\?|\/#/,bR=/^\.?\//;function wr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?_R.test(t):yR.test(t)||(e.acceptRelative?vR.test(t):!1)}function TR(t){return!!t&&ER.test(t)}function Uf(t="",e){return e?wR.test(t):t.endsWith("/")}function xi(t="",e){if(!e)return(Uf(t)?t.slice(0,-1):t)||"/";if(!Uf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function xE(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Uf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function IR(t,e){if(LE(e)||wr(t))return t;const n=xi(e);return t.startsWith(n)?t:Ll(n,t)}function cg(t,e){if(LE(e))return t;const n=xi(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function DE(t,e){const n=FE(t),r={...dd(n.search),...e};return n.search=gR(r),SR(n)}function LE(t){return!t||t==="/"}function AR(t){return t&&t!=="/"}function Ll(t,...e){let n=t||"";for(const r of e.filter(s=>AR(s)))if(n){const s=r.replace(bR,"");n=xE(n)+s}else n=r;return n}function ME(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const f of n)if(!(!f||f==="/")){for(const[d,p]of f.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&wr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function RR(t,e){return Qc(xi(t))===Qc(xi(e))}const VE=Symbol.for("ufo:protocolRelative");function FE(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!wr(t,{acceptRelative:!0}))return lg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:f}=lg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:f,[VE]:!r}}function lg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function SR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[VE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class CR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function PR(t){var l,u,f,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((f=t.request)==null?void 0:f.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new CR(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,y]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[y]}});return a}const kR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ug(t="GET"){return kR.has(t.toUpperCase())}function OR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const NR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),xR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function DR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return xR.test(e)?"json":NR.has(e)||e.startsWith("text/")?"text":"blob"}function LR(t,e,n,r){const s=MR((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function MR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ic(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const VR=new Set([408,409,425,429,500,502,503,504]),FR=new Set([101,204,205,304]);function UE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let f;typeof a.options.retry=="number"?f=a.options.retry:f=ug(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):VR.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:f-1})}}const u=PR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const f={request:l,options:LR(l,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await ic(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=IR(f.request,f.options.baseURL)),f.options.query&&(f.request=DE(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&ug(f.options.method)&&(OR(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let d;if(!f.options.signal&&f.options.timeout){const g=new r;d=setTimeout(()=>{const y=new Error("[TimeoutError]: The operation was aborted due to timeout");y.name="TimeoutError",y.code=23,g.abort(y)},f.options.timeout),f.options.signal=g.signal}try{f.response=await e(f.request,f.options)}catch(g){return f.error=g,f.options.onRequestError&&await ic(f,f.options.onRequestError),await s(f)}finally{d&&clearTimeout(d)}if((f.response.body||f.response._bodyInit)&&!FR.has(f.response.status)&&f.options.method!=="HEAD"){const g=(f.options.parseResponse?"json":f.options.responseType)||DR(f.response.headers.get("content-type")||"");switch(g){case"json":{const y=await f.response.text(),w=f.options.parseResponse||ra;f.response._data=w(y);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[g]()}}return f.options.onResponse&&await ic(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await ic(f,f.options.onResponseError),await s(f)):f.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>UE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Xc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),UR=Xc.fetch?(...t)=>Xc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),jR=Xc.Headers,BR=Xc.AbortController,$R=UE({fetch:UR,Headers:jR,AbortController:BR}),HR=$R,zR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},pd=()=>zR().app,qR=()=>pd().baseURL,WR=()=>pd().buildAssetsDir,md=(...t)=>ME(gd(),WR(),...t),gd=(...t)=>{const e=pd(),n=e.cdnURL||e.baseURL;return t.length?ME(n,...t):n};globalThis.__buildAssetsURL=md,globalThis.__publicAssetsURL=gd;globalThis.$fetch||(globalThis.$fetch=HR.create({baseURL:qR()}));"global"in globalThis||(globalThis.global=globalThis);function jf(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?jf(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const KR={run:t=>t()},GR=()=>KR,jE=typeof console.createTask<"u"?console.createTask:GR;function YR(t,e){const n=e.shift(),r=jE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function QR(t,e){const n=e.shift(),r=jE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Ku(t,e){for(const n of[...t])n(e)}class XR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=jf(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=jf(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(YR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(QR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Ku(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Ku(this._after,s)}):(this._after&&s&&Ku(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function BE(){return new XR}function JR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Bf.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{Bf.delete(u)}}}}function ZR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=JR({...t,...r})),e[n]}}}const Jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},fg="__unctx__",eS=Jc[fg]||(Jc[fg]=ZR()),tS=(t,e={})=>eS.get(t,e),hg="__unctx_async_handlers__",Bf=Jc[hg]||(Jc[hg]=new Set);function Ei(t){const e=[];for(const s of Bf){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const dg={name:"page",mode:"out-in"},nS=!1,rS=!1,sS={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},iS=null,oS="#__nuxt",$E="nuxt-app",pg=36e5,aS="vite:preloadError";function HE(t=$E){return tS(t,{asyncContext:!1})}const cS="__nuxt_plugin";function lS(t){var s;let e=0;const n={_id:t.id||$E||"nuxt-app",_scope:Xh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.7"},get vue(){return n.vueApp.version}},payload:Nn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Nn({}),state:vr({}),once:new Set,_errors:Nn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!Ea()?n._scope.run(()=>mg(n,i)):mg(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Nn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=BE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;oc(n,a,o),oc(n.vueApp.config.globalProperties,a,o)},oc(n.vueApp,"$nuxt",n),oc(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(aS,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Be);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function uS(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function fS(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function hS(t,e){const n=new Set,r=[],s=[],i=[];let o=0;async function a(l){var f;const u=((f=l.dependsOn)==null?void 0:f.filter(d=>e.some(p=>p._name===d)&&!n.has(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=fS(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)uS(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function tn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[cS]:!0,_name:e})}function mg(t,e,n){const r=()=>e();return HE(t._id).set(t),t.vueApp.runWithContext(r)}function zE(t){var n;let e;return Ta()&&(e=(n=xl())==null?void 0:n.appContext.app.$nuxt),e||(e=HE(t).tryUse()),e||null}function Be(t){const e=zE(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function zs(t){return Be().$config}function oc(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function dS(t,e){return{ctx:{table:t},matchAll:n=>WE(n,t)}}function qE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,qE(s)])):new Map(Object.entries(t[n]));return e}function pS(t){return dS(qE(t))}function WE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of gg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of gg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...WE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function gg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Gu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function $f(t,e,n=".",r){if(!Gu(e))return $f(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Gu(o)&&Gu(s[i])?s[i]=$f(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function mS(t){return(...e)=>e.reduce((n,r)=>$f(n,r,"",t),{})}const KE=mS();function gS(t,e){try{return e in t}catch{return!1}}class Hf extends Error{constructor(n,r={}){super(n,r);on(this,"statusCode",500);on(this,"fatal",!1);on(this,"unhandled",!1);on(this,"statusMessage");on(this,"data");on(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:zf(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=GE(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}on(Hf,"__h3_error__",!0);function _S(t){if(typeof t=="string")return new Hf(t);if(yS(t))return t;const e=new Hf(t.message??t.statusMessage??"",{cause:t.cause||t});if(gS(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=zf(t.statusCode,e.statusCode):t.status&&(e.statusCode=zf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;GE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function yS(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const vS=/[^\u0009\u0020-\u007E]/g;function GE(t=""){return t.replace(vS,"")}function zf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const YE=Symbol("layout-meta"),Ds=Symbol("route"),At=()=>{var t;return(t=Be())==null?void 0:t.$router},Ml=()=>Ta()?mt(Ds,Be()._route):Be()._route;function pF(t){return t}const ES=()=>{try{if(Be()._processingMiddleware)return!0}catch{return!1}return!1},wS=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?qf(t):At().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,f),Promise.resolve()}const r=wr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&TR(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=ES();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:f}=FE(t);return{path:l,...u&&{query:dd(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=At(),a=Be();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function qf(t){return DE(t.path||"",t.query||{})+(t.hash||"")}const QE="__nuxt_error",Vl=()=>sA(Be().payload,"error"),Ts=t=>{const e=ks(t);try{const n=Be(),r=Vl();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},XE=async(t={})=>{const e=Be(),n=Vl();e.callHook("app:error:cleared",t),t.redirect&&await At().replace(t.redirect),n.value=iS},JE=t=>!!t&&typeof t=="object"&&QE in t,ks=t=>{const e=_S(t);return Object.defineProperty(e,QE,{value:!0,configurable:!1,writable:!1}),e};function _g(t){const e=TS(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const bS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function TS(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=bS.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const IS=-1,AS=-2,RS=-3,SS=-4,CS=-5,PS=-6;function kS(t,e){return OS(JSON.parse(t),e)}function OS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===IS)return;if(i===RS)return NaN;if(i===SS)return 1/0;if(i===CS)return-1/0;if(i===PS)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let g=1;g<a.length;g+=1)f.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],y=a[1],w=_g(y),k=new g(w);r[i]=k;break}case"ArrayBuffer":{const g=a[1],y=_g(g);r[i]=y;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const f=a[u];f!==AS&&(l[u]=s(f))}}else{const l={};r[i]=l;for(const u in a){const f=a[u];l[u]=s(f)}}return r[i]}return s(0)}const NS=new Set(["link","style","script","noscript"]),xS=new Set(["title","titleTemplate","script","style","noscript"]),yg=new Set(["base","meta","link","style","script","noscript"]),DS=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),LS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),MS=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),VS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),FS=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const US=["name","property","http-equiv"],jS=new Set(["viewport","description","keywords","robots"]);function ZE(t){const e=t.split(":");return e.length?FS.has(e[1]):!1}function Wf(t){const{props:e,tag:n}=t;if(LS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of US)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=jS.has(s),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(xS.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function vg(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Zc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Zc(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=Zc(s[o],e,o);return i}return s}function BS(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function ew(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=BS(n,r);return}if(MS.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function $S(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=ew({tag:t,props:{}},n);return r.key&&NS.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function HS(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Zc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push($S(s,o))}),r.flat()}const Kf=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Eg={base:-10,title:10},zS={critical:-8,high:-1,low:2},wg={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},qS=/@import/,yo=t=>t===""||t===!0;function WS(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=zS[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:wg;if(e.tag in Eg)n=Eg[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=wg.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?yo(e.props.async)?n=s.script.async:e.props.src&&!yo(e.props.defer)&&!yo(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:yo(e.props.defer)&&e.props.src&&!yo(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&qS.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function bg(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function KS(t={}){var a;const e=BE();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:l=>bg(o,l),push(l,u){const f={...u||{}};delete f.head;const d=f._index??o._entryCount++,p={_i:d,input:l,options:f},g={_poll(y=!1){o.dirty=!0,!y&&i.add(d),e.callHook("entries:updated",o)},dispose(){r.delete(d)&&o.invalidate()},patch(y){(!f.mode||f.mode==="server"&&n||f.mode==="client"&&!n)&&(p.input=y,r.set(d,p),g._poll())}};return g.patch(l),g},async resolveTags(){var g;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.size;){const y=i.values().next().value;i.delete(y);const w=r.get(y);if(w){const k={tags:HS(w.input,t.propResolvers||[]).map(P=>Object.assign(P,w.options)),entry:w};await e.callHook("entries:normalize",k),w._tags=k.tags.map((P,R)=>(P._w=WS(o,P),P._p=(w._i<<10)+R,P._d=Wf(P),P))}}let u=!1;l.entries.flatMap(y=>(y._tags||[]).map(w=>({...w,props:{...w.props}}))).sort(Kf).reduce((y,w)=>{const k=String(w._d||w._p);if(!y.has(k))return y.set(k,w);const P=y.get(k);if(((w==null?void 0:w.tagDuplicateStrategy)||(VS.has(w.tag)?"merge":null)||(w.key&&w.key===P.key?"merge":null))==="merge"){const _={...P.props};Object.entries(w.props).forEach(([S,D])=>_[S]=S==="style"?new Map([...P.props.style||new Map,...D]):S==="class"?new Set([...P.props.class||new Set,...D]):D),y.set(k,{...w,props:_})}else w._p>>10===P._p>>10&&w.tag==="meta"&&ZE(k)?(y.set(k,Object.assign([...Array.isArray(P)?P:[P],w],w)),u=!0):(w._w===P._w?w._p>P._p:(w==null?void 0:w._w)<(P==null?void 0:P._w))&&y.set(k,w);return y},l.tagMap);const f=l.tagMap.get("title"),d=l.tagMap.get("titleTemplate");if(o._title=f==null?void 0:f.textContent,d){const y=d==null?void 0:d.textContent;if(o._titleTemplate=y,y){let w=typeof y=="function"?y(f==null?void 0:f.textContent):y;typeof w=="string"&&!o.plugins.has("template-params")&&(w=w.replace("%s",(f==null?void 0:f.textContent)||"")),f?w===null?l.tagMap.delete("title"):l.tagMap.set("title",{...f,textContent:w}):(d.tag="title",d.textContent=w)}}l.tags=Array.from(l.tagMap.values()),u&&(l.tags=l.tags.flat().sort(Kf)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const p=[];for(const y of l.tags){const{innerHTML:w,tag:k,props:P}=y;if(DS.has(k)&&!(Object.keys(P).length===0&&!y.innerHTML&&!y.textContent)&&!(k==="meta"&&!P.content&&!P["http-equiv"]&&!P.charset)){if(k==="script"&&w){if((g=P.type)!=null&&g.endsWith("json")){const R=typeof w=="string"?w:JSON.stringify(w);y.innerHTML=R.replace(/</g,"\\u003C")}else typeof w=="string"&&(y.innerHTML=w.replace(new RegExp(`</${k}`,"g"),`<\\/${k}`));y._d=Wf(y)}p.push(y)}}return p},invalidate(){for(const l of r.values())i.add(l._i);o.dirty=!0,e.callHook("entries:updated",o)}};return((t==null?void 0:t.plugins)||[]).forEach(l=>bg(o,l)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(l=>l&&o.push(l)),o}const Lr="%separator",GS=new RegExp(`${Lr}(?:\\s*${Lr})*`,"g");function YS(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function ac(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Lr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Lr||!i.includes(a))return a;const l=YS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Lr)&&(t=t.slice(0,-Lr.length)),t.startsWith(Lr)&&(t=t.slice(Lr.length)),t=t.replace(GS,n||"").trim()),t}const Tg=t=>t.includes(":key")?t:t.split(":").join(":key:"),QS={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Tg(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Tg(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Kf))}}},XS={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Gf(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Gf(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await Gf(t[r]);return n}return t}const JS={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Gf(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},ZS={meta:"content",link:"href",htmlAttrs:"lang"},eC=["innerHTML","textContent"],tC=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=ac(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=ZS[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=ac(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of eC)typeof o[l]=="string"&&(o[l]=ac(o[l],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=ac(n.textContent,t._templateParams,t._separator))}}}),nC=(t,e)=>Qe(e)?XI(e):e,_d="usehead";function rC(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(_d,t)}}.install}function sC(){if(Ta()){const t=mt(_d);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function iC(t,e={}){const n=e.head||sC();return n.ssr?n.push(t||{},e):oC(n,t,e)}function oC(t,e,n={}){const r=Qt(!1);let s;return YA(()=>{const o=r.value?{}:Zc(e,nC);s?s.patch(o):s=t.push(o,n)}),xl()&&(Gi(()=>{s.dispose()}),Kv(()=>{r.value=!0}),Wv(()=>{r.value=!1})),s}function aC(t){var n;const e=t||zE();return((n=e==null?void 0:e.ssrContext)==null?void 0:n.head)||(e==null?void 0:e.runWithContext(()=>{if(Ta())return mt(_d)}))}function Ig(t,e={}){const n=aC(e.nuxt);if(n)return iC(t,{head:n,...e})}const cC="modulepreload",lC=function(t,e){return new URL(t,e).href},Ag={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(f){return Promise.all(f.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(f=>{if(f=lC(f,r),f in Ag)return;Ag[f]=!0;const d=f.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let w=a.length-1;w>=0;w--){const k=a[w];if(k.href===f&&(!d||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":cC,d||(y.as="script"),y.crossOrigin="",y.href=f,u&&y.setAttribute("nonce",u),document.head.appendChild(y),d)return new Promise((w,k)=>{y.addEventListener("load",w),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Ic,Ac;function uC(){return Ic=$fetch(md(`builds/meta/${zs().app.buildId}.json`),{responseType:"json"}),Ic.then(t=>{Ac=pS(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Ic}function Fl(){return Ic||uC()}async function yd(t){const e=typeof t=="string"?t:t.path;if(await Fl(),!Ac)return console.error("[nuxt] Error creating app manifest matcher.",Ac),{};try{return KE({},...Ac.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Rg(t,e={}){if(!await nw(t))return null;const r=await hC(t,e);return await tw(r)||null}const fC="_payload.json";async function hC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||wr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=zs(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await nw(t)?i:r.app.baseURL;return Ll(o,n.pathname,fC+(s?`?${s}`:""))}async function tw(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(rw));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function nw(t=Ml().path){const e=Be();return t=xi(t),(await Fl()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await yd({path:t});return!!r.prerender&&!r.redirect})}let ws=null;async function dC(){var r;if(ws)return ws;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await rw(t.textContent||""),n=t.dataset.src?await tw(t.dataset.src):void 0;return ws={...e,...n,...window.__NUXT__},(r=ws.config)!=null&&r.public&&(ws.config.public=vr(ws.config.public)),ws}async function rw(t){return await kS(t,Be()._payloadRevivers)}function pC(t,e){Be()._payloadRevivers[t]=e}const mC=[["NuxtError",t=>ks(t)],["EmptyShallowRef",t=>Ns(t==="_"?void 0:t==="0n"?BigInt(0):ra(t))],["EmptyRef",t=>Qt(t==="_"?void 0:t==="0n"?BigInt(0):ra(t))],["ShallowRef",t=>Ns(t)],["ShallowReactive",t=>Nn(t)],["Ref",t=>Qt(t)],["Reactive",t=>vr(t)]],gC=tn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of mC)pC(r,s);Object.assign(t.payload,([e,n]=Ei(()=>t.runWithContext(dC)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function vd(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var g;const i=new Map,o=new Promise(y=>{t.resolveTags().then(w=>{y(w.map(k=>{const P=i.get(k._d)||0,R={tag:k,id:(P?`${k._d}:${P}`:k._d)||vg(k),shouldRender:!0};return k._d&&ZE(k._d)&&i.set(k._d,P+1),R}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const y of["body","head"]){const w=(g=n[y])==null?void 0:g.children;for(const k of w){const P=k.tagName.toLowerCase();if(!yg.has(P))continue;const R=ew({tag:P,props:{}},{innerHTML:k.innerHTML,...k.getAttributeNames().reduce((_,S)=>(_[S]=k.getAttribute(S),_),{})||{}});if(R.key=k.getAttribute("data-hid")||void 0,R._d=Wf(R)||vg(R),a.elMap.has(R._d)){let _=1,S=R._d;for(;a.elMap.has(S);)S=`${R._d}:${_++}`;a.elMap.set(S,k)}else a.elMap.set(R._d,k)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(y,w,k){const P=`${y}:${w}`;a.sideEffects[P]=k,delete a.pendingSideEffects[P]}function u({id:y,$el:w,tag:k}){const P=k.tag.endsWith("Attrs");a.elMap.set(y,w),P||(k.textContent&&k.textContent!==w.textContent&&(w.textContent=k.textContent),k.innerHTML&&k.innerHTML!==w.innerHTML&&(w.innerHTML=k.innerHTML),l(y,"el",()=>{w==null||w.remove(),a.elMap.delete(y)}));for(const R in k.props){if(!Object.prototype.hasOwnProperty.call(k.props,R))continue;const _=k.props[R];if(R.startsWith("on")&&typeof _=="function"){const D=w==null?void 0:w.dataset;if(D&&D[`${R}fired`]){const M=R.slice(0,-5);_.call(w,new Event(M.substring(2)))}w.getAttribute(`data-${R}`)!==""&&((k.tag==="bodyAttrs"?n.defaultView:w).addEventListener(R.substring(2),_.bind(w)),w.setAttribute(`data-${R}`,""));continue}const S=`attr:${R}`;if(R==="class"){if(!_)continue;for(const D of _)P&&l(y,`${S}:${D}`,()=>w.classList.remove(D)),!w.classList.contains(D)&&w.classList.add(D)}else if(R==="style"){if(!_)continue;for(const[D,M]of _)l(y,`${S}:${D}`,()=>{w.style.removeProperty(D)}),w.style.setProperty(D,M)}else _!==!1&&_!==null&&(w.getAttribute(R)!==_&&w.setAttribute(R,_===!0?"":String(_)),P&&l(y,S,()=>w.removeAttribute(R)))}}const f=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const y of p){const{tag:w,shouldRender:k,id:P}=y;if(k){if(w.tag==="title"){n.title=w.textContent,l("title","",()=>n.title=a.title);continue}y.$el=y.$el||a.elMap.get(P),y.$el?u(y):yg.has(w.tag)&&f.push(y)}}for(const y of f){const w=y.tag.tagPosition||"head";y.$el=n.createElement(y.tag.tag),u(y),d[w]=d[w]||n.createDocumentFragment(),d[w].appendChild(y.$el)}for(const y of p)await t.hooks.callHook("dom:renderTag",y,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const y in a.pendingSideEffects)a.pendingSideEffects[y]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function _C(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||vd;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return KS({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function yC(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function vC(t={}){const e=_C({domOptions:{render:yC(()=>vd(e),n=>setTimeout(n,0))},...t});return e.install=rC(e),e}const EC={disableDefaults:!0,disableCapoSorting:!1,plugins:[XS,JS,tC,QS]},wC=tn({name:"nuxt:head",enforce:"pre",setup(t){const e=vC(EC);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await vd(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ii=typeof document<"u";function sw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sw(t.default)}const Oe=Object.assign;function Yu(t,e){const n={};for(const r in e){const s=e[r];n[r]=Tn(s)?s.map(t):t(s)}return n}const Mo=()=>{},Tn=Array.isArray,iw=/#/g,TC=/&/g,IC=/\//g,AC=/=/g,RC=/\?/g,ow=/\+/g,SC=/%5B/g,CC=/%5D/g,aw=/%5E/g,PC=/%60/g,cw=/%7B/g,kC=/%7C/g,lw=/%7D/g,OC=/%20/g;function Ed(t){return encodeURI(""+t).replace(kC,"|").replace(SC,"[").replace(CC,"]")}function NC(t){return Ed(t).replace(cw,"{").replace(lw,"}").replace(aw,"^")}function Yf(t){return Ed(t).replace(ow,"%2B").replace(OC,"+").replace(iw,"%23").replace(TC,"%26").replace(PC,"`").replace(cw,"{").replace(lw,"}").replace(aw,"^")}function xC(t){return Yf(t).replace(AC,"%3D")}function DC(t){return Ed(t).replace(iw,"%23").replace(RC,"%3F")}function LC(t){return t==null?"":DC(t).replace(IC,"%2F")}function sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const MC=/\/$/,VC=t=>t.replace(MC,"");function Qu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=BC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:sa(o)}}function FC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Di(e.matched[r],n.matched[s])&&uw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Di(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jC(t[n],e[n]))return!1;return!0}function jC(t,e){return Tn(t)?Cg(t,e):Tn(e)?Cg(e,t):t===e}function Cg(t,e){return Tn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function BC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ia;(function(t){t.pop="pop",t.push="push"})(ia||(ia={}));var Vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vo||(Vo={}));function $C(t){if(!t)if(ii){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VC(t)}const HC=/^[^#]+#/;function zC(t,e){return t.replace(HC,"#")+e}function qC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ul=()=>({left:window.scrollX,top:window.scrollY});function WC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pg(t,e){return(history.state?history.state.position-e:-1)+t}const Qf=new Map;function KC(t,e){Qf.set(t,e)}function GC(t){const e=Qf.get(t);return Qf.delete(t),e}let YC=()=>location.protocol+"//"+location.host;function fw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Sg(l,"")}return Sg(n,t)+r+s}function QC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=fw(t,location),y=n.value,w=e.value;let k=0;if(p){if(n.value=g,e.value=p,o&&o===y){o=null;return}k=w?p.position-w.position:0}else r(g);s.forEach(P=>{P(n.value,y,{delta:k,type:ia.pop,direction:k?k>0?Vo.forward:Vo.back:Vo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Ul()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function kg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ul():null}}function XC(t){const{history:e,location:n}=window,r={value:fw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:YC()+t+l;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,u){const f=Oe({},e.state,kg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function a(l,u){const f=Oe({},s.value,e.state,{forward:l,scroll:Ul()});i(f.current,f,!0);const d=Oe({},kg(r.value,l,null),{position:f.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function JC(t){t=$C(t);const e=XC(t),n=QC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:zC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ZC(t){return typeof t=="string"||t&&typeof t=="object"}function hw(t){return typeof t=="string"||typeof t=="symbol"}const dw=Symbol("");var Og;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Og||(Og={}));function Li(t,e){return Oe(new Error,{type:t,[dw]:!0},e)}function Zn(t,e){return t instanceof Error&&dw in t&&(e==null||!!(t.type&e))}const Ng="[^/]+?",eP={sensitive:!1,strict:!1,start:!0,end:!0},tP=/[.+*?^${}()[\]/\\]/g;function nP(t,e){const n=Oe({},eP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(tP,"\\$&"),g+=40;else if(p.type===1){const{value:y,repeatable:w,optional:k,regexp:P}=p;i.push({name:y,repeatable:w,optional:k});const R=P||Ng;if(R!==Ng){g+=10;try{new RegExp(`(${R})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+S.message)}}let _=w?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(_=k&&u.length<2?`(?:/${_})`:"/"+_),k&&(_+="?"),s+=_,g+=20,k&&(g+=-8),w&&(g+=-20),R===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",y=i[p-1];d[y.name]=g&&y.repeatable?g.split("/"):g}return d}function l(u){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:k}=g,P=y in u?u[y]:"";if(Tn(P)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Tn(P)?P.join("/"):P;if(!R)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);f+=R}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function rP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function pw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xg(r))return 1;if(xg(s))return-1}return s.length-r.length}function xg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sP={type:0,value:""},iP=/[a-zA-Z0-9_]/;function oP(t){if(!t)return[[]];if(t==="/")return[[sP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:iP.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function aP(t,e,n){const r=nP(oP(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cP(t,e){const n=[],r=new Map;e=Vg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const y=!g,w=Lg(d);w.aliasOf=g&&g.record;const k=Vg(e,d),P=[w];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of S)P.push(Lg(Oe({},w,{components:g?g.record.components:w.components,path:D,aliasOf:g?g.record:w})))}let R,_;for(const S of P){const{path:D}=S;if(p&&D[0]!=="/"){const M=p.record.path,T=M[M.length-1]==="/"?"":"/";S.path=p.record.path+(D&&T+D)}if(R=aP(S,p,k),g?g.alias.push(R):(_=_||R,_!==R&&_.alias.push(R),y&&d.name&&!Mg(R)&&o(d.name)),mw(R)&&l(R),w.children){const M=w.children;for(let T=0;T<M.length;T++)i(M[T],R,g&&g.children[T])}g=g||R}return _?()=>{o(_)}:Mo}function o(d){if(hw(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=fP(d,n);n.splice(p,0,d),d.record.name&&!Mg(d)&&r.set(d.record.name,d)}function u(d,p){let g,y={},w,k;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Li(1,{location:d});k=g.record.name,y=Oe(Dg(p.params,g.keys.filter(_=>!_.optional).concat(g.parent?g.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Dg(d.params,g.keys.map(_=>_.name))),w=g.stringify(y)}else if(d.path!=null)w=d.path,g=n.find(_=>_.re.test(w)),g&&(y=g.parse(w),k=g.record.name);else{if(g=p.name?r.get(p.name):n.find(_=>_.re.test(p.path)),!g)throw Li(1,{location:d,currentLocation:p});k=g.record.name,y=Oe({},p.params,d.params),w=g.stringify(y)}const P=[];let R=g;for(;R;)P.unshift(R.record),R=R.parent;return{name:k,path:w,params:y,matched:P,meta:uP(P)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Dg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Mg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Vg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;pw(t,e[i])<0?r=i:n=i+1}const s=hP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hP(t){let e=t;for(;e=e.parent;)if(mw(e)&&pw(t,e)===0)return e}function mw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function dP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ow," "),o=i.indexOf("="),a=sa(o<0?i:i.slice(0,o)),l=o<0?null:sa(i.slice(o+1));if(a in e){let u=e[a];Tn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Fg(t){let e="";for(let n in t){const r=t[n];if(n=xC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tn(r)?r.map(i=>i&&Yf(i)):[r&&Yf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mP=Symbol(""),Ug=Symbol(""),wd=Symbol(""),bd=Symbol(""),Xf=Symbol("");function vo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Li(4,{from:n,to:e})):p instanceof Error?l(p):ZC(p)?l(Li(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Xu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(sw(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Mr(f,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=bC(f)?f.default:f;o.mods[a]=f,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Mr(g,n,r,o,a,s)()}))}}return i}function jg(t){const e=mt(wd),n=mt(bd),r=Fe(()=>{const l=st(t.to);return e.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Di.bind(null,f));if(p>-1)return p;const g=Bg(l[u-2]);return u>1&&Bg(f)===g&&d[d.length-1].path!==g?d.findIndex(Di.bind(null,l[u-2])):p}),i=Fe(()=>s.value>-1&&EP(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&uw(n.params,r.value.params));function a(l={}){if(vP(l)){const u=e[st(t.replace)?"replace":"push"](st(t.to)).catch(Mo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function gP(t){return t.length===1?t[0]:t}const _P=An({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jg,setup(t,{slots:e}){const n=vr(jg(t)),{options:r}=mt(wd),s=Fe(()=>({[$g(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$g(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gP(e.default(n));return t.custom?i:ut("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yP=_P;function vP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Tn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $g=(t,e,n)=>t??e??n,wP=An({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=mt(Xf),s=Fe(()=>t.route||r.value),i=mt(Ug,0),o=Fe(()=>{let u=st(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),a=Fe(()=>s.value.matched[o.value]);Kr(Ug,Fe(()=>o.value+1)),Kr(mP,a),Kr(Xf,s);const l=Qt();return Vn(()=>[l.value,a.value,t.name],([u,f,d],[p,g,y])=>{f&&(f.instances[d]=u,g&&g!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!Di(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=a.value,p=d&&d.components[f];if(!p)return Hg(n.default,{Component:p,route:u});const g=d.props[f],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=ut(p,Oe({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Hg(n.default,{Component:k,route:u})||k}}});function Hg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gw=wP;function bP(t){const e=cP(t.routes,t),n=t.parseQuery||dP,r=t.stringifyQuery||Fg,s=t.history,i=vo(),o=vo(),a=vo(),l=Ns(cn);let u=cn;ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Yu.bind(null,j=>""+j),d=Yu.bind(null,LC),p=Yu.bind(null,sa);function g(j,ee){let J,re;return hw(j)?(J=e.getRecordMatcher(j),re=ee):re=j,e.addRoute(re,J)}function y(j){const ee=e.getRecordMatcher(j);ee&&e.removeRoute(ee)}function w(){return e.getRoutes().map(j=>j.record)}function k(j){return!!e.getRecordMatcher(j)}function P(j,ee){if(ee=Oe({},ee||l.value),typeof j=="string"){const x=Qu(n,j,ee.path),V=e.resolve({path:x.path},ee),H=s.createHref(x.fullPath);return Oe(x,V,{params:p(V.params),hash:sa(x.hash),redirectedFrom:void 0,href:H})}let J;if(j.path!=null)J=Oe({},j,{path:Qu(n,j.path,ee.path).path});else{const x=Oe({},j.params);for(const V in x)x[V]==null&&delete x[V];J=Oe({},j,{params:d(x)}),ee.params=d(ee.params)}const re=e.resolve(J,ee),Ie=j.hash||"";re.params=f(p(re.params));const De=FC(r,Oe({},j,{hash:NC(Ie),path:re.path})),C=s.createHref(De);return Oe({fullPath:De,hash:Ie,query:r===Fg?pP(j.query):j.query||{}},re,{redirectedFrom:void 0,href:C})}function R(j){return typeof j=="string"?Qu(n,j,l.value.path):Oe({},j)}function _(j,ee){if(u!==j)return Li(8,{from:ee,to:j})}function S(j){return T(j)}function D(j){return S(Oe(R(j),{replace:!0}))}function M(j){const ee=j.matched[j.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let re=typeof J=="function"?J(j):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=R(re):{path:re},re.params={}),Oe({query:j.query,hash:j.hash,params:re.path!=null?{}:j.params},re)}}function T(j,ee){const J=u=P(j),re=l.value,Ie=j.state,De=j.force,C=j.replace===!0,x=M(J);if(x)return T(Oe(R(x),{state:typeof x=="object"?Oe({},Ie,x.state):Ie,force:De,replace:C}),ee||J);const V=J;V.redirectedFrom=ee;let H;return!De&&UC(r,re,J)&&(H=Li(16,{to:V,from:re}),rn(re,re,!0,!1)),(H?Promise.resolve(H):I(V,re)).catch(U=>Zn(U)?Zn(U,2)?U:mn(U):ne(U,V,re)).then(U=>{if(U){if(Zn(U,2))return T(Oe({replace:C},R(U.to),{state:typeof U.to=="object"?Oe({},Ie,U.to.state):Ie,force:De}),ee||V)}else U=O(V,re,!0,C,Ie);return N(V,re,U),U})}function v(j,ee){const J=_(j,ee);return J?Promise.reject(J):Promise.resolve()}function E(j){const ee=Tr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(j):j()}function I(j,ee){let J;const[re,Ie,De]=TP(j,ee);J=Xu(re.reverse(),"beforeRouteLeave",j,ee);for(const x of re)x.leaveGuards.forEach(V=>{J.push(Mr(V,j,ee))});const C=v.bind(null,j,ee);return J.push(C),zt(J).then(()=>{J=[];for(const x of i.list())J.push(Mr(x,j,ee));return J.push(C),zt(J)}).then(()=>{J=Xu(Ie,"beforeRouteUpdate",j,ee);for(const x of Ie)x.updateGuards.forEach(V=>{J.push(Mr(V,j,ee))});return J.push(C),zt(J)}).then(()=>{J=[];for(const x of De)if(x.beforeEnter)if(Tn(x.beforeEnter))for(const V of x.beforeEnter)J.push(Mr(V,j,ee));else J.push(Mr(x.beforeEnter,j,ee));return J.push(C),zt(J)}).then(()=>(j.matched.forEach(x=>x.enterCallbacks={}),J=Xu(De,"beforeRouteEnter",j,ee,E),J.push(C),zt(J))).then(()=>{J=[];for(const x of o.list())J.push(Mr(x,j,ee));return J.push(C),zt(J)}).catch(x=>Zn(x,8)?x:Promise.reject(x))}function N(j,ee,J){a.list().forEach(re=>E(()=>re(j,ee,J)))}function O(j,ee,J,re,Ie){const De=_(j,ee);if(De)return De;const C=ee===cn,x=ii?history.state:{};J&&(re||C?s.replace(j.fullPath,Oe({scroll:C&&x&&x.scroll},Ie)):s.push(j.fullPath,Ie)),l.value=j,rn(j,ee,J,C),mn()}let A;function ge(){A||(A=s.listen((j,ee,J)=>{if(!Rn.listening)return;const re=P(j),Ie=M(re);if(Ie){T(Oe(Ie,{replace:!0,force:!0}),re).catch(Mo);return}u=re;const De=l.value;ii&&KC(Pg(De.fullPath,J.delta),Ul()),I(re,De).catch(C=>Zn(C,12)?C:Zn(C,2)?(T(Oe(R(C.to),{force:!0}),re).then(x=>{Zn(x,20)&&!J.delta&&J.type===ia.pop&&s.go(-1,!1)}).catch(Mo),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ne(C,re,De))).then(C=>{C=C||O(re,De,!1),C&&(J.delta&&!Zn(C,8)?s.go(-J.delta,!1):J.type===ia.pop&&Zn(C,20)&&s.go(-1,!1)),N(re,De,C)}).catch(Mo)}))}let ve=vo(),Z=vo(),se;function ne(j,ee,J){mn(j);const re=Z.list();return re.length?re.forEach(Ie=>Ie(j,ee,J)):console.error(j),Promise.reject(j)}function Ue(){return se&&l.value!==cn?Promise.resolve():new Promise((j,ee)=>{ve.add([j,ee])})}function mn(j){return se||(se=!j,ge(),ve.list().forEach(([ee,J])=>j?J(j):ee()),ve.reset()),j}function rn(j,ee,J,re){const{scrollBehavior:Ie}=t;if(!ii||!Ie)return Promise.resolve();const De=!J&&GC(Pg(j.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return qn().then(()=>Ie(j,ee,De)).then(C=>C&&WC(C)).catch(C=>ne(C,j,ee))}const Ge=j=>s.go(j);let Ye;const Tr=new Set,Rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:w,resolve:P,options:t,push:S,replace:D,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:Ue,install(j){const ee=this;j.component("RouterLink",yP),j.component("RouterView",gw),j.config.globalProperties.$router=ee,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>st(l)}),ii&&!Ye&&l.value===cn&&(Ye=!0,S(s.location).catch(Ie=>{}));const J={};for(const Ie in cn)Object.defineProperty(J,Ie,{get:()=>l.value[Ie],enumerable:!0});j.provide(wd,ee),j.provide(bd,Nn(J)),j.provide(Xf,l);const re=j.unmount;Tr.add(j),j.unmount=function(){Tr.delete(j),Tr.size<1&&(u=cn,A&&A(),A=null,l.value=cn,Ye=!1,se=!1),re()}}};function zt(j){return j.reduce((ee,J)=>ee.then(()=>E(J)),Promise.resolve())}return Rn}function TP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Di(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Di(u,l))||s.push(l))}return[n,r,s]}function _w(t){return mt(bd)}const IP=/(:\w+)\([^)]+\)/g,AP=/(:\w+)[?+*]/g,RP=/:\w+/g,SP=(t,e)=>e.path.replace(IP,"$1").replace(AP,"$1").replace(RP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Jf=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&SP(t.route,n));return typeof r=="function"?r(t.route):r},CP=(t,e)=>({default:()=>t?ut(bA,t===!0?{}:t,e):e});function Td(t){return Array.isArray(t)?t:[t]}const Ju=[{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./BAQ1O9Ez.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./DaoZ52yg.js"),__vite__mapDeps([2,3,4]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./DewEJCsQ.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./CVTIq0WY.js"),__vite__mapDeps([5,6,7]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./-p41Y_Bl.js"),__vite__mapDeps([8,9]),import.meta.url)},{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./CqBwlps9.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:{middleware:"auth"},component:()=>ke(()=>import("./BV5945fc.js"),__vite__mapDeps([10,3,11]),import.meta.url)},{name:"Admin",path:"/Admin",meta:{middleware:"auth"},component:()=>ke(()=>import("./CK2BTrlX.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./CtfCz7ne.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./DDsGNmZj.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./CzssAWUY.js"),[],import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./C-fUdEyI.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./CJ7RoMn-.js"),[],import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./BL3m-Y30.js"),__vite__mapDeps([16,6,7,17]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./C0a39WHx.js"),__vite__mapDeps([18,19,6,7,20]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./nHnvGPIn.js"),__vite__mapDeps([21,22]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./kUH8D5T6.js"),__vite__mapDeps([23,6,7]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./CJPhoOQG.js"),__vite__mapDeps([24,6,7,25]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./DGoN_uUr.js"),[],import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./DHE0tQ3z.js"),__vite__mapDeps([26,6,7]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./MWV8zuX8.js"),__vite__mapDeps([27,6,7]),import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:{middleware:"auth"},component:()=>ke(()=>import("./DdbGzf4u.js"),__vite__mapDeps([28,19,11,18,6,7,20,29]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./CnjDdLvw.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./BhnDQAoL.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./3tZ8vQoQ.js"),__vite__mapDeps([30,6,7,31]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./DBNwCk-b.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./CK_EaiCk.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./DNcFXIn5.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./C2Owjdhy.js"),[],import.meta.url)}],yw=(t,e)=>({default:()=>{var n;return t?ut(R1,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),PP=/(:\w+)\([^)]+\)/g,kP=/(:\w+)[?+*]/g,OP=/:\w+/g;function zg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(PP,"$1").replace(kP,"$1").replace(OP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function NP(t,e){return t===e||e===cn?!1:zg(t)!==zg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const xP={scrollBehavior(t,e,n){var a;const r=Be(),s=((a=At().options)==null?void 0:a.scrollBehaviorType)??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:vw(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(l=>{if(e===cn){l(qg(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>l(qg(t,e,n,s)))})})}};function vw(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function qg(t,e,n,r){if(n)return n;const s=NP(t,e);return t.hash?{el:t.hash,top:vw(t.hash),behavior:s?r:"instant"}:{left:0,top:0,behavior:s?r:"instant"}}const DP={hashMode:!1,scrollBehaviorType:"auto"},Sn={...DP,...xP},LP=async(t,e)=>{var o;let n,r;if(!((o=t.meta)!=null&&o.validate))return;const s=([n,r]=Ei(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=ks({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},MP=async t=>{let e,n;const r=([e,n]=Ei(()=>yd({path:t.path})),e=await e,n(),e);if(r.redirect)return wr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},VP=[LP,MP],Fo={auth:()=>ke(()=>import("./CDt9GiOm.js"),[],import.meta.url)};function FP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),cg(f,"")}const a=cg(r,t),l=!n||RR(a,n)?a:n;return l+(l.includes("?")?"":s)+i}const UP=tn({name:"nuxt:router",enforce:"pre",async setup(t){var k;let e,n,r=zs().app.baseURL;const s=((k=Sn.history)==null?void 0:k.call(Sn,r))??JC(r),i=Sn.routes?([e,n]=Ei(()=>Sn.routes(Ju)),e=await e,n(),e??Ju):Ju;let o;const a=bP({...Sn,scrollBehavior:(P,R,_)=>{if(R===cn){o=_;return}if(Sn.scrollBehavior){if(a.options.scrollBehavior=Sn.scrollBehavior,"scrollRestoration"in window.history){const S=a.beforeEach(()=>{S(),window.history.scrollRestoration="manual"})}return Sn.scrollBehavior(P,cn,o||_)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Ns(a.currentRoute.value);a.afterEach((P,R)=>{l.value=R}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=FP(r,window.location,t.payload.path),f=Ns(a.currentRoute.value),d=()=>{f.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((P,R)=>{var _,S,D,M;((S=(_=P.matched[0])==null?void 0:_.components)==null?void 0:S.default)===((M=(D=R.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&d()});const p={};for(const P in f.value)Object.defineProperty(p,P,{get:()=>f.value[P],enumerable:!0});t._route=Nn(p),t._middleware||(t._middleware={global:[],named:{}});const g=Vl();a.afterEach(async(P,R,_)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(XE),_&&await t.callHook("page:loading:end")});try{[e,n]=Ei(()=>a.isReady()),await e,n()}catch(P){[e,n]=Ei(()=>t.runWithContext(()=>Ts(P))),await e,n()}const y=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const w=t.payload.state._layout;return a.beforeEach(async(P,R)=>{var _;await t.callHook("page:loading:start"),P.meta=vr(P.meta),t.isHydrating&&w&&!fr(P.meta.layout)&&(P.meta.layout=w),t._processingMiddleware=!0;{const S=new Set([...VP,...t._middleware.global]);for(const D of P.matched){const M=D.meta.middleware;if(M)for(const T of Td(M))S.add(T)}{const D=await t.runWithContext(()=>yd({path:P.path}));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?S.add(M):S.delete(M)}for(const D of S){const M=typeof D=="string"?t._middleware.named[D]||await((_=Fo[D])==null?void 0:_.call(Fo).then(T=>T.default||T)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);try{const T=await t.runWithContext(()=>M(P,R));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const v=T||ks({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ts(v)),!1}if(T===!0)continue;if(T===!1)return T;if(T)return JE(T)&&T.fatal&&await t.runWithContext(()=>Ts(T)),T}catch(T){const v=ks(T);return v.fatal&&await t.runWithContext(()=>Ts(v)),v}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(P,R)=>{P.matched.length===0&&await t.runWithContext(()=>Ts(ks({statusCode:404,fatal:!1,statusMessage:`Page not found: ${P.fullPath}`,data:{path:P.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in y&&(y.name=void 0),await a.replace({...y,force:!0}),a.options.scrollBehavior=Sn.scrollBehavior}catch(P){await t.runWithContext(()=>Ts(P))}}),{provide:{router:a}}}}),Zf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),jP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),jl=t=>{const e=Be();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Zf(()=>t())}):Zf(()=>t())},BP=tn({name:"nuxt:payload",setup(t){const e=new Set;At().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await Rg(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),jl(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await Rg(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Fl,1e3)})}}),$P=tn(()=>{const t=At();jl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),HP=tn(t=>{let e;async function n(){const r=await Fl();e&&clearTimeout(e),e=setTimeout(n,pg);try{const s=await $fetch(md("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}jl(()=>{e=setTimeout(n,pg)})});function zP(t={}){const e=t.path||window.location.pathname;let n={};try{n=ra(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Be().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const qP=tn({name:"nuxt:chunk-reload",setup(t){const e=At(),n=zs(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=Ll(n.app.baseURL,i.fullPath);zP({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),WP=tn({name:"nuxt:global-components"}),Hr={default:EA(()=>ke(()=>import("./i9OfLFQy.js"),__vite__mapDeps([32,19,3,33]),import.meta.url).then(t=>t.default||t))};function KP(t){if(t!=null&&t.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function Ew(t,e=At()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises||(e._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>Ew(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const GP=tn({name:"nuxt:prefetch",setup(t){const e=At();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Hr[r]=="function"&&await Hr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(wr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Td(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Fo[o]=="function"&&Fo[o]();typeof s=="string"&&s in Hr&&KP(Hr[s])})}}),YP=()=>{};var Wg={};/**
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
 */const ww=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[f],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ww(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new XP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JP=function(t){const e=ww(t);return bw.encodeByteArray(e,!0)},el=function(t){return JP(t).replace(/\./g,"")},Tw=function(t){try{return bw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ZP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ek=()=>ZP().__FIREBASE_DEFAULTS__,tk=()=>{if(typeof process>"u"||typeof Wg>"u")return;const t=Wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tw(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return YP()||ek()||tk()||nk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iw=t=>{var e,n;return(n=(e=Bl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Aw=t=>{const e=Iw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rw=()=>{var t;return(t=Bl())==null?void 0:t.config},Sw=t=>{var e;return(e=Bl())==null?void 0:e[`_${t}`]};/**
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
 */class rk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Id(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[el(JSON.stringify(n)),el(JSON.stringify(o)),""].join(".")}const Uo={};function sk(){const t={prod:[],emulator:[]};for(const e of Object.keys(Uo))Uo[e]?t.emulator.push(e):t.prod.push(e);return t}function ik(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kg=!1;function Ad(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||Uo[t]===e||Uo[t]||Kg)return;Uo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=sk().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Kg=!0,o()},p}function f(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=ik(r),g=n("text"),y=document.getElementById(g)||document.createElement("span"),w=n("learnmore"),k=document.getElementById(w)||document.createElement("a"),P=n("preprendIcon"),R=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const _=p.element;a(_),f(k,w);const S=u();l(R,P),_.append(R,y,k,S),document.body.appendChild(_)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ok(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function ak(){var e;const t=(e=Bl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ck(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fk(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hk(){return!ak()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dk(){try{return typeof indexedDB=="object"}catch{return!1}}function pk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const mk="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mk,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,a,r)}}function gk(t,e){return t.replace(_k,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _k=/\{\$([^}]+)}/g;function yk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gg(i)&&Gg(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gg(t){return t!==null&&typeof t=="object"}/**
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
 */function Ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vk(t,e){const n=new Ek(t,e);return n.subscribe.bind(n)}class Ek{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zu),s.error===void 0&&(s.error=Zu),s.complete===void 0&&(s.complete=Zu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zu(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class es{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class bk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ik(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tk(t){return t===Is?void 0:t}function Ik(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Rk={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Sk=Ee.INFO,Ck={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Pk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ck[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=Sk,this._logHandler=Pk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const kk=(t,e)=>e.some(n=>t instanceof n);let Yg,Qg;function Ok(){return Yg||(Yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nk(){return Qg||(Qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pw=new WeakMap,eh=new WeakMap,kw=new WeakMap,ef=new WeakMap,Sd=new WeakMap;function xk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pw.set(n,t)}).catch(()=>{}),Sd.set(e,t),e}function Dk(t){if(eh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});eh.set(t,e)}let th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lk(t){th=t(th)}function Mk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return kw.set(r,e.sort?e.sort():[e]),Gr(r)}:Nk().includes(t)?function(...e){return t.apply(tf(this),e),Gr(Pw.get(this))}:function(...e){return Gr(t.apply(tf(this),e))}}function Vk(t){return typeof t=="function"?Mk(t):(t instanceof IDBTransaction&&Dk(t),kk(t,Ok())?new Proxy(t,th):t)}function Gr(t){if(t instanceof IDBRequest)return xk(t);if(ef.has(t))return ef.get(t);const e=Vk(t);return e!==t&&(ef.set(t,e),Sd.set(e,t)),e}const tf=t=>Sd.get(t);function Fk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gr(o.result),l.oldVersion,l.newVersion,Gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Uk=["get","getKey","getAll","getAllKeys","count"],jk=["put","add","delete","clear"],nf=new Map;function Xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return nf.set(e,i),i}Lk(t=>({...t,get:(e,n,r)=>Xg(e,n)||t.get(e,n,r),has:(e,n)=>!!Xg(e,n)||t.has(e,n)}));/**
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
 */class Bk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($k(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $k(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nh="@firebase/app",Jg="0.14.0";/**
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
 */const dr=new Rd("@firebase/app"),Hk="@firebase/app-compat",zk="@firebase/analytics-compat",qk="@firebase/analytics",Wk="@firebase/app-check-compat",Kk="@firebase/app-check",Gk="@firebase/auth",Yk="@firebase/auth-compat",Qk="@firebase/database",Xk="@firebase/data-connect",Jk="@firebase/database-compat",Zk="@firebase/functions",eO="@firebase/functions-compat",tO="@firebase/installations",nO="@firebase/installations-compat",rO="@firebase/messaging",sO="@firebase/messaging-compat",iO="@firebase/performance",oO="@firebase/performance-compat",aO="@firebase/remote-config",cO="@firebase/remote-config-compat",lO="@firebase/storage",uO="@firebase/storage-compat",fO="@firebase/firestore",hO="@firebase/ai",dO="@firebase/firestore-compat",pO="firebase",mO="12.0.0";/**
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
 */const rh="[DEFAULT]",gO={[nh]:"fire-core",[Hk]:"fire-core-compat",[qk]:"fire-analytics",[zk]:"fire-analytics-compat",[Kk]:"fire-app-check",[Wk]:"fire-app-check-compat",[Gk]:"fire-auth",[Yk]:"fire-auth-compat",[Qk]:"fire-rtdb",[Xk]:"fire-data-connect",[Jk]:"fire-rtdb-compat",[Zk]:"fire-fn",[eO]:"fire-fn-compat",[tO]:"fire-iid",[nO]:"fire-iid-compat",[rO]:"fire-fcm",[sO]:"fire-fcm-compat",[iO]:"fire-perf",[oO]:"fire-perf-compat",[aO]:"fire-rc",[cO]:"fire-rc-compat",[lO]:"fire-gcs",[uO]:"fire-gcs-compat",[fO]:"fire-fst",[dO]:"fire-fst-compat",[hO]:"fire-vertex","fire-js":"fire-js",[pO]:"fire-js-all"};/**
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
 */const tl=new Map,_O=new Map,sh=new Map;function Zg(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if(sh.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of tl.values())Zg(n,t);for(const n of _O.values())Zg(n,t);return!0}function $l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const yO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new Aa("app","Firebase",yO);/**
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
 */class vO{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=mO;function Ow(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:rh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Yr.create("bad-app-name",{appName:String(s)});if(n||(n=Rw()),!n)throw Yr.create("no-options");const i=tl.get(s);if(i){if(Ls(n,i.options)&&Ls(r,i.config))return i;throw Yr.create("duplicate-app",{appName:s})}const o=new Ak(s);for(const l of sh.values())o.addComponent(l);const a=new vO(n,r,o);return tl.set(s,a),a}function Cd(t=rh){const e=tl.get(t);if(!e&&t===rh&&Rw())return Ow();if(!e)throw Yr.create("no-app",{appName:t});return e}function Fn(t,e,n){let r=gO[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(o.join(" "));return}Ms(new es(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const EO="firebase-heartbeat-database",wO=1,oa="firebase-heartbeat-store";let rf=null;function Nw(){return rf||(rf=Fk(EO,wO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),rf}async function bO(t){try{const n=(await Nw()).transaction(oa),r=await n.objectStore(oa).get(xw(t));return await n.done,r}catch(e){if(e instanceof Gn)dr.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function e_(t,e){try{const r=(await Nw()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,xw(t)),await r.done}catch(n){if(n instanceof Gn)dr.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function xw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TO=1024,IO=30;class AO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=t_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>IO){const o=CO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=t_(),{heartbeatsToSend:r,unsentEntries:s}=RO(this._heartbeatsCache.heartbeats),i=el(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return dr.warn(n),""}}}function t_(){return new Date().toISOString().substring(0,10)}function RO(t,e=TO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),n_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),n_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dk()?pk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return e_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return e_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function n_(t){return el(JSON.stringify({version:2,heartbeats:t})).length}function CO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function PO(t){Ms(new es("platform-logger",e=>new Bk(e),"PRIVATE")),Ms(new es("heartbeat",e=>new AO(e),"PRIVATE")),Fn(nh,Jg,t),Fn(nh,Jg,"esm2020"),Fn("fire-js","")}PO("");var kO="firebase",OO="12.0.0";/**
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
 */Fn(kO,OO,"app");function Dw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NO=Dw,Lw=new Aa("auth","Firebase",Dw());/**
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
 */const nl=new Rd("@firebase/auth");function xO(t,...e){nl.logLevel<=Ee.WARN&&nl.warn(`Auth (${qs}): ${t}`,...e)}function Rc(t,...e){nl.logLevel<=Ee.ERROR&&nl.error(`Auth (${qs}): ${t}`,...e)}/**
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
 */function In(t,...e){throw Pd(t,...e)}function Un(t,...e){return Pd(t,...e)}function Mw(t,e,n){const r={...NO(),[e]:n};return new Aa("auth","Firebase",r).create(e,{appName:t.name})}function Qr(t){return Mw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lw.create(t,...e)}function de(t,e,...n){if(!t)throw Pd(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rc(e),new Error(e)}function pr(t,e){t||ir(e)}/**
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
 */function ih(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function DO(){return r_()==="http:"||r_()==="https:"}function r_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function LO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DO()||lk()||"connection"in navigator)?navigator.onLine:!0}function MO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,pr(n>e,"Short delay should be less than long delay!"),this.isMobile=ok()||uk()}get(){return LO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kd(t,e){pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UO=new Sa(3e4,6e4);function Ws(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fs(t,e,n,r,s={}){return Fw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ra({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return ck()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),Vw.fetch()(await Uw(t,t.config.apiHost,n,a),u)})}async function Fw(t,e,n){t._canInitEmulator=!1;const r={...VO,...e};try{const s=new BO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw cc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw cc(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mw(t,f,u);In(t,f)}}catch(s){if(s instanceof Gn)throw s;In(t,"network-request-failed",{message:String(s)})}}async function Hl(t,e,n,r,s={}){const i=await fs(t,e,n,r,s);return"mfaPendingCredential"in i&&In(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Uw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?kd(t.config,s):`${t.config.apiScheme}://${s}`;return FO.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function jO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Un(this.auth,"network-request-failed")),UO.get())})}}function cc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Un(t,e,r);return s.customData._tokenResponse=n,s}function s_(t){return t!==void 0&&t.enterprise!==void 0}class $O{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HO(t,e){return fs(t,"GET","/v2/recaptchaConfig",Ws(t,e))}/**
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
 */async function zO(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function rl(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qO(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=Od(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:jo(sf(s.auth_time)),issuedAtTime:jo(sf(s.iat)),expirationTime:jo(sf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function Od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tw(n);return s?JSON.parse(s):(Rc("Failed to decode base64 JWT payload"),null)}catch(s){return Rc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function i_(t){const e=Od(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&WO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await aa(t,rl(e,{idToken:n}));de(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?jw(s.providerUserInfo):[],o=YO(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new oh(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function GO(t){const e=Ze(t);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function QO(t,e){const n=await Fw(t,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Uw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(l.credentials="include"),Vw.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XO(t,e){return fs(t,"POST","/v2/accounts:revokeToken",Ws(t,e))}/**
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
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):i_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=i_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wi;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function Pr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new KO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qO(this,e)}reload(){return GO(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Qr(this.auth));const e=await this.getIdToken();return await aa(this,zO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:g,providerData:y,stsTokenManager:w}=n;de(d&&w,e,"internal-error");const k=wi.fromJSON(this.name,w);de(typeof d=="string",e,"internal-error"),Pr(r,e.name),Pr(s,e.name),de(typeof p=="boolean",e,"internal-error"),de(typeof g=="boolean",e,"internal-error"),Pr(i,e.name),Pr(o,e.name),Pr(a,e.name),Pr(l,e.name),Pr(u,e.name),Pr(f,e.name);const P=new vn({uid:d,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:f});return y&&Array.isArray(y)&&(P.providerData=y.map(R=>({...R}))),l&&(P._redirectEventId=l),P}static async _fromIdTokenResponse(e,n,r=!1){const s=new wi;s.updateFromServerResponse(n);const i=new vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new wi;a.updateFromIdToken(r);const l=new vn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const o_=new Map;function or(t){pr(t instanceof Function,"Expected a class definition");let e=o_.get(t);return e?(pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,o_.set(t,e),e)}/**
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
 */class Bw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bw.type="NONE";const a_=Bw;/**
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
 */function Sc(t,e,n){return`firebase:${t}:${e}:${n}`}class bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Sc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Sc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rl(this.auth,{idToken:e}).catch(()=>{});return n?vn._fromGetAccountInfoResponse(this.auth,n,e):null}return vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bi(or(a_),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||or(a_);const o=Sc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const p=await rl(e,{idToken:f}).catch(()=>{});if(!p)break;d=await vn._fromGetAccountInfoResponse(e,p,f)}else d=vn._fromJSON(e,f);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new bi(i,e,r))}}/**
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
 */function c_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kw(e))return"Blackberry";if(Gw(e))return"Webos";if(Hw(e))return"Safari";if((e.includes("chrome/")||zw(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(t=Mt()){return/firefox\//i.test(t)}function Hw(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zw(t=Mt()){return/crios\//i.test(t)}function qw(t=Mt()){return/iemobile/i.test(t)}function Ww(t=Mt()){return/android/i.test(t)}function Kw(t=Mt()){return/blackberry/i.test(t)}function Gw(t=Mt()){return/webos/i.test(t)}function Nd(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JO(t=Mt()){var e;return Nd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ZO(){return fk()&&document.documentMode===10}function Yw(t=Mt()){return Nd(t)||Ww(t)||Gw(t)||Kw(t)||/windows phone/i.test(t)||qw(t)}/**
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
 */function Qw(t,e=[]){let n;switch(t){case"Browser":n=c_(Mt());break;case"Worker":n=`${c_(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
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
 */class e2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function t2(t,e={}){return fs(t,"GET","/v2/passwordPolicy",Ws(t,e))}/**
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
 */const n2=6;class r2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??n2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class s2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new l_(this),this.idTokenSubscription=new l_(this),this.beforeStateQueue=new e2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rl(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Qr(this));const n=e?Ze(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await t2(this),n=new r2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&xO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yi(t){return Ze(t)}class l_{constructor(e){this.auth=e,this.observer=null,this.addObserver=vk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i2(t){zl=t}function Xw(t){return zl.loadJS(t)}function o2(){return zl.recaptchaEnterpriseScript}function a2(){return zl.gapiScript}function c2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class l2{constructor(){this.enterprise=new u2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class u2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const f2="recaptcha-enterprise",Jw="NO_RECAPTCHA";class h2{constructor(e){this.type=f2,this.auth=Yi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{HO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new $O(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;s_(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Jw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new l2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&s_(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=o2();l.length!==0&&(l+=a),Xw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function u_(t,e,n,r=!1,s=!1){const i=new h2(t);let o;if(s)o=Jw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function f_(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await u_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await u_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function d2(t,e){const n=$l(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ls(i,e??{}))return s;In(s,"already-initialized")}return n.initialize({options:e})}function p2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m2(t,e,n){const r=Yi(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zw(e),{host:o,port:a}=g2(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Ls(u,r.config.emulator)&&Ls(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,us(o)?(Id(`${i}//${o}${l}`),Ad("Auth",!0)):_2()}function Zw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function g2(t){const e=Zw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:h_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:h_(o)}}}function h_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}async function y2(t,e){return fs(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function v2(t,e){return Hl(t,"POST","/v1/accounts:signInWithPassword",Ws(t,e))}/**
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
 */async function E2(t,e){return Hl(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}async function w2(t,e){return Hl(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}/**
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
 */class ca extends xd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return f_(e,n,"signInWithPassword",v2);case"emailLink":return E2(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return f_(e,r,"signUpPassword",y2);case"emailLink":return w2(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ti(t,e){return Hl(t,"POST","/v1/accounts:signInWithIdp",Ws(t,e))}/**
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
 */const b2="http://localhost";class Vs extends xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ti(e,n)}buildRequest(){const e={requestUri:b2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ra(n)}return e}}/**
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
 */function T2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function I2(t){const e=To(Io(t)).link,n=e?To(Io(e)).deep_link_id:null,r=To(Io(t)).deep_link_id;return(r?To(Io(r)).link:null)||r||n||e||t}class Dd{constructor(e){const n=To(Io(e)),r=n.apiKey??null,s=n.oobCode??null,i=T2(n.mode??null);de(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=I2(e);try{return new Dd(n)}catch{return null}}}/**
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
 */class Qi{constructor(){this.providerId=Qi.PROVIDER_ID}static credential(e,n){return ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dd.parseLink(n);return de(r,"argument-error"),ca._fromEmailAndCode(e,r.code,r.tenantId)}}Qi.PROVIDER_ID="password";Qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ca extends eb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fr extends Ca{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
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
 */class Ur extends Ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
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
 */class jr extends Ca{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
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
 */class Br extends Ca{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
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
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vn._fromIdTokenResponse(e,r,s),o=d_(r);return new Mi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=d_(r);return new Mi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function d_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class il extends Gn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new il(e,n,r,s)}}function tb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,i,e,r):i})}async function A2(t,e,n=!1){const r=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
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
 */async function R2(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Qr(r));const s="reauthenticate";try{const i=await aa(t,tb(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Od(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&In(r,"user-mismatch"),i}}/**
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
 */async function nb(t,e,n=!1){if(un(t.app))return Promise.reject(Qr(t));const r="signIn",s=await tb(t,r,e),i=await Mi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function S2(t,e){return nb(Yi(t),e)}/**
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
 */async function C2(t){const e=Yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function P2(t,e,n){return un(t.app)?Promise.reject(Qr(t)):S2(Ze(t),Qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&C2(t),r})}function k2(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function O2(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function N2(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function x2(t){return Ze(t).signOut()}const ol="__sak";/**
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
 */class rb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const D2=1e3,L2=10;class sb extends rb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ZO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,L2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sb.type="LOCAL";const M2=sb;/**
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
 */class ib extends rb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ib.type="SESSION";const ob=ib;/**
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
 */function V2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await V2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
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
 */function Ld(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class F2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ld("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jn(){return window}function U2(t){jn().location.href=t}/**
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
 */function ab(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function j2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function $2(){return ab()?self:null}/**
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
 */const cb="firebaseLocalStorageDb",H2=1,al="firebaseLocalStorage",lb="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function z2(){const t=indexedDB.deleteDatabase(cb);return new Pa(t).toPromise()}function ah(){const t=indexedDB.open(cb,H2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(al,{keyPath:lb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(al)?e(r):(r.close(),await z2(),e(await ah()))})})}async function p_(t,e,n){const r=Wl(t,!0).put({[lb]:e,value:n});return new Pa(r).toPromise()}async function q2(t,e){const n=Wl(t,!1).get(e),r=await new Pa(n).toPromise();return r===void 0?null:r.value}function m_(t,e){const n=Wl(t,!0).delete(e);return new Pa(n).toPromise()}const W2=800,K2=3;class ub{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>K2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ab()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance($2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await j2(),!this.activeServiceWorker)return;this.sender=new F2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await p_(e,ol,"1"),await m_(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>p_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>q2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>m_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wl(s,!1).getAll();return new Pa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ub.type="LOCAL";const G2=ub;new Sa(3e4,6e4);/**
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
 */function Y2(t,e){return e?or(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Md extends xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q2(t){return nb(t.auth,new Md(t),t.bypassAuthState)}function X2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),R2(n,new Md(t),t.bypassAuthState)}async function J2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),A2(n,new Md(t),t.bypassAuthState)}/**
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
 */class fb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q2;case"linkViaPopup":case"linkViaRedirect":return J2;case"reauthViaPopup":case"reauthViaRedirect":return X2;default:In(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Z2=new Sa(2e3,1e4);class fi extends fb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=Ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Z2.get())};e()}}fi.currentPopupAction=null;/**
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
 */const eN="pendingRedirect",Cc=new Map;class tN extends fb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cc.get(this.auth._key());if(!e){try{const r=await nN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cc.set(this.auth._key(),e)}return this.bypassAuthState||Cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nN(t,e){const n=iN(e),r=sN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rN(t,e){Cc.set(t._key(),e)}function sN(t){return or(t._redirectPersistence)}function iN(t){return Sc(eN,t.config.apiKey,t.name)}async function oN(t,e,n=!1){if(un(t.app))return Promise.reject(Qr(t));const r=Yi(t),s=Y2(r,e),o=await new tN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aN=10*60*1e3;class cN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hb(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aN&&this.cachedEventUids.clear(),this.cachedEventUids.has(g_(e))}saveEventToCache(e){this.cachedEventUids.add(g_(e)),this.lastProcessedEventTime=Date.now()}}function g_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hb(t);default:return!1}}/**
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
 */async function uN(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
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
 */const fN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hN=/^https?/;async function dN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uN(t);for(const n of e)try{if(pN(n))return}catch{}In(t,"unauthorized-domain")}function pN(t){const e=ih(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hN.test(n))return!1;if(fN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mN=new Sa(3e4,6e4);function __(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gN(t){return new Promise((e,n)=>{var s,i,o;function r(){__(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{__(),n(Un(t,"network-request-failed"))},timeout:mN.get()})}if((i=(s=jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=jn().gapi)!=null&&o.load)r();else{const a=c2("iframefcb");return jn()[a]=()=>{gapi.load?r():n(Un(t,"network-request-failed"))},Xw(`${a2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pc=null,e})}let Pc=null;function _N(t){return Pc=Pc||gN(t),Pc}/**
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
 */const yN=new Sa(5e3,15e3),vN="__/auth/iframe",EN="emulator/auth/iframe",wN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kd(e,EN):`https://${t.config.authDomain}/${vN}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=bN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ra(r).slice(1)}`}async function IN(t){const e=await _N(t),n=jn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:TN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=jn().setTimeout(()=>{i(o)},yN.get());function l(){jn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const AN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RN=500,SN=600,CN="_blank",PN="http://localhost";class y_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kN(t,e,n,r=RN,s=SN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...AN,width:r.toString(),height:s.toString(),top:i,left:o},u=Mt().toLowerCase();n&&(a=zw(u)?CN:n),$w(u)&&(e=e||PN,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(JO(u)&&a!=="_self")return ON(e||"",a),new y_(null);const d=window.open(e||"",a,f);de(d,t,"popup-blocked");try{d.focus()}catch{}return new y_(d)}function ON(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const NN="__/auth/handler",xN="emulator/auth/handler",DN=encodeURIComponent("fac");async function v_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof eb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Ca){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),u=l?`#${DN}=${encodeURIComponent(l)}`:"";return`${LN(t)}?${Ra(a).slice(1)}${u}`}function LN({config:t}){return t.emulator?kd(t,xN):`https://${t.authDomain}/${NN}`}/**
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
 */const of="webStorageSupport";class MN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ob,this._completeRedirectFn=oN,this._overrideRedirectResult=rN}async _openPopup(e,n,r,s){var o;pr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await v_(e,n,r,ih(),s);return kN(e,i,Ld())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await v_(e,n,r,ih(),s);return U2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IN(e),r=new cN(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(of,{type:of},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[of];i!==void 0&&n(!!i),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yw()||Hw()||Nd()}}const VN=MN;var E_="@firebase/auth",w_="1.11.0";/**
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
 */class FN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jN(t){Ms(new es("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qw(t)},u=new s2(r,s,i,l);return p2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ms(new es("auth-internal",e=>{const n=Yi(e.getProvider("auth").getImmediate());return(r=>new FN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(E_,w_,UN(t)),Fn(E_,w_,"esm2020")}/**
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
 */const BN=5*60,$N=Sw("authIdTokenMaxAge")||BN;let b_=null;const HN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$N)return;const s=n==null?void 0:n.token;b_!==s&&(b_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zN(t=Cd()){const e=$l(t,"auth");if(e.isInitialized())return e.getImmediate();const n=d2(t,{popupRedirectResolver:VN,persistence:[G2,M2,ob]}),r=Sw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=HN(i.toString());O2(n,o,()=>o(n.currentUser)),k2(n,a=>o(a))}}const s=Iw("auth");return s&&m2(n,`http://${s}`),n}function qN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}i2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jN("Browser");function T_(t){return typeof t=="string"?`'${t}'`:new WN().serialize(t)}const WN=function(){var e;class t{constructor(){bm(this,e,new Map)}compare(r,s){const i=typeof r,o=typeof s;return i==="string"&&o==="string"?r.localeCompare(s):i==="number"&&o==="number"?r-s:String.prototype.localeCompare.call(this.serialize(r,!0),this.serialize(s,!0))}serialize(r,s){if(r===null)return"null";switch(typeof r){case"string":return s?r:`'${r}'`;case"bigint":return`${r}n`;case"object":return this.$object(r);case"function":return this.$function(r)}return String(r)}serializeObject(r){const s=Object.prototype.toString.call(r);if(s!=="[object Object]")return this.serializeBuiltInType(s.length<10?`unknown:${s}`:s.slice(8,-1),r);const i=r.constructor,o=i===Object||i===void 0?"":i.name;if(o!==""&&globalThis[o]===i)return this.serializeBuiltInType(o,r);if(typeof r.toJSON=="function"){const a=r.toJSON();return o+(a!==null&&typeof a=="object"?this.$object(a):`(${this.serialize(a)})`)}return this.serializeObjectEntries(o,Object.entries(r))}serializeBuiltInType(r,s){const i=this["$"+r];if(i)return i.call(this,s);if(typeof(s==null?void 0:s.entries)=="function")return this.serializeObjectEntries(r,s.entries());throw new Error(`Cannot serialize ${r}`)}serializeObjectEntries(r,s){const i=Array.from(s).sort((a,l)=>this.compare(a[0],l[0]));let o=`${r}{`;for(let a=0;a<i.length;a++){const[l,u]=i[a];o+=`${this.serialize(l,!0)}:${this.serialize(u)}`,a<i.length-1&&(o+=",")}return o+"}"}$object(r){let s=mo(this,e).get(r);return s===void 0&&(mo(this,e).set(r,`#${mo(this,e).size}`),s=this.serializeObject(r),mo(this,e).set(r,s)),s}$function(r){const s=Function.prototype.toString.call(r);return s.slice(-15)==="[native code] }"?`${r.name||""}()[native]`:`${r.name}(${r.length})${s.replace(/\s*\n\s*/g,"")}`}$Array(r){let s="[";for(let i=0;i<r.length;i++)s+=this.serialize(r[i]),i<r.length-1&&(s+=",");return s+"]"}$Date(r){try{return`Date(${r.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(r){return`ArrayBuffer[${new Uint8Array(r).join(",")}]`}$Set(r){return`Set${this.$Array(Array.from(r).sort((s,i)=>this.compare(s,i)))}`}$Map(r){return this.serializeObjectEntries("Map",r.entries())}}e=new WeakMap;for(const n of["Error","RegExp","URL"])t.prototype["$"+n]=function(r){return`${n}(${r})`};for(const n of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join(",")}]`};for(const n of["BigInt64Array","BigUint64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join("n,")}${r.length>0?"n":""}]`};return t}();function KN(t,e){return t===e||T_(t)===T_(e)}function GN(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||YN;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=QN(u,s)}i=a+1}return n}function YN(t){return t.includes("%")?decodeURIComponent(t):t}function QN(t,e){try{return e(t)}catch{return t}}const lc=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function I_(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!lc.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!lc.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!lc.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!lc.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!XN(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function XN(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function _n(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=_n(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:_n(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=_n(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=_n(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(_n(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(_n(i),_n(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(_n(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const JN={path:"/",watch:!0,decode:t=>ra(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},uc=window.cookieStore;function ZN(t,e){var u;const n={...JN,...e};n.filter??(n.filter=f=>f===t);const r=A_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=_n(i?void 0:r[t]??((u=n.default)==null?void 0:u.call(n))),l=s&&!i?nx(a,s,n.watch&&n.watch!=="shallow"):Qt(a);{let f=null;try{!uc&&typeof BroadcastChannel<"u"&&(f=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const d=(w=!1)=>{!w&&(n.readonly||KN(l.value,r[t]))||(tx(t,l.value,n),r[t]=_n(l.value),f==null||f.postMessage({value:n.encode(l.value)}))},p=w=>{var P;const k=w.refresh?(P=A_(n))==null?void 0:P[t]:n.decode(w.value);g=!0,l.value=k,r[t]=_n(k),qn(()=>{g=!1})};let g=!1;const y=!!Ea();if(y&&Uc(()=>{g=!0,d(),f==null||f.close()}),uc){const w=k=>{const P=k.changed.find(_=>_.name===t),R=k.deleted.find(_=>_.name===t);P&&p({value:P.value}),R&&p({value:null})};uc.addEventListener("change",w),y&&Uc(()=>uc.removeEventListener("change",w))}else f&&(f.onmessage=({data:w})=>p(w));n.watch&&Vn(l,()=>{g||d()},{deep:n.watch!=="shallow"}),o&&d(o)}return l}function A_(t={}){return GN(document.cookie,t)}function ex(t,e,n={}){return e==null?I_(t,e,{...n,maxAge:-1}):I_(t,e,n)}function tx(t,e,n={}){document.cookie=ex(t,e,n)}const R_=2147483647;function nx(t,e,n){let r,s,i=0;const o=n?Qt(t):{value:t};return Ea()&&Uc(()=>{s==null||s(),clearTimeout(r)}),eA((a,l)=>{n&&(s=Vn(o,l));function u(){i=0,clearTimeout(r);const f=e-i,d=f<R_?f:R_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(f){u(),o.value=f,l()}}})}const rx=(...t)=>t.find(e=>e!==void 0);function sx(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const l=a??t.trailingSlash;if(!i||l!=="append"&&l!=="remove")return i;if(typeof i=="string")return fc(i,l);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:fc(u,l)}}function s(i){const o=At(),a=zs(),l=Fe(()=>!!i.target&&i.target!=="_self"),u=Fe(()=>{const k=i.to||i.href||"";return typeof k=="string"&&wr(k,{acceptRelative:!0})}),f=Jo("RouterLink"),d=f&&typeof f!="string"?f.useLink:void 0,p=Fe(()=>{if(i.external)return!0;const k=i.to||i.href||"";return typeof k=="object"?!1:k===""||u.value}),g=Fe(()=>{const k=i.to||i.href||"";return p.value?k:r(k,o.resolve,i.trailingSlash)}),y=p.value||d==null?void 0:d({...i,to:g}),w=Fe(()=>{var P;const k=i.trailingSlash??t.trailingSlash;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const R=typeof g.value=="object"&&"path"in g.value?qf(g.value):g.value,_=typeof R=="object"?o.resolve(R).href:R;return fc(_,k)}return typeof g.value=="object"?((P=o.resolve(g.value))==null?void 0:P.href)??null:fc(Ll(a.app.baseURL,g.value),k)});return{to:g,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:w,isActive:(y==null?void 0:y.isActive)??Fe(()=>g.value===o.currentRoute.value.path),isExactActive:(y==null?void 0:y.isExactActive)??Fe(()=>g.value===o.currentRoute.value.path),route:(y==null?void 0:y.route)??Fe(()=>o.resolve(g.value)),async navigate(k){await wS(w.value,{replace:i.replace,external:p.value||l.value})}}}return An({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=At(),{to:l,href:u,navigate:f,isExternal:d,hasTarget:p,isAbsoluteUrl:g}=s(i),y=Ns(!1),w=Qt(null),k=_=>{var S;w.value=i.custom?(S=_==null?void 0:_.$el)==null?void 0:S.nextElementSibling:_==null?void 0:_.$el};function P(_){var S,D;return!y.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===_:((S=i.prefetchOn)==null?void 0:S[_])??((D=t.prefetchOn)==null?void 0:D[_]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!cx()}async function R(_=Be()){if(y.value)return;y.value=!0;const S=typeof l.value=="string"?l.value:d.value?qf(l.value):a.resolve(l.value).fullPath,D=d.value?new URL(S,window.location.href).href:S;await Promise.all([_.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&Ew(l.value,a).catch(()=>{})])}if(P("visibility")){const _=Be();let S,D=null;kl(()=>{const M=ox();jl(()=>{S=Zf(()=>{var T;(T=w==null?void 0:w.value)!=null&&T.tagName&&(D=M.observe(w.value,async()=>{D==null||D(),D=null,await R(_)}))})})}),Gi(()=>{S&&jP(S),D==null||D(),D=null})}return()=>{var D;if(!d.value&&!p.value&&!n(l.value)){const M={ref:k,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(P("interaction")&&(M.onPointerenter=R.bind(null,void 0),M.onFocus=R.bind(null,void 0)),y.value&&(M.class=i.prefetchedClass||t.prefetchedClass),M.rel=i.rel||void 0),ut(Jo("RouterLink"),M,o.default)}const _=i.target||null,S=rx(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:R,get route(){if(!u.value)return;const M=new URL(u.value,window.location.href);return{path:M.pathname,fullPath:M.pathname,get query(){return dd(M.search)},hash:M.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:S,target:_,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:ut("a",{ref:w,href:u.value||null,rel:S,target:_,onClick:M=>{if(!(d.value||p.value))return M.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},(D=o.default)==null?void 0:D.call(o))}}})}const ix=sx(sS);function fc(t,e){const n=e==="append"?xE:xi;return wr(t)&&!t.startsWith("http")?t:n(t,!0)}function ox(){const t=Be();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const ax=/2g/;function cx(){const t=navigator.connection;return!!(t&&(t.saveData||ax.test(t.effectiveType)))}var S_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,db;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function E(){}E.prototype=v.prototype,T.D=v.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(I,N,O){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return v.prototype[N].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var N=0;16>N;++N)I[N]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(N=0;16>N;++N)I[N]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=T.g[0],E=T.g[1],N=T.g[2];var O=T.g[3],A=v+(O^E&(N^O))+I[0]+3614090360&4294967295;v=E+(A<<7&4294967295|A>>>25),A=O+(N^v&(E^N))+I[1]+3905402710&4294967295,O=v+(A<<12&4294967295|A>>>20),A=N+(E^O&(v^E))+I[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=E+(v^N&(O^v))+I[3]+3250441966&4294967295,E=N+(A<<22&4294967295|A>>>10),A=v+(O^E&(N^O))+I[4]+4118548399&4294967295,v=E+(A<<7&4294967295|A>>>25),A=O+(N^v&(E^N))+I[5]+1200080426&4294967295,O=v+(A<<12&4294967295|A>>>20),A=N+(E^O&(v^E))+I[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=E+(v^N&(O^v))+I[7]+4249261313&4294967295,E=N+(A<<22&4294967295|A>>>10),A=v+(O^E&(N^O))+I[8]+1770035416&4294967295,v=E+(A<<7&4294967295|A>>>25),A=O+(N^v&(E^N))+I[9]+2336552879&4294967295,O=v+(A<<12&4294967295|A>>>20),A=N+(E^O&(v^E))+I[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=E+(v^N&(O^v))+I[11]+2304563134&4294967295,E=N+(A<<22&4294967295|A>>>10),A=v+(O^E&(N^O))+I[12]+1804603682&4294967295,v=E+(A<<7&4294967295|A>>>25),A=O+(N^v&(E^N))+I[13]+4254626195&4294967295,O=v+(A<<12&4294967295|A>>>20),A=N+(E^O&(v^E))+I[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=E+(v^N&(O^v))+I[15]+1236535329&4294967295,E=N+(A<<22&4294967295|A>>>10),A=v+(N^O&(E^N))+I[1]+4129170786&4294967295,v=E+(A<<5&4294967295|A>>>27),A=O+(E^N&(v^E))+I[6]+3225465664&4294967295,O=v+(A<<9&4294967295|A>>>23),A=N+(v^E&(O^v))+I[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=E+(O^v&(N^O))+I[0]+3921069994&4294967295,E=N+(A<<20&4294967295|A>>>12),A=v+(N^O&(E^N))+I[5]+3593408605&4294967295,v=E+(A<<5&4294967295|A>>>27),A=O+(E^N&(v^E))+I[10]+38016083&4294967295,O=v+(A<<9&4294967295|A>>>23),A=N+(v^E&(O^v))+I[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=E+(O^v&(N^O))+I[4]+3889429448&4294967295,E=N+(A<<20&4294967295|A>>>12),A=v+(N^O&(E^N))+I[9]+568446438&4294967295,v=E+(A<<5&4294967295|A>>>27),A=O+(E^N&(v^E))+I[14]+3275163606&4294967295,O=v+(A<<9&4294967295|A>>>23),A=N+(v^E&(O^v))+I[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=E+(O^v&(N^O))+I[8]+1163531501&4294967295,E=N+(A<<20&4294967295|A>>>12),A=v+(N^O&(E^N))+I[13]+2850285829&4294967295,v=E+(A<<5&4294967295|A>>>27),A=O+(E^N&(v^E))+I[2]+4243563512&4294967295,O=v+(A<<9&4294967295|A>>>23),A=N+(v^E&(O^v))+I[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=E+(O^v&(N^O))+I[12]+2368359562&4294967295,E=N+(A<<20&4294967295|A>>>12),A=v+(E^N^O)+I[5]+4294588738&4294967295,v=E+(A<<4&4294967295|A>>>28),A=O+(v^E^N)+I[8]+2272392833&4294967295,O=v+(A<<11&4294967295|A>>>21),A=N+(O^v^E)+I[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=E+(N^O^v)+I[14]+4259657740&4294967295,E=N+(A<<23&4294967295|A>>>9),A=v+(E^N^O)+I[1]+2763975236&4294967295,v=E+(A<<4&4294967295|A>>>28),A=O+(v^E^N)+I[4]+1272893353&4294967295,O=v+(A<<11&4294967295|A>>>21),A=N+(O^v^E)+I[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=E+(N^O^v)+I[10]+3200236656&4294967295,E=N+(A<<23&4294967295|A>>>9),A=v+(E^N^O)+I[13]+681279174&4294967295,v=E+(A<<4&4294967295|A>>>28),A=O+(v^E^N)+I[0]+3936430074&4294967295,O=v+(A<<11&4294967295|A>>>21),A=N+(O^v^E)+I[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=E+(N^O^v)+I[6]+76029189&4294967295,E=N+(A<<23&4294967295|A>>>9),A=v+(E^N^O)+I[9]+3654602809&4294967295,v=E+(A<<4&4294967295|A>>>28),A=O+(v^E^N)+I[12]+3873151461&4294967295,O=v+(A<<11&4294967295|A>>>21),A=N+(O^v^E)+I[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=E+(N^O^v)+I[2]+3299628645&4294967295,E=N+(A<<23&4294967295|A>>>9),A=v+(N^(E|~O))+I[0]+4096336452&4294967295,v=E+(A<<6&4294967295|A>>>26),A=O+(E^(v|~N))+I[7]+1126891415&4294967295,O=v+(A<<10&4294967295|A>>>22),A=N+(v^(O|~E))+I[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=E+(O^(N|~v))+I[5]+4237533241&4294967295,E=N+(A<<21&4294967295|A>>>11),A=v+(N^(E|~O))+I[12]+1700485571&4294967295,v=E+(A<<6&4294967295|A>>>26),A=O+(E^(v|~N))+I[3]+2399980690&4294967295,O=v+(A<<10&4294967295|A>>>22),A=N+(v^(O|~E))+I[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=E+(O^(N|~v))+I[1]+2240044497&4294967295,E=N+(A<<21&4294967295|A>>>11),A=v+(N^(E|~O))+I[8]+1873313359&4294967295,v=E+(A<<6&4294967295|A>>>26),A=O+(E^(v|~N))+I[15]+4264355552&4294967295,O=v+(A<<10&4294967295|A>>>22),A=N+(v^(O|~E))+I[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=E+(O^(N|~v))+I[13]+1309151649&4294967295,E=N+(A<<21&4294967295|A>>>11),A=v+(N^(E|~O))+I[4]+4149444226&4294967295,v=E+(A<<6&4294967295|A>>>26),A=O+(E^(v|~N))+I[11]+3174756917&4294967295,O=v+(A<<10&4294967295|A>>>22),A=N+(v^(O|~E))+I[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=E+(O^(N|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+N&4294967295,T.g[3]=T.g[3]+O&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var E=v-this.blockSize,I=this.B,N=this.h,O=0;O<v;){if(N==0)for(;O<=E;)s(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<v;)if(I[N++]=T.charCodeAt(O++),N==this.blockSize){s(this,I),N=0;break}}else for(;O<v;)if(I[N++]=T[O++],N==this.blockSize){s(this,I),N=0;break}}this.h=N,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var E=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=E&255,E/=256;for(this.u(T),T=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)T[E++]=this.g[v]>>>I&255;return T};function i(T,v){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=v(T)}function o(T,v){this.h=v;for(var E=[],I=!0,N=T.length-1;0<=N;N--){var O=T[N]|0;I&&O==v||(E[N]=O,I=!1)}this.g=E}var a={};function l(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return k(u(-T));for(var v=[],E=1,I=0;T>=E;I++)v[I]=T/E|0,E*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return k(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(v,8)),I=d,N=0;N<T.length;N+=8){var O=Math.min(8,T.length-N),A=parseInt(T.substring(N,N+O),v);8>O?(O=u(Math.pow(v,O)),I=I.j(O).add(u(A))):(I=I.j(E),I=I.add(u(A)))}return I}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(w(this))return-k(this).m();for(var T=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);T+=(0<=I?I:4294967296+I)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(w(this))return"-"+k(this).toString(T);for(var v=u(Math.pow(T,6)),E=this,I="";;){var N=S(E,v).g;E=P(E,N.j(v));var O=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=N,y(E))return O+I;for(;6>O.length;)O="0"+O;I=O+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function w(T){return T.h==-1}t.l=function(T){return T=P(this,T),w(T)?-1:y(T)?0:1};function k(T){for(var v=T.g.length,E=[],I=0;I<v;I++)E[I]=~T.g[I];return new o(E,~T.h).add(p)}t.abs=function(){return w(this)?k(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0,N=0;N<=v;N++){var O=I+(this.i(N)&65535)+(T.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(T.i(N)>>>16);I=A>>>16,O&=65535,A&=65535,E[N]=A<<16|O}return new o(E,E[E.length-1]&-2147483648?-1:0)};function P(T,v){return T.add(k(v))}t.j=function(T){if(y(this)||y(T))return d;if(w(this))return w(T)?k(this).j(k(T)):k(k(this).j(T));if(w(T))return k(this.j(k(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var N=0;N<T.g.length;N++){var O=this.i(I)>>>16,A=this.i(I)&65535,ge=T.i(N)>>>16,ve=T.i(N)&65535;E[2*I+2*N]+=A*ve,R(E,2*I+2*N),E[2*I+2*N+1]+=O*ve,R(E,2*I+2*N+1),E[2*I+2*N+1]+=A*ge,R(E,2*I+2*N+1),E[2*I+2*N+2]+=O*ge,R(E,2*I+2*N+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new o(E,0)};function R(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function _(T,v){this.g=T,this.h=v}function S(T,v){if(y(v))throw Error("division by zero");if(y(T))return new _(d,d);if(w(T))return v=S(k(T),v),new _(k(v.g),k(v.h));if(w(v))return v=S(T,k(v)),new _(k(v.g),v.h);if(30<T.g.length){if(w(T)||w(v))throw Error("slowDivide_ only works with positive integers.");for(var E=p,I=v;0>=I.l(T);)E=D(E),I=D(I);var N=M(E,1),O=M(I,1);for(I=M(I,2),E=M(E,2);!y(I);){var A=O.add(I);0>=A.l(T)&&(N=N.add(E),O=A),I=M(I,1),E=M(E,1)}return v=P(T,N.j(v)),new _(N,v)}for(N=d;0<=T.l(v);){for(E=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),O=u(E),A=O.j(v);w(A)||0<A.l(T);)E-=I,O=u(E),A=O.j(v);y(O)&&(O=p),N=N.add(O),T=P(T,A)}return new _(N,T)}t.A=function(T){return S(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&T.i(I);return new o(E,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|T.i(I);return new o(E,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^T.i(I);return new o(E,this.h^T.h)};function D(T){for(var v=T.g.length+1,E=[],I=0;I<v;I++)E[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(E,T.h)}function M(T,v){var E=v>>5;v%=32;for(var I=T.g.length-E,N=[],O=0;O<I;O++)N[O]=0<v?T.i(O+E)>>>v|T.i(O+E+1)<<32-v:T.i(O+E);return new o(N,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,db=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Xr=o}).apply(typeof S_<"u"?S_:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pb,Ao,mb,kc,ch,gb,_b,yb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,h,m){return c==Array.prototype||c==Object.prototype||(c[h]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var h=0;h<c.length;++h){var m=c[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,h){if(h)e:{var m=r;c=c.split(".");for(var b=0;b<c.length-1;b++){var L=c[b];if(!(L in m))break e;m=m[L]}c=c[c.length-1],b=m[c],h=h(b),h!=b&&h!=null&&e(m,c,{configurable:!0,writable:!0,value:h})}}function i(c,h){c instanceof String&&(c+="");var m=0,b=!1,L={next:function(){if(!b&&m<c.length){var F=m++;return{value:h(F,c[F]),done:!1}}return b=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var h=typeof c;return h=h!="object"?h:c?Array.isArray(c)?"array":h:"null",h=="array"||h=="object"&&typeof c.length=="number"}function u(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function f(c,h,m){return c.call.apply(c.bind,arguments)}function d(c,h,m){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,b),c.apply(h,L)}}return function(){return c.apply(h,arguments)}}function p(c,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,p.apply(null,arguments)}function g(c,h){var m=Array.prototype.slice.call(arguments,1);return function(){var b=m.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function y(c,h){function m(){}m.prototype=h.prototype,c.aa=h.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(b,L,F){for(var Y=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)Y[Me-2]=arguments[Me];return h.prototype[L].apply(b,Y)}}function w(c){const h=c.length;if(0<h){const m=Array(h);for(let b=0;b<h;b++)m[b]=c[b];return m}return[]}function k(c,h){for(let m=1;m<arguments.length;m++){const b=arguments[m];if(l(b)){const L=c.length||0,F=b.length||0;c.length=L+F;for(let Y=0;Y<F;Y++)c[L+Y]=b[Y]}else c.push(b)}}class P{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function R(c){return/^[\s\xa0]*$/.test(c)}function _(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function S(c){return S[" "](c),c}S[" "]=function(){};var D=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function M(c,h,m){for(const b in c)h.call(m,c[b],b,c)}function T(c,h){for(const m in c)h.call(void 0,c[m],m,c)}function v(c){const h={};for(const m in c)h[m]=c[m];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,h){let m,b;for(let L=1;L<arguments.length;L++){b=arguments[L];for(m in b)c[m]=b[m];for(let F=0;F<E.length;F++)m=E[F],Object.prototype.hasOwnProperty.call(b,m)&&(c[m]=b[m])}}function N(c){var h=1;c=c.split(":");const m=[];for(;0<h&&c.length;)m.push(c.shift()),h--;return c.length&&m.push(c.join(":")),m}function O(c){a.setTimeout(()=>{throw c},0)}function A(){var c=Ue;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class ge{constructor(){this.h=this.g=null}add(h,m){const b=ve.get();b.set(h,m),this.h?this.h.next=b:this.g=b,this.h=b}}var ve=new P(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,Ue=new ge,mn=()=>{const c=a.Promise.resolve(void 0);se=()=>{c.then(rn)}};var rn=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(m){O(m)}var h=ve;h.j(c),100>h.h&&(h.h++,c.next=h.g,h.g=c)}ne=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var Tr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return c}();function Rn(c,h){if(Ye.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget){if(D){e:{try{S(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else m=="mouseover"?h=c.fromElement:m=="mouseout"&&(h=c.toElement);this.relatedTarget=h,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:zt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Rn.aa.h.call(this)}}y(Rn,Ye);var zt={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(c,h,m,b,L){this.listener=c,this.proxy=null,this.src=h,this.type=m,this.capture=!!b,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ie(c){this.src=c,this.g={},this.h=0}Ie.prototype.add=function(c,h,m,b,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Y=C(c,h,b,L);return-1<Y?(h=c[Y],m||(h.fa=!1)):(h=new J(h,this.src,F,!!b,L),h.fa=m,c.push(h)),h};function De(c,h){var m=h.type;if(m in c.g){var b=c.g[m],L=Array.prototype.indexOf.call(b,h,void 0),F;(F=0<=L)&&Array.prototype.splice.call(b,L,1),F&&(re(h),c.g[m].length==0&&(delete c.g[m],c.h--))}}function C(c,h,m,b){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==h&&F.capture==!!m&&F.ha==b)return L}return-1}var x="closure_lm_"+(1e6*Math.random()|0),V={};function H(c,h,m,b,L){if(Array.isArray(h)){for(var F=0;F<h.length;F++)H(c,h[F],m,b,L);return null}return m=ae(m),c&&c[j]?c.K(h,m,u(b)?!!b.capture:!1,L):U(c,h,m,!1,b,L)}function U(c,h,m,b,L,F){if(!h)throw Error("Invalid event type");var Y=u(L)?!!L.capture:!!L,Me=le(c);if(Me||(c[x]=Me=new Ie(c)),m=Me.add(h,m,b,Y,F),m.proxy)return m;if(b=z(),m.proxy=b,b.src=c,b.listener=m,c.addEventListener)Tr||(L=Y),L===void 0&&(L=!1),c.addEventListener(h.toString(),b,L);else if(c.attachEvent)c.attachEvent(K(h.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return m}function z(){function c(m){return h.call(c.src,c.listener,m)}const h=q;return c}function Q(c,h,m,b,L){if(Array.isArray(h))for(var F=0;F<h.length;F++)Q(c,h[F],m,b,L);else b=u(b)?!!b.capture:!!b,m=ae(m),c&&c[j]?(c=c.i,h=String(h).toString(),h in c.g&&(F=c.g[h],m=C(F,m,b,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[h],c.h--)))):c&&(c=le(c))&&(h=c.g[h.toString()],c=-1,h&&(c=C(h,m,b,L)),(m=-1<c?h[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[j])De(h.i,c);else{var m=c.type,b=c.proxy;h.removeEventListener?h.removeEventListener(m,b,c.capture):h.detachEvent?h.detachEvent(K(m),b):h.addListener&&h.removeListener&&h.removeListener(b),(m=le(h))?(De(m,c),m.h==0&&(m.src=null,h[x]=null)):re(c)}}}function K(c){return c in V?V[c]:V[c]="on"+c}function q(c,h){if(c.da)c=!0;else{h=new Rn(h,this);var m=c.listener,b=c.ha||c.src;c.fa&&G(c),c=m.call(b,h)}return c}function le(c){return c=c[x],c instanceof Ie?c:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(c){return typeof c=="function"?c:(c[X]||(c[X]=function(h){return c.handleEvent(h)}),c[X])}function ie(){Ge.call(this),this.i=new Ie(this),this.M=this,this.F=null}y(ie,Ge),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(c,h,m,b){Q(this,c,h,m,b)};function he(c,h){var m,b=c.F;if(b)for(m=[];b;b=b.F)m.push(b);if(c=c.M,b=h.type||h,typeof h=="string")h=new Ye(h,c);else if(h instanceof Ye)h.target=h.target||c;else{var L=h;h=new Ye(b,c),I(h,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Y=h.g=m[F];L=Pe(Y,b,!0,h)&&L}if(Y=h.g=c,L=Pe(Y,b,!0,h)&&L,L=Pe(Y,b,!1,h)&&L,m)for(F=0;F<m.length;F++)Y=h.g=m[F],L=Pe(Y,b,!1,h)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,h;for(h in c.g){for(var m=c.g[h],b=0;b<m.length;b++)re(m[b]);delete c.g[h],c.h--}}this.F=null},ie.prototype.K=function(c,h,m,b){return this.i.add(String(c),h,!1,m,b)},ie.prototype.L=function(c,h,m,b){return this.i.add(String(c),h,!0,m,b)};function Pe(c,h,m,b){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,F=0;F<h.length;++F){var Y=h[F];if(Y&&!Y.da&&Y.capture==m){var Me=Y.listener,vt=Y.ha||Y.src;Y.fa&&De(c.i,Y),L=Me.call(vt,b)!==!1&&L}}return L&&!b.defaultPrevented}function Se(c,h,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(c,h||0)}function _t(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,_t(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class ht extends Ge{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(c){Ge.call(this),this.h=c,this.g={}}y(yt,Ge);var St=[];function Ir(c){M(c.g,function(h,m){this.g.hasOwnProperty(m)&&G(h)},c),c.g={}}yt.prototype.N=function(){yt.aa.N.call(this),Ir(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ys=a.JSON.stringify,Ft=a.JSON.parse,sn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Qs(){}Qs.prototype.h=null;function kp(c){return c.h||(c.h=c.i())}function Op(){}var no={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yu(){Ye.call(this,"d")}y(yu,Ye);function vu(){Ye.call(this,"c")}y(vu,Ye);var ps={},Np=null;function Va(){return Np=Np||new ie}ps.La="serverreachability";function xp(c){Ye.call(this,ps.La,c)}y(xp,Ye);function ro(c){const h=Va();he(h,new xp(h))}ps.STAT_EVENT="statevent";function Dp(c,h){Ye.call(this,ps.STAT_EVENT,c),this.stat=h}y(Dp,Ye);function Ut(c){const h=Va();he(h,new Dp(h,c))}ps.Ma="timingevent";function Lp(c,h){Ye.call(this,ps.Ma,c),this.size=h}y(Lp,Ye);function so(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function io(){this.g=!0}io.prototype.xa=function(){this.g=!1};function W0(c,h,m,b,L,F){c.info(function(){if(c.g)if(F)for(var Y="",Me=F.split("&"),vt=0;vt<Me.length;vt++){var Ce=Me[vt].split("=");if(1<Ce.length){var Ct=Ce[0];Ce=Ce[1];var Pt=Ct.split("_");Y=2<=Pt.length&&Pt[1]=="type"?Y+(Ct+"="+Ce+"&"):Y+(Ct+"=redacted&")}}else Y=null;else Y=F;return"XMLHTTP REQ ("+b+") [attempt "+L+"]: "+h+`
`+m+`
`+Y})}function K0(c,h,m,b,L,F,Y){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+L+"]: "+h+`
`+m+`
`+F+" "+Y})}function Xs(c,h,m,b){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+Y0(c,m)+(b?" "+b:"")})}function G0(c,h){c.info(function(){return"TIMEOUT: "+h})}io.prototype.info=function(){};function Y0(c,h){if(!c.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var b=m[c];if(!(2>b.length)){var L=b[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return Ys(m)}catch{return h}}var Fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Eu;function Ua(){}y(Ua,Qs),Ua.prototype.g=function(){return new XMLHttpRequest},Ua.prototype.i=function(){return{}},Eu=new Ua;function Ar(c,h,m,b){this.j=c,this.i=h,this.l=m,this.R=b||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vp}function Vp(){this.i=null,this.g="",this.h=!1}var Fp={},wu={};function bu(c,h,m){c.L=1,c.v=Ha(Yn(h)),c.m=m,c.P=!0,Up(c,null)}function Up(c,h){c.F=Date.now(),ja(c),c.A=Yn(c.v);var m=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Zp(m.i,"t",b),c.C=0,m=c.j.J,c.h=new Vp,c.g=_m(c.j,m?h:null,!c.m),0<c.O&&(c.M=new ht(p(c.Y,c,c.g),c.O)),h=c.U,m=c.g,b=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(St[0]=L.toString()),L=St);for(var F=0;F<L.length;F++){var Y=H(m,L[F],b||h.handleEvent,!1,h.h||h);if(!Y)break;h.g[Y.key]=Y}h=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,h)):(c.u="GET",c.g.ea(c.A,c.u,null,h)),ro(),W0(c.i,c.u,c.A,c.l,c.R,c.m)}Ar.prototype.ca=function(c){c=c.target;const h=this.M;h&&Qn(c)==3?h.j():this.Y(c)},Ar.prototype.Y=function(c){try{if(c==this.g)e:{const Pt=Qn(this.g);var h=this.g.Ba();const ei=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||om(this.g)))){this.J||Pt!=4||h==7||(h==8||0>=ei?ro(3):ro(2)),Tu(this);var m=this.g.Z();this.X=m;t:if(jp(this)){var b=om(this.g);c="";var L=b.length,F=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ms(this),oo(this);var Y="";break t}this.h.i=new a.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,c+=this.h.i.decode(b[h],{stream:!(F&&h==L-1)});b.length=0,this.h.g+=c,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,K0(this.i,this.u,this.A,this.l,this.R,Pt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,vt=this.g;if((Me=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(Me)){var Ce=Me;break t}}Ce=null}if(m=Ce)Xs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Iu(this,m);else{this.o=!1,this.s=3,Ut(12),ms(this),oo(this);break e}}if(this.P){m=!0;let gn;for(;!this.J&&this.C<Y.length;)if(gn=Q0(this,Y),gn==wu){Pt==4&&(this.s=4,Ut(14),m=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==Fp){this.s=4,Ut(15),Xs(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else Xs(this.i,this.l,gn,null),Iu(this,gn);if(jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||Y.length!=0||this.h.h||(this.s=1,Ut(16),m=!1),this.o=this.o&&m,!m)Xs(this.i,this.l,Y,"[Invalid Chunked Response]"),ms(this),oo(this);else if(0<Y.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),ku(Ct),Ct.M=!0,Ut(11))}}else Xs(this.i,this.l,Y,null),Iu(this,Y);Pt==4&&ms(this),this.o&&!this.J&&(Pt==4?dm(this.j,this):(this.o=!1,ja(this)))}else dI(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),ms(this),oo(this)}}}catch{}finally{}};function jp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Q0(c,h){var m=c.C,b=h.indexOf(`
`,m);return b==-1?wu:(m=Number(h.substring(m,b)),isNaN(m)?Fp:(b+=1,b+m>h.length?wu:(h=h.slice(b,b+m),c.C=b+m,h)))}Ar.prototype.cancel=function(){this.J=!0,ms(this)};function ja(c){c.S=Date.now()+c.I,Bp(c,c.I)}function Bp(c,h){if(c.B!=null)throw Error("WatchDog timer not null");c.B=so(p(c.ba,c),h)}function Tu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Ar.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(G0(this.i,this.A),this.L!=2&&(ro(),Ut(17)),ms(this),this.s=2,oo(this)):Bp(this,this.S-c)};function oo(c){c.j.G==0||c.J||dm(c.j,c)}function ms(c){Tu(c);var h=c.M;h&&typeof h.ma=="function"&&h.ma(),c.M=null,Ir(c.U),c.g&&(h=c.g,c.g=null,h.abort(),h.ma())}function Iu(c,h){try{var m=c.j;if(m.G!=0&&(m.g==c||Au(m.h,c))){if(!c.K&&Au(m.h,c)&&m.G==3){try{var b=m.Da.g.parse(h)}catch{b=null}if(Array.isArray(b)&&b.length==3){var L=b;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Ya(m),Ka(m);else break e;Pu(m),Ut(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=so(p(m.Za,m),6e3));if(1>=zp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else _s(m,11)}else if((c.K||m.g==c)&&Ya(m),!R(h))for(L=m.Da.g.parse(h),h=0;h<L.length;h++){let Ce=L[h];if(m.T=Ce[0],Ce=Ce[1],m.G==2)if(Ce[0]=="c"){m.K=Ce[1],m.ia=Ce[2];const Ct=Ce[3];Ct!=null&&(m.la=Ct,m.j.info("VER="+m.la));const Pt=Ce[4];Pt!=null&&(m.Aa=Pt,m.j.info("SVER="+m.Aa));const ei=Ce[5];ei!=null&&typeof ei=="number"&&0<ei&&(b=1.5*ei,m.L=b,m.j.info("backChannelRequestTimeoutMs_="+b)),b=m;const gn=c.g;if(gn){const Xa=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xa){var F=b.h;F.g||Xa.indexOf("spdy")==-1&&Xa.indexOf("quic")==-1&&Xa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Ru(F,F.h),F.h=null))}if(b.D){const Ou=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ou&&(b.ya=Ou,$e(b.I,b.D,Ou))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),b=m;var Y=c;if(b.qa=gm(b,b.J?b.ia:null,b.W),Y.K){qp(b.h,Y);var Me=Y,vt=b.L;vt&&(Me.I=vt),Me.B&&(Tu(Me),ja(Me)),b.g=Y}else fm(b);0<m.i.length&&Ga(m)}else Ce[0]!="stop"&&Ce[0]!="close"||_s(m,7);else m.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?_s(m,7):Cu(m):Ce[0]!="noop"&&m.l&&m.l.ta(Ce),m.v=0)}}ro(4)}catch{}}var X0=class{constructor(c,h){this.g=c,this.map=h}};function $p(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function zp(c){return c.h?1:c.g?c.g.size:0}function Au(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Ru(c,h){c.g?c.g.add(h):c.h=h}function qp(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}$p.prototype.cancel=function(){if(this.i=Wp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Wp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const m of c.g.values())h=h.concat(m.D);return h}return w(c.i)}function J0(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var h=[],m=c.length,b=0;b<m;b++)h.push(c[b]);return h}h=[],m=0;for(b in c)h[m++]=c[b];return h}function Z0(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var h=[];c=c.length;for(var m=0;m<c;m++)h.push(m);return h}h=[],m=0;for(const b in c)h[m++]=b;return h}}}function Kp(c,h){if(c.forEach&&typeof c.forEach=="function")c.forEach(h,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,h,void 0);else for(var m=Z0(c),b=J0(c),L=b.length,F=0;F<L;F++)h.call(void 0,b[F],m&&m[F],c)}var Gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eI(c,h){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var b=c[m].indexOf("="),L=null;if(0<=b){var F=c[m].substring(0,b);L=c[m].substring(b+1)}else F=c[m];h(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function gs(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof gs){this.h=c.h,Ba(this,c.j),this.o=c.o,this.g=c.g,$a(this,c.s),this.l=c.l;var h=c.i,m=new lo;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Yp(this,m),this.m=c.m}else c&&(h=String(c).match(Gp))?(this.h=!1,Ba(this,h[1]||"",!0),this.o=ao(h[2]||""),this.g=ao(h[3]||"",!0),$a(this,h[4]),this.l=ao(h[5]||"",!0),Yp(this,h[6]||"",!0),this.m=ao(h[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}gs.prototype.toString=function(){var c=[],h=this.j;h&&c.push(co(h,Qp,!0),":");var m=this.g;return(m||h=="file")&&(c.push("//"),(h=this.o)&&c.push(co(h,Qp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(co(m,m.charAt(0)=="/"?rI:nI,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",co(m,iI)),c.join("")};function Yn(c){return new gs(c)}function Ba(c,h,m){c.j=m?ao(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function $a(c,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);c.s=h}else c.s=null}function Yp(c,h,m){h instanceof lo?(c.i=h,oI(c.i,c.h)):(m||(h=co(h,sI)),c.i=new lo(h,c.h))}function $e(c,h,m){c.i.set(h,m)}function Ha(c){return $e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ao(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function co(c,h,m){return typeof c=="string"?(c=encodeURI(c).replace(h,tI),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function tI(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Qp=/[#\/\?@]/g,nI=/[#\?:]/g,rI=/[#\?]/g,sI=/[#\?@]/g,iI=/#/g;function lo(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function Rr(c){c.g||(c.g=new Map,c.h=0,c.i&&eI(c.i,function(h,m){c.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=lo.prototype,t.add=function(c,h){Rr(this),this.i=null,c=Js(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(h),this.h+=1,this};function Xp(c,h){Rr(c),h=Js(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Jp(c,h){return Rr(c),h=Js(c,h),c.g.has(h)}t.forEach=function(c,h){Rr(this),this.g.forEach(function(m,b){m.forEach(function(L){c.call(h,L,b,this)},this)},this)},t.na=function(){Rr(this);const c=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let b=0;b<h.length;b++){const L=c[b];for(let F=0;F<L.length;F++)m.push(h[b])}return m},t.V=function(c){Rr(this);let h=[];if(typeof c=="string")Jp(this,c)&&(h=h.concat(this.g.get(Js(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)h=h.concat(c[m])}return h},t.set=function(c,h){return Rr(this),this.i=null,c=Js(this,c),Jp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},t.get=function(c,h){return c?(c=this.V(c),0<c.length?String(c[0]):h):h};function Zp(c,h,m){Xp(c,h),0<m.length&&(c.i=null,c.g.set(Js(c,h),w(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var b=h[m];const F=encodeURIComponent(String(b)),Y=this.V(b);for(b=0;b<Y.length;b++){var L=F;Y[b]!==""&&(L+="="+encodeURIComponent(String(Y[b]))),c.push(L)}}return this.i=c.join("&")};function Js(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function oI(c,h){h&&!c.j&&(Rr(c),c.i=null,c.g.forEach(function(m,b){var L=b.toLowerCase();b!=L&&(Xp(this,b),Zp(this,L,m))},c)),c.j=h}function aI(c,h){const m=new io;if(a.Image){const b=new Image;b.onload=g(Sr,m,"TestLoadImage: loaded",!0,h,b),b.onerror=g(Sr,m,"TestLoadImage: error",!1,h,b),b.onabort=g(Sr,m,"TestLoadImage: abort",!1,h,b),b.ontimeout=g(Sr,m,"TestLoadImage: timeout",!1,h,b),a.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else h(!1)}function cI(c,h){const m=new io,b=new AbortController,L=setTimeout(()=>{b.abort(),Sr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:b.signal}).then(F=>{clearTimeout(L),F.ok?Sr(m,"TestPingServer: ok",!0,h):Sr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Sr(m,"TestPingServer: error",!1,h)})}function Sr(c,h,m,b,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),b(m)}catch{}}function lI(){this.g=new sn}function uI(c,h,m){const b=m||"";try{Kp(c,function(L,F){let Y=L;u(L)&&(Y=Ys(L)),h.push(b+F+"="+encodeURIComponent(Y))})}catch(L){throw h.push(b+"type="+encodeURIComponent("_badmap")),L}}function za(c){this.l=c.Ub||null,this.j=c.eb||!1}y(za,Qs),za.prototype.g=function(){return new qa(this.l,this.j)},za.prototype.i=function(c){return function(){return c}}({});function qa(c,h){ie.call(this),this.D=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(qa,ie),t=qa.prototype,t.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=h,this.readyState=1,fo(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(h.body=c),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;em(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function em(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?uo(this):fo(this),this.readyState==3&&em(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,uo(this))},t.Qa=function(c){this.g&&(this.response=c,uo(this))},t.ga=function(){this.g&&uo(this)};function uo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,fo(c)}t.setRequestHeader=function(c,h){this.u.append(c,h)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=h.next();return c.join(`\r
`)};function fo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function tm(c){let h="";return M(c,function(m,b){h+=b,h+=":",h+=m,h+=`\r
`}),h}function Su(c,h,m){e:{for(b in m){var b=!1;break e}b=!0}b||(m=tm(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):$e(c,h,m))}function Je(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Je,ie);var fI=/^https?$/i,hI=["POST","PUT"];t=Je.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,h,m,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Eu.g(),this.v=this.o?kp(this.o):kp(Eu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(F){nm(this,F);return}if(c=m||"",m=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var L in b)m.set(L,b[L]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const F of b.keys())m.set(F,b.get(F));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(hI,h,void 0))||b||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Y]of m)this.g.setRequestHeader(F,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{im(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){nm(this,F)}};function nm(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.m=5,rm(c),Wa(c)}function rm(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),Wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wa(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sm(this):this.bb())},t.bb=function(){sm(this)};function sm(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Qn(c)!=4||c.Z()!=2)){if(c.u&&Qn(c)==4)Se(c.Ea,0,c);else if(he(c,"readystatechange"),Qn(c)==4){c.h=!1;try{const Y=c.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var b;if(b=Y===0){var L=String(c.D).match(Gp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),b=!fI.test(L?L.toLowerCase():"")}m=b}if(m)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<Qn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",rm(c)}}finally{Wa(c)}}}}function Wa(c,h){if(c.g){im(c);const m=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,h||he(c,"ready");try{m.onreadystatechange=b}catch{}}}function im(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Qn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),Ft(h)}};function om(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function dI(c){const h={};c=(c.g&&2<=Qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(R(c[b]))continue;var m=N(c[b]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=h[L]||[];h[L]=F,F.push(m)}T(h,function(b){return b.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ho(c,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||h}function am(c){this.Aa=0,this.i=[],this.j=new io,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ho("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ho("baseRetryDelayMs",5e3,c),this.cb=ho("retryDelaySeedMs",1e4,c),this.Wa=ho("forwardChannelMaxRetries",2,c),this.wa=ho("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new $p(c&&c.concurrentRequestLimit),this.Da=new lI,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=am.prototype,t.la=8,t.G=1,t.connect=function(c,h,m,b){Ut(0),this.W=c,this.H=h||{},m&&b!==void 0&&(this.H.OSID=m,this.H.OAID=b),this.F=this.X,this.I=gm(this,null,this.W),Ga(this)};function Cu(c){if(cm(c),c.G==3){var h=c.U++,m=Yn(c.I);if($e(m,"SID",c.K),$e(m,"RID",h),$e(m,"TYPE","terminate"),po(c,m),h=new Ar(c,c.j,h),h.L=2,h.v=Ha(Yn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=_m(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ja(h)}mm(c)}function Ka(c){c.g&&(ku(c),c.g.cancel(),c.g=null)}function cm(c){Ka(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ya(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Ga(c){if(!Hp(c.h)&&!c.s){c.s=!0;var h=c.Ga;se||mn(),ne||(se(),ne=!0),Ue.add(h,c),c.B=0}}function pI(c,h){return zp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=h.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=so(p(c.Ga,c,h),pm(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new Ar(this,this.j,c);let F=this.o;if(this.S&&(F?(F=v(F),I(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var b=this.i[m];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(h+=b,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=um(this,L,h),m=Yn(this.I),$e(m,"RID",c),$e(m,"CVER",22),this.D&&$e(m,"X-HTTP-Session-Id",this.D),po(this,m),F&&(this.O?h="headers="+encodeURIComponent(String(tm(F)))+"&"+h:this.m&&Su(m,this.m,F)),Ru(this.h,L),this.Ua&&$e(m,"TYPE","init"),this.P?($e(m,"$req",h),$e(m,"SID","null"),L.T=!0,bu(L,m,null)):bu(L,m,h),this.G=2}}else this.G==3&&(c?lm(this,c):this.i.length==0||Hp(this.h)||lm(this))};function lm(c,h){var m;h?m=h.l:m=c.U++;const b=Yn(c.I);$e(b,"SID",c.K),$e(b,"RID",m),$e(b,"AID",c.T),po(c,b),c.m&&c.o&&Su(b,c.m,c.o),m=new Ar(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),h&&(c.i=h.D.concat(c.i)),h=um(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ru(c.h,m),bu(m,b,h)}function po(c,h){c.H&&M(c.H,function(m,b){$e(h,b,m)}),c.l&&Kp({},function(m,b){$e(h,b,m)})}function um(c,h,m){m=Math.min(c.i.length,m);var b=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Y=["count="+m];F==-1?0<m?(F=L[0].g,Y.push("ofs="+F)):F=0:Y.push("ofs="+F);let Me=!0;for(let vt=0;vt<m;vt++){let Ce=L[vt].g;const Ct=L[vt].map;if(Ce-=F,0>Ce)F=Math.max(0,L[vt].g-100),Me=!1;else try{uI(Ct,Y,"req"+Ce+"_")}catch{b&&b(Ct)}}if(Me){b=Y.join("&");break e}}}return c=c.i.splice(0,m),h.D=c,b}function fm(c){if(!c.g&&!c.u){c.Y=1;var h=c.Fa;se||mn(),ne||(se(),ne=!0),Ue.add(h,c),c.v=0}}function Pu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=so(p(c.Fa,c),pm(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,hm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=so(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),Ka(this),hm(this))};function ku(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function hm(c){c.g=new Ar(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var h=Yn(c.qa);$e(h,"RID","rpc"),$e(h,"SID",c.K),$e(h,"AID",c.T),$e(h,"CI",c.F?"0":"1"),!c.F&&c.ja&&$e(h,"TO",c.ja),$e(h,"TYPE","xmlhttp"),po(c,h),c.m&&c.o&&Su(h,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Ha(Yn(h)),m.m=null,m.P=!0,Up(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Ka(this),Pu(this),Ut(19))};function Ya(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function dm(c,h){var m=null;if(c.g==h){Ya(c),ku(c),c.g=null;var b=2}else if(Au(c.h,h))m=h.D,qp(c.h,h),b=1;else return;if(c.G!=0){if(h.o)if(b==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var L=c.B;b=Va(),he(b,new Lp(b,m)),Ga(c)}else fm(c);else if(L=h.s,L==3||L==0&&0<h.X||!(b==1&&pI(c,h)||b==2&&Pu(c)))switch(m&&0<m.length&&(h=c.h,h.i=h.i.concat(m)),L){case 1:_s(c,5);break;case 4:_s(c,10);break;case 3:_s(c,6);break;default:_s(c,2)}}}function pm(c,h){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*h}function _s(c,h){if(c.j.info("Error code "+h),h==2){var m=p(c.fb,c),b=c.Xa;const L=!b;b=new gs(b||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ba(b,"https"),Ha(b),L?aI(b.toString(),m):cI(b.toString(),m)}else Ut(2);c.G=0,c.l&&c.l.sa(h),mm(c),cm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function mm(c){if(c.G=0,c.ka=[],c.l){const h=Wp(c.h);(h.length!=0||c.i.length!=0)&&(k(c.ka,h),k(c.ka,c.i),c.h.i.length=0,w(c.i),c.i.length=0),c.l.ra()}}function gm(c,h,m){var b=m instanceof gs?Yn(m):new gs(m);if(b.g!="")h&&(b.g=h+"."+b.g),$a(b,b.s);else{var L=a.location;b=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var F=new gs(null);b&&Ba(F,b),h&&(F.g=h),L&&$a(F,L),m&&(F.l=m),b=F}return m=c.D,h=c.ya,m&&h&&$e(b,m,h),$e(b,"VER",c.la),po(c,b),b}function _m(c,h,m){if(h&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Ca&&!c.pa?new Je(new za({eb:m})):new Je(c.pa),h.Ha(c.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ym(){}t=ym.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qa(){}Qa.prototype.g=function(c,h){return new Xt(c,h)};function Xt(c,h){ie.call(this),this.g=new am(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(c?c["X-WebChannel-Client-Profile"]=h.va:c={"X-WebChannel-Client-Profile":h.va}),this.g.S=c,(c=h&&h.Sb)&&!R(c)&&(this.g.m=c),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!R(h)&&(this.g.D=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new Zs(this)}y(Xt,ie),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Cu(this.g)},Xt.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Ys(c),c=m);h.i.push(new X0(h.Ya++,c)),h.G==3&&Ga(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Cu(this.g),delete this.g,Xt.aa.N.call(this)};function vm(c){yu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const m in h){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}y(vm,yu);function Em(){vu.call(this),this.status=1}y(Em,vu);function Zs(c){this.g=c}y(Zs,ym),Zs.prototype.ua=function(){he(this.g,"a")},Zs.prototype.ta=function(c){he(this.g,new vm(c))},Zs.prototype.sa=function(c){he(this.g,new Em)},Zs.prototype.ra=function(){he(this.g,"b")},Qa.prototype.createWebChannel=Qa.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,yb=function(){return new Qa},_b=function(){return Va()},gb=ps,ch={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,kc=Fa,Mp.COMPLETE="complete",mb=Mp,Op.EventType=no,no.OPEN="a",no.CLOSE="b",no.ERROR="c",no.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Ao=Op,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,pb=Je}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const C_="@firebase/firestore",P_="4.9.0";/**
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
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
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
 */let Xi="12.0.0";/**
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
 */const Fs=new Rd("@firebase/firestore");function oi(){return Fs.logLevel}function te(t,...e){if(Fs.logLevel<=Ee.DEBUG){const n=e.map(Vd);Fs.debug(`Firestore (${Xi}): ${t}`,...n)}}function mr(t,...e){if(Fs.logLevel<=Ee.ERROR){const n=e.map(Vd);Fs.error(`Firestore (${Xi}): ${t}`,...n)}}function Vi(t,...e){if(Fs.logLevel<=Ee.WARN){const n=e.map(Vd);Fs.warn(`Firestore (${Xi}): ${t}`,...n)}}function Vd(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,vb(t,r,n)}function vb(t,e,n){let r=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw mr(r),new Error(r)}function xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||vb(e,s,r)}function ye(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Eb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class ux{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fx{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new Eb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string",2055,{h:e}),new Nt(e)}}class hx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class px{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new k_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new k_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function mx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Fd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function lh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return af(s)===af(i)?we(s,i):af(s)?1:-1}return we(t.length,e.length)}const gx=55296,_x=57343;function af(t){const e=t.charCodeAt(0);return e>=gx&&e<=_x}function Fi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const O_="__name__";class On{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return On.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof On?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=On.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=On.isNumericId(e),s=On.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?On.extractNumericId(e).compare(On.extractNumericId(n)):lh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xr.fromString(e.substring(4,e.length-2))}}class He extends On{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const yx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends On{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return yx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===O_}static keyField(){return new It([O_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new oe($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new oe($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(He.fromString(e))}static fromName(e){return new fe(He.fromString(e).popFirst(5))}static empty(){return new fe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new He(e.slice()))}}/**
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
 */function wb(t,e,n){if(!n)throw new oe($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vx(t,e,n,r){if(e===!0&&r===!0)throw new oe($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N_(t){if(!fe.isDocumentKey(t))throw new oe($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function x_(t){if(fe.isDocumentKey(t))throw new oe($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Ui(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new oe($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ot(t,e){const n={typeString:t};return e&&(n.value=e),n}function ka(t,e){if(!bb(t))throw new oe($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new oe($.INVALID_ARGUMENT,n);return!0}/**
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
 */const D_=-62135596800,L_=1e6;class ze{static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*L_);return new ze(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<D_)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/L_}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ka(e,ze._jsonSchema))return new ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-D_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ze._jsonSchemaVersion="firestore/timestamp/1.0",ze._jsonSchema={type:ot("string",ze._jsonSchemaVersion),seconds:ot("number"),nanoseconds:ot("number")};/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new ze(0,0))}static max(){return new _e(new ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const la=-1;function Ex(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new ts(s,fe.empty(),e)}function wx(t){return new ts(t.readTime,t.key,la)}class ts{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ts(_e.min(),fe.empty(),la)}static max(){return new ts(_e.max(),fe.empty(),la)}}function bx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const Tx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ix{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ji(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Tx)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ax(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kl.ce=-1;/**
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
 */const jd=-1;function Gl(t){return t==null}function cl(t){return t===0&&1/t==-1/0}function Rx(t){return typeof t=="number"&&Number.isInteger(t)&&!cl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tb="";function Sx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=M_(e)),e=Cx(t.get(n),e);return M_(e)}function Cx(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Tb:n+="";break;default:n+=i}}return n}function M_(t){return t+Tb+""}/**
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
 */function V_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ib(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dc(this.root,e,this.comparator,!0)}}class dc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??bt.RED,this.left=s??bt.EMPTY,this.right=i??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new bt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new F_(this.data.getIterator())}getIteratorFrom(e){return new F_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class F_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ft(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ab extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ab("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const Px=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(xe(!!t,39018),typeof t=="string"){let e=0;const n=Px.exec(t);if(xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */const Rb="server_timestamp",Sb="__type__",Cb="__previous_value__",Pb="__local_write_time__";function Bd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Sb])==null?void 0:r.stringValue)===Rb}function Yl(t){const e=t.mapValue.fields[Cb];return Bd(e)?Yl(e):e}function ua(t){const e=ns(t.mapValue.fields[Pb].timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class kx{constructor(e,n,r,s,i,o,a,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ll="(default)";class fa{constructor(e,n){this.projectId=e,this.database=n||ll}static empty(){return new fa("","")}get isDefaultDatabase(){return this.database===ll}isEqual(e){return e instanceof fa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kb="__type__",Ox="__max__",pc={mapValue:{}},Ob="__vector__",ul="value";function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bd(t)?4:xx(t)?9007199254740991:Nx(t)?10:11:me(28295,{value:t})}function Wn(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ua(t).isEqual(ua(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ns(s.timestampValue),a=ns(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rs(s.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?cl(o)===cl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(V_(o)!==V_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function ha(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return U_(t.timestampValue,e.timestampValue);case 4:return U_(ua(t),ua(e));case 5:return lh(t.stringValue,e.stringValue);case 6:return function(i,o){const a=rs(i),l=rs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const f=we(a[u],l[u]);if(f!==0)return f}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=we(nt(i.latitude),nt(o.latitude));return a!==0?a:we(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return j_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,g,y,w;const a=i.fields||{},l=o.fields||{},u=(p=a[ul])==null?void 0:p.arrayValue,f=(g=l[ul])==null?void 0:g.arrayValue,d=we(((y=u==null?void 0:u.values)==null?void 0:y.length)||0,((w=f==null?void 0:f.values)==null?void 0:w.length)||0);return d!==0?d:j_(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===pc.mapValue&&o===pc.mapValue)return 0;if(i===pc.mapValue)return 1;if(o===pc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let d=0;d<l.length&&d<f.length;++d){const p=lh(l[d],f[d]);if(p!==0)return p;const g=ji(a[l[d]],u[f[d]]);if(g!==0)return g}return we(l.length,f.length)}(t.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function U_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=ns(t),r=ns(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function j_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ji(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Bi(t){return uh(t)}function uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ns(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=uh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${uh(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function Oc(t){switch(ss(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yl(t);return e?16+Oc(e):16;case 5:return 2*t.stringValue.length;case 6:return rs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Oc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return hs(r.fields,(i,o)=>{s+=i.length+Oc(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function fh(t){return!!t&&"integerValue"in t}function $d(t){return!!t&&"arrayValue"in t}function B_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nc(t){return!!t&&"mapValue"in t}function Nx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[kb])==null?void 0:r.stringValue)===Ob}function Bo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return{...t}}function xx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ox}/**
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
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=It.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Bo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Nc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(Bo(this.value))}}function Nb(t){const e=[];return hs(t.fields,(n,r)=>{const s=new It([n]);if(Nc(r)){const i=Nb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class Lt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Lt(e,0,_e.min(),_e.min(),_e.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new Lt(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new Lt(e,2,n,_e.min(),_e.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,_e.min(),_e.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fl{constructor(e,n){this.position=e,this.inclusive=n}}function H_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=ji(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function z_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Dx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xb{}class ct extends xb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mx(e,n,r):n==="array-contains"?new Ux(e,r):n==="in"?new jx(e,r):n==="not-in"?new Bx(e,r):n==="array-contains-any"?new $x(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Vx(e,r):new Fx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ji(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends xb{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Kn(e,n)}matches(e){return Db(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Db(t){return t.op==="and"}function Lb(t){return Lx(t)&&Db(t)}function Lx(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function hh(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(Lb(t))return t.filters.map(e=>hh(e)).join(",");{const e=t.filters.map(n=>hh(n)).join(",");return`${t.op}(${e})`}}function Mb(t,e){return t instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Wn(r.value,s.value)}(t,e):t instanceof Kn?function(r,s){return s instanceof Kn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Mb(o,s.filters[a]),!0):!1}(t,e):void me(19439)}function Vb(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(Vb).join(" ,")+"}"}(t):"Filter"}class Mx extends ct{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vx extends ct{constructor(e,n){super(e,"in",n),this.keys=Fb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Fx extends ct{constructor(e,n){super(e,"not-in",n),this.keys=Fb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fb(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class Ux extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $d(n)&&ha(n.arrayValue,this.value)}}class jx extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ha(this.value.arrayValue,n)}}class Bx extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ha(this.value.arrayValue,n)}}class $x extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$d(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ha(this.value.arrayValue,r))}}/**
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
 */class Hx{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function q_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Hx(t,e,n,r,s,i,o)}function Hd(t){const e=ye(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bi(r)).join(",")),e.Te=n}return e.Te}function zd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Dx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!z_(t.startAt,e.startAt)&&z_(t.endAt,e.endAt)}function dh(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ql{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function zx(t,e,n,r,s,i,o,a){return new Ql(t,e,n,r,s,i,o,a)}function Ub(t){return new Ql(t)}function W_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qx(t){return t.collectionGroup!==null}function $o(t){const e=ye(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(It.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new hl(i,r))}),n.has(It.keyField().canonicalString())||e.Ie.push(new hl(It.keyField(),r))}return e.Ie}function Bn(t){const e=ye(t);return e.Ee||(e.Ee=Wx(e,$o(t))),e.Ee}function Wx(t,e){if(t.limitType==="F")return q_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new hl(s.field,i)});const n=t.endAt?new fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fl(t.startAt.position,t.startAt.inclusive):null;return q_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ph(t,e,n){return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xl(t,e){return zd(Bn(t),Bn(e))&&t.limitType===e.limitType}function jb(t){return`${Hd(Bn(t))}|lt:${t.limitType}`}function ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vb(s)).join(", ")}]`),Gl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Bi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Bi(s)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function Jl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of $o(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=H_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,$o(r),s)||r.endAt&&!function(o,a,l){const u=H_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,$o(r),s))}(t,e)}function Kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bb(t){return(e,n)=>{let r=!1;for(const s of $o(t)){const i=Gx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gx(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?ji(l,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ib(this.inner)}size(){return this.innerSize}}/**
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
 */const Yx=new Xe(fe.comparator);function gr(){return Yx}const $b=new Xe(fe.comparator);function Ro(...t){let e=$b;for(const n of t)e=e.insert(n.key,n);return e}function Hb(t){let e=$b;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function As(){return Ho()}function zb(){return Ho()}function Ho(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qx=new Xe(fe.comparator),Xx=new ft(fe.comparator);function Te(...t){let e=Xx;for(const n of t)e=e.add(n);return e}const Jx=new ft(we);function Zx(){return Jx}/**
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
 */function qd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cl(e)?"-0":e}}function qb(t){return{integerValue:""+t}}function eD(t,e){return Rx(e)?qb(e):qd(t,e)}/**
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
 */class Zl{constructor(){this._=void 0}}function tD(t,e,n){return t instanceof dl?function(s,i){const o={fields:{[Sb]:{stringValue:Rb},[Pb]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bd(i)&&(i=Yl(i)),i&&(o.fields[Cb]=i),{mapValue:o}}(n,e):t instanceof da?Kb(t,e):t instanceof pa?Gb(t,e):function(s,i){const o=Wb(s,i),a=K_(o)+K_(s.Ae);return fh(o)&&fh(s.Ae)?qb(a):qd(s.serializer,a)}(t,e)}function nD(t,e,n){return t instanceof da?Kb(t,e):t instanceof pa?Gb(t,e):n}function Wb(t,e){return t instanceof pl?function(r){return fh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class dl extends Zl{}class da extends Zl{constructor(e){super(),this.elements=e}}function Kb(t,e){const n=Yb(e);for(const r of t.elements)n.some(s=>Wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class pa extends Zl{constructor(e){super(),this.elements=e}}function Gb(t,e){let n=Yb(e);for(const r of t.elements)n=n.filter(s=>!Wn(s,r));return{arrayValue:{values:n}}}class pl extends Zl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function K_(t){return nt(t.integerValue||t.doubleValue)}function Yb(t){return $d(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof da&&s instanceof da||r instanceof pa&&s instanceof pa?Fi(r.elements,s.elements,Wn):r instanceof pl&&s instanceof pl?Wn(r.Ae,s.Ae):r instanceof dl&&s instanceof dl}(t.transform,e.transform)}class sD{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eu{}function Qb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wd(t.key,dn.none()):new Oa(t.key,t.data,dn.none());{const n=t.data,r=Gt.empty();let s=new ft(It.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ds(t.key,r,new Zt(s.toArray()),dn.none())}}function iD(t,e,n){t instanceof Oa?function(s,i,o){const a=s.value.clone(),l=Y_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ds?function(s,i,o){if(!xc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Y_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Xb(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zo(t,e,n,r){return t instanceof Oa?function(i,o,a,l){if(!xc(i.precondition,o))return a;const u=i.value.clone(),f=Q_(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ds?function(i,o,a,l){if(!xc(i.precondition,o))return a;const u=Q_(i.fieldTransforms,l,o),f=o.data;return f.setAll(Xb(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return xc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Wb(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function G_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fi(r,s,(i,o)=>rD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends eu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ds extends eu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Y_(t,e,n){const r=new Map;xe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,nD(o,a,n[s]))}return r}function Q_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tD(i,o,e))}return r}class Wd extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aD extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Qb(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,r)=>G_(n,r))&&Fi(this.baseMutations,e.baseMutations,(n,r)=>G_(n,r))}}class Kd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Qx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Kd(e,n,r,s)}}/**
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
 */class lD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var rt,Ae;function fD(t){switch(t){case $.OK:return me(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function Jb(t){if(t===void 0)return mr("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return me(39323,{code:t})}}(Ae=rt||(rt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hD(){return new TextEncoder}/**
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
 */const dD=new Xr([4294967295,4294967295],0);function X_(t){const e=hD().encode(t),n=new db;return n.update(e),new Uint8Array(n.digest())}function J_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([s,i],0)]}class Gd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Xr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Xr.fromNumber(r)));return s.compare(dD)===1&&(s=new Xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=X_(e),[r,s]=J_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=X_(e),[r,s]=J_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tu(_e.min(),s,new Xe(we),gr(),Te())}}class Na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,Te(),Te(),Te())}}/**
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
 */class Dc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Zb{constructor(e,n){this.targetId=e,this.Ce=n}}class eT{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Z_{constructor(){this.ve=0,this.Fe=ey(),this.Me=Rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new Na(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ey()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class pD{constructor(e){this.Ge=e,this.ze=new Map,this.je=gr(),this.Je=mc(),this.He=mc(),this.Ye=new Xe(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(dh(i))if(r===0){const o=new fe(i.path);this.et(n,o,Lt.newNoDocument(o,_e.min()))}else xe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=rs(r).toUint8Array()}catch(l){if(l instanceof Ab)return Vi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Gd(o,s,i)}catch(l){return Vi(l instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&dh(a.target)){const l=new fe(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Lt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Te();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new tu(e,n,this.Ye,this.je,r);return this.je=gr(),this.Je=mc(),this.He=mc(),this.Ye=new Xe(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Z_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ft(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ft(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Z_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function mc(){return new Xe(fe.comparator)}function ey(){return new Xe(fe.comparator)}const mD={asc:"ASCENDING",desc:"DESCENDING"},gD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_D={and:"AND",or:"OR"};class yD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json||Gl(e)?e:{value:e}}function ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vD(t,e){return ml(t,e.toTimestamp())}function $n(t){return xe(!!t,49232),_e.fromTimestamp(function(n){const r=ns(n);return new ze(r.seconds,r.nanos)}(t))}function Yd(t,e){return gh(t,e).canonicalString()}function gh(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nT(t){const e=He.fromString(t);return xe(aT(e),10190,{key:e.toString()}),e}function _h(t,e){return Yd(t.databaseId,e.path)}function cf(t,e){const n=nT(e);if(n.get(1)!==t.databaseId.projectId)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(sT(n))}function rT(t,e){return Yd(t.databaseId,e)}function ED(t){const e=nT(t);return e.length===4?He.emptyPath():sT(e)}function yh(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sT(t){return xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ty(t,e,n){return{name:_h(t,e),fields:n.value.mapValue.fields}}function wD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(xe(f===void 0||typeof f=="string",58123),Rt.fromBase64String(f||"")):(xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?$.UNKNOWN:Jb(u.code);return new oe(f,u.message||"")}(o);n=new eT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cf(t,r.document.name),i=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):_e.min(),a=new Gt({mapValue:{fields:r.document.fields}}),l=Lt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Dc(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cf(t,r.document),i=r.readTime?$n(r.readTime):_e.min(),o=Lt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cf(t,r.document),i=r.removedTargetIds||[];n=new Dc([],i,s,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uD(s,i),a=r.targetId;n=new Zb(a,o)}}return n}function bD(t,e){let n;if(e instanceof Oa)n={update:ty(t,e.key,e.value)};else if(e instanceof Wd)n={delete:_h(t,e.key)};else if(e instanceof ds)n={update:ty(t,e.key,e.data),updateMask:OD(e.fieldMask)};else{if(!(e instanceof aD))return me(16599,{Vt:e.type});n={verify:_h(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof da)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pl)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function TD(t,e){return t&&t.length>0?(xe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?$n(s.updateTime):$n(i);return o.isEqual(_e.min())&&(o=$n(i)),new sD(o,s.transformResults||[])}(n,e))):[]}function ID(t,e){return{documents:[rT(t,e.path)]}}function AD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rT(t,s);const i=function(u){if(u.length!==0)return oT(Kn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:ci(p.field),direction:CD(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=mh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function RD(t){let e=ED(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const p=iT(d);return p instanceof Kn&&Lb(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(y){return new hl(li(y.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Gl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new fl(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new fl(g,p)}(n.endAt)),zx(e,s,o,i,a,"F",l,u)}function SD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=li(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=li(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=li(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return ct.create(li(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>iT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function CD(t){return mD[t]}function PD(t){return gD[t]}function kD(t){return _D[t]}function ci(t){return{fieldPath:t.canonicalString()}}function li(t){return It.fromServerFormat(t.fieldPath)}function oT(t){return t instanceof ct?function(n){if(n.op==="=="){if($_(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(B_(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($_(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(B_(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:PD(n.op),value:n.value}}}(t):t instanceof Kn?function(n){const r=n.getFilters().map(s=>oT(s));return r.length===1?r[0]:{compositeFilter:{op:kD(n.op),filters:r}}}(t):me(54877,{filter:t})}function OD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class zr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=Rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ND{constructor(e){this.yt=e}}function xD(t){const e=RD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ph(e,e.limit,"L"):e}/**
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
 */class DD{constructor(){this.Cn=new LD}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(ts.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class LD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(He.comparator)).toArray()}}/**
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
 */const ny={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cT=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(cT,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class $i{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new $i(0)}static cr(){return new $i(-1)}}/**
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
 */const ry="LruGarbageCollector",MD=1048576;function sy([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class VD{constructor(e){this.Ir=e,this.buffer=new ft(sy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class FD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(ry,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zi(n)?te(ry,"Ignoring IndexedDB error during garbage collection: ",n):await Ji(n)}await this.Vr(3e5)})}}class UD{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Kl.ce);const r=new VD(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(ny)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ny):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),oi()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function jD(t,e){return new UD(t,e)}/**
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
 */class BD{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $D{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class HD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zo(r.mutation,s,Zt.empty(),ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ro();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=As();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=gr();const o=Ho(),a=function(){return Ho()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ds)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),zo(f.mutation,u,f.mutation.getFieldMask(),ze.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>a.set(u,new $D(f,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Ho();let s=new Xe((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Zt.empty();f=a.applyToLocalView(u,f),r.set(l,f);const d=(s.get(a.batchId)||Te()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,f=l.value,d=zb();f.forEach(p=>{if(!i.has(p)){const g=Qb(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(As());let a=la,l=i;return o.next(u=>B.forEach(u,(f,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(f=>({batchId:a,changes:Hb(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=Ro();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ro();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,l=>{const u=function(d,p){return new Ql(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Lt.newInvalidDocument(f)))});let a=Ro();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&zo(f.mutation,u,Zt.empty(),ze.now()),Jl(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class zD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$n(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:xD(s.bundledQuery),readTime:$n(s.readTime)}}(n)),B.resolve()}}/**
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
 */class qD{constructor(){this.overlays=new Xe(fe.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=As();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=As(),i=n.length+1,o=new fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=As(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=As(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return B.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lD(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class WD{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Qd{constructor(){this.Qr=new ft(dt.$r),this.Ur=new ft(dt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new dt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new fe(new He([])),r=new dt(n,e),s=new dt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new fe(new He([])),r=new dt(n,e),s=new dt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return fe.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||fe.comparator(e.key,n.key)}}/**
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
 */class KD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ft(dt.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new dt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?jd:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(we);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new dt(new fe(i),0);let a=new ft(we);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Yr)),!0)},o),B.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new dt(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GD{constructor(e){this.ri=e,this.docs=function(){return new Xe(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Lt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=gr();const o=n.path,a=new fe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bx(wx(f),r)<=0||(s.has(f.key)||Jl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YD(this)}getSize(e){return B.resolve(this.size)}}class YD extends BD{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class QD{constructor(e){this.persistence=e,this.si=new Ks(n=>Hd(n),zd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.oi=0,this._i=new Qd,this.targetCount=0,this.ai=$i.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new $i(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class lT{constructor(e,n){this.ui={},this.overlays={},this.ci=new Kl(0),this.li=!1,this.li=!0,this.hi=new WD,this.referenceDelegate=e(this),this.Pi=new QD(this),this.indexManager=new DD,this.remoteDocumentCache=function(s){return new GD(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ND(n),this.Ii=new zD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new KD(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new XD(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class XD extends Ix{constructor(e){super(),this.currentSequenceNumber=e}}class Xd{constructor(e){this.persistence=e,this.Ri=new Qd,this.Vi=null}static mi(e){return new Xd(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const s=fe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class gl{constructor(e,n){this.persistence=e,this.pi=new Ks(r=>Sx(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jD(this,n)}static mi(e,n){return new gl(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Oc(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jd(e,n.fromCache,r,s)}}/**
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
 */class JD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return hk()?8:Ax(Mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JD;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(oi()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(oi()<=Ee.DEBUG&&te("QueryEngine","Query:",ai(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(oi()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):B.resolve())}ys(e,n){if(W_(n))return B.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ph(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,a);return this.Cs(n,u,o,l.readTime)?this.ys(e,ph(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return W_(n)||s.isEqual(_e.min())?B.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(oi()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ai(n)),this.vs(e,o,n,Ex(s,la)).next(a=>a))})}Ds(e,n){let r=new ft(Bb(e));return n.forEach((s,i)=>{Jl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return oi()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ai(n)),this.ps.getDocumentsMatchingQuery(e,n,ts.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Zd="LocalStore",eL=3e8;class tL{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Xe(we),this.xs=new Ks(i=>Hd(i),zd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function nL(t,e,n,r){return new tL(t,e,n,r)}async function uT(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function rL(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,u,f){const d=u.batch,p=d.keys();let g=B.resolve();return p.forEach(y=>{g=g.next(()=>f.getEntry(l,y)).next(w=>{const k=u.docVersions.get(y);xe(k!==null,48541),w.version.compareTo(k)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),f.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function fT(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function sL(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((f,d)=>{const p=s.get(d);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Rt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(d,g),function(w,k,P){return w.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=eL?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(p,g,f)&&a.push(n.Pi.updateTargetData(i,g))});let l=gr(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(iL(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(_e.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function iL(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te(Zd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function oL(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=jd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aL(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function vh(t,e,n){const r=ye(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zi(o))throw o;te(Zd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function iy(t,e,n){const r=ye(t);let s=_e.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const d=ye(l),p=d.xs.get(f);return p!==void 0?B.resolve(d.Ms.get(p)):d.Pi.getTargetData(u,f)}(r,o,Bn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Te())).next(a=>(cL(r,Kx(e),a),{documents:a,Qs:i})))}function cL(t,e,n){let r=t.Os.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class oy{constructor(){this.activeTargetIds=Zx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lL{constructor(){this.Mo=new oy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uL{Oo(e){}shutdown(){}}/**
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
 */const ay="ConnectivityMonitor";class cy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(ay,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gc=null;function Eh(){return gc===null?gc=function(){return 268435456+Math.round(2147483648*Math.random())}():gc++,"0x"+gc.toString(16)}/**
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
 */const lf="RestConnection",fL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hL{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ll?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Eh(),a=this.zo(e,n.toUriEncodedString());te(lf,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(a),f=us(u);return this.Jo(e,a,l,r,f).then(d=>(te(lf,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Vi(lf,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=fL[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class dL{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const kt="WebChannelConnection";class pL extends hL{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Eh();return new Promise((a,l)=>{const u=new pb;u.setWithCredentials(!0),u.listenOnce(mb.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case kc.NO_ERROR:const d=u.getResponseJson();te(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case kc.TIMEOUT:te(kt,`RPC '${e}' ${o} timed out`),l(new oe($.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const p=u.getStatus();if(te(kt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const w=function(P){const R=P.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(R)>=0?R:$.UNKNOWN}(y.status);l(new oe(w,y.message))}else l(new oe($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new oe($.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(kt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);te(kt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Eh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yb(),a=_b(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");te(kt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const d=o.createWebChannel(f,l);this.I_(d);let p=!1,g=!1;const y=new dL({Yo:k=>{g?te(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(p||(te(kt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(kt,`RPC '${e}' stream ${s} sending:`,k),d.send(k))},Zo:()=>d.close()}),w=(k,P,R)=>{k.listen(P,_=>{try{R(_)}catch(S){setTimeout(()=>{throw S},0)}})};return w(d,Ao.EventType.OPEN,()=>{g||(te(kt,`RPC '${e}' stream ${s} transport opened.`),y.o_())}),w(d,Ao.EventType.CLOSE,()=>{g||(g=!0,te(kt,`RPC '${e}' stream ${s} transport closed`),y.a_(),this.E_(d))}),w(d,Ao.EventType.ERROR,k=>{g||(g=!0,Vi(kt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),y.a_(new oe($.UNAVAILABLE,"The operation could not be completed")))}),w(d,Ao.EventType.MESSAGE,k=>{var P;if(!g){const R=k.data[0];xe(!!R,16349);const _=R,S=(_==null?void 0:_.error)||((P=_[0])==null?void 0:P.error);if(S){te(kt,`RPC '${e}' stream ${s} received error:`,S);const D=S.status;let M=function(E){const I=rt[E];if(I!==void 0)return Jb(I)}(D),T=S.message;M===void 0&&(M=$.INTERNAL,T="Unknown error status: "+D+" with message "+S.message),g=!0,y.a_(new oe(M,T)),d.close()}else te(kt,`RPC '${e}' stream ${s} received:`,R),y.u_(R)}}),w(a,gb.STAT_EVENT,k=>{k.stat===ch.PROXY?te(kt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===ch.NOPROXY&&te(kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.__()},0),y}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function uf(){return typeof document<"u"?document:null}/**
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
 */function nu(t){return new yD(t,!0)}/**
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
 */class hT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ly="PersistentStream";class dT{constructor(e,n,r,s,i,o,a,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new oe($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return te(ly,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(te(ly,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mL extends dT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wD(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?$n(o.readTime):_e.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=yh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=dh(l)?{documents:ID(i,l)}:{query:AD(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tT(i,o.resumeToken);const u=mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=ml(i,o.snapshotVersion.toTimestamp());const u=mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=SD(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=yh(this.serializer),n.removeTarget=e,this.q_(n)}}class gL extends dT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=TD(e.writeResults,e.commitTime),r=$n(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bD(this.serializer,r))};this.q_(n)}}/**
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
 */class _L{}class yL extends _L{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,gh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe($.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,gh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe($.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class vL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mr(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Us="RemoteStore";class EL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Gs(this)&&(te(Us,"Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.Ea.add(4),await xa(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ru(u)}(this))})}),this.Ra=new vL(r,s)}}async function ru(t){if(Gs(t))for(const e of t.da)await e(!0)}async function xa(t){for(const e of t.da)await e(!1)}function pT(t,e){const n=ye(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),rp(n)?np(n):eo(n).O_()&&tp(n,e))}function ep(t,e){const n=ye(t),r=eo(n);n.Ia.delete(e),r.O_()&&mT(n,e),n.Ia.size===0&&(r.O_()?r.L_():Gs(n)&&n.Ra.set("Unknown"))}function tp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}eo(t).Y_(e)}function mT(t,e){t.Va.Ue(e),eo(t).Z_(e)}function np(t){t.Va=new pD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),eo(t).start(),t.Ra.ua()}function rp(t){return Gs(t)&&!eo(t).x_()&&t.Ia.size>0}function Gs(t){return ye(t).Ea.size===0}function gT(t){t.Va=void 0}async function wL(t){t.Ra.set("Online")}async function bL(t){t.Ia.forEach((e,n)=>{tp(t,e)})}async function TL(t,e){gT(t),rp(t)?(t.Ra.ha(e),np(t)):t.Ra.set("Unknown")}async function IL(t,e,n){if(t.Ra.set("Online"),e instanceof eT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){te(Us,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _l(t,r)}else if(e instanceof Dc?t.Va.Ze(e):e instanceof Zb?t.Va.st(e):t.Va.tt(e),!n.isEqual(_e.min()))try{const r=await fT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(Rt.EMPTY_BYTE_STRING,f.snapshotVersion)),mT(i,l);const d=new zr(f.target,l,u,f.sequenceNumber);tp(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(Us,"Failed to raise snapshot:",r),await _l(t,r)}}async function _l(t,e,n){if(!Zi(e))throw e;t.Ea.add(1),await xa(t),t.Ra.set("Offline"),n||(n=()=>fT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Us,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ru(t)})}function _T(t,e){return e().catch(n=>_l(t,n,e))}async function su(t){const e=ye(t),n=is(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jd;for(;AL(e);)try{const s=await oL(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,RL(e,s)}catch(s){await _l(e,s)}yT(e)&&vT(e)}function AL(t){return Gs(t)&&t.Ta.length<10}function RL(t,e){t.Ta.push(e);const n=is(t);n.O_()&&n.X_&&n.ea(e.mutations)}function yT(t){return Gs(t)&&!is(t).x_()&&t.Ta.length>0}function vT(t){is(t).start()}async function SL(t){is(t).ra()}async function CL(t){const e=is(t);for(const n of t.Ta)e.ea(n.mutations)}async function PL(t,e,n){const r=t.Ta.shift(),s=Kd.from(r,e,n);await _T(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await su(t)}async function kL(t,e){e&&is(t).X_&&await async function(r,s){if(function(o){return fD(o)&&o!==$.ABORTED}(s.code)){const i=r.Ta.shift();is(r).B_(),await _T(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await su(r)}}(t,e),yT(t)&&vT(t)}async function uy(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te(Us,"RemoteStore received new credentials");const r=Gs(n);n.Ea.add(3),await xa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ru(n)}async function OL(t,e){const n=ye(t);e?(n.Ea.delete(2),await ru(n)):e||(n.Ea.add(2),await xa(n),n.Ra.set("Unknown"))}function eo(t){return t.ma||(t.ma=function(n,r,s){const i=ye(n);return i.sa(),new mL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:wL.bind(null,t),t_:bL.bind(null,t),r_:TL.bind(null,t),H_:IL.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),rp(t)?np(t):t.Ra.set("Unknown")):(await t.ma.stop(),gT(t))})),t.ma}function is(t){return t.fa||(t.fa=function(n,r,s){const i=ye(n);return i.sa(),new gL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:SL.bind(null,t),r_:kL.bind(null,t),ta:CL.bind(null,t),na:PL.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await su(t)):(await t.fa.stop(),t.Ta.length>0&&(te(Us,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class sp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new sp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(t,e){if(mr("AsyncQueue",`${e}: ${t}`),Zi(t))return new oe($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ii{static emptySet(e){return new Ii(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Ro(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class fy{constructor(){this.ga=new Xe(fe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hi(e,n,Ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class NL{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class xL{constructor(){this.queries=hy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=hy(),i.forEach((o,a)=>{for(const l of a.Sa)l.onError(r)})})(this,new oe($.ABORTED,"Firestore shutting down"))}}function hy(){return new Ks(t=>jb(t),Xl)}async function DL(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new NL,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=ip(o,`Initialization of query '${ai(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&op(n)}async function LL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ML(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&op(n)}function VL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function op(t){t.Ca.forEach(e=>{e.next()})}var wh,dy;(dy=wh||(wh={})).Ma="default",dy.Cache="cache";class FL{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wh.Cache}}/**
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
 */class ET{constructor(e){this.key=e}}class wT{constructor(e){this.key=e}}class UL{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=Bb(e),this.tu=new Ii(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new fy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const p=s.get(f),g=Jl(this.query,d)?d:null,y=!!p&&this.mutatedKeys.has(p.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?y!==w&&(r.track({type:3,doc:g}),k=!0):this.su(p,g)||(r.track({type:2,doc:g}),k=!0,(l&&this.eu(g,l)>0||u&&this.eu(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),k=!0):p&&!g&&(r.track({type:1,doc:p}),k=!0,(l||u)&&(a=!0)),k&&(g?(o=o.add(g),i=w?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,d)=>function(g,y){const w=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:k})}};return w(g)-w(y)}(f.type,d.type)||this.eu(f.doc,d.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Hi(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new fy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new wT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new ET(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Hi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ap="SyncEngine";class jL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BL{constructor(e){this.key=e,this.hu=!1}}class $L{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ks(a=>jb(a),Xl),this.Iu=new Map,this.Eu=new Set,this.du=new Xe(fe.comparator),this.Au=new Map,this.Ru=new Qd,this.Vu={},this.mu=new Map,this.fu=$i.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function HL(t,e,n=!0){const r=ST(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await bT(r,e,n,!0),s}async function zL(t,e){const n=ST(t);await bT(n,e,!0,!1)}async function bT(t,e,n,r){const s=await aL(t.localStore,Bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await qL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&pT(t.remoteStore,s),a}async function qL(t,e,n,r,s){t.pu=(d,p,g)=>async function(w,k,P,R){let _=k.view.ru(P);_.Cs&&(_=await iy(w.localStore,k.query,!1).then(({documents:T})=>k.view.ru(T,_)));const S=R&&R.targetChanges.get(k.targetId),D=R&&R.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(_,w.isPrimaryClient,S,D);return my(w,k.targetId,M.au),M.snapshot}(t,d,p,g);const i=await iy(t.localStore,e,!0),o=new UL(e,i.Qs),a=o.ru(i.documents),l=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);my(t,n,u.au);const f=new jL(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function WL(t,e,n){const r=ye(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Xl(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ep(r.remoteStore,s.targetId),bh(r,s.targetId)}).catch(Ji)):(bh(r,s.targetId),await vh(r.localStore,s.targetId,!0))}async function KL(t,e){const n=ye(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ep(n.remoteStore,r.targetId))}async function GL(t,e,n){const r=tM(t);try{const s=await function(o,a){const l=ye(o),u=ze.now(),f=a.reduce((g,y)=>g.add(y.key),Te());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=gr(),w=Te();return l.Ns.getEntries(g,f).next(k=>{y=k,y.forEach((P,R)=>{R.isValidDocument()||(w=w.add(P))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,y)).next(k=>{d=k;const P=[];for(const R of a){const _=oD(R,d.get(R.key).overlayedDocument);_!=null&&P.push(new ds(R.key,_,Nb(_.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,P,a)}).next(k=>{p=k;const P=k.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(g,k.batchId,P)})}).then(()=>({batchId:p.batchId,changes:Hb(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Xe(we)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Da(r,s.changes),await su(r.remoteStore)}catch(s){const i=ip(s,"Failed to persist write");n.reject(i)}}async function TT(t,e){const n=ye(t);try{const r=await sL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?xe(o.hu,14607):s.removedDocuments.size>0&&(xe(o.hu,42227),o.hu=!1))}),await Da(n,r,e)}catch(r){await Ji(r)}}function py(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((f,d)=>{for(const p of d.Sa)p.va(a)&&(u=!0)}),u&&op(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YL(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Xe(fe.comparator);o=o.insert(i,Lt.newNoDocument(i,_e.min()));const a=Te().add(i),l=new tu(_e.min(),new Map,new Xe(we),o,a);await TT(r,l),r.du=r.du.remove(i),r.Au.delete(e),cp(r)}else await vh(r.localStore,e,!1).then(()=>bh(r,e,n)).catch(Ji)}async function QL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await rL(n.localStore,e);AT(n,r,null),IT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Da(n,s)}catch(s){await Ji(s)}}async function XL(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(xe(d!==null,37113),f=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);AT(r,e,n),IT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Da(r,s)}catch(s){await Ji(s)}}function IT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function AT(t,e,n){const r=ye(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||RT(t,r)})}function RT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ep(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),cp(t))}function my(t,e,n){for(const r of n)r instanceof ET?(t.Ru.addReference(r.key,e),JL(t,r)):r instanceof wT?(te(ap,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||RT(t,r.key)):me(19791,{wu:r})}function JL(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(te(ap,"New document in limbo: "+n),t.Eu.add(r),cp(t))}function cp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new fe(He.fromString(e)),r=t.fu.next();t.Au.set(r,new BL(n)),t.du=t.du.insert(n,r),pT(t.remoteStore,new zr(Bn(Ub(n.path)),r,"TargetPurposeLimboResolution",Kl.ce))}}async function Da(t,e,n){const r=ye(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Jd.As(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=ye(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,p=>B.forEach(p.Es,g=>f.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>B.forEach(p.ds,g=>f.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Zi(d))throw d;te(Zd,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=f.Ms.get(p),y=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(y);f.Ms=f.Ms.insert(p,w)}}}(r.localStore,i))}async function ZL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te(ap,"User change. New user:",e.toKey());const r=await uT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new oe($.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Da(n,r.Ls)}}function eM(t,e){const n=ye(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function ST(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YL.bind(null,e),e.Pu.H_=ML.bind(null,e.eventManager),e.Pu.yu=VL.bind(null,e.eventManager),e}function tM(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XL.bind(null,e),e}class yl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return nL(this.persistence,new ZD,e.initialUser,this.serializer)}Cu(e){return new lT(Xd.mi,this.serializer)}Du(e){return new lL}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yl.provider={build:()=>new yl};class nM extends yl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){xe(this.persistence.referenceDelegate instanceof gl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new FD(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new lT(r=>gl.mi(r,n),this.serializer)}}class Th{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>py(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZL.bind(null,this.syncEngine),await OL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xL}()}createDatastore(e){const n=nu(e.databaseInfo.databaseId),r=function(i){return new pL(i)}(e.databaseInfo);return function(i,o,a,l){return new yL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new EL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>py(this.syncEngine,n,0),function(){return cy.v()?new cy:new uL}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,f){const d=new $L(s,i,o,a,l,u);return f&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te(Us,"RemoteStore shutting down."),i.Ea.add(5),await xa(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Th.provider={build:()=>new Th};/**
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
 */class rM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const os="FirestoreClient";class sM{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=Fd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(os,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(os,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ff(t,e){t.asyncQueue.verifyOperationInProgress(),te(os,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await uT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iM(t);te(os,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>uy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>uy(e.remoteStore,s)),t._onlineComponents=e}async function iM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(os,"Using user provided OfflineComponentProvider");try{await ff(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Vi("Error using user provided cache. Falling back to memory cache: "+n),await ff(t,new yl)}}else te(os,"Using default OfflineComponentProvider"),await ff(t,new nM(void 0));return t._offlineComponents}async function CT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(os,"Using user provided OnlineComponentProvider"),await gy(t,t._uninitializedComponentsProvider._online)):(te(os,"Using default OnlineComponentProvider"),await gy(t,new Th))),t._onlineComponents}function oM(t){return CT(t).then(e=>e.syncEngine)}async function aM(t){const e=await CT(t),n=e.eventManager;return n.onListen=HL.bind(null,e.syncEngine),n.onUnlisten=WL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KL.bind(null,e.syncEngine),n}function cM(t,e,n={}){const r=new Jr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const f=new rM({next:p=>{f.Nu(),o.enqueueAndForget(()=>LL(i,d)),p.fromCache&&l.source==="server"?u.reject(new oe($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new FL(a,f,{includeMetadataChanges:!0,qa:!0});return DL(i,d)}(await aM(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function PT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const _y=new Map;/**
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
 */const kT="firestore.googleapis.com",yy=!0;class vy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kT,this.ssl=yy}else this.host=e.host,this.ssl=e.ssl??yy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MD)throw new oe($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lx;switch(r.type){case"firstParty":return new dx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_y.get(n);r&&(te("ComponentProvider","Removing Datastore"),_y.delete(n),r.terminate())}(this),Promise.resolve()}}function lM(t,e,n,r={}){var u;t=Ui(t,iu);const s=us(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Id(`https://${a}`),Ad("Firestore",!0)),i.host!==kT&&i.host!==a&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!Ls(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=Nt.MOCK_USER;else{f=Cw(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new oe($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Nt(p)}t._authCredentials=new ux(new Eb(f,d))}}/**
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
 */class ou{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ou(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ka(n,pt._jsonSchema))return new pt(e,r||null,new fe(He.fromString(n.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:ot("string",pt._jsonSchemaVersion),referencePath:ot("string")};class Zr extends ou{constructor(e,n,r){super(e,n,Ub(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new fe(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function gF(t,e,...n){if(t=Ze(t),wb("collection","path",e),t instanceof iu){const r=He.fromString(e,...n);return x_(r),new Zr(t,null,r)}{if(!(t instanceof pt||t instanceof Zr))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return x_(r),new Zr(t.firestore,null,r)}}function _F(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=Fd.newId()),wb("doc","path",e),t instanceof iu){const r=He.fromString(e,...n);return N_(r),new pt(t,null,new fe(r))}{if(!(t instanceof pt||t instanceof Zr))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return N_(r),new pt(t.firestore,t instanceof Zr?t.converter:null,new fe(r))}}/**
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
 */const Ey="AsyncQueue";class wy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hT(this,"async_queue_retry"),this._c=()=>{const r=uf();r&&te(Ey,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=uf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Jr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zi(e))throw e;te(Ey,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,mr("INTERNAL UNHANDLED ERROR: ",by(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=sp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&me(47125,{Pc:by(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function by(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class au extends iu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wy(e),this._firestoreClient=void 0,await e}}}function uM(t,e){const n=typeof t=="object"?t:Cd(),r=typeof t=="string"?t:ll,s=$l(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Aw("firestore");i&&lM(s,...i)}return s}function lp(t){if(t._terminated)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fM(t),t._firestoreClient}function fM(t){var r,s,i;const e=t._freezeSettings(),n=function(a,l,u,f){return new kx(a,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,PT(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new sM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(Rt.fromBase64String(e))}catch(n){throw new oe($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ka(e,fn._jsonSchema))return fn.fromBase64String(e.bytes)}}fn._jsonSchemaVersion="firestore/bytes/1.0",fn._jsonSchema={type:ot("string",fn._jsonSchemaVersion),bytes:ot("string")};/**
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
 */class cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class up{constructor(e){this._methodName=e}}/**
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
 */class Hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Hn._jsonSchemaVersion}}static fromJSON(e){if(ka(e,Hn._jsonSchema))return new Hn(e.latitude,e.longitude)}}Hn._jsonSchemaVersion="firestore/geoPoint/1.0",Hn._jsonSchema={type:ot("string",Hn._jsonSchemaVersion),latitude:ot("number"),longitude:ot("number")};/**
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
 */class zn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ka(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new zn(e.vectorValues);throw new oe($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:ot("string",zn._jsonSchemaVersion),vectorValues:ot("object")};/**
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
 */const hM=/^__.*__$/;class dM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}class OT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function NT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:t})}}class fp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new fp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return vl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(NT(this.Ac)&&hM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class pM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nu(e)}Cc(e,n,r,s=!1){return new fp({Ac:e,methodName:n,Dc:r,path:It.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xT(t){const e=t._freezeSettings(),n=nu(t._databaseId);return new pM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DT(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);hp("Data must be an object, but it was:",o,r);const a=LT(r,o);let l,u;if(i.merge)l=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const p=Ih(e,d,n);if(!o.contains(p))throw new oe($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);VT(f,p)||f.push(p)}l=new Zt(f),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new dM(new Gt(a),l,u)}class lu extends up{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lu}}function mM(t,e,n,r){const s=t.Cc(1,e,n);hp("Data must be an object, but it was:",s,r);const i=[],o=Gt.empty();hs(r,(l,u)=>{const f=dp(e,l,n);u=Ze(u);const d=s.yc(f);if(u instanceof lu)i.push(f);else{const p=uu(u,d);p!=null&&(i.push(f),o.set(f,p))}});const a=new Zt(i);return new OT(o,a,s.fieldTransforms)}function gM(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[Ih(e,r,n)],l=[s];if(i.length%2!=0)throw new oe($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Ih(e,i[p])),l.push(i[p+1]);const u=[],f=Gt.empty();for(let p=a.length-1;p>=0;--p)if(!VT(u,a[p])){const g=a[p];let y=l[p];y=Ze(y);const w=o.yc(g);if(y instanceof lu)u.push(g);else{const k=uu(y,w);k!=null&&(u.push(g),f.set(g,k))}}const d=new Zt(u);return new OT(f,d,o.fieldTransforms)}function uu(t,e){if(MT(t=Ze(t)))return hp("Unsupported field value:",e,t),LT(t,e);if(t instanceof up)return function(r,s){if(!NT(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=uu(a,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ze.fromDate(r);return{timestampValue:ml(s.serializer,i)}}if(r instanceof ze){const i=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ml(s.serializer,i)}}if(r instanceof Hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:tT(s.serializer,r._byteString)};if(r instanceof pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zn)return function(o,a){return{mapValue:{fields:{[kb]:{stringValue:Ob},[ul]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return qd(a.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ud(r)}`)}(t,e)}function LT(t,e){const n={};return Ib(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,s)=>{const i=uu(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function MT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Hn||t instanceof fn||t instanceof pt||t instanceof up||t instanceof zn)}function hp(t,e,n){if(!MT(n)||!bb(n)){const r=Ud(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Ih(t,e,n){if((e=Ze(e))instanceof cu)return e._internalPath;if(typeof e=="string")return dp(t,e);throw vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const _M=new RegExp("[~\\*/\\[\\]]");function dp(t,e,n){if(e.search(_M)>=0)throw vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cu(...e.split("."))._internalPath}catch{throw vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new oe($.INVALID_ARGUMENT,a+t+l)}function VT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class FT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(UT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yM extends FT{data(){return super.data()}}function UT(t,e){return typeof e=="string"?dp(t,e):e instanceof cu?e._internalPath:e._delegate._internalPath}/**
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
 */function vM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EM{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ul].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>nt(o.doubleValue));return new zn(n)}convertGeoPoint(e){return new Hn(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const n=ns(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);xe(aT(r),9688,{name:e});const s=new fa(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||mr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function jT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class _c{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ai extends FT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(UT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ai._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ai._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ai._jsonSchema={type:ot("string",Ai._jsonSchemaVersion),bundleSource:ot("string","DocumentSnapshot"),bundleName:ot("string"),bundle:ot("string")};class Lc extends Ai{data(e={}){return super.data(e)}}class Ri{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _c(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lc(this._firestore,this._userDataWriter,r.key,r,new _c(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Lc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new _c(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Lc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new _c(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:wM(a.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ri._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}Ri._jsonSchemaVersion="firestore/querySnapshot/1.0",Ri._jsonSchema={type:ot("string",Ri._jsonSchemaVersion),bundleSource:ot("string","QuerySnapshot"),bundleName:ot("string"),bundle:ot("string")};class bM extends EM{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function yF(t){t=Ui(t,ou);const e=Ui(t.firestore,au),n=lp(e),r=new bM(e);return vM(t._query),cM(n,t._query).then(s=>new Ri(e,r,t,s))}function vF(t,e,n){t=Ui(t,pt);const r=Ui(t.firestore,au),s=jT(t.converter,e,n);return BT(r,[DT(xT(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function BT(t,e){return function(r,s){const i=new Jr;return r.asyncQueue.enqueueAndForget(async()=>GL(await oM(r),s,i)),i.promise}(lp(t),e)}/**
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
 */class TM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=xT(e)}set(e,n,r){this._verifyNotCommitted();const s=hf(e,this._firestore),i=jT(s.converter,n,r),o=DT(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,dn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=hf(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof cu?gM(this._dataReader,"WriteBatch.update",i._key,n,r,s):mM(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,dn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=hf(e,this._firestore);return this._mutations=this._mutations.concat(new Wd(n._key,dn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hf(t,e){if((t=Ze(t)).firestore!==e)throw new oe($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function EF(t){return lp(t=Ui(t,au)),new TM(t,e=>BT(t,e))}(function(e,n=!0){(function(s){Xi=s})(qs),Ms(new es("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new au(new fx(r.getProvider("auth-internal")),new px(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fa(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Fn(C_,P_,e),Fn(C_,P_,"esm2020")})();/**
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
 */const $T="firebasestorage.googleapis.com",HT="storageBucket",IM=2*60*1e3,AM=10*60*1e3;/**
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
 */class tt extends Gn{constructor(e,n,r=0){super(df(e),`Firebase Storage: ${n} (${df(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return df(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function df(t){return"storage/"+t}function pp(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function RM(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function SM(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function PM(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kM(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function OM(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NM(){return new tt(et.CANCELED,"User canceled the upload/download.")}function xM(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function DM(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+HT+"' property when initializing the app?")}function MM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VM(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ah(t){return new tt(et.INVALID_ARGUMENT,t)}function zT(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function UM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qo(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Eo(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw DM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${f}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},w=n===$T?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",P=new RegExp(`^https?://${w}/${s}/${k}`,"i"),_=[{regex:a,indices:l,postModify:i},{regex:g,indices:y,postModify:u},{regex:P,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<_.length;S++){const D=_[S],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let v=M[D.indices.path];v||(v=""),r=new en(T,v),D.postModify(r);break}}if(r==null)throw xM(e);return r}}class jM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function BM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function d(k){s=setTimeout(()=>{s=null,t(g,l())},k)}function p(){i&&clearTimeout(i)}function g(k,...P){if(u){p();return}if(k){p(),f.call(null,k,...P);return}if(l()||o){p(),f.call(null,k,...P);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let y=!1;function w(k){y||(y=!0,p(),!u&&(s!==null?(k||(a=2),clearTimeout(s),d(0)):k||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function $M(t){t(!1)}/**
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
 */function HM(t){return t!==void 0}function zM(t){return typeof t=="object"&&!Array.isArray(t)}function mp(t){return typeof t=="string"||t instanceof String}function Ty(t){return gp()&&t instanceof Blob}function gp(){return typeof Blob<"u"}function Iy(t,e,n,r){if(r<e)throw Ah(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ah(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function _p(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Os;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Os||(Os={}));/**
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
 */function qM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class WM{constructor(e,n,r,s,i,o,a,l,u,f,d,p=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=p,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,w)=>{this.resolve_=y,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Os.NO_ERROR,l=i.getStatus();if(!a||qM(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Os.ABORT;r(!1,new yc(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new yc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=pp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?zT():NM();o(l)}else{const l=OM();o(l)}};this.canceled_?n(!1,new yc(!1,null,!0)):this.backoffId_=BM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$M(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function KM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XM(t,e,n,r,s,i,o=!0,a=!1){const l=qT(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return YM(f,e),KM(f,n),GM(f,i),QM(f,r),new WM(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function JM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZM(...t){const e=JM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(gp())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function e4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function t4(t){if(typeof atob>"u")throw FM("base-64");return atob(t)}/**
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
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pf{constructor(e,n){this.data=e,this.contentType=n||null}}function n4(t,e){switch(t){case xn.RAW:return new pf(WT(e));case xn.BASE64:case xn.BASE64URL:return new pf(KT(t,e));case xn.DATA_URL:return new pf(s4(e),i4(e))}throw pp()}function WT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function r4(t){let e;try{e=decodeURIComponent(t)}catch{throw qo(xn.DATA_URL,"Malformed data URL.")}return WT(e)}function KT(t,e){switch(t){case xn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw qo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw qo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=t4(e)}catch(s){throw s.message.includes("polyfill")?s:qo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class GT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qo(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=o4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function s4(t){const e=new GT(t);return e.base64?KT(xn.BASE64,e.rest):r4(e.rest)}function i4(t){return new GT(t).contentType}function o4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class $r{constructor(e,n){let r=0,s="";Ty(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ty(this.data_)){const r=this.data_,s=e4(r,e,n);return s===null?null:new $r(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new $r(r,!0)}}static getBlob(...e){if(gp()){const n=e.map(r=>r instanceof $r?r.data_:r);return new $r(ZM.apply(null,n))}else{const n=e.map(o=>mp(o)?n4(xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new $r(s,!0)}}uploadData(){return this.data_}}/**
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
 */function YT(t){let e;try{e=JSON.parse(t)}catch{return null}return zM(e)?e:null}/**
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
 */function a4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function c4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function QT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function l4(t,e){return e}class jt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||l4}}let vc=null;function u4(t){return!mp(t)||t.length<2?t:QT(t)}function XT(){if(vc)return vc;const t=[];t.push(new jt("bucket")),t.push(new jt("generation")),t.push(new jt("metageneration")),t.push(new jt("name","fullPath",!0));function e(i,o){return u4(o)}const n=new jt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new jt("size");return s.xform=r,t.push(s),t.push(new jt("timeCreated")),t.push(new jt("updated")),t.push(new jt("md5Hash",null,!0)),t.push(new jt("cacheControl",null,!0)),t.push(new jt("contentDisposition",null,!0)),t.push(new jt("contentEncoding",null,!0)),t.push(new jt("contentLanguage",null,!0)),t.push(new jt("contentType",null,!0)),t.push(new jt("metadata","customMetadata",!0)),vc=t,vc}function f4(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new en(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function h4(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return f4(r,t),r}function JT(t,e,n){const r=YT(e);return r===null?null:h4(t,r,n)}function d4(t,e,n,r){const s=YT(e);if(s===null||!mp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,d=t.fullPath,p="/b/"+o(f)+"/o/"+o(d),g=_p(p,n,r),y=qT({alt:"media",token:u});return g+y})[0]}function p4(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ZT{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function e0(t){if(!t)throw pp()}function m4(t,e){function n(r,s){const i=JT(t,s,e);return e0(i!==null),i}return n}function g4(t,e){function n(r,s){const i=JT(t,s,e);return e0(i!==null),d4(i,s,t.host,t._protocol)}return n}function t0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=PM():s=CM():n.getStatus()===402?s=SM(t.bucket):n.getStatus()===403?s=kM(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function _4(t){const e=t0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=RM(t.path)),i.serverResponse=s.serverResponse,i}return n}function y4(t,e,n){const r=e.fullServerUrl(),s=_p(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ZT(s,i,g4(t,n),o);return a.errorHandler=_4(e),a}function v4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function E4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=v4(null,e)),r}function w4(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let S=0;S<2;S++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=E4(e,r,s),f=p4(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=$r.getBlob(d,r,p);if(g===null)throw MM();const y={name:u.fullPath},w=_p(i,t.host,t._protocol),k="POST",P=t.maxUploadRetryTime,R=new ZT(w,k,m4(t,n),P);return R.urlParams=y,R.headers=o,R.body=g.uploadData(),R.errorHandler=t0(e),R}class b4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Os.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Os.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Os.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Eo("cannot .send() more than once");if(us(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class T4 extends b4{initXhr(){this.xhr_.responseType="text"}}function n0(){return new T4}/**
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
 */class js{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return QT(this._location.path)}get storage(){return this._service}get parent(){const e=a4(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UM(e)}}function I4(t,e,n){t._throwIfRoot("uploadBytes");const r=w4(t.storage,t._location,XT(),new $r(e,!0),n);return t.storage.makeRequestWithTokens(r,n0).then(s=>({metadata:s,ref:t}))}function A4(t){t._throwIfRoot("getDownloadURL");const e=y4(t.storage,t._location,XT());return t.storage.makeRequestWithTokens(e,n0).then(n=>{if(n===null)throw VM();return n})}function R4(t,e){const n=c4(t._location.path,e),r=new en(t._location.bucket,n);return new js(t.storage,r)}/**
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
 */function S4(t){return/^[A-Za-z]+:\/\//.test(t)}function C4(t,e){return new js(t,e)}function r0(t,e){if(t instanceof yp){const n=t;if(n._bucket==null)throw LM();const r=new js(n,n._bucket);return e!=null?r0(r,e):r}else return e!==void 0?R4(t,e):t}function P4(t,e){if(e&&S4(e)){if(t instanceof yp)return C4(t,e);throw Ah("To use ref(service, url), the first argument must be a Storage instance.")}else return r0(t,e)}function Ay(t,e){const n=e==null?void 0:e[HT];return n==null?null:en.makeFromBucketSpec(n,t)}function k4(t,e,n,r={}){t.host=`${e}:${n}`;const s=us(e);s&&(Id(`https://${t.host}/b`),Ad("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Cw(i,t.app.options.projectId))}class yp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=$T,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IM,this._maxUploadRetryTime=AM,this._requests=new Set,s!=null?this._bucket=en.makeFromBucketSpec(s,this._host):this._bucket=Ay(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=Ay(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new jM(zT());{const o=XM(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ry="@firebase/storage",Sy="0.14.0";/**
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
 */const s0="storage";function wF(t,e,n){return t=Ze(t),I4(t,e,n)}function bF(t){return t=Ze(t),A4(t)}function TF(t,e){return t=Ze(t),P4(t,e)}function O4(t=Cd(),e){t=Ze(t);const r=$l(t,s0).getImmediate({identifier:e}),s=Aw("storage");return s&&N4(r,...s),r}function N4(t,e,n,r={}){k4(t,e,n,r)}function x4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new yp(n,r,s,e,qs)}function D4(){Ms(new es(s0,x4,"PUBLIC").setMultipleInstances(!0)),Fn(Ry,Sy,""),Fn(Ry,Sy,"esm2020")}D4();const L4=tn(t=>{const e=zs(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Ow(n),s=zN(r),i=uM(r),o=O4(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function M4(t,e,n){return(e=F4(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cy(Object(n),!0).forEach(function(r){M4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function V4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function F4(t){var e=V4(t,"string");return typeof e=="symbol"?e:e+""}const Py=()=>{};let vp={},i0={},o0=null,a0={mark:Py,measure:Py};try{typeof window<"u"&&(vp=window),typeof document<"u"&&(i0=document),typeof MutationObserver<"u"&&(o0=MutationObserver),typeof performance<"u"&&(a0=performance)}catch{}const{userAgent:ky=""}=vp.navigator||{},as=vp,qe=i0,Oy=o0,Ec=a0;as.document;const br=!!qe.documentElement&&!!qe.head&&typeof qe.addEventListener=="function"&&typeof qe.createElement=="function",c0=~ky.indexOf("MSIE")||~ky.indexOf("Trident/");var U4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,j4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,l0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},B4={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},u0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vt="classic",fu="duotone",$4="sharp",H4="sharp-duotone",f0=[Vt,fu,$4,H4],z4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},q4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},W4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),K4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},G4=["fak","fa-kit","fakd","fa-kit-duotone"],Ny={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Y4=["kit"],Q4={kit:{"fa-kit":"fak"}},X4=["fak","fakd"],J4={kit:{fak:"fa-kit"}},xy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},wc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Z4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],eV=["fak","fa-kit","fakd","fa-kit-duotone"],tV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},nV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},rV={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Rh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},sV=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Sh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Z4,...sV],iV=["solid","regular","light","thin","duotone","brands"],h0=[1,2,3,4,5,6,7,8,9,10],oV=h0.concat([11,12,13,14,15,16,17,18,19,20]),aV=[...Object.keys(rV),...iV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wc.GROUP,wc.SWAP_OPACITY,wc.PRIMARY,wc.SECONDARY].concat(h0.map(t=>"".concat(t,"x"))).concat(oV.map(t=>"w-".concat(t))),cV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const _r="___FONT_AWESOME___",Ch=16,d0="fa",p0="svg-inline--fa",Bs="data-fa-i2svg",Ph="data-fa-pseudo-element",lV="data-fa-pseudo-element-pending",Ep="data-prefix",wp="data-icon",Dy="fontawesome-i2svg",uV="async",fV=["HTML","HEAD","STYLE","SCRIPT"],m0=(()=>{try{return!0}catch{return!1}})();function La(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Vt]}})}const g0=W({},l0);g0[Vt]=W(W(W(W({},{"fa-duotone":"duotone"}),l0[Vt]),Ny.kit),Ny["kit-duotone"]);const hV=La(g0),kh=W({},K4);kh[Vt]=W(W(W(W({},{duotone:"fad"}),kh[Vt]),xy.kit),xy["kit-duotone"]);const Ly=La(kh),Oh=W({},Rh);Oh[Vt]=W(W({},Oh[Vt]),J4.kit);const bp=La(Oh),Nh=W({},nV);Nh[Vt]=W(W({},Nh[Vt]),Q4.kit);La(Nh);const dV=U4,_0="fa-layers-text",pV=j4,mV=W({},z4);La(mV);const gV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mf=B4,_V=[...Y4,...aV],Wo=as.FontAwesomeConfig||{};function yV(t){var e=qe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}qe&&typeof qe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=vV(yV(n));s!=null&&(Wo[r]=s)});const y0={styleDefault:"solid",familyDefault:Vt,cssPrefix:d0,replacementClass:p0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wo.familyPrefix&&(Wo.cssPrefix=Wo.familyPrefix);const zi=W(W({},y0),Wo);zi.autoReplaceSvg||(zi.observeMutations=!1);const ce={};Object.keys(y0).forEach(t=>{Object.defineProperty(ce,t,{enumerable:!0,set:function(e){zi[t]=e,Ko.forEach(n=>n(ce))},get:function(){return zi[t]}})});Object.defineProperty(ce,"familyPrefix",{enumerable:!0,set:function(t){zi.cssPrefix=t,Ko.forEach(e=>e(ce))},get:function(){return zi.cssPrefix}});as.FontAwesomeConfig=ce;const Ko=[];function EV(t){return Ko.push(t),()=>{Ko.splice(Ko.indexOf(t),1)}}const kr=Ch,Dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wV(t){if(!t||!br)return;const e=qe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=qe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return qe.head.insertBefore(e,r),t}const bV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ma(){let t=12,e="";for(;t-- >0;)e+=bV[Math.random()*62|0];return e}function to(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Tp(t){return t.classList?to(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function v0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function TV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(v0(t[n]),'" '),"").trim()}function hu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ip(t){return t.size!==Dn.size||t.x!==Dn.x||t.y!==Dn.y||t.rotate!==Dn.rotate||t.flipX||t.flipY}function IV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function AV(t){let{transform:e,width:n=Ch,height:r=Ch,startCentered:s=!1}=t,i="";return s&&c0?i+="translate(".concat(e.x/kr-n/2,"em, ").concat(e.y/kr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/kr,"em), calc(-50% + ").concat(e.y/kr,"em)) "):i+="translate(".concat(e.x/kr,"em, ").concat(e.y/kr,"em) "),i+="scale(".concat(e.size/kr*(e.flipX?-1:1),", ").concat(e.size/kr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var RV=`:root, :host {
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
}`;function E0(){const t=d0,e=p0,n=ce.cssPrefix,r=ce.replacementClass;let s=RV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let My=!1;function gf(){ce.autoAddCss&&!My&&(wV(E0()),My=!0)}var SV={mixout(){return{dom:{css:E0,insertCss:gf}}},hooks(){return{beforeDOMElementCreation(){gf()},beforeI2svg(){gf()}}}};const yr=as||{};yr[_r]||(yr[_r]={});yr[_r].styles||(yr[_r].styles={});yr[_r].hooks||(yr[_r].hooks={});yr[_r].shims||(yr[_r].shims=[]);var Ln=yr[_r];const w0=[],b0=function(){qe.removeEventListener("DOMContentLoaded",b0),El=1,w0.map(t=>t())};let El=!1;br&&(El=(qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(qe.readyState),El||qe.addEventListener("DOMContentLoaded",b0));function CV(t){br&&(El?setTimeout(t,0):w0.push(t))}function Ma(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?v0(t):"<".concat(e," ").concat(TV(n),">").concat(r.map(Ma).join(""),"</").concat(e,">")}function Vy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _f=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,f;for(r===void 0?(l=1,f=e[i[0]]):(l=0,f=r);l<o;l++)u=i[l],f=a(f,e[u],u,e);return f};function PV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function xh(t){const e=PV(t);return e.length===1?e[0].toString(16):null}function kV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Fy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Dh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Fy(e);typeof Ln.hooks.addPack=="function"&&!r?Ln.hooks.addPack(t,Fy(e)):Ln.styles[t]=W(W({},Ln.styles[t]||{}),s),t==="fas"&&Dh("fa",e)}const{styles:ga,shims:OV}=Ln,T0=Object.keys(bp),NV=T0.reduce((t,e)=>(t[e]=Object.keys(bp[e]),t),{});let Ap=null,I0={},A0={},R0={},S0={},C0={};function xV(t){return~_V.indexOf(t)}function DV(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!xV(s)?s:null}const P0=()=>{const t=r=>_f(ga,(s,i,o)=>(s[o]=_f(i,r,{}),s),{});I0=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),A0=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),C0=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ga||ce.autoFetchSvg,n=_f(OV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});R0=n.names,S0=n.unicodes,Ap=du(ce.styleDefault,{family:ce.familyDefault})};EV(t=>{Ap=du(t.styleDefault,{family:ce.familyDefault})});P0();function Rp(t,e){return(I0[t]||{})[e]}function LV(t,e){return(A0[t]||{})[e]}function Rs(t,e){return(C0[t]||{})[e]}function k0(t){return R0[t]||{prefix:null,iconName:null}}function MV(t){const e=S0[t],n=Rp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cs(){return Ap}const O0=()=>({prefix:null,iconName:null,rest:[]});function VV(t){let e=Vt;const n=T0.reduce((r,s)=>(r[s]="".concat(ce.cssPrefix,"-").concat(s),r),{});return f0.forEach(r=>{(t.includes(n[r])||t.some(s=>NV[r].includes(s)))&&(e=r)}),e}function du(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Vt}=e,r=hV[n][t];if(n===fu&&!t)return"fad";const s=Ly[n][t]||Ly[n][r],i=t in Ln.styles?t:null;return s||i||null}function FV(t){let e=[],n=null;return t.forEach(r=>{const s=DV(ce.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Uy(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function pu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=Sh.concat(eV),i=Uy(t.filter(d=>s.includes(d))),o=Uy(t.filter(d=>!Sh.includes(d))),a=i.filter(d=>(r=d,!u0.includes(d))),[l=null]=a,u=VV(i),f=W(W({},FV(o)),{},{prefix:du(l,{family:u})});return W(W(W({},f),$V({values:t,family:u,styles:ga,config:ce,canonical:f,givenPrefix:r})),UV(n,r,f))}function UV(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?k0(s):{},o=Rs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!ga.far&&ga.fas&&!ce.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const jV=f0.filter(t=>t!==Vt||t!==fu),BV=Object.keys(Rh).filter(t=>t!==Vt).map(t=>Object.keys(Rh[t])).flat();function $V(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===fu,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&jV.includes(n)&&(Object.keys(i).find(p=>BV.includes(p))||o.autoFetchSvg)){const p=W4.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=Rs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=cs()||"fas"),r}class HV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),Dh(i,s[i]);const o=bp[Vt][i];o&&Dh(o,s[i]),P0()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let jy=[],hi={};const Si={},zV=Object.keys(Si);function qV(t,e){let{mixoutsTo:n}=e;return jy=t,hi={},Object.keys(Si).forEach(r=>{zV.indexOf(r)===-1&&delete Si[r]}),jy.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{hi[o]||(hi[o]=[]),hi[o].push(i[o])})}r.provides&&r.provides(Si)}),n}function Lh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(hi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function $s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(hi[t]||[]).forEach(i=>{i.apply(null,n)})}function ls(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Si[t]?Si[t].apply(null,e):void 0}function Mh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||cs();if(e)return e=Rs(n,e)||e,Vy(N0.definitions,n,e)||Vy(Ln.styles,n,e)}const N0=new HV,WV=()=>{ce.autoReplaceSvg=!1,ce.observeMutations=!1,$s("noAuto")},KV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return br?($s("beforeI2svg",t),ls("pseudoElements2svg",t),ls("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ce.autoReplaceSvg===!1&&(ce.autoReplaceSvg=!0),ce.observeMutations=!0,CV(()=>{YV({autoReplaceSvgRoot:e}),$s("watch",t)})}},GV={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=du(t[0]);return{prefix:n,iconName:Rs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ce.cssPrefix,"-"))>-1||t.match(dV))){const e=pu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||cs(),iconName:Rs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=cs();return{prefix:e,iconName:Rs(e,t)||t}}}},nn={noAuto:WV,config:ce,dom:KV,parse:GV,library:N0,findIconDefinition:Mh,toHtml:Ma},YV=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=qe}=t;(Object.keys(Ln.styles).length>0||ce.autoFetchSvg)&&br&&ce.autoReplaceSvg&&nn.dom.i2svg({node:e})};function mu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ma(n))}}),Object.defineProperty(t,"node",{get:function(){if(!br)return;const n=qe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function QV(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Ip(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=hu(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function XV(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ce.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function Sp(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:f,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,y=X4.includes(r),w=[ce.replacementClass,s?"".concat(ce.cssPrefix,"-").concat(s):""].filter(D=>f.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(f.classes).join(" ");let k={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const P=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(k.attributes[Bs]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||ma())},children:[a]}),delete k.attributes.title);const R=W(W({},k),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:W(W({},P),f.styles)}),{children:_,attributes:S}=n.found&&e.found?ls("generateAbstractMask",R)||{children:[],attributes:{}}:ls("generateAbstractIcon",R)||{children:[],attributes:{}};return R.children=_,R.attributes=S,o?XV(R):QV(R)}function By(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Bs]="");const u=W({},o.styles);Ip(s)&&(u.transform=AV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=hu(u);f.length>0&&(l.style=f);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function JV(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hu(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:yf}=Ln;function Vh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ce.cssPrefix,"-").concat(mf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(mf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(mf.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const ZV={found:!1,width:512,height:512};function e6(t,e){!m0&&!ce.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fh(t,e){let n=e;return e==="fa"&&ce.styleDefault!==null&&(e=cs()),new Promise((r,s)=>{if(n==="fa"){const i=k0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&yf[e]&&yf[e][t]){const i=yf[e][t];return r(Vh(i))}e6(t,e),r(W(W({},ZV),{},{icon:ce.showMissingIcons&&t?ls("missingIconAbstract")||{}:{}}))})}const $y=()=>{},Uh=ce.measurePerformance&&Ec&&Ec.mark&&Ec.measure?Ec:{mark:$y,measure:$y},Co='FA "6.7.2"',t6=t=>(Uh.mark("".concat(Co," ").concat(t," begins")),()=>x0(t)),x0=t=>{Uh.mark("".concat(Co," ").concat(t," ends")),Uh.measure("".concat(Co," ").concat(t),"".concat(Co," ").concat(t," begins"),"".concat(Co," ").concat(t," ends"))};var Cp={begin:t6,end:x0};const Mc=()=>{};function Hy(t){return typeof(t.getAttribute?t.getAttribute(Bs):null)=="string"}function n6(t){const e=t.getAttribute?t.getAttribute(Ep):null,n=t.getAttribute?t.getAttribute(wp):null;return e&&n}function r6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ce.replacementClass)}function s6(){return ce.autoReplaceSvg===!0?Vc.replace:Vc[ce.autoReplaceSvg]||Vc.replace}function i6(t){return qe.createElementNS("http://www.w3.org/2000/svg",t)}function o6(t){return qe.createElement(t)}function D0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?i6:o6}=e;if(typeof t=="string")return qe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(D0(i,{ceFn:n}))}),r}function a6(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Vc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(D0(n),e)}),e.getAttribute(Bs)===null&&ce.keepOriginalSource){let n=qe.createComment(a6(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Tp(e).indexOf(ce.replacementClass))return Vc.replace(t);const r=new RegExp("".concat(ce.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ce.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Ma(i)).join(`
`);e.setAttribute(Bs,""),e.innerHTML=s}};function zy(t){t()}function L0(t,e){const n=typeof e=="function"?e:Mc;if(t.length===0)n();else{let r=zy;ce.mutateApproach===uV&&(r=as.requestAnimationFrame||zy),r(()=>{const s=s6(),i=Cp.begin("mutate");t.map(s),i(),n()})}}let Pp=!1;function M0(){Pp=!0}function jh(){Pp=!1}let wl=null;function qy(t){if(!Oy||!ce.observeMutations)return;const{treeCallback:e=Mc,nodeCallback:n=Mc,pseudoElementsCallback:r=Mc,observeMutationsRoot:s=qe}=t;wl=new Oy(i=>{if(Pp)return;const o=cs();to(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Hy(a.addedNodes[0])&&(ce.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ce.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Hy(a.target)&&~gV.indexOf(a.attributeName))if(a.attributeName==="class"&&n6(a.target)){const{prefix:l,iconName:u}=pu(Tp(a.target));a.target.setAttribute(Ep,l||o),u&&a.target.setAttribute(wp,u)}else r6(a.target)&&n(a.target)})}),br&&wl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function c6(){wl&&wl.disconnect()}function l6(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function u6(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=pu(Tp(t));return s.prefix||(s.prefix=cs()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=LV(s.prefix,t.innerText)||Rp(s.prefix,xh(t.innerText))),!s.iconName&&ce.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function f6(t){const e=to(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ce.autoA11y&&(n?e["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(r||ma()):(e["aria-hidden"]="true",e.focusable="false")),e}function h6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=u6(t),i=f6(t),o=Lh("parseNodeAttributes",{},t);let a=e.styleParser?l6(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:d6}=Ln;function V0(t){const e=ce.autoReplaceSvg==="nest"?Wy(t,{styleParser:!1}):Wy(t);return~e.extra.classes.indexOf(_0)?ls("generateLayersText",t,e):ls("generateSvgReplacementMutation",t,e)}function p6(){return[...G4,...Sh]}function Ky(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!br)return Promise.resolve();const n=qe.documentElement.classList,r=f=>n.add("".concat(Dy,"-").concat(f)),s=f=>n.remove("".concat(Dy,"-").concat(f)),i=ce.autoFetchSvg?p6():u0.concat(Object.keys(d6));i.includes("fa")||i.push("fa");const o=[".".concat(_0,":not([").concat(Bs,"])")].concat(i.map(f=>".".concat(f,":not([").concat(Bs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=to(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Cp.begin("onTree"),u=a.reduce((f,d)=>{try{const p=V0(d);p&&f.push(p)}catch(p){m0||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,d)=>{Promise.all(u).then(p=>{L0(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),f()})}).catch(p=>{l(),d(p)})})}function m6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;V0(t).then(n=>{n&&L0([n],e)})}function g6(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Mh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Mh(s||{})),t(r,W(W({},n),{},{mask:s}))}}const _6=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return mu(W({type:"icon"},t),()=>($s("beforeDOMElementCreation",{iconDefinition:t,params:e}),ce.autoA11y&&(o?u["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(a||ma()):(u["aria-hidden"]="true",u.focusable="false")),Sp({icons:{main:Vh(g),mask:s?Vh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:W(W({},Dn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:f,classes:l}})))};var y6={mixout(){return{icon:g6(_6)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ky,t.nodeCallback=m6,t}}},provides(t){t.i2svg=function(e){const{node:n=qe,callback:r=()=>{}}=e;return Ky(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:f,extra:d}=n;return new Promise((p,g)=>{Promise.all([Fh(r,o),u.iconName?Fh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[w,k]=y;p([e,Sp({icons:{main:w,mask:k},prefix:o,iconName:r,transform:a,symbol:l,maskId:f,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=hu(o);a.length>0&&(r.style=a);let l;return Ip(i)&&(l=ls("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},v6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return mu({type:"layer"},()=>{$s("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ce.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},E6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return mu({type:"counter",content:t},()=>($s("beforeDOMElementCreation",{content:t,params:e}),JV({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ce.cssPrefix,"-layers-counter"),...r]}})))}}}},w6={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Dn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return mu({type:"text",content:t},()=>($s("beforeDOMElementCreation",{content:t,params:e}),By({content:t,transform:W(W({},Dn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ce.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(c0){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ce.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,By({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const b6=new RegExp('"',"ug"),Gy=[1105920,1112319],Yy=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),q4),cV),tV),Bh=Object.keys(Yy).reduce((t,e)=>(t[e.toLowerCase()]=Yy[e],t),{}),T6=Object.keys(Bh).reduce((t,e)=>{const n=Bh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function I6(t){const e=t.replace(b6,""),n=kV(e,0),r=n>=Gy[0]&&n<=Gy[1],s=e.length===2?e[0]===e[1]:!1;return{value:xh(s?e[0]:e),isSecondary:r||s}}function A6(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Bh[n]||{})[s]||T6[n]}function Qy(t,e){const n="".concat(lV).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=to(t.children).filter(p=>p.getAttribute(Ph)===e)[0],a=as.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(pV),f=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=A6(l,f);const{value:y,isSecondary:w}=I6(p),k=u[0].startsWith("FontAwesome");let P=Rp(g,y),R=P;if(k){const _=MV(y);_.iconName&&_.prefix&&(P=_.iconName,g=_.prefix)}if(P&&!w&&(!o||o.getAttribute(Ep)!==g||o.getAttribute(wp)!==R)){t.setAttribute(n,R),o&&t.removeChild(o);const _=h6(),{extra:S}=_;S.attributes[Ph]=e,Fh(P,g).then(D=>{const M=Sp(W(W({},_),{},{icons:{main:D,mask:O0()},prefix:g,iconName:R,extra:S,watchable:!0})),T=qe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=M.map(v=>Ma(v)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function R6(t){return Promise.all([Qy(t,"::before"),Qy(t,"::after")])}function S6(t){return t.parentNode!==document.head&&!~fV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ph)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xy(t){if(br)return new Promise((e,n)=>{const r=to(t.querySelectorAll("*")).filter(S6).map(R6),s=Cp.begin("searchPseudoElements");M0(),Promise.all(r).then(()=>{s(),jh(),e()}).catch(()=>{s(),jh(),n()})})}var C6={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Xy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=qe}=e;ce.searchPseudoElements&&Xy(n)}}};let Jy=!1;var P6={mixout(){return{dom:{unwatch(){M0(),Jy=!0}}}},hooks(){return{bootstrap(){qy(Lh("mutationObserverCallbacks",{}))},noAuto(){c6()},watch(t){const{observeMutationsRoot:e}=t;Jy?jh():qy(Lh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Zy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var k6={mixout(){return{parse:{transform:t=>Zy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Zy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:W({},p.outer),children:[{tag:"g",attributes:W({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),p.path)}]}]}}}};const vf={x:0,y:0,width:"100%",height:"100%"};function ev(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function O6(t){return t.tag==="g"?t.children:[t]}var N6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?pu(n.split(" ").map(s=>s.trim())):O0();return r.prefix||(r.prefix=cs()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:f,icon:d}=i,p=IV({transform:a,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:W(W({},vf),{},{fill:"white"})},y=u.children?{children:u.children.map(ev)}:{},w={tag:"g",attributes:W({},p.inner),children:[ev(W({tag:u.tag,attributes:W(W({},u.attributes),p.path)},y))]},k={tag:"g",attributes:W({},p.outer),children:[w]},P="mask-".concat(o||ma()),R="clip-".concat(o||ma()),_={tag:"mask",attributes:W(W({},vf),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,k]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:O6(d)},_]};return n.push(S,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(P,")")},vf)}),{children:n,attributes:r}}}},x6={provides(t){let e=!1;as.matchMedia&&(e=as.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},D6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},L6=[SV,y6,v6,E6,w6,C6,P6,k6,N6,x6,D6];qV(L6,{mixoutsTo:nn});nn.noAuto;const M6=nn.config,V6=nn.library;nn.dom;const $h=nn.parse;nn.findIconDefinition;nn.toHtml;const F6=nn.icon;nn.layer;nn.text;nn.counter;function tv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function sr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tv(Object(n),!0).forEach(function(r){qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function U6(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function j6(t){var e=U6(t,"string");return typeof e=="symbol"?e:e+""}function bl(t){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bl(t)}function qt(t,e,n){return e=j6(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B6(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function $6(t,e){if(t==null)return{};var n=B6(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var H6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F0={exports:{}};(function(t){(function(e){var n=function(P,R,_){if(!u(R)||d(R)||p(R)||g(R)||l(R))return R;var S,D=0,M=0;if(f(R))for(S=[],M=R.length;D<M;D++)S.push(n(P,R[D],_));else{S={};for(var T in R)Object.prototype.hasOwnProperty.call(R,T)&&(S[P(T,_)]=n(P,R[T],_))}return S},r=function(P,R){R=R||{};var _=R.separator||"_",S=R.split||/(?=[A-Z])/;return P.split(S).join(_)},s=function(P){return y(P)?P:(P=P.replace(/[\-_\s]+(.)?/g,function(R,_){return _?_.toUpperCase():""}),P.substr(0,1).toLowerCase()+P.substr(1))},i=function(P){var R=s(P);return R.substr(0,1).toUpperCase()+R.substr(1)},o=function(P,R){return r(P,R).toLowerCase()},a=Object.prototype.toString,l=function(P){return typeof P=="function"},u=function(P){return P===Object(P)},f=function(P){return a.call(P)=="[object Array]"},d=function(P){return a.call(P)=="[object Date]"},p=function(P){return a.call(P)=="[object RegExp]"},g=function(P){return a.call(P)=="[object Boolean]"},y=function(P){return P=P-0,P===P},w=function(P,R){var _=R&&"process"in R?R.process:R;return typeof _!="function"?P:function(S,D){return _(S,P,D)}},k={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(P,R){return n(w(s,R),P)},decamelizeKeys:function(P,R){return n(w(o,R),P,R)},pascalizeKeys:function(P,R){return n(w(i,R),P)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(H6)})(F0);var z6=F0.exports,q6=["class","style"];function W6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=z6.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function K6(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function U0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return U0(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.class=K6(f);break;case"style":l.style=W6(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=$6(n,q6);return ut(t.tag,sr(sr(sr({},e),{},{class:s.class,style:sr(sr({},s.style),o)},s.attrs),a),r)}var j0=!1;try{j0=!0}catch{}function G6(){if(!j0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ef(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qt({},t,e):{}}function Y6(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qt(qt(qt(qt(qt(qt(qt(qt(qt(qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),qt(qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function nv(t){if(t&&bl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if($h.icon)return $h.icon(t);if(t===null)return null;if(bl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Q6=An({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return nv(e.icon)}),i=Fe(function(){return Ef("classes",Y6(e))}),o=Fe(function(){return Ef("transform",typeof e.transform=="string"?$h.transform(e.transform):e.transform)}),a=Fe(function(){return Ef("mask",nv(e.mask))}),l=Fe(function(){return F6(s.value,sr(sr(sr(sr({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Vn(l,function(f){if(!f)return G6("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Fe(function(){return l.value?U0(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const X6={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const J6={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},Z6=J6,e3={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},t3={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},n3={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};M6.autoAddCss=!1;V6.add(X6,t3,Z6,n3,e3);const r3=tn(t=>{t.vueApp.component("font-awesome-icon",Q6)});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let B0;const gu=t=>B0=t,$0=Symbol();function Hh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Go;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Go||(Go={}));function s3(){const t=Xh(!0),e=t.run(()=>Qt({}));let n=[],r=[];const s=sd({install(i){gu(s),s._a=i,i.provide($0,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const H0=()=>{};function rv(t,e,n,r=H0){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ea()&&Uc(s),s}function ri(t,...e){t.slice().forEach(n=>{n(...e)})}const i3=t=>t(),sv=Symbol(),wf=Symbol();function zh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Hh(s)&&Hh(r)&&t.hasOwnProperty(n)&&!Qe(r)&&!ar(r)?t[n]=zh(s,r):t[n]=r}return t}const o3=Symbol();function a3(t){return!Hh(t)||!t.hasOwnProperty(o3)}const{assign:Or}=Object;function c3(t){return!!(Qe(t)&&t.effect)}function l3(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const f=tA(n.state.value[t]);return Or(f,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=sd(Fe(()=>{gu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=z0(t,u,e,n,r,!0),l}function z0(t,e,n={},r,s,i){let o;const a=Or({actions:{}},n),l={deep:!0};let u,f,d=[],p=[],g;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Qt({});let w;function k(v){let E;u=f=!1,typeof v=="function"?(v(r.state.value[t]),E={type:Go.patchFunction,storeId:t,events:g}):(zh(r.state.value[t],v),E={type:Go.patchObject,payload:v,storeId:t,events:g});const I=w=Symbol();qn().then(()=>{w===I&&(u=!0)}),f=!0,ri(d,E,r.state.value[t])}const P=i?function(){const{state:E}=n,I=E?E():{};this.$patch(N=>{Or(N,I)})}:H0;function R(){o.stop(),d=[],p=[],r._s.delete(t)}const _=(v,E="")=>{if(sv in v)return v[wf]=E,v;const I=function(){gu(r);const N=Array.from(arguments),O=[],A=[];function ge(se){O.push(se)}function ve(se){A.push(se)}ri(p,{args:N,name:I[wf],store:D,after:ge,onError:ve});let Z;try{Z=v.apply(this&&this.$id===t?this:D,N)}catch(se){throw ri(A,se),se}return Z instanceof Promise?Z.then(se=>(ri(O,se),se)).catch(se=>(ri(A,se),Promise.reject(se))):(ri(O,Z),Z)};return I[sv]=!0,I[wf]=E,I},S={_p:r,$id:t,$onAction:rv.bind(null,p),$patch:k,$reset:P,$subscribe(v,E={}){const I=rv(d,v,E.detached,()=>N()),N=o.run(()=>Vn(()=>r.state.value[t],O=>{(E.flush==="sync"?f:u)&&v({storeId:t,type:Go.direct,events:g},O)},Or({},l,E)));return I},$dispose:R},D=vr(S);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||i3)(()=>r._e.run(()=>(o=Xh()).run(()=>e({action:_}))));for(const v in T){const E=T[v];if(Qe(E)&&!c3(E)||ar(E))i||(y&&a3(E)&&(Qe(E)?E.value=y[v]:zh(E,y[v])),r.state.value[t][v]=E);else if(typeof E=="function"){const I=_(E,v);T[v]=I,a.actions[v]=E}}return Or(D,T),Or(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:v=>{k(E=>{Or(E,v)})}}),r._p.forEach(v=>{Or(D,o.run(()=>v({store:D,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(D.$state,y),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function u3(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=Ta();return a=a||(u?mt($0,null):null),a&&gu(a),a=B0,a._s.has(r)||(i?z0(r,e,s,a):l3(r,s,a)),a._s.get(r)}return o.$id=r,o}function f3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function h3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const d3=tn(t=>{const e=s3();t.vueApp.use(e)});var iv=/^(GTM|G)-[0-9A-Z]+$/;function bf(t){if(typeof t!="string"||!iv.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${iv}).${n}`)}}function Po(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function Ci(t,e){let n=document,r=n.createElement("script"),s=u=>{var f;(f=e.onReady)==null||f.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(Po(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function p3(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var m3=class{constructor(t){on(this,"id");on(this,"options");on(this,"scriptElements",[]);on(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)bf(typeof e=="string"?e:e.id);else bf(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!p3(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=Ci(n,{...this.options}):r=Ci(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=Ci(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?Po(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&Po(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&Po(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&Po(window,this.options.dataLayerName).push(t)}},Et;function g3(t,e={id:""}){e={trackOnNextTick:!1,...e},Et=new m3(e),t.config.globalProperties.$gtm=Et,Et.isInBrowserContext()&&(e.vueRouter&&_3(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),Et.options.enabled&&Et.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")Ci(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),Ci(n.id,r)}}):Ci(e.id,e))),t.provide("gtm",e)}function _3(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,y;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?Et!=null&&Et.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(Et!=null&&Et.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((y=(g=e.options)==null?void 0:g.history)==null?void 0:y.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?qn(()=>{Et==null||Et.trackView(u,d,f)}):Et==null||Et.trackView(u,d,f)})}function y3(t){return{install:e=>g3(e,t)}}const v3=tn(t=>{const e=zs().public,n=ZN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(y3({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:At(),trackOnNextTick:!1}))}),E3=[gC,wC,UP,BP,$P,HP,qP,WP,GP,L4,r3,d3,v3],q0=(t="RouteProvider")=>An({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Kr(Ds,Nn(s)),()=>e.vnode?ut(e.vnode,{ref:e.vnodeRef}):e.vnode}}),w3=q0(),ov=new WeakMap,b3=An({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Be(),i=Qt(),o=mt(Ds,null);let a;r({pageRef:i});const l=mt(YE,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);At().beforeEach(p)}t.pageKey&&Vn(()=>t.pageKey,(p,g)=>{p!==g&&s.callHook("page:loading:start")});let d=!1;{const p=At().beforeResolve(()=>{d=!1});Gi(()=>{p()})}return()=>ut(gw,{name:t.name,route:t.route,...e},{default:p=>{const g=I3(o,p.route,p.Component),y=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!y)return u;f();return}if(u&&l&&!l.isCurrent(p.route))return u;if(g&&o&&(!l||l!=null&&l.isCurrent(o)))return y?u:null;const w=Jf(p,t.pageKey),k=A3(o,p.route,p.Component);!s.isHydrating&&a===w&&!k&&qn(()=>{d=!0,s.callHook("page:loading:end")}),a=w;const P=!!(t.transition??p.route.meta.pageTransition??dg),R=P&&T3([t.transition,p.route.meta.pageTransition,dg,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),_=t.keepalive??p.route.meta.keepalive??rS;return u=yw(P&&R,CP(_,ut(ud,{suspensible:!0,onPending:()=>{P&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{qn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!d&&!k)return d=!0,s.callHook("page:loading:end")}).finally(f))}},{default:()=>{const S={key:w||void 0,vnode:n.default?R3(n.default,p):p.Component,route:p.route,renderKey:w||void 0,trackRootNodes:P,vnodeRef:i};if(!_)return ut(w3,S);const D=p.Component.type,M=D;let T=ov.get(M);return T||(T=q0(D.name||D.__name),ov.set(M,T)),ut(T,S)}}))).default(),u}})}});function T3(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Td(n.onAfterLeave):void 0}));return KE(...e)}function I3(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Jf({route:e,Component:n})!==Jf({route:t,Component:n})}function A3(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function R3(t,e){const n=t(e);return n.length===1?ut(n[0]):ut(Dt,void 0,n)}const S3=An({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>ut(Hr[t.name],t.layoutProps,e.slots)}}),C3={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},P3=An({name:"NuxtLayout",inheritAttrs:!1,props:C3,setup(t,e){const n=Be(),r=mt(Ds),i=!r||r===Ml()?_w():r,o=Fe(()=>{let f=st(t.name)??(i==null?void 0:i.meta.layout)??"default";return f&&!(f in Hr)&&t.fallback&&(f=st(t.fallback)),f}),a=Ns();e.expose({layoutRef:a});const l=n.deferHydration();if(n.isHydrating){const f=n.hooks.hookOnce("app:error",l);At().beforeEach(f)}let u;return()=>{const f=o.value&&o.value in Hr,d=(i==null?void 0:i.meta.layoutTransition)??nS,p=u;return u=o.value,yw(f&&d,{default:()=>ut(ud,{suspensible:!0,onResolve:()=>{qn(l)}},{default:()=>ut(k3,{layoutProps:IE(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:g=>g!==p&&g===o.value,hasTransition:!!d},e.slots)})}).default()}}}),k3=An({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Kr(YE,{isCurrent:i=>n===(i.meta.layout??"default")});const r=mt(Ds);if(r&&r===Ml()){const i=_w(),o={};for(const a in i){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:r[l]})}Kr(Ds,Nn(o))}return()=>{var i,o;return!n||typeof n=="string"&&!(n in Hr)?(o=(i=e.slots).default)==null?void 0:o.call(i):ut(S3,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),_u=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},O3={};function N3(t,e){const n=b3,r=P3;return Ht(),rr(r,null,{default:Pn(()=>[be(n)]),_:1})}const x3=_u(O3,[["render",N3]]),D3=gd("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),av=u3("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Be(),r=At();try{const s=await P2(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Be();try{await x2(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Be();N2(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),L3={class:"navbar navbar-expand-md navbar-light bg-light"},M3={class:"navbar-nav"},V3={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},F3={class:"navbar-nav ml-auto"};function U3(t,e,n,r,s,i){const o=ix;return Ht(),ea("nav",L3,[be(o,{class:"navbar-brand",to:"/"},{default:Pn(()=>e[2]||(e[2]=[ln("Who's Jimmy")])),_:1,__:[2]}),We("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[We("span",{class:"navbar-toggler-icon"},null,-1)])),We("div",{class:ya(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[We("ul",M3,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Pn(()=>e[4]||(e[4]=[ln("Bio")])),_:1,__:[4]}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Pn(()=>e[5]||(e[5]=[ln("Portfolio ")])),_:1,__:[5]}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Pn(()=>e[6]||(e[6]=[ln("For Sale")])),_:1,__:[6]}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Pn(()=>e[7]||(e[7]=[ln("Cool Stuff")])),_:1,__:[7]}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Pn(()=>e[8]||(e[8]=[ln("Contact Us")])),_:1,__:[8]})])],2),s.isAuth?(Ht(),ea("div",V3,[We("ul",F3,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Pn(()=>[ln(Qh(t.user?t.user.email:""),1)]),_:1}),We("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):f1("",!0)])}const j3={data(){return{visible:!1,isAuth:!1}},computed:{...f3(av,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...h3(av,{signOut:"signOut"})}},B3=_u(j3,[["render",U3]]),$3={class:"page-footer font-small bg-light navbar-fixed-bottom"},H3={class:"container"},z3={class:"py-3 pt-3"},q3={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},W3={href:"https://www.facebook.com/whosjimmy"},K3={href:"https://twitter.com/jimmyclaws"},G3={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function Y3(t,e){const n=Jo("font-awesome-icon");return Ht(),ea("footer",$3,[We("div",H3,[We("div",z3,[We("a",q3,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),We("a",W3,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),We("a",K3,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),We("a",G3,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=We("div",{class:"footer-copyright text-center font-small"},[We("div",null,[ln("© 2024 Copyright: "),We("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),We("div",null,"Disclaimer: All images are copyright to their respective owners."),We("div",null,[ln("A "),We("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),ln(" creation.")])],-1))])}const Q3={},X3=_u(Q3,[["render",Y3],["__scopeId","data-v-063d9b19"]]),J3={class:"text-center my-0 page"},Z3={class:"body"},eF={components:{appHeader:B3,appFooter:X3},head(){return{title:"Error"}}},tF=An({...eF,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Be();Ig({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{Ig({title:n.public.SITE_TITLE}),XE({redirect:"/"})};return(i,o)=>{var u;const a=Jo("app-header"),l=Jo("app-footer");return Ht(),ea("div",J3,[be(a),We("div",Z3,[o[0]||(o[0]=We("img",{src:D3,alt:"Error Image"},null,-1)),We("h2",null,"Error: "+Qh((u=t.error)==null?void 0:u.statusCode),1),We("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),be(l)])}}}),nF=_u(tF,[["__scopeId","data-v-a467a495"]]),rF={key:0},cv={__name:"nuxt-root",setup(t){const e=()=>null,n=Be(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);At().beforeEach(u)}const s=!1;Kr(Ds,Ml()),n.hooks.callHookWith(u=>u.map(f=>f()),"vue:setup");const i=Vl(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Xv((u,f,d)=>{if(n.hooks.callHook("vue:error",u,f,d).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(JE(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Ts(u)),!1});const l=!1;return(u,f)=>(Ht(),rr(ud,{onResolve:st(r)},{default:Pn(()=>[st(o)?(Ht(),ea("div",rF)):st(i)?(Ht(),rr(st(nF),{key:1,error:st(i)},null,8,["error"])):st(l)?(Ht(),rr(st(e),{key:2,context:st(l)},null,8,["context"])):st(s)?(Ht(),rr(PA(st(s)),{key:3})):(Ht(),rr(st(x3),{key:4}))]),_:1},8,["onResolve"]))}};let lv;{let t;lv=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?J1(cv):X1(cv),s=lS({vueApp:r});async function i(l){var u;await s.callHook("app:error",l),(u=s.payload).error||(u.error=ks(l))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await hS(s,E3)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(oS),await s.hooks.callHook("app:mounted",r),await qn()}catch(l){i(l)}return r},t=lv().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{B3 as $,Kr as A,ar as B,fr as C,qn as D,gd as E,Pn as F,ix as G,Dt as H,aF as I,lF as J,hF as K,O4 as L,TF as M,wF as N,bF as O,cF as P,ya as Q,iF as R,u1 as S,R1 as T,Ds as U,pF as V,wS as W,ZN as X,fF as Y,X3 as Z,_u as _,We as a,b3 as a0,u3 as a1,Be as a2,EF as a3,_F as a4,vF as a5,gF as a6,yF as a7,ln as b,ea as c,h3 as d,dF as e,f1 as f,rr as g,st as h,be as i,xl as j,Qt as k,IA as l,f3 as m,Rl as n,Ht as o,Vn as p,Qe as q,Jo as r,vr as s,Qh as t,av as u,uF as v,oF as w,Gi as x,Fe as y,mt as z};
