const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DmVNbDEE.js","./Bio.BaV4dkSc.css","./BJzVHR0V.js","./BPuSvrg1.js","./index.CAtFJWG6.css","./C7-Yea1V.js","./CDvHjTPu.js","./Gallery.BdWwPq4R.css","./Bj7Lz1-I.js","./Contact.Bq_tjq4M.css","./BTvi7WRy.js","./C4BMXv--.js","./aoDXCq-H.js","./index.ASLudlX-.css","./DoBXySNH.js","./index.EfND0qCY.css","./MFFqIrXD.js","./Clocks.CaZdgkmv.css","./f9ZIOhyk.js","./CXcvxYhI.js","./Film.D8qa6UOd.css","./BZx9v75m.js","./index.ByThmlNc.css","./CskFw98b.js","./DiHh460g.js","./Clocks.Dmp-oUCd.css","./BiQkgQDH.js","./771zHujb.js","./BdjUSpDM.js","./Film.CyscwsSS.css","./6oM05gMr.js","./Celebrities.BS01JuXe.css","./DiJHZ5iF.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var HI=Object.defineProperty;var Am=t=>{throw TypeError(t)};var zI=(t,e,n)=>e in t?HI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var an=(t,e,n)=>zI(t,typeof e!="symbol"?e+"":e,n),qI=(t,e,n)=>e.has(t)||Am("Cannot "+n);var yo=(t,e,n)=>(qI(t,e,"read from private field"),n?n.call(t):e.get(t)),Sm=(t,e,n)=>e.has(t)?Am("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},mi=[],Fn=()=>{},WI=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qh=t=>t.startsWith("onUpdate:"),yt=Object.assign,Jh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},KI=Object.prototype.hasOwnProperty,xe=(t,e)=>KI.call(t,e),ce=Array.isArray,gi=t=>Gi(t)==="[object Map]",Ki=t=>Gi(t)==="[object Set]",Rm=t=>Gi(t)==="[object Date]",GI=t=>Gi(t)==="[object RegExp]",pe=t=>typeof t=="function",Ge=t=>typeof t=="string",Tn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",yv=t=>(Me(t)||pe(t))&&pe(t.then)&&pe(t.catch),_v=Object.prototype.toString,Gi=t=>_v.call(t),YI=t=>Gi(t).slice(8,-1),vv=t=>Gi(t)==="[object Object]",Xh=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=Yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},QI=/-(\w)/g,mn=Rc(t=>t.replace(QI,(e,n)=>n?n.toUpperCase():"")),JI=/\B([A-Z])/g,zs=Rc(t=>t.replace(JI,"-$1").toLowerCase()),Cc=Rc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mu=Rc(t=>t?`on${Cc(t)}`:""),Wr=(t,e)=>!Object.is(t,e),_i=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Pf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$l=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ev=t=>{const e=Ge(t)?Number(t):NaN;return isNaN(e)?t:e};let Cm;const Pc=()=>Cm||(Cm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?tA(r):kc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Me(t))return t}const XI=/;(?![^(]*\))/g,ZI=/:([^]+)/,eA=/\/\*[^]*?\*\//g;function tA(t){const e={};return t.replace(eA,"").split(XI).forEach(n=>{if(n){const r=n.split(ZI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function va(t){let e="";if(Ge(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=va(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function F9(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ge(e)&&(t.class=va(e)),n&&(t.style=kc(n)),t}const nA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rA=Yh(nA);function bv(t){return!!t||t===""}function sA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ea(t[r],e[r]);return n}function Ea(t,e){if(t===e)return!0;let n=Rm(t),r=Rm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?sA(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ea(t[o],e[o]))return!1}}return String(t)===String(e)}function Zh(t,e){return t.findIndex(n=>Ea(n,e))}const wv=t=>!!(t&&t.__v_isRef===!0),ed=t=>Ge(t)?t:t==null?"":ce(t)||Me(t)&&(t.toString===_v||!pe(t.toString))?wv(t)?ed(t.value):JSON.stringify(t,Tv,2):String(t),Tv=(t,e)=>wv(e)?Tv(t,e.value):gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Vu(r,i)+" =>"]=s,n),{})}:Ki(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Vu(n))}:Tn(e)?Vu(e):Me(e)&&!ce(e)&&!vv(e)?String(e):e,Vu=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class Iv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){this._on>0&&--this._on===0&&(Nt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function td(t){return new Iv(t)}function ba(){return Nt}function Bl(t,e=!1){Nt&&Nt.cleanups.push(t)}let $e;const Fu=new WeakSet;class Av{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fu.has(this)&&(Fu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pm(this),Cv(this);const e=$e,n=wn;$e=this,wn=!0;try{return this.fn()}finally{Pv(this),$e=e,wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sd(e);this.deps=this.depsTail=void 0,Pm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kf(this)&&this.run()}get dirty(){return kf(this)}}let Sv=0,No,xo;function Rv(t,e=!1){if(t.flags|=8,e){t.next=xo,xo=t;return}t.next=No,No=t}function nd(){Sv++}function rd(){if(--Sv>0)return;if(xo){let e=xo;for(xo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;No;){let e=No;for(No=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Cv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),sd(r),iA(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function kf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Jo)||(t.globalVersion=Jo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!kf(t))))return;t.flags|=2;const e=t.dep,n=$e,r=wn;$e=t,wn=!0;try{Cv(t);const s=t.fn(t._value);(e.version===0||Wr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=n,wn=r,Pv(t),t.flags&=-3}}function sd(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wn=!0;const Ov=[];function fr(){Ov.push(wn),wn=!1}function hr(){const t=Ov.pop();wn=t===void 0?!0:t}function Pm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Jo=0;class oA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!$e||!wn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new oA($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Nv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=r)}return n}trigger(e){this.version++,Jo++,this.notify(e)}notify(e){nd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rd()}}}function Nv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hl=new WeakMap,Cs=Symbol(""),Of=Symbol(""),Xo=Symbol("");function Dt(t,e,n){if(wn&&$e){let r=Hl.get(t);r||Hl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Oc),s.map=r,s.key=n),s.track()}}function rr(t,e,n,r,s,i){const o=Hl.get(t);if(!o){Jo++;return}const a=c=>{c&&c.trigger()};if(nd(),e==="clear")o.forEach(a);else{const c=ce(t),u=c&&Xh(n);if(c&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===Xo||!Tn(p)&&p>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Xo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Cs)),gi(t)&&a(o.get(Of)));break;case"delete":c||(a(o.get(Cs)),gi(t)&&a(o.get(Of)));break;case"set":gi(t)&&a(o.get(Cs));break}}rd()}function aA(t,e){const n=Hl.get(t);return n&&n.get(e)}function ni(t){const e=Re(t);return e===t?e:(Dt(e,"iterate",Xo),dn(t)?e:e.map(It))}function Nc(t){return Dt(t=Re(t),"iterate",Xo),t}const lA={__proto__:null,[Symbol.iterator](){return Uu(this,Symbol.iterator,It)},concat(...t){return ni(this).concat(...t.map(e=>ce(e)?ni(e):e))},entries(){return Uu(this,"entries",t=>(t[1]=It(t[1]),t))},every(t,e){return Zn(this,"every",t,e,void 0,arguments)},filter(t,e){return Zn(this,"filter",t,e,n=>n.map(It),arguments)},find(t,e){return Zn(this,"find",t,e,It,arguments)},findIndex(t,e){return Zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Zn(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return Zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ju(this,"includes",t)},indexOf(...t){return ju(this,"indexOf",t)},join(t){return ni(this).join(t)},lastIndexOf(...t){return ju(this,"lastIndexOf",t)},map(t,e){return Zn(this,"map",t,e,void 0,arguments)},pop(){return _o(this,"pop")},push(...t){return _o(this,"push",t)},reduce(t,...e){return km(this,"reduce",t,e)},reduceRight(t,...e){return km(this,"reduceRight",t,e)},shift(){return _o(this,"shift")},some(t,e){return Zn(this,"some",t,e,void 0,arguments)},splice(...t){return _o(this,"splice",t)},toReversed(){return ni(this).toReversed()},toSorted(t){return ni(this).toSorted(t)},toSpliced(...t){return ni(this).toSpliced(...t)},unshift(...t){return _o(this,"unshift",t)},values(){return Uu(this,"values",It)}};function Uu(t,e,n){const r=Nc(t),s=r[e]();return r!==t&&!dn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const cA=Array.prototype;function Zn(t,e,n,r,s,i){const o=Nc(t),a=o!==t&&!dn(t),c=o[e];if(c!==cA[e]){const h=c.apply(t,i);return a?It(h):h}let u=n;o!==t&&(a?u=function(h,p){return n.call(this,It(h),p,t)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,t)}));const f=c.call(o,u,r);return a&&s?s(f):f}function km(t,e,n,r){const s=Nc(t);let i=n;return s!==t&&(dn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,It(a),c,t)}),s[e](i,...r)}function ju(t,e,n){const r=Re(t);Dt(r,"iterate",Xo);const s=r[e](...n);return(s===-1||s===!1)&&ad(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function _o(t,e,n=[]){fr(),nd();const r=Re(t)[e].apply(t,n);return rd(),hr(),r}const uA=Yh("__proto__,__v_isRef,__isVue"),xv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn));function fA(t){Tn(t)||(t=String(t));const e=Re(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class Dv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?bA:Fv:i?Vv:Mv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=lA[n]))return c;if(n==="hasOwnProperty")return fA}const a=Reflect.get(e,n,Je(e)?e:r);return(Tn(n)?xv.has(n):uA(n))||(s||Dt(e,"get",n),i)?a:Je(a)?o&&Xh(n)?a:a.value:Me(a)?s?Uv(a):br(a):a}}class Lv extends Dv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=dr(i);if(!dn(r)&&!dr(r)&&(i=Re(i),r=Re(r)),!ce(e)&&Je(i)&&!Je(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&Xh(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Je(e)?e:s);return e===Re(s)&&(o?Wr(r,i)&&rr(e,"set",n,r):rr(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!xv.has(n))&&Dt(e,"has",n),r}ownKeys(e){return Dt(e,"iterate",ce(e)?"length":Cs),Reflect.ownKeys(e)}}class hA extends Dv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dA=new Lv,pA=new hA,mA=new Lv(!0);const Nf=t=>t,el=t=>Reflect.getPrototypeOf(t);function gA(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=gi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Nf:e?zl:It;return!e&&Dt(i,"iterate",c?Of:Cs),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function tl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yA(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(Wr(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:c}=el(o),u=e?Nf:t?zl:It;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Dt(Re(s),"iterate",Cs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(Wr(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Re(a),u=e?Nf:t?zl:It;return!t&&Dt(c,"iterate",Cs),a.forEach((f,h)=>s.call(i,u(f),u(h),o))}};return yt(n,t?{add:tl("add"),set:tl("set"),delete:tl("delete"),clear:tl("clear")}:{add(s){!e&&!dn(s)&&!dr(s)&&(s=Re(s));const i=Re(this);return el(i).has.call(i,s)||(i.add(s),rr(i,"add",s,s)),this},set(s,i){!e&&!dn(i)&&!dr(i)&&(i=Re(i));const o=Re(this),{has:a,get:c}=el(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Wr(i,f)&&rr(o,"set",s,i):rr(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=el(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&rr(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&rr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gA(s,t,e)}),n}function id(t,e){const n=yA(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const _A={get:id(!1,!1)},vA={get:id(!1,!0)},EA={get:id(!0,!1)};const Mv=new WeakMap,Vv=new WeakMap,Fv=new WeakMap,bA=new WeakMap;function wA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TA(t){return t.__v_skip||!Object.isExtensible(t)?0:wA(YI(t))}function br(t){return dr(t)?t:od(t,!1,dA,_A,Mv)}function Ln(t){return od(t,!1,mA,vA,Vv)}function Uv(t){return od(t,!0,pA,EA,Fv)}function od(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=TA(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function cr(t){return dr(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function dn(t){return!!(t&&t.__v_isShallow)}function ad(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function ld(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&Pf(t,"__v_skip",!0),t}const It=t=>Me(t)?br(t):t,zl=t=>Me(t)?Uv(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Jt(t){return jv(t,!1)}function xs(t){return jv(t,!0)}function jv(t,e){return Je(t)?t:new IA(t,e)}class IA{constructor(e,n){this.dep=new Oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:It(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||dn(e)||dr(e);e=r?e:Re(e),Wr(e,n)&&(this._rawValue=e,this._value=r?e:It(e),this.dep.trigger())}}function it(t){return Je(t)?t.value:t}function AA(t){return pe(t)?t():it(t)}const SA={get:(t,e,n)=>e==="__v_raw"?t:it(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $v(t){return cr(t)?t:new Proxy(t,SA)}class RA{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Oc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function CA(t){return new RA(t)}function PA(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=Bv(t,n);return e}class kA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return aA(Re(this._object),this._key)}}class OA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function NA(t,e,n){return Je(t)?t:pe(t)?new OA(t):Me(t)&&arguments.length>1?Bv(t,e,n):Jt(t)}function Bv(t,e,n){const r=t[e];return Je(r)?r:new kA(t,e,n)}class xA{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Rv(this,!0),!0}get value(){const e=this.dep.track();return kv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function DA(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new xA(r,s,n)}const nl={},ql=new WeakMap;let Ts;function LA(t,e=!1,n=Ts){if(n){let r=ql.get(n);r||ql.set(n,r=[]),r.push(t)}}function MA(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=C=>s?C:dn(C)||s===!1||s===0?sr(C,1):sr(C);let f,h,p,g,y=!1,_=!1;if(Je(t)?(h=()=>t.value,y=dn(t)):cr(t)?(h=()=>u(t),y=!0):ce(t)?(_=!0,y=t.some(C=>cr(C)||dn(C)),h=()=>t.map(C=>{if(Je(C))return C.value;if(cr(C))return u(C);if(pe(C))return c?c(C,2):C()})):pe(t)?e?h=c?()=>c(t,2):t:h=()=>{if(p){fr();try{p()}finally{hr()}}const C=Ts;Ts=f;try{return c?c(t,3,[g]):t(g)}finally{Ts=C}}:h=Fn,e&&s){const C=h,D=s===!0?1/0:s;h=()=>sr(C(),D)}const P=ba(),S=()=>{f.stop(),P&&P.active&&Jh(P.effects,f)};if(i&&e){const C=e;e=(...D)=>{C(...D),S()}}let R=_?new Array(t.length).fill(nl):nl;const v=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(e){const D=f.run();if(s||y||(_?D.some((M,T)=>Wr(M,R[T])):Wr(D,R))){p&&p();const M=Ts;Ts=f;try{const T=[D,R===nl?void 0:_&&R[0]===nl?[]:R,g];R=D,c?c(e,3,T):e(...T)}finally{Ts=M}}}else f.run()};return a&&a(v),f=new Av(h),f.scheduler=o?()=>o(v,!1):v,g=C=>LA(C,!1,f),p=f.onStop=()=>{const C=ql.get(f);if(C){if(c)c(C,4);else for(const D of C)D();ql.delete(f)}},e?r?v(!0):R=f.run():o?o(v.bind(null,!0),!0):f.run(),S.pause=f.pause.bind(f),S.resume=f.resume.bind(f),S.stop=S,S}function sr(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))sr(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)sr(t[r],e,n);else if(Ki(t)||gi(t))t.forEach(r=>{sr(r,e,n)});else if(vv(t)){for(const r in t)sr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&sr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wa(t,e,n,r){try{return r?t(...r):t()}catch(s){Yi(s,e,n)}}function In(t,e,n,r){if(pe(t)){const s=wa(t,e,n,r);return s&&yv(s)&&s.catch(i=>{Yi(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(In(t[i],e,n,r));return s}}function Yi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,u)===!1)return}a=a.parent}if(i){fr(),wa(i,null,10,[t,c,u]),hr();return}}VA(t,n,s,r,o)}function VA(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ht=[];let On=-1;const vi=[];let xr=null,oi=0;const Hv=Promise.resolve();let Wl=null;function Kn(t){const e=Wl||Hv;return t?e.then(this?t.bind(this):t):e}function FA(t){let e=On+1,n=Ht.length;for(;e<n;){const r=e+n>>>1,s=Ht[r],i=Zo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function cd(t){if(!(t.flags&1)){const e=Zo(t),n=Ht[Ht.length-1];!n||!(t.flags&2)&&e>=Zo(n)?Ht.push(t):Ht.splice(FA(e),0,t),t.flags|=1,zv()}}function zv(){Wl||(Wl=Hv.then(qv))}function xf(t){ce(t)?vi.push(...t):xr&&t.id===-1?xr.splice(oi+1,0,t):t.flags&1||(vi.push(t),t.flags|=1),zv()}function Om(t,e,n=On+1){for(;n<Ht.length;n++){const r=Ht[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ht.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Kl(t){if(vi.length){const e=[...new Set(vi)].sort((n,r)=>Zo(n)-Zo(r));if(vi.length=0,xr){xr.push(...e);return}for(xr=e,oi=0;oi<xr.length;oi++){const n=xr[oi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xr=null,oi=0}}const Zo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qv(t){try{for(On=0;On<Ht.length;On++){const e=Ht[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<Ht.length;On++){const e=Ht[On];e&&(e.flags&=-2)}On=-1,Ht.length=0,Kl(),Wl=null,(Ht.length||vi.length)&&qv()}}let ut=null,Wv=null;function Gl(t){const e=ut;return ut=t,Wv=t&&t.type.__scopeId||null,e}function Nn(t,e=ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Hm(-1);const i=Gl(e);let o;try{o=t(...s)}finally{Gl(i),r._d&&Hm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U9(t,e){if(ut===null)return t;const n=Fc(ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Fe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&sr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(fr(),In(c,n,8,[t.el,a,t,e]),hr())}}const UA=Symbol("_vte"),Kv=t=>t.__isTeleport,Dr=Symbol("_leaveCb"),rl=Symbol("_enterCb");function jA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dc(()=>{t.isMounted=!0}),Qi(()=>{t.isUnmounting=!0}),t}const ln=[Function,Array],Gv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},Yv=t=>{const e=t.subTree;return e.component?Yv(e.component):e},$A={name:"BaseTransition",props:Gv,setup(t,{slots:e}){const n=Vc(),r=jA();return()=>{const s=e.default&&Xv(e.default(),!0);if(!s||!s.length)return;const i=Qv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return $u(i);const c=Nm(i);if(!c)return $u(i);let u=Df(c,o,r,n,h=>u=h);c.type!==ot&&Oi(c,u);let f=n.subTree&&Nm(n.subTree);if(f&&f.type!==ot&&!vn(c,f)&&Yv(n).type!==ot){let h=Df(f,o,r,n);if(Oi(f,h),a==="out-in"&&c.type!==ot)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,f=void 0},$u(i);a==="in-out"&&c.type!==ot?h.delayLeave=(p,g,y)=>{const _=Jv(r,f);_[String(f.key)]=f,p[Dr]=()=>{g(),p[Dr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Qv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ot){e=n;break}}return e}const BA=$A;function Jv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Df(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:p,onLeave:g,onAfterLeave:y,onLeaveCancelled:_,onBeforeAppear:P,onAppear:S,onAfterAppear:R,onAppearCancelled:v}=e,C=String(t.key),D=Jv(n,t),M=(b,I)=>{b&&In(b,r,9,I)},T=(b,I)=>{const N=I[1];M(b,I),ce(b)?b.every(O=>O.length<=1)&&N():b.length<=1&&N()},E={mode:o,persisted:a,beforeEnter(b){let I=c;if(!n.isMounted)if(i)I=P||c;else return;b[Dr]&&b[Dr](!0);const N=D[C];N&&vn(t,N)&&N.el[Dr]&&N.el[Dr](),M(I,[b])},enter(b){let I=u,N=f,O=h;if(!n.isMounted)if(i)I=S||u,N=R||f,O=v||h;else return;let A=!1;const ge=b[rl]=ve=>{A||(A=!0,ve?M(O,[b]):M(N,[b]),E.delayedLeave&&E.delayedLeave(),b[rl]=void 0)};I?T(I,[b,ge]):ge()},leave(b,I){const N=String(t.key);if(b[rl]&&b[rl](!0),n.isUnmounting)return I();M(p,[b]);let O=!1;const A=b[Dr]=ge=>{O||(O=!0,I(),ge?M(_,[b]):M(y,[b]),b[Dr]=void 0,D[N]===t&&delete D[N])};D[N]=t,g?T(g,[b,A]):A()},clone(b){const I=Df(b,e,n,r,s);return s&&s(I),I}};return E}function $u(t){if(Ta(t))return t=pr(t),t.children=null,t}function Nm(t){if(!Ta(t))return Kv(t.type)&&t.children?Qv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Lt?(o.patchFlag&128&&s++,r=r.concat(Xv(o.children,e,a))):(e||o.type!==ot)&&r.push(a!=null?pr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Cn(t,e){return pe(t)?yt({name:t.name},e,{setup:t}):t}function ud(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ei(t,e,n,r,s=!1){if(ce(t)){t.forEach((y,_)=>Ei(y,e&&(ce(e)?e[_]:e),n,r,s));return}if(Kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Fc(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===Fe?a.refs={}:a.refs,h=a.setupState,p=Re(h),g=h===Fe?()=>!1:y=>xe(p,y);if(u!=null&&u!==c&&(Ge(u)?(f[u]=null,g(u)&&(h[u]=null)):Je(u)&&(u.value=null)),pe(c))wa(c,a,12,[o,f]);else{const y=Ge(c),_=Je(c);if(y||_){const P=()=>{if(t.f){const S=y?g(c)?h[c]:f[c]:c.value;s?ce(S)&&Jh(S,i):ce(S)?S.includes(i)||S.push(i):y?(f[c]=[i],g(c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else y?(f[c]=o,g(c)&&(h[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(P.id=-1,wt(P,n)):P()}}}let xm=!1;const ri=()=>{xm||(console.error("Hydration completed but contains mismatches."),xm=!0)},HA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",zA=t=>t.namespaceURI.includes("MathML"),sl=t=>{if(t.nodeType===1){if(HA(t))return"svg";if(zA(t))return"mathml"}},hi=t=>t.nodeType===8;function qA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,f=(v,C)=>{if(!C.hasChildNodes()){n(null,v,C),Kl(),C._vnode=v;return}h(C.firstChild,v,null,null,null),Kl(),C._vnode=v},h=(v,C,D,M,T,E=!1)=>{E=E||!!C.dynamicChildren;const b=hi(v)&&v.data==="[",I=()=>_(v,C,D,M,T,b),{type:N,ref:O,shapeFlag:A,patchFlag:ge}=C;let ve=v.nodeType;C.el=v,ge===-2&&(E=!1,C.dynamicChildren=null);let Z=null;switch(N){case ks:ve!==3?C.children===""?(c(C.el=s(""),o(v),v),Z=v):Z=I():(v.data!==C.children&&(ri(),v.data=C.children),Z=i(v));break;case ot:R(v)?(Z=i(v),S(C.el=v.content.firstChild,v,D)):ve!==8||b?Z=I():Z=i(v);break;case Lo:if(b&&(v=i(v),ve=v.nodeType),ve===1||ve===3){Z=v;const se=!C.children.length;for(let ne=0;ne<C.staticCount;ne++)se&&(C.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===C.staticCount-1&&(C.anchor=Z),Z=i(Z);return b?i(Z):Z}else I();break;case Lt:b?Z=y(v,C,D,M,T,E):Z=I();break;default:if(A&1)(ve!==1||C.type.toLowerCase()!==v.tagName.toLowerCase())&&!R(v)?Z=I():Z=p(v,C,D,M,T,E);else if(A&6){C.slotScopeIds=T;const se=o(v);if(b?Z=P(v):hi(v)&&v.data==="teleport start"?Z=P(v,v.data,"teleport end"):Z=i(v),e(C,se,null,D,M,sl(se),E),Kr(C)&&!C.type.__asyncResolved){let ne;b?(ne=we(Lt),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=v.nodeType===3?un(""):we("div"),ne.el=v,C.component.subTree=ne}}else A&64?ve!==8?Z=I():Z=C.type.hydrate(v,C,D,M,T,E,t,g):A&128&&(Z=C.type.hydrate(v,C,D,M,sl(o(v)),T,E,t,h))}return O!=null&&Ei(O,null,M,C),Z},p=(v,C,D,M,T,E)=>{E=E||!!C.dynamicChildren;const{type:b,props:I,patchFlag:N,shapeFlag:O,dirs:A,transition:ge}=C,ve=b==="input"||b==="option";if(ve||N!==-1){A&&xn(C,null,D,"created");let Z=!1;if(R(v)){Z=bE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=v.content.firstChild;if(Z){const je=ne.getAttribute("class");je&&(ne.$cls=je),ge.beforeEnter(ne)}S(ne,v,D),C.el=v=ne}if(O&16&&!(I&&(I.innerHTML||I.textContent))){let ne=g(v.firstChild,C,v,D,M,T,E);for(;ne;){il(v,1)||ri();const je=ne;ne=ne.nextSibling,a(je)}}else if(O&8){let ne=C.children;ne[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(ne=ne.slice(1)),v.textContent!==ne&&(il(v,0)||ri(),v.textContent=C.children)}if(I){if(ve||!E||N&48){const ne=v.tagName.includes("-");for(const je in I)(ve&&(je.endsWith("value")||je==="indeterminate")||_a(je)&&!yi(je)||je[0]==="."||ne)&&r(v,je,null,I[je],void 0,D)}else if(I.onClick)r(v,"onClick",null,I.onClick,void 0,D);else if(N&4&&cr(I.style))for(const ne in I.style)I.style[ne]}let se;(se=I&&I.onVnodeBeforeMount)&&Kt(se,D,C),A&&xn(C,null,D,"beforeMount"),((se=I&&I.onVnodeMounted)||A||Z)&&RE(()=>{se&&Kt(se,D,C),Z&&ge.enter(v),A&&xn(C,null,D,"mounted")},M)}return v.nextSibling},g=(v,C,D,M,T,E,b)=>{b=b||!!C.dynamicChildren;const I=C.children,N=I.length;for(let O=0;O<N;O++){const A=b?I[O]:I[O]=Zt(I[O]),ge=A.type===ks;v?(ge&&!b&&O+1<N&&Zt(I[O+1]).type===ks&&(c(s(v.data.slice(A.children.length)),D,i(v)),v.data=A.children),v=h(v,A,M,T,E,b)):ge&&!A.children?c(A.el=s(""),D):(il(D,1)||ri(),n(null,A,D,null,M,T,sl(D),E))}return v},y=(v,C,D,M,T,E)=>{const{slotScopeIds:b}=C;b&&(T=T?T.concat(b):b);const I=o(v),N=g(i(v),C,I,D,M,T,E);return N&&hi(N)&&N.data==="]"?i(C.anchor=N):(ri(),c(C.anchor=u("]"),I,N),N)},_=(v,C,D,M,T,E)=>{if(il(v.parentElement,1)||ri(),C.el=null,E){const N=P(v);for(;;){const O=i(v);if(O&&O!==N)a(O);else break}}const b=i(v),I=o(v);return a(v),n(null,C,I,b,D,M,sl(I),T),D&&(D.vnode.el=C.el,Mc(D,C.el)),b},P=(v,C="[",D="]")=>{let M=0;for(;v;)if(v=i(v),v&&hi(v)&&(v.data===C&&M++,v.data===D)){if(M===0)return i(v);M--}return v},S=(v,C,D)=>{const M=C.parentNode;M&&M.replaceChild(v,C);let T=D;for(;T;)T.vnode.el===C&&(T.vnode.el=T.subTree.el=v),T=T.parent},R=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[f,h]}const Dm="data-allow-mismatch",WA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function il(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Dm);)t=t.parentElement;const n=t&&t.getAttribute(Dm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(WA[e])}}Pc().requestIdleCallback;Pc().cancelIdleCallback;function KA(t,e){if(hi(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(hi(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Kr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function GA(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,f,h=0;const p=()=>(h++,u=null,g()),g=()=>{let y;return u||(y=u=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),c)return new Promise((P,S)=>{c(_,()=>P(p()),()=>S(_),h+1)});throw _}).then(_=>y!==u&&u?u:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),f=_,_)))};return Cn({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(y,_,P){const S=i?()=>{const v=i(()=>{P()},C=>KA(y,C));v&&(_.bum||(_.bum=[])).push(v),(_.u||(_.u=[])).push(()=>!0)}:P;f?S():g().then(()=>!_.isUnmounted&&S())},get __asyncResolved(){return f},setup(){const y=lt;if(ud(y),f)return()=>Bu(f,y);const _=v=>{u=null,Yi(v,y,13,!r)};if(a&&y.suspense||xi)return g().then(v=>()=>Bu(v,y)).catch(v=>(_(v),()=>r?we(r,{error:v}):null));const P=Jt(!1),S=Jt(),R=Jt(!!s);return s&&setTimeout(()=>{R.value=!1},s),o!=null&&setTimeout(()=>{if(!P.value&&!S.value){const v=new Error(`Async component timed out after ${o}ms.`);_(v),S.value=v}},o),g().then(()=>{P.value=!0,y.parent&&Ta(y.parent.vnode)&&y.parent.update()}).catch(v=>{_(v),S.value=v}),()=>{if(P.value&&f)return Bu(f,y);if(S.value&&r)return we(r,{error:S.value});if(n&&!R.value)return we(n)}}})}function Bu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=we(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ta=t=>t.type.__isKeepAlive,YA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Vc(),r=n.ctx;if(!r.renderer)return()=>{const R=e.default&&e.default();return R&&R.length===1?R[0]:R};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:h}}}=r,p=h("div");r.activate=(R,v,C,D,M)=>{const T=R.component;u(R,v,C,0,a),c(T.vnode,R,v,C,T,a,D,R.slotScopeIds,M),wt(()=>{T.isDeactivated=!1,T.a&&_i(T.a);const E=R.props&&R.props.onVnodeMounted;E&&Kt(E,T.parent,R)},a)},r.deactivate=R=>{const v=R.component;Ql(v.m),Ql(v.a),u(R,p,null,1,a),wt(()=>{v.da&&_i(v.da);const C=R.props&&R.props.onVnodeUnmounted;C&&Kt(C,v.parent,R),v.isDeactivated=!0},a)};function g(R){Hu(R),f(R,n,a,!0)}function y(R){s.forEach((v,C)=>{const D=Bf(v.type);D&&!R(D)&&_(C)})}function _(R){const v=s.get(R);v&&(!o||!vn(v,o))?g(v):o&&Hu(o),s.delete(R),i.delete(R)}Un(()=>[t.include,t.exclude],([R,v])=>{R&&y(C=>To(R,C)),v&&y(C=>!To(v,C))},{flush:"post",deep:!0});let P=null;const S=()=>{P!=null&&(Jl(n.subTree.type)?wt(()=>{s.set(P,ol(n.subTree))},n.subTree.suspense):s.set(P,ol(n.subTree)))};return Dc(S),nE(S),Qi(()=>{s.forEach(R=>{const{subTree:v,suspense:C}=n,D=ol(v);if(R.type===D.type&&R.key===D.key){Hu(D);const M=D.component.da;M&&wt(M,C);return}g(R)})}),()=>{if(P=null,!e.default)return o=null;const R=e.default(),v=R[0];if(R.length>1)return o=null,R;if(!Ds(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let C=ol(v);if(C.type===ot)return o=null,C;const D=C.type,M=Bf(Kr(C)?C.type.__asyncResolved||{}:D),{include:T,exclude:E,max:b}=t;if(T&&(!M||!To(T,M))||E&&M&&To(E,M))return C.shapeFlag&=-257,o=C,v;const I=C.key==null?D:C.key,N=s.get(I);return C.el&&(C=pr(C),v.shapeFlag&128&&(v.ssContent=C)),P=I,N?(C.el=N.el,C.component=N.component,C.transition&&Oi(C,C.transition),C.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),b&&i.size>parseInt(b,10)&&_(i.values().next().value)),C.shapeFlag|=256,o=C,Jl(v.type)?v:C}}},QA=YA;function To(t,e){return ce(t)?t.some(n=>To(n,e)):Ge(t)?t.split(",").includes(e):GI(t)?(t.lastIndex=0,t.test(e)):!1}function Zv(t,e){tE(t,"a",e)}function eE(t,e){tE(t,"da",e)}function tE(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ta(s.parent.vnode)&&JA(r,e,n,s),s=s.parent}}function JA(t,e,n,r){const s=xc(e,t,r,!0);rE(()=>{Jh(r[e],s)},n)}function Hu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ol(t){return t.shapeFlag&128?t.ssContent:t}function xc(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{fr();const a=Aa(n),c=In(e,n,t,o);return a(),hr(),c});return r?s.unshift(i):s.push(i),i}}const wr=t=>(e,n=lt)=>{(!xi||t==="sp")&&xc(t,(...r)=>e(...r),n)},XA=wr("bm"),Dc=wr("m"),ZA=wr("bu"),nE=wr("u"),Qi=wr("bum"),rE=wr("um"),e1=wr("sp"),t1=wr("rtg"),n1=wr("rtc");function sE(t,e=lt){xc("ec",t,e)}const iE="components";function ea(t,e){return aE(iE,t,!0,e)||t}const oE=Symbol.for("v-ndc");function r1(t){return Ge(t)?aE(iE,t,!1)||t:t||oE}function aE(t,e,n=!0,r=!1){const s=ut||lt;if(s){const i=s.type;{const a=Bf(i,!1);if(a&&(a===e||a===mn(e)||a===Cc(mn(e))))return i}const o=Lm(s[t]||i[t],e)||Lm(s.appContext[t],e);return!o&&r?i:o}}function Lm(t,e){return t&&(t[e]||t[mn(e)]||t[Cc(mn(e))])}function j9(t,e,n,r){let s;const i=n,o=ce(t);if(o||Ge(t)){const a=o&&cr(t);let c=!1,u=!1;a&&(c=!dn(t),u=dr(t),t=Nc(t)),s=new Array(t.length);for(let f=0,h=t.length;f<h;f++)s[f]=e(c?u?zl(It(t[f])):It(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const f=a[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function $9(t,e,n={},r,s){if(ut.ce||ut.parent&&Kr(ut.parent)&&ut.parent.ce)return zt(),ir(Lt,null,[we("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),zt();const o=i&&lE(i(n)),a=n.key||o&&o.key,c=ir(Lt,{key:(a&&!Tn(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function lE(t){return t.some(e=>Ds(e)?!(e.type===ot||e.type===Lt&&!lE(e.children)):!0)?t:null}const Lf=t=>t?NE(t)?Fc(t):Lf(t.parent):null,Do=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lf(t.parent),$root:t=>Lf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>uE(t),$forceUpdate:t=>t.f||(t.f=()=>{cd(t.update)}),$nextTick:t=>t.n||(t.n=Kn.bind(t.proxy)),$watch:t=>I1.bind(t)}),zu=(t,e)=>t!==Fe&&!t.__isScriptSetup&&xe(t,e),s1={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zu(r,e))return o[e]=1,r[e];if(s!==Fe&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==Fe&&xe(n,e))return o[e]=4,n[e];Mf&&(o[e]=0)}}const f=Do[e];let h,p;if(f)return e==="$attrs"&&Dt(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Fe&&xe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zu(s,e)?(s[e]=n,!0):r!==Fe&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&xe(t,o)||zu(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(Do,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Mf=!0;function i1(t){const e=uE(t),n=t.proxy,r=t.ctx;Mf=!1,e.beforeCreate&&Vm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:g,updated:y,activated:_,deactivated:P,beforeDestroy:S,beforeUnmount:R,destroyed:v,unmounted:C,render:D,renderTracked:M,renderTriggered:T,errorCaptured:E,serverPrefetch:b,expose:I,inheritAttrs:N,components:O,directives:A,filters:ge}=e;if(u&&o1(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Me(se)&&(t.data=br(se))}if(Mf=!0,i)for(const se in i){const ne=i[se],je=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Fn,gn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Fn,sn=Ue({get:je,set:gn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>sn.value,set:Ye=>sn.value=Ye})}if(a)for(const se in a)cE(a[se],r,n,se);if(c){const se=pe(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ne=>{Gr(ne,se[ne])})}f&&Vm(f,t,"c");function Z(se,ne){ce(ne)?ne.forEach(je=>se(je.bind(n))):ne&&se(ne.bind(n))}if(Z(XA,h),Z(Dc,p),Z(ZA,g),Z(nE,y),Z(Zv,_),Z(eE,P),Z(sE,E),Z(n1,M),Z(t1,T),Z(Qi,R),Z(rE,C),Z(e1,b),ce(I))if(I.length){const se=t.exposed||(t.exposed={});I.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:je=>n[ne]=je})})}else t.exposed||(t.exposed={});D&&t.render===Fn&&(t.render=D),N!=null&&(t.inheritAttrs=N),O&&(t.components=O),A&&(t.directives=A),b&&ud(t)}function o1(t,e,n=Fn){ce(t)&&(t=Vf(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=gt(s.from||r,s.default,!0):i=gt(s.from||r):i=gt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vm(t,e,n){In(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cE(t,e,n,r){let s=r.includes(".")?IE(n,r):()=>n[r];if(Ge(t)){const i=e[t];pe(i)&&Un(s,i)}else if(pe(t))Un(s,t.bind(n));else if(Me(t))if(ce(t))t.forEach(i=>cE(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Un(s,i,t)}}function uE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Yl(c,u,o,!0)),Yl(c,e,o)),Me(e)&&i.set(e,c),c}function Yl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yl(t,i,n,!0),s&&s.forEach(o=>Yl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=a1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const a1={data:Fm,props:Um,emits:Um,methods:Io,computed:Io,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Io,directives:Io,watch:c1,provide:Fm,inject:l1};function Fm(t,e){return e?t?function(){return yt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function l1(t,e){return Io(Vf(t),Vf(e))}function Vf(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Io(t,e){return t?yt(Object.create(null),t,e):e}function Um(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:yt(Object.create(null),Mm(t),Mm(e??{})):e}function c1(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const r in e)n[r]=Bt(t[r],e[r]);return n}function fE(){return{app:null,config:{isNativeTag:WI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u1=0;function f1(t,e){return function(r,s=null){pe(r)||(r=yt({},r)),s!=null&&!Me(s)&&(s=null);const i=fE(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:u1++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:G1,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...h)):pe(f)&&(o.add(f),f(u,...h))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,h){return h?(i.components[f]=h,u):i.components[f]},directive(f,h){return h?(i.directives[f]=h,u):i.directives[f]},mount(f,h,p){if(!c){const g=u._ceVNode||we(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,f):t(g,f,p),c=!0,u._container=f,f.__vue_app__=u,Fc(g.component)}},onUnmount(f){a.push(f)},unmount(){c&&(In(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,h){return i.provides[f]=h,u},runWithContext(f){const h=Ps;Ps=u;try{return f()}finally{Ps=h}}};return u}}let Ps=null;function Gr(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function gt(t,e,n=!1){const r=lt||ut;if(r||Ps){let s=Ps?Ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Ia(){return!!(lt||ut||Ps)}const hE={},dE=()=>Object.create(hE),pE=t=>Object.getPrototypeOf(t)===hE;function h1(t,e,n,r=!1){const s={},i=dE();t.propsDefaults=Object.create(null),mE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ln(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function d1(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Lc(t.emitsOptions,p))continue;const g=e[p];if(c)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const y=mn(p);s[y]=Ff(c,a,y,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{mE(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!xe(e,h)&&((f=zs(h))===h||!xe(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Ff(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!xe(e,h))&&(delete i[h],u=!0)}u&&rr(t.attrs,"set","")}function mE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(yi(c))continue;const u=e[c];let f;s&&xe(s,f=mn(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Lc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Re(n),u=a||Fe;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Ff(s,c,h,u[h],t,!xe(u,h))}}return o}function Ff(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Aa(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===zs(n))&&(r=!0))}return r}const p1=new WeakMap;function gE(t,e,n=!1){const r=n?p1:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const f=h=>{c=!0;const[p,g]=gE(h,e,!0);yt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Me(t)&&r.set(t,mi),mi;if(ce(i))for(let f=0;f<i.length;f++){const h=mn(i[f]);jm(h)&&(o[h]=Fe)}else if(i)for(const f in i){const h=mn(f);if(jm(h)){const p=i[f],g=o[h]=ce(p)||pe(p)?{type:p}:yt({},p),y=g.type;let _=!1,P=!0;if(ce(y))for(let S=0;S<y.length;++S){const R=y[S],v=pe(R)&&R.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(P=!1)}else _=pe(y)&&y.name==="Boolean";g[0]=_,g[1]=P,(_||xe(g,"default"))&&a.push(h)}}const u=[o,a];return Me(t)&&r.set(t,u),u}function jm(t){return t[0]!=="$"&&!yi(t)}const fd=t=>t[0]==="_"||t==="$stable",hd=t=>ce(t)?t.map(Zt):[Zt(t)],m1=(t,e,n)=>{if(e._n)return e;const r=Nn((...s)=>hd(e(...s)),n);return r._c=!1,r},yE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fd(s))continue;const i=t[s];if(pe(i))e[s]=m1(s,i,r);else if(i!=null){const o=hd(i);e[s]=()=>o}}},_E=(t,e)=>{const n=hd(e);t.slots.default=()=>n},vE=(t,e,n)=>{for(const r in e)(n||!fd(r))&&(t[r]=e[r])},g1=(t,e,n)=>{const r=t.slots=dE();if(t.vnode.shapeFlag&32){const s=e.__;s&&Pf(r,"__",s,!0);const i=e._;i?(vE(r,e,n),n&&Pf(r,"_",i,!0)):yE(e,r)}else e&&_E(t,e)},y1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:vE(s,e,n):(i=!e.$stable,yE(e,s)),o=e}else e&&(_E(t,e),o={default:1});if(i)for(const a in s)!fd(a)&&o[a]==null&&delete s[a]},wt=RE;function _1(t){return EE(t)}function v1(t){return EE(t,qA)}function EE(t,e){const n=Pc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:g=Fn,insertStaticContent:y}=t,_=(k,x,V,H=null,U=null,z=null,Q=void 0,G=null,K=!!x.dynamicChildren)=>{if(k===x)return;k&&!vn(k,x)&&(H=j(k),Ye(k,U,z,!0),k=null),x.patchFlag===-2&&(K=!1,x.dynamicChildren=null);const{type:q,ref:le,shapeFlag:J}=x;switch(q){case ks:P(k,x,V,H);break;case ot:S(k,x,V,H);break;case Lo:k==null&&R(x,V,H,Q);break;case Lt:O(k,x,V,H,U,z,Q,G,K);break;default:J&1?D(k,x,V,H,U,z,Q,G,K):J&6?A(k,x,V,H,U,z,Q,G,K):(J&64||J&128)&&q.process(k,x,V,H,U,z,Q,G,K,re)}le!=null&&U?Ei(le,k&&k.ref,z,x||k,!x):le==null&&k&&k.ref!=null&&Ei(k.ref,null,z,k,!0)},P=(k,x,V,H)=>{if(k==null)r(x.el=a(x.children),V,H);else{const U=x.el=k.el;x.children!==k.children&&u(U,x.children)}},S=(k,x,V,H)=>{k==null?r(x.el=c(x.children||""),V,H):x.el=k.el},R=(k,x,V,H)=>{[k.el,k.anchor]=y(k.children,x,V,H,k.el,k.anchor)},v=({el:k,anchor:x},V,H)=>{let U;for(;k&&k!==x;)U=p(k),r(k,V,H),k=U;r(x,V,H)},C=({el:k,anchor:x})=>{let V;for(;k&&k!==x;)V=p(k),s(k),k=V;s(x)},D=(k,x,V,H,U,z,Q,G,K)=>{x.type==="svg"?Q="svg":x.type==="math"&&(Q="mathml"),k==null?M(x,V,H,U,z,Q,G,K):b(k,x,U,z,Q,G,K)},M=(k,x,V,H,U,z,Q,G)=>{let K,q;const{props:le,shapeFlag:J,transition:ae,dirs:ie}=k;if(K=k.el=o(k.type,z,le&&le.is,le),J&8?f(K,k.children):J&16&&E(k.children,K,null,H,U,qu(k,z),Q,G),ie&&xn(k,null,H,"created"),T(K,k,k.scopeId,Q,H),le){for(const ke in le)ke!=="value"&&!yi(ke)&&i(K,ke,null,le[ke],z,H);"value"in le&&i(K,"value",null,le.value,z),(q=le.onVnodeBeforeMount)&&Kt(q,H,k)}ie&&xn(k,null,H,"beforeMount");const he=bE(U,ae);he&&ae.beforeEnter(K),r(K,x,V),((q=le&&le.onVnodeMounted)||he||ie)&&wt(()=>{q&&Kt(q,H,k),he&&ae.enter(K),ie&&xn(k,null,H,"mounted")},U)},T=(k,x,V,H,U)=>{if(V&&g(k,V),H)for(let z=0;z<H.length;z++)g(k,H[z]);if(U){let z=U.subTree;if(x===z||Jl(z.type)&&(z.ssContent===x||z.ssFallback===x)){const Q=U.vnode;T(k,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},E=(k,x,V,H,U,z,Q,G,K=0)=>{for(let q=K;q<k.length;q++){const le=k[q]=G?Lr(k[q]):Zt(k[q]);_(null,le,x,V,H,U,z,Q,G)}},b=(k,x,V,H,U,z,Q)=>{const G=x.el=k.el;let{patchFlag:K,dynamicChildren:q,dirs:le}=x;K|=k.patchFlag&16;const J=k.props||Fe,ae=x.props||Fe;let ie;if(V&&vs(V,!1),(ie=ae.onVnodeBeforeUpdate)&&Kt(ie,V,x,k),le&&xn(x,k,V,"beforeUpdate"),V&&vs(V,!0),(J.innerHTML&&ae.innerHTML==null||J.textContent&&ae.textContent==null)&&f(G,""),q?I(k.dynamicChildren,q,G,V,H,qu(x,U),z):Q||ne(k,x,G,null,V,H,qu(x,U),z,!1),K>0){if(K&16)N(G,J,ae,V,U);else if(K&2&&J.class!==ae.class&&i(G,"class",null,ae.class,U),K&4&&i(G,"style",J.style,ae.style,U),K&8){const he=x.dynamicProps;for(let ke=0;ke<he.length;ke++){const Ce=he[ke],_t=J[Ce],dt=ae[Ce];(dt!==_t||Ce==="value")&&i(G,Ce,_t,dt,U,V)}}K&1&&k.children!==x.children&&f(G,x.children)}else!Q&&q==null&&N(G,J,ae,V,U);((ie=ae.onVnodeUpdated)||le)&&wt(()=>{ie&&Kt(ie,V,x,k),le&&xn(x,k,V,"updated")},H)},I=(k,x,V,H,U,z,Q)=>{for(let G=0;G<x.length;G++){const K=k[G],q=x[G],le=K.el&&(K.type===Lt||!vn(K,q)||K.shapeFlag&198)?h(K.el):V;_(K,q,le,null,H,U,z,Q,!0)}},N=(k,x,V,H,U)=>{if(x!==V){if(x!==Fe)for(const z in x)!yi(z)&&!(z in V)&&i(k,z,x[z],null,U,H);for(const z in V){if(yi(z))continue;const Q=V[z],G=x[z];Q!==G&&z!=="value"&&i(k,z,G,Q,U,H)}"value"in V&&i(k,"value",x.value,V.value,U)}},O=(k,x,V,H,U,z,Q,G,K)=>{const q=x.el=k?k.el:a(""),le=x.anchor=k?k.anchor:a("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:ie}=x;ie&&(G=G?G.concat(ie):ie),k==null?(r(q,V,H),r(le,V,H),E(x.children||[],V,le,U,z,Q,G,K)):J>0&&J&64&&ae&&k.dynamicChildren?(I(k.dynamicChildren,ae,V,U,z,Q,G),(x.key!=null||U&&x===U.subTree)&&wE(k,x,!0)):ne(k,x,V,le,U,z,Q,G,K)},A=(k,x,V,H,U,z,Q,G,K)=>{x.slotScopeIds=G,k==null?x.shapeFlag&512?U.ctx.activate(x,V,H,Q,K):ge(x,V,H,U,z,Q,K):ve(k,x,K)},ge=(k,x,V,H,U,z,Q)=>{const G=k.component=B1(k,H,U);if(Ta(k)&&(G.ctx.renderer=re),H1(G,!1,Q),G.asyncDep){if(U&&U.registerDep(G,Z,Q),!k.el){const K=G.subTree=we(ot);S(null,K,x,V)}}else Z(G,k,x,V,U,z,Q)},ve=(k,x,V)=>{const H=x.component=k.component;if(k1(k,x,V))if(H.asyncDep&&!H.asyncResolved){se(H,x,V);return}else H.next=x,H.update();else x.el=k.el,H.vnode=x},Z=(k,x,V,H,U,z,Q)=>{const G=()=>{if(k.isMounted){let{next:J,bu:ae,u:ie,parent:he,vnode:ke}=k;{const Ct=TE(k);if(Ct){J&&(J.el=ke.el,se(k,J,Q)),Ct.asyncDep.then(()=>{k.isUnmounted||G()});return}}let Ce=J,_t;vs(k,!1),J?(J.el=ke.el,se(k,J,Q)):J=ke,ae&&_i(ae),(_t=J.props&&J.props.onVnodeBeforeUpdate)&&Kt(_t,he,J,ke),vs(k,!0);const dt=Wu(k),vt=k.subTree;k.subTree=dt,_(vt,dt,h(vt.el),j(vt),k,U,z),J.el=dt.el,Ce===null&&Mc(k,dt.el),ie&&wt(ie,U),(_t=J.props&&J.props.onVnodeUpdated)&&wt(()=>Kt(_t,he,J,ke),U)}else{let J;const{el:ae,props:ie}=x,{bm:he,m:ke,parent:Ce,root:_t,type:dt}=k,vt=Kr(x);if(vs(k,!1),he&&_i(he),!vt&&(J=ie&&ie.onVnodeBeforeMount)&&Kt(J,Ce,x),vs(k,!0),ae&&Le){const Ct=()=>{k.subTree=Wu(k),Le(ae,k.subTree,k,U,null)};vt&&dt.__asyncHydrate?dt.__asyncHydrate(ae,k,Ct):Ct()}else{_t.ce&&_t.ce._def.shadowRoot!==!1&&_t.ce._injectChildStyle(dt);const Ct=k.subTree=Wu(k);_(null,Ct,V,H,k,U,z),x.el=Ct.el}if(ke&&wt(ke,U),!vt&&(J=ie&&ie.onVnodeMounted)){const Ct=x;wt(()=>Kt(J,Ce,Ct),U)}(x.shapeFlag&256||Ce&&Kr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&k.a&&wt(k.a,U),k.isMounted=!0,x=V=H=null}};k.scope.on();const K=k.effect=new Av(G);k.scope.off();const q=k.update=K.run.bind(K),le=k.job=K.runIfDirty.bind(K);le.i=k,le.id=k.uid,K.scheduler=()=>cd(le),vs(k,!0),q()},se=(k,x,V)=>{x.component=k;const H=k.vnode.props;k.vnode=x,k.next=null,d1(k,x.props,H,V),y1(k,x.children,V),fr(),Om(k),hr()},ne=(k,x,V,H,U,z,Q,G,K=!1)=>{const q=k&&k.children,le=k?k.shapeFlag:0,J=x.children,{patchFlag:ae,shapeFlag:ie}=x;if(ae>0){if(ae&128){gn(q,J,V,H,U,z,Q,G,K);return}else if(ae&256){je(q,J,V,H,U,z,Q,G,K);return}}ie&8?(le&16&&qt(q,U,z),J!==q&&f(V,J)):le&16?ie&16?gn(q,J,V,H,U,z,Q,G,K):qt(q,U,z,!0):(le&8&&f(V,""),ie&16&&E(J,V,H,U,z,Q,G,K))},je=(k,x,V,H,U,z,Q,G,K)=>{k=k||mi,x=x||mi;const q=k.length,le=x.length,J=Math.min(q,le);let ae;for(ae=0;ae<J;ae++){const ie=x[ae]=K?Lr(x[ae]):Zt(x[ae]);_(k[ae],ie,V,null,U,z,Q,G,K)}q>le?qt(k,U,z,!0,!1,J):E(x,V,H,U,z,Q,G,K,J)},gn=(k,x,V,H,U,z,Q,G,K)=>{let q=0;const le=x.length;let J=k.length-1,ae=le-1;for(;q<=J&&q<=ae;){const ie=k[q],he=x[q]=K?Lr(x[q]):Zt(x[q]);if(vn(ie,he))_(ie,he,V,null,U,z,Q,G,K);else break;q++}for(;q<=J&&q<=ae;){const ie=k[J],he=x[ae]=K?Lr(x[ae]):Zt(x[ae]);if(vn(ie,he))_(ie,he,V,null,U,z,Q,G,K);else break;J--,ae--}if(q>J){if(q<=ae){const ie=ae+1,he=ie<le?x[ie].el:H;for(;q<=ae;)_(null,x[q]=K?Lr(x[q]):Zt(x[q]),V,he,U,z,Q,G,K),q++}}else if(q>ae)for(;q<=J;)Ye(k[q],U,z,!0),q++;else{const ie=q,he=q,ke=new Map;for(q=he;q<=ae;q++){const Ut=x[q]=K?Lr(x[q]):Zt(x[q]);Ut.key!=null&&ke.set(Ut.key,q)}let Ce,_t=0;const dt=ae-he+1;let vt=!1,Ct=0;const Sr=new Array(dt);for(q=0;q<dt;q++)Sr[q]=0;for(q=ie;q<=J;q++){const Ut=k[q];if(_t>=dt){Ye(Ut,U,z,!0);continue}let on;if(Ut.key!=null)on=ke.get(Ut.key);else for(Ce=he;Ce<=ae;Ce++)if(Sr[Ce-he]===0&&vn(Ut,x[Ce])){on=Ce;break}on===void 0?Ye(Ut,U,z,!0):(Sr[on-he]=q+1,on>=Ct?Ct=on:vt=!0,_(Ut,x[on],V,null,U,z,Q,G,K),_t++)}const Qs=vt?E1(Sr):mi;for(Ce=Qs.length-1,q=dt-1;q>=0;q--){const Ut=he+q,on=x[Ut],Js=Ut+1<le?x[Ut+1].el:H;Sr[q]===0?_(null,on,V,Js,U,z,Q,G,K):vt&&(Ce<0||q!==Qs[Ce]?sn(on,V,Js,2):Ce--)}}},sn=(k,x,V,H,U=null)=>{const{el:z,type:Q,transition:G,children:K,shapeFlag:q}=k;if(q&6){sn(k.component.subTree,x,V,H);return}if(q&128){k.suspense.move(x,V,H);return}if(q&64){Q.move(k,x,V,re);return}if(Q===Lt){r(z,x,V);for(let J=0;J<K.length;J++)sn(K[J],x,V,H);r(k.anchor,x,V);return}if(Q===Lo){v(k,x,V);return}if(H!==2&&q&1&&G)if(H===0)G.beforeEnter(z),r(z,x,V),wt(()=>G.enter(z),U);else{const{leave:J,delayLeave:ae,afterLeave:ie}=G,he=()=>{k.ctx.isUnmounted?s(z):r(z,x,V)},ke=()=>{J(z,()=>{he(),ie&&ie()})};ae?ae(z,he,ke):ke()}else r(z,x,V)},Ye=(k,x,V,H=!1,U=!1)=>{const{type:z,props:Q,ref:G,children:K,dynamicChildren:q,shapeFlag:le,patchFlag:J,dirs:ae,cacheIndex:ie}=k;if(J===-2&&(U=!1),G!=null&&(fr(),Ei(G,null,V,k,!0),hr()),ie!=null&&(x.renderCache[ie]=void 0),le&256){x.ctx.deactivate(k);return}const he=le&1&&ae,ke=!Kr(k);let Ce;if(ke&&(Ce=Q&&Q.onVnodeBeforeUnmount)&&Kt(Ce,x,k),le&6)Pn(k.component,V,H);else{if(le&128){k.suspense.unmount(V,H);return}he&&xn(k,null,x,"beforeUnmount"),le&64?k.type.remove(k,x,V,re,H):q&&!q.hasOnce&&(z!==Lt||J>0&&J&64)?qt(q,x,V,!1,!0):(z===Lt&&J&384||!U&&le&16)&&qt(K,x,V),H&&Qe(k)}(ke&&(Ce=Q&&Q.onVnodeUnmounted)||he)&&wt(()=>{Ce&&Kt(Ce,x,k),he&&xn(k,null,x,"unmounted")},V)},Qe=k=>{const{type:x,el:V,anchor:H,transition:U}=k;if(x===Lt){Ar(V,H);return}if(x===Lo){C(k);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(k.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:G}=U,K=()=>Q(V,z);G?G(k.el,z,K):K()}else z()},Ar=(k,x)=>{let V;for(;k!==x;)V=p(k),s(k),k=V;s(x)},Pn=(k,x,V)=>{const{bum:H,scope:U,job:z,subTree:Q,um:G,m:K,a:q,parent:le,slots:{__:J}}=k;Ql(K),Ql(q),H&&_i(H),le&&ce(J)&&J.forEach(ae=>{le.renderCache[ae]=void 0}),U.stop(),z&&(z.flags|=8,Ye(Q,k,x,V)),G&&wt(G,x),wt(()=>{k.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},qt=(k,x,V,H=!1,U=!1,z=0)=>{for(let Q=z;Q<k.length;Q++)Ye(k[Q],x,V,H,U)},j=k=>{if(k.shapeFlag&6)return j(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const x=p(k.anchor||k.el),V=x&&x[UA];return V?p(V):x};let ee=!1;const X=(k,x,V)=>{k==null?x._vnode&&Ye(x._vnode,null,null,!0):_(x._vnode||null,k,x,null,null,null,V),x._vnode=k,ee||(ee=!0,Om(),Kl(),ee=!1)},re={p:_,um:Ye,m:sn,r:Qe,mt:ge,mc:E,pc:ne,pbc:I,n:j,o:t};let Ie,Le;return e&&([Ie,Le]=e(re)),{render:X,hydrate:Ie,createApp:f1(X,Ie)}}function qu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wE(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Lr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&wE(o,a)),a.type===ks&&(a.el=o.el),a.type===ot&&!a.el&&(a.el=o.el)}}function E1(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function TE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:TE(e)}function Ql(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const b1=Symbol.for("v-scx"),w1=()=>gt(b1);function T1(t,e){return dd(t,null,e)}function Un(t,e,n){return dd(t,e,n)}function dd(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=yt({},n),c=e&&r||!e&&i!=="post";let u;if(xi){if(i==="sync"){const g=w1();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Fn,g.resume=Fn,g.pause=Fn,g}}const f=lt;a.call=(g,y,_)=>In(g,f,y,_);let h=!1;i==="post"?a.scheduler=g=>{wt(g,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(g,y)=>{y?g():cd(g)}),a.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=MA(t,e,a);return xi&&(u?u.push(p):c&&p()),p}function I1(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?IE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Aa(this),a=dd(s,i.bind(r),n);return o(),a}function IE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const A1=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${zs(e)}Modifiers`];function S1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&A1(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),o.number&&(s=n.map($l)));let a,c=r[a=Mu(e)]||r[a=Mu(mn(e))];!c&&i&&(c=r[a=Mu(zs(e))]),c&&In(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,In(u,t,6,s)}}function AE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const f=AE(u,e,!0);f&&(a=!0,yt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Me(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):yt(o,i),Me(t)&&r.set(t,o),o)}function Lc(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,zs(e))||xe(t,e))}function Wu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:h,data:p,setupState:g,ctx:y,inheritAttrs:_}=t,P=Gl(t);let S,R;try{if(n.shapeFlag&4){const C=s||r,D=C;S=Zt(u.call(D,C,f,h,g,p,y)),R=a}else{const C=e;S=Zt(C.length>1?C(h,{attrs:a,slots:o,emit:c}):C(h,null)),R=e.props?a:C1(a)}}catch(C){Mo.length=0,Yi(C,t,1),S=we(ot)}let v=S;if(R&&_!==!1){const C=Object.keys(R),{shapeFlag:D}=v;C.length&&D&7&&(i&&C.some(Qh)&&(R=P1(R,i)),v=pr(v,R,!1,!0))}return n.dirs&&(v=pr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Oi(v,n.transition),S=v,Gl(P),S}function R1(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ds(s)){if(s.type!==ot||s.children==="v-if"){if(n)return;n=s}}else return}return n}const C1=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},P1=(t,e)=>{const n={};for(const r in t)(!Qh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function k1(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$m(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Lc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$m(r,o,u):!0:!!o;return!1}function $m(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lc(n,i))return!0}return!1}function Mc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jl=t=>t.__isSuspense;let Uf=0;const O1={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)N1(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}x1(t,e,n,r,s,o,a,c,u)}},hydrate:D1,normalize:L1},pd=O1;function ta(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function N1(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:f}}=c,h=f("div"),p=t.suspense=SE(t,s,r,e,h,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,h,null,r,p,i,o),p.deps>0?(ta(t,"onPending"),ta(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),bi(p,t.ssFallback)):p.resolve(!1,!0)}function x1(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:f}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:y,pendingBranch:_,isInFallback:P,isHydrating:S}=h;if(_)h.pendingBranch=p,vn(p,_)?(c(_,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():P&&(S||(c(y,g,n,r,s,null,i,o,a),bi(h,g)))):(h.pendingId=Uf++,S?(h.isHydrating=!1,h.activeBranch=_):u(_,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),P?(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(y,g,n,r,s,null,i,o,a),bi(h,g))):y&&vn(p,y)?(c(y,p,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&vn(p,y))c(y,p,n,r,s,h,i,o,a),bi(h,p);else if(ta(e,"onPending"),h.pendingBranch=p,p.shapeFlag&512?h.pendingId=p.component.suspenseId:h.pendingId=Uf++,c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:R,pendingId:v}=h;R>0?setTimeout(()=>{h.pendingId===v&&h.fallback(g)},R):R===0&&h.fallback(g)}}function SE(t,e,n,r,s,i,o,a,c,u,f=!1){const{p:h,m:p,um:g,n:y,o:{parentNode:_,remove:P}}=u;let S;const R=M1(t);R&&e&&e.pendingBranch&&(S=e.pendingId,e.deps++);const v=t.props?Ev(t.props.timeout):void 0,C=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Uf++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(M=!1,T=!1){const{vnode:E,activeBranch:b,pendingBranch:I,pendingId:N,effects:O,parentComponent:A,container:ge}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:M||(ve=b&&I.transition&&I.transition.mode==="out-in",ve&&(b.transition.afterLeave=()=>{N===D.pendingId&&(p(I,ge,i===C?y(b):i,0),xf(O))}),b&&(_(b.el)===ge&&(i=y(b)),g(b,A,D,!0)),ve||p(I,ge,i,0)),bi(D,I),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...O),se=!0;break}Z=Z.parent}!se&&!ve&&xf(O),D.effects=[],R&&e&&e.pendingBranch&&S===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),ta(E,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:T,activeBranch:E,parentComponent:b,container:I,namespace:N}=D;ta(T,"onFallback");const O=y(E),A=()=>{D.isInFallback&&(h(null,M,I,O,b,null,N,a,c),bi(D,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(E.transition.afterLeave=A),D.isInFallback=!0,g(E,b,null,!0),ge||A()},move(M,T,E){D.activeBranch&&p(D.activeBranch,M,T,E),D.container=M},next(){return D.activeBranch&&y(D.activeBranch)},registerDep(M,T,E){const b=!!D.pendingBranch;b&&D.deps++;const I=M.vnode.el;M.asyncDep.catch(N=>{Yi(N,M,0)}).then(N=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:O}=M;$f(M,N),I&&(O.el=I);const A=!I&&M.subTree.el;T(M,O,_(I||M.subTree.el),I?null:y(M.subTree),D,o,E),A&&P(A),Mc(M,O.el),b&&--D.deps===0&&D.resolve()})},unmount(M,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,T),D.pendingBranch&&g(D.pendingBranch,n,M,T)}};return D}function D1(t,e,n,r,s,i,o,a,c){const u=e.suspense=SE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function L1(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Bm(r?n.default:n),t.ssFallback=r?Bm(n.fallback):we(ot)}function Bm(t){let e;if(pe(t)){const n=Ni&&t._c;n&&(t._d=!1,zt()),t=t(),n&&(t._d=!0,e=Qt,CE())}return ce(t)&&(t=R1(t)),t=Zt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function RE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):xf(t)}function bi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Mc(r,s))}function M1(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Lt=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),Mo=[];let Qt=null;function zt(t=!1){Mo.push(Qt=t?null:[])}function CE(){Mo.pop(),Qt=Mo[Mo.length-1]||null}let Ni=1;function Hm(t,e=!1){Ni+=t,t<0&&Qt&&e&&(Qt.hasOnce=!0)}function PE(t){return t.dynamicChildren=Ni>0?Qt||mi:null,CE(),Ni>0&&Qt&&Qt.push(t),t}function na(t,e,n,r,s,i){return PE(Ke(t,e,n,r,s,i,!0))}function ir(t,e,n,r,s){return PE(we(t,e,n,r,s,!0))}function Ds(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const kE=({key:t})=>t??null,Il=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||Je(t)||pe(t)?{i:ut,r:t,k:e,f:!!n}:t:null);function Ke(t,e=null,n=null,r=0,s=null,i=t===Lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kE(e),ref:e&&Il(e),scopeId:Wv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ut};return a?(md(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),Ni>0&&!o&&Qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Qt.push(c),c}const we=V1;function V1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===oE)&&(t=ot),Ds(t)){const a=pr(t,e,!0);return n&&md(a,n),Ni>0&&!i&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(t)]=a:Qt.push(a)),a.patchFlag=-2,a}if(K1(t)&&(t=t.__vccOpts),e){e=F1(e);let{class:a,style:c}=e;a&&!Ge(a)&&(e.class=va(a)),Me(c)&&(ad(c)&&!ce(c)&&(c=yt({},c)),e.style=kc(c))}const o=Ge(t)?1:Jl(t)?128:Kv(t)?64:Me(t)?4:pe(t)?2:0;return Ke(t,e,n,r,s,o,i,!0)}function F1(t){return t?ad(t)||pE(t)?yt({},t):t:null}function pr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?OE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&kE(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Il(e)):[i,Il(e)]:Il(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pr(t.ssContent),ssFallback:t.ssFallback&&pr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Oi(f,c.clone(f)),f}function un(t=" ",e=0){return we(ks,null,t,e)}function B9(t,e){const n=we(Lo,null,t);return n.staticCount=e,n}function U1(t="",e=!1){return e?(zt(),ir(ot,null,t)):we(ot,null,t)}function Zt(t){return t==null||typeof t=="boolean"?we(ot):ce(t)?we(Lt,null,t.slice()):Ds(t)?Lr(t):we(ks,null,String(t))}function Lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pr(t)}function md(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),md(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pE(e)?e._ctx=ut:s===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),r&64?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function OE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=va([e.class,r.class]));else if(s==="style")e.style=kc([e.style,r.style]);else if(_a(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){In(t,e,7,[n,r])}const j1=fE();let $1=0;function B1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||j1,i={uid:$1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Iv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gE(r,s),emitsOptions:AE(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=S1.bind(null,i),t.ce&&t.ce(i),i}let lt=null;const Vc=()=>lt||ut;let Xl,jf;{const t=Pc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xl=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),jf=e("__VUE_SSR_SETTERS__",n=>xi=n)}const Aa=t=>{const e=lt;return Xl(t),t.scope.on(),()=>{t.scope.off(),Xl(e)}},zm=()=>{lt&&lt.scope.off(),Xl(null)};function NE(t){return t.vnode.shapeFlag&4}let xi=!1;function H1(t,e=!1,n=!1){e&&jf(e);const{props:r,children:s}=t.vnode,i=NE(t);h1(t,r,i,e),g1(t,s,n||e);const o=i?z1(t,e):void 0;return e&&jf(!1),o}function z1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,s1);const{setup:r}=n;if(r){fr();const s=t.setupContext=r.length>1?W1(t):null,i=Aa(t),o=wa(r,t,0,[t.props,s]),a=yv(o);if(hr(),i(),(a||t.sp)&&!Kr(t)&&ud(t),a){if(o.then(zm,zm),e)return o.then(c=>{$f(t,c)}).catch(c=>{Yi(c,t,0)});t.asyncDep=o}else $f(t,o)}else xE(t)}function $f(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=$v(e)),xE(t)}function xE(t,e,n){const r=t.type;t.render||(t.render=r.render||Fn);{const s=Aa(t);fr();try{i1(t)}finally{hr(),s()}}}const q1={get(t,e){return Dt(t,"get",""),t[e]}};function W1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,q1),slots:t.slots,emit:t.emit,expose:e}}function Fc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($v(ld(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Do)return Do[n](t)},has(e,n){return n in e||n in Do}})):t.proxy}function Bf(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function K1(t){return pe(t)&&"__vccOpts"in t}const Ue=(t,e)=>DA(t,e,xi);function ft(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ce(e)?Ds(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ds(n)&&(n=[n]),we(t,e,n))}const G1="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hf;const qm=typeof window<"u"&&window.trustedTypes;if(qm)try{Hf=qm.createPolicy("vue",{createHTML:t=>t})}catch{}const DE=Hf?t=>Hf.createHTML(t):t=>t,Y1="http://www.w3.org/2000/svg",Q1="http://www.w3.org/1998/Math/MathML",nr=typeof document<"u"?document:null,Wm=nr&&nr.createElement("template"),J1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?nr.createElementNS(Y1,t):e==="mathml"?nr.createElementNS(Q1,t):n?nr.createElement(t,{is:n}):nr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nr.createTextNode(t),createComment:t=>nr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wm.innerHTML=DE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Wm.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kr="transition",vo="animation",ra=Symbol("_vtc"),LE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},X1=yt({},Gv,LE),Z1=t=>(t.displayName="Transition",t.props=X1,t),eS=Z1((t,{slots:e})=>ft(BA,tS(t),e)),Es=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Km=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function tS(t){const e={};for(const O in t)O in LE||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,y=nS(s),_=y&&y[0],P=y&&y[1],{onBeforeEnter:S,onEnter:R,onEnterCancelled:v,onLeave:C,onLeaveCancelled:D,onBeforeAppear:M=S,onAppear:T=R,onAppearCancelled:E=v}=e,b=(O,A,ge,ve)=>{O._enterCancelled=ve,bs(O,A?f:a),bs(O,A?u:o),ge&&ge()},I=(O,A)=>{O._isLeaving=!1,bs(O,h),bs(O,g),bs(O,p),A&&A()},N=O=>(A,ge)=>{const ve=O?T:R,Z=()=>b(A,O,ge);Es(ve,[A,Z]),Gm(()=>{bs(A,O?c:i),er(A,O?f:a),Km(ve)||Ym(A,r,_,Z)})};return yt(e,{onBeforeEnter(O){Es(S,[O]),er(O,i),er(O,o)},onBeforeAppear(O){Es(M,[O]),er(O,c),er(O,u)},onEnter:N(!1),onAppear:N(!0),onLeave(O,A){O._isLeaving=!0;const ge=()=>I(O,A);er(O,h),O._enterCancelled?(er(O,p),Xm()):(Xm(),er(O,p)),Gm(()=>{O._isLeaving&&(bs(O,h),er(O,g),Km(C)||Ym(O,r,P,ge))}),Es(C,[O,ge])},onEnterCancelled(O){b(O,!1,void 0,!0),Es(v,[O])},onAppearCancelled(O){b(O,!0,void 0,!0),Es(E,[O])},onLeaveCancelled(O){I(O),Es(D,[O])}})}function nS(t){if(t==null)return null;if(Me(t))return[Ku(t.enter),Ku(t.leave)];{const e=Ku(t);return[e,e]}}function Ku(t){return Ev(t)}function er(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ra]||(t[ra]=new Set)).add(e)}function bs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ra];n&&(n.delete(e),n.size||(t[ra]=void 0))}function Gm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let rS=0;function Ym(t,e,n,r){const s=t._endId=++rS,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=sS(t,e);if(!o)return r();const u=o+"end";let f=0;const h=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++f>=c&&h()};setTimeout(()=>{f<c&&h()},a+1),t.addEventListener(u,p)}function sS(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${kr}Delay`),i=r(`${kr}Duration`),o=Qm(s,i),a=r(`${vo}Delay`),c=r(`${vo}Duration`),u=Qm(a,c);let f=null,h=0,p=0;e===kr?o>0&&(f=kr,h=o,p=i.length):e===vo?u>0&&(f=vo,h=u,p=c.length):(h=Math.max(o,u),f=h>0?o>u?kr:vo:null,p=f?f===kr?i.length:c.length:0);const g=f===kr&&/\b(transform|all)(,|$)/.test(r(`${kr}Property`).toString());return{type:f,timeout:h,propCount:p,hasTransform:g}}function Qm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Jm(n)+Jm(t[r])))}function Jm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xm(){return document.body.offsetHeight}function iS(t,e,n){const r=t[ra];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zm=Symbol("_vod"),oS=Symbol("_vsh"),aS=Symbol(""),lS=/(^|;)\s*display\s*:/;function cS(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Al(r,a,"")}else for(const o in e)n[o]==null&&Al(r,o,"");for(const o in n)o==="display"&&(i=!0),Al(r,o,n[o])}else if(s){if(e!==n){const o=r[aS];o&&(n+=";"+o),r.cssText=n,i=lS.test(n)}}else e&&t.removeAttribute("style");Zm in t&&(t[Zm]=i?r.display:"",t[oS]&&(r.display="none"))}const eg=/\s*!important$/;function Al(t,e,n){if(ce(n))n.forEach(r=>Al(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uS(t,e);eg.test(n)?t.setProperty(zs(r),n.replace(eg,""),"important"):t[r]=n}}const tg=["Webkit","Moz","ms"],Gu={};function uS(t,e){const n=Gu[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return Gu[e]=r;r=Cc(r);for(let s=0;s<tg.length;s++){const i=tg[s]+r;if(i in t)return Gu[e]=i}return e}const ng="http://www.w3.org/1999/xlink";function rg(t,e,n,r,s,i=rA(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ng,e.slice(6,e.length)):t.setAttributeNS(ng,e,n):n==null||i&&!bv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tn(n)?String(n):n)}function sg(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?DE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=bv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Fr(t,e,n,r){t.addEventListener(e,n,r)}function fS(t,e,n,r){t.removeEventListener(e,n,r)}const ig=Symbol("_vei");function hS(t,e,n,r,s=null){const i=t[ig]||(t[ig]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=dS(e);if(r){const u=i[e]=gS(r,s);Fr(t,a,u,c)}else o&&(fS(t,a,o,c),i[e]=void 0)}}const og=/(?:Once|Passive|Capture)$/;function dS(t){let e;if(og.test(t)){e={};let r;for(;r=t.match(og);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zs(t.slice(2)),e]}let Yu=0;const pS=Promise.resolve(),mS=()=>Yu||(pS.then(()=>Yu=0),Yu=Date.now());function gS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;In(yS(r,n.value),e,5,[r])};return n.value=t,n.attached=mS(),n}function yS(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ag=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_S=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?iS(t,r,o):e==="style"?cS(t,n,r):_a(e)?Qh(e)||hS(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vS(t,e,r,o))?(sg(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rg(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?sg(t,mn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rg(t,e,r,o))};function vS(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ag(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ag(e)&&Ge(n)?!1:e in t}const Di=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>_i(e,n):e};function ES(t){t.target.composing=!0}function lg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ur=Symbol("_assign"),H9={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ur]=Di(s);const i=r||s.props&&s.props.type==="number";Fr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$l(a)),t[ur](a)}),n&&Fr(t,"change",()=>{t.value=t.value.trim()}),e||(Fr(t,"compositionstart",ES),Fr(t,"compositionend",lg),Fr(t,"change",lg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ur]=Di(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?$l(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},z9={deep:!0,created(t,e,n){t[ur]=Di(n),Fr(t,"change",()=>{const r=t._modelValue,s=sa(t),i=t.checked,o=t[ur];if(ce(r)){const a=Zh(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(Ki(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(ME(t,i))})},mounted:cg,beforeUpdate(t,e,n){t[ur]=Di(n),cg(t,e,n)}};function cg(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=Zh(e,r.props.value)>-1;else if(Ki(e))s=e.has(r.props.value);else{if(e===n)return;s=Ea(e,ME(t,!0))}t.checked!==s&&(t.checked=s)}const q9={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ki(e);Fr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$l(sa(o)):sa(o));t[ur](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Kn(()=>{t._assigning=!1})}),t[ur]=Di(r)},mounted(t,{value:e}){ug(t,e)},beforeUpdate(t,e,n){t[ur]=Di(n)},updated(t,{value:e}){t._assigning||ug(t,e)}};function ug(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Ki(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=sa(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Zh(e,a)>-1}else o.selected=e.has(a);else if(Ea(sa(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function sa(t){return"_value"in t?t._value:t.value}function ME(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const bS=["ctrl","shift","alt","meta"],wS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bS.some(n=>t[`${n}Key`]&&!e.includes(n))},W9=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=wS[e[o]];if(a&&a(s,e))return}return t(s,...i)})},VE=yt({patchProp:_S},J1);let Vo,fg=!1;function TS(){return Vo||(Vo=_1(VE))}function IS(){return Vo=fg?Vo:v1(VE),fg=!0,Vo}const AS=(...t)=>{const e=TS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=UE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,FE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},SS=(...t)=>{const e=IS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=UE(r);if(s)return n(s,!0,FE(s))},e};function FE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function UE(t){return Ge(t)?document.querySelector(t):t}const RS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,CS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,PS=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function kS(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){OS(t);return}return e}function OS(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ia(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!PS.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(RS.test(t)||CS.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,kS)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const NS=/#/g,xS=/&/g,DS=/\//g,LS=/=/g,gd=/\+/g,MS=/%5e/gi,VS=/%60/gi,FS=/%7c/gi,US=/%20/gi;function jS(t){return encodeURI(""+t).replace(FS,"|")}function zf(t){return jS(typeof t=="string"?t:JSON.stringify(t)).replace(gd,"%2B").replace(US,"+").replace(NS,"%23").replace(xS,"%26").replace(VS,"`").replace(MS,"^").replace(DS,"%2F")}function Qu(t){return zf(t).replace(LS,"%3D")}function Zl(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function $S(t){return Zl(t.replace(gd," "))}function BS(t){return Zl(t.replace(gd," "))}function yd(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=$S(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=BS(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function HS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Qu(t)}=${zf(n)}`).join("&"):`${Qu(t)}=${zf(e)}`:Qu(t)}function zS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>HS(e,t[e])).filter(Boolean).join("&")}const qS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,WS=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,KS=/^([/\\]\s*){2,}[^/\\]/,GS=/^[\s\0]*(blob|data|javascript|vbscript):$/i,YS=/\/$|\/\?|\/#/,QS=/^\.?\//;function Tr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?qS.test(t):WS.test(t)||(e.acceptRelative?KS.test(t):!1)}function JS(t){return!!t&&GS.test(t)}function qf(t="",e){return e?YS.test(t):t.endsWith("/")}function Li(t="",e){if(!e)return(qf(t)?t.slice(0,-1):t)||"/";if(!qf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function jE(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(qf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function XS(t,e){if(BE(e)||Tr(t))return t;const n=Li(e);return t.startsWith(n)?t:Uc(n,t)}function hg(t,e){if(BE(e))return t;const n=Li(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function $E(t,e){const n=qE(t),r={...yd(n.search),...e};return n.search=zS(r),tR(n)}function BE(t){return!t||t==="/"}function ZS(t){return t&&t!=="/"}function Uc(t,...e){let n=t||"";for(const r of e.filter(s=>ZS(s)))if(n){const s=r.replace(QS,"");n=jE(n)+s}else n=r;return n}function HE(...t){var o,a,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const f of n)if(!(!f||f==="/")){for(const[h,p]of f.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&Tr(r[0]))continue;r.pop(),s--;continue}if(h===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function eR(t,e){return Zl(Li(t))===Zl(Li(e))}const zE=Symbol.for("ufo:protocolRelative");function qE(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,p=""]=n;return{protocol:h.toLowerCase(),pathname:p,href:h+p,auth:"",host:"",search:"",hash:""}}if(!Tr(t,{acceptRelative:!0}))return dg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:f}=dg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:f,[zE]:!r}}function dg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function tR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[zE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class nR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function rR(t){var c,u,f,h,p;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((f=t.request)==null?void 0:f.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new nR(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,y]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[y]}});return a}const sR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function pg(t="GET"){return sR.has(t.toUpperCase())}function iR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const oR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),aR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function lR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return aR.test(e)?"json":oR.has(e)||e.startsWith("text/")?"text":"blob"}function cR(t,e,n,r){const s=uR((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function uR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function al(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const fR=new Set([408,409,425,429,500,502,503,504]),hR=new Set([101,204,205,304]);function WE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let f;typeof a.options.retry=="number"?f=a.options.retry:f=pg(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):fR.has(h))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:f-1})}}const u=rR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const f={request:c,options:cR(c,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await al(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=XS(f.request,f.options.baseURL)),f.options.query&&(f.request=$E(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&pg(f.options.method)&&(iR(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let h;if(!f.options.signal&&f.options.timeout){const g=new r;h=setTimeout(()=>{const y=new Error("[TimeoutError]: The operation was aborted due to timeout");y.name="TimeoutError",y.code=23,g.abort(y)},f.options.timeout),f.options.signal=g.signal}try{f.response=await e(f.request,f.options)}catch(g){return f.error=g,f.options.onRequestError&&await al(f,f.options.onRequestError),await s(f)}finally{h&&clearTimeout(h)}if((f.response.body||f.response._bodyInit)&&!hR.has(f.response.status)&&f.options.method!=="HEAD"){const g=(f.options.parseResponse?"json":f.options.responseType)||lR(f.response.headers.get("content-type")||"");switch(g){case"json":{const y=await f.response.text(),_=f.options.parseResponse||ia;f.response._data=_(y);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[g]()}}return f.options.onResponse&&await al(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await al(f,f.options.onResponseError),await s(f)):f.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>WE({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const ec=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),dR=ec.fetch?(...t)=>ec.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),pR=ec.Headers,mR=ec.AbortController,gR=WE({fetch:dR,Headers:pR,AbortController:mR}),yR=gR,_R=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},_d=()=>_R().app,vR=()=>_d().baseURL,ER=()=>_d().buildAssetsDir,vd=(...t)=>HE(Ed(),ER(),...t),Ed=(...t)=>{const e=_d(),n=e.cdnURL||e.baseURL;return t.length?HE(n,...t):n};globalThis.__buildAssetsURL=vd,globalThis.__publicAssetsURL=Ed;globalThis.$fetch||(globalThis.$fetch=yR.create({baseURL:vR()}));"global"in globalThis||(globalThis.global=globalThis);function Wf(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Wf(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const bR={run:t=>t()},wR=()=>bR,KE=typeof console.createTask<"u"?console.createTask:wR;function TR(t,e){const n=e.shift(),r=KE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function IR(t,e){const n=e.shift(),r=KE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Ju(t,e){for(const n of[...t])n(e)}class AR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Wf(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Wf(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(TR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(IR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Ju(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Ju(this._after,s)}):(this._after&&s&&Ju(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function GE(){return new AR}function SR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;Kf.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{Kf.delete(u)}}}}function RR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=SR({...t,...r})),e[n]}}}const tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},mg="__unctx__",CR=tc[mg]||(tc[mg]=RR()),PR=(t,e={})=>CR.get(t,e),gg="__unctx_async_handlers__",Kf=tc[gg]||(tc[gg]=new Set);function wi(t){const e=[];for(const s of Kf){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const yg={name:"page",mode:"out-in"},kR=!1,OR=!1,NR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},xR=null,DR="#__nuxt",YE="nuxt-app",_g=36e5,LR="vite:preloadError";function QE(t=YE){return PR(t,{asyncContext:!1})}const MR="__nuxt_plugin";function VR(t){var s;let e=0;const n={_id:t.id||YE||"nuxt-app",_scope:td(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.7"},get vue(){return n.vueApp.version}},payload:Ln({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Ln({}),state:br({}),once:new Set,_errors:Ln({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!ba()?n._scope.run(()=>vg(n,i)):vg(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Ln({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=GE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;ll(n,a,o),ll(n.vueApp.config.globalProperties,a,o)},ll(n.vueApp,"$nuxt",n),ll(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(LR,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Be);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function FR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function UR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function jR(t,e){const n=new Set,r=[],s=[],i=[];let o=0;async function a(c){var f;const u=((f=c.dependsOn)==null?void 0:f.filter(h=>e.some(p=>p._name===h)&&!n.has(h)))??[];if(u.length>0)r.push([new Set(u),c]);else{const h=UR(t,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([p,g])=>{p.has(c._name)&&(p.delete(c._name),p.size===0&&(o++,await a(g)))})))});c.parallel?s.push(h.catch(p=>i.push(p))):await h}}for(const c of e)FR(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function nn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[MR]:!0,_name:e})}function vg(t,e,n){const r=()=>e();return QE(t._id).set(t),t.vueApp.runWithContext(r)}function JE(t){var n;let e;return Ia()&&(e=(n=Vc())==null?void 0:n.appContext.app.$nuxt),e||(e=QE(t).tryUse()),e||null}function Be(t){const e=JE(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function qs(t){return Be().$config}function ll(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function $R(t,e){return{ctx:{table:t},matchAll:n=>ZE(n,t)}}function XE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,XE(s)])):new Map(Object.entries(t[n]));return e}function BR(t){return $R(XE(t))}function ZE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Eg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Eg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...ZE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Eg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Xu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Gf(t,e,n=".",r){if(!Xu(e))return Gf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Xu(o)&&Xu(s[i])?s[i]=Gf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function HR(t){return(...e)=>e.reduce((n,r)=>Gf(n,r,"",t),{})}const eb=HR();function zR(t,e){try{return e in t}catch{return!1}}class Yf extends Error{constructor(n,r={}){super(n,r);an(this,"statusCode",500);an(this,"fatal",!1);an(this,"unhandled",!1);an(this,"statusMessage");an(this,"data");an(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Qf(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=tb(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}an(Yf,"__h3_error__",!0);function qR(t){if(typeof t=="string")return new Yf(t);if(WR(t))return t;const e=new Yf(t.message??t.statusMessage??"",{cause:t.cause||t});if(zR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Qf(t.statusCode,e.statusCode):t.status&&(e.statusCode=Qf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;tb(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function WR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const KR=/[^\u0009\u0020-\u007E]/g;function tb(t=""){return t.replace(KR,"")}function Qf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const nb=Symbol("layout-meta"),Ls=Symbol("route"),St=()=>{var t;return(t=Be())==null?void 0:t.$router},jc=()=>Ia()?gt(Ls,Be()._route):Be()._route;function K9(t){return t}const GR=()=>{try{if(Be()._processingMiddleware)return!0}catch{return!1}return!1},YR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Jf(t):St().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([h,p])=>p!==void 0).map(([h,p])=>`${h.toLowerCase()}=${p}`).join(", ");return open(n,c,f),Promise.resolve()}const r=Tr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&JS(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=GR();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:f}=qE(t);return{path:c,...u&&{query:yd(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=St(),a=Be();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Jf(t){return $E(t.path||"",t.query||{})+(t.hash||"")}const rb="__nuxt_error",$c=()=>NA(Be().payload,"error"),Is=t=>{const e=Os(t);try{const n=Be(),r=$c();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},sb=async(t={})=>{const e=Be(),n=$c();e.callHook("app:error:cleared",t),t.redirect&&await St().replace(t.redirect),n.value=xR},ib=t=>!!t&&typeof t=="object"&&rb in t,Os=t=>{const e=qR(t);return Object.defineProperty(e,rb,{value:!0,configurable:!1,writable:!1}),e};function bg(t){const e=JR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const QR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function JR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=QR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const XR=-1,ZR=-2,eC=-3,tC=-4,nC=-5,rC=-6;function sC(t,e){return iC(JSON.parse(t),e)}function iC(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===XR)return;if(i===eC)return NaN;if(i===tC)return 1/0;if(i===nC)return-1/0;if(i===rC)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e==null?void 0:e[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let g=1;g<a.length;g+=1)f.add(s(a[g]));break;case"Map":const h=new Map;r[i]=h;for(let g=1;g<a.length;g+=2)h.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[c],y=a[1],_=bg(y),P=new g(_);r[i]=P;break}case"ArrayBuffer":{const g=a[1],y=bg(g);r[i]=y;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const f=a[u];f!==ZR&&(c[u]=s(f))}}else{const c={};r[i]=c;for(const u in a){const f=a[u];c[u]=s(f)}}return r[i]}return s(0)}const oC=new Set(["link","style","script","noscript"]),aC=new Set(["title","titleTemplate","script","style","noscript"]),wg=new Set(["base","meta","link","style","script","noscript"]),lC=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),cC=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),uC=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),fC=new Set(["templateParams","htmlAttrs","bodyAttrs"]),hC=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const dC=["name","property","http-equiv"],pC=new Set(["viewport","description","keywords","robots"]);function ob(t){const e=t.split(":");return e.length?hC.has(e[1]):!1}function Xf(t){const{props:e,tag:n}=t;if(cC.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of dC)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=pC.has(s),c=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${c}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(aC.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Tg(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function nc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>nc(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=nc(s[o],e,o);return i}return s}function mC(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function ab(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=mC(n,r);return}if(uC.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function gC(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=ab({tag:t,props:{}},n);return r.key&&oC.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function yC(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=nc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(gC(s,o))}),r.flat()}const Zf=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Ig={base:-10,title:10},_C={critical:-8,high:-1,low:2},Ag={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},vC=/@import/,Eo=t=>t===""||t===!0;function EC(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=_C[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Ag;if(e.tag in Ig)n=Ig[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=Ag.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?Eo(e.props.async)?n=s.script.async:e.props.src&&!Eo(e.props.defer)&&!Eo(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:Eo(e.props.defer)&&e.props.src&&!Eo(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&vC.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function Sg(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function bC(t={}){var a;const e=GE();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:c=>Sg(o,c),push(c,u){const f={...u||{}};delete f.head;const h=f._index??o._entryCount++,p={_i:h,input:c,options:f},g={_poll(y=!1){o.dirty=!0,!y&&i.add(h),e.callHook("entries:updated",o)},dispose(){r.delete(h)&&o.invalidate()},patch(y){(!f.mode||f.mode==="server"&&n||f.mode==="client"&&!n)&&(p.input=y,r.set(h,p),g._poll())}};return g.patch(c),g},async resolveTags(){var g;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",c);i.size;){const y=i.values().next().value;i.delete(y);const _=r.get(y);if(_){const P={tags:yC(_.input,t.propResolvers||[]).map(S=>Object.assign(S,_.options)),entry:_};await e.callHook("entries:normalize",P),_._tags=P.tags.map((S,R)=>(S._w=EC(o,S),S._p=(_._i<<10)+R,S._d=Xf(S),S))}}let u=!1;c.entries.flatMap(y=>(y._tags||[]).map(_=>({..._,props:{..._.props}}))).sort(Zf).reduce((y,_)=>{const P=String(_._d||_._p);if(!y.has(P))return y.set(P,_);const S=y.get(P);if(((_==null?void 0:_.tagDuplicateStrategy)||(fC.has(_.tag)?"merge":null)||(_.key&&_.key===S.key?"merge":null))==="merge"){const v={...S.props};Object.entries(_.props).forEach(([C,D])=>v[C]=C==="style"?new Map([...S.props.style||new Map,...D]):C==="class"?new Set([...S.props.class||new Set,...D]):D),y.set(P,{..._,props:v})}else _._p>>10===S._p>>10&&_.tag==="meta"&&ob(P)?(y.set(P,Object.assign([...Array.isArray(S)?S:[S],_],_)),u=!0):(_._w===S._w?_._p>S._p:(_==null?void 0:_._w)<(S==null?void 0:S._w))&&y.set(P,_);return y},c.tagMap);const f=c.tagMap.get("title"),h=c.tagMap.get("titleTemplate");if(o._title=f==null?void 0:f.textContent,h){const y=h==null?void 0:h.textContent;if(o._titleTemplate=y,y){let _=typeof y=="function"?y(f==null?void 0:f.textContent):y;typeof _=="string"&&!o.plugins.has("template-params")&&(_=_.replace("%s",(f==null?void 0:f.textContent)||"")),f?_===null?c.tagMap.delete("title"):c.tagMap.set("title",{...f,textContent:_}):(h.tag="title",h.textContent=_)}}c.tags=Array.from(c.tagMap.values()),u&&(c.tags=c.tags.flat().sort(Zf)),await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c);const p=[];for(const y of c.tags){const{innerHTML:_,tag:P,props:S}=y;if(lC.has(P)&&!(Object.keys(S).length===0&&!y.innerHTML&&!y.textContent)&&!(P==="meta"&&!S.content&&!S["http-equiv"]&&!S.charset)){if(P==="script"&&_){if((g=S.type)!=null&&g.endsWith("json")){const R=typeof _=="string"?_:JSON.stringify(_);y.innerHTML=R.replace(/</g,"\\u003C")}else typeof _=="string"&&(y.innerHTML=_.replace(new RegExp(`</${P}`,"g"),`<\\/${P}`));y._d=Xf(y)}p.push(y)}}return p},invalidate(){for(const c of r.values())i.add(c._i);o.dirty=!0,e.callHook("entries:updated",o)}};return((t==null?void 0:t.plugins)||[]).forEach(c=>Sg(o,c)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(c=>c&&o.push(c)),o}const Mr="%separator",wC=new RegExp(`${Mr}(?:\\s*${Mr})*`,"g");function TC(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function cl(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Mr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Mr||!i.includes(a))return a;const c=TC(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Mr)&&(t=t.slice(0,-Mr.length)),t.startsWith(Mr)&&(t=t.slice(Mr.length)),t=t.replace(wC,n||"").trim()),t}const Rg=t=>t.includes(":key")?t:t.split(":").join(":key:"),IC={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Rg(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Rg(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Zf))}}},AC={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function eh(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>eh(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await eh(t[r]);return n}return t}const SC={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(eh(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},RC={meta:"content",link:"href",htmlAttrs:"lang"},CC=["innerHTML","textContent"],PC=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=cl(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=RC[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=cl(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const c of CC)typeof o[c]=="string"&&(o[c]=cl(o[c],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=cl(n.textContent,t._templateParams,t._separator))}}}),kC=(t,e)=>Je(e)?AA(e):e,bd="usehead";function OC(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(bd,t)}}.install}function NC(){if(Ia()){const t=gt(bd);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function xC(t,e={}){const n=e.head||NC();return n.ssr?n.push(t||{},e):DC(n,t,e)}function DC(t,e,n={}){const r=Jt(!1);let s;return T1(()=>{const o=r.value?{}:nc(e,kC);s?s.patch(o):s=t.push(o,n)}),Vc()&&(Qi(()=>{s.dispose()}),eE(()=>{r.value=!0}),Zv(()=>{r.value=!1})),s}function LC(t){var n;const e=t||JE();return((n=e==null?void 0:e.ssrContext)==null?void 0:n.head)||(e==null?void 0:e.runWithContext(()=>{if(Ia())return gt(bd)}))}function Cg(t,e={}){const n=LC(e.nuxt);if(n)return xC(t,{head:n,...e})}const MC="modulepreload",VC=function(t,e){return new URL(t,e).href},Pg={},Oe=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(f=>{if(f=VC(f,r),f in Pg)return;Pg[f]=!0;const h=f.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let _=a.length-1;_>=0;_--){const P=a[_];if(P.href===f&&(!h||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${p}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":MC,h||(y.as="script"),y.crossOrigin="",y.href=f,u&&y.setAttribute("nonce",u),document.head.appendChild(y),h)return new Promise((_,P)=>{y.addEventListener("load",_),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Sl,Rl;function FC(){return Sl=$fetch(vd(`builds/meta/${qs().app.buildId}.json`),{responseType:"json"}),Sl.then(t=>{Rl=BR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Sl}function Bc(){return Sl||FC()}async function wd(t){const e=typeof t=="string"?t:t.path;if(await Bc(),!Rl)return console.error("[nuxt] Error creating app manifest matcher.",Rl),{};try{return eb({},...Rl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function kg(t,e={}){if(!await cb(t))return null;const r=await jC(t,e);return await lb(r)||null}const UC="_payload.json";async function jC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Tr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=qs(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await cb(t)?i:r.app.baseURL;return Uc(o,n.pathname,UC+(s?`?${s}`:""))}async function lb(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(ub));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function cb(t=jc().path){const e=Be();return t=Li(t),(await Bc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await wd({path:t});return!!r.prerender&&!r.redirect})}let ws=null;async function $C(){var r;if(ws)return ws;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await ub(t.textContent||""),n=t.dataset.src?await lb(t.dataset.src):void 0;return ws={...e,...n,...window.__NUXT__},(r=ws.config)!=null&&r.public&&(ws.config.public=br(ws.config.public)),ws}async function ub(t){return await sC(t,Be()._payloadRevivers)}function BC(t,e){Be()._payloadRevivers[t]=e}const HC=[["NuxtError",t=>Os(t)],["EmptyShallowRef",t=>xs(t==="_"?void 0:t==="0n"?BigInt(0):ia(t))],["EmptyRef",t=>Jt(t==="_"?void 0:t==="0n"?BigInt(0):ia(t))],["ShallowRef",t=>xs(t)],["ShallowReactive",t=>Ln(t)],["Ref",t=>Jt(t)],["Reactive",t=>br(t)]],zC=nn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of HC)BC(r,s);Object.assign(t.payload,([e,n]=wi(()=>t.runWithContext($C)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Td(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var g;const i=new Map,o=new Promise(y=>{t.resolveTags().then(_=>{y(_.map(P=>{const S=i.get(P._d)||0,R={tag:P,id:(S?`${P._d}:${S}`:P._d)||Tg(P),shouldRender:!0};return P._d&&ob(P._d)&&i.set(P._d,S+1),R}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const y of["body","head"]){const _=(g=n[y])==null?void 0:g.children;for(const P of _){const S=P.tagName.toLowerCase();if(!wg.has(S))continue;const R=ab({tag:S,props:{}},{innerHTML:P.innerHTML,...P.getAttributeNames().reduce((v,C)=>(v[C]=P.getAttribute(C),v),{})||{}});if(R.key=P.getAttribute("data-hid")||void 0,R._d=Xf(R)||Tg(R),a.elMap.has(R._d)){let v=1,C=R._d;for(;a.elMap.has(C);)C=`${R._d}:${v++}`;a.elMap.set(C,P)}else a.elMap.set(R._d,P)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(y,_,P){const S=`${y}:${_}`;a.sideEffects[S]=P,delete a.pendingSideEffects[S]}function u({id:y,$el:_,tag:P}){const S=P.tag.endsWith("Attrs");a.elMap.set(y,_),S||(P.textContent&&P.textContent!==_.textContent&&(_.textContent=P.textContent),P.innerHTML&&P.innerHTML!==_.innerHTML&&(_.innerHTML=P.innerHTML),c(y,"el",()=>{_==null||_.remove(),a.elMap.delete(y)}));for(const R in P.props){if(!Object.prototype.hasOwnProperty.call(P.props,R))continue;const v=P.props[R];if(R.startsWith("on")&&typeof v=="function"){const D=_==null?void 0:_.dataset;if(D&&D[`${R}fired`]){const M=R.slice(0,-5);v.call(_,new Event(M.substring(2)))}_.getAttribute(`data-${R}`)!==""&&((P.tag==="bodyAttrs"?n.defaultView:_).addEventListener(R.substring(2),v.bind(_)),_.setAttribute(`data-${R}`,""));continue}const C=`attr:${R}`;if(R==="class"){if(!v)continue;for(const D of v)S&&c(y,`${C}:${D}`,()=>_.classList.remove(D)),!_.classList.contains(D)&&_.classList.add(D)}else if(R==="style"){if(!v)continue;for(const[D,M]of v)c(y,`${C}:${D}`,()=>{_.style.removeProperty(D)}),_.style.setProperty(D,M)}else v!==!1&&v!==null&&(_.getAttribute(R)!==v&&_.setAttribute(R,v===!0?"":String(v)),S&&c(y,C,()=>_.removeAttribute(R)))}}const f=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const y of p){const{tag:_,shouldRender:P,id:S}=y;if(P){if(_.tag==="title"){n.title=_.textContent,c("title","",()=>n.title=a.title);continue}y.$el=y.$el||a.elMap.get(S),y.$el?u(y):wg.has(_.tag)&&f.push(y)}}for(const y of f){const _=y.tag.tagPosition||"head";y.$el=n.createElement(y.tag.tag),u(y),h[_]=h[_]||n.createDocumentFragment(),h[_].appendChild(y.$el)}for(const y of p)await t.hooks.callHook("dom:renderTag",y,n,c);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const y in a.pendingSideEffects)a.pendingSideEffects[y]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function qC(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||Td;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return bC({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function WC(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function KC(t={}){const e=qC({domOptions:{render:WC(()=>Td(e),n=>setTimeout(n,0))},...t});return e.install=OC(e),e}const GC={disableDefaults:!0,disableCapoSorting:!1,plugins:[AC,SC,PC,IC]},YC=nn({name:"nuxt:head",enforce:"pre",setup(t){const e=KC(GC);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Td(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ai=typeof document<"u";function fb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function QC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fb(t.default)}const Ne=Object.assign;function Zu(t,e){const n={};for(const r in e){const s=e[r];n[r]=An(s)?s.map(t):t(s)}return n}const Fo=()=>{},An=Array.isArray,hb=/#/g,JC=/&/g,XC=/\//g,ZC=/=/g,eP=/\?/g,db=/\+/g,tP=/%5B/g,nP=/%5D/g,pb=/%5E/g,rP=/%60/g,mb=/%7B/g,sP=/%7C/g,gb=/%7D/g,iP=/%20/g;function Id(t){return encodeURI(""+t).replace(sP,"|").replace(tP,"[").replace(nP,"]")}function oP(t){return Id(t).replace(mb,"{").replace(gb,"}").replace(pb,"^")}function th(t){return Id(t).replace(db,"%2B").replace(iP,"+").replace(hb,"%23").replace(JC,"%26").replace(rP,"`").replace(mb,"{").replace(gb,"}").replace(pb,"^")}function aP(t){return th(t).replace(ZC,"%3D")}function lP(t){return Id(t).replace(hb,"%23").replace(eP,"%3F")}function cP(t){return t==null?"":lP(t).replace(XC,"%2F")}function oa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const uP=/\/$/,fP=t=>t.replace(uP,"");function ef(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:oa(o)}}function hP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Og(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Mi(e.matched[r],n.matched[s])&&yb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pP(t[n],e[n]))return!1;return!0}function pP(t,e){return An(t)?Ng(t,e):An(e)?Ng(e,t):t===e}function Ng(t,e){return An(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var aa;(function(t){t.pop="pop",t.push="push"})(aa||(aa={}));var Uo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Uo||(Uo={}));function gP(t){if(!t)if(ai){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fP(t)}const yP=/^[^#]+#/;function _P(t,e){return t.replace(yP,"#")+e}function vP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hc=()=>({left:window.scrollX,top:window.scrollY});function EP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xg(t,e){return(history.state?history.state.position-e:-1)+t}const nh=new Map;function bP(t,e){nh.set(t,e)}function wP(t){const e=nh.get(t);return nh.delete(t),e}let TP=()=>location.protocol+"//"+location.host;function _b(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Og(c,"")}return Og(n,t)+r+s}function IP(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=_b(t,location),y=n.value,_=e.value;let P=0;if(p){if(n.value=g,e.value=p,o&&o===y){o=null;return}P=_?p.position-_.position:0}else r(g);s.forEach(S=>{S(n.value,y,{delta:P,type:aa.pop,direction:P?P>0?Uo.forward:Uo.back:Uo.unknown})})};function c(){o=n.value}function u(p){s.push(p);const g=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Ne({},p.state,{scroll:Hc()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Dg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Hc():null}}function AP(t){const{history:e,location:n}=window,r={value:_b(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:TP()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(c,u){const f=Ne({},e.state,Dg(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=Ne({},s.value,e.state,{forward:c,scroll:Hc()});i(f.current,f,!0);const h=Ne({},Dg(r.value,c,null),{position:f.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function SP(t){t=gP(t);const e=AP(t),n=IP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:_P.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function RP(t){return typeof t=="string"||t&&typeof t=="object"}function vb(t){return typeof t=="string"||typeof t=="symbol"}const Eb=Symbol("");var Lg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lg||(Lg={}));function Vi(t,e){return Ne(new Error,{type:t,[Eb]:!0},e)}function tr(t,e){return t instanceof Error&&Eb in t&&(e==null||!!(t.type&e))}const Mg="[^/]+?",CP={sensitive:!1,strict:!1,start:!0,end:!0},PP=/[.+*?^${}()[\]/\\]/g;function kP(t,e){const n=Ne({},CP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(PP,"\\$&"),g+=40;else if(p.type===1){const{value:y,repeatable:_,optional:P,regexp:S}=p;i.push({name:y,repeatable:_,optional:P});const R=S||Mg;if(R!==Mg){g+=10;try{new RegExp(`(${R})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+C.message)}}let v=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(v=P&&u.length<2?`(?:/${v})`:"/"+v),P&&(v+="?"),s+=v,g+=20,P&&(g+=-8),_&&(g+=-20),R===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",y=i[p-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:y,repeatable:_,optional:P}=g,S=y in u?u[y]:"";if(An(S)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=An(S)?S.join("/"):S;if(!R)if(P)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);f+=R}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function OP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=OP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vg(r))return 1;if(Vg(s))return-1}return s.length-r.length}function Vg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NP={type:0,value:""},xP=/[a-zA-Z0-9_]/;function DP(t){if(!t)return[[]];if(t==="/")return[[NP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:xP.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function LP(t,e,n){const r=kP(DP(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function MP(t,e){const n=[],r=new Map;e=$g({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,g){const y=!g,_=Ug(h);_.aliasOf=g&&g.record;const P=$g(e,h),S=[_];if("alias"in h){const C=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of C)S.push(Ug(Ne({},_,{components:g?g.record.components:_.components,path:D,aliasOf:g?g.record:_})))}let R,v;for(const C of S){const{path:D}=C;if(p&&D[0]!=="/"){const M=p.record.path,T=M[M.length-1]==="/"?"":"/";C.path=p.record.path+(D&&T+D)}if(R=LP(C,p,P),g?g.alias.push(R):(v=v||R,v!==R&&v.alias.push(R),y&&h.name&&!jg(R)&&o(h.name)),wb(R)&&c(R),_.children){const M=_.children;for(let T=0;T<M.length;T++)i(M[T],R,g&&g.children[T])}g=g||R}return v?()=>{o(v)}:Fo}function o(h){if(vb(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){const p=UP(h,n);n.splice(p,0,h),h.record.name&&!jg(h)&&r.set(h.record.name,h)}function u(h,p){let g,y={},_,P;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw Vi(1,{location:h});P=g.record.name,y=Ne(Fg(p.params,g.keys.filter(v=>!v.optional).concat(g.parent?g.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),h.params&&Fg(h.params,g.keys.map(v=>v.name))),_=g.stringify(y)}else if(h.path!=null)_=h.path,g=n.find(v=>v.re.test(_)),g&&(y=g.parse(_),P=g.record.name);else{if(g=p.name?r.get(p.name):n.find(v=>v.re.test(p.path)),!g)throw Vi(1,{location:h,currentLocation:p});P=g.record.name,y=Ne({},p.params,h.params),_=g.stringify(y)}const S=[];let R=g;for(;R;)S.unshift(R.record),R=R.parent;return{name:P,path:_,params:y,matched:S,meta:FP(S)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Fg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ug(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:VP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function VP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function jg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FP(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function $g(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function UP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bb(t,e[i])<0?r=i:n=i+1}const s=jP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jP(t){let e=t;for(;e=e.parent;)if(wb(e)&&bb(t,e)===0)return e}function wb({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function $P(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(db," "),o=i.indexOf("="),a=oa(o<0?i:i.slice(0,o)),c=o<0?null:oa(i.slice(o+1));if(a in e){let u=e[a];An(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Bg(t){let e="";for(let n in t){const r=t[n];if(n=aP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(r)?r.map(i=>i&&th(i)):[r&&th(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=An(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const HP=Symbol(""),Hg=Symbol(""),Ad=Symbol(""),Sd=Symbol(""),rh=Symbol("");function bo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Vi(4,{from:n,to:e})):p instanceof Error?c(p):RP(p)?c(Vi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>c(p))})}function tf(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fb(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Vr(f,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=QC(f)?f.default:f;o.mods[a]=f,o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&Vr(g,n,r,o,a,s)()}))}}return i}function zg(t){const e=gt(Ad),n=gt(Sd),r=Ue(()=>{const c=it(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Mi.bind(null,f));if(p>-1)return p;const g=qg(c[u-2]);return u>1&&qg(f)===g&&h[h.length-1].path!==g?h.findIndex(Mi.bind(null,c[u-2])):p}),i=Ue(()=>s.value>-1&&GP(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&yb(n.params,r.value.params));function a(c={}){if(KP(c)){const u=e[it(t.replace)?"replace":"push"](it(t.to)).catch(Fo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function zP(t){return t.length===1?t[0]:t}const qP=Cn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zg,setup(t,{slots:e}){const n=br(zg(t)),{options:r}=gt(Ad),s=Ue(()=>({[Wg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zP(e.default(n));return t.custom?i:ft("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),WP=qP;function KP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!An(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wg=(t,e,n)=>t??e??n,YP=Cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=gt(rh),s=Ue(()=>t.route||r.value),i=gt(Hg,0),o=Ue(()=>{let u=it(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Ue(()=>s.value.matched[o.value]);Gr(Hg,Ue(()=>o.value+1)),Gr(HP,a),Gr(rh,s);const c=Jt();return Un(()=>[c.value,a.value,t.name],([u,f,h],[p,g,y])=>{f&&(f.instances[h]=u,g&&g!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!Mi(f,g)||!p)&&(f.enterCallbacks[h]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return Kg(n.default,{Component:p,route:u});const g=h.props[f],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=ft(p,Ne({},y,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return Kg(n.default,{Component:P,route:u})||P}}});function Kg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Tb=YP;function QP(t){const e=MP(t.routes,t),n=t.parseQuery||$P,r=t.stringifyQuery||Bg,s=t.history,i=bo(),o=bo(),a=bo(),c=xs(cn);let u=cn;ai&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Zu.bind(null,j=>""+j),h=Zu.bind(null,cP),p=Zu.bind(null,oa);function g(j,ee){let X,re;return vb(j)?(X=e.getRecordMatcher(j),re=ee):re=j,e.addRoute(re,X)}function y(j){const ee=e.getRecordMatcher(j);ee&&e.removeRoute(ee)}function _(){return e.getRoutes().map(j=>j.record)}function P(j){return!!e.getRecordMatcher(j)}function S(j,ee){if(ee=Ne({},ee||c.value),typeof j=="string"){const x=ef(n,j,ee.path),V=e.resolve({path:x.path},ee),H=s.createHref(x.fullPath);return Ne(x,V,{params:p(V.params),hash:oa(x.hash),redirectedFrom:void 0,href:H})}let X;if(j.path!=null)X=Ne({},j,{path:ef(n,j.path,ee.path).path});else{const x=Ne({},j.params);for(const V in x)x[V]==null&&delete x[V];X=Ne({},j,{params:h(x)}),ee.params=h(ee.params)}const re=e.resolve(X,ee),Ie=j.hash||"";re.params=f(p(re.params));const Le=hP(r,Ne({},j,{hash:oP(Ie),path:re.path})),k=s.createHref(Le);return Ne({fullPath:Le,hash:Ie,query:r===Bg?BP(j.query):j.query||{}},re,{redirectedFrom:void 0,href:k})}function R(j){return typeof j=="string"?ef(n,j,c.value.path):Ne({},j)}function v(j,ee){if(u!==j)return Vi(8,{from:ee,to:j})}function C(j){return T(j)}function D(j){return C(Ne(R(j),{replace:!0}))}function M(j){const ee=j.matched[j.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(j):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=R(re):{path:re},re.params={}),Ne({query:j.query,hash:j.hash,params:re.path!=null?{}:j.params},re)}}function T(j,ee){const X=u=S(j),re=c.value,Ie=j.state,Le=j.force,k=j.replace===!0,x=M(X);if(x)return T(Ne(R(x),{state:typeof x=="object"?Ne({},Ie,x.state):Ie,force:Le,replace:k}),ee||X);const V=X;V.redirectedFrom=ee;let H;return!Le&&dP(r,re,X)&&(H=Vi(16,{to:V,from:re}),sn(re,re,!0,!1)),(H?Promise.resolve(H):I(V,re)).catch(U=>tr(U)?tr(U,2)?U:gn(U):ne(U,V,re)).then(U=>{if(U){if(tr(U,2))return T(Ne({replace:k},R(U.to),{state:typeof U.to=="object"?Ne({},Ie,U.to.state):Ie,force:Le}),ee||V)}else U=O(V,re,!0,k,Ie);return N(V,re,U),U})}function E(j,ee){const X=v(j,ee);return X?Promise.reject(X):Promise.resolve()}function b(j){const ee=Ar.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(j):j()}function I(j,ee){let X;const[re,Ie,Le]=JP(j,ee);X=tf(re.reverse(),"beforeRouteLeave",j,ee);for(const x of re)x.leaveGuards.forEach(V=>{X.push(Vr(V,j,ee))});const k=E.bind(null,j,ee);return X.push(k),qt(X).then(()=>{X=[];for(const x of i.list())X.push(Vr(x,j,ee));return X.push(k),qt(X)}).then(()=>{X=tf(Ie,"beforeRouteUpdate",j,ee);for(const x of Ie)x.updateGuards.forEach(V=>{X.push(Vr(V,j,ee))});return X.push(k),qt(X)}).then(()=>{X=[];for(const x of Le)if(x.beforeEnter)if(An(x.beforeEnter))for(const V of x.beforeEnter)X.push(Vr(V,j,ee));else X.push(Vr(x.beforeEnter,j,ee));return X.push(k),qt(X)}).then(()=>(j.matched.forEach(x=>x.enterCallbacks={}),X=tf(Le,"beforeRouteEnter",j,ee,b),X.push(k),qt(X))).then(()=>{X=[];for(const x of o.list())X.push(Vr(x,j,ee));return X.push(k),qt(X)}).catch(x=>tr(x,8)?x:Promise.reject(x))}function N(j,ee,X){a.list().forEach(re=>b(()=>re(j,ee,X)))}function O(j,ee,X,re,Ie){const Le=v(j,ee);if(Le)return Le;const k=ee===cn,x=ai?history.state:{};X&&(re||k?s.replace(j.fullPath,Ne({scroll:k&&x&&x.scroll},Ie)):s.push(j.fullPath,Ie)),c.value=j,sn(j,ee,X,k),gn()}let A;function ge(){A||(A=s.listen((j,ee,X)=>{if(!Pn.listening)return;const re=S(j),Ie=M(re);if(Ie){T(Ne(Ie,{replace:!0,force:!0}),re).catch(Fo);return}u=re;const Le=c.value;ai&&bP(xg(Le.fullPath,X.delta),Hc()),I(re,Le).catch(k=>tr(k,12)?k:tr(k,2)?(T(Ne(R(k.to),{force:!0}),re).then(x=>{tr(x,20)&&!X.delta&&X.type===aa.pop&&s.go(-1,!1)}).catch(Fo),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(k,re,Le))).then(k=>{k=k||O(re,Le,!1),k&&(X.delta&&!tr(k,8)?s.go(-X.delta,!1):X.type===aa.pop&&tr(k,20)&&s.go(-1,!1)),N(re,Le,k)}).catch(Fo)}))}let ve=bo(),Z=bo(),se;function ne(j,ee,X){gn(j);const re=Z.list();return re.length?re.forEach(Ie=>Ie(j,ee,X)):console.error(j),Promise.reject(j)}function je(){return se&&c.value!==cn?Promise.resolve():new Promise((j,ee)=>{ve.add([j,ee])})}function gn(j){return se||(se=!j,ge(),ve.list().forEach(([ee,X])=>j?X(j):ee()),ve.reset()),j}function sn(j,ee,X,re){const{scrollBehavior:Ie}=t;if(!ai||!Ie)return Promise.resolve();const Le=!X&&wP(xg(j.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return Kn().then(()=>Ie(j,ee,Le)).then(k=>k&&EP(k)).catch(k=>ne(k,j,ee))}const Ye=j=>s.go(j);let Qe;const Ar=new Set,Pn={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:_,resolve:S,options:t,push:C,replace:D,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:je,install(j){const ee=this;j.component("RouterLink",WP),j.component("RouterView",Tb),j.config.globalProperties.$router=ee,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>it(c)}),ai&&!Qe&&c.value===cn&&(Qe=!0,C(s.location).catch(Ie=>{}));const X={};for(const Ie in cn)Object.defineProperty(X,Ie,{get:()=>c.value[Ie],enumerable:!0});j.provide(Ad,ee),j.provide(Sd,Ln(X)),j.provide(rh,c);const re=j.unmount;Ar.add(j),j.unmount=function(){Ar.delete(j),Ar.size<1&&(u=cn,A&&A(),A=null,c.value=cn,Qe=!1,se=!1),re()}}};function qt(j){return j.reduce((ee,X)=>ee.then(()=>b(X)),Promise.resolve())}return Pn}function JP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Mi(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Mi(u,c))||s.push(c))}return[n,r,s]}function Ib(t){return gt(Sd)}const XP=/(:\w+)\([^)]+\)/g,ZP=/(:\w+)[?+*]/g,ek=/:\w+/g,tk=(t,e)=>e.path.replace(XP,"$1").replace(ZP,"$1").replace(ek,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),sh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&tk(t.route,n));return typeof r=="function"?r(t.route):r},nk=(t,e)=>({default:()=>t?ft(QA,t===!0?{}:t,e):e});function Rd(t){return Array.isArray(t)?t:[t]}const nf=[{name:"Bio",path:"/Bio",component:()=>Oe(()=>import("./DmVNbDEE.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>Oe(()=>import("./BJzVHR0V.js"),__vite__mapDeps([2,3,4]),import.meta.url)},{name:"Login",path:"/Login",component:()=>Oe(()=>import("./DzpfugES.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>Oe(()=>import("./C7-Yea1V.js"),__vite__mapDeps([5,6,7]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>Oe(()=>import("./Bj7Lz1-I.js"),__vite__mapDeps([8,9]),import.meta.url)},{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Oe(()=>import("./B1jKKYOe.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:{middleware:"auth"},component:()=>Oe(()=>import("./BTvi7WRy.js"),__vite__mapDeps([10,3,11]),import.meta.url)},{name:"Admin",path:"/Admin",meta:{middleware:"auth"},component:()=>Oe(()=>import("./aoDXCq-H.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Oe(()=>import("./CKtDAIyv.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Oe(()=>import("./Bp07xqMX.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Oe(()=>import("./BY5bHVi9.js"),[],import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>Oe(()=>import("./DoBXySNH.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Oe(()=>import("./CEaIxQge.js"),[],import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Oe(()=>import("./MFFqIrXD.js"),__vite__mapDeps([16,6,7,17]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Oe(()=>import("./f9ZIOhyk.js"),__vite__mapDeps([18,19,6,7,20]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>Oe(()=>import("./BZx9v75m.js"),__vite__mapDeps([21,22]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Oe(()=>import("./CskFw98b.js"),__vite__mapDeps([23,6,7]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Oe(()=>import("./DiHh460g.js"),__vite__mapDeps([24,6,7,25]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Oe(()=>import("./YCj3yIQk.js"),[],import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Oe(()=>import("./BiQkgQDH.js"),__vite__mapDeps([26,6,7]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Oe(()=>import("./771zHujb.js"),__vite__mapDeps([27,6,7]),import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:{middleware:"auth"},component:()=>Oe(()=>import("./BdjUSpDM.js"),__vite__mapDeps([28,19,11,18,6,7,20,29]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Oe(()=>import("./Dhn-_1p-.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Oe(()=>import("./BBb31ctu.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Oe(()=>import("./6oM05gMr.js"),__vite__mapDeps([30,6,7,31]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Oe(()=>import("./BRt3_UjO.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Oe(()=>import("./PMrG1YyG.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Oe(()=>import("./CWIOXNOS.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Oe(()=>import("./BIvPz9wW.js"),[],import.meta.url)}],Ab=(t,e)=>({default:()=>{var n;return t?ft(eS,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),rk=/(:\w+)\([^)]+\)/g,sk=/(:\w+)[?+*]/g,ik=/:\w+/g;function Gg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(rk,"$1").replace(sk,"$1").replace(ik,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function ok(t,e){return t===e||e===cn?!1:Gg(t)!==Gg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const ak={scrollBehavior(t,e,n){var a;const r=Be(),s=((a=St().options)==null?void 0:a.scrollBehaviorType)??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Sb(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(c=>{if(e===cn){c(Yg(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>c(Yg(t,e,n,s)))})})}};function Sb(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Yg(t,e,n,r){if(n)return n;const s=ok(t,e);return t.hash?{el:t.hash,top:Sb(t.hash),behavior:s?r:"instant"}:{left:0,top:0,behavior:s?r:"instant"}}const lk={hashMode:!1,scrollBehaviorType:"auto"},kn={...lk,...ak},ck=async(t,e)=>{var o;let n,r;if(!((o=t.meta)!=null&&o.validate))return;const s=([n,r]=wi(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=Os({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},uk=async t=>{let e,n;const r=([e,n]=wi(()=>wd({path:t.path})),e=await e,n(),e);if(r.redirect)return Tr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},fk=[ck,uk],jo={auth:()=>Oe(()=>import("./CVsayP2S.js"),[],import.meta.url)};function hk(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),hg(f,"")}const a=hg(r,t),c=!n||eR(a,n)?a:n;return c+(c.includes("?")?"":s)+i}const dk=nn({name:"nuxt:router",enforce:"pre",async setup(t){var P;let e,n,r=qs().app.baseURL;const s=((P=kn.history)==null?void 0:P.call(kn,r))??SP(r),i=kn.routes?([e,n]=wi(()=>kn.routes(nf)),e=await e,n(),e??nf):nf;let o;const a=QP({...kn,scrollBehavior:(S,R,v)=>{if(R===cn){o=v;return}if(kn.scrollBehavior){if(a.options.scrollBehavior=kn.scrollBehavior,"scrollRestoration"in window.history){const C=a.beforeEach(()=>{C(),window.history.scrollRestoration="manual"})}return kn.scrollBehavior(S,cn,o||v)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=xs(a.currentRoute.value);a.afterEach((S,R)=>{c.value=R}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=hk(r,window.location,t.payload.path),f=xs(a.currentRoute.value),h=()=>{f.value=a.currentRoute.value};t.hook("page:finish",h),a.afterEach((S,R)=>{var v,C,D,M;((C=(v=S.matched[0])==null?void 0:v.components)==null?void 0:C.default)===((M=(D=R.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&h()});const p={};for(const S in f.value)Object.defineProperty(p,S,{get:()=>f.value[S],enumerable:!0});t._route=Ln(p),t._middleware||(t._middleware={global:[],named:{}});const g=$c();a.afterEach(async(S,R,v)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(sb),v&&await t.callHook("page:loading:end")});try{[e,n]=wi(()=>a.isReady()),await e,n()}catch(S){[e,n]=wi(()=>t.runWithContext(()=>Is(S))),await e,n()}const y=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;h();const _=t.payload.state._layout;return a.beforeEach(async(S,R)=>{var v;await t.callHook("page:loading:start"),S.meta=br(S.meta),t.isHydrating&&_&&!dr(S.meta.layout)&&(S.meta.layout=_),t._processingMiddleware=!0;{const C=new Set([...fk,...t._middleware.global]);for(const D of S.matched){const M=D.meta.middleware;if(M)for(const T of Rd(M))C.add(T)}{const D=await t.runWithContext(()=>wd({path:S.path}));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?C.add(M):C.delete(M)}for(const D of C){const M=typeof D=="string"?t._middleware.named[D]||await((v=jo[D])==null?void 0:v.call(jo).then(T=>T.default||T)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);try{const T=await t.runWithContext(()=>M(S,R));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const E=T||Os({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Is(E)),!1}if(T===!0)continue;if(T===!1)return T;if(T)return ib(T)&&T.fatal&&await t.runWithContext(()=>Is(T)),T}catch(T){const E=Os(T);return E.fatal&&await t.runWithContext(()=>Is(E)),E}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(S,R)=>{S.matched.length===0&&await t.runWithContext(()=>Is(Os({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in y&&(y.name=void 0),await a.replace({...y,force:!0}),a.options.scrollBehavior=kn.scrollBehavior}catch(S){await t.runWithContext(()=>Is(S))}}),{provide:{router:a}}}}),ih=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),pk=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),zc=t=>{const e=Be();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{ih(()=>t())}):ih(()=>t())},mk=nn({name:"nuxt:payload",setup(t){const e=new Set;St().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await kg(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),zc(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await kg(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Bc,1e3)})}}),gk=nn(()=>{const t=St();zc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),yk=nn(t=>{let e;async function n(){const r=await Bc();e&&clearTimeout(e),e=setTimeout(n,_g);try{const s=await $fetch(vd("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}zc(()=>{e=setTimeout(n,_g)})});function _k(t={}){const e=t.path||window.location.pathname;let n={};try{n=ia(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Be().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const vk=nn({name:"nuxt:chunk-reload",setup(t){const e=St(),n=qs(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=Uc(n.app.baseURL,i.fullPath);_k({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),Ek=nn({name:"nuxt:global-components"}),zr={default:GA(()=>Oe(()=>import("./DiJHZ5iF.js"),__vite__mapDeps([32,19,3,33]),import.meta.url).then(t=>t.default||t))};function bk(t){if(t!=null&&t.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function Rb(t,e=St()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises||(e._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>Rb(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const wk=nn({name:"nuxt:prefetch",setup(t){const e=St();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof zr[r]=="function"&&await zr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Tr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Rd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof jo[o]=="function"&&jo[o]();typeof s=="string"&&s in zr&&bk(zr[s])})}}),Tk=()=>{};var Qg={};/**
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
 */const Cb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ik=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),r.push(n[f],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ik(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Ak;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ak extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sk=function(t){const e=Cb(t);return Pb.encodeByteArray(e,!0)},rc=function(t){return Sk(t).replace(/\./g,"")},kb=function(t){try{return Pb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ck=()=>Rk().__FIREBASE_DEFAULTS__,Pk=()=>{if(typeof process>"u"||typeof Qg>"u")return;const t=Qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kb(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return Tk()||Ck()||Pk()||kk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ob=t=>{var e,n;return(n=(e=qc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Nb=t=>{const e=Ob(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xb=()=>{var t;return(t=qc())==null?void 0:t.config},Db=t=>{var e;return(e=qc())==null?void 0:e[`_${t}`]};/**
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
 */class Ok{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Lb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}const $o={};function Nk(){const t={prod:[],emulator:[]};for(const e of Object.keys($o))$o[e]?t.emulator.push(e):t.prod.push(e);return t}function xk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jg=!1;function Pd(t,e){if(typeof window>"u"||typeof document>"u"||!fs(window.location.host)||$o[t]===e||$o[t]||Jg)return;$o[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=Nk().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Jg=!0,o()},p}function f(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function h(){const p=xk(r),g=n("text"),y=document.getElementById(g)||document.createElement("span"),_=n("learnmore"),P=document.getElementById(_)||document.createElement("a"),S=n("preprendIcon"),R=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const v=p.element;a(v),f(P,_);const C=u();c(R,S),v.append(R,y,P,C),document.body.appendChild(v)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Lk(){var e;const t=(e=qc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uk(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jk(){return!Lk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $k(){try{return typeof indexedDB=="object"}catch{return!1}}function Bk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hk="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hk,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sa.prototype.create)}}class Sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,a,r)}}function zk(t,e){return t.replace(qk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qk=/\{\$([^}]+)}/g;function Wk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xg(i)&&Xg(o)){if(!Ms(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xg(t){return t!==null&&typeof t=="object"}/**
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
 */function Ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kk(t,e){const n=new Gk(t,e);return n.subscribe.bind(n)}class Gk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=rf),s.error===void 0&&(s.error=rf),s.complete===void 0&&(s.complete=rf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rf(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const As="[DEFAULT]";/**
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
 */class Qk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ok;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xk(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jk(t){return t===As?void 0:t}function Xk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const eO={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},tO=Ee.INFO,nO={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},rO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=tO,this._logHandler=rO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const sO=(t,e)=>e.some(n=>t instanceof n);let Zg,ey;function iO(){return Zg||(Zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oO(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mb=new WeakMap,oh=new WeakMap,Vb=new WeakMap,sf=new WeakMap,Od=new WeakMap;function aO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mb.set(n,t)}).catch(()=>{}),Od.set(e,t),e}function lO(t){if(oh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oh.set(t,e)}let ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cO(t){ah=t(ah)}function uO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(of(this),e,...n);return Vb.set(r,e.sort?e.sort():[e]),Yr(r)}:oO().includes(t)?function(...e){return t.apply(of(this),e),Yr(Mb.get(this))}:function(...e){return Yr(t.apply(of(this),e))}}function fO(t){return typeof t=="function"?uO(t):(t instanceof IDBTransaction&&lO(t),sO(t,iO())?new Proxy(t,ah):t)}function Yr(t){if(t instanceof IDBRequest)return aO(t);if(sf.has(t))return sf.get(t);const e=fO(t);return e!==t&&(sf.set(t,e),Od.set(e,t)),e}const of=t=>Od.get(t);function hO(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yr(o.result),c.oldVersion,c.newVersion,Yr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dO=["get","getKey","getAll","getAllKeys","count"],pO=["put","add","delete","clear"],af=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(af.get(e))return af.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dO.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return af.set(e,i),i}cO(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
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
 */class mO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lh="@firebase/app",ny="0.14.0";/**
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
 */const mr=new kd("@firebase/app"),yO="@firebase/app-compat",_O="@firebase/analytics-compat",vO="@firebase/analytics",EO="@firebase/app-check-compat",bO="@firebase/app-check",wO="@firebase/auth",TO="@firebase/auth-compat",IO="@firebase/database",AO="@firebase/data-connect",SO="@firebase/database-compat",RO="@firebase/functions",CO="@firebase/functions-compat",PO="@firebase/installations",kO="@firebase/installations-compat",OO="@firebase/messaging",NO="@firebase/messaging-compat",xO="@firebase/performance",DO="@firebase/performance-compat",LO="@firebase/remote-config",MO="@firebase/remote-config-compat",VO="@firebase/storage",FO="@firebase/storage-compat",UO="@firebase/firestore",jO="@firebase/ai",$O="@firebase/firestore-compat",BO="firebase",HO="12.0.0";/**
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
 */const ch="[DEFAULT]",zO={[lh]:"fire-core",[yO]:"fire-core-compat",[vO]:"fire-analytics",[_O]:"fire-analytics-compat",[bO]:"fire-app-check",[EO]:"fire-app-check-compat",[wO]:"fire-auth",[TO]:"fire-auth-compat",[IO]:"fire-rtdb",[AO]:"fire-data-connect",[SO]:"fire-rtdb-compat",[RO]:"fire-fn",[CO]:"fire-fn-compat",[PO]:"fire-iid",[kO]:"fire-iid-compat",[OO]:"fire-fcm",[NO]:"fire-fcm-compat",[xO]:"fire-perf",[DO]:"fire-perf-compat",[LO]:"fire-rc",[MO]:"fire-rc-compat",[VO]:"fire-gcs",[FO]:"fire-gcs-compat",[UO]:"fire-fst",[$O]:"fire-fst-compat",[jO]:"fire-vertex","fire-js":"fire-js",[BO]:"fire-js-all"};/**
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
 */const sc=new Map,qO=new Map,uh=new Map;function ry(t,e){try{t.container.addComponent(e)}catch(n){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vs(t){const e=t.name;if(uh.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,t);for(const n of sc.values())ry(n,t);for(const n of qO.values())ry(n,t);return!0}function Wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const WO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Sa("app","Firebase",WO);/**
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
 */class KO{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=HO;function Fb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ch,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qr.create("bad-app-name",{appName:String(s)});if(n||(n=xb()),!n)throw Qr.create("no-options");const i=sc.get(s);if(i){if(Ms(n,i.options)&&Ms(r,i.config))return i;throw Qr.create("duplicate-app",{appName:s})}const o=new Zk(s);for(const c of uh.values())o.addComponent(c);const a=new KO(n,r,o);return sc.set(s,a),a}function Nd(t=ch){const e=sc.get(t);if(!e&&t===ch&&xb())return Fb();if(!e)throw Qr.create("no-app",{appName:t});return e}function jn(t,e,n){let r=zO[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(o.join(" "));return}Vs(new ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const GO="firebase-heartbeat-database",YO=1,la="firebase-heartbeat-store";let lf=null;function Ub(){return lf||(lf=hO(GO,YO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),lf}async function QO(t){try{const n=(await Ub()).transaction(la),r=await n.objectStore(la).get(jb(t));return await n.done,r}catch(e){if(e instanceof Qn)mr.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(n.message)}}}async function sy(t,e){try{const r=(await Ub()).transaction(la,"readwrite");await r.objectStore(la).put(e,jb(t)),await r.done}catch(n){if(n instanceof Qn)mr.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function jb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JO=1024,XO=30;class ZO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=iy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>XO){const o=n2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iy(),{heartbeatsToSend:r,unsentEntries:s}=e2(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mr.warn(n),""}}}function iy(){return new Date().toISOString().substring(0,10)}function e2(t,e=JO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class t2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $k()?Bk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function oy(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}function n2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function r2(t){Vs(new ts("platform-logger",e=>new mO(e),"PRIVATE")),Vs(new ts("heartbeat",e=>new ZO(e),"PRIVATE")),jn(lh,ny,t),jn(lh,ny,"esm2020"),jn("fire-js","")}r2("");var s2="firebase",i2="12.0.0";/**
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
 */jn(s2,i2,"app");function $b(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o2=$b,Bb=new Sa("auth","Firebase",$b());/**
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
 */const ic=new kd("@firebase/auth");function a2(t,...e){ic.logLevel<=Ee.WARN&&ic.warn(`Auth (${Ws}): ${t}`,...e)}function Cl(t,...e){ic.logLevel<=Ee.ERROR&&ic.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function Sn(t,...e){throw xd(t,...e)}function $n(t,...e){return xd(t,...e)}function Hb(t,e,n){const r={...o2(),[e]:n};return new Sa("auth","Firebase",r).create(e,{appName:t.name})}function Jr(t){return Hb(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bb.create(t,...e)}function de(t,e,...n){if(!t)throw xd(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cl(e),new Error(e)}function gr(t,e){t||ar(e)}/**
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
 */function fh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function l2(){return ay()==="http:"||ay()==="https:"}function ay(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function c2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l2()||Vk()||"connection"in navigator)?navigator.onLine:!0}function u2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,gr(n>e,"Short delay should be less than long delay!"),this.isMobile=Dk()||Fk()}get(){return c2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dd(t,e){gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const h2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d2=new Ca(3e4,6e4);function Ks(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hs(t,e,n,r,s={}){return qb(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ra({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return Mk()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&fs(t.emulatorConfig.host)&&(u.credentials="include"),zb.fetch()(await Wb(t,t.config.apiHost,n,a),u)})}async function qb(t,e,n){t._canInitEmulator=!1;const r={...f2,...e};try{const s=new m2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ul(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ul(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ul(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ul(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hb(t,f,u);Sn(t,f)}}catch(s){if(s instanceof Qn)throw s;Sn(t,"network-request-failed",{message:String(s)})}}async function Kc(t,e,n,r,s={}){const i=await hs(t,e,n,r,s);return"mfaPendingCredential"in i&&Sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wb(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Dd(t.config,s):`${t.config.apiScheme}://${s}`;return h2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function p2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class m2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),d2.get())})}}function ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$n(t,e,r);return s.customData._tokenResponse=n,s}function ly(t){return t!==void 0&&t.enterprise!==void 0}class g2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return p2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function y2(t,e){return hs(t,"GET","/v2/recaptchaConfig",Ks(t,e))}/**
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
 */async function _2(t,e){return hs(t,"POST","/v1/accounts:delete",e)}async function oc(t,e){return hs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v2(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=Ld(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bo(cf(s.auth_time)),issuedAtTime:Bo(cf(s.iat)),expirationTime:Bo(cf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cf(t){return Number(t)*1e3}function Ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cl("JWT malformed, contained fewer than 3 sections"),null;try{const s=kb(n);return s?JSON.parse(s):(Cl("Failed to decode base64 JWT payload"),null)}catch(s){return Cl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cy(t){const e=Ld(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&E2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function E2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class b2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bo(this.lastLoginAt),this.creationTime=Bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ac(t){var h;const e=t.auth,n=await t.getIdToken(),r=await ca(t,oc(e,{idToken:n}));de(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(h=s.providerUserInfo)!=null&&h.length?Kb(s.providerUserInfo):[],o=T2(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hh(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function w2(t){const e=et(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kb(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function I2(t,e){const n=await qb(t,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Wb(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&fs(t.emulatorConfig.host)&&(c.credentials="include"),zb.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function A2(t,e){return hs(t,"POST","/v2/accounts:revokeToken",Ks(t,e))}/**
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
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=cy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await I2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ti;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
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
 */function Or(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new b2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v2(this,e)}reload(){return w2(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Jr(this.auth));const e=await this.getIdToken();return await ca(this,_2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:g,providerData:y,stsTokenManager:_}=n;de(h&&_,e,"internal-error");const P=Ti.fromJSON(this.name,_);de(typeof h=="string",e,"internal-error"),Or(r,e.name),Or(s,e.name),de(typeof p=="boolean",e,"internal-error"),de(typeof g=="boolean",e,"internal-error"),Or(i,e.name),Or(o,e.name),Or(a,e.name),Or(c,e.name),Or(u,e.name),Or(f,e.name);const S=new En({uid:h,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:P,createdAt:u,lastLoginAt:f});return y&&Array.isArray(y)&&(S.providerData=y.map(R=>({...R}))),c&&(S._redirectEventId=c),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ti;s.updateFromServerResponse(n);const i=new En({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ac(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kb(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ti;a.updateFromIdToken(r);const c=new En({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const uy=new Map;function lr(t){gr(t instanceof Function,"Expected a class definition");let e=uy.get(t);return e?(gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uy.set(t,e),e)}/**
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
 */class Gb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gb.type="NONE";const fy=Gb;/**
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
 */function Pl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await oc(this.auth,{idToken:e}).catch(()=>{});return n?En._fromGetAccountInfoResponse(this.auth,n,e):null}return En._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ii(lr(fy),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||lr(fy);const o=Pl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const p=await oc(e,{idToken:f}).catch(()=>{});if(!p)break;h=await En._fromGetAccountInfoResponse(e,p,f)}else h=En._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ii(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ii(i,e,r))}}/**
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
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ew(e))return"Blackberry";if(tw(e))return"Webos";if(Qb(e))return"Safari";if((e.includes("chrome/")||Jb(e))&&!e.includes("edge/"))return"Chrome";if(Zb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yb(t=Vt()){return/firefox\//i.test(t)}function Qb(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jb(t=Vt()){return/crios\//i.test(t)}function Xb(t=Vt()){return/iemobile/i.test(t)}function Zb(t=Vt()){return/android/i.test(t)}function ew(t=Vt()){return/blackberry/i.test(t)}function tw(t=Vt()){return/webos/i.test(t)}function Md(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function S2(t=Vt()){var e;return Md(t)&&!!((e=window.navigator)!=null&&e.standalone)}function R2(){return Uk()&&document.documentMode===10}function nw(t=Vt()){return Md(t)||Zb(t)||tw(t)||ew(t)||/windows phone/i.test(t)||Xb(t)}/**
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
 */function rw(t,e=[]){let n;switch(t){case"Browser":n=hy(Vt());break;case"Worker":n=`${hy(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class C2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function P2(t,e={}){return hs(t,"GET","/v2/passwordPolicy",Ks(t,e))}/**
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
 */const k2=6;class O2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??k2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class N2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dy(this),this.idTokenSubscription=new dy(this),this.beforeStateQueue=new C2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oc(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=u2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Jr(this));const n=e?et(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P2(this),n=new O2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await A2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&a2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ji(t){return et(t)}class dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x2(t){Gc=t}function sw(t){return Gc.loadJS(t)}function D2(){return Gc.recaptchaEnterpriseScript}function L2(){return Gc.gapiScript}function M2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class V2{constructor(){this.enterprise=new F2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class F2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const U2="recaptcha-enterprise",iw="NO_RECAPTCHA";class j2{constructor(e){this.type=U2,this.auth=Ji(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{y2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new g2(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ly(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(iw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new V2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ly(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=D2();c.length!==0&&(c+=a),sw(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function py(t,e,n,r=!1,s=!1){const i=new j2(t);let o;if(s)o=iw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function my(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await py(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await py(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function $2(t,e){const n=Wc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ms(i,e??{}))return s;Sn(s,"already-initialized")}return n.initialize({options:e})}function B2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H2(t,e,n){const r=Ji(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ow(e),{host:o,port:a}=z2(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Ms(u,r.config.emulator)&&Ms(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,fs(o)?(Cd(`${i}//${o}${c}`),Pd("Auth",!0)):q2()}function ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function z2(t){const e=ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gy(o)}}}function gy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function q2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}async function W2(t,e){return hs(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function K2(t,e){return Kc(t,"POST","/v1/accounts:signInWithPassword",Ks(t,e))}/**
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
 */async function G2(t,e){return Kc(t,"POST","/v1/accounts:signInWithEmailLink",Ks(t,e))}async function Y2(t,e){return Kc(t,"POST","/v1/accounts:signInWithEmailLink",Ks(t,e))}/**
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
 */class ua extends Vd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return my(e,n,"signInWithPassword",K2);case"emailLink":return G2(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return my(e,r,"signUpPassword",W2);case"emailLink":return Y2(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ai(t,e){return Kc(t,"POST","/v1/accounts:signInWithIdp",Ks(t,e))}/**
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
 */const Q2="http://localhost";class Fs extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Fs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:Q2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ra(n)}return e}}/**
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
 */function J2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X2(t){const e=Ao(So(t)).link,n=e?Ao(So(e)).deep_link_id:null,r=Ao(So(t)).deep_link_id;return(r?Ao(So(r)).link:null)||r||n||e||t}class Fd{constructor(e){const n=Ao(So(e)),r=n.apiKey??null,s=n.oobCode??null,i=J2(n.mode??null);de(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=X2(e);try{return new Fd(n)}catch{return null}}}/**
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
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fd.parseLink(n);return de(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class aw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends aw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ur extends Pa{constructor(){super("facebook.com")}static credential(e){return Fs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
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
 */class jr extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.GOOGLE_SIGN_IN_METHOD="google.com";jr.PROVIDER_ID="google.com";/**
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
 */class $r extends Pa{constructor(){super("github.com")}static credential(e){return Fs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Br extends Pa{constructor(){super("twitter.com")}static credential(e,n){return Fs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
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
 */class Fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await En._fromIdTokenResponse(e,r,s),o=yy(r);return new Fi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yy(r);return new Fi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lc extends Qn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lc(e,n,r,s)}}function lw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(t,i,e,r):i})}async function Z2(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fi._forOperation(t,"link",r)}/**
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
 */async function eN(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(Jr(r));const s="reauthenticate";try{const i=await ca(t,lw(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Ld(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Fi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),i}}/**
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
 */async function cw(t,e,n=!1){if(fn(t.app))return Promise.reject(Jr(t));const r="signIn",s=await lw(t,r,e),i=await Fi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function tN(t,e){return cw(Ji(t),e)}/**
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
 */async function nN(t){const e=Ji(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function rN(t,e,n){return fn(t.app)?Promise.reject(Jr(t)):tN(et(t),Xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nN(t),r})}function sN(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function iN(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function oN(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function aN(t){return et(t).signOut()}const cc="__sak";/**
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
 */class uw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lN=1e3,cN=10;class fw extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);R2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fw.type="LOCAL";const uN=fw;/**
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
 */class hw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hw.type="SESSION";const dw=hw;/**
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
 */function fN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await fN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
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
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ud("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bn(){return window}function dN(t){Bn().location.href=t}/**
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
 */function pw(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function pN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function gN(){return pw()?self:null}/**
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
 */const mw="firebaseLocalStorageDb",yN=1,uc="firebaseLocalStorage",gw="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qc(t,e){return t.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function _N(){const t=indexedDB.deleteDatabase(mw);return new ka(t).toPromise()}function dh(){const t=indexedDB.open(mw,yN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uc,{keyPath:gw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uc)?e(r):(r.close(),await _N(),e(await dh()))})})}async function _y(t,e,n){const r=Qc(t,!0).put({[gw]:e,value:n});return new ka(r).toPromise()}async function vN(t,e){const n=Qc(t,!1).get(e),r=await new ka(n).toPromise();return r===void 0?null:r.value}function vy(t,e){const n=Qc(t,!0).delete(e);return new ka(n).toPromise()}const EN=800,bN=3;class yw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(gN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await pN(),!this.activeServiceWorker)return;this.sender=new hN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dh();return await _y(e,cc,"1"),await vy(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_y(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qc(s,!1).getAll();return new ka(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yw.type="LOCAL";const wN=yw;new Ca(3e4,6e4);/**
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
 */function TN(t,e){return e?lr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jd extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IN(t){return cw(t.auth,new jd(t),t.bypassAuthState)}function AN(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),eN(n,new jd(t),t.bypassAuthState)}async function SN(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Z2(n,new jd(t),t.bypassAuthState)}/**
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
 */class _w{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IN;case"linkViaPopup":case"linkViaRedirect":return SN;case"reauthViaPopup":case"reauthViaRedirect":return AN;default:Sn(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RN=new Ca(2e3,1e4);class di extends _w{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RN.get())};e()}}di.currentPopupAction=null;/**
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
 */const CN="pendingRedirect",kl=new Map;class PN extends _w{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kl.get(this.auth._key());if(!e){try{const r=await kN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kl.set(this.auth._key(),e)}return this.bypassAuthState||kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kN(t,e){const n=xN(e),r=NN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ON(t,e){kl.set(t._key(),e)}function NN(t){return lr(t._redirectPersistence)}function xN(t){return Pl(CN,t.config.apiKey,t.name)}async function DN(t,e,n=!1){if(fn(t.app))return Promise.reject(Jr(t));const r=Ji(t),s=TN(r,e),o=await new PN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LN=10*60*1e3;class MN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ey(e))}saveEventToCache(e){this.cachedEventUids.add(Ey(e)),this.lastProcessedEventTime=Date.now()}}function Ey(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vw(t);default:return!1}}/**
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
 */async function FN(t,e={}){return hs(t,"GET","/v1/projects",e)}/**
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
 */const UN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jN=/^https?/;async function $N(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FN(t);for(const n of e)try{if(BN(n))return}catch{}Sn(t,"unauthorized-domain")}function BN(t){const e=fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jN.test(n))return!1;if(UN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const HN=new Ca(3e4,6e4);function by(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zN(t){return new Promise((e,n)=>{var s,i,o;function r(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),n($n(t,"network-request-failed"))},timeout:HN.get()})}if((i=(s=Bn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Bn().gapi)!=null&&o.load)r();else{const a=M2("iframefcb");return Bn()[a]=()=>{gapi.load?r():n($n(t,"network-request-failed"))},sw(`${L2()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function qN(t){return Ol=Ol||zN(t),Ol}/**
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
 */const WN=new Ca(5e3,15e3),KN="__/auth/iframe",GN="emulator/auth/iframe",YN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,GN):`https://${t.config.authDomain}/${KN}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},s=QN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ra(r).slice(1)}`}async function XN(t){const e=await qN(t),n=Bn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:JN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=Bn().setTimeout(()=>{i(o)},WN.get());function c(){Bn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ZN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ex=500,tx=600,nx="_blank",rx="http://localhost";class wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sx(t,e,n,r=ex,s=tx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...ZN,width:r.toString(),height:s.toString(),top:i,left:o},u=Vt().toLowerCase();n&&(a=Jb(u)?nx:n),Yb(u)&&(e=e||rx,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(S2(u)&&a!=="_self")return ix(e||"",a),new wy(null);const h=window.open(e||"",a,f);de(h,t,"popup-blocked");try{h.focus()}catch{}return new wy(h)}function ix(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ox="__/auth/handler",ax="emulator/auth/handler",lx=encodeURIComponent("fac");async function Ty(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:s};if(e instanceof aw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Pa){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${lx}=${encodeURIComponent(c)}`:"";return`${cx(t)}?${Ra(a).slice(1)}${u}`}function cx({config:t}){return t.emulator?Dd(t,ax):`https://${t.authDomain}/${ox}`}/**
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
 */const uf="webStorageSupport";class ux{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dw,this._completeRedirectFn=DN,this._overrideRedirectResult=ON}async _openPopup(e,n,r,s){var o;gr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ty(e,n,r,fh(),s);return sx(e,i,Ud())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ty(e,n,r,fh(),s);return dN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XN(e),r=new MN(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uf,{type:uf},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[uf];i!==void 0&&n(!!i),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$N(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nw()||Qb()||Md()}}const fx=ux;var Iy="@firebase/auth",Ay="1.11.0";/**
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
 */class hx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function px(t){Vs(new ts("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rw(t)},u=new N2(r,s,i,c);return B2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vs(new ts("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(r=>new hx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Iy,Ay,dx(t)),jn(Iy,Ay,"esm2020")}/**
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
 */const mx=5*60,gx=Db("authIdTokenMaxAge")||mx;let Sy=null;const yx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gx)return;const s=n==null?void 0:n.token;Sy!==s&&(Sy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _x(t=Nd()){const e=Wc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$2(t,{popupRedirectResolver:fx,persistence:[wN,uN,dw]}),r=Db("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=yx(i.toString());iN(n,o,()=>o(n.currentUser)),sN(n,a=>o(a))}}const s=Ob("auth");return s&&H2(n,`http://${s}`),n}function vx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}x2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});px("Browser");function Ry(t){return typeof t=="string"?`'${t}'`:new Ex().serialize(t)}const Ex=function(){var e;class t{constructor(){Sm(this,e,new Map)}compare(r,s){const i=typeof r,o=typeof s;return i==="string"&&o==="string"?r.localeCompare(s):i==="number"&&o==="number"?r-s:String.prototype.localeCompare.call(this.serialize(r,!0),this.serialize(s,!0))}serialize(r,s){if(r===null)return"null";switch(typeof r){case"string":return s?r:`'${r}'`;case"bigint":return`${r}n`;case"object":return this.$object(r);case"function":return this.$function(r)}return String(r)}serializeObject(r){const s=Object.prototype.toString.call(r);if(s!=="[object Object]")return this.serializeBuiltInType(s.length<10?`unknown:${s}`:s.slice(8,-1),r);const i=r.constructor,o=i===Object||i===void 0?"":i.name;if(o!==""&&globalThis[o]===i)return this.serializeBuiltInType(o,r);if(typeof r.toJSON=="function"){const a=r.toJSON();return o+(a!==null&&typeof a=="object"?this.$object(a):`(${this.serialize(a)})`)}return this.serializeObjectEntries(o,Object.entries(r))}serializeBuiltInType(r,s){const i=this["$"+r];if(i)return i.call(this,s);if(typeof(s==null?void 0:s.entries)=="function")return this.serializeObjectEntries(r,s.entries());throw new Error(`Cannot serialize ${r}`)}serializeObjectEntries(r,s){const i=Array.from(s).sort((a,c)=>this.compare(a[0],c[0]));let o=`${r}{`;for(let a=0;a<i.length;a++){const[c,u]=i[a];o+=`${this.serialize(c,!0)}:${this.serialize(u)}`,a<i.length-1&&(o+=",")}return o+"}"}$object(r){let s=yo(this,e).get(r);return s===void 0&&(yo(this,e).set(r,`#${yo(this,e).size}`),s=this.serializeObject(r),yo(this,e).set(r,s)),s}$function(r){const s=Function.prototype.toString.call(r);return s.slice(-15)==="[native code] }"?`${r.name||""}()[native]`:`${r.name}(${r.length})${s.replace(/\s*\n\s*/g,"")}`}$Array(r){let s="[";for(let i=0;i<r.length;i++)s+=this.serialize(r[i]),i<r.length-1&&(s+=",");return s+"]"}$Date(r){try{return`Date(${r.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(r){return`ArrayBuffer[${new Uint8Array(r).join(",")}]`}$Set(r){return`Set${this.$Array(Array.from(r).sort((s,i)=>this.compare(s,i)))}`}$Map(r){return this.serializeObjectEntries("Map",r.entries())}}e=new WeakMap;for(const n of["Error","RegExp","URL"])t.prototype["$"+n]=function(r){return`${n}(${r})`};for(const n of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join(",")}]`};for(const n of["BigInt64Array","BigUint64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join("n,")}${r.length>0?"n":""}]`};return t}();function bx(t,e){return t===e||Ry(t)===Ry(e)}function wx(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||Tx;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const c=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(c))){i=a+1;continue}if(n[c]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[c]=Ix(u,s)}i=a+1}return n}function Tx(t){return t.includes("%")?decodeURIComponent(t):t}function Ix(t,e){try{return e(t)}catch{return t}}const fl=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Cy(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!fl.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!fl.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!fl.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!fl.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!Ax(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function Ax(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function _n(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=_n(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:_n(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=_n(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=_n(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(_n(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(_n(i),_n(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(_n(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const Sx={path:"/",watch:!0,decode:t=>ia(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},hl=window.cookieStore;function Rx(t,e){var u;const n={...Sx,...e};n.filter??(n.filter=f=>f===t);const r=Py(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=_n(i?void 0:r[t]??((u=n.default)==null?void 0:u.call(n))),c=s&&!i?kx(a,s,n.watch&&n.watch!=="shallow"):Jt(a);{let f=null;try{!hl&&typeof BroadcastChannel<"u"&&(f=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=(_=!1)=>{!_&&(n.readonly||bx(c.value,r[t]))||(Px(t,c.value,n),r[t]=_n(c.value),f==null||f.postMessage({value:n.encode(c.value)}))},p=_=>{var S;const P=_.refresh?(S=Py(n))==null?void 0:S[t]:n.decode(_.value);g=!0,c.value=P,r[t]=_n(P),Kn(()=>{g=!1})};let g=!1;const y=!!ba();if(y&&Bl(()=>{g=!0,h(),f==null||f.close()}),hl){const _=P=>{const S=P.changed.find(v=>v.name===t),R=P.deleted.find(v=>v.name===t);S&&p({value:S.value}),R&&p({value:null})};hl.addEventListener("change",_),y&&Bl(()=>hl.removeEventListener("change",_))}else f&&(f.onmessage=({data:_})=>p(_));n.watch&&Un(c,()=>{g||h()},{deep:n.watch!=="shallow"}),o&&h(o)}return c}function Py(t={}){return wx(document.cookie,t)}function Cx(t,e,n={}){return e==null?Cy(t,e,{...n,maxAge:-1}):Cy(t,e,n)}function Px(t,e,n={}){document.cookie=Cx(t,e,n)}const ky=2147483647;function kx(t,e,n){let r,s,i=0;const o=n?Jt(t):{value:t};return ba()&&Bl(()=>{s==null||s(),clearTimeout(r)}),CA((a,c)=>{n&&(s=Un(o,c));function u(){i=0,clearTimeout(r);const f=e-i,h=f<ky?f:ky;r=setTimeout(()=>{if(i+=h,i<e)return u();o.value=void 0,c()},h)}return{get(){return a(),o.value},set(f){u(),o.value=f,c()}}})}const Ox=(...t)=>t.find(e=>e!==void 0);function Nx(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const c=a??t.trailingSlash;if(!i||c!=="append"&&c!=="remove")return i;if(typeof i=="string")return dl(i,c);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:dl(u,c)}}function s(i){const o=St(),a=qs(),c=Ue(()=>!!i.target&&i.target!=="_self"),u=Ue(()=>{const P=i.to||i.href||"";return typeof P=="string"&&Tr(P,{acceptRelative:!0})}),f=ea("RouterLink"),h=f&&typeof f!="string"?f.useLink:void 0,p=Ue(()=>{if(i.external)return!0;const P=i.to||i.href||"";return typeof P=="object"?!1:P===""||u.value}),g=Ue(()=>{const P=i.to||i.href||"";return p.value?P:r(P,o.resolve,i.trailingSlash)}),y=p.value||h==null?void 0:h({...i,to:g}),_=Ue(()=>{var S;const P=i.trailingSlash??t.trailingSlash;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const R=typeof g.value=="object"&&"path"in g.value?Jf(g.value):g.value,v=typeof R=="object"?o.resolve(R).href:R;return dl(v,P)}return typeof g.value=="object"?((S=o.resolve(g.value))==null?void 0:S.href)??null:dl(Uc(a.app.baseURL,g.value),P)});return{to:g,hasTarget:c,isAbsoluteUrl:u,isExternal:p,href:_,isActive:(y==null?void 0:y.isActive)??Ue(()=>g.value===o.currentRoute.value.path),isExactActive:(y==null?void 0:y.isExactActive)??Ue(()=>g.value===o.currentRoute.value.path),route:(y==null?void 0:y.route)??Ue(()=>o.resolve(g.value)),async navigate(P){await YR(_.value,{replace:i.replace,external:p.value||c.value})}}}return Cn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=St(),{to:c,href:u,navigate:f,isExternal:h,hasTarget:p,isAbsoluteUrl:g}=s(i),y=xs(!1),_=Jt(null),P=v=>{var C;_.value=i.custom?(C=v==null?void 0:v.$el)==null?void 0:C.nextElementSibling:v==null?void 0:v.$el};function S(v){var C,D;return!y.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===v:((C=i.prefetchOn)==null?void 0:C[v])??((D=t.prefetchOn)==null?void 0:D[v]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!Mx()}async function R(v=Be()){if(y.value)return;y.value=!0;const C=typeof c.value=="string"?c.value:h.value?Jf(c.value):a.resolve(c.value).fullPath,D=h.value?new URL(C,window.location.href).href:C;await Promise.all([v.hooks.callHook("link:prefetch",D).catch(()=>{}),!h.value&&!p.value&&Rb(c.value,a).catch(()=>{})])}if(S("visibility")){const v=Be();let C,D=null;Dc(()=>{const M=Dx();zc(()=>{C=ih(()=>{var T;(T=_==null?void 0:_.value)!=null&&T.tagName&&(D=M.observe(_.value,async()=>{D==null||D(),D=null,await R(v)}))})})}),Qi(()=>{C&&pk(C),D==null||D(),D=null})}return()=>{var D;if(!h.value&&!p.value&&!n(c.value)){const M={ref:P,to:c.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(S("interaction")&&(M.onPointerenter=R.bind(null,void 0),M.onFocus=R.bind(null,void 0)),y.value&&(M.class=i.prefetchedClass||t.prefetchedClass),M.rel=i.rel||void 0),ft(ea("RouterLink"),M,o.default)}const v=i.target||null,C=Ox(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:R,get route(){if(!u.value)return;const M=new URL(u.value,window.location.href);return{path:M.pathname,fullPath:M.pathname,get query(){return yd(M.search)},hash:M.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:C,target:v,isExternal:h.value||p.value,isActive:!1,isExactActive:!1}):null:ft("a",{ref:_,href:u.value||null,rel:C,target:v,onClick:M=>{if(!(h.value||p.value))return M.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},(D=o.default)==null?void 0:D.call(o))}}})}const xx=Nx(NR);function dl(t,e){const n=e==="append"?jE:Li;return Tr(t)&&!t.startsWith("http")?t:n(t,!0)}function Dx(){const t=Be();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const c of a){const u=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const Lx=/2g/;function Mx(){const t=navigator.connection;return!!(t&&(t.saveData||Lx.test(t.effectiveType)))}var Oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,Ew;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function b(){}b.prototype=E.prototype,T.D=E.prototype,T.prototype=new b,T.prototype.constructor=T,T.C=function(I,N,O){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return E.prototype[N].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,E,b){b||(b=0);var I=Array(16);if(typeof E=="string")for(var N=0;16>N;++N)I[N]=E.charCodeAt(b++)|E.charCodeAt(b++)<<8|E.charCodeAt(b++)<<16|E.charCodeAt(b++)<<24;else for(N=0;16>N;++N)I[N]=E[b++]|E[b++]<<8|E[b++]<<16|E[b++]<<24;E=T.g[0],b=T.g[1],N=T.g[2];var O=T.g[3],A=E+(O^b&(N^O))+I[0]+3614090360&4294967295;E=b+(A<<7&4294967295|A>>>25),A=O+(N^E&(b^N))+I[1]+3905402710&4294967295,O=E+(A<<12&4294967295|A>>>20),A=N+(b^O&(E^b))+I[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=b+(E^N&(O^E))+I[3]+3250441966&4294967295,b=N+(A<<22&4294967295|A>>>10),A=E+(O^b&(N^O))+I[4]+4118548399&4294967295,E=b+(A<<7&4294967295|A>>>25),A=O+(N^E&(b^N))+I[5]+1200080426&4294967295,O=E+(A<<12&4294967295|A>>>20),A=N+(b^O&(E^b))+I[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=b+(E^N&(O^E))+I[7]+4249261313&4294967295,b=N+(A<<22&4294967295|A>>>10),A=E+(O^b&(N^O))+I[8]+1770035416&4294967295,E=b+(A<<7&4294967295|A>>>25),A=O+(N^E&(b^N))+I[9]+2336552879&4294967295,O=E+(A<<12&4294967295|A>>>20),A=N+(b^O&(E^b))+I[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=b+(E^N&(O^E))+I[11]+2304563134&4294967295,b=N+(A<<22&4294967295|A>>>10),A=E+(O^b&(N^O))+I[12]+1804603682&4294967295,E=b+(A<<7&4294967295|A>>>25),A=O+(N^E&(b^N))+I[13]+4254626195&4294967295,O=E+(A<<12&4294967295|A>>>20),A=N+(b^O&(E^b))+I[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=b+(E^N&(O^E))+I[15]+1236535329&4294967295,b=N+(A<<22&4294967295|A>>>10),A=E+(N^O&(b^N))+I[1]+4129170786&4294967295,E=b+(A<<5&4294967295|A>>>27),A=O+(b^N&(E^b))+I[6]+3225465664&4294967295,O=E+(A<<9&4294967295|A>>>23),A=N+(E^b&(O^E))+I[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=b+(O^E&(N^O))+I[0]+3921069994&4294967295,b=N+(A<<20&4294967295|A>>>12),A=E+(N^O&(b^N))+I[5]+3593408605&4294967295,E=b+(A<<5&4294967295|A>>>27),A=O+(b^N&(E^b))+I[10]+38016083&4294967295,O=E+(A<<9&4294967295|A>>>23),A=N+(E^b&(O^E))+I[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=b+(O^E&(N^O))+I[4]+3889429448&4294967295,b=N+(A<<20&4294967295|A>>>12),A=E+(N^O&(b^N))+I[9]+568446438&4294967295,E=b+(A<<5&4294967295|A>>>27),A=O+(b^N&(E^b))+I[14]+3275163606&4294967295,O=E+(A<<9&4294967295|A>>>23),A=N+(E^b&(O^E))+I[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=b+(O^E&(N^O))+I[8]+1163531501&4294967295,b=N+(A<<20&4294967295|A>>>12),A=E+(N^O&(b^N))+I[13]+2850285829&4294967295,E=b+(A<<5&4294967295|A>>>27),A=O+(b^N&(E^b))+I[2]+4243563512&4294967295,O=E+(A<<9&4294967295|A>>>23),A=N+(E^b&(O^E))+I[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=b+(O^E&(N^O))+I[12]+2368359562&4294967295,b=N+(A<<20&4294967295|A>>>12),A=E+(b^N^O)+I[5]+4294588738&4294967295,E=b+(A<<4&4294967295|A>>>28),A=O+(E^b^N)+I[8]+2272392833&4294967295,O=E+(A<<11&4294967295|A>>>21),A=N+(O^E^b)+I[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=b+(N^O^E)+I[14]+4259657740&4294967295,b=N+(A<<23&4294967295|A>>>9),A=E+(b^N^O)+I[1]+2763975236&4294967295,E=b+(A<<4&4294967295|A>>>28),A=O+(E^b^N)+I[4]+1272893353&4294967295,O=E+(A<<11&4294967295|A>>>21),A=N+(O^E^b)+I[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=b+(N^O^E)+I[10]+3200236656&4294967295,b=N+(A<<23&4294967295|A>>>9),A=E+(b^N^O)+I[13]+681279174&4294967295,E=b+(A<<4&4294967295|A>>>28),A=O+(E^b^N)+I[0]+3936430074&4294967295,O=E+(A<<11&4294967295|A>>>21),A=N+(O^E^b)+I[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=b+(N^O^E)+I[6]+76029189&4294967295,b=N+(A<<23&4294967295|A>>>9),A=E+(b^N^O)+I[9]+3654602809&4294967295,E=b+(A<<4&4294967295|A>>>28),A=O+(E^b^N)+I[12]+3873151461&4294967295,O=E+(A<<11&4294967295|A>>>21),A=N+(O^E^b)+I[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=b+(N^O^E)+I[2]+3299628645&4294967295,b=N+(A<<23&4294967295|A>>>9),A=E+(N^(b|~O))+I[0]+4096336452&4294967295,E=b+(A<<6&4294967295|A>>>26),A=O+(b^(E|~N))+I[7]+1126891415&4294967295,O=E+(A<<10&4294967295|A>>>22),A=N+(E^(O|~b))+I[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=b+(O^(N|~E))+I[5]+4237533241&4294967295,b=N+(A<<21&4294967295|A>>>11),A=E+(N^(b|~O))+I[12]+1700485571&4294967295,E=b+(A<<6&4294967295|A>>>26),A=O+(b^(E|~N))+I[3]+2399980690&4294967295,O=E+(A<<10&4294967295|A>>>22),A=N+(E^(O|~b))+I[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=b+(O^(N|~E))+I[1]+2240044497&4294967295,b=N+(A<<21&4294967295|A>>>11),A=E+(N^(b|~O))+I[8]+1873313359&4294967295,E=b+(A<<6&4294967295|A>>>26),A=O+(b^(E|~N))+I[15]+4264355552&4294967295,O=E+(A<<10&4294967295|A>>>22),A=N+(E^(O|~b))+I[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=b+(O^(N|~E))+I[13]+1309151649&4294967295,b=N+(A<<21&4294967295|A>>>11),A=E+(N^(b|~O))+I[4]+4149444226&4294967295,E=b+(A<<6&4294967295|A>>>26),A=O+(b^(E|~N))+I[11]+3174756917&4294967295,O=E+(A<<10&4294967295|A>>>22),A=N+(E^(O|~b))+I[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=b+(O^(N|~E))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+N&4294967295,T.g[3]=T.g[3]+O&4294967295}r.prototype.u=function(T,E){E===void 0&&(E=T.length);for(var b=E-this.blockSize,I=this.B,N=this.h,O=0;O<E;){if(N==0)for(;O<=b;)s(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<E;)if(I[N++]=T.charCodeAt(O++),N==this.blockSize){s(this,I),N=0;break}}else for(;O<E;)if(I[N++]=T[O++],N==this.blockSize){s(this,I),N=0;break}}this.h=N,this.o+=E},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;var b=8*this.o;for(E=T.length-8;E<T.length;++E)T[E]=b&255,b/=256;for(this.u(T),T=Array(16),E=b=0;4>E;++E)for(var I=0;32>I;I+=8)T[b++]=this.g[E]>>>I&255;return T};function i(T,E){var b=a;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=E(T)}function o(T,E){this.h=E;for(var b=[],I=!0,N=T.length-1;0<=N;N--){var O=T[N]|0;I&&O==E||(b[N]=O,I=!1)}this.g=b}var a={};function c(T){return-128<=T&&128>T?i(T,function(E){return new o([E|0],0>E?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return P(u(-T));for(var E=[],b=1,I=0;T>=b;I++)E[I]=T/b|0,b*=4294967296;return new o(E,0)}function f(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return P(f(T.substring(1),E));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(E,8)),I=h,N=0;N<T.length;N+=8){var O=Math.min(8,T.length-N),A=parseInt(T.substring(N,N+O),E);8>O?(O=u(Math.pow(E,O)),I=I.j(O).add(u(A))):(I=I.j(b),I=I.add(u(A)))}return I}var h=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(_(this))return-P(this).m();for(var T=0,E=1,b=0;b<this.g.length;b++){var I=this.i(b);T+=(0<=I?I:4294967296+I)*E,E*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(_(this))return"-"+P(this).toString(T);for(var E=u(Math.pow(T,6)),b=this,I="";;){var N=C(b,E).g;b=S(b,N.j(E));var O=((0<b.g.length?b.g[0]:b.h)>>>0).toString(T);if(b=N,y(b))return O+I;for(;6>O.length;)O="0"+O;I=O+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function _(T){return T.h==-1}t.l=function(T){return T=S(this,T),_(T)?-1:y(T)?0:1};function P(T){for(var E=T.g.length,b=[],I=0;I<E;I++)b[I]=~T.g[I];return new o(b,~T.h).add(p)}t.abs=function(){return _(this)?P(this):this},t.add=function(T){for(var E=Math.max(this.g.length,T.g.length),b=[],I=0,N=0;N<=E;N++){var O=I+(this.i(N)&65535)+(T.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(T.i(N)>>>16);I=A>>>16,O&=65535,A&=65535,b[N]=A<<16|O}return new o(b,b[b.length-1]&-2147483648?-1:0)};function S(T,E){return T.add(P(E))}t.j=function(T){if(y(this)||y(T))return h;if(_(this))return _(T)?P(this).j(P(T)):P(P(this).j(T));if(_(T))return P(this.j(P(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var E=this.g.length+T.g.length,b=[],I=0;I<2*E;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(var N=0;N<T.g.length;N++){var O=this.i(I)>>>16,A=this.i(I)&65535,ge=T.i(N)>>>16,ve=T.i(N)&65535;b[2*I+2*N]+=A*ve,R(b,2*I+2*N),b[2*I+2*N+1]+=O*ve,R(b,2*I+2*N+1),b[2*I+2*N+1]+=A*ge,R(b,2*I+2*N+1),b[2*I+2*N+2]+=O*ge,R(b,2*I+2*N+2)}for(I=0;I<E;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=E;I<2*E;I++)b[I]=0;return new o(b,0)};function R(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function v(T,E){this.g=T,this.h=E}function C(T,E){if(y(E))throw Error("division by zero");if(y(T))return new v(h,h);if(_(T))return E=C(P(T),E),new v(P(E.g),P(E.h));if(_(E))return E=C(T,P(E)),new v(P(E.g),E.h);if(30<T.g.length){if(_(T)||_(E))throw Error("slowDivide_ only works with positive integers.");for(var b=p,I=E;0>=I.l(T);)b=D(b),I=D(I);var N=M(b,1),O=M(I,1);for(I=M(I,2),b=M(b,2);!y(I);){var A=O.add(I);0>=A.l(T)&&(N=N.add(b),O=A),I=M(I,1),b=M(b,1)}return E=S(T,N.j(E)),new v(N,E)}for(N=h;0<=T.l(E);){for(b=Math.max(1,Math.floor(T.m()/E.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),O=u(b),A=O.j(E);_(A)||0<A.l(T);)b-=I,O=u(b),A=O.j(E);y(O)&&(O=p),N=N.add(O),T=S(T,A)}return new v(N,T)}t.A=function(T){return C(this,T).h},t.and=function(T){for(var E=Math.max(this.g.length,T.g.length),b=[],I=0;I<E;I++)b[I]=this.i(I)&T.i(I);return new o(b,this.h&T.h)},t.or=function(T){for(var E=Math.max(this.g.length,T.g.length),b=[],I=0;I<E;I++)b[I]=this.i(I)|T.i(I);return new o(b,this.h|T.h)},t.xor=function(T){for(var E=Math.max(this.g.length,T.g.length),b=[],I=0;I<E;I++)b[I]=this.i(I)^T.i(I);return new o(b,this.h^T.h)};function D(T){for(var E=T.g.length+1,b=[],I=0;I<E;I++)b[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(b,T.h)}function M(T,E){var b=E>>5;E%=32;for(var I=T.g.length-b,N=[],O=0;O<I;O++)N[O]=0<E?T.i(O+b)>>>E|T.i(O+b+1)<<32-E:T.i(O+b);return new o(N,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ew=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Xr=o}).apply(typeof Oy<"u"?Oy:typeof self<"u"?self:typeof window<"u"?window:{});var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bw,Ro,ww,Nl,ph,Tw,Iw,Aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pl=="object"&&pl];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var m=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in m))break e;m=m[L]}l=l[l.length-1],w=m[l],d=d(w),d!=w&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var m=0,w=!1,L={next:function(){if(!w&&m<l.length){var F=m++;return{value:d(F,l[F]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,m){return l.call.apply(l.bind,arguments)}function h(l,d,m){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,p.apply(null,arguments)}function g(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function y(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(w,L,F){for(var Y=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Y[Ve-2]=arguments[Ve];return d.prototype[L].apply(w,Y)}}function _(l){const d=l.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=l[w];return m}return[]}function P(l,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const L=l.length||0,F=w.length||0;l.length=L+F;for(let Y=0;Y<F;Y++)l[L+Y]=w[Y]}else l.push(w)}}class S{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function R(l){return/^[\s\xa0]*$/.test(l)}function v(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function C(l){return C[" "](l),l}C[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function M(l,d,m){for(const w in l)d.call(m,l[w],w,l)}function T(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function E(l){const d={};for(const m in l)d[m]=l[m];return d}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,d){let m,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(m in w)l[m]=w[m];for(let F=0;F<b.length;F++)m=b[F],Object.prototype.hasOwnProperty.call(w,m)&&(l[m]=w[m])}}function N(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function O(l){a.setTimeout(()=>{throw l},0)}function A(){var l=je;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,m){const w=ve.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var ve=new S(()=>new Z,l=>l.reset());class Z{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,je=new ge,gn=()=>{const l=a.Promise.resolve(void 0);se=()=>{l.then(sn)}};var sn=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){O(m)}var d=ve;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}ne=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Ar=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function Pn(l,d){if(Qe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(D){e:{try{C(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:qt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pn.aa.h.call(this)}}y(Pn,Qe);var qt={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(l,d,m,w,L){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,d,m,w,L){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var Y=k(l,d,w,L);return-1<Y?(d=l[Y],m||(d.fa=!1)):(d=new X(d,this.src,F,!!w,L),d.fa=m,l.push(d)),d};function Le(l,d){var m=d.type;if(m in l.g){var w=l.g[m],L=Array.prototype.indexOf.call(w,d,void 0),F;(F=0<=L)&&Array.prototype.splice.call(w,L,1),F&&(re(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function k(l,d,m,w){for(var L=0;L<l.length;++L){var F=l[L];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==w)return L}return-1}var x="closure_lm_"+(1e6*Math.random()|0),V={};function H(l,d,m,w,L){if(Array.isArray(d)){for(var F=0;F<d.length;F++)H(l,d[F],m,w,L);return null}return m=ae(m),l&&l[j]?l.K(d,m,u(w)?!!w.capture:!1,L):U(l,d,m,!1,w,L)}function U(l,d,m,w,L,F){if(!d)throw Error("Invalid event type");var Y=u(L)?!!L.capture:!!L,Ve=le(l);if(Ve||(l[x]=Ve=new Ie(l)),m=Ve.add(d,m,w,Y,F),m.proxy)return m;if(w=z(),m.proxy=w,w.src=l,w.listener=m,l.addEventListener)Ar||(L=Y),L===void 0&&(L=!1),l.addEventListener(d.toString(),w,L);else if(l.attachEvent)l.attachEvent(K(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function z(){function l(m){return d.call(l.src,l.listener,m)}const d=q;return l}function Q(l,d,m,w,L){if(Array.isArray(d))for(var F=0;F<d.length;F++)Q(l,d[F],m,w,L);else w=u(w)?!!w.capture:!!w,m=ae(m),l&&l[j]?(l=l.i,d=String(d).toString(),d in l.g&&(F=l.g[d],m=k(F,m,w,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[d],l.h--)))):l&&(l=le(l))&&(d=l.g[d.toString()],l=-1,d&&(l=k(d,m,w,L)),(m=-1<l?d[l]:null)&&G(m))}function G(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[j])Le(d.i,l);else{var m=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(m,w,l.capture):d.detachEvent?d.detachEvent(K(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=le(d))?(Le(m,l),m.h==0&&(m.src=null,d[x]=null)):re(l)}}}function K(l){return l in V?V[l]:V[l]="on"+l}function q(l,d){if(l.da)l=!0;else{d=new Pn(d,this);var m=l.listener,w=l.ha||l.src;l.fa&&G(l),l=m.call(w,d)}return l}function le(l){return l=l[x],l instanceof Ie?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[J]||(l[J]=function(d){return l.handleEvent(d)}),l[J])}function ie(){Ye.call(this),this.i=new Ie(this),this.M=this,this.F=null}y(ie,Ye),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(l,d,m,w){Q(this,l,d,m,w)};function he(l,d){var m,w=l.F;if(w)for(m=[];w;w=w.F)m.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new Qe(d,l);else if(d instanceof Qe)d.target=d.target||l;else{var L=d;d=new Qe(w,l),I(d,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Y=d.g=m[F];L=ke(Y,w,!0,d)&&L}if(Y=d.g=l,L=ke(Y,w,!0,d)&&L,L=ke(Y,w,!1,d)&&L,m)for(F=0;F<m.length;F++)Y=d.g=m[F],L=ke(Y,w,!1,d)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],w=0;w<m.length;w++)re(m[w]);delete l.g[d],l.h--}}this.F=null},ie.prototype.K=function(l,d,m,w){return this.i.add(String(l),d,!1,m,w)},ie.prototype.L=function(l,d,m,w){return this.i.add(String(l),d,!0,m,w)};function ke(l,d,m,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,F=0;F<d.length;++F){var Y=d[F];if(Y&&!Y.da&&Y.capture==m){var Ve=Y.listener,Et=Y.ha||Y.src;Y.fa&&Le(l.i,Y),L=Ve.call(Et,w)!==!1&&L}}return L&&!w.defaultPrevented}function Ce(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function _t(l){l.g=Ce(()=>{l.g=null,l.i&&(l.i=!1,_t(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class dt extends Ye{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(l){Ye.call(this),this.h=l,this.g={}}y(vt,Ye);var Ct=[];function Sr(l){M(l.g,function(d,m){this.g.hasOwnProperty(m)&&G(d)},l),l.g={}}vt.prototype.N=function(){vt.aa.N.call(this),Sr(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qs=a.JSON.stringify,Ut=a.JSON.parse,on=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Js(){}Js.prototype.h=null;function Dp(l){return l.h||(l.h=l.i())}function Lp(){}var so={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wu(){Qe.call(this,"d")}y(wu,Qe);function Tu(){Qe.call(this,"c")}y(Tu,Qe);var ms={},Mp=null;function Ua(){return Mp=Mp||new ie}ms.La="serverreachability";function Vp(l){Qe.call(this,ms.La,l)}y(Vp,Qe);function io(l){const d=Ua();he(d,new Vp(d))}ms.STAT_EVENT="statevent";function Fp(l,d){Qe.call(this,ms.STAT_EVENT,l),this.stat=d}y(Fp,Qe);function jt(l){const d=Ua();he(d,new Fp(d,l))}ms.Ma="timingevent";function Up(l,d){Qe.call(this,ms.Ma,l),this.size=d}y(Up,Qe);function oo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function ao(){this.g=!0}ao.prototype.xa=function(){this.g=!1};function EI(l,d,m,w,L,F){l.info(function(){if(l.g)if(F)for(var Y="",Ve=F.split("&"),Et=0;Et<Ve.length;Et++){var Pe=Ve[Et].split("=");if(1<Pe.length){var Pt=Pe[0];Pe=Pe[1];var kt=Pt.split("_");Y=2<=kt.length&&kt[1]=="type"?Y+(Pt+"="+Pe+"&"):Y+(Pt+"=redacted&")}}else Y=null;else Y=F;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+m+`
`+Y})}function bI(l,d,m,w,L,F,Y){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+m+`
`+F+" "+Y})}function Xs(l,d,m,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+TI(l,m)+(w?" "+w:"")})}function wI(l,d){l.info(function(){return"TIMEOUT: "+d})}ao.prototype.info=function(){};function TI(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var w=m[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return Qs(m)}catch{return d}}var ja={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Iu;function $a(){}y($a,Js),$a.prototype.g=function(){return new XMLHttpRequest},$a.prototype.i=function(){return{}},Iu=new $a;function Rr(l,d,m,w){this.j=l,this.i=d,this.l=m,this.R=w||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $p}function $p(){this.i=null,this.g="",this.h=!1}var Bp={},Au={};function Su(l,d,m){l.L=1,l.v=qa(Jn(d)),l.m=m,l.P=!0,Hp(l,null)}function Hp(l,d){l.F=Date.now(),Ba(l),l.A=Jn(l.v);var m=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),rm(m.i,"t",w),l.C=0,m=l.j.J,l.h=new $p,l.g=bm(l.j,m?d:null,!l.m),0<l.O&&(l.M=new dt(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ct[0]=L.toString()),L=Ct);for(var F=0;F<L.length;F++){var Y=H(m,L[F],w||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),io(),EI(l.i,l.u,l.A,l.l,l.R,l.m)}Rr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Xn(l)==3?d.j():this.Y(l)},Rr.prototype.Y=function(l){try{if(l==this.g)e:{const kt=Xn(this.g);var d=this.g.Ba();const ti=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||um(this.g)))){this.J||kt!=4||d==7||(d==8||0>=ti?io(3):io(2)),Ru(this);var m=this.g.Z();this.X=m;t:if(zp(this)){var w=um(this.g);l="";var L=w.length,F=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gs(this),lo(this);var Y="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(F&&d==L-1)});w.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,bI(this.i,this.u,this.A,this.l,this.R,kt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,Et=this.g;if((Ve=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(Ve)){var Pe=Ve;break t}}Pe=null}if(m=Pe)Xs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cu(this,m);else{this.o=!1,this.s=3,jt(12),gs(this),lo(this);break e}}if(this.P){m=!0;let yn;for(;!this.J&&this.C<Y.length;)if(yn=II(this,Y),yn==Au){kt==4&&(this.s=4,jt(14),m=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Bp){this.s=4,jt(15),Xs(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else Xs(this.i,this.l,yn,null),Cu(this,yn);if(zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||Y.length!=0||this.h.h||(this.s=1,jt(16),m=!1),this.o=this.o&&m,!m)Xs(this.i,this.l,Y,"[Invalid Chunked Response]"),gs(this),lo(this);else if(0<Y.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Du(Pt),Pt.M=!0,jt(11))}}else Xs(this.i,this.l,Y,null),Cu(this,Y);kt==4&&gs(this),this.o&&!this.J&&(kt==4?ym(this.j,this):(this.o=!1,Ba(this)))}else $I(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),gs(this),lo(this)}}}catch{}finally{}};function zp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function II(l,d){var m=l.C,w=d.indexOf(`
`,m);return w==-1?Au:(m=Number(d.substring(m,w)),isNaN(m)?Bp:(w+=1,w+m>d.length?Au:(d=d.slice(w,w+m),l.C=w+m,d)))}Rr.prototype.cancel=function(){this.J=!0,gs(this)};function Ba(l){l.S=Date.now()+l.I,qp(l,l.I)}function qp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=oo(p(l.ba,l),d)}function Ru(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Rr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(wI(this.i,this.A),this.L!=2&&(io(),jt(17)),gs(this),this.s=2,lo(this)):qp(this,this.S-l)};function lo(l){l.j.G==0||l.J||ym(l.j,l)}function gs(l){Ru(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Sr(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Cu(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Pu(m.h,l))){if(!l.K&&Pu(m.h,l)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Ja(m),Ya(m);else break e;xu(m),jt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=oo(p(m.Za,m),6e3));if(1>=Gp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else _s(m,11)}else if((l.K||m.g==l)&&Ja(m),!R(d))for(L=m.Da.g.parse(d),d=0;d<L.length;d++){let Pe=L[d];if(m.T=Pe[0],Pe=Pe[1],m.G==2)if(Pe[0]=="c"){m.K=Pe[1],m.ia=Pe[2];const Pt=Pe[3];Pt!=null&&(m.la=Pt,m.j.info("VER="+m.la));const kt=Pe[4];kt!=null&&(m.Aa=kt,m.j.info("SVER="+m.Aa));const ti=Pe[5];ti!=null&&typeof ti=="number"&&0<ti&&(w=1.5*ti,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const yn=l.g;if(yn){const Za=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Za){var F=w.h;F.g||Za.indexOf("spdy")==-1&&Za.indexOf("quic")==-1&&Za.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ku(F,F.h),F.h=null))}if(w.D){const Lu=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lu&&(w.ya=Lu,He(w.I,w.D,Lu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var Y=l;if(w.qa=Em(w,w.J?w.ia:null,w.W),Y.K){Yp(w.h,Y);var Ve=Y,Et=w.L;Et&&(Ve.I=Et),Ve.B&&(Ru(Ve),Ba(Ve)),w.g=Y}else mm(w);0<m.i.length&&Qa(m)}else Pe[0]!="stop"&&Pe[0]!="close"||_s(m,7);else m.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?_s(m,7):Nu(m):Pe[0]!="noop"&&m.l&&m.l.ta(Pe),m.v=0)}}io(4)}catch{}}var AI=class{constructor(l,d){this.g=l,this.map=d}};function Wp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Gp(l){return l.h?1:l.g?l.g.size:0}function Pu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function ku(l,d){l.g?l.g.add(d):l.h=d}function Yp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Wp.prototype.cancel=function(){if(this.i=Qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return _(l.i)}function SI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],m=l.length,w=0;w<m;w++)d.push(l[w]);return d}d=[],m=0;for(w in l)d[m++]=l[w];return d}function RI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const w in l)d[m++]=w;return d}}}function Jp(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=RI(l),w=SI(l),L=w.length,F=0;F<L;F++)d.call(void 0,w[F],m&&m[F],l)}var Xp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CI(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var w=l[m].indexOf("="),L=null;if(0<=w){var F=l[m].substring(0,w);L=l[m].substring(w+1)}else F=l[m];d(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ys(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ys){this.h=l.h,Ha(this,l.j),this.o=l.o,this.g=l.g,za(this,l.s),this.l=l.l;var d=l.i,m=new fo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Zp(this,m),this.m=l.m}else l&&(d=String(l).match(Xp))?(this.h=!1,Ha(this,d[1]||"",!0),this.o=co(d[2]||""),this.g=co(d[3]||"",!0),za(this,d[4]),this.l=co(d[5]||"",!0),Zp(this,d[6]||"",!0),this.m=co(d[7]||"")):(this.h=!1,this.i=new fo(null,this.h))}ys.prototype.toString=function(){var l=[],d=this.j;d&&l.push(uo(d,em,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(uo(d,em,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(uo(m,m.charAt(0)=="/"?OI:kI,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",uo(m,xI)),l.join("")};function Jn(l){return new ys(l)}function Ha(l,d,m){l.j=m?co(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function za(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Zp(l,d,m){d instanceof fo?(l.i=d,DI(l.i,l.h)):(m||(d=uo(d,NI)),l.i=new fo(d,l.h))}function He(l,d,m){l.i.set(d,m)}function qa(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function co(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function uo(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,PI),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function PI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var em=/[#\/\?@]/g,kI=/[#\?:]/g,OI=/[#\?]/g,NI=/[#\?@]/g,xI=/#/g;function fo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Cr(l){l.g||(l.g=new Map,l.h=0,l.i&&CI(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=fo.prototype,t.add=function(l,d){Cr(this),this.i=null,l=Zs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function tm(l,d){Cr(l),d=Zs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function nm(l,d){return Cr(l),d=Zs(l,d),l.g.has(d)}t.forEach=function(l,d){Cr(this),this.g.forEach(function(m,w){m.forEach(function(L){l.call(d,L,w,this)},this)},this)},t.na=function(){Cr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const L=l[w];for(let F=0;F<L.length;F++)m.push(d[w])}return m},t.V=function(l){Cr(this);let d=[];if(typeof l=="string")nm(this,l)&&(d=d.concat(this.g.get(Zs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Cr(this),this.i=null,l=Zs(this,l),nm(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function rm(l,d,m){tm(l,d),0<m.length&&(l.i=null,l.g.set(Zs(l,d),_(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const F=encodeURIComponent(String(w)),Y=this.V(w);for(w=0;w<Y.length;w++){var L=F;Y[w]!==""&&(L+="="+encodeURIComponent(String(Y[w]))),l.push(L)}}return this.i=l.join("&")};function Zs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function DI(l,d){d&&!l.j&&(Cr(l),l.i=null,l.g.forEach(function(m,w){var L=w.toLowerCase();w!=L&&(tm(this,w),rm(this,L,m))},l)),l.j=d}function LI(l,d){const m=new ao;if(a.Image){const w=new Image;w.onload=g(Pr,m,"TestLoadImage: loaded",!0,d,w),w.onerror=g(Pr,m,"TestLoadImage: error",!1,d,w),w.onabort=g(Pr,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=g(Pr,m,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function MI(l,d){const m=new ao,w=new AbortController,L=setTimeout(()=>{w.abort(),Pr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(F=>{clearTimeout(L),F.ok?Pr(m,"TestPingServer: ok",!0,d):Pr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Pr(m,"TestPingServer: error",!1,d)})}function Pr(l,d,m,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(m)}catch{}}function VI(){this.g=new on}function FI(l,d,m){const w=m||"";try{Jp(l,function(L,F){let Y=L;u(L)&&(Y=Qs(L)),d.push(w+F+"="+encodeURIComponent(Y))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function Wa(l){this.l=l.Ub||null,this.j=l.eb||!1}y(Wa,Js),Wa.prototype.g=function(){return new Ka(this.l,this.j)},Wa.prototype.i=function(l){return function(){return l}}({});function Ka(l,d){ie.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Ka,ie),t=Ka.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,po(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sm(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sm(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ho(this):po(this),this.readyState==3&&sm(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ho(this))},t.Qa=function(l){this.g&&(this.response=l,ho(this))},t.ga=function(){this.g&&ho(this)};function ho(l){l.readyState=4,l.l=null,l.j=null,l.v=null,po(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function po(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function im(l){let d="";return M(l,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function Ou(l,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=im(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):He(l,d,m))}function Ze(l){ie.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Ze,ie);var UI=/^https?$/i,jI=["POST","PUT"];t=Ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Iu.g(),this.v=this.o?Dp(this.o):Dp(Iu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(F){om(this,F);return}if(l=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)m.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())m.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jI,d,void 0))||w||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Y]of m)this.g.setRequestHeader(F,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cm(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){om(this,F)}};function om(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,am(l),Ga(l)}function am(l){l.A||(l.A=!0,he(l,"complete"),he(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,he(this,"complete"),he(this,"abort"),Ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ga(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lm(this):this.bb())},t.bb=function(){lm(this)};function lm(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Xn(l)!=4||l.Z()!=2)){if(l.u&&Xn(l)==4)Ce(l.Ea,0,l);else if(he(l,"readystatechange"),Xn(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=Y===0){var L=String(l.D).match(Xp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),w=!UI.test(L?L.toLowerCase():"")}m=w}if(m)he(l,"complete"),he(l,"success");else{l.m=6;try{var F=2<Xn(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",am(l)}}finally{Ga(l)}}}}function Ga(l,d){if(l.g){cm(l);const m=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||he(l,"ready");try{m.onreadystatechange=w}catch{}}}function cm(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Xn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ut(d)}};function um(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function $I(l){const d={};l=(l.g&&2<=Xn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(R(l[w]))continue;var m=N(l[w]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[L]||[];d[L]=F,F.push(m)}T(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function fm(l){this.Aa=0,this.i=[],this.j=new ao,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mo("baseRetryDelayMs",5e3,l),this.cb=mo("retryDelaySeedMs",1e4,l),this.Wa=mo("forwardChannelMaxRetries",2,l),this.wa=mo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Wp(l&&l.concurrentRequestLimit),this.Da=new VI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fm.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,w){jt(0),this.W=l,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=Em(this,null,this.W),Qa(this)};function Nu(l){if(hm(l),l.G==3){var d=l.U++,m=Jn(l.I);if(He(m,"SID",l.K),He(m,"RID",d),He(m,"TYPE","terminate"),go(l,m),d=new Rr(l,l.j,d),d.L=2,d.v=qa(Jn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=bm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ba(d)}vm(l)}function Ya(l){l.g&&(Du(l),l.g.cancel(),l.g=null)}function hm(l){Ya(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ja(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Qa(l){if(!Kp(l.h)&&!l.s){l.s=!0;var d=l.Ga;se||gn(),ne||(se(),ne=!0),je.add(d,l),l.B=0}}function BI(l,d){return Gp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=oo(p(l.Ga,l,d),_m(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Rr(this,this.j,l);let F=this.o;if(this.S&&(F?(F=E(F),I(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=pm(this,L,d),m=Jn(this.I),He(m,"RID",l),He(m,"CVER",22),this.D&&He(m,"X-HTTP-Session-Id",this.D),go(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(im(F)))+"&"+d:this.m&&Ou(m,this.m,F)),ku(this.h,L),this.Ua&&He(m,"TYPE","init"),this.P?(He(m,"$req",d),He(m,"SID","null"),L.T=!0,Su(L,m,null)):Su(L,m,d),this.G=2}}else this.G==3&&(l?dm(this,l):this.i.length==0||Kp(this.h)||dm(this))};function dm(l,d){var m;d?m=d.l:m=l.U++;const w=Jn(l.I);He(w,"SID",l.K),He(w,"RID",m),He(w,"AID",l.T),go(l,w),l.m&&l.o&&Ou(w,l.m,l.o),m=new Rr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=pm(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ku(l.h,m),Su(m,w,d)}function go(l,d){l.H&&M(l.H,function(m,w){He(d,w,m)}),l.l&&Jp({},function(m,w){He(d,w,m)})}function pm(l,d,m){m=Math.min(l.i.length,m);var w=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let F=-1;for(;;){const Y=["count="+m];F==-1?0<m?(F=L[0].g,Y.push("ofs="+F)):F=0:Y.push("ofs="+F);let Ve=!0;for(let Et=0;Et<m;Et++){let Pe=L[Et].g;const Pt=L[Et].map;if(Pe-=F,0>Pe)F=Math.max(0,L[Et].g-100),Ve=!1;else try{FI(Pt,Y,"req"+Pe+"_")}catch{w&&w(Pt)}}if(Ve){w=Y.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,w}function mm(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;se||gn(),ne||(se(),ne=!0),je.add(d,l),l.v=0}}function xu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=oo(p(l.Fa,l),_m(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=oo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),Ya(this),gm(this))};function Du(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function gm(l){l.g=new Rr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Jn(l.qa);He(d,"RID","rpc"),He(d,"SID",l.K),He(d,"AID",l.T),He(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(d,"TO",l.ja),He(d,"TYPE","xmlhttp"),go(l,d),l.m&&l.o&&Ou(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=qa(Jn(d)),m.m=null,m.P=!0,Hp(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Ya(this),xu(this),jt(19))};function Ja(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ym(l,d){var m=null;if(l.g==d){Ja(l),Du(l),l.g=null;var w=2}else if(Pu(l.h,d))m=d.D,Yp(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;w=Ua(),he(w,new Up(w,m)),Qa(l)}else mm(l);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&BI(l,d)||w==2&&xu(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),L){case 1:_s(l,5);break;case 4:_s(l,10);break;case 3:_s(l,6);break;default:_s(l,2)}}}function _m(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function _s(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),w=l.Xa;const L=!w;w=new ys(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ha(w,"https"),qa(w),L?LI(w.toString(),m):MI(w.toString(),m)}else jt(2);l.G=0,l.l&&l.l.sa(d),vm(l),hm(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function vm(l){if(l.G=0,l.ka=[],l.l){const d=Qp(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,_(l.i),l.i.length=0),l.l.ra()}}function Em(l,d,m){var w=m instanceof ys?Jn(m):new ys(m);if(w.g!="")d&&(w.g=d+"."+w.g),za(w,w.s);else{var L=a.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var F=new ys(null);w&&Ha(F,w),d&&(F.g=d),L&&za(F,L),m&&(F.l=m),w=F}return m=l.D,d=l.ya,m&&d&&He(w,m,d),He(w,"VER",l.la),go(l,w),w}function bm(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ze(new Wa({eb:m})):new Ze(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wm(){}t=wm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xa(){}Xa.prototype.g=function(l,d){return new Xt(l,d)};function Xt(l,d){ie.call(this),this.g=new fm(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!R(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!R(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ei(this)}y(Xt,ie),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Nu(this.g)},Xt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Qs(l),l=m);d.i.push(new AI(d.Ya++,l)),d.G==3&&Qa(d)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,Xt.aa.N.call(this)};function Tm(l){wu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}y(Tm,wu);function Im(){Tu.call(this),this.status=1}y(Im,Tu);function ei(l){this.g=l}y(ei,wm),ei.prototype.ua=function(){he(this.g,"a")},ei.prototype.ta=function(l){he(this.g,new Tm(l))},ei.prototype.sa=function(l){he(this.g,new Im)},ei.prototype.ra=function(){he(this.g,"b")},Xa.prototype.createWebChannel=Xa.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,Aw=function(){return new Xa},Iw=function(){return Ua()},Tw=ms,ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ja.NO_ERROR=0,ja.TIMEOUT=8,ja.HTTP_ERROR=6,Nl=ja,jp.COMPLETE="complete",ww=jp,Lp.EventType=so,so.OPEN="a",so.CLOSE="b",so.ERROR="c",so.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Ro=Lp,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,bw=Ze}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});const Ny="@firebase/firestore",xy="4.9.0";/**
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
 */let Zi="12.0.0";/**
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
 */const Us=new kd("@firebase/firestore");function li(){return Us.logLevel}function te(t,...e){if(Us.logLevel<=Ee.DEBUG){const n=e.map($d);Us.debug(`Firestore (${Zi}): ${t}`,...n)}}function yr(t,...e){if(Us.logLevel<=Ee.ERROR){const n=e.map($d);Us.error(`Firestore (${Zi}): ${t}`,...n)}}function Ui(t,...e){if(Us.logLevel<=Ee.WARN){const n=e.map($d);Us.warn(`Firestore (${Zi}): ${t}`,...n)}}function $d(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Sw(t,r,n)}function Sw(t,e,n){let r=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yr(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Sw(e,s,r)}function _e(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Rw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class Fx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ux{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new Rw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new xt(e)}}class jx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $x{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new jx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Bd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Hx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function mh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ff(s)===ff(i)?be(s,i):ff(s)?1:-1}return be(t.length,e.length)}const zx=55296,qx=57343;function ff(t){const e=t.charCodeAt(0);return e>=zx&&e<=qx}function ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Ly="__name__";class Dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return be(e.length,n.length)}static compareSegments(e,n){const r=Dn.isNumericId(e),s=Dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Dn.extractNumericId(e).compare(Dn.extractNumericId(n)):mh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xr.fromString(e.substring(4,e.length-2))}}class ze extends Dn{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const Wx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends Dn{construct(e,n,r){return new At(e,n,r)}static isValidIdentifier(e){return Wx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ly}static keyField(){return new At([Ly])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new oe(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new oe(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(n)}static emptyPath(){return new At([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(ze.fromString(e))}static fromName(e){return new fe(ze.fromString(e).popFirst(5))}static empty(){return new fe(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new ze(e.slice()))}}/**
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
 */function Cw(t,e,n){if(!n)throw new oe(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Kx(t,e,n,r){if(e===!0&&r===!0)throw new oe(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!fe.isDocumentKey(t))throw new oe(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vy(t){if(fe.isDocumentKey(t))throw new oe(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function $i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hd(t);throw new oe(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function at(t,e){const n={typeString:t};return e&&(n.value=e),n}function Oa(t,e){if(!Pw(t))throw new oe(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new oe(B.INVALID_ARGUMENT,n);return!0}/**
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
 */const Fy=-62135596800,Uy=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Uy);return new qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fy)throw new oe(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uy}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Oa(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:at("string",qe._jsonSchemaVersion),seconds:at("number"),nanoseconds:at("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new qe(0,0))}static max(){return new ye(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fa=-1;function Gx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new ns(s,fe.empty(),e)}function Yx(t){return new ns(t.readTime,t.key,fa)}class ns{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ns(ye.min(),fe.empty(),fa)}static max(){return new ns(ye.max(),fe.empty(),fa)}}function Qx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const Jx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function eo(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==Jx)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Zx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function to(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Jc.ce=-1;/**
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
 */const zd=-1;function Xc(t){return t==null}function fc(t){return t===0&&1/t==-1/0}function eD(t){return typeof t=="number"&&Number.isInteger(t)&&!fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const kw="";function tD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jy(e)),e=nD(t.get(n),e);return jy(e)}function nD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case kw:n+="";break;default:n+=i}}return n}function jy(t){return t+kw+""}/**
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
 */function $y(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=s??Tt.EMPTY,this.right=i??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new By(this.data.getIterator())}getIteratorFrom(e){return new By(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class By{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class en{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new en([])}unionWith(e){let n=new ht(At.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Nw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nw("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const rD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=rD.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */const xw="server_timestamp",Dw="__type__",Lw="__previous_value__",Mw="__local_write_time__";function qd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Dw])==null?void 0:r.stringValue)===xw}function Zc(t){const e=t.mapValue.fields[Lw];return qd(e)?Zc(e):e}function ha(t){const e=rs(t.mapValue.fields[Mw].timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class sD{constructor(e,n,r,s,i,o,a,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const hc="(default)";class da{constructor(e,n){this.projectId=e,this.database=n||hc}static empty(){return new da("","")}get isDefaultDatabase(){return this.database===hc}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vw="__type__",iD="__max__",gl={mapValue:{}},Fw="__vector__",dc="value";function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qd(t)?4:aD(t)?9007199254740991:oD(t)?10:11:me(28295,{value:t})}function Gn(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rs(s.timestampValue),a=rs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ss(s.bytesValue).isEqual(ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),a=rt(i.doubleValue);return o===a?fc(o)===fc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if($y(o)!==$y(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Gn(o[c],a[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function pa(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=rt(i.integerValue||i.doubleValue),c=rt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Hy(t.timestampValue,e.timestampValue);case 4:return Hy(ha(t),ha(e));case 5:return mh(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ss(i),c=ss(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=be(a[u],c[u]);if(f!==0)return f}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(rt(i.latitude),rt(o.latitude));return a!==0?a:be(rt(i.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,g,y,_;const a=i.fields||{},c=o.fields||{},u=(p=a[dc])==null?void 0:p.arrayValue,f=(g=c[dc])==null?void 0:g.arrayValue,h=be(((y=u==null?void 0:u.values)==null?void 0:y.length)||0,((_=f==null?void 0:f.values)==null?void 0:_.length)||0);return h!==0?h:zy(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===gl.mapValue&&o===gl.mapValue)return 0;if(i===gl.mapValue)return 1;if(o===gl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let h=0;h<c.length&&h<f.length;++h){const p=mh(c[h],f[h]);if(p!==0)return p;const g=Bi(a[c[h]],u[f[h]]);if(g!==0)return g}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function Hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=rs(t),r=rs(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function zy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Bi(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Hi(t){return gh(t)}function gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gh(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function xl(t){switch(is(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zc(t);return e?16+xl(e):16;case 5:return 2*t.stringValue.length;case 6:return ss(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+xl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ds(r.fields,(i,o)=>{s+=i.length+xl(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function yh(t){return!!t&&"integerValue"in t}function Wd(t){return!!t&&"arrayValue"in t}function qy(t){return!!t&&"nullValue"in t}function Wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dl(t){return!!t&&"mapValue"in t}function oD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Vw])==null?void 0:r.stringValue)===Fw}function Ho(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ho(t.arrayValue.values[n]);return e}return{...t}}function aD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===iD}/**
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
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ho(n)}setAll(e){let n=At.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ho(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Dl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Yt(Ho(this.value))}}function Uw(t){const e=[];return ds(t.fields,(n,r)=>{const s=new At([n]);if(Dl(r)){const i=Uw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new en(e)}/**
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
 */class Mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,ye.min(),ye.min(),ye.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,ye.min(),ye.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ye.min(),ye.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pc{constructor(e,n){this.position=e,this.inclusive=n}}function Ky(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=Bi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class mc{constructor(e,n="asc"){this.field=e,this.dir=n}}function lD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jw{}class ct extends jw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uD(e,n,r):n==="array-contains"?new dD(e,r):n==="in"?new pD(e,r):n==="not-in"?new mD(e,r):n==="array-contains-any"?new gD(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fD(e,r):new hD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bi(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends jw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Yn(e,n)}matches(e){return $w(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function $w(t){return t.op==="and"}function Bw(t){return cD(t)&&$w(t)}function cD(t){for(const e of t.filters)if(e instanceof Yn)return!1;return!0}function _h(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(Bw(t))return t.filters.map(e=>_h(e)).join(",");{const e=t.filters.map(n=>_h(n)).join(",");return`${t.op}(${e})`}}function Hw(t,e){return t instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Gn(r.value,s.value)}(t,e):t instanceof Yn?function(r,s){return s instanceof Yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Hw(o,s.filters[a]),!0):!1}(t,e):void me(19439)}function zw(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Hi(n.value)}`}(t):t instanceof Yn?function(n){return n.op.toString()+" {"+n.getFilters().map(zw).join(" ,")+"}"}(t):"Filter"}class uD extends ct{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class fD extends ct{constructor(e,n){super(e,"in",n),this.keys=qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hD extends ct{constructor(e,n){super(e,"not-in",n),this.keys=qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class dD extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wd(n)&&pa(n.arrayValue,this.value)}}class pD extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pa(this.value.arrayValue,n)}}class mD extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!pa(this.value.arrayValue,n)}}class gD extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pa(this.value.arrayValue,r))}}/**
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
 */class yD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Yy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yD(t,e,n,r,s,i,o)}function Kd(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_h(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.Te=n}return e.Te}function Gd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gy(t.startAt,e.startAt)&&Gy(t.endAt,e.endAt)}function vh(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class eu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _D(t,e,n,r,s,i,o,a){return new eu(t,e,n,r,s,i,o,a)}function Ww(t){return new eu(t)}function Qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vD(t){return t.collectionGroup!==null}function zo(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(At.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new mc(i,r))}),n.has(At.keyField().canonicalString())||e.Ie.push(new mc(At.keyField(),r))}return e.Ie}function Hn(t){const e=_e(t);return e.Ee||(e.Ee=ED(e,zo(t))),e.Ee}function ED(t,e){if(t.limitType==="F")return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mc(s.field,i)});const n=t.endAt?new pc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pc(t.startAt.position,t.startAt.inclusive):null;return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Eh(t,e,n){return new eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tu(t,e){return Gd(Hn(t),Hn(e))&&t.limitType===e.limitType}function Kw(t){return`${Kd(Hn(t))}|lt:${t.limitType}`}function ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>zw(s)).join(", ")}]`),Xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hi(s)).join(",")),`Target(${r})`}(Hn(t))}; limitType=${t.limitType})`}function nu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Ky(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,zo(r),s)||r.endAt&&!function(o,a,c){const u=Ky(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,zo(r),s))}(t,e)}function bD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gw(t){return(e,n)=>{let r=!1;for(const s of zo(t)){const i=wD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wD(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Bi(c,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ow(this.inner)}size(){return this.innerSize}}/**
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
 */const TD=new Xe(fe.comparator);function _r(){return TD}const Yw=new Xe(fe.comparator);function Co(...t){let e=Yw;for(const n of t)e=e.insert(n.key,n);return e}function Qw(t){let e=Yw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ss(){return qo()}function Jw(){return qo()}function qo(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const ID=new Xe(fe.comparator),AD=new ht(fe.comparator);function Te(...t){let e=AD;for(const n of t)e=e.add(n);return e}const SD=new ht(be);function RD(){return SD}/**
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
 */function Yd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function Xw(t){return{integerValue:""+t}}function CD(t,e){return eD(e)?Xw(e):Yd(t,e)}/**
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
 */class ru{constructor(){this._=void 0}}function PD(t,e,n){return t instanceof gc?function(s,i){const o={fields:{[Dw]:{stringValue:xw},[Mw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qd(i)&&(i=Zc(i)),i&&(o.fields[Lw]=i),{mapValue:o}}(n,e):t instanceof ma?eT(t,e):t instanceof ga?tT(t,e):function(s,i){const o=Zw(s,i),a=Jy(o)+Jy(s.Ae);return yh(o)&&yh(s.Ae)?Xw(a):Yd(s.serializer,a)}(t,e)}function kD(t,e,n){return t instanceof ma?eT(t,e):t instanceof ga?tT(t,e):n}function Zw(t,e){return t instanceof yc?function(r){return yh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class gc extends ru{}class ma extends ru{constructor(e){super(),this.elements=e}}function eT(t,e){const n=nT(e);for(const r of t.elements)n.some(s=>Gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ga extends ru{constructor(e){super(),this.elements=e}}function tT(t,e){let n=nT(e);for(const r of t.elements)n=n.filter(s=>!Gn(s,r));return{arrayValue:{values:n}}}class yc extends ru{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Jy(t){return rt(t.integerValue||t.doubleValue)}function nT(t){return Wd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ma&&s instanceof ma||r instanceof ga&&s instanceof ga?ji(r.elements,s.elements,Gn):r instanceof yc&&s instanceof yc?Gn(r.Ae,s.Ae):r instanceof gc&&s instanceof gc}(t.transform,e.transform)}class ND{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class su{}function rT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qd(t.key,pn.none()):new Na(t.key,t.data,pn.none());{const n=t.data,r=Yt.empty();let s=new ht(At.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new en(s.toArray()),pn.none())}}function xD(t,e,n){t instanceof Na?function(s,i,o){const a=s.value.clone(),c=Zy(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,i,o){if(!Ll(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Zy(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(sT(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wo(t,e,n,r){return t instanceof Na?function(i,o,a,c){if(!Ll(i.precondition,o))return a;const u=i.value.clone(),f=e_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ps?function(i,o,a,c){if(!Ll(i.precondition,o))return a;const u=e_(i.fieldTransforms,c,o),f=o.data;return f.setAll(sT(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Ll(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function DD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Zw(r.transform,s||null);i!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,i))}return n||null}function Xy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ji(r,s,(i,o)=>OD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Na extends su{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends su{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zy(t,e,n){const r=new Map;De(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,kD(o,a,n[s]))}return r}function e_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,PD(i,o,e))}return r}class Qd extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LD extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=rT(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>Xy(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>Xy(n,r))}}class Jd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return ID}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jd(e,n,r,s)}}/**
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
 */class VD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Se;function UD(t){switch(t){case B.OK:return me(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function iT(t){if(t===void 0)return yr("GRPC error has no .code"),B.UNKNOWN;switch(t){case st.OK:return B.OK;case st.CANCELLED:return B.CANCELLED;case st.UNKNOWN:return B.UNKNOWN;case st.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case st.INTERNAL:return B.INTERNAL;case st.UNAVAILABLE:return B.UNAVAILABLE;case st.UNAUTHENTICATED:return B.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case st.NOT_FOUND:return B.NOT_FOUND;case st.ALREADY_EXISTS:return B.ALREADY_EXISTS;case st.PERMISSION_DENIED:return B.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case st.ABORTED:return B.ABORTED;case st.OUT_OF_RANGE:return B.OUT_OF_RANGE;case st.UNIMPLEMENTED:return B.UNIMPLEMENTED;case st.DATA_LOSS:return B.DATA_LOSS;default:return me(39323,{code:t})}}(Se=st||(st={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jD(){return new TextEncoder}/**
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
 */const $D=new Xr([4294967295,4294967295],0);function t_(t){const e=jD().encode(t),n=new Ew;return n.update(e),new Uint8Array(n.digest())}function n_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([s,i],0)]}class Xd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Po(`Invalid padding: ${n}`);if(r<0)throw new Po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Po(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Xr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Xr.fromNumber(r)));return s.compare($D)===1&&(s=new Xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=t_(e),[r,s]=n_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=t_(e),[r,s]=n_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class iu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new iu(ye.min(),s,new Xe(be),_r(),Te())}}class xa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xa(r,n,Te(),Te(),Te())}}/**
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
 */class Ml{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class oT{constructor(e,n){this.targetId=e,this.Ce=n}}class aT{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class r_{constructor(){this.ve=0,this.Fe=s_(),this.Me=Rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new xa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=s_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class BD{constructor(e){this.Ge=e,this.ze=new Map,this.je=_r(),this.Je=yl(),this.He=yl(),this.Ye=new Xe(be)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(vh(i))if(r===0){const o=new fe(i.path);this.et(n,o,Mt.newNoDocument(o,ye.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ss(r).toUint8Array()}catch(c){if(c instanceof Nw)return Ui("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Xd(o,s,i)}catch(c){return Ui(c instanceof Po?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&vh(a.target)){const c=new fe(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Mt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Te();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new iu(e,n,this.Ye,this.je,r);return this.je=_r(),this.Je=yl(),this.He=yl(),this.Ye=new Xe(be),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new r_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ht(be),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ht(be),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new r_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function yl(){return new Xe(fe.comparator)}function s_(){return new Xe(fe.comparator)}const HD={asc:"ASCENDING",desc:"DESCENDING"},zD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qD={and:"AND",or:"OR"};class WD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bh(t,e){return t.useProto3Json||Xc(e)?e:{value:e}}function _c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KD(t,e){return _c(t,e.toTimestamp())}function zn(t){return De(!!t,49232),ye.fromTimestamp(function(n){const r=rs(n);return new qe(r.seconds,r.nanos)}(t))}function Zd(t,e){return wh(t,e).canonicalString()}function wh(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cT(t){const e=ze.fromString(t);return De(pT(e),10190,{key:e.toString()}),e}function Th(t,e){return Zd(t.databaseId,e.path)}function hf(t,e){const n=cT(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(fT(n))}function uT(t,e){return Zd(t.databaseId,e)}function GD(t){const e=cT(t);return e.length===4?ze.emptyPath():fT(e)}function Ih(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fT(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function i_(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function YD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),Rt.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?B.UNKNOWN:iT(u.code);return new oe(f,u.message||"")}(o);n=new aT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hf(t,r.document.name),i=zn(r.document.updateTime),o=r.document.createTime?zn(r.document.createTime):ye.min(),a=new Yt({mapValue:{fields:r.document.fields}}),c=Mt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ml(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hf(t,r.document),i=r.readTime?zn(r.readTime):ye.min(),o=Mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hf(t,r.document),i=r.removedTargetIds||[];n=new Ml([],i,s,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FD(s,i),a=r.targetId;n=new oT(a,o)}}return n}function QD(t,e){let n;if(e instanceof Na)n={update:i_(t,e.key,e.value)};else if(e instanceof Qd)n={delete:Th(t,e.key)};else if(e instanceof ps)n={update:i_(t,e.key,e.data),updateMask:iL(e.fieldMask)};else{if(!(e instanceof LD))return me(16599,{Vt:e.type});n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof gc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function JD(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?zn(s.updateTime):zn(i);return o.isEqual(ye.min())&&(o=zn(i)),new ND(o,s.transformResults||[])}(n,e))):[]}function XD(t,e){return{documents:[uT(t,e.path)]}}function ZD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uT(t,s);const i=function(u){if(u.length!==0)return dT(Yn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:ui(p.field),direction:nL(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function eL(t){let e=GD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(h){const p=hT(h);return p instanceof Yn&&Bw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new mc(fi(y.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Xc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,g=h.values||[];return new pc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,g=h.values||[];return new pc(g,p)}(n.endAt)),_D(e,s,o,i,a,"F",c,u)}function tL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fi(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fi(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fi(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return ct.create(fi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yn.create(n.compositeFilter.filters.map(r=>hT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function nL(t){return HD[t]}function rL(t){return zD[t]}function sL(t){return qD[t]}function ui(t){return{fieldPath:t.canonicalString()}}function fi(t){return At.fromServerFormat(t.fieldPath)}function dT(t){return t instanceof ct?function(n){if(n.op==="=="){if(Wy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(qy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(qy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:rL(n.op),value:n.value}}}(t):t instanceof Yn?function(n){const r=n.getFilters().map(s=>dT(s));return r.length===1?r[0]:{compositeFilter:{op:sL(n.op),filters:r}}}(t):me(54877,{filter:t})}function iL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qr{constructor(e,n,r,s,i=ye.min(),o=ye.min(),a=Rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oL{constructor(e){this.yt=e}}function aL(t){const e=eL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eh(e,e.limit,"L"):e}/**
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
 */class lL{constructor(){this.Cn=new cL}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ns.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class cL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(ze.comparator)).toArray()}}/**
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
 */const o_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mT=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(mT,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
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
 */class zi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new zi(0)}static cr(){return new zi(-1)}}/**
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
 */const a_="LruGarbageCollector",uL=1048576;function l_([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class fL{constructor(e){this.Ir=e,this.buffer=new ht(l_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();l_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(a_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){to(n)?te(a_,"Ignoring IndexedDB error during garbage collection: ",n):await eo(n)}await this.Vr(3e5)})}}class dL{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Jc.ce);const r=new fL(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(o_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),o_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),li()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function pL(t,e){return new dL(t,e)}/**
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
 */class mL{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Wo(r.mutation,s,en.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Ss();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Co();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=_r();const o=qo(),a=function(){return qo()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ps)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Wo(f.mutation,u,f.mutation.getFieldMask(),qe.now())):o.set(u.key,en.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>a.set(u,new gL(f,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=qo();let s=new Xe((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||en.empty();f=a.applyToLocalView(u,f),r.set(c,f);const h=(s.get(a.batchId)||Te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,h=Jw();f.forEach(p=>{if(!i.has(p)){const g=rT(n.get(p),r.get(p));g!==null&&h.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Ss());let a=fa,c=i;return o.next(u=>$.forEach(u,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(f=>({batchId:a,changes:Qw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=Co();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,c=>{const u=function(h,p){return new eu(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Mt.newInvalidDocument(f)))});let a=Co();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Wo(f.mutation,u,en.empty(),qe.now()),nu(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class _L{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:aL(s.bundledQuery),readTime:zn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class vL{constructor(){this.overlays=new Xe(fe.comparator),this.qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ss();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Ss(),i=n.length+1,o=new fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ss(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Ss(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return $.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VD(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class EL{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class ep{constructor(){this.Qr=new ht(pt.$r),this.Ur=new ht(pt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new pt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new pt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new fe(new ze([])),r=new pt(n,e),s=new pt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new fe(new ze([])),r=new pt(n,e),s=new pt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new pt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return fe.comparator(e.key,n.key)||be(e.Yr,n.Yr)}static Kr(e,n){return be(e.Yr,n.Yr)||fe.comparator(e.key,n.key)}}/**
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
 */class bL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ht(pt.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new pt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?zd:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),s=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(be);return n.forEach(s=>{const i=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),$.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new pt(new fe(i),0);let a=new ht(be);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Yr)),!0)},o),$.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return $.forEach(n.mutations,s=>{const i=new pt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new pt(n,0),s=this.Zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wL{constructor(e){this.ri=e,this.docs=function(){return new Xe(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=_r();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_r();const o=n.path,a=new fe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Qx(Yx(f),r)<=0||(s.has(f.key)||nu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}ii(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TL(this)}getSize(e){return $.resolve(this.size)}}class TL extends mL{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class IL{constructor(e){this.persistence=e,this.si=new Gs(n=>Kd(n),Gd),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new ep,this.targetCount=0,this.ai=zi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),$.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Pr(n),$.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this._i.containsKey(n))}}/**
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
 */class gT{constructor(e,n){this.ui={},this.overlays={},this.ci=new Jc(0),this.li=!1,this.li=!0,this.hi=new EL,this.referenceDelegate=e(this),this.Pi=new IL(this),this.indexManager=new lL,this.remoteDocumentCache=function(s){return new wL(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new oL(n),this.Ii=new _L(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new bL(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new AL(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return $.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class AL extends Xx{constructor(e){super(),this.currentSequenceNumber=e}}class tp{constructor(e){this.persistence=e,this.Ri=new ep,this.Vi=null}static mi(e){return new tp(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,r=>{const s=fe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class vc{constructor(e,n){this.persistence=e,this.pi=new Gs(r=>tD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pL(this,n)}static mi(e,n){return new vc(e,n)}Ei(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return $.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ye.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xl(e.data.value)),n}br(e,n,r){return $.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class np{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new np(e,n.fromCache,r,s)}}/**
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
 */class SL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RL{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return jk()?8:Zx(Vt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SL;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(li()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(li()<=Ee.DEBUG&&te("QueryEngine","Query:",ci(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(li()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(n))):$.resolve())}ys(e,n){if(Qy(n))return $.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Eh(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,a);return this.Cs(n,u,o,c.readTime)?this.ys(e,Eh(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return Qy(n)||s.isEqual(ye.min())?$.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?$.resolve(null):(li()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ci(n)),this.vs(e,o,n,Gx(s,fa)).next(a=>a))})}Ds(e,n){let r=new ht(Gw(e));return n.forEach((s,i)=>{nu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return li()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ci(n)),this.ps.getDocumentsMatchingQuery(e,n,ns.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const rp="LocalStore",CL=3e8;class PL{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Xe(be),this.xs=new Gs(i=>Kd(i),Gd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yL(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function kL(t,e,n,r){return new PL(t,e,n,r)}async function yT(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function OL(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const h=u.batch,p=h.keys();let g=$.resolve();return p.forEach(y=>{g=g.next(()=>f.getEntry(c,y)).next(_=>{const P=u.docVersions.get(y);De(P!==null,48541),_.version.compareTo(P)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),f.addEntry(_)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _T(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function NL(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((f,h)=>{const p=s.get(h);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,h).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,h)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Rt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(h,g),function(_,P,S){return _.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=CL?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,g,f)&&a.push(n.Pi.updateTargetData(i,g))});let c=_r(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(xL(i,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(ye.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(h=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function xL(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_r();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te(rp,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function DL(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=zd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LL(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Ah(t,e,n){const r=_e(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!to(o))throw o;te(rp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function c_(t,e,n){const r=_e(t);let s=ye.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const h=_e(c),p=h.xs.get(f);return p!==void 0?$.resolve(h.Ms.get(p)):h.Pi.getTargetData(u,f)}(r,o,Hn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:Te())).next(a=>(ML(r,bD(e),a),{documents:a,Qs:i})))}function ML(t,e,n){let r=t.Os.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class u_{constructor(){this.activeTargetIds=RD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VL{constructor(){this.Mo=new u_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new u_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FL{Oo(e){}shutdown(){}}/**
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
 */const f_="ConnectivityMonitor";class h_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(f_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(f_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _l=null;function Sh(){return _l===null?_l=function(){return 268435456+Math.round(2147483648*Math.random())}():_l++,"0x"+_l.toString(16)}/**
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
 */const df="RestConnection",UL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jL{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===hc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Sh(),a=this.zo(e,n.toUriEncodedString());te(df,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(a),f=fs(u);return this.Jo(e,a,c,r,f).then(h=>(te(df,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Ui(df,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=UL[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class $L{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ot="WebChannelConnection";class BL extends jL{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Sh();return new Promise((a,c)=>{const u=new bw;u.setWithCredentials(!0),u.listenOnce(ww.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Nl.NO_ERROR:const h=u.getResponseJson();te(Ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case Nl.TIMEOUT:te(Ot,`RPC '${e}' ${o} timed out`),c(new oe(B.DEADLINE_EXCEEDED,"Request time out"));break;case Nl.HTTP_ERROR:const p=u.getStatus();if(te(Ot,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const _=function(S){const R=S.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(R)>=0?R:B.UNKNOWN}(y.status);c(new oe(_,y.message))}else c(new oe(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new oe(B.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(Ot,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);te(Ot,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Sh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Aw(),a=Iw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");te(Ot,`Creating RPC '${e}' stream ${s}: ${f}`,c);const h=o.createWebChannel(f,c);this.I_(h);let p=!1,g=!1;const y=new $L({Yo:P=>{g?te(Ot,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(te(Ot,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),te(Ot,`RPC '${e}' stream ${s} sending:`,P),h.send(P))},Zo:()=>h.close()}),_=(P,S,R)=>{P.listen(S,v=>{try{R(v)}catch(C){setTimeout(()=>{throw C},0)}})};return _(h,Ro.EventType.OPEN,()=>{g||(te(Ot,`RPC '${e}' stream ${s} transport opened.`),y.o_())}),_(h,Ro.EventType.CLOSE,()=>{g||(g=!0,te(Ot,`RPC '${e}' stream ${s} transport closed`),y.a_(),this.E_(h))}),_(h,Ro.EventType.ERROR,P=>{g||(g=!0,Ui(Ot,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),y.a_(new oe(B.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ro.EventType.MESSAGE,P=>{var S;if(!g){const R=P.data[0];De(!!R,16349);const v=R,C=(v==null?void 0:v.error)||((S=v[0])==null?void 0:S.error);if(C){te(Ot,`RPC '${e}' stream ${s} received error:`,C);const D=C.status;let M=function(b){const I=st[b];if(I!==void 0)return iT(I)}(D),T=C.message;M===void 0&&(M=B.INTERNAL,T="Unknown error status: "+D+" with message "+C.message),g=!0,y.a_(new oe(M,T)),h.close()}else te(Ot,`RPC '${e}' stream ${s} received:`,R),y.u_(R)}}),_(a,Tw.STAT_EVENT,P=>{P.stat===ph.PROXY?te(Ot,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===ph.NOPROXY&&te(Ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.__()},0),y}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function pf(){return typeof document<"u"?document:null}/**
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
 */function ou(t){return new WD(t,!0)}/**
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
 */class vT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const d_="PersistentStream";class ET{constructor(e,n,r,s,i,o,a,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(yr(n.toString()),yr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new oe(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return te(d_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(te(d_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HL extends ET{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=YD(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?zn(o.readTime):ye.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ih(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=vh(c)?{documents:XD(i,c)}:{query:ZD(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lT(i,o.resumeToken);const u=bh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){a.readTime=_c(i,o.snapshotVersion.toTimestamp());const u=bh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=tL(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ih(this.serializer),n.removeTarget=e,this.q_(n)}}class zL extends ET{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=JD(e.writeResults,e.commitTime),r=zn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ih(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QD(this.serializer,r))};this.q_(n)}}/**
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
 */class qL{}class WL extends qL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new oe(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,wh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(B.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,wh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(B.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class KL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(yr(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const js="RemoteStore";class GL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ys(this)&&(te(js,"Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.Ea.add(4),await Da(u),u.Ra.set("Unknown"),u.Ea.delete(4),await au(u)}(this))})}),this.Ra=new KL(r,s)}}async function au(t){if(Ys(t))for(const e of t.da)await e(!0)}async function Da(t){for(const e of t.da)await e(!1)}function bT(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ap(n)?op(n):no(n).O_()&&ip(n,e))}function sp(t,e){const n=_e(t),r=no(n);n.Ia.delete(e),r.O_()&&wT(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ys(n)&&n.Ra.set("Unknown"))}function ip(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}no(t).Y_(e)}function wT(t,e){t.Va.Ue(e),no(t).Z_(e)}function op(t){t.Va=new BD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),no(t).start(),t.Ra.ua()}function ap(t){return Ys(t)&&!no(t).x_()&&t.Ia.size>0}function Ys(t){return _e(t).Ea.size===0}function TT(t){t.Va=void 0}async function YL(t){t.Ra.set("Online")}async function QL(t){t.Ia.forEach((e,n)=>{ip(t,e)})}async function JL(t,e){TT(t),ap(t)?(t.Ra.ha(e),op(t)):t.Ra.set("Unknown")}async function XL(t,e,n){if(t.Ra.set("Online"),e instanceof aT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){te(js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ec(t,r)}else if(e instanceof Ml?t.Va.Ze(e):e instanceof oT?t.Va.st(e):t.Va.tt(e),!n.isEqual(ye.min()))try{const r=await _T(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(Rt.EMPTY_BYTE_STRING,f.snapshotVersion)),wT(i,c);const h=new qr(f.target,c,u,f.sequenceNumber);ip(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(js,"Failed to raise snapshot:",r),await Ec(t,r)}}async function Ec(t,e,n){if(!to(e))throw e;t.Ea.add(1),await Da(t),t.Ra.set("Offline"),n||(n=()=>_T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(js,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await au(t)})}function IT(t,e){return e().catch(n=>Ec(t,n,e))}async function lu(t){const e=_e(t),n=os(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:zd;for(;ZL(e);)try{const s=await DL(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,e4(e,s)}catch(s){await Ec(e,s)}AT(e)&&ST(e)}function ZL(t){return Ys(t)&&t.Ta.length<10}function e4(t,e){t.Ta.push(e);const n=os(t);n.O_()&&n.X_&&n.ea(e.mutations)}function AT(t){return Ys(t)&&!os(t).x_()&&t.Ta.length>0}function ST(t){os(t).start()}async function t4(t){os(t).ra()}async function n4(t){const e=os(t);for(const n of t.Ta)e.ea(n.mutations)}async function r4(t,e,n){const r=t.Ta.shift(),s=Jd.from(r,e,n);await IT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await lu(t)}async function s4(t,e){e&&os(t).X_&&await async function(r,s){if(function(o){return UD(o)&&o!==B.ABORTED}(s.code)){const i=r.Ta.shift();os(r).B_(),await IT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await lu(r)}}(t,e),AT(t)&&ST(t)}async function p_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),te(js,"RemoteStore received new credentials");const r=Ys(n);n.Ea.add(3),await Da(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await au(n)}async function i4(t,e){const n=_e(t);e?(n.Ea.delete(2),await au(n)):e||(n.Ea.add(2),await Da(n),n.Ra.set("Unknown"))}function no(t){return t.ma||(t.ma=function(n,r,s){const i=_e(n);return i.sa(),new HL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:YL.bind(null,t),t_:QL.bind(null,t),r_:JL.bind(null,t),H_:XL.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),ap(t)?op(t):t.Ra.set("Unknown")):(await t.ma.stop(),TT(t))})),t.ma}function os(t){return t.fa||(t.fa=function(n,r,s){const i=_e(n);return i.sa(),new zL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:t4.bind(null,t),r_:s4.bind(null,t),ta:n4.bind(null,t),na:r4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await lu(t)):(await t.fa.stop(),t.Ta.length>0&&(te(js,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class lp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new lp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(yr("AsyncQueue",`${e}: ${t}`),to(t))return new oe(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Si{static emptySet(e){return new Si(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Co(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class m_{constructor(){this.ga=new Xe(fe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qi(e,n,Si.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class o4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class a4{constructor(){this.queries=g_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=g_(),i.forEach((o,a)=>{for(const c of a.Sa)c.onError(r)})})(this,new oe(B.ABORTED,"Firestore shutting down"))}}function g_(){return new Gs(t=>Kw(t),tu)}async function l4(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new o4,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=cp(o,`Initialization of query '${ci(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&up(n)}async function c4(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function u4(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&up(n)}function f4(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function up(t){t.Ca.forEach(e=>{e.next()})}var Rh,y_;(y_=Rh||(Rh={})).Ma="default",y_.Cache="cache";class h4{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rh.Cache}}/**
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
 */class RT{constructor(e){this.key=e}}class CT{constructor(e){this.key=e}}class d4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=Gw(e),this.tu=new Si(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new m_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,h)=>{const p=s.get(f),g=nu(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?y!==_&&(r.track({type:3,doc:g}),P=!0):this.su(p,g)||(r.track({type:2,doc:g}),P=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(c||u)&&(a=!0)),P&&(g?(o=o.add(g),i=_?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,h)=>function(g,y){const _=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:P})}};return _(g)-_(y)}(f.type,h.type)||this.eu(f.doc,h.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new qi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new m_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new CT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new RT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return qi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const fp="SyncEngine";class p4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class m4{constructor(e){this.key=e,this.hu=!1}}class g4{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Gs(a=>Kw(a),tu),this.Iu=new Map,this.Eu=new Set,this.du=new Xe(fe.comparator),this.Au=new Map,this.Ru=new ep,this.Vu={},this.mu=new Map,this.fu=zi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function y4(t,e,n=!0){const r=DT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await PT(r,e,n,!0),s}async function _4(t,e){const n=DT(t);await PT(n,e,!0,!1)}async function PT(t,e,n,r){const s=await LL(t.localStore,Hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await v4(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&bT(t.remoteStore,s),a}async function v4(t,e,n,r,s){t.pu=(h,p,g)=>async function(_,P,S,R){let v=P.view.ru(S);v.Cs&&(v=await c_(_.localStore,P.query,!1).then(({documents:T})=>P.view.ru(T,v)));const C=R&&R.targetChanges.get(P.targetId),D=R&&R.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(v,_.isPrimaryClient,C,D);return v_(_,P.targetId,M.au),M.snapshot}(t,h,p,g);const i=await c_(t.localStore,e,!0),o=new d4(e,i.Qs),a=o.ru(i.documents),c=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);v_(t,n,u.au);const f=new p4(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function E4(t,e,n){const r=_e(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!tu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ah(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sp(r.remoteStore,s.targetId),Ch(r,s.targetId)}).catch(eo)):(Ch(r,s.targetId),await Ah(r.localStore,s.targetId,!0))}async function b4(t,e){const n=_e(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function w4(t,e,n){const r=P4(t);try{const s=await function(o,a){const c=_e(o),u=qe.now(),f=a.reduce((g,y)=>g.add(y.key),Te());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=_r(),_=Te();return c.Ns.getEntries(g,f).next(P=>{y=P,y.forEach((S,R)=>{R.isValidDocument()||(_=_.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(P=>{h=P;const S=[];for(const R of a){const v=DD(R,h.get(R.key).overlayedDocument);v!=null&&S.push(new ps(R.key,v,Uw(v.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,S,a)}).next(P=>{p=P;const S=P.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(g,P.batchId,S)})}).then(()=>({batchId:p.batchId,changes:Qw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Xe(be)),u=u.insert(a,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await La(r,s.changes),await lu(r.remoteStore)}catch(s){const i=cp(s,"Failed to persist write");n.reject(i)}}async function kT(t,e){const n=_e(t);try{const r=await NL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?De(o.hu,14607):s.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))}),await La(n,r,e)}catch(r){await eo(r)}}function __(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((f,h)=>{for(const p of h.Sa)p.va(a)&&(u=!0)}),u&&up(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function T4(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Xe(fe.comparator);o=o.insert(i,Mt.newNoDocument(i,ye.min()));const a=Te().add(i),c=new iu(ye.min(),new Map,new Xe(be),o,a);await kT(r,c),r.du=r.du.remove(i),r.Au.delete(e),hp(r)}else await Ah(r.localStore,e,!1).then(()=>Ch(r,e,n)).catch(eo)}async function I4(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await OL(n.localStore,e);NT(n,r,null),OT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await La(n,s)}catch(s){await eo(s)}}async function A4(t,e,n){const r=_e(t);try{const s=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(De(h!==null,37113),f=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);NT(r,e,n),OT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await La(r,s)}catch(s){await eo(s)}}function OT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function NT(t,e,n){const r=_e(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||xT(t,r)})}function xT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(sp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),hp(t))}function v_(t,e,n){for(const r of n)r instanceof RT?(t.Ru.addReference(r.key,e),S4(t,r)):r instanceof CT?(te(fp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||xT(t,r.key)):me(19791,{wu:r})}function S4(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(te(fp,"New document in limbo: "+n),t.Eu.add(r),hp(t))}function hp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new fe(ze.fromString(e)),r=t.fu.next();t.Au.set(r,new m4(n)),t.du=t.du.insert(n,r),bT(t.remoteStore,new qr(Hn(Ww(n.path)),r,"TargetPurposeLimboResolution",Jc.ce))}}async function La(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const h=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){s.push(u);const h=np.As(c.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const f=_e(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>$.forEach(u,p=>$.forEach(p.Es,g=>f.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>$.forEach(p.ds,g=>f.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!to(h))throw h;te(rp,"Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const g=f.Ms.get(p),y=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(y);f.Ms=f.Ms.insert(p,_)}}}(r.localStore,i))}async function R4(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){te(fp,"User change. New user:",e.toKey());const r=await yT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(c=>{c.reject(new oe(B.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await La(n,r.Ls)}}function C4(t,e){const n=_e(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function DT(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T4.bind(null,e),e.Pu.H_=u4.bind(null,e.eventManager),e.Pu.yu=f4.bind(null,e.eventManager),e}function P4(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=A4.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ou(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return kL(this.persistence,new RL,e.initialUser,this.serializer)}Cu(e){return new gT(tp.mi,this.serializer)}Du(e){return new VL}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class k4 extends bc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof vc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hL(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new gT(r=>vc.mi(r,n),this.serializer)}}class Ph{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>__(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R4.bind(null,this.syncEngine),await i4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a4}()}createDatastore(e){const n=ou(e.databaseInfo.databaseId),r=function(i){return new BL(i)}(e.databaseInfo);return function(i,o,a,c){return new WL(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new GL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>__(this.syncEngine,n,0),function(){return h_.v()?new h_:new FL}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,f){const h=new g4(s,i,o,a,c,u);return f&&(h.gu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);te(js,"RemoteStore shutting down."),i.Ea.add(5),await Da(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ph.provider={build:()=>new Ph};/**
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
 */class O4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):yr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const as="FirestoreClient";class N4{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=xt.UNAUTHENTICATED,this.clientId=Bd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(as,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(as,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mf(t,e){t.asyncQueue.verifyOperationInProgress(),te(as,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function E_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x4(t);te(as,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>p_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>p_(e.remoteStore,s)),t._onlineComponents=e}async function x4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(as,"Using user provided OfflineComponentProvider");try{await mf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await mf(t,new bc)}}else te(as,"Using default OfflineComponentProvider"),await mf(t,new k4(void 0));return t._offlineComponents}async function LT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(as,"Using user provided OnlineComponentProvider"),await E_(t,t._uninitializedComponentsProvider._online)):(te(as,"Using default OnlineComponentProvider"),await E_(t,new Ph))),t._onlineComponents}function D4(t){return LT(t).then(e=>e.syncEngine)}async function L4(t){const e=await LT(t),n=e.eventManager;return n.onListen=y4.bind(null,e.syncEngine),n.onUnlisten=E4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=b4.bind(null,e.syncEngine),n}function M4(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new O4({next:p=>{f.Nu(),o.enqueueAndForget(()=>c4(i,h)),p.fromCache&&c.source==="server"?u.reject(new oe(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new h4(a,f,{includeMetadataChanges:!0,qa:!0});return l4(i,h)}(await L4(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function MT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const b_=new Map;/**
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
 */const VT="firestore.googleapis.com",w_=!0;class T_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=VT,this.ssl=w_}else this.host=e.host,this.ssl=e.ssl??w_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uL)throw new oe(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new oe(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new oe(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new oe(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vx;switch(r.type){case"firstParty":return new $x(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b_.get(n);r&&(te("ComponentProvider","Removing Datastore"),b_.delete(n),r.terminate())}(this),Promise.resolve()}}function V4(t,e,n,r={}){var u;t=$i(t,cu);const s=fs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Cd(`https://${a}`),Pd("Firestore",!0)),i.host!==VT&&i.host!==a&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:s,emulatorOptions:r};if(!Ms(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,h;if(typeof r.mockUserToken=="string")f=r.mockUserToken,h=xt.MOCK_USER;else{f=Lb(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new oe(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new xt(p)}t._authCredentials=new Fx(new Rw(f,h))}}/**
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
 */class uu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uu(this.firestore,e,this._query)}}class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Oa(n,mt._jsonSchema))return new mt(e,r||null,new fe(ze.fromString(n.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:at("string",mt._jsonSchemaVersion),referencePath:at("string")};class es extends uu{constructor(e,n,r){super(e,n,Ww(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new fe(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function Y9(t,e,...n){if(t=et(t),Cw("collection","path",e),t instanceof cu){const r=ze.fromString(e,...n);return Vy(r),new es(t,null,r)}{if(!(t instanceof mt||t instanceof es))throw new oe(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Vy(r),new es(t.firestore,null,r)}}function Q9(t,e,...n){if(t=et(t),arguments.length===1&&(e=Bd.newId()),Cw("doc","path",e),t instanceof cu){const r=ze.fromString(e,...n);return My(r),new mt(t,null,new fe(r))}{if(!(t instanceof mt||t instanceof es))throw new oe(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return My(r),new mt(t.firestore,t instanceof es?t.converter:null,new fe(r))}}/**
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
 */const I_="AsyncQueue";class A_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vT(this,"async_queue_retry"),this._c=()=>{const r=pf();r&&te(I_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=pf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=pf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!to(e))throw e;te(I_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,yr("INTERNAL UNHANDLED ERROR: ",S_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=lp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&me(47125,{Pc:S_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function S_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fu extends cu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new A_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function F4(t,e){const n=typeof t=="object"?t:Nd(),r=typeof t=="string"?t:hc,s=Wc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Nb("firestore");i&&V4(s,...i)}return s}function dp(t){if(t._terminated)throw new oe(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||U4(t),t._firestoreClient}function U4(t){var r,s,i;const e=t._freezeSettings(),n=function(a,c,u,f){return new sD(a,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,MT(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new N4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(Rt.fromBase64String(e))}catch(n){throw new oe(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Oa(e,hn._jsonSchema))return hn.fromBase64String(e.bytes)}}hn._jsonSchemaVersion="firestore/bytes/1.0",hn._jsonSchema={type:at("string",hn._jsonSchemaVersion),bytes:at("string")};/**
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
 */class hu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pp{constructor(e){this._methodName=e}}/**
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
 */class qn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qn._jsonSchemaVersion}}static fromJSON(e){if(Oa(e,qn._jsonSchema))return new qn(e.latitude,e.longitude)}}qn._jsonSchemaVersion="firestore/geoPoint/1.0",qn._jsonSchema={type:at("string",qn._jsonSchemaVersion),latitude:at("number"),longitude:at("number")};/**
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
 */class Wn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Oa(e,Wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wn(e.vectorValues);throw new oe(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wn._jsonSchemaVersion="firestore/vectorValue/1.0",Wn._jsonSchema={type:at("string",Wn._jsonSchemaVersion),vectorValues:at("object")};/**
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
 */const j4=/^__.*__$/;class $4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Na(e,this.data,n,this.fieldTransforms)}}class FT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:t})}}class mp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new mp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(UT(this.Ac)&&j4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class B4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ou(e)}Cc(e,n,r,s=!1){return new mp({Ac:e,methodName:n,Dc:r,path:At.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jT(t){const e=t._freezeSettings(),n=ou(t._databaseId);return new B4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $T(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);gp("Data must be an object, but it was:",o,r);const a=BT(r,o);let c,u;if(i.merge)c=new en(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const h of i.mergeFields){const p=kh(e,h,n);if(!o.contains(p))throw new oe(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);zT(f,p)||f.push(p)}c=new en(f),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new $4(new Yt(a),c,u)}class du extends pp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof du}}function H4(t,e,n,r){const s=t.Cc(1,e,n);gp("Data must be an object, but it was:",s,r);const i=[],o=Yt.empty();ds(r,(c,u)=>{const f=yp(e,c,n);u=et(u);const h=s.yc(f);if(u instanceof du)i.push(f);else{const p=pu(u,h);p!=null&&(i.push(f),o.set(f,p))}});const a=new en(i);return new FT(o,a,s.fieldTransforms)}function z4(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[kh(e,r,n)],c=[s];if(i.length%2!=0)throw new oe(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(kh(e,i[p])),c.push(i[p+1]);const u=[],f=Yt.empty();for(let p=a.length-1;p>=0;--p)if(!zT(u,a[p])){const g=a[p];let y=c[p];y=et(y);const _=o.yc(g);if(y instanceof du)u.push(g);else{const P=pu(y,_);P!=null&&(u.push(g),f.set(g,P))}}const h=new en(u);return new FT(f,h,o.fieldTransforms)}function pu(t,e){if(HT(t=et(t)))return gp("Unsupported field value:",e,t),BT(t,e);if(t instanceof pp)return function(r,s){if(!UT(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=pu(a,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:_c(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_c(s.serializer,i)}}if(r instanceof qn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:lT(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wn)return function(o,a){return{mapValue:{fields:{[Vw]:{stringValue:Fw},[dc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Yd(a.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Hd(r)}`)}(t,e)}function BT(t,e){const n={};return Ow(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,s)=>{const i=pu(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function HT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof qn||t instanceof hn||t instanceof mt||t instanceof pp||t instanceof Wn)}function gp(t,e,n){if(!HT(n)||!Pw(n)){const r=Hd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function kh(t,e,n){if((e=et(e))instanceof hu)return e._internalPath;if(typeof e=="string")return yp(t,e);throw wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const q4=new RegExp("[~\\*/\\[\\]]");function yp(t,e,n){if(e.search(q4)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hu(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new oe(B.INVALID_ARGUMENT,a+t+c)}function zT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(WT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class W4 extends qT{data(){return super.data()}}function WT(t,e){return typeof e=="string"?yp(t,e):e instanceof hu?e._internalPath:e._delegate._internalPath}/**
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
 */function K4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class G4{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[dc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>rt(o.doubleValue));return new Wn(n)}convertGeoPoint(e){return new qn(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=rs(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);De(pT(r),9688,{name:e});const s=new da(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||yr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function KT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class vl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ri extends qT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(WT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ri._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ri._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ri._jsonSchema={type:at("string",Ri._jsonSchemaVersion),bundleSource:at("string","DocumentSnapshot"),bundleName:at("string"),bundle:at("string")};class Vl extends Ri{data(e={}){return super.data(e)}}class Ci{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vl(this._firestore,this._userDataWriter,r.key,r,new vl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Vl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Vl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:Y4(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ci._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Y4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}Ci._jsonSchemaVersion="firestore/querySnapshot/1.0",Ci._jsonSchema={type:at("string",Ci._jsonSchemaVersion),bundleSource:at("string","QuerySnapshot"),bundleName:at("string"),bundle:at("string")};class Q4 extends G4{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function J9(t){t=$i(t,uu);const e=$i(t.firestore,fu),n=dp(e),r=new Q4(e);return K4(t._query),M4(n,t._query).then(s=>new Ci(e,r,t,s))}function X9(t,e,n){t=$i(t,mt);const r=$i(t.firestore,fu),s=KT(t.converter,e,n);return GT(r,[$T(jT(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function GT(t,e){return function(r,s){const i=new Zr;return r.asyncQueue.enqueueAndForget(async()=>w4(await D4(r),s,i)),i.promise}(dp(t),e)}/**
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
 */class J4{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=jT(e)}set(e,n,r){this._verifyNotCommitted();const s=gf(e,this._firestore),i=KT(s.converter,n,r),o=$T(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,pn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=gf(e,this._firestore);let o;return o=typeof(n=et(n))=="string"||n instanceof hu?z4(this._dataReader,"WriteBatch.update",i._key,n,r,s):H4(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,pn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=gf(e,this._firestore);return this._mutations=this._mutations.concat(new Qd(n._key,pn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gf(t,e){if((t=et(t)).firestore!==e)throw new oe(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function Z9(t){return dp(t=$i(t,fu)),new J4(t,e=>GT(t,e))}(function(e,n=!0){(function(s){Zi=s})(Ws),Vs(new ts("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new fu(new Ux(r.getProvider("auth-internal")),new Bx(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),jn(Ny,xy,e),jn(Ny,xy,"esm2020")})();/**
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
 */const YT="firebasestorage.googleapis.com",QT="storageBucket",X4=2*60*1e3,Z4=10*60*1e3;/**
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
 */class nt extends Qn{constructor(e,n,r=0){super(yf(e),`Firebase Storage: ${n} (${yf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tt||(tt={}));function yf(t){return"storage/"+t}function _p(){const t="An unknown error occurred, please check the error payload for server response.";return new nt(tt.UNKNOWN,t)}function eM(t){return new nt(tt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tM(t){return new nt(tt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(tt.UNAUTHENTICATED,t)}function rM(){return new nt(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sM(t){return new nt(tt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function iM(){return new nt(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oM(){return new nt(tt.CANCELED,"User canceled the upload/download.")}function aM(t){return new nt(tt.INVALID_URL,"Invalid URL '"+t+"'.")}function lM(t){return new nt(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cM(){return new nt(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+QT+"' property when initializing the app?")}function uM(){return new nt(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function fM(){return new nt(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hM(t){return new nt(tt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Oh(t){return new nt(tt.INVALID_ARGUMENT,t)}function JT(){return new nt(tt.APP_DELETED,"The Firebase app was deleted.")}function dM(t){return new nt(tt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ko(t,e){return new nt(tt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function wo(t){throw new nt(tt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(r.path==="")return r;throw lM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${f}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},_=n===YT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",S=new RegExp(`^https?://${_}/${s}/${P}`,"i"),v=[{regex:a,indices:c,postModify:i},{regex:g,indices:y,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<v.length;C++){const D=v[C],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let E=M[D.indices.path];E||(E=""),r=new tn(T,E),D.postModify(r);break}}if(r==null)throw aM(e);return r}}class pM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function f(...P){u||(u=!0,e.apply(null,P))}function h(P){s=setTimeout(()=>{s=null,t(g,c())},P)}function p(){i&&clearTimeout(i)}function g(P,...S){if(u){p();return}if(P){p(),f.call(null,P,...S);return}if(c()||o){p(),f.call(null,P,...S);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let y=!1;function _(P){y||(y=!0,p(),!u&&(s!==null?(P||(a=2),clearTimeout(s),h(0)):P||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function gM(t){t(!1)}/**
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
 */function yM(t){return t!==void 0}function _M(t){return typeof t=="object"&&!Array.isArray(t)}function vp(t){return typeof t=="string"||t instanceof String}function R_(t){return Ep()&&t instanceof Blob}function Ep(){return typeof Blob<"u"}function C_(t,e,n,r){if(r<e)throw Oh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Oh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function bp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function XT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ns;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ns||(Ns={}));/**
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
 */function vM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class EM{constructor(e,n,r,s,i,o,a,c,u,f,h,p=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=h,this.retry=p,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,_)=>{this.resolve_=y,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new El(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ns.NO_ERROR,c=i.getStatus();if(!a||vM(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ns.ABORT;r(!1,new El(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new El(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());yM(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=_p();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?JT():oM();o(c)}else{const c=iM();o(c)}};this.canceled_?n(!1,new El(!1,null,!0)):this.backoffId_=mM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class El{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function IM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AM(t,e,n,r,s,i,o=!0,a=!1){const c=XT(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return TM(f,e),bM(f,n),wM(f,i),IM(f,r),new EM(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function SM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function RM(...t){const e=SM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ep())return new Blob(t);throw new nt(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function CM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function PM(t){if(typeof atob>"u")throw hM("base-64");return atob(t)}/**
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
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _f{constructor(e,n){this.data=e,this.contentType=n||null}}function kM(t,e){switch(t){case Mn.RAW:return new _f(ZT(e));case Mn.BASE64:case Mn.BASE64URL:return new _f(e0(t,e));case Mn.DATA_URL:return new _f(NM(e),xM(e))}throw _p()}function ZT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function OM(t){let e;try{e=decodeURIComponent(t)}catch{throw Ko(Mn.DATA_URL,"Malformed data URL.")}return ZT(e)}function e0(t,e){switch(t){case Mn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ko(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ko(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PM(e)}catch(s){throw s.message.includes("polyfill")?s:Ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class t0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ko(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=DM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function NM(t){const e=new t0(t);return e.base64?e0(Mn.BASE64,e.rest):OM(e.rest)}function xM(t){return new t0(t).contentType}function DM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Hr{constructor(e,n){let r=0,s="";R_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(R_(this.data_)){const r=this.data_,s=CM(r,e,n);return s===null?null:new Hr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hr(r,!0)}}static getBlob(...e){if(Ep()){const n=e.map(r=>r instanceof Hr?r.data_:r);return new Hr(RM.apply(null,n))}else{const n=e.map(o=>vp(o)?kM(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Hr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function n0(t){let e;try{e=JSON.parse(t)}catch{return null}return _M(e)?e:null}/**
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
 */function LM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function r0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function VM(t,e){return e}class $t{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||VM}}let bl=null;function FM(t){return!vp(t)||t.length<2?t:r0(t)}function s0(){if(bl)return bl;const t=[];t.push(new $t("bucket")),t.push(new $t("generation")),t.push(new $t("metageneration")),t.push(new $t("name","fullPath",!0));function e(i,o){return FM(o)}const n=new $t("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new $t("size");return s.xform=r,t.push(s),t.push(new $t("timeCreated")),t.push(new $t("updated")),t.push(new $t("md5Hash",null,!0)),t.push(new $t("cacheControl",null,!0)),t.push(new $t("contentDisposition",null,!0)),t.push(new $t("contentEncoding",null,!0)),t.push(new $t("contentLanguage",null,!0)),t.push(new $t("contentType",null,!0)),t.push(new $t("metadata","customMetadata",!0)),bl=t,bl}function UM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new tn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function jM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return UM(r,t),r}function i0(t,e,n){const r=n0(e);return r===null?null:jM(t,r,n)}function $M(t,e,n,r){const s=n0(e);if(s===null||!vp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,h=t.fullPath,p="/b/"+o(f)+"/o/"+o(h),g=bp(p,n,r),y=XT({alt:"media",token:u});return g+y})[0]}function BM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class o0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function a0(t){if(!t)throw _p()}function HM(t,e){function n(r,s){const i=i0(t,s,e);return a0(i!==null),i}return n}function zM(t,e){function n(r,s){const i=i0(t,s,e);return a0(i!==null),$M(i,s,t.host,t._protocol)}return n}function l0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=rM():s=nM():n.getStatus()===402?s=tM(t.bucket):n.getStatus()===403?s=sM(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function qM(t){const e=l0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=eM(t.path)),i.serverResponse=s.serverResponse,i}return n}function WM(t,e,n){const r=e.fullServerUrl(),s=bp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new o0(s,i,zM(t,n),o);return a.errorHandler=qM(e),a}function KM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function GM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KM(null,e)),r}function YM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let C=0;C<2;C++)v=v+Math.random().toString().slice(2);return v}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=GM(e,r,s),f=BM(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=Hr.getBlob(h,r,p);if(g===null)throw uM();const y={name:u.fullPath},_=bp(i,t.host,t._protocol),P="POST",S=t.maxUploadRetryTime,R=new o0(_,P,HM(t,n),S);return R.urlParams=y,R.headers=o,R.body=g.uploadData(),R.errorHandler=l0(e),R}class QM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ns.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ns.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ns.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw wo("cannot .send() more than once");if(fs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw wo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw wo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw wo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw wo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class JM extends QM{initXhr(){this.xhr_.responseType="text"}}function c0(){return new JM}/**
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
 */class $s{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $s(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return r0(this._location.path)}get storage(){return this._service}get parent(){const e=LM(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new $s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dM(e)}}function XM(t,e,n){t._throwIfRoot("uploadBytes");const r=YM(t.storage,t._location,s0(),new Hr(e,!0),n);return t.storage.makeRequestWithTokens(r,c0).then(s=>({metadata:s,ref:t}))}function ZM(t){t._throwIfRoot("getDownloadURL");const e=WM(t.storage,t._location,s0());return t.storage.makeRequestWithTokens(e,c0).then(n=>{if(n===null)throw fM();return n})}function eV(t,e){const n=MM(t._location.path,e),r=new tn(t._location.bucket,n);return new $s(t.storage,r)}/**
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
 */function tV(t){return/^[A-Za-z]+:\/\//.test(t)}function nV(t,e){return new $s(t,e)}function u0(t,e){if(t instanceof wp){const n=t;if(n._bucket==null)throw cM();const r=new $s(n,n._bucket);return e!=null?u0(r,e):r}else return e!==void 0?eV(t,e):t}function rV(t,e){if(e&&tV(e)){if(t instanceof wp)return nV(t,e);throw Oh("To use ref(service, url), the first argument must be a Storage instance.")}else return u0(t,e)}function P_(t,e){const n=e==null?void 0:e[QT];return n==null?null:tn.makeFromBucketSpec(n,t)}function sV(t,e,n,r={}){t.host=`${e}:${n}`;const s=fs(e);s&&(Cd(`https://${t.host}/b`),Pd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Lb(i,t.app.options.projectId))}class wp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=YT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=X4,this._maxUploadRetryTime=Z4,this._requests=new Set,s!=null?this._bucket=tn.makeFromBucketSpec(s,this._host):this._bucket=P_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=P_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $s(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new pM(JT());{const o=AM(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const k_="@firebase/storage",O_="0.14.0";/**
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
 */const f0="storage";function eU(t,e,n){return t=et(t),XM(t,e,n)}function tU(t){return t=et(t),ZM(t)}function nU(t,e){return t=et(t),rV(t,e)}function iV(t=Nd(),e){t=et(t);const r=Wc(t,f0).getImmediate({identifier:e}),s=Nb("storage");return s&&oV(r,...s),r}function oV(t,e,n,r={}){sV(t,e,n,r)}function aV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new wp(n,r,s,e,Ws)}function lV(){Vs(new ts(f0,aV,"PUBLIC").setMultipleInstances(!0)),jn(k_,O_,""),jn(k_,O_,"esm2020")}lV();const cV=nn(t=>{const e=qs(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Fb(n),s=_x(r),i=F4(r),o=iV(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Nh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function uV(t){if(Array.isArray(t))return t}function fV(t){if(Array.isArray(t))return Nh(t)}function hV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function dV(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h0(r.key),r)}}function pV(t,e,n){return e&&dV(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Fl(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Tp(t))||e){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){a=!0,i=c},f:function(){try{o||n.return==null||n.return()}finally{if(a)throw i}}}}function Ae(t,e,n){return(e=h0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,o,a=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(f){u=!0,s=f}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return a}}function yV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N_(Object(n),!0).forEach(function(r){Ae(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mu(t,e){return uV(t)||gV(t,e)||Tp(t,e)||yV()}function Rn(t){return fV(t)||mV(t)||Tp(t)||_V()}function vV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function h0(t){var e=vV(t,"string");return typeof e=="symbol"?e:e+""}function Tc(t){"@babel/helpers - typeof";return Tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tc(t)}function Tp(t,e){if(t){if(typeof t=="string")return Nh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Nh(t,e):void 0}}var x_=function(){},Ip={},d0={},p0=null,m0={mark:x_,measure:x_};try{typeof window<"u"&&(Ip=window),typeof document<"u"&&(d0=document),typeof MutationObserver<"u"&&(p0=MutationObserver),typeof performance<"u"&&(m0=performance)}catch{}var EV=Ip.navigator||{},D_=EV.userAgent,L_=D_===void 0?"":D_,ls=Ip,We=d0,M_=p0,wl=m0;ls.document;var Ir=!!We.documentElement&&!!We.head&&typeof We.addEventListener=="function"&&typeof We.createElement=="function",g0=~L_.indexOf("MSIE")||~L_.indexOf("Trident/"),vf,bV=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wV=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,y0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},TV={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},_0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ft="classic",Ma="duotone",v0="sharp",E0="sharp-duotone",b0="chisel",w0="etch",T0="jelly",I0="jelly-duo",A0="jelly-fill",S0="notdog",R0="notdog-duo",C0="slab",P0="slab-press",k0="thumbprint",O0="whiteboard",IV="Classic",AV="Duotone",SV="Sharp",RV="Sharp Duotone",CV="Chisel",PV="Etch",kV="Jelly",OV="Jelly Duo",NV="Jelly Fill",xV="Notdog",DV="Notdog Duo",LV="Slab",MV="Slab Press",VV="Thumbprint",FV="Whiteboard",N0=[Ft,Ma,v0,E0,b0,w0,T0,I0,A0,S0,R0,C0,P0,k0,O0];vf={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(vf,Ft,IV),Ma,AV),v0,SV),E0,RV),b0,CV),w0,PV),T0,kV),I0,OV),A0,NV),S0,xV),Ae(Ae(Ae(Ae(Ae(vf,R0,DV),C0,LV),P0,MV),k0,VV),O0,FV);var UV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},jV={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},$V=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),BV={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},x0=["fak","fa-kit","fakd","fa-kit-duotone"],V_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},HV=["kit"],zV="kit",qV="kit-duotone",WV="Kit",KV="Kit Duotone";Ae(Ae({},zV,WV),qV,KV);var GV={kit:{"fa-kit":"fak"}},YV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},QV={kit:{fak:"fa-kit"}},F_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ef,Tl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},JV=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],XV="classic",ZV="duotone",e6="sharp",t6="sharp-duotone",n6="chisel",r6="etch",s6="jelly",i6="jelly-duo",o6="jelly-fill",a6="notdog",l6="notdog-duo",c6="slab",u6="slab-press",f6="thumbprint",h6="whiteboard",d6="Classic",p6="Duotone",m6="Sharp",g6="Sharp Duotone",y6="Chisel",_6="Etch",v6="Jelly",E6="Jelly Duo",b6="Jelly Fill",w6="Notdog",T6="Notdog Duo",I6="Slab",A6="Slab Press",S6="Thumbprint",R6="Whiteboard";Ef={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ef,XV,d6),ZV,p6),e6,m6),t6,g6),n6,y6),r6,_6),s6,v6),i6,E6),o6,b6),a6,w6),Ae(Ae(Ae(Ae(Ae(Ef,l6,T6),c6,I6),u6,A6),f6,S6),h6,R6);var C6="kit",P6="kit-duotone",k6="Kit",O6="Kit Duotone";Ae(Ae({},C6,k6),P6,O6);var N6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},x6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},xh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},D6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],D0=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(JV,D6),L6=["solid","regular","light","thin","duotone","brands","semibold"],L0=[1,2,3,4,5,6,7,8,9,10],M6=L0.concat([11,12,13,14,15,16,17,18,19,20]),V6=["aw","fw","pull-left","pull-right"],F6=[].concat(Rn(Object.keys(x6)),L6,V6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Tl.GROUP,Tl.SWAP_OPACITY,Tl.PRIMARY,Tl.SECONDARY]).concat(L0.map(function(t){return"".concat(t,"x")})).concat(M6.map(function(t){return"w-".concat(t)})),U6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},vr="___FONT_AWESOME___",Dh=16,M0="fa",V0="svg-inline--fa",Bs="data-fa-i2svg",Lh="data-fa-pseudo-element",j6="data-fa-pseudo-element-pending",Ap="data-prefix",Sp="data-icon",U_="fontawesome-i2svg",$6="async",B6=["HTML","HEAD","STYLE","SCRIPT"],F0=["::before","::after",":before",":after"],U0=function(){try{return!0}catch{return!1}}();function Va(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ft]}})}var j0=W({},y0);j0[Ft]=W(W(W(W({},{"fa-duotone":"duotone"}),y0[Ft]),V_.kit),V_["kit-duotone"]);var H6=Va(j0),Mh=W({},BV);Mh[Ft]=W(W(W(W({},{duotone:"fad"}),Mh[Ft]),F_.kit),F_["kit-duotone"]);var j_=Va(Mh),Vh=W({},xh);Vh[Ft]=W(W({},Vh[Ft]),QV.kit);var $0=Va(Vh),Fh=W({},N6);Fh[Ft]=W(W({},Fh[Ft]),GV.kit);Va(Fh);var z6=bV,B0="fa-layers-text",q6=wV,W6=W({},UV);Va(W6);var K6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bf=TV,G6=[].concat(Rn(HV),Rn(F6)),Go=ls.FontAwesomeConfig||{};function Y6(t){var e=We.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Q6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(We&&typeof We.querySelector=="function"){var J6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];J6.forEach(function(t){var e=mu(t,2),n=e[0],r=e[1],s=Q6(Y6(n));s!=null&&(Go[r]=s)})}var H0={styleDefault:"solid",familyDefault:Ft,cssPrefix:M0,replacementClass:V0,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Go.familyPrefix&&(Go.cssPrefix=Go.familyPrefix);var Wi=W(W({},H0),Go);Wi.autoReplaceSvg||(Wi.observeMutations=!1);var ue={};Object.keys(H0).forEach(function(t){Object.defineProperty(ue,t,{enumerable:!0,set:function(n){Wi[t]=n,Yo.forEach(function(r){return r(ue)})},get:function(){return Wi[t]}})});Object.defineProperty(ue,"familyPrefix",{enumerable:!0,set:function(e){Wi.cssPrefix=e,Yo.forEach(function(n){return n(ue)})},get:function(){return Wi.cssPrefix}});ls.FontAwesomeConfig=ue;var Yo=[];function X6(t){return Yo.push(t),function(){Yo.splice(Yo.indexOf(t),1)}}var si=Dh,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Z6(t){if(!(!t||!Ir)){var e=We.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=We.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return We.head.insertBefore(e,r),t}}var eF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $_(){for(var t=12,e="";t-- >0;)e+=eF[Math.random()*62|0];return e}function ro(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rp(t){return t.classList?ro(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function z0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tF(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(z0(t[n]),'" ')},"").trim()}function gu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Cp(t){return t.size!==Vn.size||t.x!==Vn.x||t.y!==Vn.y||t.rotate!==Vn.rotate||t.flipX||t.flipY}function nF(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function rF(t){var e=t.transform,n=t.width,r=n===void 0?Dh:n,s=t.height,i=s===void 0?Dh:s,o="";return g0?o+="translate(".concat(e.x/si-r/2,"em, ").concat(e.y/si-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/si,"em), calc(-50% + ").concat(e.y/si,"em)) "),o+="scale(".concat(e.size/si*(e.flipX?-1:1),", ").concat(e.size/si*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var sF=`:root, :host {
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
}`;function q0(){var t=M0,e=V0,n=ue.cssPrefix,r=ue.replacementClass,s=sF;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var B_=!1;function wf(){ue.autoAddCss&&!B_&&(Z6(q0()),B_=!0)}var iF={mixout:function(){return{dom:{css:q0,insertCss:wf}}},hooks:function(){return{beforeDOMElementCreation:function(){wf()},beforeI2svg:function(){wf()}}}},Er=ls||{};Er[vr]||(Er[vr]={});Er[vr].styles||(Er[vr].styles={});Er[vr].hooks||(Er[vr].hooks={});Er[vr].shims||(Er[vr].shims=[]);var bn=Er[vr],W0=[],K0=function(){We.removeEventListener("DOMContentLoaded",K0),Ic=1,W0.map(function(e){return e()})},Ic=!1;Ir&&(Ic=(We.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(We.readyState),Ic||We.addEventListener("DOMContentLoaded",K0));function oF(t){Ir&&(Ic?setTimeout(t,0):W0.push(t))}function Fa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?z0(t):"<".concat(e," ").concat(tF(r),">").concat(i.map(Fa).join(""),"</").concat(e,">")}function H_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Tf=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=a(f,e[u],u,e);return f};function G0(t){return Rn(t).length!==1?null:t.codePointAt(0).toString(16)}function z_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function Y0(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=z_(e);typeof bn.hooks.addPack=="function"&&!s?bn.hooks.addPack(t,z_(e)):bn.styles[t]=W(W({},bn.styles[t]||{}),i),t==="fas"&&Y0("fa",e)}var ya=bn.styles,aF=bn.shims,Q0=Object.keys($0),lF=Q0.reduce(function(t,e){return t[e]=Object.keys($0[e]),t},{}),Pp=null,J0={},X0={},Z0={},eI={},tI={};function cF(t){return~G6.indexOf(t)}function uF(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!cF(s)?s:null}var nI=function(){var e=function(i){return Tf(ya,function(o,a,c){return o[c]=Tf(a,i,{}),o},{})};J0=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),X0=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),tI=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in ya||ue.autoFetchSvg,r=Tf(aF,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});Z0=r.names,eI=r.unicodes,Pp=yu(ue.styleDefault,{family:ue.familyDefault})};X6(function(t){Pp=yu(t.styleDefault,{family:ue.familyDefault})});nI();function kp(t,e){return(J0[t]||{})[e]}function fF(t,e){return(X0[t]||{})[e]}function Rs(t,e){return(tI[t]||{})[e]}function rI(t){return Z0[t]||{prefix:null,iconName:null}}function hF(t){var e=eI[t],n=kp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cs(){return Pp}var sI=function(){return{prefix:null,iconName:null,rest:[]}};function dF(t){var e=Ft,n=Q0.reduce(function(r,s){return r[s]="".concat(ue.cssPrefix,"-").concat(s),r},{});return N0.forEach(function(r){(t.includes(n[r])||t.some(function(s){return lF[r].includes(s)}))&&(e=r)}),e}function yu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ft:n,s=H6[r][t];if(r===Ma&&!t)return"fad";var i=j_[r][t]||j_[r][s],o=t in bn.styles?t:null,a=i||o||null;return a}function pF(t){var e=[],n=null;return t.forEach(function(r){var s=uF(ue.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function q_(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var W_=D0.concat(x0);function _u(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=null,i=q_(t.filter(function(g){return W_.includes(g)})),o=q_(t.filter(function(g){return!W_.includes(g)})),a=i.filter(function(g){return s=g,!_0.includes(g)}),c=mu(a,1),u=c[0],f=u===void 0?null:u,h=dF(i),p=W(W({},pF(o)),{},{prefix:yu(f,{family:h})});return W(W(W({},p),_F({values:t,family:h,styles:ya,config:ue,canonical:p,givenPrefix:s})),mF(r,s,p))}function mF(t,e,n){var r=n.prefix,s=n.iconName;if(t||!r||!s)return{prefix:r,iconName:s};var i=e==="fa"?rI(s):{},o=Rs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!ya.far&&ya.fas&&!ue.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var gF=N0.filter(function(t){return t!==Ft||t!==Ma}),yF=Object.keys(xh).filter(function(t){return t!==Ft}).map(function(t){return Object.keys(xh[t])}).flat();function _F(t){var e=t.values,n=t.family,r=t.canonical,s=t.givenPrefix,i=s===void 0?"":s,o=t.styles,a=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,f=n===Ma,h=e.includes("fa-duotone")||e.includes("fad"),p=u.familyDefault==="duotone",g=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(h||p||g)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&gF.includes(n)){var y=Object.keys(a).find(function(P){return yF.includes(P)});if(y||u.autoFetchSvg){var _=$V.get(n).defaultShortPrefixId;r.prefix=_,r.iconName=Rs(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=cs()||"fas"),r}var vF=function(){function t(){hV(this,t),this.definitions={}}return pV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=W(W({},n.definitions[a]||{}),o[a]),Y0(a,o[a]),nI()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}])}(),K_=[],pi={},Pi={},EF=Object.keys(Pi);function bF(t,e){var n=e.mixoutsTo;return K_=t,pi={},Object.keys(Pi).forEach(function(r){EF.indexOf(r)===-1&&delete Pi[r]}),K_.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Tc(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){pi[o]||(pi[o]=[]),pi[o].push(i[o])})}r.provides&&r.provides(Pi)}),n}function Uh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=pi[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Hs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=pi[t]||[];s.forEach(function(i){i.apply(null,n)})}function us(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Pi[t]?Pi[t].apply(null,e):void 0}function jh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||cs();if(e)return e=Rs(n,e)||e,H_(iI.definitions,n,e)||H_(bn.styles,n,e)}var iI=new vF,wF=function(){ue.autoReplaceSvg=!1,ue.observeMutations=!1,Hs("noAuto")},TF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ir?(Hs("beforeI2svg",e),us("pseudoElements2svg",e),us("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ue.autoReplaceSvg===!1&&(ue.autoReplaceSvg=!0),ue.observeMutations=!0,oF(function(){AF({autoReplaceSvgRoot:n}),Hs("watch",e)})}},IF={icon:function(e){if(e===null)return null;if(Tc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Rs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=yu(e[0]);return{prefix:r,iconName:Rs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ue.cssPrefix,"-"))>-1||e.match(z6))){var s=_u(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||cs(),iconName:Rs(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=cs();return{prefix:i,iconName:Rs(i,e)||e}}}},rn={noAuto:wF,config:ue,dom:TF,parse:IF,library:iI,findIconDefinition:jh,toHtml:Fa},AF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?We:n;(Object.keys(bn.styles).length>0||ue.autoFetchSvg)&&Ir&&ue.autoReplaceSvg&&rn.dom.i2svg({node:r})};function vu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Fa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ir){var r=We.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function SF(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(Cp(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};s.style=gu(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function RF(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(ue.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function CF(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Op(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.maskId,u=t.extra,f=t.watchable,h=f===void 0?!1:f,p=r.found?r:n,g=p.width,y=p.height,_=[ue.replacementClass,i?"".concat(ue.cssPrefix,"-").concat(i):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),P={children:[],attributes:W(W({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:_,role:u.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(y)})};!CF(u.attributes)&&!u.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),h&&(P.attributes[Bs]="");var S=W(W({},P),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:W({},u.styles)}),R=r.found&&n.found?us("generateAbstractMask",S)||{children:[],attributes:{}}:us("generateAbstractIcon",S)||{children:[],attributes:{}},v=R.children,C=R.attributes;return S.children=v,S.attributes=C,a?RF(S):SF(S)}function G_(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.extra,o=t.watchable,a=o===void 0?!1:o,c=W(W({},i.attributes),{},{class:i.classes.join(" ")});a&&(c[Bs]="");var u=W({},i.styles);Cp(s)&&(u.transform=rF({transform:s,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=gu(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),h}function PF(t){var e=t.content,n=t.extra,r=W(W({},n.attributes),{},{class:n.classes.join(" ")}),s=gu(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var If=bn.styles;function $h(t){var e=t[0],n=t[1],r=t.slice(4),s=mu(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(ue.cssPrefix,"-").concat(bf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(bf.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(bf.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var kF={found:!1,width:512,height:512};function OF(t,e){!U0&&!ue.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Bh(t,e){var n=e;return e==="fa"&&ue.styleDefault!==null&&(e=cs()),new Promise(function(r,s){if(n==="fa"){var i=rI(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&If[e]&&If[e][t]){var o=If[e][t];return r($h(o))}OF(t,e),r(W(W({},kF),{},{icon:ue.showMissingIcons&&t?us("missingIconAbstract")||{}:{}}))})}var Y_=function(){},Hh=ue.measurePerformance&&wl&&wl.mark&&wl.measure?wl:{mark:Y_,measure:Y_},ko='FA "7.0.0"',NF=function(e){return Hh.mark("".concat(ko," ").concat(e," begins")),function(){return oI(e)}},oI=function(e){Hh.mark("".concat(ko," ").concat(e," ends")),Hh.measure("".concat(ko," ").concat(e),"".concat(ko," ").concat(e," begins"),"".concat(ko," ").concat(e," ends"))},Np={begin:NF,end:oI},Ul=function(){};function Q_(t){var e=t.getAttribute?t.getAttribute(Bs):null;return typeof e=="string"}function xF(t){var e=t.getAttribute?t.getAttribute(Ap):null,n=t.getAttribute?t.getAttribute(Sp):null;return e&&n}function DF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ue.replacementClass)}function LF(){if(ue.autoReplaceSvg===!0)return jl.replace;var t=jl[ue.autoReplaceSvg];return t||jl.replace}function MF(t){return We.createElementNS("http://www.w3.org/2000/svg",t)}function VF(t){return We.createElement(t)}function aI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?MF:VF:n;if(typeof t=="string")return We.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(aI(o,{ceFn:r}))}),s}function FF(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(aI(s),n)}),n.getAttribute(Bs)===null&&ue.keepOriginalSource){var r=We.createComment(FF(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Rp(n).indexOf(ue.replacementClass))return jl.replace(e);var s=new RegExp("".concat(ue.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===ue.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Fa(a)}).join(`
`);n.setAttribute(Bs,""),n.innerHTML=o}};function J_(t){t()}function lI(t,e){var n=typeof e=="function"?e:Ul;if(t.length===0)n();else{var r=J_;ue.mutateApproach===$6&&(r=ls.requestAnimationFrame||J_),r(function(){var s=LF(),i=Np.begin("mutate");t.map(s),i(),n()})}}var xp=!1;function cI(){xp=!0}function zh(){xp=!1}var Ac=null;function X_(t){if(M_&&ue.observeMutations){var e=t.treeCallback,n=e===void 0?Ul:e,r=t.nodeCallback,s=r===void 0?Ul:r,i=t.pseudoElementsCallback,o=i===void 0?Ul:i,a=t.observeMutationsRoot,c=a===void 0?We:a;Ac=new M_(function(u){if(!xp){var f=cs();ro(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Q_(h.addedNodes[0])&&(ue.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&ue.searchPseudoElements&&o([h.target],!0),h.type==="attributes"&&Q_(h.target)&&~K6.indexOf(h.attributeName))if(h.attributeName==="class"&&xF(h.target)){var p=_u(Rp(h.target)),g=p.prefix,y=p.iconName;h.target.setAttribute(Ap,g||f),y&&h.target.setAttribute(Sp,y)}else DF(h.target)&&s(h.target)})}}),Ir&&Ac.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function UF(){Ac&&Ac.disconnect()}function jF(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function $F(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=_u(Rp(t));return s.prefix||(s.prefix=cs()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=fF(s.prefix,t.innerText)||kp(s.prefix,G0(t.innerText))),!s.iconName&&ue.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function BF(t){var e=ro(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function HF(){return{iconName:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$F(t),r=n.iconName,s=n.prefix,i=n.rest,o=BF(t),a=Uh("parseNodeAttributes",{},t),c=e.styleParser?jF(t):[];return W({iconName:r,prefix:s,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var zF=bn.styles;function uI(t){var e=ue.autoReplaceSvg==="nest"?Z_(t,{styleParser:!1}):Z_(t);return~e.extra.classes.indexOf(B0)?us("generateLayersText",t,e):us("generateSvgReplacementMutation",t,e)}function qF(){return[].concat(Rn(x0),Rn(D0))}function ev(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ir)return Promise.resolve();var n=We.documentElement.classList,r=function(h){return n.add("".concat(U_,"-").concat(h))},s=function(h){return n.remove("".concat(U_,"-").concat(h))},i=ue.autoFetchSvg?qF():_0.concat(Object.keys(zF));i.includes("fa")||i.push("fa");var o=[".".concat(B0,":not([").concat(Bs,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Bs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ro(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=Np.begin("onTree"),u=a.reduce(function(f,h){try{var p=uI(h);p&&f.push(p)}catch(g){U0||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,h){Promise.all(u).then(function(p){lI(p,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(p){c(),h(p)})})}function WF(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uI(t).then(function(n){n&&lI([n],e)})}function KF(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:jh(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:jh(s||{})),t(r,W(W({},n),{},{mask:s}))}}var GF=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Vn:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,u=n.maskId,f=u===void 0?null:u,h=n.classes,p=h===void 0?[]:h,g=n.attributes,y=g===void 0?{}:g,_=n.styles,P=_===void 0?{}:_;if(e){var S=e.prefix,R=e.iconName,v=e.icon;return vu(W({type:"icon"},e),function(){return Hs("beforeDOMElementCreation",{iconDefinition:e,params:n}),Op({icons:{main:$h(v),mask:c?$h(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:R,transform:W(W({},Vn),s),symbol:o,maskId:f,extra:{attributes:y,styles:P,classes:p}})})}},YF={mixout:function(){return{icon:KF(GF)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ev,n.nodeCallback=WF,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?We:r,i=n.callback,o=i===void 0?function(){}:i;return ev(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.prefix,o=r.transform,a=r.symbol,c=r.mask,u=r.maskId,f=r.extra;return new Promise(function(h,p){Promise.all([Bh(s,i),c.iconName?Bh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var y=mu(g,2),_=y[0],P=y[1];h([n,Op({icons:{main:_,mask:P},prefix:i,iconName:s,transform:o,symbol:a,maskId:u,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=gu(a);c.length>0&&(s.style=c);var u;return Cp(o)&&(u=us("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:s}}}},QF={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return vu({type:"layer"},function(){Hs("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(ue.cssPrefix,"-layers")].concat(Rn(i)).join(" ")},children:o}]})}}}},JF={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,i=s===void 0?[]:s,o=r.attributes,a=o===void 0?{}:o,c=r.styles,u=c===void 0?{}:c;return vu({type:"counter",content:n},function(){return Hs("beforeDOMElementCreation",{content:n,params:r}),PF({content:n.toString(),extra:{attributes:a,styles:u,classes:["".concat(ue.cssPrefix,"-layers-counter")].concat(Rn(i))}})})}}}},XF={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Vn:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,f=r.styles,h=f===void 0?{}:f;return vu({type:"text",content:n},function(){return Hs("beforeDOMElementCreation",{content:n,params:r}),G_({content:n,transform:W(W({},Vn),i),extra:{attributes:u,styles:h,classes:["".concat(ue.cssPrefix,"-layers-text")].concat(Rn(a))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.transform,i=r.extra,o=null,a=null;if(g0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,a=u.height/c}return Promise.resolve([n,G_({content:n.innerHTML,width:o,height:a,transform:s,extra:i,watchable:!0})])}}},fI=new RegExp('"',"ug"),tv=[1105920,1112319],nv=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),jV),U6),YV),qh=Object.keys(nv).reduce(function(t,e){return t[e.toLowerCase()]=nv[e],t},{}),ZF=Object.keys(qh).reduce(function(t,e){var n=qh[e];return t[e]=n[900]||Rn(Object.entries(n))[0][1],t},{});function e3(t){var e=t.replace(fI,"");return G0(Rn(e)[0]||"")}function t3(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(fI,""),s=r.codePointAt(0),i=s>=tv[0]&&s<=tv[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function n3(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(qh[n]||{})[s]||ZF[n]}function rv(t,e){var n="".concat(j6).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=ro(t.children),o=i.filter(function(M){return M.getAttribute(Lh)===e})[0],a=ls.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(q6),f=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&h!=="none"&&h!==""){var p=a.getPropertyValue("content"),g=n3(c,f),y=e3(p),_=u[0].startsWith("FontAwesome"),P=t3(a),S=kp(g,y),R=S;if(_){var v=hF(y);v.iconName&&v.prefix&&(S=v.iconName,g=v.prefix)}if(S&&!P&&(!o||o.getAttribute(Ap)!==g||o.getAttribute(Sp)!==R)){t.setAttribute(n,R),o&&t.removeChild(o);var C=HF(),D=C.extra;D.attributes[Lh]=e,Bh(S,g).then(function(M){var T=Op(W(W({},C),{},{icons:{main:M,mask:sI()},prefix:g,iconName:R,extra:D,watchable:!0})),E=We.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=T.map(function(b){return Fa(b)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function r3(t){return Promise.all([rv(t,"::before"),rv(t,"::after")])}function s3(t){return t.parentNode!==document.head&&!~B6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Lh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var i3=function(e){return!!e&&F0.some(function(n){return e.includes(n)})},o3=function(e){if(!e)return[];for(var n=new Set,r=[e],s=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var g=a[o];r=r.flatMap(function(y){return y.split(g).map(function(_){return _.replace(/,\s*$/,"").trim()})})},o=0,a=s;o<a.length;o++)i();r=r.flatMap(function(p){return p.includes("(")?p:p.split(",").map(function(g){return g.trim()})});var c=Fl(r),u;try{for(c.s();!(u=c.n()).done;){var f=u.value;if(i3(f)){var h=F0.reduce(function(p,g){return p.replace(g,"")},f);h!==""&&h!=="*"&&n.add(h)}}}catch(p){c.e(p)}finally{c.f()}return n};function sv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ir){var n;if(e)n=t;else if(ue.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,s=Fl(document.styleSheets),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;try{var a=Fl(o.cssRules),c;try{for(a.s();!(c=a.n()).done;){var u=c.value,f=o3(u.selectorText),h=Fl(f),p;try{for(h.s();!(p=h.n()).done;){var g=p.value;r.add(g)}}catch(_){h.e(_)}finally{h.f()}}}catch(_){a.e(_)}finally{a.f()}}catch(_){ue.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(_.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(_){s.e(_)}finally{s.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{n=t.querySelectorAll(y)}catch{}}return new Promise(function(_,P){var S=ro(n).filter(s3).map(r3),R=Np.begin("searchPseudoElements");cI(),Promise.all(S).then(function(){R(),zh(),_()}).catch(function(){R(),zh(),P()})})}}var a3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?We:r;ue.searchPseudoElements&&sv(s)}}},iv=!1,l3={mixout:function(){return{dom:{unwatch:function(){cI(),iv=!0}}}},hooks:function(){return{bootstrap:function(){X_(Uh("mutationObserverCallbacks",{}))},noAuto:function(){UF()},watch:function(n){var r=n.observeMutationsRoot;iv?zh():X_(Uh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ov=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},c3={mixout:function(){return{parse:{transform:function(n){return ov(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=ov(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:h,path:p};return{tag:"g",attributes:W({},g.outer),children:[{tag:"g",attributes:W({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),g.path)}]}]}}}},Af={x:0,y:0,width:"100%",height:"100%"};function av(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function u3(t){return t.tag==="g"?t.children:[t]}var f3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?_u(s.split(" ").map(function(o){return o.trim()})):sI();return i.prefix||(i.prefix=cs()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,u=i.width,f=i.icon,h=o.width,p=o.icon,g=nF({transform:c,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:W(W({},Af),{},{fill:"white"})},_=f.children?{children:f.children.map(av)}:{},P={tag:"g",attributes:W({},g.inner),children:[av(W({tag:f.tag,attributes:W(W({},f.attributes),g.path)},_))]},S={tag:"g",attributes:W({},g.outer),children:[P]},R="mask-".concat(a||$_()),v="clip-".concat(a||$_()),C={tag:"mask",attributes:W(W({},Af),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,S]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:u3(p)},C]};return r.push(D,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(R,")")},Af)}),{children:r,attributes:s}}}},h3={provides:function(e){var n=!1;ls.matchMedia&&(n=ls.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:W(W({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:W(W({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:W(W({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},d3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},p3=[iF,YF,QF,JF,XF,a3,l3,c3,f3,h3,d3];bF(p3,{mixoutsTo:rn});rn.noAuto;var m3=rn.config,g3=rn.library;rn.dom;var Wh=rn.parse;rn.findIconDefinition;rn.toHtml;var y3=rn.icon;rn.layer;rn.text;rn.counter;function lv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function or(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?lv(Object(n),!0).forEach(function(r){Wt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function v3(t){var e=_3(t,"string");return typeof e=="symbol"?e:e+""}function Sc(t){"@babel/helpers - typeof";return Sc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sc(t)}function Wt(t,e,n){return e=v3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E3(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function b3(t,e){if(t==null)return{};var n=E3(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var w3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hI={exports:{}};(function(t){(function(e){var n=function(S,R,v){if(!u(R)||h(R)||p(R)||g(R)||c(R))return R;var C,D=0,M=0;if(f(R))for(C=[],M=R.length;D<M;D++)C.push(n(S,R[D],v));else{C={};for(var T in R)Object.prototype.hasOwnProperty.call(R,T)&&(C[S(T,v)]=n(S,R[T],v))}return C},r=function(S,R){R=R||{};var v=R.separator||"_",C=R.split||/(?=[A-Z])/;return S.split(C).join(v)},s=function(S){return y(S)?S:(S=S.replace(/[\-_\s]+(.)?/g,function(R,v){return v?v.toUpperCase():""}),S.substr(0,1).toLowerCase()+S.substr(1))},i=function(S){var R=s(S);return R.substr(0,1).toUpperCase()+R.substr(1)},o=function(S,R){return r(S,R).toLowerCase()},a=Object.prototype.toString,c=function(S){return typeof S=="function"},u=function(S){return S===Object(S)},f=function(S){return a.call(S)=="[object Array]"},h=function(S){return a.call(S)=="[object Date]"},p=function(S){return a.call(S)=="[object RegExp]"},g=function(S){return a.call(S)=="[object Boolean]"},y=function(S){return S=S-0,S===S},_=function(S,R){var v=R&&"process"in R?R.process:R;return typeof v!="function"?S:function(C,D){return v(C,S,D)}},P={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(S,R){return n(_(s,R),S)},decamelizeKeys:function(S,R){return n(_(o,R),S,R)},pascalizeKeys:function(S,R){return n(_(i,R),S)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(w3)})(hI);var T3=hI.exports,I3=["class","style"];function A3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=T3.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function S3(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function dI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return dI(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=S3(f);break;case"style":c.style=A3(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=b3(n,I3);return ft(t.tag,or(or(or({},e),{},{class:s.class,style:or(or({},s.style),o)},s.attrs),a),r)}var pI=!1;try{pI=!0}catch{}function R3(){if(!pI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Sf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Wt({},t,e):{}}function C3(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Wt(Wt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function cv(t){if(t&&Sc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wh.icon)return Wh.icon(t);if(t===null)return null;if(Sc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var P3=Cn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return cv(e.icon)}),i=Ue(function(){return Sf("classes",C3(e))}),o=Ue(function(){return Sf("transform",typeof e.transform=="string"?Wh.transform(e.transform):e.transform)}),a=Ue(function(){return Sf("mask",cv(e.mask))}),c=Ue(function(){return y3(s.value,or(or(or(or({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Un(c,function(f){if(!f)return R3("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ue(function(){return c.value?dI(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const k3={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const O3={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},N3=O3,x3={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},D3={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},L3={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};m3.autoAddCss=!1;g3.add(k3,D3,N3,L3,x3);const M3=nn(t=>{t.vueApp.component("font-awesome-icon",P3)});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let mI;const Eu=t=>mI=t,gI=Symbol();function Kh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qo||(Qo={}));function V3(){const t=td(!0),e=t.run(()=>Jt({}));let n=[],r=[];const s=ld({install(i){Eu(s),s._a=i,i.provide(gI,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const yI=()=>{};function uv(t,e,n,r=yI){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ba()&&Bl(s),s}function ii(t,...e){t.slice().forEach(n=>{n(...e)})}const F3=t=>t(),fv=Symbol(),Rf=Symbol();function Gh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Kh(s)&&Kh(r)&&t.hasOwnProperty(n)&&!Je(r)&&!cr(r)?t[n]=Gh(s,r):t[n]=r}return t}const U3=Symbol();function j3(t){return!Kh(t)||!t.hasOwnProperty(U3)}const{assign:Nr}=Object;function $3(t){return!!(Je(t)&&t.effect)}function B3(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const f=PA(n.state.value[t]);return Nr(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=ld(Ue(()=>{Eu(n);const g=n._s.get(t);return o[p].call(g,g)})),h),{}))}return c=_I(t,u,e,n,r,!0),c}function _I(t,e,n={},r,s,i){let o;const a=Nr({actions:{}},n),c={deep:!0};let u,f,h=[],p=[],g;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Jt({});let _;function P(E){let b;u=f=!1,typeof E=="function"?(E(r.state.value[t]),b={type:Qo.patchFunction,storeId:t,events:g}):(Gh(r.state.value[t],E),b={type:Qo.patchObject,payload:E,storeId:t,events:g});const I=_=Symbol();Kn().then(()=>{_===I&&(u=!0)}),f=!0,ii(h,b,r.state.value[t])}const S=i?function(){const{state:b}=n,I=b?b():{};this.$patch(N=>{Nr(N,I)})}:yI;function R(){o.stop(),h=[],p=[],r._s.delete(t)}const v=(E,b="")=>{if(fv in E)return E[Rf]=b,E;const I=function(){Eu(r);const N=Array.from(arguments),O=[],A=[];function ge(se){O.push(se)}function ve(se){A.push(se)}ii(p,{args:N,name:I[Rf],store:D,after:ge,onError:ve});let Z;try{Z=E.apply(this&&this.$id===t?this:D,N)}catch(se){throw ii(A,se),se}return Z instanceof Promise?Z.then(se=>(ii(O,se),se)).catch(se=>(ii(A,se),Promise.reject(se))):(ii(O,Z),Z)};return I[fv]=!0,I[Rf]=b,I},C={_p:r,$id:t,$onAction:uv.bind(null,p),$patch:P,$reset:S,$subscribe(E,b={}){const I=uv(h,E,b.detached,()=>N()),N=o.run(()=>Un(()=>r.state.value[t],O=>{(b.flush==="sync"?f:u)&&E({storeId:t,type:Qo.direct,events:g},O)},Nr({},c,b)));return I},$dispose:R},D=br(C);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||F3)(()=>r._e.run(()=>(o=td()).run(()=>e({action:v}))));for(const E in T){const b=T[E];if(Je(b)&&!$3(b)||cr(b))i||(y&&j3(b)&&(Je(b)?b.value=y[E]:Gh(b,y[E])),r.state.value[t][E]=b);else if(typeof b=="function"){const I=v(b,E);T[E]=I,a.actions[E]=b}}return Nr(D,T),Nr(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:E=>{P(b=>{Nr(b,E)})}}),r._p.forEach(E=>{Nr(D,o.run(()=>E({store:D,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(D.$state,y),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function H3(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=Ia();return a=a||(u?gt(gI,null):null),a&&Eu(a),a=mI,a._s.has(r)||(i?_I(r,e,s,a):B3(r,s,a)),a._s.get(r)}return o.$id=r,o}function z3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function q3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const W3=nn(t=>{const e=V3();t.vueApp.use(e)});var hv=/^(GTM|G)-[0-9A-Z]+$/;function Cf(t){if(typeof t!="string"||!hv.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${hv}).${n}`)}}function Oo(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function ki(t,e){let n=document,r=n.createElement("script"),s=u=>{var f;(f=e.onReady)==null||f.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(Oo(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let c=e.parentElement??n.body;if(typeof(c==null?void 0:c.appendChild)!="function")throw new Error("parentElement must be a DOM element");return c.appendChild(r),r}function K3(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var G3=class{constructor(t){an(this,"id");an(this,"options");an(this,"scriptElements",[]);an(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)Cf(typeof e=="string"?e:e.id);else Cf(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!K3(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=ki(n,{...this.options}):r=ki(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=ki(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?Oo(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&Oo(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&Oo(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&Oo(window,this.options.dataLayerName).push(t)}},bt;function Y3(t,e={id:""}){e={trackOnNextTick:!1,...e},bt=new G3(e),t.config.globalProperties.$gtm=bt,bt.isInBrowserContext()&&(e.vueRouter&&Q3(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),bt.options.enabled&&bt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")ki(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),ki(n.id,r)}}):ki(e.id,e))),t.provide("gtm",e)}function Q3(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,c)=>{var p,g,y;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(c,4)?bt!=null&&bt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(c,8)&&(bt!=null&&bt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},h=((y=(g=e.options)==null?void 0:g.history)==null?void 0:y.base)??"";h.endsWith("/")||(h+="/"),h+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Kn(()=>{bt==null||bt.trackView(u,h,f)}):bt==null||bt.trackView(u,h,f)})}function J3(t){return{install:e=>Y3(e,t)}}const X3=nn(t=>{const e=qs().public,n=Rx("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(J3({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:St(),trackOnNextTick:!1}))}),Z3=[zC,YC,dk,mk,gk,yk,vk,Ek,wk,cV,M3,W3,X3],vI=(t="RouteProvider")=>Cn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Gr(Ls,Ln(s)),()=>e.vnode?ft(e.vnode,{ref:e.vnodeRef}):e.vnode}}),e9=vI(),dv=new WeakMap,t9=Cn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Be(),i=Jt(),o=gt(Ls,null);let a;r({pageRef:i});const c=gt(nb,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);St().beforeEach(p)}t.pageKey&&Un(()=>t.pageKey,(p,g)=>{p!==g&&s.callHook("page:loading:start")});let h=!1;{const p=St().beforeResolve(()=>{h=!1});Qi(()=>{p()})}return()=>ft(Tb,{name:t.name,route:t.route,...e},{default:p=>{const g=r9(o,p.route,p.Component),y=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!y)return u;f();return}if(u&&c&&!c.isCurrent(p.route))return u;if(g&&o&&(!c||c!=null&&c.isCurrent(o)))return y?u:null;const _=sh(p,t.pageKey),P=s9(o,p.route,p.Component);!s.isHydrating&&a===_&&!P&&Kn(()=>{h=!0,s.callHook("page:loading:end")}),a=_;const S=!!(t.transition??p.route.meta.pageTransition??yg),R=S&&n9([t.transition,p.route.meta.pageTransition,yg,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),v=t.keepalive??p.route.meta.keepalive??OR;return u=Ab(S&&R,nk(v,ft(pd,{suspensible:!0,onPending:()=>{S&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{Kn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!h&&!P)return h=!0,s.callHook("page:loading:end")}).finally(f))}},{default:()=>{const C={key:_||void 0,vnode:n.default?i9(n.default,p):p.Component,route:p.route,renderKey:_||void 0,trackRootNodes:S,vnodeRef:i};if(!v)return ft(e9,C);const D=p.Component.type,M=D;let T=dv.get(M);return T||(T=vI(D.name||D.__name),dv.set(M,T)),ft(T,C)}}))).default(),u}})}});function n9(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Rd(n.onAfterLeave):void 0}));return eb(...e)}function r9(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&sh({route:e,Component:n})!==sh({route:t,Component:n})}function s9(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function i9(t,e){const n=t(e);return n.length===1?ft(n[0]):ft(Lt,void 0,n)}const o9=Cn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>ft(zr[t.name],t.layoutProps,e.slots)}}),a9={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},l9=Cn({name:"NuxtLayout",inheritAttrs:!1,props:a9,setup(t,e){const n=Be(),r=gt(Ls),i=!r||r===jc()?Ib():r,o=Ue(()=>{let f=it(t.name)??(i==null?void 0:i.meta.layout)??"default";return f&&!(f in zr)&&t.fallback&&(f=it(t.fallback)),f}),a=xs();e.expose({layoutRef:a});const c=n.deferHydration();if(n.isHydrating){const f=n.hooks.hookOnce("app:error",c);St().beforeEach(f)}let u;return()=>{const f=o.value&&o.value in zr,h=(i==null?void 0:i.meta.layoutTransition)??kR,p=u;return u=o.value,Ab(f&&h,{default:()=>ft(pd,{suspensible:!0,onResolve:()=>{Kn(c)}},{default:()=>ft(c9,{layoutProps:OE(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:g=>g!==p&&g===o.value,hasTransition:!!h},e.slots)})}).default()}}}),c9=Cn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Gr(nb,{isCurrent:i=>n===(i.meta.layout??"default")});const r=gt(Ls);if(r&&r===jc()){const i=Ib(),o={};for(const a in i){const c=a;Object.defineProperty(o,c,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[c]:r[c]})}Gr(Ls,Ln(o))}return()=>{var i,o;return!n||typeof n=="string"&&!(n in zr)?(o=(i=e.slots).default)==null?void 0:o.call(i):ft(o9,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),bu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},u9={};function f9(t,e){const n=t9,r=l9;return zt(),ir(r,null,{default:Nn(()=>[we(n)]),_:1})}const h9=bu(u9,[["render",f9]]),d9=Ed("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),pv=H3("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Be(),r=St();try{const s=await rN(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Be();try{await aN(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Be();oN(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),p9={class:"navbar navbar-expand-md navbar-light bg-light"},m9={class:"navbar-nav"},g9={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},y9={class:"navbar-nav ml-auto"};function _9(t,e,n,r,s,i){const o=xx;return zt(),na("nav",p9,[we(o,{class:"navbar-brand",to:"/"},{default:Nn(()=>e[2]||(e[2]=[un("Who's Jimmy")])),_:1,__:[2]}),Ke("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[Ke("span",{class:"navbar-toggler-icon"},null,-1)])),Ke("div",{class:va(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[Ke("ul",m9,[we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Nn(()=>e[4]||(e[4]=[un("Bio")])),_:1,__:[4]}),we(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Nn(()=>e[5]||(e[5]=[un("Portfolio ")])),_:1,__:[5]}),we(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Nn(()=>e[6]||(e[6]=[un("For Sale")])),_:1,__:[6]}),we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Nn(()=>e[7]||(e[7]=[un("Cool Stuff")])),_:1,__:[7]}),we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Nn(()=>e[8]||(e[8]=[un("Contact Us")])),_:1,__:[8]})])],2),s.isAuth?(zt(),na("div",g9,[Ke("ul",y9,[we(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Nn(()=>[un(ed(t.user?t.user.email:""),1)]),_:1}),Ke("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):U1("",!0)])}const v9={data(){return{visible:!1,isAuth:!1}},computed:{...z3(pv,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...q3(pv,{signOut:"signOut"})}},E9=bu(v9,[["render",_9]]),b9={class:"page-footer font-small bg-light navbar-fixed-bottom"},w9={class:"container"},T9={class:"py-3 pt-3"},I9={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},A9={href:"https://www.facebook.com/whosjimmy"},S9={href:"https://twitter.com/jimmyclaws"},R9={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function C9(t,e){const n=ea("font-awesome-icon");return zt(),na("footer",b9,[Ke("div",w9,[Ke("div",T9,[Ke("a",I9,[we(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),Ke("a",A9,[we(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),Ke("a",S9,[we(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),Ke("a",R9,[we(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=Ke("div",{class:"footer-copyright text-center font-small"},[Ke("div",null,[un("© 2024 Copyright: "),Ke("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),Ke("div",null,"Disclaimer: All images are copyright to their respective owners."),Ke("div",null,[un("A "),Ke("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),un(" creation.")])],-1))])}const P9={},k9=bu(P9,[["render",C9],["__scopeId","data-v-063d9b19"]]),O9={class:"text-center my-0 page"},N9={class:"body"},x9={components:{appHeader:E9,appFooter:k9},head(){return{title:"Error"}}},D9=Cn({...x9,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Be();Cg({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{Cg({title:n.public.SITE_TITLE}),sb({redirect:"/"})};return(i,o)=>{var u;const a=ea("app-header"),c=ea("app-footer");return zt(),na("div",O9,[we(a),Ke("div",N9,[o[0]||(o[0]=Ke("img",{src:d9,alt:"Error Image"},null,-1)),Ke("h2",null,"Error: "+ed((u=t.error)==null?void 0:u.statusCode),1),Ke("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),we(c)])}}}),L9=bu(D9,[["__scopeId","data-v-a467a495"]]),M9={key:0},mv={__name:"nuxt-root",setup(t){const e=()=>null,n=Be(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);St().beforeEach(u)}const s=!1;Gr(Ls,jc()),n.hooks.callHookWith(u=>u.map(f=>f()),"vue:setup");const i=$c(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;sE((u,f,h)=>{if(n.hooks.callHook("vue:error",u,f,h).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(ib(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Is(u)),!1});const c=!1;return(u,f)=>(zt(),ir(pd,{onResolve:it(r)},{default:Nn(()=>[it(o)?(zt(),na("div",M9)):it(i)?(zt(),ir(it(L9),{key:1,error:it(i)},null,8,["error"])):it(c)?(zt(),ir(it(e),{key:2,context:it(c)},null,8,["context"])):it(s)?(zt(),ir(r1(it(s)),{key:3})):(zt(),ir(it(h9),{key:4}))]),_:1},8,["onResolve"]))}};let gv;{let t;gv=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?SS(mv):AS(mv),s=VR({vueApp:r});async function i(c){var u;await s.callHook("app:error",c),(u=s.payload).error||(u.error=Os(c))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await jR(s,Z3)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(DR),await s.hooks.callHook("app:mounted",r),await Kn()}catch(c){i(c)}return r},t=gv().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{E9 as $,Gr as A,cr as B,dr as C,Kn as D,Ed as E,Nn as F,xx as G,Lt as H,j9 as I,B9 as J,q9 as K,iV as L,nU as M,eU as N,tU as O,$9 as P,va as Q,F9 as R,F1 as S,eS as T,Ls as U,K9 as V,YR as W,Rx as X,z9 as Y,k9 as Z,bu as _,Ke as a,t9 as a0,H3 as a1,Be as a2,Z9 as a3,Q9 as a4,X9 as a5,Y9 as a6,J9 as a7,un as b,na as c,q3 as d,W9 as e,U1 as f,ir as g,it as h,we as i,Vc as j,Jt as k,XA as l,z3 as m,kc as n,zt as o,Un as p,Je as q,ea as r,br as s,ed as t,pv as u,H9 as v,U9 as w,Qi as x,Ue as y,gt as z};
