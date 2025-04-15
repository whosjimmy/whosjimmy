const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CBRcjFnT.js","./mmInAtbR.js","./D8KKr3CX.js","./Bofr1Ia-.js","./index.ASLudlX-.css","./BqbG3uw4.js","./bnpkbfui.js","./z3SxGze6.js","./CBuvtd4F.js","./Gallery.BdWwPq4R.css","./Film.D8qa6UOd.css","./Film.CyscwsSS.css","./BgiWniQ1.js","./Bio.BaV4dkSc.css","./DlucNmzQ.js","./Contact.Bq_tjq4M.css","./BLDbhjcP.js","./Clocks.CaZdgkmv.css","./Cy_GPShf.js","./index.EfND0qCY.css","./PjxF9_Tf.js","./Di9jUAMR.js","./index.CAtFJWG6.css","./DRBIOAQg.js","./Celebrities.BS01JuXe.css","./Dp34I_o_.js","./Clocks.Dmp-oUCd.css","./DuQiC8it.js","./index.ByThmlNc.css","./BvnD0KnV.js","./CDTDCGbi.js","./DrM7CzQJ.js","./DX3RGq4C.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var aI=Object.defineProperty;var lI=(t,e,n)=>e in t?aI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var rn=(t,e,n)=>lI(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ii=[],Dn=()=>{},cI=()=>!1,sa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fh=t=>t.startsWith("onUpdate:"),ht=Object.assign,Uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uI=Object.prototype.hasOwnProperty,xe=(t,e)=>uI.call(t,e),ce=Array.isArray,oi=t=>Li(t)==="[object Map]",Di=t=>Li(t)==="[object Set]",um=t=>Li(t)==="[object Date]",fI=t=>Li(t)==="[object RegExp]",pe=t=>typeof t=="function",We=t=>typeof t=="string",wn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Zy=t=>(Me(t)||pe(t))&&pe(t.then)&&pe(t.catch),ev=Object.prototype.toString,Li=t=>ev.call(t),hI=t=>Li(t).slice(8,-1),tv=t=>Li(t)==="[object Object]",jh=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ai=Vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dI=/-(\w)/g,hn=hc(t=>t.replace(dI,(e,n)=>n?n.toUpperCase():"")),pI=/\B([A-Z])/g,Ds=hc(t=>t.replace(pI,"-$1").toLowerCase()),dc=hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),bu=hc(t=>t?`on${dc(t)}`:""),Fr=(t,e)=>!Object.is(t,e),li=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},nv=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Al=t=>{const e=parseFloat(t);return isNaN(e)?t:e},rv=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let fm;const pc=()=>fm||(fm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?yI(r):mc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Me(t))return t}const mI=/;(?![^(]*\))/g,gI=/:([^]+)/,_I=/\/\*[^]*?\*\//g;function yI(t){const e={};return t.replace(_I,"").split(mI).forEach(n=>{if(n){const r=n.split(gI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ia(t){let e="";if(We(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=ia(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function l9(t){if(!t)return null;let{class:e,style:n}=t;return e&&!We(e)&&(t.class=ia(e)),n&&(t.style=mc(n)),t}const vI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",EI=Vh(vI);function sv(t){return!!t||t===""}function wI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=oa(t[r],e[r]);return n}function oa(t,e){if(t===e)return!0;let n=um(t),r=um(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=wn(t),r=wn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?wI(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!oa(t[o],e[o]))return!1}}return String(t)===String(e)}function Bh(t,e){return t.findIndex(n=>oa(n,e))}const iv=t=>!!(t&&t.__v_isRef===!0),$h=t=>We(t)?t:t==null?"":ce(t)||Me(t)&&(t.toString===ev||!pe(t.toString))?iv(t)?$h(t.value):JSON.stringify(t,ov,2):String(t),ov=(t,e)=>iv(e)?ov(t,e.value):oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Tu(r,i)+" =>"]=s,n),{})}:Di(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tu(n))}:wn(e)?Tu(e):Me(e)&&!ce(e)&&!tv(e)?String(e):e,Tu=(t,e="")=>{var n;return wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class av{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hh(t){return new av(t)}function aa(){return jt}function Rl(t,e=!1){jt&&jt.cleanups.push(t)}let je;const Iu=new WeakSet;class lv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Iu.has(this)&&(Iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hm(this),fv(this);const e=je,n=vn;je=this,vn=!0;try{return this.fn()}finally{hv(this),je=e,vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zh(e);this.deps=this.depsTail=void 0,hm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hf(this)&&this.run()}get dirty(){return hf(this)}}let cv=0,go,_o;function uv(t,e=!1){if(t.flags|=8,e){t.next=_o,_o=t;return}t.next=go,go=t}function qh(){cv++}function Wh(){if(--cv>0)return;if(_o){let e=_o;for(_o=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;go;){let e=go;for(go=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),zh(r),bI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function hf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Do))return;t.globalVersion=Do;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!hf(t)){t.flags&=-3;return}const n=je,r=vn;je=t,vn=!0;try{fv(t);const s=t.fn(t._value);(e.version===0||Fr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{je=n,vn=r,hv(t),t.flags&=-3}}function zh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)zh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vn=!0;const pv=[];function rs(){pv.push(vn),vn=!1}function ss(){const t=pv.pop();vn=t===void 0?!0:t}function hm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let Do=0;class TI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!je||!vn||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new TI(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,mv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=r)}return n}trigger(e){this.version++,Do++,this.notify(e)}notify(e){qh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wh()}}}function mv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)mv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Sl=new WeakMap,Es=Symbol(""),df=Symbol(""),Lo=Symbol("");function Ct(t,e,n){if(vn&&je){let r=Sl.get(t);r||Sl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gc),s.map=r,s.key=n),s.track()}}function Yn(t,e,n,r,s,i){const o=Sl.get(t);if(!o){Do++;return}const a=c=>{c&&c.trigger()};if(qh(),e==="clear")o.forEach(a);else{const c=ce(t),u=c&&jh(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===Lo||!wn(p)&&p>=f)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Lo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Es)),oi(t)&&a(o.get(df)));break;case"delete":c||(a(o.get(Es)),oi(t)&&a(o.get(df)));break;case"set":oi(t)&&a(o.get(Es));break}}Wh()}function II(t,e){const n=Sl.get(t);return n&&n.get(e)}function zs(t){const e=Re(t);return e===t?e:(Ct(e,"iterate",Lo),cn(t)?e:e.map(kt))}function _c(t){return Ct(t=Re(t),"iterate",Lo),t}const AI={__proto__:null,[Symbol.iterator](){return Au(this,Symbol.iterator,kt)},concat(...t){return zs(this).concat(...t.map(e=>ce(e)?zs(e):e))},entries(){return Au(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return zn(this,"find",t,e,kt,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ru(this,"includes",t)},indexOf(...t){return Ru(this,"indexOf",t)},join(t){return zs(this).join(t)},lastIndexOf(...t){return Ru(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return no(this,"pop")},push(...t){return no(this,"push",t)},reduce(t,...e){return dm(this,"reduce",t,e)},reduceRight(t,...e){return dm(this,"reduceRight",t,e)},shift(){return no(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return no(this,"splice",t)},toReversed(){return zs(this).toReversed()},toSorted(t){return zs(this).toSorted(t)},toSpliced(...t){return zs(this).toSpliced(...t)},unshift(...t){return no(this,"unshift",t)},values(){return Au(this,"values",kt)}};function Au(t,e,n){const r=_c(t),s=r[e]();return r!==t&&!cn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const RI=Array.prototype;function zn(t,e,n,r,s,i){const o=_c(t),a=o!==t&&!cn(t),c=o[e];if(c!==RI[e]){const d=c.apply(t,i);return a?kt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,kt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const f=c.call(o,u,r);return a&&s?s(f):f}function dm(t,e,n,r){const s=_c(t);let i=n;return s!==t&&(cn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,kt(a),c,t)}),s[e](i,...r)}function Ru(t,e,n){const r=Re(t);Ct(r,"iterate",Lo);const s=r[e](...n);return(s===-1||s===!1)&&Qh(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function no(t,e,n=[]){rs(),qh();const r=Re(t)[e].apply(t,n);return Wh(),ss(),r}const SI=Vh("__proto__,__v_isRef,__isVue"),gv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wn));function PI(t){wn(t)||(t=String(t));const e=Re(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class _v{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?FI:wv:i?Ev:vv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=AI[n]))return c;if(n==="hasOwnProperty")return PI}const a=Reflect.get(e,n,Je(e)?e:r);return(wn(n)?gv.has(n):SI(n))||(s||Ct(e,"get",n),i)?a:Je(a)?o&&jh(n)?a:a.value:Me(a)?s?bv(a):hr(a):a}}class yv extends _v{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=zr(i);if(!cn(r)&&!zr(r)&&(i=Re(i),r=Re(r)),!ce(e)&&Je(i)&&!Je(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&jh(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Je(e)?e:s);return e===Re(s)&&(o?Fr(r,i)&&Yn(e,"set",n,r):Yn(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wn(n)||!gv.has(n))&&Ct(e,"has",n),r}ownKeys(e){return Ct(e,"iterate",ce(e)?"length":Es),Reflect.ownKeys(e)}}class CI extends _v{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kI=new yv,OI=new CI,xI=new yv(!0);const pf=t=>t,Ua=t=>Reflect.getPrototypeOf(t);function NI(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=oi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?pf:e?mf:kt;return!e&&Ct(i,"iterate",c?df:Es),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function ja(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function DI(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(Fr(s,a)&&Ct(o,"get",s),Ct(o,"get",a));const{has:c}=Ua(o),u=e?pf:t?mf:kt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ct(Re(s),"iterate",Es),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(Fr(s,a)&&Ct(o,"has",s),Ct(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Re(a),u=e?pf:t?mf:kt;return!t&&Ct(c,"iterate",Es),a.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return ht(n,t?{add:ja("add"),set:ja("set"),delete:ja("delete"),clear:ja("clear")}:{add(s){!e&&!cn(s)&&!zr(s)&&(s=Re(s));const i=Re(this);return Ua(i).has.call(i,s)||(i.add(s),Yn(i,"add",s,s)),this},set(s,i){!e&&!cn(i)&&!zr(i)&&(i=Re(i));const o=Re(this),{has:a,get:c}=Ua(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Fr(i,f)&&Yn(o,"set",s,i):Yn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=Ua(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Yn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=NI(s,t,e)}),n}function Kh(t,e){const n=DI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const LI={get:Kh(!1,!1)},MI={get:Kh(!1,!0)},VI={get:Kh(!0,!1)};const vv=new WeakMap,Ev=new WeakMap,wv=new WeakMap,FI=new WeakMap;function UI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jI(t){return t.__v_skip||!Object.isExtensible(t)?0:UI(hI(t))}function hr(t){return zr(t)?t:Gh(t,!1,kI,LI,vv)}function er(t){return Gh(t,!1,xI,MI,Ev)}function bv(t){return Gh(t,!0,OI,VI,wv)}function Gh(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=jI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rr(t){return zr(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function Qh(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Yh(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&nv(t,"__v_skip",!0),t}const kt=t=>Me(t)?hr(t):t,mf=t=>Me(t)?bv(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Et(t){return Tv(t,!1)}function Mo(t){return Tv(t,!0)}function Tv(t,e){return Je(t)?t:new BI(t,e)}class BI{constructor(e,n){this.dep=new gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||cn(e)||zr(e);e=r?e:Re(e),Fr(e,n)&&(this._rawValue=e,this._value=r?e:kt(e),this.dep.trigger())}}function Qe(t){return Je(t)?t.value:t}const $I={get:(t,e,n)=>e==="__v_raw"?t:Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Iv(t){return rr(t)?t:new Proxy(t,$I)}class HI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new gc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function qI(t){return new HI(t)}function WI(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=Av(t,n);return e}class zI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return II(Re(this._object),this._key)}}class KI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function GI(t,e,n){return Je(t)?t:pe(t)?new KI(t):Me(t)&&arguments.length>1?Av(t,e,n):Et(t)}function Av(t,e,n){const r=t[e];return Je(r)?r:new zI(t,e,n)}class QI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Do-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return uv(this,!0),!0}get value(){const e=this.dep.track();return dv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function YI(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new QI(r,s,n)}const Ba={},Pl=new WeakMap;let gs;function XI(t,e=!1,n=gs){if(n){let r=Pl.get(n);r||Pl.set(n,r=[]),r.push(t)}}function JI(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=R=>s?R:cn(R)||s===!1||s===0?Xn(R,1):Xn(R);let f,d,p,g,w=!1,k=!1;if(Je(t)?(d=()=>t.value,w=cn(t)):rr(t)?(d=()=>u(t),w=!0):ce(t)?(k=!0,w=t.some(R=>rr(R)||cn(R)),d=()=>t.map(R=>{if(Je(R))return R.value;if(rr(R))return u(R);if(pe(R))return c?c(R,2):R()})):pe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){rs();try{p()}finally{ss()}}const R=gs;gs=f;try{return c?c(t,3,[g]):t(g)}finally{gs=R}}:d=Dn,e&&s){const R=d,D=s===!0?1/0:s;d=()=>Xn(R(),D)}const x=aa(),N=()=>{f.stop(),x&&x.active&&Uh(x.effects,f)};if(i&&e){const R=e;e=(...D)=>{R(...D),N()}}let P=k?new Array(t.length).fill(Ba):Ba;const y=R=>{if(!(!(f.flags&1)||!f.dirty&&!R))if(e){const D=f.run();if(s||w||(k?D.some((M,T)=>Fr(M,P[T])):Fr(D,P))){p&&p();const M=gs;gs=f;try{const T=[D,P===Ba?void 0:k&&P[0]===Ba?[]:P,g];c?c(e,3,T):e(...T),P=D}finally{gs=M}}}else f.run()};return a&&a(y),f=new lv(d),f.scheduler=o?()=>o(y,!1):y,g=R=>XI(R,!1,f),p=f.onStop=()=>{const R=Pl.get(f);if(R){if(c)c(R,4);else for(const D of R)D();Pl.delete(f)}},e?r?y(!0):P=f.run():o?o(y.bind(null,!0),!0):f.run(),N.pause=f.pause.bind(f),N.resume=f.resume.bind(f),N.stop=N,N}function Xn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Xn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Xn(t[r],e,n);else if(Di(t)||oi(t))t.forEach(r=>{Xn(r,e,n)});else if(tv(t)){for(const r in t)Xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function la(t,e,n,r){try{return r?t(...r):t()}catch(s){Mi(s,e,n)}}function bn(t,e,n,r){if(pe(t)){const s=la(t,e,n,r);return s&&Zy(s)&&s.catch(i=>{Mi(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(bn(t[i],e,n,r));return s}}function Mi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}a=a.parent}if(i){rs(),la(i,null,10,[t,c,u]),ss();return}}ZI(t,n,s,r,o)}function ZI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Bt=[];let Sn=-1;const ci=[];let Ar=null,Qs=0;const Rv=Promise.resolve();let Cl=null;function $n(t){const e=Cl||Rv;return t?e.then(this?t.bind(this):t):e}function eA(t){let e=Sn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,s=Bt[r],i=Vo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xh(t){if(!(t.flags&1)){const e=Vo(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=Vo(n)?Bt.push(t):Bt.splice(eA(e),0,t),t.flags|=1,Sv()}}function Sv(){Cl||(Cl=Rv.then(Pv))}function gf(t){ce(t)?ci.push(...t):Ar&&t.id===-1?Ar.splice(Qs+1,0,t):t.flags&1||(ci.push(t),t.flags|=1),Sv()}function pm(t,e,n=Sn+1){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function kl(t){if(ci.length){const e=[...new Set(ci)].sort((n,r)=>Vo(n)-Vo(r));if(ci.length=0,Ar){Ar.push(...e);return}for(Ar=e,Qs=0;Qs<Ar.length;Qs++){const n=Ar[Qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Qs=0}}const Vo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pv(t){try{for(Sn=0;Sn<Bt.length;Sn++){const e=Bt[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),la(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<Bt.length;Sn++){const e=Bt[Sn];e&&(e.flags&=-2)}Sn=-1,Bt.length=0,kl(),Cl=null,(Bt.length||ci.length)&&Pv()}}let at=null,Cv=null;function Ol(t){const e=at;return at=t,Cv=t&&t.type.__scopeId||null,e}function Pn(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rm(-1);const i=Ol(e);let o;try{o=t(...s)}finally{Ol(i),r._d&&Rm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function c9(t,e){if(at===null)return t;const n=Tc(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Fe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Cn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(rs(),bn(c,n,8,[t.el,a,t,e]),ss())}}const tA=Symbol("_vte"),kv=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),$a=Symbol("_enterCb");function nA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vc(()=>{t.isMounted=!0}),ua(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Ov={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},xv=t=>{const e=t.subTree;return e.component?xv(e.component):e},rA={name:"BaseTransition",props:Ov,setup(t,{slots:e}){const n=bc(),r=nA();return()=>{const s=e.default&&Lv(e.default(),!0);if(!s||!s.length)return;const i=Nv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return Su(i);const c=mm(i);if(!c)return Su(i);let u=_f(c,o,r,n,d=>u=d);c.type!==st&&yi(c,u);let f=n.subTree&&mm(n.subTree);if(f&&f.type!==st&&!_n(c,f)&&xv(n).type!==st){let d=_f(f,o,r,n);if(yi(f,d),a==="out-in"&&c.type!==st)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},Su(i);a==="in-out"&&c.type!==st?d.delayLeave=(p,g,w)=>{const k=Dv(r,f);k[String(f.key)]=f,p[Rr]=()=>{g(),p[Rr]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Nv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==st){e=n;break}}return e}const sA=rA;function Dv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _f(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:w,onLeaveCancelled:k,onBeforeAppear:x,onAppear:N,onAfterAppear:P,onAppearCancelled:y}=e,R=String(t.key),D=Dv(n,t),M=(_,b)=>{_&&bn(_,r,9,b)},T=(_,b)=>{const C=b[1];M(_,b),ce(_)?_.every(S=>S.length<=1)&&C():_.length<=1&&C()},v={mode:o,persisted:a,beforeEnter(_){let b=c;if(!n.isMounted)if(i)b=x||c;else return;_[Rr]&&_[Rr](!0);const C=D[R];C&&_n(t,C)&&C.el[Rr]&&C.el[Rr](),M(b,[_])},enter(_){let b=u,C=f,S=d;if(!n.isMounted)if(i)b=N||u,C=P||f,S=y||d;else return;let I=!1;const ge=_[$a]=Ee=>{I||(I=!0,Ee?M(S,[_]):M(C,[_]),v.delayedLeave&&v.delayedLeave(),_[$a]=void 0)};b?T(b,[_,ge]):ge()},leave(_,b){const C=String(t.key);if(_[$a]&&_[$a](!0),n.isUnmounting)return b();M(p,[_]);let S=!1;const I=_[Rr]=ge=>{S||(S=!0,b(),ge?M(k,[_]):M(w,[_]),_[Rr]=void 0,D[C]===t&&delete D[C])};D[C]=t,g?T(g,[_,I]):I()},clone(_){const b=_f(_,e,n,r,s);return s&&s(b),b}};return v}function Su(t){if(ca(t))return t=ir(t),t.children=null,t}function mm(t){if(!ca(t))return kv(t.type)&&t.children?Nv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function yi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Lv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(Lv(o.children,e,a))):(e||o.type!==st)&&r.push(a!=null?ir(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function An(t,e){return pe(t)?ht({name:t.name},e,{setup:t}):t}function Jh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fo(t,e,n,r,s=!1){if(ce(t)){t.forEach((w,k)=>Fo(w,e&&(ce(e)?e[k]:e),n,r,s));return}if(Ur(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Tc(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===Fe?a.refs={}:a.refs,d=a.setupState,p=Re(d),g=d===Fe?()=>!1:w=>xe(p,w);if(u!=null&&u!==c&&(We(u)?(f[u]=null,g(u)&&(d[u]=null)):Je(u)&&(u.value=null)),pe(c))la(c,a,12,[o,f]);else{const w=We(c),k=Je(c);if(w||k){const x=()=>{if(t.f){const N=w?g(c)?d[c]:f[c]:c.value;s?ce(N)&&Uh(N,i):ce(N)?N.includes(i)||N.push(i):w?(f[c]=[i],g(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else w?(f[c]=o,g(c)&&(d[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,gt(x,n)):x()}}}let gm=!1;const Ks=()=>{gm||(console.error("Hydration completed but contains mismatches."),gm=!0)},iA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",oA=t=>t.namespaceURI.includes("MathML"),Ha=t=>{if(t.nodeType===1){if(iA(t))return"svg";if(oA(t))return"mathml"}},ti=t=>t.nodeType===8;function aA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,f=(y,R)=>{if(!R.hasChildNodes()){n(null,y,R),kl(),R._vnode=y;return}d(R.firstChild,y,null,null,null),kl(),R._vnode=y},d=(y,R,D,M,T,v=!1)=>{v=v||!!R.dynamicChildren;const _=ti(y)&&y.data==="[",b=()=>k(y,R,D,M,T,_),{type:C,ref:S,shapeFlag:I,patchFlag:ge}=R;let Ee=y.nodeType;R.el=y,ge===-2&&(v=!1,R.dynamicChildren=null);let Z=null;switch(C){case Ts:Ee!==3?R.children===""?(c(R.el=s(""),o(y),y),Z=y):Z=b():(y.data!==R.children&&(Ks(),y.data=R.children),Z=i(y));break;case st:P(y)?(Z=i(y),N(R.el=y.content.firstChild,y,D)):Ee!==8||_?Z=b():Z=i(y);break;case vo:if(_&&(y=i(y),Ee=y.nodeType),Ee===1||Ee===3){Z=y;const se=!R.children.length;for(let ne=0;ne<R.staticCount;ne++)se&&(R.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===R.staticCount-1&&(R.anchor=Z),Z=i(Z);return _?i(Z):Z}else b();break;case Ot:_?Z=w(y,R,D,M,T,v):Z=b();break;default:if(I&1)(Ee!==1||R.type.toLowerCase()!==y.tagName.toLowerCase())&&!P(y)?Z=b():Z=p(y,R,D,M,T,v);else if(I&6){R.slotScopeIds=T;const se=o(y);if(_?Z=x(y):ti(y)&&y.data==="teleport start"?Z=x(y,y.data,"teleport end"):Z=i(y),e(R,se,null,D,M,Ha(se),v),Ur(R)&&!R.type.__asyncResolved){let ne;_?(ne=be(Ot),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=y.nodeType===3?an(""):be("div"),ne.el=y,R.component.subTree=ne}}else I&64?Ee!==8?Z=b():Z=R.type.hydrate(y,R,D,M,T,v,t,g):I&128&&(Z=R.type.hydrate(y,R,D,M,Ha(o(y)),T,v,t,d))}return S!=null&&Fo(S,null,M,R),Z},p=(y,R,D,M,T,v)=>{v=v||!!R.dynamicChildren;const{type:_,props:b,patchFlag:C,shapeFlag:S,dirs:I,transition:ge}=R,Ee=_==="input"||_==="option";if(Ee||C!==-1){I&&Cn(R,null,D,"created");let Z=!1;if(P(y)){Z=iE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=y.content.firstChild;Z&&ge.beforeEnter(ne),N(ne,y,D),R.el=y=ne}if(S&16&&!(b&&(b.innerHTML||b.textContent))){let ne=g(y.firstChild,R,y,D,M,T,v);for(;ne;){qa(y,1)||Ks();const ze=ne;ne=ne.nextSibling,a(ze)}}else if(S&8){let ne=R.children;ne[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(ne=ne.slice(1)),y.textContent!==ne&&(qa(y,0)||Ks(),y.textContent=R.children)}if(b){if(Ee||!v||C&48){const ne=y.tagName.includes("-");for(const ze in b)(Ee&&(ze.endsWith("value")||ze==="indeterminate")||sa(ze)&&!ai(ze)||ze[0]==="."||ne)&&r(y,ze,null,b[ze],void 0,D)}else if(b.onClick)r(y,"onClick",null,b.onClick,void 0,D);else if(C&4&&rr(b.style))for(const ne in b.style)b.style[ne]}let se;(se=b&&b.onVnodeBeforeMount)&&Wt(se,D,R),I&&Cn(R,null,D,"beforeMount"),((se=b&&b.onVnodeMounted)||I||Z)&&fE(()=>{se&&Wt(se,D,R),Z&&ge.enter(y),I&&Cn(R,null,D,"mounted")},M)}return y.nextSibling},g=(y,R,D,M,T,v,_)=>{_=_||!!R.dynamicChildren;const b=R.children,C=b.length;for(let S=0;S<C;S++){const I=_?b[S]:b[S]=Yt(b[S]),ge=I.type===Ts;y?(ge&&!_&&S+1<C&&Yt(b[S+1]).type===Ts&&(c(s(y.data.slice(I.children.length)),D,i(y)),y.data=I.children),y=d(y,I,M,T,v,_)):ge&&!I.children?c(I.el=s(""),D):(qa(D,1)||Ks(),n(null,I,D,null,M,T,Ha(D),v))}return y},w=(y,R,D,M,T,v)=>{const{slotScopeIds:_}=R;_&&(T=T?T.concat(_):_);const b=o(y),C=g(i(y),R,b,D,M,T,v);return C&&ti(C)&&C.data==="]"?i(R.anchor=C):(Ks(),c(R.anchor=u("]"),b,C),C)},k=(y,R,D,M,T,v)=>{if(qa(y.parentElement,1)||Ks(),R.el=null,v){const C=x(y);for(;;){const S=i(y);if(S&&S!==C)a(S);else break}}const _=i(y),b=o(y);return a(y),n(null,R,b,_,D,M,Ha(b),T),D&&(D.vnode.el=R.el,wc(D,R.el)),_},x=(y,R="[",D="]")=>{let M=0;for(;y;)if(y=i(y),y&&ti(y)&&(y.data===R&&M++,y.data===D)){if(M===0)return i(y);M--}return y},N=(y,R,D)=>{const M=R.parentNode;M&&M.replaceChild(y,R);let T=D;for(;T;)T.vnode.el===R&&(T.vnode.el=T.subTree.el=y),T=T.parent},P=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[f,d]}const _m="data-allow-mismatch",lA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function qa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(_m);)t=t.parentElement;const n=t&&t.getAttribute(_m);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(lA[e])}}pc().requestIdleCallback;pc().cancelIdleCallback;function cA(t,e){if(ti(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ti(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Ur=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function uA(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,f,d=0;const p=()=>(d++,u=null,g()),g=()=>{let w;return u||(w=u=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),c)return new Promise((x,N)=>{c(k,()=>x(p()),()=>N(k),d+1)});throw k}).then(k=>w!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),f=k,k)))};return An({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(w,k,x){const N=i?()=>{const P=i(x,y=>cA(w,y));P&&(k.bum||(k.bum=[])).push(P)}:x;f?N():g().then(()=>!k.isUnmounted&&N())},get __asyncResolved(){return f},setup(){const w=it;if(Jh(w),f)return()=>Pu(f,w);const k=y=>{u=null,Mi(y,w,13,!r)};if(a&&w.suspense||Ei)return g().then(y=>()=>Pu(y,w)).catch(y=>(k(y),()=>r?be(r,{error:y}):null));const x=Et(!1),N=Et(),P=Et(!!s);return s&&setTimeout(()=>{P.value=!1},s),o!=null&&setTimeout(()=>{if(!x.value&&!N.value){const y=new Error(`Async component timed out after ${o}ms.`);k(y),N.value=y}},o),g().then(()=>{x.value=!0,w.parent&&ca(w.parent.vnode)&&w.parent.update()}).catch(y=>{k(y),N.value=y}),()=>{if(x.value&&f)return Pu(f,w);if(N.value&&r)return be(r,{error:N.value});if(n&&!P.value)return be(n)}}})}function Pu(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=be(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ca=t=>t.type.__isKeepAlive,fA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=bc(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:d}}}=r,p=d("div");r.activate=(P,y,R,D,M)=>{const T=P.component;u(P,y,R,0,a),c(T.vnode,P,y,R,T,a,D,P.slotScopeIds,M),gt(()=>{T.isDeactivated=!1,T.a&&li(T.a);const v=P.props&&P.props.onVnodeMounted;v&&Wt(v,T.parent,P)},a)},r.deactivate=P=>{const y=P.component;Nl(y.m),Nl(y.a),u(P,p,null,1,a),gt(()=>{y.da&&li(y.da);const R=P.props&&P.props.onVnodeUnmounted;R&&Wt(R,y.parent,P),y.isDeactivated=!0},a)};function g(P){Cu(P),f(P,n,a,!0)}function w(P){s.forEach((y,R)=>{const D=Af(y.type);D&&!P(D)&&k(R)})}function k(P){const y=s.get(P);y&&(!o||!_n(y,o))?g(y):o&&Cu(o),s.delete(P),i.delete(P)}En(()=>[t.include,t.exclude],([P,y])=>{P&&w(R=>oo(P,R)),y&&w(R=>!oo(y,R))},{flush:"post",deep:!0});let x=null;const N=()=>{x!=null&&(Dl(n.subTree.type)?gt(()=>{s.set(x,Wa(n.subTree))},n.subTree.suspense):s.set(x,Wa(n.subTree)))};return vc(N),Uv(N),ua(()=>{s.forEach(P=>{const{subTree:y,suspense:R}=n,D=Wa(y);if(P.type===D.type&&P.key===D.key){Cu(D);const M=D.component.da;M&&gt(M,R);return}g(P)})}),()=>{if(x=null,!e.default)return o=null;const P=e.default(),y=P[0];if(P.length>1)return o=null,P;if(!As(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let R=Wa(y);if(R.type===st)return o=null,R;const D=R.type,M=Af(Ur(R)?R.type.__asyncResolved||{}:D),{include:T,exclude:v,max:_}=t;if(T&&(!M||!oo(T,M))||v&&M&&oo(v,M))return R.shapeFlag&=-257,o=R,y;const b=R.key==null?D:R.key,C=s.get(b);return R.el&&(R=ir(R),y.shapeFlag&128&&(y.ssContent=R)),x=b,C?(R.el=C.el,R.component=C.component,R.transition&&yi(R,R.transition),R.shapeFlag|=512,i.delete(b),i.add(b)):(i.add(b),_&&i.size>parseInt(_,10)&&k(i.values().next().value)),R.shapeFlag|=256,o=R,Dl(y.type)?y:R}}},hA=fA;function oo(t,e){return ce(t)?t.some(n=>oo(n,e)):We(t)?t.split(",").includes(e):fI(t)?(t.lastIndex=0,t.test(e)):!1}function Mv(t,e){Fv(t,"a",e)}function Vv(t,e){Fv(t,"da",e)}function Fv(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(yc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ca(s.parent.vnode)&&dA(r,e,n,s),s=s.parent}}function dA(t,e,n,r){const s=yc(e,t,r,!0);jv(()=>{Uh(r[e],s)},n)}function Cu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Wa(t){return t.shapeFlag&128?t.ssContent:t}function yc(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{rs();const a=fa(n),c=bn(e,n,t,o);return a(),ss(),c});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=it)=>{(!Ei||t==="sp")&&yc(t,(...r)=>e(...r),n)},pA=dr("bm"),vc=dr("m"),mA=dr("bu"),Uv=dr("u"),ua=dr("bum"),jv=dr("um"),gA=dr("sp"),_A=dr("rtg"),yA=dr("rtc");function Bv(t,e=it){yc("ec",t,e)}const $v="components";function Uo(t,e){return qv($v,t,!0,e)||t}const Hv=Symbol.for("v-ndc");function vA(t){return We(t)?qv($v,t,!1)||t:t||Hv}function qv(t,e,n=!0,r=!1){const s=at||it;if(s){const i=s.type;{const a=Af(i,!1);if(a&&(a===e||a===hn(e)||a===dc(hn(e))))return i}const o=ym(s[t]||i[t],e)||ym(s.appContext[t],e);return!o&&r?i:o}}function ym(t,e){return t&&(t[e]||t[hn(e)]||t[dc(hn(e))])}function u9(t,e,n,r){let s;const i=n,o=ce(t);if(o||We(t)){const a=o&&rr(t);let c=!1;a&&(c=!cn(t),t=_c(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?kt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const f=a[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function f9(t,e,n={},r,s){if(at.ce||at.parent&&Ur(at.parent)&&at.parent.ce)return $t(),Jn(Ot,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),$t();const o=i&&Wv(i(n)),a=n.key||o&&o.key,c=Jn(Ot,{key:(a&&!wn(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Wv(t){return t.some(e=>As(e)?!(e.type===st||e.type===Ot&&!Wv(e.children)):!0)?t:null}const yf=t=>t?gE(t)?Tc(t):yf(t.parent):null,yo=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yf(t.parent),$root:t=>yf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Kv(t),$forceUpdate:t=>t.f||(t.f=()=>{Xh(t.update)}),$nextTick:t=>t.n||(t.n=$n.bind(t.proxy)),$watch:t=>jA.bind(t)}),ku=(t,e)=>t!==Fe&&!t.__isScriptSetup&&xe(t,e),EA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ku(r,e))return o[e]=1,r[e];if(s!==Fe&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==Fe&&xe(n,e))return o[e]=4,n[e];vf&&(o[e]=0)}}const f=yo[e];let d,p;if(f)return e==="$attrs"&&Ct(t.attrs,"get",""),f(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Fe&&xe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ku(s,e)?(s[e]=n,!0):r!==Fe&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&xe(t,o)||ku(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(yo,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vf=!0;function wA(t){const e=Kv(t),n=t.proxy,r=t.ctx;vf=!1,e.beforeCreate&&Em(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:k,deactivated:x,beforeDestroy:N,beforeUnmount:P,destroyed:y,unmounted:R,render:D,renderTracked:M,renderTriggered:T,errorCaptured:v,serverPrefetch:_,expose:b,inheritAttrs:C,components:S,directives:I,filters:ge}=e;if(u&&bA(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Me(se)&&(t.data=hr(se))}if(vf=!0,i)for(const se in i){const ne=i[se],ze=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Dn,dn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Dn,tn=Ue({get:ze,set:dn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const se in a)zv(a[se],r,n,se);if(c){const se=pe(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ne=>{bs(ne,se[ne])})}f&&Em(f,t,"c");function Z(se,ne){ce(ne)?ne.forEach(ze=>se(ze.bind(n))):ne&&se(ne.bind(n))}if(Z(pA,d),Z(vc,p),Z(mA,g),Z(Uv,w),Z(Mv,k),Z(Vv,x),Z(Bv,v),Z(yA,M),Z(_A,T),Z(ua,P),Z(jv,R),Z(gA,_),ce(b))if(b.length){const se=t.exposed||(t.exposed={});b.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:ze=>n[ne]=ze})})}else t.exposed||(t.exposed={});D&&t.render===Dn&&(t.render=D),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),I&&(t.directives=I),_&&Jh(t)}function bA(t,e,n=Dn){ce(t)&&(t=Ef(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Nt(s.from||r,s.default,!0):i=Nt(s.from||r):i=Nt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Em(t,e,n){bn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zv(t,e,n,r){let s=r.includes(".")?lE(n,r):()=>n[r];if(We(t)){const i=e[t];pe(i)&&En(s,i)}else if(pe(t))En(s,t.bind(n));else if(Me(t))if(ce(t))t.forEach(i=>zv(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&En(s,i,t)}}function Kv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>xl(c,u,o,!0)),xl(c,e,o)),Me(e)&&i.set(e,c),c}function xl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xl(t,i,n,!0),s&&s.forEach(o=>xl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=TA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TA={data:wm,props:bm,emits:bm,methods:ao,computed:ao,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:ao,directives:ao,watch:AA,provide:wm,inject:IA};function wm(t,e){return e?t?function(){return ht(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function IA(t,e){return ao(Ef(t),Ef(e))}function Ef(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function ao(t,e){return t?ht(Object.create(null),t,e):e}function bm(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ht(Object.create(null),vm(t),vm(e??{})):e}function AA(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function Gv(){return{app:null,config:{isNativeTag:cI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RA=0;function SA(t,e){return function(r,s=null){pe(r)||(r=ht({},r)),s!=null&&!Me(s)&&(s=null);const i=Gv(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:RA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yE,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...d)):pe(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,p){if(!c){const g=u._ceVNode||be(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,f):t(g,f,p),c=!0,u._container=f,f.__vue_app__=u,Tc(g.component)}},onUnmount(f){a.push(f)},unmount(){c&&(bn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=ws;ws=u;try{return f()}finally{ws=d}}};return u}}let ws=null;function bs(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=it||at;if(r||ws){const s=ws?ws._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Zh(){return!!(it||at||ws)}const Qv={},Yv=()=>Object.create(Qv),Xv=t=>Object.getPrototypeOf(t)===Qv;function PA(t,e,n,r=!1){const s={},i=Yv();t.propsDefaults=Object.create(null),Jv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:er(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function CA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Ec(t.emitsOptions,p))continue;const g=e[p];if(c)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const w=hn(p);s[w]=wf(c,a,w,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Jv(t,e,s,i)&&(u=!0);let f;for(const d in a)(!e||!xe(e,d)&&((f=Ds(d))===d||!xe(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=wf(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&Yn(t.attrs,"set","")}function Jv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ai(c))continue;const u=e[c];let f;s&&xe(s,f=hn(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Ec(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Re(n),u=a||Fe;for(let f=0;f<i.length;f++){const d=i[f];n[d]=wf(s,c,d,u[d],t,!xe(u,d))}}return o}function wf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=fa(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ds(n))&&(r=!0))}return r}const kA=new WeakMap;function Zv(t,e,n=!1){const r=n?kA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const f=d=>{c=!0;const[p,g]=Zv(d,e,!0);ht(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Me(t)&&r.set(t,ii),ii;if(ce(i))for(let f=0;f<i.length;f++){const d=hn(i[f]);Tm(d)&&(o[d]=Fe)}else if(i)for(const f in i){const d=hn(f);if(Tm(d)){const p=i[f],g=o[d]=ce(p)||pe(p)?{type:p}:ht({},p),w=g.type;let k=!1,x=!0;if(ce(w))for(let N=0;N<w.length;++N){const P=w[N],y=pe(P)&&P.name;if(y==="Boolean"){k=!0;break}else y==="String"&&(x=!1)}else k=pe(w)&&w.name==="Boolean";g[0]=k,g[1]=x,(k||xe(g,"default"))&&a.push(d)}}const u=[o,a];return Me(t)&&r.set(t,u),u}function Tm(t){return t[0]!=="$"&&!ai(t)}const eE=t=>t[0]==="_"||t==="$stable",ed=t=>ce(t)?t.map(Yt):[Yt(t)],OA=(t,e,n)=>{if(e._n)return e;const r=Pn((...s)=>ed(e(...s)),n);return r._c=!1,r},tE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eE(s))continue;const i=t[s];if(pe(i))e[s]=OA(s,i,r);else if(i!=null){const o=ed(i);e[s]=()=>o}}},nE=(t,e)=>{const n=ed(e);t.slots.default=()=>n},rE=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},xA=(t,e,n)=>{const r=t.slots=Yv();if(t.vnode.shapeFlag&32){const s=e._;s?(rE(r,e,n),n&&nv(r,"_",s,!0)):tE(e,r)}else e&&nE(t,e)},NA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:rE(s,e,n):(i=!e.$stable,tE(e,s)),o=e}else e&&(nE(t,e),o={default:1});if(i)for(const a in s)!eE(a)&&o[a]==null&&delete s[a]},gt=fE;function DA(t){return sE(t)}function LA(t){return sE(t,aA)}function sE(t,e){const n=pc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Dn,insertStaticContent:w}=t,k=(A,O,V,$=null,U=null,q=null,Y=void 0,G=null,K=!!O.dynamicChildren)=>{if(A===O)return;A&&!_n(A,O)&&($=j(A),Ke(A,U,q,!0),A=null),O.patchFlag===-2&&(K=!1,O.dynamicChildren=null);const{type:W,ref:ue,shapeFlag:J}=O;switch(W){case Ts:x(A,O,V,$);break;case st:N(A,O,V,$);break;case vo:A==null&&P(O,V,$,Y);break;case Ot:S(A,O,V,$,U,q,Y,G,K);break;default:J&1?D(A,O,V,$,U,q,Y,G,K):J&6?I(A,O,V,$,U,q,Y,G,K):(J&64||J&128)&&W.process(A,O,V,$,U,q,Y,G,K,re)}ue!=null&&U&&Fo(ue,A&&A.ref,q,O||A,!O)},x=(A,O,V,$)=>{if(A==null)r(O.el=a(O.children),V,$);else{const U=O.el=A.el;O.children!==A.children&&u(U,O.children)}},N=(A,O,V,$)=>{A==null?r(O.el=c(O.children||""),V,$):O.el=A.el},P=(A,O,V,$)=>{[A.el,A.anchor]=w(A.children,O,V,$,A.el,A.anchor)},y=({el:A,anchor:O},V,$)=>{let U;for(;A&&A!==O;)U=p(A),r(A,V,$),A=U;r(O,V,$)},R=({el:A,anchor:O})=>{let V;for(;A&&A!==O;)V=p(A),s(A),A=V;s(O)},D=(A,O,V,$,U,q,Y,G,K)=>{O.type==="svg"?Y="svg":O.type==="math"&&(Y="mathml"),A==null?M(O,V,$,U,q,Y,G,K):_(A,O,U,q,Y,G,K)},M=(A,O,V,$,U,q,Y,G)=>{let K,W;const{props:ue,shapeFlag:J,transition:oe,dirs:ie}=A;if(K=A.el=o(A.type,q,ue&&ue.is,ue),J&8?f(K,A.children):J&16&&v(A.children,K,null,$,U,Ou(A,q),Y,G),ie&&Cn(A,null,$,"created"),T(K,A,A.scopeId,Y,$),ue){for(const Ce in ue)Ce!=="value"&&!ai(Ce)&&i(K,Ce,null,ue[Ce],q,$);"value"in ue&&i(K,"value",null,ue.value,q),(W=ue.onVnodeBeforeMount)&&Wt(W,$,A)}ie&&Cn(A,null,$,"beforeMount");const he=iE(U,oe);he&&oe.beforeEnter(K),r(K,O,V),((W=ue&&ue.onVnodeMounted)||he||ie)&&gt(()=>{W&&Wt(W,$,A),he&&oe.enter(K),ie&&Cn(A,null,$,"mounted")},U)},T=(A,O,V,$,U)=>{if(V&&g(A,V),$)for(let q=0;q<$.length;q++)g(A,$[q]);if(U){let q=U.subTree;if(O===q||Dl(q.type)&&(q.ssContent===O||q.ssFallback===O)){const Y=U.vnode;T(A,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},v=(A,O,V,$,U,q,Y,G,K=0)=>{for(let W=K;W<A.length;W++){const ue=A[W]=G?Sr(A[W]):Yt(A[W]);k(null,ue,O,V,$,U,q,Y,G)}},_=(A,O,V,$,U,q,Y)=>{const G=O.el=A.el;let{patchFlag:K,dynamicChildren:W,dirs:ue}=O;K|=A.patchFlag&16;const J=A.props||Fe,oe=O.props||Fe;let ie;if(V&&hs(V,!1),(ie=oe.onVnodeBeforeUpdate)&&Wt(ie,V,O,A),ue&&Cn(O,A,V,"beforeUpdate"),V&&hs(V,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&f(G,""),W?b(A.dynamicChildren,W,G,V,$,Ou(O,U),q):Y||ne(A,O,G,null,V,$,Ou(O,U),q,!1),K>0){if(K&16)C(G,J,oe,V,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const he=O.dynamicProps;for(let Ce=0;Ce<he.length;Ce++){const Se=he[Ce],Tt=J[Se],ut=oe[Se];(ut!==Tt||Se==="value")&&i(G,Se,Tt,ut,U,V)}}K&1&&A.children!==O.children&&f(G,O.children)}else!Y&&W==null&&C(G,J,oe,V,U);((ie=oe.onVnodeUpdated)||ue)&&gt(()=>{ie&&Wt(ie,V,O,A),ue&&Cn(O,A,V,"updated")},$)},b=(A,O,V,$,U,q,Y)=>{for(let G=0;G<O.length;G++){const K=A[G],W=O[G],ue=K.el&&(K.type===Ot||!_n(K,W)||K.shapeFlag&70)?d(K.el):V;k(K,W,ue,null,$,U,q,Y,!0)}},C=(A,O,V,$,U)=>{if(O!==V){if(O!==Fe)for(const q in O)!ai(q)&&!(q in V)&&i(A,q,O[q],null,U,$);for(const q in V){if(ai(q))continue;const Y=V[q],G=O[q];Y!==G&&q!=="value"&&i(A,q,G,Y,U,$)}"value"in V&&i(A,"value",O.value,V.value,U)}},S=(A,O,V,$,U,q,Y,G,K)=>{const W=O.el=A?A.el:a(""),ue=O.anchor=A?A.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=O;ie&&(G=G?G.concat(ie):ie),A==null?(r(W,V,$),r(ue,V,$),v(O.children||[],V,ue,U,q,Y,G,K)):J>0&&J&64&&oe&&A.dynamicChildren?(b(A.dynamicChildren,oe,V,U,q,Y,G),(O.key!=null||U&&O===U.subTree)&&oE(A,O,!0)):ne(A,O,V,ue,U,q,Y,G,K)},I=(A,O,V,$,U,q,Y,G,K)=>{O.slotScopeIds=G,A==null?O.shapeFlag&512?U.ctx.activate(O,V,$,Y,K):ge(O,V,$,U,q,Y,K):Ee(A,O,K)},ge=(A,O,V,$,U,q,Y)=>{const G=A.component=sR(A,$,U);if(ca(A)&&(G.ctx.renderer=re),iR(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,Z,Y),!A.el){const K=G.subTree=be(st);N(null,K,O,V)}}else Z(G,A,O,V,U,q,Y)},Ee=(A,O,V)=>{const $=O.component=A.component;if(zA(A,O,V))if($.asyncDep&&!$.asyncResolved){se($,O,V);return}else $.next=O,$.update();else O.el=A.el,$.vnode=O},Z=(A,O,V,$,U,q,Y)=>{const G=()=>{if(A.isMounted){let{next:J,bu:oe,u:ie,parent:he,vnode:Ce}=A;{const It=aE(A);if(It){J&&(J.el=Ce.el,se(A,J,Y)),It.asyncDep.then(()=>{A.isUnmounted||G()});return}}let Se=J,Tt;hs(A,!1),J?(J.el=Ce.el,se(A,J,Y)):J=Ce,oe&&li(oe),(Tt=J.props&&J.props.onVnodeBeforeUpdate)&&Wt(Tt,he,J,Ce),hs(A,!0);const ut=xu(A),dt=A.subTree;A.subTree=ut,k(dt,ut,d(dt.el),j(dt),A,U,q),J.el=ut.el,Se===null&&wc(A,ut.el),ie&&gt(ie,U),(Tt=J.props&&J.props.onVnodeUpdated)&&gt(()=>Wt(Tt,he,J,Ce),U)}else{let J;const{el:oe,props:ie}=O,{bm:he,m:Ce,parent:Se,root:Tt,type:ut}=A,dt=Ur(O);if(hs(A,!1),he&&li(he),!dt&&(J=ie&&ie.onVnodeBeforeMount)&&Wt(J,Se,O),hs(A,!0),oe&&Le){const It=()=>{A.subTree=xu(A),Le(oe,A.subTree,A,U,null)};dt&&ut.__asyncHydrate?ut.__asyncHydrate(oe,A,It):It()}else{Tt.ce&&Tt.ce._injectChildStyle(ut);const It=A.subTree=xu(A);k(null,It,V,$,A,U,q),O.el=It.el}if(Ce&&gt(Ce,U),!dt&&(J=ie&&ie.onVnodeMounted)){const It=O;gt(()=>Wt(J,Se,It),U)}(O.shapeFlag&256||Se&&Ur(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&gt(A.a,U),A.isMounted=!0,O=V=$=null}};A.scope.on();const K=A.effect=new lv(G);A.scope.off();const W=A.update=K.run.bind(K),ue=A.job=K.runIfDirty.bind(K);ue.i=A,ue.id=A.uid,K.scheduler=()=>Xh(ue),hs(A,!0),W()},se=(A,O,V)=>{O.component=A;const $=A.vnode.props;A.vnode=O,A.next=null,CA(A,O.props,$,V),NA(A,O.children,V),rs(),pm(A),ss()},ne=(A,O,V,$,U,q,Y,G,K=!1)=>{const W=A&&A.children,ue=A?A.shapeFlag:0,J=O.children,{patchFlag:oe,shapeFlag:ie}=O;if(oe>0){if(oe&128){dn(W,J,V,$,U,q,Y,G,K);return}else if(oe&256){ze(W,J,V,$,U,q,Y,G,K);return}}ie&8?(ue&16&&Ht(W,U,q),J!==W&&f(V,J)):ue&16?ie&16?dn(W,J,V,$,U,q,Y,G,K):Ht(W,U,q,!0):(ue&8&&f(V,""),ie&16&&v(J,V,$,U,q,Y,G,K))},ze=(A,O,V,$,U,q,Y,G,K)=>{A=A||ii,O=O||ii;const W=A.length,ue=O.length,J=Math.min(W,ue);let oe;for(oe=0;oe<J;oe++){const ie=O[oe]=K?Sr(O[oe]):Yt(O[oe]);k(A[oe],ie,V,null,U,q,Y,G,K)}W>ue?Ht(A,U,q,!0,!1,J):v(O,V,$,U,q,Y,G,K,J)},dn=(A,O,V,$,U,q,Y,G,K)=>{let W=0;const ue=O.length;let J=A.length-1,oe=ue-1;for(;W<=J&&W<=oe;){const ie=A[W],he=O[W]=K?Sr(O[W]):Yt(O[W]);if(_n(ie,he))k(ie,he,V,null,U,q,Y,G,K);else break;W++}for(;W<=J&&W<=oe;){const ie=A[J],he=O[oe]=K?Sr(O[oe]):Yt(O[oe]);if(_n(ie,he))k(ie,he,V,null,U,q,Y,G,K);else break;J--,oe--}if(W>J){if(W<=oe){const ie=oe+1,he=ie<ue?O[ie].el:$;for(;W<=oe;)k(null,O[W]=K?Sr(O[W]):Yt(O[W]),V,he,U,q,Y,G,K),W++}}else if(W>oe)for(;W<=J;)Ke(A[W],U,q,!0),W++;else{const ie=W,he=W,Ce=new Map;for(W=he;W<=oe;W++){const Mt=O[W]=K?Sr(O[W]):Yt(O[W]);Mt.key!=null&&Ce.set(Mt.key,W)}let Se,Tt=0;const ut=oe-he+1;let dt=!1,It=0;const _r=new Array(ut);for(W=0;W<ut;W++)_r[W]=0;for(W=ie;W<=J;W++){const Mt=A[W];if(Tt>=ut){Ke(Mt,U,q,!0);continue}let nn;if(Mt.key!=null)nn=Ce.get(Mt.key);else for(Se=he;Se<=oe;Se++)if(_r[Se-he]===0&&_n(Mt,O[Se])){nn=Se;break}nn===void 0?Ke(Mt,U,q,!0):(_r[nn-he]=W+1,nn>=It?It=nn:dt=!0,k(Mt,O[nn],V,null,U,q,Y,G,K),Tt++)}const js=dt?MA(_r):ii;for(Se=js.length-1,W=ut-1;W>=0;W--){const Mt=he+W,nn=O[Mt],Bs=Mt+1<ue?O[Mt+1].el:$;_r[W]===0?k(null,nn,V,Bs,U,q,Y,G,K):dt&&(Se<0||W!==js[Se]?tn(nn,V,Bs,2):Se--)}}},tn=(A,O,V,$,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:W}=A;if(W&6){tn(A.component.subTree,O,V,$);return}if(W&128){A.suspense.move(O,V,$);return}if(W&64){Y.move(A,O,V,re);return}if(Y===Ot){r(q,O,V);for(let J=0;J<K.length;J++)tn(K[J],O,V,$);r(A.anchor,O,V);return}if(Y===vo){y(A,O,V);return}if($!==2&&W&1&&G)if($===0)G.beforeEnter(q),r(q,O,V),gt(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,he=()=>r(q,O,V),Ce=()=>{J(q,()=>{he(),ie&&ie()})};oe?oe(q,he,Ce):Ce()}else r(q,O,V)},Ke=(A,O,V,$=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:W,shapeFlag:ue,patchFlag:J,dirs:oe,cacheIndex:ie}=A;if(J===-2&&(U=!1),G!=null&&Fo(G,null,V,A,!0),ie!=null&&(O.renderCache[ie]=void 0),ue&256){O.ctx.deactivate(A);return}const he=ue&1&&oe,Ce=!Ur(A);let Se;if(Ce&&(Se=Y&&Y.onVnodeBeforeUnmount)&&Wt(Se,O,A),ue&6)Rn(A.component,V,$);else{if(ue&128){A.suspense.unmount(V,$);return}he&&Cn(A,null,O,"beforeUnmount"),ue&64?A.type.remove(A,O,V,re,$):W&&!W.hasOnce&&(q!==Ot||J>0&&J&64)?Ht(W,O,V,!1,!0):(q===Ot&&J&384||!U&&ue&16)&&Ht(K,O,V),$&&Ge(A)}(Ce&&(Se=Y&&Y.onVnodeUnmounted)||he)&&gt(()=>{Se&&Wt(Se,O,A),he&&Cn(A,null,O,"unmounted")},V)},Ge=A=>{const{type:O,el:V,anchor:$,transition:U}=A;if(O===Ot){gr(V,$);return}if(O===vo){R(A);return}const q=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(V,q);G?G(A.el,q,K):K()}else q()},gr=(A,O)=>{let V;for(;A!==O;)V=p(A),s(A),A=V;s(O)},Rn=(A,O,V)=>{const{bum:$,scope:U,job:q,subTree:Y,um:G,m:K,a:W}=A;Nl(K),Nl(W),$&&li($),U.stop(),q&&(q.flags|=8,Ke(Y,A,O,V)),G&&gt(G,O),gt(()=>{A.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Ht=(A,O,V,$=!1,U=!1,q=0)=>{for(let Y=q;Y<A.length;Y++)Ke(A[Y],O,V,$,U)},j=A=>{if(A.shapeFlag&6)return j(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const O=p(A.anchor||A.el),V=O&&O[tA];return V?p(V):O};let ee=!1;const X=(A,O,V)=>{A==null?O._vnode&&Ke(O._vnode,null,null,!0):k(O._vnode||null,A,O,null,null,null,V),O._vnode=A,ee||(ee=!0,pm(),kl(),ee=!1)},re={p:k,um:Ke,m:tn,r:Ge,mt:ge,mc:v,pc:ne,pbc:b,n:j,o:t};let Ie,Le;return e&&([Ie,Le]=e(re)),{render:X,hydrate:Ie,createApp:SA(X,Ie)}}function Ou({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function iE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function oE(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&oE(o,a)),a.type===Ts&&(a.el=o.el)}}function MA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function aE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:aE(e)}function Nl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const VA=Symbol.for("v-scx"),FA=()=>Nt(VA);function UA(t,e){return td(t,null,e)}function En(t,e,n){return td(t,e,n)}function td(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=ht({},n),c=e&&r||!e&&i!=="post";let u;if(Ei){if(i==="sync"){const g=FA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Dn,g.resume=Dn,g.pause=Dn,g}}const f=it;a.call=(g,w,k)=>bn(g,f,w,k);let d=!1;i==="post"?a.scheduler=g=>{gt(g,f&&f.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,w)=>{w?g():Xh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=JI(t,e,a);return Ei&&(u?u.push(p):c&&p()),p}function jA(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?lE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=fa(this),a=td(s,i.bind(r),n);return o(),a}function lE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const BA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${Ds(e)}Modifiers`];function $A(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&BA(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(Al)));let a,c=r[a=bu(e)]||r[a=bu(hn(e))];!c&&i&&(c=r[a=bu(Ds(e))]),c&&bn(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(u,t,6,s)}}function cE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const f=cE(u,e,!0);f&&(a=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Me(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):ht(o,i),Me(t)&&r.set(t,o),o)}function Ec(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Ds(e))||xe(t,e))}function xu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:d,data:p,setupState:g,ctx:w,inheritAttrs:k}=t,x=Ol(t);let N,P;try{if(n.shapeFlag&4){const R=s||r,D=R;N=Yt(u.call(D,R,f,d,g,p,w)),P=a}else{const R=e;N=Yt(R.length>1?R(d,{attrs:a,slots:o,emit:c}):R(d,null)),P=e.props?a:qA(a)}}catch(R){Eo.length=0,Mi(R,t,1),N=be(st)}let y=N;if(P&&k!==!1){const R=Object.keys(P),{shapeFlag:D}=y;R.length&&D&7&&(i&&R.some(Fh)&&(P=WA(P,i)),y=ir(y,P,!1,!0))}return n.dirs&&(y=ir(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&yi(y,n.transition),N=y,Ol(x),N}function HA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(As(s)){if(s.type!==st||s.children==="v-if"){if(n)return;n=s}}else return}return n}const qA=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},WA=(t,e)=>{const n={};for(const r in t)(!Fh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Im(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Ec(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Im(r,o,u):!0:!!o;return!1}function Im(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ec(n,i))return!0}return!1}function wc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dl=t=>t.__isSuspense;let bf=0;const KA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)GA(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}QA(t,e,n,r,s,o,a,c,u)}},hydrate:YA,normalize:XA},nd=KA;function jo(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function GA(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:f}}=c,d=f("div"),p=t.suspense=uE(t,s,r,e,d,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(jo(t,"onPending"),jo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ui(p,t.ssFallback)):p.resolve(!1,!0)}function QA(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:f}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:w,pendingBranch:k,isInFallback:x,isHydrating:N}=d;if(k)d.pendingBranch=p,_n(p,k)?(c(k,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():x&&(N||(c(w,g,n,r,s,null,i,o,a),ui(d,g)))):(d.pendingId=bf++,N?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),x?(c(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(c(w,g,n,r,s,null,i,o,a),ui(d,g))):w&&_n(p,w)?(c(w,p,n,r,s,d,i,o,a),d.resolve(!0)):(c(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(w&&_n(p,w))c(w,p,n,r,s,d,i,o,a),ui(d,p);else if(jo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=bf++,c(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:P,pendingId:y}=d;P>0?setTimeout(()=>{d.pendingId===y&&d.fallback(g)},P):P===0&&d.fallback(g)}}function uE(t,e,n,r,s,i,o,a,c,u,f=!1){const{p:d,m:p,um:g,n:w,o:{parentNode:k,remove:x}}=u;let N;const P=JA(t);P&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const y=t.props?rv(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:bf++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(M=!1,T=!1){const{vnode:v,activeBranch:_,pendingBranch:b,pendingId:C,effects:S,parentComponent:I,container:ge}=D;let Ee=!1;D.isHydrating?D.isHydrating=!1:M||(Ee=_&&b.transition&&b.transition.mode==="out-in",Ee&&(_.transition.afterLeave=()=>{C===D.pendingId&&(p(b,ge,i===R?w(_):i,0),gf(S))}),_&&(k(_.el)===ge&&(i=w(_)),g(_,I,D,!0)),Ee||p(b,ge,i,0)),ui(D,b),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...S),se=!0;break}Z=Z.parent}!se&&!Ee&&gf(S),D.effects=[],P&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),jo(v,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:T,activeBranch:v,parentComponent:_,container:b,namespace:C}=D;jo(T,"onFallback");const S=w(v),I=()=>{D.isInFallback&&(d(null,M,b,S,_,null,C,a,c),ui(D,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(v.transition.afterLeave=I),D.isInFallback=!0,g(v,_,null,!0),ge||I()},move(M,T,v){D.activeBranch&&p(D.activeBranch,M,T,v),D.container=M},next(){return D.activeBranch&&w(D.activeBranch)},registerDep(M,T,v){const _=!!D.pendingBranch;_&&D.deps++;const b=M.vnode.el;M.asyncDep.catch(C=>{Mi(C,M,0)}).then(C=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:S}=M;If(M,C),b&&(S.el=b);const I=!b&&M.subTree.el;T(M,S,k(b||M.subTree.el),b?null:w(M.subTree),D,o,v),I&&x(I),wc(M,S.el),_&&--D.deps===0&&D.resolve()})},unmount(M,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,M,T),D.pendingBranch&&g(D.pendingBranch,n,M,T)}};return D}function YA(t,e,n,r,s,i,o,a,c){const u=e.suspense=uE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),f}function XA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Am(r?n.default:n),t.ssFallback=r?Am(n.fallback):be(st)}function Am(t){let e;if(pe(t)){const n=vi&&t._c;n&&(t._d=!1,$t()),t=t(),n&&(t._d=!0,e=Gt,hE())}return ce(t)&&(t=HA(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):gf(t)}function ui(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,wc(r,s))}function JA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ot=Symbol.for("v-fgt"),Ts=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),Eo=[];let Gt=null;function $t(t=!1){Eo.push(Gt=t?null:[])}function hE(){Eo.pop(),Gt=Eo[Eo.length-1]||null}let vi=1;function Rm(t,e=!1){vi+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function dE(t){return t.dynamicChildren=vi>0?Gt||ii:null,hE(),vi>0&&Gt&&Gt.push(t),t}function Bo(t,e,n,r,s,i){return dE(He(t,e,n,r,s,i,!0))}function Jn(t,e,n,r,s){return dE(be(t,e,n,r,s,!0))}function As(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const pE=({key:t})=>t??null,ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Je(t)||pe(t)?{i:at,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pE(e),ref:e&&ll(e),scopeId:Cv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return a?(rd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),vi>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const be=ZA;function ZA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Hv)&&(t=st),As(t)){const a=ir(t,e,!0);return n&&rd(a,n),vi>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag=-2,a}if(cR(t)&&(t=t.__vccOpts),e){e=eR(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=ia(a)),Me(c)&&(Qh(c)&&!ce(c)&&(c=ht({},c)),e.style=mc(c))}const o=We(t)?1:Dl(t)?128:kv(t)?64:Me(t)?4:pe(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function eR(t){return t?Qh(t)||Xv(t)?ht({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?mE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&pE(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(ll(e)):[i,ll(e)]:ll(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&yi(f,c.clone(f)),f}function an(t=" ",e=0){return be(Ts,null,t,e)}function h9(t,e){const n=be(vo,null,t);return n.staticCount=e,n}function tR(t="",e=!1){return e?($t(),Jn(st,null,t)):be(st,null,t)}function Yt(t){return t==null||typeof t=="boolean"?be(st):ce(t)?be(Ot,null,t.slice()):As(t)?Sr(t):be(Ts,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function rd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),rd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xv(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function mE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ia([e.class,r.class]));else if(s==="style")e.style=mc([e.style,r.style]);else if(sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){bn(t,e,7,[n,r])}const nR=Gv();let rR=0;function sR(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nR,i={uid:rR++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new av(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zv(r,s),emitsOptions:cE(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$A.bind(null,i),t.ce&&t.ce(i),i}let it=null;const bc=()=>it||at;let Ll,Tf;{const t=pc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ll=e("__VUE_INSTANCE_SETTERS__",n=>it=n),Tf=e("__VUE_SSR_SETTERS__",n=>Ei=n)}const fa=t=>{const e=it;return Ll(t),t.scope.on(),()=>{t.scope.off(),Ll(e)}},Sm=()=>{it&&it.scope.off(),Ll(null)};function gE(t){return t.vnode.shapeFlag&4}let Ei=!1;function iR(t,e=!1,n=!1){e&&Tf(e);const{props:r,children:s}=t.vnode,i=gE(t);PA(t,r,i,e),xA(t,s,n);const o=i?oR(t,e):void 0;return e&&Tf(!1),o}function oR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,EA);const{setup:r}=n;if(r){rs();const s=t.setupContext=r.length>1?lR(t):null,i=fa(t),o=la(r,t,0,[t.props,s]),a=Zy(o);if(ss(),i(),(a||t.sp)&&!Ur(t)&&Jh(t),a){if(o.then(Sm,Sm),e)return o.then(c=>{If(t,c)}).catch(c=>{Mi(c,t,0)});t.asyncDep=o}else If(t,o)}else _E(t)}function If(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Iv(e)),_E(t)}function _E(t,e,n){const r=t.type;t.render||(t.render=r.render||Dn);{const s=fa(t);rs();try{wA(t)}finally{ss(),s()}}}const aR={get(t,e){return Ct(t,"get",""),t[e]}};function lR(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aR),slots:t.slots,emit:t.emit,expose:e}}function Tc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Iv(Yh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yo)return yo[n](t)},has(e,n){return n in e||n in yo}})):t.proxy}function Af(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function cR(t){return pe(t)&&"__vccOpts"in t}const Ue=(t,e)=>YI(t,e,Ei);function vt(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ce(e)?As(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&As(n)&&(n=[n]),be(t,e,n))}const yE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rf;const Pm=typeof window<"u"&&window.trustedTypes;if(Pm)try{Rf=Pm.createPolicy("vue",{createHTML:t=>t})}catch{}const vE=Rf?t=>Rf.createHTML(t):t=>t,uR="http://www.w3.org/2000/svg",fR="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,Cm=Qn&&Qn.createElement("template"),hR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Qn.createElementNS(uR,t):e==="mathml"?Qn.createElementNS(fR,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Cm.innerHTML=vE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Cm.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",ro="animation",$o=Symbol("_vtc"),EE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},dR=ht({},Ov,EE),pR=t=>(t.displayName="Transition",t.props=dR,t),mR=pR((t,{slots:e})=>vt(sA,gR(t),e)),ds=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},km=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function gR(t){const e={};for(const S in t)S in EE||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=_R(s),k=w&&w[0],x=w&&w[1],{onBeforeEnter:N,onEnter:P,onEnterCancelled:y,onLeave:R,onLeaveCancelled:D,onBeforeAppear:M=N,onAppear:T=P,onAppearCancelled:v=y}=e,_=(S,I,ge,Ee)=>{S._enterCancelled=Ee,ps(S,I?f:a),ps(S,I?u:o),ge&&ge()},b=(S,I)=>{S._isLeaving=!1,ps(S,d),ps(S,g),ps(S,p),I&&I()},C=S=>(I,ge)=>{const Ee=S?T:P,Z=()=>_(I,S,ge);ds(Ee,[I,Z]),Om(()=>{ps(I,S?c:i),Kn(I,S?f:a),km(Ee)||xm(I,r,k,Z)})};return ht(e,{onBeforeEnter(S){ds(N,[S]),Kn(S,i),Kn(S,o)},onBeforeAppear(S){ds(M,[S]),Kn(S,c),Kn(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,I){S._isLeaving=!0;const ge=()=>b(S,I);Kn(S,d),S._enterCancelled?(Kn(S,p),Lm()):(Lm(),Kn(S,p)),Om(()=>{S._isLeaving&&(ps(S,d),Kn(S,g),km(R)||xm(S,r,x,ge))}),ds(R,[S,ge])},onEnterCancelled(S){_(S,!1,void 0,!0),ds(y,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),ds(v,[S])},onLeaveCancelled(S){b(S),ds(D,[S])}})}function _R(t){if(t==null)return null;if(Me(t))return[Nu(t.enter),Nu(t.leave)];{const e=Nu(t);return[e,e]}}function Nu(t){return rv(t)}function Kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$o]||(t[$o]=new Set)).add(e)}function ps(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[$o];n&&(n.delete(e),n.size||(t[$o]=void 0))}function Om(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yR=0;function xm(t,e,n,r){const s=t._endId=++yR,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=vR(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},a+1),t.addEventListener(u,p)}function vR(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${wr}Delay`),i=r(`${wr}Duration`),o=Nm(s,i),a=r(`${ro}Delay`),c=r(`${ro}Duration`),u=Nm(a,c);let f=null,d=0,p=0;e===wr?o>0&&(f=wr,d=o,p=i.length):e===ro?u>0&&(f=ro,d=u,p=c.length):(d=Math.max(o,u),f=d>0?o>u?wr:ro:null,p=f?f===wr?i.length:c.length:0);const g=f===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:f,timeout:d,propCount:p,hasTransform:g}}function Nm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Dm(n)+Dm(t[r])))}function Dm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Lm(){return document.body.offsetHeight}function ER(t,e,n){const r=t[$o];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mm=Symbol("_vod"),wR=Symbol("_vsh"),bR=Symbol(""),TR=/(^|;)\s*display\s*:/;function IR(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&cl(r,a,"")}else for(const o in e)n[o]==null&&cl(r,o,"");for(const o in n)o==="display"&&(i=!0),cl(r,o,n[o])}else if(s){if(e!==n){const o=r[bR];o&&(n+=";"+o),r.cssText=n,i=TR.test(n)}}else e&&t.removeAttribute("style");Mm in t&&(t[Mm]=i?r.display:"",t[wR]&&(r.display="none"))}const Vm=/\s*!important$/;function cl(t,e,n){if(ce(n))n.forEach(r=>cl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=AR(t,e);Vm.test(n)?t.setProperty(Ds(r),n.replace(Vm,""),"important"):t[r]=n}}const Fm=["Webkit","Moz","ms"],Du={};function AR(t,e){const n=Du[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return Du[e]=r;r=dc(r);for(let s=0;s<Fm.length;s++){const i=Fm[s]+r;if(i in t)return Du[e]=i}return e}const Um="http://www.w3.org/1999/xlink";function jm(t,e,n,r,s,i=EI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Um,e.slice(6,e.length)):t.setAttributeNS(Um,e,n):n==null||i&&!sv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wn(n)?String(n):n)}function Bm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function kr(t,e,n,r){t.addEventListener(e,n,r)}function RR(t,e,n,r){t.removeEventListener(e,n,r)}const $m=Symbol("_vei");function SR(t,e,n,r,s=null){const i=t[$m]||(t[$m]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=PR(e);if(r){const u=i[e]=OR(r,s);kr(t,a,u,c)}else o&&(RR(t,a,o,c),i[e]=void 0)}}const Hm=/(?:Once|Passive|Capture)$/;function PR(t){let e;if(Hm.test(t)){e={};let r;for(;r=t.match(Hm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ds(t.slice(2)),e]}let Lu=0;const CR=Promise.resolve(),kR=()=>Lu||(CR.then(()=>Lu=0),Lu=Date.now());function OR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bn(xR(r,n.value),e,5,[r])};return n.value=t,n.attached=kR(),n}function xR(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,NR=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ER(t,r,o):e==="style"?IR(t,n,r):sa(e)?Fh(e)||SR(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DR(t,e,r,o))?(Bm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Bm(t,hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jm(t,e,r,o))};function DR(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qm(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qm(e)&&We(n)?!1:e in t}const wi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>li(e,n):e};function LR(t){t.target.composing=!0}function Wm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sr=Symbol("_assign"),d9={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sr]=wi(s);const i=r||s.props&&s.props.type==="number";kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Al(a)),t[sr](a)}),n&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",LR),kr(t,"compositionend",Wm),kr(t,"change",Wm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sr]=wi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Al(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},p9={deep:!0,created(t,e,n){t[sr]=wi(n),kr(t,"change",()=>{const r=t._modelValue,s=Ho(t),i=t.checked,o=t[sr];if(ce(r)){const a=Bh(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(Di(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(wE(t,i))})},mounted:zm,beforeUpdate(t,e,n){t[sr]=wi(n),zm(t,e,n)}};function zm(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=Bh(e,r.props.value)>-1;else if(Di(e))s=e.has(r.props.value);else{if(e===n)return;s=oa(e,wE(t,!0))}t.checked!==s&&(t.checked=s)}const m9={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Di(e);kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Al(Ho(o)):Ho(o));t[sr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,$n(()=>{t._assigning=!1})}),t[sr]=wi(r)},mounted(t,{value:e}){Km(t,e)},beforeUpdate(t,e,n){t[sr]=wi(n)},updated(t,{value:e}){t._assigning||Km(t,e)}};function Km(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Di(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Ho(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Bh(e,a)>-1}else o.selected=e.has(a);else if(oa(Ho(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ho(t){return"_value"in t?t._value:t.value}function wE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const MR=["ctrl","shift","alt","meta"],VR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>MR.some(n=>t[`${n}Key`]&&!e.includes(n))},g9=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=VR[e[o]];if(a&&a(s,e))return}return t(s,...i)})},bE=ht({patchProp:NR},hR);let wo,Gm=!1;function FR(){return wo||(wo=DA(bE))}function UR(){return wo=Gm?wo:LA(bE),Gm=!0,wo}const jR=(...t)=>{const e=FR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=IE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,TE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},BR=(...t)=>{const e=UR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=IE(r);if(s)return n(s,!0,TE(s))},e};function TE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function IE(t){return We(t)?document.querySelector(t):t}const $R=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,HR=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,qR=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function WR(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){zR(t);return}return e}function zR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function qo(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!qR.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if($R.test(t)||HR.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,WR)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const KR=/#/g,GR=/&/g,QR=/\//g,YR=/=/g,sd=/\+/g,XR=/%5e/gi,JR=/%60/gi,ZR=/%7c/gi,eS=/%20/gi;function tS(t){return encodeURI(""+t).replace(ZR,"|")}function Sf(t){return tS(typeof t=="string"?t:JSON.stringify(t)).replace(sd,"%2B").replace(eS,"+").replace(KR,"%23").replace(GR,"%26").replace(JR,"`").replace(XR,"^").replace(QR,"%2F")}function Mu(t){return Sf(t).replace(YR,"%3D")}function Ml(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function nS(t){return Ml(t.replace(sd," "))}function rS(t){return Ml(t.replace(sd," "))}function AE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=nS(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=rS(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function sS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Mu(t)}=${Sf(n)}`).join("&"):`${Mu(t)}=${Sf(e)}`:Mu(t)}function iS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>sS(e,t[e])).filter(Boolean).join("&")}const oS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,aS=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,lS=/^([/\\]\s*){2,}[^/\\]/,cS=/^[\s\0]*(blob|data|javascript|vbscript):$/i,uS=/\/$|\/\?|\/#/,fS=/^\.?\//;function pr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?oS.test(t):aS.test(t)||(e.acceptRelative?lS.test(t):!1)}function hS(t){return!!t&&cS.test(t)}function Pf(t="",e){return e?uS.test(t):t.endsWith("/")}function Ic(t="",e){if(!e)return(Pf(t)?t.slice(0,-1):t)||"/";if(!Pf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Vl(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Pf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function dS(t=""){return t.startsWith("/")}function Qm(t=""){return dS(t)?t:"/"+t}function pS(t,e){if(SE(e)||pr(t))return t;const n=Ic(e);return t.startsWith(n)?t:Ac(n,t)}function Ym(t,e){if(SE(e))return t;const n=Ic(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function RE(t,e){const n=_S(t),r={...AE(n.search),...e};return n.search=iS(r),yS(n)}function SE(t){return!t||t==="/"}function mS(t){return t&&t!=="/"}function Ac(t,...e){let n=t||"";for(const r of e.filter(s=>mS(s)))if(n){const s=r.replace(fS,"");n=Vl(n)+s}else n=r;return n}function PE(...t){var o,a,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const f of n)if(!(!f||f==="/")){for(const[d,p]of f.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&pr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function gS(t,e,n={}){return n.trailingSlash||(t=Vl(t),e=Vl(e)),n.leadingSlash||(t=Qm(t),e=Qm(e)),n.encoding||(t=Ml(t),e=Ml(e)),t===e}const CE=Symbol.for("ufo:protocolRelative");function _S(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!pr(t,{acceptRelative:!0}))return Xm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:f}=Xm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:f,[CE]:!r}}function Xm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function yS(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[CE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class vS extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function ES(t){var c,u,f,d,p;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((f=t.request)==null?void 0:f.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new vS(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,w]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[w]}});return a}const wS=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Jm(t="GET"){return wS.has(t.toUpperCase())}function bS(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const TS=new Set(["image/svg","application/xml","application/xhtml","application/html"]),IS=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function AS(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return IS.test(e)?"json":TS.has(e)||e.startsWith("text/")?"text":"blob"}function RS(t,e,n,r){const s=SS((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function SS(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function za(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const PS=new Set([408,409,425,429,500,502,503,504]),CS=new Set([101,204,205,304]);function kE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let f;typeof a.options.retry=="number"?f=a.options.retry:f=Jm(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(f>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):PS.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:f-1})}}const u=ES(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const f={request:c,options:RS(c,u,t.defaults,n),response:void 0,error:void 0};f.options.method&&(f.options.method=f.options.method.toUpperCase()),f.options.onRequest&&await za(f,f.options.onRequest),typeof f.request=="string"&&(f.options.baseURL&&(f.request=pS(f.request,f.options.baseURL)),f.options.query&&(f.request=RE(f.request,f.options.query),delete f.options.query),"query"in f.options&&delete f.options.query,"params"in f.options&&delete f.options.params),f.options.body&&Jm(f.options.method)&&(bS(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new n(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let d;if(!f.options.signal&&f.options.timeout){const g=new r;d=setTimeout(()=>{const w=new Error("[TimeoutError]: The operation was aborted due to timeout");w.name="TimeoutError",w.code=23,g.abort(w)},f.options.timeout),f.options.signal=g.signal}try{f.response=await e(f.request,f.options)}catch(g){return f.error=g,f.options.onRequestError&&await za(f,f.options.onRequestError),await s(f)}finally{d&&clearTimeout(d)}if((f.response.body||f.response._bodyInit)&&!CS.has(f.response.status)&&f.options.method!=="HEAD"){const g=(f.options.parseResponse?"json":f.options.responseType)||AS(f.response.headers.get("content-type")||"");switch(g){case"json":{const w=await f.response.text(),k=f.options.parseResponse||qo;f.response._data=k(w);break}case"stream":{f.response._data=f.response.body||f.response._bodyInit;break}default:f.response._data=await f.response[g]()}}return f.options.onResponse&&await za(f,f.options.onResponse),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await za(f,f.options.onResponseError),await s(f)):f.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>kE({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const Fl=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),kS=Fl.fetch?(...t)=>Fl.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),OS=Fl.Headers,xS=Fl.AbortController,NS=kE({fetch:kS,Headers:OS,AbortController:xS}),DS=NS,LS=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ul=LS().app,MS=()=>Ul.baseURL,VS=()=>Ul.buildAssetsDir,id=(...t)=>PE(od(),VS(),...t),od=(...t)=>{const e=Ul.cdnURL||Ul.baseURL;return t.length?PE(e,...t):e};globalThis.__buildAssetsURL=id,globalThis.__publicAssetsURL=od;globalThis.$fetch||(globalThis.$fetch=DS.create({baseURL:MS()}));function Cf(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Cf(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const FS={run:t=>t()},US=()=>FS,OE=typeof console.createTask<"u"?console.createTask:US;function jS(t,e){const n=e.shift(),r=OE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function BS(t,e){const n=e.shift(),r=OE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Vu(t,e){for(const n of[...t])n(e)}class $S{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Cf(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Cf(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(jS,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(BS,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Vu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Vu(this._after,s)}):(this._after&&s&&Vu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function xE(){return new $S}function HS(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;kf.add(u);try{const f=s?s.run(o,a):a();return n||(e=void 0),await f}finally{kf.delete(u)}}}}function qS(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=HS({...t,...r})),e[n]}}}const jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Zm="__unctx__",WS=jl[Zm]||(jl[Zm]=qS()),zS=(t,e={})=>WS.get(t,e),eg="__unctx_async_handlers__",kf=jl[eg]||(jl[eg]=new Set);function fi(t){const e=[];for(const s of kf){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Of={name:"page",mode:"out-in"},KS=!1,GS=!1,QS={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},YS=null,XS="#__nuxt",NE="nuxt-app",tg=36e5,JS="vite:preloadError";function DE(t=NE){return zS(t,{asyncContext:!1})}const ZS="__nuxt_plugin";function eP(t){var s;let e=0;const n={_id:t.id||NE||"nuxt-app",_scope:Hh(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.4"},get vue(){return n.vueApp.version}},payload:er({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:er({}),state:hr({}),once:new Set,_errors:er({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!aa()?n._scope.run(()=>ng(n,i)):ng(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:er({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=xE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ka(n,a,o),Ka(n.vueApp.config.globalProperties,a,o)},Ka(n.vueApp,"$nuxt",n),Ka(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(JS,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||De;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function tP(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function nP(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function rP(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(c){var f;const u=((f=c.dependsOn)==null?void 0:f.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),c]);else{const d=nP(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(r.map(async([p,g])=>{p.has(c._name)&&(p.delete(c._name),p.size===0&&(o++,await a(g)))})))});c.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const c of e)tP(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ZS]:!0,_name:e})}function ng(t,e,n){const r=()=>e();return DE(t._id).set(t),t.vueApp.runWithContext(r)}function sP(t){var n;let e;return Zh()&&(e=(n=bc())==null?void 0:n.appContext.app.$nuxt),e=e||DE(t).tryUse(),e||null}function De(t){const e=sP(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ls(t){return De().$config}function Ka(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function iP(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||oP;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const c=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(c))){i=a+1;continue}if(n[c]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[c]=aP(u,s)}i=a+1}return n}function oP(t){return t.includes("%")?decodeURIComponent(t):t}function aP(t,e){try{return e(t)}catch{return t}}const Ga=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function rg(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Ga.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Ga.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ga.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ga.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!lP(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function lP(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const sg=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ig(t,e){e?e={...sg,...e}:e=sg;const n=LE(e);return n.dispatch(t),n.toString()}const cP=Object.freeze(["prototype","__proto__","constructor"]);function LE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let c=null;if((c=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let f=[];t.respectType!==!1&&!og(s)&&(f=cP),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),f=f.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+f.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of f)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const c of s)this.dispatch(c);return}const o=new Map,a=s.map(c=>{const u=LE(t);u.dispatch(c);for(const[f,d]of u.getContext())o.set(f,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),og(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const ME="[native code] }",uP=ME.length;function og(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-uP)===ME}function fP(t,e,n={}){return t===e||ig(t,n)===ig(e,n)}function hP(t,e){return{ctx:{table:t},matchAll:n=>FE(n,t)}}function VE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,VE(s)])):new Map(Object.entries(t[n]));return e}function dP(t){return hP(VE(t))}function FE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of ag(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of ag(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...FE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function ag(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Fu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function xf(t,e,n=".",r){if(!Fu(e))return xf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Fu(o)&&Fu(s[i])?s[i]=xf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function pP(t){return(...e)=>e.reduce((n,r)=>xf(n,r,"",t),{})}const UE=pP();function mP(t,e){try{return e in t}catch{return!1}}class Nf extends Error{constructor(n,r={}){super(n,r);rn(this,"statusCode",500);rn(this,"fatal",!1);rn(this,"unhandled",!1);rn(this,"statusMessage");rn(this,"data");rn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Lf(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=jE(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}rn(Nf,"__h3_error__",!0);function Df(t){if(typeof t=="string")return new Nf(t);if(gP(t))return t;const e=new Nf(t.message??t.statusMessage??"",{cause:t.cause||t});if(mP(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Lf(t.statusCode,e.statusCode):t.status&&(e.statusCode=Lf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;jE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function gP(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const _P=/[^\u0009\u0020-\u007E]/g;function jE(t=""){return t.replace(_P,"")}function Lf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const BE=Symbol("layout-meta"),ha=Symbol("route"),wt=()=>{var t;return(t=De())==null?void 0:t.$router},ad=()=>Zh()?Nt(ha,De()._route):De()._route;function _9(t){return t}const yP=()=>{try{if(De()._processingMiddleware)return!0}catch{return!1}return!1},vP=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Mf(t):wt().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,f=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,c,f),Promise.resolve()}const r=pr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&hS(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=yP();if(!s&&i)return e!=null&&e.replace?typeof t=="string"?{path:t,replace:!0}:{...t,replace:!0}:t;const o=wt(),a=De();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Mf(t){return RE(t.path||"",t.query||{})+(t.hash||"")}const $E="__nuxt_error",Rc=()=>GI(De().payload,"error"),ni=t=>{const e=Sc(t);try{const n=De(),r=Rc();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},HE=async(t={})=>{const e=De(),n=Rc();e.callHook("app:error:cleared",t),t.redirect&&await wt().replace(t.redirect),n.value=YS},EP=t=>!!t&&typeof t=="object"&&$E in t,Sc=t=>{const e=Df(t);return Object.defineProperty(e,$E,{value:!0,configurable:!1,writable:!1}),e};function lg(t){const e=bP(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const wP="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function bP(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=wP.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const TP=-1,IP=-2,AP=-3,RP=-4,SP=-5,PP=-6;function CP(t,e){return kP(JSON.parse(t),e)}function kP(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===TP)return;if(i===AP)return NaN;if(i===RP)return 1/0;if(i===SP)return-1/0;if(i===PP)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e==null?void 0:e[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const f=new Set;r[i]=f;for(let g=1;g<a.length;g+=1)f.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[c],w=a[1],k=lg(w),x=new g(k);r[i]=x;break}case"ArrayBuffer":{const g=a[1],w=lg(g);r[i]=w;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const f=a[u];f!==IP&&(c[u]=s(f))}}else{const c={};r[i]=c;for(const u in a){const f=a[u];c[u]=s(f)}}return r[i]}return s(0)}const OP=new Set(["title","titleTemplate","script","style","noscript"]),ul=new Set(["base","meta","link","style","script","noscript"]),xP=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),NP=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),qE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),DP=typeof window<"u";function Bl(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Vf(t){if(t._h)return t._h;if(t._d)return Bl(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Bl(e)}function LP(t,e){return t instanceof Promise?t.then(e):e(t)}function Ff(t,e,n,r){const s=r||zE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Ff(t,e,n,o));const i={tag:t,props:s};for(const o of qE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||OP.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function MP(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function WE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=MP(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,WE(t,e,n,s)));if(!e&&!qE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function zE(t,e=!1){const n=WE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const VP=10;function KE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,KE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function FP(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!xP.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Ff(s,o,t));continue}e.push(Ff(s,i,t))}}if(e.length===0)return[];const r=[];return LP(KE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<VP)+i,s)))}const cg=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),ug={base:-10,title:10},fg={critical:-80,high:-10,low:20};function $l(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in ug&&(n=ug[t.tag]),e&&e in fg?n+fg[e]:n}const UP=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],jP=["name","property","http-equiv"];function GE(t){const{props:e,tag:n}=t;if(NP.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of jP)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Pr="%separator";function BP(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const $P=new RegExp(`${Pr}(?:\\s*${Pr})*`,"g");function Qa(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Pr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Pr||!i.includes(a))return a;const c=BP(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Pr)&&(t=t.slice(0,-Pr.length)),t.startsWith(Pr)&&(t=t.slice(Pr.length)),t=t.replace($P,n).trim()),t}function hg(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function QE(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:ul.has(p.tag)?Vf(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const g of["body","head"]){const w=(d=n[g])==null?void 0:d.children;for(const k of w){const x=k.tagName.toLowerCase();if(!ul.has(x))continue;const N={tag:x,props:await zE(k.getAttributeNames().reduce((D,M)=>({...D,[M]:k.getAttribute(M)}),{})),innerHTML:k.innerHTML},P=GE(N);let y=P,R=1;for(;y&&p.has(y);)y=`${P}:${R++}`;y&&(N._d=y,p.add(y)),o.elMap[k.getAttribute("data-hid")||Vf(N)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,g,w){const k=`${p}:${g}`;o.sideEffects[k]=w,delete o.pendingSideEffects[k]}function c({id:p,$el:g,tag:w}){const k=w.tag.endsWith("Attrs");if(o.elMap[p]=g,k||(w.textContent&&w.textContent!==g.textContent&&(g.textContent=w.textContent),w.innerHTML&&w.innerHTML!==g.innerHTML&&(g.innerHTML=w.innerHTML),a(p,"el",()=>{var x;(x=o.elMap[p])==null||x.remove(),delete o.elMap[p]})),w._eventHandlers)for(const x in w._eventHandlers)Object.prototype.hasOwnProperty.call(w._eventHandlers,x)&&g.getAttribute(`data-${x}`)!==""&&((w.tag==="bodyAttrs"?n.defaultView:g).addEventListener(x.substring(2),w._eventHandlers[x].bind(g)),g.setAttribute(`data-${x}`,""));for(const x in w.props){if(!Object.prototype.hasOwnProperty.call(w.props,x))continue;const N=w.props[x],P=`attr:${x}`;if(x==="class"){if(!N)continue;for(const y of N.split(" "))k&&a(p,`${P}:${y}`,()=>g.classList.remove(y)),!g.classList.contains(y)&&g.classList.add(y)}else if(x==="style"){if(!N)continue;for(const y of N.split(";")){const R=y.indexOf(":"),D=y.substring(0,R).trim(),M=y.substring(R+1).trim();a(p,`${P}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,M)}}else g.getAttribute(x)!==N&&g.setAttribute(x,N===!0?"":String(N)),k&&a(p,P,()=>g.removeAttribute(x))}}const u=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:g,shouldRender:w,id:k}=p;if(w){if(g.tag==="title"){n.title=g.textContent;continue}p.$el=p.$el||o.elMap[k],p.$el?c(p):ul.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),c(p),f[g]=f[g]||n.createDocumentFragment(),f[g].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function HP(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>QE(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function qP(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{HP(i,t)}}}}}const WP=new Set(["templateParams","htmlAttrs","bodyAttrs"]),zP={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=GE(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Vf(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&WP.has(r.tag)&&(a="merge"),a==="merge"){const c=i.props;c.style&&r.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),r.props.style=`${c.style} ${r.props.style}`),c.class&&r.props.class?r.props.class=`${c.class} ${r.props.class}`:c.class&&(r.props.class=c.class),e[s].props={...c,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if($l(r)>$l(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&ul.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},KP=new Set(["script","link","bodyAttrs"]),GP=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!KP.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&cg.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Bl(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);cg.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),QP=new Set(["link","style","script","noscript"]),YP={hooks:{"tag:normalise":({tag:t})=>{t.key&&QP.has(t.tag)&&(t.props["data-hid"]=t._h=Bl(t.key))}}},XP={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},JP={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of UP){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=$l(n),i=$l(r);return s<i?-1:s>i?1:n._p-r._p})}}},ZP={meta:"content",link:"href",htmlAttrs:"lang"},eC=["innerHTML","textContent"],tC=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Qa(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const c=ZP[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=Qa(a.props[c],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of eC)typeof a[u]=="string"&&(a[u]=Qa(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Qa(n.textContent,t._templateParams,t._separator))}}}),nC={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=hg(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=hg(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},rC={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};function sC(t={}){const e=iC(t);return e.use(qP()),e}function dg(t,e){return!t||t==="server"&&e||t==="client"&&!e}function iC(t={}){const e=xE();e.addHooks(t.hooks||{}),t.document=t.document||(DP?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const u=typeof c=="function"?c(a):c;(!u.key||!o.some(f=>f.key===u.key))&&(o.push(u),dg(u.mode,n)&&e.addHooks(u.hooks||{}))},push(c,u){u==null||delete u.head;const f={_i:s++,input:c,...u};return dg(f.mode,n)&&(i.push(f),r()),{dispose(){i=i.filter(d=>d._i!==f._i),r()},patch(d){for(const p of i)p._i===f._i&&(p.input=f.input=d);r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const u of c.entries){const f=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(f):f),u.resolvedInput)for(const d of await FP(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),c.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[zP,XP,GP,YP,JP,tC,nC,rC,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}const oC=yE[0]==="3";function aC(t){return typeof t=="function"?t():Qe(t)}function Uf(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=aC(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Uf(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Uf(e[r])}return n}return e}const lC={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Uf(e.input)}}},cC="usehead";function uC(t){return{install(n){oC&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(cC,t))}}.install}function fC(t={}){t.domDelayFn=t.domDelayFn||(n=>$n(()=>setTimeout(()=>n(),0)));const e=sC(t);return e.use(lC),e.install=uC(e),e}const hC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dC="__unhead_injection_handler__";function pC(t){hC[dC]=t}const mC="modulepreload",gC=function(t,e){return new URL(t,e).href},pg={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=gC(u,r),u in pg)return;pg[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const k=o[w];if(k.href===u&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":mC,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((w,k)=>{g.addEventListener("load",w),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let fl,hl;function _C(){return fl=$fetch(id(`builds/meta/${Ls().app.buildId}.json`),{responseType:"json"}),fl.then(t=>{hl=dP(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),fl}function Pc(){return fl||_C()}async function ld(t){const e=typeof t=="string"?t:t.path;if(await Pc(),!hl)return console.error("[nuxt] Error creating app manifest matcher.",hl),{};try{return UE({},...hl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function mg(t,e={}){const n=await vC(t,e),r=De(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=XE(t).then(i=>i?YE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const yC="_payload.json";async function vC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||pr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ls(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await XE(t)?i:r.app.baseURL;return Ac(o,n.pathname,yC+(s?`?${s}`:""))}async function YE(t){const e=fetch(t).then(n=>n.text().then(JE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function XE(t=ad().path){const e=De();return t=Ic(t),(await Pc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await ld({path:t});return!!r.prerender&&!r.redirect})}let ms=null;async function EC(){var r;if(ms)return ms;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await JE(t.textContent||""),n=t.dataset.src?await YE(t.dataset.src):void 0;return ms={...e,...n,...window.__NUXT__},(r=ms.config)!=null&&r.public&&(ms.config.public=hr(ms.config.public)),ms}async function JE(t){return await CP(t,De()._payloadRevivers)}function wC(t,e){De()._payloadRevivers[t]=e}const bC=[["NuxtError",t=>Sc(t)],["EmptyShallowRef",t=>Mo(t==="_"?void 0:t==="0n"?BigInt(0):qo(t))],["EmptyRef",t=>Et(t==="_"?void 0:t==="0n"?BigInt(0):qo(t))],["ShallowRef",t=>Mo(t)],["ShallowReactive",t=>er(t)],["Ref",t=>Et(t)],["Reactive",t=>hr(t)]],TC=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of bC)wC(r,s);Object.assign(t.payload,([e,n]=fi(()=>t.runWithContext(EC)),e=await e,n(),e)),window.__NUXT__=t.payload}});let IC;function AC(){return IC}function RC(t){return typeof t=="function"?t():Qe(t)}function jf(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=RC(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>jf(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=jf(e[r])}return n}return e}const SC="usehead",gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_g="__unhead_injection_handler__";function PC(){return _g in gg?gg[_g]():Nt(SC)||AC()}function yg(t,e={}){const n=e.head||PC();if(n)return n.ssr?n.push(t,e):CC(n,t,e)}function CC(t,e,n={}){const r=Et(!1),s=Et({});UA(()=>{s.value=r.value?{}:jf(e)});const i=t.push(s.value,n);return En(s,a=>{i.patch(a)}),bc()&&(ua(()=>{i.dispose()}),Vv(()=>{r.value=!0}),Mv(()=>{r.value=!1})),i}const kC=[],OC=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=fC({plugins:kC});pC(()=>De().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await QE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ys=typeof document<"u";function ZE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ZE(t.default)}const Oe=Object.assign;function Uu(t,e){const n={};for(const r in e){const s=e[r];n[r]=Tn(s)?s.map(t):t(s)}return n}const bo=()=>{},Tn=Array.isArray,ew=/#/g,NC=/&/g,DC=/\//g,LC=/=/g,MC=/\?/g,tw=/\+/g,VC=/%5B/g,FC=/%5D/g,nw=/%5E/g,UC=/%60/g,rw=/%7B/g,jC=/%7C/g,sw=/%7D/g,BC=/%20/g;function cd(t){return encodeURI(""+t).replace(jC,"|").replace(VC,"[").replace(FC,"]")}function $C(t){return cd(t).replace(rw,"{").replace(sw,"}").replace(nw,"^")}function Bf(t){return cd(t).replace(tw,"%2B").replace(BC,"+").replace(ew,"%23").replace(NC,"%26").replace(UC,"`").replace(rw,"{").replace(sw,"}").replace(nw,"^")}function HC(t){return Bf(t).replace(LC,"%3D")}function qC(t){return cd(t).replace(ew,"%23").replace(MC,"%3F")}function WC(t){return t==null?"":qC(t).replace(DC,"%2F")}function Wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zC=/\/$/,KC=t=>t.replace(zC,"");function ju(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=XC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Wo(o)}}function GC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function QC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bi(e.matched[r],n.matched[s])&&iw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function iw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!YC(t[n],e[n]))return!1;return!0}function YC(t,e){return Tn(t)?Eg(t,e):Tn(e)?Eg(e,t):t===e}function Eg(t,e){return Tn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function XC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zo;(function(t){t.pop="pop",t.push="push"})(zo||(zo={}));var To;(function(t){t.back="back",t.forward="forward",t.unknown=""})(To||(To={}));function JC(t){if(!t)if(Ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),KC(t)}const ZC=/^[^#]+#/;function e1(t,e){return t.replace(ZC,"#")+e}function t1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Cc=()=>({left:window.scrollX,top:window.scrollY});function n1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=t1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wg(t,e){return(history.state?history.state.position-e:-1)+t}const $f=new Map;function r1(t,e){$f.set(t,e)}function s1(t){const e=$f.get(t);return $f.delete(t),e}let i1=()=>location.protocol+"//"+location.host;function ow(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),vg(c,"")}return vg(n,t)+r+s}function o1(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=ow(t,location),w=n.value,k=e.value;let x=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}x=k?p.position-k.position:0}else r(g);s.forEach(N=>{N(n.value,w,{delta:x,type:zo.pop,direction:x?x>0?To.forward:To.back:To.unknown})})};function c(){o=n.value}function u(p){s.push(p);const g=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Cc()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function bg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Cc():null}}function a1(t){const{history:e,location:n}=window,r={value:ow(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:i1()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(c,u){const f=Oe({},e.state,bg(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=Oe({},s.value,e.state,{forward:c,scroll:Cc()});i(f.current,f,!0);const d=Oe({},bg(r.value,c,null),{position:f.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function l1(t){t=JC(t);const e=a1(t),n=o1(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:e1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function c1(t){return typeof t=="string"||t&&typeof t=="object"}function aw(t){return typeof t=="string"||typeof t=="symbol"}const lw=Symbol("");var Tg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Tg||(Tg={}));function Ti(t,e){return Oe(new Error,{type:t,[lw]:!0},e)}function Gn(t,e){return t instanceof Error&&lw in t&&(e==null||!!(t.type&e))}const Ig="[^/]+?",u1={sensitive:!1,strict:!1,start:!0,end:!0},f1=/[.+*?^${}()[\]/\\]/g;function h1(t,e){const n=Oe({},u1,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(f1,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:k,optional:x,regexp:N}=p;i.push({name:w,repeatable:k,optional:x});const P=N||Ig;if(P!==Ig){g+=10;try{new RegExp(`(${P})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${w}" (${P}): `+R.message)}}let y=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(y=x&&u.length<2?`(?:/${y})`:"/"+y),x&&(y+="?"),s+=y,g+=20,x&&(g+=-8),k&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",w=i[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(u){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:w,repeatable:k,optional:x}=g,N=w in u?u[w]:"";if(Tn(N)&&!k)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const P=Tn(N)?N.join("/"):N;if(!P)if(x)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);f+=P}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function d1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=d1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ag(r))return 1;if(Ag(s))return-1}return s.length-r.length}function Ag(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const p1={type:0,value:""},m1=/[a-zA-Z0-9_]/;function g1(t){if(!t)return[[]];if(t==="/")return[[p1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:m1.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function _1(t,e,n){const r=h1(g1(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function y1(t,e){const n=[],r=new Map;e=Cg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const w=!g,k=Sg(d);k.aliasOf=g&&g.record;const x=Cg(e,d),N=[k];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)N.push(Sg(Oe({},k,{components:g?g.record.components:k.components,path:D,aliasOf:g?g.record:k})))}let P,y;for(const R of N){const{path:D}=R;if(p&&D[0]!=="/"){const M=p.record.path,T=M[M.length-1]==="/"?"":"/";R.path=p.record.path+(D&&T+D)}if(P=_1(R,p,x),g?g.alias.push(P):(y=y||P,y!==P&&y.alias.push(P),w&&d.name&&!Pg(P)&&o(d.name)),uw(P)&&c(P),k.children){const M=k.children;for(let T=0;T<M.length;T++)i(M[T],P,g&&g.children[T])}g=g||P}return y?()=>{o(y)}:bo}function o(d){if(aw(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=w1(d,n);n.splice(p,0,d),d.record.name&&!Pg(d)&&r.set(d.record.name,d)}function u(d,p){let g,w={},k,x;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Ti(1,{location:d});x=g.record.name,w=Oe(Rg(p.params,g.keys.filter(y=>!y.optional).concat(g.parent?g.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&Rg(d.params,g.keys.map(y=>y.name))),k=g.stringify(w)}else if(d.path!=null)k=d.path,g=n.find(y=>y.re.test(k)),g&&(w=g.parse(k),x=g.record.name);else{if(g=p.name?r.get(p.name):n.find(y=>y.re.test(p.path)),!g)throw Ti(1,{location:d,currentLocation:p});x=g.record.name,w=Oe({},p.params,d.params),k=g.stringify(w)}const N=[];let P=g;for(;P;)N.unshift(P.record),P=P.parent;return{name:x,path:k,params:w,matched:N,meta:E1(N)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Rg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:v1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function v1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function E1(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Cg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function w1(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;cw(t,e[i])<0?r=i:n=i+1}const s=b1(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function b1(t){let e=t;for(;e=e.parent;)if(uw(e)&&cw(t,e)===0)return e}function uw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function T1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(tw," "),o=i.indexOf("="),a=Wo(o<0?i:i.slice(0,o)),c=o<0?null:Wo(i.slice(o+1));if(a in e){let u=e[a];Tn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function kg(t){let e="";for(let n in t){const r=t[n];if(n=HC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tn(r)?r.map(i=>i&&Bf(i)):[r&&Bf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function I1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const A1=Symbol(""),Og=Symbol(""),ud=Symbol(""),fd=Symbol(""),Hf=Symbol("");function so(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Ti(4,{from:n,to:e})):p instanceof Error?c(p):c1(p)?c(Ti(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function Bu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ZE(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Cr(f,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=xC(f)?f.default:f;o.mods[a]=f,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Cr(g,n,r,o,a,s)()}))}}return i}function xg(t){const e=Nt(ud),n=Nt(fd),r=Ue(()=>{const c=Qe(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(bi.bind(null,f));if(p>-1)return p;const g=Ng(c[u-2]);return u>1&&Ng(f)===g&&d[d.length-1].path!==g?d.findIndex(bi.bind(null,c[u-2])):p}),i=Ue(()=>s.value>-1&&k1(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&iw(n.params,r.value.params));function a(c={}){if(C1(c)){const u=e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(bo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function R1(t){return t.length===1?t[0]:t}const S1=An({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xg,setup(t,{slots:e}){const n=hr(xg(t)),{options:r}=Nt(ud),s=Ue(()=>({[Dg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Dg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&R1(e.default(n));return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),P1=S1;function C1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function k1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Tn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ng(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dg=(t,e,n)=>t??e??n,O1=An({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Hf),s=Ue(()=>t.route||r.value),i=Nt(Og,0),o=Ue(()=>{let u=Qe(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),a=Ue(()=>s.value.matched[o.value]);bs(Og,Ue(()=>o.value+1)),bs(A1,a),bs(Hf,s);const c=Et();return En(()=>[c.value,a.value,t.name],([u,f,d],[p,g,w])=>{f&&(f.instances[d]=u,g&&g!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),u&&f&&(!g||!bi(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=a.value,p=d&&d.components[f];if(!p)return Lg(n.default,{Component:p,route:u});const g=d.props[f],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=vt(p,Oe({},w,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Lg(n.default,{Component:x,route:u})||x}}});function Lg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fw=O1;function x1(t){const e=y1(t.routes,t),n=t.parseQuery||T1,r=t.stringifyQuery||kg,s=t.history,i=so(),o=so(),a=so(),c=Mo(mn);let u=mn;Ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Uu.bind(null,j=>""+j),d=Uu.bind(null,WC),p=Uu.bind(null,Wo);function g(j,ee){let X,re;return aw(j)?(X=e.getRecordMatcher(j),re=ee):re=j,e.addRoute(re,X)}function w(j){const ee=e.getRecordMatcher(j);ee&&e.removeRoute(ee)}function k(){return e.getRoutes().map(j=>j.record)}function x(j){return!!e.getRecordMatcher(j)}function N(j,ee){if(ee=Oe({},ee||c.value),typeof j=="string"){const O=ju(n,j,ee.path),V=e.resolve({path:O.path},ee),$=s.createHref(O.fullPath);return Oe(O,V,{params:p(V.params),hash:Wo(O.hash),redirectedFrom:void 0,href:$})}let X;if(j.path!=null)X=Oe({},j,{path:ju(n,j.path,ee.path).path});else{const O=Oe({},j.params);for(const V in O)O[V]==null&&delete O[V];X=Oe({},j,{params:d(O)}),ee.params=d(ee.params)}const re=e.resolve(X,ee),Ie=j.hash||"";re.params=f(p(re.params));const Le=GC(r,Oe({},j,{hash:$C(Ie),path:re.path})),A=s.createHref(Le);return Oe({fullPath:Le,hash:Ie,query:r===kg?I1(j.query):j.query||{}},re,{redirectedFrom:void 0,href:A})}function P(j){return typeof j=="string"?ju(n,j,c.value.path):Oe({},j)}function y(j,ee){if(u!==j)return Ti(8,{from:ee,to:j})}function R(j){return T(j)}function D(j){return R(Oe(P(j),{replace:!0}))}function M(j){const ee=j.matched[j.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(j):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=P(re):{path:re},re.params={}),Oe({query:j.query,hash:j.hash,params:re.path!=null?{}:j.params},re)}}function T(j,ee){const X=u=N(j),re=c.value,Ie=j.state,Le=j.force,A=j.replace===!0,O=M(X);if(O)return T(Oe(P(O),{state:typeof O=="object"?Oe({},Ie,O.state):Ie,force:Le,replace:A}),ee||X);const V=X;V.redirectedFrom=ee;let $;return!Le&&QC(r,re,X)&&($=Ti(16,{to:V,from:re}),tn(re,re,!0,!1)),($?Promise.resolve($):b(V,re)).catch(U=>Gn(U)?Gn(U,2)?U:dn(U):ne(U,V,re)).then(U=>{if(U){if(Gn(U,2))return T(Oe({replace:A},P(U.to),{state:typeof U.to=="object"?Oe({},Ie,U.to.state):Ie,force:Le}),ee||V)}else U=S(V,re,!0,A,Ie);return C(V,re,U),U})}function v(j,ee){const X=y(j,ee);return X?Promise.reject(X):Promise.resolve()}function _(j){const ee=gr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(j):j()}function b(j,ee){let X;const[re,Ie,Le]=N1(j,ee);X=Bu(re.reverse(),"beforeRouteLeave",j,ee);for(const O of re)O.leaveGuards.forEach(V=>{X.push(Cr(V,j,ee))});const A=v.bind(null,j,ee);return X.push(A),Ht(X).then(()=>{X=[];for(const O of i.list())X.push(Cr(O,j,ee));return X.push(A),Ht(X)}).then(()=>{X=Bu(Ie,"beforeRouteUpdate",j,ee);for(const O of Ie)O.updateGuards.forEach(V=>{X.push(Cr(V,j,ee))});return X.push(A),Ht(X)}).then(()=>{X=[];for(const O of Le)if(O.beforeEnter)if(Tn(O.beforeEnter))for(const V of O.beforeEnter)X.push(Cr(V,j,ee));else X.push(Cr(O.beforeEnter,j,ee));return X.push(A),Ht(X)}).then(()=>(j.matched.forEach(O=>O.enterCallbacks={}),X=Bu(Le,"beforeRouteEnter",j,ee,_),X.push(A),Ht(X))).then(()=>{X=[];for(const O of o.list())X.push(Cr(O,j,ee));return X.push(A),Ht(X)}).catch(O=>Gn(O,8)?O:Promise.reject(O))}function C(j,ee,X){a.list().forEach(re=>_(()=>re(j,ee,X)))}function S(j,ee,X,re,Ie){const Le=y(j,ee);if(Le)return Le;const A=ee===mn,O=Ys?history.state:{};X&&(re||A?s.replace(j.fullPath,Oe({scroll:A&&O&&O.scroll},Ie)):s.push(j.fullPath,Ie)),c.value=j,tn(j,ee,X,A),dn()}let I;function ge(){I||(I=s.listen((j,ee,X)=>{if(!Rn.listening)return;const re=N(j),Ie=M(re);if(Ie){T(Oe(Ie,{replace:!0,force:!0}),re).catch(bo);return}u=re;const Le=c.value;Ys&&r1(wg(Le.fullPath,X.delta),Cc()),b(re,Le).catch(A=>Gn(A,12)?A:Gn(A,2)?(T(Oe(P(A.to),{force:!0}),re).then(O=>{Gn(O,20)&&!X.delta&&X.type===zo.pop&&s.go(-1,!1)}).catch(bo),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(A,re,Le))).then(A=>{A=A||S(re,Le,!1),A&&(X.delta&&!Gn(A,8)?s.go(-X.delta,!1):X.type===zo.pop&&Gn(A,20)&&s.go(-1,!1)),C(re,Le,A)}).catch(bo)}))}let Ee=so(),Z=so(),se;function ne(j,ee,X){dn(j);const re=Z.list();return re.length?re.forEach(Ie=>Ie(j,ee,X)):console.error(j),Promise.reject(j)}function ze(){return se&&c.value!==mn?Promise.resolve():new Promise((j,ee)=>{Ee.add([j,ee])})}function dn(j){return se||(se=!j,ge(),Ee.list().forEach(([ee,X])=>j?X(j):ee()),Ee.reset()),j}function tn(j,ee,X,re){const{scrollBehavior:Ie}=t;if(!Ys||!Ie)return Promise.resolve();const Le=!X&&s1(wg(j.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return $n().then(()=>Ie(j,ee,Le)).then(A=>A&&n1(A)).catch(A=>ne(A,j,ee))}const Ke=j=>s.go(j);let Ge;const gr=new Set,Rn={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:N,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:ze,install(j){const ee=this;j.component("RouterLink",P1),j.component("RouterView",fw),j.config.globalProperties.$router=ee,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(c)}),Ys&&!Ge&&c.value===mn&&(Ge=!0,R(s.location).catch(Ie=>{}));const X={};for(const Ie in mn)Object.defineProperty(X,Ie,{get:()=>c.value[Ie],enumerable:!0});j.provide(ud,ee),j.provide(fd,er(X)),j.provide(Hf,c);const re=j.unmount;gr.add(j),j.unmount=function(){gr.delete(j),gr.size<1&&(u=mn,I&&I(),I=null,c.value=mn,Ge=!1,se=!1),re()}}};function Ht(j){return j.reduce((ee,X)=>ee.then(()=>_(X)),Promise.resolve())}return Rn}function N1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bi(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bi(u,c))||s.push(c))}return[n,r,s]}function D1(t){return Nt(fd)}const L1=/(:\w+)\([^)]+\)/g,M1=/(:\w+)[?+*]/g,V1=/:\w+/g,F1=(t,e)=>e.path.replace(L1,"$1").replace(M1,"$1").replace(V1,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),qf=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&F1(t.route,n));return typeof r=="function"?r(t.route):r},U1=(t,e)=>({default:()=>t?vt(hA,t===!0?{}:t,e):e});function hd(t){return Array.isArray(t)?t:[t]}const j1={middleware:"auth"},B1={middleware:"auth"},$1={middleware:"auth"};const $u=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./BU_ScFaB.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./B1YU8aXV.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./CO2zE_AI.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:j1||{},component:()=>ke(()=>import("./CBRcjFnT.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"Admin",path:"/Admin",meta:B1||{},component:()=>ke(()=>import("./Bofr1Ia-.js"),__vite__mapDeps([3,4]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./CZg0FyCp.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./BRmH9K17.js"),[],import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:$1||{},component:()=>ke(()=>import("./BqbG3uw4.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./1KG-1kBg.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./yFmgTu6t.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./an3rQ08U.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./CCf3qiUl.js"),[],import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./CVRyECpV.js"),[],import.meta.url)},{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./BgiWniQ1.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./DlucNmzQ.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./BLDbhjcP.js"),__vite__mapDeps([16,8,9,17]),import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./Cy_GPShf.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./PjxF9_Tf.js"),__vite__mapDeps([20,8,9]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./C060Diu3.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./Di9jUAMR.js"),__vite__mapDeps([21,1,22]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./BIzLcEME.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./DRBIOAQg.js"),__vite__mapDeps([23,8,9,24]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./Dp34I_o_.js"),__vite__mapDeps([25,8,9,26]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./z3SxGze6.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./DuQiC8it.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./BvnD0KnV.js"),__vite__mapDeps([29,8,9]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./CDTDCGbi.js"),__vite__mapDeps([30,8,9]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./i3ZGePk_.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./DrM7CzQJ.js"),__vite__mapDeps([31,8,9]),import.meta.url)}],hw=(t,e)=>({default:()=>{var n;return t?vt(mR,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),H1=/(:\w+)\([^)]+\)/g,q1=/(:\w+)[?+*]/g,W1=/:\w+/g;function Mg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(H1,"$1").replace(q1,"$1").replace(W1,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function z1(t,e){return t===e||e===mn?!1:Mg(t)!==Mg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const K1={scrollBehavior(t,e,n){var u;const r=De(),s=((u=wt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&z1(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Vg(t.hash),behavior:s}:!1;const a=f=>!!(f.meta.pageTransition??Of),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(f=>{r.hooks.hookOnce(c,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Vg(t.hash),behavior:s}),f(i)})})}};function Vg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const G1={hashMode:!1,scrollBehaviorType:"auto"},on={...G1,...K1},Q1=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=De(),s=wt(),i=([e,n]=fi(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Sc({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const f=s.afterEach(async()=>{f(),await r.runWithContext(()=>ni(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},Y1=async t=>{let e,n;const r=([e,n]=fi(()=>ld({path:t.path})),e=await e,n(),e);if(r.redirect)return pr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},X1=[Q1,Y1],Io={auth:()=>ke(()=>import("./BiOA2crM.js"),[],import.meta.url)};function J1(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let f=i.slice(u);return f[0]!=="/"&&(f="/"+f),Ym(f,"")}const a=Ym(r,t),c=!n||gS(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const Z1=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var x;let e,n,r=Ls().app.baseURL;const s=((x=on.history)==null?void 0:x.call(on,r))??l1(r),i=on.routes?([e,n]=fi(()=>on.routes($u)),e=await e,n(),e??$u):$u;let o;const a=x1({...on,scrollBehavior:(N,P,y)=>{if(P===mn){o=y;return}if(on.scrollBehavior){if(a.options.scrollBehavior=on.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return on.scrollBehavior(N,mn,o||y)}},history:s,routes:i});on.routes&&on.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=Mo(a.currentRoute.value);a.afterEach((N,P)=>{c.value=P}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=J1(r,window.location,t.payload.path),f=Mo(a.currentRoute.value),d=()=>{f.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((N,P)=>{var y,R,D,M;((R=(y=N.matched[0])==null?void 0:y.components)==null?void 0:R.default)===((M=(D=P.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&d()});const p={};for(const N in f.value)Object.defineProperty(p,N,{get:()=>f.value[N],enumerable:!0});t._route=er(p),t._middleware=t._middleware||{global:[],named:{}};const g=Rc();a.afterEach(async(N,P,y)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(HE),y&&await t.callHook("page:loading:end")});try{[e,n]=fi(()=>a.isReady()),await e,n()}catch(N){[e,n]=fi(()=>t.runWithContext(()=>ni(N))),await e,n()}const w=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const k=t.payload.state._layout;return a.beforeEach(async(N,P)=>{var y;await t.callHook("page:loading:start"),N.meta=hr(N.meta),t.isHydrating&&k&&!zr(N.meta.layout)&&(N.meta.layout=k),t._processingMiddleware=!0;{const R=new Set([...X1,...t._middleware.global]);for(const D of N.matched){const M=D.meta.middleware;if(M)for(const T of hd(M))R.add(T)}{const D=await t.runWithContext(()=>ld({path:N.path}));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?R.add(M):R.delete(M)}for(const D of R){const M=typeof D=="string"?t._middleware.named[D]||await((y=Io[D])==null?void 0:y.call(Io).then(v=>v.default||v)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);const T=await t.runWithContext(()=>M(N,P));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const v=T||Df({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ni(v)),!1}if(T!==!0&&(T||T===!1))return T}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(N,P)=>{N.matched.length===0&&await t.runWithContext(()=>ni(Df({statusCode:404,fatal:!1,statusMessage:`Page not found: ${N.fullPath}`,data:{path:N.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in w&&(w.name=void 0),await a.replace({...w,force:!0}),a.options.scrollBehavior=on.scrollBehavior}catch(N){await t.runWithContext(()=>ni(N))}}),{provide:{router:a}}}}),Wf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),ek=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),kc=t=>{const e=De();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Wf(()=>t())}):Wf(()=>t())},tk=Zt({name:"nuxt:payload",setup(t){wt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await mg(e.path);r&&Object.assign(t.static.data,r.data)}),kc(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await mg(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Pc,1e3)})}}),nk=Zt(()=>{const t=wt();kc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),rk=Zt(t=>{let e;async function n(){const r=await Pc();e&&clearTimeout(e),e=setTimeout(n,tg);try{const s=await $fetch(id("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}kc(()=>{e=setTimeout(n,tg)})});function sk(t={}){const e=t.path||window.location.pathname;let n={};try{n=qo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:De().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const ik=Zt({name:"nuxt:chunk-reload",setup(t){const e=wt(),n=Ls(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Ac(n.app.baseURL,i.fullPath);sk({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),ok=Zt({name:"nuxt:global-components"}),Mr={default:uA(()=>ke(()=>import("./DX3RGq4C.js"),__vite__mapDeps([32,6,1,33]),import.meta.url).then(t=>t.default||t))},ak=Zt({name:"nuxt:prefetch",setup(t){const e=wt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Mr[r]=="function"&&await Mr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(pr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=hd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Io[o]=="function"&&Io[o]();s&&typeof Mr[s]=="function"&&Mr[s]()})}}),lk=()=>{};var Fg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ck=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),r.push(n[f],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ck(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new uk;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fk=function(t){const e=dw(t);return pw.encodeByteArray(e,!0)},Hl=function(t){return fk(t).replace(/\./g,"")},mw=function(t){try{return pw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dk=()=>hk().__FIREBASE_DEFAULTS__,pk=()=>{if(typeof process>"u"||typeof Fg>"u")return;const t=Fg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mw(t[1]);return e&&JSON.parse(e)},Oc=()=>{try{return lk()||dk()||pk()||mk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gw=t=>{var e,n;return(n=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_w=t=>{const e=gw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yw=()=>{var t;return(t=Oc())===null||t===void 0?void 0:t.config},vw=t=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hl(JSON.stringify(n)),Hl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _k(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function yk(){var t;const e=(t=Oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function vk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ek(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bk(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tk(){return!yk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ik(){try{return typeof indexedDB=="object"}catch{return!1}}function Ak(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rk,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,a,r)}}function Sk(t,e){return t.replace(Pk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pk=/\{\$([^}]+)}/g;function Ck(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ug(i)&&Ug(o)){if(!Rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ug(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kk(t,e){const n=new Ok(t,e);return n.subscribe.bind(n)}class Ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hu),s.error===void 0&&(s.error=Hu),s.complete===void 0&&(s.complete=Hu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hu(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _s="[DEFAULT]";/**
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
 */class Nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lk(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dk(t){return t===_s?void 0:t}function Lk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Vk={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Fk=we.INFO,Uk={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},jk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Uk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=Fk,this._logHandler=jk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Bk=(t,e)=>e.some(n=>t instanceof n);let jg,Bg;function $k(){return jg||(jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hk(){return Bg||(Bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ww=new WeakMap,zf=new WeakMap,bw=new WeakMap,qu=new WeakMap,pd=new WeakMap;function qk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ww.set(n,t)}).catch(()=>{}),pd.set(e,t),e}function Wk(t){if(zf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zf.set(t,e)}let Kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zk(t){Kf=t(Kf)}function Kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wu(this),e,...n);return bw.set(r,e.sort?e.sort():[e]),jr(r)}:Hk().includes(t)?function(...e){return t.apply(Wu(this),e),jr(ww.get(this))}:function(...e){return jr(t.apply(Wu(this),e))}}function Gk(t){return typeof t=="function"?Kk(t):(t instanceof IDBTransaction&&Wk(t),Bk(t,$k())?new Proxy(t,Kf):t)}function jr(t){if(t instanceof IDBRequest)return qk(t);if(qu.has(t))return qu.get(t);const e=Gk(t);return e!==t&&(qu.set(t,e),pd.set(e,t)),e}const Wu=t=>pd.get(t);function Qk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jr(o.result),c.oldVersion,c.newVersion,jr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Yk=["get","getKey","getAll","getAllKeys","count"],Xk=["put","add","delete","clear"],zu=new Map;function $g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yk.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return zu.set(e,i),i}zk(t=>({...t,get:(e,n,r)=>$g(e,n)||t.get(e,n,r),has:(e,n)=>!!$g(e,n)||t.has(e,n)}));/**
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
 */class Jk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",Hg="0.11.4";/**
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
 */const or=new dd("@firebase/app"),eO="@firebase/app-compat",tO="@firebase/analytics-compat",nO="@firebase/analytics",rO="@firebase/app-check-compat",sO="@firebase/app-check",iO="@firebase/auth",oO="@firebase/auth-compat",aO="@firebase/database",lO="@firebase/data-connect",cO="@firebase/database-compat",uO="@firebase/functions",fO="@firebase/functions-compat",hO="@firebase/installations",dO="@firebase/installations-compat",pO="@firebase/messaging",mO="@firebase/messaging-compat",gO="@firebase/performance",_O="@firebase/performance-compat",yO="@firebase/remote-config",vO="@firebase/remote-config-compat",EO="@firebase/storage",wO="@firebase/storage-compat",bO="@firebase/firestore",TO="@firebase/vertexai",IO="@firebase/firestore-compat",AO="firebase",RO="11.6.0";/**
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
 */const Qf="[DEFAULT]",SO={[Gf]:"fire-core",[eO]:"fire-core-compat",[nO]:"fire-analytics",[tO]:"fire-analytics-compat",[sO]:"fire-app-check",[rO]:"fire-app-check-compat",[iO]:"fire-auth",[oO]:"fire-auth-compat",[aO]:"fire-rtdb",[lO]:"fire-data-connect",[cO]:"fire-rtdb-compat",[uO]:"fire-fn",[fO]:"fire-fn-compat",[hO]:"fire-iid",[dO]:"fire-iid-compat",[pO]:"fire-fcm",[mO]:"fire-fcm-compat",[gO]:"fire-perf",[_O]:"fire-perf-compat",[yO]:"fire-rc",[vO]:"fire-rc-compat",[EO]:"fire-gcs",[wO]:"fire-gcs-compat",[bO]:"fire-fst",[IO]:"fire-fst-compat",[TO]:"fire-vertex","fire-js":"fire-js",[AO]:"fire-js-all"};/**
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
 */const ql=new Map,PO=new Map,Yf=new Map;function qg(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(Yf.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Yf.set(e,t);for(const n of ql.values())qg(n,t);for(const n of PO.values())qg(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t==null?!1:t.settings!==void 0}/**
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
 */const CO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new da("app","Firebase",CO);/**
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
 */class kO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
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
 */const Ms=RO;function Tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Br.create("bad-app-name",{appName:String(s)});if(n||(n=yw()),!n)throw Br.create("no-options");const i=ql.get(s);if(i){if(Rs(n,i.options)&&Rs(r,i.config))return i;throw Br.create("duplicate-app",{appName:s})}const o=new Mk(s);for(const c of Yf.values())o.addComponent(c);const a=new kO(n,r,o);return ql.set(s,a),a}function md(t=Qf){const e=ql.get(t);if(!e&&t===Qf&&yw())return Tw();if(!e)throw Br.create("no-app",{appName:t});return e}function Ln(t,e,n){var r;let s=(r=SO[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Ss(new Kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OO="firebase-heartbeat-database",xO=1,Ko="firebase-heartbeat-store";let Ku=null;function Iw(){return Ku||(Ku=Qk(OO,xO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),Ku}async function NO(t){try{const n=(await Iw()).transaction(Ko),r=await n.objectStore(Ko).get(Aw(t));return await n.done,r}catch(e){if(e instanceof Hn)or.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Wg(t,e){try{const r=(await Iw()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,Aw(t)),await r.done}catch(n){if(n instanceof Hn)or.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function Aw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DO=1024,LO=30;class MO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>LO){const o=UO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zg(),{heartbeatsToSend:r,unsentEntries:s}=VO(this._heartbeatsCache.heartbeats),i=Hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function zg(){return new Date().toISOString().substring(0,10)}function VO(t,e=DO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ik()?Ak().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kg(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}function UO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jO(t){Ss(new Kr("platform-logger",e=>new Jk(e),"PRIVATE")),Ss(new Kr("heartbeat",e=>new MO(e),"PRIVATE")),Ln(Gf,Hg,t),Ln(Gf,Hg,"esm2017"),Ln("fire-js","")}jO("");var BO="firebase",$O="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(BO,$O,"app");function gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HO=Rw,Sw=new da("auth","Firebase",Rw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new dd("@firebase/auth");function qO(t,...e){Wl.logLevel<=we.WARN&&Wl.warn(`Auth (${Ms}): ${t}`,...e)}function dl(t,...e){Wl.logLevel<=we.ERROR&&Wl.error(`Auth (${Ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw _d(t,...e)}function Mn(t,...e){return _d(t,...e)}function Pw(t,e,n){const r=Object.assign(Object.assign({},HO()),{[e]:n});return new da("auth","Firebase",r).create(e,{appName:t.name})}function $r(t){return Pw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sw.create(t,...e)}function de(t,e,...n){if(!t)throw _d(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dl(e),new Error(e)}function ar(t,e){t||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WO(){return Gg()==="http:"||Gg()==="https:"}function Gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WO()||Ek()||"connection"in navigator)?navigator.onLine:!0}function KO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=_k()||wk()}get(){return zO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YO=new ma(3e4,6e4);function Vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function is(t,e,n,r,s={}){return kw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=pa(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return vk()||(u.referrerPolicy="no-referrer"),Cw.fetch()(await Ow(t,t.config.apiHost,n,a),u)})}async function kw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GO),e);try{const s=new JO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ya(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pw(t,f,u);In(t,f)}}catch(s){if(s instanceof Hn)throw s;In(t,"network-request-failed",{message:String(s)})}}async function Nc(t,e,n,r,s={}){const i=await is(t,e,n,r,s);return"mfaPendingCredential"in i&&In(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ow(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?yd(t.config,s):`${t.config.apiScheme}://${s}`;return QO.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function XO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),YO.get())})}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mn(t,e,r);return s.customData._tokenResponse=n,s}function Qg(t){return t!==void 0&&t.enterprise!==void 0}class ZO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ex(t,e){return is(t,"GET","/v2/recaptchaConfig",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e){return is(t,"POST","/v1/accounts:delete",e)}async function zl(t,e){return is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nx(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=vd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ao(Gu(s.auth_time)),issuedAtTime:Ao(Gu(s.iat)),expirationTime:Ao(Gu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gu(t){return Number(t)*1e3}function vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dl("JWT malformed, contained fewer than 3 sections"),null;try{const s=mw(n);return s?JSON.parse(s):(dl("Failed to decode base64 JWT payload"),null)}catch(s){return dl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yg(t){const e=vd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&rx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Go(t,zl(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xw(i.providerUserInfo):[],a=ox(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jf(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function ix(t){const e=Ze(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ox(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xw(t){return t.map(e=>{var{providerId:n}=e,r=gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(t,e){const n=await kw(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ow(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lx(t,e){return is(t,"POST","/v2/accounts:revokeToken",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Yg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ax(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Go(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nx(this,e)}reload(){return ix(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject($r(this.auth));const e=await this.getIdToken();return await Go(this,tx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:y,emailVerified:R,isAnonymous:D,providerData:M,stsTokenManager:T}=n;de(y&&T,e,"internal-error");const v=hi.fromJSON(this.name,T);de(typeof y=="string",e,"internal-error"),br(d,e.name),br(p,e.name),de(typeof R=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),br(g,e.name),br(w,e.name),br(k,e.name),br(x,e.name),br(N,e.name),br(P,e.name);const _=new yn({uid:y,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:w,phoneNumber:g,tenantId:k,stsTokenManager:v,createdAt:N,lastLoginAt:P});return M&&Array.isArray(M)&&(_.providerData=M.map(b=>Object.assign({},b))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new hi;a.updateFromIdToken(r);const c=new yn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=new Map;function nr(t){ar(t instanceof Function,"Expected a class definition");let e=Xg.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xg.set(t,e),e)}/**
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
 */class Nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nw.type="NONE";const Jg=Nw;/**
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
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pl(this.userKey,s.apiKey,i),this.fullPersistenceKey=pl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zl(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(nr(Jg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nr(Jg);const o=pl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const p=await zl(e,{idToken:f}).catch(()=>{});if(!p)break;d=await yn._fromGetAccountInfoResponse(e,p,f)}else d=yn._fromJSON(e,f);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new di(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new di(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uw(e))return"Blackberry";if(jw(e))return"Webos";if(Lw(e))return"Safari";if((e.includes("chrome/")||Mw(e))&&!e.includes("edge/"))return"Chrome";if(Fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dw(t=Dt()){return/firefox\//i.test(t)}function Lw(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mw(t=Dt()){return/crios\//i.test(t)}function Vw(t=Dt()){return/iemobile/i.test(t)}function Fw(t=Dt()){return/android/i.test(t)}function Uw(t=Dt()){return/blackberry/i.test(t)}function jw(t=Dt()){return/webos/i.test(t)}function Ed(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cx(t=Dt()){var e;return Ed(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ux(){return bk()&&document.documentMode===10}function Bw(t=Dt()){return Ed(t)||Fw(t)||jw(t)||Uw(t)||/windows phone/i.test(t)||Vw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t,e=[]){let n;switch(t){case"Browser":n=Zg(Dt());break;case"Worker":n=`${Zg(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
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
 */class fx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hx(t,e={}){return is(t,"GET","/v2/passwordPolicy",Vs(t,e))}/**
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
 */const dx=6;class px{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new e_(this),this.idTokenSubscription=new e_(this),this.beforeStateQueue=new fx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zl(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject($r(this));const n=e?Ze(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject($r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject($r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hx(this),n=new px(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new da("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$w(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vi(t){return Ze(t)}class e_{constructor(e){this.auth=e,this.observer=null,this.addObserver=kk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gx(t){Dc=t}function Hw(t){return Dc.loadJS(t)}function _x(){return Dc.recaptchaEnterpriseScript}function yx(){return Dc.gapiScript}function vx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ex{constructor(){this.enterprise=new wx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bx="recaptcha-enterprise",qw="NO_RECAPTCHA";class Tx{constructor(e){this.type=bx,this.auth=Vi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ex(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZO(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Qg(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(qw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ex().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Qg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_x();c.length!==0&&(c+=a),Hw(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function t_(t,e,n,r=!1,s=!1){const i=new Tx(t);let o;if(s)o=qw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function n_(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await t_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await t_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e){const n=xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rs(i,e??{}))return s;In(s,"already-initialized")}return n.initialize({options:e})}function Ax(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Rx(t,e,n){const r=Vi(t);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ww(e),{host:o,port:a}=Sx(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Rs(u,r.config.emulator)&&Rs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Px()}function Ww(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sx(t){const e=Ww(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:r_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:r_(o)}}}function r_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Px(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function Cx(t,e){return is(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e){return Nc(t,"POST","/v1/accounts:signInWithPassword",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e){return Nc(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}async function xx(t,e){return Nc(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends wd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return n_(e,n,"signInWithPassword",kx);case"emailLink":return Ox(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return n_(e,r,"signUpPassword",Cx);case"emailLink":return xx(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e){return Nc(t,"POST","/v1/accounts:signInWithIdp",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="http://localhost";class Ps extends wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:Nx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lx(t){const e=lo(co(t)).link,n=e?lo(co(e)).deep_link_id:null,r=lo(co(t)).deep_link_id;return(r?lo(co(r)).link:null)||r||n||e||t}class bd{constructor(e){var n,r,s,i,o,a;const c=lo(co(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Dx((s=c.mode)!==null&&s!==void 0?s:null);de(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lx(e);try{return new bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.providerId=Fi.PROVIDER_ID}static credential(e,n){return Qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bd.parseLink(n);return de(r,"argument-error"),Qo._fromEmailAndCode(e,r.code,r.tenantId)}}Fi.PROVIDER_ID="password";Fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends zw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends ga{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ps._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ga{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends ga{constructor(){super("twitter.com")}static credential(e,n){return Ps._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=s_(r);return new Ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=s_(r);return new Ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function s_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gl(e,n,r,s)}}function Kw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,i,e,r):i})}async function Mx(t,e,n=!1){const r=await Go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",r)}/**
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
 */async function Vx(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject($r(r));const s="reauthenticate";try{const i=await Go(t,Kw(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=vd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&In(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e,n=!1){if(ln(t.app))return Promise.reject($r(t));const r="signIn",s=await Kw(t,r,e),i=await Ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Fx(t,e){return Gw(Vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(t){const e=Vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function jx(t,e,n){return ln(t.app)?Promise.reject($r(t)):Fx(Ze(t),Fi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ux(t),r})}function Bx(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function $x(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function Hx(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function qx(t){return Ze(t).signOut()}const Ql="__sak";/**
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
 */class Qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=1e3,zx=10;class Yw extends Qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ux()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yw.type="LOCAL";const Kx=Yw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw extends Qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xw.type="SESSION";const Jw=Xw;/**
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
 */function Gx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Gx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Td("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Yx(t){Vn().location.href=t}/**
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
 */function Zw(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function Xx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zx(){return Zw()?self:null}/**
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
 */const eb="firebaseLocalStorageDb",eN=1,Yl="firebaseLocalStorage",tb="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mc(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function tN(){const t=indexedDB.deleteDatabase(eb);return new _a(t).toPromise()}function Zf(){const t=indexedDB.open(eb,eN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:tb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await tN(),e(await Zf()))})})}async function i_(t,e,n){const r=Mc(t,!0).put({[tb]:e,value:n});return new _a(r).toPromise()}async function nN(t,e){const n=Mc(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function o_(t,e){const n=Mc(t,!0).delete(e);return new _a(n).toPromise()}const rN=800,sN=3;class nb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(Zx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xx(),!this.activeServiceWorker)return;this.sender=new Qx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zf();return await i_(e,Ql,"1"),await o_(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>i_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>o_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mc(s,!1).getAll();return new _a(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nb.type="LOCAL";const iN=nb;new ma(3e4,6e4);/**
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
 */function oN(t,e){return e?nr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Id extends wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aN(t){return Gw(t.auth,new Id(t),t.bypassAuthState)}function lN(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Vx(n,new Id(t),t.bypassAuthState)}async function cN(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Mx(n,new Id(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aN;case"linkViaPopup":case"linkViaRedirect":return cN;case"reauthViaPopup":case"reauthViaRedirect":return lN;default:In(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new ma(2e3,1e4);class ri extends rb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=Td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uN.get())};e()}}ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="pendingRedirect",ml=new Map;class hN extends rb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const r=await dN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dN(t,e){const n=gN(e),r=mN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pN(t,e){ml.set(t._key(),e)}function mN(t){return nr(t._redirectPersistence)}function gN(t){return pl(fN,t.config.apiKey,t.name)}async function _N(t,e,n=!1){if(ln(t.app))return Promise.reject($r(t));const r=Vi(t),s=oN(r,e),o=await new hN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=10*60*1e3;class vN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yN&&this.cachedEventUids.clear(),this.cachedEventUids.has(a_(e))}saveEventToCache(e){this.cachedEventUids.add(a_(e)),this.lastProcessedEventTime=Date.now()}}function a_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e={}){return is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TN=/^https?/;async function IN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wN(t);for(const n of e)try{if(AN(n))return}catch{}In(t,"unauthorized-domain")}function AN(t){const e=Xf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TN.test(n))return!1;if(bN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const RN=new ma(3e4,6e4);function l_(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SN(t){return new Promise((e,n)=>{var r,s,i;function o(){l_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{l_(),n(Mn(t,"network-request-failed"))},timeout:RN.get()})}if(!((s=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Vn().gapi)===null||i===void 0)&&i.load)o();else{const a=vx("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},Hw(`${yx()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gl=null,e})}let gl=null;function PN(t){return gl=gl||SN(t),gl}/**
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
 */const CN=new ma(5e3,15e3),kN="__/auth/iframe",ON="emulator/auth/iframe",xN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yd(e,ON):`https://${t.config.authDomain}/${kN}`,r={apiKey:e.apiKey,appName:t.name,v:Ms},s=NN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pa(r).slice(1)}`}async function LN(t){const e=await PN(t),n=Vn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:DN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=Vn().setTimeout(()=>{i(o)},CN.get());function c(){Vn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const MN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VN=500,FN=600,UN="_blank",jN="http://localhost";class c_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BN(t,e,n,r=VN,s=FN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},MN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=Mw(u)?UN:n),Dw(u)&&(e=e||jN,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(cx(u)&&a!=="_self")return $N(e||"",a),new c_(null);const d=window.open(e||"",a,f);de(d,t,"popup-blocked");try{d.focus()}catch{}return new c_(d)}function $N(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HN="__/auth/handler",qN="emulator/auth/handler",WN=encodeURIComponent("fac");async function u_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ms,eventId:s};if(e instanceof zw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ck(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof ga){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?`#${WN}=${encodeURIComponent(c)}`:"";return`${zN(t)}?${pa(a).slice(1)}${u}`}function zN({config:t}){return t.emulator?yd(t,qN):`https://${t.authDomain}/${HN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="webStorageSupport";class KN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jw,this._completeRedirectFn=_N,this._overrideRedirectResult=pN}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await u_(e,n,r,Xf(),s);return BN(e,o,Td())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await u_(e,n,r,Xf(),s);return Yx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LN(e),r=new vN(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qu,{type:Qu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qu];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||Lw()||Ed()}}const GN=KN;var f_="@firebase/auth",h_="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XN(t){Ss(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$w(t)},u=new mx(r,s,i,c);return Ax(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new Kr("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(r=>new QN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(f_,h_,YN(t)),Ln(f_,h_,"esm2017")}/**
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
 */const JN=5*60,ZN=vw("authIdTokenMaxAge")||JN;let d_=null;const e2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZN)return;const s=n==null?void 0:n.token;d_!==s&&(d_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function t2(t=md()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ix(t,{popupRedirectResolver:GN,persistence:[iN,Kx,Jw]}),r=vw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=e2(i.toString());$x(n,o,()=>o(n.currentUser)),Bx(n,a=>o(a))}}const s=gw("auth");return s&&Rx(n,`http://${s}`),n}function n2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",n2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XN("Browser");function gn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=gn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:gn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=gn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=gn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(gn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(gn(i),gn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(gn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const r2={path:"/",watch:!0,decode:t=>qo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Xa=window.cookieStore;function s2(t,e){var c;const n={...r2,...e};n.filter??(n.filter=u=>u===t);const r=p_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=gn(i?void 0:r[t]??((c=n.default)==null?void 0:c.call(n))),a=s&&!i?a2(o,s,n.watch&&n.watch!=="shallow"):Et(o);{let u=null;try{!Xa&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const f=()=>{n.readonly||fP(a.value,r[t])||(o2(t,a.value,n),r[t]=gn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=w=>{var x;const k=w.refresh?(x=p_(n))==null?void 0:x[t]:n.decode(w.value);p=!0,a.value=k,r[t]=gn(k),$n(()=>{p=!1})};let p=!1;const g=!!aa();if(g&&Rl(()=>{p=!0,f(),u==null||u.close()}),Xa){const w=k=>{const x=k.changed.find(P=>P.name===t),N=k.deleted.find(P=>P.name===t);x&&d({value:x.value}),N&&d({value:null})};Xa.addEventListener("change",w),g&&Rl(()=>Xa.removeEventListener("change",w))}else u&&(u.onmessage=({data:w})=>d(w));n.watch?En(a,()=>{p||f()},{deep:n.watch!=="shallow"}):f()}return a}function p_(t={}){return iP(document.cookie,t)}function i2(t,e,n={}){return e==null?rg(t,e,{...n,maxAge:-1}):rg(t,e,n)}function o2(t,e,n={}){document.cookie=i2(t,e,n)}const m_=2147483647;function a2(t,e,n){let r,s,i=0;const o=n?Et(t):{value:t};return aa()&&Rl(()=>{s==null||s(),clearTimeout(r)}),qI((a,c)=>{n&&(s=En(o,c));function u(){i=0,clearTimeout(r);const f=e-i,d=f<m_?f:m_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,c()},d)}return{get(){return a(),o.value},set(f){u(),o.value=f,c()}}})}async function ib(t,e=wt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>ib(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const l2=(...t)=>t.find(e=>e!==void 0);function c2(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return g_(i,t.trailingSlash);const a="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:g_(a,t.trailingSlash)}}function s(i){const o=wt(),a=Ls(),c=Ue(()=>!!i.target&&i.target!=="_self"),u=Ue(()=>{const x=i.to||i.href||"";return typeof x=="string"&&pr(x,{acceptRelative:!0})}),f=Uo("RouterLink"),d=f&&typeof f!="string"?f.useLink:void 0,p=Ue(()=>{if(i.external)return!0;const x=i.to||i.href||"";return typeof x=="object"?!1:x===""||u.value}),g=Ue(()=>{const x=i.to||i.href||"";return p.value?x:r(x,o.resolve)}),w=p.value||d==null?void 0:d({...i,to:g}),k=Ue(()=>{var x;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const N=typeof g.value=="object"&&"path"in g.value?Mf(g.value):g.value,P=typeof N=="object"?o.resolve(N).href:N;return r(P,o.resolve)}return typeof g.value=="object"?((x=o.resolve(g.value))==null?void 0:x.href)??null:r(Ac(a.app.baseURL,g.value),o.resolve)});return{to:g,hasTarget:c,isAbsoluteUrl:u,isExternal:p,href:k,isActive:(w==null?void 0:w.isActive)??Ue(()=>g.value===o.currentRoute.value.path),isExactActive:(w==null?void 0:w.isExactActive)??Ue(()=>g.value===o.currentRoute.value.path),route:(w==null?void 0:w.route)??Ue(()=>o.resolve(g.value)),async navigate(){await vP(k.value,{replace:i.replace,external:p.value||c.value})}}}return An({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=wt(),{to:c,href:u,navigate:f,isExternal:d,hasTarget:p,isAbsoluteUrl:g}=s(i),w=Et(!1),k=Et(null),x=y=>{var R;k.value=i.custom?(R=y==null?void 0:y.$el)==null?void 0:R.nextElementSibling:y==null?void 0:y.$el};function N(y){var R,D;return!w.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===y:((R=i.prefetchOn)==null?void 0:R[y])??((D=t.prefetchOn)==null?void 0:D[y]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!d2()}async function P(y=De()){if(w.value)return;w.value=!0;const R=typeof c.value=="string"?c.value:d.value?Mf(c.value):a.resolve(c.value).fullPath,D=d.value?new URL(R,window.location.href).href:R;await Promise.all([y.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&ib(c.value,a).catch(()=>{})])}if(N("visibility")){const y=De();let R,D=null;vc(()=>{const M=f2();kc(()=>{R=Wf(()=>{var T;(T=k==null?void 0:k.value)!=null&&T.tagName&&(D=M.observe(k.value,async()=>{D==null||D(),D=null,await P(y)}))})})}),ua(()=>{R&&ek(R),D==null||D(),D=null})}return()=>{var D;if(!d.value&&!p.value&&!n(c.value)){const M={ref:x,to:c.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(N("interaction")&&(M.onPointerenter=P.bind(null,void 0),M.onFocus=P.bind(null,void 0)),w.value&&(M.class=i.prefetchedClass||t.prefetchedClass),M.rel=i.rel||void 0),vt(Uo("RouterLink"),M,o.default)}const y=i.target||null,R=l2(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:f,prefetch:P,get route(){if(!u.value)return;const M=new URL(u.value,window.location.href);return{path:M.pathname,fullPath:M.pathname,get query(){return AE(M.search)},hash:M.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:R,target:y,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:vt("a",{ref:k,href:u.value||null,rel:R,target:y},(D=o.default)==null?void 0:D.call(o))}}})}const u2=c2(QS);function g_(t,e){const n=e==="append"?Vl:Ic;return pr(t)&&!t.startsWith("http")?t:n(t,!0)}function f2(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const c of a){const u=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const h2=/2g/;function d2(){const t=navigator.connection;return!!(t&&(t.saveData||h2.test(t.effectiveType)))}var __=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,ob;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function _(){}_.prototype=v.prototype,T.D=v.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(b,C,S){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return v.prototype[C].apply(b,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,_){_||(_=0);var b=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)b[C]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(C=0;16>C;++C)b[C]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=T.g[0],_=T.g[1],C=T.g[2];var S=T.g[3],I=v+(S^_&(C^S))+b[0]+3614090360&4294967295;v=_+(I<<7&4294967295|I>>>25),I=S+(C^v&(_^C))+b[1]+3905402710&4294967295,S=v+(I<<12&4294967295|I>>>20),I=C+(_^S&(v^_))+b[2]+606105819&4294967295,C=S+(I<<17&4294967295|I>>>15),I=_+(v^C&(S^v))+b[3]+3250441966&4294967295,_=C+(I<<22&4294967295|I>>>10),I=v+(S^_&(C^S))+b[4]+4118548399&4294967295,v=_+(I<<7&4294967295|I>>>25),I=S+(C^v&(_^C))+b[5]+1200080426&4294967295,S=v+(I<<12&4294967295|I>>>20),I=C+(_^S&(v^_))+b[6]+2821735955&4294967295,C=S+(I<<17&4294967295|I>>>15),I=_+(v^C&(S^v))+b[7]+4249261313&4294967295,_=C+(I<<22&4294967295|I>>>10),I=v+(S^_&(C^S))+b[8]+1770035416&4294967295,v=_+(I<<7&4294967295|I>>>25),I=S+(C^v&(_^C))+b[9]+2336552879&4294967295,S=v+(I<<12&4294967295|I>>>20),I=C+(_^S&(v^_))+b[10]+4294925233&4294967295,C=S+(I<<17&4294967295|I>>>15),I=_+(v^C&(S^v))+b[11]+2304563134&4294967295,_=C+(I<<22&4294967295|I>>>10),I=v+(S^_&(C^S))+b[12]+1804603682&4294967295,v=_+(I<<7&4294967295|I>>>25),I=S+(C^v&(_^C))+b[13]+4254626195&4294967295,S=v+(I<<12&4294967295|I>>>20),I=C+(_^S&(v^_))+b[14]+2792965006&4294967295,C=S+(I<<17&4294967295|I>>>15),I=_+(v^C&(S^v))+b[15]+1236535329&4294967295,_=C+(I<<22&4294967295|I>>>10),I=v+(C^S&(_^C))+b[1]+4129170786&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^C&(v^_))+b[6]+3225465664&4294967295,S=v+(I<<9&4294967295|I>>>23),I=C+(v^_&(S^v))+b[11]+643717713&4294967295,C=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(C^S))+b[0]+3921069994&4294967295,_=C+(I<<20&4294967295|I>>>12),I=v+(C^S&(_^C))+b[5]+3593408605&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^C&(v^_))+b[10]+38016083&4294967295,S=v+(I<<9&4294967295|I>>>23),I=C+(v^_&(S^v))+b[15]+3634488961&4294967295,C=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(C^S))+b[4]+3889429448&4294967295,_=C+(I<<20&4294967295|I>>>12),I=v+(C^S&(_^C))+b[9]+568446438&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^C&(v^_))+b[14]+3275163606&4294967295,S=v+(I<<9&4294967295|I>>>23),I=C+(v^_&(S^v))+b[3]+4107603335&4294967295,C=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(C^S))+b[8]+1163531501&4294967295,_=C+(I<<20&4294967295|I>>>12),I=v+(C^S&(_^C))+b[13]+2850285829&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^C&(v^_))+b[2]+4243563512&4294967295,S=v+(I<<9&4294967295|I>>>23),I=C+(v^_&(S^v))+b[7]+1735328473&4294967295,C=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(C^S))+b[12]+2368359562&4294967295,_=C+(I<<20&4294967295|I>>>12),I=v+(_^C^S)+b[5]+4294588738&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^C)+b[8]+2272392833&4294967295,S=v+(I<<11&4294967295|I>>>21),I=C+(S^v^_)+b[11]+1839030562&4294967295,C=S+(I<<16&4294967295|I>>>16),I=_+(C^S^v)+b[14]+4259657740&4294967295,_=C+(I<<23&4294967295|I>>>9),I=v+(_^C^S)+b[1]+2763975236&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^C)+b[4]+1272893353&4294967295,S=v+(I<<11&4294967295|I>>>21),I=C+(S^v^_)+b[7]+4139469664&4294967295,C=S+(I<<16&4294967295|I>>>16),I=_+(C^S^v)+b[10]+3200236656&4294967295,_=C+(I<<23&4294967295|I>>>9),I=v+(_^C^S)+b[13]+681279174&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^C)+b[0]+3936430074&4294967295,S=v+(I<<11&4294967295|I>>>21),I=C+(S^v^_)+b[3]+3572445317&4294967295,C=S+(I<<16&4294967295|I>>>16),I=_+(C^S^v)+b[6]+76029189&4294967295,_=C+(I<<23&4294967295|I>>>9),I=v+(_^C^S)+b[9]+3654602809&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^C)+b[12]+3873151461&4294967295,S=v+(I<<11&4294967295|I>>>21),I=C+(S^v^_)+b[15]+530742520&4294967295,C=S+(I<<16&4294967295|I>>>16),I=_+(C^S^v)+b[2]+3299628645&4294967295,_=C+(I<<23&4294967295|I>>>9),I=v+(C^(_|~S))+b[0]+4096336452&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~C))+b[7]+1126891415&4294967295,S=v+(I<<10&4294967295|I>>>22),I=C+(v^(S|~_))+b[14]+2878612391&4294967295,C=S+(I<<15&4294967295|I>>>17),I=_+(S^(C|~v))+b[5]+4237533241&4294967295,_=C+(I<<21&4294967295|I>>>11),I=v+(C^(_|~S))+b[12]+1700485571&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~C))+b[3]+2399980690&4294967295,S=v+(I<<10&4294967295|I>>>22),I=C+(v^(S|~_))+b[10]+4293915773&4294967295,C=S+(I<<15&4294967295|I>>>17),I=_+(S^(C|~v))+b[1]+2240044497&4294967295,_=C+(I<<21&4294967295|I>>>11),I=v+(C^(_|~S))+b[8]+1873313359&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~C))+b[15]+4264355552&4294967295,S=v+(I<<10&4294967295|I>>>22),I=C+(v^(S|~_))+b[6]+2734768916&4294967295,C=S+(I<<15&4294967295|I>>>17),I=_+(S^(C|~v))+b[13]+1309151649&4294967295,_=C+(I<<21&4294967295|I>>>11),I=v+(C^(_|~S))+b[4]+4149444226&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~C))+b[11]+3174756917&4294967295,S=v+(I<<10&4294967295|I>>>22),I=C+(v^(S|~_))+b[2]+718787259&4294967295,C=S+(I<<15&4294967295|I>>>17),I=_+(S^(C|~v))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var _=v-this.blockSize,b=this.B,C=this.h,S=0;S<v;){if(C==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<v;)if(b[C++]=T.charCodeAt(S++),C==this.blockSize){s(this,b),C=0;break}}else for(;S<v;)if(b[C++]=T[S++],C==this.blockSize){s(this,b),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var _=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.u(T),T=Array(16),v=_=0;4>v;++v)for(var b=0;32>b;b+=8)T[_++]=this.g[v]>>>b&255;return T};function i(T,v){var _=a;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=v(T)}function o(T,v){this.h=v;for(var _=[],b=!0,C=T.length-1;0<=C;C--){var S=T[C]|0;b&&S==v||(_[C]=S,b=!1)}this.g=_}var a={};function c(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return x(u(-T));for(var v=[],_=1,b=0;T>=_;b++)v[b]=T/_|0,_*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return x(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),b=d,C=0;C<T.length;C+=8){var S=Math.min(8,T.length-C),I=parseInt(T.substring(C,C+S),v);8>S?(S=u(Math.pow(v,S)),b=b.j(S).add(u(I))):(b=b.j(_),b=b.add(u(I)))}return b}var d=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var T=0,v=1,_=0;_<this.g.length;_++){var b=this.i(_);T+=(0<=b?b:4294967296+b)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w(this))return"0";if(k(this))return"-"+x(this).toString(T);for(var v=u(Math.pow(T,6)),_=this,b="";;){var C=R(_,v).g;_=N(_,C.j(v));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=C,w(_))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function w(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=N(this,T),k(T)?-1:w(T)?0:1};function x(T){for(var v=T.g.length,_=[],b=0;b<v;b++)_[b]=~T.g[b];return new o(_,~T.h).add(p)}t.abs=function(){return k(this)?x(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0,C=0;C<=v;C++){var S=b+(this.i(C)&65535)+(T.i(C)&65535),I=(S>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);b=I>>>16,S&=65535,I&=65535,_[C]=I<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function N(T,v){return T.add(x(v))}t.j=function(T){if(w(this)||w(T))return d;if(k(this))return k(T)?x(this).j(x(T)):x(x(this).j(T));if(k(T))return x(this.j(x(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,_=[],b=0;b<2*v;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var C=0;C<T.g.length;C++){var S=this.i(b)>>>16,I=this.i(b)&65535,ge=T.i(C)>>>16,Ee=T.i(C)&65535;_[2*b+2*C]+=I*Ee,P(_,2*b+2*C),_[2*b+2*C+1]+=S*Ee,P(_,2*b+2*C+1),_[2*b+2*C+1]+=I*ge,P(_,2*b+2*C+1),_[2*b+2*C+2]+=S*ge,P(_,2*b+2*C+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function P(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function y(T,v){this.g=T,this.h=v}function R(T,v){if(w(v))throw Error("division by zero");if(w(T))return new y(d,d);if(k(T))return v=R(x(T),v),new y(x(v.g),x(v.h));if(k(v))return v=R(T,x(v)),new y(x(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var _=p,b=v;0>=b.l(T);)_=D(_),b=D(b);var C=M(_,1),S=M(b,1);for(b=M(b,2),_=M(_,2);!w(b);){var I=S.add(b);0>=I.l(T)&&(C=C.add(_),S=I),b=M(b,1),_=M(_,1)}return v=N(T,C.j(v)),new y(C,v)}for(C=d;0<=T.l(v);){for(_=Math.max(1,Math.floor(T.m()/v.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=u(_),I=S.j(v);k(I)||0<I.l(T);)_-=b,S=u(_),I=S.j(v);w(S)&&(S=p),C=C.add(S),T=N(T,I)}return new y(C,T)}t.A=function(T){return R(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)&T.i(b);return new o(_,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)|T.i(b);return new o(_,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)^T.i(b);return new o(_,this.h^T.h)};function D(T){for(var v=T.g.length+1,_=[],b=0;b<v;b++)_[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(_,T.h)}function M(T,v){var _=v>>5;v%=32;for(var b=T.g.length-_,C=[],S=0;S<b;S++)C[S]=0<v?T.i(S+_)>>>v|T.i(S+_+1)<<32-v:T.i(S+_);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ob=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Hr=o}).apply(typeof __<"u"?__:typeof self<"u"?self:typeof window<"u"?window:{});var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ab,uo,lb,_l,eh,cb,ub,fb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ja=="object"&&Ja];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var m=r;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in m))break e;m=m[L]}l=l[l.length-1],E=m[l],h=h(E),h!=E&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function i(l,h){l instanceof String&&(l+="");var m=0,E=!1,L={next:function(){if(!E&&m<l.length){var F=m++;return{value:h(F,l[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(l){return l||function(){return i(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,m){return l.call.apply(l.bind,arguments)}function d(l,h,m){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(h,L)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,p.apply(null,arguments)}function g(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function w(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(E,L,F){for(var Q=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Q[Ve-2]=arguments[Ve];return h.prototype[L].apply(E,Q)}}function k(l){const h=l.length;if(0<h){const m=Array(h);for(let E=0;E<h;E++)m[E]=l[E];return m}return[]}function x(l,h){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(c(E)){const L=l.length||0,F=E.length||0;l.length=L+F;for(let Q=0;Q<F;Q++)l[L+Q]=E[Q]}else l.push(E)}}class N{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(l){return/^[\s\xa0]*$/.test(l)}function y(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function R(l){return R[" "](l),l}R[" "]=function(){};var D=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function M(l,h,m){for(const E in l)h.call(m,l[E],E,l)}function T(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function v(l){const h={};for(const m in l)h[m]=l[m];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,h){let m,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(m in E)l[m]=E[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(E,m)&&(l[m]=E[m])}}function C(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function S(l){a.setTimeout(()=>{throw l},0)}function I(){var l=ze;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ge{constructor(){this.h=this.g=null}add(h,m){const E=Ee.get();E.set(h,m),this.h?this.h.next=E:this.g=E,this.h=E}}var Ee=new N(()=>new Z,l=>l.reset());class Z{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,ze=new ge,dn=()=>{const l=a.Promise.resolve(void 0);se=()=>{l.then(tn)}};var tn=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(m){S(m)}var h=Ee;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}ne=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var gr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Rn(l,h){if(Ge.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(D){e:{try{R(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ht[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Rn.aa.h.call(this)}}w(Rn,Ge);var Ht={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(l,h,m,E,L){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!E,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,h,m,E,L){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var Q=A(l,h,E,L);return-1<Q?(h=l[Q],m||(h.fa=!1)):(h=new X(h,this.src,F,!!E,L),h.fa=m,l.push(h)),h};function Le(l,h){var m=h.type;if(m in l.g){var E=l.g[m],L=Array.prototype.indexOf.call(E,h,void 0),F;(F=0<=L)&&Array.prototype.splice.call(E,L,1),F&&(re(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function A(l,h,m,E){for(var L=0;L<l.length;++L){var F=l[L];if(!F.da&&F.listener==h&&F.capture==!!m&&F.ha==E)return L}return-1}var O="closure_lm_"+(1e6*Math.random()|0),V={};function $(l,h,m,E,L){if(Array.isArray(h)){for(var F=0;F<h.length;F++)$(l,h[F],m,E,L);return null}return m=oe(m),l&&l[j]?l.K(h,m,u(E)?!!E.capture:!1,L):U(l,h,m,!1,E,L)}function U(l,h,m,E,L,F){if(!h)throw Error("Invalid event type");var Q=u(L)?!!L.capture:!!L,Ve=ue(l);if(Ve||(l[O]=Ve=new Ie(l)),m=Ve.add(h,m,E,Q,F),m.proxy)return m;if(E=q(),m.proxy=E,E.src=l,E.listener=m,l.addEventListener)gr||(L=Q),L===void 0&&(L=!1),l.addEventListener(h.toString(),E,L);else if(l.attachEvent)l.attachEvent(K(h.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function l(m){return h.call(l.src,l.listener,m)}const h=W;return l}function Y(l,h,m,E,L){if(Array.isArray(h))for(var F=0;F<h.length;F++)Y(l,h[F],m,E,L);else E=u(E)?!!E.capture:!!E,m=oe(m),l&&l[j]?(l=l.i,h=String(h).toString(),h in l.g&&(F=l.g[h],m=A(F,m,E,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[h],l.h--)))):l&&(l=ue(l))&&(h=l.g[h.toString()],l=-1,h&&(l=A(h,m,E,L)),(m=-1<l?h[l]:null)&&G(m))}function G(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[j])Le(h.i,l);else{var m=l.type,E=l.proxy;h.removeEventListener?h.removeEventListener(m,E,l.capture):h.detachEvent?h.detachEvent(K(m),E):h.addListener&&h.removeListener&&h.removeListener(E),(m=ue(h))?(Le(m,l),m.h==0&&(m.src=null,h[O]=null)):re(l)}}}function K(l){return l in V?V[l]:V[l]="on"+l}function W(l,h){if(l.da)l=!0;else{h=new Rn(h,this);var m=l.listener,E=l.ha||l.src;l.fa&&G(l),l=m.call(E,h)}return l}function ue(l){return l=l[O],l instanceof Ie?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(l){return typeof l=="function"?l:(l[J]||(l[J]=function(h){return l.handleEvent(h)}),l[J])}function ie(){Ke.call(this),this.i=new Ie(this),this.M=this,this.F=null}w(ie,Ke),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(l,h,m,E){Y(this,l,h,m,E)};function he(l,h){var m,E=l.F;if(E)for(m=[];E;E=E.F)m.push(E);if(l=l.M,E=h.type||h,typeof h=="string")h=new Ge(h,l);else if(h instanceof Ge)h.target=h.target||l;else{var L=h;h=new Ge(E,l),b(h,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Q=h.g=m[F];L=Ce(Q,E,!0,h)&&L}if(Q=h.g=l,L=Ce(Q,E,!0,h)&&L,L=Ce(Q,E,!1,h)&&L,m)for(F=0;F<m.length;F++)Q=h.g=m[F],L=Ce(Q,E,!1,h)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],E=0;E<m.length;E++)re(m[E]);delete l.g[h],l.h--}}this.F=null},ie.prototype.K=function(l,h,m,E){return this.i.add(String(l),h,!1,m,E)},ie.prototype.L=function(l,h,m,E){return this.i.add(String(l),h,!0,m,E)};function Ce(l,h,m,E){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,F=0;F<h.length;++F){var Q=h[F];if(Q&&!Q.da&&Q.capture==m){var Ve=Q.listener,pt=Q.ha||Q.src;Q.fa&&Le(l.i,Q),L=Ve.call(pt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Se(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Tt(l){l.g=Se(()=>{l.g=null,l.i&&(l.i=!1,Tt(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class ut extends Ke{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(l){Ke.call(this),this.h=l,this.g={}}w(dt,Ke);var It=[];function _r(l){M(l.g,function(h,m){this.g.hasOwnProperty(m)&&G(h)},l),l.g={}}dt.prototype.N=function(){dt.aa.N.call(this),_r(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var js=a.JSON.stringify,Mt=a.JSON.parse,nn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Bs(){}Bs.prototype.h=null;function vp(l){return l.h||(l.h=l.i())}function Ep(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lu(){Ge.call(this,"d")}w(lu,Ge);function cu(){Ge.call(this,"c")}w(cu,Ge);var ls={},wp=null;function Ia(){return wp=wp||new ie}ls.La="serverreachability";function bp(l){Ge.call(this,ls.La,l)}w(bp,Ge);function Wi(l){const h=Ia();he(h,new bp(h))}ls.STAT_EVENT="statevent";function Tp(l,h){Ge.call(this,ls.STAT_EVENT,l),this.stat=h}w(Tp,Ge);function Vt(l){const h=Ia();he(h,new Tp(h,l))}ls.Ma="timingevent";function Ip(l,h){Ge.call(this,ls.Ma,l),this.size=h}w(Ip,Ge);function zi(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ki(){this.g=!0}Ki.prototype.xa=function(){this.g=!1};function F0(l,h,m,E,L,F){l.info(function(){if(l.g)if(F)for(var Q="",Ve=F.split("&"),pt=0;pt<Ve.length;pt++){var Pe=Ve[pt].split("=");if(1<Pe.length){var At=Pe[0];Pe=Pe[1];var Rt=At.split("_");Q=2<=Rt.length&&Rt[1]=="type"?Q+(At+"="+Pe+"&"):Q+(At+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+h+`
`+m+`
`+Q})}function U0(l,h,m,E,L,F,Q){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+h+`
`+m+`
`+F+" "+Q})}function $s(l,h,m,E){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+B0(l,m)+(E?" "+E:"")})}function j0(l,h){l.info(function(){return"TIMEOUT: "+h})}Ki.prototype.info=function(){};function B0(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var E=m[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return js(m)}catch{return h}}var Aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ap={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uu;function Ra(){}w(Ra,Bs),Ra.prototype.g=function(){return new XMLHttpRequest},Ra.prototype.i=function(){return{}},uu=new Ra;function yr(l,h,m,E){this.j=l,this.i=h,this.l=m,this.R=E||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var Sp={},fu={};function hu(l,h,m){l.L=1,l.v=ka(qn(h)),l.m=m,l.P=!0,Pp(l,null)}function Pp(l,h){l.F=Date.now(),Sa(l),l.A=qn(l.v);var m=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),$p(m.i,"t",E),l.C=0,m=l.j.J,l.h=new Rp,l.g=om(l.j,m?h:null,!l.m),0<l.O&&(l.M=new ut(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(It[0]=L.toString()),L=It);for(var F=0;F<L.length;F++){var Q=$(m,L[F],E||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Wi(),F0(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Wn(l)==3?h.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const Rt=Wn(this.g);var h=this.g.Ba();const Ws=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Qp(this.g)))){this.J||Rt!=4||h==7||(h==8||0>=Ws?Wi(3):Wi(2)),du(this);var m=this.g.Z();this.X=m;t:if(Cp(this)){var E=Qp(this.g);l="";var L=E.length,F=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),Gi(this);var Q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,l+=this.h.i.decode(E[h],{stream:!(F&&h==L-1)});E.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,U0(this.i,this.u,this.A,this.l,this.R,Rt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,pt=this.g;if((Ve=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Ve)){var Pe=Ve;break t}}Pe=null}if(m=Pe)$s(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pu(this,m);else{this.o=!1,this.s=3,Vt(12),cs(this),Gi(this);break e}}if(this.P){m=!0;let pn;for(;!this.J&&this.C<Q.length;)if(pn=$0(this,Q),pn==fu){Rt==4&&(this.s=4,Vt(14),m=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Sp){this.s=4,Vt(15),$s(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else $s(this.i,this.l,pn,null),pu(this,pn);if(Cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||Q.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)$s(this.i,this.l,Q,"[Invalid Chunked Response]"),cs(this),Gi(this);else if(0<Q.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Eu(At),At.M=!0,Vt(11))}}else $s(this.i,this.l,Q,null),pu(this,Q);Rt==4&&cs(this),this.o&&!this.J&&(Rt==4?nm(this.j,this):(this.o=!1,Sa(this)))}else iI(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),cs(this),Gi(this)}}}catch{}finally{}};function Cp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function $0(l,h){var m=l.C,E=h.indexOf(`
`,m);return E==-1?fu:(m=Number(h.substring(m,E)),isNaN(m)?Sp:(E+=1,E+m>h.length?fu:(h=h.slice(E,E+m),l.C=E+m,h)))}yr.prototype.cancel=function(){this.J=!0,cs(this)};function Sa(l){l.S=Date.now()+l.I,kp(l,l.I)}function kp(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=zi(p(l.ba,l),h)}function du(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(j0(this.i,this.A),this.L!=2&&(Wi(),Vt(17)),cs(this),this.s=2,Gi(this)):kp(this,this.S-l)};function Gi(l){l.j.G==0||l.J||nm(l.j,l)}function cs(l){du(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,_r(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function pu(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||mu(m.h,l))){if(!l.K&&mu(m.h,l)&&m.G==3){try{var E=m.Da.g.parse(h)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Ma(m),Da(m);else break e;vu(m),Vt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=zi(p(m.Za,m),6e3));if(1>=Np(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else fs(m,11)}else if((l.K||m.g==l)&&Ma(m),!P(h))for(L=m.Da.g.parse(h),h=0;h<L.length;h++){let Pe=L[h];if(m.T=Pe[0],Pe=Pe[1],m.G==2)if(Pe[0]=="c"){m.K=Pe[1],m.ia=Pe[2];const At=Pe[3];At!=null&&(m.la=At,m.j.info("VER="+m.la));const Rt=Pe[4];Rt!=null&&(m.Aa=Rt,m.j.info("SVER="+m.Aa));const Ws=Pe[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(E=1.5*Ws,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const pn=l.g;if(pn){const Fa=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var F=E.h;F.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(gu(F,F.h),F.h=null))}if(E.D){const wu=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;wu&&(E.ya=wu,Be(E.I,E.D,wu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var Q=l;if(E.qa=im(E,E.J?E.ia:null,E.W),Q.K){Dp(E.h,Q);var Ve=Q,pt=E.L;pt&&(Ve.I=pt),Ve.B&&(du(Ve),Sa(Ve)),E.g=Q}else em(E);0<m.i.length&&La(m)}else Pe[0]!="stop"&&Pe[0]!="close"||fs(m,7);else m.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?fs(m,7):yu(m):Pe[0]!="noop"&&m.l&&m.l.ta(Pe),m.v=0)}}Wi(4)}catch{}}var H0=class{constructor(l,h){this.g=l,this.map=h}};function Op(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Np(l){return l.h?1:l.g?l.g.size:0}function mu(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function gu(l,h){l.g?l.g.add(h):l.h=h}function Dp(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Op.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Lp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return k(l.i)}function q0(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],m=l.length,E=0;E<m;E++)h.push(l[E]);return h}h=[],m=0;for(E in l)h[m++]=l[E];return h}function W0(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const E in l)h[m++]=E;return h}}}function Mp(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=W0(l),E=q0(l),L=E.length,F=0;F<L;F++)h.call(void 0,E[F],m&&m[F],l)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z0(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var E=l[m].indexOf("="),L=null;if(0<=E){var F=l[m].substring(0,E);L=l[m].substring(E+1)}else F=l[m];h(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function us(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof us){this.h=l.h,Pa(this,l.j),this.o=l.o,this.g=l.g,Ca(this,l.s),this.l=l.l;var h=l.i,m=new Xi;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Fp(this,m),this.m=l.m}else l&&(h=String(l).match(Vp))?(this.h=!1,Pa(this,h[1]||"",!0),this.o=Qi(h[2]||""),this.g=Qi(h[3]||"",!0),Ca(this,h[4]),this.l=Qi(h[5]||"",!0),Fp(this,h[6]||"",!0),this.m=Qi(h[7]||"")):(this.h=!1,this.i=new Xi(null,this.h))}us.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Yi(h,Up,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Yi(h,Up,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Yi(m,m.charAt(0)=="/"?Q0:G0,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Yi(m,X0)),l.join("")};function qn(l){return new us(l)}function Pa(l,h,m){l.j=m?Qi(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ca(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Fp(l,h,m){h instanceof Xi?(l.i=h,J0(l.i,l.h)):(m||(h=Yi(h,Y0)),l.i=new Xi(h,l.h))}function Be(l,h,m){l.i.set(h,m)}function ka(l){return Be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Qi(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Yi(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,K0),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function K0(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Up=/[#\/\?@]/g,G0=/[#\?:]/g,Q0=/[#\?]/g,Y0=/[#\?@]/g,X0=/#/g;function Xi(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&z0(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Xi.prototype,t.add=function(l,h){vr(this),this.i=null,l=Hs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function jp(l,h){vr(l),h=Hs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Bp(l,h){return vr(l),h=Hs(l,h),l.g.has(h)}t.forEach=function(l,h){vr(this),this.g.forEach(function(m,E){m.forEach(function(L){l.call(h,L,E,this)},this)},this)},t.na=function(){vr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let E=0;E<h.length;E++){const L=l[E];for(let F=0;F<L.length;F++)m.push(h[E])}return m},t.V=function(l){vr(this);let h=[];if(typeof l=="string")Bp(this,l)&&(h=h.concat(this.g.get(Hs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return vr(this),this.i=null,l=Hs(this,l),Bp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function $p(l,h,m){jp(l,h),0<m.length&&(l.i=null,l.g.set(Hs(l,h),k(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var E=h[m];const F=encodeURIComponent(String(E)),Q=this.V(E);for(E=0;E<Q.length;E++){var L=F;Q[E]!==""&&(L+="="+encodeURIComponent(String(Q[E]))),l.push(L)}}return this.i=l.join("&")};function Hs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function J0(l,h){h&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(m,E){var L=E.toLowerCase();E!=L&&(jp(this,E),$p(this,L,m))},l)),l.j=h}function Z0(l,h){const m=new Ki;if(a.Image){const E=new Image;E.onload=g(Er,m,"TestLoadImage: loaded",!0,h,E),E.onerror=g(Er,m,"TestLoadImage: error",!1,h,E),E.onabort=g(Er,m,"TestLoadImage: abort",!1,h,E),E.ontimeout=g(Er,m,"TestLoadImage: timeout",!1,h,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else h(!1)}function eI(l,h){const m=new Ki,E=new AbortController,L=setTimeout(()=>{E.abort(),Er(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:E.signal}).then(F=>{clearTimeout(L),F.ok?Er(m,"TestPingServer: ok",!0,h):Er(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Er(m,"TestPingServer: error",!1,h)})}function Er(l,h,m,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(m)}catch{}}function tI(){this.g=new nn}function nI(l,h,m){const E=m||"";try{Mp(l,function(L,F){let Q=L;u(L)&&(Q=js(L)),h.push(E+F+"="+encodeURIComponent(Q))})}catch(L){throw h.push(E+"type="+encodeURIComponent("_badmap")),L}}function Oa(l){this.l=l.Ub||null,this.j=l.eb||!1}w(Oa,Bs),Oa.prototype.g=function(){return new xa(this.l,this.j)},Oa.prototype.i=function(l){return function(){return l}}({});function xa(l,h){ie.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(xa,ie),t=xa.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Zi(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ji(this):Zi(this),this.readyState==3&&Hp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ji(this))},t.Qa=function(l){this.g&&(this.response=l,Ji(this))},t.ga=function(){this.g&&Ji(this)};function Ji(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Zi(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function Zi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function qp(l){let h="";return M(l,function(m,E){h+=E,h+=":",h+=m,h+=`\r
`}),h}function _u(l,h,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=qp(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Be(l,h,m))}function Xe(l){ie.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Xe,ie);var rI=/^https?$/i,sI=["POST","PUT"];t=Xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uu.g(),this.v=this.o?vp(this.o):vp(uu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(F){Wp(this,F);return}if(l=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)m.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())m.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(sI,h,void 0))||E||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of m)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gp(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Wp(this,F)}};function Wp(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,zp(l),Na(l)}function zp(l){l.A||(l.A=!0,he(l,"complete"),he(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,he(this,"complete"),he(this,"abort"),Na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Na(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kp(this):this.bb())},t.bb=function(){Kp(this)};function Kp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Wn(l)!=4||l.Z()!=2)){if(l.u&&Wn(l)==4)Se(l.Ea,0,l);else if(he(l,"readystatechange"),Wn(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var E;if(E=Q===0){var L=String(l.D).match(Vp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),E=!rI.test(L?L.toLowerCase():"")}m=E}if(m)he(l,"complete"),he(l,"success");else{l.m=6;try{var F=2<Wn(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",zp(l)}}finally{Na(l)}}}}function Na(l,h){if(l.g){Gp(l);const m=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||he(l,"ready");try{m.onreadystatechange=E}catch{}}}function Gp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Wn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Mt(h)}};function Qp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function iI(l){const h={};l=(l.g&&2<=Wn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(P(l[E]))continue;var m=C(l[E]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=h[L]||[];h[L]=F,F.push(m)}T(h,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function eo(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function Yp(l){this.Aa=0,this.i=[],this.j=new Ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=eo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=eo("baseRetryDelayMs",5e3,l),this.cb=eo("retryDelaySeedMs",1e4,l),this.Wa=eo("forwardChannelMaxRetries",2,l),this.wa=eo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Op(l&&l.concurrentRequestLimit),this.Da=new tI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yp.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,E){Vt(0),this.W=l,this.H=h||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=im(this,null,this.W),La(this)};function yu(l){if(Xp(l),l.G==3){var h=l.U++,m=qn(l.I);if(Be(m,"SID",l.K),Be(m,"RID",h),Be(m,"TYPE","terminate"),to(l,m),h=new yr(l,l.j,h),h.L=2,h.v=ka(qn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=om(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Sa(h)}sm(l)}function Da(l){l.g&&(Eu(l),l.g.cancel(),l.g=null)}function Xp(l){Da(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ma(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function La(l){if(!xp(l.h)&&!l.s){l.s=!0;var h=l.Ga;se||dn(),ne||(se(),ne=!0),ze.add(h,l),l.B=0}}function oI(l,h){return Np(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=zi(p(l.Ga,l,h),rm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new yr(this,this.j,l);let F=this.o;if(this.S&&(F?(F=v(F),b(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(h+=E,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Zp(this,L,h),m=qn(this.I),Be(m,"RID",l),Be(m,"CVER",22),this.D&&Be(m,"X-HTTP-Session-Id",this.D),to(this,m),F&&(this.O?h="headers="+encodeURIComponent(String(qp(F)))+"&"+h:this.m&&_u(m,this.m,F)),gu(this.h,L),this.Ua&&Be(m,"TYPE","init"),this.P?(Be(m,"$req",h),Be(m,"SID","null"),L.T=!0,hu(L,m,null)):hu(L,m,h),this.G=2}}else this.G==3&&(l?Jp(this,l):this.i.length==0||xp(this.h)||Jp(this))};function Jp(l,h){var m;h?m=h.l:m=l.U++;const E=qn(l.I);Be(E,"SID",l.K),Be(E,"RID",m),Be(E,"AID",l.T),to(l,E),l.m&&l.o&&_u(E,l.m,l.o),m=new yr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Zp(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),gu(l.h,m),hu(m,E,h)}function to(l,h){l.H&&M(l.H,function(m,E){Be(h,E,m)}),l.l&&Mp({},function(m,E){Be(h,E,m)})}function Zp(l,h,m){m=Math.min(l.i.length,m);var E=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let F=-1;for(;;){const Q=["count="+m];F==-1?0<m?(F=L[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Ve=!0;for(let pt=0;pt<m;pt++){let Pe=L[pt].g;const At=L[pt].map;if(Pe-=F,0>Pe)F=Math.max(0,L[pt].g-100),Ve=!1;else try{nI(At,Q,"req"+Pe+"_")}catch{E&&E(At)}}if(Ve){E=Q.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,E}function em(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;se||dn(),ne||(se(),ne=!0),ze.add(h,l),l.v=0}}function vu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=zi(p(l.Fa,l),rm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,tm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=zi(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Da(this),tm(this))};function Eu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function tm(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=qn(l.qa);Be(h,"RID","rpc"),Be(h,"SID",l.K),Be(h,"AID",l.T),Be(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Be(h,"TO",l.ja),Be(h,"TYPE","xmlhttp"),to(l,h),l.m&&l.o&&_u(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=ka(qn(h)),m.m=null,m.P=!0,Pp(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Da(this),vu(this),Vt(19))};function Ma(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function nm(l,h){var m=null;if(l.g==h){Ma(l),Eu(l),l.g=null;var E=2}else if(mu(l.h,h))m=h.D,Dp(l.h,h),E=1;else return;if(l.G!=0){if(h.o)if(E==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var L=l.B;E=Ia(),he(E,new Ip(E,m)),La(l)}else em(l);else if(L=h.s,L==3||L==0&&0<h.X||!(E==1&&oI(l,h)||E==2&&vu(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),L){case 1:fs(l,5);break;case 4:fs(l,10);break;case 3:fs(l,6);break;default:fs(l,2)}}}function rm(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function fs(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),E=l.Xa;const L=!E;E=new us(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pa(E,"https"),ka(E),L?Z0(E.toString(),m):eI(E.toString(),m)}else Vt(2);l.G=0,l.l&&l.l.sa(h),sm(l),Xp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function sm(l){if(l.G=0,l.ka=[],l.l){const h=Lp(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ka,h),x(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function im(l,h,m){var E=m instanceof us?qn(m):new us(m);if(E.g!="")h&&(E.g=h+"."+E.g),Ca(E,E.s);else{var L=a.location;E=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var F=new us(null);E&&Pa(F,E),h&&(F.g=h),L&&Ca(F,L),m&&(F.l=m),E=F}return m=l.D,h=l.ya,m&&h&&Be(E,m,h),Be(E,"VER",l.la),to(l,E),E}function om(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Xe(new Oa({eb:m})):new Xe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function am(){}t=am.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(l,h){return new Qt(l,h)};function Qt(l,h){ie.call(this),this.g=new Yp(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!P(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!P(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new qs(this)}w(Qt,ie),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){yu(this.g)},Qt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=js(l),l=m);h.i.push(new H0(h.Ya++,l)),h.G==3&&La(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,yu(this.g),delete this.g,Qt.aa.N.call(this)};function lm(l){lu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}w(lm,lu);function cm(){cu.call(this),this.status=1}w(cm,cu);function qs(l){this.g=l}w(qs,am),qs.prototype.ua=function(){he(this.g,"a")},qs.prototype.ta=function(l){he(this.g,new lm(l))},qs.prototype.sa=function(l){he(this.g,new cm)},qs.prototype.ra=function(){he(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,fb=function(){return new Va},ub=function(){return Ia()},cb=ls,eh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,_l=Aa,Ap.COMPLETE="complete",lb=Ap,Ep.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,uo=Ep,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,ab=Xe}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});const y_="@firebase/firestore",v_="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ui="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new dd("@firebase/firestore");function Xs(){return Cs.logLevel}function te(t,...e){if(Cs.logLevel<=we.DEBUG){const n=e.map(Ad);Cs.debug(`Firestore (${Ui}): ${t}`,...n)}}function lr(t,...e){if(Cs.logLevel<=we.ERROR){const n=e.map(Ad);Cs.error(`Firestore (${Ui}): ${t}`,...n)}}function Ai(t,...e){if(Cs.logLevel<=we.WARN){const n=e.map(Ad);Cs.warn(`Firestore (${Ui}): ${t}`,...n)}}function Ad(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: `+t;throw lr(e),new Error(e)}function Ne(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class m2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class g2{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new hb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Pt(e)}}class _2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class y2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v2{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ln(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new E_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new E_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function db(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=E2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function th(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=db(),o=w2(i.encode(w_(t,n)),i.encode(w_(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function w_(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function w2(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Ri(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=-62135596800,T_=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*T_);return new lt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<b_)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/T_}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-b_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const I_="__name__";class kn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=kn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=kn.isNumericId(e),s=kn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?kn.extractNumericId(e).compare(kn.extractNumericId(n)):th(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class qe extends kn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const b2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends kn{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return b2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===I_}static keyField(){return new yt([I_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new le(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new le(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Yo=-1;function T2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Gr(s,fe.empty(),e)}function I2(t){return new Gr(t.readTime,t.key,Yo)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(_e.min(),fe.empty(),Yo)}static max(){return new Gr(_e.max(),fe.empty(),Yo)}}function A2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class S2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==R2)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function P2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Vc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=-1;function Fc(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function C2(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="";function k2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=A_(e)),e=O2(t.get(n),e);return A_(e)}function O2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case mb:n+="";break;default:n+=i}}return n}function A_(t){return t+mb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Za(this.root,e,this.comparator,!1)}getReverseIterator(){return new Za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Za(this.root,e,this.comparator,!0)}}class Za{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(e){return new S_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class S_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ct(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _b extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _b("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const x2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=x2.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="server_timestamp",vb="__type__",Eb="__previous_value__",wb="__local_write_time__";function Sd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[vb])===null||n===void 0?void 0:n.stringValue)===yb}function Uc(t){const e=t.mapValue.fields[Eb];return Sd(e)?Uc(e):e}function Xo(t){const e=Qr(t.mapValue.fields[wb].timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}const Jl="(default)";class Jo{constructor(e,n){this.projectId=e,this.database=n||Jl}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database===Jl}isEqual(e){return e instanceof Jo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="__type__",D2="__max__",el={mapValue:{}},Tb="__vector__",Zl="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sd(t)?4:M2(t)?9007199254740991:L2(t)?10:11:me()}function jn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xo(t).isEqual(Xo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),a=Qr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Xl(o)===Xl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ri(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(R_(o)!==R_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!jn(o[c],a[c])))return!1;return!0}(t,e);default:return me()}}function Zo(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function Si(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),c=nt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return P_(t.timestampValue,e.timestampValue);case 4:return P_(Xo(t),Xo(e));case 5:return th(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Yr(i),c=Yr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const f=ve(a[u],c[u]);if(f!==0)return f}return ve(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(nt(i.latitude),nt(o.latitude));return a!==0?a:ve(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return C_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,f;const d=i.fields||{},p=o.fields||{},g=(a=d[Zl])===null||a===void 0?void 0:a.arrayValue,w=(c=p[Zl])===null||c===void 0?void 0:c.arrayValue,k=ve(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((f=w==null?void 0:w.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:C_(g,w)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===el.mapValue&&o===el.mapValue)return 0;if(i===el.mapValue)return 1;if(o===el.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const p=th(c[d],f[d]);if(p!==0)return p;const g=Si(a[c[d]],u[f[d]]);if(g!==0)return g}return ve(c.length,f.length)}(t.mapValue,e.mapValue);default:throw me()}}function P_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Qr(t),r=Qr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function C_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Si(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Pi(t){return nh(t)}function nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nh(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function yl(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(t);return e?16+yl(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+yl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return os(r.fields,(i,o)=>{s+=i.length+yl(o)}),s}(t.mapValue);default:throw me()}}function rh(t){return!!t&&"integerValue"in t}function Pd(t){return!!t&&"arrayValue"in t}function k_(t){return!!t&&"nullValue"in t}function O_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vl(t){return!!t&&"mapValue"in t}function L2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[bb])===null||n===void 0?void 0:n.stringValue)===Tb}function Ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function M2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===D2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ro(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(Ro(this.value))}}function Ib(t){const e=[];return os(t.fields,(n,r)=>{const s=new yt([n]);if(vl(r)){const i=Ib(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ec{constructor(e,n){this.position=e,this.inclusive=n}}function x_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=Si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function N_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function V2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ab{}class ot extends Ab{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new U2(e,n,r):n==="array-contains"?new $2(e,r):n==="in"?new H2(e,r):n==="not-in"?new q2(e,r):n==="array-contains-any"?new W2(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new j2(e,r):new B2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Si(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends Ab{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Bn(e,n)}matches(e){return Rb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Rb(t){return t.op==="and"}function Sb(t){return F2(t)&&Rb(t)}function F2(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function sh(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(Sb(t))return t.filters.map(e=>sh(e)).join(",");{const e=t.filters.map(n=>sh(n)).join(",");return`${t.op}(${e})`}}function Pb(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&jn(r.value,s.value)}(t,e):t instanceof Bn?function(r,s){return s instanceof Bn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Pb(o,s.filters[a]),!0):!1}(t,e):void me()}function Cb(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cb).join(" ,")+"}"}(t):"Filter"}class U2 extends ot{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class j2 extends ot{constructor(e,n){super(e,"in",n),this.keys=kb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class B2 extends ot{constructor(e,n){super(e,"not-in",n),this.keys=kb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class $2 extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pd(n)&&Zo(n.arrayValue,this.value)}}class H2 extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zo(this.value.arrayValue,n)}}class q2 extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zo(this.value.arrayValue,n)}}class W2 extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zo(this.value.arrayValue,r))}}/**
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
 */class z2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function D_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new z2(t,e,n,r,s,i,o)}function Cd(t){const e=ye(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pi(r)).join(",")),e.le=n}return e.le}function kd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!V2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!N_(t.startAt,e.startAt)&&N_(t.endAt,e.endAt)}function ih(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function K2(t,e,n,r,s,i,o,a){return new jc(t,e,n,r,s,i,o,a)}function Ob(t){return new jc(t)}function L_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function G2(t){return t.collectionGroup!==null}function So(t){const e=ye(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ct(yt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new tc(i,r))}),n.has(yt.keyField().canonicalString())||e.he.push(new tc(yt.keyField(),r))}return e.he}function Fn(t){const e=ye(t);return e.Pe||(e.Pe=Q2(e,So(t))),e.Pe}function Q2(t,e){if(t.limitType==="F")return D_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tc(s.field,i)});const n=t.endAt?new ec(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ec(t.startAt.position,t.startAt.inclusive):null;return D_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function oh(t,e,n){return new jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return kd(Fn(t),Fn(e))&&t.limitType===e.limitType}function xb(t){return`${Cd(Fn(t))}|lt:${t.limitType}`}function Js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cb(s)).join(", ")}]`),Fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Pi(s)).join(",")),`Target(${r})`}(Fn(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of So(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=x_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,So(r),s)||r.endAt&&!function(o,a,c){const u=x_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,So(r),s))}(t,e)}function Y2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nb(t){return(e,n)=>{let r=!1;for(const s of So(t)){const i=X2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function X2(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Si(c,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new Ye(fe.comparator);function cr(){return J2}const Db=new Ye(fe.comparator);function fo(...t){let e=Db;for(const n of t)e=e.insert(n.key,n);return e}function Lb(t){let e=Db;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ys(){return Po()}function Mb(){return Po()}function Po(){return new Fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z2=new Ye(fe.comparator),eD=new ct(fe.comparator);function Te(...t){let e=eD;for(const n of t)e=e.add(n);return e}const tD=new ct(ve);function nD(){return tD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function Vb(t){return{integerValue:""+t}}function rD(t,e){return C2(e)?Vb(e):Od(t,e)}/**
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
 */class Hc{constructor(){this._=void 0}}function sD(t,e,n){return t instanceof nc?function(s,i){const o={fields:{[vb]:{stringValue:yb},[wb]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sd(i)&&(i=Uc(i)),i&&(o.fields[Eb]=i),{mapValue:o}}(n,e):t instanceof ea?Ub(t,e):t instanceof ta?jb(t,e):function(s,i){const o=Fb(s,i),a=M_(o)+M_(s.Ie);return rh(o)&&rh(s.Ie)?Vb(a):Od(s.serializer,a)}(t,e)}function iD(t,e,n){return t instanceof ea?Ub(t,e):t instanceof ta?jb(t,e):n}function Fb(t,e){return t instanceof rc?function(r){return rh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nc extends Hc{}class ea extends Hc{constructor(e){super(),this.elements=e}}function Ub(t,e){const n=Bb(e);for(const r of t.elements)n.some(s=>jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Hc{constructor(e){super(),this.elements=e}}function jb(t,e){let n=Bb(e);for(const r of t.elements)n=n.filter(s=>!jn(s,r));return{arrayValue:{values:n}}}class rc extends Hc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function M_(t){return nt(t.integerValue||t.doubleValue)}function Bb(t){return Pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ea&&s instanceof ea||r instanceof ta&&s instanceof ta?Ri(r.elements,s.elements,jn):r instanceof rc&&s instanceof rc?jn(r.Ie,s.Ie):r instanceof nc&&s instanceof nc}(t.transform,e.transform)}class aD{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function $b(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xd(t.key,un.none()):new ya(t.key,t.data,un.none());{const n=t.data,r=Kt.empty();let s=new ct(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new as(t.key,r,new Xt(s.toArray()),un.none())}}function lD(t,e,n){t instanceof ya?function(s,i,o){const a=s.value.clone(),c=F_(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,o){if(!El(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=F_(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Hb(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Co(t,e,n,r){return t instanceof ya?function(i,o,a,c){if(!El(i.precondition,o))return a;const u=i.value.clone(),f=U_(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(i,o,a,c){if(!El(i.precondition,o))return a;const u=U_(i.fieldTransforms,c,o),f=o.data;return f.setAll(Hb(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return El(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function cD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Fb(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function V_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ri(r,s,(i,o)=>oD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ya extends qc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends qc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function F_(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,iD(o,a,n[s]))}return r}function U_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sD(i,o,e))}return r}class xd extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uD extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$b(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,(n,r)=>V_(n,r))&&Ri(this.baseMutations,e.baseMutations,(n,r)=>V_(n,r))}}class Nd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return Z2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Nd(e,n,r,s)}}/**
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
 */class hD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,Ae;function pD(t){switch(t){case H.OK:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return me()}}function qb(t){if(t===void 0)return lr("GRPC error has no .code"),H.UNKNOWN;switch(t){case rt.OK:return H.OK;case rt.CANCELLED:return H.CANCELLED;case rt.UNKNOWN:return H.UNKNOWN;case rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case rt.INTERNAL:return H.INTERNAL;case rt.UNAVAILABLE:return H.UNAVAILABLE;case rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case rt.NOT_FOUND:return H.NOT_FOUND;case rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case rt.ABORTED:return H.ABORTED;case rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case rt.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Ae=rt||(rt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const mD=new Hr([4294967295,4294967295],0);function j_(t){const e=db().encode(t),n=new ob;return n.update(e),new Uint8Array(n.digest())}function B_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Dd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Hr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(mD)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=j_(e),[r,s]=B_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Dd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=j_(e),[r,s]=B_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wc(_e.min(),s,new Ye(ve),cr(),Te())}}class va{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new va(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class Wb{constructor(e,n){this.targetId=e,this.ge=n}}class zb{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $_{constructor(){this.pe=0,this.ye=H_(),this.we=bt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Te(),n=Te(),r=Te();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new va(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=H_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ne(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class gD{constructor(e){this.ke=e,this.qe=new Map,this.Qe=cr(),this.$e=tl(),this.Ue=tl(),this.Ke=new Ye(ve)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(ih(i))if(r===0){const o=new fe(i.path);this.ze(n,o,xt.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),c=a?this.nt(a,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Yr(r).toUint8Array()}catch(c){if(c instanceof _b)return Ai("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Dd(o,s,i)}catch(c){return Ai(c instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&ih(a.target)){const c=new fe(a.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,xt.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Te();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Wc(e,n,this.Ke,this.Qe,r);return this.Qe=cr(),this.$e=tl(),this.Ue=tl(),this.Ke=new Ye(ve),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new $_,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ct(ve),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ct(ve),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new $_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function tl(){return new Ye(fe.comparator)}function H_(){return new Ye(fe.comparator)}const _D={asc:"ASCENDING",desc:"DESCENDING"},yD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vD={and:"AND",or:"OR"};class ED{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ah(t,e){return t.useProto3Json||Fc(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wD(t,e){return sc(t,e.toTimestamp())}function Un(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=Qr(n);return new lt(r.seconds,r.nanos)}(t))}function Ld(t,e){return lh(t,e).canonicalString()}function lh(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Gb(t){const e=qe.fromString(t);return Ne(Zb(e)),e}function ch(t,e){return Ld(t.databaseId,e.path)}function Yu(t,e){const n=Gb(e);if(n.get(1)!==t.databaseId.projectId)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(Yb(n))}function Qb(t,e){return Ld(t.databaseId,e)}function bD(t){const e=Gb(t);return e.length===4?qe.emptyPath():Yb(e)}function uh(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yb(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function q_(t,e,n){return{name:ch(t,e),fields:n.value.mapValue.fields}}function TD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ne(f===void 0||typeof f=="string"),bt.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array),bt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const f=u.code===void 0?H.UNKNOWN:qb(u.code);return new le(f,u.message||"")}(o);n=new zb(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yu(t,r.document.name),i=Un(r.document.updateTime),o=r.document.createTime?Un(r.document.createTime):_e.min(),a=new Kt({mapValue:{fields:r.document.fields}}),c=xt.newFoundDocument(s,i,o,a),u=r.targetIds||[],f=r.removedTargetIds||[];n=new wl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yu(t,r.document),i=r.readTime?Un(r.readTime):_e.min(),o=xt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new wl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yu(t,r.document),i=r.removedTargetIds||[];n=new wl([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dD(s,i),a=r.targetId;n=new Wb(a,o)}}return n}function ID(t,e){let n;if(e instanceof ya)n={update:q_(t,e.key,e.value)};else if(e instanceof xd)n={delete:ch(t,e.key)};else if(e instanceof as)n={update:q_(t,e.key,e.data),updateMask:ND(e.fieldMask)};else{if(!(e instanceof uD))return me();n={verify:ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof nc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function AD(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Un(s.updateTime):Un(i);return o.isEqual(_e.min())&&(o=Un(i)),new aD(o,s.transformResults||[])}(n,e))):[]}function RD(t,e){return{documents:[Qb(t,e.path)]}}function SD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qb(t,s);const i=function(u){if(u.length!==0)return Jb(Bn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:Zs(p.field),direction:kD(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ah(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function PD(t){let e=bD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const p=Xb(d);return p instanceof Bn&&Sb(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(w){return new tc(ei(w.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Fc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(d){const p=!!d.before,g=d.values||[];return new ec(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new ec(g,p)}(n.endAt)),K2(e,s,o,i,a,"F",c,u)}function CD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ei(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ei(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ei(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(ei(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>Xb(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function kD(t){return _D[t]}function OD(t){return yD[t]}function xD(t){return vD[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function ei(t){return yt.fromServerFormat(t.fieldPath)}function Jb(t){return t instanceof ot?function(n){if(n.op==="=="){if(O_(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NAN"}};if(k_(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(O_(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NAN"}};if(k_(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(n.field),op:OD(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(s=>Jb(s));return r.length===1?r[0]:{compositeFilter:{op:xD(n.op),filters:r}}}(t):me()}function ND(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.Tt=e}}function LD(t){const e=PD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oh(e,e.limit,"L"):e}/**
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
 */class MD{constructor(){this.Tn=new VD}addToCollectionParentIndex(e,n){return this.Tn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Gr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class VD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(qe.comparator)).toArray()}}/**
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
 */const W_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eT=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(eT,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const z_="LruGarbageCollector",FD=1048576;function K_([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class UD{constructor(e){this.Hn=e,this.buffer=new ct(K_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();K_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){te(z_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bi(n)?te(z_,"Ignoring IndexedDB error during garbage collection: ",n):await ji(n)}await this.er(3e5)})}}class BD{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Vc.ae);const r=new UD(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(W_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),W_):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,a,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Xs()<=we.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function $D(t,e){return new BD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.changes=new Fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Co(r.mutation,s,Xt.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=fo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=cr();const o=Po(),a=function(){return Po()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof as)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Co(f.mutation,u,f.mutation.getFieldMask(),lt.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return a.set(u,new qD(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Po();let s=new Ye((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Xt.empty();f=a.applyToLocalView(u,f),r.set(c,f);const d=(s.get(a.batchId)||Te()).add(c);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,f=c.value,d=Mb();f.forEach(p=>{if(!i.has(p)){const g=$b(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):G2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(ys());let a=Yo,c=i;return o.next(u=>B.forEach(u,(f,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(f=>({batchId:a,changes:Lb(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=fo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,c=>{const u=function(d,p){return new jc(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,xt.newInvalidDocument(f)))});let a=fo();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Co(f.mutation,u,Xt.empty(),lt.now()),$c(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return B.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Un(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:LD(s.bundledQuery),readTime:Un(s.readTime)}}(n)),B.resolve()}}/**
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
 */class KD{constructor(){this.overlays=new Ye(fe.comparator),this.Rr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ys();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=ys(),i=n.length+1,o=new fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=ys(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=ys(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=s)););return B.resolve(a)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hD(n,r));let i=this.Rr.get(n);i===void 0&&(i=Te(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class GD{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.Vr=new ct(ft.mr),this.gr=new ct(ft.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new ft(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new fe(new qe([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new fe(new qe([])),r=new ft(n,e),s=new ft(n,e+1);let i=Te();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return fe.comparator(e.key,n.key)||ve(e.Cr,n.Cr)}static pr(e,n){return ve(e.Cr,n.Cr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ct(ft.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Mr=this.Mr.add(new ft(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Rd:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const a=this.Or(o.Cr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ve);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],a=>{r=r.add(a.Cr)})}),B.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new ft(new fe(i),0);let a=new ct(ve);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Cr)),!0)},o),B.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return B.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new ft(n,0),s=this.Mr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.kr=e,this.docs=function(){return new Ye(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cr();const o=n.path,a=new fe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||A2(I2(f),r)<=0||(s.has(f.key)||$c(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}qr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XD(this)}getSize(e){return B.resolve(this.size)}}class XD extends HD{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.persistence=e,this.Qr=new Fs(n=>Cd(n),kd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Md,this.targetCount=0,this.Kr=Ci.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),B.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Ci(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.zn(n),B.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Vc(0),this.zr=!1,this.zr=!0,this.jr=new GD,this.referenceDelegate=e(this),this.Hr=new JD(this),this.indexManager=new MD,this.remoteDocumentCache=function(s){return new YD(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new DD(n),this.Yr=new zD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new QD(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new ZD(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return B.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class ZD extends S2{constructor(e){super(),this.currentSequenceNumber=e}}class Vd{constructor(e){this.persistence=e,this.ti=new Md,this.ni=null}static ri(e){return new Vd(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),B.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,r=>{const s=fe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return B.or([()=>B.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ic{constructor(e,n){this.persistence=e,this.oi=new Fs(r=>k2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=$D(this,n)}static ri(e,n){return new ic(e,n)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return B.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=yl(e.data.value)),n}ar(e,n,r){return B.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fd(e,n.fromCache,r,s)}}/**
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
 */class eL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tL{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Tk()?8:P2(Dt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new eL;return this._s(e,n,o).next(a=>{if(i.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Xs()<=we.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Xs()<=we.DEBUG&&te("QueryEngine","Query:",Js(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Xs()<=we.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fn(n))):B.resolve())}rs(e,n){if(L_(n))return B.resolve(null);let r=Fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oh(n,null,"F"),r=Fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,a);return this.ls(n,u,o,c.readTime)?this.rs(e,oh(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,s){return L_(n)||s.isEqual(_e.min())?B.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?B.resolve(null):(Xs()<=we.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Js(n)),this.hs(e,o,n,T2(s,Yo)).next(a=>a))})}cs(e,n){let r=new ct(Nb(e));return n.forEach((s,i)=>{$c(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Xs()<=we.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Js(n)),this.ns.getDocumentsMatchingQuery(e,n,Gr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="LocalStore",nL=3e8;class rL{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ye(ve),this.Is=new Fs(i=>Cd(i),kd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function sL(t,e,n,r){return new rL(t,e,n,r)}async function nT(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function iL(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,c,u,f){const d=u.batch,p=d.keys();let g=B.resolve();return p.forEach(w=>{g=g.next(()=>f.getEntry(c,w)).next(k=>{const x=u.docVersions.get(w);Ne(x!==null),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function rT(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function oL(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const a=[];e.targetChanges.forEach((f,d)=>{const p=s.get(d);if(!p)return;a.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(d,g),function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=nL?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,g,f)&&a.push(n.Hr.updateTargetData(i,g))});let c=cr(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(aL(i,o,e.documentUpdates).next(f=>{c=f.Vs,u=f.fs})),!r.isEqual(_e.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(d=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ts=s,i))}function aL(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te(Ud,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function lL(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cL(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function fh(t,e,n){const r=ye(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Bi(o))throw o;te(Ud,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function G_(t,e,n){const r=ye(t);let s=_e.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=ye(c),p=d.Is.get(f);return p!==void 0?B.resolve(d.Ts.get(p)):d.Hr.getTargetData(u,f)}(r,o,Fn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Te())).next(a=>(uL(r,Y2(e),a),{documents:a,gs:i})))}function uL(t,e,n){let r=t.Es.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Q_{constructor(){this.activeTargetIds=nD()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fL{constructor(){this.ho=new Q_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Q_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hL{To(e){}shutdown(){}}/**
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
 */let nl=null;function hh(){return nl===null?nl=function(){return 268435456+Math.round(2147483648*Math.random())}():nl++,"0x"+nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="RestConnection",dL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pL{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Jl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=hh(),a=this.bo(e,n.toUriEncodedString());te(Xu,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,a,c,r).then(u=>(te(Xu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ai(Xu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ui}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=dL[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class gL extends pL{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=hh();return new Promise((o,a)=>{const c=new ab;c.setWithCredentials(!0),c.listenOnce(lb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _l.NO_ERROR:const f=c.getResponseJson();te(St,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case _l.TIMEOUT:te(St,`RPC '${e}' ${i} timed out`),a(new le(H.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const d=c.getStatus();if(te(St,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const w=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(N)>=0?N:H.UNKNOWN}(g.status);a(new le(w,g.message))}else a(new le(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new le(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(St,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(St,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=hh(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fb(),a=ub(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");te(St,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);let p=!1,g=!1;const w=new mL({Fo:x=>{g?te(St,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(p||(te(St,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(St,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},Mo:()=>d.close()}),k=(x,N,P)=>{x.listen(N,y=>{try{P(y)}catch(R){setTimeout(()=>{throw R},0)}})};return k(d,uo.EventType.OPEN,()=>{g||(te(St,`RPC '${e}' stream ${s} transport opened.`),w.Qo())}),k(d,uo.EventType.CLOSE,()=>{g||(g=!0,te(St,`RPC '${e}' stream ${s} transport closed`),w.Uo())}),k(d,uo.EventType.ERROR,x=>{g||(g=!0,Ai(St,`RPC '${e}' stream ${s} transport errored:`,x),w.Uo(new le(H.UNAVAILABLE,"The operation could not be completed")))}),k(d,uo.EventType.MESSAGE,x=>{var N;if(!g){const P=x.data[0];Ne(!!P);const y=P,R=(y==null?void 0:y.error)||((N=y[0])===null||N===void 0?void 0:N.error);if(R){te(St,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let M=function(_){const b=rt[_];if(b!==void 0)return qb(b)}(D),T=R.message;M===void 0&&(M=H.INTERNAL,T="Unknown error status: "+D+" with message "+R.message),g=!0,w.Uo(new le(M,T)),d.close()}else te(St,`RPC '${e}' stream ${s} received:`,P),w.Ko(P)}}),k(a,cb.STAT_EVENT,x=>{x.stat===eh.PROXY?te(St,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===eh.NOPROXY&&te(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.$o()},0),w}}function Ju(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return new ED(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="PersistentStream";class iT{constructor(e,n,r,s,i,o,a,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new sT(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new le(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return te(J_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(te(J_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _L extends iT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=TD(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Un(o.readTime):_e.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=uh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ih(c)?{documents:RD(i,c)}:{query:SD(i,c).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Kb(i,o.resumeToken);const u=ah(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=sc(i,o.snapshotVersion.toTimestamp());const u=ah(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=CD(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=uh(this.serializer),n.removeTarget=e,this.I_(n)}}class yL extends iT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=AD(e.writeResults,e.commitTime),r=Un(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=uh(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ID(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{}class EL extends vL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,lh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(H.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,lh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(H.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class wL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(lr(n),this.N_=!1):te("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RemoteStore";class bL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Us(this)&&(te(ks,"Restarting streams for network reachability change."),await async function(c){const u=ye(c);u.W_.add(4),await Ea(u),u.j_.set("Unknown"),u.W_.delete(4),await Kc(u)}(this))})}),this.j_=new wL(r,s)}}async function Kc(t){if(Us(t))for(const e of t.G_)await e(!0)}async function Ea(t){for(const e of t.G_)await e(!1)}function oT(t,e){const n=ye(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Hd(n)?$d(n):$i(n).c_()&&Bd(n,e))}function jd(t,e){const n=ye(t),r=$i(n);n.K_.delete(e),r.c_()&&aT(n,e),n.K_.size===0&&(r.c_()?r.P_():Us(n)&&n.j_.set("Unknown"))}function Bd(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$i(t).y_(e)}function aT(t,e){t.H_.Ne(e),$i(t).w_(e)}function $d(t){t.H_=new gD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),$i(t).start(),t.j_.B_()}function Hd(t){return Us(t)&&!$i(t).u_()&&t.K_.size>0}function Us(t){return ye(t).W_.size===0}function lT(t){t.H_=void 0}async function TL(t){t.j_.set("Online")}async function IL(t){t.K_.forEach((e,n)=>{Bd(t,e)})}async function AL(t,e){lT(t),Hd(t)?(t.j_.q_(e),$d(t)):t.j_.set("Unknown")}async function RL(t,e,n){if(t.j_.set("Online"),e instanceof zb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.K_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.K_.delete(a),s.H_.removeTarget(a))}(t,e)}catch(r){te(ks,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oc(t,r)}else if(e instanceof wl?t.H_.We(e):e instanceof Wb?t.H_.Ze(e):t.H_.je(e),!n.isEqual(_e.min()))try{const r=await rT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.H_.ot(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.K_.get(u);f&&i.K_.set(u,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const f=i.K_.get(c);if(!f)return;i.K_.set(c,f.withResumeToken(bt.EMPTY_BYTE_STRING,f.snapshotVersion)),aT(i,c);const d=new Vr(f.target,c,u,f.sequenceNumber);Bd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(ks,"Failed to raise snapshot:",r),await oc(t,r)}}async function oc(t,e,n){if(!Bi(e))throw e;t.W_.add(1),await Ea(t),t.j_.set("Offline"),n||(n=()=>rT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(ks,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Kc(t)})}function cT(t,e){return e().catch(n=>oc(t,n,e))}async function Gc(t){const e=ye(t),n=Jr(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Rd;for(;SL(e);)try{const s=await lL(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,PL(e,s)}catch(s){await oc(e,s)}uT(e)&&fT(e)}function SL(t){return Us(t)&&t.U_.length<10}function PL(t,e){t.U_.push(e);const n=Jr(t);n.c_()&&n.S_&&n.b_(e.mutations)}function uT(t){return Us(t)&&!Jr(t).u_()&&t.U_.length>0}function fT(t){Jr(t).start()}async function CL(t){Jr(t).C_()}async function kL(t){const e=Jr(t);for(const n of t.U_)e.b_(n.mutations)}async function OL(t,e,n){const r=t.U_.shift(),s=Nd.from(r,e,n);await cT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Gc(t)}async function xL(t,e){e&&Jr(t).S_&&await async function(r,s){if(function(o){return pD(o)&&o!==H.ABORTED}(s.code)){const i=r.U_.shift();Jr(r).h_(),await cT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gc(r)}}(t,e),uT(t)&&fT(t)}async function Z_(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te(ks,"RemoteStore received new credentials");const r=Us(n);n.W_.add(3),await Ea(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Kc(n)}async function NL(t,e){const n=ye(t);e?(n.W_.delete(2),await Kc(n)):e||(n.W_.add(2),await Ea(n),n.j_.set("Unknown"))}function $i(t){return t.J_||(t.J_=function(n,r,s){const i=ye(n);return i.M_(),new _L(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:TL.bind(null,t),No:IL.bind(null,t),Lo:AL.bind(null,t),p_:RL.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Hd(t)?$d(t):t.j_.set("Unknown")):(await t.J_.stop(),lT(t))})),t.J_}function Jr(t){return t.Y_||(t.Y_=function(n,r,s){const i=ye(n);return i.M_(),new yL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:CL.bind(null,t),Lo:xL.bind(null,t),D_:kL.bind(null,t),v_:OL.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Gc(t)):(await t.Y_.stop(),t.U_.length>0&&(te(ks,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new qd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wd(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Bi(t))return new le(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{static emptySet(e){return new mi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ey{constructor(){this.Z_=new Ye(fe.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ki{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ki(e,n,mi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class LL{constructor(){this.queries=ty(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=ty(),i.forEach((o,a)=>{for(const c of a.ta)c.onError(r)})})(this,new le(H.ABORTED,"Firestore shutting down"))}}function ty(){return new Fs(t=>xb(t),Bc)}async function ML(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new DL,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Wd(o,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&zd(n)}async function VL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FL(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ta)a.oa(s)&&(r=!0);o.ea=s}}r&&zd(n)}function UL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function zd(t){t.ia.forEach(e=>{e.next()})}var dh,ny;(ny=dh||(dh={}))._a="default",ny.Cache="cache";class jL{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==dh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.key=e}}class dT{constructor(e){this.key=e}}class BL{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Te(),this.mutatedKeys=Te(),this.ya=Nb(e),this.wa=new mi(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new ey,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const p=s.get(f),g=$c(this.query,d)?d:null,w=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?w!==k&&(r.track({type:3,doc:g}),x=!0):this.va(p,g)||(r.track({type:2,doc:g}),x=!0,(c&&this.ya(g,c)>0||u&&this.ya(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),x=!0):p&&!g&&(r.track({type:1,doc:p}),x=!0,(c||u)&&(a=!0)),x&&(g?(o=o.add(g),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:a,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,d)=>function(g,w){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return k(g)-k(w)}(f.type,d.type)||this.ya(f.doc,d.doc)),this.Ca(r),s=s!=null&&s;const a=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new ki(this.query,e.wa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ey,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Te(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new dT(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new hT(r))}),n}Oa(e){this.fa=e.gs,this.pa=Te();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return ki.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Kd="SyncEngine";class $L{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HL{constructor(e){this.key=e,this.Ba=!1}}class qL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Fs(a=>xb(a),Bc),this.qa=new Map,this.Qa=new Set,this.$a=new Ye(fe.comparator),this.Ua=new Map,this.Ka=new Md,this.Wa={},this.Ga=new Map,this.za=Ci.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function WL(t,e,n=!0){const r=vT(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await pT(r,e,n,!0),s}async function zL(t,e){const n=vT(t);await pT(n,e,!0,!1)}async function pT(t,e,n,r){const s=await cL(t.localStore,Fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await KL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&oT(t.remoteStore,s),a}async function KL(t,e,n,r,s){t.Ha=(d,p,g)=>async function(k,x,N,P){let y=x.view.ba(N);y.ls&&(y=await G_(k.localStore,x.query,!1).then(({documents:T})=>x.view.ba(T,y)));const R=P&&P.targetChanges.get(x.targetId),D=P&&P.targetMismatches.get(x.targetId)!=null,M=x.view.applyChanges(y,k.isPrimaryClient,R,D);return sy(k,x.targetId,M.Ma),M.snapshot}(t,d,p,g);const i=await G_(t.localStore,e,!0),o=new BL(e,i.gs),a=o.ba(i.documents),c=va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);sy(t,n,u.Ma);const f=new $L(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function GL(t,e,n){const r=ye(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Bc(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&jd(r.remoteStore,s.targetId),ph(r,s.targetId)}).catch(ji)):(ph(r,s.targetId),await fh(r.localStore,s.targetId,!0))}async function QL(t,e){const n=ye(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jd(n.remoteStore,r.targetId))}async function YL(t,e,n){const r=rM(t);try{const s=await function(o,a){const c=ye(o),u=lt.now(),f=a.reduce((g,w)=>g.add(w.key),Te());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=cr(),k=Te();return c.ds.getEntries(g,f).next(x=>{w=x,w.forEach((N,P)=>{P.isValidDocument()||(k=k.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,w)).next(x=>{d=x;const N=[];for(const P of a){const y=cD(P,d.get(P.key).overlayedDocument);y!=null&&N.push(new as(P.key,y,Ib(y.value.mapValue),un.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,N,a)}).next(x=>{p=x;const N=x.applyToLocalDocumentSet(d,k);return c.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:p.batchId,changes:Lb(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Ye(ve)),u=u.insert(a,c),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await wa(r,s.changes),await Gc(r.remoteStore)}catch(s){const i=Wd(s,"Failed to persist write");n.reject(i)}}async function mT(t,e){const n=ye(t);try{const r=await oL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ne(o.Ba):s.removedDocuments.size>0&&(Ne(o.Ba),o.Ba=!1))}),await wa(n,r,e)}catch(r){await ji(r)}}function ry(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const a=o.view.sa(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ye(o);c.onlineState=a;let u=!1;c.queries.forEach((f,d)=>{for(const p of d.ta)p.sa(a)&&(u=!0)}),u&&zd(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XL(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new Ye(fe.comparator);o=o.insert(i,xt.newNoDocument(i,_e.min()));const a=Te().add(i),c=new Wc(_e.min(),new Map,new Ye(ve),o,a);await mT(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),Gd(r)}else await fh(r.localStore,e,!1).then(()=>ph(r,e,n)).catch(ji)}async function JL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await iL(n.localStore,e);_T(n,r,null),gT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wa(n,s)}catch(s){await ji(s)}}async function ZL(t,e,n){const r=ye(t);try{const s=await function(o,a){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ne(d!==null),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);_T(r,e,n),gT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wa(r,s)}catch(s){await ji(s)}}function gT(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function _T(t,e,n){const r=ye(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function ph(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||yT(t,r)})}function yT(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(jd(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Gd(t))}function sy(t,e,n){for(const r of n)r instanceof hT?(t.Ka.addReference(r.key,e),eM(t,r)):r instanceof dT?(te(Kd,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||yT(t,r.key)):me()}function eM(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(te(Kd,"New document in limbo: "+n),t.Qa.add(r),Gd(t))}function Gd(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new fe(qe.fromString(e)),r=t.za.next();t.Ua.set(r,new HL(n)),t.$a=t.$a.insert(n,r),oT(t.remoteStore,new Vr(Fn(Ob(n.path)),r,"TargetPurposeLimboResolution",Vc.ae))}}async function wa(t,e,n){const r=ye(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,c)=>{o.push(r.Ha(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Fd.Yi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,u){const f=ye(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,p=>B.forEach(p.Hi,g=>f.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>B.forEach(p.Ji,g=>f.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Bi(d))throw d;te(Ud,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=f.Ts.get(p),w=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(w);f.Ts=f.Ts.insert(p,k)}}}(r.localStore,i))}async function tM(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te(Kd,"User change. New user:",e.toKey());const r=await nT(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(a=>{a.forEach(c=>{c.reject(new le(H.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wa(n,r.Rs)}}function nM(t,e){const n=ye(t),r=n.Ua.get(e);if(r&&r.Ba)return Te().add(r.key);{let s=Te();const i=n.qa.get(e);if(!i)return s;for(const o of i){const a=n.ka.get(o);s=s.unionWith(a.view.Sa)}return s}}function vT(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XL.bind(null,e),e.La.p_=FL.bind(null,e.eventManager),e.La.Ja=UL.bind(null,e.eventManager),e}function rM(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZL.bind(null,e),e}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return sL(this.persistence,new tL,e.initialUser,this.serializer)}Xa(e){return new tT(Vd.ri,this.serializer)}Za(e){return new fL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class sM extends ac{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ne(this.persistence.referenceDelegate instanceof ic);const r=this.persistence.referenceDelegate.garbageCollector;return new jD(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new tT(r=>ic.ri(r,n),this.serializer)}}class mh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ry(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tM.bind(null,this.syncEngine),await NL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LL}()}createDatastore(e){const n=zc(e.databaseInfo.databaseId),r=function(i){return new gL(i)}(e.databaseInfo);return function(i,o,a,c){return new EL(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new bL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ry(this.syncEngine,n,0),function(){return X_.D()?new X_:new hL}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,f){const d=new qL(s,i,o,a,c,u);return f&&(d.ja=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te(ks,"RemoteStore shutting down."),i.W_.add(5),await Ea(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}mh.provider={build:()=>new mh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="FirestoreClient";class oM{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=pb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(Zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zu(t,e){t.asyncQueue.verifyOperationInProgress(),te(Zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aM(t);te(Zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Z_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Z_(e.remoteStore,s)),t._onlineComponents=e}async function aM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Zr,"Using user provided OfflineComponentProvider");try{await Zu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ai("Error using user provided cache. Falling back to memory cache: "+n),await Zu(t,new ac)}}else te(Zr,"Using default OfflineComponentProvider"),await Zu(t,new sM(void 0));return t._offlineComponents}async function ET(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Zr,"Using user provided OnlineComponentProvider"),await iy(t,t._uninitializedComponentsProvider._online)):(te(Zr,"Using default OnlineComponentProvider"),await iy(t,new mh))),t._onlineComponents}function lM(t){return ET(t).then(e=>e.syncEngine)}async function cM(t){const e=await ET(t),n=e.eventManager;return n.onListen=WL.bind(null,e.syncEngine),n.onUnlisten=GL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QL.bind(null,e.syncEngine),n}function uM(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const f=new iM({next:p=>{f.su(),o.enqueueAndForget(()=>VL(i,d)),p.fromCache&&c.source==="server"?u.reject(new le(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new jL(a,f,{includeMetadataChanges:!0,Ta:!0});return ML(i,d)}(await cM(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function wT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bT(t,e,n){if(!n)throw new le(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fM(t,e,n,r){if(e===!0&&r===!0)throw new le(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ay(t){if(!fe.isDocumentKey(t))throw new le(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ly(t){if(fe.isDocumentKey(t))throw new le(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qd(t);throw new le(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="firestore.googleapis.com",cy=!0;class uy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TT,this.ssl=cy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:cy;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FD)throw new le(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new p2;switch(r.type){case"firstParty":return new y2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oy.get(n);r&&(te("ComponentProvider","Removing Datastore"),oy.delete(n),r.terminate())}(this),Promise.resolve()}}function hM(t,e,n,r={}){var s;const i=(t=Oi(t,Qc))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;i.host!==TT&&i.host!==a&&Ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:r});if(!Rs(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Pt.MOCK_USER;else{u=Ew(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new le(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Pt(d)}t._authCredentials=new m2(new hb(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yc(this.firestore,e,this._query)}}class fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class Wr extends Yc{constructor(e,n,r){super(e,n,Ob(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new fe(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function v9(t,e,...n){if(t=Ze(t),bT("collection","path",e),t instanceof Qc){const r=qe.fromString(e,...n);return ly(r),new Wr(t,null,r)}{if(!(t instanceof fn||t instanceof Wr))throw new le(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return ly(r),new Wr(t.firestore,null,r)}}function E9(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=pb.newId()),bT("doc","path",e),t instanceof Qc){const r=qe.fromString(e,...n);return ay(r),new fn(t,null,new fe(r))}{if(!(t instanceof fn||t instanceof Wr))throw new le(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return ay(r),new fn(t.firestore,t instanceof Wr?t.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="AsyncQueue";class hy{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new sT(this,"async_queue_retry"),this.Su=()=>{const r=Ju();r&&te(fy,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Ju();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new qr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Bi(e))throw e;te(fy,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw lr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=qd.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Xc extends Qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hy(e),this._firestoreClient=void 0,await e}}}function dM(t,e){const n=typeof t=="object"?t:md(),r=typeof t=="string"?t:Jl,s=xc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_w("firestore");i&&hM(s,...i)}return s}function Yd(t){if(t._terminated)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pM(t),t._firestoreClient}function pM(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,f){return new N2(a,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,wT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new oM(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xi(bt.fromBase64String(e))}catch(n){throw new le(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xi(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class Zd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=/^__.*__$/;class gM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}class IT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function AT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class ep{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return lc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(AT(this.Lu)&&mM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class _M{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zc(e)}ju(e,n,r,s=!1){return new ep({Lu:e,methodName:n,zu:r,path:yt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RT(t){const e=t._freezeSettings(),n=zc(t._databaseId);return new _M(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ST(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);tp("Data must be an object, but it was:",o,r);const a=PT(r,o);let c,u;if(i.merge)c=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const p=gh(e,d,n);if(!o.contains(p))throw new le(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);kT(f,p)||f.push(p)}c=new Xt(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new gM(new Kt(a),c,u)}class Zc extends Xd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zc}}function yM(t,e,n,r){const s=t.ju(1,e,n);tp("Data must be an object, but it was:",s,r);const i=[],o=Kt.empty();os(r,(c,u)=>{const f=np(e,c,n);u=Ze(u);const d=s.Uu(f);if(u instanceof Zc)i.push(f);else{const p=eu(u,d);p!=null&&(i.push(f),o.set(f,p))}});const a=new Xt(i);return new IT(o,a,s.fieldTransforms)}function vM(t,e,n,r,s,i){const o=t.ju(1,e,n),a=[gh(e,r,n)],c=[s];if(i.length%2!=0)throw new le(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(gh(e,i[p])),c.push(i[p+1]);const u=[],f=Kt.empty();for(let p=a.length-1;p>=0;--p)if(!kT(u,a[p])){const g=a[p];let w=c[p];w=Ze(w);const k=o.Uu(g);if(w instanceof Zc)u.push(g);else{const x=eu(w,k);x!=null&&(u.push(g),f.set(g,x))}}const d=new Xt(u);return new IT(f,d,o.fieldTransforms)}function eu(t,e){if(CT(t=Ze(t)))return tp("Unsupported field value:",e,t),PT(t,e);if(t instanceof Xd)return function(r,s){if(!AT(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=eu(a,s.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:sc(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sc(s.serializer,i)}}if(r instanceof Jd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xi)return{bytesValue:Kb(s.serializer,r._byteString)};if(r instanceof fn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ld(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Zd)return function(o,a){return{mapValue:{fields:{[bb]:{stringValue:Tb},[Zl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return Od(a.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Qd(r)}`)}(t,e)}function PT(t,e){const n={};return gb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=eu(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function CT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Jd||t instanceof xi||t instanceof fn||t instanceof Xd||t instanceof Zd)}function tp(t,e,n){if(!CT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qd(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function gh(t,e,n){if((e=Ze(e))instanceof Jc)return e._internalPath;if(typeof e=="string")return np(t,e);throw lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const EM=new RegExp("[~\\*/\\[\\]]");function np(t,e,n){if(e.search(EM)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jc(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new le(H.INVALID_ARGUMENT,a+t+c)}function kT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wM extends OT{data(){return super.data()}}function xT(t,e){return typeof e=="string"?np(t,e):e instanceof Jc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new le(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TM{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Zl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new Zd(i)}convertGeoPoint(e){return new Jd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xo(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Ne(Zb(r));const s=new Jo(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IM extends OT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bl extends IM{data(e={}){return super.data(e)}}class AM{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new rl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new rl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new bl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new rl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new bl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new rl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:RM(a.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class SM extends TM{constructor(e){super(),this.firestore=e}convertBytes(e){return new xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,n)}}function w9(t){t=Oi(t,Yc);const e=Oi(t.firestore,Xc),n=Yd(e),r=new SM(e);return bM(t._query),uM(n,t._query).then(s=>new AM(e,r,t,s))}function b9(t,e,n){t=Oi(t,fn);const r=Oi(t.firestore,Xc),s=NT(t.converter,e,n);return DT(r,[ST(RT(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function DT(t,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>YL(await lM(r),s,i)),i.promise}(Yd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=RT(e)}set(e,n,r){this._verifyNotCommitted();const s=ef(e,this._firestore),i=NT(s.converter,n,r),o=ST(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,un.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=ef(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof Jc?vM(this._dataReader,"WriteBatch.update",i._key,n,r,s):yM(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,un.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ef(e,this._firestore);return this._mutations=this._mutations.concat(new xd(n._key,un.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new le(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ef(t,e){if((t=Ze(t)).firestore!==e)throw new le(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T9(t){return Yd(t=Oi(t,Xc)),new PM(t,e=>DT(t,e))}(function(e,n=!0){(function(s){Ui=s})(Ms),Ss(new Kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Xc(new g2(r.getProvider("auth-internal")),new v2(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ln(y_,v_,e),Ln(y_,v_,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firebasestorage.googleapis.com",MT="storageBucket",CM=2*60*1e3,kM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Hn{constructor(e,n,r=0){super(tf(e),`Firebase Storage: ${n} (${tf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function tf(t){return"storage/"+t}function rp(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function OM(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xM(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function DM(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LM(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MM(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VM(){return new tt(et.CANCELED,"User canceled the upload/download.")}function FM(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function UM(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+MT+"' property when initializing the app?")}function BM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $M(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _h(t){return new tt(et.INVALID_ARGUMENT,t)}function VT(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function qM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function io(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw UM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${f}/b/${s}/o${p}`,"i"),w={bucket:1,path:3},k=n===LT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",N=new RegExp(`^https?://${k}/${s}/${x}`,"i"),y=[{regex:a,indices:c,postModify:i},{regex:g,indices:w,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<y.length;R++){const D=y[R],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let v=M[D.indices.path];v||(v=""),r=new Jt(T,v),D.postModify(r);break}}if(r==null)throw FM(e);return r}}class WM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function f(...x){u||(u=!0,e.apply(null,x))}function d(x){s=setTimeout(()=>{s=null,t(g,c())},x)}function p(){i&&clearTimeout(i)}function g(x,...N){if(u){p();return}if(x){p(),f.call(null,x,...N);return}if(c()||o){p(),f.call(null,x,...N);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let w=!1;function k(x){w||(w=!0,p(),!u&&(s!==null?(x||(a=2),clearTimeout(s),d(0)):x||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function KM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(t){return t!==void 0}function QM(t){return typeof t=="object"&&!Array.isArray(t)}function sp(t){return typeof t=="string"||t instanceof String}function dy(t){return ip()&&t instanceof Blob}function ip(){return typeof Blob<"u"}function py(t,e,n,r){if(r<e)throw _h(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _h(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Is||(Is={}));/**
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
 */function YM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r,s,i,o,a,c,u,f,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new sl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Is.NO_ERROR,c=i.getStatus();if(!a||YM(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Is.ABORT;r(!1,new sl(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new sl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());GM(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=rp();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?VT():VM();o(c)}else{const c=MM();o(c)}};this.canceled_?n(!1,new sl(!1,null,!0)):this.backoffId_=zM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nV(t,e,n,r,s,i,o=!0){const a=FT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return eV(u,e),JM(u,n),ZM(u,i),tV(u,r),new XM(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sV(...t){const e=rV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ip())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function oV(t){if(typeof atob>"u")throw HM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nf{constructor(e,n){this.data=e,this.contentType=n||null}}function aV(t,e){switch(t){case On.RAW:return new nf(UT(e));case On.BASE64:case On.BASE64URL:return new nf(jT(t,e));case On.DATA_URL:return new nf(cV(e),uV(e))}throw rp()}function UT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lV(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(On.DATA_URL,"Malformed data URL.")}return UT(e)}function jT(t,e){switch(t){case On.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ko(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case On.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ko(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oV(e)}catch(s){throw s.message.includes("polyfill")?s:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class BT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(On.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cV(t){const e=new BT(t);return e.base64?jT(On.BASE64,e.rest):lV(e.rest)}function uV(t){return new BT(t).contentType}function fV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){let r=0,s="";dy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(dy(this.data_)){const r=this.data_,s=iV(r,e,n);return s===null?null:new Lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Lr(r,!0)}}static getBlob(...e){if(ip()){const n=e.map(r=>r instanceof Lr?r.data_:r);return new Lr(sV.apply(null,n))}else{const n=e.map(o=>sp(o)?aV(On.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){let e;try{e=JSON.parse(t)}catch{return null}return QM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function HT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(t,e){return e}class Ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||pV}}let il=null;function mV(t){return!sp(t)||t.length<2?t:HT(t)}function qT(){if(il)return il;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(i,o){return mV(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ft("size");return s.xform=r,t.push(s),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),il=t,il}function gV(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function _V(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return gV(r,t),r}function WT(t,e,n){const r=$T(e);return r===null?null:_V(t,r,n)}function yV(t,e,n,r){const s=$T(e);if(s===null||!sp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,d=t.fullPath,p="/b/"+o(f)+"/o/"+o(d),g=op(p,n,r),w=FT({alt:"media",token:u});return g+w})[0]}function vV(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class zT{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){if(!t)throw rp()}function EV(t,e){function n(r,s){const i=WT(t,s,e);return KT(i!==null),i}return n}function wV(t,e){function n(r,s){const i=WT(t,s,e);return KT(i!==null),yV(i,s,t.host,t._protocol)}return n}function GT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=DM():s=NM():n.getStatus()===402?s=xM(t.bucket):n.getStatus()===403?s=LM(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function bV(t){const e=GT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=OM(t.path)),i.serverResponse=s.serverResponse,i}return n}function TV(t,e,n){const r=e.fullServerUrl(),s=op(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new zT(s,i,wV(t,n),o);return a.errorHandler=bV(e),a}function IV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function AV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=IV(null,e)),r}function RV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let R=0;R<2;R++)y=y+Math.random().toString().slice(2);return y}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=AV(e,r,s),f=vV(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=Lr.getBlob(d,r,p);if(g===null)throw BM();const w={name:u.fullPath},k=op(i,t.host,t._protocol),x="POST",N=t.maxUploadRetryTime,P=new zT(k,x,EV(t,n),N);return P.urlParams=w,P.headers=o,P.body=g.uploadData(),P.errorHandler=GT(e),P}class SV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PV extends SV{initXhr(){this.xhr_.responseType="text"}}function QT(){return new PV}/**
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
 */class Os{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Os(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HT(this._location.path)}get storage(){return this._service}get parent(){const e=hV(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qM(e)}}function CV(t,e,n){t._throwIfRoot("uploadBytes");const r=RV(t.storage,t._location,qT(),new Lr(e,!0),n);return t.storage.makeRequestWithTokens(r,QT).then(s=>({metadata:s,ref:t}))}function kV(t){t._throwIfRoot("getDownloadURL");const e=TV(t.storage,t._location,qT());return t.storage.makeRequestWithTokens(e,QT).then(n=>{if(n===null)throw $M();return n})}function OV(t,e){const n=dV(t._location.path,e),r=new Jt(t._location.bucket,n);return new Os(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xV(t){return/^[A-Za-z]+:\/\//.test(t)}function NV(t,e){return new Os(t,e)}function YT(t,e){if(t instanceof ap){const n=t;if(n._bucket==null)throw jM();const r=new Os(n,n._bucket);return e!=null?YT(r,e):r}else return e!==void 0?OV(t,e):t}function DV(t,e){if(e&&xV(e)){if(t instanceof ap)return NV(t,e);throw _h("To use ref(service, url), the first argument must be a Storage instance.")}else return YT(t,e)}function my(t,e){const n=e==null?void 0:e[MT];return n==null?null:Jt.makeFromBucketSpec(n,t)}function LV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ew(s,t.app.options.projectId))}class ap{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=LT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CM,this._maxUploadRetryTime=kM,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=my(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=my(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Os(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new WM(VT());{const o=nV(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const gy="@firebase/storage",_y="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="storage";function I9(t,e,n){return t=Ze(t),CV(t,e,n)}function A9(t){return t=Ze(t),kV(t)}function R9(t,e){return t=Ze(t),DV(t,e)}function MV(t=md(),e){t=Ze(t);const r=xc(t,XT).getImmediate({identifier:e}),s=_w("storage");return s&&VV(r,...s),r}function VV(t,e,n,r={}){LV(t,e,n,r)}function FV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ap(n,r,s,e,Ms)}function UV(){Ss(new Kr(XT,FV,"PUBLIC").setMultipleInstances(!0)),Ln(gy,_y,""),Ln(gy,_y,"esm2017")}UV();const jV=Zt(t=>{const e=Ls(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=Tw(n),s=t2(r),i=dM(r),o=MV(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function BV(t,e,n){return(e=HV(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yy(Object(n),!0).forEach(function(r){BV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $V(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function HV(t){var e=$V(t,"string");return typeof e=="symbol"?e:e+""}const vy=()=>{};let lp={},JT={},ZT=null,e0={mark:vy,measure:vy};try{typeof window<"u"&&(lp=window),typeof document<"u"&&(JT=document),typeof MutationObserver<"u"&&(ZT=MutationObserver),typeof performance<"u"&&(e0=performance)}catch{}const{userAgent:Ey=""}=lp.navigator||{},es=lp,$e=JT,wy=ZT,ol=e0;es.document;const mr=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",t0=~Ey.indexOf("MSIE")||~Ey.indexOf("Trident/");var qV=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,WV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,n0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},zV={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},r0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Lt="classic",tu="duotone",KV="sharp",GV="sharp-duotone",s0=[Lt,tu,KV,GV],QV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},YV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},XV=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),JV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ZV=["fak","fa-kit","fakd","fa-kit-duotone"],by={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},e4=["kit"],t4={kit:{"fa-kit":"fak"}},n4=["fak","fakd"],r4={kit:{fak:"fa-kit"}},Ty={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},al={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],i4=["fak","fa-kit","fakd","fa-kit-duotone"],o4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},a4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},l4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},yh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},c4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],vh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...s4,...c4],u4=["solid","regular","light","thin","duotone","brands"],i0=[1,2,3,4,5,6,7,8,9,10],f4=i0.concat([11,12,13,14,15,16,17,18,19,20]),h4=[...Object.keys(l4),...u4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",al.GROUP,al.SWAP_OPACITY,al.PRIMARY,al.SECONDARY].concat(i0.map(t=>"".concat(t,"x"))).concat(f4.map(t=>"w-".concat(t))),d4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ur="___FONT_AWESOME___",Eh=16,o0="fa",a0="svg-inline--fa",xs="data-fa-i2svg",wh="data-fa-pseudo-element",p4="data-fa-pseudo-element-pending",cp="data-prefix",up="data-icon",Iy="fontawesome-i2svg",m4="async",g4=["HTML","HEAD","STYLE","SCRIPT"],l0=(()=>{try{return!0}catch{return!1}})();function ba(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Lt]}})}const c0=z({},n0);c0[Lt]=z(z(z(z({},{"fa-duotone":"duotone"}),n0[Lt]),by.kit),by["kit-duotone"]);const _4=ba(c0),bh=z({},JV);bh[Lt]=z(z(z(z({},{duotone:"fad"}),bh[Lt]),Ty.kit),Ty["kit-duotone"]);const Ay=ba(bh),Th=z({},yh);Th[Lt]=z(z({},Th[Lt]),r4.kit);const fp=ba(Th),Ih=z({},a4);Ih[Lt]=z(z({},Ih[Lt]),t4.kit);ba(Ih);const y4=qV,u0="fa-layers-text",v4=WV,E4=z({},QV);ba(E4);const w4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rf=zV,b4=[...e4,...h4],Oo=es.FontAwesomeConfig||{};function T4(t){var e=$e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function I4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$e&&typeof $e.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=I4(T4(n));s!=null&&(Oo[r]=s)});const f0={styleDefault:"solid",familyDefault:Lt,cssPrefix:o0,replacementClass:a0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oo.familyPrefix&&(Oo.cssPrefix=Oo.familyPrefix);const Ni=z(z({},f0),Oo);Ni.autoReplaceSvg||(Ni.observeMutations=!1);const ae={};Object.keys(f0).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){Ni[t]=e,xo.forEach(n=>n(ae))},get:function(){return Ni[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){Ni.cssPrefix=t,xo.forEach(e=>e(ae))},get:function(){return Ni.cssPrefix}});es.FontAwesomeConfig=ae;const xo=[];function A4(t){return xo.push(t),()=>{xo.splice(xo.indexOf(t),1)}}const Tr=Eh,xn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function R4(t){if(!t||!mr)return;const e=$e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$e.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $e.head.insertBefore(e,r),t}const S4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function na(){let t=12,e="";for(;t-- >0;)e+=S4[Math.random()*62|0];return e}function Hi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function hp(t){return t.classList?Hi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function h0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P4(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(h0(t[n]),'" '),"").trim()}function nu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function dp(t){return t.size!==xn.size||t.x!==xn.x||t.y!==xn.y||t.rotate!==xn.rotate||t.flipX||t.flipY}function C4(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function k4(t){let{transform:e,width:n=Eh,height:r=Eh,startCentered:s=!1}=t,i="";return s&&t0?i+="translate(".concat(e.x/Tr-n/2,"em, ").concat(e.y/Tr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Tr,"em), calc(-50% + ").concat(e.y/Tr,"em)) "):i+="translate(".concat(e.x/Tr,"em, ").concat(e.y/Tr,"em) "),i+="scale(".concat(e.size/Tr*(e.flipX?-1:1),", ").concat(e.size/Tr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var O4=`:root, :host {
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
}`;function d0(){const t=o0,e=a0,n=ae.cssPrefix,r=ae.replacementClass;let s=O4;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let Ry=!1;function sf(){ae.autoAddCss&&!Ry&&(R4(d0()),Ry=!0)}var x4={mixout(){return{dom:{css:d0,insertCss:sf}}},hooks(){return{beforeDOMElementCreation(){sf()},beforeI2svg(){sf()}}}};const fr=es||{};fr[ur]||(fr[ur]={});fr[ur].styles||(fr[ur].styles={});fr[ur].hooks||(fr[ur].hooks={});fr[ur].shims||(fr[ur].shims=[]);var Nn=fr[ur];const p0=[],m0=function(){$e.removeEventListener("DOMContentLoaded",m0),cc=1,p0.map(t=>t())};let cc=!1;mr&&(cc=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),cc||$e.addEventListener("DOMContentLoaded",m0));function N4(t){mr&&(cc?setTimeout(t,0):p0.push(t))}function Ta(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?h0(t):"<".concat(e," ").concat(P4(n),">").concat(r.map(Ta).join(""),"</").concat(e,">")}function Sy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var of=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=a(f,e[u],u,e);return f};function D4(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ah(t){const e=D4(t);return e.length===1?e[0].toString(16):null}function L4(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Py(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Py(e);typeof Nn.hooks.addPack=="function"&&!r?Nn.hooks.addPack(t,Py(e)):Nn.styles[t]=z(z({},Nn.styles[t]||{}),s),t==="fas"&&Rh("fa",e)}const{styles:ra,shims:M4}=Nn,g0=Object.keys(fp),V4=g0.reduce((t,e)=>(t[e]=Object.keys(fp[e]),t),{});let pp=null,_0={},y0={},v0={},E0={},w0={};function F4(t){return~b4.indexOf(t)}function U4(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!F4(s)?s:null}const b0=()=>{const t=r=>of(ra,(s,i,o)=>(s[o]=of(i,r,{}),s),{});_0=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),y0=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),w0=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ra||ae.autoFetchSvg,n=of(M4,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});v0=n.names,E0=n.unicodes,pp=ru(ae.styleDefault,{family:ae.familyDefault})};A4(t=>{pp=ru(t.styleDefault,{family:ae.familyDefault})});b0();function mp(t,e){return(_0[t]||{})[e]}function j4(t,e){return(y0[t]||{})[e]}function vs(t,e){return(w0[t]||{})[e]}function T0(t){return v0[t]||{prefix:null,iconName:null}}function B4(t){const e=E0[t],n=mp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ts(){return pp}const I0=()=>({prefix:null,iconName:null,rest:[]});function $4(t){let e=Lt;const n=g0.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return s0.forEach(r=>{(t.includes(n[r])||t.some(s=>V4[r].includes(s)))&&(e=r)}),e}function ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Lt}=e,r=_4[n][t];if(n===tu&&!t)return"fad";const s=Ay[n][t]||Ay[n][r],i=t in Nn.styles?t:null;return s||i||null}function H4(t){let e=[],n=null;return t.forEach(r=>{const s=U4(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Cy(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function su(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=vh.concat(i4),i=Cy(t.filter(d=>s.includes(d))),o=Cy(t.filter(d=>!vh.includes(d))),a=i.filter(d=>(r=d,!r0.includes(d))),[c=null]=a,u=$4(i),f=z(z({},H4(o)),{},{prefix:ru(c,{family:u})});return z(z(z({},f),K4({values:t,family:u,styles:ra,config:ae,canonical:f,givenPrefix:r})),q4(n,r,f))}function q4(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?T0(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!ra.far&&ra.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const W4=s0.filter(t=>t!==Lt||t!==tu),z4=Object.keys(yh).filter(t=>t!==Lt).map(t=>Object.keys(yh[t])).flat();function K4(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===tu,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||u||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&W4.includes(n)&&(Object.keys(i).find(p=>z4.includes(p))||o.autoFetchSvg)){const p=XV.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=vs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ts()||"fas"),r}class G4{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=z(z({},this.definitions[i]||{}),s[i]),Rh(i,s[i]);const o=fp[Lt][i];o&&Rh(o,s[i]),b0()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let ky=[],si={};const gi={},Q4=Object.keys(gi);function Y4(t,e){let{mixoutsTo:n}=e;return ky=t,si={},Object.keys(gi).forEach(r=>{Q4.indexOf(r)===-1&&delete gi[r]}),ky.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{si[o]||(si[o]=[]),si[o].push(i[o])})}r.provides&&r.provides(gi)}),n}function Sh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(si[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ns(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(si[t]||[]).forEach(i=>{i.apply(null,n)})}function ns(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gi[t]?gi[t].apply(null,e):void 0}function Ph(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ts();if(e)return e=vs(n,e)||e,Sy(A0.definitions,n,e)||Sy(Nn.styles,n,e)}const A0=new G4,X4=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,Ns("noAuto")},J4={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(Ns("beforeI2svg",t),ns("pseudoElements2svg",t),ns("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,N4(()=>{eF({autoReplaceSvgRoot:e}),Ns("watch",t)})}},Z4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ru(t[0]);return{prefix:n,iconName:vs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(y4))){const e=su(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ts(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ts();return{prefix:e,iconName:vs(e,t)||t}}}},en={noAuto:X4,config:ae,dom:J4,parse:Z4,library:A0,findIconDefinition:Ph,toHtml:Ta},eF=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$e}=t;(Object.keys(Nn.styles).length>0||ae.autoFetchSvg)&&mr&&ae.autoReplaceSvg&&en.dom.i2svg({node:e})};function iu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ta(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=$e.createElement("div");return n.innerHTML=t.html,n.children}}),t}function tF(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(dp(o)&&n.found&&!r.found){const{width:a,height:c}=n,u={x:a/c/2,y:.5};s.style=nu(z(z({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function nF(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},s),{},{id:o}),children:r}]}]}function gp(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:u,extra:f,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,w=n4.includes(r),k=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>f.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(f.classes).join(" ");let x={children:[],attributes:z(z({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const N=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(x.attributes[xs]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||na())},children:[a]}),delete x.attributes.title);const P=z(z({},x),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:z(z({},N),f.styles)}),{children:y,attributes:R}=n.found&&e.found?ns("generateAbstractMask",P)||{children:[],attributes:{}}:ns("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=y,P.attributes=R,o?nF(P):tF(P)}function Oy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,c=z(z(z({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(c[xs]="");const u=z({},o.styles);dp(s)&&(u.transform=k4({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=nu(u);f.length>0&&(c.style=f);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function rF(t){const{content:e,title:n,extra:r}=t,s=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nu(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:af}=Nn;function Ch(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(rf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(rf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(rf.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const sF={found:!1,width:512,height:512};function iF(t,e){!l0&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function kh(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=ts()),new Promise((r,s)=>{if(n==="fa"){const i=T0(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&af[e]&&af[e][t]){const i=af[e][t];return r(Ch(i))}iF(t,e),r(z(z({},sF),{},{icon:ae.showMissingIcons&&t?ns("missingIconAbstract")||{}:{}}))})}const xy=()=>{},Oh=ae.measurePerformance&&ol&&ol.mark&&ol.measure?ol:{mark:xy,measure:xy},po='FA "6.7.2"',oF=t=>(Oh.mark("".concat(po," ").concat(t," begins")),()=>R0(t)),R0=t=>{Oh.mark("".concat(po," ").concat(t," ends")),Oh.measure("".concat(po," ").concat(t),"".concat(po," ").concat(t," begins"),"".concat(po," ").concat(t," ends"))};var _p={begin:oF,end:R0};const Tl=()=>{};function Ny(t){return typeof(t.getAttribute?t.getAttribute(xs):null)=="string"}function aF(t){const e=t.getAttribute?t.getAttribute(cp):null,n=t.getAttribute?t.getAttribute(up):null;return e&&n}function lF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function cF(){return ae.autoReplaceSvg===!0?Il.replace:Il[ae.autoReplaceSvg]||Il.replace}function uF(t){return $e.createElementNS("http://www.w3.org/2000/svg",t)}function fF(t){return $e.createElement(t)}function S0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?uF:fF}=e;if(typeof t=="string")return $e.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(S0(i,{ceFn:n}))}),r}function hF(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Il={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(S0(n),e)}),e.getAttribute(xs)===null&&ae.keepOriginalSource){let n=$e.createComment(hF(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~hp(e).indexOf(ae.replacementClass))return Il.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Ta(i)).join(`
`);e.setAttribute(xs,""),e.innerHTML=s}};function Dy(t){t()}function P0(t,e){const n=typeof e=="function"?e:Tl;if(t.length===0)n();else{let r=Dy;ae.mutateApproach===m4&&(r=es.requestAnimationFrame||Dy),r(()=>{const s=cF(),i=_p.begin("mutate");t.map(s),i(),n()})}}let yp=!1;function C0(){yp=!0}function xh(){yp=!1}let uc=null;function Ly(t){if(!wy||!ae.observeMutations)return;const{treeCallback:e=Tl,nodeCallback:n=Tl,pseudoElementsCallback:r=Tl,observeMutationsRoot:s=$e}=t;uc=new wy(i=>{if(yp)return;const o=ts();Hi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ny(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ny(a.target)&&~w4.indexOf(a.attributeName))if(a.attributeName==="class"&&aF(a.target)){const{prefix:c,iconName:u}=su(hp(a.target));a.target.setAttribute(cp,c||o),u&&a.target.setAttribute(up,u)}else lF(a.target)&&n(a.target)})}),mr&&uc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function dF(){uc&&uc.disconnect()}function pF(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function mF(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=su(hp(t));return s.prefix||(s.prefix=ts()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=j4(s.prefix,t.innerText)||mp(s.prefix,Ah(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function gF(t){const e=Hi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||na()):(e["aria-hidden"]="true",e.focusable="false")),e}function _F(){return{iconName:null,title:null,titleId:null,prefix:null,transform:xn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function My(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=mF(t),i=gF(t),o=Sh("parseNodeAttributes",{},t);let a=e.styleParser?pF(t):[];return z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:xn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:yF}=Nn;function k0(t){const e=ae.autoReplaceSvg==="nest"?My(t,{styleParser:!1}):My(t);return~e.extra.classes.indexOf(u0)?ns("generateLayersText",t,e):ns("generateSvgReplacementMutation",t,e)}function vF(){return[...ZV,...vh]}function Vy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=$e.documentElement.classList,r=f=>n.add("".concat(Iy,"-").concat(f)),s=f=>n.remove("".concat(Iy,"-").concat(f)),i=ae.autoFetchSvg?vF():r0.concat(Object.keys(yF));i.includes("fa")||i.push("fa");const o=[".".concat(u0,":not([").concat(xs,"])")].concat(i.map(f=>".".concat(f,":not([").concat(xs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Hi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=_p.begin("onTree"),u=a.reduce((f,d)=>{try{const p=k0(d);p&&f.push(p)}catch(p){l0||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,d)=>{Promise.all(u).then(p=>{P0(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(p=>{c(),d(p)})})}function EF(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k0(t).then(n=>{n&&P0([n],e)})}function wF(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ph(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Ph(s||{})),t(r,z(z({},n),{},{mask:s}))}}const bF=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=xn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return iu(z({type:"icon"},t),()=>(Ns("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||na()):(u["aria-hidden"]="true",u.focusable="false")),gp({icons:{main:Ch(g),mask:s?Ch(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:z(z({},xn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:f,classes:c}})))};var TF={mixout(){return{icon:wF(bF)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Vy,t.nodeCallback=EF,t}}},provides(t){t.i2svg=function(e){const{node:n=$e,callback:r=()=>{}}=e;return Vy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:u,maskId:f,extra:d}=n;return new Promise((p,g)=>{Promise.all([kh(r,o),u.iconName?kh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[k,x]=w;p([e,gp({icons:{main:k,mask:x},prefix:o,iconName:r,transform:a,symbol:c,maskId:f,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=nu(o);a.length>0&&(r.style=a);let c;return dp(i)&&(c=ns("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},IF={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return iu({type:"layer"},()=>{Ns("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},AF={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return iu({type:"counter",content:t},()=>(Ns("beforeDOMElementCreation",{content:t,params:e}),rF({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},RF={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=xn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return iu({type:"text",content:t},()=>(Ns("beforeDOMElementCreation",{content:t,params:e}),Oy({content:t,transform:z(z({},xn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(t0){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,a=u.height/c}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Oy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const SF=new RegExp('"',"ug"),Fy=[1105920,1112319],Uy=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),YV),d4),o4),Nh=Object.keys(Uy).reduce((t,e)=>(t[e.toLowerCase()]=Uy[e],t),{}),PF=Object.keys(Nh).reduce((t,e)=>{const n=Nh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function CF(t){const e=t.replace(SF,""),n=L4(e,0),r=n>=Fy[0]&&n<=Fy[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ah(s?e[0]:e),isSecondary:r||s}}function kF(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Nh[n]||{})[s]||PF[n]}function jy(t,e){const n="".concat(p4).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=Hi(t.children).filter(p=>p.getAttribute(wh)===e)[0],a=es.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(v4),f=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=kF(c,f);const{value:w,isSecondary:k}=CF(p),x=u[0].startsWith("FontAwesome");let N=mp(g,w),P=N;if(x){const y=B4(w);y.iconName&&y.prefix&&(N=y.iconName,g=y.prefix)}if(N&&!k&&(!o||o.getAttribute(cp)!==g||o.getAttribute(up)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);const y=_F(),{extra:R}=y;R.attributes[wh]=e,kh(N,g).then(D=>{const M=gp(z(z({},y),{},{icons:{main:D,mask:I0()},prefix:g,iconName:P,extra:R,watchable:!0})),T=$e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=M.map(v=>Ta(v)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function OF(t){return Promise.all([jy(t,"::before"),jy(t,"::after")])}function xF(t){return t.parentNode!==document.head&&!~g4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function By(t){if(mr)return new Promise((e,n)=>{const r=Hi(t.querySelectorAll("*")).filter(xF).map(OF),s=_p.begin("searchPseudoElements");C0(),Promise.all(r).then(()=>{s(),xh(),e()}).catch(()=>{s(),xh(),n()})})}var NF={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=By,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$e}=e;ae.searchPseudoElements&&By(n)}}};let $y=!1;var DF={mixout(){return{dom:{unwatch(){C0(),$y=!0}}}},hooks(){return{bootstrap(){Ly(Sh("mutationObserverCallbacks",{}))},noAuto(){dF()},watch(t){const{observeMutationsRoot:e}=t;$y?xh():Ly(Sh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Hy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var LF={mixout(){return{parse:{transform:t=>Hy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Hy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(c," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:z({},p.outer),children:[{tag:"g",attributes:z({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:z(z({},n.icon.attributes),p.path)}]}]}}}};const lf={x:0,y:0,width:"100%",height:"100%"};function qy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function MF(t){return t.tag==="g"?t.children:[t]}var VF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?su(n.split(" ").map(s=>s.trim())):I0();return r.prefix||(r.prefix=ts()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:c,icon:u}=s,{width:f,icon:d}=i,p=C4({transform:a,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:z(z({},lf),{},{fill:"white"})},w=u.children?{children:u.children.map(qy)}:{},k={tag:"g",attributes:z({},p.inner),children:[qy(z({tag:u.tag,attributes:z(z({},u.attributes),p.path)},w))]},x={tag:"g",attributes:z({},p.outer),children:[k]},N="mask-".concat(o||na()),P="clip-".concat(o||na()),y={tag:"mask",attributes:z(z({},lf),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:MF(d)},y]};return n.push(R,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(N,")")},lf)}),{children:n,attributes:r}}}},FF={provides(t){let e=!1;es.matchMedia&&(e=es.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=z(z({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},UF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},jF=[x4,TF,IF,AF,RF,NF,DF,LF,VF,FF,UF];Y4(jF,{mixoutsTo:en});en.noAuto;const BF=en.config,$F=en.library;en.dom;const Dh=en.parse;en.findIconDefinition;en.toHtml;const HF=en.icon;en.layer;en.text;en.counter;function Wy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Zn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wy(Object(n),!0).forEach(function(r){qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function WF(t){var e=qF(t,"string");return typeof e=="symbol"?e:e+""}function fc(t){"@babel/helpers - typeof";return fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fc(t)}function qt(t,e,n){return e=WF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function KF(t,e){if(t==null)return{};var n=zF(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var GF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O0={exports:{}};(function(t){(function(e){var n=function(N,P,y){if(!u(P)||d(P)||p(P)||g(P)||c(P))return P;var R,D=0,M=0;if(f(P))for(R=[],M=P.length;D<M;D++)R.push(n(N,P[D],y));else{R={};for(var T in P)Object.prototype.hasOwnProperty.call(P,T)&&(R[N(T,y)]=n(N,P[T],y))}return R},r=function(N,P){P=P||{};var y=P.separator||"_",R=P.split||/(?=[A-Z])/;return N.split(R).join(y)},s=function(N){return w(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(P,y){return y?y.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var P=s(N);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(N,P){return r(N,P).toLowerCase()},a=Object.prototype.toString,c=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},f=function(N){return a.call(N)=="[object Array]"},d=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},w=function(N){return N=N-0,N===N},k=function(N,P){var y=P&&"process"in P?P.process:P;return typeof y!="function"?N:function(R,D){return y(R,N,D)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,P){return n(k(s,P),N)},decamelizeKeys:function(N,P){return n(k(o,P),N,P)},pascalizeKeys:function(N,P){return n(k(i,P),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(GF)})(O0);var QF=O0.exports,YF=["class","style"];function XF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=QF.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function JF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function x0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return x0(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=JF(f);break;case"style":c.style=XF(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=KF(n,YF);return vt(t.tag,Zn(Zn(Zn({},e),{},{class:s.class,style:Zn(Zn({},s.style),o)},s.attrs),a),r)}var N0=!1;try{N0=!0}catch{}function ZF(){if(!N0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function cf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qt({},t,e):{}}function eU(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qt(qt(qt(qt(qt(qt(qt(qt(qt(qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),qt(qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function zy(t){if(t&&fc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Dh.icon)return Dh.icon(t);if(t===null)return null;if(fc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var tU=An({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return zy(e.icon)}),i=Ue(function(){return cf("classes",eU(e))}),o=Ue(function(){return cf("transform",typeof e.transform=="string"?Dh.transform(e.transform):e.transform)}),a=Ue(function(){return cf("mask",zy(e.mask))}),c=Ue(function(){return HF(s.value,Zn(Zn(Zn(Zn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});En(c,function(f){if(!f)return ZF("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ue(function(){return c.value?x0(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const nU={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const rU={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},sU=rU,iU={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},oU={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},aU={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};BF.autoAddCss=!1;$F.add(nU,oU,sU,aU,iU);const lU=Zt(t=>{t.vueApp.component("font-awesome-icon",tU)});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let D0;const ou=t=>D0=t,L0=Symbol();function Lh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var No;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(No||(No={}));function cU(){const t=Hh(!0),e=t.run(()=>Et({}));let n=[],r=[];const s=Yh({install(i){ou(s),s._a=i,i.provide(L0,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const M0=()=>{};function Ky(t,e,n,r=M0){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&aa()&&Rl(s),s}function Gs(t,...e){t.slice().forEach(n=>{n(...e)})}const uU=t=>t(),Gy=Symbol(),uf=Symbol();function Mh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Lh(s)&&Lh(r)&&t.hasOwnProperty(n)&&!Je(r)&&!rr(r)?t[n]=Mh(s,r):t[n]=r}return t}const fU=Symbol();function hU(t){return!Lh(t)||!t.hasOwnProperty(fU)}const{assign:Ir}=Object;function dU(t){return!!(Je(t)&&t.effect)}function pU(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const f=WI(n.state.value[t]);return Ir(f,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Yh(Ue(()=>{ou(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return c=V0(t,u,e,n,r,!0),c}function V0(t,e,n={},r,s,i){let o;const a=Ir({actions:{}},n),c={deep:!0};let u,f,d=[],p=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Et({});let k;function x(v){let _;u=f=!1,typeof v=="function"?(v(r.state.value[t]),_={type:No.patchFunction,storeId:t,events:g}):(Mh(r.state.value[t],v),_={type:No.patchObject,payload:v,storeId:t,events:g});const b=k=Symbol();$n().then(()=>{k===b&&(u=!0)}),f=!0,Gs(d,_,r.state.value[t])}const N=i?function(){const{state:_}=n,b=_?_():{};this.$patch(C=>{Ir(C,b)})}:M0;function P(){o.stop(),d=[],p=[],r._s.delete(t)}const y=(v,_="")=>{if(Gy in v)return v[uf]=_,v;const b=function(){ou(r);const C=Array.from(arguments),S=[],I=[];function ge(se){S.push(se)}function Ee(se){I.push(se)}Gs(p,{args:C,name:b[uf],store:D,after:ge,onError:Ee});let Z;try{Z=v.apply(this&&this.$id===t?this:D,C)}catch(se){throw Gs(I,se),se}return Z instanceof Promise?Z.then(se=>(Gs(S,se),se)).catch(se=>(Gs(I,se),Promise.reject(se))):(Gs(S,Z),Z)};return b[Gy]=!0,b[uf]=_,b},R={_p:r,$id:t,$onAction:Ky.bind(null,p),$patch:x,$reset:N,$subscribe(v,_={}){const b=Ky(d,v,_.detached,()=>C()),C=o.run(()=>En(()=>r.state.value[t],S=>{(_.flush==="sync"?f:u)&&v({storeId:t,type:No.direct,events:g},S)},Ir({},c,_)));return b},$dispose:P},D=hr(R);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||uU)(()=>r._e.run(()=>(o=Hh()).run(()=>e({action:y}))));for(const v in T){const _=T[v];if(Je(_)&&!dU(_)||rr(_))i||(w&&hU(_)&&(Je(_)?_.value=w[v]:Mh(_,w[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const b=y(_,v);T[v]=b,a.actions[v]=_}}return Ir(D,T),Ir(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:v=>{x(_=>{Ir(_,v)})}}),r._p.forEach(v=>{Ir(D,o.run(()=>v({store:D,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(D.$state,w),u=!0,f=!0,D}/*! #__NO_SIDE_EFFECTS__ */function mU(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=Zh();return a=a||(u?Nt(L0,null):null),a&&ou(a),a=D0,a._s.has(r)||(i?V0(r,e,s,a):pU(r,s,a)),a._s.get(r)}return o.$id=r,o}function gU(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function _U(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const yU=Zt(t=>{const e=cU();t.vueApp.use(e)});var Qy=/^(GTM|G)-[0-9A-Z]+$/;function ff(t){if(typeof t!="string"||!Qy.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Qy}).${n}`)}}function mo(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function _i(t,e){let n=document,r=n.createElement("script"),s=u=>{var f;(f=e.onReady)==null||f.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(mo(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let c=e.parentElement??n.body;if(typeof(c==null?void 0:c.appendChild)!="function")throw new Error("parentElement must be a DOM element");return c.appendChild(r),r}function vU(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var EU=class{constructor(t){rn(this,"id");rn(this,"options");rn(this,"scriptElements",[]);rn(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)ff(typeof e=="string"?e:e.id);else ff(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!vU(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=_i(n,{...this.options}):r=_i(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=_i(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?mo(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&mo(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&mo(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&mo(window,this.options.dataLayerName).push(t)}},mt;function wU(t,e={id:""}){e={trackOnNextTick:!1,...e},mt=new EU(e),t.config.globalProperties.$gtm=mt,mt.isInBrowserContext()&&(e.vueRouter&&bU(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),mt.options.enabled&&mt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")_i(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),_i(n.id,r)}}):_i(e.id,e))),t.provide("gtm",e)}function bU(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,c)=>{var p,g,w;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(c,4)?mt!=null&&mt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(c,8)&&(mt!=null&&mt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let f={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((w=(g=e.options)==null?void 0:g.history)==null?void 0:w.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?$n(()=>{mt==null||mt.trackView(u,d,f)}):mt==null||mt.trackView(u,d,f)})}function TU(t){return{install:e=>wU(e,t)}}const IU=Zt(t=>{const e=Ls().public,n=s2("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(TU({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:wt(),trackOnNextTick:!1}))}),AU=[TC,OC,Z1,tk,nk,rk,ik,ok,ak,jV,lU,yU,IU],RU=An({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return bs(ha,er(r)),()=>vt(t.vnode,{ref:t.vnodeRef})}}),SU=An({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=De(),i=Et(),o=Nt(ha,null);let a;r({pageRef:i});const c=Nt(BE,null);let u;const f=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",f);wt().beforeEach(p)}t.pageKey&&En(()=>t.pageKey,(p,g)=>{p!==g&&s.callHook("page:loading:start")});let d=!1;return()=>vt(fw,{name:t.name,route:t.route,...e},{default:p=>{const g=CU(o,p.route,p.Component),w=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!w)return u;f();return}if(u&&c&&!c.isCurrent(p.route))return u;if(g&&o&&(!c||c!=null&&c.isCurrent(o)))return w?u:null;const k=qf(p,t.pageKey);!s.isHydrating&&!kU(o,p.route,p.Component)&&a===k&&(s.callHook("page:loading:end"),d=!0),a=k;const x=!!(t.transition??p.route.meta.pageTransition??Of),N=x&&PU([t.transition,p.route.meta.pageTransition,Of,{onAfterLeave:()=>{s.callHook("page:transition:finish",p.Component)}}].filter(Boolean)),P=t.keepalive??p.route.meta.keepalive??GS;return u=hw(x&&N,U1(P,vt(nd,{suspensible:!0,onPending:()=>s.callHook("page:start",p.Component),onResolve:()=>{$n(()=>s.callHook("page:finish",p.Component).then(()=>{if(!d)return s.callHook("page:loading:end");d=!1}).finally(f))}},{default:()=>{const y=vt(RU,{key:k||void 0,vnode:n.default?vt(Ot,void 0,n.default(p)):p.Component,route:p.route,renderKey:k||void 0,trackRootNodes:x,vnodeRef:i});return P&&(y.type.name=p.Component.type.name||p.Component.type.__name||"RouteProvider"),y}}))).default(),u}})}});function PU(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?hd(n.onAfterLeave):void 0}));return UE(...e)}function CU(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&qf({route:e,Component:n})!==qf({route:t,Component:n})}function kU(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const OU=An({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>vt(Mr[t.name],t.layoutProps,e.slots)}}),xU=An({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=De(),r=Nt(ha),s=r===ad()?D1():r,i=Ue(()=>{let c=Qe(t.name)??s.meta.layout??"default";return c&&!(c in Mr)&&t.fallback&&(c=Qe(t.fallback)),c}),o=Et();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",a);wt().beforeEach(c)}return()=>{const c=i.value&&i.value in Mr,u=s.meta.layoutTransition??KS;return hw(c&&u,{default:()=>vt(nd,{suspensible:!0,onResolve:()=>{$n(a)}},{default:()=>vt(NU,{layoutProps:mE(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),NU=An({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&bs(BE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Mr)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(OU,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),au=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},DU={};function LU(t,e){const n=SU,r=xU;return $t(),Jn(r,null,{default:Pn(()=>[be(n)]),_:1})}const MU=au(DU,[["render",LU]]),VU=od("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Yy=mU("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=De(),r=wt();try{const s=await jx(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=De();try{await qx(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=De();Hx(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),FU={class:"navbar navbar-expand-md navbar-light bg-light"},UU={class:"navbar-nav"},jU={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},BU={class:"navbar-nav ml-auto"};function $U(t,e,n,r,s,i){const o=u2;return $t(),Bo("nav",FU,[be(o,{class:"navbar-brand",to:"/"},{default:Pn(()=>e[2]||(e[2]=[an("Who's Jimmy")])),_:1}),He("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[He("span",{class:"navbar-toggler-icon"},null,-1)])),He("div",{class:ia(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[He("ul",UU,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Pn(()=>e[4]||(e[4]=[an("Bio")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Pn(()=>e[5]||(e[5]=[an("Portfolio ")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Pn(()=>e[6]||(e[6]=[an("For Sale")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Pn(()=>e[7]||(e[7]=[an("Cool Stuff")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Pn(()=>e[8]||(e[8]=[an("Contact Us")])),_:1})])],2),s.isAuth?($t(),Bo("div",jU,[He("ul",BU,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Pn(()=>[an($h(t.user?t.user.email:""),1)]),_:1}),He("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):tR("",!0)])}const HU={data(){return{visible:!1,isAuth:!1}},computed:{...gU(Yy,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{..._U(Yy,{signOut:"signOut"})}},qU=au(HU,[["render",$U]]),WU={class:"page-footer font-small bg-light navbar-fixed-bottom"},zU={class:"container"},KU={class:"py-3 pt-3"},GU={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},QU={href:"https://www.facebook.com/whosjimmy"},YU={href:"https://twitter.com/jimmyclaws"},XU={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function JU(t,e){const n=Uo("font-awesome-icon");return $t(),Bo("footer",WU,[He("div",zU,[He("div",KU,[He("a",GU,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),He("a",QU,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),He("a",YU,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),He("a",XU,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=He("div",{class:"footer-copyright text-center font-small"},[He("div",null,[an("© 2024 Copyright: "),He("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),He("div",null,"Disclaimer: All images are copyright to their respective owners."),He("div",null,[an("A "),He("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),an(" creation.")])],-1))])}const ZU={},e9=au(ZU,[["render",JU],["__scopeId","data-v-063d9b19"]]),t9={class:"text-center my-0 page"},n9={class:"body"},r9={components:{appHeader:qU,appFooter:e9},head(){return{title:"Error"}}},s9=An({...r9,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=De();yg({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{yg({title:n.public.SITE_TITLE}),HE({redirect:"/"})};return(i,o)=>{var u;const a=Uo("app-header"),c=Uo("app-footer");return $t(),Bo("div",t9,[be(a),He("div",n9,[o[0]||(o[0]=He("img",{src:VU,alt:"Error Image"},null,-1)),He("h2",null,"Error: "+$h((u=t.error)==null?void 0:u.statusCode),1),He("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),be(c)])}}}),i9=au(s9,[["__scopeId","data-v-a467a495"]]),o9={key:0},Xy={__name:"nuxt-root",setup(t){const e=()=>null,n=De(),r=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",r);wt().beforeEach(c)}const s=!1;bs(ha,ad()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const i=Rc(),o=!1;Bv((c,u,f)=>{if(n.hooks.callHook("vue:error",c,u,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),EP(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>ni(c)),!1});const a=!1;return(c,u)=>($t(),Jn(nd,{onResolve:Qe(r)},{default:Pn(()=>[Qe(o)?($t(),Bo("div",o9)):Qe(i)?($t(),Jn(Qe(i9),{key:1,error:Qe(i)},null,8,["error"])):Qe(a)?($t(),Jn(Qe(e),{key:2,context:Qe(a)},null,8,["context"])):Qe(s)?($t(),Jn(vA(Qe(s)),{key:3})):($t(),Jn(Qe(MU),{key:4}))]),_:1},8,["onResolve"]))}};let Jy;{let t;Jy=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?BR(Xy):jR(Xy),s=eP({vueApp:r});async function i(c){await s.callHook("app:error",c),s.payload.error=s.payload.error||Sc(c)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await rP(s,AU)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(XS),await s.hooks.callHook("app:mounted",r),await $n()}catch(c){i(c)}return r},t=Jy().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{qU as $,Je as A,hr as B,ua as C,Ue as D,Nt as E,Ot as F,bs as G,rr as H,zr as I,$n as J,od as K,Uo as L,h9 as M,mc as N,Jn as O,f9 as P,ia as Q,l9 as R,eR as S,mR as T,ha as U,_9 as V,vP as W,s2 as X,p9 as Y,e9 as Z,au as _,gU as a,SU as a0,mU as a1,De as a2,T9 as a3,E9 as a4,b9 as a5,v9 as a6,w9 as a7,He as b,Bo as c,be as d,Pn as e,u2 as f,an as g,Qe as h,g9 as i,tR as j,m9 as k,MV as l,_U as m,R9 as n,$t as o,I9 as p,A9 as q,u9 as r,bc as s,$h as t,Yy as u,d9 as v,c9 as w,Et as x,pA as y,En as z};
