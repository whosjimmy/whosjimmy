const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./UACEjWf2.js","./Bio.BaV4dkSc.css","./C3yusCif.js","./DPlqFg4f.js","./index.CAtFJWG6.css","./DInUGZwS.js","./C_Hy_Qfx.js","./Gallery.BdWwPq4R.css","./CA0NdqPV.js","./Contact.Bq_tjq4M.css","./BTkHE6i6.js","./e1hkHsWm.js","./CVugDBI1.js","./index.ASLudlX-.css","./CS3u32ke.js","./index.EfND0qCY.css","./DVlDglOg.js","./Clocks.CaZdgkmv.css","./C13ses_i.js","./CX9VXwV1.js","./Film.D8qa6UOd.css","./C3kvdh9G.js","./index.ByThmlNc.css","./BV2VSu9R.js","./uh5BO9Pz.js","./Clocks.Dmp-oUCd.css","./CP1JDfeA.js","./DvYuAPIq.js","./CZhiziGQ.js","./Film.CyscwsSS.css","./BFpp8ckl.js","./Celebrities.BS01JuXe.css","./BztPRDBo.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var iI=Object.defineProperty;var hm=t=>{throw TypeError(t)};var oI=(t,e,n)=>e in t?iI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var rn=(t,e,n)=>oI(t,typeof e!="symbol"?e+"":e,n),aI=(t,e,n)=>e.has(t)||hm("Cannot "+n);var ro=(t,e,n)=>(aI(t,e,"read from private field"),n?n.call(t):e.get(t)),dm=(t,e,n)=>e.has(t)?hm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},ii=[],Nn=()=>{},cI=()=>!1,aa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fh=t=>t.startsWith("onUpdate:"),dt=Object.assign,Uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lI=Object.prototype.hasOwnProperty,xe=(t,e)=>lI.call(t,e),le=Array.isArray,oi=t=>Li(t)==="[object Map]",Di=t=>Li(t)==="[object Set]",pm=t=>Li(t)==="[object Date]",uI=t=>Li(t)==="[object RegExp]",pe=t=>typeof t=="function",qe=t=>typeof t=="string",En=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",ev=t=>(Le(t)||pe(t))&&pe(t.then)&&pe(t.catch),tv=Object.prototype.toString,Li=t=>tv.call(t),fI=t=>Li(t).slice(8,-1),nv=t=>Li(t)==="[object Object]",jh=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ai=Vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hI=/-(\w)/g,hn=pl(t=>t.replace(hI,(e,n)=>n?n.toUpperCase():"")),dI=/\B([A-Z])/g,Ls=pl(t=>t.replace(dI,"-$1").toLowerCase()),ml=pl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Iu=pl(t=>t?`on${ml(t)}`:""),Ur=(t,e)=>!Object.is(t,e),ci=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rv=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sv=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let mm;const gl=()=>mm||(mm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _l(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?_I(r):_l(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Le(t))return t}const pI=/;(?![^(]*\))/g,mI=/:([^]+)/,gI=/\/\*[^]*?\*\//g;function _I(t){const e={};return t.replace(gI,"").split(pI).forEach(n=>{if(n){const r=n.split(mI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ca(t){let e="";if(qe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=ca(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function YU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!qe(e)&&(t.class=ca(e)),n&&(t.style=_l(n)),t}const yI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vI=Vh(yI);function iv(t){return!!t||t===""}function EI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=la(t[r],e[r]);return n}function la(t,e){if(t===e)return!0;let n=pm(t),r=pm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=En(t),r=En(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?EI(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!la(t[o],e[o]))return!1}}return String(t)===String(e)}function Bh(t,e){return t.findIndex(n=>la(n,e))}const ov=t=>!!(t&&t.__v_isRef===!0),$h=t=>qe(t)?t:t==null?"":le(t)||Le(t)&&(t.toString===tv||!pe(t.toString))?ov(t)?$h(t.value):JSON.stringify(t,av,2):String(t),av=(t,e)=>ov(e)?av(t,e.value):oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Au(r,i)+" =>"]=s,n),{})}:Di(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Au(n))}:En(e)?Au(e):Le(e)&&!le(e)&&!nv(e)?String(e):e,Au=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class cv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hh(t){return new cv(t)}function ua(){return jt}function Cc(t,e=!1){jt&&jt.cleanups.push(t)}let je;const Ru=new WeakSet;class lv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ru.has(this)&&(Ru.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gm(this),hv(this);const e=je,n=vn;je=this,vn=!0;try{return this.fn()}finally{dv(this),je=e,vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wh(e);this.deps=this.depsTail=void 0,gm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ru.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pf(this)&&this.run()}get dirty(){return pf(this)}}let uv=0,vo,Eo;function fv(t,e=!1){if(t.flags|=8,e){t.next=Eo,Eo=t;return}t.next=vo,vo=t}function zh(){uv++}function qh(){if(--uv>0)return;if(Eo){let e=Eo;for(Eo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vo;){let e=vo;for(vo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function hv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Wh(r),wI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vo))return;t.globalVersion=Vo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!pf(t)){t.flags&=-3;return}const n=je,r=vn;je=t,vn=!0;try{hv(t);const s=t.fn(t._value);(e.version===0||Ur(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{je=n,vn=r,dv(t),t.flags&=-3}}function Wh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Wh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vn=!0;const mv=[];function ss(){mv.push(vn),vn=!1}function is(){const t=mv.pop();vn=t===void 0?!0:t}function gm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let Vo=0;class bI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!je||!vn||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new bI(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,gv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=r)}return n}trigger(e){this.version++,Vo++,this.notify(e)}notify(e){zh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qh()}}}function gv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const kc=new WeakMap,ws=Symbol(""),mf=Symbol(""),Fo=Symbol("");function Ct(t,e,n){if(vn&&je){let r=kc.get(t);r||kc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new yl),s.map=r,s.key=n),s.track()}}function Qn(t,e,n,r,s,i){const o=kc.get(t);if(!o){Vo++;return}const a=l=>{l&&l.trigger()};if(zh(),e==="clear")o.forEach(a);else{const l=le(t),u=l&&jh(n);if(l&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===Fo||!En(p)&&p>=f)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Fo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(ws)),oi(t)&&a(o.get(mf)));break;case"delete":l||(a(o.get(ws)),oi(t)&&a(o.get(mf)));break;case"set":oi(t)&&a(o.get(ws));break}}qh()}function TI(t,e){const n=kc.get(t);return n&&n.get(e)}function Ks(t){const e=Re(t);return e===t?e:(Ct(e,"iterate",Fo),ln(t)?e:e.map(kt))}function vl(t){return Ct(t=Re(t),"iterate",Fo),t}const II={__proto__:null,[Symbol.iterator](){return Su(this,Symbol.iterator,kt)},concat(...t){return Ks(this).concat(...t.map(e=>le(e)?Ks(e):e))},entries(){return Su(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return qn(this,"every",t,e,void 0,arguments)},filter(t,e){return qn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return qn(this,"find",t,e,kt,arguments)},findIndex(t,e){return qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pu(this,"includes",t)},indexOf(...t){return Pu(this,"indexOf",t)},join(t){return Ks(this).join(t)},lastIndexOf(...t){return Pu(this,"lastIndexOf",t)},map(t,e){return qn(this,"map",t,e,void 0,arguments)},pop(){return so(this,"pop")},push(...t){return so(this,"push",t)},reduce(t,...e){return _m(this,"reduce",t,e)},reduceRight(t,...e){return _m(this,"reduceRight",t,e)},shift(){return so(this,"shift")},some(t,e){return qn(this,"some",t,e,void 0,arguments)},splice(...t){return so(this,"splice",t)},toReversed(){return Ks(this).toReversed()},toSorted(t){return Ks(this).toSorted(t)},toSpliced(...t){return Ks(this).toSpliced(...t)},unshift(...t){return so(this,"unshift",t)},values(){return Su(this,"values",kt)}};function Su(t,e,n){const r=vl(t),s=r[e]();return r!==t&&!ln(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const AI=Array.prototype;function qn(t,e,n,r,s,i){const o=vl(t),a=o!==t&&!ln(t),l=o[e];if(l!==AI[e]){const d=l.apply(t,i);return a?kt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,kt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const f=l.call(o,u,r);return a&&s?s(f):f}function _m(t,e,n,r){const s=vl(t);let i=n;return s!==t&&(ln(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,kt(a),l,t)}),s[e](i,...r)}function Pu(t,e,n){const r=Re(t);Ct(r,"iterate",Fo);const s=r[e](...n);return(s===-1||s===!1)&&Qh(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function so(t,e,n=[]){ss(),zh();const r=Re(t)[e].apply(t,n);return qh(),is(),r}const RI=Vh("__proto__,__v_isRef,__isVue"),_v=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En));function SI(t){En(t)||(t=String(t));const e=Re(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class yv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?VI:bv:i?wv:Ev).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=II[n]))return l;if(n==="hasOwnProperty")return SI}const a=Reflect.get(e,n,Qe(e)?e:r);return(En(n)?_v.has(n):RI(n))||(s||Ct(e,"get",n),i)?a:Qe(a)?o&&jh(n)?a:a.value:Le(a)?s?Tv(a):fr(a):a}}class vv extends yv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Kr(i);if(!ln(r)&&!Kr(r)&&(i=Re(i),r=Re(r)),!le(e)&&Qe(i)&&!Qe(r))return l?!1:(i.value=r,!0)}const o=le(e)&&jh(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Qe(e)?e:s);return e===Re(s)&&(o?Ur(r,i)&&Qn(e,"set",n,r):Qn(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!En(n)||!_v.has(n))&&Ct(e,"has",n),r}ownKeys(e){return Ct(e,"iterate",le(e)?"length":ws),Reflect.ownKeys(e)}}class PI extends yv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const CI=new vv,kI=new PI,OI=new vv(!0);const gf=t=>t,$a=t=>Reflect.getPrototypeOf(t);function xI(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=oi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?gf:e?_f:kt;return!e&&Ct(i,"iterate",l?mf:ws),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function Ha(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function NI(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(Ur(s,a)&&Ct(o,"get",s),Ct(o,"get",a));const{has:l}=$a(o),u=e?gf:t?_f:kt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ct(Re(s),"iterate",ws),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(Ur(s,a)&&Ct(o,"has",s),Ct(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Re(a),u=e?gf:t?_f:kt;return!t&&Ct(l,"iterate",ws),a.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return dt(n,t?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(s){!e&&!ln(s)&&!Kr(s)&&(s=Re(s));const i=Re(this);return $a(i).has.call(i,s)||(i.add(s),Qn(i,"add",s,s)),this},set(s,i){!e&&!ln(i)&&!Kr(i)&&(i=Re(i));const o=Re(this),{has:a,get:l}=$a(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const f=l.call(o,s);return o.set(s,i),u?Ur(i,f)&&Qn(o,"set",s,i):Qn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=$a(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Qn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xI(s,t,e)}),n}function Kh(t,e){const n=NI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const DI={get:Kh(!1,!1)},LI={get:Kh(!1,!0)},MI={get:Kh(!0,!1)};const Ev=new WeakMap,wv=new WeakMap,bv=new WeakMap,VI=new WeakMap;function FI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function UI(t){return t.__v_skip||!Object.isExtensible(t)?0:FI(fI(t))}function fr(t){return Kr(t)?t:Gh(t,!1,CI,DI,Ev)}function Zn(t){return Gh(t,!1,OI,LI,wv)}function Tv(t){return Gh(t,!0,kI,MI,bv)}function Gh(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=UI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function nr(t){return Kr(t)?nr(t.__v_raw):!!(t&&t.__v_isReactive)}function Kr(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function Qh(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Yh(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&rv(t,"__v_skip",!0),t}const kt=t=>Le(t)?fr(t):t,_f=t=>Le(t)?Tv(t):t;function Qe(t){return t?t.__v_isRef===!0:!1}function Nt(t){return Iv(t,!1)}function Uo(t){return Iv(t,!0)}function Iv(t,e){return Qe(t)?t:new jI(t,e)}class jI{constructor(e,n){this.dep=new yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ln(e)||Kr(e);e=r?e:Re(e),Ur(e,n)&&(this._rawValue=e,this._value=r?e:kt(e),this.dep.trigger())}}function rt(t){return Qe(t)?t.value:t}function BI(t){return pe(t)?t():rt(t)}const $I={get:(t,e,n)=>e==="__v_raw"?t:rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Qe(s)&&!Qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Av(t){return nr(t)?t:new Proxy(t,$I)}class HI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new yl,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function zI(t){return new HI(t)}function qI(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=Rv(t,n);return e}class WI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return TI(Re(this._object),this._key)}}class KI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function GI(t,e,n){return Qe(t)?t:pe(t)?new KI(t):Le(t)&&arguments.length>1?Rv(t,e,n):Nt(t)}function Rv(t,e,n){const r=t[e];return Qe(r)?r:new WI(t,e,n)}class QI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return fv(this,!0),!0}get value(){const e=this.dep.track();return pv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function YI(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new QI(r,s,n)}const za={},Oc=new WeakMap;let _s;function XI(t,e=!1,n=_s){if(n){let r=Oc.get(n);r||Oc.set(n,r=[]),r.push(t)}}function JI(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:ln(R)||s===!1||s===0?Yn(R,1):Yn(R);let f,d,p,g,E=!1,b=!1;if(Qe(t)?(d=()=>t.value,E=ln(t)):nr(t)?(d=()=>u(t),E=!0):le(t)?(b=!0,E=t.some(R=>nr(R)||ln(R)),d=()=>t.map(R=>{if(Qe(R))return R.value;if(nr(R))return u(R);if(pe(R))return l?l(R,2):R()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){ss();try{p()}finally{is()}}const R=_s;_s=f;try{return l?l(t,3,[g]):t(g)}finally{_s=R}}:d=Nn,e&&s){const R=d,D=s===!0?1/0:s;d=()=>Yn(R(),D)}const k=ua(),S=()=>{f.stop(),k&&k.active&&Uh(k.effects,f)};if(i&&e){const R=e;e=(...D)=>{R(...D),S()}}let P=b?new Array(t.length).fill(za):za;const _=R=>{if(!(!(f.flags&1)||!f.dirty&&!R))if(e){const D=f.run();if(s||E||(b?D.some((M,T)=>Ur(M,P[T])):Ur(D,P))){p&&p();const M=_s;_s=f;try{const T=[D,P===za?void 0:b&&P[0]===za?[]:P,g];l?l(e,3,T):e(...T),P=D}finally{_s=M}}}else f.run()};return a&&a(_),f=new lv(d),f.scheduler=o?()=>o(_,!1):_,g=R=>XI(R,!1,f),p=f.onStop=()=>{const R=Oc.get(f);if(R){if(l)l(R,4);else for(const D of R)D();Oc.delete(f)}},e?r?_(!0):P=f.run():o?o(_.bind(null,!0),!0):f.run(),S.pause=f.pause.bind(f),S.resume=f.resume.bind(f),S.stop=S,S}function Yn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Qe(t))Yn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Yn(t[r],e,n);else if(Di(t)||oi(t))t.forEach(r=>{Yn(r,e,n)});else if(nv(t)){for(const r in t)Yn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Yn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fa(t,e,n,r){try{return r?t(...r):t()}catch(s){Mi(s,e,n)}}function wn(t,e,n,r){if(pe(t)){const s=fa(t,e,n,r);return s&&ev(s)&&s.catch(i=>{Mi(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(wn(t[i],e,n,r));return s}}function Mi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,l,u)===!1)return}a=a.parent}if(i){ss(),fa(i,null,10,[t,l,u]),is();return}}ZI(t,n,s,r,o)}function ZI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Bt=[];let Rn=-1;const li=[];let Ar=null,Ys=0;const Sv=Promise.resolve();let xc=null;function hr(t){const e=xc||Sv;return t?e.then(this?t.bind(this):t):e}function eA(t){let e=Rn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,s=Bt[r],i=jo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xh(t){if(!(t.flags&1)){const e=jo(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=jo(n)?Bt.push(t):Bt.splice(eA(e),0,t),t.flags|=1,Pv()}}function Pv(){xc||(xc=Sv.then(Cv))}function yf(t){le(t)?li.push(...t):Ar&&t.id===-1?Ar.splice(Ys+1,0,t):t.flags&1||(li.push(t),t.flags|=1),Pv()}function ym(t,e,n=Rn+1){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Nc(t){if(li.length){const e=[...new Set(li)].sort((n,r)=>jo(n)-jo(r));if(li.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ys=0;Ys<Ar.length;Ys++){const n=Ar[Ys];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Ys=0}}const jo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cv(t){try{for(Rn=0;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&(e.flags&=-2)}Rn=-1,Bt.length=0,Nc(),xc=null,(Bt.length||li.length)&&Cv()}}let at=null,kv=null;function Dc(t){const e=at;return at=t,kv=t&&t.type.__scopeId||null,e}function Sn(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&km(-1);const i=Dc(e);let o;try{o=t(...s)}finally{Dc(i),r._d&&km(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function XU(t,e){if(at===null)return t;const n=Al(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Pn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ss(),wn(l,n,8,[t.el,a,t,e]),is())}}const tA=Symbol("_vte"),Ov=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),qa=Symbol("_enterCb");function nA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wl(()=>{t.isMounted=!0}),Vi(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],xv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Nv=t=>{const e=t.subTree;return e.component?Nv(e.component):e},rA={name:"BaseTransition",props:xv,setup(t,{slots:e}){const n=Il(),r=nA();return()=>{const s=e.default&&Mv(e.default(),!0);if(!s||!s.length)return;const i=Dv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return Cu(i);const l=vm(i);if(!l)return Cu(i);let u=vf(l,o,r,n,d=>u=d);l.type!==st&&yi(l,u);let f=n.subTree&&vm(n.subTree);if(f&&f.type!==st&&!_n(l,f)&&Nv(n).type!==st){let d=vf(f,o,r,n);if(yi(f,d),a==="out-in"&&l.type!==st)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},Cu(i);a==="in-out"&&l.type!==st?d.delayLeave=(p,g,E)=>{const b=Lv(r,f);b[String(f.key)]=f,p[Rr]=()=>{g(),p[Rr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{E(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Dv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==st){e=n;break}}return e}const sA=rA;function Lv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function vf(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:E,onLeaveCancelled:b,onBeforeAppear:k,onAppear:S,onAfterAppear:P,onAppearCancelled:_}=e,R=String(t.key),D=Lv(n,t),M=(y,I)=>{y&&wn(y,r,9,I)},T=(y,I)=>{const x=I[1];M(y,I),le(y)?y.every(O=>O.length<=1)&&x():y.length<=1&&x()},v={mode:o,persisted:a,beforeEnter(y){let I=l;if(!n.isMounted)if(i)I=k||l;else return;y[Rr]&&y[Rr](!0);const x=D[R];x&&_n(t,x)&&x.el[Rr]&&x.el[Rr](),M(I,[y])},enter(y){let I=u,x=f,O=d;if(!n.isMounted)if(i)I=S||u,x=P||f,O=_||d;else return;let A=!1;const ge=y[qa]=Ee=>{A||(A=!0,Ee?M(O,[y]):M(x,[y]),v.delayedLeave&&v.delayedLeave(),y[qa]=void 0)};I?T(I,[y,ge]):ge()},leave(y,I){const x=String(t.key);if(y[qa]&&y[qa](!0),n.isUnmounting)return I();M(p,[y]);let O=!1;const A=y[Rr]=ge=>{O||(O=!0,I(),ge?M(b,[y]):M(E,[y]),y[Rr]=void 0,D[x]===t&&delete D[x])};D[x]=t,g?T(g,[y,A]):A()},clone(y){const I=vf(y,e,n,r,s);return s&&s(I),I}};return v}function Cu(t){if(ha(t))return t=sr(t),t.children=null,t}function vm(t){if(!ha(t))return Ov(t.type)&&t.children?Dv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function yi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Mv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(Mv(o.children,e,a))):(e||o.type!==st)&&r.push(a!=null?sr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function In(t,e){return pe(t)?dt({name:t.name},e,{setup:t}):t}function Jh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Bo(t,e,n,r,s=!1){if(le(t)){t.forEach((E,b)=>Bo(E,e&&(le(e)?e[b]:e),n,r,s));return}if(jr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Bo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Al(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,f=a.refs===Ve?a.refs={}:a.refs,d=a.setupState,p=Re(d),g=d===Ve?()=>!1:E=>xe(p,E);if(u!=null&&u!==l&&(qe(u)?(f[u]=null,g(u)&&(d[u]=null)):Qe(u)&&(u.value=null)),pe(l))fa(l,a,12,[o,f]);else{const E=qe(l),b=Qe(l);if(E||b){const k=()=>{if(t.f){const S=E?g(l)?d[l]:f[l]:l.value;s?le(S)&&Uh(S,i):le(S)?S.includes(i)||S.push(i):E?(f[l]=[i],g(l)&&(d[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else E?(f[l]=o,g(l)&&(d[l]=o)):b&&(l.value=o,t.k&&(f[t.k]=o))};o?(k.id=-1,yt(k,n)):k()}}}let Em=!1;const Gs=()=>{Em||(console.error("Hydration completed but contains mismatches."),Em=!0)},iA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",oA=t=>t.namespaceURI.includes("MathML"),Wa=t=>{if(t.nodeType===1){if(iA(t))return"svg";if(oA(t))return"mathml"}},ni=t=>t.nodeType===8;function aA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,f=(_,R)=>{if(!R.hasChildNodes()){n(null,_,R),Nc(),R._vnode=_;return}d(R.firstChild,_,null,null,null),Nc(),R._vnode=_},d=(_,R,D,M,T,v=!1)=>{v=v||!!R.dynamicChildren;const y=ni(_)&&_.data==="[",I=()=>b(_,R,D,M,T,y),{type:x,ref:O,shapeFlag:A,patchFlag:ge}=R;let Ee=_.nodeType;R.el=_,ge===-2&&(v=!1,R.dynamicChildren=null);let Z=null;switch(x){case Is:Ee!==3?R.children===""?(l(R.el=s(""),o(_),_),Z=_):Z=I():(_.data!==R.children&&(Gs(),_.data=R.children),Z=i(_));break;case st:P(_)?(Z=i(_),S(R.el=_.content.firstChild,_,D)):Ee!==8||y?Z=I():Z=i(_);break;case bo:if(y&&(_=i(_),Ee=_.nodeType),Ee===1||Ee===3){Z=_;const se=!R.children.length;for(let ne=0;ne<R.staticCount;ne++)se&&(R.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===R.staticCount-1&&(R.anchor=Z),Z=i(Z);return y?i(Z):Z}else I();break;case Ot:y?Z=E(_,R,D,M,T,v):Z=I();break;default:if(A&1)(Ee!==1||R.type.toLowerCase()!==_.tagName.toLowerCase())&&!P(_)?Z=I():Z=p(_,R,D,M,T,v);else if(A&6){R.slotScopeIds=T;const se=o(_);if(y?Z=k(_):ni(_)&&_.data==="teleport start"?Z=k(_,_.data,"teleport end"):Z=i(_),e(R,se,null,D,M,Wa(se),v),jr(R)&&!R.type.__asyncResolved){let ne;y?(ne=be(Ot),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=_.nodeType===3?an(""):be("div"),ne.el=_,R.component.subTree=ne}}else A&64?Ee!==8?Z=I():Z=R.type.hydrate(_,R,D,M,T,v,t,g):A&128&&(Z=R.type.hydrate(_,R,D,M,Wa(o(_)),T,v,t,d))}return O!=null&&Bo(O,null,M,R),Z},p=(_,R,D,M,T,v)=>{v=v||!!R.dynamicChildren;const{type:y,props:I,patchFlag:x,shapeFlag:O,dirs:A,transition:ge}=R,Ee=y==="input"||y==="option";if(Ee||x!==-1){A&&Pn(R,null,D,"created");let Z=!1;if(P(_)){Z=oE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=_.content.firstChild;Z&&ge.beforeEnter(ne),S(ne,_,D),R.el=_=ne}if(O&16&&!(I&&(I.innerHTML||I.textContent))){let ne=g(_.firstChild,R,_,D,M,T,v);for(;ne;){Ka(_,1)||Gs();const We=ne;ne=ne.nextSibling,a(We)}}else if(O&8){let ne=R.children;ne[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(ne=ne.slice(1)),_.textContent!==ne&&(Ka(_,0)||Gs(),_.textContent=R.children)}if(I){if(Ee||!v||x&48){const ne=_.tagName.includes("-");for(const We in I)(Ee&&(We.endsWith("value")||We==="indeterminate")||aa(We)&&!ai(We)||We[0]==="."||ne)&&r(_,We,null,I[We],void 0,D)}else if(I.onClick)r(_,"onClick",null,I.onClick,void 0,D);else if(x&4&&nr(I.style))for(const ne in I.style)I.style[ne]}let se;(se=I&&I.onVnodeBeforeMount)&&qt(se,D,R),A&&Pn(R,null,D,"beforeMount"),((se=I&&I.onVnodeMounted)||A||Z)&&hE(()=>{se&&qt(se,D,R),Z&&ge.enter(_),A&&Pn(R,null,D,"mounted")},M)}return _.nextSibling},g=(_,R,D,M,T,v,y)=>{y=y||!!R.dynamicChildren;const I=R.children,x=I.length;for(let O=0;O<x;O++){const A=y?I[O]:I[O]=Yt(I[O]),ge=A.type===Is;_?(ge&&!y&&O+1<x&&Yt(I[O+1]).type===Is&&(l(s(_.data.slice(A.children.length)),D,i(_)),_.data=A.children),_=d(_,A,M,T,v,y)):ge&&!A.children?l(A.el=s(""),D):(Ka(D,1)||Gs(),n(null,A,D,null,M,T,Wa(D),v))}return _},E=(_,R,D,M,T,v)=>{const{slotScopeIds:y}=R;y&&(T=T?T.concat(y):y);const I=o(_),x=g(i(_),R,I,D,M,T,v);return x&&ni(x)&&x.data==="]"?i(R.anchor=x):(Gs(),l(R.anchor=u("]"),I,x),x)},b=(_,R,D,M,T,v)=>{if(Ka(_.parentElement,1)||Gs(),R.el=null,v){const x=k(_);for(;;){const O=i(_);if(O&&O!==x)a(O);else break}}const y=i(_),I=o(_);return a(_),n(null,R,I,y,D,M,Wa(I),T),D&&(D.vnode.el=R.el,Tl(D,R.el)),y},k=(_,R="[",D="]")=>{let M=0;for(;_;)if(_=i(_),_&&ni(_)&&(_.data===R&&M++,_.data===D)){if(M===0)return i(_);M--}return _},S=(_,R,D)=>{const M=R.parentNode;M&&M.replaceChild(_,R);let T=D;for(;T;)T.vnode.el===R&&(T.vnode.el=T.subTree.el=_),T=T.parent},P=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[f,d]}const wm="data-allow-mismatch",cA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ka(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(wm);)t=t.parentElement;const n=t&&t.getAttribute(wm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(cA[e])}}gl().requestIdleCallback;gl().cancelIdleCallback;function lA(t,e){if(ni(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ni(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const jr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function uA(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,f,d=0;const p=()=>(d++,u=null,g()),g=()=>{let E;return u||(E=u=e().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),l)return new Promise((k,S)=>{l(b,()=>k(p()),()=>S(b),d+1)});throw b}).then(b=>E!==u&&u?u:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),f=b,b)))};return In({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(E,b,k){const S=i?()=>{const P=i(k,_=>lA(E,_));P&&(b.bum||(b.bum=[])).push(P)}:k;f?S():g().then(()=>!b.isUnmounted&&S())},get __asyncResolved(){return f},setup(){const E=it;if(Jh(E),f)return()=>ku(f,E);const b=_=>{u=null,Mi(_,E,13,!r)};if(a&&E.suspense||Ei)return g().then(_=>()=>ku(_,E)).catch(_=>(b(_),()=>r?be(r,{error:_}):null));const k=Nt(!1),S=Nt(),P=Nt(!!s);return s&&setTimeout(()=>{P.value=!1},s),o!=null&&setTimeout(()=>{if(!k.value&&!S.value){const _=new Error(`Async component timed out after ${o}ms.`);b(_),S.value=_}},o),g().then(()=>{k.value=!0,E.parent&&ha(E.parent.vnode)&&E.parent.update()}).catch(_=>{b(_),S.value=_}),()=>{if(k.value&&f)return ku(f,E);if(S.value&&r)return be(r,{error:S.value});if(n&&!P.value)return be(n)}}})}function ku(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=be(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ha=t=>t.type.__isKeepAlive,fA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Il(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:f,o:{createElement:d}}}=r,p=d("div");r.activate=(P,_,R,D,M)=>{const T=P.component;u(P,_,R,0,a),l(T.vnode,P,_,R,T,a,D,P.slotScopeIds,M),yt(()=>{T.isDeactivated=!1,T.a&&ci(T.a);const v=P.props&&P.props.onVnodeMounted;v&&qt(v,T.parent,P)},a)},r.deactivate=P=>{const _=P.component;Mc(_.m),Mc(_.a),u(P,p,null,1,a),yt(()=>{_.da&&ci(_.da);const R=P.props&&P.props.onVnodeUnmounted;R&&qt(R,_.parent,P),_.isDeactivated=!0},a)};function g(P){Ou(P),f(P,n,a,!0)}function E(P){s.forEach((_,R)=>{const D=Sf(_.type);D&&!P(D)&&b(R)})}function b(P){const _=s.get(P);_&&(!o||!_n(_,o))?g(_):o&&Ou(o),s.delete(P),i.delete(P)}Dn(()=>[t.include,t.exclude],([P,_])=>{P&&E(R=>lo(P,R)),_&&E(R=>!lo(_,R))},{flush:"post",deep:!0});let k=null;const S=()=>{k!=null&&(Vc(n.subTree.type)?yt(()=>{s.set(k,Ga(n.subTree))},n.subTree.suspense):s.set(k,Ga(n.subTree)))};return wl(S),jv(S),Vi(()=>{s.forEach(P=>{const{subTree:_,suspense:R}=n,D=Ga(_);if(P.type===D.type&&P.key===D.key){Ou(D);const M=D.component.da;M&&yt(M,R);return}g(P)})}),()=>{if(k=null,!e.default)return o=null;const P=e.default(),_=P[0];if(P.length>1)return o=null,P;if(!Rs(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let R=Ga(_);if(R.type===st)return o=null,R;const D=R.type,M=Sf(jr(R)?R.type.__asyncResolved||{}:D),{include:T,exclude:v,max:y}=t;if(T&&(!M||!lo(T,M))||v&&M&&lo(v,M))return R.shapeFlag&=-257,o=R,_;const I=R.key==null?D:R.key,x=s.get(I);return R.el&&(R=sr(R),_.shapeFlag&128&&(_.ssContent=R)),k=I,x?(R.el=x.el,R.component=x.component,R.transition&&yi(R,R.transition),R.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),y&&i.size>parseInt(y,10)&&b(i.values().next().value)),R.shapeFlag|=256,o=R,Vc(_.type)?_:R}}},hA=fA;function lo(t,e){return le(t)?t.some(n=>lo(n,e)):qe(t)?t.split(",").includes(e):uI(t)?(t.lastIndex=0,t.test(e)):!1}function Vv(t,e){Uv(t,"a",e)}function Fv(t,e){Uv(t,"da",e)}function Uv(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(El(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&dA(r,e,n,s),s=s.parent}}function dA(t,e,n,r){const s=El(e,t,r,!0);Bv(()=>{Uh(r[e],s)},n)}function Ou(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ga(t){return t.shapeFlag&128?t.ssContent:t}function El(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ss();const a=pa(n),l=wn(e,n,t,o);return a(),is(),l});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=it)=>{(!Ei||t==="sp")&&El(t,(...r)=>e(...r),n)},pA=dr("bm"),wl=dr("m"),mA=dr("bu"),jv=dr("u"),Vi=dr("bum"),Bv=dr("um"),gA=dr("sp"),_A=dr("rtg"),yA=dr("rtc");function $v(t,e=it){El("ec",t,e)}const Hv="components";function $o(t,e){return qv(Hv,t,!0,e)||t}const zv=Symbol.for("v-ndc");function vA(t){return qe(t)?qv(Hv,t,!1)||t:t||zv}function qv(t,e,n=!0,r=!1){const s=at||it;if(s){const i=s.type;{const a=Sf(i,!1);if(a&&(a===e||a===hn(e)||a===ml(hn(e))))return i}const o=bm(s[t]||i[t],e)||bm(s.appContext[t],e);return!o&&r?i:o}}function bm(t,e){return t&&(t[e]||t[hn(e)]||t[ml(hn(e))])}function JU(t,e,n,r){let s;const i=n,o=le(t);if(o||qe(t)){const a=o&&nr(t);let l=!1;a&&(l=!ln(t),t=vl(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?kt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const f=a[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function ZU(t,e,n={},r,s){if(at.ce||at.parent&&jr(at.parent)&&at.parent.ce)return $t(),Xn(Ot,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),$t();const o=i&&Wv(i(n)),a=n.key||o&&o.key,l=Xn(Ot,{key:(a&&!En(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Wv(t){return t.some(e=>Rs(e)?!(e.type===st||e.type===Ot&&!Wv(e.children)):!0)?t:null}const Ef=t=>t?_E(t)?Al(t):Ef(t.parent):null,wo=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ef(t.parent),$root:t=>Ef(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gv(t),$forceUpdate:t=>t.f||(t.f=()=>{Xh(t.update)}),$nextTick:t=>t.n||(t.n=hr.bind(t.proxy)),$watch:t=>jA.bind(t)}),xu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&xe(t,e),EA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(xu(r,e))return o[e]=1,r[e];if(s!==Ve&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==Ve&&xe(n,e))return o[e]=4,n[e];wf&&(o[e]=0)}}const f=wo[e];let d,p;if(f)return e==="$attrs"&&Ct(t.attrs,"get",""),f(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&xe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return xu(s,e)?(s[e]=n,!0):r!==Ve&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&xe(t,o)||xu(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(wo,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tm(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wf=!0;function wA(t){const e=Gv(t),n=t.proxy,r=t.ctx;wf=!1,e.beforeCreate&&Im(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:E,activated:b,deactivated:k,beforeDestroy:S,beforeUnmount:P,destroyed:_,unmounted:R,render:D,renderTracked:M,renderTriggered:T,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:x,components:O,directives:A,filters:ge}=e;if(u&&bA(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Le(se)&&(t.data=fr(se))}if(wf=!0,i)for(const se in i){const ne=i[se],We=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Nn,dn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Nn,tn=Fe({get:We,set:dn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const se in a)Kv(a[se],r,n,se);if(l){const se=pe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{Ts(ne,se[ne])})}f&&Im(f,t,"c");function Z(se,ne){le(ne)?ne.forEach(We=>se(We.bind(n))):ne&&se(ne.bind(n))}if(Z(pA,d),Z(wl,p),Z(mA,g),Z(jv,E),Z(Vv,b),Z(Fv,k),Z($v,v),Z(yA,M),Z(_A,T),Z(Vi,P),Z(Bv,R),Z(gA,y),le(I))if(I.length){const se=t.exposed||(t.exposed={});I.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});D&&t.render===Nn&&(t.render=D),x!=null&&(t.inheritAttrs=x),O&&(t.components=O),A&&(t.directives=A),y&&Jh(t)}function bA(t,e,n=Nn){le(t)&&(t=bf(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=wt(s.from||r,s.default,!0):i=wt(s.from||r):i=wt(s),Qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Im(t,e,n){wn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kv(t,e,n,r){let s=r.includes(".")?lE(n,r):()=>n[r];if(qe(t)){const i=e[t];pe(i)&&Dn(s,i)}else if(pe(t))Dn(s,t.bind(n));else if(Le(t))if(le(t))t.forEach(i=>Kv(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Dn(s,i,t)}}function Gv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Lc(l,u,o,!0)),Lc(l,e,o)),Le(e)&&i.set(e,l),l}function Lc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Lc(t,i,n,!0),s&&s.forEach(o=>Lc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=TA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TA={data:Am,props:Rm,emits:Rm,methods:uo,computed:uo,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:uo,directives:uo,watch:AA,provide:Am,inject:IA};function Am(t,e){return e?t?function(){return dt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function IA(t,e){return uo(bf(t),bf(e))}function bf(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function uo(t,e){return t?dt(Object.create(null),t,e):e}function Rm(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:dt(Object.create(null),Tm(t),Tm(e??{})):e}function AA(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function Qv(){return{app:null,config:{isNativeTag:cI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RA=0;function SA(t,e){return function(r,s=null){pe(r)||(r=dt({},r)),s!=null&&!Le(s)&&(s=null);const i=Qv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:RA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uR,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...d)):pe(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,p){if(!l){const g=u._ceVNode||be(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,f):t(g,f,p),l=!0,u._container=f,f.__vue_app__=u,Al(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(wn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=bs;bs=u;try{return f()}finally{bs=d}}};return u}}let bs=null;function Ts(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function wt(t,e,n=!1){const r=it||at;if(r||bs){const s=bs?bs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function da(){return!!(it||at||bs)}const Yv={},Xv=()=>Object.create(Yv),Jv=t=>Object.getPrototypeOf(t)===Yv;function PA(t,e,n,r=!1){const s={},i=Xv();t.propsDefaults=Object.create(null),Zv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Zn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function CA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(bl(t.emitsOptions,p))continue;const g=e[p];if(l)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const E=hn(p);s[E]=Tf(l,a,E,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Zv(t,e,s,i)&&(u=!0);let f;for(const d in a)(!e||!xe(e,d)&&((f=Ls(d))===d||!xe(e,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Tf(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&Qn(t.attrs,"set","")}function Zv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ai(l))continue;const u=e[l];let f;s&&xe(s,f=hn(l))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:bl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=a||Ve;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Tf(s,l,d,u[d],t,!xe(u,d))}}return o}function Tf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=pa(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ls(n))&&(r=!0))}return r}const kA=new WeakMap;function eE(t,e,n=!1){const r=n?kA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const f=d=>{l=!0;const[p,g]=eE(d,e,!0);dt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Le(t)&&r.set(t,ii),ii;if(le(i))for(let f=0;f<i.length;f++){const d=hn(i[f]);Sm(d)&&(o[d]=Ve)}else if(i)for(const f in i){const d=hn(f);if(Sm(d)){const p=i[f],g=o[d]=le(p)||pe(p)?{type:p}:dt({},p),E=g.type;let b=!1,k=!0;if(le(E))for(let S=0;S<E.length;++S){const P=E[S],_=pe(P)&&P.name;if(_==="Boolean"){b=!0;break}else _==="String"&&(k=!1)}else b=pe(E)&&E.name==="Boolean";g[0]=b,g[1]=k,(b||xe(g,"default"))&&a.push(d)}}const u=[o,a];return Le(t)&&r.set(t,u),u}function Sm(t){return t[0]!=="$"&&!ai(t)}const tE=t=>t[0]==="_"||t==="$stable",Zh=t=>le(t)?t.map(Yt):[Yt(t)],OA=(t,e,n)=>{if(e._n)return e;const r=Sn((...s)=>Zh(e(...s)),n);return r._c=!1,r},nE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(tE(s))continue;const i=t[s];if(pe(i))e[s]=OA(s,i,r);else if(i!=null){const o=Zh(i);e[s]=()=>o}}},rE=(t,e)=>{const n=Zh(e);t.slots.default=()=>n},sE=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},xA=(t,e,n)=>{const r=t.slots=Xv();if(t.vnode.shapeFlag&32){const s=e._;s?(sE(r,e,n),n&&rv(r,"_",s,!0)):nE(e,r)}else e&&rE(t,e)},NA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:sE(s,e,n):(i=!e.$stable,nE(e,s)),o=e}else e&&(rE(t,e),o={default:1});if(i)for(const a in s)!tE(a)&&o[a]==null&&delete s[a]},yt=hE;function DA(t){return iE(t)}function LA(t){return iE(t,aA)}function iE(t,e){const n=gl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Nn,insertStaticContent:E}=t,b=(C,N,V,$=null,U=null,z=null,Y=void 0,G=null,K=!!N.dynamicChildren)=>{if(C===N)return;C&&!_n(C,N)&&($=j(C),Ke(C,U,z,!0),C=null),N.patchFlag===-2&&(K=!1,N.dynamicChildren=null);const{type:q,ref:ue,shapeFlag:J}=N;switch(q){case Is:k(C,N,V,$);break;case st:S(C,N,V,$);break;case bo:C==null&&P(N,V,$,Y);break;case Ot:O(C,N,V,$,U,z,Y,G,K);break;default:J&1?D(C,N,V,$,U,z,Y,G,K):J&6?A(C,N,V,$,U,z,Y,G,K):(J&64||J&128)&&q.process(C,N,V,$,U,z,Y,G,K,re)}ue!=null&&U&&Bo(ue,C&&C.ref,z,N||C,!N)},k=(C,N,V,$)=>{if(C==null)r(N.el=a(N.children),V,$);else{const U=N.el=C.el;N.children!==C.children&&u(U,N.children)}},S=(C,N,V,$)=>{C==null?r(N.el=l(N.children||""),V,$):N.el=C.el},P=(C,N,V,$)=>{[C.el,C.anchor]=E(C.children,N,V,$,C.el,C.anchor)},_=({el:C,anchor:N},V,$)=>{let U;for(;C&&C!==N;)U=p(C),r(C,V,$),C=U;r(N,V,$)},R=({el:C,anchor:N})=>{let V;for(;C&&C!==N;)V=p(C),s(C),C=V;s(N)},D=(C,N,V,$,U,z,Y,G,K)=>{N.type==="svg"?Y="svg":N.type==="math"&&(Y="mathml"),C==null?M(N,V,$,U,z,Y,G,K):y(C,N,U,z,Y,G,K)},M=(C,N,V,$,U,z,Y,G)=>{let K,q;const{props:ue,shapeFlag:J,transition:oe,dirs:ie}=C;if(K=C.el=o(C.type,z,ue&&ue.is,ue),J&8?f(K,C.children):J&16&&v(C.children,K,null,$,U,Nu(C,z),Y,G),ie&&Pn(C,null,$,"created"),T(K,C,C.scopeId,Y,$),ue){for(const Ce in ue)Ce!=="value"&&!ai(Ce)&&i(K,Ce,null,ue[Ce],z,$);"value"in ue&&i(K,"value",null,ue.value,z),(q=ue.onVnodeBeforeMount)&&qt(q,$,C)}ie&&Pn(C,null,$,"beforeMount");const he=oE(U,oe);he&&oe.beforeEnter(K),r(K,N,V),((q=ue&&ue.onVnodeMounted)||he||ie)&&yt(()=>{q&&qt(q,$,C),he&&oe.enter(K),ie&&Pn(C,null,$,"mounted")},U)},T=(C,N,V,$,U)=>{if(V&&g(C,V),$)for(let z=0;z<$.length;z++)g(C,$[z]);if(U){let z=U.subTree;if(N===z||Vc(z.type)&&(z.ssContent===N||z.ssFallback===N)){const Y=U.vnode;T(C,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},v=(C,N,V,$,U,z,Y,G,K=0)=>{for(let q=K;q<C.length;q++){const ue=C[q]=G?Sr(C[q]):Yt(C[q]);b(null,ue,N,V,$,U,z,Y,G)}},y=(C,N,V,$,U,z,Y)=>{const G=N.el=C.el;let{patchFlag:K,dynamicChildren:q,dirs:ue}=N;K|=C.patchFlag&16;const J=C.props||Ve,oe=N.props||Ve;let ie;if(V&&ds(V,!1),(ie=oe.onVnodeBeforeUpdate)&&qt(ie,V,N,C),ue&&Pn(N,C,V,"beforeUpdate"),V&&ds(V,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&f(G,""),q?I(C.dynamicChildren,q,G,V,$,Nu(N,U),z):Y||ne(C,N,G,null,V,$,Nu(N,U),z,!1),K>0){if(K&16)x(G,J,oe,V,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const he=N.dynamicProps;for(let Ce=0;Ce<he.length;Ce++){const Se=he[Ce],Tt=J[Se],ft=oe[Se];(ft!==Tt||Se==="value")&&i(G,Se,Tt,ft,U,V)}}K&1&&C.children!==N.children&&f(G,N.children)}else!Y&&q==null&&x(G,J,oe,V,U);((ie=oe.onVnodeUpdated)||ue)&&yt(()=>{ie&&qt(ie,V,N,C),ue&&Pn(N,C,V,"updated")},$)},I=(C,N,V,$,U,z,Y)=>{for(let G=0;G<N.length;G++){const K=C[G],q=N[G],ue=K.el&&(K.type===Ot||!_n(K,q)||K.shapeFlag&70)?d(K.el):V;b(K,q,ue,null,$,U,z,Y,!0)}},x=(C,N,V,$,U)=>{if(N!==V){if(N!==Ve)for(const z in N)!ai(z)&&!(z in V)&&i(C,z,N[z],null,U,$);for(const z in V){if(ai(z))continue;const Y=V[z],G=N[z];Y!==G&&z!=="value"&&i(C,z,G,Y,U,$)}"value"in V&&i(C,"value",N.value,V.value,U)}},O=(C,N,V,$,U,z,Y,G,K)=>{const q=N.el=C?C.el:a(""),ue=N.anchor=C?C.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=N;ie&&(G=G?G.concat(ie):ie),C==null?(r(q,V,$),r(ue,V,$),v(N.children||[],V,ue,U,z,Y,G,K)):J>0&&J&64&&oe&&C.dynamicChildren?(I(C.dynamicChildren,oe,V,U,z,Y,G),(N.key!=null||U&&N===U.subTree)&&aE(C,N,!0)):ne(C,N,V,ue,U,z,Y,G,K)},A=(C,N,V,$,U,z,Y,G,K)=>{N.slotScopeIds=G,C==null?N.shapeFlag&512?U.ctx.activate(N,V,$,Y,K):ge(N,V,$,U,z,Y,K):Ee(C,N,K)},ge=(C,N,V,$,U,z,Y)=>{const G=C.component=sR(C,$,U);if(ha(C)&&(G.ctx.renderer=re),iR(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,Z,Y),!C.el){const K=G.subTree=be(st);S(null,K,N,V)}}else Z(G,C,N,V,U,z,Y)},Ee=(C,N,V)=>{const $=N.component=C.component;if(WA(C,N,V))if($.asyncDep&&!$.asyncResolved){se($,N,V);return}else $.next=N,$.update();else N.el=C.el,$.vnode=N},Z=(C,N,V,$,U,z,Y)=>{const G=()=>{if(C.isMounted){let{next:J,bu:oe,u:ie,parent:he,vnode:Ce}=C;{const It=cE(C);if(It){J&&(J.el=Ce.el,se(C,J,Y)),It.asyncDep.then(()=>{C.isUnmounted||G()});return}}let Se=J,Tt;ds(C,!1),J?(J.el=Ce.el,se(C,J,Y)):J=Ce,oe&&ci(oe),(Tt=J.props&&J.props.onVnodeBeforeUpdate)&&qt(Tt,he,J,Ce),ds(C,!0);const ft=Du(C),mt=C.subTree;C.subTree=ft,b(mt,ft,d(mt.el),j(mt),C,U,z),J.el=ft.el,Se===null&&Tl(C,ft.el),ie&&yt(ie,U),(Tt=J.props&&J.props.onVnodeUpdated)&&yt(()=>qt(Tt,he,J,Ce),U)}else{let J;const{el:oe,props:ie}=N,{bm:he,m:Ce,parent:Se,root:Tt,type:ft}=C,mt=jr(N);if(ds(C,!1),he&&ci(he),!mt&&(J=ie&&ie.onVnodeBeforeMount)&&qt(J,Se,N),ds(C,!0),oe&&De){const It=()=>{C.subTree=Du(C),De(oe,C.subTree,C,U,null)};mt&&ft.__asyncHydrate?ft.__asyncHydrate(oe,C,It):It()}else{Tt.ce&&Tt.ce._injectChildStyle(ft);const It=C.subTree=Du(C);b(null,It,V,$,C,U,z),N.el=It.el}if(Ce&&yt(Ce,U),!mt&&(J=ie&&ie.onVnodeMounted)){const It=N;yt(()=>qt(J,Se,It),U)}(N.shapeFlag&256||Se&&jr(Se.vnode)&&Se.vnode.shapeFlag&256)&&C.a&&yt(C.a,U),C.isMounted=!0,N=V=$=null}};C.scope.on();const K=C.effect=new lv(G);C.scope.off();const q=C.update=K.run.bind(K),ue=C.job=K.runIfDirty.bind(K);ue.i=C,ue.id=C.uid,K.scheduler=()=>Xh(ue),ds(C,!0),q()},se=(C,N,V)=>{N.component=C;const $=C.vnode.props;C.vnode=N,C.next=null,CA(C,N.props,$,V),NA(C,N.children,V),ss(),ym(C),is()},ne=(C,N,V,$,U,z,Y,G,K=!1)=>{const q=C&&C.children,ue=C?C.shapeFlag:0,J=N.children,{patchFlag:oe,shapeFlag:ie}=N;if(oe>0){if(oe&128){dn(q,J,V,$,U,z,Y,G,K);return}else if(oe&256){We(q,J,V,$,U,z,Y,G,K);return}}ie&8?(ue&16&&Ht(q,U,z),J!==q&&f(V,J)):ue&16?ie&16?dn(q,J,V,$,U,z,Y,G,K):Ht(q,U,z,!0):(ue&8&&f(V,""),ie&16&&v(J,V,$,U,z,Y,G,K))},We=(C,N,V,$,U,z,Y,G,K)=>{C=C||ii,N=N||ii;const q=C.length,ue=N.length,J=Math.min(q,ue);let oe;for(oe=0;oe<J;oe++){const ie=N[oe]=K?Sr(N[oe]):Yt(N[oe]);b(C[oe],ie,V,null,U,z,Y,G,K)}q>ue?Ht(C,U,z,!0,!1,J):v(N,V,$,U,z,Y,G,K,J)},dn=(C,N,V,$,U,z,Y,G,K)=>{let q=0;const ue=N.length;let J=C.length-1,oe=ue-1;for(;q<=J&&q<=oe;){const ie=C[q],he=N[q]=K?Sr(N[q]):Yt(N[q]);if(_n(ie,he))b(ie,he,V,null,U,z,Y,G,K);else break;q++}for(;q<=J&&q<=oe;){const ie=C[J],he=N[oe]=K?Sr(N[oe]):Yt(N[oe]);if(_n(ie,he))b(ie,he,V,null,U,z,Y,G,K);else break;J--,oe--}if(q>J){if(q<=oe){const ie=oe+1,he=ie<ue?N[ie].el:$;for(;q<=oe;)b(null,N[q]=K?Sr(N[q]):Yt(N[q]),V,he,U,z,Y,G,K),q++}}else if(q>oe)for(;q<=J;)Ke(C[q],U,z,!0),q++;else{const ie=q,he=q,Ce=new Map;for(q=he;q<=oe;q++){const Mt=N[q]=K?Sr(N[q]):Yt(N[q]);Mt.key!=null&&Ce.set(Mt.key,q)}let Se,Tt=0;const ft=oe-he+1;let mt=!1,It=0;const _r=new Array(ft);for(q=0;q<ft;q++)_r[q]=0;for(q=ie;q<=J;q++){const Mt=C[q];if(Tt>=ft){Ke(Mt,U,z,!0);continue}let nn;if(Mt.key!=null)nn=Ce.get(Mt.key);else for(Se=he;Se<=oe;Se++)if(_r[Se-he]===0&&_n(Mt,N[Se])){nn=Se;break}nn===void 0?Ke(Mt,U,z,!0):(_r[nn-he]=q+1,nn>=It?It=nn:mt=!0,b(Mt,N[nn],V,null,U,z,Y,G,K),Tt++)}const Bs=mt?MA(_r):ii;for(Se=Bs.length-1,q=ft-1;q>=0;q--){const Mt=he+q,nn=N[Mt],$s=Mt+1<ue?N[Mt+1].el:$;_r[q]===0?b(null,nn,V,$s,U,z,Y,G,K):mt&&(Se<0||q!==Bs[Se]?tn(nn,V,$s,2):Se--)}}},tn=(C,N,V,$,U=null)=>{const{el:z,type:Y,transition:G,children:K,shapeFlag:q}=C;if(q&6){tn(C.component.subTree,N,V,$);return}if(q&128){C.suspense.move(N,V,$);return}if(q&64){Y.move(C,N,V,re);return}if(Y===Ot){r(z,N,V);for(let J=0;J<K.length;J++)tn(K[J],N,V,$);r(C.anchor,N,V);return}if(Y===bo){_(C,N,V);return}if($!==2&&q&1&&G)if($===0)G.beforeEnter(z),r(z,N,V),yt(()=>G.enter(z),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,he=()=>r(z,N,V),Ce=()=>{J(z,()=>{he(),ie&&ie()})};oe?oe(z,he,Ce):Ce()}else r(z,N,V)},Ke=(C,N,V,$=!1,U=!1)=>{const{type:z,props:Y,ref:G,children:K,dynamicChildren:q,shapeFlag:ue,patchFlag:J,dirs:oe,cacheIndex:ie}=C;if(J===-2&&(U=!1),G!=null&&Bo(G,null,V,C,!0),ie!=null&&(N.renderCache[ie]=void 0),ue&256){N.ctx.deactivate(C);return}const he=ue&1&&oe,Ce=!jr(C);let Se;if(Ce&&(Se=Y&&Y.onVnodeBeforeUnmount)&&qt(Se,N,C),ue&6)An(C.component,V,$);else{if(ue&128){C.suspense.unmount(V,$);return}he&&Pn(C,null,N,"beforeUnmount"),ue&64?C.type.remove(C,N,V,re,$):q&&!q.hasOnce&&(z!==Ot||J>0&&J&64)?Ht(q,N,V,!1,!0):(z===Ot&&J&384||!U&&ue&16)&&Ht(K,N,V),$&&Ge(C)}(Ce&&(Se=Y&&Y.onVnodeUnmounted)||he)&&yt(()=>{Se&&qt(Se,N,C),he&&Pn(C,null,N,"unmounted")},V)},Ge=C=>{const{type:N,el:V,anchor:$,transition:U}=C;if(N===Ot){gr(V,$);return}if(N===bo){R(C);return}const z=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(C.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(V,z);G?G(C.el,z,K):K()}else z()},gr=(C,N)=>{let V;for(;C!==N;)V=p(C),s(C),C=V;s(N)},An=(C,N,V)=>{const{bum:$,scope:U,job:z,subTree:Y,um:G,m:K,a:q}=C;Mc(K),Mc(q),$&&ci($),U.stop(),z&&(z.flags|=8,Ke(Y,C,N,V)),G&&yt(G,N),yt(()=>{C.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},Ht=(C,N,V,$=!1,U=!1,z=0)=>{for(let Y=z;Y<C.length;Y++)Ke(C[Y],N,V,$,U)},j=C=>{if(C.shapeFlag&6)return j(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=p(C.anchor||C.el),V=N&&N[tA];return V?p(V):N};let ee=!1;const X=(C,N,V)=>{C==null?N._vnode&&Ke(N._vnode,null,null,!0):b(N._vnode||null,C,N,null,null,null,V),N._vnode=C,ee||(ee=!0,ym(),Nc(),ee=!1)},re={p:b,um:Ke,m:tn,r:Ge,mt:ge,mc:v,pc:ne,pbc:I,n:j,o:t};let Ie,De;return e&&([Ie,De]=e(re)),{render:X,hydrate:Ie,createApp:SA(X,Ie)}}function Nu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ds({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function oE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function aE(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&aE(o,a)),a.type===Is&&(a.el=o.el)}}function MA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cE(e)}function Mc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const VA=Symbol.for("v-scx"),FA=()=>wt(VA);function UA(t,e){return ed(t,null,e)}function Dn(t,e,n){return ed(t,e,n)}function ed(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,a=dt({},n),l=e&&r||!e&&i!=="post";let u;if(Ei){if(i==="sync"){const g=FA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Nn,g.resume=Nn,g.pause=Nn,g}}const f=it;a.call=(g,E,b)=>wn(g,f,E,b);let d=!1;i==="post"?a.scheduler=g=>{yt(g,f&&f.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,E)=>{E?g():Xh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=JI(t,e,a);return Ei&&(u?u.push(p):l&&p()),p}function jA(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?lE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=pa(this),a=ed(s,i.bind(r),n);return o(),a}function lE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const BA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${Ls(e)}Modifiers`];function $A(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&BA(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>qe(f)?f.trim():f)),o.number&&(s=n.map(Pc)));let a,l=r[a=Iu(e)]||r[a=Iu(hn(e))];!l&&i&&(l=r[a=Iu(Ls(e))]),l&&wn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wn(u,t,6,s)}}function uE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const f=uE(u,e,!0);f&&(a=!0,dt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Le(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):dt(o,i),Le(t)&&r.set(t,o),o)}function bl(t,e){return!t||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Ls(e))||xe(t,e))}function Du(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:f,props:d,data:p,setupState:g,ctx:E,inheritAttrs:b}=t,k=Dc(t);let S,P;try{if(n.shapeFlag&4){const R=s||r,D=R;S=Yt(u.call(D,R,f,d,g,p,E)),P=a}else{const R=e;S=Yt(R.length>1?R(d,{attrs:a,slots:o,emit:l}):R(d,null)),P=e.props?a:zA(a)}}catch(R){To.length=0,Mi(R,t,1),S=be(st)}let _=S;if(P&&b!==!1){const R=Object.keys(P),{shapeFlag:D}=_;R.length&&D&7&&(i&&R.some(Fh)&&(P=qA(P,i)),_=sr(_,P,!1,!0))}return n.dirs&&(_=sr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&yi(_,n.transition),S=_,Dc(k),S}function HA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Rs(s)){if(s.type!==st||s.children==="v-if"){if(n)return;n=s}}else return}return n}const zA=t=>{let e;for(const n in t)(n==="class"||n==="style"||aa(n))&&((e||(e={}))[n]=t[n]);return e},qA=(t,e)=>{const n={};for(const r in t)(!Fh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function WA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Pm(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!bl(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Pm(r,o,u):!0:!!o;return!1}function Pm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!bl(n,i))return!0}return!1}function Tl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vc=t=>t.__isSuspense;let If=0;const KA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)GA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}QA(t,e,n,r,s,o,a,l,u)}},hydrate:YA,normalize:XA},td=KA;function Ho(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function GA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:f}}=l,d=f("div"),p=t.suspense=fE(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Ho(t,"onPending"),Ho(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ui(p,t.ssFallback)):p.resolve(!1,!0)}function QA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:f}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:E,pendingBranch:b,isInFallback:k,isHydrating:S}=d;if(b)d.pendingBranch=p,_n(p,b)?(l(b,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():k&&(S||(l(E,g,n,r,s,null,i,o,a),ui(d,g)))):(d.pendingId=If++,S?(d.isHydrating=!1,d.activeBranch=b):u(b,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),k?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(E,g,n,r,s,null,i,o,a),ui(d,g))):E&&_n(p,E)?(l(E,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(E&&_n(p,E))l(E,p,n,r,s,d,i,o,a),ui(d,p);else if(Ho(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=If++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:P,pendingId:_}=d;P>0?setTimeout(()=>{d.pendingId===_&&d.fallback(g)},P):P===0&&d.fallback(g)}}function fE(t,e,n,r,s,i,o,a,l,u,f=!1){const{p:d,m:p,um:g,n:E,o:{parentNode:b,remove:k}}=u;let S;const P=JA(t);P&&e&&e.pendingBranch&&(S=e.pendingId,e.deps++);const _=t.props?sv(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:If++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(M=!1,T=!1){const{vnode:v,activeBranch:y,pendingBranch:I,pendingId:x,effects:O,parentComponent:A,container:ge}=D;let Ee=!1;D.isHydrating?D.isHydrating=!1:M||(Ee=y&&I.transition&&I.transition.mode==="out-in",Ee&&(y.transition.afterLeave=()=>{x===D.pendingId&&(p(I,ge,i===R?E(y):i,0),yf(O))}),y&&(b(y.el)===ge&&(i=E(y)),g(y,A,D,!0)),Ee||p(I,ge,i,0)),ui(D,I),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...O),se=!0;break}Z=Z.parent}!se&&!Ee&&yf(O),D.effects=[],P&&e&&e.pendingBranch&&S===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),Ho(v,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:T,activeBranch:v,parentComponent:y,container:I,namespace:x}=D;Ho(T,"onFallback");const O=E(v),A=()=>{D.isInFallback&&(d(null,M,I,O,y,null,x,a,l),ui(D,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(v.transition.afterLeave=A),D.isInFallback=!0,g(v,y,null,!0),ge||A()},move(M,T,v){D.activeBranch&&p(D.activeBranch,M,T,v),D.container=M},next(){return D.activeBranch&&E(D.activeBranch)},registerDep(M,T,v){const y=!!D.pendingBranch;y&&D.deps++;const I=M.vnode.el;M.asyncDep.catch(x=>{Mi(x,M,0)}).then(x=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:O}=M;Rf(M,x),I&&(O.el=I);const A=!I&&M.subTree.el;T(M,O,b(I||M.subTree.el),I?null:E(M.subTree),D,o,v),A&&k(A),Tl(M,O.el),y&&--D.deps===0&&D.resolve()})},unmount(M,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,T),D.pendingBranch&&g(D.pendingBranch,n,M,T)}};return D}function YA(t,e,n,r,s,i,o,a,l){const u=e.suspense=fE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function XA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Cm(r?n.default:n),t.ssFallback=r?Cm(n.fallback):be(st)}function Cm(t){let e;if(pe(t)){const n=vi&&t._c;n&&(t._d=!1,$t()),t=t(),n&&(t._d=!0,e=Gt,dE())}return le(t)&&(t=HA(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function hE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):yf(t)}function ui(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Tl(r,s))}function JA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ot=Symbol.for("v-fgt"),Is=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),To=[];let Gt=null;function $t(t=!1){To.push(Gt=t?null:[])}function dE(){To.pop(),Gt=To[To.length-1]||null}let vi=1;function km(t,e=!1){vi+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function pE(t){return t.dynamicChildren=vi>0?Gt||ii:null,dE(),vi>0&&Gt&&Gt.push(t),t}function zo(t,e,n,r,s,i){return pE(He(t,e,n,r,s,i,!0))}function Xn(t,e,n,r,s){return pE(be(t,e,n,r,s,!0))}function Rs(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const mE=({key:t})=>t??null,fc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Qe(t)||pe(t)?{i:at,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mE(e),ref:e&&fc(e),scopeId:kv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return a?(nd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),vi>0&&!o&&Gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Gt.push(l),l}const be=ZA;function ZA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zv)&&(t=st),Rs(t)){const a=sr(t,e,!0);return n&&nd(a,n),vi>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag=-2,a}if(lR(t)&&(t=t.__vccOpts),e){e=eR(e);let{class:a,style:l}=e;a&&!qe(a)&&(e.class=ca(a)),Le(l)&&(Qh(l)&&!le(l)&&(l=dt({},l)),e.style=_l(l))}const o=qe(t)?1:Vc(t)?128:Ov(t)?64:Le(t)?4:pe(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function eR(t){return t?Qh(t)||Jv(t)?dt({},t):t:null}function sr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?gE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&mE(u),ref:e&&e.ref?n&&i?le(i)?i.concat(fc(e)):[i,fc(e)]:fc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&yi(f,l.clone(f)),f}function an(t=" ",e=0){return be(Is,null,t,e)}function e9(t,e){const n=be(bo,null,t);return n.staticCount=e,n}function tR(t="",e=!1){return e?($t(),Xn(st,null,t)):be(st,null,t)}function Yt(t){return t==null||typeof t=="boolean"?be(st):le(t)?be(Ot,null,t.slice()):Rs(t)?Sr(t):be(Is,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sr(t)}function nd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Jv(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function gE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ca([e.class,r.class]));else if(s==="style")e.style=_l([e.style,r.style]);else if(aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){wn(t,e,7,[n,r])}const nR=Qv();let rR=0;function sR(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nR,i={uid:rR++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eE(r,s),emitsOptions:uE(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$A.bind(null,i),t.ce&&t.ce(i),i}let it=null;const Il=()=>it||at;let Fc,Af;{const t=gl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Fc=e("__VUE_INSTANCE_SETTERS__",n=>it=n),Af=e("__VUE_SSR_SETTERS__",n=>Ei=n)}const pa=t=>{const e=it;return Fc(t),t.scope.on(),()=>{t.scope.off(),Fc(e)}},Om=()=>{it&&it.scope.off(),Fc(null)};function _E(t){return t.vnode.shapeFlag&4}let Ei=!1;function iR(t,e=!1,n=!1){e&&Af(e);const{props:r,children:s}=t.vnode,i=_E(t);PA(t,r,i,e),xA(t,s,n);const o=i?oR(t,e):void 0;return e&&Af(!1),o}function oR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,EA);const{setup:r}=n;if(r){ss();const s=t.setupContext=r.length>1?cR(t):null,i=pa(t),o=fa(r,t,0,[t.props,s]),a=ev(o);if(is(),i(),(a||t.sp)&&!jr(t)&&Jh(t),a){if(o.then(Om,Om),e)return o.then(l=>{Rf(t,l)}).catch(l=>{Mi(l,t,0)});t.asyncDep=o}else Rf(t,o)}else yE(t)}function Rf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Av(e)),yE(t)}function yE(t,e,n){const r=t.type;t.render||(t.render=r.render||Nn);{const s=pa(t);ss();try{wA(t)}finally{is(),s()}}}const aR={get(t,e){return Ct(t,"get",""),t[e]}};function cR(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aR),slots:t.slots,emit:t.emit,expose:e}}function Al(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Av(Yh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wo)return wo[n](t)},has(e,n){return n in e||n in wo}})):t.proxy}function Sf(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function lR(t){return pe(t)&&"__vccOpts"in t}const Fe=(t,e)=>YI(t,e,Ei);function ct(t,e,n){const r=arguments.length;return r===2?Le(e)&&!le(e)?Rs(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rs(n)&&(n=[n]),be(t,e,n))}const uR="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pf;const xm=typeof window<"u"&&window.trustedTypes;if(xm)try{Pf=xm.createPolicy("vue",{createHTML:t=>t})}catch{}const vE=Pf?t=>Pf.createHTML(t):t=>t,fR="http://www.w3.org/2000/svg",hR="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Nm=Gn&&Gn.createElement("template"),dR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Gn.createElementNS(fR,t):e==="mathml"?Gn.createElementNS(hR,t):n?Gn.createElement(t,{is:n}):Gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nm.innerHTML=vE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Nm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",io="animation",qo=Symbol("_vtc"),EE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pR=dt({},xv,EE),mR=t=>(t.displayName="Transition",t.props=pR,t),gR=mR((t,{slots:e})=>ct(sA,_R(t),e)),ps=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Dm=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function _R(t){const e={};for(const O in t)O in EE||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,E=yR(s),b=E&&E[0],k=E&&E[1],{onBeforeEnter:S,onEnter:P,onEnterCancelled:_,onLeave:R,onLeaveCancelled:D,onBeforeAppear:M=S,onAppear:T=P,onAppearCancelled:v=_}=e,y=(O,A,ge,Ee)=>{O._enterCancelled=Ee,ms(O,A?f:a),ms(O,A?u:o),ge&&ge()},I=(O,A)=>{O._isLeaving=!1,ms(O,d),ms(O,g),ms(O,p),A&&A()},x=O=>(A,ge)=>{const Ee=O?T:P,Z=()=>y(A,O,ge);ps(Ee,[A,Z]),Lm(()=>{ms(A,O?l:i),Wn(A,O?f:a),Dm(Ee)||Mm(A,r,b,Z)})};return dt(e,{onBeforeEnter(O){ps(S,[O]),Wn(O,i),Wn(O,o)},onBeforeAppear(O){ps(M,[O]),Wn(O,l),Wn(O,u)},onEnter:x(!1),onAppear:x(!0),onLeave(O,A){O._isLeaving=!0;const ge=()=>I(O,A);Wn(O,d),O._enterCancelled?(Wn(O,p),Um()):(Um(),Wn(O,p)),Lm(()=>{O._isLeaving&&(ms(O,d),Wn(O,g),Dm(R)||Mm(O,r,k,ge))}),ps(R,[O,ge])},onEnterCancelled(O){y(O,!1,void 0,!0),ps(_,[O])},onAppearCancelled(O){y(O,!0,void 0,!0),ps(v,[O])},onLeaveCancelled(O){I(O),ps(D,[O])}})}function yR(t){if(t==null)return null;if(Le(t))return[Lu(t.enter),Lu(t.leave)];{const e=Lu(t);return[e,e]}}function Lu(t){return sv(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qo]||(t[qo]=new Set)).add(e)}function ms(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qo];n&&(n.delete(e),n.size||(t[qo]=void 0))}function Lm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vR=0;function Mm(t,e,n,r){const s=t._endId=++vR,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=ER(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},a+1),t.addEventListener(u,p)}function ER(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${wr}Delay`),i=r(`${wr}Duration`),o=Vm(s,i),a=r(`${io}Delay`),l=r(`${io}Duration`),u=Vm(a,l);let f=null,d=0,p=0;e===wr?o>0&&(f=wr,d=o,p=i.length):e===io?u>0&&(f=io,d=u,p=l.length):(d=Math.max(o,u),f=d>0?o>u?wr:io:null,p=f?f===wr?i.length:l.length:0);const g=f===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:f,timeout:d,propCount:p,hasTransform:g}}function Vm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Fm(n)+Fm(t[r])))}function Fm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Um(){return document.body.offsetHeight}function wR(t,e,n){const r=t[qo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jm=Symbol("_vod"),bR=Symbol("_vsh"),TR=Symbol(""),IR=/(^|;)\s*display\s*:/;function AR(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hc(r,a,"")}else for(const o in e)n[o]==null&&hc(r,o,"");for(const o in n)o==="display"&&(i=!0),hc(r,o,n[o])}else if(s){if(e!==n){const o=r[TR];o&&(n+=";"+o),r.cssText=n,i=IR.test(n)}}else e&&t.removeAttribute("style");jm in t&&(t[jm]=i?r.display:"",t[bR]&&(r.display="none"))}const Bm=/\s*!important$/;function hc(t,e,n){if(le(n))n.forEach(r=>hc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=RR(t,e);Bm.test(n)?t.setProperty(Ls(r),n.replace(Bm,""),"important"):t[r]=n}}const $m=["Webkit","Moz","ms"],Mu={};function RR(t,e){const n=Mu[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return Mu[e]=r;r=ml(r);for(let s=0;s<$m.length;s++){const i=$m[s]+r;if(i in t)return Mu[e]=i}return e}const Hm="http://www.w3.org/1999/xlink";function zm(t,e,n,r,s,i=vI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hm,e.slice(6,e.length)):t.setAttributeNS(Hm,e,n):n==null||i&&!iv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":En(n)?String(n):n)}function qm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=iv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Or(t,e,n,r){t.addEventListener(e,n,r)}function SR(t,e,n,r){t.removeEventListener(e,n,r)}const Wm=Symbol("_vei");function PR(t,e,n,r,s=null){const i=t[Wm]||(t[Wm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=CR(e);if(r){const u=i[e]=xR(r,s);Or(t,a,u,l)}else o&&(SR(t,a,o,l),i[e]=void 0)}}const Km=/(?:Once|Passive|Capture)$/;function CR(t){let e;if(Km.test(t)){e={};let r;for(;r=t.match(Km);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let Vu=0;const kR=Promise.resolve(),OR=()=>Vu||(kR.then(()=>Vu=0),Vu=Date.now());function xR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wn(NR(r,n.value),e,5,[r])};return n.value=t,n.attached=OR(),n}function NR(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DR=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wR(t,r,o):e==="style"?AR(t,n,r):aa(e)?Fh(e)||PR(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LR(t,e,r,o))?(qm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?qm(t,hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zm(t,e,r,o))};function LR(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gm(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gm(e)&&qe(n)?!1:e in t}const wi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ci(e,n):e};function MR(t){t.target.composing=!0}function Qm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rr=Symbol("_assign"),t9={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rr]=wi(s);const i=r||s.props&&s.props.type==="number";Or(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pc(a)),t[rr](a)}),n&&Or(t,"change",()=>{t.value=t.value.trim()}),e||(Or(t,"compositionstart",MR),Or(t,"compositionend",Qm),Or(t,"change",Qm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rr]=wi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Pc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},n9={deep:!0,created(t,e,n){t[rr]=wi(n),Or(t,"change",()=>{const r=t._modelValue,s=Wo(t),i=t.checked,o=t[rr];if(le(r)){const a=Bh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Di(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(wE(t,i))})},mounted:Ym,beforeUpdate(t,e,n){t[rr]=wi(n),Ym(t,e,n)}};function Ym(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Bh(e,r.props.value)>-1;else if(Di(e))s=e.has(r.props.value);else{if(e===n)return;s=la(e,wE(t,!0))}t.checked!==s&&(t.checked=s)}const r9={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Di(e);Or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pc(Wo(o)):Wo(o));t[rr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,hr(()=>{t._assigning=!1})}),t[rr]=wi(r)},mounted(t,{value:e}){Xm(t,e)},beforeUpdate(t,e,n){t[rr]=wi(n)},updated(t,{value:e}){t._assigning||Xm(t,e)}};function Xm(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Di(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Wo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Bh(e,a)>-1}else o.selected=e.has(a);else if(la(Wo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Wo(t){return"_value"in t?t._value:t.value}function wE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const VR=["ctrl","shift","alt","meta"],FR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VR.some(n=>t[`${n}Key`]&&!e.includes(n))},s9=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=FR[e[o]];if(a&&a(s,e))return}return t(s,...i)})},bE=dt({patchProp:DR},dR);let Io,Jm=!1;function UR(){return Io||(Io=DA(bE))}function jR(){return Io=Jm?Io:LA(bE),Jm=!0,Io}const BR=(...t)=>{const e=UR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=IE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,TE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},$R=(...t)=>{const e=jR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=IE(r);if(s)return n(s,!0,TE(s))},e};function TE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function IE(t){return qe(t)?document.querySelector(t):t}const HR=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,zR=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,qR=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function WR(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){KR(t);return}return e}function KR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ko(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!qR.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(HR.test(t)||zR.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,WR)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const GR=/#/g,QR=/&/g,YR=/\//g,XR=/=/g,rd=/\+/g,JR=/%5e/gi,ZR=/%60/gi,eS=/%7c/gi,tS=/%20/gi;function nS(t){return encodeURI(""+t).replace(eS,"|")}function Cf(t){return nS(typeof t=="string"?t:JSON.stringify(t)).replace(rd,"%2B").replace(tS,"+").replace(GR,"%23").replace(QR,"%26").replace(ZR,"`").replace(JR,"^").replace(YR,"%2F")}function Fu(t){return Cf(t).replace(XR,"%3D")}function Uc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function rS(t){return Uc(t.replace(rd," "))}function sS(t){return Uc(t.replace(rd," "))}function sd(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=rS(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=sS(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function iS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Fu(t)}=${Cf(n)}`).join("&"):`${Fu(t)}=${Cf(e)}`:Fu(t)}function oS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>iS(e,t[e])).filter(Boolean).join("&")}const aS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,cS=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,lS=/^([/\\]\s*){2,}[^/\\]/,uS=/^[\s\0]*(blob|data|javascript|vbscript):$/i,fS=/\/$|\/\?|\/#/,hS=/^\.?\//;function pr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?aS.test(t):cS.test(t)||(e.acceptRelative?lS.test(t):!1)}function dS(t){return!!t&&uS.test(t)}function kf(t="",e){return e?fS.test(t):t.endsWith("/")}function Rl(t="",e){if(!e)return(kf(t)?t.slice(0,-1):t)||"/";if(!kf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function jc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(kf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function pS(t=""){return t.startsWith("/")}function Zm(t=""){return pS(t)?t:"/"+t}function mS(t,e){if(RE(e)||pr(t))return t;const n=Rl(e);return t.startsWith(n)?t:Sl(n,t)}function eg(t,e){if(RE(e))return t;const n=Rl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function AE(t,e){const n=CE(t),r={...sd(n.search),...e};return n.search=oS(r),yS(n)}function RE(t){return!t||t==="/"}function gS(t){return t&&t!=="/"}function Sl(t,...e){let n=t||"";for(const r of e.filter(s=>gS(s)))if(n){const s=r.replace(hS,"");n=jc(n)+s}else n=r;return n}function SE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const f of n)if(!(!f||f==="/")){for(const[d,p]of f.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&pr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function _S(t,e,n={}){return n.trailingSlash||(t=jc(t),e=jc(e)),n.leadingSlash||(t=Zm(t),e=Zm(e)),n.encoding||(t=Uc(t),e=Uc(e)),t===e}const PE=Symbol.for("ufo:protocolRelative");function CE(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!pr(t,{acceptRelative:!0}))return tg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:f}=tg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:f,[PE]:!r}}function tg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function yS(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[PE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class vS extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function ES(t){var l,u,f,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((f=t.request)==null?void 0:f.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new vS(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,E]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[E]}});return a}const wS=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ng(t="GET"){return wS.has(t.toUpperCase())}function bS(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const TS=new Set(["image/svg","application/xml","application/xhtml","application/html"]),IS=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function AS(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return IS.test(e)?"json":TS.has(e)||e.startsWith("text/")?"text":"blob"}function RS(t,e,n,r){const s=SS((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function SS(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Qa(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const PS=new Set([408,409,425,429,500,502,503,504]),CS=new Set([101,204,205,304]);function kE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let f;typeof a.options.retry=="number"?f=a.options.retry:f=ng(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):PS.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:f-1})}}const u=ES(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const f={request:l,options:RS(l,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await Qa(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=mS(f.request,f.options.baseURL)),f.options.query&&(f.request=AE(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&ng(f.options.method)&&(bS(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let d;if(!f.options.signal&&f.options.timeout){const g=new r;d=setTimeout(()=>{const E=new Error("[TimeoutError]: The operation was aborted due to timeout");E.name="TimeoutError",E.code=23,g.abort(E)},f.options.timeout),f.options.signal=g.signal}try{f.response=await e(f.request,f.options)}catch(g){return f.error=g,f.options.onRequestError&&await Qa(f,f.options.onRequestError),await s(f)}finally{d&&clearTimeout(d)}if((f.response.body||f.response._bodyInit)&&!CS.has(f.response.status)&&f.options.method!=="HEAD"){const g=(f.options.parseResponse?"json":f.options.responseType)||AS(f.response.headers.get("content-type")||"");switch(g){case"json":{const E=await f.response.text(),b=f.options.parseResponse||Ko;f.response._data=b(E);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[g]()}}return f.options.onResponse&&await Qa(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await Qa(f,f.options.onResponseError),await s(f)):f.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>kE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Bc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),kS=Bc.fetch?(...t)=>Bc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),OS=Bc.Headers,xS=Bc.AbortController,NS=kE({fetch:kS,Headers:OS,AbortController:xS}),DS=NS,LS=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},$c=LS().app,MS=()=>$c.baseURL,VS=()=>$c.buildAssetsDir,id=(...t)=>SE(od(),VS(),...t),od=(...t)=>{const e=$c.cdnURL||$c.baseURL;return t.length?SE(e,...t):e};globalThis.__buildAssetsURL=id,globalThis.__publicAssetsURL=od;globalThis.$fetch||(globalThis.$fetch=DS.create({baseURL:MS()}));function Of(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Of(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const FS={run:t=>t()},US=()=>FS,OE=typeof console.createTask<"u"?console.createTask:US;function jS(t,e){const n=e.shift(),r=OE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function BS(t,e){const n=e.shift(),r=OE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Uu(t,e){for(const n of[...t])n(e)}class $S{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Of(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Of(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(jS,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(BS,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Uu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Uu(this._after,s)}):(this._after&&s&&Uu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function xE(){return new $S}function HS(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;xf.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{xf.delete(u)}}}}function zS(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=HS({...t,...r})),e[n]}}}const Hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},rg="__unctx__",qS=Hc[rg]||(Hc[rg]=zS()),WS=(t,e={})=>qS.get(t,e),sg="__unctx_async_handlers__",xf=Hc[sg]||(Hc[sg]=new Set);function fi(t){const e=[];for(const s of xf){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Nf={name:"page",mode:"out-in"},KS=!1,GS=!1,QS={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},YS=null,XS="#__nuxt",NE="nuxt-app",ig=36e5,JS="vite:preloadError";function DE(t=NE){return WS(t,{asyncContext:!1})}const ZS="__nuxt_plugin";function eP(t){var s;let e=0;const n={_id:t.id||NE||"nuxt-app",_scope:Hh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.16.2"},get vue(){return n.vueApp.version}},payload:Zn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Zn({}),state:fr({}),once:new Set,_errors:Zn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!ua()?n._scope.run(()=>og(n,i)):og(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Zn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=xE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ya(n,a,o),Ya(n.vueApp.config.globalProperties,a,o)},Ya(n.vueApp,"$nuxt",n),Ya(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(JS,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=Ue);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function tP(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function nP(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function rP(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var f;const u=((f=l.dependsOn)==null?void 0:f.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=nP(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)tP(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ZS]:!0,_name:e})}function og(t,e,n){const r=()=>e();return DE(t._id).set(t),t.vueApp.runWithContext(r)}function LE(t){var n;let e;return da()&&(e=(n=Il())==null?void 0:n.appContext.app.$nuxt),e||(e=DE(t).tryUse()),e||null}function Ue(t){const e=LE(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ms(t){return Ue().$config}function Ya(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function sP(t,e){return{ctx:{table:t},matchAll:n=>VE(n,t)}}function ME(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,ME(s)])):new Map(Object.entries(t[n]));return e}function iP(t){return sP(ME(t))}function VE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of ag(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of ag(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...VE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function ag(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function ju(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Df(t,e,n=".",r){if(!ju(e))return Df(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:ju(o)&&ju(s[i])?s[i]=Df(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function oP(t){return(...e)=>e.reduce((n,r)=>Df(n,r,"",t),{})}const FE=oP();function aP(t,e){try{return e in t}catch{return!1}}class Lf extends Error{constructor(n,r={}){super(n,r);rn(this,"statusCode",500);rn(this,"fatal",!1);rn(this,"unhandled",!1);rn(this,"statusMessage");rn(this,"data");rn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Mf(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=UE(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}rn(Lf,"__h3_error__",!0);function dc(t){if(typeof t=="string")return new Lf(t);if(cP(t))return t;const e=new Lf(t.message??t.statusMessage??"",{cause:t.cause||t});if(aP(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Mf(t.statusCode,e.statusCode):t.status&&(e.statusCode=Mf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;UE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function cP(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const lP=/[^\u0009\u0020-\u007E]/g;function UE(t=""){return t.replace(lP,"")}function Mf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const jE=Symbol("layout-meta"),ma=Symbol("route"),pt=()=>{var t;return(t=Ue())==null?void 0:t.$router},ad=()=>da()?wt(ma,Ue()._route):Ue()._route;function i9(t){return t}const uP=()=>{try{if(Ue()._processingMiddleware)return!0}catch{return!1}return!1},fP=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Vf(t):pt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,f),Promise.resolve()}const r=pr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&dS(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=uP();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:f}=CE(t);return{path:l,...u&&{query:sd(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=pt(),a=Ue();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Vf(t){return AE(t.path||"",t.query||{})+(t.hash||"")}const BE="__nuxt_error",Pl=()=>GI(Ue().payload,"error"),Pr=t=>{const e=Cl(t);try{const n=Ue(),r=Pl();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},$E=async(t={})=>{const e=Ue(),n=Pl();e.callHook("app:error:cleared",t),t.redirect&&await pt().replace(t.redirect),n.value=YS},HE=t=>!!t&&typeof t=="object"&&BE in t,Cl=t=>{const e=dc(t);return Object.defineProperty(e,BE,{value:!0,configurable:!1,writable:!1}),e};function cg(t){const e=dP(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const hP="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function dP(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=hP.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const pP=-1,mP=-2,gP=-3,_P=-4,yP=-5,vP=-6;function EP(t,e){return wP(JSON.parse(t),e)}function wP(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===pP)return;if(i===gP)return NaN;if(i===_P)return 1/0;if(i===yP)return-1/0;if(i===vP)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let g=1;g<a.length;g+=1)f.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],E=a[1],b=cg(E),k=new g(b);r[i]=k;break}case"ArrayBuffer":{const g=a[1],E=cg(g);r[i]=E;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const f=a[u];f!==mP&&(l[u]=s(f))}}else{const l={};r[i]=l;for(const u in a){const f=a[u];l[u]=s(f)}}return r[i]}return s(0)}const bP=new Set(["link","style","script","noscript"]),TP=new Set(["title","titleTemplate","script","style","noscript"]),lg=new Set(["base","meta","link","style","script","noscript"]),IP=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),AP=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),RP=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),SP=new Set(["templateParams","htmlAttrs","bodyAttrs"]),PP=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const CP=["name","property","http-equiv"];function zE(t){const e=t.split(":")[1];return PP.has(e)}function Ff(t){const{props:e,tag:n}=t;if(AP.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of CP)if(e[r]!==void 0)return`${n}:${e[r]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(TP.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function ug(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function zc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>zc(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=zc(s[o],e,o);return i}return s}function kP(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function qE(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=kP(n,r);return}if(RP.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function OP(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=qE({tag:t,props:{}},n);return r.key&&bP.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function xP(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=zc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(OP(s,o))}),r.flat()}const Uf=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,fg={base:-10,title:10},NP={critical:-8,high:-1,low:2},hg={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},DP=/@import/,oo=t=>t===""||t===!0;function LP(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=NP[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:hg;if(e.tag in fg)n=fg[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=hg.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?oo(e.props.async)?n=s.script.async:e.props.src&&!oo(e.props.defer)&&!oo(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:oo(e.props.defer)&&e.props.src&&!oo(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&DP.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function dg(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function MP(t={}){var a;const e=xE();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=[],o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:l=>dg(o,l),push(l,u){const f={...u||{}};delete f.head;const d=f._index??o._entryCount++,p={_i:d,input:l,options:f},g={_poll(E=!1){o.dirty=!0,!E&&i.push(d),e.callHook("entries:updated",o)},dispose(){r.delete(d)&&g._poll(!0)},patch(E){(!f.mode||f.mode==="server"&&n||f.mode==="client"&&!n)&&(p.input=E,r.set(d,p),g._poll())}};return g.patch(l),g},async resolveTags(){var g;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.length;){const E=i.shift(),b=r.get(E);if(b){const k={tags:xP(b.input,t.propResolvers||[]).map(S=>Object.assign(S,b.options)),entry:b};await e.callHook("entries:normalize",k),b._tags=k.tags.map((S,P)=>(S._w=LP(o,S),S._p=(b._i<<10)+P,S._d=Ff(S),S))}}let u=!1;l.entries.flatMap(E=>(E._tags||[]).map(b=>({...b,props:{...b.props}}))).sort(Uf).reduce((E,b)=>{const k=String(b._d||b._p);if(!E.has(k))return E.set(k,b);const S=E.get(k);if(((b==null?void 0:b.tagDuplicateStrategy)||(SP.has(b.tag)?"merge":null)||(b.key&&b.key===S.key?"merge":null))==="merge"){const _={...S.props};Object.entries(b.props).forEach(([R,D])=>_[R]=R==="style"?new Map([...S.props.style||new Map,...D]):R==="class"?new Set([...S.props.class||new Set,...D]):D),E.set(k,{...b,props:_})}else b._p>>10===S._p>>10&&zE(b._d)?(E.set(k,Object.assign([...Array.isArray(S)?S:[S],b],b)),u=!0):(b._w===S._w?b._p>S._p:(b==null?void 0:b._w)<(S==null?void 0:S._w))&&E.set(k,b);return E},l.tagMap);const f=l.tagMap.get("title"),d=l.tagMap.get("titleTemplate");if(o._title=f==null?void 0:f.textContent,d){const E=d==null?void 0:d.textContent;if(o._titleTemplate=E,E){let b=typeof E=="function"?E(f==null?void 0:f.textContent):E;typeof b=="string"&&!o.plugins.has("template-params")&&(b=b.replace("%s",(f==null?void 0:f.textContent)||"")),f?b===null?l.tagMap.delete("title"):l.tagMap.set("title",{...f,textContent:b}):(d.tag="title",d.textContent=b)}}l.tags=Array.from(l.tagMap.values()),u&&(l.tags=l.tags.flat().sort(Uf)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const p=[];for(const E of l.tags){const{innerHTML:b,tag:k,props:S}=E;if(IP.has(k)&&!(Object.keys(S).length===0&&!E.innerHTML&&!E.textContent)&&!(k==="meta"&&!S.content&&!S["http-equiv"]&&!S.charset)){if(k==="script"&&b){if((g=S.type)!=null&&g.endsWith("json")){const P=typeof b=="string"?b:JSON.stringify(b);E.innerHTML=P.replace(/</g,"\\u003C")}else typeof b=="string"&&(E.innerHTML=b.replace(new RegExp(`</${k}`,"g"),`<\\/${k}`));E._d=Ff(E)}p.push(E)}}return p}};return((t==null?void 0:t.plugins)||[]).forEach(l=>dg(o,l)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(l=>l&&o.push(l)),o}const Cr="%separator",VP=new RegExp(`${Cr}(?:\\s*${Cr})*`,"g");function FP(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function Xa(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Cr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Cr||!i.includes(a))return a;const l=FP(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Cr)&&(t=t.slice(0,-Cr.length)),t.startsWith(Cr)&&(t=t.slice(Cr.length)),t=t.replace(VP,n||"").trim()),t}const pg=t=>t.includes(":key")?t:t.split(":").join(":key:"),UP={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=pg(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=pg(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Uf))}}},jP={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function jf(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>jf(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await jf(t[r]);return n}return t}const BP={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(jf(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},$P={meta:"content",link:"href",htmlAttrs:"lang"},HP=["innerHTML","textContent"],zP=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=Xa(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=$P[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=Xa(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const l of HP)typeof o[l]=="string"&&(o[l]=Xa(o[l],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=Xa(n.textContent,t._templateParams,t._separator))}}}),qP=(t,e)=>Qe(e)?BI(e):e,cd="usehead";function WP(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(cd,t)}}.install}function KP(){if(da()){const t=wt(cd);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function GP(t,e={}){const n=e.head||KP();return n.ssr?n.push(t||{},e):QP(n,t,e)}function QP(t,e,n={}){const r=Nt(!1);let s;return UA(()=>{const o=r.value?{}:zc(e,qP);s?s.patch(o):s=t.push(o,n)}),Il()&&(Vi(()=>{s.dispose()}),Fv(()=>{r.value=!0}),Vv(()=>{r.value=!1})),s}function YP(t){var n;const e=t||LE();return((n=e==null?void 0:e.ssrContext)==null?void 0:n.head)||(e==null?void 0:e.runWithContext(()=>{if(da())return wt(cd)}))}function mg(t,e={}){const n=YP(e.nuxt);if(n)return GP(t,{head:n,...e})}const XP="modulepreload",JP=function(t,e){return new URL(t,e).href},gg={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=JP(u,r),u in gg)return;gg[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!r)for(let E=o.length-1;E>=0;E--){const b=o[E];if(b.href===u&&(!f||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":XP,f||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((E,b)=>{g.addEventListener("load",E),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let pc,mc;function ZP(){return pc=$fetch(id(`builds/meta/${Ms().app.buildId}.json`),{responseType:"json"}),pc.then(t=>{mc=iP(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),pc}function kl(){return pc||ZP()}async function ld(t){const e=typeof t=="string"?t:t.path;if(await kl(),!mc)return console.error("[nuxt] Error creating app manifest matcher.",mc),{};try{return FE({},...mc.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function _g(t,e={}){if(!await KE(t))return null;const r=await tC(t,e);return await WE(r)||null}const eC="_payload.json";async function tC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||pr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ms(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await KE(t)?i:r.app.baseURL;return Sl(o,n.pathname,eC+(s?`?${s}`:""))}async function WE(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(GE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function KE(t=ad().path){const e=Ue();return t=Rl(t),(await kl()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await ld({path:t});return!!r.prerender&&!r.redirect})}let gs=null;async function nC(){var r;if(gs)return gs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await GE(t.textContent||""),n=t.dataset.src?await WE(t.dataset.src):void 0;return gs={...e,...n,...window.__NUXT__},(r=gs.config)!=null&&r.public&&(gs.config.public=fr(gs.config.public)),gs}async function GE(t){return await EP(t,Ue()._payloadRevivers)}function rC(t,e){Ue()._payloadRevivers[t]=e}const sC=[["NuxtError",t=>Cl(t)],["EmptyShallowRef",t=>Uo(t==="_"?void 0:t==="0n"?BigInt(0):Ko(t))],["EmptyRef",t=>Nt(t==="_"?void 0:t==="0n"?BigInt(0):Ko(t))],["ShallowRef",t=>Uo(t)],["ShallowReactive",t=>Zn(t)],["Ref",t=>Nt(t)],["Reactive",t=>fr(t)]],iC=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of sC)rC(r,s);Object.assign(t.payload,([e,n]=fi(()=>t.runWithContext(nC)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function ud(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var g;const i=new Map,o=new Promise(E=>{t.resolveTags().then(b=>{E(b.map(k=>{const S=i.get(k._d)||0,P={tag:k,id:(S?`${k._d}:${S}`:k._d)||ug(k),shouldRender:!0};return k._d&&zE(k._d)&&i.set(k._d,S+1),P}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const E of["body","head"]){const b=(g=n[E])==null?void 0:g.children;for(const k of b){const S=k.tagName.toLowerCase();if(!lg.has(S))continue;const P=qE({tag:S,props:{}},{innerHTML:k.innerHTML,...k.getAttributeNames().reduce((_,R)=>(_[R]=k.getAttribute(R),_),{})||{}});if(P.key=k.getAttribute("data-hid")||void 0,P._d=Ff(P)||ug(P),a.elMap.has(P._d)){let _=1,R=P._d;for(;a.elMap.has(R);)R=`${P._d}:${_++}`;a.elMap.set(R,k)}else a.elMap.set(P._d,k)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(E,b,k){const S=`${E}:${b}`;a.sideEffects[S]=k,delete a.pendingSideEffects[S]}function u({id:E,$el:b,tag:k}){const S=k.tag.endsWith("Attrs");a.elMap.set(E,b),S||(k.textContent&&k.textContent!==b.textContent&&(b.textContent=k.textContent),k.innerHTML&&k.innerHTML!==b.innerHTML&&(b.innerHTML=k.innerHTML),l(E,"el",()=>{b==null||b.remove(),a.elMap.delete(E)}));for(const P in k.props){if(!Object.prototype.hasOwnProperty.call(k.props,P))continue;const _=k.props[P];if(P.startsWith("on")&&typeof _=="function"){const D=b==null?void 0:b.dataset;if(D&&D[`${P}fired`]){const M=P.slice(0,-5);_.call(b,new Event(M.substring(2)))}b.getAttribute(`data-${P}`)!==""&&((k.tag==="bodyAttrs"?n.defaultView:b).addEventListener(P.substring(2),_.bind(b)),b.setAttribute(`data-${P}`,""));continue}const R=`attr:${P}`;if(P==="class"){if(!_)continue;for(const D of _)S&&l(E,`${R}:${D}`,()=>b.classList.remove(D)),!b.classList.contains(D)&&b.classList.add(D)}else if(P==="style"){if(!_)continue;for(const[D,M]of _)l(E,`${R}:${D}`,()=>{b.style.removeProperty(D)}),b.style.setProperty(D,M)}else _!==!1&&_!==null&&(b.getAttribute(P)!==_&&b.setAttribute(P,_===!0?"":String(_)),S&&l(E,R,()=>b.removeAttribute(P)))}}const f=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const E of p){const{tag:b,shouldRender:k,id:S}=E;if(k){if(b.tag==="title"){n.title=b.textContent,l("title","",()=>n.title=a.title);continue}E.$el=E.$el||a.elMap.get(S),E.$el?u(E):lg.has(b.tag)&&f.push(E)}}for(const E of f){const b=E.tag.tagPosition||"head";E.$el=n.createElement(E.tag.tag),u(E),d[b]=d[b]||n.createDocumentFragment(),d[b].appendChild(E.$el)}for(const E of p)await t.hooks.callHook("dom:renderTag",E,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const E in a.pendingSideEffects)a.pendingSideEffects[E]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function oC(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||ud;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return MP({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function aC(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function cC(t={}){const e=oC({domOptions:{render:aC(()=>ud(e),n=>setTimeout(n,0))},...t});return e.install=WP(e),e}const lC={disableDefaults:!0,disableCapoSorting:!1,plugins:[jP,BP,zP,UP]},uC=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=cC(lC);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await ud(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Xs=typeof document<"u";function QE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&QE(t.default)}const Oe=Object.assign;function Bu(t,e){const n={};for(const r in e){const s=e[r];n[r]=bn(s)?s.map(t):t(s)}return n}const Ao=()=>{},bn=Array.isArray,YE=/#/g,hC=/&/g,dC=/\//g,pC=/=/g,mC=/\?/g,XE=/\+/g,gC=/%5B/g,_C=/%5D/g,JE=/%5E/g,yC=/%60/g,ZE=/%7B/g,vC=/%7C/g,ew=/%7D/g,EC=/%20/g;function fd(t){return encodeURI(""+t).replace(vC,"|").replace(gC,"[").replace(_C,"]")}function wC(t){return fd(t).replace(ZE,"{").replace(ew,"}").replace(JE,"^")}function Bf(t){return fd(t).replace(XE,"%2B").replace(EC,"+").replace(YE,"%23").replace(hC,"%26").replace(yC,"`").replace(ZE,"{").replace(ew,"}").replace(JE,"^")}function bC(t){return Bf(t).replace(pC,"%3D")}function TC(t){return fd(t).replace(YE,"%23").replace(mC,"%3F")}function IC(t){return t==null?"":TC(t).replace(dC,"%2F")}function Go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const AC=/\/$/,RC=t=>t.replace(AC,"");function $u(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=kC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Go(o)}}function SC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bi(e.matched[r],n.matched[s])&&tw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CC(t[n],e[n]))return!1;return!0}function CC(t,e){return bn(t)?vg(t,e):bn(e)?vg(e,t):t===e}function vg(t,e){return bn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function kC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qo;(function(t){t.pop="pop",t.push="push"})(Qo||(Qo={}));var Ro;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ro||(Ro={}));function OC(t){if(!t)if(Xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RC(t)}const xC=/^[^#]+#/;function NC(t,e){return t.replace(xC,"#")+e}function DC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ol=()=>({left:window.scrollX,top:window.scrollY});function LC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=DC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Eg(t,e){return(history.state?history.state.position-e:-1)+t}const $f=new Map;function MC(t,e){$f.set(t,e)}function VC(t){const e=$f.get(t);return $f.delete(t),e}let FC=()=>location.protocol+"//"+location.host;function nw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),yg(l,"")}return yg(n,t)+r+s}function UC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=nw(t,location),E=n.value,b=e.value;let k=0;if(p){if(n.value=g,e.value=p,o&&o===E){o=null;return}k=b?p.position-b.position:0}else r(g);s.forEach(S=>{S(n.value,E,{delta:k,type:Qo.pop,direction:k?k>0?Ro.forward:Ro.back:Ro.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Ol()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function wg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ol():null}}function jC(t){const{history:e,location:n}=window,r={value:nw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:FC()+t+l;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,u){const f=Oe({},e.state,wg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function a(l,u){const f=Oe({},s.value,e.state,{forward:l,scroll:Ol()});i(f.current,f,!0);const d=Oe({},wg(r.value,l,null),{position:f.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function BC(t){t=OC(t);const e=jC(t),n=UC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:NC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $C(t){return typeof t=="string"||t&&typeof t=="object"}function rw(t){return typeof t=="string"||typeof t=="symbol"}const sw=Symbol("");var bg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bg||(bg={}));function Ti(t,e){return Oe(new Error,{type:t,[sw]:!0},e)}function Kn(t,e){return t instanceof Error&&sw in t&&(e==null||!!(t.type&e))}const Tg="[^/]+?",HC={sensitive:!1,strict:!1,start:!0,end:!0},zC=/[.+*?^${}()[\]/\\]/g;function qC(t,e){const n=Oe({},HC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(zC,"\\$&"),g+=40;else if(p.type===1){const{value:E,repeatable:b,optional:k,regexp:S}=p;i.push({name:E,repeatable:b,optional:k});const P=S||Tg;if(P!==Tg){g+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${E}" (${P}): `+R.message)}}let _=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(_=k&&u.length<2?`(?:/${_})`:"/"+_),k&&(_+="?"),s+=_,g+=20,k&&(g+=-8),b&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",E=i[p-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function l(u){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:E,repeatable:b,optional:k}=g,S=E in u?u[E]:"";if(bn(S)&&!b)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const P=bn(S)?S.join("/"):S;if(!P)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);f+=P}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function WC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function iw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=WC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ig(r))return 1;if(Ig(s))return-1}return s.length-r.length}function Ig(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const KC={type:0,value:""},GC=/[a-zA-Z0-9_]/;function QC(t){if(!t)return[[]];if(t==="/")return[[KC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:GC.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function YC(t,e,n){const r=qC(QC(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function XC(t,e){const n=[],r=new Map;e=Pg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const E=!g,b=Rg(d);b.aliasOf=g&&g.record;const k=Pg(e,d),S=[b];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)S.push(Rg(Oe({},b,{components:g?g.record.components:b.components,path:D,aliasOf:g?g.record:b})))}let P,_;for(const R of S){const{path:D}=R;if(p&&D[0]!=="/"){const M=p.record.path,T=M[M.length-1]==="/"?"":"/";R.path=p.record.path+(D&&T+D)}if(P=YC(R,p,k),g?g.alias.push(P):(_=_||P,_!==P&&_.alias.push(P),E&&d.name&&!Sg(P)&&o(d.name)),ow(P)&&l(P),b.children){const M=b.children;for(let T=0;T<M.length;T++)i(M[T],P,g&&g.children[T])}g=g||P}return _?()=>{o(_)}:Ao}function o(d){if(rw(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=e1(d,n);n.splice(p,0,d),d.record.name&&!Sg(d)&&r.set(d.record.name,d)}function u(d,p){let g,E={},b,k;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Ti(1,{location:d});k=g.record.name,E=Oe(Ag(p.params,g.keys.filter(_=>!_.optional).concat(g.parent?g.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Ag(d.params,g.keys.map(_=>_.name))),b=g.stringify(E)}else if(d.path!=null)b=d.path,g=n.find(_=>_.re.test(b)),g&&(E=g.parse(b),k=g.record.name);else{if(g=p.name?r.get(p.name):n.find(_=>_.re.test(p.path)),!g)throw Ti(1,{location:d,currentLocation:p});k=g.record.name,E=Oe({},p.params,d.params),b=g.stringify(E)}const S=[];let P=g;for(;P;)S.unshift(P.record),P=P.parent;return{name:k,path:b,params:E,matched:S,meta:ZC(S)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Ag(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:JC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function JC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZC(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Pg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function e1(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;iw(t,e[i])<0?r=i:n=i+1}const s=t1(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function t1(t){let e=t;for(;e=e.parent;)if(ow(e)&&iw(t,e)===0)return e}function ow({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function n1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(XE," "),o=i.indexOf("="),a=Go(o<0?i:i.slice(0,o)),l=o<0?null:Go(i.slice(o+1));if(a in e){let u=e[a];bn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Cg(t){let e="";for(let n in t){const r=t[n];if(n=bC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(r)?r.map(i=>i&&Bf(i)):[r&&Bf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function r1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=bn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const s1=Symbol(""),kg=Symbol(""),hd=Symbol(""),dd=Symbol(""),Hf=Symbol("");function ao(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ti(4,{from:n,to:e})):p instanceof Error?l(p):$C(p)?l(Ti(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Hu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(QE(l)){const f=(l.__vccOpts||l)[e];f&&i.push(kr(f,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=fC(f)?f.default:f;o.mods[a]=f,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&kr(g,n,r,o,a,s)()}))}}return i}function Og(t){const e=wt(hd),n=wt(dd),r=Fe(()=>{const l=rt(t.to);return e.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(bi.bind(null,f));if(p>-1)return p;const g=xg(l[u-2]);return u>1&&xg(f)===g&&d[d.length-1].path!==g?d.findIndex(bi.bind(null,l[u-2])):p}),i=Fe(()=>s.value>-1&&l1(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&tw(n.params,r.value.params));function a(l={}){if(c1(l)){const u=e[rt(t.replace)?"replace":"push"](rt(t.to)).catch(Ao);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function i1(t){return t.length===1?t[0]:t}const o1=In({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Og,setup(t,{slots:e}){const n=fr(Og(t)),{options:r}=wt(hd),s=Fe(()=>({[Ng(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ng(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&i1(e.default(n));return t.custom?i:ct("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),a1=o1;function c1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function l1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!bn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ng=(t,e,n)=>t??e??n,u1=In({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=wt(Hf),s=Fe(()=>t.route||r.value),i=wt(kg,0),o=Fe(()=>{let u=rt(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),a=Fe(()=>s.value.matched[o.value]);Ts(kg,Fe(()=>o.value+1)),Ts(s1,a),Ts(Hf,s);const l=Nt();return Dn(()=>[l.value,a.value,t.name],([u,f,d],[p,g,E])=>{f&&(f.instances[d]=u,g&&g!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!bi(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=a.value,p=d&&d.components[f];if(!p)return Dg(n.default,{Component:p,route:u});const g=d.props[f],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=ct(p,Oe({},E,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Dg(n.default,{Component:k,route:u})||k}}});function Dg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const aw=u1;function f1(t){const e=XC(t.routes,t),n=t.parseQuery||n1,r=t.stringifyQuery||Cg,s=t.history,i=ao(),o=ao(),a=ao(),l=Uo(mn);let u=mn;Xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bu.bind(null,j=>""+j),d=Bu.bind(null,IC),p=Bu.bind(null,Go);function g(j,ee){let X,re;return rw(j)?(X=e.getRecordMatcher(j),re=ee):re=j,e.addRoute(re,X)}function E(j){const ee=e.getRecordMatcher(j);ee&&e.removeRoute(ee)}function b(){return e.getRoutes().map(j=>j.record)}function k(j){return!!e.getRecordMatcher(j)}function S(j,ee){if(ee=Oe({},ee||l.value),typeof j=="string"){const N=$u(n,j,ee.path),V=e.resolve({path:N.path},ee),$=s.createHref(N.fullPath);return Oe(N,V,{params:p(V.params),hash:Go(N.hash),redirectedFrom:void 0,href:$})}let X;if(j.path!=null)X=Oe({},j,{path:$u(n,j.path,ee.path).path});else{const N=Oe({},j.params);for(const V in N)N[V]==null&&delete N[V];X=Oe({},j,{params:d(N)}),ee.params=d(ee.params)}const re=e.resolve(X,ee),Ie=j.hash||"";re.params=f(p(re.params));const De=SC(r,Oe({},j,{hash:wC(Ie),path:re.path})),C=s.createHref(De);return Oe({fullPath:De,hash:Ie,query:r===Cg?r1(j.query):j.query||{}},re,{redirectedFrom:void 0,href:C})}function P(j){return typeof j=="string"?$u(n,j,l.value.path):Oe({},j)}function _(j,ee){if(u!==j)return Ti(8,{from:ee,to:j})}function R(j){return T(j)}function D(j){return R(Oe(P(j),{replace:!0}))}function M(j){const ee=j.matched[j.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(j):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=P(re):{path:re},re.params={}),Oe({query:j.query,hash:j.hash,params:re.path!=null?{}:j.params},re)}}function T(j,ee){const X=u=S(j),re=l.value,Ie=j.state,De=j.force,C=j.replace===!0,N=M(X);if(N)return T(Oe(P(N),{state:typeof N=="object"?Oe({},Ie,N.state):Ie,force:De,replace:C}),ee||X);const V=X;V.redirectedFrom=ee;let $;return!De&&PC(r,re,X)&&($=Ti(16,{to:V,from:re}),tn(re,re,!0,!1)),($?Promise.resolve($):I(V,re)).catch(U=>Kn(U)?Kn(U,2)?U:dn(U):ne(U,V,re)).then(U=>{if(U){if(Kn(U,2))return T(Oe({replace:C},P(U.to),{state:typeof U.to=="object"?Oe({},Ie,U.to.state):Ie,force:De}),ee||V)}else U=O(V,re,!0,C,Ie);return x(V,re,U),U})}function v(j,ee){const X=_(j,ee);return X?Promise.reject(X):Promise.resolve()}function y(j){const ee=gr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(j):j()}function I(j,ee){let X;const[re,Ie,De]=h1(j,ee);X=Hu(re.reverse(),"beforeRouteLeave",j,ee);for(const N of re)N.leaveGuards.forEach(V=>{X.push(kr(V,j,ee))});const C=v.bind(null,j,ee);return X.push(C),Ht(X).then(()=>{X=[];for(const N of i.list())X.push(kr(N,j,ee));return X.push(C),Ht(X)}).then(()=>{X=Hu(Ie,"beforeRouteUpdate",j,ee);for(const N of Ie)N.updateGuards.forEach(V=>{X.push(kr(V,j,ee))});return X.push(C),Ht(X)}).then(()=>{X=[];for(const N of De)if(N.beforeEnter)if(bn(N.beforeEnter))for(const V of N.beforeEnter)X.push(kr(V,j,ee));else X.push(kr(N.beforeEnter,j,ee));return X.push(C),Ht(X)}).then(()=>(j.matched.forEach(N=>N.enterCallbacks={}),X=Hu(De,"beforeRouteEnter",j,ee,y),X.push(C),Ht(X))).then(()=>{X=[];for(const N of o.list())X.push(kr(N,j,ee));return X.push(C),Ht(X)}).catch(N=>Kn(N,8)?N:Promise.reject(N))}function x(j,ee,X){a.list().forEach(re=>y(()=>re(j,ee,X)))}function O(j,ee,X,re,Ie){const De=_(j,ee);if(De)return De;const C=ee===mn,N=Xs?history.state:{};X&&(re||C?s.replace(j.fullPath,Oe({scroll:C&&N&&N.scroll},Ie)):s.push(j.fullPath,Ie)),l.value=j,tn(j,ee,X,C),dn()}let A;function ge(){A||(A=s.listen((j,ee,X)=>{if(!An.listening)return;const re=S(j),Ie=M(re);if(Ie){T(Oe(Ie,{replace:!0,force:!0}),re).catch(Ao);return}u=re;const De=l.value;Xs&&MC(Eg(De.fullPath,X.delta),Ol()),I(re,De).catch(C=>Kn(C,12)?C:Kn(C,2)?(T(Oe(P(C.to),{force:!0}),re).then(N=>{Kn(N,20)&&!X.delta&&X.type===Qo.pop&&s.go(-1,!1)}).catch(Ao),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(C,re,De))).then(C=>{C=C||O(re,De,!1),C&&(X.delta&&!Kn(C,8)?s.go(-X.delta,!1):X.type===Qo.pop&&Kn(C,20)&&s.go(-1,!1)),x(re,De,C)}).catch(Ao)}))}let Ee=ao(),Z=ao(),se;function ne(j,ee,X){dn(j);const re=Z.list();return re.length?re.forEach(Ie=>Ie(j,ee,X)):console.error(j),Promise.reject(j)}function We(){return se&&l.value!==mn?Promise.resolve():new Promise((j,ee)=>{Ee.add([j,ee])})}function dn(j){return se||(se=!j,ge(),Ee.list().forEach(([ee,X])=>j?X(j):ee()),Ee.reset()),j}function tn(j,ee,X,re){const{scrollBehavior:Ie}=t;if(!Xs||!Ie)return Promise.resolve();const De=!X&&VC(Eg(j.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return hr().then(()=>Ie(j,ee,De)).then(C=>C&&LC(C)).catch(C=>ne(C,j,ee))}const Ke=j=>s.go(j);let Ge;const gr=new Set,An={currentRoute:l,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:b,resolve:S,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:We,install(j){const ee=this;j.component("RouterLink",a1),j.component("RouterView",aw),j.config.globalProperties.$router=ee,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(l)}),Xs&&!Ge&&l.value===mn&&(Ge=!0,R(s.location).catch(Ie=>{}));const X={};for(const Ie in mn)Object.defineProperty(X,Ie,{get:()=>l.value[Ie],enumerable:!0});j.provide(hd,ee),j.provide(dd,Zn(X)),j.provide(Hf,l);const re=j.unmount;gr.add(j),j.unmount=function(){gr.delete(j),gr.size<1&&(u=mn,A&&A(),A=null,l.value=mn,Ge=!1,se=!1),re()}}};function Ht(j){return j.reduce((ee,X)=>ee.then(()=>y(X)),Promise.resolve())}return An}function h1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>bi(u,l))||s.push(l))}return[n,r,s]}function d1(t){return wt(dd)}const p1=/(:\w+)\([^)]+\)/g,m1=/(:\w+)[?+*]/g,g1=/:\w+/g,_1=(t,e)=>e.path.replace(p1,"$1").replace(m1,"$1").replace(g1,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),zf=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&_1(t.route,n));return typeof r=="function"?r(t.route):r},y1=(t,e)=>({default:()=>t?ct(hA,t===!0?{}:t,e):e});function pd(t){return Array.isArray(t)?t:[t]}const v1={middleware:"auth"},E1={middleware:"auth"},w1={middleware:"auth"};const zu=[{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./UACEjWf2.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./C3yusCif.js"),__vite__mapDeps([2,3,4]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./RYxcDWGR.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./DInUGZwS.js"),__vite__mapDeps([5,6,7]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./CA0NdqPV.js"),__vite__mapDeps([8,9]),import.meta.url)},{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./BEgh8Mk9.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:v1||{},component:()=>ke(()=>import("./BTkHE6i6.js"),__vite__mapDeps([10,3,11]),import.meta.url)},{name:"Admin",path:"/Admin",meta:E1||{},component:()=>ke(()=>import("./CVugDBI1.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./4Eb7CyP9.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./CMXjKb4G.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./CsEqo6vl.js"),[],import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./CS3u32ke.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./CbE4AWnX.js"),[],import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./DVlDglOg.js"),__vite__mapDeps([16,6,7,17]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./C13ses_i.js"),__vite__mapDeps([18,19,6,7,20]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./C3kvdh9G.js"),__vite__mapDeps([21,22]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./BV2VSu9R.js"),__vite__mapDeps([23,6,7]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./uh5BO9Pz.js"),__vite__mapDeps([24,6,7,25]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./gUFnZ33G.js"),[],import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./CP1JDfeA.js"),__vite__mapDeps([26,6,7]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./DvYuAPIq.js"),__vite__mapDeps([27,6,7]),import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:w1||{},component:()=>ke(()=>import("./CZhiziGQ.js"),__vite__mapDeps([28,19,11,18,6,7,20,29]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./J9VDKthz.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./0JTGHIcD.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./BFpp8ckl.js"),__vite__mapDeps([30,6,7,31]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./DP6DG64R.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./BlQr9MM-.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./r_MfOR7D.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./B5Tb-epm.js"),[],import.meta.url)}],cw=(t,e)=>({default:()=>{var n;return t?ct(gR,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),b1=/(:\w+)\([^)]+\)/g,T1=/(:\w+)[?+*]/g,I1=/:\w+/g;function Lg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(b1,"$1").replace(T1,"$1").replace(I1,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function A1(t,e){return t===e||e===mn?!1:Lg(t)!==Lg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const R1={scrollBehavior(t,e,n){var u;const r=Ue(),s=((u=pt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&A1(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:lw(t.hash),behavior:s}:!1;const a=f=>!!(f.meta.pageTransition??Nf),l=a(e)&&a(t)?"page:transition:finish":"page:loading:end";return new Promise(f=>{r.hooks.hookOnce(l,()=>{requestAnimationFrame(()=>f(S1(t,"instant",i)))})})}};function lw(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function S1(t,e,n){return n||(t.hash?{el:t.hash,top:lw(t.hash),behavior:e}:{left:0,top:0,behavior:e})}const P1={hashMode:!1,scrollBehaviorType:"auto"},on={...P1,...R1},C1=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Ue(),s=pt(),i=([e,n]=fi(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Cl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const f=s.afterEach(async()=>{f(),await r.runWithContext(()=>Pr(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},k1=async t=>{let e,n;const r=([e,n]=fi(()=>ld({path:t.path})),e=await e,n(),e);if(r.redirect)return pr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},O1=[C1,k1],So={auth:()=>ke(()=>import("./p69ZIwTu.js"),[],import.meta.url)};function x1(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),eg(f,"")}const a=eg(r,t),l=!n||_S(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const N1=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var k;let e,n,r=Ms().app.baseURL;const s=((k=on.history)==null?void 0:k.call(on,r))??BC(r),i=on.routes?([e,n]=fi(()=>on.routes(zu)),e=await e,n(),e??zu):zu;let o;const a=f1({...on,scrollBehavior:(S,P,_)=>{if(P===mn){o=_;return}if(on.scrollBehavior){if(a.options.scrollBehavior=on.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return on.scrollBehavior(S,mn,o||_)}},history:s,routes:i});on.routes&&on.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Uo(a.currentRoute.value);a.afterEach((S,P)=>{l.value=P}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=x1(r,window.location,t.payload.path),f=Uo(a.currentRoute.value),d=()=>{f.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((S,P)=>{var _,R,D,M;((R=(_=S.matched[0])==null?void 0:_.components)==null?void 0:R.default)===((M=(D=P.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&d()});const p={};for(const S in f.value)Object.defineProperty(p,S,{get:()=>f.value[S],enumerable:!0});t._route=Zn(p),t._middleware||(t._middleware={global:[],named:{}});const g=Pl();a.afterEach(async(S,P,_)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext($E),_&&await t.callHook("page:loading:end")});try{[e,n]=fi(()=>a.isReady()),await e,n()}catch(S){[e,n]=fi(()=>t.runWithContext(()=>Pr(S))),await e,n()}const E=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const b=t.payload.state._layout;return a.beforeEach(async(S,P)=>{var _;await t.callHook("page:loading:start"),S.meta=fr(S.meta),t.isHydrating&&b&&!Kr(S.meta.layout)&&(S.meta.layout=b),t._processingMiddleware=!0;{const R=new Set([...O1,...t._middleware.global]);for(const D of S.matched){const M=D.meta.middleware;if(M)for(const T of pd(M))R.add(T)}{const D=await t.runWithContext(()=>ld({path:S.path}));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?R.add(M):R.delete(M)}for(const D of R){const M=typeof D=="string"?t._middleware.named[D]||await((_=So[D])==null?void 0:_.call(So).then(T=>T.default||T)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);try{const T=await t.runWithContext(()=>M(S,P));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const v=T||dc({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Pr(v)),!1}if(T===!0)continue;if(T===!1)return T;if(T)return HE(T)&&T.fatal&&await t.runWithContext(()=>Pr(T)),T}catch(T){const v=dc(T);return v.fatal&&await t.runWithContext(()=>Pr(v)),v}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(S,P)=>{S.matched.length===0&&await t.runWithContext(()=>Pr(dc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in E&&(E.name=void 0),await a.replace({...E,force:!0}),a.options.scrollBehavior=on.scrollBehavior}catch(S){await t.runWithContext(()=>Pr(S))}}),{provide:{router:a}}}}),qf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),D1=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),xl=t=>{const e=Ue();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{qf(()=>t())}):qf(()=>t())},L1=Zt({name:"nuxt:payload",setup(t){const e=new Set;pt().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await _g(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),xl(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await _g(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(kl,1e3)})}}),M1=Zt(()=>{const t=pt();xl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),V1=Zt(t=>{let e;async function n(){const r=await kl();e&&clearTimeout(e),e=setTimeout(n,ig);try{const s=await $fetch(id("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}xl(()=>{e=setTimeout(n,ig)})});function F1(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ko(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ue().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const U1=Zt({name:"nuxt:chunk-reload",setup(t){const e=pt(),n=Ms(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Sl(n.app.baseURL,i.fullPath);F1({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),j1=Zt({name:"nuxt:global-components"}),Vr={default:uA(()=>ke(()=>import("./BztPRDBo.js"),__vite__mapDeps([32,19,3,33]),import.meta.url).then(t=>t.default||t))},B1=Zt({name:"nuxt:prefetch",setup(t){const e=pt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Vr[r]=="function"&&await Vr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(pr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=pd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof So[o]=="function"&&So[o]();s&&typeof Vr[s]=="function"&&Vr[s]()})}}),$1=()=>{};var Mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},H1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[f],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):H1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new z1;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class z1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q1=function(t){const e=uw(t);return fw.encodeByteArray(e,!0)},qc=function(t){return q1(t).replace(/\./g,"")},hw=function(t){try{return fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function W1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const K1=()=>W1().__FIREBASE_DEFAULTS__,G1=()=>{if(typeof process>"u"||typeof Mg>"u")return;const t=Mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Q1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hw(t[1]);return e&&JSON.parse(e)},Nl=()=>{try{return $1()||K1()||G1()||Q1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dw=t=>{var e,n;return(n=(e=Nl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pw=t=>{const e=dw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mw=()=>{var t;return(t=Nl())===null||t===void 0?void 0:t.config},gw=t=>{var e;return(e=Nl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qc(JSON.stringify(n)),qc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function J1(){var t;const e=(t=Nl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Z1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ek(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nk(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rk(){return!J1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sk(){try{return typeof indexedDB=="object"}catch{return!1}}function ik(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ok,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ak(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $n(s,a,r)}}function ak(t,e){return t.replace(ck,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ck=/\{\$([^}]+)}/g;function lk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vg(i)&&Vg(o)){if(!Ss(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uk(t,e){const n=new fk(t,e);return n.subscribe.bind(n)}class fk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qu),s.error===void 0&&(s.error=qu),s.complete===void 0&&(s.complete=qu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qu(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ys="[DEFAULT]";/**
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
 */class dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Y1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mk(e))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ys){return this.instances.has(e)}getOptions(e=ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ys){return this.component?this.component.multipleInstances?e:ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pk(t){return t===ys?void 0:t}function mk(t){return t.instantiationMode==="EAGER"}/**
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
 */class gk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const _k={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},yk=we.INFO,vk={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=yk,this._logHandler=Ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_k[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const wk=(t,e)=>e.some(n=>t instanceof n);let Fg,Ug;function bk(){return Fg||(Fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tk(){return Ug||(Ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yw=new WeakMap,Wf=new WeakMap,vw=new WeakMap,Wu=new WeakMap,gd=new WeakMap;function Ik(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yw.set(n,t)}).catch(()=>{}),gd.set(e,t),e}function Ak(t){if(Wf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wf.set(t,e)}let Kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rk(t){Kf=t(Kf)}function Sk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ku(this),e,...n);return vw.set(r,e.sort?e.sort():[e]),Br(r)}:Tk().includes(t)?function(...e){return t.apply(Ku(this),e),Br(yw.get(this))}:function(...e){return Br(t.apply(Ku(this),e))}}function Pk(t){return typeof t=="function"?Sk(t):(t instanceof IDBTransaction&&Ak(t),wk(t,bk())?new Proxy(t,Kf):t)}function Br(t){if(t instanceof IDBRequest)return Ik(t);if(Wu.has(t))return Wu.get(t);const e=Pk(t);return e!==t&&(Wu.set(t,e),gd.set(e,t)),e}const Ku=t=>gd.get(t);function Ck(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const kk=["get","getKey","getAll","getAllKeys","count"],Ok=["put","add","delete","clear"],Gu=new Map;function jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gu.get(e))return Gu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Gu.set(e,i),i}Rk(t=>({...t,get:(e,n,r)=>jg(e,n)||t.get(e,n,r),has:(e,n)=>!!jg(e,n)||t.has(e,n)}));/**
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
 */class xk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",Bg="0.11.4";/**
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
 */const ir=new md("@firebase/app"),Dk="@firebase/app-compat",Lk="@firebase/analytics-compat",Mk="@firebase/analytics",Vk="@firebase/app-check-compat",Fk="@firebase/app-check",Uk="@firebase/auth",jk="@firebase/auth-compat",Bk="@firebase/database",$k="@firebase/data-connect",Hk="@firebase/database-compat",zk="@firebase/functions",qk="@firebase/functions-compat",Wk="@firebase/installations",Kk="@firebase/installations-compat",Gk="@firebase/messaging",Qk="@firebase/messaging-compat",Yk="@firebase/performance",Xk="@firebase/performance-compat",Jk="@firebase/remote-config",Zk="@firebase/remote-config-compat",eO="@firebase/storage",tO="@firebase/storage-compat",nO="@firebase/firestore",rO="@firebase/vertexai",sO="@firebase/firestore-compat",iO="firebase",oO="11.6.0";/**
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
 */const Qf="[DEFAULT]",aO={[Gf]:"fire-core",[Dk]:"fire-core-compat",[Mk]:"fire-analytics",[Lk]:"fire-analytics-compat",[Fk]:"fire-app-check",[Vk]:"fire-app-check-compat",[Uk]:"fire-auth",[jk]:"fire-auth-compat",[Bk]:"fire-rtdb",[$k]:"fire-data-connect",[Hk]:"fire-rtdb-compat",[zk]:"fire-fn",[qk]:"fire-fn-compat",[Wk]:"fire-iid",[Kk]:"fire-iid-compat",[Gk]:"fire-fcm",[Qk]:"fire-fcm-compat",[Yk]:"fire-perf",[Xk]:"fire-perf-compat",[Jk]:"fire-rc",[Zk]:"fire-rc-compat",[eO]:"fire-gcs",[tO]:"fire-gcs-compat",[nO]:"fire-fst",[sO]:"fire-fst-compat",[rO]:"fire-vertex","fire-js":"fire-js",[iO]:"fire-js-all"};/**
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
 */const Wc=new Map,cO=new Map,Yf=new Map;function $g(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Yf.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Yf.set(e,t);for(const n of Wc.values())$g(n,t);for(const n of cO.values())$g(n,t);return!0}function Dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const lO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new ga("app","Firebase",lO);/**
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
 */class uO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=oO;function Ew(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $r.create("bad-app-name",{appName:String(s)});if(n||(n=mw()),!n)throw $r.create("no-options");const i=Wc.get(s);if(i){if(Ss(n,i.options)&&Ss(r,i.config))return i;throw $r.create("duplicate-app",{appName:s})}const o=new gk(s);for(const l of Yf.values())o.addComponent(l);const a=new uO(n,r,o);return Wc.set(s,a),a}function _d(t=Qf){const e=Wc.get(t);if(!e&&t===Qf&&mw())return Ew();if(!e)throw $r.create("no-app",{appName:t});return e}function Ln(t,e,n){var r;let s=(r=aO[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Ps(new Gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fO="firebase-heartbeat-database",hO=1,Yo="firebase-heartbeat-store";let Qu=null;function ww(){return Qu||(Qu=Ck(fO,hO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),Qu}async function dO(t){try{const n=(await ww()).transaction(Yo),r=await n.objectStore(Yo).get(bw(t));return await n.done,r}catch(e){if(e instanceof $n)ir.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function Hg(t,e){try{const r=(await ww()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,bw(t)),await r.done}catch(n){if(n instanceof $n)ir.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function bw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pO=1024,mO=30;class gO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>mO){const o=vO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zg(),{heartbeatsToSend:r,unsentEntries:s}=_O(this._heartbeatsCache.heartbeats),i=qc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ir.warn(n),""}}}function zg(){return new Date().toISOString().substring(0,10)}function _O(t,e=pO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sk()?ik().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qg(t){return qc(JSON.stringify({version:2,heartbeats:t})).length}function vO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function EO(t){Ps(new Gr("platform-logger",e=>new xk(e),"PRIVATE")),Ps(new Gr("heartbeat",e=>new gO(e),"PRIVATE")),Ln(Gf,Bg,t),Ln(Gf,Bg,"esm2017"),Ln("fire-js","")}EO("");var wO="firebase",bO="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(wO,bO,"app");function yd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TO=Tw,Iw=new ga("auth","Firebase",Tw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new md("@firebase/auth");function IO(t,...e){Kc.logLevel<=we.WARN&&Kc.warn(`Auth (${Vs}): ${t}`,...e)}function gc(t,...e){Kc.logLevel<=we.ERROR&&Kc.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw vd(t,...e)}function Mn(t,...e){return vd(t,...e)}function Aw(t,e,n){const r=Object.assign(Object.assign({},TO()),{[e]:n});return new ga("auth","Firebase",r).create(e,{appName:t.name})}function Hr(t){return Aw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Iw.create(t,...e)}function de(t,e,...n){if(!t)throw vd(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gc(e),new Error(e)}function or(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AO(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AO()||ek()||"connection"in navigator)?navigator.onLine:!0}function SO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=X1()||tk()}get(){return RO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kO=new ya(3e4,6e4);function Fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function os(t,e,n,r,s={}){return Sw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=_a(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return Z1()||(u.referrerPolicy="no-referrer"),Rw.fetch()(await Pw(t,t.config.apiHost,n,a),u)})}async function Sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PO),e);try{const s=new xO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ja(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Aw(t,f,u);Tn(t,f)}}catch(s){if(s instanceof $n)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function Ll(t,e,n,r,s={}){const i=await os(t,e,n,r,s);return"mfaPendingCredential"in i&&Tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Pw(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ed(t.config,s):`${t.config.apiScheme}://${s}`;return CO.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function OO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),kO.get())})}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mn(t,e,r);return s.customData._tokenResponse=n,s}function Kg(t){return t!==void 0&&t.enterprise!==void 0}class NO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return OO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DO(t,e){return os(t,"GET","/v2/recaptchaConfig",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){return os(t,"POST","/v1/accounts:delete",e)}async function Gc(t,e){return os(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MO(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=wd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Po(Yu(s.auth_time)),issuedAtTime:Po(Yu(s.iat)),expirationTime:Po(Yu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yu(t){return Number(t)*1e3}function wd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gc("JWT malformed, contained fewer than 3 sections"),null;try{const s=hw(n);return s?JSON.parse(s):(gc("Failed to decode base64 JWT payload"),null)}catch(s){return gc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gg(t){const e=wd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&VO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Xo(t,Gc(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cw(i.providerUserInfo):[],a=jO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jf(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function UO(t){const e=Je(t);await Qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cw(t){return t.map(e=>{var{providerId:n}=e,r=yd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(t,e){const n=await Sw(t,{},async()=>{const r=_a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Pw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $O(t,e){return os(t,"POST","/v2/accounts:revokeToken",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Gg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await BO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MO(this,e)}reload(){return UO(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await Xo(this,LO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:R,isAnonymous:D,providerData:M,stsTokenManager:T}=n;de(_&&T,e,"internal-error");const v=hi.fromJSON(this.name,T);de(typeof _=="string",e,"internal-error"),br(d,e.name),br(p,e.name),de(typeof R=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),br(g,e.name),br(E,e.name),br(b,e.name),br(k,e.name),br(S,e.name),br(P,e.name);const y=new yn({uid:_,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:E,phoneNumber:g,tenantId:b,stsTokenManager:v,createdAt:S,lastLoginAt:P});return M&&Array.isArray(M)&&(y.providerData=M.map(I=>Object.assign({},I))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new hi;a.updateFromIdToken(r);const l=new yn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Map;function tr(t){or(t instanceof Function,"Expected a class definition");let e=Qg.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qg.set(t,e),e)}/**
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
 */class kw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kw.type="NONE";const Yg=kw;/**
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
 */function _c(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_c(this.userKey,s.apiKey,i),this.fullPersistenceKey=_c("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Gc(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(tr(Yg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tr(Yg);const o=_c(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const p=await Gc(e,{idToken:f}).catch(()=>{});if(!p)break;d=await yn._fromGetAccountInfoResponse(e,p,f)}else d=yn._fromJSON(e,f);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new di(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new di(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mw(e))return"Blackberry";if(Vw(e))return"Webos";if(xw(e))return"Safari";if((e.includes("chrome/")||Nw(e))&&!e.includes("edge/"))return"Chrome";if(Lw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ow(t=Dt()){return/firefox\//i.test(t)}function xw(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nw(t=Dt()){return/crios\//i.test(t)}function Dw(t=Dt()){return/iemobile/i.test(t)}function Lw(t=Dt()){return/android/i.test(t)}function Mw(t=Dt()){return/blackberry/i.test(t)}function Vw(t=Dt()){return/webos/i.test(t)}function bd(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HO(t=Dt()){var e;return bd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zO(){return nk()&&document.documentMode===10}function Fw(t=Dt()){return bd(t)||Lw(t)||Vw(t)||Mw(t)||/windows phone/i.test(t)||Dw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e=[]){let n;switch(t){case"Browser":n=Xg(Dt());break;case"Worker":n=`${Xg(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class qO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WO(t,e={}){return os(t,"GET","/v2/passwordPolicy",Fs(t,e))}/**
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
 */const KO=6;class GO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jg(this),this.idTokenSubscription=new Jg(this),this.beforeStateQueue=new qO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gc(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Hr(this));const n=e?Je(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WO(this),n=new GO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $O(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(t){return Je(t)}class Jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=uk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YO(t){Ml=t}function jw(t){return Ml.loadJS(t)}function XO(){return Ml.recaptchaEnterpriseScript}function JO(){return Ml.gapiScript}function ZO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ex{constructor(){this.enterprise=new tx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nx="recaptcha-enterprise",Bw="NO_RECAPTCHA";class rx{constructor(e){this.type=nx,this.auth=Fi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{DO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new NO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Kg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Bw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ex().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Kg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=XO();l.length!==0&&(l+=a),jw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Zg(t,e,n,r=!1,s=!1){const i=new rx(t);let o;if(s)o=Bw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function e_(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t,e){const n=Dl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ss(i,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function ix(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ox(t,e,n){const r=Fi(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$w(e),{host:o,port:a}=ax(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Ss(u,r.config.emulator)&&Ss(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,cx()}function $w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ax(t){const e=$w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:t_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:t_(o)}}}function t_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function lx(t,e){return os(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(t,e){return Ll(t,"POST","/v1/accounts:signInWithPassword",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(t,e){return Ll(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}async function hx(t,e){return Ll(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Td{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return e_(e,n,"signInWithPassword",ux);case"emailLink":return fx(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return e_(e,r,"signUpPassword",lx);case"emailLink":return hx(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e){return Ll(t,"POST","/v1/accounts:signInWithIdp",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="http://localhost";class Cs extends Td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Cs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_a(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mx(t){const e=fo(ho(t)).link,n=e?fo(ho(e)).deep_link_id:null,r=fo(ho(t)).deep_link_id;return(r?fo(ho(r)).link:null)||r||n||e||t}class Id{constructor(e){var n,r,s,i,o,a;const l=fo(ho(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,d=px((s=l.mode)!==null&&s!==void 0?s:null);de(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mx(e);try{return new Id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Id.parseLink(n);return de(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}Ui.PROVIDER_ID="password";Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class va extends Hw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends va{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends va{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends va{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=n_(r);return new Ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=n_(r);return new Ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function n_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends $n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yc(e,n,r,s)}}function zw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,i,e,r):i})}async function gx(t,e,n=!1){const r=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",r)}/**
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
 */async function _x(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Hr(r));const s="reauthenticate";try{const i=await Xo(t,zw(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=wd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e,n=!1){if(cn(t.app))return Promise.reject(Hr(t));const r="signIn",s=await zw(t,r,e),i=await Ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yx(t,e){return qw(Fi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t){const e=Fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Ex(t,e,n){return cn(t.app)?Promise.reject(Hr(t)):yx(Je(t),Ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vx(t),r})}function wx(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function bx(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Tx(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function Ix(t){return Je(t).signOut()}const Xc="__sak";/**
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
 */class Ww{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=1e3,Rx=10;class Kw extends Ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Rx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kw.type="LOCAL";const Sx=Kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw extends Ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gw.type="SESSION";const Qw=Gw;/**
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
 */function Px(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await Px(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Cx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ad("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function kx(t){Vn().location.href=t}/**
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
 */function Yw(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function Ox(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nx(){return Yw()?self:null}/**
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
 */const Xw="firebaseLocalStorageDb",Dx=1,Jc="firebaseLocalStorage",Jw="fbase_key";class Ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function Lx(){const t=indexedDB.deleteDatabase(Xw);return new Ea(t).toPromise()}function Zf(){const t=indexedDB.open(Xw,Dx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:Jw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await Lx(),e(await Zf()))})})}async function r_(t,e,n){const r=Fl(t,!0).put({[Jw]:e,value:n});return new Ea(r).toPromise()}async function Mx(t,e){const n=Fl(t,!1).get(e),r=await new Ea(n).toPromise();return r===void 0?null:r.value}function s_(t,e){const n=Fl(t,!0).delete(e);return new Ea(n).toPromise()}const Vx=800,Fx=3;class Zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vl._getInstance(Nx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ox(),!this.activeServiceWorker)return;this.sender=new Cx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zf();return await r_(e,Xc,"1"),await s_(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>r_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>s_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fl(s,!1).getAll();return new Ea(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zw.type="LOCAL";const Ux=Zw;new ya(3e4,6e4);/**
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
 */function jx(t,e){return e?tr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rd extends Td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bx(t){return qw(t.auth,new Rd(t),t.bypassAuthState)}function $x(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),_x(n,new Rd(t),t.bypassAuthState)}async function Hx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),gx(n,new Rd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bx;case"linkViaPopup":case"linkViaRedirect":return Hx;case"reauthViaPopup":case"reauthViaRedirect":return $x;default:Tn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=new ya(2e3,1e4);class ri extends eb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zx.get())};e()}}ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx="pendingRedirect",yc=new Map;class Wx extends eb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yc.get(this.auth._key());if(!e){try{const r=await Kx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yc.set(this.auth._key(),e)}return this.bypassAuthState||yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kx(t,e){const n=Yx(e),r=Qx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Gx(t,e){yc.set(t._key(),e)}function Qx(t){return tr(t._redirectPersistence)}function Yx(t){return _c(qx,t.config.apiKey,t.name)}async function Xx(t,e,n=!1){if(cn(t.app))return Promise.reject(Hr(t));const r=Fi(t),s=jx(r,e),o=await new Wx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=10*60*1e3;class Zx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jx&&this.cachedEventUids.clear(),this.cachedEventUids.has(i_(e))}saveEventToCache(e){this.cachedEventUids.add(i_(e)),this.lastProcessedEventTime=Date.now()}}function i_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e={}){return os(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rN=/^https?/;async function sN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tN(t);for(const n of e)try{if(iN(n))return}catch{}Tn(t,"unauthorized-domain")}function iN(t){const e=Xf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rN.test(n))return!1;if(nN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const oN=new ya(3e4,6e4);function o_(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aN(t){return new Promise((e,n)=>{var r,s,i;function o(){o_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{o_(),n(Mn(t,"network-request-failed"))},timeout:oN.get()})}if(!((s=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Vn().gapi)===null||i===void 0)&&i.load)o();else{const a=ZO("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},jw(`${JO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vc=null,e})}let vc=null;function cN(t){return vc=vc||aN(t),vc}/**
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
 */const lN=new ya(5e3,15e3),uN="__/auth/iframe",fN="emulator/auth/iframe",hN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ed(e,fN):`https://${t.config.authDomain}/${uN}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},s=dN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_a(r).slice(1)}`}async function mN(t){const e=await cN(t),n=Vn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:pN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=Vn().setTimeout(()=>{i(o)},lN.get());function l(){Vn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const gN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_N=500,yN=600,vN="_blank",EN="http://localhost";class a_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wN(t,e,n,r=_N,s=yN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=Nw(u)?vN:n),Ow(u)&&(e=e||EN,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(HO(u)&&a!=="_self")return bN(e||"",a),new a_(null);const d=window.open(e||"",a,f);de(d,t,"popup-blocked");try{d.focus()}catch{}return new a_(d)}function bN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const TN="__/auth/handler",IN="emulator/auth/handler",AN=encodeURIComponent("fac");async function c_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:s};if(e instanceof Hw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof va){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),u=l?`#${AN}=${encodeURIComponent(l)}`:"";return`${RN(t)}?${_a(a).slice(1)}${u}`}function RN({config:t}){return t.emulator?Ed(t,IN):`https://${t.authDomain}/${TN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="webStorageSupport";class SN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qw,this._completeRedirectFn=Xx,this._overrideRedirectResult=Gx}async _openPopup(e,n,r,s){var i;or((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await c_(e,n,r,Xf(),s);return wN(e,o,Ad())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await c_(e,n,r,Xf(),s);return kx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(or(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mN(e),r=new Zx(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xu,{type:Xu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xu];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fw()||xw()||bd()}}const PN=SN;var l_="@firebase/auth",u_="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ON(t){Ps(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uw(t)},u=new QO(r,s,i,l);return ix(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Gr("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new CN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(l_,u_,kN(t)),Ln(l_,u_,"esm2017")}/**
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
 */const xN=5*60,NN=gw("authIdTokenMaxAge")||xN;let f_=null;const DN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NN)return;const s=n==null?void 0:n.token;f_!==s&&(f_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LN(t=_d()){const e=Dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sx(t,{popupRedirectResolver:PN,persistence:[Ux,Sx,Qw]}),r=gw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=DN(i.toString());bx(n,o,()=>o(n.currentUser)),wx(n,a=>o(a))}}const s=dw("auth");return s&&ox(n,`http://${s}`),n}function MN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",MN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ON("Browser");function h_(t){return typeof t=="string"?`'${t}'`:new VN().serialize(t)}const VN=function(){var e;class t{constructor(){dm(this,e,new Map)}compare(r,s){const i=typeof r,o=typeof s;return i==="string"&&o==="string"?r.localeCompare(s):i==="number"&&o==="number"?r-s:String.prototype.localeCompare.call(this.serialize(r,!0),this.serialize(s,!0))}serialize(r,s){if(r===null)return"null";switch(typeof r){case"string":return s?r:`'${r}'`;case"bigint":return`${r}n`;case"object":return this.$object(r);case"function":return this.$function(r)}return String(r)}serializeObject(r){const s=Object.prototype.toString.call(r);if(s!=="[object Object]")return this.serializeBuiltInType(s.length<10?`unknown:${s}`:s.slice(8,-1),r);const i=r.constructor,o=i===Object||i===void 0?"":i.name;if(o!==""&&globalThis[o]===i)return this.serializeBuiltInType(o,r);if(typeof r.toJSON=="function"){const a=r.toJSON();return o+(a!==null&&typeof a=="object"?this.$object(a):`(${this.serialize(a)})`)}return this.serializeObjectEntries(o,Object.entries(r))}serializeBuiltInType(r,s){const i=this["$"+r];if(i)return i.call(this,s);if(typeof(s==null?void 0:s.entries)=="function")return this.serializeObjectEntries(r,s.entries());throw new Error(`Cannot serialize ${r}`)}serializeObjectEntries(r,s){const i=Array.from(s).sort((a,l)=>this.compare(a[0],l[0]));let o=`${r}{`;for(let a=0;a<i.length;a++){const[l,u]=i[a];o+=`${this.serialize(l,!0)}:${this.serialize(u)}`,a<i.length-1&&(o+=",")}return o+"}"}$object(r){let s=ro(this,e).get(r);return s===void 0&&(ro(this,e).set(r,`#${ro(this,e).size}`),s=this.serializeObject(r),ro(this,e).set(r,s)),s}$function(r){const s=Function.prototype.toString.call(r);return s.slice(-15)==="[native code] }"?`${r.name||""}()[native]`:`${r.name}(${r.length})${s.replace(/\s*\n\s*/g,"")}`}$Array(r){let s="[";for(let i=0;i<r.length;i++)s+=this.serialize(r[i]),i<r.length-1&&(s+=",");return s+"]"}$Date(r){try{return`Date(${r.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(r){return`ArrayBuffer[${new Uint8Array(r).join(",")}]`}$Set(r){return`Set${this.$Array(Array.from(r).sort((s,i)=>this.compare(s,i)))}`}$Map(r){return this.serializeObjectEntries("Map",r.entries())}}e=new WeakMap;for(const n of["Error","RegExp","URL"])t.prototype["$"+n]=function(r){return`${n}(${r})`};for(const n of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join(",")}]`};for(const n of["BigInt64Array","BigUint64Array"])t.prototype["$"+n]=function(r){return`${n}[${r.join("n,")}${r.length>0?"n":""}]`};return t}();function FN(t,e){return t===e||h_(t)===h_(e)}function UN(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||jN;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=BN(u,s)}i=a+1}return n}function jN(t){return t.includes("%")?decodeURIComponent(t):t}function BN(t,e){try{return e(t)}catch{return t}}const Za=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function d_(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Za.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Za.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Za.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Za.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!$N(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function $N(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function gn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=gn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:gn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=gn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=gn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(gn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(gn(i),gn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(gn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const HN={path:"/",watch:!0,decode:t=>Ko(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},ec=window.cookieStore;function zN(t,e){var u;const n={...HN,...e};n.filter??(n.filter=f=>f===t);const r=p_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=gn(i?void 0:r[t]??((u=n.default)==null?void 0:u.call(n))),l=s&&!i?KN(a,s,n.watch&&n.watch!=="shallow"):Nt(a);{let f=null;try{!ec&&typeof BroadcastChannel<"u"&&(f=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const d=(b=!1)=>{!b&&(n.readonly||FN(l.value,r[t]))||(WN(t,l.value,n),r[t]=gn(l.value),f==null||f.postMessage({value:n.encode(l.value)}))},p=b=>{var S;const k=b.refresh?(S=p_(n))==null?void 0:S[t]:n.decode(b.value);g=!0,l.value=k,r[t]=gn(k),hr(()=>{g=!1})};let g=!1;const E=!!ua();if(E&&Cc(()=>{g=!0,d(),f==null||f.close()}),ec){const b=k=>{const S=k.changed.find(_=>_.name===t),P=k.deleted.find(_=>_.name===t);S&&p({value:S.value}),P&&p({value:null})};ec.addEventListener("change",b),E&&Cc(()=>ec.removeEventListener("change",b))}else f&&(f.onmessage=({data:b})=>p(b));n.watch&&Dn(l,()=>{g||d()},{deep:n.watch!=="shallow"}),o&&d(o)}return l}function p_(t={}){return UN(document.cookie,t)}function qN(t,e,n={}){return e==null?d_(t,e,{...n,maxAge:-1}):d_(t,e,n)}function WN(t,e,n={}){document.cookie=qN(t,e,n)}const m_=2147483647;function KN(t,e,n){let r,s,i=0;const o=n?Nt(t):{value:t};return ua()&&Cc(()=>{s==null||s(),clearTimeout(r)}),zI((a,l)=>{n&&(s=Dn(o,l));function u(){i=0,clearTimeout(r);const f=e-i,d=f<m_?f:m_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(f){u(),o.value=f,l()}}})}async function nb(t,e=pt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises||(e._preloadPromises=[]);if(s.length>4)return Promise.all(s).then(()=>nb(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const GN=(...t)=>t.find(e=>e!==void 0);function QN(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return g_(i,t.trailingSlash);const a="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:g_(a,t.trailingSlash)}}function s(i){const o=pt(),a=Ms(),l=Fe(()=>!!i.target&&i.target!=="_self"),u=Fe(()=>{const k=i.to||i.href||"";return typeof k=="string"&&pr(k,{acceptRelative:!0})}),f=$o("RouterLink"),d=f&&typeof f!="string"?f.useLink:void 0,p=Fe(()=>{if(i.external)return!0;const k=i.to||i.href||"";return typeof k=="object"?!1:k===""||u.value}),g=Fe(()=>{const k=i.to||i.href||"";return p.value?k:r(k,o.resolve)}),E=p.value||d==null?void 0:d({...i,to:g}),b=Fe(()=>{var k;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const S=typeof g.value=="object"&&"path"in g.value?Vf(g.value):g.value,P=typeof S=="object"?o.resolve(S).href:S;return r(P,o.resolve)}return typeof g.value=="object"?((k=o.resolve(g.value))==null?void 0:k.href)??null:r(Sl(a.app.baseURL,g.value),o.resolve)});return{to:g,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:b,isActive:(E==null?void 0:E.isActive)??Fe(()=>g.value===o.currentRoute.value.path),isExactActive:(E==null?void 0:E.isExactActive)??Fe(()=>g.value===o.currentRoute.value.path),route:(E==null?void 0:E.route)??Fe(()=>o.resolve(g.value)),async navigate(k){await fP(b.value,{replace:i.replace,external:p.value||l.value})}}}return In({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=pt(),{to:l,href:u,navigate:f,isExternal:d,hasTarget:p,isAbsoluteUrl:g}=s(i),E=Nt(!1),b=Nt(null),k=_=>{var R;b.value=i.custom?(R=_==null?void 0:_.$el)==null?void 0:R.nextElementSibling:_==null?void 0:_.$el};function S(_){var R,D;return!E.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===_:((R=i.prefetchOn)==null?void 0:R[_])??((D=t.prefetchOn)==null?void 0:D[_]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!ZN()}async function P(_=Ue()){if(E.value)return;E.value=!0;const R=typeof l.value=="string"?l.value:d.value?Vf(l.value):a.resolve(l.value).fullPath,D=d.value?new URL(R,window.location.href).href:R;await Promise.all([_.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&nb(l.value,a).catch(()=>{})])}if(S("visibility")){const _=Ue();let R,D=null;wl(()=>{const M=XN();xl(()=>{R=qf(()=>{var T;(T=b==null?void 0:b.value)!=null&&T.tagName&&(D=M.observe(b.value,async()=>{D==null||D(),D=null,await P(_)}))})})}),Vi(()=>{R&&D1(R),D==null||D(),D=null})}return()=>{var D;if(!d.value&&!p.value&&!n(l.value)){const M={ref:k,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(S("interaction")&&(M.onPointerenter=P.bind(null,void 0),M.onFocus=P.bind(null,void 0)),E.value&&(M.class=i.prefetchedClass||t.prefetchedClass),M.rel=i.rel||void 0),ct($o("RouterLink"),M,o.default)}const _=i.target||null,R=GN(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:P,get route(){if(!u.value)return;const M=new URL(u.value,window.location.href);return{path:M.pathname,fullPath:M.pathname,get query(){return sd(M.search)},hash:M.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:R,target:_,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:ct("a",{ref:b,href:u.value||null,rel:R,target:_},(D=o.default)==null?void 0:D.call(o))}}})}const YN=QN(QS);function g_(t,e){const n=e==="append"?jc:Rl;return pr(t)&&!t.startsWith("http")?t:n(t,!0)}function XN(){const t=Ue();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const JN=/2g/;function ZN(){const t=navigator.connection;return!!(t&&(t.saveData||JN.test(t.effectiveType)))}var __=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zr,rb;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function y(){}y.prototype=v.prototype,T.D=v.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(I,x,O){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return v.prototype[x].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var x=0;16>x;++x)I[x]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(x=0;16>x;++x)I[x]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=T.g[0],y=T.g[1],x=T.g[2];var O=T.g[3],A=v+(O^y&(x^O))+I[0]+3614090360&4294967295;v=y+(A<<7&4294967295|A>>>25),A=O+(x^v&(y^x))+I[1]+3905402710&4294967295,O=v+(A<<12&4294967295|A>>>20),A=x+(y^O&(v^y))+I[2]+606105819&4294967295,x=O+(A<<17&4294967295|A>>>15),A=y+(v^x&(O^v))+I[3]+3250441966&4294967295,y=x+(A<<22&4294967295|A>>>10),A=v+(O^y&(x^O))+I[4]+4118548399&4294967295,v=y+(A<<7&4294967295|A>>>25),A=O+(x^v&(y^x))+I[5]+1200080426&4294967295,O=v+(A<<12&4294967295|A>>>20),A=x+(y^O&(v^y))+I[6]+2821735955&4294967295,x=O+(A<<17&4294967295|A>>>15),A=y+(v^x&(O^v))+I[7]+4249261313&4294967295,y=x+(A<<22&4294967295|A>>>10),A=v+(O^y&(x^O))+I[8]+1770035416&4294967295,v=y+(A<<7&4294967295|A>>>25),A=O+(x^v&(y^x))+I[9]+2336552879&4294967295,O=v+(A<<12&4294967295|A>>>20),A=x+(y^O&(v^y))+I[10]+4294925233&4294967295,x=O+(A<<17&4294967295|A>>>15),A=y+(v^x&(O^v))+I[11]+2304563134&4294967295,y=x+(A<<22&4294967295|A>>>10),A=v+(O^y&(x^O))+I[12]+1804603682&4294967295,v=y+(A<<7&4294967295|A>>>25),A=O+(x^v&(y^x))+I[13]+4254626195&4294967295,O=v+(A<<12&4294967295|A>>>20),A=x+(y^O&(v^y))+I[14]+2792965006&4294967295,x=O+(A<<17&4294967295|A>>>15),A=y+(v^x&(O^v))+I[15]+1236535329&4294967295,y=x+(A<<22&4294967295|A>>>10),A=v+(x^O&(y^x))+I[1]+4129170786&4294967295,v=y+(A<<5&4294967295|A>>>27),A=O+(y^x&(v^y))+I[6]+3225465664&4294967295,O=v+(A<<9&4294967295|A>>>23),A=x+(v^y&(O^v))+I[11]+643717713&4294967295,x=O+(A<<14&4294967295|A>>>18),A=y+(O^v&(x^O))+I[0]+3921069994&4294967295,y=x+(A<<20&4294967295|A>>>12),A=v+(x^O&(y^x))+I[5]+3593408605&4294967295,v=y+(A<<5&4294967295|A>>>27),A=O+(y^x&(v^y))+I[10]+38016083&4294967295,O=v+(A<<9&4294967295|A>>>23),A=x+(v^y&(O^v))+I[15]+3634488961&4294967295,x=O+(A<<14&4294967295|A>>>18),A=y+(O^v&(x^O))+I[4]+3889429448&4294967295,y=x+(A<<20&4294967295|A>>>12),A=v+(x^O&(y^x))+I[9]+568446438&4294967295,v=y+(A<<5&4294967295|A>>>27),A=O+(y^x&(v^y))+I[14]+3275163606&4294967295,O=v+(A<<9&4294967295|A>>>23),A=x+(v^y&(O^v))+I[3]+4107603335&4294967295,x=O+(A<<14&4294967295|A>>>18),A=y+(O^v&(x^O))+I[8]+1163531501&4294967295,y=x+(A<<20&4294967295|A>>>12),A=v+(x^O&(y^x))+I[13]+2850285829&4294967295,v=y+(A<<5&4294967295|A>>>27),A=O+(y^x&(v^y))+I[2]+4243563512&4294967295,O=v+(A<<9&4294967295|A>>>23),A=x+(v^y&(O^v))+I[7]+1735328473&4294967295,x=O+(A<<14&4294967295|A>>>18),A=y+(O^v&(x^O))+I[12]+2368359562&4294967295,y=x+(A<<20&4294967295|A>>>12),A=v+(y^x^O)+I[5]+4294588738&4294967295,v=y+(A<<4&4294967295|A>>>28),A=O+(v^y^x)+I[8]+2272392833&4294967295,O=v+(A<<11&4294967295|A>>>21),A=x+(O^v^y)+I[11]+1839030562&4294967295,x=O+(A<<16&4294967295|A>>>16),A=y+(x^O^v)+I[14]+4259657740&4294967295,y=x+(A<<23&4294967295|A>>>9),A=v+(y^x^O)+I[1]+2763975236&4294967295,v=y+(A<<4&4294967295|A>>>28),A=O+(v^y^x)+I[4]+1272893353&4294967295,O=v+(A<<11&4294967295|A>>>21),A=x+(O^v^y)+I[7]+4139469664&4294967295,x=O+(A<<16&4294967295|A>>>16),A=y+(x^O^v)+I[10]+3200236656&4294967295,y=x+(A<<23&4294967295|A>>>9),A=v+(y^x^O)+I[13]+681279174&4294967295,v=y+(A<<4&4294967295|A>>>28),A=O+(v^y^x)+I[0]+3936430074&4294967295,O=v+(A<<11&4294967295|A>>>21),A=x+(O^v^y)+I[3]+3572445317&4294967295,x=O+(A<<16&4294967295|A>>>16),A=y+(x^O^v)+I[6]+76029189&4294967295,y=x+(A<<23&4294967295|A>>>9),A=v+(y^x^O)+I[9]+3654602809&4294967295,v=y+(A<<4&4294967295|A>>>28),A=O+(v^y^x)+I[12]+3873151461&4294967295,O=v+(A<<11&4294967295|A>>>21),A=x+(O^v^y)+I[15]+530742520&4294967295,x=O+(A<<16&4294967295|A>>>16),A=y+(x^O^v)+I[2]+3299628645&4294967295,y=x+(A<<23&4294967295|A>>>9),A=v+(x^(y|~O))+I[0]+4096336452&4294967295,v=y+(A<<6&4294967295|A>>>26),A=O+(y^(v|~x))+I[7]+1126891415&4294967295,O=v+(A<<10&4294967295|A>>>22),A=x+(v^(O|~y))+I[14]+2878612391&4294967295,x=O+(A<<15&4294967295|A>>>17),A=y+(O^(x|~v))+I[5]+4237533241&4294967295,y=x+(A<<21&4294967295|A>>>11),A=v+(x^(y|~O))+I[12]+1700485571&4294967295,v=y+(A<<6&4294967295|A>>>26),A=O+(y^(v|~x))+I[3]+2399980690&4294967295,O=v+(A<<10&4294967295|A>>>22),A=x+(v^(O|~y))+I[10]+4293915773&4294967295,x=O+(A<<15&4294967295|A>>>17),A=y+(O^(x|~v))+I[1]+2240044497&4294967295,y=x+(A<<21&4294967295|A>>>11),A=v+(x^(y|~O))+I[8]+1873313359&4294967295,v=y+(A<<6&4294967295|A>>>26),A=O+(y^(v|~x))+I[15]+4264355552&4294967295,O=v+(A<<10&4294967295|A>>>22),A=x+(v^(O|~y))+I[6]+2734768916&4294967295,x=O+(A<<15&4294967295|A>>>17),A=y+(O^(x|~v))+I[13]+1309151649&4294967295,y=x+(A<<21&4294967295|A>>>11),A=v+(x^(y|~O))+I[4]+4149444226&4294967295,v=y+(A<<6&4294967295|A>>>26),A=O+(y^(v|~x))+I[11]+3174756917&4294967295,O=v+(A<<10&4294967295|A>>>22),A=x+(v^(O|~y))+I[2]+718787259&4294967295,x=O+(A<<15&4294967295|A>>>17),A=y+(O^(x|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+O&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var y=v-this.blockSize,I=this.B,x=this.h,O=0;O<v;){if(x==0)for(;O<=y;)s(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<v;)if(I[x++]=T.charCodeAt(O++),x==this.blockSize){s(this,I),x=0;break}}else for(;O<v;)if(I[x++]=T[O++],x==this.blockSize){s(this,I),x=0;break}}this.h=x,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var y=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=y&255,y/=256;for(this.u(T),T=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)T[y++]=this.g[v]>>>I&255;return T};function i(T,v){var y=a;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=v(T)}function o(T,v){this.h=v;for(var y=[],I=!0,x=T.length-1;0<=x;x--){var O=T[x]|0;I&&O==v||(y[x]=O,I=!1)}this.g=y}var a={};function l(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return k(u(-T));for(var v=[],y=1,I=0;T>=y;I++)v[I]=T/y|0,y*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return k(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=d,x=0;x<T.length;x+=8){var O=Math.min(8,T.length-x),A=parseInt(T.substring(x,x+O),v);8>O?(O=u(Math.pow(v,O)),I=I.j(O).add(u(A))):(I=I.j(y),I=I.add(u(A)))}return I}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(b(this))return-k(this).m();for(var T=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);T+=(0<=I?I:4294967296+I)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(E(this))return"0";if(b(this))return"-"+k(this).toString(T);for(var v=u(Math.pow(T,6)),y=this,I="";;){var x=R(y,v).g;y=S(y,x.j(v));var O=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=x,E(y))return O+I;for(;6>O.length;)O="0"+O;I=O+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function E(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function b(T){return T.h==-1}t.l=function(T){return T=S(this,T),b(T)?-1:E(T)?0:1};function k(T){for(var v=T.g.length,y=[],I=0;I<v;I++)y[I]=~T.g[I];return new o(y,~T.h).add(p)}t.abs=function(){return b(this)?k(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],I=0,x=0;x<=v;x++){var O=I+(this.i(x)&65535)+(T.i(x)&65535),A=(O>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);I=A>>>16,O&=65535,A&=65535,y[x]=A<<16|O}return new o(y,y[y.length-1]&-2147483648?-1:0)};function S(T,v){return T.add(k(v))}t.j=function(T){if(E(this)||E(T))return d;if(b(this))return b(T)?k(this).j(k(T)):k(k(this).j(T));if(b(T))return k(this.j(k(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var x=0;x<T.g.length;x++){var O=this.i(I)>>>16,A=this.i(I)&65535,ge=T.i(x)>>>16,Ee=T.i(x)&65535;y[2*I+2*x]+=A*Ee,P(y,2*I+2*x),y[2*I+2*x+1]+=O*Ee,P(y,2*I+2*x+1),y[2*I+2*x+1]+=A*ge,P(y,2*I+2*x+1),y[2*I+2*x+2]+=O*ge,P(y,2*I+2*x+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function P(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function _(T,v){this.g=T,this.h=v}function R(T,v){if(E(v))throw Error("division by zero");if(E(T))return new _(d,d);if(b(T))return v=R(k(T),v),new _(k(v.g),k(v.h));if(b(v))return v=R(T,k(v)),new _(k(v.g),v.h);if(30<T.g.length){if(b(T)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var y=p,I=v;0>=I.l(T);)y=D(y),I=D(I);var x=M(y,1),O=M(I,1);for(I=M(I,2),y=M(y,2);!E(I);){var A=O.add(I);0>=A.l(T)&&(x=x.add(y),O=A),I=M(I,1),y=M(y,1)}return v=S(T,x.j(v)),new _(x,v)}for(x=d;0<=T.l(v);){for(y=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),O=u(y),A=O.j(v);b(A)||0<A.l(T);)y-=I,O=u(y),A=O.j(v);E(O)&&(O=p),x=x.add(O),T=S(T,A)}return new _(x,T)}t.A=function(T){return R(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&T.i(I);return new o(y,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|T.i(I);return new o(y,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^T.i(I);return new o(y,this.h^T.h)};function D(T){for(var v=T.g.length+1,y=[],I=0;I<v;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(y,T.h)}function M(T,v){var y=v>>5;v%=32;for(var I=T.g.length-y,x=[],O=0;O<I;O++)x[O]=0<v?T.i(O+y)>>>v|T.i(O+y+1)<<32-v:T.i(O+y);return new o(x,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rb=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,zr=o}).apply(typeof __<"u"?__:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sb,po,ib,Ec,eh,ob,ab,cb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,h,m){return c==Array.prototype||c==Object.prototype||(c[h]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var h=0;h<c.length;++h){var m=c[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,h){if(h)e:{var m=r;c=c.split(".");for(var w=0;w<c.length-1;w++){var L=c[w];if(!(L in m))break e;m=m[L]}c=c[c.length-1],w=m[c],h=h(w),h!=w&&h!=null&&e(m,c,{configurable:!0,writable:!0,value:h})}}function i(c,h){c instanceof String&&(c+="");var m=0,w=!1,L={next:function(){if(!w&&m<c.length){var F=m++;return{value:h(F,c[F]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var h=typeof c;return h=h!="object"?h:c?Array.isArray(c)?"array":h:"null",h=="array"||h=="object"&&typeof c.length=="number"}function u(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function f(c,h,m){return c.call.apply(c.bind,arguments)}function d(c,h,m){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),c.apply(h,L)}}return function(){return c.apply(h,arguments)}}function p(c,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,p.apply(null,arguments)}function g(c,h){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function E(c,h){function m(){}m.prototype=h.prototype,c.aa=h.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(w,L,F){for(var Q=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)Q[Me-2]=arguments[Me];return h.prototype[L].apply(w,Q)}}function b(c){const h=c.length;if(0<h){const m=Array(h);for(let w=0;w<h;w++)m[w]=c[w];return m}return[]}function k(c,h){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(l(w)){const L=c.length||0,F=w.length||0;c.length=L+F;for(let Q=0;Q<F;Q++)c[L+Q]=w[Q]}else c.push(w)}}class S{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(c){return/^[\s\xa0]*$/.test(c)}function _(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function M(c,h,m){for(const w in c)h.call(m,c[w],w,c)}function T(c,h){for(const m in c)h.call(void 0,c[m],m,c)}function v(c){const h={};for(const m in c)h[m]=c[m];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,h){let m,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(m in w)c[m]=w[m];for(let F=0;F<y.length;F++)m=y[F],Object.prototype.hasOwnProperty.call(w,m)&&(c[m]=w[m])}}function x(c){var h=1;c=c.split(":");const m=[];for(;0<h&&c.length;)m.push(c.shift()),h--;return c.length&&m.push(c.join(":")),m}function O(c){a.setTimeout(()=>{throw c},0)}function A(){var c=We;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class ge{constructor(){this.h=this.g=null}add(h,m){const w=Ee.get();w.set(h,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Ee=new S(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,We=new ge,dn=()=>{const c=a.Promise.resolve(void 0);se=()=>{c.then(tn)}};var tn=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(m){O(m)}var h=Ee;h.j(c),100>h.h&&(h.h++,c.next=h.g,h.g=c)}ne=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var gr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return c}();function An(c,h){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget){if(D){e:{try{R(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else m=="mouseover"?h=c.fromElement:m=="mouseout"&&(h=c.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ht[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&An.aa.h.call(this)}}E(An,Ge);var Ht={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(c,h,m,w,L){this.listener=c,this.proxy=null,this.src=h,this.type=m,this.capture=!!w,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ie(c){this.src=c,this.g={},this.h=0}Ie.prototype.add=function(c,h,m,w,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Q=C(c,h,w,L);return-1<Q?(h=c[Q],m||(h.fa=!1)):(h=new X(h,this.src,F,!!w,L),h.fa=m,c.push(h)),h};function De(c,h){var m=h.type;if(m in c.g){var w=c.g[m],L=Array.prototype.indexOf.call(w,h,void 0),F;(F=0<=L)&&Array.prototype.splice.call(w,L,1),F&&(re(h),c.g[m].length==0&&(delete c.g[m],c.h--))}}function C(c,h,m,w){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==h&&F.capture==!!m&&F.ha==w)return L}return-1}var N="closure_lm_"+(1e6*Math.random()|0),V={};function $(c,h,m,w,L){if(Array.isArray(h)){for(var F=0;F<h.length;F++)$(c,h[F],m,w,L);return null}return m=oe(m),c&&c[j]?c.K(h,m,u(w)?!!w.capture:!1,L):U(c,h,m,!1,w,L)}function U(c,h,m,w,L,F){if(!h)throw Error("Invalid event type");var Q=u(L)?!!L.capture:!!L,Me=ue(c);if(Me||(c[N]=Me=new Ie(c)),m=Me.add(h,m,w,Q,F),m.proxy)return m;if(w=z(),m.proxy=w,w.src=c,w.listener=m,c.addEventListener)gr||(L=Q),L===void 0&&(L=!1),c.addEventListener(h.toString(),w,L);else if(c.attachEvent)c.attachEvent(K(h.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function z(){function c(m){return h.call(c.src,c.listener,m)}const h=q;return c}function Y(c,h,m,w,L){if(Array.isArray(h))for(var F=0;F<h.length;F++)Y(c,h[F],m,w,L);else w=u(w)?!!w.capture:!!w,m=oe(m),c&&c[j]?(c=c.i,h=String(h).toString(),h in c.g&&(F=c.g[h],m=C(F,m,w,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[h],c.h--)))):c&&(c=ue(c))&&(h=c.g[h.toString()],c=-1,h&&(c=C(h,m,w,L)),(m=-1<c?h[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[j])De(h.i,c);else{var m=c.type,w=c.proxy;h.removeEventListener?h.removeEventListener(m,w,c.capture):h.detachEvent?h.detachEvent(K(m),w):h.addListener&&h.removeListener&&h.removeListener(w),(m=ue(h))?(De(m,c),m.h==0&&(m.src=null,h[N]=null)):re(c)}}}function K(c){return c in V?V[c]:V[c]="on"+c}function q(c,h){if(c.da)c=!0;else{h=new An(h,this);var m=c.listener,w=c.ha||c.src;c.fa&&G(c),c=m.call(w,h)}return c}function ue(c){return c=c[N],c instanceof Ie?c:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[J]||(c[J]=function(h){return c.handleEvent(h)}),c[J])}function ie(){Ke.call(this),this.i=new Ie(this),this.M=this,this.F=null}E(ie,Ke),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(c,h,m,w){Y(this,c,h,m,w)};function he(c,h){var m,w=c.F;if(w)for(m=[];w;w=w.F)m.push(w);if(c=c.M,w=h.type||h,typeof h=="string")h=new Ge(h,c);else if(h instanceof Ge)h.target=h.target||c;else{var L=h;h=new Ge(w,c),I(h,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Q=h.g=m[F];L=Ce(Q,w,!0,h)&&L}if(Q=h.g=c,L=Ce(Q,w,!0,h)&&L,L=Ce(Q,w,!1,h)&&L,m)for(F=0;F<m.length;F++)Q=h.g=m[F],L=Ce(Q,w,!1,h)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,h;for(h in c.g){for(var m=c.g[h],w=0;w<m.length;w++)re(m[w]);delete c.g[h],c.h--}}this.F=null},ie.prototype.K=function(c,h,m,w){return this.i.add(String(c),h,!1,m,w)},ie.prototype.L=function(c,h,m,w){return this.i.add(String(c),h,!0,m,w)};function Ce(c,h,m,w){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,F=0;F<h.length;++F){var Q=h[F];if(Q&&!Q.da&&Q.capture==m){var Me=Q.listener,gt=Q.ha||Q.src;Q.fa&&De(c.i,Q),L=Me.call(gt,w)!==!1&&L}}return L&&!w.defaultPrevented}function Se(c,h,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(c,h||0)}function Tt(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,Tt(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class ft extends Ke{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(c){Ke.call(this),this.h=c,this.g={}}E(mt,Ke);var It=[];function _r(c){M(c.g,function(h,m){this.g.hasOwnProperty(m)&&G(h)},c),c.g={}}mt.prototype.N=function(){mt.aa.N.call(this),_r(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bs=a.JSON.stringify,Mt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function $s(){}$s.prototype.h=null;function wp(c){return c.h||(c.h=c.i())}function bp(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uu(){Ge.call(this,"d")}E(uu,Ge);function fu(){Ge.call(this,"c")}E(fu,Ge);var ls={},Tp=null;function Sa(){return Tp=Tp||new ie}ls.La="serverreachability";function Ip(c){Ge.call(this,ls.La,c)}E(Ip,Ge);function Wi(c){const h=Sa();he(h,new Ip(h))}ls.STAT_EVENT="statevent";function Ap(c,h){Ge.call(this,ls.STAT_EVENT,c),this.stat=h}E(Ap,Ge);function Vt(c){const h=Sa();he(h,new Ap(h,c))}ls.Ma="timingevent";function Rp(c,h){Ge.call(this,ls.Ma,c),this.size=h}E(Rp,Ge);function Ki(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function M0(c,h,m,w,L,F){c.info(function(){if(c.g)if(F)for(var Q="",Me=F.split("&"),gt=0;gt<Me.length;gt++){var Pe=Me[gt].split("=");if(1<Pe.length){var At=Pe[0];Pe=Pe[1];var Rt=At.split("_");Q=2<=Rt.length&&Rt[1]=="type"?Q+(At+"="+Pe+"&"):Q+(At+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+h+`
`+m+`
`+Q})}function V0(c,h,m,w,L,F,Q){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+h+`
`+m+`
`+F+" "+Q})}function Hs(c,h,m,w){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+U0(c,m)+(w?" "+w:"")})}function F0(c,h){c.info(function(){return"TIMEOUT: "+h})}Gi.prototype.info=function(){};function U0(c,h){if(!c.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var w=m[c];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Bs(m)}catch{return h}}var Pa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hu;function Ca(){}E(Ca,$s),Ca.prototype.g=function(){return new XMLHttpRequest},Ca.prototype.i=function(){return{}},hu=new Ca;function yr(c,h,m,w){this.j=c,this.i=h,this.l=m,this.R=w||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pp}function Pp(){this.i=null,this.g="",this.h=!1}var Cp={},du={};function pu(c,h,m){c.L=1,c.v=Na(Hn(h)),c.m=m,c.P=!0,kp(c,null)}function kp(c,h){c.F=Date.now(),ka(c),c.A=Hn(c.v);var m=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),zp(m.i,"t",w),c.C=0,m=c.j.J,c.h=new Pp,c.g=cm(c.j,m?h:null,!c.m),0<c.O&&(c.M=new ft(p(c.Y,c,c.g),c.O)),h=c.U,m=c.g,w=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(It[0]=L.toString()),L=It);for(var F=0;F<L.length;F++){var Q=$(m,L[F],w||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,h)):(c.u="GET",c.g.ea(c.A,c.u,null,h)),Wi(),M0(c.i,c.u,c.A,c.l,c.R,c.m)}yr.prototype.ca=function(c){c=c.target;const h=this.M;h&&zn(c)==3?h.j():this.Y(c)},yr.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=zn(this.g);var h=this.g.Ba();const Ws=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Xp(this.g)))){this.J||Rt!=4||h==7||(h==8||0>=Ws?Wi(3):Wi(2)),mu(this);var m=this.g.Z();this.X=m;t:if(Op(this)){var w=Xp(this.g);c="";var L=w.length,F=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),Qi(this);var Q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,c+=this.h.i.decode(w[h],{stream:!(F&&h==L-1)});w.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,V0(this.i,this.u,this.A,this.l,this.R,Rt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,gt=this.g;if((Me=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Me)){var Pe=Me;break t}}Pe=null}if(m=Pe)Hs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gu(this,m);else{this.o=!1,this.s=3,Vt(12),us(this),Qi(this);break e}}if(this.P){m=!0;let pn;for(;!this.J&&this.C<Q.length;)if(pn=j0(this,Q),pn==du){Rt==4&&(this.s=4,Vt(14),m=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Cp){this.s=4,Vt(15),Hs(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else Hs(this.i,this.l,pn,null),gu(this,pn);if(Op(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||Q.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)Hs(this.i,this.l,Q,"[Invalid Chunked Response]"),us(this),Qi(this);else if(0<Q.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),bu(At),At.M=!0,Vt(11))}}else Hs(this.i,this.l,Q,null),gu(this,Q);Rt==4&&us(this),this.o&&!this.J&&(Rt==4?sm(this.j,this):(this.o=!1,ka(this)))}else rI(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),us(this),Qi(this)}}}catch{}finally{}};function Op(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function j0(c,h){var m=c.C,w=h.indexOf(`
`,m);return w==-1?du:(m=Number(h.substring(m,w)),isNaN(m)?Cp:(w+=1,w+m>h.length?du:(h=h.slice(w,w+m),c.C=w+m,h)))}yr.prototype.cancel=function(){this.J=!0,us(this)};function ka(c){c.S=Date.now()+c.I,xp(c,c.I)}function xp(c,h){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ki(p(c.ba,c),h)}function mu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}yr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(F0(this.i,this.A),this.L!=2&&(Wi(),Vt(17)),us(this),this.s=2,Qi(this)):xp(this,this.S-c)};function Qi(c){c.j.G==0||c.J||sm(c.j,c)}function us(c){mu(c);var h=c.M;h&&typeof h.ma=="function"&&h.ma(),c.M=null,_r(c.U),c.g&&(h=c.g,c.g=null,h.abort(),h.ma())}function gu(c,h){try{var m=c.j;if(m.G!=0&&(m.g==c||_u(m.h,c))){if(!c.K&&_u(m.h,c)&&m.G==3){try{var w=m.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Ua(m),Va(m);else break e;wu(m),Vt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ki(p(m.Za,m),6e3));if(1>=Lp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else hs(m,11)}else if((c.K||m.g==c)&&Ua(m),!P(h))for(L=m.Da.g.parse(h),h=0;h<L.length;h++){let Pe=L[h];if(m.T=Pe[0],Pe=Pe[1],m.G==2)if(Pe[0]=="c"){m.K=Pe[1],m.ia=Pe[2];const At=Pe[3];At!=null&&(m.la=At,m.j.info("VER="+m.la));const Rt=Pe[4];Rt!=null&&(m.Aa=Rt,m.j.info("SVER="+m.Aa));const Ws=Pe[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(w=1.5*Ws,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const pn=c.g;if(pn){const Ba=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ba){var F=w.h;F.g||Ba.indexOf("spdy")==-1&&Ba.indexOf("quic")==-1&&Ba.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(yu(F,F.h),F.h=null))}if(w.D){const Tu=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Tu&&(w.ya=Tu,Be(w.I,w.D,Tu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var Q=c;if(w.qa=am(w,w.J?w.ia:null,w.W),Q.K){Mp(w.h,Q);var Me=Q,gt=w.L;gt&&(Me.I=gt),Me.B&&(mu(Me),ka(Me)),w.g=Q}else nm(w);0<m.i.length&&Fa(m)}else Pe[0]!="stop"&&Pe[0]!="close"||hs(m,7);else m.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?hs(m,7):Eu(m):Pe[0]!="noop"&&m.l&&m.l.ta(Pe),m.v=0)}}Wi(4)}catch{}}var B0=class{constructor(c,h){this.g=c,this.map=h}};function Np(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Lp(c){return c.h?1:c.g?c.g.size:0}function _u(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function yu(c,h){c.g?c.g.add(h):c.h=h}function Mp(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Np.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Vp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const m of c.g.values())h=h.concat(m.D);return h}return b(c.i)}function $0(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var h=[],m=c.length,w=0;w<m;w++)h.push(c[w]);return h}h=[],m=0;for(w in c)h[m++]=c[w];return h}function H0(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var h=[];c=c.length;for(var m=0;m<c;m++)h.push(m);return h}h=[],m=0;for(const w in c)h[m++]=w;return h}}}function Fp(c,h){if(c.forEach&&typeof c.forEach=="function")c.forEach(h,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,h,void 0);else for(var m=H0(c),w=$0(c),L=w.length,F=0;F<L;F++)h.call(void 0,w[F],m&&m[F],c)}var Up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z0(c,h){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var w=c[m].indexOf("="),L=null;if(0<=w){var F=c[m].substring(0,w);L=c[m].substring(w+1)}else F=c[m];h(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function fs(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof fs){this.h=c.h,Oa(this,c.j),this.o=c.o,this.g=c.g,xa(this,c.s),this.l=c.l;var h=c.i,m=new Ji;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),jp(this,m),this.m=c.m}else c&&(h=String(c).match(Up))?(this.h=!1,Oa(this,h[1]||"",!0),this.o=Yi(h[2]||""),this.g=Yi(h[3]||"",!0),xa(this,h[4]),this.l=Yi(h[5]||"",!0),jp(this,h[6]||"",!0),this.m=Yi(h[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}fs.prototype.toString=function(){var c=[],h=this.j;h&&c.push(Xi(h,Bp,!0),":");var m=this.g;return(m||h=="file")&&(c.push("//"),(h=this.o)&&c.push(Xi(h,Bp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Xi(m,m.charAt(0)=="/"?K0:W0,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Xi(m,Q0)),c.join("")};function Hn(c){return new fs(c)}function Oa(c,h,m){c.j=m?Yi(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function xa(c,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);c.s=h}else c.s=null}function jp(c,h,m){h instanceof Ji?(c.i=h,Y0(c.i,c.h)):(m||(h=Xi(h,G0)),c.i=new Ji(h,c.h))}function Be(c,h,m){c.i.set(h,m)}function Na(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Yi(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Xi(c,h,m){return typeof c=="string"?(c=encodeURI(c).replace(h,q0),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function q0(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Bp=/[#\/\?@]/g,W0=/[#\?:]/g,K0=/[#\?]/g,G0=/[#\?@]/g,Q0=/#/g;function Ji(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function vr(c){c.g||(c.g=new Map,c.h=0,c.i&&z0(c.i,function(h,m){c.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Ji.prototype,t.add=function(c,h){vr(this),this.i=null,c=zs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(h),this.h+=1,this};function $p(c,h){vr(c),h=zs(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Hp(c,h){return vr(c),h=zs(c,h),c.g.has(h)}t.forEach=function(c,h){vr(this),this.g.forEach(function(m,w){m.forEach(function(L){c.call(h,L,w,this)},this)},this)},t.na=function(){vr(this);const c=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let w=0;w<h.length;w++){const L=c[w];for(let F=0;F<L.length;F++)m.push(h[w])}return m},t.V=function(c){vr(this);let h=[];if(typeof c=="string")Hp(this,c)&&(h=h.concat(this.g.get(zs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)h=h.concat(c[m])}return h},t.set=function(c,h){return vr(this),this.i=null,c=zs(this,c),Hp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},t.get=function(c,h){return c?(c=this.V(c),0<c.length?String(c[0]):h):h};function zp(c,h,m){$p(c,h),0<m.length&&(c.i=null,c.g.set(zs(c,h),b(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var w=h[m];const F=encodeURIComponent(String(w)),Q=this.V(w);for(w=0;w<Q.length;w++){var L=F;Q[w]!==""&&(L+="="+encodeURIComponent(String(Q[w]))),c.push(L)}}return this.i=c.join("&")};function zs(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function Y0(c,h){h&&!c.j&&(vr(c),c.i=null,c.g.forEach(function(m,w){var L=w.toLowerCase();w!=L&&($p(this,w),zp(this,L,m))},c)),c.j=h}function X0(c,h){const m=new Gi;if(a.Image){const w=new Image;w.onload=g(Er,m,"TestLoadImage: loaded",!0,h,w),w.onerror=g(Er,m,"TestLoadImage: error",!1,h,w),w.onabort=g(Er,m,"TestLoadImage: abort",!1,h,w),w.ontimeout=g(Er,m,"TestLoadImage: timeout",!1,h,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else h(!1)}function J0(c,h){const m=new Gi,w=new AbortController,L=setTimeout(()=>{w.abort(),Er(m,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:w.signal}).then(F=>{clearTimeout(L),F.ok?Er(m,"TestPingServer: ok",!0,h):Er(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Er(m,"TestPingServer: error",!1,h)})}function Er(c,h,m,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(m)}catch{}}function Z0(){this.g=new nn}function eI(c,h,m){const w=m||"";try{Fp(c,function(L,F){let Q=L;u(L)&&(Q=Bs(L)),h.push(w+F+"="+encodeURIComponent(Q))})}catch(L){throw h.push(w+"type="+encodeURIComponent("_badmap")),L}}function Da(c){this.l=c.Ub||null,this.j=c.eb||!1}E(Da,$s),Da.prototype.g=function(){return new La(this.l,this.j)},Da.prototype.i=function(c){return function(){return c}}({});function La(c,h){ie.call(this),this.D=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(La,ie),t=La.prototype,t.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=h,this.readyState=1,eo(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(h.body=c),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function qp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?Zi(this):eo(this),this.readyState==3&&qp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Zi(this))},t.Qa=function(c){this.g&&(this.response=c,Zi(this))},t.ga=function(){this.g&&Zi(this)};function Zi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,eo(c)}t.setRequestHeader=function(c,h){this.u.append(c,h)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=h.next();return c.join(`\r
`)};function eo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(La.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wp(c){let h="";return M(c,function(m,w){h+=w,h+=":",h+=m,h+=`\r
`}),h}function vu(c,h,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=Wp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Be(c,h,m))}function Xe(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Xe,ie);var tI=/^https?$/i,nI=["POST","PUT"];t=Xe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,h,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hu.g(),this.v=this.o?wp(this.o):wp(hu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(F){Kp(this,F);return}if(c=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)m.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())m.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(nI,h,void 0))||w||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of m)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Kp(this,F)}};function Kp(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.m=5,Gp(c),Ma(c)}function Gp(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),Ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ma(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qp(this):this.bb())},t.bb=function(){Qp(this)};function Qp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||zn(c)!=4||c.Z()!=2)){if(c.u&&zn(c)==4)Se(c.Ea,0,c);else if(he(c,"readystatechange"),zn(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var w;if(w=Q===0){var L=String(c.D).match(Up)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),w=!tI.test(L?L.toLowerCase():"")}m=w}if(m)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<zn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Gp(c)}}finally{Ma(c)}}}}function Ma(c,h){if(c.g){Yp(c);const m=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,h||he(c,"ready");try{m.onreadystatechange=w}catch{}}}function Yp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function zn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),Mt(h)}};function Xp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function rI(c){const h={};c=(c.g&&2<=zn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(P(c[w]))continue;var m=x(c[w]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=h[L]||[];h[L]=F,F.push(m)}T(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(c,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||h}function Jp(c){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,c),this.cb=to("retryDelaySeedMs",1e4,c),this.Wa=to("forwardChannelMaxRetries",2,c),this.wa=to("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Np(c&&c.concurrentRequestLimit),this.Da=new Z0,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jp.prototype,t.la=8,t.G=1,t.connect=function(c,h,m,w){Vt(0),this.W=c,this.H=h||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=am(this,null,this.W),Fa(this)};function Eu(c){if(Zp(c),c.G==3){var h=c.U++,m=Hn(c.I);if(Be(m,"SID",c.K),Be(m,"RID",h),Be(m,"TYPE","terminate"),no(c,m),h=new yr(c,c.j,h),h.L=2,h.v=Na(Hn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=cm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ka(h)}om(c)}function Va(c){c.g&&(bu(c),c.g.cancel(),c.g=null)}function Zp(c){Va(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ua(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Fa(c){if(!Dp(c.h)&&!c.s){c.s=!0;var h=c.Ga;se||dn(),ne||(se(),ne=!0),We.add(h,c),c.B=0}}function sI(c,h){return Lp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=h.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ki(p(c.Ga,c,h),im(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new yr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=v(F),I(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=tm(this,L,h),m=Hn(this.I),Be(m,"RID",c),Be(m,"CVER",22),this.D&&Be(m,"X-HTTP-Session-Id",this.D),no(this,m),F&&(this.O?h="headers="+encodeURIComponent(String(Wp(F)))+"&"+h:this.m&&vu(m,this.m,F)),yu(this.h,L),this.Ua&&Be(m,"TYPE","init"),this.P?(Be(m,"$req",h),Be(m,"SID","null"),L.T=!0,pu(L,m,null)):pu(L,m,h),this.G=2}}else this.G==3&&(c?em(this,c):this.i.length==0||Dp(this.h)||em(this))};function em(c,h){var m;h?m=h.l:m=c.U++;const w=Hn(c.I);Be(w,"SID",c.K),Be(w,"RID",m),Be(w,"AID",c.T),no(c,w),c.m&&c.o&&vu(w,c.m,c.o),m=new yr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),h&&(c.i=h.D.concat(c.i)),h=tm(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),yu(c.h,m),pu(m,w,h)}function no(c,h){c.H&&M(c.H,function(m,w){Be(h,w,m)}),c.l&&Fp({},function(m,w){Be(h,w,m)})}function tm(c,h,m){m=Math.min(c.i.length,m);var w=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Q=["count="+m];F==-1?0<m?(F=L[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Me=!0;for(let gt=0;gt<m;gt++){let Pe=L[gt].g;const At=L[gt].map;if(Pe-=F,0>Pe)F=Math.max(0,L[gt].g-100),Me=!1;else try{eI(At,Q,"req"+Pe+"_")}catch{w&&w(At)}}if(Me){w=Q.join("&");break e}}}return c=c.i.splice(0,m),h.D=c,w}function nm(c){if(!c.g&&!c.u){c.Y=1;var h=c.Fa;se||dn(),ne||(se(),ne=!0),We.add(h,c),c.v=0}}function wu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ki(p(c.Fa,c),im(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,rm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ki(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Va(this),rm(this))};function bu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function rm(c){c.g=new yr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var h=Hn(c.qa);Be(h,"RID","rpc"),Be(h,"SID",c.K),Be(h,"AID",c.T),Be(h,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(h,"TO",c.ja),Be(h,"TYPE","xmlhttp"),no(c,h),c.m&&c.o&&vu(h,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Na(Hn(h)),m.m=null,m.P=!0,kp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Va(this),wu(this),Vt(19))};function Ua(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function sm(c,h){var m=null;if(c.g==h){Ua(c),bu(c),c.g=null;var w=2}else if(_u(c.h,h))m=h.D,Mp(c.h,h),w=1;else return;if(c.G!=0){if(h.o)if(w==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var L=c.B;w=Sa(),he(w,new Rp(w,m)),Fa(c)}else nm(c);else if(L=h.s,L==3||L==0&&0<h.X||!(w==1&&sI(c,h)||w==2&&wu(c)))switch(m&&0<m.length&&(h=c.h,h.i=h.i.concat(m)),L){case 1:hs(c,5);break;case 4:hs(c,10);break;case 3:hs(c,6);break;default:hs(c,2)}}}function im(c,h){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*h}function hs(c,h){if(c.j.info("Error code "+h),h==2){var m=p(c.fb,c),w=c.Xa;const L=!w;w=new fs(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Oa(w,"https"),Na(w),L?X0(w.toString(),m):J0(w.toString(),m)}else Vt(2);c.G=0,c.l&&c.l.sa(h),om(c),Zp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function om(c){if(c.G=0,c.ka=[],c.l){const h=Vp(c.h);(h.length!=0||c.i.length!=0)&&(k(c.ka,h),k(c.ka,c.i),c.h.i.length=0,b(c.i),c.i.length=0),c.l.ra()}}function am(c,h,m){var w=m instanceof fs?Hn(m):new fs(m);if(w.g!="")h&&(w.g=h+"."+w.g),xa(w,w.s);else{var L=a.location;w=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var F=new fs(null);w&&Oa(F,w),h&&(F.g=h),L&&xa(F,L),m&&(F.l=m),w=F}return m=c.D,h=c.ya,m&&h&&Be(w,m,h),Be(w,"VER",c.la),no(c,w),w}function cm(c,h,m){if(h&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Ca&&!c.pa?new Xe(new Da({eb:m})):new Xe(c.pa),h.Ha(c.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lm(){}t=lm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ja(){}ja.prototype.g=function(c,h){return new Qt(c,h)};function Qt(c,h){ie.call(this),this.g=new Jp(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(c?c["X-WebChannel-Client-Profile"]=h.va:c={"X-WebChannel-Client-Profile":h.va}),this.g.S=c,(c=h&&h.Sb)&&!P(c)&&(this.g.m=c),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!P(h)&&(this.g.D=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new qs(this)}E(Qt,ie),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Eu(this.g)},Qt.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Bs(c),c=m);h.i.push(new B0(h.Ya++,c)),h.G==3&&Fa(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Eu(this.g),delete this.g,Qt.aa.N.call(this)};function um(c){uu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const m in h){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}E(um,uu);function fm(){fu.call(this),this.status=1}E(fm,fu);function qs(c){this.g=c}E(qs,lm),qs.prototype.ua=function(){he(this.g,"a")},qs.prototype.ta=function(c){he(this.g,new um(c))},qs.prototype.sa=function(c){he(this.g,new fm)},qs.prototype.ra=function(){he(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,cb=function(){return new ja},ab=function(){return Sa()},ob=ls,eh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pa.NO_ERROR=0,Pa.TIMEOUT=8,Pa.HTTP_ERROR=6,Ec=Pa,Sp.COMPLETE="complete",ib=Sp,bp.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,po=bp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,sb=Xe}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const y_="@firebase/firestore",v_="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new md("@firebase/firestore");function Js(){return ks.logLevel}function te(t,...e){if(ks.logLevel<=we.DEBUG){const n=e.map(Sd);ks.debug(`Firestore (${ji}): ${t}`,...n)}}function ar(t,...e){if(ks.logLevel<=we.ERROR){const n=e.map(Sd);ks.error(`Firestore (${ji}): ${t}`,...n)}}function Ai(t,...e){if(ks.logLevel<=we.WARN){const n=e.map(Sd);ks.warn(`Firestore (${ji}): ${t}`,...n)}}function Sd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function Ne(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class e2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class t2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class n2{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new lb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Pt(e)}}class r2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class s2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new r2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class i2{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,cn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new E_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new E_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function ub(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=o2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function th(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=ub(),o=a2(i.encode(w_(t,n)),i.encode(w_(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function w_(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function a2(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Ri(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=-62135596800,T_=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*T_);return new lt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<b_)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/T_}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-b_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const I_="__name__";class Cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=Cn.isNumericId(e),s=Cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Cn.extractNumericId(e).compare(Cn.extractNumericId(n)):th(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zr.fromString(e.substring(4,e.length-2))}}class ze extends Cn{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const c2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Cn{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return c2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===I_}static keyField(){return new Et([I_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zo=-1;function l2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Qr(s,fe.empty(),e)}function u2(t){return new Qr(t.readTime,t.key,Zo)}class Qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qr(_e.min(),fe.empty(),Zo)}static max(){return new Qr(_e.max(),fe.empty(),Zo)}}function f2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==h2)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function p2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ul{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ul.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=-1;function jl(t){return t==null}function Zc(t){return t===0&&1/t==-1/0}function m2(t){return typeof t=="number"&&Number.isInteger(t)&&!Zc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="";function g2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=A_(e)),e=_2(t.get(n),e);return A_(e)}function _2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case hb:n+="";break;default:n+=i}}return n}function A_(t){return t+hb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function db(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(e){return new S_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class S_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ut(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pb("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const y2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=y2.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="server_timestamp",gb="__type__",_b="__previous_value__",yb="__local_write_time__";function Cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[gb])===null||n===void 0?void 0:n.stringValue)===mb}function Bl(t){const e=t.mapValue.fields[_b];return Cd(e)?Bl(e):e}function ea(t){const e=Yr(t.mapValue.fields[yb].timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const el="(default)";class ta{constructor(e,n){this.projectId=e,this.database=n||el}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database===el}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="__type__",E2="__max__",rc={mapValue:{}},Eb="__vector__",tl="value";function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cd(t)?4:b2(t)?9007199254740991:w2(t)?10:11:me()}function jn(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Yr(s.timestampValue),a=Yr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xr(s.bytesValue).isEqual(Xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return tt(s.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return tt(s.integerValue)===tt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=tt(s.doubleValue),a=tt(i.doubleValue);return o===a?Zc(o)===Zc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ri(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(R_(o)!==R_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!jn(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function na(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function Si(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=tt(i.integerValue||i.doubleValue),l=tt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return P_(t.timestampValue,e.timestampValue);case 4:return P_(ea(t),ea(e));case 5:return th(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Xr(i),l=Xr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const f=ve(a[u],l[u]);if(f!==0)return f}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(tt(i.latitude),tt(o.latitude));return a!==0?a:ve(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return C_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,f;const d=i.fields||{},p=o.fields||{},g=(a=d[tl])===null||a===void 0?void 0:a.arrayValue,E=(l=p[tl])===null||l===void 0?void 0:l.arrayValue,b=ve(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((f=E==null?void 0:E.values)===null||f===void 0?void 0:f.length)||0);return b!==0?b:C_(g,E)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===rc.mapValue&&o===rc.mapValue)return 0;if(i===rc.mapValue)return 1;if(o===rc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let d=0;d<l.length&&d<f.length;++d){const p=th(l[d],f[d]);if(p!==0)return p;const g=Si(a[l[d]],u[f[d]]);if(g!==0)return g}return ve(l.length,f.length)}(t.mapValue,e.mapValue);default:throw me()}}function P_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Yr(t),r=Yr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function C_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Si(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Pi(t){return nh(t)}function nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nh(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function wc(t){switch(Jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bl(t);return e?16+wc(e):16;case 5:return 2*t.stringValue.length;case 6:return Xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+wc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return as(r.fields,(i,o)=>{s+=i.length+wc(o)}),s}(t.mapValue);default:throw me()}}function rh(t){return!!t&&"integerValue"in t}function kd(t){return!!t&&"arrayValue"in t}function k_(t){return!!t&&"nullValue"in t}function O_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bc(t){return!!t&&"mapValue"in t}function w2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[vb])===null||n===void 0?void 0:n.stringValue)===Eb}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function b2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===E2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=Et.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Co(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){as(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(Co(this.value))}}function wb(t){const e=[];return as(t.fields,(n,r)=>{const s=new Et([n]);if(bc(r)){const i=wb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xt(e,0,_e.min(),_e.min(),_e.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new xt(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new xt(e,2,n,_e.min(),_e.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,_e.min(),_e.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nl{constructor(e,n){this.position=e,this.inclusive=n}}function x_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=Si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function N_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function T2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bb{}class ot extends bb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new A2(e,n,r):n==="array-contains"?new P2(e,r):n==="in"?new C2(e,r):n==="not-in"?new k2(e,r):n==="array-contains-any"?new O2(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new R2(e,r):new S2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Si(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(Si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends bb{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Bn(e,n)}matches(e){return Tb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Tb(t){return t.op==="and"}function Ib(t){return I2(t)&&Tb(t)}function I2(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function sh(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(Ib(t))return t.filters.map(e=>sh(e)).join(",");{const e=t.filters.map(n=>sh(n)).join(",");return`${t.op}(${e})`}}function Ab(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&jn(r.value,s.value)}(t,e):t instanceof Bn?function(r,s){return s instanceof Bn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ab(o,s.filters[a]),!0):!1}(t,e):void me()}function Rb(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(Rb).join(" ,")+"}"}(t):"Filter"}class A2 extends ot{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class R2 extends ot{constructor(e,n){super(e,"in",n),this.keys=Sb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class S2 extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Sb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class P2 extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kd(n)&&na(n.arrayValue,this.value)}}class C2 extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class k2 extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class O2 extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
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
 */class x2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function D_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new x2(t,e,n,r,s,i,o)}function Od(t){const e=ye(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pi(r)).join(",")),e.le=n}return e.le}function xd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!T2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ab(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!N_(t.startAt,e.startAt)&&N_(t.endAt,e.endAt)}function ih(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function N2(t,e,n,r,s,i,o,a){return new $l(t,e,n,r,s,i,o,a)}function Pb(t){return new $l(t)}function L_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function D2(t){return t.collectionGroup!==null}function ko(t){const e=ye(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(Et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new rl(i,r))}),n.has(Et.keyField().canonicalString())||e.he.push(new rl(Et.keyField(),r))}return e.he}function Fn(t){const e=ye(t);return e.Pe||(e.Pe=L2(e,ko(t))),e.Pe}function L2(t,e){if(t.limitType==="F")return D_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rl(s.field,i)});const n=t.endAt?new nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nl(t.startAt.position,t.startAt.inclusive):null;return D_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function oh(t,e,n){return new $l(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hl(t,e){return xd(Fn(t),Fn(e))&&t.limitType===e.limitType}function Cb(t){return`${Od(Fn(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Rb(s)).join(", ")}]`),jl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Pi(s)).join(",")),`Target(${r})`}(Fn(t))}; limitType=${t.limitType})`}function zl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ko(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=x_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ko(r),s)||r.endAt&&!function(o,a,l){const u=x_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ko(r),s))}(t,e)}function M2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kb(t){return(e,n)=>{let r=!1;for(const s of ko(t)){const i=V2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function V2(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Si(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return db(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new Ye(fe.comparator);function cr(){return F2}const Ob=new Ye(fe.comparator);function mo(...t){let e=Ob;for(const n of t)e=e.insert(n.key,n);return e}function xb(t){let e=Ob;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vs(){return Oo()}function Nb(){return Oo()}function Oo(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const U2=new Ye(fe.comparator),j2=new ut(fe.comparator);function Te(...t){let e=j2;for(const n of t)e=e.add(n);return e}const B2=new ut(ve);function $2(){return B2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zc(e)?"-0":e}}function Db(t){return{integerValue:""+t}}function H2(t,e){return m2(e)?Db(e):Nd(t,e)}/**
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
 */class ql{constructor(){this._=void 0}}function z2(t,e,n){return t instanceof sl?function(s,i){const o={fields:{[gb]:{stringValue:mb},[yb]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cd(i)&&(i=Bl(i)),i&&(o.fields[_b]=i),{mapValue:o}}(n,e):t instanceof ra?Mb(t,e):t instanceof sa?Vb(t,e):function(s,i){const o=Lb(s,i),a=M_(o)+M_(s.Ie);return rh(o)&&rh(s.Ie)?Db(a):Nd(s.serializer,a)}(t,e)}function q2(t,e,n){return t instanceof ra?Mb(t,e):t instanceof sa?Vb(t,e):n}function Lb(t,e){return t instanceof il?function(r){return rh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class sl extends ql{}class ra extends ql{constructor(e){super(),this.elements=e}}function Mb(t,e){const n=Fb(e);for(const r of t.elements)n.some(s=>jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends ql{constructor(e){super(),this.elements=e}}function Vb(t,e){let n=Fb(e);for(const r of t.elements)n=n.filter(s=>!jn(s,r));return{arrayValue:{values:n}}}class il extends ql{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function M_(t){return tt(t.integerValue||t.doubleValue)}function Fb(t){return kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function W2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ra&&s instanceof ra||r instanceof sa&&s instanceof sa?Ri(r.elements,s.elements,jn):r instanceof il&&s instanceof il?jn(r.Ie,s.Ie):r instanceof sl&&s instanceof sl}(t.transform,e.transform)}class K2{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wl{}function Ub(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dd(t.key,un.none()):new wa(t.key,t.data,un.none());{const n=t.data,r=Kt.empty();let s=new ut(Et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cs(t.key,r,new Xt(s.toArray()),un.none())}}function G2(t,e,n){t instanceof wa?function(s,i,o){const a=s.value.clone(),l=F_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof cs?function(s,i,o){if(!Tc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=F_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(jb(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xo(t,e,n,r){return t instanceof wa?function(i,o,a,l){if(!Tc(i.precondition,o))return a;const u=i.value.clone(),f=U_(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof cs?function(i,o,a,l){if(!Tc(i.precondition,o))return a;const u=U_(i.fieldTransforms,l,o),f=o.data;return f.setAll(jb(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Tc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Q2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lb(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function V_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ri(r,s,(i,o)=>W2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends Wl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cs extends Wl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function F_(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,q2(o,a,n[s]))}return r}function U_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,z2(i,o,e))}return r}class Dd extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Y2 extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&G2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Ub(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,(n,r)=>V_(n,r))&&Ri(this.baseMutations,e.baseMutations,(n,r)=>V_(n,r))}}class Ld{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return U2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ld(e,n,r,s)}}/**
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
 */class J2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Z2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,Ae;function eD(t){switch(t){case H.OK:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return me()}}function Bb(t){if(t===void 0)return ar("GRPC error has no .code"),H.UNKNOWN;switch(t){case nt.OK:return H.OK;case nt.CANCELLED:return H.CANCELLED;case nt.UNKNOWN:return H.UNKNOWN;case nt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case nt.INTERNAL:return H.INTERNAL;case nt.UNAVAILABLE:return H.UNAVAILABLE;case nt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case nt.NOT_FOUND:return H.NOT_FOUND;case nt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case nt.ABORTED:return H.ABORTED;case nt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case nt.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Ae=nt||(nt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const tD=new zr([4294967295,4294967295],0);function j_(t){const e=ub().encode(t),n=new rb;return n.update(e),new Uint8Array(n.digest())}function B_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zr([n,r],0),new zr([s,i],0)]}class Md{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=zr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(zr.fromNumber(r)));return s.compare(tD)===1&&(s=new zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=j_(e),[r,s]=B_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Md(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=j_(e),[r,s]=B_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ba.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kl(_e.min(),s,new Ye(ve),cr(),Te())}}class ba{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ba(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class $b{constructor(e,n){this.targetId=e,this.ge=n}}class Hb{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $_{constructor(){this.pe=0,this.ye=H_(),this.we=bt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Te(),n=Te(),r=Te();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new ba(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=H_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ne(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class nD{constructor(e){this.ke=e,this.qe=new Map,this.Qe=cr(),this.$e=sc(),this.Ue=sc(),this.Ke=new Ye(ve)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(ih(i))if(r===0){const o=new fe(i.path);this.ze(n,o,xt.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),l=a?this.nt(a,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Xr(r).toUint8Array()}catch(l){if(l instanceof pb)return Ai("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Md(o,s,i)}catch(l){return Ai(l instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&ih(a.target)){const l=new fe(a.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,xt.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Te();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Kl(e,n,this.Ke,this.Qe,r);return this.Qe=cr(),this.$e=sc(),this.Ue=sc(),this.Ke=new Ye(ve),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new $_,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ut(ve),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ut(ve),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new $_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function sc(){return new Ye(fe.comparator)}function H_(){return new Ye(fe.comparator)}const rD={asc:"ASCENDING",desc:"DESCENDING"},sD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iD={and:"AND",or:"OR"};class oD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ah(t,e){return t.useProto3Json||jl(e)?e:{value:e}}function ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aD(t,e){return ol(t,e.toTimestamp())}function Un(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=Yr(n);return new lt(r.seconds,r.nanos)}(t))}function Vd(t,e){return ch(t,e).canonicalString()}function ch(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qb(t){const e=ze.fromString(t);return Ne(Yb(e)),e}function lh(t,e){return Vd(t.databaseId,e.path)}function Ju(t,e){const n=qb(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(Kb(n))}function Wb(t,e){return Vd(t.databaseId,e)}function cD(t){const e=qb(t);return e.length===4?ze.emptyPath():Kb(e)}function uh(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kb(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function z_(t,e,n){return{name:lh(t,e),fields:n.value.mapValue.fields}}function lD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ne(f===void 0||typeof f=="string"),bt.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array),bt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?H.UNKNOWN:Bb(u.code);return new ce(f,u.message||"")}(o);n=new Hb(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ju(t,r.document.name),i=Un(r.document.updateTime),o=r.document.createTime?Un(r.document.createTime):_e.min(),a=new Kt({mapValue:{fields:r.document.fields}}),l=xt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ic(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ju(t,r.document),i=r.readTime?Un(r.readTime):_e.min(),o=xt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ju(t,r.document),i=r.removedTargetIds||[];n=new Ic([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Z2(s,i),a=r.targetId;n=new $b(a,o)}}return n}function uD(t,e){let n;if(e instanceof wa)n={update:z_(t,e.key,e.value)};else if(e instanceof Dd)n={delete:lh(t,e.key)};else if(e instanceof cs)n={update:z_(t,e.key,e.data),updateMask:vD(e.fieldMask)};else{if(!(e instanceof Y2))return me();n={verify:lh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof il)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function fD(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Un(s.updateTime):Un(i);return o.isEqual(_e.min())&&(o=Un(i)),new K2(o,s.transformResults||[])}(n,e))):[]}function hD(t,e){return{documents:[Wb(t,e.path)]}}function dD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Wb(t,s);const i=function(u){if(u.length!==0)return Qb(Bn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:ei(p.field),direction:gD(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ah(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function pD(t){let e=cD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const p=Gb(d);return p instanceof Bn&&Ib(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(E){return new rl(ti(E.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,jl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new nl(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new nl(g,p)}(n.endAt)),N2(e,s,o,i,a,"F",l,u)}function mD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ti(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ti(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ti(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ti(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(ti(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>Gb(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function gD(t){return rD[t]}function _D(t){return sD[t]}function yD(t){return iD[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return Et.fromServerFormat(t.fieldPath)}function Qb(t){return t instanceof ot?function(n){if(n.op==="=="){if(O_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NAN"}};if(k_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(O_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NAN"}};if(k_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(n.field),op:_D(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(s=>Qb(s));return r.length===1?r[0]:{compositeFilter:{op:yD(n.op),filters:r}}}(t):me()}function vD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.Tt=e}}function wD(t){const e=pD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oh(e,e.limit,"L"):e}/**
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
 */class bD{constructor(){this.Tn=new TD}addToCollectionParentIndex(e,n){return this.Tn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Qr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Qr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class TD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(ze.comparator)).toArray()}}/**
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
 */const q_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xb=41943040;class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(Xb,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Ci(0)}static Kn(){return new Ci(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="LruGarbageCollector",ID=1048576;function K_([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class AD{constructor(e){this.Hn=e,this.buffer=new ut(K_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();K_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){te(W_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$i(n)?te(W_,"Ignoring IndexedDB error during garbage collection: ",n):await Bi(n)}await this.er(3e5)})}}class SD{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Ul.ae);const r=new AD(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(q_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),q_):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,a,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Js()<=we.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function PD(t,e){return new SD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&xo(r.mutation,s,Xt.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=mo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=cr();const o=Oo(),a=function(){return Oo()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof cs)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),xo(f.mutation,u,f.mutation.getFieldMask(),lt.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return a.set(u,new kD(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Oo();let s=new Ye((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Xt.empty();f=a.applyToLocalView(u,f),r.set(l,f);const d=(s.get(a.batchId)||Te()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,f=l.value,d=Nb();f.forEach(p=>{if(!i.has(p)){const g=Ub(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):D2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(vs());let a=Zo,l=i;return o.next(u=>B.forEach(u,(f,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(f=>({batchId:a,changes:xb(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=mo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=mo();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,l=>{const u=function(d,p){return new $l(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,xt.newInvalidDocument(f)))});let a=mo();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&xo(f.mutation,u,Xt.empty(),lt.now()),zl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return B.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Un(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:wD(s.bundledQuery),readTime:Un(s.readTime)}}(n)),B.resolve()}}/**
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
 */class ND{constructor(){this.overlays=new Ye(fe.comparator),this.Rr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vs();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=vs(),i=n.length+1,o=new fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=vs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=vs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return B.resolve(a)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new J2(n,r));let i=this.Rr.get(n);i===void 0&&(i=Te(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class DD{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.Vr=new ut(ht.mr),this.gr=new ut(ht.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new ht(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new fe(new ze([])),r=new ht(n,e),s=new ht(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new fe(new ze([])),r=new ht(n,e),s=new ht(n,e+1);let i=Te();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return fe.comparator(e.key,n.key)||ve(e.Cr,n.Cr)}static pr(e,n){return ve(e.Cr,n.Cr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ut(ht.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new X2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Mr=this.Mr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Pd:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const a=this.Or(o.Cr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(ve);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],a=>{r=r.add(a.Cr)})}),B.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new ht(new fe(i),0);let a=new ut(ve);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Cr)),!0)},o),B.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return B.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new ht(n,0),s=this.Mr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.kr=e,this.docs=function(){return new Ye(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cr();const o=n.path,a=new fe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||f2(u2(f),r)<=0||(s.has(f.key)||zl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}qr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VD(this)}getSize(e){return B.resolve(this.size)}}class VD extends CD{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.persistence=e,this.Qr=new Us(n=>Od(n),xd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Fd,this.targetCount=0,this.Kr=Ci.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),B.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Ci(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.zn(n),B.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ul(0),this.zr=!1,this.zr=!0,this.jr=new DD,this.referenceDelegate=e(this),this.Hr=new FD(this),this.indexManager=new bD,this.remoteDocumentCache=function(s){return new MD(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new ED(n),this.Yr=new xD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ND,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new LD(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new UD(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return B.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class UD extends d2{constructor(e){super(),this.currentSequenceNumber=e}}class Ud{constructor(e){this.persistence=e,this.ti=new Fd,this.ni=null}static ri(e){return new Ud(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),B.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,r=>{const s=fe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return B.or([()=>B.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class al{constructor(e,n){this.persistence=e,this.oi=new Us(r=>g2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=PD(this,n)}static ri(e,n){return new al(e,n)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return B.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wc(e.data.value)),n}ar(e,n,r){return B.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jd(e,n.fromCache,r,s)}}/**
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
 */class jD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return rk()?8:p2(Dt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new jD;return this._s(e,n,o).next(a=>{if(i.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Js()<=we.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Js()<=we.DEBUG&&te("QueryEngine","Query:",Zs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Js()<=we.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fn(n))):B.resolve())}rs(e,n){if(L_(n))return B.resolve(null);let r=Fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oh(n,null,"F"),r=Fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(n,a);return this.ls(n,u,o,l.readTime)?this.rs(e,oh(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,r,s){return L_(n)||s.isEqual(_e.min())?B.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?B.resolve(null):(Js()<=we.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zs(n)),this.hs(e,o,n,l2(s,Zo)).next(a=>a))})}cs(e,n){let r=new ut(kb(e));return n.forEach((s,i)=>{zl(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Js()<=we.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.ns.getDocumentsMatchingQuery(e,n,Qr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="LocalStore",$D=3e8;class HD{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ye(ve),this.Is=new Us(i=>Od(i),xd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function zD(t,e,n,r){return new HD(t,e,n,r)}async function Zb(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function qD(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,l,u,f){const d=u.batch,p=d.keys();let g=B.resolve();return p.forEach(E=>{g=g.next(()=>f.getEntry(l,E)).next(b=>{const k=u.docVersions.get(E);Ne(k!==null),b.version.compareTo(k)<0&&(d.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),f.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function eT(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function WD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const a=[];e.targetChanges.forEach((f,d)=>{const p=s.get(d);if(!p)return;a.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(d,g),function(b,k,S){return b.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=$D?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,g,f)&&a.push(n.Hr.updateTargetData(i,g))});let l=cr(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(KD(i,o,e.documentUpdates).next(f=>{l=f.Vs,u=f.fs})),!r.isEqual(_e.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(d=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ts=s,i))}function KD(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te(Bd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function GD(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QD(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function fh(t,e,n){const r=ye(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$i(o))throw o;te(Bd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function G_(t,e,n){const r=ye(t);let s=_e.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const d=ye(l),p=d.Is.get(f);return p!==void 0?B.resolve(d.Ts.get(p)):d.Hr.getTargetData(u,f)}(r,o,Fn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Te())).next(a=>(YD(r,M2(e),a),{documents:a,gs:i})))}function YD(t,e,n){let r=t.Es.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Q_{constructor(){this.activeTargetIds=$2()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XD{constructor(){this.ho=new Q_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Q_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JD{To(e){}shutdown(){}}/**
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
 */const Y_="ConnectivityMonitor";class X_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){te(Y_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){te(Y_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ic=null;function hh(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="RestConnection",ZD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eL{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===el?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=hh(),a=this.bo(e,n.toUriEncodedString());te(Zu,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,a,l,r).then(u=>(te(Zu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ai(Zu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=ZD[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class nL extends eL{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=hh();return new Promise((o,a)=>{const l=new sb;l.setWithCredentials(!0),l.listenOnce(ib.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ec.NO_ERROR:const f=l.getResponseJson();te(St,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ec.TIMEOUT:te(St,`RPC '${e}' ${i} timed out`),a(new ce(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ec.HTTP_ERROR:const d=l.getStatus();if(te(St,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const E=function(k){const S=k.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(S)>=0?S:H.UNKNOWN}(g.status);a(new ce(E,g.message))}else a(new ce(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(St,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(St,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=hh(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cb(),a=ab(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");te(St,`Creating RPC '${e}' stream ${s}: ${f}`,l);const d=o.createWebChannel(f,l);let p=!1,g=!1;const E=new tL({Fo:k=>{g?te(St,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(p||(te(St,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(St,`RPC '${e}' stream ${s} sending:`,k),d.send(k))},Mo:()=>d.close()}),b=(k,S,P)=>{k.listen(S,_=>{try{P(_)}catch(R){setTimeout(()=>{throw R},0)}})};return b(d,po.EventType.OPEN,()=>{g||(te(St,`RPC '${e}' stream ${s} transport opened.`),E.Qo())}),b(d,po.EventType.CLOSE,()=>{g||(g=!0,te(St,`RPC '${e}' stream ${s} transport closed`),E.Uo())}),b(d,po.EventType.ERROR,k=>{g||(g=!0,Ai(St,`RPC '${e}' stream ${s} transport errored:`,k),E.Uo(new ce(H.UNAVAILABLE,"The operation could not be completed")))}),b(d,po.EventType.MESSAGE,k=>{var S;if(!g){const P=k.data[0];Ne(!!P);const _=P,R=(_==null?void 0:_.error)||((S=_[0])===null||S===void 0?void 0:S.error);if(R){te(St,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let M=function(y){const I=nt[y];if(I!==void 0)return Bb(I)}(D),T=R.message;M===void 0&&(M=H.INTERNAL,T="Unknown error status: "+D+" with message "+R.message),g=!0,E.Uo(new ce(M,T)),d.close()}else te(St,`RPC '${e}' stream ${s} received:`,P),E.Ko(P)}}),b(a,ob.STAT_EVENT,k=>{k.stat===eh.PROXY?te(St,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===eh.NOPROXY&&te(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.$o()},0),E}}function ef(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new oD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="PersistentStream";class nT{constructor(e,n,r,s,i,o,a,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new tT(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ce(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return te(J_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(te(J_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rL extends nT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=lD(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Un(o.readTime):_e.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=uh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=ih(l)?{documents:hD(i,l)}:{query:dD(i,l).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zb(i,o.resumeToken);const u=ah(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=ol(i,o.snapshotVersion.toTimestamp());const u=ah(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=mD(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=uh(this.serializer),n.removeTarget=e,this.I_(n)}}class sL extends nT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=fD(e.writeResults,e.commitTime),r=Un(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=uh(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uD(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{}class oL extends iL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,ch(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(H.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,ch(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(H.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class aL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ar(n),this.N_=!1):te("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="RemoteStore";class cL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{js(this)&&(te(Os,"Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.W_.add(4),await Ta(u),u.j_.set("Unknown"),u.W_.delete(4),await Ql(u)}(this))})}),this.j_=new aL(r,s)}}async function Ql(t){if(js(t))for(const e of t.G_)await e(!0)}async function Ta(t){for(const e of t.G_)await e(!1)}function rT(t,e){const n=ye(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),qd(n)?zd(n):Hi(n).c_()&&Hd(n,e))}function $d(t,e){const n=ye(t),r=Hi(n);n.K_.delete(e),r.c_()&&sT(n,e),n.K_.size===0&&(r.c_()?r.P_():js(n)&&n.j_.set("Unknown"))}function Hd(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).y_(e)}function sT(t,e){t.H_.Ne(e),Hi(t).w_(e)}function zd(t){t.H_=new nD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.j_.B_()}function qd(t){return js(t)&&!Hi(t).u_()&&t.K_.size>0}function js(t){return ye(t).W_.size===0}function iT(t){t.H_=void 0}async function lL(t){t.j_.set("Online")}async function uL(t){t.K_.forEach((e,n)=>{Hd(t,e)})}async function fL(t,e){iT(t),qd(t)?(t.j_.q_(e),zd(t)):t.j_.set("Unknown")}async function hL(t,e,n){if(t.j_.set("Online"),e instanceof Hb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.K_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.K_.delete(a),s.H_.removeTarget(a))}(t,e)}catch(r){te(Os,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cl(t,r)}else if(e instanceof Ic?t.H_.We(e):e instanceof $b?t.H_.Ze(e):t.H_.je(e),!n.isEqual(_e.min()))try{const r=await eT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.H_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.K_.get(u);f&&i.K_.set(u,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const f=i.K_.get(l);if(!f)return;i.K_.set(l,f.withResumeToken(bt.EMPTY_BYTE_STRING,f.snapshotVersion)),sT(i,l);const d=new Fr(f.target,l,u,f.sequenceNumber);Hd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(Os,"Failed to raise snapshot:",r),await cl(t,r)}}async function cl(t,e,n){if(!$i(e))throw e;t.W_.add(1),await Ta(t),t.j_.set("Offline"),n||(n=()=>eT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Os,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Ql(t)})}function oT(t,e){return e().catch(n=>cl(t,n,e))}async function Yl(t){const e=ye(t),n=Zr(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Pd;for(;dL(e);)try{const s=await GD(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,pL(e,s)}catch(s){await cl(e,s)}aT(e)&&cT(e)}function dL(t){return js(t)&&t.U_.length<10}function pL(t,e){t.U_.push(e);const n=Zr(t);n.c_()&&n.S_&&n.b_(e.mutations)}function aT(t){return js(t)&&!Zr(t).u_()&&t.U_.length>0}function cT(t){Zr(t).start()}async function mL(t){Zr(t).C_()}async function gL(t){const e=Zr(t);for(const n of t.U_)e.b_(n.mutations)}async function _L(t,e,n){const r=t.U_.shift(),s=Ld.from(r,e,n);await oT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Yl(t)}async function yL(t,e){e&&Zr(t).S_&&await async function(r,s){if(function(o){return eD(o)&&o!==H.ABORTED}(s.code)){const i=r.U_.shift();Zr(r).h_(),await oT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yl(r)}}(t,e),aT(t)&&cT(t)}async function Z_(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te(Os,"RemoteStore received new credentials");const r=js(n);n.W_.add(3),await Ta(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Ql(n)}async function vL(t,e){const n=ye(t);e?(n.W_.delete(2),await Ql(n)):e||(n.W_.add(2),await Ta(n),n.j_.set("Unknown"))}function Hi(t){return t.J_||(t.J_=function(n,r,s){const i=ye(n);return i.M_(),new rL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:lL.bind(null,t),No:uL.bind(null,t),Lo:fL.bind(null,t),p_:hL.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),qd(t)?zd(t):t.j_.set("Unknown")):(await t.J_.stop(),iT(t))})),t.J_}function Zr(t){return t.Y_||(t.Y_=function(n,r,s){const i=ye(n);return i.M_(),new sL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:mL.bind(null,t),Lo:yL.bind(null,t),D_:gL.bind(null,t),v_:_L.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Yl(t)):(await t.Y_.stop(),t.U_.length>0&&(te(Os,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kd(t,e){if(ar("AsyncQueue",`${e}: ${t}`),$i(t))return new ce(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{static emptySet(e){return new mi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=mo(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.Z_=new Ye(fe.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ki{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ki(e,n,mi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class wL{constructor(){this.queries=ty(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=ty(),i.forEach((o,a)=>{for(const l of a.ta)l.onError(r)})})(this,new ce(H.ABORTED,"Firestore shutting down"))}}function ty(){return new Us(t=>Cb(t),Hl)}async function bL(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new EL,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Kd(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Gd(n)}async function TL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IL(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ta)a.oa(s)&&(r=!0);o.ea=s}}r&&Gd(n)}function AL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Gd(t){t.ia.forEach(e=>{e.next()})}var dh,ny;(ny=dh||(dh={}))._a="default",ny.Cache="cache";class RL{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==dh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.key=e}}class uT{constructor(e){this.key=e}}class SL{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Te(),this.mutatedKeys=Te(),this.ya=kb(e),this.wa=new mi(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new ey,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const p=s.get(f),g=zl(this.query,d)?d:null,E=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?E!==b&&(r.track({type:3,doc:g}),k=!0):this.va(p,g)||(r.track({type:2,doc:g}),k=!0,(l&&this.ya(g,l)>0||u&&this.ya(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),k=!0):p&&!g&&(r.track({type:1,doc:p}),k=!0,(l||u)&&(a=!0)),k&&(g?(o=o.add(g),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:a,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,d)=>function(g,E){const b=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return b(g)-b(E)}(f.type,d.type)||this.ya(f.doc,d.doc)),this.Ca(r),s=s!=null&&s;const a=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new ki(this.query,e.wa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ey,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Te(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new uT(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new lT(r))}),n}Oa(e){this.fa=e.gs,this.pa=Te();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return ki.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Qd="SyncEngine";class PL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CL{constructor(e){this.key=e,this.Ba=!1}}class kL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Us(a=>Cb(a),Hl),this.qa=new Map,this.Qa=new Set,this.$a=new Ye(fe.comparator),this.Ua=new Map,this.Ka=new Fd,this.Wa={},this.Ga=new Map,this.za=Ci.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function OL(t,e,n=!0){const r=gT(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await fT(r,e,n,!0),s}async function xL(t,e){const n=gT(t);await fT(n,e,!0,!1)}async function fT(t,e,n,r){const s=await QD(t.localStore,Fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await NL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&rT(t.remoteStore,s),a}async function NL(t,e,n,r,s){t.Ha=(d,p,g)=>async function(b,k,S,P){let _=k.view.ba(S);_.ls&&(_=await G_(b.localStore,k.query,!1).then(({documents:T})=>k.view.ba(T,_)));const R=P&&P.targetChanges.get(k.targetId),D=P&&P.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(_,b.isPrimaryClient,R,D);return sy(b,k.targetId,M.Ma),M.snapshot}(t,d,p,g);const i=await G_(t.localStore,e,!0),o=new SL(e,i.gs),a=o.ba(i.documents),l=ba.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);sy(t,n,u.Ma);const f=new PL(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function DL(t,e,n){const r=ye(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Hl(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&$d(r.remoteStore,s.targetId),ph(r,s.targetId)}).catch(Bi)):(ph(r,s.targetId),await fh(r.localStore,s.targetId,!0))}async function LL(t,e){const n=ye(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$d(n.remoteStore,r.targetId))}async function ML(t,e,n){const r=HL(t);try{const s=await function(o,a){const l=ye(o),u=lt.now(),f=a.reduce((g,E)=>g.add(E.key),Te());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=cr(),b=Te();return l.ds.getEntries(g,f).next(k=>{E=k,E.forEach((S,P)=>{P.isValidDocument()||(b=b.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,E)).next(k=>{d=k;const S=[];for(const P of a){const _=Q2(P,d.get(P.key).overlayedDocument);_!=null&&S.push(new cs(P.key,_,wb(_.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,S,a)}).next(k=>{p=k;const S=k.applyToLocalDocumentSet(d,b);return l.documentOverlayCache.saveOverlays(g,k.batchId,S)})}).then(()=>({batchId:p.batchId,changes:xb(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new Ye(ve)),u=u.insert(a,l),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ia(r,s.changes),await Yl(r.remoteStore)}catch(s){const i=Kd(s,"Failed to persist write");n.reject(i)}}async function hT(t,e){const n=ye(t);try{const r=await WD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ne(o.Ba):s.removedDocuments.size>0&&(Ne(o.Ba),o.Ba=!1))}),await Ia(n,r,e)}catch(r){await Bi(r)}}function ry(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const a=o.view.sa(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((f,d)=>{for(const p of d.ta)p.sa(a)&&(u=!0)}),u&&Gd(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VL(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new Ye(fe.comparator);o=o.insert(i,xt.newNoDocument(i,_e.min()));const a=Te().add(i),l=new Kl(_e.min(),new Map,new Ye(ve),o,a);await hT(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),Yd(r)}else await fh(r.localStore,e,!1).then(()=>ph(r,e,n)).catch(Bi)}async function FL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await qD(n.localStore,e);pT(n,r,null),dT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ia(n,s)}catch(s){await Bi(s)}}async function UL(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ne(d!==null),f=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);pT(r,e,n),dT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ia(r,s)}catch(s){await Bi(s)}}function dT(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function pT(t,e,n){const r=ye(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function ph(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||mT(t,r)})}function mT(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&($d(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Yd(t))}function sy(t,e,n){for(const r of n)r instanceof lT?(t.Ka.addReference(r.key,e),jL(t,r)):r instanceof uT?(te(Qd,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||mT(t,r.key)):me()}function jL(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(te(Qd,"New document in limbo: "+n),t.Qa.add(r),Yd(t))}function Yd(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new fe(ze.fromString(e)),r=t.za.next();t.Ua.set(r,new CL(n)),t.$a=t.$a.insert(n,r),rT(t.remoteStore,new Fr(Fn(Pb(n.path)),r,"TargetPurposeLimboResolution",Ul.ae))}}async function Ia(t,e,n){const r=ye(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,l)=>{o.push(r.Ha(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=jd.Yi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,u){const f=ye(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,p=>B.forEach(p.Hi,g=>f.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>B.forEach(p.Ji,g=>f.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!$i(d))throw d;te(Bd,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=f.Ts.get(p),E=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(E);f.Ts=f.Ts.insert(p,b)}}}(r.localStore,i))}async function BL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te(Qd,"User change. New user:",e.toKey());const r=await Zb(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(a=>{a.forEach(l=>{l.reject(new ce(H.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ia(n,r.Rs)}}function $L(t,e){const n=ye(t),r=n.Ua.get(e);if(r&&r.Ba)return Te().add(r.key);{let s=Te();const i=n.qa.get(e);if(!i)return s;for(const o of i){const a=n.ka.get(o);s=s.unionWith(a.view.Sa)}return s}}function gT(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$L.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VL.bind(null,e),e.La.p_=IL.bind(null,e.eventManager),e.La.Ja=AL.bind(null,e.eventManager),e}function HL(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UL.bind(null,e),e}class ll{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return zD(this.persistence,new BD,e.initialUser,this.serializer)}Xa(e){return new Jb(Ud.ri,this.serializer)}Za(e){return new XD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ll.provider={build:()=>new ll};class zL extends ll{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ne(this.persistence.referenceDelegate instanceof al);const r=this.persistence.referenceDelegate.garbageCollector;return new RD(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Jb(r=>al.ri(r,n),this.serializer)}}class mh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ry(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BL.bind(null,this.syncEngine),await vL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wL}()}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=function(i){return new nL(i)}(e.databaseInfo);return function(i,o,a,l){return new oL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new cL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ry(this.syncEngine,n,0),function(){return X_.D()?new X_:new JD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,f){const d=new kL(s,i,o,a,l,u);return f&&(d.ja=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te(Os,"RemoteStore shutting down."),i.W_.add(5),await Ta(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}mh.provider={build:()=>new mh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirestoreClient";class WL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=fb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(es,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(es,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tf(t,e){t.asyncQueue.verifyOperationInProgress(),te(es,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zb(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KL(t);te(es,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Z_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Z_(e.remoteStore,s)),t._onlineComponents=e}async function KL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(es,"Using user provided OfflineComponentProvider");try{await tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ai("Error using user provided cache. Falling back to memory cache: "+n),await tf(t,new ll)}}else te(es,"Using default OfflineComponentProvider"),await tf(t,new zL(void 0));return t._offlineComponents}async function _T(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(es,"Using user provided OnlineComponentProvider"),await iy(t,t._uninitializedComponentsProvider._online)):(te(es,"Using default OnlineComponentProvider"),await iy(t,new mh))),t._onlineComponents}function GL(t){return _T(t).then(e=>e.syncEngine)}async function QL(t){const e=await _T(t),n=e.eventManager;return n.onListen=OL.bind(null,e.syncEngine),n.onUnlisten=DL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LL.bind(null,e.syncEngine),n}function YL(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const f=new qL({next:p=>{f.su(),o.enqueueAndForget(()=>TL(i,d)),p.fromCache&&l.source==="server"?u.reject(new ce(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new RL(a,f,{includeMetadataChanges:!0,Ta:!0});return bL(i,d)}(await QL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function yT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e,n){if(!n)throw new ce(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XL(t,e,n,r){if(e===!0&&r===!0)throw new ce(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ay(t){if(!fe.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cy(t){if(fe.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xd(t);throw new ce(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="firestore.googleapis.com",ly=!0;class uy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ET,this.ssl=ly}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ly;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ID)throw new ce(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new e2;switch(r.type){case"firstParty":return new s2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oy.get(n);r&&(te("ComponentProvider","Removing Datastore"),oy.delete(n),r.terminate())}(this),Promise.resolve()}}function JL(t,e,n,r={}){var s;const i=(t=Oi(t,Xl))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;i.host!==ET&&i.host!==a&&Ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:r});if(!Ss(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Pt.MOCK_USER;else{u=_w(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new ce(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Pt(d)}t._authCredentials=new t2(new lb(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jl(this.firestore,e,this._query)}}class fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class Wr extends Jl{constructor(e,n,r){super(e,n,Pb(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new fe(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function a9(t,e,...n){if(t=Je(t),vT("collection","path",e),t instanceof Xl){const r=ze.fromString(e,...n);return cy(r),new Wr(t,null,r)}{if(!(t instanceof fn||t instanceof Wr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return cy(r),new Wr(t.firestore,null,r)}}function c9(t,e,...n){if(t=Je(t),arguments.length===1&&(e=fb.newId()),vT("doc","path",e),t instanceof Xl){const r=ze.fromString(e,...n);return ay(r),new fn(t,null,new fe(r))}{if(!(t instanceof fn||t instanceof Wr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return ay(r),new fn(t.firestore,t instanceof Wr?t.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="AsyncQueue";class hy{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new tT(this,"async_queue_retry"),this.Su=()=>{const r=ef();r&&te(fy,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=ef();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=ef();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new qr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!$i(e))throw e;te(fy,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ar("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Wd.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Zl extends Xl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hy(e),this._firestoreClient=void 0,await e}}}function ZL(t,e){const n=typeof t=="object"?t:_d(),r=typeof t=="string"?t:el,s=Dl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pw("firestore");i&&JL(s,...i)}return s}function Jd(t){if(t._terminated)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eM(t),t._firestoreClient}function eM(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,f){return new v2(a,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new WL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xi(bt.fromBase64String(e))}catch(n){throw new ce(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xi(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class tp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=/^__.*__$/;class nM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class wT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class np{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new np(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ul(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(bT(this.Lu)&&tM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class rM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gl(e)}ju(e,n,r,s=!1){return new np({Lu:e,methodName:n,zu:r,path:Et.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TT(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new rM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IT(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);rp("Data must be an object, but it was:",o,r);const a=AT(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const p=gh(e,d,n);if(!o.contains(p))throw new ce(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ST(f,p)||f.push(p)}l=new Xt(f),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new nM(new Kt(a),l,u)}class tu extends Zd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tu}}function sM(t,e,n,r){const s=t.ju(1,e,n);rp("Data must be an object, but it was:",s,r);const i=[],o=Kt.empty();as(r,(l,u)=>{const f=sp(e,l,n);u=Je(u);const d=s.Uu(f);if(u instanceof tu)i.push(f);else{const p=nu(u,d);p!=null&&(i.push(f),o.set(f,p))}});const a=new Xt(i);return new wT(o,a,s.fieldTransforms)}function iM(t,e,n,r,s,i){const o=t.ju(1,e,n),a=[gh(e,r,n)],l=[s];if(i.length%2!=0)throw new ce(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(gh(e,i[p])),l.push(i[p+1]);const u=[],f=Kt.empty();for(let p=a.length-1;p>=0;--p)if(!ST(u,a[p])){const g=a[p];let E=l[p];E=Je(E);const b=o.Uu(g);if(E instanceof tu)u.push(g);else{const k=nu(E,b);k!=null&&(u.push(g),f.set(g,k))}}const d=new Xt(u);return new wT(f,d,o.fieldTransforms)}function nu(t,e){if(RT(t=Je(t)))return rp("Unsupported field value:",e,t),AT(t,e);if(t instanceof Zd)return function(r,s){if(!bT(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=nu(a,s.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return H2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:ol(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ol(s.serializer,i)}}if(r instanceof ep)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xi)return{bytesValue:zb(s.serializer,r._byteString)};if(r instanceof fn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tp)return function(o,a){return{mapValue:{fields:{[vb]:{stringValue:Eb},[tl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return Nd(a.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Xd(r)}`)}(t,e)}function AT(t,e){const n={};return db(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(r,s)=>{const i=nu(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function RT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof ep||t instanceof xi||t instanceof fn||t instanceof Zd||t instanceof tp)}function rp(t,e,n){if(!RT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xd(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function gh(t,e,n){if((e=Je(e))instanceof eu)return e._internalPath;if(typeof e=="string")return sp(t,e);throw ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const oM=new RegExp("[~\\*/\\[\\]]");function sp(t,e,n){if(e.search(oM)>=0)throw ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eu(...e.split("."))._internalPath}catch{throw ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ul(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce(H.INVALID_ARGUMENT,a+t+l)}function ST(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aM extends PT{data(){return super.data()}}function CT(t,e){return typeof e=="string"?sp(t,e):e instanceof eu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lM{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return as(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[tl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>tt(o.doubleValue));return new tp(i)}convertGeoPoint(e){return new ep(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=Yr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);Ne(Yb(r));const s=new ta(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uM extends PT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(CT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ac extends uM{data(e={}){return super.data(e)}}class fM{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oc(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ac(this._firestore,this._userDataWriter,r.key,r,new oc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ac(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ac(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:hM(a.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class dM extends lM{constructor(e){super(),this.firestore=e}convertBytes(e){return new xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,n)}}function l9(t){t=Oi(t,Jl);const e=Oi(t.firestore,Zl),n=Jd(e),r=new dM(e);return cM(t._query),YL(n,t._query).then(s=>new fM(e,r,t,s))}function u9(t,e,n){t=Oi(t,fn);const r=Oi(t.firestore,Zl),s=kT(t.converter,e,n);return OT(r,[IT(TT(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function OT(t,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>ML(await GL(r),s,i)),i.promise}(Jd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=TT(e)}set(e,n,r){this._verifyNotCommitted();const s=nf(e,this._firestore),i=kT(s.converter,n,r),o=IT(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,un.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=nf(e,this._firestore);let o;return o=typeof(n=Je(n))=="string"||n instanceof eu?iM(this._dataReader,"WriteBatch.update",i._key,n,r,s):sM(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,un.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=nf(e,this._firestore);return this._mutations=this._mutations.concat(new Dd(n._key,un.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function nf(t,e){if((t=Je(t)).firestore!==e)throw new ce(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f9(t){return Jd(t=Oi(t,Zl)),new pM(t,e=>OT(t,e))}(function(e,n=!0){(function(s){ji=s})(Vs),Ps(new Gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Zl(new n2(r.getProvider("auth-internal")),new i2(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ln(y_,v_,e),Ln(y_,v_,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="firebasestorage.googleapis.com",NT="storageBucket",mM=2*60*1e3,gM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends $n{constructor(e,n,r=0){super(rf(e),`Firebase Storage: ${n} (${rf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function rf(t){return"storage/"+t}function ip(){const t="An unknown error occurred, please check the error payload for server response.";return new et(Ze.UNKNOWN,t)}function _M(t){return new et(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yM(t){return new et(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(Ze.UNAUTHENTICATED,t)}function EM(){return new et(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function wM(t){return new et(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function bM(){return new et(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TM(){return new et(Ze.CANCELED,"User canceled the upload/download.")}function IM(t){return new et(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function AM(t){return new et(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RM(){return new et(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+NT+"' property when initializing the app?")}function SM(){return new et(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PM(){return new et(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CM(t){return new et(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _h(t){return new et(Ze.INVALID_ARGUMENT,t)}function DT(){return new et(Ze.APP_DELETED,"The Firebase app was deleted.")}function kM(t){return new et(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function No(t,e){return new et(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function co(t){throw new et(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw AM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${f}/b/${s}/o${p}`,"i"),E={bucket:1,path:3},b=n===xT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",S=new RegExp(`^https?://${b}/${s}/${k}`,"i"),_=[{regex:a,indices:l,postModify:i},{regex:g,indices:E,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<_.length;R++){const D=_[R],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let v=M[D.indices.path];v||(v=""),r=new Jt(T,v),D.postModify(r);break}}if(r==null)throw IM(e);return r}}class OM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function d(k){s=setTimeout(()=>{s=null,t(g,l())},k)}function p(){i&&clearTimeout(i)}function g(k,...S){if(u){p();return}if(k){p(),f.call(null,k,...S);return}if(l()||o){p(),f.call(null,k,...S);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let E=!1;function b(k){E||(E=!0,p(),!u&&(s!==null?(k||(a=2),clearTimeout(s),d(0)):k||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function NM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t){return t!==void 0}function LM(t){return typeof t=="object"&&!Array.isArray(t)}function op(t){return typeof t=="string"||t instanceof String}function dy(t){return ap()&&t instanceof Blob}function ap(){return typeof Blob<"u"}function py(t,e,n,r){if(r<e)throw _h(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _h(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function LT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function MM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n,r,s,i,o,a,l,u,f,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,E)=>{this.resolve_=g,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ac(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===As.NO_ERROR,l=i.getStatus();if(!a||MM(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===As.ABORT;r(!1,new ac(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ac(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());DM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=ip();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?DT():TM();o(l)}else{const l=bM();o(l)}};this.canceled_?n(!1,new ac(!1,null,!0)):this.backoffId_=xM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $M(t,e,n,r,s,i,o=!0){const a=LT(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return jM(u,e),FM(u,n),UM(u,i),BM(u,r),new VM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zM(...t){const e=HM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ap())return new Blob(t);throw new et(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function WM(t){if(typeof atob>"u")throw CM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sf{constructor(e,n){this.data=e,this.contentType=n||null}}function KM(t,e){switch(t){case kn.RAW:return new sf(MT(e));case kn.BASE64:case kn.BASE64URL:return new sf(VT(t,e));case kn.DATA_URL:return new sf(QM(e),YM(e))}throw ip()}function MT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function GM(t){let e;try{e=decodeURIComponent(t)}catch{throw No(kn.DATA_URL,"Malformed data URL.")}return MT(e)}function VT(t,e){switch(t){case kn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw No(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case kn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw No(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=WM(e)}catch(s){throw s.message.includes("polyfill")?s:No(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class FT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw No(kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=XM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function QM(t){const e=new FT(t);return e.base64?VT(kn.BASE64,e.rest):GM(e.rest)}function YM(t){return new FT(t).contentType}function XM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){let r=0,s="";dy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(dy(this.data_)){const r=this.data_,s=qM(r,e,n);return s===null?null:new Mr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mr(r,!0)}}static getBlob(...e){if(ap()){const n=e.map(r=>r instanceof Mr?r.data_:r);return new Mr(zM.apply(null,n))}else{const n=e.map(o=>op(o)?KM(kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Mr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t){let e;try{e=JSON.parse(t)}catch{return null}return LM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t,e){return e}class Ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||eV}}let cc=null;function tV(t){return!op(t)||t.length<2?t:jT(t)}function BT(){if(cc)return cc;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(i,o){return tV(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ft("size");return s.xform=r,t.push(s),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),cc=t,cc}function nV(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function rV(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return nV(r,t),r}function $T(t,e,n){const r=UT(e);return r===null?null:rV(t,r,n)}function sV(t,e,n,r){const s=UT(e);if(s===null||!op(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,d=t.fullPath,p="/b/"+o(f)+"/o/"+o(d),g=cp(p,n,r),E=LT({alt:"media",token:u});return g+E})[0]}function iV(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class HT{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){if(!t)throw ip()}function oV(t,e){function n(r,s){const i=$T(t,s,e);return zT(i!==null),i}return n}function aV(t,e){function n(r,s){const i=$T(t,s,e);return zT(i!==null),sV(i,s,t.host,t._protocol)}return n}function qT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=EM():s=vM():n.getStatus()===402?s=yM(t.bucket):n.getStatus()===403?s=wM(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function cV(t){const e=qT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=_M(t.path)),i.serverResponse=s.serverResponse,i}return n}function lV(t,e,n){const r=e.fullServerUrl(),s=cp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new HT(s,i,aV(t,n),o);return a.errorHandler=cV(e),a}function uV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function fV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=uV(null,e)),r}function hV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let R=0;R<2;R++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=fV(e,r,s),f=iV(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Mr.getBlob(d,r,p);if(g===null)throw SM();const E={name:u.fullPath},b=cp(i,t.host,t._protocol),k="POST",S=t.maxUploadRetryTime,P=new HT(b,k,oV(t,n),S);return P.urlParams=E,P.headers=o,P.body=g.uploadData(),P.errorHandler=qT(e),P}class dV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw co("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw co("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw co("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw co("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw co("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pV extends dV{initXhr(){this.xhr_.responseType="text"}}function WT(){return new pV}/**
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
 */class xs{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xs(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jT(this._location.path)}get storage(){return this._service}get parent(){const e=JM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kM(e)}}function mV(t,e,n){t._throwIfRoot("uploadBytes");const r=hV(t.storage,t._location,BT(),new Mr(e,!0),n);return t.storage.makeRequestWithTokens(r,WT).then(s=>({metadata:s,ref:t}))}function gV(t){t._throwIfRoot("getDownloadURL");const e=lV(t.storage,t._location,BT());return t.storage.makeRequestWithTokens(e,WT).then(n=>{if(n===null)throw PM();return n})}function _V(t,e){const n=ZM(t._location.path,e),r=new Jt(t._location.bucket,n);return new xs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t){return/^[A-Za-z]+:\/\//.test(t)}function vV(t,e){return new xs(t,e)}function KT(t,e){if(t instanceof lp){const n=t;if(n._bucket==null)throw RM();const r=new xs(n,n._bucket);return e!=null?KT(r,e):r}else return e!==void 0?_V(t,e):t}function EV(t,e){if(e&&yV(e)){if(t instanceof lp)return vV(t,e);throw _h("To use ref(service, url), the first argument must be a Storage instance.")}else return KT(t,e)}function my(t,e){const n=e==null?void 0:e[NT];return n==null?null:Jt.makeFromBucketSpec(n,t)}function wV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:_w(s,t.app.options.projectId))}class lp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=xT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mM,this._maxUploadRetryTime=gM,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=my(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=my(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new OM(DT());{const o=$M(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const gy="@firebase/storage",_y="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="storage";function h9(t,e,n){return t=Je(t),mV(t,e,n)}function d9(t){return t=Je(t),gV(t)}function p9(t,e){return t=Je(t),EV(t,e)}function bV(t=_d(),e){t=Je(t);const r=Dl(t,GT).getImmediate({identifier:e}),s=pw("storage");return s&&TV(r,...s),r}function TV(t,e,n,r={}){wV(t,e,n,r)}function IV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new lp(n,r,s,e,Vs)}function AV(){Ps(new Gr(GT,IV,"PUBLIC").setMultipleInstances(!0)),Ln(gy,_y,""),Ln(gy,_y,"esm2017")}AV();const RV=Zt(t=>{const e=Ms(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Ew(n),s=LN(r),i=ZL(r),o=bV(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function SV(t,e,n){return(e=CV(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yy(Object(n),!0).forEach(function(r){SV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function PV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function CV(t){var e=PV(t,"string");return typeof e=="symbol"?e:e+""}const vy=()=>{};let up={},QT={},YT=null,XT={mark:vy,measure:vy};try{typeof window<"u"&&(up=window),typeof document<"u"&&(QT=document),typeof MutationObserver<"u"&&(YT=MutationObserver),typeof performance<"u"&&(XT=performance)}catch{}const{userAgent:Ey=""}=up.navigator||{},ts=up,$e=QT,wy=YT,lc=XT;ts.document;const mr=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",JT=~Ey.indexOf("MSIE")||~Ey.indexOf("Trident/");var kV=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,OV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ZT={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},xV={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},e0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Lt="classic",ru="duotone",NV="sharp",DV="sharp-duotone",t0=[Lt,ru,NV,DV],LV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},MV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},VV=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),FV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},UV=["fak","fa-kit","fakd","fa-kit-duotone"],by={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},jV=["kit"],BV={kit:{"fa-kit":"fak"}},$V=["fak","fakd"],HV={kit:{fak:"fa-kit"}},Ty={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},uc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zV=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],qV=["fak","fa-kit","fakd","fa-kit-duotone"],WV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},KV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},GV={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},yh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},QV=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],vh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...zV,...QV],YV=["solid","regular","light","thin","duotone","brands"],n0=[1,2,3,4,5,6,7,8,9,10],XV=n0.concat([11,12,13,14,15,16,17,18,19,20]),JV=[...Object.keys(GV),...YV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",uc.GROUP,uc.SWAP_OPACITY,uc.PRIMARY,uc.SECONDARY].concat(n0.map(t=>"".concat(t,"x"))).concat(XV.map(t=>"w-".concat(t))),ZV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const lr="___FONT_AWESOME___",Eh=16,r0="fa",s0="svg-inline--fa",Ns="data-fa-i2svg",wh="data-fa-pseudo-element",e4="data-fa-pseudo-element-pending",fp="data-prefix",hp="data-icon",Iy="fontawesome-i2svg",t4="async",n4=["HTML","HEAD","STYLE","SCRIPT"],i0=(()=>{try{return!0}catch{return!1}})();function Aa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Lt]}})}const o0=W({},ZT);o0[Lt]=W(W(W(W({},{"fa-duotone":"duotone"}),ZT[Lt]),by.kit),by["kit-duotone"]);const r4=Aa(o0),bh=W({},FV);bh[Lt]=W(W(W(W({},{duotone:"fad"}),bh[Lt]),Ty.kit),Ty["kit-duotone"]);const Ay=Aa(bh),Th=W({},yh);Th[Lt]=W(W({},Th[Lt]),HV.kit);const dp=Aa(Th),Ih=W({},KV);Ih[Lt]=W(W({},Ih[Lt]),BV.kit);Aa(Ih);const s4=kV,a0="fa-layers-text",i4=OV,o4=W({},LV);Aa(o4);const a4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],of=xV,c4=[...jV,...JV],Do=ts.FontAwesomeConfig||{};function l4(t){var e=$e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function u4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$e&&typeof $e.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=u4(l4(n));s!=null&&(Do[r]=s)});const c0={styleDefault:"solid",familyDefault:Lt,cssPrefix:r0,replacementClass:s0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Do.familyPrefix&&(Do.cssPrefix=Do.familyPrefix);const Ni=W(W({},c0),Do);Ni.autoReplaceSvg||(Ni.observeMutations=!1);const ae={};Object.keys(c0).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){Ni[t]=e,Lo.forEach(n=>n(ae))},get:function(){return Ni[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){Ni.cssPrefix=t,Lo.forEach(e=>e(ae))},get:function(){return Ni.cssPrefix}});ts.FontAwesomeConfig=ae;const Lo=[];function f4(t){return Lo.push(t),()=>{Lo.splice(Lo.indexOf(t),1)}}const Tr=Eh,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function h4(t){if(!t||!mr)return;const e=$e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$e.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $e.head.insertBefore(e,r),t}const d4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ia(){let t=12,e="";for(;t-- >0;)e+=d4[Math.random()*62|0];return e}function zi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pp(t){return t.classList?zi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function l0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p4(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(l0(t[n]),'" '),"").trim()}function su(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function mp(t){return t.size!==On.size||t.x!==On.x||t.y!==On.y||t.rotate!==On.rotate||t.flipX||t.flipY}function m4(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function g4(t){let{transform:e,width:n=Eh,height:r=Eh,startCentered:s=!1}=t,i="";return s&&JT?i+="translate(".concat(e.x/Tr-n/2,"em, ").concat(e.y/Tr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Tr,"em), calc(-50% + ").concat(e.y/Tr,"em)) "):i+="translate(".concat(e.x/Tr,"em, ").concat(e.y/Tr,"em) "),i+="scale(".concat(e.size/Tr*(e.flipX?-1:1),", ").concat(e.size/Tr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var _4=`:root, :host {
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
}`;function u0(){const t=r0,e=s0,n=ae.cssPrefix,r=ae.replacementClass;let s=_4;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let Ry=!1;function af(){ae.autoAddCss&&!Ry&&(h4(u0()),Ry=!0)}var y4={mixout(){return{dom:{css:u0,insertCss:af}}},hooks(){return{beforeDOMElementCreation(){af()},beforeI2svg(){af()}}}};const ur=ts||{};ur[lr]||(ur[lr]={});ur[lr].styles||(ur[lr].styles={});ur[lr].hooks||(ur[lr].hooks={});ur[lr].shims||(ur[lr].shims=[]);var xn=ur[lr];const f0=[],h0=function(){$e.removeEventListener("DOMContentLoaded",h0),fl=1,f0.map(t=>t())};let fl=!1;mr&&(fl=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),fl||$e.addEventListener("DOMContentLoaded",h0));function v4(t){mr&&(fl?setTimeout(t,0):f0.push(t))}function Ra(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?l0(t):"<".concat(e," ").concat(p4(n),">").concat(r.map(Ra).join(""),"</").concat(e,">")}function Sy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var cf=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,f;for(r===void 0?(l=1,f=e[i[0]]):(l=0,f=r);l<o;l++)u=i[l],f=a(f,e[u],u,e);return f};function E4(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ah(t){const e=E4(t);return e.length===1?e[0].toString(16):null}function w4(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Py(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Py(e);typeof xn.hooks.addPack=="function"&&!r?xn.hooks.addPack(t,Py(e)):xn.styles[t]=W(W({},xn.styles[t]||{}),s),t==="fas"&&Rh("fa",e)}const{styles:oa,shims:b4}=xn,d0=Object.keys(dp),T4=d0.reduce((t,e)=>(t[e]=Object.keys(dp[e]),t),{});let gp=null,p0={},m0={},g0={},_0={},y0={};function I4(t){return~c4.indexOf(t)}function A4(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!I4(s)?s:null}const v0=()=>{const t=r=>cf(oa,(s,i,o)=>(s[o]=cf(i,r,{}),s),{});p0=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),m0=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),y0=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in oa||ae.autoFetchSvg,n=cf(b4,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});g0=n.names,_0=n.unicodes,gp=iu(ae.styleDefault,{family:ae.familyDefault})};f4(t=>{gp=iu(t.styleDefault,{family:ae.familyDefault})});v0();function _p(t,e){return(p0[t]||{})[e]}function R4(t,e){return(m0[t]||{})[e]}function Es(t,e){return(y0[t]||{})[e]}function E0(t){return g0[t]||{prefix:null,iconName:null}}function S4(t){const e=_0[t],n=_p("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ns(){return gp}const w0=()=>({prefix:null,iconName:null,rest:[]});function P4(t){let e=Lt;const n=d0.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return t0.forEach(r=>{(t.includes(n[r])||t.some(s=>T4[r].includes(s)))&&(e=r)}),e}function iu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Lt}=e,r=r4[n][t];if(n===ru&&!t)return"fad";const s=Ay[n][t]||Ay[n][r],i=t in xn.styles?t:null;return s||i||null}function C4(t){let e=[],n=null;return t.forEach(r=>{const s=A4(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Cy(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function ou(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=vh.concat(qV),i=Cy(t.filter(d=>s.includes(d))),o=Cy(t.filter(d=>!vh.includes(d))),a=i.filter(d=>(r=d,!e0.includes(d))),[l=null]=a,u=P4(i),f=W(W({},C4(o)),{},{prefix:iu(l,{family:u})});return W(W(W({},f),N4({values:t,family:u,styles:oa,config:ae,canonical:f,givenPrefix:r})),k4(n,r,f))}function k4(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?E0(s):{},o=Es(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!oa.far&&oa.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const O4=t0.filter(t=>t!==Lt||t!==ru),x4=Object.keys(yh).filter(t=>t!==Lt).map(t=>Object.keys(yh[t])).flat();function N4(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===ru,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&O4.includes(n)&&(Object.keys(i).find(p=>x4.includes(p))||o.autoFetchSvg)){const p=VV.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=Es(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ns()||"fas"),r}class D4{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),Rh(i,s[i]);const o=dp[Lt][i];o&&Rh(o,s[i]),v0()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let ky=[],si={};const gi={},L4=Object.keys(gi);function M4(t,e){let{mixoutsTo:n}=e;return ky=t,si={},Object.keys(gi).forEach(r=>{L4.indexOf(r)===-1&&delete gi[r]}),ky.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{si[o]||(si[o]=[]),si[o].push(i[o])})}r.provides&&r.provides(gi)}),n}function Sh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(si[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ds(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(si[t]||[]).forEach(i=>{i.apply(null,n)})}function rs(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gi[t]?gi[t].apply(null,e):void 0}function Ph(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ns();if(e)return e=Es(n,e)||e,Sy(b0.definitions,n,e)||Sy(xn.styles,n,e)}const b0=new D4,V4=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,Ds("noAuto")},F4={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(Ds("beforeI2svg",t),rs("pseudoElements2svg",t),rs("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,v4(()=>{j4({autoReplaceSvgRoot:e}),Ds("watch",t)})}},U4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Es(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=iu(t[0]);return{prefix:n,iconName:Es(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(s4))){const e=ou(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ns(),iconName:Es(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ns();return{prefix:e,iconName:Es(e,t)||t}}}},en={noAuto:V4,config:ae,dom:F4,parse:U4,library:b0,findIconDefinition:Ph,toHtml:Ra},j4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$e}=t;(Object.keys(xn.styles).length>0||ae.autoFetchSvg)&&mr&&ae.autoReplaceSvg&&en.dom.i2svg({node:e})};function au(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ra(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=$e.createElement("div");return n.innerHTML=t.html,n.children}}),t}function B4(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(mp(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=su(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function $4(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function yp(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:f,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,E=$V.includes(r),b=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>f.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(f.classes).join(" ");let k={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const S=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(k.attributes[Ns]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||ia())},children:[a]}),delete k.attributes.title);const P=W(W({},k),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:W(W({},S),f.styles)}),{children:_,attributes:R}=n.found&&e.found?rs("generateAbstractMask",P)||{children:[],attributes:{}}:rs("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=_,P.attributes=R,o?$4(P):B4(P)}function Oy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Ns]="");const u=W({},o.styles);mp(s)&&(u.transform=g4({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=su(u);f.length>0&&(l.style=f);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function H4(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=su(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:lf}=xn;function Ch(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(of.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(of.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(of.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const z4={found:!1,width:512,height:512};function q4(t,e){!i0&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function kh(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=ns()),new Promise((r,s)=>{if(n==="fa"){const i=E0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&lf[e]&&lf[e][t]){const i=lf[e][t];return r(Ch(i))}q4(t,e),r(W(W({},z4),{},{icon:ae.showMissingIcons&&t?rs("missingIconAbstract")||{}:{}}))})}const xy=()=>{},Oh=ae.measurePerformance&&lc&&lc.mark&&lc.measure?lc:{mark:xy,measure:xy},_o='FA "6.7.2"',W4=t=>(Oh.mark("".concat(_o," ").concat(t," begins")),()=>T0(t)),T0=t=>{Oh.mark("".concat(_o," ").concat(t," ends")),Oh.measure("".concat(_o," ").concat(t),"".concat(_o," ").concat(t," begins"),"".concat(_o," ").concat(t," ends"))};var vp={begin:W4,end:T0};const Rc=()=>{};function Ny(t){return typeof(t.getAttribute?t.getAttribute(Ns):null)=="string"}function K4(t){const e=t.getAttribute?t.getAttribute(fp):null,n=t.getAttribute?t.getAttribute(hp):null;return e&&n}function G4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function Q4(){return ae.autoReplaceSvg===!0?Sc.replace:Sc[ae.autoReplaceSvg]||Sc.replace}function Y4(t){return $e.createElementNS("http://www.w3.org/2000/svg",t)}function X4(t){return $e.createElement(t)}function I0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Y4:X4}=e;if(typeof t=="string")return $e.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(I0(i,{ceFn:n}))}),r}function J4(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Sc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(I0(n),e)}),e.getAttribute(Ns)===null&&ae.keepOriginalSource){let n=$e.createComment(J4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~pp(e).indexOf(ae.replacementClass))return Sc.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Ra(i)).join(`
`);e.setAttribute(Ns,""),e.innerHTML=s}};function Dy(t){t()}function A0(t,e){const n=typeof e=="function"?e:Rc;if(t.length===0)n();else{let r=Dy;ae.mutateApproach===t4&&(r=ts.requestAnimationFrame||Dy),r(()=>{const s=Q4(),i=vp.begin("mutate");t.map(s),i(),n()})}}let Ep=!1;function R0(){Ep=!0}function xh(){Ep=!1}let hl=null;function Ly(t){if(!wy||!ae.observeMutations)return;const{treeCallback:e=Rc,nodeCallback:n=Rc,pseudoElementsCallback:r=Rc,observeMutationsRoot:s=$e}=t;hl=new wy(i=>{if(Ep)return;const o=ns();zi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ny(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ny(a.target)&&~a4.indexOf(a.attributeName))if(a.attributeName==="class"&&K4(a.target)){const{prefix:l,iconName:u}=ou(pp(a.target));a.target.setAttribute(fp,l||o),u&&a.target.setAttribute(hp,u)}else G4(a.target)&&n(a.target)})}),mr&&hl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Z4(){hl&&hl.disconnect()}function eF(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function tF(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=ou(pp(t));return s.prefix||(s.prefix=ns()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=R4(s.prefix,t.innerText)||_p(s.prefix,Ah(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function nF(t){const e=zi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||ia()):(e["aria-hidden"]="true",e.focusable="false")),e}function rF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function My(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=tF(t),i=nF(t),o=Sh("parseNodeAttributes",{},t);let a=e.styleParser?eF(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:sF}=xn;function S0(t){const e=ae.autoReplaceSvg==="nest"?My(t,{styleParser:!1}):My(t);return~e.extra.classes.indexOf(a0)?rs("generateLayersText",t,e):rs("generateSvgReplacementMutation",t,e)}function iF(){return[...UV,...vh]}function Vy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=$e.documentElement.classList,r=f=>n.add("".concat(Iy,"-").concat(f)),s=f=>n.remove("".concat(Iy,"-").concat(f)),i=ae.autoFetchSvg?iF():e0.concat(Object.keys(sF));i.includes("fa")||i.push("fa");const o=[".".concat(a0,":not([").concat(Ns,"])")].concat(i.map(f=>".".concat(f,":not([").concat(Ns,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=zi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=vp.begin("onTree"),u=a.reduce((f,d)=>{try{const p=S0(d);p&&f.push(p)}catch(p){i0||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,d)=>{Promise.all(u).then(p=>{A0(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),f()})}).catch(p=>{l(),d(p)})})}function oF(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;S0(t).then(n=>{n&&A0([n],e)})}function aF(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ph(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Ph(s||{})),t(r,W(W({},n),{},{mask:s}))}}const cF=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return au(W({type:"icon"},t),()=>(Ds("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||ia()):(u["aria-hidden"]="true",u.focusable="false")),yp({icons:{main:Ch(g),mask:s?Ch(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:W(W({},On),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:f,classes:l}})))};var lF={mixout(){return{icon:aF(cF)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Vy,t.nodeCallback=oF,t}}},provides(t){t.i2svg=function(e){const{node:n=$e,callback:r=()=>{}}=e;return Vy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:f,extra:d}=n;return new Promise((p,g)=>{Promise.all([kh(r,o),u.iconName?kh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[b,k]=E;p([e,yp({icons:{main:b,mask:k},prefix:o,iconName:r,transform:a,symbol:l,maskId:f,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=su(o);a.length>0&&(r.style=a);let l;return mp(i)&&(l=rs("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},uF={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return au({type:"layer"},()=>{Ds("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},fF={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return au({type:"counter",content:t},()=>(Ds("beforeDOMElementCreation",{content:t,params:e}),H4({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},hF={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return au({type:"text",content:t},()=>(Ds("beforeDOMElementCreation",{content:t,params:e}),Oy({content:t,transform:W(W({},On),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(JT){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Oy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const dF=new RegExp('"',"ug"),Fy=[1105920,1112319],Uy=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),MV),ZV),WV),Nh=Object.keys(Uy).reduce((t,e)=>(t[e.toLowerCase()]=Uy[e],t),{}),pF=Object.keys(Nh).reduce((t,e)=>{const n=Nh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function mF(t){const e=t.replace(dF,""),n=w4(e,0),r=n>=Fy[0]&&n<=Fy[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ah(s?e[0]:e),isSecondary:r||s}}function gF(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Nh[n]||{})[s]||pF[n]}function jy(t,e){const n="".concat(e4).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=zi(t.children).filter(p=>p.getAttribute(wh)===e)[0],a=ts.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(i4),f=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=gF(l,f);const{value:E,isSecondary:b}=mF(p),k=u[0].startsWith("FontAwesome");let S=_p(g,E),P=S;if(k){const _=S4(E);_.iconName&&_.prefix&&(S=_.iconName,g=_.prefix)}if(S&&!b&&(!o||o.getAttribute(fp)!==g||o.getAttribute(hp)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);const _=rF(),{extra:R}=_;R.attributes[wh]=e,kh(S,g).then(D=>{const M=yp(W(W({},_),{},{icons:{main:D,mask:w0()},prefix:g,iconName:P,extra:R,watchable:!0})),T=$e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=M.map(v=>Ra(v)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function _F(t){return Promise.all([jy(t,"::before"),jy(t,"::after")])}function yF(t){return t.parentNode!==document.head&&!~n4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function By(t){if(mr)return new Promise((e,n)=>{const r=zi(t.querySelectorAll("*")).filter(yF).map(_F),s=vp.begin("searchPseudoElements");R0(),Promise.all(r).then(()=>{s(),xh(),e()}).catch(()=>{s(),xh(),n()})})}var vF={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=By,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$e}=e;ae.searchPseudoElements&&By(n)}}};let $y=!1;var EF={mixout(){return{dom:{unwatch(){R0(),$y=!0}}}},hooks(){return{bootstrap(){Ly(Sh("mutationObserverCallbacks",{}))},noAuto(){Z4()},watch(t){const{observeMutationsRoot:e}=t;$y?xh():Ly(Sh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Hy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var wF={mixout(){return{parse:{transform:t=>Hy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Hy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:W({},p.outer),children:[{tag:"g",attributes:W({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),p.path)}]}]}}}};const uf={x:0,y:0,width:"100%",height:"100%"};function zy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function bF(t){return t.tag==="g"?t.children:[t]}var TF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ou(n.split(" ").map(s=>s.trim())):w0();return r.prefix||(r.prefix=ns()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:f,icon:d}=i,p=m4({transform:a,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:W(W({},uf),{},{fill:"white"})},E=u.children?{children:u.children.map(zy)}:{},b={tag:"g",attributes:W({},p.inner),children:[zy(W({tag:u.tag,attributes:W(W({},u.attributes),p.path)},E))]},k={tag:"g",attributes:W({},p.outer),children:[b]},S="mask-".concat(o||ia()),P="clip-".concat(o||ia()),_={tag:"mask",attributes:W(W({},uf),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,k]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:bF(d)},_]};return n.push(R,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},uf)}),{children:n,attributes:r}}}},IF={provides(t){let e=!1;ts.matchMedia&&(e=ts.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},AF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},RF=[y4,lF,uF,fF,hF,vF,EF,wF,TF,IF,AF];M4(RF,{mixoutsTo:en});en.noAuto;const SF=en.config,PF=en.library;en.dom;const Dh=en.parse;en.findIconDefinition;en.toHtml;const CF=en.icon;en.layer;en.text;en.counter;function qy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Jn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qy(Object(n),!0).forEach(function(r){zt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function OF(t){var e=kF(t,"string");return typeof e=="symbol"?e:e+""}function dl(t){"@babel/helpers - typeof";return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dl(t)}function zt(t,e,n){return e=OF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function NF(t,e){if(t==null)return{};var n=xF(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var DF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P0={exports:{}};(function(t){(function(e){var n=function(S,P,_){if(!u(P)||d(P)||p(P)||g(P)||l(P))return P;var R,D=0,M=0;if(f(P))for(R=[],M=P.length;D<M;D++)R.push(n(S,P[D],_));else{R={};for(var T in P)Object.prototype.hasOwnProperty.call(P,T)&&(R[S(T,_)]=n(S,P[T],_))}return R},r=function(S,P){P=P||{};var _=P.separator||"_",R=P.split||/(?=[A-Z])/;return S.split(R).join(_)},s=function(S){return E(S)?S:(S=S.replace(/[\-_\s]+(.)?/g,function(P,_){return _?_.toUpperCase():""}),S.substr(0,1).toLowerCase()+S.substr(1))},i=function(S){var P=s(S);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(S,P){return r(S,P).toLowerCase()},a=Object.prototype.toString,l=function(S){return typeof S=="function"},u=function(S){return S===Object(S)},f=function(S){return a.call(S)=="[object Array]"},d=function(S){return a.call(S)=="[object Date]"},p=function(S){return a.call(S)=="[object RegExp]"},g=function(S){return a.call(S)=="[object Boolean]"},E=function(S){return S=S-0,S===S},b=function(S,P){var _=P&&"process"in P?P.process:P;return typeof _!="function"?S:function(R,D){return _(R,S,D)}},k={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(S,P){return n(b(s,P),S)},decamelizeKeys:function(S,P){return n(b(o,P),S,P)},pascalizeKeys:function(S,P){return n(b(i,P),S)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(DF)})(P0);var LF=P0.exports,MF=["class","style"];function VF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=LF.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function FF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function C0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return C0(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.class=FF(f);break;case"style":l.style=VF(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=NF(n,MF);return ct(t.tag,Jn(Jn(Jn({},e),{},{class:s.class,style:Jn(Jn({},s.style),o)},s.attrs),a),r)}var k0=!1;try{k0=!0}catch{}function UF(){if(!k0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ff(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?zt({},t,e):{}}function jF(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},zt(zt(zt(zt(zt(zt(zt(zt(zt(zt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),zt(zt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Wy(t){if(t&&dl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Dh.icon)return Dh.icon(t);if(t===null)return null;if(dl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var BF=In({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return Wy(e.icon)}),i=Fe(function(){return ff("classes",jF(e))}),o=Fe(function(){return ff("transform",typeof e.transform=="string"?Dh.transform(e.transform):e.transform)}),a=Fe(function(){return ff("mask",Wy(e.mask))}),l=Fe(function(){return CF(s.value,Jn(Jn(Jn(Jn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Dn(l,function(f){if(!f)return UF("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Fe(function(){return l.value?C0(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const $F={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const HF={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},zF=HF,qF={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},WF={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},KF={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};SF.autoAddCss=!1;PF.add($F,WF,zF,KF,qF);const GF=Zt(t=>{t.vueApp.component("font-awesome-icon",BF)});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let O0;const cu=t=>O0=t,x0=Symbol();function Lh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Mo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Mo||(Mo={}));function QF(){const t=Hh(!0),e=t.run(()=>Nt({}));let n=[],r=[];const s=Yh({install(i){cu(s),s._a=i,i.provide(x0,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const N0=()=>{};function Ky(t,e,n,r=N0){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ua()&&Cc(s),s}function Qs(t,...e){t.slice().forEach(n=>{n(...e)})}const YF=t=>t(),Gy=Symbol(),hf=Symbol();function Mh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Lh(s)&&Lh(r)&&t.hasOwnProperty(n)&&!Qe(r)&&!nr(r)?t[n]=Mh(s,r):t[n]=r}return t}const XF=Symbol();function JF(t){return!Lh(t)||!t.hasOwnProperty(XF)}const{assign:Ir}=Object;function ZF(t){return!!(Qe(t)&&t.effect)}function eU(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const f=qI(n.state.value[t]);return Ir(f,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Yh(Fe(()=>{cu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=D0(t,u,e,n,r,!0),l}function D0(t,e,n={},r,s,i){let o;const a=Ir({actions:{}},n),l={deep:!0};let u,f,d=[],p=[],g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Nt({});let b;function k(v){let y;u=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:Mo.patchFunction,storeId:t,events:g}):(Mh(r.state.value[t],v),y={type:Mo.patchObject,payload:v,storeId:t,events:g});const I=b=Symbol();hr().then(()=>{b===I&&(u=!0)}),f=!0,Qs(d,y,r.state.value[t])}const S=i?function(){const{state:y}=n,I=y?y():{};this.$patch(x=>{Ir(x,I)})}:N0;function P(){o.stop(),d=[],p=[],r._s.delete(t)}const _=(v,y="")=>{if(Gy in v)return v[hf]=y,v;const I=function(){cu(r);const x=Array.from(arguments),O=[],A=[];function ge(se){O.push(se)}function Ee(se){A.push(se)}Qs(p,{args:x,name:I[hf],store:D,after:ge,onError:Ee});let Z;try{Z=v.apply(this&&this.$id===t?this:D,x)}catch(se){throw Qs(A,se),se}return Z instanceof Promise?Z.then(se=>(Qs(O,se),se)).catch(se=>(Qs(A,se),Promise.reject(se))):(Qs(O,Z),Z)};return I[Gy]=!0,I[hf]=y,I},R={_p:r,$id:t,$onAction:Ky.bind(null,p),$patch:k,$reset:S,$subscribe(v,y={}){const I=Ky(d,v,y.detached,()=>x()),x=o.run(()=>Dn(()=>r.state.value[t],O=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:Mo.direct,events:g},O)},Ir({},l,y)));return I},$dispose:P},D=fr(R);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||YF)(()=>r._e.run(()=>(o=Hh()).run(()=>e({action:_}))));for(const v in T){const y=T[v];if(Qe(y)&&!ZF(y)||nr(y))i||(E&&JF(y)&&(Qe(y)?y.value=E[v]:Mh(y,E[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const I=_(y,v);T[v]=I,a.actions[v]=y}}return Ir(D,T),Ir(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:v=>{k(y=>{Ir(y,v)})}}),r._p.forEach(v=>{Ir(D,o.run(()=>v({store:D,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(D.$state,E),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function tU(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=da();return a=a||(u?wt(x0,null):null),a&&cu(a),a=O0,a._s.has(r)||(i?D0(r,e,s,a):eU(r,s,a)),a._s.get(r)}return o.$id=r,o}function nU(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function rU(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const sU=Zt(t=>{const e=QF();t.vueApp.use(e)});var Qy=/^(GTM|G)-[0-9A-Z]+$/;function df(t){if(typeof t!="string"||!Qy.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Qy}).${n}`)}}function yo(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function _i(t,e){let n=document,r=n.createElement("script"),s=u=>{var f;(f=e.onReady)==null||f.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(yo(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function iU(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var oU=class{constructor(t){rn(this,"id");rn(this,"options");rn(this,"scriptElements",[]);rn(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)df(typeof e=="string"?e:e.id);else df(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!iU(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=_i(n,{...this.options}):r=_i(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=_i(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?yo(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&yo(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&yo(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&yo(window,this.options.dataLayerName).push(t)}},_t;function aU(t,e={id:""}){e={trackOnNextTick:!1,...e},_t=new oU(e),t.config.globalProperties.$gtm=_t,_t.isInBrowserContext()&&(e.vueRouter&&cU(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),_t.options.enabled&&_t.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")_i(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),_i(n.id,r)}}):_i(e.id,e))),t.provide("gtm",e)}function cU(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,E;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?_t!=null&&_t.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(_t!=null&&_t.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((E=(g=e.options)==null?void 0:g.history)==null?void 0:E.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?hr(()=>{_t==null||_t.trackView(u,d,f)}):_t==null||_t.trackView(u,d,f)})}function lU(t){return{install:e=>aU(e,t)}}const uU=Zt(t=>{const e=Ms().public,n=zN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(lU({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:pt(),trackOnNextTick:!1}))}),fU=[iC,uC,N1,L1,M1,V1,U1,j1,B1,RV,GF,sU,uU],L0=(t="RouteProvider")=>In({name:t,props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Ts(ma,Zn(s)),()=>ct(e.vnode,{ref:e.vnodeRef})}}),hU=L0(),Yy=new WeakMap,dU=In({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ue(),i=Nt(),o=wt(ma,null);let a;r({pageRef:i});const l=wt(jE,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);pt().beforeEach(p)}t.pageKey&&Dn(()=>t.pageKey,(p,g)=>{p!==g&&s.callHook("page:loading:start")});let d=!1;{const p=pt().beforeResolve(()=>{d=!1});Vi(()=>{p()})}return()=>ct(aw,{name:t.name,route:t.route,...e},{default:p=>{const g=mU(o,p.route,p.Component),E=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!E)return u;f();return}if(u&&l&&!l.isCurrent(p.route))return u;if(g&&o&&(!l||l!=null&&l.isCurrent(o)))return E?u:null;const b=zf(p,t.pageKey),k=gU(o,p.route,p.Component);!s.isHydrating&&a===b&&!k&&(s.callHook("page:loading:end"),d=!0),a=b;const S=!!(t.transition??p.route.meta.pageTransition??Nf),P=S&&pU([t.transition,p.route.meta.pageTransition,Nf,{onAfterLeave:()=>{s.callHook("page:transition:finish",p.Component)}}]),_=t.keepalive??p.route.meta.keepalive??GS;return u=cw(S&&P,y1(_,ct(td,{suspensible:!0,onPending:()=>s.callHook("page:start",p.Component),onResolve:()=>{hr(()=>s.callHook("page:finish",p.Component).then(()=>{if(!d&&!k)return d=!0,s.callHook("page:loading:end")}).finally(f))}},{default:()=>{const R={key:b||void 0,vnode:n.default?_U(n.default,p):p.Component,route:p.route,renderKey:b||void 0,trackRootNodes:S,vnodeRef:i};if(!_)return ct(hU,R);const D=p.Component.type,M=D;let T=Yy.get(M);return T||(T=L0(D.name||D.__name),Yy.set(M,T)),ct(T,R)}}))).default(),u}})}});function pU(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?pd(n.onAfterLeave):void 0}));return FE(...e)}function mU(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&zf({route:e,Component:n})!==zf({route:t,Component:n})}function gU(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function _U(t,e){const n=t(e);return n.length===1?ct(n[0]):ct(Ot,void 0,n)}const yU=In({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>ct(Vr[t.name],t.layoutProps,e.slots)}}),vU={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},EU=In({name:"NuxtLayout",inheritAttrs:!1,props:vU,setup(t,e){const n=Ue(),r=wt(ma),s=r===ad()?d1():r,i=Fe(()=>{let l=rt(t.name)??s.meta.layout??"default";return l&&!(l in Vr)&&t.fallback&&(l=rt(t.fallback)),l}),o=Nt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);pt().beforeEach(l)}return()=>{const l=i.value&&i.value in Vr,u=s.meta.layoutTransition??KS;return cw(l&&u,{default:()=>ct(td,{suspensible:!0,onResolve:()=>{hr(a)}},{default:()=>ct(wU,{layoutProps:gE(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),wU=In({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Ts(jE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Vr)?(s=(r=e.slots).default)==null?void 0:s.call(r):ct(yU,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),lu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bU={};function TU(t,e){const n=dU,r=EU;return $t(),Xn(r,null,{default:Sn(()=>[be(n)]),_:1})}const IU=lu(bU,[["render",TU]]),AU=od("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Xy=tU("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Ue(),r=pt();try{const s=await Ex(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Ue();try{await Ix(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Ue();Tx(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),RU={class:"navbar navbar-expand-md navbar-light bg-light"},SU={class:"navbar-nav"},PU={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},CU={class:"navbar-nav ml-auto"};function kU(t,e,n,r,s,i){const o=YN;return $t(),zo("nav",RU,[be(o,{class:"navbar-brand",to:"/"},{default:Sn(()=>e[2]||(e[2]=[an("Who's Jimmy")])),_:1}),He("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[He("span",{class:"navbar-toggler-icon"},null,-1)])),He("div",{class:ca(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[He("ul",SU,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Sn(()=>e[4]||(e[4]=[an("Bio")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Sn(()=>e[5]||(e[5]=[an("Portfolio ")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Sn(()=>e[6]||(e[6]=[an("For Sale")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Sn(()=>e[7]||(e[7]=[an("Cool Stuff")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Sn(()=>e[8]||(e[8]=[an("Contact Us")])),_:1})])],2),s.isAuth?($t(),zo("div",PU,[He("ul",CU,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Sn(()=>[an($h(t.user?t.user.email:""),1)]),_:1}),He("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):tR("",!0)])}const OU={data(){return{visible:!1,isAuth:!1}},computed:{...nU(Xy,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...rU(Xy,{signOut:"signOut"})}},xU=lu(OU,[["render",kU]]),NU={class:"page-footer font-small bg-light navbar-fixed-bottom"},DU={class:"container"},LU={class:"py-3 pt-3"},MU={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},VU={href:"https://www.facebook.com/whosjimmy"},FU={href:"https://twitter.com/jimmyclaws"},UU={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function jU(t,e){const n=$o("font-awesome-icon");return $t(),zo("footer",NU,[He("div",DU,[He("div",LU,[He("a",MU,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),He("a",VU,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),He("a",FU,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),He("a",UU,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=He("div",{class:"footer-copyright text-center font-small"},[He("div",null,[an("© 2024 Copyright: "),He("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),He("div",null,"Disclaimer: All images are copyright to their respective owners."),He("div",null,[an("A "),He("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),an(" creation.")])],-1))])}const BU={},$U=lu(BU,[["render",jU],["__scopeId","data-v-063d9b19"]]),HU={class:"text-center my-0 page"},zU={class:"body"},qU={components:{appHeader:xU,appFooter:$U},head(){return{title:"Error"}}},WU=In({...qU,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=Ue();mg({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{mg({title:n.public.SITE_TITLE}),$E({redirect:"/"})};return(i,o)=>{var u;const a=$o("app-header"),l=$o("app-footer");return $t(),zo("div",HU,[be(a),He("div",zU,[o[0]||(o[0]=He("img",{src:AU,alt:"Error Image"},null,-1)),He("h2",null,"Error: "+$h((u=t.error)==null?void 0:u.statusCode),1),He("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),be(l)])}}}),KU=lu(WU,[["__scopeId","data-v-a467a495"]]),GU={key:0},Jy={__name:"nuxt-root",setup(t){const e=()=>null,n=Ue(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);pt().beforeEach(l)}const s=!1;Ts(ma,ad()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Pl(),o=!1;$v((l,u,f)=>{if(n.hooks.callHook("vue:error",l,u,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),HE(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Pr(l)),!1});const a=!1;return(l,u)=>($t(),Xn(td,{onResolve:rt(r)},{default:Sn(()=>[rt(o)?($t(),zo("div",GU)):rt(i)?($t(),Xn(rt(KU),{key:1,error:rt(i)},null,8,["error"])):rt(a)?($t(),Xn(rt(e),{key:2,context:rt(a)},null,8,["context"])):rt(s)?($t(),Xn(vA(rt(s)),{key:3})):($t(),Xn(rt(IU),{key:4}))]),_:1},8,["onResolve"]))}};let Zy;{let t;Zy=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?$R(Jy):BR(Jy),s=eP({vueApp:r});async function i(l){var u;await s.callHook("app:error",l),(u=s.payload).error||(u.error=Cl(l))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await rP(s,fU)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(XS),await s.hooks.callHook("app:mounted",r),await hr()}catch(l){i(l)}return r},t=Zy().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{xU as $,Ts as A,nr as B,Kr as C,hr as D,od as E,Sn as F,YN as G,Ot as H,JU as I,e9 as J,r9 as K,bV as L,p9 as M,h9 as N,d9 as O,ZU as P,ca as Q,YU as R,eR as S,gR as T,ma as U,i9 as V,fP as W,zN as X,n9 as Y,$U as Z,lu as _,He as a,dU as a0,tU as a1,Ue as a2,f9 as a3,c9 as a4,u9 as a5,a9 as a6,l9 as a7,an as b,zo as c,rU as d,s9 as e,tR as f,Xn as g,rt as h,be as i,Il as j,Nt as k,pA as l,nU as m,_l as n,$t as o,Dn as p,Qe as q,$o as r,fr as s,$h as t,Xy as u,t9 as v,XU as w,Vi as x,Fe as y,wt as z};
