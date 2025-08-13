const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DH16Knzp.js","./Bio.BaV4dkSc.css","./UAzp_pwr.js","./C_fmO5Dp.js","./index.32WehS37.css","./C7RjiAZp.js","./C9-xOcK1.js","./Gallery.CL3VVAgl.css","./D-RDL6p4.js","./Contact.Bq_tjq4M.css","./D11FW_jc.js","./CtCxhA56.js","./BUqOiRXO.js","./index.ASLudlX-.css","./ZjDetXem.js","./index.EfND0qCY.css","./D0Owwbtu.js","./Clocks.CaZdgkmv.css","./DnksU2aI.js","./Di9MuZaG.js","./Film.DB_E1xEQ.css","./897YflGc.js","./index.SWL0PKs2.css","./CjQW891b.js","./Cuhs51Nd.js","./Clocks.Dmp-oUCd.css","./5sp9u389.js","./Videos.BYXmUAzQ.css","./B9KRc2I-.js","./DTAjPQgn.js","./Z0aTa7MX.js","./Film.CyscwsSS.css","./W2g0u-di.js","./Celebrities.BS01JuXe.css","./OoHYbxlW.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},mi=[],Mn=()=>{},zI=()=>!1,Ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xh=t=>t.startsWith("onUpdate:"),mt=Object.assign,Zh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qI=Object.prototype.hasOwnProperty,Ne=(t,e)=>qI.call(t,e),ce=Array.isArray,gi=t=>Yi(t)==="[object Map]",Gi=t=>Yi(t)==="[object Set]",Sm=t=>Yi(t)==="[object Date]",WI=t=>Yi(t)==="[object RegExp]",pe=t=>typeof t=="function",Ye=t=>typeof t=="string",In=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",ed=t=>(Fe(t)||pe(t))&&pe(t.then)&&pe(t.catch),yv=Object.prototype.toString,Yi=t=>yv.call(t),KI=t=>Yi(t).slice(8,-1),_v=t=>Yi(t)==="[object Object]",td=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=Jh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},GI=/-(\w)/g,pn=Cc(t=>t.replace(GI,(e,n)=>n?n.toUpperCase():"")),YI=/\B([A-Z])/g,Hs=Cc(t=>t.replace(YI,"-$1").toLowerCase()),Pc=Cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mu=Cc(t=>t?`on${Pc(t)}`:""),Wr=(t,e)=>!Object.is(t,e),_i=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Of=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Hl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vv=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let Rm;const kc=()=>Rm||(Rm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?ZI(r):Oc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Fe(t))return t}const QI=/;(?![^(]*\))/g,JI=/:([^]+)/,XI=/\/\*[^]*?\*\//g;function ZI(t){const e={};return t.replace(XI,"").split(QI).forEach(n=>{if(n){const r=n.split(JI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ba(t){let e="";if(Ye(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=ba(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function q9(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ye(e)&&(t.class=ba(e)),n&&(t.style=Oc(n)),t}const eA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tA=Jh(eA);function Ev(t){return!!t||t===""}function nA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=wa(t[r],e[r]);return n}function wa(t,e){if(t===e)return!0;let n=Sm(t),r=Sm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=In(t),r=In(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?nA(t,e):!1;if(n=Fe(t),r=Fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!wa(t[o],e[o]))return!1}}return String(t)===String(e)}function nd(t,e){return t.findIndex(n=>wa(n,e))}const bv=t=>!!(t&&t.__v_isRef===!0),rd=t=>Ye(t)?t:t==null?"":ce(t)||Fe(t)&&(t.toString===yv||!pe(t.toString))?bv(t)?rd(t.value):JSON.stringify(t,wv,2):String(t),wv=(t,e)=>bv(e)?wv(t,e.value):gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Vu(r,i)+" =>"]=s,n),{})}:Gi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Vu(n))}:In(e)?Vu(e):Fe(e)&&!ce(e)&&!_v(e)?String(e):e,Vu=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class Tv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){++this._on===1&&(this.prevScope=xt,xt=this)}off(){this._on>0&&--this._on===0&&(xt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sd(t){return new Tv(t)}function Qi(){return xt}function Xo(t,e=!1){xt&&xt.cleanups.push(t)}let He;const Fu=new WeakSet;class Iv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fu.has(this)&&(Fu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cm(this),Rv(this);const e=He,n=Tn;He=this,Tn=!0;try{return this.fn()}finally{Cv(this),He=e,Tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ad(e);this.deps=this.depsTail=void 0,Cm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xf(this)&&this.run()}get dirty(){return xf(this)}}let Av=0,Do,Lo;function Sv(t,e=!1){if(t.flags|=8,e){t.next=Lo,Lo=t;return}t.next=Do,Do=t}function id(){Av++}function od(){if(--Av>0)return;if(Lo){let e=Lo;for(Lo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Do;){let e=Do;for(Do=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Rv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ad(r),rA(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function xf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Pv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Pv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zo)||(t.globalVersion=Zo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!xf(t))))return;t.flags|=2;const e=t.dep,n=He,r=Tn;He=t,Tn=!0;try{Rv(t);const s=t.fn(t._value);(e.version===0||Wr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{He=n,Tn=r,Cv(t),t.flags&=-3}}function ad(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ad(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function rA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tn=!0;const kv=[];function fr(){kv.push(Tn),Tn=!1}function hr(){const t=kv.pop();Tn=t===void 0?!0:t}function Cm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let Zo=0;class sA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!Tn||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new sA(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,Ov(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=r)}return n}trigger(e){this.version++,Zo++,this.notify(e)}notify(e){id();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{od()}}}function Ov(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ov(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zl=new WeakMap,Cs=Symbol(""),Nf=Symbol(""),ea=Symbol("");function Dt(t,e,n){if(Tn&&He){let r=zl.get(t);r||zl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new xc),s.map=r,s.key=n),s.track()}}function nr(t,e,n,r,s,i){const o=zl.get(t);if(!o){Zo++;return}const a=c=>{c&&c.trigger()};if(id(),e==="clear")o.forEach(a);else{const c=ce(t),u=c&&td(n);if(c&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===ea||!In(p)&&p>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ea)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Cs)),gi(t)&&a(o.get(Nf)));break;case"delete":c||(a(o.get(Cs)),gi(t)&&a(o.get(Nf)));break;case"set":gi(t)&&a(o.get(Cs));break}}od()}function iA(t,e){const n=zl.get(t);return n&&n.get(e)}function ni(t){const e=Re(t);return e===t?e:(Dt(e,"iterate",ea),fn(t)?e:e.map(bt))}function Nc(t){return Dt(t=Re(t),"iterate",ea),t}const oA={__proto__:null,[Symbol.iterator](){return Uu(this,Symbol.iterator,bt)},concat(...t){return ni(this).concat(...t.map(e=>ce(e)?ni(e):e))},entries(){return Uu(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Xn(this,"every",t,e,void 0,arguments)},filter(t,e){return Xn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Xn(this,"find",t,e,bt,arguments)},findIndex(t,e){return Xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return $u(this,"includes",t)},indexOf(...t){return $u(this,"indexOf",t)},join(t){return ni(this).join(t)},lastIndexOf(...t){return $u(this,"lastIndexOf",t)},map(t,e){return Xn(this,"map",t,e,void 0,arguments)},pop(){return Eo(this,"pop")},push(...t){return Eo(this,"push",t)},reduce(t,...e){return Pm(this,"reduce",t,e)},reduceRight(t,...e){return Pm(this,"reduceRight",t,e)},shift(){return Eo(this,"shift")},some(t,e){return Xn(this,"some",t,e,void 0,arguments)},splice(...t){return Eo(this,"splice",t)},toReversed(){return ni(this).toReversed()},toSorted(t){return ni(this).toSorted(t)},toSpliced(...t){return ni(this).toSpliced(...t)},unshift(...t){return Eo(this,"unshift",t)},values(){return Uu(this,"values",bt)}};function Uu(t,e,n){const r=Nc(t),s=r[e]();return r!==t&&!fn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const aA=Array.prototype;function Xn(t,e,n,r,s,i){const o=Nc(t),a=o!==t&&!fn(t),c=o[e];if(c!==aA[e]){const h=c.apply(t,i);return a?bt(h):h}let u=n;o!==t&&(a?u=function(h,p){return n.call(this,bt(h),p,t)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,t)}));const f=c.call(o,u,r);return a&&s?s(f):f}function Pm(t,e,n,r){const s=Nc(t);let i=n;return s!==t&&(fn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,bt(a),c,t)}),s[e](i,...r)}function $u(t,e,n){const r=Re(t);Dt(r,"iterate",ea);const s=r[e](...n);return(s===-1||s===!1)&&ud(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function Eo(t,e,n=[]){fr(),id();const r=Re(t)[e].apply(t,n);return od(),hr(),r}const lA=Jh("__proto__,__v_isRef,__isVue"),xv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function cA(t){In(t)||(t=String(t));const e=Re(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class Nv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vA:Vv:i?Mv:Lv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=oA[n]))return c;if(n==="hasOwnProperty")return cA}const a=Reflect.get(e,n,Xe(e)?e:r);return(In(n)?xv.has(n):lA(n))||(s||Dt(e,"get",n),i)?a:Xe(a)?o&&td(n)?a:a.value:Fe(a)?s?Fv(a):Er(a):a}}class Dv extends Nv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=dr(i);if(!fn(r)&&!dr(r)&&(i=Re(i),r=Re(r)),!ce(e)&&Xe(i)&&!Xe(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&td(n)?Number(n)<e.length:Ne(e,n),a=Reflect.set(e,n,r,Xe(e)?e:s);return e===Re(s)&&(o?Wr(r,i)&&nr(e,"set",n,r):nr(e,"add",n,r)),a}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&nr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!In(n)||!xv.has(n))&&Dt(e,"has",n),r}ownKeys(e){return Dt(e,"iterate",ce(e)?"length":Cs),Reflect.ownKeys(e)}}class uA extends Nv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fA=new Dv,hA=new uA,dA=new Dv(!0);const Df=t=>t,tl=t=>Reflect.getPrototypeOf(t);function pA(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=gi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Df:e?ql:bt;return!e&&Dt(i,"iterate",c?Nf:Cs),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function nl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function mA(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(Wr(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:c}=tl(o),u=e?Df:t?ql:bt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Dt(Re(s),"iterate",Cs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(Wr(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Re(a),u=e?Df:t?ql:bt;return!t&&Dt(c,"iterate",Cs),a.forEach((f,h)=>s.call(i,u(f),u(h),o))}};return mt(n,t?{add:nl("add"),set:nl("set"),delete:nl("delete"),clear:nl("clear")}:{add(s){!e&&!fn(s)&&!dr(s)&&(s=Re(s));const i=Re(this);return tl(i).has.call(i,s)||(i.add(s),nr(i,"add",s,s)),this},set(s,i){!e&&!fn(i)&&!dr(i)&&(i=Re(i));const o=Re(this),{has:a,get:c}=tl(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Wr(i,f)&&nr(o,"set",s,i):nr(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=tl(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&nr(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&nr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=pA(s,t,e)}),n}function ld(t,e){const n=mA(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const gA={get:ld(!1,!1)},yA={get:ld(!1,!0)},_A={get:ld(!0,!1)};const Lv=new WeakMap,Mv=new WeakMap,Vv=new WeakMap,vA=new WeakMap;function EA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bA(t){return t.__v_skip||!Object.isExtensible(t)?0:EA(KI(t))}function Er(t){return dr(t)?t:cd(t,!1,fA,gA,Lv)}function Nn(t){return cd(t,!1,dA,yA,Mv)}function Fv(t){return cd(t,!0,hA,_A,Vv)}function cd(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=bA(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function cr(t){return dr(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function ud(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function fd(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&Of(t,"__v_skip",!0),t}const bt=t=>Fe(t)?Er(t):t,ql=t=>Fe(t)?Fv(t):t;function Xe(t){return t?t.__v_isRef===!0:!1}function Qt(t){return Uv(t,!1)}function qn(t){return Uv(t,!0)}function Uv(t,e){return Xe(t)?t:new wA(t,e)}class wA{constructor(e,n){this.dep=new xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||fn(e)||dr(e);e=r?e:Re(e),Wr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function ot(t){return Xe(t)?t.value:t}function TA(t){return pe(t)?t():ot(t)}const IA={get:(t,e,n)=>e==="__v_raw"?t:ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $v(t){return cr(t)?t:new Proxy(t,IA)}class AA{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new xc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function SA(t){return new AA(t)}function RA(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=jv(t,n);return e}class CA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return iA(Re(this._object),this._key)}}class PA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function kA(t,e,n){return Xe(t)?t:pe(t)?new PA(t):Fe(t)&&arguments.length>1?jv(t,e,n):Qt(t)}function jv(t,e,n){const r=t[e];return Xe(r)?r:new CA(t,e,n)}class OA{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return Sv(this,!0),!0}get value(){const e=this.dep.track();return Pv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xA(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new OA(r,s,n)}const rl={},Wl=new WeakMap;let Ts;function NA(t,e=!1,n=Ts){if(n){let r=Wl.get(n);r||Wl.set(n,r=[]),r.push(t)}}function DA(t,e,n=$e){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=C=>s?C:fn(C)||s===!1||s===0?rr(C,1):rr(C);let f,h,p,m,y=!1,w=!1;if(Xe(t)?(h=()=>t.value,y=fn(t)):cr(t)?(h=()=>u(t),y=!0):ce(t)?(w=!0,y=t.some(C=>cr(C)||fn(C)),h=()=>t.map(C=>{if(Xe(C))return C.value;if(cr(C))return u(C);if(pe(C))return c?c(C,2):C()})):pe(t)?e?h=c?()=>c(t,2):t:h=()=>{if(p){fr();try{p()}finally{hr()}}const C=Ts;Ts=f;try{return c?c(t,3,[m]):t(m)}finally{Ts=C}}:h=Mn,e&&s){const C=h,D=s===!0?1/0:s;h=()=>rr(C(),D)}const P=Qi(),O=()=>{f.stop(),P&&P.active&&Zh(P.effects,f)};if(i&&e){const C=e;e=(...D)=>{C(...D),O()}}let R=w?new Array(t.length).fill(rl):rl;const v=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(e){const D=f.run();if(s||y||(w?D.some((F,S)=>Wr(F,R[S])):Wr(D,R))){p&&p();const F=Ts;Ts=f;try{const S=[D,R===rl?void 0:w&&R[0]===rl?[]:R,m];R=D,c?c(e,3,S):e(...S)}finally{Ts=F}}}else f.run()};return a&&a(v),f=new Iv(h),f.scheduler=o?()=>o(v,!1):v,m=C=>NA(C,!1,f),p=f.onStop=()=>{const C=Wl.get(f);if(C){if(c)c(C,4);else for(const D of C)D();Wl.delete(f)}},e?r?v(!0):R=f.run():o?o(v.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function rr(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Xe(t))rr(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)rr(t[r],e,n);else if(Gi(t)||gi(t))t.forEach(r=>{rr(r,e,n)});else if(_v(t)){for(const r in t)rr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&rr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ta(t,e,n,r){try{return r?t(...r):t()}catch(s){Ji(s,e,n)}}function An(t,e,n,r){if(pe(t)){const s=Ta(t,e,n,r);return s&&ed(s)&&s.catch(i=>{Ji(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(An(t[i],e,n,r));return s}}function Ji(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,u)===!1)return}a=a.parent}if(i){fr(),Ta(i,null,10,[t,c,u]),hr();return}}LA(t,n,s,r,o)}function LA(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ht=[];let kn=-1;const vi=[];let Nr=null,oi=0;const Bv=Promise.resolve();let Kl=null;function Wn(t){const e=Kl||Bv;return t?e.then(this?t.bind(this):t):e}function MA(t){let e=kn+1,n=Ht.length;for(;e<n;){const r=e+n>>>1,s=Ht[r],i=ta(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function hd(t){if(!(t.flags&1)){const e=ta(t),n=Ht[Ht.length-1];!n||!(t.flags&2)&&e>=ta(n)?Ht.push(t):Ht.splice(MA(e),0,t),t.flags|=1,Hv()}}function Hv(){Kl||(Kl=Bv.then(zv))}function Lf(t){ce(t)?vi.push(...t):Nr&&t.id===-1?Nr.splice(oi+1,0,t):t.flags&1||(vi.push(t),t.flags|=1),Hv()}function km(t,e,n=kn+1){for(;n<Ht.length;n++){const r=Ht[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ht.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Gl(t){if(vi.length){const e=[...new Set(vi)].sort((n,r)=>ta(n)-ta(r));if(vi.length=0,Nr){Nr.push(...e);return}for(Nr=e,oi=0;oi<Nr.length;oi++){const n=Nr[oi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nr=null,oi=0}}const ta=t=>t.id==null?t.flags&2?-1:1/0:t.id;function zv(t){try{for(kn=0;kn<Ht.length;kn++){const e=Ht[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<Ht.length;kn++){const e=Ht[kn];e&&(e.flags&=-2)}kn=-1,Ht.length=0,Gl(),Kl=null,(Ht.length||vi.length)&&zv()}}let It=null,qv=null;function Yl(t){const e=It;return It=t,qv=t&&t.type.__scopeId||null,e}function _n(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bm(-1);const i=Yl(e);let o;try{o=t(...s)}finally{Yl(i),r._d&&Bm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function W9(t,e){if(It===null)return t;const n=Vc(It),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=$e]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&rr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function On(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(fr(),An(c,n,8,[t.el,a,t,e]),hr())}}const VA=Symbol("_vte"),Wv=t=>t.__isTeleport,Dr=Symbol("_leaveCb"),sl=Symbol("_enterCb");function FA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xi(()=>{t.isMounted=!0}),Xi(()=>{t.isUnmounting=!0}),t}const on=[Function,Array],Kv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},Gv=t=>{const e=t.subTree;return e.component?Gv(e.component):e},UA={name:"BaseTransition",props:Kv,setup(t,{slots:e}){const n=zs(),r=FA();return()=>{const s=e.default&&Jv(e.default(),!0);if(!s||!s.length)return;const i=Yv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return ju(i);const c=Om(i);if(!c)return ju(i);let u=Mf(c,o,r,n,h=>u=h);c.type!==at&&Oi(c,u);let f=n.subTree&&Om(n.subTree);if(f&&f.type!==at&&!En(c,f)&&Gv(n).type!==at){let h=Mf(f,o,r,n);if(Oi(f,h),a==="out-in"&&c.type!==at)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,f=void 0},ju(i);a==="in-out"&&c.type!==at?h.delayLeave=(p,m,y)=>{const w=Qv(r,f);w[String(f.key)]=f,p[Dr]=()=>{m(),p[Dr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Yv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==at){e=n;break}}return e}const $A=UA;function Qv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Mf(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:p,onLeave:m,onAfterLeave:y,onLeaveCancelled:w,onBeforeAppear:P,onAppear:O,onAfterAppear:R,onAppearCancelled:v}=e,C=String(t.key),D=Qv(n,t),F=(_,T)=>{_&&An(_,r,9,T)},S=(_,T)=>{const x=T[1];F(_,T),ce(_)?_.every(k=>k.length<=1)&&x():_.length<=1&&x()},E={mode:o,persisted:a,beforeEnter(_){let T=c;if(!n.isMounted)if(i)T=P||c;else return;_[Dr]&&_[Dr](!0);const x=D[C];x&&En(t,x)&&x.el[Dr]&&x.el[Dr](),F(T,[_])},enter(_){let T=u,x=f,k=h;if(!n.isMounted)if(i)T=O||u,x=R||f,k=v||h;else return;let I=!1;const ge=_[sl]=ve=>{I||(I=!0,ve?F(k,[_]):F(x,[_]),E.delayedLeave&&E.delayedLeave(),_[sl]=void 0)};T?S(T,[_,ge]):ge()},leave(_,T){const x=String(t.key);if(_[sl]&&_[sl](!0),n.isUnmounting)return T();F(p,[_]);let k=!1;const I=_[Dr]=ge=>{k||(k=!0,T(),ge?F(w,[_]):F(y,[_]),_[Dr]=void 0,D[x]===t&&delete D[x])};D[x]=t,m?S(m,[_,I]):I()},clone(_){const T=Mf(_,e,n,r,s);return s&&s(T),T}};return E}function ju(t){if(Ia(t))return t=hn(t),t.children=null,t}function Om(t){if(!Ia(t))return Wv(t.type)&&t.children?Yv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Jv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Lt?(o.patchFlag&128&&s++,r=r.concat(Jv(o.children,e,a))):(e||o.type!==at)&&r.push(a!=null?hn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function mn(t,e){return pe(t)?mt({name:t.name},e,{setup:t}):t}function dd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ei(t,e,n,r,s=!1){if(ce(t)){t.forEach((y,w)=>Ei(y,e&&(ce(e)?e[w]:e),n,r,s));return}if(Kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Vc(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===$e?a.refs={}:a.refs,h=a.setupState,p=Re(h),m=h===$e?()=>!1:y=>Ne(p,y);if(u!=null&&u!==c&&(Ye(u)?(f[u]=null,m(u)&&(h[u]=null)):Xe(u)&&(u.value=null)),pe(c))Ta(c,a,12,[o,f]);else{const y=Ye(c),w=Xe(c);if(y||w){const P=()=>{if(t.f){const O=y?m(c)?h[c]:f[c]:c.value;s?ce(O)&&Zh(O,i):ce(O)?O.includes(i)||O.push(i):y?(f[c]=[i],m(c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else y?(f[c]=o,m(c)&&(h[c]=o)):w&&(c.value=o,t.k&&(f[t.k]=o))};o?(P.id=-1,vt(P,n)):P()}}}let xm=!1;const ri=()=>{xm||(console.error("Hydration completed but contains mismatches."),xm=!0)},jA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",BA=t=>t.namespaceURI.includes("MathML"),il=t=>{if(t.nodeType===1){if(jA(t))return"svg";if(BA(t))return"mathml"}},hi=t=>t.nodeType===8;function HA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,f=(v,C)=>{if(!C.hasChildNodes()){n(null,v,C),Gl(),C._vnode=v;return}h(C.firstChild,v,null,null,null),Gl(),C._vnode=v},h=(v,C,D,F,S,E=!1)=>{E=E||!!C.dynamicChildren;const _=hi(v)&&v.data==="[",T=()=>w(v,C,D,F,S,_),{type:x,ref:k,shapeFlag:I,patchFlag:ge}=C;let ve=v.nodeType;C.el=v,ge===-2&&(E=!1,C.dynamicChildren=null);let Z=null;switch(x){case ks:ve!==3?C.children===""?(c(C.el=s(""),o(v),v),Z=v):Z=T():(v.data!==C.children&&(ri(),v.data=C.children),Z=i(v));break;case at:R(v)?(Z=i(v),O(C.el=v.content.firstChild,v,D)):ve!==8||_?Z=T():Z=i(v);break;case Vo:if(_&&(v=i(v),ve=v.nodeType),ve===1||ve===3){Z=v;const se=!C.children.length;for(let ne=0;ne<C.staticCount;ne++)se&&(C.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===C.staticCount-1&&(C.anchor=Z),Z=i(Z);return _?i(Z):Z}else T();break;case Lt:_?Z=y(v,C,D,F,S,E):Z=T();break;default:if(I&1)(ve!==1||C.type.toLowerCase()!==v.tagName.toLowerCase())&&!R(v)?Z=T():Z=p(v,C,D,F,S,E);else if(I&6){C.slotScopeIds=S;const se=o(v);if(_?Z=P(v):hi(v)&&v.data==="teleport start"?Z=P(v,v.data,"teleport end"):Z=i(v),e(C,se,null,D,F,il(se),E),Kr(C)&&!C.type.__asyncResolved){let ne;_?(ne=Ee(Lt),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=v.nodeType===3?ln(""):Ee("div"),ne.el=v,C.component.subTree=ne}}else I&64?ve!==8?Z=T():Z=C.type.hydrate(v,C,D,F,S,E,t,m):I&128&&(Z=C.type.hydrate(v,C,D,F,il(o(v)),S,E,t,h))}return k!=null&&Ei(k,null,F,C),Z},p=(v,C,D,F,S,E)=>{E=E||!!C.dynamicChildren;const{type:_,props:T,patchFlag:x,shapeFlag:k,dirs:I,transition:ge}=C,ve=_==="input"||_==="option";if(ve||x!==-1){I&&On(C,null,D,"created");let Z=!1;if(R(v)){Z=EE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=v.content.firstChild;if(Z){const Be=ne.getAttribute("class");Be&&(ne.$cls=Be),ge.beforeEnter(ne)}O(ne,v,D),C.el=v=ne}if(k&16&&!(T&&(T.innerHTML||T.textContent))){let ne=m(v.firstChild,C,v,D,F,S,E);for(;ne;){ol(v,1)||ri();const Be=ne;ne=ne.nextSibling,a(Be)}}else if(k&8){let ne=C.children;ne[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(ne=ne.slice(1)),v.textContent!==ne&&(ol(v,0)||ri(),v.textContent=C.children)}if(T){if(ve||!E||x&48){const ne=v.tagName.includes("-");for(const Be in T)(ve&&(Be.endsWith("value")||Be==="indeterminate")||Ea(Be)&&!yi(Be)||Be[0]==="."||ne)&&r(v,Be,null,T[Be],void 0,D)}else if(T.onClick)r(v,"onClick",null,T.onClick,void 0,D);else if(x&4&&cr(T.style))for(const ne in T.style)T.style[ne]}let se;(se=T&&T.onVnodeBeforeMount)&&Wt(se,D,C),I&&On(C,null,D,"beforeMount"),((se=T&&T.onVnodeMounted)||I||Z)&&SE(()=>{se&&Wt(se,D,C),Z&&ge.enter(v),I&&On(C,null,D,"mounted")},F)}return v.nextSibling},m=(v,C,D,F,S,E,_)=>{_=_||!!C.dynamicChildren;const T=C.children,x=T.length;for(let k=0;k<x;k++){const I=_?T[k]:T[k]=Xt(T[k]),ge=I.type===ks;v?(ge&&!_&&k+1<x&&Xt(T[k+1]).type===ks&&(c(s(v.data.slice(I.children.length)),D,i(v)),v.data=I.children),v=h(v,I,F,S,E,_)):ge&&!I.children?c(I.el=s(""),D):(ol(D,1)||ri(),n(null,I,D,null,F,S,il(D),E))}return v},y=(v,C,D,F,S,E)=>{const{slotScopeIds:_}=C;_&&(S=S?S.concat(_):_);const T=o(v),x=m(i(v),C,T,D,F,S,E);return x&&hi(x)&&x.data==="]"?i(C.anchor=x):(ri(),c(C.anchor=u("]"),T,x),x)},w=(v,C,D,F,S,E)=>{if(ol(v.parentElement,1)||ri(),C.el=null,E){const x=P(v);for(;;){const k=i(v);if(k&&k!==x)a(k);else break}}const _=i(v),T=o(v);return a(v),n(null,C,T,_,D,F,il(T),S),D&&(D.vnode.el=C.el,Mc(D,C.el)),_},P=(v,C="[",D="]")=>{let F=0;for(;v;)if(v=i(v),v&&hi(v)&&(v.data===C&&F++,v.data===D)){if(F===0)return i(v);F--}return v},O=(v,C,D)=>{const F=C.parentNode;F&&F.replaceChild(v,C);let S=D;for(;S;)S.vnode.el===C&&(S.vnode.el=S.subTree.el=v),S=S.parent},R=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[f,h]}const Nm="data-allow-mismatch",zA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ol(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Nm);)t=t.parentElement;const n=t&&t.getAttribute(Nm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(zA[e])}}kc().requestIdleCallback;kc().cancelIdleCallback;function qA(t,e){if(hi(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(hi(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Kr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function WA(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,f,h=0;const p=()=>(h++,u=null,m()),m=()=>{let y;return u||(y=u=e().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),c)return new Promise((P,O)=>{c(w,()=>P(p()),()=>O(w),h+1)});throw w}).then(w=>y!==u&&u?u:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),f=w,w)))};return mn({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(y,w,P){let O=!1;(w.bu||(w.bu=[])).push(()=>O=!0);const R=()=>{O||P()},v=i?()=>{const C=i(R,D=>qA(y,D));C&&(w.bum||(w.bum=[])).push(C)}:R;f?v():m().then(()=>!w.isUnmounted&&v())},get __asyncResolved(){return f},setup(){const y=wt;if(dd(y),f)return()=>Bu(f,y);const w=v=>{u=null,Ji(v,y,13,!r)};if(a&&y.suspense||Di)return m().then(v=>()=>Bu(v,y)).catch(v=>(w(v),()=>r?Ee(r,{error:v}):null));const P=Qt(!1),O=Qt(),R=Qt(!!s);return s&&setTimeout(()=>{R.value=!1},s),o!=null&&setTimeout(()=>{if(!P.value&&!O.value){const v=new Error(`Async component timed out after ${o}ms.`);w(v),O.value=v}},o),m().then(()=>{P.value=!0,y.parent&&Ia(y.parent.vnode)&&y.parent.update()}).catch(v=>{w(v),O.value=v}),()=>{if(P.value&&f)return Bu(f,y);if(O.value&&r)return Ee(r,{error:O.value});if(n&&!R.value)return Ee(n)}}})}function Bu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ee(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ia=t=>t.type.__isKeepAlive,KA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=zs(),r=n.ctx;if(!r.renderer)return()=>{const R=e.default&&e.default();return R&&R.length===1?R[0]:R};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:h}}}=r,p=h("div");r.activate=(R,v,C,D,F)=>{const S=R.component;u(R,v,C,0,a),c(S.vnode,R,v,C,S,a,D,R.slotScopeIds,F),vt(()=>{S.isDeactivated=!1,S.a&&_i(S.a);const E=R.props&&R.props.onVnodeMounted;E&&Wt(E,S.parent,R)},a)},r.deactivate=R=>{const v=R.component;Jl(v.m),Jl(v.a),u(R,p,null,1,a),vt(()=>{v.da&&_i(v.da);const C=R.props&&R.props.onVnodeUnmounted;C&&Wt(C,v.parent,R),v.isDeactivated=!0},a)};function m(R){Hu(R),f(R,n,a,!0)}function y(R){s.forEach((v,C)=>{const D=zf(v.type);D&&!R(D)&&w(C)})}function w(R){const v=s.get(R);v&&(!o||!En(v,o))?m(v):o&&Hu(o),s.delete(R),i.delete(R)}Vn(()=>[t.include,t.exclude],([R,v])=>{R&&y(C=>Ao(R,C)),v&&y(C=>!Ao(v,C))},{flush:"post",deep:!0});let P=null;const O=()=>{P!=null&&(Xl(n.subTree.type)?vt(()=>{s.set(P,al(n.subTree))},n.subTree.suspense):s.set(P,al(n.subTree)))};return xi(O),tE(O),Xi(()=>{s.forEach(R=>{const{subTree:v,suspense:C}=n,D=al(v);if(R.type===D.type&&R.key===D.key){Hu(D);const F=D.component.da;F&&vt(F,C);return}m(R)})}),()=>{if(P=null,!e.default)return o=null;const R=e.default(),v=R[0];if(R.length>1)return o=null,R;if(!Ns(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let C=al(v);if(C.type===at)return o=null,C;const D=C.type,F=zf(Kr(C)?C.type.__asyncResolved||{}:D),{include:S,exclude:E,max:_}=t;if(S&&(!F||!Ao(S,F))||E&&F&&Ao(E,F))return C.shapeFlag&=-257,o=C,v;const T=C.key==null?D:C.key,x=s.get(T);return C.el&&(C=hn(C),v.shapeFlag&128&&(v.ssContent=C)),P=T,x?(C.el=x.el,C.component=x.component,C.transition&&Oi(C,C.transition),C.shapeFlag|=512,i.delete(T),i.add(T)):(i.add(T),_&&i.size>parseInt(_,10)&&w(i.values().next().value)),C.shapeFlag|=256,o=C,Xl(v.type)?v:C}}},GA=KA;function Ao(t,e){return ce(t)?t.some(n=>Ao(n,e)):Ye(t)?t.split(",").includes(e):WI(t)?(t.lastIndex=0,t.test(e)):!1}function Xv(t,e){eE(t,"a",e)}function Zv(t,e){eE(t,"da",e)}function eE(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Dc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ia(s.parent.vnode)&&YA(r,e,n,s),s=s.parent}}function YA(t,e,n,r){const s=Dc(e,t,r,!0);nE(()=>{Zh(r[e],s)},n)}function Hu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function al(t){return t.shapeFlag&128?t.ssContent:t}function Dc(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{fr();const a=Sa(n),c=An(e,n,t,o);return a(),hr(),c});return r?s.unshift(i):s.push(i),i}}const br=t=>(e,n=wt)=>{(!Di||t==="sp")&&Dc(t,(...r)=>e(...r),n)},QA=br("bm"),xi=br("m"),JA=br("bu"),tE=br("u"),Xi=br("bum"),nE=br("um"),XA=br("sp"),ZA=br("rtg"),e1=br("rtc");function rE(t,e=wt){Dc("ec",t,e)}const sE="components";function na(t,e){return oE(sE,t,!0,e)||t}const iE=Symbol.for("v-ndc");function t1(t){return Ye(t)?oE(sE,t,!1)||t:t||iE}function oE(t,e,n=!0,r=!1){const s=It||wt;if(s){const i=s.type;{const a=zf(i,!1);if(a&&(a===e||a===pn(e)||a===Pc(pn(e))))return i}const o=Dm(s[t]||i[t],e)||Dm(s.appContext[t],e);return!o&&r?i:o}}function Dm(t,e){return t&&(t[e]||t[pn(e)]||t[Pc(pn(e))])}function K9(t,e,n,r){let s;const i=n,o=ce(t);if(o||Ye(t)){const a=o&&cr(t);let c=!1,u=!1;a&&(c=!fn(t),u=dr(t),t=Nc(t)),s=new Array(t.length);for(let f=0,h=t.length;f<h;f++)s[f]=e(c?u?ql(bt(t[f])):bt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const f=a[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function G9(t,e,n={},r,s){if(It.ce||It.parent&&Kr(It.parent)&&It.parent.ce)return zt(),sr(Lt,null,[Ee("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),zt();const o=i&&aE(i(n)),a=n.key||o&&o.key,c=sr(Lt,{key:(a&&!In(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function aE(t){return t.some(e=>Ns(e)?!(e.type===at||e.type===Lt&&!aE(e.children)):!0)?t:null}const Vf=t=>t?OE(t)?Vc(t):Vf(t.parent):null,Mo=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vf(t.parent),$root:t=>Vf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cE(t),$forceUpdate:t=>t.f||(t.f=()=>{hd(t.update)}),$nextTick:t=>t.n||(t.n=Wn.bind(t.proxy)),$watch:t=>w1.bind(t)}),zu=(t,e)=>t!==$e&&!t.__isScriptSetup&&Ne(t,e),n1={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zu(r,e))return o[e]=1,r[e];if(s!==$e&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==$e&&Ne(n,e))return o[e]=4,n[e];Ff&&(o[e]=0)}}const f=Mo[e];let h,p;if(f)return e==="$attrs"&&Dt(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==$e&&Ne(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zu(s,e)?(s[e]=n,!0):r!==$e&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==$e&&Ne(t,o)||zu(e,o)||(a=i[0])&&Ne(a,o)||Ne(r,o)||Ne(Mo,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ff=!0;function r1(t){const e=cE(t),n=t.proxy,r=t.ctx;Ff=!1,e.beforeCreate&&Mm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:y,activated:w,deactivated:P,beforeDestroy:O,beforeUnmount:R,destroyed:v,unmounted:C,render:D,renderTracked:F,renderTriggered:S,errorCaptured:E,serverPrefetch:_,expose:T,inheritAttrs:x,components:k,directives:I,filters:ge}=e;if(u&&s1(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Fe(se)&&(t.data=Er(se))}if(Ff=!0,i)for(const se in i){const ne=i[se],Be=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Mn,gn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Mn,rn=je({get:Be,set:gn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Qe=>rn.value=Qe})}if(a)for(const se in a)lE(a[se],r,n,se);if(c){const se=pe(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ne=>{Gr(ne,se[ne])})}f&&Mm(f,t,"c");function Z(se,ne){ce(ne)?ne.forEach(Be=>se(Be.bind(n))):ne&&se(ne.bind(n))}if(Z(QA,h),Z(xi,p),Z(JA,m),Z(tE,y),Z(Xv,w),Z(Zv,P),Z(rE,E),Z(e1,F),Z(ZA,S),Z(Xi,R),Z(nE,C),Z(XA,_),ce(T))if(T.length){const se=t.exposed||(t.exposed={});T.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:Be=>n[ne]=Be,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Mn&&(t.render=D),x!=null&&(t.inheritAttrs=x),k&&(t.components=k),I&&(t.directives=I),_&&dd(t)}function s1(t,e,n=Mn){ce(t)&&(t=Uf(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=pt(s.from||r,s.default,!0):i=pt(s.from||r):i=pt(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Mm(t,e,n){An(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lE(t,e,n,r){let s=r.includes(".")?TE(n,r):()=>n[r];if(Ye(t)){const i=e[t];pe(i)&&Vn(s,i)}else if(pe(t))Vn(s,t.bind(n));else if(Fe(t))if(ce(t))t.forEach(i=>lE(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Vn(s,i,t)}}function cE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ql(c,u,o,!0)),Ql(c,e,o)),Fe(e)&&i.set(e,c),c}function Ql(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ql(t,i,n,!0),s&&s.forEach(o=>Ql(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=i1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const i1={data:Vm,props:Fm,emits:Fm,methods:So,computed:So,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:So,directives:So,watch:a1,provide:Vm,inject:o1};function Vm(t,e){return e?t?function(){return mt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function o1(t,e){return So(Uf(t),Uf(e))}function Uf(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function So(t,e){return t?mt(Object.create(null),t,e):e}function Fm(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:mt(Object.create(null),Lm(t),Lm(e??{})):e}function a1(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const r in e)n[r]=Bt(t[r],e[r]);return n}function uE(){return{app:null,config:{isNativeTag:zI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l1=0;function c1(t,e){return function(r,s=null){pe(r)||(r=mt({},r)),s!=null&&!Fe(s)&&(s=null);const i=uE(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:l1++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:K1,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...h)):pe(f)&&(o.add(f),f(u,...h))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,h){return h?(i.components[f]=h,u):i.components[f]},directive(f,h){return h?(i.directives[f]=h,u):i.directives[f]},mount(f,h,p){if(!c){const m=u._ceVNode||Ee(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(m,f):t(m,f,p),c=!0,u._container=f,f.__vue_app__=u,Vc(m.component)}},onUnmount(f){a.push(f)},unmount(){c&&(An(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,h){return i.provides[f]=h,u},runWithContext(f){const h=Ps;Ps=u;try{return f()}finally{Ps=h}}};return u}}let Ps=null;function Gr(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function pt(t,e,n=!1){const r=zs();if(r||Ps){let s=Ps?Ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Aa(){return!!(zs()||Ps)}const fE={},hE=()=>Object.create(fE),dE=t=>Object.getPrototypeOf(t)===fE;function u1(t,e,n,r=!1){const s={},i=hE();t.propsDefaults=Object.create(null),pE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function f1(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Lc(t.emitsOptions,p))continue;const m=e[p];if(c)if(Ne(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const y=pn(p);s[y]=$f(c,a,y,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{pE(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!Ne(e,h)&&((f=Hs(h))===h||!Ne(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=$f(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Ne(e,h))&&(delete i[h],u=!0)}u&&nr(t.attrs,"set","")}function pE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(yi(c))continue;const u=e[c];let f;s&&Ne(s,f=pn(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Lc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Re(n),u=a||$e;for(let f=0;f<i.length;f++){const h=i[f];n[h]=$f(s,c,h,u[h],t,!Ne(u,h))}}return o}function $f(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Sa(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Hs(n))&&(r=!0))}return r}const h1=new WeakMap;function mE(t,e,n=!1){const r=n?h1:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const f=h=>{c=!0;const[p,m]=mE(h,e,!0);mt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Fe(t)&&r.set(t,mi),mi;if(ce(i))for(let f=0;f<i.length;f++){const h=pn(i[f]);Um(h)&&(o[h]=$e)}else if(i)for(const f in i){const h=pn(f);if(Um(h)){const p=i[f],m=o[h]=ce(p)||pe(p)?{type:p}:mt({},p),y=m.type;let w=!1,P=!0;if(ce(y))for(let O=0;O<y.length;++O){const R=y[O],v=pe(R)&&R.name;if(v==="Boolean"){w=!0;break}else v==="String"&&(P=!1)}else w=pe(y)&&y.name==="Boolean";m[0]=w,m[1]=P,(w||Ne(m,"default"))&&a.push(h)}}const u=[o,a];return Fe(t)&&r.set(t,u),u}function Um(t){return t[0]!=="$"&&!yi(t)}const pd=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",md=t=>ce(t)?t.map(Xt):[Xt(t)],d1=(t,e,n)=>{if(e._n)return e;const r=_n((...s)=>md(e(...s)),n);return r._c=!1,r},gE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pd(s))continue;const i=t[s];if(pe(i))e[s]=d1(s,i,r);else if(i!=null){const o=md(i);e[s]=()=>o}}},yE=(t,e)=>{const n=md(e);t.slots.default=()=>n},_E=(t,e,n)=>{for(const r in e)(n||!pd(r))&&(t[r]=e[r])},p1=(t,e,n)=>{const r=t.slots=hE();if(t.vnode.shapeFlag&32){const s=e.__;s&&Of(r,"__",s,!0);const i=e._;i?(_E(r,e,n),n&&Of(r,"_",i,!0)):gE(e,r)}else e&&yE(t,e)},m1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=$e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:_E(s,e,n):(i=!e.$stable,gE(e,s)),o=e}else e&&(yE(t,e),o={default:1});if(i)for(const a in s)!pd(a)&&o[a]==null&&delete s[a]},vt=SE;function g1(t){return vE(t)}function y1(t){return vE(t,HA)}function vE(t,e){const n=kc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=Mn,insertStaticContent:y}=t,w=(A,N,M,H=null,U=null,z=null,Q=void 0,G=null,K=!!N.dynamicChildren)=>{if(A===N)return;A&&!En(A,N)&&(H=$(A),Qe(A,U,z,!0),A=null),N.patchFlag===-2&&(K=!1,N.dynamicChildren=null);const{type:q,ref:le,shapeFlag:J}=N;switch(q){case ks:P(A,N,M,H);break;case at:O(A,N,M,H);break;case Vo:A==null&&R(N,M,H,Q);break;case Lt:k(A,N,M,H,U,z,Q,G,K);break;default:J&1?D(A,N,M,H,U,z,Q,G,K):J&6?I(A,N,M,H,U,z,Q,G,K):(J&64||J&128)&&q.process(A,N,M,H,U,z,Q,G,K,re)}le!=null&&U?Ei(le,A&&A.ref,z,N||A,!N):le==null&&A&&A.ref!=null&&Ei(A.ref,null,z,A,!0)},P=(A,N,M,H)=>{if(A==null)r(N.el=a(N.children),M,H);else{const U=N.el=A.el;N.children!==A.children&&u(U,N.children)}},O=(A,N,M,H)=>{A==null?r(N.el=c(N.children||""),M,H):N.el=A.el},R=(A,N,M,H)=>{[A.el,A.anchor]=y(A.children,N,M,H,A.el,A.anchor)},v=({el:A,anchor:N},M,H)=>{let U;for(;A&&A!==N;)U=p(A),r(A,M,H),A=U;r(N,M,H)},C=({el:A,anchor:N})=>{let M;for(;A&&A!==N;)M=p(A),s(A),A=M;s(N)},D=(A,N,M,H,U,z,Q,G,K)=>{N.type==="svg"?Q="svg":N.type==="math"&&(Q="mathml"),A==null?F(N,M,H,U,z,Q,G,K):_(A,N,U,z,Q,G,K)},F=(A,N,M,H,U,z,Q,G)=>{let K,q;const{props:le,shapeFlag:J,transition:ae,dirs:ie}=A;if(K=A.el=o(A.type,z,le&&le.is,le),J&8?f(K,A.children):J&16&&E(A.children,K,null,H,U,qu(A,z),Q,G),ie&&On(A,null,H,"created"),S(K,A,A.scopeId,Q,H),le){for(const ke in le)ke!=="value"&&!yi(ke)&&i(K,ke,null,le[ke],z,H);"value"in le&&i(K,"value",null,le.value,z),(q=le.onVnodeBeforeMount)&&Wt(q,H,A)}ie&&On(A,null,H,"beforeMount");const he=EE(U,ae);he&&ae.beforeEnter(K),r(K,N,M),((q=le&&le.onVnodeMounted)||he||ie)&&vt(()=>{q&&Wt(q,H,A),he&&ae.enter(K),ie&&On(A,null,H,"mounted")},U)},S=(A,N,M,H,U)=>{if(M&&m(A,M),H)for(let z=0;z<H.length;z++)m(A,H[z]);if(U){let z=U.subTree;if(N===z||Xl(z.type)&&(z.ssContent===N||z.ssFallback===N)){const Q=U.vnode;S(A,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},E=(A,N,M,H,U,z,Q,G,K=0)=>{for(let q=K;q<A.length;q++){const le=A[q]=G?Lr(A[q]):Xt(A[q]);w(null,le,N,M,H,U,z,Q,G)}},_=(A,N,M,H,U,z,Q)=>{const G=N.el=A.el;let{patchFlag:K,dynamicChildren:q,dirs:le}=N;K|=A.patchFlag&16;const J=A.props||$e,ae=N.props||$e;let ie;if(M&&vs(M,!1),(ie=ae.onVnodeBeforeUpdate)&&Wt(ie,M,N,A),le&&On(N,A,M,"beforeUpdate"),M&&vs(M,!0),(J.innerHTML&&ae.innerHTML==null||J.textContent&&ae.textContent==null)&&f(G,""),q?T(A.dynamicChildren,q,G,M,H,qu(N,U),z):Q||ne(A,N,G,null,M,H,qu(N,U),z,!1),K>0){if(K&16)x(G,J,ae,M,U);else if(K&2&&J.class!==ae.class&&i(G,"class",null,ae.class,U),K&4&&i(G,"style",J.style,ae.style,U),K&8){const he=N.dynamicProps;for(let ke=0;ke<he.length;ke++){const Ce=he[ke],gt=J[Ce],ft=ae[Ce];(ft!==gt||Ce==="value")&&i(G,Ce,gt,ft,U,M)}}K&1&&A.children!==N.children&&f(G,N.children)}else!Q&&q==null&&x(G,J,ae,M,U);((ie=ae.onVnodeUpdated)||le)&&vt(()=>{ie&&Wt(ie,M,N,A),le&&On(N,A,M,"updated")},H)},T=(A,N,M,H,U,z,Q)=>{for(let G=0;G<N.length;G++){const K=A[G],q=N[G],le=K.el&&(K.type===Lt||!En(K,q)||K.shapeFlag&198)?h(K.el):M;w(K,q,le,null,H,U,z,Q,!0)}},x=(A,N,M,H,U)=>{if(N!==M){if(N!==$e)for(const z in N)!yi(z)&&!(z in M)&&i(A,z,N[z],null,U,H);for(const z in M){if(yi(z))continue;const Q=M[z],G=N[z];Q!==G&&z!=="value"&&i(A,z,G,Q,U,H)}"value"in M&&i(A,"value",N.value,M.value,U)}},k=(A,N,M,H,U,z,Q,G,K)=>{const q=N.el=A?A.el:a(""),le=N.anchor=A?A.anchor:a("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:ie}=N;ie&&(G=G?G.concat(ie):ie),A==null?(r(q,M,H),r(le,M,H),E(N.children||[],M,le,U,z,Q,G,K)):J>0&&J&64&&ae&&A.dynamicChildren?(T(A.dynamicChildren,ae,M,U,z,Q,G),(N.key!=null||U&&N===U.subTree)&&bE(A,N,!0)):ne(A,N,M,le,U,z,Q,G,K)},I=(A,N,M,H,U,z,Q,G,K)=>{N.slotScopeIds=G,A==null?N.shapeFlag&512?U.ctx.activate(N,M,H,Q,K):ge(N,M,H,U,z,Q,K):ve(A,N,K)},ge=(A,N,M,H,U,z,Q)=>{const G=A.component=j1(A,H,U);if(Ia(A)&&(G.ctx.renderer=re),B1(G,!1,Q),G.asyncDep){if(U&&U.registerDep(G,Z,Q),!A.el){const K=G.subTree=Ee(at);O(null,K,N,M),A.placeholder=K.el}}else Z(G,A,N,M,U,z,Q)},ve=(A,N,M)=>{const H=N.component=A.component;if(C1(A,N,M))if(H.asyncDep&&!H.asyncResolved){se(H,N,M);return}else H.next=N,H.update();else N.el=A.el,H.vnode=N},Z=(A,N,M,H,U,z,Q)=>{const G=()=>{if(A.isMounted){let{next:J,bu:ae,u:ie,parent:he,vnode:ke}=A;{const Rt=wE(A);if(Rt){J&&(J.el=ke.el,se(A,J,Q)),Rt.asyncDep.then(()=>{A.isUnmounted||G()});return}}let Ce=J,gt;vs(A,!1),J?(J.el=ke.el,se(A,J,Q)):J=ke,ae&&_i(ae),(gt=J.props&&J.props.onVnodeBeforeUpdate)&&Wt(gt,he,J,ke),vs(A,!0);const ft=Wu(A),yt=A.subTree;A.subTree=ft,w(yt,ft,h(yt.el),$(yt),A,U,z),J.el=ft.el,Ce===null&&Mc(A,ft.el),ie&&vt(ie,U),(gt=J.props&&J.props.onVnodeUpdated)&&vt(()=>Wt(gt,he,J,ke),U)}else{let J;const{el:ae,props:ie}=N,{bm:he,m:ke,parent:Ce,root:gt,type:ft}=A,yt=Kr(N);if(vs(A,!1),he&&_i(he),!yt&&(J=ie&&ie.onVnodeBeforeMount)&&Wt(J,Ce,N),vs(A,!0),ae&&Le){const Rt=()=>{A.subTree=Wu(A),Le(ae,A.subTree,A,U,null)};yt&&ft.__asyncHydrate?ft.__asyncHydrate(ae,A,Rt):Rt()}else{gt.ce&&gt.ce._def.shadowRoot!==!1&&gt.ce._injectChildStyle(ft);const Rt=A.subTree=Wu(A);w(null,Rt,M,H,A,U,z),N.el=Rt.el}if(ke&&vt(ke,U),!yt&&(J=ie&&ie.onVnodeMounted)){const Rt=N;vt(()=>Wt(J,Ce,Rt),U)}(N.shapeFlag&256||Ce&&Kr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&A.a&&vt(A.a,U),A.isMounted=!0,N=M=H=null}};A.scope.on();const K=A.effect=new Iv(G);A.scope.off();const q=A.update=K.run.bind(K),le=A.job=K.runIfDirty.bind(K);le.i=A,le.id=A.uid,K.scheduler=()=>hd(le),vs(A,!0),q()},se=(A,N,M)=>{N.component=A;const H=A.vnode.props;A.vnode=N,A.next=null,f1(A,N.props,H,M),m1(A,N.children,M),fr(),km(A),hr()},ne=(A,N,M,H,U,z,Q,G,K=!1)=>{const q=A&&A.children,le=A?A.shapeFlag:0,J=N.children,{patchFlag:ae,shapeFlag:ie}=N;if(ae>0){if(ae&128){gn(q,J,M,H,U,z,Q,G,K);return}else if(ae&256){Be(q,J,M,H,U,z,Q,G,K);return}}ie&8?(le&16&&qt(q,U,z),J!==q&&f(M,J)):le&16?ie&16?gn(q,J,M,H,U,z,Q,G,K):qt(q,U,z,!0):(le&8&&f(M,""),ie&16&&E(J,M,H,U,z,Q,G,K))},Be=(A,N,M,H,U,z,Q,G,K)=>{A=A||mi,N=N||mi;const q=A.length,le=N.length,J=Math.min(q,le);let ae;for(ae=0;ae<J;ae++){const ie=N[ae]=K?Lr(N[ae]):Xt(N[ae]);w(A[ae],ie,M,null,U,z,Q,G,K)}q>le?qt(A,U,z,!0,!1,J):E(N,M,H,U,z,Q,G,K,J)},gn=(A,N,M,H,U,z,Q,G,K)=>{let q=0;const le=N.length;let J=A.length-1,ae=le-1;for(;q<=J&&q<=ae;){const ie=A[q],he=N[q]=K?Lr(N[q]):Xt(N[q]);if(En(ie,he))w(ie,he,M,null,U,z,Q,G,K);else break;q++}for(;q<=J&&q<=ae;){const ie=A[J],he=N[ae]=K?Lr(N[ae]):Xt(N[ae]);if(En(ie,he))w(ie,he,M,null,U,z,Q,G,K);else break;J--,ae--}if(q>J){if(q<=ae){const ie=ae+1,he=ie<le?N[ie].el:H;for(;q<=ae;)w(null,N[q]=K?Lr(N[q]):Xt(N[q]),M,he,U,z,Q,G,K),q++}}else if(q>ae)for(;q<=J;)Qe(A[q],U,z,!0),q++;else{const ie=q,he=q,ke=new Map;for(q=he;q<=ae;q++){const Ut=N[q]=K?Lr(N[q]):Xt(N[q]);Ut.key!=null&&ke.set(Ut.key,q)}let Ce,gt=0;const ft=ae-he+1;let yt=!1,Rt=0;const Ar=new Array(ft);for(q=0;q<ft;q++)Ar[q]=0;for(q=ie;q<=J;q++){const Ut=A[q];if(gt>=ft){Qe(Ut,U,z,!0);continue}let sn;if(Ut.key!=null)sn=ke.get(Ut.key);else for(Ce=he;Ce<=ae;Ce++)if(Ar[Ce-he]===0&&En(Ut,N[Ce])){sn=Ce;break}sn===void 0?Qe(Ut,U,z,!0):(Ar[sn-he]=q+1,sn>=Rt?Rt=sn:yt=!0,w(Ut,N[sn],M,null,U,z,Q,G,K),gt++)}const Qs=yt?_1(Ar):mi;for(Ce=Qs.length-1,q=ft-1;q>=0;q--){const Ut=he+q,sn=N[Ut],Js=N[Ut+1],oo=Ut+1<le?Js.el||Js.placeholder:H;Ar[q]===0?w(null,sn,M,oo,U,z,Q,G,K):yt&&(Ce<0||q!==Qs[Ce]?rn(sn,M,oo,2):Ce--)}}},rn=(A,N,M,H,U=null)=>{const{el:z,type:Q,transition:G,children:K,shapeFlag:q}=A;if(q&6){rn(A.component.subTree,N,M,H);return}if(q&128){A.suspense.move(N,M,H);return}if(q&64){Q.move(A,N,M,re);return}if(Q===Lt){r(z,N,M);for(let J=0;J<K.length;J++)rn(K[J],N,M,H);r(A.anchor,N,M);return}if(Q===Vo){v(A,N,M);return}if(H!==2&&q&1&&G)if(H===0)G.beforeEnter(z),r(z,N,M),vt(()=>G.enter(z),U);else{const{leave:J,delayLeave:ae,afterLeave:ie}=G,he=()=>{A.ctx.isUnmounted?s(z):r(z,N,M)},ke=()=>{J(z,()=>{he(),ie&&ie()})};ae?ae(z,he,ke):ke()}else r(z,N,M)},Qe=(A,N,M,H=!1,U=!1)=>{const{type:z,props:Q,ref:G,children:K,dynamicChildren:q,shapeFlag:le,patchFlag:J,dirs:ae,cacheIndex:ie}=A;if(J===-2&&(U=!1),G!=null&&(fr(),Ei(G,null,M,A,!0),hr()),ie!=null&&(N.renderCache[ie]=void 0),le&256){N.ctx.deactivate(A);return}const he=le&1&&ae,ke=!Kr(A);let Ce;if(ke&&(Ce=Q&&Q.onVnodeBeforeUnmount)&&Wt(Ce,N,A),le&6)Pn(A.component,M,H);else{if(le&128){A.suspense.unmount(M,H);return}he&&On(A,null,N,"beforeUnmount"),le&64?A.type.remove(A,N,M,re,H):q&&!q.hasOnce&&(z!==Lt||J>0&&J&64)?qt(q,N,M,!1,!0):(z===Lt&&J&384||!U&&le&16)&&qt(K,N,M),H&&Je(A)}(ke&&(Ce=Q&&Q.onVnodeUnmounted)||he)&&vt(()=>{Ce&&Wt(Ce,N,A),he&&On(A,null,N,"unmounted")},M)},Je=A=>{const{type:N,el:M,anchor:H,transition:U}=A;if(N===Lt){Ir(M,H);return}if(N===Vo){C(A);return}const z=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:G}=U,K=()=>Q(M,z);G?G(A.el,z,K):K()}else z()},Ir=(A,N)=>{let M;for(;A!==N;)M=p(A),s(A),A=M;s(N)},Pn=(A,N,M)=>{const{bum:H,scope:U,job:z,subTree:Q,um:G,m:K,a:q,parent:le,slots:{__:J}}=A;Jl(K),Jl(q),H&&_i(H),le&&ce(J)&&J.forEach(ae=>{le.renderCache[ae]=void 0}),U.stop(),z&&(z.flags|=8,Qe(Q,A,N,M)),G&&vt(G,N),vt(()=>{A.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},qt=(A,N,M,H=!1,U=!1,z=0)=>{for(let Q=z;Q<A.length;Q++)Qe(A[Q],N,M,H,U)},$=A=>{if(A.shapeFlag&6)return $(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const N=p(A.anchor||A.el),M=N&&N[VA];return M?p(M):N};let ee=!1;const X=(A,N,M)=>{A==null?N._vnode&&Qe(N._vnode,null,null,!0):w(N._vnode||null,A,N,null,null,null,M),N._vnode=A,ee||(ee=!0,km(),Gl(),ee=!1)},re={p:w,um:Qe,m:rn,r:Je,mt:ge,mc:E,pc:ne,pbc:T,n:$,o:t};let Ie,Le;return e&&([Ie,Le]=e(re)),{render:X,hydrate:Ie,createApp:c1(X,Ie)}}function qu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function EE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bE(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Lr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&bE(o,a)),a.type===ks&&(a.el=o.el),a.type===at&&!a.el&&(a.el=o.el)}}function _1(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function wE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wE(e)}function Jl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const v1=Symbol.for("v-scx"),E1=()=>pt(v1);function b1(t,e){return gd(t,null,e)}function Vn(t,e,n){return gd(t,e,n)}function gd(t,e,n=$e){const{immediate:r,deep:s,flush:i,once:o}=n,a=mt({},n),c=e&&r||!e&&i!=="post";let u;if(Di){if(i==="sync"){const m=E1();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Mn,m.resume=Mn,m.pause=Mn,m}}const f=wt;a.call=(m,y,w)=>An(m,f,y,w);let h=!1;i==="post"?a.scheduler=m=>{vt(m,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(m,y)=>{y?m():hd(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const p=DA(t,e,a);return Di&&(u?u.push(p):c&&p()),p}function w1(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?TE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Sa(this),a=gd(s,i.bind(r),n);return o(),a}function TE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const T1=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${Hs(e)}Modifiers`];function I1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||$e;let s=n;const i=e.startsWith("update:"),o=i&&T1(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ye(f)?f.trim():f)),o.number&&(s=n.map(Hl)));let a,c=r[a=Mu(e)]||r[a=Mu(pn(e))];!c&&i&&(c=r[a=Mu(Hs(e))]),c&&An(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,An(u,t,6,s)}}function IE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const f=IE(u,e,!0);f&&(a=!0,mt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Fe(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):mt(o,i),Fe(t)&&r.set(t,o),o)}function Lc(t,e){return!t||!Ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Hs(e))||Ne(t,e))}function Wu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:h,data:p,setupState:m,ctx:y,inheritAttrs:w}=t,P=Yl(t);let O,R;try{if(n.shapeFlag&4){const C=s||r,D=C;O=Xt(u.call(D,C,f,h,m,p,y)),R=a}else{const C=e;O=Xt(C.length>1?C(h,{attrs:a,slots:o,emit:c}):C(h,null)),R=e.props?a:S1(a)}}catch(C){Fo.length=0,Ji(C,t,1),O=Ee(at)}let v=O;if(R&&w!==!1){const C=Object.keys(R),{shapeFlag:D}=v;C.length&&D&7&&(i&&C.some(Xh)&&(R=R1(R,i)),v=hn(v,R,!1,!0))}return n.dirs&&(v=hn(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Oi(v,n.transition),O=v,Yl(P),O}function A1(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ns(s)){if(s.type!==at||s.children==="v-if"){if(n)return;n=s}}else return}return n}const S1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ea(n))&&((e||(e={}))[n]=t[n]);return e},R1=(t,e)=>{const n={};for(const r in t)(!Xh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function C1(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$m(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Lc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$m(r,o,u):!0:!!o;return!1}function $m(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lc(n,i))return!0}return!1}function Mc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xl=t=>t.__isSuspense;let jf=0;const P1={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)k1(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}O1(t,e,n,r,s,o,a,c,u)}},hydrate:x1,normalize:N1},yd=P1;function ra(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function k1(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:f}}=c,h=f("div"),p=t.suspense=AE(t,s,r,e,h,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,h,null,r,p,i,o),p.deps>0?(ra(t,"onPending"),ra(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),bi(p,t.ssFallback)):p.resolve(!1,!0)}function O1(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:f}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:y,pendingBranch:w,isInFallback:P,isHydrating:O}=h;if(w)h.pendingBranch=p,En(p,w)?(c(w,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():P&&(O||(c(y,m,n,r,s,null,i,o,a),bi(h,m)))):(h.pendingId=jf++,O?(h.isHydrating=!1,h.activeBranch=w):u(w,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=f("div"),P?(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(y,m,n,r,s,null,i,o,a),bi(h,m))):y&&En(p,y)?(c(y,p,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&En(p,y))c(y,p,n,r,s,h,i,o,a),bi(h,p);else if(ra(e,"onPending"),h.pendingBranch=p,p.shapeFlag&512?h.pendingId=p.component.suspenseId:h.pendingId=jf++,c(null,p,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:R,pendingId:v}=h;R>0?setTimeout(()=>{h.pendingId===v&&h.fallback(m)},R):R===0&&h.fallback(m)}}function AE(t,e,n,r,s,i,o,a,c,u,f=!1){const{p:h,m:p,um:m,n:y,o:{parentNode:w,remove:P}}=u;let O;const R=D1(t);R&&e&&e.pendingBranch&&(O=e.pendingId,e.deps++);const v=t.props?vv(t.props.timeout):void 0,C=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:jf++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(F=!1,S=!1){const{vnode:E,activeBranch:_,pendingBranch:T,pendingId:x,effects:k,parentComponent:I,container:ge}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:F||(ve=_&&T.transition&&T.transition.mode==="out-in",ve&&(_.transition.afterLeave=()=>{x===D.pendingId&&(p(T,ge,i===C?y(_):i,0),Lf(k))}),_&&(w(_.el)===ge&&(i=y(_)),m(_,I,D,!0)),ve||p(T,ge,i,0)),bi(D,T),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...k),se=!0;break}Z=Z.parent}!se&&!ve&&Lf(k),D.effects=[],R&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!S&&e.resolve()),ra(E,"onResolve")},fallback(F){if(!D.pendingBranch)return;const{vnode:S,activeBranch:E,parentComponent:_,container:T,namespace:x}=D;ra(S,"onFallback");const k=y(E),I=()=>{D.isInFallback&&(h(null,F,T,k,_,null,x,a,c),bi(D,F))},ge=F.transition&&F.transition.mode==="out-in";ge&&(E.transition.afterLeave=I),D.isInFallback=!0,m(E,_,null,!0),ge||I()},move(F,S,E){D.activeBranch&&p(D.activeBranch,F,S,E),D.container=F},next(){return D.activeBranch&&y(D.activeBranch)},registerDep(F,S,E){const _=!!D.pendingBranch;_&&D.deps++;const T=F.vnode.el;F.asyncDep.catch(x=>{Ji(x,F,0)}).then(x=>{if(F.isUnmounted||D.isUnmounted||D.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:k}=F;Hf(F,x),T&&(k.el=T);const I=!T&&F.subTree.el;S(F,k,w(T||F.subTree.el),T?null:y(F.subTree),D,o,E),I&&P(I),Mc(F,k.el),_&&--D.deps===0&&D.resolve()})},unmount(F,S){D.isUnmounted=!0,D.activeBranch&&m(D.activeBranch,n,F,S),D.pendingBranch&&m(D.pendingBranch,n,F,S)}};return D}function x1(t,e,n,r,s,i,o,a,c){const u=e.suspense=AE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function N1(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=jm(r?n.default:n),t.ssFallback=r?jm(n.fallback):Ee(at)}function jm(t){let e;if(pe(t)){const n=Ni&&t._c;n&&(t._d=!1,zt()),t=t(),n&&(t._d=!0,e=Yt,RE())}return ce(t)&&(t=A1(t)),t=Xt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function SE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Lf(t)}function bi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Mc(r,s))}function D1(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Lt=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),Fo=[];let Yt=null;function zt(t=!1){Fo.push(Yt=t?null:[])}function RE(){Fo.pop(),Yt=Fo[Fo.length-1]||null}let Ni=1;function Bm(t,e=!1){Ni+=t,t<0&&Yt&&e&&(Yt.hasOnce=!0)}function CE(t){return t.dynamicChildren=Ni>0?Yt||mi:null,RE(),Ni>0&&Yt&&Yt.push(t),t}function sa(t,e,n,r,s,i){return CE(Me(t,e,n,r,s,i,!0))}function sr(t,e,n,r,s){return CE(Ee(t,e,n,r,s,!0))}function Ns(t){return t?t.__v_isVNode===!0:!1}function En(t,e){return t.type===e.type&&t.key===e.key}const PE=({key:t})=>t??null,Sl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Xe(t)||pe(t)?{i:It,r:t,k:e,f:!!n}:t:null);function Me(t,e=null,n=null,r=0,s=null,i=t===Lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&PE(e),ref:e&&Sl(e),scopeId:qv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(_d(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),Ni>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const Ee=L1;function L1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iE)&&(t=at),Ns(t)){const a=hn(t,e,!0);return n&&_d(a,n),Ni>0&&!i&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag=-2,a}if(W1(t)&&(t=t.__vccOpts),e){e=M1(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=ba(a)),Fe(c)&&(ud(c)&&!ce(c)&&(c=mt({},c)),e.style=Oc(c))}const o=Ye(t)?1:Xl(t)?128:Wv(t)?64:Fe(t)?4:pe(t)?2:0;return Me(t,e,n,r,s,o,i,!0)}function M1(t){return t?ud(t)||dE(t)?mt({},t):t:null}function hn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?kE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&PE(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Sl(e)):[i,Sl(e)]:Sl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Oi(f,c.clone(f)),f}function ln(t=" ",e=0){return Ee(ks,null,t,e)}function V1(t,e){const n=Ee(Vo,null,t);return n.staticCount=e,n}function F1(t="",e=!1){return e?(zt(),sr(at,null,t)):Ee(at,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Ee(at):ce(t)?Ee(Lt,null,t.slice()):Ns(t)?Lr(t):Ee(ks,null,String(t))}function Lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function _d(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_d(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!dE(e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[ln(e)]):n=8);t.children=e,t.shapeFlag|=n}function kE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ba([e.class,r.class]));else if(s==="style")e.style=Oc([e.style,r.style]);else if(Ea(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){An(t,e,7,[n,r])}const U1=uE();let $1=0;function j1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||U1,i={uid:$1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mE(r,s),emitsOptions:IE(r,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=I1.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const zs=()=>wt||It;let Zl,Bf;{const t=kc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zl=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),Bf=e("__VUE_SSR_SETTERS__",n=>Di=n)}const Sa=t=>{const e=wt;return Zl(t),t.scope.on(),()=>{t.scope.off(),Zl(e)}},Hm=()=>{wt&&wt.scope.off(),Zl(null)};function OE(t){return t.vnode.shapeFlag&4}let Di=!1;function B1(t,e=!1,n=!1){e&&Bf(e);const{props:r,children:s}=t.vnode,i=OE(t);u1(t,r,i,e),p1(t,s,n||e);const o=i?H1(t,e):void 0;return e&&Bf(!1),o}function H1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,n1);const{setup:r}=n;if(r){fr();const s=t.setupContext=r.length>1?q1(t):null,i=Sa(t),o=Ta(r,t,0,[t.props,s]),a=ed(o);if(hr(),i(),(a||t.sp)&&!Kr(t)&&dd(t),a){if(o.then(Hm,Hm),e)return o.then(c=>{Hf(t,c)}).catch(c=>{Ji(c,t,0)});t.asyncDep=o}else Hf(t,o)}else xE(t)}function Hf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=$v(e)),xE(t)}function xE(t,e,n){const r=t.type;t.render||(t.render=r.render||Mn);{const s=Sa(t);fr();try{r1(t)}finally{hr(),s()}}}const z1={get(t,e){return Dt(t,"get",""),t[e]}};function q1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,z1),slots:t.slots,emit:t.emit,expose:e}}function Vc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($v(fd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mo)return Mo[n](t)},has(e,n){return n in e||n in Mo}})):t.proxy}function zf(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function W1(t){return pe(t)&&"__vccOpts"in t}const je=(t,e)=>xA(t,e,Di);function Ke(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!ce(e)?Ns(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ns(n)&&(n=[n]),Ee(t,e,n))}const K1="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qf;const zm=typeof window<"u"&&window.trustedTypes;if(zm)try{qf=zm.createPolicy("vue",{createHTML:t=>t})}catch{}const NE=qf?t=>qf.createHTML(t):t=>t,G1="http://www.w3.org/2000/svg",Y1="http://www.w3.org/1998/Math/MathML",tr=typeof document<"u"?document:null,qm=tr&&tr.createElement("template"),Q1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?tr.createElementNS(G1,t):e==="mathml"?tr.createElementNS(Y1,t):n?tr.createElement(t,{is:n}):tr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tr.createTextNode(t),createComment:t=>tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qm.innerHTML=NE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=qm.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pr="transition",bo="animation",ia=Symbol("_vtc"),DE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},J1=mt({},Kv,DE),X1=t=>(t.displayName="Transition",t.props=J1,t),Z1=X1((t,{slots:e})=>Ke($A,eS(t),e)),Es=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wm=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function eS(t){const e={};for(const k in t)k in DE||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=tS(s),w=y&&y[0],P=y&&y[1],{onBeforeEnter:O,onEnter:R,onEnterCancelled:v,onLeave:C,onLeaveCancelled:D,onBeforeAppear:F=O,onAppear:S=R,onAppearCancelled:E=v}=e,_=(k,I,ge,ve)=>{k._enterCancelled=ve,bs(k,I?f:a),bs(k,I?u:o),ge&&ge()},T=(k,I)=>{k._isLeaving=!1,bs(k,h),bs(k,m),bs(k,p),I&&I()},x=k=>(I,ge)=>{const ve=k?S:R,Z=()=>_(I,k,ge);Es(ve,[I,Z]),Km(()=>{bs(I,k?c:i),Zn(I,k?f:a),Wm(ve)||Gm(I,r,w,Z)})};return mt(e,{onBeforeEnter(k){Es(O,[k]),Zn(k,i),Zn(k,o)},onBeforeAppear(k){Es(F,[k]),Zn(k,c),Zn(k,u)},onEnter:x(!1),onAppear:x(!0),onLeave(k,I){k._isLeaving=!0;const ge=()=>T(k,I);Zn(k,h),k._enterCancelled?(Zn(k,p),Jm()):(Jm(),Zn(k,p)),Km(()=>{k._isLeaving&&(bs(k,h),Zn(k,m),Wm(C)||Gm(k,r,P,ge))}),Es(C,[k,ge])},onEnterCancelled(k){_(k,!1,void 0,!0),Es(v,[k])},onAppearCancelled(k){_(k,!0,void 0,!0),Es(E,[k])},onLeaveCancelled(k){T(k),Es(D,[k])}})}function tS(t){if(t==null)return null;if(Fe(t))return[Ku(t.enter),Ku(t.leave)];{const e=Ku(t);return[e,e]}}function Ku(t){return vv(t)}function Zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ia]||(t[ia]=new Set)).add(e)}function bs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ia];n&&(n.delete(e),n.size||(t[ia]=void 0))}function Km(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nS=0;function Gm(t,e,n,r){const s=t._endId=++nS,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=rS(t,e);if(!o)return r();const u=o+"end";let f=0;const h=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++f>=c&&h()};setTimeout(()=>{f<c&&h()},a+1),t.addEventListener(u,p)}function rS(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${Pr}Delay`),i=r(`${Pr}Duration`),o=Ym(s,i),a=r(`${bo}Delay`),c=r(`${bo}Duration`),u=Ym(a,c);let f=null,h=0,p=0;e===Pr?o>0&&(f=Pr,h=o,p=i.length):e===bo?u>0&&(f=bo,h=u,p=c.length):(h=Math.max(o,u),f=h>0?o>u?Pr:bo:null,p=f?f===Pr?i.length:c.length:0);const m=f===Pr&&/\b(transform|all)(,|$)/.test(r(`${Pr}Property`).toString());return{type:f,timeout:h,propCount:p,hasTransform:m}}function Ym(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Qm(n)+Qm(t[r])))}function Qm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Jm(){return document.body.offsetHeight}function sS(t,e,n){const r=t[ia];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xm=Symbol("_vod"),iS=Symbol("_vsh"),oS=Symbol(""),aS=/(^|;)\s*display\s*:/;function lS(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Rl(r,a,"")}else for(const o in e)n[o]==null&&Rl(r,o,"");for(const o in n)o==="display"&&(i=!0),Rl(r,o,n[o])}else if(s){if(e!==n){const o=r[oS];o&&(n+=";"+o),r.cssText=n,i=aS.test(n)}}else e&&t.removeAttribute("style");Xm in t&&(t[Xm]=i?r.display:"",t[iS]&&(r.display="none"))}const Zm=/\s*!important$/;function Rl(t,e,n){if(ce(n))n.forEach(r=>Rl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cS(t,e);Zm.test(n)?t.setProperty(Hs(r),n.replace(Zm,""),"important"):t[r]=n}}const eg=["Webkit","Moz","ms"],Gu={};function cS(t,e){const n=Gu[e];if(n)return n;let r=pn(e);if(r!=="filter"&&r in t)return Gu[e]=r;r=Pc(r);for(let s=0;s<eg.length;s++){const i=eg[s]+r;if(i in t)return Gu[e]=i}return e}const tg="http://www.w3.org/1999/xlink";function ng(t,e,n,r,s,i=tA(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(tg,e.slice(6,e.length)):t.setAttributeNS(tg,e,n):n==null||i&&!Ev(n)?t.removeAttribute(e):t.setAttribute(e,i?"":In(n)?String(n):n)}function rg(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?NE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ev(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Fr(t,e,n,r){t.addEventListener(e,n,r)}function uS(t,e,n,r){t.removeEventListener(e,n,r)}const sg=Symbol("_vei");function fS(t,e,n,r,s=null){const i=t[sg]||(t[sg]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=hS(e);if(r){const u=i[e]=mS(r,s);Fr(t,a,u,c)}else o&&(uS(t,a,o,c),i[e]=void 0)}}const ig=/(?:Once|Passive|Capture)$/;function hS(t){let e;if(ig.test(t)){e={};let r;for(;r=t.match(ig);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hs(t.slice(2)),e]}let Yu=0;const dS=Promise.resolve(),pS=()=>Yu||(dS.then(()=>Yu=0),Yu=Date.now());function mS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;An(gS(r,n.value),e,5,[r])};return n.value=t,n.attached=pS(),n}function gS(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const og=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yS=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?sS(t,r,o):e==="style"?lS(t,n,r):Ea(e)?Xh(e)||fS(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_S(t,e,r,o))?(rg(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ng(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?rg(t,pn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ng(t,e,r,o))};function _S(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&og(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return og(e)&&Ye(n)?!1:e in t}const Li=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>_i(e,n):e};function vS(t){t.target.composing=!0}function ag(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ur=Symbol("_assign"),Y9={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ur]=Li(s);const i=r||s.props&&s.props.type==="number";Fr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Hl(a)),t[ur](a)}),n&&Fr(t,"change",()=>{t.value=t.value.trim()}),e||(Fr(t,"compositionstart",vS),Fr(t,"compositionend",ag),Fr(t,"change",ag))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ur]=Li(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Hl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Q9={deep:!0,created(t,e,n){t[ur]=Li(n),Fr(t,"change",()=>{const r=t._modelValue,s=oa(t),i=t.checked,o=t[ur];if(ce(r)){const a=nd(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(Gi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(LE(t,i))})},mounted:lg,beforeUpdate(t,e,n){t[ur]=Li(n),lg(t,e,n)}};function lg(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=nd(e,r.props.value)>-1;else if(Gi(e))s=e.has(r.props.value);else{if(e===n)return;s=wa(e,LE(t,!0))}t.checked!==s&&(t.checked=s)}const J9={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Gi(e);Fr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Hl(oa(o)):oa(o));t[ur](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Wn(()=>{t._assigning=!1})}),t[ur]=Li(r)},mounted(t,{value:e}){cg(t,e)},beforeUpdate(t,e,n){t[ur]=Li(n)},updated(t,{value:e}){t._assigning||cg(t,e)}};function cg(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Gi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=oa(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=nd(e,a)>-1}else o.selected=e.has(a);else if(wa(oa(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function oa(t){return"_value"in t?t._value:t.value}function LE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ES=["ctrl","shift","alt","meta"],bS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ES.some(n=>t[`${n}Key`]&&!e.includes(n))},X9=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=bS[e[o]];if(a&&a(s,e))return}return t(s,...i)})},ME=mt({patchProp:yS},Q1);let Uo,ug=!1;function wS(){return Uo||(Uo=g1(ME))}function TS(){return Uo=ug?Uo:y1(ME),ug=!0,Uo}const IS=(...t)=>{const e=wS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=FE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,VE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},AS=(...t)=>{const e=TS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=FE(r);if(s)return n(s,!0,VE(s))},e};function VE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function FE(t){return Ye(t)?document.querySelector(t):t}const SS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,RS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,CS=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function PS(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){kS(t);return}return e}function kS(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function aa(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!CS.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(SS.test(t)||RS.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,PS)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const OS=/#/g,xS=/&/g,NS=/\//g,DS=/=/g,vd=/\+/g,LS=/%5e/gi,MS=/%60/gi,VS=/%7c/gi,FS=/%20/gi;function US(t){return encodeURI(""+t).replace(VS,"|")}function Wf(t){return US(typeof t=="string"?t:JSON.stringify(t)).replace(vd,"%2B").replace(FS,"+").replace(OS,"%23").replace(xS,"%26").replace(MS,"`").replace(LS,"^").replace(NS,"%2F")}function Qu(t){return Wf(t).replace(DS,"%3D")}function ec(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function $S(t){return ec(t.replace(vd," "))}function jS(t){return ec(t.replace(vd," "))}function Ed(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=$S(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=jS(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function BS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Qu(t)}=${Wf(n)}`).join("&"):`${Qu(t)}=${Wf(e)}`:Qu(t)}function HS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>BS(e,t[e])).filter(Boolean).join("&")}const zS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,qS=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,WS=/^([/\\]\s*){2,}[^/\\]/,KS=/^[\s\0]*(blob|data|javascript|vbscript):$/i,GS=/\/$|\/\?|\/#/,YS=/^\.?\//;function wr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?zS.test(t):qS.test(t)||(e.acceptRelative?WS.test(t):!1)}function QS(t){return!!t&&KS.test(t)}function Kf(t="",e){return e?GS.test(t):t.endsWith("/")}function Mi(t="",e){if(!e)return(Kf(t)?t.slice(0,-1):t)||"/";if(!Kf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function UE(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Kf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function JS(t,e){if(jE(e)||wr(t))return t;const n=Mi(e);return t.startsWith(n)?t:Fc(n,t)}function fg(t,e){if(jE(e))return t;const n=Mi(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function $E(t,e){const n=zE(t),r={...Ed(n.search),...e};return n.search=HS(r),eR(n)}function jE(t){return!t||t==="/"}function XS(t){return t&&t!=="/"}function Fc(t,...e){let n=t||"";for(const r of e.filter(s=>XS(s)))if(n){const s=r.replace(YS,"");n=UE(n)+s}else n=r;return n}function BE(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const o of n)if(!(!o||o==="/")){for(const[a,c]of o.split(e).entries())if(!(!c||c===".")){if(c===".."){if(r.length===1&&wr(r[0]))continue;r.pop(),s--;continue}if(a===1&&r[r.length-1]?.endsWith(":/")){r[r.length-1]+="/"+c;continue}r.push(c),s++}}let i=r.join("/");return s>=0?n[0]?.startsWith("/")&&!i.startsWith("/")?i="/"+i:n[0]?.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,n[n.length-1]?.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function ZS(t,e){return ec(Mi(t))===ec(Mi(e))}const HE=Symbol.for("ufo:protocolRelative");function zE(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,h,p=""]=n;return{protocol:h.toLowerCase(),pathname:p,href:h+p,auth:"",host:"",search:"",hash:""}}if(!wr(t,{acceptRelative:!0}))return hg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:f}=hg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:f,[HE]:!r}}function hg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function eR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[HE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class tR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function nR(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",r=t.request?.url||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new tR(o,t.error?{cause:t.error}:void 0);for(const c of["request","options","response"])Object.defineProperty(a,c,{get(){return t[c]}});for(const[c,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,c,{get(){return t.response&&t.response[u]}});return a}const rR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function dg(t="GET"){return rR.has(t.toUpperCase())}function sR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const iR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),oR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function aR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return oR.test(e)?"json":iR.has(e)||e.startsWith("text/")?"text":"blob"}function lR(t,e,n,r){const s=cR(e?.headers??t?.headers,n?.headers,r);let i;return(n?.query||n?.params||e?.params||e?.query)&&(i={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:i,params:i,headers:s}}function cR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ll(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const uR=new Set([408,409,425,429,500,502,503,504]),fR=new Set([101,204,205,304]);function qE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let f;typeof a.options.retry=="number"?f=a.options.retry:f=dg(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):uR.has(h))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:f-1})}}const u=nR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const f={request:c,options:lR(c,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await ll(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=JS(f.request,f.options.baseURL)),f.options.query&&(f.request=$E(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&dg(f.options.method)&&(sR(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let h;if(!f.options.signal&&f.options.timeout){const m=new r;h=setTimeout(()=>{const y=new Error("[TimeoutError]: The operation was aborted due to timeout");y.name="TimeoutError",y.code=23,m.abort(y)},f.options.timeout),f.options.signal=m.signal}try{f.response=await e(f.request,f.options)}catch(m){return f.error=m,f.options.onRequestError&&await ll(f,f.options.onRequestError),await s(f)}finally{h&&clearTimeout(h)}if((f.response.body||f.response._bodyInit)&&!fR.has(f.response.status)&&f.options.method!=="HEAD"){const m=(f.options.parseResponse?"json":f.options.responseType)||aR(f.response.headers.get("content-type")||"");switch(m){case"json":{const y=await f.response.text(),w=f.options.parseResponse||aa;f.response._data=w(y);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[m]()}}return f.options.onResponse&&await ll(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await ll(f,f.options.onResponseError),await s(f)):f.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>qE({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const tc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),hR=tc.fetch?(...t)=>tc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),dR=tc.Headers,pR=tc.AbortController,mR=qE({fetch:hR,Headers:dR,AbortController:pR}),gR=mR,yR=()=>window?.__NUXT__?.config||{},bd=()=>yR().app,_R=()=>bd().baseURL,vR=()=>bd().buildAssetsDir,wd=(...t)=>BE(Uc(),vR(),...t),Uc=(...t)=>{const e=bd(),n=e.cdnURL||e.baseURL;return t.length?BE(n,...t):n};globalThis.__buildAssetsURL=wd,globalThis.__publicAssetsURL=Uc;globalThis.$fetch||(globalThis.$fetch=gR.create({baseURL:_R()}));"global"in globalThis||(globalThis.global=globalThis);function Gf(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Gf(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const ER={run:t=>t()},bR=()=>ER,WE=typeof console.createTask<"u"?console.createTask:bR;function wR(t,e){const n=e.shift(),r=WE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function TR(t,e){const n=e.shift(),r=WE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Ju(t,e){for(const n of[...t])n(e)}class IR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Gf(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Gf(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(wR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(TR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Ju(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Ju(this._after,s)}):(this._after&&s&&Ju(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function KE(){return new IR}function AR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;Yf.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{Yf.delete(u)}}}}function SR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=AR({...t,...r})),e[n]}}}const nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},pg="__unctx__",RR=nc[pg]||(nc[pg]=SR()),CR=(t,e={})=>RR.get(t,e),mg="__unctx_async_handlers__",Yf=nc[mg]||(nc[mg]=new Set);function wi(t){const e=[];for(const s of Yf){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const gg={name:"page",mode:"out-in"},PR=!1,kR=!1,OR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},xR=null,NR="#__nuxt",GE="nuxt-app",yg=36e5,DR="vite:preloadError";function YE(t=GE){return CR(t,{asyncContext:!1})}const LR="__nuxt_plugin";function MR(t){let e=0;const n={_id:t.id||GE||"nuxt-app",_scope:sd(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.18.0"},get vue(){return n.vueApp.version}},payload:Nn({...t.ssrContext?.payload||{},data:Nn({}),state:Er({}),once:new Set,_errors:Nn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Qi()?n._scope.run(()=>_g(n,s)):_g(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Nn({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const i in s)switch(i){case"data":case"state":case"_errors":Object.assign(n.payload[i],s[i]);break;default:n.payload[i]=s[i]}}n.hooks=KE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;cl(n,o,i),cl(n.vueApp.config.globalProperties,o,i)},cl(n.vueApp,"$nuxt",n),cl(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(DR,i=>{n.callHook("app:chunkError",{error:i.payload}),i.payload.message.includes("Unable to preload CSS")&&i.preventDefault()}),window.useNuxtApp||=Ve;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function VR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function FR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function UR(t,e){const n=new Set,r=[],s=[];let i,o=0;async function a(c){const u=c.dependsOn?.filter(f=>e.some(h=>h._name===f)&&!n.has(f))??[];if(u.length>0)r.push([new Set(u),c]);else{const f=FR(t,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([h,p])=>{h.has(c._name)&&(h.delete(c._name),h.size===0&&(o++,await a(p)))})))}).catch(h=>{if(!c.parallel&&!t.payload.error)throw i;i||=h});c.parallel?s.push(f):await f}}for(const c of e)VR(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i)throw t.payload.error||i}function tn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[LR]:!0,_name:e})}function _g(t,e,n){const r=()=>e();return YE(t._id).set(t),t.vueApp.runWithContext(r)}function QE(t){let e;return Aa()&&(e=zs()?.appContext.app.$nuxt),e||=YE(t).tryUse(),e||null}function Ve(t){const e=QE(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function qs(t){return Ve().$config}function cl(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function $R(t,e){return{ctx:{table:t},matchAll:n=>XE(n,t)}}function JE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,JE(s)])):new Map(Object.entries(t[n]));return e}function jR(t){return $R(JE(t))}function XE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of vg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of vg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...XE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function vg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Xu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Qf(t,e,n=".",r){if(!Xu(e))return Qf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Xu(o)&&Xu(s[i])?s[i]=Qf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function BR(t){return(...e)=>e.reduce((n,r)=>Qf(n,r,"",t),{})}const ZE=BR();function HR(t,e){try{return e in t}catch{return!1}}class Eg extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Jf(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=eb(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function zR(t){if(typeof t=="string")return new Eg(t);if(qR(t))return t;const e=new Eg(t.message??t.statusMessage??"",{cause:t.cause||t});if(HR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Jf(t.statusCode,e.statusCode):t.status&&(e.statusCode=Jf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;eb(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function qR(t){return t?.constructor?.__h3_error__===!0}const WR=/[^\u0009\u0020-\u007E]/g;function eb(t=""){return t.replace(WR,"")}function Jf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const tb=Symbol("layout-meta"),Ds=Symbol("route"),At=()=>Ve()?.$router,$c=()=>Aa()?pt(Ds,Ve()._route):Ve()._route;function Z9(t){return t}const KR=()=>{try{if(Ve()._processingMiddleware)return!0}catch{return!1}return!1},GR=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?Xf(t):At().resolve(t).href;if(e?.open){const{target:c="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([h,p])=>p!==void 0).map(([h,p])=>`${h.toLowerCase()}=${p}`).join(", ");return open(n,c,f),Promise.resolve()}const r=wr(n,{acceptRelative:!0}),s=e?.external||r;if(s){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&QS(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=KR();if(!s&&i){if(e?.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:f}=zE(t);return{path:c,...u&&{query:Ed(u)},...f&&{hash:f},replace:!0}}return{...t,replace:!0}}return t}const o=At(),a=Ve();return s?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function Xf(t){return $E(t.path||"",t.query||{})+(t.hash||"")}const nb="__nuxt_error",jc=()=>kA(Ve().payload,"error"),Is=t=>{const e=Os(t);try{const n=Ve(),r=jc();n.hooks.callHook("app:error",e),r.value||=e}catch{throw e}return e},rb=async(t={})=>{const e=Ve(),n=jc();e.callHook("app:error:cleared",t),t.redirect&&await At().replace(t.redirect),n.value=xR},sb=t=>!!t&&typeof t=="object"&&nb in t,Os=t=>{const e=zR(t);return Object.defineProperty(e,nb,{value:!0,configurable:!1,writable:!1}),e};function bg(t){const e=QR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const YR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function QR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=YR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const JR=-1,XR=-2,ZR=-3,eC=-4,tC=-5,nC=-6;function rC(t,e){return sC(JSON.parse(t),e)}function sC(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===JR)return;if(i===ZR)return NaN;if(i===eC)return 1/0;if(i===tC)return-1/0;if(i===nC)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e?.[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let m=1;m<a.length;m+=1)f.add(s(a[m]));break;case"Map":const h=new Map;r[i]=h;for(let m=1;m<a.length;m+=2)h.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[c],y=a[1],w=bg(y),P=new m(w);r[i]=P;break}case"ArrayBuffer":{const m=a[1],y=bg(m);r[i]=y;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const f=a[u];f!==XR&&(c[u]=s(f))}}else{const c={};r[i]=c;for(const u in a){const f=a[u];c[u]=s(f)}}return r[i]}return s(0)}const iC=new Set(["link","style","script","noscript"]),oC=new Set(["title","titleTemplate","script","style","noscript"]),wg=new Set(["base","meta","link","style","script","noscript"]),aC=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),lC=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),cC=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),uC=new Set(["templateParams","htmlAttrs","bodyAttrs"]),fC=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const hC=["name","property","http-equiv"],dC=new Set(["viewport","description","keywords","robots"]);function ib(t){const e=t.split(":");return e.length?fC.has(e[1]):!1}function Zf(t){const{props:e,tag:n}=t;if(lC.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of hC)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=dC.has(s),c=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${c}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(oC.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Tg(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function rc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>rc(i,e));if(s?.constructor===Object){const i={};for(const o of Object.keys(s))i[o]=rc(s[o],e,o);return i}return s}function pC(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function ob(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=pC(n,r);return}if(cC.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function mC(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=ob({tag:t,props:{}},n);return r.key&&iC.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function gC(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=rc(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(mC(s,o))}),r.flat()}const eh=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Ig={base:-10,title:10},yC={critical:-8,high:-1,low:2},Ag={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},_C=/@import/,wo=t=>t===""||t===!0;function vC(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=yC[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Ag;if(e.tag in Ig)n=Ig[e.tag];else if(e.tag==="meta"){const i=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;i&&(n=Ag.meta[i])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?wo(e.props.async)?n=s.script.async:e.props.src&&!wo(e.props.defer)&&!wo(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=s.script.sync:wo(e.props.defer)&&e.props.src&&!wo(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&_C.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function Sg(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function EC(t={}){const e=KE();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:a=>Sg(o,a),push(a,c){const u={...c||{}};delete u.head;const f=u._index??o._entryCount++,h={_i:f,input:a,options:u},p={_poll(m=!1){o.dirty=!0,!m&&i.add(f),e.callHook("entries:updated",o)},dispose(){r.delete(f)&&o.invalidate()},patch(m){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(h.input=m,r.set(f,h),p._poll())}};return p.patch(a),p},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);i.size;){const p=i.values().next().value;i.delete(p);const m=r.get(p);if(m){const y={tags:gC(m.input,t.propResolvers||[]).map(w=>Object.assign(w,m.options)),entry:m};await e.callHook("entries:normalize",y),m._tags=y.tags.map((w,P)=>(w._w=vC(o,w),w._p=(m._i<<10)+P,w._d=Zf(w),w))}}let c=!1;a.entries.flatMap(p=>(p._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(eh).reduce((p,m)=>{const y=String(m._d||m._p);if(!p.has(y))return p.set(y,m);const w=p.get(y);if((m?.tagDuplicateStrategy||(uC.has(m.tag)?"merge":null)||(m.key&&m.key===w.key?"merge":null))==="merge"){const O={...w.props};Object.entries(m.props).forEach(([R,v])=>O[R]=R==="style"?new Map([...w.props.style||new Map,...v]):R==="class"?new Set([...w.props.class||new Set,...v]):v),p.set(y,{...m,props:O})}else m._p>>10===w._p>>10&&m.tag==="meta"&&ib(y)?(p.set(y,Object.assign([...Array.isArray(w)?w:[w],m],m)),c=!0):(m._w===w._w?m._p>w._p:m?._w<w?._w)&&p.set(y,m);return p},a.tagMap);const u=a.tagMap.get("title"),f=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,f){const p=f?.textContent;if(o._titleTemplate=p,p){let m=typeof p=="function"?p(u?.textContent):p;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",u?.textContent||"")),u?m===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:m}):(f.tag="title",f.textContent=m)}}a.tags=Array.from(a.tagMap.values()),c&&(a.tags=a.tags.flat().sort(eh)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const h=[];for(const p of a.tags){const{innerHTML:m,tag:y,props:w}=p;if(aC.has(y)&&!(Object.keys(w).length===0&&!p.innerHTML&&!p.textContent)&&!(y==="meta"&&!w.content&&!w["http-equiv"]&&!w.charset)){if(y==="script"&&m){if(w.type?.endsWith("json")){const P=typeof m=="string"?m:JSON.stringify(m);p.innerHTML=P.replace(/</g,"\\u003C")}else typeof m=="string"&&(p.innerHTML=m.replace(new RegExp(`</${y}`,"g"),`<\\/${y}`));p._d=Zf(p)}h.push(p)}}return h},invalidate(){for(const a of r.values())i.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>Sg(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Mr="%separator",bC=new RegExp(`${Mr}(?:\\s*${Mr})*`,"g");function wC(t,e,n=!1){let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");r=t[e.substring(0,s)]?.[e.substring(s+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function ul(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Mr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Mr||!i.includes(a))return a;const c=wC(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Mr)&&(t=t.slice(0,-Mr.length)),t.startsWith(Mr)&&(t=t.slice(Mr.length)),t=t.replace(bC,n||"").trim()),t}const Rg=t=>t.includes(":key")?t:t.split(":").join(":key:"),TC={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Rg(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Rg(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(eh))}}},IC={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function th(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>th(n)));if(t?.constructor===Object){const n={};for(const r of Object.keys(t))n[r]=await th(t[r]);return n}return t}const AC={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(th(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},SC={meta:"content",link:"href",htmlAttrs:"lang"},RC=["innerHTML","textContent"],CC=t=>({key:"template-params",hooks:{"entries:normalize":e=>{const n=e.tags.filter(r=>r.tag==="templateParams"&&r.mode==="server")?.[0]?.props||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...t._ssrPayload?.templateParams||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{const r=e.get("templateParams")?.props||{},s=r.separator||"|";delete r.separator,r.pageTitle=ul(r.pageTitle||t._title||"",r,s);for(const i of n){if(i.processTemplateParams===!1)continue;const o=SC[i.tag];if(o&&typeof i.props[o]=="string")i.props[o]=ul(i.props[o],r,s);else if(i.processTemplateParams||i.tag==="titleTemplate"||i.tag==="title")for(const a of RC)typeof i[a]=="string"&&(i[a]=ul(i[a],r,s,i.tag==="script"&&i.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=ul(n.textContent,t._templateParams,t._separator))}}}),PC=(t,e)=>Xe(e)?TA(e):e,Td="usehead";function kC(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Td,t)}}.install}function OC(){if(Aa()){const t=pt(Td);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function xC(t,e={}){const n=e.head||OC();return n.ssr?n.push(t||{},e):NC(n,t,e)}function NC(t,e,n={}){const r=Qt(!1);let s;return b1(()=>{const o=r.value?{}:rc(e,PC);s?s.patch(o):s=t.push(o,n)}),zs()&&(Xi(()=>{s.dispose()}),Zv(()=>{r.value=!0}),Xv(()=>{r.value=!1})),s}function ab(t){const e=t||QE();return e?.ssrContext?.head||e?.runWithContext(()=>{if(Aa())return pt(Td)})}function Cg(t,e={}){const n=ab(e.nuxt);if(n)return xC(t,{head:n,...e})}const DC="modulepreload",LC=function(t,e){return new URL(t,e).href},Pg={},Oe=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=u(n.map(f=>{if(f=LC(f,r),f in Pg)return;Pg[f]=!0;const h=f.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const P=o[w];if(P.href===f&&(!h||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${p}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":DC,h||(y.as="script"),y.crossOrigin="",y.href=f,c&&y.setAttribute("nonce",c),document.head.appendChild(y),h)return new Promise((w,P)=>{y.addEventListener("load",w),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Cl,Pl;function MC(){return Cl=$fetch(wd(`builds/meta/${qs().app.buildId}.json`),{responseType:"json"}),Cl.then(t=>{Pl=jR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Cl}function Bc(){return Cl||MC()}async function Id(t){const e=typeof t=="string"?t:t.path;if(await Bc(),!Pl)return console.error("[nuxt] Error creating app manifest matcher.",Pl),{};try{return ZE({},...Pl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function kg(t,e={}){if(!await cb(t))return null;const r=await FC(t,e);return await lb(r)||null}const VC="_payload.json";async function FC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||wr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=qs(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await cb(t)?i:r.app.baseURL;return Fc(o,n.pathname,VC+(s?`?${s}`:""))}async function lb(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(ub));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function cb(t=$c().path){const e=Ve();return t=Mi(t),(await Bc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Id({path:t});return!!r.prerender&&!r.redirect})}let ws=null;async function UC(){if(ws)return ws;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await ub(t.textContent||""),n=t.dataset.src?await lb(t.dataset.src):void 0;return ws={...e,...n,...window.__NUXT__},ws.config?.public&&(ws.config.public=Er(ws.config.public)),ws}async function ub(t){return await rC(t,Ve()._payloadRevivers)}function $C(t,e){Ve()._payloadRevivers[t]=e}const jC=[["NuxtError",t=>Os(t)],["EmptyShallowRef",t=>qn(t==="_"?void 0:t==="0n"?BigInt(0):aa(t))],["EmptyRef",t=>Qt(t==="_"?void 0:t==="0n"?BigInt(0):aa(t))],["ShallowRef",t=>qn(t)],["ShallowReactive",t=>Nn(t)],["Ref",t=>Qt(t)],["Reactive",t=>Er(t)]],BC=tn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of jC)$C(r,s);Object.assign(t.payload,([e,n]=wi(()=>t.runWithContext(UC)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Ad(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{const i=new Map,o=new Promise(m=>{t.resolveTags().then(y=>{m(y.map(w=>{const P=i.get(w._d)||0,O={tag:w,id:(P?`${w._d}:${P}`:w._d)||Tg(w),shouldRender:!0};return w._d&&ib(w._d)&&i.set(w._d,P+1),O}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const y=n[m]?.children;for(const w of y){const P=w.tagName.toLowerCase();if(!wg.has(P))continue;const O=ob({tag:P,props:{}},{innerHTML:w.innerHTML,...w.getAttributeNames().reduce((R,v)=>(R[v]=w.getAttribute(v),R),{})||{}});if(O.key=w.getAttribute("data-hid")||void 0,O._d=Zf(O)||Tg(O),a.elMap.has(O._d)){let R=1,v=O._d;for(;a.elMap.has(v);)v=`${O._d}:${R++}`;a.elMap.set(v,w)}else a.elMap.set(O._d,w)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(m,y,w){const P=`${m}:${y}`;a.sideEffects[P]=w,delete a.pendingSideEffects[P]}function u({id:m,$el:y,tag:w}){const P=w.tag.endsWith("Attrs");a.elMap.set(m,y),P||(w.textContent&&w.textContent!==y.textContent&&(y.textContent=w.textContent),w.innerHTML&&w.innerHTML!==y.innerHTML&&(y.innerHTML=w.innerHTML),c(m,"el",()=>{y?.remove(),a.elMap.delete(m)}));for(const O in w.props){if(!Object.prototype.hasOwnProperty.call(w.props,O))continue;const R=w.props[O];if(O.startsWith("on")&&typeof R=="function"){const C=y?.dataset;if(C&&C[`${O}fired`]){const D=O.slice(0,-5);R.call(y,new Event(D.substring(2)))}y.getAttribute(`data-${O}`)!==""&&((w.tag==="bodyAttrs"?n.defaultView:y).addEventListener(O.substring(2),R.bind(y)),y.setAttribute(`data-${O}`,""));continue}const v=`attr:${O}`;if(O==="class"){if(!R)continue;for(const C of R)P&&c(m,`${v}:${C}`,()=>y.classList.remove(C)),!y.classList.contains(C)&&y.classList.add(C)}else if(O==="style"){if(!R)continue;for(const[C,D]of R)c(m,`${v}:${C}`,()=>{y.style.removeProperty(C)}),y.style.setProperty(C,D)}else R!==!1&&R!==null&&(y.getAttribute(O)!==R&&y.setAttribute(O,R===!0?"":String(R)),P&&c(m,v,()=>y.removeAttribute(O)))}}const f=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const m of p){const{tag:y,shouldRender:w,id:P}=m;if(w){if(y.tag==="title"){n.title=y.textContent,c("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(P),m.$el?u(m):wg.has(y.tag)&&f.push(m)}}for(const m of f){const y=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),u(m),h[y]=h[y]||n.createDocumentFragment(),h[y].appendChild(m.$el)}for(const m of p)await t.hooks.callHook("dom:renderTag",m,n,c);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function HC(t={}){const e=t.domOptions?.render||Ad;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return EC({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function zC(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function qC(t={}){const e=HC({domOptions:{render:zC(()=>Ad(e),n=>setTimeout(n,0))},...t});return e.install=kC(e),e}const WC={disableDefaults:!0,disableCapoSorting:!1,plugins:[IC,AC,CC,TC]},KC=tn({name:"nuxt:head",enforce:"pre",setup(t){const e=qC(WC);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Ad(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ai=typeof document<"u";function fb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function GC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fb(t.default)}const xe=Object.assign;function Zu(t,e){const n={};for(const r in e){const s=e[r];n[r]=Sn(s)?s.map(t):t(s)}return n}const $o=()=>{},Sn=Array.isArray,hb=/#/g,YC=/&/g,QC=/\//g,JC=/=/g,XC=/\?/g,db=/\+/g,ZC=/%5B/g,eP=/%5D/g,pb=/%5E/g,tP=/%60/g,mb=/%7B/g,nP=/%7C/g,gb=/%7D/g,rP=/%20/g;function Sd(t){return encodeURI(""+t).replace(nP,"|").replace(ZC,"[").replace(eP,"]")}function sP(t){return Sd(t).replace(mb,"{").replace(gb,"}").replace(pb,"^")}function nh(t){return Sd(t).replace(db,"%2B").replace(rP,"+").replace(hb,"%23").replace(YC,"%26").replace(tP,"`").replace(mb,"{").replace(gb,"}").replace(pb,"^")}function iP(t){return nh(t).replace(JC,"%3D")}function oP(t){return Sd(t).replace(hb,"%23").replace(XC,"%3F")}function aP(t){return t==null?"":oP(t).replace(QC,"%2F")}function la(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lP=/\/$/,cP=t=>t.replace(lP,"");function ef(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=dP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:la(o)}}function uP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Og(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Vi(e.matched[r],n.matched[s])&&yb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hP(t[n],e[n]))return!1;return!0}function hP(t,e){return Sn(t)?xg(t,e):Sn(e)?xg(e,t):t===e}function xg(t,e){return Sn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ca;(function(t){t.pop="pop",t.push="push"})(ca||(ca={}));var jo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(jo||(jo={}));function pP(t){if(!t)if(ai){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cP(t)}const mP=/^[^#]+#/;function gP(t,e){return t.replace(mP,"#")+e}function yP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hc=()=>({left:window.scrollX,top:window.scrollY});function _P(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ng(t,e){return(history.state?history.state.position-e:-1)+t}const rh=new Map;function vP(t,e){rh.set(t,e)}function EP(t){const e=rh.get(t);return rh.delete(t),e}let bP=()=>location.protocol+"//"+location.host;function _b(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Og(c,"")}return Og(n,t)+r+s}function wP(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=_b(t,location),y=n.value,w=e.value;let P=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}P=w?p.position-w.position:0}else r(m);s.forEach(O=>{O(n.value,y,{delta:P,type:ca.pop,direction:P?P>0?jo.forward:jo.back:jo.unknown})})};function c(){o=n.value}function u(p){s.push(p);const m=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(xe({},p.state,{scroll:Hc()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Dg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Hc():null}}function TP(t){const{history:e,location:n}=window,r={value:_b(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:bP()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(c,u){const f=xe({},e.state,Dg(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=xe({},s.value,e.state,{forward:c,scroll:Hc()});i(f.current,f,!0);const h=xe({},Dg(r.value,c,null),{position:f.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function IP(t){t=pP(t);const e=TP(t),n=wP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:gP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function AP(t){return typeof t=="string"||t&&typeof t=="object"}function vb(t){return typeof t=="string"||typeof t=="symbol"}const Eb=Symbol("");var Lg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lg||(Lg={}));function Fi(t,e){return xe(new Error,{type:t,[Eb]:!0},e)}function er(t,e){return t instanceof Error&&Eb in t&&(e==null||!!(t.type&e))}const Mg="[^/]+?",SP={sensitive:!1,strict:!1,start:!0,end:!0},RP=/[.+*?^${}()[\]/\\]/g;function CP(t,e){const n=xe({},SP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(RP,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:w,optional:P,regexp:O}=p;i.push({name:y,repeatable:w,optional:P});const R=O||Mg;if(R!==Mg){m+=10;try{new RegExp(`(${R})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+C.message)}}let v=w?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(v=P&&u.length<2?`(?:/${v})`:"/"+v),P&&(v+="?"),s+=v,m+=20,P&&(m+=-8),w&&(m+=-20),R===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",y=i[p-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:y,repeatable:w,optional:P}=m,O=y in u?u[y]:"";if(Sn(O)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Sn(O)?O.join("/"):O;if(!R)if(P)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);f+=R}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function PP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=PP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vg(r))return 1;if(Vg(s))return-1}return s.length-r.length}function Vg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kP={type:0,value:""},OP=/[a-zA-Z0-9_]/;function xP(t){if(!t)return[[]];if(t==="/")return[[kP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:OP.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function NP(t,e,n){const r=CP(xP(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DP(t,e){const n=[],r=new Map;e=jg({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const y=!m,w=Ug(h);w.aliasOf=m&&m.record;const P=jg(e,h),O=[w];if("alias"in h){const C=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of C)O.push(Ug(xe({},w,{components:m?m.record.components:w.components,path:D,aliasOf:m?m.record:w})))}let R,v;for(const C of O){const{path:D}=C;if(p&&D[0]!=="/"){const F=p.record.path,S=F[F.length-1]==="/"?"":"/";C.path=p.record.path+(D&&S+D)}if(R=NP(C,p,P),m?m.alias.push(R):(v=v||R,v!==R&&v.alias.push(R),y&&h.name&&!$g(R)&&o(h.name)),wb(R)&&c(R),w.children){const F=w.children;for(let S=0;S<F.length;S++)i(F[S],R,m&&m.children[S])}m=m||R}return v?()=>{o(v)}:$o}function o(h){if(vb(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){const p=VP(h,n);n.splice(p,0,h),h.record.name&&!$g(h)&&r.set(h.record.name,h)}function u(h,p){let m,y={},w,P;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw Fi(1,{location:h});P=m.record.name,y=xe(Fg(p.params,m.keys.filter(v=>!v.optional).concat(m.parent?m.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),h.params&&Fg(h.params,m.keys.map(v=>v.name))),w=m.stringify(y)}else if(h.path!=null)w=h.path,m=n.find(v=>v.re.test(w)),m&&(y=m.parse(w),P=m.record.name);else{if(m=p.name?r.get(p.name):n.find(v=>v.re.test(p.path)),!m)throw Fi(1,{location:h,currentLocation:p});P=m.record.name,y=xe({},p.params,h.params),w=m.stringify(y)}const O=[];let R=m;for(;R;)O.unshift(R.record),R=R.parent;return{name:P,path:w,params:y,matched:O,meta:MP(O)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Fg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ug(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:LP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function LP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $g(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MP(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function jg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function VP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bb(t,e[i])<0?r=i:n=i+1}const s=FP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function FP(t){let e=t;for(;e=e.parent;)if(wb(e)&&bb(t,e)===0)return e}function wb({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function UP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(db," "),o=i.indexOf("="),a=la(o<0?i:i.slice(0,o)),c=o<0?null:la(i.slice(o+1));if(a in e){let u=e[a];Sn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Bg(t){let e="";for(let n in t){const r=t[n];if(n=iP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(r)?r.map(i=>i&&nh(i)):[r&&nh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $P(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Sn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jP=Symbol(""),Hg=Symbol(""),Rd=Symbol(""),Cd=Symbol(""),sh=Symbol("");function To(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Fi(4,{from:n,to:e})):p instanceof Error?c(p):AP(p)?c(Fi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>c(p))})}function tf(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fb(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Vr(f,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=GC(f)?f.default:f;o.mods[a]=f,o.components[a]=h;const m=(h.__vccOpts||h)[e];return m&&Vr(m,n,r,o,a,s)()}))}}return i}function zg(t){const e=pt(Rd),n=pt(Cd),r=je(()=>{const c=ot(t.to);return e.resolve(c)}),s=je(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Vi.bind(null,f));if(p>-1)return p;const m=qg(c[u-2]);return u>1&&qg(f)===m&&h[h.length-1].path!==m?h.findIndex(Vi.bind(null,c[u-2])):p}),i=je(()=>s.value>-1&&WP(n.params,r.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&yb(n.params,r.value.params));function a(c={}){if(qP(c)){const u=e[ot(t.replace)?"replace":"push"](ot(t.to)).catch($o);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function BP(t){return t.length===1?t[0]:t}const HP=mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zg,setup(t,{slots:e}){const n=Er(zg(t)),{options:r}=pt(Rd),s=je(()=>({[Wg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&BP(e.default(n));return t.custom?i:Ke("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zP=HP;function qP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Sn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wg=(t,e,n)=>t??e??n,KP=mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pt(sh),s=je(()=>t.route||r.value),i=pt(Hg,0),o=je(()=>{let u=ot(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=je(()=>s.value.matched[o.value]);Gr(Hg,je(()=>o.value+1)),Gr(jP,a),Gr(sh,s);const c=Qt();return Vn(()=>[c.value,a.value,t.name],([u,f,h],[p,m,y])=>{f&&(f.instances[h]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!Vi(f,m)||!p)&&(f.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return Kg(n.default,{Component:p,route:u});const m=h.props[f],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=Ke(p,xe({},y,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return Kg(n.default,{Component:P,route:u})||P}}});function Kg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Tb=KP;function GP(t){const e=DP(t.routes,t),n=t.parseQuery||UP,r=t.stringifyQuery||Bg,s=t.history,i=To(),o=To(),a=To(),c=qn(an);let u=an;ai&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Zu.bind(null,$=>""+$),h=Zu.bind(null,aP),p=Zu.bind(null,la);function m($,ee){let X,re;return vb($)?(X=e.getRecordMatcher($),re=ee):re=$,e.addRoute(re,X)}function y($){const ee=e.getRecordMatcher($);ee&&e.removeRoute(ee)}function w(){return e.getRoutes().map($=>$.record)}function P($){return!!e.getRecordMatcher($)}function O($,ee){if(ee=xe({},ee||c.value),typeof $=="string"){const N=ef(n,$,ee.path),M=e.resolve({path:N.path},ee),H=s.createHref(N.fullPath);return xe(N,M,{params:p(M.params),hash:la(N.hash),redirectedFrom:void 0,href:H})}let X;if($.path!=null)X=xe({},$,{path:ef(n,$.path,ee.path).path});else{const N=xe({},$.params);for(const M in N)N[M]==null&&delete N[M];X=xe({},$,{params:h(N)}),ee.params=h(ee.params)}const re=e.resolve(X,ee),Ie=$.hash||"";re.params=f(p(re.params));const Le=uP(r,xe({},$,{hash:sP(Ie),path:re.path})),A=s.createHref(Le);return xe({fullPath:Le,hash:Ie,query:r===Bg?$P($.query):$.query||{}},re,{redirectedFrom:void 0,href:A})}function R($){return typeof $=="string"?ef(n,$,c.value.path):xe({},$)}function v($,ee){if(u!==$)return Fi(8,{from:ee,to:$})}function C($){return S($)}function D($){return C(xe(R($),{replace:!0}))}function F($){const ee=$.matched[$.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X($):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=R(re):{path:re},re.params={}),xe({query:$.query,hash:$.hash,params:re.path!=null?{}:$.params},re)}}function S($,ee){const X=u=O($),re=c.value,Ie=$.state,Le=$.force,A=$.replace===!0,N=F(X);if(N)return S(xe(R(N),{state:typeof N=="object"?xe({},Ie,N.state):Ie,force:Le,replace:A}),ee||X);const M=X;M.redirectedFrom=ee;let H;return!Le&&fP(r,re,X)&&(H=Fi(16,{to:M,from:re}),rn(re,re,!0,!1)),(H?Promise.resolve(H):T(M,re)).catch(U=>er(U)?er(U,2)?U:gn(U):ne(U,M,re)).then(U=>{if(U){if(er(U,2))return S(xe({replace:A},R(U.to),{state:typeof U.to=="object"?xe({},Ie,U.to.state):Ie,force:Le}),ee||M)}else U=k(M,re,!0,A,Ie);return x(M,re,U),U})}function E($,ee){const X=v($,ee);return X?Promise.reject(X):Promise.resolve()}function _($){const ee=Ir.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext($):$()}function T($,ee){let X;const[re,Ie,Le]=YP($,ee);X=tf(re.reverse(),"beforeRouteLeave",$,ee);for(const N of re)N.leaveGuards.forEach(M=>{X.push(Vr(M,$,ee))});const A=E.bind(null,$,ee);return X.push(A),qt(X).then(()=>{X=[];for(const N of i.list())X.push(Vr(N,$,ee));return X.push(A),qt(X)}).then(()=>{X=tf(Ie,"beforeRouteUpdate",$,ee);for(const N of Ie)N.updateGuards.forEach(M=>{X.push(Vr(M,$,ee))});return X.push(A),qt(X)}).then(()=>{X=[];for(const N of Le)if(N.beforeEnter)if(Sn(N.beforeEnter))for(const M of N.beforeEnter)X.push(Vr(M,$,ee));else X.push(Vr(N.beforeEnter,$,ee));return X.push(A),qt(X)}).then(()=>($.matched.forEach(N=>N.enterCallbacks={}),X=tf(Le,"beforeRouteEnter",$,ee,_),X.push(A),qt(X))).then(()=>{X=[];for(const N of o.list())X.push(Vr(N,$,ee));return X.push(A),qt(X)}).catch(N=>er(N,8)?N:Promise.reject(N))}function x($,ee,X){a.list().forEach(re=>_(()=>re($,ee,X)))}function k($,ee,X,re,Ie){const Le=v($,ee);if(Le)return Le;const A=ee===an,N=ai?history.state:{};X&&(re||A?s.replace($.fullPath,xe({scroll:A&&N&&N.scroll},Ie)):s.push($.fullPath,Ie)),c.value=$,rn($,ee,X,A),gn()}let I;function ge(){I||(I=s.listen(($,ee,X)=>{if(!Pn.listening)return;const re=O($),Ie=F(re);if(Ie){S(xe(Ie,{replace:!0,force:!0}),re).catch($o);return}u=re;const Le=c.value;ai&&vP(Ng(Le.fullPath,X.delta),Hc()),T(re,Le).catch(A=>er(A,12)?A:er(A,2)?(S(xe(R(A.to),{force:!0}),re).then(N=>{er(N,20)&&!X.delta&&X.type===ca.pop&&s.go(-1,!1)}).catch($o),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(A,re,Le))).then(A=>{A=A||k(re,Le,!1),A&&(X.delta&&!er(A,8)?s.go(-X.delta,!1):X.type===ca.pop&&er(A,20)&&s.go(-1,!1)),x(re,Le,A)}).catch($o)}))}let ve=To(),Z=To(),se;function ne($,ee,X){gn($);const re=Z.list();return re.length?re.forEach(Ie=>Ie($,ee,X)):console.error($),Promise.reject($)}function Be(){return se&&c.value!==an?Promise.resolve():new Promise(($,ee)=>{ve.add([$,ee])})}function gn($){return se||(se=!$,ge(),ve.list().forEach(([ee,X])=>$?X($):ee()),ve.reset()),$}function rn($,ee,X,re){const{scrollBehavior:Ie}=t;if(!ai||!Ie)return Promise.resolve();const Le=!X&&EP(Ng($.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return Wn().then(()=>Ie($,ee,Le)).then(A=>A&&_P(A)).catch(A=>ne(A,$,ee))}const Qe=$=>s.go($);let Je;const Ir=new Set,Pn={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:w,resolve:O,options:t,push:C,replace:D,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:Be,install($){const ee=this;$.component("RouterLink",zP),$.component("RouterView",Tb),$.config.globalProperties.$router=ee,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(c)}),ai&&!Je&&c.value===an&&(Je=!0,C(s.location).catch(Ie=>{}));const X={};for(const Ie in an)Object.defineProperty(X,Ie,{get:()=>c.value[Ie],enumerable:!0});$.provide(Rd,ee),$.provide(Cd,Nn(X)),$.provide(sh,c);const re=$.unmount;Ir.add($),$.unmount=function(){Ir.delete($),Ir.size<1&&(u=an,I&&I(),I=null,c.value=an,Je=!1,se=!1),re()}}};function qt($){return $.reduce((ee,X)=>ee.then(()=>_(X)),Promise.resolve())}return Pn}function YP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Vi(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Vi(u,c))||s.push(c))}return[n,r,s]}function Ib(t){return pt(Cd)}const QP=/(:\w+)\([^)]+\)/g,JP=/(:\w+)[?+*]/g,XP=/:\w+/g,ZP=(t,e)=>e.path.replace(QP,"$1").replace(JP,"$1").replace(XP,n=>t.params[n.slice(1)]?.toString()||""),ih=(t,e)=>{const n=t.route.matched.find(s=>s.components?.default===t.Component.type),r=e??n?.meta.key??(n&&ZP(t.route,n));return typeof r=="function"?r(t.route):r},ek=(t,e)=>({default:()=>t?Ke(GA,t===!0?{}:t,e):e});function Pd(t){return Array.isArray(t)?t:[t]}const nf=[{name:"Bio",path:"/Bio",component:()=>Oe(()=>import("./DH16Knzp.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>Oe(()=>import("./UAzp_pwr.js"),__vite__mapDeps([2,3,4]),import.meta.url)},{name:"Login",path:"/Login",component:()=>Oe(()=>import("./C1qWXiJg.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>Oe(()=>import("./C7RjiAZp.js"),__vite__mapDeps([5,6,7]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>Oe(()=>import("./D-RDL6p4.js"),__vite__mapDeps([8,9]),import.meta.url)},{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Oe(()=>import("./B0XIxG75.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:{middleware:"auth"},component:()=>Oe(()=>import("./D11FW_jc.js"),__vite__mapDeps([10,3,11]),import.meta.url)},{name:"Admin",path:"/Admin",meta:{middleware:"auth"},component:()=>Oe(()=>import("./BUqOiRXO.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Oe(()=>import("./F5aGuhH4.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Oe(()=>import("./B8mJ8z-U.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Oe(()=>import("./B2CaaIOq.js"),[],import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>Oe(()=>import("./ZjDetXem.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Oe(()=>import("./C4debubH.js"),[],import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Oe(()=>import("./D0Owwbtu.js"),__vite__mapDeps([16,6,7,17]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Oe(()=>import("./DnksU2aI.js"),__vite__mapDeps([18,19,6,7,20]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>Oe(()=>import("./897YflGc.js"),__vite__mapDeps([21,22]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Oe(()=>import("./CjQW891b.js"),__vite__mapDeps([23,6,7]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Oe(()=>import("./Cuhs51Nd.js"),__vite__mapDeps([24,6,7,25]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Oe(()=>import("./5sp9u389.js"),__vite__mapDeps([26,27]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Oe(()=>import("./B9KRc2I-.js"),__vite__mapDeps([28,6,7]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Oe(()=>import("./DTAjPQgn.js"),__vite__mapDeps([29,6,7]),import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:{middleware:"auth"},component:()=>Oe(()=>import("./Z0aTa7MX.js"),__vite__mapDeps([30,19,11,18,6,7,20,31]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Oe(()=>import("./B90HO7GV.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Oe(()=>import("./CttxpOQU.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Oe(()=>import("./W2g0u-di.js"),__vite__mapDeps([32,6,7,33]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Oe(()=>import("./BIwgEM3G.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Oe(()=>import("./-kdPGwWx.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Oe(()=>import("./C1cayssF.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Oe(()=>import("./B7-zOfob.js"),[],import.meta.url)}],Ab=(t,e)=>({default:()=>t?Ke(Z1,t===!0?{}:t,e):e.default?.()}),tk=/(:\w+)\([^)]+\)/g,nk=/(:\w+)[?+*]/g,rk=/:\w+/g;function Gg(t){const e=t?.meta.key??t.path.replace(tk,"$1").replace(nk,"$1").replace(rk,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function sk(t,e){return t===e||e===an?!1:Gg(t)!==Gg(e)?!0:!t.matched.every((r,s)=>r.components&&r.components.default===e.matched[s]?.components?.default)}function ik(t,e=!1){if(t){if(t.nodeName==="#comment"&&t.nodeValue==="[")return Sb(t,[],e);if(e){const n=t.cloneNode(!0);return n.querySelectorAll("[data-island-slot]").forEach(r=>{r.innerHTML=""}),[n.outerHTML]}return[t.outerHTML]}}function Sb(t,e=[],n=!1){if(t&&t.nodeName){if(ak(t))return e;if(!ok(t)){const r=t.cloneNode(!0);n&&r.querySelectorAll?.("[data-island-slot]").forEach(s=>{s.innerHTML=""}),e.push(r.outerHTML)}Sb(t.nextSibling,e,n)}return e}function rf(t,e){const n=t?ik(t):[e];return n?V1(n.join(""),n.length):Ke("div")}function ok(t){return t.nodeName==="#comment"&&t.nodeValue==="["}function ak(t){return t.nodeName==="#comment"&&t.nodeValue==="]"}const lk={scrollBehavior(t,e,n){const r=Ve(),s=At().options?.scrollBehaviorType??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Rb(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===an){a(Yg(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(Yg(t,e,n,s)))})})}};function Rb(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Yg(t,e,n,r){if(n)return n;const s=sk(t,e);return t.hash?{el:t.hash,top:Rb(t.hash),behavior:s?r:"instant"}:{left:0,top:0}}const ck={hashMode:!1,scrollBehaviorType:"auto"},kr={...ck,...lk},uk=async(t,e)=>{let n,r;if(!t.meta?.validate)return;const s=([n,r]=wi(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=Os({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},fk=async t=>{let e,n;const r=([e,n]=wi(()=>Id({path:t.path})),e=await e,n(),e);if(r.redirect)return wr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},hk=[uk,fk],oh={auth:()=>Oe(()=>import("./C7BanRBO.js"),[],import.meta.url)};function dk(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),fg(f,"")}const a=fg(r,t),c=!n||ZS(a,n)?a:n;return c+(c.includes("?")?"":s)+i}const pk=tn({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,r=qs().app.baseURL;const s=kr.history?.(r)??IP(r),i=kr.routes?([e,n]=wi(()=>kr.routes(nf)),e=await e,n(),e??nf):nf;let o;const a=GP({...kr,scrollBehavior:(P,O,R)=>{if(O===an){o=R;return}if(kr.scrollBehavior){if(a.options.scrollBehavior=kr.scrollBehavior,"scrollRestoration"in window.history){const v=a.beforeEach(()=>{v(),window.history.scrollRestoration="manual"})}return kr.scrollBehavior(P,an,o||R)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=qn(a.currentRoute.value);a.afterEach((P,O)=>{c.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=dk(r,window.location,t.payload.path),f=qn(a.currentRoute.value),h=()=>{f.value=a.currentRoute.value};t.hook("page:finish",h),a.afterEach((P,O)=>{P.matched[0]?.components?.default===O.matched[0]?.components?.default&&h()});const p={};for(const P in f.value)Object.defineProperty(p,P,{get:()=>f.value[P],enumerable:!0});t._route=Nn(p),t._middleware||={global:[],named:{}};const m=jc();a.afterEach(async(P,O,R)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(rb),R&&await t.callHook("page:loading:end")});try{[e,n]=wi(()=>a.isReady()),await e,n()}catch(P){[e,n]=wi(()=>t.runWithContext(()=>Is(P))),await e,n()}const y=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;h();const w=t.payload.state._layout;return a.beforeEach(async(P,O)=>{await t.callHook("page:loading:start"),P.meta=Er(P.meta),t.isHydrating&&w&&!dr(P.meta.layout)&&(P.meta.layout=w),t._processingMiddleware=!0;{const R=new Set([...hk,...t._middleware.global]);for(const v of P.matched){const C=v.meta.middleware;if(C)for(const D of Pd(C))R.add(D)}{const v=await t.runWithContext(()=>Id({path:P.path}));if(v.appMiddleware)for(const C in v.appMiddleware)v.appMiddleware[C]?R.add(C):R.delete(C)}for(const v of R){const C=typeof v=="string"?t._middleware.named[v]||await oh[v]?.().then(D=>D.default||D):v;if(!C)throw new Error(`Unknown route middleware: '${v}'.`);try{const D=await t.runWithContext(()=>C(P,O));if(!t.payload.serverRendered&&t.isHydrating&&(D===!1||D instanceof Error)){const F=D||Os({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Is(F)),!1}if(D===!0)continue;if(D===!1)return D;if(D)return sb(D)&&D.fatal&&await t.runWithContext(()=>Is(D)),D}catch(D){const F=Os(D);return F.fatal&&await t.runWithContext(()=>Is(F)),F}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(P,O)=>{P.matched.length===0&&await t.runWithContext(()=>Is(Os({statusCode:404,fatal:!1,statusMessage:`Page not found: ${P.fullPath}`,data:{path:P.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in y&&(y.name=void 0),await a.replace({...y,force:!0}),a.options.scrollBehavior=kr.scrollBehavior}catch(P){await t.runWithContext(()=>Is(P))}}),{provide:{router:a}}}}),ah=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),mk=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),zc=t=>{const e=Ve();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{ah(()=>t())}):ah(()=>t())},gk=tn({name:"nuxt:payload",setup(t){const e=new Set;At().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await kg(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),zc(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await kg(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Bc,1e3)})}}),yk=tn(()=>{const t=At();zc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),_k=tn(t=>{let e;async function n(){const r=await Bc();e&&clearTimeout(e),e=setTimeout(n,yg);try{const s=await $fetch(wd("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}zc(()=>{e=setTimeout(n,yg)})});function vk(t={}){const e=t.path||window.location.pathname;let n={};try{n=aa(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ve().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Ek=tn({name:"nuxt:chunk-reload",setup(t){const e=At(),n=qs(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=Fc(n.app.baseURL,i.fullPath);vk({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),bk=tn({name:"nuxt:global-components"}),zr={default:WA(()=>Oe(()=>import("./OoHYbxlW.js"),__vite__mapDeps([34,19,3,35]),import.meta.url).then(t=>t.default||t))};function wk(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function Cb(t,e=At()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const s=e._preloadPromises||=[];if(s.length>4)return Promise.all(s).then(()=>Cb(t,e));e._routePreloaded.add(n);const i=r.map(o=>o.components?.default).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const Tk=tn({name:"nuxt:prefetch",setup(t){const e=At();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const r=n?.meta?.layout;r&&typeof zr[r]=="function"&&await zr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(wr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Pd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof oh[o]=="function"&&oh[o]();typeof s=="string"&&s in zr&&wk(zr[s])})}}),Ik=()=>{};var Qg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ak=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),r.push(n[f],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ak(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Sk;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rk=function(t){const e=Pb(t);return kb.encodeByteArray(e,!0)},sc=function(t){return Rk(t).replace(/\./g,"")},Ob=function(t){try{return kb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pk=()=>Ck().__FIREBASE_DEFAULTS__,kk=()=>{if(typeof process>"u"||typeof Qg>"u")return;const t=Qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ok=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ob(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return Ik()||Pk()||kk()||Ok()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xb=t=>qc()?.emulatorHosts?.[t],Nb=t=>{const e=xb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Db=()=>qc()?.config,Lb=t=>qc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Mb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[sc(JSON.stringify(n)),sc(JSON.stringify(o)),""].join(".")}const Bo={};function Nk(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bo))Bo[e]?t.emulator.push(e):t.prod.push(e);return t}function Dk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jg=!1;function Od(t,e){if(typeof window>"u"||typeof document>"u"||!fs(window.location.host)||Bo[t]===e||Bo[t]||Jg)return;Bo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=Nk().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Jg=!0,o()},p}function f(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function h(){const p=Dk(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),w=n("learnmore"),P=document.getElementById(w)||document.createElement("a"),O=n("preprendIcon"),R=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const v=p.element;a(v),f(P,w);const C=u();c(R,O),v.append(R,y,P,C),document.body.appendChild(v)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Mk(){const t=qc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $k(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jk(){return!Mk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bk(){try{return typeof indexedDB=="object"}catch{return!1}}function Hk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zk,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,a,r)}}function qk(t,e){return t.replace(Wk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wk=/\{\$([^}]+)}/g;function Kk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xg(i)&&Xg(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Gk(t,e){const n=new Yk(t,e);return n.subscribe.bind(n)}class Yk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sf),s.error===void 0&&(s.error=sf),s.complete===void 0&&(s.complete=sf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sf(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Jk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zk(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xk(t){return t===As?void 0:t}function Zk(t){return t.instantiationMode==="EAGER"}/**
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
 */class eO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const tO={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},nO=be.INFO,rO={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},sO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=nO,this._logHandler=sO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const iO=(t,e)=>e.some(n=>t instanceof n);let Zg,ey;function oO(){return Zg||(Zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aO(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vb=new WeakMap,lh=new WeakMap,Fb=new WeakMap,of=new WeakMap,Nd=new WeakMap;function lO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vb.set(n,t)}).catch(()=>{}),Nd.set(e,t),e}function cO(t){if(lh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lh.set(t,e)}let ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uO(t){ch=t(ch)}function fO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(af(this),e,...n);return Fb.set(r,e.sort?e.sort():[e]),Yr(r)}:aO().includes(t)?function(...e){return t.apply(af(this),e),Yr(Vb.get(this))}:function(...e){return Yr(t.apply(af(this),e))}}function hO(t){return typeof t=="function"?fO(t):(t instanceof IDBTransaction&&cO(t),iO(t,oO())?new Proxy(t,ch):t)}function Yr(t){if(t instanceof IDBRequest)return lO(t);if(of.has(t))return of.get(t);const e=hO(t);return e!==t&&(of.set(t,e),Nd.set(e,t)),e}const af=t=>Nd.get(t);function dO(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yr(o.result),c.oldVersion,c.newVersion,Yr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pO=["get","getKey","getAll","getAllKeys","count"],mO=["put","add","delete","clear"],lf=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pO.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return lf.set(e,i),i}uO(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
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
 */class gO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yO(t){return t.getComponent()?.type==="VERSION"}const uh="@firebase/app",ny="0.14.0";/**
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
 */const pr=new xd("@firebase/app"),_O="@firebase/app-compat",vO="@firebase/analytics-compat",EO="@firebase/analytics",bO="@firebase/app-check-compat",wO="@firebase/app-check",TO="@firebase/auth",IO="@firebase/auth-compat",AO="@firebase/database",SO="@firebase/data-connect",RO="@firebase/database-compat",CO="@firebase/functions",PO="@firebase/functions-compat",kO="@firebase/installations",OO="@firebase/installations-compat",xO="@firebase/messaging",NO="@firebase/messaging-compat",DO="@firebase/performance",LO="@firebase/performance-compat",MO="@firebase/remote-config",VO="@firebase/remote-config-compat",FO="@firebase/storage",UO="@firebase/storage-compat",$O="@firebase/firestore",jO="@firebase/ai",BO="@firebase/firestore-compat",HO="firebase",zO="12.0.0";/**
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
 */const fh="[DEFAULT]",qO={[uh]:"fire-core",[_O]:"fire-core-compat",[EO]:"fire-analytics",[vO]:"fire-analytics-compat",[wO]:"fire-app-check",[bO]:"fire-app-check-compat",[TO]:"fire-auth",[IO]:"fire-auth-compat",[AO]:"fire-rtdb",[SO]:"fire-data-connect",[RO]:"fire-rtdb-compat",[CO]:"fire-fn",[PO]:"fire-fn-compat",[kO]:"fire-iid",[OO]:"fire-iid-compat",[xO]:"fire-fcm",[NO]:"fire-fcm-compat",[DO]:"fire-perf",[LO]:"fire-perf-compat",[MO]:"fire-rc",[VO]:"fire-rc-compat",[FO]:"fire-gcs",[UO]:"fire-gcs-compat",[$O]:"fire-fst",[BO]:"fire-fst-compat",[jO]:"fire-vertex","fire-js":"fire-js",[HO]:"fire-js-all"};/**
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
 */const ic=new Map,WO=new Map,hh=new Map;function ry(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if(hh.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;hh.set(e,t);for(const n of ic.values())ry(n,t);for(const n of WO.values())ry(n,t);return!0}function Wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const KO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Ra("app","Firebase",KO);/**
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
 */class GO{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=zO;function Ub(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:fh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qr.create("bad-app-name",{appName:String(s)});if(n||(n=Db()),!n)throw Qr.create("no-options");const i=ic.get(s);if(i){if(Ls(n,i.options)&&Ls(r,i.config))return i;throw Qr.create("duplicate-app",{appName:s})}const o=new eO(s);for(const c of hh.values())o.addComponent(c);const a=new GO(n,r,o);return ic.set(s,a),a}function Dd(t=fh){const e=ic.get(t);if(!e&&t===fh&&Db())return Ub();if(!e)throw Qr.create("no-app",{appName:t});return e}function Fn(t,e,n){let r=qO[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(o.join(" "));return}Ms(new ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const YO="firebase-heartbeat-database",QO=1,ua="firebase-heartbeat-store";let cf=null;function $b(){return cf||(cf=dO(YO,QO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),cf}async function JO(t){try{const n=(await $b()).transaction(ua),r=await n.objectStore(ua).get(jb(t));return await n.done,r}catch(e){if(e instanceof Yn)pr.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e?.message});pr.warn(n.message)}}}async function sy(t,e){try{const r=(await $b()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,jb(t)),await r.done}catch(n){if(n instanceof Yn)pr.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n?.message});pr.warn(r.message)}}}function jb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XO=1024,ZO=30;class e2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iy();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>ZO){const s=r2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){pr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iy(),{heartbeatsToSend:n,unsentEntries:r}=t2(this._heartbeatsCache.heartbeats),s=sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return pr.warn(e),""}}}function iy(){return new Date().toISOString().substring(0,10)}function t2(t,e=XO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class n2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bk()?Hk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JO(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function oy(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}function r2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function s2(t){Ms(new ts("platform-logger",e=>new gO(e),"PRIVATE")),Ms(new ts("heartbeat",e=>new e2(e),"PRIVATE")),Fn(uh,ny,t),Fn(uh,ny,"esm2020"),Fn("fire-js","")}s2("");var i2="firebase",o2="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(i2,o2,"app");function Bb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a2=Bb,Hb=new Ra("auth","Firebase",Bb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new xd("@firebase/auth");function l2(t,...e){oc.logLevel<=be.WARN&&oc.warn(`Auth (${Ws}): ${t}`,...e)}function kl(t,...e){oc.logLevel<=be.ERROR&&oc.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,...e){throw Ld(t,...e)}function Un(t,...e){return Ld(t,...e)}function zb(t,e,n){const r={...a2(),[e]:n};return new Ra("auth","Firebase",r).create(e,{appName:t.name})}function Jr(t){return zb(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hb.create(t,...e)}function de(t,e,...n){if(!t)throw Ld(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kl(e),new Error(e)}function mr(t,e){t||ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){return typeof self<"u"&&self.location?.href||""}function c2(){return ay()==="http:"||ay()==="https:"}function ay(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(c2()||Fk()||"connection"in navigator)?navigator.onLine:!0}function f2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=Lk()||Uk()}get(){return u2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],p2=new Pa(3e4,6e4);function Ks(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hs(t,e,n,r,s={}){return Wb(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ca({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return Vk()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&fs(t.emulatorConfig.host)&&(u.credentials="include"),qb.fetch()(await Kb(t,t.config.apiHost,n,a),u)})}async function Wb(t,e,n){t._canInitEmulator=!1;const r={...h2,...e};try{const s=new g2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zb(t,f,u);Rn(t,f)}}catch(s){if(s instanceof Yn)throw s;Rn(t,"network-request-failed",{message:String(s)})}}async function Kc(t,e,n,r,s={}){const i=await hs(t,e,n,r,s);return"mfaPendingCredential"in i&&Rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kb(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Md(t.config,s):`${t.config.apiScheme}://${s}`;return d2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function m2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Un(this.auth,"network-request-failed")),p2.get())})}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Un(t,e,r);return s.customData._tokenResponse=n,s}function ly(t){return t!==void 0&&t.enterprise!==void 0}class y2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return m2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _2(t,e){return hs(t,"GET","/v2/recaptchaConfig",Ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e){return hs(t,"POST","/v1/accounts:delete",e)}async function ac(t,e){return hs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function E2(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=Vd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ho(uf(s.auth_time)),issuedAtTime:Ho(uf(s.iat)),expirationTime:Ho(uf(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function uf(t){return Number(t)*1e3}function Vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ob(n);return s?JSON.parse(s):(kl("Failed to decode base64 JWT payload"),null)}catch(s){return kl("Caught error parsing JWT payload as JSON",s?.toString()),null}}function cy(t){const e=Vd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&b2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function b2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ho(this.lastLoginAt),this.creationTime=Ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(t){const e=t.auth,n=await t.getIdToken(),r=await fa(t,ac(e,{idToken:n}));de(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Gb(s.providerUserInfo):[],o=I2(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=a?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ph(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function T2(t){const e=tt(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gb(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t,e){const n=await Wb(t,{},async()=>{const r=Ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Kb(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&fs(t.emulatorConfig.host)&&(c.credentials="include"),qb.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function S2(t,e){return hs(t,"POST","/v2/accounts:revokeToken",Ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=cy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await A2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ti;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new w2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ph(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fa(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return E2(this,e)}reload(){return T2(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Jr(this.auth));const e=await this.getIdToken();return await fa(this,v2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:m,providerData:y,stsTokenManager:w}=n;de(h&&w,e,"internal-error");const P=Ti.fromJSON(this.name,w);de(typeof h=="string",e,"internal-error"),Or(r,e.name),Or(s,e.name),de(typeof p=="boolean",e,"internal-error"),de(typeof m=="boolean",e,"internal-error"),Or(i,e.name),Or(o,e.name),Or(a,e.name),Or(c,e.name),Or(u,e.name),Or(f,e.name);const O=new bn({uid:h,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:P,createdAt:u,lastLoginAt:f});return y&&Array.isArray(y)&&(O.providerData=y.map(R=>({...R}))),c&&(O._redirectEventId=c),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ti;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gb(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Ti;a.updateFromIdToken(r);const c=new bn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ph(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Map;function lr(t){mr(t instanceof Function,"Expected a class definition");let e=uy.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uy.set(t,e),e)}/**
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
 */class Yb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yb.type="NONE";const fy=Yb;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ol(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ol("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ac(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ii(lr(fy),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||lr(fy);const o=Ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const p=await ac(e,{idToken:f}).catch(()=>{});if(!p)break;h=await bn._fromGetAccountInfoResponse(e,p,f)}else h=bn._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ii(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ii(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tw(e))return"Blackberry";if(nw(e))return"Webos";if(Jb(e))return"Safari";if((e.includes("chrome/")||Xb(e))&&!e.includes("edge/"))return"Chrome";if(ew(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Qb(t=Vt()){return/firefox\//i.test(t)}function Jb(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xb(t=Vt()){return/crios\//i.test(t)}function Zb(t=Vt()){return/iemobile/i.test(t)}function ew(t=Vt()){return/android/i.test(t)}function tw(t=Vt()){return/blackberry/i.test(t)}function nw(t=Vt()){return/webos/i.test(t)}function Fd(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R2(t=Vt()){return Fd(t)&&!!window.navigator?.standalone}function C2(){return $k()&&document.documentMode===10}function rw(t=Vt()){return Fd(t)||ew(t)||nw(t)||tw(t)||/windows phone/i.test(t)||Zb(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e=[]){let n;switch(t){case"Browser":n=hy(Vt());break;case"Worker":n=`${hy(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class P2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function k2(t,e={}){return hs(t,"GET","/v2/passwordPolicy",Ks(t,e))}/**
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
 */const O2=6;class x2{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??O2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dy(this),this.idTokenSubscription=new dy(this),this.beforeStateQueue=new P2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ac(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(cn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Jr(this));const n=e?tt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await k2(this),n=new x2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await S2(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&l2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Zi(t){return tt(t)}class dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D2(t){Gc=t}function iw(t){return Gc.loadJS(t)}function L2(){return Gc.recaptchaEnterpriseScript}function M2(){return Gc.gapiScript}function V2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class F2{constructor(){this.enterprise=new U2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class U2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const $2="recaptcha-enterprise",ow="NO_RECAPTCHA";class j2{constructor(e){this.type=$2,this.auth=Zi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new y2(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ly(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ow)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new F2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ly(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=L2();c.length!==0&&(c+=a),iw(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function py(t,e,n,r=!1,s=!1){const i=new j2(t);let o;if(s)o=ow;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function my(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await py(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await py(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t,e){const n=Wc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ls(i,e??{}))return s;Rn(s,"already-initialized")}return n.initialize({options:e})}function H2(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(lr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function z2(t,e,n){const r=Zi(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=aw(e),{host:o,port:a}=q2(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Ls(u,r.config.emulator)&&Ls(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,fs(o)?(kd(`${i}//${o}${c}`),Od("Auth",!0)):W2()}function aw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function q2(t){const e=aw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gy(o)}}}function gy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function W2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}async function K2(t,e){return hs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G2(t,e){return Kc(t,"POST","/v1/accounts:signInWithPassword",Ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(t,e){return Kc(t,"POST","/v1/accounts:signInWithEmailLink",Ks(t,e))}async function Q2(t,e){return Kc(t,"POST","/v1/accounts:signInWithEmailLink",Ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Ud{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return my(e,n,"signInWithPassword",G2);case"emailLink":return Y2(e,{email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return my(e,r,"signUpPassword",K2);case"emailLink":return Q2(e,{idToken:n,email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const J2="http://localhost";class Vs extends Ud{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:J2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z2(t){const e=Ro(Co(t)).link,n=e?Ro(Co(e)).deep_link_id:null,r=Ro(Co(t)).deep_link_id;return(r?Ro(Co(r)).link:null)||r||n||e||t}class $d{constructor(e){const n=Ro(Co(e)),r=n.apiKey??null,s=n.oobCode??null,i=X2(n.mode??null);de(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Z2(e);try{return new $d(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$d.parseLink(n);return de(r,"argument-error"),ha._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends lw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends ka{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends ka{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends ka{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=yy(r);return new Ui({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yy(r);return new Ui({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Yn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cc(e,n,r,s)}}function cw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,r):i})}async function ex(t,e,n=!1){const r=await fa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
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
 */async function tx(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Jr(r));const s="reauthenticate";try{const i=await fa(t,cw(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Vd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Rn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e,n=!1){if(cn(t.app))return Promise.reject(Jr(t));const r="signIn",s=await cw(t,r,e),i=await Ui._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nx(t,e){return uw(Zi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t){const e=Zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function sx(t,e,n){return cn(t.app)?Promise.reject(Jr(t)):nx(tt(t),eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rx(t),r})}function ix(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function ox(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function ax(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function lx(t){return tt(t).signOut()}const uc="__sak";/**
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
 */class fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=1e3,ux=10;class hw extends fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);C2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ux):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hw.type="LOCAL";const fx=hw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw extends fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dw.type="SESSION";const pw=dw;/**
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
 */function hx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await hx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=jd("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return window}function px(t){$n().location.href=t}/**
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
 */function mw(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function mx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gx(){return navigator?.serviceWorker?.controller||null}function yx(){return mw()?self:null}/**
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
 */const gw="firebaseLocalStorageDb",_x=1,fc="firebaseLocalStorage",yw="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qc(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function vx(){const t=indexedDB.deleteDatabase(gw);return new Oa(t).toPromise()}function mh(){const t=indexedDB.open(gw,_x);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:yw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await vx(),e(await mh()))})})}async function _y(t,e,n){const r=Qc(t,!0).put({[yw]:e,value:n});return new Oa(r).toPromise()}async function Ex(t,e){const n=Qc(t,!1).get(e),r=await new Oa(n).toPromise();return r===void 0?null:r.value}function vy(t,e){const n=Qc(t,!0).delete(e);return new Oa(n).toPromise()}const bx=800,wx=3;class _w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(yx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await mx(),!this.activeServiceWorker)return;this.sender=new dx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mh();return await _y(e,uc,"1"),await vy(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_y(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ex(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qc(s,!1).getAll();return new Oa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_w.type="LOCAL";const Tx=_w;new Pa(3e4,6e4);/**
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
 */function Ix(t,e){return e?lr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bd extends Ud{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ax(t){return uw(t.auth,new Bd(t),t.bypassAuthState)}function Sx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),tx(n,new Bd(t),t.bypassAuthState)}async function Rx(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),ex(n,new Bd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ax;case"linkViaPopup":case"linkViaRedirect":return Rx;case"reauthViaPopup":case"reauthViaRedirect":return Sx;default:Rn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=new Pa(2e3,1e4);class di extends vw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cx.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="pendingRedirect",xl=new Map;class kx extends vw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xl.get(this.auth._key());if(!e){try{const r=await Ox(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xl.set(this.auth._key(),e)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ox(t,e){const n=Dx(e),r=Nx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xx(t,e){xl.set(t._key(),e)}function Nx(t){return lr(t._redirectPersistence)}function Dx(t){return Ol(Px,t.config.apiKey,t.name)}async function Lx(t,e,n=!1){if(cn(t.app))return Promise.reject(Jr(t));const r=Zi(t),s=Ix(r,e),o=await new kx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=600*1e3;class Vx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ew(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ey(e))}saveEventToCache(e){this.cachedEventUids.add(Ey(e)),this.lastProcessedEventTime=Date.now()}}function Ey(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ew({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Fx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ew(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(t,e={}){return hs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jx=/^https?/;async function Bx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ux(t);for(const n of e)try{if(Hx(n))return}catch{}Rn(t,"unauthorized-domain")}function Hx(t){const e=dh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jx.test(n))return!1;if($x.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zx=new Pa(3e4,6e4);function by(){const t=$n().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qx(t){return new Promise((e,n)=>{function r(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),n(Un(t,"network-request-failed"))},timeout:zx.get()})}if($n().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if($n().gapi?.load)r();else{const s=V2("iframefcb");return $n()[s]=()=>{gapi.load?r():n(Un(t,"network-request-failed"))},iw(`${M2()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Nl=null,e})}let Nl=null;function Wx(t){return Nl=Nl||qx(t),Nl}/**
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
 */const Kx=new Pa(5e3,15e3),Gx="__/auth/iframe",Yx="emulator/auth/iframe",Qx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xx(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Md(e,Yx):`https://${t.config.authDomain}/${Gx}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},s=Jx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ca(r).slice(1)}`}async function Zx(t){const e=await Wx(t),n=$n().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:Xx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=$n().setTimeout(()=>{i(o)},Kx.get());function c(){$n().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const eN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tN=500,nN=600,rN="_blank",sN="http://localhost";class wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iN(t,e,n,r=tN,s=nN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...eN,width:r.toString(),height:s.toString(),top:i,left:o},u=Vt().toLowerCase();n&&(a=Xb(u)?rN:n),Qb(u)&&(e=e||sN,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(R2(u)&&a!=="_self")return oN(e||"",a),new wy(null);const h=window.open(e||"",a,f);de(h,t,"popup-blocked");try{h.focus()}catch{}return new wy(h)}function oN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aN="__/auth/handler",lN="emulator/auth/handler",cN=encodeURIComponent("fac");async function Ty(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:s};if(e instanceof lw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof ka){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${cN}=${encodeURIComponent(c)}`:"";return`${uN(t)}?${Ca(a).slice(1)}${u}`}function uN({config:t}){return t.emulator?Md(t,lN):`https://${t.authDomain}/${aN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="webStorageSupport";class fN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pw,this._completeRedirectFn=Lx,this._overrideRedirectResult=xx}async _openPopup(e,n,r,s){mr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ty(e,n,r,dh(),s);return iN(e,i,jd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ty(e,n,r,dh(),s);return px(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Zx(e),r=new Vx(e);return n.register("authEvent",s=>(de(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ff,{type:ff},s=>{const i=s?.[0]?.[ff];i!==void 0&&n(!!i),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rw()||Jb()||Fd()}}const hN=fN;var Iy="@firebase/auth",Ay="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mN(t){Ms(new ts("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sw(t)},u=new N2(r,s,i,c);return H2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ms(new ts("auth-internal",e=>{const n=Zi(e.getProvider("auth").getImmediate());return(r=>new dN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(Iy,Ay,pN(t)),Fn(Iy,Ay,"esm2020")}/**
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
 */const gN=300,yN=Lb("authIdTokenMaxAge")||gN;let Sy=null;const _N=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yN)return;const s=n?.token;Sy!==s&&(Sy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vN(t=Dd()){const e=Wc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=B2(t,{popupRedirectResolver:hN,persistence:[Tx,fx,pw]}),r=Lb("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=_N(i.toString());ox(n,o,()=>o(n.currentUser)),ix(n,a=>o(a))}}const s=xb("auth");return s&&z2(n,`http://${s}`),n}function EN(){return document.getElementsByTagName("head")?.[0]??document}D2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mN("Browser");function Ry(t){return typeof t=="string"?`'${t}'`:new bN().serialize(t)}const bN=function(){class t{#e=new Map;compare(n,r){const s=typeof n,i=typeof r;return s==="string"&&i==="string"?n.localeCompare(r):s==="number"&&i==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){const r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);const s=n.constructor,i=s===Object||s===void 0?"":s.name;if(i!==""&&globalThis[i]===s)return this.serializeBuiltInType(i,n);if(typeof n.toJSON=="function"){const o=n.toJSON();return i+(o!==null&&typeof o=="object"?this.$object(o):`(${this.serialize(o)})`)}return this.serializeObjectEntries(i,Object.entries(n))}serializeBuiltInType(n,r){const s=this["$"+n];if(s)return s.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw new Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){const s=Array.from(r).sort((o,a)=>this.compare(o[0],a[0]));let i=`${n}{`;for(let o=0;o<s.length;o++){const[a,c]=s[o];i+=`${this.serialize(a,!0)}:${this.serialize(c)}`,o<s.length-1&&(i+=",")}return i+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){const r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let s=0;s<n.length;s++)r+=this.serialize(n[s]),s<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,s)=>this.compare(r,s)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(const e of["Error","RegExp","URL"])t.prototype["$"+e]=function(n){return`${e}(${n})`};for(const e of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join(",")}]`};for(const e of["BigInt64Array","BigUint64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join("n,")}${n.length>0?"n":""}]`};return t}();function wN(t,e){return t===e||Ry(t)===Ry(e)}const hl="<div></div>",hf=new WeakMap;function TN(t){if(hf.has(t))return hf.get(t);const e={...t};return e.render?e.render=(n,r,s,i,o,a)=>{if(i.mounted$??n.mounted$){const c=t.render?.bind(n)(n,r,s,i,o,a);return c.children===null||typeof c.children=="string"?hn(c):Ke(c)}return rf(n._.vnode.el,hl)}:e.template&&=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${hl}</template>
    `,e.setup=(n,r)=>{const s=Ve(),i=qn(s.isHydrating===!1),o=zs();if(s.isHydrating){const c={...o.attrs},u=IN(o);for(const f in c)delete o.attrs[f];xi(()=>{Object.assign(o.attrs,c),o.vnode.dirs=u})}xi(()=>{i.value=!0});const a=t.setup?.(n,r)||{};return ed(a)?Promise.resolve(a).then(c=>typeof c!="function"?(c||={},c.mounted$=i,c):(...u)=>{if(i.value||!s.isHydrating){const f=c(...u);return f.children===null||typeof f.children=="string"?hn(f):Ke(f)}return rf(o?.vnode.el,hl)}):typeof a=="function"?(...c)=>{if(i.value){const u=a(...c),f=e.inheritAttrs!==!1?r.attrs:void 0;return u.children===null||typeof u.children=="string"?hn(u,f):Ke(u,f)}return rf(o?.vnode.el,hl)}:Object.assign(a,{mounted$:i})},hf.set(t,e),e}function IN(t){if(!t||!t.vnode.dirs)return null;const e=t.vnode.dirs;return t.vnode.dirs=null,e}function AN(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||SN;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const c=t.slice(i,o).trim();if(r?.filter&&!r?.filter(c)){i=a+1;continue}if(n[c]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[c]=RN(u,s)}i=a+1}return n}function SN(t){return t.includes("%")?decodeURIComponent(t):t}function RN(t,e){try{return e(t)}catch{return t}}const dl=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Cy(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!dl.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!dl.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!dl.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!dl.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!CN(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function CN(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function vn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=vn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:vn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=vn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=vn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(vn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(vn(i),vn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(vn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const PN={path:"/",watch:!0,decode:t=>aa(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},pl=window.cookieStore;function kN(t,e){const n={...PN,...e};n.filter??=u=>u===t;const r=Py(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=vn(i?void 0:r[t]??n.default?.()),c=s&&!i?NN(a,s,n.watch&&n.watch!=="shallow"):Qt(a);{let u=null;try{!pl&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const f=(y=!1)=>{!y&&(n.readonly||wN(c.value,r[t]))||(xN(t,c.value,n),r[t]=vn(c.value),u?.postMessage({value:n.encode(c.value)}))},h=y=>{const w=y.refresh?Py(n)?.[t]:n.decode(y.value);p=!0,c.value=w,r[t]=vn(w),Wn(()=>{p=!1})};let p=!1;const m=!!Qi();if(m&&Xo(()=>{p=!0,f(),u?.close()}),pl){const y=w=>{const P=w.changed.find(R=>R.name===t),O=w.deleted.find(R=>R.name===t);P&&h({value:P.value}),O&&h({value:null})};pl.addEventListener("change",y),m&&Xo(()=>pl.removeEventListener("change",y))}else u&&(u.onmessage=({data:y})=>h(y));n.watch&&Vn(c,()=>{p||f()},{deep:n.watch!=="shallow"}),o&&f(o)}return c}function Py(t={}){return AN(document.cookie,t)}function ON(t,e,n={}){return e==null?Cy(t,e,{...n,maxAge:-1}):Cy(t,e,n)}function xN(t,e,n={}){document.cookie=ON(t,e,n)}const ky=2147483647;function NN(t,e,n){let r,s,i=0;const o=n?Qt(t):{value:t};return Qi()&&Xo(()=>{s?.(),clearTimeout(r)}),SA((a,c)=>{n&&(s=Vn(o,c));function u(){i=0,clearTimeout(r);const f=e-i,h=f<ky?f:ky;r=setTimeout(()=>{if(i+=h,i<e)return u();o.value=void 0,c()},h)}return{get(){return a(),o.value},set(f){u(),o.value=f,c()}}})}function DN(t={}){const e=qn(""),n=qn(t.politeness||"polite"),r=ab();function s(u="",f="polite"){e.value=u,n.value=f}function i(u){return s(u,"polite")}function o(u){return s(u,"assertive")}function a(){s(document?.title?.trim(),n.value)}function c(){r?.hooks?.removeHook("dom:rendered",a)}return a(),r?.hooks?.hook("dom:rendered",()=>{a()}),{_cleanup:c,message:e,politeness:n,set:s,polite:i,assertive:o}}function LN(t={}){const e=Ve(),n=e._routeAnnouncer||=DN(t);return t.politeness!==n.politeness.value&&(n.politeness.value=t.politeness||"polite"),Qi()&&(e._routeAnnouncerDeps||=0,e._routeAnnouncerDeps++,Xo(()=>{e._routeAnnouncerDeps--,e._routeAnnouncerDeps===0&&(n._cleanup(),delete e._routeAnnouncer)})),n}const MN=(...t)=>t.find(e=>e!==void 0);function VN(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const c=a??t.trailingSlash;if(!i||c!=="append"&&c!=="remove")return i;if(typeof i=="string")return ml(i,c);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:ml(u,c)}}function s(i){const o=At(),a=qs(),c=je(()=>!!i.target&&i.target!=="_self"),u=je(()=>{const P=i.to||i.href||"";return typeof P=="string"&&wr(P,{acceptRelative:!0})}),f=na("RouterLink"),h=f&&typeof f!="string"?f.useLink:void 0,p=je(()=>{if(i.external)return!0;const P=i.to||i.href||"";return typeof P=="object"?!1:P===""||u.value}),m=je(()=>{const P=i.to||i.href||"";return p.value?P:r(P,o.resolve,i.trailingSlash)}),y=p.value?void 0:h?.({...i,to:m}),w=je(()=>{const P=i.trailingSlash??t.trailingSlash;if(!m.value||u.value||n(m.value))return m.value;if(p.value){const O=typeof m.value=="object"&&"path"in m.value?Xf(m.value):m.value,R=typeof O=="object"?o.resolve(O).href:O;return ml(R,P)}return typeof m.value=="object"?o.resolve(m.value)?.href??null:ml(Fc(a.app.baseURL,m.value),P)});return{to:m,hasTarget:c,isAbsoluteUrl:u,isExternal:p,href:w,isActive:y?.isActive??je(()=>m.value===o.currentRoute.value.path),isExactActive:y?.isExactActive??je(()=>m.value===o.currentRoute.value.path),route:y?.route??je(()=>o.resolve(m.value)),async navigate(P){await GR(w.value,{replace:i.replace,external:p.value||c.value})}}}return mn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=At(),{to:c,href:u,navigate:f,isExternal:h,hasTarget:p,isAbsoluteUrl:m}=s(i),y=qn(!1),w=Qt(null),P=v=>{w.value=i.custom?v?.$el?.nextElementSibling:v?.$el};function O(v){return!y.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===v:i.prefetchOn?.[v]??t.prefetchOn?.[v])&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!jN()}async function R(v=Ve()){if(y.value)return;y.value=!0;const C=typeof c.value=="string"?c.value:h.value?Xf(c.value):a.resolve(c.value).fullPath,D=h.value?new URL(C,window.location.href).href:C;await Promise.all([v.hooks.callHook("link:prefetch",D).catch(()=>{}),!h.value&&!p.value&&Cb(c.value,a).catch(()=>{})])}if(O("visibility")){const v=Ve();let C,D=null;xi(()=>{const F=UN();zc(()=>{C=ah(()=>{w?.value?.tagName&&(D=F.observe(w.value,async()=>{D?.(),D=null,await R(v)}))})})}),Xi(()=>{C&&mk(C),D?.(),D=null})}return()=>{if(!h.value&&!p.value&&!n(c.value)){const D={ref:P,to:c.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(O("interaction")&&(D.onPointerenter=R.bind(null,void 0),D.onFocus=R.bind(null,void 0)),y.value&&(D.class=i.prefetchedClass||t.prefetchedClass),D.rel=i.rel||void 0),Ke(na("RouterLink"),D,o.default)}const v=i.target||null,C=MN(i.noRel?"":i.rel,t.externalRelAttribute,m.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:R,get route(){if(!u.value)return;const D=new URL(u.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return Ed(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:C,target:v,isExternal:h.value||p.value,isActive:!1,isExactActive:!1}):null:Ke("a",{ref:w,href:u.value||null,rel:C,target:v,onClick:D=>{if(!(h.value||p.value))return D.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},o.default?.())}}})}const FN=VN(OR);function ml(t,e){const n=e==="append"?UE:Mi;return wr(t)&&!t.startsWith("http")?t:n(t,!0)}function UN(){const t=Ve();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||=new IntersectionObserver(a=>{for(const c of a){const u=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&u&&u()}}),n.set(i,o),e.observe(i),()=>{n.delete(i),e?.unobserve(i),n.size===0&&(e?.disconnect(),e=null)});return t._observer={observe:r}}const $N=/2g/;function jN(){const t=navigator.connection;return!!(t&&(t.saveData||$N.test(t.effectiveType)))}var Oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,bw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,E){function _(){}_.prototype=E.prototype,S.D=E.prototype,S.prototype=new _,S.prototype.constructor=S,S.C=function(T,x,k){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return E.prototype[x].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,E,_){_||(_=0);var T=Array(16);if(typeof E=="string")for(var x=0;16>x;++x)T[x]=E.charCodeAt(_++)|E.charCodeAt(_++)<<8|E.charCodeAt(_++)<<16|E.charCodeAt(_++)<<24;else for(x=0;16>x;++x)T[x]=E[_++]|E[_++]<<8|E[_++]<<16|E[_++]<<24;E=S.g[0],_=S.g[1],x=S.g[2];var k=S.g[3],I=E+(k^_&(x^k))+T[0]+3614090360&4294967295;E=_+(I<<7&4294967295|I>>>25),I=k+(x^E&(_^x))+T[1]+3905402710&4294967295,k=E+(I<<12&4294967295|I>>>20),I=x+(_^k&(E^_))+T[2]+606105819&4294967295,x=k+(I<<17&4294967295|I>>>15),I=_+(E^x&(k^E))+T[3]+3250441966&4294967295,_=x+(I<<22&4294967295|I>>>10),I=E+(k^_&(x^k))+T[4]+4118548399&4294967295,E=_+(I<<7&4294967295|I>>>25),I=k+(x^E&(_^x))+T[5]+1200080426&4294967295,k=E+(I<<12&4294967295|I>>>20),I=x+(_^k&(E^_))+T[6]+2821735955&4294967295,x=k+(I<<17&4294967295|I>>>15),I=_+(E^x&(k^E))+T[7]+4249261313&4294967295,_=x+(I<<22&4294967295|I>>>10),I=E+(k^_&(x^k))+T[8]+1770035416&4294967295,E=_+(I<<7&4294967295|I>>>25),I=k+(x^E&(_^x))+T[9]+2336552879&4294967295,k=E+(I<<12&4294967295|I>>>20),I=x+(_^k&(E^_))+T[10]+4294925233&4294967295,x=k+(I<<17&4294967295|I>>>15),I=_+(E^x&(k^E))+T[11]+2304563134&4294967295,_=x+(I<<22&4294967295|I>>>10),I=E+(k^_&(x^k))+T[12]+1804603682&4294967295,E=_+(I<<7&4294967295|I>>>25),I=k+(x^E&(_^x))+T[13]+4254626195&4294967295,k=E+(I<<12&4294967295|I>>>20),I=x+(_^k&(E^_))+T[14]+2792965006&4294967295,x=k+(I<<17&4294967295|I>>>15),I=_+(E^x&(k^E))+T[15]+1236535329&4294967295,_=x+(I<<22&4294967295|I>>>10),I=E+(x^k&(_^x))+T[1]+4129170786&4294967295,E=_+(I<<5&4294967295|I>>>27),I=k+(_^x&(E^_))+T[6]+3225465664&4294967295,k=E+(I<<9&4294967295|I>>>23),I=x+(E^_&(k^E))+T[11]+643717713&4294967295,x=k+(I<<14&4294967295|I>>>18),I=_+(k^E&(x^k))+T[0]+3921069994&4294967295,_=x+(I<<20&4294967295|I>>>12),I=E+(x^k&(_^x))+T[5]+3593408605&4294967295,E=_+(I<<5&4294967295|I>>>27),I=k+(_^x&(E^_))+T[10]+38016083&4294967295,k=E+(I<<9&4294967295|I>>>23),I=x+(E^_&(k^E))+T[15]+3634488961&4294967295,x=k+(I<<14&4294967295|I>>>18),I=_+(k^E&(x^k))+T[4]+3889429448&4294967295,_=x+(I<<20&4294967295|I>>>12),I=E+(x^k&(_^x))+T[9]+568446438&4294967295,E=_+(I<<5&4294967295|I>>>27),I=k+(_^x&(E^_))+T[14]+3275163606&4294967295,k=E+(I<<9&4294967295|I>>>23),I=x+(E^_&(k^E))+T[3]+4107603335&4294967295,x=k+(I<<14&4294967295|I>>>18),I=_+(k^E&(x^k))+T[8]+1163531501&4294967295,_=x+(I<<20&4294967295|I>>>12),I=E+(x^k&(_^x))+T[13]+2850285829&4294967295,E=_+(I<<5&4294967295|I>>>27),I=k+(_^x&(E^_))+T[2]+4243563512&4294967295,k=E+(I<<9&4294967295|I>>>23),I=x+(E^_&(k^E))+T[7]+1735328473&4294967295,x=k+(I<<14&4294967295|I>>>18),I=_+(k^E&(x^k))+T[12]+2368359562&4294967295,_=x+(I<<20&4294967295|I>>>12),I=E+(_^x^k)+T[5]+4294588738&4294967295,E=_+(I<<4&4294967295|I>>>28),I=k+(E^_^x)+T[8]+2272392833&4294967295,k=E+(I<<11&4294967295|I>>>21),I=x+(k^E^_)+T[11]+1839030562&4294967295,x=k+(I<<16&4294967295|I>>>16),I=_+(x^k^E)+T[14]+4259657740&4294967295,_=x+(I<<23&4294967295|I>>>9),I=E+(_^x^k)+T[1]+2763975236&4294967295,E=_+(I<<4&4294967295|I>>>28),I=k+(E^_^x)+T[4]+1272893353&4294967295,k=E+(I<<11&4294967295|I>>>21),I=x+(k^E^_)+T[7]+4139469664&4294967295,x=k+(I<<16&4294967295|I>>>16),I=_+(x^k^E)+T[10]+3200236656&4294967295,_=x+(I<<23&4294967295|I>>>9),I=E+(_^x^k)+T[13]+681279174&4294967295,E=_+(I<<4&4294967295|I>>>28),I=k+(E^_^x)+T[0]+3936430074&4294967295,k=E+(I<<11&4294967295|I>>>21),I=x+(k^E^_)+T[3]+3572445317&4294967295,x=k+(I<<16&4294967295|I>>>16),I=_+(x^k^E)+T[6]+76029189&4294967295,_=x+(I<<23&4294967295|I>>>9),I=E+(_^x^k)+T[9]+3654602809&4294967295,E=_+(I<<4&4294967295|I>>>28),I=k+(E^_^x)+T[12]+3873151461&4294967295,k=E+(I<<11&4294967295|I>>>21),I=x+(k^E^_)+T[15]+530742520&4294967295,x=k+(I<<16&4294967295|I>>>16),I=_+(x^k^E)+T[2]+3299628645&4294967295,_=x+(I<<23&4294967295|I>>>9),I=E+(x^(_|~k))+T[0]+4096336452&4294967295,E=_+(I<<6&4294967295|I>>>26),I=k+(_^(E|~x))+T[7]+1126891415&4294967295,k=E+(I<<10&4294967295|I>>>22),I=x+(E^(k|~_))+T[14]+2878612391&4294967295,x=k+(I<<15&4294967295|I>>>17),I=_+(k^(x|~E))+T[5]+4237533241&4294967295,_=x+(I<<21&4294967295|I>>>11),I=E+(x^(_|~k))+T[12]+1700485571&4294967295,E=_+(I<<6&4294967295|I>>>26),I=k+(_^(E|~x))+T[3]+2399980690&4294967295,k=E+(I<<10&4294967295|I>>>22),I=x+(E^(k|~_))+T[10]+4293915773&4294967295,x=k+(I<<15&4294967295|I>>>17),I=_+(k^(x|~E))+T[1]+2240044497&4294967295,_=x+(I<<21&4294967295|I>>>11),I=E+(x^(_|~k))+T[8]+1873313359&4294967295,E=_+(I<<6&4294967295|I>>>26),I=k+(_^(E|~x))+T[15]+4264355552&4294967295,k=E+(I<<10&4294967295|I>>>22),I=x+(E^(k|~_))+T[6]+2734768916&4294967295,x=k+(I<<15&4294967295|I>>>17),I=_+(k^(x|~E))+T[13]+1309151649&4294967295,_=x+(I<<21&4294967295|I>>>11),I=E+(x^(_|~k))+T[4]+4149444226&4294967295,E=_+(I<<6&4294967295|I>>>26),I=k+(_^(E|~x))+T[11]+3174756917&4294967295,k=E+(I<<10&4294967295|I>>>22),I=x+(E^(k|~_))+T[2]+718787259&4294967295,x=k+(I<<15&4294967295|I>>>17),I=_+(k^(x|~E))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,S.g[2]=S.g[2]+x&4294967295,S.g[3]=S.g[3]+k&4294967295}r.prototype.u=function(S,E){E===void 0&&(E=S.length);for(var _=E-this.blockSize,T=this.B,x=this.h,k=0;k<E;){if(x==0)for(;k<=_;)s(this,S,k),k+=this.blockSize;if(typeof S=="string"){for(;k<E;)if(T[x++]=S.charCodeAt(k++),x==this.blockSize){s(this,T),x=0;break}}else for(;k<E;)if(T[x++]=S[k++],x==this.blockSize){s(this,T),x=0;break}}this.h=x,this.o+=E},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;var _=8*this.o;for(E=S.length-8;E<S.length;++E)S[E]=_&255,_/=256;for(this.u(S),S=Array(16),E=_=0;4>E;++E)for(var T=0;32>T;T+=8)S[_++]=this.g[E]>>>T&255;return S};function i(S,E){var _=a;return Object.prototype.hasOwnProperty.call(_,S)?_[S]:_[S]=E(S)}function o(S,E){this.h=E;for(var _=[],T=!0,x=S.length-1;0<=x;x--){var k=S[x]|0;T&&k==E||(_[x]=k,T=!1)}this.g=_}var a={};function c(S){return-128<=S&&128>S?i(S,function(E){return new o([E|0],0>E?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return h;if(0>S)return P(u(-S));for(var E=[],_=1,T=0;S>=_;T++)E[T]=S/_|0,_*=4294967296;return new o(E,0)}function f(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return P(f(S.substring(1),E));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(E,8)),T=h,x=0;x<S.length;x+=8){var k=Math.min(8,S.length-x),I=parseInt(S.substring(x,x+k),E);8>k?(k=u(Math.pow(E,k)),T=T.j(k).add(u(I))):(T=T.j(_),T=T.add(u(I)))}return T}var h=c(0),p=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(w(this))return-P(this).m();for(var S=0,E=1,_=0;_<this.g.length;_++){var T=this.i(_);S+=(0<=T?T:4294967296+T)*E,E*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(w(this))return"-"+P(this).toString(S);for(var E=u(Math.pow(S,6)),_=this,T="";;){var x=C(_,E).g;_=O(_,x.j(E));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(S);if(_=x,y(_))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(var E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function w(S){return S.h==-1}t.l=function(S){return S=O(this,S),w(S)?-1:y(S)?0:1};function P(S){for(var E=S.g.length,_=[],T=0;T<E;T++)_[T]=~S.g[T];return new o(_,~S.h).add(p)}t.abs=function(){return w(this)?P(this):this},t.add=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0,x=0;x<=E;x++){var k=T+(this.i(x)&65535)+(S.i(x)&65535),I=(k>>>16)+(this.i(x)>>>16)+(S.i(x)>>>16);T=I>>>16,k&=65535,I&=65535,_[x]=I<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function O(S,E){return S.add(P(E))}t.j=function(S){if(y(this)||y(S))return h;if(w(this))return w(S)?P(this).j(P(S)):P(P(this).j(S));if(w(S))return P(this.j(P(S)));if(0>this.l(m)&&0>S.l(m))return u(this.m()*S.m());for(var E=this.g.length+S.g.length,_=[],T=0;T<2*E;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var x=0;x<S.g.length;x++){var k=this.i(T)>>>16,I=this.i(T)&65535,ge=S.i(x)>>>16,ve=S.i(x)&65535;_[2*T+2*x]+=I*ve,R(_,2*T+2*x),_[2*T+2*x+1]+=k*ve,R(_,2*T+2*x+1),_[2*T+2*x+1]+=I*ge,R(_,2*T+2*x+1),_[2*T+2*x+2]+=k*ge,R(_,2*T+2*x+2)}for(T=0;T<E;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=E;T<2*E;T++)_[T]=0;return new o(_,0)};function R(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function v(S,E){this.g=S,this.h=E}function C(S,E){if(y(E))throw Error("division by zero");if(y(S))return new v(h,h);if(w(S))return E=C(P(S),E),new v(P(E.g),P(E.h));if(w(E))return E=C(S,P(E)),new v(P(E.g),E.h);if(30<S.g.length){if(w(S)||w(E))throw Error("slowDivide_ only works with positive integers.");for(var _=p,T=E;0>=T.l(S);)_=D(_),T=D(T);var x=F(_,1),k=F(T,1);for(T=F(T,2),_=F(_,2);!y(T);){var I=k.add(T);0>=I.l(S)&&(x=x.add(_),k=I),T=F(T,1),_=F(_,1)}return E=O(S,x.j(E)),new v(x,E)}for(x=h;0<=S.l(E);){for(_=Math.max(1,Math.floor(S.m()/E.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=u(_),I=k.j(E);w(I)||0<I.l(S);)_-=T,k=u(_),I=k.j(E);y(k)&&(k=p),x=x.add(k),S=O(S,I)}return new v(x,S)}t.A=function(S){return C(this,S).h},t.and=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)&S.i(T);return new o(_,this.h&S.h)},t.or=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)|S.i(T);return new o(_,this.h|S.h)},t.xor=function(S){for(var E=Math.max(this.g.length,S.g.length),_=[],T=0;T<E;T++)_[T]=this.i(T)^S.i(T);return new o(_,this.h^S.h)};function D(S){for(var E=S.g.length+1,_=[],T=0;T<E;T++)_[T]=S.i(T)<<1|S.i(T-1)>>>31;return new o(_,S.h)}function F(S,E){var _=E>>5;E%=32;for(var T=S.g.length-_,x=[],k=0;k<T;k++)x[k]=0<E?S.i(k+_)>>>E|S.i(k+_+1)<<32-E:S.i(k+_);return new o(x,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Xr=o}).apply(typeof Oy<"u"?Oy:typeof self<"u"?self:typeof window<"u"?window:{});var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ww,Po,Tw,Dl,gh,Iw,Aw,Sw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof gl=="object"&&gl];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var b=0;b<l.length-1;b++){var L=l[b];if(!(L in g))break e;g=g[L]}l=l[l.length-1],b=g[l],d=d(b),d!=b&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,b=!1,L={next:function(){if(!b&&g<l.length){var V=g++;return{value:d(V,l[V]),done:!1}}return b=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function f(l,d,g){return l.call.apply(l.bind,arguments)}function h(l,d,g){if(!l)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,b),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:h,p.apply(null,arguments)}function m(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var b=g.slice();return b.push.apply(b,arguments),l.apply(this,b)}}function y(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(b,L,V){for(var Y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Y[Ue-2]=arguments[Ue];return d.prototype[L].apply(b,Y)}}function w(l){const d=l.length;if(0<d){const g=Array(d);for(let b=0;b<d;b++)g[b]=l[b];return g}return[]}function P(l,d){for(let g=1;g<arguments.length;g++){const b=arguments[g];if(c(b)){const L=l.length||0,V=b.length||0;l.length=L+V;for(let Y=0;Y<V;Y++)l[L+Y]=b[Y]}else l.push(b)}}class O{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function R(l){return/^[\s\xa0]*$/.test(l)}function v(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function C(l){return C[" "](l),l}C[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function F(l,d,g){for(const b in l)d.call(g,l[b],b,l)}function S(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function E(l){const d={};for(const g in l)d[g]=l[g];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,d){let g,b;for(let L=1;L<arguments.length;L++){b=arguments[L];for(g in b)l[g]=b[g];for(let V=0;V<_.length;V++)g=_[V],Object.prototype.hasOwnProperty.call(b,g)&&(l[g]=b[g])}}function x(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function k(l){a.setTimeout(()=>{throw l},0)}function I(){var l=Be;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,g){const b=ve.get();b.set(d,g),this.h?this.h.next=b:this.g=b,this.h=b}}var ve=new O(()=>new Z,l=>l.reset());class Z{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,Be=new ge,gn=()=>{const l=a.Promise.resolve(void 0);se=()=>{l.then(rn)}};var rn=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(g){k(g)}var d=ve;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}ne=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var Ir=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function Pn(l,d){if(Je.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,b=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(D){e:{try{C(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:qt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pn.aa.h.call(this)}}y(Pn,Je);var qt={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(l,d,g,b,L){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!b,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,d,g,b,L){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var Y=A(l,d,b,L);return-1<Y?(d=l[Y],g||(d.fa=!1)):(d=new X(d,this.src,V,!!b,L),d.fa=g,l.push(d)),d};function Le(l,d){var g=d.type;if(g in l.g){var b=l.g[g],L=Array.prototype.indexOf.call(b,d,void 0),V;(V=0<=L)&&Array.prototype.splice.call(b,L,1),V&&(re(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function A(l,d,g,b){for(var L=0;L<l.length;++L){var V=l[L];if(!V.da&&V.listener==d&&V.capture==!!g&&V.ha==b)return L}return-1}var N="closure_lm_"+(1e6*Math.random()|0),M={};function H(l,d,g,b,L){if(Array.isArray(d)){for(var V=0;V<d.length;V++)H(l,d[V],g,b,L);return null}return g=ae(g),l&&l[$]?l.K(d,g,u(b)?!!b.capture:!1,L):U(l,d,g,!1,b,L)}function U(l,d,g,b,L,V){if(!d)throw Error("Invalid event type");var Y=u(L)?!!L.capture:!!L,Ue=le(l);if(Ue||(l[N]=Ue=new Ie(l)),g=Ue.add(d,g,b,Y,V),g.proxy)return g;if(b=z(),g.proxy=b,b.src=l,b.listener=g,l.addEventListener)Ir||(L=Y),L===void 0&&(L=!1),l.addEventListener(d.toString(),b,L);else if(l.attachEvent)l.attachEvent(K(d.toString()),b);else if(l.addListener&&l.removeListener)l.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return g}function z(){function l(g){return d.call(l.src,l.listener,g)}const d=q;return l}function Q(l,d,g,b,L){if(Array.isArray(d))for(var V=0;V<d.length;V++)Q(l,d[V],g,b,L);else b=u(b)?!!b.capture:!!b,g=ae(g),l&&l[$]?(l=l.i,d=String(d).toString(),d in l.g&&(V=l.g[d],g=A(V,g,b,L),-1<g&&(re(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete l.g[d],l.h--)))):l&&(l=le(l))&&(d=l.g[d.toString()],l=-1,d&&(l=A(d,g,b,L)),(g=-1<l?d[l]:null)&&G(g))}function G(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[$])Le(d.i,l);else{var g=l.type,b=l.proxy;d.removeEventListener?d.removeEventListener(g,b,l.capture):d.detachEvent?d.detachEvent(K(g),b):d.addListener&&d.removeListener&&d.removeListener(b),(g=le(d))?(Le(g,l),g.h==0&&(g.src=null,d[N]=null)):re(l)}}}function K(l){return l in M?M[l]:M[l]="on"+l}function q(l,d){if(l.da)l=!0;else{d=new Pn(d,this);var g=l.listener,b=l.ha||l.src;l.fa&&G(l),l=g.call(b,d)}return l}function le(l){return l=l[N],l instanceof Ie?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[J]||(l[J]=function(d){return l.handleEvent(d)}),l[J])}function ie(){Qe.call(this),this.i=new Ie(this),this.M=this,this.F=null}y(ie,Qe),ie.prototype[$]=!0,ie.prototype.removeEventListener=function(l,d,g,b){Q(this,l,d,g,b)};function he(l,d){var g,b=l.F;if(b)for(g=[];b;b=b.F)g.push(b);if(l=l.M,b=d.type||d,typeof d=="string")d=new Je(d,l);else if(d instanceof Je)d.target=d.target||l;else{var L=d;d=new Je(b,l),T(d,L)}if(L=!0,g)for(var V=g.length-1;0<=V;V--){var Y=d.g=g[V];L=ke(Y,b,!0,d)&&L}if(Y=d.g=l,L=ke(Y,b,!0,d)&&L,L=ke(Y,b,!1,d)&&L,g)for(V=0;V<g.length;V++)Y=d.g=g[V],L=ke(Y,b,!1,d)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],b=0;b<g.length;b++)re(g[b]);delete l.g[d],l.h--}}this.F=null},ie.prototype.K=function(l,d,g,b){return this.i.add(String(l),d,!1,g,b)},ie.prototype.L=function(l,d,g,b){return this.i.add(String(l),d,!0,g,b)};function ke(l,d,g,b){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,V=0;V<d.length;++V){var Y=d[V];if(Y&&!Y.da&&Y.capture==g){var Ue=Y.listener,_t=Y.ha||Y.src;Y.fa&&Le(l.i,Y),L=Ue.call(_t,b)!==!1&&L}}return L&&!b.defaultPrevented}function Ce(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function gt(l){l.g=Ce(()=>{l.g=null,l.i&&(l.i=!1,gt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ft extends Qe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(l){Qe.call(this),this.h=l,this.g={}}y(yt,Qe);var Rt=[];function Ar(l){F(l.g,function(d,g){this.g.hasOwnProperty(g)&&G(d)},l),l.g={}}yt.prototype.N=function(){yt.aa.N.call(this),Ar(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qs=a.JSON.stringify,Ut=a.JSON.parse,sn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Js(){}Js.prototype.h=null;function oo(l){return l.h||(l.h=l.i())}function Mp(){}var ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wu(){Je.call(this,"d")}y(wu,Je);function Tu(){Je.call(this,"c")}y(Tu,Je);var ms={},Vp=null;function $a(){return Vp=Vp||new ie}ms.La="serverreachability";function Fp(l){Je.call(this,ms.La,l)}y(Fp,Je);function lo(l){const d=$a();he(d,new Fp(d))}ms.STAT_EVENT="statevent";function Up(l,d){Je.call(this,ms.STAT_EVENT,l),this.stat=d}y(Up,Je);function $t(l){const d=$a();he(d,new Up(d,l))}ms.Ma="timingevent";function $p(l,d){Je.call(this,ms.Ma,l),this.size=d}y($p,Je);function co(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function uo(){this.g=!0}uo.prototype.xa=function(){this.g=!1};function bI(l,d,g,b,L,V){l.info(function(){if(l.g)if(V)for(var Y="",Ue=V.split("&"),_t=0;_t<Ue.length;_t++){var Pe=Ue[_t].split("=");if(1<Pe.length){var Ct=Pe[0];Pe=Pe[1];var Pt=Ct.split("_");Y=2<=Pt.length&&Pt[1]=="type"?Y+(Ct+"="+Pe+"&"):Y+(Ct+"=redacted&")}}else Y=null;else Y=V;return"XMLHTTP REQ ("+b+") [attempt "+L+"]: "+d+`
`+g+`
`+Y})}function wI(l,d,g,b,L,V,Y){l.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+L+"]: "+d+`
`+g+`
`+V+" "+Y})}function Xs(l,d,g,b){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+II(l,g)+(b?" "+b:"")})}function TI(l,d){l.info(function(){return"TIMEOUT: "+d})}uo.prototype.info=function(){};function II(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var b=g[l];if(!(2>b.length)){var L=b[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return Qs(g)}catch{return d}}var ja={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Iu;function Ba(){}y(Ba,Js),Ba.prototype.g=function(){return new XMLHttpRequest},Ba.prototype.i=function(){return{}},Iu=new Ba;function Sr(l,d,g,b){this.j=l,this.i=d,this.l=g,this.R=b||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var Hp={},Au={};function Su(l,d,g){l.L=1,l.v=Wa(Qn(d)),l.m=g,l.P=!0,zp(l,null)}function zp(l,d){l.F=Date.now(),Ha(l),l.A=Qn(l.v);var g=l.A,b=l.R;Array.isArray(b)||(b=[String(b)]),sm(g.i,"t",b),l.C=0,g=l.j.J,l.h=new Bp,l.g=wm(l.j,g?d:null,!l.m),0<l.O&&(l.M=new ft(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,b=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Rt[0]=L.toString()),L=Rt);for(var V=0;V<L.length;V++){var Y=H(g,L[V],b||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),lo(),bI(l.i,l.u,l.A,l.l,l.R,l.m)}Sr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Jn(l)==3?d.j():this.Y(l)},Sr.prototype.Y=function(l){try{if(l==this.g)e:{const Pt=Jn(this.g);var d=this.g.Ba();const ti=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||fm(this.g)))){this.J||Pt!=4||d==7||(d==8||0>=ti?lo(3):lo(2)),Ru(this);var g=this.g.Z();this.X=g;t:if(qp(this)){var b=fm(this.g);l="";var L=b.length,V=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gs(this),fo(this);var Y="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(b[d],{stream:!(V&&d==L-1)});b.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,wI(this.i,this.u,this.A,this.l,this.R,Pt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,_t=this.g;if((Ue=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(Ue)){var Pe=Ue;break t}}Pe=null}if(g=Pe)Xs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cu(this,g);else{this.o=!1,this.s=3,$t(12),gs(this),fo(this);break e}}if(this.P){g=!0;let yn;for(;!this.J&&this.C<Y.length;)if(yn=AI(this,Y),yn==Au){Pt==4&&(this.s=4,$t(14),g=!1),Xs(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Hp){this.s=4,$t(15),Xs(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else Xs(this.i,this.l,yn,null),Cu(this,yn);if(qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||Y.length!=0||this.h.h||(this.s=1,$t(16),g=!1),this.o=this.o&&g,!g)Xs(this.i,this.l,Y,"[Invalid Chunked Response]"),gs(this),fo(this);else if(0<Y.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Du(Ct),Ct.M=!0,$t(11))}}else Xs(this.i,this.l,Y,null),Cu(this,Y);Pt==4&&gs(this),this.o&&!this.J&&(Pt==4?_m(this.j,this):(this.o=!1,Ha(this)))}else BI(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),gs(this),fo(this)}}}catch{}finally{}};function qp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function AI(l,d){var g=l.C,b=d.indexOf(`
`,g);return b==-1?Au:(g=Number(d.substring(g,b)),isNaN(g)?Hp:(b+=1,b+g>d.length?Au:(d=d.slice(b,b+g),l.C=b+g,d)))}Sr.prototype.cancel=function(){this.J=!0,gs(this)};function Ha(l){l.S=Date.now()+l.I,Wp(l,l.I)}function Wp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=co(p(l.ba,l),d)}function Ru(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Sr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(TI(this.i,this.A),this.L!=2&&(lo(),$t(17)),gs(this),this.s=2,fo(this)):Wp(this,this.S-l)};function fo(l){l.j.G==0||l.J||_m(l.j,l)}function gs(l){Ru(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Ar(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Cu(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||Pu(g.h,l))){if(!l.K&&Pu(g.h,l)&&g.G==3){try{var b=g.Da.g.parse(d)}catch{b=null}if(Array.isArray(b)&&b.length==3){var L=b;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Xa(g),Qa(g);else break e;Nu(g),$t(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=co(p(g.Za,g),6e3));if(1>=Yp(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else _s(g,11)}else if((l.K||g.g==l)&&Xa(g),!R(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let Pe=L[d];if(g.T=Pe[0],Pe=Pe[1],g.G==2)if(Pe[0]=="c"){g.K=Pe[1],g.ia=Pe[2];const Ct=Pe[3];Ct!=null&&(g.la=Ct,g.j.info("VER="+g.la));const Pt=Pe[4];Pt!=null&&(g.Aa=Pt,g.j.info("SVER="+g.Aa));const ti=Pe[5];ti!=null&&typeof ti=="number"&&0<ti&&(b=1.5*ti,g.L=b,g.j.info("backChannelRequestTimeoutMs_="+b)),b=g;const yn=l.g;if(yn){const el=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(el){var V=b.h;V.g||el.indexOf("spdy")==-1&&el.indexOf("quic")==-1&&el.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ku(V,V.h),V.h=null))}if(b.D){const Lu=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lu&&(b.ya=Lu,ze(b.I,b.D,Lu))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),b=g;var Y=l;if(b.qa=bm(b,b.J?b.ia:null,b.W),Y.K){Qp(b.h,Y);var Ue=Y,_t=b.L;_t&&(Ue.I=_t),Ue.B&&(Ru(Ue),Ha(Ue)),b.g=Y}else gm(b);0<g.i.length&&Ja(g)}else Pe[0]!="stop"&&Pe[0]!="close"||_s(g,7);else g.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?_s(g,7):xu(g):Pe[0]!="noop"&&g.l&&g.l.ta(Pe),g.v=0)}}lo(4)}catch{}}var SI=class{constructor(l,d){this.g=l,this.map=d}};function Kp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Yp(l){return l.h?1:l.g?l.g.size:0}function Pu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function ku(l,d){l.g?l.g.add(d):l.h=d}function Qp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Kp.prototype.cancel=function(){if(this.i=Jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return w(l.i)}function RI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,b=0;b<g;b++)d.push(l[b]);return d}d=[],g=0;for(b in l)d[g++]=l[b];return d}function CI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const b in l)d[g++]=b;return d}}}function Xp(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=CI(l),b=RI(l),L=b.length,V=0;V<L;V++)d.call(void 0,b[V],g&&g[V],l)}var Zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PI(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var b=l[g].indexOf("="),L=null;if(0<=b){var V=l[g].substring(0,b);L=l[g].substring(b+1)}else V=l[g];d(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ys(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ys){this.h=l.h,za(this,l.j),this.o=l.o,this.g=l.g,qa(this,l.s),this.l=l.l;var d=l.i,g=new mo;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),em(this,g),this.m=l.m}else l&&(d=String(l).match(Zp))?(this.h=!1,za(this,d[1]||"",!0),this.o=ho(d[2]||""),this.g=ho(d[3]||"",!0),qa(this,d[4]),this.l=ho(d[5]||"",!0),em(this,d[6]||"",!0),this.m=ho(d[7]||"")):(this.h=!1,this.i=new mo(null,this.h))}ys.prototype.toString=function(){var l=[],d=this.j;d&&l.push(po(d,tm,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(po(d,tm,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(po(g,g.charAt(0)=="/"?xI:OI,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",po(g,DI)),l.join("")};function Qn(l){return new ys(l)}function za(l,d,g){l.j=g?ho(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function qa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function em(l,d,g){d instanceof mo?(l.i=d,LI(l.i,l.h)):(g||(d=po(d,NI)),l.i=new mo(d,l.h))}function ze(l,d,g){l.i.set(d,g)}function Wa(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ho(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function po(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,kI),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function kI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var tm=/[#\/\?@]/g,OI=/[#\?:]/g,xI=/[#\?]/g,NI=/[#\?@]/g,DI=/#/g;function mo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Rr(l){l.g||(l.g=new Map,l.h=0,l.i&&PI(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=mo.prototype,t.add=function(l,d){Rr(this),this.i=null,l=Zs(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function nm(l,d){Rr(l),d=Zs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function rm(l,d){return Rr(l),d=Zs(l,d),l.g.has(d)}t.forEach=function(l,d){Rr(this),this.g.forEach(function(g,b){g.forEach(function(L){l.call(d,L,b,this)},this)},this)},t.na=function(){Rr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let b=0;b<d.length;b++){const L=l[b];for(let V=0;V<L.length;V++)g.push(d[b])}return g},t.V=function(l){Rr(this);let d=[];if(typeof l=="string")rm(this,l)&&(d=d.concat(this.g.get(Zs(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return Rr(this),this.i=null,l=Zs(this,l),rm(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function sm(l,d,g){nm(l,d),0<g.length&&(l.i=null,l.g.set(Zs(l,d),w(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var b=d[g];const V=encodeURIComponent(String(b)),Y=this.V(b);for(b=0;b<Y.length;b++){var L=V;Y[b]!==""&&(L+="="+encodeURIComponent(String(Y[b]))),l.push(L)}}return this.i=l.join("&")};function Zs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function LI(l,d){d&&!l.j&&(Rr(l),l.i=null,l.g.forEach(function(g,b){var L=b.toLowerCase();b!=L&&(nm(this,b),sm(this,L,g))},l)),l.j=d}function MI(l,d){const g=new uo;if(a.Image){const b=new Image;b.onload=m(Cr,g,"TestLoadImage: loaded",!0,d,b),b.onerror=m(Cr,g,"TestLoadImage: error",!1,d,b),b.onabort=m(Cr,g,"TestLoadImage: abort",!1,d,b),b.ontimeout=m(Cr,g,"TestLoadImage: timeout",!1,d,b),a.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=l}else d(!1)}function VI(l,d){const g=new uo,b=new AbortController,L=setTimeout(()=>{b.abort(),Cr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:b.signal}).then(V=>{clearTimeout(L),V.ok?Cr(g,"TestPingServer: ok",!0,d):Cr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Cr(g,"TestPingServer: error",!1,d)})}function Cr(l,d,g,b,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),b(g)}catch{}}function FI(){this.g=new sn}function UI(l,d,g){const b=g||"";try{Xp(l,function(L,V){let Y=L;u(L)&&(Y=Qs(L)),d.push(b+V+"="+encodeURIComponent(Y))})}catch(L){throw d.push(b+"type="+encodeURIComponent("_badmap")),L}}function Ka(l){this.l=l.Ub||null,this.j=l.eb||!1}y(Ka,Js),Ka.prototype.g=function(){return new Ga(this.l,this.j)},Ka.prototype.i=function(l){return function(){return l}}({});function Ga(l,d){ie.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Ga,ie),t=Ga.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,yo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,yo(this)),this.g&&(this.readyState=3,yo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;im(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function im(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?go(this):yo(this),this.readyState==3&&im(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,go(this))},t.Qa=function(l){this.g&&(this.response=l,go(this))},t.ga=function(){this.g&&go(this)};function go(l){l.readyState=4,l.l=null,l.j=null,l.v=null,yo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function yo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function om(l){let d="";return F(l,function(g,b){d+=b,d+=":",d+=g,d+=`\r
`}),d}function Ou(l,d,g){e:{for(b in g){var b=!1;break e}b=!0}b||(g=om(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,d,g))}function et(l){ie.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(et,ie);var $I=/^https?$/i,jI=["POST","PUT"];t=et.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Iu.g(),this.v=this.o?oo(this.o):oo(Iu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(V){am(this,V);return}if(l=g||"",g=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var L in b)g.set(L,b[L]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const V of b.keys())g.set(V,b.get(V));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jI,d,void 0))||b||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Y]of g)this.g.setRequestHeader(V,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{um(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){am(this,V)}};function am(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,lm(l),Ya(l)}function lm(l){l.A||(l.A=!0,he(l,"complete"),he(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,he(this,"complete"),he(this,"abort"),Ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cm(this):this.bb())},t.bb=function(){cm(this)};function cm(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Jn(l)!=4||l.Z()!=2)){if(l.u&&Jn(l)==4)Ce(l.Ea,0,l);else if(he(l,"readystatechange"),Jn(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var b;if(b=Y===0){var L=String(l.D).match(Zp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),b=!$I.test(L?L.toLowerCase():"")}g=b}if(g)he(l,"complete"),he(l,"success");else{l.m=6;try{var V=2<Jn(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",lm(l)}}finally{Ya(l)}}}}function Ya(l,d){if(l.g){um(l);const g=l.g,b=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||he(l,"ready");try{g.onreadystatechange=b}catch{}}}function um(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Jn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ut(d)}};function fm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function BI(l){const d={};l=(l.g&&2<=Jn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<l.length;b++){if(R(l[b]))continue;var g=x(l[b]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=d[L]||[];d[L]=V,V.push(g)}S(d,function(b){return b.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _o(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function hm(l){this.Aa=0,this.i=[],this.j=new uo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_o("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_o("baseRetryDelayMs",5e3,l),this.cb=_o("retryDelaySeedMs",1e4,l),this.Wa=_o("forwardChannelMaxRetries",2,l),this.wa=_o("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Kp(l&&l.concurrentRequestLimit),this.Da=new FI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hm.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,b){$t(0),this.W=l,this.H=d||{},g&&b!==void 0&&(this.H.OSID=g,this.H.OAID=b),this.F=this.X,this.I=bm(this,null,this.W),Ja(this)};function xu(l){if(dm(l),l.G==3){var d=l.U++,g=Qn(l.I);if(ze(g,"SID",l.K),ze(g,"RID",d),ze(g,"TYPE","terminate"),vo(l,g),d=new Sr(l,l.j,d),d.L=2,d.v=Wa(Qn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=wm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ha(d)}Em(l)}function Qa(l){l.g&&(Du(l),l.g.cancel(),l.g=null)}function dm(l){Qa(l),l.u&&(a.clearTimeout(l.u),l.u=null),Xa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ja(l){if(!Gp(l.h)&&!l.s){l.s=!0;var d=l.Ga;se||gn(),ne||(se(),ne=!0),Be.add(d,l),l.B=0}}function HI(l,d){return Yp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=co(p(l.Ga,l,d),vm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sr(this,this.j,l);let V=this.o;if(this.S&&(V?(V=E(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var b=this.i[g];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(d+=b,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=mm(this,L,d),g=Qn(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),vo(this,g),V&&(this.O?d="headers="+encodeURIComponent(String(om(V)))+"&"+d:this.m&&Ou(g,this.m,V)),ku(this.h,L),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",d),ze(g,"SID","null"),L.T=!0,Su(L,g,null)):Su(L,g,d),this.G=2}}else this.G==3&&(l?pm(this,l):this.i.length==0||Gp(this.h)||pm(this))};function pm(l,d){var g;d?g=d.l:g=l.U++;const b=Qn(l.I);ze(b,"SID",l.K),ze(b,"RID",g),ze(b,"AID",l.T),vo(l,b),l.m&&l.o&&Ou(b,l.m,l.o),g=new Sr(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=mm(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ku(l.h,g),Su(g,b,d)}function vo(l,d){l.H&&F(l.H,function(g,b){ze(d,b,g)}),l.l&&Xp({},function(g,b){ze(d,b,g)})}function mm(l,d,g){g=Math.min(l.i.length,g);var b=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let V=-1;for(;;){const Y=["count="+g];V==-1?0<g?(V=L[0].g,Y.push("ofs="+V)):V=0:Y.push("ofs="+V);let Ue=!0;for(let _t=0;_t<g;_t++){let Pe=L[_t].g;const Ct=L[_t].map;if(Pe-=V,0>Pe)V=Math.max(0,L[_t].g-100),Ue=!1;else try{UI(Ct,Y,"req"+Pe+"_")}catch{b&&b(Ct)}}if(Ue){b=Y.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,b}function gm(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;se||gn(),ne||(se(),ne=!0),Be.add(d,l),l.v=0}}function Nu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=co(p(l.Fa,l),vm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,ym(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=co(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),Qa(this),ym(this))};function Du(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ym(l){l.g=new Sr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Qn(l.qa);ze(d,"RID","rpc"),ze(d,"SID",l.K),ze(d,"AID",l.T),ze(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(d,"TO",l.ja),ze(d,"TYPE","xmlhttp"),vo(l,d),l.m&&l.o&&Ou(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Wa(Qn(d)),g.m=null,g.P=!0,zp(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Qa(this),Nu(this),$t(19))};function Xa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function _m(l,d){var g=null;if(l.g==d){Xa(l),Du(l),l.g=null;var b=2}else if(Pu(l.h,d))g=d.D,Qp(l.h,d),b=1;else return;if(l.G!=0){if(d.o)if(b==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;b=$a(),he(b,new $p(b,g)),Ja(l)}else gm(l);else if(L=d.s,L==3||L==0&&0<d.X||!(b==1&&HI(l,d)||b==2&&Nu(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),L){case 1:_s(l,5);break;case 4:_s(l,10);break;case 3:_s(l,6);break;default:_s(l,2)}}}function vm(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function _s(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),b=l.Xa;const L=!b;b=new ys(b||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||za(b,"https"),Wa(b),L?MI(b.toString(),g):VI(b.toString(),g)}else $t(2);l.G=0,l.l&&l.l.sa(d),Em(l),dm(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function Em(l){if(l.G=0,l.ka=[],l.l){const d=Jp(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,w(l.i),l.i.length=0),l.l.ra()}}function bm(l,d,g){var b=g instanceof ys?Qn(g):new ys(g);if(b.g!="")d&&(b.g=d+"."+b.g),qa(b,b.s);else{var L=a.location;b=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var V=new ys(null);b&&za(V,b),d&&(V.g=d),L&&qa(V,L),g&&(V.l=g),b=V}return g=l.D,d=l.ya,g&&d&&ze(b,g,d),ze(b,"VER",l.la),vo(l,b),b}function wm(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new et(new Ka({eb:g})):new et(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Za(){}Za.prototype.g=function(l,d){return new Jt(l,d)};function Jt(l,d){ie.call(this),this.g=new hm(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!R(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!R(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ei(this)}y(Jt,ie),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){xu(this.g)},Jt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Qs(l),l=g);d.i.push(new SI(d.Ya++,l)),d.G==3&&Ja(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,xu(this.g),delete this.g,Jt.aa.N.call(this)};function Im(l){wu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}y(Im,wu);function Am(){Tu.call(this),this.status=1}y(Am,Tu);function ei(l){this.g=l}y(ei,Tm),ei.prototype.ua=function(){he(this.g,"a")},ei.prototype.ta=function(l){he(this.g,new Im(l))},ei.prototype.sa=function(l){he(this.g,new Am)},ei.prototype.ra=function(){he(this.g,"b")},Za.prototype.createWebChannel=Za.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,Sw=function(){return new Za},Aw=function(){return $a()},Iw=ms,gh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ja.NO_ERROR=0,ja.TIMEOUT=8,ja.HTTP_ERROR=6,Dl=ja,jp.COMPLETE="complete",Tw=jp,Mp.EventType=ao,ao.OPEN="a",ao.CLOSE="b",ao.ERROR="c",ao.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Po=Mp,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,ww=et}).apply(typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{});const xy="@firebase/firestore",Ny="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let to="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new xd("@firebase/firestore");function li(){return Fs.logLevel}function te(t,...e){if(Fs.logLevel<=be.DEBUG){const n=e.map(Hd);Fs.debug(`Firestore (${to}): ${t}`,...n)}}function gr(t,...e){if(Fs.logLevel<=be.ERROR){const n=e.map(Hd);Fs.error(`Firestore (${to}): ${t}`,...n)}}function $i(t,...e){if(Fs.logLevel<=be.WARN){const n=e.map(Hd);Fs.warn(`Firestore (${to}): ${t}`,...n)}}function Hd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Rw(t,r,n)}function Rw(t,e,n){let r=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw gr(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Rw(e,s,r)}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class HN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zN{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new Cw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new Nt(e)}}class qN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new qN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=GN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function yh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return df(s)===df(i)?we(s,i):df(s)?1:-1}return we(t.length,e.length)}const YN=55296,QN=57343;function df(t){const e=t.charCodeAt(0);return e>=YN&&e<=QN}function ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="__name__";class xn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=xn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=xn.isNumericId(e),s=xn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?xn.extractNumericId(e).compare(xn.extractNumericId(n)):yh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xr.fromString(e.substring(4,e.length-2))}}class qe extends xn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const JN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends xn{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return JN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ly}static keyField(){return new Tt([Ly])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new oe(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new oe(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t,e,n){if(!n)throw new oe(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XN(t,e,n,r){if(e===!0&&r===!0)throw new oe(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!fe.isDocumentKey(t))throw new oe(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vy(t){if(fe.isDocumentKey(t))throw new oe(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function qd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qd(t);throw new oe(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function lt(t,e){const n={typeString:t};return e&&(n.value=e),n}function xa(t,e){if(!kw(t))throw new oe(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new oe(B.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=-62135596800,Uy=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Uy);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fy)throw new oe(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uy}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xa(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:lt("string",We._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const da=-1;function ZN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new ns(s,fe.empty(),e)}function eD(t){return new ns(t.readTime,t.key,da)}class ns{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ns(ye.min(),fe.empty(),da)}static max(){return new ns(ye.max(),fe.empty(),da)}}function tD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==nD)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function sD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ro(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Wd=-1;function Xc(t){return t==null}function hc(t){return t===0&&1/t==-1/0}function iD(t){return typeof t=="number"&&Number.isInteger(t)&&!hc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="";function oD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$y(e)),e=aD(t.get(n),e);return $y(e)}function aD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ow:n+="";break;default:n+=i}}return n}function $y(t){return t+Ow+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yl(this.root,e,this.comparator,!0)}}class yl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new By(this.data.getIterator())}getIteratorFrom(e){return new By(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class By{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ut(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nw("Invalid base64 string: "+i):i}}(e);return new St(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const lD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=lD.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="server_timestamp",Lw="__type__",Mw="__previous_value__",Vw="__local_write_time__";function Kd(t){return(t?.mapValue?.fields||{})[Lw]?.stringValue===Dw}function Zc(t){const e=t.mapValue.fields[Mw];return Kd(e)?Zc(e):e}function pa(t){const e=rs(t.mapValue.fields[Vw].timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,r,s,i,o,a,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const dc="(default)";class ma{constructor(e,n){this.projectId=e,this.database=n||dc}static empty(){return new ma("","")}get isDefaultDatabase(){return this.database===dc}isEqual(e){return e instanceof ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="__type__",uD="__max__",_l={mapValue:{}},Uw="__vector__",pc="value";function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kd(t)?4:hD(t)?9007199254740991:fD(t)?10:11:me(28295,{value:t})}function Kn(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pa(t).isEqual(pa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rs(s.timestampValue),a=rs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ss(s.bytesValue).isEqual(ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=st(s.doubleValue),a=st(i.doubleValue);return o===a?hc(o)===hc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(jy(o)!==jy(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Kn(o[c],a[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function ga(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function Hi(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=st(i.integerValue||i.doubleValue),c=st(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Hy(t.timestampValue,e.timestampValue);case 4:return Hy(pa(t),pa(e));case 5:return yh(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ss(i),c=ss(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=we(a[u],c[u]);if(f!==0)return f}return we(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=we(st(i.latitude),st(o.latitude));return a!==0?a:we(st(i.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zy(t.arrayValue,e.arrayValue);case 10:return function(i,o){const a=i.fields||{},c=o.fields||{},u=a[pc]?.arrayValue,f=c[pc]?.arrayValue,h=we(u?.values?.length||0,f?.values?.length||0);return h!==0?h:zy(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===_l.mapValue&&o===_l.mapValue)return 0;if(i===_l.mapValue)return 1;if(o===_l.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let h=0;h<c.length&&h<f.length;++h){const p=yh(c[h],f[h]);if(p!==0)return p;const m=Hi(a[c[h]],u[f[h]]);if(m!==0)return m}return we(c.length,f.length)}(t.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function Hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=rs(t),r=rs(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function zy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Hi(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function zi(t){return _h(t)}function _h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_h(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_h(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function Ll(t){switch(is(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zc(t);return e?16+Ll(e):16;case 5:return 2*t.stringValue.length;case 6:return ss(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ll(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ds(r.fields,(i,o)=>{s+=i.length+Ll(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function vh(t){return!!t&&"integerValue"in t}function Gd(t){return!!t&&"arrayValue"in t}function qy(t){return!!t&&"nullValue"in t}function Wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ml(t){return!!t&&"mapValue"in t}function fD(t){return(t?.mapValue?.fields||{})[Fw]?.stringValue===Uw}function zo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zo(t.arrayValue.values[n]);return e}return{...t}}function hD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===uD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zo(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=zo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ml(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(zo(this.value))}}function $w(t){const e=[];return ds(t.fields,(n,r)=>{const s=new Tt([n]);if(Ml(r)){const i=$w(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,ye.min(),ye.min(),ye.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,ye.min(),ye.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ye.min(),ye.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mc{constructor(e,n){this.position=e,this.inclusive=n}}function Ky(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=Hi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class gc{constructor(e,n="asc"){this.field=e,this.dir=n}}function dD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jw{}class ct extends jw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mD(e,n,r):n==="array-contains"?new _D(e,r):n==="in"?new vD(e,r):n==="not-in"?new ED(e,r):n==="array-contains-any"?new bD(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gD(e,r):new yD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Hi(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(Hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends jw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Gn(e,n)}matches(e){return Bw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bw(t){return t.op==="and"}function Hw(t){return pD(t)&&Bw(t)}function pD(t){for(const e of t.filters)if(e instanceof Gn)return!1;return!0}function Eh(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+zi(t.value);if(Hw(t))return t.filters.map(e=>Eh(e)).join(",");{const e=t.filters.map(n=>Eh(n)).join(",");return`${t.op}(${e})`}}function zw(t,e){return t instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&Kn(r.value,s.value)}(t,e):t instanceof Gn?function(r,s){return s instanceof Gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&zw(o,s.filters[a]),!0):!1}(t,e):void me(19439)}function qw(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${zi(n.value)}`}(t):t instanceof Gn?function(n){return n.op.toString()+" {"+n.getFilters().map(qw).join(" ,")+"}"}(t):"Filter"}class mD extends ct{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class gD extends ct{constructor(e,n){super(e,"in",n),this.keys=Ww("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yD extends ct{constructor(e,n){super(e,"not-in",n),this.keys=Ww("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ww(t,e){return(e.arrayValue?.values||[]).map(n=>fe.fromName(n.referenceValue))}class _D extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gd(n)&&ga(n.arrayValue,this.value)}}class vD extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class ED extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ga(this.value.arrayValue,n)}}class bD extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ga(this.value.arrayValue,r))}}/**
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
 */class wD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Yy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new wD(t,e,n,r,s,i,o)}function Yd(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zi(r)).join(",")),e.Te=n}return e.Te}function Qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gy(t.startAt,e.startAt)&&Gy(t.endAt,e.endAt)}function bh(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function TD(t,e,n,r,s,i,o,a){return new eu(t,e,n,r,s,i,o,a)}function Kw(t){return new eu(t)}function Qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ID(t){return t.collectionGroup!==null}function qo(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new gc(i,r))}),n.has(Tt.keyField().canonicalString())||e.Ie.push(new gc(Tt.keyField(),r))}return e.Ie}function jn(t){const e=_e(t);return e.Ee||(e.Ee=AD(e,qo(t))),e.Ee}function AD(t,e){if(t.limitType==="F")return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new gc(s.field,i)});const n=t.endAt?new mc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mc(t.startAt.position,t.startAt.inclusive):null;return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wh(t,e,n){return new eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tu(t,e){return Qd(jn(t),jn(e))&&t.limitType===e.limitType}function Gw(t){return`${Yd(jn(t))}|lt:${t.limitType}`}function ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qw(s)).join(", ")}]`),Xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>zi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>zi(s)).join(",")),`Target(${r})`}(jn(t))}; limitType=${t.limitType})`}function nu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Ky(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,qo(r),s)||r.endAt&&!function(o,a,c){const u=Ky(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,qo(r),s))}(t,e)}function SD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yw(t){return(e,n)=>{let r=!1;for(const s of qo(t)){const i=RD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RD(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Hi(c,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new Ze(fe.comparator);function yr(){return CD}const Qw=new Ze(fe.comparator);function ko(...t){let e=Qw;for(const n of t)e=e.insert(n.key,n);return e}function Jw(t){let e=Qw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ss(){return Wo()}function Xw(){return Wo()}function Wo(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const PD=new Ze(fe.comparator),kD=new ut(fe.comparator);function Te(...t){let e=kD;for(const n of t)e=e.add(n);return e}const OD=new ut(we);function xD(){return OD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function Zw(t){return{integerValue:""+t}}function ND(t,e){return iD(e)?Zw(e):Jd(t,e)}/**
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
 */class ru{constructor(){this._=void 0}}function DD(t,e,n){return t instanceof yc?function(s,i){const o={fields:{[Lw]:{stringValue:Dw},[Vw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Kd(i)&&(i=Zc(i)),i&&(o.fields[Mw]=i),{mapValue:o}}(n,e):t instanceof ya?tT(t,e):t instanceof _a?nT(t,e):function(s,i){const o=eT(s,i),a=Jy(o)+Jy(s.Ae);return vh(o)&&vh(s.Ae)?Zw(a):Jd(s.serializer,a)}(t,e)}function LD(t,e,n){return t instanceof ya?tT(t,e):t instanceof _a?nT(t,e):n}function eT(t,e){return t instanceof _c?function(r){return vh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class yc extends ru{}class ya extends ru{constructor(e){super(),this.elements=e}}function tT(t,e){const n=rT(e);for(const r of t.elements)n.some(s=>Kn(s,r))||n.push(r);return{arrayValue:{values:n}}}class _a extends ru{constructor(e){super(),this.elements=e}}function nT(t,e){let n=rT(e);for(const r of t.elements)n=n.filter(s=>!Kn(s,r));return{arrayValue:{values:n}}}class _c extends ru{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Jy(t){return st(t.integerValue||t.doubleValue)}function rT(t){return Gd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ya&&s instanceof ya||r instanceof _a&&s instanceof _a?ji(r.elements,s.elements,Kn):r instanceof _c&&s instanceof _c?Kn(r.Ae,s.Ae):r instanceof yc&&s instanceof yc}(t.transform,e.transform)}class VD{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class su{}function sT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xd(t.key,dn.none()):new Na(t.key,t.data,dn.none());{const n=t.data,r=Gt.empty();let s=new ut(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new Zt(s.toArray()),dn.none())}}function FD(t,e,n){t instanceof Na?function(s,i,o){const a=s.value.clone(),c=Zy(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,i,o){if(!Vl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Zy(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(iT(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof Na?function(i,o,a,c){if(!Vl(i.precondition,o))return a;const u=i.value.clone(),f=e_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ps?function(i,o,a,c){if(!Vl(i.precondition,o))return a;const u=e_(i.fieldTransforms,c,o),f=o.data;return f.setAll(iT(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Vl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function UD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=eT(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function Xy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ji(r,s,(i,o)=>MD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Na extends su{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends su{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zy(t,e,n){const r=new Map;De(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,LD(o,a,n[s]))}return r}function e_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DD(i,o,e))}return r}class Xd extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $D extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=sT(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>Xy(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>Xy(n,r))}}class Zd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return PD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zd(e,n,r,s)}}/**
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
 */class BD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Se;function zD(t){switch(t){case B.OK:return me(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function oT(t){if(t===void 0)return gr("GRPC error has no .code"),B.UNKNOWN;switch(t){case it.OK:return B.OK;case it.CANCELLED:return B.CANCELLED;case it.UNKNOWN:return B.UNKNOWN;case it.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case it.INTERNAL:return B.INTERNAL;case it.UNAVAILABLE:return B.UNAVAILABLE;case it.UNAUTHENTICATED:return B.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case it.NOT_FOUND:return B.NOT_FOUND;case it.ALREADY_EXISTS:return B.ALREADY_EXISTS;case it.PERMISSION_DENIED:return B.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case it.ABORTED:return B.ABORTED;case it.OUT_OF_RANGE:return B.OUT_OF_RANGE;case it.UNIMPLEMENTED:return B.UNIMPLEMENTED;case it.DATA_LOSS:return B.DATA_LOSS;default:return me(39323,{code:t})}}(Se=it||(it={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qD(){return new TextEncoder}/**
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
 */const WD=new Xr([4294967295,4294967295],0);function t_(t){const e=qD().encode(t),n=new bw;return n.update(e),new Uint8Array(n.digest())}function n_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([s,i],0)]}class ep{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oo(`Invalid padding: ${n}`);if(r<0)throw new Oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Xr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Xr.fromNumber(r)));return s.compare(WD)===1&&(s=new Xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=t_(e),[r,s]=n_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ep(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=t_(e),[r,s]=n_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new iu(ye.min(),s,new Ze(we),yr(),Te())}}class Da{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Da(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class aT{constructor(e,n){this.targetId=e,this.Ce=n}}class lT{constructor(e,n,r=St.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class r_{constructor(){this.ve=0,this.Fe=s_(),this.Me=St.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new Da(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=s_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class KD{constructor(e){this.Ge=e,this.ze=new Map,this.je=yr(),this.Je=vl(),this.He=vl(),this.Ye=new Ze(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(bh(i))if(r===0){const o=new fe(i.path);this.et(n,o,Mt.newNoDocument(o,ye.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ss(r).toUint8Array()}catch(c){if(c instanceof Nw)return $i("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ep(o,s,i)}catch(c){return $i(c instanceof Oo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&bh(a.target)){const c=new fe(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Mt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Te();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new iu(e,n,this.Ye,this.je,r);return this.je=yr(),this.Je=vl(),this.He=vl(),this.Ye=new Ze(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new r_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ut(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ut(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new r_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function vl(){return new Ze(fe.comparator)}function s_(){return new Ze(fe.comparator)}const GD={asc:"ASCENDING",desc:"DESCENDING"},YD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QD={and:"AND",or:"OR"};class JD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Th(t,e){return t.useProto3Json||Xc(e)?e:{value:e}}function vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XD(t,e){return vc(t,e.toTimestamp())}function Bn(t){return De(!!t,49232),ye.fromTimestamp(function(n){const r=rs(n);return new We(r.seconds,r.nanos)}(t))}function tp(t,e){return Ih(t,e).canonicalString()}function Ih(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uT(t){const e=qe.fromString(t);return De(mT(e),10190,{key:e.toString()}),e}function Ah(t,e){return tp(t.databaseId,e.path)}function pf(t,e){const n=uT(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(hT(n))}function fT(t,e){return tp(t.databaseId,e)}function ZD(t){const e=uT(t);return e.length===4?qe.emptyPath():hT(e)}function Sh(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hT(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function i_(t,e,n){return{name:Ah(t,e),fields:n.value.mapValue.fields}}function eL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),St.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),St.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?B.UNKNOWN:oT(u.code);return new oe(f,u.message||"")}(o);n=new lT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pf(t,r.document.name),i=Bn(r.document.updateTime),o=r.document.createTime?Bn(r.document.createTime):ye.min(),a=new Gt({mapValue:{fields:r.document.fields}}),c=Mt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Fl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pf(t,r.document),i=r.readTime?Bn(r.readTime):ye.min(),o=Mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Fl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pf(t,r.document),i=r.removedTargetIds||[];n=new Fl([],i,s,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new HD(s,i),a=r.targetId;n=new aT(a,o)}}return n}function tL(t,e){let n;if(e instanceof Na)n={update:i_(t,e.key,e.value)};else if(e instanceof Xd)n={delete:Ah(t,e.key)};else if(e instanceof ps)n={update:i_(t,e.key,e.data),updateMask:uL(e.fieldMask)};else{if(!(e instanceof $D))return me(16599,{Vt:e.type});n={verify:Ah(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof yc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _a)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _c)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:XD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function nL(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Bn(s.updateTime):Bn(i);return o.isEqual(ye.min())&&(o=Bn(i)),new VD(o,s.transformResults||[])}(n,e))):[]}function rL(t,e){return{documents:[fT(t,e.path)]}}function sL(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fT(t,s);const i=function(u){if(u.length!==0)return pT(Gn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:ui(p.field),direction:aL(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Th(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function iL(t){let e=ZD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(h){const p=dT(h);return p instanceof Gn&&Hw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(y){return new gc(fi(y.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Xc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new mc(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,m=h.values||[];return new mc(m,p)}(n.endAt)),TD(e,s,o,i,a,"F",c,u)}function oL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fi(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fi(n.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fi(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return ct.create(fi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gn.create(n.compositeFilter.filters.map(r=>dT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function aL(t){return GD[t]}function lL(t){return YD[t]}function cL(t){return QD[t]}function ui(t){return{fieldPath:t.canonicalString()}}function fi(t){return Tt.fromServerFormat(t.fieldPath)}function pT(t){return t instanceof ct?function(n){if(n.op==="=="){if(Wy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(qy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(qy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:lL(n.op),value:n.value}}}(t):t instanceof Gn?function(n){const r=n.getFilters().map(s=>pT(s));return r.length===1?r[0]:{compositeFilter:{op:cL(n.op),filters:r}}}(t):me(54877,{filter:t})}function uL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,s,i=ye.min(),o=ye.min(),a=St.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e){this.yt=e}}function hL(t){const e=iL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}/**
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
 */class dL{constructor(){this.Cn=new pL}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(ns.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class pL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(qe.comparator)).toArray()}}/**
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
 */const o_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gT=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(gT,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new qi(0)}static cr(){return new qi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="LruGarbageCollector",mL=1048576;function l_([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class gL{constructor(e){this.Ir=e,this.buffer=new ut(l_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();l_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(a_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ro(n)?te(a_,"Ignoring IndexedDB error during garbage collection: ",n):await no(n)}await this.Vr(3e5)})}}class _L{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Jc.ce);const r=new gL(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(o_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),o_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),li()<=be.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function vL(t,e){return new _L(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ko(r.mutation,s,Zt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Ss();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ko();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=yr();const o=Wo(),a=function(){return Wo()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ps)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ko(f.mutation,u,f.mutation.getFieldMask(),We.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>a.set(u,new bL(f,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Wo();let s=new Ze((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Zt.empty();f=a.applyToLocalView(u,f),r.set(c,f);const h=(s.get(a.batchId)||Te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,h=Xw();f.forEach(p=>{if(!i.has(p)){const m=sT(n.get(p),r.get(p));m!==null&&h.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ID(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Ss());let a=da,c=i;return o.next(u=>j.forEach(u,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(f=>({batchId:a,changes:Jw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=ko();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ko();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,c=>{const u=function(h,p){return new eu(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Mt.newInvalidDocument(f)))});let a=ko();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Ko(f.mutation,u,Zt.empty(),We.now()),nu(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Bn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:hL(s.bundledQuery),readTime:Bn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class IL{constructor(){this.overlays=new Ze(fe.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ss();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Ss(),i=n.length+1,o=new fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ze((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ss(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Ss(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return j.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BD(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class AL{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.Qr=new ut(ht.$r),this.Ur=new ut(ht.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ht(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new fe(new qe([])),r=new ht(n,e),s=new ht(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new fe(new qe([])),r=new ht(n,e),s=new ht(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return fe.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ut(ht.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Wd:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(we);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new ht(new fe(i),0);let a=new ut(we);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Yr)),!0)},o),j.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ht(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e){this.ri=e,this.docs=function(){return new Ze(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=yr();const o=n.path,a=new fe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tD(eD(f),r)<=0||(s.has(f.key)||nu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CL(this)}getSize(e){return j.resolve(this.size)}}class CL extends EL{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e){this.persistence=e,this.si=new Gs(n=>Yd(n),Qd),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new np,this.targetCount=0,this.ai=qi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.ui={},this.overlays={},this.ci=new Jc(0),this.li=!1,this.li=!0,this.hi=new AL,this.referenceDelegate=e(this),this.Pi=new PL(this),this.indexManager=new dL,this.remoteDocumentCache=function(s){return new RL(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new fL(n),this.Ii=new TL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new SL(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new kL(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class kL extends rD{constructor(e){super(),this.currentSequenceNumber=e}}class rp{constructor(e){this.persistence=e,this.Ri=new np,this.Vi=null}static mi(e){return new rp(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const s=fe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ec{constructor(e,n){this.persistence=e,this.pi=new Gs(r=>oD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vL(this,n)}static mi(e,n){return new Ec(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ye.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ll(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sp(e,n.fromCache,r,s)}}/**
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
 */class OL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xL{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return jk()?8:sD(Vt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new OL;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(li()<=be.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(li()<=be.DEBUG&&te("QueryEngine","Query:",ci(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(li()<=be.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jn(n))):j.resolve())}ys(e,n){if(Qy(n))return j.resolve(null);let r=jn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wh(n,null,"F"),r=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,a);return this.Cs(n,u,o,c.readTime)?this.ys(e,wh(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return Qy(n)||s.isEqual(ye.min())?j.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(li()<=be.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ci(n)),this.vs(e,o,n,ZN(s,da)).next(a=>a))})}Ds(e,n){let r=new ut(Yw(e));return n.forEach((s,i)=>{nu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return li()<=be.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ci(n)),this.ps.getDocumentsMatchingQuery(e,n,ns.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="LocalStore",NL=3e8;class DL{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ze(we),this.xs=new Gs(i=>Yd(i),Qd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wL(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function LL(t,e,n,r){return new DL(t,e,n,r)}async function _T(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function ML(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const h=u.batch,p=h.keys();let m=j.resolve();return p.forEach(y=>{m=m.next(()=>f.getEntry(c,y)).next(w=>{const P=u.docVersions.get(y);De(P!==null,48541),w.version.compareTo(P)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),f.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function vT(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function VL(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((f,h)=>{const p=s.get(h);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,h).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,h)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(St.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):f.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(f.resumeToken,r)),s=s.insert(h,m),function(w,P,O){return w.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=NL?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,m,f)&&a.push(n.Pi.updateTargetData(i,m))});let c=yr(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(FL(i,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(ye.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(h=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function FL(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=yr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te(ip,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function UL(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $L(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Rh(t,e,n){const r=_e(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ro(o))throw o;te(ip,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function c_(t,e,n){const r=_e(t);let s=ye.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const h=_e(c),p=h.xs.get(f);return p!==void 0?j.resolve(h.Ms.get(p)):h.Pi.getTargetData(u,f)}(r,o,jn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:Te())).next(a=>(jL(r,SD(e),a),{documents:a,Qs:i})))}function jL(t,e,n){let r=t.Os.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class u_{constructor(){this.activeTargetIds=xD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BL{constructor(){this.Mo=new u_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new u_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HL{Oo(e){}shutdown(){}}/**
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
 */let El=null;function Ch(){return El===null?El=function(){return 268435456+Math.round(2147483648*Math.random())}():El++,"0x"+El.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="RestConnection",zL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qL{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===dc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Ch(),a=this.zo(e,n.toUriEncodedString());te(mf,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(a),f=fs(u);return this.Jo(e,a,c,r,f).then(h=>(te(mf,`Received RPC '${e}' ${o}: `,h),h),h=>{throw $i(mf,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=zL[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class KL extends qL{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Ch();return new Promise((a,c)=>{const u=new ww;u.setWithCredentials(!0),u.listenOnce(Tw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Dl.NO_ERROR:const h=u.getResponseJson();te(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case Dl.TIMEOUT:te(kt,`RPC '${e}' ${o} timed out`),c(new oe(B.DEADLINE_EXCEEDED,"Request time out"));break;case Dl.HTTP_ERROR:const p=u.getStatus();if(te(kt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m?.error;if(y&&y.status&&y.message){const w=function(O){const R=O.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(R)>=0?R:B.UNKNOWN}(y.status);c(new oe(w,y.message))}else c(new oe(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new oe(B.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(kt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);te(kt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Ch(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sw(),a=Aw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");te(kt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const h=o.createWebChannel(f,c);this.I_(h);let p=!1,m=!1;const y=new WL({Yo:P=>{m?te(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(te(kt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),te(kt,`RPC '${e}' stream ${s} sending:`,P),h.send(P))},Zo:()=>h.close()}),w=(P,O,R)=>{P.listen(O,v=>{try{R(v)}catch(C){setTimeout(()=>{throw C},0)}})};return w(h,Po.EventType.OPEN,()=>{m||(te(kt,`RPC '${e}' stream ${s} transport opened.`),y.o_())}),w(h,Po.EventType.CLOSE,()=>{m||(m=!0,te(kt,`RPC '${e}' stream ${s} transport closed`),y.a_(),this.E_(h))}),w(h,Po.EventType.ERROR,P=>{m||(m=!0,$i(kt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),y.a_(new oe(B.UNAVAILABLE,"The operation could not be completed")))}),w(h,Po.EventType.MESSAGE,P=>{if(!m){const O=P.data[0];De(!!O,16349);const R=O,v=R?.error||R[0]?.error;if(v){te(kt,`RPC '${e}' stream ${s} received error:`,v);const C=v.status;let D=function(E){const _=it[E];if(_!==void 0)return oT(_)}(C),F=v.message;D===void 0&&(D=B.INTERNAL,F="Unknown error status: "+C+" with message "+v.message),m=!0,y.a_(new oe(D,F)),h.close()}else te(kt,`RPC '${e}' stream ${s} received:`,O),y.u_(O)}}),w(a,Iw.STAT_EVENT,P=>{P.stat===gh.PROXY?te(kt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===gh.NOPROXY&&te(kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.__()},0),y}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function gf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){return new JD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="PersistentStream";class bT{constructor(e,n,r,s,i,o,a,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ET(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(gr(n.toString()),gr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new oe(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return te(d_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(te(d_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GL extends bT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?Bn(o.readTime):ye.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Sh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=bh(c)?{documents:rL(i,c)}:{query:sL(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cT(i,o.resumeToken);const u=Th(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){a.readTime=vc(i,o.snapshotVersion.toTimestamp());const u=Th(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=oL(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Sh(this.serializer),n.removeTarget=e,this.q_(n)}}class YL extends bT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nL(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Sh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tL(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{}class JL extends QL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new oe(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Ih(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(B.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,Ih(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(B.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class XL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(gr(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="RemoteStore";class ZL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ys(this)&&(te(Us,"Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.Ea.add(4),await La(u),u.Ra.set("Unknown"),u.Ea.delete(4),await au(u)}(this))})}),this.Ra=new XL(r,s)}}async function au(t){if(Ys(t))for(const e of t.da)await e(!0)}async function La(t){for(const e of t.da)await e(!1)}function wT(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cp(n)?lp(n):so(n).O_()&&ap(n,e))}function op(t,e){const n=_e(t),r=so(n);n.Ia.delete(e),r.O_()&&TT(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ys(n)&&n.Ra.set("Unknown"))}function ap(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}so(t).Y_(e)}function TT(t,e){t.Va.Ue(e),so(t).Z_(e)}function lp(t){t.Va=new KD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),so(t).start(),t.Ra.ua()}function cp(t){return Ys(t)&&!so(t).x_()&&t.Ia.size>0}function Ys(t){return _e(t).Ea.size===0}function IT(t){t.Va=void 0}async function eM(t){t.Ra.set("Online")}async function tM(t){t.Ia.forEach((e,n)=>{ap(t,e)})}async function nM(t,e){IT(t),cp(t)?(t.Ra.ha(e),lp(t)):t.Ra.set("Unknown")}async function rM(t,e,n){if(t.Ra.set("Online"),e instanceof lT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){te(Us,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bc(t,r)}else if(e instanceof Fl?t.Va.Ze(e):e instanceof aT?t.Va.st(e):t.Va.tt(e),!n.isEqual(ye.min()))try{const r=await vT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(St.EMPTY_BYTE_STRING,f.snapshotVersion)),TT(i,c);const h=new qr(f.target,c,u,f.sequenceNumber);ap(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(Us,"Failed to raise snapshot:",r),await bc(t,r)}}async function bc(t,e,n){if(!ro(e))throw e;t.Ea.add(1),await La(t),t.Ra.set("Offline"),n||(n=()=>vT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Us,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await au(t)})}function AT(t,e){return e().catch(n=>bc(t,n,e))}async function lu(t){const e=_e(t),n=os(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wd;for(;sM(e);)try{const s=await UL(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,iM(e,s)}catch(s){await bc(e,s)}ST(e)&&RT(e)}function sM(t){return Ys(t)&&t.Ta.length<10}function iM(t,e){t.Ta.push(e);const n=os(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ST(t){return Ys(t)&&!os(t).x_()&&t.Ta.length>0}function RT(t){os(t).start()}async function oM(t){os(t).ra()}async function aM(t){const e=os(t);for(const n of t.Ta)e.ea(n.mutations)}async function lM(t,e,n){const r=t.Ta.shift(),s=Zd.from(r,e,n);await AT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await lu(t)}async function cM(t,e){e&&os(t).X_&&await async function(r,s){if(function(o){return zD(o)&&o!==B.ABORTED}(s.code)){const i=r.Ta.shift();os(r).B_(),await AT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await lu(r)}}(t,e),ST(t)&&RT(t)}async function p_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),te(Us,"RemoteStore received new credentials");const r=Ys(n);n.Ea.add(3),await La(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await au(n)}async function uM(t,e){const n=_e(t);e?(n.Ea.delete(2),await au(n)):e||(n.Ea.add(2),await La(n),n.Ra.set("Unknown"))}function so(t){return t.ma||(t.ma=function(n,r,s){const i=_e(n);return i.sa(),new GL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:eM.bind(null,t),t_:tM.bind(null,t),r_:nM.bind(null,t),H_:rM.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),cp(t)?lp(t):t.Ra.set("Unknown")):(await t.ma.stop(),IT(t))})),t.ma}function os(t){return t.fa||(t.fa=function(n,r,s){const i=_e(n);return i.sa(),new YL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:oM.bind(null,t),r_:cM.bind(null,t),ta:aM.bind(null,t),na:lM.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await lu(t)):(await t.fa.stop(),t.Ta.length>0&&(te(Us,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new up(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fp(t,e){if(gr("AsyncQueue",`${e}: ${t}`),ro(t))return new oe(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{static emptySet(e){return new Si(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=ko(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class m_{constructor(){this.ga=new Ze(fe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Wi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Wi(e,n,Si.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class hM{constructor(){this.queries=g_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=g_(),i.forEach((o,a)=>{for(const c of a.Sa)c.onError(r)})})(this,new oe(B.ABORTED,"Firestore shutting down"))}}function g_(){return new Gs(t=>Gw(t),tu)}async function dM(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new fM,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=fp(o,`Initialization of query '${ci(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&hp(n)}async function pM(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mM(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&hp(n)}function gM(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function hp(t){t.Ca.forEach(e=>{e.next()})}var Ph,y_;(y_=Ph||(Ph={})).Ma="default",y_.Cache="cache";class yM{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ph.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.key=e}}class PT{constructor(e){this.key=e}}class _M{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=Yw(e),this.tu=new Si(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new m_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,h)=>{const p=s.get(f),m=nu(this.query,h)?h:null,y=!!p&&this.mutatedKeys.has(p.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;p&&m?p.data.isEqual(m.data)?y!==w&&(r.track({type:3,doc:m}),P=!0):this.su(p,m)||(r.track({type:2,doc:m}),P=!0,(c&&this.eu(m,c)>0||u&&this.eu(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),P=!0):p&&!m&&(r.track({type:1,doc:p}),P=!0,(c||u)&&(a=!0)),P&&(m?(o=o.add(m),i=w?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,h)=>function(m,y){const w=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:P})}};return w(m)-w(y)}(f.type,h.type)||this.eu(f.doc,h.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Wi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new m_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new PT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new CT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Wi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dp="SyncEngine";class vM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EM{constructor(e){this.key=e,this.hu=!1}}class bM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Gs(a=>Gw(a),tu),this.Iu=new Map,this.Eu=new Set,this.du=new Ze(fe.comparator),this.Au=new Map,this.Ru=new np,this.Vu={},this.mu=new Map,this.fu=qi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wM(t,e,n=!0){const r=LT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await kT(r,e,n,!0),s}async function TM(t,e){const n=LT(t);await kT(n,e,!0,!1)}async function kT(t,e,n,r){const s=await $L(t.localStore,jn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await IM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&wT(t.remoteStore,s),a}async function IM(t,e,n,r,s){t.pu=(h,p,m)=>async function(w,P,O,R){let v=P.view.ru(O);v.Cs&&(v=await c_(w.localStore,P.query,!1).then(({documents:S})=>P.view.ru(S,v)));const C=R&&R.targetChanges.get(P.targetId),D=R&&R.targetMismatches.get(P.targetId)!=null,F=P.view.applyChanges(v,w.isPrimaryClient,C,D);return v_(w,P.targetId,F.au),F.snapshot}(t,h,p,m);const i=await c_(t.localStore,e,!0),o=new _M(e,i.Qs),a=o.ru(i.documents),c=Da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);v_(t,n,u.au);const f=new vM(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function AM(t,e,n){const r=_e(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!tu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Rh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&op(r.remoteStore,s.targetId),kh(r,s.targetId)}).catch(no)):(kh(r,s.targetId),await Rh(r.localStore,s.targetId,!0))}async function SM(t,e){const n=_e(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),op(n.remoteStore,r.targetId))}async function RM(t,e,n){const r=DM(t);try{const s=await function(o,a){const c=_e(o),u=We.now(),f=a.reduce((m,y)=>m.add(y.key),Te());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=yr(),w=Te();return c.Ns.getEntries(m,f).next(P=>{y=P,y.forEach((O,R)=>{R.isValidDocument()||(w=w.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,y)).next(P=>{h=P;const O=[];for(const R of a){const v=UD(R,h.get(R.key).overlayedDocument);v!=null&&O.push(new ps(R.key,v,$w(v.value.mapValue),dn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,O,a)}).next(P=>{p=P;const O=P.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(m,P.batchId,O)})}).then(()=>({batchId:p.batchId,changes:Jw(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ze(we)),u=u.insert(a,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ma(r,s.changes),await lu(r.remoteStore)}catch(s){const i=fp(s,"Failed to persist write");n.reject(i)}}async function OT(t,e){const n=_e(t);try{const r=await VL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?De(o.hu,14607):s.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))}),await Ma(n,r,e)}catch(r){await no(r)}}function __(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((f,h)=>{for(const p of h.Sa)p.va(a)&&(u=!0)}),u&&hp(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CM(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ze(fe.comparator);o=o.insert(i,Mt.newNoDocument(i,ye.min()));const a=Te().add(i),c=new iu(ye.min(),new Map,new Ze(we),o,a);await OT(r,c),r.du=r.du.remove(i),r.Au.delete(e),pp(r)}else await Rh(r.localStore,e,!1).then(()=>kh(r,e,n)).catch(no)}async function PM(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await ML(n.localStore,e);NT(n,r,null),xT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ma(n,s)}catch(s){await no(s)}}async function kM(t,e,n){const r=_e(t);try{const s=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(De(h!==null,37113),f=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);NT(r,e,n),xT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ma(r,s)}catch(s){await no(s)}}function xT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function NT(t,e,n){const r=_e(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||DT(t,r)})}function DT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(op(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),pp(t))}function v_(t,e,n){for(const r of n)r instanceof CT?(t.Ru.addReference(r.key,e),OM(t,r)):r instanceof PT?(te(dp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||DT(t,r.key)):me(19791,{wu:r})}function OM(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(te(dp,"New document in limbo: "+n),t.Eu.add(r),pp(t))}function pp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new fe(qe.fromString(e)),r=t.fu.next();t.Au.set(r,new EM(n)),t.du=t.du.insert(n,r),wT(t.remoteStore,new qr(jn(Kw(n.path)),r,"TargetPurposeLimboResolution",Jc.ce))}}async function Ma(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,c)=>{o.push(r.pu(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=sp.As(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const f=_e(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>j.forEach(u,p=>j.forEach(p.Es,m=>f.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>j.forEach(p.ds,m=>f.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!ro(h))throw h;te(ip,"Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const m=f.Ms.get(p),y=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(y);f.Ms=f.Ms.insert(p,w)}}}(r.localStore,i))}async function xM(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){te(dp,"User change. New user:",e.toKey());const r=await _T(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(c=>{c.reject(new oe(B.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ma(n,r.Ls)}}function NM(t,e){const n=_e(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function LT(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CM.bind(null,e),e.Pu.H_=mM.bind(null,e.eventManager),e.Pu.yu=gM.bind(null,e.eventManager),e}function DM(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kM.bind(null,e),e}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ou(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return LL(this.persistence,new xL,e.initialUser,this.serializer)}Cu(e){return new yT(rp.mi,this.serializer)}Du(e){return new BL}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class LM extends wc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof Ec,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yL(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new yT(r=>Ec.mi(r,n),this.serializer)}}class Oh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>__(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xM.bind(null,this.syncEngine),await uM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hM}()}createDatastore(e){const n=ou(e.databaseInfo.databaseId),r=function(i){return new KL(i)}(e.databaseInfo);return function(i,o,a,c){return new JL(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new ZL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>__(this.syncEngine,n,0),function(){return h_.v()?new h_:new HL}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,f){const h=new bM(s,i,o,a,c,u);return f&&(h.gu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=_e(n);te(Us,"RemoteStore shutting down."),r.Ea.add(5),await La(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Oh.provider={build:()=>new Oh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):gr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="FirestoreClient";class VM{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=zd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(as,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(as,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yf(t,e){t.asyncQueue.verifyOperationInProgress(),te(as,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _T(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function E_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FM(t);te(as,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>p_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>p_(e.remoteStore,s)),t._onlineComponents=e}async function FM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(as,"Using user provided OfflineComponentProvider");try{await yf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await yf(t,new wc)}}else te(as,"Using default OfflineComponentProvider"),await yf(t,new LM(void 0));return t._offlineComponents}async function MT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(as,"Using user provided OnlineComponentProvider"),await E_(t,t._uninitializedComponentsProvider._online)):(te(as,"Using default OnlineComponentProvider"),await E_(t,new Oh))),t._onlineComponents}function UM(t){return MT(t).then(e=>e.syncEngine)}async function $M(t){const e=await MT(t),n=e.eventManager;return n.onListen=wM.bind(null,e.syncEngine),n.onUnlisten=AM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SM.bind(null,e.syncEngine),n}function jM(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new MM({next:p=>{f.Nu(),o.enqueueAndForget(()=>pM(i,h)),p.fromCache&&c.source==="server"?u.reject(new oe(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new yM(a,f,{includeMetadataChanges:!0,qa:!0});return dM(i,h)}(await $M(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function VT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const FT="firestore.googleapis.com",w_=!0;class T_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=FT,this.ssl=w_}else this.host=e.host,this.ssl=e.ssl??w_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mL)throw new oe(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new oe(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new oe(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new oe(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BN;switch(r.type){case"firstParty":return new WN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b_.get(n);r&&(te("ComponentProvider","Removing Datastore"),b_.delete(n),r.terminate())}(this),Promise.resolve()}}function BM(t,e,n,r={}){t=Bi(t,cu);const s=fs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(kd(`https://${a}`),Od("Firestore",!0)),i.host!==FT&&i.host!==a&&$i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:s,emulatorOptions:r};if(!Ls(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Nt.MOCK_USER;else{u=Mb(r.mockUserToken,t._app?.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new oe(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Nt(h)}t._authCredentials=new HN(new Cw(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uu(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xa(n,dt._jsonSchema))return new dt(e,r||null,new fe(qe.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:lt("string",dt._jsonSchemaVersion),referencePath:lt("string")};class es extends uu{constructor(e,n,r){super(e,n,Kw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new fe(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function tU(t,e,...n){if(t=tt(t),Pw("collection","path",e),t instanceof cu){const r=qe.fromString(e,...n);return Vy(r),new es(t,null,r)}{if(!(t instanceof dt||t instanceof es))throw new oe(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Vy(r),new es(t.firestore,null,r)}}function nU(t,e,...n){if(t=tt(t),arguments.length===1&&(e=zd.newId()),Pw("doc","path",e),t instanceof cu){const r=qe.fromString(e,...n);return My(r),new dt(t,null,new fe(r))}{if(!(t instanceof dt||t instanceof es))throw new oe(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return My(r),new dt(t.firestore,t instanceof es?t.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="AsyncQueue";class A_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ET(this,"async_queue_retry"),this._c=()=>{const r=gf();r&&te(I_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=gf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ro(e))throw e;te(I_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,gr("INTERNAL UNHANDLED ERROR: ",S_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=up.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&me(47125,{Pc:S_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function S_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fu extends cu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new A_,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function HM(t,e){const n=typeof t=="object"?t:Dd(),r=typeof t=="string"?t:dc,s=Wc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Nb("firestore");i&&BM(s,...i)}return s}function mp(t){if(t._terminated)throw new oe(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zM(t),t._firestoreClient}function zM(t){const e=t._freezeSettings(),n=function(s,i,o,a){return new cD(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,VT(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new VM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new un(St.fromBase64String(e))}catch(n){throw new oe(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new un(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xa(e,un._jsonSchema))return un.fromBase64String(e.bytes)}}un._jsonSchemaVersion="firestore/bytes/1.0",un._jsonSchema={type:lt("string",un._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Hn._jsonSchemaVersion}}static fromJSON(e){if(xa(e,Hn._jsonSchema))return new Hn(e.latitude,e.longitude)}}Hn._jsonSchemaVersion="firestore/geoPoint/1.0",Hn._jsonSchema={type:lt("string",Hn._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
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
 */class zn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xa(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new zn(e.vectorValues);throw new oe(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:lt("string",zn._jsonSchemaVersion),vectorValues:lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=/^__.*__$/;class WM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Na(e,this.data,n,this.fieldTransforms)}}class UT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $T(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:t})}}class yp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Tc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if($T(this.Ac)&&qM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class KM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ou(e)}Cc(e,n,r,s=!1){return new yp({Ac:e,methodName:n,Dc:r,path:Tt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jT(t){const e=t._freezeSettings(),n=ou(t._databaseId);return new KM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BT(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);_p("Data must be an object, but it was:",o,r);const a=HT(r,o);let c,u;if(i.merge)c=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const h of i.mergeFields){const p=xh(e,h,n);if(!o.contains(p))throw new oe(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qT(f,p)||f.push(p)}c=new Zt(f),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new WM(new Gt(a),c,u)}class du extends gp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof du}}function GM(t,e,n,r){const s=t.Cc(1,e,n);_p("Data must be an object, but it was:",s,r);const i=[],o=Gt.empty();ds(r,(c,u)=>{const f=vp(e,c,n);u=tt(u);const h=s.yc(f);if(u instanceof du)i.push(f);else{const p=pu(u,h);p!=null&&(i.push(f),o.set(f,p))}});const a=new Zt(i);return new UT(o,a,s.fieldTransforms)}function YM(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[xh(e,r,n)],c=[s];if(i.length%2!=0)throw new oe(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(xh(e,i[p])),c.push(i[p+1]);const u=[],f=Gt.empty();for(let p=a.length-1;p>=0;--p)if(!qT(u,a[p])){const m=a[p];let y=c[p];y=tt(y);const w=o.yc(m);if(y instanceof du)u.push(m);else{const P=pu(y,w);P!=null&&(u.push(m),f.set(m,P))}}const h=new Zt(u);return new UT(f,h,o.fieldTransforms)}function pu(t,e){if(zT(t=tt(t)))return _p("Unsupported field value:",e,t),HT(t,e);if(t instanceof gp)return function(r,s){if(!$T(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=pu(a,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ND(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:vc(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vc(s.serializer,i)}}if(r instanceof Hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof un)return{bytesValue:cT(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zn)return function(o,a){return{mapValue:{fields:{[Fw]:{stringValue:Uw},[pc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Jd(a.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${qd(r)}`)}(t,e)}function HT(t,e){const n={};return xw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,s)=>{const i=pu(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Hn||t instanceof un||t instanceof dt||t instanceof gp||t instanceof zn)}function _p(t,e,n){if(!zT(n)||!kw(n)){const r=qd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function xh(t,e,n){if((e=tt(e))instanceof hu)return e._internalPath;if(typeof e=="string")return vp(t,e);throw Tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const QM=new RegExp("[~\\*/\\[\\]]");function vp(t,e,n){if(e.search(QM)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hu(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new oe(B.INVALID_ARGUMENT,a+t+c)}function qT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(KT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JM extends WT{data(){return super.data()}}function KT(t,e){return typeof e=="string"?vp(t,e):e instanceof hu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZM{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[pc].arrayValue?.values?.map(r=>st(r.doubleValue));return new zn(n)}convertGeoPoint(e){return new Hn(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pa(e));default:return null}}convertTimestamp(e){const n=rs(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);De(mT(r),9688,{name:e});const s=new ma(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||gr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ri extends WT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(KT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ri._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ri._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ri._jsonSchema={type:lt("string",Ri._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class Ul extends Ri{data(e={}){return super.data(e)}}class Ci{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new bl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ul(s._firestore,s._userDataWriter,a.doc.key,a.doc,new bl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ul(s._firestore,s._userDataWriter,a.doc.key,a.doc,new bl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:e4(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ci._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function e4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}Ci._jsonSchemaVersion="firestore/querySnapshot/1.0",Ci._jsonSchema={type:lt("string",Ci._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class t4 extends ZM{constructor(e){super(),this.firestore=e}convertBytes(e){return new un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function rU(t){t=Bi(t,uu);const e=Bi(t.firestore,fu),n=mp(e),r=new t4(e);return XM(t._query),jM(n,t._query).then(s=>new Ci(e,r,t,s))}function sU(t,e,n){t=Bi(t,dt);const r=Bi(t.firestore,fu),s=GT(t.converter,e,n);return YT(r,[BT(jT(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function YT(t,e){return function(r,s){const i=new Zr;return r.asyncQueue.enqueueAndForget(async()=>RM(await UM(r),s,i)),i.promise}(mp(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=jT(e)}set(e,n,r){this._verifyNotCommitted();const s=_f(e,this._firestore),i=GT(s.converter,n,r),o=BT(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,dn.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=_f(e,this._firestore);let o;return o=typeof(n=tt(n))=="string"||n instanceof hu?YM(this._dataReader,"WriteBatch.update",i._key,n,r,s):GM(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,dn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_f(e,this._firestore);return this._mutations=this._mutations.concat(new Xd(n._key,dn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _f(t,e){if((t=tt(t)).firestore!==e)throw new oe(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(t){return mp(t=Bi(t,fu)),new n4(t,e=>YT(t,e))}(function(e,n=!0){(function(s){to=s})(Ws),Ms(new ts("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new fu(new zN(r.getProvider("auth-internal")),new KN(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ma(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Fn(xy,Ny,e),Fn(xy,Ny,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="firebasestorage.googleapis.com",JT="storageBucket",r4=120*1e3,s4=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Yn{constructor(e,n,r=0){super(vf(e),`Firebase Storage: ${n} (${vf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function vf(t){return"storage/"+t}function Ep(){const t="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,t)}function i4(t){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function o4(t){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function a4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,t)}function l4(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function c4(t){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function u4(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function f4(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function h4(t){return new rt(nt.INVALID_URL,"Invalid URL '"+t+"'.")}function d4(t){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function p4(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+JT+"' property when initializing the app?")}function m4(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function g4(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function y4(t){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nh(t){return new rt(nt.INVALID_ARGUMENT,t)}function XT(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function _4(t){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Go(t,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Io(t){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw d4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${f}/b/${s}/o${p}`,"i"),y={bucket:1,path:3},w=n===QT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",O=new RegExp(`^https?://${w}/${s}/${P}`,"i"),v=[{regex:a,indices:c,postModify:i},{regex:m,indices:y,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<v.length;C++){const D=v[C],F=D.regex.exec(e);if(F){const S=F[D.indices.bucket];let E=F[D.indices.path];E||(E=""),r=new en(S,E),D.postModify(r);break}}if(r==null)throw h4(e);return r}}class v4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function f(...P){u||(u=!0,e.apply(null,P))}function h(P){s=setTimeout(()=>{s=null,t(m,c())},P)}function p(){i&&clearTimeout(i)}function m(P,...O){if(u){p();return}if(P){p(),f.call(null,P,...O);return}if(c()||o){p(),f.call(null,P,...O);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let y=!1;function w(P){y||(y=!0,p(),!u&&(s!==null?(P||(a=2),clearTimeout(s),h(0)):P||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function b4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t){return t!==void 0}function T4(t){return typeof t=="object"&&!Array.isArray(t)}function bp(t){return typeof t=="string"||t instanceof String}function R_(t){return wp()&&t instanceof Blob}function wp(){return typeof Blob<"u"}function C_(t,e,n,r){if(r<e)throw Nh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ZT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var xs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xs||(xs={}));/**
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
 */function I4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n,r,s,i,o,a,c,u,f,h,p=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=h,this.retry=p,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,w)=>{this.resolve_=y,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new wl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===xs.NO_ERROR,c=i.getStatus();if(!a||I4(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===xs.ABORT;r(!1,new wl(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new wl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());w4(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ep();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?XT():f4();o(c)}else{const c=u4();o(c)}};this.canceled_?n(!1,new wl(!1,null,!0)):this.backoffId_=E4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&b4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function S4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function R4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function C4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function P4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function k4(t,e,n,r,s,i,o=!0,a=!1){const c=ZT(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return C4(f,e),S4(f,n),R4(f,i),P4(f,r),new A4(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function x4(...t){const e=O4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(wp())return new Blob(t);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function N4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function D4(t){if(typeof atob>"u")throw y4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ef{constructor(e,n){this.data=e,this.contentType=n||null}}function L4(t,e){switch(t){case Dn.RAW:return new Ef(e0(e));case Dn.BASE64:case Dn.BASE64URL:return new Ef(t0(t,e));case Dn.DATA_URL:return new Ef(V4(e),F4(e))}throw Ep()}function e0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function M4(t){let e;try{e=decodeURIComponent(t)}catch{throw Go(Dn.DATA_URL,"Malformed data URL.")}return e0(e)}function t0(t,e){switch(t){case Dn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Go(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Dn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Go(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=D4(e)}catch(s){throw s.message.includes("polyfill")?s:Go(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class n0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Go(Dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=U4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function V4(t){const e=new n0(t);return e.base64?t0(Dn.BASE64,e.rest):M4(e.rest)}function F4(t){return new n0(t).contentType}function U4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){let r=0,s="";R_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(R_(this.data_)){const r=this.data_,s=N4(r,e,n);return s===null?null:new Hr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hr(r,!0)}}static getBlob(...e){if(wp()){const n=e.map(r=>r instanceof Hr?r.data_:r);return new Hr(x4.apply(null,n))}else{const n=e.map(o=>bp(o)?L4(Dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Hr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){let e;try{e=JSON.parse(t)}catch{return null}return T4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function j4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function s0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t,e){return e}class jt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||B4}}let Tl=null;function H4(t){return!bp(t)||t.length<2?t:s0(t)}function i0(){if(Tl)return Tl;const t=[];t.push(new jt("bucket")),t.push(new jt("generation")),t.push(new jt("metageneration")),t.push(new jt("name","fullPath",!0));function e(i,o){return H4(o)}const n=new jt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new jt("size");return s.xform=r,t.push(s),t.push(new jt("timeCreated")),t.push(new jt("updated")),t.push(new jt("md5Hash",null,!0)),t.push(new jt("cacheControl",null,!0)),t.push(new jt("contentDisposition",null,!0)),t.push(new jt("contentEncoding",null,!0)),t.push(new jt("contentLanguage",null,!0)),t.push(new jt("contentType",null,!0)),t.push(new jt("metadata","customMetadata",!0)),Tl=t,Tl}function z4(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new en(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function q4(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return z4(r,t),r}function o0(t,e,n){const r=r0(e);return r===null?null:q4(t,r,n)}function W4(t,e,n,r){const s=r0(e);if(s===null||!bp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,h=t.fullPath,p="/b/"+o(f)+"/o/"+o(h),m=Tp(p,n,r),y=ZT({alt:"media",token:u});return m+y})[0]}function K4(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class a0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){if(!t)throw Ep()}function G4(t,e){function n(r,s){const i=o0(t,s,e);return l0(i!==null),i}return n}function Y4(t,e){function n(r,s){const i=o0(t,s,e);return l0(i!==null),W4(i,s,t.host,t._protocol)}return n}function c0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=l4():s=a4():n.getStatus()===402?s=o4(t.bucket):n.getStatus()===403?s=c4(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Q4(t){const e=c0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=i4(t.path)),i.serverResponse=s.serverResponse,i}return n}function J4(t,e,n){const r=e.fullServerUrl(),s=Tp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new a0(s,i,Y4(t,n),o);return a.errorHandler=Q4(e),a}function X4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Z4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=X4(null,e)),r}function eV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let C=0;C<2;C++)v=v+Math.random().toString().slice(2);return v}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Z4(e,r,s),f=K4(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=Hr.getBlob(h,r,p);if(m===null)throw m4();const y={name:u.fullPath},w=Tp(i,t.host,t._protocol),P="POST",O=t.maxUploadRetryTime,R=new a0(w,P,G4(t,n),O);return R.urlParams=y,R.headers=o,R.body=m.uploadData(),R.errorHandler=c0(e),R}class tV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Io("cannot .send() more than once");if(fs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nV extends tV{initXhr(){this.xhr_.responseType="text"}}function u0(){return new nV}/**
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
 */class $s{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $s(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return s0(this._location.path)}get storage(){return this._service}get parent(){const e=$4(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new $s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _4(e)}}function rV(t,e,n){t._throwIfRoot("uploadBytes");const r=eV(t.storage,t._location,i0(),new Hr(e,!0),n);return t.storage.makeRequestWithTokens(r,u0).then(s=>({metadata:s,ref:t}))}function sV(t){t._throwIfRoot("getDownloadURL");const e=J4(t.storage,t._location,i0());return t.storage.makeRequestWithTokens(e,u0).then(n=>{if(n===null)throw g4();return n})}function iV(t,e){const n=j4(t._location.path,e),r=new en(t._location.bucket,n);return new $s(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t){return/^[A-Za-z]+:\/\//.test(t)}function aV(t,e){return new $s(t,e)}function f0(t,e){if(t instanceof Ip){const n=t;if(n._bucket==null)throw p4();const r=new $s(n,n._bucket);return e!=null?f0(r,e):r}else return e!==void 0?iV(t,e):t}function lV(t,e){if(e&&oV(e)){if(t instanceof Ip)return aV(t,e);throw Nh("To use ref(service, url), the first argument must be a Storage instance.")}else return f0(t,e)}function P_(t,e){const n=e?.[JT];return n==null?null:en.makeFromBucketSpec(n,t)}function cV(t,e,n,r={}){t.host=`${e}:${n}`;const s=fs(e);s&&(kd(`https://${t.host}/b`),Od("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Mb(i,t.app.options.projectId))}class Ip{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=QT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=r4,this._maxUploadRetryTime=s4,this._requests=new Set,s!=null?this._bucket=en.makeFromBucketSpec(s,this._host):this._bucket=P_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=P_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $s(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new v4(XT());{const o=k4(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const k_="@firebase/storage",O_="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="storage";function oU(t,e,n){return t=tt(t),rV(t,e,n)}function aU(t){return t=tt(t),sV(t)}function lU(t,e){return t=tt(t),lV(t,e)}function uV(t=Dd(),e){t=tt(t);const r=Wc(t,h0).getImmediate({identifier:e}),s=Nb("storage");return s&&fV(r,...s),r}function fV(t,e,n,r={}){cV(t,e,n,r)}function hV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ip(n,r,s,e,Ws)}function dV(){Ms(new ts(h0,hV,"PUBLIC").setMultipleInstances(!0)),Fn(k_,O_,""),Fn(k_,O_,"esm2020")}dV();const pV=tn(t=>{const e=qs(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Ub(n),s=vN(r),i=HM(r),o=uV(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Dh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function mV(t){if(Array.isArray(t))return t}function gV(t){if(Array.isArray(t))return Dh(t)}function yV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d0(r.key),r)}}function vV(t,e,n){return e&&_V(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function $l(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Ap(t))||e){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){a=!0,i=c},f:function(){try{o||n.return==null||n.return()}finally{if(a)throw i}}}}function Ae(t,e,n){return(e=d0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function EV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,o,a=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(f){u=!0,s=f}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return a}}function wV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?x_(Object(n),!0).forEach(function(r){Ae(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mu(t,e){return mV(t)||bV(t,e)||Ap(t,e)||wV()}function Cn(t){return gV(t)||EV(t)||Ap(t)||TV()}function IV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function d0(t){var e=IV(t,"string");return typeof e=="symbol"?e:e+""}function Ic(t){"@babel/helpers - typeof";return Ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ic(t)}function Ap(t,e){if(t){if(typeof t=="string")return Dh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dh(t,e):void 0}}var N_=function(){},Sp={},p0={},m0=null,g0={mark:N_,measure:N_};try{typeof window<"u"&&(Sp=window),typeof document<"u"&&(p0=document),typeof MutationObserver<"u"&&(m0=MutationObserver),typeof performance<"u"&&(g0=performance)}catch{}var AV=Sp.navigator||{},D_=AV.userAgent,L_=D_===void 0?"":D_,ls=Sp,Ge=p0,M_=m0,Il=g0;ls.document;var Tr=!!Ge.documentElement&&!!Ge.head&&typeof Ge.addEventListener=="function"&&typeof Ge.createElement=="function",y0=~L_.indexOf("MSIE")||~L_.indexOf("Trident/"),bf,SV=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,RV=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,_0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},CV={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},v0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ft="classic",Va="duotone",E0="sharp",b0="sharp-duotone",w0="chisel",T0="etch",I0="jelly",A0="jelly-duo",S0="jelly-fill",R0="notdog",C0="notdog-duo",P0="slab",k0="slab-press",O0="thumbprint",x0="whiteboard",PV="Classic",kV="Duotone",OV="Sharp",xV="Sharp Duotone",NV="Chisel",DV="Etch",LV="Jelly",MV="Jelly Duo",VV="Jelly Fill",FV="Notdog",UV="Notdog Duo",$V="Slab",jV="Slab Press",BV="Thumbprint",HV="Whiteboard",N0=[Ft,Va,E0,b0,w0,T0,I0,A0,S0,R0,C0,P0,k0,O0,x0];bf={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(bf,Ft,PV),Va,kV),E0,OV),b0,xV),w0,NV),T0,DV),I0,LV),A0,MV),S0,VV),R0,FV),Ae(Ae(Ae(Ae(Ae(bf,C0,UV),P0,$V),k0,jV),O0,BV),x0,HV);var zV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},qV={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},WV=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),KV={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},D0=["fak","fa-kit","fakd","fa-kit-duotone"],V_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},GV=["kit"],YV="kit",QV="kit-duotone",JV="Kit",XV="Kit Duotone";Ae(Ae({},YV,JV),QV,XV);var ZV={kit:{"fa-kit":"fak"}},e6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},t6={kit:{fak:"fa-kit"}},F_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},wf,Al={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],r6="classic",s6="duotone",i6="sharp",o6="sharp-duotone",a6="chisel",l6="etch",c6="jelly",u6="jelly-duo",f6="jelly-fill",h6="notdog",d6="notdog-duo",p6="slab",m6="slab-press",g6="thumbprint",y6="whiteboard",_6="Classic",v6="Duotone",E6="Sharp",b6="Sharp Duotone",w6="Chisel",T6="Etch",I6="Jelly",A6="Jelly Duo",S6="Jelly Fill",R6="Notdog",C6="Notdog Duo",P6="Slab",k6="Slab Press",O6="Thumbprint",x6="Whiteboard";wf={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(wf,r6,_6),s6,v6),i6,E6),o6,b6),a6,w6),l6,T6),c6,I6),u6,A6),f6,S6),h6,R6),Ae(Ae(Ae(Ae(Ae(wf,d6,C6),p6,P6),m6,k6),g6,O6),y6,x6);var N6="kit",D6="kit-duotone",L6="Kit",M6="Kit Duotone";Ae(Ae({},N6,L6),D6,M6);var V6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},F6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Lh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},U6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],L0=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(n6,U6),$6=["solid","regular","light","thin","duotone","brands","semibold"],M0=[1,2,3,4,5,6,7,8,9,10],j6=M0.concat([11,12,13,14,15,16,17,18,19,20]),B6=["aw","fw","pull-left","pull-right"],H6=[].concat(Cn(Object.keys(F6)),$6,B6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Al.GROUP,Al.SWAP_OPACITY,Al.PRIMARY,Al.SECONDARY]).concat(M0.map(function(t){return"".concat(t,"x")})).concat(j6.map(function(t){return"w-".concat(t)})),z6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_r="___FONT_AWESOME___",Mh=16,V0="fa",F0="svg-inline--fa",js="data-fa-i2svg",Vh="data-fa-pseudo-element",q6="data-fa-pseudo-element-pending",Rp="data-prefix",Cp="data-icon",U_="fontawesome-i2svg",W6="async",K6=["HTML","HEAD","STYLE","SCRIPT"],U0=["::before","::after",":before",":after"],$0=function(){try{return!0}catch{return!1}}();function Fa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ft]}})}var j0=W({},_0);j0[Ft]=W(W(W(W({},{"fa-duotone":"duotone"}),_0[Ft]),V_.kit),V_["kit-duotone"]);var G6=Fa(j0),Fh=W({},KV);Fh[Ft]=W(W(W(W({},{duotone:"fad"}),Fh[Ft]),F_.kit),F_["kit-duotone"]);var $_=Fa(Fh),Uh=W({},Lh);Uh[Ft]=W(W({},Uh[Ft]),t6.kit);var B0=Fa(Uh),$h=W({},V6);$h[Ft]=W(W({},$h[Ft]),ZV.kit);Fa($h);var Y6=SV,H0="fa-layers-text",Q6=RV,J6=W({},zV);Fa(J6);var X6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tf=CV,Z6=[].concat(Cn(GV),Cn(H6)),Yo=ls.FontAwesomeConfig||{};function eF(t){var e=Ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function tF(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ge&&typeof Ge.querySelector=="function"){var nF=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nF.forEach(function(t){var e=mu(t,2),n=e[0],r=e[1],s=tF(eF(n));s!=null&&(Yo[r]=s)})}var z0={styleDefault:"solid",familyDefault:Ft,cssPrefix:V0,replacementClass:F0,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yo.familyPrefix&&(Yo.cssPrefix=Yo.familyPrefix);var Ki=W(W({},z0),Yo);Ki.autoReplaceSvg||(Ki.observeMutations=!1);var ue={};Object.keys(z0).forEach(function(t){Object.defineProperty(ue,t,{enumerable:!0,set:function(n){Ki[t]=n,Qo.forEach(function(r){return r(ue)})},get:function(){return Ki[t]}})});Object.defineProperty(ue,"familyPrefix",{enumerable:!0,set:function(e){Ki.cssPrefix=e,Qo.forEach(function(n){return n(ue)})},get:function(){return Ki.cssPrefix}});ls.FontAwesomeConfig=ue;var Qo=[];function rF(t){return Qo.push(t),function(){Qo.splice(Qo.indexOf(t),1)}}var si=Mh,Ln={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sF(t){if(!(!t||!Tr)){var e=Ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ge.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ge.head.insertBefore(e,r),t}}var iF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function j_(){for(var t=12,e="";t-- >0;)e+=iF[Math.random()*62|0];return e}function io(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Pp(t){return t.classList?io(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function q0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oF(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(q0(t[n]),'" ')},"").trim()}function gu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function kp(t){return t.size!==Ln.size||t.x!==Ln.x||t.y!==Ln.y||t.rotate!==Ln.rotate||t.flipX||t.flipY}function aF(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function lF(t){var e=t.transform,n=t.width,r=n===void 0?Mh:n,s=t.height,i=s===void 0?Mh:s,o="";return y0?o+="translate(".concat(e.x/si-r/2,"em, ").concat(e.y/si-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/si,"em), calc(-50% + ").concat(e.y/si,"em)) "),o+="scale(".concat(e.size/si*(e.flipX?-1:1),", ").concat(e.size/si*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var cF=`:root, :host {
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
}`;function W0(){var t=V0,e=F0,n=ue.cssPrefix,r=ue.replacementClass,s=cF;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var B_=!1;function If(){ue.autoAddCss&&!B_&&(sF(W0()),B_=!0)}var uF={mixout:function(){return{dom:{css:W0,insertCss:If}}},hooks:function(){return{beforeDOMElementCreation:function(){If()},beforeI2svg:function(){If()}}}},vr=ls||{};vr[_r]||(vr[_r]={});vr[_r].styles||(vr[_r].styles={});vr[_r].hooks||(vr[_r].hooks={});vr[_r].shims||(vr[_r].shims=[]);var wn=vr[_r],K0=[],G0=function(){Ge.removeEventListener("DOMContentLoaded",G0),Ac=1,K0.map(function(e){return e()})},Ac=!1;Tr&&(Ac=(Ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ge.readyState),Ac||Ge.addEventListener("DOMContentLoaded",G0));function fF(t){Tr&&(Ac?setTimeout(t,0):K0.push(t))}function Ua(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?q0(t):"<".concat(e," ").concat(oF(r),">").concat(i.map(Ua).join(""),"</").concat(e,">")}function H_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Af=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=a(f,e[u],u,e);return f};function Y0(t){return Cn(t).length!==1?null:t.codePointAt(0).toString(16)}function z_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function Q0(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=z_(e);typeof wn.hooks.addPack=="function"&&!s?wn.hooks.addPack(t,z_(e)):wn.styles[t]=W(W({},wn.styles[t]||{}),i),t==="fas"&&Q0("fa",e)}var va=wn.styles,hF=wn.shims,J0=Object.keys(B0),dF=J0.reduce(function(t,e){return t[e]=Object.keys(B0[e]),t},{}),Op=null,X0={},Z0={},eI={},tI={},nI={};function pF(t){return~Z6.indexOf(t)}function mF(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!pF(s)?s:null}var rI=function(){var e=function(i){return Af(va,function(o,a,c){return o[c]=Af(a,i,{}),o},{})};X0=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),Z0=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),nI=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in va||ue.autoFetchSvg,r=Af(hF,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});eI=r.names,tI=r.unicodes,Op=yu(ue.styleDefault,{family:ue.familyDefault})};rF(function(t){Op=yu(t.styleDefault,{family:ue.familyDefault})});rI();function xp(t,e){return(X0[t]||{})[e]}function gF(t,e){return(Z0[t]||{})[e]}function Rs(t,e){return(nI[t]||{})[e]}function sI(t){return eI[t]||{prefix:null,iconName:null}}function yF(t){var e=tI[t],n=xp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cs(){return Op}var iI=function(){return{prefix:null,iconName:null,rest:[]}};function _F(t){var e=Ft,n=J0.reduce(function(r,s){return r[s]="".concat(ue.cssPrefix,"-").concat(s),r},{});return N0.forEach(function(r){(t.includes(n[r])||t.some(function(s){return dF[r].includes(s)}))&&(e=r)}),e}function yu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ft:n,s=G6[r][t];if(r===Va&&!t)return"fad";var i=$_[r][t]||$_[r][s],o=t in wn.styles?t:null,a=i||o||null;return a}function vF(t){var e=[],n=null;return t.forEach(function(r){var s=mF(ue.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function q_(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var W_=L0.concat(D0);function _u(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=null,i=q_(t.filter(function(m){return W_.includes(m)})),o=q_(t.filter(function(m){return!W_.includes(m)})),a=i.filter(function(m){return s=m,!v0.includes(m)}),c=mu(a,1),u=c[0],f=u===void 0?null:u,h=_F(i),p=W(W({},vF(o)),{},{prefix:yu(f,{family:h})});return W(W(W({},p),TF({values:t,family:h,styles:va,config:ue,canonical:p,givenPrefix:s})),EF(r,s,p))}function EF(t,e,n){var r=n.prefix,s=n.iconName;if(t||!r||!s)return{prefix:r,iconName:s};var i=e==="fa"?sI(s):{},o=Rs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!va.far&&va.fas&&!ue.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var bF=N0.filter(function(t){return t!==Ft||t!==Va}),wF=Object.keys(Lh).filter(function(t){return t!==Ft}).map(function(t){return Object.keys(Lh[t])}).flat();function TF(t){var e=t.values,n=t.family,r=t.canonical,s=t.givenPrefix,i=s===void 0?"":s,o=t.styles,a=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,f=n===Va,h=e.includes("fa-duotone")||e.includes("fad"),p=u.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(h||p||m)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&bF.includes(n)){var y=Object.keys(a).find(function(P){return wF.includes(P)});if(y||u.autoFetchSvg){var w=WV.get(n).defaultShortPrefixId;r.prefix=w,r.iconName=Rs(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=cs()||"fas"),r}var IF=function(){function t(){yV(this,t),this.definitions={}}return vV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=W(W({},n.definitions[a]||{}),o[a]),Q0(a,o[a]),rI()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}])}(),K_=[],pi={},Pi={},AF=Object.keys(Pi);function SF(t,e){var n=e.mixoutsTo;return K_=t,pi={},Object.keys(Pi).forEach(function(r){AF.indexOf(r)===-1&&delete Pi[r]}),K_.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Ic(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){pi[o]||(pi[o]=[]),pi[o].push(i[o])})}r.provides&&r.provides(Pi)}),n}function jh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=pi[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Bs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=pi[t]||[];s.forEach(function(i){i.apply(null,n)})}function us(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Pi[t]?Pi[t].apply(null,e):void 0}function Bh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||cs();if(e)return e=Rs(n,e)||e,H_(oI.definitions,n,e)||H_(wn.styles,n,e)}var oI=new IF,RF=function(){ue.autoReplaceSvg=!1,ue.observeMutations=!1,Bs("noAuto")},CF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tr?(Bs("beforeI2svg",e),us("pseudoElements2svg",e),us("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ue.autoReplaceSvg===!1&&(ue.autoReplaceSvg=!0),ue.observeMutations=!0,fF(function(){kF({autoReplaceSvgRoot:n}),Bs("watch",e)})}},PF={icon:function(e){if(e===null)return null;if(Ic(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Rs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=yu(e[0]);return{prefix:r,iconName:Rs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ue.cssPrefix,"-"))>-1||e.match(Y6))){var s=_u(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||cs(),iconName:Rs(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=cs();return{prefix:i,iconName:Rs(i,e)||e}}}},nn={noAuto:RF,config:ue,dom:CF,parse:PF,library:oI,findIconDefinition:Bh,toHtml:Ua},kF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ge:n;(Object.keys(wn.styles).length>0||ue.autoFetchSvg)&&Tr&&ue.autoReplaceSvg&&nn.dom.i2svg({node:r})};function vu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ua(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Tr){var r=Ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function OF(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(kp(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};s.style=gu(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function xF(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(ue.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function NF(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Np(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.maskId,u=t.extra,f=t.watchable,h=f===void 0?!1:f,p=r.found?r:n,m=p.width,y=p.height,w=[ue.replacementClass,i?"".concat(ue.cssPrefix,"-").concat(i):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),P={children:[],attributes:W(W({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:w,role:u.attributes.role||"img",viewBox:"0 0 ".concat(m," ").concat(y)})};!NF(u.attributes)&&!u.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),h&&(P.attributes[js]="");var O=W(W({},P),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:W({},u.styles)}),R=r.found&&n.found?us("generateAbstractMask",O)||{children:[],attributes:{}}:us("generateAbstractIcon",O)||{children:[],attributes:{}},v=R.children,C=R.attributes;return O.children=v,O.attributes=C,a?xF(O):OF(O)}function G_(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.extra,o=t.watchable,a=o===void 0?!1:o,c=W(W({},i.attributes),{},{class:i.classes.join(" ")});a&&(c[js]="");var u=W({},i.styles);kp(s)&&(u.transform=lF({transform:s,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=gu(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),h}function DF(t){var e=t.content,n=t.extra,r=W(W({},n.attributes),{},{class:n.classes.join(" ")}),s=gu(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var Sf=wn.styles;function Hh(t){var e=t[0],n=t[1],r=t.slice(4),s=mu(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(ue.cssPrefix,"-").concat(Tf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(Tf.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(Tf.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var LF={found:!1,width:512,height:512};function MF(t,e){!$0&&!ue.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zh(t,e){var n=e;return e==="fa"&&ue.styleDefault!==null&&(e=cs()),new Promise(function(r,s){if(n==="fa"){var i=sI(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Sf[e]&&Sf[e][t]){var o=Sf[e][t];return r(Hh(o))}MF(t,e),r(W(W({},LF),{},{icon:ue.showMissingIcons&&t?us("missingIconAbstract")||{}:{}}))})}var Y_=function(){},qh=ue.measurePerformance&&Il&&Il.mark&&Il.measure?Il:{mark:Y_,measure:Y_},xo='FA "7.0.0"',VF=function(e){return qh.mark("".concat(xo," ").concat(e," begins")),function(){return aI(e)}},aI=function(e){qh.mark("".concat(xo," ").concat(e," ends")),qh.measure("".concat(xo," ").concat(e),"".concat(xo," ").concat(e," begins"),"".concat(xo," ").concat(e," ends"))},Dp={begin:VF,end:aI},jl=function(){};function Q_(t){var e=t.getAttribute?t.getAttribute(js):null;return typeof e=="string"}function FF(t){var e=t.getAttribute?t.getAttribute(Rp):null,n=t.getAttribute?t.getAttribute(Cp):null;return e&&n}function UF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ue.replacementClass)}function $F(){if(ue.autoReplaceSvg===!0)return Bl.replace;var t=Bl[ue.autoReplaceSvg];return t||Bl.replace}function jF(t){return Ge.createElementNS("http://www.w3.org/2000/svg",t)}function BF(t){return Ge.createElement(t)}function lI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?jF:BF:n;if(typeof t=="string")return Ge.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(lI(o,{ceFn:r}))}),s}function HF(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Bl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(lI(s),n)}),n.getAttribute(js)===null&&ue.keepOriginalSource){var r=Ge.createComment(HF(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Pp(n).indexOf(ue.replacementClass))return Bl.replace(e);var s=new RegExp("".concat(ue.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===ue.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Ua(a)}).join(`
`);n.setAttribute(js,""),n.innerHTML=o}};function J_(t){t()}function cI(t,e){var n=typeof e=="function"?e:jl;if(t.length===0)n();else{var r=J_;ue.mutateApproach===W6&&(r=ls.requestAnimationFrame||J_),r(function(){var s=$F(),i=Dp.begin("mutate");t.map(s),i(),n()})}}var Lp=!1;function uI(){Lp=!0}function Wh(){Lp=!1}var Sc=null;function X_(t){if(M_&&ue.observeMutations){var e=t.treeCallback,n=e===void 0?jl:e,r=t.nodeCallback,s=r===void 0?jl:r,i=t.pseudoElementsCallback,o=i===void 0?jl:i,a=t.observeMutationsRoot,c=a===void 0?Ge:a;Sc=new M_(function(u){if(!Lp){var f=cs();io(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Q_(h.addedNodes[0])&&(ue.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&ue.searchPseudoElements&&o([h.target],!0),h.type==="attributes"&&Q_(h.target)&&~X6.indexOf(h.attributeName))if(h.attributeName==="class"&&FF(h.target)){var p=_u(Pp(h.target)),m=p.prefix,y=p.iconName;h.target.setAttribute(Rp,m||f),y&&h.target.setAttribute(Cp,y)}else UF(h.target)&&s(h.target)})}}),Tr&&Sc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zF(){Sc&&Sc.disconnect()}function qF(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function WF(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=_u(Pp(t));return s.prefix||(s.prefix=cs()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=gF(s.prefix,t.innerText)||xp(s.prefix,Y0(t.innerText))),!s.iconName&&ue.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function KF(t){var e=io(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function GF(){return{iconName:null,prefix:null,transform:Ln,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=WF(t),r=n.iconName,s=n.prefix,i=n.rest,o=KF(t),a=jh("parseNodeAttributes",{},t),c=e.styleParser?qF(t):[];return W({iconName:r,prefix:s,transform:Ln,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var YF=wn.styles;function fI(t){var e=ue.autoReplaceSvg==="nest"?Z_(t,{styleParser:!1}):Z_(t);return~e.extra.classes.indexOf(H0)?us("generateLayersText",t,e):us("generateSvgReplacementMutation",t,e)}function QF(){return[].concat(Cn(D0),Cn(L0))}function ev(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tr)return Promise.resolve();var n=Ge.documentElement.classList,r=function(h){return n.add("".concat(U_,"-").concat(h))},s=function(h){return n.remove("".concat(U_,"-").concat(h))},i=ue.autoFetchSvg?QF():v0.concat(Object.keys(YF));i.includes("fa")||i.push("fa");var o=[".".concat(H0,":not([").concat(js,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(js,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=io(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=Dp.begin("onTree"),u=a.reduce(function(f,h){try{var p=fI(h);p&&f.push(p)}catch(m){$0||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,h){Promise.all(u).then(function(p){cI(p,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(p){c(),h(p)})})}function JF(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fI(t).then(function(n){n&&cI([n],e)})}function XF(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Bh(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:Bh(s||{})),t(r,W(W({},n),{},{mask:s}))}}var ZF=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Ln:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,u=n.maskId,f=u===void 0?null:u,h=n.classes,p=h===void 0?[]:h,m=n.attributes,y=m===void 0?{}:m,w=n.styles,P=w===void 0?{}:w;if(e){var O=e.prefix,R=e.iconName,v=e.icon;return vu(W({type:"icon"},e),function(){return Bs("beforeDOMElementCreation",{iconDefinition:e,params:n}),Np({icons:{main:Hh(v),mask:c?Hh(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:R,transform:W(W({},Ln),s),symbol:o,maskId:f,extra:{attributes:y,styles:P,classes:p}})})}},e3={mixout:function(){return{icon:XF(ZF)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ev,n.nodeCallback=JF,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?Ge:r,i=n.callback,o=i===void 0?function(){}:i;return ev(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.prefix,o=r.transform,a=r.symbol,c=r.mask,u=r.maskId,f=r.extra;return new Promise(function(h,p){Promise.all([zh(s,i),c.iconName?zh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var y=mu(m,2),w=y[0],P=y[1];h([n,Np({icons:{main:w,mask:P},prefix:i,iconName:s,transform:o,symbol:a,maskId:u,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=gu(a);c.length>0&&(s.style=c);var u;return kp(o)&&(u=us("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:s}}}},t3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return vu({type:"layer"},function(){Bs("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(ue.cssPrefix,"-layers")].concat(Cn(i)).join(" ")},children:o}]})}}}},n3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,i=s===void 0?[]:s,o=r.attributes,a=o===void 0?{}:o,c=r.styles,u=c===void 0?{}:c;return vu({type:"counter",content:n},function(){return Bs("beforeDOMElementCreation",{content:n,params:r}),DF({content:n.toString(),extra:{attributes:a,styles:u,classes:["".concat(ue.cssPrefix,"-layers-counter")].concat(Cn(i))}})})}}}},r3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Ln:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,f=r.styles,h=f===void 0?{}:f;return vu({type:"text",content:n},function(){return Bs("beforeDOMElementCreation",{content:n,params:r}),G_({content:n,transform:W(W({},Ln),i),extra:{attributes:u,styles:h,classes:["".concat(ue.cssPrefix,"-layers-text")].concat(Cn(a))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.transform,i=r.extra,o=null,a=null;if(y0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,a=u.height/c}return Promise.resolve([n,G_({content:n.innerHTML,width:o,height:a,transform:s,extra:i,watchable:!0})])}}},hI=new RegExp('"',"ug"),tv=[1105920,1112319],nv=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),qV),z6),e6),Kh=Object.keys(nv).reduce(function(t,e){return t[e.toLowerCase()]=nv[e],t},{}),s3=Object.keys(Kh).reduce(function(t,e){var n=Kh[e];return t[e]=n[900]||Cn(Object.entries(n))[0][1],t},{});function i3(t){var e=t.replace(hI,"");return Y0(Cn(e)[0]||"")}function o3(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(hI,""),s=r.codePointAt(0),i=s>=tv[0]&&s<=tv[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function a3(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Kh[n]||{})[s]||s3[n]}function rv(t,e){var n="".concat(q6).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=io(t.children),o=i.filter(function(F){return F.getAttribute(Vh)===e})[0],a=ls.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(Q6),f=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&h!=="none"&&h!==""){var p=a.getPropertyValue("content"),m=a3(c,f),y=i3(p),w=u[0].startsWith("FontAwesome"),P=o3(a),O=xp(m,y),R=O;if(w){var v=yF(y);v.iconName&&v.prefix&&(O=v.iconName,m=v.prefix)}if(O&&!P&&(!o||o.getAttribute(Rp)!==m||o.getAttribute(Cp)!==R)){t.setAttribute(n,R),o&&t.removeChild(o);var C=GF(),D=C.extra;D.attributes[Vh]=e,zh(O,m).then(function(F){var S=Np(W(W({},C),{},{icons:{main:F,mask:iI()},prefix:m,iconName:R,extra:D,watchable:!0})),E=Ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=S.map(function(_){return Ua(_)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function l3(t){return Promise.all([rv(t,"::before"),rv(t,"::after")])}function c3(t){return t.parentNode!==document.head&&!~K6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var u3=function(e){return!!e&&U0.some(function(n){return e.includes(n)})},f3=function(e){if(!e)return[];for(var n=new Set,r=[e],s=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var m=a[o];r=r.flatMap(function(y){return y.split(m).map(function(w){return w.replace(/,\s*$/,"").trim()})})},o=0,a=s;o<a.length;o++)i();r=r.flatMap(function(p){return p.includes("(")?p:p.split(",").map(function(m){return m.trim()})});var c=$l(r),u;try{for(c.s();!(u=c.n()).done;){var f=u.value;if(u3(f)){var h=U0.reduce(function(p,m){return p.replace(m,"")},f);h!==""&&h!=="*"&&n.add(h)}}}catch(p){c.e(p)}finally{c.f()}return n};function sv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Tr){var n;if(e)n=t;else if(ue.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,s=$l(document.styleSheets),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;try{var a=$l(o.cssRules),c;try{for(a.s();!(c=a.n()).done;){var u=c.value,f=f3(u.selectorText),h=$l(f),p;try{for(h.s();!(p=h.n()).done;){var m=p.value;r.add(m)}}catch(w){h.e(w)}finally{h.f()}}}catch(w){a.e(w)}finally{a.f()}}catch(w){ue.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){s.e(w)}finally{s.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{n=t.querySelectorAll(y)}catch{}}return new Promise(function(w,P){var O=io(n).filter(c3).map(l3),R=Dp.begin("searchPseudoElements");uI(),Promise.all(O).then(function(){R(),Wh(),w()}).catch(function(){R(),Wh(),P()})})}}var h3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=sv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?Ge:r;ue.searchPseudoElements&&sv(s)}}},iv=!1,d3={mixout:function(){return{dom:{unwatch:function(){uI(),iv=!0}}}},hooks:function(){return{bootstrap:function(){X_(jh("mutationObserverCallbacks",{}))},noAuto:function(){zF()},watch:function(n){var r=n.observeMutationsRoot;iv?Wh():X_(jh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ov=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},p3={mixout:function(){return{parse:{transform:function(n){return ov(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=ov(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:p};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),m.path)}]}]}}}},Rf={x:0,y:0,width:"100%",height:"100%"};function av(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function m3(t){return t.tag==="g"?t.children:[t]}var g3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?_u(s.split(" ").map(function(o){return o.trim()})):iI();return i.prefix||(i.prefix=cs()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,u=i.width,f=i.icon,h=o.width,p=o.icon,m=aF({transform:c,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:W(W({},Rf),{},{fill:"white"})},w=f.children?{children:f.children.map(av)}:{},P={tag:"g",attributes:W({},m.inner),children:[av(W({tag:f.tag,attributes:W(W({},f.attributes),m.path)},w))]},O={tag:"g",attributes:W({},m.outer),children:[P]},R="mask-".concat(a||j_()),v="clip-".concat(a||j_()),C={tag:"mask",attributes:W(W({},Rf),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,O]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:m3(p)},C]};return r.push(D,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(R,")")},Rf)}),{children:r,attributes:s}}}},y3={provides:function(e){var n=!1;ls.matchMedia&&(n=ls.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:W(W({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:W(W({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:W(W({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},v3=[uF,e3,t3,n3,r3,h3,d3,p3,g3,y3,_3];SF(v3,{mixoutsTo:nn});nn.noAuto;var E3=nn.config,b3=nn.library;nn.dom;var Gh=nn.parse;nn.findIconDefinition;nn.toHtml;var w3=nn.icon;nn.layer;nn.text;nn.counter;function Ot(t,e,n){return(e=S3(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function ir(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?lv(Object(n),!0).forEach(function(r){Ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function T3(t,e){if(t==null)return{};var n,r,s=I3(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function I3(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function A3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function S3(t){var e=A3(t,"string");return typeof e=="symbol"?e:e+""}function Rc(t){"@babel/helpers - typeof";return Rc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rc(t)}function Cf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}function R3(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),Ot(Ot(Ot(Ot(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var C3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dI={exports:{}};(function(t){(function(e){var n=function(O,R,v){if(!u(R)||h(R)||p(R)||m(R)||c(R))return R;var C,D=0,F=0;if(f(R))for(C=[],F=R.length;D<F;D++)C.push(n(O,R[D],v));else{C={};for(var S in R)Object.prototype.hasOwnProperty.call(R,S)&&(C[O(S,v)]=n(O,R[S],v))}return C},r=function(O,R){R=R||{};var v=R.separator||"_",C=R.split||/(?=[A-Z])/;return O.split(C).join(v)},s=function(O){return y(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(R,v){return v?v.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var R=s(O);return R.substr(0,1).toUpperCase()+R.substr(1)},o=function(O,R){return r(O,R).toLowerCase()},a=Object.prototype.toString,c=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},f=function(O){return a.call(O)=="[object Array]"},h=function(O){return a.call(O)=="[object Date]"},p=function(O){return a.call(O)=="[object RegExp]"},m=function(O){return a.call(O)=="[object Boolean]"},y=function(O){return O=O-0,O===O},w=function(O,R){var v=R&&"process"in R?R.process:R;return typeof v!="function"?O:function(C,D){return v(C,O,D)}},P={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(O,R){return n(w(s,R),O)},decamelizeKeys:function(O,R){return n(w(o,R),O,R)},pascalizeKeys:function(O,R){return n(w(i,R),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:e.humps=P})(C3)})(dI);var P3=dI.exports,k3=["class","style"];function O3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=P3.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function x3(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function pI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return pI(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=x3(f);break;case"style":c.style=O3(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=T3(n,k3);return Ke(t.tag,ir(ir(ir({},e),{},{class:s.class,style:ir(ir({},s.style),o)},s.attrs),a),r)}var mI=!1;try{mI=!0}catch{}function N3(){if(!mI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function cv(t){if(t&&Rc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gh.icon)return Gh.icon(t);if(t===null)return null;if(Rc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var D3=mn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=je(function(){return cv(e.icon)}),i=je(function(){return Cf("classes",R3(e))}),o=je(function(){return Cf("transform",typeof e.transform=="string"?Gh.transform(e.transform):e.transform)}),a=je(function(){return Cf("mask",cv(e.mask))}),c=je(function(){var f=ir(ir(ir(ir({},i.value),o.value),a.value),{},{symbol:e.symbol,maskId:e.maskId});return f.title=e.title,f.titleId=e.titleId,w3(s.value,f)});Vn(c,function(f){if(!f)return N3("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=je(function(){return c.value?pI(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const L3={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const M3={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},V3=M3,F3={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},U3={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},$3={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};E3.autoAddCss=!1;b3.add(L3,U3,V3,$3,F3);const j3=tn(t=>{t.vueApp.component("font-awesome-icon",D3)});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let gI;const Eu=t=>gI=t,yI=Symbol();function Yh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Jo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Jo||(Jo={}));function B3(){const t=sd(!0),e=t.run(()=>Qt({}));let n=[],r=[];const s=fd({install(i){Eu(s),s._a=i,i.provide(yI,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const _I=()=>{};function uv(t,e,n,r=_I){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qi()&&Xo(s),s}function ii(t,...e){t.slice().forEach(n=>{n(...e)})}const H3=t=>t(),fv=Symbol(),Pf=Symbol();function Qh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Yh(s)&&Yh(r)&&t.hasOwnProperty(n)&&!Xe(r)&&!cr(r)?t[n]=Qh(s,r):t[n]=r}return t}const z3=Symbol();function q3(t){return!Yh(t)||!t.hasOwnProperty(z3)}const{assign:xr}=Object;function W3(t){return!!(Xe(t)&&t.effect)}function K3(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const f=RA(n.state.value[t]);return xr(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=fd(je(()=>{Eu(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return c=vI(t,u,e,n,r,!0),c}function vI(t,e,n={},r,s,i){let o;const a=xr({actions:{}},n),c={deep:!0};let u,f,h=[],p=[],m;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Qt({});let w;function P(E){let _;u=f=!1,typeof E=="function"?(E(r.state.value[t]),_={type:Jo.patchFunction,storeId:t,events:m}):(Qh(r.state.value[t],E),_={type:Jo.patchObject,payload:E,storeId:t,events:m});const T=w=Symbol();Wn().then(()=>{w===T&&(u=!0)}),f=!0,ii(h,_,r.state.value[t])}const O=i?function(){const{state:_}=n,T=_?_():{};this.$patch(x=>{xr(x,T)})}:_I;function R(){o.stop(),h=[],p=[],r._s.delete(t)}const v=(E,_="")=>{if(fv in E)return E[Pf]=_,E;const T=function(){Eu(r);const x=Array.from(arguments),k=[],I=[];function ge(se){k.push(se)}function ve(se){I.push(se)}ii(p,{args:x,name:T[Pf],store:D,after:ge,onError:ve});let Z;try{Z=E.apply(this&&this.$id===t?this:D,x)}catch(se){throw ii(I,se),se}return Z instanceof Promise?Z.then(se=>(ii(k,se),se)).catch(se=>(ii(I,se),Promise.reject(se))):(ii(k,Z),Z)};return T[fv]=!0,T[Pf]=_,T},C={_p:r,$id:t,$onAction:uv.bind(null,p),$patch:P,$reset:O,$subscribe(E,_={}){const T=uv(h,E,_.detached,()=>x()),x=o.run(()=>Vn(()=>r.state.value[t],k=>{(_.flush==="sync"?f:u)&&E({storeId:t,type:Jo.direct,events:m},k)},xr({},c,_)));return T},$dispose:R},D=Er(C);r._s.set(t,D);const S=(r._a&&r._a.runWithContext||H3)(()=>r._e.run(()=>(o=sd()).run(()=>e({action:v}))));for(const E in S){const _=S[E];if(Xe(_)&&!W3(_)||cr(_))i||(y&&q3(_)&&(Xe(_)?_.value=y[E]:Qh(_,y[E])),r.state.value[t][E]=_);else if(typeof _=="function"){const T=v(_,E);S[E]=T,a.actions[E]=_}}return xr(D,S),xr(Re(D),S),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:E=>{P(_=>{xr(_,E)})}}),r._p.forEach(E=>{xr(D,o.run(()=>E({store:D,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(D.$state,y),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function G3(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=Aa();return a=a||(u?pt(yI,null):null),a&&Eu(a),a=gI,a._s.has(r)||(i?vI(r,e,s,a):K3(r,s,a)),a._s.get(r)}return o.$id=r,o}function Y3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function Q3(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const J3=tn(t=>{const e=B3();t.vueApp.use(e)});var hv=/^(GTM|G)-[0-9A-Z]+$/;function kf(t){if(typeof t!="string"||!hv.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${hv}).${n}`)}}function No(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function ki(t,e){let n=document,r=n.createElement("script"),s=u=>{e.onReady?.({id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(No(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let c=e.parentElement??n.body;if(typeof c?.appendChild!="function")throw new Error("parentElement must be a DOM element");return c.appendChild(r),r}function X3(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var Z3=class{id;options;scriptElements=[];constructor(t){if(Array.isArray(t.id))for(let e of t.id)kf(typeof e=="string"?e:e.id);else kf(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}isInBrowserContext=()=>typeof window<"u";enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!X3(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=ki(n,{...this.options}):r=ki(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=ki(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?No(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&No(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&No(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&No(window,this.options.dataLayerName).push(t)}},or;function e9(t,e={id:""}){e={trackOnNextTick:!1,...e},or=new Z3(e),t.config.globalProperties.$gtm=or,or.isInBrowserContext()&&(e.vueRouter&&t9(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),or.options.enabled&&or.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")ki(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),ki(n.id,r)}}):ki(e.id,e))),t.provide("gtm",e)}function t9(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,c)=>{if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(c,4)?or?.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(c,8)&&or?.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...o.meta?.gtmAdditionalEventData},h=e.options?.history?.base??"";h.endsWith("/")||(h+="/"),h+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Wn(()=>{or?.trackView(u,h,f)}):or?.trackView(u,h,f)})}function n9(t){return{install:e=>e9(e,t)}}const r9=tn(t=>{const e=qs().public,n=kN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(n9({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:At(),trackOnNextTick:!1}))}),s9=[BC,KC,pk,gk,yk,_k,Ek,bk,Tk,pV,j3,J3,r9],i9=mn({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(t,{slots:e,expose:n}){const{set:r,polite:s,assertive:i,message:o,politeness:a}=LN({politeness:t.politeness});return n({set:r,polite:s,assertive:i,message:o,politeness:a}),()=>Ke("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},Ke("span",{role:"alert","aria-live":a.value,"aria-atomic":t.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},e.default?e.default({message:o.value}):o.value))}}),EI=(t="RouteProvider")=>mn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Gr(Ds,Nn(s)),()=>e.vnode?Ke(e.vnode,{ref:e.vnodeRef}):e.vnode}}),o9=EI(),dv=new WeakMap,a9=mn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ve(),i=Qt(),o=pt(Ds,null);let a;r({pageRef:i});const c=pt(tb,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);At().beforeEach(p)}t.pageKey&&Vn(()=>t.pageKey,(p,m)=>{p!==m&&s.callHook("page:loading:start")});let h=!1;{const p=At().beforeResolve(()=>{h=!1});Xi(()=>{p()})}return()=>Ke(Tb,{name:t.name,route:t.route,...e},{default:p=>{const m=c9(o,p.route,p.Component),y=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!y)return u;f();return}if(u&&c&&!c.isCurrent(p.route))return u;if(m&&o&&(!c||c?.isCurrent(o)))return y?u:null;const w=ih(p,t.pageKey),P=u9(o,p.route,p.Component);!s.isHydrating&&a===w&&!P&&Wn(()=>{h=!0,s.callHook("page:loading:end")}),a=w;const O=!!(t.transition??p.route.meta.pageTransition??gg),R=O&&l9([t.transition,p.route.meta.pageTransition,gg,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),v=t.keepalive??p.route.meta.keepalive??kR;return u=Ab(O&&R,ek(v,Ke(yd,{suspensible:!0,onPending:()=>{O&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{Wn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!h&&!P)return h=!0,s.callHook("page:loading:end")}).finally(f))}},{default:()=>{const C={key:w||void 0,vnode:n.default?f9(n.default,p):p.Component,route:p.route,renderKey:w||void 0,trackRootNodes:O,vnodeRef:i};if(!v)return Ke(o9,C);const D=p.Component.type,F=D;let S=dv.get(F);return S||(S=EI(D.name||D.__name),dv.set(F,S)),Ke(S,C)}}))).default(),u}})}});function l9(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Pd(n.onAfterLeave):void 0}));return ZE(...e)}function c9(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>s.components?.default===n?.type);return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>s.components?.default!==t.matched[i]?.components?.default)||n&&ih({route:e,Component:n})!==ih({route:t,Component:n})}function u9(t,e,n){return t?e.matched.findIndex(s=>s.components?.default===n?.type)<e.matched.length-1:!1}function f9(t,e){const n=t(e);return n.length===1?Ke(n[0]):Ke(Lt,void 0,n)}const h9=mn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Ke(zr[t.name],t.layoutProps,e.slots)}}),d9={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},p9=mn({name:"NuxtLayout",inheritAttrs:!1,props:d9,setup(t,e){const n=Ve(),r=pt(Ds),i=!r||r===$c()?Ib():r,o=je(()=>{let f=ot(t.name)??i?.meta.layout??"default";return f&&!(f in zr)&&t.fallback&&(f=ot(t.fallback)),f}),a=qn();e.expose({layoutRef:a});const c=n.deferHydration();if(n.isHydrating){const f=n.hooks.hookOnce("app:error",c);At().beforeEach(f)}let u;return()=>{const f=o.value&&o.value in zr,h=i?.meta.layoutTransition??PR,p=u;return u=o.value,Ab(f&&h,{default:()=>Ke(yd,{suspensible:!0,onResolve:()=>{Wn(c)}},{default:()=>Ke(m9,{layoutProps:kE(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==p&&m===o.value,hasTransition:!!h},e.slots)})}).default()}}}),m9=mn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Gr(tb,{isCurrent:i=>n===(i.meta.layout??"default")});const r=pt(Ds);if(r&&r===$c()){const i=Ib(),o={};for(const a in i){const c=a;Object.defineProperty(o,c,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[c]:r[c]})}Gr(Ds,Nn(o))}return()=>!n||typeof n=="string"&&!(n in zr)?e.slots.default?.():Ke(h9,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}),bu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},g9=TN(i9),y9={};function _9(t,e){const n=g9,r=a9,s=p9;return zt(),sr(s,null,{default:_n(()=>[Ee(n),Ee(r)]),_:1})}const v9=bu(y9,[["render",_9]]),E9=Uc("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),pv=G3("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=Ve(),r=At();try{const s=await sx(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=Ve();try{await lx(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=Ve();ax(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),b9=Uc("/channels4_banner.jpg"),w9={class:"navbar navbar-expand-md navbar-light bg-light"},T9={class:"navbar-nav"},I9={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},A9={class:"navbar-nav ml-auto"};function S9(t,e,n,r,s,i){const o=FN;return zt(),sa("nav",w9,[Ee(o,{class:"navbar-brand",to:"/"},{default:_n(()=>e[2]||(e[2]=[ln("Who's Jimmy",-1)])),_:1,__:[2]}),Me("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[Me("span",{class:"navbar-toggler-icon"},null,-1)])),Me("div",{class:ba(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[Me("ul",T9,[Ee(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:_n(()=>e[4]||(e[4]=[ln("Bio",-1)])),_:1,__:[4]}),Ee(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:_n(()=>e[5]||(e[5]=[ln("Portfolio ",-1)])),_:1,__:[5]}),Ee(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:_n(()=>e[6]||(e[6]=[ln("For Sale",-1)])),_:1,__:[6]}),Ee(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:_n(()=>e[7]||(e[7]=[ln("Cool Stuff",-1)])),_:1,__:[7]}),Ee(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:_n(()=>e[8]||(e[8]=[ln("Contact Us",-1)])),_:1,__:[8]}),Ee(o,{class:"btn btn-light nav-item image-nav-item cta-button",tag:"li",activeClass:"active",to:"/Portfolio/Videos"},{default:_n(()=>e[9]||(e[9]=[Me("img",{class:"nav-image",src:b9,alt:"Channel Banner"},null,-1),Me("div",{class:"cta-overlay"},[Me("span",{class:"cta-text"},"WATCH NOW"),Me("div",{class:"cta-pulse"})],-1)])),_:1,__:[9]})])],2),s.isAuth?(zt(),sa("div",I9,[Me("ul",A9,[Ee(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:_n(()=>[ln(rd(t.user?t.user.email:""),1)]),_:1}),Me("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):F1("",!0)])}const R9={data(){return{visible:!1,isAuth:!1}},computed:{...Y3(pv,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...Q3(pv,{signOut:"signOut"})}},C9=bu(R9,[["render",S9],["__scopeId","data-v-d3ec44d7"]]),P9={class:"page-footer font-small bg-light navbar-fixed-bottom"},k9={class:"container"},O9={class:"py-3 pt-3"},x9={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},N9={href:"https://www.facebook.com/whosjimmy"},D9={href:"https://twitter.com/jimmyclaws"},L9={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function M9(t,e){const n=na("font-awesome-icon");return zt(),sa("footer",P9,[Me("div",k9,[Me("div",O9,[Me("a",x9,[Ee(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),Me("a",N9,[Ee(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),Me("a",D9,[Ee(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),Me("a",L9,[Ee(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=Me("div",{class:"footer-copyright text-center font-small"},[Me("div",null,[ln("© 2025 Copyright: "),Me("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),Me("div",null,"Disclaimer: All images are copyright to their respective owners."),Me("div",null,[ln("A "),Me("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),ln(" creation.")])],-1))])}const V9={},F9=bu(V9,[["render",M9],["__scopeId","data-v-29baef0e"]]),U9={class:"text-center my-0 page"},$9={class:"body"},j9={components:{appHeader:C9,appFooter:F9},head(){return{title:"Error"}}},B9=mn({...j9,__name:"error",props:{error:{}},setup(t){const e=t,{$config:n}=Ve();Cg({title:e?.error?.statusCode?.toString()||"Error"});const r=()=>{Cg({title:n.public.SITE_TITLE}),rb({redirect:"/"})};return(s,i)=>{const o=na("app-header"),a=na("app-footer");return zt(),sa("div",U9,[Ee(o),Me("div",$9,[i[0]||(i[0]=Me("img",{src:E9,alt:"Error Image"},null,-1)),Me("h2",null,"Error: "+rd(s.error?.statusCode),1),Me("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Ee(a)])}}}),H9=bu(B9,[["__scopeId","data-v-b700529b"]]),z9={key:0},mv={__name:"nuxt-root",setup(t){const e=()=>null,n=Ve(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);At().beforeEach(u)}const s=!1;Gr(Ds,$c()),n.hooks.callHookWith(u=>u.map(f=>f()),"vue:setup");const i=jc(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;rE((u,f,h)=>{if(n.hooks.callHook("vue:error",u,f,h).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(sb(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Is(u)),!1});const c=!1;return(u,f)=>(zt(),sr(yd,{onResolve:ot(r)},{default:_n(()=>[ot(o)?(zt(),sa("div",z9)):ot(i)?(zt(),sr(ot(H9),{key:1,error:ot(i)},null,8,["error"])):ot(c)?(zt(),sr(ot(e),{key:2,context:ot(c)},null,8,["context"])):ot(s)?(zt(),sr(t1(ot(s)),{key:3})):(zt(),sr(ot(v9),{key:4}))]),_:1},8,["onResolve"]))}};let gv;{let t;gv=async function(){if(t)return t;const r=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?AS(mv):IS(mv),s=MR({vueApp:r});async function i(o){await s.callHook("app:error",o),s.payload.error||=Os(o)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await UR(s,s9)}catch(o){i(o)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(NR),await s.hooks.callHook("app:mounted",r),await Wn()}catch(o){i(o)}return r},t=gv().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{F9 as $,Gr as A,cr as B,dr as C,Wn as D,Uc as E,_n as F,FN as G,Lt as H,K9 as I,V1 as J,b9 as K,ba as L,J9 as M,uV as N,lU as O,oU as P,aU as Q,G9 as R,q9 as S,M1 as T,Z1 as U,Ds as V,Z9 as W,GR as X,kN as Y,Q9 as Z,bu as _,Me as a,C9 as a0,a9 as a1,G3 as a2,Ve as a3,iU as a4,nU as a5,sU as a6,tU as a7,rU as a8,ln as b,sa as c,Q3 as d,X9 as e,F1 as f,sr as g,ot as h,Ee as i,zs as j,Qt as k,QA as l,Y3 as m,Oc as n,zt as o,Vn as p,Xe as q,na as r,Er as s,rd as t,pv as u,Y9 as v,W9 as w,Xi as x,je as y,pt as z};
