const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Chg344K6.js","./BL7w82iH.js","./0_kMb_sa.js","./BoF_SjAk.js","./index.ASLudlX-.css","./Crih8kL1.js","./CRpzBTWT.js","./BG-YR2ny.js","./DS9PZ0eC.js","./Gallery.BdWwPq4R.css","./Film.D8qa6UOd.css","./Film.CyscwsSS.css","./DWykd272.js","./Bio.BaV4dkSc.css","./D22sZXmn.js","./Contact.Bq_tjq4M.css","./BFTb3l4A.js","./Clocks.CaZdgkmv.css","./Pqs1HzZs.js","./index.EfND0qCY.css","./B0kgfkmk.js","./5zDMfJb6.js","./index.CAtFJWG6.css","./BgM9yEAh.js","./Celebrities.BS01JuXe.css","./ZmJ5Rj35.js","./Clocks.Dmp-oUCd.css","./CGD1C8Zp.js","./index.ByThmlNc.css","./DvC5r0An.js","./C-cjCrHl.js","./BnR3UhJz.js","./CqgfI_MR.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var cI=Object.defineProperty;var lI=(t,e,n)=>e in t?cI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var rn=(t,e,n)=>lI(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Mf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},si=[],Nn=()=>{},uI=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ff=t=>t.startsWith("onUpdate:"),st=Object.assign,Uf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hI=Object.prototype.hasOwnProperty,xe=(t,e)=>hI.call(t,e),le=Array.isArray,ii=t=>Di(t)==="[object Map]",Ni=t=>Di(t)==="[object Set]",hm=t=>Di(t)==="[object Date]",fI=t=>Di(t)==="[object RegExp]",pe=t=>typeof t=="function",We=t=>typeof t=="string",En=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",ev=t=>(Ve(t)||pe(t))&&pe(t.then)&&pe(t.catch),tv=Object.prototype.toString,Di=t=>tv.call(t),dI=t=>Di(t).slice(8,-1),nv=t=>Di(t)==="[object Object]",jf=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=Mf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pI=/-(\w)/g,fn=hl(t=>t.replace(pI,(e,n)=>n?n.toUpperCase():"")),mI=/\B([A-Z])/g,Ns=hl(t=>t.replace(mI,"-$1").toLowerCase()),fl=hl(t=>t.charAt(0).toUpperCase()+t.slice(1)),wu=hl(t=>t?`on${fl(t)}`:""),Fr=(t,e)=>!Object.is(t,e),ai=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rv=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sv=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let fm;const dl=()=>fm||(fm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?vI(r):pl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Ve(t))return t}const gI=/;(?![^(]*\))/g,_I=/:([^]+)/,yI=/\/\*[^]*?\*\//g;function vI(t){const e={};return t.replace(yI,"").split(gI).forEach(n=>{if(n){const r=n.split(_I);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sa(t){let e="";if(We(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=sa(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function o6(t){if(!t)return null;let{class:e,style:n}=t;return e&&!We(e)&&(t.class=sa(e)),n&&(t.style=pl(n)),t}const EI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wI=Mf(EI);function iv(t){return!!t||t===""}function bI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ia(t[r],e[r]);return n}function ia(t,e){if(t===e)return!0;let n=hm(t),r=hm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=En(t),r=En(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?bI(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ia(t[o],e[o]))return!1}}return String(t)===String(e)}function Bf(t,e){return t.findIndex(n=>ia(n,e))}const ov=t=>!!(t&&t.__v_isRef===!0),$f=t=>We(t)?t:t==null?"":le(t)||Ve(t)&&(t.toString===tv||!pe(t.toString))?ov(t)?$f(t.value):JSON.stringify(t,av,2):String(t),av=(t,e)=>ov(e)?av(t,e.value):ii(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[bu(r,i)+" =>"]=s,n),{})}:Ni(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bu(n))}:En(e)?bu(e):Ve(e)&&!le(e)&&!nv(e)?String(e):e,bu=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class cv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hf(t){return new cv(t)}function oa(){return jt}function Ac(t,e=!1){jt&&jt.cleanups.push(t)}let je;const Tu=new WeakSet;class lv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tu.has(this)&&(Tu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dm(this),fv(this);const e=je,n=yn;je=this,yn=!0;try{return this.fn()}finally{dv(this),je=e,yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zf(e);this.deps=this.depsTail=void 0,dm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uh(this)&&this.run()}get dirty(){return uh(this)}}let uv=0,mo,go;function hv(t,e=!1){if(t.flags|=8,e){t.next=go,go=t;return}t.next=mo,mo=t}function qf(){uv++}function Wf(){if(--uv>0)return;if(go){let e=go;for(go=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mo;){let e=mo;for(mo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),zf(r),TI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function uh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===No))return;t.globalVersion=No;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!uh(t)){t.flags&=-3;return}const n=je,r=yn;je=t,yn=!0;try{fv(t);const s=t.fn(t._value);(e.version===0||Fr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{je=n,yn=r,dv(t),t.flags&=-3}}function zf(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)zf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function TI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yn=!0;const mv=[];function rs(){mv.push(yn),yn=!1}function ss(){const t=mv.pop();yn=t===void 0?!0:t}function dm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let No=0;class II{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ml{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!je||!yn||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new II(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,gv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=r)}return n}trigger(e){this.version++,No++,this.notify(e)}notify(e){qf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wf()}}}function gv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Rc=new WeakMap,Es=Symbol(""),hh=Symbol(""),Do=Symbol("");function Pt(t,e,n){if(yn&&je){let r=Rc.get(t);r||Rc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ml),s.map=r,s.key=n),s.track()}}function Qn(t,e,n,r,s,i){const o=Rc.get(t);if(!o){No++;return}const a=l=>{l&&l.trigger()};if(qf(),e==="clear")o.forEach(a);else{const l=le(t),u=l&&jf(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===Do||!En(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Do)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Es)),ii(t)&&a(o.get(hh)));break;case"delete":l||(a(o.get(Es)),ii(t)&&a(o.get(hh)));break;case"set":ii(t)&&a(o.get(Es));break}}Wf()}function AI(t,e){const n=Rc.get(t);return n&&n.get(e)}function Ws(t){const e=Re(t);return e===t?e:(Pt(e,"iterate",Do),ln(t)?e:e.map(kt))}function gl(t){return Pt(t=Re(t),"iterate",Do),t}const RI={__proto__:null,[Symbol.iterator](){return Iu(this,Symbol.iterator,kt)},concat(...t){return Ws(this).concat(...t.map(e=>le(e)?Ws(e):e))},entries(){return Iu(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return Wn(this,"every",t,e,void 0,arguments)},filter(t,e){return Wn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return Wn(this,"find",t,e,kt,arguments)},findIndex(t,e){return Wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Wn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return Wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Au(this,"includes",t)},indexOf(...t){return Au(this,"indexOf",t)},join(t){return Ws(this).join(t)},lastIndexOf(...t){return Au(this,"lastIndexOf",t)},map(t,e){return Wn(this,"map",t,e,void 0,arguments)},pop(){return to(this,"pop")},push(...t){return to(this,"push",t)},reduce(t,...e){return pm(this,"reduce",t,e)},reduceRight(t,...e){return pm(this,"reduceRight",t,e)},shift(){return to(this,"shift")},some(t,e){return Wn(this,"some",t,e,void 0,arguments)},splice(...t){return to(this,"splice",t)},toReversed(){return Ws(this).toReversed()},toSorted(t){return Ws(this).toSorted(t)},toSpliced(...t){return Ws(this).toSpliced(...t)},unshift(...t){return to(this,"unshift",t)},values(){return Iu(this,"values",kt)}};function Iu(t,e,n){const r=gl(t),s=r[e]();return r!==t&&!ln(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const SI=Array.prototype;function Wn(t,e,n,r,s,i){const o=gl(t),a=o!==t&&!ln(t),l=o[e];if(l!==SI[e]){const d=l.apply(t,i);return a?kt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,kt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function pm(t,e,n,r){const s=gl(t);let i=n;return s!==t&&(ln(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,kt(a),l,t)}),s[e](i,...r)}function Au(t,e,n){const r=Re(t);Pt(r,"iterate",Do);const s=r[e](...n);return(s===-1||s===!1)&&Qf(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function to(t,e,n=[]){rs(),qf();const r=Re(t)[e].apply(t,n);return Wf(),ss(),r}const CI=Mf("__proto__,__v_isRef,__isVue"),_v=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En));function PI(t){En(t)||(t=String(t));const e=Re(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class yv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?UI:bv:i?wv:Ev).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=RI[n]))return l;if(n==="hasOwnProperty")return PI}const a=Reflect.get(e,n,Je(e)?e:r);return(En(n)?_v.has(n):CI(n))||(s||Pt(e,"get",n),i)?a:Je(a)?o&&jf(n)?a:a.value:Ve(a)?s?Tv(a):fr(a):a}}class vv extends yv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=zr(i);if(!ln(r)&&!zr(r)&&(i=Re(i),r=Re(r)),!le(e)&&Je(i)&&!Je(r))return l?!1:(i.value=r,!0)}const o=le(e)&&jf(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,r,Je(e)?e:s);return e===Re(s)&&(o?Fr(r,i)&&Qn(e,"set",n,r):Qn(e,"add",n,r)),a}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!En(n)||!_v.has(n))&&Pt(e,"has",n),r}ownKeys(e){return Pt(e,"iterate",le(e)?"length":Es),Reflect.ownKeys(e)}}class kI extends yv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const OI=new vv,xI=new kI,NI=new vv(!0);const fh=t=>t,Fa=t=>Reflect.getPrototypeOf(t);function DI(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ii(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?fh:e?dh:kt;return!e&&Pt(i,"iterate",l?hh:Es),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function Ua(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function LI(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);t||(Fr(s,a)&&Pt(o,"get",s),Pt(o,"get",a));const{has:l}=Fa(o),u=e?fh:t?dh:kt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Pt(Re(s),"iterate",Es),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return t||(Fr(s,a)&&Pt(o,"has",s),Pt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Re(a),u=e?fh:t?dh:kt;return!t&&Pt(l,"iterate",Es),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return st(n,t?{add:Ua("add"),set:Ua("set"),delete:Ua("delete"),clear:Ua("clear")}:{add(s){!e&&!ln(s)&&!zr(s)&&(s=Re(s));const i=Re(this);return Fa(i).has.call(i,s)||(i.add(s),Qn(i,"add",s,s)),this},set(s,i){!e&&!ln(i)&&!zr(i)&&(i=Re(i));const o=Re(this),{has:a,get:l}=Fa(o);let u=a.call(o,s);u||(s=Re(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Fr(i,h)&&Qn(o,"set",s,i):Qn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=Fa(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Qn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=DI(s,t,e)}),n}function Kf(t,e){const n=LI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const VI={get:Kf(!1,!1)},MI={get:Kf(!1,!0)},FI={get:Kf(!0,!1)};const Ev=new WeakMap,wv=new WeakMap,bv=new WeakMap,UI=new WeakMap;function jI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BI(t){return t.__v_skip||!Object.isExtensible(t)?0:jI(dI(t))}function fr(t){return zr(t)?t:Gf(t,!1,OI,VI,Ev)}function Zn(t){return Gf(t,!1,NI,MI,wv)}function Tv(t){return Gf(t,!0,xI,FI,bv)}function Gf(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=BI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rr(t){return zr(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function Qf(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Yf(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&rv(t,"__v_skip",!0),t}const kt=t=>Ve(t)?fr(t):t,dh=t=>Ve(t)?Tv(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Et(t){return Iv(t,!1)}function Lo(t){return Iv(t,!0)}function Iv(t,e){return Je(t)?t:new $I(t,e)}class $I{constructor(e,n){this.dep=new ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ln(e)||zr(e);e=r?e:Re(e),Fr(e,n)&&(this._rawValue=e,this._value=r?e:kt(e),this.dep.trigger())}}function Qe(t){return Je(t)?t.value:t}const HI={get:(t,e,n)=>e==="__v_raw"?t:Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Av(t){return rr(t)?t:new Proxy(t,HI)}class qI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ml,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function WI(t){return new qI(t)}function zI(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=Rv(t,n);return e}class KI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return AI(Re(this._object),this._key)}}class GI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function QI(t,e,n){return Je(t)?t:pe(t)?new GI(t):Ve(t)&&arguments.length>1?Rv(t,e,n):Et(t)}function Rv(t,e,n){const r=t[e];return Je(r)?r:new KI(t,e,n)}class YI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=No-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return hv(this,!0),!0}get value(){const e=this.dep.track();return pv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function XI(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new YI(r,s,n)}const ja={},Sc=new WeakMap;let gs;function JI(t,e=!1,n=gs){if(n){let r=Sc.get(n);r||Sc.set(n,r=[]),r.push(t)}}function ZI(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:ln(R)||s===!1||s===0?Yn(R,1):Yn(R);let h,d,p,g,w=!1,k=!1;if(Je(t)?(d=()=>t.value,w=ln(t)):rr(t)?(d=()=>u(t),w=!0):le(t)?(k=!0,w=t.some(R=>rr(R)||ln(R)),d=()=>t.map(R=>{if(Je(R))return R.value;if(rr(R))return u(R);if(pe(R))return l?l(R,2):R()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){rs();try{p()}finally{ss()}}const R=gs;gs=h;try{return l?l(t,3,[g]):t(g)}finally{gs=R}}:d=Nn,e&&s){const R=d,D=s===!0?1/0:s;d=()=>Yn(R(),D)}const x=oa(),N=()=>{h.stop(),x&&x.active&&Uf(x.effects,h)};if(i&&e){const R=e;e=(...D)=>{R(...D),N()}}let C=k?new Array(t.length).fill(ja):ja;const y=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const D=h.run();if(s||w||(k?D.some((V,T)=>Fr(V,C[T])):Fr(D,C))){p&&p();const V=gs;gs=h;try{const T=[D,C===ja?void 0:k&&C[0]===ja?[]:C,g];l?l(e,3,T):e(...T),C=D}finally{gs=V}}}else h.run()};return a&&a(y),h=new lv(d),h.scheduler=o?()=>o(y,!1):y,g=R=>JI(R,!1,h),p=h.onStop=()=>{const R=Sc.get(h);if(R){if(l)l(R,4);else for(const D of R)D();Sc.delete(h)}},e?r?y(!0):C=h.run():o?o(y.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function Yn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Yn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Yn(t[r],e,n);else if(Ni(t)||ii(t))t.forEach(r=>{Yn(r,e,n)});else if(nv(t)){for(const r in t)Yn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Yn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aa(t,e,n,r){try{return r?t(...r):t()}catch(s){Li(s,e,n)}}function wn(t,e,n,r){if(pe(t)){const s=aa(t,e,n,r);return s&&ev(s)&&s.catch(i=>{Li(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(wn(t[i],e,n,r));return s}}function Li(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){rs(),aa(i,null,10,[t,l,u]),ss();return}}eA(t,n,s,r,o)}function eA(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Bt=[];let Rn=-1;const ci=[];let Ar=null,Gs=0;const Sv=Promise.resolve();let Cc=null;function Bn(t){const e=Cc||Sv;return t?e.then(this?t.bind(this):t):e}function tA(t){let e=Rn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,s=Bt[r],i=Vo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xf(t){if(!(t.flags&1)){const e=Vo(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=Vo(n)?Bt.push(t):Bt.splice(tA(e),0,t),t.flags|=1,Cv()}}function Cv(){Cc||(Cc=Sv.then(Pv))}function ph(t){le(t)?ci.push(...t):Ar&&t.id===-1?Ar.splice(Gs+1,0,t):t.flags&1||(ci.push(t),t.flags|=1),Cv()}function mm(t,e,n=Rn+1){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Pc(t){if(ci.length){const e=[...new Set(ci)].sort((n,r)=>Vo(n)-Vo(r));if(ci.length=0,Ar){Ar.push(...e);return}for(Ar=e,Gs=0;Gs<Ar.length;Gs++){const n=Ar[Gs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Gs=0}}const Vo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pv(t){try{for(Rn=0;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),aa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&(e.flags&=-2)}Rn=-1,Bt.length=0,Pc(),Cc=null,(Bt.length||ci.length)&&Pv()}}let ct=null,kv=null;function kc(t){const e=ct;return ct=t,kv=t&&t.type.__scopeId||null,e}function Sn(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sm(-1);const i=kc(e);let o;try{o=t(...s)}finally{kc(i),r._d&&Sm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function a6(t,e){if(ct===null)return t;const n=bl(ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Fe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Cn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(rs(),wn(l,n,8,[t.el,a,t,e]),ss())}}const nA=Symbol("_vte"),Ov=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function rA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yl(()=>{t.isMounted=!0}),la(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],xv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Nv=t=>{const e=t.subTree;return e.component?Nv(e.component):e},sA={name:"BaseTransition",props:xv,setup(t,{slots:e}){const n=wl(),r=rA();return()=>{const s=e.default&&Vv(e.default(),!0);if(!s||!s.length)return;const i=Dv(s),o=Re(t),{mode:a}=o;if(r.isLeaving)return Ru(i);const l=gm(i);if(!l)return Ru(i);let u=mh(l,o,r,n,d=>u=d);l.type!==it&&_i(l,u);let h=n.subTree&&gm(n.subTree);if(h&&h.type!==it&&!_n(l,h)&&Nv(n).type!==it){let d=mh(h,o,r,n);if(_i(h,d),a==="out-in"&&l.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Ru(i);a==="in-out"&&l.type!==it?d.delayLeave=(p,g,w)=>{const k=Lv(r,h);k[String(h.key)]=h,p[Rr]=()=>{g(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Dv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const iA=sA;function Lv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function mh(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:w,onLeaveCancelled:k,onBeforeAppear:x,onAppear:N,onAfterAppear:C,onAppearCancelled:y}=e,R=String(t.key),D=Lv(n,t),V=(_,b)=>{_&&wn(_,r,9,b)},T=(_,b)=>{const P=b[1];V(_,b),le(_)?_.every(S=>S.length<=1)&&P():_.length<=1&&P()},v={mode:o,persisted:a,beforeEnter(_){let b=l;if(!n.isMounted)if(i)b=x||l;else return;_[Rr]&&_[Rr](!0);const P=D[R];P&&_n(t,P)&&P.el[Rr]&&P.el[Rr](),V(b,[_])},enter(_){let b=u,P=h,S=d;if(!n.isMounted)if(i)b=N||u,P=C||h,S=y||d;else return;let I=!1;const ge=_[Ba]=ve=>{I||(I=!0,ve?V(S,[_]):V(P,[_]),v.delayedLeave&&v.delayedLeave(),_[Ba]=void 0)};b?T(b,[_,ge]):ge()},leave(_,b){const P=String(t.key);if(_[Ba]&&_[Ba](!0),n.isUnmounting)return b();V(p,[_]);let S=!1;const I=_[Rr]=ge=>{S||(S=!0,b(),ge?V(k,[_]):V(w,[_]),_[Rr]=void 0,D[P]===t&&delete D[P])};D[P]=t,g?T(g,[_,I]):I()},clone(_){const b=mh(_,e,n,r,s);return s&&s(b),b}};return v}function Ru(t){if(ca(t))return t=ir(t),t.children=null,t}function gm(t){if(!ca(t))return Ov(t.type)&&t.children?Dv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function _i(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_i(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(Vv(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?ir(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function In(t,e){return pe(t)?st({name:t.name},e,{setup:t}):t}function Jf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mo(t,e,n,r,s=!1){if(le(t)){t.forEach((w,k)=>Mo(w,e&&(le(e)?e[k]:e),n,r,s));return}if(Ur(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?bl(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,d=a.setupState,p=Re(d),g=d===Fe?()=>!1:w=>xe(p,w);if(u!=null&&u!==l&&(We(u)?(h[u]=null,g(u)&&(d[u]=null)):Je(u)&&(u.value=null)),pe(l))aa(l,a,12,[o,h]);else{const w=We(l),k=Je(l);if(w||k){const x=()=>{if(t.f){const N=w?g(l)?d[l]:h[l]:l.value;s?le(N)&&Uf(N,i):le(N)?N.includes(i)||N.push(i):w?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else w?(h[l]=o,g(l)&&(d[l]=o)):k&&(l.value=o,t.k&&(h[t.k]=o))};o?(x.id=-1,gt(x,n)):x()}}}let _m=!1;const zs=()=>{_m||(console.error("Hydration completed but contains mismatches."),_m=!0)},oA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",aA=t=>t.namespaceURI.includes("MathML"),$a=t=>{if(t.nodeType===1){if(oA(t))return"svg";if(aA(t))return"mathml"}},ei=t=>t.nodeType===8;function cA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(y,R)=>{if(!R.hasChildNodes()){n(null,y,R),Pc(),R._vnode=y;return}d(R.firstChild,y,null,null,null),Pc(),R._vnode=y},d=(y,R,D,V,T,v=!1)=>{v=v||!!R.dynamicChildren;const _=ei(y)&&y.data==="[",b=()=>k(y,R,D,V,T,_),{type:P,ref:S,shapeFlag:I,patchFlag:ge}=R;let ve=y.nodeType;R.el=y,ge===-2&&(v=!1,R.dynamicChildren=null);let Z=null;switch(P){case Ts:ve!==3?R.children===""?(l(R.el=s(""),o(y),y),Z=y):Z=b():(y.data!==R.children&&(zs(),y.data=R.children),Z=i(y));break;case it:C(y)?(Z=i(y),N(R.el=y.content.firstChild,y,D)):ve!==8||_?Z=b():Z=i(y);break;case yo:if(_&&(y=i(y),ve=y.nodeType),ve===1||ve===3){Z=y;const se=!R.children.length;for(let ne=0;ne<R.staticCount;ne++)se&&(R.children+=Z.nodeType===1?Z.outerHTML:Z.data),ne===R.staticCount-1&&(R.anchor=Z),Z=i(Z);return _?i(Z):Z}else b();break;case Ot:_?Z=w(y,R,D,V,T,v):Z=b();break;default:if(I&1)(ve!==1||R.type.toLowerCase()!==y.tagName.toLowerCase())&&!C(y)?Z=b():Z=p(y,R,D,V,T,v);else if(I&6){R.slotScopeIds=T;const se=o(y);if(_?Z=x(y):ei(y)&&y.data==="teleport start"?Z=x(y,y.data,"teleport end"):Z=i(y),e(R,se,null,D,V,$a(se),v),Ur(R)&&!R.type.__asyncResolved){let ne;_?(ne=be(Ot),ne.anchor=Z?Z.previousSibling:se.lastChild):ne=y.nodeType===3?an(""):be("div"),ne.el=y,R.component.subTree=ne}}else I&64?ve!==8?Z=b():Z=R.type.hydrate(y,R,D,V,T,v,t,g):I&128&&(Z=R.type.hydrate(y,R,D,V,$a(o(y)),T,v,t,d))}return S!=null&&Mo(S,null,V,R),Z},p=(y,R,D,V,T,v)=>{v=v||!!R.dynamicChildren;const{type:_,props:b,patchFlag:P,shapeFlag:S,dirs:I,transition:ge}=R,ve=_==="input"||_==="option";if(ve||P!==-1){I&&Cn(R,null,D,"created");let Z=!1;if(C(y)){Z=iE(null,ge)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=y.content.firstChild;Z&&ge.beforeEnter(ne),N(ne,y,D),R.el=y=ne}if(S&16&&!(b&&(b.innerHTML||b.textContent))){let ne=g(y.firstChild,R,y,D,V,T,v);for(;ne;){Ha(y,1)||zs();const ze=ne;ne=ne.nextSibling,a(ze)}}else if(S&8){let ne=R.children;ne[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(ne=ne.slice(1)),y.textContent!==ne&&(Ha(y,0)||zs(),y.textContent=R.children)}if(b){if(ve||!v||P&48){const ne=y.tagName.includes("-");for(const ze in b)(ve&&(ze.endsWith("value")||ze==="indeterminate")||ra(ze)&&!oi(ze)||ze[0]==="."||ne)&&r(y,ze,null,b[ze],void 0,D)}else if(b.onClick)r(y,"onClick",null,b.onClick,void 0,D);else if(P&4&&rr(b.style))for(const ne in b.style)b.style[ne]}let se;(se=b&&b.onVnodeBeforeMount)&&Wt(se,D,R),I&&Cn(R,null,D,"beforeMount"),((se=b&&b.onVnodeMounted)||I||Z)&&hE(()=>{se&&Wt(se,D,R),Z&&ge.enter(y),I&&Cn(R,null,D,"mounted")},V)}return y.nextSibling},g=(y,R,D,V,T,v,_)=>{_=_||!!R.dynamicChildren;const b=R.children,P=b.length;for(let S=0;S<P;S++){const I=_?b[S]:b[S]=Yt(b[S]),ge=I.type===Ts;y?(ge&&!_&&S+1<P&&Yt(b[S+1]).type===Ts&&(l(s(y.data.slice(I.children.length)),D,i(y)),y.data=I.children),y=d(y,I,V,T,v,_)):ge&&!I.children?l(I.el=s(""),D):(Ha(D,1)||zs(),n(null,I,D,null,V,T,$a(D),v))}return y},w=(y,R,D,V,T,v)=>{const{slotScopeIds:_}=R;_&&(T=T?T.concat(_):_);const b=o(y),P=g(i(y),R,b,D,V,T,v);return P&&ei(P)&&P.data==="]"?i(R.anchor=P):(zs(),l(R.anchor=u("]"),b,P),P)},k=(y,R,D,V,T,v)=>{if(Ha(y.parentElement,1)||zs(),R.el=null,v){const P=x(y);for(;;){const S=i(y);if(S&&S!==P)a(S);else break}}const _=i(y),b=o(y);return a(y),n(null,R,b,_,D,V,$a(b),T),D&&(D.vnode.el=R.el,El(D,R.el)),_},x=(y,R="[",D="]")=>{let V=0;for(;y;)if(y=i(y),y&&ei(y)&&(y.data===R&&V++,y.data===D)){if(V===0)return i(y);V--}return y},N=(y,R,D)=>{const V=R.parentNode;V&&V.replaceChild(y,R);let T=D;for(;T;)T.vnode.el===R&&(T.vnode.el=T.subTree.el=y),T=T.parent},C=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[h,d]}const ym="data-allow-mismatch",lA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ha(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(ym);)t=t.parentElement;const n=t&&t.getAttribute(ym);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(lA[e])}}dl().requestIdleCallback;dl().cancelIdleCallback;function uA(t,e){if(ei(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ei(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Ur=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function hA(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const p=()=>(d++,u=null,g()),g=()=>{let w;return u||(w=u=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),l)return new Promise((x,N)=>{l(k,()=>x(p()),()=>N(k),d+1)});throw k}).then(k=>w!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),h=k,k)))};return In({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(w,k,x){const N=i?()=>{const C=i(x,y=>uA(w,y));C&&(k.bum||(k.bum=[])).push(C)}:x;h?N():g().then(()=>!k.isUnmounted&&N())},get __asyncResolved(){return h},setup(){const w=ot;if(Jf(w),h)return()=>Su(h,w);const k=y=>{u=null,Li(y,w,13,!r)};if(a&&w.suspense||vi)return g().then(y=>()=>Su(y,w)).catch(y=>(k(y),()=>r?be(r,{error:y}):null));const x=Et(!1),N=Et(),C=Et(!!s);return s&&setTimeout(()=>{C.value=!1},s),o!=null&&setTimeout(()=>{if(!x.value&&!N.value){const y=new Error(`Async component timed out after ${o}ms.`);k(y),N.value=y}},o),g().then(()=>{x.value=!0,w.parent&&ca(w.parent.vnode)&&w.parent.update()}).catch(y=>{k(y),N.value=y}),()=>{if(x.value&&h)return Su(h,w);if(N.value&&r)return be(r,{error:N.value});if(n&&!C.value)return be(n)}}})}function Su(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=be(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ca=t=>t.type.__isKeepAlive,fA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=wl(),r=n.ctx;if(!r.renderer)return()=>{const C=e.default&&e.default();return C&&C.length===1?C[0]:C};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(C,y,R,D,V)=>{const T=C.component;u(C,y,R,0,a),l(T.vnode,C,y,R,T,a,D,C.slotScopeIds,V),gt(()=>{T.isDeactivated=!1,T.a&&ai(T.a);const v=C.props&&C.props.onVnodeMounted;v&&Wt(v,T.parent,C)},a)},r.deactivate=C=>{const y=C.component;xc(y.m),xc(y.a),u(C,p,null,1,a),gt(()=>{y.da&&ai(y.da);const R=C.props&&C.props.onVnodeUnmounted;R&&Wt(R,y.parent,C),y.isDeactivated=!0},a)};function g(C){Cu(C),h(C,n,a,!0)}function w(C){s.forEach((y,R)=>{const D=Th(y.type);D&&!C(D)&&k(R)})}function k(C){const y=s.get(C);y&&(!o||!_n(y,o))?g(y):o&&Cu(o),s.delete(C),i.delete(C)}vn(()=>[t.include,t.exclude],([C,y])=>{C&&w(R=>io(C,R)),y&&w(R=>!io(y,R))},{flush:"post",deep:!0});let x=null;const N=()=>{x!=null&&(Nc(n.subTree.type)?gt(()=>{s.set(x,qa(n.subTree))},n.subTree.suspense):s.set(x,qa(n.subTree)))};return yl(N),jv(N),la(()=>{s.forEach(C=>{const{subTree:y,suspense:R}=n,D=qa(y);if(C.type===D.type&&C.key===D.key){Cu(D);const V=D.component.da;V&&gt(V,R);return}g(C)})}),()=>{if(x=null,!e.default)return o=null;const C=e.default(),y=C[0];if(C.length>1)return o=null,C;if(!As(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let R=qa(y);if(R.type===it)return o=null,R;const D=R.type,V=Th(Ur(R)?R.type.__asyncResolved||{}:D),{include:T,exclude:v,max:_}=t;if(T&&(!V||!io(T,V))||v&&V&&io(v,V))return R.shapeFlag&=-257,o=R,y;const b=R.key==null?D:R.key,P=s.get(b);return R.el&&(R=ir(R),y.shapeFlag&128&&(y.ssContent=R)),x=b,P?(R.el=P.el,R.component=P.component,R.transition&&_i(R,R.transition),R.shapeFlag|=512,i.delete(b),i.add(b)):(i.add(b),_&&i.size>parseInt(_,10)&&k(i.values().next().value)),R.shapeFlag|=256,o=R,Nc(y.type)?y:R}}},dA=fA;function io(t,e){return le(t)?t.some(n=>io(n,e)):We(t)?t.split(",").includes(e):fI(t)?(t.lastIndex=0,t.test(e)):!1}function Mv(t,e){Uv(t,"a",e)}function Fv(t,e){Uv(t,"da",e)}function Uv(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_l(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ca(s.parent.vnode)&&pA(r,e,n,s),s=s.parent}}function pA(t,e,n,r){const s=_l(e,t,r,!0);Bv(()=>{Uf(r[e],s)},n)}function Cu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function qa(t){return t.shapeFlag&128?t.ssContent:t}function _l(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{rs();const a=ua(n),l=wn(e,n,t,o);return a(),ss(),l});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=ot)=>{(!vi||t==="sp")&&_l(t,(...r)=>e(...r),n)},mA=dr("bm"),yl=dr("m"),gA=dr("bu"),jv=dr("u"),la=dr("bum"),Bv=dr("um"),_A=dr("sp"),yA=dr("rtg"),vA=dr("rtc");function $v(t,e=ot){_l("ec",t,e)}const Hv="components";function Fo(t,e){return Wv(Hv,t,!0,e)||t}const qv=Symbol.for("v-ndc");function EA(t){return We(t)?Wv(Hv,t,!1)||t:t||qv}function Wv(t,e,n=!0,r=!1){const s=ct||ot;if(s){const i=s.type;{const a=Th(i,!1);if(a&&(a===e||a===fn(e)||a===fl(fn(e))))return i}const o=vm(s[t]||i[t],e)||vm(s.appContext[t],e);return!o&&r?i:o}}function vm(t,e){return t&&(t[e]||t[fn(e)]||t[fl(fn(e))])}function c6(t,e,n,r){let s;const i=n,o=le(t);if(o||We(t)){const a=o&&rr(t);let l=!1;a&&(l=!ln(t),t=gl(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?kt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function l6(t,e,n={},r,s){if(ct.ce||ct.parent&&Ur(ct.parent)&&ct.parent.ce)return $t(),Xn(Ot,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),$t();const o=i&&zv(i(n)),a=n.key||o&&o.key,l=Xn(Ot,{key:(a&&!En(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function zv(t){return t.some(e=>As(e)?!(e.type===it||e.type===Ot&&!zv(e.children)):!0)?t:null}const gh=t=>t?gE(t)?bl(t):gh(t.parent):null,_o=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gh(t.parent),$root:t=>gh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zf(t),$forceUpdate:t=>t.f||(t.f=()=>{Xf(t.update)}),$nextTick:t=>t.n||(t.n=Bn.bind(t.proxy)),$watch:t=>BA.bind(t)}),Pu=(t,e)=>t!==Fe&&!t.__isScriptSetup&&xe(t,e),wA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pu(r,e))return o[e]=1,r[e];if(s!==Fe&&xe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==Fe&&xe(n,e))return o[e]=4,n[e];_h&&(o[e]=0)}}const h=_o[e];let d,p;if(h)return e==="$attrs"&&Pt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Fe&&xe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pu(s,e)?(s[e]=n,!0):r!==Fe&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&xe(t,o)||Pu(e,o)||(a=i[0])&&xe(a,o)||xe(r,o)||xe(_o,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Em(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _h=!0;function bA(t){const e=Zf(t),n=t.proxy,r=t.ctx;_h=!1,e.beforeCreate&&wm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:k,deactivated:x,beforeDestroy:N,beforeUnmount:C,destroyed:y,unmounted:R,render:D,renderTracked:V,renderTriggered:T,errorCaptured:v,serverPrefetch:_,expose:b,inheritAttrs:P,components:S,directives:I,filters:ge}=e;if(u&&TA(u,r,null),o)for(const se in o){const ne=o[se];pe(ne)&&(r[se]=ne.bind(n))}if(s){const se=s.call(n,n);Ve(se)&&(t.data=fr(se))}if(_h=!0,i)for(const se in i){const ne=i[se],ze=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):Nn,dn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):Nn,tn=Ue({get:ze,set:dn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ke=>tn.value=Ke})}if(a)for(const se in a)Kv(a[se],r,n,se);if(l){const se=pe(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ne=>{bs(ne,se[ne])})}h&&wm(h,t,"c");function Z(se,ne){le(ne)?ne.forEach(ze=>se(ze.bind(n))):ne&&se(ne.bind(n))}if(Z(mA,d),Z(yl,p),Z(gA,g),Z(jv,w),Z(Mv,k),Z(Fv,x),Z($v,v),Z(vA,V),Z(yA,T),Z(la,C),Z(Bv,R),Z(_A,_),le(b))if(b.length){const se=t.exposed||(t.exposed={});b.forEach(ne=>{Object.defineProperty(se,ne,{get:()=>n[ne],set:ze=>n[ne]=ze})})}else t.exposed||(t.exposed={});D&&t.render===Nn&&(t.render=D),P!=null&&(t.inheritAttrs=P),S&&(t.components=S),I&&(t.directives=I),_&&Jf(t)}function TA(t,e,n=Nn){le(t)&&(t=yh(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Nt(s.from||r,s.default,!0):i=Nt(s.from||r):i=Nt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wm(t,e,n){wn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kv(t,e,n,r){let s=r.includes(".")?cE(n,r):()=>n[r];if(We(t)){const i=e[t];pe(i)&&vn(s,i)}else if(pe(t))vn(s,t.bind(n));else if(Ve(t))if(le(t))t.forEach(i=>Kv(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&vn(s,i,t)}}function Zf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Oc(l,u,o,!0)),Oc(l,e,o)),Ve(e)&&i.set(e,l),l}function Oc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oc(t,i,n,!0),s&&s.forEach(o=>Oc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=IA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IA={data:bm,props:Tm,emits:Tm,methods:oo,computed:oo,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:oo,directives:oo,watch:RA,provide:bm,inject:AA};function bm(t,e){return e?t?function(){return st(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function AA(t,e){return oo(yh(t),yh(e))}function yh(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function oo(t,e){return t?st(Object.create(null),t,e):e}function Tm(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:st(Object.create(null),Em(t),Em(e??{})):e}function RA(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function Gv(){return{app:null,config:{isNativeTag:uI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SA=0;function CA(t,e){return function(r,s=null){pe(r)||(r=st({},r)),s!=null&&!Ve(s)&&(s=null);const i=Gv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:SA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yE,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||be(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,bl(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(wn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=ws;ws=u;try{return h()}finally{ws=d}}};return u}}let ws=null;function bs(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=ot||ct;if(r||ws){const s=ws?ws._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function ed(){return!!(ot||ct||ws)}const Qv={},Yv=()=>Object.create(Qv),Xv=t=>Object.getPrototypeOf(t)===Qv;function PA(t,e,n,r=!1){const s={},i=Yv();t.propsDefaults=Object.create(null),Jv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Zn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(vl(t.emitsOptions,p))continue;const g=e[p];if(l)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const w=fn(p);s[w]=vh(l,a,w,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Jv(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!xe(e,d)&&((h=Ns(d))===d||!xe(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=vh(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&Qn(t.attrs,"set","")}function Jv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(oi(l))continue;const u=e[l];let h;s&&xe(s,h=fn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:vl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=a||Fe;for(let h=0;h<i.length;h++){const d=i[h];n[d]=vh(s,l,d,u[d],t,!xe(u,d))}}return o}function vh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ua(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ns(n))&&(r=!0))}return r}const OA=new WeakMap;function Zv(t,e,n=!1){const r=n?OA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const h=d=>{l=!0;const[p,g]=Zv(d,e,!0);st(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Ve(t)&&r.set(t,si),si;if(le(i))for(let h=0;h<i.length;h++){const d=fn(i[h]);Im(d)&&(o[d]=Fe)}else if(i)for(const h in i){const d=fn(h);if(Im(d)){const p=i[h],g=o[d]=le(p)||pe(p)?{type:p}:st({},p),w=g.type;let k=!1,x=!0;if(le(w))for(let N=0;N<w.length;++N){const C=w[N],y=pe(C)&&C.name;if(y==="Boolean"){k=!0;break}else y==="String"&&(x=!1)}else k=pe(w)&&w.name==="Boolean";g[0]=k,g[1]=x,(k||xe(g,"default"))&&a.push(d)}}const u=[o,a];return Ve(t)&&r.set(t,u),u}function Im(t){return t[0]!=="$"&&!oi(t)}const eE=t=>t[0]==="_"||t==="$stable",td=t=>le(t)?t.map(Yt):[Yt(t)],xA=(t,e,n)=>{if(e._n)return e;const r=Sn((...s)=>td(e(...s)),n);return r._c=!1,r},tE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eE(s))continue;const i=t[s];if(pe(i))e[s]=xA(s,i,r);else if(i!=null){const o=td(i);e[s]=()=>o}}},nE=(t,e)=>{const n=td(e);t.slots.default=()=>n},rE=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},NA=(t,e,n)=>{const r=t.slots=Yv();if(t.vnode.shapeFlag&32){const s=e._;s?(rE(r,e,n),n&&rv(r,"_",s,!0)):tE(e,r)}else e&&nE(t,e)},DA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:rE(s,e,n):(i=!e.$stable,tE(e,s)),o=e}else e&&(nE(t,e),o={default:1});if(i)for(const a in s)!eE(a)&&o[a]==null&&delete s[a]},gt=hE;function LA(t){return sE(t)}function VA(t){return sE(t,cA)}function sE(t,e){const n=dl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Nn,insertStaticContent:w}=t,k=(A,O,M,$=null,U=null,q=null,Y=void 0,G=null,K=!!O.dynamicChildren)=>{if(A===O)return;A&&!_n(A,O)&&($=j(A),Ke(A,U,q,!0),A=null),O.patchFlag===-2&&(K=!1,O.dynamicChildren=null);const{type:W,ref:ue,shapeFlag:J}=O;switch(W){case Ts:x(A,O,M,$);break;case it:N(A,O,M,$);break;case yo:A==null&&C(O,M,$,Y);break;case Ot:S(A,O,M,$,U,q,Y,G,K);break;default:J&1?D(A,O,M,$,U,q,Y,G,K):J&6?I(A,O,M,$,U,q,Y,G,K):(J&64||J&128)&&W.process(A,O,M,$,U,q,Y,G,K,re)}ue!=null&&U&&Mo(ue,A&&A.ref,q,O||A,!O)},x=(A,O,M,$)=>{if(A==null)r(O.el=a(O.children),M,$);else{const U=O.el=A.el;O.children!==A.children&&u(U,O.children)}},N=(A,O,M,$)=>{A==null?r(O.el=l(O.children||""),M,$):O.el=A.el},C=(A,O,M,$)=>{[A.el,A.anchor]=w(A.children,O,M,$,A.el,A.anchor)},y=({el:A,anchor:O},M,$)=>{let U;for(;A&&A!==O;)U=p(A),r(A,M,$),A=U;r(O,M,$)},R=({el:A,anchor:O})=>{let M;for(;A&&A!==O;)M=p(A),s(A),A=M;s(O)},D=(A,O,M,$,U,q,Y,G,K)=>{O.type==="svg"?Y="svg":O.type==="math"&&(Y="mathml"),A==null?V(O,M,$,U,q,Y,G,K):_(A,O,U,q,Y,G,K)},V=(A,O,M,$,U,q,Y,G)=>{let K,W;const{props:ue,shapeFlag:J,transition:oe,dirs:ie}=A;if(K=A.el=o(A.type,q,ue&&ue.is,ue),J&8?h(K,A.children):J&16&&v(A.children,K,null,$,U,ku(A,q),Y,G),ie&&Cn(A,null,$,"created"),T(K,A,A.scopeId,Y,$),ue){for(const Pe in ue)Pe!=="value"&&!oi(Pe)&&i(K,Pe,null,ue[Pe],q,$);"value"in ue&&i(K,"value",null,ue.value,q),(W=ue.onVnodeBeforeMount)&&Wt(W,$,A)}ie&&Cn(A,null,$,"beforeMount");const fe=iE(U,oe);fe&&oe.beforeEnter(K),r(K,O,M),((W=ue&&ue.onVnodeMounted)||fe||ie)&&gt(()=>{W&&Wt(W,$,A),fe&&oe.enter(K),ie&&Cn(A,null,$,"mounted")},U)},T=(A,O,M,$,U)=>{if(M&&g(A,M),$)for(let q=0;q<$.length;q++)g(A,$[q]);if(U){let q=U.subTree;if(O===q||Nc(q.type)&&(q.ssContent===O||q.ssFallback===O)){const Y=U.vnode;T(A,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},v=(A,O,M,$,U,q,Y,G,K=0)=>{for(let W=K;W<A.length;W++){const ue=A[W]=G?Sr(A[W]):Yt(A[W]);k(null,ue,O,M,$,U,q,Y,G)}},_=(A,O,M,$,U,q,Y)=>{const G=O.el=A.el;let{patchFlag:K,dynamicChildren:W,dirs:ue}=O;K|=A.patchFlag&16;const J=A.props||Fe,oe=O.props||Fe;let ie;if(M&&fs(M,!1),(ie=oe.onVnodeBeforeUpdate)&&Wt(ie,M,O,A),ue&&Cn(O,A,M,"beforeUpdate"),M&&fs(M,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&h(G,""),W?b(A.dynamicChildren,W,G,M,$,ku(O,U),q):Y||ne(A,O,G,null,M,$,ku(O,U),q,!1),K>0){if(K&16)P(G,J,oe,M,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const fe=O.dynamicProps;for(let Pe=0;Pe<fe.length;Pe++){const Se=fe[Pe],Tt=J[Se],ht=oe[Se];(ht!==Tt||Se==="value")&&i(G,Se,Tt,ht,U,M)}}K&1&&A.children!==O.children&&h(G,O.children)}else!Y&&W==null&&P(G,J,oe,M,U);((ie=oe.onVnodeUpdated)||ue)&&gt(()=>{ie&&Wt(ie,M,O,A),ue&&Cn(O,A,M,"updated")},$)},b=(A,O,M,$,U,q,Y)=>{for(let G=0;G<O.length;G++){const K=A[G],W=O[G],ue=K.el&&(K.type===Ot||!_n(K,W)||K.shapeFlag&70)?d(K.el):M;k(K,W,ue,null,$,U,q,Y,!0)}},P=(A,O,M,$,U)=>{if(O!==M){if(O!==Fe)for(const q in O)!oi(q)&&!(q in M)&&i(A,q,O[q],null,U,$);for(const q in M){if(oi(q))continue;const Y=M[q],G=O[q];Y!==G&&q!=="value"&&i(A,q,G,Y,U,$)}"value"in M&&i(A,"value",O.value,M.value,U)}},S=(A,O,M,$,U,q,Y,G,K)=>{const W=O.el=A?A.el:a(""),ue=O.anchor=A?A.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=O;ie&&(G=G?G.concat(ie):ie),A==null?(r(W,M,$),r(ue,M,$),v(O.children||[],M,ue,U,q,Y,G,K)):J>0&&J&64&&oe&&A.dynamicChildren?(b(A.dynamicChildren,oe,M,U,q,Y,G),(O.key!=null||U&&O===U.subTree)&&oE(A,O,!0)):ne(A,O,M,ue,U,q,Y,G,K)},I=(A,O,M,$,U,q,Y,G,K)=>{O.slotScopeIds=G,A==null?O.shapeFlag&512?U.ctx.activate(O,M,$,Y,K):ge(O,M,$,U,q,Y,K):ve(A,O,K)},ge=(A,O,M,$,U,q,Y)=>{const G=A.component=i1(A,$,U);if(ca(A)&&(G.ctx.renderer=re),o1(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,Z,Y),!A.el){const K=G.subTree=be(it);N(null,K,O,M)}}else Z(G,A,O,M,U,q,Y)},ve=(A,O,M)=>{const $=O.component=A.component;if(KA(A,O,M))if($.asyncDep&&!$.asyncResolved){se($,O,M);return}else $.next=O,$.update();else O.el=A.el,$.vnode=O},Z=(A,O,M,$,U,q,Y)=>{const G=()=>{if(A.isMounted){let{next:J,bu:oe,u:ie,parent:fe,vnode:Pe}=A;{const It=aE(A);if(It){J&&(J.el=Pe.el,se(A,J,Y)),It.asyncDep.then(()=>{A.isUnmounted||G()});return}}let Se=J,Tt;fs(A,!1),J?(J.el=Pe.el,se(A,J,Y)):J=Pe,oe&&ai(oe),(Tt=J.props&&J.props.onVnodeBeforeUpdate)&&Wt(Tt,fe,J,Pe),fs(A,!0);const ht=Ou(A),dt=A.subTree;A.subTree=ht,k(dt,ht,d(dt.el),j(dt),A,U,q),J.el=ht.el,Se===null&&El(A,ht.el),ie&&gt(ie,U),(Tt=J.props&&J.props.onVnodeUpdated)&&gt(()=>Wt(Tt,fe,J,Pe),U)}else{let J;const{el:oe,props:ie}=O,{bm:fe,m:Pe,parent:Se,root:Tt,type:ht}=A,dt=Ur(O);if(fs(A,!1),fe&&ai(fe),!dt&&(J=ie&&ie.onVnodeBeforeMount)&&Wt(J,Se,O),fs(A,!0),oe&&Le){const It=()=>{A.subTree=Ou(A),Le(oe,A.subTree,A,U,null)};dt&&ht.__asyncHydrate?ht.__asyncHydrate(oe,A,It):It()}else{Tt.ce&&Tt.ce._injectChildStyle(ht);const It=A.subTree=Ou(A);k(null,It,M,$,A,U,q),O.el=It.el}if(Pe&&gt(Pe,U),!dt&&(J=ie&&ie.onVnodeMounted)){const It=O;gt(()=>Wt(J,Se,It),U)}(O.shapeFlag&256||Se&&Ur(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&gt(A.a,U),A.isMounted=!0,O=M=$=null}};A.scope.on();const K=A.effect=new lv(G);A.scope.off();const W=A.update=K.run.bind(K),ue=A.job=K.runIfDirty.bind(K);ue.i=A,ue.id=A.uid,K.scheduler=()=>Xf(ue),fs(A,!0),W()},se=(A,O,M)=>{O.component=A;const $=A.vnode.props;A.vnode=O,A.next=null,kA(A,O.props,$,M),DA(A,O.children,M),rs(),mm(A),ss()},ne=(A,O,M,$,U,q,Y,G,K=!1)=>{const W=A&&A.children,ue=A?A.shapeFlag:0,J=O.children,{patchFlag:oe,shapeFlag:ie}=O;if(oe>0){if(oe&128){dn(W,J,M,$,U,q,Y,G,K);return}else if(oe&256){ze(W,J,M,$,U,q,Y,G,K);return}}ie&8?(ue&16&&Ht(W,U,q),J!==W&&h(M,J)):ue&16?ie&16?dn(W,J,M,$,U,q,Y,G,K):Ht(W,U,q,!0):(ue&8&&h(M,""),ie&16&&v(J,M,$,U,q,Y,G,K))},ze=(A,O,M,$,U,q,Y,G,K)=>{A=A||si,O=O||si;const W=A.length,ue=O.length,J=Math.min(W,ue);let oe;for(oe=0;oe<J;oe++){const ie=O[oe]=K?Sr(O[oe]):Yt(O[oe]);k(A[oe],ie,M,null,U,q,Y,G,K)}W>ue?Ht(A,U,q,!0,!1,J):v(O,M,$,U,q,Y,G,K,J)},dn=(A,O,M,$,U,q,Y,G,K)=>{let W=0;const ue=O.length;let J=A.length-1,oe=ue-1;for(;W<=J&&W<=oe;){const ie=A[W],fe=O[W]=K?Sr(O[W]):Yt(O[W]);if(_n(ie,fe))k(ie,fe,M,null,U,q,Y,G,K);else break;W++}for(;W<=J&&W<=oe;){const ie=A[J],fe=O[oe]=K?Sr(O[oe]):Yt(O[oe]);if(_n(ie,fe))k(ie,fe,M,null,U,q,Y,G,K);else break;J--,oe--}if(W>J){if(W<=oe){const ie=oe+1,fe=ie<ue?O[ie].el:$;for(;W<=oe;)k(null,O[W]=K?Sr(O[W]):Yt(O[W]),M,fe,U,q,Y,G,K),W++}}else if(W>oe)for(;W<=J;)Ke(A[W],U,q,!0),W++;else{const ie=W,fe=W,Pe=new Map;for(W=fe;W<=oe;W++){const Vt=O[W]=K?Sr(O[W]):Yt(O[W]);Vt.key!=null&&Pe.set(Vt.key,W)}let Se,Tt=0;const ht=oe-fe+1;let dt=!1,It=0;const _r=new Array(ht);for(W=0;W<ht;W++)_r[W]=0;for(W=ie;W<=J;W++){const Vt=A[W];if(Tt>=ht){Ke(Vt,U,q,!0);continue}let nn;if(Vt.key!=null)nn=Pe.get(Vt.key);else for(Se=fe;Se<=oe;Se++)if(_r[Se-fe]===0&&_n(Vt,O[Se])){nn=Se;break}nn===void 0?Ke(Vt,U,q,!0):(_r[nn-fe]=W+1,nn>=It?It=nn:dt=!0,k(Vt,O[nn],M,null,U,q,Y,G,K),Tt++)}const Us=dt?MA(_r):si;for(Se=Us.length-1,W=ht-1;W>=0;W--){const Vt=fe+W,nn=O[Vt],js=Vt+1<ue?O[Vt+1].el:$;_r[W]===0?k(null,nn,M,js,U,q,Y,G,K):dt&&(Se<0||W!==Us[Se]?tn(nn,M,js,2):Se--)}}},tn=(A,O,M,$,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:W}=A;if(W&6){tn(A.component.subTree,O,M,$);return}if(W&128){A.suspense.move(O,M,$);return}if(W&64){Y.move(A,O,M,re);return}if(Y===Ot){r(q,O,M);for(let J=0;J<K.length;J++)tn(K[J],O,M,$);r(A.anchor,O,M);return}if(Y===yo){y(A,O,M);return}if($!==2&&W&1&&G)if($===0)G.beforeEnter(q),r(q,O,M),gt(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,fe=()=>r(q,O,M),Pe=()=>{J(q,()=>{fe(),ie&&ie()})};oe?oe(q,fe,Pe):Pe()}else r(q,O,M)},Ke=(A,O,M,$=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:W,shapeFlag:ue,patchFlag:J,dirs:oe,cacheIndex:ie}=A;if(J===-2&&(U=!1),G!=null&&Mo(G,null,M,A,!0),ie!=null&&(O.renderCache[ie]=void 0),ue&256){O.ctx.deactivate(A);return}const fe=ue&1&&oe,Pe=!Ur(A);let Se;if(Pe&&(Se=Y&&Y.onVnodeBeforeUnmount)&&Wt(Se,O,A),ue&6)An(A.component,M,$);else{if(ue&128){A.suspense.unmount(M,$);return}fe&&Cn(A,null,O,"beforeUnmount"),ue&64?A.type.remove(A,O,M,re,$):W&&!W.hasOnce&&(q!==Ot||J>0&&J&64)?Ht(W,O,M,!1,!0):(q===Ot&&J&384||!U&&ue&16)&&Ht(K,O,M),$&&Ge(A)}(Pe&&(Se=Y&&Y.onVnodeUnmounted)||fe)&&gt(()=>{Se&&Wt(Se,O,A),fe&&Cn(A,null,O,"unmounted")},M)},Ge=A=>{const{type:O,el:M,anchor:$,transition:U}=A;if(O===Ot){gr(M,$);return}if(O===yo){R(A);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(M,q);G?G(A.el,q,K):K()}else q()},gr=(A,O)=>{let M;for(;A!==O;)M=p(A),s(A),A=M;s(O)},An=(A,O,M)=>{const{bum:$,scope:U,job:q,subTree:Y,um:G,m:K,a:W}=A;xc(K),xc(W),$&&ai($),U.stop(),q&&(q.flags|=8,Ke(Y,A,O,M)),G&&gt(G,O),gt(()=>{A.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Ht=(A,O,M,$=!1,U=!1,q=0)=>{for(let Y=q;Y<A.length;Y++)Ke(A[Y],O,M,$,U)},j=A=>{if(A.shapeFlag&6)return j(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const O=p(A.anchor||A.el),M=O&&O[nA];return M?p(M):O};let ee=!1;const X=(A,O,M)=>{A==null?O._vnode&&Ke(O._vnode,null,null,!0):k(O._vnode||null,A,O,null,null,null,M),O._vnode=A,ee||(ee=!0,mm(),Pc(),ee=!1)},re={p:k,um:Ke,m:tn,r:Ge,mt:ge,mc:v,pc:ne,pbc:b,n:j,o:t};let Ie,Le;return e&&([Ie,Le]=e(re)),{render:X,hydrate:Ie,createApp:CA(X,Ie)}}function ku({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function iE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function oE(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&oE(o,a)),a.type===Ts&&(a.el=o.el)}}function MA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function aE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:aE(e)}function xc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const FA=Symbol.for("v-scx"),UA=()=>Nt(FA);function jA(t,e){return nd(t,null,e)}function vn(t,e,n){return nd(t,e,n)}function nd(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=st({},n),l=e&&r||!e&&i!=="post";let u;if(vi){if(i==="sync"){const g=UA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Nn,g.resume=Nn,g.pause=Nn,g}}const h=ot;a.call=(g,w,k)=>wn(g,h,w,k);let d=!1;i==="post"?a.scheduler=g=>{gt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,w)=>{w?g():Xf(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=ZI(t,e,a);return vi&&(u?u.push(p):l&&p()),p}function BA(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?cE(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=ua(this),a=nd(s,i.bind(r),n);return o(),a}function cE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $A=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${fn(e)}Modifiers`]||t[`${Ns(e)}Modifiers`];function HA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&$A(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>We(h)?h.trim():h)),o.number&&(s=n.map(Ic)));let a,l=r[a=wu(e)]||r[a=wu(fn(e))];!l&&i&&(l=r[a=wu(Ns(e))]),l&&wn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wn(u,t,6,s)}}function lE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const h=lE(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ve(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):st(o,i),Ve(t)&&r.set(t,o),o)}function vl(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Ns(e))||xe(t,e))}function Ou(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:w,inheritAttrs:k}=t,x=kc(t);let N,C;try{if(n.shapeFlag&4){const R=s||r,D=R;N=Yt(u.call(D,R,h,d,g,p,w)),C=a}else{const R=e;N=Yt(R.length>1?R(d,{attrs:a,slots:o,emit:l}):R(d,null)),C=e.props?a:WA(a)}}catch(R){vo.length=0,Li(R,t,1),N=be(it)}let y=N;if(C&&k!==!1){const R=Object.keys(C),{shapeFlag:D}=y;R.length&&D&7&&(i&&R.some(Ff)&&(C=zA(C,i)),y=ir(y,C,!1,!0))}return n.dirs&&(y=ir(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&_i(y,n.transition),N=y,kc(x),N}function qA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(As(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const WA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},zA=(t,e)=>{const n={};for(const r in t)(!Ff(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function KA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Am(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!vl(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Am(r,o,u):!0:!!o;return!1}function Am(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!vl(n,i))return!0}return!1}function El({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Nc=t=>t.__isSuspense;let Eh=0;const GA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)QA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}YA(t,e,n,r,s,o,a,l,u)}},hydrate:XA,normalize:JA},rd=GA;function Uo(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function QA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=uE(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Uo(t,"onPending"),Uo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),li(p,t.ssFallback)):p.resolve(!1,!0)}function YA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:w,pendingBranch:k,isInFallback:x,isHydrating:N}=d;if(k)d.pendingBranch=p,_n(p,k)?(l(k,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():x&&(N||(l(w,g,n,r,s,null,i,o,a),li(d,g)))):(d.pendingId=Eh++,N?(d.isHydrating=!1,d.activeBranch=k):u(k,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),x?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(w,g,n,r,s,null,i,o,a),li(d,g))):w&&_n(p,w)?(l(w,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(w&&_n(p,w))l(w,p,n,r,s,d,i,o,a),li(d,p);else if(Uo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=Eh++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:C,pendingId:y}=d;C>0?setTimeout(()=>{d.pendingId===y&&d.fallback(g)},C):C===0&&d.fallback(g)}}function uE(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:w,o:{parentNode:k,remove:x}}=u;let N;const C=ZA(t);C&&e&&e.pendingBranch&&(N=e.pendingId,e.deps++);const y=t.props?sv(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Eh++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(V=!1,T=!1){const{vnode:v,activeBranch:_,pendingBranch:b,pendingId:P,effects:S,parentComponent:I,container:ge}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:V||(ve=_&&b.transition&&b.transition.mode==="out-in",ve&&(_.transition.afterLeave=()=>{P===D.pendingId&&(p(b,ge,i===R?w(_):i,0),ph(S))}),_&&(k(_.el)===ge&&(i=w(_)),g(_,I,D,!0)),ve||p(b,ge,i,0)),li(D,b),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...S),se=!0;break}Z=Z.parent}!se&&!ve&&ph(S),D.effects=[],C&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),Uo(v,"onResolve")},fallback(V){if(!D.pendingBranch)return;const{vnode:T,activeBranch:v,parentComponent:_,container:b,namespace:P}=D;Uo(T,"onFallback");const S=w(v),I=()=>{D.isInFallback&&(d(null,V,b,S,_,null,P,a,l),li(D,V))},ge=V.transition&&V.transition.mode==="out-in";ge&&(v.transition.afterLeave=I),D.isInFallback=!0,g(v,_,null,!0),ge||I()},move(V,T,v){D.activeBranch&&p(D.activeBranch,V,T,v),D.container=V},next(){return D.activeBranch&&w(D.activeBranch)},registerDep(V,T,v){const _=!!D.pendingBranch;_&&D.deps++;const b=V.vnode.el;V.asyncDep.catch(P=>{Li(P,V,0)}).then(P=>{if(V.isUnmounted||D.isUnmounted||D.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:S}=V;bh(V,P,!1),b&&(S.el=b);const I=!b&&V.subTree.el;T(V,S,k(b||V.subTree.el),b?null:w(V.subTree),D,o,v),I&&x(I),El(V,S.el),_&&--D.deps===0&&D.resolve()})},unmount(V,T){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,V,T),D.pendingBranch&&g(D.pendingBranch,n,V,T)}};return D}function XA(t,e,n,r,s,i,o,a,l){const u=e.suspense=uE(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function JA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Rm(r?n.default:n),t.ssFallback=r?Rm(n.fallback):be(it)}function Rm(t){let e;if(pe(t)){const n=yi&&t._c;n&&(t._d=!1,$t()),t=t(),n&&(t._d=!0,e=Gt,fE())}return le(t)&&(t=qA(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function hE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):ph(t)}function li(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,El(r,s))}function ZA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ot=Symbol.for("v-fgt"),Ts=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),yo=Symbol.for("v-stc"),vo=[];let Gt=null;function $t(t=!1){vo.push(Gt=t?null:[])}function fE(){vo.pop(),Gt=vo[vo.length-1]||null}let yi=1;function Sm(t,e=!1){yi+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function dE(t){return t.dynamicChildren=yi>0?Gt||si:null,fE(),yi>0&&Gt&&Gt.push(t),t}function jo(t,e,n,r,s,i){return dE(He(t,e,n,r,s,i,!0))}function Xn(t,e,n,r,s){return dE(be(t,e,n,r,s,!0))}function As(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const pE=({key:t})=>t??null,ac=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Je(t)||pe(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pE(e),ref:e&&ac(e),scopeId:kv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return a?(sd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),yi>0&&!o&&Gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Gt.push(l),l}const be=e1;function e1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===qv)&&(t=it),As(t)){const a=ir(t,e,!0);return n&&sd(a,n),yi>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag=-2,a}if(u1(t)&&(t=t.__vccOpts),e){e=t1(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=sa(a)),Ve(l)&&(Qf(l)&&!le(l)&&(l=st({},l)),e.style=pl(l))}const o=We(t)?1:Nc(t)?128:Ov(t)?64:Ve(t)?4:pe(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function t1(t){return t?Qf(t)||Xv(t)?st({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?mE(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&pE(u),ref:e&&e.ref?n&&i?le(i)?i.concat(ac(e)):[i,ac(e)]:ac(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&_i(h,l.clone(h)),h}function an(t=" ",e=0){return be(Ts,null,t,e)}function u6(t,e){const n=be(yo,null,t);return n.staticCount=e,n}function n1(t="",e=!1){return e?($t(),Xn(it,null,t)):be(it,null,t)}function Yt(t){return t==null||typeof t=="boolean"?be(it):le(t)?be(Ot,null,t.slice()):As(t)?Sr(t):be(Ts,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function sd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),sd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xv(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function mE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sa([e.class,r.class]));else if(s==="style")e.style=pl([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){wn(t,e,7,[n,r])}const r1=Gv();let s1=0;function i1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||r1,i={uid:s1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zv(r,s),emitsOptions:lE(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=HA.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const wl=()=>ot||ct;let Dc,wh;{const t=dl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Dc=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),wh=e("__VUE_SSR_SETTERS__",n=>vi=n)}const ua=t=>{const e=ot;return Dc(t),t.scope.on(),()=>{t.scope.off(),Dc(e)}},Cm=()=>{ot&&ot.scope.off(),Dc(null)};function gE(t){return t.vnode.shapeFlag&4}let vi=!1;function o1(t,e=!1,n=!1){e&&wh(e);const{props:r,children:s}=t.vnode,i=gE(t);PA(t,r,i,e),NA(t,s,n);const o=i?a1(t,e):void 0;return e&&wh(!1),o}function a1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wA);const{setup:r}=n;if(r){rs();const s=t.setupContext=r.length>1?l1(t):null,i=ua(t),o=aa(r,t,0,[t.props,s]),a=ev(o);if(ss(),i(),(a||t.sp)&&!Ur(t)&&Jf(t),a){if(o.then(Cm,Cm),e)return o.then(l=>{bh(t,l,e)}).catch(l=>{Li(l,t,0)});t.asyncDep=o}else bh(t,o,e)}else _E(t,e)}function bh(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Av(e)),_E(t,n)}let Pm;function _E(t,e,n){const r=t.type;if(!t.render){if(!e&&Pm&&!r.render){const s=r.template||Zf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=st(st({isCustomElement:i,delimiters:a},o),l);r.render=Pm(s,u)}}t.render=r.render||Nn}{const s=ua(t);rs();try{bA(t)}finally{ss(),s()}}}const c1={get(t,e){return Pt(t,"get",""),t[e]}};function l1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,c1),slots:t.slots,emit:t.emit,expose:e}}function bl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Av(Yf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}})):t.proxy}function Th(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function u1(t){return pe(t)&&"__vccOpts"in t}const Ue=(t,e)=>XI(t,e,vi);function vt(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!le(e)?As(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&As(n)&&(n=[n]),be(t,e,n))}const yE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ih;const km=typeof window<"u"&&window.trustedTypes;if(km)try{Ih=km.createPolicy("vue",{createHTML:t=>t})}catch{}const vE=Ih?t=>Ih.createHTML(t):t=>t,h1="http://www.w3.org/2000/svg",f1="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Om=Gn&&Gn.createElement("template"),d1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Gn.createElementNS(h1,t):e==="mathml"?Gn.createElementNS(f1,t):n?Gn.createElement(t,{is:n}):Gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Om.innerHTML=vE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Om.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",no="animation",Bo=Symbol("_vtc"),EE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},p1=st({},xv,EE),m1=t=>(t.displayName="Transition",t.props=p1,t),g1=m1((t,{slots:e})=>vt(iA,_1(t),e)),ds=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},xm=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function _1(t){const e={};for(const S in t)S in EE||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=y1(s),k=w&&w[0],x=w&&w[1],{onBeforeEnter:N,onEnter:C,onEnterCancelled:y,onLeave:R,onLeaveCancelled:D,onBeforeAppear:V=N,onAppear:T=C,onAppearCancelled:v=y}=e,_=(S,I,ge,ve)=>{S._enterCancelled=ve,ps(S,I?h:a),ps(S,I?u:o),ge&&ge()},b=(S,I)=>{S._isLeaving=!1,ps(S,d),ps(S,g),ps(S,p),I&&I()},P=S=>(I,ge)=>{const ve=S?T:C,Z=()=>_(I,S,ge);ds(ve,[I,Z]),Nm(()=>{ps(I,S?l:i),zn(I,S?h:a),xm(ve)||Dm(I,r,k,Z)})};return st(e,{onBeforeEnter(S){ds(N,[S]),zn(S,i),zn(S,o)},onBeforeAppear(S){ds(V,[S]),zn(S,l),zn(S,u)},onEnter:P(!1),onAppear:P(!0),onLeave(S,I){S._isLeaving=!0;const ge=()=>b(S,I);zn(S,d),S._enterCancelled?(zn(S,p),Mm()):(Mm(),zn(S,p)),Nm(()=>{S._isLeaving&&(ps(S,d),zn(S,g),xm(R)||Dm(S,r,x,ge))}),ds(R,[S,ge])},onEnterCancelled(S){_(S,!1,void 0,!0),ds(y,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),ds(v,[S])},onLeaveCancelled(S){b(S),ds(D,[S])}})}function y1(t){if(t==null)return null;if(Ve(t))return[xu(t.enter),xu(t.leave)];{const e=xu(t);return[e,e]}}function xu(t){return sv(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bo]||(t[Bo]=new Set)).add(e)}function ps(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bo];n&&(n.delete(e),n.size||(t[Bo]=void 0))}function Nm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let v1=0;function Dm(t,e,n,r){const s=t._endId=++v1,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=E1(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function E1(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${wr}Delay`),i=r(`${wr}Duration`),o=Lm(s,i),a=r(`${no}Delay`),l=r(`${no}Duration`),u=Lm(a,l);let h=null,d=0,p=0;e===wr?o>0&&(h=wr,d=o,p=i.length):e===no?u>0&&(h=no,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?wr:no:null,p=h?h===wr?i.length:l.length:0);const g=h===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function Lm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vm(n)+Vm(t[r])))}function Vm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Mm(){return document.body.offsetHeight}function w1(t,e,n){const r=t[Bo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fm=Symbol("_vod"),b1=Symbol("_vsh"),T1=Symbol(""),I1=/(^|;)\s*display\s*:/;function A1(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&cc(r,a,"")}else for(const o in e)n[o]==null&&cc(r,o,"");for(const o in n)o==="display"&&(i=!0),cc(r,o,n[o])}else if(s){if(e!==n){const o=r[T1];o&&(n+=";"+o),r.cssText=n,i=I1.test(n)}}else e&&t.removeAttribute("style");Fm in t&&(t[Fm]=i?r.display:"",t[b1]&&(r.display="none"))}const Um=/\s*!important$/;function cc(t,e,n){if(le(n))n.forEach(r=>cc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=R1(t,e);Um.test(n)?t.setProperty(Ns(r),n.replace(Um,""),"important"):t[r]=n}}const jm=["Webkit","Moz","ms"],Nu={};function R1(t,e){const n=Nu[e];if(n)return n;let r=fn(e);if(r!=="filter"&&r in t)return Nu[e]=r;r=fl(r);for(let s=0;s<jm.length;s++){const i=jm[s]+r;if(i in t)return Nu[e]=i}return e}const Bm="http://www.w3.org/1999/xlink";function $m(t,e,n,r,s,i=wI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Bm,e.slice(6,e.length)):t.setAttributeNS(Bm,e,n):n==null||i&&!iv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":En(n)?String(n):n)}function Hm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=iv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function kr(t,e,n,r){t.addEventListener(e,n,r)}function S1(t,e,n,r){t.removeEventListener(e,n,r)}const qm=Symbol("_vei");function C1(t,e,n,r,s=null){const i=t[qm]||(t[qm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=P1(e);if(r){const u=i[e]=x1(r,s);kr(t,a,u,l)}else o&&(S1(t,a,o,l),i[e]=void 0)}}const Wm=/(?:Once|Passive|Capture)$/;function P1(t){let e;if(Wm.test(t)){e={};let r;for(;r=t.match(Wm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let Du=0;const k1=Promise.resolve(),O1=()=>Du||(k1.then(()=>Du=0),Du=Date.now());function x1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wn(N1(r,n.value),e,5,[r])};return n.value=t,n.attached=O1(),n}function N1(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const zm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,D1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?w1(t,r,o):e==="style"?A1(t,n,r):ra(e)?Ff(e)||C1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):L1(t,e,r,o))?(Hm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$m(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Hm(t,fn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$m(t,e,r,o))};function L1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&zm(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return zm(e)&&We(n)?!1:e in t}const Ei=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>ai(e,n):e};function V1(t){t.target.composing=!0}function Km(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sr=Symbol("_assign"),h6={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sr]=Ei(s);const i=r||s.props&&s.props.type==="number";kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ic(a)),t[sr](a)}),n&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",V1),kr(t,"compositionend",Km),kr(t,"change",Km))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sr]=Ei(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ic(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},f6={deep:!0,created(t,e,n){t[sr]=Ei(n),kr(t,"change",()=>{const r=t._modelValue,s=$o(t),i=t.checked,o=t[sr];if(le(r)){const a=Bf(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Ni(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(wE(t,i))})},mounted:Gm,beforeUpdate(t,e,n){t[sr]=Ei(n),Gm(t,e,n)}};function Gm(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Bf(e,r.props.value)>-1;else if(Ni(e))s=e.has(r.props.value);else{if(e===n)return;s=ia(e,wE(t,!0))}t.checked!==s&&(t.checked=s)}const d6={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ni(e);kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ic($o(o)):$o(o));t[sr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Bn(()=>{t._assigning=!1})}),t[sr]=Ei(r)},mounted(t,{value:e}){Qm(t,e)},beforeUpdate(t,e,n){t[sr]=Ei(n)},updated(t,{value:e}){t._assigning||Qm(t,e)}};function Qm(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Ni(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=$o(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Bf(e,a)>-1}else o.selected=e.has(a);else if(ia($o(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $o(t){return"_value"in t?t._value:t.value}function wE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const M1=["ctrl","shift","alt","meta"],F1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>M1.some(n=>t[`${n}Key`]&&!e.includes(n))},p6=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=F1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},bE=st({patchProp:D1},d1);let Eo,Ym=!1;function U1(){return Eo||(Eo=LA(bE))}function j1(){return Eo=Ym?Eo:VA(bE),Ym=!0,Eo}const B1=(...t)=>{const e=U1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=IE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,TE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},$1=(...t)=>{const e=j1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=IE(r);if(s)return n(s,!0,TE(s))},e};function TE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function IE(t){return We(t)?document.querySelector(t):t}const H1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,q1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,W1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function z1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){K1(t);return}return e}function K1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ho(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!W1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(H1.test(t)||q1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,z1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const G1=/#/g,Q1=/&/g,Y1=/\//g,X1=/=/g,id=/\+/g,J1=/%5e/gi,Z1=/%60/gi,eR=/%7c/gi,tR=/%20/gi;function nR(t){return encodeURI(""+t).replace(eR,"|")}function Ah(t){return nR(typeof t=="string"?t:JSON.stringify(t)).replace(id,"%2B").replace(tR,"+").replace(G1,"%23").replace(Q1,"%26").replace(Z1,"`").replace(J1,"^").replace(Y1,"%2F")}function Lu(t){return Ah(t).replace(X1,"%3D")}function Lc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function rR(t){return Lc(t.replace(id," "))}function sR(t){return Lc(t.replace(id," "))}function AE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=rR(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=sR(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function iR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Lu(t)}=${Ah(n)}`).join("&"):`${Lu(t)}=${Ah(e)}`:Lu(t)}function oR(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>iR(e,t[e])).filter(Boolean).join("&")}const aR=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,cR=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,lR=/^([/\\]\s*){2,}[^/\\]/,uR=/^[\s\0]*(blob|data|javascript|vbscript):$/i,hR=/\/$|\/\?|\/#/,fR=/^\.?\//;function pr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?aR.test(t):cR.test(t)||(e.acceptRelative?lR.test(t):!1)}function dR(t){return!!t&&uR.test(t)}function Rh(t="",e){return e?hR.test(t):t.endsWith("/")}function Tl(t="",e){if(!e)return(Rh(t)?t.slice(0,-1):t)||"/";if(!Rh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Vc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Rh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function pR(t=""){return t.startsWith("/")}function Xm(t=""){return pR(t)?t:"/"+t}function mR(t,e){if(SE(e)||pr(t))return t;const n=Tl(e);return t.startsWith(n)?t:Il(n,t)}function Jm(t,e){if(SE(e))return t;const n=Tl(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function RE(t,e){const n=yR(t),r={...AE(n.search),...e};return n.search=oR(r),vR(n)}function SE(t){return!t||t==="/"}function gR(t){return t&&t!=="/"}function Il(t,...e){let n=t||"";for(const r of e.filter(s=>gR(s)))if(n){const s=r.replace(fR,"");n=Vc(n)+s}else n=r;return n}function CE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&pr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function _R(t,e,n={}){return n.trailingSlash||(t=Vc(t),e=Vc(e)),n.leadingSlash||(t=Xm(t),e=Xm(e)),n.encoding||(t=Lc(t),e=Lc(e)),t===e}const PE=Symbol.for("ufo:protocolRelative");function yR(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!pr(t,{acceptRelative:!0}))return Zm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=Zm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[PE]:!r}}function Zm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function vR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[PE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class ER extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function wR(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new ER(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,w]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[w]}});return a}const bR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function eg(t="GET"){return bR.has(t.toUpperCase())}function TR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const IR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),AR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function RR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return AR.test(e)?"json":IR.has(e)||e.startsWith("text/")?"text":"blob"}function SR(t,e,n,r){const s=CR((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function CR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Wa(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const PR=new Set([408,409,425,429,500,502,503,504]),kR=new Set([101,204,205,304]);function kE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=eg(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):PR.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=wR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:SR(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Wa(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=mR(h.request,h.options.baseURL)),h.options.query&&(h.request=RE(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&eg(h.options.method)&&(TR(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const g=new r;d=setTimeout(()=>{const w=new Error("[TimeoutError]: The operation was aborted due to timeout");w.name="TimeoutError",w.code=23,g.abort(w)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await Wa(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!kR.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||RR(h.response.headers.get("content-type")||"");switch(g){case"json":{const w=await h.response.text(),k=h.options.parseResponse||Ho;h.response._data=k(w);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await Wa(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Wa(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>kE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Mc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),OR=Mc.fetch?(...t)=>Mc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),xR=Mc.Headers,NR=Mc.AbortController,DR=kE({fetch:OR,Headers:xR,AbortController:NR}),LR=DR,VR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Fc=VR().app,MR=()=>Fc.baseURL,FR=()=>Fc.buildAssetsDir,od=(...t)=>CE(ad(),FR(),...t),ad=(...t)=>{const e=Fc.cdnURL||Fc.baseURL;return t.length?CE(e,...t):e};globalThis.__buildAssetsURL=od,globalThis.__publicAssetsURL=ad;globalThis.$fetch||(globalThis.$fetch=LR.create({baseURL:MR()}));function Sh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Sh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const UR={run:t=>t()},jR=()=>UR,OE=typeof console.createTask<"u"?console.createTask:jR;function BR(t,e){const n=e.shift(),r=OE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function $R(t,e){const n=e.shift(),r=OE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Vu(t,e){for(const n of[...t])n(e)}class HR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Sh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Sh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(BR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith($R,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Vu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Vu(this._after,s)}):(this._after&&s&&Vu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function xE(){return new HR}function qR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Ch.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Ch.delete(u)}}}}function WR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=qR({...t,...r})),e[n]}}}const Uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},tg="__unctx__",zR=Uc[tg]||(Uc[tg]=WR()),KR=(t,e={})=>zR.get(t,e),ng="__unctx_async_handlers__",Ch=Uc[ng]||(Uc[ng]=new Set);function ui(t){const e=[];for(const s of Ch){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ph={name:"page",mode:"out-in"},GR=!1,QR=!1,YR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},XR=null,JR="#__nuxt",NE="nuxt-app",rg=36e5,ZR="vite:preloadError";function DE(t=NE){return KR(t,{asyncContext:!1})}const eS="__nuxt_plugin";function tS(t){var s;let e=0;const n={_id:t.id||NE||"nuxt-app",_scope:Hf(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.4"},get vue(){return n.vueApp.version}},payload:Zn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Zn({}),state:fr({}),once:new Set,_errors:Zn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!oa()?n._scope.run(()=>sg(n,i)):sg(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Zn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=xE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;za(n,a,o),za(n.vueApp.config.globalProperties,a,o)},za(n.vueApp,"$nuxt",n),za(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(ZR,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||De;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function nS(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function rS(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function sS(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=rS(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)nS(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[eS]:!0,_name:e})}function sg(t,e,n){const r=()=>e();return DE(t._id).set(t),t.vueApp.runWithContext(r)}function iS(t){var n;let e;return ed()&&(e=(n=wl())==null?void 0:n.appContext.app.$nuxt),e=e||DE(t).tryUse(),e||null}function De(t){const e=iS(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ds(t){return De().$config}function za(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function oS(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||aS;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=cS(u,s)}i=a+1}return n}function aS(t){return t.includes("%")?decodeURIComponent(t):t}function cS(t,e){try{return e(t)}catch{return t}}const Ka=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function ig(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Ka.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Ka.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ka.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ka.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!lS(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function lS(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const og=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ag(t,e){e?e={...og,...e}:e=og;const n=LE(e);return n.dispatch(t),n.toString()}const uS=Object.freeze(["prototype","__proto__","constructor"]);function LE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!cg(s)&&(h=uS),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=LE(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),cg(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const VE="[native code] }",hS=VE.length;function cg(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-hS)===VE}function fS(t,e,n={}){return t===e||ag(t,n)===ag(e,n)}function dS(t,e){return{ctx:{table:t},matchAll:n=>FE(n,t)}}function ME(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,ME(s)])):new Map(Object.entries(t[n]));return e}function pS(t){return dS(ME(t))}function FE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of lg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of lg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...FE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function lg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Mu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function kh(t,e,n=".",r){if(!Mu(e))return kh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Mu(o)&&Mu(s[i])?s[i]=kh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function mS(t){return(...e)=>e.reduce((n,r)=>kh(n,r,"",t),{})}const UE=mS();function gS(t,e){try{return e in t}catch{return!1}}class Oh extends Error{constructor(n,r={}){super(n,r);rn(this,"statusCode",500);rn(this,"fatal",!1);rn(this,"unhandled",!1);rn(this,"statusMessage");rn(this,"data");rn(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Nh(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=jE(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}rn(Oh,"__h3_error__",!0);function xh(t){if(typeof t=="string")return new Oh(t);if(_S(t))return t;const e=new Oh(t.message??t.statusMessage??"",{cause:t.cause||t});if(gS(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Nh(t.statusCode,e.statusCode):t.status&&(e.statusCode=Nh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;jE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function _S(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const yS=/[^\u0009\u0020-\u007E]/g;function jE(t=""){return t.replace(yS,"")}function Nh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const BE=Symbol("layout-meta"),ha=Symbol("route"),wt=()=>{var t;return(t=De())==null?void 0:t.$router},cd=()=>ed()?Nt(ha,De()._route):De()._route;function m6(t){return t}const vS=()=>{try{if(De()._processingMiddleware)return!0}catch{return!1}return!1},ES=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Dh(t):wt().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=pr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&dR(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=vS();if(!s&&i)return e!=null&&e.replace?typeof t=="string"?{path:t,replace:!0}:{...t,replace:!0}:t;const o=wt(),a=De();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Dh(t){return RE(t.path||"",t.query||{})+(t.hash||"")}const $E="__nuxt_error",Al=()=>QI(De().payload,"error"),ti=t=>{const e=Rl(t);try{const n=De(),r=Al();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},HE=async(t={})=>{const e=De(),n=Al();e.callHook("app:error:cleared",t),t.redirect&&await wt().replace(t.redirect),n.value=XR},wS=t=>!!t&&typeof t=="object"&&$E in t,Rl=t=>{const e=xh(t);return Object.defineProperty(e,$E,{value:!0,configurable:!1,writable:!1}),e};function ug(t){const e=TS(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const bS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function TS(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=bS.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const IS=-1,AS=-2,RS=-3,SS=-4,CS=-5,PS=-6;function kS(t,e){return OS(JSON.parse(t),e)}function OS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===IS)return;if(i===RS)return NaN;if(i===SS)return 1/0;if(i===CS)return-1/0;if(i===PS)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],w=a[1],k=ug(w),x=new g(k);r[i]=x;break}case"ArrayBuffer":{const g=a[1],w=ug(g);r[i]=w;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==AS&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const xS=new Set(["title","titleTemplate","script","style","noscript"]),lc=new Set(["base","meta","link","style","script","noscript"]),NS=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),DS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),qE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),LS=typeof window<"u";function jc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Lh(t){if(t._h)return t._h;if(t._d)return jc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return jc(e)}function VS(t,e){return t instanceof Promise?t.then(e):e(t)}function Vh(t,e,n,r){const s=r||zE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Vh(t,e,n,o));const i={tag:t,props:s};for(const o of qE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||xS.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function MS(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function WE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=MS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,WE(t,e,n,s)));if(!e&&!qE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function zE(t,e=!1){const n=WE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const FS=10;function KE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,KE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function US(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!NS.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Vh(s,o,t));continue}e.push(Vh(s,i,t))}}if(e.length===0)return[];const r=[];return VS(KE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<FS)+i,s)))}const hg=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),fg={base:-10,title:10},dg={critical:-80,high:-10,low:20};function Bc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in fg&&(n=fg[t.tag]),e&&e in dg?n+dg[e]:n}const jS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],BS=["name","property","http-equiv"];function GE(t){const{props:e,tag:n}=t;if(DS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of BS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Cr="%separator";function $S(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const HS=new RegExp(`${Cr}(?:\\s*${Cr})*`,"g");function Ga(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Cr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Cr||!i.includes(a))return a;const l=$S(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Cr)&&(t=t.slice(0,-Cr.length)),t.startsWith(Cr)&&(t=t.slice(Cr.length)),t=t.replace(HS,n).trim()),t}function pg(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function QE(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:lc.has(p.tag)?Lh(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const g of["body","head"]){const w=(d=n[g])==null?void 0:d.children;for(const k of w){const x=k.tagName.toLowerCase();if(!lc.has(x))continue;const N={tag:x,props:await zE(k.getAttributeNames().reduce((D,V)=>({...D,[V]:k.getAttribute(V)}),{})),innerHTML:k.innerHTML},C=GE(N);let y=C,R=1;for(;y&&p.has(y);)y=`${C}:${R++}`;y&&(N._d=y,p.add(y)),o.elMap[k.getAttribute("data-hid")||Lh(N)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,g,w){const k=`${p}:${g}`;o.sideEffects[k]=w,delete o.pendingSideEffects[k]}function l({id:p,$el:g,tag:w}){const k=w.tag.endsWith("Attrs");if(o.elMap[p]=g,k||(w.textContent&&w.textContent!==g.textContent&&(g.textContent=w.textContent),w.innerHTML&&w.innerHTML!==g.innerHTML&&(g.innerHTML=w.innerHTML),a(p,"el",()=>{var x;(x=o.elMap[p])==null||x.remove(),delete o.elMap[p]})),w._eventHandlers)for(const x in w._eventHandlers)Object.prototype.hasOwnProperty.call(w._eventHandlers,x)&&g.getAttribute(`data-${x}`)!==""&&((w.tag==="bodyAttrs"?n.defaultView:g).addEventListener(x.substring(2),w._eventHandlers[x].bind(g)),g.setAttribute(`data-${x}`,""));for(const x in w.props){if(!Object.prototype.hasOwnProperty.call(w.props,x))continue;const N=w.props[x],C=`attr:${x}`;if(x==="class"){if(!N)continue;for(const y of N.split(" "))k&&a(p,`${C}:${y}`,()=>g.classList.remove(y)),!g.classList.contains(y)&&g.classList.add(y)}else if(x==="style"){if(!N)continue;for(const y of N.split(";")){const R=y.indexOf(":"),D=y.substring(0,R).trim(),V=y.substring(R+1).trim();a(p,`${C}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,V)}}else g.getAttribute(x)!==N&&g.setAttribute(x,N===!0?"":String(N)),k&&a(p,C,()=>g.removeAttribute(x))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:g,shouldRender:w,id:k}=p;if(w){if(g.tag==="title"){n.title=g.textContent;continue}p.$el=p.$el||o.elMap[k],p.$el?l(p):lc.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function qS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>QE(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function WS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{qS(i,t)}}}}}const zS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),KS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=GE(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Lh(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&zS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Bc(r)>Bc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&lc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},GS=new Set(["script","link","bodyAttrs"]),QS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!GS.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&hg.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||jc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);hg.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),YS=new Set(["link","style","script","noscript"]),XS={hooks:{"tag:normalise":({tag:t})=>{t.key&&YS.has(t.tag)&&(t.props["data-hid"]=t._h=jc(t.key))}}},JS={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},ZS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of jS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Bc(n),i=Bc(r);return s<i?-1:s>i?1:n._p-r._p})}}},eC={meta:"content",link:"href",htmlAttrs:"lang"},tC=["innerHTML","textContent"],nC=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Ga(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=eC[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Ga(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of tC)typeof a[u]=="string"&&(a[u]=Ga(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Ga(n.textContent,t._templateParams,t._separator))}}}),rC={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=pg(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=pg(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},sC={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};function iC(t={}){const e=oC(t);return e.use(WS()),e}function mg(t,e){return!t||t==="server"&&e||t==="client"&&!e}function oC(t={}){const e=xE();e.addHooks(t.hooks||{}),t.document=t.document||(LS?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),mg(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return mg(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const p of i)p._i===h._i&&(p.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await US(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[KS,JS,QS,XS,ZS,nC,rC,sC,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}const aC=yE[0]==="3";function cC(t){return typeof t=="function"?t():Qe(t)}function Mh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=cC(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Mh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Mh(e[r])}return n}return e}const lC={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Mh(e.input)}}},uC="usehead";function hC(t){return{install(n){aC&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(uC,t))}}.install}function fC(t={}){t.domDelayFn=t.domDelayFn||(n=>Bn(()=>setTimeout(()=>n(),0)));const e=iC(t);return e.use(lC),e.install=hC(e),e}const dC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pC="__unhead_injection_handler__";function mC(t){dC[pC]=t}const gC="modulepreload",_C=function(t,e){return new URL(t,e).href},gg={},ke=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=_C(u,r),u in gg)return;gg[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const k=o[w];if(k.href===u&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":gC,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((w,k)=>{g.addEventListener("load",w),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let uc,hc;function yC(){return uc=$fetch(od(`builds/meta/${Ds().app.buildId}.json`),{responseType:"json"}),uc.then(t=>{hc=pS(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),uc}function Sl(){return uc||yC()}async function ld(t){const e=typeof t=="string"?t:t.path;if(await Sl(),!hc)return console.error("[nuxt] Error creating app manifest matcher.",hc),{};try{return UE({},...hc.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function _g(t,e={}){const n=await EC(t,e),r=De(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=XE(t).then(i=>i?YE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const vC="_payload.json";async function EC(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||pr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ds(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await XE(t)?i:r.app.baseURL;return Il(o,n.pathname,vC+(s?`?${s}`:""))}async function YE(t){const e=fetch(t).then(n=>n.text().then(JE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function XE(t=cd().path){const e=De();return t=Tl(t),(await Sl()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await ld({path:t});return!!r.prerender&&!r.redirect})}let ms=null;async function wC(){var r;if(ms)return ms;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await JE(t.textContent||""),n=t.dataset.src?await YE(t.dataset.src):void 0;return ms={...e,...n,...window.__NUXT__},(r=ms.config)!=null&&r.public&&(ms.config.public=fr(ms.config.public)),ms}async function JE(t){return await kS(t,De()._payloadRevivers)}function bC(t,e){De()._payloadRevivers[t]=e}const TC=[["NuxtError",t=>Rl(t)],["EmptyShallowRef",t=>Lo(t==="_"?void 0:t==="0n"?BigInt(0):Ho(t))],["EmptyRef",t=>Et(t==="_"?void 0:t==="0n"?BigInt(0):Ho(t))],["ShallowRef",t=>Lo(t)],["ShallowReactive",t=>Zn(t)],["Ref",t=>Et(t)],["Reactive",t=>fr(t)]],IC=Zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of TC)bC(r,s);Object.assign(t.payload,([e,n]=ui(()=>t.runWithContext(wC)),e=await e,n(),e)),window.__NUXT__=t.payload}});let AC;function RC(){return AC}function SC(t){return typeof t=="function"?t():Qe(t)}function Fh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=SC(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Fh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Fh(e[r])}return n}return e}const CC="usehead",yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vg="__unhead_injection_handler__";function PC(){return vg in yg?yg[vg]():Nt(CC)||RC()}function Eg(t,e={}){const n=e.head||PC();if(n)return n.ssr?n.push(t,e):kC(n,t,e)}function kC(t,e,n={}){const r=Et(!1),s=Et({});jA(()=>{s.value=r.value?{}:Fh(e)});const i=t.push(s.value,n);return vn(s,a=>{i.patch(a)}),wl()&&(la(()=>{i.dispose()}),Fv(()=>{r.value=!0}),Mv(()=>{r.value=!1})),i}const OC=[],xC=Zt({name:"nuxt:head",enforce:"pre",setup(t){const e=fC({plugins:OC});mC(()=>De().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await QE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof document<"u";function ZE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function NC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ZE(t.default)}const Oe=Object.assign;function Fu(t,e){const n={};for(const r in e){const s=e[r];n[r]=bn(s)?s.map(t):t(s)}return n}const wo=()=>{},bn=Array.isArray,e0=/#/g,DC=/&/g,LC=/\//g,VC=/=/g,MC=/\?/g,t0=/\+/g,FC=/%5B/g,UC=/%5D/g,n0=/%5E/g,jC=/%60/g,r0=/%7B/g,BC=/%7C/g,s0=/%7D/g,$C=/%20/g;function ud(t){return encodeURI(""+t).replace(BC,"|").replace(FC,"[").replace(UC,"]")}function HC(t){return ud(t).replace(r0,"{").replace(s0,"}").replace(n0,"^")}function Uh(t){return ud(t).replace(t0,"%2B").replace($C,"+").replace(e0,"%23").replace(DC,"%26").replace(jC,"`").replace(r0,"{").replace(s0,"}").replace(n0,"^")}function qC(t){return Uh(t).replace(VC,"%3D")}function WC(t){return ud(t).replace(e0,"%23").replace(MC,"%3F")}function zC(t){return t==null?"":WC(t).replace(LC,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const KC=/\/$/,GC=t=>t.replace(KC,"");function Uu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=JC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qo(o)}}function QC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&wi(e.matched[r],n.matched[s])&&i0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function i0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XC(t[n],e[n]))return!1;return!0}function XC(t,e){return bn(t)?bg(t,e):bn(e)?bg(e,t):t===e}function bg(t,e){return bn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function JC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wo;(function(t){t.pop="pop",t.push="push"})(Wo||(Wo={}));var bo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bo||(bo={}));function ZC(t){if(!t)if(Qs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),GC(t)}const eP=/^[^#]+#/;function tP(t,e){return t.replace(eP,"#")+e}function nP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Cl=()=>({left:window.scrollX,top:window.scrollY});function rP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=nP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tg(t,e){return(history.state?history.state.position-e:-1)+t}const jh=new Map;function sP(t,e){jh.set(t,e)}function iP(t){const e=jh.get(t);return jh.delete(t),e}let oP=()=>location.protocol+"//"+location.host;function o0(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),wg(l,"")}return wg(n,t)+r+s}function aP(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=o0(t,location),w=n.value,k=e.value;let x=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}x=k?p.position-k.position:0}else r(g);s.forEach(N=>{N(n.value,w,{delta:x,type:Wo.pop,direction:x?x>0?bo.forward:bo.back:bo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Cl()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Ig(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Cl():null}}function cP(t){const{history:e,location:n}=window,r={value:o0(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:oP()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Oe({},e.state,Ig(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:Cl()});i(h.current,h,!0);const d=Oe({},Ig(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function lP(t){t=ZC(t);const e=cP(t),n=aP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:tP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uP(t){return typeof t=="string"||t&&typeof t=="object"}function a0(t){return typeof t=="string"||typeof t=="symbol"}const c0=Symbol("");var Ag;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ag||(Ag={}));function bi(t,e){return Oe(new Error,{type:t,[c0]:!0},e)}function Kn(t,e){return t instanceof Error&&c0 in t&&(e==null||!!(t.type&e))}const Rg="[^/]+?",hP={sensitive:!1,strict:!1,start:!0,end:!0},fP=/[.+*?^${}()[\]/\\]/g;function dP(t,e){const n=Oe({},hP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(fP,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:k,optional:x,regexp:N}=p;i.push({name:w,repeatable:k,optional:x});const C=N||Rg;if(C!==Rg){g+=10;try{new RegExp(`(${C})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${w}" (${C}): `+R.message)}}let y=k?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(y=x&&u.length<2?`(?:/${y})`:"/"+y),x&&(y+="?"),s+=y,g+=20,x&&(g+=-8),k&&(g+=-20),C===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",w=i[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:w,repeatable:k,optional:x}=g,N=w in u?u[w]:"";if(bn(N)&&!k)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const C=bn(N)?N.join("/"):N;if(!C)if(x)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);h+=C}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function pP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function l0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=pP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Sg(r))return 1;if(Sg(s))return-1}return s.length-r.length}function Sg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mP={type:0,value:""},gP=/[a-zA-Z0-9_]/;function _P(t){if(!t)return[[]];if(t==="/")return[[mP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:gP.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function yP(t,e,n){const r=dP(_P(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vP(t,e){const n=[],r=new Map;e=Og({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const w=!g,k=Pg(d);k.aliasOf=g&&g.record;const x=Og(e,d),N=[k];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)N.push(Pg(Oe({},k,{components:g?g.record.components:k.components,path:D,aliasOf:g?g.record:k})))}let C,y;for(const R of N){const{path:D}=R;if(p&&D[0]!=="/"){const V=p.record.path,T=V[V.length-1]==="/"?"":"/";R.path=p.record.path+(D&&T+D)}if(C=yP(R,p,x),g?g.alias.push(C):(y=y||C,y!==C&&y.alias.push(C),w&&d.name&&!kg(C)&&o(d.name)),u0(C)&&l(C),k.children){const V=k.children;for(let T=0;T<V.length;T++)i(V[T],C,g&&g.children[T])}g=g||C}return y?()=>{o(y)}:wo}function o(d){if(a0(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=bP(d,n);n.splice(p,0,d),d.record.name&&!kg(d)&&r.set(d.record.name,d)}function u(d,p){let g,w={},k,x;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw bi(1,{location:d});x=g.record.name,w=Oe(Cg(p.params,g.keys.filter(y=>!y.optional).concat(g.parent?g.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&Cg(d.params,g.keys.map(y=>y.name))),k=g.stringify(w)}else if(d.path!=null)k=d.path,g=n.find(y=>y.re.test(k)),g&&(w=g.parse(k),x=g.record.name);else{if(g=p.name?r.get(p.name):n.find(y=>y.re.test(p.path)),!g)throw bi(1,{location:d,currentLocation:p});x=g.record.name,w=Oe({},p.params,d.params),k=g.stringify(w)}const N=[];let C=g;for(;C;)N.unshift(C.record),C=C.parent;return{name:x,path:k,params:w,matched:N,meta:wP(N)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Cg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Pg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:EP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function EP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function kg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Og(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function bP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;l0(t,e[i])<0?r=i:n=i+1}const s=TP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function TP(t){let e=t;for(;e=e.parent;)if(u0(e)&&l0(t,e)===0)return e}function u0({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function IP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(t0," "),o=i.indexOf("="),a=qo(o<0?i:i.slice(0,o)),l=o<0?null:qo(i.slice(o+1));if(a in e){let u=e[a];bn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function xg(t){let e="";for(let n in t){const r=t[n];if(n=qC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(r)?r.map(i=>i&&Uh(i)):[r&&Uh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function AP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=bn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const RP=Symbol(""),Ng=Symbol(""),hd=Symbol(""),fd=Symbol(""),Bh=Symbol("");function ro(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(bi(4,{from:n,to:e})):p instanceof Error?l(p):uP(p)?l(bi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function ju(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ZE(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Pr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=NC(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Pr(g,n,r,o,a,s)()}))}}return i}function Dg(t){const e=Nt(hd),n=Nt(fd),r=Ue(()=>{const l=Qe(t.to);return e.resolve(l)}),s=Ue(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(wi.bind(null,h));if(p>-1)return p;const g=Lg(l[u-2]);return u>1&&Lg(h)===g&&d[d.length-1].path!==g?d.findIndex(wi.bind(null,l[u-2])):p}),i=Ue(()=>s.value>-1&&OP(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&i0(n.params,r.value.params));function a(l={}){if(kP(l)){const u=e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(wo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function SP(t){return t.length===1?t[0]:t}const CP=In({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dg,setup(t,{slots:e}){const n=fr(Dg(t)),{options:r}=Nt(hd),s=Ue(()=>({[Vg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&SP(e.default(n));return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),PP=CP;function kP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!bn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Lg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vg=(t,e,n)=>t??e??n,xP=In({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Bh),s=Ue(()=>t.route||r.value),i=Nt(Ng,0),o=Ue(()=>{let u=Qe(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ue(()=>s.value.matched[o.value]);bs(Ng,Ue(()=>o.value+1)),bs(RP,a),bs(Bh,s);const l=Et();return vn(()=>[l.value,a.value,t.name],([u,h,d],[p,g,w])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!wi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Mg(n.default,{Component:p,route:u});const g=d.props[h],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=vt(p,Oe({},w,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Mg(n.default,{Component:x,route:u})||x}}});function Mg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const h0=xP;function NP(t){const e=vP(t.routes,t),n=t.parseQuery||IP,r=t.stringifyQuery||xg,s=t.history,i=ro(),o=ro(),a=ro(),l=Lo(mn);let u=mn;Qs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Fu.bind(null,j=>""+j),d=Fu.bind(null,zC),p=Fu.bind(null,qo);function g(j,ee){let X,re;return a0(j)?(X=e.getRecordMatcher(j),re=ee):re=j,e.addRoute(re,X)}function w(j){const ee=e.getRecordMatcher(j);ee&&e.removeRoute(ee)}function k(){return e.getRoutes().map(j=>j.record)}function x(j){return!!e.getRecordMatcher(j)}function N(j,ee){if(ee=Oe({},ee||l.value),typeof j=="string"){const O=Uu(n,j,ee.path),M=e.resolve({path:O.path},ee),$=s.createHref(O.fullPath);return Oe(O,M,{params:p(M.params),hash:qo(O.hash),redirectedFrom:void 0,href:$})}let X;if(j.path!=null)X=Oe({},j,{path:Uu(n,j.path,ee.path).path});else{const O=Oe({},j.params);for(const M in O)O[M]==null&&delete O[M];X=Oe({},j,{params:d(O)}),ee.params=d(ee.params)}const re=e.resolve(X,ee),Ie=j.hash||"";re.params=h(p(re.params));const Le=QC(r,Oe({},j,{hash:HC(Ie),path:re.path})),A=s.createHref(Le);return Oe({fullPath:Le,hash:Ie,query:r===xg?AP(j.query):j.query||{}},re,{redirectedFrom:void 0,href:A})}function C(j){return typeof j=="string"?Uu(n,j,l.value.path):Oe({},j)}function y(j,ee){if(u!==j)return bi(8,{from:ee,to:j})}function R(j){return T(j)}function D(j){return R(Oe(C(j),{replace:!0}))}function V(j){const ee=j.matched[j.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(j):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=C(re):{path:re},re.params={}),Oe({query:j.query,hash:j.hash,params:re.path!=null?{}:j.params},re)}}function T(j,ee){const X=u=N(j),re=l.value,Ie=j.state,Le=j.force,A=j.replace===!0,O=V(X);if(O)return T(Oe(C(O),{state:typeof O=="object"?Oe({},Ie,O.state):Ie,force:Le,replace:A}),ee||X);const M=X;M.redirectedFrom=ee;let $;return!Le&&YC(r,re,X)&&($=bi(16,{to:M,from:re}),tn(re,re,!0,!1)),($?Promise.resolve($):b(M,re)).catch(U=>Kn(U)?Kn(U,2)?U:dn(U):ne(U,M,re)).then(U=>{if(U){if(Kn(U,2))return T(Oe({replace:A},C(U.to),{state:typeof U.to=="object"?Oe({},Ie,U.to.state):Ie,force:Le}),ee||M)}else U=S(M,re,!0,A,Ie);return P(M,re,U),U})}function v(j,ee){const X=y(j,ee);return X?Promise.reject(X):Promise.resolve()}function _(j){const ee=gr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(j):j()}function b(j,ee){let X;const[re,Ie,Le]=DP(j,ee);X=ju(re.reverse(),"beforeRouteLeave",j,ee);for(const O of re)O.leaveGuards.forEach(M=>{X.push(Pr(M,j,ee))});const A=v.bind(null,j,ee);return X.push(A),Ht(X).then(()=>{X=[];for(const O of i.list())X.push(Pr(O,j,ee));return X.push(A),Ht(X)}).then(()=>{X=ju(Ie,"beforeRouteUpdate",j,ee);for(const O of Ie)O.updateGuards.forEach(M=>{X.push(Pr(M,j,ee))});return X.push(A),Ht(X)}).then(()=>{X=[];for(const O of Le)if(O.beforeEnter)if(bn(O.beforeEnter))for(const M of O.beforeEnter)X.push(Pr(M,j,ee));else X.push(Pr(O.beforeEnter,j,ee));return X.push(A),Ht(X)}).then(()=>(j.matched.forEach(O=>O.enterCallbacks={}),X=ju(Le,"beforeRouteEnter",j,ee,_),X.push(A),Ht(X))).then(()=>{X=[];for(const O of o.list())X.push(Pr(O,j,ee));return X.push(A),Ht(X)}).catch(O=>Kn(O,8)?O:Promise.reject(O))}function P(j,ee,X){a.list().forEach(re=>_(()=>re(j,ee,X)))}function S(j,ee,X,re,Ie){const Le=y(j,ee);if(Le)return Le;const A=ee===mn,O=Qs?history.state:{};X&&(re||A?s.replace(j.fullPath,Oe({scroll:A&&O&&O.scroll},Ie)):s.push(j.fullPath,Ie)),l.value=j,tn(j,ee,X,A),dn()}let I;function ge(){I||(I=s.listen((j,ee,X)=>{if(!An.listening)return;const re=N(j),Ie=V(re);if(Ie){T(Oe(Ie,{replace:!0,force:!0}),re).catch(wo);return}u=re;const Le=l.value;Qs&&sP(Tg(Le.fullPath,X.delta),Cl()),b(re,Le).catch(A=>Kn(A,12)?A:Kn(A,2)?(T(Oe(C(A.to),{force:!0}),re).then(O=>{Kn(O,20)&&!X.delta&&X.type===Wo.pop&&s.go(-1,!1)}).catch(wo),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(A,re,Le))).then(A=>{A=A||S(re,Le,!1),A&&(X.delta&&!Kn(A,8)?s.go(-X.delta,!1):X.type===Wo.pop&&Kn(A,20)&&s.go(-1,!1)),P(re,Le,A)}).catch(wo)}))}let ve=ro(),Z=ro(),se;function ne(j,ee,X){dn(j);const re=Z.list();return re.length?re.forEach(Ie=>Ie(j,ee,X)):console.error(j),Promise.reject(j)}function ze(){return se&&l.value!==mn?Promise.resolve():new Promise((j,ee)=>{ve.add([j,ee])})}function dn(j){return se||(se=!j,ge(),ve.list().forEach(([ee,X])=>j?X(j):ee()),ve.reset()),j}function tn(j,ee,X,re){const{scrollBehavior:Ie}=t;if(!Qs||!Ie)return Promise.resolve();const Le=!X&&iP(Tg(j.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return Bn().then(()=>Ie(j,ee,Le)).then(A=>A&&rP(A)).catch(A=>ne(A,j,ee))}const Ke=j=>s.go(j);let Ge;const gr=new Set,An={currentRoute:l,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:N,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:ze,install(j){const ee=this;j.component("RouterLink",PP),j.component("RouterView",h0),j.config.globalProperties.$router=ee,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),Qs&&!Ge&&l.value===mn&&(Ge=!0,R(s.location).catch(Ie=>{}));const X={};for(const Ie in mn)Object.defineProperty(X,Ie,{get:()=>l.value[Ie],enumerable:!0});j.provide(hd,ee),j.provide(fd,Zn(X)),j.provide(Bh,l);const re=j.unmount;gr.add(j),j.unmount=function(){gr.delete(j),gr.size<1&&(u=mn,I&&I(),I=null,l.value=mn,Ge=!1,se=!1),re()}}};function Ht(j){return j.reduce((ee,X)=>ee.then(()=>_(X)),Promise.resolve())}return An}function DP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>wi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>wi(u,l))||s.push(l))}return[n,r,s]}function LP(t){return Nt(fd)}const VP=/(:\w+)\([^)]+\)/g,MP=/(:\w+)[?+*]/g,FP=/:\w+/g,UP=(t,e)=>e.path.replace(VP,"$1").replace(MP,"$1").replace(FP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),$h=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&UP(t.route,n));return typeof r=="function"?r(t.route):r},jP=(t,e)=>({default:()=>t?vt(dA,t===!0?{}:t,e):e});function dd(t){return Array.isArray(t)?t:[t]}const BP={middleware:"auth"},$P={middleware:"auth"},HP={middleware:"auth"};const Bu=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>ke(()=>import("./BOLGrYsa.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>ke(()=>import("./BldISxXl.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>ke(()=>import("./RTdziIDy.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:BP,component:()=>ke(()=>import("./Chg344K6.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"Admin",path:"/Admin",meta:$P,component:()=>ke(()=>import("./BoF_SjAk.js"),__vite__mapDeps([3,4]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>ke(()=>import("./R5LeCo5Z.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>ke(()=>import("./Pd51fJjg.js"),[],import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:HP,component:()=>ke(()=>import("./Crih8kL1.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>ke(()=>import("./N4okwOmx.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>ke(()=>import("./DQHveDhc.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>ke(()=>import("./CKbXHkWt.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>ke(()=>import("./C3tY7Xib.js"),[],import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>ke(()=>import("./Dxt930eP.js"),[],import.meta.url)},{name:"Bio",path:"/Bio",component:()=>ke(()=>import("./DWykd272.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>ke(()=>import("./D22sZXmn.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ke(()=>import("./BFTb3l4A.js"),__vite__mapDeps([16,8,9,17]),import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>ke(()=>import("./Pqs1HzZs.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ke(()=>import("./B0kgfkmk.js"),__vite__mapDeps([20,8,9]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ke(()=>import("./CGSf-S8n.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>ke(()=>import("./5zDMfJb6.js"),__vite__mapDeps([21,1,22]),import.meta.url)},{name:"Login",path:"/Login",component:()=>ke(()=>import("./B4llPJSa.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ke(()=>import("./BgM9yEAh.js"),__vite__mapDeps([23,8,9,24]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ke(()=>import("./ZmJ5Rj35.js"),__vite__mapDeps([25,8,9,26]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ke(()=>import("./BG-YR2ny.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>ke(()=>import("./CGD1C8Zp.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ke(()=>import("./DvC5r0An.js"),__vite__mapDeps([29,8,9]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ke(()=>import("./C-cjCrHl.js"),__vite__mapDeps([30,8,9]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>ke(()=>import("./BIsj8I4b.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>ke(()=>import("./BnR3UhJz.js"),__vite__mapDeps([31,8,9]),import.meta.url)}],f0=(t,e)=>({default:()=>{var n;return t?vt(g1,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),qP=/(:\w+)\([^)]+\)/g,WP=/(:\w+)[?+*]/g,zP=/:\w+/g;function Fg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(qP,"$1").replace(WP,"$1").replace(zP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function KP(t,e){return t===e||e===mn?!1:Fg(t)!==Fg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const GP={scrollBehavior(t,e,n){var u;const r=De(),s=((u=wt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&KP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Ug(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Ph),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Ug(t.hash),behavior:s}),h(i)})})}};function Ug(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const QP={hashMode:!1,scrollBehaviorType:"auto"},on={...QP,...GP},YP=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=De(),s=wt(),i=([e,n]=ui(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Rl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>ti(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},XP=async t=>{let e,n;const r=([e,n]=ui(()=>ld({path:t.path})),e=await e,n(),e);if(r.redirect)return pr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},JP=[YP,XP],To={auth:()=>ke(()=>import("./LlEsqStg.js"),[],import.meta.url)};function ZP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Jm(h,"")}const a=Jm(r,t),l=!n||_R(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const ek=Zt({name:"nuxt:router",enforce:"pre",async setup(t){var x;let e,n,r=Ds().app.baseURL;const s=((x=on.history)==null?void 0:x.call(on,r))??lP(r),i=on.routes?([e,n]=ui(()=>on.routes(Bu)),e=await e,n(),e??Bu):Bu;let o;const a=NP({...on,scrollBehavior:(N,C,y)=>{if(C===mn){o=y;return}if(on.scrollBehavior){if(a.options.scrollBehavior=on.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return on.scrollBehavior(N,mn,o||y)}},history:s,routes:i});on.routes&&on.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Lo(a.currentRoute.value);a.afterEach((N,C)=>{l.value=C}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=ZP(r,window.location,t.payload.path),h=Lo(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((N,C)=>{var y,R,D,V;((R=(y=N.matched[0])==null?void 0:y.components)==null?void 0:R.default)===((V=(D=C.matched[0])==null?void 0:D.components)==null?void 0:V.default)&&d()});const p={};for(const N in h.value)Object.defineProperty(p,N,{get:()=>h.value[N],enumerable:!0});t._route=Zn(p),t._middleware=t._middleware||{global:[],named:{}};const g=Al();a.afterEach(async(N,C,y)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(HE),y&&await t.callHook("page:loading:end")});try{[e,n]=ui(()=>a.isReady()),await e,n()}catch(N){[e,n]=ui(()=>t.runWithContext(()=>ti(N))),await e,n()}const w=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const k=t.payload.state._layout;return a.beforeEach(async(N,C)=>{var y;await t.callHook("page:loading:start"),N.meta=fr(N.meta),t.isHydrating&&k&&!zr(N.meta.layout)&&(N.meta.layout=k),t._processingMiddleware=!0;{const R=new Set([...JP,...t._middleware.global]);for(const D of N.matched){const V=D.meta.middleware;if(V)for(const T of dd(V))R.add(T)}{const D=await t.runWithContext(()=>ld({path:N.path}));if(D.appMiddleware)for(const V in D.appMiddleware)D.appMiddleware[V]?R.add(V):R.delete(V)}for(const D of R){const V=typeof D=="string"?t._middleware.named[D]||await((y=To[D])==null?void 0:y.call(To).then(v=>v.default||v)):D;if(!V)throw new Error(`Unknown route middleware: '${D}'.`);const T=await t.runWithContext(()=>V(N,C));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const v=T||xh({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ti(v)),!1}if(T!==!0&&(T||T===!1))return T}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(N,C)=>{N.matched.length===0&&await t.runWithContext(()=>ti(xh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${N.fullPath}`,data:{path:N.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in w&&(w.name=void 0),await a.replace({...w,force:!0}),a.options.scrollBehavior=on.scrollBehavior}catch(N){await t.runWithContext(()=>ti(N))}}),{provide:{router:a}}}}),Hh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),tk=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Pl=t=>{const e=De();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Hh(()=>t())}):Hh(()=>t())},nk=Zt({name:"nuxt:payload",setup(t){wt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await _g(e.path);r&&Object.assign(t.static.data,r.data)}),Pl(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await _g(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Sl,1e3)})}}),rk=Zt(()=>{const t=wt();Pl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),sk=Zt(t=>{let e;async function n(){const r=await Sl();e&&clearTimeout(e),e=setTimeout(n,rg);try{const s=await $fetch(od("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Pl(()=>{e=setTimeout(n,rg)})});function ik(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ho(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:De().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const ok=Zt({name:"nuxt:chunk-reload",setup(t){const e=wt(),n=Ds(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Il(n.app.baseURL,i.fullPath);ik({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),ak=Zt({name:"nuxt:global-components"}),Vr={default:hA(()=>ke(()=>import("./CqgfI_MR.js"),__vite__mapDeps([32,6,1,33]),import.meta.url).then(t=>t.default||t))},ck=Zt({name:"nuxt:prefetch",setup(t){const e=wt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Vr[r]=="function"&&await Vr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(pr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=dd(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof To[o]=="function"&&To[o]();s&&typeof Vr[s]=="function"&&Vr[s]()})}});var jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},p0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new uk;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hk=function(t){const e=d0(t);return p0.encodeByteArray(e,!0)},$c=function(t){return hk(t).replace(/\./g,"")},m0=function(t){try{return p0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dk=()=>fk().__FIREBASE_DEFAULTS__,pk=()=>{if(typeof process>"u"||typeof jg>"u")return;const t=jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&m0(t[1]);return e&&JSON.parse(e)},kl=()=>{try{return dk()||pk()||mk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},g0=t=>{var e,n;return(n=(e=kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_0=t=>{const e=g0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y0=()=>{var t;return(t=kl())===null||t===void 0?void 0:t.config},v0=t=>{var e;return(e=kl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function E0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _k(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function yk(){var t;const e=(t=kl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function vk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ek(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bk(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tk(){return!yk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ik(){try{return typeof indexedDB=="object"}catch{return!1}}function Ak(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rk,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $n(s,a,r)}}function Sk(t,e){return t.replace(Ck,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ck=/\{\$([^}]+)}/g;function Pk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bg(i)&&Bg(o)){if(!Hc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kk(t,e){const n=new Ok(t,e);return n.subscribe.bind(n)}class Ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$u),s.error===void 0&&(s.error=$u),s.complete===void 0&&(s.complete=$u);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $u(){}/**
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
 */class Vk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Mk={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Fk=Ee.INFO,Uk={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},jk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Uk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=Fk,this._logHandler=jk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Bk=(t,e)=>e.some(n=>t instanceof n);let $g,Hg;function $k(){return $g||($g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hk(){return Hg||(Hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const w0=new WeakMap,qh=new WeakMap,b0=new WeakMap,Hu=new WeakMap,md=new WeakMap;function qk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&w0.set(n,t)}).catch(()=>{}),md.set(e,t),e}function Wk(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Wh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||b0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zk(t){Wh=t(Wh)}function Kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qu(this),e,...n);return b0.set(r,e.sort?e.sort():[e]),jr(r)}:Hk().includes(t)?function(...e){return t.apply(qu(this),e),jr(w0.get(this))}:function(...e){return jr(t.apply(qu(this),e))}}function Gk(t){return typeof t=="function"?Kk(t):(t instanceof IDBTransaction&&Wk(t),Bk(t,$k())?new Proxy(t,Wh):t)}function jr(t){if(t instanceof IDBRequest)return qk(t);if(Hu.has(t))return Hu.get(t);const e=Gk(t);return e!==t&&(Hu.set(t,e),md.set(e,t)),e}const qu=t=>md.get(t);function Qk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(jr(o.result),l.oldVersion,l.newVersion,jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Yk=["get","getKey","getAll","getAllKeys","count"],Xk=["put","add","delete","clear"],Wu=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wu.get(e))return Wu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Wu.set(e,i),i}zk(t=>({...t,get:(e,n,r)=>qg(e,n)||t.get(e,n,r),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
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
 */class Jk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zh="@firebase/app",Wg="0.11.0";/**
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
 */const or=new pd("@firebase/app"),eO="@firebase/app-compat",tO="@firebase/analytics-compat",nO="@firebase/analytics",rO="@firebase/app-check-compat",sO="@firebase/app-check",iO="@firebase/auth",oO="@firebase/auth-compat",aO="@firebase/database",cO="@firebase/data-connect",lO="@firebase/database-compat",uO="@firebase/functions",hO="@firebase/functions-compat",fO="@firebase/installations",dO="@firebase/installations-compat",pO="@firebase/messaging",mO="@firebase/messaging-compat",gO="@firebase/performance",_O="@firebase/performance-compat",yO="@firebase/remote-config",vO="@firebase/remote-config-compat",EO="@firebase/storage",wO="@firebase/storage-compat",bO="@firebase/firestore",TO="@firebase/vertexai",IO="@firebase/firestore-compat",AO="firebase",RO="11.3.0";/**
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
 */const Kh="[DEFAULT]",SO={[zh]:"fire-core",[eO]:"fire-core-compat",[nO]:"fire-analytics",[tO]:"fire-analytics-compat",[sO]:"fire-app-check",[rO]:"fire-app-check-compat",[iO]:"fire-auth",[oO]:"fire-auth-compat",[aO]:"fire-rtdb",[cO]:"fire-data-connect",[lO]:"fire-rtdb-compat",[uO]:"fire-fn",[hO]:"fire-fn-compat",[fO]:"fire-iid",[dO]:"fire-iid-compat",[pO]:"fire-fcm",[mO]:"fire-fcm-compat",[gO]:"fire-perf",[_O]:"fire-perf-compat",[yO]:"fire-rc",[vO]:"fire-rc-compat",[EO]:"fire-gcs",[wO]:"fire-gcs-compat",[bO]:"fire-fst",[IO]:"fire-fst-compat",[TO]:"fire-vertex","fire-js":"fire-js",[AO]:"fire-js-all"};/**
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
 */const qc=new Map,CO=new Map,Gh=new Map;function zg(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(Gh.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of qc.values())zg(n,t);for(const n of CO.values())zg(n,t);return!0}function Ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const PO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new fa("app","Firebase",PO);/**
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
 */const Ls=RO;function T0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Br.create("bad-app-name",{appName:String(s)});if(n||(n=y0()),!n)throw Br.create("no-options");const i=qc.get(s);if(i){if(Hc(n,i.options)&&Hc(r,i.config))return i;throw Br.create("duplicate-app",{appName:s})}const o=new Vk(s);for(const l of Gh.values())o.addComponent(l);const a=new kO(n,r,o);return qc.set(s,a),a}function gd(t=Kh){const e=qc.get(t);if(!e&&t===Kh&&y0())return T0();if(!e)throw Br.create("no-app",{appName:t});return e}function Dn(t,e,n){var r;let s=(r=SO[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Rs(new Kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OO="firebase-heartbeat-database",xO=1,zo="firebase-heartbeat-store";let zu=null;function I0(){return zu||(zu=Qk(OO,xO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),zu}async function NO(t){try{const n=(await I0()).transaction(zo),r=await n.objectStore(zo).get(A0(t));return await n.done,r}catch(e){if(e instanceof $n)or.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Kg(t,e){try{const r=(await I0()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,A0(t)),await r.done}catch(n){if(n instanceof $n)or.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function A0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DO=1024,LO=30;class VO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>LO){const o=UO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gg(),{heartbeatsToSend:r,unsentEntries:s}=MO(this._heartbeatsCache.heartbeats),i=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function Gg(){return new Date().toISOString().substring(0,10)}function MO(t,e=DO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ik()?Ak().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qg(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}function UO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jO(t){Rs(new Kr("platform-logger",e=>new Jk(e),"PRIVATE")),Rs(new Kr("heartbeat",e=>new VO(e),"PRIVATE")),Dn(zh,Wg,t),Dn(zh,Wg,"esm2017"),Dn("fire-js","")}jO("");var BO="firebase",$O="11.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(BO,$O,"app");function _d(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function R0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HO=R0,S0=new fa("auth","Firebase",R0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new pd("@firebase/auth");function qO(t,...e){Wc.logLevel<=Ee.WARN&&Wc.warn(`Auth (${Ls}): ${t}`,...e)}function fc(t,...e){Wc.logLevel<=Ee.ERROR&&Wc.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw yd(t,...e)}function Ln(t,...e){return yd(t,...e)}function C0(t,e,n){const r=Object.assign(Object.assign({},HO()),{[e]:n});return new fa("auth","Firebase",r).create(e,{appName:t.name})}function $r(t){return C0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S0.create(t,...e)}function de(t,e,...n){if(!t)throw yd(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fc(e),new Error(e)}function ar(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WO(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=_k()||wk()}get(){return zO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const QO=new pa(3e4,6e4);function Vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function is(t,e,n,r,s={}){return k0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=da(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return vk()||(u.referrerPolicy="no-referrer"),P0.fetch()(O0(t,t.config.apiHost,n,a),u)})}async function k0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GO),e);try{const s=new XO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qa(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw C0(t,h,u);Tn(t,h)}}catch(s){if(s instanceof $n)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function xl(t,e,n,r,s={}){const i=await is(t,e,n,r,s);return"mfaPendingCredential"in i&&Tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function O0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vd(t.config,s):`${t.config.apiScheme}://${s}`}function YO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ln(this.auth,"network-request-failed")),QO.get())})}}function Qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ln(t,e,r);return s.customData._tokenResponse=n,s}function Xg(t){return t!==void 0&&t.enterprise!==void 0}class JO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZO(t,e){return is(t,"GET","/v2/recaptchaConfig",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e){return is(t,"POST","/v1/accounts:delete",e)}async function x0(t,e){return is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tx(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=Ed(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Io(Ku(s.auth_time)),issuedAtTime:Io(Ku(s.iat)),expirationTime:Io(Ku(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ku(t){return Number(t)*1e3}function Ed(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fc("JWT malformed, contained fewer than 3 sections"),null;try{const s=m0(n);return s?JSON.parse(s):(fc("Failed to decode base64 JWT payload"),null)}catch(s){return fc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jg(t){const e=Ed(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&nx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ko(t,x0(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?N0(i.providerUserInfo):[],a=ix(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function sx(t){const e=Ze(t);await zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ix(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function N0(t){return t.map(e=>{var{providerId:n}=e,r=_d(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t,e){const n=await k0(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=O0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ax(t,e){return is(t,"POST","/v2/accounts:revokeToken",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ox(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tx(this,e)}reload(){return sx(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject($r(this.auth));const e=await this.getIdToken();return await Ko(this,ex(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:R,isAnonymous:D,providerData:V,stsTokenManager:T}=n;de(y&&T,e,"internal-error");const v=hi.fromJSON(this.name,T);de(typeof y=="string",e,"internal-error"),br(d,e.name),br(p,e.name),de(typeof R=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),br(g,e.name),br(w,e.name),br(k,e.name),br(x,e.name),br(N,e.name),br(C,e.name);const _=new tr({uid:y,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:w,phoneNumber:g,tenantId:k,stsTokenManager:v,createdAt:N,lastLoginAt:C});return V&&Array.isArray(V)&&(_.providerData=V.map(b=>Object.assign({},b))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?N0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new hi;a.updateFromIdToken(r);const l=new tr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;function nr(t){ar(t instanceof Function,"Expected a class definition");let e=Zg.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zg.set(t,e),e)}/**
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
 */class D0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D0.type="NONE";const e_=D0;/**
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
 */function dc(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=dc(this.userKey,s.apiKey,i),this.fullPersistenceKey=dc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fi(nr(e_),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nr(e_);const o=dc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=tr._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new fi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new fi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(j0(e))return"Blackberry";if(B0(e))return"Webos";if(V0(e))return"Safari";if((e.includes("chrome/")||M0(e))&&!e.includes("edge/"))return"Chrome";if(U0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L0(t=Dt()){return/firefox\//i.test(t)}function V0(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M0(t=Dt()){return/crios\//i.test(t)}function F0(t=Dt()){return/iemobile/i.test(t)}function U0(t=Dt()){return/android/i.test(t)}function j0(t=Dt()){return/blackberry/i.test(t)}function B0(t=Dt()){return/webos/i.test(t)}function wd(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cx(t=Dt()){var e;return wd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lx(){return bk()&&document.documentMode===10}function $0(t=Dt()){return wd(t)||U0(t)||B0(t)||j0(t)||/windows phone/i.test(t)||F0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e=[]){let n;switch(t){case"Browser":n=t_(Dt());break;case"Worker":n=`${t_(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class ux{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */const fx=6;class dx{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new n_(this),this.idTokenSubscription=new n_(this),this.beforeStateQueue=new ux(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await x0(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject($r(this));const n=e?Ze(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject($r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject($r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hx(this),n=new dx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ax(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vi(t){return Ze(t)}class n_{constructor(e){this.auth=e,this.observer=null,this.addObserver=kk(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mx(t){Nl=t}function q0(t){return Nl.loadJS(t)}function gx(){return Nl.recaptchaEnterpriseScript}function _x(){return Nl.gapiScript}function yx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vx{constructor(){this.enterprise=new Ex}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ex{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wx="recaptcha-enterprise",W0="NO_RECAPTCHA";class bx{constructor(e){this.type=wx,this.auth=Vi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ZO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new JO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Xg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(W0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vx().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Xg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gx();l.length!==0&&(l+=a),q0(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function r_(t,e,n,r=!1,s=!1){const i=new bx(t);let o;if(s)o=W0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function s_(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await r_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await r_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t,e){const n=Ol(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hc(i,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function Ix(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ax(t,e,n){const r=Vi(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=z0(e),{host:o,port:a}=Rx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Sx()}function z0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rx(t){const e=z0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:i_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:i_(o)}}}function i_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function Cx(t,e){return is(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,e){return xl(t,"POST","/v1/accounts:signInWithPassword",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e){return xl(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}async function Ox(t,e){return xl(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends bd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return s_(e,n,"signInWithPassword",Px);case"emailLink":return kx(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return s_(e,r,"signUpPassword",Cx);case"emailLink":return Ox(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return xl(t,"POST","/v1/accounts:signInWithIdp",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="http://localhost";class Ss extends bd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_d(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:xx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dx(t){const e=ao(co(t)).link,n=e?ao(co(e)).deep_link_id:null,r=ao(co(t)).deep_link_id;return(r?ao(co(r)).link:null)||r||n||e||t}class Td{constructor(e){var n,r,s,i,o,a;const l=ao(co(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Nx((s=l.mode)!==null&&s!==void 0?s:null);de(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Dx(e);try{return new Td(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Td.parseLink(n);return de(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends K0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends ma{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ma{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends ma{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tr._fromIdTokenResponse(e,r,s),o=o_(r);return new Ti({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=o_(r);return new Ti({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function o_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends $n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Kc(e,n,r,s)}}function G0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(t,i,e,r):i})}async function Lx(t,e,n=!1){const r=await Ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
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
 */async function Vx(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject($r(r));const s="reauthenticate";try{const i=await Ko(t,G0(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=Ed(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),Ti._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(t,e,n=!1){if(cn(t.app))return Promise.reject($r(t));const r="signIn",s=await G0(t,r,e),i=await Ti._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mx(t,e){return Q0(Vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t){const e=Vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Ux(t,e,n){return cn(t.app)?Promise.reject($r(t)):Mx(Ze(t),Mi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fx(t),r})}function jx(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function Bx(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function $x(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function Hx(t){return Ze(t).signOut()}const Gc="__sak";/**
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
 */class Y0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=1e3,Wx=10;class X0 extends Y0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X0.type="LOCAL";const zx=X0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0 extends Y0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J0.type="SESSION";const Z0=J0;/**
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
 */function Kx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await Kx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Gx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Id("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Qx(t){Vn().location.href=t}/**
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
 */function ew(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function Yx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jx(){return ew()?self:null}/**
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
 */const tw="firebaseLocalStorageDb",Zx=1,Qc="firebaseLocalStorage",nw="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ll(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function eN(){const t=indexedDB.deleteDatabase(tw);return new ga(t).toPromise()}function Xh(){const t=indexedDB.open(tw,Zx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:nw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await eN(),e(await Xh()))})})}async function a_(t,e,n){const r=Ll(t,!0).put({[nw]:e,value:n});return new ga(r).toPromise()}async function tN(t,e){const n=Ll(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function c_(t,e){const n=Ll(t,!0).delete(e);return new ga(n).toPromise()}const nN=800,rN=3;class rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ew()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dl._getInstance(Jx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Yx(),!this.activeServiceWorker)return;this.sender=new Gx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xh();return await a_(e,Gc,"1"),await c_(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>c_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ll(s,!1).getAll();return new ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rw.type="LOCAL";const sN=rw;new pa(3e4,6e4);/**
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
 */function iN(t,e){return e?nr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ad extends bd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oN(t){return Q0(t.auth,new Ad(t),t.bypassAuthState)}function aN(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Vx(n,new Ad(t),t.bypassAuthState)}async function cN(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),Lx(n,new Ad(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oN;case"linkViaPopup":case"linkViaRedirect":return cN;case"reauthViaPopup":case"reauthViaRedirect":return aN;default:Tn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new pa(2e3,1e4);class ni extends sw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=Id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lN.get())};e()}}ni.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="pendingRedirect",pc=new Map;class hN extends sw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pc.get(this.auth._key());if(!e){try{const r=await fN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pc.set(this.auth._key(),e)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fN(t,e){const n=mN(e),r=pN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dN(t,e){pc.set(t._key(),e)}function pN(t){return nr(t._redirectPersistence)}function mN(t){return dc(uN,t.config.apiKey,t.name)}async function gN(t,e,n=!1){if(cn(t.app))return Promise.reject($r(t));const r=Vi(t),s=iN(r,e),o=await new hN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=10*60*1e3;class yN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_N&&this.cachedEventUids.clear(),this.cachedEventUids.has(l_(e))}saveEventToCache(e){this.cachedEventUids.add(l_(e)),this.lastProcessedEventTime=Date.now()}}function l_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e={}){return is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bN=/^https?/;async function TN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EN(t);for(const n of e)try{if(IN(n))return}catch{}Tn(t,"unauthorized-domain")}function IN(t){const e=Qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bN.test(n))return!1;if(wN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const AN=new pa(3e4,6e4);function u_(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RN(t){return new Promise((e,n)=>{var r,s,i;function o(){u_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{u_(),n(Ln(t,"network-request-failed"))},timeout:AN.get()})}if(!((s=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Vn().gapi)===null||i===void 0)&&i.load)o();else{const a=yx("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},q0(`${_x()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw mc=null,e})}let mc=null;function SN(t){return mc=mc||RN(t),mc}/**
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
 */const CN=new pa(5e3,15e3),PN="__/auth/iframe",kN="emulator/auth/iframe",ON={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NN(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vd(e,kN):`https://${t.config.authDomain}/${PN}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=xN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${da(r).slice(1)}`}async function DN(t){const e=await SN(t),n=Vn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:NN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ON,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Vn().setTimeout(()=>{i(o)},CN.get());function l(){Vn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const LN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VN=500,MN=600,FN="_blank",UN="http://localhost";class h_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jN(t,e,n,r=VN,s=MN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=M0(u)?FN:n),L0(u)&&(e=e||UN,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(cx(u)&&a!=="_self")return BN(e||"",a),new h_(null);const d=window.open(e||"",a,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new h_(d)}function BN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $N="__/auth/handler",HN="emulator/auth/handler",qN=encodeURIComponent("fac");async function f_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof K0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ma){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${qN}=${encodeURIComponent(l)}`:"";return`${WN(t)}?${da(a).slice(1)}${u}`}function WN({config:t}){return t.emulator?vd(t,HN):`https://${t.authDomain}/${$N}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="webStorageSupport";class zN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z0,this._completeRedirectFn=gN,this._overrideRedirectResult=dN}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await f_(e,n,r,Qh(),s);return jN(e,o,Id())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await f_(e,n,r,Qh(),s);return Qx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DN(e),r=new yN(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gu,{type:Gu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gu];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $0()||V0()||wd()}}const KN=zN;var d_="@firebase/auth",p_="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YN(t){Rs(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H0(t)},u=new px(r,s,i,l);return Ix(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rs(new Kr("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(r=>new GN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(d_,p_,QN(t)),Dn(d_,p_,"esm2017")}/**
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
 */const XN=5*60,JN=v0("authIdTokenMaxAge")||XN;let m_=null;const ZN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JN)return;const s=n==null?void 0:n.token;m_!==s&&(m_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function e2(t=gd()){const e=Ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tx(t,{popupRedirectResolver:KN,persistence:[sN,zx,Z0]}),r=v0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ZN(i.toString());Bx(n,o,()=>o(n.currentUser)),jx(n,a=>o(a))}}const s=g0("auth");return s&&Ax(n,`http://${s}`),n}function t2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",t2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YN("Browser");function gn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=gn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:gn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=gn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=gn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(gn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(gn(i),gn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(gn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const n2={path:"/",watch:!0,decode:t=>Ho(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Ya=window.cookieStore;function r2(t,e){var l;const n={...n2,...e};n.filter??(n.filter=u=>u===t);const r=g_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=gn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?o2(o,s,n.watch&&n.watch!=="shallow"):Et(o);{let u=null;try{!Ya&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||fS(a.value,r[t])||(i2(t,a.value,n),r[t]=gn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=w=>{var x;const k=w.refresh?(x=g_(n))==null?void 0:x[t]:n.decode(w.value);p=!0,a.value=k,r[t]=gn(k),Bn(()=>{p=!1})};let p=!1;const g=!!oa();if(g&&Ac(()=>{p=!0,h(),u==null||u.close()}),Ya){const w=k=>{const x=k.changed.find(C=>C.name===t),N=k.deleted.find(C=>C.name===t);x&&d({value:x.value}),N&&d({value:null})};Ya.addEventListener("change",w),g&&Ac(()=>Ya.removeEventListener("change",w))}else u&&(u.onmessage=({data:w})=>d(w));n.watch?vn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function g_(t={}){return oS(document.cookie,t)}function s2(t,e,n={}){return e==null?ig(t,e,{...n,maxAge:-1}):ig(t,e,n)}function i2(t,e,n={}){document.cookie=s2(t,e,n)}const __=2147483647;function o2(t,e,n){let r,s,i=0;const o=n?Et(t):{value:t};return oa()&&Ac(()=>{s==null||s(),clearTimeout(r)}),WI((a,l)=>{n&&(s=vn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<__?h:__;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function ow(t,e=wt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>ow(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const a2=(...t)=>t.find(e=>e!==void 0);function c2(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o){if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;if(typeof i=="string")return y_(i,t.trailingSlash);const a="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:y_(a,t.trailingSlash)}}function s(i){const o=wt(),a=Ds(),l=Ue(()=>!!i.target&&i.target!=="_self"),u=Ue(()=>{const x=i.to||i.href||"";return typeof x=="string"&&pr(x,{acceptRelative:!0})}),h=Fo("RouterLink"),d=h&&typeof h!="string"?h.useLink:void 0,p=Ue(()=>{if(i.external)return!0;const x=i.to||i.href||"";return typeof x=="object"?!1:x===""||u.value}),g=Ue(()=>{const x=i.to||i.href||"";return p.value?x:r(x,o.resolve)}),w=p.value||d==null?void 0:d({...i,to:g}),k=Ue(()=>{var x;if(!g.value||u.value||n(g.value))return g.value;if(p.value){const N=typeof g.value=="object"&&"path"in g.value?Dh(g.value):g.value,C=typeof N=="object"?o.resolve(N).href:N;return r(C,o.resolve)}return typeof g.value=="object"?((x=o.resolve(g.value))==null?void 0:x.href)??null:r(Il(a.app.baseURL,g.value),o.resolve)});return{to:g,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:k,isActive:(w==null?void 0:w.isActive)??Ue(()=>g.value===o.currentRoute.value.path),isExactActive:(w==null?void 0:w.isExactActive)??Ue(()=>g.value===o.currentRoute.value.path),route:(w==null?void 0:w.route)??Ue(()=>o.resolve(g.value)),async navigate(){await ES(k.value,{replace:i.replace,external:p.value||l.value})}}}return In({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=wt(),{to:l,href:u,navigate:h,isExternal:d,hasTarget:p,isAbsoluteUrl:g}=s(i),w=Et(!1),k=Et(null),x=y=>{var R;k.value=i.custom?(R=y==null?void 0:y.$el)==null?void 0:R.nextElementSibling:y==null?void 0:y.$el};function N(y){var R,D;return!w.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===y:((R=i.prefetchOn)==null?void 0:R[y])??((D=t.prefetchOn)==null?void 0:D[y]))&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!f2()}async function C(y=De()){if(w.value)return;w.value=!0;const R=typeof l.value=="string"?l.value:d.value?Dh(l.value):a.resolve(l.value).fullPath,D=d.value?new URL(R,window.location.href).href:R;await Promise.all([y.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&ow(l.value,a).catch(()=>{})])}if(N("visibility")){const y=De();let R,D=null;yl(()=>{const V=u2();Pl(()=>{R=Hh(()=>{var T;(T=k==null?void 0:k.value)!=null&&T.tagName&&(D=V.observe(k.value,async()=>{D==null||D(),D=null,await C(y)}))})})}),la(()=>{R&&tk(R),D==null||D(),D=null})}return()=>{var D;if(!d.value&&!p.value&&!n(l.value)){const V={ref:x,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(N("interaction")&&(V.onPointerenter=C.bind(null,void 0),V.onFocus=C.bind(null,void 0)),w.value&&(V.class=i.prefetchedClass||t.prefetchedClass),V.rel=i.rel||void 0),vt(Fo("RouterLink"),V,o.default)}const y=i.target||null,R=a2(i.noRel?"":i.rel,t.externalRelAttribute,g.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:h,prefetch:C,get route(){if(!u.value)return;const V=new URL(u.value,window.location.href);return{path:V.pathname,fullPath:V.pathname,get query(){return AE(V.search)},hash:V.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:R,target:y,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:vt("a",{ref:k,href:u.value||null,rel:R,target:y},(D=o.default)==null?void 0:D.call(o))}}})}const l2=c2(YR);function y_(t,e){const n=e==="append"?Vc:Tl;return pr(t)&&!t.startsWith("http")?t:n(t,!0)}function u2(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e==null||e.unobserve(i),n.size===0&&(e==null||e.disconnect(),e=null)});return t._observer={observe:r}}const h2=/2g/;function f2(){const t=navigator.connection;return!!(t&&(t.saveData||h2.test(t.effectiveType)))}var v_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,aw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function _(){}_.prototype=v.prototype,T.D=v.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(b,P,S){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return v.prototype[P].apply(b,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,_){_||(_=0);var b=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)b[P]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(P=0;16>P;++P)b[P]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=T.g[0],_=T.g[1],P=T.g[2];var S=T.g[3],I=v+(S^_&(P^S))+b[0]+3614090360&4294967295;v=_+(I<<7&4294967295|I>>>25),I=S+(P^v&(_^P))+b[1]+3905402710&4294967295,S=v+(I<<12&4294967295|I>>>20),I=P+(_^S&(v^_))+b[2]+606105819&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(v^P&(S^v))+b[3]+3250441966&4294967295,_=P+(I<<22&4294967295|I>>>10),I=v+(S^_&(P^S))+b[4]+4118548399&4294967295,v=_+(I<<7&4294967295|I>>>25),I=S+(P^v&(_^P))+b[5]+1200080426&4294967295,S=v+(I<<12&4294967295|I>>>20),I=P+(_^S&(v^_))+b[6]+2821735955&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(v^P&(S^v))+b[7]+4249261313&4294967295,_=P+(I<<22&4294967295|I>>>10),I=v+(S^_&(P^S))+b[8]+1770035416&4294967295,v=_+(I<<7&4294967295|I>>>25),I=S+(P^v&(_^P))+b[9]+2336552879&4294967295,S=v+(I<<12&4294967295|I>>>20),I=P+(_^S&(v^_))+b[10]+4294925233&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(v^P&(S^v))+b[11]+2304563134&4294967295,_=P+(I<<22&4294967295|I>>>10),I=v+(S^_&(P^S))+b[12]+1804603682&4294967295,v=_+(I<<7&4294967295|I>>>25),I=S+(P^v&(_^P))+b[13]+4254626195&4294967295,S=v+(I<<12&4294967295|I>>>20),I=P+(_^S&(v^_))+b[14]+2792965006&4294967295,P=S+(I<<17&4294967295|I>>>15),I=_+(v^P&(S^v))+b[15]+1236535329&4294967295,_=P+(I<<22&4294967295|I>>>10),I=v+(P^S&(_^P))+b[1]+4129170786&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(v^_))+b[6]+3225465664&4294967295,S=v+(I<<9&4294967295|I>>>23),I=P+(v^_&(S^v))+b[11]+643717713&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(P^S))+b[0]+3921069994&4294967295,_=P+(I<<20&4294967295|I>>>12),I=v+(P^S&(_^P))+b[5]+3593408605&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(v^_))+b[10]+38016083&4294967295,S=v+(I<<9&4294967295|I>>>23),I=P+(v^_&(S^v))+b[15]+3634488961&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(P^S))+b[4]+3889429448&4294967295,_=P+(I<<20&4294967295|I>>>12),I=v+(P^S&(_^P))+b[9]+568446438&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(v^_))+b[14]+3275163606&4294967295,S=v+(I<<9&4294967295|I>>>23),I=P+(v^_&(S^v))+b[3]+4107603335&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(P^S))+b[8]+1163531501&4294967295,_=P+(I<<20&4294967295|I>>>12),I=v+(P^S&(_^P))+b[13]+2850285829&4294967295,v=_+(I<<5&4294967295|I>>>27),I=S+(_^P&(v^_))+b[2]+4243563512&4294967295,S=v+(I<<9&4294967295|I>>>23),I=P+(v^_&(S^v))+b[7]+1735328473&4294967295,P=S+(I<<14&4294967295|I>>>18),I=_+(S^v&(P^S))+b[12]+2368359562&4294967295,_=P+(I<<20&4294967295|I>>>12),I=v+(_^P^S)+b[5]+4294588738&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^P)+b[8]+2272392833&4294967295,S=v+(I<<11&4294967295|I>>>21),I=P+(S^v^_)+b[11]+1839030562&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^v)+b[14]+4259657740&4294967295,_=P+(I<<23&4294967295|I>>>9),I=v+(_^P^S)+b[1]+2763975236&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^P)+b[4]+1272893353&4294967295,S=v+(I<<11&4294967295|I>>>21),I=P+(S^v^_)+b[7]+4139469664&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^v)+b[10]+3200236656&4294967295,_=P+(I<<23&4294967295|I>>>9),I=v+(_^P^S)+b[13]+681279174&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^P)+b[0]+3936430074&4294967295,S=v+(I<<11&4294967295|I>>>21),I=P+(S^v^_)+b[3]+3572445317&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^v)+b[6]+76029189&4294967295,_=P+(I<<23&4294967295|I>>>9),I=v+(_^P^S)+b[9]+3654602809&4294967295,v=_+(I<<4&4294967295|I>>>28),I=S+(v^_^P)+b[12]+3873151461&4294967295,S=v+(I<<11&4294967295|I>>>21),I=P+(S^v^_)+b[15]+530742520&4294967295,P=S+(I<<16&4294967295|I>>>16),I=_+(P^S^v)+b[2]+3299628645&4294967295,_=P+(I<<23&4294967295|I>>>9),I=v+(P^(_|~S))+b[0]+4096336452&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~P))+b[7]+1126891415&4294967295,S=v+(I<<10&4294967295|I>>>22),I=P+(v^(S|~_))+b[14]+2878612391&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~v))+b[5]+4237533241&4294967295,_=P+(I<<21&4294967295|I>>>11),I=v+(P^(_|~S))+b[12]+1700485571&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~P))+b[3]+2399980690&4294967295,S=v+(I<<10&4294967295|I>>>22),I=P+(v^(S|~_))+b[10]+4293915773&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~v))+b[1]+2240044497&4294967295,_=P+(I<<21&4294967295|I>>>11),I=v+(P^(_|~S))+b[8]+1873313359&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~P))+b[15]+4264355552&4294967295,S=v+(I<<10&4294967295|I>>>22),I=P+(v^(S|~_))+b[6]+2734768916&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~v))+b[13]+1309151649&4294967295,_=P+(I<<21&4294967295|I>>>11),I=v+(P^(_|~S))+b[4]+4149444226&4294967295,v=_+(I<<6&4294967295|I>>>26),I=S+(_^(v|~P))+b[11]+3174756917&4294967295,S=v+(I<<10&4294967295|I>>>22),I=P+(v^(S|~_))+b[2]+718787259&4294967295,P=S+(I<<15&4294967295|I>>>17),I=_+(S^(P|~v))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var _=v-this.blockSize,b=this.B,P=this.h,S=0;S<v;){if(P==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<v;)if(b[P++]=T.charCodeAt(S++),P==this.blockSize){s(this,b),P=0;break}}else for(;S<v;)if(b[P++]=T[S++],P==this.blockSize){s(this,b),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var _=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.u(T),T=Array(16),v=_=0;4>v;++v)for(var b=0;32>b;b+=8)T[_++]=this.g[v]>>>b&255;return T};function i(T,v){var _=a;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=v(T)}function o(T,v){this.h=v;for(var _=[],b=!0,P=T.length-1;0<=P;P--){var S=T[P]|0;b&&S==v||(_[P]=S,b=!1)}this.g=_}var a={};function l(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return x(u(-T));for(var v=[],_=1,b=0;T>=_;b++)v[b]=T/_|0,_*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return x(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),b=d,P=0;P<T.length;P+=8){var S=Math.min(8,T.length-P),I=parseInt(T.substring(P,P+S),v);8>S?(S=u(Math.pow(v,S)),b=b.j(S).add(u(I))):(b=b.j(_),b=b.add(u(I)))}return b}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var T=0,v=1,_=0;_<this.g.length;_++){var b=this.i(_);T+=(0<=b?b:4294967296+b)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w(this))return"0";if(k(this))return"-"+x(this).toString(T);for(var v=u(Math.pow(T,6)),_=this,b="";;){var P=R(_,v).g;_=N(_,P.j(v));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=P,w(_))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function w(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=N(this,T),k(T)?-1:w(T)?0:1};function x(T){for(var v=T.g.length,_=[],b=0;b<v;b++)_[b]=~T.g[b];return new o(_,~T.h).add(p)}t.abs=function(){return k(this)?x(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0,P=0;P<=v;P++){var S=b+(this.i(P)&65535)+(T.i(P)&65535),I=(S>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);b=I>>>16,S&=65535,I&=65535,_[P]=I<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function N(T,v){return T.add(x(v))}t.j=function(T){if(w(this)||w(T))return d;if(k(this))return k(T)?x(this).j(x(T)):x(x(this).j(T));if(k(T))return x(this.j(x(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var v=this.g.length+T.g.length,_=[],b=0;b<2*v;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var P=0;P<T.g.length;P++){var S=this.i(b)>>>16,I=this.i(b)&65535,ge=T.i(P)>>>16,ve=T.i(P)&65535;_[2*b+2*P]+=I*ve,C(_,2*b+2*P),_[2*b+2*P+1]+=S*ve,C(_,2*b+2*P+1),_[2*b+2*P+1]+=I*ge,C(_,2*b+2*P+1),_[2*b+2*P+2]+=S*ge,C(_,2*b+2*P+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function C(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function y(T,v){this.g=T,this.h=v}function R(T,v){if(w(v))throw Error("division by zero");if(w(T))return new y(d,d);if(k(T))return v=R(x(T),v),new y(x(v.g),x(v.h));if(k(v))return v=R(T,x(v)),new y(x(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var _=p,b=v;0>=b.l(T);)_=D(_),b=D(b);var P=V(_,1),S=V(b,1);for(b=V(b,2),_=V(_,2);!w(b);){var I=S.add(b);0>=I.l(T)&&(P=P.add(_),S=I),b=V(b,1),_=V(_,1)}return v=N(T,P.j(v)),new y(P,v)}for(P=d;0<=T.l(v);){for(_=Math.max(1,Math.floor(T.m()/v.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=u(_),I=S.j(v);k(I)||0<I.l(T);)_-=b,S=u(_),I=S.j(v);w(S)&&(S=p),P=P.add(S),T=N(T,I)}return new y(P,T)}t.A=function(T){return R(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)&T.i(b);return new o(_,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)|T.i(b);return new o(_,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],b=0;b<v;b++)_[b]=this.i(b)^T.i(b);return new o(_,this.h^T.h)};function D(T){for(var v=T.g.length+1,_=[],b=0;b<v;b++)_[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(_,T.h)}function V(T,v){var _=v>>5;v%=32;for(var b=T.g.length-_,P=[],S=0;S<b;S++)P[S]=0<v?T.i(S+_)>>>v|T.i(S+_+1)<<32-v:T.i(S+_);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,aw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Hr=o}).apply(typeof v_<"u"?v_:typeof self<"u"?self:typeof window<"u"?window:{});var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cw,lo,lw,gc,Jh,uw,hw,fw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xa=="object"&&Xa];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var E=0;E<c.length-1;E++){var L=c[E];if(!(L in m))break e;m=m[L]}c=c[c.length-1],E=m[c],f=f(E),f!=E&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,E=!1,L={next:function(){if(!E&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function w(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(E,L,F){for(var Q=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)Q[Me-2]=arguments[Me];return f.prototype[L].apply(E,Q)}}function k(c){const f=c.length;if(0<f){const m=Array(f);for(let E=0;E<f;E++)m[E]=c[E];return m}return[]}function x(c,f){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const L=c.length||0,F=E.length||0;c.length=L+F;for(let Q=0;Q<F;Q++)c[L+Q]=E[Q]}else c.push(E)}}class N{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function C(c){return/^[\s\xa0]*$/.test(c)}function y(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function V(c,f,m){for(const E in c)f.call(m,c[E],E,c)}function T(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function v(c){const f={};for(const m in c)f[m]=c[m];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,f){let m,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(m in E)c[m]=E[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(E,m)&&(c[m]=E[m])}}function P(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function I(){var c=ze;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class ge{constructor(){this.h=this.g=null}add(f,m){const E=ve.get();E.set(f,m),this.h?this.h.next=E:this.g=E,this.h=E}}var ve=new N(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,ze=new ge,dn=()=>{const c=a.Promise.resolve(void 0);se=()=>{c.then(tn)}};var tn=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(m){S(m)}var f=ve;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ne=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var gr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function An(c,f){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{R(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ht[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&An.aa.h.call(this)}}w(An,Ge);var Ht={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(c,f,m,E,L){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!E,this.ha=L,this.key=++ee,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ie(c){this.src=c,this.g={},this.h=0}Ie.prototype.add=function(c,f,m,E,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Q=A(c,f,E,L);return-1<Q?(f=c[Q],m||(f.fa=!1)):(f=new X(f,this.src,F,!!E,L),f.fa=m,c.push(f)),f};function Le(c,f){var m=f.type;if(m in c.g){var E=c.g[m],L=Array.prototype.indexOf.call(E,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(E,L,1),F&&(re(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function A(c,f,m,E){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==E)return L}return-1}var O="closure_lm_"+(1e6*Math.random()|0),M={};function $(c,f,m,E,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)$(c,f[F],m,E,L);return null}return m=oe(m),c&&c[j]?c.K(f,m,u(E)?!!E.capture:!!E,L):U(c,f,m,!1,E,L)}function U(c,f,m,E,L,F){if(!f)throw Error("Invalid event type");var Q=u(L)?!!L.capture:!!L,Me=ue(c);if(Me||(c[O]=Me=new Ie(c)),m=Me.add(f,m,E,Q,F),m.proxy)return m;if(E=q(),m.proxy=E,E.src=c,E.listener=m,c.addEventListener)gr||(L=Q),L===void 0&&(L=!1),c.addEventListener(f.toString(),E,L);else if(c.attachEvent)c.attachEvent(K(f.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return f.call(c.src,c.listener,m)}const f=W;return c}function Y(c,f,m,E,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(c,f[F],m,E,L);else E=u(E)?!!E.capture:!!E,m=oe(m),c&&c[j]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=A(F,m,E,L),-1<m&&(re(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=ue(c))&&(f=c.g[f.toString()],c=-1,f&&(c=A(f,m,E,L)),(m=-1<c?f[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[j])Le(f.i,c);else{var m=c.type,E=c.proxy;f.removeEventListener?f.removeEventListener(m,E,c.capture):f.detachEvent?f.detachEvent(K(m),E):f.addListener&&f.removeListener&&f.removeListener(E),(m=ue(f))?(Le(m,c),m.h==0&&(m.src=null,f[O]=null)):re(c)}}}function K(c){return c in M?M[c]:M[c]="on"+c}function W(c,f){if(c.da)c=!0;else{f=new An(f,this);var m=c.listener,E=c.ha||c.src;c.fa&&G(c),c=m.call(E,f)}return c}function ue(c){return c=c[O],c instanceof Ie?c:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[J]||(c[J]=function(f){return c.handleEvent(f)}),c[J])}function ie(){Ke.call(this),this.i=new Ie(this),this.M=this,this.F=null}w(ie,Ke),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(c,f,m,E){Y(this,c,f,m,E)};function fe(c,f){var m,E=c.F;if(E)for(m=[];E;E=E.F)m.push(E);if(c=c.M,E=f.type||f,typeof f=="string")f=new Ge(f,c);else if(f instanceof Ge)f.target=f.target||c;else{var L=f;f=new Ge(E,c),b(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var Q=f.g=m[F];L=Pe(Q,E,!0,f)&&L}if(Q=f.g=c,L=Pe(Q,E,!0,f)&&L,L=Pe(Q,E,!1,f)&&L,m)for(F=0;F<m.length;F++)Q=f.g=m[F],L=Pe(Q,E,!1,f)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],E=0;E<m.length;E++)re(m[E]);delete c.g[f],c.h--}}this.F=null},ie.prototype.K=function(c,f,m,E){return this.i.add(String(c),f,!1,m,E)},ie.prototype.L=function(c,f,m,E){return this.i.add(String(c),f,!0,m,E)};function Pe(c,f,m,E){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var Q=f[F];if(Q&&!Q.da&&Q.capture==m){var Me=Q.listener,pt=Q.ha||Q.src;Q.fa&&Le(c.i,Q),L=Me.call(pt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Se(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Tt(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,Tt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class ht extends Ke{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(c){Ke.call(this),this.h=c,this.g={}}w(dt,Ke);var It=[];function _r(c){V(c.g,function(f,m){this.g.hasOwnProperty(m)&&G(f)},c),c.g={}}dt.prototype.N=function(){dt.aa.N.call(this),_r(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Us=a.JSON.stringify,Vt=a.JSON.parse,nn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function js(){}js.prototype.h=null;function Ep(c){return c.h||(c.h=c.i())}function wp(){}var Hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function au(){Ge.call(this,"d")}w(au,Ge);function cu(){Ge.call(this,"c")}w(cu,Ge);var cs={},bp=null;function Ta(){return bp=bp||new ie}cs.La="serverreachability";function Tp(c){Ge.call(this,cs.La,c)}w(Tp,Ge);function qi(c){const f=Ta();fe(f,new Tp(f))}cs.STAT_EVENT="statevent";function Ip(c,f){Ge.call(this,cs.STAT_EVENT,c),this.stat=f}w(Ip,Ge);function Mt(c){const f=Ta();fe(f,new Ip(f,c))}cs.Ma="timingevent";function Ap(c,f){Ge.call(this,cs.Ma,c),this.size=f}w(Ap,Ge);function Wi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function zi(){this.g=!0}zi.prototype.xa=function(){this.g=!1};function UT(c,f,m,E,L,F){c.info(function(){if(c.g)if(F)for(var Q="",Me=F.split("&"),pt=0;pt<Me.length;pt++){var Ce=Me[pt].split("=");if(1<Ce.length){var At=Ce[0];Ce=Ce[1];var Rt=At.split("_");Q=2<=Rt.length&&Rt[1]=="type"?Q+(At+"="+Ce+"&"):Q+(At+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+m+`
`+Q})}function jT(c,f,m,E,L,F,Q){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+Q})}function Bs(c,f,m,E){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+$T(c,m)+(E?" "+E:"")})}function BT(c,f){c.info(function(){return"TIMEOUT: "+f})}zi.prototype.info=function(){};function $T(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var E=m[c];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Us(m)}catch{return f}}var Ia={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lu;function Aa(){}w(Aa,js),Aa.prototype.g=function(){return new XMLHttpRequest},Aa.prototype.i=function(){return{}},lu=new Aa;function yr(c,f,m,E){this.j=c,this.i=f,this.l=m,this.R=E||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sp}function Sp(){this.i=null,this.g="",this.h=!1}var Cp={},uu={};function hu(c,f,m){c.L=1,c.v=Pa(Hn(f)),c.m=m,c.P=!0,Pp(c,null)}function Pp(c,f){c.F=Date.now(),Ra(c),c.A=Hn(c.v);var m=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),Hp(m.i,"t",E),c.C=0,m=c.j.J,c.h=new Sp,c.g=am(c.j,m?f:null,!c.m),0<c.O&&(c.M=new ht(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,E=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(It[0]=L.toString()),L=It);for(var F=0;F<L.length;F++){var Q=$(m,L[F],E||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),qi(),UT(c.i,c.u,c.A,c.l,c.R,c.m)}yr.prototype.ca=function(c){c=c.target;const f=this.M;f&&qn(c)==3?f.j():this.Y(c)},yr.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=qn(this.g);var f=this.g.Ba();const qs=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Yp(this.g)))){this.J||Rt!=4||f==7||(f==8||0>=qs?qi(3):qi(2)),fu(this);var m=this.g.Z();this.X=m;t:if(kp(this)){var E=Yp(this.g);c="";var L=E.length,F=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ls(this),Ki(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(E[f],{stream:!(F&&f==L-1)});E.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,jT(this.i,this.u,this.A,this.l,this.R,Rt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,pt=this.g;if((Me=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(Me)){var Ce=Me;break t}}Ce=null}if(m=Ce)Bs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,du(this,m);else{this.o=!1,this.s=3,Mt(12),ls(this),Ki(this);break e}}if(this.P){m=!0;let pn;for(;!this.J&&this.C<Q.length;)if(pn=HT(this,Q),pn==uu){Rt==4&&(this.s=4,Mt(14),m=!1),Bs(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Cp){this.s=4,Mt(15),Bs(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else Bs(this.i,this.l,pn,null),du(this,pn);if(kp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||Q.length!=0||this.h.h||(this.s=1,Mt(16),m=!1),this.o=this.o&&m,!m)Bs(this.i,this.l,Q,"[Invalid Chunked Response]"),ls(this),Ki(this);else if(0<Q.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),vu(At),At.M=!0,Mt(11))}}else Bs(this.i,this.l,Q,null),du(this,Q);Rt==4&&ls(this),this.o&&!this.J&&(Rt==4?rm(this.j,this):(this.o=!1,Ra(this)))}else oI(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),ls(this),Ki(this)}}}catch{}finally{}};function kp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function HT(c,f){var m=c.C,E=f.indexOf(`
`,m);return E==-1?uu:(m=Number(f.substring(m,E)),isNaN(m)?Cp:(E+=1,E+m>f.length?uu:(f=f.slice(E,E+m),c.C=E+m,f)))}yr.prototype.cancel=function(){this.J=!0,ls(this)};function Ra(c){c.S=Date.now()+c.I,Op(c,c.I)}function Op(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Wi(p(c.ba,c),f)}function fu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}yr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(BT(this.i,this.A),this.L!=2&&(qi(),Mt(17)),ls(this),this.s=2,Ki(this)):Op(this,this.S-c)};function Ki(c){c.j.G==0||c.J||rm(c.j,c)}function ls(c){fu(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,_r(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function du(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||pu(m.h,c))){if(!c.K&&pu(m.h,c)&&m.G==3){try{var E=m.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)La(m),Na(m);else break e;yu(m),Mt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Wi(p(m.Za,m),6e3));if(1>=Dp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else hs(m,11)}else if((c.K||m.g==c)&&La(m),!C(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Ce=L[f];if(m.T=Ce[0],Ce=Ce[1],m.G==2)if(Ce[0]=="c"){m.K=Ce[1],m.ia=Ce[2];const At=Ce[3];At!=null&&(m.la=At,m.j.info("VER="+m.la));const Rt=Ce[4];Rt!=null&&(m.Aa=Rt,m.j.info("SVER="+m.Aa));const qs=Ce[5];qs!=null&&typeof qs=="number"&&0<qs&&(E=1.5*qs,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const pn=c.g;if(pn){const Ma=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ma){var F=E.h;F.g||Ma.indexOf("spdy")==-1&&Ma.indexOf("quic")==-1&&Ma.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(mu(F,F.h),F.h=null))}if(E.D){const Eu=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Eu&&(E.ya=Eu,Be(E.I,E.D,Eu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var Q=c;if(E.qa=om(E,E.J?E.ia:null,E.W),Q.K){Lp(E.h,Q);var Me=Q,pt=E.L;pt&&(Me.I=pt),Me.B&&(fu(Me),Ra(Me)),E.g=Q}else tm(E);0<m.i.length&&Da(m)}else Ce[0]!="stop"&&Ce[0]!="close"||hs(m,7);else m.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?hs(m,7):_u(m):Ce[0]!="noop"&&m.l&&m.l.ta(Ce),m.v=0)}}qi(4)}catch{}}var qT=class{constructor(c,f){this.g=c,this.map=f}};function xp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Np(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Dp(c){return c.h?1:c.g?c.g.size:0}function pu(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function mu(c,f){c.g?c.g.add(f):c.h=f}function Lp(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}xp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Vp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return k(c.i)}function WT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,E=0;E<m;E++)f.push(c[E]);return f}f=[],m=0;for(E in c)f[m++]=c[E];return f}function zT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const E in c)f[m++]=E;return f}}}function Mp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=zT(c),E=WT(c),L=E.length,F=0;F<L;F++)f.call(void 0,E[F],m&&m[F],c)}var Fp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KT(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var E=c[m].indexOf("="),L=null;if(0<=E){var F=c[m].substring(0,E);L=c[m].substring(E+1)}else F=c[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function us(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof us){this.h=c.h,Sa(this,c.j),this.o=c.o,this.g=c.g,Ca(this,c.s),this.l=c.l;var f=c.i,m=new Yi;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Up(this,m),this.m=c.m}else c&&(f=String(c).match(Fp))?(this.h=!1,Sa(this,f[1]||"",!0),this.o=Gi(f[2]||""),this.g=Gi(f[3]||"",!0),Ca(this,f[4]),this.l=Gi(f[5]||"",!0),Up(this,f[6]||"",!0),this.m=Gi(f[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}us.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Qi(f,jp,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Qi(f,jp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Qi(m,m.charAt(0)=="/"?YT:QT,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Qi(m,JT)),c.join("")};function Hn(c){return new us(c)}function Sa(c,f,m){c.j=m?Gi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Ca(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Up(c,f,m){f instanceof Yi?(c.i=f,ZT(c.i,c.h)):(m||(f=Qi(f,XT)),c.i=new Yi(f,c.h))}function Be(c,f,m){c.i.set(f,m)}function Pa(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Gi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Qi(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,GT),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function GT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var jp=/[#\/\?@]/g,QT=/[#\?:]/g,YT=/[#\?]/g,XT=/[#\?@]/g,JT=/#/g;function Yi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function vr(c){c.g||(c.g=new Map,c.h=0,c.i&&KT(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Yi.prototype,t.add=function(c,f){vr(this),this.i=null,c=$s(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Bp(c,f){vr(c),f=$s(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function $p(c,f){return vr(c),f=$s(c,f),c.g.has(f)}t.forEach=function(c,f){vr(this),this.g.forEach(function(m,E){m.forEach(function(L){c.call(f,L,E,this)},this)},this)},t.na=function(){vr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let E=0;E<f.length;E++){const L=c[E];for(let F=0;F<L.length;F++)m.push(f[E])}return m},t.V=function(c){vr(this);let f=[];if(typeof c=="string")$p(this,c)&&(f=f.concat(this.g.get($s(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return vr(this),this.i=null,c=$s(this,c),$p(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Hp(c,f,m){Bp(c,f),0<m.length&&(c.i=null,c.g.set($s(c,f),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var E=f[m];const F=encodeURIComponent(String(E)),Q=this.V(E);for(E=0;E<Q.length;E++){var L=F;Q[E]!==""&&(L+="="+encodeURIComponent(String(Q[E]))),c.push(L)}}return this.i=c.join("&")};function $s(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function ZT(c,f){f&&!c.j&&(vr(c),c.i=null,c.g.forEach(function(m,E){var L=E.toLowerCase();E!=L&&(Bp(this,E),Hp(this,L,m))},c)),c.j=f}function eI(c,f){const m=new zi;if(a.Image){const E=new Image;E.onload=g(Er,m,"TestLoadImage: loaded",!0,f,E),E.onerror=g(Er,m,"TestLoadImage: error",!1,f,E),E.onabort=g(Er,m,"TestLoadImage: abort",!1,f,E),E.ontimeout=g(Er,m,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else f(!1)}function tI(c,f){const m=new zi,E=new AbortController,L=setTimeout(()=>{E.abort(),Er(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:E.signal}).then(F=>{clearTimeout(L),F.ok?Er(m,"TestPingServer: ok",!0,f):Er(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Er(m,"TestPingServer: error",!1,f)})}function Er(c,f,m,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(m)}catch{}}function nI(){this.g=new nn}function rI(c,f,m){const E=m||"";try{Mp(c,function(L,F){let Q=L;u(L)&&(Q=Us(L)),f.push(E+F+"="+encodeURIComponent(Q))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function ka(c){this.l=c.Ub||null,this.j=c.eb||!1}w(ka,js),ka.prototype.g=function(){return new Oa(this.l,this.j)},ka.prototype.i=function(c){return function(){return c}}({});function Oa(c,f){ie.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Oa,ie),t=Oa.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Ji(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function qp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Xi(this):Ji(this),this.readyState==3&&qp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Xi(this))},t.Qa=function(c){this.g&&(this.response=c,Xi(this))},t.ga=function(){this.g&&Xi(this)};function Xi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ji(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Ji(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wp(c){let f="";return V(c,function(m,E){f+=E,f+=":",f+=m,f+=`\r
`}),f}function gu(c,f,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=Wp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Be(c,f,m))}function Xe(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Xe,ie);var sI=/^https?$/i,iI=["POST","PUT"];t=Xe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lu.g(),this.v=this.o?Ep(this.o):Ep(lu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){zp(this,F);return}if(c=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)m.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())m.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(iI,f,void 0))||E||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of m)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){zp(this,F)}};function zp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Kp(c),xa(c)}function Kp(c){c.A||(c.A=!0,fe(c,"complete"),fe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,fe(this,"complete"),fe(this,"abort"),xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xa(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gp(this):this.bb())},t.bb=function(){Gp(this)};function Gp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||qn(c)!=4||c.Z()!=2)){if(c.u&&qn(c)==4)Se(c.Ea,0,c);else if(fe(c,"readystatechange"),qn(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var E;if(E=Q===0){var L=String(c.D).match(Fp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),E=!sI.test(L?L.toLowerCase():"")}m=E}if(m)fe(c,"complete"),fe(c,"success");else{c.m=6;try{var F=2<qn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Kp(c)}}finally{xa(c)}}}}function xa(c,f){if(c.g){Qp(c);const m=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||fe(c,"ready");try{m.onreadystatechange=E}catch{}}}function Qp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function qn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Vt(f)}};function Yp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function oI(c){const f={};c=(c.g&&2<=qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(C(c[E]))continue;var m=P(c[E]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}T(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Xp(c){this.Aa=0,this.i=[],this.j=new zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zi("baseRetryDelayMs",5e3,c),this.cb=Zi("retryDelaySeedMs",1e4,c),this.Wa=Zi("forwardChannelMaxRetries",2,c),this.wa=Zi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new xp(c&&c.concurrentRequestLimit),this.Da=new nI,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xp.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,E){Mt(0),this.W=c,this.H=f||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=om(this,null,this.W),Da(this)};function _u(c){if(Jp(c),c.G==3){var f=c.U++,m=Hn(c.I);if(Be(m,"SID",c.K),Be(m,"RID",f),Be(m,"TYPE","terminate"),eo(c,m),f=new yr(c,c.j,f),f.L=2,f.v=Pa(Hn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=am(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ra(f)}im(c)}function Na(c){c.g&&(vu(c),c.g.cancel(),c.g=null)}function Jp(c){Na(c),c.u&&(a.clearTimeout(c.u),c.u=null),La(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Da(c){if(!Np(c.h)&&!c.s){c.s=!0;var f=c.Ga;se||dn(),ne||(se(),ne=!0),ze.add(f,c),c.B=0}}function aI(c,f){return Dp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Wi(p(c.Ga,c,f),sm(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new yr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=v(F),b(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=em(this,L,f),m=Hn(this.I),Be(m,"RID",c),Be(m,"CVER",22),this.D&&Be(m,"X-HTTP-Session-Id",this.D),eo(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Wp(F)))+"&"+f:this.m&&gu(m,this.m,F)),mu(this.h,L),this.Ua&&Be(m,"TYPE","init"),this.P?(Be(m,"$req",f),Be(m,"SID","null"),L.T=!0,hu(L,m,null)):hu(L,m,f),this.G=2}}else this.G==3&&(c?Zp(this,c):this.i.length==0||Np(this.h)||Zp(this))};function Zp(c,f){var m;f?m=f.l:m=c.U++;const E=Hn(c.I);Be(E,"SID",c.K),Be(E,"RID",m),Be(E,"AID",c.T),eo(c,E),c.m&&c.o&&gu(E,c.m,c.o),m=new yr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=em(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),mu(c.h,m),hu(m,E,f)}function eo(c,f){c.H&&V(c.H,function(m,E){Be(f,E,m)}),c.l&&Mp({},function(m,E){Be(f,E,m)})}function em(c,f,m){m=Math.min(c.i.length,m);var E=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Q=["count="+m];F==-1?0<m?(F=L[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Me=!0;for(let pt=0;pt<m;pt++){let Ce=L[pt].g;const At=L[pt].map;if(Ce-=F,0>Ce)F=Math.max(0,L[pt].g-100),Me=!1;else try{rI(At,Q,"req"+Ce+"_")}catch{E&&E(At)}}if(Me){E=Q.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,E}function tm(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;se||dn(),ne||(se(),ne=!0),ze.add(f,c),c.v=0}}function yu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Wi(p(c.Fa,c),sm(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,nm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Wi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),Na(this),nm(this))};function vu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function nm(c){c.g=new yr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Hn(c.qa);Be(f,"RID","rpc"),Be(f,"SID",c.K),Be(f,"AID",c.T),Be(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(f,"TO",c.ja),Be(f,"TYPE","xmlhttp"),eo(c,f),c.m&&c.o&&gu(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Pa(Hn(f)),m.m=null,m.P=!0,Pp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Na(this),yu(this),Mt(19))};function La(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function rm(c,f){var m=null;if(c.g==f){La(c),vu(c),c.g=null;var E=2}else if(pu(c.h,f))m=f.D,Lp(c.h,f),E=1;else return;if(c.G!=0){if(f.o)if(E==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;E=Ta(),fe(E,new Ap(E,m)),Da(c)}else tm(c);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&aI(c,f)||E==2&&yu(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),L){case 1:hs(c,5);break;case 4:hs(c,10);break;case 3:hs(c,6);break;default:hs(c,2)}}}function sm(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function hs(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),E=c.Xa;const L=!E;E=new us(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Sa(E,"https"),Pa(E),L?eI(E.toString(),m):tI(E.toString(),m)}else Mt(2);c.G=0,c.l&&c.l.sa(f),im(c),Jp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function im(c){if(c.G=0,c.ka=[],c.l){const f=Vp(c.h);(f.length!=0||c.i.length!=0)&&(x(c.ka,f),x(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function om(c,f,m){var E=m instanceof us?Hn(m):new us(m);if(E.g!="")f&&(E.g=f+"."+E.g),Ca(E,E.s);else{var L=a.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new us(null);E&&Sa(F,E),f&&(F.g=f),L&&Ca(F,L),m&&(F.l=m),E=F}return m=c.D,f=c.ya,m&&f&&Be(E,m,f),Be(E,"VER",c.la),eo(c,E),E}function am(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Xe(new ka({eb:m})):new Xe(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cm(){}t=cm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(c,f){return new Qt(c,f)};function Qt(c,f){ie.call(this),this.g=new Xp(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!C(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!C(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Hs(this)}w(Qt,ie),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){_u(this.g)},Qt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=Us(c),c=m);f.i.push(new qT(f.Ya++,c)),f.G==3&&Da(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,_u(this.g),delete this.g,Qt.aa.N.call(this)};function lm(c){au.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}w(lm,au);function um(){cu.call(this),this.status=1}w(um,cu);function Hs(c){this.g=c}w(Hs,cm),Hs.prototype.ua=function(){fe(this.g,"a")},Hs.prototype.ta=function(c){fe(this.g,new lm(c))},Hs.prototype.sa=function(c){fe(this.g,new um)},Hs.prototype.ra=function(){fe(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,fw=function(){return new Va},hw=function(){return Ta()},uw=cs,Jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ia.NO_ERROR=0,Ia.TIMEOUT=8,Ia.HTTP_ERROR=6,gc=Ia,Rp.COMPLETE="complete",lw=Rp,wp.EventType=Hi,Hi.OPEN="a",Hi.CLOSE="b",Hi.ERROR="c",Hi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,lo=wp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,cw=Xe}).apply(typeof Xa<"u"?Xa:typeof self<"u"?self:typeof window<"u"?window:{});const E_="@firebase/firestore",w_="4.7.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi="11.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new pd("@firebase/firestore");function Ys(){return Cs.logLevel}function te(t,...e){if(Cs.logLevel<=Ee.DEBUG){const n=e.map(Rd);Cs.debug(`Firestore (${Fi}): ${t}`,...n)}}function cr(t,...e){if(Cs.logLevel<=Ee.ERROR){const n=e.map(Rd);Cs.error(`Firestore (${Fi}): ${t}`,...n)}}function Ii(t,...e){if(Cs.logLevel<=Ee.WARN){const n=e.map(Rd);Cs.warn(`Firestore (${Fi}): ${t}`,...n)}}function Rd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Ne(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class p2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class m2{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new dw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Ct(e)}}class g2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new g2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y2{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,cn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new b_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new b_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Zh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=v2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ef(t,e){const n=Zh().encode(t),r=Zh().encode(e);for(let s=0;s<Math.min(n.length,r.length);s++){const i=we(n[s],r[s]);if(i!==0)return i}return we(n.length,r.length)}function Ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=-62135596800,I_=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*I_);return new lt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<T_)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/I_}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-T_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const A_="__name__";class Pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=Pn.isNumericId(e),s=Pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):ef(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class qe extends Pn{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const E2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Pn{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return E2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===A_}static keyField(){return new yt([A_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(qe.fromString(e))}static fromName(e){return new he(qe.fromString(e).popFirst(5))}static empty(){return new he(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new qe(e.slice()))}}/**
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
 */const Qo=-1;function w2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Gr(s,he.empty(),e)}function b2(t){return new Gr(t.readTime,t.key,Qo)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(_e.min(),he.empty(),Qo)}static max(){return new Gr(_e.max(),he.empty(),Qo)}}function T2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==I2)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function R2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Vl.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=-1;function Ml(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function S2(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="";function C2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=R_(e)),e=P2(t.get(n),e);return R_(e)}function P2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case mw:n+="";break;default:n+=i}}return n}function R_(t){return t+mw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ja(this.root,e,this.comparator,!0)}}class Ja{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new C_(this.data.getIterator())}getIteratorFrom(e){return new C_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class C_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ut(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _w extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _w("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const k2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=k2.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="server_timestamp",vw="__type__",Ew="__previous_value__",ww="__local_write_time__";function Cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[vw])===null||n===void 0?void 0:n.stringValue)===yw}function Fl(t){const e=t.mapValue.fields[Ew];return Cd(e)?Fl(e):e}function Yo(t){const e=Qr(t.mapValue.fields[ww].timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const Xc="(default)";class Xo{constructor(e,n){this.projectId=e,this.database=n||Xc}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database===Xc}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="__type__",Tw="__max__",Za={mapValue:{fields:{__type__:{stringValue:Tw}}}},Iw="__vector__",Jc="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cd(t)?4:N2(t)?9007199254740991:x2(t)?10:11:me()}function Un(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),a=Qr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Yc(o)===Yc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ai(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(S_(o)!==S_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Un(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function Jo(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Ri(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return P_(t.timestampValue,e.timestampValue);case 4:return P_(Yo(t),Yo(e));case 5:return ef(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Yr(i),l=Yr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=we(a[u],l[u]);if(h!==0)return h}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=we(nt(i.latitude),nt(o.latitude));return a!==0?a:we(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return k_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d[Jc])===null||a===void 0?void 0:a.arrayValue,w=(l=p[Jc])===null||l===void 0?void 0:l.arrayValue,k=we(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:k_(g,w)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Za.mapValue&&o===Za.mapValue)return 0;if(i===Za.mapValue)return 1;if(o===Za.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=ef(l[d],h[d]);if(p!==0)return p;const g=Ri(a[l[d]],u[h[d]]);if(g!==0)return g}return we(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function P_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Qr(t),r=Qr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function k_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ri(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Si(t){return tf(t)}function tf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=tf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${tf(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function _c(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fl(t);return e?16+_c(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_c(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return os(r.fields,(i,o)=>{s+=i.length+_c(o)}),s}(t.mapValue);default:throw me()}}function nf(t){return!!t&&"integerValue"in t}function Pd(t){return!!t&&"arrayValue"in t}function O_(t){return!!t&&"nullValue"in t}function x_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yc(t){return!!t&&"mapValue"in t}function x2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[bw])===null||n===void 0?void 0:n.stringValue)===Iw}function Ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function N2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Tw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ao(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ao(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(Ao(this.value))}}function Aw(t){const e=[];return os(t.fields,(n,r)=>{const s=new yt([n]);if(yc(r)){const i=Aw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zc{constructor(e,n){this.position=e,this.inclusive=n}}function N_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Ri(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function D_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class el{constructor(e,n="asc"){this.field=e,this.dir=n}}function D2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Rw{}class at extends Rw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new V2(e,n,r):n==="array-contains"?new U2(e,r):n==="in"?new j2(e,r):n==="not-in"?new B2(e,r):n==="array-contains-any"?new $2(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new M2(e,r):new F2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ri(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends Rw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new jn(e,n)}matches(e){return Sw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Sw(t){return t.op==="and"}function Cw(t){return L2(t)&&Sw(t)}function L2(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function rf(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(Cw(t))return t.filters.map(e=>rf(e)).join(",");{const e=t.filters.map(n=>rf(n)).join(",");return`${t.op}(${e})`}}function Pw(t,e){return t instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&Un(r.value,s.value)}(t,e):t instanceof jn?function(r,s){return s instanceof jn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Pw(o,s.filters[a]),!0):!1}(t,e):void me()}function kw(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Si(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(kw).join(" ,")+"}"}(t):"Filter"}class V2 extends at{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class M2 extends at{constructor(e,n){super(e,"in",n),this.keys=Ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class F2 extends at{constructor(e,n){super(e,"not-in",n),this.keys=Ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class U2 extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pd(n)&&Jo(n.arrayValue,this.value)}}class j2 extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class B2 extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class $2 extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
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
 */class H2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function L_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new H2(t,e,n,r,s,i,o)}function kd(t){const e=ye(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ml(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Si(r)).join(",")),e.le=n}return e.le}function Od(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!D2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!D_(t.startAt,e.startAt)&&D_(t.endAt,e.endAt)}function sf(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function q2(t,e,n,r,s,i,o,a){return new Ul(t,e,n,r,s,i,o,a)}function xw(t){return new Ul(t)}function V_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function W2(t){return t.collectionGroup!==null}function Ro(t){const e=ye(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new el(i,r))}),n.has(yt.keyField().canonicalString())||e.he.push(new el(yt.keyField(),r))}return e.he}function Mn(t){const e=ye(t);return e.Pe||(e.Pe=z2(e,Ro(t))),e.Pe}function z2(t,e){if(t.limitType==="F")return L_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new el(s.field,i)});const n=t.endAt?new Zc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zc(t.startAt.position,t.startAt.inclusive):null;return L_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function of(t,e,n){return new Ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return Od(Mn(t),Mn(e))&&t.limitType===e.limitType}function Nw(t){return`${kd(Mn(t))}|lt:${t.limitType}`}function Xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>kw(s)).join(", ")}]`),Ml(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Si(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Si(s)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function Bl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ro(r),s)||r.endAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ro(r),s))}(t,e)}function K2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dw(t){return(e,n)=>{let r=!1;for(const s of Ro(t)){const i=G2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function G2(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ri(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=new Ye(he.comparator);function lr(){return Q2}const Lw=new Ye(he.comparator);function uo(...t){let e=Lw;for(const n of t)e=e.insert(n.key,n);return e}function Vw(t){let e=Lw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ys(){return So()}function Mw(){return So()}function So(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const Y2=new Ye(he.comparator),X2=new ut(he.comparator);function Te(...t){let e=X2;for(const n of t)e=e.add(n);return e}const J2=new ut(we);function Z2(){return J2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function Fw(t){return{integerValue:""+t}}function eD(t,e){return S2(e)?Fw(e):xd(t,e)}/**
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
 */class $l{constructor(){this._=void 0}}function tD(t,e,n){return t instanceof tl?function(s,i){const o={fields:{[vw]:{stringValue:yw},[ww]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cd(i)&&(i=Fl(i)),i&&(o.fields[Ew]=i),{mapValue:o}}(n,e):t instanceof Zo?jw(t,e):t instanceof ea?Bw(t,e):function(s,i){const o=Uw(s,i),a=M_(o)+M_(s.Ie);return nf(o)&&nf(s.Ie)?Fw(a):xd(s.serializer,a)}(t,e)}function nD(t,e,n){return t instanceof Zo?jw(t,e):t instanceof ea?Bw(t,e):n}function Uw(t,e){return t instanceof nl?function(r){return nf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class tl extends $l{}class Zo extends $l{constructor(e){super(),this.elements=e}}function jw(t,e){const n=$w(e);for(const r of t.elements)n.some(s=>Un(s,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends $l{constructor(e){super(),this.elements=e}}function Bw(t,e){let n=$w(e);for(const r of t.elements)n=n.filter(s=>!Un(s,r));return{arrayValue:{values:n}}}class nl extends $l{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function M_(t){return nt(t.integerValue||t.doubleValue)}function $w(t){return Pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zo&&s instanceof Zo||r instanceof ea&&s instanceof ea?Ai(r.elements,s.elements,Un):r instanceof nl&&s instanceof nl?Un(r.Ie,s.Ie):r instanceof tl&&s instanceof tl}(t.transform,e.transform)}class sD{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hl{}function Hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nd(t.key,un.none()):new _a(t.key,t.data,un.none());{const n=t.data,r=Kt.empty();let s=new ut(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new as(t.key,r,new Xt(s.toArray()),un.none())}}function iD(t,e,n){t instanceof _a?function(s,i,o){const a=s.value.clone(),l=U_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,o){if(!vc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=U_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(qw(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Co(t,e,n,r){return t instanceof _a?function(i,o,a,l){if(!vc(i.precondition,o))return a;const u=i.value.clone(),h=j_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(i,o,a,l){if(!vc(i.precondition,o))return a;const u=j_(i.fieldTransforms,l,o),h=o.data;return h.setAll(qw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return vc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Uw(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function F_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ai(r,s,(i,o)=>rD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _a extends Hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends Hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function U_(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,nD(o,a,n[s]))}return r}function j_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tD(i,o,e))}return r}class Nd extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aD extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Hw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ai(this.mutations,e.mutations,(n,r)=>F_(n,r))&&Ai(this.baseMutations,e.baseMutations,(n,r)=>F_(n,r))}}class Dd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return Y2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Dd(e,n,r,s)}}/**
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
 */var rt,Ae;function hD(t){switch(t){case H.OK:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return me()}}function Ww(t){if(t===void 0)return cr("GRPC error has no .code"),H.UNKNOWN;switch(t){case rt.OK:return H.OK;case rt.CANCELLED:return H.CANCELLED;case rt.UNKNOWN:return H.UNKNOWN;case rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case rt.INTERNAL:return H.INTERNAL;case rt.UNAVAILABLE:return H.UNAVAILABLE;case rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case rt.NOT_FOUND:return H.NOT_FOUND;case rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case rt.ABORTED:return H.ABORTED;case rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case rt.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Ae=rt||(rt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fD=new Hr([4294967295,4294967295],0);function B_(t){const e=Zh().encode(t),n=new aw;return n.update(e),new Uint8Array(n.digest())}function $_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Ld{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Hr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(fD)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=B_(e),[r,s]=$_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ld(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=B_(e),[r,s]=$_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ya.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ql(_e.min(),s,new Ye(we),lr(),Te())}}class ya{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ya(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class zw{constructor(e,n){this.targetId=e,this.ge=n}}class Kw{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class H_{constructor(){this.pe=0,this.ye=q_(),this.we=bt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Te(),n=Te(),r=Te();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new ya(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=q_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ne(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class dD{constructor(e){this.ke=e,this.qe=new Map,this.Qe=lr(),this.$e=ec(),this.Ue=ec(),this.Ke=new Ye(we)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(sf(i))if(r===0){const o=new he(i.path);this.ze(n,o,xt.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),l=a?this.nt(a,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Yr(r).toUint8Array()}catch(l){if(l instanceof _w)return Ii("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ld(o,s,i)}catch(l){return Ii(l instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&sf(a.target)){const l=new he(a.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,xt.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Te();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new ql(e,n,this.Ke,this.Qe,r);return this.Qe=lr(),this.$e=ec(),this.Ue=ec(),this.Ke=new Ye(we),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new H_,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ut(we),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ut(we),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new H_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function ec(){return new Ye(he.comparator)}function q_(){return new Ye(he.comparator)}const pD={asc:"ASCENDING",desc:"DESCENDING"},mD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gD={and:"AND",or:"OR"};class _D{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function af(t,e){return t.useProto3Json||Ml(e)?e:{value:e}}function rl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yD(t,e){return rl(t,e.toTimestamp())}function Fn(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=Qr(n);return new lt(r.seconds,r.nanos)}(t))}function Vd(t,e){return cf(t,e).canonicalString()}function cf(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qw(t){const e=qe.fromString(t);return Ne(eb(e)),e}function lf(t,e){return Vd(t.databaseId,e.path)}function Qu(t,e){const n=Qw(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Xw(n))}function Yw(t,e){return Vd(t.databaseId,e)}function vD(t){const e=Qw(t);return e.length===4?qe.emptyPath():Xw(e)}function uf(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xw(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function W_(t,e,n){return{name:lf(t,e),fields:n.value.mapValue.fields}}function ED(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ne(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(Ne(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:Ww(u.code);return new ce(h,u.message||"")}(o);n=new Kw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qu(t,r.document.name),i=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):_e.min(),a=new Kt({mapValue:{fields:r.document.fields}}),l=xt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ec(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qu(t,r.document),i=r.readTime?Fn(r.readTime):_e.min(),o=xt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ec([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qu(t,r.document),i=r.removedTargetIds||[];n=new Ec([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uD(s,i),a=r.targetId;n=new zw(a,o)}}return n}function wD(t,e){let n;if(e instanceof _a)n={update:W_(t,e.key,e.value)};else if(e instanceof Nd)n={delete:lf(t,e.key)};else if(e instanceof as)n={update:W_(t,e.key,e.data),updateMask:kD(e.fieldMask)};else{if(!(e instanceof aD))return me();n={verify:lf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof tl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function bD(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Fn(s.updateTime):Fn(i);return o.isEqual(_e.min())&&(o=Fn(i)),new sD(o,s.transformResults||[])}(n,e))):[]}function TD(t,e){return{documents:[Yw(t,e.path)]}}function ID(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yw(t,s);const i=function(u){if(u.length!==0)return Zw(jn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Js(p.field),direction:SD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=af(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function AD(t){let e=vD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=Jw(d);return p instanceof jn&&Cw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(w){return new el(Zs(w.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Ml(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Zc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Zc(g,p)}(n.endAt)),q2(e,s,o,i,a,"F",l,u)}function RD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zs(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zs(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Zs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>Jw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function SD(t){return pD[t]}function CD(t){return mD[t]}function PD(t){return gD[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return yt.fromServerFormat(t.fieldPath)}function Zw(t){return t instanceof at?function(n){if(n.op==="=="){if(x_(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NAN"}};if(O_(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(x_(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NAN"}};if(O_(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(n.field),op:CD(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(s=>Zw(s));return r.length===1?r[0]:{compositeFilter:{op:PD(n.op),filters:r}}}(t):me()}function kD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.Tt=e}}function xD(t){const e=AD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?of(e,e.limit,"L"):e}/**
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
 */class ND{constructor(){this.Tn=new DD}addToCollectionParentIndex(e,n){return this.Tn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Gr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class DD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(qe.comparator)).toArray()}}/**
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
 */const z_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tb=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(tb,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const K_="LruGarbageCollector",LD=1048576;function G_([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class VD{constructor(e){this.Hn=e,this.buffer=new ut(G_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();G_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){te(K_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ji(n)?te(K_,"Ignoring IndexedDB error during garbage collection: ",n):await Ui(n)}await this.er(3e5)})}}class FD{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Vl.ae);const r=new VD(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(z_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),z_):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Ys()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function UD(t,e){return new FD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Co(r.mutation,s,Xt.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=uo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=lr();const o=So(),a=function(){return So()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof as)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Co(h.mutation,u,h.mutation.getFieldMask(),lt.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new BD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=So();let s=new Ye((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Xt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||Te()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Mw();h.forEach(p=>{if(!i.has(p)){const g=Hw(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(ys());let a=Qo,l=i;return o.next(u=>B.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(h=>({batchId:a,changes:Vw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,l=>{const u=function(d,p){return new Ul(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,xt.newInvalidDocument(h)))});let a=uo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Co(h.mutation,u,Xt.empty(),lt.now()),Bl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return B.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Fn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:xD(s.bundledQuery),readTime:Fn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class qD{constructor(){this.overlays=new Ye(he.comparator),this.Rr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ys();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=ys(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ys(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ys(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return B.resolve(a)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lD(n,r));let i=this.Rr.get(n);i===void 0&&(i=Te(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class WD{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.Vr=new ut(ft.mr),this.gr=new ut(ft.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new ft(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new he(new qe([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new he(new qe([])),r=new ft(n,e),s=new ft(n,e+1);let i=Te();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return he.comparator(e.key,n.key)||we(e.Cr,n.Cr)}static pr(e,n){return we(e.Cr,n.Cr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ut(ft.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Mr=this.Mr.add(new ft(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Sd:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const a=this.Or(o.Cr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(we);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],a=>{r=r.add(a.Cr)})}),B.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ft(new he(i),0);let a=new ut(we);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Cr)),!0)},o),B.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return B.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new ft(n,0),s=this.Mr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.kr=e,this.docs=function(){return new Ye(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const o=n.path,a=new he(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||T2(b2(h),r)<=0||(s.has(h.key)||Bl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}qr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GD(this)}getSize(e){return B.resolve(this.size)}}class GD extends jD{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.persistence=e,this.Qr=new Ms(n=>kd(n),Od),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Md,this.targetCount=0,this.Kr=Ci.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),B.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Ci(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.zn(n),B.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Vl(0),this.zr=!1,this.zr=!0,this.jr=new WD,this.referenceDelegate=e(this),this.Hr=new QD(this),this.indexManager=new ND,this.remoteDocumentCache=function(s){return new KD(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new OD(n),this.Yr=new HD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new zD(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new YD(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return B.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class YD extends A2{constructor(e){super(),this.currentSequenceNumber=e}}class Fd{constructor(e){this.persistence=e,this.ti=new Md,this.ni=null}static ri(e){return new Fd(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),B.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,r=>{const s=he.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return B.or([()=>B.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class sl{constructor(e,n){this.persistence=e,this.oi=new Ms(r=>C2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=UD(this,n)}static ri(e,n){return new sl(e,n)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return B.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_c(e.data.value)),n}ar(e,n,r){return B.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ud(e,n.fromCache,r,s)}}/**
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
 */class XD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Tk()?8:R2(Dt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XD;return this._s(e,n,o).next(a=>{if(i.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Ys()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Ys()<=Ee.DEBUG&&te("QueryEngine","Query:",Xs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Ys()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):B.resolve())}rs(e,n){if(V_(n))return B.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=of(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(n,a);return this.ls(n,u,o,l.readTime)?this.rs(e,of(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,r,s){return V_(n)||s.isEqual(_e.min())?B.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?B.resolve(null):(Ys()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xs(n)),this.hs(e,o,n,w2(s,Qo)).next(a=>a))})}cs(e,n){let r=new ut(Dw(e));return n.forEach((s,i)=>{Bl(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Ys()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.ns.getDocumentsMatchingQuery(e,n,Gr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="LocalStore",ZD=3e8;class eL{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ye(we),this.Is=new Ms(i=>kd(i),Od),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $D(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function tL(t,e,n,r){return new eL(t,e,n,r)}async function rb(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Te();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function nL(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=B.resolve();return p.forEach(w=>{g=g.next(()=>h.getEntry(l,w)).next(k=>{const x=u.docVersions.get(w);Ne(x!==null),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sb(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function rL(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Hr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Hr.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(k,x,N){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=ZD?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,g,h)&&a.push(n.Hr.updateTargetData(i,g))});let l=lr(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(sL(i,o,e.documentUpdates).next(h=>{l=h.Vs,u=h.fs})),!r.isEqual(_e.min())){const h=n.Hr.getLastRemoteSnapshotVersion(i).next(d=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ts=s,i))}function sL(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=lr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te(jd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function iL(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Sd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oL(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function hf(t,e,n){const r=ye(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ji(o))throw o;te(jd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Q_(t,e,n){const r=ye(t);let s=_e.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=ye(l),p=d.Is.get(h);return p!==void 0?B.resolve(d.Ts.get(p)):d.Hr.getTargetData(u,h)}(r,o,Mn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Te())).next(a=>(aL(r,K2(e),a),{documents:a,gs:i})))}function aL(t,e,n){let r=t.Es.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Y_{constructor(){this.activeTargetIds=Z2()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cL{constructor(){this.ho=new Y_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Y_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lL{To(e){}shutdown(){}}/**
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
 */const X_="ConnectivityMonitor";class J_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){te(X_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){te(X_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tc=null;function ff(){return tc===null?tc=function(){return 268435456+Math.round(2147483648*Math.random())}():tc++,"0x"+tc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="RestConnection",uL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hL{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Xc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=ff(),a=this.bo(e,n.toUriEncodedString());te(Yu,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,a,l,r).then(u=>(te(Yu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ii(Yu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=uL[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class dL extends hL{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=ff();return new Promise((o,a)=>{const l=new cw;l.setWithCredentials(!0),l.listenOnce(lw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gc.NO_ERROR:const h=l.getResponseJson();te(St,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case gc.TIMEOUT:te(St,`RPC '${e}' ${i} timed out`),a(new ce(H.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const d=l.getStatus();if(te(St,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const w=function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(N)>=0?N:H.UNKNOWN}(g.status);a(new ce(w,g.message))}else a(new ce(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(St,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(St,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=ff(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fw(),a=hw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");te(St,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const w=new fL({Fo:x=>{g?te(St,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(p||(te(St,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(St,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},Mo:()=>d.close()}),k=(x,N,C)=>{x.listen(N,y=>{try{C(y)}catch(R){setTimeout(()=>{throw R},0)}})};return k(d,lo.EventType.OPEN,()=>{g||(te(St,`RPC '${e}' stream ${s} transport opened.`),w.Qo())}),k(d,lo.EventType.CLOSE,()=>{g||(g=!0,te(St,`RPC '${e}' stream ${s} transport closed`),w.Uo())}),k(d,lo.EventType.ERROR,x=>{g||(g=!0,Ii(St,`RPC '${e}' stream ${s} transport errored:`,x),w.Uo(new ce(H.UNAVAILABLE,"The operation could not be completed")))}),k(d,lo.EventType.MESSAGE,x=>{var N;if(!g){const C=x.data[0];Ne(!!C);const y=C,R=(y==null?void 0:y.error)||((N=y[0])===null||N===void 0?void 0:N.error);if(R){te(St,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let V=function(_){const b=rt[_];if(b!==void 0)return Ww(b)}(D),T=R.message;V===void 0&&(V=H.INTERNAL,T="Unknown error status: "+D+" with message "+R.message),g=!0,w.Uo(new ce(V,T)),d.close()}else te(St,`RPC '${e}' stream ${s} received:`,C),w.Ko(C)}}),k(a,uw.STAT_EVENT,x=>{x.stat===Jh.PROXY?te(St,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Jh.NOPROXY&&te(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.$o()},0),w}}function Xu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){return new _D(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="PersistentStream";class ob{constructor(e,n,r,s,i,o,a,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new ib(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ce(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return te(Z_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(te(Z_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pL extends ob{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=ED(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Fn(o.readTime):_e.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=uf(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=sf(l)?{documents:TD(i,l)}:{query:ID(i,l).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gw(i,o.resumeToken);const u=af(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=rl(i,o.snapshotVersion.toTimestamp());const u=af(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=RD(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=uf(this.serializer),n.removeTarget=e,this.I_(n)}}class mL extends ob{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=bD(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=uf(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wD(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{}class _L extends gL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,cf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(H.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,cf(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(H.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class yL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(cr(n),this.N_=!1):te("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="RemoteStore";class vL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(te(Ps,"Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.W_.add(4),await va(u),u.j_.set("Unknown"),u.W_.delete(4),await zl(u)}(this))})}),this.j_=new yL(r,s)}}async function zl(t){if(Fs(t))for(const e of t.G_)await e(!0)}async function va(t){for(const e of t.G_)await e(!1)}function ab(t,e){const n=ye(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),qd(n)?Hd(n):Bi(n).c_()&&$d(n,e))}function Bd(t,e){const n=ye(t),r=Bi(n);n.K_.delete(e),r.c_()&&cb(n,e),n.K_.size===0&&(r.c_()?r.P_():Fs(n)&&n.j_.set("Unknown"))}function $d(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bi(t).y_(e)}function cb(t,e){t.H_.Ne(e),Bi(t).w_(e)}function Hd(t){t.H_=new dD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Bi(t).start(),t.j_.B_()}function qd(t){return Fs(t)&&!Bi(t).u_()&&t.K_.size>0}function Fs(t){return ye(t).W_.size===0}function lb(t){t.H_=void 0}async function EL(t){t.j_.set("Online")}async function wL(t){t.K_.forEach((e,n)=>{$d(t,e)})}async function bL(t,e){lb(t),qd(t)?(t.j_.q_(e),Hd(t)):t.j_.set("Unknown")}async function TL(t,e,n){if(t.j_.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.K_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.K_.delete(a),s.H_.removeTarget(a))}(t,e)}catch(r){te(Ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await il(t,r)}else if(e instanceof Ec?t.H_.We(e):e instanceof zw?t.H_.Ze(e):t.H_.je(e),!n.isEqual(_e.min()))try{const r=await sb(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.H_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.K_.get(u);h&&i.K_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.K_.get(l);if(!h)return;i.K_.set(l,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),cb(i,l);const d=new Mr(h.target,l,u,h.sequenceNumber);$d(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(Ps,"Failed to raise snapshot:",r),await il(t,r)}}async function il(t,e,n){if(!ji(e))throw e;t.W_.add(1),await va(t),t.j_.set("Offline"),n||(n=()=>sb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Ps,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await zl(t)})}function ub(t,e){return e().catch(n=>il(t,n,e))}async function Kl(t){const e=ye(t),n=Jr(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Sd;for(;IL(e);)try{const s=await iL(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,AL(e,s)}catch(s){await il(e,s)}hb(e)&&fb(e)}function IL(t){return Fs(t)&&t.U_.length<10}function AL(t,e){t.U_.push(e);const n=Jr(t);n.c_()&&n.S_&&n.b_(e.mutations)}function hb(t){return Fs(t)&&!Jr(t).u_()&&t.U_.length>0}function fb(t){Jr(t).start()}async function RL(t){Jr(t).C_()}async function SL(t){const e=Jr(t);for(const n of t.U_)e.b_(n.mutations)}async function CL(t,e,n){const r=t.U_.shift(),s=Dd.from(r,e,n);await ub(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Kl(t)}async function PL(t,e){e&&Jr(t).S_&&await async function(r,s){if(function(o){return hD(o)&&o!==H.ABORTED}(s.code)){const i=r.U_.shift();Jr(r).h_(),await ub(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Kl(r)}}(t,e),hb(t)&&fb(t)}async function ey(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te(Ps,"RemoteStore received new credentials");const r=Fs(n);n.W_.add(3),await va(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await zl(n)}async function kL(t,e){const n=ye(t);e?(n.W_.delete(2),await zl(n)):e||(n.W_.add(2),await va(n),n.j_.set("Unknown"))}function Bi(t){return t.J_||(t.J_=function(n,r,s){const i=ye(n);return i.M_(),new pL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:EL.bind(null,t),No:wL.bind(null,t),Lo:bL.bind(null,t),p_:TL.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),qd(t)?Hd(t):t.j_.set("Unknown")):(await t.J_.stop(),lb(t))})),t.J_}function Jr(t){return t.Y_||(t.Y_=function(n,r,s){const i=ye(n);return i.M_(),new mL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:RL.bind(null,t),Lo:PL.bind(null,t),D_:SL.bind(null,t),v_:CL.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Kl(t)):(await t.Y_.stop(),t.U_.length>0&&(te(Ps,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zd(t,e){if(cr("AsyncQueue",`${e}: ${t}`),ji(t))return new ce(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{static emptySet(e){return new pi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.Z_=new Ye(he.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Pi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Pi(e,n,pi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class xL{constructor(){this.queries=ny(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=ny(),i.forEach((o,a)=>{for(const l of a.ta)l.onError(r)})})(this,new ce(H.ABORTED,"Firestore shutting down"))}}function ny(){return new Ms(t=>Nw(t),jl)}async function NL(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new OL,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=zd(o,`Initialization of query '${Xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Kd(n)}async function DL(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LL(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ta)a.oa(s)&&(r=!0);o.ea=s}}r&&Kd(n)}function VL(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Kd(t){t.ia.forEach(e=>{e.next()})}var df,ry;(ry=df||(df={}))._a="default",ry.Cache="cache";class ML{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==df.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.key=e}}class pb{constructor(e){this.key=e}}class FL{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Te(),this.mutatedKeys=Te(),this.ya=Dw(e),this.wa=new pi(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new ty,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Bl(this.query,d)?d:null,w=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?w!==k&&(r.track({type:3,doc:g}),x=!0):this.va(p,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.ya(g,l)>0||u&&this.ya(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),x=!0):p&&!g&&(r.track({type:1,doc:p}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,d)=>function(g,w){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return k(g)-k(w)}(h.type,d.type)||this.ya(h.doc,d.doc)),this.Ca(r),s=s!=null&&s;const a=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new Pi(this.query,e.wa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ty,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Te(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new pb(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new db(r))}),n}Oa(e){this.fa=e.gs,this.pa=Te();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Pi.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Gd="SyncEngine";class UL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jL{constructor(e){this.key=e,this.Ba=!1}}class BL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Ms(a=>Nw(a),jl),this.qa=new Map,this.Qa=new Set,this.$a=new Ye(he.comparator),this.Ua=new Map,this.Ka=new Md,this.Wa={},this.Ga=new Map,this.za=Ci.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function $L(t,e,n=!0){const r=Eb(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await mb(r,e,n,!0),s}async function HL(t,e){const n=Eb(t);await mb(n,e,!0,!1)}async function mb(t,e,n,r){const s=await oL(t.localStore,Mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await qL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ab(t.remoteStore,s),a}async function qL(t,e,n,r,s){t.Ha=(d,p,g)=>async function(k,x,N,C){let y=x.view.ba(N);y.ls&&(y=await Q_(k.localStore,x.query,!1).then(({documents:T})=>x.view.ba(T,y)));const R=C&&C.targetChanges.get(x.targetId),D=C&&C.targetMismatches.get(x.targetId)!=null,V=x.view.applyChanges(y,k.isPrimaryClient,R,D);return iy(k,x.targetId,V.Ma),V.snapshot}(t,d,p,g);const i=await Q_(t.localStore,e,!0),o=new FL(e,i.gs),a=o.ba(i.documents),l=ya.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);iy(t,n,u.Ma);const h=new UL(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function WL(t,e,n){const r=ye(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!jl(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bd(r.remoteStore,s.targetId),pf(r,s.targetId)}).catch(Ui)):(pf(r,s.targetId),await hf(r.localStore,s.targetId,!0))}async function zL(t,e){const n=ye(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bd(n.remoteStore,r.targetId))}async function KL(t,e,n){const r=eV(t);try{const s=await function(o,a){const l=ye(o),u=lt.now(),h=a.reduce((g,w)=>g.add(w.key),Te());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=lr(),k=Te();return l.ds.getEntries(g,h).next(x=>{w=x,w.forEach((N,C)=>{C.isValidDocument()||(k=k.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(x=>{d=x;const N=[];for(const C of a){const y=oD(C,d.get(C.key).overlayedDocument);y!=null&&N.push(new as(C.key,y,Aw(y.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,a)}).next(x=>{p=x;const N=x.applyToLocalDocumentSet(d,k);return l.documentOverlayCache.saveOverlays(g,x.batchId,N)})}).then(()=>({batchId:p.batchId,changes:Vw(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new Ye(we)),u=u.insert(a,l),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ea(r,s.changes),await Kl(r.remoteStore)}catch(s){const i=zd(s,"Failed to persist write");n.reject(i)}}async function gb(t,e){const n=ye(t);try{const r=await rL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ne(o.Ba):s.removedDocuments.size>0&&(Ne(o.Ba),o.Ba=!1))}),await Ea(n,r,e)}catch(r){await Ui(r)}}function sy(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const a=o.view.sa(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.ta)p.sa(a)&&(u=!0)}),u&&Kd(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GL(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new Ye(he.comparator);o=o.insert(i,xt.newNoDocument(i,_e.min()));const a=Te().add(i),l=new ql(_e.min(),new Map,new Ye(we),o,a);await gb(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),Qd(r)}else await hf(r.localStore,e,!1).then(()=>pf(r,e,n)).catch(Ui)}async function QL(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await nL(n.localStore,e);yb(n,r,null),_b(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ea(n,s)}catch(s){await Ui(s)}}async function YL(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ne(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);yb(r,e,n),_b(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ea(r,s)}catch(s){await Ui(s)}}function _b(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function yb(t,e,n){const r=ye(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function pf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||vb(t,r)})}function vb(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Bd(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Qd(t))}function iy(t,e,n){for(const r of n)r instanceof db?(t.Ka.addReference(r.key,e),XL(t,r)):r instanceof pb?(te(Gd,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||vb(t,r.key)):me()}function XL(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(te(Gd,"New document in limbo: "+n),t.Qa.add(r),Qd(t))}function Qd(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new he(qe.fromString(e)),r=t.za.next();t.Ua.set(r,new jL(n)),t.$a=t.$a.insert(n,r),ab(t.remoteStore,new Mr(Mn(xw(n.path)),r,"TargetPurposeLimboResolution",Vl.ae))}}async function Ea(t,e,n){const r=ye(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,l)=>{o.push(r.Ha(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Ud.Yi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,u){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,p=>B.forEach(p.Hi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>B.forEach(p.Ji,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!ji(d))throw d;te(jd,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.Ts.get(p),w=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(w);h.Ts=h.Ts.insert(p,k)}}}(r.localStore,i))}async function JL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te(Gd,"User change. New user:",e.toKey());const r=await rb(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(a=>{a.forEach(l=>{l.reject(new ce(H.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ea(n,r.Rs)}}function ZL(t,e){const n=ye(t),r=n.Ua.get(e);if(r&&r.Ba)return Te().add(r.key);{let s=Te();const i=n.qa.get(e);if(!i)return s;for(const o of i){const a=n.ka.get(o);s=s.unionWith(a.view.Sa)}return s}}function Eb(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GL.bind(null,e),e.La.p_=LL.bind(null,e.eventManager),e.La.Ja=VL.bind(null,e.eventManager),e}function eV(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YL.bind(null,e),e}class ol{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return tL(this.persistence,new JD,e.initialUser,this.serializer)}Xa(e){return new nb(Fd.ri,this.serializer)}Za(e){return new cL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ol.provider={build:()=>new ol};class tV extends ol{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ne(this.persistence.referenceDelegate instanceof sl);const r=this.persistence.referenceDelegate.garbageCollector;return new MD(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new nb(r=>sl.ri(r,n),this.serializer)}}class mf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JL.bind(null,this.syncEngine),await kL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xL}()}createDatastore(e){const n=Wl(e.databaseInfo.databaseId),r=function(i){return new dL(i)}(e.databaseInfo);return function(i,o,a,l){return new _L(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new vL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>sy(this.syncEngine,n,0),function(){return J_.D()?new J_:new lL}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new BL(s,i,o,a,l,u);return h&&(d.ja=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te(Ps,"RemoteStore shutting down."),i.W_.add(5),await va(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}mf.provider={build:()=>new mf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nV{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="FirestoreClient";class rV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=pw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(Zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ju(t,e){t.asyncQueue.verifyOperationInProgress(),te(Zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rb(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sV(t);te(Zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ey(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ey(e.remoteStore,s)),t._onlineComponents=e}async function sV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Zr,"Using user provided OfflineComponentProvider");try{await Ju(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ii("Error using user provided cache. Falling back to memory cache: "+n),await Ju(t,new ol)}}else te(Zr,"Using default OfflineComponentProvider"),await Ju(t,new tV(void 0));return t._offlineComponents}async function wb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Zr,"Using user provided OnlineComponentProvider"),await oy(t,t._uninitializedComponentsProvider._online)):(te(Zr,"Using default OnlineComponentProvider"),await oy(t,new mf))),t._onlineComponents}function iV(t){return wb(t).then(e=>e.syncEngine)}async function oV(t){const e=await wb(t),n=e.eventManager;return n.onListen=$L.bind(null,e.syncEngine),n.onUnlisten=WL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zL.bind(null,e.syncEngine),n}function aV(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new nV({next:p=>{h.su(),o.enqueueAndForget(()=>DL(i,d)),p.fromCache&&l.source==="server"?u.reject(new ce(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new ML(a,h,{includeMetadataChanges:!0,Ta:!0});return NL(i,d)}(await oV(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t,e,n){if(!n)throw new ce(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cV(t,e,n,r){if(e===!0&&r===!0)throw new ce(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cy(t){if(!he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ly(t){if(he.isDocumentKey(t))throw new ce(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function ki(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yd(t);throw new ce(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="firestore.googleapis.com",uy=!0;class hy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ib,this.ssl=uy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:uy;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LD)throw new ce(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d2;switch(r.type){case"firstParty":return new _2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ay.get(n);r&&(te("ComponentProvider","Removing Datastore"),ay.delete(n),r.terminate())}(this),Promise.resolve()}}function lV(t,e,n,r={}){var s;const i=(t=ki(t,Gl))._getSettings(),o=`${e}:${n}`;if(i.host!==Ib&&i.host!==o&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ct.MOCK_USER;else{a=E0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ct(u)}t._authCredentials=new p2(new dw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ql(this.firestore,e,this._query)}}class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Wr extends Ql{constructor(e,n,r){super(e,n,xw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new he(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function _6(t,e,...n){if(t=Ze(t),Tb("collection","path",e),t instanceof Gl){const r=qe.fromString(e,...n);return ly(r),new Wr(t,null,r)}{if(!(t instanceof hn||t instanceof Wr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return ly(r),new Wr(t.firestore,null,r)}}function y6(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=pw.newId()),Tb("doc","path",e),t instanceof Gl){const r=qe.fromString(e,...n);return cy(r),new hn(t,null,new he(r))}{if(!(t instanceof hn||t instanceof Wr))throw new ce(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return cy(r),new hn(t.firestore,t instanceof Wr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="AsyncQueue";class dy{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new ib(this,"async_queue_retry"),this.Su=()=>{const r=Xu();r&&te(fy,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Xu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new qr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ji(e))throw e;te(fy,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Wd.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Yl extends Gl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new dy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dy(e),this._firestoreClient=void 0,await e}}}function uV(t,e){const n=typeof t=="object"?t:gd(),r=typeof t=="string"?t:Xc,s=Ol(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_0("firestore");i&&lV(s,...i)}return s}function Xd(t){if(t._terminated)throw new ce(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hV(t),t._firestoreClient}function hV(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new O2(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,bb(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new rV(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(bt.fromBase64String(e))}catch(n){throw new ce(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oi(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class ep{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV=/^__.*__$/;class dV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new _a(e,this.data,n,this.fieldTransforms)}}class Ab{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class tp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return al(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Rb(this.Lu)&&fV.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class pV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wl(e)}ju(e,n,r,s=!1){return new tp({Lu:e,methodName:n,zu:r,path:yt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sb(t){const e=t._freezeSettings(),n=Wl(t._databaseId);return new pV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cb(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);np("Data must be an object, but it was:",o,r);const a=Pb(r,o);let l,u;if(i.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=gf(e,d,n);if(!o.contains(p))throw new ce(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Ob(h,p)||h.push(p)}l=new Xt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new dV(new Kt(a),l,u)}class Jl extends Jd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jl}}function mV(t,e,n,r){const s=t.ju(1,e,n);np("Data must be an object, but it was:",s,r);const i=[],o=Kt.empty();os(r,(l,u)=>{const h=rp(e,l,n);u=Ze(u);const d=s.Uu(h);if(u instanceof Jl)i.push(h);else{const p=Zl(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Xt(i);return new Ab(o,a,s.fieldTransforms)}function gV(t,e,n,r,s,i){const o=t.ju(1,e,n),a=[gf(e,r,n)],l=[s];if(i.length%2!=0)throw new ce(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(gf(e,i[p])),l.push(i[p+1]);const u=[],h=Kt.empty();for(let p=a.length-1;p>=0;--p)if(!Ob(u,a[p])){const g=a[p];let w=l[p];w=Ze(w);const k=o.Uu(g);if(w instanceof Jl)u.push(g);else{const x=Zl(w,k);x!=null&&(u.push(g),h.set(g,x))}}const d=new Xt(u);return new Ab(h,d,o.fieldTransforms)}function Zl(t,e){if(kb(t=Ze(t)))return np("Unsupported field value:",e,t),Pb(t,e);if(t instanceof Jd)return function(r,s){if(!Rb(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Zl(a,s.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:rl(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rl(s.serializer,i)}}if(r instanceof Zd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oi)return{bytesValue:Gw(s.serializer,r._byteString)};if(r instanceof hn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ep)return function(o,a){return{mapValue:{fields:{[bw]:{stringValue:Iw},[Jc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return xd(a.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Yd(r)}`)}(t,e)}function Pb(t,e){const n={};return gw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=Zl(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Zd||t instanceof Oi||t instanceof hn||t instanceof Jd||t instanceof ep)}function np(t,e,n){if(!kb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Yd(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function gf(t,e,n){if((e=Ze(e))instanceof Xl)return e._internalPath;if(typeof e=="string")return rp(t,e);throw al("Field path arguments must be of type string or ",t,!1,void 0,n)}const _V=new RegExp("[~\\*/\\[\\]]");function rp(t,e,n){if(e.search(_V)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xl(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ce(H.INVALID_ARGUMENT,a+t+l)}function Ob(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yV extends xb{data(){return super.data()}}function Nb(t,e){return typeof e=="string"?rp(t,e):e instanceof Xl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EV{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Jc].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new ep(i)}convertGeoPoint(e){return new Zd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Ne(eb(r));const s=new Xo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wV extends xb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wc extends wV{data(e={}){return super.data(e)}}class bV{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new nc(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wc(this._firestore,this._userDataWriter,r.key,r,new nc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new wc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new nc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new wc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new nc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:TV(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class IV extends EV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function v6(t){t=ki(t,Ql);const e=ki(t.firestore,Yl),n=Xd(e),r=new IV(e);return vV(t._query),aV(n,t._query).then(s=>new bV(e,r,t,s))}function E6(t,e,n){t=ki(t,hn);const r=ki(t.firestore,Yl),s=Db(t.converter,e,n);return Lb(r,[Cb(Sb(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function Lb(t,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>KL(await iV(r),s,i)),i.promise}(Xd(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Sb(e)}set(e,n,r){this._verifyNotCommitted();const s=Zu(e,this._firestore),i=Db(s.converter,n,r),o=Cb(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,un.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Zu(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof Xl?gV(this._dataReader,"WriteBatch.update",i._key,n,r,s):mV(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,un.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Zu(e,this._firestore);return this._mutations=this._mutations.concat(new Nd(n._key,un.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ce(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Zu(t,e){if((t=Ze(t)).firestore!==e)throw new ce(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w6(t){return Xd(t=ki(t,Yl)),new AV(t,e=>Lb(t,e))}(function(e,n=!0){(function(s){Fi=s})(Ls),Rs(new Kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Yl(new m2(r.getProvider("auth-internal")),new y2(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Dn(E_,w_,e),Dn(E_,w_,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="firebasestorage.googleapis.com",Mb="storageBucket",RV=2*60*1e3,SV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends $n{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function eh(t){return"storage/"+t}function sp(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function CV(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function PV(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function OV(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xV(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NV(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DV(){return new tt(et.CANCELED,"User canceled the upload/download.")}function LV(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function VV(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function MV(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Mb+"' property when initializing the app?")}function FV(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UV(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jV(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _f(t){return new tt(et.INVALID_ARGUMENT,t)}function Fb(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function BV(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Po(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function so(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw VV(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),w={bucket:1,path:3},k=n===Vb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",N=new RegExp(`^https?://${k}/${s}/${x}`,"i"),y=[{regex:a,indices:l,postModify:i},{regex:g,indices:w,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<y.length;R++){const D=y[R],V=D.regex.exec(e);if(V){const T=V[D.indices.bucket];let v=V[D.indices.path];v||(v=""),r=new Jt(T,v),D.postModify(r);break}}if(r==null)throw LV(e);return r}}class $V{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...x){u||(u=!0,e.apply(null,x))}function d(x){s=setTimeout(()=>{s=null,t(g,l())},x)}function p(){i&&clearTimeout(i)}function g(x,...N){if(u){p();return}if(x){p(),h.call(null,x,...N);return}if(l()||o){p(),h.call(null,x,...N);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let w=!1;function k(x){w||(w=!0,p(),!u&&(s!==null?(x||(a=2),clearTimeout(s),d(0)):x||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function qV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(t){return t!==void 0}function zV(t){return typeof t=="object"&&!Array.isArray(t)}function ip(t){return typeof t=="string"||t instanceof String}function py(t){return op()&&t instanceof Blob}function op(){return typeof Blob<"u"}function my(t,e,n,r){if(r<e)throw _f(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _f(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ub(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Is||(Is={}));/**
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
 */function KV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new rc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Is.NO_ERROR,l=i.getStatus();if(!a||KV(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Is.ABORT;r(!1,new rc(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new rc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WV(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=sp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Fb():DV();o(l)}else{const l=NV();o(l)}};this.canceled_?n(!1,new rc(!1,null,!0)):this.backoffId_=HV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZV(t,e,n,r,s,i,o=!0){const a=Ub(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return XV(u,e),QV(u,n),YV(u,i),JV(u,r),new GV(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tM(...t){const e=eM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(op())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function rM(t){if(typeof atob>"u")throw jV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class th{constructor(e,n){this.data=e,this.contentType=n||null}}function sM(t,e){switch(t){case kn.RAW:return new th(jb(e));case kn.BASE64:case kn.BASE64URL:return new th(Bb(t,e));case kn.DATA_URL:return new th(oM(e),aM(e))}throw sp()}function jb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iM(t){let e;try{e=decodeURIComponent(t)}catch{throw Po(kn.DATA_URL,"Malformed data URL.")}return jb(e)}function Bb(t,e){switch(t){case kn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Po(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case kn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Po(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rM(e)}catch(s){throw s.message.includes("polyfill")?s:Po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class $b{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Po(kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=cM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function oM(t){const e=new $b(t);return e.base64?Bb(kn.BASE64,e.rest):iM(e.rest)}function aM(t){return new $b(t).contentType}function cM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){let r=0,s="";py(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(py(this.data_)){const r=this.data_,s=nM(r,e,n);return s===null?null:new Lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Lr(r,!0)}}static getBlob(...e){if(op()){const n=e.map(r=>r instanceof Lr?r.data_:r);return new Lr(tM.apply(null,n))}else{const n=e.map(o=>ip(o)?sM(kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){let e;try{e=JSON.parse(t)}catch{return null}return zV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function uM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function qb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t,e){return e}class Ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||hM}}let sc=null;function fM(t){return!ip(t)||t.length<2?t:qb(t)}function Wb(){if(sc)return sc;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(i,o){return fM(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ft("size");return s.xform=r,t.push(s),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),sc=t,sc}function dM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function pM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return dM(r,t),r}function zb(t,e,n){const r=Hb(e);return r===null?null:pM(t,r,n)}function mM(t,e,n,r){const s=Hb(e);if(s===null||!ip(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=ap(p,n,r),w=Ub({alt:"media",token:u});return g+w})[0]}function gM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Kb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){if(!t)throw sp()}function _M(t,e){function n(r,s){const i=zb(t,s,e);return Gb(i!==null),i}return n}function yM(t,e){function n(r,s){const i=zb(t,s,e);return Gb(i!==null),mM(i,s,t.host,t._protocol)}return n}function Qb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=OV():s=kV():n.getStatus()===402?s=PV(t.bucket):n.getStatus()===403?s=xV(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function vM(t){const e=Qb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=CV(t.path)),i.serverResponse=s.serverResponse,i}return n}function EM(t,e,n){const r=e.fullServerUrl(),s=ap(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Kb(s,i,yM(t,n),o);return a.errorHandler=vM(e),a}function wM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=wM(null,e)),r}function TM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let R=0;R<2;R++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=bM(e,r,s),h=gM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Lr.getBlob(d,r,p);if(g===null)throw FV();const w={name:u.fullPath},k=ap(i,t.host,t._protocol),x="POST",N=t.maxUploadRetryTime,C=new Kb(k,x,_M(t,n),N);return C.urlParams=w,C.headers=o,C.body=g.uploadData(),C.errorHandler=Qb(e),C}class IM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw so("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw so("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw so("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw so("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw so("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AM extends IM{initXhr(){this.xhr_.responseType="text"}}function Yb(){return new AM}/**
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
 */class ks{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ks(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qb(this._location.path)}get storage(){return this._service}get parent(){const e=lM(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new ks(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BV(e)}}function RM(t,e,n){t._throwIfRoot("uploadBytes");const r=TM(t.storage,t._location,Wb(),new Lr(e,!0),n);return t.storage.makeRequestWithTokens(r,Yb).then(s=>({metadata:s,ref:t}))}function SM(t){t._throwIfRoot("getDownloadURL");const e=EM(t.storage,t._location,Wb());return t.storage.makeRequestWithTokens(e,Yb).then(n=>{if(n===null)throw UV();return n})}function CM(t,e){const n=uM(t._location.path,e),r=new Jt(t._location.bucket,n);return new ks(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t){return/^[A-Za-z]+:\/\//.test(t)}function kM(t,e){return new ks(t,e)}function Xb(t,e){if(t instanceof cp){const n=t;if(n._bucket==null)throw MV();const r=new ks(n,n._bucket);return e!=null?Xb(r,e):r}else return e!==void 0?CM(t,e):t}function OM(t,e){if(e&&PM(e)){if(t instanceof cp)return kM(t,e);throw _f("To use ref(service, url), the first argument must be a Storage instance.")}else return Xb(t,e)}function gy(t,e){const n=e==null?void 0:e[Mb];return n==null?null:Jt.makeFromBucketSpec(n,t)}function xM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:E0(s,t.app.options.projectId))}class cp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Vb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RV,this._maxUploadRetryTime=SV,this._requests=new Set,s!=null?this._bucket=Jt.makeFromBucketSpec(s,this._host):this._bucket=gy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=gy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){my("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){my("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ks(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new $V(Fb());{const o=ZV(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _y="@firebase/storage",yy="0.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="storage";function b6(t,e,n){return t=Ze(t),RM(t,e,n)}function T6(t){return t=Ze(t),SM(t)}function I6(t,e){return t=Ze(t),OM(t,e)}function NM(t=gd(),e){t=Ze(t);const r=Ol(t,Jb).getImmediate({identifier:e}),s=_0("storage");return s&&DM(r,...s),r}function DM(t,e,n,r={}){xM(t,e,n,r)}function LM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new cp(n,r,s,e,Ls)}function VM(){Rs(new Kr(Jb,LM,"PUBLIC").setMultipleInstances(!0)),Dn(_y,yy,""),Dn(_y,yy,"esm2017")}VM();const MM=Zt(t=>{const e=Ds(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=T0(n),s=e2(r),i=uV(r),o=NM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function FM(t,e,n){return(e=jM(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vy(Object(n),!0).forEach(function(r){FM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function UM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jM(t){var e=UM(t,"string");return typeof e=="symbol"?e:e+""}const Ey=()=>{};let lp={},Zb={},eT=null,tT={mark:Ey,measure:Ey};try{typeof window<"u"&&(lp=window),typeof document<"u"&&(Zb=document),typeof MutationObserver<"u"&&(eT=MutationObserver),typeof performance<"u"&&(tT=performance)}catch{}const{userAgent:wy=""}=lp.navigator||{},es=lp,$e=Zb,by=eT,ic=tT;es.document;const mr=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",nT=~wy.indexOf("MSIE")||~wy.indexOf("Trident/");var BM=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,$M=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,rT={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},HM={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Lt="classic",eu="duotone",qM="sharp",WM="sharp-duotone",iT=[Lt,eu,qM,WM],zM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},KM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},GM=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),QM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},YM=["fak","fa-kit","fakd","fa-kit-duotone"],Ty={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},XM=["kit"],JM={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ZM=["fak","fakd"],e4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Iy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],n4=["fak","fa-kit","fakd","fa-kit-duotone"],r4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},s4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},i4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},yf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},o4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],vf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...t4,...o4],a4=["solid","regular","light","thin","duotone","brands"],oT=[1,2,3,4,5,6,7,8,9,10],c4=oT.concat([11,12,13,14,15,16,17,18,19,20]),l4=[...Object.keys(i4),...a4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oc.GROUP,oc.SWAP_OPACITY,oc.PRIMARY,oc.SECONDARY].concat(oT.map(t=>"".concat(t,"x"))).concat(c4.map(t=>"w-".concat(t))),u4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ur="___FONT_AWESOME___",Ef=16,aT="fa",cT="svg-inline--fa",Os="data-fa-i2svg",wf="data-fa-pseudo-element",h4="data-fa-pseudo-element-pending",up="data-prefix",hp="data-icon",Ay="fontawesome-i2svg",f4="async",d4=["HTML","HEAD","STYLE","SCRIPT"],lT=(()=>{try{return!0}catch{return!1}})();function wa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Lt]}})}const uT=z({},rT);uT[Lt]=z(z(z(z({},{"fa-duotone":"duotone"}),rT[Lt]),Ty.kit),Ty["kit-duotone"]);const p4=wa(uT),bf=z({},QM);bf[Lt]=z(z(z(z({},{duotone:"fad"}),bf[Lt]),Iy.kit),Iy["kit-duotone"]);const Ry=wa(bf),Tf=z({},yf);Tf[Lt]=z(z({},Tf[Lt]),e4.kit);const fp=wa(Tf),If=z({},s4);If[Lt]=z(z({},If[Lt]),JM.kit);wa(If);const m4=BM,hT="fa-layers-text",g4=$M,_4=z({},zM);wa(_4);const y4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nh=HM,v4=[...XM,...l4],ko=es.FontAwesomeConfig||{};function E4(t){var e=$e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function w4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$e&&typeof $e.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=w4(E4(n));s!=null&&(ko[r]=s)});const fT={styleDefault:"solid",familyDefault:Lt,cssPrefix:aT,replacementClass:cT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ko.familyPrefix&&(ko.cssPrefix=ko.familyPrefix);const xi=z(z({},fT),ko);xi.autoReplaceSvg||(xi.observeMutations=!1);const ae={};Object.keys(fT).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){xi[t]=e,Oo.forEach(n=>n(ae))},get:function(){return xi[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){xi.cssPrefix=t,Oo.forEach(e=>e(ae))},get:function(){return xi.cssPrefix}});es.FontAwesomeConfig=ae;const Oo=[];function b4(t){return Oo.push(t),()=>{Oo.splice(Oo.indexOf(t),1)}}const Tr=Ef,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function T4(t){if(!t||!mr)return;const e=$e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$e.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $e.head.insertBefore(e,r),t}const I4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ta(){let t=12,e="";for(;t-- >0;)e+=I4[Math.random()*62|0];return e}function $i(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function dp(t){return t.classList?$i(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function dT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A4(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(dT(t[n]),'" '),"").trim()}function tu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function pp(t){return t.size!==On.size||t.x!==On.x||t.y!==On.y||t.rotate!==On.rotate||t.flipX||t.flipY}function R4(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function S4(t){let{transform:e,width:n=Ef,height:r=Ef,startCentered:s=!1}=t,i="";return s&&nT?i+="translate(".concat(e.x/Tr-n/2,"em, ").concat(e.y/Tr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Tr,"em), calc(-50% + ").concat(e.y/Tr,"em)) "):i+="translate(".concat(e.x/Tr,"em, ").concat(e.y/Tr,"em) "),i+="scale(".concat(e.size/Tr*(e.flipX?-1:1),", ").concat(e.size/Tr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var C4=`:root, :host {
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
}`;function pT(){const t=aT,e=cT,n=ae.cssPrefix,r=ae.replacementClass;let s=C4;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let Sy=!1;function rh(){ae.autoAddCss&&!Sy&&(T4(pT()),Sy=!0)}var P4={mixout(){return{dom:{css:pT,insertCss:rh}}},hooks(){return{beforeDOMElementCreation(){rh()},beforeI2svg(){rh()}}}};const hr=es||{};hr[ur]||(hr[ur]={});hr[ur].styles||(hr[ur].styles={});hr[ur].hooks||(hr[ur].hooks={});hr[ur].shims||(hr[ur].shims=[]);var xn=hr[ur];const mT=[],gT=function(){$e.removeEventListener("DOMContentLoaded",gT),cl=1,mT.map(t=>t())};let cl=!1;mr&&(cl=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),cl||$e.addEventListener("DOMContentLoaded",gT));function k4(t){mr&&(cl?setTimeout(t,0):mT.push(t))}function ba(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?dT(t):"<".concat(e," ").concat(A4(n),">").concat(r.map(ba).join(""),"</").concat(e,">")}function Cy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var sh=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function O4(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Af(t){const e=O4(t);return e.length===1?e[0].toString(16):null}function x4(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Py(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Py(e);typeof xn.hooks.addPack=="function"&&!r?xn.hooks.addPack(t,Py(e)):xn.styles[t]=z(z({},xn.styles[t]||{}),s),t==="fas"&&Rf("fa",e)}const{styles:na,shims:N4}=xn,_T=Object.keys(fp),D4=_T.reduce((t,e)=>(t[e]=Object.keys(fp[e]),t),{});let mp=null,yT={},vT={},ET={},wT={},bT={};function L4(t){return~v4.indexOf(t)}function V4(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!L4(s)?s:null}const TT=()=>{const t=r=>sh(na,(s,i,o)=>(s[o]=sh(i,r,{}),s),{});yT=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),vT=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),bT=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in na||ae.autoFetchSvg,n=sh(N4,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});ET=n.names,wT=n.unicodes,mp=nu(ae.styleDefault,{family:ae.familyDefault})};b4(t=>{mp=nu(t.styleDefault,{family:ae.familyDefault})});TT();function gp(t,e){return(yT[t]||{})[e]}function M4(t,e){return(vT[t]||{})[e]}function vs(t,e){return(bT[t]||{})[e]}function IT(t){return ET[t]||{prefix:null,iconName:null}}function F4(t){const e=wT[t],n=gp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ts(){return mp}const AT=()=>({prefix:null,iconName:null,rest:[]});function U4(t){let e=Lt;const n=_T.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return iT.forEach(r=>{(t.includes(n[r])||t.some(s=>D4[r].includes(s)))&&(e=r)}),e}function nu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Lt}=e,r=p4[n][t];if(n===eu&&!t)return"fad";const s=Ry[n][t]||Ry[n][r],i=t in xn.styles?t:null;return s||i||null}function j4(t){let e=[],n=null;return t.forEach(r=>{const s=V4(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function ky(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=vf.concat(n4),i=ky(t.filter(d=>s.includes(d))),o=ky(t.filter(d=>!vf.includes(d))),a=i.filter(d=>(r=d,!sT.includes(d))),[l=null]=a,u=U4(i),h=z(z({},j4(o)),{},{prefix:nu(l,{family:u})});return z(z(z({},h),q4({values:t,family:u,styles:na,config:ae,canonical:h,givenPrefix:r})),B4(n,r,h))}function B4(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?IT(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!na.far&&na.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const $4=iT.filter(t=>t!==Lt||t!==eu),H4=Object.keys(yf).filter(t=>t!==Lt).map(t=>Object.keys(yf[t])).flat();function q4(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===eu,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&$4.includes(n)&&(Object.keys(i).find(p=>H4.includes(p))||o.autoFetchSvg)){const p=GM.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=vs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=ts()||"fas"),r}class W4{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=z(z({},this.definitions[i]||{}),s[i]),Rf(i,s[i]);const o=fp[Lt][i];o&&Rf(o,s[i]),TT()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let Oy=[],ri={};const mi={},z4=Object.keys(mi);function K4(t,e){let{mixoutsTo:n}=e;return Oy=t,ri={},Object.keys(mi).forEach(r=>{z4.indexOf(r)===-1&&delete mi[r]}),Oy.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ri[o]||(ri[o]=[]),ri[o].push(i[o])})}r.provides&&r.provides(mi)}),n}function Sf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(ri[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function xs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ri[t]||[]).forEach(i=>{i.apply(null,n)})}function ns(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mi[t]?mi[t].apply(null,e):void 0}function Cf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ts();if(e)return e=vs(n,e)||e,Cy(RT.definitions,n,e)||Cy(xn.styles,n,e)}const RT=new W4,G4=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,xs("noAuto")},Q4={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(xs("beforeI2svg",t),ns("pseudoElements2svg",t),ns("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,k4(()=>{X4({autoReplaceSvgRoot:e}),xs("watch",t)})}},Y4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=nu(t[0]);return{prefix:n,iconName:vs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(m4))){const e=ru(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ts(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ts();return{prefix:e,iconName:vs(e,t)||t}}}},en={noAuto:G4,config:ae,dom:Q4,parse:Y4,library:RT,findIconDefinition:Cf,toHtml:ba},X4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$e}=t;(Object.keys(xn.styles).length>0||ae.autoFetchSvg)&&mr&&ae.autoReplaceSvg&&en.dom.i2svg({node:e})};function su(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ba(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=$e.createElement("div");return n.innerHTML=t.html,n.children}}),t}function J4(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(pp(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=tu(z(z({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Z4(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},s),{},{id:o}),children:r}]}]}function _p(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,w=ZM.includes(r),k=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let x={children:[],attributes:z(z({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)})};const N=w&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(x.attributes[Os]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||ta())},children:[a]}),delete x.attributes.title);const C=z(z({},x),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:z(z({},N),h.styles)}),{children:y,attributes:R}=n.found&&e.found?ns("generateAbstractMask",C)||{children:[],attributes:{}}:ns("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=y,C.attributes=R,o?Z4(C):J4(C)}function xy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=z(z(z({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[Os]="");const u=z({},o.styles);pp(s)&&(u.transform=S4({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=tu(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function eF(t){const{content:e,title:n,extra:r}=t,s=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tu(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ih}=xn;function Pf(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(nh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(nh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(nh.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const tF={found:!1,width:512,height:512};function nF(t,e){!lT&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function kf(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=ts()),new Promise((r,s)=>{if(n==="fa"){const i=IT(t);t=i.iconName||t,e=i.prefix||e}if(t&&e&&ih[e]&&ih[e][t]){const i=ih[e][t];return r(Pf(i))}nF(t,e),r(z(z({},tF),{},{icon:ae.showMissingIcons&&t?ns("missingIconAbstract")||{}:{}}))})}const Ny=()=>{},Of=ae.measurePerformance&&ic&&ic.mark&&ic.measure?ic:{mark:Ny,measure:Ny},fo='FA "6.7.2"',rF=t=>(Of.mark("".concat(fo," ").concat(t," begins")),()=>ST(t)),ST=t=>{Of.mark("".concat(fo," ").concat(t," ends")),Of.measure("".concat(fo," ").concat(t),"".concat(fo," ").concat(t," begins"),"".concat(fo," ").concat(t," ends"))};var yp={begin:rF,end:ST};const bc=()=>{};function Dy(t){return typeof(t.getAttribute?t.getAttribute(Os):null)=="string"}function sF(t){const e=t.getAttribute?t.getAttribute(up):null,n=t.getAttribute?t.getAttribute(hp):null;return e&&n}function iF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function oF(){return ae.autoReplaceSvg===!0?Tc.replace:Tc[ae.autoReplaceSvg]||Tc.replace}function aF(t){return $e.createElementNS("http://www.w3.org/2000/svg",t)}function cF(t){return $e.createElement(t)}function CT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?aF:cF}=e;if(typeof t=="string")return $e.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(CT(i,{ceFn:n}))}),r}function lF(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Tc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(CT(n),e)}),e.getAttribute(Os)===null&&ae.keepOriginalSource){let n=$e.createComment(lF(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~dp(e).indexOf(ae.replacementClass))return Tc.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ba(i)).join(`
`);e.setAttribute(Os,""),e.innerHTML=s}};function Ly(t){t()}function PT(t,e){const n=typeof e=="function"?e:bc;if(t.length===0)n();else{let r=Ly;ae.mutateApproach===f4&&(r=es.requestAnimationFrame||Ly),r(()=>{const s=oF(),i=yp.begin("mutate");t.map(s),i(),n()})}}let vp=!1;function kT(){vp=!0}function xf(){vp=!1}let ll=null;function Vy(t){if(!by||!ae.observeMutations)return;const{treeCallback:e=bc,nodeCallback:n=bc,pseudoElementsCallback:r=bc,observeMutationsRoot:s=$e}=t;ll=new by(i=>{if(vp)return;const o=ts();$i(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Dy(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Dy(a.target)&&~y4.indexOf(a.attributeName))if(a.attributeName==="class"&&sF(a.target)){const{prefix:l,iconName:u}=ru(dp(a.target));a.target.setAttribute(up,l||o),u&&a.target.setAttribute(hp,u)}else iF(a.target)&&n(a.target)})}),mr&&ll.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function uF(){ll&&ll.disconnect()}function hF(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function fF(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=ru(dp(t));return s.prefix||(s.prefix=ts()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=M4(s.prefix,t.innerText)||gp(s.prefix,Af(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function dF(t){const e=$i(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||ta()):(e["aria-hidden"]="true",e.focusable="false")),e}function pF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function My(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=fF(t),i=dF(t),o=Sf("parseNodeAttributes",{},t);let a=e.styleParser?hF(t):[];return z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:mF}=xn;function OT(t){const e=ae.autoReplaceSvg==="nest"?My(t,{styleParser:!1}):My(t);return~e.extra.classes.indexOf(hT)?ns("generateLayersText",t,e):ns("generateSvgReplacementMutation",t,e)}function gF(){return[...YM,...vf]}function Fy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=$e.documentElement.classList,r=h=>n.add("".concat(Ay,"-").concat(h)),s=h=>n.remove("".concat(Ay,"-").concat(h)),i=ae.autoFetchSvg?gF():sT.concat(Object.keys(mF));i.includes("fa")||i.push("fa");const o=[".".concat(hT,":not([").concat(Os,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Os,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=$i(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=yp.begin("onTree"),u=a.reduce((h,d)=>{try{const p=OT(d);p&&h.push(p)}catch(p){lT||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{PT(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function _F(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;OT(t).then(n=>{n&&PT([n],e)})}function yF(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Cf(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Cf(s||{})),t(r,z(z({},n),{},{mask:s}))}}const vF=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return su(z({type:"icon"},t),()=>(xs("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||ta()):(u["aria-hidden"]="true",u.focusable="false")),_p({icons:{main:Pf(g),mask:s?Pf(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:z(z({},On),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var EF={mixout(){return{icon:yF(vF)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Fy,t.nodeCallback=_F,t}}},provides(t){t.i2svg=function(e){const{node:n=$e,callback:r=()=>{}}=e;return Fy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([kf(r,o),u.iconName?kf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[k,x]=w;p([e,_p({icons:{main:k,mask:x},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=tu(o);a.length>0&&(r.style=a);let l;return pp(i)&&(l=ns("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},wF={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return su({type:"layer"},()=>{xs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},bF={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return su({type:"counter",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),eF({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},TF={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return su({type:"text",content:t},()=>(xs("beforeDOMElementCreation",{content:t,params:e}),xy({content:t,transform:z(z({},On),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(nT){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,xy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const IF=new RegExp('"',"ug"),Uy=[1105920,1112319],jy=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),KM),u4),r4),Nf=Object.keys(jy).reduce((t,e)=>(t[e.toLowerCase()]=jy[e],t),{}),AF=Object.keys(Nf).reduce((t,e)=>{const n=Nf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function RF(t){const e=t.replace(IF,""),n=x4(e,0),r=n>=Uy[0]&&n<=Uy[1],s=e.length===2?e[0]===e[1]:!1;return{value:Af(s?e[0]:e),isSecondary:r||s}}function SF(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Nf[n]||{})[s]||AF[n]}function By(t,e){const n="".concat(h4).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=$i(t.children).filter(p=>p.getAttribute(wf)===e)[0],a=es.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(g4),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=SF(l,h);const{value:w,isSecondary:k}=RF(p),x=u[0].startsWith("FontAwesome");let N=gp(g,w),C=N;if(x){const y=F4(w);y.iconName&&y.prefix&&(N=y.iconName,g=y.prefix)}if(N&&!k&&(!o||o.getAttribute(up)!==g||o.getAttribute(hp)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);const y=pF(),{extra:R}=y;R.attributes[wf]=e,kf(N,g).then(D=>{const V=_p(z(z({},y),{},{icons:{main:D,mask:AT()},prefix:g,iconName:C,extra:R,watchable:!0})),T=$e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=V.map(v=>ba(v)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function CF(t){return Promise.all([By(t,"::before"),By(t,"::after")])}function PF(t){return t.parentNode!==document.head&&!~d4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $y(t){if(mr)return new Promise((e,n)=>{const r=$i(t.querySelectorAll("*")).filter(PF).map(CF),s=yp.begin("searchPseudoElements");kT(),Promise.all(r).then(()=>{s(),xf(),e()}).catch(()=>{s(),xf(),n()})})}var kF={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=$y,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$e}=e;ae.searchPseudoElements&&$y(n)}}};let Hy=!1;var OF={mixout(){return{dom:{unwatch(){kT(),Hy=!0}}}},hooks(){return{bootstrap(){Vy(Sf("mutationObserverCallbacks",{}))},noAuto(){uF()},watch(t){const{observeMutationsRoot:e}=t;Hy?xf():Vy(Sf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const qy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var xF={mixout(){return{parse:{transform:t=>qy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=qy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:z({},p.outer),children:[{tag:"g",attributes:z({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:z(z({},n.icon.attributes),p.path)}]}]}}}};const oh={x:0,y:0,width:"100%",height:"100%"};function Wy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function NF(t){return t.tag==="g"?t.children:[t]}var DF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ru(n.split(" ").map(s=>s.trim())):AT();return r.prefix||(r.prefix=ts()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=R4({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:z(z({},oh),{},{fill:"white"})},w=u.children?{children:u.children.map(Wy)}:{},k={tag:"g",attributes:z({},p.inner),children:[Wy(z({tag:u.tag,attributes:z(z({},u.attributes),p.path)},w))]},x={tag:"g",attributes:z({},p.outer),children:[k]},N="mask-".concat(o||ta()),C="clip-".concat(o||ta()),y={tag:"mask",attributes:z(z({},oh),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:NF(d)},y]};return n.push(R,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(N,")")},oh)}),{children:n,attributes:r}}}},LF={provides(t){let e=!1;es.matchMedia&&(e=es.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=z(z({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},VF={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},MF=[P4,EF,wF,bF,TF,kF,OF,xF,DF,LF,VF];K4(MF,{mixoutsTo:en});en.noAuto;const FF=en.config,UF=en.library;en.dom;const Df=en.parse;en.findIconDefinition;en.toHtml;const jF=en.icon;en.layer;en.text;en.counter;function zy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Jn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zy(Object(n),!0).forEach(function(r){qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function BF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $F(t){var e=BF(t,"string");return typeof e=="symbol"?e:e+""}function ul(t){"@babel/helpers - typeof";return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ul(t)}function qt(t,e,n){return e=$F(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function HF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function qF(t,e){if(t==null)return{};var n=HF(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var WF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xT={exports:{}};(function(t){(function(e){var n=function(N,C,y){if(!u(C)||d(C)||p(C)||g(C)||l(C))return C;var R,D=0,V=0;if(h(C))for(R=[],V=C.length;D<V;D++)R.push(n(N,C[D],y));else{R={};for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(R[N(T,y)]=n(N,C[T],y))}return R},r=function(N,C){C=C||{};var y=C.separator||"_",R=C.split||/(?=[A-Z])/;return N.split(R).join(y)},s=function(N){return w(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(C,y){return y?y.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var C=s(N);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(N,C){return r(N,C).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},h=function(N){return a.call(N)=="[object Array]"},d=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},w=function(N){return N=N-0,N===N},k=function(N,C){var y=C&&"process"in C?C.process:C;return typeof y!="function"?N:function(R,D){return y(R,N,D)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(N,C){return n(k(s,C),N)},decamelizeKeys:function(N,C){return n(k(o,C),N,C)},pascalizeKeys:function(N,C){return n(k(i,C),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(WF)})(xT);var zF=xT.exports,KF=["class","style"];function GF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=zF.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function QF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function NT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return NT(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=QF(h);break;case"style":l.style=GF(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=qF(n,KF);return vt(t.tag,Jn(Jn(Jn({},e),{},{class:s.class,style:Jn(Jn({},s.style),o)},s.attrs),a),r)}var DT=!1;try{DT=!0}catch{}function YF(){if(!DT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ah(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qt({},t,e):{}}function XF(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qt(qt(qt(qt(qt(qt(qt(qt(qt(qt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),qt(qt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ky(t){if(t&&ul(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Df.icon)return Df.icon(t);if(t===null)return null;if(ul(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var JF=In({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return Ky(e.icon)}),i=Ue(function(){return ah("classes",XF(e))}),o=Ue(function(){return ah("transform",typeof e.transform=="string"?Df.transform(e.transform):e.transform)}),a=Ue(function(){return ah("mask",Ky(e.mask))}),l=Ue(function(){return jF(s.value,Jn(Jn(Jn(Jn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});vn(l,function(h){if(!h)return YF("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ue(function(){return l.value?NT(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ZF={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const eU={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},tU=eU,nU={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},rU={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},sU={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};FF.autoAddCss=!1;UF.add(ZF,rU,tU,sU,nU);const iU=Zt(t=>{t.vueApp.component("font-awesome-icon",JF)}),oU=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let LT;const iu=t=>LT=t,VT=Symbol();function Lf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xo||(xo={}));function aU(){const t=Hf(!0),e=t.run(()=>Et({}));let n=[],r=[];const s=Yf({install(i){iu(s),s._a=i,i.provide(VT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!oU?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const MT=()=>{};function Gy(t,e,n,r=MT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&oa()&&Ac(s),s}function Ks(t,...e){t.slice().forEach(n=>{n(...e)})}const cU=t=>t(),Qy=Symbol(),ch=Symbol();function Vf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Lf(s)&&Lf(r)&&t.hasOwnProperty(n)&&!Je(r)&&!rr(r)?t[n]=Vf(s,r):t[n]=r}return t}const lU=Symbol();function uU(t){return!Lf(t)||!t.hasOwnProperty(lU)}const{assign:Ir}=Object;function hU(t){return!!(Je(t)&&t.effect)}function fU(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=zI(n.state.value[t]);return Ir(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Yf(Ue(()=>{iu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=FT(t,u,e,n,r,!0),l}function FT(t,e,n={},r,s,i){let o;const a=Ir({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Et({});let k;function x(v){let _;u=h=!1,typeof v=="function"?(v(r.state.value[t]),_={type:xo.patchFunction,storeId:t,events:g}):(Vf(r.state.value[t],v),_={type:xo.patchObject,payload:v,storeId:t,events:g});const b=k=Symbol();Bn().then(()=>{k===b&&(u=!0)}),h=!0,Ks(d,_,r.state.value[t])}const N=i?function(){const{state:_}=n,b=_?_():{};this.$patch(P=>{Ir(P,b)})}:MT;function C(){o.stop(),d=[],p=[],r._s.delete(t)}const y=(v,_="")=>{if(Qy in v)return v[ch]=_,v;const b=function(){iu(r);const P=Array.from(arguments),S=[],I=[];function ge(se){S.push(se)}function ve(se){I.push(se)}Ks(p,{args:P,name:b[ch],store:D,after:ge,onError:ve});let Z;try{Z=v.apply(this&&this.$id===t?this:D,P)}catch(se){throw Ks(I,se),se}return Z instanceof Promise?Z.then(se=>(Ks(S,se),se)).catch(se=>(Ks(I,se),Promise.reject(se))):(Ks(S,Z),Z)};return b[Qy]=!0,b[ch]=_,b},R={_p:r,$id:t,$onAction:Gy.bind(null,p),$patch:x,$reset:N,$subscribe(v,_={}){const b=Gy(d,v,_.detached,()=>P()),P=o.run(()=>vn(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&v({storeId:t,type:xo.direct,events:g},S)},Ir({},l,_)));return b},$dispose:C},D=fr(R);r._s.set(t,D);const T=(r._a&&r._a.runWithContext||cU)(()=>r._e.run(()=>(o=Hf()).run(()=>e({action:y}))));for(const v in T){const _=T[v];if(Je(_)&&!hU(_)||rr(_))i||(w&&uU(_)&&(Je(_)?_.value=w[v]:Vf(_,w[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const b=y(_,v);T[v]=b,a.actions[v]=_}}return Ir(D,T),Ir(Re(D),T),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:v=>{x(_=>{Ir(_,v)})}}),r._p.forEach(v=>{Ir(D,o.run(()=>v({store:D,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(D.$state,w),u=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function dU(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=ed();return a=a||(u?Nt(VT,null):null),a&&iu(a),a=LT,a._s.has(r)||(i?FT(r,e,s,a):fU(r,s,a)),a._s.get(r)}return o.$id=r,o}function pU(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function mU(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const gU=Zt(t=>{const e=aU();t.vueApp.use(e)});var Yy=/^(GTM|G)-[0-9A-Z]+$/;function lh(t){if(typeof t!="string"||!Yy.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Yy}).${n}`)}}function po(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function gi(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(po(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function _U(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var yU=class{constructor(t){rn(this,"id");rn(this,"options");rn(this,"scriptElements",[]);rn(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)lh(typeof e=="string"?e:e.id);else lh(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!_U(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=gi(n,{...this.options}):r=gi(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=gi(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?po(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&po(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&po(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&po(window,this.options.dataLayerName).push(t)}},mt;function vU(t,e={id:""}){e={trackOnNextTick:!1,...e},mt=new yU(e),t.config.globalProperties.$gtm=mt,mt.isInBrowserContext()&&(e.vueRouter&&EU(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),mt.options.enabled&&mt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")gi(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),gi(n.id,r)}}):gi(e.id,e))),t.provide("gtm",e)}function EU(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,w;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?mt!=null&&mt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(mt!=null&&mt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((w=(g=e.options)==null?void 0:g.history)==null?void 0:w.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Bn(()=>{mt==null||mt.trackView(u,d,h)}):mt==null||mt.trackView(u,d,h)})}function wU(t){return{install:e=>vU(e,t)}}const bU=Zt(t=>{const e=Ds().public,n=r2("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(wU({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:wt(),trackOnNextTick:!1}))}),TU=[IC,xC,ek,nk,rk,sk,ok,ak,ck,MM,iU,gU,bU],IU=In({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return bs(ha,Zn(r)),()=>vt(t.vnode,{ref:t.vnodeRef})}}),AU=In({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=De(),i=Et(),o=Nt(ha,null);let a;r({pageRef:i});const l=Nt(BE,null);let u;const h=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",h);wt().beforeEach(p)}t.pageKey&&vn(()=>t.pageKey,(p,g)=>{p!==g&&s.callHook("page:loading:start")});let d=!1;return()=>vt(h0,{name:t.name,route:t.route,...e},{default:p=>{const g=SU(o,p.route,p.Component),w=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!w)return u;h();return}if(u&&l&&!l.isCurrent(p.route))return u;if(g&&o&&(!l||l!=null&&l.isCurrent(o)))return w?u:null;const k=$h(p,t.pageKey);!s.isHydrating&&!CU(o,p.route,p.Component)&&a===k&&(s.callHook("page:loading:end"),d=!0),a=k;const x=!!(t.transition??p.route.meta.pageTransition??Ph),N=x&&RU([t.transition,p.route.meta.pageTransition,Ph,{onAfterLeave:()=>{s.callHook("page:transition:finish",p.Component)}}].filter(Boolean)),C=t.keepalive??p.route.meta.keepalive??QR;return u=f0(x&&N,jP(C,vt(rd,{suspensible:!0,onPending:()=>s.callHook("page:start",p.Component),onResolve:()=>{Bn(()=>s.callHook("page:finish",p.Component).then(()=>{if(!d)return s.callHook("page:loading:end");d=!1}).finally(h))}},{default:()=>{const y=vt(IU,{key:k||void 0,vnode:n.default?vt(Ot,void 0,n.default(p)):p.Component,route:p.route,renderKey:k||void 0,trackRootNodes:x,vnodeRef:i});return C&&(y.type.name=p.Component.type.name||p.Component.type.__name||"RouteProvider"),y}}))).default(),u}})}});function RU(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?dd(n.onAfterLeave):void 0}));return UE(...e)}function SU(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&$h({route:e,Component:n})!==$h({route:t,Component:n})}function CU(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const PU=In({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>vt(Vr[t.name],t.layoutProps,e.slots)}}),kU=In({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=De(),r=Nt(ha),s=r===cd()?LP():r,i=Ue(()=>{let l=Qe(t.name)??s.meta.layout??"default";return l&&!(l in Vr)&&t.fallback&&(l=Qe(t.fallback)),l}),o=Et();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);wt().beforeEach(l)}return()=>{const l=i.value&&i.value in Vr,u=s.meta.layoutTransition??GR;return f0(l&&u,{default:()=>vt(rd,{suspensible:!0,onResolve:()=>{Bn(a)}},{default:()=>vt(OU,{layoutProps:mE(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),OU=In({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&bs(BE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Vr)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(PU,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),ou=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xU={};function NU(t,e){const n=AU,r=kU;return $t(),Xn(r,null,{default:Sn(()=>[be(n)]),_:1})}const DU=ou(xU,[["render",NU]]),LU=ad("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Xy=dU("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=De(),r=wt();try{const s=await Ux(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=De();try{await Hx(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=De();$x(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),VU={class:"navbar navbar-expand-md navbar-light bg-light"},MU={class:"navbar-nav"},FU={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},UU={class:"navbar-nav ml-auto"};function jU(t,e,n,r,s,i){const o=l2;return $t(),jo("nav",VU,[be(o,{class:"navbar-brand",to:"/"},{default:Sn(()=>e[2]||(e[2]=[an("Who's Jimmy")])),_:1}),He("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[He("span",{class:"navbar-toggler-icon"},null,-1)])),He("div",{class:sa(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[He("ul",MU,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:Sn(()=>e[4]||(e[4]=[an("Bio")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:Sn(()=>e[5]||(e[5]=[an("Portfolio ")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:Sn(()=>e[6]||(e[6]=[an("For Sale")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:Sn(()=>e[7]||(e[7]=[an("Cool Stuff")])),_:1}),be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:Sn(()=>e[8]||(e[8]=[an("Contact Us")])),_:1})])],2),s.isAuth?($t(),jo("div",FU,[He("ul",UU,[be(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:Sn(()=>[an($f(t.user?t.user.email:""),1)]),_:1}),He("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):n1("",!0)])}const BU={data(){return{visible:!1,isAuth:!1}},computed:{...pU(Xy,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...mU(Xy,{signOut:"signOut"})}},$U=ou(BU,[["render",jU]]),HU={class:"page-footer font-small bg-light navbar-fixed-bottom"},qU={class:"container"},WU={class:"py-3 pt-3"},zU={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},KU={href:"https://www.facebook.com/whosjimmy"},GU={href:"https://twitter.com/jimmyclaws"},QU={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function YU(t,e){const n=Fo("font-awesome-icon");return $t(),jo("footer",HU,[He("div",qU,[He("div",WU,[He("a",zU,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),He("a",KU,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),He("a",GU,[be(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),He("a",QU,[be(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=He("div",{class:"footer-copyright text-center font-small"},[He("div",null,[an("© 2024 Copyright: "),He("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),He("div",null,"Disclaimer: All images are copyright to their respective owners."),He("div",null,[an("A "),He("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),an(" creation.")])],-1))])}const XU={},JU=ou(XU,[["render",YU],["__scopeId","data-v-063d9b19"]]),ZU={class:"text-center my-0 page"},e6={class:"body"},t6={components:{appHeader:$U,appFooter:JU},head(){return{title:"Error"}}},n6=In({...t6,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=De();Eg({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{Eg({title:n.public.SITE_TITLE}),HE({redirect:"/"})};return(i,o)=>{var u;const a=Fo("app-header"),l=Fo("app-footer");return $t(),jo("div",ZU,[be(a),He("div",e6,[o[0]||(o[0]=He("img",{src:LU,alt:"Error Image"},null,-1)),He("h2",null,"Error: "+$f((u=t.error)==null?void 0:u.statusCode),1),He("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),be(l)])}}}),r6=ou(n6,[["__scopeId","data-v-a467a495"]]),s6={key:0},Jy={__name:"nuxt-root",setup(t){const e=()=>null,n=De(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);wt().beforeEach(l)}const s=!1;bs(ha,cd()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Al(),o=!1;$v((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),wS(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>ti(l)),!1});const a=!1;return(l,u)=>($t(),Xn(rd,{onResolve:Qe(r)},{default:Sn(()=>[Qe(o)?($t(),jo("div",s6)):Qe(i)?($t(),Xn(Qe(r6),{key:1,error:Qe(i)},null,8,["error"])):Qe(a)?($t(),Xn(Qe(e),{key:2,context:Qe(a)},null,8,["context"])):Qe(s)?($t(),Xn(EA(Qe(s)),{key:3})):($t(),Xn(Qe(DU),{key:4}))]),_:1},8,["onResolve"]))}};let Zy;{let t;Zy=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?$1(Jy):B1(Jy),s=tS({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Rl(l)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await sS(s,TU)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(JR),await s.hooks.callHook("app:mounted",r),await Bn()}catch(l){i(l)}return r},t=Zy().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{JU as $,Je as A,fr as B,la as C,Ue as D,rr as E,Ot as F,zr as G,Nt as H,bs as I,Bn as J,ad as K,Fo as L,u6 as M,pl as N,Xn as O,l6 as P,sa as Q,o6 as R,t1 as S,g1 as T,ha as U,m6 as V,ES as W,r2 as X,f6 as Y,$U as Z,ou as _,mU as a,AU as a0,dU as a1,De as a2,_6 as a3,v6 as a4,E6 as a5,y6 as a6,w6 as a7,He as b,jo as c,be as d,Sn as e,l2 as f,an as g,Qe as h,p6 as i,d6 as j,n1 as k,NM as l,pU as m,I6 as n,$t as o,b6 as p,T6 as q,c6 as r,wl as s,$f as t,Xy as u,h6 as v,a6 as w,Et as x,mA as y,vn as z};
